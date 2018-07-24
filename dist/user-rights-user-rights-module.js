(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-rights-user-rights-module"],{

/***/ "./src/app/layout/user-rights/user-rights-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/user-rights/user-rights-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UserRightsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRightsRoutingModule", function() { return UserRightsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _user_rights_user_rights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-rights/user-rights.component */ "./src/app/layout/user-rights/user-rights/user-rights.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _user_rights_user_rights_component__WEBPACK_IMPORTED_MODULE_2__["UserRightsComponent"]
    }
];
var UserRightsRoutingModule = /** @class */ (function () {
    function UserRightsRoutingModule() {
    }
    UserRightsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRightsRoutingModule);
    return UserRightsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user-rights/user-rights.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/user-rights/user-rights.module.ts ***!
  \**********************************************************/
/*! exports provided: UserRightsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRightsModule", function() { return UserRightsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _user_rights_user_rights_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-rights/user-rights.component */ "./src/app/layout/user-rights/user-rights/user-rights.component.ts");
/* harmony import */ var _user_rights_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-rights-routing.module */ "./src/app/layout/user-rights/user-rights-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserRightsModule = /** @class */ (function () {
    function UserRightsModule() {
    }
    UserRightsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_rights_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRightsRoutingModule"]
            ],
            declarations: [_user_rights_user_rights_component__WEBPACK_IMPORTED_MODULE_2__["UserRightsComponent"]]
        })
    ], UserRightsModule);
    return UserRightsModule;
}());



/***/ }),

/***/ "./src/app/layout/user-rights/user-rights/user-rights.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/user-rights/user-rights/user-rights.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"top\">\r\n  <div class=\"col-md-12 header\" style=\"text-align: center;\">\r\n      <h3>Add / Revoke Rights</h3>\r\n  </div>\r\n  <div style=\"float:right\" class=\"defaultMeetSelect\">\r\n      <div class=\"align-center\">\r\n          <input type=\"text\" placeholder=\"Search by name\" />\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"left filter-list\">\r\n<h4><i class=\"fa fa-filter\"></i>&nbsp;Filter by Team</h4>\r\n<hr>\r\n  <ul>\r\n        <li *ngFor=\"let userPermission of userPermissionList\"><input type=\"checkbox\" (change)=\"filterMemberByTeam($event , userPermission.team.teamId)\">\r\n           {{userPermission.team.teamName}}</li>\r\n        <li><input type=\"checkbox\" id=\"userPermission.team.teamId\"> All</li>\r\n      </ul>\r\n</div>\r\n<div class=\"main\">\r\n    <h4>Team/user Rights Details</h4>\r\n    <hr>\r\n    <table>\r\n      <tr>\r\n        <th>Sr. No</th>\r\n        <th>UserName</th>\r\n        <th>Team</th>\r\n        <th>Status</th>\r\n        <th>Schedule Meeting</th>\r\n        <th>Broadcast Message</th>\r\n      </tr>\r\n      <tr *ngFor=\"let userPermission of userPermissionMemberList; let srNo = index\">\r\n            <td>{{srNo+1}}</td>\r\n            <td>{{userPermission.user.firstName}} {{userPermission.user.lastName}}</td>\r\n            <td>{{userPermission.team.teamName}}</td>\r\n            <td>{{userPermission.user.status.status}}</td>\r\n            <td><div class=\"switch-field\">\r\n                    <input type=\"radio\" id=\"switch_left\" name=\"switch_2\" value=\"yes\" checked/>\r\n                    <label for=\"switch_left\">Yes</label>\r\n                    <input type=\"radio\" id=\"switch_right\" name=\"switch_2\" value=\"no\" />\r\n                    <label for=\"switch_right\">No</label>\r\n                  </div></td>\r\n            <td><div class=\"switch-field\">\r\n                    <input type=\"radio\" id=\"switch_left\" name=\"switch_2\" value=\"yes\" checked/>\r\n                    <label for=\"switch_left\">Yes</label>\r\n                    <input type=\"radio\" id=\"switch_right\" name=\"switch_2\" value=\"no\" />\r\n                    <label for=\"switch_right\">No</label>\r\n                  </div></td>\r\n      </tr>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/user-rights/user-rights/user-rights.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/user-rights/user-rights/user-rights.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn-sec {\r\n    background-color: #ffb94b;\r\n    background-image: linear-gradient(top, #fddb6f, #ffb94b);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n.btn-cancel{\r\n    color: rgb(248, 87, 87);\r\n    background-color: rgb(248, 87, 87);\r\n    background-image: linear-gradient(top, rgb(253, 78, 78), rgb(248, 87, 87));\r\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n      border-width: 1px;\r\n      border-style: solid;\r\n      border-color: rgb(218, 10, 10);\r\n      cursor: pointer;\r\n      text-align: center;\r\n      font: Arial, Helvetica;\r\n      color: rgb(248, 241, 241);\r\n    }\r\na{\r\n        cursor: pointer;\r\n        color: #ffffff;\r\n    }\r\n.top {\r\n        height: 92px;\r\n        padding: 15px;\r\n        border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n        background-image: url(/assets/images/logobg.png);\r\n        background-position-y: bottom;\r\n    }\r\n.left {\r\n        width: 15%;\r\n        float:left;\r\n        padding: 15px;\r\n        background: #e5efff;\r\n        background-image: url(/assets/images/menuBg.png);\r\n        color: #ffffff;\r\n        font-weight: bold;\r\n    }\r\n.main {\r\n      margin-left:15%;\r\n      padding: 15px;\r\n     }\r\ntable {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        padding:30px;\r\n    }\r\ntd, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\nth{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n    }\r\ntr:nth-child(even) {\r\n        background-color: #e5efff;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.date-period-select {\r\n        border-left: 2px solid #999;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        height: 15%;\r\n        cursor: pointer;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.filter-list ul{\r\n        list-style-type: none;\r\n    }\r\n.filter-list ul li input{\r\n    cursor: pointer;\r\n    }\r\n.switch-field input {\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  width: 1px;\n  border: 0; }\r\n.switch-field label {\n  float: left; }\r\n.switch-field label {\n  display: inline-block;\n  width: 60px;\n  background-color: #e4e4e4;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n  font-weight: normal;\n  text-align: center;\n  text-shadow: none;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);\n  transition: all 0.1s ease-in-out; }\r\n.switch-field label:hover {\n  cursor: pointer; }\r\n.switch-field input:checked + label {\n  background-color: #3277d3;\n  box-shadow: none;\n  color: #ffffff; }\r\n.switch-field label:first-of-type {\n  border-radius: 4px 0 0 4px; }\r\n.switch-field label:last-of-type {\n  border-radius: 0 4px 4px 0; }\n"

