
var messageCounter = document.getElementById('messageCount').innerHTML;
window.enableAdapter = true; // enable adapter.js
//document.getElementById('btn-save-mom').disabled = true;
//document.getElementById('input-text-chat').disabled = true;
// document.getElementById('btn-leave-room').disabled = true;
// ......................................................
// .......................UI Code........................
// ......................................................
var alertService = window.customAlertService;
var isMute = false;
var isShareScreen = false;
var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
var edge = ua.indexOf("edge") > -1;
console.log('edge : ' + edge);
var safari = (ua.indexOf("safari") > -1) && (ua.indexOf("chrome") === -1);
var isFireFox = ua.indexOf("firefox") > -1;
const mq = window.matchMedia( "(max-width: 768px)" );
document.getElementById('share-screen').onclick = function () {
    if(isShareScreen){
        alertService.warning("Screen sharing already in progress. Kindly stop current shared screen and try again.");
        return false;
    }
    try {
        isShareScreen = true;
        connection.addStream({
            screen: true,
            oneway: true
        });
    } catch (error) {
        console.log(error);
    }
    this.setAttribute('class', 'btn-share-on');
    // this.disabled = true;
};

document.getElementById('btn-mute').onclick = function () {
    try {
        var streamid = connection.streamEvents.selectFirst().streamid;
        if (!isMute || document.getElementById('btn-mute').children[0].className.indexOf('fa-microphone-slash') >= 0) {
            connection.streamEvents.selectAll({
                local: true
            }).forEach(element => {
                if (!element.stream.isScreen) { element.stream.mute("audio"); }
            });
            isMute = true;
        } else {
            connection.streamEvents.selectAll({
                local: true
            }).forEach(element => {
                if (!element.stream.isScreen) { element.stream.unmute(); }
            });
            isMute = false;
        }
    } catch (error) {
        console.log(error);
    }

};
document.getElementById('open-room').onclick = function () {
    if (document.getElementById('room-id').value === 'Enter Meeting Id') {
        alert('Enter valid meeting Id');
        return false;
    }
    disableInputButtons();
    connection.openOrJoin(document.getElementById('room-id').value, function () {
        showRoomURL(connection.sessionid);
        document.getElementById('meeting-error').display = 'none';
    });
};

document.getElementById('join-room').onclick = function () {
    disableInputButtons();
    connection.join(document.getElementById('room-id').value);
};

document.getElementById('open-or-join-room').onclick = function () {
    disableInputButtons();
    connection.openOrJoin(document.getElementById('room-id').value, function (isRoomExists, roomid) {
        if (!isRoomExists) {
            showRoomURL(roomid);
        }
    });
};

document.getElementById('btn-end-meeting').onclick = function () {
    connection.closeEntireSession(function () {
        alertService.error('Entire session has been closed.');
    });
}

function onDetectRTCLoaded() {
    var videoValue = DetectRTC.hasWebcam;
    if (!videoValue) {
        alertService.warning('Switching to audio mode.', 'Web Cam not detected');
        document.getElementById('disable-video').style.visibility = 'hidden';
        //document.getElementById('disable-video').style.display = 'none';
    }
    videoValue = false;
    connection.session = {
        audio: true,
        video: videoValue,
        data: true
    };

    connection.mediaConstraints = {
        audio: true,
        video: videoValue
    };
    connection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: true,
        OfferToReceiveVideo: true
    };
}

function reloadDetectRTC(callback) {
    DetectRTC.load(function () {
        onDetectRTCLoaded();

        if (callback && typeof callback == 'function') {
            callback();
        }
    });
}

DetectRTC.load(function () {
    reloadDetectRTC();

    try {
        if (DetectRTC.MediaDevices[0] && DetectRTC.MediaDevices[0].isCustomLabel) {
            navigator.mediaDevices.getUserMedia({
                audio: true,
                video: true
            }).then(function (stream) {
                var video;
                try {
                    video = document.createElement('video');
                    video.muted = true;
                    video.volume = 0;
                    video.src = URL.createObjectURL(stream);
                    video.style.display = 'none';
                    video.style.opacity = 0;
                    (document.body || document.documentElement).appendChild(video);
                } catch (e) { }

                reloadDetectRTC(function () {
                    // release camera
                    stream.getTracks().forEach(function (track) {
                        track.stop();
                    });

                    if (video && video.parentNode) {
                        video.parentNode.removeChild(video);
                    }
                });
            }).catch(reloadDetectRTC);
            return;
        }
    } catch (e) { }

    onDetectRTCLoaded();
});

