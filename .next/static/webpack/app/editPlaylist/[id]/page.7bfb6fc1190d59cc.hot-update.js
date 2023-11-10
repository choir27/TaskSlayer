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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditPlaylist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/Zustand */ \"(app-pages-browser)/./middleware/Zustand.tsx\");\n/* harmony import */ var _middleware_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/Context */ \"(app-pages-browser)/./middleware/Context.jsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Button */ \"(app-pages-browser)/./components/Button.tsx\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/api */ \"(app-pages-browser)/./api/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function handleChangePlaylistName() {}\nasync function handleRemoveFromPlaylist(id, findPlaylist, user) {\n    try {\n        const array = findPlaylist.playlistSongs.map((ele)=>ele);\n        const findSong = array.find((element)=>{\n            const songObject = JSON.parse(element);\n            return songObject.$id === id;\n        });\n        array.splice(array.indexOf(findSong), 1);\n        const data = {\n            playlistName: findPlaylist.playlistName,\n            playlistSongs: array,\n            userID: user.$id,\n            user: user.email\n        };\n        await _api_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].updateDocument(\"6543e6631929ba50ffd1\", \"6543e8ebf074d567b450\", findPlaylist.$id, data);\n        window.location.reload();\n    } catch (err) {\n        console.error(err);\n    }\n}\nfunction EditPlaylist(props) {\n    _s();\n    const playlist = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore)((state)=>state.listOfSongs);\n    const user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_middleware_Context__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const [playlistNameInputDisplay, setPlaylistNameInputDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [playlistName, setPlaylistName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const findPlaylist = playlist.find((listOfSongs)=>listOfSongs.$id === props.id);\n    const updatedAt = findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.$updatedAt;\n    const date = new Date(updatedAt);\n    const songList = findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.playlistSongs.map((element)=>{\n        const songObject = JSON.parse(element);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.artist\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.genre\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.user\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: (0,_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button)({\n                        text: \"\",\n                        className: \"fa-solid fa-xmark button small\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            handleRemoveFromPlaylist(songObject.$id, findPlaylist, user);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, songObject.$id, true, {\n            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n            lineNumber: 61,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"tableContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: playlistNameInputDisplay ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex spaceEvenly\",\n                    children: [\n                        (0,_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button)({\n                            text: \"\",\n                            className: \"fa-solid fa-right-from-bracket button\",\n                            onClick: (e)=>{\n                                e.preventDefault();\n                                setPlaylistNameInputDisplay(false);\n                            }\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Edit Playlist Name\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            onChange: (e)=>setPlaylistName(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex spaceEvenly\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Playlist Name: \",\n                                findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.playlistName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, this),\n                        (0,_components_Button__WEBPACK_IMPORTED_MODULE_4__.Button)({\n                            text: \"\",\n                            className: \"fa-solid fa-pen-to-square button\",\n                            onClick: (e)=>{\n                                e.preventDefault();\n                                setPlaylistNameInputDisplay(true);\n                            }\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Updated At: \",\n                    date.getMonth() + 1,\n                    \"/\",\n                    date.getDate(),\n                    \"/\",\n                    date.getFullYear()\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 100,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Song Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Artist\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Genre\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"User\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                            lineNumber: 103,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: songList\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, this);\n}\n_s(EditPlaylist, \"LfHAwWuiuIRuVWGlNldplRjTaHo=\", false, function() {\n    return [\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore\n    ];\n});\n_c = EditPlaylist;\nvar _c;\n$RefreshReg$(_c, \"EditPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL0VkaXRQbGF5bGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMwQztBQUNJO0FBR0c7QUFDTjtBQUNmO0FBTTVCLGVBQWVNLDRCQUVmO0FBRUEsZUFBZUMseUJBQXlCQyxFQUFVLEVBQUVDLFlBQXlCLEVBQUVDLElBQUk7SUFDL0UsSUFBRztRQUNDLE1BQU1DLFFBQVFGLGFBQWFHLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxNQUFLQTtRQUVsRCxNQUFNQyxXQUFXSixNQUFNSyxJQUFJLENBQUMsQ0FBQ0M7WUFDekIsTUFBTUMsYUFBYUMsS0FBS0MsS0FBSyxDQUFDSDtZQUM5QixPQUFPQyxXQUFXRyxHQUFHLEtBQUtiO1FBQzlCO1FBR0FHLE1BQU1XLE1BQU0sQ0FBQ1gsTUFBTVksT0FBTyxDQUFDUixXQUFVO1FBRXJDLE1BQU1TLE9BQU87WUFDVEMsY0FBY2hCLGFBQWFnQixZQUFZO1lBQ3ZDYixlQUFlRDtZQUNmZSxRQUFRaEIsS0FBS1csR0FBRztZQUNoQlgsTUFBTUEsS0FBS2lCLEtBQUs7UUFDcEI7UUFFQSxNQUFNdEIsZ0RBQUdBLENBQUN1QixjQUFjLENBQUNDLHNCQUE0QyxFQUFFQSxzQkFBOEMsRUFBRXBCLGFBQWFZLEdBQUcsRUFBRUc7UUFDeklTLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtJQUMxQixFQUFDLE9BQU1DLEtBQUk7UUFDUEMsUUFBUUMsS0FBSyxDQUFDRjtJQUNsQjtBQUNKO0FBRWUsU0FBU0csYUFBYUMsS0FBVzs7SUFDNUMsTUFBTUMsV0FBV3ZDLDZEQUFRQSxDQUFDLENBQUN3QyxRQUFjQSxNQUFNQyxXQUFXO0lBQzFELE1BQU1qQyxPQUFPVixpREFBVUEsQ0FBQ0csNERBQVdBO0lBRW5DLE1BQU0sQ0FBQ3lDLDBCQUEwQkMsNEJBQTRCLEdBQUc1QywrQ0FBUUEsQ0FBVTtJQUNsRixNQUFNLENBQUN3QixjQUFjcUIsZ0JBQWdCLEdBQUc3QywrQ0FBUUEsQ0FBUztJQUV6RCxNQUFNUSxlQUFlZ0MsU0FBU3pCLElBQUksQ0FBQyxDQUFDMkIsY0FBMkJBLFlBQVl0QixHQUFHLEtBQUttQixNQUFNaEMsRUFBRTtJQUUzRixNQUFNdUMsWUFBWXRDLHlCQUFBQSxtQ0FBQUEsYUFBY3VDLFVBQVU7SUFFMUMsTUFBTUMsT0FBTyxJQUFJQyxLQUFLSDtJQUV0QixNQUFNSSxXQUFXMUMseUJBQUFBLG1DQUFBQSxhQUFjRyxhQUFhLENBQUNDLEdBQUcsQ0FBQyxDQUFDSTtRQUM5QyxNQUFNQyxhQUFhQyxLQUFLQyxLQUFLLENBQUNIO1FBRTlCLHFCQUNJLDhEQUFDbUM7OzhCQUNHLDhEQUFDQzs4QkFBSW5DLFdBQVdvQyxJQUFJOzs7Ozs7OEJBQ3BCLDhEQUFDRDs4QkFBSW5DLFdBQVdxQyxNQUFNOzs7Ozs7OEJBQ3RCLDhEQUFDRjs4QkFBSW5DLFdBQVdzQyxLQUFLOzs7Ozs7OEJBQ3JCLDhEQUFDSDs4QkFBSW5DLFdBQVdSLElBQUk7Ozs7Ozs4QkFDcEIsOERBQUMyQzs4QkFBSWpELDBEQUFNQSxDQUFDO3dCQUFDcUQsTUFBTTt3QkFBSUMsV0FBVzt3QkFBa0NDLFNBQVMsQ0FBQ0M7NEJBQzFFQSxFQUFFQyxjQUFjOzRCQUNoQnRELHlCQUF5QlcsV0FBV0csR0FBRyxFQUFFWixjQUFjQzt3QkFBSztvQkFBQzs7Ozs7OztXQVAxRFEsV0FBV0csR0FBRzs7Ozs7SUFVakM7SUFFQSxxQkFDSSw4REFBQ3lDO1FBQUl0RCxJQUFLOzswQkFDTiw4REFBQ3VEOzBCQUNJbkIseUNBQ0csOERBQUNvQjtvQkFBS04sV0FBWTs7d0JBQ1R0RCwwREFBTUEsQ0FBQzs0QkFBQ3FELE1BQU07NEJBQ2ZDLFdBQVc7NEJBQ1hDLFNBQVMsQ0FBQ0M7Z0NBQ05BLEVBQUVDLGNBQWM7Z0NBQ2hCaEIsNEJBQTRCOzRCQUNoQzt3QkFBQztzQ0FDTCw4REFBQ29CO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzRCQUFNQyxNQUFPOzRCQUFPQyxVQUFZLENBQUNSLElBQUlkLGdCQUFnQmMsRUFBRVMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7Ozs7Ozt5Q0FHNUUsOERBQUNSO29CQUFJSixXQUFZOztzQ0FDYiw4REFBQ087O2dDQUFHO2dDQUFnQnhELHlCQUFBQSxtQ0FBQUEsYUFBY2dCLFlBQVk7Ozs7Ozs7d0JBQzdDckIsMERBQU1BLENBQUM7NEJBQUNxRCxNQUFNOzRCQUNmQyxXQUFXOzRCQUNYQyxTQUFTLENBQUNDO2dDQUNOQSxFQUFFQyxjQUFjO2dDQUNoQmhCLDRCQUE0Qjs0QkFDaEM7d0JBQUM7Ozs7Ozs7Ozs7OzswQkFLVCw4REFBQzBCOztvQkFBRztvQkFBYXRCLEtBQUt1QixRQUFRLEtBQUc7b0JBQUU7b0JBQUV2QixLQUFLd0IsT0FBTztvQkFBRztvQkFBRXhCLEtBQUt5QixXQUFXOzs7Ozs7OzBCQUN0RSw4REFBQ0M7O2tDQUNHLDhEQUFDQztrQ0FDRyw0RUFBQ3hCOzs4Q0FDRyw4REFBQ3lCOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNBOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJWiw4REFBQ0M7a0NBQ0kzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBMUV3Qlo7O1FBQ0hyQyx5REFBUUE7OztLQURMcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvRWRpdFBsYXlsaXN0LnRzeD9jZTFmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7dXNlU3RvcmV9IGZyb20gXCIuLi9taWRkbGV3YXJlL1p1c3RhbmRcIlxyXG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9UeXBlXCJcclxuaW1wb3J0IHtMaXN0T2ZTb25nc30gZnJvbSBcIi4uL21pZGRsZXdhcmUvSW50ZXJmYWNlXCJcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvQ29udGV4dFwiXHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIlxyXG5pbXBvcnQgYXBpIGZyb20gXCIuLi9hcGkvYXBpXCJcclxuXHJcbmludGVyZmFjZSBFZGl0e1xyXG5pZDogc3RyaW5nXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVBsYXlsaXN0TmFtZSgpe1xyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlRnJvbVBsYXlsaXN0KGlkOiBzdHJpbmcsIGZpbmRQbGF5bGlzdDogTGlzdE9mU29uZ3MsIHVzZXIpe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IGFycmF5ID0gZmluZFBsYXlsaXN0LnBsYXlsaXN0U29uZ3MubWFwKGVsZT0+ZWxlKVxyXG5cclxuICAgICAgICBjb25zdCBmaW5kU29uZyA9IGFycmF5LmZpbmQoKGVsZW1lbnQ6c3RyaW5nKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBzb25nT2JqZWN0ID0gSlNPTi5wYXJzZShlbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNvbmdPYmplY3QuJGlkID09PSBpZDtcclxuICAgICAgICB9KSBhcyBzdHJpbmdcclxuXHJcblxyXG4gICAgICAgIGFycmF5LnNwbGljZShhcnJheS5pbmRleE9mKGZpbmRTb25nKSwxKVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBwbGF5bGlzdE5hbWU6IGZpbmRQbGF5bGlzdC5wbGF5bGlzdE5hbWUsXHJcbiAgICAgICAgICAgIHBsYXlsaXN0U29uZ3M6IGFycmF5LFxyXG4gICAgICAgICAgICB1c2VySUQ6IHVzZXIuJGlkLFxyXG4gICAgICAgICAgICB1c2VyOiB1c2VyLmVtYWlsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhd2FpdCBhcGkudXBkYXRlRG9jdW1lbnQocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUExBWUxJU1RfREFUQUJBU0VfSUQsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BMQVlMSVNUX0NPTExFQ1RJT05fSUQsIGZpbmRQbGF5bGlzdC4kaWQsIGRhdGEpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdFBsYXlsaXN0KHByb3BzOiBFZGl0KXtcclxuICAgIGNvbnN0IHBsYXlsaXN0ID0gdXNlU3RvcmUoKHN0YXRlOlN0YXRlKT0+c3RhdGUubGlzdE9mU29uZ3MpO1xyXG4gICAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IFtwbGF5bGlzdE5hbWVJbnB1dERpc3BsYXksIHNldFBsYXlsaXN0TmFtZUlucHV0RGlzcGxheV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbcGxheWxpc3ROYW1lLCBzZXRQbGF5bGlzdE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgICBjb25zdCBmaW5kUGxheWxpc3QgPSBwbGF5bGlzdC5maW5kKChsaXN0T2ZTb25nczogTGlzdE9mU29uZ3MpPT5saXN0T2ZTb25ncy4kaWQgPT09IHByb3BzLmlkKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVkQXQgPSBmaW5kUGxheWxpc3Q/LiR1cGRhdGVkQXQgYXMgc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1cGRhdGVkQXQpO1xyXG5cclxuICAgIGNvbnN0IHNvbmdMaXN0ID0gZmluZFBsYXlsaXN0Py5wbGF5bGlzdFNvbmdzLm1hcCgoZWxlbWVudDpzdHJpbmcpPT57XHJcbiAgICAgICAgY29uc3Qgc29uZ09iamVjdCA9IEpTT04ucGFyc2UoZWxlbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5ID0ge3NvbmdPYmplY3QuJGlkfT5cclxuICAgICAgICAgICAgICAgIDx0ZD57c29uZ09iamVjdC5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3NvbmdPYmplY3QuYXJ0aXN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3NvbmdPYmplY3QuZ2VucmV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c29uZ09iamVjdC51c2VyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e0J1dHRvbih7dGV4dDogXCJcIiwgY2xhc3NOYW1lOiBcImZhLXNvbGlkIGZhLXhtYXJrIGJ1dHRvbiBzbWFsbFwiLCBvbkNsaWNrOiAoZTpSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50Pik9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlRnJvbVBsYXlsaXN0KHNvbmdPYmplY3QuJGlkLCBmaW5kUGxheWxpc3QsIHVzZXIpfX0pfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZCA9IFwidGFibGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7cGxheWxpc3ROYW1lSW5wdXREaXNwbGF5ID8gXHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lID0gXCJmbGV4IHNwYWNlRXZlbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QnV0dG9uKHt0ZXh0OiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYS1zb2xpZCBmYS1yaWdodC1mcm9tLWJyYWNrZXQgYnV0dG9uXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljazogKGU6UmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYXlsaXN0TmFtZUlucHV0RGlzcGxheShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5FZGl0IFBsYXlsaXN0IE5hbWU8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIG9uQ2hhbmdlID0geyhlKT0+c2V0UGxheWxpc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA6IFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImZsZXggc3BhY2VFdmVubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UGxheWxpc3QgTmFtZToge2ZpbmRQbGF5bGlzdD8ucGxheWxpc3ROYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAge0J1dHRvbih7dGV4dDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmUgYnV0dG9uXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IChlOlJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYXlsaXN0TmFtZUlucHV0RGlzcGxheSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9fSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPGgzPlVwZGF0ZWQgQXQ6IHtkYXRlLmdldE1vbnRoKCkrMX0ve2RhdGUuZ2V0RGF0ZSgpfS97ZGF0ZS5nZXRGdWxsWWVhcigpfTwvaDM+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Tb25nIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QXJ0aXN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdlbnJlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3NvbmdMaXN0fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VTdG9yZSIsIlVzZXJDb250ZXh0IiwiQnV0dG9uIiwiYXBpIiwiaGFuZGxlQ2hhbmdlUGxheWxpc3ROYW1lIiwiaGFuZGxlUmVtb3ZlRnJvbVBsYXlsaXN0IiwiaWQiLCJmaW5kUGxheWxpc3QiLCJ1c2VyIiwiYXJyYXkiLCJwbGF5bGlzdFNvbmdzIiwibWFwIiwiZWxlIiwiZmluZFNvbmciLCJmaW5kIiwiZWxlbWVudCIsInNvbmdPYmplY3QiLCJKU09OIiwicGFyc2UiLCIkaWQiLCJzcGxpY2UiLCJpbmRleE9mIiwiZGF0YSIsInBsYXlsaXN0TmFtZSIsInVzZXJJRCIsImVtYWlsIiwidXBkYXRlRG9jdW1lbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUExBWUxJU1RfREFUQUJBU0VfSUQiLCJORVhUX1BVQkxJQ19QTEFZTElTVF9DT0xMRUNUSU9OX0lEIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJFZGl0UGxheWxpc3QiLCJwcm9wcyIsInBsYXlsaXN0Iiwic3RhdGUiLCJsaXN0T2ZTb25ncyIsInBsYXlsaXN0TmFtZUlucHV0RGlzcGxheSIsInNldFBsYXlsaXN0TmFtZUlucHV0RGlzcGxheSIsInNldFBsYXlsaXN0TmFtZSIsInVwZGF0ZWRBdCIsIiR1cGRhdGVkQXQiLCJkYXRlIiwiRGF0ZSIsInNvbmdMaXN0IiwidHIiLCJ0ZCIsIm5hbWUiLCJhcnRpc3QiLCJnZW5yZSIsInRleHQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGl2Iiwic2VjdGlvbiIsImZvcm0iLCJoMiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoMyIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEZ1bGxZZWFyIiwidGFibGUiLCJ0aGVhZCIsInRoIiwidGJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/EditPlaylist.tsx\n"));

/***/ })

});