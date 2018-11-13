// https://rtcmulticonnection.herokuapp.com/demos/Call-By-UserName.html TBD
window.enableAdapter = true; // enable adapter.js

// ......................................................
// .......................UI Code........................
// ......................................................
var alertService = window.customAlertService ;
document.getElementById('share-screen').onclick = function () {
    try {
        // this.disabled = true;
        connection.addStream({
            screen: true,
            oneway: true
        });
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
        document.getElementById('meeting-error').innerText = 'Meeting has started.';
        document.getElementById('resume-count').click();
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
    if (connection.isInitiator) {
        // use this method if you did NOT set "autoCloseEntireSession===true"
        // for more info: https://github.com/muaz-khan/RTCMultiConnection#closeentiresession
        connection.closeEntireSession(function () {
            document.getElementById('meeting-error').innerText = 'Meeting has ended.';
        });
    } else {
        connection.leave();
        document.getElementById('meeting-error').innerText = 'You have left the meeting.';
    }
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
    div.className = 'chat-background';
    var message = event.data || event;
    var user = event.extra || 'you';
    html = '<p>' + message + '</p>';
    if (user === 'you') {
        html += '<span class="time-right">';
    } else {
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
            var url='/#/error/sharescreen';
            var popup_window=window.open(url,"myWindow","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=500, height=500");
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
    // var width = parseInt(connection.audiosContainer.clientWidth / 2) - 20;
    // var height = parseInt(connection.audiosContainer.clientWidth / 2) - 20;
    // var mediaElement = getHTMLMediaElement(event.mediaElement, {
    //     title: event.type === 'local' ? 'you' : event.extra,
    //     buttons: [],
    //     width: width,
    //     showOnMouseEnter: false,
    //     height: height
    // });
    var mediaElement = event.mediaElement;
    mediaElement.height = '260';
    mediaElement.width = '260';
    mediaElement.style.padding = '5';
    if (event.stream.isScreen) {
        if (screenshareCheck != event.stream.id) {
            screenshareCheck = event.stream.id
            connection.filesContainer.appendChild(mediaElement);
        }
    } else {
        if (connection.audiosContainer.children.length > 0) {
            var dummyPresent = false;
            for (let index = 0; index < connection.audiosContainer.children.length; index++) {
                var vid_element = connection.audiosContainer.children[0];
                if (vid_element.className.indexOf('dummyVideoPlaceHolders') >= 0) {
                    connection.audiosContainer.replaceChild(mediaElement, vid_element);
                    dummyPresent = true;
                    break;
                }
            }
            if (!dummyPresent)
                connection.audiosContainer.appendChild(mediaElement);
        } else {
            connection.audiosContainer.appendChild(mediaElement);
        }
        // connection.audiosContainer.appendChild(mediaElement);
    }

    setTimeout(function () {
        mediaElement.media.play();
    }, 5000);

    mediaElement.id = event.streamid;
};

connection.onstreamended = function (event) {
    var mediaElement = document.getElementById(event.streamid);
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
    if (isHost)
        document.getElementById('btn-leave-room').disabled = false;
    document.querySelector('h1').innerHTML = 'You are connected with: ' + connection.getAllParticipants().join(', ');

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
            document.getElementById('btn-leave-room').disabled = false;
            return;
        } else if (!isHost) {
            // document.getElementById('btn-leave-room').disabled = true;
        }
        connection.checkPresence(roomid, function (isRoomExists) {
            if (isRoomExists) {
                document.getElementById('meeting-error').innerText = '';
                connection.join(roomid);
                document.getElementById('resume-count').click();
                return;
            }
            document.getElementById('meeting-error').innerText = 'Wait for host to start meeting';
            setTimeout(reCheckRoomPresence, 5000);
        });
    })();
}
// document.getElementById('parentContianer').onhashchange=function(){
//     debugger;
// }
