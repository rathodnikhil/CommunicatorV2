(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/router.animations.ts":
/*!**************************************!*\
  !*** ./src/app/router.animations.ts ***!
  \**************************************/
/*! exports provided: routerTransition, slideToRight, slideToLeft, slideToBottom, slideToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");

function routerTransition() {
    return slideToTop();
}
function slideToRight() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('*', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({})),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"]
    }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-bg\">\r\n        <div class=\"col-md-12\" style=\"top: 20%;\">\r\n            <div class=\"row h-100 d-flex justify-content-center fixed-header\">\r\n                <img src=\"assets/images/C_4_white.png\" alt=\"Responsive image\" class=\"img-fluid\" style=\"height:3.5rem; \" />\r\n            </div>\r\n            <div class=\"row h-100 d-flex justify-content-center\">\r\n                <div id=\"login\" class=\"col-md-4\">\r\n                    <div class=\"inner-border\">\r\n                        <h1>Sign Up</h1>\r\n                        <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberSuccess === true\"\r\n                        class=\"alert alert-success alert-dismissable\" [(ngModel)]=\"showAddMemberSuccess\">\r\n                        <strong>Success: </strong>Member has been added Successfully.\r\n                    </div>\r\n                    <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberFirstName === true\"\r\n                    class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberFirstName\">\r\n                    <strong>Error: </strong>Enter Member First Name.\r\n                </div>\r\n                \r\n                <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberUserName === true\"\r\n                class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberUserName\">\r\n                <strong>Error: </strong>Enter UserName.\r\n            </div>\r\n            <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberEmail === true\"\r\n            class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberEmail\">\r\n            <strong>Error: </strong>Enter Email\r\n            </div>\r\n            <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberPassword === true\"\r\n            class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberPassword\">\r\n            <strong>Error: </strong>Enter Password.\r\n        </div>\r\n        <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberConfirmPass === true\"\r\n        class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberConfirmPass\">\r\n        <strong>Error: </strong>Enter Confirm Password.\r\n        </div>\r\n        <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberpasswordMatch === true\"\r\n        class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberpasswordMatch\">\r\n        <strong>Error: </strong>Password and confirm password dose not match.\r\n        </div>\r\n        <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberValidEmail === true\"\r\n        class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberValidEmail\">\r\n        <strong>Error: </strong>Enter Valid Email\r\n        </div>\r\n        <div style=\"margin-top: 20px;\" *ngIf=\"showAddMemberDuplicateUserName === true\"\r\n        class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showAddMemberDuplicateUserName\">\r\n        <strong>Error: </strong>Username or Email is already exist.\r\n        </div>\r\n        <div style=\"margin-top: 20px;\" *ngIf=\"showException === true\"\r\n        class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showException\">\r\n        <strong>Error: </strong>Primary Exception Occur\r\n        </div>\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"fa fa-user-o fa-fw\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <input class=\"form-control\" type=\"text\" placeholder=\"First name\" [(ngModel)]=\"firstName\" required >\r\n                        </div>\r\n                        <div class=\"input-group mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <i class=\"fa fa-user-o fa-fw\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <input class=\"form-control\" type=\"text\" placeholder=\"Last Name\" [(ngModel)]=\"lastName\" required >\r\n                            </div>\r\n                            <div class=\"input-group mb-3\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                        <span class=\"input-group-text\">\r\n                                            <i class=\"fa fa-user-o fa-fw\"></i>\r\n                                        </span>\r\n                                    </div>\r\n                                    <input class=\"form-control\" type=\"text\" placeholder=\"Userame\" [(ngModel)]=\"userName\" required >\r\n                                </div>\r\n                                <div class=\"input-group mb-3\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\">\r\n                                                <i class=\"fa fa-user-o fa-fw\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                        <input class=\"form-control\" type=\"text\" placeholder=\"Email\" [(ngModel)]=\"email\" required >\r\n                                    </div>\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"fa fa-key fa-fw\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <input class=\"form-control\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\" required >\r\n                        </div>\r\n                        <div class=\"input-group mb-3\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\">\r\n                                        <i class=\"fa fa-key fa-fw\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <input class=\"form-control\" type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"confirmPassword\" required >\r\n                            </div>\r\n                            <div >\r\n                                 <div class=\"input-group-prepend\">\r\n                            <select class=\"col-md-12\">\r\n                                <option >{{selectedTeam}}</option>\r\n                                <option   *ngFor=\"let team of teamArray\" class=\"dropdown-item\"\r\n                                on-click=\"onChangeTeam(team.teamName)\" value=\"volvo\">Saab</option>\r\n                              </select>\r\n                              </div> \r\n                           \r\n                            <!-- <div class=\" col-md-12\">\r\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                                            <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{selectedTeam}}</button>\r\n                                            <div ngbDropdownMenu>\r\n                                                <button *ngFor=\"let team of teamArray\" class=\"dropdown-item\"\r\n                                                on-click=\"onChangeTeam(team.teamName)\">{{team.teamName}}</button>\r\n                                            </div>\r\n                                        </div>\r\n                                </div>  -->\r\n                        <fieldset id=\"actions\">\r\n                                <input type=\"submit\" id=\"submit\" value=\"Sign up\"  (click)=\"registerUser();\">\r\n                                <a>already have an account?<a style=\"color:#3277d3;\r\n                                    \" class=\"sign-in\" [routerLink]=\"['/login']\">login</a>\r\n                                </a>\r\n                            </fieldset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    \r\n            <div class=\"row h-100 d-flex justify-content-center fixed-footer\">\r\n                <div>Copyright &copy; 2018 Coreflex Solutions</div>\r\n            </div>\r\n        </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-bg {\n  background-position: center;\n  background-size: cover;\n  background-image: url(\"/assets/images/logobg.png\");\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100vh; }\n\n.fixed-header,\n.fixed-footer {\n  width: 100%;\n  position: relative;\n  background: transparent;\n  padding: 20px;\n  color: #fff; }\n\n.fixed-footer {\n  font-weight: bolder; }\n\n#login {\n  background-color: #fff;\n  background-image: linear-gradient(top, #fff, #eee);\n  height: auto;\n  /* width: auto; */\n  padding: 5px;\n  position: relative;\n  z-index: 0;\n  border-radius: 3px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.2), 0 3px 0 #fff, 0 4px 0 rgba(0, 0, 0, 0.2), 0 6px 0 #fff, 0 7px 0 rgba(0, 0, 0, 0.2); }\n\n.inner-border {\n  border: 1px dashed #ccc;\n  top: 5px;\n  bottom: 5px;\n  left: 5px;\n  right: 5px;\n  box-shadow: 0 0 0 1px #fff;\n  padding: 20px; }\n\n/*--------------------*/\n\nh1 {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7), 0px 2px 0 rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n  text-align: center;\n  color: #3277d3;\n  margin: 0 0 30px 0;\n  letter-spacing: 4px;\n  font: normal 26px/1 Verdana, Helvetica;\n  position: relative; }\n\nh1:after,\nh1:before {\n  background-color: #3277d3;\n  content: \"\";\n  height: 1px;\n  position: absolute;\n  top: 15px;\n  width: 30%; }\n\nh1:after {\n  background-image: linear-gradient(left, #2c5fe0, #fff);\n  right: 0; }\n\nh1:before {\n  background-image: linear-gradient(left, #2c5fe0, #fff);\n  left: 0; }\n\n/*--------------------*/\n\nfieldset {\n  border: 0;\n  padding: 0;\n  margin: 0; }\n\n/*--------------------*/\n\n#inputs input {\n  background: #f1f1f1 url(https://catalin.red/dist/uploads/2011/09/login-sprite.png) no-repeat;\n  padding: 15px 15px 15px 30px;\n  margin: 0 0 10px 0;\n  width: 353px;\n  /* 353 + 2 + 45 = 400 */\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 1px 1px #ccc inset, 0 1px 0 #fff; }\n\n#username {\n  background-position: 5px -2px !important; }\n\n#password {\n  background-position: 5px -52px !important; }\n\n#inputs input:focus {\n  background-color: #fff;\n  border-color: #e8c291;\n  outline: none;\n  box-shadow: 0 0 0 1px #e8c291 inset; }\n\n/*--------------------*/\n\n#actions {\n  margin: 40px 0 10px 0; }\n\n#submit {\n  background-color: #ffb94b;\n  background-image: linear-gradient(top, #fddb6f, #ffb94b);\n  border-radius: 3px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d69e31 #e3a037 #d5982d #e3a037;\n  float: left;\n  height: 35px;\n  padding: 0;\n  width: 120px;\n  cursor: pointer;\n  font: bold 15px Arial, Helvetica;\n  color: #8f5a0a; }\n\n#submit:hover,\n#submit:focus {\n  background-color: #fddb6f;\n  background-image: linear-gradient(top, #ffb94b, #fddb6f); }\n\n#submit:active {\n  outline: none;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset; }\n\n#submit::-moz-focus-inner {\n  border: none; }\n\n#actions a {\n  color: #3151A2;\n  float: right;\n  line-height: 35px;\n  margin-left: 10px; }\n\n.communication-logo {\n  text-align: center;\n  padding-bottom: 15px; }\n\n.container {\n  min-width: 40%;\n  margin: 2em auto;\n  background-color: #eaf3f8;\n  padding: 2em;\n  border-radius: 2px;\n  border: 1px solid  #3277d3; }\n\n.form-field {\n  text-align: center;\n  margin-bottom: 0.5em; }\n\n#signup {\n  background-color: #fff;\n  background-image: linear-gradient(top, #fff, #eee);\n  height: auto;\n  padding: 5px;\n  position: relative;\n  z-index: 0;\n  border-radius: 3px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.2), 0 3px 0 #fff, 0 4px 0 rgba(0, 0, 0, 0.2), 0 6px 0 #fff, 0 7px 0 rgba(0, 0, 0, 0.2); }\n\n#signup:before {\n  content: '';\n  position: absolute;\n  z-index: -1;\n  border: 1px dashed #ccc;\n  top: 5px;\n  bottom: 5px;\n  left: 5px;\n  right: 5px;\n  box-shadow: 0 0 0 1px #fff; }\n\n.sign-in {\n  font-weight: bold;\n  font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/team.service */ "./src/app/services/team.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(teamService, userService, loginService, router) {
        this.router = router;
        this.teamArray = [];
        this.userNameArray = [];
        this.emailArray = [];
        this.showAddMemberSuccess = false;
        this.showAddMemberFirstName = false;
        this.showAddMemberUserName = false;
        this.showAddMemberPassword = false;
        this.showAddMemberEmail = false;
        this.showAddMemberConfirmPass = false;
        this.showAddMemberpasswordMatch = false;
        this.showAddMemberValidEmail = false;
        this.showAddMemberDuplicateUserName = false;
        this.authFlag = false;
        this.showException = false;
        this._teamService = teamService;
        this._userService = userService;
        this._loginService = loginService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedTeam = 'Select Team';
        this._teamService.getAllEnableTeams().subscribe(function (data) {
            _this.teamArray = data.json();
        });
    };
    SignupComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.firstName === "" || this.firstName === null || typeof this.firstName === "undefined") {
            this.showAddMemberFirstName = true;
            setTimeout(function () {
                this.showAddMemberFirstName = false;
            }.bind(this), 5000);
        }
        else if (this.userName === "" || this.userName === null || typeof this.userName === "undefined") {
            this.showAddMemberUserName = true;
            setTimeout(function () {
                this.showAddMemberUserName = false;
            }.bind(this), 5000);
        }
        else if (this.email === "" || this.email === null || typeof this.email === "undefined") {
            this.showAddMemberEmail = true;
            setTimeout(function () {
                this.showAddMemberEmail = false;
            }.bind(this), 5000);
        }
        else if (this.password === "" || this.password === null || typeof this.password === "undefined") {
            this.showAddMemberPassword = true;
            setTimeout(function () {
                this.showAddMemberPassword = false;
            }.bind(this), 5000);
        }
        else if (this.confirmPassword === "" || this.confirmPassword === null || typeof this.confirmPassword === "undefined") {
            this.showAddMemberConfirmPass = true;
            setTimeout(function () {
                this.showAddMemberConfirmPass = false;
            }.bind(this), 5000);
        }
        else {
            var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
            var temporaryUserName = this.userNameArray.indexOf(this.userName);
            var temporaryEmail = this.emailArray.indexOf(this.email);
            if (!EMAIL_REGEXP.test(this.email)) {
                this.showAddMemberValidEmail = true;
                setTimeout(function () {
                    this.showAddMemberValidEmail = false;
                }.bind(this), 5000);
                this.email = '';
            }
            else if (this.password != this.confirmPassword) {
                this.confirmPassword = '';
                this.showAddMemberpasswordMatch = true;
                setTimeout(function () {
                    this.showAddMemberpasswordMatch = false;
                }.bind(this), 5000);
            }
            else {
                var duplicateUserNameFlag_1;
                var exceptionFlag_1;
                var payload = {
                    "email": this.email,
                    "password": this.password,
                    "name": this.userName,
                    "lastName": this.lastName,
                    "firstName": this.firstName,
                    "status.onlineStatus": true
                };
                this.showAddMemberFirstName = false;
                this.showAddMemberUserName = false;
                this.showAddMemberPassword = false;
                this.showAddMemberEmail = false;
                this.showAddMemberpasswordMatch = false;
                this.showAddMemberValidEmail = false;
                this._userService.saveUserDetails(payload).subscribe(function (data) {
                    duplicateUserNameFlag_1 = data.json().warningFl;
                    exceptionFlag_1 = data.json().errorFl;
                    if (duplicateUserNameFlag_1 == true) {
                        _this.showAddMemberDuplicateUserName = true;
                        _this.userName = '';
                        setTimeout(function () {
                            this.showAddMemberDuplicateUserName = false;
                        }.bind(_this), 5000);
                    }
                    else if (exceptionFlag_1 == true) {
                        _this.showException = true;
                        _this.email = '';
                        setTimeout(function () {
                            this.showException = false;
                        }.bind(_this), 5000);
                    }
                    else {
                        var payload_1 = { "name": 'admin', "password": "password" };
                        var loginWarningFlag = void 0;
                        _this._loginService.getAuthenticationToken(payload_1).subscribe(function (resp) {
                            _this.jwtToken = _this._loginService.getJwtToken();
                            if (_this.jwtToken === "" || _this.jwtToken === null || typeof _this.jwtToken === "undefined") {
                                _this.authFlag = true;
                                setTimeout(function () {
                                    this.authFlag = false;
                                }.bind(_this), 5000);
                            }
                            else {
                                _this.router.navigate(['/dashboard/default']);
                            }
                        }, function (err) {
                            alert(err);
                        });
                        //this.router.navigate(['/dashboard']);
                    }
                });
            }
        }
    };
    SignupComponent.prototype.onChangeTeam = function (team) {
        this.selectedTeam = team;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")],
            providers: [_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"]],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_services_team_service__WEBPACK_IMPORTED_MODULE_2__["TeamService"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _layout_bs_component_bs_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/bs-component/bs-component.module */ "./src/app/layout/bs-component/bs-component.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_2__["SignupRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlertModule"].forRoot(),
                _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"],
                _layout_bs_component_bs_component_module__WEBPACK_IMPORTED_MODULE_7__["BsComponentModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot()
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map