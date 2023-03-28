import { openBlock as R, createElementBlock as $, createElementVNode as y, renderSlot as U, withModifiers as Be, toDisplayString as ae, Fragment as Z, renderList as J, createTextVNode as Ke, normalizeClass as Fe } from "vue";
function Ne(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function xe(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), Object.keys(t).forEach(function(i) {
    typeof e[i] > "u" ? e[i] = t[i] : Ne(t[i]) && Ne(e[i]) && Object.keys(t[i]).length > 0 && xe(e[i], t[i]);
  });
}
var Ye = {
  body: {},
  addEventListener: function() {
  },
  removeEventListener: function() {
  },
  activeElement: {
    blur: function() {
    },
    nodeName: ""
  },
  querySelector: function() {
    return null;
  },
  querySelectorAll: function() {
    return [];
  },
  getElementById: function() {
    return null;
  },
  createEvent: function() {
    return {
      initEvent: function() {
      }
    };
  },
  createElement: function() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute: function() {
      },
      getElementsByTagName: function() {
        return [];
      }
    };
  },
  createElementNS: function() {
    return {};
  },
  importNode: function() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function B() {
  var e = typeof document < "u" ? document : {};
  return xe(e, Ye), e;
}
var et = {
  document: Ye,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState: function() {
    },
    pushState: function() {
    },
    go: function() {
    },
    back: function() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener: function() {
  },
  removeEventListener: function() {
  },
  getComputedStyle: function() {
    return {
      getPropertyValue: function() {
        return "";
      }
    };
  },
  Image: function() {
  },
  Date: function() {
  },
  screen: {},
  setTimeout: function() {
  },
  clearTimeout: function() {
  },
  matchMedia: function() {
    return {};
  },
  requestAnimationFrame: function(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame: function(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  }
};
function L() {
  var e = typeof window < "u" ? window : {};
  return xe(e, et), e;
}
function tt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function ye(e) {
  return ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, ye(e);
}
function le(e, t) {
  return le = Object.setPrototypeOf || function(r, s) {
    return r.__proto__ = s, r;
  }, le(e, t);
}
function rt() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function oe(e, t, i) {
  return rt() ? oe = Reflect.construct : oe = function(s, a, l) {
    var n = [null];
    n.push.apply(n, a);
    var o = Function.bind.apply(s, n), d = new o();
    return l && le(d, l.prototype), d;
  }, oe.apply(null, arguments);
}
function it(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Me(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Me = function(r) {
    if (r === null || !it(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, s);
    }
    function s() {
      return oe(r, arguments, ye(this).constructor);
    }
    return s.prototype = Object.create(r.prototype, {
      constructor: {
        value: s,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), le(s, r);
  }, Me(e);
}
function st(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function at(e) {
  var t = e.__proto__;
  Object.defineProperty(e, "__proto__", {
    get: function() {
      return t;
    },
    set: function(r) {
      t.__proto__ = r;
    }
  });
}
var Y = /* @__PURE__ */ function(e) {
  tt(t, e);
  function t(i) {
    var r;
    return r = e.call.apply(e, [this].concat(i)) || this, at(st(r)), r;
  }
  return t;
}(/* @__PURE__ */ Me(Array));
function ee(e) {
  e === void 0 && (e = []);
  var t = [];
  return e.forEach(function(i) {
    Array.isArray(i) ? t.push.apply(t, ee(i)) : t.push(i);
  }), t;
}
function We(e, t) {
  return Array.prototype.filter.call(e, t);
}
function nt(e) {
  for (var t = [], i = 0; i < e.length; i += 1)
    t.indexOf(e[i]) === -1 && t.push(e[i]);
  return t;
}
function ot(e, t) {
  if (typeof e != "string")
    return [e];
  for (var i = [], r = t.querySelectorAll(e), s = 0; s < r.length; s += 1)
    i.push(r[s]);
  return i;
}
function m(e, t) {
  var i = L(), r = B(), s = [];
  if (!t && e instanceof Y)
    return e;
  if (!e)
    return new Y(s);
  if (typeof e == "string") {
    var a = e.trim();
    if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
      var l = "div";
      a.indexOf("<li") === 0 && (l = "ul"), a.indexOf("<tr") === 0 && (l = "tbody"), (a.indexOf("<td") === 0 || a.indexOf("<th") === 0) && (l = "tr"), a.indexOf("<tbody") === 0 && (l = "table"), a.indexOf("<option") === 0 && (l = "select");
      var n = r.createElement(l);
      n.innerHTML = a;
      for (var o = 0; o < n.childNodes.length; o += 1)
        s.push(n.childNodes[o]);
    } else
      s = ot(e.trim(), t || r);
  } else if (e.nodeType || e === i || e === r)
    s.push(e);
  else if (Array.isArray(e)) {
    if (e instanceof Y)
      return e;
    s = e;
  }
  return new Y(nt(s));
}
m.fn = Y.prototype;
function lt() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var r = ee(t.map(function(s) {
    return s.split(" ");
  }));
  return this.forEach(function(s) {
    var a;
    (a = s.classList).add.apply(a, r);
  }), this;
}
function dt() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var r = ee(t.map(function(s) {
    return s.split(" ");
  }));
  return this.forEach(function(s) {
    var a;
    (a = s.classList).remove.apply(a, r);
  }), this;
}
function ut() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var r = ee(t.map(function(s) {
    return s.split(" ");
  }));
  this.forEach(function(s) {
    r.forEach(function(a) {
      s.classList.toggle(a);
    });
  });
}
function ft() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var r = ee(t.map(function(s) {
    return s.split(" ");
  }));
  return We(this, function(s) {
    return r.filter(function(a) {
      return s.classList.contains(a);
    }).length > 0;
  }).length > 0;
}
function ct(e, t) {
  if (arguments.length === 1 && typeof e == "string")
    return this[0] ? this[0].getAttribute(e) : void 0;
  for (var i = 0; i < this.length; i += 1)
    if (arguments.length === 2)
      this[i].setAttribute(e, t);
    else
      for (var r in e)
        this[i][r] = e[r], this[i].setAttribute(r, e[r]);
  return this;
}
function pt(e) {
  for (var t = 0; t < this.length; t += 1)
    this[t].removeAttribute(e);
  return this;
}
function vt(e) {
  for (var t = 0; t < this.length; t += 1)
    this[t].style.transform = e;
  return this;
}
function ht(e) {
  for (var t = 0; t < this.length; t += 1)
    this[t].style.transitionDuration = typeof e != "string" ? e + "ms" : e;
  return this;
}
function mt() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var r = t[0], s = t[1], a = t[2], l = t[3];
  typeof t[1] == "function" && (r = t[0], a = t[1], l = t[2], s = void 0), l || (l = !1);
  function n(g) {
    var w = g.target;
    if (w) {
      var T = g.target.dom7EventData || [];
      if (T.indexOf(g) < 0 && T.unshift(g), m(w).is(s))
        a.apply(w, T);
      else
        for (var M = m(w).parents(), S = 0; S < M.length; S += 1)
          m(M[S]).is(s) && a.apply(M[S], T);
    }
  }
  function o(g) {
    var w = g && g.target ? g.target.dom7EventData || [] : [];
    w.indexOf(g) < 0 && w.unshift(g), a.apply(this, w);
  }
  for (var d = r.split(" "), u, f = 0; f < this.length; f += 1) {
    var c = this[f];
    if (s)
      for (u = 0; u < d.length; u += 1) {
        var h = d[u];
        c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({
          listener: a,
          proxyListener: n
        }), c.addEventListener(h, n, l);
      }
    else
      for (u = 0; u < d.length; u += 1) {
        var p = d[u];
        c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[p] || (c.dom7Listeners[p] = []), c.dom7Listeners[p].push({
          listener: a,
          proxyListener: o
        }), c.addEventListener(p, o, l);
      }
  }
  return this;
}
function gt() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  var r = t[0], s = t[1], a = t[2], l = t[3];
  typeof t[1] == "function" && (r = t[0], a = t[1], l = t[2], s = void 0), l || (l = !1);
  for (var n = r.split(" "), o = 0; o < n.length; o += 1)
    for (var d = n[o], u = 0; u < this.length; u += 1) {
      var f = this[u], c = void 0;
      if (!s && f.dom7Listeners ? c = f.dom7Listeners[d] : s && f.dom7LiveListeners && (c = f.dom7LiveListeners[d]), c && c.length)
        for (var p = c.length - 1; p >= 0; p -= 1) {
          var h = c[p];
          a && h.listener === a || a && h.listener && h.listener.dom7proxy && h.listener.dom7proxy === a ? (f.removeEventListener(d, h.proxyListener, l), c.splice(p, 1)) : a || (f.removeEventListener(d, h.proxyListener, l), c.splice(p, 1));
        }
    }
  return this;
}
function wt() {
  for (var e = L(), t = arguments.length, i = new Array(t), r = 0; r < t; r++)
    i[r] = arguments[r];
  for (var s = i[0].split(" "), a = i[1], l = 0; l < s.length; l += 1)
    for (var n = s[l], o = 0; o < this.length; o += 1) {
      var d = this[o];
      if (e.CustomEvent) {
        var u = new e.CustomEvent(n, {
          detail: a,
          bubbles: !0,
          cancelable: !0
        });
        d.dom7EventData = i.filter(function(f, c) {
          return c > 0;
        }), d.dispatchEvent(u), d.dom7EventData = [], delete d.dom7EventData;
      }
    }
  return this;
}
function Tt(e) {
  var t = this;
  function i(r) {
    r.target === this && (e.call(this, r), t.off("transitionend", i));
  }
  return e && t.on("transitionend", i), this;
}
function St(e) {
  if (this.length > 0) {
    if (e) {
      var t = this.styles();
      return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function bt(e) {
  if (this.length > 0) {
    if (e) {
      var t = this.styles();
      return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function yt() {
  if (this.length > 0) {
    var e = L(), t = B(), i = this[0], r = i.getBoundingClientRect(), s = t.body, a = i.clientTop || s.clientTop || 0, l = i.clientLeft || s.clientLeft || 0, n = i === e ? e.scrollY : i.scrollTop, o = i === e ? e.scrollX : i.scrollLeft;
    return {
      top: r.top + n - a,
      left: r.left + o - l
    };
  }
  return null;
}
function Mt() {
  var e = L();
  return this[0] ? e.getComputedStyle(this[0], null) : {};
}
function Ct(e, t) {
  var i = L(), r;
  if (arguments.length === 1)
    if (typeof e == "string") {
      if (this[0])
        return i.getComputedStyle(this[0], null).getPropertyValue(e);
    } else {
      for (r = 0; r < this.length; r += 1)
        for (var s in e)
          this[r].style[s] = e[s];
      return this;
    }
  if (arguments.length === 2 && typeof e == "string") {
    for (r = 0; r < this.length; r += 1)
      this[r].style[e] = t;
    return this;
  }
  return this;
}
function Et(e) {
  return e ? (this.forEach(function(t, i) {
    e.apply(t, [t, i]);
  }), this) : this;
}
function xt(e) {
  var t = We(this, e);
  return m(t);
}
function Lt(e) {
  if (typeof e > "u")
    return this[0] ? this[0].innerHTML : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].innerHTML = e;
  return this;
}
function Pt(e) {
  if (typeof e > "u")
    return this[0] ? this[0].textContent.trim() : null;
  for (var t = 0; t < this.length; t += 1)
    this[t].textContent = e;
  return this;
}
function Dt(e) {
  var t = L(), i = B(), r = this[0], s, a;
  if (!r || typeof e > "u")
    return !1;
  if (typeof e == "string") {
    if (r.matches)
      return r.matches(e);
    if (r.webkitMatchesSelector)
      return r.webkitMatchesSelector(e);
    if (r.msMatchesSelector)
      return r.msMatchesSelector(e);
    for (s = m(e), a = 0; a < s.length; a += 1)
      if (s[a] === r)
        return !0;
    return !1;
  }
  if (e === i)
    return r === i;
  if (e === t)
    return r === t;
  if (e.nodeType || e instanceof Y) {
    for (s = e.nodeType ? [e] : e, a = 0; a < s.length; a += 1)
      if (s[a] === r)
        return !0;
    return !1;
  }
  return !1;
}
function Ot() {
  var e = this[0], t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function It(e) {
  if (typeof e > "u")
    return this;
  var t = this.length;
  if (e > t - 1)
    return m([]);
  if (e < 0) {
    var i = t + e;
    return i < 0 ? m([]) : m([this[i]]);
  }
  return m([this[e]]);
}
function zt() {
  for (var e, t = B(), i = 0; i < arguments.length; i += 1) {
    e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    for (var r = 0; r < this.length; r += 1)
      if (typeof e == "string") {
        var s = t.createElement("div");
        for (s.innerHTML = e; s.firstChild; )
          this[r].appendChild(s.firstChild);
      } else if (e instanceof Y)
        for (var a = 0; a < e.length; a += 1)
          this[r].appendChild(e[a]);
      else
        this[r].appendChild(e);
  }
  return this;
}
function At(e) {
  var t = B(), i, r;
  for (i = 0; i < this.length; i += 1)
    if (typeof e == "string") {
      var s = t.createElement("div");
      for (s.innerHTML = e, r = s.childNodes.length - 1; r >= 0; r -= 1)
        this[i].insertBefore(s.childNodes[r], this[i].childNodes[0]);
    } else if (e instanceof Y)
      for (r = 0; r < e.length; r += 1)
        this[i].insertBefore(e[r], this[i].childNodes[0]);
    else
      this[i].insertBefore(e, this[i].childNodes[0]);
  return this;
}
function kt(e) {
  return this.length > 0 ? e ? this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]) : this[0].nextElementSibling ? m([this[0].nextElementSibling]) : m([]) : m([]);
}
function Gt(e) {
  var t = [], i = this[0];
  if (!i)
    return m([]);
  for (; i.nextElementSibling; ) {
    var r = i.nextElementSibling;
    e ? m(r).is(e) && t.push(r) : t.push(r), i = r;
  }
  return m(t);
}
function Bt(e) {
  if (this.length > 0) {
    var t = this[0];
    return e ? t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]) : t.previousElementSibling ? m([t.previousElementSibling]) : m([]);
  }
  return m([]);
}
function Ft(e) {
  var t = [], i = this[0];
  if (!i)
    return m([]);
  for (; i.previousElementSibling; ) {
    var r = i.previousElementSibling;
    e ? m(r).is(e) && t.push(r) : t.push(r), i = r;
  }
  return m(t);
}
function Nt(e) {
  for (var t = [], i = 0; i < this.length; i += 1)
    this[i].parentNode !== null && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
  return m(t);
}
function Vt(e) {
  for (var t = [], i = 0; i < this.length; i += 1)
    for (var r = this[i].parentNode; r; )
      e ? m(r).is(e) && t.push(r) : t.push(r), r = r.parentNode;
  return m(t);
}
function Ht(e) {
  var t = this;
  return typeof e > "u" ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
}
function Rt(e) {
  for (var t = [], i = 0; i < this.length; i += 1)
    for (var r = this[i].querySelectorAll(e), s = 0; s < r.length; s += 1)
      t.push(r[s]);
  return m(t);
}
function $t(e) {
  for (var t = [], i = 0; i < this.length; i += 1)
    for (var r = this[i].children, s = 0; s < r.length; s += 1)
      (!e || m(r[s]).is(e)) && t.push(r[s]);
  return m(t);
}
function Yt() {
  for (var e = 0; e < this.length; e += 1)
    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
  return this;
}
var Ve = {
  addClass: lt,
  removeClass: dt,
  hasClass: ft,
  toggleClass: ut,
  attr: ct,
  removeAttr: pt,
  transform: vt,
  transition: ht,
  on: mt,
  off: gt,
  trigger: wt,
  transitionEnd: Tt,
  outerWidth: St,
  outerHeight: bt,
  styles: Mt,
  offset: yt,
  css: Ct,
  each: Et,
  html: Lt,
  text: Pt,
  is: Dt,
  index: Ot,
  eq: It,
  append: zt,
  prepend: At,
  next: kt,
  nextAll: Gt,
  prev: Bt,
  prevAll: Ft,
  parent: Nt,
  parents: Vt,
  closest: Ht,
  find: Rt,
  children: $t,
  filter: xt,
  remove: Yt
};
Object.keys(Ve).forEach(function(e) {
  Object.defineProperty(m.fn, e, {
    value: Ve[e],
    writable: !0
  });
});
function Wt(e) {
  var t = e;
  Object.keys(t).forEach(function(i) {
    try {
      t[i] = null;
    } catch {
    }
    try {
      delete t[i];
    } catch {
    }
  });
}
function K(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function G() {
  return Date.now();
}
function Xt(e) {
  var t = L(), i;
  return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i;
}
function jt(e, t) {
  t === void 0 && (t = "x");
  var i = L(), r, s, a, l = Xt(e);
  return i.WebKitCSSMatrix ? (s = l.transform || l.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function(n) {
    return n.replace(",", ".");
  }).join(", ")), a = new i.WebKitCSSMatrix(s === "none" ? "" : s)) : (a = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), r = a.toString().split(",")), t === "x" && (i.WebKitCSSMatrix ? s = a.m41 : r.length === 16 ? s = parseFloat(r[12]) : s = parseFloat(r[4])), t === "y" && (i.WebKitCSSMatrix ? s = a.m42 : r.length === 16 ? s = parseFloat(r[13]) : s = parseFloat(r[5])), s || 0;
}
function Q(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function qt(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function x() {
  for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = ["__proto__", "constructor", "prototype"], i = 1; i < arguments.length; i += 1) {
    var r = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (r != null && !qt(r))
      for (var s = Object.keys(Object(r)).filter(function(d) {
        return t.indexOf(d) < 0;
      }), a = 0, l = s.length; a < l; a += 1) {
        var n = s[a], o = Object.getOwnPropertyDescriptor(r, n);
        o !== void 0 && o.enumerable && (Q(e[n]) && Q(r[n]) ? r[n].__swiper__ ? e[n] = r[n] : x(e[n], r[n]) : !Q(e[n]) && Q(r[n]) ? (e[n] = {}, r[n].__swiper__ ? e[n] = r[n] : x(e[n], r[n])) : e[n] = r[n]);
      }
  }
  return e;
}
function Xe(e, t) {
  Object.keys(t).forEach(function(i) {
    Q(t[i]) && Object.keys(t[i]).forEach(function(r) {
      typeof t[i][r] == "function" && (t[i][r] = t[i][r].bind(e));
    }), e[i] = t[i];
  });
}
var ge;
function _t() {
  var e = L(), t = B();
  return {
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
    pointerEvents: !!e.PointerEvent && "maxTouchPoints" in e.navigator && e.navigator.maxTouchPoints >= 0,
    observer: function() {
      return "MutationObserver" in e || "WebkitMutationObserver" in e;
    }(),
    passiveListener: function() {
      var r = !1;
      try {
        var s = Object.defineProperty({}, "passive", {
          // eslint-disable-next-line
          get: function() {
            r = !0;
          }
        });
        e.addEventListener("testPassiveListener", null, s);
      } catch {
      }
      return r;
    }(),
    gestures: function() {
      return "ongesturestart" in e;
    }()
  };
}
function je() {
  return ge || (ge = _t()), ge;
}
var we;
function Ut(e) {
  var t = e === void 0 ? {} : e, i = t.userAgent, r = je(), s = L(), a = s.navigator.platform, l = i || s.navigator.userAgent, n = {
    ios: !1,
    android: !1
  }, o = s.screen.width, d = s.screen.height, u = l.match(/(Android);?[\s\/]+([\d.]+)?/), f = l.match(/(iPad).*OS\s([\d_]+)/), c = l.match(/(iPod)(.*OS\s([\d_]+))?/), p = !f && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = a === "Win32", g = a === "MacIntel", w = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !f && g && r.touch && w.indexOf(o + "x" + d) >= 0 && (f = l.match(/(Version)\/([\d.]+)/), f || (f = [0, 1, "13_0_0"]), g = !1), u && !h && (n.os = "android", n.android = !0), (f || p || c) && (n.os = "ios", n.ios = !0), n;
}
function Zt(e) {
  return e === void 0 && (e = {}), we || (we = Ut(e)), we;
}
var Te;
function Jt() {
  var e = L();
  function t() {
    var i = e.navigator.userAgent.toLowerCase();
    return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0;
  }
  return {
    isEdge: !!e.navigator.userAgent.match(/Edge/g),
    isSafari: t(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
  };
}
function Qt() {
  return Te || (Te = Jt()), Te;
}
var Kt = function() {
  var t = L();
  return typeof t.ResizeObserver < "u";
};
const er = {
  name: "resize",
  create: function() {
    var t = this;
    x(t, {
      resize: {
        observer: null,
        createObserver: function() {
          !t || t.destroyed || !t.initialized || (t.resize.observer = new ResizeObserver(function(r) {
            var s = t.width, a = t.height, l = s, n = a;
            r.forEach(function(o) {
              var d = o.contentBoxSize, u = o.contentRect, f = o.target;
              f && f !== t.el || (l = u ? u.width : (d[0] || d).inlineSize, n = u ? u.height : (d[0] || d).blockSize);
            }), (l !== s || n !== a) && t.resize.resizeHandler();
          }), t.resize.observer.observe(t.el));
        },
        removeObserver: function() {
          t.resize.observer && t.resize.observer.unobserve && t.el && (t.resize.observer.unobserve(t.el), t.resize.observer = null);
        },
        resizeHandler: function() {
          !t || t.destroyed || !t.initialized || (t.emit("beforeResize"), t.emit("resize"));
        },
        orientationChangeHandler: function() {
          !t || t.destroyed || !t.initialized || t.emit("orientationchange");
        }
      }
    });
  },
  on: {
    init: function(t) {
      var i = L();
      if (t.params.resizeObserver && Kt()) {
        t.resize.createObserver();
        return;
      }
      i.addEventListener("resize", t.resize.resizeHandler), i.addEventListener("orientationchange", t.resize.orientationChangeHandler);
    },
    destroy: function(t) {
      var i = L();
      t.resize.removeObserver(), i.removeEventListener("resize", t.resize.resizeHandler), i.removeEventListener("orientationchange", t.resize.orientationChangeHandler);
    }
  }
};
function Ce() {
  return Ce = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var r in i)
        Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    }
    return e;
  }, Ce.apply(this, arguments);
}
var tr = {
  attach: function(t, i) {
    i === void 0 && (i = {});
    var r = L(), s = this, a = r.MutationObserver || r.WebkitMutationObserver, l = new a(function(n) {
      if (n.length === 1) {
        s.emit("observerUpdate", n[0]);
        return;
      }
      var o = function() {
        s.emit("observerUpdate", n[0]);
      };
      r.requestAnimationFrame ? r.requestAnimationFrame(o) : r.setTimeout(o, 0);
    });
    l.observe(t, {
      attributes: typeof i.attributes > "u" ? !0 : i.attributes,
      childList: typeof i.childList > "u" ? !0 : i.childList,
      characterData: typeof i.characterData > "u" ? !0 : i.characterData
    }), s.observer.observers.push(l);
  },
  init: function() {
    var t = this;
    if (!(!t.support.observer || !t.params.observer)) {
      if (t.params.observeParents)
        for (var i = t.$el.parents(), r = 0; r < i.length; r += 1)
          t.observer.attach(i[r]);
      t.observer.attach(t.$el[0], {
        childList: t.params.observeSlideChildren
      }), t.observer.attach(t.$wrapperEl[0], {
        attributes: !1
      });
    }
  },
  destroy: function() {
    var t = this;
    t.observer.observers.forEach(function(i) {
      i.disconnect();
    }), t.observer.observers = [];
  }
};
const rr = {
  name: "observer",
  params: {
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  },
  create: function() {
    var t = this;
    Xe(t, {
      observer: Ce({}, tr, {
        observers: []
      })
    });
  },
  on: {
    init: function(t) {
      t.observer.init();
    },
    destroy: function(t) {
      t.observer.destroy();
    }
  }
}, ir = {
  useParams: function(t) {
    var i = this;
    i.modules && Object.keys(i.modules).forEach(function(r) {
      var s = i.modules[r];
      s.params && x(t, s.params);
    });
  },
  useModules: function(t) {
    t === void 0 && (t = {});
    var i = this;
    i.modules && Object.keys(i.modules).forEach(function(r) {
      var s = i.modules[r], a = t[r] || {};
      s.on && i.on && Object.keys(s.on).forEach(function(l) {
        i.on(l, s.on[l]);
      }), s.create && s.create.bind(i)(a);
    });
  }
}, sr = {
  on: function(t, i, r) {
    var s = this;
    if (typeof i != "function")
      return s;
    var a = r ? "unshift" : "push";
    return t.split(" ").forEach(function(l) {
      s.eventsListeners[l] || (s.eventsListeners[l] = []), s.eventsListeners[l][a](i);
    }), s;
  },
  once: function(t, i, r) {
    var s = this;
    if (typeof i != "function")
      return s;
    function a() {
      s.off(t, a), a.__emitterProxy && delete a.__emitterProxy;
      for (var l = arguments.length, n = new Array(l), o = 0; o < l; o++)
        n[o] = arguments[o];
      i.apply(s, n);
    }
    return a.__emitterProxy = i, s.on(t, a, r);
  },
  onAny: function(t, i) {
    var r = this;
    if (typeof t != "function")
      return r;
    var s = i ? "unshift" : "push";
    return r.eventsAnyListeners.indexOf(t) < 0 && r.eventsAnyListeners[s](t), r;
  },
  offAny: function(t) {
    var i = this;
    if (!i.eventsAnyListeners)
      return i;
    var r = i.eventsAnyListeners.indexOf(t);
    return r >= 0 && i.eventsAnyListeners.splice(r, 1), i;
  },
  off: function(t, i) {
    var r = this;
    return r.eventsListeners && t.split(" ").forEach(function(s) {
      typeof i > "u" ? r.eventsListeners[s] = [] : r.eventsListeners[s] && r.eventsListeners[s].forEach(function(a, l) {
        (a === i || a.__emitterProxy && a.__emitterProxy === i) && r.eventsListeners[s].splice(l, 1);
      });
    }), r;
  },
  emit: function() {
    var t = this;
    if (!t.eventsListeners)
      return t;
    for (var i, r, s, a = arguments.length, l = new Array(a), n = 0; n < a; n++)
      l[n] = arguments[n];
    typeof l[0] == "string" || Array.isArray(l[0]) ? (i = l[0], r = l.slice(1, l.length), s = t) : (i = l[0].events, r = l[0].data, s = l[0].context || t), r.unshift(s);
    var o = Array.isArray(i) ? i : i.split(" ");
    return o.forEach(function(d) {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(function(u) {
        u.apply(s, [d].concat(r));
      }), t.eventsListeners && t.eventsListeners[d] && t.eventsListeners[d].forEach(function(u) {
        u.apply(s, r);
      });
    }), t;
  }
};
function ar() {
  var e = this, t, i, r = e.$el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = r[0].clientWidth, typeof e.params.height < "u" && e.params.height !== null ? i = e.params.height : i = r[0].clientHeight, !(t === 0 && e.isHorizontal() || i === 0 && e.isVertical()) && (t = t - parseInt(r.css("padding-left") || 0, 10) - parseInt(r.css("padding-right") || 0, 10), i = i - parseInt(r.css("padding-top") || 0, 10) - parseInt(r.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(i) && (i = 0), x(e, {
    width: t,
    height: i,
    size: e.isHorizontal() ? t : i
  }));
}
function nr() {
  var e = this;
  function t(A) {
    return e.isHorizontal() ? A : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[A];
  }
  function i(A, j) {
    return parseFloat(A.getPropertyValue(t(j)) || 0);
  }
  var r = e.params, s = e.$wrapperEl, a = e.size, l = e.rtlTranslate, n = e.wrongRTL, o = e.virtual && r.virtual.enabled, d = o ? e.virtual.slides.length : e.slides.length, u = s.children("." + e.params.slideClass), f = o ? e.virtual.slides.length : u.length, c = [], p = [], h = [], g = r.slidesOffsetBefore;
  typeof g == "function" && (g = r.slidesOffsetBefore.call(e));
  var w = r.slidesOffsetAfter;
  typeof w == "function" && (w = r.slidesOffsetAfter.call(e));
  var T = e.snapGrid.length, M = e.slidesGrid.length, S = r.spaceBetween, v = -g, I = 0, z = 0;
  if (!(typeof a > "u")) {
    typeof S == "string" && S.indexOf("%") >= 0 && (S = parseFloat(S.replace("%", "")) / 100 * a), e.virtualSize = -S, l ? u.css({
      marginLeft: "",
      marginBottom: "",
      marginTop: ""
    }) : u.css({
      marginRight: "",
      marginBottom: "",
      marginTop: ""
    });
    var D;
    r.slidesPerColumn > 1 && (Math.floor(f / r.slidesPerColumn) === f / e.params.slidesPerColumn ? D = f : D = Math.ceil(f / r.slidesPerColumn) * r.slidesPerColumn, r.slidesPerView !== "auto" && r.slidesPerColumnFill === "row" && (D = Math.max(D, r.slidesPerView * r.slidesPerColumn)));
    for (var b, O = r.slidesPerColumn, F = D / O, N = Math.floor(f / r.slidesPerColumn), P = 0; P < f; P += 1) {
      b = 0;
      var C = u.eq(P);
      if (r.slidesPerColumn > 1) {
        var V = void 0, E = void 0, k = void 0;
        if (r.slidesPerColumnFill === "row" && r.slidesPerGroup > 1) {
          var W = Math.floor(P / (r.slidesPerGroup * r.slidesPerColumn)), X = P - r.slidesPerColumn * r.slidesPerGroup * W, te = W === 0 ? r.slidesPerGroup : Math.min(Math.ceil((f - W * O * r.slidesPerGroup) / O), r.slidesPerGroup);
          k = Math.floor(X / te), E = X - k * te + W * r.slidesPerGroup, V = E + k * D / O, C.css({
            "-webkit-box-ordinal-group": V,
            "-moz-box-ordinal-group": V,
            "-ms-flex-order": V,
            "-webkit-order": V,
            order: V
          });
        } else
          r.slidesPerColumnFill === "column" ? (E = Math.floor(P / O), k = P - E * O, (E > N || E === N && k === O - 1) && (k += 1, k >= O && (k = 0, E += 1))) : (k = Math.floor(P / F), E = P - k * F);
        C.css(t("margin-top"), k !== 0 ? r.spaceBetween && r.spaceBetween + "px" : "");
      }
      if (C.css("display") !== "none") {
        if (r.slidesPerView === "auto") {
          var q = getComputedStyle(C[0]), de = C[0].style.transform, ue = C[0].style.webkitTransform;
          if (de && (C[0].style.transform = "none"), ue && (C[0].style.webkitTransform = "none"), r.roundLengths)
            b = e.isHorizontal() ? C.outerWidth(!0) : C.outerHeight(!0);
          else {
            var De = i(q, "width"), _e = i(q, "padding-left"), Ue = i(q, "padding-right"), Oe = i(q, "margin-left"), Ie = i(q, "margin-right"), ze = q.getPropertyValue("box-sizing");
            if (ze && ze === "border-box")
              b = De + Oe + Ie;
            else {
              var Ae = C[0], Ze = Ae.clientWidth, Je = Ae.offsetWidth;
              b = De + _e + Ue + Oe + Ie + (Je - Ze);
            }
          }
          de && (C[0].style.transform = de), ue && (C[0].style.webkitTransform = ue), r.roundLengths && (b = Math.floor(b));
        } else
          b = (a - (r.slidesPerView - 1) * S) / r.slidesPerView, r.roundLengths && (b = Math.floor(b)), u[P] && (u[P].style[t("width")] = b + "px");
        u[P] && (u[P].swiperSlideSize = b), h.push(b), r.centeredSlides ? (v = v + b / 2 + I / 2 + S, I === 0 && P !== 0 && (v = v - a / 2 - S), P === 0 && (v = v - a / 2 - S), Math.abs(v) < 1 / 1e3 && (v = 0), r.roundLengths && (v = Math.floor(v)), z % r.slidesPerGroup === 0 && c.push(v), p.push(v)) : (r.roundLengths && (v = Math.floor(v)), (z - Math.min(e.params.slidesPerGroupSkip, z)) % e.params.slidesPerGroup === 0 && c.push(v), p.push(v), v = v + b + S), e.virtualSize += b + S, I = b, z += 1;
      }
    }
    e.virtualSize = Math.max(e.virtualSize, a) + w;
    var _;
    if (l && n && (r.effect === "slide" || r.effect === "coverflow") && s.css({
      width: e.virtualSize + r.spaceBetween + "px"
    }), r.setWrapperSize) {
      var fe;
      s.css((fe = {}, fe[t("width")] = e.virtualSize + r.spaceBetween + "px", fe));
    }
    if (r.slidesPerColumn > 1) {
      var ce;
      if (e.virtualSize = (b + r.spaceBetween) * D, e.virtualSize = Math.ceil(e.virtualSize / r.slidesPerColumn) - r.spaceBetween, s.css((ce = {}, ce[t("width")] = e.virtualSize + r.spaceBetween + "px", ce)), r.centeredSlides) {
        _ = [];
        for (var re = 0; re < c.length; re += 1) {
          var pe = c[re];
          r.roundLengths && (pe = Math.floor(pe)), c[re] < e.virtualSize + c[0] && _.push(pe);
        }
        c = _;
      }
    }
    if (!r.centeredSlides) {
      _ = [];
      for (var ie = 0; ie < c.length; ie += 1) {
        var ve = c[ie];
        r.roundLengths && (ve = Math.floor(ve)), c[ie] <= e.virtualSize - a && _.push(ve);
      }
      c = _, Math.floor(e.virtualSize - a) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - a);
    }
    if (c.length === 0 && (c = [0]), r.spaceBetween !== 0) {
      var he, Qe = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
      u.filter(function(A, j) {
        return r.cssMode ? j !== u.length - 1 : !0;
      }).css((he = {}, he[Qe] = S + "px", he));
    }
    if (r.centeredSlides && r.centeredSlidesBounds) {
      var me = 0;
      h.forEach(function(A) {
        me += A + (r.spaceBetween ? r.spaceBetween : 0);
      }), me -= r.spaceBetween;
      var ke = me - a;
      c = c.map(function(A) {
        return A < 0 ? -g : A > ke ? ke + w : A;
      });
    }
    if (r.centerInsufficientSlides) {
      var se = 0;
      if (h.forEach(function(A) {
        se += A + (r.spaceBetween ? r.spaceBetween : 0);
      }), se -= r.spaceBetween, se < a) {
        var Ge = (a - se) / 2;
        c.forEach(function(A, j) {
          c[j] = A - Ge;
        }), p.forEach(function(A, j) {
          p[j] = A + Ge;
        });
      }
    }
    x(e, {
      slides: u,
      snapGrid: c,
      slidesGrid: p,
      slidesSizesGrid: h
    }), f !== d && e.emit("slidesLengthChange"), c.length !== T && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== M && e.emit("slidesGridLengthChange"), (r.watchSlidesProgress || r.watchSlidesVisibility) && e.updateSlidesOffset();
  }
}
function or(e) {
  var t = this, i = [], r = t.virtual && t.params.virtual.enabled, s = 0, a;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  var l = function(u) {
    return r ? t.slides.filter(function(f) {
      return parseInt(f.getAttribute("data-swiper-slide-index"), 10) === u;
    })[0] : t.slides.eq(u)[0];
  };
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      t.visibleSlides.each(function(d) {
        i.push(d);
      });
    else
      for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
        var n = t.activeIndex + a;
        if (n > t.slides.length && !r)
          break;
        i.push(l(n));
      }
  else
    i.push(l(t.activeIndex));
  for (a = 0; a < i.length; a += 1)
    if (typeof i[a] < "u") {
      var o = i[a].offsetHeight;
      s = o > s ? o : s;
    }
  s && t.$wrapperEl.css("height", s + "px");
}
function lr() {
  for (var e = this, t = e.slides, i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop;
}
function dr(e) {
  e === void 0 && (e = this && this.translate || 0);
  var t = this, i = t.params, r = t.slides, s = t.rtlTranslate;
  if (r.length !== 0) {
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    var a = -e;
    s && (a = e), r.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
    for (var l = 0; l < r.length; l += 1) {
      var n = r[l], o = (a + (i.centeredSlides ? t.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + i.spaceBetween);
      if (i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) {
        var d = -(a - n.swiperSlideOffset), u = d + t.slidesSizesGrid[l], f = d >= 0 && d < t.size - 1 || u > 1 && u <= t.size || d <= 0 && u >= t.size;
        f && (t.visibleSlides.push(n), t.visibleSlidesIndexes.push(l), r.eq(l).addClass(i.slideVisibleClass));
      }
      n.progress = s ? -o : o;
    }
    t.visibleSlides = m(t.visibleSlides);
  }
}
function ur(e) {
  var t = this;
  if (typeof e > "u") {
    var i = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * i || 0;
  }
  var r = t.params, s = t.maxTranslate() - t.minTranslate(), a = t.progress, l = t.isBeginning, n = t.isEnd, o = l, d = n;
  s === 0 ? (a = 0, l = !0, n = !0) : (a = (e - t.minTranslate()) / s, l = a <= 0, n = a >= 1), x(t, {
    progress: a,
    isBeginning: l,
    isEnd: n
  }), (r.watchSlidesProgress || r.watchSlidesVisibility || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), l && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !l || d && !n) && t.emit("fromEdge"), t.emit("progress", a);
}
function fr() {
  var e = this, t = e.slides, i = e.params, r = e.$wrapperEl, s = e.activeIndex, a = e.realIndex, l = e.virtual && i.virtual.enabled;
  t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass);
  var n;
  l ? n = e.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : n = t.eq(s), n.addClass(i.slideActiveClass), i.loop && (n.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(i.slideDuplicateActiveClass));
  var o = n.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
  i.loop && o.length === 0 && (o = t.eq(0), o.addClass(i.slideNextClass));
  var d = n.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
  i.loop && d.length === 0 && (d = t.eq(-1), d.addClass(i.slidePrevClass)), i.loop && (o.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass)), e.emitSlidesClasses();
}
function cr(e) {
  var t = this, i = t.rtlTranslate ? t.translate : -t.translate, r = t.slidesGrid, s = t.snapGrid, a = t.params, l = t.activeIndex, n = t.realIndex, o = t.snapIndex, d = e, u;
  if (typeof d > "u") {
    for (var f = 0; f < r.length; f += 1)
      typeof r[f + 1] < "u" ? i >= r[f] && i < r[f + 1] - (r[f + 1] - r[f]) / 2 ? d = f : i >= r[f] && i < r[f + 1] && (d = f + 1) : i >= r[f] && (d = f);
    a.normalizeSlideIndex && (d < 0 || typeof d > "u") && (d = 0);
  }
  if (s.indexOf(i) >= 0)
    u = s.indexOf(i);
  else {
    var c = Math.min(a.slidesPerGroupSkip, d);
    u = c + Math.floor((d - c) / a.slidesPerGroup);
  }
  if (u >= s.length && (u = s.length - 1), d === l) {
    u !== o && (t.snapIndex = u, t.emit("snapIndexChange"));
    return;
  }
  var p = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
  x(t, {
    snapIndex: u,
    realIndex: p,
    previousIndex: l,
    activeIndex: d
  }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), n !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function pr(e) {
  var t = this, i = t.params, r = m(e.target).closest("." + i.slideClass)[0], s = !1, a;
  if (r) {
    for (var l = 0; l < t.slides.length; l += 1)
      if (t.slides[l] === r) {
        s = !0, a = l;
        break;
      }
  }
  if (r && s)
    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(m(r).attr("data-swiper-slide-index"), 10) : t.clickedIndex = a;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
const vr = {
  updateSize: ar,
  updateSlides: nr,
  updateAutoHeight: or,
  updateSlidesOffset: lr,
  updateSlidesProgress: dr,
  updateProgress: ur,
  updateSlidesClasses: fr,
  updateActiveIndex: cr,
  updateClickedSlide: pr
};
function hr(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  var t = this, i = t.params, r = t.rtlTranslate, s = t.translate, a = t.$wrapperEl;
  if (i.virtualTranslate)
    return r ? -s : s;
  if (i.cssMode)
    return s;
  var l = jt(a[0], e);
  return r && (l = -l), l || 0;
}
function mr(e, t) {
  var i = this, r = i.rtlTranslate, s = i.params, a = i.$wrapperEl, l = i.wrapperEl, n = i.progress, o = 0, d = 0, u = 0;
  i.isHorizontal() ? o = r ? -e : e : d = e, s.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.cssMode ? l[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -d : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + d + "px, " + u + "px)"), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : d;
  var f, c = i.maxTranslate() - i.minTranslate();
  c === 0 ? f = 0 : f = (e - i.minTranslate()) / c, f !== n && i.updateProgress(e), i.emit("setTranslate", i.translate, t);
}
function gr() {
  return -this.snapGrid[0];
}
function wr() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Tr(e, t, i, r, s) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), i === void 0 && (i = !0), r === void 0 && (r = !0);
  var a = this, l = a.params, n = a.wrapperEl;
  if (a.animating && l.preventInteractionOnTransition)
    return !1;
  var o = a.minTranslate(), d = a.maxTranslate(), u;
  if (r && e > o ? u = o : r && e < d ? u = d : u = e, a.updateProgress(u), l.cssMode) {
    var f = a.isHorizontal();
    if (t === 0)
      n[f ? "scrollLeft" : "scrollTop"] = -u;
    else if (n.scrollTo) {
      var c;
      n.scrollTo((c = {}, c[f ? "left" : "top"] = -u, c.behavior = "smooth", c));
    } else
      n[f ? "scrollLeft" : "scrollTop"] = -u;
    return !0;
  }
  return t === 0 ? (a.setTransition(0), a.setTranslate(u), i && (a.emit("beforeTransitionStart", t, s), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(u), i && (a.emit("beforeTransitionStart", t, s), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(h) {
    !a || a.destroyed || h.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, i && a.emit("transitionEnd"));
  }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0;
}
const Sr = {
  getTranslate: hr,
  setTranslate: mr,
  minTranslate: gr,
  maxTranslate: wr,
  translateTo: Tr
};
function br(e, t) {
  var i = this;
  i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t);
}
function yr(e, t) {
  e === void 0 && (e = !0);
  var i = this, r = i.activeIndex, s = i.params, a = i.previousIndex;
  if (!s.cssMode) {
    s.autoHeight && i.updateAutoHeight();
    var l = t;
    if (l || (r > a ? l = "next" : r < a ? l = "prev" : l = "reset"), i.emit("transitionStart"), e && r !== a) {
      if (l === "reset") {
        i.emit("slideResetTransitionStart");
        return;
      }
      i.emit("slideChangeTransitionStart"), l === "next" ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart");
    }
  }
}
function Mr(e, t) {
  e === void 0 && (e = !0);
  var i = this, r = i.activeIndex, s = i.previousIndex, a = i.params;
  if (i.animating = !1, !a.cssMode) {
    i.setTransition(0);
    var l = t;
    if (l || (r > s ? l = "next" : r < s ? l = "prev" : l = "reset"), i.emit("transitionEnd"), e && r !== s) {
      if (l === "reset") {
        i.emit("slideResetTransitionEnd");
        return;
      }
      i.emit("slideChangeTransitionEnd"), l === "next" ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd");
    }
  }
}
const Cr = {
  setTransition: br,
  transitionStart: yr,
  transitionEnd: Mr
};
function Er(e, t, i, r, s) {
  if (e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), i === void 0 && (i = !0), typeof e != "number" && typeof e != "string")
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
  if (typeof e == "string") {
    var a = parseInt(e, 10), l = isFinite(a);
    if (!l)
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
    e = a;
  }
  var n = this, o = e;
  o < 0 && (o = 0);
  var d = n.params, u = n.snapGrid, f = n.slidesGrid, c = n.previousIndex, p = n.activeIndex, h = n.rtlTranslate, g = n.wrapperEl, w = n.enabled;
  if (n.animating && d.preventInteractionOnTransition || !w && !r && !s)
    return !1;
  var T = Math.min(n.params.slidesPerGroupSkip, o), M = T + Math.floor((o - T) / n.params.slidesPerGroup);
  M >= u.length && (M = u.length - 1), (p || d.initialSlide || 0) === (c || 0) && i && n.emit("beforeSlideChangeStart");
  var S = -u[M];
  if (n.updateProgress(S), d.normalizeSlideIndex)
    for (var v = 0; v < f.length; v += 1) {
      var I = -Math.floor(S * 100), z = Math.floor(f[v] * 100), D = Math.floor(f[v + 1] * 100);
      typeof f[v + 1] < "u" ? I >= z && I < D - (D - z) / 2 ? o = v : I >= z && I < D && (o = v + 1) : I >= z && (o = v);
    }
  if (n.initialized && o !== p && (!n.allowSlideNext && S < n.translate && S < n.minTranslate() || !n.allowSlidePrev && S > n.translate && S > n.maxTranslate() && (p || 0) !== o))
    return !1;
  var b;
  if (o > p ? b = "next" : o < p ? b = "prev" : b = "reset", h && -S === n.translate || !h && S === n.translate)
    return n.updateActiveIndex(o), d.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), d.effect !== "slide" && n.setTranslate(S), b !== "reset" && (n.transitionStart(i, b), n.transitionEnd(i, b)), !1;
  if (d.cssMode) {
    var O = n.isHorizontal(), F = -S;
    if (h && (F = g.scrollWidth - g.offsetWidth - F), t === 0)
      g[O ? "scrollLeft" : "scrollTop"] = F;
    else if (g.scrollTo) {
      var N;
      g.scrollTo((N = {}, N[O ? "left" : "top"] = F, N.behavior = "smooth", N));
    } else
      g[O ? "scrollLeft" : "scrollTop"] = F;
    return !0;
  }
  return t === 0 ? (n.setTransition(0), n.setTranslate(S), n.updateActiveIndex(o), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, r), n.transitionStart(i, b), n.transitionEnd(i, b)) : (n.setTransition(t), n.setTranslate(S), n.updateActiveIndex(o), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, r), n.transitionStart(i, b), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(C) {
    !n || n.destroyed || C.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, b));
  }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))), !0;
}
function xr(e, t, i, r) {
  e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), i === void 0 && (i = !0);
  var s = this, a = e;
  return s.params.loop && (a += s.loopedSlides), s.slideTo(a, t, i, r);
}
function Lr(e, t, i) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  var r = this, s = r.params, a = r.animating, l = r.enabled;
  if (!l)
    return r;
  var n = r.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
  if (s.loop) {
    if (a && s.loopPreventsSlide)
      return !1;
    r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft;
  }
  return r.slideTo(r.activeIndex + n, e, t, i);
}
function Pr(e, t, i) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  var r = this, s = r.params, a = r.animating, l = r.snapGrid, n = r.slidesGrid, o = r.rtlTranslate, d = r.enabled;
  if (!d)
    return r;
  if (s.loop) {
    if (a && s.loopPreventsSlide)
      return !1;
    r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft;
  }
  var u = o ? r.translate : -r.translate;
  function f(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  var c = f(u), p = l.map(function(w) {
    return f(w);
  }), h = l[p.indexOf(c) - 1];
  typeof h > "u" && s.cssMode && l.forEach(function(w) {
    !h && c >= w && (h = w);
  });
  var g;
  return typeof h < "u" && (g = n.indexOf(h), g < 0 && (g = r.activeIndex - 1)), r.slideTo(g, e, t, i);
}
function Dr(e, t, i) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
  var r = this;
  return r.slideTo(r.activeIndex, e, t, i);
}
function Or(e, t, i, r) {
  e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  var s = this, a = s.activeIndex, l = Math.min(s.params.slidesPerGroupSkip, a), n = l + Math.floor((a - l) / s.params.slidesPerGroup), o = s.rtlTranslate ? s.translate : -s.translate;
  if (o >= s.snapGrid[n]) {
    var d = s.snapGrid[n], u = s.snapGrid[n + 1];
    o - d > (u - d) * r && (a += s.params.slidesPerGroup);
  } else {
    var f = s.snapGrid[n - 1], c = s.snapGrid[n];
    o - f <= (c - f) * r && (a -= s.params.slidesPerGroup);
  }
  return a = Math.max(a, 0), a = Math.min(a, s.slidesGrid.length - 1), s.slideTo(a, e, t, i);
}
function Ir() {
  var e = this, t = e.params, i = e.$wrapperEl, r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView, s = e.clickedIndex, a;
  if (t.loop) {
    if (e.animating)
      return;
    a = parseInt(m(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - r / 2 || s > e.slides.length - e.loopedSlides + r / 2 ? (e.loopFix(), s = i.children("." + t.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + t.slideDuplicateClass + ")").eq(0).index(), K(function() {
      e.slideTo(s);
    })) : e.slideTo(s) : s > e.slides.length - r ? (e.loopFix(), s = i.children("." + t.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.' + t.slideDuplicateClass + ")").eq(0).index(), K(function() {
      e.slideTo(s);
    })) : e.slideTo(s);
  } else
    e.slideTo(s);
}
const zr = {
  slideTo: Er,
  slideToLoop: xr,
  slideNext: Lr,
  slidePrev: Pr,
  slideReset: Dr,
  slideToClosest: Or,
  slideToClickedSlide: Ir
};
function Ar() {
  var e = this, t = B(), i = e.params, r = e.$wrapperEl;
  r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
  var s = r.children("." + i.slideClass);
  if (i.loopFillGroupWithBlank) {
    var a = i.slidesPerGroup - s.length % i.slidesPerGroup;
    if (a !== i.slidesPerGroup) {
      for (var l = 0; l < a; l += 1) {
        var n = m(t.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
        r.append(n);
      }
      s = r.children("." + i.slideClass);
    }
  }
  i.slidesPerView === "auto" && !i.loopedSlides && (i.loopedSlides = s.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
  var o = [], d = [];
  s.each(function(c, p) {
    var h = m(c);
    p < e.loopedSlides && d.push(c), p < s.length && p >= s.length - e.loopedSlides && o.push(c), h.attr("data-swiper-slide-index", p);
  });
  for (var u = 0; u < d.length; u += 1)
    r.append(m(d[u].cloneNode(!0)).addClass(i.slideDuplicateClass));
  for (var f = o.length - 1; f >= 0; f -= 1)
    r.prepend(m(o[f].cloneNode(!0)).addClass(i.slideDuplicateClass));
}
function kr() {
  var e = this;
  e.emit("beforeLoopFix");
  var t = e.activeIndex, i = e.slides, r = e.loopedSlides, s = e.allowSlidePrev, a = e.allowSlideNext, l = e.snapGrid, n = e.rtlTranslate, o;
  e.allowSlidePrev = !0, e.allowSlideNext = !0;
  var d = -l[t], u = d - e.getTranslate();
  if (t < r) {
    o = i.length - r * 3 + t, o += r;
    var f = e.slideTo(o, 0, !1, !0);
    f && u !== 0 && e.setTranslate((n ? -e.translate : e.translate) - u);
  } else if (t >= i.length - r) {
    o = -i.length + t + r, o += r;
    var c = e.slideTo(o, 0, !1, !0);
    c && u !== 0 && e.setTranslate((n ? -e.translate : e.translate) - u);
  }
  e.allowSlidePrev = s, e.allowSlideNext = a, e.emit("loopFix");
}
function Gr() {
  var e = this, t = e.$wrapperEl, i = e.params, r = e.slides;
  t.children("." + i.slideClass + "." + i.slideDuplicateClass + ",." + i.slideClass + "." + i.slideBlankClass).remove(), r.removeAttr("data-swiper-slide-index");
}
const Br = {
  loopCreate: Ar,
  loopFix: kr,
  loopDestroy: Gr
};
function Fr(e) {
  var t = this;
  if (!(t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
    var i = t.el;
    i.style.cursor = "move", i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", i.style.cursor = e ? "-moz-grabbin" : "-moz-grab", i.style.cursor = e ? "grabbing" : "grab";
  }
}
function Nr() {
  var e = this;
  e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "");
}
const Vr = {
  setGrabCursor: Fr,
  unsetGrabCursor: Nr
};
function Hr(e) {
  var t = this, i = t.$wrapperEl, r = t.params;
  if (r.loop && t.loopDestroy(), typeof e == "object" && "length" in e)
    for (var s = 0; s < e.length; s += 1)
      e[s] && i.append(e[s]);
  else
    i.append(e);
  r.loop && t.loopCreate(), r.observer && t.support.observer || t.update();
}
function Rr(e) {
  var t = this, i = t.params, r = t.$wrapperEl, s = t.activeIndex;
  i.loop && t.loopDestroy();
  var a = s + 1;
  if (typeof e == "object" && "length" in e) {
    for (var l = 0; l < e.length; l += 1)
      e[l] && r.prepend(e[l]);
    a = s + e.length;
  } else
    r.prepend(e);
  i.loop && t.loopCreate(), i.observer && t.support.observer || t.update(), t.slideTo(a, 0, !1);
}
function $r(e, t) {
  var i = this, r = i.$wrapperEl, s = i.params, a = i.activeIndex, l = a;
  s.loop && (l -= i.loopedSlides, i.loopDestroy(), i.slides = r.children("." + s.slideClass));
  var n = i.slides.length;
  if (e <= 0) {
    i.prependSlide(t);
    return;
  }
  if (e >= n) {
    i.appendSlide(t);
    return;
  }
  for (var o = l > e ? l + 1 : l, d = [], u = n - 1; u >= e; u -= 1) {
    var f = i.slides.eq(u);
    f.remove(), d.unshift(f);
  }
  if (typeof t == "object" && "length" in t) {
    for (var c = 0; c < t.length; c += 1)
      t[c] && r.append(t[c]);
    o = l > e ? l + t.length : l;
  } else
    r.append(t);
  for (var p = 0; p < d.length; p += 1)
    r.append(d[p]);
  s.loop && i.loopCreate(), s.observer && i.support.observer || i.update(), s.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1);
}
function Yr(e) {
  var t = this, i = t.params, r = t.$wrapperEl, s = t.activeIndex, a = s;
  i.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = r.children("." + i.slideClass));
  var l = a, n;
  if (typeof e == "object" && "length" in e) {
    for (var o = 0; o < e.length; o += 1)
      n = e[o], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
    l = Math.max(l, 0);
  } else
    n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
  i.loop && t.loopCreate(), i.observer && t.support.observer || t.update(), i.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
}
function Wr() {
  for (var e = this, t = [], i = 0; i < e.slides.length; i += 1)
    t.push(i);
  e.removeSlide(t);
}
const Xr = {
  appendSlide: Hr,
  prependSlide: Rr,
  addSlide: $r,
  removeSlide: Yr,
  removeAllSlides: Wr
};
function jr(e, t) {
  t === void 0 && (t = this);
  function i(r) {
    if (!r || r === B() || r === L())
      return null;
    r.assignedSlot && (r = r.assignedSlot);
    var s = r.closest(e);
    return s || i(r.getRootNode().host);
  }
  return i(t);
}
function qr(e) {
  var t = this, i = B(), r = L(), s = t.touchEventsData, a = t.params, l = t.touches, n = t.enabled;
  if (n && !(t.animating && a.preventInteractionOnTransition)) {
    var o = e;
    o.originalEvent && (o = o.originalEvent);
    var d = m(o.target);
    if (!(a.touchEventsTarget === "wrapper" && !d.closest(t.wrapperEl).length) && (s.isTouchEvent = o.type === "touchstart", !(!s.isTouchEvent && "which" in o && o.which === 3) && !(!s.isTouchEvent && "button" in o && o.button > 0) && !(s.isTouched && s.isMoved))) {
      var u = !!a.noSwipingClass && a.noSwipingClass !== "";
      u && o.target && o.target.shadowRoot && e.path && e.path[0] && (d = m(e.path[0]));
      var f = a.noSwipingSelector ? a.noSwipingSelector : "." + a.noSwipingClass, c = !!(o.target && o.target.shadowRoot);
      if (a.noSwiping && (c ? jr(f, o.target) : d.closest(f)[0])) {
        t.allowClick = !0;
        return;
      }
      if (!(a.swipeHandler && !d.closest(a.swipeHandler)[0])) {
        l.currentX = o.type === "touchstart" ? o.targetTouches[0].pageX : o.pageX, l.currentY = o.type === "touchstart" ? o.targetTouches[0].pageY : o.pageY;
        var p = l.currentX, h = l.currentY, g = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection, w = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (g && (p <= w || p >= r.innerWidth - w))
          if (g === "prevent")
            e.preventDefault();
          else
            return;
        if (x(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = p, l.startY = h, s.touchStartTime = G(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), o.type !== "touchstart") {
          var T = !0;
          d.is(s.focusableElements) && (T = !1), i.activeElement && m(i.activeElement).is(s.focusableElements) && i.activeElement !== d[0] && i.activeElement.blur();
          var M = T && t.allowTouchMove && a.touchStartPreventDefault;
          (a.touchStartForcePreventDefault || M) && !d[0].isContentEditable && o.preventDefault();
        }
        t.emit("touchStart", o);
      }
    }
  }
}
function _r(e) {
  var t = B(), i = this, r = i.touchEventsData, s = i.params, a = i.touches, l = i.rtlTranslate, n = i.enabled;
  if (n) {
    var o = e;
    if (o.originalEvent && (o = o.originalEvent), !r.isTouched) {
      r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", o);
      return;
    }
    if (!(r.isTouchEvent && o.type !== "touchmove")) {
      var d = o.type === "touchmove" && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]), u = o.type === "touchmove" ? d.pageX : o.pageX, f = o.type === "touchmove" ? d.pageY : o.pageY;
      if (o.preventedByNestedSwiper) {
        a.startX = u, a.startY = f;
        return;
      }
      if (!i.allowTouchMove) {
        i.allowClick = !1, r.isTouched && (x(a, {
          startX: u,
          startY: f,
          currentX: u,
          currentY: f
        }), r.touchStartTime = G());
        return;
      }
      if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
        if (i.isVertical()) {
          if (f < a.startY && i.translate <= i.maxTranslate() || f > a.startY && i.translate >= i.minTranslate()) {
            r.isTouched = !1, r.isMoved = !1;
            return;
          }
        } else if (u < a.startX && i.translate <= i.maxTranslate() || u > a.startX && i.translate >= i.minTranslate())
          return;
      }
      if (r.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(r.focusableElements)) {
        r.isMoved = !0, i.allowClick = !1;
        return;
      }
      if (r.allowTouchCallbacks && i.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
        a.currentX = u, a.currentY = f;
        var c = a.currentX - a.startX, p = a.currentY - a.startY;
        if (!(i.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(p, 2)) < i.params.threshold)) {
          if (typeof r.isScrolling > "u") {
            var h;
            i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? r.isScrolling = !1 : c * c + p * p >= 25 && (h = Math.atan2(Math.abs(p), Math.abs(c)) * 180 / Math.PI, r.isScrolling = i.isHorizontal() ? h > s.touchAngle : 90 - h > s.touchAngle);
          }
          if (r.isScrolling && i.emit("touchMoveOpposite", o), typeof r.startMoving > "u" && (a.currentX !== a.startX || a.currentY !== a.startY) && (r.startMoving = !0), r.isScrolling) {
            r.isTouched = !1;
            return;
          }
          if (r.startMoving) {
            i.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), r.isMoved || (s.loop && i.loopFix(), r.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, s.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), r.isMoved = !0;
            var g = i.isHorizontal() ? c : p;
            a.diff = g, g *= s.touchRatio, l && (g = -g), i.swipeDirection = g > 0 ? "prev" : "next", r.currentTranslate = g + r.startTranslate;
            var w = !0, T = s.resistanceRatio;
            if (s.touchReleaseOnEdges && (T = 0), g > 0 && r.currentTranslate > i.minTranslate() ? (w = !1, s.resistance && (r.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + r.startTranslate + g, T))) : g < 0 && r.currentTranslate < i.maxTranslate() && (w = !1, s.resistance && (r.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - r.startTranslate - g, T))), w && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (r.currentTranslate = r.startTranslate), s.threshold > 0)
              if (Math.abs(g) > s.threshold || r.allowThresholdMove) {
                if (!r.allowThresholdMove) {
                  r.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, r.currentTranslate = r.startTranslate, a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                  return;
                }
              } else {
                r.currentTranslate = r.startTranslate;
                return;
              }
            !s.followFinger || s.cssMode || ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), s.freeMode && (r.velocities.length === 0 && r.velocities.push({
              position: a[i.isHorizontal() ? "startX" : "startY"],
              time: r.touchStartTime
            }), r.velocities.push({
              position: a[i.isHorizontal() ? "currentX" : "currentY"],
              time: G()
            })), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate));
          }
        }
      }
    }
  }
}
function Ur(e) {
  var t = this, i = t.touchEventsData, r = t.params, s = t.touches, a = t.rtlTranslate, l = t.$wrapperEl, n = t.slidesGrid, o = t.snapGrid, d = t.enabled;
  if (d) {
    var u = e;
    if (u.originalEvent && (u = u.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", u), i.allowTouchCallbacks = !1, !i.isTouched) {
      i.isMoved && r.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
      return;
    }
    r.grabCursor && i.isMoved && i.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    var f = G(), c = f - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap click", u), c < 300 && f - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", u)), i.lastClickTime = G(), K(function() {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || s.diff === 0 || i.currentTranslate === i.startTranslate) {
      i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
      return;
    }
    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
    var p;
    if (r.followFinger ? p = a ? t.translate : -t.translate : p = -i.currentTranslate, !r.cssMode) {
      if (r.freeMode) {
        if (p < -t.minTranslate()) {
          t.slideTo(t.activeIndex);
          return;
        }
        if (p > -t.maxTranslate()) {
          t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
          return;
        }
        if (r.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var h = i.velocities.pop(), g = i.velocities.pop(), w = h.position - g.position, T = h.time - g.time;
            t.velocity = w / T, t.velocity /= 2, Math.abs(t.velocity) < r.freeModeMinimumVelocity && (t.velocity = 0), (T > 150 || G() - h.time > 300) && (t.velocity = 0);
          } else
            t.velocity = 0;
          t.velocity *= r.freeModeMomentumVelocityRatio, i.velocities.length = 0;
          var M = 1e3 * r.freeModeMomentumRatio, S = t.velocity * M, v = t.translate + S;
          a && (v = -v);
          var I = !1, z, D = Math.abs(t.velocity) * 20 * r.freeModeMomentumBounceRatio, b;
          if (v < t.maxTranslate())
            r.freeModeMomentumBounce ? (v + t.maxTranslate() < -D && (v = t.maxTranslate() - D), z = t.maxTranslate(), I = !0, i.allowMomentumBounce = !0) : v = t.maxTranslate(), r.loop && r.centeredSlides && (b = !0);
          else if (v > t.minTranslate())
            r.freeModeMomentumBounce ? (v - t.minTranslate() > D && (v = t.minTranslate() + D), z = t.minTranslate(), I = !0, i.allowMomentumBounce = !0) : v = t.minTranslate(), r.loop && r.centeredSlides && (b = !0);
          else if (r.freeModeSticky) {
            for (var O, F = 0; F < o.length; F += 1)
              if (o[F] > -v) {
                O = F;
                break;
              }
            Math.abs(o[O] - v) < Math.abs(o[O - 1] - v) || t.swipeDirection === "next" ? v = o[O] : v = o[O - 1], v = -v;
          }
          if (b && t.once("transitionEnd", function() {
            t.loopFix();
          }), t.velocity !== 0) {
            if (a ? M = Math.abs((-v - t.translate) / t.velocity) : M = Math.abs((v - t.translate) / t.velocity), r.freeModeSticky) {
              var N = Math.abs((a ? -v : v) - t.translate), P = t.slidesSizesGrid[t.activeIndex];
              N < P ? M = r.speed : N < 2 * P ? M = r.speed * 1.5 : M = r.speed * 2.5;
            }
          } else if (r.freeModeSticky) {
            t.slideToClosest();
            return;
          }
          r.freeModeMomentumBounce && I ? (t.updateProgress(z), t.setTransition(M), t.setTranslate(v), t.transitionStart(!0, t.swipeDirection), t.animating = !0, l.transitionEnd(function() {
            !t || t.destroyed || !i.allowMomentumBounce || (t.emit("momentumBounce"), t.setTransition(r.speed), setTimeout(function() {
              t.setTranslate(z), l.transitionEnd(function() {
                !t || t.destroyed || t.transitionEnd();
              });
            }, 0));
          })) : t.velocity ? (t.updateProgress(v), t.setTransition(M), t.setTranslate(v), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, l.transitionEnd(function() {
            !t || t.destroyed || t.transitionEnd();
          }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(v)), t.updateActiveIndex(), t.updateSlidesClasses();
        } else if (r.freeModeSticky) {
          t.slideToClosest();
          return;
        } else
          r.freeMode && t.emit("_freeModeNoMomentumRelease");
        (!r.freeModeMomentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        return;
      }
      for (var C = 0, V = t.slidesSizesGrid[0], E = 0; E < n.length; E += E < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
        var k = E < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        typeof n[E + k] < "u" ? p >= n[E] && p < n[E + k] && (C = E, V = n[E + k] - n[E]) : p >= n[E] && (C = E, V = n[n.length - 1] - n[n.length - 2]);
      }
      var W = (p - n[C]) / V, X = C < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
      if (c > r.longSwipesMs) {
        if (!r.longSwipes) {
          t.slideTo(t.activeIndex);
          return;
        }
        t.swipeDirection === "next" && (W >= r.longSwipesRatio ? t.slideTo(C + X) : t.slideTo(C)), t.swipeDirection === "prev" && (W > 1 - r.longSwipesRatio ? t.slideTo(C + X) : t.slideTo(C));
      } else {
        if (!r.shortSwipes) {
          t.slideTo(t.activeIndex);
          return;
        }
        var te = t.navigation && (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl);
        te ? u.target === t.navigation.nextEl ? t.slideTo(C + X) : t.slideTo(C) : (t.swipeDirection === "next" && t.slideTo(C + X), t.swipeDirection === "prev" && t.slideTo(C));
      }
    }
  }
}
function Ee() {
  var e = this, t = e.params, i = e.el;
  if (!(i && i.offsetWidth === 0)) {
    t.breakpoints && e.setBreakpoint();
    var r = e.allowSlideNext, s = e.allowSlidePrev, a = e.snapGrid;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = r, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
  }
}
function Zr(e) {
  var t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Jr() {
  var e = this, t = e.wrapperEl, i = e.rtlTranslate, r = e.enabled;
  if (r) {
    e.previousTranslate = e.translate, e.isHorizontal() ? i ? e.translate = t.scrollWidth - t.offsetWidth - t.scrollLeft : e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === -0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var s, a = e.maxTranslate() - e.minTranslate();
    a === 0 ? s = 0 : s = (e.translate - e.minTranslate()) / a, s !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }
}
var He = !1;
function Qr() {
}
function Kr() {
  var e = this, t = B(), i = e.params, r = e.touchEvents, s = e.el, a = e.wrapperEl, l = e.device, n = e.support;
  e.onTouchStart = qr.bind(e), e.onTouchMove = _r.bind(e), e.onTouchEnd = Ur.bind(e), i.cssMode && (e.onScroll = Jr.bind(e)), e.onClick = Zr.bind(e);
  var o = !!i.nested;
  if (!n.touch && n.pointerEvents)
    s.addEventListener(r.start, e.onTouchStart, !1), t.addEventListener(r.move, e.onTouchMove, o), t.addEventListener(r.end, e.onTouchEnd, !1);
  else {
    if (n.touch) {
      var d = r.start === "touchstart" && n.passiveListener && i.passiveListeners ? {
        passive: !0,
        capture: !1
      } : !1;
      s.addEventListener(r.start, e.onTouchStart, d), s.addEventListener(r.move, e.onTouchMove, n.passiveListener ? {
        passive: !1,
        capture: o
      } : o), s.addEventListener(r.end, e.onTouchEnd, d), r.cancel && s.addEventListener(r.cancel, e.onTouchEnd, d), He || (t.addEventListener("touchstart", Qr), He = !0);
    }
    (i.simulateTouch && !l.ios && !l.android || i.simulateTouch && !n.touch && l.ios) && (s.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, o), t.addEventListener("mouseup", e.onTouchEnd, !1));
  }
  (i.preventClicks || i.preventClicksPropagation) && s.addEventListener("click", e.onClick, !0), i.cssMode && a.addEventListener("scroll", e.onScroll), i.updateOnWindowResize ? e.on(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ee, !0) : e.on("observerUpdate", Ee, !0);
}
function ei() {
  var e = this, t = B(), i = e.params, r = e.touchEvents, s = e.el, a = e.wrapperEl, l = e.device, n = e.support, o = !!i.nested;
  if (!n.touch && n.pointerEvents)
    s.removeEventListener(r.start, e.onTouchStart, !1), t.removeEventListener(r.move, e.onTouchMove, o), t.removeEventListener(r.end, e.onTouchEnd, !1);
  else {
    if (n.touch) {
      var d = r.start === "onTouchStart" && n.passiveListener && i.passiveListeners ? {
        passive: !0,
        capture: !1
      } : !1;
      s.removeEventListener(r.start, e.onTouchStart, d), s.removeEventListener(r.move, e.onTouchMove, o), s.removeEventListener(r.end, e.onTouchEnd, d), r.cancel && s.removeEventListener(r.cancel, e.onTouchEnd, d);
    }
    (i.simulateTouch && !l.ios && !l.android || i.simulateTouch && !n.touch && l.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), t.removeEventListener("mousemove", e.onTouchMove, o), t.removeEventListener("mouseup", e.onTouchEnd, !1));
  }
  (i.preventClicks || i.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), i.cssMode && a.removeEventListener("scroll", e.onScroll), e.off(l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Ee);
}
const ti = {
  attachEvents: Kr,
  detachEvents: ei
};
function ri() {
  var e = this, t = e.activeIndex, i = e.initialized, r = e.loopedSlides, s = r === void 0 ? 0 : r, a = e.params, l = e.$el, n = a.breakpoints;
  if (!(!n || n && Object.keys(n).length === 0)) {
    var o = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
    if (!(!o || e.currentBreakpoint === o)) {
      var d = o in n ? n[o] : void 0;
      d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(T) {
        var M = d[T];
        typeof M > "u" || (T === "slidesPerView" && (M === "AUTO" || M === "auto") ? d[T] = "auto" : T === "slidesPerView" ? d[T] = parseFloat(M) : d[T] = parseInt(M, 10));
      });
      var u = d || e.originalParams, f = a.slidesPerColumn > 1, c = u.slidesPerColumn > 1, p = a.enabled;
      f && !c ? (l.removeClass(a.containerModifierClass + "multirow " + a.containerModifierClass + "multirow-column"), e.emitContainerClasses()) : !f && c && (l.addClass(a.containerModifierClass + "multirow"), (u.slidesPerColumnFill && u.slidesPerColumnFill === "column" || !u.slidesPerColumnFill && a.slidesPerColumnFill === "column") && l.addClass(a.containerModifierClass + "multirow-column"), e.emitContainerClasses());
      var h = u.direction && u.direction !== a.direction, g = a.loop && (u.slidesPerView !== a.slidesPerView || h);
      h && i && e.changeDirection(), x(e.params, u);
      var w = e.params.enabled;
      x(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
      }), p && !w ? e.disable() : !p && w && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", u), g && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", u);
    }
  }
}
function ii(e, t, i) {
  if (t === void 0 && (t = "window"), !(!e || t === "container" && !i)) {
    var r = !1, s = L(), a = t === "window" ? s.innerHeight : i.clientHeight, l = Object.keys(e).map(function(f) {
      if (typeof f == "string" && f.indexOf("@") === 0) {
        var c = parseFloat(f.substr(1)), p = a * c;
        return {
          value: p,
          point: f
        };
      }
      return {
        value: f,
        point: f
      };
    });
    l.sort(function(f, c) {
      return parseInt(f.value, 10) - parseInt(c.value, 10);
    });
    for (var n = 0; n < l.length; n += 1) {
      var o = l[n], d = o.point, u = o.value;
      t === "window" ? s.matchMedia("(min-width: " + u + "px)").matches && (r = d) : u <= i.clientWidth && (r = d);
    }
    return r || "max";
  }
}
const si = {
  setBreakpoint: ri,
  getBreakpoint: ii
};
function ai(e, t) {
  var i = [];
  return e.forEach(function(r) {
    typeof r == "object" ? Object.keys(r).forEach(function(s) {
      r[s] && i.push(t + s);
    }) : typeof r == "string" && i.push(t + r);
  }), i;
}
function ni() {
  var e = this, t = e.classNames, i = e.params, r = e.rtl, s = e.$el, a = e.device, l = e.support, n = ai(["initialized", i.direction, {
    "pointer-events": l.pointerEvents && !l.touch
  }, {
    "free-mode": i.freeMode
  }, {
    autoheight: i.autoHeight
  }, {
    rtl: r
  }, {
    multirow: i.slidesPerColumn > 1
  }, {
    "multirow-column": i.slidesPerColumn > 1 && i.slidesPerColumnFill === "column"
  }, {
    android: a.android
  }, {
    ios: a.ios
  }, {
    "css-mode": i.cssMode
  }], i.containerModifierClass);
  t.push.apply(t, n), s.addClass([].concat(t).join(" ")), e.emitContainerClasses();
}
function oi() {
  var e = this, t = e.$el, i = e.classNames;
  t.removeClass(i.join(" ")), e.emitContainerClasses();
}
const li = {
  addClasses: ni,
  removeClasses: oi
};
function di(e, t, i, r, s, a) {
  var l = L(), n;
  function o() {
    a && a();
  }
  var d = m(e).parent("picture")[0];
  !d && (!e.complete || !s) && t ? (n = new l.Image(), n.onload = o, n.onerror = o, r && (n.sizes = r), i && (n.srcset = i), t && (n.src = t)) : o();
}
function ui() {
  var e = this;
  e.imagesToLoad = e.$el.find("img");
  function t() {
    typeof e > "u" || e === null || !e || e.destroyed || (e.imagesLoaded !== void 0 && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
  }
  for (var i = 0; i < e.imagesToLoad.length; i += 1) {
    var r = e.imagesToLoad[i];
    e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t);
  }
}
const fi = {
  loadImage: di,
  preloadImages: ui
};
function ci() {
  var e = this, t = e.params, i = e.isLocked, r = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
  t.slidesOffsetBefore && t.slidesOffsetAfter && r ? e.isLocked = r <= e.size : e.isLocked = e.snapGrid.length === 1, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), i && i !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update());
}
const pi = {
  checkOverflow: ci
}, Re = {
  init: !0,
  direction: "horizontal",
  touchEventsTarget: "container",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !1,
  nested: !1,
  createElements: !1,
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: !1,
  freeModeMomentum: !0,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: !0,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: !1,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: "column",
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !1,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 0,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  watchSlidesVisibility: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // Images
  preloadImages: !0,
  updateOnImagesReady: !0,
  // loop
  loop: !1,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: !1,
  loopPreventsSlide: !0,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  // NS
  containerModifierClass: "swiper-container-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-invisible-blank",
  slideActiveClass: "swiper-slide-active",
  slideDuplicateActiveClass: "swiper-slide-duplicate-active",
  slideVisibleClass: "swiper-slide-visible",
  slideDuplicateClass: "swiper-slide-duplicate",
  slideNextClass: "swiper-slide-next",
  slideDuplicateNextClass: "swiper-slide-duplicate-next",
  slidePrevClass: "swiper-slide-prev",
  slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
  wrapperClass: "swiper-wrapper",
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function $e(e, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vi(e, t, i) {
  return t && $e(e.prototype, t), i && $e(e, i), e;
}
var Se = {
  modular: ir,
  eventsEmitter: sr,
  update: vr,
  translate: Sr,
  transition: Cr,
  slide: zr,
  loop: Br,
  grabCursor: Vr,
  manipulation: Xr,
  events: ti,
  breakpoints: si,
  checkOverflow: pi,
  classes: li,
  images: fi
}, be = {}, Le = /* @__PURE__ */ function() {
  function e() {
    for (var i, r, s = arguments.length, a = new Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    if (a.length === 1 && a[0].constructor && Object.prototype.toString.call(a[0]).slice(8, -1) === "Object" ? r = a[0] : (i = a[0], r = a[1]), r || (r = {}), r = x({}, r), i && !r.el && (r.el = i), r.el && m(r.el).length > 1) {
      var n = [];
      return m(r.el).each(function(u) {
        var f = x({}, r, {
          el: u
        });
        n.push(new e(f));
      }), n;
    }
    var o = this;
    o.__swiper__ = !0, o.support = je(), o.device = Zt({
      userAgent: r.userAgent
    }), o.browser = Qt(), o.eventsListeners = {}, o.eventsAnyListeners = [], typeof o.modules > "u" && (o.modules = {}), Object.keys(o.modules).forEach(function(u) {
      var f = o.modules[u];
      if (f.params) {
        var c = Object.keys(f.params)[0], p = f.params[c];
        if (typeof p != "object" || p === null || (["navigation", "pagination", "scrollbar"].indexOf(c) >= 0 && r[c] === !0 && (r[c] = {
          auto: !0
        }), !(c in r && "enabled" in p)))
          return;
        r[c] === !0 && (r[c] = {
          enabled: !0
        }), typeof r[c] == "object" && !("enabled" in r[c]) && (r[c].enabled = !0), r[c] || (r[c] = {
          enabled: !1
        });
      }
    });
    var d = x({}, Re);
    return o.useParams(d), o.params = x({}, d, be, r), o.originalParams = x({}, o.params), o.passedParams = x({}, r), o.params && o.params.on && Object.keys(o.params.on).forEach(function(u) {
      o.on(u, o.params.on[u]);
    }), o.params && o.params.onAny && o.onAny(o.params.onAny), o.$ = m, x(o, {
      enabled: o.params.enabled,
      el: i,
      // Classes
      classNames: [],
      // Slides
      slides: m(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function() {
        return o.params.direction === "horizontal";
      },
      isVertical: function() {
        return o.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      // Locks
      allowSlideNext: o.params.allowSlideNext,
      allowSlidePrev: o.params.allowSlidePrev,
      // Touch Events
      touchEvents: function() {
        var f = ["touchstart", "touchmove", "touchend", "touchcancel"], c = ["mousedown", "mousemove", "mouseup"];
        return o.support.pointerEvents && (c = ["pointerdown", "pointermove", "pointerup"]), o.touchEventsTouch = {
          start: f[0],
          move: f[1],
          end: f[2],
          cancel: f[3]
        }, o.touchEventsDesktop = {
          start: c[0],
          move: c[1],
          end: c[2]
        }, o.support.touch || !o.params.simulateTouch ? o.touchEventsTouch : o.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: o.params.focusableElements,
        // Last click time
        lastClickTime: G(),
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        isTouchEvent: void 0,
        startMoving: void 0
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: o.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), o.useModules(), o.emit("_swiper"), o.params.init && o.init(), o;
  }
  var t = e.prototype;
  return t.enable = function() {
    var r = this;
    r.enabled || (r.enabled = !0, r.params.grabCursor && r.setGrabCursor(), r.emit("enable"));
  }, t.disable = function() {
    var r = this;
    r.enabled && (r.enabled = !1, r.params.grabCursor && r.unsetGrabCursor(), r.emit("disable"));
  }, t.setProgress = function(r, s) {
    var a = this;
    r = Math.min(Math.max(r, 0), 1);
    var l = a.minTranslate(), n = a.maxTranslate(), o = (n - l) * r + l;
    a.translateTo(o, typeof s > "u" ? 0 : s), a.updateActiveIndex(), a.updateSlidesClasses();
  }, t.emitContainerClasses = function() {
    var r = this;
    if (!(!r.params._emitClasses || !r.el)) {
      var s = r.el.className.split(" ").filter(function(a) {
        return a.indexOf("swiper-container") === 0 || a.indexOf(r.params.containerModifierClass) === 0;
      });
      r.emit("_containerClasses", s.join(" "));
    }
  }, t.getSlideClasses = function(r) {
    var s = this;
    return r.className.split(" ").filter(function(a) {
      return a.indexOf("swiper-slide") === 0 || a.indexOf(s.params.slideClass) === 0;
    }).join(" ");
  }, t.emitSlidesClasses = function() {
    var r = this;
    if (!(!r.params._emitClasses || !r.el)) {
      var s = [];
      r.slides.each(function(a) {
        var l = r.getSlideClasses(a);
        s.push({
          slideEl: a,
          classNames: l
        }), r.emit("_slideClass", a, l);
      }), r.emit("_slideClasses", s);
    }
  }, t.slidesPerViewDynamic = function() {
    var r = this, s = r.params, a = r.slides, l = r.slidesGrid, n = r.size, o = r.activeIndex, d = 1;
    if (s.centeredSlides) {
      for (var u = a[o].swiperSlideSize, f, c = o + 1; c < a.length; c += 1)
        a[c] && !f && (u += a[c].swiperSlideSize, d += 1, u > n && (f = !0));
      for (var p = o - 1; p >= 0; p -= 1)
        a[p] && !f && (u += a[p].swiperSlideSize, d += 1, u > n && (f = !0));
    } else
      for (var h = o + 1; h < a.length; h += 1)
        l[h] - l[o] < n && (d += 1);
    return d;
  }, t.update = function() {
    var r = this;
    if (!r || r.destroyed)
      return;
    var s = r.snapGrid, a = r.params;
    a.breakpoints && r.setBreakpoint(), r.updateSize(), r.updateSlides(), r.updateProgress(), r.updateSlidesClasses();
    function l() {
      var o = r.rtlTranslate ? r.translate * -1 : r.translate, d = Math.min(Math.max(o, r.maxTranslate()), r.minTranslate());
      r.setTranslate(d), r.updateActiveIndex(), r.updateSlidesClasses();
    }
    var n;
    r.params.freeMode ? (l(), r.params.autoHeight && r.updateAutoHeight()) : ((r.params.slidesPerView === "auto" || r.params.slidesPerView > 1) && r.isEnd && !r.params.centeredSlides ? n = r.slideTo(r.slides.length - 1, 0, !1, !0) : n = r.slideTo(r.activeIndex, 0, !1, !0), n || l()), a.watchOverflow && s !== r.snapGrid && r.checkOverflow(), r.emit("update");
  }, t.changeDirection = function(r, s) {
    s === void 0 && (s = !0);
    var a = this, l = a.params.direction;
    return r || (r = l === "horizontal" ? "vertical" : "horizontal"), r === l || r !== "horizontal" && r !== "vertical" || (a.$el.removeClass("" + a.params.containerModifierClass + l).addClass("" + a.params.containerModifierClass + r), a.emitContainerClasses(), a.params.direction = r, a.slides.each(function(n) {
      r === "vertical" ? n.style.width = "" : n.style.height = "";
    }), a.emit("changeDirection"), s && a.update()), a;
  }, t.mount = function(r) {
    var s = this;
    if (s.mounted)
      return !0;
    var a = m(r || s.params.el);
    if (r = a[0], !r)
      return !1;
    r.swiper = s;
    var l = function() {
      return "." + (s.params.wrapperClass || "").trim().split(" ").join(".");
    }, n = function() {
      if (r && r.shadowRoot && r.shadowRoot.querySelector) {
        var c = m(r.shadowRoot.querySelector(l()));
        return c.children = function(p) {
          return a.children(p);
        }, c;
      }
      return a.children(l());
    }, o = n();
    if (o.length === 0 && s.params.createElements) {
      var d = B(), u = d.createElement("div");
      o = m(u), u.className = s.params.wrapperClass, a.append(u), a.children("." + s.params.slideClass).each(function(f) {
        o.append(f);
      });
    }
    return x(s, {
      $el: a,
      el: r,
      $wrapperEl: o,
      wrapperEl: o[0],
      mounted: !0,
      // RTL
      rtl: r.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl",
      rtlTranslate: s.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || a.css("direction") === "rtl"),
      wrongRTL: o.css("display") === "-webkit-box"
    }), !0;
  }, t.init = function(r) {
    var s = this;
    if (s.initialized)
      return s;
    var a = s.mount(r);
    return a === !1 || (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.params.loop && s.loopCreate(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.preloadImages && s.preloadImages(), s.params.loop ? s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.attachEvents(), s.initialized = !0, s.emit("init"), s.emit("afterInit")), s;
  }, t.destroy = function(r, s) {
    r === void 0 && (r = !0), s === void 0 && (s = !0);
    var a = this, l = a.params, n = a.$el, o = a.$wrapperEl, d = a.slides;
    return typeof a.params > "u" || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), l.loop && a.loopDestroy(), s && (a.removeClasses(), n.removeAttr("style"), o.removeAttr("style"), d && d.length && d.removeClass([l.slideVisibleClass, l.slideActiveClass, l.slideNextClass, l.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(u) {
      a.off(u);
    }), r !== !1 && (a.$el[0].swiper = null, Wt(a)), a.destroyed = !0), null;
  }, e.extendDefaults = function(r) {
    x(be, r);
  }, e.installModule = function(r) {
    e.prototype.modules || (e.prototype.modules = {});
    var s = r.name || Object.keys(e.prototype.modules).length + "_" + G();
    e.prototype.modules[s] = r;
  }, e.use = function(r) {
    return Array.isArray(r) ? (r.forEach(function(s) {
      return e.installModule(s);
    }), e) : (e.installModule(r), e);
  }, vi(e, null, [{
    key: "extendedDefaults",
    get: function() {
      return be;
    }
  }, {
    key: "defaults",
    get: function() {
      return Re;
    }
  }]), e;
}();
Object.keys(Se).forEach(function(e) {
  Object.keys(Se[e]).forEach(function(t) {
    Le.prototype[t] = Se[e][t];
  });
});
Le.use([er, rr]);
const qe = Le;
function hi() {
  var e = B(), t = "onwheel", i = t in e;
  if (!i) {
    var r = e.createElement("div");
    r.setAttribute(t, "return;"), i = typeof r[t] == "function";
  }
  return !i && e.implementation && e.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  e.implementation.hasFeature("", "") !== !0 && (i = e.implementation.hasFeature("Events.wheel", "3.0")), i;
}
var H = {
  lastScrollTime: G(),
  lastEventBeforeSnap: void 0,
  recentWheelEvents: [],
  event: function() {
    var t = L();
    return t.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : hi() ? "wheel" : "mousewheel";
  },
  normalize: function(t) {
    var i = 10, r = 40, s = 800, a = 0, l = 0, n = 0, o = 0;
    return "detail" in t && (l = t.detail), "wheelDelta" in t && (l = -t.wheelDelta / 120), "wheelDeltaY" in t && (l = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (a = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (a = l, l = 0), n = a * i, o = l * i, "deltaY" in t && (o = t.deltaY), "deltaX" in t && (n = t.deltaX), t.shiftKey && !n && (n = o, o = 0), (n || o) && t.deltaMode && (t.deltaMode === 1 ? (n *= r, o *= r) : (n *= s, o *= s)), n && !a && (a = n < 1 ? -1 : 1), o && !l && (l = o < 1 ? -1 : 1), {
      spinX: a,
      spinY: l,
      pixelX: n,
      pixelY: o
    };
  },
  handleMouseEnter: function() {
    var t = this;
    t.enabled && (t.mouseEntered = !0);
  },
  handleMouseLeave: function() {
    var t = this;
    t.enabled && (t.mouseEntered = !1);
  },
  handle: function(t) {
    var i = t, r = !0, s = this;
    if (s.enabled) {
      var a = s.params.mousewheel;
      s.params.cssMode && i.preventDefault();
      var l = s.$el;
      if (s.params.mousewheel.eventsTarget !== "container" && (l = m(s.params.mousewheel.eventsTarget)), !s.mouseEntered && !l[0].contains(i.target) && !a.releaseOnEdges)
        return !0;
      i.originalEvent && (i = i.originalEvent);
      var n = 0, o = s.rtlTranslate ? -1 : 1, d = H.normalize(i);
      if (a.forceToAxis)
        if (s.isHorizontal())
          if (Math.abs(d.pixelX) > Math.abs(d.pixelY))
            n = -d.pixelX * o;
          else
            return !0;
        else if (Math.abs(d.pixelY) > Math.abs(d.pixelX))
          n = -d.pixelY;
        else
          return !0;
      else
        n = Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * o : -d.pixelY;
      if (n === 0)
        return !0;
      a.invert && (n = -n);
      var u = s.getTranslate() + n * a.sensitivity;
      if (u >= s.minTranslate() && (u = s.minTranslate()), u <= s.maxTranslate() && (u = s.maxTranslate()), r = s.params.loop ? !0 : !(u === s.minTranslate() || u === s.maxTranslate()), r && s.params.nested && i.stopPropagation(), s.params.freeMode) {
        var h = {
          time: G(),
          delta: Math.abs(n),
          direction: Math.sign(n)
        }, g = s.mousewheel.lastEventBeforeSnap, w = g && h.time < g.time + 500 && h.delta <= g.delta && h.direction === g.direction;
        if (!w) {
          s.mousewheel.lastEventBeforeSnap = void 0, s.params.loop && s.loopFix();
          var T = s.getTranslate() + n * a.sensitivity, M = s.isBeginning, S = s.isEnd;
          if (T >= s.minTranslate() && (T = s.minTranslate()), T <= s.maxTranslate() && (T = s.maxTranslate()), s.setTransition(0), s.setTranslate(T), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!M && s.isBeginning || !S && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky) {
            clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = void 0;
            var v = s.mousewheel.recentWheelEvents;
            v.length >= 15 && v.shift();
            var I = v.length ? v[v.length - 1] : void 0, z = v[0];
            if (v.push(h), I && (h.delta > I.delta || h.direction !== I.direction))
              v.splice(0);
            else if (v.length >= 15 && h.time - z.time < 500 && z.delta - h.delta >= 1 && h.delta <= 6) {
              var D = n > 0 ? 0.8 : 0.2;
              s.mousewheel.lastEventBeforeSnap = h, v.splice(0), s.mousewheel.timeout = K(function() {
                s.slideToClosest(s.params.speed, !0, void 0, D);
              }, 0);
            }
            s.mousewheel.timeout || (s.mousewheel.timeout = K(function() {
              var b = 0.5;
              s.mousewheel.lastEventBeforeSnap = h, v.splice(0), s.slideToClosest(s.params.speed, !0, void 0, b);
            }, 500));
          }
          if (w || s.emit("scroll", i), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), T === s.minTranslate() || T === s.maxTranslate())
            return !0;
        }
      } else {
        var f = {
          time: G(),
          delta: Math.abs(n),
          direction: Math.sign(n),
          raw: t
        }, c = s.mousewheel.recentWheelEvents;
        c.length >= 2 && c.shift();
        var p = c.length ? c[c.length - 1] : void 0;
        if (c.push(f), p ? (f.direction !== p.direction || f.delta > p.delta || f.time > p.time + 150) && s.mousewheel.animateSlider(f) : s.mousewheel.animateSlider(f), s.mousewheel.releaseScroll(f))
          return !0;
      }
      return i.preventDefault ? i.preventDefault() : i.returnValue = !1, !1;
    }
  },
  animateSlider: function(t) {
    var i = this, r = L();
    return this.params.mousewheel.thresholdDelta && t.delta < this.params.mousewheel.thresholdDelta || this.params.mousewheel.thresholdTime && G() - i.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime ? !1 : t.delta >= 6 && G() - i.mousewheel.lastScrollTime < 60 ? !0 : (t.direction < 0 ? (!i.isEnd || i.params.loop) && !i.animating && (i.slideNext(), i.emit("scroll", t.raw)) : (!i.isBeginning || i.params.loop) && !i.animating && (i.slidePrev(), i.emit("scroll", t.raw)), i.mousewheel.lastScrollTime = new r.Date().getTime(), !1);
  },
  releaseScroll: function(t) {
    var i = this, r = i.params.mousewheel;
    if (t.direction < 0) {
      if (i.isEnd && !i.params.loop && r.releaseOnEdges)
        return !0;
    } else if (i.isBeginning && !i.params.loop && r.releaseOnEdges)
      return !0;
    return !1;
  },
  enable: function() {
    var t = this, i = H.event();
    if (t.params.cssMode)
      return t.wrapperEl.removeEventListener(i, t.mousewheel.handle), !0;
    if (!i || t.mousewheel.enabled)
      return !1;
    var r = t.$el;
    return t.params.mousewheel.eventsTarget !== "container" && (r = m(t.params.mousewheel.eventsTarget)), r.on("mouseenter", t.mousewheel.handleMouseEnter), r.on("mouseleave", t.mousewheel.handleMouseLeave), r.on(i, t.mousewheel.handle), t.mousewheel.enabled = !0, !0;
  },
  disable: function() {
    var t = this, i = H.event();
    if (t.params.cssMode)
      return t.wrapperEl.addEventListener(i, t.mousewheel.handle), !0;
    if (!i || !t.mousewheel.enabled)
      return !1;
    var r = t.$el;
    return t.params.mousewheel.eventsTarget !== "container" && (r = m(t.params.mousewheel.eventsTarget)), r.off(i, t.mousewheel.handle), t.mousewheel.enabled = !1, !0;
  }
};
const mi = {
  name: "mousewheel",
  params: {
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null
    }
  },
  create: function() {
    var t = this;
    Xe(t, {
      mousewheel: {
        enabled: !1,
        lastScrollTime: G(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        enable: H.enable,
        disable: H.disable,
        handle: H.handle,
        handleMouseEnter: H.handleMouseEnter,
        handleMouseLeave: H.handleMouseLeave,
        animateSlider: H.animateSlider,
        releaseScroll: H.releaseScroll
      }
    });
  },
  on: {
    init: function(t) {
      !t.params.mousewheel.enabled && t.params.cssMode && t.mousewheel.disable(), t.params.mousewheel.enabled && t.mousewheel.enable();
    },
    destroy: function(t) {
      t.params.cssMode && t.mousewheel.enable(), t.mousewheel.enabled && t.mousewheel.disable();
    }
  }
}, gi = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, s] of t)
    i[r] = s;
  return i;
};
qe.use([mi]);
const ne = 60 * 60 * 24 * 1e3, wi = {
  name: "VueMobCal",
  props: {
    value: {
      type: Date,
      default() {
        return /* @__PURE__ */ new Date();
      }
    },
    mode: {
      type: String,
      default: "month",
      validator: function(e) {
        return ["month", "week"].indexOf(e) !== -1;
      }
    },
    color: {
      type: String,
      default: "#007ad3"
    }
  },
  data() {
    return {
      currentTime: this.mode === "month" ? new Date(this.value.getFullYear(), this.value.getMonth(), 1) : this.value,
      // 被选中的日期
      activeDate: this.value,
      currentMode: this.mode,
      calSwiper: null,
      util: {
        isToday: this.isToday,
        isWorkDay: this.isWorkDay,
        isOtherMonth: this.isOtherMonth,
        isActiveDay: this.isActiveDay,
        onPrev: this.onPrev,
        onNext: this.onNext,
        onChangeMode: this.onChangeMode
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      let e = 0;
      this.calSwiper = new qe(".cal-container", {
        wrapperClass: "cal-wrapper",
        slideClass: "cal-slide",
        slideActiveClass: "cal-slide-active",
        slideVisibleClass: "cal-slide-visible",
        slideNextClass: "cal-slide-next",
        slidePrevClass: "cal-slide-prev",
        containerModifierClass: "cal-container-",
        autoHeight: !0,
        initialSlide: 1,
        on: {
          // 切换时加载下一个月数据,始终保持只有三个月的数据被渲染
          slideChange: (t) => {
            e !== 0 && (this.currentTime = this.slidePages[t.activeIndex], t.slideTo(1, 0)), e++;
          }
        }
      });
    });
  },
  computed: {
    slidePages() {
      if (this.currentMode === "month")
        return [
          new Date(this.currentTime.getFullYear(), this.currentTime.getMonth() - 1, 1),
          this.currentTime,
          new Date(this.currentTime.getFullYear(), this.currentTime.getMonth() + 1, 1)
        ];
      const e = this.getMonday(this.currentTime), t = +e - ne * 7, i = +e + ne * 7;
      return [
        new Date(t),
        e,
        new Date(i)
      ];
    }
  },
  methods: {
    yearFilter(e) {
      return `${e.getFullYear()}年`;
    },
    monthFilter(e) {
      return console.log("123", e), `${e.getMonth() + 1}月`;
    },
    weekFilter(e) {
      const t = ["一", "二", "三", "四", "五", "六", "日"];
      return e = e || 7, t[e - 1];
    },
    // 是否是今天
    isToday(e) {
      const t = /* @__PURE__ */ new Date();
      return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate();
    },
    // 是工作日
    isWorkDay(e) {
      return e.getDay() > 0 && e.getDay() < 6;
    },
    // 是否为非当前月
    isOtherMonth(e) {
      return e.getMonth() !== this.currentTime.getMonth();
    },
    // 被选中的那一天
    isActiveDay(e) {
      return this.activeDate.getFullYear() === e.getFullYear() && this.activeDate.getMonth() === e.getMonth() && this.activeDate.getDate() === e.getDate();
    },
    getDates(e) {
      return this.currentMode === "month" ? this.getMonthDates(e) : this.getWeekDates(e);
    },
    getMonthDates(e) {
      const i = new Date(e.getFullYear(), e.getMonth(), 1).getDay() || 7, r = new Date(e.getFullYear(), e.getMonth() + 1, 0), s = r.getDay() || 7, a = new Date(e.getFullYear(), e.getMonth(), 0), l = [], n = [], o = [];
      for (var d = 0; d < i + r.getDate() + (7 - s); d++) {
        if (d < i - 1) {
          l.unshift(
            new Date(e.getFullYear(), e.getMonth() - 1, a.getDate() - d)
          );
          continue;
        }
        if (d > a.getDate() + i) {
          o.push(
            new Date(e.getFullYear(), e.getMonth() + 1, d - (i + r.getDate()) + 1)
          );
          continue;
        }
        if (d > i - 1) {
          n.push(
            new Date(e.getFullYear(), e.getMonth(), d - i + 1)
          );
          continue;
        }
      }
      const u = [...l, ...n, ...o], f = [], c = u.length % 7 === 0 ? u.length / 7 : parseInt(u.length / 7) + 1;
      for (let p = 0; p < c; p++)
        f.push(u.splice(0, 7));
      return f;
    },
    getWeekDates(e) {
      const t = [];
      for (let i = 0; i < 7; i++)
        t.push(new Date(+new Date(e) + i * ne));
      return [t];
    },
    getMonday(e) {
      const t = new Date(e.getTime() - ((e.getDay() || 7) - 1) * ne);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate());
    },
    updateSwiper() {
      this.$nextTick(() => {
        this.calSwiper.update();
      });
    },
    onPrev() {
      this.calSwiper.slideTo(), this.$emit("onPrev");
    },
    onNext() {
      this.calSwiper.slideNext(), this.$emit("onNext");
    },
    onChangeMode(e = !1) {
      typeof e == "boolean" && e ? ["month", "week"].indexOf(e) !== -1 && (this.currentMode = e) : this.currentMode = this.currentMode === "month" ? "week" : "month", this.$emit("onChangeMode", this.currentMode);
    }
  },
  watch: {
    value(e) {
      this.activeDate = e, this.currentTime = this.currentMode === "month" ? new Date(e.getFullYear(), e.getMonth(), 1) : e;
    },
    activeDate(e) {
      +e != +this.value && this.$emit("input", e);
    },
    currentTime(e, t) {
      if (this.currentMode === "month" && e.getMonth() !== this.activeDate.getMonth() && (this.activeDate = e), this.currentMode === "week") {
        const i = this.getMonday(e);
        (+i != +this.getMonday(/* @__PURE__ */ new Date()) || +this.getMonday(this.activeDate) != +i) && (this.activeDate = e);
      }
      this.updateSwiper();
    },
    mode(e) {
      this.currentMode = e, this.currentTime = this.activeDate;
    },
    currentMode(e) {
      e !== this.mode && this.$emit("update:mode", e), this.updateSwiper();
    },
    color: {
      immediate: !0,
      handler(e) {
        document.getElementById("mobcal-styles") && document.body.removeChild(document.getElementById("mobcal-styles"));
        const t = document.createElement("style");
        t.id = "mobcal-styles", t.innerHTML = `
          :root {
            --vue-mobcal-color-primary: ${e};
          }
        `.replace(/\s+/g, ""), document.body.appendChild(t);
      }
    }
  }
}, Ti = { class: "vue-mobcal-wrapper" }, Si = { class: "vue-mobcal-head f-acjc t-c" }, bi = { class: "vue-mobcal-head-left" }, yi = { class: "vue-mobcal-head-content f1" }, Mi = /* @__PURE__ */ y("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ y("path", { d: "M631.744 774.208l-245.76-292.544 244.224-296.896a38.4 38.4 0 0 0-0.128-47.36c-10.88-13.056-28.48-13.056-39.296 3.328L330.24 454.08a52.992 52.992 0 0 0-8.256 13.312 46.72 46.72 0 0 0 6.208 39.872l264.128 317.76c10.88 9.792 28.608 9.792 39.488-3.264a38.592 38.592 0 0 0-0.128-47.552z" })
], -1), Ci = [
  Mi
], Ei = { class: "current-mode" }, xi = /* @__PURE__ */ y("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ y("path", { d: "M392.256 774.208l245.76-292.544-244.224-296.896a38.4 38.4 0 0 1 0.128-47.36c10.88-13.056 28.48-13.056 39.296 3.328l260.48 313.344a52.992 52.992 0 0 1 8.256 13.312 46.72 46.72 0 0 1-6.208 39.872L431.616 824.96a27.2 27.2 0 0 1-39.488-3.264 38.592 38.592 0 0 1 0.128-47.552z" })
], -1), Li = [
  xi
], Pi = { class: "vue-mobcal-head-right" }, Di = { class: "vue-mobcal-body" }, Oi = { class: "vue-mobcal-page" }, Ii = { class: "vue-mobcal-table-head-fixed" }, zi = { class: "cal-container" }, Ai = { class: "cal-wrapper" }, ki = ["onClick"], Gi = { class: "detail" }, Bi = /* @__PURE__ */ y("span", { class: "dot" }, null, -1), Fi = /* @__PURE__ */ y("span", null, [
  /* @__PURE__ */ y("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ y("path", { d: "M246.266795 654.304523C234.028248 666.54307 213.828634 666.481405 201.331856 653.984628 189.200556 641.853327 188.691857 621.369793 201.011961 609.049689L480.945257 329.11639C493.183805 316.877843 513.383419 316.939507 525.880196 329.436288 526.327405 329.883494 526.758819 330.342054 527.174378 330.811136 527.652734 331.235987 528.12141 331.677504 528.579625 332.135718L806.999757 610.555848C819.761472 623.317563 819.933222 643.750592 807.436442 656.247369 795.305146 668.37867 774.482874 668.548635 761.744922 655.810682L503.252779 397.318539 246.266795 654.304523Z" })
  ])
], -1), Ni = [
  Fi
];
function Vi(e, t, i, r, s, a) {
  return R(), $("div", Ti, [
    y("div", Si, [
      y("div", bi, [
        U(e.$slots, "left")
      ]),
      y("div", yi, [
        U(e.$slots, "title", { util: s.util }, () => [
          y("i", {
            onClick: t[0] || (t[0] = Be((...l) => a.onPrev && a.onPrev(...l), ["stop", "prevent"]))
          }, Ci),
          y("span", Ei, ae(a.monthFilter(s.currentTime)), 1),
          y("i", {
            onClick: t[1] || (t[1] = Be((...l) => a.onNext && a.onNext(...l), ["stop", "prevent"]))
          }, Li)
        ])
      ]),
      y("div", Pi, [
        U(e.$slots, "right")
      ])
    ]),
    y("div", Di, [
      y("div", Oi, [
        y("table", Ii, [
          y("thead", null, [
            y("tr", null, [
              (R(), $(Z, null, J(7, (l) => y("th", {
                key: `week_${l}`,
                class: "t-c"
              }, [
                U(e.$slots, "week", { day: l }, () => [
                  Ke(ae(a.weekFilter(l)), 1)
                ])
              ])), 64))
            ])
          ])
        ]),
        y("div", zi, [
          y("div", Ai, [
            (R(!0), $(Z, null, J(a.slidePages, (l) => (R(), $("div", {
              class: "cal-slide",
              key: l.getTime()
            }, [
              y("table", null, [
                y("thead", null, [
                  y("tr", null, [
                    (R(), $(Z, null, J(7, (n) => y("th", {
                      key: `week_${n}`
                    }, ae(n), 1)), 64))
                  ])
                ]),
                y("tbody", null, [
                  (R(!0), $(Z, null, J(a.getDates(l), (n, o) => (R(), $("tr", { key: o }, [
                    (R(!0), $(Z, null, J(n, (d, u) => (R(), $("td", {
                      key: u,
                      onClick: (f) => s.activeDate = d,
                      class: Fe({
                        "is-today": a.isToday(d),
                        "is-active-day": a.isActiveDay(d),
                        "is-work-day": a.isWorkDay(d),
                        "is-other-month": a.isOtherMonth(d) && i.mode === "month"
                      })
                    }, [
                      y("div", Gi, [
                        U(e.$slots, "day", {
                          date: d,
                          util: s.util
                        }, () => [
                          y("span", null, ae(a.isToday(d) ? "今" : d.getDate()), 1),
                          Bi
                        ])
                      ])
                    ], 10, ki))), 128))
                  ]))), 128))
                ])
              ])
            ]))), 128))
          ])
        ])
      ])
    ]),
    y("div", {
      onClick: t[2] || (t[2] = (l) => a.onChangeMode(!1)),
      class: Fe(["vue-mobcal-mode-control t-c", { expand: this.currentMode === "month" }])
    }, Ni, 2)
  ]);
}
const Pe = /* @__PURE__ */ gi(wi, [["render", Vi]]);
const Hi = function(e) {
  e.component("VueMobCal", Pe);
};
typeof window < "u" && window.Vue && window.Vue.createApp({}).component("VueMobCal", Pe);
const $i = {
  version: "1.0.0",
  install: Hi,
  VueMobCal: Pe
};
export {
  Pe as VueMobCal,
  $i as default,
  $i as globalMobCal
};
