(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [473],
  {
    97432: function () {},
    37753: function () {},
    3749: function () {},
    57003: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return Kn;
          },
        });
      n(13062);
      var r = n(6759),
        a = (n(89032), n(1635)),
        o = (n(43673), n(97432), n(3749), n(96156)),
        i = n(22122),
        c = n(67294),
        l = n(94184),
        u = n.n(l),
        s = n(98423),
        f = n(65632),
        d = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        v = function (e) {
          var t = e.prefixCls,
            n = e.className,
            r = e.hoverable,
            a = void 0 === r || r,
            l = d(e, ['prefixCls', 'className', 'hoverable']);
          return c.createElement(f.C, null, function (e) {
            var r = e.getPrefixCls,
              s = r('card', t),
              f = u()(
                ''.concat(s, '-grid'),
                n,
                (0, o.Z)({}, ''.concat(s, '-grid-hoverable'), a),
              );
            return c.createElement('div', (0, i.Z)({}, l, { className: f }));
          });
        },
        m = v,
        p = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        h = function (e) {
          return c.createElement(f.C, null, function (t) {
            var n = t.getPrefixCls,
              r = e.prefixCls,
              a = e.className,
              o = e.avatar,
              l = e.title,
              s = e.description,
              f = p(e, [
                'prefixCls',
                'className',
                'avatar',
                'title',
                'description',
              ]),
              d = n('card', r),
              v = u()(''.concat(d, '-meta'), a),
              m = o
                ? c.createElement(
                    'div',
                    { className: ''.concat(d, '-meta-avatar') },
                    o,
                  )
                : null,
              h = l
                ? c.createElement(
                    'div',
                    { className: ''.concat(d, '-meta-title') },
                    l,
                  )
                : null,
              b = s
                ? c.createElement(
                    'div',
                    { className: ''.concat(d, '-meta-description') },
                    s,
                  )
                : null,
              y =
                h || b
                  ? c.createElement(
                      'div',
                      { className: ''.concat(d, '-meta-detail') },
                      h,
                      b,
                    )
                  : null;
            return c.createElement(
              'div',
              (0, i.Z)({}, f, { className: v }),
              m,
              y,
            );
          });
        },
        b = h,
        y = n(28481),
        g = n(90484),
        Z = n(81253),
        E = n(28991),
        C = n(50344),
        x = n(31131),
        w = n(21770),
        N = n(85061),
        k = n(75164),
        P = n(4084);
      function S(e) {
        var t = (0, c.useRef)(),
          n = (0, c.useRef)(!1);
        function r() {
          for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
            a[o] = arguments[o];
          n.current ||
            (k.Z.cancel(t.current),
            (t.current = (0, k.Z)(function () {
              e.apply(void 0, a);
            })));
        }
        return (
          (0, c.useEffect)(function () {
            return function () {
              (n.current = !0), k.Z.cancel(t.current);
            };
          }, []),
          r
        );
      }
      function O(e) {
        var t = (0, c.useRef)([]),
          n = (0, c.useState)({}),
          r = (0, y.Z)(n, 2),
          a = r[1],
          o = (0, c.useRef)('function' === typeof e ? e() : e),
          i = S(function () {
            var e = o.current;
            t.current.forEach(function (t) {
              e = t(e);
            }),
              (t.current = []),
              (o.current = e),
              a({});
          });
        function l(e) {
          t.current.push(e), i();
        }
        return [o.current, l];
      }
      var R = n(15105);
      function I(e, t) {
        var n,
          r = e.prefixCls,
          a = e.id,
          i = e.active,
          l = e.rtl,
          s = e.tab,
          f = s.key,
          d = s.tab,
          v = s.disabled,
          m = s.closeIcon,
          p = e.tabBarGutter,
          h = e.tabPosition,
          b = e.closable,
          y = e.renderWrapper,
          g = e.removeAriaLabel,
          Z = e.editable,
          E = e.onClick,
          C = e.onRemove,
          x = e.onFocus,
          w = ''.concat(r, '-tab');
        c.useEffect(function () {
          return C;
        }, []);
        var N = {};
        'top' === h || 'bottom' === h
          ? (N[l ? 'marginRight' : 'marginLeft'] = p)
          : (N.marginTop = p);
        var k = Z && !1 !== b && !v;
        function P(e) {
          v || E(e);
        }
        function S(e) {
          e.preventDefault(),
            e.stopPropagation(),
            Z.onEdit('remove', { key: f, event: e });
        }
        var O = c.createElement(
          'div',
          {
            key: f,
            ref: t,
            className: u()(
              w,
              ((n = {}),
              (0, o.Z)(n, ''.concat(w, '-with-remove'), k),
              (0, o.Z)(n, ''.concat(w, '-active'), i),
              (0, o.Z)(n, ''.concat(w, '-disabled'), v),
              n),
            ),
            style: N,
            onClick: P,
          },
          c.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': i,
              id: a && ''.concat(a, '-tab-').concat(f),
              className: ''.concat(w, '-btn'),
              'aria-controls': a && ''.concat(a, '-panel-').concat(f),
              'aria-disabled': v,
              tabIndex: v ? null : 0,
              onClick: function (e) {
                e.stopPropagation(), P(e);
              },
              onKeyDown: function (e) {
                [R.Z.SPACE, R.Z.ENTER].includes(e.which) &&
                  (e.preventDefault(), P(e));
              },
              onFocus: x,
            },
            d,
          ),
          k &&
            c.createElement(
              'button',
              {
                type: 'button',
                'aria-label': g || 'remove',
                tabIndex: 0,
                className: ''.concat(w, '-remove'),
                onClick: function (e) {
                  e.stopPropagation(), S(e);
                },
              },
              m || Z.removeIcon || '\xd7',
            ),
        );
        return y && (O = y(O)), O;
      }
      var M = c.forwardRef(I),
        K = { width: 0, height: 0, left: 0, top: 0 };
      function T(e, t, n) {
        return (0, c.useMemo)(
          function () {
            for (
              var n,
                r = new Map(),
                a =
                  t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) ||
                  K,
                o = a.left + a.width,
                i = 0;
              i < e.length;
              i += 1
            ) {
              var c,
                l = e[i].key,
                u = t.get(l);
              if (!u)
                u =
                  t.get(
                    null === (c = e[i - 1]) || void 0 === c ? void 0 : c.key,
                  ) || K;
              var s = r.get(l) || (0, E.Z)({}, u);
              (s.right = o - s.left - s.width), r.set(l, s);
            }
            return r;
          },
          [
            e
              .map(function (e) {
                return e.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      var A = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function j(e, t, n, r, a) {
        var o,
          i,
          l,
          u = a.tabs,
          s = a.tabPosition,
          f = a.rtl;
        ['top', 'bottom'].includes(s)
          ? ((o = 'width'), (i = f ? 'right' : 'left'), (l = Math.abs(t.left)))
          : ((o = 'height'), (i = 'top'), (l = -t.top));
        var d = t[o],
          v = n[o],
          m = r[o],
          p = d;
        return (
          v + m > d && (p = d - m),
          (0, c.useMemo)(
            function () {
              if (!u.length) return [0, 0];
              for (var t = u.length, n = t, r = 0; r < t; r += 1) {
                var a = e.get(u[r].key) || A;
                if (a[i] + a[o] > l + p) {
                  n = r - 1;
                  break;
                }
              }
              for (var c = 0, s = t - 1; s >= 0; s -= 1) {
                var f = e.get(u[s].key) || A;
                if (f[i] < l) {
                  c = s + 1;
                  break;
                }
              }
              return [c, n];
            },
            [
              e,
              l,
              p,
              s,
              u
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
              f,
            ],
          )
        );
      }
      var z = n(96774),
        L = n.n(z),
        D = n(80334),
        B = void 0;
      function V(e, t) {
        var n = e.prefixCls,
          r = e.invalidate,
          a = e.item,
          o = e.renderItem,
          l = e.responsive,
          s = e.registerSize,
          f = e.itemKey,
          d = e.className,
          v = e.style,
          m = e.children,
          p = e.display,
          h = e.order,
          b = e.component,
          y = void 0 === b ? 'div' : b,
          g = (0, Z.Z)(e, [
            'prefixCls',
            'invalidate',
            'item',
            'renderItem',
            'responsive',
            'registerSize',
            'itemKey',
            'className',
            'style',
            'children',
            'display',
            'order',
            'component',
          ]),
          C = l && !p;
        function x(e) {
          s(f, e);
        }
        c.useEffect(function () {
          return function () {
            x(null);
          };
        }, []);
        var w,
          N = o && a !== B ? o(a) : m;
        r ||
          (w = {
            opacity: C ? 0 : 1,
            height: C ? 0 : B,
            overflowY: C ? 'hidden' : B,
            order: l ? h : B,
            pointerEvents: C ? 'none' : B,
            position: C ? 'absolute' : B,
          });
        var k = {};
        C && (k['aria-hidden'] = !0);
        var S = c.createElement(
          y,
          (0, i.Z)(
            { className: u()(!r && n, d), style: (0, E.Z)((0, E.Z)({}, w), v) },
            k,
            g,
            { ref: t },
          ),
          N,
        );
        return (
          l &&
            (S = c.createElement(
              P.Z,
              {
                onResize: function (e) {
                  var t = e.offsetWidth;
                  x(t);
                },
              },
              S,
            )),
          S
        );
      }
      var W = c.forwardRef(V);
      W.displayName = 'Item';
      var H = W;
      function _() {
        var e = (0, c.useState)({}),
          t = (0, y.Z)(e, 2),
          n = t[1],
          r = (0, c.useRef)([]),
          a = (0, c.useRef)(!1),
          o = 0,
          i = 0;
        function l(e) {
          var t = o;
          (o += 1), r.current.length < t + 1 && (r.current[t] = e);
          var c = r.current[t];
          function l(e) {
            (r.current[t] = 'function' === typeof e ? e(r.current[t]) : e),
              k.Z.cancel(i),
              (i = (0, k.Z)(function () {
                a.current || n({});
              }));
          }
          return [c, l];
        }
        return (
          (0, c.useEffect)(function () {
            return function () {
              a.current = !0;
            };
          }, []),
          l
        );
      }
      var F = function (e, t) {
          var n = c.useContext(X);
          if (!n) {
            var r = e.component,
              a = void 0 === r ? 'div' : r,
              o = (0, Z.Z)(e, ['component']);
            return c.createElement(a, (0, i.Z)({}, o, { ref: t }));
          }
          var l = n.className,
            s = (0, Z.Z)(n, ['className']),
            f = e.className,
            d = (0, Z.Z)(e, ['className']);
          return c.createElement(
            X.Provider,
            { value: null },
            c.createElement(
              H,
              (0, i.Z)({ ref: t, className: u()(l, f) }, s, d),
            ),
          );
        },
        G = c.forwardRef(F);
      G.displayName = 'RawItem';
      var U = G,
        X = c.createContext(null),
        Y = 'responsive',
        q = 'invalidate';
      function $(e) {
        return '+ '.concat(e.length, ' ...');
      }
      function J(e, t) {
        var n = e.prefixCls,
          r = void 0 === n ? 'rc-overflow' : n,
          a = e.data,
          o = void 0 === a ? [] : a,
          l = e.renderItem,
          s = e.renderRawItem,
          f = e.itemKey,
          d = e.itemWidth,
          v = void 0 === d ? 10 : d,
          m = e.ssr,
          p = e.style,
          h = e.className,
          b = e.maxCount,
          g = e.renderRest,
          C = e.renderRawRest,
          x = e.suffix,
          w = e.component,
          N = void 0 === w ? 'div' : w,
          k = e.itemComponent,
          S = e.onVisibleChange,
          O = (0, Z.Z)(e, [
            'prefixCls',
            'data',
            'renderItem',
            'renderRawItem',
            'itemKey',
            'itemWidth',
            'ssr',
            'style',
            'className',
            'maxCount',
            'renderRest',
            'renderRawRest',
            'suffix',
            'component',
            'itemComponent',
            'onVisibleChange',
          ]),
          R = _(),
          I = 'full' === m,
          M = R(null),
          K = (0, y.Z)(M, 2),
          T = K[0],
          A = K[1],
          j = T || 0,
          z = R(new Map()),
          L = (0, y.Z)(z, 2),
          D = L[0],
          B = L[1],
          V = R(0),
          W = (0, y.Z)(V, 2),
          F = W[0],
          G = W[1],
          U = R(0),
          J = (0, y.Z)(U, 2),
          Q = J[0],
          ee = J[1],
          te = R(0),
          ne = (0, y.Z)(te, 2),
          re = ne[0],
          ae = ne[1],
          oe = (0, c.useState)(null),
          ie = (0, y.Z)(oe, 2),
          ce = ie[0],
          le = ie[1],
          ue = (0, c.useState)(null),
          se = (0, y.Z)(ue, 2),
          fe = se[0],
          de = se[1],
          ve = c.useMemo(
            function () {
              return null === fe && I ? Number.MAX_SAFE_INTEGER : fe || 0;
            },
            [fe, T],
          ),
          me = (0, c.useState)(!1),
          pe = (0, y.Z)(me, 2),
          he = pe[0],
          be = pe[1],
          ye = ''.concat(r, '-item'),
          ge = Math.max(F, Q),
          Ze = o.length && b === Y,
          Ee = b === q,
          Ce = Ze || ('number' === typeof b && o.length > b),
          xe = (0, c.useMemo)(
            function () {
              var e = o;
              return (
                Ze
                  ? (e =
                      null === T && I
                        ? o
                        : o.slice(0, Math.min(o.length, j / v)))
                  : 'number' === typeof b && (e = o.slice(0, b)),
                e
              );
            },
            [o, v, T, b, Ze],
          ),
          we = (0, c.useMemo)(
            function () {
              return Ze ? o.slice(ve + 1) : o.slice(xe.length);
            },
            [o, xe, Ze, ve],
          ),
          Ne = (0, c.useCallback)(
            function (e, t) {
              var n;
              return 'function' === typeof f
                ? f(e)
                : null !==
                    (n = f && (null === e || void 0 === e ? void 0 : e[f])) &&
                  void 0 !== n
                ? n
                : t;
            },
            [f],
          ),
          ke = (0, c.useCallback)(
            l ||
              function (e) {
                return e;
              },
            [l],
          );
        function Pe(e, t) {
          de(e),
            t || (be(e < o.length - 1), null === S || void 0 === S || S(e));
        }
        function Se(e, t) {
          A(t.clientWidth);
        }
        function Oe(e, t) {
          B(function (n) {
            var r = new Map(n);
            return null === t ? r.delete(e) : r.set(e, t), r;
          });
        }
        function Re(e, t) {
          ee(t), G(Q);
        }
        function Ie(e, t) {
          ae(t);
        }
        function Me(e) {
          return D.get(Ne(xe[e], e));
        }
        c.useLayoutEffect(
          function () {
            if (j && ge && xe) {
              var e = re,
                t = xe.length,
                n = t - 1;
              if (!t) return Pe(0), void le(null);
              for (var r = 0; r < t; r += 1) {
                var a = Me(r);
                if (void 0 === a) {
                  Pe(r - 1, !0);
                  break;
                }
                if (
                  ((e += a),
                  (0 === n && e <= j) || (r === n - 1 && e + Me(n) <= j))
                ) {
                  Pe(n), le(null);
                  break;
                }
                if (e + ge > j) {
                  Pe(r - 1), le(e - a - re + Q);
                  break;
                }
              }
              x && Me(0) + re > j && le(null);
            }
          },
          [j, D, Q, re, Ne, xe],
        );
        var Ke = he && !!we.length,
          Te = {};
        null !== ce && Ze && (Te = { position: 'absolute', left: ce, top: 0 });
        var Ae,
          je = { prefixCls: ye, responsive: Ze, component: k, invalidate: Ee },
          ze = s
            ? function (e, t) {
                var n = Ne(e, t);
                return c.createElement(
                  X.Provider,
                  {
                    key: n,
                    value: (0, E.Z)(
                      (0, E.Z)({}, je),
                      {},
                      {
                        order: t,
                        item: e,
                        itemKey: n,
                        registerSize: Oe,
                        display: t <= ve,
                      },
                    ),
                  },
                  s(e, t),
                );
              }
            : function (e, t) {
                var n = Ne(e, t);
                return c.createElement(
                  H,
                  (0, i.Z)({}, je, {
                    order: t,
                    key: n,
                    item: e,
                    renderItem: ke,
                    itemKey: n,
                    registerSize: Oe,
                    display: t <= ve,
                  }),
                );
              },
          Le = {
            order: Ke ? ve : Number.MAX_SAFE_INTEGER,
            className: ''.concat(ye, '-rest'),
            registerSize: Re,
            display: Ke,
          };
        if (C)
          C &&
            (Ae = c.createElement(
              X.Provider,
              { value: (0, E.Z)((0, E.Z)({}, je), Le) },
              C(we),
            ));
        else {
          var De = g || $;
          Ae = c.createElement(
            H,
            (0, i.Z)({}, je, Le),
            'function' === typeof De ? De(we) : De,
          );
        }
        var Be = c.createElement(
          N,
          (0, i.Z)({ className: u()(!Ee && r, h), style: p, ref: t }, O),
          xe.map(ze),
          Ce ? Ae : null,
          x &&
            c.createElement(
              H,
              (0, i.Z)({}, je, {
                order: ve,
                className: ''.concat(ye, '-suffix'),
                registerSize: Ie,
                display: !0,
                style: Te,
              }),
              x,
            ),
        );
        return Ze && (Be = c.createElement(P.Z, { onResize: Se }, Be)), Be;
      }
      var Q = c.forwardRef(J);
      (Q.displayName = 'Overflow'),
        (Q.Item = U),
        (Q.RESPONSIVE = Y),
        (Q.INVALIDATE = q);
      var ee = Q,
        te = ee,
        ne = n(6610),
        re = n(5991),
        ae = n(10379),
        oe = n(44144),
        ie = n(56982),
        ce = c.createContext(null);
      function le(e, t) {
        var n = (0, E.Z)({}, e);
        return (
          Object.keys(t).forEach(function (e) {
            var r = t[e];
            void 0 !== r && (n[e] = r);
          }),
          n
        );
      }
      function ue(e) {
        var t = e.children,
          n = e.locked,
          r = (0, Z.Z)(e, ['children', 'locked']),
          a = c.useContext(ce),
          o = (0, ie.Z)(
            function () {
              return le(a, r);
            },
            [a, r],
            function (e, t) {
              return !n && (e[0] !== t[0] || !L()(e[1], t[1]));
            },
          );
        return c.createElement(ce.Provider, { value: o }, t);
      }
      function se(e, t, n, r) {
        var a = c.useContext(ce),
          o = a.activeKey,
          i = a.onActive,
          l = a.onInactive,
          u = { active: o === e };
        return (
          t ||
            ((u.onMouseEnter = function (t) {
              null === n || void 0 === n || n({ key: e, domEvent: t }), i(e);
            }),
            (u.onMouseLeave = function (t) {
              null === r || void 0 === r || r({ key: e, domEvent: t }), l(e);
            })),
          u
        );
      }
      function fe(e) {
        var t = e.item,
          n = (0, Z.Z)(e, ['item']);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                (0, D.ZP)(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              );
            },
          }),
          n
        );
      }
      function de(e) {
        var t,
          n = e.icon,
          r = e.props,
          a = e.children;
        return (
          (t =
            'function' === typeof n ? c.createElement(n, (0, E.Z)({}, r)) : n),
          t || a || null
        );
      }
      function ve(e) {
        var t = c.useContext(ce),
          n = t.mode,
          r = t.rtl,
          a = t.inlineIndent;
        if ('inline' !== n) return null;
        var o = e;
        return r ? { paddingRight: o * a } : { paddingLeft: o * a };
      }
      var me = [],
        pe = c.createContext(null);
      function he() {
        return c.useContext(pe);
      }
      var be = c.createContext(me);
      function ye(e) {
        var t = c.useContext(be);
        return c.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, N.Z)(t), [e]) : t;
          },
          [t, e],
        );
      }
      var ge = c.createContext(null),
        Ze = c.createContext(null);
      function Ee(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function Ce(e) {
        var t = c.useContext(Ze);
        return Ee(t, e);
      }
      var xe = (function (e) {
          (0, ae.Z)(n, e);
          var t = (0, oe.Z)(n);
          function n() {
            return (0, ne.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, re.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    r = e.elementRef,
                    a = (0, Z.Z)(e, ['title', 'attribute', 'elementRef']),
                    o = (0, s.Z)(a, ['eventKey']);
                  return (
                    (0, D.ZP)(
                      !n,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    c.createElement(
                      te.Item,
                      (0, i.Z)(
                        {},
                        n,
                        { title: 'string' === typeof t ? t : void 0 },
                        o,
                        { ref: r },
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        we = function (e) {
          var t,
            n = e.style,
            r = e.className,
            a = e.eventKey,
            l = (e.warnKey, e.disabled),
            s = e.itemIcon,
            f = e.children,
            d = e.role,
            v = e.onMouseEnter,
            m = e.onMouseLeave,
            p = e.onClick,
            h = e.onKeyDown,
            b = e.onFocus,
            y = (0, Z.Z)(e, [
              'style',
              'className',
              'eventKey',
              'warnKey',
              'disabled',
              'itemIcon',
              'children',
              'role',
              'onMouseEnter',
              'onMouseLeave',
              'onClick',
              'onKeyDown',
              'onFocus',
            ]),
            g = Ce(a),
            C = c.useContext(ce),
            x = C.prefixCls,
            w = C.onItemClick,
            k = C.disabled,
            P = C.overflowDisabled,
            S = C.itemIcon,
            O = C.selectedKeys,
            I = C.onActive,
            M = ''.concat(x, '-item'),
            K = c.useRef(),
            T = c.useRef(),
            A = k || l,
            j = ye(a);
          var z = function (e) {
              return {
                key: a,
                keyPath: (0, N.Z)(j).reverse(),
                item: K.current,
                domEvent: e,
              };
            },
            L = s || S,
            D = se(a, A, v, m),
            B = D.active,
            V = (0, Z.Z)(D, ['active']),
            W = O.includes(a),
            H = ve(j.length),
            _ = function (e) {
              if (!A) {
                var t = z(e);
                null === p || void 0 === p || p(fe(t)), w(t);
              }
            },
            F = function (e) {
              if ((null === h || void 0 === h || h(e), e.which === R.Z.ENTER)) {
                var t = z(e);
                null === p || void 0 === p || p(fe(t)), w(t);
              }
            },
            G = function (e) {
              I(a), null === b || void 0 === b || b(e);
            },
            U = {};
          return (
            'option' === e.role && (U['aria-selected'] = W),
            c.createElement(
              xe,
              (0, i.Z)(
                {
                  ref: K,
                  elementRef: T,
                  role: null === d ? 'none' : d || 'menuitem',
                  tabIndex: l ? null : -1,
                  'data-menu-id': P && g ? null : g,
                },
                y,
                V,
                U,
                {
                  component: 'li',
                  'aria-disabled': l,
                  style: (0, E.Z)((0, E.Z)({}, H), n),
                  className: u()(
                    M,
                    ((t = {}),
                    (0, o.Z)(t, ''.concat(M, '-active'), B),
                    (0, o.Z)(t, ''.concat(M, '-selected'), W),
                    (0, o.Z)(t, ''.concat(M, '-disabled'), A),
                    t),
                    r,
                  ),
                  onClick: _,
                  onKeyDown: F,
                  onFocus: G,
                },
              ),
              f,
              c.createElement(de, {
                props: (0, E.Z)((0, E.Z)({}, e), {}, { isSelected: W }),
                icon: L,
              }),
            )
          );
        };
      function Ne(e) {
        var t = e.eventKey,
          n = he(),
          r = ye(t);
        return (
          c.useEffect(
            function () {
              if (n)
                return (
                  n.registerPath(t, r),
                  function () {
                    n.unregisterPath(t, r);
                  }
                );
            },
            [r],
          ),
          n ? null : c.createElement(we, e)
        );
      }
      var ke = Ne;
      function Pe(e, t) {
        return (0, C.Z)(e).map(function (e, n) {
          if (c.isValidElement(e)) {
            var r,
              a,
              o = e.key,
              i =
                null !==
                  (r =
                    null === (a = e.props) || void 0 === a
                      ? void 0
                      : a.eventKey) && void 0 !== r
                  ? r
                  : o,
              l = null === i || void 0 === i;
            l && (i = 'tmp_key-'.concat([].concat((0, N.Z)(t), [n]).join('-')));
            var u = { key: i, eventKey: i };
            return c.cloneElement(e, u);
          }
          return e;
        });
      }
      function Se(e) {
        var t = c.useRef(e);
        t.current = e;
        var n = c.useCallback(function () {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return null === (e = t.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [t].concat(r));
        }, []);
        return e ? n : void 0;
      }
      var Oe = function (e, t) {
          var n = e.className,
            r = e.children,
            a = (0, Z.Z)(e, ['className', 'children']),
            o = c.useContext(ce),
            l = o.prefixCls,
            s = o.mode;
          return c.createElement(
            'ul',
            (0, i.Z)(
              {
                className: u()(
                  l,
                  ''.concat(l, '-sub'),
                  ''
                    .concat(l, '-')
                    .concat('inline' === s ? 'inline' : 'vertical'),
                  n,
                ),
              },
              a,
              { 'data-menu-list': !0, ref: t },
            ),
            r,
          );
        },
        Re = c.forwardRef(Oe);
      Re.displayName = 'SubMenuList';
      var Ie = Re,
        Me = n(18481),
        Ke = { adjustX: 1, adjustY: 1 },
        Te = {
          topLeft: { points: ['bl', 'tl'], overflow: Ke, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: Ke, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: Ke, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: Ke, offset: [4, 0] },
        },
        Ae = {
          topLeft: { points: ['bl', 'tl'], overflow: Ke, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: Ke, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: Ke, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: Ke, offset: [4, 0] },
        };
      function je(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var ze = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function Le(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.children,
          a = e.popup,
          i = e.popupClassName,
          l = e.popupOffset,
          s = e.disabled,
          f = e.mode,
          d = e.onVisibleChange,
          v = c.useContext(ce),
          m = v.getPopupContainer,
          p = v.rtl,
          h = v.subMenuOpenDelay,
          b = v.subMenuCloseDelay,
          g = v.builtinPlacements,
          Z = v.triggerSubMenuAction,
          C = v.forceSubMenuRender,
          x = v.motion,
          w = v.defaultMotions,
          N = c.useState(!1),
          P = (0, y.Z)(N, 2),
          S = P[0],
          O = P[1],
          R = p ? (0, E.Z)((0, E.Z)({}, Ae), g) : (0, E.Z)((0, E.Z)({}, Te), g),
          I = ze[f],
          M = je(f, x, w),
          K = (0, E.Z)(
            (0, E.Z)({}, M),
            {},
            {
              leavedClassName: ''.concat(t, '-hidden'),
              removeOnLeave: !1,
              motionAppear: !0,
            },
          ),
          T = c.useRef();
        return (
          c.useEffect(
            function () {
              return (
                (T.current = (0, k.Z)(function () {
                  O(n);
                })),
                function () {
                  k.Z.cancel(T.current);
                }
              );
            },
            [n],
          ),
          c.createElement(
            Me.Z,
            {
              prefixCls: t,
              popupClassName: u()(
                ''.concat(t, '-popup'),
                (0, o.Z)({}, ''.concat(t, '-rtl'), p),
                i,
              ),
              stretch: 'horizontal' === f ? 'minWidth' : null,
              getPopupContainer: m,
              builtinPlacements: R,
              popupPlacement: I,
              popupVisible: S,
              popup: a,
              popupAlign: l && { offset: l },
              action: s ? [] : [Z],
              mouseEnterDelay: h,
              mouseLeaveDelay: b,
              onPopupVisibleChange: d,
              forceRender: C,
              popupMotion: K,
            },
            r,
          )
        );
      }
      var De = n(60444);
      function Be(e) {
        var t = e.id,
          n = e.open,
          r = e.keyPath,
          a = e.children,
          o = 'inline',
          l = c.useContext(ce),
          u = l.prefixCls,
          s = l.forceSubMenuRender,
          f = l.motion,
          d = l.defaultMotions,
          v = l.mode,
          m = c.useRef(!1);
        m.current = v === o;
        var p = c.useState(!m.current),
          h = (0, y.Z)(p, 2),
          b = h[0],
          g = h[1],
          Z = !!m.current && n;
        c.useEffect(
          function () {
            m.current && g(!1);
          },
          [v],
        );
        var C = (0, E.Z)({}, je(o, f, d));
        r.length > 1 && (C.motionAppear = !1);
        var x = C.onVisibleChanged;
        return (
          (C.onVisibleChanged = function (e) {
            return (
              m.current || e || g(!0),
              null === x || void 0 === x ? void 0 : x(e)
            );
          }),
          b
            ? null
            : c.createElement(
                ue,
                { mode: o, locked: !m.current },
                c.createElement(
                  De.Z,
                  (0, i.Z)({ visible: Z }, C, {
                    forceRender: s,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(u, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      r = e.style;
                    return c.createElement(
                      Ie,
                      { id: t, className: n, style: r },
                      a,
                    );
                  },
                ),
              )
        );
      }
      var Ve = function (e) {
        var t,
          n = e.style,
          r = e.className,
          a = e.title,
          l = e.eventKey,
          s = (e.warnKey, e.disabled),
          f = e.internalPopupClose,
          d = e.children,
          v = e.itemIcon,
          m = e.expandIcon,
          p = e.popupClassName,
          h = e.popupOffset,
          b = e.onClick,
          g = e.onMouseEnter,
          C = e.onMouseLeave,
          x = e.onTitleClick,
          w = e.onTitleMouseEnter,
          N = e.onTitleMouseLeave,
          k = (0, Z.Z)(e, [
            'style',
            'className',
            'title',
            'eventKey',
            'warnKey',
            'disabled',
            'internalPopupClose',
            'children',
            'itemIcon',
            'expandIcon',
            'popupClassName',
            'popupOffset',
            'onClick',
            'onMouseEnter',
            'onMouseLeave',
            'onTitleClick',
            'onTitleMouseEnter',
            'onTitleMouseLeave',
          ]),
          P = Ce(l),
          S = c.useContext(ce),
          O = S.prefixCls,
          R = S.mode,
          I = S.openKeys,
          M = S.disabled,
          K = S.overflowDisabled,
          T = S.activeKey,
          A = S.selectedKeys,
          j = S.itemIcon,
          z = S.expandIcon,
          L = S.onItemClick,
          D = S.onOpenChange,
          B = S.onActive,
          V = c.useContext(ge),
          W = V.isSubPathKey,
          H = ye(),
          _ = ''.concat(O, '-submenu'),
          F = M || s,
          G = c.useRef(),
          U = c.useRef();
        var X = v || j,
          Y = m || z,
          q = I.includes(l),
          $ = !K && q,
          J = W(A, l),
          Q = se(l, F, w, N),
          ee = Q.active,
          ne = (0, Z.Z)(Q, ['active']),
          re = c.useState(!1),
          ae = (0, y.Z)(re, 2),
          oe = ae[0],
          ie = ae[1],
          le = function (e) {
            F || ie(e);
          },
          me = function (e) {
            le(!0), null === g || void 0 === g || g({ key: l, domEvent: e });
          },
          pe = function (e) {
            le(!1), null === C || void 0 === C || C({ key: l, domEvent: e });
          },
          he = c.useMemo(
            function () {
              return ee || ('inline' !== R && (oe || W([T], l)));
            },
            [R, ee, T, oe, l, W],
          ),
          be = ve(H.length),
          Ze = function (e) {
            F ||
              (null === x || void 0 === x || x({ key: l, domEvent: e }),
              'inline' === R && D(l, !q));
          },
          Ee = Se(function (e) {
            null === b || void 0 === b || b(fe(e)), L(e);
          }),
          xe = function (e) {
            'inline' !== R && D(l, e);
          },
          we = function () {
            B(l);
          },
          Ne = P && ''.concat(P, '-popup'),
          ke = c.createElement(
            'div',
            (0, i.Z)(
              {
                role: 'menuitem',
                style: be,
                className: ''.concat(_, '-title'),
                tabIndex: F ? null : -1,
                ref: G,
                title: 'string' === typeof a ? a : null,
                'data-menu-id': K && P ? null : P,
                'aria-expanded': $,
                'aria-haspopup': !0,
                'aria-controls': Ne,
                'aria-disabled': F,
                onClick: Ze,
                onFocus: we,
              },
              ne,
            ),
            a,
            c.createElement(
              de,
              {
                icon: 'horizontal' !== R ? Y : null,
                props: (0, E.Z)(
                  (0, E.Z)({}, e),
                  {},
                  { isOpen: $, isSubMenu: !0 },
                ),
              },
              c.createElement('i', { className: ''.concat(_, '-arrow') }),
            ),
          ),
          Pe = c.useRef(R);
        if (
          ('inline' !== R && (Pe.current = H.length > 1 ? 'vertical' : R), !K)
        ) {
          var Oe = Pe.current;
          ke = c.createElement(
            Le,
            {
              mode: Oe,
              prefixCls: _,
              visible: !f && $ && 'inline' !== R,
              popupClassName: p,
              popupOffset: h,
              popup: c.createElement(
                ue,
                { mode: 'horizontal' === Oe ? 'vertical' : Oe },
                c.createElement(Ie, { id: Ne, ref: U }, d),
              ),
              disabled: F,
              onVisibleChange: xe,
            },
            ke,
          );
        }
        return c.createElement(
          ue,
          {
            onItemClick: Ee,
            mode: 'horizontal' === R ? 'vertical' : R,
            itemIcon: X,
            expandIcon: Y,
          },
          c.createElement(
            te.Item,
            (0, i.Z)({ role: 'none' }, k, {
              component: 'li',
              style: n,
              className: u()(
                _,
                ''.concat(_, '-').concat(R),
                r,
                ((t = {}),
                (0, o.Z)(t, ''.concat(_, '-open'), $),
                (0, o.Z)(t, ''.concat(_, '-active'), he),
                (0, o.Z)(t, ''.concat(_, '-selected'), J),
                (0, o.Z)(t, ''.concat(_, '-disabled'), F),
                t),
              ),
              onMouseEnter: me,
              onMouseLeave: pe,
            }),
            ke,
            !K && c.createElement(Be, { id: Ne, open: $, keyPath: H }, d),
          ),
        );
      };
      function We(e) {
        var t,
          n = e.eventKey,
          r = e.children,
          a = ye(n),
          o = Pe(r, a),
          i = he();
        return (
          c.useEffect(
            function () {
              if (i)
                return (
                  i.registerPath(n, a),
                  function () {
                    i.unregisterPath(n, a);
                  }
                );
            },
            [a],
          ),
          (t = i ? o : c.createElement(Ve, e, o)),
          c.createElement(be.Provider, { value: a }, t)
        );
      }
      var He = n(5110);
      function _e(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0, He.Z)(e)) {
          var n = e.nodeName.toLowerCase(),
            r =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              ('a' === n && !!e.getAttribute('href')),
            a = e.getAttribute('tabindex'),
            o = Number(a),
            i = null;
          return (
            a && !Number.isNaN(o) ? (i = o) : r && null === i && (i = 0),
            r && e.disabled && (i = null),
            null !== i && (i >= 0 || (t && i < 0))
          );
        }
        return !1;
      }
      function Fe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, N.Z)(e.querySelectorAll('*')).filter(function (e) {
            return _e(e, t);
          });
        return _e(e, t) && n.unshift(e), n;
      }
      var Ge = R.Z.LEFT,
        Ue = R.Z.RIGHT,
        Xe = R.Z.UP,
        Ye = R.Z.DOWN,
        qe = R.Z.ENTER,
        $e = R.Z.ESC,
        Je = [Xe, Ye, Ge, Ue];
      function Qe(e, t, n, r) {
        var a,
          i,
          c,
          l,
          u = 'prev',
          s = 'next',
          f = 'children',
          d = 'parent';
        if ('inline' === e && r === qe) return { inlineTrigger: !0 };
        var v = ((a = {}), (0, o.Z)(a, Xe, u), (0, o.Z)(a, Ye, s), a),
          m =
            ((i = {}),
            (0, o.Z)(i, Ge, n ? s : u),
            (0, o.Z)(i, Ue, n ? u : s),
            (0, o.Z)(i, Ye, f),
            (0, o.Z)(i, qe, f),
            i),
          p =
            ((c = {}),
            (0, o.Z)(c, Xe, u),
            (0, o.Z)(c, Ye, s),
            (0, o.Z)(c, qe, f),
            (0, o.Z)(c, $e, d),
            (0, o.Z)(c, Ge, n ? f : d),
            (0, o.Z)(c, Ue, n ? d : f),
            c),
          h = {
            inline: v,
            horizontal: m,
            vertical: p,
            inlineSub: v,
            horizontalSub: p,
            verticalSub: p,
          },
          b =
            null === (l = h[''.concat(e).concat(t ? '' : 'Sub')]) ||
            void 0 === l
              ? void 0
              : l[r];
        switch (b) {
          case u:
            return { offset: -1, sibling: !0 };
          case s:
            return { offset: 1, sibling: !0 };
          case d:
            return { offset: -1, sibling: !1 };
          case f:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function et(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function tt(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function nt(e, t) {
        var n = Fe(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function rt(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var a = nt(e, t),
          o = a.length,
          i = a.findIndex(function (e) {
            return n === e;
          });
        return (
          r < 0 ? (-1 === i ? (i = o - 1) : (i -= 1)) : r > 0 && (i += 1),
          (i = (i + o) % o),
          a[i]
        );
      }
      function at(e, t, n, r, a, o, i, l, u, s) {
        var f = c.useRef(),
          d = c.useRef();
        d.current = t;
        var v = function () {
          k.Z.cancel(f.current);
        };
        return (
          c.useEffect(function () {
            return function () {
              v();
            };
          }, []),
          function (c) {
            var m = c.which;
            if ([].concat(Je, [qe, $e]).includes(m)) {
              var p,
                h,
                b,
                y = function () {
                  (p = new Set()), (h = new Map()), (b = new Map());
                  var e = o();
                  return (
                    e.forEach(function (e) {
                      var t = document.querySelector(
                        "[data-menu-id='".concat(Ee(r, e), "']"),
                      );
                      t && (p.add(t), b.set(t, e), h.set(e, t));
                    }),
                    p
                  );
                };
              y();
              var g = h.get(t),
                Z = tt(g, p),
                E = b.get(Z),
                C = Qe(e, 1 === i(E, !0).length, n, m);
              if (!C) return;
              Je.includes(m) && c.preventDefault();
              var x = function (e) {
                if (e) {
                  var t = e,
                    n = e.querySelector('a');
                  (null === n || void 0 === n
                    ? void 0
                    : n.getAttribute('href')) && (t = n);
                  var r = b.get(e);
                  l(r),
                    v(),
                    (f.current = (0, k.Z)(function () {
                      d.current === r && t.focus();
                    }));
                }
              };
              if (C.sibling || !Z) {
                var w;
                w = Z && 'inline' !== e ? et(Z) : a.current;
                var N = rt(w, p, Z, C.offset);
                x(N);
              } else if (C.inlineTrigger) u(E);
              else if (C.offset > 0)
                u(E, !0),
                  v(),
                  (f.current = (0, k.Z)(function () {
                    y();
                    var e = Z.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = rt(t, p);
                    x(n);
                  }, 5));
              else if (C.offset < 0) {
                var P = i(E, !0),
                  S = P[P.length - 2],
                  O = h.get(S);
                u(S, !1), x(O);
              }
            }
            null === s || void 0 === s || s(c);
          }
        );
      }
      var ot = Math.random().toFixed(5).toString().slice(2),
        it = 0;
      function ct(e) {
        var t = (0, w.Z)(e, { value: e }),
          n = (0, y.Z)(t, 2),
          r = n[0],
          a = n[1];
        return (
          c.useEffect(function () {
            it += 1;
            var e = ''.concat(ot, '-').concat(it);
            a('rc-menu-uuid-'.concat(e));
          }, []),
          r
        );
      }
      function lt(e) {
        Promise.resolve().then(e);
      }
      var ut = '__RC_UTIL_PATH_SPLIT__',
        st = function (e) {
          return e.join(ut);
        },
        ft = function (e) {
          return e.split(ut);
        },
        dt = 'rc-menu-more';
      function vt() {
        var e = c.useState({}),
          t = (0, y.Z)(e, 2),
          n = t[1],
          r = (0, c.useRef)(new Map()),
          a = (0, c.useRef)(new Map()),
          o = c.useState([]),
          i = (0, y.Z)(o, 2),
          l = i[0],
          u = i[1],
          s = (0, c.useRef)(0),
          f = (0, c.useRef)(!1),
          d = function () {
            f.current || n({});
          },
          v = (0, c.useCallback)(function (e, t) {
            var n = st(t);
            a.current.set(n, e), r.current.set(e, n), (s.current += 1);
            var o = s.current;
            lt(function () {
              o === s.current && d();
            });
          }, []),
          m = (0, c.useCallback)(function (e, t) {
            var n = st(t);
            a.current.delete(n), r.current.delete(e);
          }, []),
          p = (0, c.useCallback)(function (e) {
            u(e);
          }, []),
          h = (0, c.useCallback)(
            function (e, t) {
              var n = r.current.get(e) || '',
                a = ft(n);
              return t && l.includes(a[0]) && a.unshift(dt), a;
            },
            [l],
          ),
          b = (0, c.useCallback)(
            function (e, t) {
              return e.some(function (e) {
                var n = h(e, !0);
                return n.includes(t);
              });
            },
            [h],
          ),
          g = function () {
            var e = (0, N.Z)(r.current.keys());
            return l.length && e.push(dt), e;
          },
          Z = (0, c.useCallback)(function (e) {
            var t = ''.concat(r.current.get(e)).concat(ut),
              n = new Set();
            return (
              (0, N.Z)(a.current.keys()).forEach(function (e) {
                e.startsWith(t) && n.add(a.current.get(e));
              }),
              n
            );
          }, []);
        return (
          c.useEffect(function () {
            return function () {
              f.current = !0;
            };
          }, []),
          {
            registerPath: v,
            unregisterPath: m,
            refreshOverflowKeys: p,
            isSubPathKey: b,
            getKeyPath: h,
            getKeys: g,
            getSubPathKeys: Z,
          }
        );
      }
      var mt = [],
        pt = function (e) {
          var t,
            n,
            r = e.prefixCls,
            a = void 0 === r ? 'rc-menu' : r,
            l = e.style,
            s = e.className,
            f = e.tabIndex,
            d = void 0 === f ? 0 : f,
            v = e.children,
            m = e.direction,
            p = e.id,
            h = e.mode,
            b = void 0 === h ? 'vertical' : h,
            g = e.inlineCollapsed,
            C = e.disabled,
            x = e.disabledOverflow,
            k = e.subMenuOpenDelay,
            P = void 0 === k ? 0.1 : k,
            S = e.subMenuCloseDelay,
            O = void 0 === S ? 0.1 : S,
            R = e.forceSubMenuRender,
            I = e.defaultOpenKeys,
            M = e.openKeys,
            K = e.activeKey,
            T = e.defaultActiveFirst,
            A = e.selectable,
            j = void 0 === A || A,
            z = e.multiple,
            D = void 0 !== z && z,
            B = e.defaultSelectedKeys,
            V = e.selectedKeys,
            W = e.onSelect,
            H = e.onDeselect,
            _ = e.inlineIndent,
            F = void 0 === _ ? 24 : _,
            G = e.motion,
            U = e.defaultMotions,
            X = e.triggerSubMenuAction,
            Y = void 0 === X ? 'hover' : X,
            q = e.builtinPlacements,
            $ = e.itemIcon,
            J = e.expandIcon,
            Q = e.overflowedIndicator,
            ee = void 0 === Q ? '...' : Q,
            ne = e.overflowedIndicatorPopupClassName,
            re = e.getPopupContainer,
            ae = e.onClick,
            oe = e.onOpenChange,
            ie = e.onKeyDown,
            ce =
              (e.openAnimation,
              e.openTransitionName,
              (0, Z.Z)(e, [
                'prefixCls',
                'style',
                'className',
                'tabIndex',
                'children',
                'direction',
                'id',
                'mode',
                'inlineCollapsed',
                'disabled',
                'disabledOverflow',
                'subMenuOpenDelay',
                'subMenuCloseDelay',
                'forceSubMenuRender',
                'defaultOpenKeys',
                'openKeys',
                'activeKey',
                'defaultActiveFirst',
                'selectable',
                'multiple',
                'defaultSelectedKeys',
                'selectedKeys',
                'onSelect',
                'onDeselect',
                'inlineIndent',
                'motion',
                'defaultMotions',
                'triggerSubMenuAction',
                'builtinPlacements',
                'itemIcon',
                'expandIcon',
                'overflowedIndicator',
                'overflowedIndicatorPopupClassName',
                'getPopupContainer',
                'onClick',
                'onOpenChange',
                'onKeyDown',
                'openAnimation',
                'openTransitionName',
              ])),
            le = Pe(v, mt),
            se = c.useState(!1),
            de = (0, y.Z)(se, 2),
            ve = de[0],
            me = de[1],
            he = c.useRef(),
            be = ct(p),
            ye = 'rtl' === m;
          var Ee = c.useMemo(
              function () {
                return ('inline' !== b && 'vertical' !== b) || !g
                  ? [b, !1]
                  : ['vertical', g];
              },
              [b, g],
            ),
            Ce = (0, y.Z)(Ee, 2),
            xe = Ce[0],
            we = Ce[1],
            Ne = c.useState(0),
            Oe = (0, y.Z)(Ne, 2),
            Re = Oe[0],
            Ie = Oe[1],
            Me = Re >= le.length - 1 || 'horizontal' !== xe || x,
            Ke = (0, w.Z)(I, {
              value: M,
              postState: function (e) {
                return e || mt;
              },
            }),
            Te = (0, y.Z)(Ke, 2),
            Ae = Te[0],
            je = Te[1],
            ze = function (e) {
              je(e), null === oe || void 0 === oe || oe(e);
            },
            Le = c.useState(Ae),
            De = (0, y.Z)(Le, 2),
            Be = De[0],
            Ve = De[1],
            He = 'inline' === xe,
            _e = c.useRef(!1);
          c.useEffect(
            function () {
              He && Ve(Ae);
            },
            [Ae],
          ),
            c.useEffect(
              function () {
                _e.current ? (He ? je(Be) : ze(mt)) : (_e.current = !0);
              },
              [He],
            );
          var Fe = vt(),
            Ge = Fe.registerPath,
            Ue = Fe.unregisterPath,
            Xe = Fe.refreshOverflowKeys,
            Ye = Fe.isSubPathKey,
            qe = Fe.getKeyPath,
            $e = Fe.getKeys,
            Je = Fe.getSubPathKeys,
            Qe = c.useMemo(
              function () {
                return { registerPath: Ge, unregisterPath: Ue };
              },
              [Ge, Ue],
            ),
            et = c.useMemo(
              function () {
                return { isSubPathKey: Ye };
              },
              [Ye],
            );
          c.useEffect(
            function () {
              Xe(
                Me
                  ? mt
                  : le.slice(Re + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [Re, Me],
          );
          var tt = (0, w.Z)(
              K ||
                (T && (null === (t = le[0]) || void 0 === t ? void 0 : t.key)),
              { value: K },
            ),
            nt = (0, y.Z)(tt, 2),
            rt = nt[0],
            ot = nt[1],
            it = Se(function (e) {
              ot(e);
            }),
            lt = Se(function () {
              ot(void 0);
            }),
            ut = (0, w.Z)(B || [], {
              value: V,
              postState: function (e) {
                return Array.isArray(e)
                  ? e
                  : null === e || void 0 === e
                  ? mt
                  : [e];
              },
            }),
            st = (0, y.Z)(ut, 2),
            ft = st[0],
            pt = st[1],
            ht = function (e) {
              if (j) {
                var t,
                  n = e.key,
                  r = ft.includes(n);
                (t = D
                  ? r
                    ? ft.filter(function (e) {
                        return e !== n;
                      })
                    : [].concat((0, N.Z)(ft), [n])
                  : [n]),
                  pt(t);
                var a = (0, E.Z)((0, E.Z)({}, e), {}, { selectedKeys: t });
                r
                  ? null === H || void 0 === H || H(a)
                  : null === W || void 0 === W || W(a);
              }
              !D && Ae.length && 'inline' !== xe && ze(mt);
            },
            bt = Se(function (e) {
              null === ae || void 0 === ae || ae(fe(e)), ht(e);
            }),
            yt = Se(function (e, t) {
              var n = Ae.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== xe) {
                var r = Je(e);
                n = n.filter(function (e) {
                  return !r.has(e);
                });
              }
              L()(Ae, n) || ze(n);
            }),
            gt = Se(re),
            Zt = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !Ae.includes(e);
              yt(e, n);
            },
            Et = at(xe, rt, ye, be, he, $e, qe, ot, Zt, ie);
          c.useEffect(function () {
            me(!0);
          }, []);
          var Ct =
              'horizontal' !== xe || x
                ? le
                : le.map(function (e, t) {
                    return c.createElement(
                      ue,
                      { key: e.key, overflowDisabled: t > Re },
                      e,
                    );
                  }),
            xt = c.createElement(
              te,
              (0, i.Z)(
                {
                  id: p,
                  ref: he,
                  prefixCls: ''.concat(a, '-overflow'),
                  component: 'ul',
                  itemComponent: ke,
                  className: u()(
                    a,
                    ''.concat(a, '-root'),
                    ''.concat(a, '-').concat(xe),
                    s,
                    ((n = {}),
                    (0, o.Z)(n, ''.concat(a, '-inline-collapsed'), we),
                    (0, o.Z)(n, ''.concat(a, '-rtl'), ye),
                    n),
                  ),
                  dir: m,
                  style: l,
                  role: 'menu',
                  tabIndex: d,
                  data: Ct,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? le.slice(-t) : null;
                    return c.createElement(
                      We,
                      {
                        eventKey: dt,
                        title: ee,
                        disabled: Me,
                        internalPopupClose: 0 === t,
                        popupClassName: ne,
                      },
                      n,
                    );
                  },
                  maxCount:
                    'horizontal' !== xe || x ? te.INVALIDATE : te.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    Ie(e);
                  },
                  onKeyDown: Et,
                },
                ce,
              ),
            );
          return c.createElement(
            Ze.Provider,
            { value: be },
            c.createElement(
              ue,
              {
                prefixCls: a,
                mode: xe,
                openKeys: Ae,
                rtl: ye,
                disabled: C,
                motion: ve ? G : null,
                defaultMotions: ve ? U : null,
                activeKey: rt,
                onActive: it,
                onInactive: lt,
                selectedKeys: ft,
                inlineIndent: F,
                subMenuOpenDelay: P,
                subMenuCloseDelay: O,
                forceSubMenuRender: R,
                builtinPlacements: q,
                triggerSubMenuAction: Y,
                getPopupContainer: gt,
                itemIcon: $,
                expandIcon: J,
                onItemClick: bt,
                onOpenChange: yt,
              },
              c.createElement(ge.Provider, { value: et }, xt),
              c.createElement(
                'div',
                { style: { display: 'none' }, 'aria-hidden': !0 },
                c.createElement(pe.Provider, { value: Qe }, le),
              ),
            ),
          );
        },
        ht = pt,
        bt = function (e) {
          var t = e.className,
            n = e.title,
            r = (e.eventKey, e.children),
            a = (0, Z.Z)(e, ['className', 'title', 'eventKey', 'children']),
            o = c.useContext(ce),
            l = o.prefixCls,
            s = ''.concat(l, '-item-group');
          return c.createElement(
            'li',
            (0, i.Z)({}, a, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: u()(s, t),
            }),
            c.createElement(
              'div',
              {
                className: ''.concat(s, '-title'),
                title: 'string' === typeof n ? n : void 0,
              },
              n,
            ),
            c.createElement('ul', { className: ''.concat(s, '-list') }, r),
          );
        };
      function yt(e) {
        var t = e.children,
          n = (0, Z.Z)(e, ['children']),
          r = ye(n.eventKey),
          a = Pe(t, r),
          o = he();
        return o ? a : c.createElement(bt, (0, s.Z)(n, ['warnKey']), a);
      }
      function gt(e) {
        var t = e.className,
          n = e.style,
          r = c.useContext(ce),
          a = r.prefixCls,
          o = he();
        return o
          ? null
          : c.createElement('li', {
              className: u()(''.concat(a, '-item-divider'), t),
              style: n,
            });
      }
      var Zt = ht;
      (Zt.Item = ke), (Zt.SubMenu = We), (Zt.ItemGroup = yt), (Zt.Divider = gt);
      var Et = Zt,
        Ct = { adjustX: 1, adjustY: 1 },
        xt = [0, 0],
        wt = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: Ct,
            offset: [0, -4],
            targetOffset: xt,
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: Ct,
            offset: [0, -4],
            targetOffset: xt,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: Ct,
            offset: [0, -4],
            targetOffset: xt,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: Ct,
            offset: [0, 4],
            targetOffset: xt,
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: Ct,
            offset: [0, 4],
            targetOffset: xt,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: Ct,
            offset: [0, 4],
            targetOffset: xt,
          },
        },
        Nt = wt;
      function kt(e, t) {
        var n = e.arrow,
          r = void 0 !== n && n,
          a = e.prefixCls,
          i = void 0 === a ? 'rc-dropdown' : a,
          l = e.transitionName,
          s = e.animation,
          f = e.align,
          d = e.placement,
          v = void 0 === d ? 'bottomLeft' : d,
          m = e.placements,
          p = void 0 === m ? Nt : m,
          h = e.getPopupContainer,
          b = e.showAction,
          g = e.hideAction,
          E = e.overlayClassName,
          C = e.overlayStyle,
          x = e.visible,
          w = e.trigger,
          N = void 0 === w ? ['hover'] : w,
          k = (0, Z.Z)(e, [
            'arrow',
            'prefixCls',
            'transitionName',
            'animation',
            'align',
            'placement',
            'placements',
            'getPopupContainer',
            'showAction',
            'hideAction',
            'overlayClassName',
            'overlayStyle',
            'visible',
            'trigger',
          ]),
          P = c.useState(),
          S = (0, y.Z)(P, 2),
          O = S[0],
          R = S[1],
          I = 'visible' in e ? x : O,
          M = c.useRef(null);
        c.useImperativeHandle(t, function () {
          return M.current;
        });
        var K = function () {
            var t,
              n = e.overlay;
            return (t = 'function' === typeof n ? n() : n), t;
          },
          T = function (t) {
            var n = e.onOverlayClick,
              r = K().props;
            R(!1), n && n(t), r.onClick && r.onClick(t);
          },
          A = function (t) {
            var n = e.onVisibleChange;
            R(t), 'function' === typeof n && n(t);
          },
          j = function () {
            var e = K(),
              t = { prefixCls: ''.concat(i, '-menu'), onClick: T };
            return (
              'string' === typeof e.type && delete t.prefixCls,
              c.createElement(
                c.Fragment,
                null,
                r &&
                  c.createElement('div', { className: ''.concat(i, '-arrow') }),
                c.cloneElement(e, t),
              )
            );
          },
          z = function () {
            var t = e.overlay;
            return 'function' === typeof t ? j : j();
          },
          L = function () {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? t : !n;
          },
          D = function () {
            var t = e.openClassName;
            return void 0 !== t ? t : ''.concat(i, '-open');
          },
          B = function () {
            var t = e.children,
              n = t.props ? t.props : {},
              r = u()(n.className, D());
            return O && t ? c.cloneElement(t, { className: r }) : t;
          },
          V = g;
        return (
          V || -1 === N.indexOf('contextMenu') || (V = ['click']),
          c.createElement(
            Me.Z,
            Object.assign({}, k, {
              prefixCls: i,
              ref: M,
              popupClassName: u()(
                E,
                (0, o.Z)({}, ''.concat(i, '-show-arrow'), r),
              ),
              popupStyle: C,
              builtinPlacements: p,
              action: N,
              showAction: b,
              hideAction: V || [],
              popupPlacement: v,
              popupAlign: f,
              popupTransitionName: l,
              popupAnimation: s,
              popupVisible: I,
              stretch: L() ? 'minWidth' : '',
              popup: z(),
              onPopupVisibleChange: A,
              getPopupContainer: h,
            }),
            B(),
          )
        );
      }
      var Pt = c.forwardRef(kt),
        St = Pt;
      function Ot(e, t) {
        var n = e.prefixCls,
          r = e.editable,
          a = e.locale,
          o = e.style;
        return r && !1 !== r.showAdd
          ? c.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: o,
                'aria-label':
                  (null === a || void 0 === a ? void 0 : a.addAriaLabel) ||
                  'Add tab',
                onClick: function (e) {
                  r.onEdit('add', { event: e });
                },
              },
              r.addIcon || '+',
            )
          : null;
      }
      var Rt = c.forwardRef(Ot);
      function It(e, t) {
        var n = e.prefixCls,
          r = e.id,
          a = e.tabs,
          i = e.locale,
          l = e.mobile,
          s = e.moreIcon,
          f = void 0 === s ? 'More' : s,
          d = e.moreTransitionName,
          v = e.style,
          m = e.className,
          p = e.editable,
          h = e.tabBarGutter,
          b = e.rtl,
          g = e.onTabClick,
          Z = (0, c.useState)(!1),
          E = (0, y.Z)(Z, 2),
          C = E[0],
          x = E[1],
          w = (0, c.useState)(null),
          N = (0, y.Z)(w, 2),
          k = N[0],
          P = N[1],
          S = ''.concat(r, '-more-popup'),
          O = ''.concat(n, '-dropdown'),
          I = null !== k ? ''.concat(S, '-').concat(k) : null,
          M = null === i || void 0 === i ? void 0 : i.dropdownAriaLabel,
          K = c.createElement(
            Et,
            {
              onClick: function (e) {
                var t = e.key,
                  n = e.domEvent;
                g(t, n), x(!1);
              },
              id: S,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': I,
              selectedKeys: [k],
              'aria-label': void 0 !== M ? M : 'expanded dropdown',
            },
            a.map(function (e) {
              return c.createElement(
                ke,
                {
                  key: e.key,
                  id: ''.concat(S, '-').concat(e.key),
                  role: 'option',
                  'aria-controls': r && ''.concat(r, '-panel-').concat(e.key),
                  disabled: e.disabled,
                },
                e.tab,
              );
            }),
          );
        function T(e) {
          for (
            var t = a.filter(function (e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function (e) {
                  return e.key === k;
                }) || 0,
              r = t.length,
              o = 0;
            o < r;
            o += 1
          ) {
            n = (n + e + r) % r;
            var i = t[n];
            if (!i.disabled) return void P(i.key);
          }
        }
        function A(e) {
          var t = e.which;
          if (C)
            switch (t) {
              case R.Z.UP:
                T(-1), e.preventDefault();
                break;
              case R.Z.DOWN:
                T(1), e.preventDefault();
                break;
              case R.Z.ESC:
                x(!1);
                break;
              case R.Z.SPACE:
              case R.Z.ENTER:
                null !== k && g(k, e);
                break;
            }
          else
            [R.Z.DOWN, R.Z.SPACE, R.Z.ENTER].includes(t) &&
              (x(!0), e.preventDefault());
        }
        (0, c.useEffect)(
          function () {
            var e = document.getElementById(I);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [k],
        ),
          (0, c.useEffect)(
            function () {
              C || P(null);
            },
            [C],
          );
        var j = (0, o.Z)({}, b ? 'marginRight' : 'marginLeft', h);
        a.length || ((j.visibility = 'hidden'), (j.order = 1));
        var z = u()((0, o.Z)({}, ''.concat(O, '-rtl'), b)),
          L = l
            ? null
            : c.createElement(
                St,
                {
                  prefixCls: O,
                  overlay: K,
                  trigger: ['hover'],
                  visible: C,
                  transitionName: d,
                  onVisibleChange: x,
                  overlayClassName: z,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                c.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: j,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': S,
                    id: ''.concat(r, '-more'),
                    'aria-expanded': C,
                    onKeyDown: A,
                  },
                  f,
                ),
              );
        return c.createElement(
          'div',
          {
            className: u()(''.concat(n, '-nav-operations'), m),
            style: v,
            ref: t,
          },
          L,
          c.createElement(Rt, { prefixCls: n, locale: i, editable: p }),
        );
      }
      var Mt = c.forwardRef(It),
        Kt = (0, c.createContext)(null),
        Tt = 0.1,
        At = 0.01,
        jt = 20,
        zt = Math.pow(0.995, jt);
      function Lt(e, t) {
        var n = (0, c.useState)(),
          r = (0, y.Z)(n, 2),
          a = r[0],
          o = r[1],
          i = (0, c.useState)(0),
          l = (0, y.Z)(i, 2),
          u = l[0],
          s = l[1],
          f = (0, c.useState)(0),
          d = (0, y.Z)(f, 2),
          v = d[0],
          m = d[1],
          p = (0, c.useState)(),
          h = (0, y.Z)(p, 2),
          b = h[0],
          g = h[1],
          Z = (0, c.useRef)();
        function E(e) {
          var t = e.touches[0],
            n = t.screenX,
            r = t.screenY;
          o({ x: n, y: r }), window.clearInterval(Z.current);
        }
        function C(e) {
          if (a) {
            e.preventDefault();
            var n = e.touches[0],
              r = n.screenX,
              i = n.screenY;
            o({ x: r, y: i });
            var c = r - a.x,
              l = i - a.y;
            t(c, l);
            var f = Date.now();
            s(f), m(f - u), g({ x: c, y: l });
          }
        }
        function x() {
          if (a && (o(null), g(null), b)) {
            var e = b.x / v,
              n = b.y / v,
              r = Math.abs(e),
              i = Math.abs(n);
            if (Math.max(r, i) < Tt) return;
            var c = e,
              l = n;
            Z.current = window.setInterval(function () {
              Math.abs(c) < At && Math.abs(l) < At
                ? window.clearInterval(Z.current)
                : ((c *= zt), (l *= zt), t(c * jt, l * jt));
            }, jt);
          }
        }
        var w = (0, c.useRef)();
        function N(e) {
          var n = e.deltaX,
            r = e.deltaY,
            a = 0,
            o = Math.abs(n),
            i = Math.abs(r);
          o === i
            ? (a = 'x' === w.current ? n : r)
            : o > i
            ? ((a = n), (w.current = 'x'))
            : ((a = r), (w.current = 'y')),
            t(-a, -a) && e.preventDefault();
        }
        var k = (0, c.useRef)(null);
        (k.current = {
          onTouchStart: E,
          onTouchMove: C,
          onTouchEnd: x,
          onWheel: N,
        }),
          c.useEffect(function () {
            function t(e) {
              k.current.onTouchStart(e);
            }
            function n(e) {
              k.current.onTouchMove(e);
            }
            function r(e) {
              k.current.onTouchEnd(e);
            }
            function a(e) {
              k.current.onWheel(e);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', r, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', a),
              function () {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', r);
              }
            );
          }, []);
      }
      function Dt() {
        var e = (0, c.useRef)(new Map());
        function t(t) {
          return (
            e.current.has(t) || e.current.set(t, c.createRef()),
            e.current.get(t)
          );
        }
        function n(t) {
          e.current.delete(t);
        }
        return [t, n];
      }
      function Bt(e, t) {
        var n = c.useRef(e),
          r = c.useState({}),
          a = (0, y.Z)(r, 2),
          o = a[1];
        function i(e) {
          var r = 'function' === typeof e ? e(n.current) : e;
          r !== n.current && t(r, n.current), (n.current = r), o({});
        }
        return [n.current, i];
      }
      var Vt = function (e) {
        var t,
          n = e.position,
          r = e.prefixCls,
          a = e.extra;
        if (!a) return null;
        var o = a;
        return (
          'right' === n && (t = o.right || (!o.left && o) || null),
          'left' === n && (t = o.left || null),
          t
            ? c.createElement(
                'div',
                { className: ''.concat(r, '-extra-content') },
                t,
              )
            : null
        );
      };
      function Wt(e, t) {
        var n,
          r = c.useContext(Kt),
          a = r.prefixCls,
          l = r.tabs,
          s = e.className,
          f = e.style,
          d = e.id,
          v = e.animated,
          m = e.activeKey,
          p = e.rtl,
          h = e.extra,
          b = e.editable,
          g = e.locale,
          Z = e.tabPosition,
          C = e.tabBarGutter,
          x = e.children,
          w = e.onTabClick,
          R = e.onTabScroll,
          I = (0, c.useRef)(),
          K = (0, c.useRef)(),
          A = (0, c.useRef)(),
          z = (0, c.useRef)(),
          L = Dt(),
          D = (0, y.Z)(L, 2),
          B = D[0],
          V = D[1],
          W = 'top' === Z || 'bottom' === Z,
          H = Bt(0, function (e, t) {
            W && R && R({ direction: e > t ? 'left' : 'right' });
          }),
          _ = (0, y.Z)(H, 2),
          F = _[0],
          G = _[1],
          U = Bt(0, function (e, t) {
            !W && R && R({ direction: e > t ? 'top' : 'bottom' });
          }),
          X = (0, y.Z)(U, 2),
          Y = X[0],
          q = X[1],
          $ = (0, c.useState)(0),
          J = (0, y.Z)($, 2),
          Q = J[0],
          ee = J[1],
          te = (0, c.useState)(0),
          ne = (0, y.Z)(te, 2),
          re = ne[0],
          ae = ne[1],
          oe = (0, c.useState)(0),
          ie = (0, y.Z)(oe, 2),
          ce = ie[0],
          le = ie[1],
          ue = (0, c.useState)(0),
          se = (0, y.Z)(ue, 2),
          fe = se[0],
          de = se[1],
          ve = (0, c.useState)(null),
          me = (0, y.Z)(ve, 2),
          pe = me[0],
          he = me[1],
          be = (0, c.useState)(null),
          ye = (0, y.Z)(be, 2),
          ge = ye[0],
          Ze = ye[1],
          Ee = (0, c.useState)(0),
          Ce = (0, y.Z)(Ee, 2),
          xe = Ce[0],
          we = Ce[1],
          Ne = (0, c.useState)(0),
          ke = (0, y.Z)(Ne, 2),
          Pe = ke[0],
          Se = ke[1],
          Oe = O(new Map()),
          Re = (0, y.Z)(Oe, 2),
          Ie = Re[0],
          Me = Re[1],
          Ke = T(l, Ie, Q),
          Te = ''.concat(a, '-nav-operations-hidden'),
          Ae = 0,
          je = 0;
        function ze(e) {
          return e < Ae ? Ae : e > je ? je : e;
        }
        W
          ? p
            ? ((Ae = 0), (je = Math.max(0, Q - pe)))
            : ((Ae = Math.min(0, pe - Q)), (je = 0))
          : ((Ae = Math.min(0, ge - re)), (je = 0));
        var Le = (0, c.useRef)(),
          De = (0, c.useState)(),
          Be = (0, y.Z)(De, 2),
          Ve = Be[0],
          We = Be[1];
        function He() {
          We(Date.now());
        }
        function _e() {
          window.clearTimeout(Le.current);
        }
        function Fe() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : m,
            t = Ke.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (W) {
            var n = F;
            p
              ? t.right < F
                ? (n = t.right)
                : t.right + t.width > F + pe && (n = t.right + t.width - pe)
              : t.left < -F
              ? (n = -t.left)
              : t.left + t.width > -F + pe && (n = -(t.left + t.width - pe)),
              q(0),
              G(ze(n));
          } else {
            var r = Y;
            t.top < -Y
              ? (r = -t.top)
              : t.top + t.height > -Y + ge && (r = -(t.top + t.height - ge)),
              G(0),
              q(ze(r));
          }
        }
        Lt(I, function (e, t) {
          function n(e, t) {
            e(function (e) {
              var n = ze(e + t);
              return n;
            });
          }
          if (W) {
            if (pe >= Q) return !1;
            n(G, e);
          } else {
            if (ge >= re) return !1;
            n(q, t);
          }
          return _e(), He(), !0;
        }),
          (0, c.useEffect)(
            function () {
              return (
                _e(),
                Ve &&
                  (Le.current = window.setTimeout(function () {
                    We(0);
                  }, 100)),
                _e
              );
            },
            [Ve],
          );
        var Ge = j(
            Ke,
            { width: pe, height: ge, left: F, top: Y },
            { width: ce, height: fe },
            { width: xe, height: Pe },
            (0, E.Z)((0, E.Z)({}, e), {}, { tabs: l }),
          ),
          Ue = (0, y.Z)(Ge, 2),
          Xe = Ue[0],
          Ye = Ue[1],
          qe = l.map(function (e) {
            var t = e.key;
            return c.createElement(M, {
              id: d,
              prefixCls: a,
              key: t,
              rtl: p,
              tab: e,
              closable: e.closable,
              editable: b,
              active: t === m,
              tabPosition: Z,
              tabBarGutter: C,
              renderWrapper: x,
              removeAriaLabel:
                null === g || void 0 === g ? void 0 : g.removeAriaLabel,
              ref: B(t),
              onClick: function (e) {
                w(t, e);
              },
              onRemove: function () {
                V(t);
              },
              onFocus: function () {
                Fe(t),
                  He(),
                  p || (I.current.scrollLeft = 0),
                  (I.current.scrollTop = 0);
              },
            });
          }),
          $e = S(function () {
            var e,
              t,
              n,
              r,
              a,
              o,
              i,
              c,
              u,
              s =
                (null === (e = I.current) || void 0 === e
                  ? void 0
                  : e.offsetWidth) || 0,
              f =
                (null === (t = I.current) || void 0 === t
                  ? void 0
                  : t.offsetHeight) || 0,
              d =
                (null === (n = z.current) || void 0 === n
                  ? void 0
                  : n.offsetWidth) || 0,
              v =
                (null === (r = z.current) || void 0 === r
                  ? void 0
                  : r.offsetHeight) || 0,
              m =
                (null === (a = A.current) || void 0 === a
                  ? void 0
                  : a.offsetWidth) || 0,
              p =
                (null === (o = A.current) || void 0 === o
                  ? void 0
                  : o.offsetHeight) || 0;
            he(s), Ze(f), we(d), Se(v);
            var h =
                ((null === (i = K.current) || void 0 === i
                  ? void 0
                  : i.offsetWidth) || 0) - d,
              b =
                ((null === (c = K.current) || void 0 === c
                  ? void 0
                  : c.offsetHeight) || 0) - v;
            ee(h), ae(b);
            var y =
              null === (u = A.current) || void 0 === u
                ? void 0
                : u.className.includes(Te);
            le(h - (y ? 0 : m)),
              de(b - (y ? 0 : p)),
              Me(function () {
                var e = new Map();
                return (
                  l.forEach(function (t) {
                    var n = t.key,
                      r = B(n).current;
                    r &&
                      e.set(n, {
                        width: r.offsetWidth,
                        height: r.offsetHeight,
                        left: r.offsetLeft,
                        top: r.offsetTop,
                      });
                  }),
                  e
                );
              });
          }),
          Je = l.slice(0, Xe),
          Qe = l.slice(Ye + 1),
          et = [].concat((0, N.Z)(Je), (0, N.Z)(Qe)),
          tt = (0, c.useState)(),
          nt = (0, y.Z)(tt, 2),
          rt = nt[0],
          at = nt[1],
          ot = Ke.get(m),
          it = (0, c.useRef)();
        function ct() {
          k.Z.cancel(it.current);
        }
        (0, c.useEffect)(
          function () {
            var e = {};
            return (
              ot &&
                (W
                  ? (p ? (e.right = ot.right) : (e.left = ot.left),
                    (e.width = ot.width))
                  : ((e.top = ot.top), (e.height = ot.height))),
              ct(),
              (it.current = (0, k.Z)(function () {
                at(e);
              })),
              ct
            );
          },
          [ot, W, p],
        ),
          (0, c.useEffect)(
            function () {
              Fe();
            },
            [m, ot, Ke, W],
          ),
          (0, c.useEffect)(
            function () {
              $e();
            },
            [
              p,
              C,
              m,
              l
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
            ],
          );
        var lt,
          ut,
          st,
          ft,
          dt = !!et.length,
          vt = ''.concat(a, '-nav-wrap');
        return (
          W
            ? p
              ? ((ut = F > 0), (lt = F + pe < Q))
              : ((lt = F < 0), (ut = -F + pe < Q))
            : ((st = Y < 0), (ft = -Y + ge < re)),
          c.createElement(
            'div',
            {
              ref: t,
              role: 'tablist',
              className: u()(''.concat(a, '-nav'), s),
              style: f,
              onKeyDown: function () {
                He();
              },
            },
            c.createElement(Vt, { position: 'left', extra: h, prefixCls: a }),
            c.createElement(
              P.Z,
              { onResize: $e },
              c.createElement(
                'div',
                {
                  className: u()(
                    vt,
                    ((n = {}),
                    (0, o.Z)(n, ''.concat(vt, '-ping-left'), lt),
                    (0, o.Z)(n, ''.concat(vt, '-ping-right'), ut),
                    (0, o.Z)(n, ''.concat(vt, '-ping-top'), st),
                    (0, o.Z)(n, ''.concat(vt, '-ping-bottom'), ft),
                    n),
                  ),
                  ref: I,
                },
                c.createElement(
                  P.Z,
                  { onResize: $e },
                  c.createElement(
                    'div',
                    {
                      ref: K,
                      className: ''.concat(a, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(F, 'px, ')
                          .concat(Y, 'px)'),
                        transition: Ve ? 'none' : void 0,
                      },
                    },
                    qe,
                    c.createElement(Rt, {
                      ref: z,
                      prefixCls: a,
                      locale: g,
                      editable: b,
                      style: { visibility: dt ? 'hidden' : null },
                    }),
                    c.createElement('div', {
                      className: u()(
                        ''.concat(a, '-ink-bar'),
                        (0, o.Z)(
                          {},
                          ''.concat(a, '-ink-bar-animated'),
                          v.inkBar,
                        ),
                      ),
                      style: rt,
                    }),
                  ),
                ),
              ),
            ),
            c.createElement(
              Mt,
              (0, i.Z)({}, e, {
                ref: A,
                prefixCls: a,
                tabs: et,
                className: !dt && Te,
              }),
            ),
            c.createElement(Vt, { position: 'right', extra: h, prefixCls: a }),
          )
        );
      }
      var Ht = c.forwardRef(Wt);
      function _t(e) {
        var t = e.id,
          n = e.activeKey,
          r = e.animated,
          a = e.tabPosition,
          i = e.rtl,
          l = e.destroyInactiveTabPane,
          s = c.useContext(Kt),
          f = s.prefixCls,
          d = s.tabs,
          v = r.tabPane,
          m = d.findIndex(function (e) {
            return e.key === n;
          });
        return c.createElement(
          'div',
          { className: u()(''.concat(f, '-content-holder')) },
          c.createElement(
            'div',
            {
              className: u()(
                ''.concat(f, '-content'),
                ''.concat(f, '-content-').concat(a),
                (0, o.Z)({}, ''.concat(f, '-content-animated'), v),
              ),
              style:
                m && v
                  ? (0, o.Z)(
                      {},
                      i ? 'marginRight' : 'marginLeft',
                      '-'.concat(m, '00%'),
                    )
                  : null,
            },
            d.map(function (e) {
              return c.cloneElement(e.node, {
                key: e.key,
                prefixCls: f,
                tabKey: e.key,
                id: t,
                animated: v,
                active: e.key === n,
                destroyInactiveTabPane: l,
              });
            }),
          ),
        );
      }
      function Ft(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          r = e.className,
          a = e.style,
          o = e.id,
          i = e.active,
          l = e.animated,
          s = e.destroyInactiveTabPane,
          f = e.tabKey,
          d = e.children,
          v = c.useState(n),
          m = (0, y.Z)(v, 2),
          p = m[0],
          h = m[1];
        c.useEffect(
          function () {
            i ? h(!0) : s && h(!1);
          },
          [i, s],
        );
        var b = {};
        return (
          i ||
            (l
              ? ((b.visibility = 'hidden'),
                (b.height = 0),
                (b.overflowY = 'hidden'))
              : (b.display = 'none')),
          c.createElement(
            'div',
            {
              id: o && ''.concat(o, '-panel-').concat(f),
              role: 'tabpanel',
              tabIndex: i ? 0 : -1,
              'aria-labelledby': o && ''.concat(o, '-tab-').concat(f),
              'aria-hidden': !i,
              style: (0, E.Z)((0, E.Z)({}, b), a),
              className: u()(
                ''.concat(t, '-tabpane'),
                i && ''.concat(t, '-tabpane-active'),
                r,
              ),
            },
            (i || p || n) && d,
          )
        );
      }
      var Gt = 0;
      function Ut(e) {
        return (0, C.Z)(e)
          .map(function (e) {
            if (c.isValidElement(e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0;
              return (0, E.Z)((0, E.Z)({ key: t }, e.props), {}, { node: e });
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function Xt(e, t) {
        var n,
          r,
          a = e.id,
          l = e.prefixCls,
          s = void 0 === l ? 'rc-tabs' : l,
          f = e.className,
          d = e.children,
          v = e.direction,
          m = e.activeKey,
          p = e.defaultActiveKey,
          h = e.editable,
          b = e.animated,
          C = void 0 === b ? { inkBar: !0, tabPane: !1 } : b,
          N = e.tabPosition,
          k = void 0 === N ? 'top' : N,
          P = e.tabBarGutter,
          S = e.tabBarStyle,
          O = e.tabBarExtraContent,
          R = e.locale,
          I = e.moreIcon,
          M = e.moreTransitionName,
          K = e.destroyInactiveTabPane,
          T = e.renderTabBar,
          A = e.onChange,
          j = e.onTabClick,
          z = e.onTabScroll,
          L = (0, Z.Z)(e, [
            'id',
            'prefixCls',
            'className',
            'children',
            'direction',
            'activeKey',
            'defaultActiveKey',
            'editable',
            'animated',
            'tabPosition',
            'tabBarGutter',
            'tabBarStyle',
            'tabBarExtraContent',
            'locale',
            'moreIcon',
            'moreTransitionName',
            'destroyInactiveTabPane',
            'renderTabBar',
            'onChange',
            'onTabClick',
            'onTabScroll',
          ]),
          D = Ut(d),
          B = 'rtl' === v;
        r =
          !1 === C
            ? { inkBar: !1, tabPane: !1 }
            : !0 === C
            ? { inkBar: !0, tabPane: !0 }
            : (0, E.Z)(
                { inkBar: !0, tabPane: !1 },
                'object' === (0, g.Z)(C) ? C : {},
              );
        var V = (0, c.useState)(!1),
          W = (0, y.Z)(V, 2),
          H = W[0],
          _ = W[1];
        (0, c.useEffect)(function () {
          _((0, x.Z)());
        }, []);
        var F = (0, w.Z)(
            function () {
              var e;
              return null === (e = D[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: m, defaultValue: p },
          ),
          G = (0, y.Z)(F, 2),
          U = G[0],
          X = G[1],
          Y = (0, c.useState)(function () {
            return D.findIndex(function (e) {
              return e.key === U;
            });
          }),
          q = (0, y.Z)(Y, 2),
          $ = q[0],
          J = q[1];
        (0, c.useEffect)(
          function () {
            var e,
              t = D.findIndex(function (e) {
                return e.key === U;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min($, D.length - 1))),
              X(null === (e = D[t]) || void 0 === e ? void 0 : e.key));
            J(t);
          },
          [
            D.map(function (e) {
              return e.key;
            }).join('_'),
            U,
            $,
          ],
        );
        var Q = (0, w.Z)(null, { value: a }),
          ee = (0, y.Z)(Q, 2),
          te = ee[0],
          ne = ee[1],
          re = k;
        function ae(e, t) {
          null === j || void 0 === j || j(e, t),
            X(e),
            null === A || void 0 === A || A(e);
        }
        H && !['left', 'right'].includes(k) && (re = 'top'),
          (0, c.useEffect)(function () {
            a || (ne('rc-tabs-'.concat(Gt)), (Gt += 1));
          }, []);
        var oe,
          ie = {
            id: te,
            activeKey: U,
            animated: r,
            tabPosition: re,
            rtl: B,
            mobile: H,
          },
          ce = (0, E.Z)(
            (0, E.Z)({}, ie),
            {},
            {
              editable: h,
              locale: R,
              moreIcon: I,
              moreTransitionName: M,
              tabBarGutter: P,
              onTabClick: ae,
              onTabScroll: z,
              extra: O,
              style: S,
              panes: d,
            },
          );
        return (
          (oe = T ? T(ce, Ht) : c.createElement(Ht, ce)),
          c.createElement(
            Kt.Provider,
            { value: { tabs: D, prefixCls: s } },
            c.createElement(
              'div',
              (0, i.Z)(
                {
                  ref: t,
                  id: a,
                  className: u()(
                    s,
                    ''.concat(s, '-').concat(re),
                    ((n = {}),
                    (0, o.Z)(n, ''.concat(s, '-mobile'), H),
                    (0, o.Z)(n, ''.concat(s, '-editable'), h),
                    (0, o.Z)(n, ''.concat(s, '-rtl'), B),
                    n),
                    f,
                  ),
                },
                L,
              ),
              oe,
              c.createElement(
                _t,
                (0, i.Z)({ destroyInactiveTabPane: K }, ie, { animated: r }),
              ),
            ),
          )
        );
      }
      var Yt = c.forwardRef(Xt);
      Yt.TabPane = Ft;
      var qt = Yt,
        $t = qt,
        Jt = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'ellipsis',
          theme: 'outlined',
        },
        Qt = Jt,
        en = n(30076),
        tn = function (e, t) {
          return c.createElement(
            en.Z,
            Object.assign({}, e, { ref: t, icon: Qt }),
          );
        };
      tn.displayName = 'EllipsisOutlined';
      var nn = c.forwardRef(tn),
        rn = n(49101),
        an = n(54549),
        on = n(21687),
        cn = n(97647),
        ln = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function un(e) {
        var t,
          n = e.type,
          r = e.className,
          a = e.size,
          l = e.onEdit,
          s = e.hideAdd,
          d = e.centered,
          v = e.addIcon,
          m = ln(e, [
            'type',
            'className',
            'size',
            'onEdit',
            'hideAdd',
            'centered',
            'addIcon',
          ]),
          p = m.prefixCls,
          h = m.moreIcon,
          b = void 0 === h ? c.createElement(nn, null) : h,
          y = c.useContext(f.E_),
          g = y.getPrefixCls,
          Z = y.direction,
          E = g('tabs', p);
        'editable-card' === n &&
          (t = {
            onEdit: function (e, t) {
              var n = t.key,
                r = t.event;
              null === l || void 0 === l || l('add' === e ? r : n, e);
            },
            removeIcon: c.createElement(an.Z, null),
            addIcon: v || c.createElement(rn.Z, null),
            showAdd: !0 !== s,
          });
        var C = g();
        return (
          (0, on.Z)(
            !('onPrevClick' in m) && !('onNextClick' in m),
            'Tabs',
            '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
          ),
          c.createElement(cn.Z.Consumer, null, function (e) {
            var l,
              s = void 0 !== a ? a : e;
            return c.createElement(
              $t,
              (0, i.Z)(
                { direction: Z, moreTransitionName: ''.concat(C, '-slide-up') },
                m,
                {
                  className: u()(
                    ((l = {}),
                    (0, o.Z)(l, ''.concat(E, '-').concat(s), s),
                    (0, o.Z)(
                      l,
                      ''.concat(E, '-card'),
                      ['card', 'editable-card'].includes(n),
                    ),
                    (0, o.Z)(
                      l,
                      ''.concat(E, '-editable-card'),
                      'editable-card' === n,
                    ),
                    (0, o.Z)(l, ''.concat(E, '-centered'), d),
                    l),
                    r,
                  ),
                  editable: t,
                  moreIcon: b,
                  prefixCls: E,
                },
              ),
            );
          })
        );
      }
      un.TabPane = Ft;
      var sn = un,
        fn = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function dn(e) {
        var t = e.map(function (t, n) {
          return c.createElement(
            'li',
            {
              style: { width: ''.concat(100 / e.length, '%') },
              key: 'action-'.concat(n),
            },
            c.createElement('span', null, t),
          );
        });
        return t;
      }
      var vn = function (e) {
        var t,
          n,
          l,
          d = c.useContext(f.E_),
          v = d.getPrefixCls,
          p = d.direction,
          h = c.useContext(cn.Z),
          b = function (t) {
            var n;
            null === (n = e.onTabChange) || void 0 === n || n.call(e, t);
          },
          y = function () {
            var t;
            return (
              c.Children.forEach(e.children, function (e) {
                e && e.type && e.type === m && (t = !0);
              }),
              t
            );
          },
          g = e.prefixCls,
          Z = e.className,
          E = e.extra,
          C = e.headStyle,
          x = void 0 === C ? {} : C,
          w = e.bodyStyle,
          N = void 0 === w ? {} : w,
          k = e.title,
          P = e.loading,
          S = e.bordered,
          O = void 0 === S || S,
          R = e.size,
          I = e.type,
          M = e.cover,
          K = e.actions,
          T = e.tabList,
          A = e.children,
          j = e.activeTabKey,
          z = e.defaultActiveTabKey,
          L = e.tabBarExtraContent,
          D = e.hoverable,
          B = e.tabProps,
          V = void 0 === B ? {} : B,
          W = fn(e, [
            'prefixCls',
            'className',
            'extra',
            'headStyle',
            'bodyStyle',
            'title',
            'loading',
            'bordered',
            'size',
            'type',
            'cover',
            'actions',
            'tabList',
            'children',
            'activeTabKey',
            'defaultActiveTabKey',
            'tabBarExtraContent',
            'hoverable',
            'tabProps',
          ]),
          H = v('card', g),
          _ = 0 === N.padding || '0px' === N.padding ? { padding: 24 } : void 0,
          F = c.createElement('div', {
            className: ''.concat(H, '-loading-block'),
          }),
          G = c.createElement(
            'div',
            { className: ''.concat(H, '-loading-content'), style: _ },
            c.createElement(
              r.Z,
              { gutter: 8 },
              c.createElement(a.Z, { span: 22 }, F),
            ),
            c.createElement(
              r.Z,
              { gutter: 8 },
              c.createElement(a.Z, { span: 8 }, F),
              c.createElement(a.Z, { span: 15 }, F),
            ),
            c.createElement(
              r.Z,
              { gutter: 8 },
              c.createElement(a.Z, { span: 6 }, F),
              c.createElement(a.Z, { span: 18 }, F),
            ),
            c.createElement(
              r.Z,
              { gutter: 8 },
              c.createElement(a.Z, { span: 13 }, F),
              c.createElement(a.Z, { span: 9 }, F),
            ),
            c.createElement(
              r.Z,
              { gutter: 8 },
              c.createElement(a.Z, { span: 4 }, F),
              c.createElement(a.Z, { span: 3 }, F),
              c.createElement(a.Z, { span: 16 }, F),
            ),
          ),
          U = void 0 !== j,
          X = (0, i.Z)(
            (0, i.Z)({}, V),
            ((t = {}),
            (0, o.Z)(t, U ? 'activeKey' : 'defaultActiveKey', U ? j : z),
            (0, o.Z)(t, 'tabBarExtraContent', L),
            t),
          ),
          Y =
            T && T.length
              ? c.createElement(
                  sn,
                  (0, i.Z)({ size: 'large' }, X, {
                    className: ''.concat(H, '-head-tabs'),
                    onChange: b,
                  }),
                  T.map(function (e) {
                    return c.createElement(sn.TabPane, {
                      tab: e.tab,
                      disabled: e.disabled,
                      key: e.key,
                    });
                  }),
                )
              : null;
        (k || E || Y) &&
          (l = c.createElement(
            'div',
            { className: ''.concat(H, '-head'), style: x },
            c.createElement(
              'div',
              { className: ''.concat(H, '-head-wrapper') },
              k &&
                c.createElement(
                  'div',
                  { className: ''.concat(H, '-head-title') },
                  k,
                ),
              E &&
                c.createElement(
                  'div',
                  { className: ''.concat(H, '-extra') },
                  E,
                ),
            ),
            Y,
          ));
        var q = M
            ? c.createElement('div', { className: ''.concat(H, '-cover') }, M)
            : null,
          $ = c.createElement(
            'div',
            { className: ''.concat(H, '-body'), style: N },
            P ? G : A,
          ),
          J =
            K && K.length
              ? c.createElement(
                  'ul',
                  { className: ''.concat(H, '-actions') },
                  dn(K),
                )
              : null,
          Q = (0, s.Z)(W, ['onTabChange']),
          ee = R || h,
          te = u()(
            H,
            ((n = {}),
            (0, o.Z)(n, ''.concat(H, '-loading'), P),
            (0, o.Z)(n, ''.concat(H, '-bordered'), O),
            (0, o.Z)(n, ''.concat(H, '-hoverable'), D),
            (0, o.Z)(n, ''.concat(H, '-contain-grid'), y()),
            (0, o.Z)(n, ''.concat(H, '-contain-tabs'), T && T.length),
            (0, o.Z)(n, ''.concat(H, '-').concat(ee), ee),
            (0, o.Z)(n, ''.concat(H, '-type-').concat(I), !!I),
            (0, o.Z)(n, ''.concat(H, '-rtl'), 'rtl' === p),
            n),
            Z,
          );
        return c.createElement(
          'div',
          (0, i.Z)({}, Q, { className: te }),
          l,
          q,
          $,
          J,
        );
      };
      (vn.Grid = m), (vn.Meta = b);
      var mn = vn,
        pn = n(19611),
        hn = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M766.4 744.3c43.7 0 79.4-36.2 79.4-80.5 0-53.5-79.4-140.8-79.4-140.8S687 610.3 687 663.8c0 44.3 35.7 80.5 79.4 80.5zm-377.1-44.1c7.1 7.1 18.6 7.1 25.6 0l256.1-256c7.1-7.1 7.1-18.6 0-25.6l-256-256c-.6-.6-1.3-1.2-2-1.7l-78.2-78.2a9.11 9.11 0 00-12.8 0l-48 48a9.11 9.11 0 000 12.8l67.2 67.2-207.8 207.9c-7.1 7.1-7.1 18.6 0 25.6l255.9 256zm12.9-448.6l178.9 178.9H223.4l178.8-178.9zM904 816H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'bg-colors',
          theme: 'outlined',
        },
        bn = hn,
        yn = function (e, t) {
          return c.createElement(
            en.Z,
            Object.assign({}, e, { ref: t, icon: bn }),
          );
        };
      yn.displayName = 'BgColorsOutlined';
      var gn = c.forwardRef(yn),
        Zn = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z',
                },
              },
            ],
          },
          name: 'code',
          theme: 'outlined',
        },
        En = Zn,
        Cn = function (e, t) {
          return c.createElement(
            en.Z,
            Object.assign({}, e, { ref: t, icon: En }),
          );
        };
      Cn.displayName = 'CodeOutlined';
      var xn = c.forwardRef(Cn),
        wn = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z',
                },
              },
            ],
          },
          name: 'picture',
          theme: 'outlined',
        },
        Nn = wn,
        kn = function (e, t) {
          return c.createElement(
            en.Z,
            Object.assign({}, e, { ref: t, icon: Nn }),
          );
        };
      kn.displayName = 'PictureOutlined';
      var Pn = c.forwardRef(kn),
        Sn = n(85893),
        On = [
          {
            title: '\u8c03\u8272\u677f',
            desc: '\u4e2d\u6027\u8272\u677f',
            path: '/tools/colorPicker',
            icon: gn,
          },
          {
            title: '\u4ee3\u7801\u683c\u5f0f\u5316',
            desc: 'CSS\u3001JavaScript \u4ee3\u7801\u683c\u5f0f\u5316',
            path: '/tools/formater',
            icon: xn,
          },
          {
            title: '\u56fe\u7247\u8f6c Base64',
            desc: '\u5c06\u56fe\u7247\u8f6c\u6362\u4e3a Base64 \u7f16\u7801',
            path: '/tools/imgToBase64',
            icon: Pn,
          },
        ],
        Rn = (e) =>
          (0, Sn.jsxs)('div', {
            className: 'flex items-center',
            children: [
              e.children,
              (0, Sn.jsx)('span', { className: 'ml-2', children: e.title }),
            ],
          }),
        In = (e) => {
          var t = e.toolData;
          return (0, Sn.jsx)(pn.rU, {
            to: t.path,
            children: (0, Sn.jsx)(mn, {
              title: (0, Sn.jsx)(Rn, {
                title: t.title,
                children: (0, Sn.jsx)(t.icon, {}),
              }),
              bordered: !0,
              children: t.desc,
            }),
          });
        },
        Mn = () =>
          (0, Sn.jsx)(Sn.Fragment, {
            children: (0, Sn.jsx)(r.Z, {
              gutter: [16, 16],
              children: On.map((e) =>
                (0, Sn.jsx)(
                  a.Z,
                  {
                    xs: 24,
                    sm: 12,
                    md: 8,
                    lg: 6,
                    children: (0, Sn.jsx)(In, { toolData: e }),
                  },
                  e.title,
                ),
              ),
            }),
          }),
        Kn = Mn;
    },
    98082: function (e, t, n) {
      'use strict';
      var r = n(28481),
        a = n(67294),
        o = n(31808);
      t['Z'] = function () {
        var e = a.useState(!1),
          t = (0, r.Z)(e, 2),
          n = t[0],
          i = t[1];
        return (
          a.useEffect(function () {
            i((0, o.fk)());
          }, []),
          n
        );
      };
    },
    93355: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return r;
        },
      });
      var r = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t;
      };
    },
    1635: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = n(96156),
        a = n(22122),
        o = n(90484),
        i = n(67294),
        c = n(94184),
        l = n.n(c),
        u = n(99134),
        s = n(65632),
        f = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function d(e) {
        return 'number' === typeof e
          ? ''.concat(e, ' ').concat(e, ' auto')
          : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
          ? '0 0 '.concat(e)
          : e;
      }
      var v = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        m = i.forwardRef(function (e, t) {
          var n,
            c = i.useContext(s.E_),
            m = c.getPrefixCls,
            p = c.direction,
            h = i.useContext(u.Z),
            b = h.gutter,
            y = h.wrap,
            g = h.supportFlexGap,
            Z = e.prefixCls,
            E = e.span,
            C = e.order,
            x = e.offset,
            w = e.push,
            N = e.pull,
            k = e.className,
            P = e.children,
            S = e.flex,
            O = e.style,
            R = f(e, [
              'prefixCls',
              'span',
              'order',
              'offset',
              'push',
              'pull',
              'className',
              'children',
              'flex',
              'style',
            ]),
            I = m('col', Z),
            M = {};
          v.forEach(function (t) {
            var n,
              i = {},
              c = e[t];
            'number' === typeof c
              ? (i.span = c)
              : 'object' === (0, o.Z)(c) && (i = c || {}),
              delete R[t],
              (M = (0, a.Z)(
                (0, a.Z)({}, M),
                ((n = {}),
                (0, r.Z)(
                  n,
                  ''.concat(I, '-').concat(t, '-').concat(i.span),
                  void 0 !== i.span,
                ),
                (0, r.Z)(
                  n,
                  ''.concat(I, '-').concat(t, '-order-').concat(i.order),
                  i.order || 0 === i.order,
                ),
                (0, r.Z)(
                  n,
                  ''.concat(I, '-').concat(t, '-offset-').concat(i.offset),
                  i.offset || 0 === i.offset,
                ),
                (0, r.Z)(
                  n,
                  ''.concat(I, '-').concat(t, '-push-').concat(i.push),
                  i.push || 0 === i.push,
                ),
                (0, r.Z)(
                  n,
                  ''.concat(I, '-').concat(t, '-pull-').concat(i.pull),
                  i.pull || 0 === i.pull,
                ),
                (0, r.Z)(n, ''.concat(I, '-rtl'), 'rtl' === p),
                n),
              ));
          });
          var K = l()(
              I,
              ((n = {}),
              (0, r.Z)(n, ''.concat(I, '-').concat(E), void 0 !== E),
              (0, r.Z)(n, ''.concat(I, '-order-').concat(C), C),
              (0, r.Z)(n, ''.concat(I, '-offset-').concat(x), x),
              (0, r.Z)(n, ''.concat(I, '-push-').concat(w), w),
              (0, r.Z)(n, ''.concat(I, '-pull-').concat(N), N),
              n),
              k,
              M,
            ),
            T = {};
          if (b && b[0] > 0) {
            var A = b[0] / 2;
            (T.paddingLeft = A), (T.paddingRight = A);
          }
          if (b && b[1] > 0 && !g) {
            var j = b[1] / 2;
            (T.paddingTop = j), (T.paddingBottom = j);
          }
          return (
            S &&
              ((T.flex = d(S)),
              'auto' !== S || !1 !== y || T.minWidth || (T.minWidth = 0)),
            i.createElement(
              'div',
              (0, a.Z)({}, R, {
                style: (0, a.Z)((0, a.Z)({}, T), O),
                className: K,
                ref: t,
              }),
              P,
            )
          );
        });
      m.displayName = 'Col';
      var p = m,
        h = p;
    },
    89032: function (e, t, n) {
      'use strict';
      n(43673), n(6999);
    },
    99134: function (e, t, n) {
      'use strict';
      var r = n(67294),
        a = (0, r.createContext)({});
      t['Z'] = a;
    },
    6999: function (e, t, n) {
      'use strict';
      n(43673), n(37753);
    },
    6759: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var r = n(22122),
        a = n(96156),
        o = n(90484),
        i = n(28481),
        c = n(67294),
        l = n(94184),
        u = n.n(l),
        s = n(65632),
        f = n(99134),
        d = n(93355),
        v = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        m = {
          xs: '(max-width: 575px)',
          sm: '(min-width: 576px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 992px)',
          xl: '(min-width: 1200px)',
          xxl: '(min-width: 1600px)',
        },
        p = new Map(),
        h = -1,
        b = {},
        y = {
          matchHandlers: {},
          dispatch: function (e) {
            return (
              (b = e),
              p.forEach(function (e) {
                return e(b);
              }),
              p.size >= 1
            );
          },
          subscribe: function (e) {
            return p.size || this.register(), (h += 1), p.set(h, e), e(b), h;
          },
          unsubscribe: function (e) {
            p['delete'](e), p.size || this.unregister();
          },
          unregister: function () {
            var e = this;
            Object.keys(m).forEach(function (t) {
              var n = m[t],
                r = e.matchHandlers[n];
              null === r ||
                void 0 === r ||
                r.mql.removeListener(
                  null === r || void 0 === r ? void 0 : r.listener,
                );
            }),
              p.clear();
          },
          register: function () {
            var e = this;
            Object.keys(m).forEach(function (t) {
              var n = m[t],
                o = function (n) {
                  var o = n.matches;
                  e.dispatch((0, r.Z)((0, r.Z)({}, b), (0, a.Z)({}, t, o)));
                },
                i = window.matchMedia(n);
              i.addListener(o),
                (e.matchHandlers[n] = { mql: i, listener: o }),
                o(i);
            });
          },
        },
        g = y,
        Z = n(98082),
        E = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        },
        C =
          ((0, d.b)('top', 'middle', 'bottom', 'stretch'),
          (0, d.b)('start', 'end', 'center', 'space-around', 'space-between'),
          c.forwardRef(function (e, t) {
            var n,
              l = e.prefixCls,
              d = e.justify,
              m = e.align,
              p = e.className,
              h = e.style,
              b = e.children,
              y = e.gutter,
              C = void 0 === y ? 0 : y,
              x = e.wrap,
              w = E(e, [
                'prefixCls',
                'justify',
                'align',
                'className',
                'style',
                'children',
                'gutter',
                'wrap',
              ]),
              N = c.useContext(s.E_),
              k = N.getPrefixCls,
              P = N.direction,
              S = c.useState({
                xs: !0,
                sm: !0,
                md: !0,
                lg: !0,
                xl: !0,
                xxl: !0,
              }),
              O = (0, i.Z)(S, 2),
              R = O[0],
              I = O[1],
              M = (0, Z.Z)(),
              K = c.useRef(C);
            c.useEffect(function () {
              var e = g.subscribe(function (e) {
                var t = K.current || 0;
                ((!Array.isArray(t) && 'object' === (0, o.Z)(t)) ||
                  (Array.isArray(t) &&
                    ('object' === (0, o.Z)(t[0]) ||
                      'object' === (0, o.Z)(t[1])))) &&
                  I(e);
              });
              return function () {
                return g.unsubscribe(e);
              };
            }, []);
            var T = function () {
                var e = [0, 0],
                  t = Array.isArray(C) ? C : [C, 0];
                return (
                  t.forEach(function (t, n) {
                    if ('object' === (0, o.Z)(t))
                      for (var r = 0; r < v.length; r++) {
                        var a = v[r];
                        if (R[a] && void 0 !== t[a]) {
                          e[n] = t[a];
                          break;
                        }
                      }
                    else e[n] = t || 0;
                  }),
                  e
                );
              },
              A = k('row', l),
              j = T(),
              z = u()(
                A,
                ((n = {}),
                (0, a.Z)(n, ''.concat(A, '-no-wrap'), !1 === x),
                (0, a.Z)(n, ''.concat(A, '-').concat(d), d),
                (0, a.Z)(n, ''.concat(A, '-').concat(m), m),
                (0, a.Z)(n, ''.concat(A, '-rtl'), 'rtl' === P),
                n),
                p,
              ),
              L = {},
              D = j[0] > 0 ? j[0] / -2 : void 0,
              B = j[1] > 0 ? j[1] / -2 : void 0;
            if ((D && ((L.marginLeft = D), (L.marginRight = D)), M)) {
              var V = (0, i.Z)(j, 2);
              L.rowGap = V[1];
            } else B && ((L.marginTop = B), (L.marginBottom = B));
            var W = c.useMemo(
              function () {
                return { gutter: j, wrap: x, supportFlexGap: M };
              },
              [j, x, M],
            );
            return c.createElement(
              f.Z.Provider,
              { value: W },
              c.createElement(
                'div',
                (0, r.Z)({}, w, {
                  className: z,
                  style: (0, r.Z)((0, r.Z)({}, L), h),
                  ref: t,
                }),
                b,
              ),
            );
          }));
      C.displayName = 'Row';
      var x = C,
        w = x;
    },
    13062: function (e, t, n) {
      'use strict';
      n(43673), n(6999);
    },
    4084: function (e, t, n) {
      'use strict';
      var r = n(28991),
        a = n(6610),
        o = n(5991),
        i = n(10379),
        c = n(44144),
        l = n(67294),
        u = n(34203),
        s = n(50344),
        f = n(80334),
        d = n(42550),
        v = n(91033),
        m = 'rc-observer-key',
        p = (function (e) {
          (0, i.Z)(n, e);
          var t = (0, c.Z)(n);
          function n() {
            var e;
            return (
              (0, a.Z)(this, n),
              (e = t.apply(this, arguments)),
              (e.resizeObserver = null),
              (e.childNode = null),
              (e.currentElement = null),
              (e.state = {
                width: 0,
                height: 0,
                offsetHeight: 0,
                offsetWidth: 0,
              }),
              (e.onResize = function (t) {
                var n = e.props.onResize,
                  a = t[0].target,
                  o = a.getBoundingClientRect(),
                  i = o.width,
                  c = o.height,
                  l = a.offsetWidth,
                  u = a.offsetHeight,
                  s = Math.floor(i),
                  f = Math.floor(c);
                if (
                  e.state.width !== s ||
                  e.state.height !== f ||
                  e.state.offsetWidth !== l ||
                  e.state.offsetHeight !== u
                ) {
                  var d = {
                    width: s,
                    height: f,
                    offsetWidth: l,
                    offsetHeight: u,
                  };
                  e.setState(d),
                    n &&
                      Promise.resolve().then(function () {
                        n(
                          (0, r.Z)(
                            (0, r.Z)({}, d),
                            {},
                            { offsetWidth: l, offsetHeight: u },
                          ),
                          a,
                        );
                      });
                }
              }),
              (e.setChildNode = function (t) {
                e.childNode = t;
              }),
              e
            );
          }
          return (
            (0, o.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.onComponentUpdated();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.onComponentUpdated();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.destroyObserver();
                },
              },
              {
                key: 'onComponentUpdated',
                value: function () {
                  var e = this.props.disabled;
                  if (e) this.destroyObserver();
                  else {
                    var t = (0, u.Z)(this.childNode || this),
                      n = t !== this.currentElement;
                    n && (this.destroyObserver(), (this.currentElement = t)),
                      !this.resizeObserver &&
                        t &&
                        ((this.resizeObserver = new v.Z(this.onResize)),
                        this.resizeObserver.observe(t));
                  }
                },
              },
              {
                key: 'destroyObserver',
                value: function () {
                  this.resizeObserver &&
                    (this.resizeObserver.disconnect(),
                    (this.resizeObserver = null));
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.props.children,
                    t = (0, s.Z)(e);
                  if (t.length > 1)
                    (0, f.ZP)(
                      !1,
                      'Find more than one child node with `children` in ResizeObserver. Will only observe first one.',
                    );
                  else if (0 === t.length)
                    return (
                      (0, f.ZP)(
                        !1,
                        '`children` of ResizeObserver is empty. Nothing is in observe.',
                      ),
                      null
                    );
                  var n = t[0];
                  if (l.isValidElement(n) && (0, d.Yr)(n)) {
                    var r = n.ref;
                    t[0] = l.cloneElement(n, {
                      ref: (0, d.sQ)(r, this.setChildNode),
                    });
                  }
                  return 1 === t.length
                    ? t[0]
                    : t.map(function (e, t) {
                        return !l.isValidElement(e) ||
                          ('key' in e && null !== e.key)
                          ? e
                          : l.cloneElement(e, {
                              key: ''.concat(m, '-').concat(t),
                            });
                      });
                },
              },
            ]),
            n
          );
        })(l.Component);
      (p.displayName = 'ResizeObserver'), (t['Z'] = p);
    },
    98423: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(28991);
      function a(e, t) {
        var n = (0, r.Z)({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e];
            }),
          n
        );
      }
    },
    96774: function (e) {
      e.exports = function (e, t, n, r) {
        var a = n ? n.call(r, e, t) : void 0;
        if (void 0 !== a) return !!a;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1;
        var o = Object.keys(e),
          i = Object.keys(t);
        if (o.length !== i.length) return !1;
        for (
          var c = Object.prototype.hasOwnProperty.bind(t), l = 0;
          l < o.length;
          l++
        ) {
          var u = o[l];
          if (!c(u)) return !1;
          var s = e[u],
            f = t[u];
          if (
            ((a = n ? n.call(r, s, f, u) : void 0),
            !1 === a || (void 0 === a && s !== f))
          )
            return !1;
        }
        return !0;
      };
    },
    19611: function (e, t, n) {
      'use strict';
      n.d(t, {
        rU: function () {
          return h;
        },
      });
      var r = n(19630),
        a = n(41788),
        o = n(67294),
        i = n(97175),
        c = (n(45697), n(22122)),
        l = n(19756),
        u = n(2177);
      o.Component;
      o.Component;
      var s = function (e, t) {
          return 'function' === typeof e ? e(t) : e;
        },
        f = function (e, t) {
          return 'string' === typeof e ? (0, i.ob)(e, null, null, t) : e;
        },
        d = function (e) {
          return e;
        },
        v = o.forwardRef;
      function m(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
      }
      'undefined' === typeof v && (v = d);
      var p = v(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          i = (0, l.Z)(e, ['innerRef', 'navigate', 'onClick']),
          u = i.target,
          s = (0, c.Z)({}, i, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (u && '_self' !== u) ||
                m(e) ||
                (e.preventDefault(), r());
            },
          });
        return (s.ref = (d !== v && t) || n), o.createElement('a', s);
      });
      var h = v(function (e, t) {
          var n = e.component,
            a = void 0 === n ? p : n,
            i = e.replace,
            m = e.to,
            h = e.innerRef,
            b = (0, l.Z)(e, ['component', 'replace', 'to', 'innerRef']);
          return o.createElement(r.s6.Consumer, null, function (e) {
            e || (0, u.Z)(!1);
            var n = e.history,
              r = f(s(m, e.location), e.location),
              l = r ? n.createHref(r) : '',
              p = (0, c.Z)({}, b, {
                href: l,
                navigate: function () {
                  var t = s(m, e.location),
                    r = i ? n.replace : n.push;
                  r(t);
                },
              });
            return (
              d !== v ? (p.ref = t || h) : (p.innerRef = h),
              o.createElement(a, p)
            );
          });
        }),
        b = function (e) {
          return e;
        },
        y = o.forwardRef;
      function g() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(function (e) {
            return e;
          })
          .join(' ');
      }
      'undefined' === typeof y && (y = b);
      y(function (e, t) {
        var n = e['aria-current'],
          a = void 0 === n ? 'page' : n,
          i = e.activeClassName,
          d = void 0 === i ? 'active' : i,
          v = e.activeStyle,
          m = e.className,
          p = e.exact,
          Z = e.isActive,
          E = e.location,
          C = e.sensitive,
          x = e.strict,
          w = e.style,
          N = e.to,
          k = e.innerRef,
          P = (0, l.Z)(e, [
            'aria-current',
            'activeClassName',
            'activeStyle',
            'className',
            'exact',
            'isActive',
            'location',
            'sensitive',
            'strict',
            'style',
            'to',
            'innerRef',
          ]);
        return o.createElement(r.s6.Consumer, null, function (e) {
          e || (0, u.Z)(!1);
          var n = E || e.location,
            i = f(s(N, n), n),
            l = i.pathname,
            S = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            O = S
              ? (0, r.LX)(n.pathname, {
                  path: S,
                  exact: p,
                  sensitive: C,
                  strict: x,
                })
              : null,
            R = !!(Z ? Z(O, n) : O),
            I = R ? g(m, d) : m,
            M = R ? (0, c.Z)({}, w, {}, v) : w,
            K = (0, c.Z)(
              {
                'aria-current': (R && a) || null,
                className: I,
                style: M,
                to: i,
              },
              P,
            );
          return (
            b !== y ? (K.ref = t || k) : (K.innerRef = k), o.createElement(h, K)
          );
        });
      });
    },
  },
]);
