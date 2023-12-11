(exports.id = 657),
  (exports.ids = [657]),
  (exports.modules = {
    1825: () => {},
    9496: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 5));
    },
    9145: (e, t, s) => {
      Promise.resolve().then(s.t.bind(s, 3579, 23)),
        Promise.resolve().then(s.t.bind(s, 619, 23)),
        Promise.resolve().then(s.t.bind(s, 1459, 23)),
        Promise.resolve().then(s.t.bind(s, 3456, 23)),
        Promise.resolve().then(s.t.bind(s, 847, 23)),
        Promise.resolve().then(s.t.bind(s, 7303, 23));
    },
    440: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => n });
      var a = s(8073);
      let r = {
          sdk: null,
          provider: () => {
            if (r.sdk) return r.sdk;
            let e = new a.KU();
            e.setEndpoint("https://cloud.appwrite.io/v1").setProject(
              "64a0712c1618df1be9a2",
            );
            let t = new a.mR(e),
              s = new a.Lg(e),
              n = new a.KU(e),
              l = new a.Ke(e);
            return (
              (r.sdk = { database: s, account: t, client: n, storage: l }),
              r.sdk
            );
          },
          createAccount: (e, t, s) =>
            r.provider().account.create("unique()", e, t, s),
          updateAccountName: (e) => r.provider().account.updateName(e),
          updateAccountPassword: (e, t) =>
            r.provider().account.updatePassword(e, t),
          updateAccountEmail: (e, t) => r.provider().account.updateEmail(e, t),
          getAccount: () => r.provider().account.get(),
          createSession: (e, t) =>
            r.provider().account.createEmailSession(e, t),
          deleteCurrentSession: () =>
            r.provider().account.deleteSession("current"),
          deleteSessions: () => r.provider().account.deleteSessions(),
          createDocument: (e, t, s, a) =>
            r.provider().database.createDocument(e, t, "unique()", s, a),
          listDocuments: (e, t) => r.provider().database.listDocuments(e, t),
          updateDocument: (e, t, s, a) =>
            r.provider().database.updateDocument(e, t, s, a),
          deleteDocument: (e, t, s) =>
            r.provider().database.deleteDocument(e, t, s),
          uploadFile: (e, t) =>
            r
              .provider()
              .storage.createFile(process.env.NEXT_PUBLIC_APP_SONGS, e, t),
          listFiles: () =>
            r.provider().storage.listFiles(process.env.NEXT_PUBLIC_APP_SONGS),
        },
        n = r;
    },
    5: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => u });
      var a = s(3854),
        r = s(4218),
        n = s(9519),
        l = s(283),
        o = s.n(l),
        i = s(642),
        c = s(1759),
        d = s(397);
      function u({ children: e }) {
        let t = (0, n.o)((e) => e.setSong),
          s = (0, n.o)((e) => e.setListOfSongs);
        return (
          (0, r.useEffect)(() => {
            (0, i.AX)((e) => t(e)), (0, c.u)((e) => s(e));
          }, []),
          (0, a.jsxs)("html", {
            lang: "en",
            children: [
              a.jsx("title", { children: "EchoStream" }),
              a.jsx(o(), {
                rel: "preload",
                src: "https://kit.fontawesome.com/d0e0071c1c.js",
                crossOrigin: "anonymous",
              }),
              a.jsx(d.Z, { children: a.jsx("body", { children: e }) }),
            ],
          })
        );
      }
    },
    3092: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => l, z: () => o });
      var a = s(3854),
        r = s(5548),
        n = s.n(r);
      function l(e) {
        return a.jsx(n(), {
          href: e.domain,
          className: e.className,
          children: e.text,
        });
      }
      function o(e) {
        return a.jsx(
          "button",
          {
            id: e.id,
            className: e.className,
            onClick: (t) => e.onClick(t),
            children: e.text,
          },
          e.key,
        );
      }
      s(4218);
    },
    1759: (e, t, s) => {
      "use strict";
      s.d(t, { u: () => h, Z: () => m });
      var a = s(3854),
        r = s(4218),
        n = s(8073),
        l = s(440),
        o = s(3092),
        i = s(9519);
      async function c(e, t) {
        try {
          let s = localStorage.getItem("playlist"),
            a = JSON.parse(s);
          e.$id === a.id &&
            (a.song.push(t.$id),
            localStorage.setItem(
              "playlist",
              JSON.stringify({ id: e.$id, song: a.song }),
            ));
          let r = e.playlistSongs.map((e) => e);
          r.push(JSON.stringify(t)), (e.playlistSongs = r);
          let n = await l.Z.updateDocument(
            "6543e6631929ba50ffd1",
            "6543e8ebf074d567b450",
            e.$id,
            e,
          );
          n && window.location.reload();
        } catch (e) {
          console.error(e);
        }
      }
      function d(e) {
        let t = (0, i.o)((e) => e.listOfSongs),
          s = (0, i.o)((e) => e.song),
          n = t.map((e, t) =>
            a.jsx("option", { value: t, children: e.playlistName }, e.$id),
          ),
          [l, o] = (0, r.useState)({
            $id: "",
            playlistName: "",
            playlistSongs: [""],
            userID: "",
            user: "",
          });
        return (0, a.jsxs)("section", {
          children: [
            (0, a.jsxs)("select", {
              onChange: (e) =>
                o({
                  $id: t[e.target.value]?.$id,
                  playlistName: t[e.target.value]?.playlistName,
                  playlistSongs: t[e.target.value]?.playlistSongs,
                  userID: t[e.target.value]?.userID,
                  user: t[e.target.value]?.user,
                }),
              children: [
                a.jsx("option", { children: "Choose Playlist" }, "0"),
                n,
              ],
            }),
            a.jsx("button", {
              className: "fa-solid fa-plus",
              onClick: (t) => {
                t.preventDefault(), c(l, s[e.index]);
              },
            }),
          ],
        });
      }
      var u = s(397);
      async function h(e) {
        try {
          let t = await l.Z.listDocuments(
            "6543e6631929ba50ffd1",
            "6543e8ebf074d567b450",
          );
          e(t.documents);
        } catch (e) {
          console.error(e);
        }
      }
      function m(e) {
        let [t, s] = (0, r.useState)(!1),
          [i, c] = (0, r.useState)(""),
          h = (0, r.useContext)(u.S);
        return (0, a.jsxs)("section", {
          id: "playlist",
          children: [
            a.jsx("button", {
              className: `${
                t ? "fa-solid fa-xmark black" : "fa-solid fa-plus"
              } button`,
              onClick: (e) => {
                e.preventDefault(), s(!t);
              },
            }),
            t
              ? (function (e, t, s, r, i) {
                  async function c() {
                    try {
                      let t = await l.Z.createDocument(
                        "6543e6631929ba50ffd1",
                        "6543e8ebf074d567b450",
                        {
                          playlistName: e,
                          playlistSongs: [],
                          userID: s,
                          user: r,
                        },
                        [n.y3.read(n.uU.any())],
                      );
                      t && window.location.reload();
                    } catch (e) {
                      console.error(e);
                    }
                  }
                  return (0, a.jsxs)("form", {
                    className: "flex column alignStart",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex alignItems justifyCenter",
                        children: [
                          a.jsx("input", {
                            type: "text",
                            onChange: (e) => t(e.target.value),
                            placeholder: "New Playlist Name",
                          }),
                          (0, o.z)({
                            text: "Create Playlist",
                            className: "",
                            onClick: (e) => {
                              e.preventDefault(), c();
                            },
                          }),
                        ],
                      }),
                      a.jsx(d, { index: i }),
                    ],
                  });
                })(i, (e) => c(e), h?.$id, h?.email, e.index)
              : "",
          ],
        });
      }
    },
    642: (e, t, s) => {
      "use strict";
      s.d(t, { AX: () => d, ZP: () => h, at: () => u });
      var a = s(3854);
      s(4218);
      var r = s(3847),
        n = s(440),
        l = s(3092);
      function o(e) {
        let t = (t) => {
          e.setCurrentPage(t);
        };
        return a.jsx(
          "div",
          {
            className: e.className,
            children:
              Math.ceil(e.arrayLength / e.rowsPerPage) < e.currentPage + 1
                ? Array.from(
                    { length: Math.ceil(e.arrayLength / e.rowsPerPage) },
                    (e, s) =>
                      (0, l.z)({
                        onClick: (e) => {
                          t(s + 1);
                        },
                        text: `${s + 1}`,
                        key: `button-${s}`,
                        className: "button",
                      }),
                  )
                : Array.from(
                    { length: Math.ceil(e.arrayLength / e.rowsPerPage) },
                    (s, r) =>
                      r < e.currentPage - 2 && 0 !== r
                        ? a.jsx("h1", { children: "..." }, `${r}-dots`)
                        : (!(r > e.currentPage + 1) && r < e.currentPage + 1) ||
                            r + 1 === Math.ceil(e.arrayLength / e.rowsPerPage)
                          ? (0, l.z)({
                              onClick: (e) => {
                                t(r + 1);
                              },
                              text: `${r + 1}`,
                              key: `button-${r}`,
                              className: "button",
                            })
                          : a.jsx("h1", { children: "..." }, `${r}-dots`),
                  ),
          },
          "buttons",
        );
      }
      var i = s(1759),
        c = s(4808);
      async function d(e) {
        try {
          let t = await n.Z.listDocuments(
            "64a071efc39bca8c4bc0",
            "64a07cc02481a71b7da8",
          );
          t.documents.length && e(t.documents);
        } catch (e) {
          console.error(e);
        }
      }
      async function u(e, t) {
        try {
          let s = await r.Z.delete(
              `https://echoverse-backend.onrender.com/deleteAudio/${t}`,
            ),
            a = await n.Z.deleteDocument(
              "64a071efc39bca8c4bc0",
              "64a07cc02481a71b7da8",
              e,
            );
          a && s && window.location.reload();
        } catch (e) {
          console.error(e);
        }
      }
      function h(e) {
        let t = (0, c.Z)("auth"),
          s = e.songs.slice(e.startIndex, e.endIndex).map((e, s) =>
            e.user !== t?.toLowerCase()
              ? (0, a.jsxs)(
                  "tr",
                  {
                    children: [
                      a.jsx("td", { children: e.name }),
                      a.jsx("td", {
                        children: a.jsx("button", {
                          className: "button small",
                          onClick: (t) => {
                            t.preventDefault(),
                              localStorage.setItem(
                                "song",
                                JSON.stringify([e.audio]),
                              ),
                              localStorage.setItem("playlist", ""),
                              window.location.reload();
                          },
                          children: "Play",
                        }),
                      }),
                      a.jsx("td", {}),
                      a.jsx("td", { children: e.user }),
                      a.jsx("td", {
                        className: "playlist",
                        children: a.jsx(i.Z, { index: s }),
                      }),
                      a.jsx("td", {
                        children:
                          t?.toLowerCase() === e.user
                            ? (0, l.z)({
                                text: "",
                                className: "fa-solid fa-trash button small",
                                onClick: (t) => u(e.$id, e.cloudinaryId),
                              })
                            : "",
                      }),
                    ],
                  },
                  e.$id,
                )
              : e.user === t?.toLowerCase()
                ? (0, a.jsxs)(
                    "tr",
                    {
                      children: [
                        a.jsx("td", { children: e.name }),
                        a.jsx("td", {
                          children: a.jsx("button", {
                            className: "button small",
                            onClick: (t) => {
                              t.preventDefault(),
                                localStorage.setItem(
                                  "song",
                                  JSON.stringify([e.audio]),
                                ),
                                localStorage.setItem("playlist", ""),
                                window.location.reload();
                            },
                            children: "Play",
                          }),
                        }),
                        a.jsx("td", {}),
                        a.jsx("td", {}),
                        a.jsx("td", {
                          className: "playlist",
                          children: a.jsx(i.Z, { index: s }),
                        }),
                        a.jsx("td", {
                          children: (0, l.z)({
                            text: "",
                            className: "fa-solid fa-trash button small",
                            onClick: (t) => u(e.$id, e.cloudinaryId),
                          }),
                        }),
                      ],
                    },
                    e.$id,
                  )
                : void 0,
          );
        return a.jsx("section", {
          children: (0, a.jsxs)("div", {
            id: "tableContainer",
            children: [
              a.jsx("h2", { children: "Song List" }),
              (0, a.jsxs)("table", {
                children: [
                  a.jsx("thead", {
                    children: (0, a.jsxs)("tr", {
                      children: [
                        a.jsx("th", { children: "Name" }),
                        a.jsx("th", { children: "Play" }),
                        a.jsx("th", {}),
                        a.jsx("th", { children: t ? "" : "User" }),
                        a.jsx("th", { children: "Playlist" }),
                        a.jsx("th", { children: "Delete" }),
                      ],
                    }),
                  }),
                  a.jsx("tbody", { children: s }),
                ],
              }),
              a.jsx(o, {
                currentPage: e.currentPage,
                setCurrentPage: (t) => e.setCurrentPage(t),
                rowsPerPage: e.rowsPerPage,
                arrayLength: e.songs.length,
              }),
            ],
          }),
        });
      }
    },
    397: (e, t, s) => {
      "use strict";
      s.d(t, { S: () => l, Z: () => o });
      var a = s(3854),
        r = s(4218),
        n = s(440);
      let l = (0, r.createContext)({});
      function o({ children: e }) {
        let [t, s] = (0, r.useState)();
        return (
          (0, r.useEffect)(() => {
            async function e() {
              let e = await n.Z.getAccount();
              s(e);
            }
            sessionStorage.getItem("auth") && e();
          }, []),
          a.jsx(l.Provider, { value: t, children: e })
        );
      }
    },
    4808: (e, t, s) => {
      "use strict";
      s.d(t, { Z: () => r });
      var a = s(4218);
      function r(e) {
        let [t, s] = (0, a.useState)("");
        return (
          (0, a.useEffect)(() => {
            s(sessionStorage.getItem(e));
          }, []),
          t
        );
      }
    },
    9519: (e, t, s) => {
      "use strict";
      s.d(t, { o: () => n });
      var a = s(4012),
        r = s(9206);
      let n = (0, a.Ue)((e) => ({
        song: [],
        setSong: (t) => {
          e(
            (0, r.Uy)((e) => {
              e.song = t;
            }),
          );
        },
        listOfSongs: [],
        setListOfSongs: (t) => {
          e(
            (0, r.Uy)((e) => {
              e.listOfSongs = t;
            }),
          );
        },
        searchValue: "",
        setSearchValue: (t) => {
          e(
            (0, r.Uy)((e) => {
              e.searchValue = t;
            }),
          );
        },
        searchResults: [],
        setSearchResults: (t) => {
          e(
            (0, r.Uy)((e) => {
              e.searchResults = t;
            }),
          );
        },
        searchDisplay: !1,
        setSearchDisplay: (t) => {
          e(
            (0, r.Uy)((e) => {
              e.searchDisplay = t;
            }),
          );
        },
        songDisplay: !1,
        setSongDisplay: (t) => {
          e(
            (0, r.Uy)((e) => {
              e.songDisplay = t;
            }),
          );
        },
        headerDisplay: "",
        setHeaderDisplay: (t) => {
          e(
            (0, r.Uy)((e) => {
              e.headerDisplay = t;
            }),
          );
        },
      }));
    },
    5345: (e, t, s) => {
      "use strict";
      s.r(t),
        s.d(t, { $$typeof: () => l, __esModule: () => n, default: () => i });
      var a = s(5153);
      let r = (0, a.createProxy)(
          String.raw`C:\Users\richa\OneDrive\Documents\Next EchoStream\app\layout.tsx`,
        ),
        { __esModule: n, $$typeof: l } = r,
        o = r.default,
        i = o;
    },
  });
