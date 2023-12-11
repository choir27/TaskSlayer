(() => {
  var e = {};
  (e.id = 935),
    (e.ids = [935]),
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
      9896: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, {
            GlobalError: () => n.a,
            __next_app__: () => u,
            originalPathname: () => h,
            pages: () => d,
            routeModule: () => x,
            tree: () => c,
          });
        var r = t(7096),
          i = t(6132),
          a = t(7284),
          n = t.n(a),
          o = t(2564),
          l = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => o[e]);
        t.d(s, l);
        let c = [
            "",
            {
              children: [
                "addAudio",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 8322)),
                        "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\addAudio\\page.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(t.bind(t, 7499)),
                    "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\addAudio\\layout.tsx",
                  ],
                },
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
            "C:\\Users\\richa\\OneDrive\\Documents\\Next EchoStream\\app\\addAudio\\page.tsx",
          ],
          h = "/addAudio/page",
          u = { require: t, loadChunk: () => Promise.resolve() },
          x = new r.AppPageRouteModule({
            definition: {
              kind: i.x.APP_PAGE,
              page: "/addAudio/page",
              pathname: "/addAudio",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      7627: (e, s, t) => {
        Promise.resolve().then(t.bind(t, 870));
      },
      5303: () => {},
      870: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => p });
        var r = t(3854),
          i = t(4218),
          a = t(7868),
          n = t(1855);
        function o(e) {
          let s = [
            "Pop music",
            "Rock",
            "Rhythm and blues",
            "Hip hop music",
            "Popular music",
            "Electronic music",
            "Electronic dance music",
            "Blues",
            "Heavy metal",
            "Country music",
            "Classical music",
            "Jazz",
            "Folk music",
            "Easy listening",
            "Funk",
            "Reggae",
            "Progressive rock",
            "Music of Latin America",
            "Punk rock",
            "New-age music",
            "Soul music",
            "Pop rock",
            "Synth-pop",
            "Indie rock",
            "World music",
            "Industrial music",
            "Disco",
            "Vocal music",
            "Alternative rock",
            "Techno",
            "New wave",
            "Latin music",
            "Dance music",
            "House music",
            "Latin pop",
            "Indie pop",
            "Tejano music",
            "Soundtrack",
            "Instrumental",
            "Children's music",
            "Jungle music",
            "J-pop",
            "Experimental music",
            "Christian/Gospel",
            "Post-disco",
            "Dub",
            "Ska",
            "Drum and bass",
            "Electronica",
            "Electronic rock",
          ].map((e) => r.jsx("option", { children: e }, e));
          return r.jsx("select", {
            onChange: (s) => e.onGenreChange(s),
            children: s,
          });
        }
        var l = t(5166),
          c = t(3847),
          d = t(397);
        t(910), t(4942);
        var h = t(1018),
          u = t(9519),
          x = t(4755);
        class m extends i.Component {
          constructor(e) {
            super(e),
              (this.onFileChange = this.onFileChange.bind(this)),
              (this.onArtistChange = this.onArtistChange.bind(this)),
              (this.onGenreChange = this.onGenreChange.bind(this)),
              (this.onSubmit = this.onSubmit.bind(this)),
              (this.state = {
                audioFile: {},
                artist: "",
                genre: "",
                loading: !1,
              });
          }
          onFileChange(e) {
            this.setState({ audioFile: e.target.files[0] });
          }
          onArtistChange(e) {
            this.setState({ artist: e.target.value });
          }
          onGenreChange(e) {
            this.setState({ genre: e.target.value });
          }
          async onSubmit(e) {
            try {
              if (
                (e.preventDefault(),
                this.setState({ loading: !0 }),
                this.state.audioFile &&
                  (this.state.audioFile.name.includes("mp3") ||
                    this.state.audioFile.name.includes("ogg")))
              ) {
                let e = new FormData();
                e.append("file", this.state.audioFile),
                  e.append("user", this.props?.userContext?.email),
                  e.append("userID", this.props?.userContext?.$id),
                  e.append("genre", this.state.genre),
                  e.append("artist", this.state.artist),
                  c.Z.post(
                    "https://echoverse-backend.onrender.com/addAudio",
                    e,
                    {},
                  )
                    .then((e) => {
                      console.log(e),
                        e &&
                          (this.setState({ loading: !1 }),
                          this.props.push("/"));
                    })
                    .catch((e) => {
                      console.error(e), this.setState({ loading: !1 });
                    });
              } else if (this.state.audioFile) {
                l.Am.error(
                  "Incorrect File Uploaded. Please Upload An Audio File",
                );
                return;
              } else {
                l.Am.error("Please Upload a File");
                return;
              }
            } catch (e) {
              console.error(e);
            }
          }
          render() {
            return r.jsx(r.Fragment, {
              children: this.props.searchDisplay
                ? r.jsx(x.default, {})
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      r.jsx(a.Z, {}),
                      r.jsx("section", {
                        className: "main",
                        id: "add",
                        children: this.state.loading
                          ? r.jsx("section", {
                              className: "major",
                              children: r.jsx("h1", { children: "Loading..." }),
                            })
                          : r.jsx("section", {
                              children: (0, r.jsxs)("form", {
                                onSubmit: this.onSubmit,
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "flex column alignItems",
                                    children: [
                                      r.jsx("h1", { children: "Add Audio" }),
                                      r.jsx("label", {
                                        htmlFor: "file",
                                        className: "button large",
                                        children: "Add Audio",
                                      }),
                                      r.jsx("input", {
                                        type: "file",
                                        name: "file",
                                        className: "hidden",
                                        id: "file",
                                        onChange: this.onFileChange,
                                      }),
                                      r.jsx("span", {
                                        children: this.state.audioFile
                                          ? this.state.audioFile.name
                                          : "No File Chosen",
                                      }),
                                      (0, r.jsxs)("section", {
                                        className: "flex justifyBetween inputs",
                                        children: [
                                          r.jsx("input", {
                                            type: "text",
                                            name: "artistName",
                                            onChange: this.onArtistChange,
                                            placeholder: "Add Artist of Song",
                                          }),
                                          r.jsx(o, {
                                            onGenreChange: (e) =>
                                              this.onGenreChange(e),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  r.jsx("div", {
                                    className: "flex justifyContent",
                                    children: r.jsx("button", {
                                      type: "submit",
                                      className: "button large",
                                      children: "Upload Audio",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                      }),
                      r.jsx(n.Z, {}),
                    ],
                  }),
            });
          }
        }
        let p = () => {
          let e = (0, i.useContext)(d.S),
            { push: s } = (0, h.useRouter)(),
            t = (0, u.o)((e) => e.searchDisplay),
            a = (0, u.o)((e) => e.setSearchDisplay);
          return (
            (0, i.useEffect)(() => {
              a(!1);
            }, []),
            r.jsx(m, { searchDisplay: t, userContext: e, push: s })
          );
        };
      },
      4755: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => h });
        var r = t(3854);
        t(910), t(4942);
        var i = t(9519),
          a = t(4808),
          n = t(3092),
          o = t(7868),
          l = t(1855),
          c = t(1759),
          d = t(642);
        function h() {
          let e = (0, i.o)((e) => e.searchResults),
            s = (0, a.Z)("auth"),
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
                          ? (0, n.z)({
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
              r.jsx(o.Z, {}),
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
              r.jsx(l.Z, {}),
            ],
          });
        }
      },
      1855: (e, s, t) => {
        "use strict";
        t.d(s, { Z: () => i });
        var r = t(3854);
        function i() {
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
          i = t(5548),
          a = t.n(i),
          n = t(440),
          o = t(3092),
          l = t(9519),
          c = t(5166);
        function d() {
          let e = (0, l.o)((e) => e.searchValue),
            s = (0, l.o)((e) => e.setSearchValue),
            t = (0, l.o)((e) => e.setSearchResults),
            i = (0, l.o)((e) => e.song),
            a = (0, l.o)((e) => e.listOfSongs),
            n = (0, l.o)((e) => e.setSearchDisplay);
          return (0, r.jsxs)("form", {
            children: [
              r.jsx("input", {
                type: "search",
                onChange: (e) => s(e.target.value),
              }),
              r.jsx(o.z, {
                text: "",
                className: "fa-solid fa-magnifying-glass button",
                onClick: (s) => {
                  s.preventDefault(),
                    (function () {
                      let s = [];
                      i.forEach((t) => {
                        (t?.audio?.toLowerCase().includes(e.toLowerCase()) ||
                          t?.name?.toLowerCase().includes(e.toLowerCase()) ||
                          t?.user?.toLowerCase().includes(e.toLowerCase())) &&
                          s.push(t);
                      }),
                        a.forEach((t) => {
                          (t?.playlistName
                            ?.toLowerCase()
                            .includes(e.toLowerCase()) ||
                            t?.user?.toLowerCase().includes(e.toLowerCase())) &&
                            s.push(t),
                            t.playlistSongs.forEach((r) => {
                              let i = JSON.parse(r);
                              (i?.audio
                                ?.toLowerCase()
                                .includes(e.toLowerCase()) ||
                                i?.name
                                  ?.toLowerCase()
                                  .includes(e.toLowerCase()) ||
                                i?.user
                                  ?.toLowerCase()
                                  .includes(e.toLowerCase())) &&
                                s.push(t);
                            });
                        }),
                        s.length ||
                          (console.log("No Results Match Your Search"),
                          c.Am.error("No Results Match Your Search")),
                        t(s),
                        n(!0);
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
                await n.Z.deleteCurrentSession(),
                window.location.reload(),
                (0, h.redirect)("/");
            } catch (e) {
              console.error(e);
            }
          }
          let s = (0, l.o)((e) => e.setHeaderDisplay),
            t = (0, l.o)((e) => e.headerDisplay),
            i = (0, u.Z)("auth"),
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
                children: r.jsx(a(), {
                  href: "/",
                  children: r.jsx("h1", { children: "EchoStream" }),
                }),
              }),
              (0, o.z)({
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
                      children: r.jsx(a(), { href: "/", children: "Home" }),
                    }),
                    r.jsx("li", {
                      children: r.jsx(a(), {
                        href: "/about",
                        children: "About",
                      }),
                    }),
                    i
                      ? r.jsx("li", {
                          children: r.jsx(a(), {
                            href: "/account",
                            children: "Account",
                          }),
                        })
                      : "",
                    i
                      ? r.jsx("li", {
                          children: r.jsx(a(), {
                            href: "/addAudio",
                            children: "Add Audio",
                          }),
                        })
                      : "",
                    i
                      ? r.jsx("li", {
                          children: r.jsx(a(), {
                            href: "/",
                            onClick: (s) => e(s),
                            children: "Logout",
                          }),
                        })
                      : "",
                    i
                      ? ""
                      : r.jsx("li", {
                          children: r.jsx(a(), {
                            href: "/demo",
                            children: "Demo",
                          }),
                        }),
                    i
                      ? ""
                      : r.jsx("li", {
                          children: r.jsx(a(), {
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
      7499: (e, s, t) => {
        "use strict";
        t.r(s), t.d(s, { default: () => i });
        var r = t(4656);
        function i({ children: e }) {
          return r.jsx("main", { className: "column flex", children: e });
        }
      },
      8322: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, { $$typeof: () => n, __esModule: () => a, default: () => l });
        var r = t(5153);
        let i = (0, r.createProxy)(
            String.raw`C:\Users\richa\OneDrive\Documents\Next EchoStream\app\addAudio\page.tsx`,
          ),
          { __esModule: a, $$typeof: n } = i,
          o = i.default,
          l = o;
      },
      4656: (e, s, t) => {
        "use strict";
        e.exports = t(7096).vendored["react-rsc"].ReactJsxRuntime;
      },
      910: () => {},
      4942: () => {},
    });
  var s = require("../../webpack-runtime.js");
  s.C(e);
  var t = (e) => s((s.s = e)),
    r = s.X(0, [370, 686, 657], () => t(9896));
  module.exports = r;
})();
