/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var headers = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

/* harmony default export */ __webpack_exports__["a"] = ({
	getInitialStateForDictionary: function getInitialStateForDictionary() {
		var _this = this;

		var res = {};

		return this.getWords('select=recent').then(function (result) {
			res = Object.assign({ res: res }, result);
			return _this.getWordsCount();
		}).then(function (count) {
			res.wordsCount = count;
			return res;
		});
	},
	getWordsCount: function getWordsCount() {
		return fetch('http://localhost:3000/api/words/count').then(function (result) {
			console.log(result.status);
			return result.json();
		}).catch(function (err) {
			return console.log(err);
		});
	},
	getWords: function getWords() {
		var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

		if (query) {
			query = "?" + query;
		}
		return fetch('http://localhost:3000/api/words' + query).then(function (result) {
			return result.json();
		}).catch(function (err) {
			return console.log(err);
		});
	},
	getWordsByDate: function getWordsByDate(date) {

		return fetch('http://localhost:3000/api/wordsByDate?date=' + date.date + '&month=' + date.month + '&year=' + date.year).then(function (result) {
			return result.json();
		}).catch(function (err) {
			return console.log(err);
		});
	},
	getWordsByMonth: function getWordsByMonth(date) {
		return fetch('http://localhost:3000/api/wordsByMonth?&month=' + date.month + '&year=' + date.year).then(function (result) {
			return result.json();
		}).catch(function (err) {
			return console.log(err);
		});
	},
	createWord: function createWord(word) {
		return fetch('http://localhost:3000/api/words', { method: 'POST', body: JSON.stringify(word), headers: headers }).then(function () {
			return console.log('add word success!!');
		}).catch(function (err) {
			return console.log(err);
		});
	},
	updateWord: function updateWord(word) {
		return fetch('http://localhost:3000/api/words', { method: 'PUT', body: JSON.stringify(word), headers: headers }).then(function (updatedWord) {
			return console.log(updatedWord);
		}).catch(function (err) {
			return console.log(err);
		});
	},
	removeWord: function removeWord(id) {
		return fetch('http://localhost:3000/api/words/' + id, { method: 'DELETE', headers: headers });
	}
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_meanie_mongoose_to_json__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_meanie_mongoose_to_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_meanie_mongoose_to_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);

/**
 * Defining a Word Model in mongoose
 * Code modified from https://github.com/sahat/hackathon-starter
 */

// Other oauthtypes to be added



/*
 Word Schema
 */

var WordSchema = new __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema({
  ru: { type: String },
  en: { type: String },
  createdDate: {
    day: Number,
    month: Number,
    year: Number,
    full: Date
  },
  repetitionDate: { type: Date },
  repetitionCount: { type: Number },
  attemptCount: { type: Number }
});

WordSchema.index({ "createdDate.year": -1, "createdDate.month": -1, "cretedDate.day": -1 });

WordSchema.virtual('createdDateISO').set(function (dateISOString) {
  var d = __WEBPACK_IMPORTED_MODULE_2_moment___default()(dateISOString);

  this.createdDate = {
    day: d.date(),
    month: d.month(),
    year: d.year(),
    full: dateISOString
  };
});

WordSchema.plugin(__WEBPACK_IMPORTED_MODULE_1_meanie_mongoose_to_json___default.a);

/**
 * Statics
 */

WordSchema.statics = {};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Word', WordSchema));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Test_Test__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dictionary_Dictionary__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dictionary_CreateWordForm__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dictionary_EditWordForm__ = __webpack_require__(34);




var routes = [{
	path: '/',
	component: __WEBPACK_IMPORTED_MODULE_0__Test_Test__["a" /* default */],
	exact: true
}, {
	path: '/dictionary',
	component: __WEBPACK_IMPORTED_MODULE_1__Dictionary_Dictionary__["a" /* default */],
	exact: true
}, {
	path: '/dictionary/create-word',
	component: __WEBPACK_IMPORTED_MODULE_2__Dictionary_CreateWordForm__["a" /* default */],
	exact: true
}, {
	path: '/dictionary/edit-word/id=:id&en=:en&ru=:ru',
	component: __WEBPACK_IMPORTED_MODULE_3__Dictionary_EditWordForm__["a" /* default */],
	exact: true
}];

/* harmony default export */ __webpack_exports__["a"] = (routes);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TestWord__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Result__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browser_dataService__ = __webpack_require__(3);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\Test\\Test.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Test = function (_Component) {
	_inherits(Test, _Component);

	function Test(props) {
		_classCallCheck(this, Test);

		var _this = _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).call(this, props));

		_this.handleTestWord = function (testWord) {
			var _this$state = _this.state,
			    currentWordIdx = _this$state.currentWordIdx,
			    words = _this$state.words;

			console.log(words[currentWordIdx].en + ' - ' + testWord + ' / ' + words[currentWordIdx].ru);
			_this.state.answers.push(testWord);

			if (currentWordIdx < words.length - 1) {
				_this.setState({ currentWordIdx: ++currentWordIdx });
			} else {
				_this.setState({ currentTestStage: "result" });
			}
		};

		_this.handleStartClick = function () {
			_this.setState({ currentTestStage: 'test' });
		};

		_this.handleResultExit = function () {
			Test.requestInitialState().then(function (words) {
				return _this.setState({
					currentTestStage: 'prestart',
					answers: [],
					currentWordIdx: 0,
					words: words
				});
			});
		};

		var initialState = void 0;

		if (props.staticContext) {
			initialState = props.staticContext.initialState;
		} else {
			initialState = window.__initialState__;
			delete window.__initialState__;
		}

		_this.state = {
			words: initialState || [],
			currentWordIdx: 0,
			currentTestStage: 'prestart',
			answers: []
		};
		return _this;
	}

	_createClass(Test, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (this.state.words) {
				Test.requestInitialState().then(function (words) {
					return _this2.setState({ words: words });
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    currentTestStage = _state.currentTestStage,
			    words = _state.words,
			    answers = _state.answers;

			var jsx = void 0;

			if (currentTestStage == 'prestart') {
				var getPostfix = function getPostfix(amount) {
					if (amount == 1) return 'о';
					if (amount > 0 && amount < 5) return "а";else return '';
				};

				var wordsAmount = this.state.words.length;
				var postfix = getPostfix(wordsAmount);

				jsx = [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ key: 'paragraph', __source: {
							fileName: _jsxFileName,
							lineNumber: 76
						},
						__self: this
					},
					' \u041A \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u044E ',
					wordsAmount,
					' \u0441\u043B\u043E\u0432',
					postfix,
					' '
				), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
					{ key: 'btnStart', onClick: this.handleStartClick, disabled: words.length === 0, __source: {
							fileName: _jsxFileName,
							lineNumber: 77
						},
						__self: this
					},
					'\u041D\u0430\u0447\u0430\u0442\u044C'
				)];
			} else if (currentTestStage == 'test') {
				var currentWordIdx = this.state.currentWordIdx;
				var currentWord = this.state.words[currentWordIdx];

				jsx = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TestWord__["a" /* default */], { key: 'word', word: currentWord, onTest: this.handleTestWord, __source: {
						fileName: _jsxFileName,
						lineNumber: 83
					},
					__self: this
				});
			} else if (currentTestStage == 'result') {
				jsx = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Result__["a" /* default */], { key: 'result', words: words, answers: answers, onExit: this.handleResultExit, __source: {
						fileName: _jsxFileName,
						lineNumber: 85
					},
					__self: this
				});
			}
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ style: { width: "50%", margin: "75px auto", textAlign: "center" }, __source: {
						fileName: _jsxFileName,
						lineNumber: 88
					},
					__self: this
				},
				jsx
			);
		}
	}], [{
		key: 'requestInitialState',
		value: function requestInitialState() {
			return __WEBPACK_IMPORTED_MODULE_4__browser_dataService__["a" /* default */].getWords("select=toRepetition");
		}
	}]);

	return Test;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Test);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browser_dataService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Row__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MyPagination_MyPagination__ = __webpack_require__(29);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\Dictionary\\Dictionary.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Dictionary = function (_Component) {
	_inherits(Dictionary, _Component);

	function Dictionary(props) {
		_classCallCheck(this, Dictionary);

		var _this = _possibleConstructorReturn(this, (Dictionary.__proto__ || Object.getPrototypeOf(Dictionary)).call(this, props));

		_this.handleRemoveWord = function (id) {
			__WEBPACK_IMPORTED_MODULE_4__browser_dataService__["a" /* default */].removeWord(id).then(function () {
				return _this.setState({
					words: _this.state.words.filter(function (word) {
						return word.id !== id;
					})
				});
			});
		};

		_this.handleSelectPage = function (selectedDate) {
			if (_this.state.activePage !== selectedDate) {
				__WEBPACK_IMPORTED_MODULE_4__browser_dataService__["a" /* default */].getWordsByDate({
					year: _this.state.activeYear,
					month: _this.state.activeMonth,
					date: selectedDate
				}).then(function (words) {
					_this.setState({
						words: words,
						activePage: selectedDate
					});
				}).catch(function (err) {
					return console.log(err);
				});
			}
		};

		_this.handleChangeMonth = function (newActiveMonth) {
			if (_this.state.activeMonth === newActiveMonth) return;

			__WEBPACK_IMPORTED_MODULE_4__browser_dataService__["a" /* default */].getWordsByMonth({
				year: _this.state.activeYear,
				month: newActiveMonth
			}).then(function (res) {
				var daysHaveEntries = res.daysHaveEntries,
				    wordsLastDay = res.wordsLastDay;


				_this.setState({
					words: wordsLastDay,
					activeMonth: newActiveMonth,
					daysHaveEntries: daysHaveEntries,
					activePage: Math.max.apply(Math, _toConsumableArray(daysHaveEntries))
				});
			});
		};

		var initialState = void 0;

		if (props.staticContext) {
			initialState = props.staticContext.initialState;
		} else {
			initialState = window.__initialState__;
			delete window.__initialState__;
		}

		_this.state = {
			words: initialState && initialState.wordsLastDay || [],
			activePage: initialState && Math.max.apply(Math, _toConsumableArray(initialState.daysHaveEntries)) || null,
			daysHaveEntries: initialState && initialState.daysHaveEntries || [],
			wordsCount: initialState && initialState.wordsCount || 0,
			yearsHaveEntries: initialState && initialState.yearsHaveEntries || [],
			monthsHaveEntries: initialState && initialState.monthsHaveEntries || [],
			activeYear: initialState && _this.getRecent(initialState.yearsHaveEntries) || null,
			activeMonth: initialState && _this.getRecent(initialState.monthsHaveEntries) || null
		};
		return _this;
	}

	_createClass(Dictionary, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (!this.state.words.length) {
				Dictionary.requestInitialState().then(function (initialState) {
					_this2.setState({
						words: initialState.wordsLastDay,
						wordsCount: initialState.wordsCount,
						yearsHaveEntries: initialState.yearsHaveEntries,
						monthsHaveEntries: initialState.monthsHaveEntries,
						daysHaveEntries: initialState.daysHaveEntries,
						activePage: Math.max.apply(Math, _toConsumableArray(initialState.daysHaveEntries)),
						activeYear: initialState && _this2.getRecent(initialState.yearsHaveEntries) || null,
						activeMonth: initialState && _this2.getRecent(initialState.monthsHaveEntries) || null
					});
				});
			}
		}
	}, {
		key: 'getRecent',
		value: function getRecent(arr) {
			return Math.max.apply(Math, _toConsumableArray(arr));
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    words = _state.words,
			    activePage = _state.activePage,
			    wordsCount = _state.wordsCount,
			    yearsHaveEntries = _state.yearsHaveEntries,
			    monthsHaveEntries = _state.monthsHaveEntries,
			    daysHaveEntries = _state.daysHaveEntries,
			    activeMonth = _state.activeMonth;


			var rows = words && words.map(function (word, i) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Row__["a" /* default */], { key: i, word: word, onRemove: _this3.handleRemoveWord, __source: {
						fileName: _jsxFileName,
						lineNumber: 120
					},
					__self: _this3
				});
			});

			var recentMonth = __WEBPACK_IMPORTED_MODULE_3_moment___default()().set({
				"year": this.getRecent(yearsHaveEntries),
				"month": this.getRecent(monthsHaveEntries)
			});
			var pages = Array.from({ length: recentMonth.daysInMonth() }, function (i, idx) {
				return idx + 1;
			});

			var disabledPages = pages.filter(function (p) {
				return daysHaveEntries.indexOf(p) === -1;
			});

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ style: { width: "50%", margin: '75px auto' }, __source: {
						fileName: _jsxFileName,
						lineNumber: 132
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'span',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 133
						},
						__self: this
					},
					'\u0421\u043B\u043E\u0432 \u0432 \u0441\u043B\u043E\u0432\u0430\u0440\u0435: ' + wordsCount
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ key: 'add-word', __source: {
							fileName: _jsxFileName,
							lineNumber: 134
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__["LinkContainer"],
						{ to: '/dictionary/create-word', exact: true, __source: {
								fileName: _jsxFileName,
								lineNumber: 135
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 136
								},
								__self: this
							},
							'\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C'
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Table"],
					{ key: 'table', striped: true, bordered: true, condensed: true, hover: true, __source: {
							fileName: _jsxFileName,
							lineNumber: 139
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'tbody',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 140
							},
							__self: this
						},
						rows
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__MyPagination_MyPagination__["a" /* default */], {
					key: 'my-pagination',
					activePage: activePage,
					disabledPages: disabledPages,
					pages: pages,
					activeMonth: activeMonth,
					availableMonths: monthsHaveEntries,
					availableYears: yearsHaveEntries,
					onChangeMonth: this.handleChangeMonth,
					onSelectPage: this.handleSelectPage,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 144
					},
					__self: this
				})
			);
		}
	}], [{
		key: 'requestInitialState',
		value: function requestInitialState() {
			return __WEBPACK_IMPORTED_MODULE_4__browser_dataService__["a" /* default */].getInitialStateForDictionary();
		}
	}]);

	return Dictionary;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Dictionary);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browser_dataService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\Dictionary\\WordForm.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var WordForm = function (_Component) {
	_inherits(WordForm, _Component);

	function WordForm(props) {
		_classCallCheck(this, WordForm);

		var _this = _possibleConstructorReturn(this, (WordForm.__proto__ || Object.getPrototypeOf(WordForm)).call(this, props));

		_this.handleInputChange = function (e) {
			_this.setState(_defineProperty({}, e.target.name, e.target.value));
		};

		_this.handleSubmit = function () {
			var _this$state = _this.state,
			    id = _this$state.id,
			    en = _this$state.en,
			    ru = _this$state.ru,
			    createdDate = _this$state.createdDate,
			    repetitionDate = _this$state.repetitionDate,
			    repetitionCount = _this$state.repetitionCount;


			var word = { id: id, en: en, ru: ru, createdDate: createdDate, repetitionDate: repetitionDate, repetitionCount: repetitionCount };

			if (_this.state.mode == 'create') {
				var initialData = {
					createdDateISO: __WEBPACK_IMPORTED_MODULE_4_moment___default()().toISOString(),
					repetitionDate: __WEBPACK_IMPORTED_MODULE_4_moment___default()().add(5, 'm').toISOString(),
					repetitionCount: 0,
					attemptCount: 0
				};
				_this.createOnServer(Object.assign({}, word, initialData));

				_this.setState(_this.defaultState);
				_this.focusToInput();
			} else if (_this.state.mode == 'edit') {
				_this.updateOnServer(word);

				_this.context.router.history.goBack();
			}

			console.log(word);
		};

		_this.defaultState = {
			id: _this.props.id || null,
			mode: props.mode,
			en: props.en || '',
			ru: props.ru && decodeURIComponent(props.ru) || ''
		};

		_this.state = _this.defaultState;
		return _this;
	}

	_createClass(WordForm, [{
		key: 'focusToInput',
		value: function focusToInput() {
			var node = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.input);
			if (node && node.focus instanceof Function) {
				node.focus();
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.focusToInput();
		}
	}, {
		key: 'createOnServer',
		value: function createOnServer(word) {
			__WEBPACK_IMPORTED_MODULE_5__browser_dataService__["a" /* default */].createWord(word);
		}
	}, {
		key: 'updateOnServer',
		value: function updateOnServer(word) {
			__WEBPACK_IMPORTED_MODULE_5__browser_dataService__["a" /* default */].updateWord(word);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'form',
				{ style: { width: "25%", margin: '75px auto' }, __source: {
						fileName: _jsxFileName,
						lineNumber: 80
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 81
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["ControlLabel"],
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 82
							},
							__self: this
						},
						'\u043F\u043E-\u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"], {
						name: 'en',
						type: 'text',
						value: this.state.en,
						onChange: this.handleInputChange,
						ref: function ref(input) {
							return _this2.input = input;
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 85
						},
						__self: this
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormGroup"],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 93
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["ControlLabel"],
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 94
							},
							__self: this
						},
						'\u043F\u043E-\u0440\u0443\u0441\u0441\u043A\u0438'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["FormControl"], {
						name: 'ru',
						type: 'text',
						value: this.state.ru,
						onChange: this.handleInputChange,
						__source: {
							fileName: _jsxFileName,
							lineNumber: 97
						},
						__self: this
					})
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_bootstrap__["Button"],
					{ onClick: this.handleSubmit, __source: {
							fileName: _jsxFileName,
							lineNumber: 104
						},
						__self: this
					},
					this.state.mode === 'edit' ? 'Изменить' : 'Добавить'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
					{ to: '/dictionary', style: { marginLeft: 80, fontSize: 11 }, __source: {
							fileName: _jsxFileName,
							lineNumber: 105
						},
						__self: this
					},
					' \u043E\u0431\u0440\u0430\u0442\u043D\u043E \u0432 \u0441\u043B\u043E\u0432\u0430\u0440\u044C '
				)
			);
		}
	}]);

	return WordForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

