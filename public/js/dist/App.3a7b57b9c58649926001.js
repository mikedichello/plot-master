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
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Plot; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Plot extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      plots: [],\n      height: 0,\n      width: 0,\n      currentSubplot: [],\n      currentSubplotId: [],\n      currentPlotId: [],\n      currentPlot: [],\n      plotBackground: 'brown'\n    };\n\n    this.componentDidMount = () => {\n      fetch('/api/plots').then(response => response.json()).then(plots => this.setState({\n        plots: plots\n      }));\n    };\n\n    this.handleChange = event => {\n      this.setState({\n        [event.target.id]: event.target.value\n      });\n    };\n\n    this.plantSelection = event => {\n      event.preventDefault();\n      let plot = this.state.plots[this.state.currentPlotId];\n      console.log(plot);\n      plot.subPlot[this.state.currentSubplotId].background = event.target.style.backgroundColor;\n      fetch('/api/plots/' + plot._id, {\n        body: JSON.stringify({\n          subPlot: plot.subPlot\n        }),\n        method: 'PUT',\n        headers: {\n          'Accept': 'application/json, text/plain, */*',\n          'Content-Type': 'application/json'\n        }\n      }).then(updatedPlot => updatedPlot.json()).then(jsonedPlot => {\n        fetch('/api/plots/').then(response => response.json()).then(plots => {\n          this.setState({\n            plots: plots,\n            currentSubplot: [],\n            currentPlotId: [],\n            currentSubplotId: []\n          });\n        });\n      });\n    };\n\n    this.plotSelection = event => {\n      event.preventDefault();\n      console.log(event.target.id);\n      console.log(this.state.currentSubplot);\n      this.setState({\n        currentSubplot: event.target,\n        currentSubplotId: event.target.id\n      });\n    };\n\n    this.bigPlot = index => {\n      this.setState({\n        currentPlotId: index\n      });\n    };\n\n    this.deletePlot = (id, index) => {\n      fetch('/api/plots/' + id, {\n        method: 'DELETE'\n      }).then(data => {\n        this.setState({\n          plots: [...this.state.plots.slice(0, index), ...this.state.plots.slice(index + 1)]\n        });\n      });\n    };\n\n    this.newPlot = event => {\n      event.preventDefault();\n      let subPlots = [];\n\n      for (let i = 0; i < this.state.height * this.state.width; i++) {\n        subPlots.push({\n          key: i,\n          height: '50px',\n          width: '50px',\n          background: this.state.plotBackground,\n          plantName: null,\n          plantDescription: null,\n          harvestTime: null,\n          plantingTime: null\n        });\n      }\n\n      fetch('/api/plots', {\n        body: JSON.stringify({\n          height: this.state.height,\n          width: this.state.width,\n          subPlot: subPlots\n        }),\n        method: 'POST',\n        headers: {\n          Accept: 'application/json, text/plain, */*',\n          'Content-Type': 'application/json'\n        }\n      }).then(createdPlot => {\n        return createdPlot.json();\n      }).then(jsonedPlot => {\n        this.setState({\n          height: 0,\n          width: 0,\n          plots: [...this.state.plots, jsonedPlot]\n        });\n      });\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"My Plot\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n      onSubmit: this.newPlot\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"height\"\n    }, \"Height\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"number\",\n      value: this.state.height,\n      onChange: this.handleChange,\n      id: \"height\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n      htmlFor: \"width\"\n    }, \"Width\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"number\",\n      value: this.state.width,\n      onChange: this.handleChange,\n      id: \"width\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n      type: \"submit\"\n    })), this.state.plots.map((plot, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"plot\",\n        onClick: () => this.bigPlot(index),\n        id: index,\n        style: {\n          width: plot.width * 50,\n          display: \"flex\",\n          flexWrap: \"wrap\"\n        }\n      }, plot.subPlot.map((subplot, index) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"subplot\",\n          onClick: this.state.currentSubplot.length === 0 ? this.plotSelection : this.plantSelection,\n          id: subplot.key,\n          style: {\n            width: subplot.width,\n            height: subplot.height,\n            backgroundColor: subplot.background\n          }\n        });\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: () => this.deletePlot(plot._id, index)\n      }, \"Delete\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        onClick: this.plantSelection,\n        style: {\n          width: '50px',\n          height: '50px',\n          backgroundColor: 'yellow'\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"plantInfo\"\n      }, true ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, this.state.currentSubplot.background)) : undefined));\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Plot.js?");

/***/ }),