document.getElementById('disable-video').onclick = function () {
    this.disabled = true;

    // if (isShareScreen) {
    //     isShareScreen = false;
    //     alertService.warning('You will have to share screen again!', 'screen share');
    // }
    setTimeout(function () {
        document.getElementById('disable-video').disabled = false;
    }, 6000);
    var videoValue = this.value == "true";
    if (connection.streamEvents.selectFirst({
        local: true
    }) != undefined) {
        connection.streamEvents.selectAll({
            local: true
        }).forEach(streamElement => {
            if (!streamElement.stream.isScreen) {
                streamElement.stream.stop();
            }
        });
    }
    connection.session = {
        audio: true,
        video: videoValue,
        data: true
    };

    connection.mediaConstraints = {
        audio: true,
        video: videoValue
    };
    connection.sdpConstraints.mandatory = {
        OfferToReceiveAudio: true,
        OfferToReceiveVideo: videoValue
    };
    connection.addStream({
        audio: true,
        video: videoValue
    });
    if (isMute) {
        setTimeout(function () {
            connection.streamEvents.selectAll({
                local: true
            }).forEach(element => {
                if (!element.stream.isScreen) {
                    element.stream.mute("audio");
                }
            });
        }, 6000);
    }
}
// document.getElementById('btn-leave-room').onclick = function () {
//    // this.disabled = true;
//     // debugger;
//     exitMeeting();
// };
document.addEventListener("click", function(e){
    if(e.target && e.target.id === "btn-leave-room"){
        exitMeeting();
    }
  });
// ......................................................
// ................FileSharing/TextChat Code.............
// ......................................................

document.getElementById('share-file').onclick = function () {
    var fileSelector = new FileSelector();
    fileSelector.selectSingleFile(function (file) {
        connection.send(file);
    });
};

document.getElementById('input-text-chat').onkeyup = function (e) {
    if (e.keyCode != 13) return;
    if (e.keyCode == 13 && e.shiftKey) {
        this.value += "\n";
        return;
    }
    // removing trailing/leading whitespace
    this.value = this.value.replace(/^\s+|\s+$/g, '');
    if (!this.value.length) return;

    connection.send(this.value);
    appendDIV(this.value);
    this.value = '';
};

document.getElementById('alternate-send-chat').onclick = function (e) {
    this.value = document.getElementById('input-text-chat').value.replace(/^\s+|\s+$/g, '');
    if (!this.value.length) return;

    connection.send(this.value);
    appendDIV(this.value);
    document.getElementById('input-text-chat').value = '';
};

var chatContainer = document.querySelector('.chat-output');

function exitMeeting() {
    connection.leave();
    connection.attachStreams.forEach(function (stream) {
        stream.stop();
    });
    //remove parent
    connection.streamEvents.selectAll().forEach(function (streamEvent) {
        var mediaElement = document.getElementById(streamEvent.streamid + 'parent');
        if (mediaElement) {
            streamEvent.stream.stop();
            mediaElement.parentNode.removeChild(mediaElement);
        }
    });
    document.getElementById('meeting-error').innerText = 'You have left the meeting.';
    document.getElementById('share-file').style.display = 'none';
    document.getElementById('disable-video').style.display = 'none';
    document.getElementById('share-screen').style.display = 'none';
    document.getElementById('btn-start-recording').style.display = 'none';
    document.getElementById('input-text-chat').disabled = true;
    document.getElementById('btn-mute').disabled = true;
    document.getElementById('open-room').disabled = true;
}

function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    // return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
    return strTime;
}

