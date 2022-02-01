/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./listIcon.svg */ "./src/listIcon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    min-width: 900px;\r\n}\r\n\r\n.header {\r\n    background-color: rgb(1, 128, 179);\r\n    position: fixed;\r\n    color: white;\r\n    font-size: max(5vh, 36px);\r\n    width: 100%;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 1;\r\n}\r\n\r\n.mainIcon {\r\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-left: 45px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.nav {\r\n    overflow-y: auto;\r\n    z-index: auto;\r\n    background-color: rgb(240, 240, 240);\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 15vw;\r\n    min-width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.navBtn {\r\n    font-size: max(2.5vh, 16px);\r\n    padding: 5px;\r\n    border-style: none;\r\n    background-color: rgb(240, 240, 240);\r\n    width: max(10vw, 80%);\r\n    display: inline;\r\n    border-radius: 5px;\r\n    text-align: left;\r\n\r\n    /* Got these from https://www.w3schools.com/cssref/css3_pr_text-overflow.asp */\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.navBtn:hover {\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n.inbox {\r\n    margin-top: max(12vh, 80px);\r\n}\r\n\r\n.projects {\r\n    font-size: max(3vh, 24px);\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\nspan {\r\n    margin: 10px;\r\n}\r\n\r\ni {\r\n    margin-right: 5%;\r\n}\r\n\r\n.newTodo {\r\n    margin-right: 2px;\r\n}\r\n\r\n.selected {\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n.mainContent {\r\n    height: 100vh;\r\n    display: flex;\r\n    margin-left: max(15vw, 200px);\r\n}\r\n\r\n.contentTitle {\r\n    position: fixed;\r\n    margin-left: 10%;\r\n    margin-top: max(12vh, 100px);\r\n    font-size: max(4vh, 28px);\r\n    max-width: 40%;\r\n    max-height: max(12vh, 80px);\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.projectContent {\r\n    width: 80%;\r\n    margin-left: 12%;\r\n    margin-top: max(24vh, 200px);\r\n}\r\n\r\n.addNewTodo {\r\n    width: 80%;\r\n    border-style: none;\r\n    text-align: left;\r\n    font-size: max(2vh, 18px);\r\n    background-color: rgb(240, 240, 240);\r\n    border-radius: 5px;\r\n}\r\n\r\n.addNewTodo:hover {\r\n    background-color: rgb(214, 214, 214);\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.newProjectForm {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 10px;\r\n    width: 80%;\r\n}\r\n\r\n.newProjectName {\r\n    padding: 5px;\r\n    width: 95%;\r\n    font-size: max(2vh, 12px);\r\n    border-radius: 5px;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: rgb(95, 95, 95);\r\n}\r\n\r\n.newProjectBtns {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 5px;\r\n}\r\n\r\n.addProjectBtn, .cancelProjectBtn {\r\n    color: white;\r\n    border-style: solid;\r\n    border-color: rgb(202, 172, 0);\r\n    border-radius: 5px;\r\n    font-size: 24px;\r\n    width: 48%;\r\n    padding: 5px 0;\r\n}\r\n\r\n.addProjectBtn {\r\n    background-color: green;\r\n}\r\n\r\n.addProjectBtn:hover {\r\n    background-color: rgb(0, 180, 0);\r\n}\r\n\r\n.cancelProjectBtn {\r\n    background-color: red;\r\n}\r\n\r\n.cancelProjectBtn:hover {\r\n    background-color: rgb(200, 0, 0);\r\n}\r\n\r\n.deleteBtn {\r\n    position: fixed;\r\n    margin-top: max(12vh, 110px);\r\n    margin-left: 50%;\r\n    background-color: white;\r\n    border-style: solid;\r\n    border-color:rgb(78, 47, 0);\r\n    font-size: 18px;\r\n    padding: 5px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.deleteBtn:hover {\r\n    color: white;\r\n    background-color: red;\r\n    border-color: rgb(202, 172, 0);\r\n    transition: 0.2s;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,wEAAwE;IACxE,gBAAgB;AACpB;;AAEA;IACI,kCAAkC;IAClC,eAAe;IACf,YAAY;IACZ,yBAAyB;IACzB,WAAW;IACX,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,gDAA8B;IAC9B,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,eAAe;IACf,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;IACpC,qBAAqB;IACrB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;;IAEhB,8EAA8E;IAC9E,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,4BAA4B;IAC5B,yBAAyB;IACzB,cAAc;IACd,2BAA2B;IAC3B,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,4BAA4B;AAChC;;AAEA;IACI,UAAU;IACV,kBAAkB;IAClB,gBAAgB;IAChB,yBAAyB;IACzB,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,yBAAyB;IACzB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,8BAA8B;IAC9B,kBAAkB;IAClB,eAAe;IACf,UAAU;IACV,cAAc;AAClB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,eAAe;IACf,4BAA4B;IAC5B,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,gBAAgB;AACpB","sourcesContent":["body {\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n    min-width: 900px;\r\n}\r\n\r\n.header {\r\n    background-color: rgb(1, 128, 179);\r\n    position: fixed;\r\n    color: white;\r\n    font-size: max(5vh, 36px);\r\n    width: 100%;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    z-index: 1;\r\n}\r\n\r\n.mainIcon {\r\n    content: url('./listIcon.svg');\r\n    width: 50px;\r\n    height: 50px;\r\n    margin-left: 45px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.nav {\r\n    overflow-y: auto;\r\n    z-index: auto;\r\n    background-color: rgb(240, 240, 240);\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 15vw;\r\n    min-width: 200px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.navBtn {\r\n    font-size: max(2.5vh, 16px);\r\n    padding: 5px;\r\n    border-style: none;\r\n    background-color: rgb(240, 240, 240);\r\n    width: max(10vw, 80%);\r\n    display: inline;\r\n    border-radius: 5px;\r\n    text-align: left;\r\n\r\n    /* Got these from https://www.w3schools.com/cssref/css3_pr_text-overflow.asp */\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.navBtn:hover {\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n.inbox {\r\n    margin-top: max(12vh, 80px);\r\n}\r\n\r\n.projects {\r\n    font-size: max(3vh, 24px);\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\nspan {\r\n    margin: 10px;\r\n}\r\n\r\ni {\r\n    margin-right: 5%;\r\n}\r\n\r\n.newTodo {\r\n    margin-right: 2px;\r\n}\r\n\r\n.selected {\r\n    background-color: rgb(221, 221, 221);\r\n}\r\n\r\n.mainContent {\r\n    height: 100vh;\r\n    display: flex;\r\n    margin-left: max(15vw, 200px);\r\n}\r\n\r\n.contentTitle {\r\n    position: fixed;\r\n    margin-left: 10%;\r\n    margin-top: max(12vh, 100px);\r\n    font-size: max(4vh, 28px);\r\n    max-width: 40%;\r\n    max-height: max(12vh, 80px);\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.projectContent {\r\n    width: 80%;\r\n    margin-left: 12%;\r\n    margin-top: max(24vh, 200px);\r\n}\r\n\r\n.addNewTodo {\r\n    width: 80%;\r\n    border-style: none;\r\n    text-align: left;\r\n    font-size: max(2vh, 18px);\r\n    background-color: rgb(240, 240, 240);\r\n    border-radius: 5px;\r\n}\r\n\r\n.addNewTodo:hover {\r\n    background-color: rgb(214, 214, 214);\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.newProjectForm {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 10px;\r\n    width: 80%;\r\n}\r\n\r\n.newProjectName {\r\n    padding: 5px;\r\n    width: 95%;\r\n    font-size: max(2vh, 12px);\r\n    border-radius: 5px;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: rgb(95, 95, 95);\r\n}\r\n\r\n.newProjectBtns {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin-top: 5px;\r\n}\r\n\r\n.addProjectBtn, .cancelProjectBtn {\r\n    color: white;\r\n    border-style: solid;\r\n    border-color: rgb(202, 172, 0);\r\n    border-radius: 5px;\r\n    font-size: 24px;\r\n    width: 48%;\r\n    padding: 5px 0;\r\n}\r\n\r\n.addProjectBtn {\r\n    background-color: green;\r\n}\r\n\r\n.addProjectBtn:hover {\r\n    background-color: rgb(0, 180, 0);\r\n}\r\n\r\n.cancelProjectBtn {\r\n    background-color: red;\r\n}\r\n\r\n.cancelProjectBtn:hover {\r\n    background-color: rgb(200, 0, 0);\r\n}\r\n\r\n.deleteBtn {\r\n    position: fixed;\r\n    margin-top: max(12vh, 110px);\r\n    margin-left: 50%;\r\n    background-color: white;\r\n    border-style: solid;\r\n    border-color:rgb(78, 47, 0);\r\n    font-size: 18px;\r\n    padding: 5px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.deleteBtn:hover {\r\n    color: white;\r\n    background-color: red;\r\n    border-color: rgb(202, 172, 0);\r\n    transition: 0.2s;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual */ "./src/visual.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);




