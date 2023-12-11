(exports.id = 283),
  (exports.ids = [283]),
  (exports.modules = {
    4755: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => h });
      var l = t(3854);
      t(910), t(4942);
      var r = t(9519),
        a = t(4808),
        n = t(3092),
        i = t(7868),
        o = t(1855),
        c = t(1759),
        d = t(642);
      function h() {
        let e = (0, r.o)((e) => e.searchResults),
          s = (0, a.Z)("auth"),
          t = e.map((e, t) =>
            (0, l.jsxs)(
              "tr",
              {
                children: [
                  l.jsx("td", { children: e.name ? e.name : e.playlistName }),
                  l.jsx("td", {
                    children: e.audio
                      ? l.jsx("button", {
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
                  l.jsx("td", {}),
                  l.jsx("td", { children: e.user }),
                  l.jsx("td", {
                    children: e.audio ? l.jsx(c.Z, { index: t }) : "  ",
                  }),
                  l.jsx("td", {
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
        return (0, l.jsxs)(l.Fragment, {
          children: [
            l.jsx(i.Z, {}),
            l.jsx("section", {
              id: "home",
              className: "main",
              children: (0, l.jsxs)("div", {
                id: "tableContainer",
                children: [
                  l.jsx("h2", { children: "Search Results" }),
                  e.length
                    ? (0, l.jsxs)("table", {
                        children: [
                          l.jsx("thead", {
                            children: (0, l.jsxs)("tr", {
                              children: [
                                l.jsx("th", { children: "Name" }),
                                l.jsx("th", { children: "Play" }),
                                l.jsx("th", {}),
                                l.jsx("th", { children: s ? "" : "User" }),
                                l.jsx("th", { children: "Playlist" }),
                                l.jsx("th", { children: "Delete" }),
                              ],
                            }),
                          }),
                          l.jsx("tbody", { children: t }),
                        ],
                      })
                    : l.jsx("h2", { children: "No Results Match Your Search" }),
                ],
              }),
            }),
            l.jsx(o.Z, {}),
          ],
        });
      }
    },
    1855: (e, s, t) => {
      "use strict";
      t.d(s, { Z: () => r });
      var l = t(3854);
      function r() {
        return l.jsx("footer", {
          className: "flex",
          children: (0, l.jsxs)("nav", {
            className: "flex",
            children: [
              (0, l.jsxs)("ul", {
                className: "flex icons",
                children: [
                  l.jsx("li", {
                    children: l.jsx("a", {
                      rel: "noreferrer",
                      target: "_blank",
                      href: "https://twitter.com/choir241",
                      className: "fa-brands fa-twitter",
                      children: l.jsx("p", {
                        className: "hidden",
                        children: "Twitter",
                      }),
                    }),
                  }),
                  l.jsx("li", {
                    children: l.jsx("a", {
                      rel: "noreferrer",
                      target: "_blank",
                      href: "https://www.linkedin.com/in/richard-choir/",
                      className: "fa-brands fa-linkedin",
                      children: l.jsx("p", {
                        className: "hidden",
                        children: "LinkedIn",
                      }),
                    }),
                  }),
                  l.jsx("li", {
                    children: l.jsx("a", {
                      rel: "noreferrer",
                      target: "_blank",
                      href: "https://www.instagram.com/225kh_drw/?hl=en",
                      className: "fa-brands fa-instagram",
                      children: l.jsx("p", {
                        className: "hidden",
                        children: "Instagram",
                      }),
                    }),
                  }),
                  l.jsx("li", {
                    children: l.jsx("a", {
                      rel: "noreferrer",
                      target: "_blank",
                      href: "https://github.com/choir27",
                      className: "fa-brands fa-github",
                      children: l.jsx("p", {
                        className: "hidden",
                        children: "Github",
                      }),
                    }),
                  }),
                ],
              }),
              l.jsx("small", {
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
      var l = t(3854),
        r = t(5548),
        a = t.n(r),
        n = t(440),
        i = t(3092),
        o = t(9519),
        c = t(5166);
      function d() {
        let e = (0, o.o)((e) => e.searchValue),
          s = (0, o.o)((e) => e.setSearchValue),
          t = (0, o.o)((e) => e.setSearchResults),
          r = (0, o.o)((e) => e.song),
          a = (0, o.o)((e) => e.listOfSongs),
          n = (0, o.o)((e) => e.setSearchDisplay);
        return (0, l.jsxs)("form", {
          children: [
            l.jsx("input", {
              type: "search",
              onChange: (e) => s(e.target.value),
            }),
            l.jsx(i.z, {
              text: "",
              className: "fa-solid fa-magnifying-glass button",
              onClick: (s) => {
                s.preventDefault(),
                  (function () {
                    let s = [];
                    r.forEach((t) => {
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
                          t.playlistSongs.forEach((l) => {
                            let r = JSON.parse(l);
                            (r?.audio
                              ?.toLowerCase()
                              .includes(e.toLowerCase()) ||
                              r?.name
                                ?.toLowerCase()
                                .includes(e.toLowerCase()) ||
                              r?.user
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
        let s = (0, o.o)((e) => e.setHeaderDisplay),
          t = (0, o.o)((e) => e.headerDisplay),
          r = (0, u.Z)("auth"),
          c = `${
            "display" === t
              ? "fa-solid fa-xmark button small hidden"
              : "fa-solid fa-bars button small hidden"
          }`;
        return (0, l.jsxs)("header", {
          className: "flex column",
          id: "header",
          children: [
            l.jsx("div", {
              children: l.jsx(a(), {
                href: "/",
                children: l.jsx("h1", { children: "EchoStream" }),
              }),
            }),
            (0, i.z)({
              text: "",
              className: c,
              id: "menu",
              onClick: () =>
                void ("display" === t ? s("hidden") : s("display")),
            }),
            l.jsx("nav", {
              className: `flex column nav ${t}`,
              children: (0, l.jsxs)("ul", {
                className: "flex navBar",
                children: [
                  l.jsx("li", {
                    children: l.jsx(a(), { href: "/", children: "Home" }),
                  }),
                  l.jsx("li", {
                    children: l.jsx(a(), { href: "/about", children: "About" }),
                  }),
                  r
                    ? l.jsx("li", {
                        children: l.jsx(a(), {
                          href: "/account",
                          children: "Account",
                        }),
                      })
                    : "",
                  r
                    ? l.jsx("li", {
                        children: l.jsx(a(), {
                          href: "/addAudio",
                          children: "Add Audio",
                        }),
                      })
                    : "",
                  r
                    ? l.jsx("li", {
                        children: l.jsx(a(), {
                          href: "/",
                          onClick: (s) => e(s),
                          children: "Logout",
                        }),
                      })
                    : "",
                  r
                    ? ""
                    : l.jsx("li", {
                        children: l.jsx(a(), {
                          href: "/demo",
                          children: "Demo",
                        }),
                      }),
                  r
                    ? ""
                    : l.jsx("li", {
                        children: l.jsx(a(), {
                          href: "/login",
                          children: "Login/Register",
                        }),
                      }),
                  l.jsx("li", { children: l.jsx(d, {}) }),
                ],
              }),
            }),
          ],
        });
      }
    },
    9918: (e, s, t) => {
      "use strict";
      t.d(s, { Z: () => c });
      var l = t(3854),
        r = t(4218),
        a = t(8315);
      t(2052);
      var n = t(9519),
        i = t(3092);
      function o() {
        return (0, i.z)({
          text: "Shuffle",
          className: "button small",
          onClick: (e) =>
            (function () {
              let e = localStorage.getItem("playlist"),
                s = JSON.parse(e),
                t = s.song,
                l = t.length,
                r;
              for (; l > 0; )
                (r = Math.floor(Math.random() * l)),
                  l--,
                  ([t[l], t[r]] = [t[r], t[l]]);
              localStorage.setItem(
                "playlist",
                JSON.stringify({ id: s.id, song: t }),
              ),
                window.location.reload();
            })(),
        });
      }
      function c() {
        let [e, s] = (0, r.useState)(!1),
          [t, i] = (0, r.useState)(0),
          [c, d] = (0, r.useState)([]),
          [h, u] = (0, r.useState)(""),
          x = (0, n.o)((e) => e.song);
        (0, r.useEffect)(() => {
          try {
            if (x.length && !localStorage.getItem("playlist")) {
              let e = localStorage.getItem("song"),
                s = JSON.parse(e),
                t = x.filter((e) => e.audio === s[0]);
              d(t), u(s);
            } else if (localStorage.getItem("playlist")) {
              let e = [],
                s = localStorage.getItem("playlist"),
                t = JSON.parse(s),
                l = new Map(x.map((e) => [e.audio, e]));
              t.song.forEach((s) => {
                let t = l.get(s);
                t && e.push(t);
              }),
                d(e),
                u(t.song);
            }
          } catch (e) {
            console.error(e);
          }
        }, [x]);
        let j = () => {
          i((e) => (e < h.length - 1 ? e + 1 : 0)), s(!0);
        };
        return (0, l.jsxs)("section", {
          id: "player",
          children: [
            l.jsx("section", {
              children: (0, l.jsxs)("section", {
                className: "playerInfo",
                children: [
                  l.jsx("h3", { children: "Currently Playing Song" }),
                  l.jsx("h2", {
                    children: c[t] ? c[t].name : "No music has been added",
                  }),
                  l.jsx(o, {}),
                ],
              }),
            }),
            h.length > 0 &&
              l.jsx(
                a.Z,
                {
                  autoPlay: e,
                  onEnded: j,
                  showSkipControls: !0,
                  showJumpControls: !1,
                  src: h[t],
                  onClickPrevious: () => {
                    i((e) => (0 === e ? h.length - 1 : e - 1)), s(!0);
                  },
                  onClickNext: j,
                  timeFormat: "auto",
                },
                t,
              ),
          ],
        });
      }
    },
    4334: (e, s, t) => {
      "use strict";
      t.d(s, { Z: () => n });
      var l = t(3854),
        r = t(642),
        a = t(3092);
      function n(e) {
        let s = (e.currentPage - 1) * 4,
          t = e.playlist.map((e) => {
            let s = e.playlistSongs.map((e) => {
              let s = JSON.parse(e);
              return s.audio;
            });
            return (0, l.jsxs)(
              "tr",
              {
                children: [
                  l.jsx("td", { children: e.playlistName }),
                  l.jsx("td", {
                    children: l.jsx("button", {
                      className: "button small",
                      onClick: (t) => {
                        t.preventDefault(),
                          localStorage.setItem(
                            "playlist",
                            JSON.stringify({ id: e.$id, song: s }),
                          ),
                          window.location.reload();
                      },
                      children: "Play",
                    }),
                  }),
                  l.jsx("td", {
                    children: (0, a.Z)({
                      text: "Edit",
                      className: "button",
                      domain: `/editPlaylist/${e.$id}`,
                    }),
                  }),
                ],
              },
              e.$id,
            );
          });
        return (0, l.jsxs)("section", {
          children: [
            (0, a.z)({
              className: "button",
              text: "Song",
              onClick: (s) => {
                s.preventDefault(), e.setSongDisplay(!1);
              },
            }),
            (0, a.z)({
              className: "button",
              text: "Playlist",
              onClick: (s) => {
                s.preventDefault(), e.setSongDisplay(!0);
              },
            }),
            e.songDisplay
              ? (0, l.jsxs)("div", {
                  id: "tableContainer",
                  children: [
                    l.jsx("h2", { children: "Playlists" }),
                    (0, l.jsxs)("table", {
                      children: [
                        l.jsx("thead", {
                          children: (0, l.jsxs)("tr", {
                            children: [
                              l.jsx("th", { children: "Name" }),
                              l.jsx("th", { children: "Play" }),
                              l.jsx("th", { children: "Edit" }),
                            ],
                          }),
                        }),
                        l.jsx("tbody", { children: t }),
                      ],
                    }),
                  ],
                })
              : l.jsx(r.ZP, {
                  songs: e.songs,
                  check: !0,
                  startIndex: s,
                  endIndex: s + 4,
                  currentPage: e.currentPage,
                  setCurrentPage: (s) => e.setCurrentPage(s),
                  rowsPerPage: 4,
                }),
          ],
        });
      }
    },
    910: () => {},
    4942: () => {},
  });