function appendDIV(event) {
    var div = document.createElement('div');
    //   div.className = 'chat-background';
    var message = event.data || event;
    var user = event.extra || 'You';
    html = '<p>' + message + '</p>';
    var senderNameArray = setAttendeeName(user);
    if (senderNameArray.length > 0) {
        if (senderNameArray.length < 3) {
            var firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1);
        } else {
            var firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1) + ' '
                + senderNameArray[2].charAt(0).toUpperCase() + senderNameArray[2].slice(1);
        }
    }
    
    if (firstNameUpperCase === 'You') {
        div.className = 'chat-background-attendee';
        html += '<span class="time-right">';
    } else {
        div.className = 'chat-background-invitee-attendee';
        html += '<span class="time-left">';
        if (document.getElementById('chatTab').className.indexOf('active') == -1) {
            messageCounter++;
            var messageCounterEl = document.getElementById('messageCount');
            if (messageCounter > 0) {
                document.getElementById("messageCount").setAttribute("style", "display:block;");
                alertService.info("You have new message" , "Notification");
                if(messageCounter > 99) {
                    messageCounterEl.innerHTML = "99+";
                } else{
                    messageCounterEl.innerHTML = messageCounter;
                }
            }
        }
    }
    html += formatDate(new Date()) + ' <i class="fa fa-user"></i>&nbsp; ' + firstNameUpperCase + '</span>'
    div.innerHTML = html;

    chatContainer.insertBefore(div, chatContainer.lastChild);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
    // document.getElementById('chatAnchor').click();
    document.getElementById('input-text-chat').focus();
}

// ......................................................
// ..................RTCMultiConnection Code.............
// ......................................................
(function () {
    var params = {},
        r = /([^&=]+)=?([^&]*)/g;

    function d(s) {
        return decodeURIComponent(s.replace(/\+/g, ' '));
    }
    var match, search = window.location.hash.substring(9);
    while (match = r.exec(search.substring(1)))
        params[d(match[1])] = d(match[2]);
    window.params = params;
})();


var connection = new RTCMultiConnection();

connection.socketCustomEvent = window.params.meetingCode;
// to make sure file-saver dialog is not invoked.
connection.autoSaveToDisk = false;
var isHost = false;
// Using getScreenId.js to capture screen from any domain
connection.getScreenConstraints = function (callback) {
    getScreenConstraints(function (error, screen_constraints) {
        if (!error) {
            screen_constraints = connection.modifyScreenConstraints(screen_constraints);
            callback(error, screen_constraints);
            return;
        } else if(error=="PermissionDeniedError"){
            isShareScreen=false;
            document.getElementById("share-screen").setAttribute('class', 'btn-sec');
        }else if (screen_constraints.mandatory) {
            document.getElementById('share-screen').disabled = false;
            var url = '/#/error/sharescreen';
            var popup_window = window.open(url, "myWindow", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=500, height=500");
            try {
                popup_window.focus();
            } catch (e) {
                //   alertService.warning("Pop-up Blocker is enabled! Please add this site to your exception list , and refresh the page");
            }
        } else
            throw error;
    });
};

// by default, socket.io server is assumed to be deployed on your own URL
// connection.socketURL = '/';

// comment-out below line if you do not have your own socket.io server
connection.socketURL = 'https://cfscommunicatorsocket.herokuapp.com:443/';

connection.socketMessageEvent = 'meeting';
// 60k -- assuming receiving client is chrome
var chunk_size = 60 * 1000;
connection.chunkSize = chunk_size;
connection.extra = localStorage.getItem('loggedInuserName');
connection.enableFileSharing = true; // by default, it is "false".

connection.session = {
    audio: true,
    video: true,
    data: true
};
connection.bandwidth = {
    audio: 50,  // 50 kbps    audio bitrates. Minimum 6 kbps and maximum 510 kbps
    video: 256, // 256 kbps   video framerates. Minimum 100 kbps; maximum 2000 kbps
    screen: 300 // 300 kbps  screen framerates. Minimum 300 kbps; maximum 4000 kbps
};
connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
};
var screenshareCheck = {};
connection.videosContainer = document.getElementById('videos_container');
var viewerListDiv = document.getElementById('viewersList');
var viewerCounter = 0;
connection.onstream = function (event) {
    event.mediaElement.removeAttribute('src');
    event.mediaElement.removeAttribute('srcObject');

    var video = document.createElement('video');
    // video.setAttribute('height', '16.5vh');
    // video.setAttribute('width ', '100%');
    // video.height = 19 +'vh';
    // video.width = 100 + '%';
    video.setAttribute("style", "height:16.3vh; width:100%");
    var viewerCounter = document.getElementById('viewerCount').innerHTML;
    if (typeof viewerCounter === undefined) {
        viewerCounter = 0;
    }
    video.controls = true;
    if (event.type === 'local') {
        video.muted = true;
    } else {
        if (document.getElementById(event.streamid + 'parent') == null) {
            connection.streamEvents.selectAll({
                userid: event.userid
            }).forEach(function (streamEvent) {
                var mediaElement = document.getElementById(streamEvent.streamid + 'parent');
                if (mediaElement && !event.stream.isScreen && !streamEvent.stream.isScreen) {
                    streamEvent.stream.stop();
                    mediaElement.parentNode.removeChild(mediaElement);
                    viewerCounter--;
                }
            });
        }
    }
    video.srcObject = event.stream;
    var outerCustomDiv = document.createElement('div');
    outerCustomDiv.setAttribute("class", "col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6");
    var customDiv = document.createElement('div');
    var heading = document.createElement('div');
    var attendeeFullName = event.extra;
    var viewerNameString = null;

    var attendeeFullNameArray = setAttendeeName(attendeeFullName);
    if (attendeeFullNameArray.length < 3) {
        var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1);
    } else {
        var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1) + ' '
            + attendeeFullNameArray[2].charAt(0).toUpperCase() + attendeeFullNameArray[2].slice(1);
    }
    heading.innerHTML = '<span>' + (event.type === 'local' ? 'You' : firstNameUpperCase) + '</span><i id="' + (event.streamid + 'muteIcon') + '" class="fa fa-microphone-slash fa-lg pull-right" style="display:none;"></i>';
    viewerNameString = '<p>' + firstNameUpperCase + '</p>';

    if(mq.matches){
    if (event.type === 'local') {
        customDiv.setAttribute("style", "  background-color: #ffeeed; margin-bottom: 15px; height:19vh; position: relative; border: 1px solid #AF2127; color:#AF2127;");
        heading.setAttribute("style", " background-color:#AF2127;text-align: center;height: 2.5vh;  font-weight: bold; color:#ffffff;font-size:2.5vw;");
    } else {
        customDiv.setAttribute("style", "background-color: #edf3fb; margin-bottom: 15px;height:19vh; position: relative; border: 1px solid #4b6584; color:#4b6584;");
        if (event.stream.isVideo == 0) {
            heading.setAttribute("style", "background-color:#4b6584;height: 2.5vh;text-align: center;  font-weight: bold; color:#ffffff;font-size: 2.5vw;");
        } else {
            heading.setAttribute("style", 'background-color:#4b6584;height: 2.5vh;text-align: center;  font-weight: bold; color:#ffffff;font-size: 2.5vw;');
        }
    }
}