function createProject(title) {
    const projectObject = addProjectToArray(title);
    const project = document.createElement('button');
    project.classList.add('navBtn');
    project.classList.add('project');
    project.innerHTML = `<i class="fas fa-list"></i> ${title}`;
    project.id = projectObject.id;
    document.querySelector('.projectList').appendChild(project);
    _visual__WEBPACK_IMPORTED_MODULE_0__["default"].newProjectBtn(project);
};

function addProjectToArray(title) {
    let newProject = _factories__WEBPACK_IMPORTED_MODULE_2__["default"].project(title, ___WEBPACK_IMPORTED_MODULE_1__.idNumerator.num);
    ___WEBPACK_IMPORTED_MODULE_1__["default"].push(newProject);
    ___WEBPACK_IMPORTED_MODULE_1__.idNumerator.num++;
    return newProject;
}

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const factories = (() => {
    const todo = (project, title, description, dueDate, priority) => {
        return { project, title, description, dueDate, priority };
    }

    const project = (title, id) => {
        return { title, id };
    }

    return {
        todo,
        project,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (factories);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "idNumerator": () => (/* binding */ idNumerator)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _visual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visual */ "./src/visual.js");



const projects = projectArray();
let idNumerator = {
    num: 0,
};
_visual__WEBPACK_IMPORTED_MODULE_1__["default"].initialInboxDisplay();
_visual__WEBPACK_IMPORTED_MODULE_1__["default"].buttonListener();


function projectArray() {
    const projectArray = [];
    return projectArray;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/loadContent.js":
/*!****************************!*\
  !*** ./src/loadContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContent);

function loadContent() {
    const addNewTodo = document.createElement('button');
    addNewTodo.classList.add("addNewTodo");
    addNewTodo.innerHTML = '<i class="fas fa-plus newTodo"></i> Add New Todo';
    return addNewTodo;
}

/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProject */ "./src/createProject.js");


const newProject = (() => {

    const _hideButton = () => {
        const newProjectButton = document.querySelector('.addNewProject');
        newProjectButton.classList.add('hidden');
    };

    const _createDisplay = () => {
        const newProjectDisplay = document.createElement('div');
        const projectName = document.createElement('input');
        const buttons = document.createElement('div');
        const addButton = document.createElement('button');
        const cancelButton = document.createElement('button');
        newProjectDisplay.classList.add('newProjectForm');
        addButton.classList.add('addProjectBtn');
        addButton.innerHTML = "Add";
        cancelButton.classList.add('cancelProjectBtn');
        cancelButton.innerHTML = "Cancel";
        buttons.classList.add('newProjectBtns');
        projectName.type = 'text';
        projectName.required = true;
        projectName.classList.add('newProjectName');
        buttons.appendChild(addButton);
        buttons.appendChild(cancelButton);
        newProjectDisplay.appendChild(projectName);
        newProjectDisplay.appendChild(buttons);
        document.querySelector('.projects').appendChild(newProjectDisplay);
    };

    const _reverseDisplay = () => {
        document.querySelector('.newProjectForm').remove();
        document.querySelector('.addNewProject').classList.remove('hidden');
    };



    const mainChange = () => {

        _hideButton();
        _createDisplay();

        document.querySelector('.cancelProjectBtn').addEventListener('click', function() {
            _reverseDisplay();
        });
        
        document.querySelector('.addProjectBtn').addEventListener('click', function() {
            const name = document.querySelector('.newProjectName');
            if (name.value.length > 50) {
                alert("Please enter a title smaller than or equal to 50 characters in length");
            }
             else if (!name.value == "") {
                (0,_createProject__WEBPACK_IMPORTED_MODULE_0__["default"])(name.value);
                _reverseDisplay();
            };
        });
    };

    return {
        mainChange,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProject);

/***/ }),

/***/ "./src/rmProject.js":
/*!**************************!*\
  !*** ./src/rmProject.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeProject);

function removeProject() {
    const projectTitle = document.querySelector('.contentTitle');
    for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_0__["default"].length; i++) {
        if (___WEBPACK_IMPORTED_MODULE_0__["default"][i].title == projectTitle.innerHTML) {
            document.getElementById(`${___WEBPACK_IMPORTED_MODULE_0__["default"][i].id}`).remove();
            ___WEBPACK_IMPORTED_MODULE_0__["default"].splice(i, 1);
        }
    }
};

/***/ }),

