(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-settings-user-settings-module"],{

/***/ "./src/app/layout/user-settings/user-settings-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/user-settings/user-settings-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: UserSettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsRoutingModule", function() { return UserSettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "./src/app/layout/user-settings/user-settings/user-settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_2__["UserSettingsComponent"]
    }
];
var UserSettingsRoutingModule = /** @class */ (function () {
    function UserSettingsRoutingModule() {
    }
    UserSettingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserSettingsRoutingModule);
    return UserSettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user-settings/user-settings.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/user-settings/user-settings.module.ts ***!
  \**************************************************************/
/*! exports provided: UserSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsModule", function() { return UserSettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-settings/user-settings.component */ "./src/app/layout/user-settings/user-settings/user-settings.component.ts");
/* harmony import */ var _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-settings-routing.module */ "./src/app/layout/user-settings/user-settings-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserSettingsModule = /** @class */ (function () {
    function UserSettingsModule() {
    }
    UserSettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _user_settings_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserSettingsRoutingModule"]
            ],
            declarations: [_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_2__["UserSettingsComponent"]]
        })
    ], UserSettingsModule);
    return UserSettingsModule;
}());



/***/ }),

/***/ "./src/app/layout/user-settings/user-settings/user-settings.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/user-settings/user-settings/user-settings.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\r\n      <div class=\"col-md-12 header\" style=\"text-align: center;\">\r\n            <h3>Settings</h3>\r\n      </div>\r\n</div>\r\n<div class=\"left\">\r\n</div>\r\n<div class=\"main\">\r\n      <div class=\"setting-header\">\r\n            <h4>Setting Details</h4>\r\n      </div>\r\n      <br>\r\n      <table style=\"width: 80%; \">\r\n            <tr>\r\n                  <h4>Personal Settings</h4>\r\n            </tr>\r\n            <tr>\r\n                  <td>Display Picture</td>\r\n                  <td>\r\n                        <img src=\"assets/images/default.png\" alt=\"Responsive image\" class=\"img-fluid\" />\r\n                  </td>\r\n                  <td>\r\n                        <a>Change Picture</a>\r\n                  </td>\r\n                  <td>\r\n                        <a>Remove Picture</a>\r\n                  </td>\r\n            </tr>\r\n            <tr>\r\n                  <td>Display Name</td>\r\n                  <td>\r\n                        <input placeholder=\"Enter Name\" type=\"text\" value=\"{{userSettings.fullName}}\" />\r\n                  </td>\r\n            </tr>\r\n            <tr>\r\n                  <h4>Meeting Settings</h4>\r\n            </tr>\r\n            <tr>\r\n                  <td>Meeting Code</td>\r\n                  <td>\r\n                        <input placeholder=\"Enter Meeting Code\" value=\"userSettings.meetingCode.meetingCode\" />\r\n                  </td>\r\n            </tr>\r\n            <tr>\r\n                  <h4>General Settings</h4>\r\n            </tr>\r\n            <tr>\r\n                  <td>Chat Notification</td>\r\n                  <td>\r\n                        <div class=\"switch-field\">\r\n                              <input type=\"radio\" id=\"switch_left\" name=\"switch_2\" value=\"yes\" checked/>\r\n                              <label for=\"switch_left\">On</label>\r\n                              <input type=\"radio\" id=\"switch_right\" name=\"switch_2\" value=\"no\" />\r\n                              <label for=\"switch_right\">Off</label>\r\n                        </div>\r\n                  </td>\r\n            </tr>\r\n            <tr>\r\n                  <td>Meeting Reminders</td>\r\n                  <td>\r\n                        <div class=\"switch-field\">\r\n                              <input type=\"radio\" id=\"switch_left\" name=\"switch_2\" value=\"yes\" checked/>\r\n                              <label for=\"switch_left\">On</label>\r\n                              <input type=\"radio\" id=\"switch_right\" name=\"switch_2\" value=\"no\" />\r\n                              <label for=\"switch_right\">Off</label>\r\n                        </div>\r\n                  </td>\r\n            </tr>\r\n            <tr>\r\n                  <td>File Download Location</td>\r\n                  <td colspan=\"2\">\r\n                        <input placeholder=\"Enter Name\" type=\"text\" readonly value=\"{{userSettings.downloadLocation}}\" class=\"col-md-12\"\r\n                        />\r\n                  </td>\r\n                  <td>\r\n                        <div id=\"hide\" class=\"col-lg-8 col-xs-8\">\r\n                              <label class=\"hand-cursor\">\r\n                                    <input type=\"file\" nv-file-select uploader=\"$ctrl.uploader\" style=\"visibility:hidden;\" />\r\n                                    <a>\r\n                                          <span class=\"fa fa-folder-open\">change Location</span>\r\n                                    </a>\r\n                              </label>\r\n                        </div>\r\n                  </td>\r\n            </tr>\r\n      </table>\r\n      <div class=\"button-block\">\r\n            <button class=\"btn btn-primary\" style=\"align:align-center\">Save Changes</button>\r\n            <button class=\"btn btn-aecondary\">Reset Changes</button>\r\n      </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user-settings/user-settings/user-settings.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/user-settings/user-settings/user-settings.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn-sec {\r\n    background-color: #ffb94b;\r\n    background-image: linear-gradient(top, #fddb6f, #ffb94b);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n.btn-cancel{\r\n    color: rgb(248, 87, 87);\r\n    background-color: rgb(248, 87, 87);\r\n    background-image: linear-gradient(top, rgb(253, 78, 78), rgb(248, 87, 87));\r\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n      border-width: 1px;\r\n      border-style: solid;\r\n      border-color: rgb(218, 10, 10);\r\n      cursor: pointer;\r\n      text-align: center;\r\n      font: Arial, Helvetica;\r\n      color: rgb(248, 241, 241);\r\n    }\r\na{\r\n        cursor: pointer;\r\n        color: #ffffff;\r\n    }\r\n.top {\r\n        height: 92px;\r\n        padding: 15px;\r\n        border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n        background-image: url(/assets/images/logobg.png);\r\n        background-position-y: bottom;\r\n    }\r\n.left {\r\n        width: 15%;\r\n        float:left;\r\n        padding: 15px;\r\n        background: #e5efff;\r\n        background-image: url(/assets/images/menuBg.png);\r\n        color: #ffffff;\r\n        font-weight: bold;\r\n    }\r\n.main {\r\n      margin-left:15%;\r\n      padding: 15px;\r\n     }\r\ntable {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        padding:30px;\r\n    }\r\ntd, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\nth{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n    }\r\ntr:nth-child(even) {\r\n        background-color: #e5efff;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.date-period-select {\r\n        border-left: 2px solid #999;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        height: 15%;\r\n        cursor: pointer;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.filter-list ul{\r\n        list-style-type: none;\r\n    }\r\n.filter-list ul li input{\r\n    cursor: pointer;\r\n    }\r\n.switch-field input {\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  width: 1px;\n  border: 0; }\r\n.switch-field label {\n  float: left; }\r\n.switch-field label {\n  display: inline-block;\n  width: 60px;\n  background-color: #e4e4e4;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 14px;\n  font-weight: normal;\n  text-align: center;\n  text-shadow: none;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);\n  transition: all 0.1s ease-in-out; }\r\n.switch-field label:hover {\n  cursor: pointer; }\r\n.switch-field input:checked + label {\n  background-color: #3277d3;\n  box-shadow: none;\n  color: #ffffff; }\r\n.switch-field label:first-of-type {\n  border-radius: 4px 0 0 4px; }\r\n.switch-field label:last-of-type {\n  border-radius: 0 4px 4px 0; }\r\n.top {\n  height: 92px;\n  padding: 15px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n  background: #3277d3;\n  color: #ffffff;\n  background-image: url(/assets/images/logobg.png);\n  background-position-y: bottom; }\r\n.left {\n  width: 0%;\n  float: left;\n  padding: 15px; }\r\n.main {\n  padding: 15px;\n  border: 1px solid #ccd1d4;\n  margin: 5%;\n  box-shadow: 5px 10px 5px 5px #ccd1d4; }\r\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  padding: 30px; }\r\ntd, th {\n  text-align: left;\n  padding: 8px; }\r\nth {\n  text-align: left;\n  padding: 8px; }\r\n.main table tr td a {\n  cursor: pointer;\n  color: #3277d3;\n  text-decoration: underline; }\r\n.main table tr td div a span {\n  cursor: pointer;\n  color: #3277d3;\n  text-decoration: underline;\n  font-size: 14px; }\r\n.setting-header {\n  background: #3277d3;\n  color: #ffffff;\n  padding: 8px; }\r\n.button-block {\n  text-align: center;\n  padding-top: 15px; }\r\na {\n  color: #ffffff;\n  cursor: pointer; }\r\ninput[type=\"file\"] {\n  color: transparent; }\n"

/***/ }),

/***/ "./src/app/layout/user-settings/user-settings/user-settings.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/user-settings/user-settings/user-settings.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return UserSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSettingsComponent = /** @class */ (function () {
    function UserSettingsComponent(userService) {
        this._userService = userService;
    }
    UserSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //webservice to get profile details
        this.userSettings = {};
        var payload = { loggedInUserId: 2 };
        this._userService.getUserSettingsByLoggedInUser(payload).subscribe(function (data) {
            _this.userSettings = data.json();
        });
    };
    UserSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-settings',
            template: __webpack_require__(/*! ./user-settings.component.html */ "./src/app/layout/user-settings/user-settings/user-settings.component.html"),
            styles: [__webpack_require__(/*! ./user-settings.component.scss */ "./src/app/layout/user-settings/user-settings/user-settings.component.scss")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserSettingsComponent);
    return UserSettingsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=user-settings-user-settings-module.js.map