else{
    if (event.type === 'local') {
        customDiv.setAttribute("style", "  background-color: #ffeeed; margin-bottom: 15px; height:19vh; position: relative; border: 1px solid #AF2127; color:#AF2127;");
        heading.setAttribute("style", " background-color:#AF2127;text-align: center;height: 2.5vh;  font-weight: bold; color:#ffffff;font-size: 0.7vw;");
    } else {
        customDiv.setAttribute("style", "background-color: #edf3fb; margin-bottom: 15px;height:19vh; position: relative; border: 1px solid #4b6584; color:#4b6584;");
        if (event.stream.isVideo == 0) {
            heading.setAttribute("style", "background-color:#4b6584;height: 2.5vh;text-align: center;  font-weight: bold; color:#ffffff;font-size: 0.7vw;");
        } else {
            heading.setAttribute("style", 'background-color:#4b6584;height: 2.5vh;text-align: center;  font-weight: bold; color:#ffffff;font-size: 0.7vw;');
        }
    }
}
    customDiv.appendChild(heading);
    if (event.stream.isVideo == 0) {
        video.setAttribute("style", "display:none;");
        video.hidden = true;
        var attendeeNameLetter = null;
        if (attendeeFullNameArray.length < 3) {
            attendeeNameLetter = attendeeFullNameArray[0].substring(0, 1).toUpperCase();
        } else {
            attendeeNameLetter = attendeeFullNameArray[0].substring(0, 1).toUpperCase() + attendeeFullNameArray[2].substring(0, 1).toUpperCase();
        }
        var initialsDiv = document.createElement('div');
        initialsDiv.innerHTML = event.type === 'local' ? 'You' : attendeeNameLetter;
        if(mq.matches){
            if (initialsDiv.innerHTML === "You") {
                initialsDiv.setAttribute("style", "  text-align: center;font-size:15px;font-weight: 600; position: absolute;left: 0;right: 0; top: 40%; ");
            } else {
                initialsDiv.setAttribute("style", " text-align: center;font-size:15px;font-weight: 600; position: absolute;left: 0;right: 0; top: 40%; ");
            }
        }
        else{
        if (initialsDiv.innerHTML === "You") {
            initialsDiv.setAttribute("style", "  text-align: center;font-size:2.5vw;font-weight: 600; position: absolute;left: 0;right: 0; top: 30%; ");
        } else {
            initialsDiv.setAttribute("style", " text-align: center;font-size:2.5vw;font-weight: 600; position: absolute;left: 0;right: 0; top: 30%; ");
        }
    }
        customDiv.appendChild(initialsDiv);
    }


    customDiv.appendChild(video);
    outerCustomDiv.appendChild(customDiv);
    outerCustomDiv.setAttribute("drag-scroll-item", '');
    outerCustomDiv.setAttribute("id", event.streamid + 'parent');
    if (event.stream.isScreen) {
        if (screenshareCheck != event.stream.id && event.type !== 'local') {
            screenshareCheck = event.stream.id;
            var screenShareContainer = document.getElementById('shareScreen-container');
            heading.setAttribute("style", 'background-color:#AF2127;padding:1.3%;text-align: center; font-weight: bold; color:#ffffff;border-top:1px solid #AF2127;border-right:1px solid #AF2127;border-left:1px solid #AF2127;');
            video.setAttribute("style", "background: #f6f6f6;float:left;width:100%;border: 1px solid #AF2127;");
            customDiv.setAttribute("style", "background-color: #edf3fb; margin-bottom: 15px; position: relative;color:#4b6584;");
            outerCustomDiv.setAttribute("style","margin-bottom:15px;");
            screenShareContainer.appendChild(outerCustomDiv);
            if (document.getElementById(event.userid + 'viewer') !== null) {
                var viewer = document.getElementById(event.userid + 'viewer');
                var viewer = displayViewerList(event, viewerNameString, 1);
                viewerListDiv.appendChild(viewer);
            }
        }
    } else {
        if (document.getElementById(event.streamid + 'parent') == null) {
            connection.videosContainer.appendChild(outerCustomDiv);
            if (event.type !== 'local') {
                if (document.getElementById(event.userid + 'viewer') == undefined && document.getElementById(event.userid + 'viewer') == null) {
                    viewerCounter++;
                }
                var viewer = displayViewerList(event, viewerNameString, 0);
                viewerListDiv.appendChild(viewer);
                var vCounterEl = document.getElementById('viewerCount');
                vCounterEl.innerText = viewerCounter;
                alertService.info("New viewer has joined meeting" , "Notification");
            }
        }
    }
    setTimeout(function () {
        video.play();
    }, 5000);
    video.id = event.streamid;
    // if (!event.stream.isScreen) {
    //     mRecordRTC.addStream(event.stream);
    //     mRecordRTC.startRecording();
    // }
};
document.getElementById("chatAnchor").addEventListener("click", function () {
    hideChatCounter();
});

