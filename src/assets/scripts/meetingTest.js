window.enableAdapter = true; // enable adapter.js
//document.getElementById('btn-save-mom').disabled = true;
//document.getElementById('input-text-chat').disabled = true;
document.getElementById('btn-leave-room').disabled = true;
// ......................................................
// .......................UI Code........................
// ......................................................
var alertService = window.customAlertService;
var isMute = false;
var isShareScreen = false;
document.getElementById('share-screen').onclick = function () {
    try {
        isShareScreen = true;
        connection.addStream({
            screen: true,
            oneway: true
        });
    } catch (error) {
        console.log(error);
    }

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
        document.getElementById('meeting-error').innerText = 'Meeting has started.';
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
        document.querySelector('h1').innerHTML = 'Entire session has been closed.';
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
        }, 3000);
    }
}
document.getElementById('btn-leave-room').onclick = function () {
    this.disabled = true;
    // debugger;
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
};

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
    if (senderNameArray.length < 3) {
        var firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1);
    } else {
        var firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase() + senderNameArray[0].slice(1) + ' '
            + senderNameArray[2].charAt(0).toUpperCase() + senderNameArray[2].slice(1);
    }
    if (firstNameUpperCase === 'You') {
        div.className = 'chat-background';
        html += '<span class="time-right">';
    } else {
        div.className = 'chat-background-invitee';
        html += '<span class="time-left">';
    }
    var messageCounter = document.getElementById('messageCount').innerHTML;
    messageCounter++;
    var messageCounterEl = document.getElementById('messageCount');
    messageCounterEl.innerHTML = messageCounter;
    html += formatDate(new Date()) + ' <i class="fa fa-user"></i>&nbsp; ' + firstNameUpperCase + '</span>'
    div.innerHTML = html;

    chatContainer.insertBefore(div, chatContainer.lastChild);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    document.getElementById('chatAnchor').click();
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
// debugger;
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
        } else if (screen_constraints.mandatory) {
            document.getElementById('share-screen').disabled = false;
            var url = '/#/error/sharescreen';
            var popup_window = window.open(url, "myWindow", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=500, height=500");
            try {
                popup_window.focus();
            } catch (e) {
             //   alert("Pop-up Blocker is enabled! Please add this site to your exception list , and refresh the page");
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
    video.height = Math.round(window.innerHeight * 0.30) - 10;
    video.width = Math.round(window.innerHeight * 0.30) - 10;
    video.setAttribute("style", 'float:left;margin-top');
    // video.style.padding = '5';
    var customDiv = document.createElement('div');
    customDiv.style.height = Math.round(window.innerHeight * 0.30);
    customDiv.style.width = Math.round(window.innerHeight * 0.30);
    customDiv.style.padding = '5';
    customDiv.setAttribute("style", 'width:' + Math.round(window.innerHeight * 0.30) + 'px;height:' + Math.round(window.innerHeight * 0.30) + 'px;padding:8px;text-align: center; float:left;');
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
    heading.innerHTML = '<span style="font-size: 0.8vw; ">' + (event.type === 'local' ? 'You' : firstNameUpperCase) + '</span><i id="' + (event.streamid + 'muteIcon') + '" class="fa fa-microphone-slash pull-right" style="display:none; font-size: 1.1vw;"></i>';
    viewerNameString = '<p>' + firstNameUpperCase + '</p>';
    if (event.type === 'local') {
        heading.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.30) - 10) + 'px;height:30px;padding:5px;text-align: center;background-color:#bc151b;color:#fff;margin-bottom: -30px;');
    } else {
        heading.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.30) - 10) + 'px;height:30px;padding:5px;text-align: center;background-color:#3283b9;color:#fff;margin-bottom: -30px;');
    }
    customDiv.appendChild(heading);
    if (event.stream.isVideo == 0) {
        video.setAttribute("style", "display:none; ");
        video.hidden = true;
        var attendeeNameLetter = null;
        if (attendeeFullNameArray.length < 3) {
            attendeeNameLetter = attendeeFullNameArray[0].substring(0, 1).toUpperCase();
        } else {
            attendeeNameLetter = attendeeFullNameArray[0].substring(0, 1).toUpperCase() + attendeeFullNameArray[2].substring(0, 1).toUpperCase();
        }
        var initialsDiv = document.createElement('div');
        initialsDiv.innerHTML = event.type === 'local' ? 'You' : attendeeNameLetter;
        if (initialsDiv.innerHTML === "You") {
            initialsDiv.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.30) - 10) + 'px;height:' + (Math.round(window.innerHeight * 0.30) - 40) + 'px;padding-top:20%;text-align: center;background-color:#f1f0ea;border:1px solid #bc151b;color:#bc151b;margin-top: 30px;font-size: 4.0vw;');
        } else {
            initialsDiv.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.30) - 10) + 'px;height:' + (Math.round(window.innerHeight * 0.30) - 40) + 'px;padding-top:20%;text-align: center;background-color:#e4eff0;color:#3283b9;margin-top: 30px;font-size: 4.0vw;border: 1px solid #3283b9;');
        }
        customDiv.appendChild(initialsDiv);
    }


    customDiv.appendChild(video);
    customDiv.setAttribute("drag-scroll-item", '');
    customDiv.setAttribute("id", event.streamid + 'parent');
    if (event.stream.isScreen) {
        if (screenshareCheck != event.stream.id && event.type !== 'local') {
            screenshareCheck = event.stream.id;
            var screenShareContainer = document.getElementById('shareScreen-container');
            heading.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.30) - 10) + 'px;height:30px;padding:5px;text-align: center;background-color:#3283b9;color:#fff;');
            video.setAttribute("style", "background: #f7fbff;border: 2px solid #3283b9;border-top:nonefloat:left;margin-top");
            screenShareContainer.appendChild(customDiv);
            if (document.getElementById(event.userid + 'viewer') !== null) {
                var viewer = document.getElementById(event.userid + 'viewer');
                var viewer = displayViewerList(event, viewerNameString, 1);
                viewerListDiv.appendChild(viewer);
            }
        }
    } else {
        if (document.getElementById(event.streamid + 'parent') == null) {
            connection.videosContainer.appendChild(customDiv);
            if (event.type !== 'local') {
                if (document.getElementById(event.userid + 'viewer') == undefined && document.getElementById(event.userid + 'viewer') == null) {
                    viewerCounter++;
                }
                var viewer = displayViewerList(event, viewerNameString, 0);
                viewerListDiv.appendChild(viewer);
                var vCounterEl = document.getElementById('viewerCount');
                vCounterEl.innerText = viewerCounter

            }
        }
    }
    setTimeout(function () {
        video.play();
    }, 5000);
    video.id = event.streamid;
};
connection.onMediaError = function (event) {
    alertService.error(event.message + ', connect your device and refresh again', "Device error!");
    document.getElementById('btn-leave-room').disabled = true;
    //  document.getElementById('open-room').disabled = false;

}
connection.onmute = function (event) {
    if (event.type !== "local") {
        var mediaElement = document.getElementById(event.streamid)
        mediaElement.muted = true;
        document.getElementById(event.streamid + 'muteIcon').setAttribute("style", "display:block;font-size: 1.1vw;");
    }
};
connection.onunmute = function (event) {
    if (event.type !== "local") {
        var mediaElement = document.getElementById(event.streamid)
        mediaElement.muted = false;
        document.getElementById(event.streamid + 'muteIcon').setAttribute("style", "display:none;");
        var muteUnmuteBtn = document.getElementById('btn-mute');
        muteUnmuteBtn.className = "btn-sec";
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
        if (attendeeFullNameArray.length < 3) {
            var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1);
        } else {
            var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1) + ' '
                + attendeeFullNameArray[2].charAt(0).toUpperCase() + attendeeFullNameArray[2].slice(1);
        }
        viewerNameString = '<p>' + firstNameUpperCase + '</p>';
        var viewer = null;
        if (event.stream.isScreen) { viewer = displayViewerList(event, viewerNameString, 3); }
        else { viewer = displayViewerList(event, viewerNameString, 2); }
        viewerListDiv.appendChild(viewer);
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
            if (attendeeFullNameArray.length < 3) {
                var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1);
            } else {
                var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase() + attendeeFullNameArray[0].slice(1) + ' '
                    + attendeeFullNameArray[2].charAt(0).toUpperCase() + attendeeFullNameArray[2].slice(1);
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
    document.getElementById('share-file').style.display = 'block';
    document.getElementById('share-screen').style.display = 'block';
    document.getElementById('disable-video').style.display = 'block';
    document.getElementById('btn-start-recording').style.display = 'block';
    document.getElementById('input-text-chat').disabled = false;
    if (isHost) {
        document.getElementById('btn-leave-room').disabled = false;
        document.querySelector('h1').innerHTML = 'You are connected with: ' + connection.getAllParticipants().join(', ');
    } else {
        document.getElementById('btn-leave-room').disabled = false;
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
    document.getElementById('btn-leave-room').disabled = true;
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
    document.getElementById('viewerAnchor').click();
    return viewer;
}

function setAttendeeName(attendeeFullName) {
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
}

document.getElementById("copyMeetingLink").onclick = function () {
    var roomQueryStringURL = window.location.href.split('?')[0] + '?meetingCode=' + roomid;
    copyToClipBoard(roomQueryStringURL, 'Meeting link has been copied. Kindly share via your preferred email id.',
        'Copy Meeting Link')
};
document.getElementById("copyGuestMeetingLink").onclick = function () {
    var roomQueryStringURL = window.location.origin + '/#/login/GuestUserWithMeeting?meetingCode=' + roomid;
    copyToClipBoard(roomQueryStringURL, 'Meeting link for guest has been copied. Kindly share via your preferred email id.',
        'Copy Guest Meeting Link')
};
document.getElementById("copyMeetingId").onclick = function () {
    copyToClipBoard(roomid, 'Meeting id has been copied. Kindly share via your preferred email id.',
        'Copy Meeting Id')
};

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
            document.getElementById('btn-leave-room').disabled = false;
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
(function () {
    var params = {},
        r = /([^&=]+)=?([^&]*)/g;

    function d(s) {
        return decodeURIComponent(s.replace(/\+/g, ' '));
    }

    var match, search = window.location.search;
    while (match = r.exec(search.substring(1))) {
        params[d(match[1])] = d(match[2]);

        if (d(match[2]) === 'true' || d(match[2]) === 'false') {
            params[d(match[1])] = d(match[2]) === 'true' ? true : false;
        }
    }

    window.params = params;
})();

function addStreamStopListener(stream, callback) {
    stream.addEventListener('ended', function () {
        callback();
        callback = function () { };
    }, false);
    stream.addEventListener('inactive', function () {
        callback();
        callback = function () { };
    }, false);
    stream.getTracks().forEach(function (track) {
        track.addEventListener('ended', function () {
            callback();
            callback = function () { };
        }, false);
        track.addEventListener('inactive', function () {
            callback();
            callback = function () { };
        }, false);
    });
}

var video = document.createElement('video');
video.controls = false;
var mediaElement = getHTMLMediaElement(video, {
    title: 'Recording status: inactive',
    buttons: ['full-screen'/*, 'take-snapshot'*/],
    showOnMouseEnter: false,
    width: 360,
    onTakeSnapshot: function () {
        var canvas = document.createElement('canvas');
        canvas.width = mediaElement.clientWidth;
        canvas.height = mediaElement.clientHeight;

        var context = canvas.getContext('2d');
        context.drawImage(recordingPlayer, 0, 0, canvas.width, canvas.height);

        window.open(canvas.toDataURL('image/png'));
    }
});
document.getElementById('recording-player').appendChild(mediaElement);

var div = document.createElement('section');
mediaElement.media.parentNode.appendChild(div);
mediaElement.media.muted = false;
mediaElement.media.autoplay = true;
mediaElement.media.playsinline = true;
div.appendChild(mediaElement.media);

var recordingPlayer = mediaElement.media;
var recordingMedia = document.querySelector('.recording-media');
recordingMedia.value = 'record-audio-plus-screen';
var mediaContainerFormat = document.querySelector('.media-container-format');
mediaContainerFormat.value === 'h264';
var mimeType = 'video/webm';
var fileExtension = 'webm';
var type = 'video';
var recorderType;
var defaultWidth;
var defaultHeight;

var btnStartRecording = document.querySelector('#btn-start-recording');

window.onbeforeunload = function () {
    btnStartRecording.disabled = false;
    recordingMedia.disabled = false;
    mediaContainerFormat.disabled = false;

    chkFixSeeking.parentNode.style.display = 'inline-block';
};

btnStartRecording.onclick = function (event) {
    var button = btnStartRecording;

    if (document.getElementById('rec_stop').style.display != 'none') {
        btnPauseRecording.style.display = 'none';
        button.disabled = true;
        button.disableStateWaiting = true;
        setTimeout(function () {
            button.disabled = false;
            button.disableStateWaiting = false;
        }, 2000);

        document.getElementById('rec_start').style.display = 'block';
        document.getElementById('rec_stop').style.display = 'none';
        // button.innerHTML = 'Start Recording';

        function stopStream() {
            if (button.stream && button.stream.stop) {
                button.stream.stop();
                button.stream = null;
            }

            if (button.stream instanceof Array) {
                button.stream.forEach(function (stream) {
                    stream.stop();
                });
                button.stream = null;
            }

            videoBitsPerSecond = null;
            var html = 'Recording status: stopped';
            html += '<br>Size: ' + bytesToSize(button.recordRTC.getBlob().size);
            recordingPlayer.parentNode.parentNode.querySelector('h2').innerHTML = html;
        }
        document.getElementById('save-to-disk').click();

        if (button.recordRTC) {
            if (button.recordRTC.length) {
                button.recordRTC[0].stopRecording(function (url) {
                    if (!button.recordRTC[1]) {
                        button.recordingEndedCallback(url);
                        stopStream();

                        saveToDiskOrOpenNewTab(button.recordRTC[0]);
                        return;
                    }

                    button.recordRTC[1].stopRecording(function (url) {
                        button.recordingEndedCallback(url);
                        stopStream();
                    });
                });
            }
            else {
                button.recordRTC.stopRecording(function (url) {
                    if (button.blobs && button.blobs.length) {
                        var blob = new File(button.blobs, getFileName(fileExtension), {
                            type: mimeType
                        });

                        button.recordRTC.getBlob = function () {
                            return blob;
                        };

                        url = URL.createObjectURL(blob);
                    }

                    if (chkFixSeeking.checked === true) {
                        // to fix video seeking issues
                        getSeekableBlob(button.recordRTC.getBlob(), function (seekableBlob) {
                            button.recordRTC.getBlob = function () {
                                return seekableBlob;
                            };

                            url = URL.createObjectURL(seekableBlob);

                            button.recordingEndedCallback(url);
                            saveToDiskOrOpenNewTab(button.recordRTC);
                            stopStream();
                        })
                        return;
                    }

                    button.recordingEndedCallback(url);
                    saveToDiskOrOpenNewTab(button.recordRTC);
                    stopStream();
                });
            }
        }
       
        return;
    }

    if (!event) return;

    button.disabled = true;

    var commonConfig = {
        onMediaCaptured: function (stream) {
            button.stream = stream;
            if (button.mediaCapturedCallback) {
                button.mediaCapturedCallback();
            }

            // button.innerHTML = 'Stop Recording';
            button.disabled = false;
            document.getElementById('rec_start').style.display = 'none';
            document.getElementById('rec_stop').style.display = 'block';

            chkFixSeeking.parentNode.style.display = 'none';
        },
        onMediaStopped: function () {
            // button.innerHTML = 'Start Recording';
            document.getElementById('rec_start').style.display = 'block';
            document.getElementById('rec_stop').style.display = 'none';
            document.getElementById('save-to-disk').click();
            if (!button.disableStateWaiting) {
                button.disabled = false;
            }

            chkFixSeeking.parentNode.style.display = 'inline-block';
        },
        onMediaCapturingFailed: function (error) {
            console.error('onMediaCapturingFailed:', error);

            if (error.toString().indexOf('no audio or video tracks available') !== -1) {
                alert('RecordRTC failed to start because there are no audio or video tracks available.');
            }

            if (error.name === 'PermissionDeniedError' && DetectRTC.browser.name === 'Firefox') {
                alert('Firefox requires version >= 52. Firefox also requires HTTPs.');
            }

            commonConfig.onMediaStopped();
        }
    };

    if (mediaContainerFormat.value === 'h264') {
        mimeType = 'video/webm\;codecs=h264';
        fileExtension = 'mp4';

        // video/mp4;codecs=avc1    
        if (isMimeTypeSupported('video/mpeg')) {
            mimeType = 'video/mpeg';
        }
    }

    if (mediaContainerFormat.value === 'mkv' && isMimeTypeSupported('video/x-matroska;codecs=avc1')) {
        mimeType = 'video/x-matroska;codecs=avc1';
        fileExtension = 'mkv';
    }

    if (mediaContainerFormat.value === 'vp8' && isMimeTypeSupported('video/webm\;codecs=vp8')) {
        mimeType = 'video/webm\;codecs=vp8';
        fileExtension = 'webm';
        recorderType = null;
        type = 'video';
    }

    if (mediaContainerFormat.value === 'vp9' && isMimeTypeSupported('video/webm\;codecs=vp9')) {
        mimeType = 'video/webm\;codecs=vp9';
        fileExtension = 'webm';
        recorderType = null;
        type = 'video';
    }

    if (mediaContainerFormat.value === 'pcm') {
        mimeType = 'audio/wav';
        fileExtension = 'wav';
        recorderType = StereoAudioRecorder;
        type = 'audio';
    }

    if (mediaContainerFormat.value === 'opus' || mediaContainerFormat.value === 'ogg') {
        if (isMimeTypeSupported('audio/webm')) {
            mimeType = 'audio/webm';
            fileExtension = 'webm'; // webm
        }

        if (isMimeTypeSupported('audio/ogg')) {
            mimeType = 'audio/ogg; codecs=opus';
            fileExtension = 'ogg'; // ogg
        }

        recorderType = null;
        type = 'audio';
    }

    if (mediaContainerFormat.value === 'whammy') {
        mimeType = 'video/webm';
        fileExtension = 'webm';
        recorderType = WhammyRecorder;
        type = 'video';
    }

    if (mediaContainerFormat.value === 'WebAssembly') {
        mimeType = 'video/webm';
        fileExtension = 'webm';
        recorderType = WebAssemblyRecorder;
        type = 'video';
    }

    if (mediaContainerFormat.value === 'gif') {
        mimeType = 'image/gif';
        fileExtension = 'gif';
        recorderType = GifRecorder;
        type = 'gif';
    }

    if (mediaContainerFormat.value === 'default') {
        mimeType = 'video/webm';
        fileExtension = 'webm';
        recorderType = null;
        type = 'video';
    }

    if (recordingMedia.value === 'record-audio') {
        captureAudio(commonConfig);

        button.mediaCapturedCallback = function () {
            var options = {
                type: type,
                mimeType: mimeType,
                leftChannel: params.leftChannel || false,
                disableLogs: params.disableLogs || false
            };

            if (params.sampleRate) {
                options.sampleRate = parseInt(params.sampleRate);
            }

            if (params.bufferSize) {
                options.bufferSize = parseInt(params.bufferSize);
            }

            if (recorderType) {
                options.recorderType = recorderType;
            }

            if (videoBitsPerSecond) {
                options.videoBitsPerSecond = videoBitsPerSecond;
            }

            if (DetectRTC.browser.name === 'Edge') {
                options.numberOfAudioChannels = 1;
            }

            options.ignoreMutedMedia = false;
            button.recordRTC = RecordRTC(button.stream, options);

            button.recordingEndedCallback = function (url) {
                setVideoURL(url);
            };

            button.recordRTC.startRecording();
            btnPauseRecording.style.display = '';
        };
    }

    if (recordingMedia.value === 'record-audio-plus-video') {
        captureAudioPlusVideo(commonConfig);

        button.mediaCapturedCallback = function () {
            if (typeof MediaRecorder === 'undefined') { // opera or chrome etc.
                button.recordRTC = [];

                if (!params.bufferSize) {
                    // it fixes audio issues whilst recording 720p
                    params.bufferSize = 16384;
                }

                var options = {
                    type: 'audio', // hard-code to set "audio"
                    leftChannel: params.leftChannel || false,
                    disableLogs: params.disableLogs || false,
                    video: recordingPlayer
                };

                if (params.sampleRate) {
                    options.sampleRate = parseInt(params.sampleRate);
                }

                if (params.bufferSize) {
                    options.bufferSize = parseInt(params.bufferSize);
                }

                if (params.frameInterval) {
                    options.frameInterval = parseInt(params.frameInterval);
                }

                if (recorderType) {
                    options.recorderType = recorderType;
                }

                if (videoBitsPerSecond) {
                    options.videoBitsPerSecond = videoBitsPerSecond;
                }

                options.ignoreMutedMedia = false;
                var audioRecorder = RecordRTC(button.stream, options);

                options.type = type;
                var videoRecorder = RecordRTC(button.stream, options);

                // to sync audio/video playbacks in browser!
                videoRecorder.initRecorder(function () {
                    audioRecorder.initRecorder(function () {
                        audioRecorder.startRecording();
                        videoRecorder.startRecording();
                        btnPauseRecording.style.display = '';
                    });
                });

                button.recordRTC.push(audioRecorder, videoRecorder);

                button.recordingEndedCallback = function () {
                    var audio = new Audio();
                    audio.src = audioRecorder.toURL();
                    audio.controls = true;
                    audio.autoplay = true;

                    recordingPlayer.parentNode.appendChild(document.createElement('hr'));
                    recordingPlayer.parentNode.appendChild(audio);

                    if (audio.paused) audio.play();
                };
                return;
            }

            var options = {
                type: type,
                mimeType: mimeType,
                disableLogs: params.disableLogs || false,
                getNativeBlob: false, // enable it for longer recordings
                video: recordingPlayer
            };

            if (recorderType) {
                options.recorderType = recorderType;

                if (recorderType == WhammyRecorder || recorderType == GifRecorder || recorderType == WebAssemblyRecorder) {
                    options.canvas = options.video = {
                        width: defaultWidth || 320,
                        height: defaultHeight || 240
                    };
                }
            }

            if (videoBitsPerSecond) {
                options.videoBitsPerSecond = videoBitsPerSecond;
            }

            if (timeSlice && typeof MediaRecorder !== 'undefined') {
                options.timeSlice = timeSlice;
                button.blobs = [];
                options.ondataavailable = function (blob) {
                    button.blobs.push(blob);
                };
            }

            options.ignoreMutedMedia = false;
            button.recordRTC = RecordRTC(button.stream, options);

            button.recordingEndedCallback = function (url) {
                setVideoURL(url);
            };

            button.recordRTC.startRecording();
            btnPauseRecording.style.display = '';
            recordingPlayer.parentNode.parentNode.querySelector('h2').innerHTML = '<img src="https://cdn.webrtc-experiment.com/images/progress.gif">';
        };
    }

    if (recordingMedia.value === 'record-screen') {
        captureScreen(commonConfig);

        button.mediaCapturedCallback = function () {
            var options = {
                type: type,
                mimeType: mimeType,
                disableLogs: params.disableLogs || false,
                getNativeBlob: false, // enable it for longer recordings
                video: recordingPlayer
            };

            if (recorderType) {
                options.recorderType = recorderType;

                if (recorderType == WhammyRecorder || recorderType == GifRecorder || recorderType == WebAssemblyRecorder) {
                    options.canvas = options.video = {
                        width: defaultWidth || 320,
                        height: defaultHeight || 240
                    };
                }
            }

            if (videoBitsPerSecond) {
                options.videoBitsPerSecond = videoBitsPerSecond;
            }

            options.ignoreMutedMedia = false;
            button.recordRTC = RecordRTC(button.stream, options);

            button.recordingEndedCallback = function (url) {
                setVideoURL(url);
            };

            button.recordRTC.startRecording();
            btnPauseRecording.style.display = '';
        };
    }

    // note: audio+tab is supported in Chrome 50+
    // todo: add audio+tab recording
    if (recordingMedia.value === 'record-audio-plus-screen') {
        captureAudioPlusScreen(commonConfig);

        button.mediaCapturedCallback = function () {
            var options = {
                type: type,
                mimeType: mimeType,
                disableLogs: params.disableLogs || false,
                getNativeBlob: false, // enable it for longer recordings
                video: recordingPlayer
            };

            if (recorderType) {
                options.recorderType = recorderType;

                if (recorderType == WhammyRecorder || recorderType == GifRecorder || recorderType == WebAssemblyRecorder) {
                    options.canvas = options.video = {
                        width: defaultWidth || 320,
                        height: defaultHeight || 240
                    };
                }
            }

            if (videoBitsPerSecond) {
                options.videoBitsPerSecond = videoBitsPerSecond;
            }

            options.ignoreMutedMedia = false;
            button.recordRTC = RecordRTC(button.stream, options);

            button.recordingEndedCallback = function (url) {
                setVideoURL(url);
            };

            button.recordRTC.startRecording();
            btnPauseRecording.style.display = '';
        };
    }
};

function captureVideo(config) {
    captureUserMedia({ video: true }, function (videoStream) {
        config.onMediaCaptured(videoStream);

        addStreamStopListener(videoStream, function () {
            config.onMediaStopped();
        });
    }, function (error) {
        config.onMediaCapturingFailed(error);
    });
}

function captureAudio(config) {
    captureUserMedia({ audio: true }, function (audioStream) {
        config.onMediaCaptured(audioStream);

        addStreamStopListener(audioStream, function () {
            config.onMediaStopped();
        });
    }, function (error) {
        config.onMediaCapturingFailed(error);
    });
}

function captureAudioPlusVideo(config) {
    captureUserMedia({ video: true, audio: true }, function (audioVideoStream) {
        config.onMediaCaptured(audioVideoStream);

        if (audioVideoStream instanceof Array) {
            audioVideoStream.forEach(function (stream) {
                addStreamStopListener(stream, function () {
                    config.onMediaStopped();
                });
            });
            return;
        }

        addStreamStopListener(audioVideoStream, function () {
            config.onMediaStopped();
        });
    }, function (error) {
        config.onMediaCapturingFailed(error);
    });
}

var MY_DOMAIN = 'webrtc-experiment.com';

function isMyOwnDomain() {
    // replace "webrtc-experiment.com" with your own domain name
    return document.domain.indexOf(MY_DOMAIN) !== -1;
}

function isLocalHost() {
    // "chrome.exe" --enable-usermedia-screen-capturing
    // or firefox => about:config => "media.getusermedia.screensharing.allowed_domains" => add "localhost"
    return document.domain === 'localhost' || document.domain === '127.0.0.1';
}

var videoBitsPerSecond;

function setVideoBitrates() {
    var select = document.querySelector('.media-bitrates');
    var value = select.value;

    if (value == 'default') {
        videoBitsPerSecond = null;
        return;
    }

    videoBitsPerSecond = parseInt(value);
}

function getFrameRates(mediaConstraints) {
    if (!mediaConstraints.video) {
        return mediaConstraints;
    }

    var select = document.querySelector('.media-framerates');
    var value = select.value;

    if (value == 'default') {
        return mediaConstraints;
    }

    value = parseInt(value);

    if (DetectRTC.browser.name === 'Firefox') {
        mediaConstraints.video.frameRate = value;
        return mediaConstraints;
    }

    if (!mediaConstraints.video.mandatory) {
        mediaConstraints.video.mandatory = {};
        mediaConstraints.video.optional = [];
    }

    var isScreen = recordingMedia.value.toString().toLowerCase().indexOf('screen') != -1;
    if (isScreen) {
        mediaConstraints.video.mandatory.maxFrameRate = value;
    }
    else {
        mediaConstraints.video.mandatory.minFrameRate = value;
    }

    return mediaConstraints;
}

function setGetFromLocalStorage(selectors) {
    selectors.forEach(function (selector) {
        var storageItem = selector.replace(/\.|#/g, '');
        if (localStorage.getItem(storageItem)) {
            document.querySelector(selector).value = localStorage.getItem(storageItem);
        }

        addEventListenerToUploadLocalStorageItem(selector, ['change', 'blur'], function () {
            localStorage.setItem(storageItem, document.querySelector(selector).value);
        });
    });
}

function addEventListenerToUploadLocalStorageItem(selector, arr, callback) {
    arr.forEach(function (event) {
        document.querySelector(selector).addEventListener(event, callback, false);
    });
}

setGetFromLocalStorage(['.media-resolutions', '.media-framerates', '.media-bitrates', '.recording-media', '.media-container-format']);

function getVideoResolutions(mediaConstraints) {
    if (!mediaConstraints.video) {
        return mediaConstraints;
    }

    var select = document.querySelector('.media-resolutions');
    var value = 30;

    if (value == 'default') {
        return mediaConstraints;
    }

    value = value.split('x');

    if (value.length != 2) {
        return mediaConstraints;
    }

    defaultWidth = parseInt(value[0]);
    defaultHeight = parseInt(value[1]);

    if (DetectRTC.browser.name === 'Firefox') {
        mediaConstraints.video.width = defaultWidth;
        mediaConstraints.video.height = defaultHeight;
        return mediaConstraints;
    }

    if (!mediaConstraints.video.mandatory) {
        mediaConstraints.video.mandatory = {};
        mediaConstraints.video.optional = [];
    }

    var isScreen = recordingMedia.value.toString().toLowerCase().indexOf('screen') != -1;

    if (isScreen) {
        mediaConstraints.video.mandatory.maxWidth = defaultWidth;
        mediaConstraints.video.mandatory.maxHeight = defaultHeight;
    }
    else {
        mediaConstraints.video.mandatory.minWidth = defaultWidth;
        mediaConstraints.video.mandatory.minHeight = defaultHeight;
    }

    return mediaConstraints;
}

function captureUserMedia(mediaConstraints, successCallback, errorCallback) {
    if (mediaConstraints.video == true) {
        mediaConstraints.video = {};
    }

    setVideoBitrates();

    mediaConstraints = getVideoResolutions(mediaConstraints);
    mediaConstraints = getFrameRates(mediaConstraints);

    var isBlackBerry = !!(/BB10|BlackBerry/i.test(navigator.userAgent || ''));
    if (isBlackBerry && !!(navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia)) {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        navigator.getUserMedia(mediaConstraints, successCallback, errorCallback);
        return;
    }

    navigator.mediaDevices.getUserMedia(mediaConstraints).then(function (stream) {
        successCallback(stream);

        setVideoURL(stream, true);
    }).catch(function (error) {
        if (error && (error.name === 'ConstraintNotSatisfiedError' || error.name === 'OverconstrainedError')) {
            alert('Your camera or browser does NOT supports selected resolutions or frame-rates. \n\nPlease select "default" resolutions.');
        }
        else if (error && error.message) {
            alert(error.message);
        }
        else {
            alert('Unable to make getUserMedia request. Please check browser console logs.');
        }

        errorCallback(error);
    });
}

function setMediaContainerFormat(arrayOfOptionsSupported) {
    var options = Array.prototype.slice.call(
        mediaContainerFormat.querySelectorAll('option')
    );

    var localStorageItem;
    if (localStorage.getItem('media-container-format')) {
        localStorageItem = localStorage.getItem('media-container-format');
    }

    var selectedItem;
    options.forEach(function (option) {
        option.disabled = true;

        if (arrayOfOptionsSupported.indexOf(option.value) !== -1) {
            option.disabled = false;

            if (localStorageItem && arrayOfOptionsSupported.indexOf(localStorageItem) != -1) {
                if (option.value != localStorageItem) return;
                option.selected = true;
                selectedItem = option;
                return;
            }

            if (!selectedItem) {
                option.selected = true;
                selectedItem = option;
            }
        }
    });
}

function isMimeTypeSupported(mimeType) {
    if (typeof MediaRecorder === 'undefined') {
        return false;
    }

    if (typeof MediaRecorder.isTypeSupported !== 'function') {
        return true;
    }

    return MediaRecorder.isTypeSupported(mimeType);
}

recordingMedia.onchange = function () {
    if (recordingMedia.value === 'record-audio') {
        var recordingOptions = [];

        if (isMimeTypeSupported('audio/webm')) {
            recordingOptions.push('opus');
        }

        if (isMimeTypeSupported('audio/ogg')) {
            recordingOptions.push('ogg');
        }

        recordingOptions.push('pcm');

        setMediaContainerFormat(recordingOptions);
        return;
    }

    var isChrome = !!window.chrome && !(!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0);

    var recordingOptions = ['vp8']; // MediaStreamRecorder with vp8

    if (isMimeTypeSupported('video/webm\;codecs=vp9')) {
        recordingOptions.push('vp9'); // MediaStreamRecorder with vp9
    }

    if (isMimeTypeSupported('video/webm\;codecs=h264')) {
        recordingOptions.push('h264'); // MediaStreamRecorder with h264
    }

    if (isMimeTypeSupported('video/x-matroska;codecs=avc1')) {
        recordingOptions.push('mkv'); // MediaStreamRecorder with mkv/matroska
    }

    recordingOptions.push('gif'); // GifRecorder

    if (DetectRTC.browser.name == 'Chrome') {
        recordingOptions.push('whammy'); // WhammyRecorder
    }

    if (DetectRTC.browser.name == 'Chrome') {
        recordingOptions.push('WebAssembly'); // WebAssemblyRecorder
    }

    recordingOptions.push('default'); // Default mimeType for MediaStreamRecorder

    setMediaContainerFormat(recordingOptions);
};
recordingMedia.onchange();

if (typeof MediaRecorder === 'undefined' && (DetectRTC.browser.name === 'Edge' || DetectRTC.browser.name === 'Safari')) {
    // webp isn't supported in Microsoft Edge
    // neither MediaRecorder API
    // so lets disable both video/screen recording options

    console.warn('Neither MediaRecorder API nor webp is supported in ' + DetectRTC.browser.name + '. You cam merely record audio.');

    recordingMedia.innerHTML = '<option value="record-audio">Audio</option>';
    setMediaContainerFormat(['pcm']);
}

function stringify(obj) {
    var result = '';
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] === 'function') {
            return;
        }

        if (result.length) {
            result += ',';
        }

        result += key + ': ' + obj[key];
    });

    return result;
}

