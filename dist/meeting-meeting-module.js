(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meeting-meeting-module"],{

/***/ "./src/app/layout/meeting/meeting-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/meeting/meeting-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: MeetingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingRoutingModule", function() { return MeetingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _meeting_meeting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting/meeting.component */ "./src/app/layout/meeting/meeting/meeting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _meeting_meeting_component__WEBPACK_IMPORTED_MODULE_2__["MeetingComponent"]
    }
];
var MeetingRoutingModule = /** @class */ (function () {
    function MeetingRoutingModule() {
    }
    MeetingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MeetingRoutingModule);
    return MeetingRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/meeting/meeting.module.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/meeting/meeting.module.ts ***!
  \**************************************************/
/*! exports provided: MeetingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingModule", function() { return MeetingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _meeting_meeting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meeting/meeting.component */ "./src/app/layout/meeting/meeting/meeting.component.ts");
/* harmony import */ var _meeting_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meeting-routing.module */ "./src/app/layout/meeting/meeting-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _bs_component_bs_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bs-component/bs-component.module */ "./src/app/layout/bs-component/bs-component.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MeetingModule = /** @class */ (function () {
    function MeetingModule() {
    }
    MeetingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _meeting_routing_module__WEBPACK_IMPORTED_MODULE_3__["MeetingRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlertModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"],
                _bs_component_bs_component_module__WEBPACK_IMPORTED_MODULE_7__["BsComponentModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            declarations: [_meeting_meeting_component__WEBPACK_IMPORTED_MODULE_2__["MeetingComponent"]]
        })
    ], MeetingModule);
    return MeetingModule;
}());



/***/ }),

