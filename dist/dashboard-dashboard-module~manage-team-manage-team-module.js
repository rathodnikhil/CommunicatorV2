(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module~manage-team-manage-team-module"],{

/***/ "./src/app/layout/dashboard/broadcast-message/broadcast-message.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/dashboard/broadcast-message/broadcast-message.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"conatiner\">\r\n<div class=\"row\">\r\n<div class=\"col-md-2\">\r\n<label>Enter Message</label>\r\n</div>\r\n<div class=\"col-md-10\">\r\n<textarea placeholder=\"Type Message\"></textarea>\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n<div> <a class=\"btn btn-primary \">Send Message</a></div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/broadcast-message/broadcast-message.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/dashboard/broadcast-message/broadcast-message.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/dashboard/broadcast-message/broadcast-message.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/dashboard/broadcast-message/broadcast-message.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BroadcastMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastMessageComponent", function() { return BroadcastMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BroadcastMessageComponent = /** @class */ (function () {
    function BroadcastMessageComponent() {
    }
    BroadcastMessageComponent.prototype.ngOnInit = function () {
    };
    BroadcastMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-broadcast-message',
            template: __webpack_require__(/*! ./broadcast-message.component.html */ "./src/app/layout/dashboard/broadcast-message/broadcast-message.component.html"),
            styles: [__webpack_require__(/*! ./broadcast-message.component.scss */ "./src/app/layout/dashboard/broadcast-message/broadcast-message.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BroadcastMessageComponent);
    return BroadcastMessageComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"chat-panel card card-default\">\r\n    <div class=\"card-header\">\r\n        <i class=\"fa fa-comments fa-fw\"></i>\r\n        Chat\r\n        <div class=\" pull-right\" ngbDropdown>\r\n            <button class=\"btn btn-secondary btn-sm\" ngbDropdownToggle>\r\n                <span class=\"caret\"></span>\r\n            </button>\r\n            <ul class=\"dropdown-menu dropdown-menu-right\">\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-refresh fa-fw\"></i> Refresh</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-check-circle fa-fw\"></i> Available</a>\r\n                </li>\r\n                <li role=\"menuitem\"><a class=\"dropdown-item\" href=\"#\">\r\n                    <i class=\"fa fa-times fa-fw\"></i> Busy</a>\r\n                </li>\r\n                <li class=\"divider dropdown-divider\"></li>\r\n                <li role=\"menuitem\">\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-times fa-fw\"></i> Busy\r\n                    </a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"#\" class=\"dropdown-item\">\r\n                        <i class=\"fa fa-clock-o fa-fw\"></i> Away\r\n                    </a>\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li>\r\n                  <a href=\"#\" class=\"dropdown-item\">\r\n                    <i class=\"fa fa-sign-out fa-fw\"></i> Sign Out\r\n                  </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div> -->\r\n<!-- /.panel-heading -->\r\n<!-- <div class=\"card-body\" style=\"height:75vh;\">\r\n        <ul class=\"chat\">\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 13 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li><li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li><li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li><li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li><li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li><li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li><li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li><li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li><li class=\"left clearfix\">\r\n                <span class=\"chat-img pull-left\">\r\n                    <img src=\"http://placehold.it/50/55C1E7/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                        <small class=\"pull-right text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 14 mins ago\r\n                        </small>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n            <li class=\"right clearfix\">\r\n                <span class=\"chat-img pull-right\">\r\n                    <img src=\"http://placehold.it/50/FA6F57/fff\" alt=\"User Avatar\" class=\"img-circle\">\r\n                </span>\r\n                <div class=\"chat-body clearfix\">\r\n                    <div class=\"header\">\r\n                        <small class=\" text-muted\">\r\n                            <i class=\"fa fa-clock-o fa-fw\"></i> 15 mins ago\r\n                        </small>\r\n                        <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                    </div>\r\n                    <p>\r\n                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                    </p>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div> -->\r\n<!-- /.card-body -->\r\n<!-- <div class=\"card-footer\">\r\n        <div class=\"input-group\">\r\n            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\">\r\n            <span class=\"input-group-btn\">\r\n                <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n                    Send\r\n                </button>\r\n            </span>\r\n        </div>\r\n    </div> -->\r\n<!-- /.card-footer -->\r\n<!-- </div> -->\r\n<!-- <div class=\"chat-panel card card-default\">\r\n        <div class=\"card-header row\">\r\n                <div class=\"col-md-7\">\r\n                      <i class=\"fa fa-calendar-check-o\"></i>\r\n                         Good Morning Sherin\r\n                    <h6 class=\"style-links\">Your Schedule of upcoming Meetings</h6></div>\r\n                <div class=\"col-md-4\"><button class=\"btn btn-primary\">Schedule New Meeting</button></div>\r\n            </div>\r\n            <div class=\"card-header row defaultMeetSelect\">\r\n                 <div class=\"align-center\">\r\n                    <a style=\"padding-right:10px;\">All</a>\r\n                   <a class=\"date-period-select\">Today</a>\r\n                   <a class=\"date-period-select\">Tomorrow</a>\r\n                   <a class=\"date-period-select\">Select Date</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-header row\">\r\n                    <div class=\"col-md-6\">\r\n                          <i class=\"fa fa-calendar\"></i>\r\n                           19th March 2018\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                         <div class=\"searchText\">\r\n                            <input type=\"text\" placeholder=\"Search User Names\">\r\n                          </div></div>\r\n\r\n            <div class=\"card-body\" style=\"height:75vh;\">\r\n                    <ul class=\"chat\">\r\n                            <li class=\"left clearfix\">\r\n                                 <div class=\"row\">\r\n                                        <div class=\"col-md-3\"> <button class=\"btn btn-secondary\">Now</button></div>\r\n                                        <div class=\"col-md-7\">\r\n                                                <p>\r\n\r\n                                                        <strong class=\"primary-font\">Daily Review Meeting For Java Team</strong><br>\r\n                                                        Meeting Id : Mcore145298537<br>\r\n                                                        Meeting Host : Rohit Dhawan\r\n                                                </p>\r\n                                        </div>\r\n\r\n                                    </div>\r\n\r\n                            </li>\r\n                            <li class=\"left clearfix\">\r\n\r\n                            </li>\r\n                            <li class=\"left clearfix\">\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-md-3\"> <h6>10:00 am</h6></div>\r\n                                            <div class=\"col-md-7\">\r\n                                                    <p>\r\n                                                            <strong class=\"primary-font\">Daily Review Meeting For Java Team</strong><br>\r\n                                                            Meeting Id : Mcore145298537<br>\r\n                                                            Meeting Host : Chetan Patwardhan\r\n                                                    </p>\r\n                                            </div>\r\n                                            <div class=\"col-md-2\">\r\n\r\n                                                    <div id=\"ex4\">\r\n                                                            <span class=\"p1 fa-stack fa-2x has-badge\" data-count=\"4\">\r\n                                                              <i class=\"p3 fa fa-comments fa-stack-1x xfa-inverse\" data-count=\"4b\"></i>\r\n                                                            </span>\r\n                                                          </div>\r\n                                                          </div>\r\n                                        </div>\r\n                                </li>\r\n\r\n                                <li class=\"left clearfix\">\r\n                                    <div class=\"row\">\r\n                                        <ul id=\"accordion\">\r\n                                                <li>\r\n                                                        <div class=\"row\">\r\n                                                                <div class=\"col-md-3\"> <h6>10:00 am</h6></div>\r\n                                                                <div class=\"col-md-7\">\r\n                                                                        <p>\r\n                                                                                <strong class=\"primary-font\">Daily Review Meeting For Java Team</strong><br>\r\n                                                                                Meeting Id : Mcore145298537<br>\r\n                                                                                Meeting Host : Chetan Patwardhan\r\n                                                                        </p>\r\n                                                                </div>\r\n                                                                <div class=\"col-md-2\">\r\n                                                                        <span class=\"p1 fa-stack fa-1x has-badge\" data-count=\"4\">\r\n                                                                                <i class=\"p3 fa fa-chevron-down fa-stack-1x xfa-inverse\" data-count=\"4b\"></i>\r\n                                                                              </span>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                    <div class=\"content\">\r\n\r\n                                                            <div class=\"panel-body\">\r\n                                                                    <ul class=\"chat\">\r\n                                                                        <li class=\"left clearfix\"><span class=\"chat-img pull-left\">\r\n                                                                            <img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                                                        </span>\r\n                                                                            <div class=\"chat-body clearfix\">\r\n                                                                                <div class=\"header\">\r\n                                                                                    <strong class=\"primary-font\">Jack Sparrow</strong> <small class=\"pull-right text-muted\">\r\n                                                                                        <span class=\"glyphicon glyphicon-time\"></span>12 mins ago</small>\r\n                                                                                </div>\r\n                                                                                <p>\r\n                                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare\r\n                                                                                    dolor, quis ullamcorper ligula sodales.\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </li>\r\n\r\n                                                                        <li class=\"right clearfix\"><span class=\"chat-img pull-right\">\r\n                                                                            <img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                                                        </span>\r\n                                                                            <div class=\"chat-body clearfix\">\r\n                                                                                <div class=\"header\">\r\n                                                                                    <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>15 mins ago</small>\r\n                                                                                    <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                                                                                </div>\r\n                                                                                <p>\r\n                                                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare\r\n                                                                                    dolor, quis ullamcorper ligula sodales.\r\n                                                                                </p>\r\n                                                                            </div>\r\n                                                                        </li>\r\n                                                                    </ul>\r\n                                                                </div>\r\n                                                                <div class=\"panel-footer\">\r\n                                                                    <div class=\"input-group\">\r\n                                                                        <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" />\r\n                                                                        <span class=\"input-group-btn\">\r\n                                                                            <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n                                                                                Send</button>\r\n                                                                        </span>\r\n                                                                    </div>\r\n                                                                </div>\r\n\r\n                                                    </div>\r\n                                                </li>\r\n\r\n                                            </ul>\r\n                                            </div>\r\n                                </li>\r\n                                <li class=\"left clearfix\">\r\n                                        <div class=\"row\">\r\n                                                <div class=\"col-md-3\"> <h6>10:00 am</h6></div>\r\n                                                <div class=\"col-md-9\">\r\n                                                        <p>\r\n                                                                <strong class=\"primary-font\">Daily Review Meeting For Java Team</strong><br>\r\n                                                                Meeting Id : Mcore145298537<br>\r\n                                                                Meeting Host : Chetan Patwardhan\r\n                                                        </p>\r\n                                                </div>\r\n                                            </div>\r\n                                    </li>\r\n\r\n                                    <li class=\"left clearfix\">\r\n                                            <div class=\"row\">\r\n                                                    <div class=\"col-md-3\"> <h6>10:00 am</h6></div>\r\n                                                    <div class=\"col-md-9\">\r\n                                                            <p>\r\n                                                                    <strong class=\"primary-font\">Daily Review Meeting For Java Team</strong><br>\r\n                                                                    Meeting Id : Mcore145298537<br>\r\n                                                                    Meeting Host : Chetan Patwardhan\r\n                                                            </p>\r\n                                                    </div>\r\n                                                </div>\r\n                                        </li>\r\n\r\n                            </ul>\r\n            </div>\r\n        </div>\r\n</div> -->\r\n\r\n<div class=\"chat-panel card card-default\">\r\n    <div class=\"card-header row\">\r\n        <div class=\"col-md-9\">\r\n            <!-- <span> <i class=\"fa fa-calendar-check-o\"></i></span> -->\r\n            <h5>Schedule New Meeting</h5>\r\n            <h6 class=\"style-links\">19 March 2018</h6>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <button class=\"btn btn-danger\">Cancel</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"container overall-padding\">\r\n        <form>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-3\">\r\n                    <label>Subject</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"descField\" placeholder=\"Your Comments\" />\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-3\">\r\n                    <label>Date</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <div class=\"card-header\">\r\n                        <div class=\"align-center\">\r\n                            <a>Today</a>\r\n                            <a class=\"date-period-select\">Tomorrow</a>\r\n                            <a class=\"date-period-select\">Select Date</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-3\">\r\n                    <label>Start Time</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <input id=\"party\" class=\"form-control\" type=\"datetime-local\" name=\"partydate\" value=\"2017-06-01T08:30\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-3\">\r\n                    <label>End Time</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <input id=\"endTime\" class=\"form-control\" type=\"datetime-local\" name=\"partydate\" value=\"2017-06-01T08:30\">\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-3\">\r\n                    <label>Recurring</label>\r\n                </div>\r\n                <div class=\"col-sm-3\">\r\n                    <a class=\"btn btndefault\">Yes</a>\r\n                    <a class=\"btn btn-secondary\">No</a>\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <label>Type</label>\r\n                </div>\r\n                <div class=\"col-sm-4\">\r\n                    <a class=\"btn btndefault\">Audio</a>\r\n                    <a class=\"btn btn-secondary\">Video</a>\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-3\">\r\n                    <label>MOM</label>\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <p>By default mom duty is with you.\r\n                        <br> you can transfer MOM duty during the call\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"row form-group\">\r\n                <div class=\"col-sm-3\">\r\n\r\n                </div>\r\n                <div class=\"col-sm-9\">\r\n                    <button class=\"btn btn-primary\">Schedule Meeting & Send Invitation</button>\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/dashboard/components/chat/chat.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/dashboard/components/chat/chat.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/layout/dashboard/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/layout/dashboard/components/chat/chat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/custom-modal/custom-modal.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button class=\"btn btn-primary\" (click)=\"open(content)\">Large modal</button> -->\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\" >\r\n    <div class=\"modal-header popHeaderMeeting\">\r\n        <div>\r\n            <span>\r\n                <h5 class=\"modal-title popTitle\" >\r\n                   <a [innerHTML]=\"model.titleIcon\"></a>&nbsp;{{model.title}}</h5>\r\n            </span>\r\n            <p  *ngIf=\"model.smallHeading\">{{model.smallHeading}}</p>\r\n        </div>\r\n        <button id=\"closeBtn\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/custom-modal/custom-modal.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popHeaderMeeting {\n  padding: 10px;\n  background-image: url(\"/assets/images/popupBg.png\");\n  color: #ffffff; }\n\n.popHeaderMeeting p {\n  font-size: 12px; }\n\n.btn.btn-secondary {\n  background: #3277d3;\n  /* color: #187bd0; */\n  border-color: #75b3dd;\n  border-radius: 0px 5px 5px 0px; }\n\n.btn.btn-secondary.btn-border-radius {\n  border-radius: 5px; }\n\n.popFooter {\n  background-color: #e5efff;\n  border-top: 1px solid  #19191a; }\n\n.popTitle {\n  font-size: 22px; }\n\n.btn-border-radius {\n  border-radius: 5px; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/custom-modal/custom-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: CustomModalComponent, CustomModalModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModalComponent", function() { return CustomModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModalModel", function() { return CustomModalModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
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



var CustomModalComponent = /** @class */ (function () {
    function CustomModalComponent(modalService, document) {
        this.modalService = modalService;
        this.document = document;
        this.Button1Event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Button2Event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.CancelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CustomModalComponent.prototype.open = function () {
        var _this = this;
        // debugger;
        this.modalService.open(this.content2).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            _this.CancelEvent.emit(reason);
        });
    };
    CustomModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    CustomModalComponent.prototype.button1Click = function (e) {
        this.Button1Event.emit(e);
    };
    CustomModalComponent.prototype.button2Click = function (e) {
        this.Button2Event.emit(e);
    };
    CustomModalComponent.prototype.close = function () {
        var closeBtn = this.document.getElementById('closeBtn');
        closeBtn.click();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])
    ], CustomModalComponent.prototype, "content2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeBtn'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CustomModalComponent.prototype, "closeBtn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", CustomModalModel)
    ], CustomModalComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomModalComponent.prototype, "Button1Event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomModalComponent.prototype, "Button2Event", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomModalComponent.prototype, "CancelEvent", void 0);
    CustomModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-modal',
            template: __webpack_require__(/*! ./custom-modal.component.html */ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.html"),
            styles: [__webpack_require__(/*! ./custom-modal.component.scss */ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], Object])
    ], CustomModalComponent);
    return CustomModalComponent;
}());

