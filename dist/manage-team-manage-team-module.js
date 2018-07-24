(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-team-manage-team-module"],{

/***/ "./src/app/layout/manage-team/manage-team-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/manage-team/manage-team-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ManageTeamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTeamRoutingModule", function() { return ManageTeamRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _manage_team_manage_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-team/manage-team.component */ "./src/app/layout/manage-team/manage-team/manage-team.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _manage_team_manage_team_component__WEBPACK_IMPORTED_MODULE_2__["ManageTeamComponent"]
    }
];
var ManageTeamRoutingModule = /** @class */ (function () {
    function ManageTeamRoutingModule() {
    }
    ManageTeamRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManageTeamRoutingModule);
    return ManageTeamRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-team/manage-team.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/manage-team/manage-team.module.ts ***!
  \**********************************************************/
/*! exports provided: ManageTeamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTeamModule", function() { return ManageTeamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _manage_team_manage_team_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-team/manage-team.component */ "./src/app/layout/manage-team/manage-team/manage-team.component.ts");
/* harmony import */ var _manage_team_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-team-routing.module */ "./src/app/layout/manage-team/manage-team-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/layout/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { CustomModalComponent } from '../dashboard/components/custom-modal/custom-modal.component';


var ManageTeamModule = /** @class */ (function () {
    function ManageTeamModule() {
    }
    ManageTeamModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _manage_team_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManageTeamRoutingModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_manage_team_manage_team_component__WEBPACK_IMPORTED_MODULE_2__["ManageTeamComponent"]]
        })
    ], ManageTeamModule);
    return ManageTeamModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-team/manage-team/manage-team.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/manage-team/manage-team/manage-team.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\r\n    <div class=\"col-md-12 header\" style=\"text-align: center;\">\r\n        <h3>Manage Team</h3>\r\n    </div>\r\n    <div style=\"float:right\" class=\"defaultMeetSelect\">\r\n        <div class=\"align-center\">\r\n            <input type=\"text\" placeholder=\"Search by name\" />\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"left filter-list\">\r\n    <h4>\r\n        <i class=\"fa fa-users\" aria-hidden=\"true\"></i>&nbsp;Teams</h4>\r\n    <hr>\r\n    <ul *ngFor=\"let userPermission of userPermissionList; let teamCount = index\">\r\n        <li>\r\n            <label (click)=\"displayTeamDetails(userPermission.team)\">{{teamCount+1}})&nbsp; {{userPermission.team.teamName}}\r\n            </label>\r\n        </li>\r\n    </ul>\r\n    <div style=\"text-align:center;\">\r\n        <button class=\"btn btn-sec\" style=\"align:align-center\" (click)=\"open()\">Add New Team</button>\r\n        <app-custom-modal #addNewTeamModal [model]=\"newTeam\">\r\n            <div class=\"modal-body row-label\">\r\n                <div style=\"margin-top: 20px;\" *ngIf=\"showAddTeam === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddTeam\">\r\n                    <strong>Error: </strong>Enter Team Name.\r\n                </div>\r\n\r\n                <div style=\"margin-top: 20px;\" *ngIf=\"showAddTeamSuccess === true\" class=\"alert alert-success alert-dismissable\" [(ngModel)]=\"showAddTeamSuccess\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\r\n                    <strong>Success: </strong>Team has been added Successfully.\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <label>Team Name</label>\r\n                    </div>\r\n                    <div>\r\n                        <textarea placeholder=\"Type Name Here..\" [(ngModel)]=\"newTeamName\" onfocus=\"typeTeamNameFocus()\"></textarea>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer popFooter\">\r\n                <button type=\"button\" class=\"btn btn-sec\" (click)=\"addTeam(newTeamName)\">Add Team</button>\r\n                <button type=\"button\" class=\"btn btn-cancel\" (click)=\"closeTeamPopup('addNewTeam')\">Close</button>\r\n            </div>\r\n        </app-custom-modal>\r\n    </div>\r\n</div>\r\n<div class=\"main\">\r\n    <h4>Team Details</h4>\r\n    <hr>\r\n    <div class=\"row\">\r\n        <div class=\"member-block\">\r\n            <h4 class=\"selected-team\">{{selectedTeamName}}\r\n                <span>&nbsp;[{{filterMemberList.length}} Members]</span>\r\n            </h4>\r\n            <input type=\"text\" placeholder=\"Type Name Here...\" class=\"col-md-11 search-member\" />\r\n            <div class=\"member-details\">\r\n                <h5>\r\n                    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;Member Details</h5>\r\n                <hr>\r\n                <div class=\"row\" style=\"padding: 15px;\">\r\n                    <div *ngFor=\"let userMemPermission of filterMemberList\" class=\"search-box-container\">\r\n                        <input type=\"text\" value=\"{{userMemPermission.userId.firstName}} {{userMemPermission.userId.lastName}}\" />\r\n                    </div>\r\n                </div>\r\n                <div style=\"text-align:center;\">\r\n                    <button class=\"btn btn-primary\" style=\"align:align-center\" (click)=\"openMemberPopup()\">Add New Member</button>\r\n                    <!-- <button class=\"btn btn-aecondary\">Reset Changes</button> -->\r\n                </div>\r\n                <app-custom-modal #addNewMemberModal [model]=\"newMember\">\r\n                    <div class=\"modal-body row-label\">\r\n                        <!-- <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberFirstName === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberFirstName\">\r\n                            <strong>Error: </strong>Enter Member First Name.\r\n                        </div>\r\n\r\n                        <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberUserName === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberUserName\">\r\n                            <strong>Error: </strong>Enter UserName.\r\n                        </div>\r\n                        <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberPassword === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberPassword\">\r\n                            <strong>Error: </strong>Enter Password.\r\n                        </div>\r\n                        <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberEmail === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberEmail\">\r\n                            <strong>Error: </strong>Enter Email\r\n                        </div>\r\n\r\n                        <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberSuccess === true\" class=\"alert alert-success alert-dismissable\" [(ngModel)]=\"showAddMemberSuccess\">\r\n                            <strong>Success: </strong>Member has been added Successfully.\r\n                        </div> -->\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label>First Name</label>\r\n                                </div>\r\n                                <div>\r\n                                    <input placeholder=\"Type Name Here..\" [(ngModel)]=\"firstName\" onfocus=\"typeTeamNameFocus()\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label>Last Name</label>\r\n                                </div>\r\n                                <div>\r\n                                    <input placeholder=\"Type Name Here..\" [(ngModel)]=\"lastName\" onfocus=\"typeTeamNameFocus()\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label>UserName</label>\r\n                                </div>\r\n                                <div>\r\n                                    <input placeholder=\"Type Name Here..\" [(ngModel)]=\"userName\" onfocus=\"typeTeamNameFocus()\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label>Password</label>\r\n                                </div>\r\n                                <div>\r\n                                    <input placeholder=\"Type Name Here..\" [(ngModel)]=\"password\" onfocus=\"typeTeamNameFocus()\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label>Team Name</label>\r\n                                </div>\r\n                                <div>\r\n                                    <input placeholder=\"Type Name Here..\" [(ngModel)]=\"newTeamName\" onfocus=\"typeTeamNameFocus()\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-3\">\r\n                                    <label>Team Name</label>\r\n                                </div>\r\n                                <div>\r\n                                    <input placeholder=\"Type Name Here..\" [(ngModel)]=\"newTeamName\" onfocus=\"typeTeamNameFocus()\" />\r\n                                </div>\r\n                            </div>\r\n                    </div>\r\n                    <div class=\"modal-footer popFooter\">\r\n                        <button type=\"button\" class=\"btn btn-sec\" (click)=\"addMember()\">Add Team</button>\r\n                        <button type=\"button\" class=\"btn btn-cancel\" (click)=\"closeMemberPopup('addNewMember')\">Close</button>\r\n                    </div>\r\n                </app-custom-modal>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/manage-team/manage-team/manage-team.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/manage-team/manage-team/manage-team.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn-sec {\r\n    background-color: #ffb94b;\r\n    background-image: linear-gradient(top, #fddb6f, #ffb94b);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n.btn-cancel{\r\n    color: rgb(248, 87, 87);\r\n    background-color: rgb(248, 87, 87);\r\n    background-image: linear-gradient(top, rgb(253, 78, 78), rgb(248, 87, 87));\r\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n      border-width: 1px;\r\n      border-style: solid;\r\n      border-color: rgb(218, 10, 10);\r\n      cursor: pointer;\r\n      text-align: center;\r\n      font: Arial, Helvetica;\r\n      color: rgb(248, 241, 241);\r\n    }\r\na{\r\n        cursor: pointer;\r\n        color: #ffffff;\r\n    }\r\n.top {\r\n        height: 92px;\r\n        padding: 15px;\r\n        border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n        background-image: url(/assets/images/logobg.png);\r\n        background-position-y: bottom;\r\n    }\r\n.left {\r\n        width: 15%;\r\n        float:left;\r\n        padding: 15px;\r\n        background: #e5efff;\r\n        background-image: url(/assets/images/menuBg.png);\r\n        color: #ffffff;\r\n        font-weight: bold;\r\n    }\r\n.main {\r\n      margin-left:15%;\r\n      padding: 15px;\r\n     }\r\ntable {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        padding:30px;\r\n    }\r\ntd, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\nth{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n    }\r\ntr:nth-child(even) {\r\n        background-color: #e5efff;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.date-period-select {\r\n        border-left: 2px solid #999;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        height: 15%;\r\n        cursor: pointer;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.filter-list ul{\r\n        list-style-type: none;\r\n    }\r\n.filter-list ul li input{\r\n    cursor: pointer;\r\n    }\r\n.member-block {\n  padding-left: 15px; }\r\n.member-block label {\n  color: #000000; }\r\n.member-block ul {\n  list-style-type: none; }\r\n.member-table {\n  float: left;\n  width: 50%; }\r\n.member-details {\n  height: 100%;\n  border: 1px solid #ccd1d4;\n  box-shadow: 5px 5px 5px 5px #ccd1d4;\n  background: #e5efff;\n  padding: 10px;\n  margin: 15px; }\r\n.search-member {\n  background-color: #e5efff;\n  height: 50px;\n  margin: 15px;\n  border: 1px solid #ccd1d4; }\r\n.search-box-container input {\n  padding: 2px;\n  margin-bottom: 5px; }\r\n.search-box-container:after {\n  content: \"\\f00d\";\n  font-family: FontAwesome;\n  font-weight: bold;\n  margin-left: -25px;\n  margin-right: 25px;\n  color: #eb223d; }\r\n.row-label label {\n  font-weight: bold; }\r\n.selected-team {\n  color: #3277d3; }\r\n.row-label input {\n  margin: 8px; }\n"

