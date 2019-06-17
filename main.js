(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Empire One Travel</title>\n\n</head>\n<body>\n\n  <app-header></app-header>\n  <app-featured-package></app-featured-package>\n  <app-inquire></app-inquire>\n\n\n  <script defer src=\"https://use.fontawesome.com/releases/v5.3.1/js/all.js\"></script>\n\n</body>\n</html>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_featured_package_featured_package_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/featured-package/featured-package.component */ "./src/app/components/featured-package/featured-package.component.ts");
/* harmony import */ var _components_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/latest-news/latest-news.component */ "./src/app/components/latest-news/latest-news.component.ts");
/* harmony import */ var _components_updates_updates_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/updates/updates.component */ "./src/app/components/updates/updates.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_inquire_inquire_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/inquire/inquire.component */ "./src/app/components/inquire/inquire.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_featured_package_featured_package_component__WEBPACK_IMPORTED_MODULE_5__["FeaturedPackageComponent"],
                _components_latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_6__["LatestNewsComponent"],
                _components_updates_updates_component__WEBPACK_IMPORTED_MODULE_7__["UpdatesComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_inquire_inquire_component__WEBPACK_IMPORTED_MODULE_9__["InquireComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/featured-package/featured-package.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/featured-package/featured-package.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* grid styles ------------------------------------ */\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n@media (min-width: 600px) {\r\n  main {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .info1 {\r\n     grid-column: span 2;\r\n     grid-row: span 2;\r\n  }\r\n\r\n  .info2 {\r\n    grid-column: span 2;\r\n  }\r\n\r\n  .figure1 {\r\n    grid-column: span 2;\r\n    grid-row: span 2;\r\n  }\r\n  .figure2 {\r\n    grid-column: span 2;\r\n    grid-row: span 3;\r\n  }\r\n  .figure3 {\r\n    grid-column: span 4;\r\n  }\r\n}\r\n/* flex styles -------------------------------------- */\r\n.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  text-decoration: none;\r\n}\r\n/* generic styles ----------------------------------- */\r\n.logo-img {\r\n  margin-right: 10px;\r\n  height: 60px;\r\n  transform: scaleX(-1);\r\n}\r\n.logo-text {\r\n  font-family: 'Lobster', cursive;\r\n  font-size: 2.6em;\r\n  color: #c3bab9;\r\n  text-shadow:\r\n   -1px -1px 0 #615655,\r\n    1px -1px 0 #615655,\r\n    -1px 1px 0 #615655,\r\n     1px 1px 0 #615655;\r\n}\r\n.figure-img {\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n.info1, .info2 {\r\n  padding: 40px;\r\n  background-color: #95d457;\r\n  color: white;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-bottom: 1em;\r\n}\r\np {\r\n  margin-bottom: 1em;\r\n}\r\n.info-link {\r\n  text-decoration: none;\r\n  color: #ff9900;\r\n}\r\nfigure{\r\n  cursor: pointer;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\nfigure:hover figcaption{\r\n  opacity: 1;\r\n}\r\nfigcaption{\r\n  height: 100%;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  position: absolute;\r\n    top: 0;\r\n    padding: 5rem;\r\n    color: #fff;\r\n    transition: all .4s ease;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    opacity: 0;\r\n    font-size: 14px;\r\n    line-height: 2;\r\n}\r\n.figure-info{\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\nfigure img.figure-img {\r\n  transition: all .3s ease-in-out;\r\n\r\n}\r\nfigure:hover img{\r\n  transform: rotate(2deg) scale(1.1);\r\n}\r\nfigcaption h1{\r\n  font-size: 2rem;\r\n  font-weight: bold\r\n}\r\n.custom-button{\r\n  border: 1px solid #fff;\r\n  box-sizing: border-box;\r\n  font-size: 12px;\r\n  display: table;\r\n  padding: 5px 15px;\r\n  border-radius: 3rem;\r\n  margin-top: 1rem;\r\n  transition: all .3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n.custom-button:hover {\r\n  border-color: #fff;\r\n  background: rgba(86,171,47,1);\r\n  background: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(86,171,47,1)), color-stop(100%, rgba(168,224,99,1)));\r\n  background: linear-gradient(135deg, rgba(86,171,47,1) 0%, rgba(168,224,99,1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#56ab2f', endColorstr='#a8e063', GradientType=1 );\r\n  color: #fff;\r\n  transform: translateY(-4px);\r\n  box-shadow: 0px 3px 7px #00000069;\r\n}\r\n@media screen and (max-width: 1500px){\r\n  figcaption {\r\n    padding: 1rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mZWF0dXJlZC1wYWNrYWdlL2ZlYXR1cmVkLXBhY2thZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxREFBcUQ7QUFDckQ7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0tBQ0csbUJBQW1CO0tBQ25CLGdCQUFnQjtFQUNuQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUEsdURBQXVEO0FBQ3ZEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7QUFFQSx1REFBdUQ7QUFHdkQ7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Q7Ozs7c0JBSW9CO0FBQ3RCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUdBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFJQTtFQUNFLFVBQVU7QUFDWjtBQUdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxPQUFPO0VBQ1AsTUFBTTtFQUNOLGtCQUFrQjtJQUNoQixNQUFNO0lBQ04sYUFBYTtJQUNiLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDtBQUVBO0VBQ0UsK0JBQStCOztBQUVqQztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxlQUFlO0VBQ2Y7QUFDRjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBRTdCLDZIQUE2SDtFQUk3SCxrRkFBa0Y7RUFDbEYsb0hBQW9IO0VBQ3BILFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mZWF0dXJlZC1wYWNrYWdlL2ZlYXR1cmVkLXBhY2thZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdyaWQgc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5odG1sIHtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XHJcbiAgbWFpbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLmluZm8xIHtcclxuICAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gICAgIGdyaWQtcm93OiBzcGFuIDI7XHJcbiAgfVxyXG5cclxuICAuaW5mbzIge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICB9XHJcblxyXG4gIC5maWd1cmUxIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcbiAgICBncmlkLXJvdzogc3BhbiAyO1xyXG4gIH1cclxuICAuZmlndXJlMiB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gICAgZ3JpZC1yb3c6IHNwYW4gMztcclxuICB9XHJcbiAgLmZpZ3VyZTMge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNDtcclxuICB9XHJcbn1cclxuXHJcbi8qIGZsZXggc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBnZW5lcmljIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHJcbi5sb2dvLWltZyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XHJcbn1cclxuXHJcbi5sb2dvLXRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTG9ic3RlcicsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAyLjZlbTtcclxuICBjb2xvcjogI2MzYmFiOTtcclxuICB0ZXh0LXNoYWRvdzpcclxuICAgLTFweCAtMXB4IDAgIzYxNTY1NSxcclxuICAgIDFweCAtMXB4IDAgIzYxNTY1NSxcclxuICAgIC0xcHggMXB4IDAgIzYxNTY1NSxcclxuICAgICAxcHggMXB4IDAgIzYxNTY1NTtcclxufVxyXG5cclxuLmZpZ3VyZS1pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmluZm8xLCAuaW5mbzIge1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk1ZDQ1NztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmluZm8tbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmY5OTAwO1xyXG59XHJcblxyXG5cclxuZmlndXJle1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcblxyXG5maWd1cmU6aG92ZXIgZmlnY2FwdGlvbntcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5cclxuZmlnY2FwdGlvbntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcGFkZGluZzogNXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcblxyXG5cclxuLmZpZ3VyZS1pbmZve1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbmZpZ3VyZSBpbWcuZmlndXJlLWltZyB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuXHJcbn1cclxuXHJcbmZpZ3VyZTpob3ZlciBpbWd7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZykgc2NhbGUoMS4xKTtcclxufVxyXG5cclxuZmlnY2FwdGlvbiBoMXtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG5cclxuLmN1c3RvbS1idXR0b257XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b20tYnV0dG9uOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg4NiwxNzEsNDcsMSk7XHJcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDg2LDE3MSw0NywxKSAwJSwgcmdiYSgxNjgsMjI0LDk5LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSg4NiwxNzEsNDcsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMTY4LDIyNCw5OSwxKSkpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSg4NiwxNzEsNDcsMSkgMCUsIHJnYmEoMTY4LDIyNCw5OSwxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDg2LDE3MSw0NywxKSAwJSwgcmdiYSgxNjgsMjI0LDk5LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDg2LDE3MSw0NywxKSAwJSwgcmdiYSgxNjgsMjI0LDk5LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoODYsMTcxLDQ3LDEpIDAlLCByZ2JhKDE2OCwyMjQsOTksMSkgMTAwJSk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM1NmFiMmYnLCBlbmRDb2xvcnN0cj0nI2E4ZTA2MycsIEdyYWRpZW50VHlwZT0xICk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggN3B4ICMwMDAwMDA2OTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KXtcclxuICBmaWdjYXB0aW9uIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/featured-package/featured-package.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/featured-package/featured-package.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\" id=\"featPack\">\n    <section class=\"info1\">\n      <h2>Featured Package</h2>\n      <p>Some Text goes here, some text goes here, some text goes here, some text goes here.</p>\n\n      <div class=\"custom-button\">\n          GET A QUOTE\n        </div>\n\n    </section>\n    <figure class=\"figure1\">\n       <img class=\"figure-img\" src=\"assets/img/resort.jpeg\" alt=\"a kitten\">\n      <figcaption>\n          <h1>Package 1</h1>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis veniam ipsum nihil at sed possimus obcaecati corrupti voluptatem sequi natus nesciunt asperiores repellat maxime esse et fugit, dolor nisi eius?\n          <div class=\"custom-button\">\n            GET A QUOTE\n          </div>\n\n      </figcaption>\n    </figure>\n    <figure class=\"figure2\">\n       <img class=\"figure-img\" src=\"assets/img/bohol.jpg\" alt=\"a kitten\">\n       <figcaption>\n        <h1>Package 2</h1>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis veniam ipsum nihil at sed possimus obcaecati corrupti voluptatem sequi natus nesciunt asperiores repellat maxime esse et fugit, dolor nisi eius?\n          <div class=\"custom-button\">\n            GET A QUOTE\n          </div>\n        </figcaption>\n    </figure>\n    <figure class=\"figure3\">\n       <img class=\"figure-img\" src=\"assets/img/beach.jpeg\" alt=\"a kitten\">\n       <figcaption>\n\n        <h1>Package 3</h1>\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis veniam ipsum nihil at sed possimus obcaecati corrupti voluptatem sequi natus nesciunt asperiores repellat maxime esse et fugit, dolor nisi eius?\n         <div class=\"custom-button\">\n           GET A QUOTE\n         </div>\n       </figcaption>\n    </figure>\n  </main>\n\n<!--\n\n\n<img src=\"../../../assets/img/resort.jpeg\" alt=\"\">\n\n<img src=\"../../../assets/img/trekking.jpeg\" alt=\"\">\n\n<img src=\"../../../assets/img/beach.jpeg\" alt=\"\">\n\n<img src=\"../../../assets/img/bohol.jpg\" alt=\"\">\n-->\n"

/***/ }),

