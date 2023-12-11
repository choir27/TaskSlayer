(() => {
  var e = {};
  (e.id = 346),
    (e.ids = [346]),
    (e.modules = {
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      5528: (e) => {
        "use strict";
        e.exports = require("next/dist\\client\\components\\action-async-storage.external.js");
      },
      1877: (e) => {
        "use strict";
        e.exports = require("next/dist\\client\\components\\request-async-storage.external.js");
      },
      5319: (e) => {
        "use strict";
        e.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");
      },
      9491: (e) => {
        "use strict";
        e.exports = require("assert");
      },
      2361: (e) => {
        "use strict";
        e.exports = require("events");
      },
      7147: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      3685: (e) => {
        "use strict";
        e.exports = require("http");
      },
      5687: (e) => {
        "use strict";
        e.exports = require("https");
      },
      1017: (e) => {
        "use strict";
        e.exports = require("path");
      },
      5477: (e) => {
        "use strict";
        e.exports = require("punycode");
      },
      2781: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      7310: (e) => {
        "use strict";
        e.exports = require("url");
      },
      3837: (e) => {
        "use strict";
        e.exports = require("util");
      },
      9796: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      3430: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => d,
            originalPathname: () => p,
            pages: () => u,
            routeModule: () => m,
            tree: () => l,
          });
        var a = s(7096),
          r = s(6132),
          n = s(7284),
          o = s.n(n),
          i = s(2564),
          c = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (c[e] = () => i[e]);
        s.d(t, c);
        let l = [
            "",
            {
              children: [
                "account",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(s.bind(s, 4424)),
                        "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\account\\page.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(s.bind(s, 4370)),
                    "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\account\\layout.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(s.bind(s, 5345)),
                "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(s.t.bind(s, 9291, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          u = [
            "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\account\\page.tsx",
          ],
          p = "/account/page",
          d = { require: s, loadChunk: () => Promise.resolve() },
          m = new a.AppPageRouteModule({
            definition: {
              kind: r.x.APP_PAGE,
              page: "/account/page",
              pathname: "/account",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      3225: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 6635));
      },
      5303: () => {},
      6635: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => h });
        var a = s(3854),
          r = s(4218);
        s(910), s(4942);
        var n = s(7868),
          o = s(9918),
          i = s(1855),
          c = s(3092),
          l = s(440),
          u = s(397);
        function p() {
          let [e, t] = (0, r.useState)(""),
            [s, n] = (0, r.useState)(""),
            [o, i] = (0, r.useState)(""),
            [p, d] = (0, r.useState)(""),
            [m, x] = (0, r.useState)(""),
            h = (0, r.useContext)(u.S);
          async function g() {
            try {
              let t = await l.Z.updateAccountEmail(e, o);
              t && window.location.reload();
            } catch (e) {
              console.error(e);
            }
          }
          async function w() {
            try {
              let e = await l.Z.updateAccountPassword(p, o);
              e && window.location.reload();
            } catch (e) {
              console.error(e);
            }
          }
          async function y() {
            try {
              let e = await l.Z.updateAccountName(s);
              e && window.location.reload();
            } catch (e) {
              console.error(e);
            }
          }
          let C = (0, a.jsxs)("section", {
              className: "flex column",
              children: [
                (0, c.z)({
                  text: "Change Name",
                  onClick: (e) => x("name"),
                  className: "button small",
                }),
                (0, c.z)({
                  text: "Change Email",
                  onClick: (e) => x("email"),
                  className: "button small",
                }),
                (0, c.z)({
                  text: "Change Password",
                  onClick: (e) => x("password"),
                  className: "button small",
                }),
              ],
            }),
            v = {
              name: (0, a.jsxs)("section", {
                className: "flex column alignItems",
                children: [
                  a.jsx("input", {
                    type: "text",
                    name: "name",
                    placeholder: h?.name,
                    id: "name",
                    onChange: (e) => n(e.target.value),
                  }),
                  (0, c.z)({
                    text: "Change Name",
                    onClick: (e) => y(),
                    className: "button small",
                  }),
                  (0, c.z)({
                    text: "Go Back",
                    onClick: (e) => x(""),
                    className: "button small",
                  }),
                ],
              }),
              email: (0, a.jsxs)("section", {
                className: "flex column alignItems",
                children: [
                  a.jsx("input", {
                    type: "text",
                    placeholder: h?.email,
                    name: "email",
                    id: "email",
                    onChange: (e) => t(e.target.value),
                  }),
                  a.jsx("input", {
                    type: "password",
                    placeholder: "Input Password",
                    name: "password",
                    id: "password",
                    onChange: (e) => i(e.target.value),
                  }),
                  (0, c.z)({
                    text: "Change Email",
                    onClick: (e) => g(),
                    className: "button small",
                  }),
                  (0, c.z)({
                    text: "Go Back",
                    onClick: (e) => x(""),
                    className: "button small",
                  }),
                ],
              }),
              password: (0, a.jsxs)("section", {
                className: "flex column alignItems",
                children: [
                  a.jsx("input", {
                    placeholder: "Current Password",
                    type: "password",
                    name: "password",
                    id: "password",
                    onChange: (e) => i(e.target.value),
                  }),
                  a.jsx("input", {
                    placeholder: "New Password",
                    type: "password",
                    name: "newPassword",
                    id: "newPassword",
                    onChange: (e) => d(e.target.value),
                  }),
                  (0, c.z)({
                    text: "Change Password",
                    onClick: (e) => w(),
                    className: "button small",
                  }),
                  (0, c.z)({
                    text: "Go Back",
                    onClick: (e) => x(""),
                    className: "button small",
                  }),
                ],
              }),
            };
          return m ? v[m] : C;
        }
        var d = s(9519),
          m = s(4334),
          x = s(4755);
        let h = () => {
          let e = (0, r.useContext)(u.S),
            [t, s] = (0, r.useState)(1),
            c = (0, d.o)((e) => e.listOfSongs),
            l = (0, d.o)((e) => e.songDisplay),
            h = (0, d.o)((e) => e.setSongDisplay),
            g = (0, d.o)((e) => e.song),
            w = (0, d.o)((e) => e.searchDisplay),
            y = (0, d.o)((e) => e.setSearchDisplay);
          return (
            (0, r.useEffect)(() => {
              y(!1);
            }, []),
            a.jsx(a.Fragment, {
              children: w
                ? a.jsx(x.default, {})
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      a.jsx(n.Z, {}),
                      (0, a.jsxs)("section", {
                        id: "account",
                        className: "main",
                        children: [
                          (0, a.jsxs)("h1", {
                            children: ["Welcome ", e?.name],
                          }),
                          a.jsx(o.Z, {}),
                          (0, a.jsxs)("section", {
                            className: "flex alignItems spaceEvenly",
                            children: [
                              a.jsx("section", {
                                children: a.jsx(m.Z, {
                                  playlist: c,
                                  setSongDisplay: (e) => h(e),
                                  songDisplay: l,
                                  songs: g,
                                  currentPage: t,
                                  setCurrentPage: (e) => s(e),
                                }),
                              }),
                              a.jsx(p, {}),
                            ],
                          }),
                        ],
                      }),
                      a.jsx(i.Z, {}),
                    ],
                  }),
            })
          );
        };
      },
      4370: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => r });
        var a = s(4656);
        function r({ children: e }) {
          return a.jsx("main", { className: "column flex", children: e });
        }
      },
      4424: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, { $$typeof: () => o, __esModule: () => n, default: () => c });
        var a = s(5153);
        let r = (0, a.createProxy)(
            String.raw`C:\Users\richa\OneDrive\Documents\Next EchoStream\app\account\page.tsx`,
          ),
          { __esModule: n, $$typeof: o } = r,
          i = r.default,
          c = i;
      },
      4656: (e, t, s) => {
        "use strict";
        e.exports = s(7096).vendored["react-rsc"].ReactJsxRuntime;
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var s = (e) => t((t.s = e)),
    a = t.X(0, [370, 686, 382, 657, 283], () => s(3430));
  module.exports = a;
})();
