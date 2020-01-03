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

/***/ "./frontEndSrc/js/components/Home.js":
/*!*******************************************!*\
  !*** ./frontEndSrc/js/components/Home.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Welcome to Plot Master\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"../../public/img/sunset_beds.jpg\",\n      width: \"500px\",\n      alt: \"garden beds\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Plot Master is the ultimate garden design tool for any planting space. Create your custom-sized plot, choose your plants, and view a chart of suggested planting and harvesting times based on your climate. Whether you are an amateur home gardener or a seasoned professional, Plot Master will keep your plot organized so you can get growing with confidence!\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Home.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/PlantChart.js":
/*!*************************************************!*\
  !*** ./frontEndSrc/js/components/PlantChart.js ***!
  \*************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return PlantingChart; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/js/Crops.js */ \"./public/js/Crops.js\");\n\n\nclass PlantingChart extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      allPlants: _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"]\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"chartContainer\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"My Plant Chart\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Plant Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"January\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"February\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"March\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"April\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"May\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"June\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"July\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"August\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"September\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"October\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"November\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"December\")), this.state.allPlants.map((plant, i) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        onClick: this.viewPlantDetails\n      }, plant.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        January: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        February: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        March: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        April: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        May: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        June: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        July: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        August: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        September: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        October: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        November: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: plant.name,\n        December: true\n      }));\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/PlantChart.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/PlantReference.js":
/*!*****************************************************!*\
  !*** ./frontEndSrc/js/components/PlantReference.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return PlantReference; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/js/Crops.js */ \"./public/js/Crops.js\");\n\n\nclass PlantReference extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      allCrops: _public_js_Crops_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n      currentCrop: {\n        name: \"CLICK CROP TO VIEW INFORMATION\",\n        companionPlants: []\n      }\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"View All Plants\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, this.state.allCrops.map((crop, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n        key: index,\n        onClick: () => this.setState({\n          currentCrop: crop\n        })\n      }, crop.name);\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, this.state.currentCrop.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, this.state.currentCrop.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Germinates in \", this.state.currentCrop.daysToGerminate, \" days\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Days to Maturity: \", this.state.currentCrop.daysToMaturity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Harvesting Tips: \", this.state.currentCrop.harvest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, \"Thrives best in \", this.state.currentCrop.sunRequirement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, \"Companion plants:\", this.state.currentCrop.companionPlants.map((crop, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, crop);\n    }))));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/PlantReference.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/Plot.js":