WordForm.contextTypes = {
	router: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
		history: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
	})
};
/* harmony default export */ __webpack_exports__["a"] = (WordForm);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serialize_javascript__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_source_map_support__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_source_map_support___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_source_map_support__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__db_connect__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_App__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__db_controllers_word__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_routes__ = __webpack_require__(8);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\server\\index.js',
    _this = this;
















if (process.env.NODE_ENV === 'development') {
	__WEBPACK_IMPORTED_MODULE_4_source_map_support___default.a.install();
}

var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_7_body_parser___default.a.json());

app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static('public'));

Object(__WEBPACK_IMPORTED_MODULE_9__db_connect__["a" /* default */])();

app.get('/api/words', __WEBPACK_IMPORTED_MODULE_11__db_controllers_word__["a" /* default */].getWords);
app.get('/api/words/count', __WEBPACK_IMPORTED_MODULE_11__db_controllers_word__["a" /* default */].getCount);
app.get('/api/wordsByDate', __WEBPACK_IMPORTED_MODULE_11__db_controllers_word__["a" /* default */].getWordsByDate);
app.get('/api/wordsByMonth', __WEBPACK_IMPORTED_MODULE_11__db_controllers_word__["a" /* default */].getWordsByMonth);
app.post('/api/words', __WEBPACK_IMPORTED_MODULE_11__db_controllers_word__["a" /* default */].create);
app.put('/api/words', __WEBPACK_IMPORTED_MODULE_11__db_controllers_word__["a" /* default */].update);
app.delete('/api/words/:id', __WEBPACK_IMPORTED_MODULE_11__db_controllers_word__["a" /* default */].remove);