/***/ "./src/visual.js":
/*!***********************!*\
  !*** ./src/visual.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadContent */ "./src/loadContent.js");
/* harmony import */ var _newProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newProject */ "./src/newProject.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _rmProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rmProject */ "./src/rmProject.js");





const visualDisplay = (() => {

    const _clearDisplay = () => {
        const oldContent = document.querySelector('.projectContent');
        oldContent.remove();
    }

    const _displayContent = (div) => {
        const title = _getTitle(div);
        const contentTitle = document.querySelector('.contentTitle');
        contentTitle.innerHTML = title;
        const projectContent = document.createElement('div');
        projectContent.classList.add('projectContent');
        projectContent.appendChild((0,_loadContent__WEBPACK_IMPORTED_MODULE_0__["default"])());
        document.querySelector('.mainContent').appendChild(projectContent);
    }

    const _updateDisplay = (div) => {
        const buttons = document.querySelectorAll('.navBtn');
        for (let j = 0; j < buttons.length; j++) {
            if (buttons[j].classList.contains('selected')) {
                buttons[j].classList.remove('selected');
            };
        };
        div.classList.add('selected');
        if (div.classList.contains("project") && !document.querySelector('.deleteBtn')) {
            _addDelBtn();
        }
        else if (document.querySelector('.deleteBtn') && !div.classList.contains("project")) {
            _rmDelBtn();
        };
        _clearDisplay();
        _displayContent(div);
    };

    const _getTitle = (div) => {
        if (div.classList.contains('inbox')) {
            return "Inbox";
        };
        if (div.classList.contains('today')) {
            return "Today";
        };
        if (div.classList.contains('thisWeek')) {
            return "This Week";
        };
        if (div.classList.contains('project')) {
            for (let i = 0; i < ___WEBPACK_IMPORTED_MODULE_2__["default"].length; i++) {
                if (___WEBPACK_IMPORTED_MODULE_2__["default"][i].id == div.id) {
                    return ___WEBPACK_IMPORTED_MODULE_2__["default"][i].title;
                }
            }
        };
        return "Error";
    };

    const _addDelBtn = () => {
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML = 'Delete Project';
        document.querySelector('.contentHead').appendChild(deleteBtn);
        deleteBtn.addEventListener('click', function() {
            (0,_rmProject__WEBPACK_IMPORTED_MODULE_3__["default"])();
            _rmDelBtn();
            _updateDisplay(document.querySelector('.inbox'));
        });
    };

    const _rmDelBtn = () => {
        document.querySelector('.deleteBtn').remove();
    };

    const _loadProjectIntoPage = () => {
        //
    };



    const initialInboxDisplay = () => {
        const inbox = document.querySelector('.inbox');
        const contentTitle = document.querySelector('.contentTitle');
        const content = document.createElement('div');
        content.classList.add('projectContent');
        content.appendChild((0,_loadContent__WEBPACK_IMPORTED_MODULE_0__["default"])());
        inbox.classList.add('selected');
        contentTitle.innerHTML = "Inbox";
        document.querySelector('.mainContent').appendChild(content);
    };

    const buttonListener = () => {
        const navBtns = document.querySelectorAll('.navBtn');
        for (let i = 0; i < navBtns.length; i++) {
            navBtns[i].addEventListener('click', function() {
                if (!navBtns[i].classList.contains('addNewProject')) {
                    _updateDisplay(navBtns[i]);
                }
                else {
                    _newProject__WEBPACK_IMPORTED_MODULE_1__["default"].mainChange();
                };
            });
        };
    };

    const newProjectBtn = (button) => {
        button.addEventListener('click', function() {
            _updateDisplay(button);
        });
    };

    return {
        initialInboxDisplay,
        buttonListener,
        newProjectBtn,
    };
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visualDisplay);

/***/ }),

