(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib.ts":
/*!****************!*\
  !*** ./lib.ts ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/hello */ "./src/hello.ts");
/* harmony import */ var _src_math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/math */ "./src/math.ts");
var cov_1augoj9h8k = function () {
  var path = "/home/yannick/Desktop/geckos.io/mocha-chai-testing/packages/common/lib.ts";
  var hash = "49d2727509c5f515e8c4b5ab909bef7126488f82";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/yannick/Desktop/geckos.io/mocha-chai-testing/packages/common/lib.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    inputSourceMap: {
      version: 3,
      sources: ["/home/yannick/Desktop/geckos.io/mocha-chai-testing/packages/common/lib.ts"],
      names: ["Hello", "math"],
      mappings: "AAAA,OAAOA,KAAP,MAAkB,aAAlB;AACA,OAAOC,IAAP,MAAiB,YAAjB;AAEA,eAAe;AAAED,EAAAA,KAAK,EAALA,KAAF;AAASC,EAAAA,IAAI,EAAJA;AAAT,CAAf",
      sourcesContent: ["import Hello from './src/hello'\nimport math from './src/math'\n\nexport default { Hello, math }\n"]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "49d2727509c5f515e8c4b5ab909bef7126488f82"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();



/* harmony default export */ __webpack_exports__["default"] = ({
  Hello: _src_hello__WEBPACK_IMPORTED_MODULE_0__["default"],
  math: _src_math__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/hello.ts":
/*!**********************!*\
  !*** ./src/hello.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_191snjzqzk = function () {
  var path = "/home/yannick/Desktop/geckos.io/mocha-chai-testing/packages/common/src/hello.ts";
  var hash = "ef0364802f053609859dd14168609505fb0d5482";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/yannick/Desktop/geckos.io/mocha-chai-testing/packages/common/src/hello.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 50
        },
        end: {
          line: 1,
          column: 151
        }
      },
      "1": {
        start: {
          line: 1,
          column: 92
        },
        end: {
          line: 1,
          column: 149
        }
      },
      "2": {
        start: {
          line: 3,
          column: 44
        },
        end: {
          line: 3,
          column: 315
        }
      },
      "3": {
        start: {
          line: 3,
          column: 57
        },
        end: {
          line: 3,
          column: 58
        }
      },
      "4": {
        start: {
          line: 3,
          column: 102
        },
        end: {
          line: 3,
          column: 110
        }
      },
      "5": {
        start: {
          line: 3,
          column: 112
        },
        end: {
          line: 3,
          column: 167
        }
      },
      "6": {
        start: {
          line: 3,
          column: 168
        },
        end: {
          line: 3,
          column: 199
        }
      },
      "7": {
        start: {
          line: 3,
          column: 200
        },
        end: {
          line: 3,
          column: 254
        }
      },
      "8": {
        start: {
          line: 3,
          column: 227
        },
        end: {
          line: 3,
          column: 254
        }
      },
      "9": {
        start: {
          line: 3,
          column: 255
        },
        end: {
          line: 3,
          column: 313
        }
      },
      "10": {
        start: {
          line: 5,
          column: 62
        },
        end: {
          line: 5,
          column: 131
        }
      },
      "11": {
        start: {
          line: 5,
          column: 78
        },
        end: {
          line: 5,
          column: 131
        }
      },
      "12": {
        start: {
          line: 5,
          column: 132
        },
        end: {
          line: 5,
          column: 193
        }
      },
      "13": {
        start: {
          line: 5,
          column: 149
        },
        end: {
          line: 5,
          column: 193
        }
      },
      "14": {
        start: {
          line: 5,
          column: 194
        },
        end: {
          line: 5,
          column: 213
        }
      },
      "15": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "16": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 33
        }
      },
      "17": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 21
        }
      },
      "18": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 26,
          column: 6
        }
      },
      "19": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 40
        }
      },
      "20": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 45
        }
      },
      "21": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "_classCallCheck",
        decl: {
          start: {
            line: 1,
            column: 9
          },
          end: {
            line: 1,
            column: 24
          }
        },
        loc: {
          start: {
            line: 1,
            column: 48
          },
          end: {
            line: 1,
            column: 153
          }
        },
        line: 1
      },
      "1": {
        name: "_defineProperties",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 26
          }
        },
        loc: {
          start: {
            line: 3,
            column: 42
          },
          end: {
            line: 3,
            column: 317
          }
        },
        line: 3
      },
      "2": {
        name: "_createClass",
        decl: {
          start: {
            line: 5,
            column: 9
          },
          end: {
            line: 5,
            column: 21
          }
        },
        loc: {
          start: {
            line: 5,
            column: 60
          },
          end: {
            line: 5,
            column: 215
          }
        },
        line: 5
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 9,
            column: 0
          },
          end: {
            line: 9,
            column: 1
          }
        },
        loc: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 9
      },
      "4": {
        name: "Hello",
        decl: {
          start: {
            line: 10,
            column: 11
          },
          end: {
            line: 10,
            column: 16
          }
        },
        loc: {
          start: {
            line: 10,
            column: 23
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 10
      },
      "5": {
        name: "sayHello",
        decl: {
          start: {
            line: 18,
            column: 20
          },
          end: {
            line: 18,
            column: 28
          }
        },
        loc: {
          start: {
            line: 18,
            column: 31
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 18
      },
      "6": {
        name: "sayName",
        decl: {
          start: {
            line: 23,
            column: 20
          },
          end: {
            line: 23,
            column: 27
          }
        },
        loc: {
          start: {
            line: 23,
            column: 30
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 23
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 1,
            column: 50
          },
          end: {
            line: 1,
            column: 151
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1,
            column: 50
          },
          end: {
            line: 1,
            column: 151
          }
        }, {
          start: {
            line: 1,
            column: 50
          },
          end: {
            line: 1,
            column: 151
          }
        }],
        line: 1
      },
      "1": {
        loc: {
          start: {
            line: 3,
            column: 136
          },
          end: {
            line: 3,
            column: 166
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 3,
            column: 136
          },
          end: {
            line: 3,
            column: 157
          }
        }, {
          start: {
            line: 3,
            column: 161
          },
          end: {
            line: 3,
            column: 166
          }
        }],
        line: 3
      },
      "2": {
        loc: {
          start: {
            line: 3,
            column: 200
          },
          end: {
            line: 3,
            column: 254
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 3,
            column: 200
          },
          end: {
            line: 3,
            column: 254
          }
        }, {
          start: {
            line: 3,
            column: 200
          },
          end: {
            line: 3,
            column: 254
          }
        }],
        line: 3
      },
      "3": {
        loc: {
          start: {
            line: 5,
            column: 62
          },
          end: {
            line: 5,
            column: 131
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 62
          },
          end: {
            line: 5,
            column: 131
          }
        }, {
          start: {
            line: 5,
            column: 62
          },
          end: {
            line: 5,
            column: 131
          }
        }],
        line: 5
      },
      "4": {
        loc: {
          start: {
            line: 5,
            column: 132
          },
          end: {
            line: 5,
            column: 193
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 132
          },
          end: {
            line: 5,
            column: 193
          }
        }, {
          start: {
            line: 5,
            column: 132
          },
          end: {
            line: 5,
            column: 193
          }
        }],
        line: 5
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    inputSourceMap: {
      version: 3,
      sources: ["/home/yannick/Desktop/geckos.io/mocha-chai-testing/packages/common/src/hello.ts"],
      names: ["Hello", "name"],
      mappings: ";;;;;;IAAMA,K;;;AACJ,iBAAmBC,IAAnB,EAAiC;AAAA;;AAAA;AAAE;;;;+BAExB;AACT,6BAAgB,KAAKA,IAArB;AACD;;;8BAES;AACR,kCAAqB,KAAKA,IAA1B;AACD;;;;;;AAGH,eAAeD,KAAf",
      sourcesContent: ["class Hello {\n  constructor(public name: string) {}\n\n  sayHello() {\n    return `Hello ${this.name}`\n  }\n\n  sayName() {\n    return `My name is ${this.name}`\n  }\n}\n\nexport default Hello\n"]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ef0364802f053609859dd14168609505fb0d5482"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) {
  cov_191snjzqzk.f[0]++;
  cov_191snjzqzk.s[0]++;

  if (!(instance instanceof Constructor)) {
    cov_191snjzqzk.b[0][0]++;
    cov_191snjzqzk.s[1]++;
    throw new TypeError("Cannot call a class as a function");
  } else {
    cov_191snjzqzk.b[0][1]++;
  }
}

function _defineProperties(target, props) {
  cov_191snjzqzk.f[1]++;
  cov_191snjzqzk.s[2]++;

  for (var i = (cov_191snjzqzk.s[3]++, 0); i < props.length; i++) {
    var descriptor = (cov_191snjzqzk.s[4]++, props[i]);
    cov_191snjzqzk.s[5]++;
    descriptor.enumerable = (cov_191snjzqzk.b[1][0]++, descriptor.enumerable) || (cov_191snjzqzk.b[1][1]++, false);
    cov_191snjzqzk.s[6]++;
    descriptor.configurable = true;
    cov_191snjzqzk.s[7]++;

    if ("value" in descriptor) {
      cov_191snjzqzk.b[2][0]++;
      cov_191snjzqzk.s[8]++;
      descriptor.writable = true;
    } else {
      cov_191snjzqzk.b[2][1]++;
    }

    cov_191snjzqzk.s[9]++;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  cov_191snjzqzk.f[2]++;
  cov_191snjzqzk.s[10]++;

  if (protoProps) {
    cov_191snjzqzk.b[3][0]++;
    cov_191snjzqzk.s[11]++;

    _defineProperties(Constructor.prototype, protoProps);
  } else {
    cov_191snjzqzk.b[3][1]++;
  }

  cov_191snjzqzk.s[12]++;

  if (staticProps) {
    cov_191snjzqzk.b[4][0]++;
    cov_191snjzqzk.s[13]++;

    _defineProperties(Constructor, staticProps);
  } else {
    cov_191snjzqzk.b[4][1]++;
  }

  cov_191snjzqzk.s[14]++;
  return Constructor;
}

var Hello = (
/*#__PURE__*/
cov_191snjzqzk.s[15]++, function () {
  cov_191snjzqzk.f[3]++;

  function Hello(name) {
    cov_191snjzqzk.f[4]++;
    cov_191snjzqzk.s[16]++;

    _classCallCheck(this, Hello);

    cov_191snjzqzk.s[17]++;
    this.name = name;
  }

  cov_191snjzqzk.s[18]++;

  _createClass(Hello, [{
    key: "sayHello",
    value: function sayHello() {
      cov_191snjzqzk.f[5]++;
      cov_191snjzqzk.s[19]++;
      return "Hello ".concat(this.name);
    }
  }, {
    key: "sayName",
    value: function sayName() {
      cov_191snjzqzk.f[6]++;
      cov_191snjzqzk.s[20]++;
      return "My name is ".concat(this.name);
    }
  }]);

  cov_191snjzqzk.s[21]++;
  return Hello;
}());
/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ }),

/***/ "./src/math.ts":
/*!*********************!*\
  !*** ./src/math.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cov_1oejwna7as = function () {
  var path = "/home/yannick/Desktop/geckos.io/mocha-chai-testing/packages/common/src/math.ts";
  var hash = "cd9fbc84a35366f73cac2938b5c3f22e228a0ab2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/yannick/Desktop/geckos.io/mocha-chai-testing/packages/common/src/math.ts",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 10
        },
        end: {
          line: 3,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 15
        }
      },
      "2": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "3": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 15
        }
      },
      "4": {
        start: {
          line: 9,
          column: 15
        },
        end: {
          line: 11,
          column: 1
        }
      },
      "5": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 15
        }
      },
      "6": {
        start: {
          line: 13,
          column: 13
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "7": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 15
        }
      },
      "8": {
        start: {
          line: 17,
          column: 9
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "9": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "sum",
        decl: {
          start: {
            line: 1,
            column: 19
          },
          end: {
            line: 1,
            column: 22
          }
        },
        loc: {
          start: {
            line: 1,
            column: 29
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "multiply",
        decl: {
          start: {
            line: 5,
            column: 24
          },
          end: {
            line: 5,
            column: 32
          }
        },
        loc: {
          start: {
            line: 5,
            column: 39
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      },
      "2": {
        name: "subtract",
        decl: {
          start: {
            line: 9,
            column: 24
          },
          end: {
            line: 9,
            column: 32
          }
        },
        loc: {
          start: {
            line: 9,
            column: 39
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 9
      },
      "3": {
        name: "divide",
        decl: {
          start: {
            line: 13,
            column: 22
          },
          end: {
            line: 13,
            column: 28
          }
        },
        loc: {
          start: {
            line: 13,
            column: 35
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      "4": {
        name: "pi",
        decl: {
          start: {
            line: 17,
            column: 18
          },
          end: {
            line: 17,
            column: 20
          }
        },
        loc: {
          start: {
            line: 17,
            column: 23
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    inputSourceMap: {
      version: 3,
      sources: ["/home/yannick/Desktop/geckos.io/mocha-chai-testing/packages/common/src/math.ts"],
      names: ["sum", "a", "b", "multiply", "subtract", "divide", "pi", "Math", "PI"],
      mappings: "AAAA,IAAMA,GAAG,GAAG,SAANA,GAAM,CAACC,CAAD,EAAIC,CAAJ,EAAU;AACpB,SAAOD,CAAC,GAAGC,CAAX;AACD,CAFD;;AAIA,IAAMC,QAAQ,GAAG,SAAXA,QAAW,CAACF,CAAD,EAAIC,CAAJ,EAAU;AACzB,SAAOD,CAAC,GAAGC,CAAX;AACD,CAFD;;AAIA,IAAME,QAAQ,GAAG,SAAXA,QAAW,CAACH,CAAD,EAAIC,CAAJ,EAAU;AACzB,SAAOD,CAAC,GAAGC,CAAX;AACD,CAFD;;AAIA,IAAMG,MAAM,GAAG,SAATA,MAAS,CAACJ,CAAD,EAAIC,CAAJ,EAAU;AACvB,SAAOD,CAAC,GAAGC,CAAX;AACD,CAFD;;AAIA,IAAMI,EAAE,GAAG,SAALA,EAAK,GAAM;AACf,SAAOC,IAAI,CAACC,EAAZ;AACD,CAFD;;AAIA,eAAe;AAAER,EAAAA,GAAG,EAAHA,GAAF;AAAOG,EAAAA,QAAQ,EAARA,QAAP;AAAiBC,EAAAA,QAAQ,EAARA,QAAjB;AAA2BC,EAAAA,MAAM,EAANA,MAA3B;AAAmCC,EAAAA,EAAE,EAAFA;AAAnC,CAAf",
      sourcesContent: ["const sum = (a, b) => {\n  return a + b\n}\n\nconst multiply = (a, b) => {\n  return a * b\n}\n\nconst subtract = (a, b) => {\n  return a - b\n}\n\nconst divide = (a, b) => {\n  return a / b\n}\n\nconst pi = () => {\n  return Math.PI\n}\n\nexport default { sum, multiply, subtract, divide, pi }\n"]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "cd9fbc84a35366f73cac2938b5c3f22e228a0ab2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

cov_1oejwna7as.s[0]++;

var sum = function sum(a, b) {
  cov_1oejwna7as.f[0]++;
  cov_1oejwna7as.s[1]++;
  return a + b;
};

cov_1oejwna7as.s[2]++;

var multiply = function multiply(a, b) {
  cov_1oejwna7as.f[1]++;
  cov_1oejwna7as.s[3]++;
  return a * b;
};

cov_1oejwna7as.s[4]++;

var subtract = function subtract(a, b) {
  cov_1oejwna7as.f[2]++;
  cov_1oejwna7as.s[5]++;
  return a - b;
};

cov_1oejwna7as.s[6]++;

var divide = function divide(a, b) {
  cov_1oejwna7as.f[3]++;
  cov_1oejwna7as.s[7]++;
  return a / b;
};

cov_1oejwna7as.s[8]++;

var pi = function pi() {
  cov_1oejwna7as.f[4]++;
  cov_1oejwna7as.s[9]++;
  return Math.PI;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  sum: sum,
  multiply: multiply,
  subtract: subtract,
  divide: divide,
  pi: pi
});

/***/ })

/******/ })["default"]));
//# sourceMappingURL=lib.js.map