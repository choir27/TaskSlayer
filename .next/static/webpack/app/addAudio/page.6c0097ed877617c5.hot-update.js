"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/addAudio/page",{

/***/ "(app-pages-browser)/./middleware/Zustand.tsx":
/*!********************************!*\
  !*** ./middleware/Zustand.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStore: function() { return /* binding */ useStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ \"(app-pages-browser)/./node_modules/immer/dist/immer.mjs\");\n\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set)=>({\n        song: [],\n        setSong: (song)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.song = song;\n            }));\n        },\n        listOfSongs: [],\n        setListOfSongs: (listOfSongs)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.listOfSongs = listOfSongs;\n            }));\n        },\n        searchValue: \"\",\n        setSearchValue: (searchValue)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.searchValue = searchValue;\n            }));\n        },\n        searchResults: [],\n        setSearchResults: (searchResults)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.searchResults = searchResults;\n            }));\n        },\n        songDisplay: false,\n        setSongDisplay: (songDisplay)=>{\n            set((0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)((state)=>{\n                state.songDisplay = songDisplay;\n            }));\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL21pZGRsZXdhcmUvWnVzdGFuZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBQ0Q7QUE2QnRCLE1BQU1FLFdBQVdGLCtDQUFNQSxDQUMxQixDQUFDRyxNQUFPO1FBQ0pDLE1BQU0sRUFBRTtRQUNSQyxTQUFTLENBQUNEO1lBQ05ELElBQ0lGLDhDQUFPQSxDQUNILENBQUNLO2dCQUNHQSxNQUFNRixJQUFJLEdBQUdBO1lBQ2pCO1FBR1o7UUFDQUcsYUFBYSxFQUFFO1FBQ2ZDLGdCQUFnQixDQUFDRDtZQUNiSixJQUNJRiw4Q0FBT0EsQ0FDSCxDQUFDSztnQkFDR0EsTUFBTUMsV0FBVyxHQUFHQTtZQUN4QjtRQUdaO1FBQ0FFLGFBQWE7UUFDYkMsZ0JBQWdCLENBQUNEO1lBQ2JOLElBQ0lGLDhDQUFPQSxDQUNILENBQUNLO2dCQUNHQSxNQUFNRyxXQUFXLEdBQUdBO1lBQ3hCO1FBR1o7UUFDQUUsZUFBZSxFQUFFO1FBQ2pCQyxrQkFBa0IsQ0FBQ0Q7WUFDZlIsSUFDSUYsOENBQU9BLENBQ0gsQ0FBQ0s7Z0JBQ0dBLE1BQU1LLGFBQWEsR0FBR0E7WUFDMUI7UUFHWjtRQUNBRSxhQUFhO1FBQ2JDLGdCQUFnQixDQUFDRDtZQUNiVixJQUNJRiw4Q0FBT0EsQ0FBQyxDQUFDSztnQkFDTEEsTUFBTU8sV0FBVyxHQUFHQTtZQUN4QjtRQUdSO0lBQ0osSUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlL1p1c3RhbmQudHN4PzE4ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGV9IGZyb20gXCJ6dXN0YW5kXCJcclxuaW1wb3J0IHtwcm9kdWNlfSBmcm9tIFwiaW1tZXJcIlxyXG5pbXBvcnQge0xpc3RPZlNvbmdzfSBmcm9tIFwiLi4vaG9va3MvTXVzaWNIb29rc1wiXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1ZGlve1xyXG4gICAgJGlkOiBzdHJpbmcsXHJcbiAgICAkdXBkYXRlZEF0OiBzdHJpbmcsXHJcbiAgICBhdWRpbzogc3RyaW5nLFxyXG4gICAgY2xvdWRpbmFyeUlkOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICB1c2VyOiBzdHJpbmcsXHJcbiAgICB1c2VySUQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBTdGF0ZT0ge1xyXG4gICAgc29uZzogQXVkaW9bXSxcclxuICAgIGxpc3RPZlNvbmdzOiBMaXN0T2ZTb25nc1tdLFxyXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcclxuICAgIHNlYXJjaFJlc3VsdHM6IEFycmF5PEF1ZGlvIHwgTGlzdE9mU29uZ3M+LFxyXG4gICAgc29uZ0Rpc3BsYXk6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQWN0aW9uID0ge1xyXG4gICAgc2V0U29uZzogKGU6QXVkaW8pID0+IHZvaWQsXHJcbiAgICBzZXRMaXN0T2ZTb25nczogKGU6TGlzdE9mU29uZ3NbXSk9PnZvaWQsXHJcbiAgICBzZXRTZWFyY2hWYWx1ZTogKGU6c3RyaW5nKT0+IHZvaWQsXHJcbiAgICBzZXRTZWFyY2hSZXN1bHRzOiAoZTogQXJyYXk8QXVkaW8gfCBMaXN0T2ZTb25ncz4pPT4gdm9pZCxcclxuICAgIHNldFNvbmdEaXNwbGF5OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VTdG9yZSA9IGNyZWF0ZShcclxuICAgIChzZXQpPT4oe1xyXG4gICAgICAgIHNvbmc6IFtdLFxyXG4gICAgICAgIHNldFNvbmc6IChzb25nOiBBdWRpb1tdKT0+e1xyXG4gICAgICAgICAgICBzZXQoXHJcbiAgICAgICAgICAgICAgICBwcm9kdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZTpTdGF0ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuc29uZyA9IHNvbmdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpc3RPZlNvbmdzOiBbXSxcclxuICAgICAgICBzZXRMaXN0T2ZTb25nczogKGxpc3RPZlNvbmdzOiBMaXN0T2ZTb25nc1tdKT0+e1xyXG4gICAgICAgICAgICBzZXQoXHJcbiAgICAgICAgICAgICAgICBwcm9kdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZTpTdGF0ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUubGlzdE9mU29uZ3MgPSBsaXN0T2ZTb25nc1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6IFwiXCIsXHJcbiAgICAgICAgc2V0U2VhcmNoVmFsdWU6IChzZWFyY2hWYWx1ZTogc3RyaW5nKT0+e1xyXG4gICAgICAgICAgICBzZXQoXHJcbiAgICAgICAgICAgICAgICBwcm9kdWNlKFxyXG4gICAgICAgICAgICAgICAgICAgIChzdGF0ZTogU3RhdGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnNlYXJjaFZhbHVlID0gc2VhcmNoVmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IFtdLFxyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHM6IChzZWFyY2hSZXN1bHRzOiBBcnJheTxBdWRpbyB8IExpc3RPZlNvbmdzPik9PntcclxuICAgICAgICAgICAgc2V0KFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjZShcclxuICAgICAgICAgICAgICAgICAgICAoc3RhdGU6IFN0YXRlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0c1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc29uZ0Rpc3BsYXk6IGZhbHNlLFxyXG4gICAgICAgIHNldFNvbmdEaXNwbGF5OiAoc29uZ0Rpc3BsYXk6IGJvb2xlYW4pPT57XHJcbiAgICAgICAgICAgIHNldChcclxuICAgICAgICAgICAgICAgIHByb2R1Y2UoKHN0YXRlOiBTdGF0ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5zb25nRGlzcGxheSA9IHNvbmdEaXNwbGF5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4pOyJdLCJuYW1lcyI6WyJjcmVhdGUiLCJwcm9kdWNlIiwidXNlU3RvcmUiLCJzZXQiLCJzb25nIiwic2V0U29uZyIsInN0YXRlIiwibGlzdE9mU29uZ3MiLCJzZXRMaXN0T2ZTb25ncyIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJzZWFyY2hSZXN1bHRzIiwic2V0U2VhcmNoUmVzdWx0cyIsInNvbmdEaXNwbGF5Iiwic2V0U29uZ0Rpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./middleware/Zustand.tsx\n"));

/***/ })

});