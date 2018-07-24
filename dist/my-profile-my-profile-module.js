(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"],{

/***/ "./src/app/layout/my-profile/my-profile-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/my-profile/my-profile-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: MyProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileRoutingModule", function() { return MyProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/layout/my-profile/my-profile/my-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"]
    }
];
var MyProfileRoutingModule = /** @class */ (function () {
    function MyProfileRoutingModule() {
    }
    MyProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MyProfileRoutingModule);
    return MyProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/my-profile/my-profile.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/my-profile/my-profile.module.ts ***!
  \********************************************************/
/*! exports provided: MyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/layout/my-profile/my-profile/my-profile.component.ts");
/* harmony import */ var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-profile-routing.module */ "./src/app/layout/my-profile/my-profile-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyProfileRoutingModule"]
            ],
            declarations: [_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_2__["MyProfileComponent"]]
        })
    ], MyProfileModule);
    return MyProfileModule;
}());



/***/ }),

/***/ "./src/app/layout/my-profile/my-profile/my-profile.component.html":
/*!************************************************************************!*\
  !*** ./src/app/layout/my-profile/my-profile/my-profile.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"top\">\r\n      <div class=\"col-md-12 header\" style=\"text-align: center;\">\r\n          <h3>My Profile</h3>\r\n      </div>\r\n  </div>\r\n<div class=\"left\">\r\n</div>\r\n<div class=\"main\" >\r\n        <div class=\"setting-header\"><h4>Profile Details</h4></div>\r\n        <br>\r\n      <table style=\"width: 80%; \">\r\n          <tr>  <h4>Profile Details</h4></tr>\r\n          <tr >\r\n                <td>Profile Picture</td>\r\n                <td>  <img src=\"assets/images/default.png\"  alt=\"Responsive image\" class=\"img-fluid\" /></td>\r\n                <td><input type=\"file\"/></td>\r\n          </tr>\r\n          <tr>\r\n                <td>Full Name</td>\r\n                <td><input value=\"{{loggedInUser.name}}  {{loggedInUser.lastName}}\" type=\"text\"/></td>\r\n          </tr>\r\n          <tr>\r\n                <td>Email / Username</td>\r\n                <td><input value=\"{{loggedInUser.email}}\" type=\"text\" readonly/></td>\r\n          </tr>\r\n          <tr>\r\n                <td>Team Name</td>\r\n                <td><input value=\"{{loggedInUser.teamId.teamName}}\" type=\"text\" readonly/></td>\r\n          </tr>\r\n          <tr><h4>Other Details</h4></tr>\r\n          <tr> <td>Total Meeting</td>\r\n            <td><input value=\"{{totalMeetingCount}}\" type=\"text\" readonly/></td>\r\n        </tr>\r\n        <tr> <td>Total Groups</td>\r\n            <td><input value=\"{{totalGroupCount}}\" type=\"text\" readonly/></td>\r\n        </tr>\r\n        </table>\r\n        <div style=\"text-align:center;\">\r\n            <button class=\"btn btn-primary\" style=\"align:align-center\">Save Changes</button>\r\n            <button class=\"btn btn-aecondary\">Reset Changes</button>\r\n        </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/my-profile/my-profile/my-profile.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/layout/my-profile/my-profile/my-profile.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  height: 105px;\n  padding: 15px;\n  background: #3277d3;\n  color: #ffffff;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-image: url(/assets/images/logobg.gif);\n  background-position-y: bottom; }\n"

/***/ }),

/***/ "./src/app/layout/my-profile/my-profile/my-profile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/my-profile/my-profile/my-profile.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_meeting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/meeting-service */ "./src/app/services/meeting-service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(userService, meetingService, groupService, router) {
        this.router = router;
        this._userService = userService;
        this._meetingservice = meetingService;
        this._groupService = groupService;
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // webservice to get profile details
        this.loggedInUser = {
            'id': 2,
            'email': 'b@gmail.com',
            'password': '1235',
            'name': 'sunita',
            'lastName': 'kolhapure',
            'active': 1,
            'teamId': {
                'prime': null,
                'errorFl': false,
                'warningFl': false,
                'message': null,
                'teamId': 1,
                'teamName': 'cfs_pune',
                'status': {
                    'statusId': 1,
                    'status': 'Active'
                }
            },
            'profileImgPath': null
        };
        var payload = { id: 2 };
        this._userService.getLoggedInUSerDetails().subscribe(function (data) {
            if (Object.keys(data).length === 0) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.loggedInUser = data;
            }
        });
        // webservice to get total meeting count
        this.totalMeetingCount = {};
        this._meetingservice.getTotalMeetingCountByLoggedInUserId(payload).subscribe(function (data) {
            _this.totalMeetingCount = data.json();
        });
        this.totalGroupCount = {};
        this._groupService.getTotalGroupByLoggedInUserId(payload).subscribe(function (data) {
            _this.totalGroupCount = data.json();
            alert(_this.totalGroupCount);
        });
    };
    MyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/layout/my-profile/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/layout/my-profile/my-profile/my-profile.component.scss")],
            providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_meeting_service__WEBPACK_IMPORTED_MODULE_2__["MeetingService"], _services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_meeting_service__WEBPACK_IMPORTED_MODULE_2__["MeetingService"], _services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/group.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/group.service.ts ***!
  \*******************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _urlConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlConstants */ "./src/app/services/urlConstants.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-request.service */ "./src/app/services/api-request.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupService = /** @class */ (function () {
    function GroupService(http, loginService, apiRequest) {
        this.http = http;
        this.apiRequest = apiRequest;
        this.GroupList$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
        this._loginService = loginService;
    }
    //get groups by loggedinuser
    GroupService.prototype.setGroupList = function (payload) {
        var _this = this;
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getGroupByLoggedInUserId?email=' + payload.email;
        // const resp = new BehaviorSubject<any>({});
        this.apiRequest.post(url, payload).subscribe(function (data) {
            _this.GroupList$.next(data);
        }, function (err) {
            alert(err);
        });
        // return resp;
    };
    GroupService.prototype.getGroupList = function () {
        return this.GroupList$;
    };
    GroupService.prototype.getTotalGroupByLoggedInUserId = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getTotalGroupByLoggedInUserId';
        return this.http.post(url, payload);
    };
    GroupService.prototype.getTeamsByLoggedInUserId = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getTeamsByLoggedInUserId?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
    };
    GroupService.prototype.saveGroupDetails = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'saveGroupDetails';
        var resp = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.apiRequest.post(url, payload).subscribe(function (data) {
            resp.next(data);
        }, function (err) {
            alert(err);
        });
        return resp;
    };
    GroupService.prototype.saveBroadcastMessage = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'saveBroadcastMessage';
        var resp = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.apiRequest.post(url, payload).subscribe(function (data) {
            resp.next(data);
        }, function (err) {
            alert(err);
        });
        return resp;
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _api_request_service__WEBPACK_IMPORTED_MODULE_4__["ApiRequestService"]])
    ], GroupService);
    return GroupService;
}());



/***/ })

}]);
//# sourceMappingURL=my-profile-my-profile-module.js.map