/***/ }),

/***/ "./src/app/layout/manage-team/manage-team/manage-team.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/manage-team/manage-team/manage-team.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTeamComponent", function() { return ManageTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _dashboard_components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dashboard/components/custom-modal/custom-modal.component */ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManageTeamComponent = /** @class */ (function () {
    function ManageTeamComponent(teamService, userService) {
        this.newTeamName = ' ';
        this.showAddTeam = false;
        this.showAddTeamSuccess = false;
        this.showAddMemberFirstName = false;
        this.showAddMemberUserName = false;
        this.showAddMemberSuccess = false;
        this.showAddMemberPassword = false;
        this.showAddMemberEmail = false;
        this.memObj = {};
        this.userPermissionList = [];
        this.userPermissionMemberList = [];
        this.filterMemberList = [];
        this.teamList = [];
        this.user = {};
        this.newTeam = {
            titleIcon: '<i class="fa fa-user"></i>',
            title: 'New Team',
            smallHeading: 'You can add new team details here',
            body: '',
            Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Team',
            Button2Content: ''
        };
        this.newMember = {
            titleIcon: '<i class="fa fa-user"></i>',
            title: 'New Member',
            smallHeading: 'You can add new member details here',
            body: '',
            Button1Content: '<i class="fa fa-user"></i>&nbsp;Add Member',
            Button2Content: ''
        };
        this._teamService = teamService;
        this._userService = userService;
    }
    ManageTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getTeamsByLoggedInUserId webservice call
        var payload = { email: 'rohit@coreflexsolutions.com' };
        this._teamService.setTeamsByLoggedInUserId(payload);
        this._teamService.getTeamListByLoggedInUserId().subscribe(function (data) {
            _this.userPermissionList = data;
        });
        this._teamService.setMembersByLoggedInUserId(payload);
        this._teamService.getMemberListByLoggedInUserId().subscribe(function (data) {
            _this.userPermissionMemberList = data;
        });
    };
    ManageTeamComponent.prototype.displayTeamDetails = function (team) {
        this.selectedTeamName = team.teamName;
        this.filterMemberList = [];
        for (this.i = 0; this.i < this.userPermissionMemberList.length; this.i++) {
            if (this.userPermissionMemberList[this.i].team.id == team.id) {
                this.filterMemberList.push(this.userPermissionMemberList[this.i]);
            }
        }
    };
    //to open modal popup
    ManageTeamComponent.prototype.open = function () {
        this.addNewTeamModal.open();
    };
    ManageTeamComponent.prototype.openMemberPopup = function () {
        this.addNewMemberModal.open();
    };
    ManageTeamComponent.prototype.addTeam = function (newTeamName) {
        var _this = this;
        if (newTeamName === "" || newTeamName === null || typeof newTeamName === "undefined") {
            this.showAddTeam = true;
            setTimeout(function () {
                this.showAddTeam = false;
            }.bind(this), 5000);
        }
        else {
            this.showAddTeam = false;
            var payload = { "teamName": newTeamName };
            var team_1 = { team: { teamName: newTeamName } };
            //  const payload = {firstName,lastName};
            this._teamService.saveTeamDetails(payload).subscribe(function (res) {
                _this.userPermissionList.push(team_1);
                _this.newTeamName = '';
                _this.showAddTeamSuccess = true;
                setTimeout(function () {
                    this.showAddTeamSuccess = false;
                }.bind(_this), 5000);
            });
        }
    };
    //focus on team name text field
    ManageTeamComponent.prototype.typeTeamNameFocus = function () {
        this.showAddTeam = false;
    };
    // add new member  
    ManageTeamComponent.prototype.addMember = function () {
        // if (this.firstName === "" || this.firstName === null || typeof this.firstName === "undefined") {
        //     this.showAddMemberFirstName = true;
        //     setTimeout(function () {
        //         this.showAddMemberFirstName = false;
        //     }.bind(this), 5000);
        // } else if (this.userName === "" || this.userName === null || typeof this.userName === "undefined") {
        //     this.showAddMemberUserName = true;
        //     setTimeout(function () {
        //         this.showAddMemberUserName = false;
        //     }.bind(this), 5000);
        // } else if (this.password === "" || this.password === null || typeof this.password === "undefined") {
        //     this.showAddMemberPassword = true;
        //     setTimeout(function () {
        //         this.showAddMemberPassword = false;
        //     }.bind(this), 5000);
        // } else if (this.email === "" || this.email === null || typeof this.email === "undefined") {
        //     this.showAddMemberEmail = true;
        //     setTimeout(function () {
        //         this.showAddMemberEmail = false;
        //     }.bind(this), 5000);
        // }
        //  else {
        //  alert(newTeamName);
        this.showAddMemberFirstName = false;
        this.showAddMemberUserName = false;
        this.showAddMemberPassword = false;
        this.showAddMemberEmail = false;
        this.showAddMemberSuccess = true;
        setTimeout(function () {
            this.edited = false;
            console.log(this.showAddMemberSuccess);
        }.bind(this), 5000);
        // const payload = {
        //     "email": email,
        //     "password": password,
        //     "name": userName,
        //     "lastName": lastName,
        //     "firstName": firstName,
        //     "status.onlineStatus": false,
        // }
        // this._userService.saveUserDetails(payload).subscribe(
        //     (res) => {
        alert('Member has been saved successfully');
        // saveAs(res, payload.firstName,payload.lastName); 
        // this.firstName = ' ';
        // this.lastName = '';
        // this.userName = '';
        // this.email = '';
        // this.password = '';
        //  this.memObj = { userId: { firstName: firstName, lastName: lastName } }
        this.userPermissionMemberList.push(this.memObj);
        //      });
        //  }
    };
    //focus on member name text field
    ManageTeamComponent.prototype.typeMemberNameFocus = function () {
        this.showAddMemberFirstName = false;
        this.showAddMemberUserName = false;
        this.showAddMemberPassword = false;
        this.showAddMemberEmail = false;
    };
    //close team modal popup
    ManageTeamComponent.prototype.closeTeamPopup = function (popupType) {
        switch (popupType) {
            case 'addNewTeam':
                this.addNewTeamModal.close();
                break;
        }
    };
    //close member modal popup
    ManageTeamComponent.prototype.closeMemberPopup = function (popupType) {
        switch (popupType) {
            case 'addNewMember':
                this.addNewMemberModal.close();
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addNewTeamModal'),
        __metadata("design:type", _dashboard_components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_2__["CustomModalComponent"])
    ], ManageTeamComponent.prototype, "addNewTeamModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addNewMemberModal'),
        __metadata("design:type", _dashboard_components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_2__["CustomModalComponent"])
    ], ManageTeamComponent.prototype, "addNewMemberModal", void 0);
    ManageTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-team',
            template: __webpack_require__(/*! ./manage-team.component.html */ "./src/app/layout/manage-team/manage-team/manage-team.component.html"),
            styles: [__webpack_require__(/*! ./manage-team.component.scss */ "./src/app/layout/manage-team/manage-team/manage-team.component.scss")],
            providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"]],
        }),
        __metadata("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_1__["TeamService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ManageTeamComponent);
    return ManageTeamComponent;
}());



/***/ })

}]);
//# sourceMappingURL=manage-team-manage-team-module.js.map