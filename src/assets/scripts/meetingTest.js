window.enableAdapter = true; // enable adapter.js
document.getElementById('btn-save-mom').disabled = true;
document.getElementById('input-text-chat').disabled = true;
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
            connection.streamEvents.selectFirst({
                local: true
            }).stream.mute("audio");
            isMute = true;
        } else {
            connection.streamEvents.selectFirst({
                local: true
            }).stream.unmute();
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
        document.getElementById('btn-save-mom').disabled = false;
        document.getElementById('input-text-chat').disabled = false;
        document.getElementById('btn-leave-room').disabled = false;
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
                    (document.body || document.documentElement).appendChild(vide);
                } catch (e) {}

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
    } catch (e) {}

    onDetectRTCLoaded();
});

document.getElementById('disable-video').onclick = function () {
    this.disabled = true;
    if (isMute) {
        document.getElementById('btn-mute').children[0].className = "fa fa-2x fa-microphone";
        isMute = false;
        alertService.warning('You will have to mute yourself again!', 'unmute');
    }
    if (isShareScreen) {
        isShareScreen = false;
        alertService.warning('You will have to share screen again!', 'screen share');
    }
    setTimeout(function () {
        document.getElementById('disable-video').disabled = false;
    }, 6000);
    var videoValue = this.value == "true";
    if (connection.streamEvents.selectFirst({
            local: true
        }) != undefined) {
        connection.streamEvents.selectFirst({
            local: true
        }).stream.stop();
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
    var strTime = hours + ':' + minutes + ':' +seconds+ ' ' + ampm;
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
        var firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase()+senderNameArray[0].slice(1);
    } else {
        var firstNameUpperCase = senderNameArray[0].charAt(0).toUpperCase()+senderNameArray[0].slice(1) + ' '
        +senderNameArray[2].charAt(0).toUpperCase()+senderNameArray[2].slice(1);
    }
    if (firstNameUpperCase === 'You') {
        div.className = 'chat-background';
        html += '<span class="time-right">';
    } else {
        div.className = 'chat-background-invitee';
        html += '<span class="time-left">';
    }

    html += '<i class="fa fa-user"></i>&nbsp;' + firstNameUpperCase + ' ' + formatDate(new Date()) + '</span>'
    div.innerHTML = html;
    chatContainer.insertBefore(div, chatContainer.lastChild);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    document.getElementById('input-text-chat').focus();
    document.getElementById('chatAnchor').click();
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
                alert("Pop-up Blocker is enabled! Please add this site to your exception list. And click share screen again");
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
connection.onstream = function (event) {
    event.mediaElement.removeAttribute('src');
    event.mediaElement.removeAttribute('srcObject');

    var video = document.createElement('video');

    video.controls = true;
    if (event.type === 'local') {
        video.muted = true;
    } else {
        if (document.getElementById(event.streamid + 'parent') == null) {
            connection.streamEvents.selectAll({
                userid: event.userid
            }).forEach(function (streamEvent) {
                var mediaElement = document.getElementById(streamEvent.streamid + 'parent');
                if (mediaElement && !event.stream.isScreen) {
                    streamEvent.stream.stop();
                    mediaElement.parentNode.removeChild(mediaElement);
                }
            });
        }
    }
    video.srcObject = event.stream;
    video.height = Math.round(window.innerHeight * 0.30) - 10;
    video.width = Math.round(window.innerHeight * 0.30) - 10;
    video.setAttribute("style", 'float:left;');
    // video.style.padding = '5';
    var customDiv = document.createElement('div');
    customDiv.style.height = Math.round(window.innerHeight * 0.30);
    customDiv.style.width = Math.round(window.innerHeight * 0.30);
    customDiv.style.padding = '5';
    customDiv.setAttribute("style", 'width:' + Math.round(window.innerHeight * 0.30) + 'px;height:' + Math.round(window.innerHeight * 0.30) + 'px;padding:5px;text-align: center; float:left;');
    var heading = document.createElement('div');
    var attendeeFullName = event.extra;
    var viewerNameString = null;
    var attendeeFullNameArray = setAttendeeName(attendeeFullName);
    if (attendeeFullNameArray.length < 3) {
        var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase()+attendeeFullNameArray[0].slice(1);
        heading.innerHTML = event.type === 'local' ? 'You' : firstNameUpperCase;
        viewerNameString = '<p>' + firstNameUpperCase  + '</p>';
    } else {
        var firstNameUpperCase = attendeeFullNameArray[0].charAt(0).toUpperCase()+attendeeFullNameArray[0].slice(1) + ' ' 
        +attendeeFullNameArray[2].charAt(0).toUpperCase()+attendeeFullNameArray[2].slice(1);
        heading.innerHTML = event.type === 'local' ? 'You' : firstNameUpperCase;
        viewerNameString =  '<p>' + firstNameUpperCase  + '</p>';
    }
    if(heading.innerHTML ===  "You"){
        heading.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.30) - 10) + 'px;height:30px;padding:5px;text-align: center;background-color:#bc151b;color:#fff;margin-bottom: -30px;');
    }else{
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
        if(initialsDiv.innerHTML === "You"){
            initialsDiv.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.30) - 10) + 'px;height:' + (Math.round(window.innerHeight * 0.30) - 40) + 'px;padding-top:20%;text-align: center;background-color:#FDFAE8;border:1px solid #bc151b;color:#bc151b;margin-top: 30px;font-size: 4.0vw;');
        } else{
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
            screenShareContainer.appendChild(customDiv);
            if (document.getElementById(event.userid + 'viewer') !== null) {
                var viewer = document.getElementById(event.userid + 'viewer');
                var viewer = displayViewerList(viewer, event, viewerNameString,1);
                viewerListDiv.appendChild(viewer);
            }
        }
    } else {
        if (document.getElementById(event.streamid + 'parent') == null) {
            connection.videosContainer.appendChild(customDiv);
            if (event.type !== 'local') {
                var viewer = displayViewerList(viewer, event, viewerNameString,0);
                viewerListDiv.appendChild(viewer);
            }
        }
    }
    setTimeout(function () {
        video.play();
    }, 5000);
    video.id = event.streamid;
};
connection.onMediaError = function (event) {
    alertService.error(event.message, "Device error!");
    document.getElementById('btn-leave-room').disabled = true;
    document.getElementById('open-room').disabled = false;

}
connection.onmute = function (event) {
    // document.getElementById(event.streamid).muted=true;
    if (event.type !== "local") {
        // connection.streamEvents[event.streamid].stream.mute();
        var mediaElement = document.getElementById(event.streamid)
        mediaElement.muted = true;
        // mediaElement.setAttribute('poster', '//www.webrtc-experiment.com/images/muted.png');
    }
};
connection.onstreamended = function (event) {
    var mediaElement = document.getElementById(event.streamid + 'parent');
    if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
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

function displayViewerList(viewer, event, viewerNameString,sharedScreenFlag) {
    var viewer = document.createElement('div');
    viewer.id = event.userid + 'viewer';
    html = viewerNameString;
    viewer.className = 'chat-background-invitee';
    html += '<span class="time-left">';
    if(sharedScreenFlag === 1){
        html += '<i class="fa fa-desktop"></i>&nbsp;' + ' Shared Screen</span><span style="color: #7d7d7f">' + new Date().toString().slice(0, 24) +'</span>';
    }else{
        if (event.stream.isVideo === false) {
            html += '<i class="fa fa-microphone"></i>&nbsp;' + ' Joined meeting on audio mode</span><span style="color: #7d7d7f">' + new Date().toString().slice(0, 24) +'</span>';
        }
        else {
            html += '<i class="fa fa-video-camera"></i>&nbsp;' + ' Joined meeting on video mode</span><span style="color: #7d7d7f">' + new Date().toString().slice(0, 24) +'</span>';
        }
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
    return  attendeeFullNameArray ;
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
            document.getElementById('meeting-error').innerText = 'You are the host. Kindly start the meeting.';
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
                return;
            }
            document.getElementById('meeting-error').innerText = 'Wait for host to start meeting';
            setTimeout(reCheckRoomPresence, 5000);
        });
    })();
}

