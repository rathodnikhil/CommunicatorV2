(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["past-mettings-past-mettings-module"],{

/***/ "./src/app/layout/past-mettings/past-meetings-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/past-mettings/past-meetings-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PastMeetingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastMeetingsRoutingModule", function() { return PastMeetingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _past_meetings_past_meetings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./past-meetings/past-meetings.component */ "./src/app/layout/past-mettings/past-meetings/past-meetings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _past_meetings_past_meetings_component__WEBPACK_IMPORTED_MODULE_2__["PastMeetingsComponent"]
    }
];
var PastMeetingsRoutingModule = /** @class */ (function () {
    function PastMeetingsRoutingModule() {
    }
    PastMeetingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PastMeetingsRoutingModule);
    return PastMeetingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/past-mettings/past-meetings/past-meetings.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/past-mettings/past-meetings/past-meetings.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"top\">\r\n    <div class=\"col-md-12 header\" style=\"text-align: center;\">\r\n        <h3>Past Meeting</h3>\r\n    </div>\r\n    <div style=\"float:right\">\r\n        <div class=\"align-center\">\r\n            <span style=\"font-size:14px;font-weight: bold;\">Filter By:&nbsp;</span>\r\n            <a style=\"padding-right:10px; cursor: pointer;\">Day</a>\r\n            <a class=\"date-period-select\">Month</a>\r\n            <a class=\"date-period-select\">Year</a>\r\n            <input type=\"text\" placeholder=\"Search by name\"  [(ngModel)]=\"searchText\"/>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"left filter-list\">\r\n<h4><i class=\"fa fa-filter\"></i>&nbsp;FILTERS</h4>\r\n<hr>\r\n<h5>General</h5>\r\n<input type=\"checkbox\" id=\"scheduledByMe\" (change)=\"scheduleByLoggedInUserId($event)\"> Schdule By Me<br>\r\n<input type=\"checkbox\" id=\"momByMe\"  (change)=\"momByLoggedInuser($event)\">MOM By Me<br>\r\n</div>\r\n<div class=\"main\">\r\n    <h4>Past Meeting Details</h4>\r\n    <hr>\r\n    <table>\r\n      <tr>\r\n        <th>Sr. No</th>\r\n        <th>Date</th>\r\n        <th>Meeting Id</th>\r\n        <th>Subject</th>\r\n        <th>Attendees</th>\r\n        <th>MOM</th>\r\n        <th>Chat History</th>\r\n      </tr>\r\n      <tr *ngFor=\"let meeting of pastMeetingList | genericSearchAllProp:searchText ;let srNo = index\">\r\n            <td>{{srNo+1}}</td>\r\n            <td>{{meeting.meetingDate}}</td>\r\n            <td>{{meeting.meetingId}}</td>\r\n            <td>{{meeting.subject}}</td>\r\n            <td>{{meeting.attendee}}</td>\r\n            <td><i (click)=\"download()\"  class=\"fa fa-file-text-o download-file\" ></i></td>\r\n            <td><i (click)=\"downloadFile()\" class=\"fa fa-file-text-o download-file\"></i></td>\r\n      </tr>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/past-mettings/past-meetings/past-meetings.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/past-mettings/past-meetings/past-meetings.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn-sec {\r\n    background-color: #ffb94b;\r\n    background-image: linear-gradient(top, #fddb6f, #ffb94b);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n.btn-cancel{\r\n    color: rgb(248, 87, 87);\r\n    background-color: rgb(248, 87, 87);\r\n    background-image: linear-gradient(top, rgb(253, 78, 78), rgb(248, 87, 87));\r\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n      border-width: 1px;\r\n      border-style: solid;\r\n      border-color: rgb(218, 10, 10);\r\n      cursor: pointer;\r\n      text-align: center;\r\n      font: Arial, Helvetica;\r\n      color: rgb(248, 241, 241);\r\n    }\r\na{\r\n        cursor: pointer;\r\n        color: #ffffff;\r\n    }\r\n.top {\r\n        height: 92px;\r\n        padding: 15px;\r\n        border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n        background-image: url(/assets/images/logobg.png);\r\n        background-position-y: bottom;\r\n    }\r\n.left {\r\n        width: 15%;\r\n        float:left;\r\n        padding: 15px;\r\n        background: #e5efff;\r\n        background-image: url(/assets/images/menuBg.png);\r\n        color: #ffffff;\r\n        font-weight: bold;\r\n    }\r\n.main {\r\n      margin-left:15%;\r\n      padding: 15px;\r\n     }\r\ntable {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        padding:30px;\r\n    }\r\ntd, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\nth{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n    }\r\ntr:nth-child(even) {\r\n        background-color: #e5efff;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.date-period-select {\r\n        border-left: 2px solid #999;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        height: 15%;\r\n        cursor: pointer;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.filter-list ul{\r\n        list-style-type: none;\r\n    }\r\n.filter-list ul li input{\r\n    cursor: pointer;\r\n    }\r\n.download-file {\n  color: #f7a21b;\n  font-size: 18px;\n  cursor: pointer; }\r\n.download-recording {\n  color: #3277d3;\n  font-size: 20px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/layout/past-mettings/past-meetings/past-meetings.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/past-mettings/past-meetings/past-meetings.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PastMeetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastMeetingsComponent", function() { return PastMeetingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_meeting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/meeting-service */ "./src/app/services/meeting-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as fileSaver from 'file-saver';
var PastMeetingsComponent = /** @class */ (function () {
    function PastMeetingsComponent(meetingService) {
        this.pastMeetingList = [];
        this.payloadSearch = { loggedInUserId: 2 };
        this._meetingService = meetingService;
    }
    PastMeetingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.momByMe = false;
        //past meeting list web service call
        this.pastMeetingList = [];
        var payload = { id: 2 };
        this._meetingService.getPastMeetingsByUser(payload).subscribe(function (data) {
            _this.pastMeetingList = data.json();
        });
    };
    //download chat and mom file
    PastMeetingsComponent.prototype.downloadFile = function () {
        this._meetingService.downloadPdfReportFile();
    };
    //scheduledByMe is checked
    PastMeetingsComponent.prototype.scheduleByLoggedInUserId = function (event) {
        this.scheduledByMe = true;
        if (event.target.checked) {
            if (this.momByMe === true) {
                this.getPastMeetingsByuser();
            }
            else {
                this.getPastMeetingsScheduledByUser();
            }
        }
        else {
            this.scheduledByMe = false;
            if (this.momByMe === true) {
                this.getMeetingsMomByUser();
            }
            else {
                this.getPastMeetingsByuser();
            }
        }
    };
    //momByMe is checked
    PastMeetingsComponent.prototype.momByLoggedInuser = function (event) {
        this.momByMe = true;
        if (event.target.checked) {
            if (this.scheduledByMe === true) {
                this.getPastMeetingsByuser();
            }
            else {
                this.getMeetingsMomByUser();
            }
        }
        else {
            this.momByMe = false;
            if (this.scheduledByMe === true) {
                this.getPastMeetingsScheduledByUser();
            }
            else {
                this.getPastMeetingsByuser();
            }
        }
    };
    PastMeetingsComponent.prototype.getPastMeetingsByuser = function () {
        var _this = this;
        var payload = { loggedInUserId: 2 };
        this._meetingService.getPastMeetingsByUser(payload).subscribe(function (data) {
            _this.pastMeetingList = data.json();
        });
    };
    PastMeetingsComponent.prototype.getPastMeetingsScheduledByUser = function () {
        var _this = this;
        this._meetingService.getPastMeetingsScheduledByUser(this.payloadSearch).subscribe(function (data) {
            _this.pastMeetingList = data.json();
        });
    };
    PastMeetingsComponent.prototype.getMeetingsMomByUser = function () {
        var _this = this;
        this._meetingService.getMeetingsMomByUser(this.payloadSearch).subscribe(function (data) {
            _this.pastMeetingList = data.json();
        });
    };
    PastMeetingsComponent.prototype.download = function () {
        this.fileName = ' ';
        var payload = { fileName: 'test.docx' };
        this._meetingService.filedownload(payload).subscribe(function (res) {
            alert();
            //  saveAs(res, payload.fileName);
        });
    };
    PastMeetingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-past-meetings',
            template: __webpack_require__(/*! ./past-meetings.component.html */ "./src/app/layout/past-mettings/past-meetings/past-meetings.component.html"),
            styles: [__webpack_require__(/*! ./past-meetings.component.scss */ "./src/app/layout/past-mettings/past-meetings/past-meetings.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_meeting_service__WEBPACK_IMPORTED_MODULE_1__["MeetingService"]])
    ], PastMeetingsComponent);
    return PastMeetingsComponent;
}());



/***/ }),

/***/ "./src/app/layout/past-mettings/past-mettings.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/past-mettings/past-mettings.module.ts ***!
  \**************************************************************/
/*! exports provided: PastMettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastMettingsModule", function() { return PastMettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _past_meetings_past_meetings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./past-meetings/past-meetings.component */ "./src/app/layout/past-mettings/past-meetings/past-meetings.component.ts");
/* harmony import */ var _past_meetings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./past-meetings-routing.module */ "./src/app/layout/past-mettings/past-meetings-routing.module.ts");
/* harmony import */ var _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PastMettingsModule = /** @class */ (function () {
    function PastMettingsModule() {
    }
    PastMettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _past_meetings_routing_module__WEBPACK_IMPORTED_MODULE_3__["PastMeetingsRoutingModule"], _shared_pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_4__["SharedPipesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_past_meetings_past_meetings_component__WEBPACK_IMPORTED_MODULE_2__["PastMeetingsComponent"]]
        })
    ], PastMettingsModule);
    return PastMettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=past-mettings-past-mettings-module.js.map