app.get('*', function (req, res, next) {
	if (req.url == '/favicon.ico' || req.url == '/robots.txt') return next();

	var currentRoute = __WEBPACK_IMPORTED_MODULE_12__shared_routes__["a" /* default */].find(function (route) {
		return Object(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["matchPath"])(req.url, route);
	});
	var requestInitialState = currentRoute.component.requestInitialState && currentRoute.component.requestInitialState();

	Promise.resolve(requestInitialState).then(function (initialState) {

		var markup = Object(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["StaticRouter"],
			{ location: req.url, context: { initialState: initialState }, __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				},
				__self: _this
			},
			__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__shared_App__["a" /* default */], {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				},
				__self: _this
			})
		));

		// JSON.stringify(initialState) - делает наше приложение уязвимым для XSS и code-injection
		// use serialize-javascript
		return res.send('\n\t\t\t<!DOCTYPE html>\n\t\t\t<html lang="en">\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t<title>Document</title>\n\t\t\t\t<link rel="stylesheet" type="text/css" href="/css/main.css">\n\t\t\t\t<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"\n\t\t\t\t<!-- Latest compiled and minified CSS -->\n\t\t\t\t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n\t\t\t\t<script src=\'/bundle.js\' defer> </script>\n\t\t\t\t<script>\n\t\t\t\t\twindow.__initialState__ = ' + __WEBPACK_IMPORTED_MODULE_0_serialize_javascript___default()(initialState) + '\n\t\t\t\t</script>\n\t\t\t</head>\n\t\t\t<body>\n\t\t\t\t<div id=\'root\'>' + markup + '</div>\n\t\t\t</body>\n\t\t\t</html>\n\t\t');
	});
});

