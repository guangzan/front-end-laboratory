(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [32],
  {
    86183: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return h;
          },
        });
      var r = n(67294),
        a = n(57337),
        i = n(19611),
        c = n(85893),
        s = [
          { title: '\u9996\u9875', path: '/' },
          { title: '\u535a\u5ba2', path: '/posts' },
          { title: '\u9879\u76ee', path: '/projects' },
          { title: '\u5728\u7ebf\u5de5\u5177', path: '/tools' },
          { title: '\u8f6f\u4ef6', path: '/software' },
        ];
      function l() {
        return (0, c.jsx)(i.rU, {
          to: '/',
          children: (0, c.jsx)('div', {
            className:
              'flex items-center py-4 pl-8 pr-4 text-2xl text-gray-700',
            children: 'FE Laboratory',
          }),
        });
      }
      function o() {
        return (0, c.jsx)('nav', {
          className: 'flex flex-col items-center px-8 py-4 ml-auto bg-white',
          children: (0, c.jsx)('ul', {
            className: 'flex items-center gap-2 <sm:flex-col',
            children: s.map((e, t) =>
              (0, c.jsx)(
                i.rU,
                {
                  to: e.path,
                  children: (0, c.jsx)('li', {
                    className:
                      'flex items-center px-3 py-2 text-gray-500 cursor-pointer hover:(text-gray-900)',
                    children: (0, c.jsx)('span', {
                      'v-if': "typeof item.title == 'string'",
                      children: e.title,
                    }),
                  }),
                },
                t,
              ),
            ),
          }),
        });
      }
      function u(e) {
        return (0, c.jsx)('nav', {
          className:
            'absolute top-12 flex flex-col items-center px-8 py-4 ml-auto bg-white',
          children: (0, c.jsx)('ul', {
            className: 'flex items-center gap-2 <sm:flex-col',
            children: s.map((e, t) =>
              (0, c.jsx)(
                i.rU,
                {
                  to: e.path,
                  children: (0, c.jsx)('li', {
                    className:
                      'flex items-center px-3 py-2 text-gray-500 cursor-pointer hover:(text-gray-900)',
                    children: (0, c.jsx)('span', {
                      'v-if': "typeof item.title == 'string'",
                      children: e.title,
                    }),
                  }),
                },
                t,
              ),
            ),
          }),
        });
      }
      function f() {
        return (0, c.jsx)('div', {
          className: 'flex items-center p-8 sm:hidden',
          children: (0, c.jsx)('div', {
            className: 'side-btn',
            children: (0, c.jsx)('div', { className: 'side-btn-burger' }),
          }),
        });
      }
      function p() {
        var e = (0, r.useState)(!1),
          t = (0, a.Z)(e, 2),
          n = t[0];
        t[1];
        return (0, c.jsxs)('header', {
          className:
            'sticky top-0 flex flex-row items-stretch  bg-white z-30 opacity-90',
          children: [
            (0, c.jsx)(f, {}),
            (0, c.jsx)(l, {}),
            (0, c.jsx)(o, {}),
            n && (0, c.jsx)(u, {}),
          ],
        });
      }
      var x = p;
      function m() {
        return (0, c.jsxs)('footer', {
          className: 'mt-auto py-8',
          children: [
            (0, c.jsx)('p', {
              className: 'text-gray-500 text-center leading-7',
              children: 'Powered by React',
            }),
            (0, c.jsxs)('p', {
              className: 'text-gray-500 text-center leading-7',
              children: [
                'Copyright \xa9 FE Laboratory ',
                new Date().getFullYear(),
              ],
            }),
          ],
        });
      }
      function h(e) {
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(x, {}),
            (0, c.jsx)('main', {
              className: 'mt-4 mx-auto w-11/12 lg:w-4/5',
              children: e.children,
            }),
            (0, c.jsx)(m, {}),
          ],
        });
      }
    },
    19611: function (e, t, n) {
      'use strict';
      n.d(t, {
        rU: function () {
          return d;
        },
      });
      var r = n(19630),
        a = n(41788),
        i = n(67294),
        c = n(97175),
        s = (n(45697), n(22122)),
        l = n(19756),
        o = n(2177);
      i.Component;
      i.Component;
      var u = function (e, t) {
          return 'function' === typeof e ? e(t) : e;
        },
        f = function (e, t) {
          return 'string' === typeof e ? (0, c.ob)(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        x = i.forwardRef;
      function m(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
      }
      'undefined' === typeof x && (x = p);
      var h = x(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          c = (0, l.Z)(e, ['innerRef', 'navigate', 'onClick']),
          o = c.target,
          u = (0, s.Z)({}, c, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (o && '_self' !== o) ||
                m(e) ||
                (e.preventDefault(), r());
            },
          });
        return (u.ref = (p !== x && t) || n), i.createElement('a', u);
      });
      var d = x(function (e, t) {
          var n = e.component,
            a = void 0 === n ? h : n,
            c = e.replace,
            m = e.to,
            d = e.innerRef,
            v = (0, l.Z)(e, ['component', 'replace', 'to', 'innerRef']);
          return i.createElement(r.s6.Consumer, null, function (e) {
            e || (0, o.Z)(!1);
            var n = e.history,
              r = f(u(m, e.location), e.location),
              l = r ? n.createHref(r) : '',
              h = (0, s.Z)({}, v, {
                href: l,
                navigate: function () {
                  var t = u(m, e.location),
                    r = c ? n.replace : n.push;
                  r(t);
                },
              });
            return (
              p !== x ? (h.ref = t || d) : (h.innerRef = d),
              i.createElement(a, h)
            );
          });
        }),
        v = function (e) {
          return e;
        },
        y = i.forwardRef;
      function g() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t
          .filter(function (e) {
            return e;
          })
          .join(' ');
      }
      'undefined' === typeof y && (y = v);
      y(function (e, t) {
        var n = e['aria-current'],
          a = void 0 === n ? 'page' : n,
          c = e.activeClassName,
          p = void 0 === c ? 'active' : c,
          x = e.activeStyle,
          m = e.className,
          h = e.exact,
          j = e.isActive,
          N = e.location,
          w = e.sensitive,
          b = e.strict,
          C = e.style,
          R = e.to,
          Z = e.innerRef,
          k = (0, l.Z)(e, [
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
        return i.createElement(r.s6.Consumer, null, function (e) {
          e || (0, o.Z)(!1);
          var n = N || e.location,
            c = f(u(R, n), n),
            l = c.pathname,
            E = l && l.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1'),
            F = E
              ? (0, r.LX)(n.pathname, {
                  path: E,
                  exact: h,
                  sensitive: w,
                  strict: b,
                })
              : null,
            K = !!(j ? j(F, n) : F),
            U = K ? g(m, p) : m,
            A = K ? (0, s.Z)({}, C, {}, x) : C,
            D = (0, s.Z)(
              {
                'aria-current': (K && a) || null,
                className: U,
                style: A,
                to: c,
              },
              k,
            );
          return (
            v !== y ? (D.ref = t || Z) : (D.innerRef = Z), i.createElement(d, D)
          );
        });
      });
    },
  },
]);
