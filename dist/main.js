(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./access-denied/access-denied.module": [
		"./src/app/access-denied/access-denied.module.ts",
		"access-denied-access-denied-module"
	],
	"./blank-page/blank-page.module": [
		"./src/app/layout/blank-page/blank-page.module.ts",
		"blank-page-blank-page-module"
	],
	"./bs-component/bs-component.module": [
		"./src/app/layout/bs-component/bs-component.module.ts",
		"bs-component-bs-component-module~charts-charts-module~dashboard-dashboard-module~layout-layout-modul~de55d784",
		"bs-component-bs-component-module~dashboard-dashboard-module~manage-team-manage-team-module~meeting-m~b251710e",
		"common"
	],
	"./bs-element/bs-element.module": [
		"./src/app/layout/bs-element/bs-element.module.ts",
		"common",
		"bs-element-bs-element-module"
	],
	"./charts/charts.module": [
		"./src/app/layout/charts/charts.module.ts",
		"bs-component-bs-component-module~charts-charts-module~dashboard-dashboard-module~layout-layout-modul~de55d784",
		"common",
		"charts-charts-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/layout/dashboard/dashboard.module.ts",
		"bs-component-bs-component-module~charts-charts-module~dashboard-dashboard-module~layout-layout-modul~de55d784",
		"bs-component-bs-component-module~dashboard-dashboard-module~manage-team-manage-team-module~meeting-m~b251710e",
		"dashboard-dashboard-module~manage-team-manage-team-module",
		"common"
	],
	"./form/form.module": [
		"./src/app/layout/form/form.module.ts",
		"common",
		"form-form-module"
	],
	"./grid/grid.module": [
		"./src/app/layout/grid/grid.module.ts",
		"common",
		"grid-grid-module"
	],
	"./layout/layout.module": [
		"./src/app/layout/layout.module.ts",
		"bs-component-bs-component-module~charts-charts-module~dashboard-dashboard-module~layout-layout-modul~de55d784",
		"common",
		"layout-layout-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"common",
		"login-login-module"
	],
	"./manage-team/manage-team.module": [
		"./src/app/layout/manage-team/manage-team.module.ts",
		"bs-component-bs-component-module~charts-charts-module~dashboard-dashboard-module~layout-layout-modul~de55d784",
		"bs-component-bs-component-module~dashboard-dashboard-module~manage-team-manage-team-module~meeting-m~b251710e",
		"dashboard-dashboard-module~manage-team-manage-team-module",
		"common",
		"manage-team-manage-team-module"
	],
	"./meeting/meeting.module": [
		"./src/app/layout/meeting/meeting.module.ts",
		"bs-component-bs-component-module~charts-charts-module~dashboard-dashboard-module~layout-layout-modul~de55d784",
		"bs-component-bs-component-module~dashboard-dashboard-module~manage-team-manage-team-module~meeting-m~b251710e",
		"common",
		"meeting-meeting-module"
	],
	"./my-calendar/my-calendar.module": [
		"./src/app/layout/my-calendar/my-calendar.module.ts",
		"my-calendar-my-calendar-module"
	],
	"./my-profile/my-profile.module": [
		"./src/app/layout/my-profile/my-profile.module.ts",
		"common",
		"my-profile-my-profile-module"
	],
	"./not-found/not-found.module": [
		"./src/app/not-found/not-found.module.ts",
		"not-found-not-found-module"
	],
	"./past-mettings/past-mettings.module": [
		"./src/app/layout/past-mettings/past-mettings.module.ts",
		"past-mettings-past-mettings-module"
	],
	"./server-error/server-error.module": [
		"./src/app/server-error/server-error.module.ts",
		"server-error-server-error-module"
	],
	"./signup/signup.module": [
		"./src/app/signup/signup.module.ts",
		"bs-component-bs-component-module~charts-charts-module~dashboard-dashboard-module~layout-layout-modul~de55d784",
		"bs-component-bs-component-module~dashboard-dashboard-module~manage-team-manage-team-module~meeting-m~b251710e",
		"common",
		"signup-signup-module"
	],
	"./tables/tables.module": [
		"./src/app/layout/tables/tables.module.ts",
		"common",
		"tables-tables-module"
	],
	"./user-rights/user-rights.module": [
		"./src/app/layout/user-rights/user-rights.module.ts",
		"common",
		"user-rights-user-rights-module"
	],
	"./user-settings/user-settings.module": [
		"./src/app/layout/user-settings/user-settings.module.ts",
		"user-settings-user-settings-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    // { path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * FullCalendar v3.6.1 Stylesheet\r\n * Docs & License: https://fullcalendar.io/\r\n * (c) 2017 Adam Shaw\r\n */\n.fc {\n  direction: ltr;\n  text-align: left; }\n.fc-rtl {\n  text-align: right; }\nbody .fc {\n  /* extra precedence to overcome jqui */\n  font-size: 1em; }\n/* Colors\r\n--------------------------------------------------------------------------------------------------*/\n.fc-highlight {\n  /* when user is selecting cells */\n  background: #bce8f1;\n  opacity: .3; }\n.fc-bgevent {\n  /* default look for background events */\n  background: #8fdf82;\n  opacity: .3; }\n.fc-nonbusiness {\n  /* default look for non-business-hours areas */\n  /* will inherit .fc-bgevent's styles */\n  background: #d7d7d7; }\n/* Buttons (styled <button> tags, normalized to work cross-browser)\r\n--------------------------------------------------------------------------------------------------*/\n.fc button {\n  /* force height to include the border and padding */\n  box-sizing: border-box;\n  /* dimensions */\n  margin: 0;\n  height: 2.1em;\n  padding: 0 .6em;\n  /* text & cursor */\n  font-size: 1em;\n  /* normalize */\n  white-space: nowrap;\n  cursor: pointer; }\n/* Firefox has an annoying inner border */\n.fc button::-moz-focus-inner {\n  margin: 0;\n  padding: 0; }\n.fc-state-default {\n  /* non-theme */\n  border: 1px solid; }\n.fc-state-default.fc-corner-left {\n  /* non-theme */\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px; }\n.fc-state-default.fc-corner-right {\n  /* non-theme */\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px; }\n/* icons in buttons */\n.fc button .fc-icon {\n  /* non-theme */\n  position: relative;\n  top: -0.05em;\n  /* seems to be a good adjustment across browsers */\n  margin: 0 .2em;\n  vertical-align: middle; }\n/*\r\n  button states\r\n  borrowed from twitter bootstrap (http://twitter.github.com/bootstrap/)\r\n*/\n.fc-state-default {\n  background-color: #f5f5f5;\n  background-image: linear-gradient(to bottom, #ffffff, #e6e6e6);\n  background-repeat: repeat-x;\n  border-color: #e6e6e6 #e6e6e6 #bfbfbf;\n  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n  color: #333;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05); }\n.fc-state-hover,\n.fc-state-down,\n.fc-state-active,\n.fc-state-disabled {\n  color: #333333;\n  background-color: #e6e6e6; }\n.fc-state-hover {\n  color: #333333;\n  text-decoration: none;\n  background-position: 0 -15px;\n  transition: background-position 0.1s linear; }\n.fc-state-down,\n.fc-state-active {\n  background-color: #cccccc;\n  background-image: none;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05); }\n.fc-state-disabled {\n  cursor: default;\n  background-image: none;\n  opacity: 0.65;\n  box-shadow: none; }\n/* Buttons Groups\r\n--------------------------------------------------------------------------------------------------*/\n.fc-button-group {\n  display: inline-block; }\n/*\r\nevery button that is not first in a button group should scootch over one pixel and cover the\r\nprevious button's border...\r\n*/\n.fc .fc-button-group > * {\n  /* extra precedence b/c buttons have margin set to zero */\n  float: left;\n  margin: 0 0 0 -1px; }\n.fc .fc-button-group > :first-child {\n  /* same */\n  margin-left: 0; }\n/* Popover\r\n--------------------------------------------------------------------------------------------------*/\n.fc-popover {\n  position: absolute;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15); }\n.fc-popover .fc-header {\n  /* TODO: be more consistent with fc-head/fc-body */\n  padding: 2px 4px; }\n.fc-popover .fc-header .fc-title {\n  margin: 0 2px; }\n.fc-popover .fc-header .fc-close {\n  cursor: pointer; }\n.fc-ltr .fc-popover .fc-header .fc-title,\n.fc-rtl .fc-popover .fc-header .fc-close {\n  float: left; }\n.fc-rtl .fc-popover .fc-header .fc-title,\n.fc-ltr .fc-popover .fc-header .fc-close {\n  float: right; }\n/* Misc Reusable Components\r\n--------------------------------------------------------------------------------------------------*/\n.fc-divider {\n  border-style: solid;\n  border-width: 1px; }\nhr.fc-divider {\n  height: 0;\n  margin: 0;\n  padding: 0 0 2px;\n  /* height is unreliable across browsers, so use padding */\n  border-width: 1px 0; }\n.fc-clear {\n  clear: both; }\n.fc-bg,\n.fc-bgevent-skeleton,\n.fc-highlight-skeleton,\n.fc-helper-skeleton {\n  /* these element should always cling to top-left/right corners */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n.fc-bg {\n  bottom: 0;\n  /* strech bg to bottom edge */ }\n.fc-bg table {\n  height: 100%;\n  /* strech bg to bottom edge */ }\n/* Tables\r\n--------------------------------------------------------------------------------------------------*/\n.fc table {\n  width: 100%;\n  box-sizing: border-box;\n  /* fix scrollbar issue in firefox */\n  table-layout: fixed;\n  border-collapse: collapse;\n  border-spacing: 0;\n  font-size: 1em;\n  /* normalize cross-browser */ }\n.fc th {\n  text-align: center; }\n.fc th,\n.fc td {\n  border-style: solid;\n  border-width: 1px;\n  padding: 0;\n  vertical-align: top; }\n.fc td.fc-today {\n  border-style: double;\n  /* overcome neighboring borders */ }\n/* Internal Nav Links\r\n--------------------------------------------------------------------------------------------------*/\na[data-goto] {\n  cursor: pointer; }\na[data-goto]:hover {\n  text-decoration: underline; }\n/* Fake Table Rows\r\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-row {\n  /* extra precedence to overcome themes w/ .ui-widget-content forcing a 1px border */\n  /* no visible border by default. but make available if need be (scrollbar width compensation) */\n  border-style: solid;\n  border-width: 0; }\n.fc-row table {\n  /* don't put left/right border on anything within a fake row.\r\n\t   the outer tbody will worry about this */\n  border-left: 0 hidden transparent;\n  border-right: 0 hidden transparent;\n  /* no bottom borders on rows */\n  border-bottom: 0 hidden transparent; }\n.fc-row:first-child table {\n  border-top: 0 hidden transparent;\n  /* no top border on first row */ }\n/* Day Row (used within the header and the DayGrid)\r\n--------------------------------------------------------------------------------------------------*/\n.fc-row {\n  position: relative; }\n.fc-row .fc-bg {\n  z-index: 1; }\n/* highlighting cells & background event skeleton */\n.fc-row .fc-bgevent-skeleton,\n.fc-row .fc-highlight-skeleton {\n  bottom: 0;\n  /* stretch skeleton to bottom of row */ }\n.fc-row .fc-bgevent-skeleton table,\n.fc-row .fc-highlight-skeleton table {\n  height: 100%;\n  /* stretch skeleton to bottom of row */ }\n.fc-row .fc-highlight-skeleton td,\n.fc-row .fc-bgevent-skeleton td {\n  border-color: transparent; }\n.fc-row .fc-bgevent-skeleton {\n  z-index: 2; }\n.fc-row .fc-highlight-skeleton {\n  z-index: 3; }\n/*\r\nrow content (which contains day/week numbers and events) as well as \"helper\" (which contains\r\ntemporary rendered events).\r\n*/\n.fc-row .fc-content-skeleton {\n  position: relative;\n  z-index: 4;\n  padding-bottom: 2px;\n  /* matches the space above the events */ }\n.fc-row .fc-helper-skeleton {\n  z-index: 5; }\n.fc .fc-row .fc-content-skeleton table,\n.fc .fc-row .fc-content-skeleton td,\n.fc .fc-row .fc-helper-skeleton td {\n  /* see-through to the background below */\n  /* extra precedence to prevent theme-provided backgrounds */\n  background: none;\n  /* in case <td>s are globally styled */\n  border-color: transparent; }\n.fc-row .fc-content-skeleton td,\n.fc-row .fc-helper-skeleton td {\n  /* don't put a border between events and/or the day number */\n  border-bottom: 0; }\n.fc-row .fc-content-skeleton tbody td,\n.fc-row .fc-helper-skeleton tbody td {\n  /* don't put a border between event cells */\n  border-top: 0; }\n/* Scrolling Container\r\n--------------------------------------------------------------------------------------------------*/\n.fc-scroller {\n  -webkit-overflow-scrolling: touch; }\n/* TODO: move to agenda/basic */\n.fc-scroller > .fc-day-grid,\n.fc-scroller > .fc-time-grid {\n  position: relative;\n  /* re-scope all positions */\n  width: 100%;\n  /* hack to force re-sizing this inner element when scrollbars appear/disappear */ }\n/* Global Event Styles\r\n--------------------------------------------------------------------------------------------------*/\n.fc-event {\n  position: relative;\n  /* for resize handle and other inner positioning */\n  display: block;\n  /* make the <a> tag block */\n  font-size: .85em;\n  line-height: 1.3;\n  border-radius: 3px;\n  border: 1px solid #3a87ad;\n  /* default BORDER color */ }\n.fc-event,\n.fc-event-dot {\n  background-color: #3a87ad;\n  /* default BACKGROUND color */ }\n.fc-event,\n.fc-event:hover {\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */ }\n.fc-event[href],\n.fc-event.fc-draggable {\n  cursor: pointer;\n  /* give events with links and draggable events a hand mouse pointer */ }\n.fc-not-allowed,\n.fc-not-allowed .fc-event {\n  /* to override an event's custom cursor */\n  cursor: not-allowed; }\n.fc-event .fc-bg {\n  /* the generic .fc-bg already does position */\n  z-index: 1;\n  background: #fff;\n  opacity: .25; }\n.fc-event .fc-content {\n  position: relative;\n  z-index: 2; }\n/* resizer (cursor AND touch devices) */\n.fc-event .fc-resizer {\n  position: absolute;\n  z-index: 4; }\n/* resizer (touch devices) */\n.fc-event .fc-resizer {\n  display: none; }\n.fc-event.fc-allow-mouse-resize .fc-resizer,\n.fc-event.fc-selected .fc-resizer {\n  /* only show when hovering or selected (with touch) */\n  display: block; }\n/* hit area */\n.fc-event.fc-selected .fc-resizer:before {\n  /* 40x40 touch area */\n  content: \"\";\n  position: absolute;\n  z-index: 9999;\n  /* user of this util can scope within a lower z-index */\n  top: 50%;\n  left: 50%;\n  width: 40px;\n  height: 40px;\n  margin-left: -20px;\n  margin-top: -20px; }\n/* Event Selection (only for touch devices)\r\n--------------------------------------------------------------------------------------------------*/\n.fc-event.fc-selected {\n  z-index: 9999 !important;\n  /* overcomes inline z-index */\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); }\n.fc-event.fc-selected.fc-dragging {\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3); }\n/* Horizontal Events\r\n--------------------------------------------------------------------------------------------------*/\n/* bigger touch area when selected */\n.fc-h-event.fc-selected:before {\n  content: \"\";\n  position: absolute;\n  z-index: 3;\n  /* below resizers */\n  top: -10px;\n  bottom: -10px;\n  left: 0;\n  right: 0; }\n/* events that are continuing to/from another week. kill rounded corners and butt up against edge */\n.fc-ltr .fc-h-event.fc-not-start,\n.fc-rtl .fc-h-event.fc-not-end {\n  margin-left: 0;\n  border-left-width: 0;\n  padding-left: 1px;\n  /* replace the border with padding */\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.fc-ltr .fc-h-event.fc-not-end,\n.fc-rtl .fc-h-event.fc-not-start {\n  margin-right: 0;\n  border-right-width: 0;\n  padding-right: 1px;\n  /* replace the border with padding */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n/* resizer (cursor AND touch devices) */\n/* left resizer  */\n.fc-ltr .fc-h-event .fc-start-resizer,\n.fc-rtl .fc-h-event .fc-end-resizer {\n  cursor: w-resize;\n  left: -1px;\n  /* overcome border */ }\n/* right resizer */\n.fc-ltr .fc-h-event .fc-end-resizer,\n.fc-rtl .fc-h-event .fc-start-resizer {\n  cursor: e-resize;\n  right: -1px;\n  /* overcome border */ }\n/* resizer (mouse devices) */\n.fc-h-event.fc-allow-mouse-resize .fc-resizer {\n  width: 7px;\n  top: -1px;\n  /* overcome top border */\n  bottom: -1px;\n  /* overcome bottom border */ }\n/* resizer (touch devices) */\n.fc-h-event.fc-selected .fc-resizer {\n  /* 8x8 little dot */\n  border-radius: 4px;\n  border-width: 1px;\n  width: 6px;\n  height: 6px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* vertically center */\n  top: 50%;\n  margin-top: -4px; }\n/* left resizer  */\n.fc-ltr .fc-h-event.fc-selected .fc-start-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-end-resizer {\n  margin-left: -4px;\n  /* centers the 8x8 dot on the left edge */ }\n/* right resizer */\n.fc-ltr .fc-h-event.fc-selected .fc-end-resizer,\n.fc-rtl .fc-h-event.fc-selected .fc-start-resizer {\n  margin-right: -4px;\n  /* centers the 8x8 dot on the right edge */ }\n/* DayGrid events\r\n----------------------------------------------------------------------------------------------------\r\nWe use the full \"fc-day-grid-event\" class instead of using descendants because the event won't\r\nbe a descendant of the grid when it is being dragged.\r\n*/\n.fc-day-grid-event {\n  margin: 1px 2px 0;\n  /* spacing between events and edges */\n  padding: 0 1px; }\ntr:first-child > td > .fc-day-grid-event {\n  margin-top: 2px;\n  /* a little bit more space before the first event */ }\n.fc-day-grid-event.fc-selected:after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  /* same z-index as fc-bg, behind text */\n  /* overcome the borders */\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  /* darkening effect */\n  background: #000;\n  opacity: .25; }\n.fc-day-grid-event .fc-content {\n  /* force events to be one-line tall */\n  white-space: nowrap;\n  overflow: hidden; }\n.fc-day-grid-event .fc-time {\n  font-weight: bold; }\n/* resizer (cursor devices) */\n/* left resizer  */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer {\n  margin-left: -2px;\n  /* to the day cell's edge */ }\n/* right resizer */\n.fc-ltr .fc-day-grid-event.fc-allow-mouse-resize .fc-end-resizer,\n.fc-rtl .fc-day-grid-event.fc-allow-mouse-resize .fc-start-resizer {\n  margin-right: -2px;\n  /* to the day cell's edge */ }\n/* Event Limiting\r\n--------------------------------------------------------------------------------------------------*/\n/* \"more\" link that represents hidden events */\na.fc-more {\n  margin: 1px 3px;\n  font-size: .85em;\n  cursor: pointer;\n  text-decoration: none; }\na.fc-more:hover {\n  text-decoration: underline; }\n.fc-limited {\n  /* rows and cells that are hidden because of a \"more\" link */\n  display: none; }\n/* popover that appears when \"more\" link is clicked */\n.fc-day-grid .fc-row {\n  z-index: 1;\n  /* make the \"more\" popover one higher than this */ }\n.fc-more-popover {\n  z-index: 2;\n  width: 220px; }\n.fc-more-popover .fc-event-container {\n  padding: 10px; }\n/* Now Indicator\r\n--------------------------------------------------------------------------------------------------*/\n.fc-now-indicator {\n  position: absolute;\n  border: 0 solid red; }\n/* Utilities\r\n--------------------------------------------------------------------------------------------------*/\n.fc-unselectable {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }\n/*\r\nTODO: more distinction between this file and common.css\r\n*/\n/* Colors\r\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed th,\n.fc-unthemed td,\n.fc-unthemed thead,\n.fc-unthemed tbody,\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-row,\n.fc-unthemed .fc-content,\n.fc-unthemed .fc-popover,\n.fc-unthemed .fc-list-view,\n.fc-unthemed .fc-list-heading td {\n  border-color: #ddd; }\n.fc-unthemed .fc-popover {\n  background-color: #fff; }\n.fc-unthemed .fc-divider,\n.fc-unthemed .fc-popover .fc-header,\n.fc-unthemed .fc-list-heading td {\n  background: #eee; }\n.fc-unthemed .fc-popover .fc-header .fc-close {\n  color: #666; }\n.fc-unthemed td.fc-today {\n  background: #fcf8e3; }\n.fc-unthemed .fc-disabled-day {\n  background: #d7d7d7;\n  opacity: .3; }\n/* Icons (inline elements with styled text that mock arrow icons)\r\n--------------------------------------------------------------------------------------------------*/\n.fc-icon {\n  display: inline-block;\n  height: 1em;\n  line-height: 1em;\n  font-size: 1em;\n  text-align: center;\n  overflow: hidden;\n  font-family: \"Courier New\", Courier, monospace;\n  /* don't allow browser text-selection */\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n/*\r\nAcceptable font-family overrides for individual icons:\r\n\t\"Arial\", sans-serif\r\n\t\"Times New Roman\", serif\r\n\r\nNOTE: use percentage font sizes or else old IE chokes\r\n*/\n.fc-icon:after {\n  position: relative; }\n.fc-icon-left-single-arrow:after {\n  content: \"\\02039\";\n  font-weight: bold;\n  font-size: 200%;\n  top: -7%; }\n.fc-icon-right-single-arrow:after {\n  content: \"\\0203A\";\n  font-weight: bold;\n  font-size: 200%;\n  top: -7%; }\n.fc-icon-left-double-arrow:after {\n  content: \"\\000AB\";\n  font-size: 160%;\n  top: -7%; }\n.fc-icon-right-double-arrow:after {\n  content: \"\\000BB\";\n  font-size: 160%;\n  top: -7%; }\n.fc-icon-left-triangle:after {\n  content: \"\\25C4\";\n  font-size: 125%;\n  top: 3%; }\n.fc-icon-right-triangle:after {\n  content: \"\\25BA\";\n  font-size: 125%;\n  top: 3%; }\n.fc-icon-down-triangle:after {\n  content: \"\\25BC\";\n  font-size: 125%;\n  top: 2%; }\n.fc-icon-x:after {\n  content: \"\\000D7\";\n  font-size: 200%;\n  top: 6%; }\n/* Popover\r\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-popover {\n  border-width: 1px;\n  border-style: solid; }\n.fc-unthemed .fc-popover .fc-header .fc-close {\n  font-size: .9em;\n  margin-top: 2px; }\n/* List View\r\n--------------------------------------------------------------------------------------------------*/\n.fc-unthemed .fc-list-item:hover td {\n  background-color: #f5f5f5; }\n/* Colors\r\n--------------------------------------------------------------------------------------------------*/\n.ui-widget .fc-disabled-day {\n  background-image: none; }\n/* Popover\r\n--------------------------------------------------------------------------------------------------*/\n.fc-popover > .ui-widget-header + .ui-widget-content {\n  border-top: 0;\n  /* where they meet, let the header have the border */ }\n/* Global Event Styles\r\n--------------------------------------------------------------------------------------------------*/\n.ui-widget .fc-event {\n  /* overpower jqui's styles on <a> tags. TODO: more DRY */\n  color: #fff;\n  /* default TEXT color */\n  text-decoration: none;\n  /* if <a> has an href */\n  /* undo ui-widget-header bold */\n  font-weight: normal; }\n/* TimeGrid axis running down the side (for both the all-day area and the slot area)\r\n--------------------------------------------------------------------------------------------------*/\n.ui-widget td.fc-axis {\n  font-weight: normal;\n  /* overcome bold */ }\n/* TimeGrid Slats (lines that run horizontally)\r\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-slats .ui-widget-content {\n  background: none;\n  /* see through to fc-bg */ }\n.fc.fc-bootstrap3 a {\n  text-decoration: none; }\n.fc.fc-bootstrap3 a[data-goto]:hover {\n  text-decoration: underline; }\n.fc-bootstrap3 hr.fc-divider {\n  border-color: inherit; }\n.fc-bootstrap3 .fc-today.alert {\n  border-radius: 0; }\n/* Popover\r\n--------------------------------------------------------------------------------------------------*/\n.fc-bootstrap3 .fc-popover .panel-body {\n  padding: 0;\n  /* undo built-in padding */ }\n/* TimeGrid Slats (lines that run horizontally)\r\n--------------------------------------------------------------------------------------------------*/\n.fc-bootstrap3 .fc-time-grid .fc-slats table {\n  /* some themes have background color. see through to slats */\n  background: none; }\n/* Toolbar\r\n--------------------------------------------------------------------------------------------------*/\n.fc-toolbar {\n  text-align: center; }\n.fc-toolbar.fc-header-toolbar {\n  margin-bottom: 1em; }\n.fc-toolbar.fc-footer-toolbar {\n  margin-top: 1em; }\n.fc-toolbar .fc-left {\n  float: left; }\n.fc-toolbar .fc-right {\n  float: right; }\n.fc-toolbar .fc-center {\n  display: inline-block; }\n/* the things within each left/right/center section */\n.fc .fc-toolbar > * > * {\n  /* extra precedence to override button border margins */\n  float: left;\n  margin-left: .75em; }\n/* the first thing within each left/center/right section */\n.fc .fc-toolbar > * > :first-child {\n  /* extra precedence to override button border margins */\n  margin-left: 0; }\n/* title text */\n.fc-toolbar h2 {\n  margin: 0; }\n/* button layering (for border precedence) */\n.fc-toolbar button {\n  position: relative; }\n.fc-toolbar .fc-state-hover,\n.fc-toolbar .ui-state-hover {\n  z-index: 2; }\n.fc-toolbar .fc-state-down {\n  z-index: 3; }\n.fc-toolbar .fc-state-active,\n.fc-toolbar .ui-state-active {\n  z-index: 4; }\n.fc-toolbar button:focus {\n  z-index: 5; }\n/* View Structure\r\n--------------------------------------------------------------------------------------------------*/\n/* undo twitter bootstrap's box-sizing rules. normalizes positioning techniques */\n/* don't do this for the toolbar because we'll want bootstrap to style those buttons as some pt */\n.fc-view-container *,\n.fc-view-container *:before,\n.fc-view-container *:after {\n  box-sizing: content-box; }\n.fc-view,\n.fc-view > table {\n  /* so dragged elements can be above the view's main element */\n  position: relative;\n  z-index: 1; }\n/* BasicView\r\n--------------------------------------------------------------------------------------------------*/\n/* day row structure */\n.fc-basicWeek-view .fc-content-skeleton,\n.fc-basicDay-view .fc-content-skeleton {\n  /* there may be week numbers in these views, so no padding-top */\n  padding-bottom: 1em;\n  /* ensure a space at bottom of cell for user selecting/clicking */ }\n.fc-basic-view .fc-body .fc-row {\n  min-height: 4em;\n  /* ensure that all rows are at least this tall */ }\n/* a \"rigid\" row will take up a constant amount of height because content-skeleton is absolute */\n.fc-row.fc-rigid {\n  overflow: hidden; }\n.fc-row.fc-rigid .fc-content-skeleton {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n/* week and day number styling */\n.fc-day-top.fc-other-month {\n  opacity: 0.3; }\n.fc-basic-view .fc-week-number,\n.fc-basic-view .fc-day-number {\n  padding: 2px; }\n.fc-basic-view th.fc-week-number,\n.fc-basic-view th.fc-day-number {\n  padding: 0 2px;\n  /* column headers can't have as much v space */ }\n.fc-ltr .fc-basic-view .fc-day-top .fc-day-number {\n  float: right; }\n.fc-rtl .fc-basic-view .fc-day-top .fc-day-number {\n  float: left; }\n.fc-ltr .fc-basic-view .fc-day-top .fc-week-number {\n  float: left;\n  border-radius: 0 0 3px 0; }\n.fc-rtl .fc-basic-view .fc-day-top .fc-week-number {\n  float: right;\n  border-radius: 0 0 0 3px; }\n.fc-basic-view .fc-day-top .fc-week-number {\n  min-width: 1.5em;\n  text-align: center;\n  background-color: #f2f2f2;\n  color: #808080; }\n/* when week/day number have own column */\n.fc-basic-view td.fc-week-number {\n  text-align: center; }\n.fc-basic-view td.fc-week-number > * {\n  /* work around the way we do column resizing and ensure a minimum width */\n  display: inline-block;\n  min-width: 1.25em; }\n/* AgendaView all-day area\r\n--------------------------------------------------------------------------------------------------*/\n.fc-agenda-view .fc-day-grid {\n  position: relative;\n  z-index: 2;\n  /* so the \"more..\" popover will be over the time grid */ }\n.fc-agenda-view .fc-day-grid .fc-row {\n  min-height: 3em;\n  /* all-day section will never get shorter than this */ }\n.fc-agenda-view .fc-day-grid .fc-row .fc-content-skeleton {\n  padding-bottom: 1em;\n  /* give space underneath events for clicking/selecting days */ }\n/* TimeGrid axis running down the side (for both the all-day area and the slot area)\r\n--------------------------------------------------------------------------------------------------*/\n.fc .fc-axis {\n  /* .fc to overcome default cell styles */\n  vertical-align: middle;\n  padding: 0 4px;\n  white-space: nowrap; }\n.fc-ltr .fc-axis {\n  text-align: right; }\n.fc-rtl .fc-axis {\n  text-align: left; }\n/* TimeGrid Structure\r\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid-container,\n.fc-time-grid {\n  /* so slats/bg/content/etc positions get scoped within here */\n  position: relative;\n  z-index: 1; }\n.fc-time-grid {\n  min-height: 100%;\n  /* so if height setting is 'auto', .fc-bg stretches to fill height */ }\n.fc-time-grid table {\n  /* don't put outer borders on slats/bg/content/etc */\n  border: 0 hidden transparent; }\n.fc-time-grid > .fc-bg {\n  z-index: 1; }\n.fc-time-grid .fc-slats,\n.fc-time-grid > hr {\n  /* the <hr> AgendaView injects when grid is shorter than scroller */\n  position: relative;\n  z-index: 2; }\n.fc-time-grid .fc-content-col {\n  position: relative;\n  /* because now-indicator lives directly inside */ }\n.fc-time-grid .fc-content-skeleton {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  left: 0;\n  right: 0; }\n/* divs within a cell within the fc-content-skeleton */\n.fc-time-grid .fc-business-container {\n  position: relative;\n  z-index: 1; }\n.fc-time-grid .fc-bgevent-container {\n  position: relative;\n  z-index: 2; }\n.fc-time-grid .fc-highlight-container {\n  position: relative;\n  z-index: 3; }\n.fc-time-grid .fc-event-container {\n  position: relative;\n  z-index: 4; }\n.fc-time-grid .fc-now-indicator-line {\n  z-index: 5; }\n.fc-time-grid .fc-helper-container {\n  /* also is fc-event-container */\n  position: relative;\n  z-index: 6; }\n/* TimeGrid Slats (lines that run horizontally)\r\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-slats td {\n  height: 1.5em;\n  border-bottom: 0;\n  /* each cell is responsible for its top border */ }\n.fc-time-grid .fc-slats .fc-minor td {\n  border-top-style: dotted; }\n/* TimeGrid Highlighting Slots\r\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-highlight-container {\n  /* a div within a cell within the fc-highlight-skeleton */\n  position: relative;\n  /* scopes the left/right of the fc-highlight to be in the column */ }\n.fc-time-grid .fc-highlight {\n  position: absolute;\n  left: 0;\n  right: 0;\n  /* top and bottom will be in by JS */ }\n/* TimeGrid Event Containment\r\n--------------------------------------------------------------------------------------------------*/\n.fc-ltr .fc-time-grid .fc-event-container {\n  /* space on the sides of events for LTR (default) */\n  margin: 0 2.5% 0 2px; }\n.fc-rtl .fc-time-grid .fc-event-container {\n  /* space on the sides of events for RTL */\n  margin: 0 2px 0 2.5%; }\n.fc-time-grid .fc-event,\n.fc-time-grid .fc-bgevent {\n  position: absolute;\n  z-index: 1;\n  /* scope inner z-index's */ }\n.fc-time-grid .fc-bgevent {\n  /* background events always span full width */\n  left: 0;\n  right: 0; }\n/* Generic Vertical Event\r\n--------------------------------------------------------------------------------------------------*/\n.fc-v-event.fc-not-start {\n  /* events that are continuing from another day */\n  /* replace space made by the top border with padding */\n  border-top-width: 0;\n  padding-top: 1px;\n  /* remove top rounded corners */\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n.fc-v-event.fc-not-end {\n  /* replace space made by the top border with padding */\n  border-bottom-width: 0;\n  padding-bottom: 1px;\n  /* remove bottom rounded corners */\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0; }\n/* TimeGrid Event Styling\r\n----------------------------------------------------------------------------------------------------\r\nWe use the full \"fc-time-grid-event\" class instead of using descendants because the event won't\r\nbe a descendant of the grid when it is being dragged.\r\n*/\n.fc-time-grid-event {\n  overflow: hidden;\n  /* don't let the bg flow over rounded corners */ }\n.fc-time-grid-event.fc-selected {\n  /* need to allow touch resizers to extend outside event's bounding box */\n  /* common fc-selected styles hide the fc-bg, so don't need this anyway */\n  overflow: visible; }\n.fc-time-grid-event.fc-selected .fc-bg {\n  display: none;\n  /* hide semi-white background, to appear darker */ }\n.fc-time-grid-event .fc-content {\n  overflow: hidden;\n  /* for when .fc-selected */ }\n.fc-time-grid-event .fc-time,\n.fc-time-grid-event .fc-title {\n  padding: 0 1px; }\n.fc-time-grid-event .fc-time {\n  font-size: .85em;\n  white-space: nowrap; }\n/* short mode, where time and title are on the same line */\n.fc-time-grid-event.fc-short .fc-content {\n  /* don't wrap to second line (now that contents will be inline) */\n  white-space: nowrap; }\n.fc-time-grid-event.fc-short .fc-time,\n.fc-time-grid-event.fc-short .fc-title {\n  /* put the time and title on the same line */\n  display: inline-block;\n  vertical-align: top; }\n.fc-time-grid-event.fc-short .fc-time span {\n  display: none;\n  /* don't display the full time text... */ }\n.fc-time-grid-event.fc-short .fc-time:before {\n  content: attr(data-start);\n  /* ...instead, display only the start time */ }\n.fc-time-grid-event.fc-short .fc-time:after {\n  content: \"\\000A0-\\000A0\";\n  /* seperate with a dash, wrapped in nbsp's */ }\n.fc-time-grid-event.fc-short .fc-title {\n  font-size: .85em;\n  /* make the title text the same size as the time */\n  padding: 0;\n  /* undo padding from above */ }\n/* resizer (cursor device) */\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 8px;\n  overflow: hidden;\n  line-height: 8px;\n  font-size: 11px;\n  font-family: monospace;\n  text-align: center;\n  cursor: s-resize; }\n.fc-time-grid-event.fc-allow-mouse-resize .fc-resizer:after {\n  content: \"=\"; }\n/* resizer (touch device) */\n.fc-time-grid-event.fc-selected .fc-resizer {\n  /* 10x10 dot */\n  border-radius: 5px;\n  border-width: 1px;\n  width: 8px;\n  height: 8px;\n  border-style: solid;\n  border-color: inherit;\n  background: #fff;\n  /* horizontally center */\n  left: 50%;\n  margin-left: -5px;\n  /* center on the bottom edge */\n  bottom: -5px; }\n/* Now Indicator\r\n--------------------------------------------------------------------------------------------------*/\n.fc-time-grid .fc-now-indicator-line {\n  border-top-width: 1px;\n  left: 0;\n  right: 0; }\n/* arrow on axis */\n.fc-time-grid .fc-now-indicator-arrow {\n  margin-top: -5px;\n  /* vertically center on top coordinate */ }\n.fc-ltr .fc-time-grid .fc-now-indicator-arrow {\n  left: 0;\n  /* triangle pointing right... */\n  border-width: 5px 0 5px 6px;\n  border-top-color: transparent;\n  border-bottom-color: transparent; }\n.fc-rtl .fc-time-grid .fc-now-indicator-arrow {\n  right: 0;\n  /* triangle pointing left... */\n  border-width: 5px 6px 5px 0;\n  border-top-color: transparent;\n  border-bottom-color: transparent; }\n/* List View\r\n--------------------------------------------------------------------------------------------------*/\n/* possibly reusable */\n.fc-event-dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px; }\n/* view wrapper */\n.fc-rtl .fc-list-view {\n  direction: rtl;\n  /* unlike core views, leverage browser RTL */ }\n.fc-list-view {\n  border-width: 1px;\n  border-style: solid; }\n/* table resets */\n.fc .fc-list-table {\n  table-layout: auto;\n  /* for shrinkwrapping cell content */ }\n.fc-list-table td {\n  border-width: 1px 0 0;\n  padding: 8px 14px; }\n.fc-list-table tr:first-child td {\n  border-top-width: 0; }\n/* day headings with the list */\n.fc-list-heading {\n  border-bottom-width: 1px; }\n.fc-list-heading td {\n  font-weight: bold; }\n.fc-ltr .fc-list-heading-main {\n  float: left; }\n.fc-ltr .fc-list-heading-alt {\n  float: right; }\n.fc-rtl .fc-list-heading-main {\n  float: right; }\n.fc-rtl .fc-list-heading-alt {\n  float: left; }\n/* event list items */\n.fc-list-item.fc-has-url {\n  cursor: pointer;\n  /* whole row will be clickable */ }\n.fc-list-item-marker,\n.fc-list-item-time {\n  white-space: nowrap;\n  width: 1px; }\n/* make the dot closer to the event title */\n.fc-ltr .fc-list-item-marker {\n  padding-right: 0; }\n.fc-rtl .fc-list-item-marker {\n  padding-left: 0; }\n.fc-list-item-title a {\n  /* every event title cell has an <a> tag */\n  text-decoration: none;\n  color: inherit; }\n.fc-list-item-title a[href]:hover {\n  /* hover effect only on titles with hrefs */\n  text-decoration: underline; }\n/* message when no events */\n.fc-list-empty-wrap2 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n.fc-list-empty-wrap1 {\n  width: 100%;\n  height: 100%;\n  display: table; }\n.fc-list-empty {\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center; }\n.fc-unthemed .fc-list-empty {\n  /* theme will provide own background */\n  background-color: #eee; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _services_meeting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/meeting-service */ "./src/app/services/meeting-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _services_api_request_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/api-request.service */ "./src/app/services/api-request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// AoT requires an exported function for factories
function createTranslateLoader(http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: createTranslateLoader,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            providers: [_shared__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"], _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], _services_meeting_service__WEBPACK_IMPORTED_MODULE_13__["MeetingService"], _services_api_request_service__WEBPACK_IMPORTED_MODULE_15__["ApiRequestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_12__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/api-request.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/api-request.service.ts ***!
  \*************************************************/
/*! exports provided: ApiRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequestService", function() { return ApiRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiRequestService = /** @class */ (function () {
    function ApiRequestService(
        //   private appConfig:AppConfig,
        http, router, loginService
        //  private userInfoService:UserInfoService
    ) {
        this.http = http;
        this.router = router;
        this.loginService = loginService;
        this.httpHeader = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ headers: { 'Content-type': 'application/json' } });
    }
    /**
     * This is a Global place to add all the request headers for every REST calls
     */
    ApiRequestService.prototype.appendAuthHeader = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        // headers.append("app-Subject", "admin");
        //   headers.append("source", "BACKOFFICENBU");
        var token = this.loginService.getJwtToken();
        console.log(token);
        if (token !== null) {
            headers.append("Authorization", token);
        }
        return headers;
    };
    ApiRequestService.prototype.appendFormHeader = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        // let headers = new Headers({'Content-Type': 'application/json'});
        // let token = this.userInfoService.getStoredToken();
        //if (token !==null) {
        //   headers.append("Authorization", token);
        // }
        return headers;
    };
    /**
     * This is a Global place to define all the Request Headers that must be sent for every ajax call
     */
    ApiRequestService.prototype.getRequestOptions = function (requestMethod, url, urlParam, body) {
        var header = null;
        if (url === "login") {
            // var loginParams = "username=admin&password=admin";
            var loginParams = body;
            header = this.appendAuthHeader();
        }
        else {
            header = this.appendAuthHeader();
        }
        // if(!environment.production){
        //     url = url
        // }else{
        //     url  = this.appConfig.baseApiPath + url
        // }
        // debugger
        console.log(url);
        // console.log(this.appConfig.baseApiPath)
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            // headers: this.appendFormHeader(),
            headers: header,
            method: requestMethod,
            url: url,
        });
        if (urlParam) {
            options = options.merge({ params: urlParam });
        }
        if (loginParams) {
            options = options.merge({ params: loginParams });
        }
        if (body) {
            options = options.merge({ body: JSON.stringify(body) });
        }
        return options;
    };
    ApiRequestService.prototype.get = function (url, urlParams) {
        var me = this;
        var requestOptions = this.getRequestOptions(_angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Get, url, urlParams);
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Request"](requestOptions))
            .map(function (resp) {
            return resp.json();
        })
            .catch(function (error) {
            if (error.status === 401 || error.status === 403 || error.status === 0) {
                //me.router.navigate(['/login']);
                me.leaveApplication();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.post = function (url, body) {
        var _this = this;
        var me = this;
        var requestOptions = this.getRequestOptions(_angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Post, url, undefined, body);
        debugger;
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Request"](requestOptions))
            .map(function (resp) {
            if (typeof resp._body == 'string' && resp._body.includes('<html')) {
                // me.router.navigate(['/login']);
                me.leaveApplication();
            }
            if (url == 'login') {
                //resp.token = resp.headers.authorization;
                _this.token = resp.headers.get('Authorization');
                console.log(_this.token);
                //console.log(resp.token);
            }
            return resp.json();
        })
            .catch(function (error) {
            console.log("error==post===" + error);
            console.log(error);
            if (error.status === 401 || error.status === 0) {
                //me.router.navigate(['/login']);
                me.leaveApplication();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.put = function (url, body) {
        var me = this;
        var requestOptions = this.getRequestOptions(_angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Put, url, undefined, body);
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Request"](requestOptions))
            .map(function (resp) {
            if (typeof resp._body == 'string' && resp._body.includes('<html')) {
                // me.router.navigate(['/login']);
                me.leaveApplication();
            }
            return resp.json();
        })
            .catch(function (error) {
            if (error.status === 401 || error.status === 0) {
                // me.router.navigate(['/login']);
                me.leaveApplication();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.delete = function (url) {
        var me = this;
        var requestOptions = this.getRequestOptions(_angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Delete, url);
        return this.http.request(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Request"](requestOptions))
            .map(function (resp) {
            if (typeof resp._body == 'string' && resp._body.includes('<html')) {
                // me.router.navigate(['/login']);
                me.leaveApplication();
            }
            return resp.json();
        })
            .catch(function (error) {
            if (error.status === 401 || error.status === 0) {
                // me.router.navigate(['/login']);
                me.leaveApplication();
            }
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error || 'Server error');
        });
    };
    ApiRequestService.prototype.leaveApplication = function () {
        localStorage.setItem("errorMsg", "Your session has expired. Please log in again.");
        this.router.navigate(['/login']);
    };
    ApiRequestService.prototype.getServiceWithComplexObjectAsQueryString = function (url, param) {
        //  url = this.appConfig.baseApiPath + url
        console.log("url===" + url);
        var params = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                if (key != 'userId')
                    params.set(key, encodeURIComponent(val));
                else
                    params.set(key, val);
            }
        }
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.appendAuthHeader(), params: params });
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    ApiRequestService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ApiRequestService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    ApiRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]
            //  private userInfoService:UserInfoService
        ])
    ], ApiRequestService);
    return ApiRequestService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _urlConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlConstants */ "./src/app/services/urlConstants.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.caseDaSubject = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    LoginService.prototype.authUser = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getUser?userNameAndMeetingId=' + payload;
        return this.http.get(url);
    };
    LoginService.prototype.getAllMemUserNameList = function () {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getAllMemUserNameList';
        return this.http.post(url, null);
    };
    LoginService.prototype.getAllMemEmailList = function () {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getAllMemEmailList';
        return this.http.post(url, null);
    };
    LoginService.prototype.getAuthenticationToken = function (payload) {
        var _this = this;
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'token/generate-token';
        this.http.post(url, payload).subscribe(function (data) {
            _this.jwtToken = data.json().token;
            _this.caseDaSubject.next(_this.jwtToken);
        }, function (err) {
            console.log("Error occured");
            alert(err);
        });
        return this.caseDaSubject;
    };
    LoginService.prototype.getJwtToken = function () {
        return "Bearer " + this.jwtToken;
    };
    LoginService.prototype.setPreviousUrl = function (url) {
        this.previousUrl = url;
    };
    LoginService.prototype.getPreviousUrl = function () {
        return this.previousUrl;
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/meeting-service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/meeting-service.ts ***!
  \*********************************************/
/*! exports provided: MeetingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingService", function() { return MeetingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _urlConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlConstants */ "./src/app/services/urlConstants.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-request.service */ "./src/app/services/api-request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MeetingService = /** @class */ (function () {
    function MeetingService(http, loginService, apiRequest) {
        this.http = http;
        this.apiRequest = apiRequest;
        this.futureMeetingList$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.recentMeeting$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this._loginService = loginService;
    }
    //schedule meeting webserce details
    MeetingService.prototype.scheduleMeeting = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'scheduleMeeting';
        var resp = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.apiRequest.post(url, payload).subscribe(function (data) {
            resp.next(data);
        }, function (err) {
            alert("Error occured");
            alert(err);
        });
        return resp;
    };
    //future meeting list webservice details
    MeetingService.prototype.setFutureMeetimgList = function (payload) {
        var _this = this;
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getFutureMeetingByUser?email=' + payload.email;
        this.apiRequest.post(url, payload).subscribe(function (data) {
            _this.futureMeetingList$.next(data);
        }, function (err) {
            alert(err);
        });
    };
    MeetingService.prototype.getFutureMeetingListByUser = function () {
        return this.futureMeetingList$;
    };
    //recent meeting webservice
    MeetingService.prototype.setRecentMeetingByUser = function (payload) {
        var _this = this;
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getRecentMeetingByUser?email=' + payload.email;
        this.apiRequest.post(url, payload).subscribe(function (data) {
            _this.recentMeeting$.next(data);
        }, function (err) {
            alert(err);
        });
    };
    MeetingService.prototype.getRecentMeetingByUser = function () {
        return this.recentMeeting$;
    };
    MeetingService.prototype.getTotalMeetingCountByLoggedInUserId = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getTotalMeetingCountByLoggedInUserId';
        return this.http.post(url, payload);
    };
    MeetingService.prototype.downloadPdfReportFile = function () {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'downloadPdfReportFile';
        return this.http.post(url, null);
    };
    MeetingService.prototype.getPastMeetingsByUser = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getPastMeetingsByUser';
        return this.http.post(url, payload);
    };
    MeetingService.prototype.getPastMeetingsScheduledByUser = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getPastMeetingsScheduledByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
    };
    MeetingService.prototype.getMeetingsMomByUser = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getMeetingsMomByUser?loggedInUserId=' + payload.loggedInUserId;
        return this.http.post(url, payload);
    };
    MeetingService.prototype.download = function () {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'downloadFile';
        return this.http.get(url);
    };
    MeetingService.prototype.getMeetingAttendee = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getMeetingAttendee?meetingId=' + payload.meetingId;
        return this.http.post(url, payload);
    };
    MeetingService.prototype.filedownload = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'filedownload?fileName=' + payload.fileName;
        return this.http.post(url, { responseType: _angular_http__WEBPACK_IMPORTED_MODULE_1__["ResponseContentType"].Blob }).map(function (res) {
            return new Blob([res.arrayBuffer()], { type: 'application/octet-stream' });
        });
    };
    MeetingService.prototype.getAllMeetingsbyLoggedInUserId = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getAllMeetingsByLoggedInUserId?loggedInUserId=' + payload;
        return this.http.post(url, payload);
    };
    MeetingService.prototype.saveMomDetails = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'saveMomDetails';
        var resp = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.apiRequest.post(url, payload).subscribe(function (data) {
            resp.next(data);
        }, function (err) {
            console.log(err);
            resp.next(err);
        });
        return resp;
    };
    MeetingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _api_request_service__WEBPACK_IMPORTED_MODULE_5__["ApiRequestService"]])
    ], MeetingService);
    return MeetingService;
}());