var CustomModalModel = /** @class */ (function () {
    function CustomModalModel() {
    }
    return CustomModalModel;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/default-chat/default-chat.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/default-chat/default-chat.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\r\n    <div style=\"text-align: center;width:100%;height:99vh;padding-top:30%;\">\r\n        <h4>Hello {{loggedInUser.name}}&nbsp;{{loggedInUser.lastName}}</h4>\r\n        <img src=\"assets/images/chat_icon.png\" alt=\"Responsive image\" class=\"img-fluid\" />\r\n        <h6 class=\"label-h6\">Click on a member's name\r\n            <br>and start a new conversation</h6>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/default-chat/default-chat.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/default-chat/default-chat.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-h6 {\n  color: #999999;\n  margin-top: 7%; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/default-chat/default-chat.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/default-chat/default-chat.component.ts ***!
  \************************************************************************************/
/*! exports provided: DefaultChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultChatComponent", function() { return DefaultChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefaultChatComponent = /** @class */ (function () {
    function DefaultChatComponent(userService, router) {
        this.router = router;
        this._userService = userService;
    }
    DefaultChatComponent.prototype.ngOnInit = function () {
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
        // const payload = { id: 2 };
        // this._userService.getLoggedInUSerDetails().subscribe(data => {
        //     if (Object.keys(data).length === 0) {
        //         this.router.navigate(['/login']);
        //     } else {
        //         this.loggedInUser = data;
        //     }
        // });
    };
    DefaultChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default-chat',
            template: __webpack_require__(/*! ./default-chat.component.html */ "./src/app/layout/dashboard/components/default-chat/default-chat.component.html"),
            styles: [__webpack_require__(/*! ./default-chat.component.scss */ "./src/app/layout/dashboard/components/default-chat/default-chat.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DefaultChatComponent);
    return DefaultChatComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/default-meeting/default-meeting.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/default-meeting/default-meeting.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #chatPanel class=\"chat-panel card card-default\">\r\n    <div class=\"card-header meetingHeader\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <i class=\"fa fa-calendar-check-o\"></i>\r\n                Good Morning {{loggedInUser.name}} {{loggedInUser.lastName}}\r\n                <h6 class=\"style-links\">Your Schedule of upcoming Meetings</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <a href=\"javascript:void(0)\" (click)=\"switchRoute()\" class=\"btn btn-sec pull-right\" type=\"button\">Schedule</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-header row defaultMeetSelect\" *ngIf=\"selectDateFlag === true\">\r\n        <div class=\"align-center\">\r\n            <a style=\"padding-right:10px; cursor: pointer;\" (click)=\"filterMeetingByDate('all')\">All</a>\r\n            <a class=\"date-period-select\" (click)=\"filterMeetingByDate('today')\">Today</a>\r\n            <a class=\"date-period-select\" (click)=\"filterMeetingByDate('tomorrow')\">Tomorrow</a>\r\n            <!-- <a (click)=\"meetingByDate()\" class=\"date-period-select\">Select Date</a> -->\r\n        </div>\r\n    </div>\r\n    <ul class=\"accordion btn-sec\">\r\n        <li class=\"accordion-item\">\r\n          <input id=\"s1\" class=\"hide\" type=\"checkbox\">\r\n          <label for=\"s1\"class=\"accordion-label\" (click) = \"selectMeetingFilterDate()\"><i class=\"fa fa-calendar-check-o\"></i>&nbsp;Select Date\r\n         <span style=\"float: right; font-size: 20px;\"(click)=\"closeDropdown()\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></span> </label>\r\n          <ul class=\"accordion-child\" >\r\n              <div class=\"row overall-padding\">             \r\n                <div class=\"col-sm-6\">\r\n                        <label>From Date</label>\r\n                        <div class=\"input-group datepicker-input\">\r\n                            <input class=\"form-control\" placeholder=\"{{currentDate | date:'yyy/MM/dd'}}\" name=\"fromDate\"\r\n                             [(ngModel)]=\"selectedfromDate\" value=\"{{currentDate | date:'fullDate'}}\"\r\n                                ngbDatepicker #fromDate=\"ngbDatepicker\">\r\n                            <button class=\"input-group-addon\" (click)=\"fromDate.toggle()\" type=\"button\">\r\n                                <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\r\n                                <span class=\"fa fa-calendar\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n            \r\n                    <div class=\"col-sm-6\" >\r\n                        <label>To Date</label>\r\n                        <div class=\"input-group datepicker-input\">\r\n                            <input class=\"form-control\" placeholder=\"{{currentDate | date:'yyy/MM/dd'}}\" name=\"toDate\" [(ngModel)]=\"selectedtoDate\" value=\"{{currentDate | date:'fullDate'}}\"\r\n                                ngbDatepicker #toDate=\"ngbDatepicker\">\r\n                            <button class=\"input-group-addon\" (click)=\"toDate.toggle()\" type=\"button\">\r\n                                <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\r\n                                <span class=\"fa fa-calendar\"></span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                    <div style=\"text-align: center;margin:0 auto;padding: 10px;\">\r\n                        <button class=\"btn btn-primary\" (click)=\"filterMeetingByDate('range')\">Search</button>\r\n                    </div>\r\n                </div>\r\n         </ul>\r\n        </li>\r\n     \r\n      </ul>\r\n    <div class=\"card-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <i class=\"fa fa-calendar\"></i>\r\n                <span style=\"font-weight: bold; font-size: 14px;\">{{currentDate | date:'fullDate'}}</span>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group input-group\">\r\n                    <input type=\"text\" id=\"searchMeeting\" value=\"sdasd\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchText\">\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary\" type=\"button\">\r\n                            <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr class=\"hr-partition\" />\r\n        </div>\r\n        <div class=\"row\">\r\n            <div #chatBody class=\"card-body\" style=\"min-height:100%;\">\r\n                <ul class=\"chat\">\r\n                    <li class=\"left clearfix\">\r\n                        <div *ngIf=\"recentMeeting.meetingCode!=undefined\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-9\">\r\n                                        <i class=\"fa fa-calendar\"></i>\r\n                                        <span style=\"font-weight: bold; font-size: 14px;\">{{recentMeeting.subject}}&nbsp;({{recentMeeting.meetingCode}})</span>\r\n                            </div>\r\n                            <div class=\"col-md-3\">\r\n                                    <button class=\"btn btn-primary\">Now</button>\r\n                                    {{recentMeeting.meetingStartDateTime | date:'yyyy-MM-dd HH:mm:ss'}}\r\n                                </div>\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                                <strong class=\"primary-font\" style=\"color:#3277d3;\">\r\n                                        <br> Meeting Host : {{recentMeeting.createdBy.name}}&nbsp;{{recentMeeting.createdBy.lastName}}\r\n                                        <br> Meeting Start Date/time : {{recentMeeting.meetingStartDateTime | date:'yyyy-MM-dd HH:mm:ss'}}\r\n                                        <br> Meeting Duration : {{recentMeeting.duration}} Hour</strong>\r\n                        </div>\r\n                    </div>\r\n                    <p *ngIf=\"recentMeeting.meetingCode===undefined\"><strong class=\"primary-font\">No recent meetings</strong></p>\r\n                    </li>\r\n                    <!-- <li *ngFor=\"let meeting of futureMeetingList | SearchFutureMeeting : searchText\" class=\"left clearfix\"> -->\r\n                    <li *ngFor=\"let meeting of filteredFutureMeetingList | SearchFutureMeeting : searchText\" class=\"left clearfix\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-8\">\r\n                                    <i class=\"fa fa-calendar\"></i>\r\n                                    <span style=\"font-weight: bold; font-size: 14px;\">{{recentMeeting.subject}}&nbsp;({{recentMeeting.meetingCode}})</span>\r\n                            </div>\r\n                            <div class=\"col-md-4\">\r\n                                    <strong class=\"primary-font\">\r\n                                    <i class=\"fa fa-clock-o\"></i>&nbsp;{{meeting.meetingStartDateTime | date:'yyyy-MM-dd HH:mm:ss'}}</strong>\r\n                            </div>\r\n                    \r\n                            <!-- <div class=\"col-md-2\">\r\n                                <div class=\"icon-wrapper\">\r\n                                    <i class=\"fa fa-comments fa-2x\"></i>\r\n                                    <span class=\"badge\">10</span>\r\n                                </div>\r\n                            </div> -->\r\n                        </div>\r\n                        <div class=\"col-md-12\">\r\n                            <strong style=\"color:#3277d3;\">\r\n                                <br> Meeting Host : {{meeting.createdBy.name}}&nbsp;{{meeting.createdBy.lastName}}\r\n                                <br> Meeting Duration : {{meeting.duration}} Hour\r\n                                <br> Meeting End Date/Time : {{meeting.meetingEndDateTime | date:'yyyy-MM-dd HH:mm:ss'}}\r\n                            </strong>\r\n                        </div>\r\n                    </li>\r\n                    <!-- <li class=\"left clearfix\">\r\n                        <div class=\"\">\r\n                            <ul id=\"accordion\">\r\n                                <li [ngClass]=\"{'active': isActive}\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-3\">\r\n                                            <h6>10:00 am</h6>\r\n                                        </div>\r\n                                        <div class=\"col-md-7\">\r\n                                            <p>\r\n                                                <strong class=\"primary-font\">Daily Review Meeting For Java Team</strong>\r\n                                                <br> Meeting Id : Mcore145298537\r\n                                                <br> Meeting Host : Chetan Patwardhan\r\n                                            </p>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\" (click)=\"isActive=!isActive\">\r\n                                            <span class=\"p1 fa-stack fa-1x has-badge\" data-count=\"4\">\r\n                                                <i class=\"p3 fa fa-chevron-down fa-stack-1x xfa-inverse\" data-count=\"4b\"></i>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"content\">\r\n                                        <div class=\"panel-body\">\r\n                                            <ul class=\"chat\">\r\n                                                <li class=\"left clearfix\">\r\n                                                    <span class=\"chat-img pull-left\">\r\n                                                        <img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                                    </span>\r\n                                                    <div class=\"chat-body clearfix\">\r\n                                                        <div class=\"header\">\r\n                                                            <strong class=\"primary-font\">Jack Sparrow</strong>\r\n                                                            <small class=\"pull-right text-muted\">\r\n                                                                <span class=\"glyphicon glyphicon-time\"></span>12 mins ago</small>\r\n                                                        </div>\r\n                                                        <p>\r\n                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                                                        </p>\r\n                                                    </div>\r\n                                                </li>\r\n                                                <li class=\"right clearfix\">\r\n                                                    <span class=\"chat-img pull-right\">\r\n                                                        <img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                                                    </span>\r\n                                                    <div class=\"chat-body clearfix\">\r\n                                                        <div class=\"header\">\r\n                                                            <small class=\" text-muted\">\r\n                                                                <span class=\"glyphicon glyphicon-time\"></span>15 mins ago</small>\r\n                                                            <strong class=\"pull-right primary-font\">Bhaumik Patel</strong>\r\n                                                        </div>\r\n                                                        <p>\r\n                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.\r\n                                                        </p>\r\n                                                    </div>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </div>\r\n                                        <div class=\"panel-footer\">\r\n                                            <div class=\"input-group\">\r\n                                                <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" />\r\n                                                <span class=\"input-group-btn\">\r\n                                                    <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\">\r\n                                                        Send</button>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </li> -->\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/default-meeting/default-meeting.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/default-meeting/default-meeting.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat-panel {\n  border-radius: 5px;\n  border: 1px solid #d3d3d3;\n  position: absolute;\n  bottom: 1rem;\n  top: 1rem;\n  height: 100%;\n  left: 1rem;\n  right: 1rem; }\n  .chat-panel .chat-dropdown {\n    margin-top: -3px; }\n  .chat-panel .chat {\n    overflow-y: hidden;\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .chat-panel .chat .left img {\n      margin-right: 15px; }\n  .chat-panel .chat .right img {\n      margin-left: 15px; }\n  .chat-panel .chat li {\n      margin-bottom: 10px;\n      margin-right: 15px;\n      padding-bottom: 5px;\n      border-bottom: 1px dotted #999; }\n  .chat-panel .card-footer input {\n    padding: 3px; }\n  .div1 {\n  float: left; }\n  .div2 {\n  float: right; }\n  .style-links {\n  color: #d2cccc;\n  font-size: 12px;\n  cursor: pointer; }\n  .defaultMeetSelect {\n  background-color: #fff;\n  text-align: center;\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n  .date-period-select {\n  border-left: 2px solid #8f5a0a;\n  padding-left: 10px;\n  padding-right: 10px;\n  cursor: pointer; }\n  .align-center {\n  margin: auto;\n  width: 100%; }\n  .align-center a {\n  color: #8f5a0a;\n  font-weight: bold; }\n  #ex4 .p1[data-count]:after {\n  position: absolute;\n  right: 10%;\n  top: 8%;\n  content: attr(data-count);\n  font-size: 40%;\n  padding: .2em;\n  border-radius: 50%;\n  line-height: 1em;\n  color: white;\n  background: rgba(255, 0, 0, 0.85);\n  text-align: center;\n  min-width: 1em; }\n  .ul-meet {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #fff; }\n  .ul-meet li {\n    position: relative;\n    padding: 0;\n    margin: 0;\n    padding-bottom: 4px;\n    padding-top: 18px;\n    border-top: 1px dotted #dce7eb; }\n  .ul-meet li i {\n      position: absolute;\n      -webkit-transform: translate(-6px, 0);\n              transform: translate(-6px, 0);\n      margin-top: 9px;\n      right: 0; }\n  .ul-meet li i:before, .ul-meet li i:after {\n        content: \"\";\n        position: absolute;\n        background-color: #000;\n        width: 3px;\n        height: 16px; }\n  .ul-meet li i:before {\n        -webkit-transform: translate(2px, 0) rotate(45deg);\n                transform: translate(2px, 0) rotate(45deg); }\n  .ul-meet li i:after {\n        -webkit-transform: translate(2px, 0) rotate(-45deg);\n                transform: translate(2px, 0) rotate(-45deg); }\n  .ul-meet li input[type=checkbox] {\n      position: absolute;\n      cursor: pointer;\n      width: 100%;\n      height: 100%;\n      z-index: 1;\n      opacity: 0; }\n  .ul-meet li input[type=checkbox]:checked ~ p {\n        margin-top: 0;\n        max-height: 0;\n        opacity: 0;\n        -webkit-transform: translate(0, 50%);\n                transform: translate(0, 50%); }\n  .ul-meet li input[type=checkbox]:checked ~ i:before {\n        margin-top: 9px;\n        height: 9px;\n        -webkit-transform: translate(2px, 0) rotate(45deg);\n                transform: translate(2px, 0) rotate(45deg); }\n  .ul-meet li input[type=checkbox]:checked ~ i:after {\n        margin-top: 9px;\n        height: 9px;\n        -webkit-transform: translate(-2px, 0) rotate(-45deg);\n                transform: translate(-2px, 0) rotate(-45deg); }\n  #accordion {\n  width: 100%;\n  list-style: none;\n  padding-left: 0px; }\n  #accordion li {\n    border: none; }\n  #accordion li div.content {\n  display: none;\n  background: #f9f9f9; }\n  #accordion li.active div.content {\n  display: inherit; }\n  .alert {\n  padding: 20px;\n  background-color: #e7e2e2; }\n  .chat {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  .chat li {\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px dotted #B3A9A9; }\n  .chat li.left .chat-body {\n  margin-left: 60px; }\n  .chat li.right .chat-body {\n  margin-right: 60px; }\n  .chat li .chat-body p {\n  margin: 0;\n  color: #777777; }\n  .panel .slidedown .glyphicon,\n.chat .glyphicon {\n  margin-right: 5px; }\n  .panel-body {\n  overflow-y: scroll;\n  height: 250px; }\n  ::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5; }\n  ::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5; }\n  ::-webkit-scrollbar-thumb {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #555; }\n  .overall-padding {\n  padding: 15px; }\n  .btndefault {\n  border: 1px solid gray; }\n  .icon-wrapper {\n  position: relative;\n  float: left; }\n  .badge {\n  background: #3277d3;\n  width: auto;\n  height: auto;\n  margin: 0;\n  border-radius: 50%;\n  position: absolute;\n  top: -12px;\n  right: -2px;\n  padding: 5px;\n  color: #fff; }\n  .card-body {\n  /* IE10+ */\n  /* Mozilla Firefox */\n  /* Opera */\n  /* Webkit (Safari/Chrome 10) */\n  /* Webkit (Chrome 11+) */\n  /* W3C Markup */\n  background-image: radial-gradient(ellipse farthest-corner at center, #FFFFFF 0%, #e8f0fc 100%); }\n  .meetingHeader {\n  background: #3277d3;\n  color: #FFFFFF;\n  border-radius: 5px 5px 0px 0px; }\n  .btn-sec {\n  background-color: #ffb94b;\n  background-image: linear-gradient(top, #fddb6f, #ffb94b);\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #d69e31 #e3a037 #d5982d #e3a037;\n  cursor: pointer;\n  text-align: center;\n  font: Arial, Helvetica;\n  font-weight: bold;\n  color: #8f5a0a; }\n  .form-control {\n  border-radius: 5px 0px 0px 5px; }\n  .hr-partition {\n  border-top: 2px dotted #848484;\n  width: 100%; }\n  *, *:before, *:after {\n  box-sizing: border-box; }\n  .hide {\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  position: absolute;\n  width: 1px; }\n  .accordion {\n  background-color: #ffb94b;\n  background-image: linear-gradient(top, #fddb6f, #ffb94b);\n  list-style-type: none;\n  border: 1px solid #e0e0e0;\n  width: 100%;\n  text-align: center;\n  padding-right: 35px;\n  font-weight: bold;\n  color: #8f5a0a; }\n  .accordion-item {\n  position: relative;\n  width: 100%;\n  border-bottom: 1px solid #e0e0e0; }\n  .accordion-item:last-child {\n    border-bottom: none; }\n  .accordion-label {\n  padding: 10px;\n  padding-left: 0px;\n  width: 100%;\n  display: block; }\n  .accordion-child {\n  transition: all 0.8s;\n  opacity: 0;\n  height: 0;\n  -webkit-transform: scale(1, 0);\n          transform: scale(1, 0);\n  -webkit-transform-origin: center top;\n          transform-origin: center top; }\n  input[type=checkbox]:checked ~ .accordion-child {\n    border: 1px solid #e0e0e0;\n    margin-left: 0px;\n    background: #fff;\n    box-shadow: 0 3px 6px 1px rgba(0, 0, 0, 0.16);\n    padding: 10px;\n    height: auto;\n    opacity: 1;\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    text-align: center;\n    margin-bottom: 20px;\n    z-index: 10;\n    position: relative; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/default-meeting/default-meeting.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/default-meeting/default-meeting.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DefaultMeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMeetingComponent", function() { return DefaultMeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_meeting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/meeting-service */ "./src/app/services/meeting-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DefaultMeetingComponent = /** @class */ (function () {
    function DefaultMeetingComponent(userService, meetingService, router) {
        this.router = router;
        this.CurrentRoute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentDate = new Date();
        this.futureMeetingList = [];
        this.filteredFutureMeetingList = [];
        this._userService = userService;
        this._meetingService = meetingService;
    }
    DefaultMeetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectDateFlag = true;
        // loggedInUser Details webservice call
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
        //getAllFutureMeetingList webservice call
        this.getAllFutureMeetingList();
        // recent meeting webservice call    
        var payload = { email: 'rohit@coreflexsolutions.com' };
        this.recentMeeting = {};
        this._meetingService.setRecentMeetingByUser(payload);
        this._meetingService.getRecentMeetingByUser().subscribe(function (data) {
            _this.recentMeeting = data;
        });
        // current date and time
        // this.currentDate = Date.now();
    };
    DefaultMeetingComponent.prototype.ngAfterViewInit = function () {
        this.chatBody.nativeElement.style.height = (this.chatPanel.nativeElement.offsetHeight
            - (this.chatBody.nativeElement.offsetTop + 30)) + 'px';
    };
    DefaultMeetingComponent.prototype.switchRoute = function () {
        this.CurrentRoute.emit(1);
    };
    DefaultMeetingComponent.prototype.serachMeetingByDate = function (fromDate, toDate) {
        // this.selectedDate = new Date(
        //     fromDate.getFullYear(),
        //     fromDate.getMonth() + 2,
        //     fromDate.getDate()
        //   );
        //fromDate = fromDate.
        alert(fromDate);
    };
    // future meeting list web service call
    DefaultMeetingComponent.prototype.getAllFutureMeetingList = function () {
        var _this = this;
        var payload = { email: 'rohit@coreflexsolutions.com' };
        this.futureMeetingList = [];
        this._meetingService.setFutureMeetimgList(payload);
        this._meetingService.getFutureMeetingListByUser().subscribe(function (data) {
            // if (resp.errorFl || resp.warningFl) {
            //     this.futureMeetingList = [];
            // } else {
            //     this.futureMeetingList = data;
            //     this.filteredFutureMeetingList = this.futureMeetingList;
            // }       
            _this.futureMeetingList = data;
            _this.filteredFutureMeetingList = _this.futureMeetingList;
        });
    };
    DefaultMeetingComponent.prototype.selectMeetingFilterDate = function () {
        this.selectDateFlag = !this.selectDateFlag;
    };
    DefaultMeetingComponent.prototype.closeDropdown = function () {
        this.selectDateFlag = false;
    };
    DefaultMeetingComponent.prototype.filterMeetingByDate = function (mode) {
        var _this = this;
        this.filteredFutureMeetingList = [];
        switch (mode) {
            case 'today':
                this.futureMeetingList.forEach(function (meeting) {
                    var meetingDate = new Date(meeting.meetingStartDateTime);
                    if (meetingDate.getDate() == _this.currentDate.getDate() && meetingDate.getMonth() == _this.currentDate.getMonth() && meetingDate.getFullYear() === _this.currentDate.getFullYear()) {
                        _this.filteredFutureMeetingList.push(meeting);
                    }
                });
                break;
            case 'tomorrow':
                this.futureMeetingList.forEach(function (meeting) {
                    var meetingDate = new Date(meeting.meetingStartDateTime);
                    var tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    if (meetingDate.getDate() == tomorrow.getDate() && meetingDate.getMonth() == tomorrow.getMonth() && meetingDate.getFullYear() === tomorrow.getFullYear()) {
                        _this.filteredFutureMeetingList.push(meeting);
                    }
                });
                break;
            case 'range':
                this.futureMeetingList.forEach(function (meeting) {
                    var meetingDate = new Date(meeting.meetingStartDateTime);
                    if ((meetingDate.getDate() >= _this.selectedfromDate.day && meetingDate.getMonth() + 1 >= _this.selectedfromDate.month && meetingDate.getFullYear() >= _this.selectedfromDate.year)
                        && (meetingDate.getDate() <= _this.selectedtoDate.day && meetingDate.getMonth() + 1 <= _this.selectedtoDate.month && meetingDate.getFullYear() <= _this.selectedtoDate.year)) {
                        _this.filteredFutureMeetingList.push(meeting);
                    }
                });
                break;
            default:
                this.filteredFutureMeetingList = this.futureMeetingList;
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DefaultMeetingComponent.prototype, "CurrentRoute", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatPanel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DefaultMeetingComponent.prototype, "chatPanel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chatBody'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DefaultMeetingComponent.prototype, "chatBody", void 0);
    DefaultMeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default-meeting',
            template: __webpack_require__(/*! ./default-meeting.component.html */ "./src/app/layout/dashboard/components/default-meeting/default-meeting.component.html"),
            styles: [__webpack_require__(/*! ./default-meeting.component.scss */ "./src/app/layout/dashboard/components/default-meeting/default-meeting.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_meeting_service__WEBPACK_IMPORTED_MODULE_2__["MeetingService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DefaultMeetingComponent);
    return DefaultMeetingComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/default-meeting/search-future-meeting.pipe.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/default-meeting/search-future-meeting.pipe.ts ***!
  \*******************************************************************************************/
/*! exports provided: SearchFutureMeetingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFutureMeetingPipe", function() { return SearchFutureMeetingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFutureMeetingPipe = /** @class */ (function () {
    function SearchFutureMeetingPipe() {
    }
    SearchFutureMeetingPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            debugger;
            Object.values(it).forEach(function (element) {
                if (element !== undefined && element != null) {
                    if (typeof element === 'string') {
                        return element.toLowerCase().includes(searchText);
                    }
                    if ((typeof element).toLocaleLowerCase() === 'object') {
                        Object.values(element).forEach(function (innerElem) {
                            if (innerElem != null && typeof element === 'string') {
                                return innerElem.toLowerCase().includes(searchText);
                            }
                        });
                    }
                }
            });
        });
    };
    SearchFutureMeetingPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'SearchFutureMeeting'
        })
    ], SearchFutureMeetingPipe);
    return SearchFutureMeetingPipe;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/index.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/components/index.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent, NotificationComponent, ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_0__["TimelineComponent"]; });

/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/layout/dashboard/components/notification/notification.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__["NotificationComponent"]; });

