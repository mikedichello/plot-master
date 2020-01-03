/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./frontEndSrc/js/components/Router.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontEndSrc/js/components/Footer.js":
/*!*********************************************!*\
  !*** ./frontEndSrc/js/components/Footer.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Footer extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"footer\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", {\n      className: \"footer-text\"\n    }, \"Make with\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"footer-image\",\n      src: 'https://image.flaticon.com/icons/png/512/148/148836.png',\n      alt: \"\"\n    }), \"by Group #4: Jane, Mike, David, & Leo\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Footer.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/Home.js":
/*!*******************************************!*\
  !*** ./frontEndSrc/js/components/Home.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"page-header\"\n    }, \"Welcome to Plot Master\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"home-container\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: '../img/maskGroup.png',\n      alt: \"garden beds\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Plot Master is the ultimate garden design tool for any planting space. Create your custom-sized plot, choose your plants, and view a chart of suggested planting and harvesting times based on your climate. Whether you are an amateur home gardener or a seasoned professional, Plot Master will keep your plot organized so you can get growing with confidence!\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Home.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/LogInForm.js":
/*!************************************************!*\
  !*** ./frontEndSrc/js/components/LogInForm.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass LogInForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      username: '',\n      password: '',\n      isLoggedIn: null\n    };\n\n    this.handleInput = e => {\n      this.setState({\n        [e.target.name]: e.target.value\n      });\n    };\n\n    this.handleLogIn = e => {\n      e.preventDefault();\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/users/login', {\n        username: this.state.username,\n        password: this.state.password\n      }).then(response => {\n        localStorage.setItem('token', response.data.token);\n        this.setState({\n          isLoggedIn: true\n        });\n      }).catch(err => console.log(err));\n    };\n  }\n\n  componentDidMount() {\n    if (localStorage.token) {\n      this.setState({\n        isLoggedIn: true\n      });\n    } else {\n      this.setState({\n        isLoggedIn: false\n      });\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Log In\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.handleLogIn,\n      method: \"POST\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"username\"\n    }, \"Username\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"username\",\n      onChange: this.handleInput\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"password\"\n    }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"password\",\n      onChange: this.handleInput\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      value: \"Submit\",\n      type: \"submit\"\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (LogInForm);\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/LogInForm.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/LogOut.js":
/*!*********************************************!*\
  !*** ./frontEndSrc/js/components/LogOut.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass LogOut extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      username: '',\n      password: '',\n      isLoggedIn: null\n    };\n\n    this.handleLogOut = () => {\n      this.setState({\n        username: '',\n        password: '',\n        isLoggedIn: false\n      });\n      localStorage.clear();\n    };\n  }\n\n  componentDidMount() {\n    if (localStorage.token) {\n      this.setState({\n        isLoggedIn: true\n      });\n    } else {\n      this.setState({\n        isLoggedIn: false\n      });\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Log Out\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.handleLogOut\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      value: \"Log Out\",\n      type: \"submit\"\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (LogOut);\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/LogOut.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/PlantChart.js":
/*!*************************************************!*\
  !*** ./frontEndSrc/js/components/PlantChart.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return PlantingChart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/js/Crops.js */ \"./public/js/Crops.js\");\n\n\nconst months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\nclass PlantingChart extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      crops: _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n      currentDetails: null,\n      germinate: 2,\n      daysToMaturity: 0,\n      harvest: 0\n    };\n\n    this.plantDetails = index => {\n      event.preventDefault();\n      let crop = _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"][index];\n      let daysToMaturity = this.state.germinate + Math.round(crop.daysToMaturity / 30);\n      let harvest = this.state.germinate + Math.round(crop.daysToMaturity / 30);\n      this.setState({\n        currentDetails: crop,\n        daysToMaturity: daysToMaturity,\n        harvest: harvest\n      });\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Click plant name for details\"), this.state.crops.map((crop, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: () => this.plantDetails(index)\n      }, crop.name);\n    }), this.state.currentDetails !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        width: \"960px\"\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        width: \"960px\",\n        display: \"flex\"\n      },\n      className: \"months\"\n    }, months.map((month, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          width: \"80px\"\n        },\n        className: month\n      }, month);\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        width: \"960px\",\n        display: \"flex\"\n      }\n    }, months.map((month, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          width: \"80px\",\n          height: \"20px\"\n        },\n        className: this.state.germinate === index ? \"germinate\" : ''\n      });\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        width: \"960px\",\n        display: \"flex\"\n      }\n    }, months.map((month, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          width: \"80px\",\n          height: \"20px\"\n        },\n        className: this.state.germinate + 1 <= index && this.state.daysToMaturity >= index ? \"growth\" : ''\n      });\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      style: {\n        width: \"960px\",\n        display: \"flex\"\n      }\n    }, months.map((month, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          width: \"80px\",\n          height: \"20px\"\n        },\n        className: this.state.daysToMaturity + 1 <= index && index <= 8 ? \"harvest\" : ''\n      });\n    }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/PlantChart.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/PlantReference.js":