function mediaRecorderToStringify(mediaRecorder) {
    var result = '';
    result += 'mimeType: ' + mediaRecorder.mimeType;
    result += ', state: ' + mediaRecorder.state;
    result += ', audioBitsPerSecond: ' + mediaRecorder.audioBitsPerSecond;
    result += ', videoBitsPerSecond: ' + mediaRecorder.videoBitsPerSecond;
    if (mediaRecorder.stream) {
        result += ', streamid: ' + mediaRecorder.stream.id;
        result += ', stream-active: ' + mediaRecorder.stream.active;
    }
    return result;
}

function getFailureReport() {
    var info = 'RecordRTC seems failed. \n\n' + stringify(DetectRTC.browser) + '\n\n' + DetectRTC.osName + ' ' + DetectRTC.osVersion + '\n';

    if (typeof recorderType !== 'undefined' && recorderType) {
        info += '\nrecorderType: ' + recorderType.name;
    }

    if (typeof mimeType !== 'undefined') {
        info += '\nmimeType: ' + mimeType;
    }

    Array.prototype.slice.call(document.querySelectorAll('select')).forEach(function (select) {
        info += '\n' + (select.id || select.className) + ': ' + select.value;
    });

    if (btnStartRecording.recordRTC) {
        info += '\n\ninternal-recorder: ' + btnStartRecording.recordRTC.getInternalRecorder().name;

        if (btnStartRecording.recordRTC.getInternalRecorder().getAllStates) {
            info += '\n\nrecorder-states: ' + btnStartRecording.recordRTC.getInternalRecorder().getAllStates();
        }
    }

    if (btnStartRecording.stream) {
        info += '\n\naudio-tracks: ' + getTracks(btnStartRecording.stream, 'audio').length;
        info += '\nvideo-tracks: ' + getTracks(btnStartRecording.stream, 'video').length;
        info += '\nstream-active? ' + !!btnStartRecording.stream.active;

        btnStartRecording.stream.getTracks().forEach(function (track) {
            info += '\n' + track.kind + '-track-' + (track.label || track.id) + ': (enabled: ' + !!track.enabled + ', readyState: ' + track.readyState + ', muted: ' + !!track.muted + ')';

            if (track.getConstraints && Object.keys(track.getConstraints()).length) {
                info += '\n' + track.kind + '-track-getConstraints: ' + stringify(track.getConstraints());
            }

            if (track.getSettings && Object.keys(track.getSettings()).length) {
                info += '\n' + track.kind + '-track-getSettings: ' + stringify(track.getSettings());
            }
        });
    }

    if (timeSlice && btnStartRecording.recordRTC) {
        info += '\ntimeSlice: ' + timeSlice;

        if (btnStartRecording.recordRTC.getInternalRecorder().getArrayOfBlobs) {
            var blobSizes = [];
            btnStartRecording.recordRTC.getInternalRecorder().getArrayOfBlobs().forEach(function (blob) {
                blobSizes.push(blob.size);
            });
            info += '\nblobSizes: ' + blobSizes;
        }
    }

    else if (btnStartRecording.recordRTC && btnStartRecording.recordRTC.getBlob()) {
        info += '\n\nblobSize: ' + bytesToSize(btnStartRecording.recordRTC.getBlob().size);
    }

    if (btnStartRecording.recordRTC && btnStartRecording.recordRTC.getInternalRecorder() && btnStartRecording.recordRTC.getInternalRecorder().getInternalRecorder && btnStartRecording.recordRTC.getInternalRecorder().getInternalRecorder()) {
        info += '\n\ngetInternalRecorder: ' + mediaRecorderToStringify(btnStartRecording.recordRTC.getInternalRecorder().getInternalRecorder());
    }

    return info;
}