document.getElementById("chatTab").onclick = function () {
    hideChatCounter();
};
document.getElementById("toggleSidebar").onclick = function () {
    hideChatCounter();
};
hideChatCounter = function () {
    messageCounter = 0;
    document.getElementById("messageCount").setAttribute("style", "display:none;");
}

connection.onMediaError = function (event) {
    alertService.error(event.message + ', connect your device and refresh again', "Device error!");
   // document.getElementById('btn-leave-room').disabled = true;
    //  document.getElementById('open-room').disabled = false;

}
connection.onmute = function (event) {
    if (event.type !== "local") {
        var mediaElement = document.getElementById(event.streamid)
        mediaElement.muted = true;
        // font-size: 1.1vw;
        document.getElementById(event.streamid + 'muteIcon').setAttribute("style", "display:block;padding-top:2%;margin-right:2px;");
    }
};
connection.onunmute = function (event) {
    if (event.type !== "local") {
        var mediaElement = document.getElementById(event.streamid)
        mediaElement.muted = false;
        document.getElementById(event.streamid + 'muteIcon').setAttribute("style", "display:none;");
    }
};
connection.onstreamended = function (event) {
    var mediaElement = document.getElementById(event.streamid + 'parent');
    if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
    }
    if (event.type !== 'local') {
        var attendeeFullName = event.extra;
        var viewerNameString = null;
        var attendeeFullNameArray = setAttendeeName(attendeeFullName);
        if(attendeeFullNameArray.length>0){
            if (attendeeFullNameArray.length < 3) {
                var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1);
            } else {
                var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1) + ' '
                    + attendeeFullNameArray[2].charAt(0).toUpperCase() + attendeeFullNameArray[2].slice(1);
            }
        }        
        viewerNameString = '<p>' + firstNameUpperCase + '</p>';
        var viewer = null;
        if (event.stream.isScreen) { viewer = displayViewerList(event, viewerNameString, 3); }
        else { viewer = displayViewerList(event, viewerNameString, 2); }
        viewerListDiv.appendChild(viewer);
    }
    else {
        if (event.stream.isScreen) {
            isShareScreen=false;
            document.getElementById("share-screen").disabled = false;
            document.getElementById("share-screen").setAttribute('class', 'btn-sec');
        }
    }
};
connection.onleave = function (event) {
    connection.streamEvents.selectAll({
        userid: event.userid
    }).forEach(function (streamEvent) {
        var mediaElement = document.getElementById(streamEvent.streamid + 'parent');
        if (mediaElement) {
            streamEvent.stream.stop();
            mediaElement.parentNode.removeChild(mediaElement);
        }
        if (event.type !== 'local') {
            var attendeeFullName = event.extra;
            var viewerNameString = null;
            var attendeeFullNameArray = setAttendeeName(attendeeFullName);
            if(attendeeFullNameArray.length>0){
                if (attendeeFullNameArray.length < 3) {
                    var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1);
                } else {
                    var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1) + ' '
                        + attendeeFullNameArray[2].charAt(0).toUpperCase() + attendeeFullNameArray[2].slice(1);
                }
            }            
            viewerNameString = '<p>' + firstNameUpperCase + '</p>';
            var viewer = null;
            viewer = displayViewerList(event, viewerNameString, 2);
            viewerListDiv.appendChild(viewer);
        }
    });

}
connection.onmessage = appendDIV;
connection.filesContainer = document.getElementById('file-container');