/***/ "./src/listIcon.svg":
/*!**************************!*\
  !*** ./src/listIcon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e625643a0de3f34346bc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL3RvZG8tbGlzdHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3RzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3RzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3RzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy8uL3NyYy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdHMvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy8uL3NyYy9sb2FkQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3RzLy4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy8uL3NyYy9ybVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy8uL3NyYy92aXN1YWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3RzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3RzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3RzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbGlzdEljb24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDEyOCwgMTc5KTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWF4KDV2aCwgMzZweCk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkljb24ge1xcclxcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2IHtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgei1pbmRleDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdG4ge1xcclxcbiAgICBmb250LXNpemU6IG1heCgyLjV2aCwgMTZweCk7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxyXFxuICAgIHdpZHRoOiBtYXgoMTB2dywgODAlKTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFxyXFxuICAgIC8qIEdvdCB0aGVzZSBmcm9tIGh0dHBzOi8vd3d3Lnczc2Nob29scy5jb20vY3NzcmVmL2NzczNfcHJfdGV4dC1vdmVyZmxvdy5hc3AgKi9cXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5uYXZCdG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XFxyXFxufVxcclxcblxcclxcbi5pbmJveCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IG1heCgxMnZoLCA4MHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gICAgZm9udC1zaXplOiBtYXgoM3ZoLCAyNHB4KTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNSU7XFxyXFxufVxcclxcblxcclxcbi5uZXdUb2RvIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW5Db250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IG1heCgxNXZ3LCAyMDBweCk7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50VGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IG1heCgxMnZoLCAxMDBweCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWF4KDR2aCwgMjhweCk7XFxyXFxuICAgIG1heC13aWR0aDogNDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiBtYXgoMTJ2aCwgODBweCk7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdENvbnRlbnQge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTIlO1xcclxcbiAgICBtYXJnaW4tdG9wOiBtYXgoMjR2aCwgMjAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkTmV3VG9kbyB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgZm9udC1zaXplOiBtYXgoMnZoLCAxOHB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hZGROZXdUb2RvOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNCwgMjE0LCAyMTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Byb2plY3RGb3JtIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Byb2plY3ROYW1lIHtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB3aWR0aDogOTUlO1xcclxcbiAgICBmb250LXNpemU6IG1heCgydmgsIDEycHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci13aWR0aDogMnB4O1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYig5NSwgOTUsIDk1KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1Byb2plY3RCdG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3RCdG4sIC5jYW5jZWxQcm9qZWN0QnRuIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IHJnYigyMDIsIDE3MiwgMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICB3aWR0aDogNDglO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3RCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFByb2plY3RCdG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTgwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbFByb2plY3RCdG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5jYW5jZWxQcm9qZWN0QnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVCdG4ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IG1heCgxMnZoLCAxMTBweCk7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6cmdiKDc4LCA0NywgMCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlQnRuOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIwMiwgMTcyLCAwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysd0VBQXdFO0lBQ3hFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0RBQThCO0lBQzlCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLDhFQUE4RTtJQUM5RSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJywgJ0FyaWFsIE5hcnJvdycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDEyOCwgMTc5KTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWF4KDV2aCwgMzZweCk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkljb24ge1xcclxcbiAgICBjb250ZW50OiB1cmwoJy4vbGlzdEljb24uc3ZnJyk7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYge1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICB6LWluZGV4OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTV2dztcXHJcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJ0biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWF4KDIuNXZoLCAxNnB4KTtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXHJcXG4gICAgd2lkdGg6IG1heCgxMHZ3LCA4MCUpO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHJcXG4gICAgLyogR290IHRoZXNlIGZyb20gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9jc3NyZWYvY3NzM19wcl90ZXh0LW92ZXJmbG93LmFzcCAqL1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMjIxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmluYm94IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogbWF4KDEydmgsIDgwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBmb250LXNpemU6IG1heCgzdmgsIDI0cHgpO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld1RvZG8ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAyMjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbkNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogbWF4KDE1dncsIDIwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnRUaXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogbWF4KDEydmgsIDEwMHB4KTtcXHJcXG4gICAgZm9udC1zaXplOiBtYXgoNHZoLCAyOHB4KTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IG1heCgxMnZoLCA4MHB4KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0Q29udGVudCB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMiU7XFxyXFxuICAgIG1hcmdpbi10b3A6IG1heCgyNHZoLCAyMDBweCk7XFxyXFxufVxcclxcblxcclxcbi5hZGROZXdUb2RvIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgICBmb250LXNpemU6IG1heCgydmgsIDE4cHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZE5ld1RvZG86aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE0LCAyMTQsIDIxNCk7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3UHJvamVjdEZvcm0ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3UHJvamVjdE5hbWUge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWF4KDJ2aCwgMTJweCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDk1LCA5NSwgOTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3UHJvamVjdEJ0bnMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkUHJvamVjdEJ0biwgLmNhbmNlbFByb2plY3RCdG4ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIwMiwgMTcyLCAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHdpZHRoOiA0OCU7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkUHJvamVjdEJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkUHJvamVjdEJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxODAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FuY2VsUHJvamVjdEJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhbmNlbFByb2plY3RCdG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZUJ0biB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogbWF4KDEydmgsIDExMHB4KTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjpyZ2IoNzgsIDQ3LCAwKTtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGVCdG46aG92ZXIge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjAyLCAxNzIsIDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdDtcclxuaW1wb3J0IHZpc3VhbERpc3BsYXkgZnJvbSBcIi4vdmlzdWFsXCI7XHJcbmltcG9ydCBwcm9qZWN0cywgeyBpZE51bWVyYXRvciB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCBmYWN0b3JpZXMgZnJvbSBcIi4vZmFjdG9yaWVzXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0T2JqZWN0ID0gYWRkUHJvamVjdFRvQXJyYXkodGl0bGUpO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCduYXZCdG4nKTtcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xyXG4gICAgcHJvamVjdC5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYXMgZmEtbGlzdFwiPjwvaT4gJHt0aXRsZX1gO1xyXG4gICAgcHJvamVjdC5pZCA9IHByb2plY3RPYmplY3QuaWQ7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKS5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuICAgIHZpc3VhbERpc3BsYXkubmV3UHJvamVjdEJ0bihwcm9qZWN0KTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RUb0FycmF5KHRpdGxlKSB7XHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IGZhY3Rvcmllcy5wcm9qZWN0KHRpdGxlLCBpZE51bWVyYXRvci5udW0pO1xyXG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIGlkTnVtZXJhdG9yLm51bSsrO1xyXG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbn0iLCJjb25zdCBmYWN0b3JpZXMgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgdG9kbyA9IChwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgcHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2plY3QgPSAodGl0bGUsIGlkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGlkIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b2RvLFxyXG4gICAgICAgIHByb2plY3QsXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYWN0b3JpZXM7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB2aXN1YWxEaXNwbGF5IGZyb20gJy4vdmlzdWFsJztcclxuXHJcbmNvbnN0IHByb2plY3RzID0gcHJvamVjdEFycmF5KCk7XHJcbmxldCBpZE51bWVyYXRvciA9IHtcclxuICAgIG51bTogMCxcclxufTtcclxudmlzdWFsRGlzcGxheS5pbml0aWFsSW5ib3hEaXNwbGF5KCk7XHJcbnZpc3VhbERpc3BsYXkuYnV0dG9uTGlzdGVuZXIoKTtcclxuXHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0QXJyYXkoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0QXJyYXkgPSBbXTtcclxuICAgIHJldHVybiBwcm9qZWN0QXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzO1xyXG5leHBvcnQgeyBpZE51bWVyYXRvciB9OyIsImV4cG9ydCBkZWZhdWx0IGxvYWRDb250ZW50O1xyXG5cclxuZnVuY3Rpb24gbG9hZENvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBhZGROZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBhZGROZXdUb2RvLmNsYXNzTGlzdC5hZGQoXCJhZGROZXdUb2RvXCIpO1xyXG4gICAgYWRkTmV3VG9kby5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtcGx1cyBuZXdUb2RvXCI+PC9pPiBBZGQgTmV3IFRvZG8nO1xyXG4gICAgcmV0dXJuIGFkZE5ld1RvZG87XHJcbn0iLCJpbXBvcnQgY3JlYXRlUHJvamVjdCBmcm9tIFwiLi9jcmVhdGVQcm9qZWN0XCI7XHJcblxyXG5jb25zdCBuZXdQcm9qZWN0ID0gKCgpID0+IHtcclxuXHJcbiAgICBjb25zdCBfaGlkZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZE5ld1Byb2plY3QnKTtcclxuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfY3JlYXRlRGlzcGxheSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbmV3UHJvamVjdERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdEZvcm0nKTtcclxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ0bicpO1xyXG4gICAgICAgIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZFwiO1xyXG4gICAgICAgIGNhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjYW5jZWxQcm9qZWN0QnRuJyk7XHJcbiAgICAgICAgY2FuY2VsQnV0dG9uLmlubmVySFRNTCA9IFwiQ2FuY2VsXCI7XHJcbiAgICAgICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0QnRucycpO1xyXG4gICAgICAgIHByb2plY3ROYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgcHJvamVjdE5hbWUucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3ROYW1lJyk7XHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xyXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcclxuICAgICAgICBuZXdQcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgbmV3UHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpc3BsYXkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfcmV2ZXJzZURpc3BsYXkgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3RGb3JtJykucmVtb3ZlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZE5ld1Byb2plY3QnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBtYWluQ2hhbmdlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBfaGlkZUJ1dHRvbigpO1xyXG4gICAgICAgIF9jcmVhdGVEaXNwbGF5KCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWxQcm9qZWN0QnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgX3JldmVyc2VEaXNwbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2plY3ROYW1lJyk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lLnZhbHVlLmxlbmd0aCA+IDUwKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlBsZWFzZSBlbnRlciBhIHRpdGxlIHNtYWxsZXIgdGhhbiBvciBlcXVhbCB0byA1MCBjaGFyYWN0ZXJzIGluIGxlbmd0aFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgZWxzZSBpZiAoIW5hbWUudmFsdWUgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdChuYW1lLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIF9yZXZlcnNlRGlzcGxheSgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW5DaGFuZ2UsXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3UHJvamVjdDsiLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi5cIjtcclxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlUHJvamVjdDtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHByb2plY3RzW2ldLnRpdGxlID09IHByb2plY3RUaXRsZS5pbm5lckhUTUwpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cHJvamVjdHNbaV0uaWR9YCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IGxvYWRDb250ZW50IGZyb20gXCIuL2xvYWRDb250ZW50XCI7XHJcbmltcG9ydCBuZXdQcm9qZWN0IGZyb20gXCIuL25ld1Byb2plY3RcIjtcclxuaW1wb3J0IHByb2plY3RzIGZyb20gXCIuXCI7XHJcbmltcG9ydCByZW1vdmVQcm9qZWN0IGZyb20gXCIuL3JtUHJvamVjdFwiO1xyXG5cclxuY29uc3QgdmlzdWFsRGlzcGxheSA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgX2NsZWFyRGlzcGxheSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBvbGRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RDb250ZW50Jyk7XHJcbiAgICAgICAgb2xkQ29udGVudC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfZGlzcGxheUNvbnRlbnQgPSAoZGl2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBfZ2V0VGl0bGUoZGl2KTtcclxuICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJyk7XHJcbiAgICAgICAgY29udGVudFRpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdENvbnRlbnQnKTtcclxuICAgICAgICBwcm9qZWN0Q29udGVudC5hcHBlbmRDaGlsZChsb2FkQ29udGVudCgpKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbkNvbnRlbnQnKS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3VwZGF0ZURpc3BsYXkgPSAoZGl2KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXZCdG4nKTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGJ1dHRvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgaWYgKGJ1dHRvbnNbal0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zW2pdLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RcIikgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVCdG4nKSkge1xyXG4gICAgICAgICAgICBfYWRkRGVsQnRuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVCdG4nKSAmJiAhZGl2LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RcIikpIHtcclxuICAgICAgICAgICAgX3JtRGVsQnRuKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfY2xlYXJEaXNwbGF5KCk7XHJcbiAgICAgICAgX2Rpc3BsYXlDb250ZW50KGRpdik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9nZXRUaXRsZSA9IChkaXYpID0+IHtcclxuICAgICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucygnaW5ib3gnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJbmJveFwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZGF5JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiVG9kYXlcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKCd0aGlzV2VlaycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIlRoaXMgV2Vla1wiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvamVjdHNbaV0uaWQgPT0gZGl2LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzW2ldLnRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gXCJFcnJvclwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBfYWRkRGVsQnRuID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdkZWxldGVCdG4nKTtcclxuICAgICAgICBkZWxldGVCdG4uaW5uZXJIVE1MID0gJ0RlbGV0ZSBQcm9qZWN0JztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudEhlYWQnKS5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0KCk7XHJcbiAgICAgICAgICAgIF9ybURlbEJ0bigpO1xyXG4gICAgICAgICAgICBfdXBkYXRlRGlzcGxheShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9ybURlbEJ0biA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlQnRuJykucmVtb3ZlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IF9sb2FkUHJvamVjdEludG9QYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaW5pdGlhbEluYm94RGlzcGxheSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKTtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGVudCcpO1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9hZENvbnRlbnQoKSk7XHJcbiAgICAgICAgaW5ib3guY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcclxuICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJIVE1MID0gXCJJbmJveFwiO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluQ29udGVudCcpLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBidXR0b25MaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdkJ0bicpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2QnRucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuYXZCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5hdkJ0bnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGROZXdQcm9qZWN0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdXBkYXRlRGlzcGxheShuYXZCdG5zW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb2plY3QubWFpbkNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmV3UHJvamVjdEJ0biA9IChidXR0b24pID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgX3VwZGF0ZURpc3BsYXkoYnV0dG9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0aWFsSW5ib3hEaXNwbGF5LFxyXG4gICAgICAgIGJ1dHRvbkxpc3RlbmVyLFxyXG4gICAgICAgIG5ld1Byb2plY3RCdG4sXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZpc3VhbERpc3BsYXk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==