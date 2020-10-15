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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _welcome_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/main/main.component */ "./src/app/welcome/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




const routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'home', component: _welcome_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    {
        path: 'stufftodo',
        loadChildren: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./todo-app/todo-app.module */ "./src/app/todo-app/todo-app.module.ts"))
            .then(m => m.TodoAppModule), pathMatch: 'prefix'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _welcome_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/main/main.component */ "./src/app/welcome/main/main.component.ts");
/* harmony import */ var _welcome_hello_hello_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/hello/hello.component */ "./src/app/welcome/hello/hello.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
            _welcome_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
            _welcome_hello_hello_component__WEBPACK_IMPORTED_MODULE_7__["HelloComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/welcome/hello/hello.component.css":
/*!***************************************************!*\
  !*** ./src/app/welcome/hello/hello.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding-left: 5%;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n#greeting {\r\n    margin-left: 10%;\r\n    width: 50%;\r\n    padding: 5%;\r\n    position: relative;\r\n    left: 0;\r\n    color: white;\r\n    -webkit-transform: rotateZ(0deg);\r\n            transform: rotateZ(0deg);\r\n    -webkit-animation-name: greeting;\r\n            animation-name: greeting;\r\n    -webkit-animation-duration: 1.5s;\r\n            animation-duration: 1.5s;\r\n    -webkit-animation-timing-function: ease-in;\r\n            animation-timing-function: ease-in;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes greeting {\r\n    0% { left: -180%; -webkit-transform: rotateZ(0deg); transform: rotateZ(0deg)}\r\n    100% { left: 20%; -webkit-transform: rotateZ(360deg); transform: rotateZ(360deg)}\r\n}\r\n\r\n@keyframes greeting {\r\n    0% { left: -180%; -webkit-transform: rotateZ(0deg); transform: rotateZ(0deg)}\r\n    100% { left: 20%; -webkit-transform: rotateZ(360deg); transform: rotateZ(360deg)}\r\n}\r\n\r\n#your-ascii {\r\n    left: 0;\r\n    width: 90%;\r\n    margin-bottom: 10%;\r\n    margin-top: 10%;\r\n    opacity: 1;\r\n    transition-property: opacity;\r\n    transition-duration: 2s;\r\n}\r\n\r\n#holly-number {\r\n    color: white;\r\n    margin-left: 40%;\r\n    margin-bottom: 10%;\r\n    margin-top: 10%;\r\n    top: 0;\r\n    opacity: 0;\r\n    font-size: 100px;\r\n    transition-property: opacity;\r\n    transition-duration: 15s;\r\n}\r\n\r\n#buttons {\r\n    height: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n\r\n#link-to-site {\r\n    cursor: pointer;\r\n    color: wheat;\r\n    border: 2px solid white;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 2%;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    text-decoration: none;\r\n    right: 100%;\r\n    -webkit-animation: linkToSite;\r\n            animation: linkToSite;\r\n    -webkit-animation-delay: 10s;\r\n            animation-delay: 10s;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes linkToSite {\r\n    0% { right: -100% }\r\n    100% { right: -22% }\r\n}\r\n\r\n@keyframes linkToSite {\r\n    0% { right: -100% }\r\n    100% { right: -22% }\r\n}\r\n\r\n#link-to-site > a {\r\n    padding: 100%;\r\n    border-radius: 10px;\r\n}\r\n\r\n#link-to-site > a:hover {\r\n    background-color:  rgb(92, 67, 58);\r\n}\r\n\r\n#refresh {\r\n    cursor: pointer;\r\n    color: rgb(248, 63, 7);\r\n    border: 2px solid white;\r\n    border-radius: 10px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    padding: 2%;\r\n    position: relative;\r\n    right: 100%;\r\n    -webkit-animation: refresh;\r\n            animation: refresh;\r\n    -webkit-animation-delay: 10.3s;\r\n            animation-delay: 10.3s;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes refresh {\r\n    0% { right: -100% }\r\n    100% { right: -22% }\r\n}\r\n\r\n@keyframes refresh {\r\n    0% { right: -100% }\r\n    100% { right: -22% }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    #buttons { \r\n        left: -900px;\r\n        flex-direction: row;\r\n        justify-content: space-evenly;\r\n    }\r\n    #link-to-site, #refresh {\r\n        height: 100px;\r\n    }\r\n    #your-ascii { \r\n        margin-left: 20%;\r\n        margin-top: 0;\r\n        margin-bottom: 0;\r\n    }\r\n    #holly-number {\r\n        margin-top: -98px;\r\n        margin-bottom: 0;\r\n        margin-left: 35%;\r\n        width: 50%;\r\n        padding: 5%;\r\n    }\r\n\r\n    @-webkit-keyframes linkToSite {\r\n        0% { right: -100% }\r\n        100% {right: 10% }\r\n    }\r\n\r\n    @keyframes linkToSite {\r\n        0% { right: -100% }\r\n        100% {right: 10% }\r\n    }\r\n\r\n    @-webkit-keyframes refresh {\r\n        0% { right: -100% }\r\n        100% { right: 10% }\r\n    }\r\n\r\n    @keyframes refresh {\r\n        0% { right: -100% }\r\n        100% { right: 10% }\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/welcome/hello/hello.component.html":
/*!****************************************************!*\
  !*** ./src/app/welcome/hello/hello.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <h1 id=\"greeting\">{{name}}</h1>\n  <h2 id=\"your-ascii\" #yourAscii \n    [style.display]=\"showHollyNumber ? 'none' : 'block'\" >\n  </h2>\n  <div id=\"holly-number\" \n    [style.opacity]=\"showHollyNumber ? '1' : '0'\" >{{hollyNumber}}\n  </div> \n    <div id=\"buttons\">\n      <div id=\"link-to-site\">\n        <h2 routerLink=\"/home\">Ok. Let's continue.</h2>\n      </div>\n      <div id=\"refresh\">\n        <h2 (click)=\"refresh()\"> Try another name</h2>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/welcome/hello/hello.component.ts":
/*!**************************************************!*\
  !*** ./src/app/welcome/hello/hello.component.ts ***!
  \**************************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let HelloComponent = class HelloComponent {
    constructor() {
        this.yourAsciiText = 'Did you know that your Ascii-Numerologic number is . . . . .     ';
        this.inter = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(80);
        this.showHollyNumber = false;
    }
    ngOnInit() {
        let len = this.yourAsciiText.length;
        let obs = this.inter.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(len));
        let i = 0;
        setTimeout(() => {
            obs.subscribe(() => {
                this.yourAsciiElement.nativeElement.innerHTML += this.yourAsciiText[i];
                i++;
            }, () => { }, () => {
                this.showHollyNumber = true;
            });
        }, 2500);
        obs.subscribe();
    }
    refresh() {
        window.location.reload();
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], HelloComponent.prototype, "name", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], HelloComponent.prototype, "hollyNumber", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('yourAscii'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], HelloComponent.prototype, "yourAsciiElement", void 0);
HelloComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-hello',
        template: __webpack_require__(/*! ./hello.component.html */ "./src/app/welcome/hello/hello.component.html"),
        styles: [__webpack_require__(/*! ./hello.component.css */ "./src/app/welcome/hello/hello.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HelloComponent);



/***/ }),

