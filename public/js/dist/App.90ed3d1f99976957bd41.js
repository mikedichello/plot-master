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

/***/ "./frontEndSrc/js/components/Garden.js":
/*!*********************************************!*\
  !*** ./frontEndSrc/js/components/Garden.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Garden; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Garden extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"This is Garden\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Garden.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/Home.js":
/*!*******************************************!*\
  !*** ./frontEndSrc/js/components/Home.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"This is Home\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Home.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/PlantChart.js":
/*!*************************************************!*\
  !*** ./frontEndSrc/js/components/PlantChart.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return PlantChart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/js/Crops.js */ \"./public/js/Crops.js\");\n/* harmony import */ var _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass PlantChart extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      allPlants: _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1___default.a\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"chartContainer\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"My Plant Chart\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Plant Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"January\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"February\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"March\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"April\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"May\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"June\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"July\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"August\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"September\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"October\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"November\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"December\")), this.state.allPlants.map((plant, i) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        onClick: this.viewPlantDetails\n      }, plant.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        January: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        February: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        March: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        April: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        May: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        June: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        July: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        August: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        September: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        October: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        November: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        December: true\n      }));\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/PlantChart.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/Plot.js":
/*!*******************************************!*\
  !*** ./frontEndSrc/js/components/Plot.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Plot; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Plot extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      plots: [],\n      plotPlants: [],\n      plantList: [],\n      height: 0,\n      width: 0,\n      grid: [],\n      currentPlot: [],\n      plotBackground: 'brown'\n    };\n\n    this.omponentDidMount = () => {\n      fetch('/api/plots').then(response => response.json()).then(plots => this.setState({\n        plots: plots\n      }));\n    };\n\n    this.handleChange = event => {\n      this.setState({\n        [event.target.id]: event.target.value\n      });\n    };\n\n    this.plantSelection = event => {\n      event.preventDefault();\n      fetch('/api/plots/' + id);\n      console.log(event.target.style.backgroundColor);\n      this.state.currentPlot.style.backgroundColor = event.target.style.backgroundColor;\n    };\n\n    this.plotSelection = event => {\n      event.preventDefault();\n      this.setState({\n        currentPlot: event.target\n      });\n    };\n\n    this.deletePlot = (id, event) => {\n      fetch('/api/plots/' + id, {\n        method: 'DELETE'\n      }).then(data => {\n        this.setState({\n          plots: [...this.state.plots.slice(0, index), ...this.state.plots.slice(index + 1)]\n        });\n      });\n    };\n\n    this.newPlot = event => {\n      event.preventDefault();\n      let subPlots = [];\n\n      for (let i = 1; i <= this.state.height * this.state.width; i++) {\n        subPlots.push({\n          key: i,\n          height: '50px',\n          width: '50px',\n          background: 'brown',\n          plantName: null,\n          plantDescription: null,\n          harvestTime: null,\n          plantingTime: null\n        });\n      }\n\n      fetch('/api/plots', {\n        body: JSON.stringify({\n          height: this.state.height,\n          width: this.state.width,\n          subPlot: subPlots\n        }),\n        method: 'POST',\n        headers: {\n          Accept: 'application/json, text/plain, */*',\n          'Content-Type': 'application/json'\n        }\n      }).then(createdPlot => {\n        return createdPlot.json();\n      }).then(jsonedPlot => {\n        this.setState({\n          height: 0,\n          width: 0,\n          plots: [...this.state.plots, jsonedPlot]\n        });\n      });\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"My Plot\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.newPlot\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"height\"\n    }, \"Height\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"number\",\n      value: this.state.height,\n      onChange: this.handleChange,\n      id: \"height\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"width\"\n    }, \"Width\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"number\",\n      value: this.state.width,\n      onChange: this.handleChange,\n      id: \"width\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\"\n    })), this.state.plots.map((plot, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"plot\",\n        style: {\n          width: plot.width * 50\n        }\n      }, plot.subPlot.map((subplot, index) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          style: {\n            width: subplot.width,\n            height: subplot.height,\n            backgroundColor: subplot.background\n          }\n        });\n      }));\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Plot.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/Router.js":
/*!*********************************************!*\
  !*** ./frontEndSrc/js/components/Router.js ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ \"./frontEndSrc/js/components/Home.js\");\n/* harmony import */ var _Garden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Garden */ \"./frontEndSrc/js/components/Garden.js\");\n/* harmony import */ var _Plot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Plot */ \"./frontEndSrc/js/components/Plot.js\");\n/* harmony import */ var _ViewAllPlants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ViewAllPlants */ \"./frontEndSrc/js/components/ViewAllPlants.js\");\n/* harmony import */ var _PlantChart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PlantChart */ \"./frontEndSrc/js/components/PlantChart.js\");\n\n\n\n\n\n\n\n\n\nclass MainRouter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* HashRouter */ \"a\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n      className: \"navbar-light bg-light row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/\",\n      className: \"nav-item m-2\"\n    }, \"Home\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/my-garden\",\n      className: \"nav-item m-2\"\n    }, \"My Garden\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/my-garden-plot\",\n      className: \"nav-item m-2\"\n    }, \"My Garden Plot\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/plant-chart\",\n      className: \"nav-item m-2\"\n    }, \"Plant Chart\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/view-all-plants\",\n      className: \"nav-item m-2\"\n    }, \"View All Plants\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/login\",\n      className: \"nav-item m-2\"\n    }, \"Login\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      exact: true,\n      path: \"/\",\n      component: _Home__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/my-garden\",\n      component: _Garden__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/my-garden-plot\",\n      component: _Plot__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/plant-chart\",\n      component: _PlantChart__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/view-all-plants\",\n      component: _ViewAllPlants__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"]\n    })));\n  }\n\n}\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainRouter, null), app);\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Router.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/ViewAllPlants.js":
/*!****************************************************!*\
  !*** ./frontEndSrc/js/components/ViewAllPlants.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ViewAllPlants; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass ViewAllPlants extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"View All Plants\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/ViewAllPlants.js?");

/***/ }),

/***/ "./public/js/Crops.js":
/*!****************************!*\
  !*** ./public/js/Crops.js ***!
  \****************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

eval("const Crops = [{\n  name: '',\n  description: '',\n  plantIndoors: 0,\n  //days prior to last frost to time with transplant time\n  daysToGerminate: '',\n  //number of days it takes for seed to germinate\n  transplantDate: '',\n  //earliest date to transplant into ground outside (number of days after last frost)\n  daysToMaturity: 0,\n  //number of days (average) after transplant when plant can be harvested\n  harvestDate: '',\n  //date range to harvest based on days to maturity and last frost date\n  sunRequirement: '',\n  //Full-sun partial-sun shade\n  spacing: 0,\n  //inches needed between plants\n  companionPlants: [],\n  //grows well near these plants\n  perennial: false //false= annual true=perennial\n\n}];\n\n//# sourceURL=webpack:///./public/js/Crops.js?");

/***/ })

/******/ });