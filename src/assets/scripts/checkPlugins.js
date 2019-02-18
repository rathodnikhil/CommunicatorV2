var alertService = window.customAlertService;
if (typeof RecordRTC_Extension === 'undefined') {

    var url = '/#/error/recordscreen';
    var popup_window = window.open(url, "myWindow", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=500, height=500");
    try {
        popup_window.focus();
    } catch (e) {
        alertService.error("Pop-up Blocker is enabled! Please add this site to your exception list. And try again", "Popup blocked");
    }
    var timer = setInterval(checkChild, 500);
    document.getElementById("isScreenSharePopupClosed").innerHTML="true";
    function checkChild() {
        if (popup_window.closed) {
            window.location.reload();
            clearInterval(timer);
        }
    }

}

var extensionid = 'ajhifddimkapgcifgcodmmfdlknahffk';

var image = document.createElement('img');
image.src = 'chrome-extension://' + extensionid + '/icon.png';
image.onload = function () {    
};
image.onerror = function () {
    var url = '/#/error/sharescreen';
    var popup_window = window.open(url, "myWindow", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=500, height=500");
    try {
        popup_window.focus();
    } catch (e) {
        alert("Pop-up Blocker is enabled! Please add this site to your exception list. And click share screen again");
    }
    var timer = setInterval(checkChild, 500);
    document.getElementById("isRecordScreenPopupClosed").innerHTML="true";
    function checkChild() {
        if (popup_window.closed) {
            window.location.reload();
            clearInterval(timer);
        };        
    }
};