function saveToDiskOrOpenNewTab(recordRTC) {
    if (!recordRTC.getBlob().size) {
        var info = getFailureReport();
        console.log('blob', recordRTC.getBlob());
        console.log('recordrtc instance', recordRTC);
        console.log('report', info);

        if (mediaContainerFormat.value !== 'default') {
            alert('RecordRTC seems failed recording using ' + mediaContainerFormat.value + '. Please choose "default" option from the drop down and record again.');
        }
        else {
            alert('RecordRTC seems failed. Unexpected issue. You can read the email in your console log. \n\nPlease report using disqus chat below.');
        }

        if (mediaContainerFormat.value !== 'vp9' && DetectRTC.browser.name === 'Chrome') {
            alert('Please record using VP9 encoder. (select from the dropdown)');
        }
    }

    var fileName = getFileName(fileExtension);

    document.querySelector('#save-to-disk').parentNode.style.display = 'block';
    document.querySelector('#save-to-disk').onclick = function () {
        if (!recordRTC) return alert('No recording found.');

        var file = new File([recordRTC.getBlob()], fileName, {
            type: mimeType
        });

        invokeSaveAsDialog(file, file.name);
    };

    document.querySelector('#open-new-tab').onclick = function () {
        if (!recordRTC) return alert('No recording found.');

        var file = new File([recordRTC.getBlob()], fileName, {
            type: mimeType
        });

        window.open(URL.createObjectURL(file));
    };

    // upload to PHP server
    document.querySelector('#upload-to-php').disabled = false;
    document.querySelector('#upload-to-php').onclick = function () {
        if (!recordRTC) return alert('No recording found.');
        this.disabled = true;

        var button = this;
        uploadToPHPServer(fileName, recordRTC, function (progress, fileURL) {
            if (progress === 'ended') {
                button.disabled = false;
                button.innerHTML = 'Click to download from server';
                button.onclick = function () {
                    SaveFileURLToDisk(fileURL, fileName);
                };

                setVideoURL(fileURL);

                var html = 'Uploaded to PHP.<br>Download using below link:<br>';
                html += '<a href="' + fileURL + '" download="' + fileName + '" style="color: yellow; display: block; margin-top: 15px;">' + fileName + '</a>';
                recordingPlayer.parentNode.parentNode.querySelector('h2').innerHTML = html;
                return;
            }
            button.innerHTML = progress;
            recordingPlayer.parentNode.parentNode.querySelector('h2').innerHTML = progress;
        });
    };

    // upload to YouTube!
    document.querySelector('#upload-to-youtube').disabled = false;
    document.querySelector('#upload-to-youtube').onclick = function () {
        if (!recordRTC) return alert('No recording found.');
        this.disabled = true;

        if (isLocalHost()) {
            alert('This feature is NOT available on localhost.');
            return;
        }

        if (isMyOwnDomain() === false) {
            var url = 'https://github.com/muaz-khan/RecordRTC/wiki/Upload-to-YouTube';
            alert('YouTube API key is configured to work only on webrtc-experiment.com. Please create your own YouTube key + oAuth client-id and use it instead.\n\nWiki page: ' + url);

            // check instructions on the wiki page
            location.href = url;
            return;
        }

        var button = this;
        uploadToYouTube(fileName, recordRTC, function (percentageComplete, fileURL) {
            if (percentageComplete == 'uploaded') {
                button.disabled = false;
                button.innerHTML = 'Uploaded. However YouTube is still processing.';
                button.onclick = function () {
                    window.open(fileURL);
                };
                return;
            }
            if (percentageComplete == 'processed') {
                button.disabled = false;
                button.innerHTML = 'Uploaded & Processed. Click to open YouTube video.';
                button.onclick = function () {
                    window.open(fileURL);
                };

                document.querySelector('h1').innerHTML = 'Your video has been uploaded.';
                window.scrollTo(0, 0);

                alert('Your video has been uploaded.');
                return;
            }
            if (percentageComplete == 'failed') {
                button.disabled = false;
                button.innerHTML = 'YouTube failed transcoding the video.';
                button.onclick = function () {
                    window.open(fileURL);
                };
                return;
            }
            button.innerHTML = percentageComplete + '% uploaded to YouTube.';
        });
    };
}

