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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditPlaylist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/Zustand */ \"(app-pages-browser)/./middleware/Zustand.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction EditPlaylist(props) {\n    _s();\n    const playlist = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.listOfSongs);\n    const findPlaylist = playlist.find((listOfSongs)=>listOfSongs.$id === props.id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"tableContainer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: findPlaylist === null || findPlaylist === void 0 ? void 0 : findPlaylist.playlistName\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\hooks\\\\EditPlaylist.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(EditPlaylist, \"+pEejZnnIRYlVEdEDNRJ+ha5Fc4=\", false, function() {\n    return [\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = EditPlaylist;\nvar _c;\n$RefreshReg$(_c, \"EditPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL0VkaXRQbGF5bGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDOEM7QUFRL0IsU0FBU0MsYUFBYUMsS0FBVzs7SUFDNUMsTUFBTUMsV0FBV0gsNkRBQVFBLENBQUMsQ0FBQ0ksUUFBY0EsTUFBTUMsV0FBVztJQUUxRCxNQUFNQyxlQUFlSCxTQUFTSSxJQUFJLENBQUMsQ0FBQ0YsY0FBMkJBLFlBQVlHLEdBQUcsS0FBS04sTUFBTU8sRUFBRTtJQUUzRixxQkFDSSw4REFBQ0M7UUFBSUQsSUFBSzs7MEJBQ04sOERBQUNFOzBCQUFJTCx5QkFBQUEsbUNBQUFBLGFBQWNNLFlBQVk7Ozs7OzswQkFFL0IsOERBQUNDOzs7Ozs7Ozs7OztBQUliO0dBYndCWjs7UUFDSEQseURBQVFBOzs7S0FETEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvRWRpdFBsYXlsaXN0LnRzeD9jZTFmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7dXNlU3RvcmV9IGZyb20gXCIuLi9taWRkbGV3YXJlL1p1c3RhbmRcIlxyXG5pbXBvcnQge1N0YXRlfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9UeXBlXCJcclxuaW1wb3J0IHtMaXN0T2ZTb25nc30gZnJvbSBcIi4uL21pZGRsZXdhcmUvSW50ZXJmYWNlXCJcclxuXHJcbmludGVyZmFjZSBFZGl0e1xyXG5pZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRQbGF5bGlzdChwcm9wczogRWRpdCl7XHJcbiAgICBjb25zdCBwbGF5bGlzdCA9IHVzZVN0b3JlKChzdGF0ZTpTdGF0ZSk9PnN0YXRlLmxpc3RPZlNvbmdzKTtcclxuXHJcbiAgICBjb25zdCBmaW5kUGxheWxpc3QgPSBwbGF5bGlzdC5maW5kKChsaXN0T2ZTb25nczogTGlzdE9mU29uZ3MpPT5saXN0T2ZTb25ncy4kaWQgPT09IHByb3BzLmlkKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBpZCA9IFwidGFibGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyPntmaW5kUGxheWxpc3Q/LnBsYXlsaXN0TmFtZX08L2gyPlxyXG5cclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0b3JlIiwiRWRpdFBsYXlsaXN0IiwicHJvcHMiLCJwbGF5bGlzdCIsInN0YXRlIiwibGlzdE9mU29uZ3MiLCJmaW5kUGxheWxpc3QiLCJmaW5kIiwiJGlkIiwiaWQiLCJkaXYiLCJoMiIsInBsYXlsaXN0TmFtZSIsInRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/EditPlaylist.tsx\n"));

/***/ })

});