/***/ "./src/app/components/featured-package/featured-package.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/featured-package/featured-package.component.ts ***!
  \***************************************************************************/
/*! exports provided: FeaturedPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedPackageComponent", function() { return FeaturedPackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeaturedPackageComponent = /** @class */ (function () {
    function FeaturedPackageComponent() {
    }
    FeaturedPackageComponent.prototype.ngOnInit = function () {
    };
    FeaturedPackageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-featured-package',
            template: __webpack_require__(/*! ./featured-package.component.html */ "./src/app/components/featured-package/featured-package.component.html"),
            styles: [__webpack_require__(/*! ./featured-package.component.css */ "./src/app/components/featured-package/featured-package.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturedPackageComponent);
    return FeaturedPackageComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n\r\n.navbar.is-spaced{\r\n  background: none;\r\n  padding: 1rem 0;\r\n  display: flex;\r\n}\r\n\r\n\r\n.navbar-burger{\r\n  color: #fff;\r\n}\r\n\r\n\r\n.navbar-item img {\r\n  max-height: 4rem;\r\n}\r\n\r\n\r\na.navbar-item, .navbar-link{\r\n  color: #fff;\r\n  text-transform: uppercase;\r\n  font-size: 0.8rem;\r\n  font-weight: bold;\r\n}\r\n\r\n\r\n.navbar-dropdown{\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n\r\n.navbar-link.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, a.navbar-item.is-active, a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover {\r\n  background-color: transparent;\r\n    color: #b0d236;\r\n}\r\n\r\n\r\n.navbar-brand a.navbar-item:hover{\r\n  background: none;\r\n}\r\n\r\n\r\n.navbar-item.has-dropdown.is-active .navbar-link, .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link{\r\n  background: none;\r\n}\r\n\r\n\r\n.hero{\r\n  position: relative;\r\n  z-index: 0;\r\n  overflow: hidden;\r\n  background: #000;\r\n}\r\n\r\n\r\nvideo{\r\n  position: absolute;\r\n  width: auto;\r\n  height: auto;\r\n  min-width: 100%;\r\n  min-height: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n\r\n.header-pattern{\r\n  height: 100%;\r\n  width: 100%;\r\n  background-image: url('patter-bg.png');\r\n  background-repeat: repeat;\r\n  position: absolute;\r\n  z-index: 3;\r\n}\r\n\r\n\r\n.hero-body .container{\r\n  z-index: 5;\r\n}\r\n\r\n\r\nh1.title{\r\n  font-size: 4rem;\r\n}\r\n\r\n\r\n.button.is-success {\r\n  background-color: #23d160;\r\n    border-color: transparent;\r\n    font-size: 13px;\r\n    color: #fff;\r\n    border-radius: 3rem;\r\n    padding: 20px 32px;\r\n    margin-right: 1rem;\r\n    background: rgba(86,171,47,1);\r\nbackground: -webkit-gradient(left top, right bottom, color-stop(0%, rgba(86,171,47,1)), color-stop(100%, rgba(168,224,99,1)));\r\nbackground: linear-gradient(135deg, rgba(86,171,47,1) 0%, rgba(168,224,99,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#56ab2f', endColorstr='#a8e063', GradientType=1 );\r\n}\r\n\r\n\r\n.navbar-link:not(.is-arrowless)::after {\r\n  border-color: #b0d236;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1024px){\r\n  video {\r\n    display: none;\r\n  }\r\n  .hero{\r\n    background-image: url('header-alt-bg.jfif');\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7OztBQUNBO0VBQ0UsV0FBVztBQUNiOzs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7OztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7O0FBQ0E7RUFDRSw2QkFBNkI7SUFDM0IsY0FBYztBQUNsQjs7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHNDQUEwRDtFQUMxRCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7OztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBQ0E7RUFDRSx5QkFBeUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBRWpDLDZIQUE2SDtBQUk3SCxrRkFBa0Y7QUFDbEYsb0hBQW9IO0FBQ3BIOzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7O0FBR0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsMkNBQStEO0lBQy9ELDRCQUE0QjtJQUM1QixzQkFBc0I7RUFDeEI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5cclxuLm5hdmJhci5pcy1zcGFjZWR7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubmF2YmFyLWJ1cmdlcntcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4ubmF2YmFyLWl0ZW0gaW1nIHtcclxuICBtYXgtaGVpZ2h0OiA0cmVtO1xyXG59XHJcbmEubmF2YmFyLWl0ZW0sIC5uYXZiYXItbGlua3tcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5uYXZiYXItZHJvcGRvd257XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLm5hdmJhci1saW5rLmlzLWFjdGl2ZSwgLm5hdmJhci1saW5rOmZvY3VzLCAubmF2YmFyLWxpbms6Zm9jdXMtd2l0aGluLCAubmF2YmFyLWxpbms6aG92ZXIsIGEubmF2YmFyLWl0ZW0uaXMtYWN0aXZlLCBhLm5hdmJhci1pdGVtOmZvY3VzLCBhLm5hdmJhci1pdGVtOmZvY3VzLXdpdGhpbiwgYS5uYXZiYXItaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogI2IwZDIzNjtcclxufVxyXG4ubmF2YmFyLWJyYW5kIGEubmF2YmFyLWl0ZW06aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG4ubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWFjdGl2ZSAubmF2YmFyLWxpbmssIC5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd246Zm9jdXMgLm5hdmJhci1saW5rLCAubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duOmhvdmVyIC5uYXZiYXItbGlua3tcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcbi5oZXJve1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG52aWRlb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuLmhlYWRlci1wYXR0ZXJue1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGF0dGVyLWJnLnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDM7XHJcbn1cclxuLmhlcm8tYm9keSAuY29udGFpbmVye1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuaDEudGl0bGV7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcbi5idXR0b24uaXMtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDE2MDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgICBwYWRkaW5nOiAyMHB4IDMycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDg2LDE3MSw0NywxKTtcclxuYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDg2LDE3MSw0NywxKSAwJSwgcmdiYSgxNjgsMjI0LDk5LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoODYsMTcxLDQ3LDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDE2OCwyMjQsOTksMSkpKTtcclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDg2LDE3MSw0NywxKSAwJSwgcmdiYSgxNjgsMjI0LDk5LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDg2LDE3MSw0NywxKSAwJSwgcmdiYSgxNjgsMjI0LDk5LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSg4NiwxNzEsNDcsMSkgMCUsIHJnYmEoMTY4LDIyNCw5OSwxKSAxMDAlKTtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg4NiwxNzEsNDcsMSkgMCUsIHJnYmEoMTY4LDIyNCw5OSwxKSAxMDAlKTtcclxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM1NmFiMmYnLCBlbmRDb2xvcnN0cj0nI2E4ZTA2MycsIEdyYWRpZW50VHlwZT0xICk7XHJcbn1cclxuXHJcbi5uYXZiYXItbGluazpub3QoLmlzLWFycm93bGVzcyk6OmFmdGVyIHtcclxuICBib3JkZXItY29sb3I6ICNiMGQyMzY7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG4gIHZpZGVvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5oZXJve1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2hlYWRlci1hbHQtYmcuamZpZicpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav class=\"navbar is-spaced\" role=\"navigation\" aria-label=\"main navigation\">\n        <div class=\"navbar-brand\">\n          <a class=\"navbar-item\" href=\"https://bulma.io\">\n            <img src=\"assets/img/EOT-logo.png\" alt=\"Bulma: Free, open source, & modern CSS framework based on Flexbox\">\n          </a>\n        </div>\n\n        <div class=\"navbar-end navbar-menu navbar-end\">\n          <a href=\"#\" class=\"navbar-item\">Home</a>\n          <a href=\"#\" class=\"navbar-item\">Promos</a>\n          <div class=\"navbar-item has-dropdown is-hoverable\">\n                <a class=\"navbar-link\">\n                  Services\n                </a>\n\n                <div class=\"navbar-dropdown\">\n                  <a class=\"navbar-item\">\n                    Overview\n                  </a>\n                  <a class=\"navbar-item\">\n                    Elements\n                  </a>\n                  <a class=\"navbar-item\">\n                    Components\n                  </a>\n                  <hr class=\"navbar-divider\">\n                </div>\n          </div>\n          <a href=\"#\" class=\"navbar-item\">About us</a>\n          <a href=\"#\" class=\"navbar-item\">Blog</a>\n          <a href=\"#\" class=\"navbar-item\">Contact Us</a>\n\n        <a class=\"button is-success\">416-477-1997</a>\n        </div>\n\n          <a role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\">\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n            <span aria-hidden=\"true\"></span>\n          </a>\n    </nav>\n  </div>\n\n  <section class=\"hero is-success is-fullheight\">\n  <div class=\"header-pattern\">\n  </div>\n  <video id=\"video\" loop muted=\"muted\" autoplay=\"true\" oncanplay=\"this.muted=true\">\n    <source src=\"assets/videos/header-bg.mp4\" type=\"video/mp4\">\n    <source src=\"assets/videos/header-bg.ogg\" type=\"video/ogg\">\n  </video>\n  <div class=\"hero-body\">\n      <div class=\"container\">\n\n          <div class=\"columns\">\n              <div class=\"column\">\n\n\n        <h1 class=\"title\">\n            Experience Philippines\n        </h1>\n        <h3 class=\"subtitle\">\n            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.\n        </h3>\n        <a href=\"#featPack\" class=\"button is-success\">LEARN MORE</a>\n        <a class=\"button is-success\" style=\"background: transparent; border: 1px solid;\">SEARCH FLIGHTS</a>\n              </div>\n              <div class=\"column\">\n              </div>\n          </div>\n      </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.navEl = document.querySelector('.navbar');
        this.headerEl = document.querySelector('.hero');
        var test = this.headerEl.style.marginTop = "-" + (this.navEl.offsetHeight + 28) + "px";
        this.toggleNav();
    };
    HeaderComponent.prototype.toggleNav = function () {
        document.addEventListener('DOMContentLoaded', function () {
            // Get all "navbar-burger" elements
            var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {
                // Add a click event on each of them
                $navbarBurgers.forEach(function (el) {
                    el.addEventListener('click', function () {
                        // Get the target from the "data-target" attribute
                        var target = el.dataset.target;
                        var $target = document.getElementById(target);
                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');
                    });
                });
            }
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/inquire/inquire.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/inquire/inquire.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".columns .column:first-child{\r\n    padding: 2rem;\r\n    box-shadow: 0px 7px 17px #0000001c;\r\n}\r\n\r\nh1{\r\n  font-size: 3rem;\r\n  font-weight: bold;\r\n  color: #95d457;\r\n}\r\n\r\nh2{\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n}\r\n\r\np{\r\n  margin-top: 2rem;\r\n  line-height: 23px;\r\n}\r\n\r\n.columns .column:nth-child(2){\r\n  height: 600px;\r\n  width: 300px;\r\n  background-image: url('inquire-right.jfif');\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnF1aXJlL2lucXVpcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osMkNBQStEO0FBQ2pFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbnF1aXJlL2lucXVpcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW5zIC5jb2x1bW46Zmlyc3QtY2hpbGR7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDdweCAxN3B4ICMwMDAwMDAxYztcclxufVxyXG5cclxuaDF7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjOTVkNDU3O1xyXG59XHJcbmgye1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxufVxyXG5cclxuLmNvbHVtbnMgLmNvbHVtbjpudGgtY2hpbGQoMil7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2lucXVpcmUtcmlnaHQuamZpZicpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/inquire/inquire.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/inquire/inquire.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-featured is-fullheight\">\n    <div class=\"hero-body\">\n        <div class=\"container\">\n\n            <div class=\"columns\">\n                <div class=\"column\">\n                  <h1>Inquire Today</h1>\n                  <h2>let us make your dream a reality</h2>\n                  <p>Specializing in routes to and from the Philippines, we want our customers to have the best experience from picking up the tickets at the airport, to landing on the sunny beaches and enjoying a once in a lifetime vacation.\n\n                    </p>\n                </div>\n                  <div class=\"column\">\n\n                  </div>\n            </div>\n        </div>\n      </div>\n  </section>\n"

/***/ }),

/***/ "./src/app/components/inquire/inquire.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/inquire/inquire.component.ts ***!
  \*********************************************************/
/*! exports provided: InquireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InquireComponent", function() { return InquireComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InquireComponent = /** @class */ (function () {
    function InquireComponent() {
    }
    InquireComponent.prototype.ngOnInit = function () {
    };
    InquireComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inquire',
            template: __webpack_require__(/*! ./inquire.component.html */ "./src/app/components/inquire/inquire.component.html"),
            styles: [__webpack_require__(/*! ./inquire.component.css */ "./src/app/components/inquire/inquire.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InquireComponent);
    return InquireComponent;
}());



/***/ }),

/***/ "./src/app/components/latest-news/latest-news.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/latest-news/latest-news.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF0ZXN0LW5ld3MvbGF0ZXN0LW5ld3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/latest-news/latest-news.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/latest-news/latest-news.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/latest-news/latest-news.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/latest-news/latest-news.component.ts ***!
  \*****************************************************************/
/*! exports provided: LatestNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestNewsComponent", function() { return LatestNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LatestNewsComponent = /** @class */ (function () {
    function LatestNewsComponent() {
    }
    LatestNewsComponent.prototype.ngOnInit = function () {
    };
    LatestNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-latest-news',
            template: __webpack_require__(/*! ./latest-news.component.html */ "./src/app/components/latest-news/latest-news.component.html"),
            styles: [__webpack_require__(/*! ./latest-news.component.css */ "./src/app/components/latest-news/latest-news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LatestNewsComponent);
    return LatestNewsComponent;
}());



/***/ }),

/***/ "./src/app/components/updates/updates.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/updates/updates.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlcy91cGRhdGVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/updates/updates.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/updates/updates.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  updates works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/updates/updates.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/updates/updates.component.ts ***!
  \*********************************************************/
/*! exports provided: UpdatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatesComponent", function() { return UpdatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpdatesComponent = /** @class */ (function () {
    function UpdatesComponent() {
    }
    UpdatesComponent.prototype.ngOnInit = function () {
    };
    UpdatesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-updates',
            template: __webpack_require__(/*! ./updates.component.html */ "./src/app/components/updates/updates.component.html"),
            styles: [__webpack_require__(/*! ./updates.component.css */ "./src/app/components/updates/updates.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpdatesComponent);
    return UpdatesComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\JohnParungao\Desktop\jorex\empireOne\EmpireOneTravel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map