connection.onopen = function () {
    document.getElementById('share-file').style.display = 'inline-block';
    if (!isAndroid && !iOS && !edge && !safari && !isFireFox) {
        document.getElementById('share-screen').style.display = 'inline-block';
        document.getElementById('btn-start-recording').style.display = 'inline-block';
    }
    document.getElementById('disable-video').style.display = 'inline-block';
    document.getElementById('input-text-chat').disabled = false;
    if (isHost) {
     //   document.getElementById('btn-leave-room').disabled = false;
        document.querySelector('h1').innerHTML = 'You are connected with: ' + connection.getAllParticipants().join(', ');
    } else {
     //   document.getElementById('btn-leave-room').disabled = false;
    }
};

connection.onclose = function () {
    if (connection.getAllParticipants().length) {
        document.querySelector('h1').innerHTML = 'You are still connected with: ' + connection.getAllParticipants().join(', ');
    } else {
        document.querySelector('h1').innerHTML = 'Seems session has been closed or all participants left.';
    }
};
connection.onEntireSessionClosed = function (event) {
    document.getElementById('share-file').style.display = 'none';
    document.getElementById('btn-start-recording').style.display = 'none';
    document.getElementById('disable-video').style.display = 'none';
    document.getElementById('share-screen').style.display = 'none';
    document.getElementById('input-text-chat').disabled = true;
   // document.getElementById('btn-leave-room').disabled = true;
    document.getElementById('open-or-join-room').disabled = false;
    document.getElementById('open-room').disabled = true;
    document.getElementById('join-room').disabled = false;
    document.getElementById('room-id').disabled = false;

    connection.attachStreams.forEach(function (stream) {
        stream.stop();
    });

    // don't display alert for moderator
    if (connection.userid === event.userid) return;
    document.querySelector('h1').innerHTML = 'Entire session has been closed by the moderator: ' + event.userid;
};

