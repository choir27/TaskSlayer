(() => {
  var e = {};
  (e.id = 90),
    (e.ids = [90]),
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
      365: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, {
            GlobalError: () => l.a,
            __next_app__: () => u,
            originalPathname: () => h,
            pages: () => d,
            routeModule: () => x,
            tree: () => c,
          });
        var r = t(7096),
          a = t(6132),
          i = t(7284),
          l = t.n(i),
          n = t(2564),
          o = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => n[e]);
        t.d(s, o);
        let c = [
            "",
            {
              children: [
                "editPlaylist",
                {
                  children: [
                    "[id]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(t.bind(t, 6790)),
                            "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\editPlaylist\\[id]\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {
                      layout: [
                        () => Promise.resolve().then(t.bind(t, 1293)),
                        "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\editPlaylist\\[id]\\layout.tsx",
                      ],
                    },
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 5345)),
                "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.t.bind(t, 9291, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          d = [
            "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\editPlaylist\\[id]\\page.tsx",
          ],
          h = "/editPlaylist/[id]/page",
          u = { require: t, loadChunk: () => Promise.resolve() },
          x = new r.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/editPlaylist/[id]/page",
              pathname: "/editPlaylist/[id]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      1664: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 2613));
      },
      5303: () => {},
      2613: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => j });
        var r = t(3854),
          a = t(4218),
          i = t(9519),
          l = t(397),
          n = t(3092),
          o = t(440),
          c = t(1018);
        async function d(e, s, t) {
          try {
            let r = {
              playlistName: e,
              playlistSongs: s.playlistSongs,
              userID: t.$id,
              user: t.email,
            };
            await o.Z.updateDocument(
              "6543e6631929ba50ffd1",
              "6543e8ebf074d567b450",
              s.$id,
              r,
            ),
              window.location.reload();
          } catch (e) {
            console.error(e);
          }
        }
        async function h(e, s, t) {
          try {
            let r = s.playlistSongs.map((e) => e),
              a = r.find((s) => {
                let t = JSON.parse(s);
                return t.$id === e;
              });
            r.splice(r.indexOf(a), 1);
            let i = {
              playlistName: s.playlistName,
              playlistSongs: r,
              userID: t.$id,
              user: t.email,
            };
            await o.Z.updateDocument(
              "6543e6631929ba50ffd1",
              "6543e8ebf074d567b450",
              s.$id,
              i,
            ),
              window.location.reload();
          } catch (e) {
            console.error(e);
          }
        }
        async function u(e, s) {
          try {
            await o.Z.deleteDocument(
              "6543e6631929ba50ffd1",
              "6543e8ebf074d567b450",
              e.$id,
            ),
              localStorage.setItem("playlist", ""),
              s("/");
          } catch (e) {
            console.error(e);
          }
        }
        function x(e) {
          let s = (0, i.o)((e) => e.listOfSongs),
            t = (0, a.useContext)(l.S),
            [o, x] = (0, a.useState)(!1),
            [m, p] = (0, a.useState)(""),
            f = s.find((s) => s.$id === e.id),
            j = f?.$updatedAt,
            g = new Date(j),
            { push: y } = (0, c.useRouter)(),
            b = f?.playlistSongs.map((e) => {
              let s = JSON.parse(e);
              return r.jsxs(
                "tr",
                {
                  children: [
                    r.jsx("td", { children: s.name }),
                    r.jsx("td", { children: s.artist }),
                    r.jsx("td", { children: s.genre }),
                    r.jsx("td", { children: s.user }),
                    r.jsx("td", {
                      children: n.z({
                        text: "",
                        className: "fa-solid fa-xmark button small",
                        onClick: (e) => {
                          e.preventDefault(), h(s.$id, f, t);
                        },
                      }),
                    }),
                  ],
                },
                s.$id,
              );
            });
          return (0, r.jsxs)("div", {
            id: "tableContainer",
            children: [
              r.jsx("section", {
                children: o
                  ? (0, r.jsxs)("form", {
                      className: "flex spaceEvenly",
                      children: [
                        r.jsx("h2", { children: "Edit Playlist Name" }),
                        r.jsx("input", {
                          type: "text",
                          onChange: (e) => p(e.target.value),
                        }),
                        (0, n.z)({
                          text: "",
                          className: "fa-solid fa-pen-to-square button",
                          onClick: (e) => {
                            e.preventDefault(), d(m, f, t);
                          },
                        }),
                        (0, n.z)({
                          text: "",
                          className: "fa-solid fa-right-from-bracket button",
                          onClick: (e) => {
                            e.preventDefault(), x(!1);
                          },
                        }),
                      ],
                    })
                  : (0, r.jsxs)("div", {
                      className: "flex spaceEvenly",
                      children: [
                        (0, r.jsxs)("h2", {
                          children: ["Playlist Name: ", f?.playlistName],
                        }),
                        (0, n.z)({
                          text: "",
                          className: "fa-regular fa-pen-to-square button",
                          onClick: (e) => {
                            e.preventDefault(), x(!0);
                          },
                        }),
                        (0, n.z)({
                          text: "",
                          className: "fa-solid fa-trash-can button",
                          onClick: (e) => {
                            e.preventDefault(), u(f, y);
                          },
                        }),
                      ],
                    }),
              }),
              (0, r.jsxs)("h3", {
                children: [
                  "Updated At: ",
                  g.getMonth() + 1,
                  "/",
                  g.getDate(),
                  "/",
                  g.getFullYear(),
                ],
              }),
              (0, r.jsxs)("table", {
                children: [
                  r.jsx("thead", {
                    children: (0, r.jsxs)("tr", {
                      children: [
                        r.jsx("th", { children: "Song Name" }),
                        r.jsx("th", { children: "Artist" }),
                        r.jsx("th", { children: "Genre" }),
                        r.jsx("th", { children: "User" }),
                        r.jsx("th", { children: "Remove" }),
                      ],
                    }),
                  }),
                  r.jsx("tbody", { children: b }),
                ],
              }),
            ],
          });
        }
        t(910), t(4942);
        var m = t(7868),
          p = t(1855),
          f = t(4755);
        function j(e) {
          let s = e.params,
            t = (0, i.o)((e) => e.searchDisplay),
            l = (0, i.o)((e) => e.setSearchDisplay);
          return (
            (0, a.useEffect)(() => {
              l(!1);
            }, []),
            r.jsx(r.Fragment, {
              children: t
                ? r.jsx(f.default, {})
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      r.jsx(m.Z, {}),
                      r.jsx("section", {
                        className: "main",
                        id: "home",
                        children: (0, r.jsxs)("section", {
                          children: [
                            r.jsx("h1", { children: "Edit Playlist" }),
                            r.jsx(x, { id: s.id }),
                          ],
                        }),
                      }),
                      r.jsx(p.Z, {}),
                    ],
                  }),
            })
          );
        }
      },
      4755: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => h });
        var r = t(3854);
        t(910), t(4942);
        var a = t(9519),
          i = t(4808),
          l = t(3092),
          n = t(7868),
          o = t(1855),
          c = t(1759),
          d = t(642);
        function h() {
          let e = (0, a.o)((e) => e.searchResults),
            s = (0, i.Z)("auth"),
            t = e.map((e, t) =>
              (0, r.jsxs)(
                "tr",
                {
                  children: [
                    r.jsx("td", { children: e.name ? e.name : e.playlistName }),
                    r.jsx("td", {
                      children: e.audio
                        ? r.jsx("button", {
                            className: "button small",
                            onClick: (s) => {
                              s.preventDefault(),
                                localStorage.setItem("song", e.$id),
                                window.location.reload();
                            },
                            children: "Play",
                          })
                        : "",
                    }),
                    r.jsx("td", {}),
                    r.jsx("td", { children: e.user }),
                    r.jsx("td", {
                      children: e.audio ? r.jsx(c.Z, { index: t }) : "  ",
                    }),
                    r.jsx("td", {
                      children:
                        s?.toLowerCase() === e.user && e.audio
                          ? (0, l.z)({
                              text: "",
                              className: "fa-solid fa-trash button small",
                              onClick: (s) => (0, d.at)(e.$id, e.cloudinaryId),
                            })
                          : "",
                    }),
                  ],
                },
                `${e.$id}-${e.name}`,
              ),
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              r.jsx(n.Z, {}),
              r.jsx("section", {
                id: "home",
                className: "main",
                children: (0, r.jsxs)("div", {
                  id: "tableContainer",
                  children: [
                    r.jsx("h2", { children: "Search Results" }),
                    e.length
                      ? (0, r.jsxs)("table", {
                          children: [
                            r.jsx("thead", {
                              children: (0, r.jsxs)("tr", {
                                children: [
                                  r.jsx("th", { children: "Name" }),
                                  r.jsx("th", { children: "Play" }),
                                  r.jsx("th", {}),
                                  r.jsx("th", { children: s ? "" : "User" }),
                                  r.jsx("th", { children: "Playlist" }),
                                  r.jsx("th", { children: "Delete" }),
                                ],
                              }),
                            }),
                            r.jsx("tbody", { children: t }),
                          ],
                        })
                      : r.jsx("h2", {
                          children: "No Results Match Your Search",
                        }),
                  ],
                }),
              }),
              r.jsx(o.Z, {}),
            ],
          });
        }
      },
      1855: (e, s, t) => {
        "use strict";
        t.d(s, { Z: () => a });
        var r = t(3854);
        function a() {
          return r.jsx("footer", {
            className: "flex",
            children: (0, r.jsxs)("nav", {
              className: "flex",
              children: [
                (0, r.jsxs)("ul", {
                  className: "flex icons",
                  children: [
                    r.jsx("li", {
                      children: r.jsx("a", {
                        rel: "noreferrer",
                        target: "_blank",
                        href: "https://twitter.com/choir241",
                        className: "fa-brands fa-twitter",
                        children: r.jsx("p", {
                          className: "hidden",
                          children: "Twitter",
                        }),
                      }),
                    }),
                    r.jsx("li", {
                      children: r.jsx("a", {
                        rel: "noreferrer",
                        target: "_blank",
                        href: "https://www.linkedin.com/in/richard-choir/",
                        className: "fa-brands fa-linkedin",
                        children: r.jsx("p", {
                          className: "hidden",
                          children: "LinkedIn",
                        }),
                      }),
                    }),
                    r.jsx("li", {
                      children: r.jsx("a", {
                        rel: "noreferrer",
                        target: "_blank",
                        href: "https://www.instagram.com/225kh_drw/?hl=en",
                        className: "fa-brands fa-instagram",
                        children: r.jsx("p", {
                          className: "hidden",
                          children: "Instagram",
                        }),
                      }),
                    }),
                    r.jsx("li", {
                      children: r.jsx("a", {
                        rel: "noreferrer",
                        target: "_blank",
                        href: "https://github.com/choir27",
                        className: "fa-brands fa-github",
                        children: r.jsx("p", {
                          className: "hidden",
                          children: "Github",
                        }),
                      }),
                    }),
                  ],
                }),
                r.jsx("small", {
                  children: "EchoVerse \xa9 2023. All rights are reserved",
                }),
              ],
            }),
          });
        }
        t(4218);
      },
      7868: (e, s, t) => {
        "use strict";
        t.d(s, { Z: () => x });
        var r = t(3854),
          a = t(5548),
          i = t.n(a),
          l = t(440),
          n = t(3092),
          o = t(9519),
          c = t(5166);
        function d() {
          let e = (0, o.o)((e) => e.searchValue),
            s = (0, o.o)((e) => e.setSearchValue),
            t = (0, o.o)((e) => e.setSearchResults),
            a = (0, o.o)((e) => e.song),
            i = (0, o.o)((e) => e.listOfSongs),
            l = (0, o.o)((e) => e.setSearchDisplay);
          return (0, r.jsxs)("form", {
            children: [
              r.jsx("input", {
                type: "search",
                onChange: (e) => s(e.target.value),
              }),
              r.jsx(n.z, {
                text: "",
                className: "fa-solid fa-magnifying-glass button",
                onClick: (s) => {
                  s.preventDefault(),
                    (function () {
                      let s = [];
                      a.forEach((t) => {
                        (t?.audio?.toLowerCase().includes(e.toLowerCase()) ||
                          t?.name?.toLowerCase().includes(e.toLowerCase()) ||
                          t?.user?.toLowerCase().includes(e.toLowerCase())) &&
                          s.push(t);
                      }),
                        i.forEach((t) => {
                          (t?.playlistName
                            ?.toLowerCase()
                            .includes(e.toLowerCase()) ||
                            t?.user?.toLowerCase().includes(e.toLowerCase())) &&
                            s.push(t),
                            t.playlistSongs.forEach((r) => {
                              let a = JSON.parse(r);
                              (a?.audio
                                ?.toLowerCase()
                                .includes(e.toLowerCase()) ||
                                a?.name
                                  ?.toLowerCase()
                                  .includes(e.toLowerCase()) ||
                                a?.user
                                  ?.toLowerCase()
                                  .includes(e.toLowerCase())) &&
                                s.push(t);
                            });
                        }),
                        s.length ||
                          (console.log("No Results Match Your Search"),
                          c.Am.error("No Results Match Your Search")),
                        t(s),
                        l(!0);
                    })();
                },
              }),
            ],
          });
        }
        var h = t(1018),
          u = t(4808);
        function x() {
          async function e(e) {
            try {
              e.preventDefault(),
                sessionStorage.removeItem("auth"),
                await l.Z.deleteCurrentSession(),
                window.location.reload(),
                (0, h.redirect)("/");
            } catch (e) {
              console.error(e);
            }
          }
          let s = (0, o.o)((e) => e.setHeaderDisplay),
            t = (0, o.o)((e) => e.headerDisplay),
            a = (0, u.Z)("auth"),
            c = `${
              "display" === t
                ? "fa-solid fa-xmark button small hidden"
                : "fa-solid fa-bars button small hidden"
            }`;
          return (0, r.jsxs)("header", {
            className: "flex column",
            id: "header",
            children: [
              r.jsx("div", {
                children: r.jsx(i(), {
                  href: "/",
                  children: r.jsx("h1", { children: "EchoStream" }),
                }),
              }),
              (0, n.z)({
                text: "",
                className: c,
                id: "menu",
                onClick: () =>
                  void ("display" === t ? s("hidden") : s("display")),
              }),
              r.jsx("nav", {
                className: `flex column nav ${t}`,
                children: (0, r.jsxs)("ul", {
                  className: "flex navBar",
                  children: [
                    r.jsx("li", {
                      children: r.jsx(i(), { href: "/", children: "Home" }),
                    }),
                    r.jsx("li", {
                      children: r.jsx(i(), {
                        href: "/about",
                        children: "About",
                      }),
                    }),
                    a
                      ? r.jsx("li", {
                          children: r.jsx(i(), {
                            href: "/account",
                            children: "Account",
                          }),
                        })
                      : "",
                    a
                      ? r.jsx("li", {
                          children: r.jsx(i(), {
                            href: "/addAudio",
                            children: "Add Audio",
                          }),
                        })
                      : "",
                    a
                      ? r.jsx("li", {
                          children: r.jsx(i(), {
                            href: "/",
                            onClick: (s) => e(s),
                            children: "Logout",
                          }),
                        })
                      : "",
                    a
                      ? ""
                      : r.jsx("li", {
                          children: r.jsx(i(), {
                            href: "/demo",
                            children: "Demo",
                          }),
                        }),
                    a
                      ? ""
                      : r.jsx("li", {
                          children: r.jsx(i(), {
                            href: "/login",
                            children: "Login/Register",
                          }),
                        }),
                    r.jsx("li", { children: r.jsx(d, {}) }),
                  ],
                }),
              }),
            ],
          });
        }
      },
      1293: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => a });
        var r = t(4656);
        function a({ children: e }) {
          return r.jsx("main", { className: "column flex", children: e });
        }
      },
      6790: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, { $$typeof: () => l, __esModule: () => i, default: () => o });
        var r = t(5153);
        let a = (0, r.createProxy)(
            String.raw`C:\Users\richa\OneDrive\Documents\Next EchoStream\app\editPlaylist\[id]\page.tsx`,
          ),
          { __esModule: i, $$typeof: l } = a,
          n = a.default,
          o = n;
      },
      4656: (e, s, t) => {
        "use strict";
        e.exports = t(7096).vendored["react-rsc"].ReactJsxRuntime;
      },
      910: () => {},
      4942: () => {},
    });
  var s = require("../../../webpack-runtime.js");
  s.C(e);
  var t = (e) => s((s.s = e)),
    r = s.X(0, [370, 686, 657], () => t(365));
  module.exports = r;
})();
