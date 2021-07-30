(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [695],
  {
    42816: function () {},
    79617: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return I;
          },
        });
      n(43673), n(42816);
      var c = n(22122),
        a = n(96156),
        r = n(28481),
        f = n(67294),
        o = n(60444),
        i = n(64019),
        l = n(21770),
        u = n(94184),
        d = n.n(u),
        s = n(98423),
        b = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z',
                },
              },
            ],
          },
          name: 'vertical-align-top',
          theme: 'outlined',
        },
        v = b,
        m = n(30076),
        p = function (e, t) {
          return f.createElement(
            m.Z,
            Object.assign({}, e, { ref: t, icon: v }),
          );
        };
      p.displayName = 'VerticalAlignTopOutlined';
      var g = f.forwardRef(p),
        y = n(85061),
        w = n(75164);
      function x(e) {
        var t,
          n = function (n) {
            return function () {
              (t = null), e.apply(void 0, (0, y.Z)(n));
            };
          },
          c = function () {
            if (null == t) {
              for (
                var e = arguments.length, c = new Array(e), a = 0;
                a < e;
                a++
              )
                c[a] = arguments[a];
              t = (0, w.Z)(n(c));
            }
          };
        return (
          (c.cancel = function () {
            return w.Z.cancel(t);
          }),
          c
        );
      }
      var h = n(65632);
      function C(e) {
        return null !== e && void 0 !== e && e === e.window;
      }
      function E(e, t) {
        var n;
        if ('undefined' === typeof window) return 0;
        var c = t ? 'scrollTop' : 'scrollLeft',
          a = 0;
        return (
          C(e)
            ? (a = e[t ? 'pageYOffset' : 'pageXOffset'])
            : e instanceof Document
            ? (a = e.documentElement[c])
            : e && (a = e[c]),
          e &&
            !C(e) &&
            'number' !== typeof a &&
            (a =
              null === (n = (e.ownerDocument || e).documentElement) ||
              void 0 === n
                ? void 0
                : n[c]),
          a
        );
      }
      function D(e, t, n, c) {
        var a = n - t;
        return (
          (e /= c / 2),
          e < 1 ? (a / 2) * e * e * e + t : (a / 2) * ((e -= 2) * e * e + 2) + t
        );
      }
      function Z(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.getContainer,
          c =
            void 0 === n
              ? function () {
                  return window;
                }
              : n,
          a = t.callback,
          r = t.duration,
          f = void 0 === r ? 450 : r,
          o = c(),
          i = E(o, !0),
          l = Date.now(),
          u = function t() {
            var n = Date.now(),
              c = n - l,
              r = D(c > f ? f : c, i, e, f);
            C(o)
              ? o.scrollTo(window.pageXOffset, r)
              : o instanceof HTMLDocument ||
                'HTMLDocument' === o.constructor.name
              ? (o.documentElement.scrollTop = r)
              : (o.scrollTop = r),
              c < f ? (0, w.Z)(t) : 'function' === typeof a && a();
          };
        (0, w.Z)(u);
      }
      var k = n(96159),
        N = function (e) {
          var t = (0, l.Z)(!1, { value: e.visible }),
            n = (0, r.Z)(t, 2),
            u = n[0],
            b = n[1],
            v = f.createRef(),
            m = f.useRef(),
            p = function () {
              return v.current && v.current.ownerDocument
                ? v.current.ownerDocument
                : window;
            },
            y = x(function (t) {
              var n = e.visibilityHeight,
                c = E(t.target, !0);
              b(c > n);
            }),
            w = function () {
              var t = e.target,
                n = t || p,
                c = n();
              (m.current = (0, i.Z)(c, 'scroll', function (e) {
                y(e);
              })),
                y({ target: c });
            };
          f.useEffect(
            function () {
              return (
                w(),
                function () {
                  m.current && m.current.remove(), y.cancel();
                }
              );
            },
            [e.target],
          );
          var C = function (t) {
              var n = e.onClick,
                c = e.target,
                a = e.duration,
                r = void 0 === a ? 450 : a;
              Z(0, { getContainer: c || p, duration: r }),
                'function' === typeof n && n(t);
            },
            D = function (t) {
              var n = t.prefixCls,
                c = t.rootPrefixCls,
                a = e.children,
                r = f.createElement(
                  'div',
                  { className: ''.concat(n, '-content') },
                  f.createElement(
                    'div',
                    { className: ''.concat(n, '-icon') },
                    f.createElement(g, null),
                  ),
                );
              return f.createElement(
                o.Z,
                { visible: u, motionName: ''.concat(c, '-fade') },
                function (e) {
                  var t = e.className;
                  return (0, k.Tm)(a || r, function (e) {
                    var n = e.className;
                    return { className: d()(t, n) };
                  });
                },
              );
            },
            N = f.useContext(h.E_),
            R = N.getPrefixCls,
            T = N.direction,
            U = e.prefixCls,
            A = e.className,
            S = void 0 === A ? '' : A,
            L = R('back-top', U),
            j = R(),
            I = d()(L, (0, a.Z)({}, ''.concat(L, '-rtl'), 'rtl' === T), S),
            H = (0, s.Z)(e, [
              'prefixCls',
              'className',
              'children',
              'visibilityHeight',
              'target',
              'visible',
            ]);
          return f.createElement(
            'div',
            (0, c.Z)({}, H, { className: I, onClick: C, ref: v }),
            D({ prefixCls: L, rootPrefixCls: j }),
          );
        };
      N.defaultProps = { visibilityHeight: 400 };
      var R = f.memo(N),
        T = [
          {
            title: '\u4e2d\u56fd\u8c03\u8272\u677f',
            color: [
              '#eccc68',
              '#ff7f50',
              '#ff6b81',
              '#a4b0be',
              '#57606f',
              '#2f3542',
              '#747d8c',
              '#ff4757',
              '#ff6348',
              '#ffa502',
              '#7bed9f',
              '#70a1ff',
              '#5352ed',
              '#ffffff',
              '#dfe4ea',
              '#ced6e0',
              '#f1f2f6',
              '#3742fa',
              '#1e90ff',
              '#2ed573',
            ],
          },
          {
            title: '\u7f8e\u56fd\u8c03\u8272\u677f',
            color: [
              '#55efc4',
              '#81ecec',
              '#74b9ff',
              '#a4b0be',
              '#a29bfe',
              '#dfe6e9',
              '#b2bec3',
              '#6c5ce7',
              '#0984e3',
              '#00cec9',
              '#00b894',
              '#ffeaa7',
              '#fab1a0',
              '#ff7675',
              '#fd79a8',
              '#636e72',
              '#2d3436',
              '#e84393',
              '#e17055',
              '#fdcb6e',
            ],
          },
          {
            title: '\u6fb3\u5927\u5229\u4e9a\u8c03\u8272\u677f',
            color: [
              '#f6e58d',
              '#ffbe76',
              '#ff7979',
              '#badc58',
              '#dff9fb',
              '#c7ecee',
              '#6ab04c',
              '#eb4d4b',
              '#f0932b',
              '#f9ca24',
              '#7ed6df',
              '#e056fd',
              '#686de0',
              '#30336b',
              '#95afc0',
              '#535c68',
              '#130f40',
              '#4834d4',
              '#be2edd',
              '#22a6b3',
            ],
          },
          {
            title: '\u82f1\u56fd\u8c03\u8272\u677f',
            color: [
              '#00a8ff',
              '#9c88ff',
              '#fbc531',
              '#4cd137',
              '#487eb0',
              '#40739e',
              '#44bd32',
              '#e1b12c',
              '#8c7ae6',
              '#0097e6',
              '#e84118',
              '#f5f6fa',
              '#7f8fa6',
              '#273c75',
              '#353b48',
              '#2f3640',
              '#192a56',
              '#718093',
              '#dcdde1',
              '#c23616',
            ],
          },
          {
            title: '\u52a0\u62ff\u5927\u8c03\u8272\u677f',
            color: [
              '#ff9ff3',
              '#feca57',
              '#ff6b6b',
              '#48dbfb',
              '#1dd1a1',
              '#10ac84',
              '#0abde3',
              '#ee5253',
              '#ff9f43',
              '#f368e0',
              '#00d2d3',
              '#54a0ff',
              '#5f27cd',
              '#c8d6e5',
              '#576574',
              '#222f3e',
              '#8395a7',
              '#341f97',
              '#2e86de',
              '#01a3a4',
            ],
          },
          {
            title: '\u8377\u5170\u8c03\u8272\u677f',
            color: [
              '#ffc312',
              '#c4e538',
              '#12cbc4',
              '#fda7df',
              '#ed4c67',
              '#b53471',
              '#d980fa',
              '#1289a7',
              '#a3cb38',
              '#f79f1f',
              '#ee5a24',
              '#009432',
              '#0652dd',
              '#9980fa',
              '#833471',
              '#6f1e51',
              '#5758bb',
              '#1b1464',
              '#006266',
              '#ea2027',
            ],
          },
          {
            title: '\u6cd5\u5f0f\u8c03\u8272\u677f',
            color: [
              '#fad390',
              '#f8c291',
              '#6a89cc',
              '#82ccdd',
              '#b8e994',
              '#78e08f',
              '#60a3bc',
              '#4a69bd',
              '#e55039',
              '#f6b93b',
              '#fa983a',
              '#eb2f06',
              '#1e3799',
              '#3c6382',
              '#38ada9',
              '#079992',
              '#0a3d62',
              '#0c2461',
              '#b71540',
              '#e58e26',
            ],
          },
          {
            title: '\u5fb7\u56fd\u8c03\u8272\u677f',
            color: [
              '#fc5c65',
              '#fd9644',
              '#fed330',
              '#26de81',
              '#2bcbba',
              '#0fb9b1',
              '#20bf6b',
              '#f7b731',
              '#fa8231',
              '#eb3b5a',
              '#45aaf2',
              '#4b7bec',
              '#a55eea',
              '#d1d8e0',
              '#778ca3',
              '#4b6584',
              '#a5b1c2',
              '#8854d0',
              '#3867d6',
              '#2d98da',
            ],
          },
          {
            title: '\u5370\u5ea6\u8c03\u8272\u677f',
            color: [
              '#fea47f',
              '#25ccf7',
              '#eab543',
              '#55e6c1',
              '#cad3c8',
              '#2c3a47',
              '#58b19f',
              '#f8efba',
              '#1b9cfc',
              '#f97f51',
              '#b33771',
              '#3b3b98',
              '#fd7272',
              '#9aecdb',
              '#d6a2e8',
              '#82589f',
              '#bdc581',
              '#fc427b',
              '#182c61',
              '#6d214f',
            ],
          },
          {
            title: '\u4fc4\u56fd\u8c03\u8272\u677f',
            color: [
              '#f3a683',
              '#f7d794',
              '#778beb',
              '#e77f67',
              '#cf6a87',
              '#c44569',
              '#e15f41',
              '#546de5',
              '#f5cd79',
              '#f19066',
              '#786fa6',
              '#f8a5c2',
              '#63cdda',
              '#ea8685',
              '#596275',
              '#303952',
              '#e66767',
              '#3dc1d3',
              '#f78fb3',
              '#574b90',
            ],
          },
          {
            title: '\u897f\u73ed\u7259\u8c03\u8272\u677f',
            color: [
              '#40407a',
              '#706fd3',
              '#f7f1e3',
              '#34ace0',
              '#33d9b2',
              '#218c74',
              '#227093',
              '#aaa69d',
              '#474787',
              '#2c2c54',
              '#ff5252',
              '#ff793f',
              '#d1ccc0',
              '#ffb142',
              '#ffda79',
              '#ccae62',
              '#cc8e35',
              '#84817a',
              '#cd6133',
              '#b33939',
            ],
          },
          {
            title: '\u745e\u5178\u8c03\u8272\u677f',
            color: [
              '#ef5777',
              '#575fcf',
              '#4bcffa',
              '#34e7e4',
              '#0be881',
              '#05c46b',
              '#00d8d6',
              '#0fbcf9',
              '#3c40c6',
              '#f53b57',
              '#ffc048',
              '#ffdd59',
              '#ff5e57',
              '#d2dae2',
              '#485460',
              '#1e272e',
              '#808e9b',
              '#ff3f34',
              '#ffd32a',
              '#ffa801',
            ],
          },
          {
            title: '\u571f\u8033\u5176\u8c03\u8272\u677f',
            color: [
              '#cd84f1',
              '#ffcccc',
              '#ff4d4d',
              '#ffaf40',
              '#fffa65',
              '#fff200',
              '#ff9f1a',
              '#ff3838',
              '#ffb8b8',
              '#c56cf0',
              '#32ff7e',
              '#7efff5',
              '#18dcff',
              '#7d5fff',
              '#4b4b4b',
              '#3d3d3d',
              '#7158e2',
              '#17c0eb',
              '#17c0eb',
              '#3ae374',
            ],
          },
        ],
        U = (n(34792), n(55026)),
        A = n(57337),
        S = n(29044),
        L = n(85893);
      function j(e) {
        var t = (0, S.Z)(),
          n = (0, A.Z)(t, 2),
          c = n[0],
          a = n[1];
        function r(e) {
          a(e),
            c.error
              ? U.default.error(c.error.message)
              : U.default.success(''.concat(e, ' \u5df2\u590d\u5236'));
        }
        return (0, L.jsxs)('div', {
          className:
            'm-8 max-w-3/4 <sm:(max-w-full m-4) bg-gray-50 p-4 rounded-lg shadow-lg',
          children: [
            (0, L.jsx)('div', {
              className: 'ml-4 w-full text-xl text-gray-400',
              children: e.title,
            }),
            e.color.map((e, t) =>
              (0, L.jsx)(
                'div',
                {
                  className:
                    'inline-block m-4 w-16 h-16 rounded-md shadow-lg cursor-pointer',
                  style: { background: e },
                  onClick: () => r(e),
                },
                t,
              ),
            ),
          ],
        });
      }
      function I() {
        return (0, L.jsxs)('div', {
          className:
            'flex flex-col items-center my-0 mx-auto pt-8 min-h-full bg-gray-200 rounded-lg',
          children: [
            (0, L.jsx)('div', {
              className: 'm-4 text-gray-400 text-4xl',
              children: '\u4e2d\u6027\u8272\u7248',
            }),
            T.map((e) =>
              (0, L.jsx)(
                j,
                {
                  'v-for': 'item in paletteDataList',
                  title: e.title,
                  color: e.color,
                },
                e.title,
              ),
            ),
            (0, L.jsx)(R, { style: { right: '40px' } }),
          ],
        });
      }
    },
    96159: function (e, t, n) {
      'use strict';
      n.d(t, {
        l$: function () {
          return a;
        },
        Tm: function () {
          return f;
        },
      });
      var c = n(67294),
        a = c.isValidElement;
      function r(e, t, n) {
        return a(e)
          ? c.cloneElement(e, 'function' === typeof n ? n(e.props || {}) : n)
          : t;
      }
      function f(e, t) {
        return r(e, e, t);
      }
    },
    20640: function (e, t, n) {
      'use strict';
      var c = n(11742),
        a = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' },
        r = 'Copy to clipboard: #{key}, Enter';
      function f(e) {
        var t =
          (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
        return e.replace(/#{\s*key\s*}/g, t);
      }
      function o(e, t) {
        var n,
          o,
          i,
          l,
          u,
          d,
          s = !1;
        t || (t = {}), (n = t.debug || !1);
        try {
          (i = c()),
            (l = document.createRange()),
            (u = document.getSelection()),
            (d = document.createElement('span')),
            (d.textContent = e),
            (d.style.all = 'unset'),
            (d.style.position = 'fixed'),
            (d.style.top = 0),
            (d.style.clip = 'rect(0, 0, 0, 0)'),
            (d.style.whiteSpace = 'pre'),
            (d.style.webkitUserSelect = 'text'),
            (d.style.MozUserSelect = 'text'),
            (d.style.msUserSelect = 'text'),
            (d.style.userSelect = 'text'),
            d.addEventListener('copy', function (c) {
              if ((c.stopPropagation(), t.format))
                if (
                  (c.preventDefault(), 'undefined' === typeof c.clipboardData)
                ) {
                  n && console.warn('unable to use e.clipboardData'),
                    n && console.warn('trying IE specific stuff'),
                    window.clipboardData.clearData();
                  var r = a[t.format] || a['default'];
                  window.clipboardData.setData(r, e);
                } else
                  c.clipboardData.clearData(),
                    c.clipboardData.setData(t.format, e);
              t.onCopy && (c.preventDefault(), t.onCopy(c.clipboardData));
            }),
            document.body.appendChild(d),
            l.selectNodeContents(d),
            u.addRange(l);
          var b = document.execCommand('copy');
          if (!b) throw new Error('copy command was unsuccessful');
          s = !0;
        } catch (v) {
          n && console.error('unable to copy using execCommand: ', v),
            n && console.warn('trying IE specific stuff');
          try {
            window.clipboardData.setData(t.format || 'text', e),
              t.onCopy && t.onCopy(window.clipboardData),
              (s = !0);
          } catch (v) {
            n && console.error('unable to copy using clipboardData: ', v),
              n && console.error('falling back to prompt'),
              (o = f('message' in t ? t.message : r)),
              window.prompt(o, e);
          }
        } finally {
          u &&
            ('function' == typeof u.removeRange
              ? u.removeRange(l)
              : u.removeAllRanges()),
            d && document.body.removeChild(d),
            i();
        }
        return s;
      }
      e.exports = o;
    },
    64019: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var c = n(73935);
      function a(e, t, n, a) {
        var r = c.unstable_batchedUpdates
          ? function (e) {
              c.unstable_batchedUpdates(n, e);
            }
          : n;
        return (
          e.addEventListener && e.addEventListener(t, r, a),
          {
            remove: function () {
              e.removeEventListener && e.removeEventListener(t, r);
            },
          }
        );
      }
    },
    21770: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var c = n(28481),
        a = n(67294);
      function r(e, t) {
        var n = t || {},
          r = n.defaultValue,
          f = n.value,
          o = n.onChange,
          i = n.postState,
          l = a.useState(function () {
            return void 0 !== f
              ? f
              : void 0 !== r
              ? 'function' === typeof r
                ? r()
                : r
              : 'function' === typeof e
              ? e()
              : e;
          }),
          u = (0, c.Z)(l, 2),
          d = u[0],
          s = u[1],
          b = void 0 !== f ? f : d;
        function v(e) {
          s(e), b !== e && o && o(e, b);
        }
        i && (b = i(b));
        var m = a.useRef(!0);
        return (
          a.useEffect(
            function () {
              m.current ? (m.current = !1) : void 0 === f && s(f);
            },
            [f],
          ),
          [b, v]
        );
      }
    },
    98423: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var c = n(28991);
      function a(e, t) {
        var n = (0, c.Z)({}, e);
        return (
          Array.isArray(t) &&
            t.forEach(function (e) {
              delete n[e];
            }),
          n
        );
      }
    },
    29044: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var c = n(20640),
        a = n.n(c),
        r = n(67294);
      function f() {
        var e = (0, r.useRef)(!1),
          t = (0, r.useCallback)(function () {
            return e.current;
          }, []);
        return (
          (0, r.useEffect)(function () {
            return (
              (e.current = !0),
              function () {
                e.current = !1;
              }
            );
          }, []),
          t
        );
      }
      var o = function (e) {
          void 0 === e && (e = {});
          var t = (0, r.useState)(e),
            n = t[0],
            c = t[1],
            a = (0, r.useCallback)(function (e) {
              c(function (t) {
                return Object.assign({}, t, e instanceof Function ? e(t) : e);
              });
            }, []);
          return [n, a];
        },
        i = o,
        l = function () {
          var e = f(),
            t = i({ value: void 0, error: void 0, noUserInteraction: !0 }),
            n = t[0],
            c = t[1],
            o = (0, r.useCallback)(function (t) {
              var n, r;
              if (e())
                try {
                  if ('string' !== typeof t && 'number' !== typeof t) {
                    var f = new Error(
                      'Cannot copy typeof ' +
                        typeof t +
                        ' to clipboard, must be a string',
                    );
                    return void c({
                      value: t,
                      error: f,
                      noUserInteraction: !0,
                    });
                  }
                  if ('' === t) {
                    f = new Error('Cannot copy empty string to clipboard.');
                    return void c({
                      value: t,
                      error: f,
                      noUserInteraction: !0,
                    });
                  }
                  (r = t.toString()),
                    (n = a()(r)),
                    c({ value: r, error: void 0, noUserInteraction: n });
                } catch (f) {
                  c({ value: r, error: f, noUserInteraction: n });
                }
            }, []);
          return [n, o];
        },
        u = l;
    },
    11742: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], c = 0;
          c < e.rangeCount;
          c++
        )
          n.push(e.getRangeAt(c));
        switch (t.tagName.toUpperCase()) {
          case 'INPUT':
          case 'TEXTAREA':
            t.blur();
            break;
          default:
            t = null;
            break;
        }
        return (
          e.removeAllRanges(),
          function () {
            'Caret' === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
  },
]);
