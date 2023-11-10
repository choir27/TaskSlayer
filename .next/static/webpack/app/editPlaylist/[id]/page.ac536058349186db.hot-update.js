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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditPlaylist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/Zustand */ \"(app-pages-browser)/./middleware/Zustand.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"(app-pages-browser)/./components/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nasync function handleRemoveFromPlaylist(id, findPlaylist) {\n    try {\n        const findSong = findPlaylist.playlistSongs.find((element)=>{\n            const songObject = JSON.parse(element);\n            return songObject.$id === id;\n        });\n        console.log(findSong);\n        console.log(findPlaylist.playlistSongs.indexOf(findSong));\n        // findPlaylist.playlistSongs.splice(findPlaylist.playlistSongs.indexOf(findSong[0]),1)\n        console.log(findPlaylist.playlistSongs);\n        const data = {};\n    // api.updateDocument(process.env.NEXT_PUBLIC_PLAYLIST_DATABASE_ID, process.env.NEXT_PUBLIC_PLAYLIST_COLLECTION_ID, data);\n    } catch (err) {\n        console.error(err);\n    }\n}\nfunction EditPlaylist(props) {\n    _s();\n    const playlist = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.listOfSongs);\n    const findPlaylist = playlist.find((listOfSongs)=>listOfSongs.$id === props.id);\n    const updatedAt = findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.$updatedAt;\n    const date = new Date(updatedAt);\n    const songList = findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.playlistSongs.map((element)=>{\n        const songObject = JSON.parse(element);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.artist\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.genre\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: songObject.user\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                    children: (0,_components_Button__WEBPACK_IMPORTED_MODULE_2__.Button)({\n                        text: \"\",\n                        className: \"fa-solid fa-xmark button small\",\n                        onClick: (e)=>{\n                            e.preventDefault();\n                            handleRemoveFromPlaylist(songObject.$id, findPlaylist);\n                        }\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, songObject.$id, true, {\n            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"tableContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Playlist Name: \",\n                    findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.playlistName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: [\n                    \"Updated At: \",\n                    date.getMonth() + 1,\n                    \"/\",\n                    date.getDate(),\n                    \"/\",\n                    date.getFullYear()\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Song Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Artist\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Genre\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"User\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Remove\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: songList\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 67,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_s(EditPlaylist, \"+pEejZnnIRYlVEdEDNRJ+ha5Fc4=\", false, function() {\n    return [\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = EditPlaylist;\nvar _c;\n$RefreshReg$(_c, \"EditPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL0VkaXRQbGF5bGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzhDO0FBR0g7QUFPM0MsZUFBZUUseUJBQXlCQyxFQUFVLEVBQUVDLFlBQXlCO0lBQ3pFLElBQUc7UUFFQyxNQUFNQyxXQUFXRCxhQUFhRSxhQUFhLENBQUNDLElBQUksQ0FBQyxDQUFDQztZQUM5QyxNQUFNQyxhQUFhQyxLQUFLQyxLQUFLLENBQUNIO1lBQzlCLE9BQU9DLFdBQVdHLEdBQUcsS0FBS1Q7UUFDOUI7UUFFQVUsUUFBUUMsR0FBRyxDQUFDVDtRQUNaUSxRQUFRQyxHQUFHLENBQUNWLGFBQWFFLGFBQWEsQ0FBQ1MsT0FBTyxDQUFDVjtRQUUvQyx1RkFBdUY7UUFFdkZRLFFBQVFDLEdBQUcsQ0FBQ1YsYUFBYUUsYUFBYTtRQUV0QyxNQUFNVSxPQUFPLENBRWI7SUFFQSwwSEFBMEg7SUFDOUgsRUFBQyxPQUFNQyxLQUFJO1FBQ1BKLFFBQVFLLEtBQUssQ0FBQ0Q7SUFDbEI7QUFDSjtBQUVlLFNBQVNFLGFBQWFDLEtBQVc7O0lBQzVDLE1BQU1DLFdBQVdyQiw2REFBUUEsQ0FBQyxDQUFDc0IsUUFBY0EsTUFBTUMsV0FBVztJQUUxRCxNQUFNbkIsZUFBZWlCLFNBQVNkLElBQUksQ0FBQyxDQUFDZ0IsY0FBMkJBLFlBQVlYLEdBQUcsS0FBS1EsTUFBTWpCLEVBQUU7SUFFM0YsTUFBTXFCLFlBQVlwQix5QkFBQUEsbUNBQUFBLGFBQWNxQixVQUFVO0lBRTFDLE1BQU1DLE9BQU8sSUFBSUMsS0FBS0g7SUFFdEIsTUFBTUksV0FBV3hCLHlCQUFBQSxtQ0FBQUEsYUFBY0UsYUFBYSxDQUFDdUIsR0FBRyxDQUFDLENBQUNyQjtRQUM5QyxNQUFNQyxhQUFhQyxLQUFLQyxLQUFLLENBQUNIO1FBRTlCLHFCQUNJLDhEQUFDc0I7OzhCQUNHLDhEQUFDQzs4QkFBSXRCLFdBQVd1QixJQUFJOzs7Ozs7OEJBQ3BCLDhEQUFDRDs4QkFBSXRCLFdBQVd3QixNQUFNOzs7Ozs7OEJBQ3RCLDhEQUFDRjs4QkFBSXRCLFdBQVd5QixLQUFLOzs7Ozs7OEJBQ3JCLDhEQUFDSDs4QkFBSXRCLFdBQVcwQixJQUFJOzs7Ozs7OEJBQ3BCLDhEQUFDSjs4QkFBSTlCLDBEQUFNQSxDQUFDO3dCQUFDbUMsTUFBTTt3QkFBSUMsV0FBVzt3QkFBa0NDLFNBQVMsQ0FBQ0M7NEJBQzFFQSxFQUFFQyxjQUFjOzRCQUNoQnRDLHlCQUF5Qk8sV0FBV0csR0FBRyxFQUFFUjt3QkFBYTtvQkFBQzs7Ozs7OztXQVBwREssV0FBV0csR0FBRzs7Ozs7SUFVakM7SUFFQSxxQkFDSSw4REFBQzZCO1FBQUl0QyxJQUFLOzswQkFDTiw4REFBQ3VDOztvQkFBRztvQkFBZ0J0Qyx5QkFBQUEsbUNBQUFBLGFBQWN1QyxZQUFZOzs7Ozs7OzBCQUU5Qyw4REFBQ0M7O29CQUFHO29CQUFhbEIsS0FBS21CLFFBQVEsS0FBRztvQkFBRTtvQkFBRW5CLEtBQUtvQixPQUFPO29CQUFHO29CQUFFcEIsS0FBS3FCLFdBQVc7Ozs7Ozs7MEJBQ3RFLDhEQUFDQzs7a0NBQ0csOERBQUNDO2tDQUNHLDRFQUFDbkI7OzhDQUNHLDhEQUFDb0I7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlaLDhEQUFDQztrQ0FDSXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0EvQ3dCVDs7UUFDSG5CLHlEQUFRQTs7O0tBRExtQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ob29rcy9FZGl0UGxheWxpc3QudHN4P2NlMWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IHt1c2VTdG9yZX0gZnJvbSBcIi4uL21pZGRsZXdhcmUvWnVzdGFuZFwiXHJcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuLi9taWRkbGV3YXJlL1R5cGVcIlxyXG5pbXBvcnQge0xpc3RPZlNvbmdzfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9JbnRlcmZhY2VcIlxyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCJcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpL2FwaVwiXHJcblxyXG5pbnRlcmZhY2UgRWRpdHtcclxuaWQ6IHN0cmluZ1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVSZW1vdmVGcm9tUGxheWxpc3QoaWQ6IHN0cmluZywgZmluZFBsYXlsaXN0OiBMaXN0T2ZTb25ncyl7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZmluZFNvbmcgPSBmaW5kUGxheWxpc3QucGxheWxpc3RTb25ncy5maW5kKChlbGVtZW50OnN0cmluZyk9PntcclxuICAgICAgICAgICAgY29uc3Qgc29uZ09iamVjdCA9IEpTT04ucGFyc2UoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzb25nT2JqZWN0LiRpZCA9PT0gaWQ7XHJcbiAgICAgICAgfSkgYXMgc3RyaW5nXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbmRTb25nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbmRQbGF5bGlzdC5wbGF5bGlzdFNvbmdzLmluZGV4T2YoZmluZFNvbmcpKVxyXG5cclxuICAgICAgICAvLyBmaW5kUGxheWxpc3QucGxheWxpc3RTb25ncy5zcGxpY2UoZmluZFBsYXlsaXN0LnBsYXlsaXN0U29uZ3MuaW5kZXhPZihmaW5kU29uZ1swXSksMSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZmluZFBsYXlsaXN0LnBsYXlsaXN0U29uZ3MpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFwaS51cGRhdGVEb2N1bWVudChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QTEFZTElTVF9EQVRBQkFTRV9JRCwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUExBWUxJU1RfQ09MTEVDVElPTl9JRCwgZGF0YSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRQbGF5bGlzdChwcm9wczogRWRpdCl7XHJcbiAgICBjb25zdCBwbGF5bGlzdCA9IHVzZVN0b3JlKChzdGF0ZTpTdGF0ZSk9PnN0YXRlLmxpc3RPZlNvbmdzKTtcclxuXHJcbiAgICBjb25zdCBmaW5kUGxheWxpc3QgPSBwbGF5bGlzdC5maW5kKChsaXN0T2ZTb25nczogTGlzdE9mU29uZ3MpPT5saXN0T2ZTb25ncy4kaWQgPT09IHByb3BzLmlkKTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVkQXQgPSBmaW5kUGxheWxpc3Q/LiR1cGRhdGVkQXQgYXMgc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1cGRhdGVkQXQpO1xyXG5cclxuICAgIGNvbnN0IHNvbmdMaXN0ID0gZmluZFBsYXlsaXN0Py5wbGF5bGlzdFNvbmdzLm1hcCgoZWxlbWVudDpzdHJpbmcpPT57XHJcbiAgICAgICAgY29uc3Qgc29uZ09iamVjdCA9IEpTT04ucGFyc2UoZWxlbWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8dHIga2V5ID0ge3NvbmdPYmplY3QuJGlkfT5cclxuICAgICAgICAgICAgICAgIDx0ZD57c29uZ09iamVjdC5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3NvbmdPYmplY3QuYXJ0aXN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3NvbmdPYmplY3QuZ2VucmV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57c29uZ09iamVjdC51c2VyfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e0J1dHRvbih7dGV4dDogXCJcIiwgY2xhc3NOYW1lOiBcImZhLXNvbGlkIGZhLXhtYXJrIGJ1dHRvbiBzbWFsbFwiLCBvbkNsaWNrOiAoZTpSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50Pik9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlUmVtb3ZlRnJvbVBsYXlsaXN0KHNvbmdPYmplY3QuJGlkLCBmaW5kUGxheWxpc3QpfX0pfTwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZCA9IFwidGFibGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyPlBsYXlsaXN0IE5hbWU6IHtmaW5kUGxheWxpc3Q/LnBsYXlsaXN0TmFtZX08L2gyPlxyXG5cclxuICAgICAgICAgICAgPGgzPlVwZGF0ZWQgQXQ6IHtkYXRlLmdldE1vbnRoKCkrMX0ve2RhdGUuZ2V0RGF0ZSgpfS97ZGF0ZS5nZXRGdWxsWWVhcigpfTwvaDM+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Tb25nIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QXJ0aXN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkdlbnJlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlVzZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmVtb3ZlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3NvbmdMaXN0fVxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdG9yZSIsIkJ1dHRvbiIsImhhbmRsZVJlbW92ZUZyb21QbGF5bGlzdCIsImlkIiwiZmluZFBsYXlsaXN0IiwiZmluZFNvbmciLCJwbGF5bGlzdFNvbmdzIiwiZmluZCIsImVsZW1lbnQiLCJzb25nT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiJGlkIiwiY29uc29sZSIsImxvZyIsImluZGV4T2YiLCJkYXRhIiwiZXJyIiwiZXJyb3IiLCJFZGl0UGxheWxpc3QiLCJwcm9wcyIsInBsYXlsaXN0Iiwic3RhdGUiLCJsaXN0T2ZTb25ncyIsInVwZGF0ZWRBdCIsIiR1cGRhdGVkQXQiLCJkYXRlIiwiRGF0ZSIsInNvbmdMaXN0IiwibWFwIiwidHIiLCJ0ZCIsIm5hbWUiLCJhcnRpc3QiLCJnZW5yZSIsInVzZXIiLCJ0ZXh0IiwiY2xhc3NOYW1lIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImgyIiwicGxheWxpc3ROYW1lIiwiaDMiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRGdWxsWWVhciIsInRhYmxlIiwidGhlYWQiLCJ0aCIsInRib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/EditPlaylist.tsx\n"));

/***/ })

});