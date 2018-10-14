// <!-- Demo version: 2018.10.01 -->

// <!DOCTYPE html>
// <html lang="en" dir="ltr">
// <head>
//   <meta charset="utf-8">
//   <title>Call-By-UserName using RTCMultiConnection</title>
//   <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
//   <link rel="shortcut icon" href="/demos/logo.png">
//   <link rel="stylesheet" href="/demos/stylesheet.css">
//   <script src="/demos/menu.js"></script>
//   <style type="text/css">
//       table {
//         width: 100%;
//       }

//       td {
//         vertical-align: top;
//       }

//       td:first-child {
//         text-align: right;
//         width: 45%;
//       }

//       td:last-child {
//         text-align: left;
//         padding-left: 10px;
//         width: 45%;
//       }
//   </style>
// </head>
// <body>
//   <header>
//     <a class="logo" href="/demos/"><img src="/demos/logo.png" alt="RTCMultiConnection"></a>
//     <a href="/demos/" class="menu-explorer">Menu<img src="/demos/menu-icon.png" alt="Menu"></a>
//     <nav>
//       <li>
//         <a href="/demos/">Home</a>
//       </li>
//       <li>
//         <a href="https://www.rtcmulticonnection.org/docs/getting-started/">Getting Started</a>
//       </li>
//       <li>
//         <a href="https://www.rtcmulticonnection.org/FAQ/">FAQ</a>
//       </li>
//       <li>
//         <a href="https://www.youtube.com/playlist?list=PLPRQUXAnRydKdyun-vjKPMrySoow2N4tl">YouTube</a>
//       </li>
//       <li>
//         <a href="https://rtcmulticonnection.herokuapp.com/demos/">Demos</a>
//       </li>
//       <li>
//         <a href="https://github.com/muaz-khan/RTCMultiConnection/wiki">Wiki</a>
//       </li>
//       <li>
//         <a href="https://github.com/muaz-khan/RTCMultiConnection">Github</a>
//       </li>
//     </nav>
//   </header>

//   <h1>
//     Call-By-UserName
//     <p class="no-mobile">
//       Call Any Person By His UserName.
//     </p>
//   </h1>

//   <section class="make-center">
//     <table>
//         <tr>
//             <td style="padding-bottom: 40px;">
//                 <label for="current-username">Your UserName:</label>
//                 <input type="text" id="current-username" value="you" autocorrect=off autocapitalize=off size=20>
//             </td>

//             <td>
//                 <button id="change-your-own-username">Set Your UserName</button>
//             </td>
//         </tr>

//         <tr>
//             <td>
//                 <label for="callee-username">Callee UserName:</label>
//                 <input type="text" id="callee-username" value="he" autocorrect=off autocapitalize=off size=20>
//             </td>
//             <td>
//                 <button id="join-callee-using-his-username">Make a Video Call</button>
//             </td>
//         </tr>

//         <tr>
//             <td colspan="2">
//                 <div id="videos-container" style="margin: 20px 0;"></div>
//             </td>
//         </tr>
//     </table>


//   </section>

// <script src="/dist/RTCMultiConnection.min.js"></script>
// <script src="/dev/adapter.js"></script>
// <script src="/socket.io/socket.io.js"></script>

// <!-- custom layout for HTML5 audio/video elements -->
// <link rel="stylesheet" href="/dev/getHTMLMediaElement.css">
// <script src="/dev/getHTMLMediaElement.js"></script>
// <script>
// // ......................................................
// // ..................RTCMultiConnection Code.............
// // ......................................................

// var connection = new RTCMultiConnection();

// // by default, socket.io server is assumed to be deployed on your own URL
// connection.socketURL = '/';

// // comment-out below line if you do not have your own socket.io server
// // connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

// connection.socketMessageEvent = 'call-by-username-demo';

// // do not shift room control to other users
// connection.autoCloseEntireSession = true;

