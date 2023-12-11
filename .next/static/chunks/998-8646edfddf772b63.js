(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [998],
  {
    2651: function (e, l, s) {
      "use strict";
      s.r(l),
        s.d(l, {
          default: function () {
            return h;
          },
        });
      var n = s(7437);
      s(8574), s(860);
      var r = s(108),
        a = s(70),
        t = s(6908),
        i = s(2943),
        o = s(8676),
        c = s(6650),
        d = s(9184);
      function h() {
        let e = (0, r.o)((e) => e.searchResults),
          l = (0, a.Z)("auth"),
          s = e.map((e, s) =>
            (0, n.jsxs)(
              "tr",
              {
                children: [
                  (0, n.jsx)("td", {
                    children: e.name ? e.name : e.playlistName,
                  }),
                  (0, n.jsx)("td", {
                    children: e.audio
                      ? (0, n.jsx)("button", {
                          className: "button small",
                          onClick: (l) => {
                            l.preventDefault(),
                              localStorage.setItem("song", e.$id),
                              window.location.reload();
                          },
                          children: "Play",
                        })
                      : "",
                  }),
                  (0, n.jsx)("td", {}),
                  (0, n.jsx)("td", { children: e.user }),
                  (0, n.jsx)("td", {
                    children: e.audio ? (0, n.jsx)(c.Z, { index: s }) : "  ",
                  }),
                  (0, n.jsx)("td", {
                    children:
                      (null == l ? void 0 : l.toLowerCase()) === e.user &&
                      e.audio
                        ? (0, t.z)({
                            text: "",
                            className: "fa-solid fa-trash button small",
                            onClick: (l) => (0, d.at)(e.$id, e.cloudinaryId),
                          })
                        : "",
                  }),
                ],
              },
              "".concat(e.$id, "-").concat(e.name),
            ),
          );
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(i.Z, {}),
            (0, n.jsx)("section", {
              id: "home",
              className: "main",
              children: (0, n.jsxs)("div", {
                id: "tableContainer",
                children: [
                  (0, n.jsx)("h2", { children: "Search Results" }),
                  e.length
                    ? (0, n.jsxs)("table", {
                        children: [
                          (0, n.jsx)("thead", {
                            children: (0, n.jsxs)("tr", {
                              children: [
                                (0, n.jsx)("th", { children: "Name" }),
                                (0, n.jsx)("th", { children: "Play" }),
                                (0, n.jsx)("th", {}),
                                (0, n.jsx)("th", { children: l ? "" : "User" }),
                                (0, n.jsx)("th", { children: "Playlist" }),
                                (0, n.jsx)("th", { children: "Delete" }),
                              ],
                            }),
                          }),
                          (0, n.jsx)("tbody", { children: s }),
                        ],
                      })
                    : (0, n.jsx)("h2", {
                        children: "No Results Match Your Search",
                      }),
                ],
              }),
            }),
            (0, n.jsx)(o.Z, {}),
          ],
        });
      }
    },
    8676: function (e, l, s) {
      "use strict";
      s.d(l, {
        Z: function () {
          return r;
        },
      });
      var n = s(7437);
      function r() {
        return (0, n.jsx)("footer", {
          className: "flex",
          children: (0, n.jsxs)("nav", {
            className: "flex",
            children: [
              (0, n.jsxs)("ul", {
                className: "flex icons",
                children: [
                  (0, n.jsx)("li", {
                    children: (0, n.jsx)("a", {
                      rel: "noreferrer",
                      target: "_blank",
                      href: "https://twitter.com/choir241",
                      className: "fa-brands fa-twitter",
                      children: (0, n.jsx)("p", {
                        className: "hidden",
                        children: "Twitter",
                      }),
                    }),
                  }),
                  (0, n.jsx)("li", {
                    children: (0, n.jsx)("a", {
                      rel: "noreferrer",
                      target: "_blank",
                      href: "https://www.linkedin.com/in/richard-choir/",
                      className: "fa-brands fa-linkedin",
                      children: (0, n.jsx)("p", {
                        className: "hidden",
                        children: "LinkedIn",
                      }),
                    }),
                  }),
                  (0, n.jsx)("li", {
                    children: (0, n.jsx)("a", {
                      rel: "noreferrer",
                      target: "_blank",
                      href: "https://www.instagram.com/225kh_drw/?hl=en",
                      className: "fa-brands fa-instagram",
                      children: (0, n.jsx)("p", {
                        className: "hidden",
                        children: "Instagram",
                      }),
                    }),
                  }),
                  (0, n.jsx)("li", {
                    children: (0, n.jsx)("a", {
                      rel: "noreferrer",
                      target: "_blank",
                      href: "https://github.com/choir27",
                      className: "fa-brands fa-github",
                      children: (0, n.jsx)("p", {
                        className: "hidden",
                        children: "Github",
                      }),
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("small", {
                children: "EchoVerse \xa9 2023. All rights are reserved",
              }),
            ],
          }),
        });
      }
      s(2265);
    },
    2943: function (e, l, s) {
      "use strict";
      s.d(l, {
        Z: function () {
          return x;
        },
      });
      var n = s(7437),
        r = s(1396),
        a = s.n(r),
        t = s(7614),
        i = s(6908),
        o = s(108),
        c = s(171);
      function d() {
        let e = (0, o.o)((e) => e.searchValue),
          l = (0, o.o)((e) => e.setSearchValue),
          s = (0, o.o)((e) => e.setSearchResults),
          r = (0, o.o)((e) => e.song),
          a = (0, o.o)((e) => e.listOfSongs),
          t = (0, o.o)((e) => e.setSearchDisplay);
        return (0, n.jsxs)("form", {
          children: [
            (0, n.jsx)("input", {
              type: "search",
              onChange: (e) => l(e.target.value),
            }),
            (0, n.jsx)(i.z, {
              text: "",
              className: "fa-solid fa-magnifying-glass button",
              onClick: (l) => {
                l.preventDefault(),
                  (function () {
                    let l = [];
                    r.forEach((s) => {
                      var n, r, a;
                      ((null == s
                        ? void 0
                        : null === (n = s.audio) || void 0 === n
                          ? void 0
                          : n.toLowerCase().includes(e.toLowerCase())) ||
                        (null == s
                          ? void 0
                          : null === (r = s.name) || void 0 === r
                            ? void 0
                            : r.toLowerCase().includes(e.toLowerCase())) ||
                        (null == s
                          ? void 0
                          : null === (a = s.user) || void 0 === a
                            ? void 0
                            : a.toLowerCase().includes(e.toLowerCase()))) &&
                        l.push(s);
                    }),
                      a.forEach((s) => {
                        var n, r;
                        ((null == s
                          ? void 0
                          : null === (n = s.playlistName) || void 0 === n
                            ? void 0
                            : n.toLowerCase().includes(e.toLowerCase())) ||
                          (null == s
                            ? void 0
                            : null === (r = s.user) || void 0 === r
                              ? void 0
                              : r.toLowerCase().includes(e.toLowerCase()))) &&
                          l.push(s),
                          s.playlistSongs.forEach((n) => {
                            var r, a, t;
                            let i = JSON.parse(n);
                            ((null == i
                              ? void 0
                              : null === (r = i.audio) || void 0 === r
                                ? void 0
                                : r.toLowerCase().includes(e.toLowerCase())) ||
                              (null == i
                                ? void 0
                                : null === (a = i.name) || void 0 === a
                                  ? void 0
                                  : a
                                      .toLowerCase()
                                      .includes(e.toLowerCase())) ||
                              (null == i
                                ? void 0
                                : null === (t = i.user) || void 0 === t
                                  ? void 0
                                  : t
                                      .toLowerCase()
                                      .includes(e.toLowerCase()))) &&
                              l.push(s);
                          });
                      }),
                      l.length ||
                        (console.log("No Results Match Your Search"),
                        c.Am.error("No Results Match Your Search")),
                      s(l),
                      t(!0);
                  })();
              },
            }),
          ],
        });
      }
      var h = s(4033),
        u = s(70);
      function x() {
        async function e(e) {
          try {
            e.preventDefault(),
              sessionStorage.removeItem("auth"),
              await t.Z.deleteCurrentSession(),
              window.location.reload(),
              (0, h.redirect)("/");
          } catch (e) {
            console.error(e);
          }
        }
        let l = (0, o.o)((e) => e.setHeaderDisplay),
          s = (0, o.o)((e) => e.headerDisplay),
          r = (0, u.Z)("auth");
        return (0, n.jsxs)("header", {
          className: "flex column",
          id: "header",
          children: [
            (0, n.jsx)("div", {
              children: (0, n.jsx)(a(), {
                href: "/",
                children: (0, n.jsx)("h1", { children: "EchoStream" }),
              }),
            }),
            (0, i.z)({
              text: "",
              className: "".concat(
                "display" === s
                  ? "fa-solid fa-xmark button small hidden"
                  : "fa-solid fa-bars button small hidden",
              ),
              id: "menu",
              onClick: () =>
                void ("display" === s ? l("hidden") : l("display")),
            }),
            (0, n.jsx)("nav", {
              className: "flex column nav ".concat(s),
              children: (0, n.jsxs)("ul", {
                className: "flex navBar",
                children: [
                  (0, n.jsx)("li", {
                    children: (0, n.jsx)(a(), { href: "/", children: "Home" }),
                  }),
                  (0, n.jsx)("li", {
                    children: (0, n.jsx)(a(), {
                      href: "/about",
                      children: "About",
                    }),
                  }),
                  r
                    ? (0, n.jsx)("li", {
                        children: (0, n.jsx)(a(), {
                          href: "/account",
                          children: "Account",
                        }),
                      })
                    : "",
                  r
                    ? (0, n.jsx)("li", {
                        children: (0, n.jsx)(a(), {
                          href: "/addAudio",
                          children: "Add Audio",
                        }),
                      })
                    : "",
                  r
                    ? (0, n.jsx)("li", {
                        children: (0, n.jsx)(a(), {
                          href: "/",
                          onClick: (l) => e(l),
                          children: "Logout",
                        }),
                      })
                    : "",
                  r
                    ? ""
                    : (0, n.jsx)("li", {
                        children: (0, n.jsx)(a(), {
                          href: "/demo",
                          children: "Demo",
                        }),
                      }),
                  r
                    ? ""
                    : (0, n.jsx)("li", {
                        children: (0, n.jsx)(a(), {
                          href: "/login",
                          children: "Login/Register",
                        }),
                      }),
                  (0, n.jsx)("li", { children: (0, n.jsx)(d, {}) }),
                ],
              }),
            }),
          ],
        });
      }
    },
    7598: function (e, l, s) {
      "use strict";
      s.d(l, {
        Z: function () {
          return c;
        },
      });
      var n = s(7437),
        r = s(2265),
        a = s(9485);
      s(9234);
      var t = s(108),
        i = s(6908);
      function o() {
        return (0, i.z)({
          text: "Shuffle",
          className: "button small",
          onClick: (e) =>
            (function () {
              let e = localStorage.getItem("playlist"),
                l = JSON.parse(e),
                s = l.song,
                n = s.length,
                r;
              for (; n > 0; )
                (r = Math.floor(Math.random() * n)),
                  n--,
                  ([s[n], s[r]] = [s[r], s[n]]);
              localStorage.setItem(
                "playlist",
                JSON.stringify({ id: l.id, song: s }),
              ),
                window.location.reload();
            })(),
        });
      }
      function c() {
        let [e, l] = (0, r.useState)(!1),
          [s, i] = (0, r.useState)(0),
          [c, d] = (0, r.useState)([]),
          [h, u] = (0, r.useState)(""),
          x = (0, t.o)((e) => e.song);
        (0, r.useEffect)(() => {
          try {
            if (x.length && !localStorage.getItem("playlist")) {
              let e = localStorage.getItem("song"),
                l = JSON.parse(e),
                s = x.filter((e) => e.audio === l[0]);
              d(s), u(l);
            } else if (localStorage.getItem("playlist")) {
              let e = [],
                l = localStorage.getItem("playlist"),
                s = JSON.parse(l),
                n = new Map(x.map((e) => [e.audio, e]));
              s.song.forEach((l) => {
                let s = n.get(l);
                s && e.push(s);
              }),
                d(e),
                u(s.song);
            }
          } catch (e) {
            console.error(e);
          }
        }, [x]);
        let f = () => {
          i((e) => (e < h.length - 1 ? e + 1 : 0)), l(!0);
        };
        return (0, n.jsxs)("section", {
          id: "player",
          children: [
            (0, n.jsx)("section", {
              children: (0, n.jsxs)("section", {
                className: "playerInfo",
                children: [
                  (0, n.jsx)("h3", { children: "Currently Playing Song" }),
                  (0, n.jsx)("h2", {
                    children: c[s] ? c[s].name : "No music has been added",
                  }),
                  (0, n.jsx)(o, {}),
                ],
              }),
            }),
            h.length > 0 &&
              (0, n.jsx)(
                a.Z,
                {
                  autoPlay: e,
                  onEnded: f,
                  showSkipControls: !0,
                  showJumpControls: !1,
                  src: h[s],
                  onClickPrevious: () => {
                    i((e) => (0 === e ? h.length - 1 : e - 1)), l(!0);
                  },
                  onClickNext: f,
                  timeFormat: "auto",
                },
                s,
              ),
          ],
        });
      }
    },
    8574: function () {},
    860: function () {},
  },
]);