function uploadToPHPServer(fileName, recordRTC, callback) {
    var blob = recordRTC instanceof Blob ? recordRTC : recordRTC.getBlob();

    blob = new File([blob], getFileName(fileExtension), {
        type: mimeType
    });

    // create FormData
    var formData = new FormData();
    formData.append('video-filename', fileName);
    formData.append('video-blob', blob);

    callback('Uploading recorded-file to server.');

    var upload_url = 'https://webrtcweb.com/f/';
    // var upload_url = 'RecordRTC-to-PHP/save.php';

    var upload_directory = upload_url;
    // var upload_directory = 'RecordRTC-to-PHP/uploads/';

    makeXMLHttpRequest(upload_url, formData, function (progress) {
        if (progress !== 'upload-ended') {
            callback(progress);
            return;
        }

        callback('ended', upload_directory + fileName);
    });
}

function makeXMLHttpRequest(url, data, callback) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            if (request.responseText === 'success') {
                callback('upload-ended');
                return;
            }

            document.querySelector('.header').parentNode.style = 'text-align: left; color: red; padding: 5px 10px;';
            document.querySelector('.header').parentNode.innerHTML = request.responseText;
        }
    };

    request.upload.onloadstart = function () {
        callback('Upload started...');
    };

    request.upload.onprogress = function (event) {
        callback('Upload Progress ' + Math.round(event.loaded / event.total * 100) + "%");
    };

    request.upload.onload = function () {
        callback('progress-about-to-end');
    };

    request.upload.onload = function () {
        callback('Getting File URL..');
    };

    request.upload.onerror = function (error) {
        callback('Failed to upload to server');
    };

    request.upload.onabort = function (error) {
        callback('Upload aborted.');
    };

    request.open('POST', url);
    request.send(data);
}