// connection.session = {
//     audio: true,
//     video: true,
//     broadcast: true // if you remove this, then it becomes MANY-to-MANY
// };

// connection.sdpConstraints.mandatory = {
//     OfferToReceiveAudio: true,
//     OfferToReceiveVideo: true
// };

// connection.videosContainer = document.getElementById('videos-container');
// connection.onstream = function(event) {
//     var existing = document.getElementById(event.streamid);
//     if(existing && existing.parentNode) {
//       existing.parentNode.removeChild(existing);
//     }

//     event.mediaElement.removeAttribute('src');
//     event.mediaElement.removeAttribute('srcObject');
//     event.mediaElement.muted = true;
//     event.mediaElement.volume = 0;

//     var video = document.createElement('video');

//     try {
//         video.setAttributeNode(document.createAttribute('autoplay'));
//         video.setAttributeNode(document.createAttribute('playsinline'));
//     } catch (e) {
//         video.setAttribute('autoplay', true);
//         video.setAttribute('playsinline', true);
//     }

//     if(event.type === 'local') {
//       video.volume = 0;
//       try {
//           video.setAttributeNode(document.createAttribute('muted'));
//       } catch (e) {
//           video.setAttribute('muted', true);
//       }

//       connection.dontCaptureUserMedia = true;
//     }
//     video.srcObject = event.stream;

//     var width = parseInt(connection.videosContainer.clientWidth / 3) - 20;
//     var mediaElement = getHTMLMediaElement(video, {
//         title: event.userid,
//         buttons: ['full-screen'],
//         width: width,
//         showOnMouseEnter: false
//     });

//     connection.videosContainer.appendChild(mediaElement);

//     setTimeout(function() {
//         mediaElement.media.play();
//     }, 5000);

//     mediaElement.id = event.streamid;
// };

// connection.onstreamended = function(event) {
//     var mediaElement = document.getElementById(event.streamid);
//     if (mediaElement) {
//         mediaElement.parentNode.removeChild(mediaElement);
//     }
// };

// connection.onMediaError = function(e) {
//     if (e.message === 'Concurrent mic process limit.') {
//         if (DetectRTC.audioInputDevices.length <= 1) {
//             alert('Please select external microphone. Check github issue number 483.');
//             return;
//         }

//         var secondaryMic = DetectRTC.audioInputDevices[1].deviceId;
//         connection.mediaConstraints.audio = {
//             deviceId: secondaryMic
//         };

//         connection.join(connection.sessionid);
//     }
// };

// // ..................................
// // ALL below scripts are redundant!!!
// // ..................................

// var joinCalleeUsingHisUsername = document.getElementById('join-callee-using-his-username');
// joinCalleeUsingHisUsername.onclick = function() {
//     this.disabled = true;
//     connection.checkPresence(calleeUserName.value, function(isOnline, username) {
//         if(!isOnline) {
//             joinCalleeUsingHisUsername.disabled = false;
//             alert(username + ' is not online.');
//             return;
//         }

//         connection.join(username);
//     });

//     setTimeout(function() {
//         joinCalleeUsingHisUsername.disabled = false;
//     }, 1000);
// };

// // caller
// var currentUserName = document.getElementById('current-username');
// currentUserName.onkeyup = currentUserName.onpaste = currentUserName.oninput = function() {
//     localStorage.setItem(this.id, this.value);
// };
// currentUserName.value = localStorage.getItem(currentUserName.id) || connection.token();
// connection.open(currentUserName.value);

// document.getElementById('change-your-own-username').onclick = function() {
//     this.disabled = true;
//     location.reload();
// };

// // callee
// var calleeUserName = document.getElementById('callee-username');
// calleeUserName.onkeyup = calleeUserName.onpaste = calleeUserName.oninput = function() {
//     localStorage.setItem(this.id, this.value);
// };
// calleeUserName.value = localStorage.getItem(calleeUserName.id) || connection.token();

