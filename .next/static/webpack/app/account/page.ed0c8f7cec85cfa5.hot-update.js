"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/account/page",{

/***/ "(app-pages-browser)/./hooks/PlaylistHooks.tsx":
/*!*********************************!*\
  !*** ./hooks/PlaylistHooks.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RenderPlaylist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _HomeHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeHooks */ \"(app-pages-browser)/./hooks/HomeHooks.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"(app-pages-browser)/./components/Button.tsx\");\n\n\n\nfunction RenderPlaylist(props) {\n    const rowsPerPage = 4;\n    const startIndex = (props.currentPage - 1) * rowsPerPage;\n    const endIndex = startIndex + rowsPerPage;\n    const playlistTable = props.playlist.map((listOfSongs)=>{\n        const playlistSongs = listOfSongs.playlistSongs.map((element)=>{\n            const song = JSON.parse(element);\n            return song.audio;\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: listOfSongs.playlistName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button small\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            localStorage.setItem(\"playlist\", JSON.stringify({\n                                \"id\": listOfSongs.$id,\n                                \"song\": playlistSongs\n                            }));\n                            window.location.reload();\n                        },\n                        children: \"Play\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, listOfSongs.$id, true, {\n            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            (0,_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button)({\n                className: \"button\",\n                text: \"Song\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    props.setSongDisplay(false);\n                }\n            }),\n            (0,_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button)({\n                className: \"button\",\n                text: \"Playlist\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    props.setSongDisplay(true);\n                }\n            }),\n            props.songDisplay ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"tableContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Playlists\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Play\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Edit\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: playlistTable\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HomeHooks__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                songs: props.songs,\n                check: true,\n                startIndex: startIndex,\n                endIndex: endIndex,\n                currentPage: props.currentPage,\n                setCurrentPage: (e)=>props.setCurrentPage(e),\n                rowsPerPage: rowsPerPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_c = RenderPlaylist;\nvar _c;\n$RefreshReg$(_c, \"RenderPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL1BsYXlsaXN0SG9va3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBDO0FBQ0M7QUFHNUIsU0FBU0UsZUFBZUMsS0FBZTtJQUNsRCxNQUFNQyxjQUFjO0lBQ3BCLE1BQU1DLGFBQWEsQ0FBQ0YsTUFBTUcsV0FBVyxHQUFHLEtBQUtGO0lBQzdDLE1BQU1HLFdBQVdGLGFBQWFEO0lBRTlCLE1BQU1JLGdCQUFnQkwsTUFBTU0sUUFBUSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0M7UUFFdEMsTUFBTUMsZ0JBQWdCRCxZQUFZQyxhQUFhLENBQUNGLEdBQUcsQ0FBQyxDQUFDRztZQUNqRCxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNIO1lBQ3hCLE9BQU9DLEtBQUtHLEtBQUs7UUFDckI7UUFFQSxxQkFDSSw4REFBQ0M7OzhCQUNHLDhEQUFDQzs4QkFBSVIsWUFBWVMsWUFBWTs7Ozs7OzhCQUM3Qiw4REFBQ0Q7OEJBQ0csNEVBQUNFO3dCQUFPQyxXQUFZO3dCQUNwQkMsU0FBVyxDQUFDQzs0QkFDUkEsRUFBRUMsY0FBYzs0QkFDaEJDLGFBQWFDLE9BQU8sQ0FBQyxZQUFZWixLQUFLYSxTQUFTLENBQUM7Z0NBQUMsTUFBTWpCLFlBQVlrQixHQUFHO2dDQUFFLFFBQVFqQjs0QkFBYTs0QkFDN0ZrQixPQUFPQyxRQUFRLENBQUNDLE1BQU07d0JBQzFCO2tDQUNDOzs7Ozs7Ozs7Ozs4QkFJTCw4REFBQ2I7Ozs7OzhCQUNELDhEQUFDQTs7Ozs7O1dBZElSLFlBQVlrQixHQUFHOzs7OztJQWlCaEM7SUFFQSxxQkFDSSw4REFBQ0k7O1lBQ0loQywwREFBTUEsQ0FBQztnQkFBQ3FCLFdBQVc7Z0JBQVVZLE1BQU07Z0JBQVFYLFNBQVMsQ0FBQ0M7b0JBQ2xEQSxFQUFFQyxjQUFjO29CQUNoQnRCLE1BQU1nQyxjQUFjLENBQUM7Z0JBQ3pCO1lBQUM7WUFDQWxDLDBEQUFNQSxDQUFDO2dCQUFDcUIsV0FBVztnQkFBVVksTUFBTTtnQkFBWVgsU0FBUyxDQUFDQztvQkFDdERBLEVBQUVDLGNBQWM7b0JBQ2hCdEIsTUFBTWdDLGNBQWMsQ0FBQztnQkFDekI7WUFBQztZQUNBaEMsTUFBTWlDLFdBQVcsaUJBQ2xCLDhEQUFDQztnQkFBSUMsSUFBSzs7a0NBQ04sOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDOzswQ0FDRyw4REFBQ0M7MENBQ0csNEVBQUN2Qjs7c0RBQ0csOERBQUN3QjtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7O3NEQUNKLDhEQUFDQTtzREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR1osOERBQUNDOzBDQUNJbkM7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUtiLDhEQUFDUixrREFBZUE7Z0JBQUM0QyxPQUFTekMsTUFBTXlDLEtBQUs7Z0JBQUVDLE9BQVM7Z0JBQU14QyxZQUFjQTtnQkFBWUUsVUFBWUE7Z0JBQVVELGFBQWVILE1BQU1HLFdBQVc7Z0JBQUV3QyxnQkFBa0IsQ0FBQ3RCLElBQVdyQixNQUFNMkMsY0FBYyxDQUFDdEI7Z0JBQUlwQixhQUFlQTs7Ozs7Ozs7Ozs7O0FBSzFOO0tBaEV3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvUGxheWxpc3RIb29rcy50c3g/N2Q3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BsYXlsaXN0LCBMaXN0T2ZTb25nc30gZnJvbSBcIi4uL21pZGRsZXdhcmUvSW50ZXJmYWNlXCJcclxuaW1wb3J0IFJlbmRlck11c2ljTGlzdCBmcm9tIFwiLi9Ib21lSG9va3NcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVuZGVyUGxheWxpc3QocHJvcHM6IFBsYXlsaXN0KXtcclxuICAgIGNvbnN0IHJvd3NQZXJQYWdlID0gNDtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAocHJvcHMuY3VycmVudFBhZ2UgLSAxKSAqIHJvd3NQZXJQYWdlO1xyXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgcm93c1BlclBhZ2U7XHJcblxyXG4gICAgY29uc3QgcGxheWxpc3RUYWJsZSA9IHByb3BzLnBsYXlsaXN0Lm1hcCgobGlzdE9mU29uZ3M6IExpc3RPZlNvbmdzKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5bGlzdFNvbmdzID0gbGlzdE9mU29uZ3MucGxheWxpc3RTb25ncy5tYXAoKGVsZW1lbnQ6c3RyaW5nKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBzb25nID0gSlNPTi5wYXJzZShlbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNvbmcuYXVkaW9cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2xpc3RPZlNvbmdzLiRpZH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xpc3RPZlNvbmdzLnBsYXlsaXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gXCJidXR0b24gc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5bGlzdFwiLCBKU09OLnN0cmluZ2lmeSh7XCJpZFwiOiBsaXN0T2ZTb25ncy4kaWQsIFwic29uZ1wiOiBwbGF5bGlzdFNvbmdzfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIHtCdXR0b24oe2NsYXNzTmFtZTogXCJidXR0b25cIiwgdGV4dDogXCJTb25nXCIsIG9uQ2xpY2s6IChlOlJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KT0+e1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZXRTb25nRGlzcGxheShmYWxzZSlcclxuICAgICAgICAgICAgfX0pfVxyXG4gICAgICAgICAgICB7QnV0dG9uKHtjbGFzc05hbWU6IFwiYnV0dG9uXCIsIHRleHQ6IFwiUGxheWxpc3RcIiwgb25DbGljazogKGU6UmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pPT57XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldFNvbmdEaXNwbGF5KHRydWUpXHJcbiAgICAgICAgICAgIH19KX1cclxuICAgICAgICAgICAge3Byb3BzLnNvbmdEaXNwbGF5PyBcclxuICAgICAgICAgICAgPGRpdiBpZCA9IFwidGFibGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5QbGF5bGlzdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBsYXk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVkaXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGxheWxpc3RUYWJsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgPFJlbmRlck11c2ljTGlzdCBzb25ncyA9IHtwcm9wcy5zb25nc30gY2hlY2sgPSB7dHJ1ZX0gc3RhcnRJbmRleCA9IHtzdGFydEluZGV4fSBlbmRJbmRleCA9IHtlbmRJbmRleH0gY3VycmVudFBhZ2UgPSB7cHJvcHMuY3VycmVudFBhZ2V9IHNldEN1cnJlbnRQYWdlID0geyhlOm51bWJlcik9PnByb3BzLnNldEN1cnJlbnRQYWdlKGUpfSByb3dzUGVyUGFnZSA9IHtyb3dzUGVyUGFnZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICBcclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZW5kZXJNdXNpY0xpc3QiLCJCdXR0b24iLCJSZW5kZXJQbGF5bGlzdCIsInByb3BzIiwicm93c1BlclBhZ2UiLCJzdGFydEluZGV4IiwiY3VycmVudFBhZ2UiLCJlbmRJbmRleCIsInBsYXlsaXN0VGFibGUiLCJwbGF5bGlzdCIsIm1hcCIsImxpc3RPZlNvbmdzIiwicGxheWxpc3RTb25ncyIsImVsZW1lbnQiLCJzb25nIiwiSlNPTiIsInBhcnNlIiwiYXVkaW8iLCJ0ciIsInRkIiwicGxheWxpc3ROYW1lIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCIkaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInNlY3Rpb24iLCJ0ZXh0Iiwic2V0U29uZ0Rpc3BsYXkiLCJzb25nRGlzcGxheSIsImRpdiIsImlkIiwiaDIiLCJ0YWJsZSIsInRoZWFkIiwidGgiLCJ0Ym9keSIsInNvbmdzIiwiY2hlY2siLCJzZXRDdXJyZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/PlaylistHooks.tsx\n"));

/***/ })

});