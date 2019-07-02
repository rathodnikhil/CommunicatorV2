var InitiatedChatRoomId = localStorage.getItem('P2PChatInitiated');
if (InitiatedChatRoomId == null) {
    connection.socket.emit(connection.socketCustomEvent, {
        sender: localStorage.getItem('loggedInUserCode'),
        receiver: localStorage.getItem('selectedUserCode'),
        customMessage: 'initiatedChat'
    });
}


// ......................................................
// ................FileSharing/TextChat Code.............
// ......................................................


document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "share-screen") {
        shareScreenAction();
    }
});
document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "share-screen") {
        muteAction();
    }
});

document.getElementById('open-room').onclick = function () {
    if (document.getElementById('room-id').value === 'Enter Meeting Id') {
        alert('Enter valid meeting Id');
        return false;
    }
    disableInputButtons();
    connection.openOrJoin(document.getElementById('room-id').value, function (isRoomExists, roomid) {
        if (!isRoomExists) {
            showRoomURL(roomid);
        }
        //   document.getElementById('meeting-error').display = 'none';
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
        alertService.error('Entire session has been closed.');
    });
}
document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "disable-video") {
        disableVideoAction();
    }
});
document.getElementById('btn-leave-room').onclick = function () {
    this.disabled = true;
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
    //  document.getElementById('meeting-error').innerText = 'You have left the meeting.';
    document.getElementById('share-file').style.display = 'none';
    document.getElementById('disable-video').style.display = 'none';
    document.getElementById('share-screen').style.display = 'none';
    document.getElementById('input-text-chat').disabled = true;
    document.getElementById('btn-mute').disabled = true;
    // document.getElementById('open-room').disabled = true;
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

function muteAction() {
    try {
        var streamid = connection.streamEvents.selectFirst().streamid;
        if (!isMute || document.getElementById('btn-mute').children[0].className.indexOf('fa-microphone-slash') >= 0) {
            connection.streamEvents.selectFirst({
                local: true
            }).stream.mute("audio");
            isMute = true;
        }
        else {
            connection.streamEvents.selectFirst({
                local: true
            }).stream.unmute();
            isMute = false;
        }
    }
    catch (error) {
        console.log(error);
    }
}

function disableVideoAction() {
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

function shareScreenAction() {
    try {
        isShareScreen = true;
        var shareScreenEl = document.getElementById('share-screen');
        shareScreenEl.className = 'btn-primary';
        connection.addStream({
            screen: true,
            oneway: true
        });
    }
    catch (error) {
        console.log(error);
    }
}

function formatDate(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    // return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
    return strTime;
}

function appendDIV(event) {
    var div = document.createElement('div');
    var message = event.data || event;
    var user = event.extra || 'You';
    html = '<p>' + message + '</p>';
    if (user === 'You') {
<<<<<<< HEAD
        div.setAttribute("style", 'min-width:0%; max-width:80%;');
        div.className = 'chat-background-attendee';
        html += '<span class="time-right">';

=======
        div.setAttribute("style",'min-width:0%; max-width:80%;');
        div.className ='chat-background-attendee';
        html += '<span class="time-right">';
>>>>>>> 3b9760cfc79a7909c0f3f3871bdeb74ab74c2ea4
    } else {
        div.setAttribute("style",'min-width:0%; max-width:80%;background-color: #d6f9f5;');
        div.className = 'chat-background-invitee-attendee';
        html += '<span class="time-left">';
    }

    html += '<i class="fa fa-user"></i>&nbsp;' + user + ' ' + formatDate(new Date()) + '</span>'
    div.innerHTML = html;
    chatContainer.insertBefore(div, chatContainer.lastChild);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);
    document.getElementById('input-text-chat').focus();
    
}
connection.videosContainer = document.getElementById('videos_container');
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
    customDiv.setAttribute("style", 'width:' + Math.round(window.innerHeight * 0.15) + 'px;height:' + Math.round(window.innerHeight * 0.15) + 'px;padding:5px;text-align: center; float:left;position: absolute;bottom: 32%;right: 85px;');
    var heading = document.createElement('div');
    heading.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.15) - 10) + 'px;height:23px;padding:2px;text-align: center;background-color:#AF2127;color:#fff;margin-bottom: -30px;border:1px solid #AF2127;font-weight:bold;');
    var attendeeFullName = event.extra;
    attendeeFullName = attendeeFullName.split(" ");
    var attendeeFullNameArray = new Array();
    for (var i = 0; i < attendeeFullName.length; i++) {
        attendeeFullNameArray.push(attendeeFullName[i]);
        if (i != attendeeFullName.length - 1) {
            attendeeFullNameArray.push(" ");
        }
    }
    var attendeeNameLetter = null;
    heading.innerHTML = event.type === 'local' ? 'You' : event.extra;
    customDiv.appendChild(heading);
    if (event.stream.isVideo == 0) {
        video.setAttribute("style", "display:none; ");
        video.hidden = true;
        if (attendeeFullNameArray.length < 3) {
            attendeeNameLetter = attendeeFullNameArray[0].substring(0, 1).toUpperCase();
        } else {
            attendeeNameLetter = attendeeFullNameArray[0].substring(0, 1).toUpperCase() + attendeeFullNameArray[2].substring(0, 1).toUpperCase();
        }
        var initialsDiv = document.createElement('div');
        initialsDiv.innerHTML = event.type === 'local' ? 'You' : attendeeNameLetter;
        initialsDiv.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.15) - 10) + 'px;height:' + (Math.round(window.innerHeight * 0.15) - 40) + 'px;padding-top:17%;text-align: center;background-color:#ffeeed;color:#AF2127;margin-top: 30px;font-size:3vh;border:1px solid #AF2127;font-weight: 600;');
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
                viewer.innerHTML = event.extra + ' shared screen';
            }
        }
    } else {
        if (document.getElementById(event.streamid + 'parent') == null) {
            connection.videosContainer.appendChild(customDiv);
            if (event.type !== 'local') {
                var viewer = document.createElement('li');
                viewer.id = event.userid + 'viewer';
                viewer.innerHTML = event.extra + ' joined meeting on ' + (event.stream.isVideo == 0 ? "audio" : "video") + " mode";
                viewerListDiv.appendChild(viewer);
            }
        }
    }
    setTimeout(function () {
        video.play();
    }, 5000);
    video.id = event.streamid;
};
// connection.onMediaError = function (event) {
//     alertService.error(event.message, "Device error!");
//     document.getElementById('btn-leave-room').disabled = true;
//     document.getElementById('open-room').disabled = false;