app.listen(process.env.PORT || '3000', function () {
	console.log("server is run!");
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_word__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);






function connect() {
	(function () {
		__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */], function (err) {
			if (err) {
				console.log('Error connection to ' + __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */]);
				console.log('Reason ' + err);
			} else {

				console.log('Succeeded in connecting to ' + __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* default */]);
			}
		});
	})();

	__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on('error', console.log);
	__WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.connection.on('disconnected', connect);
	Object(__WEBPACK_IMPORTED_MODULE_2__models__["a" /* default */])();
}

/* harmony default export */ __webpack_exports__["a"] = (connect);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var address = process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://test:test123@ds147974.mlab.com:47974/learn-english';

/* harmony default export */ __webpack_exports__["a"] = (address);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
	__webpack_require__(6);
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("meanie-mongoose-to-json");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Test_Test__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Dictionary_Dictionary__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NavBar__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__NavBar__["a" /* default */], { key: 'navbar', __source: {
					fileName: _jsxFileName,
					lineNumber: 19
				},
				__self: this
			}), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Grid"],
				{ key: 'content', __source: {
						fileName: _jsxFileName,
						lineNumber: 20
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Row"],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 21
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_7_react_bootstrap__["Col"],
						{ md: 12, __source: {
								fileName: _jsxFileName,
								lineNumber: 22
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 23
								},
								__self: this
							},
							__WEBPACK_IMPORTED_MODULE_2__routes__["a" /* default */].map(function (route, i) {
								return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({ key: i }, route, {
									__source: {
										fileName: _jsxFileName,
										lineNumber: 24
									},
									__self: _this2
								}));
							})
						)
					)
				)
			)];
		}
	}]);

	return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\Test\\TestWord.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var TestWord = function (_Component) {
	_inherits(TestWord, _Component);

	function TestWord() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TestWord);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TestWord.__proto__ || Object.getPrototypeOf(TestWord)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: ''
		}, _this.handleChange = function (e) {
			_this.setState({ value: e.target.value });
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TestWord, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.input).focus();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ key: 'test-word', __source: {
						fileName: _jsxFileName,
						lineNumber: 17
					},
					__self: this
				},
				this.props.word.ru
			), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["FormControl"], {
				key: 'answer',
				type: 'text',
				value: this.state.value,
				onChange: this.handleChange,
				ref: function ref(i) {
					return _this2.input = i;
				},
				onKeyPress: function onKeyPress(e) {
					if (e.key !== 'Enter') return;
					_this2.setState({ value: '' });
					_this2.props.onTest(_this2.state.value);
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 18
				},
				__self: this
			})];
		}
	}]);

	return TestWord;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TestWord);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_dataService__ = __webpack_require__(3);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\Test\\Result.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Result = function (_Component) {
	_inherits(Result, _Component);

	function Result(props) {
		_classCallCheck(this, Result);

		var _this = _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).call(this, props));

		_this.state = {
			results: props.words.map(function (word, i) {
				return { word: word, answer: props.answers[i], isRight: _this.isRight(word, props.answers[i]) };
			})
		};
		return _this;
	}

	_createClass(Result, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var getNextInterval = function getNextInterval(repetitionCount) {
				// Y = 2X + 1
				// Y = новый интервал в днях, X - предидущий интервал
				if (repetitionCount === 0) return 0;
				if (repetitionCount === 1) return 1;

				return 2 * getNextInterval(repetitionCount - 1) + 1;
			};
			this.state.results.forEach(function (result) {
				var word = result.word,
				    interval = void 0;
				if (result.isRight) {
					word.repetitionCount++;
					interval = getNextInterval(word.repetitionCount);
				} else {
					if (word.repetitionCount !== 0) {
						word.repetitionCount--;
					}
					interval = getNextInterval(word.repetitionCount);
				}
				word.repetitionDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()().add(interval, 'day');
				__WEBPACK_IMPORTED_MODULE_3__browser_dataService__["a" /* default */].updateWord(word);
			});
		}
	}, {
		key: 'isRight',
		value: function isRight(word, answer) {
			console.log(word);
			console.log(answer);
			return word.en.trim() === answer.trim();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    words = _props.words,
			    answers = _props.answers;

			var Row = function Row(_ref) {
				var word = _ref.word,
				    answer = _ref.answer,
				    isRight = _ref.isRight;
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'tr',
					{ className: isRight ? "success" : "danger", __source: {
							fileName: _jsxFileName,
							lineNumber: 50
						},
						__self: _this2
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 51
							},
							__self: _this2
						},
						word.en
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 52
							},
							__self: _this2
						},
						word.ru
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'td',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 53
							},
							__self: _this2
						},
						answer
					)
				);
			};
			return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Table"],
				{ key: 'table', striped: true, bordered: true, condensed: true, hover: true, __source: {
						fileName: _jsxFileName,
						lineNumber: 57
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'thead',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 58
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'tr',
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 59
							},
							__self: this
						},
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'th',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 60
								},
								__self: this
							},
							'EN'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'th',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 61
								},
								__self: this
							},
							'RU'
						),
						__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'th',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 62
								},
								__self: this
							},
							'\u041E\u0442\u0432\u0435\u0442'
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'tbody',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 65
						},
						__self: this
					},
					words.map(function (word, i) {
						return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Row, { word: word, answer: answers[i], key: i, isRight: _this2.isRight(word, answers[i]), __source: {
								fileName: _jsxFileName,
								lineNumber: 67
							},
							__self: _this2
						});
					})
				)
			), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
				{ key: 'button-ok', onClick: this.props.onExit, __source: {
						fileName: _jsxFileName,
						lineNumber: 71
					},
					__self: this
				},
				'OK'
			)];
		}
	}]);

	return Result;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Result);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_fontawesome__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_bootstrap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_bootstrap__);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\Dictionary\\Row.js',
    _this = this;






