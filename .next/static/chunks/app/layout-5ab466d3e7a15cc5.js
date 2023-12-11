(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    5060: function (n, e, s) {
      Promise.resolve().then(s.bind(s, 7981));
    },
    7981: function (n, e, s) {
      "use strict";
      s.r(e),
        s.d(e, {
          default: function () {
            return h;
          },
        });
      var t = s(7437),
        o = s(2265),
        r = s(108),
        c = s(8475),
        i = s.n(c),
        u = s(9184),
        l = s(6650),
        f = s(9211);
      function h(n) {
        let { children: e } = n,
          s = (0, r.o)((n) => n.setSong),
          c = (0, r.o)((n) => n.setListOfSongs);
        return (
          (0, o.useEffect)(() => {
            (0, u.AX)((n) => s(n)), (0, l.u)((n) => c(n));
          }, []),
          (0, t.jsxs)("html", {
            lang: "en",
            children: [
              (0, t.jsx)("title", { children: "EchoStream" }),
              (0, t.jsx)(i(), {
                rel: "preload",
                src: "https://kit.fontawesome.com/d0e0071c1c.js",
                crossOrigin: "anonymous",
              }),
              (0, t.jsx)(f.Z, {
                children: (0, t.jsx)("body", { children: e }),
              }),
            ],
          })
        );
      }
    },
  },
  function (n) {
    n.O(0, [650, 475, 184, 971, 472, 744], function () {
      return n((n.s = 5060));
    }),
      (_N_E = n.O());
  },
]);