/***/ }),

/***/ "./src/app/services/urlConstants.ts":
/*!******************************************!*\
  !*** ./src/app/services/urlConstants.ts ***!
  \******************************************/
/*! exports provided: baseUrl, baseUrl2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl2", function() { return baseUrl2; });
//export const baseUrl = 'http://192.168.0.101:8081/communicatorV2/';   // for without auth code
//export const authUrl = 'http://192.168.0.101:8081/';          // for auth code
//export const authUrl = 'http://192.168.0.106:8081/';    // for with auth code
//export const baseUrl = 'http://192.168.0.104:8081/communicatorV2/';    //without auth code
var baseUrl = 'http://localhost:8081/'; // for with auth code
var baseUrl2 = 'http://localhost:8081/communicatorV2/';


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _urlConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./urlConstants */ "./src/app/services/urlConstants.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _api_request_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api-request.service */ "./src/app/services/api-request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserService = /** @class */ (function () {
    function UserService(http, loginService, apiRequest) {
        this.http = http;
        this.apiRequest = apiRequest;
        this.loggedInUser$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.selectedUser$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.UserList$ = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this._loginService = loginService;
    }
    UserService.prototype.saveUserDetails = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'saveUserDetails';
        var resp = new rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.http.post(url, payload).subscribe(function (data) {
            resp.next(data);
        }, function (err) {
            alert(err);
        });
        return resp;
    };
    //to verify whether user is registered or not
    UserService.prototype.verifyUser = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'verifyUser';
        return this.http.post(url, payload);
    };
    UserService.prototype.setUserList = function (payload) {
        var _this = this;
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'memberListByUser?email=' + payload.email;
        // const resp = new BehaviorSubject<any>({});
        this.apiRequest.post(url, payload).subscribe(function (data) {
            _this.UserList$.next(data);
        }, function (err) {
            alert(err);
        });
        // return resp;
    };
    UserService.prototype.getUserList = function () {
        return this.UserList$;
    };
    UserService.prototype.setLoggedInUserDetails = function (payload) {
        var _this = this;
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'auth/login';
        this.http.post(url, payload).subscribe(function (data) {
            _this.loggedInUser$.next(data.json());
        });
    };
    UserService.prototype.getLoggedInUSerDetails = function () {
        return this.loggedInUser$;
    };
    UserService.prototype.getUserSettingsByLoggedInUser = function (payload) {
        var url = _urlConstants__WEBPACK_IMPORTED_MODULE_2__["baseUrl"] + 'getUserSettingsByLoggedInUser';
        return this.http.post(url, payload);
    };
    UserService.prototype.setSelectedUser = function (user) {
        this.selectedUser$.next(user);
    };
    UserService.prototype.getSelectedUser = function () {
        return this.selectedUser$;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"], _api_request_service__WEBPACK_IMPORTED_MODULE_7__["ApiRequestService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        debugger;
        var url = state.url;
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guard/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/guard/index.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedPipesModule, PageHeaderModule, StatModule, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/app/shared/modules/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _modules__WEBPACK_IMPORTED_MODULE_0__["StatModule"]; });