/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
	var word = _ref.word,
	    onRemove = _ref.onRemove;
	var ru = word.ru,
	    en = word.en,
	    id = word.id;


	var wordToParams = function wordToParams() {
		return 'id=' + id + '&en=' + en + '&ru=' + ru;
	};
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'tr',
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 13
			},
			__self: _this
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'td',
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				},
				__self: _this
			},
			ru
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'td',
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 15
				},
				__self: _this
			},
			en
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'td',
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 16
				},
				__self: _this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_3_react_router_bootstrap__["LinkContainer"],
				{ to: '/dictionary/edit-word/' + wordToParams(), __source: {
						fileName: _jsxFileName,
						lineNumber: 17
					},
					__self: _this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 18
						},
						__self: _this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_fontawesome___default.a, { name: 'edit', __source: {
							fileName: _jsxFileName,
							lineNumber: 19
						},
						__self: _this
					})
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Button"],
				{ onClick: function onClick() {
						return onRemove(id);
					}, __source: {
						fileName: _jsxFileName,
						lineNumber: 22
					},
					__self: _this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_fontawesome___default.a, { name: 'trash', __source: {
						fileName: _jsxFileName,
						lineNumber: 23
					},
					__self: _this
				})
			)
		)
	);
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-fontawesome");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyPagination_css__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MyPagination_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__MyPagination_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MyToggle_MyToggle__ = __webpack_require__(31);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\Dictionary\\MyPagination\\MyPagination.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MyPagination = function (_Component) {
	_inherits(MyPagination, _Component);

	function MyPagination() {
		_classCallCheck(this, MyPagination);

		return _possibleConstructorReturn(this, (MyPagination.__proto__ || Object.getPrototypeOf(MyPagination)).apply(this, arguments));
	}

	_createClass(MyPagination, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    pages = _props.pages,
			    disabledPages = _props.disabledPages,
			    activePage = _props.activePage,
			    onSelectPage = _props.onSelectPage,
			    activeMonth = _props.activeMonth,
			    onChangeMonth = _props.onChangeMonth,
			    availableMonths = _props.availableMonths,
			    availableYears = _props.availableYears;


			var months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

			function isDisabled(currentPage) {
				return disabledPages.some(function (page) {
					return page === currentPage;
				});
			}

			function isDisabledMonth(currentMonthNmb) {
				return availableMonths.indexOf(currentMonthNmb) === -1;
			}

			function getMonthName(monthNmb) {
				return months[monthNmb];
			}

			return [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ key: 1, className: 'pagination-header', __source: {
						fileName: _jsxFileName,
						lineNumber: 48
					},
					__self: this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Dropdown"],
					{ id: 'month', className: 'my-dropdown', __source: {
							fileName: _jsxFileName,
							lineNumber: 49
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_3__MyToggle_MyToggle__["a" /* default */],
						{ bsRole: 'toggle', __source: {
								fileName: _jsxFileName,
								lineNumber: 50
							},
							__self: this
						},
						getMonthName(activeMonth)
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Dropdown"].Menu,
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 54
							},
							__self: this
						},
						months.map(function (m, i) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"],
								{
									key: i,
									active: m === getMonthName(activeMonth),
									onSelect: function onSelect() {
										return onChangeMonth(i);
									},
									disabled: isDisabledMonth(i),
									__source: {
										fileName: _jsxFileName,
										lineNumber: 56
									},
									__self: _this2
								},
								m
							);
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Dropdown"],
					{ id: 'year', className: 'my-dropdown', __source: {
							fileName: _jsxFileName,
							lineNumber: 67
						},
						__self: this
					},
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_3__MyToggle_MyToggle__["a" /* default */],
						{ bsRole: 'toggle', __source: {
								fileName: _jsxFileName,
								lineNumber: 68
							},
							__self: this
						},
						'2018'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Dropdown"].Menu,
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 70
							},
							__self: this
						},
						availableYears.map(function (y, i) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["MenuItem"],
								{ key: i, __source: {
										fileName: _jsxFileName,
										lineNumber: 72
									},
									__self: _this2
								},
								y
							);
						})
					)
				)
			), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Pagination"],
				{ key: 2, bsSize: 'medium', __source: {
						fileName: _jsxFileName,
						lineNumber: 77
					},
					__self: this
				},
				pages.map(function (i) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_2_react_bootstrap__["Pagination"].Item,
						{
							key: i,
							active: i === activePage,
							disabled: isDisabled(i),
							onClick: function onClick() {
								return !isDisabled(i) && onSelectPage(i);
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 79
							},
							__self: _this2
						},
						i
					);
				})
			)];
		}
	}]);

	return MyPagination;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MyPagination);

