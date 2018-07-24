(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blank-page-blank-page-module"],{

/***/ "./src/app/layout/blank-page/blank-page-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: BlankPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageRoutingModule", function() { return BlankPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _blank_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-page.component */ "./src/app/layout/blank-page/blank-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _blank_page_component__WEBPACK_IMPORTED_MODULE_2__["BlankPageComponent"]
    }
];
var BlankPageRoutingModule = /** @class */ (function () {
    function BlankPageRoutingModule() {
    }
    BlankPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BlankPageRoutingModule);
    return BlankPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"https://cdn.webrtc-experiment.com/meeting.js\"> </script> -->\r\n<!-- <button id=\"setup-new-meeting\">Setup New Meeting</button>\r\n\r\n<table style=\"border-left: 1px solid black; width: 100%;\">\r\n<tr>\r\n<td>\r\n    <h2 style=\"display: block; text-align: center;\">\r\n        Local Media Stream</h2>\r\n    <section id=\"local-media-stream\"></section>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td style=\"border-top: 1px solid black;\">\r\n    <h2 style=\"display: block; text-align: center;\">\r\n        Remote Media Streams</h2>\r\n    <section id=\"remote-media-streams\"></section>\r\n</td>\r\n</tr>\r\n</table> -->\r\n\r\n<section class=\"experiment\">\r\n    <section>\r\n        <h2 style=\"border: 0; padding-left: .5em;\">Wanna try yourself?</h2>\r\n        <input type=\"text\" id=\"meeting-name\">\r\n        <button id=\"setup-meeting\">Setup New Meeting</button>\r\n    </section>\r\n\r\n    <table style=\"width: 100%;\" id=\"meetings-list\"></table>\r\n    <table style=\"width: 100%;\">\r\n        <tr>\r\n            <td>\r\n                <h2 style=\"display: block; font-size: 1em; text-align: center;\">You!</h2>\r\n                <div id=\"local-streams-container\"></div>\r\n            </td>\r\n            <td style=\"background: white;\">\r\n                <h2 style=\"display: block; font-size: 1em; text-align: center;\">Remote Peers</h2>\r\n                <div id=\"remote-streams-container\"></div>\r\n            </td>\r\n        </tr>\r\n    </table>\r\n    <table style=\"width: 100%;\" id=\"meetingChat\"></table>\r\n    <div class=\"input-group\">\r\n        <textarea class=\"form-control send-box\" placeholder=\"Type message here\" id=\"textInput\">\r\n                </textarea>\r\n        <div class=\"input-group-append\">\r\n            <a class=\"btn\" id=\"sendText\">\r\n                <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\r\n            </a>\r\n            <a class=\"btn\" id=\"sendFile\">\r\n                <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\r\n            </a>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BlankPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function() { return BlankPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent(document, elementRef) {
        this.document = document;
        this.elementRef = elementRef;
    }
    BlankPageComponent.prototype.ngAfterViewInit = function () {
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.innerHTML = 'console.log(\'done\');'; // inline script
        // s.src = '../../../assets/scripts/meetingTest.js';
        var s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/meetingTest.js';
        var __this = this; // to store the current instance to call
        // afterScriptAdded function on onload event of
        // script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    };
    BlankPageComponent.prototype.ngOnInit = function () { };
    BlankPageComponent.prototype.afterScriptAdded = function () {
        var params = {
            width: '350px',
            height: '420px',
        };
        if (typeof (window['functionFromExternalScript']) === 'function') {
            window['functionFromExternalScript'](params);
        }
    };
    BlankPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__(/*! ./blank-page.component.html */ "./src/app/layout/blank-page/blank-page.component.html"),
            styles: [__webpack_require__(/*! ./blank-page.component.scss */ "./src/app/layout/blank-page/blank-page.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/layout/blank-page/blank-page.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/blank-page/blank-page.module.ts ***!
  \********************************************************/
/*! exports provided: BlankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blank-page-routing.module */ "./src/app/layout/blank-page/blank-page-routing.module.ts");
/* harmony import */ var _blank_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-page.component */ "./src/app/layout/blank-page/blank-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BlankPageModule = /** @class */ (function () {
    function BlankPageModule() {
    }
    BlankPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blank_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["BlankPageRoutingModule"]],
            declarations: [_blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"]]
        })
    ], BlankPageModule);
    return BlankPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=blank-page-blank-page-module.js.map