connection.onUserIdAlreadyTaken = function (useridAlreadyTaken, yourNewUserId) {
    connection.join(useridAlreadyTaken);
};
connection.onPeerStateChanged = function (state) {
    if (state.iceConnectionState.search(/closed|failed/gi) !== -1) {
        if (!connection.isOnline) {
            alertService.error("It seems that you are not connected to internet. Kindly check your internet settings and try again.", "No internet");
        }
    }
};


function displayViewerList(event, viewerNameString, sharedScreenFlag) {
    var viewer = null;
    if (document.getElementById(event.userid + 'viewer') == undefined && document.getElementById(event.userid + 'viewer') == null) {
        viewer = document.createElement('div');
    }
    else {
        viewer = document.getElementById(event.userid + 'viewer');
    }
    viewer.id = event.userid + 'viewer';
    html = viewerNameString;
    viewer.className = 'chat-background-invitee';
    html += '<span class="time-left">';
    switch (sharedScreenFlag) {
        case 1:
            html += '<i class="fa fa-desktop"></i>&nbsp;' + ' Shared screen</span><span style="color: #7d7d7f" class="currentTime">' + formatDate(new Date()) + '</span>';
            break;
        case 2:
            html += '<i class="fa fa-sign-out"></i>&nbsp;' + ' Left the meeting</span><span style="color: #7d7d7f" class="currentTime">' + formatDate(new Date()) + '</span>';
            break;
        case 3:
            html += '<i class="fa fa-desktop"></i>&nbsp;' + ' Stopped shared screen</span><span style="color: #7d7d7f" class="currentTime">' + formatDate(new Date()) + '</span>';
            break;
        default:
            if (event.stream.isVideo === false) {
                html += '<i class="fa fa-microphone"></i>&nbsp;' + ' Joined meeting on audio mode</span><span style="color: #7d7d7f" class="currentTime">' + formatDate(new Date()) + '</span>';
            }
            else {
                html += '<i class="fa fa-video-camera"></i>&nbsp;' + ' Joined meeting on video mode</span><span style="color: #7d7d7f" class="currentTime">' + formatDate(new Date()) + '</span>';
            }
            break;
    }
    viewer.innerHTML = html;
    // document.getElementById('viewerAnchor').click();
    return viewer;
}

function setAttendeeName(attendeeFullName) {
    if (attendeeFullName != undefined) {
        attendeeFullName = attendeeFullName.split(" ");
        var attendeeFullNameArray = new Array();
        for (var i = 0; i < attendeeFullName.length; i++) {
            attendeeFullNameArray.push(attendeeFullName[i]);
            if (i != attendeeFullName.length - 1) {
                attendeeFullNameArray.push(" ");
            }
        }
        return attendeeFullNameArray;
    }
    return "";
}

function disableInputButtons() {
    document.getElementById('open-or-join-room').disabled = true;
    document.getElementById('open-room').disabled = true;
    document.getElementById('join-room').disabled = true;
    document.getElementById('room-id').disabled = true;
}

// ......................................................
// ......................Handling Room-ID................
// ......................................................

function showRoomURL(roomid) {
    // var roomQueryStringURL = window.location.href.split('?')[0] + '?meetingCode=' + roomid;
    // html = 'Meeting URL: <a style="color:white;" href="' + roomQueryStringURL + '" target="_blank">' + roomQueryStringURL + '</a>';
    var roomURLsDiv = document.getElementById('room-urls');
    // roomURLsDiv.innerHTML = html;
    roomURLsDiv.style.display = 'block';
    connection.socket.on('disconnect', function () {
        if (connection.enableLogs) {
            connection = new RTCMultiConnection();
            connection.openOrJoin(roomid);           
        }
    });
}
connection.onfailed = function(event) {
    event.peer.getConnectionStats(function(result) {
        // read more here, https://cdn.webrtc-experiment.com/getConnectionStats.js
        // result.connectionType
        // result.audio --- for audio tracks
        // result.video ---- for video tracks
    });
    // use `redial` method
    // it is same as: connection.peers[event.userid].redial();
    event.peer.redial();

    // you can even use `renegotiate`
    // event.peer.renegotiate();
};
// document.getElementById("copyMeetingLink").onclick = function () {
//     var roomQueryStringURL = window.location.href.split('?')[0] + '?meetingCode=' + roomid;
//     copyToClipBoard(roomQueryStringURL, 'Meeting link has been copied. Kindly share via your preferred email id.',
//         'Copy Meeting Link')
// };
document.getElementById("copyGuestMeetingLink").onclick = function () {
    var roomQueryStringURL = window.location.origin + '/#/login/GuestUserWithMeeting?meetingCode=' + roomid;
    copyToClipBoard(roomQueryStringURL, 'Meeting link for guest user has been copied. Kindly share via your preferred email id.',
        'Copy Guest User Meeting Link')
};
// document.getElementById("copyMeetingId").onclick = function () {
//     copyToClipBoard(roomid, 'Meeting id has been copied. Kindly share via your preferred email id.',
//         'Copy Meeting Id')
// };