/***/ }),
/* 30 */
/***/ (function(module, exports) {



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\MyToggle\\MyToggle.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MyToggle = function (_React$Component) {
  _inherits(MyToggle, _React$Component);

  function MyToggle(props, context) {
    _classCallCheck(this, MyToggle);

    var _this = _possibleConstructorReturn(this, (MyToggle.__proto__ || Object.getPrototypeOf(MyToggle)).call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(MyToggle, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();

      this.props.onClick(e);
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { href: "", onClick: this.handleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        this.props.children
      );
    }
  }]);

  return MyToggle;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (MyToggle);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WordForm__ = __webpack_require__(12);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\Dictionary\\CreateWordForm.js',
    _this = this;





/* harmony default export */ __webpack_exports__["a"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WordForm__["a" /* default */], { mode: 'create', __source: {
			fileName: _jsxFileName,
			lineNumber: 6
		},
		__self: _this
	});
});

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__WordForm__ = __webpack_require__(12);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\Dictionary\\EditWordForm.js',
    _this = this;





/* harmony default export */ __webpack_exports__["a"] = (function (props) {
	var _props$match$params = props.match.params,
	    id = _props$match$params.id,
	    en = _props$match$params.en,
	    ru = _props$match$params.ru;

	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__WordForm__["a" /* default */], { id: id, en: en, ru: ru, mode: 'edit', __source: {
			fileName: _jsxFileName,
			lineNumber: 8
		},
		__self: _this
	});
});

