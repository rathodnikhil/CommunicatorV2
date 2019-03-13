// https://rtcmulticonnection.herokuapp.com/demos/Call-By-UserName.html TBD

// document.getElementsByClassName("drag-scroll-content")[0].setAttribute("id", "videos_container");
window.enableAdapter = true; // enable adapter.js
document.getElementById('btn-save-mom').disabled = true;
document.getElementById('input-text-chat').disabled = true;
document.getElementById('btn-leave-room').disabled = true;

// ......................................................
// .......................UI Code........................
// ......................................................
var alertService = window.customAlertService;
document.getElementById('share-screen').onclick = function () {
    try {
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
        if (document.getElementById('btn-mute').children[0].className.indexOf('fa-microphone-slash') >= 0)
            connection.streamEvents.selectFirst({
                local: true
            }).stream.mute();
        else
            connection.streamEvents.selectFirst({
                local: true
            }).stream.unmute();
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
    connection.open(document.getElementById('room-id').value, function () {
        showRoomURL(connection.sessionid);
        document.getElementById('meeting-error').display = none;
        document.getElementById('resume-count').click();
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

document.getElementById('btn-leave-room').onclick = function () {
    this.disabled = true;
    connection.leave();
    document.getElementById('meeting-error').innerText = 'You have left the meeting.';
    document.getElementById('share-file').style.display = 'none';
    document.getElementById('share-screen').style.display = 'none';
    document.getElementById('input-text-chat').disabled = true;
    document.getElementById('btn-mute').disabled = true;
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

function appendDIV(event) {
    var div = document.createElement('div');
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

    html += '<i class="fa fa-user"></i>&nbsp;' + user + '</span>'
    div.innerHTML = html;
    chatContainer.insertBefore(div, chatContainer.lastChild);
    div.focus();

    document.getElementById('input-text-chat').focus();
}

// ......................................................
// ..................RTCMultiConnection Code.............
// ......................................................

var connection = new RTCMultiConnection();
connection.socketCustomEvent = "cfsCommunicator_internal_message";
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
connection.extra = localStorage.getItem('loggedInuserName');
connection.enableFileSharing = true; // by default, it is "false".

connection.session = {
    audio: true,
    video: false,
    data: true
};

connection.mediaConstraints = {
    audio: true,
    video: false
};
connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: false
};
var screenshareCheck = {};
connection.audiosContainer = document.getElementById('videos_container');
connection.onstream = function (event) {
    var mediaElement = event.mediaElement;
    mediaElement.setAttribute("style", 'float:left;margin-top:200px;');

    var customDiv = document.createElement('div');
    customDiv.setAttribute("style", 'width:250px;height:260px;padding:5px;text-align: center; float:left;background-image: url("/assets/images/pic.png"); background-repeat: no-repeat;');
    var heading = document.createElement('div');
    heading.setAttribute("style", 'width:211px;height:30px;padding:5px;text-align: center;background-color:#212529;color:#fff;margin-bottom: -30px;');
    heading.innerHTML = event.type === 'local' ? 'You' : event.extra;
    customDiv.appendChild(heading);
    customDiv.appendChild(mediaElement);
    customDiv.setAttribute("drag-scroll-item", '');
    customDiv.setAttribute("id", event.streamid + 'parent');
    if (event.stream.isScreen) {
        if (screenshareCheck != event.stream.id && event.type !== 'local') {
            screenshareCheck = event.stream.id
            connection.filesContainer.appendChild(customDiv);
        }
    } else {
        // connection.audiosContainer.appendChild(button);
        if (connection.audiosContainer.children.length > 0) {
            var dummyPresent = false;
            for (let index = 0; index < connection.audiosContainer.children.length; index++) {
                var vid_element = connection.audiosContainer.children[index];
                if (vid_element.className.indexOf('dummyVideoPlaceHolders') >= 0) {
                    connection.audiosContainer.replaceChild(customDiv, vid_element);
                    dummyPresent = true;
                    break;
                }
            }
            if (!dummyPresent)
                connection.audiosContainer.appendChild(customDiv);
        } else {
            connection.audiosContainer.appendChild(customDiv);
        }
    }
    setTimeout(function () {
        if (mediaElement.media == undefined)
            mediaElement.play();
        else
            mediaElement.media.play();
    }, 5000);
    mediaElement.id = event.streamid;
};

connection.onmute = function (event) {
    connection.streamEvents[event.streamid].stream.mute();
};
connection.onstreamended = function (event) {
    var mediaElement = document.getElementById(event.streamid + 'parent');
    if (mediaElement) {
        mediaElement.parentNode.removeChild(mediaElement);
    }
};

connection.onmessage = appendDIV;
connection.filesContainer = document.getElementById('file-container');

connection.onopen = function () {
    document.getElementById('share-file').style.display = 'block';
    document.getElementById('share-screen').style.display = 'block';
    document.getElementById('input-text-chat').disabled = false;
    if (isHost){
        document.getElementById('btn-leave-room').disabled = false;
    document.querySelector('h1').innerHTML = 'You are connected with: ' + connection.getAllParticipants().join(', ');
    }else{
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
    document.getElementById('share-screen').style.display = 'none';
    document.getElementById('input-text-chat').disabled = true;
    document.getElementById('btn-leave-room').disabled = true;
    document.getElementById('open-or-join-room').disabled = false;
    document.getElementById('open-room').disabled = false;
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
    var roomQueryStringURL = window.location.href.split('?')[0] + '?meetingCode=' + roomid;
    html = 'Meeting URL: <a style="color:white;" href="' + roomQueryStringURL + '" target="_blank">' + roomQueryStringURL + '</a>';
    var roomURLsDiv = document.getElementById('room-urls');
    roomURLsDiv.innerHTML = html;
    roomURLsDiv.style.display = 'block';
}

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
var roomid = params["audio?meetingCode"];
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

            return;
        } else if (!isHost) {
            // document.getElementById('btn-leave-room').disabled = true;
        }
        connection.checkPresence(roomid, function (isRoomExists) {
            if (isRoomExists) {
                document.getElementById('meeting-error').innerText = '';
                connection.join(roomid);
                document.getElementById('resume-count').click();
                document.getElementById('btn-save-mom').disabled = false;
                document.getElementById('input-text-chat').disabled = false;
                return;
            }
            document.getElementById('meeting-error').innerText = 'Wait for host to start the meeting';
            setTimeout(reCheckRoomPresence, 5000);
        });
    })();
}
