
connection.socket.emit(connection.socketCustomEvent, {
    sender: localStorage.getItem('loggedInuserName'),
    receiver: localStorage.getItem('selectedUser'),
    customMessage: 'initiatedChat'
});

// ......................................................
// ................FileSharing/TextChat Code.............
// ......................................................

document.getElementById('share-screen').onclick = function () {
    try {
        isShareScreen = true;
        var shareScreenEl = document.getElementById('share-screen');
        shareScreenEl.className = 'btn-primary';
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
        document.getElementById('meeting-error').display = none;
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
    //   div.className = 'chat-background';
    var message = event.data || event;
    var user = event.extra || 'You';
    html = '<p>' + message + '</p>';
    if (user === 'You') {
        div.className = 'chat-background';
        html += '<span class="time-right">';
    } else {
        div.className = 'chat-background-invitee';
        html += '<span class="time-left">';
    }

    html += '<i class="fa fa-user"></i>&nbsp;' + user + ' ' + formatDate(new Date()) + '</span>'
    div.innerHTML = html;
    chatContainer.insertBefore(div, chatContainer.lastChild);
    chatContainer.scrollTo(0, chatContainer.scrollHeight);

    document.getElementById('input-text-chat').focus();
}
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
    heading.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.30) - 10) + 'px;height:30px;padding:5px;text-align: center;background-color:#212529;color:#fff;margin-bottom: -30px;');
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
        initialsDiv.setAttribute("style", 'width:' + (Math.round(window.innerHeight * 0.30) - 10) + 'px;height:' + (Math.round(window.innerHeight * 0.30) - 40) + 'px;padding-top:20%;text-align: center;background-color:#bc151b;color:#fff;margin-top: 30px;font-size: 4.0vw;');
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
    if (connection.getAllParticipants().length) {
        document.querySelector('h1').innerHTML = 'You are still connected with: ' + connection.getAllParticipants().join(', ');
    } else {
        document.querySelector('h1').innerHTML = 'Seems session has been closed or all participants left.';
    }
};
connection.onEntireSessionClosed = function (event) {
    document.getElementById('share-file').style.display = 'none';
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

function showRoomURL(roomid) {
    // var roomQueryStringURL = window.location.href.split('?')[0] + '?meetingCode=' + roomid;
    // html = 'Meeting URL: <a style="color:white;" href="' + roomQueryStringURL + '" target="_blank">' + roomQueryStringURL + '</a>';
    var roomURLsDiv = document.getElementById('room-urls');
    // roomURLsDiv.innerHTML = html;
    // roomURLsDiv.style.display = 'block';
}
function disableInputButtons() {
    document.getElementById('open-or-join-room').disabled = true;
    document.getElementById('open-room').disabled = true;
    document.getElementById('join-room').disabled = true;
    document.getElementById('room-id').disabled = true;
}