/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/layout/dashboard/components/chat/chat.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return _chat_chat_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]; });






/***/ }),

/***/ "./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\" style=\"height: 95vh;\">\r\n            <a [routerLink]=\"['/dashboard/chat']\"><i class=\"fa fa-home\"></i></a>\r\n   <div class=\"row parent\">\r\n    <div class=\"child\">\r\n            <div class=\"wrapper\">\r\n                    <div class=\"half\">\r\n                      <div class=\"tab\">\r\n                        <input id=\"tab-one\" type=\"checkbox\" name=\"tabs\">\r\n                        <label for=\"tab-one\">Minutes of meeting</label>\r\n                        <div class=\"tab-content\">\r\n                         <textarea placeholder=\"Type Here ...\"  style=\"width: 95%;margin: 8px;\" rows=\"30\"></textarea>\r\n                         <button>Save MOM</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n    </div>\r\n</div>\r\n   <div class=\"row\" style=\"height:22vh; padding: 5px;margin:2px;\">\r\n        <div class=\"scrollmenu\">\r\n                <div id=\"grid\">\r\n                        <div id=\"gridtop1\">\r\n                                <img src=\"assets/images/default.png\"  alt=\"Responsive image\" class=\"img-fluid\" />\r\n                        <p>Vinita Patil</p>\r\n                        </div>\r\n                        <div id=\"gridtop2\">\r\n                                <img src=\"assets/images/default.png\"  alt=\"Responsive image\" class=\"img-fluid\" />\r\n                        <p>Sunita Kolhapure</p>\r\n                        </div>\r\n                        <div id=\"gridtop3\">\r\n                                <img src=\"assets/images/default.png\"  alt=\"Responsive image\" class=\"img-fluid\" />\r\n                        <p>Sudhir Manore</p>\r\n                        </div>\r\n                        <div id=\"gridtop3\">\r\n                            <img src=\"assets/images/default.png\"  alt=\"Responsive image\" class=\"img-fluid\" />\r\n                            <p>Prachi Mhatre</p>\r\n                         </div>\r\n                        <div id=\"gridbottom1\">\r\n                                <img src=\"assets/images/default.png\"  alt=\"Responsive image\" class=\"img-fluid\" />\r\n                        <p>Namita Pandit</p>\r\n                        </div>\r\n                   </div>\r\n              </div>\r\n   </div>\r\n\r\n   <div class=\"row\" style=\"background:rgb(238, 235, 235);  height:6vh;\"><div id=\"container\">\r\n        <div id=\"left\"><button class=\"btn btn-danger btn-lg\">End Meeting</button></div>\r\n        <!-- <div id=\"right\"></div> -->\r\n        <div id=\"center\">\r\n                        <button class=\"btn btn-primary\">\r\n                            <i class=\"fa fa-video-camera\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary\">\r\n                            <i class=\"fa fa-microphone-slash\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary\">\r\n                            <i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                        <button class=\"btn btn-primary\">\r\n                            <i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n      </div>\r\n      <div class=\"col-sm-4 meeting-activity\">\r\n            <div class=\"card\">\r\n                    <div class=\"card-header\">Meeting Activity</div>\r\n                    <div class=\"card-body\">\r\n                        <ngb-tabset style=\"padding:20px;\">\r\n                            <ngb-tab title=\"Chat\">\r\n                                <ng-template ngbTabContent>\r\n                                        <div ngbDropdown class=\"d-inline-block dropdown\" >\r\n                                                <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{messageSendTo}}</button>\r\n                                                <div ngbDropdownMenu>\r\n                                                    <button *ngFor=\"let member of userList\" class=\"dropdown-item\" on-click=\"changeMessageTo(member)\">\r\n                                                        {{member.name+ ' '+member.lastName}}</button>\r\n                                                    <!-- <button class=\"dropdown-item\">Vinita Kolhapure</button>\r\n                                                    <button class=\"dropdown-item\">Namita Pandit</button>\r\n                                                    <button class=\"dropdown-item\">You</button> -->\r\n                                                </div>\r\n                                            </div>\r\n            <div style=\"height: 70vh;\">\r\n            <div class=\"container\">\r\n            <p>Hello. How are you today?</p>\r\n            <span class=\"time-right\"><i class=\"fa fa-user\"></i>&nbsp;Vinita Patil</span>\r\n            </div>\r\n\r\n            <div class=\"container darker\">\r\n            <p>Hey! I'm fine. Thanks for asking!</p>\r\n            <span class=\"time-left\"><i class=\"fa fa-user\"></i>&nbsp;Sudhir Manore</span>\r\n            </div>\r\n\r\n            <div class=\"container\">\r\n            <p>Sweet! So, what do you wanna do today?</p>\r\n            <span class=\"time-right\"><i class=\"fa fa-user\"></i>&nbsp;Prachi Mhatre</span>\r\n            </div>\r\n\r\n            <div class=\"container darker\">\r\n            <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>\r\n            <span class=\"time-left\"><i class=\"fa fa-user\"></i>&nbsp;Namita Pandit</span>\r\n            </div>\r\n        </div>\r\n            <div >\r\n                <textarea placeholder=\"Type Message Here..\"></textarea>\r\n               <i class=\"fa fa-paper-plane\"></i>\r\n            </div>\r\n\r\n\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Notes\">\r\n                                    <ng-template ngbTabContent>\r\n                                            <div class=\"row content-tab\">\r\n                                                <textarea placeholder=\"Type Notes Here...\" style=\"width: 100%; height: 75vh;\"></textarea>\r\n                                            </div>\r\n                                    </ng-template>\r\n                                </ngb-tab>\r\n                                <ngb-tab title=\"Settings\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row content-tab\">\r\n                                        <div ngbDropdown class=\"d-inline-block dropdown\" >\r\n                                                        <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{momTo}}</button>\r\n                                                        <div ngbDropdownMenu>\r\n                                                                <button *ngFor=\"let member of userList\" class=\"dropdown-item\" on-click=\"changeMomTo(member)\">\r\n                                                                    {{member.name+ ' '+member.lastName}}</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                              <div class=\"row\">\r\n                                                <p>Audio Input<span>Default Microphone</span></p>\r\n                                                <p>Video Input<span>Laptop Camera</span></p>\r\n                                              </div>\r\n                                        </div>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                        </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 100%;\n  text-align: center; }\n\n#left {\n  float: left; }\n\n#center {\n  display: inline-block;\n  margin: 0 auto; }\n\ndiv.scrollmenu {\n  overflow: auto;\n  white-space: nowrap; }\n\ndiv.scrollmenu div {\n  display: inline-block;\n  text-align: center;\n  text-decoration: none; }\n\ndiv.scrollmenu a:hover {\n  background-color: #ddd; }\n\n#grid {\n  width: 100%;\n  float: left; }\n\n#grid div {\n  float: left;\n  padding: 10px; }\n\n#grid div img {\n  width: 95px; }\n\n.parent {\n  background-color: f1f1f1;\n  position: relative;\n  height: 70vh;\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  background: #eeebeb;\n  padding: 5px;\n  margin: 2px; }\n\n.child {\n  width: 47%;\n  height: 35%;\n  background-color: #ddd;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n  border-radius: 8px; }\n\n/* Acordeon styles */\n\n.tab {\n  position: relative;\n  margin-bottom: 1px;\n  width: 100%;\n  overflow: hidden; }\n\ninput {\n  position: absolute;\n  opacity: 0;\n  z-index: -1; }\n\nlabel {\n  position: relative;\n  display: block;\n  padding: 0 0 0 1em;\n  background: #2980b9;\n  color: #ffffff;\n  font-weight: bold;\n  line-height: 3;\n  cursor: pointer; }\n\n.blue label {\n  background: #2980b9; }\n\n.tab-content {\n  max-height: 0;\n  overflow: hidden;\n  background-color: f1f1f1;\n  transition: max-height .35s; }\n\n.blue .tab-content {\n  background-color: f1f1f1; }\n\n.tab-content p {\n  margin: 1em; }\n\n/* :checked */\n\ninput:checked ~ .tab-content {\n  max-height: 10em;\n  height: 100%; }\n\n/* Icon */\n\nlabel::after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: block;\n  width: 3em;\n  height: 3em;\n  line-height: 3;\n  text-align: center;\n  transition: all .35s;\n  font-weight: bold; }\n\ninput[type=checkbox] + label::after {\n  content: \"+\"; }\n\ninput[type=radio] + label::after {\n  content: \"\\25BC\"; }\n\ninput[type=checkbox]:checked + label::after {\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg); }\n\ninput[type=radio]:checked + label::after {\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg); }\n\n.card-header {\n  background: #2980b9;\n  color: #ffffff;\n  font-weight: bold; }\n\n.dropdown {\n  margin-top: 15px; }\n\n.meeting-activity {\n  border: 1px solid #dedede;\n  border-radius: 8px;\n  padding: 5px; }\n\n.content-tab {\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n  height: 77vh;\n  padding: 5px;\n  margin: 4px; }\n\n.container {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0; }\n\n.darker {\n  border-color: #ccc;\n  background-color: #ddd; }\n\n.container::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.time-right {\n  float: right;\n  color: #2980b9; }\n\n.time-left {\n  float: left;\n  color: #2980b9; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.ts ***!
  \************************************************************************************************/
