(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gandehua/hw8/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "151J":
/*!*******************************************************!*\
  !*** ./src/app/components/detail/detail.component.ts ***!
  \*******************************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/httpservice.service */ "Cnom");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../video-player/video-player.component */ "Vsu4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cast_cast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cast/cast.component */ "Obgv");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reviews/reviews.component */ "srbx");
/* harmony import */ var _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../multi-carousel/multi-carousel.component */ "CrP6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");












const _c0 = ["selfClosingAlert"];
function DetailComponent_span_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DetailComponent_span_18_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](g_r3["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r4 != ctx_r0.genres.length - 1);
} }
function DetailComponent_span_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DetailComponent_span_21_span_2_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](g_r6["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r7 != ctx_r1.spoken_languages.length - 1);
} }
function DetailComponent_ngb_alert_26_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ngb-alert", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closed", function DetailComponent_ngb_alert_26_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.successMessage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r2.alert_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r2.successMessage, " ");
} }
class DetailComponent {
    constructor(route, httpService, storage) {
        this.route = route;
        this.httpService = httpService;
        this.storage = storage;
        this.spoken_languages = [];
        this.genres = [];
        this.successMessage = '';
        this.recommend_movies = 'recommended';
        this.recommend_movies_title = 'Recommended Movies';
        this.similar_movies = 'similar';
        this.similar_movies_title = 'Similar Movies';
        this.use = true;
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    updateVideoId(value) {
        this.video_key = value;
    }
    ngOnInit() {
        // this.route.url.subscribe((data)=>{
        //   console.log('route: '+ data[2]);
        //
        // });
        this.route.url.subscribe((data) => {
            console.log('route: ' + data);
            let id = data[2];
            let category = data[1];
            console.log(id);
            console.log(category);
            this.id = id;
            this.category = category;
            this.getData(id, category);
            var mylist = this.storage.get('mylist');
            if (mylist == null || mylist.length == 0) {
                this.btn_content = 'Add to Watchlist';
                this.isAdd = false;
            }
            else {
                var flag = false;
                for (var i = 0; i < mylist.length; i++) {
                    if (mylist[i].indexOf(id) >= 0) {
                        this.btn_content = 'Remove from Watchlist';
                        this.isAdd = true;
                        flag = true;
                        break;
                    }
                }
                if (!flag) {
                    this.isAdd = false;
                    this.btn_content = 'Add to Watchlist';
                }
            }
            this._success.subscribe(message => this.successMessage = message);
            this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(5000)).subscribe(() => {
                if (this.selfClosingAlert) {
                    this.selfClosingAlert.close();
                }
            });
            // this.getData(id,category);
        });
    }
    set() {
        var mylist = this.storage.get('mylist');
        if (mylist == null) {
            mylist = new Array();
        }
        if (this.isAdd) {
            // var idx = mylist.indexOf(this.category+','+this.id);
            var idx = 0;
            for (var i = 0; i < mylist.length; i++) {
                if (mylist[i].indexOf(this.id) >= 0) {
                    idx = i;
                    break;
                }
            }
            mylist.splice(idx, 1);
            this.storage.set('mylist', mylist);
            this.alert_type = 'danger';
            this._success.next('Removed from watchlist.');
            this.btn_content = 'Add to Watchlist';
            this.isAdd = false;
        }
        else {
            var cur_img = this.storage.get('cur_img');
            mylist.push(this.id + ',' + this.category + ',' + cur_img);
            this.storage.set('mylist', mylist);
            this.alert_type = 'success';
            this._success.next('Added to watchlist.');
            this.btn_content = 'Remove from Watchlist';
            this.isAdd = true;
        }
    }
    getData(id, category) {
        let url = 'https://csci571-309912.wm.r.appspot.com/apis/detail_info?id=' + id + '&category=' + category;
        this.httpService.axiosGet(url).then((data) => {
            // tslint:disable-next-line:no-unused-expression
            // @ts-ignore
            let res = data.data;
            console.log(res);
            this.title = res.title;
            this.spoken_languages = res.spoken_languages;
            this.genres = res.genres;
            if (category == 'movie') {
                this.runtime = Math.floor(res.runtime / 60) + 'hrs ' + res.runtime % 60 + 'mins';
                this.date = res.release_date.substring(0, 4);
            }
            else {
                this.runtime = res.episode_run_time[0] + 'mins';
                this.date = res.first_air_date.substring(0, 4);
            }
            this.tagline = res.tagline;
            this.vote_average = res.vote_average;
            this.overview = res.overview;
            this.share_content = encodeURIComponent("Watch " + this.title + "\n https://www.youtube.com/watch?v=" + this.video_key + "\n" +
                "#USC #CSCI571 #FightOn");
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_4__["HttpserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
DetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], viewQuery: function DetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 51, vars: 26, consts: [[1, "container", 2, "margin-top", "30px"], [1, "row"], [1, "col-sm-6"], [2, "min-height", "400px", 3, "id", "category", "toFather"], [2, "font-style", "oblique"], [1, "d-flex"], [1, "mr-2"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-primary", 2, "font-weight", "normal", 3, "click"], ["style", "margin-top: 10px;", 3, "type", "closed", 4, "ngIf"], [2, "margin-top", "20px"], [2, "font-size", "16px"], [2, "font-size", "13px"], ["type", "button", 1, "btn", "mr-2", "btn-1"], ["target", "_blank", "data-size", "large", "data-text", "custom share text", "data-url", "https://dev.twitter.com/web/tweet-button", "data-hashtags", "aa,demo", "data-via", "twitterdev", "data-related", "twitterapi,twitter", 1, "twitter-share-button", 3, "href"], ["src", "assets/twitter.png", 2, "width", "100%", "height", "100%"], ["data-href", "https://developers.facebook.com/docs/plugins/", "data-layout", "button", "data-size", "small", 1, "fb-share-button"], ["target", "_blank", 1, "fb-xfbml-parse-ignore", 3, "href"], ["src", "assets/facebook.png", 2, "width", "100%", "height", "100%"], [3, "id", "category"], [3, "sid", "category", "direction", "title"], [4, "ngIf"], [2, "margin-top", "10px", 3, "type", "closed"], ["selfClosingAlert", ""]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "app-video-player", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("toFather", function DetailComponent_Template_app_video_player_toFather_3_listener($event) { return ctx.updateVideoId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Genres: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DetailComponent_span_18_Template, 3, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Spoken Languages: \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DetailComponent_span_21_Template, 3, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_24_listener() { return ctx.set(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, DetailComponent_ngb_alert_26_Template, 3, 2, "ngb-alert", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "app-cast", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "app-reviews", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "app-multi-carousel", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "app-multi-carousel", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.id)("category", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.tagline);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.date, " \u00A0|");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2605 ", ctx.vote_average, "\u00A0 |");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.runtime);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.spoken_languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.btn_content);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/intent/tweet?text=", ctx.share_content, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=", ctx.video_key, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.id)("category", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.id)("category", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sid", ctx.id)("category", ctx.category)("direction", ctx.recommend_movies)("title", ctx.recommend_movies_title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sid", ctx.id)("category", ctx.category)("direction", ctx.similar_movies)("title", ctx.similar_movies_title);
    } }, directives: [_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_6__["VideoPlayerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _cast_cast_component__WEBPACK_IMPORTED_MODULE_8__["CastComponent"], _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_9__["ReviewsComponent"], _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_10__["MultiCarouselComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbAlert"]], styles: ["h2[_ngcontent-%COMP%], div[_ngcontent-%COMP%]{\n  color: white;\n}\n\ndiv[_ngcontent-%COMP%]{\n  font-weight: lighter;\n}\n\n.p-2[_ngcontent-%COMP%]{\n  padding: 0;\n}\n\n.describe[_ngcontent-%COMP%]{\n  font-size: 10px;\n}\n\n.btn-1[_ngcontent-%COMP%]{\n  padding: 0;\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6ImRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIsZGl2e1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmRpdntcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4ucC0ye1xuICBwYWRkaW5nOiAwO1xufVxuXG5cbi5kZXNjcmliZXtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5cbi5idG4tMXtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "6DPj":
/*!*******************************************************!*\
  !*** ./src/app/components/mylist/mylist.component.ts ***!
  \*******************************************************/
/*! exports provided: MylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistComponent", function() { return MylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MylistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.content);
} }
function MylistComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MylistComponent_div_2_div_4_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.jump(item_r5["id"], item_r5["category"], item_r5["img"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5["img"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MylistComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_div_2_div_4_Template, 5, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
function MylistComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.content);
} }
function MylistComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MylistComponent_div_5_div_3_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.jump(item_r10["id"], item_r10["category"], item_r10["img"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r10["img"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MylistComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MylistComponent_div_5_div_3_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.items);
} }
class MylistComponent {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.notExist = true;
        this.content = 'No items found in Watchlist.';
        this.items = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        var mylist = this.storage.get('mylist');
        if (mylist != null && mylist.length != 0) {
            console.log('mylist.length: ' + mylist.length);
            this.notExist = false;
            for (var i = mylist.length - 1; i >= 0; i--) {
                var cur_arr = mylist[i].split(',');
                var obj = {};
                // @ts-ignore
                obj['id'] = cur_arr[0];
                // @ts-ignore
                obj['category'] = cur_arr[1];
                // @ts-ignore
                obj['img'] = cur_arr[2];
                // @ts-ignore
                this.items.push(obj);
            }
        }
        else {
            console.log('not exist');
            this.notExist = true;
        }
    }
    jump(id, category, img) {
        var continue_list = this.storage.get('continue');
        var data = id + ',' + category + ',' + img;
        if (continue_list == null) {
            continue_list = new Array();
        }
        if (continue_list.indexOf(data) >= 0) {
            var idx = continue_list.indexOf(data);
            continue_list.splice(idx, 1);
        }
        if (continue_list.length > 24) {
            continue_list.splice(0, 1);
        }
        continue_list.push(data);
        this.storage.set('continue', continue_list);
        this.storage.set('cur_img', img);
        console.log('reload: ' + id + ' ' + category);
        var url = '/watch/' + category + '/' + id;
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
            this.router.navigate([url]);
        });
    }
}
MylistComponent.ɵfac = function MylistComponent_Factory(t) { return new (t || MylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MylistComponent, selectors: [["app-mylist"]], decls: 6, vars: 4, consts: [[1, "container", "d-none", "d-md-block", 2, "min-height", "500px", "margin-top", "10px"], ["style", "color: white; margin-top: 50px;", 4, "ngIf"], [4, "ngIf"], [1, "d-lg-none", 2, "min-height", "500px", "margin-top", "10px"], [2, "color", "white", "margin-top", "50px"], [2, "text-align", "center"], [2, "color", "white"], [1, "row", 2, "margin-top", "30px", "width", "100%"], ["class", "col-sm-2", "style", "margin-bottom: 50px;", 4, "ngFor", "ngForOf"], [1, "col-sm-2", 2, "margin-bottom", "50px"], [1, "card", "card-1"], [3, "click"], [1, "picsum-img-wrapper"], ["alt", "", 1, "image", 3, "src"], [1, "row", "justify-content-center"]], template: function MylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MylistComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MylistComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MylistComponent_div_4_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MylistComponent_div_5_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.notExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.notExist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".image[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n\n.card-1[_ngcontent-%COMP%]{\n  width: 150px; border: none;\n}\n\n\n.card-1[_ngcontent-%COMP%]:hover{\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTtFQUNFLFlBQVksRUFBRSxZQUFZO0FBQzVCOzs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoibXlsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5jYXJkLTF7XG4gIHdpZHRoOiAxNTBweDsgYm9yZGVyOiBub25lO1xufVxuLmNhcmQtMTpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });


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

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/httpservice.service */ "Cnom");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../carousel/carousel.component */ "qUJ1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../multi-carousel/multi-carousel.component */ "CrP6");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");








const _c0 = ["carousel3"];
const _c1 = ["carousel4"];
function HomeComponent_div_2_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_2_5_ng_template_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.jump(item_r4["id"], item_r4["category"], item_r4["img"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r4["img"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_2_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_2_5_ng_template_0_Template, 5, 1, "ng-template", 8);
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-carousel", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_2_5_Template, 1, 0, undefined, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 5000)("pauseOnHover", true)("pauseOnFocus", true)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items_mobile);
} }
function HomeComponent_div_3_6_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_3_6_ng_template_0_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const singleId_r17 = ctx.$implicit; const j_r18 = ctx.index; const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.jump(singleId_r17, ctx_r19.categories[i_r14][j_r18], ctx_r19.imgs[i_r14][j_r18]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r18 = ctx.index;
    const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r16.imgs[i_r14][j_r18], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_3_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_3_6_ng_template_0_div_2_Template, 4, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", id_r13);
} }
function HomeComponent_div_3_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_3_6_ng_template_0_Template, 3, 1, "ng-template", 8);
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-carousel", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_3_6_Template, 1, 0, undefined, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 5000)("pauseOnHover", true)("pauseOnFocus", true)("showNavigationIndicators", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.ids);
} }
class HomeComponent {
    constructor(httpService, router, storage) {
        this.httpService = httpService;
        this.router = router;
        this.storage = storage;
        this.popular_movies = 'popular_movies';
        this.top_rated_movies = 'top_rated_movies';
        this.trending_movies = 'trending_movies';
        this.popular_tv = 'popular_tv';
        this.top_rated_tv = 'top_rated_tv';
        this.trending_tv = 'trending_tv';
        this.title1 = 'Popular Movies';
        this.title2 = 'Top Rated Movies';
        this.title3 = 'Trending Movies';
        this.title4 = 'Popular TV Shows';
        this.title5 = 'Top Rated TV Shows';
        this.title6 = 'Trending TV Shows';
        this.movie = 'movie';
        this.tv = 'tv';
        this.ismobile = false;
        this.items_mobile = [];
        // items:object[][] = [];
        this.ids = [];
        this.categories = [];
        this.imgs = [];
        this.show = false;
    }
    ngOnInit() {
        this.ismobile = this.isMobile();
        if (this.ismobile) {
            $(".carousel1 .carousel-indicators").css("display", "none");
            $(".carousel2 .row").css("margin-left", "auto");
        }
        else {
            $(".carousel2 .carousel-indicators").css("bottom", "-25%");
        }
        this.getData();
    }
    ngAfterViewInit() {
        console.log('after view');
        this.carousel3.pause();
        this.carousel4.pause();
    }
    isMobile() {
        var userAgentInfo = navigator.userAgent;
        var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var mobile_flag = false;
        for (var v = 0; v < mobileAgents.length; v++) {
            if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
                mobile_flag = true;
                break;
            }
        }
        var screen_width = window.screen.width;
        var screen_height = window.screen.height;
        if (screen_width < 500 && screen_height < 800) {
            mobile_flag = true;
        }
        return mobile_flag;
    }
    getData() {
        var continue_list = this.storage.get('continue');
        if (continue_list != null && continue_list.length != 0) {
            this.show = true;
            if (this.isMobile()) {
                for (var i = continue_list.length - 1; i >= 0; i--) {
                    var obj = {};
                    var cur_arr = continue_list[i].split(',');
                    // @ts-ignore
                    obj['id'] = cur_arr[0];
                    // @ts-ignore
                    obj['category'] = cur_arr[1];
                    // @ts-ignore
                    obj['img'] = cur_arr[2];
                    // @ts-ignore
                    this.items_mobile.push(obj);
                }
            }
            else {
                this.imgs = [];
                this.ids = [];
                this.categories = [];
                let index = 0;
                let img_arr = [];
                let id_arr = [];
                let category_arr = [];
                for (var i = continue_list.length - 1; i >= 0; i--) {
                    // var obj = {};
                    var cur_arr = continue_list[i].split(',');
                    id_arr.push(cur_arr[0]);
                    category_arr.push(cur_arr[1]);
                    img_arr.push(cur_arr[2]);
                    index++;
                    if (index % 6 == 0 || index == continue_list.length) {
                        this.ids.push(id_arr);
                        this.categories.push(category_arr);
                        this.imgs.push(img_arr);
                        id_arr = [];
                        category_arr = [];
                        img_arr = [];
                    }
                }
            }
        }
        else {
            this.show = false;
        }
    }
    jump(id, category, img) {
        var continue_list = this.storage.get('continue');
        var data = id + ',' + category + ',' + img;
        if (continue_list == null) {
            continue_list = new Array();
        }
        if (continue_list.indexOf(data) >= 0) {
            var idx = continue_list.indexOf(data);
            continue_list.splice(idx, 1);
        }
        if (continue_list.length > 24) {
            continue_list.splice(0, 1);
        }
        continue_list.push(data);
        this.storage.set('continue', continue_list);
        this.storage.set('cur_img', img);
        console.log('reload: ' + id + ' ' + category);
        var url = '/watch/' + category + '/' + id;
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
            this.router.navigate([url]);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__["HttpserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel3 = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel4 = _t.first);
    } }, decls: 10, vars: 20, consts: [["class", "d-lg-none", 4, "ngIf"], ["class", "d-none d-md-block", 4, "ngIf"], [3, "category", "direction", "title"], [1, "d-lg-none"], [2, "text-align", "center"], [1, "carousel1", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators"], ["carousel3", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row", "justify-content-center"], [1, "card", 2, "width", "200px"], [3, "click"], [1, "picsum-img-wrapper"], ["alt", "", 1, "image", 3, "src"], [1, "d-none", "d-md-block"], [1, "container", 2, "margin-bottom", "30px"], [1, "carousel2", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators"], ["carousel4", ""], [1, "container"], [1, "row"], ["class", "col-2", 4, "ngFor", "ngForOf"], [1, "col-2"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 6, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-multi-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-multi-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-multi-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-multi-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-multi-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-multi-carousel", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", ctx.movie)("direction", ctx.popular_movies)("title", ctx.title1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", ctx.movie)("direction", ctx.top_rated_movies)("title", ctx.title2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", ctx.movie)("direction", ctx.trending_movies)("title", ctx.title3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", ctx.tv)("direction", ctx.popular_tv)("title", ctx.title4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", ctx.tv)("direction", ctx.top_rated_tv)("title", ctx.title5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("category", ctx.tv)("direction", ctx.trending_tv)("title", ctx.title6);
    } }, directives: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_6__["MultiCarouselComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"]], styles: [".container[_ngcontent-%COMP%]{\n  margin-top: 10px;\n\n  color: white;\n}\n\n\nngb-carousel[_ngcontent-%COMP%] {\n\n  \n  text-align: center;\n  \n  \n  outline: none;\n  border-color: transparent;\n  box-shadow:none;\n  margin-bottom: 5%;\n}\n\n\n.row[_ngcontent-%COMP%]{\n  max-height: 300px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n\n.picsum-img-wrapper[_ngcontent-%COMP%]{\n  text-align: center;\n  height: 100%;\n}\n\n\na.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%]{\n  width: 5%;\n}\n\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  \n  \n}\n\n\nh3[_ngcontent-%COMP%]{\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjs7RUFFaEIsWUFBWTtBQUNkOzs7QUFHQTs7RUFFRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COzs7QUFLQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBQ0EsWUFBWTs7O0FBQ1osbUJBQW1COzs7QUFDbkIscUJBQXFCOzs7QUFDckIseUJBQXlCOzs7QUFDekIsd0JBQXdCOzs7QUFDeEIsdUJBQXVCOzs7QUFDdkIsSUFBSTs7O0FBRUo7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOzs7QUFDQTtFQUNFLFNBQVM7QUFDWDs7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7O0FBR0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgbWFyZ2luLXRvcDogMTBweDtcblxuICBjb2xvcjogd2hpdGU7XG59XG5cblxubmdiLWNhcm91c2VsIHtcblxuICAvKm1heC1oZWlnaHQ6IDQwMHB4OyovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLypvdmVyZmxvdzogaGlkZGVuOyovXG4gIC8qIG1hcmdpbi10b3A6IDM1MHB4OyAqL1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93Om5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDUlO1xufVxuXG5cblxuXG4ucm93e1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbn1cbi8qLm15cm93XzF7Ki9cbi8qICBkaXNwbGF5OiBmbGV4OyovXG4vKiAgZmxleC13cmFwOiB3cmFwOyovXG4vKiAgbWFyZ2luLXJpZ2h0OiAtMTVweDsqL1xuLyogIG1hcmdpbi1sZWZ0OiAtMTVweDsqL1xuLyogIG1heC1oZWlnaHQ6IDMwMHB4OyovXG4vKn0qL1xuXG4ucGljc3VtLWltZy13cmFwcGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGljc3VtLWltZy13cmFwcGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbmEuY2Fyb3VzZWwtY29udHJvbC1wcmV2LCAuY2Fyb3VzZWwtY29udHJvbC1uZXh0e1xuICB3aWR0aDogNSU7XG59XG4uaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgLypoZWlnaHQ6IDEwMCU7Ki9cbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cbn1cblxuXG5oM3tcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"] });


