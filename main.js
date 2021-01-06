(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pritishg\Desktop\profile\profile-pofess\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-main/profile-main.component */ "fMmz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'BioData';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container", "mt-4"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-profile-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_1__["ProfileMainComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.styl']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-main/profile-main.component */ "fMmz");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_4__["ProfileMainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _profile_main_profile_main_component__WEBPACK_IMPORTED_MODULE_4__["ProfileMainComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fMmz":
/*!********************************************************!*\
  !*** ./src/app/profile-main/profile-main.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileMainComponent", function() { return ProfileMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileMainComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileMainComponent.ɵfac = function ProfileMainComponent_Factory(t) { return new (t || ProfileMainComponent)(); };
ProfileMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileMainComponent, selectors: [["app-profile-main"]], decls: 138, vars: 0, consts: [["href", "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Raleway:100", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Montserrat", "rel", "stylesheet", "type", "text/css"], [1, "rela-block", "page", "container"], [1, "rela-block", "top-bar"], [1, "caps", "name"], [1, "abs-center"], [1, "side-bar", "container"], [1, "rela-block", "caps", "side-header"], [1, "rela-block", "list-thing"], [1, "rela-block", "content-container"], [1, "rela-block", "caps", "title"], [1, "rela-block", "separator"], [1, "accordion", "container"], [1, "accordion-item", "accordion-item--default"], [1, "accordion-item-content", "container"], [1, "accordion-item"], [1, "accordion-item-content"], [1, "light"], [1, "justified"]], template: function ProfileMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pritish V. Ghate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Brookfield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bengaluru, 560066");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ghate.pritish3@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Expertise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nodejs (Express framework)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C++, Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Masters in Computer Science from IIIT Bhubaneswar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Bachelors in Information Technology from SGGS Nanded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Application Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Application UI developer turned full stack developer having 4 plus years of professional experience in software development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Technical Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Web technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Angular 7, JavaScript, Nodejs (Framework : Express JS). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Languages and other skills:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " C++, Python 3.6 (libraries used in python: numpy, pandas, xlrd, Whoosh, NLTK, Sklearn), Machine learning, Hybrid application development.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Database:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Mongo DB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Platforms:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Microsoft Windows, MAC-OS-10.10, 10.12, 10.13. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Development Tools:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Microsoft Visual Studio 2013, 2017, Microsoft Visual Studio Code, Anaconda, Pycharm. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " EFI India, [Bangalore, India] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Software Engineer : [June 2016 - Present]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " 1. Responsible for developing, maintaining the Hybrid applications and standalone web applications using technologies such as Core JavaScript, Angular and Express JS for backend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Involves developing features using Angular framework (using concepts of components, services etc). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Integrating the backend services with UI for data communication and storage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Resolving issues in UI and backend through VS code debugger in backend Nodejs services for json data storage. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Writing Angular services to integrate APIs to subscribe data needed for Front End. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Writing REST APIs in Express-js (Nodejs) to manipulate the data in json file. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " 2. Developed a POC for digital frontend UI in Angular 7. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " 3. Working as a C++ developer for implementing front end features for enabling digital printing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Involves developing UIs and backend communication.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Designing classes to support new functionality and enabling end to end UI communication.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Managing logging in the current environment.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " 4. Implemented keyword-based PDF file searching using Python. This will find out relevant PDF files based on input from user. (Python, Whoosh, PyPDF2, nltk). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " 5. Worked on Predictive Analysis of job process time in digital printing workflow using machine learning (python and required machine learning libraries, pandas, Numpy). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Visveswaraya National Institute of Technology, [Nagpur, India] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Adjunct assistant guide and developer: [July 2015 \u2013 April 2016]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Was responsible for coaching and guiding application-based Computer Science courses like Operating Systems, Computer organisation and C++. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Pica Soft Private Ltd, [Pune, India] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Jr Web developer: [June 2012 \u2013 Aug 2012]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Was responsible for developing ERP-Web Applications using pHp, Jquery, CSS, HTML. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Academic research and project work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Collaborative Distributed Communication in Heterogeneous Environments A Comprehensive Survey (Journal published in Elsevier Journal of Networks and Computer Applications): A paper on heterogeneous AdHoc Networking: - Date Published: 8 Dec 2015. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Establishing Efficient and Reliable Voice Communication in Mobile Ad-hoc networks (M.Tech. Thesis and Research work): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " > Simulated the AOMDV multipath protocol performance for voice communication in Mobile Ad-Hoc Networks. The performance comparison of multipath technology with single path in terms of packet drop, throughput and end to end delay was done with the help of Network Simulator 2, Network Animator, Visual Network Analyzer and GNUPLOT.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Low Cost Supercomputer with Cluster Computing (B.Tech. major project): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " > High performance computing cluster was developed with 8 slave nodes and 1 master node using ROCKS and BCCD Technology. The performance improvement was tested by running various compute intensive tasks on single to multiple cores of CPU with measuring unit as GFLOPS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Library Management system (Java, mySQL): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " > It was a desktop application developed for managing the library records. The information regarding library resources was efficiently maintained giving library staff their concerned privileges as per their requirements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  transition: 0.35s ease;\n}\n.rela-block[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin: auto;\n  top: ;\n  left: ;\n  right: ;\n  bottom: ;\n}\n.rela-inline[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  margin: auto;\n  top: ;\n  left: ;\n  right: ;\n  bottom: ;\n}\n.floated[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  margin: false;\n  top: ;\n  left: ;\n  right: ;\n  bottom: ;\n  float: left;\n}\n.abs-center[_ngcontent-%COMP%] {\n  display: false;\n  position: absolute;\n  margin: false;\n  top: 50%;\n  left: 50%;\n  right: false;\n  bottom: false;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  width: 88%;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: 'Open Sans';\n  font-size: 18px;\n  letter-spacing: 0px;\n  font-weight: 400;\n  line-height: 28px;\n  background: url(\"http://kingofwallpapers.com/leaves/leaves-016.jpg\") right no-repeat;\n  background-size: cover;\n}\nbody[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: false;\n  position: fixed;\n  margin: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255,255,255,0.92);\n}\n.caps[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.justified[_ngcontent-%COMP%] {\n  text-align: justify;\n}\np.light[_ngcontent-%COMP%] {\n  color: #bbbb94;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: 'Open Sans';\n  font-size: 30px;\n  letter-spacing: 5px;\n  font-weight: 600;\n  line-height: 40px;\n  color: #000;\n}\nh3[_ngcontent-%COMP%] {\n  font-family: 'Open Sans';\n  font-size: 21px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  line-height: 28px;\n  color: #000;\n}\n.page[_ngcontent-%COMP%] {\n  width: 90%;\n  max-width: 1200px;\n  margin: 80px auto;\n  background-color: #fff;\n  box-shadow: 6px 10px 28px 0px rgba(0,0,0,0.4);\n}\n.top-bar[_ngcontent-%COMP%] {\n  height: 220px;\n  background-color: #708090;\n  color: #fff;\n}\n.name[_ngcontent-%COMP%] {\n  display: false;\n  position: absolute;\n  margin: false;\n  top: false;\n  left: calc(350px + 5%);\n  right: 0;\n  bottom: 0;\n  height: 120px;\n  text-align: center;\n  font-family: 'Raleway';\n  font-size: 58px;\n  letter-spacing: 8px;\n  font-weight: 100;\n  line-height: 60px;\n}\n.name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 94%;\n}\n.side-bar[_ngcontent-%COMP%] {\n  display: false;\n  position: absolute;\n  margin: false;\n  top: 160px;\n  left: 5%;\n  right: false;\n  bottom: 0;\n  width: 350px;\n  background-color: #f7e0c1;\n  padding: 30px 30px 50px;\n}\n.mugshot[_ngcontent-%COMP%] {\n  display: false;\n  position: absolute;\n  margin: false;\n  top: 50px;\n  left: 70px;\n  right: false;\n  bottom: false;\n  height: 210px;\n  width: 210px;\n}\n.mugshot[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin: -23px;\n}\n.logo[_ngcontent-%COMP%] {\n  display: false;\n  position: absolute;\n  margin: false;\n  top: 0;\n  left: 0;\n  right: false;\n  bottom: false;\n  z-index: 100;\n  margin: 0;\n  color: #000;\n  height: 250px;\n  width: 250px;\n}\n.logo[_ngcontent-%COMP%]   .logo-svg[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  stroke: #000;\n  cursor: pointer;\n}\n.logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  display: false;\n  position: absolute;\n  margin: false;\n  top: 58%;\n  left: ;\n  right: 16%;\n  bottom: ;\n  cursor: pointer;\n  font-family: \"Montserrat\";\n  font-size: 55px;\n  letter-spacing: 0px;\n  font-weight: 400;\n  line-height: 58.333333333333336px;\n}\n.social[_ngcontent-%COMP%] {\n  padding-left: 60px;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.social[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: false;\n  position: absolute;\n  margin: false;\n  top: -4px;\n  left: 10px;\n  right: false;\n  bottom: false;\n  height: 35px;\n  width: 35px;\n  background-size: cover !important;\n}\n.social.twitter[_ngcontent-%COMP%]:before {\n  background: url(\"https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Twitter-07-128.png\") center no-repeat;\n}\n.social.pinterest[_ngcontent-%COMP%]:before {\n  background: url(\"https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_Pinterest-23-128.png\") center no-repeat;\n}\n.social.linked-in[_ngcontent-%COMP%]:before {\n  background: url(\"https://cdn3.iconfinder.com/data/icons/social-media-2026/60/Socialmedia_icons_LinkedIn-128.png\") center no-repeat;\n}\n.side-header[_ngcontent-%COMP%] {\n  font-family: 'Open Sans';\n  font-size: 18px;\n  letter-spacing: 4px;\n  font-weight: 600;\n  line-height: 28px;\n  margin: 60px auto 10px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #888;\n}\n.list-thing[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  margin-bottom: 10px;\n}\n.content-container[_ngcontent-%COMP%] {\n  margin-right: 0;\n  width: calc(95% - 350px);\n  padding: 25px 40px 50px;\n}\n.content-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 auto 25px;\n}\n.content-container[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  margin: 0 auto 5px;\n}\n.content-container[_ngcontent-%COMP%]    > p.long-margin[_ngcontent-%COMP%] {\n  margin: 0 auto 50px;\n}\n.title[_ngcontent-%COMP%] {\n  width: 80%;\n  text-align: center;\n}\n.separator[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 2px;\n  background-color: #999;\n}\n.greyed[_ngcontent-%COMP%] {\n  background-color: #ddd;\n  width: 100%;\n  max-width: 580px;\n  text-align: center;\n  font-family: 'Open Sans';\n  font-size: 18px;\n  letter-spacing: 6px;\n  font-weight: 600;\n  line-height: 28px;\n}\n@media screen and (max-width: 1150px) {\n  .name[_ngcontent-%COMP%] {\n    color: #fff;\n    font-family: 'Raleway';\n    font-size: 38px;\n    letter-spacing: 6px;\n    font-weight: 100;\n    line-height: 48px;\n  }\n}\n.accordion[_ngcontent-%COMP%]:hover   .accordion-item[_ngcontent-%COMP%]:hover   .accordion-item-content[_ngcontent-%COMP%], .accordion[_ngcontent-%COMP%]   .accordion-item--default[_ngcontent-%COMP%]   .accordion-item-content[_ngcontent-%COMP%] {\n  height: auto;\n}\n.accordion-item-content[_ngcontent-%COMP%], .accordion[_ngcontent-%COMP%]:hover   .accordion-item-content[_ngcontent-%COMP%] {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.25s;\n}\nbody[_ngcontent-%COMP%] {\n  background: #222;\n}\n.accordion[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 auto;\n  width: 100%;\n  font-family: \"PT Sans\" sans-serif;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%] {\n  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);\n  border-bottom: 1px solid #666;\n  padding: 1em;\n  color: #eee;\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]:nth-child(1) {\n  background-color: #47b4eb;\n  background-image: linear-gradient(-10deg, #47eb47, #17cf73 2em, #47b4eb);\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]:nth-child(2) {\n  background-color: #8a2eb8;\n  background-image: linear-gradient(-180deg, #477eeb, #2eb88a 2em, #477eeb);\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]:nth-child(3) {\n  background-color: #8a2eb8;\n  background-image: linear-gradient(-90deg, #47b4eb, #17cf91 2em, #47b4eb);\n}\n.accordion[_ngcontent-%COMP%]   .accordion-item[_ngcontent-%COMP%]:nth-child(4) {\n  background-color: #748f3d;\n  background-image: linear-gradient(-90deg, #81b814, #71a112 2em, #81b814);\n}\n.accordion[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media screen and (max-width: 1200px) {\n  .menu[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .menu[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1tYWluL3Byb2ZpbGUtbWFpbi5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQkE7RUFBRyxzQkFBWTtFQUFZLHNCQUFZO0FBbEJ2QztBQW9CQTtFQWxCSSxjQUFRO0VBQ1Isa0JBQVM7RUFDVCxZQUFPO0VBQ1AsS0FBSTtFQUNKLE1BQUs7RUFDTCxPQUFNO0VBQ04sUUFBTztBQUNYO0FBYUE7RUFwQkkscUJBQVE7RUFDUixrQkFBUztFQUNULFlBQU87RUFDUCxLQUFJO0VBQ0osTUFBSztFQUNMLE9BQU07RUFDTixRQUFPO0FBVVg7QUFNQTtFQXRCSSxxQkFBUTtFQUNSLGtCQUFTO0VBQ1QsYUFBTztFQUNQLEtBQUk7RUFDSixNQUFLO0VBQ0wsT0FBTTtFQUNOLFFBQU87RUFrQlAsV0FBTTtBQUVWO0FBQUE7RUExQkksY0FBUTtFQUNSLGtCQUFTO0VBQ1QsYUFBTztFQUNQLFFBQUk7RUFDSixTQUFLO0VBQ0wsWUFBTTtFQUNOLGFBQU87RUFzQlAsZ0NBQVU7RUFDVixrQkFBVztFQUNYLFVBQU07QUFRVjtBQUhBO0VBMUJJLHdCQUFZO0VBQ1osZUFBVTtFQUNWLG1CQUFlO0VBQ2YsZ0JBQVk7RUFDWixpQkFBWTtFQXdCWixvRkFBbUU7RUFDbkUsc0JBQWlCO0FBU3JCO0FBUkk7RUFDSSxXQUFRO0VBeENaLGNBQVE7RUFDUixlQUFTO0VBQ1QsU0FBTztFQUNQLE1BQUk7RUFDSixPQUFLO0VBQ0wsUUFBTTtFQUNOLFNBQU87RUFvQ0gsd0NBQWlCO0FBZ0J6QjtBQWRBO0VBQU8seUJBQWdCO0FBaUJ2QjtBQWhCQTtFQUFZLG1CQUFZO0FBbUJ4QjtBQWxCQTtFQUFTLGNBQU87QUFxQmhCO0FBcEJBO0VBdENJLHdCQUFZO0VBQ1osZUFBVTtFQUNWLG1CQUFlO0VBQ2YsZ0JBQVk7RUFDWixpQkFBWTtFQWtDeUIsV0FBTztBQTRCaEQ7QUEzQkE7RUF2Q0ksd0JBQVk7RUFDWixlQUFVO0VBQ1YsbUJBQWU7RUFD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akhBO0VBQ0ksVUFBUTtFQUNSLGNBQU87RUFDUCxXQUFNO0VBQ04saUNBQVk7QUFtSGhCO0FBbEhJO0VBQ0ksNkRBQWlCO0VBQ2pCLDZCQUFjO0VBQ2QsWUFBUTtFQUNSLFdBQU07QUFvSGQ7QUFuSFE7RUFDSSx5QkFBaUI7RUFDakIsd0VBQWlCO0FBcUg3QjtBQXBIUTtFQUNJLHlCQUFpQjtFQUNqQix5RUFBaUI7QUFzSDdCO0FBckhRO0VBQ0kseUJBQWlCO0VBQ2pCLHdFQUFpQjtBQXVIN0I7QUF0SFE7RUFDSSx5QkFBaUI7RUFDakIsd0VBQWlCO0FBd0g3QjtBQXZISTtFQUNJLFNBQU87QUF5SGY7QUF0SG9DO0VBQ2hDO0lBQ0ksV0FBTTtFQXdIWjtBQUNGO0FBdkhvQztFQUNoQztJQUNJLFVBQU07RUF5SFo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtbWFpbi9wcm9maWxlLW1haW4uY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNSVhJTlNcclxuLy9EdW1teSBWYXJpYWJsZVxyXG4keCA9IGZhbHNlO1xyXG4vLyBUaGUgdG9wLCBsZWZ0LCByaWdodCwgYW5kIGJvdHRvbSBhcmUgb3B0aW9uYWxcclxuc2V0dXAoZGlzcGxheSwgcG9zaXRpb24sIG1hcmdpbiwgdG9wID0gbnVsbCwgcmlnaHQgPSBudWxsLCBib3R0b20gPSBudWxsLCBsZWZ0ID0gbnVsbClcclxuICAgIGRpc3BsYXkgZGlzcGxheVxyXG4gICAgcG9zaXRpb24gcG9zaXRpb25cclxuICAgIG1hcmdpbiBtYXJnaW5cclxuICAgIHRvcCB0b3BcclxuICAgIGxlZnQgbGVmdFxyXG4gICAgcmlnaHQgcmlnaHRcclxuICAgIGJvdHRvbSBib3R0b21cclxuXHJcbmZvbnQoZm9udC1mYW1pbHksIGZvbnQtc2l6ZSwgbGV0dGVyLXNwYWNpbmcsIGZvbnQtd2VpZ2h0LCBsaW5lLWhlaWdodCA9IDEpXHJcbiAgICBmb250LWZhbWlseSBmb250LWZhbWlseVxyXG4gICAgZm9udC1zaXplIGZvbnQtc2l6ZVxyXG4gICAgbGV0dGVyLXNwYWNpbmcgbGV0dGVyLXNwYWNpbmdcclxuICAgIGZvbnQtd2VpZ2h0IGZvbnQtd2VpZ2h0XHJcbiAgICBsaW5lLWhlaWdodCBsaW5lLWhlaWdodFxyXG5cclxuLy8gR0VORVJBTCBGT05UUyBBTkQgQ0xBU1NFUyBBTkQgU0VUVVAgU1RVRkZcclxuKiB7Ym94LXNpemluZzogYm9yZGVyLWJveDsgdHJhbnNpdGlvbjogMC4zNXMgZWFzZTt9XHJcblxyXG4ucmVsYS1ibG9ja1xyXG4gICAgc2V0dXAoYmxvY2ssIHJlbGF0aXZlLCBhdXRvKVxyXG4ucmVsYS1pbmxpbmVcclxuICAgIHNldHVwKGlubGluZS1ibG9jaywgcmVsYXRpdmUsIGF1dG8pXHJcbi5mbG9hdGVkXHJcbiAgICBzZXR1cChpbmxpbmUtYmxvY2ssIHJlbGF0aXZlLCAkeClcclxuICAgIGZsb2F0IGxlZnRcclxuXHJcbi5hYnMtY2VudGVyXHJcbiAgICBzZXR1cCgkeCwgYWJzb2x1dGUsICR4LCA1MCUsICR4LCAkeCwgNTAlKVxyXG4gICAgdHJhbnNmb3JtIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuICAgIHdpZHRoIDg4JVxyXG5cclxuLy8gLS0tIENPTE9SUyAtLS1cclxuXHJcbi8vIC0tLSBQQUdFIFNUWUxJTkdTIC0tLVxyXG5ib2R5XHJcbiAgICBmb250KCdPcGVuIFNhbnMnLDE4cHgsMHB4LDQwMCwyOHB4KVxyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwOi8va2luZ29md2FsbHBhcGVycy5jb20vbGVhdmVzL2xlYXZlcy0wMTYuanBnJykgcmlnaHQgbm8tcmVwZWF0XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcbiAgICAmOmJlZm9yZVxyXG4gICAgICAgIGNvbnRlbnQgXCJcIlxyXG4gICAgICAgIHNldHVwKCR4LGZpeGVkLDAsMCwwLDAsMClcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIHJnYmEoMjU1LDI1NSwyNTUsMC45MilcclxuXHJcbi5jYXBzIHt0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO31cclxuLmp1c3RpZmllZCB7dGV4dC1hbGlnbjoganVzdGlmeTt9XHJcbnAubGlnaHQge2NvbG9yOiAjQkJCQjk0O31cclxuaDIge2ZvbnQoJ09wZW4gU2FucycsMzBweCw1cHgsNjAwLDQwcHgpOyBjb2xvcjogYmxhY2t9XHJcbmgzIHtmb250KCdPcGVuIFNhbnMnLDIxcHgsMXB4LDYwMCwyOHB4KTsgY29sb3I6IGJsYWNrfVxyXG5cclxuLnBhZ2VcclxuICAgIHdpZHRoIDkwJVxyXG4gICAgbWF4LXdpZHRoIDEyMDBweFxyXG4gICAgbWFyZ2luIDgwcHggYXV0b1xyXG4gICAgYmFja2dyb3VuZC1jb2xvciB3aGl0ZVxyXG4gICAgYm94LXNoYWRvdyA2cHggMTBweCAyOHB4IDBweCByZ2JhKDAsMCwwLDAuNClcclxuXHJcbi50b3AtYmFyXHJcbiAgICBoZWlnaHQgMjIwcHhcclxuICAgIGJhY2tncm91bmQtY29sb3IgIzcwODA5MFxyXG4gICAgY29sb3Igd2hpdGVcclxuXHJcbi5uYW1lXHJcbiAgICBzZXR1cCgkeCxhYnNvbHV0ZSwkeCwkeCwwLDAsY2FsYygzNTBweCArIDUlKSlcclxuICAgIGhlaWdodCAxMjBweFxyXG4gICAgdGV4dC1hbGlnbiBjZW50ZXJcclxuICAgIGZvbnQoJ1JhbGV3YXknLDU4cHgsOHB4LDEwMCw2MHB4KVxyXG4gICAgJiBkaXYge3dpZHRoOiA5NCV9XHJcblxyXG4uc2lkZS1iYXJcclxuICAgIHNldHVwKCR4LGFic29sdXRlLCR4LDE2MHB4LCR4LDAsNSUpXHJcbiAgICB3aWR0aCAzNTBweFxyXG4gICAgYmFja2dyb3VuZC1jb2xvciAjRjdFMEMxXHJcbiAgICBwYWRkaW5nIDMwcHggMzBweCA1MHB4XHJcblxyXG4ubXVnc2hvdFxyXG4gICAgc2V0dXAoJHgsYWJzb2x1dGUsJHgsNTBweCwkeCwkeCw3MHB4KVxyXG4gICAgaGVpZ2h0IDIxMHB4XHJcbiAgICB3aWR0aCAyMTBweFxyXG4gICAgJiAubG9nbyB7bWFyZ2luOiAtMjNweDt9XHJcblxyXG4ubG9nb1xyXG4gICAgJG1pZFNpemUgPSAyNTBweDsgICAgLy8gQ29udHJvbHMgb3ZlcmFsbCBzaXplXHJcbiAgICBzZXR1cCgkeCxhYnNvbHV0ZSwkeCwwLCR4LCR4LDApXHJcbiAgICB6LWluZGV4IDEwMFxyXG4gICAgbWFyZ2luIDBcclxuICAgIGNvbG9yIGJsYWNrXHJcbiAgICBoZWlnaHQgJG1pZFNpemVcclxuICAgIHdpZHRoICRtaWRTaXplXHJcbiAgICAmIC5sb2dvLXN2Z1xyXG4gICAgICAgIGhlaWdodCAxMDAlXHJcbiAgICAgICAgd2lkdGggMTAwJVxyXG4gICAgICAgIHN0cm9rZSBibGFja1xyXG4gICAgICAgIGN1cnNvciBwb2ludGVyXHJcbiAgICAmIC5sb2dvLXRleHRcclxuICAgICAgICBzZXR1cCgkeCwgYWJzb2x1dGUsICR4LCA1OCUsIDE2JSlcclxuICAgICAgICBjdXJzb3IgcG9pbnRlclxyXG4gICAgICAgIGZvbnQoXCJNb250c2VycmF0XCIsICRtaWRTaXplLzUgKyAkbWlkU2l6ZS81MCwgMHB4LCA0MDAsICRtaWRTaXplLzUgKyAkbWlkU2l6ZS8zMClcclxuXHJcbi5zb2NpYWxcclxuICAgIHBhZGRpbmctbGVmdCA2MHB4XHJcbiAgICBtYXJnaW4tYm90dG9tIDIwcHhcclxuICAgIGN1cnNvciBwb2ludGVyXHJcbiAgICAmOmJlZm9yZVxyXG4gICAgICAgIGNvbnRlbnQgXCJcIlxyXG4gICAgICAgIHNldHVwKCR4LGFic29sdXRlLCR4LC00cHgsJHgsJHgsMTBweClcclxuICAgICAgICBoZWlnaHQgMzVweFxyXG4gICAgICAgIHdpZHRoIDM1cHhcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemUgY292ZXIgIWltcG9ydGFudFxyXG4gICAgJi50d2l0dGVyOmJlZm9yZXtiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vY2RuMy5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL3NvY2lhbC1tZWRpYS0yMDI2LzYwL1NvY2lhbG1lZGlhX2ljb25zX1R3aXR0ZXItMDctMTI4LnBuZycpIGNlbnRlciBuby1yZXBlYXR9XHJcbiAgICAmLnBpbnRlcmVzdDpiZWZvcmV7YmFja2dyb3VuZDogdXJsKCdodHRwczovL2NkbjMuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9zb2NpYWwtbWVkaWEtMjAyNi82MC9Tb2NpYWxtZWRpYV9pY29uc19QaW50ZXJlc3QtMjMtMTI4LnBuZycpIGNlbnRlciBuby1yZXBlYXR9XHJcbiAgICAmLmxpbmtlZC1pbjpiZWZvcmV7YmFja2dyb3VuZDogdXJsKCdodHRwczovL2NkbjMuaWNvbmZpbmRlci5jb20vZGF0YS9pY29ucy9zb2NpYWwtbWVkaWEtMjAyNi82MC9Tb2NpYWxtZWRpYV9pY29uc19MaW5rZWRJbi0xMjgucG5nJykgY2VudGVyIG5vLXJlcGVhdDt9XHJcblxyXG4uc2lkZS1oZWFkZXJcclxuICAgIGZvbnQoJ09wZW4gU2FucycsMThweCw0cHgsNjAwLDI4cHgpXHJcbiAgICBtYXJnaW4gNjBweCBhdXRvIDEwcHhcclxuICAgIHBhZGRpbmctYm90dG9tIDVweFxyXG4gICAgYm9yZGVyLWJvdHRvbSAxcHggc29saWQgIzg4OFxyXG5cclxuLmxpc3QtdGhpbmcge3BhZGRpbmctbGVmdDogMjVweDsgbWFyZ2luLWJvdHRvbTogMTBweH1cclxuXHJcbi5jb250ZW50LWNvbnRhaW5lclxyXG4gICAgbWFyZ2luLXJpZ2h0IDBcclxuICAgIHdpZHRoIGNhbGMoOTUlIC0gMzUwcHgpXHJcbiAgICBwYWRkaW5nIDI1cHggNDBweCA1MHB4XHJcbiAgICAmID4gKiB7bWFyZ2luOiAwIGF1dG8gMjVweH1cclxuICAgICYgPiBoMyB7bWFyZ2luOiAwIGF1dG8gNXB4fVxyXG4gICAgJiA+IHAubG9uZy1tYXJnaW4ge21hcmdpbjogMCBhdXRvIDUwcHh9XHJcblxyXG4udGl0bGV7d2lkdGg6IDgwJTsgdGV4dC1hbGlnbjogY2VudGVyfVxyXG5cclxuLnNlcGFyYXRvclxyXG4gICAgd2lkdGggMjQwcHhcclxuICAgIGhlaWdodCAycHhcclxuICAgIGJhY2tncm91bmQtY29sb3IgIzk5OVxyXG5cclxuLmdyZXllZFxyXG4gICAgYmFja2dyb3VuZC1jb2xvciAjREREXHJcbiAgICB3aWR0aCAxMDAlXHJcbiAgICBtYXgtd2lkdGggNTgwcHhcclxuICAgIHRleHQtYWxpZ24gY2VudGVyXHJcbiAgICBmb250KCdPcGVuIFNhbnMnLDE4cHgsNnB4LDYwMCwyOHB4KVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KVxyXG4gICAgLm5hbWUge2NvbG9yOiB3aGl0ZTsgZm9udCgnUmFsZXdheScsMzhweCw2cHgsMTAwLDQ4cHgpfVxyXG5cclxuXHJcbi5hY2NvcmRpb246aG92ZXIgLmFjY29yZGlvbi1pdGVtOmhvdmVyIC5hY2NvcmRpb24taXRlbS1jb250ZW50LFxyXG4uYWNjb3JkaW9uIC5hY2NvcmRpb24taXRlbS0tZGVmYXVsdCAuYWNjb3JkaW9uLWl0ZW0tY29udGVudFxyXG4gICAgaGVpZ2h0IGF1dG9cclxuXHJcbi5hY2NvcmRpb24taXRlbS1jb250ZW50LFxyXG4uYWNjb3JkaW9uOmhvdmVyIC5hY2NvcmRpb24taXRlbS1jb250ZW50XHJcbiAgICBoZWlnaHQgMFxyXG4gICAgb3ZlcmZsb3cgaGlkZGVuXHJcbiAgICB0cmFuc2l0aW9uIGhlaWdodCAuMjVzXHJcblxyXG5ib2R5XHJcbiAgICBiYWNrZ3JvdW5kICMyMjJcclxuXHJcbi5hY2NvcmRpb25cclxuICAgIHBhZGRpbmcgMFxyXG4gICAgbWFyZ2luIDAgYXV0b1xyXG4gICAgd2lkdGggMTAwJVxyXG4gICAgZm9udC1mYW1pbHkgXCJQVCBTYW5zXCIgc2Fucy1zZXJpZlxyXG4gICAgLmFjY29yZGlvbi1pdGVtXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZSBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNlZWUsICNmNWY1ZjUsICNlZWUpXHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbSAxcHggc29saWQgIzY2NlxyXG4gICAgICAgIHBhZGRpbmcgMWVtXHJcbiAgICAgICAgY29sb3IgI2VlZVxyXG4gICAgICAgICY6bnRoLWNoaWxkKDEpXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgaHNsKDIwMCwgODAlLCA2MCUpXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2UgbGluZWFyLWdyYWRpZW50KC0xMGRlZywgaHNsKDEyMCwgODAlLCA2MCUpLCBoc2woMTUwLCA4MCUsIDQ1JSkgMmVtLCBoc2woMjAwLCA4MCUsIDYwJSkpXHJcbiAgICAgICAgJjpudGgtY2hpbGQoMilcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciBoc2woMjgwLCA2MCUsIDQ1JSlcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZSBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgaHNsKDIyMCwgODAlLCA2MCUpLCBoc2woMTYwLCA2MCUsIDQ1JSkgMmVtLCBoc2woMjIwLCA4MCUsIDYwJSkpXHJcbiAgICAgICAgJjpudGgtY2hpbGQoMylcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvciBoc2woMjgwLCA2MCUsIDQ1JSlcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZSBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCBoc2woMjAwLCA4MCUsIDYwJSksIGhzbCgxNjAsIDgwJSwgNDUlKSAyZW0sIGhzbCgyMDAsIDgwJSwgNjAlKSlcclxuICAgICAgICAmOm50aC1jaGlsZCg0KVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIGhzbCg4MCwgNDAlLCA0MCUpXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2UgbGluZWFyLWdyYWRpZW50KC05MGRlZywgaHNsKDgwLCA4MCUsIDQwJSksIGhzbCg4MCwgODAlLCAzNSUpIDJlbSwgaHNsKDgwLCA4MCUsIDQwJSkpXHJcbiAgICBoMVxyXG4gICAgICAgIG1hcmdpbiAwXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KVxyXG4gICAgLm1lbnVcclxuICAgICAgICB3aWR0aCAxMDAlXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpXHJcbiAgICAubWVudVxyXG4gICAgICAgIHdpZHRoIDMwJVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-main',
                templateUrl: './profile-main.component.html',
                styleUrls: ['./profile-main.component.styl']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map