// // detect 2G
// if(navigator.connection &&
//    navigator.connection.type === 'cellular' &&
//    navigator.connection.downlinkMax <= 0.115) {
//   alert('2G is not supported. Please use a better internet service.');
// }
// </script>

//   <section>
//     <p>
//       You can write cordova/ionic/phonegap based <a href="https://www.rtcmulticonnection.org/docs/Write-iOS-Apps/" target="_blank">iOS</a> or <a href="https://www.rtcmulticonnection.org/docs/Write-Android-Apps/" target="_blank">Android</a> apps for this demo as well.
//     </p>

//     <p>
//       You can run same demo on Safari-11 as well. (both on MacOSX & iOS)
//     </p>

//     <p>
//       Microsoft Edge is also supported.
//     </p>
//   </section>

//   <footer>
//     <small id="send-message"></small>
//   </footer>

//   <script src="https://cdn.webrtc-experiment.com/common.js"></script>
// </body>
// </html>

























window.enableAdapter = true; // enable adapter.js

// ......................................................
// .......................UI Code........................
// ......................................................

document.getElementById('share-screen').onclick = function () {
    this.disabled = true;
    connection.addStream({
        screen: true,
        oneway: true
    });
    // const EXTENSION_ID = 'ajhifddimkapgcifgcodmmfdlknahffk';
    // chrome.runtime.sendMessage(EXTENSION_ID, 'version', response => {
    //     if (!response) {

    //         if (confirm('You do not have chrome extension required for screen sharing. Do you wish to install the extension?')) {
    //             url = 'https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk';
    //             var popup_window=window.open(url,"myWindow","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=500, height=500");
    //             try {
    //                 popup_window.focus();
    //             } catch (e) {
    //                 alert("Pop-up Blocker is enabled! Please add this site to your exception list. And click share screen again");
    //             }

    //             // window.open(url, '_blank');
    //         }
    //         return;
    //     }
    //     else {
    //         this.disabled = true;
    //         connection.addStream({
    //             screen: true,
    //             oneway: true
    //         });
    //     }
    // });
};