/***/ "./src/app/welcome/main/main.component.css":
/*!*************************************************!*\
  !*** ./src/app/welcome/main/main.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    color: white;\r\n}\r\n\r\n.title, h2, .centerized {\r\n    margin: auto;\r\n    width: 50%;\r\n    border: 3px solid green;\r\n    padding: 10px;\r\n}\r\n\r\n.int-int2 {\r\n    display: flex;\r\n    flex-direction: column;\r\n}"

/***/ }),

/***/ "./src/app/welcome/main/main.component.html":
/*!**************************************************!*\
  !*** ./src/app/welcome/main/main.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"title\">\n    <h1>Tom Ben Ner - Software Developer</h1>\n  </div>\n  \n  <div class=\"intro\">\n    <div class=\"int-int\">\n      <p>\n        Hi. My name is Tom Ben Ner. I am a software developer.\n      </p>\n    </div>\n    <div class=\"int-int2\">\n      <p>\n        I have been developing applications in the last 2 years, mainly with \n      </p>\n      <h2>Angular (versions 4 ---> 8)</h2> \n      <h2>JavaScript</h2> \n      <h2>HTML</h2>        \n      <h2>and CSS.</h2>     \n      <div id=\"acknowledgement\">\n        <h3>Have basic knowledge of server-side programming</h3> \n        <h3>(uploaded this site by myself)</h3>\n        <h3>;)</h3> \n      </div>\n    </div>\n  </div>\n\n\n  <h2 class=\"centerized\">Wanna see apps I have been making from scratch?</h2>\n  <h3 class=\"centerized\"> &#11015; </h3>\n  \n  <div id=\"apps\">\n    <a routerLink=\"/stufftodo\" >Todo application</a>\n    <a routerLink=\"/job-places\" >Help me find a job!</a>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/welcome/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/welcome/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() { }
};
MainComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! ./main.component.html */ "./src/app/welcome/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/welcome/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nbutton {\r\n    border-radius: 5px;\r\n}\r\n\r\n.form-container {\r\n    width: 50%;\r\n    height: 30%;\r\n    padding: 5%;\r\n    margin-left: 40%;\r\n}\r\n\r\napp-hello {\r\n    top: -9500px;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n    .form-container { margin-left: 10% }\r\n    #codeMaster { margin: 50% }\r\n\r\n}\r\n\r\n.form-container > div {\r\n    margin: 30px;\r\n}\r\n\r\n#codeMaster {\r\n    margin: auto;\r\n    padding: 10%;\r\n    margin-top: 0;\r\n    transition-property: margin-top;\r\n    transition-duration: 2s;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div id=\"bar\">\n  <div id=\"logo\">\n    tommybn\n  </div>\n</div> -->\n\n\n<div class=\"container\" >\n\n  <div class=\"form-container\" \n    \n    [style.display]=\"showName ? 'none' : 'block'\">\n    <div>\n      <h3>Your name please:</h3>\n    </div>\n    <div>\n      <input [(ngModel)]=\"name\"  type=\"text\" (click)=\"checkValidation()\" (keyup)=\"checkValidation()\">\n    </div>\n    <div>\n      <button [disabled]=\"!formValid\" (click)=\"calculateLetters(); showName=true\">OK, now what?</button>\n    </div>\n  </div>\n\n  <app-hello [name]=\"name\" [hollyNumber]=\"hollyNumber\" *ngIf=\"showName\"></app-hello>\n\n  <div id=\"codeMaster\" [style.marginTop]=\"showName ? '100%' : '0'\" >\n    <h2>Thanks to:</h2>\n      My greatfull thanks to EG-coder, my code master, who helped me upload the site.\n  </div>\n \n  \n</div>\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let WelcomeComponent = class WelcomeComponent {
    constructor() {
        this.formValid = false;
        this.showName = false;
        this.name = "";
        this.hollyNumber = 0;
    }
    ngOnInit() { }
    checkValidation() {
        this.formValid = this.name.length > 1 ? true : false;
    }
    calculateLetters() {
        let tempNumber = 0;
        for (let letter of this.name) {
            tempNumber += letter.charCodeAt(0);
        }
        this.hollyNumber = this.digitalRoot(tempNumber);
    }
    digitalRoot(number) {
        let strin = number.toString();
        let len = strin.length;
        if (len == 1)
            return number;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            sum += parseInt(strin[i]);
        }
        return this.digitalRoot(sum);
    }
};
WelcomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:5000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\my-website\my-website-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map