/***/ }),

/***/ "Cnom":
/*!*************************************************!*\
  !*** ./src/app/services/httpservice.service.ts ***!
  \*************************************************/
/*! exports provided: HttpserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpserviceService", function() { return HttpserviceService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "c+98");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HttpserviceService {
    constructor() { }
    axiosGet(url) {
        return new Promise((resolve, reject) => {
            axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url)
                // tslint:disable-next-line:only-arrow-functions typedef
                .then(function (response) {
                resolve(response);
            });
        });
    }
}
HttpserviceService.ɵfac = function HttpserviceService_Factory(t) { return new (t || HttpserviceService)(); };
HttpserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpserviceService, factory: HttpserviceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "CrP6":
/*!***********************************************************************!*\
  !*** ./src/app/components/multi-carousel/multi-carousel.component.ts ***!
  \***********************************************************************/
/*! exports provided: MultiCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiCarouselComponent", function() { return MultiCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/httpservice.service */ "Cnom");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["carousel"];
const _c1 = ["carousel1"];
function MultiCarouselComponent_5_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiCarouselComponent_5_ng_template_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const i_r5 = ctx_r9.index; const img_r4 = ctx_r9.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.jump(ctx_r7.ids_mobile[i_r5], ctx_r7.category, img_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MultiCarouselComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiCarouselComponent_5_ng_template_0_Template, 5, 1, "ng-template", 9);
} }
function MultiCarouselComponent_12_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiCarouselComponent_12_ng_template_0_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const j_r16 = ctx.index; const singleImg_r15 = ctx.$implicit; const i_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.jump(ctx_r17.ids[i_r12][j_r16], ctx_r17.category, singleImg_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const singleImg_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", singleImg_r15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MultiCarouselComponent_12_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiCarouselComponent_12_ng_template_0_div_2_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", img_r11);
} }
function MultiCarouselComponent_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiCarouselComponent_12_ng_template_0_Template, 3, 1, "ng-template", 9);
} }
class MultiCarouselComponent {
    constructor(httpService, router, storage) {
        this.httpService = httpService;
        this.router = router;
        this.storage = storage;
        this.metaCategory = '';
        this.images = [];
        this.ids = [];
        this.images_mobile = [];
        this.ids_mobile = [];
        this.ismobile = false;
        this.notMobile = true;
    }
    ngOnInit() {
        this.ismobile = this.isMobile();
        if (this.ismobile) {
            this.notMobile = false;
            $(".carousel1 .carousel-indicators").css("display", "none");
            $(".carousel2 .row").css("margin-left", "auto");
        }
        else {
            $(".carousel2 .carousel-indicators").css("bottom", "-25%");
        }
        this.getData();
        this.carousel.pause();
        this.carousel1.pause();
    }
    isMobile() {
        var userAgentInfo = navigator.userAgent;
        var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var mobile_flag = false;
        for (var v = 0; v < mobileAgents.length; v++) {
            if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
                mobile_flag = true;
                break;
            }
        }
        var screen_width = window.screen.width;
        var screen_height = window.screen.height;
        if (screen_width < 500 && screen_height < 800) {
            mobile_flag = true;
        }
        return mobile_flag;
    }
    getData() {
        console.log("direction" + this.direction);
        let url = 'https://csci571-309912.wm.r.appspot.com/apis/' + this.direction + '?id=' + this.sid + '&category=' + this.category;
        this.httpService.axiosGet(url).then((data) => {
            let baseurl = 'https://image.tmdb.org/t/p/w500';
            // tslint:disable-next-line:no-unused-expression
            // @ts-ignore
            let res = data.data.res_array;
            // @ts-ignore
            let count = data.data.count;
            if (this.ismobile) {
                this.images_mobile = [];
                this.ids_mobile = [];
                for (let i = 0; i < count; i++) {
                    this.images_mobile.push(baseurl + res[i].poster_path);
                    this.ids_mobile.push(res[i].id);
                }
            }
            else {
                this.images = [];
                this.ids = [];
                let image_arr = [];
                let id_arr = [];
                let index = 0;
                while (index < count) {
                    image_arr.push(baseurl + res[index].poster_path);
                    id_arr.push(res[index].id);
                    index++;
                    if (index % 6 == 0 || index == count) {
                        this.images.push(image_arr);
                        this.ids.push(id_arr);
                        image_arr = [];
                        id_arr = [];
                    }
                }
            }
            console.log(this.images);
        });
    }
    jump(id, category, img) {
        var continue_list = this.storage.get('continue');
        var data = id + ',' + category + ',' + img;
        if (continue_list == null) {
            continue_list = new Array();
        }
        if (continue_list.indexOf(data) >= 0) {
            var idx = continue_list.indexOf(data);
            continue_list.splice(idx, 1);
        }
        if (continue_list.length > 24) {
            continue_list.splice(0, 1);
        }
        continue_list.push(data);
        this.storage.set('continue', continue_list);
        this.storage.set('cur_img', img);
        console.log('reload: ' + id + ' ' + category);
        var url = '/watch/' + category + '/' + id;
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
            this.router.navigate([url]);
        });
    }
}
MultiCarouselComponent.ɵfac = function MultiCarouselComponent_Factory(t) { return new (t || MultiCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__["HttpserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"])); };
MultiCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MultiCarouselComponent, selectors: [["app-multi-carousel"]], viewQuery: function MultiCarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel1 = _t.first);
    } }, inputs: { category: "category", sid: "sid", direction: "direction", title: "title" }, decls: 13, vars: 12, consts: [[1, "d-lg-none"], [2, "text-align", "center"], [1, "carousel1", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators"], ["carousel", ""], [4, "ngFor", "ngForOf"], [1, "d-none", "d-md-block"], [1, "container", 2, "margin-bottom", "30px"], [1, "carousel2", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators"], ["carousel1", ""], ["ngbSlide", ""], [1, "row", "justify-content-center"], [1, "card", 2, "width", "200px"], [3, "click"], [1, "picsum-img-wrapper"], ["alt", "", "onerror", "this.src='./assets/movie_placeholder.png'", 1, "image", 3, "src"], [1, "container"], [1, "row"], ["class", "col-2", 4, "ngFor", "ngForOf"], [1, "col-2"]], template: function MultiCarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-carousel", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiCarouselComponent_5_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngb-carousel", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MultiCarouselComponent_12_Template, 1, 0, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 5000)("pauseOnHover", true)("pauseOnFocus", true)("showNavigationIndicators", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images_mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 5000)("pauseOnHover", true)("pauseOnFocus", true)("showNavigationIndicators", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]], styles: [".mycontainer_1[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 10%;\n  padding-left: 10%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 5%;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n\n  \n  text-align: center;\n  \n  \n  outline: none;\n  border-color: transparent;\n  box-shadow:none;\n  margin-bottom: 5%;\n}\n\n.row[_ngcontent-%COMP%]{\n  max-height: 300px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]{\n  text-align: center;\n  height: 100%;\n}\n\na.carousel-control-prev[_ngcontent-%COMP%], .carousel-control-next[_ngcontent-%COMP%]{\n  width: 5%;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n  \n  \n}\n\nh3[_ngcontent-%COMP%]{\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpLWNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFLQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQSxZQUFZOztBQUNaLG1CQUFtQjs7QUFDbkIscUJBQXFCOztBQUNyQix5QkFBeUI7O0FBQ3pCLHdCQUF3Qjs7QUFDeEIsdUJBQXVCOztBQUN2QixJQUFJOztBQUVKO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoibXVsdGktY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbnRhaW5lcl8xIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG5uZ2ItY2Fyb3VzZWwge1xuXG4gIC8qbWF4LWhlaWdodDogNDAwcHg7Ki9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKm92ZXJmbG93OiBoaWRkZW47Ki9cbiAgLyogbWFyZ2luLXRvcDogMzUwcHg7ICovXG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6bm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cblxuXG5cbi5yb3d7XG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xufVxuLyoubXlyb3dfMXsqL1xuLyogIGRpc3BsYXk6IGZsZXg7Ki9cbi8qICBmbGV4LXdyYXA6IHdyYXA7Ki9cbi8qICBtYXJnaW4tcmlnaHQ6IC0xNXB4OyovXG4vKiAgbWFyZ2luLWxlZnQ6IC0xNXB4OyovXG4vKiAgbWF4LWhlaWdodDogMzAwcHg7Ki9cbi8qfSovXG5cbi5waWNzdW0taW1nLXdyYXBwZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5waWNzdW0taW1nLXdyYXBwZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuYS5jYXJvdXNlbC1jb250cm9sLXByZXYsIC5jYXJvdXNlbC1jb250cm9sLW5leHR7XG4gIHdpZHRoOiA1JTtcbn1cbi5pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKmhlaWdodDogMTAwJTsqL1xuICAvKnRleHQtYWxpZ246IGNlbnRlcjsqL1xufVxuXG5cbmgze1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, consts: [[1, "navbar-dark", 2, "background-color", "black", "text-align", "center", "color", "white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Powered by TMDB. Developed by Dehua Gan\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });


/***/ }),

/***/ "Obgv":
/*!***************************************************!*\
  !*** ./src/app/components/cast/cast.component.ts ***!
  \***************************************************/
/*! exports provided: CastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastComponent", function() { return CastComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/httpservice.service */ "Cnom");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _external_external_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../external/external.component */ "Tu6P");






function CastComponent_ng_template_2_span_21_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CastComponent_ng_template_2_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CastComponent_ng_template_2_span_21_span_2_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](g_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r6 != ctx_r4.person_also_known_as.length - 1);
} }
function CastComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CastComponent_ng_template_2_Template_button_click_3_listener() { const modal_r3 = ctx.$implicit; return modal_r3.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Also Known as: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CastComponent_ng_template_2_span_21_Template, 3, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-external", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.person_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.person_profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth: ", ctx_r1.person_birthday, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r1.person_place_of_birth, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx_r1.person_gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Known for: ", ctx_r1.person_known_for_department, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.person_also_known_as);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pid", ctx_r1.cur_person_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.person_biography);
} }
function CastComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CastComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const cast_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); return ctx_r10.open(_r0, cast_r9["id"], cast_r9["profile_path"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "As");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", cast_r9["profile_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cast_r9["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cast_r9["character"]);
} }
class CastComponent {
    constructor(httpService, modalService) {
        this.httpService = httpService;
        this.modalService = modalService;
        this.cast_array = [];
        this.person_also_known_as = [];
        this.closeResult = '';
    }
    ngOnInit() {
        this.getData(this.id, this.category);
    }
    getData(id, category) {
        let url = 'https://csci571-309912.wm.r.appspot.com/apis/cast?id=' + id + '&category=' + category;
        this.httpService.axiosGet(url).then((data) => {
            // tslint:disable-next-line:no-unused-expression
            // @ts-ignore
            let res = data.data.res_array;
            // @ts-ignore
            let count = data.data.count;
            for (var i = 0; i < count; i++) {
                let cast_obj = {};
                // @ts-ignore
                cast_obj['id'] = res[i].id;
                // @ts-ignore
                cast_obj['name'] = res[i].name;
                // @ts-ignore
                cast_obj['character'] = res[i].character;
                // @ts-ignore
                cast_obj['profile_path'] = res[i].profile_path;
                // @ts-ignore
                this.cast_array.push(cast_obj);
            }
        });
    }
    open(content, pid, profile_path) {
        this.cur_person_id = pid;
        let url = 'https://csci571-309912.wm.r.appspot.com/apis/cast_detail?id=' + pid;
        this.httpService.axiosGet(url).then((data) => {
            // tslint:disable-next-line:no-unused-expression
            // @ts-ignore
            let res = data.data;
            // // @ts-ignore
            // let count = data.data;
            // @ts-ignore
            this.person_name = res.name;
            // @ts-ignore
            this.person_birthday = res.birthday;
            // @ts-ignore
            this.person_gender = res.gender == 2 ? 'Male' : 'Female';
            // @ts-ignore
            this.person_homepage = res.homepage;
            // @ts-ignore
            this.person_also_known_as = res.also_known_as;
            // @ts-ignore
            this.person_known_for_department = res.known_for_department;
            // @ts-ignore
            this.person_biography = res.biography;
            // @ts-ignore
            this.person_place_of_birth = res.place_of_birth;
            // @ts-ignore
            this.person_profile_path = profile_path;
        });
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', scrollable: true }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
CastComponent.ɵfac = function CastComponent_Factory(t) { return new (t || CastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_2__["HttpserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"])); };
CastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CastComponent, selectors: [["app-cast"]], inputs: { id: "id", category: "category" }, decls: 6, vars: 1, consts: [["content", ""], [1, "d-flex", "flex-row"], ["type", "button", "class", "col", 3, "click", 4, "ngFor", "ngForOf"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-sm-3", 2, "min-height", "250px"], [2, "width", "100%", 3, "src"], [1, "col-sm-9"], [4, "ngFor", "ngForOf"], [3, "pid"], [4, "ngIf"], ["type", "button", 1, "col", 3, "click"], [1, "card", 2, "width", "150px"], ["alt", "Card image", 1, "card-img-top", 2, "width", "100%", "height", "100%", 3, "src"], [1, "card-body"], [1, "card-title", 2, "font-size", "10px", "font-weight", "bold"], [2, "font-size", "10px", "font-weight", "bold"], [1, "card-text", 2, "font-size", "8px"]], template: function CastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Full Cast And Crew");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CastComponent_ng_template_2_Template, 30, 9, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CastComponent_div_5_Template, 10, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cast_array);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _external_external_component__WEBPACK_IMPORTED_MODULE_4__["ExternalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".btn[_ngcontent-%COMP%]{\n  width: 280px;\n  height: 250px;\n}\n\n.flex-row[_ngcontent-%COMP%]{\n  \n  displey:-webkit-flex;\n  \n  flex-flow:row nowrap;\n  overflow-x: auto;\n  list-style: none;\n\n\n}\n\ndiv[_ngcontent-%COMP%]{\n  color: black;\n}\n\n.card-body[_ngcontent-%COMP%]{\n  padding: 0;\n  text-align: center;\n}\n\np[_ngcontent-%COMP%]{\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUVqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7O0FBR2xCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQSxTQUFTOztBQUNULDBCQUEwQjs7QUFDMUIsSUFBSTs7QUFDSixTQUFTOztBQUNULDRCQUE0Qjs7QUFDNUIsSUFBSSIsImZpbGUiOiJjYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbi5mbGV4LXJvd3tcbiAgLypoZWlnaHQ6IDMwMHB4OyovXG4gIGRpc3BsZXk6LXdlYmtpdC1mbGV4O1xuICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgLXdlYmtpdC1mbGV4LWZsb3c6cm93IG5vd3JhcDtcbiAgZmxleC1mbG93OnJvdyBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cblxufVxuZGl2e1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLWJvZHl7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKi5jYXJkeyovXG4vKiAgYm9yZGVyLXJhZGl1czogMC41cHg7Ki9cbi8qfSovXG4vKi5jYXJkeyovXG4vKiAgYm9yZGVyLXJhZGl1czogMC4zNXJlbTsqL1xuLyp9Ki9cbiJdfQ== */"] });


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
/* harmony import */ var _components_navigate_bar_navigate_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigate-bar/navigate-bar.component */ "UKof");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'hw8';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigate-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navigate_bar_navigate_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavigateBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".content[_ngcontent-%COMP%]{\n  background-color: rgb(5,9,50);\n}\n.form-control[_ngcontent-%COMP%]:focus{\n  background-color: black;\n  outline:none;box-shadow: none;\n  border-bottom: white 2px solid;\n  \n}\n.form-control[_ngcontent-%COMP%]{\n  border: none;\n  padding: 0;\n  border-bottom: white 2px solid;\n  background-color: black;\n  width: 200px;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7QUFDZCxlQUFlO0FBQ2YsSUFBSTtBQUVKO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWSxDQUFDLGdCQUFnQjtFQUM3Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLmp1bWJvdHJvbnsqL1xuLyogIHBhZGRpbmc6MDsqL1xuLyp9Ki9cblxuLmNvbnRlbnR7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1LDksNTApO1xufVxuLmZvcm0tY29udHJvbDpmb2N1c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG91dGxpbmU6bm9uZTtib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiB3aGl0ZSAycHggc29saWQ7XG4gIC8qYm9yZGVyOiBub25lOyovXG59XG4uZm9ybS1jb250cm9se1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IHdoaXRlIDJweCBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Tu6P":
/*!***********************************************************!*\
  !*** ./src/app/components/external/external.component.ts ***!
  \***********************************************************/
/*! exports provided: ExternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalComponent", function() { return ExternalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/httpservice.service */ "Cnom");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




function ExternalComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("tooltipClass", ctx_r0.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://www.imdb.com/name/", ctx_r0.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ExternalComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://instagram.com/", ctx_r1.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ExternalComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "http://facebook.com/", ctx_r2.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ExternalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/", ctx_r3.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ExternalComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.tooltip = 'background-color:white';
    }
    ngOnInit() {
        this.getData(this.pid);
    }
    getData(id) {
        let url = 'https://csci571-309912.wm.r.appspot.com/apis/external_ids?id=' + id;
        this.httpService.axiosGet(url).then((data) => {
            // tslint:disable-next-line:no-unused-expression
            // @ts-ignore
            let res = data.data;
            this.imdb_id = res.imdb_id;
            this.facebook_id = res.facebook_id;
            this.instagram_id = res.instagram_id;
            this.twitter_id = res.twitter_id;
        });
    }
}
ExternalComponent.ɵfac = function ExternalComponent_Factory(t) { return new (t || ExternalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__["HttpserviceService"])); };
ExternalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExternalComponent, selectors: [["app-external"]], inputs: { pid: "pid" }, decls: 4, vars: 4, consts: [["type", "button", "class", "btn-1 btn  mr-2", "placement", "top", "ngbTooltip", "Visit IMDB", 3, "tooltipClass", 4, "ngIf"], ["type", "button", "class", "btn-1 btn  mr-2", "placement", "top", "ngbTooltip", "Visit Instagarm", 4, "ngIf"], ["type", "button", "class", "btn-1 btn  mr-2", "placement", "top", "ngbTooltip", "Visit Facebook", 4, "ngIf"], ["type", "button", "class", "btn-1 btn  mr-2", "placement", "top", "ngbTooltip", "Visit Twitter", 4, "ngIf"], ["type", "button", "placement", "top", "ngbTooltip", "Visit IMDB", 1, "btn-1", "btn", "mr-2", 3, "tooltipClass"], ["target", "_blank", 3, "href"], ["src", "assets/imdb.png", 2, "width", "100%", "height", "100%"], ["type", "button", "placement", "top", "ngbTooltip", "Visit Instagarm", 1, "btn-1", "btn", "mr-2"], ["src", "assets/instagram.png", 2, "width", "100%", "height", "100%"], ["type", "button", "placement", "top", "ngbTooltip", "Visit Facebook", 1, "btn-1", "btn", "mr-2"], ["src", "assets/facebook.png", 2, "width", "100%", "height", "100%"], ["type", "button", "placement", "top", "ngbTooltip", "Visit Twitter", 1, "btn-1", "btn", "mr-2"], ["src", "assets/twitter.png", 2, "width", "100%", "height", "100%"]], template: function ExternalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExternalComponent_button_0_Template, 3, 2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExternalComponent_button_1_Template, 3, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExternalComponent_button_2_Template, 3, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExternalComponent_button_3_Template, 3, 1, "button", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imdb_id != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.instagram_id != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.facebook_id != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.twitter_id != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltip"]], styles: [".btn-1[_ngcontent-%COMP%]{\n  padding: 0;\n  width: 30px;\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJleHRlcm5hbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi0xe1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "UKof":
/*!*******************************************************************!*\
  !*** ./src/app/components/navigate-bar/navigate-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavigateBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateBarComponent", function() { return NavigateBarComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/httpservice.service */ "Cnom");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function NavigateBarComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigateBarComponent_ng_template_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const r_r2 = ctx.result; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.jump(r_r2["id"], r_r2["media_type"], r_r2["poster_path"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngb-highlight", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r2 = ctx.result;
    const t_r3 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", r_r2["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("result", r_r2.title)("term", t_r3);
} }
const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/mylist"]; };
class NavigateBarComponent {
    constructor(http, httpService, router, storage) {
        this.http = http;
        this.httpService = httpService;
        this.router = router;
        this.storage = storage;
        this.search_res = [];
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])(term => this.getData(term)));
        // search=(text$:Observable<string>)=>
        //   text$.pipe(
        //     debounceTime(200),
        //     distinctUntilChanged(),
        //     switchMap(term=>this.getData(term))
        //   )
        this.formatter = (x) => x.title;
    }
    // search: OperatorFunction<string, readonly {name: any, flag: any}[]> = (text$: Observable<string>) =>
    //   text$.pipe(
    //     debounceTime(200),
    //     map(term => term === '' ? []
    //       : statesWithFlags.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    //   )
    // onKey(event: any) { // without type info
    //   var val = event.target.value.trim();
    //   if(val.length>0){
    //     this.getData(val);
    //     console.log('show search_res',this.search_res);
    //     console.log('filter',this.search_res.filter(v => v['title'].toLowerCase().indexOf(val.toLowerCase()) > -1));
    //   }
    //
    // }
    ngOnInit() {
        $(".dropdown-menu").css("background-color", "rgb(5,9,50)");
        $(".my-type").css("background-color", "rgb(5,9,50)");
    }
    getData(term) {
        let url = 'https://csci571-309912.wm.r.appspot.com/apis/search?query=' + term;
        var res;
        return this.http.get(url);
    }
    jumpNav(url) {
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
            this.router.navigate([url]);
        });
    }
    jump(id, category, img) {
        var continue_list = this.storage.get('continue');
        var data = id + ',' + category + ',' + img;
        if (continue_list == null) {
            continue_list = new Array();
        }
        if (continue_list.indexOf(data) >= 0) {
            var idx = continue_list.indexOf(data);
            continue_list.splice(idx, 1);
        }
        if (continue_list.length > 24) {
            continue_list.splice(0, 1);
        }
        continue_list.push(data);
        this.storage.set('continue', continue_list);
        this.storage.set('cur_img', img);
        console.log('reload: ' + id + ' ' + category);
        var url = '/watch/' + category + '/' + id;
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
            this.router.navigate([url]);
        });
    }
}
NavigateBarComponent.ɵfac = function NavigateBarComponent_Factory(t) { return new (t || NavigateBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_3__["HttpserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
NavigateBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigateBarComponent, selectors: [["app-navigate-bar"]], decls: 17, vars: 9, consts: [[1, "navbar", "navbar-expand-md", "nav-bg-color", "navbar-dark"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "text-right"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["placeholder", "search", "id", "typeahead-template", "type", "text", 1, "form-control", "pull-right", 2, "color", "white", 3, "resultTemplate", "ngbTypeahead", "inputFormatter"], [2, "background-color", "rgb(5,9,50)"], ["style", "padding: 0", "class", "dropdown-menu my-type"], ["rt", ""], [3, "click"], [1, "mr-1", 2, "width", "50px", "margin-right", "15px", 3, "src"], [3, "result", "term"]], template: function NavigateBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "MyList");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavigateBarComponent_ng_template_15_Template, 3, 3, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("resultTemplate", _r0)("ngbTypeahead", ctx.search)("inputFormatter", ctx.formatter);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbHighlight"]], styles: [".form-control:focus{\n  background-color: black;\n  outline:none;box-shadow: none;\n  border-bottom: white 2px solid;\n  /*border: none;*/\n}\n.form-control{\n  border: none;\n  padding: 0;\n  border-bottom: white 2px solid;\n  background-color: black;\n  width: 200px;\n  border-radius: 0;\n}\n.nav-link{\n  color: #ffffff4d;\n}\n.nav-bg-color{\n  background-color: black;\n}\n.dropdown-menu.show button{\n  color: white;\n  font-size: 1px;\n\n}\n.dropdown-menu,\n.dropdown-menu>li>a {\n  color: #FFF;\n  background-color:rgb(5,9,50);\n  padding: 0;\n}\n.dropdown-menu>li>a:hover {\n  color: #FFF;\n  background-color: rgb(5,9,50);\n}\n.dropdown-menu{\n  padding: 0;\n}\n.dropdown-item{\n  padding: 3px;\n\n}\n/*#typeahead-template{*/\n/*  background-color: rgb(5,9,50);*/\n/*  */\n/*}*/\na:hover{\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRlLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVksQ0FBQyxnQkFBZ0I7RUFDN0IsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDViw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYzs7QUFFaEI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZOztBQUVkO0FBRUEsdUJBQXVCO0FBQ3ZCLG1DQUFtQztBQUNuQyxLQUFLO0FBQ0wsSUFBSTtBQUNKO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJuYXZpZ2F0ZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2w6Zm9jdXN7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgMnB4IHNvbGlkO1xuICAvKmJvcmRlcjogbm9uZTsqL1xufVxuLmZvcm0tY29udHJvbHtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiB3aGl0ZSAycHggc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubmF2LWxpbmt7XG4gIGNvbG9yOiAjZmZmZmZmNGQ7XG59XG4ubmF2LWJnLWNvbG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5kcm9wZG93bi1tZW51LnNob3cgYnV0dG9ue1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXB4O1xuXG59XG4uZHJvcGRvd24tbWVudSxcbi5kcm9wZG93bi1tZW51PmxpPmEge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNSw5LDUwKTtcbiAgcGFkZGluZzogMDtcbn1cbi5kcm9wZG93bi1tZW51PmxpPmE6aG92ZXIge1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsOSw1MCk7XG59XG5cbi5kcm9wZG93bi1tZW51e1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZHJvcGRvd24taXRlbXtcbiAgcGFkZGluZzogM3B4O1xuXG59XG5cbi8qI3R5cGVhaGVhZC10ZW1wbGF0ZXsqL1xuLyogIGJhY2tncm91bmQtY29sb3I6IHJnYig1LDksNTApOyovXG4vKiAgKi9cbi8qfSovXG5hOmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ "Vsu4":
/*!*******************************************************************!*\
  !*** ./src/app/components/video-player/video-player.component.ts ***!
  \*******************************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/httpservice.service */ "Cnom");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");




class VideoPlayerComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.width = 500;
        this.height = 250;
        this.toFather = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    signalItem(value) {
        this.toFather.emit(value);
    }
    ngOnInit() {
        this.getData(this.id, this.category);
        let apiLoaded = false;
        if (!apiLoaded) {
            // This code loads the IFrame Player API code asynchronously, according to the instructions at
            // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            apiLoaded = true;
            if (this.isMobile()) {
                var screen_width = window.screen.width;
                this.width = screen_width * 0.9;
                this.height = this.width * 0.5;
            }
            // fromEvent(window, 'resize').subscribe((event) => {
            //   console.log("change");
            //   this.width = window.screen.width*0.3;
            // });
        }
    }
    isMobile() {
        var userAgentInfo = navigator.userAgent;
        var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var mobile_flag = false;
        for (var v = 0; v < mobileAgents.length; v++) {
            if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
                mobile_flag = true;
                break;
            }
        }
        var screen_width = window.screen.width;
        var screen_height = window.screen.height;
        if (screen_width < 500 && screen_height < 800) {
            mobile_flag = true;
        }
        return mobile_flag;
    }
    getData(id, category) {
        let url = 'https://csci571-309912.wm.r.appspot.com/apis/video?id=' + id + '&category=' + category;
        this.httpService.axiosGet(url).then((data) => {
            // tslint:disable-next-line:no-unused-expression
            // @ts-ignore
            let res = data.data.res_array;
            // @ts-ignore
            let index = data.data.count;
            if (index > 0) {
                this.video_id = res[0].key;
                this.signalItem(this.video_id);
            }
        });
    }
}
VideoPlayerComponent.ɵfac = function VideoPlayerComponent_Factory(t) { return new (t || VideoPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__["HttpserviceService"])); };
VideoPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoPlayerComponent, selectors: [["app-video-player"]], inputs: { id: "id", category: "category" }, outputs: { toFather: "toFather" }, decls: 1, vars: 4, consts: [["suggestedQuality", "highres", 1, "player", 3, "videoId", "startSeconds", "height", "width"]], template: function VideoPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "youtube-player", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx.video_id)("startSeconds", 0)("height", ctx.height)("width", ctx.width);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayer"]], styles: ["iframe[_ngcontent-%COMP%]{\n  width: 100%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVzs7QUFFYiIsImZpbGUiOiJ2aWRlby1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZXtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/httpservice.service */ "Cnom");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/multi-carousel/multi-carousel.component */ "CrP6");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/detail/detail.component */ "151J");
/* harmony import */ var _components_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/video-player/video-player.component */ "Vsu4");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _components_cast_cast_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cast/cast.component */ "Obgv");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/storage.service */ "n90K");
/* harmony import */ var _components_external_external_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/external/external.component */ "Tu6P");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "srbx");
/* harmony import */ var _components_navigate_bar_navigate_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navigate-bar/navigate-bar.component */ "UKof");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [_services_httpservice_service__WEBPACK_IMPORTED_MODULE_7__["HttpserviceService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_12__["YouTubePlayerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_6__["MylistComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_8__["CarouselComponent"],
        _components_multi_carousel_multi_carousel_component__WEBPACK_IMPORTED_MODULE_9__["MultiCarouselComponent"],
        _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_10__["DetailComponent"],
        _components_video_player_video_player_component__WEBPACK_IMPORTED_MODULE_11__["VideoPlayerComponent"],
        _components_cast_cast_component__WEBPACK_IMPORTED_MODULE_13__["CastComponent"],
        _components_external_external_component__WEBPACK_IMPORTED_MODULE_15__["ExternalComponent"],
        _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__["ReviewsComponent"],
        _components_navigate_bar_navigate_bar_component__WEBPACK_IMPORTED_MODULE_17__["NavigateBarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_12__["YouTubePlayerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();


/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StorageService {
    constructor() { }
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    remove(key) {
        localStorage.removeItem(key);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/httpservice.service */ "Cnom");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/storage.service */ "n90K");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["carousel"];
function CarouselComponent_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarouselComponent_3_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.jump(ctx_r5.ids[i_r3], "movie", ctx_r5.poster[i_r3]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const img_r2 = ctx_r8.$implicit;
    const i_r3 = ctx_r8.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.titles[i_r3]);
} }
function CarouselComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_3_ng_template_0_Template, 5, 2, "ng-template", 4);
} }
class CarouselComponent {
    constructor(httpService, router, storage) {
        this.httpService = httpService;
        this.router = router;
        this.storage = storage;
        this.images = [];
        this.ids = [];
        this.titles = [];
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.showIndicators = true;
        this.poster = [];
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
    }
    ngOnInit() {
        this.getData();
        this.showIndicators = !this.isMobile();
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    isMobile() {
        console.log("ismobile");
        var userAgentInfo = navigator.userAgent;
        var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
        var mobile_flag = false;
        for (var v = 0; v < mobileAgents.length; v++) {
            if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
                mobile_flag = true;
                break;
            }
        }
        var screen_width = window.screen.width;
        var screen_height = window.screen.height;
        if (screen_width < 500 && screen_height < 800) {
            mobile_flag = true;
        }
        return mobile_flag;
    }
    getData() {
        let url = 'https://csci571-309912.wm.r.appspot.com/apis/current_movies';
        this.httpService.axiosGet(url).then((data) => {
            // tslint:disable-next-line:no-unused-expression
            // @ts-ignore
            let res = data.data.res_array;
            for (var i = 0; i < 5; i++) {
                // @ts-ignore
                let img_url = 'https://image.tmdb.org/t/p/original' + res[i].backdrop_path;
                console.log(img_url);
                // @ts-ignore
                this.images.push(img_url);
                // @ts-ignore
                this.ids.push(res[i].id);
                // @ts-ignore
                this.titles.push(res[i].title);
                // @ts-ignore
                this.poster.push('https://image.tmdb.org/t/p/w500' + res[i].poster_path);
            }
            // this.images.push();
            console.log(res);
        });
    }
    jump(id, category, img) {
        var continue_list = this.storage.get('continue');
        var data = id + ',' + category + ',' + img;
        if (continue_list == null) {
            continue_list = new Array();
        }
        if (continue_list.indexOf(data) >= 0) {
            var idx = continue_list.indexOf(data);
            continue_list.splice(idx, 1);
        }
        if (continue_list.length > 24) {
            continue_list.splice(0, 1);
        }
        continue_list.push(data);
        this.storage.set('continue', continue_list);
        this.storage.set('cur_img', img);
        console.log('reload: ' + id + ' ' + category);
        var url = '/watch/' + category + '/' + id;
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
            this.router.navigate([url]);
        });
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_2__["HttpserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, decls: 4, vars: 5, consts: [[1, "container", 2, "margin-top", "10px"], [1, "carousel", 3, "interval", "pauseOnHover", "pauseOnFocus", "showNavigationIndicators"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [3, "click"], [1, "picsum-img-wrapper"], ["alt", "", 1, "image", 3, "src"], [1, "carousel-caption"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-carousel", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_3_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", true)("pauseOnFocus", true)("showNavigationIndicators", ctx.showIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.images);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"]], styles: [".mycontainer_1[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 10%;\n  padding-left: 10%;\n  margin-right: auto;\n  margin-left: auto;\n  margin-top: 5%;\n}\n\nngb-carousel[_ngcontent-%COMP%] {\n  max-height: 400px;\n  text-align: center;\n  overflow: hidden;\n  \n  outline: none;\n  border-color: transparent;\n  box-shadow:none;\n}\n\nol[_ngcontent-%COMP%]{\n  margin-bottom: 0;\n}\n\n.image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%] {\n  transition: transform .2s;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n  top : 25%;\n  padding-left: 10%;\n  height: 60%;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  color: white;\n  top: 120%;\n  \n  background-image: linear-gradient(transparent, black 40%);\n  height: 50%;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  \n}\n\n@media screen and (max-width:960px){\n  .mycontainer_1[_ngcontent-%COMP%] {\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-top: 20%;\n  }\n\n  .carousel-caption[_ngcontent-%COMP%] {\n    top: 70%;\n    padding-left: 10%;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .picsum-img-wrapper[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n    top : 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULG1GQUFtRjtFQUNuRix5REFBeUQ7RUFDekQsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFFBQVE7SUFDUixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJjYXJvdXNlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Y29udGFpbmVyXzEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbm5nYi1jYXJvdXNlbCB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC8qIG1hcmdpbi10b3A6IDM1MHB4OyAqL1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93Om5vbmU7XG59XG5cbm9se1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7XG59XG5cbi5waWNzdW0taW1nLXdyYXBwZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBpY3N1bS1pbWctd3JhcHBlcjpob3ZlciAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHRvcCA6IDI1JTtcbiAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIGhlaWdodDogNjAlO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0b3A6IDEyMCU7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgLCBibGFjaywgYmxhY2spOyAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIGJsYWNrIDQwJSk7XG4gIGhlaWdodDogNTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NjBweCl7XG4gIC5teWNvbnRhaW5lcl8xIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gIH1cblxuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgdG9wOiA3MCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gIH1cblxuICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5waWNzdW0taW1nLXdyYXBwZXI6aG92ZXIgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgIHRvcCA6IDcwJTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "srbx":
/*!*********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.ts ***!
  \*********************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/httpservice.service */ "Cnom");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ReviewsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r1["avatar_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A review created by ", review_r1["author"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u2605", review_r1["rating"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Written by ", review_r1["author"], " on ", review_r1["created_at"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r1["content"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", review_r1["url"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ReviewsComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.reviews = [];
    }
    ngOnInit() {
        this.getData(this.id, this.category);
    }
    getData(id, category) {
        let url = 'https://csci571-309912.wm.r.appspot.com/apis/reviews?id=' + id + '&category=' + category;
        this.httpService.axiosGet(url).then((data) => {
            // tslint:disable-next-line:no-unused-expression
            // @ts-ignore
            let res = data.data.res_array;
            // @ts-ignore
            this.count = data.data.count;
            for (var i = 0; i < res.length; i++) {
                var obj = {};
                // @ts-ignore
                obj['author'] = res[i].author;
                // @ts-ignore
                obj['content'] = res[i].content;
                // @ts-ignore
                // obj['created_at'] = res[i].created_at;
                var date = res[i].created_at;
                var m = parseInt(date.substring(5, 7));
                var m_st = this.month[m - 1];
                var d = parseInt(date.substring(8, 10));
                var sum_date = m_st + ' ' + d + ', ';
                sum_date += date.substring(0, 4) + ', ';
                var time = parseInt(date.substring(11, 13));
                if (time > 12) {
                    time -= 12;
                    sum_date += ' ' + time + date.substring(13, 19) + ' PM';
                }
                else if (time < 12) {
                    sum_date += ' ' + time + date.substring(13, 19) + ' AM';
                }
                else {
                    sum_date += ' ' + time + date.substring(13, 19) + ' PM';
                }
                // @ts-ignore
                obj['created_at'] = sum_date;
                // @ts-ignore
                obj['url'] = res[i].url;
                // @ts-ignore
                obj['rating'] = res[i].rating;
                // @ts-ignore
                obj['avatar_path'] = res[i].avatar_path;
                // @ts-ignore
                this.reviews.push(obj);
            }
        });
    }
}
ReviewsComponent.ɵfac = function ReviewsComponent_Factory(t) { return new (t || ReviewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_httpservice_service__WEBPACK_IMPORTED_MODULE_1__["HttpserviceService"])); };
ReviewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewsComponent, selectors: [["app-reviews"]], inputs: { id: "id", category: "category" }, decls: 5, vars: 2, consts: [[2, "color", "darkgray"], ["class", "tab-pane review", "style", "margin-bottom: 20px;", 4, "ngFor", "ngForOf"], [1, "tab-pane", "review", 2, "margin-bottom", "20px"], [1, "row"], [1, "col-sm-3", 2, "text-align", "center"], [1, "card", 2, "width", "70px", "height", "70px", "border", "none", "margin-top", "10px", "margin-left", "20%"], ["onerror", "this.src='./assets/alter.png'", 2, "width", "100%", "height", "100%", "border-radius", "50%", 3, "src"], [1, "col-sm-9"], [1, "d-flex", 2, "margin-top", "10px"], [2, "font-size", "20px", "color", "black"], [1, "tab-content", 2, "padding-right", "9px", "padding-left", "9px", "font-size", "10px", "font-weight", "normal", "color", "white", "background-color", "black", "border-radius", "50px", "height", "20px", "display", "inline-block"], [1, "content"], ["target", "_blank", 2, "font-weight", "bold", "font-size", "12px", "color", "#023372", "text-decoration", "underline", 3, "href"]], template: function ReviewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reviews \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReviewsComponent_div_4_Template, 20, 7, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".review[_ngcontent-%COMP%]{\n  background-color: white;\n  border-radius: 5px;\n  display: inline-block;\n  padding: 15px;\n  width: 100%;\n}\n\np[_ngcontent-%COMP%]{\n  font-weight: bold;\n  font-size: 12px;\n  color: black;\n  font-weight: normal;\n}\n\n.content[_ngcontent-%COMP%]{\n  font-weight: bold;\n  font-size: 12px;\n  color: black;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InJldmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXZpZXd7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmNvbnRlbnR7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mylist/mylist.component */ "6DPj");
/* harmony import */ var _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/detail/detail.component */ "151J");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'mylist',
        component: _components_mylist_mylist_component__WEBPACK_IMPORTED_MODULE_2__["MylistComponent"]
    },
    {
        path: 'watch/movie/:param',
        component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
    },
    {
        path: 'watch/tv/:param',
        component: _components_detail_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
    },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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