/***/ "./src/app/layout/meeting/meeting/meeting.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/meeting/meeting/meeting.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\r\n    <div class=\"col-md-12 header\" style=\"text-align: center;\">\r\n        <h3>Settings</h3>\r\n        <span id=\"meeting-error\"></span>\r\n    </div>\r\n</div>\r\n<div class=\"col-lg-12\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-8 meeting-activity\" style=\"height: 90vh;\">\r\n\r\n                <div class=\"card-header\" style=\"border-radius: 8px 8px 0px 0px;margin-bottom: -2px;\">\r\n                    <div class=\"row\" style=\"justify-content: center;\">\r\n                        <input type=\"text\" id=\"room-id\" class=\"customIp\" value=\"Enter Meeting Id\" autocorrect=off autocapitalize=off size=20>\r\n                        <button id=\"open-room\" class=\"btn btn-sec\" style=\"margin:0px 10px 0px 10px\">Start Meeting</button>\r\n                        <button id=\"join-room\" class=\"btn btn-sec\" style=\"margin:0px 10px 0px 10px\">Join Meeting</button>\r\n                        <button id=\"share-file\" class=\"btn btn-sec\" style=\"display:none;margin:0px 10px 0px 10px;\">Share File</button>\r\n                        <button id=\"share-screen\" class=\"btn btn-sec\" style=\"display:none;margin:0px 10px 0px 10px;\">Share Screen</button>\r\n                        <button id=\"open-or-join-room\" style=\"display:none;\">Auto Open Or Join Room</button>\r\n                    </div>\r\n                    <div class=\"row\" style=\"justify-content: center;\">\r\n                        <div id=\"room-urls\" style=\"text-align: center;display: none;\"></div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row parent\">\r\n                    <div id=\"file-container\" style=\"width: 100%; overflow-y: scroll;\"></div>\r\n                    <div class=\"card-header mom-header\" [@MomHeader]=\"isMOMvisible?'active':'inactive'\"> Minutes of meeting\r\n                        <i class=\"fa fa-chevron-up pull-right\" [@arrow]=\"isMOMvisible?'up':'down'\" aria-hidden=\"true\" (click)=\"isMOMvisible = !isMOMvisible\"></i>\r\n                    </div>\r\n                    <div class=\"child\" [@MomBody]=\"!isMOMvisible?'active':'inactive'\">\r\n                        <div class=\"mom-box\">\r\n                            <div style=\"margin-top: 20px;\" *ngIf=\"nullCheckFlag === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"nullCheckFlag\">\r\n                                <strong>Error: </strong>Failed to recieve response from server\r\n                            </div>\r\n                            <div style=\"margin-top: 20px;\" *ngIf=\"momAddDesciption === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"momDescription\">\r\n                                <strong>Error: </strong>Enter MOM Description\r\n                            </div>\r\n                            <div style=\"margin-top: 20px;\" *ngIf=\"momAddSuccess === true\" class=\"alert alert-success alert-dismissable\" [(ngModel)]=\"momAddSuccess\">\r\n                                <strong>Success: </strong>MOM Details has been Saved Successfully.\r\n                            </div>\r\n                            <div class=\"mom-body\" style=\"text-align: center;\">\r\n                                <textarea placeholder=\"add MOM\" class=\"mom-textarea\" [(ngModel)]=\"momDescription\"></textarea>\r\n                                <button class=\"btn btn-sec\" (click)=\"saveMom()\">Save MOM</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row attendee-row\">\r\n                    <div class=\"scrollmenu\">\r\n                        <div id=\"videos-container\">                           \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row meeting-bottom\">\r\n                    <div id=\"container\">\r\n                        <div id=\"left\">\r\n                            <button id=\"btn-leave-room\" class=\"btn btn-danger btn-lg\">End Meeting</button>\r\n                        </div>\r\n                        <!-- <div id=\"right\"></div> -->\r\n                        <div id=\"center\">\r\n                            <button class=\"btn btn-primary\">\r\n                                <i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-primary\">\r\n                                <i class=\"fa fa-microphone-slash\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-primary\">\r\n                                <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                            <button class=\"btn btn-primary\">\r\n                                <i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col-sm-4 meeting-activity\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">Meeting Activity</div>\r\n                    <div class=\"card-body\">\r\n                        <ngb-tabset style=\"padding:20px;\">\r\n                            <ngb-tab title=\"Chat\">\r\n                                <ng-template ngbTabContent>\r\n                                    <!-- <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                                        <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{messageSendTo}}</button>\r\n                                        <div ngbDropdownMenu>\r\n                                            <button *ngFor=\"let member of userList\" class=\"dropdown-item\" on-click=\"changeMessageTo(member)\">\r\n                                                {{member.name+ ' '+member.lastName}}</button>                                            \r\n                                        </div>\r\n                                    </div> -->\r\n                                    <div style=\"height: 60vh; overflow-y: scroll\" id=\"chat-container\" class=\"chat-output\">\r\n                                    </div>\r\n                                    <div class=\"col-md-12\" style=\"padding-top: 20px;\">\r\n                                        <div class=\"row\">\r\n                                            <span class=\"col-md-10\">\r\n                                                <textarea placeholder=\"Type Message Here..\" id=\"input-text-chat\" style=\"width:100%;height:70px;\"></textarea>\r\n                                            </span>\r\n                                            <span class=\"col-md-2\" style=\"line-height: 80px; cursor: pointer;\">\r\n                                                <i class=\"fa fa-paper-plane fa-3x\" id=\"alternate-send-chat\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Notes\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row content-tab\">\r\n                                        <textarea placeholder=\"Type Notes Here...\" style=\"width: 100%; height: 60vh;\"></textarea>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Settings\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row content-tab\">\r\n                                        <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                                            <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{momTo}}</button>\r\n                                            <div ngbDropdownMenu>\r\n                                                <button *ngFor=\"let member of userList\" class=\"dropdown-item\" on-click=\"changeMomTo(member)\">\r\n                                                    {{member.name+ ' '+member.lastName}}</button>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\">\r\n                                            <p>Audio Input\r\n                                                <span>Default Microphone</span>\r\n                                            </p>\r\n                                            <p>Video Input\r\n                                                <span>Laptop Camera</span>\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                        </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<section class=\"make-center\" style=\"display:none;\">\r\n    <h1 style=\"display:none;\"></h1>\r\n\r\n    <br>\r\n    <br>\r\n    <!-- <input type=\"text\" id=\"input-text-chat\" placeholder=\"Enter Text Chat\" disabled> -->\r\n\r\n    <br>\r\n    <br>\r\n    <!-- <button id=\"btn-leave-room\" disabled>Leave /or close the room</button> -->\r\n\r\n\r\n\r\n    <div id=\"chat-container\">\r\n        <!-- <div id=\"file-container\"></div> -->\r\n        <!-- <div class=\"chat-output\"></div> -->\r\n    </div>\r\n    <!-- <div id=\"videos-container\"></div> -->\r\n</section>"

/***/ }),

