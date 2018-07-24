document.createElement('article');
document.createElement('footer');
var meeting = new Meeting();
// debugger;
var meetingsList = document.getElementById('meetings-list');
var meetingChat = document.getElementById('meetingChat');
var inputText = document.getElementById('textInput');
var meetingRooms = {};
meeting.onmeeting = function (room) {
    // debugger;
    if (meetingRooms[room.roomid]) return;
    meetingRooms[room.roomid] = room;
    var recipientName = room.roomid.split('_');
    if (recipientName[1] == localStorage.getItem("loggedInuserName")) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + recipientName[0] + ' calling</td>' +
            '<td><button class="join">Answer</button></td>';

        meetingsList.insertBefore(tr, meetingsList.firstChild);

        // when someone clicks table-row; joining the relevant meeting room
        tr.onclick = function () {
            room = meetingRooms[room.roomid];

            // manually joining a meeting room
            if (room) meeting.meet(room);

            meetingsList.style.display = 'none';
        };
    }
};

var remoteMediaStreams = document.getElementById('remote-streams-container');
var localMediaStream = document.getElementById('local-streams-container');

// on getting media stream
meeting.onaddstream = function (e) {
    if (e.type == 'local') {
        debugger;
        e.video.height = '100';
        e.video.width = '100';
        localMediaStream.appendChild(e.video)
    };
    if (e.type == 'remote') remoteMediaStreams.insertBefore(e.video, remoteMediaStreams.firstChild);
};

// via: https://github.com/muaz-khan/WebRTC-Experiment/tree/master/websocket-over-nodejs
meeting.openSignalingChannel = function (onmessage) {
    var channel = location.href.replace(/\/|:|#|%|\.|\[|\]/g, '');
    var websocket = new WebSocket('wss://www.webrtcweb.com:9449');
    websocket.onopen = function () {
        websocket.push(JSON.stringify({
            open: true,
            channel: channel
        }));
    };
    websocket.push = websocket.send;

    websocket.send = function (data) {
        if (websocket.readyState != 1) {
            return setTimeout(function () {
                websocket.send(data);
            }, 300);
        }

        websocket.push(JSON.stringify({
            data: data,
            channel: channel
        }));
    };
    websocket.onmessage = function (e) {
        var data = JSON.parse(e.data);
        if (data.indexOf('Text') > 0) {
            debugger;
            var tr = document.createElement('tr');
            tr.innerHTML = '<td> other user' + JSON.parse(data).Text + '</td>' +
                '<td></td>';

            meetingChat.insertBefore(tr, meetingChat.firstChild);
        }
        onmessage(data);


    };
    meeting.customSend = websocket.send;
    return websocket;
};

// using firebase for signaling
// meeting.firebase = 'muazkh';

// if someone leaves; just remove his video
meeting.onuserleft = function (userid) {
    var video = document.getElementById(userid);
    if (video) video.parentNode.removeChild(video);
};

// check pre-created meeting rooms
meeting.check();

document.getElementById('setup-meeting').onclick = function () {
    // setup new meeting room
    var meetingRoomName = document.getElementById('meeting-name').value || 'Simple Meeting';
    meeting.setup(meetingRoomName);

    this.disabled = true;
    // this.parentNode.innerHTML = '<h2><a href="' + location.href + '" target="_blank">Share this link</a></h2>';
};

document.getElementById('sendText').onclick = function () {

    debugger;
    var customMessage = {
        "userid": "",
        "Text": textInput.value
    };
    meeting.customSend(JSON.stringify(customMessage));
};

document.getElementById('cancelCall').onclick = function () {
    meeting.leave();
};