/*!*****************************************************!*\
  !*** ./frontEndSrc/js/components/PlantReference.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return PlantReference; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/js/Crops.js */ \"./public/js/Crops.js\");\n\n\nclass PlantReference extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      allCrops: _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n      currentCrop: {\n        name: \"CLICK CROP TO VIEW INFORMATION\",\n        companionPlants: []\n      }\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"View All Plants\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, this.state.allCrops.map((crop, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: index,\n        onClick: () => this.setState({\n          currentCrop: crop\n        })\n      }, crop.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: crop.icon\n      }));\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, this.state.currentCrop.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: this.state.currentCrop.img\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, this.state.currentCrop.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Germinates in \", this.state.currentCrop.daysToGerminate, \" days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Days to Maturity: \", this.state.currentCrop.daysToMaturity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Harvesting Tips: \", this.state.currentCrop.harvest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Thrives best in \", this.state.currentCrop.sunRequirement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, \"Companion plants:\", this.state.currentCrop.companionPlants.map((crop, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, crop);\n    }))));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/PlantReference.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/Plot.js":
/*!*******************************************!*\
  !*** ./frontEndSrc/js/components/Plot.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Plot; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Plot extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      plots: [],\n      height: 0,\n      width: 0,\n      currentSubplot: [],\n      currentSubplotId: [],\n      currentPlotId: [],\n      currentPlot: [],\n      title: 'title',\n      plotBackground: 'brown'\n    };\n\n    this.componentDidMount = () => {\n      fetch('/api/plots').then(response => response.json()).then(plots => this.setState({\n        plots: plots\n      }));\n    };\n\n    this.handleChange = event => {\n      this.setState({\n        [event.target.id]: event.target.value\n      });\n    };\n\n    this.plantSelection = event => {\n      event.preventDefault();\n      let plot = this.state.plots[this.state.currentPlotId];\n      console.log(plot);\n      plot.subPlot[this.state.currentSubplotId].background = event.target.style.backgroundColor;\n      fetch('/api/plots/' + plot._id, {\n        body: JSON.stringify({\n          subPlot: plot.subPlot\n        }),\n        method: 'PUT',\n        headers: {\n          'Accept': 'application/json, text/plain, */*',\n          'Content-Type': 'application/json'\n        }\n      }).then(updatedPlot => updatedPlot.json()).then(jsonedPlot => {\n        fetch('/api/plots/').then(response => response.json()).then(plots => {\n          this.setState({\n            plots: plots,\n            currentSubplot: [],\n            currentPlotId: [],\n            currentSubplotId: []\n          });\n        });\n      });\n    };\n\n    this.plotSelection = event => {\n      event.preventDefault();\n      console.log(event.target.id);\n      console.log(this.state.currentSubplot);\n      this.setState({\n        currentSubplot: event.target,\n        currentSubplotId: event.target.id\n      });\n    };\n\n    this.bigPlot = index => {\n      this.setState({\n        currentPlotId: index\n      });\n    };\n\n    this.deletePlot = (id, index) => {\n      fetch('/api/plots/' + id, {\n        method: 'DELETE'\n      }).then(data => {\n        this.setState({\n          plots: [...this.state.plots.slice(0, index), ...this.state.plots.slice(index + 1)]\n        });\n      });\n    };\n\n    this.newPlot = event => {\n      event.preventDefault();\n      let subPlots = [];\n\n      for (let i = 0; i < this.state.height * this.state.width; i++) {\n        subPlots.push({\n          key: i,\n          height: '50px',\n          width: '50px',\n          background: this.state.plotBackground,\n          plantName: null,\n          plantDescription: null,\n          harvestTime: null,\n          plantingTime: null\n        });\n      }\n\n      fetch('/api/plots', {\n        body: JSON.stringify({\n          height: this.state.height,\n          width: this.state.width,\n          title: this.state.title,\n          subPlot: subPlots\n        }),\n        method: 'POST',\n        headers: {\n          Accept: 'application/json, text/plain, */*',\n          'Content-Type': 'application/json'\n        }\n      }).then(createdPlot => {\n        return createdPlot.json();\n      }).then(jsonedPlot => {\n        this.setState({\n          height: 0,\n          width: 0,\n          title: \"title\",\n          plots: [...this.state.plots, jsonedPlot]\n        });\n      });\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"My Plot\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.newPlot\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Enter height and width in feet\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"height\"\n    }, \"Height\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"number\",\n      value: this.state.height,\n      onChange: this.handleChange,\n      id: \"height\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"width\"\n    }, \"Width\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"number\",\n      value: this.state.width,\n      onChange: this.handleChange,\n      id: \"width\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      value: this.state.title,\n      onChange: this.handleChange,\n      id: \"title\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\"\n    })), this.state.plots.map((plot, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, plot.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"plot\",\n        onClick: () => this.bigPlot(index),\n        id: index,\n        style: {\n          width: plot.width * 50,\n          display: \"flex\",\n          flexWrap: \"wrap\"\n        }\n      }, plot.subPlot.map((subplot, index) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subplot\",\n          onClick: this.state.currentSubplot.length === 0 ? this.plotSelection : this.plantSelection,\n          id: subplot.key,\n          style: {\n            width: subplot.width,\n            height: subplot.height,\n            backgroundColor: subplot.background\n          }\n        });\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: () => this.deletePlot(plot._id, index)\n      }, \"Delete\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: this.plantSelection,\n        style: {\n          width: '50px',\n          height: '50px',\n          backgroundColor: 'yellow'\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"plantInfo\"\n      }));\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Plot.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/Router.js":
/*!*********************************************!*\
  !*** ./frontEndSrc/js/components/Router.js ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ \"./frontEndSrc/js/components/Home.js\");\n/* harmony import */ var _Plot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Plot */ \"./frontEndSrc/js/components/Plot.js\");\n/* harmony import */ var _PlantChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PlantChart */ \"./frontEndSrc/js/components/PlantChart.js\");\n/* harmony import */ var _PlantReference__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlantReference */ \"./frontEndSrc/js/components/PlantReference.js\");\n/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SignUpForm */ \"./frontEndSrc/js/components/SignUpForm.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ \"./frontEndSrc/js/components/Footer.js\");\n/* harmony import */ var _LogInForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LogInForm */ \"./frontEndSrc/js/components/LogInForm.js\");\n/* harmony import */ var _LogOut__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LogOut */ \"./frontEndSrc/js/components/LogOut.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass MainRouter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n    this.state = {\n      username: '',\n      password: '',\n      isLoggedIn: false\n    };\n  }\n\n  componentDidMount() {\n    if (localStorage.token) {\n      this.setState({\n        isLoggedIn: true\n      });\n    } else {\n      this.setState({\n        isLoggedIn: false\n      });\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* HashRouter */ \"a\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"app-logo\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      className: \"logo-icon\",\n      src: '../img/crops.svg',\n      alt: \"plot master crop\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: \"/\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"logo-type\"\n    }, \"Plot Master\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n      className: \"navbar-light bg-light row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      exact: true,\n      to: \"/\",\n      activeClassName: \"is-active\",\n      className: \"nav-item m-2\"\n    }, \"Home\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/my-plots\",\n      activeClassName: \"is-active\",\n      className: \"nav-item m-2\"\n    }, \"My Plots\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/planting-chart\",\n      activeClassName: \"is-active\",\n      className: \"nav-item m-2\"\n    }, \"Planting Chart\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/plant-reference\",\n      activeClassName: \"is-active\",\n      className: \"nav-item m-2\"\n    }, \"Reference Guide\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/login\",\n      activeClassName: \"is-active\",\n      className: \"nav-item m-2\"\n    }, \"Login\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      // className={Route.to === '/my-plots' ? '' : 'app-container'}\n      className: 'site-container'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/\",\n      exact: true,\n      component: _Home__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/planting-chart\",\n      component: _PlantChart__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/plant-reference\",\n      component: _PlantReference__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/login\",\n      component: _LogInForm__WEBPACK_IMPORTED_MODULE_10__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/signup\",\n      component: _SignUpForm__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/logout\",\n      component: _LogOut__WEBPACK_IMPORTED_MODULE_11__[/* default */ \"a\"]\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"app-container\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/my-plots\",\n      component: _Plot__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"]\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_9__[/* default */ \"a\"], null)));\n  }\n\n}\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainRouter, null), app);\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Router.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/SignUpForm.js":
/*!*************************************************!*\
  !*** ./frontEndSrc/js/components/SignUpForm.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass SignUpForm extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      username: '',\n      password: '',\n      isLoggedIn: null\n    };\n\n    this.handleInput = e => {\n      this.setState({\n        [e.target.name]: e.target.value\n      });\n    };\n\n    this.handleSignUp = e => {\n      e.preventDefault();\n      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/users/signup', {\n        username: this.state.username,\n        password: this.state.password\n      }).then(response => {\n        localStorage.setItem('token', response.data.token);\n        this.setState({\n          isLoggedIn: true\n        });\n      }).catch(err => console.log(err));\n    };\n  }\n\n  componentDidMount() {\n    if (localStorage.token) {\n      this.setState({\n        isLoggedIn: true\n      });\n    } else {\n      this.setState({\n        isLoggedIn: false\n      });\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, this.state.isLoggedIn ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"howdy\") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Sign Up\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.handleSignUp,\n      method: \"POST\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"username\"\n    }, \"Username\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"username\",\n      onChange: this.handleInput\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"password\"\n    }, \"Password\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      name: \"password\",\n      onChange: this.handleInput\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      value: \"Submit\",\n      type: \"submit\"\n    })));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (SignUpForm);\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/SignUpForm.js?");

/***/ }),

