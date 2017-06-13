webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProjectData */
;
var ProjectData = [
    {
        name: 'michaelfedora.github.io',
        caption: 'A website for myself',
        tags: ['Vue.js'],
        description: 'Finally made the time to make my own website. Sure, maybe it won\'t win awards, but it\'s me, and I quite like it!',
        details: []
    },
    {
        name: 'crowfall.wiki',
        featured: true,
        caption: 'An unofficial Wiki for Crowfall',
        tags: ['Angular2', 'Express', 'Node.js'],
        description: 'I worked with Scree to make a WebApp Wiki for the Crowfall MMO. '
            + 'We used Angular 2 for the frontend, Angular Material 2 for development'
            + 'styling, and a Node.js/Express/Rethinkdb for the backend',
        details: [
            {
                image: 'all-empty.png',
                title: 'The \'all\' component',
                caption: 'My beloved creation. It searches all the data objects within the wiki.'
            },
            {
                image: 'all-bard.png',
                title: 'Searching for the Bard discipline',
                caption: '..brings it up, with a formatted card to display its properties.'
            },
            {
                image: 'all-data_type-race_human.png',
                title: 'Complex Searching',
                caption: 'Filters are able to be used too, and results are based on a scoring algorithm.'
            }
        ]
    }
]; // basically json...
/* harmony default export */ __webpack_exports__["a"] = (ProjectData);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(15);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'hash',
    routes: [
        { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages__["a" /* HomePage */] },
        { path: '/projects/:id', component: __WEBPACK_IMPORTED_MODULE_2__pages__["b" /* ProjectPage */] },
        { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__pages__["c" /* NotFoundPage */] }
    ]
}));


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_material__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_material___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_material__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_material_dist_vue_material_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_material_dist_vue_material_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_material_dist_vue_material_css__);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_material___default.a);
/* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].material.registerTheme({
    default: {
        primary: 'white',
        accent: 'blue',
        warn: 'deep-orange',
        background: 'white'
    }
}));


/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(4);





console.log('Environment:', "development");
var v = new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],
    el: '#main'
});


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__home_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_data__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'home',
    template: '<div id=\'home\'>\n  <md-card>\n    <md-card-header>\n      <div class=\'md-title\'>Hello there!</div>\n    </md-card-header>\n    <md-card-content>\n      <p>\n        I\'m Michael Fedora, a self-taught coder, artist, and inventor. Welcome to my home!\n      </p>\n      <p>\n        Up top are a couple links to my online profiles,\n        and in the card below is a portfolio of projects I\'ve done,\n        which contains things I\'ve created for myself or other clients,\n        including companies I\'ve worked for.\n      </p>\n    </md-card-content>\n  </md-card>\n\n  <md-card>\n    <md-card-header>\n      <div class=\'md-title\'>Code Portfolio</div>\n    </md-card-header>\n\n    <md-card-content style=\'box-sizing: content-box\'>\n      <md-tabs md-right>\n        <md-tab id=\'featured\' md-label=\'featured\'>\n          <md-layout md-gutter id=\'projects-layout\' md-align=\'center\'>\n            <router-link v-for=\'project of featuredProjects\' :key=\'project.name\' :title=\'project.name\' :to=\'"/projects/" + project.name\'>\n              <md-image :md-src=\'getImageSrc(project.name)\' :alt=\'project.name\'></md-image>\n            </router-link>\n          </md-layout>\n        </md-tab>\n\n        <md-tab id=\'everything\' md-label=\'everything\'>\n          <md-layout md-gutter id=\'projects-layout\' md-align=\'center\'>\n            <a v-for=\'project of projects\' :title=\'project.name\' :href=\'"/projects/" + project.name\'>\n              <md-image :md-src=\'getImageSrc(project.name)\' :alt=\'project.name\'></md-image>\n            </a>\n          </md-layout>\n        </md-tab>\n      </md-tabs>\n    </md-card-content>\n  </md-card>\n</div>\n',
    data: function () {
        return {
            projects: __WEBPACK_IMPORTED_MODULE_1__project_data__["a" /* default */]
        };
    },
    computed: {
        featuredProjects: function (dis) {
            return dis.projects.filter(function (a) { return a.featured || false; });
        }
    },
    methods: {
        getImageSrc: function (name) {
            return 'assets/gfx/projects/' + name + '.png';
        },
    }
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_project__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_home__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__project_project__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__not_found_not_found__["a"]; });