/***/ "./src/app/layout/meeting/meeting/meeting.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/meeting/meeting/meeting.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn-sec {\r\n    background-color: #ffb94b;\r\n    background-image: linear-gradient(top, #fddb6f, #ffb94b);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n.btn-cancel{\r\n    color: rgb(248, 87, 87);\r\n    background-color: rgb(248, 87, 87);\r\n    background-image: linear-gradient(top, rgb(253, 78, 78), rgb(248, 87, 87));\r\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n      border-width: 1px;\r\n      border-style: solid;\r\n      border-color: rgb(218, 10, 10);\r\n      cursor: pointer;\r\n      text-align: center;\r\n      font: Arial, Helvetica;\r\n      color: rgb(248, 241, 241);\r\n    }\r\na{\r\n        cursor: pointer;\r\n        color: #ffffff;\r\n    }\r\n.top {\r\n        height: 92px;\r\n        padding: 15px;\r\n        border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n        background-image: url(/assets/images/logobg.png);\r\n        background-position-y: bottom;\r\n    }\r\n.left {\r\n        width: 15%;\r\n        float:left;\r\n        padding: 15px;\r\n        background: #e5efff;\r\n        background-image: url(/assets/images/menuBg.png);\r\n        color: #ffffff;\r\n        font-weight: bold;\r\n    }\r\n.main {\r\n      margin-left:15%;\r\n      padding: 15px;\r\n     }\r\ntable {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        padding:30px;\r\n    }\r\ntd, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\nth{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n    }\r\ntr:nth-child(even) {\r\n        background-color: #e5efff;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.date-period-select {\r\n        border-left: 2px solid #999;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        height: 15%;\r\n        cursor: pointer;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.filter-list ul{\r\n        list-style-type: none;\r\n    }\r\n.filter-list ul li input{\r\n    cursor: pointer;\r\n    }\r\n#container {\n  width: 100%;\n  text-align: center; }\r\n#left {\n  float: left; }\r\n#center {\n  display: inline-block;\n  margin: 0 auto; }\r\ndiv.scrollmenu {\n  overflow: auto;\n  white-space: nowrap; }\r\ndiv.scrollmenu div {\n  display: inline-block;\n  text-align: center;\n  text-decoration: none; }\r\ndiv.scrollmenu a:hover {\n  background-color: #ddd; }\r\n#remote-streams-container {\n  width: 100%;\n  float: left; }\r\n#remote-streams-container div {\n  float: left;\n  padding: 10px; }\r\n#remote-streams-container div video {\n  width: 95px; }\r\n.parent {\n  background-color: f1f1f1;\n  position: relative;\n  height: 50vh;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  background: #eeebeb;\n  padding: 5px;\n  margin: 2px; }\r\n.child {\n  width: 47%;\n  height: 35%;\n  background-color: #ddd;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  border-radius: 8px; }\r\n.child .mom-box {\n    height: 100%; }\r\n.child .mom-box .card-header {\n      height: 20%; }\r\n.child .mom-box .mom-body {\n      height: 80%; }\r\n.child .mom-box .mom-body .mom-textarea {\n        width: 100%;\n        height: 60%; }\r\n.card-header {\n  background: #3277d3;\n  color: #ffffff;\n  font-weight: bold; }\r\n.dropdown {\n  margin-top: 15px; }\r\n.meeting-activity {\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  padding: 5px; }\r\n.card-body {\n  height: 80vh;\n  overflow-y: hidden; }\r\n.container::after {\n  content: \"\";\n  clear: both;\n  display: table; }\r\n.mom-header {\n  position: absolute;\n  width: 47%;\n  right: 0px;\n  top: 65%;\n  margin-top: -50px;\n  height: 50px; }\r\n.attendee-row {\n  height: 30vh;\n  padding: 5px;\n  margin: 2px; }\r\n.customIp {\n  background: transparent;\n  color: white;\n  margin: 0px 10px 0px 10px; }\r\n.toast {\n  position: fixed;\n  display: block;\n  bottom: 2em;\n  height: 2em;\n  width: 10em;\n  left: calc(50% - 5em);\n  -webkit-animation: toast-fade-in 1s 2 alternate;\n          animation: toast-fade-in 1s 2 alternate;\n  background-color: black;\n  border-radius: 2em;\n  color: white;\n  text-align: center;\n  padding: 1em;\n  line-height: 2em;\n  opacity: 0; }\r\n@-webkit-keyframes toast-fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\r\n@keyframes toast-fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\r\n.meeting-bottom {\n  background: #eeebeb;\n  height: 6vh;\n  position: absolute;\n  bottom: 0px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/layout/meeting/meeting/meeting.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/meeting/meeting/meeting.component.ts ***!
  \*************************************************************/