function getRandomString() {
    if (window.crypto && window.crypto.getRandomValues && navigator.userAgent.indexOf('Safari') === -1) {
        var a = window.crypto.getRandomValues(new Uint32Array(3)),
            token = '';
        for (var i = 0, l = a.length; i < l; i++) {
            token += a[i].toString(36);
        }
        return token;
    } else {
        return (Math.random() * new Date().getTime()).toString(36).replace(/\./g, '');
    }
}

function getFileName(fileExtension) {
    var d = new Date();
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth();
    var date = d.getUTCDate();
    return 'Meeting-Rec-(' + year + (month+1) + date + ')-' + getRandomString() + '.' + fileExtension;
}

function SaveFileURLToDisk(fileUrl, fileName) {
    var hyperlink = document.createElement('a');
    hyperlink.href = fileUrl;
    hyperlink.target = '_blank';
    hyperlink.download = fileName || fileUrl;

    (document.body || document.documentElement).appendChild(hyperlink);
    hyperlink.onclick = function () {
        (document.body || document.documentElement).removeChild(hyperlink);

        // required for Firefox
        window.URL.revokeObjectURL(hyperlink.href);
    };

    var mouseEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });

    hyperlink.dispatchEvent(mouseEvent);
}

function getURL(arg) {
    var url = arg;

    if (arg instanceof Blob || arg instanceof File) {
        url = URL.createObjectURL(arg);
    }

    if (arg instanceof RecordRTC || arg.getBlob) {
        url = URL.createObjectURL(arg.getBlob());
    }

    if (arg instanceof MediaStream || arg.getTracks) {
        // url = URL.createObjectURL(arg);
    }

    return url;
}

