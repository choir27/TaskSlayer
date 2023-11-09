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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RenderPlaylist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/Zustand */ \"(app-pages-browser)/./middleware/Zustand.tsx\");\n/* harmony import */ var _HomeHooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeHooks */ \"(app-pages-browser)/./hooks/HomeHooks.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ \"(app-pages-browser)/./components/Button.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction RenderPlaylist() {\n    _s();\n    const playlist = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.listOfSongs);\n    const songDisplay = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.songDisplay);\n    const setSongDisplay = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.setSongDisplay);\n    const songs = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.song);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const rowsPerPage = 4;\n    const startIndex = (currentPage - 1) * rowsPerPage;\n    const endIndex = startIndex + rowsPerPage;\n    const playlistTable = playlist.map((listOfSongs)=>{\n        const playlistSongs = listOfSongs.playlistSongs.map((element)=>{\n            const song = JSON.parse(element);\n            return song.$id;\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: listOfSongs.playlistName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button small\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            localStorage.setItem(\"playlist\", JSON.stringify(playlistSongs));\n                        },\n                        children: \"Play\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, listOfSongs.$id, true, {\n            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            (0,_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button)({\n                className: \"button\",\n                text: \"Song\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    setSongDisplay(!songDisplay);\n                }\n            }),\n            songDisplay ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"tableContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Playlists\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Play\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: playlistTable\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this) : (0,_HomeHooks__WEBPACK_IMPORTED_MODULE_2__.RenderMusicList)({\n                songs: songs,\n                check: true,\n                startIndex: startIndex,\n                endIndex: endIndex,\n                currentPage: currentPage,\n                setCurrentPage: (e)=>setCurrentPage(e),\n                rowsPerPage: rowsPerPage\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this);\n}\n_s(RenderPlaylist, \"+rvZo6uKJOU3hBjXBI65vMHzAig=\", false, function() {\n    return [\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = RenderPlaylist;\nvar _c;\n$RefreshReg$(_c, \"RenderPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL1BsYXlsaXN0SG9va3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2RDtBQUVmO0FBQ2hCO0FBQ2E7QUFFNUIsU0FBU0k7O0lBQ3BCLE1BQU1DLFdBQVdMLDZEQUFRQSxDQUFDLENBQUNNLFFBQWNBLE1BQU1DLFdBQVc7SUFDMUQsTUFBTUMsY0FBY1IsNkRBQVFBLENBQUMsQ0FBQ00sUUFBY0EsTUFBTUUsV0FBVztJQUM3RCxNQUFNQyxpQkFBaUJULDZEQUFRQSxDQUFDLENBQUNNLFFBQWVBLE1BQU1HLGNBQWM7SUFDcEUsTUFBTUMsUUFBUVYsNkRBQVFBLENBQUMsQ0FBQ00sUUFBY0EsTUFBTUssSUFBSTtJQUNoRCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVksY0FBYztJQUNwQixNQUFNQyxhQUFhLENBQUNILGNBQWMsS0FBS0U7SUFDdkMsTUFBTUUsV0FBV0QsYUFBYUQ7SUFFOUIsTUFBTUcsZ0JBQWdCWixTQUFTYSxHQUFHLENBQUMsQ0FBQ1g7UUFFaEMsTUFBTVksZ0JBQWdCWixZQUFZWSxhQUFhLENBQUNELEdBQUcsQ0FBQyxDQUFDRTtZQUNqRCxNQUFNVCxPQUFPVSxLQUFLQyxLQUFLLENBQUNGO1lBQ3hCLE9BQU9ULEtBQUtZLEdBQUc7UUFDbkI7UUFFQSxxQkFDSSw4REFBQ0M7OzhCQUNHLDhEQUFDQzs4QkFBSWxCLFlBQVltQixZQUFZOzs7Ozs7OEJBQzdCLDhEQUFDRDs4QkFDRyw0RUFBQ0U7d0JBQU9DLFdBQVk7d0JBQ3BCQyxTQUFXLENBQUNDOzRCQUNSQSxFQUFFQyxjQUFjOzRCQUNoQkMsYUFBYUMsT0FBTyxDQUFDLFlBQVlaLEtBQUthLFNBQVMsQ0FBQ2Y7d0JBQ3BEO2tDQUNDOzs7Ozs7Ozs7Ozs4QkFJTCw4REFBQ007Ozs7OzhCQUNELDhEQUFDQTs7Ozs7O1dBYklsQixZQUFZZ0IsR0FBRzs7Ozs7SUFnQmhDO0lBRUEscUJBQ0ksOERBQUNZOztZQUNJaEMsMERBQU1BLENBQUM7Z0JBQUN5QixXQUFXO2dCQUFVUSxNQUFNO2dCQUFRUCxTQUFTLENBQUNDO29CQUNsREEsRUFBRUMsY0FBYztvQkFDaEJ0QixlQUFlLENBQUNEO2dCQUNwQjtZQUFDO1lBQ0FBLDRCQUNELDhEQUFDNkI7Z0JBQUlDLElBQUs7O2tDQUNOLDhEQUFDQztrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDQzs7MENBQ0csOERBQUNDOzBDQUNHLDRFQUFDakI7O3NEQUNHLDhEQUFDa0I7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7c0RBQUc7Ozs7OztzREFDSiw4REFBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR1QsOERBQUNDOzBDQUNJMUI7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUtiaEIsMkRBQWVBLENBQUM7Z0JBQUNTLE9BQU9BO2dCQUFPa0MsT0FBTztnQkFBTTdCLFlBQVlBO2dCQUFZQyxVQUFVQTtnQkFBVUosYUFBYUE7Z0JBQWFDLGdCQUFnQixDQUFDaUIsSUFBV2pCLGVBQWVpQjtnQkFBSWhCLGFBQWFBO1lBQVc7Ozs7Ozs7QUFLck07R0FoRXdCVjs7UUFDSEoseURBQVFBO1FBQ0xBLHlEQUFRQTtRQUNMQSx5REFBUUE7UUFDakJBLHlEQUFRQTs7O0tBSkZJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL1BsYXlsaXN0SG9va3MudHN4PzdkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdG9yZSwgU3RhdGUsIEFjdGlvbn0gZnJvbSBcIi4uL21pZGRsZXdhcmUvWnVzdGFuZFwiXHJcbmltcG9ydCB7TGlzdE9mU29uZ3N9IGZyb20gXCIuLi9ob29rcy9NdXNpY0hvb2tzXCJcclxuaW1wb3J0IHsgUmVuZGVyTXVzaWNMaXN0IH0gZnJvbSBcIi4vSG9tZUhvb2tzXCI7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVuZGVyUGxheWxpc3QoKXtcclxuICAgIGNvbnN0IHBsYXlsaXN0ID0gdXNlU3RvcmUoKHN0YXRlOlN0YXRlKT0+c3RhdGUubGlzdE9mU29uZ3MpO1xyXG4gICAgY29uc3Qgc29uZ0Rpc3BsYXkgPSB1c2VTdG9yZSgoc3RhdGU6U3RhdGUpPT5zdGF0ZS5zb25nRGlzcGxheSk7XHJcbiAgICBjb25zdCBzZXRTb25nRGlzcGxheSA9IHVzZVN0b3JlKChzdGF0ZTpBY3Rpb24pPT5zdGF0ZS5zZXRTb25nRGlzcGxheSk7XHJcbiAgICBjb25zdCBzb25ncyA9IHVzZVN0b3JlKChzdGF0ZTpTdGF0ZSk9PnN0YXRlLnNvbmcpO1xyXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IHJvd3NQZXJQYWdlID0gNDtcclxuICAgIGNvbnN0IHN0YXJ0SW5kZXggPSAoY3VycmVudFBhZ2UgLSAxKSAqIHJvd3NQZXJQYWdlO1xyXG4gICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgcm93c1BlclBhZ2U7XHJcblxyXG4gICAgY29uc3QgcGxheWxpc3RUYWJsZSA9IHBsYXlsaXN0Lm1hcCgobGlzdE9mU29uZ3M6IExpc3RPZlNvbmdzKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5bGlzdFNvbmdzID0gbGlzdE9mU29uZ3MucGxheWxpc3RTb25ncy5tYXAoKGVsZW1lbnQ6c3RyaW5nKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBzb25nID0gSlNPTi5wYXJzZShlbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNvbmcuJGlkXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtsaXN0T2ZTb25ncy4kaWR9PlxyXG4gICAgICAgICAgICAgICAgPHRkPntsaXN0T2ZTb25ncy5wbGF5bGlzdE5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IFwiYnV0dG9uIHNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0geyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheWxpc3RcIiwgSlNPTi5zdHJpbmdpZnkocGxheWxpc3RTb25ncykpXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBsYXlcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICB7QnV0dG9uKHtjbGFzc05hbWU6IFwiYnV0dG9uXCIsIHRleHQ6IFwiU29uZ1wiLCBvbkNsaWNrOiAoZTpSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50Pik9PntcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgc2V0U29uZ0Rpc3BsYXkoIXNvbmdEaXNwbGF5KVxyXG4gICAgICAgICAgICB9fSl9XHJcbiAgICAgICAgICAgIHtzb25nRGlzcGxheT8gXHJcbiAgICAgICAgICAgIDxkaXYgaWQgPSBcInRhYmxlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+UGxheWxpc3RzPC9oMj5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QbGF5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGxheWxpc3RUYWJsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgUmVuZGVyTXVzaWNMaXN0KHtzb25nczogc29uZ3MsIGNoZWNrOiB0cnVlLCBzdGFydEluZGV4OiBzdGFydEluZGV4LCBlbmRJbmRleDogZW5kSW5kZXgsIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2U6IChlOm51bWJlcik9PnNldEN1cnJlbnRQYWdlKGUpLCByb3dzUGVyUGFnZTogcm93c1BlclBhZ2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gIFxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0b3JlIiwiUmVuZGVyTXVzaWNMaXN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJSZW5kZXJQbGF5bGlzdCIsInBsYXlsaXN0Iiwic3RhdGUiLCJsaXN0T2ZTb25ncyIsInNvbmdEaXNwbGF5Iiwic2V0U29uZ0Rpc3BsYXkiLCJzb25ncyIsInNvbmciLCJjdXJyZW50UGFnZSIsInNldEN1cnJlbnRQYWdlIiwicm93c1BlclBhZ2UiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJwbGF5bGlzdFRhYmxlIiwibWFwIiwicGxheWxpc3RTb25ncyIsImVsZW1lbnQiLCJKU09OIiwicGFyc2UiLCIkaWQiLCJ0ciIsInRkIiwicGxheWxpc3ROYW1lIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZWN0aW9uIiwidGV4dCIsImRpdiIsImlkIiwiaDIiLCJ0YWJsZSIsInRoZWFkIiwidGgiLCJ0Ym9keSIsImNoZWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/PlaylistHooks.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./middleware/Zustand.tsx":
/*!********************************!*\
  !*** ./middleware/Zustand.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStore: function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"(app-pages-browser)/./node_modules/immer/dist/immer.mjs\");\n\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        song: [],\n        setSong: (song)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.song = song;\n            }));\n        },\n        listOfSongs: [],\n        setListOfSongs: (listOfSongs)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.listOfSongs = listOfSongs;\n            }));\n        },\n        searchValue: \"\",\n        setSearchValue: (searchValue)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.searchValue = searchValue;\n            }));\n        },\n        searchResults: [],\n        setSearchResults: (searchResults)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.searchResults = searchResults;\n            }));\n        },\n        songDisplay: false,\n        setSongDisplay: (songDisplay)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.songDisplay = songDisplay;\n            }));\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL21pZGRsZXdhcmUvWnVzdGFuZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBQ0Q7QUE2QnRCLE1BQU1FLFdBQVdGLCtDQUFNQSxDQUMxQixDQUFDRyxNQUFPO1FBQ0pDLE1BQU0sRUFBRTtRQUNSQyxTQUFTLENBQUNEO1lBQ05ELElBQ0lGLDhDQUFPQSxDQUNILENBQUNLO2dCQUNHQSxNQUFNRixJQUFJLEdBQUdBO1lBQ2pCO1FBR1o7UUFDQUcsYUFBYSxFQUFFO1FBQ2ZDLGdCQUFnQixDQUFDRDtZQUNiSixJQUNJRiw4Q0FBT0EsQ0FDSCxDQUFDSztnQkFDR0EsTUFBTUMsV0FBVyxHQUFHQTtZQUN4QjtRQUdaO1FBQ0FFLGFBQWE7UUFDYkMsZ0JBQWdCLENBQUNEO1lBQ2JOLElBQ0lGLDhDQUFPQSxDQUNILENBQUNLO2dCQUNHQSxNQUFNRyxXQUFXLEdBQUdBO1lBQ3hCO1FBR1o7UUFDQUUsZUFBZSxFQUFFO1FBQ2pCQyxrQkFBa0IsQ0FBQ0Q7WUFDZlIsSUFDSUYsOENBQU9BLENBQ0gsQ0FBQ0s7Z0JBQ0dBLE1BQU1LLGFBQWEsR0FBR0E7WUFDMUI7UUFHWjtRQUNBRSxhQUFhO1FBQ2JDLGdCQUFnQixDQUFDRDtZQUNiVixJQUNJRiw4Q0FBT0EsQ0FBQyxDQUFDSztnQkFDTEEsTUFBTU8sV0FBVyxHQUFHQTtZQUN4QjtRQUdSO0lBQ0osSUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlL1p1c3RhbmQudHN4PzE4ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGV9IGZyb20gXCJ6dXN0YW5kXCJcclxuaW1wb3J0IHtwcm9kdWNlfSBmcm9tIFwiaW1tZXJcIlxyXG5pbXBvcnQge0xpc3RPZlNvbmdzfSBmcm9tIFwiLi4vaG9va3MvTXVzaWNIb29rc1wiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1ZGlve1xyXG4gICAgJGlkOiBzdHJpbmcsXHJcbiAgICAkdXBkYXRlZEF0OiBzdHJpbmcsXHJcbiAgICBhdWRpbzogc3RyaW5nLFxyXG4gICAgY2xvdWRpbmFyeUlkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB1c2VyOiBzdHJpbmcsXHJcbiAgICB1c2VySUQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZT0ge1xyXG4gICAgc29uZzogQXVkaW9bXSxcclxuICAgIGxpc3RPZlNvbmdzOiBMaXN0T2ZTb25nc1tdLFxyXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcclxuICAgIHNlYXJjaFJlc3VsdHM6IEFycmF5PEF1ZGlvIHwgTGlzdE9mU29uZ3M+LFxyXG4gICAgc29uZ0Rpc3BsYXk6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWN0aW9uID0ge1xyXG4gICAgc2V0U29uZzogKGU6QXVkaW8pID0+IHZvaWQsXHJcbiAgICBzZXRMaXN0T2ZTb25nczogKGU6TGlzdE9mU29uZ3NbXSk9PnZvaWQsXHJcbiAgICBzZXRTZWFyY2hWYWx1ZTogKGU6c3RyaW5nKT0+IHZvaWQsXHJcbiAgICBzZXRTZWFyY2hSZXN1bHRzOiAoZTogQXJyYXk8QXVkaW8gfCBMaXN0T2ZTb25ncz4pPT4gdm9pZCxcclxuICAgIHNldFNvbmdEaXNwbGF5OiAoZTpib29sZWFuKT0+dm9pZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSBjcmVhdGUoXHJcbiAgICAoc2V0KT0+KHtcclxuICAgICAgICBzb25nOiBbXSxcclxuICAgICAgICBzZXRTb25nOiAoc29uZzogQXVkaW9bXSk9PntcclxuICAgICAgICAgICAgc2V0KFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdGU6U3RhdGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnNvbmcgPSBzb25nXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaXN0T2ZTb25nczogW10sXHJcbiAgICAgICAgc2V0TGlzdE9mU29uZ3M6IChsaXN0T2ZTb25nczogTGlzdE9mU29uZ3NbXSk9PntcclxuICAgICAgICAgICAgc2V0KFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdGU6U3RhdGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmxpc3RPZlNvbmdzID0gbGlzdE9mU29uZ3NcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHNldFNlYXJjaFZhbHVlOiAoc2VhcmNoVmFsdWU6IHN0cmluZyk9PntcclxuICAgICAgICAgICAgc2V0KFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdGU6IFN0YXRlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zZWFyY2hWYWx1ZSA9IHNlYXJjaFZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcclxuICAgICAgICBzZXRTZWFyY2hSZXN1bHRzOiAoc2VhcmNoUmVzdWx0czogQXJyYXk8QXVkaW8gfCBMaXN0T2ZTb25ncz4pPT57XHJcbiAgICAgICAgICAgIHNldChcclxuICAgICAgICAgICAgICAgIHByb2R1Y2UoXHJcbiAgICAgICAgICAgICAgICAgICAgKHN0YXRlOiBTdGF0ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuc2VhcmNoUmVzdWx0cyA9IHNlYXJjaFJlc3VsdHNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNvbmdEaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICBzZXRTb25nRGlzcGxheTogKHNvbmdEaXNwbGF5OiBib29sZWFuKT0+e1xyXG4gICAgICAgICAgICBzZXQoXHJcbiAgICAgICAgICAgICAgICBwcm9kdWNlKChzdGF0ZTogU3RhdGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuc29uZ0Rpc3BsYXkgPSBzb25nRGlzcGxheVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuKTsiXSwibmFtZXMiOlsiY3JlYXRlIiwicHJvZHVjZSIsInVzZVN0b3JlIiwic2V0Iiwic29uZyIsInNldFNvbmciLCJzdGF0ZSIsImxpc3RPZlNvbmdzIiwic2V0TGlzdE9mU29uZ3MiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJzb25nRGlzcGxheSIsInNldFNvbmdEaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./middleware/Zustand.tsx\n"));

/***/ })

});