// }
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
    document.getElementById('input-text-chat').disabled = false;
    if (isHost) {
        document.getElementById('btn-leave-room').disabled = false;
        document.querySelector('h1').innerHTML = 'You are connected with: ' + connection.getAllParticipants().join(', ');
    } else {
        document.getElementById('btn-leave-room').disabled = false;
    }
};

connection.onclose = function () {
    // if (connection.getAllParticipants().length) {
    //     document.querySelector('h1').innerHTML = 'You are still connected with: ' + connection.getAllParticipants().join(', ');
    // } else {
    //     document.querySelector('h1').innerHTML = 'Seems session has been closed or all participants left.';
    // }
};
connection.onEntireSessionClosed = function (event) {
    document.getElementById('share-file').style.display = 'none';
    document.getElementById('disable-video').style.display = 'none';
    document.getElementById('share-screen').style.display = 'none';
    document.getElementById('input-text-chat').disabled = true;
    document.getElementById('btn-leave-room').disabled = true;
    document.getElementById('open-or-join-room').disabled = false;
    // document.getElementById('open-room').disabled = true;
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

function showRoomURL(roomid) {
    // var roomQueryStringURL = window.location.href.split('?')[0] + '?meetingCode=' + roomid;
    // html = 'Meeting URL: <a style="color:white;" href="' + roomQueryStringURL + '" target="_blank">' + roomQueryStringURL + '</a>';
    var roomURLsDiv = document.getElementById('room-urls');
    // roomURLsDiv.innerHTML = html;
    // roomURLsDiv.style.display = 'block';
}
function disableInputButtons() {
    document.getElementById('open-or-join-room').disabled = true;
    // document.getElementById('open-room').disabled = true;
    document.getElementById('join-room').disabled = true;
    document.getElementById('room-id').disabled = true;
}

function onDetectRTCLoaded() {
    var videoValue = DetectRTC.hasWebcam;
    if (!videoValue) {
        alertService.warning('Switching to audio mode.', 'Web Cam not detected');
        //  document.getElementById('disable-video').style.visibility = 'hidden';
        //document.getElementById('disable-video').style.display = 'none';
    }
    videoValue = false;
    audioValue = false;
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


var roomid = document.getElementById('room-id').value;
if (InitiatedChatRoomId != null && InitiatedChatRoomId.indexOf(localStorage.getItem('selectedUserCode')) >= 0) {
    roomid = localStorage.getItem('P2PChatInitiated');
} else {
    roomid = 'Peer2PeerMeet_' + localStorage.getItem('loggedInUserCode') + '_' + localStorage.getItem('selectedUserCode');
}

if (roomid && roomid.length) {
    document.getElementById('room-id').value = roomid;
    localStorage.setItem(connection.socketMessageEvent, roomid);
    (function reCheckRoomPresence() {
        disableInputButtons();
        if (roomid == 'Peer2PeerMeet_' + localStorage.getItem('loggedInUserCode') + '_' + localStorage.getItem('selectedUserCode')) {
            document.getElementById('open-room').disabled = false;
            connection.openOrJoin(document.getElementById('room-id').value, function (isRoomExists, roomid) {
                if (!isRoomExists) {
                    showRoomURL(roomid);
                }
                document.getElementById('btn-save-mom').disabled = false;
                document.getElementById('input-text-chat').disabled = false;
                document.getElementById('btn-leave-room').disabled = false;
                return;
            });

        }
        connection.checkPresence(roomid, function (isRoomExists) {
            if (isRoomExists) {
                connection.join(roomid);
                document.getElementById('btn-save-mom').disabled = false;
                document.getElementById('input-text-chat').disabled = false;
                showRoomURL(roomid);
                return;
            }
            setTimeout(reCheckRoomPresence, 5000);
        });
    })();
}