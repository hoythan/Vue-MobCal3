import { openBlock as G, createElementBlock as F, createElementVNode as L, renderSlot as W, withModifiers as ce, toDisplayString as U, Fragment as X, renderList as R, createTextVNode as Pe, normalizeClass as ue } from "vue";
function fe(e) {
  return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function ae(e = {}, t = {}) {
  Object.keys(t).forEach((s) => {
    typeof e[s] > "u" ? e[s] = t[s] : fe(t[s]) && fe(e[s]) && Object.keys(t[s]).length > 0 && ae(e[s], t[s]);
  });
}
const Se = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
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
function H() {
  const e = typeof document < "u" ? document : {};
  return ae(e, Se), e;
}
const Le = {
  document: Se,
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
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  }
};
function D() {
  const e = typeof window < "u" ? window : {};
  return ae(e, Le), e;
}
function Ie(e) {
  const t = e;
  Object.keys(t).forEach((s) => {
    try {
      t[s] = null;
    } catch {
    }
    try {
      delete t[s];
    } catch {
    }
  });
}
function j(e, t = 0) {
  return setTimeout(e, t);
}
function A() {
  return Date.now();
}
function ke(e) {
  const t = D();
  let s;
  return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
}
function De(e, t = "x") {
  const s = D();
  let i, r, n;
  const o = ke(e);
  return s.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((l) => l.replace(",", ".")).join(", ")), n = new s.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), t === "x" && (s.WebKitCSSMatrix ? r = n.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])), t === "y" && (s.WebKitCSSMatrix ? r = n.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])), r || 0;
}
function Z(e) {
  return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function Oe(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function z(...e) {
  const t = Object(e[0]), s = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < e.length; i += 1) {
    const r = e[i];
    if (r != null && !Oe(r)) {
      const n = Object.keys(Object(r)).filter((o) => s.indexOf(o) < 0);
      for (let o = 0, l = n.length; o < l; o += 1) {
        const a = n[o], d = Object.getOwnPropertyDescriptor(r, a);
        d !== void 0 && d.enumerable && (Z(t[a]) && Z(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : z(t[a], r[a]) : !Z(t[a]) && Z(r[a]) ? (t[a] = {}, r[a].__swiper__ ? t[a] = r[a] : z(t[a], r[a])) : t[a] = r[a]);
      }
    }
  }
  return t;
}
function J(e, t, s) {
  e.style.setProperty(t, s);
}
function be({
  swiper: e,
  targetPosition: t,
  side: s
}) {
  const i = D(), r = -e.translate;
  let n = null, o;
  const l = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(e.cssModeFrameID);
  const a = t > r ? "next" : "prev", d = (u, f) => a === "next" && u >= f || a === "prev" && u <= f, p = () => {
    o = (/* @__PURE__ */ new Date()).getTime(), n === null && (n = o);
    const u = Math.max(Math.min((o - n) / l, 1), 0), f = 0.5 - Math.cos(u * Math.PI) / 2;
    let c = r + f * (t - r);
    if (d(c, t) && (c = t), e.wrapperEl.scrollTo({
      [s]: c
    }), d(c, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [s]: c
        });
      }), i.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = i.requestAnimationFrame(p);
  };
  p();
}
function V(e, t = "") {
  return [...e.children].filter((s) => s.matches(t));
}
function ze(e, t = []) {
  const s = document.createElement(e);
  return s.classList.add(...Array.isArray(t) ? t : [t]), s;
}
function _e(e, t) {
  const s = [];
  for (; e.previousElementSibling; ) {
    const i = e.previousElementSibling;
    t ? i.matches(t) && s.push(i) : s.push(i), e = i;
  }
  return s;
}
function Ae(e, t) {
  const s = [];
  for (; e.nextElementSibling; ) {
    const i = e.nextElementSibling;
    t ? i.matches(t) && s.push(i) : s.push(i), e = i;
  }
  return s;
}
function B(e, t) {
  return D().getComputedStyle(e, null).getPropertyValue(t);
}
function pe(e) {
  let t = e, s;
  if (t) {
    for (s = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (s += 1);
    return s;
  }
}
function Ge(e, t) {
  const s = [];
  let i = e.parentElement;
  for (; i; )
    t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
  return s;
}
function he(e, t, s) {
  const i = D();
  return s ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth;
}
let te;
function Fe() {
  const e = D(), t = H();
  return {
    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
  };
}
function ye() {
  return te || (te = Fe()), te;
}
let se;
function Ve({
  userAgent: e
} = {}) {
  const t = ye(), s = D(), i = s.navigator.platform, r = e || s.navigator.userAgent, n = {
    ios: !1,
    android: !1
  }, o = s.screen.width, l = s.screen.height, a = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = r.match(/(iPad).*OS\s([\d_]+)/);
  const p = r.match(/(iPod)(.*OS\s([\d_]+))?/), u = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = i === "Win32";
  let c = i === "MacIntel";
  const T = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && c && t.touch && T.indexOf(`${o}x${l}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), c = !1), a && !f && (n.os = "android", n.android = !0), (d || u || p) && (n.os = "ios", n.ios = !0), n;
}
function Be(e = {}) {
  return se || (se = Ve(e)), se;
}
let ie;
function He() {
  const e = D();
  let t = !1;
  function s() {
    const i = e.navigator.userAgent.toLowerCase();
    return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0;
  }
  if (s()) {
    const i = String(e.navigator.userAgent);
    if (i.includes("Version/")) {
      const [r, n] = i.split("Version/")[1].split(" ")[0].split(".").map((o) => Number(o));
      t = r < 16 || r === 16 && n < 2;
    }
  }
  return {
    isSafari: t || s(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
  };
}
function Ne() {
  return ie || (ie = He()), ie;
}
function $e({
  swiper: e,
  on: t,
  emit: s
}) {
  const i = D();
  let r = null, n = null;
  const o = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, l = () => {
    !e || e.destroyed || !e.initialized || (r = new ResizeObserver((p) => {
      n = i.requestAnimationFrame(() => {
        const {
          width: u,
          height: f
        } = e;
        let c = u, T = f;
        p.forEach(({
          contentBoxSize: v,
          contentRect: y,
          target: w
        }) => {
          w && w !== e.el || (c = y ? y.width : (v[0] || v).inlineSize, T = y ? y.height : (v[0] || v).blockSize);
        }), (c !== u || T !== f) && o();
      });
    }), r.observe(e.el));
  }, a = () => {
    n && i.cancelAnimationFrame(n), r && r.unobserve && e.el && (r.unobserve(e.el), r = null);
  }, d = () => {
    !e || e.destroyed || !e.initialized || s("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver < "u") {
      l();
      return;
    }
    i.addEventListener("resize", o), i.addEventListener("orientationchange", d);
  }), t("destroy", () => {
    a(), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d);
  });
}
function Ye({
  swiper: e,
  extendParams: t,
  on: s,
  emit: i
}) {
  const r = [], n = D(), o = (d, p = {}) => {
    const u = n.MutationObserver || n.WebkitMutationObserver, f = new u((c) => {
      if (e.__preventObserver__)
        return;
      if (c.length === 1) {
        i("observerUpdate", c[0]);
        return;
      }
      const T = function() {
        i("observerUpdate", c[0]);
      };
      n.requestAnimationFrame ? n.requestAnimationFrame(T) : n.setTimeout(T, 0);
    });
    f.observe(d, {
      attributes: typeof p.attributes > "u" ? !0 : p.attributes,
      childList: typeof p.childList > "u" ? !0 : p.childList,
      characterData: typeof p.characterData > "u" ? !0 : p.characterData
    }), r.push(f);
  }, l = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = Ge(e.el);
        for (let p = 0; p < d.length; p += 1)
          o(d[p]);
      }
      o(e.el, {
        childList: e.params.observeSlideChildren
      }), o(e.wrapperEl, {
        attributes: !1
      });
    }
  }, a = () => {
    r.forEach((d) => {
      d.disconnect();
    }), r.splice(0, r.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", l), s("destroy", a);
}
const We = {
  on(e, t, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function")
      return i;
    const r = s ? "unshift" : "push";
    return e.split(" ").forEach((n) => {
      i.eventsListeners[n] || (i.eventsListeners[n] = []), i.eventsListeners[n][r](t);
    }), i;
  },
  once(e, t, s) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function")
      return i;
    function r(...n) {
      i.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(i, n);
    }
    return r.__emitterProxy = t, i.on(e, r, s);
  },
  onAny(e, t) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function")
      return s;
    const i = t ? "unshift" : "push";
    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
      return t;
    const s = t.eventsAnyListeners.indexOf(e);
    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
  },
  off(e, t) {
    const s = this;
    return !s.eventsListeners || s.destroyed || !s.eventsListeners || e.split(" ").forEach((i) => {
      typeof t > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((r, n) => {
        (r === t || r.__emitterProxy && r.__emitterProxy === t) && s.eventsListeners[i].splice(n, 1);
      });
    }), s;
  },
  emit(...e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
      return t;
    let s, i, r;
    return typeof e[0] == "string" || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), r = t) : (s = e[0].events, i = e[0].data, r = e[0].context || t), i.unshift(r), (Array.isArray(s) ? s : s.split(" ")).forEach((o) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((l) => {
        l.apply(r, [o, ...i]);
      }), t.eventsListeners && t.eventsListeners[o] && t.eventsListeners[o].forEach((l) => {
        l.apply(r, i);
      });
    }), t;
  }
};
function Xe() {
  const e = this;
  let t, s;
  const i = e.el;
  typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = i.clientWidth, typeof e.params.height < "u" && e.params.height !== null ? s = e.params.height : s = i.clientHeight, !(t === 0 && e.isHorizontal() || s === 0 && e.isVertical()) && (t = t - parseInt(B(i, "padding-left") || 0, 10) - parseInt(B(i, "padding-right") || 0, 10), s = s - parseInt(B(i, "padding-top") || 0, 10) - parseInt(B(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
    width: t,
    height: s,
    size: e.isHorizontal() ? t : s
  }));
}
function Re() {
  const e = this;
  function t(S) {
    return e.isHorizontal() ? S : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[S];
  }
  function s(S, g) {
    return parseFloat(S.getPropertyValue(t(g)) || 0);
  }
  const i = e.params, {
    wrapperEl: r,
    slidesEl: n,
    size: o,
    rtlTranslate: l,
    wrongRTL: a
  } = e, d = e.virtual && i.virtual.enabled, p = d ? e.virtual.slides.length : e.slides.length, u = V(n, `.${e.params.slideClass}, swiper-slide`), f = d ? e.virtual.slides.length : u.length;
  let c = [];
  const T = [], v = [];
  let y = i.slidesOffsetBefore;
  typeof y == "function" && (y = i.slidesOffsetBefore.call(e));
  let w = i.slidesOffsetAfter;
  typeof w == "function" && (w = i.slidesOffsetAfter.call(e));
  const m = e.snapGrid.length, h = e.slidesGrid.length;
  let E = i.spaceBetween, x = -y, b = 0, I = 0;
  if (typeof o > "u")
    return;
  typeof E == "string" && E.indexOf("%") >= 0 && (E = parseFloat(E.replace("%", "")) / 100 * o), e.virtualSize = -E, u.forEach((S) => {
    l ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = "";
  }), i.centeredSlides && i.cssMode && (J(r, "--swiper-centered-offset-before", ""), J(r, "--swiper-centered-offset-after", ""));
  const C = i.grid && i.grid.rows > 1 && e.grid;
  C && e.grid.initSlides(f);
  let P;
  const _ = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter((S) => typeof i.breakpoints[S].slidesPerView < "u").length > 0;
  for (let S = 0; S < f; S += 1) {
    P = 0;
    let g;
    if (u[S] && (g = u[S]), C && e.grid.updateSlide(S, g, f, t), !(u[S] && B(g, "display") === "none")) {
      if (i.slidesPerView === "auto") {
        _ && (u[S].style[t("width")] = "");
        const M = getComputedStyle(g), k = g.style.transform, N = g.style.webkitTransform;
        if (k && (g.style.transform = "none"), N && (g.style.webkitTransform = "none"), i.roundLengths)
          P = e.isHorizontal() ? he(g, "width", !0) : he(g, "height", !0);
        else {
          const q = s(M, "width"), $ = s(M, "padding-left"), K = s(M, "padding-right"), Y = s(M, "margin-left"), oe = s(M, "margin-right"), de = M.getPropertyValue("box-sizing");
          if (de && de === "border-box")
            P = q + Y + oe;
          else {
            const {
              clientWidth: Me,
              offsetWidth: Ce
            } = g;
            P = q + $ + K + Y + oe + (Ce - Me);
          }
        }
        k && (g.style.transform = k), N && (g.style.webkitTransform = N), i.roundLengths && (P = Math.floor(P));
      } else
        P = (o - (i.slidesPerView - 1) * E) / i.slidesPerView, i.roundLengths && (P = Math.floor(P)), u[S] && (u[S].style[t("width")] = `${P}px`);
      u[S] && (u[S].swiperSlideSize = P), v.push(P), i.centeredSlides ? (x = x + P / 2 + b / 2 + E, b === 0 && S !== 0 && (x = x - o / 2 - E), S === 0 && (x = x - o / 2 - E), Math.abs(x) < 1 / 1e3 && (x = 0), i.roundLengths && (x = Math.floor(x)), I % i.slidesPerGroup === 0 && c.push(x), T.push(x)) : (i.roundLengths && (x = Math.floor(x)), (I - Math.min(e.params.slidesPerGroupSkip, I)) % e.params.slidesPerGroup === 0 && c.push(x), T.push(x), x = x + P + E), e.virtualSize += P + E, b = P, I += 1;
    }
  }
  if (e.virtualSize = Math.max(e.virtualSize, o) + w, l && a && (i.effect === "slide" || i.effect === "coverflow") && (r.style.width = `${e.virtualSize + i.spaceBetween}px`), i.setWrapperSize && (r.style[t("width")] = `${e.virtualSize + i.spaceBetween}px`), C && e.grid.updateWrapperSize(P, c, t), !i.centeredSlides) {
    const S = [];
    for (let g = 0; g < c.length; g += 1) {
      let M = c[g];
      i.roundLengths && (M = Math.floor(M)), c[g] <= e.virtualSize - o && S.push(M);
    }
    c = S, Math.floor(e.virtualSize - o) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - o);
  }
  if (d && i.loop) {
    const S = v[0] + E;
    if (i.slidesPerGroup > 1) {
      const g = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup), M = S * i.slidesPerGroup;
      for (let k = 0; k < g; k += 1)
        c.push(c[c.length - 1] + M);
    }
    for (let g = 0; g < e.virtual.slidesBefore + e.virtual.slidesAfter; g += 1)
      i.slidesPerGroup === 1 && c.push(c[c.length - 1] + S), T.push(T[T.length - 1] + S), e.virtualSize += S;
  }
  if (c.length === 0 && (c = [0]), i.spaceBetween !== 0) {
    const S = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
    u.filter((g, M) => !i.cssMode || i.loop ? !0 : M !== u.length - 1).forEach((g) => {
      g.style[S] = `${E}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let S = 0;
    v.forEach((M) => {
      S += M + (i.spaceBetween ? i.spaceBetween : 0);
    }), S -= i.spaceBetween;
    const g = S - o;
    c = c.map((M) => M < 0 ? -y : M > g ? g + w : M);
  }
  if (i.centerInsufficientSlides) {
    let S = 0;
    if (v.forEach((g) => {
      S += g + (i.spaceBetween ? i.spaceBetween : 0);
    }), S -= i.spaceBetween, S < o) {
      const g = (o - S) / 2;
      c.forEach((M, k) => {
        c[k] = M - g;
      }), T.forEach((M, k) => {
        T[k] = M + g;
      });
    }
  }
  if (Object.assign(e, {
    slides: u,
    snapGrid: c,
    slidesGrid: T,
    slidesSizesGrid: v
  }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
    J(r, "--swiper-centered-offset-before", `${-c[0]}px`), J(r, "--swiper-centered-offset-after", `${e.size / 2 - v[v.length - 1] / 2}px`);
    const S = -e.snapGrid[0], g = -e.slidesGrid[0];
    e.snapGrid = e.snapGrid.map((M) => M + S), e.slidesGrid = e.slidesGrid.map((M) => M + g);
  }
  if (f !== p && e.emit("slidesLengthChange"), c.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), T.length !== h && e.emit("slidesGridLengthChange"), i.watchSlidesProgress && e.updateSlidesOffset(), !d && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
    const S = `${i.containerModifierClass}backface-hidden`, g = e.el.classList.contains(S);
    f <= i.maxBackfaceHiddenSlides ? g || e.el.classList.add(S) : g && e.el.classList.remove(S);
  }
}
function je(e) {
  const t = this, s = [], i = t.virtual && t.params.virtual.enabled;
  let r = 0, n;
  typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
  const o = (l) => i ? t.getSlideIndexByData(l) : t.slides[l];
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        s.push(l);
      });
    else
      for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
        const l = t.activeIndex + n;
        if (l > t.slides.length && !i)
          break;
        s.push(o(l));
      }
  else
    s.push(o(t.activeIndex));
  for (n = 0; n < s.length; n += 1)
    if (typeof s[n] < "u") {
      const l = s[n].offsetHeight;
      r = l > r ? l : r;
    }
  (r || r === 0) && (t.wrapperEl.style.height = `${r}px`);
}
function qe() {
  const e = this, t = e.slides, s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s;
}
function Ke(e = this && this.translate || 0) {
  const t = this, s = t.params, {
    slides: i,
    rtlTranslate: r,
    snapGrid: n
  } = t;
  if (i.length === 0)
    return;
  typeof i[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  r && (o = e), i.forEach((l) => {
    l.classList.remove(s.slideVisibleClass);
  }), t.visibleSlidesIndexes = [], t.visibleSlides = [];
  for (let l = 0; l < i.length; l += 1) {
    const a = i[l];
    let d = a.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
    const p = (o + (s.centeredSlides ? t.minTranslate() : 0) - d) / (a.swiperSlideSize + s.spaceBetween), u = (o - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (a.swiperSlideSize + s.spaceBetween), f = -(o - d), c = f + t.slidesSizesGrid[l];
    (f >= 0 && f < t.size - 1 || c > 1 && c <= t.size || f <= 0 && c >= t.size) && (t.visibleSlides.push(a), t.visibleSlidesIndexes.push(l), i[l].classList.add(s.slideVisibleClass)), a.progress = r ? -p : p, a.originalProgress = r ? -u : u;
  }
}
function Ue(e) {
  const t = this;
  if (typeof e > "u") {
    const p = t.rtlTranslate ? -1 : 1;
    e = t && t.translate && t.translate * p || 0;
  }
  const s = t.params, i = t.maxTranslate() - t.minTranslate();
  let {
    progress: r,
    isBeginning: n,
    isEnd: o,
    progressLoop: l
  } = t;
  const a = n, d = o;
  if (i === 0)
    r = 0, n = !0, o = !0;
  else {
    r = (e - t.minTranslate()) / i;
    const p = Math.abs(e - t.minTranslate()) < 1, u = Math.abs(e - t.maxTranslate()) < 1;
    n = p || r <= 0, o = u || r >= 1, p && (r = 0), u && (r = 1);
  }
  if (s.loop) {
    const p = t.getSlideIndexByData(0), u = t.getSlideIndexByData(t.slides.length - 1), f = t.slidesGrid[p], c = t.slidesGrid[u], T = t.slidesGrid[t.slidesGrid.length - 1], v = Math.abs(e);
    v >= f ? l = (v - f) / T : l = (v + T - c) / T, l > 1 && (l -= 1);
  }
  Object.assign(t, {
    progress: r,
    progressLoop: l,
    isBeginning: n,
    isEnd: o
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !a && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (a && !n || d && !o) && t.emit("fromEdge"), t.emit("progress", r);
}
function Ze() {
  const e = this, {
    slides: t,
    params: s,
    slidesEl: i,
    activeIndex: r
  } = e, n = e.virtual && s.virtual.enabled, o = (a) => V(i, `.${s.slideClass}${a}, swiper-slide${a}`)[0];
  t.forEach((a) => {
    a.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
  });
  let l;
  if (n)
    if (s.loop) {
      let a = r - e.virtual.slidesBefore;
      a < 0 && (a = e.virtual.slides.length + a), a >= e.virtual.slides.length && (a -= e.virtual.slides.length), l = o(`[data-swiper-slide-index="${a}"]`);
    } else
      l = o(`[data-swiper-slide-index="${r}"]`);
  else
    l = t[r];
  if (l) {
    l.classList.add(s.slideActiveClass);
    let a = Ae(l, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !a && (a = t[0]), a && a.classList.add(s.slideNextClass);
    let d = _e(l, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !d === 0 && (d = t[t.length - 1]), d && d.classList.add(s.slidePrevClass);
  }
  e.emitSlidesClasses();
}
function Je(e) {
  const {
    slidesGrid: t,
    params: s
  } = e, i = e.rtlTranslate ? e.translate : -e.translate;
  let r;
  for (let n = 0; n < t.length; n += 1)
    typeof t[n + 1] < "u" ? i >= t[n] && i < t[n + 1] - (t[n + 1] - t[n]) / 2 ? r = n : i >= t[n] && i < t[n + 1] && (r = n + 1) : i >= t[n] && (r = n);
  return s.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function Qe(e) {
  const t = this, s = t.rtlTranslate ? t.translate : -t.translate, {
    snapGrid: i,
    params: r,
    activeIndex: n,
    realIndex: o,
    snapIndex: l
  } = t;
  let a = e, d;
  const p = (f) => {
    let c = f - t.virtual.slidesBefore;
    return c < 0 && (c = t.virtual.slides.length + c), c >= t.virtual.slides.length && (c -= t.virtual.slides.length), c;
  };
  if (typeof a > "u" && (a = Je(t)), i.indexOf(s) >= 0)
    d = i.indexOf(s);
  else {
    const f = Math.min(r.slidesPerGroupSkip, a);
    d = f + Math.floor((a - f) / r.slidesPerGroup);
  }
  if (d >= i.length && (d = i.length - 1), a === n) {
    d !== l && (t.snapIndex = d, t.emit("snapIndexChange")), t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = p(a));
    return;
  }
  let u;
  t.virtual && r.virtual.enabled && r.loop ? u = p(a) : t.slides[a] ? u = parseInt(t.slides[a].getAttribute("data-swiper-slide-index") || a, 10) : u = a, Object.assign(t, {
    snapIndex: d,
    realIndex: u,
    previousIndex: n,
    activeIndex: a
  }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
}
function et(e) {
  const t = this, s = t.params, i = e.closest(`.${s.slideClass}, swiper-slide`);
  let r = !1, n;
  if (i) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === i) {
        r = !0, n = o;
        break;
      }
  }
  if (i && r)
    t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = n;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  s.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
const tt = {
  updateSize: Xe,
  updateSlides: Re,
  updateAutoHeight: je,
  updateSlidesOffset: qe,
  updateSlidesProgress: Ke,
  updateProgress: Ue,
  updateSlidesClasses: Ze,
  updateActiveIndex: Qe,
  updateClickedSlide: et
};
function st(e = this.isHorizontal() ? "x" : "y") {
  const t = this, {
    params: s,
    rtlTranslate: i,
    translate: r,
    wrapperEl: n
  } = t;
  if (s.virtualTranslate)
    return i ? -r : r;
  if (s.cssMode)
    return r;
  let o = De(n, e);
  return i && (o = -o), o || 0;
}
function it(e, t) {
  const s = this, {
    rtlTranslate: i,
    params: r,
    wrapperEl: n,
    progress: o
  } = s;
  let l = 0, a = 0;
  const d = 0;
  s.isHorizontal() ? l = i ? -e : e : a = e, r.roundLengths && (l = Math.floor(l), a = Math.floor(a)), r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -a : r.virtualTranslate || (n.style.transform = `translate3d(${l}px, ${a}px, ${d}px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : a;
  let p;
  const u = s.maxTranslate() - s.minTranslate();
  u === 0 ? p = 0 : p = (e - s.minTranslate()) / u, p !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
}
function nt() {
  return -this.snapGrid[0];
}
function rt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function at(e = 0, t = this.params.speed, s = !0, i = !0, r) {
  const n = this, {
    params: o,
    wrapperEl: l
  } = n;
  if (n.animating && o.preventInteractionOnTransition)
    return !1;
  const a = n.minTranslate(), d = n.maxTranslate();
  let p;
  if (i && e > a ? p = a : i && e < d ? p = d : p = e, n.updateProgress(p), o.cssMode) {
    const u = n.isHorizontal();
    if (t === 0)
      l[u ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!n.support.smoothScroll)
        return be({
          swiper: n,
          targetPosition: -p,
          side: u ? "left" : "top"
        }), !0;
      l.scrollTo({
        [u ? "left" : "top"]: -p,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return t === 0 ? (n.setTransition(0), n.setTranslate(p), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(p), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(f) {
    !n || n.destroyed || f.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, s && n.emit("transitionEnd"));
  }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
}
const lt = {
  getTranslate: st,
  setTranslate: it,
  minTranslate: nt,
  maxTranslate: rt,
  translateTo: at
};
function ot(e, t) {
  const s = this;
  s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`), s.emit("setTransition", e, t);
}
function xe({
  swiper: e,
  runCallbacks: t,
  direction: s,
  step: i
}) {
  const {
    activeIndex: r,
    previousIndex: n
  } = e;
  let o = s;
  if (o || (r > n ? o = "next" : r < n ? o = "prev" : o = "reset"), e.emit(`transition${i}`), t && r !== n) {
    if (o === "reset") {
      e.emit(`slideResetTransition${i}`);
      return;
    }
    e.emit(`slideChangeTransition${i}`), o === "next" ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`);
  }
}
function dt(e = !0, t) {
  const s = this, {
    params: i
  } = s;
  i.cssMode || (i.autoHeight && s.updateAutoHeight(), xe({
    swiper: s,
    runCallbacks: e,
    direction: t,
    step: "Start"
  }));
}
function ct(e = !0, t) {
  const s = this, {
    params: i
  } = s;
  s.animating = !1, !i.cssMode && (s.setTransition(0), xe({
    swiper: s,
    runCallbacks: e,
    direction: t,
    step: "End"
  }));
}
const ut = {
  setTransition: ot,
  transitionStart: dt,
  transitionEnd: ct
};
function ft(e = 0, t = this.params.speed, s = !0, i, r) {
  typeof e == "string" && (e = parseInt(e, 10));
  const n = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: d,
    previousIndex: p,
    activeIndex: u,
    rtlTranslate: f,
    wrapperEl: c,
    enabled: T
  } = n;
  if (n.animating && l.preventInteractionOnTransition || !T && !i && !r)
    return !1;
  const v = Math.min(n.params.slidesPerGroupSkip, o);
  let y = v + Math.floor((o - v) / n.params.slidesPerGroup);
  y >= a.length && (y = a.length - 1);
  const w = -a[y];
  if (l.normalizeSlideIndex)
    for (let h = 0; h < d.length; h += 1) {
      const E = -Math.floor(w * 100), x = Math.floor(d[h] * 100), b = Math.floor(d[h + 1] * 100);
      typeof d[h + 1] < "u" ? E >= x && E < b - (b - x) / 2 ? o = h : E >= x && E < b && (o = h + 1) : E >= x && (o = h);
    }
  if (n.initialized && o !== u && (!n.allowSlideNext && w < n.translate && w < n.minTranslate() || !n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (u || 0) !== o))
    return !1;
  o !== (p || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(w);
  let m;
  if (o > u ? m = "next" : o < u ? m = "prev" : m = "reset", f && -w === n.translate || !f && w === n.translate)
    return n.updateActiveIndex(o), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), l.effect !== "slide" && n.setTranslate(w), m !== "reset" && (n.transitionStart(s, m), n.transitionEnd(s, m)), !1;
  if (l.cssMode) {
    const h = n.isHorizontal(), E = f ? w : -w;
    if (t === 0) {
      const x = n.virtual && n.params.virtual.enabled;
      x && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), x && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        c[h ? "scrollLeft" : "scrollTop"] = E;
      })) : c[h ? "scrollLeft" : "scrollTop"] = E, x && requestAnimationFrame(() => {
        n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
      });
    } else {
      if (!n.support.smoothScroll)
        return be({
          swiper: n,
          targetPosition: E,
          side: h ? "left" : "top"
        }), !0;
      c.scrollTo({
        [h ? "left" : "top"]: E,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(o), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, m), t === 0 ? n.transitionEnd(s, m) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(E) {
    !n || n.destroyed || E.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, m));
  }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
}
function pt(e = 0, t = this.params.speed, s = !0, i) {
  typeof e == "string" && (e = parseInt(e, 10));
  const r = this;
  let n = e;
  return r.params.loop && (r.virtual && r.params.virtual.enabled ? n = n + r.virtual.slidesBefore : n = r.getSlideIndexByData(n)), r.slideTo(n, t, s, i);
}
function ht(e = this.params.speed, t = !0, s) {
  const i = this, {
    enabled: r,
    params: n,
    animating: o
  } = i;
  if (!r)
    return i;
  let l = n.slidesPerGroup;
  n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const a = i.activeIndex < n.slidesPerGroupSkip ? 1 : l, d = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (o && !d && n.loopPreventsSliding)
      return !1;
    i.loopFix({
      direction: "next"
    }), i._clientLeft = i.wrapperEl.clientLeft;
  }
  return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + a, e, t, s);
}
function mt(e = this.params.speed, t = !0, s) {
  const i = this, {
    params: r,
    snapGrid: n,
    slidesGrid: o,
    rtlTranslate: l,
    enabled: a,
    animating: d
  } = i;
  if (!a)
    return i;
  const p = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (d && !p && r.loopPreventsSliding)
      return !1;
    i.loopFix({
      direction: "prev"
    }), i._clientLeft = i.wrapperEl.clientLeft;
  }
  const u = l ? i.translate : -i.translate;
  function f(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  const c = f(u), T = n.map((w) => f(w));
  let v = n[T.indexOf(c) - 1];
  if (typeof v > "u" && r.cssMode) {
    let w;
    n.forEach((m, h) => {
      c >= m && (w = h);
    }), typeof w < "u" && (v = n[w > 0 ? w - 1 : w]);
  }
  let y = 0;
  if (typeof v < "u" && (y = o.indexOf(v), y < 0 && (y = i.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (y = y - i.slidesPerViewDynamic("previous", !0) + 1, y = Math.max(y, 0))), r.rewind && i.isBeginning) {
    const w = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(w, e, t, s);
  }
  return i.slideTo(y, e, t, s);
}
function gt(e = this.params.speed, t = !0, s) {
  const i = this;
  return i.slideTo(i.activeIndex, e, t, s);
}
function vt(e = this.params.speed, t = !0, s, i = 0.5) {
  const r = this;
  let n = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, n), l = o + Math.floor((n - o) / r.params.slidesPerGroup), a = r.rtlTranslate ? r.translate : -r.translate;
  if (a >= r.snapGrid[l]) {
    const d = r.snapGrid[l], p = r.snapGrid[l + 1];
    a - d > (p - d) * i && (n += r.params.slidesPerGroup);
  } else {
    const d = r.snapGrid[l - 1], p = r.snapGrid[l];
    a - d <= (p - d) * i && (n -= r.params.slidesPerGroup);
  }
  return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s);
}
function wt() {
  const e = this, {
    params: t,
    slidesEl: s
  } = e, i = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let r = e.clickedIndex, n;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating)
      return;
    n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - i / 2 || r > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), r = e.getSlideIndex(V(s, `${o}[data-swiper-slide-index="${n}"]`)[0]), j(() => {
      e.slideTo(r);
    })) : e.slideTo(r) : r > e.slides.length - i ? (e.loopFix(), r = e.getSlideIndex(V(s, `${o}[data-swiper-slide-index="${n}"]`)[0]), j(() => {
      e.slideTo(r);
    })) : e.slideTo(r);
  } else
    e.slideTo(r);
}
const Tt = {
  slideTo: ft,
  slideToLoop: pt,
  slideNext: ht,
  slidePrev: mt,
  slideReset: gt,
  slideToClosest: vt,
  slideToClickedSlide: wt
};
function St(e) {
  const t = this, {
    params: s,
    slidesEl: i
  } = t;
  if (!s.loop || t.virtual && t.params.virtual.enabled)
    return;
  V(i, `.${s.slideClass}, swiper-slide`).forEach((n, o) => {
    n.setAttribute("data-swiper-slide-index", o);
  }), t.loopFix({
    slideRealIndex: e,
    direction: s.centeredSlides ? void 0 : "next"
  });
}
function bt({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: s,
  setTranslate: i,
  activeSlideIndex: r,
  byController: n,
  byMousewheel: o
} = {}) {
  const l = this;
  if (!l.params.loop)
    return;
  l.emit("beforeLoopFix");
  const {
    slides: a,
    allowSlidePrev: d,
    allowSlideNext: p,
    slidesEl: u,
    params: f
  } = l;
  if (l.allowSlidePrev = !0, l.allowSlideNext = !0, l.virtual && f.virtual.enabled) {
    t && (!f.centeredSlides && l.snapIndex === 0 ? l.slideTo(l.virtual.slides.length, 0, !1, !0) : f.centeredSlides && l.snapIndex < f.slidesPerView ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0) : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)), l.allowSlidePrev = d, l.allowSlideNext = p, l.emit("loopFix");
    return;
  }
  const c = f.slidesPerView === "auto" ? l.slidesPerViewDynamic() : Math.ceil(parseFloat(f.slidesPerView, 10));
  let T = f.loopedSlides || c;
  T % f.slidesPerGroup !== 0 && (T += f.slidesPerGroup - T % f.slidesPerGroup), l.loopedSlides = T;
  const v = [], y = [];
  let w = l.activeIndex;
  typeof r > "u" ? r = l.getSlideIndex(l.slides.filter((b) => b.classList.contains(f.slideActiveClass))[0]) : w = r;
  const m = s === "next" || !s, h = s === "prev" || !s;
  let E = 0, x = 0;
  if (r < T) {
    E = Math.max(T - r, f.slidesPerGroup);
    for (let b = 0; b < T - r; b += 1) {
      const I = b - Math.floor(b / a.length) * a.length;
      v.push(a.length - I - 1);
    }
  } else if (r > l.slides.length - T * 2) {
    x = Math.max(r - (l.slides.length - T * 2), f.slidesPerGroup);
    for (let b = 0; b < x; b += 1) {
      const I = b - Math.floor(b / a.length) * a.length;
      y.push(I);
    }
  }
  if (h && v.forEach((b) => {
    u.prepend(l.slides[b]);
  }), m && y.forEach((b) => {
    u.append(l.slides[b]);
  }), l.recalcSlides(), f.watchSlidesProgress && l.updateSlidesOffset(), t) {
    if (v.length > 0 && h)
      if (typeof e > "u") {
        const b = l.slidesGrid[w], C = l.slidesGrid[w + E] - b;
        o ? l.setTranslate(l.translate - C) : (l.slideTo(w + E, 0, !1, !0), i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += C));
      } else
        i && l.slideToLoop(e, 0, !1, !0);
    else if (y.length > 0 && m)
      if (typeof e > "u") {
        const b = l.slidesGrid[w], C = l.slidesGrid[w - x] - b;
        o ? l.setTranslate(l.translate - C) : (l.slideTo(w - x, 0, !1, !0), i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += C));
      } else
        l.slideToLoop(e, 0, !1, !0);
  }
  if (l.allowSlidePrev = d, l.allowSlideNext = p, l.controller && l.controller.control && !n) {
    const b = {
      slideRealIndex: e,
      slideTo: !1,
      direction: s,
      setTranslate: i,
      activeSlideIndex: r,
      byController: !0
    };
    Array.isArray(l.controller.control) ? l.controller.control.forEach((I) => {
      !I.destroyed && I.params.loop && I.loopFix(b);
    }) : l.controller.control instanceof l.constructor && l.controller.control.params.loop && l.controller.control.loopFix(b);
  }
  l.emit("loopFix");
}
function yt() {
  const e = this, {
    params: t,
    slidesEl: s
  } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled)
    return;
  e.recalcSlides();
  const i = [];
  e.slides.forEach((r) => {
    const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
    i[n] = r;
  }), e.slides.forEach((r) => {
    r.removeAttribute("data-swiper-slide-index");
  }), i.forEach((r) => {
    s.append(r);
  }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
}
const xt = {
  loopCreate: St,
  loopFix: bt,
  loopDestroy: yt
};
function Et(e) {
  const t = this;
  if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
    return;
  const s = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  });
}
function Mt() {
  const e = this;
  e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  }));
}
const Ct = {
  setGrabCursor: Et,
  unsetGrabCursor: Mt
};
function Pt(e, t = this) {
  function s(i) {
    if (!i || i === H() || i === D())
      return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(e);
    return !r && !i.getRootNode ? null : r || s(i.getRootNode().host);
  }
  return s(t);
}
function Lt(e) {
  const t = this, s = H(), i = D(), r = t.touchEventsData;
  r.evCache.push(e);
  const {
    params: n,
    touches: o,
    enabled: l
  } = t;
  if (!l || !n.simulateTouch && e.pointerType === "mouse" || t.animating && n.preventInteractionOnTransition)
    return;
  !t.animating && n.cssMode && n.loop && t.loopFix();
  let a = e;
  a.originalEvent && (a = a.originalEvent);
  let d = a.target;
  if (n.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(d) || "which" in a && a.which === 3 || "button" in a && a.button > 0 || r.isTouched && r.isMoved)
    return;
  const p = !!n.noSwipingClass && n.noSwipingClass !== "", u = e.composedPath ? e.composedPath() : e.path;
  p && a.target && a.target.shadowRoot && u && (d = u[0]);
  const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, c = !!(a.target && a.target.shadowRoot);
  if (n.noSwiping && (c ? Pt(f, d) : d.closest(f))) {
    t.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !d.closest(n.swipeHandler))
    return;
  o.currentX = a.pageX, o.currentY = a.pageY;
  const T = o.currentX, v = o.currentY, y = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection, w = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
  if (y && (T <= w || T >= i.innerWidth - w))
    if (y === "prevent")
      e.preventDefault();
    else
      return;
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = T, o.startY = v, r.touchStartTime = A(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
  let m = !0;
  d.matches(r.focusableElements) && (m = !1, d.nodeName === "SELECT" && (r.isTouched = !1)), s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== d && s.activeElement.blur();
  const h = m && t.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || h) && !d.isContentEditable && a.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", a);
}
function It(e) {
  const t = H(), s = this, i = s.touchEventsData, {
    params: r,
    touches: n,
    rtlTranslate: o,
    enabled: l
  } = s;
  if (!l || !r.simulateTouch && e.pointerType === "mouse")
    return;
  let a = e;
  if (a.originalEvent && (a = a.originalEvent), !i.isTouched) {
    i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", a);
    return;
  }
  const d = i.evCache.findIndex((b) => b.pointerId === a.pointerId);
  d >= 0 && (i.evCache[d] = a);
  const p = i.evCache.length > 1 ? i.evCache[0] : a, u = p.pageX, f = p.pageY;
  if (a.preventedByNestedSwiper) {
    n.startX = u, n.startY = f;
    return;
  }
  if (!s.allowTouchMove) {
    a.target.matches(i.focusableElements) || (s.allowClick = !1), i.isTouched && (Object.assign(n, {
      startX: u,
      startY: f,
      prevX: s.touches.currentX,
      prevY: s.touches.currentY,
      currentX: u,
      currentY: f
    }), i.touchStartTime = A());
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (s.isVertical()) {
      if (f < n.startY && s.translate <= s.maxTranslate() || f > n.startY && s.translate >= s.minTranslate()) {
        i.isTouched = !1, i.isMoved = !1;
        return;
      }
    } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate())
      return;
  }
  if (t.activeElement && a.target === t.activeElement && a.target.matches(i.focusableElements)) {
    i.isMoved = !0, s.allowClick = !1;
    return;
  }
  if (i.allowTouchCallbacks && s.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1)
    return;
  n.currentX = u, n.currentY = f;
  const c = n.currentX - n.startX, T = n.currentY - n.startY;
  if (s.params.threshold && Math.sqrt(c ** 2 + T ** 2) < s.params.threshold)
    return;
  if (typeof i.isScrolling > "u") {
    let b;
    s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : c * c + T * T >= 25 && (b = Math.atan2(Math.abs(T), Math.abs(c)) * 180 / Math.PI, i.isScrolling = s.isHorizontal() ? b > r.touchAngle : 90 - b > r.touchAngle);
  }
  if (i.isScrolling && s.emit("touchMoveOpposite", a), typeof i.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0), i.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving)
    return;
  s.allowClick = !1, !r.cssMode && a.cancelable && a.preventDefault(), r.touchMoveStopPropagation && !r.nested && a.stopPropagation();
  let v = s.isHorizontal() ? c : T, y = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  r.oneWayMovement && (v = Math.abs(v) * (o ? 1 : -1), y = Math.abs(y) * (o ? 1 : -1)), n.diff = v, v *= r.touchRatio, o && (v = -v, y = -y);
  const w = s.touchesDirection;
  s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = y > 0 ? "prev" : "next";
  const m = s.params.loop && !r.cssMode;
  if (!i.isMoved) {
    if (m && s.loopFix({
      direction: s.swipeDirection
    }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
      const b = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      s.wrapperEl.dispatchEvent(b);
    }
    i.allowMomentumBounce = !1, r.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", a);
  }
  let h;
  i.isMoved && w !== s.touchesDirection && m && Math.abs(v) >= 1 && (s.loopFix({
    direction: s.swipeDirection,
    setTranslate: !0
  }), h = !0), s.emit("sliderMove", a), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
  let E = !0, x = r.resistanceRatio;
  if (r.touchReleaseOnEdges && (x = 0), v > 0 ? (m && !h && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), i.currentTranslate > s.minTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** x))) : v < 0 && (m && !h && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: s.slides.length - (r.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
  }), i.currentTranslate < s.maxTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** x))), E && (a.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (i.currentTranslate = i.startTranslate), r.threshold > 0)
    if (Math.abs(v) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
}
function kt(e) {
  const t = this, s = t.touchEventsData, i = s.evCache.findIndex((h) => h.pointerId === e.pointerId);
  if (i >= 0 && s.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type) && !(e.type === "pointercancel" && (t.browser.isSafari || t.browser.isWebView)))
    return;
  const {
    params: r,
    touches: n,
    rtlTranslate: o,
    slidesGrid: l,
    enabled: a
  } = t;
  if (!a || !r.simulateTouch && e.pointerType === "mouse")
    return;
  let d = e;
  if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) {
    s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
    return;
  }
  r.grabCursor && s.isMoved && s.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
  const p = A(), u = p - s.touchStartTime;
  if (t.allowClick) {
    const h = d.path || d.composedPath && d.composedPath();
    t.updateClickedSlide(h && h[0] || d.target), t.emit("tap click", d), u < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", d);
  }
  if (s.lastClickTime = A(), j(() => {
    t.destroyed || (t.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !t.swipeDirection || n.diff === 0 || s.currentTranslate === s.startTranslate) {
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    return;
  }
  s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
  let f;
  if (r.followFinger ? f = o ? t.translate : -t.translate : f = -s.currentTranslate, r.cssMode)
    return;
  if (t.params.freeMode && r.freeMode.enabled) {
    t.freeMode.onTouchEnd({
      currentPos: f
    });
    return;
  }
  let c = 0, T = t.slidesSizesGrid[0];
  for (let h = 0; h < l.length; h += h < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
    const E = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    typeof l[h + E] < "u" ? f >= l[h] && f < l[h + E] && (c = h, T = l[h + E] - l[h]) : f >= l[h] && (c = h, T = l[l.length - 1] - l[l.length - 2]);
  }
  let v = null, y = null;
  r.rewind && (t.isBeginning ? y = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
  const w = (f - l[c]) / T, m = c < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
  if (u > r.longSwipesMs) {
    if (!r.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" && (w >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? v : c + m) : t.slideTo(c)), t.swipeDirection === "prev" && (w > 1 - r.longSwipesRatio ? t.slideTo(c + m) : y !== null && w < 0 && Math.abs(w) > r.longSwipesRatio ? t.slideTo(y) : t.slideTo(c));
  } else {
    if (!r.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(c + m) : t.slideTo(c) : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : c + m), t.swipeDirection === "prev" && t.slideTo(y !== null ? y : c));
  }
}
let me;
function ge() {
  const e = this, {
    params: t,
    el: s
  } = e;
  if (s && s.offsetWidth === 0)
    return;
  t.breakpoints && e.setBreakpoint();
  const {
    allowSlideNext: i,
    allowSlidePrev: r,
    snapGrid: n
  } = e, o = e.virtual && e.params.virtual.enabled;
  e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !l ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !o ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(me), me = setTimeout(() => {
    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
  }, 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
}
function Dt(e) {
  const t = this;
  t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function Ot() {
  const e = this, {
    wrapperEl: t,
    rtlTranslate: s,
    enabled: i
  } = e;
  if (!i)
    return;
  e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
  let r;
  const n = e.maxTranslate() - e.minTranslate();
  n === 0 ? r = 0 : r = (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
const ee = (e, t) => {
  if (!e || e.destroyed || !e.params)
    return;
  const s = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`, i = t.closest(s());
  if (i) {
    const r = i.querySelector(`.${e.params.lazyPreloaderClass}`);
    r && r.remove();
  }
};
function zt(e) {
  const t = this;
  ee(t, e.target), t.update();
}
let ve = !1;
function _t() {
}
const Ee = (e, t) => {
  const s = H(), {
    params: i,
    el: r,
    wrapperEl: n,
    device: o
  } = e, l = !!i.nested, a = t === "on" ? "addEventListener" : "removeEventListener", d = t;
  r[a]("pointerdown", e.onTouchStart, {
    passive: !1
  }), s[a]("pointermove", e.onTouchMove, {
    passive: !1,
    capture: l
  }), s[a]("pointerup", e.onTouchEnd, {
    passive: !0
  }), s[a]("pointercancel", e.onTouchEnd, {
    passive: !0
  }), s[a]("pointerout", e.onTouchEnd, {
    passive: !0
  }), s[a]("pointerleave", e.onTouchEnd, {
    passive: !0
  }), (i.preventClicks || i.preventClicksPropagation) && r[a]("click", e.onClick, !0), i.cssMode && n[a]("scroll", e.onScroll), i.updateOnWindowResize ? e[d](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ge, !0) : e[d]("observerUpdate", ge, !0), r[a]("load", e.onLoad, {
    capture: !0
  });
};
function At() {
  const e = this, t = H(), {
    params: s
  } = e;
  e.onTouchStart = Lt.bind(e), e.onTouchMove = It.bind(e), e.onTouchEnd = kt.bind(e), s.cssMode && (e.onScroll = Ot.bind(e)), e.onClick = Dt.bind(e), e.onLoad = zt.bind(e), ve || (t.addEventListener("touchstart", _t), ve = !0), Ee(e, "on");
}
function Gt() {
  Ee(this, "off");
}
const Ft = {
  attachEvents: At,
  detachEvents: Gt
}, we = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function Vt() {
  const e = this, {
    realIndex: t,
    initialized: s,
    params: i,
    el: r
  } = e, n = i.breakpoints;
  if (!n || n && Object.keys(n).length === 0)
    return;
  const o = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o)
    return;
  const a = (o in n ? n[o] : void 0) || e.originalParams, d = we(e, i), p = we(e, a), u = i.enabled;
  d && !p ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && p && (r.classList.add(`${i.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((v) => {
    const y = i[v] && i[v].enabled, w = a[v] && a[v].enabled;
    y && !w && e[v].disable(), !y && w && e[v].enable();
  });
  const f = a.direction && a.direction !== i.direction, c = i.loop && (a.slidesPerView !== i.slidesPerView || f);
  f && s && e.changeDirection(), z(e.params, a);
  const T = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev
  }), u && !T ? e.disable() : !u && T && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", a), c && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", a);
}
function Bt(e, t = "window", s) {
  if (!e || t === "container" && !s)
    return;
  let i = !1;
  const r = D(), n = t === "window" ? r.innerHeight : s.clientHeight, o = Object.keys(e).map((l) => {
    if (typeof l == "string" && l.indexOf("@") === 0) {
      const a = parseFloat(l.substr(1));
      return {
        value: n * a,
        point: l
      };
    }
    return {
      value: l,
      point: l
    };
  });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const {
      point: a,
      value: d
    } = o[l];
    t === "window" ? r.matchMedia(`(min-width: ${d}px)`).matches && (i = a) : d <= s.clientWidth && (i = a);
  }
  return i || "max";
}
const Ht = {
  setBreakpoint: Vt,
  getBreakpoint: Bt
};
function Nt(e, t) {
  const s = [];
  return e.forEach((i) => {
    typeof i == "object" ? Object.keys(i).forEach((r) => {
      i[r] && s.push(t + r);
    }) : typeof i == "string" && s.push(t + i);
  }), s;
}
function $t() {
  const e = this, {
    classNames: t,
    params: s,
    rtl: i,
    el: r,
    device: n
  } = e, o = Nt(["initialized", s.direction, {
    "free-mode": e.params.freeMode && s.freeMode.enabled
  }, {
    autoheight: s.autoHeight
  }, {
    rtl: i
  }, {
    grid: s.grid && s.grid.rows > 1
  }, {
    "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
  }, {
    android: n.android
  }, {
    ios: n.ios
  }, {
    "css-mode": s.cssMode
  }, {
    centered: s.cssMode && s.centeredSlides
  }, {
    "watch-progress": s.watchSlidesProgress
  }], s.containerModifierClass);
  t.push(...o), r.classList.add(...t), e.emitContainerClasses();
}
function Yt() {
  const e = this, {
    el: t,
    classNames: s
  } = e;
  t.classList.remove(...s), e.emitContainerClasses();
}
const Wt = {
  addClasses: $t,
  removeClasses: Yt
};
function Xt() {
  const e = this, {
    isLocked: t,
    params: s
  } = e, {
    slidesOffsetBefore: i
  } = s;
  if (i) {
    const r = e.slides.length - 1, n = e.slidesGrid[r] + e.slidesSizesGrid[r] + i * 2;
    e.isLocked = e.size > n;
  } else
    e.isLocked = e.snapGrid.length === 1;
  s.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), s.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
const Rt = {
  checkOverflow: Xt
}, Te = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
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
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
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
  threshold: 5,
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
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopedSlides: null,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
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
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function jt(e, t) {
  return function(i = {}) {
    const r = Object.keys(i)[0], n = i[r];
    if (typeof n != "object" || n === null) {
      z(t, i);
      return;
    }
    if (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && e[r] === !0 && (e[r] = {
      auto: !0
    }), !(r in e && "enabled" in n)) {
      z(t, i);
      return;
    }
    e[r] === !0 && (e[r] = {
      enabled: !0
    }), typeof e[r] == "object" && !("enabled" in e[r]) && (e[r].enabled = !0), e[r] || (e[r] = {
      enabled: !1
    }), z(t, i);
  };
}
const ne = {
  eventsEmitter: We,
  update: tt,
  translate: lt,
  transition: ut,
  slide: Tt,
  loop: xt,
  grabCursor: Ct,
  events: Ft,
  breakpoints: Ht,
  checkOverflow: Rt,
  classes: Wt
}, re = {};
class O {
  constructor(...t) {
    let s, i;
    t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? i = t[0] : [s, i] = t, i || (i = {}), i = z({}, i), s && !i.el && (i.el = s);
    const r = H();
    if (i.el && typeof i.el == "string" && r.querySelectorAll(i.el).length > 1) {
      const a = [];
      return r.querySelectorAll(i.el).forEach((d) => {
        const p = z({}, i, {
          el: d
        });
        a.push(new O(p));
      }), a;
    }
    const n = this;
    n.__swiper__ = !0, n.support = ye(), n.device = Be({
      userAgent: i.userAgent
    }), n.browser = Ne(), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
    const o = {};
    n.modules.forEach((a) => {
      a({
        params: i,
        swiper: n,
        extendParams: jt(i, o),
        on: n.on.bind(n),
        once: n.once.bind(n),
        off: n.off.bind(n),
        emit: n.emit.bind(n)
      });
    });
    const l = z({}, Te, o);
    return n.params = z({}, l, re, i), n.originalParams = z({}, n.params), n.passedParams = z({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach((a) => {
      n.on(a, n.params.on[a]);
    }), n.params && n.params.onAny && n.onAny(n.params.onAny), Object.assign(n, {
      enabled: n.params.enabled,
      el: s,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return n.params.direction === "horizontal";
      },
      isVertical() {
        return n.params.direction === "vertical";
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
      allowSlideNext: n.params.allowSlideNext,
      allowSlidePrev: n.params.allowSlidePrev,
      // Touch Events
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
        focusableElements: n.params.focusableElements,
        // Last click time
        lastClickTime: A(),
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: n.params.allowTouchMove,
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
    }), n.emit("_swiper"), n.params.init && n.init(), n;
  }
  getSlideIndex(t) {
    const {
      slidesEl: s,
      params: i
    } = this, r = V(s, `.${i.slideClass}, swiper-slide`), n = pe(r[0]);
    return pe(t) - n;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(this.slides.filter((s) => s.getAttribute("data-swiper-slide-index") * 1 === t)[0]);
  }
  recalcSlides() {
    const t = this, {
      slidesEl: s,
      params: i
    } = t;
    t.slides = V(s, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
  }
  setProgress(t, s) {
    const i = this;
    t = Math.min(Math.max(t, 0), 1);
    const r = i.minTranslate(), o = (i.maxTranslate() - r) * t + r;
    i.translateTo(o, typeof s > "u" ? 0 : s), i.updateActiveIndex(), i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el)
      return;
    const s = t.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(t.params.containerModifierClass) === 0);
    t.emit("_containerClasses", s.join(" "));
  }
  getSlideClasses(t) {
    const s = this;
    return s.destroyed ? "" : t.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(s.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el)
      return;
    const s = [];
    t.slides.forEach((i) => {
      const r = t.getSlideClasses(i);
      s.push({
        slideEl: i,
        classNames: r
      }), t.emit("_slideClass", i, r);
    }), t.emit("_slideClasses", s);
  }
  slidesPerViewDynamic(t = "current", s = !1) {
    const i = this, {
      params: r,
      slides: n,
      slidesGrid: o,
      slidesSizesGrid: l,
      size: a,
      activeIndex: d
    } = i;
    let p = 1;
    if (r.centeredSlides) {
      let u = n[d].swiperSlideSize, f;
      for (let c = d + 1; c < n.length; c += 1)
        n[c] && !f && (u += n[c].swiperSlideSize, p += 1, u > a && (f = !0));
      for (let c = d - 1; c >= 0; c -= 1)
        n[c] && !f && (u += n[c].swiperSlideSize, p += 1, u > a && (f = !0));
    } else if (t === "current")
      for (let u = d + 1; u < n.length; u += 1)
        (s ? o[u] + l[u] - o[d] < a : o[u] - o[d] < a) && (p += 1);
    else
      for (let u = d - 1; u >= 0; u -= 1)
        o[d] - o[u] < a && (p += 1);
    return p;
  }
  update() {
    const t = this;
    if (!t || t.destroyed)
      return;
    const {
      snapGrid: s,
      params: i
    } = t;
    i.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
      o.complete && ee(t, o);
    }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
    function r() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate, l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let n;
    t.params.freeMode && t.params.freeMode.enabled ? (r(), t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? n = t.slideTo(t.slides.length - 1, 0, !1, !0) : n = t.slideTo(t.activeIndex, 0, !1, !0), n || r()), i.watchOverflow && s !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, s = !0) {
    const i = this, r = i.params.direction;
    return t || (t = r === "horizontal" ? "vertical" : "horizontal"), t === r || t !== "horizontal" && t !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`), i.el.classList.add(`${i.params.containerModifierClass}${t}`), i.emitContainerClasses(), i.params.direction = t, i.slides.forEach((n) => {
      t === "vertical" ? n.style.width = "" : n.style.height = "";
    }), i.emit("changeDirection"), s && i.update()), i;
  }
  changeLanguageDirection(t) {
    const s = this;
    s.rtl && t === "rtl" || !s.rtl && t === "ltr" || (s.rtl = t === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update());
  }
  mount(t) {
    const s = this;
    if (s.mounted)
      return !0;
    let i = t || s.params.el;
    if (typeof i == "string" && (i = document.querySelector(i)), !i)
      return !1;
    i.swiper = s, i.shadowEl && (s.isElement = !0);
    const r = () => `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : V(i, r())[0])();
    return !o && s.params.createElements && (o = ze("div", s.params.wrapperClass), i.append(o), V(i, `.${s.params.slideClass}`).forEach((l) => {
      o.append(l);
    })), Object.assign(s, {
      el: i,
      wrapperEl: o,
      slidesEl: s.isElement ? i : o,
      mounted: !0,
      // RTL
      rtl: i.dir.toLowerCase() === "rtl" || B(i, "direction") === "rtl",
      rtlTranslate: s.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || B(i, "direction") === "rtl"),
      wrongRTL: B(o, "display") === "-webkit-box"
    }), !0;
  }
  init(t) {
    const s = this;
    return s.initialized || s.mount(t) === !1 || (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual.enabled ? s.slideTo(s.params.initialSlide + s.virtual.slidesBefore, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(), s.attachEvents(), [...s.el.querySelectorAll('[loading="lazy"]')].forEach((r) => {
      r.complete ? ee(s, r) : r.addEventListener("load", (n) => {
        ee(s, n.target);
      });
    }), s.initialized = !0, s.emit("init"), s.emit("afterInit")), s;
  }
  destroy(t = !0, s = !0) {
    const i = this, {
      params: r,
      el: n,
      wrapperEl: o,
      slides: l
    } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), s && (i.removeClasses(), n.removeAttribute("style"), o.removeAttribute("style"), l && l.length && l.forEach((a) => {
      a.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((a) => {
      i.off(a);
    }), t !== !1 && (i.el.swiper = null, Ie(i)), i.destroyed = !0), null;
  }
  static extendDefaults(t) {
    z(re, t);
  }
  static get extendedDefaults() {
    return re;
  }
  static get defaults() {
    return Te;
  }
  static installModule(t) {
    O.prototype.__modules__ || (O.prototype.__modules__ = []);
    const s = O.prototype.__modules__;
    typeof t == "function" && s.indexOf(t) < 0 && s.push(t);
  }
  static use(t) {
    return Array.isArray(t) ? (t.forEach((s) => O.installModule(s)), O) : (O.installModule(t), O);
  }
}
Object.keys(ne).forEach((e) => {
  Object.keys(ne[e]).forEach((t) => {
    O.prototype[t] = ne[e][t];
  });
});
O.use([$e, Ye]);
function qt({
  swiper: e,
  extendParams: t,
  on: s,
  emit: i
}) {
  const r = D();
  t({
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
  }), e.mousewheel = {
    enabled: !1
  };
  let n, o = A(), l;
  const a = [];
  function d(m) {
    let b = 0, I = 0, C = 0, P = 0;
    return "detail" in m && (I = m.detail), "wheelDelta" in m && (I = -m.wheelDelta / 120), "wheelDeltaY" in m && (I = -m.wheelDeltaY / 120), "wheelDeltaX" in m && (b = -m.wheelDeltaX / 120), "axis" in m && m.axis === m.HORIZONTAL_AXIS && (b = I, I = 0), C = b * 10, P = I * 10, "deltaY" in m && (P = m.deltaY), "deltaX" in m && (C = m.deltaX), m.shiftKey && !C && (C = P, P = 0), (C || P) && m.deltaMode && (m.deltaMode === 1 ? (C *= 40, P *= 40) : (C *= 800, P *= 800)), C && !b && (b = C < 1 ? -1 : 1), P && !I && (I = P < 1 ? -1 : 1), {
      spinX: b,
      spinY: I,
      pixelX: C,
      pixelY: P
    };
  }
  function p() {
    e.enabled && (e.mouseEntered = !0);
  }
  function u() {
    e.enabled && (e.mouseEntered = !1);
  }
  function f(m) {
    return e.params.mousewheel.thresholdDelta && m.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && A() - o < e.params.mousewheel.thresholdTime ? !1 : m.delta >= 6 && A() - o < 60 ? !0 : (m.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), i("scroll", m.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), i("scroll", m.raw)), o = new r.Date().getTime(), !1);
  }
  function c(m) {
    const h = e.params.mousewheel;
    if (m.direction < 0) {
      if (e.isEnd && !e.params.loop && h.releaseOnEdges)
        return !0;
    } else if (e.isBeginning && !e.params.loop && h.releaseOnEdges)
      return !0;
    return !1;
  }
  function T(m) {
    let h = m, E = !0;
    if (!e.enabled)
      return;
    const x = e.params.mousewheel;
    e.params.cssMode && h.preventDefault();
    let b = e.el;
    e.params.mousewheel.eventsTarget !== "container" && (b = document.querySelector(e.params.mousewheel.eventsTarget));
    const I = b && b.contains(h.target);
    if (!e.mouseEntered && !I && !x.releaseOnEdges)
      return !0;
    h.originalEvent && (h = h.originalEvent);
    let C = 0;
    const P = e.rtlTranslate ? -1 : 1, _ = d(h);
    if (x.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(_.pixelX) > Math.abs(_.pixelY))
          C = -_.pixelX * P;
        else
          return !0;
      else if (Math.abs(_.pixelY) > Math.abs(_.pixelX))
        C = -_.pixelY;
      else
        return !0;
    else
      C = Math.abs(_.pixelX) > Math.abs(_.pixelY) ? -_.pixelX * P : -_.pixelY;
    if (C === 0)
      return !0;
    x.invert && (C = -C);
    let S = e.getTranslate() + C * x.sensitivity;
    if (S >= e.minTranslate() && (S = e.minTranslate()), S <= e.maxTranslate() && (S = e.maxTranslate()), E = e.params.loop ? !0 : !(S === e.minTranslate() || S === e.maxTranslate()), E && e.params.nested && h.stopPropagation(), !e.params.freeMode || !e.params.freeMode.enabled) {
      const g = {
        time: A(),
        delta: Math.abs(C),
        direction: Math.sign(C),
        raw: m
      };
      a.length >= 2 && a.shift();
      const M = a.length ? a[a.length - 1] : void 0;
      if (a.push(g), M ? (g.direction !== M.direction || g.delta > M.delta || g.time > M.time + 150) && f(g) : f(g), c(g))
        return !0;
    } else {
      const g = {
        time: A(),
        delta: Math.abs(C),
        direction: Math.sign(C)
      }, M = l && g.time < l.time + 500 && g.delta <= l.delta && g.direction === l.direction;
      if (!M) {
        l = void 0;
        let k = e.getTranslate() + C * x.sensitivity;
        const N = e.isBeginning, q = e.isEnd;
        if (k >= e.minTranslate() && (k = e.minTranslate()), k <= e.maxTranslate() && (k = e.maxTranslate()), e.setTransition(0), e.setTranslate(k), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!N && e.isBeginning || !q && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
          direction: g.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), e.params.freeMode.sticky) {
          clearTimeout(n), n = void 0, a.length >= 15 && a.shift();
          const $ = a.length ? a[a.length - 1] : void 0, K = a[0];
          if (a.push(g), $ && (g.delta > $.delta || g.direction !== $.direction))
            a.splice(0);
          else if (a.length >= 15 && g.time - K.time < 500 && K.delta - g.delta >= 1 && g.delta <= 6) {
            const Y = C > 0 ? 0.8 : 0.2;
            l = g, a.splice(0), n = j(() => {
              e.slideToClosest(e.params.speed, !0, void 0, Y);
            }, 0);
          }
          n || (n = j(() => {
            l = g, a.splice(0), e.slideToClosest(e.params.speed, !0, void 0, 0.5);
          }, 500));
        }
        if (M || i("scroll", h), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), k === e.minTranslate() || k === e.maxTranslate())
          return !0;
      }
    }
    return h.preventDefault ? h.preventDefault() : h.returnValue = !1, !1;
  }
  function v(m) {
    let h = e.el;
    e.params.mousewheel.eventsTarget !== "container" && (h = document.querySelector(e.params.mousewheel.eventsTarget)), h[m]("mouseenter", p), h[m]("mouseleave", u), h[m]("wheel", T);
  }
  function y() {
    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", T), !0) : e.mousewheel.enabled ? !1 : (v("addEventListener"), e.mousewheel.enabled = !0, !0);
  }
  function w() {
    return e.params.cssMode ? (e.wrapperEl.addEventListener(event, T), !0) : e.mousewheel.enabled ? (v("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1;
  }
  s("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && w(), e.params.mousewheel.enabled && y();
  }), s("destroy", () => {
    e.params.cssMode && y(), e.mousewheel.enabled && w();
  }), Object.assign(e.mousewheel, {
    enable: y,
    disable: w
  });
}
const Kt = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [i, r] of t)
    s[i] = r;
  return s;
};
O.use([qt]);
const Q = 60 * 60 * 24 * 1e3, Ut = {
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
      this.calSwiper = new O(".cal-container", {
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
      const e = this.getMonday(this.currentTime), t = +e - Q * 7, s = +e + Q * 7;
      return [
        new Date(t),
        e,
        new Date(s)
      ];
    }
  },
  methods: {
    yearFilter(e) {
      return `${e.getFullYear()}年`;
    },
    monthFilter(e) {
      return `${e.getMonth() + 1}月`;
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
      const s = new Date(e.getFullYear(), e.getMonth(), 1).getDay() || 7, i = new Date(e.getFullYear(), e.getMonth() + 1, 0), r = i.getDay() || 7, n = new Date(e.getFullYear(), e.getMonth(), 0), o = [], l = [], a = [];
      for (var d = 0; d < s + i.getDate() + (7 - r); d++) {
        if (d < s - 1) {
          o.unshift(
            new Date(e.getFullYear(), e.getMonth() - 1, n.getDate() - d)
          );
          continue;
        }
        if (d > n.getDate() + s) {
          a.push(
            new Date(e.getFullYear(), e.getMonth() + 1, d - (s + i.getDate()) + 1)
          );
          continue;
        }
        if (d > s - 1) {
          l.push(
            new Date(e.getFullYear(), e.getMonth(), d - s + 1)
          );
          continue;
        }
      }
      const p = [...o, ...l, ...a], u = [], f = p.length % 7 === 0 ? p.length / 7 : parseInt(p.length / 7) + 1;
      for (let c = 0; c < f; c++)
        u.push(p.splice(0, 7));
      return u;
    },
    getWeekDates(e) {
      const t = [];
      for (let s = 0; s < 7; s++)
        t.push(new Date(+new Date(e) + s * Q));
      return [t];
    },
    getMonday(e) {
      const t = new Date(e.getTime() - ((e.getDay() || 7) - 1) * Q);
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
    onTimeChange(e) {
      this.activeDate = e, this.$emit("onChange", e);
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
}, Zt = { class: "vue-mobcal-wrapper" }, Jt = { class: "vue-mobcal-head f-acjc t-c" }, Qt = { class: "vue-mobcal-head-left" }, es = { class: "vue-mobcal-head-content f1" }, ts = /* @__PURE__ */ L("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ L("path", { d: "M631.744 774.208l-245.76-292.544 244.224-296.896a38.4 38.4 0 0 0-0.128-47.36c-10.88-13.056-28.48-13.056-39.296 3.328L330.24 454.08a52.992 52.992 0 0 0-8.256 13.312 46.72 46.72 0 0 0 6.208 39.872l264.128 317.76c10.88 9.792 28.608 9.792 39.488-3.264a38.592 38.592 0 0 0-0.128-47.552z" })
], -1), ss = [
  ts
], is = { class: "current-mode" }, ns = /* @__PURE__ */ L("svg", {
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ L("path", { d: "M392.256 774.208l245.76-292.544-244.224-296.896a38.4 38.4 0 0 1 0.128-47.36c10.88-13.056 28.48-13.056 39.296 3.328l260.48 313.344a52.992 52.992 0 0 1 8.256 13.312 46.72 46.72 0 0 1-6.208 39.872L431.616 824.96a27.2 27.2 0 0 1-39.488-3.264 38.592 38.592 0 0 1 0.128-47.552z" })
], -1), rs = [
  ns
], as = { class: "vue-mobcal-head-right" }, ls = { class: "vue-mobcal-body" }, os = { class: "vue-mobcal-page" }, ds = { class: "vue-mobcal-table-head-fixed" }, cs = { class: "cal-container" }, us = { class: "cal-wrapper" }, fs = ["onClick"], ps = { class: "detail" }, hs = /* @__PURE__ */ L("span", { class: "dot" }, null, -1), ms = /* @__PURE__ */ L("span", null, [
  /* @__PURE__ */ L("svg", {
    viewBox: "0 0 1024 1024",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ L("path", { d: "M246.266795 654.304523C234.028248 666.54307 213.828634 666.481405 201.331856 653.984628 189.200556 641.853327 188.691857 621.369793 201.011961 609.049689L480.945257 329.11639C493.183805 316.877843 513.383419 316.939507 525.880196 329.436288 526.327405 329.883494 526.758819 330.342054 527.174378 330.811136 527.652734 331.235987 528.12141 331.677504 528.579625 332.135718L806.999757 610.555848C819.761472 623.317563 819.933222 643.750592 807.436442 656.247369 795.305146 668.37867 774.482874 668.548635 761.744922 655.810682L503.252779 397.318539 246.266795 654.304523Z" })
  ])
], -1), gs = [
  ms
];
function vs(e, t, s, i, r, n) {
  return G(), F("div", Zt, [
    L("div", Jt, [
      L("div", Qt, [
        W(e.$slots, "left")
      ]),
      L("div", es, [
        W(e.$slots, "title", { util: r.util }, () => [
          L("i", {
            onClick: t[0] || (t[0] = ce((...o) => n.onPrev && n.onPrev(...o), ["stop", "prevent"]))
          }, ss),
          L("span", is, U(n.monthFilter(r.currentTime)), 1),
          L("i", {
            onClick: t[1] || (t[1] = ce((...o) => n.onNext && n.onNext(...o), ["stop", "prevent"]))
          }, rs)
        ])
      ]),
      L("div", as, [
        W(e.$slots, "right")
      ])
    ]),
    L("div", ls, [
      L("div", os, [
        L("table", ds, [
          L("thead", null, [
            L("tr", null, [
              (G(), F(X, null, R(7, (o) => L("th", {
                key: `week_${o}`,
                class: "t-c"
              }, [
                W(e.$slots, "week", { day: o }, () => [
                  Pe(U(n.weekFilter(o)), 1)
                ])
              ])), 64))
            ])
          ])
        ]),
        L("div", cs, [
          L("div", us, [
            (G(!0), F(X, null, R(n.slidePages, (o) => (G(), F("div", {
              class: "cal-slide",
              key: o.getTime()
            }, [
              L("table", null, [
                L("thead", null, [
                  L("tr", null, [
                    (G(), F(X, null, R(7, (l) => L("th", {
                      key: `week_${l}`
                    }, U(l), 1)), 64))
                  ])
                ]),
                L("tbody", null, [
                  (G(!0), F(X, null, R(n.getDates(o), (l, a) => (G(), F("tr", { key: a }, [
                    (G(!0), F(X, null, R(l, (d, p) => (G(), F("td", {
                      key: p,
                      onClick: (u) => n.onTimeChange(d, p),
                      class: ue({
                        "is-today": n.isToday(d),
                        "is-active-day": n.isActiveDay(d),
                        "is-work-day": n.isWorkDay(d),
                        "is-other-month": n.isOtherMonth(d) && s.mode === "month"
                      })
                    }, [
                      L("div", ps, [
                        W(e.$slots, "day", {
                          date: d,
                          util: r.util
                        }, () => [
                          L("span", null, U(d.getDate()), 1),
                          hs
                        ])
                      ])
                    ], 10, fs))), 128))
                  ]))), 128))
                ])
              ])
            ]))), 128))
          ])
        ])
      ])
    ]),
    L("div", {
      onClick: t[2] || (t[2] = (o) => n.onChangeMode(!1)),
      class: ue(["vue-mobcal-mode-control t-c", { expand: this.currentMode === "month" }])
    }, gs, 2)
  ]);
}
const le = /* @__PURE__ */ Kt(Ut, [["render", vs]]);
const ws = function(e) {
  e.component("VueMobCal", le);
};
typeof window < "u" && window.Vue && window.Vue.createApp({}).component("VueMobCal", le);
const Ss = {
  version: "1.0.0",
  install: ws,
  VueMobCal: le
};
export {
  le as VueMobCal,
  Ss as default,
  Ss as globalMobCal
};
