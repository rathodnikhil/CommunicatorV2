(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/team.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/team.service.ts ***!
  \******************************************/
/*! exports provided: TeamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamService", function() { return TeamService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _urlConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlConstants */ "./src/app/services/urlConstants.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-request.service */ "./src/app/services/api-request.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeamService = /** @class */ (function () {
    function TeamService(http, loginService, apiRequest) {
        this.http = http;
        this.apiRequest = apiRequest;
        this.teamList$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.memberList$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this._loginService = loginService;
    }
    TeamService.prototype.setTeamsByLoggedInUserId = function (payload) {
        var _this = this;
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getTeamsByLoggedInUserId?email=' + payload.email;
        // const resp = new BehaviorSubject<any>({});
        this.apiRequest.post(url, payload).subscribe(function (data) {
            _this.teamList$.next(data);
        }, function (err) {
            alert(err);
        });
        // return resp;
    };
    TeamService.prototype.getTeamListByLoggedInUserId = function () {
        return this.teamList$;
    };
    TeamService.prototype.getMembersByTeam = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getMembersByTeam?teamCode=' + payload.teamCode;
        var resp = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.apiRequest.post(url, payload).subscribe(function (data) {
            resp.next(data);
        }, function (err) {
            alert(err);
        });
        return resp;
    };
    TeamService.prototype.setMembersByLoggedInUserId = function (payload) {
        var _this = this;
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getMembersByLoggedInUserId?email=' + payload.email;
        // const resp = new BehaviorSubject<any>({});
        this.apiRequest.post(url, payload).subscribe(function (data) {
            _this.memberList$.next(data);
        }, function (err) {
            alert(err);
        });
        // return resp;
    };
    TeamService.prototype.getMemberListByLoggedInUserId = function () {
        return this.memberList$;
    };
    TeamService.prototype.getMembersByLoggedInUserId = function (payload) {
        debugger;
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getMembersByLoggedInUserId?email=' + payload.email;
        var resp = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.apiRequest.post(url, payload).subscribe(function (data) {
            resp.next(data);
        }, function (err) {
            alert(err);
        });
        return resp;
    };
    TeamService.prototype.getAllEnableTeams = function () {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getAllEnableTeams';
        return this.http.get(url);
    };
    //add new team
    TeamService.prototype.saveTeamDetails = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'saveTeamDetails';
        var resp = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.apiRequest.post(url, payload).subscribe(function (data) {
            resp.next(data);
        }, function (err) {
            alert(err);
        });
        return resp;
    };
    TeamService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _api_request_service__WEBPACK_IMPORTED_MODULE_5__["ApiRequestService"]])
    ], TeamService);
    return TeamService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map