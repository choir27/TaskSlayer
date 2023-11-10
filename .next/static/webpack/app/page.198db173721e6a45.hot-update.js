"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./hooks/PlaylistHooks.tsx":
/*!*********************************!*\
  !*** ./hooks/PlaylistHooks.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RenderPlaylist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _HomeHooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeHooks */ \"(app-pages-browser)/./hooks/HomeHooks.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"(app-pages-browser)/./components/Button.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction RenderPlaylist(props) {\n    _s();\n    const rowsPerPage = 4;\n    const startIndex = (props.currentPage - 1) * rowsPerPage;\n    const endIndex = startIndex + rowsPerPage;\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const playlistTable = props.playlist.map((listOfSongs)=>{\n        const playlistSongs = listOfSongs.playlistSongs.map((element)=>{\n            const song = JSON.parse(element);\n            return song.audio;\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: listOfSongs.playlistName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"button small\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            localStorage.setItem(\"playlist\", JSON.stringify({\n                                \"id\": listOfSongs.$id,\n                                \"song\": playlistSongs\n                            }));\n                            window.location.reload();\n                        },\n                        children: \"Play\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: (0,_components_Button__WEBPACK_IMPORTED_MODULE_2__.ButtonLink)({\n                        text: \"Edit\",\n                        className: \"button\",\n                        domain: \"/editPlaylist/\".concat(listOfSongs.$id)\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, listOfSongs.$id, true, {\n            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            (0,_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button)({\n                className: \"button\",\n                text: \"Song\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    props.setSongDisplay(false);\n                }\n            }),\n            (0,_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button)({\n                className: \"button\",\n                text: \"Playlist\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    props.setSongDisplay(true);\n                }\n            }),\n            props.songDisplay ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"tableContainer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Playlists\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Name\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Play\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            children: \"Edit\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: playlistTable\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HomeHooks__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                songs: props.songs,\n                check: true,\n                startIndex: startIndex,\n                endIndex: endIndex,\n                currentPage: props.currentPage,\n                setCurrentPage: (e)=>props.setCurrentPage(e),\n                rowsPerPage: rowsPerPage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\PlaylistHooks.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_s(RenderPlaylist, \"kx72sda92+XlSh1QiZvq/YVQxpY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = RenderPlaylist;\nvar _c;\n$RefreshReg$(_c, \"RenderPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL1BsYXlsaXN0SG9va3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBDO0FBQ2E7QUFDVDtBQUcvQixTQUFTSSxlQUFlQyxLQUFlOztJQUNsRCxNQUFNQyxjQUFjO0lBQ3BCLE1BQU1DLGFBQWEsQ0FBQ0YsTUFBTUcsV0FBVyxHQUFHLEtBQUtGO0lBQzdDLE1BQU1HLFdBQVdGLGFBQWFEO0lBQzlCLE1BQU1JLE9BQU9QLDREQUFXQTtJQUV4QixNQUFNUSxnQkFBZ0JOLE1BQU1PLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDO1FBRXRDLE1BQU1DLGdCQUFnQkQsWUFBWUMsYUFBYSxDQUFDRixHQUFHLENBQUMsQ0FBQ0c7WUFDakQsTUFBTUMsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSDtZQUN4QixPQUFPQyxLQUFLRyxLQUFLO1FBQ3JCO1FBRUEscUJBQ0ksOERBQUNDOzs4QkFDRyw4REFBQ0M7OEJBQUlSLFlBQVlTLFlBQVk7Ozs7Ozs4QkFDN0IsOERBQUNEOzhCQUNHLDRFQUFDRTt3QkFBT0MsV0FBWTt3QkFDcEJDLFNBQVcsQ0FBQ0M7NEJBQ1JBLEVBQUVDLGNBQWM7NEJBQ2hCQyxhQUFhQyxPQUFPLENBQUMsWUFBWVosS0FBS2EsU0FBUyxDQUFDO2dDQUFDLE1BQU1qQixZQUFZa0IsR0FBRztnQ0FBRSxRQUFRakI7NEJBQWE7NEJBQzdGa0IsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO3dCQUMxQjtrQ0FDQzs7Ozs7Ozs7Ozs7OEJBSUwsOERBQUNiOzhCQUFJcEIsOERBQVVBLENBQUM7d0JBQUNrQyxNQUFNO3dCQUFRWCxXQUFXO3dCQUFVWSxRQUFRLGlCQUFpQyxPQUFoQnZCLFlBQVlrQixHQUFHO29CQUFFOzs7Ozs7O1dBYnpGbEIsWUFBWWtCLEdBQUc7Ozs7O0lBZ0JoQztJQUVBLHFCQUNJLDhEQUFDTTs7WUFDSXJDLDBEQUFNQSxDQUFDO2dCQUFDd0IsV0FBVztnQkFBVVcsTUFBTTtnQkFBUVYsU0FBUyxDQUFDQztvQkFDbERBLEVBQUVDLGNBQWM7b0JBQ2hCdkIsTUFBTWtDLGNBQWMsQ0FBQztnQkFDekI7WUFBQztZQUNBdEMsMERBQU1BLENBQUM7Z0JBQUN3QixXQUFXO2dCQUFVVyxNQUFNO2dCQUFZVixTQUFTLENBQUNDO29CQUN0REEsRUFBRUMsY0FBYztvQkFDaEJ2QixNQUFNa0MsY0FBYyxDQUFDO2dCQUN6QjtZQUFDO1lBQ0FsQyxNQUFNbUMsV0FBVyxpQkFDbEIsOERBQUNDO2dCQUFJQyxJQUFLOztrQ0FDTiw4REFBQ0M7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7OzBDQUNHLDhEQUFDQzswQ0FDRyw0RUFBQ3hCOztzREFDRyw4REFBQ3lCO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNBO3NEQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHWiw4REFBQ0M7MENBQ0lwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBS2IsOERBQUNYLGtEQUFlQTtnQkFBQ2dELE9BQVMzQyxNQUFNMkMsS0FBSztnQkFBRUMsT0FBUztnQkFBTTFDLFlBQWNBO2dCQUFZRSxVQUFZQTtnQkFBVUQsYUFBZUgsTUFBTUcsV0FBVztnQkFBRTBDLGdCQUFrQixDQUFDdkIsSUFBV3RCLE1BQU02QyxjQUFjLENBQUN2QjtnQkFBSXJCLGFBQWVBOzs7Ozs7Ozs7Ozs7QUFLMU47R0FoRXdCRjs7UUFJUEQsd0RBQVdBOzs7S0FKSkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvUGxheWxpc3RIb29rcy50c3g/N2Q3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BsYXlsaXN0LCBMaXN0T2ZTb25nc30gZnJvbSBcIi4uL21pZGRsZXdhcmUvSW50ZXJmYWNlXCJcclxuaW1wb3J0IFJlbmRlck11c2ljTGlzdCBmcm9tIFwiLi9Ib21lSG9va3NcIjtcclxuaW1wb3J0IHtCdXR0b24sIEJ1dHRvbkxpbmt9IGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiXHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlbmRlclBsYXlsaXN0KHByb3BzOiBQbGF5bGlzdCl7XHJcbiAgICBjb25zdCByb3dzUGVyUGFnZSA9IDQ7XHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gKHByb3BzLmN1cnJlbnRQYWdlIC0gMSkgKiByb3dzUGVyUGFnZTtcclxuICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCArIHJvd3NQZXJQYWdlO1xyXG4gICAgY29uc3QgcGF0aCA9IHVzZVBhdGhuYW1lKCk7XHJcblxyXG4gICAgY29uc3QgcGxheWxpc3RUYWJsZSA9IHByb3BzLnBsYXlsaXN0Lm1hcCgobGlzdE9mU29uZ3M6IExpc3RPZlNvbmdzKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBwbGF5bGlzdFNvbmdzID0gbGlzdE9mU29uZ3MucGxheWxpc3RTb25ncy5tYXAoKGVsZW1lbnQ6c3RyaW5nKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBzb25nID0gSlNPTi5wYXJzZShlbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNvbmcuYXVkaW9cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2xpc3RPZlNvbmdzLiRpZH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2xpc3RPZlNvbmdzLnBsYXlsaXN0TmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lID0gXCJidXR0b24gc21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5bGlzdFwiLCBKU09OLnN0cmluZ2lmeSh7XCJpZFwiOiBsaXN0T2ZTb25ncy4kaWQsIFwic29uZ1wiOiBwbGF5bGlzdFNvbmdzfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxheVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57QnV0dG9uTGluayh7dGV4dDogXCJFZGl0XCIsIGNsYXNzTmFtZTogXCJidXR0b25cIiwgZG9tYWluOiBgL2VkaXRQbGF5bGlzdC8ke2xpc3RPZlNvbmdzLiRpZH1gfSl9PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAge0J1dHRvbih7Y2xhc3NOYW1lOiBcImJ1dHRvblwiLCB0ZXh0OiBcIlNvbmdcIiwgb25DbGljazogKGU6UmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pPT57XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIHByb3BzLnNldFNvbmdEaXNwbGF5KGZhbHNlKVxyXG4gICAgICAgICAgICB9fSl9XHJcbiAgICAgICAgICAgIHtCdXR0b24oe2NsYXNzTmFtZTogXCJidXR0b25cIiwgdGV4dDogXCJQbGF5bGlzdFwiLCBvbkNsaWNrOiAoZTpSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50Pik9PntcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2V0U29uZ0Rpc3BsYXkodHJ1ZSlcclxuICAgICAgICAgICAgfX0pfVxyXG4gICAgICAgICAgICB7cHJvcHMuc29uZ0Rpc3BsYXk/IFxyXG4gICAgICAgICAgICA8ZGl2IGlkID0gXCJ0YWJsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPlBsYXlsaXN0czwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UGxheTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwbGF5bGlzdFRhYmxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICA8UmVuZGVyTXVzaWNMaXN0IHNvbmdzID0ge3Byb3BzLnNvbmdzfSBjaGVjayA9IHt0cnVlfSBzdGFydEluZGV4ID0ge3N0YXJ0SW5kZXh9IGVuZEluZGV4ID0ge2VuZEluZGV4fSBjdXJyZW50UGFnZSA9IHtwcm9wcy5jdXJyZW50UGFnZX0gc2V0Q3VycmVudFBhZ2UgPSB7KGU6bnVtYmVyKT0+cHJvcHMuc2V0Q3VycmVudFBhZ2UoZSl9IHJvd3NQZXJQYWdlID0ge3Jvd3NQZXJQYWdlfSAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gIFxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlbmRlck11c2ljTGlzdCIsIkJ1dHRvbiIsIkJ1dHRvbkxpbmsiLCJ1c2VQYXRobmFtZSIsIlJlbmRlclBsYXlsaXN0IiwicHJvcHMiLCJyb3dzUGVyUGFnZSIsInN0YXJ0SW5kZXgiLCJjdXJyZW50UGFnZSIsImVuZEluZGV4IiwicGF0aCIsInBsYXlsaXN0VGFibGUiLCJwbGF5bGlzdCIsIm1hcCIsImxpc3RPZlNvbmdzIiwicGxheWxpc3RTb25ncyIsImVsZW1lbnQiLCJzb25nIiwiSlNPTiIsInBhcnNlIiwiYXVkaW8iLCJ0ciIsInRkIiwicGxheWxpc3ROYW1lIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCIkaWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInRleHQiLCJkb21haW4iLCJzZWN0aW9uIiwic2V0U29uZ0Rpc3BsYXkiLCJzb25nRGlzcGxheSIsImRpdiIsImlkIiwiaDIiLCJ0YWJsZSIsInRoZWFkIiwidGgiLCJ0Ym9keSIsInNvbmdzIiwiY2hlY2siLCJzZXRDdXJyZW50UGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/PlaylistHooks.tsx\n"));

/***/ })

});