/***/ }),

/***/ "./src/app/layout/user-rights/user-rights/user-rights.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/user-rights/user-rights/user-rights.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserRightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRightsComponent", function() { return UserRightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/team.service */ "./src/app/services/team.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserRightsComponent = /** @class */ (function () {
    function UserRightsComponent(teamService) {
        this.userPermissionList = [];
        this.userPermissionMemberList = [];
        this._teamService = teamService;
    }
    UserRightsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userPermissionList = [];
        var payload = { email: 'rohit@coreflexsolutions.com' };
        this._teamService.setTeamsByLoggedInUserId(payload);
        this._teamService.getTeamListByLoggedInUserId().subscribe(function (data) {
            _this.userPermissionList = data;
        });
        this._teamService.setMembersByLoggedInUserId(payload);
        this._teamService.getMemberListByLoggedInUserId().subscribe(function (data) {
            _this.userPermissionMemberList = data;
        });
        //  this._teamService.getMembersByLoggedInUserId(payload).subscribe(data => {
        //     this.userPermissionMemberList = data.json();
        // });
    };
    UserRightsComponent.prototype.filterMemberByTeam = function (event, selectedTeamId) {
        var _this = this;
        this.payloadSearch = { teamId: selectedTeamId };
        if (event.target.checked) {
            this._teamService.getMembersByTeam(this.payloadSearch).subscribe(function (data) {
                _this.userPermissionMemberList = data.json();
            });
        }
        else {
            alert('checkbox is unchecked');
        }
    };
    UserRightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-rights',
            template: __webpack_require__(/*! ./user-rights.component.html */ "./src/app/layout/user-rights/user-rights/user-rights.component.html"),
            styles: [__webpack_require__(/*! ./user-rights.component.scss */ "./src/app/layout/user-rights/user-rights/user-rights.component.scss")],
            providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]]
        }),
        __metadata("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]])
    ], UserRightsComponent);
    return UserRightsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=user-rights-user-rights-module.js.map