document.getElementById('open-room').onclick = function () {
    if (document.getElementById('room-id').value === 'Enter Meeting Id') {
        alert('Enter valid meeting Id');
        return false;
    }
    disableInputButtons();
    connection.open(document.getElementById('room-id').value, function () {
        showRoomURL(connection.sessionid);
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
            document.querySelector('h1').innerHTML = 'Entire session has been closed.';
        });
    } else {
        connection.leave();
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

// document.getElementById('input-text-chat').onkeyup = function (e) {
//     if (e.keyCode != 13) return;

//     // removing trailing/leading whitespace
//     this.value = this.value.replace(/^\s+|\s+$/g, '');
//     if (!this.value.length) return;

//     connection.send(this.value);
//     appendDIV(this.value);
//     this.value = '';
// };

// document.getElementById('alternate-send-chat').onclick = function (e) {
//     // this.value = document.getElementById('input-text-chat').value;
//     // removing trailing/leading whitespace
//     this.value = document.getElementById('input-text-chat').value.replace(/^\s+|\s+$/g, '');
//     if (!this.value.length) return;

//     connection.send(this.value);
//     appendDIV(this.value);
//     document.getElementById('input-text-chat').value = '';
// };

// var chatContainer = document.querySelector('.chat-output');

function appendDIV(event) {
    // debugger;
    var div = document.createElement('div');
    div.className = 'chat-background';
    var message = event.data || event;
    var user = event.extra || 'you';
    // var html = '<div class="container">';
    html = '<p>' + message + '</p>';
    if (user === 'you') {
        html += '<span class="time-right">';
    } else {
        html += '<span class="time-left">';
    }

    html += '<i class="fa fa-user"></i>&nbsp;' + user + '</span>'
    // html += '</div>';
    div.innerHTML = html;
    chatContainer.insertBefore(div, chatContainer.lastChild);
    // div.tabIndex = 0;
    div.focus();

    document.getElementById('input-text-chat').focus();
}

// ......................................................
// ..................RTCMultiConnection Code.............
// ......................................................

var connection = new RTCMultiConnection();
var isHost = false;
// Using getScreenId.js to capture screen from any domain
connection.getScreenConstraints = function (callback) {
    getScreenConstraints(function (error, screen_constraints) {
        if (!error) {
            screen_constraints = connection.modifyScreenConstraints(screen_constraints);
            callback(error, screen_constraints);
            return;
        }
        throw error;
    });
};

// by default, socket.io server is assumed to be deployed on your own URL
// connection.socketURL = '/';

// comment-out below line if you do not have your own socket.io server
connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';

connection.socketMessageEvent = 'meeting';
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

connection.videosContainer = document.getElementById('videos-container');
connection.onstream = function (event) {
    event.mediaElement.removeAttribute('src');
    event.mediaElement.removeAttribute('srcObject');

    var video = document.createElement('video');
    video.controls = true;
    if (event.type === 'local') {
        video.muted = true;
    }
    video.srcObject = event.stream;
    // // debugger;
    var width = parseInt(connection.videosContainer.parentElement.clientHeight) - 20;
    var height = parseInt(connection.videosContainer.parentElement.clientHeight) - 20;
    var mediaElement = getHTMLMediaElement(video, {
        title: event.type === 'local' ? 'you' : event.extra,
        buttons: [],
        width: width,
        showOnMouseEnter: false,
        height: height
    });
    if (event.stream.isScreen) {
        connection.filesContainer.appendChild(mediaElement);
    } else {
        connection.videosContainer.appendChild(mediaElement);
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
    // seems room is already opened
    connection.join(useridAlreadyTaken);
};
connection.connectSocket(function(socket) {
    // listen custom messages from server
    // debugger;
    connection.socket.on(connection.socketCustomEvent, function(message) {
        // debugger;
     if(message.sender==localStorage.getItem("loggedInuserName"))
        alert(message.sender + ' shared custom message:\n\n' + message.customMessage);
    });
});
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
    // // debugger;
    // var roomHashURL = '#' + roomid;
    var roomQueryStringURL = window.location.href.split('?')[0] + '?meetingCode=' + roomid;

    // var html = '<h4>Unique URL for your meeting:</h4><br>';

    // html += 'Hash URL: <a href="' + roomHashURL + '" target="_blank">' + roomHashURL + '</a>';
    html = 'Meeting URL: <a style="color:white;" href="' + roomQueryStringURL + '" target="_blank">' + roomQueryStringURL + '</a>';

    var roomURLsDiv = document.getElementById('room-urls');
    roomURLsDiv.innerHTML = html;

    roomURLsDiv.style.display = 'block';
}

(function () {
    // // debugger;
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
// debugger;
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

    // auto-join-room
    (function reCheckRoomPresence() {
        document.getElementById('meeting-error').innerText = '';
        // // debugger;
        isHost = document.getElementById('isHost').innerText === "true";
        if (isHost) {
            document.getElementById('open-room').disabled = false;
            document.getElementById('meeting-error').innerText = 'You are the host. Kindly start the meeting.';
            document.getElementById('btn-leave-room').disabled = false;
            return;
        } else if (!isHost) {
            document.getElementById('btn-leave-room').disabled = true;
        }
        connection.checkPresence(roomid, function (isRoomExists) {
            if (isRoomExists) {
                document.getElementById('meeting-error').innerText = '';
                connection.join(roomid);
                return;
            }
            document.getElementById('meeting-error').innerText = 'Wait for host to start meeting';
            setTimeout(reCheckRoomPresence, 5000);
        });
    })();

    disableInputButtons();
}



// document.createElement('article');
// document.createElement('footer');
// var meeting = new RTCMultiConnection();
// // // debugger;
// var meetingsList = document.getElementById('meetings-list');
// var meetingChat = document.getElementById('meetingChat');
// var inputText = document.getElementById('textInput');
// var meetingRooms = {};
// meeting.onmeeting = function (room) {
//     // // debugger;
//     if (meetingRooms[room.roomid]) return;
//     meetingRooms[room.roomid] = room;
//     var recipientName = room.roomid.split('_');
//     if (recipientName[1] == localStorage.getItem("loggedInuserName")) {
//         var tr = document.createElement('tr');
//         tr.innerHTML = '<td>' + recipientName[0] + ' calling</td>' +
//             '<td><button class="join">Answer</button></td>';

//         meetingsList.insertBefore(tr, meetingsList.firstChild);

//         // when someone clicks table-row; joining the relevant meeting room
//         tr.onclick = function () {
//             room = meetingRooms[room.roomid];

//             // manually joining a meeting room
//             if (room) meeting.meet(room);

//             meetingsList.style.display = 'none';
//         };
//     }
// };

// var remoteMediaStreams = document.getElementById('remote-streams-container');
// var localMediaStream = document.getElementById('local-streams-container');

// // on getting media stream
// meeting.onaddstream = function (e) {
//     if (e.type == 'local') {
//         // debugger;
//         e.video.height = '100';
//         e.video.width = '100';
//         localMediaStream.appendChild(e.video)
//     };
//     if (e.type == 'remote') remoteMediaStreams.insertBefore(e.video, remoteMediaStreams.firstChild);
// };

// // via: https://github.com/muaz-khan/WebRTC-Experiment/tree/master/websocket-over-nodejs
// meeting.openSignalingChannel = function (onmessage) {
//     var channel = location.href.replace(/\/|:|#|%|\.|\[|\]/g, '');
//     var websocket = new WebSocket('wss://www.webrtcweb.com:9449');
//     websocket.onopen = function () {
//         websocket.push(JSON.stringify({
//             open: true,
//             channel: channel
//         }));
//     };
//     websocket.push = websocket.send;

//     websocket.send = function (data) {
//         if (websocket.readyState != 1) {
//             return setTimeout(function () {
//                 websocket.send(data);
//             }, 300);
//         }

//         websocket.push(JSON.stringify({
//             data: data,
//             channel: channel
//         }));
//     };
//     websocket.onmessage = function (e) {
//         var data = JSON.parse(e.data);
//         if (data.indexOf('Text') > 0) {
//             // debugger;
//             var tr = document.createElement('tr');
//             tr.innerHTML = '<td> other user' + JSON.parse(data).Text + '</td>' +
//                 '<td></td>';
//             meetingChat.insertBefore(tr, meetingChat.firstChild);
//         }
//         onmessage(data);
//     };
//     meeting.customSend = websocket.send;
//     return websocket;
// };

// // using firebase for signaling
// // meeting.firebase = 'muazkh';

// // if someone leaves; just remove his video
// meeting.onuserleft = function (userid) {
//     var video = document.getElementById(userid);
//     if (video) video.parentNode.removeChild(video);
// };

// // check pre-created meeting rooms
// // meeting.check();

// document.getElementById('setup-meeting').onclick = function () {
//     // setup new meeting room
//     var meetingRoomName = document.getElementById('meeting-name').value || 'Simple Meeting';
//     meeting.setup(meetingRoomName);
//     this.disabled = true;
//     // this.parentNode.innerHTML = '<h2><a href="' + location.href + '" target="_blank">Share this link</a></h2>';
// };

// document.getElementById('sendText').onclick = function () {
//     // debugger;
//     var customMessage = {
//         "userid": "",
//         "Text": textInput.value
//     };
//     meeting.customSend(JSON.stringify(customMessage));
// };

// document.getElementById('cancelCall').onclick = function () {
//     meeting.leave();
// };