/***/ }),
/* 35 */
/***/ (function(module, exports) {



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__);
var _jsxFileName = 'C:\\Users\\Sergey\\Desktop\\react\\learn-english\\src\\shared\\NavBar.js',
    _this = this;





/* harmony default export */ __webpack_exports__["a"] = (function () {
	return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"],
		{
			__source: {
				fileName: _jsxFileName,
				lineNumber: 13
			},
			__self: _this
		},
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Header,
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 14
				},
				__self: _this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Navbar"].Brand,
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 15
					},
					__self: _this
				},
				'\u0423\u0447\u0438 \u0430\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439'
			)
		),
		__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["Nav"],
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 19
				},
				__self: _this
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__["LinkContainer"],
				{
					to: '/',
					exact: true,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 20
					},
					__self: _this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
					{ href: '/', __source: {
							fileName: _jsxFileName,
							lineNumber: 24
						},
						__self: _this
					},
					'\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C'
				)
			),
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2_react_router_bootstrap__["LinkContainer"],
				{
					to: '/dictionary',
					exact: true,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 28
					},
					__self: _this
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_1_react_bootstrap__["NavItem"],
					{ href: '/dictionary', __source: {
							fileName: _jsxFileName,
							lineNumber: 32
						},
						__self: _this
					},
					'\u0421\u043B\u043E\u0432\u0430\u0440\u044C'
				)
			)
		)
	);
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_word__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);