/*!*******************************************!*\
  !*** ./frontEndSrc/js/components/Plot.js ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Plot; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Plot extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      plots: [],\n      height: 0,\n      width: 0,\n      currentSubplot: [],\n      currentSubplotId: [],\n      currentPlotId: [],\n      currentPlot: [],\n      title: 'title',\n      plotBackground: 'brown'\n    };\n\n    this.componentDidMount = () => {\n      fetch('/api/plots').then(response => response.json()).then(plots => this.setState({\n        plots: plots\n      }));\n    };\n\n    this.handleChange = event => {\n      this.setState({\n        [event.target.id]: event.target.value\n      });\n    };\n\n    this.plantSelection = event => {\n      event.preventDefault();\n      let plot = this.state.plots[this.state.currentPlotId];\n      console.log(plot);\n      plot.subPlot[this.state.currentSubplotId].background = event.target.style.backgroundColor;\n      fetch('/api/plots/' + plot._id, {\n        body: JSON.stringify({\n          subPlot: plot.subPlot\n        }),\n        method: 'PUT',\n        headers: {\n          'Accept': 'application/json, text/plain, */*',\n          'Content-Type': 'application/json'\n        }\n      }).then(updatedPlot => updatedPlot.json()).then(jsonedPlot => {\n        fetch('/api/plots/').then(response => response.json()).then(plots => {\n          this.setState({\n            plots: plots,\n            currentSubplot: [],\n            currentPlotId: [],\n            currentSubplotId: []\n          });\n        });\n      });\n    };\n\n    this.plotSelection = event => {\n      event.preventDefault();\n      console.log(event.target.id);\n      console.log(this.state.currentSubplot);\n      this.setState({\n        currentSubplot: event.target,\n        currentSubplotId: event.target.id\n      });\n    };\n\n    this.bigPlot = index => {\n      this.setState({\n        currentPlotId: index\n      });\n    };\n\n    this.deletePlot = (id, index) => {\n      fetch('/api/plots/' + id, {\n        method: 'DELETE'\n      }).then(data => {\n        this.setState({\n          plots: [...this.state.plots.slice(0, index), ...this.state.plots.slice(index + 1)]\n        });\n      });\n    };\n\n    this.newPlot = event => {\n      event.preventDefault();\n      let subPlots = [];\n\n      for (let i = 0; i < this.state.height * this.state.width; i++) {\n        subPlots.push({\n          key: i,\n          height: '50px',\n          width: '50px',\n          background: this.state.plotBackground,\n          plantName: null,\n          plantDescription: null,\n          harvestTime: null,\n          plantingTime: null\n        });\n      }\n\n      fetch('/api/plots', {\n        body: JSON.stringify({\n          height: this.state.height,\n          width: this.state.width,\n          title: this.state.title,\n          subPlot: subPlots\n        }),\n        method: 'POST',\n        headers: {\n          Accept: 'application/json, text/plain, */*',\n          'Content-Type': 'application/json'\n        }\n      }).then(createdPlot => {\n        return createdPlot.json();\n      }).then(jsonedPlot => {\n        this.setState({\n          height: 0,\n          width: 0,\n          title: \"title\",\n          plots: [...this.state.plots, jsonedPlot]\n        });\n      });\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"My Plot\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.newPlot\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"height\"\n    }, \"Height\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"number\",\n      value: this.state.height,\n      onChange: this.handleChange,\n      id: \"height\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"width\"\n    }, \"Width\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"number\",\n      value: this.state.width,\n      onChange: this.handleChange,\n      id: \"width\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"text\",\n      value: this.state.title,\n      onChange: this.handleChange,\n      id: \"title\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\"\n    })), this.state.plots.map((plot, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"plot\",\n        onClick: () => this.bigPlot(index),\n        id: index,\n        style: {\n          width: plot.width * 50,\n          display: \"flex\",\n          flexWrap: \"wrap\"\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, plot.title), plot.subPlot.map((subplot, index) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subplot\",\n          onClick: this.state.currentSubplot.length === 0 ? this.plotSelection : this.plantSelection,\n          id: subplot.key,\n          style: {\n            width: subplot.width,\n            height: subplot.height,\n            backgroundColor: subplot.background\n          }\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: () => this.deletePlot(plot._id, index)\n      }, \"Delete\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: this.plantSelection,\n        style: {\n          width: '50px',\n          height: '50px',\n          backgroundColor: 'yellow'\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"plantInfo\"\n      }, true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, this.state.currentSubplot.background)) : undefined));\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Plot.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/Router.js":
/*!*********************************************!*\
  !*** ./frontEndSrc/js/components/Router.js ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ \"./frontEndSrc/js/components/Home.js\");\n/* harmony import */ var _ViewAllPlots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ViewAllPlots */ \"./frontEndSrc/js/components/ViewAllPlots.js\");\n/* harmony import */ var _ViewAllPlots__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ViewAllPlots__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Plot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Plot */ \"./frontEndSrc/js/components/Plot.js\");\n/* harmony import */ var _PlantChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlantChart */ \"./frontEndSrc/js/components/PlantChart.js\");\n/* harmony import */ var _PlantReference__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PlantReference */ \"./frontEndSrc/js/components/PlantReference.js\");\n\n\n\n\n\n\n\n\n\nclass MainRouter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* HashRouter */ \"a\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n      className: \"navbar-light bg-light row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/\",\n      className: \"nav-item m-2\"\n    }, \"Home\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/my-plots\",\n      className: \"nav-item m-2\"\n    }, \"My Plots\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/planting-chart\",\n      className: \"nav-item m-2\"\n    }, \"Planting Chart\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/plant-reference\",\n      className: \"nav-item m-2\"\n    }, \"Reference Guide\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/login\",\n      className: \"nav-item m-2\"\n    }, \"Login\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      exact: true,\n      path: \"/\",\n      component: _Home__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/my-plots\",\n      component: _Plot__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/planting-chart\",\n      component: _PlantChart__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"a\"], {\n      path: \"/plant-reference\",\n      component: _PlantReference__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"]\n    })));\n  }\n\n}\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainRouter, null), app);\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Router.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/ViewAllPlots.js":