function setVideoURL(arg, forceNonImage) {
    var url = getURL(arg);

    var parentNode = recordingPlayer.parentNode;
    parentNode.removeChild(recordingPlayer);
    parentNode.innerHTML = '';

    var elem = 'video';
    if (type == 'gif' && !forceNonImage) {
        elem = 'img';
    }
    if (type == 'audio') {
        elem = 'audio';
    }

    recordingPlayer = document.createElement(elem);

    if (arg instanceof MediaStream) {
        recordingPlayer.muted = true;
    }

    recordingPlayer.addEventListener('loadedmetadata', function () {
        if (navigator.userAgent.toLowerCase().indexOf('android') == -1) return;

        // android
        setTimeout(function () {
            if (typeof recordingPlayer.play === 'function') {
                recordingPlayer.play();
            }
        }, 2000);
    }, false);

    recordingPlayer.poster = '';

    if (arg instanceof MediaStream) {
        recordingPlayer.srcObject = arg;
    }
    else {
        recordingPlayer.src = url;
    }

    // if (typeof recordingPlayer.play === 'function') {
    //     recordingPlayer.play();
    // }

    recordingPlayer.addEventListener('ended', function () {
        url = getURL(arg);

        if (arg instanceof MediaStream) {
            recordingPlayer.srcObject = arg;
        }
        else {
            recordingPlayer.src = url;
        }
    });

    parentNode.appendChild(recordingPlayer);
    document.getElementById('save-to-disk').click();
}

