(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-bg\">\r\n    <div class=\"col-md-12\" style=\"top: 20%;\">\r\n        <div class=\"row h-100 d-flex justify-content-center fixed-header\">\r\n            <img src=\"assets/images/C_4_white.png\" alt=\"Responsive image\" class=\"img-fluid\" style=\"height:3.5rem; \" />\r\n        </div>\r\n        <div class=\"row h-100 d-flex justify-content-center\">\r\n            <div id=\"login\" class=\"col-md-4\">\r\n                <div class=\"inner-border\">\r\n                    <h1>Log In</h1>\r\n                    <div style=\"margin-top: 20px;\" *ngIf=\"authFlag== true;\" class=\"alert alert-danger alert-dismissable\">\r\n                        <strong>Error: </strong>Authentication Token is null</div>\r\n                    <div style=\"margin-top: 20px;\" *ngIf=\"userNameFlag\" class=\"alert alert-danger alert-dismissable\">\r\n                        <strong>Error: </strong>Enter Username.\r\n                    </div>\r\n                    <div style=\"margin-top: 20px;\" *ngIf=\"passwordFlag\" class=\"alert alert-danger alert-dismissable\">\r\n                        <strong>Error: </strong>Enter password.\r\n                    </div>\r\n                    <div style=\"margin-top: 20px;\" *ngIf=\"passwordMacthFlag\" class=\"alert alert-danger alert-dismissable\">\r\n                        <strong>Error: </strong>UserName and Password dose not match\r\n                    </div>\r\n                    <div style=\"margin-top: 20px;\" *ngIf=\"isGuest&&!userNameFlag\" class=\"alert alert-success alert-dismissable\">\r\n                        Enter your name as UserName.\r\n                    </div>\r\n                    <div class=\"input-group mb-3\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                                <i class=\"fa fa-user-o fa-fw\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"text\" placeholder=\"UserName\" [(ngModel)]=\"userName\" required>\r\n                    </div>\r\n                    <div class=\"input-group mb-3\" *ngIf=\"!isGuest\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">\r\n                                <i class=\"fa fa-key fa-fw\"></i>\r\n                            </span>\r\n                        </div>\r\n                        <input class=\"form-control\" type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" required>\r\n                    </div>\r\n                    <div class=\"input-group mb-3\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"isGuest\" (change)=\"guestLogin()\" />\r\n                        <label>continue as guest?</label>\r\n                    </div>\r\n                    <fieldset id=\"actions\">\r\n                        <!-- <input type=\"submit\" id=\"submit\" value=\"Log in\" [routerLink]=\"['/dashboard/default']\"> -->\r\n                        <input type=\"submit\" id=\"submit\" [(ngModel)]=\"Logintext\" (click)=\"login()\" (keyup)=\"login()\"\r\n                        />\r\n                        <a href=\"\">Forgot your password?</a>\r\n                        <a [routerLink]=\"['/signup']\">Register</a>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row h-100 d-flex justify-content-center fixed-footer\">\r\n            <div>Copyright &copy; 2018 Coreflex Solutions</div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-bg {\n  background-position: center;\n  background-size: cover;\n  background-image: url(\"/assets/images/logobg.png\");\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100vh; }\n\n.fixed-header,\n.fixed-footer {\n  width: 100%;\n  position: relative;\n  background: transparent;\n  padding: 20px;\n  color: #fff; }\n\n.fixed-footer {\n  font-weight: bolder; }\n\n#login {\n  background-color: #fff;\n  background-image: linear-gradient(top, #fff, #eee);\n  height: auto;\n  /* width: auto; */\n  padding: 5px;\n  position: relative;\n  z-index: 0;\n  border-radius: 3px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.2), 0 3px 0 #fff, 0 4px 0 rgba(0, 0, 0, 0.2), 0 6px 0 #fff, 0 7px 0 rgba(0, 0, 0, 0.2); }\n\n.inner-border {\n  border: 1px dashed #ccc;\n  top: 5px;\n  bottom: 5px;\n  left: 5px;\n  right: 5px;\n  box-shadow: 0 0 0 1px #fff;\n  padding: 20px; }\n\n/*--------------------*/\n\nh1 {\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7), 0px 2px 0 rgba(0, 0, 0, 0.5);\n  text-transform: uppercase;\n  text-align: center;\n  color: #3277d3;\n  margin: 0 0 30px 0;\n  letter-spacing: 4px;\n  font: normal 26px/1 Verdana, Helvetica;\n  position: relative; }\n\nh1:after,\nh1:before {\n  background-color: #3277d3;\n  content: \"\";\n  height: 1px;\n  position: absolute;\n  top: 15px;\n  width: 30%; }\n\nh1:after {\n  background-image: linear-gradient(left, #2c5fe0, #fff);\n  right: 0; }\n\nh1:before {\n  background-image: linear-gradient(left, #2c5fe0, #fff);\n  left: 0; }\n\n/*--------------------*/\n\nfieldset {\n  border: 0;\n  padding: 0;\n  margin: 0; }\n\n/*--------------------*/\n\n#inputs input {\n  background: #f1f1f1 url(https://catalin.red/dist/uploads/2011/09/login-sprite.png) no-repeat;\n  padding: 15px 15px 15px 30px;\n  margin: 0 0 10px 0;\n  width: 353px;\n  /* 353 + 2 + 45 = 400 */\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  box-shadow: 0 1px 1px #ccc inset, 0 1px 0 #fff; }\n\n#username {\n  background-position: 5px -2px !important; }\n\n#password {\n  background-position: 5px -52px !important; }\n\n#inputs input:focus {\n  background-color: #fff;\n  border-color: #e8c291;\n  outline: none;\n  box-shadow: 0 0 0 1px #e8c291 inset; }\n\n/*--------------------*/\n\n#actions {\n  margin: 40px 0 10px 0; }\n\n#submit {\n  background-color: #ffb94b;\n  background-image: linear-gradient(top, #fddb6f, #ffb94b);\n  border-radius: 3px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d69e31 #e3a037 #d5982d #e3a037;\n  float: left;\n  height: 35px;\n  padding: 0;\n  width: 120px;\n  cursor: pointer;\n  font: bold 15px Arial, Helvetica;\n  color: #8f5a0a; }\n\n#submit:hover,\n#submit:focus {\n  background-color: #fddb6f;\n  background-image: linear-gradient(top, #ffb94b, #fddb6f); }\n\n#submit:active {\n  outline: none;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5) inset; }\n\n#submit::-moz-focus-inner {\n  border: none; }\n\n#actions a {\n  color: #3151A2;\n  float: right;\n  line-height: 35px;\n  margin-left: 10px; }\n\n.communication-logo {\n  text-align: center;\n  padding-bottom: 15px; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService, userService) {
        this.router = router;
        this.user = {};
        this.Logintext = "Login";
        this._loginService = loginService;
        this._userService = userService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        //  this.onLoggedin();
        // debugger;
        this.previousUrl = this._loginService.getPreviousUrl();
        this.isGuest = false;
    };
    // async onLoggedin() {
    //     const userid = '123';
    //     const abc = await this._loginService
    //         .authUser(userid)
    //         .subscribe(
    //             data =>
    //                 (this.user = {
    //                     username: data['username']
    //                 })
    //         );
    //     //localStorage.setItem('isLoggedin', 'true');
    // }
    LoginComponent.prototype.ngOnDestroy = function () {
        //  this._loginService.dest        
    };
    LoginComponent.prototype.guestLogin = function () {
        // debugger;
        this.Logintext = this.isGuest ? "Continue" : "Login";
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.userName === "" || this.userName === null) {
            this.userNameFlag = true;
            setTimeout(function () {
                this.userNameFlag = false;
            }.bind(this), 5000);
        }
        else if (!this.isGuest && (this.password === "" || this.password === null)) {
            this.passwordFlag = true;
            setTimeout(function () {
                this.passwordFlag = false;
            }.bind(this), 5000);
        }
        else {
            if (this.isGuest) {
                localStorage.setItem('loggedInuserName', this.userName);
                debugger;
                if (this.previousUrl)
                    this.router.navigateByUrl(this.previousUrl);
                else
                    this.router.navigate(['/meeting']);
            }
            else {
                var payload_1 = { "name": 'admin', "password": "password" };
                var payload1 = { "name": this.userName, "password": this.password };
                var loginWarningFlag_1;
                localStorage.setItem('loggedInuserName', payload_1.name);
                // this.router.navigateByUrl(this.previousUrl);
                this._userService.verifyUser(payload1).subscribe(function (resp) {
                    loginWarningFlag_1 = resp.json().warningFl;
                    if (loginWarningFlag_1 == false) {
                        _this._loginService.getAuthenticationToken(payload_1).subscribe(function (resp) {
                            _this.jwtToken = _this._loginService.getJwtToken();
                            if (_this.jwtToken === "" || _this.jwtToken === null || typeof _this.jwtToken === "undefined") {
                                _this.authFlag = true;
                                setTimeout(function () {
                                    this.authFlag = false;
                                }.bind(_this), 5000);
                            }
                            else {
                                if (_this.previousUrl)
                                    _this.router.navigate(['/dashboard/default']);
                                else {
                                    _this.router.navigateByUrl(_this.previousUrl);
                                }
                            }
                        }, function (err) {
                            alert(err);
                        });
                    }
                    else {
                        _this.passwordMacthFlag = true;
                        setTimeout(function () {
                            this.passwordMacthFlag = false;
                        }.bind(_this), 5000);
                    }
                }, function (err) {
                    alert("Error occured");
                    alert(err);
                });
            }
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_2__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

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


/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map