/*! exports provided: MeetingVideoCallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingVideoCallComponent", function() { return MeetingVideoCallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_meeting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/meeting-service */ "./src/app/services/meeting-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MeetingVideoCallComponent = /** @class */ (function () {
    function MeetingVideoCallComponent(userService, meetingService) {
        this.userList = [];
        this._userService = userService;
        this._meetingService = meetingService;
    }
    MeetingVideoCallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageSendTo = 'Send Message to';
        this.momTo = 'set MOM Duty';
        var payload = { meetingId: 'MGDJG43223423' };
        //to get list of member
        this._meetingService.getMeetingAttendee(payload).subscribe(function (data) {
            _this.userList = data.json();
        });
    };
    //to set selected send message to
    MeetingVideoCallComponent.prototype.changeMessageTo = function (member) {
        this.messageSendTo = member.name + ' ' + member.lastName;
    };
    //to set selected mom to
    MeetingVideoCallComponent.prototype.changeMomTo = function (member) {
        this.momTo = member.name + ' ' + member.lastName;
    };
    MeetingVideoCallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meeting-video-call',
            template: __webpack_require__(/*! ./meeting-video-call.component.html */ "./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.html"),
            styles: [__webpack_require__(/*! ./meeting-video-call.component.scss */ "./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_meeting_service__WEBPACK_IMPORTED_MODULE_2__["MeetingService"]])
    ], MeetingVideoCallComponent);
    return MeetingVideoCallComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n    <div class=\"form-group input-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchText\" >\r\n        <div class=\"input-group-append\">\r\n            <button class=\"btn btn-secondary\" type=\"button\">\r\n                <i class=\"fa fa-search\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <hr class=\"hr-partition\" />\r\n    <div class=\"list-group\">\r\n        <a *ngFor=\"let user of userList | searchMember : searchText\" href=\"#\" [routerLink]=\"['chat']\"  (click)=\"viewMemeberDetails(user)\"\r\n         class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-user-circle fa-2x\"></i>\r\n            <div  [ngClass]=\" {'circleOnline': user.onlineStatus!=null && user.onlineStatus === '1',\r\n            'circleOffline':user.onlineStatus!=null &&  user.onlineStatus === '0' }\"></div>\r\n            <span style=\"padding-left: 1rem;\">{{user.firstName}}&nbsp;{{user.lastName}}</span>\r\n            <hr class=\"list-group-partition\" />\r\n        </a>\r\n        <h6 style =\"color: #ffffff;font-weight: bold;\">Groups</h6>\r\n         <a *ngFor=\"let group of groupList | searchMember : searchText\" href=\"#\" [routerLink]=\"['chat']\"  (click)=\"viewMemeberDetails(group)\"\r\n        class=\"list-group-item clearfix d-block\">\r\n            <i class=\"fa fa-users\"></i> \r\n            <!-- <div  [ngClass]=\" {'circleOnline': user.onlineStatus!=null && user.onlineStatus === '1',\r\n            'circleOffline':user.onlineStatus!=null &&  user.onlineStatus === '0' }\"></div>  -->\r\n           <span style=\"padding-left: 1rem;\">{{group.groupId.groupName}}&nbsp;</span>\r\n           <hr class=\"list-group-partition\" />\r\n       </a> \r\n    </div>\r\n    <!-- /.list-group -->\r\n</div>\r\n<!-- <div  [ngClass]=\" {'circleOnline': user.onlineStatus.statusId == 1 && joinMeeting == false &&  meetingMember == false,\r\n'circleMeetingJoin':user.onlineStatus.statusId == 1 && joinMeeting == true &&  meetingMember == true,\r\n'circleMeetingNotJoinOnline': user.onlineStatus.statusId == 1 && joinMeeting == false &&  meetingMember == true,\r\n'circleOfflineMem': user.onlineStatus.statusId == 2 && joinMeeting == false &&  meetingMember == true,\r\n'circleOffline': user.onlineStatus.statusId == 2 && joinMeeting == false &&  meetingMember == false}\"></div> -->\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\n  background: #3277d3;\n  background: -webkit-gradient(left top, right top, color-stop(0%, #3277d3), color-stop(74%, #6aa8fc), color-stop(100%, #6aa8fc));\n  background: linear-gradient(to right, #3277d3 0%, #6aa8fc 74%, #6aa8fc 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=' #3277d3', endColorstr=' #3277d3', GradientType=1);\n  height: 93vh; }\n\n.circleMeetingJoin {\n  position: relative;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  background: #f9a159;\n  float: left;\n  left: 35px;\n  top: -5px; }\n\n.circleMeetingNotJoinOnline {\n  position: relative;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  background: #e2d041;\n  float: left;\n  left: 35px;\n  top: -5px; }\n\n.circleOffline {\n  position: relative;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  background: transparent;\n  float: left;\n  left: 35px;\n  top: -5px; }\n\n.circleOnline {\n  position: relative;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  background: #76c912;\n  float: left;\n  left: 35px;\n  top: -5px; }\n\n.circleOfflineMem {\n  position: relative;\n  border-radius: 50%;\n  width: 13px;\n  height: 13px;\n  background: #57c4d8;\n  float: left;\n  left: 35px;\n  top: -5px; }\n\n.btn.btn-secondary {\n  background: #3277d3;\n  /* color:  #3277d3; */\n  border-color: #3277d3;\n  border-radius: 0px 5px 5px 0px; }\n\n.form-control {\n  border-radius: 5px 0px 0px 5px; }\n\n.list-group-partition {\n  border-top: 1px solid #ffff;\n  width: 100%;\n  margin-top: 8px;\n  margin-bottom: 0px; }\n\n.hr-partition {\n  border-top: 2px solid #d3d3d3;\n  width: 100%;\n  margin-bottom: 0px;\n  padding-left: 25px;\n  margin-left: -5px; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/notification.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/notification.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(userService, groupService, loginService) {
        this.userList = [];
        this.groupList = [];
        this._userService = userService;
        this._groupService = groupService;
        this._loginService = loginService;
    }
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeStatus = true;
        this.joinMeeting = true;
        this.meetingMember = true;
        var payload = { email: 'rohit@coreflexsolutions.com' };
        this._userService.setUserList(payload);
        this._userService.getUserList().subscribe(function (data) {
            _this.userList = data;
        });
        this._groupService.setGroupList(payload);
        this._groupService.getGroupList().subscribe(function (data) {
            _this.groupList = data;
        });
    };
    NotificationComponent.prototype.viewMemeberDetails = function (user) {
        this._userService.setSelectedUser(user);
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/layout/dashboard/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/layout/dashboard/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/notification/search-member.pipe.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/notification/search-member.pipe.ts ***!
  \********************************************************************************/
/*! exports provided: SearchMemberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMemberPipe", function() { return SearchMemberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchMemberPipe = /** @class */ (function () {
    function SearchMemberPipe() {
    }
    SearchMemberPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            if (it !== null && it !== undefined) {
                var fullName = it.name + ' ' + it.lastName;
                return fullName.toLowerCase().includes(searchText);
            }
        });
    };
    SearchMemberPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "searchMember"
        })
    ], SearchMemberPipe);
    return SearchMemberPipe;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/schedule-meeting/schedule-meeting.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/schedule-meeting/schedule-meeting.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-panel card card-default\">\r\n    <div class=\"card-header meetingHeader\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <i class=\"fa fa-calendar-check-o\"></i>\r\n                Schedule New Meeting\r\n                <h6 class=\"style-links\">{{currentDate | date:'fullDate'}}</h6>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <button class=\"btn btn-cancel pull-right\" type=\"button\" (click)=\"switchRoute()\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-header\">\r\n        <div class=\"row\">\r\n            <div class=\"card-body\" style=\"height:74vh;\">\r\n                <div class=\"container overall-padding\">\r\n                    <!-- <form> -->\r\n                    <div style=\"margin-top: 20px;\" *ngIf=\"addSubjectFlag === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"addSubjectFlag\">\r\n                        <strong>Error: </strong>Enter Meeting Subject\r\n                    </div>\r\n                    <div style=\"margin-top: 20px;\" *ngIf=\"addDurationFlag === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"addDurationFlag\">\r\n                        <strong>Error: </strong>Select Meeting Duration\r\n                    </div>\r\n                    <div style=\"margin-top: 20px;\" *ngIf=\"addTimezoneFlag === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"addTimezoneFlag\">\r\n                        <strong>Error: </strong>Select Timezone\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n\r\n                        <div class=\"col-sm-3\">\r\n                            <label>Subject</label>\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <input type=\"text\" class=\"form-control\" id=\"descField\" placeholder=\"Meeting Subject\" [(ngModel)]=\"subject\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col-sm-3\">\r\n                            <label>Date</label>\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"input-group datepicker-input\">\r\n                                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"meeting.datePicker\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\r\n                                    <!-- <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/> -->\r\n                                    <span class=\"fa fa-calendar\"></span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col-sm-3\">\r\n                            <label>Time</label>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                            <ngb-timepicker class=\"customTimePicker\" id=\"meeting.meridianTime\" [(ngModel)]=\"meeting.meridianTime\" [meridian]=\"meeting.meridian\"></ngb-timepicker>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col-md-3\">\r\n                            <label>Meeting duration</label>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                            <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                                <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{meeting.selectedDuration}}</button>\r\n                                <div ngbDropdownMenu>\r\n                                    <button *ngFor=\"let duration of durationArray\" class=\"dropdown-item\" on-click=\"changeDuration(duration)\">{{duration}}</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col-md-3\">\r\n                            <label style=\"padding-top:50%;\">Timezone</label>\r\n                        </div>\r\n                        <div class=\"col-md-9\">\r\n                            <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                                <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{meeting.selectedTimeZone}}</button>\r\n                                <div ngbDropdownMenu>\r\n                                    <button *ngFor=\"let timezone of timeZoneArray\" class=\"dropdown-item\" on-click=\"changeTimeZone(timezone)\">{{timezone}}</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col-sm-3\">\r\n                            <label>Recurring</label>\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"btn-group btn-group-toggle mb-3\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"meeting.isRecurring\">\r\n                                <label ngbButtonLabel class=\"btn-outline-primary\">\r\n                                    <input ngbButton type=\"radio\" [value]=\"1\"> Yes\r\n                                </label>\r\n                                <label ngbButtonLabel class=\"btn-outline-primary\">\r\n                                    <input ngbButton type=\"radio\" value=\"2\"> No\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col-sm-3\">\r\n                            <label>Call Type</label>\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <div class=\"btn-group btn-group-toggle mb-3\" ngbRadioGroup name=\"radioBasic\" [(ngModel)]=\"meeting.callType\">\r\n                                <label ngbButtonLabel class=\"btn-outline-primary\">\r\n                                    <input ngbButton type=\"radio\" [value]=\"1\"> Audio\r\n                                </label>\r\n                                <label ngbButtonLabel class=\"btn-outline-primary\">\r\n                                    <input ngbButton type=\"radio\" value=\"2\"> Video\r\n                                </label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col-sm-3\">\r\n                            <label>MOM</label>\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <p class=\"mom-duty\">By default mom duty is with you.\r\n                                <br> you can transfer MOM duty during the call\r\n                            </p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row form-group\">\r\n                        <div class=\"col-sm-3\">\r\n\r\n                        </div>\r\n                        <div class=\"col-sm-9\">\r\n                            <a class=\"btn btn-primary btn-border-radius\" (click)=\"scheduleMeeting()\" style=\"color: #fff;\">Schedule Meeting & Send Invitation</a>\r\n                        </div>\r\n                        <app-custom-modal #scheduleMeetingModal [model]=\"scheduleMeetings\">\r\n                            <div style=\"margin-top: 20px;\" *ngIf=\"showScheduleMeetingSuccess === true\" class=\"alert alert-success alert-dismissable\"\r\n                                [(ngModel)]=\"showScheduleMeetingSuccess\">\r\n                                <strong>Success:&nbsp; </strong>\r\n                                <span style=\"font-weight: bold;\">{{this.meeting.callType}}</span>&nbsp;meeting has been scheduled Successfully.\r\n                            </div>\r\n                            <div style=\"margin-top: 20px;\" *ngIf=\"showCopyDetailsSuccess === true\" class=\"alert alert-success alert-dismissable\" [(ngModel)]=\"showCopyDetailsSuccess\">\r\n                                <strong>Success: </strong>Meeting Details has been Copied. Kindly share via your preferred Mail Id.\r\n                            </div>\r\n                            <div style=\"padding: 10px; font-size:14px;\" class=\"span-font\">\r\n                                <span>{{subject}}</span>\r\n                                <p style=\"font-weight:bold;\">Date : {{ meeting.datePicker.day }} / {{ meeting.datePicker.month }} / {{ meeting.datePicker.year}}\r\n                                    at {{(this.meeting.meridianTime.hour > 12 ? this.meeting.meridianTime.hour - 12 : this.meeting.meridianTime.hour)}}&nbsp;:{{meeting.meridianTime.minute}}\r\n                                    {{this.meeting.meridianTime.hour > 12 ? 'PM' : 'AM'}} ( {{this.meeting.selectedTimeZone}}\r\n                                    ) for\r\n                                    <span style=\"font-weight: bold;\">{{meeting.selectedDuration}} </span>\r\n                                </p>\r\n                                <p style=\"padding-top: 20px;\"> Please join my meeting from your computer,tablet or smartphone\r\n                                    <span style=\"text-decoration :underline;  font-weight: bold; padding-top:10px;\">https://184.171.162.250:9090/demos/demo_multiparty.html</span>\r\n                                </p>\r\n                                <h5 style=\"margin-top: 40px;\">Access Code :\r\n                                    <span>{{accessCode}}</span>\r\n                                </h5>\r\n                            </div>\r\n                            <div class=\"modal-footer popFooter\">\r\n                                <button type=\"button\" class=\"btn btn-secondary btn-border-radius\" (click)=\"copyToOutLook($event,subject)\">Go to Outlook</button>\r\n                                <button type=\"button\" class=\"btn btn-secondary btn-border-radius\" (click)=\"copyToClipboard()\">Copy</button>\r\n                                <button type=\"button\" class=\"btn btn-danger  btn-border-radius\" (click)=\"closeMeetingPopup('scheduleMeetings')\">Close</button>\r\n                            </div>\r\n\r\n                        </app-custom-modal>\r\n                    </div>\r\n                    <!-- </form> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/dashboard/components/schedule-meeting/schedule-meeting.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/schedule-meeting/schedule-meeting.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn-sec {\r\n    background-color: #ffb94b;\r\n    background-image: linear-gradient(top, #fddb6f, #ffb94b);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n.btn-cancel{\r\n    color: rgb(248, 87, 87);\r\n    background-color: rgb(248, 87, 87);\r\n    background-image: linear-gradient(top, rgb(253, 78, 78), rgb(248, 87, 87));\r\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n      border-width: 1px;\r\n      border-style: solid;\r\n      border-color: rgb(218, 10, 10);\r\n      cursor: pointer;\r\n      text-align: center;\r\n      font: Arial, Helvetica;\r\n      color: rgb(248, 241, 241);\r\n    }\r\na{\r\n        cursor: pointer;\r\n        color: #ffffff;\r\n    }\r\n.top {\r\n        height: 92px;\r\n        padding: 15px;\r\n        border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n        background-image: url(/assets/images/logobg.png);\r\n        background-position-y: bottom;\r\n    }\r\n.left {\r\n        width: 15%;\r\n        float:left;\r\n        padding: 15px;\r\n        background: #e5efff;\r\n        background-image: url(/assets/images/menuBg.png);\r\n        color: #ffffff;\r\n        font-weight: bold;\r\n    }\r\n.main {\r\n      margin-left:15%;\r\n      padding: 15px;\r\n     }\r\ntable {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        padding:30px;\r\n    }\r\ntd, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\nth{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n    }\r\ntr:nth-child(even) {\r\n        background-color: #e5efff;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.date-period-select {\r\n        border-left: 2px solid #999;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        height: 15%;\r\n        cursor: pointer;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.filter-list ul{\r\n        list-style-type: none;\r\n    }\r\n.filter-list ul li input{\r\n    cursor: pointer;\r\n    }\r\n.meetingHeader {\n  background: #3277d3;\n  color: #FFFFFF;\n  border-radius: 5px 5px 0px 0px; }\r\n.style-links {\n  color: #d2cccc;\n  font-size: 12px; }\r\n.form-control {\n  border-radius: 5px 0px 0px 5px; }\r\n.hr-partition {\n  border-top: 2px dotted #19191a;\n  width: 100%; }\r\n.align-center {\n  margin: auto;\n  width: 100%;\n  color: #848484; }\r\n.mom-duty {\n  color: #848484; }\r\n.defaultMeetSelect {\n  background-color: #fff;\n  text-align: center;\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\r\n.date-period-select {\n  border-left: 2px solid #848484;\n  padding-left: 10px;\n  padding-right: 10px;\n  height: 15%; }\r\n.date-period-first {\n  padding-left: 10px;\n  padding-right: 10px; }\r\n.d-inline-block {\n  width: 100% !important; }\r\n.d-inline-block button {\n    width: 100% !important; }\r\n.d-inline-block .dropdown-menu.show {\n    height: 200px;\n    overflow-y: scroll;\n    width: 100%;\n    overflow-x: hidden; }\r\n.popFooter {\n  background-color: #eaf3f8;\n  border-top: 1px solid  #19191a; }\r\n.popTitle {\n  font-size: 22px; }\r\n.btn-border-radius {\n  border-radius: 5px; }\r\n.span-font span {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/schedule-meeting/schedule-meeting.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/schedule-meeting/schedule-meeting.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ScheduleMeetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleMeetingComponent", function() { return ScheduleMeetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-modal/custom-modal.component */ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.ts");
/* harmony import */ var _services_meeting_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/meeting-service */ "./src/app/services/meeting-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleMeetingComponent = /** @class */ (function () {
    function ScheduleMeetingComponent(viewContainerRef, meetingService) {
        this.viewContainerRef = viewContainerRef;
        this.CurrentRoute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.meridian = true;
        this.showScheduleMeetingSuccess = true;
        this.showCopyDetailsSuccess = false;
        // public radioGroupForm: FormGroup;
        this.scheduleMeetings = {
            titleIcon: '<i class="fa fa-calendar-check-o"></i>',
            title: 'Invite Attendees',
            smallHeading: 'Copy and paste to your calendar or share with your attendees',
            body: '',
            Button1Content: '<i class="fa fa-envelope"></i> Outlook',
            Button2Content: '<i class="fa fa-copy"></i> Copy'
        };
        this.durationArray = ['15 Min', '30 Min', '45 Min', '60 Min (1 Hour)', '90 Min (1.5 Hour)', '120 Min (2 Hour)', '150 Min (2.5 Hour)',
            '180 Min (3 Hour)', '240 Min (4 Hour)', '300 Min (5 Hour)', '360 Min (6 Hour)', '420 Min (7 Hour)', '480 Min (8 Hour)'];
        this.timeZoneArray = [
            '(GMT+13:00) Nukualofa',
            '(GMT+12:00) Fiji, Kamchatka, Marshall Is/',
            '(GMT+12:00) Auckland, Wellington',
            '(GMT+11:00) Magadan, Solomon Is/, New Caledonia',
            '(GMT+11:00) Currie',
            '(GMT+10:00) Vladivostok',
            '(GMT+10:00) Hobart',
            '(GMT+10:00) Guam, Port Moresby',
            '(GMT+10:00) Canberra, Melbourne, Sydney',
            '(GMT+10:00) Brisbane',
            '(GMT+09:30) Darwin',
            '(GMT+09:30) Adelaide',
            '(GMT+09:00) Yakutsk',
            '(GMT+09:00) Seoul',
            '(GMT+09:00) Osaka, Sapporo, Tokyo',
            '(GMT+08:00) Taipei',
            '(GMT+08:00) Perth',
            '(GMT+08:00) Kuala Lumpur, Singapore',
            '(GMT+08:00) Irkutsk, Ulaan Bataar',
            '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi',
            '(GMT+07:00) Krasnoyarsk',
            'GMT+07:00) Bangkok',
            '(GMT+07:00) Hanoi, Jakarta',
            '(GMT+06:30) Rangoon',
            '(GMT+06:00) Sri Jayawardenepura',
            '(GMT+06:00) Astana, Dhaka',
            '(GMT+06:00) Almaty, Novosibirsk',
            '(GMT+05:45) Kathmandu',
            '(GMT+05:30) Calcutta, Chennai, Mumbai, New Delhi',
            '(GMT+05:00) Islamabad, Karachi, Tashkent',
            '(GMT+05:00) Ekaterinburg',
            '(GMT+04:30) Kabul',
            '(GMT+04:00) Baku, Tbilisi, Yerevan',
            '(GMT+04:00) Abu Dhabi, Muscat',
            '(GMT+03:30) Tehran',
            '(GMT+13:00) Nukualofa',
            '(GMT+03:00) Moscow, St/ Petersburg, Volgograd',
            '(GMT+03:00) Kuwait, Riyadh',
            '(GMT+03:00) Baghdad',
            '(GMT+02:00) Jerusalem',
            '(GMT+02:00) Helsinki, Riga, Tallinn',
            '(GMT+02:00) Harare, Pretoria',
            '(GMT+02:00) Cairo',
            '(GMT+02:00) Bucharest',
            '(GMT+02:00) Athens, Istanbul, Minsk, Vilnius',
            '(GMT+01:00) West Central Africa',
            '(GMT+01:00) Sarajevo, Skopje, Sofija, Warsaw, Zagreb',
            '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris',
            '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague',
            '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
            '(GMT) Greenwich Mean Time',
            '(GMT) Casablanca, Monrovia',
            '(GMT-01:00) Cape Verde Is/',
            '(GMT-01:00) Azores',
            '(GMT-03:00) Buenos Aires, Georgetown',
            '(GMT-03:00) Brasilia',
            '(GMT-03:30) Newfoundland',
            '(GMT-04:00) Santiago',
            '(GMT-04:00) Caracas, La Paz',
            '(GMT-04:00) Atlantic Time (Canada)',
            '(GMT-05:00) Indiana (East)',
            '(GMT-05:00) Eastern Time (US and Canada)',
            '(GMT-05:00) Bogota, Lima, Quito',
            '(GMT-06:00) Mexico City',
            '(GMT-06:00) Guatemala',
            '(GMT-06:00) Central Time (US and Canada)',
            '(GMT-07:00) Mountain Time (US and Canada)',
            '(GMT-07:00) Arizona',
            '(GMT-08:00) Pacific Time (US and Canada); Tijuana',
            '(GMT-09:00) Alaska',
            '(GMT-10:00) Hawaii',
            '(GMT-11:00) Midway Island, Samoa',
            '(GMT) Dublin, Edinburgh, Lisbon, London'
        ];
        this._meetingService = meetingService;
    }
    ScheduleMeetingComponent.prototype.ngOnInit = function () {
        this.today = new Date();
        this.meeting = {
            meridianTime: { hour: this.today.getHours(), minute: this.today.getMinutes() },
            meridian: true,
            datePicker: {
                day: this.today.getDate(),
                month: this.today.getMonth() + 1,
                year: this.today.getFullYear()
            },
            isRecurring: 1,
            callType: 1,
            selectedTimeZone: new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1].split('(')[1].split(')')[0] ? 'Select Timezone' : '',
            selectedDuration: 'Select Duration',
            subject: this.subject
        };
        // current date and time
        this.currentDate = Date.now();
    };
    ScheduleMeetingComponent.prototype.switchRoute = function () {
        this.CurrentRoute.emit(0);
    };
    ScheduleMeetingComponent.prototype.scheduleMeeting = function () {
        var _this = this;
        debugger;
        if (this.subject === "" || this.subject === null || typeof this.subject === "undefined") {
            this.addSubjectFlag = true;
            setTimeout(function () {
                this.addSubjectFlag = false;
            }.bind(this), 5000);
        }
        else if (this.meeting.selectedDuration === 'Select Duration') {
            this.addDurationFlag = true;
            setTimeout(function () {
                this.addDurationFlag = false;
            }.bind(this), 5000);
        }
        else if (this.meeting.selectedTimeZone === 'Select Timezone') {
            this.addTimezoneFlag = true;
            setTimeout(function () {
                this.addTimezoneFlag = false;
            }.bind(this), 5000);
        }
        else {
            this.meridian = !this.meridian;
            this.accessCode = new Date().getTime() + '_' + Math.floor(Math.random() * 900) + 100;
            if (this.meeting.callType === 1) {
                this.meeting.callType = 'Audio';
            }
            else {
                this.meeting.callType = 'Video';
            }
            debugger;
            var payload = {
                'meetingDate': new Date(this.meeting.datePicker.year, this.meeting.datePicker.month - 1, this.meeting.datePicker.day),
                // 'meetingStartDateTime': (this.meeting.meridianTime.hour > 12 ? this.meeting.meridianTime.hour - 12 : this.meeting.meridianTime.hour) + ':' 
                // + this.meeting.meridianTime.minute,
                //'meetingEndDateTime': 1525067350000,
                'meetingStartDateTime': new Date(this.meeting.datePicker.year, this.meeting.datePicker.month - 1, this.meeting.datePicker.day, this.meeting.meridianTime.hour, this.meeting.meridianTime.minute),
                'subject': this.subject,
                'duration': this.meeting.selectedDuration,
                'recurringType': this.meeting.isRecurring,
                'callType': this.meeting.callType,
                'timeZone': this.meeting.selectedTimeZone,
                'timeType': this.meeting.meridianTime.hour > 12 ? 'PM' : 'AM',
                'meetingId': this.accessCode
            };
            this._meetingService.scheduleMeeting(payload).subscribe(function (data) {
                _this.scheduleMeetingModal.open();
            });
            // this._meetingService.scheduleMeeting(payload);
        }
    };
    ScheduleMeetingComponent.prototype.copyToOutLook = function (event, subject) {
        var meetingDetails = this.getMeetingDetails();
        this.closeMeetingPopup('scheduleMeetings');
        var a = document.createElement('a');
        a.href = 'mailto:?subject=' + subject +
            '&body=' + meetingDetails;
        document.body.appendChild(a);
        // start download
        a.click();
        document.body.removeChild(a);
        this.showScheduleMeetingSuccess = false;
    };
    //copy meeting content
    ScheduleMeetingComponent.prototype.copyToClipboard = function () {
        var meetingDetails = this.getMeetingDetails();
        var tempInput = $('<input>').val(meetingDetails).appendTo('body').select();
        document.execCommand('copy');
    };
    ScheduleMeetingComponent.prototype.changeTimeZone = function (timezone) {
        this.meeting.selectedTimeZone = timezone;
    };
    ScheduleMeetingComponent.prototype.changeDuration = function (duration) {
        debugger;
        this.meeting.selectedDuration = duration;
    };
    ScheduleMeetingComponent.prototype.getTimeZone = function () {
        var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        return (offset < 0 ? '+' : '-') + ('00' + Math.floor(o / 60)).slice(-2) + ':' + ('00' + (o % 60)).slice(-2);
    };
    //close meeting modal popup
    ScheduleMeetingComponent.prototype.closeMeetingPopup = function (popupType) {
        switch (popupType) {
            case 'scheduleMeetings':
                this.scheduleMeetingModal.close();
                break;
        }
    };
    //get meeting details
    ScheduleMeetingComponent.prototype.getMeetingDetails = function () {
        var meetingDetails = 'Date :  ' + this.meeting.datePicker.day + '/' + this.meeting.datePicker.month + '/' + this.meeting.datePicker.year + '  at  ' +
            this.meeting.meridianTime.hour + ':' + this.meeting.meridianTime.minute + '  (' + this.meeting.selectedTimeZone + ')   for  '
            + this.meeting.selectedDuration + '\n' +
            '\n Please join my meeting from your computer,tablet or smartphone \n' + 'https://184.171.162.250:9090/demos/demo_multiparty.html\n' +
            '\n Access Code :    ' + this.accessCode;
        return meetingDetails;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScheduleMeetingComponent.prototype, "CurrentRoute", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scheduleMeetingModal'),
        __metadata("design:type", _custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_1__["CustomModalComponent"])
    ], ScheduleMeetingComponent.prototype, "scheduleMeetingModal", void 0);
    ScheduleMeetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-meeting',
            template: __webpack_require__(/*! ./schedule-meeting.component.html */ "./src/app/layout/dashboard/components/schedule-meeting/schedule-meeting.component.html"),
            styles: [__webpack_require__(/*! ./schedule-meeting.component.scss */ "./src/app/layout/dashboard/components/schedule-meeting/schedule-meeting.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _services_meeting_service__WEBPACK_IMPORTED_MODULE_2__["MeetingService"]])
    ], ScheduleMeetingComponent);
    return ScheduleMeetingComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\r\n    <div class=\"row\" style=\"margin:0px;\">\r\n        <div class=\"col-md-8 card-header\" id=\"timeline-icon\">\r\n            {{selectedUser.name}} {{selectedUser.lastName}}&nbsp;\r\n            <a id=\"view-profile\" (click)=\"open(loggedInUser)\">(View Full Profile)</a>\r\n        </div>\r\n        <div class=\"col-md-1 card-header\" id=\"timeline-icon\">\r\n            <i class=\"fa fa-video-camera\" [routerLink]=\"['/videoCall']\"></i>\r\n        </div>\r\n        <div class=\"col-md-1 card-header\" id=\"timeline-icon\">\r\n            <i class=\"fa fa-phone\"></i>\r\n        </div>\r\n        <div class=\"col-md-1 card-header\" id=\"timeline-icon\">\r\n            <i class=\"fa fa-desktop\"></i>\r\n        </div>\r\n        <div class=\"col-md-1 card-header\">\r\n            <i class=\"fa fa-times\" [routerLink]=\"['/dashboard']\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <ul class=\"timeline\">\r\n            <li>\r\n                <div class=\"timeline-badge\">\r\n                    <i class=\"fa fa-check\"></i>\r\n                </div>\r\n                <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                        <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                        <p>\r\n                            <small class=\"text-muted\">\r\n                                <i class=\"fa fa-clock-o\"></i> 11 hours ago via Twitter</small>\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam dolor perspiciatis omnis\r\n                            exercitationem. Beatae, officia pariatur? Est cum veniam excepturi. Maiores praesentium, porro\r\n                            voluptas suscipit facere rem dicta, debitis.</p>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"timeline-inverted\">\r\n                <div class=\"timeline-badge warning\">\r\n                    <i class=\"fa fa-credit-card\"></i>\r\n                </div>\r\n                <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                        <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolorem quibusdam, tenetur commodi\r\n                            provident cumque magni voluptatem libero, quis rerum. Fugiat esse debitis optio, tempore. Animi\r\n                            officiis alias, officia repellendus.</p>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium maiores odit qui est tempora\r\n                            eos, nostrum provident explicabo dignissimos debitis vel! Adipisci eius voluptates, ad aut recusandae\r\n                            minus eaque facere.</p>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"timeline-badge danger\">\r\n                    <i class=\"fa fa-bomb\"></i>\r\n                </div>\r\n                <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                        <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus numquam facilis enim eaque,\r\n                            tenetur nam id qui vel velit similique nihil iure molestias aliquam, voluptatem totam quaerat,\r\n                            magni commodi quisquam.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"timeline-inverted\">\r\n                <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                        <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates est quaerat asperiores sapiente,\r\n                            eligendi, nihil. Itaque quos, alias sapiente rerum quas odit! Aperiam officiis quidem delectus\r\n                            libero, omnis ut debitis!</p>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"timeline-badge info\">\r\n                    <i class=\"fa fa-save\"></i>\r\n                </div>\r\n                <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                        <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis minus modi quam ipsum alias at est\r\n                            molestiae excepturi delectus nesciunt, quibusdam debitis amet, beatae consequuntur impedit nulla\r\n                            qui! Laborum, atque.\r\n                        </p>\r\n                        <hr>\r\n                        <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-primary btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\r\n                                <i class=\"fa fa-gear\"></i>\r\n                                <span class=\"caret\"></span>\r\n                            </button>\r\n                            <ul class=\"dropdown-menu\" role=\"menu\">\r\n                                <li>\r\n                                    <a href=\"#\">Action</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">Another action</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"#\">Something else here</a>\r\n                                </li>\r\n                                <li class=\"divider\"></li>\r\n                                <li>\r\n                                    <a href=\"#\">Separated link</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li>\r\n                <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                        <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi fuga odio quibusdam. Iure expedita,\r\n                            incidunt unde quis nam! Quod, quisquam. Officia quam qui adipisci quas consequuntur nostrum sequi.\r\n                            Consequuntur, commodi.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n            <li class=\"timeline-inverted\">\r\n                <div class=\"timeline-badge success\">\r\n                    <i class=\"fa fa-graduation-cap\"></i>\r\n                </div>\r\n                <div class=\"timeline-panel\">\r\n                    <div class=\"timeline-heading\">\r\n                        <h4 class=\"timeline-title\">Lorem ipsum dolor</h4>\r\n                    </div>\r\n                    <div class=\"timeline-body\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt obcaecati, quaerat tempore officia\r\n                            voluptas debitis consectetur culpa amet, accusamus dolorum fugiat, animi dicta aperiam, enim\r\n                            incidunt quisquam maxime neque eaque.</p>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"input-group\">\r\n    <textarea class=\"form-control send-box\" placeholder=\"Type message here\">\r\n    </textarea>\r\n    <div class=\"input-group-append\">\r\n        <a class=\"btn\">\r\n            <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\r\n        </a>\r\n        <a class=\"btn\">\r\n            <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<app-custom-modal #viewProfileModal [model]=\"viewProfile\">\r\n    <div class=\"modal-body row-label\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <label>FullName</label>\r\n            </div>\r\n            <div class=\"col-md-8\"><label>{{selectedUser.firstName}} &nbsp; {{selectedUser.lastName}}</label></div>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <label>UserName</label>\r\n                </div>\r\n                <div class=\"col-md-8\"><label>{{selectedUser.name}}</label></div>\r\n            </div>\r\n            <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>Email</label>\r\n                    </div>\r\n                    <div class=\"col-md-8\"><label>{{selectedUser.email}}</label></div>\r\n                </div>\r\n                <div class=\"row\">\r\n                        <div class=\"col-md-4\">\r\n                            <label>Team Name</label>\r\n                        </div>\r\n                        <div class=\"col-md-8\"><label>{{selectedUser.team.teamName}}</label></div>\r\n                    </div>\r\n    \r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <label>Display Picture</label></div>\r\n            <div class=\"col-md-8\">\r\n                <i class=\"fa fa-user\" style=\"font-size:80px;\"></i>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer popFooter\">\r\n        <!-- <button type=\"button\" class=\"btn btn-secondary btn-border-radius\" (click)=\"addTeam(newTeamName)\">Add Team</button>\r\n            <button type=\"button\" class=\"btn btn-danger  btn-border-radius\" (click)=\"closeTeamPopup('addNewTeam')\">Close</button> -->\r\n    </div>\r\n</app-custom-modal>"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn-sec {\r\n    background-color: #ffb94b;\r\n    background-image: linear-gradient(top, #fddb6f, #ffb94b);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n.btn-cancel{\r\n    color: rgb(248, 87, 87);\r\n    background-color: rgb(248, 87, 87);\r\n    background-image: linear-gradient(top, rgb(253, 78, 78), rgb(248, 87, 87));\r\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n      border-width: 1px;\r\n      border-style: solid;\r\n      border-color: rgb(218, 10, 10);\r\n      cursor: pointer;\r\n      text-align: center;\r\n      font: Arial, Helvetica;\r\n      color: rgb(248, 241, 241);\r\n    }\r\na{\r\n        cursor: pointer;\r\n        color: #ffffff;\r\n    }\r\n.top {\r\n        height: 92px;\r\n        padding: 15px;\r\n        border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n        background-image: url(/assets/images/logobg.png);\r\n        background-position-y: bottom;\r\n    }\r\n.left {\r\n        width: 15%;\r\n        float:left;\r\n        padding: 15px;\r\n        background: #e5efff;\r\n        background-image: url(/assets/images/menuBg.png);\r\n        color: #ffffff;\r\n        font-weight: bold;\r\n    }\r\n.main {\r\n      margin-left:15%;\r\n      padding: 15px;\r\n     }\r\ntable {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        padding:30px;\r\n    }\r\ntd, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\nth{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n    }\r\ntr:nth-child(even) {\r\n        background-color: #e5efff;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.date-period-select {\r\n        border-left: 2px solid #999;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        height: 15%;\r\n        cursor: pointer;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.filter-list ul{\r\n        list-style-type: none;\r\n    }\r\n.filter-list ul li input{\r\n    cursor: pointer;\r\n    }\r\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\r\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\r\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\r\n.timeline > li:after {\n  clear: both; }\r\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\r\n.timeline > li:after {\n  clear: both; }\r\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 90%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\r\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\r\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\r\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  right: 0%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\r\n.timeline > li.timeline-inverted > .timeline-badge {\n  left: 0%;\n  margin-left: 0px; }\r\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\r\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\r\n.timeline-badge.success {\n  background-color: #3f903f !important; }\r\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\r\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\r\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\r\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px; }\r\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 14px; }\r\n.timeline-body > p + p {\n  margin-top: 5px; }\r\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\r\n#view-profile {\n  font-size: 12px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #187bd0; }\r\n#timeline-icon {\n  border-right: 1px solid black; }\r\n.send-box {\n  border-radius: 5px;\n  margin: 10px; }\r\na {\n  cursor: pointer; }\r\n.card-header {\n  background-color: #ffb94b;\n  background-image: linear-gradient(top, #fddb6f, #ffb94b);\n  color: #8f5a0a;\n  font-weight: bold; }\r\n.row-label label {\n  font-weight: bold;\n  margin: 8px; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/timeline/timeline.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/timeline/timeline.component.ts ***!
  \****************************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../custom-modal/custom-modal.component */ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimelineComponent = /** @class */ (function () {
    // router: Router;
    function TimelineComponent(userService, router) {
        this.router = router;
        this.viewProfile = {
            titleIcon: '<i class="fa fa-user"></i>',
            title: 'Profile Details',
            smallHeading: 'User profile details',
            body: '',
            Button1Content: '<i class="fa fa-user"></i>&nbsp;Update Profile',
            Button2Content: ''
        };
        this._userService = userService;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        // this._userService.getLoggedInUSerDetails().subscribe(data => {
        //     debugger;
        //     if (Object.keys(data).length === 0) {
        //         this.router.navigate(['/login']);
        //     } else {
        //         this.loggedInUser = data;
        //     }
        // });
        this._userService.getSelectedUser().subscribe(function (data) {
            if (data == null || data === undefined || data.length === 0) {
                _this.router.navigate(['/dashboard/default']);
            }
            else {
                _this.selectedUser = data;
            }
        });
    };
    TimelineComponent.prototype.open = function () {
        // alert(loggedInUser.name + loggedInUser.lastName);
        this.viewProfileModal.open();
    };
    TimelineComponent.prototype.updateProfile = function (event) {
        alert('copy text');
    };
    TimelineComponent.prototype.closeviewProfilePopup = function (popupType) {
        switch (popupType) {
            case 'viewProfile':
                this.viewProfileModal.close();
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('viewProfileModal'),
        __metadata("design:type", _custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_1__["CustomModalComponent"])
    ], TimelineComponent.prototype, "viewProfileModal", void 0);
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/layout/dashboard/components/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/layout/dashboard/components/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/components/video-call/video-call.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/video-call/video-call.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\r\n    <div class=\"row\" style=\"margin:0px;\">\r\n        <div class=\"col-md-8 card-header\" id=\"timeline-icon\">\r\n            {{loggedInUser.name}} {{loggedInUser.lastName}}&nbsp;\r\n            <a id=\"view-profile\" (click)=\"open(loggedInUser)\" (Button1Event)=\"updateProfile($event)\">(View Full Profile)</a>\r\n        </div>\r\n        <app-custom-modal #inviteAttendeesModal [model]=\"InviteAttendees\"></app-custom-modal>\r\n        <div class=\"col-md-1 card-header\" id=\"timeline-icon\">\r\n            <i class=\"fa fa-video-camera\" [routerLink]=\"['/videoCall']\"></i>\r\n        </div>\r\n        <div class=\"col-md-1 card-header\" id=\"timeline-icon\">\r\n            <i class=\"fa fa-phone\"></i>\r\n        </div>\r\n        <div class=\"col-md-1 card-header\" id=\"timeline-icon\">\r\n            <i class=\"fa fa-desktop\"></i>\r\n        </div>\r\n        <div class=\"col-md-1 card-header\" id=\"cancelCall\">\r\n            <i class=\"fa fa-times\" [routerLink]=\"['/dashboard']\"></i>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <section class=\"experiment\">\r\n            <section style=\"display:none;\">\r\n                <h2 style=\"border: 0; padding-left: .5em;\">Wanna try yourself?</h2>\r\n                <input type=\"text\" id=\"meeting-name\">\r\n                <button id=\"setup-meeting\">Setup New Meeting</button>\r\n            </section>\r\n\r\n            <table style=\"width: 100%;\" id=\"meetings-list\"></table>\r\n            <div style=\"width: 100%;\">\r\n                <div>\r\n                    <div>\r\n                        <!-- <h2 style=\"display: block; font-size: 1em; text-align: center;\">You!</h2> -->\r\n                        <div id=\"local-streams-container\" class=\"localvideo\"></div>\r\n                    </div>\r\n                    <div style=\"background: white;\">\r\n                        <!-- <h2 style=\"display: block; font-size: 1em; text-align: center;\">Remote Peers</h2> -->\r\n                        <div id=\"remote-streams-container\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- <table style=\"width: 100%;\" id=\"meetingChat\"></table> -->\r\n            <!-- <div class=\"input-group\">\r\n                <textarea class=\"form-control send-box\" placeholder=\"Type message here\" id=\"textInput\">\r\n                        </textarea>\r\n                <div class=\"input-group-append\">\r\n                    <a class=\"btn\" id=\"sendText\">\r\n                        <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                    <a class=\"btn\" id=\"sendFile\">\r\n                        <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\r\n                    </a>\r\n                </div>\r\n            </div> -->\r\n        </section>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"input-group\">\r\n    <textarea class=\"form-control send-box\" placeholder=\"Type message here\" id=\"textInput\">\r\n    </textarea>\r\n    <div class=\"input-group-append\">\r\n        <a class=\"btn\" id=\"sendText\">\r\n            <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\r\n        </a>\r\n        <a class=\"btn\" id=\"sendFile\">\r\n            <i class=\"fa fa-file\" aria-hidden=\"true\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/video-call/video-call.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/video-call/video-call.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn-sec {\r\n    background-color: #ffb94b;\r\n    background-image: linear-gradient(top, #fddb6f, #ffb94b);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n.btn-cancel{\r\n    color: rgb(248, 87, 87);\r\n    background-color: rgb(248, 87, 87);\r\n    background-image: linear-gradient(top, rgb(253, 78, 78), rgb(248, 87, 87));\r\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n      border-width: 1px;\r\n      border-style: solid;\r\n      border-color: rgb(218, 10, 10);\r\n      cursor: pointer;\r\n      text-align: center;\r\n      font: Arial, Helvetica;\r\n      color: rgb(248, 241, 241);\r\n    }\r\na{\r\n        cursor: pointer;\r\n        color: #ffffff;\r\n    }\r\n.top {\r\n        height: 92px;\r\n        padding: 15px;\r\n        border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n        background-image: url(/assets/images/logobg.png);\r\n        background-position-y: bottom;\r\n    }\r\n.left {\r\n        width: 15%;\r\n        float:left;\r\n        padding: 15px;\r\n        background: #e5efff;\r\n        background-image: url(/assets/images/menuBg.png);\r\n        color: #ffffff;\r\n        font-weight: bold;\r\n    }\r\n.main {\r\n      margin-left:15%;\r\n      padding: 15px;\r\n     }\r\ntable {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        padding:30px;\r\n    }\r\ntd, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\nth{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n    }\r\ntr:nth-child(even) {\r\n        background-color: #e5efff;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.date-period-select {\r\n        border-left: 2px solid #999;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        height: 15%;\r\n        cursor: pointer;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.filter-list ul{\r\n        list-style-type: none;\r\n    }\r\n.filter-list ul li input{\r\n    cursor: pointer;\r\n    }\r\n.timeline {\n  position: relative;\n  padding: 20px 0 20px;\n  list-style: none; }\r\n.timeline > li {\n  position: relative;\n  margin-bottom: 20px; }\r\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\r\n.timeline > li:after {\n  clear: both; }\r\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table; }\r\n.timeline > li:after {\n  clear: both; }\r\n.timeline > li > .timeline-panel {\n  float: left;\n  position: relative;\n  width: 90%;\n  padding: 20px;\n  border: 1px solid #d4d4d4;\n  border-radius: 2px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175); }\r\n.timeline > li > .timeline-panel:before {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 26px;\n  right: -15px;\n  border-top: 15px solid transparent;\n  border-right: 0 solid #ccc;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid #ccc; }\r\n.timeline > li > .timeline-panel:after {\n  content: \" \";\n  display: inline-block;\n  position: absolute;\n  top: 27px;\n  right: -14px;\n  border-top: 14px solid transparent;\n  border-right: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  border-left: 14px solid #fff; }\r\n.timeline > li > .timeline-badge {\n  z-index: 100;\n  position: absolute;\n  top: 16px;\n  right: 0%;\n  width: 50px;\n  height: 50px;\n  margin-left: -25px;\n  border-radius: 50% 50% 50% 50%;\n  text-align: center;\n  font-size: 1.4em;\n  line-height: 50px;\n  color: #fff;\n  background-color: #999999; }\r\n.timeline > li.timeline-inverted > .timeline-badge {\n  left: 0%;\n  margin-left: 0px; }\r\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: right; }\r\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  right: auto;\n  left: -15px;\n  border-right-width: 15px;\n  border-left-width: 0; }\r\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  right: auto;\n  left: -14px;\n  border-right-width: 14px;\n  border-left-width: 0; }\r\n.timeline-badge.primary {\n  background-color: #2e6da4 !important; }\r\n.timeline-badge.success {\n  background-color: #3f903f !important; }\r\n.timeline-badge.warning {\n  background-color: #f0ad4e !important; }\r\n.timeline-badge.danger {\n  background-color: #d9534f !important; }\r\n.timeline-badge.info {\n  background-color: #5bc0de !important; }\r\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 20px; }\r\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n  font-family: 'Times New Roman', Times, serif;\n  font-size: 14px; }\r\n.timeline-body > p + p {\n  margin-top: 5px; }\r\n@media (max-width: 767px) {\n  ul.timeline:before {\n    left: 40px; }\n  ul.timeline > li > .timeline-panel {\n    width: calc(100% - 90px);\n    width: -webkit-calc(100% - 90px); }\n  ul.timeline > li > .timeline-badge {\n    top: 16px;\n    left: 15px;\n    margin-left: 0; }\n  ul.timeline > li > .timeline-panel {\n    float: right; }\n  ul.timeline > li > .timeline-panel:before {\n    right: auto;\n    left: -15px;\n    border-right-width: 15px;\n    border-left-width: 0; }\n  ul.timeline > li > .timeline-panel:after {\n    right: auto;\n    left: -14px;\n    border-right-width: 14px;\n    border-left-width: 0; } }\r\n#view-profile {\n  font-size: 12px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: #187bd0; }\r\n#timeline-icon {\n  border-right: 1px solid black; }\r\n.send-box {\n  border-radius: 5px;\n  margin: 10px; }\r\na {\n  cursor: pointer; }\r\n.card-header {\n  background-color: #ffb94b;\n  background-image: linear-gradient(top, #fddb6f, #ffb94b);\n  color: #8f5a0a;\n  font-weight: bold; }\r\n.row-label label {\n  font-weight: bold;\n  margin: 8px; }\r\n.localvideo {\n  position: absolute;\n  bottom: 20px;\n  right: 20px; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/components/video-call/video-call.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/dashboard/components/video-call/video-call.component.ts ***!
  \********************************************************************************/
/*! exports provided: VideoCallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallComponent", function() { return VideoCallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
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




var VideoCallComponent = /** @class */ (function () {
    function VideoCallComponent(document, elementRef, userService, router) {
        this.document = document;
        this.elementRef = elementRef;
        this.router = router;
        this._userService = userService;
    }
    VideoCallComponent.prototype.ngAfterViewInit = function () {
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.innerHTML = 'console.log(\'done\');'; // inline script
        // s.src = '../../../assets/scripts/meetingTest.js';
        var s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.src = '../../../assets/scripts/meetingPeer.js';
        var __this = this; // to store the current instance to call
        // afterScriptAdded function on onload event of
        // script.
        s.onload = function () { __this.afterScriptAdded(); };
        this.elementRef.nativeElement.appendChild(s);
    };
    VideoCallComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        // localStorage.setItem('loggedInuserName', this.loggedInUser.name + ' ' + this.loggedInUser.lastName);
        // this._userService.getLoggedInUSerDetails().subscribe(data => {
        //     debugger;
        //     if (Object.keys(data).length === 0) {
        //         this.router.navigate(['/login']);
        //     } else {
        //         this.loggedInUser = data;
        //     }
        // });
        this._userService.getSelectedUser().subscribe(function (data) {
            if (data == null || data === undefined || data.length === 0) {
                _this.router.navigate(['/dashboard/default']);
            }
            else {
                _this.selectedUser = data;
            }
        });
    };
    VideoCallComponent.prototype.afterScriptAdded = function () {
        debugger;
        var meetingName = this.document.getElementById('meeting-name');
        meetingName.value = this.loggedInUser.name + ' ' + this.loggedInUser.lastName + '_'
            + this.selectedUser.firstName + ' ' + this.selectedUser.lastName + '_videoCall';
        this.document.getElementById('setup-meeting').click();
        var params = {
            width: '350px',
            height: '420px',
        };
        if (typeof (window['functionFromExternalScript']) === 'function') {
            window['functionFromExternalScript'](params);
        }
    };
    VideoCallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-call',
            template: __webpack_require__(/*! ./video-call.component.html */ "./src/app/layout/dashboard/components/video-call/video-call.component.html"),
            styles: [__webpack_require__(/*! ./video-call.component.scss */ "./src/app/layout/dashboard/components/video-call/video-call.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VideoCallComponent);
    return VideoCallComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/create-group/create-group.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/dashboard/create-group/create-group.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-md-2\"><label>Group Name</label></div>\r\n<div class=\"col-md-10\"><input type=\"text\" placeholder=\"Group Name\"/></div>\r\n</div>\r\n<diV class=\"row\">\r\n    <div class=\"col-md-2\">\r\n        <label>Add Member</label>\r\n    </div>\r\n    <div>\r\n    <input list=\"pasta\">\r\n    <datalist id=\"pasta\">\r\n    <option>Bavette</option>\r\n    <option>Cannelloni</option>\r\n    <option>Fiorentine</option>\r\n    <option>Gnocchi</option>\r\n    <option>Pappardelle</option>\r\n    <option>Penne lisce</option>\r\n    <option>Pici</option>\r\n    <option>Rigatoni</option>\r\n    <option>Spaghetti</option>\r\n    <option>Tagliatelle</option>\r\n    </datalist>\r\n</div>\r\n</diV>\r\n<div><a class=\"btn btn-primary\">Create GRoup</a></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/dashboard/create-group/create-group.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/layout/dashboard/create-group/create-group.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/dashboard/create-group/create-group.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/dashboard/create-group/create-group.component.ts ***!
  \*************************************************************************/
/*! exports provided: CreateGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupComponent", function() { return CreateGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateGroupComponent = /** @class */ (function () {
    function CreateGroupComponent() {
    }
    CreateGroupComponent.prototype.ngOnInit = function () {
    };
    CreateGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-group',
            template: __webpack_require__(/*! ./create-group.component.html */ "./src/app/layout/dashboard/create-group/create-group.component.html"),
            styles: [__webpack_require__(/*! ./create-group.component.scss */ "./src/app/layout/dashboard/create-group/create-group.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateGroupComponent);
    return CreateGroupComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/timeline/timeline.component */ "./src/app/layout/dashboard/components/timeline/timeline.component.ts");
/* harmony import */ var _components_default_chat_default_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/default-chat/default-chat.component */ "./src/app/layout/dashboard/components/default-chat/default-chat.component.ts");
/* harmony import */ var app_layout_dashboard_components_meeting_video_call_meeting_video_call_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/dashboard/components/meeting-video-call/meeting-video-call.component */ "./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.ts");
/* harmony import */ var _components_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/video-call/video-call.component */ "./src/app/layout/dashboard/components/video-call/video-call.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            { path: '', redirectTo: 'default' },
            { path: 'default', component: _components_default_chat_default_chat_component__WEBPACK_IMPORTED_MODULE_4__["DefaultChatComponent"] },
            { path: 'chat', component: _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["TimelineComponent"] },
            { path: 'videoMeeting', component: app_layout_dashboard_components_meeting_video_call_meeting_video_call_component__WEBPACK_IMPORTED_MODULE_5__["MeetingVideoCallComponent"] },
            { path: 'videoCall', component: _components_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_6__["VideoCallComponent"] }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition] style=\"overflow: hidden;\">\r\n    <div class=\"row\" style=\"margin-right:0px;\">\r\n        <div class=\"col-lg-3\" style=\"padding:0px;\">\r\n            <div class=\"card card-default\">\r\n                <div class=\"row\" style=\"margin:0px;\">\r\n                    <div class=\"col-md-6 card-header userlist-header\" style=\"text-align: center;\">\r\n                        <i class=\"fa fa-user-circle fa-fw cursorPointer\"></i>\r\n                    </div>\r\n                    <div class=\"col-md-2 card-header userlist-header\">\r\n                        <i class=\"fa fa-user-plus fa-fw cursorPointer\" [routerLink]=\"['/signup']\"></i>\r\n                    </div>\r\n                    <div class=\"col-md-2 card-header userlist-header\">\r\n                        <i class=\"fa fa-users fa-fw cursorPointer\" (click)=\"openCreateGroupPopup()\"></i>\r\n                        <app-custom-modal #createGroupModal [model]=\"createGroups\">\r\n                            <div class=\"modal-body\">\r\n                                <div style=\"margin-top: 20px;\" *ngIf=\"showNewGroup === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showNewGroup\">\r\n                                    <strong>Error: </strong>Enter Group Name.\r\n                                </div>\r\n                                <div style=\"margin-top: 20px;\" *ngIf=\"showNewGroupSuccess === true\" class=\"alert alert-success alert-dismissable\" [(ngModel)]=\"showNewGroupSuccess\">\r\n                                    <strong>Success: </strong>Group has been Created Successfully.\r\n                                </div>\r\n                                <div style=\"margin-top: 20px;\" *ngIf=\"duplicateGroup === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"duplicateGroup\">\r\n                                        <strong>Error: </strong>group has been already added , please select member and click on Add Group Member button\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <label>Group Name</label>\r\n                                    </div>\r\n                                    <div>\r\n                                        <!-- <textarea placeholder=\"Type Name Here..\" [(ngModel)]=\"createGroupsVal\" onfocus=\"groupNameFocus()\"></textarea> -->\r\n                                        <input type=\"text\" list=\"groupNameList\"  [(ngModel)]=\"createGroupsVal\">\r\n                                    </div>\r\n                                    <datalist id=\"groupNameList\">\r\n                                        <option *ngFor=\"let group of groupList\" value=\"{{group.groupId.groupName}}\">\r\n                                    </datalist>\r\n                                </div>\r\n                                <hr>\r\n                                <div class=\"row\" style=\"padding: 15px;\">\r\n                                    <div *ngFor=\"let user of userList\">\r\n                                        <label class=\"checkbox-inline check-label\" >\r\n                                            <input type=\"checkbox\"  [(ngModel)]=\"user.checked\">{{user.firstName}} &nbsp; {{user.lastName}}\r\n                                        </label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal-footer popFooter\">\r\n                                <button type=\"button\" class=\"btn-sec btn\" (click)=\"createGroup(createGroupsVal)\">Add Group</button>\r\n                                <button type=\"button\" class=\"btn-sec btn\" (click)=\"addMember(createGroupsVal)\">Add Group Memeber</button>\r\n                                <button type=\"button\" class=\"btn-cancel btn\" (click)=\"closePopup('addCreateGroup')\">Close</button>\r\n                            </div>\r\n                        </app-custom-modal>\r\n                    </div>\r\n                    <div class=\"col-md-2 card-header userlist-header\">\r\n                        <i class=\"fa fa-bullhorn fa-fw cursorPointer\" (click)=\"open()\"></i>\r\n                        <!-- <app-custom-modal #inviteAttendeesModal [model]=\"InviteAttendees\" (Button1Event)=\"broadcastMsg($event)\"\r\n                             (Button2Event)=\"resetMsg($event)\"></app-custom-modal> -->\r\n                        <app-custom-modal #broadcastMessageModal [model]=\"broadcastMessagecontent\">\r\n                            <div class=\"modal-body\">\r\n                                <div style=\"margin-top: 20px;\" *ngIf=\"showtypeMessage === true\" class=\"alert alert-danger alert-dismissable\" [(ngModel)]=\"showtypeMessage\">\r\n                                    <strong>Error: </strong>Enter Message.\r\n                                </div>\r\n                                <div style=\"margin-top: 20px;\" *ngIf=\"showBroadcastMessageSuccess === true\" class=\"alert alert-success alert-dismissable\"\r\n                                    [(ngModel)]=\"showBroadcastMessageSuccess\">\r\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\r\n                                    <strong>Success: </strong>Message has been Broadcast Successfully.\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-3\">\r\n                                        <label>Messgage</label>\r\n                                    </div>\r\n                                    <div>\r\n                                        <textarea placeholder=\"Type Message Here..\" [(ngModel)]=\"broadcastMessage\" (click)=\"typeBroadcastMessageFocus()\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal-footer popFooter\">\r\n                                <button type=\"button\" class=\"btn-sec btn\" (click)=\"broadcastMessages(broadcastMessage)\">Broadcast Message</button>\r\n                                <button type=\"button\" class=\"btn btn-cancel\" (click)=\"closePopup('addBroadcastMsg')\">Close</button>\r\n                            </div>\r\n                        </app-custom-modal>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- /.card-header -->\r\n                <app-notification></app-notification>\r\n                <!-- /.card-body -->\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-5\" style=\"padding:0px\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n\r\n        <div class=\"col-lg-4\" style=\"padding:1rem;\">\r\n            <div [ngSwitch]=\"currentRoute\">\r\n                <app-default-meeting *ngSwitchCase=\"0\" (CurrentRoute)=\"switchRoute($event)\"></app-default-meeting>\r\n                <app-schedule-meeting *ngSwitchCase=\"1\" (CurrentRoute)=\"switchRoute($event)\"></app-schedule-meeting>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.btn-sec {\r\n    background-color: #ffb94b;\r\n    background-image: linear-gradient(top, #fddb6f, #ffb94b);\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #d69e31 #e3a037 #d5982d #e3a037;\r\n    cursor: pointer;\r\n    font: bold 15px Arial, Helvetica;\r\n    color: #8f5a0a;\r\n}\r\n.btn-cancel{\r\n    color: rgb(248, 87, 87);\r\n    background-color: rgb(248, 87, 87);\r\n    background-image: linear-gradient(top, rgb(253, 78, 78), rgb(248, 87, 87));\r\n      box-shadow: 0 0 1px rgba(0, 0, 0, 0.3), 0 1px 0 rgba(255, 255, 255, 0.3) inset;\r\n      border-width: 1px;\r\n      border-style: solid;\r\n      border-color: rgb(218, 10, 10);\r\n      cursor: pointer;\r\n      text-align: center;\r\n      font: Arial, Helvetica;\r\n      color: rgb(248, 241, 241);\r\n    }\r\na{\r\n        cursor: pointer;\r\n        color: #ffffff;\r\n    }\r\n.top {\r\n        height: 92px;\r\n        padding: 15px;\r\n        border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n        background-image: url(/assets/images/logobg.png);\r\n        background-position-y: bottom;\r\n    }\r\n.left {\r\n        width: 15%;\r\n        float:left;\r\n        padding: 15px;\r\n        background: #e5efff;\r\n        background-image: url(/assets/images/menuBg.png);\r\n        color: #ffffff;\r\n        font-weight: bold;\r\n    }\r\n.main {\r\n      margin-left:15%;\r\n      padding: 15px;\r\n     }\r\ntable {\r\n        font-family: arial, sans-serif;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        padding:30px;\r\n    }\r\ntd, th {\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\nth{\r\n        border: 1px solid #dddddd;\r\n        text-align: left;\r\n        padding: 8px;\r\n        background: #3277d3;\r\n        color: #ffffff;\r\n    }\r\ntr:nth-child(even) {\r\n        background-color: #e5efff;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.date-period-select {\r\n        border-left: 2px solid #999;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        height: 15%;\r\n        cursor: pointer;\r\n    }\r\n.filter-list{\r\n     border-right: 1px solid rgba(0, 0, 0, 0.125);\r\n     height: 90vh;\r\n    }\r\n.filter-list ul{\r\n        list-style-type: none;\r\n    }\r\n.filter-list ul li input{\r\n    cursor: pointer;\r\n    }\r\n.userlist-header {\n  background: #3277d3;\n  color: #ffffff;\n  border-right: 1px solid #dadadc;\n  opacity: 0.85;\n  height: 6vh; }\r\n.userlist-header:first-child {\n    opacity: 1; }\r\n.userlist-header .cursorPointer {\n    cursor: pointer; }\r\n.check-label {\n  font-weight: bold;\n  padding-left: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/custom-modal/custom-modal.component */ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.ts");
/* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/group.service */ "./src/app/services/group.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(groupService, userService) {
        this.groupService = groupService;
        this.createGroupsVal = '';
        this.broadcastMessage = '';
        this.showtypeMessage = false;
        this.showNewGroup = false;
        this.showNewGroupSuccess = false;
        this.showBroadcastMessageSuccess = false;
        this.duplicateGroup = false;
        this.userList = [];
        this.groupList = [];
        this.groupArray = [];
        this.i = 0;
        this.broadcastMessagecontent = {
            titleIcon: '<i class="fa fa-bullhorn"></i>',
            title: 'Broadcast Message',
            smallHeading: 'Send Message to everyone',
            body: '',
            Button1Content: '<i class="fa fa-comments"></i>&nbsp;Send Message',
            Button2Content: '<i class="fa fa-refresh"></i>&nbsp;Cancel'
        };
        this.createGroups = {
            titleIcon: '<i class="fa fa-bullhorn"></i>',
            title: 'Create Group',
            smallHeading: 'Create groups to have communication',
            body: '',
            Button1Content: '<i class="fa fa-comments"></i>&nbsp;Send Message',
            Button2Content: '<i class="fa fa-refresh"></i>&nbsp;Cancel'
        };
        this.alerts = [];
        this.sliders = [];
        this.currentRoute = 0;
        this._groupService = groupService;
        this._userService = userService;
        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        });
        this.alerts.push({
            id: 1,
            type: 'success',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        }, {
            id: 2,
            type: 'warning',
            message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Voluptates est animi quibusdam praesentium quam, et perspiciatis,\n                consectetur velit culpa molestias dignissimos\n                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum"
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserList().subscribe(function (data) {
            _this.userList = data;
        });
        this._groupService.getGroupList().subscribe(function (data) {
            _this.groupList = data;
        });
    };
    DashboardComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    DashboardComponent.prototype.switchRoute = function (newRoute) {
        this.currentRoute = newRoute;
    };
    DashboardComponent.prototype.open = function () {
        //   debugger;
        this.broadcastMessageModal.open();
    };
    DashboardComponent.prototype.openCreateGroupPopup = function () {
        this.createGroupModal.open();
    };
    //save broadcast message
    DashboardComponent.prototype.broadcastMessages = function (broadcastMessage) {
        var _this = this;
        if (broadcastMessage === "" || broadcastMessage === null || typeof broadcastMessage === "undefined") {
            this.showtypeMessage = true;
            setTimeout(function () {
                this.showtypeMessage = false;
            }.bind(this), 5000);
        }
        else {
            var payload = { "broadcastMessage": broadcastMessage };
            this._groupService.saveBroadcastMessage(payload).subscribe(function (res) {
                _this.showtypeMessage = false;
                _this.showBroadcastMessageSuccess = true;
                setTimeout(function () {
                    this.showBroadcastMessageSuccess = false;
                }.bind(_this), 5000);
            });
        }
        this.broadcastMessage = ' ';
    };
    DashboardComponent.prototype.typeBroadcastMessageFocus = function () {
        this.showtypeMessage = false;
    };
    DashboardComponent.prototype.groupNameFocus = function () {
        this.showNewGroup = false;
    };
    DashboardComponent.prototype.resetMsg = function (event) {
        alert('text reset');
    };
    //create new group 
    DashboardComponent.prototype.createGroup = function (createGroupsVal) {
        var _this = this;
        if (createGroupsVal === "" || createGroupsVal === null || typeof createGroupsVal === "undefined") {
            this.showNewGroup = true;
            setTimeout(function () {
                this.showNewGroup = false;
            }.bind(this), 5000);
        }
        else {
            for (var i in this.groupList) {
                this.groupArray.push(this.groupList[i].groupId.groupName);
            }
            var duplicateGroupFlag = this.groupArray.indexOf(createGroupsVal);
            if (duplicateGroupFlag != -1) {
                this.duplicateGroup = true;
                setTimeout(function () {
                    this.duplicateGroup = false;
                }.bind(this), 6000);
            }
            else {
                var payload = { "groupName": createGroupsVal };
                this._groupService.saveGroupDetails(payload).subscribe(function (res) {
                    _this.showNewGroup = false;
                    _this.showNewGroupSuccess = true;
                    setTimeout(function () {
                        this.showNewGroupSuccess = false;
                    }.bind(_this), 5000);
                    _this.createGroupsVal = ' ';
                    var group = { group: { groupName: createGroupsVal } };
                    _this.groupList.push(group);
                });
            }
        }
    };
    //close create group modal popup
    DashboardComponent.prototype.closePopup = function (popupType) {
        switch (popupType) {
            case 'addCreateGroup':
                this.createGroupModal.close();
                break;
            case 'addBroadcastMsg':
                this.createGroupModal.close();
                break;
        }
    };
    DashboardComponent.prototype.addMember = function () {
        alert('addGroupMember');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('braodcastMessageModal'),
        __metadata("design:type", _components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_2__["CustomModalComponent"])
    ], DashboardComponent.prototype, "broadcastMessageModal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('createGroupModal'),
        __metadata("design:type", _components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_2__["CustomModalComponent"])
    ], DashboardComponent.prototype, "createGroupModal", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/layout/dashboard/dashboard.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_0__["routerTransition"])()],
            providers: [_services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"]]
        }),
        __metadata("design:paramtypes", [_services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/dashboard.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
  \******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/layout/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./src/app/layout/dashboard/components/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _components_default_chat_default_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/default-chat/default-chat.component */ "./src/app/layout/dashboard/components/default-chat/default-chat.component.ts");
/* harmony import */ var _components_default_meeting_default_meeting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/default-meeting/default-meeting.component */ "./src/app/layout/dashboard/components/default-meeting/default-meeting.component.ts");
/* harmony import */ var _components_schedule_meeting_schedule_meeting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/schedule-meeting/schedule-meeting.component */ "./src/app/layout/dashboard/components/schedule-meeting/schedule-meeting.component.ts");
/* harmony import */ var _bs_component_bs_component_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bs-component/bs-component.module */ "./src/app/layout/bs-component/bs-component.module.ts");
/* harmony import */ var _components_meeting_video_call_meeting_video_call_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/meeting-video-call/meeting-video-call.component */ "./src/app/layout/dashboard/components/meeting-video-call/meeting-video-call.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/custom-modal/custom-modal.component */ "./src/app/layout/dashboard/components/custom-modal/custom-modal.component.ts");
/* harmony import */ var _components_notification_search_member_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/notification/search-member.pipe */ "./src/app/layout/dashboard/components/notification/search-member.pipe.ts");
/* harmony import */ var _broadcast_message_broadcast_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./broadcast-message/broadcast-message.component */ "./src/app/layout/dashboard/broadcast-message/broadcast-message.component.ts");
/* harmony import */ var _create_group_create_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./create-group/create-group.component */ "./src/app/layout/dashboard/create-group/create-group.component.ts");
/* harmony import */ var _components_default_meeting_search_future_meeting_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/default-meeting/search-future-meeting.pipe */ "./src/app/layout/dashboard/components/default-meeting/search-future-meeting.pipe.ts");
/* harmony import */ var _components_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/video-call/video-call.component */ "./src/app/layout/dashboard/components/video-call/video-call.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAlertModule"].forRoot(),
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["StatModule"],
                _bs_component_bs_component_module__WEBPACK_IMPORTED_MODULE_10__["BsComponentModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot()
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["NotificationComponent"],
                _components__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
                _components_default_chat_default_chat_component__WEBPACK_IMPORTED_MODULE_7__["DefaultChatComponent"],
                _components_default_meeting_default_meeting_component__WEBPACK_IMPORTED_MODULE_8__["DefaultMeetingComponent"],
                _components_schedule_meeting_schedule_meeting_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleMeetingComponent"],
                _components_meeting_video_call_meeting_video_call_component__WEBPACK_IMPORTED_MODULE_11__["MeetingVideoCallComponent"],
                _components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_13__["CustomModalComponent"],
                _components_notification_search_member_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchMemberPipe"],
                _broadcast_message_broadcast_message_component__WEBPACK_IMPORTED_MODULE_15__["BroadcastMessageComponent"],
                _create_group_create_group_component__WEBPACK_IMPORTED_MODULE_16__["CreateGroupComponent"],
                _components_default_meeting_search_future_meeting_pipe__WEBPACK_IMPORTED_MODULE_17__["SearchFutureMeetingPipe"],
                _components_video_call_video_call_component__WEBPACK_IMPORTED_MODULE_18__["VideoCallComponent"]
            ],
            exports: [_components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_13__["CustomModalComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
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
//# sourceMappingURL=dashboard-dashboard-module~manage-team-manage-team-module.js.map