function captureScreen(config) {
    if (navigator.getDisplayMedia) {
        navigator.getDisplayMedia({
            video: true
        }).then(screenStream => {
            config.onMediaCaptured(screenStream);

            addStreamStopListener(screenStream, function () {
                // config.onMediaStopped();

                btnStartRecording.onclick();
            });

            setVideoURL(screenStream, true);
        }).catch(function (error) {
            config.onMediaCapturingFailed(error);
        });
    } else if (navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia({
            video: true
        }).then(screenStream => {
            config.onMediaCaptured(screenStream);

            addStreamStopListener(screenStream, function () {
                // config.onMediaStopped();

                btnStartRecording.onclick();
            });

            setVideoURL(screenStream, true);
        }).catch(function (error) {
            config.onMediaCapturingFailed(error);
        });
    } else {
        var error = 'getDisplayMedia API are not supported in this browser.';
        config.onMediaCapturingFailed(error);
        alert(error);
    }
}

function captureAudioPlusScreen(config) {
    if (navigator.getDisplayMedia) {
        navigator.getDisplayMedia({
            video: true
        }).then(screenStream => {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(function (mic) {
                screenStream.addTrack(mic.getTracks()[0]);

                config.onMediaCaptured(screenStream);

                addStreamStopListener(screenStream, function () {
                    // config.onMediaStopped();

                    btnStartRecording.onclick();
                });

                setVideoURL(screenStream, true);
            });
        }).catch(function (error) {
            config.onMediaCapturingFailed(error);
        });
    } else if (navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia({
            video: true
        }).then(screenStream => {
            navigator.mediaDevices.getUserMedia({ audio: true }).then(function (mic) {
                screenStream.addTrack(mic.getTracks()[0]);

                config.onMediaCaptured(screenStream);

                addStreamStopListener(screenStream, function () {
                    // config.onMediaStopped();

                    btnStartRecording.onclick();
                });

                setVideoURL(screenStream, true);
            });
        }).catch(function (error) {
            config.onMediaCapturingFailed(error);
        });
    } else {
        var error = 'getDisplayMedia API are not supported in this browser.';
        config.onMediaCapturingFailed(error);
        alert(error);
    }
}

