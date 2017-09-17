webpackJsonp([4],{

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail__ = __webpack_require__(412);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailPageModule = (function () {
    function DetailPageModule() {
    }
    return DetailPageModule;
}());
DetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail__["a" /* DetailPage */]),
        ],
    })
], DetailPageModule);

//# sourceMappingURL=detail.module.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailPage = (function () {
    function DetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id = this.navParams.get('id');
        this.displayData = [
            {
                "id": 1,
                "song": "Hotline Bling",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            },
            {
                "id": 2,
                "song": "AAA",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            },
            {
                "id": 3,
                "song": "BB",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            },
            {
                "id": 4,
                "song": "HCCC",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            },
            {
                "id": 5,
                "song": "DDD",
                "artist": "Drake",
                "album": "./assets/img/drake.png"
            }
        ];
        this.data = this.displayData[this.id];
        for (var _i = 0, _a = this.displayData; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.id == this.id)
                this.data = this.data;
        }
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailPage');
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"C:\Users\Payton.Garland\dev\github\htn\src\pages\detail\detail.html"*/'<ion-header>\n\n	<ion-navbar>\n\n		<ion-title>\n\n			Jukebox\n\n		</ion-title>\n\n	</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<!-- <h1>Hello {{displayName}}</h1> -->\n\n\n\n	<div class=\'box\'>\n\n		<div class="blur">\n\n			<div class=\'wave -one\'></div>\n\n			<div class=\'wave -two\'></div>\n\n			<div class=\'wave -three\'></div>\n\n		</div>\n\n		<div class=\'title\' id="poof">{{data.song}}</div> <div class=\'title\' id="poofer"> {{data.artist}} </div>\n\n		<ion-img class="center" width="100" height="100" src={{data.album}}></ion-img>\n\n		<br>\n\n		<!-- <h1>Pendulum</h1> <br><img class="vert-center" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/626071/line-logo.svg"> -->\n\n	</div>\n\n	<!-- <button ion-button outline (click)="signInWithEmail()">Login</button>\n\n	<button ion-button outline (click)="signOut()">Logout</button> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Payton.Garland\dev\github\htn\src\pages\detail\detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ })

});
//# sourceMappingURL=4.js.map