/*!***************************************************!*\
  !*** ./frontEndSrc/js/components/ViewAllPlots.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import React, { Component } from 'react';\n// import {withRouter,Redirect} from 'react-router-dom';\n// export default class ViewAllPlots extends Component {\n// state = {\n// \t\tplots:[],\n// \t}\n// \tcomponentDidMount = () => {\n// \t\tfetch('/api/plots')\n// \t\t\t.then(response => response.json())\n// \t\t\t.then(plots =>\n// \t\t\t\tthis.setState({\n// \t\t\t\t\tplots: plots\n// \t\t\t\t})\n// \t\t\t);\n// \t};\n// \thandleChange = event => {\n// \t\tthis.setState({ [event.target.id]: event.target.value });\n// \t};\n// \tonSubmit = () => {\n// \t\t <Redirect to={{\n//              pathname: \"/my-garden-plot\",\n// \t\t\t\t\t\tstate: { currentPlot:[]}\n//     }}/> \n// \t}\n// \t// onButtonClick(){\n// \t// \tlet { history } = this.props;\n// \t// \thistory.push({\n// \t// \t pathname: '/my-garden-plot',\n// \t// \t state:{\n// \t// \t\t currentPlot: []\n// \t// \t }\n// \t// \t});\n// \t//    }\n// \trender() {\n// \t\treturn (\n// \t\t\t<div>\n// \t\t\t\t<h1>Garden Plots</h1>\n// \t\t\t\t<h5>Click on your plot title to edit or click new plot to \n// \t\t\t\t\tadd a new plot to your collection!\n// \t\t\t\t</h5>\n// \t\t\t\t<ul>\n// \t\t\t\t{this.state.plots.map((plot,index) => {\n// \t\t\t\t\treturn <li>{plot.title}</li>\n// \t\t\t\t}\n// \t\t\t\t)}\n// \t\t\t\t</ul>\n// \t\t\t\t<button onClick={this.onButtonClick.bind(this)} >\n// \t\t\t\t\tNew Plot\n// \t\t\t\t</button>\n// \t\t\t</div>\n// \t\t);\n// \t}\n// }\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/ViewAllPlots.js?");

/***/ }),

