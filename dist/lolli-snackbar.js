(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jquery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _jquery = __webpack_require__(4);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var defaults = {
	  timeout: 3000,
	  action: function action() {}
	};

	var Snackbar = function () {
	  function Snackbar() {
	    _classCallCheck(this, Snackbar);

	    this.queue = [];

	    this.$element = (0, _jquery2.default)("<div />").addClass("snackbar snackbar-closed").appendTo("body");
	  }

	  _createClass(Snackbar, [{
	    key: "show",
	    value: function show(text, options) {
	      options = _jquery2.default.extend({}, defaults, options);
	      options.text = text;

	      this.queue.push(options);

	      this.next();
	    }
	  }, {
	    key: "next",
	    value: function next() {
	      var _this = this;

	      if (this.isOpen || this.isOpening || this.queue.length === 0) return;

	      this.isOpening = true;

	      var item = this.queue.shift();

	      (0, _jquery2.default)("<span />").addClass("snackbar-message").text(item.text).appendTo(this.$element);

	      if (item.action && item.actionText) {
	        (0, _jquery2.default)("<span class='snackbar-action'/>").text(item.actionText).on("click", item.action.bind(this)).appendTo(this.$element);
	      }

	      this.$element.one("transitionend", function () {
	        _this.isOpening = false;
	        _this.isOpen = true;

	        (0, _jquery2.default)(document).one("click", _jquery2.default.proxy(_this.dismiss, _this));

	        if (item.timeout) {
	          _this.timeout = setTimeout(function () {
	            _this.dismiss();
	          }, item.timeout);
	        }
	      });

	      this.$element.removeClass("snackbar-closed");
	    }
	  }, {
	    key: "dismiss",
	    value: function dismiss() {
	      var _this2 = this;

	      if (this.isOpening) return;

	      (0, _jquery2.default)(document).off("click", _jquery2.default.proxy(this.dismiss, this));

	      if (this.timeout) {
	        clearTimeout(this.timeout);
	        this.timeout = null;
	      }

	      this.$element.one("transitionend", function () {
	        _this2.isOpen = false;

	        _this2.$element.empty();
	        _this2.next();
	      });

	      this.$element.addClass("snackbar-closed");
	    }
	  }]);

	  return Snackbar;
	}();

	exports.default = Snackbar;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;