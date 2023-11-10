"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/search/page",{

/***/ "(app-pages-browser)/./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./components/Button.tsx\");\n/* harmony import */ var _middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../middleware/Zustand */ \"(app-pages-browser)/./middleware/Zustand.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Search() {\n    _s();\n    const searchValue = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore)((state)=>state.searchValue);\n    const setSearchValue = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore)((state)=>state.setSearchValue);\n    const setSearchResults = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore)((state)=>state.setSearchResults);\n    const songs = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore)((state)=>state.song);\n    const playlists = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore)((state)=>state.listOfSongs);\n    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    function handleSearch() {\n        const searchResults = [];\n        songs.forEach((audio)=>{\n            if (audio.audio.toLowerCase().includes(searchValue.toLowerCase()) || audio.name.toLowerCase().includes(searchValue.toLowerCase()) || audio.user.toLowerCase().includes(searchValue.toLowerCase())) {\n                searchResults.push(audio);\n            }\n        });\n        playlists.forEach((playlist)=>{\n            if (playlist.playlistName.toLowerCase().includes(searchValue.toLowerCase()) || playlist.user.toLowerCase().includes(searchValue.toLowerCase())) {\n                searchResults.push(playlist);\n            }\n            playlist.playlistSongs.forEach((element)=>{\n                const song = JSON.parse(element);\n                if (song.audio.toLowerCase().includes(searchValue.toLowerCase()) || song.name.toLowerCase().includes(searchValue.toLowerCase()) || song.user.toLowerCase().includes(searchValue.toLowerCase())) {\n                    searchResults.push(playlist);\n                }\n            });\n        });\n        setSearchResults(searchResults);\n        push(\"/search\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"search\",\n                onChange: (e)=>setSearchValue(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\components\\\\Search.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                text: \"\",\n                className: \"fa-solid fa-magnifying-glass button\",\n                onClick: (e)=>{\n                    e.preventDefault();\n                    handleSearch();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\components\\\\Search.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\components\\\\Search.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(Search, \"6B1UBpf2kkBh2o2CPQ+dovPsbqA=\", false, function() {\n    return [\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_3__.useStore,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VhcmNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNWO0FBR2U7QUFFL0IsU0FBU0c7O0lBRXBCLE1BQU1DLGNBQWNGLDZEQUFRQSxDQUFDLENBQUNHLFFBQWVBLE1BQU1ELFdBQVc7SUFDOUQsTUFBTUUsaUJBQWlCSiw2REFBUUEsQ0FBQyxDQUFDRyxRQUFlQSxNQUFNQyxjQUFjO0lBQ3BFLE1BQU1DLG1CQUFtQkwsNkRBQVFBLENBQUMsQ0FBQ0csUUFBaUJBLE1BQU1FLGdCQUFnQjtJQUMxRSxNQUFNQyxRQUFRTiw2REFBUUEsQ0FBQyxDQUFDRyxRQUFjQSxNQUFNSSxJQUFJO0lBQ2hELE1BQU1DLFlBQVlSLDZEQUFRQSxDQUFDLENBQUNHLFFBQWNBLE1BQU1NLFdBQVc7SUFDM0QsTUFBTSxFQUFDQyxJQUFJLEVBQUMsR0FBR1osMERBQVNBO0lBRXhCLFNBQVNhO1FBRUwsTUFBTUMsZ0JBQTJDLEVBQUU7UUFFbkROLE1BQU1PLE9BQU8sQ0FBQyxDQUFDQztZQUNYLElBQUdBLE1BQU1BLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNkLFlBQVlhLFdBQVcsT0FBT0QsTUFBTUcsSUFBSSxDQUFDRixXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsWUFBWWEsV0FBVyxPQUFPRCxNQUFNSSxJQUFJLENBQUNILFdBQVcsR0FBR0MsUUFBUSxDQUFDZCxZQUFZYSxXQUFXLEtBQUk7Z0JBQzdMSCxjQUFjRixJQUFJLENBQUNJO1lBQ3ZCO1FBQ0o7UUFFQU4sVUFBVUssT0FBTyxDQUFDLENBQUNNO1lBQ2YsSUFBR0EsU0FBU0MsWUFBWSxDQUFDTCxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsWUFBWWEsV0FBVyxPQUFPSSxTQUFTRCxJQUFJLENBQUNILFdBQVcsR0FBR0MsUUFBUSxDQUFDZCxZQUFZYSxXQUFXLEtBQUk7Z0JBQzFJSCxjQUFjRixJQUFJLENBQUNTO1lBQ3ZCO1lBRUFBLFNBQVNFLGFBQWEsQ0FBQ1IsT0FBTyxDQUFDLENBQUNTO2dCQUM1QixNQUFNZixPQUFPZ0IsS0FBS0MsS0FBSyxDQUFDRjtnQkFFeEIsSUFBR2YsS0FBS08sS0FBSyxDQUFDQyxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsWUFBWWEsV0FBVyxPQUFPUixLQUFLVSxJQUFJLENBQUNGLFdBQVcsR0FBR0MsUUFBUSxDQUFDZCxZQUFZYSxXQUFXLE9BQU9SLEtBQUtXLElBQUksQ0FBQ0gsV0FBVyxHQUFHQyxRQUFRLENBQUNkLFlBQVlhLFdBQVcsS0FBSTtvQkFDMUxILGNBQWNGLElBQUksQ0FBQ1M7Z0JBQ3ZCO1lBRUo7UUFFSjtRQUVBZCxpQkFBaUJPO1FBRWpCRixLQUFLO0lBQ1Q7SUFFQSxxQkFDSSw4REFBQ2U7OzBCQUNHLDhEQUFDQztnQkFBTUMsTUFBTztnQkFBU0MsVUFBWSxDQUFDQyxJQUFJekIsZUFBZXlCLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzBCQUNyRSw4REFBQ2hDLDJDQUFNQTtnQkFBQ2lDLE1BQUs7Z0JBQUdDLFdBQVU7Z0JBQXNDQyxTQUFTLENBQUNMO29CQUN0RUEsRUFBRU0sY0FBYztvQkFDaEJ4QjtnQkFDQTs7Ozs7Ozs7Ozs7O0FBR2hCO0dBakR3QlY7O1FBRUFELHlEQUFRQTtRQUNMQSx5REFBUUE7UUFDTkEseURBQVFBO1FBQ25CQSx5REFBUUE7UUFDSkEseURBQVFBO1FBQ1hGLHNEQUFTQTs7O0tBUEpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoLnRzeD9iOTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuL0J1dHRvblwiXHJcbmltcG9ydCB7U3RhdGUsIEFjdGlvbn0gZnJvbSBcIi4uL21pZGRsZXdhcmUvVHlwZVwiXHJcbmltcG9ydCB7QXVkaW8sIExpc3RPZlNvbmdzfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9JbnRlcmZhY2VcIlxyXG5pbXBvcnQge3VzZVN0b3JlfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9adXN0YW5kXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpe1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gdXNlU3RvcmUoKHN0YXRlOiBTdGF0ZSk9PnN0YXRlLnNlYXJjaFZhbHVlKTtcclxuICAgIGNvbnN0IHNldFNlYXJjaFZhbHVlID0gdXNlU3RvcmUoKHN0YXRlOkFjdGlvbik9PnN0YXRlLnNldFNlYXJjaFZhbHVlKTtcclxuICAgIGNvbnN0IHNldFNlYXJjaFJlc3VsdHMgPSB1c2VTdG9yZSgoc3RhdGU6IEFjdGlvbik9PiBzdGF0ZS5zZXRTZWFyY2hSZXN1bHRzKTtcclxuICAgIGNvbnN0IHNvbmdzID0gdXNlU3RvcmUoKHN0YXRlOlN0YXRlKT0+c3RhdGUuc29uZyk7XHJcbiAgICBjb25zdCBwbGF5bGlzdHMgPSB1c2VTdG9yZSgoc3RhdGU6U3RhdGUpPT5zdGF0ZS5saXN0T2ZTb25ncyk7XHJcbiAgICBjb25zdCB7cHVzaH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWFyY2goKXtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VhcmNoUmVzdWx0czpBcnJheTxBdWRpbyB8IExpc3RPZlNvbmdzPiA9IFtdO1xyXG4gICAgXHJcbiAgICAgICAgc29uZ3MuZm9yRWFjaCgoYXVkaW86IEF1ZGlvKT0+e1xyXG4gICAgICAgICAgICBpZihhdWRpby5hdWRpby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8IGF1ZGlvLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fCBhdWRpby51c2VyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5wdXNoKGF1ZGlvKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pICBcclxuICAgICBcclxuICAgICAgICBwbGF5bGlzdHMuZm9yRWFjaCgocGxheWxpc3Q6IExpc3RPZlNvbmdzKT0+e1xyXG4gICAgICAgICAgICBpZihwbGF5bGlzdC5wbGF5bGlzdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fCBwbGF5bGlzdC51c2VyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5wdXNoKHBsYXlsaXN0KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGF5bGlzdC5wbGF5bGlzdFNvbmdzLmZvckVhY2goKGVsZW1lbnQ6IHN0cmluZyk9PntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNvbmcgPSBKU09OLnBhcnNlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihzb25nLmF1ZGlvLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgfHwgc29uZy5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgfHwgc29uZy51c2VyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMucHVzaChwbGF5bGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc2V0U2VhcmNoUmVzdWx0cyhzZWFyY2hSZXN1bHRzKTtcclxuXHJcbiAgICAgICAgcHVzaChcIi9zZWFyY2hcIikgICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzZWFyY2hcIiBvbkNoYW5nZSA9IHsoZSk9PnNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJcIiBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1tYWduaWZ5aW5nLWdsYXNzIGJ1dHRvblwiIG9uQ2xpY2s9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoKClcclxuICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICA8L2Zvcm0+ICAgICAgICBcclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJ1c2VTdG9yZSIsIlNlYXJjaCIsInNlYXJjaFZhbHVlIiwic3RhdGUiLCJzZXRTZWFyY2hWYWx1ZSIsInNldFNlYXJjaFJlc3VsdHMiLCJzb25ncyIsInNvbmciLCJwbGF5bGlzdHMiLCJsaXN0T2ZTb25ncyIsInB1c2giLCJoYW5kbGVTZWFyY2giLCJzZWFyY2hSZXN1bHRzIiwiZm9yRWFjaCIsImF1ZGlvIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm5hbWUiLCJ1c2VyIiwicGxheWxpc3QiLCJwbGF5bGlzdE5hbWUiLCJwbGF5bGlzdFNvbmdzIiwiZWxlbWVudCIsIkpTT04iLCJwYXJzZSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Search.tsx\n"));

/***/ })

});