/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"]; });

/* harmony import */ var _guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard */ "./src/app/shared/guard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });






/***/ }),

/***/ "./src/app/shared/modules/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/modules/index.ts ***!
  \*****************************************/
/*! exports provided: PageHeaderModule, StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header/page-header.module */ "./src/app/shared/modules/page-header/page-header.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return _page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__["PageHeaderModule"]; });

/* harmony import */ var _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat/stat.module */ "./src/app/shared/modules/stat/stat.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return _stat_stat_module__WEBPACK_IMPORTED_MODULE_1__["StatModule"]; });





/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <h2 class=\"page-header\">\r\n            {{heading}}\r\n        </h2>\r\n        <ol class=\"breadcrumb\">\r\n            <li class=\"breadcrumb-item\">\r\n                <i class=\"fa fa-dashboard\"></i> <a href=\"Javascript:void(0)\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n            </li>\r\n            <li class=\"breadcrumb-item active\"><i class=\"fa {{icon}}\"></i> {{heading}}</li>\r\n        </ol>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
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

var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "heading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PageHeaderComponent.prototype, "icon", void 0);
    PageHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-header',
            template: __webpack_require__(/*! ./page-header.component.html */ "./src/app/shared/modules/page-header/page-header.component.html"),
            styles: [__webpack_require__(/*! ./page-header.component.scss */ "./src/app/shared/modules/page-header/page-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/page-header/page-header.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/modules/page-header/page-header.module.ts ***!
  \******************************************************************/
/*! exports provided: PageHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderModule", function() { return PageHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-header.component */ "./src/app/shared/modules/page-header/page-header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageHeaderModule = /** @class */ (function () {
    function PageHeaderModule() {
    }
    PageHeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]],
            exports: [_page_header_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderComponent"]]
        })
    ], PageHeaderModule);
    return PageHeaderModule;
}());



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-white bg-{{bgClass}}\">\r\n    <div class=\"card-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col col-xs-3\">\r\n                <i class=\"fa {{icon}} fa-5x\"></i>\r\n            </div>\r\n            <div class=\"col col-xs-9 text-right\">\r\n                <div class=\"d-block huge\">{{count}}</div>\r\n                <div class=\"d-block\">{{label}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-footer\">\r\n        <span class=\"float-left\">View Details {{data}}</span>\r\n        <a href=\"javascript:void(0)\" class=\"float-right card-inverse\">\r\n            <span ><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/modules/stat/stat.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.component.ts ***!
  \*******************************************************/
