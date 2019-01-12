// debugger;
connection.socket.emit(connection.socketCustomEvent, {    
    sender: document.getElementById('room-id').value,
    customMessage: connection.extra+':chat'
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

    html += '<i class="fa fa-user"></i>&nbsp;' + user + '</span>'
    div.innerHTML = html;
    chatContainer.insertBefore(div, chatContainer.lastChild);
    chatContainer.scrollTo(0,chatContainer.scrollHeight);

    document.getElementById('input-text-chat').focus();
}