/***/ "./public/js/Crops.js":
/*!****************************!*\
  !*** ./public/js/Crops.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const Crops = [{\n  name: 'Tomato',\n  description: 'Top crop of choice for home gardens. Produces beautiful and tasty red fleshy fruit. Used for slicing, salads, or cooking into sauces. Warmer climates may allow for 2nd season in fall',\n  plantIndoors: 42,\n  //days prior to last frost to time with transplant time\n  daysToGerminate: 14,\n  //number of days it takes for seed to germinate\n  transplantDate: '1 week after last frost',\n  //earliest date to transplant into ground outside (number of days after last frost)\n  daysToMaturity: 70,\n  //number of days (average) after transplant when plant can be harvested\n  harvest: 'Pick regularly as soon as the fruits turn color but are still firm. Store at room temperature.',\n  //harvest tips\n  sunRequirement: 'Full-Sun',\n  //Full-sun partial-sun shade\n  spacing: 24,\n  //inches needed between plants\n  companionPlants: [\"Marigold\", \"Broccoli\", \"Chives\", \"Mint\", \"Borage\", \"Parsley\", \"Basil\", \"Pepper\", \"Asparagus\", \"Monarda\", \"Lettuce\", \"Garlic\", \"Dill\", \"Calendula\"],\n  //grows well near these plants\n  perennial: false,\n  //false= annual true=perennial\n  img: 'https://www.almanac.com/sites/default/files/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg',\n  //image of plant\n  icon: '' // icon of plant\n\n}, {\n  name: 'Basil',\n  description: 'Culinary herb, highly prized for its strong flavor. Used in a lot of Italian dishes such as Pesto.',\n  plantIndoors: 21,\n  daysToGerminate: 14,\n  transplantDate: '2 weeks after last frost',\n  daysToMaturity: 30,\n  harvest: 'Harvest leaves a few at a time as you need them in the kitchen. In midsummer, cut plants back by half to stimulate new growth, and make big batches of pesto with the trimmings.',\n  sunRequirement: 'Full Sun',\n  spacing: 12,\n  companionPlants: ['Tomato', 'Pepper', 'Lettuce'],\n  perennial: false,\n  img: 'https://www.miraclegro.com/sites/g/files/oydgjc111/files/styles/scotts_asset_image_720_440/public/asset_images/basil1.png?itok=PsMbxblv',\n  //image of plant\n  icon: '' // icon of plant\n\n}, {\n  name: 'Bell Peppers',\n  description: 'Produces bright red fruit that can be eaten raw or cooked. Great with Ranch dip.',\n  plantIndoors: 56,\n  daysToGerminate: 20,\n  transplantDate: '1 week after last frost when ground warms up.',\n  daysToMaturity: 75,\n  harvest: 'Peppers can be harvested when they are still green, though their flavor improves as they ripen to red, yellow, or orange.',\n  sunRequirement: 'Full Sun',\n  spacing: 12,\n  companionPlants: ['Basil', \"Marjoram\", 'Oregano', 'Carrot', \"Tomato\", 'Borage', 'Dill'],\n  perennial: false,\n  img: 'https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2009/03/iStock-530253685-400x267.jpg',\n  //image of plant\n  icon: '' // icon of plant\n\n}, {\n  name: 'Wild Garden Lettuce Mix',\n  description: 'More than 60 different varieties of lettuce. A huge variety of colors, shapes, sizes, and textures. Great for salads!',\n  plantIndoors: 30,\n  daysToGerminate: 6,\n  transplantDate: '2 weeks before last frost or sew directly after last frost',\n  daysToMaturity: 45,\n  harvest: 'You can pick individual leaves, use scissor or a knife to harvest handfuls of baby lettuce, or grow plants at proper spacing to get large, loose heads.',\n  sunRequirement: 'Partial Shade',\n  spacing: 4,\n  companionPlants: [\"Garlic\", \"Beet\", \"Dill\", 'Chives', 'Basil', 'Carrot', 'Strawberry', 'Radish', 'Spinach', 'Lettuce', 'Cabbage', 'Scallions', 'Onion'],\n  perennial: false,\n  img: 'https://www.wildgardenseed.com/images/WildGardenLettuce.jpg',\n  //image of plant\n  icon: '' // icon of plant\n\n}, {\n  name: 'Eggplant',\n  description: 'Plant produces plump purple fruit. Great for frying, pickling, or pureeing',\n  plantIndoors: 56,\n  daysToGerminate: 14,\n  transplantDate: '2 weeks after last frost',\n  daysToMaturity: 65,\n  harvest: 'Use pruning shears to cut fruits from the stem. Perfect fruits have shiny skins and only a few immature seeds inside.',\n  sunRequirement: 'Full sun',\n  spacing: 16,\n  companionPlants: ['Catnip', 'Marigold', 'Beans', 'Pepper'],\n  perennial: false,\n  img: 'https://s3.eu-west-2.amazonaws.com/growinginteractive/blog/eggplant-patio-baby-CREDIT-All-America-Selections-2x.jpg',\n  //image of plant\n  icon: '' // icon of plant\n\n}, {\n  name: 'Carrot',\n  description: 'The famous sweet orange root veggie that grows in cool weather, early spring and fall months, and even through winter in warm climates.',\n  plantIndoors: 'n/a',\n  daysToGerminate: 5,\n  transplantDate: 'Direct sow outdoors',\n  daysToMaturity: 65,\n  harvest: 'Can be harvested over a long period, but the longer plants are left in the ground, the more likely they are to be injured by insects or animals.',\n  sunRequirement: 'Sun with partial afternoon shade',\n  spacing: 4,\n  companionPlants: ['Chives', 'Potatoes', 'Leek', 'Lettuce', 'Peas', 'Radish', 'Rosemary', 'Sage', 'Tomato', 'Onion'],\n  perennial: false,\n  img: 'https://www.promixgardening.com/sites/promix/files/inline-images/PromixGardening_How%20To%20Grow%20Carrots_03_1.jpg',\n  //image of plant\n  icon: '' // icon of plant\n\n}, {\n  name: 'Sugar Snap Peas',\n  description: 'Pod producing vines containing sweet green peas. Quick growing, high producing.',\n  plantIndoors: 14,\n  daysToGerminate: 7,\n  transplantDate: 'As soon as soil can be worked.',\n  daysToMaturity: 70,\n  harvest: 'Gather snap peas when the pods become plump yet are still glossy and filled with sweet-tasting peas.',\n  sunRequirement: 'Full Sun',\n  spacing: 4,\n  companionPlants: ['Chives', 'Mint', 'Alyssum', 'Carrot', 'Corn', 'Cucumber', 'Radish', 'Turnip', 'Beans'],\n  perennial: false,\n  img: 'https://www.burpee.com/dw/image/v2/ABAQ_PRD/on/demandware.static/-/Sites-masterCatalog_Burpee/default/dwa65e45a7/Images/Product%20Images/prod000793/prod000793.jpg?sw=320&sh=378&sm=fit',\n  //image of plant\n  icon: '' // icon of plant\n\n}, {\n  name: 'Garlic',\n  description: 'Aromatic bulbs grown underground. Essential for most cuisine. Planted in fall and harvested in following spring/summer',\n  plantIndoors: 'n/a',\n  daysToGerminate: 'n/a',\n  transplantDate: 'Direct sow in fall',\n  daysToMaturity: 300,\n  harvest: 'Dig up bulbs in summer when one third of the leaves become dry and lose their green color. Shake off soil, and cure whole plants dry in a warm, shady place for two weeks before trimming and storing the garlic bulbs.',\n  sunRequirement: 'Sunny',\n  spacing: 6,\n  companionPlants: ['Tomato', 'Apple', 'Apricot', 'Plum', 'Cherry', 'Pear', 'Peach', 'Raspberry'],\n  perennial: false,\n  img: 'https://gardenerspath.com/wp-content/uploads/2019/12/How-to-Grow-Garlic-FB-Image.jpg',\n  icon: ''\n}, {\n  name: 'Chives',\n  description: 'Grow indoors or outdoors for year-round onion flavoring. Use chopped leaves and young flowers to add flavor and decorative garnish to salads.',\n  plantIndoors: 60,\n  daysToGerminate: 14,\n  transplantDate: 'After last frost, or grow indoors',\n  daysToMaturity: 80,\n  harvest: 'Use scissors to gather handfuls of leaves from early spring onward. Rinse, pat dry, and snip or cut into smaller pieces.',\n  sunRequirement: 'Full Sun to partial afternoon shade',\n  spacing: 8,\n  companionPlants: ['Carrot', 'Apple', 'Garlic', 'Onion'],\n  perennial: false,\n  img: 'https://d1nw62gticy6e9.cloudfront.net/uploads/Organic-Standard-Chives.jpg',\n  icon: ''\n}, {\n  name: '',\n  description: '',\n  plantIndoors: 0,\n  daysToGerminate: 0,\n  transplantDate: '',\n  daysToMaturity: 0,\n  harvest: '',\n  sunRequirement: '',\n  spacing: 0,\n  companionPlants: [],\n  perennial: false,\n  img: '',\n  icon: ''\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (Crops);\n\n//# sourceURL=webpack:///./public/js/Crops.js?");

/***/ })

/******/ });