function copyToClipBoard(content, message, title) {
    const el = document.createElement('textarea');
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alertService.success(message, title);
}

var roomid = '';
if (localStorage.getItem(connection.socketMessageEvent)) {
    roomid = localStorage.getItem(connection.socketMessageEvent);
} else {
    roomid = connection.token();
}
document.getElementById('room-id').value = roomid;
document.getElementById('room-id').onkeyup = function () {
    localStorage.setItem(connection.socketMessageEvent, this.value);
};

var hashString = false; // location.hash.replace('#', '');
if (hashString.length && hashString.indexOf('comment-') == 0) {
    hashString = '';
}

var roomid = params.meetingCode;
if (!roomid && hashString.length) {
    roomid = hashString;
}

if (roomid && roomid.length) {
    document.getElementById('room-id').value = roomid;
    localStorage.setItem(connection.socketMessageEvent, roomid);
    (function reCheckRoomPresence() {
        document.getElementById('meeting-error').innerText = '';
        disableInputButtons();
        isHost = document.getElementById('isHost').innerText === "true";
        if (isHost) {
            document.getElementById('open-room').disabled = false;
            document.getElementById('open-room').click();
            // /document.getElementById('meeting-error').innerText = 'You are the host. Kindly start the meeting.';
          //  document.getElementById('btn-leave-room').disabled = false;
            return;
        } else if (!isHost) {
            // document.getElementById('btn-leave-room').disabled = true;
        }
        connection.checkPresence(roomid, function (isRoomExists) {
            if (isRoomExists) {
                document.getElementById('meeting-error').innerText = '';
                connection.join(roomid);
                document.getElementById('btn-save-mom').disabled = false;
                document.getElementById('input-text-chat').disabled = false;
                showRoomURL(roomid);
                return;
            }
            document.getElementById('meeting-error').innerText = 'Wait for host to start the meeting';
            setTimeout(reCheckRoomPresence, 5000);
        });
    })();
}

/** Record screen functionality */
var video = document.getElementById('screenRecordVideo');
if (typeof RecordRTC_Extension === 'undefined') {
    document.getElementById("btn-start-recording").display = 'none';
}

// first step
var recorder = new RecordRTC_Extension();

function stopRecordingCallback(blob) {
    video.src = video.srcObject = null;
    video.src = URL.createObjectURL(blob);
    if (recorder.screen)
        recorder.screen.stop();
    recorder.destroy();
    recorder = null;
}

document.getElementById('btn-start-recording').onclick = function () {
    // this.disabled = true;
    // you can find list-of-options here:
    // https://github.com/muaz-khan/Chrome-Extensions/tree/master/screen-recording#getsupoortedformats
    if (document.getElementById('rec_stop').style.display === 'none') {
        var options = recorder.getSupoortedFormats()[3];
        ispermission = false;
        // second step
        recorder.startRecording(options, function () {
            ispermission = true;
            document.getElementById('rec_start').style.display = 'none';
            document.getElementById('rec_stop').style.display = 'inline-block';
            document.getElementById('display-recording').style.display = 'inline-block';
        });
        setTimeout(function () {
            if (!this.ispermission) {
                document.getElementById('btn-start-recording').style.display = 'none';
                alertService.error('Permission denied for recording. Recording will be disabled for this session', "Recording Disabled!");
            }
        }, 5000);

    } else {
        recorder.stopRecording(stopRecordingCallback);
        document.getElementById('rec_start').style.display = 'inline-block';
        document.getElementById('rec_stop').style.display = 'none';
        document.getElementById('display-recording').style.display = 'none';
    }
};