var chkFixSeeking = document.querySelector('#chk-fixSeeking');
chkFixSeeking.onchange = function () {
    if (this.checked === true) {
        localStorage.setItem(this.id, 'true');
    }
    else {
        localStorage.removeItem(this.id);
    }
};
if (localStorage.getItem(chkFixSeeking.id) === 'true') {
    chkFixSeeking.checked = true;
}

var chkTimeSlice = document.querySelector('#chk-timeSlice');
var timeSlice = false;

if (typeof MediaRecorder === 'undefined') {
    chkTimeSlice.disabled = true;
}

chkTimeSlice.addEventListener('change', function () {
    if (chkTimeSlice.checked === true) {
        var _timeSlice = prompt('Please enter timeSlice in milliseconds e.g. 1000 or 2000 or 3000.', 1000);
        _timeSlice = parseInt(_timeSlice);
        if (!_timeSlice || _timeSlice == NaN || typeof _timeSlice === 'undefined') {
            timeSlice = false;
            return;
        }

        timeSlice = _timeSlice;
    }
    else {
        timeSlice = false;
    }
}, false);

var btnPauseRecording = document.querySelector('#btn-pause-recording');
btnPauseRecording.onclick = function () {
    if (!btnStartRecording.recordRTC) {
        btnPauseRecording.style.display = 'none';
        return;
    }

    btnPauseRecording.disabled = true;
    if (btnPauseRecording.innerHTML === 'Pause') {
        btnStartRecording.disabled = true;
        chkFixSeeking.parentNode.style.display = 'none';
        btnStartRecording.style.fontSize = '15px';
        btnStartRecording.recordRTC.pauseRecording();
        recordingPlayer.parentNode.parentNode.querySelector('h2').innerHTML = 'Recording status: paused';
        recordingPlayer.pause();

        btnPauseRecording.style.fontSize = 'inherit';
        setTimeout(function () {
            btnPauseRecording.innerHTML = 'Resume Recording';
            btnPauseRecording.disabled = false;
        }, 2000);
    }

    if (btnPauseRecording.innerHTML === 'Resume Recording') {
        btnStartRecording.disabled = false;
        chkFixSeeking.parentNode.style.display = 'none';
        btnStartRecording.style.fontSize = 'inherit';
        btnStartRecording.recordRTC.resumeRecording();
        recordingPlayer.parentNode.parentNode.querySelector('h2').innerHTML = '<img src="https://cdn.webrtc-experiment.com/images/progress.gif">';
        recordingPlayer.play();

        btnPauseRecording.style.fontSize = '15px';
        btnPauseRecording.innerHTML = 'Pause';
        setTimeout(function () {
            btnPauseRecording.disabled = false;
        }, 2000);
    }
};