/***/ "./frontEndSrc/js/components/Router.js":
/*!*********************************************!*\
  !*** ./frontEndSrc/js/components/Router.js ***!
  \*********************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home */ \"./frontEndSrc/js/components/Home.js\");\n/* harmony import */ var _ViewAllPlots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ViewAllPlots */ \"./frontEndSrc/js/components/ViewAllPlots.js\");\n/* harmony import */ var _Plot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Plot */ \"./frontEndSrc/js/components/Plot.js\");\n/* harmony import */ var _PlantChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PlantChart */ \"./frontEndSrc/js/components/PlantChart.js\");\n/* harmony import */ var _PlantReference__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PlantReference */ \"./frontEndSrc/js/components/PlantReference.js\");\n/* harmony import */ var _SignUpForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SignUpForm */ \"./frontEndSrc/js/components/SignUpForm.js\");\n/* harmony import */ var _LogInForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LogInForm */ \"./frontEndSrc/js/components/LogInForm.js\");\n/* harmony import */ var _LogOut__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LogOut */ \"./frontEndSrc/js/components/LogOut.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass MainRouter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n    this.state = {\n      username: '',\n      password: '',\n      isLoggedIn: false\n    };\n  }\n\n  componentDidMount() {\n    if (localStorage.token) {\n      this.setState({\n        isLoggedIn: true\n      });\n    } else {\n      this.setState({\n        isLoggedIn: false\n      });\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* HashRouter */ \"a\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n      className: \"navbar-light bg-light row\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/\",\n      className: \"nav-item m-2\"\n    }, \"Home\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/my-garden-plot\",\n      className: \"nav-item m-2\"\n    }, \"My Garden Plot\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/all-plots\",\n      className: \"nav-item m-2\"\n    }, \"View All Plots\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/planting-chart\",\n      className: \"nav-item m-2\"\n    }, \"Planting Chart\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/plant-reference\",\n      className: \"nav-item m-2\"\n    }, \"Reference Guide\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* NavLink */ \"b\"], {\n      to: \"/login\",\n      className: \"nav-item m-2\"\n    }, \"Login\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"b\"], {\n      exact: true,\n      path: \"/\",\n      component: _Home__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"b\"], {\n      path: \"/my-garden-plot\",\n      component: _Plot__WEBPACK_IMPORTED_MODULE_6__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"b\"], {\n      path: \"/all-plots\",\n      component: _ViewAllPlots__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"b\"], {\n      path: \"/planting-chart\",\n      component: _PlantChart__WEBPACK_IMPORTED_MODULE_7__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"b\"], {\n      path: \"/plant-reference\",\n      component: _PlantReference__WEBPACK_IMPORTED_MODULE_8__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"b\"], {\n      path: \"/login\",\n      component: _LogInForm__WEBPACK_IMPORTED_MODULE_10__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"b\"], {\n      path: \"/signup\",\n      component: _SignUpForm__WEBPACK_IMPORTED_MODULE_9__[/* default */ \"a\"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ \"b\"], {\n      path: \"/logout\",\n      component: _LogOut__WEBPACK_IMPORTED_MODULE_11__[/* default */ \"a\"]\n    })));\n  }\n\n}\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainRouter, null), app);\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/Router.js?");

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

/***/ "./frontEndSrc/js/components/ViewAllPlots.js":
/*!***************************************************!*\
  !*** ./frontEndSrc/js/components/ViewAllPlots.js ***!
  \***************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Garden; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n\n\nclass Garden extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      plots: []\n    };\n\n    this.componentDidMount = () => {\n      fetch('/api/plots').then(response => response.json()).then(plots => this.setState({\n        plots: plots\n      }));\n    };\n\n    this.handleChange = event => {\n      this.setState({\n        [event.target.id]: event.target.value\n      });\n    };\n\n    this.onSubmit = () => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Redirect */ \"a\"], {\n        to: \"/my-garden-plot/\" // state: { currentPlot:[]}\n\n      });\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Garden Plots\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h5\", null, \"Click on your plot title to edit or click new plot to add a new plot to your collection!\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n      onClick: this.onSubmit\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./frontEndSrc/js/components/ViewAllPlots.js?");

/***/ }),