/*! exports provided: StatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComponent", function() { return StatComponent; });
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

var StatComponent = /** @class */ (function () {
    function StatComponent() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    StatComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "bgClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StatComponent.prototype, "count", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], StatComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], StatComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], StatComponent.prototype, "event", void 0);
    StatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat',
            template: __webpack_require__(/*! ./stat.component.html */ "./src/app/shared/modules/stat/stat.component.html"),
            styles: [__webpack_require__(/*! ./stat.component.scss */ "./src/app/shared/modules/stat/stat.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StatComponent);
    return StatComponent;
}());



/***/ }),

/***/ "./src/app/shared/modules/stat/stat.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/modules/stat/stat.module.ts ***!
  \****************************************************/
/*! exports provided: StatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatModule", function() { return StatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _stat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat.component */ "./src/app/shared/modules/stat/stat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatModule = /** @class */ (function () {
    function StatModule() {
    }
    StatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]],
            exports: [_stat_component__WEBPACK_IMPORTED_MODULE_2__["StatComponent"]]
        })
    ], StatModule);
    return StatModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/generic-search-all-prop.pipe.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/pipes/generic-search-all-prop.pipe.ts ***!
  \**************************************************************/
/*! exports provided: GenericSearchAllPropPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericSearchAllPropPipe", function() { return GenericSearchAllPropPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GenericSearchAllPropPipe = /** @class */ (function () {
    function GenericSearchAllPropPipe() {
    }
    GenericSearchAllPropPipe.prototype.transform = function (items, searchText) {
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
                            if (innerElem != null && typeof innerElem === 'string') {
                                return innerElem.toLowerCase().includes(searchText);
                            }
                        });
                    }
                }
            });
        });
    };
    GenericSearchAllPropPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'genericSearchAllProp'
        })
    ], GenericSearchAllPropPipe);
    return GenericSearchAllPropPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _generic_search_all_prop_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic-search-all-prop.pipe */ "./src/app/shared/pipes/generic-search-all-prop.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedPipesModule = /** @class */ (function () {
    function SharedPipesModule() {
    }
    SharedPipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_generic_search_all_prop_pipe__WEBPACK_IMPORTED_MODULE_2__["GenericSearchAllPropPipe"]],
            exports: [_generic_search_all_prop_pipe__WEBPACK_IMPORTED_MODULE_2__["GenericSearchAllPropPipe"]]
        })
    ], SharedPipesModule);
    return SharedPipesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\vrushali\Communicatorv2\Angular_workSpace_current\CommunicatorV2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map