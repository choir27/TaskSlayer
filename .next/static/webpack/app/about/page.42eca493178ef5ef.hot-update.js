"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../middleware/Zustand */ \"(app-pages-browser)/./middleware/Zustand.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Search() {\n    _s();\n    const searchValue = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore)((state)=>state.searchValue);\n    const setSearchValue = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore)((state)=>state.setSearchValue);\n    const setSearchResults = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore)((state)=>state.setSearchResults);\n    const songs = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore)((state)=>state.song);\n    const playlists = (0,_middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore)((state)=>state.listOfSongs);\n    const { push } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    function handleSearch() {\n        const searchResults = [];\n        songs.forEach((audio)=>{\n            if (audio.audio.toLowerCase().includes(searchValue.toLowerCase()) || audio.name.toLowerCase().includes(searchValue.toLowerCase()) || audio.user.toLowerCase().includes(searchValue.toLowerCase())) {\n                searchResults.push(audio);\n            }\n        });\n        playlists.forEach((playlist)=>{\n            if (playlist.playlistName.toLowerCase().includes(searchValue.toLowerCase()) || playlist.user.toLowerCase().includes(searchValue.toLowerCase())) {\n                searchResults.push(playlist);\n            }\n            playlist.playlistSongs.forEach((element)=>{\n                const song = JSON.parse(element);\n                if (song.audio.toLowerCase().includes(searchValue.toLowerCase()) || song.name.toLowerCase().includes(searchValue.toLowerCase()) || song.user.toLowerCase().includes(searchValue.toLowerCase())) {\n                    searchResults.push(playlist);\n                }\n            });\n        });\n        setSearchResults(searchResults);\n        push(\"/search\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"search\",\n                onChange: (e)=>setSearchValue(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\components\\\\Search.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/search\",\n                className: \"fa-solid fa-magnifying-glass\",\n                onClick: ()=>{\n                    handleSearch();\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\components\\\\Search.tsx\",\n                lineNumber: 56,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Next EchoStream\\\\components\\\\Search.tsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, this);\n}\n_s(Search, \"6B1UBpf2kkBh2o2CPQ+dovPsbqA=\", false, function() {\n    return [\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore,\n        _middleware_Zustand__WEBPACK_IMPORTED_MODULE_2__.useStore,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Search;\nvar _c;\n$RefreshReg$(_c, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2VhcmNoLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUM7QUFJSztBQUNsQjtBQUViLFNBQVNHOztJQUVwQixNQUFNQyxjQUFjSCw2REFBUUEsQ0FBQyxDQUFDSSxRQUFlQSxNQUFNRCxXQUFXO0lBQzlELE1BQU1FLGlCQUFpQkwsNkRBQVFBLENBQUMsQ0FBQ0ksUUFBZUEsTUFBTUMsY0FBYztJQUNwRSxNQUFNQyxtQkFBbUJOLDZEQUFRQSxDQUFDLENBQUNJLFFBQWlCQSxNQUFNRSxnQkFBZ0I7SUFDMUUsTUFBTUMsUUFBUVAsNkRBQVFBLENBQUMsQ0FBQ0ksUUFBY0EsTUFBTUksSUFBSTtJQUNoRCxNQUFNQyxZQUFZVCw2REFBUUEsQ0FBQyxDQUFDSSxRQUFjQSxNQUFNTSxXQUFXO0lBQzNELE1BQU0sRUFBQ0MsSUFBSSxFQUFDLEdBQUdaLDBEQUFTQTtJQUV4QixTQUFTYTtRQUVMLE1BQU1DLGdCQUEyQyxFQUFFO1FBRW5ETixNQUFNTyxPQUFPLENBQUMsQ0FBQ0M7WUFDWCxJQUFHQSxNQUFNQSxLQUFLLENBQUNDLFdBQVcsR0FBR0MsUUFBUSxDQUFDZCxZQUFZYSxXQUFXLE9BQU9ELE1BQU1HLElBQUksQ0FBQ0YsV0FBVyxHQUFHQyxRQUFRLENBQUNkLFlBQVlhLFdBQVcsT0FBT0QsTUFBTUksSUFBSSxDQUFDSCxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsWUFBWWEsV0FBVyxLQUFJO2dCQUM3TEgsY0FBY0YsSUFBSSxDQUFDSTtZQUN2QjtRQUNKO1FBRUFOLFVBQVVLLE9BQU8sQ0FBQyxDQUFDTTtZQUNmLElBQUdBLFNBQVNDLFlBQVksQ0FBQ0wsV0FBVyxHQUFHQyxRQUFRLENBQUNkLFlBQVlhLFdBQVcsT0FBT0ksU0FBU0QsSUFBSSxDQUFDSCxXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsWUFBWWEsV0FBVyxLQUFJO2dCQUMxSUgsY0FBY0YsSUFBSSxDQUFDUztZQUN2QjtZQUVBQSxTQUFTRSxhQUFhLENBQUNSLE9BQU8sQ0FBQyxDQUFDUztnQkFDNUIsTUFBTWYsT0FBT2dCLEtBQUtDLEtBQUssQ0FBQ0Y7Z0JBRXhCLElBQUdmLEtBQUtPLEtBQUssQ0FBQ0MsV0FBVyxHQUFHQyxRQUFRLENBQUNkLFlBQVlhLFdBQVcsT0FBT1IsS0FBS1UsSUFBSSxDQUFDRixXQUFXLEdBQUdDLFFBQVEsQ0FBQ2QsWUFBWWEsV0FBVyxPQUFPUixLQUFLVyxJQUFJLENBQUNILFdBQVcsR0FBR0MsUUFBUSxDQUFDZCxZQUFZYSxXQUFXLEtBQUk7b0JBQzFMSCxjQUFjRixJQUFJLENBQUNTO2dCQUN2QjtZQUVKO1FBRUo7UUFFQWQsaUJBQWlCTztRQUVqQkYsS0FBSztJQUNUO0lBRUEscUJBQ0ksOERBQUNlOzswQkFDRyw4REFBQ0M7Z0JBQU1DLE1BQU87Z0JBQVNDLFVBQVksQ0FBQ0MsSUFBSXpCLGVBQWV5QixFQUFFQyxNQUFNLENBQUNDLEtBQUs7Ozs7OzswQkFNakUsOERBQUMvQixrREFBSUE7Z0JBQUNnQyxNQUFPO2dCQUFVQyxXQUFZO2dCQUErQkMsU0FBVztvQkFDekV2QjtnQkFDSjs7Ozs7Ozs7Ozs7O0FBR2hCO0dBckR3QlY7O1FBRUFGLHlEQUFRQTtRQUNMQSx5REFBUUE7UUFDTkEseURBQVFBO1FBQ25CQSx5REFBUUE7UUFDSkEseURBQVFBO1FBQ1hELHNEQUFTQTs7O0tBUEpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoLnRzeD9iOTZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCJcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuL0J1dHRvblwiXHJcbmltcG9ydCB7U3RhdGUsIEFjdGlvbn0gZnJvbSBcIi4uL21pZGRsZXdhcmUvVHlwZVwiXHJcbmltcG9ydCB7QXVkaW8sIExpc3RPZlNvbmdzfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9JbnRlcmZhY2VcIlxyXG5pbXBvcnQge3VzZVN0b3JlfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9adXN0YW5kXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKXtcclxuXHJcbiAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHVzZVN0b3JlKChzdGF0ZTogU3RhdGUpPT5zdGF0ZS5zZWFyY2hWYWx1ZSk7XHJcbiAgICBjb25zdCBzZXRTZWFyY2hWYWx1ZSA9IHVzZVN0b3JlKChzdGF0ZTpBY3Rpb24pPT5zdGF0ZS5zZXRTZWFyY2hWYWx1ZSk7XHJcbiAgICBjb25zdCBzZXRTZWFyY2hSZXN1bHRzID0gdXNlU3RvcmUoKHN0YXRlOiBBY3Rpb24pPT4gc3RhdGUuc2V0U2VhcmNoUmVzdWx0cyk7XHJcbiAgICBjb25zdCBzb25ncyA9IHVzZVN0b3JlKChzdGF0ZTpTdGF0ZSk9PnN0YXRlLnNvbmcpO1xyXG4gICAgY29uc3QgcGxheWxpc3RzID0gdXNlU3RvcmUoKHN0YXRlOlN0YXRlKT0+c3RhdGUubGlzdE9mU29uZ3MpO1xyXG4gICAgY29uc3Qge3B1c2h9ID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKCl7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdHM6QXJyYXk8QXVkaW8gfCBMaXN0T2ZTb25ncz4gPSBbXTtcclxuICAgIFxyXG4gICAgICAgIHNvbmdzLmZvckVhY2goKGF1ZGlvOiBBdWRpbyk9PntcclxuICAgICAgICAgICAgaWYoYXVkaW8uYXVkaW8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fCBhdWRpby5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgfHwgYXVkaW8udXNlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMucHVzaChhdWRpbyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSAgXHJcbiAgICAgXHJcbiAgICAgICAgcGxheWxpc3RzLmZvckVhY2goKHBsYXlsaXN0OiBMaXN0T2ZTb25ncyk9PntcclxuICAgICAgICAgICAgaWYocGxheWxpc3QucGxheWxpc3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUudG9Mb3dlckNhc2UoKSkgfHwgcGxheWxpc3QudXNlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMucHVzaChwbGF5bGlzdClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGxheWxpc3QucGxheWxpc3RTb25ncy5mb3JFYWNoKChlbGVtZW50OiBzdHJpbmcpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb25nID0gSlNPTi5wYXJzZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoc29uZy5hdWRpby50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8IHNvbmcubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8IHNvbmcudXNlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzLnB1c2gocGxheWxpc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNldFNlYXJjaFJlc3VsdHMoc2VhcmNoUmVzdWx0cyk7XHJcblxyXG4gICAgICAgIHB1c2goXCIvc2VhcmNoXCIpICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlID0gXCJzZWFyY2hcIiBvbkNoYW5nZSA9IHsoZSk9PnNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICB7LyogPEJ1dHRvbiB0ZXh0PVwiXCIgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtbWFnbmlmeWluZy1nbGFzcyBidXR0b25cIiBvbkNsaWNrPXsoZSk9PntcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZVNlYXJjaCgpXHJcbiAgICAgICAgICAgICAgICB9fS8+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWYgPSBcIi9zZWFyY2hcIiBjbGFzc05hbWUgPSBcImZhLXNvbGlkIGZhLW1hZ25pZnlpbmctZ2xhc3NcIiBvbkNsaWNrID0geygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VhcmNoKClcclxuICAgICAgICAgICAgICAgIH19PjwvTGluaz5cclxuICAgICAgICA8L2Zvcm0+ICAgICAgICBcclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdG9yZSIsIkxpbmsiLCJTZWFyY2giLCJzZWFyY2hWYWx1ZSIsInN0YXRlIiwic2V0U2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hSZXN1bHRzIiwic29uZ3MiLCJzb25nIiwicGxheWxpc3RzIiwibGlzdE9mU29uZ3MiLCJwdXNoIiwiaGFuZGxlU2VhcmNoIiwic2VhcmNoUmVzdWx0cyIsImZvckVhY2giLCJhdWRpbyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJuYW1lIiwidXNlciIsInBsYXlsaXN0IiwicGxheWxpc3ROYW1lIiwicGxheWxpc3RTb25ncyIsImVsZW1lbnQiLCJKU09OIiwicGFyc2UiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJocmVmIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Search.tsx\n"));

/***/ })

});