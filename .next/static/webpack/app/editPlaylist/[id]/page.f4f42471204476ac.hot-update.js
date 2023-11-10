"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/editPlaylist/[id]/page",{

/***/ "(app-pages-browser)/./hooks/EditPlaylist.tsx":
/*!********************************!*\
  !*** ./hooks/EditPlaylist.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditPlaylist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/Zustand */ \"(app-pages-browser)/./middleware/Zustand.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction EditPlaylist(props) {\n    _s();\n    const playlist = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.listOfSongs);\n    const findPlaylist = playlist.find((listOfSongs)=>listOfSongs.$id === props.id);\n    const updatedAt = findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.$updatedAt;\n    const date = new Date(updatedAt);\n    const songList = findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.playlistSongs.map((element)=>{\n        const songObject = JSON.parse(element);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.user\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, songObject.$id, true, {\n            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"tableContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Playlist Name: \",\n                    findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.playlistName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Updated At: \",\n                    date.getMonth() + 1,\n                    \"/\",\n                    date.getDate(),\n                    \"/\",\n                    date.getFullYear()\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Song Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Artist\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"Genre\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                children: \"User\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: songList\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(EditPlaylist, \"+pEejZnnIRYlVEdEDNRJ+ha5Fc4=\", false, function() {\n    return [\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = EditPlaylist;\nvar _c;\n$RefreshReg$(_c, \"EditPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL0VkaXRQbGF5bGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDOEM7QUFRL0IsU0FBU0MsYUFBYUMsS0FBVzs7SUFDNUMsTUFBTUMsV0FBV0gsNkRBQVFBLENBQUMsQ0FBQ0ksUUFBY0EsTUFBTUMsV0FBVztJQUUxRCxNQUFNQyxlQUFlSCxTQUFTSSxJQUFJLENBQUMsQ0FBQ0YsY0FBMkJBLFlBQVlHLEdBQUcsS0FBS04sTUFBTU8sRUFBRTtJQUUzRixNQUFNQyxZQUFZSix5QkFBQUEsbUNBQUFBLGFBQWNLLFVBQVU7SUFFMUMsTUFBTUMsT0FBTyxJQUFJQyxLQUFLSDtJQUV0QixNQUFNSSxXQUFXUix5QkFBQUEsbUNBQUFBLGFBQWNTLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO1FBQzlDLE1BQU1DLGFBQWFDLEtBQUtDLEtBQUssQ0FBQ0g7UUFFOUIscUJBQ0ksOERBQUNJOzs4QkFDRyw4REFBQ0M7OEJBQUlKLFdBQVdLLElBQUk7Ozs7Ozs4QkFDcEIsOERBQUNEOzhCQUFJSixXQUFXTSxJQUFJOzs7Ozs7OEJBQ3BCLDhEQUFDRjs7Ozs7O1dBSE1KLFdBQVdWLEdBQUc7Ozs7O0lBTWpDO0lBRUEscUJBQ0ksOERBQUNpQjtRQUFJaEIsSUFBSzs7MEJBQ04sOERBQUNpQjs7b0JBQUc7b0JBQWdCcEIseUJBQUFBLG1DQUFBQSxhQUFjcUIsWUFBWTs7Ozs7OzswQkFFOUMsOERBQUNEOztvQkFBRztvQkFBYWQsS0FBS2dCLFFBQVEsS0FBRztvQkFBRTtvQkFBRWhCLEtBQUtpQixPQUFPO29CQUFHO29CQUFFakIsS0FBS2tCLFdBQVc7Ozs7Ozs7MEJBQ3RFLDhEQUFDQzs7a0NBQ0csOERBQUNDOzswQ0FDRyw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7Ozs7Ozs7OztrQ0FFUiw4REFBQ0M7a0NBQ0lwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBdkN3QmI7O1FBQ0hELHlEQUFRQTs7O0tBRExDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL0VkaXRQbGF5bGlzdC50c3g/Y2UxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQge3VzZVN0b3JlfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9adXN0YW5kXCJcclxuaW1wb3J0IHtTdGF0ZX0gZnJvbSBcIi4uL21pZGRsZXdhcmUvVHlwZVwiXHJcbmltcG9ydCB7TGlzdE9mU29uZ3MsIEF1ZGlvfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9JbnRlcmZhY2VcIlxyXG5cclxuaW50ZXJmYWNlIEVkaXR7XHJcbmlkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFBsYXlsaXN0KHByb3BzOiBFZGl0KXtcclxuICAgIGNvbnN0IHBsYXlsaXN0ID0gdXNlU3RvcmUoKHN0YXRlOlN0YXRlKT0+c3RhdGUubGlzdE9mU29uZ3MpO1xyXG5cclxuICAgIGNvbnN0IGZpbmRQbGF5bGlzdCA9IHBsYXlsaXN0LmZpbmQoKGxpc3RPZlNvbmdzOiBMaXN0T2ZTb25ncyk9Pmxpc3RPZlNvbmdzLiRpZCA9PT0gcHJvcHMuaWQpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRBdCA9IGZpbmRQbGF5bGlzdD8uJHVwZGF0ZWRBdCBhcyBzdHJpbmc7XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHVwZGF0ZWRBdCk7XHJcblxyXG4gICAgY29uc3Qgc29uZ0xpc3QgPSBmaW5kUGxheWxpc3Q/LnBsYXlsaXN0U29uZ3MubWFwKChlbGVtZW50OnN0cmluZyk9PntcclxuICAgICAgICBjb25zdCBzb25nT2JqZWN0ID0gSlNPTi5wYXJzZShlbGVtZW50KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXkgPSB7c29uZ09iamVjdC4kaWR9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntzb25nT2JqZWN0Lm5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c29uZ09iamVjdC51c2VyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGlkID0gXCJ0YWJsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDI+UGxheWxpc3QgTmFtZToge2ZpbmRQbGF5bGlzdD8ucGxheWxpc3ROYW1lfTwvaDI+XHJcblxyXG4gICAgICAgICAgICA8aDI+VXBkYXRlZCBBdDoge2RhdGUuZ2V0TW9udGgoKSsxfS97ZGF0ZS5nZXREYXRlKCl9L3tkYXRlLmdldEZ1bGxZZWFyKCl9PC9oMj5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Tb25nIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5BcnRpc3Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5HZW5yZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICB7c29uZ0xpc3R9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0b3JlIiwiRWRpdFBsYXlsaXN0IiwicHJvcHMiLCJwbGF5bGlzdCIsInN0YXRlIiwibGlzdE9mU29uZ3MiLCJmaW5kUGxheWxpc3QiLCJmaW5kIiwiJGlkIiwiaWQiLCJ1cGRhdGVkQXQiLCIkdXBkYXRlZEF0IiwiZGF0ZSIsIkRhdGUiLCJzb25nTGlzdCIsInBsYXlsaXN0U29uZ3MiLCJtYXAiLCJlbGVtZW50Iiwic29uZ09iamVjdCIsIkpTT04iLCJwYXJzZSIsInRyIiwidGQiLCJuYW1lIiwidXNlciIsImRpdiIsImgyIiwicGxheWxpc3ROYW1lIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJ0YWJsZSIsInRoZWFkIiwidGgiLCJ0Ym9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/EditPlaylist.tsx\n"));

/***/ })

});