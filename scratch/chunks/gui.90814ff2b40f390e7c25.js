var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([[4],{

/***/ 1296:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2016);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 1596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1597);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1599);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1611);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1628);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71);
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(153);
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(391);
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(392);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1296);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Polyfills



 // For Safari 9







 // riven fix right click context menu



if ( true && (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
  // Warn before navigating away
  window.onbeforeunload = function () {
    return true;
  };
} // Register "base" page view


_lib_analytics__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].pageview('/'); // fix: ??????????????????????????????????????????
// #I39OPF 
// fixContextMenu()

var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_10___default.a.app;
document.body.appendChild(appTarget);

if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  __webpack_require__(2017).default(appTarget);
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].setAppElement(appTarget);
  var WrappedBrowserModalComponent = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], true
  /* localesOnly */
  );

  var handleBack = function handleBack() {}; // eslint-disable-next-line react/jsx-no-bind


  react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}

/***/ }),

/***/ 1630:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2016:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n.index_app_3Qs6X {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\nbody{\n    overflow: hidden;\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\n", ""]);

// exports
exports.locals = {
	"app": "index_app_3Qs6X"
};

/***/ }),

/***/ 2017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(153);
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(174);
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(195);
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var _lib_kittenapi_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }










var onClickLogo = function onClickLogo() {
  window.location = 'https://scratch.mit.edu';
};

var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('User canceled telemetry modal');
};

var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('User opted into telemetry');
};

var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])('User opted out of telemetry');
};
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */


/* harmony default export */ __webpack_exports__["default"] = (function (appTarget) {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].setAppElement(appTarget); // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.

  var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_2__[/* compose */ "d"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // TODO a hack for testing the backpack, allow backpack host to be set by url param
  // const backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  // const backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;

  var backpackHost = "https://kpi.kittenbot.cn/api/backpack"; // const backpackHost = "http://localhost:5000/api/backpack"

  var projectHost = "https://kpi.kittenbot.cn/api/sb3";
  var scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  var simulateScratchDesktop;

  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }

  if ( true && (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
    // Warn before navigating away
    window.onbeforeunload = function () {
      return true;
    };
  } // ???????????????????????????
  // if (process.env.NODE_ENV !== 'production'){
  //     projectHost = '/api/sb3';
  //     setServer('http://localhost:5000/api');
  // }


  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    backpackVisible: true // showComingSoon
    ,
    backpackHost: backpackHost // canSave={true}
    // onClickLogo={onClickLogo}
    ,
    projectHost: projectHost
  }), appTarget);
});

/***/ })

},[[1596,0]]]);
//# sourceMappingURL=gui.90814ff2b40f390e7c25.js.map