/* harmony default export */ __webpack_exports__["a"] = ({
	getCount: function getCount(req, res) {
		__WEBPACK_IMPORTED_MODULE_0__models_word__["default"].count({}).then(function (count) {
			return res.json(count);
		});
	},
	getWords: function getWords(req, res) {
		var query = req.query;

		if (query.select === 'toRepetition') {
			query = {
				repetitionDate: { "$lt": __WEBPACK_IMPORTED_MODULE_1_moment___default()().endOf('day') }
			};
		}
		if (query.select === 'recent') {
			var result = {};
			var lastEntry = void 0;

			return __WEBPACK_IMPORTED_MODULE_0__models_word__["default"]
			// get latest entry
			.findOne().sort({ "createdDate.year": -1, "createdDate.month": -1, "createdDate.day": -1 }).then(function (word) {
				lastEntry = word;

				return __WEBPACK_IMPORTED_MODULE_0__models_word__["default"].find({
					"createdDate.day": lastEntry.createdDate.day
				}).sort({ createdDate: -1 });
			})
			/* get array months 
   	[
   		{
   			_id: 1,
   			daysHaveEntries: [10, 20, 2, 3, 4]
   		},
   		...
   	]
   */
			.then(function (wordsLastDay) {
				result.wordsLastDay = wordsLastDay;
				return __WEBPACK_IMPORTED_MODULE_0__models_word__["default"].aggregate([{
					$match: { "createdDate.year": lastEntry.createdDate.year }
				}, {
					$group: {
						_id: "$createdDate.month",
						daysHaveEntries: { $addToSet: "$createdDate.day" }
					}
				}, {
					$sort: {
						_id: -1
					}
				}]);
			}).then(function (months) {
				result.daysHaveEntries = months[0].daysHaveEntries;
				result.monthsHaveEntries = months.map(function (m) {
					return m._id;
				});
				return __WEBPACK_IMPORTED_MODULE_0__models_word__["default"].find({}).distinct('createdDate.year');
			}).then(function (years) {
				result.yearsHaveEntries = years;

				console.log(result);

				return res.json(result);
			}).catch(function (err) {
				return console.log(err);
			});
		}

		__WEBPACK_IMPORTED_MODULE_0__models_word__["default"].find(query).then(function (words) {
			return res.json(words || []);
		}).catch(function (err) {
			return console.log(err);
		});
	},
	getWordsByDate: function getWordsByDate(req, res) {
		var _req$query = req.query,
		    date = _req$query.date,
		    year = _req$query.year,
		    month = _req$query.month;


		__WEBPACK_IMPORTED_MODULE_0__models_word__["default"].find({
			"createdDate.year": year,
			"createdDate.month": month,
			"createdDate.day": date
		}).then(function (words) {
			return res.json(words);
		}).catch(function (err) {
			return console.log(err);
		});
	},
	getWordsByMonth: function getWordsByMonth(req, res) {
		var _req$query2 = req.query,
		    month = _req$query2.month,
		    year = _req$query2.year;

		console.log(month);
		__WEBPACK_IMPORTED_MODULE_0__models_word__["default"].find({
			"createdDate.year": year,
			"createdDate.month": month
		}).sort({
			"createdDate.day": -1
		}).then(function (words) {
			var latestDateInMonth = words[0].createdDate.day;
			var daysHaveEntries = [];

			words.forEach(function (w) {
				return daysHaveEntries.indexOf(w.createdDate.day) === -1 && daysHaveEntries.push(w.createdDate.day);
			});

			var wordsLastDay = words.filter(function (w) {
				return w.createdDate.day === latestDateInMonth;
			});

			return res.json({
				wordsLastDay: wordsLastDay,
				daysHaveEntries: daysHaveEntries
			});
		});
	},
	create: function create(req, res) {
		__WEBPACK_IMPORTED_MODULE_0__models_word__["default"].create(req.body).then(function (word) {
			console.log(word);

			res.json(word);
		}).catch(function (err) {
			return console.log(err);
		});
	},
	update: function update(req, res) {
		__WEBPACK_IMPORTED_MODULE_0__models_word__["default"].findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }).then(function (word) {
			return res.json(word);
		}).catch(function (err) {
			return console.log(err);
		});
	},
	remove: function remove(req, res) {
		var id = req.params.id;


		__WEBPACK_IMPORTED_MODULE_0__models_word__["default"].remove({ _id: id }).then(function (deletedWord) {
			return res.json(deletedWord);
		}).catch(function (err) {
			return console.log(err);
		});
	}
});

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map