/***/ "./public/js/Crops.js":
/*!****************************!*\
  !*** ./public/js/Crops.js ***!
  \****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const Crops = [{\n  name: 'Tomato',\n  description: 'Top crop of choice for home gardens. Produces beautiful and tasty red fleshy fruit. Used for slicing, salads, or cooking into sauces. Warmer climates may allow for 2nd season in fall',\n  plantIndoors: 42,\n  //days prior to last frost to time with transplant time\n  daysToGerminate: 14,\n  //number of days it takes for seed to germinate\n  transplantDate: '1 week after last frost',\n  //earliest date to transplant into ground outside (number of days after last frost)\n  daysToMaturity: 70,\n  //number of days (average) after transplant when plant can be harvested\n  harvest: 'Pick regularly as soon as the fruits turn color but are still firm. Store at room temperature.',\n  //harvest tips\n  sunRequirement: 'Full-Sun',\n  //Full-sun partial-sun shade\n  spacing: 20,\n  //inches needed between plants\n  companionPlants: [\"Marigold\", \"Broccoli\", \"Chives\", \"Mint\", \"Borage\", \"Parsley\", \"Basil\", \"Pepper\", \"Asparagus\", \"Monarda\", \"Lettuce\", \"Garlic\", \"Dill\", \"Calendula\"],\n  //grows well near these plants\n  perennial: false //false= annual true=perennial\n\n}, {\n  name: 'Basil',\n  description: 'Culinary herb, highly prized for its strong flavor. Used in a lot of Italian dishes such as Pesto.',\n  plantIndoors: 21,\n  daysToGerminate: 14,\n  transplantDate: '2 weeks after last frost',\n  daysToMaturity: 30,\n  harvest: 'Harvest leaves a few at a time as you need them in the kitchen. In midsummer, cut plants back by half to stimulate new growth, and make big batches of pesto with the trimmings.',\n  sunRequirement: 'Full Sun',\n  spacing: 8,\n  companionPlants: ['Tomato', 'Pepper', 'Lettuce'],\n  perennial: false\n}, {\n  name: 'Bell Peppers',\n  description: 'Produces bright red fruit that can be eaten raw or cooked. Great with Ranch dip.',\n  plantIndoors: 56,\n  daysToGerminate: 20,\n  transplantDate: '1 week after last frost when ground warms up.',\n  daysToMaturity: 75,\n  harvest: 'Peppers can be harvested when they are still green, though their flavor improves as they ripen to red, yellow, or orange.',\n  sunRequirement: 'Full Sun',\n  spacing: 14,\n  companionPlants: ['Basil', \"Marjoram\", 'Oregano', 'Carrot', \"Tomato\", 'Borage', 'Dill'],\n  perennial: false\n}, {\n  name: 'Wild Garden Lettuce Mix',\n  description: 'More than 60 different varieties of lettuce. A huge variety of colors, shapes, sizes, and textures. Great for salads!',\n  plantIndoors: 30,\n  daysToGerminate: 6,\n  transplantDate: '2 weeks before last frost or sew directly after last frost',\n  daysToMaturity: 45,\n  harvest: 'You can pick individual leaves, use scissor or a knife to harvest handfuls of baby lettuce, or grow plants at proper spacing to get large, loose heads.',\n  sunRequirement: 'Partial Shade',\n  spacing: 4,\n  companionPlants: [\"Garlic\", \"Beet\", \"Dill\", 'Chives', 'Basil', 'Carrot', 'Strawberry', 'Radish', 'Spinach', 'Lettuce', 'Cabbage', 'Scallions', 'Onion'],\n  perennial: false\n}, {\n  name: 'Eggplant',\n  description: 'Plant produces plump purple fruit. Great for frying, pickling, or pureeing',\n  plantIndoors: 56,\n  daysToGerminate: 14,\n  transplantDate: '2 weeks after last frost',\n  daysToMaturity: 65,\n  harvest: 'Use pruning shears to cut fruits from the stem. Perfect fruits have shiny skins and only a few immature seeds inside.',\n  sunRequirement: 'Full sun',\n  spacing: 16,\n  companionPlants: ['Catnip', 'Marigold', 'Beans', 'Pepper'],\n  perennial: false\n}, {\n  name: 'Carrot',\n  description: 'The famous sweet orange root veggie that grows in cool weather, early spring and fall months, and even through winter in warm climates.',\n  plantIndoors: 'n/a',\n  daysToGerminate: 5,\n  transplantDate: 'Direct sow outdoors',\n  daysToMaturity: 65,\n  harvest: 'Can be harvested over a long period, but the longer plants are left in the ground, the more likely they are to be injured by insects or animals.',\n  sunRequirement: 'Sun with partial afternoon shade',\n  spacing: 4,\n  companionPlants: ['Chives', 'Potatoes', 'Leek', 'Lettuce', 'Peas', 'Radish', 'Rosemary', 'Sage', 'Tomato', 'Onion'],\n  perennial: false\n}, {\n  name: 'Sugar Snap Peas',\n  description: 'Pod producing vines containing sweet green peas. Quick growing, high producing.',\n  plantIndoors: 14,\n  daysToGerminate: 7,\n  transplantDate: 'As soon as soil can be worked.',\n  daysToMaturity: 70,\n  harvest: 'Gather snap peas when the pods become plump yet are still glossy and filled with sweet-tasting peas.',\n  sunRequirement: 'Full Sun',\n  spacing: 4,\n  companionPlants: ['Chives', 'Mint', 'Alyssum', 'Carrot', 'Corn', 'Cucumber', 'Radish', 'Turnip', 'Beans'],\n  perennial: false\n}, {\n  name: '',\n  description: '',\n  plantIndoors: 0,\n  daysToGerminate: 0,\n  transplantDate: '',\n  daysToMaturity: 0,\n  harvest: '',\n  sunRequirement: '',\n  spacing: 0,\n  companionPlants: [],\n  perennial: false\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (Crops);\n\n//# sourceURL=webpack:///./public/js/Crops.js?");

/***/ })

/******/ });