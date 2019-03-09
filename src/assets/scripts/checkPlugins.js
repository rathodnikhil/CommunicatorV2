var alertService = window.customAlertService;

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
var iOS = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0;
var edge = ua.indexOf("edge") > -1;
var safari = (ua.indexOf("safari") > -1) && (ua.indexOf("chrome") === -1);
var isFireFox = ua.indexOf("firefox") > -1;
if (!isAndroid && !iOS && !edge && !safari && !isFireFox) {
    if (typeof RecordRTC_Extension === 'undefined') {

        var url = '/#/error/recordscreen';
        var popup_window = window.open(url, "myWindow", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=800, height=500");
        try {
            popup_window.focus();
        } catch (e) {
            alertService.error("Pop-up Blocker is enabled! Please add this site to your exception list, and refresh the page", "Popup blocked");
        }
        var timer = setInterval(checkChild, 500);
        document.getElementById("isScreenSharePopupClosed").innerHTML = "true";
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
        var popup_window = window.open(url, "myWindow", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=yes, width=800, height=500");
        try {
            popup_window.focus();
        } catch (e) {
            alertService.warning("Pop-up Blocker is enabled! Please add this site to your exception list , and refresh the page");
        }
        var timer = setInterval(checkChild, 500);
        document.getElementById("isRecordScreenPopupClosed").innerHTML = "true";
        function checkChild() {
            if (popup_window.closed) {
                window.location.reload();
                clearInterval(timer);
            };
        }
    };
}