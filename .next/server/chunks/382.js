(exports.id = 382),
  (exports.ids = [382]),
  (exports.modules = {
    8315: (e, t, n) => {
      "use strict";
      let r;
      n.d(t, { Z: () => eN });
      var o = n(7538),
        i = n.n(o),
        s = n(4218),
        a = n.n(s);
      let l = /^[a-z0-9]+(-[a-z0-9]+)*$/,
        u = (e, t, n, r = "") => {
          let o = e.split(":");
          if ("@" === e.slice(0, 1)) {
            if (o.length < 2 || o.length > 3) return null;
            r = o.shift().slice(1);
          }
          if (o.length > 3 || !o.length) return null;
          if (o.length > 1) {
            let e = o.pop(),
              n = o.pop(),
              i = { provider: o.length > 0 ? o[0] : r, prefix: n, name: e };
            return t && !d(i) ? null : i;
          }
          let i = o[0],
            s = i.split("-");
          if (s.length > 1) {
            let e = { provider: r, prefix: s.shift(), name: s.join("-") };
            return t && !d(e) ? null : e;
          }
          if (n && "" === r) {
            let e = { provider: r, prefix: "", name: i };
            return t && !d(e, n) ? null : e;
          }
          return null;
        },
        d = (e, t) =>
          !!e &&
          !!(
            ("" === e.provider || e.provider.match(l)) &&
            ((t && "" === e.prefix) || e.prefix.match(l)) &&
            e.name.match(l)
          ),
        h = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
        c = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
        p = Object.freeze({ ...h, ...c }),
        m = Object.freeze({ ...p, body: "", hidden: !1 });
      function f(e, t) {
        let n = (function (e, t) {
          let n = {};
          !e.hFlip != !t.hFlip && (n.hFlip = !0),
            !e.vFlip != !t.vFlip && (n.vFlip = !0);
          let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
          return r && (n.rotate = r), n;
        })(e, t);
        for (let r in m)
          r in c
            ? r in e && !(r in n) && (n[r] = c[r])
            : r in t
              ? (n[r] = t[r])
              : r in e && (n[r] = e[r]);
        return n;
      }
      let g = { provider: "", aliases: {}, not_found: {}, ...h };
      function v(e, t) {
        for (let n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
        return !0;
      }
      let E = Object.create(null);
      function b(e, t) {
        let n = E[e] || (E[e] = Object.create(null));
        return (
          n[t] ||
          (n[t] = {
            provider: e,
            prefix: t,
            icons: Object.create(null),
            missing: new Set(),
          })
        );
      }
      function w(e, t) {
        return !(function (e) {
          if (
            "object" != typeof e ||
            null === e ||
            "string" != typeof e.prefix ||
            !e.icons ||
            "object" != typeof e.icons ||
            !v(e, g)
          )
            return null;
          let t = e.icons;
          for (let e in t) {
            let n = t[e];
            if (!e.match(l) || "string" != typeof n.body || !v(n, m))
              return null;
          }
          let n = e.aliases || Object.create(null);
          for (let e in n) {
            let r = n[e],
              o = r.parent;
            if (
              !e.match(l) ||
              "string" != typeof o ||
              (!t[o] && !n[o]) ||
              !v(r, m)
            )
              return null;
          }
          return e;
        })(t)
          ? []
          : (function (e, t) {
              let n = [];
              if ("object" != typeof e || "object" != typeof e.icons) return n;
              e.not_found instanceof Array &&
                e.not_found.forEach((e) => {
                  t(e, null), n.push(e);
                });
              let r = (function (e, t) {
                let n = e.icons,
                  r = e.aliases || Object.create(null),
                  o = Object.create(null);
                return (
                  Object.keys(n)
                    .concat(Object.keys(r))
                    .forEach(function e(t) {
                      if (n[t]) return (o[t] = []);
                      if (!(t in o)) {
                        o[t] = null;
                        let n = r[t] && r[t].parent,
                          i = n && e(n);
                        i && (o[t] = [n].concat(i));
                      }
                      return o[t];
                    }),
                  o
                );
              })(e);
              for (let o in r) {
                let i = r[o];
                i &&
                  (t(
                    o,
                    (function (e, t, n) {
                      let r = e.icons,
                        o = e.aliases || Object.create(null),
                        i = {};
                      function s(e) {
                        i = f(r[e] || o[e], i);
                      }
                      return s(t), n.forEach(s), f(e, i);
                    })(e, o, i),
                  ),
                  n.push(o));
              }
              return n;
            })(t, (t, n) => {
              n ? (e.icons[t] = n) : e.missing.add(t);
            });
      }
      let y = !1;
      function T(e) {
        return "boolean" == typeof e && (y = e), y;
      }
      let L = Object.freeze({ width: null, height: null }),
        M = Object.freeze({ ...L, ...c }),
        C = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
        _ = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
      function A(e, t, n) {
        if (1 === t) return e;
        if (((n = n || 100), "number" == typeof e))
          return Math.ceil(e * t * n) / n;
        if ("string" != typeof e) return e;
        let r = e.split(C);
        if (null === r || !r.length) return e;
        let o = [],
          i = r.shift(),
          s = _.test(i);
        for (;;) {
          if (s) {
            let e = parseFloat(i);
            isNaN(e) ? o.push(i) : o.push(Math.ceil(e * t * n) / n);
          } else o.push(i);
          if (void 0 === (i = r.shift())) return o.join("");
          s = !s;
        }
      }
      let O = (e) => "unset" === e || "undefined" === e || "none" === e,
        x = /\sid="(\S+)"/g,
        S =
          "IconifyId" +
          Date.now().toString(16) +
          ((16777216 * Math.random()) | 0).toString(16),
        k = 0,
        D = Object.create(null);
      function P(e) {
        return D[e] || D[""];
      }
      function N(e) {
        let t;
        if ("string" == typeof e.resources) t = [e.resources];
        else if (!((t = e.resources) instanceof Array) || !t.length)
          return null;
        let n = {
          resources: t,
          path: e.path || "/",
          maxURL: e.maxURL || 500,
          rotate: e.rotate || 750,
          timeout: e.timeout || 5e3,
          random: !0 === e.random,
          index: e.index || 0,
          dataAfterTimeout: !1 !== e.dataAfterTimeout,
        };
        return n;
      }
      let U = Object.create(null),
        R = ["https://api.simplesvg.com", "https://api.unisvg.com"],
        I = [];
      for (; R.length > 0; )
        1 === R.length
          ? I.push(R.shift())
          : Math.random() > 0.5
            ? I.push(R.shift())
            : I.push(R.pop());
      U[""] = N({ resources: ["https://api.iconify.design"].concat(I) });
      let F = (() => {
        let e;
        try {
          if (((e = fetch), "function" == typeof e)) return e;
        } catch (e) {}
      })();
      function V(e, t) {
        e.forEach((e) => {
          let n = e.loaderCallbacks;
          n && (e.loaderCallbacks = n.filter((e) => e.id !== t));
        });
      }
      let j = 0;
      var B = {
        resources: [],
        index: 0,
        timeout: 2e3,
        rotate: 750,
        random: !1,
        dataAfterTimeout: !1,
      };
      function W(e) {
        let t = { ...B, ...e },
          n = [];
        function r() {
          n = n.filter((e) => "pending" === e().status);
        }
        return {
          query: function (e, o, i) {
            let s = (function (e, t, n, r) {
              let o, i;
              let s = e.resources.length,
                a = e.random ? Math.floor(Math.random() * s) : e.index;
              if (e.random) {
                let t = e.resources.slice(0);
                for (o = []; t.length > 1; ) {
                  let e = Math.floor(Math.random() * t.length);
                  o.push(t[e]), (t = t.slice(0, e).concat(t.slice(e + 1)));
                }
                o = o.concat(t);
              } else o = e.resources.slice(a).concat(e.resources.slice(0, a));
              let l = Date.now(),
                u = "pending",
                d = 0,
                h = null,
                c = [],
                p = [];
              function m() {
                h && (clearTimeout(h), (h = null));
              }
              function f() {
                "pending" === u && (u = "aborted"),
                  m(),
                  c.forEach((e) => {
                    "pending" === e.status && (e.status = "aborted");
                  }),
                  (c = []);
              }
              function g(e, t) {
                t && (p = []), "function" == typeof e && p.push(e);
              }
              function v() {
                (u = "failed"),
                  p.forEach((e) => {
                    e(void 0, i);
                  });
              }
              function E() {
                c.forEach((e) => {
                  "pending" === e.status && (e.status = "aborted");
                }),
                  (c = []);
              }
              return (
                "function" == typeof r && p.push(r),
                setTimeout(function r() {
                  if ("pending" !== u) return;
                  m();
                  let s = o.shift();
                  if (void 0 === s) {
                    if (c.length) {
                      h = setTimeout(() => {
                        m(), "pending" === u && (E(), v());
                      }, e.timeout);
                      return;
                    }
                    v();
                    return;
                  }
                  let a = {
                    status: "pending",
                    resource: s,
                    callback: (t, n) => {
                      !(function (t, n, s) {
                        let a = "success" !== n;
                        switch (((c = c.filter((e) => e !== t)), u)) {
                          case "pending":
                            break;
                          case "failed":
                            if (a || !e.dataAfterTimeout) return;
                            break;
                          default:
                            return;
                        }
                        if ("abort" === n) {
                          (i = s), v();
                          return;
                        }
                        if (a) {
                          (i = s), c.length || (o.length ? r() : v());
                          return;
                        }
                        if ((m(), E(), !e.random)) {
                          let n = e.resources.indexOf(t.resource);
                          -1 !== n && n !== e.index && (e.index = n);
                        }
                        (u = "completed"),
                          p.forEach((e) => {
                            e(s);
                          });
                      })(a, t, n);
                    },
                  };
                  c.push(a),
                    d++,
                    (h = setTimeout(r, e.rotate)),
                    n(s, t, a.callback);
                }),
                function () {
                  return {
                    startTime: l,
                    payload: t,
                    status: u,
                    queriesSent: d,
                    queriesPending: c.length,
                    subscribe: g,
                    abort: f,
                  };
                }
              );
            })(t, e, o, (e, t) => {
              r(), i && i(e, t);
            });
            return n.push(s), s;
          },
          find: function (e) {
            return n.find((t) => e(t)) || null;
          },
          setIndex: (e) => {
            t.index = e;
          },
          getIndex: () => t.index,
          cleanup: r,
        };
      }
      let $ = Object.create(null),
        z = "iconify2",
        J = "iconify",
        H = J + "-count",
        G = J + "-version";
      function K(e, t) {
        try {
          return e.getItem(t);
        } catch (e) {}
      }
      function q(e, t, n) {
        try {
          return e.setItem(t, n), !0;
        } catch (e) {}
      }
      function Q(e, t) {
        try {
          e.removeItem(t);
        } catch (e) {}
      }
      function X(e, t) {
        return q(e, H, t.toString());
      }
      function Z(e) {
        return parseInt(K(e, H)) || 0;
      }
      let Y = { local: !0, session: !0 },
        ee = { local: new Set(), session: new Set() },
        et = !1,
        en = {};
      function er(e) {
        let t = e + "Storage";
        try {
          if (en && en[t] && "number" == typeof en[t].length) return en[t];
        } catch (e) {}
        Y[e] = !1;
      }
      function eo(e, t) {
        let n = er(e);
        if (!n) return;
        let r = K(n, G);
        if (r !== z) {
          if (r) {
            let e = Z(n);
            for (let t = 0; t < e; t++) Q(n, J + t.toString());
          }
          q(n, G, z), X(n, 0);
          return;
        }
        let o = Math.floor(Date.now() / 36e5) - 168,
          i = (e) => {
            let r = J + e.toString(),
              i = K(n, r);
            if ("string" == typeof i) {
              try {
                let n = JSON.parse(i);
                if (
                  "object" == typeof n &&
                  "number" == typeof n.cached &&
                  n.cached > o &&
                  "string" == typeof n.provider &&
                  "object" == typeof n.data &&
                  "string" == typeof n.data.prefix &&
                  t(n, e)
                )
                  return !0;
              } catch (e) {}
              Q(n, r);
            }
          },
          s = Z(n);
        for (let t = s - 1; t >= 0; t--)
          i(t) || (t === s - 1 ? X(n, --s) : ee[e].add(t));
      }
      function ei() {}
      let es = (e, t) => {
          let n, r;
          let o = (function (e, t = !0, n = !1) {
              let r = [];
              return (
                e.forEach((e) => {
                  let o = "string" == typeof e ? u(e, t, n) : e;
                  o && r.push(o);
                }),
                r
              );
            })(e, !0, T()),
            i = (function (e) {
              let t = { loaded: [], missing: [], pending: [] },
                n = Object.create(null);
              e.sort((e, t) =>
                e.provider !== t.provider
                  ? e.provider.localeCompare(t.provider)
                  : e.prefix !== t.prefix
                    ? e.prefix.localeCompare(t.prefix)
                    : e.name.localeCompare(t.name),
              );
              let r = { provider: "", prefix: "", name: "" };
              return (
                e.forEach((e) => {
                  if (
                    r.name === e.name &&
                    r.prefix === e.prefix &&
                    r.provider === e.provider
                  )
                    return;
                  r = e;
                  let o = e.provider,
                    i = e.prefix,
                    s = e.name,
                    a = n[o] || (n[o] = Object.create(null)),
                    l = a[i] || (a[i] = b(o, i));
                  (s in l.icons
                    ? t.loaded
                    : "" === i || l.missing.has(s)
                      ? t.missing
                      : t.pending
                  ).push({ provider: o, prefix: i, name: s });
                }),
                t
              );
            })(o);
          if (!i.pending.length) {
            let e = !0;
            return (
              t &&
                setTimeout(() => {
                  e && t(i.loaded, i.missing, i.pending, ei);
                }),
              () => {
                e = !1;
              }
            );
          }
          let s = Object.create(null),
            a = [];
          return (
            i.pending.forEach((e) => {
              let { provider: t, prefix: o } = e;
              if (o === r && t === n) return;
              (n = t), (r = o), a.push(b(t, o));
              let i = s[t] || (s[t] = Object.create(null));
              i[o] || (i[o] = []);
            }),
            i.pending.forEach((e) => {
              let { provider: t, prefix: n, name: r } = e,
                o = b(t, n),
                i = o.pendingIcons || (o.pendingIcons = new Set());
              i.has(r) || (i.add(r), s[t][n].push(r));
            }),
            a.forEach((e) => {
              let { provider: t, prefix: n } = e;
              s[t][n].length &&
                (function (e, t) {
                  e.iconsToLoad
                    ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort())
                    : (e.iconsToLoad = t),
                    e.iconsQueueFlag ||
                      ((e.iconsQueueFlag = !0),
                      setTimeout(() => {
                        let t;
                        e.iconsQueueFlag = !1;
                        let { provider: n, prefix: r } = e,
                          o = e.iconsToLoad;
                        if ((delete e.iconsToLoad, !o || !(t = P(n)))) return;
                        let i = t.prepare(n, r, o);
                        i.forEach((t) => {
                          !(function (e, t, n) {
                            let r, o;
                            if ("string" == typeof e) {
                              let t = P(e);
                              if (!t) return n(void 0, 424);
                              o = t.send;
                              let i = (function (e) {
                                if (!$[e]) {
                                  let t = U[e];
                                  if (!t) return;
                                  let n = W(t);
                                  $[e] = { config: t, redundancy: n };
                                }
                                return $[e];
                              })(e);
                              i && (r = i.redundancy);
                            } else {
                              let t = N(e);
                              if (t) {
                                r = W(t);
                                let n = e.resources ? e.resources[0] : "",
                                  i = P(n);
                                i && (o = i.send);
                              }
                            }
                            r && o ? r.query(t, o, n)().abort : n(void 0, 424);
                          })(n, t, (n) => {
                            if ("object" != typeof n)
                              t.icons.forEach((t) => {
                                e.missing.add(t);
                              });
                            else
                              try {
                                let t = w(e, n);
                                if (!t.length) return;
                                let r = e.pendingIcons;
                                r &&
                                  t.forEach((e) => {
                                    r.delete(e);
                                  }),
                                  (function (e, t) {
                                    function n(n) {
                                      let r, o;
                                      if (!Y[n] || !(r = er(n))) return;
                                      let i = ee[n];
                                      if (i.size)
                                        i.delete((o = Array.from(i).shift()));
                                      else if (((o = Z(r)), !X(r, o + 1)))
                                        return;
                                      let s = {
                                        cached: Math.floor(Date.now() / 36e5),
                                        provider: e.provider,
                                        data: t,
                                      };
                                      return q(
                                        r,
                                        J + o.toString(),
                                        JSON.stringify(s),
                                      );
                                    }
                                    et ||
                                      (function () {
                                        if (!et)
                                          for (let e in ((et = !0), Y))
                                            eo(e, (e) => {
                                              let t = e.data,
                                                n = e.provider,
                                                r = t.prefix,
                                                o = b(n, r);
                                              if (!w(o, t).length) return !1;
                                              let i = t.lastModified || -1;
                                              return (
                                                (o.lastModifiedCached =
                                                  o.lastModifiedCached
                                                    ? Math.min(
                                                        o.lastModifiedCached,
                                                        i,
                                                      )
                                                    : i),
                                                !0
                                              );
                                            });
                                      })(),
                                      (!t.lastModified ||
                                        (function (e, t) {
                                          let n = e.lastModifiedCached;
                                          if (n && n >= t) return n === t;
                                          if (((e.lastModifiedCached = t), n))
                                            for (let n in Y)
                                              eo(n, (n) => {
                                                let r = n.data;
                                                return (
                                                  n.provider !== e.provider ||
                                                  r.prefix !== e.prefix ||
                                                  r.lastModified === t
                                                );
                                              });
                                          return !0;
                                        })(e, t.lastModified)) &&
                                        Object.keys(t.icons).length &&
                                        (t.not_found &&
                                          ((t = Object.assign({}, t)),
                                          delete t.not_found),
                                        n("local") || n("session"));
                                  })(e, n);
                              } catch (e) {
                                console.error(e);
                              }
                            e.iconsLoaderFlag ||
                              ((e.iconsLoaderFlag = !0),
                              setTimeout(() => {
                                (e.iconsLoaderFlag = !1),
                                  e.pendingCallbacksFlag ||
                                    ((e.pendingCallbacksFlag = !0),
                                    setTimeout(() => {
                                      e.pendingCallbacksFlag = !1;
                                      let t = e.loaderCallbacks
                                        ? e.loaderCallbacks.slice(0)
                                        : [];
                                      if (!t.length) return;
                                      let n = !1,
                                        r = e.provider,
                                        o = e.prefix;
                                      t.forEach((t) => {
                                        let i = t.icons,
                                          s = i.pending.length;
                                        (i.pending = i.pending.filter((t) => {
                                          if (t.prefix !== o) return !0;
                                          let s = t.name;
                                          if (e.icons[s])
                                            i.loaded.push({
                                              provider: r,
                                              prefix: o,
                                              name: s,
                                            });
                                          else {
                                            if (!e.missing.has(s))
                                              return (n = !0), !0;
                                            i.missing.push({
                                              provider: r,
                                              prefix: o,
                                              name: s,
                                            });
                                          }
                                          return !1;
                                        })),
                                          i.pending.length !== s &&
                                            (n || V([e], t.id),
                                            t.callback(
                                              i.loaded.slice(0),
                                              i.missing.slice(0),
                                              i.pending.slice(0),
                                              t.abort,
                                            ));
                                      });
                                    }));
                              }));
                          });
                        });
                      }));
                })(e, s[t][n]);
            }),
            t
              ? (function (e, t, n) {
                  let r = j++,
                    o = V.bind(null, n, r);
                  if (!t.pending.length) return o;
                  let i = { id: r, icons: t, callback: e, abort: o };
                  return (
                    n.forEach((e) => {
                      (e.loaderCallbacks || (e.loaderCallbacks = [])).push(i);
                    }),
                    o
                  );
                })(t, i, a)
              : ei
          );
        },
        ea = /[\s,]+/,
        el = { ...M, inline: !1 },
        eu = {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          "aria-hidden": !0,
          role: "img",
        },
        ed = { display: "inline-block" },
        eh = { backgroundColor: "currentColor" },
        ec = { backgroundColor: "transparent" },
        ep = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
        em = { WebkitMask: eh, mask: eh, background: ec };
      for (let e in em) {
        let t = em[e];
        for (let n in ep) t[e + n] = ep[n];
      }
      let ef = { ...el, inline: !0 };
      function eg(e) {
        return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
      }
      let ev = (e, t, n, o) => {
        let i = n ? ef : el,
          a = (function (e, t) {
            let n = { ...e };
            for (let e in t) {
              let r = t[e],
                o = typeof r;
              e in L
                ? (null === r || (r && ("string" === o || "number" === o))) &&
                  (n[e] = r)
                : o === typeof n[e] && (n[e] = "rotate" === e ? r % 4 : r);
            }
            return n;
          })(i, t),
          l = t.mode || "svg",
          u = {},
          d = t.style || {},
          h = { ...("svg" === l ? eu : {}), ref: o };
        for (let e in t) {
          let n = t[e];
          if (void 0 !== n)
            switch (e) {
              case "icon":
              case "style":
              case "children":
              case "onLoad":
              case "mode":
              case "_ref":
              case "_inline":
                break;
              case "inline":
              case "hFlip":
              case "vFlip":
                a[e] = !0 === n || "true" === n || 1 === n;
                break;
              case "flip":
                "string" == typeof n &&
                  (function (e, t) {
                    t.split(ea).forEach((t) => {
                      let n = t.trim();
                      switch (n) {
                        case "horizontal":
                          e.hFlip = !0;
                          break;
                        case "vertical":
                          e.vFlip = !0;
                      }
                    });
                  })(a, n);
                break;
              case "color":
                u.color = n;
                break;
              case "rotate":
                "string" == typeof n
                  ? (a[e] = (function (e, t = 0) {
                      let n = e.replace(/^-?[0-9.]*/, "");
                      function r(e) {
                        for (; e < 0; ) e += 4;
                        return e % 4;
                      }
                      if ("" === n) {
                        let t = parseInt(e);
                        return isNaN(t) ? 0 : r(t);
                      }
                      if (n !== e) {
                        let t = 0;
                        switch (n) {
                          case "%":
                            t = 25;
                            break;
                          case "deg":
                            t = 90;
                        }
                        if (t) {
                          let o = parseFloat(e.slice(0, e.length - n.length));
                          return isNaN(o) ? 0 : (o /= t) % 1 == 0 ? r(o) : 0;
                        }
                      }
                      return t;
                    })(n))
                  : "number" == typeof n && (a[e] = n);
                break;
              case "ariaHidden":
              case "aria-hidden":
                !0 !== n && "true" !== n && delete h["aria-hidden"];
                break;
              default:
                void 0 === i[e] && (h[e] = n);
            }
        }
        let c = (function (e, t) {
            let n, r;
            let o = { ...p, ...e },
              i = { ...M, ...t },
              s = {
                left: o.left,
                top: o.top,
                width: o.width,
                height: o.height,
              },
              a = o.body;
            [o, i].forEach((e) => {
              let t;
              let n = [],
                r = e.hFlip,
                o = e.vFlip,
                i = e.rotate;
              switch (
                (r
                  ? o
                    ? (i += 2)
                    : (n.push(
                        "translate(" +
                          (s.width + s.left).toString() +
                          " " +
                          (0 - s.top).toString() +
                          ")",
                      ),
                      n.push("scale(-1 1)"),
                      (s.top = s.left = 0))
                  : o &&
                    (n.push(
                      "translate(" +
                        (0 - s.left).toString() +
                        " " +
                        (s.height + s.top).toString() +
                        ")",
                    ),
                    n.push("scale(1 -1)"),
                    (s.top = s.left = 0)),
                i < 0 && (i -= 4 * Math.floor(i / 4)),
                (i %= 4))
              ) {
                case 1:
                  n.unshift(
                    "rotate(90 " +
                      (t = s.height / 2 + s.top).toString() +
                      " " +
                      t.toString() +
                      ")",
                  );
                  break;
                case 2:
                  n.unshift(
                    "rotate(180 " +
                      (s.width / 2 + s.left).toString() +
                      " " +
                      (s.height / 2 + s.top).toString() +
                      ")",
                  );
                  break;
                case 3:
                  n.unshift(
                    "rotate(-90 " +
                      (t = s.width / 2 + s.left).toString() +
                      " " +
                      t.toString() +
                      ")",
                  );
              }
              i % 2 == 1 &&
                (s.left !== s.top &&
                  ((t = s.left), (s.left = s.top), (s.top = t)),
                s.width !== s.height &&
                  ((t = s.width), (s.width = s.height), (s.height = t))),
                n.length &&
                  (a = '<g transform="' + n.join(" ") + '">' + a + "</g>");
            });
            let l = i.width,
              u = i.height,
              d = s.width,
              h = s.height;
            null === l
              ? (n = A((r = null === u ? "1em" : "auto" === u ? h : u), d / h))
              : ((n = "auto" === l ? d : l),
                (r = null === u ? A(n, h / d) : "auto" === u ? h : u));
            let c = {},
              m = (e, t) => {
                O(t) || (c[e] = t.toString());
              };
            return (
              m("width", n),
              m("height", r),
              (c.viewBox =
                s.left.toString() +
                " " +
                s.top.toString() +
                " " +
                d.toString() +
                " " +
                h.toString()),
              { attributes: c, body: a }
            );
          })(e, a),
          m = c.attributes;
        if ((a.inline && (u.verticalAlign = "-0.125em"), "svg" === l)) {
          (h.style = { ...u, ...d }), Object.assign(h, m);
          let e = 0,
            n = t.id;
          return (
            "string" == typeof n && (n = n.replace(/-/g, "_")),
            (h.dangerouslySetInnerHTML = {
              __html: (function (e) {
                return (
                  void 0 === r &&
                    (function () {
                      try {
                        r = window.trustedTypes.createPolicy("iconify", {
                          createHTML: (e) => e,
                        });
                      } catch (e) {
                        r = null;
                      }
                    })(),
                  r ? r.createHTML(e) : e
                );
              })(
                (function (e, t = S) {
                  let n;
                  let r = [];
                  for (; (n = x.exec(e)); ) r.push(n[1]);
                  if (!r.length) return e;
                  let o =
                    "suffix" +
                    ((16777216 * Math.random()) | Date.now()).toString(16);
                  return (
                    r.forEach((n) => {
                      let r =
                          "function" == typeof t ? t(n) : t + (k++).toString(),
                        i = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                      e = e.replace(
                        RegExp('([#;"])(' + i + ')([")]|\\.[a-z])', "g"),
                        "$1" + r + o + "$3",
                      );
                    }),
                    (e = e.replace(RegExp(o, "g"), ""))
                  );
                })(c.body, n ? () => n + "ID" + e++ : "iconifyReact"),
              ),
            }),
            s.createElement("svg", h)
          );
        }
        let { body: f, width: g, height: v } = e,
          E = "mask" === l || ("bg" !== l && -1 !== f.indexOf("currentColor")),
          b = (function (e, t) {
            let n =
              -1 === e.indexOf("xlink:")
                ? ""
                : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
            for (let e in t) n += " " + e + '="' + t[e] + '"';
            return (
              '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
            );
          })(f, { ...m, width: g + "", height: v + "" });
        return (
          (h.style = {
            ...u,
            "--svg":
              'url("data:image/svg+xml,' +
              b
                .replace(/"/g, "'")
                .replace(/%/g, "%25")
                .replace(/#/g, "%23")
                .replace(/</g, "%3C")
                .replace(/>/g, "%3E")
                .replace(/\s+/g, " ") +
              '")',
            width: eg(m.width),
            height: eg(m.height),
            ...ed,
            ...(E ? eh : ec),
            ...d,
          }),
          s.createElement("span", h)
        );
      };
      T(!0),
        (D[""] = {
          prepare: (e, t, n) => {
            let r = [],
              o = (function (e, t) {
                let n;
                let r = U[e];
                if (!r) return 0;
                if (r.maxURL) {
                  let e = 0;
                  r.resources.forEach((t) => {
                    e = Math.max(e, t.length);
                  }),
                    (n =
                      r.maxURL -
                      e -
                      r.path.length -
                      (t + ".json?icons=").length);
                } else n = 0;
                return n;
              })(e, t),
              i = "icons",
              s = { type: i, provider: e, prefix: t, icons: [] },
              a = 0;
            return (
              n.forEach((n, l) => {
                (a += n.length + 1) >= o &&
                  l > 0 &&
                  (r.push(s),
                  (s = { type: i, provider: e, prefix: t, icons: [] }),
                  (a = n.length)),
                  s.icons.push(n);
              }),
              r.push(s),
              r
            );
          },
          send: (e, t, n) => {
            if (!F) {
              n("abort", 424);
              return;
            }
            let r = (function (e) {
              if ("string" == typeof e) {
                let t = U[e];
                if (t) return t.path;
              }
              return "/";
            })(t.provider);
            switch (t.type) {
              case "icons": {
                let e = t.prefix,
                  n = t.icons,
                  o = n.join(","),
                  i = new URLSearchParams({ icons: o });
                r += e + ".json?" + i.toString();
                break;
              }
              case "custom": {
                let e = t.uri;
                r += "/" === e.slice(0, 1) ? e.slice(1) : e;
                break;
              }
              default:
                n("abort", 400);
                return;
            }
            let o = 503;
            F(e + r)
              .then((e) => {
                let t = e.status;
                if (200 !== t) {
                  setTimeout(() => {
                    n(404 === t ? "abort" : "next", t);
                  });
                  return;
                }
                return (o = 501), e.json();
              })
              .then((e) => {
                if ("object" != typeof e || null === e) {
                  setTimeout(() => {
                    404 === e ? n("abort", e) : n("next", o);
                  });
                  return;
                }
                setTimeout(() => {
                  n("success", e);
                });
              })
              .catch(() => {
                n("next", o);
              });
          },
        });
      class eE extends s.Component {
        constructor(e) {
          super(e), (this.state = { icon: null });
        }
        _abortLoading() {
          this._loading && (this._loading.abort(), (this._loading = null));
        }
        _setData(e) {
          this.state.icon !== e && this.setState({ icon: e });
        }
        _checkIcon(e) {
          let t;
          let n = this.state,
            r = this.props.icon;
          if ("object" == typeof r && null !== r && "string" == typeof r.body) {
            (this._icon = ""),
              this._abortLoading(),
              (e || null === n.icon) && this._setData({ data: r });
            return;
          }
          if ("string" != typeof r || null === (t = u(r, !1, !0))) {
            this._abortLoading(), this._setData(null);
            return;
          }
          let o = (function (e) {
            let t = "string" == typeof e ? u(e, !0, y) : e;
            if (t) {
              let e = b(t.provider, t.prefix),
                n = t.name;
              return e.icons[n] || (e.missing.has(n) ? null : void 0);
            }
          })(t);
          if (!o) {
            (this._loading && this._loading.name === r) ||
              (this._abortLoading(),
              (this._icon = ""),
              this._setData(null),
              null !== o &&
                (this._loading = {
                  name: r,
                  abort: es([t], this._checkIcon.bind(this, !1)),
                }));
            return;
          }
          if (this._icon !== r || null === n.icon) {
            this._abortLoading(), (this._icon = r);
            let e = ["iconify"];
            "" !== t.prefix && e.push("iconify--" + t.prefix),
              "" !== t.provider && e.push("iconify--" + t.provider),
              this._setData({ data: o, classes: e }),
              this.props.onLoad && this.props.onLoad(r);
          }
        }
        componentDidMount() {
          this._checkIcon(!1);
        }
        componentDidUpdate(e) {
          e.icon !== this.props.icon && this._checkIcon(!0);
        }
        componentWillUnmount() {
          this._abortLoading();
        }
        render() {
          let e = this.props,
            t = this.state.icon;
          if (null === t)
            return e.children ? e.children : s.createElement("span", {});
          let n = e;
          return (
            t.classes &&
              (n = {
                ...e,
                className:
                  ("string" == typeof e.className ? e.className + " " : "") +
                  t.classes.join(" "),
              }),
            ev({ ...p, ...t.data }, n, e._inline, e._ref)
          );
        }
      }
      let eb = s.forwardRef(function (e, t) {
        let n = { ...e, _ref: t, _inline: !1 };
        return s.createElement(eE, n);
      });
      var ew = n(5233),
        ey = n.n(ew);
      let eT = (e) => {
          switch (e) {
            case "stacked":
            default:
              return "rhap_stacked";
            case "stacked-reverse":
              return "rhap_stacked-reverse";
            case "horizontal":
              return "rhap_horizontal";
            case "horizontal-reverse":
              return "rhap_horizontal-reverse";
          }
        },
        eL = (e) =>
          e instanceof MouseEvent ? e.clientX : e.touches[0].clientX,
        eM = (e) => (e > 9 ? e.toString() : `0${e}`),
        eC = (e, t, n) => {
          if (!isFinite(e)) return null;
          let r = Math.floor(e / 60),
            o = eM(r),
            i = eM(Math.floor(e % 60)),
            s = eM(Math.floor(r % 60)),
            a = Math.floor(r / 60),
            l = `${o}:${i}`,
            u = `${a}:${s}:${i}`;
          return "auto" === n
            ? t >= 3600
              ? u
              : l
            : "mm:ss" === n
              ? l
              : "hh:mm:ss" === n
                ? u
                : void 0;
        };
      function e_(e, t) {
        let n = !1;
        return (r) => {
          n || (e(r), (n = !0), setTimeout(() => (n = !1), t));
        };
      }
      class eA extends s.Component {
        constructor() {
          super(...arguments),
            i()(this, "audio", void 0),
            i()(this, "timeOnMouseMove", 0),
            i()(this, "hasAddedAudioEventListener", !1),
            i()(this, "downloadProgressAnimationTimer", void 0),
            i()(this, "state", {
              isDraggingProgress: !1,
              currentTimePos: "0%",
              hasDownloadProgressAnimation: !1,
              downloadProgressArr: [],
              waitingForSeekCallback: !1,
            }),
            i()(this, "getCurrentProgress", (e) => {
              let { audio: t, progressBar: n } = this.props,
                r =
                  0 !== t.src.indexOf("blob:") &&
                  void 0 === this.props.srcDuration;
              if (r && (!t.src || !isFinite(t.currentTime) || !n.current))
                return { currentTime: 0, currentTimePos: "0%" };
              let o = n.current.getBoundingClientRect(),
                i = o.width,
                s = eL(e) - o.left;
              s < 0 ? (s = 0) : s > i && (s = i);
              let a = this.getDuration(),
                l = (a * s) / i;
              return {
                currentTime: l,
                currentTimePos: `${((s / i) * 100).toFixed(2)}%`,
              };
            }),
            i()(this, "handleContextMenu", (e) => {
              e.preventDefault();
            }),
            i()(this, "handleMouseDownOrTouchStartProgressBar", (e) => {
              e.stopPropagation();
              let { currentTime: t, currentTimePos: n } =
                this.getCurrentProgress(e.nativeEvent);
              isFinite(t) &&
                ((this.timeOnMouseMove = t),
                this.setState({ isDraggingProgress: !0, currentTimePos: n }),
                e.nativeEvent instanceof MouseEvent
                  ? (window.addEventListener(
                      "mousemove",
                      this.handleWindowMouseOrTouchMove,
                    ),
                    window.addEventListener(
                      "mouseup",
                      this.handleWindowMouseOrTouchUp,
                    ))
                  : (window.addEventListener(
                      "touchmove",
                      this.handleWindowMouseOrTouchMove,
                    ),
                    window.addEventListener(
                      "touchend",
                      this.handleWindowMouseOrTouchUp,
                    )));
            }),
            i()(this, "handleWindowMouseOrTouchMove", (e) => {
              e instanceof MouseEvent && e.preventDefault(),
                e.stopPropagation();
              let t = window.getSelection();
              t && "Range" === t.type && t.empty();
              let { isDraggingProgress: n } = this.state;
              if (n) {
                let { currentTime: t, currentTimePos: n } =
                  this.getCurrentProgress(e);
                (this.timeOnMouseMove = t),
                  this.setState({ currentTimePos: n });
              }
            }),
            i()(this, "handleWindowMouseOrTouchUp", (e) => {
              e.stopPropagation();
              let t = this.timeOnMouseMove,
                {
                  audio: n,
                  onChangeCurrentTimeError: r,
                  onSeek: o,
                } = this.props;
              if (o)
                this.setState(
                  { isDraggingProgress: !1, waitingForSeekCallback: !0 },
                  () => {
                    o(n, t).then(
                      () => this.setState({ waitingForSeekCallback: !1 }),
                      (e) => {
                        throw Error(e);
                      },
                    );
                  },
                );
              else {
                let e = { isDraggingProgress: !1 };
                n.readyState !== n.HAVE_NOTHING &&
                n.readyState !== n.HAVE_METADATA &&
                isFinite(t)
                  ? (n.currentTime = t)
                  : ((e.currentTimePos = "0%"), r && r()),
                  this.setState(e);
              }
              e instanceof MouseEvent
                ? (window.removeEventListener(
                    "mousemove",
                    this.handleWindowMouseOrTouchMove,
                  ),
                  window.removeEventListener(
                    "mouseup",
                    this.handleWindowMouseOrTouchUp,
                  ))
                : (window.removeEventListener(
                    "touchmove",
                    this.handleWindowMouseOrTouchMove,
                  ),
                  window.removeEventListener(
                    "touchend",
                    this.handleWindowMouseOrTouchUp,
                  ));
            }),
            i()(
              this,
              "handleAudioTimeUpdate",
              e_((e) => {
                let { isDraggingProgress: t } = this.state,
                  n = e.target;
                if (t || !0 === this.state.waitingForSeekCallback) return;
                let { currentTime: r } = n,
                  o = this.getDuration();
                this.setState({
                  currentTimePos: `${((r / o) * 100 || 0).toFixed(2)}%`,
                });
              }, this.props.progressUpdateInterval),
            ),
            i()(this, "handleAudioDownloadProgressUpdate", (e) => {
              let t = e.target,
                n = this.getDuration(),
                r = [];
              for (let e = 0; e < t.buffered.length; e++) {
                let o = t.buffered.start(e),
                  i = t.buffered.end(e);
                r.push({
                  left: `${Math.round((100 / n) * o) || 0}%`,
                  width: `${Math.round((100 / n) * (i - o)) || 0}%`,
                });
              }
              clearTimeout(this.downloadProgressAnimationTimer),
                this.setState({
                  downloadProgressArr: r,
                  hasDownloadProgressAnimation: !0,
                }),
                (this.downloadProgressAnimationTimer = setTimeout(() => {
                  this.setState({ hasDownloadProgressAnimation: !1 });
                }, 200));
            });
        }
        getDuration() {
          let { audio: e, srcDuration: t } = this.props;
          return void 0 === t ? e.duration : t;
        }
        componentDidUpdate() {
          let { audio: e } = this.props;
          e &&
            !this.hasAddedAudioEventListener &&
            ((this.audio = e),
            (this.hasAddedAudioEventListener = !0),
            e.addEventListener("timeupdate", this.handleAudioTimeUpdate),
            e.addEventListener(
              "progress",
              this.handleAudioDownloadProgressUpdate,
            ));
        }
        componentWillUnmount() {
          this.audio &&
            this.hasAddedAudioEventListener &&
            (this.audio.removeEventListener(
              "timeupdate",
              this.handleAudioTimeUpdate,
            ),
            this.audio.removeEventListener(
              "progress",
              this.handleAudioDownloadProgressUpdate,
            )),
            clearTimeout(this.downloadProgressAnimationTimer);
        }
        render() {
          let {
              showDownloadProgress: e,
              showFilledProgress: t,
              progressBar: n,
              i18nProgressBar: r,
            } = this.props,
            {
              currentTimePos: o,
              downloadProgressArr: i,
              hasDownloadProgressAnimation: s,
            } = this.state;
          return a().createElement(
            "div",
            {
              className: "rhap_progress-container",
              ref: n,
              "aria-label": r,
              role: "progressbar",
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Number(o.split("%")[0]),
              tabIndex: 0,
              onMouseDown: this.handleMouseDownOrTouchStartProgressBar,
              onTouchStart: this.handleMouseDownOrTouchStartProgressBar,
              onContextMenu: this.handleContextMenu,
            },
            a().createElement(
              "div",
              {
                className: `rhap_progress-bar ${
                  e ? "rhap_progress-bar-show-download" : ""
                }`,
              },
              a().createElement("div", {
                className: "rhap_progress-indicator",
                style: { left: o },
              }),
              t &&
                a().createElement("div", {
                  className: "rhap_progress-filled",
                  style: { width: o },
                }),
              e &&
                i.map((e, t) => {
                  let { left: n, width: r } = e;
                  return a().createElement("div", {
                    key: t,
                    className: "rhap_download-progress",
                    style: {
                      left: n,
                      width: r,
                      transitionDuration: s ? ".2s" : "0s",
                    },
                  });
                }),
            ),
          );
        }
      }
      let eO = (0, s.forwardRef)((e, t) =>
        a().createElement(eA, ey()({}, e, { progressBar: t })),
      );
      class ex extends s.PureComponent {
        constructor(e) {
          super(e),
            i()(this, "audio", void 0),
            i()(this, "hasAddedAudioEventListener", !1),
            i()(this, "state", { currentTime: this.props.defaultCurrentTime }),
            i()(this, "handleAudioCurrentTimeChange", (e) => {
              let t = e.target,
                {
                  isLeftTime: n,
                  timeFormat: r,
                  defaultCurrentTime: o,
                } = this.props;
              this.setState({
                currentTime:
                  eC(
                    n ? t.duration - t.currentTime : t.currentTime,
                    t.duration,
                    r,
                  ) || o,
              });
            }),
            i()(this, "addAudioEventListeners", () => {
              let { audio: e } = this.props;
              e &&
                !this.hasAddedAudioEventListener &&
                ((this.audio = e),
                (this.hasAddedAudioEventListener = !0),
                e.addEventListener(
                  "timeupdate",
                  this.handleAudioCurrentTimeChange,
                ),
                e.addEventListener(
                  "loadedmetadata",
                  this.handleAudioCurrentTimeChange,
                ));
            });
          let {
              audio: t,
              defaultCurrentTime: n,
              isLeftTime: r,
              timeFormat: o,
            } = e,
            s = n;
          t &&
            (s = eC(
              r ? t.duration - t.currentTime : t.currentTime,
              t.duration,
              o,
            )),
            (this.state = { currentTime: s });
        }
        componentDidMount() {
          this.addAudioEventListeners();
        }
        componentDidUpdate() {
          this.addAudioEventListeners();
        }
        componentWillUnmount() {
          this.audio &&
            this.hasAddedAudioEventListener &&
            (this.audio.removeEventListener(
              "timeupdate",
              this.handleAudioCurrentTimeChange,
            ),
            this.audio.removeEventListener(
              "loadedmetadata",
              this.handleAudioCurrentTimeChange,
            ));
        }
        render() {
          return this.state.currentTime;
        }
      }
      class eS extends s.PureComponent {
        constructor(e) {
          super(e),
            i()(this, "audio", void 0),
            i()(this, "hasAddedAudioEventListener", !1),
            i()(this, "state", {
              duration: this.props.audio
                ? eC(
                    this.props.audio.duration,
                    this.props.audio.duration,
                    this.props.timeFormat,
                  )
                : this.props.defaultDuration,
            }),
            i()(this, "handleAudioDurationChange", (e) => {
              let t = e.target,
                { timeFormat: n, defaultDuration: r } = this.props;
              this.setState({ duration: eC(t.duration, t.duration, n) || r });
            }),
            i()(this, "addAudioEventListeners", () => {
              let { audio: e } = this.props;
              e &&
                !this.hasAddedAudioEventListener &&
                ((this.audio = e),
                (this.hasAddedAudioEventListener = !0),
                e.addEventListener(
                  "durationchange",
                  this.handleAudioDurationChange,
                ),
                e.addEventListener("abort", this.handleAudioDurationChange));
            });
          let { audio: t, timeFormat: n, defaultDuration: r } = e;
          this.state = { duration: t ? eC(t.duration, t.duration, n) : r };
        }
        componentDidMount() {
          this.addAudioEventListeners();
        }
        componentDidUpdate() {
          this.addAudioEventListeners();
        }
        componentWillUnmount() {
          this.audio &&
            this.hasAddedAudioEventListener &&
            (this.audio.removeEventListener(
              "durationchange",
              this.handleAudioDurationChange,
            ),
            this.audio.removeEventListener(
              "abort",
              this.handleAudioDurationChange,
            ));
        }
        render() {
          return this.state.duration;
        }
      }
      class ek extends s.Component {
        constructor() {
          super(...arguments),
            i()(this, "audio", void 0),
            i()(this, "hasAddedAudioEventListener", !1),
            i()(this, "volumeBar", (0, s.createRef)()),
            i()(this, "volumeAnimationTimer", 0),
            i()(this, "lastVolume", this.props.volume),
            i()(this, "state", {
              currentVolumePos: `${((this.lastVolume / 1) * 100 || 0).toFixed(
                2,
              )}%`,
              hasVolumeAnimation: !1,
              isDraggingVolume: !1,
            }),
            i()(this, "getCurrentVolume", (e) => {
              let t, n;
              let { audio: r } = this.props;
              if (!this.volumeBar.current)
                return {
                  currentVolume: r.volume,
                  currentVolumePos: this.state.currentVolumePos,
                };
              let o = this.volumeBar.current.getBoundingClientRect(),
                i = o.width,
                s = eL(e) - o.left;
              return (
                s < 0
                  ? ((t = 0), (n = "0%"))
                  : s > o.width
                    ? ((t = 1), (n = "100%"))
                    : ((t = s / i), (n = `${(s / i) * 100}%`)),
                { currentVolume: t, currentVolumePos: n }
              );
            }),
            i()(this, "handleContextMenu", (e) => {
              e.preventDefault();
            }),
            i()(this, "handleClickVolumeButton", () => {
              let { audio: e } = this.props;
              e.volume > 0
                ? ((this.lastVolume = e.volume), (e.volume = 0))
                : (e.volume = this.lastVolume);
            }),
            i()(this, "handleVolumnControlMouseOrTouchDown", (e) => {
              e.stopPropagation();
              let { audio: t } = this.props,
                { currentVolume: n, currentVolumePos: r } =
                  this.getCurrentVolume(e.nativeEvent);
              (t.volume = n),
                this.setState({ isDraggingVolume: !0, currentVolumePos: r }),
                e.nativeEvent instanceof MouseEvent
                  ? (window.addEventListener(
                      "mousemove",
                      this.handleWindowMouseOrTouchMove,
                    ),
                    window.addEventListener(
                      "mouseup",
                      this.handleWindowMouseOrTouchUp,
                    ))
                  : (window.addEventListener(
                      "touchmove",
                      this.handleWindowMouseOrTouchMove,
                    ),
                    window.addEventListener(
                      "touchend",
                      this.handleWindowMouseOrTouchUp,
                    ));
            }),
            i()(this, "handleWindowMouseOrTouchMove", (e) => {
              e instanceof MouseEvent && e.preventDefault(),
                e.stopPropagation();
              let { audio: t } = this.props,
                n = window.getSelection();
              n && "Range" === n.type && n.empty();
              let { isDraggingVolume: r } = this.state;
              if (r) {
                let { currentVolume: n, currentVolumePos: r } =
                  this.getCurrentVolume(e);
                (t.volume = n), this.setState({ currentVolumePos: r });
              }
            }),
            i()(this, "handleWindowMouseOrTouchUp", (e) => {
              e.stopPropagation(),
                this.setState({ isDraggingVolume: !1 }),
                e instanceof MouseEvent
                  ? (window.removeEventListener(
                      "mousemove",
                      this.handleWindowMouseOrTouchMove,
                    ),
                    window.removeEventListener(
                      "mouseup",
                      this.handleWindowMouseOrTouchUp,
                    ))
                  : (window.removeEventListener(
                      "touchmove",
                      this.handleWindowMouseOrTouchMove,
                    ),
                    window.removeEventListener(
                      "touchend",
                      this.handleWindowMouseOrTouchUp,
                    ));
            }),
            i()(this, "handleAudioVolumeChange", (e) => {
              let { isDraggingVolume: t } = this.state,
                { volume: n } = e.target;
              ((this.lastVolume > 0 && 0 === n) ||
                (0 === this.lastVolume && n > 0)) &&
                this.props.onMuteChange(),
                (this.lastVolume = n),
                t ||
                  (this.setState({
                    hasVolumeAnimation: !0,
                    currentVolumePos: `${((n / 1) * 100 || 0).toFixed(2)}%`,
                  }),
                  clearTimeout(this.volumeAnimationTimer),
                  (this.volumeAnimationTimer = setTimeout(() => {
                    this.setState({ hasVolumeAnimation: !1 });
                  }, 100)));
            });
        }
        componentDidUpdate() {
          let { audio: e } = this.props;
          e &&
            !this.hasAddedAudioEventListener &&
            ((this.audio = e),
            (this.hasAddedAudioEventListener = !0),
            e.addEventListener("volumechange", this.handleAudioVolumeChange));
        }
        componentWillUnmount() {
          this.audio &&
            this.hasAddedAudioEventListener &&
            this.audio.removeEventListener(
              "volumechange",
              this.handleAudioVolumeChange,
            ),
            clearTimeout(this.volumeAnimationTimer);
        }
        render() {
          let {
              audio: e,
              showFilledVolume: t,
              i18nVolumeControl: n,
            } = this.props,
            { currentVolumePos: r, hasVolumeAnimation: o } = this.state,
            { volume: i } = e || {};
          return a().createElement(
            "div",
            {
              ref: this.volumeBar,
              onMouseDown: this.handleVolumnControlMouseOrTouchDown,
              onTouchStart: this.handleVolumnControlMouseOrTouchDown,
              onContextMenu: this.handleContextMenu,
              role: "progressbar",
              "aria-label": n,
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": Number((100 * i).toFixed(0)),
              tabIndex: 0,
              className: "rhap_volume-bar-area",
            },
            a().createElement(
              "div",
              { className: "rhap_volume-bar" },
              a().createElement("div", {
                className: "rhap_volume-indicator",
                style: { left: r, transitionDuration: o ? ".1s" : "0s" },
              }),
              t &&
                a().createElement("div", {
                  className: "rhap_volume-filled",
                  style: { width: r },
                }),
            ),
          );
        }
      }
      let eD = (function (e) {
        return (
          (e.CURRENT_TIME = "CURRENT_TIME"),
          (e.CURRENT_LEFT_TIME = "CURRENT_LEFT_TIME"),
          (e.PROGRESS_BAR = "PROGRESS_BAR"),
          (e.DURATION = "DURATION"),
          (e.ADDITIONAL_CONTROLS = "ADDITIONAL_CONTROLS"),
          (e.MAIN_CONTROLS = "MAIN_CONTROLS"),
          (e.VOLUME_CONTROLS = "VOLUME_CONTROLS"),
          (e.LOOP = "LOOP"),
          (e.VOLUME = "VOLUME"),
          e
        );
      })({});
      class eP extends s.Component {
        constructor() {
          super(...arguments),
            i()(this, "audio", (0, s.createRef)()),
            i()(this, "progressBar", (0, s.createRef)()),
            i()(this, "container", (0, s.createRef)()),
            i()(this, "lastVolume", this.props.volume),
            i()(this, "listenTracker", void 0),
            i()(this, "volumeAnimationTimer", void 0),
            i()(this, "downloadProgressAnimationTimer", void 0),
            i()(this, "togglePlay", (e) => {
              e.stopPropagation();
              let t = this.audio.current;
              (t.paused || t.ended) && t.src
                ? this.playAudioPromise()
                : t.paused || t.pause();
            }),
            i()(this, "playAudioPromise", () => {
              let e = this.audio.current.play();
              e
                ? e.then(null).catch((e) => {
                    let { onPlayError: t } = this.props;
                    t && t(Error(e));
                  })
                : this.forceUpdate();
            }),
            i()(this, "isPlaying", () => {
              let e = this.audio.current;
              return !!e && !e.paused && !e.ended;
            }),
            i()(this, "handlePlay", (e) => {
              this.forceUpdate(), this.props.onPlay && this.props.onPlay(e);
            }),
            i()(this, "handlePause", (e) => {
              this.audio &&
                (this.forceUpdate(),
                this.props.onPause && this.props.onPause(e));
            }),
            i()(this, "handleEnded", (e) => {
              this.audio &&
                (this.forceUpdate(),
                this.props.onEnded && this.props.onEnded(e));
            }),
            i()(this, "handleAbort", (e) => {
              this.props.onAbort && this.props.onAbort(e);
            }),
            i()(this, "handleClickVolumeButton", () => {
              let e = this.audio.current;
              e.volume > 0
                ? ((this.lastVolume = e.volume), (e.volume = 0))
                : (e.volume = this.lastVolume);
            }),
            i()(this, "handleMuteChange", () => {
              this.forceUpdate();
            }),
            i()(this, "handleClickLoopButton", () => {
              (this.audio.current.loop = !this.audio.current.loop),
                this.forceUpdate();
            }),
            i()(this, "handleClickRewind", () => {
              let { progressJumpSteps: e, progressJumpStep: t } = this.props,
                n = e.backward || t;
              this.setJumpTime(-n);
            }),
            i()(this, "handleClickForward", () => {
              let { progressJumpSteps: e, progressJumpStep: t } = this.props,
                n = e.forward || t;
              this.setJumpTime(n);
            }),
            i()(this, "setJumpTime", (e) => {
              let t = this.audio.current,
                { duration: n, currentTime: r } = t;
              if (
                t.readyState === t.HAVE_NOTHING ||
                t.readyState === t.HAVE_METADATA ||
                !isFinite(n) ||
                !isFinite(r)
              )
                return (
                  this.props.onChangeCurrentTimeError &&
                  this.props.onChangeCurrentTimeError()
                );
              let o = r + e / 1e3;
              o < 0
                ? ((t.currentTime = 0), (o = 0))
                : o > n
                  ? ((t.currentTime = n), (o = n))
                  : (t.currentTime = o);
            }),
            i()(this, "setJumpVolume", (e) => {
              let t = this.audio.current.volume + e;
              t < 0 ? (t = 0) : t > 1 && (t = 1),
                (this.audio.current.volume = t);
            }),
            i()(this, "handleKeyDown", (e) => {
              if (this.props.hasDefaultKeyBindings)
                switch (e.key) {
                  case " ":
                    (e.target === this.container.current ||
                      e.target === this.progressBar.current) &&
                      (e.preventDefault(), this.togglePlay(e));
                    break;
                  case "ArrowLeft":
                    this.handleClickRewind();
                    break;
                  case "ArrowRight":
                    this.handleClickForward();
                    break;
                  case "ArrowUp":
                    e.preventDefault(),
                      this.setJumpVolume(this.props.volumeJumpStep);
                    break;
                  case "ArrowDown":
                    e.preventDefault(),
                      this.setJumpVolume(-this.props.volumeJumpStep);
                    break;
                  case "l":
                    this.handleClickLoopButton();
                    break;
                  case "m":
                    this.handleClickVolumeButton();
                }
            }),
            i()(this, "renderUIModules", (e) =>
              e.map((e, t) => this.renderUIModule(e, t)),
            ),
            i()(this, "renderUIModule", (e, t) => {
              let {
                defaultCurrentTime: n,
                progressUpdateInterval: r,
                showDownloadProgress: o,
                showFilledProgress: i,
                showFilledVolume: l,
                defaultDuration: u,
                customIcons: d,
                showSkipControls: h,
                onClickPrevious: c,
                onClickNext: p,
                onChangeCurrentTimeError: m,
                showJumpControls: f,
                customAdditionalControls: g,
                customVolumeControls: v,
                muted: E,
                timeFormat: b,
                volume: w,
                loop: y,
                mse: T,
                i18nAriaLabels: L,
              } = this.props;
              switch (e) {
                case eD.CURRENT_TIME:
                  return a().createElement(
                    "div",
                    {
                      key: t,
                      id: "rhap_current-time",
                      className: "rhap_time rhap_current-time",
                    },
                    a().createElement(ex, {
                      audio: this.audio.current,
                      isLeftTime: !1,
                      defaultCurrentTime: n,
                      timeFormat: b,
                    }),
                  );
                case eD.CURRENT_LEFT_TIME:
                  return a().createElement(
                    "div",
                    {
                      key: t,
                      id: "rhap_current-left-time",
                      className: "rhap_time rhap_current-left-time",
                    },
                    a().createElement(ex, {
                      audio: this.audio.current,
                      isLeftTime: !0,
                      defaultCurrentTime: n,
                      timeFormat: b,
                    }),
                  );
                case eD.PROGRESS_BAR:
                  return a().createElement(eO, {
                    key: t,
                    ref: this.progressBar,
                    audio: this.audio.current,
                    progressUpdateInterval: r,
                    showDownloadProgress: o,
                    showFilledProgress: i,
                    onSeek: T && T.onSeek,
                    onChangeCurrentTimeError: m,
                    srcDuration: T && T.srcDuration,
                    i18nProgressBar: L.progressControl,
                  });
                case eD.DURATION:
                  return a().createElement(
                    "div",
                    { key: t, className: "rhap_time rhap_total-time" },
                    T && T.srcDuration
                      ? eC(T.srcDuration, T.srcDuration, this.props.timeFormat)
                      : a().createElement(eS, {
                          audio: this.audio.current,
                          defaultDuration: u,
                          timeFormat: b,
                        }),
                  );
                case eD.ADDITIONAL_CONTROLS:
                  return a().createElement(
                    "div",
                    { key: t, className: "rhap_additional-controls" },
                    this.renderUIModules(g),
                  );
                case eD.MAIN_CONTROLS: {
                  let e;
                  let n = this.isPlaying();
                  return (
                    (e = n
                      ? d.pause
                        ? d.pause
                        : a().createElement(eb, { icon: "mdi:pause-circle" })
                      : d.play
                        ? d.play
                        : a().createElement(eb, { icon: "mdi:play-circle" })),
                    a().createElement(
                      "div",
                      { key: t, className: "rhap_main-controls" },
                      h &&
                        a().createElement(
                          "button",
                          {
                            "aria-label": L.previous,
                            className:
                              "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                            type: "button",
                            onClick: c,
                          },
                          d.previous
                            ? d.previous
                            : a().createElement(eb, {
                                icon: "mdi:skip-previous",
                              }),
                        ),
                      f &&
                        a().createElement(
                          "button",
                          {
                            "aria-label": L.rewind,
                            className:
                              "rhap_button-clear rhap_main-controls-button rhap_rewind-button",
                            type: "button",
                            onClick: this.handleClickRewind,
                          },
                          d.rewind
                            ? d.rewind
                            : a().createElement(eb, { icon: "mdi:rewind" }),
                        ),
                      a().createElement(
                        "button",
                        {
                          "aria-label": n ? L.pause : L.play,
                          className:
                            "rhap_button-clear rhap_main-controls-button rhap_play-pause-button",
                          type: "button",
                          onClick: this.togglePlay,
                        },
                        e,
                      ),
                      f &&
                        a().createElement(
                          "button",
                          {
                            "aria-label": L.forward,
                            className:
                              "rhap_button-clear rhap_main-controls-button rhap_forward-button",
                            type: "button",
                            onClick: this.handleClickForward,
                          },
                          d.forward
                            ? d.forward
                            : a().createElement(eb, {
                                icon: "mdi:fast-forward",
                              }),
                        ),
                      h &&
                        a().createElement(
                          "button",
                          {
                            "aria-label": L.next,
                            className:
                              "rhap_button-clear rhap_main-controls-button rhap_skip-button",
                            type: "button",
                            onClick: p,
                          },
                          d.next
                            ? d.next
                            : a().createElement(eb, { icon: "mdi:skip-next" }),
                        ),
                    )
                  );
                }
                case eD.VOLUME_CONTROLS:
                  return a().createElement(
                    "div",
                    { key: t, className: "rhap_volume-controls" },
                    this.renderUIModules(v),
                  );
                case eD.LOOP: {
                  let e;
                  let n = this.audio.current ? this.audio.current.loop : y;
                  return (
                    (e = n
                      ? d.loop
                        ? d.loop
                        : a().createElement(eb, { icon: "mdi:repeat" })
                      : d.loopOff
                        ? d.loopOff
                        : a().createElement(eb, { icon: "mdi:repeat-off" })),
                    a().createElement(
                      "button",
                      {
                        key: t,
                        "aria-label": n ? L.loop : L.loopOff,
                        className: "rhap_button-clear rhap_repeat-button",
                        type: "button",
                        onClick: this.handleClickLoopButton,
                      },
                      e,
                    )
                  );
                }
                case eD.VOLUME: {
                  let e;
                  let { volume: n = E ? 0 : w } = this.audio.current || {};
                  return (
                    (e = n
                      ? d.volume
                        ? d.volume
                        : a().createElement(eb, { icon: "mdi:volume-high" })
                      : d.volume
                        ? d.volumeMute
                        : a().createElement(eb, { icon: "mdi:volume-mute" })),
                    a().createElement(
                      "div",
                      { key: t, className: "rhap_volume-container" },
                      a().createElement(
                        "button",
                        {
                          "aria-label": n ? L.volume : L.volumeMute,
                          onClick: this.handleClickVolumeButton,
                          type: "button",
                          className: "rhap_button-clear rhap_volume-button",
                        },
                        e,
                      ),
                      a().createElement(ek, {
                        audio: this.audio.current,
                        volume: n,
                        onMuteChange: this.handleMuteChange,
                        showFilledVolume: l,
                        i18nVolumeControl: L.volumeControl,
                      }),
                    )
                  );
                }
                default:
                  if (!(0, s.isValidElement)(e)) return null;
                  return e.key ? e : (0, s.cloneElement)(e, { key: t });
              }
            });
        }
        componentDidMount() {
          this.forceUpdate();
          let e = this.audio.current;
          this.props.muted ? (e.volume = 0) : (e.volume = this.lastVolume),
            e.addEventListener("error", (e) => {
              this.props.onError && this.props.onError(e);
            }),
            e.addEventListener("canplay", (e) => {
              this.props.onCanPlay && this.props.onCanPlay(e);
            }),
            e.addEventListener("canplaythrough", (e) => {
              this.props.onCanPlayThrough && this.props.onCanPlayThrough(e);
            }),
            e.addEventListener("play", this.handlePlay),
            e.addEventListener("abort", this.handleAbort),
            e.addEventListener("ended", this.handleEnded),
            e.addEventListener("playing", (e) => {
              this.props.onPlaying && this.props.onPlaying(e);
            }),
            e.addEventListener("seeking", (e) => {
              this.props.onSeeking && this.props.onSeeking(e);
            }),
            e.addEventListener("seeked", (e) => {
              this.props.onSeeked && this.props.onSeeked(e);
            }),
            e.addEventListener("waiting", (e) => {
              this.props.onWaiting && this.props.onWaiting(e);
            }),
            e.addEventListener("emptied", (e) => {
              this.props.onEmptied && this.props.onEmptied(e);
            }),
            e.addEventListener("stalled", (e) => {
              this.props.onStalled && this.props.onStalled(e);
            }),
            e.addEventListener("suspend", (e) => {
              this.props.onSuspend && this.props.onSuspend(e);
            }),
            e.addEventListener("loadstart", (e) => {
              this.props.onLoadStart && this.props.onLoadStart(e);
            }),
            e.addEventListener("loadedmetadata", (e) => {
              this.props.onLoadedMetaData && this.props.onLoadedMetaData(e);
            }),
            e.addEventListener("loadeddata", (e) => {
              this.props.onLoadedData && this.props.onLoadedData(e);
            }),
            e.addEventListener("pause", this.handlePause),
            e.addEventListener(
              "timeupdate",
              e_((e) => {
                this.props.onListen && this.props.onListen(e);
              }, this.props.listenInterval),
            ),
            e.addEventListener("volumechange", (e) => {
              this.props.onVolumeChange && this.props.onVolumeChange(e);
            }),
            e.addEventListener("encrypted", (e) => {
              let { mse: t } = this.props;
              t && t.onEcrypted && t.onEcrypted(e);
            });
        }
        componentDidUpdate(e) {
          let { src: t, autoPlayAfterSrcChange: n } = this.props;
          e.src !== t && (n ? this.playAudioPromise() : this.forceUpdate());
        }
        render() {
          let {
              className: e,
              src: t,
              loop: n,
              preload: r,
              autoPlay: o,
              crossOrigin: i,
              mediaGroup: s,
              header: l,
              footer: u,
              layout: d,
              customProgressBarSection: h,
              customControlsSection: c,
              children: p,
              style: m,
              i18nAriaLabels: f,
            } = this.props,
            g = this.audio.current ? this.audio.current.loop : n,
            v = g ? "rhap_loop--on" : "rhap_loop--off",
            E = this.isPlaying()
              ? "rhap_play-status--playing"
              : "rhap_play-status--paused";
          return a().createElement(
            "div",
            {
              role: "group",
              tabIndex: 0,
              "aria-label": f.player,
              className: `rhap_container ${v} ${E} ${e}`,
              onKeyDown: this.handleKeyDown,
              ref: this.container,
              style: m,
            },
            a().createElement(
              "audio",
              {
                src: t,
                controls: !1,
                loop: g,
                autoPlay: o,
                preload: r,
                crossOrigin: i,
                mediaGroup: s,
                ref: this.audio,
              },
              p,
            ),
            l && a().createElement("div", { className: "rhap_header" }, l),
            a().createElement(
              "div",
              { className: `rhap_main ${eT(d)}` },
              a().createElement(
                "div",
                { className: "rhap_progress-section" },
                this.renderUIModules(h),
              ),
              a().createElement(
                "div",
                { className: "rhap_controls-section" },
                this.renderUIModules(c),
              ),
            ),
            u && a().createElement("div", { className: "rhap_footer" }, u),
          );
        }
      }
      i()(eP, "defaultProps", {
        autoPlay: !1,
        autoPlayAfterSrcChange: !0,
        listenInterval: 1e3,
        progressJumpStep: 5e3,
        progressJumpSteps: {},
        volumeJumpStep: 0.1,
        loop: !1,
        muted: !1,
        preload: "auto",
        progressUpdateInterval: 20,
        defaultCurrentTime: "--:--",
        defaultDuration: "--:--",
        timeFormat: "auto",
        volume: 1,
        className: "",
        showJumpControls: !0,
        showSkipControls: !1,
        showDownloadProgress: !0,
        showFilledProgress: !0,
        showFilledVolume: !1,
        customIcons: {},
        customProgressBarSection: [
          eD.CURRENT_TIME,
          eD.PROGRESS_BAR,
          eD.DURATION,
        ],
        customControlsSection: [
          eD.ADDITIONAL_CONTROLS,
          eD.MAIN_CONTROLS,
          eD.VOLUME_CONTROLS,
        ],
        customAdditionalControls: [eD.LOOP],
        customVolumeControls: [eD.VOLUME],
        layout: "stacked",
        hasDefaultKeyBindings: !0,
        i18nAriaLabels: {
          player: "Audio player",
          progressControl: "Audio progress control",
          volumeControl: "Volume control",
          play: "Play",
          pause: "Pause",
          rewind: "Rewind",
          forward: "Forward",
          previous: "Previous",
          next: "Skip",
          loop: "Disable loop",
          loopOff: "Enable loop",
          volume: "Mute",
          volumeMute: "Unmute",
        },
      });
      let eN = eP;
    },
    2052: () => {},
    7538: (e, t, n) => {
      "use strict";
      var r = n(7178);
      (e.exports = function (e, t, n) {
        return (
          (t = r(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    5233: (e) => {
      "use strict";
      function t() {
        return (
          (e.exports = t =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t.apply(this, arguments)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    2917: (e, t, n) => {
      "use strict";
      var r = n(1090).default;
      (e.exports = function (e, t) {
        if ("object" !== r(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var o = n.call(e, t || "default");
          if ("object" !== r(o)) return o;
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    7178: (e, t, n) => {
      "use strict";
      var r = n(1090).default,
        o = n(2917);
      (e.exports = function (e) {
        var t = o(e, "string");
        return "symbol" === r(t) ? t : String(t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    1090: (e) => {
      "use strict";
      function t(n) {
        return (
          (e.exports = t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(n)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  });