/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__not_found_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__not_found_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__not_found_css__);

/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'not-found',
    template: '<div id=\'not-found\'>\n  <md-card>\n    <md-card-header>\n      <div class=\'md-title\'>404 Not Found</div>\n      <div class=\'md-subtitle\'>(╯°□°）╯︵ ┻━┻</div>\n    </md-card-header>\n    <md-card-content>\n      <p>\n        Looks like you were trying to go somehwere that doesn\'t exist! Try going\n        <router-link to=\'/\'>home</router-link>?\n      </p>\n    </md-card-content>\n  </md-card>\n</div>\n',
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__project_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_data__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'project',
    template: '<div id=\'project\'>\n\n  <md-dialog ref=\'dialog1\' @open=\'onOpen\' @close=\'onClose\'>\n    <md-card>\n      <md-card-media style=\'overflow: hidden\'>\n        <md-image :md-src=\'getDetailImageSrc(detailed.image)\' :alt=\'detailed.image\'></md-image>\n      </md-card-media>\n\n      <md-card-header>\n        <div class=\'md-title\'>{{ detailed.title }}</div>\n        <div class=\'md-subhead\'>{{ detailed.caption }}</div>\n      </md-card-header>\n\n      <md-card-actions>\n        <md-button v-if=\'idx > 0\' class=\'md-icon-button\' @click.native=\'prevDetail()\'><md-icon>navigate_before</md-icon></md-button>\n        <span style=\'flex: 1\'></span>\n        <md-button v-if=\'project && idx < project.details.length - 1\' class=\'md-icon-button\' @click.native=\'nextDetail()\'><md-icon>navigate_next</md-icon></md-button>\n      </md-card-actions>\n    </md-card>\n  </md-dialog>\n\n  <md-card v-if=\'project\'>\n    <md-card-header>\n      <md-avatar class=\'md-large\'>\n        <md-image :md-src=\'getImageSrc(project.name)\' />\n      </md-avatar>\n      <div class=\'md-title\'>{{ project.name }}</div>\n      <div class=\'md-subhead\'>{{ project.caption }}</div>\n    </md-card-header>\n    <md-card-content>\n      <p>\n        {{ project.description }}\n      </p>\n\n      <md-layout md-gutter id=\'projects-layout\' md-align=\'center\' v-if=\'project.details.length > 0\'>\n        <md-button v-for=\'(detail, index) of project.details\' :key=\'detail.name\' @click.native=\'openDialog("dialog1", index)\' :title=\'detail.title\'>\n          <md-image :md-src=\'getDetailImageSrc(detail.image)\' :alt=\'detail.image\'></md-image>\n        </md-button>\n      </md-layout>\n    </md-card-content>\n  </md-card>\n\n  <md-card v-else>\n    <md-card-header>\n      <div class=\'md-title\'>No project found with that name</div>\n    </md-card-header>\n    <md-card-content>\n      <p>\n        Sorry :(\n      </p>\n    </md-card-content>\n  </md-card>\n</div>\n',
    data: function () {
        return {
            project: { details: [] },
            detailed: {},
            idx: 0
        };
    },
    created: function () {
        var _this = this;
        this.project = __WEBPACK_IMPORTED_MODULE_1__project_data__["a" /* default */].find(function (a) { return a.name === _this.$route.params.id; }) || null;
    },
    methods: {
        humanizeURL: function (url) {
            return url
                .replace(/^https?:\/\//, '')
                .replace(/\/$/, '');
        },
        openDialog: function (ref, idx) {
            this.detailed = this.project.details[idx];
            this.idx = idx;
            this.$refs[ref].open();
        },
        closeDialog: function (ref) {
            this.$refs[ref].close();
        },
        onOpen: function () {
        },
        onClose: function (type) {
            this.detailed = {};
            this.idx = 0;
        },
        prevDetail: function () {
            this.idx--;
            this.detailed = this.project.details[this.idx];
        },
        nextDetail: function () {
            this.idx++;
            this.detailed = this.project.details[this.idx];
        },
        getImageSrc: function (name) {
            return '/assets/gfx/projects/' + name + '.png';
        },
        getDetailImageSrc: function (detailImage) {
            if (!detailImage)
                return '';
            return this.project ? '/assets/gfx/projects/' + this.project.name + '/' + detailImage : '';
        }
    }
});


/***/ })
],[13]);