window.onhashchange = function () {
    connection.leave();
    connection.attachStreams.forEach(function (stream) {
        stream.stop();
    });
    //remove parent
    connection.streamEvents.selectAll().forEach(function (streamEvent) {
        var mediaElement = document.getElementById(event.streamid + 'parent');
        if (mediaElement) {
            streamEvent.stream.stop();
            mediaElement.parentNode.removeChild(mediaElement);
        }
    });
}

/** Record screen functionality */
var screenRecordVideo = document.getElementById('screenRecordVideo');
document.getElementById('screenRecordVideo').style.display = 'none';

function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    }).then(function (camera) {
        callback(camera);
    }).catch(function (error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
}

function stopRecordingCallback() {
    screenRecordVideo.src = screenRecordVideo.srcObject = null;
    screenRecordVideo.muted = false;
    screenRecordVideo.volume = 1;
    screenRecordVideo.src = URL.createObjectURL(recorder.getBlob());

    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.setAttribute('href', URL.createObjectURL(recorder.getBlob()));
    a.download = 'Meeting-Rec' + roomid + '(' + new Date().toString().slice(0, 24) + ').webm';
    a.click();
    a.remove();
    recorder.screen.stop();
    recorder.destroy();
    recorder = null;
}
var recorder; // globally accessible

document.getElementById('btn-start-recording').onclick = function () {
    if (document.getElementById('rec_start').style.display != 'none') {

        captureCamera(function (camera) {
            screenRecordVideo.muted = true;
            screenRecordVideo.volume = 0;
            screenRecordVideo.srcObject = camera;

            recorder = RecordRTC(camera, {
                type: 'video'
            });

            recorder.startRecording();
            recorder.camera = camera;
            document.getElementById('rec_start').style.display = 'none';
            document.getElementById('rec_stop').style.display = 'block';
        });
    } else {
        recorder.stopRecording(stopRecordingCallback);
        document.getElementById('rec_start').style.display = 'block';
        document.getElementById('rec_stop').style.display = 'none';
    }
};