/***/ "./public/js/Crops.js":
/*!****************************!*\
  !*** ./public/js/Crops.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const Crops = [{\n  name: 'Tomato',\n  description: 'Top crop of choice for home gardens. Produces beautiful and tasty red fleshy fruit. Used for slicing, salads, or cooking into sauces. Warmer climates may allow for 2nd season in fall',\n  plantIndoors: 42,\n  //days prior to last frost to time with transplant time\n  daysToGerminate: 14,\n  //number of days it takes for seed to germinate\n  transplantDate: '1 week after last frost',\n  //earliest date to transplant into ground outside (number of days after last frost)\n  daysToMaturity: 70,\n  //number of days (average) after transplant when plant can be harvested\n  harvest: 'Pick regularly as soon as the fruits turn color but are still firm. Store at room temperature.',\n  //harvest tips\n  sunRequirement: 'Full-Sun',\n  //Full-sun partial-sun shade\n  spacing: 24,\n  //inches needed between plants\n  companionPlants: ['Marigold', 'Broccoli', 'Chives', 'Mint', 'Borage', 'Parsley', 'Basil', 'Pepper', 'Asparagus', 'Monarda', 'Lettuce', 'Garlic', 'Dill', 'Calendula'],\n  //grows well near these plants\n  perennial: false,\n  //false= annual true=perennial\n  img: 'https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg',\n  //image of plant\n  icon: 'https://image.flaticon.com/icons/png/512/135/135702.png' // icon of plant\n\n}, {\n  name: 'Basil',\n  description: 'Culinary herb, highly prized for its strong flavor. Used in a lot of Italian dishes such as Pesto.',\n  plantIndoors: 21,\n  daysToGerminate: 14,\n  transplantDate: '2 weeks after last frost',\n  daysToMaturity: 30,\n  harvest: 'Harvest leaves a few at a time as you need them in the kitchen. In midsummer, cut plants back by half to stimulate new growth, and make big batches of pesto with the trimmings.',\n  sunRequirement: 'Full Sun',\n  spacing: 12,\n  companionPlants: ['Tomato', 'Pepper', 'Lettuce'],\n  perennial: false,\n  img: 'https://www.miraclegro.com/sites/g/files/oydgjc111/files/styles/scotts_asset_image_720_440/public/asset_images/basil1.png?itok=PsMbxblv',\n  //image of plant\n  icon: 'https://image.flaticon.com/icons/png/512/616/616410.png' // icon of plant\n\n}, {\n  name: 'Bell Peppers',\n  description: 'Produces bright red fruit that can be eaten raw or cooked. Great with Ranch dip.',\n  plantIndoors: 56,\n  daysToGerminate: 20,\n  transplantDate: '1 week after last frost when ground warms up.',\n  daysToMaturity: 75,\n  harvest: 'Peppers can be harvested when they are still green, though their flavor improves as they ripen to red, yellow, or orange.',\n  sunRequirement: 'Full Sun',\n  spacing: 12,\n  companionPlants: ['Basil', 'Marjoram', 'Oregano', 'Carrot', 'Tomato', 'Borage', 'Dill'],\n  perennial: false,\n  img: 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/03/iStock-530253685-400x267.jpg',\n  //image of plant\n  icon: 'https://image.flaticon.com/icons/png/512/766/766020.png' // icon of plant\n\n}, {\n  name: 'Wild Garden Lettuce Mix',\n  description: 'More than 60 different varieties of lettuce. A huge variety of colors, shapes, sizes, and textures. Great for salads!',\n  plantIndoors: 30,\n  daysToGerminate: 6,\n  transplantDate: '2 weeks before last frost or sew directly after last frost',\n  daysToMaturity: 45,\n  harvest: 'You can pick individual leaves, use scissor or a knife to harvest handfuls of baby lettuce, or grow plants at proper spacing to get large, loose heads.',\n  sunRequirement: 'Partial Shade',\n  spacing: 4,\n  companionPlants: ['Garlic', 'Beet', 'Dill', 'Chives', 'Basil', 'Carrot', 'Strawberry', 'Radish', 'Spinach', 'Lettuce', 'Cabbage', 'Scallions', 'Onion'],\n  perennial: false,\n  img: 'https://www.wildgardenseed.com/images/WildGardenLettuce.jpg',\n  //image of plant\n  icon: 'https://image.flaticon.com/icons/png/512/424/424227.png' // icon of plant\n\n}, {\n  name: 'Eggplant',\n  description: 'Plant produces plump purple fruit. Great for frying, pickling, or pureeing',\n  plantIndoors: 56,\n  daysToGerminate: 14,\n  transplantDate: '2 weeks after last frost',\n  daysToMaturity: 65,\n  harvest: 'Use pruning shears to cut fruits from the stem. Perfect fruits have shiny skins and only a few immature seeds inside.',\n  sunRequirement: 'Full sun',\n  spacing: 16,\n  companionPlants: ['Catnip', 'Marigold', 'Beans', 'Pepper'],\n  perennial: false,\n  img: 'https://s3.eu-west-2.amazonaws.com/growinginteractive/blog/eggplant-patio-baby-CREDIT-All-America-Selections-2x.jpg',\n  //image of plant\n  icon: 'https://image.flaticon.com/icons/png/512/590/590780.png' // icon of plant\n\n}, {\n  name: 'Carrot',\n  description: 'The famous sweet orange root veggie that grows in cool weather, early spring and fall months, and even through winter in warm climates.',\n  plantIndoors: 'n/a',\n  daysToGerminate: 5,\n  transplantDate: 'Direct sow outdoors',\n  daysToMaturity: 65,\n  harvest: 'Can be harvested over a long period, but the longer plants are left in the ground, the more likely they are to be injured by insects or animals.',\n  sunRequirement: 'Sun with partial afternoon shade',\n  spacing: 4,\n  companionPlants: ['Chives', 'Potatoes', 'Leek', 'Lettuce', 'Peas', 'Radish', 'Rosemary', 'Sage', 'Tomato', 'Onion'],\n  perennial: false,\n  img: 'https://www.promixgardening.com/sites/promix/files/inline-images/PromixGardening_How%20To%20Grow%20Carrots_03_1.jpg',\n  //image of plant\n  icon: 'https://image.flaticon.com/icons/png/512/135/135687.png' // icon of plant\n\n}, {\n  name: 'Sugar Snap Peas',\n  description: 'Pod producing vines containing sweet green peas. Quick growing, high producing.',\n  plantIndoors: 14,\n  daysToGerminate: 7,\n  transplantDate: 'As soon as soil can be worked.',\n  daysToMaturity: 70,\n  harvest: 'Gather snap peas when the pods become plump yet are still glossy and filled with sweet-tasting peas.',\n  sunRequirement: 'Full Sun',\n  spacing: 4,\n  companionPlants: ['Chives', 'Mint', 'Alyssum', 'Carrot', 'Corn', 'Cucumber', 'Radish', 'Turnip', 'Beans'],\n  perennial: false,\n  img: 'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dwa65e45a7/Images/Product%20Images/prod000793/prod000793.jpg?sw=320&sh=378&sm=fit',\n  //image of plant\n  icon: 'https://image.flaticon.com/icons/png/512/1998/1998131.png' // icon of plant\n\n}, {\n  name: 'Garlic',\n  description: 'Aromatic bulbs grown underground. Essential for most cuisine. Planted in fall and harvested in following spring/summer',\n  plantIndoors: 'n/a',\n  daysToGerminate: 'n/a',\n  transplantDate: 'Direct sow in fall',\n  daysToMaturity: 300,\n  harvest: 'Dig up bulbs in summer when one third of the leaves become dry and lose their green color. Shake off soil, and cure whole plants dry in a warm, shady place for two weeks before trimming and storing the garlic bulbs.',\n  sunRequirement: 'Sunny',\n  spacing: 6,\n  companionPlants: ['Tomato', 'Apple', 'Apricot', 'Plum', 'Cherry', 'Pear', 'Peach', 'Raspberry'],\n  perennial: false,\n  img: 'https://gardenerspath.com/wp-content/uploads/2019/12/How-to-Grow-Garlic-FB-Image.jpg',\n  icon: 'https://image.flaticon.com/icons/png/512/1652/1652082.png'\n}, {\n  name: 'Chives',\n  description: 'Grow indoors or outdoors for year-round onion flavoring. Use chopped leaves and young flowers to add flavor and decorative garnish to salads.',\n  plantIndoors: 60,\n  daysToGerminate: 14,\n  transplantDate: 'After last frost, or grow indoors',\n  daysToMaturity: 80,\n  harvest: 'Use scissors to gather handfuls of leaves from early spring onward. Rinse, pat dry, and snip or cut into smaller pieces.',\n  sunRequirement: 'Full Sun to partial afternoon shade',\n  spacing: 8,\n  companionPlants: ['Carrot', 'Apple', 'Garlic', 'Onion'],\n  perennial: false,\n  img: 'https://d1nw62gticy6e9.cloudfront.net/uploads/Organic-Standard-Chives.jpg',\n  icon: 'https://image.flaticon.com/icons/png/512/135/135691.png'\n}, {\n  name: 'Cilantro',\n  description: 'Widely used in cuisines from around the world. Plants are most often harvested in the leafy stage of their development (cilantro) or the mature seed stage (coriander). Roots, flowers, and mmature seeds are also tasty. Plant monthly successions. Difficult to start in hot weather- sow in shade, or keep soil covered and cool until seedlings emerge. Self-sows in cool weather',\n  plantIndoors: 30,\n  daysToGerminate: 7,\n  transplantDate: 'After last Frost',\n  daysToMaturity: 30,\n  harvest: 'As soon as plants are 6 inches tall, pick individual leaves as you need them in the kitchen.',\n  sunRequirement: 'Full Sun',\n  spacing: 8,\n  companionPlants: ['Potatoes', 'Basil', 'Mint'],\n  perennial: false,\n  img: 'https://gardenerspath.com/wp-content/uploads/2018/06/Cilantro-Growing-Tips.jpg',\n  icon: 'https://image.flaticon.com/icons/png/512/1398/1398238.png'\n}, {\n  name: 'Jalepeño',\n  description: 'The jalapeño is a medium-sized chili pepper pod type cultivar of the species Capsicum annuum. A mature jalapeño chili is 5–10 cm long and hangs down with a round, firm, smooth flesh of 25–38 mm wide. It can have a range of pungency, with Scoville heat units of 3,500 to 3,600.',\n  plantIndoors: 56,\n  daysToGerminate: 20,\n  transplantDate: '1 week after last frost when ground warms up.',\n  daysToMaturity: 75,\n  harvest: 'Chili peppers can be harvested when they are immature, but pungency increases with ripeness. Wear protective gloves when handling hot chilis, which can be dried or frozen for future use.',\n  sunRequirement: 'Full Sun',\n  spacing: 12,\n  companionPlants: ['Basil', 'Marjoram', 'Oregano', 'Carrot', 'Tomato', 'Borage', 'Dill'],\n  perennial: false,\n  img: 'https://mobileimages.lowes.com/product/converted/715339/715339011374.jpg?size=xl',\n  //image of plant\n  icon: 'https://image.flaticon.com/icons/png/512/390/390147.png' // icon of plant\n\n}, {\n  name: 'Pumpkin',\n  description: 'A pumpkin is a cultivar of winter squash that is round with smooth, slightly ribbed skin, and most often deep yellow to orange in coloration. The thick shell contains the seeds and pulp.',\n  plantIndoors: 30,\n  daysToGerminate: 14,\n  transplantDate: '1 month after last frost',\n  daysToMaturity: 110,\n  harvest: 'When the plant die back or before freezing weather, cut pumpkins leaving a stub of stem attached. Wipe clean and store indoors.',\n  sunRequirement: 'Full Sun',\n  spacing: 35,\n  companionPlants: ['Corn', 'Melon', 'Beans', 'Nasturtium', 'Oregano', 'Marigold'],\n  perennial: false,\n  img: 'https://media.treehugger.com/assets/images/2019/06/plant-pumpkin.jpg.860x0_q70_crop-scale.jpg',\n  icon: 'https://image.flaticon.com/icons/png/512/1230/1230882.png'\n}, {\n  name: 'Strawberry',\n  description: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.',\n  plantIndoors: 'n/a',\n  daysToGerminate: 14,\n  transplantDate: 'Direct sow outside after last frost',\n  daysToMaturity: 42,\n  harvest: 'Gather ripe fruits in the morning, when they are cool, and refrigerate immediately. Wash in cool water just before eating.',\n  sunRequirement: 'Full Sun',\n  spacing: 24,\n  companionPlants: ['Beans', 'Lettuce', 'Spinach', 'Thyme', 'Onions'],\n  perennial: true,\n  img: 'https://s3-us-west-1.amazonaws.com/contentlab.studiod/getty/cf0023d24be24aae9974f4cb1abf66e9.jpg',\n  icon: 'https://image.flaticon.com/icons/png/512/1135/1135556.png'\n}, {\n  name: 'Watermelon',\n  description: 'The watermelon is a large fruit of a more or less spherical shape. It has an oval or spherical shape and a dark green and smooth rind, sometimes showing irregular areas of a pale green colour. It has a sweet, juicy, refreshing flesh of yellowish or reddish colour, containing multiple black, brown or white seeds.',\n  plantIndoors: 30,\n  daysToGerminate: 14,\n  transplantDate: '2 weeks after last frost',\n  daysToMaturity: 100,\n  harvest: 'Ripe watermelons sound deep and resonant when thumped, and the curled tendril opposite the melon should be brown. Wipe clean and store indoors.',\n  sunRequirement: 'Full Sun',\n  spacing: 34,\n  companionPlants: ['Beans', 'Corn', 'Radish', 'Potatoes'],\n  perennial: false,\n  img: 'https://sbly-web-prod-shareably.netdna-ssl.com/wp-content/uploads/2017/09/15084644/How-to-grow-watermelon-in-pot-e1457271861238.jpg',\n  icon: 'https://image.flaticon.com/icons/png/512/2224/2224249.png'\n}, {\n  name: 'Kale',\n  description: 'Kale or leaf cabbage is one of certain cultivars of cabbage grown for their edible leaves, although some are used as ornamentals. Kale plants have green or purple leaves, and the central leaves do not form a head.',\n  plantIndoors: 30,\n  daysToGerminate: 7,\n  transplantDate: 'After Last Frost',\n  daysToMaturity: 60,\n  harvest: 'Harvest leaves individually, when they are about the size of your hand.',\n  sunRequirement: 'Full Sun',\n  spacing: 16,\n  companionPlants: ['Buckwheat', 'Marigold', 'Nasturtium', 'Chinese Cabbage', 'Cabbage', 'Lavender'],\n  perennial: false,\n  img: 'https://content.ces.ncsu.edu/media/images/bigstock-Kale-And-Cabbage-Plants-66770539.jpg',\n  icon: 'https://image.flaticon.com/icons/png/512/1728/1728720.png'\n}, {\n  name: 'Oregano',\n  description: 'An aromatic perennial herb of the mint family (Lamiaceae) known for its flavourful dried leaves and flowering tops. The herb has long been an essential ingredient of Mediterranean cooking and is widely used to season many foods',\n  plantIndoors: 30,\n  daysToGerminate: 21,\n  transplantDate: 'After last frost',\n  daysToMaturity: 28,\n  harvest: 'Gather sprigs as needed in the kitchen. Gather stems for drying in early summer, just before the plants bloom.',\n  sunRequirement: 'Full sun to partial afternoon shade',\n  spacing: 8,\n  companionPlants: ['Tomato', 'Pepper', 'Broccoli'],\n  perennial: true,\n  img: 'https://web.extension.illinois.edu/herbs/images/herbs/oregano.jpg',\n  icon: 'https://image.flaticon.com/icons/png/512/1398/1398225.png'\n}, {\n  name: 'Catnip',\n  description: 'Catnip (Nepeta cataria) is a perennial herb that is a member of the mint family. It can grow to be up to three feet high! The chemical compound in the plant that attracts and affects cats is called nepetalactone. It is found in the leaves and stems.',\n  plantIndoors: 60,\n  daysToGerminate: 21,\n  transplantDate: 'after last frost or can be grown indoors',\n  daysToMaturity: 30,\n  harvest: 'Gather sprigs as desired for the pleasure of your cats. One small stem tip with four to eight leaves is plenty for one or two cats to enjoy. Gather stems for drying in early summer, just before the plants bloom.',\n  sunRequirement: 'Full sun to partial afternoon shade',\n  spacing: 14,\n  companionPlants: ['Potatoes', 'Lavender', 'Rosemary', 'Sage', 'Mint'],\n  perennial: true,\n  img: 'https://edge.bonnieplants.com/www/uploads/20180920004156/catnip.jpg',\n  icon: 'https://image.flaticon.com/icons/png/512/2372/2372974.png'\n}, {\n  name: '',\n  description: '',\n  plantIndoors: 0,\n  daysToGerminate: 0,\n  transplantDate: '',\n  daysToMaturity: 0,\n  harvest: '',\n  sunRequirement: '',\n  spacing: 0,\n  companionPlants: [],\n  perennial: false,\n  img: '',\n  icon: ''\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (Crops);\n\n//# sourceURL=webpack:///./public/js/Crops.js?");

/***/ })

/******/ });