/*! exports provided: MeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingComponent", function() { return MeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_meeting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/meeting-service */ "./src/app/services/meeting-service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
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






var MeetingComponent = /** @class */ (function () {
    function MeetingComponent(document, elementRef, userService, loginService, meetingService, activatedRoute, router) {
        this.document = document;
        this.elementRef = elementRef;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.isMOMvisible = true;
        this.userList = [];
        this.meetingCode = '';
        this._userService = userService;
        this._loginService = loginService;
        this._meetingService = meetingService;
    }
    MeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        // debugger;
        if (!localStorage.getItem('loggedInuserName')) {
            this._loginService.setPreviousUrl(this.router.url);
            this.router.navigate(['/login']);
        }
        this.messageSendTo = 'Send Message to';
        this.momTo = 'set MOM Duty';
        this.activatedRoute.queryParams.subscribe(function (params) {
            // debugger;
            _this.meetingCode = params['meetingCode'];
            console.log(_this.meetingCode);
        });
    };
    MeetingComponent.prototype.ngAfterViewInit = function () {
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
    MeetingComponent.prototype.afterScriptAdded = function () {
        // debugger;
        // const meetingName = this.document.getElementById('meeting-name');
        // meetingName.value = this.loggedInUser.name + ' ' + this.loggedInUser.lastName + '_'
        //     + this.selectedUser.firstName + ' ' + this.selectedUser.lastName + '_videoCall';
        // this.document.getElementById('setup-meeting').click();
        // debugger;
        this.document.getElementById('room-id').value = this.meetingCode === undefined ? 'Enter Meeting Id' : this.meetingCode;
        var params = {
            width: '350px',
            height: '420px',
        };
        if (typeof (window['functionFromExternalScript']) === 'function') {
            window['functionFromExternalScript'](params);
        }
    };
    // to set selected send message to
    MeetingComponent.prototype.changeMessageTo = function (member) {
        this.messageSendTo = member.name + ' ' + member.lastName;
    };
    // to set selected mom to
    MeetingComponent.prototype.changeMomTo = function (member) {
        this.momTo = member.name + ' ' + member.lastName;
    };
    MeetingComponent.prototype.toggleMOM = function () {
        this.isMOMvisible = !this.isMOMvisible;
    };
    // save mom details
    MeetingComponent.prototype.saveMom = function () {
        var _this = this;
        if (this.momDescription === '' || this.momDescription === null || typeof this.momDescription === "undefined") {
            this.momAddDesciption = true;
            setTimeout(function () {
                this.momAddDesciption = false;
            }.bind(this), 5000);
        }
        else {
            var payload = { 'momDescription': this.momDescription };
            this._meetingService.saveMomDetails(payload).subscribe(function (resp) {
                _this.errorFl = resp.json().errorFl;
                if (_this.errorFl === true) {
                    _this.nullCheckFlag = true;
                    setTimeout(function () {
                        this.nullCheckFlag = false;
                    }.bind(_this), 5000);
                }
                else {
                }
            });
        }
    };
    MeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meeting',
            template: __webpack_require__(/*! ./meeting.component.html */ "./src/app/layout/meeting/meeting/meeting.component.html"),
            styles: [__webpack_require__(/*! ./meeting.component.scss */ "./src/app/layout/meeting/meeting/meeting.component.scss")],
            animations: [
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["trigger"])('MomBody', [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        display: 'block'
                    })),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        display: 'none'
                    })),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in')),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => inactive', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in'))
                ]),
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["trigger"])('MomHeader', [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["state"])('inactive', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        top: '100%'
                    })),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["state"])('active', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        top: '65%'
                    })),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2ms ease-in')),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('active => inactive', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('450ms ease-in'))
                ]),
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["trigger"])('arrow', [
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["state"])('up', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'rotate(180deg)'
                    })),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["state"])('down', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        transform: 'rotate(0deg)'
                    })),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('up => down', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2ms ease-in')),
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["transition"])('down => up', Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["animate"])('450ms ease-in'))
                ]),
            ],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _services_meeting_service__WEBPACK_IMPORTED_MODULE_3__["MeetingService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MeetingComponent);
    return MeetingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=meeting-meeting-module.js.map