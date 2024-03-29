var WOW;
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, i, n, o) {
            return jQuery.easing[jQuery.easing.def](e, t, i, n, o)
        },
        easeInQuad: function(e, t, i, n, o) {
            return n * (t /= o) * t + i
        },
        easeOutQuad: function(e, t, i, n, o) {
            return -n * (t /= o) * (t - 2) + i
        },
        easeInOutQuad: function(e, t, i, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function(e, t, i, n, o) {
            return n * (t /= o) * t * t + i
        },
        easeOutCubic: function(e, t, i, n, o) {
            return n * ((t = t / o - 1) * t * t + 1) + i
        },
        easeInOutCubic: function(e, t, i, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function(e, t, i, n, o) {
            return n * (t /= o) * t * t * t + i
        },
        easeOutQuart: function(e, t, i, n, o) {
            return -n * ((t = t / o - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function(e, t, i, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function(e, t, i, n, o) {
            return n * (t /= o) * t * t * t * t + i
        },
        easeOutQuint: function(e, t, i, n, o) {
            return n * ((t = t / o - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function(e, t, i, n, o) {
            return (t /= o / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function(e, t, i, n, o) {
            return -n * Math.cos(t / o * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(e, t, i, n, o) {
            return n * Math.sin(t / o * (Math.PI / 2)) + i
        },
        easeInOutSine: function(e, t, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * t / o) - 1) + i
        },
        easeInExpo: function(e, t, i, n, o) {
            return 0 == t ? i : n * Math.pow(2, 10 * (t / o - 1)) + i
        },
        easeOutExpo: function(e, t, i, n, o) {
            return t == o ? i + n : n * (1 - Math.pow(2, -10 * t / o)) + i
        },
        easeInOutExpo: function(e, t, i, n, o) {
            return 0 == t ? i : t == o ? i + n : (t /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --t)) + i
        },
        easeInCirc: function(e, t, i, n, o) {
            return -n * (Math.sqrt(1 - (t /= o) * t) - 1) + i
        },
        easeOutCirc: function(e, t, i, n, o) {
            return n * Math.sqrt(1 - (t = t / o - 1) * t) + i
        },
        easeInOutCirc: function(e, t, i, n, o) {
            return (t /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function(e, t, i, n, o) {
            var r = 1.70158,
                a = 0,
                s = n;
            if (0 == t) return i;
            if (1 == (t /= o)) return i + n;
            if (a || (a = .3 * o), s < Math.abs(n)) {
                s = n;
                r = a / 4
            } else r = a / (2 * Math.PI) * Math.asin(n / s);
            return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) + i
        },
        easeOutElastic: function(e, t, i, n, o) {
            var r = 1.70158,
                a = 0,
                s = n;
            if (0 == t) return i;
            if (1 == (t /= o)) return i + n;
            if (a || (a = .3 * o), s < Math.abs(n)) {
                s = n;
                r = a / 4
            } else r = a / (2 * Math.PI) * Math.asin(n / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / a) + n + i
        },
        easeInOutElastic: function(e, t, i, n, o) {
            var r = 1.70158,
                a = 0,
                s = n;
            if (0 == t) return i;
            if (2 == (t /= o / 2)) return i + n;
            if (a || (a = o * (.3 * 1.5)), s < Math.abs(n)) {
                s = n;
                r = a / 4
            } else r = a / (2 * Math.PI) * Math.asin(n / s);
            return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * -.5 + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / a) * .5 + n + i
        },
        easeInBack: function(e, t, i, n, o, r) {
            return void 0 == r && (r = 1.70158), n * (t /= o) * t * ((r + 1) * t - r) + i
        },
        easeOutBack: function(e, t, i, n, o, r) {
            return void 0 == r && (r = 1.70158), n * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + i
        },
        easeInOutBack: function(e, t, i, n, o, r) {
            return void 0 == r && (r = 1.70158), (t /= o / 2) < 1 ? n / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + i : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + i
        },
        easeInBounce: function(e, t, i, n, o) {
            return n - jQuery.easing.easeOutBounce(e, o - t, 0, n, o) + i
        },
        easeOutBounce: function(e, t, i, n, o) {
            return (t /= o) < 1 / 2.75 ? n * (7.5625 * t * t) + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function(e, t, i, n, o) {
            return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, n, o) + .5 * n + i
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
        function t(e) {
            var t = e.length,
                n = i.type(e);
            return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var i = function(e, t) {
                return new i.fn.init(e, t)
            };
            i.isWindow = function(e) {
                return null != e && e == e.window
            }, i.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[a.call(e)] || "object" : typeof e
            }, i.isArray = Array.isArray || function(e) {
                return "array" === i.type(e)
            }, i.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e)) return !1;
                try {
                    if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || r.call(e, t)
            }, i.each = function(e, i, n) {
                var o = 0,
                    r = e.length,
                    a = t(e);
                if (n) {
                    if (a)
                        for (; r > o && !1 !== i.apply(e[o], n); o++);
                    else
                        for (o in e)
                            if (!1 === i.apply(e[o], n)) break
                } else if (a)
                    for (; r > o && !1 !== i.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === i.call(e[o], o, e[o])) break; return e
            }, i.data = function(e, t, o) {
                if (void 0 === o) {
                    var r = (a = e[i.expando]) && n[a];
                    if (void 0 === t) return r;
                    if (r && t in r) return r[t]
                } else if (void 0 !== t) {
                    var a = e[i.expando] || (e[i.expando] = ++i.uuid);
                    return n[a] = n[a] || {}, n[a][t] = o, o
                }
            }, i.removeData = function(e, t) {
                var o = e[i.expando],
                    r = o && n[o];
                r && i.each(t, function(e, t) {
                    delete r[t]
                })
            }, i.extend = function() {
                var e, t, n, o, r, a, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== i.type(s) && (s = {}), l === c && (s = this, l--); c > l; l++)
                    if (null != (r = arguments[l]))
                        for (o in r) e = s[o], s !== (n = r[o]) && (u && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1, a = e && i.isArray(e) ? e : []) : a = e && i.isPlainObject(e) ? e : {}, s[o] = i.extend(u, a, n)) : void 0 !== n && (s[o] = n));
                return s
            }, i.queue = function(e, n, o) {
                if (e) {
                    n = (n || "fx") + "queue";
                    var r = i.data(e, n);
                    return o ? (!r || i.isArray(o) ? r = i.data(e, n, function(e, i) {
                        var n = i || [];
                        return null != e && (t(Object(e)) ? function(e, t) {
                            for (var i = +t.length, n = 0, o = e.length; i > n;) e[o++] = t[n++];
                            if (i != i)
                                for (; void 0 !== t[n];) e[o++] = t[n++];
                            e.length = o
                        }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
                    }(o)) : r.push(o), r) : r || []
                }
            }, i.dequeue = function(e, t) {
                i.each(e.nodeType ? [e] : e, function(e, n) {
                    t = t || "fx";
                    var o = i.queue(n, t),
                        r = o.shift();
                    "inprogress" === r && (r = o.shift()), r && ("fx" === t && o.unshift("inprogress"), r.call(n, function() {
                        i.dequeue(n, t)
                    }))
                })
            }, i.fn = i.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        n = this.offset(),
                        o = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : i(e).offset();
                    return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: n.top - o.top,
                        left: n.left - o.left
                    }
                }
            };
            var n = {};
            i.expando = "velocity" + (new Date).getTime(), i.uuid = 0;
            for (var o = {}, r = o.hasOwnProperty, a = o.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) o["[object " + s[l] + "]"] = s[l].toLowerCase();
            i.fn.init.prototype = i.fn, e.Velocity = {
                Utilities: i
            }
        }
    }(window), function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, i, n) {
            function o(e) {
                return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e
            }

            function r(e) {
                var t = u.data(e, "velocity");
                return null === t ? n : t
            }

            function a(e, i, n, o) {
                function r(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function a(e, t) {
                    return 3 * t - 6 * e
                }

                function s(e) {
                    return 3 * e
                }

                function l(e, t, i) {
                    return ((r(t, i) * e + a(t, i)) * e + s(t)) * e
                }

                function c(e, t, i) {
                    return 3 * r(t, i) * e * e + 2 * a(t, i) * e + s(t)
                }

                function u(t, i) {
                    for (var o = 0; h > o; ++o) {
                        var r = c(i, e, n);
                        if (0 === r) return i;
                        i -= (l(i, e, n) - t) / r
                    }
                    return i
                }

                function d(t, i, o) {
                    var r, a, s = 0;
                    do {
                        (r = l(a = i + (o - i) / 2, e, n) - t) > 0 ? o = a : i = a
                    } while (Math.abs(r) > m && ++s < v);
                    return a
                }

                function p() {
                    k = !0, (e != i || n != o) && function() {
                        for (var t = 0; g > t; ++t) x[t] = l(t * y, e, n)
                    }()
                }
                var h = 4,
                    f = .001,
                    m = 1e-7,
                    v = 10,
                    g = 11,
                    y = 1 / (g - 1),
                    b = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
                var x = b ? new Float32Array(g) : new Array(g),
                    k = !1,
                    T = function(t) {
                        return k || p(), e === i && n === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(function(t) {
                            for (var i = 0, o = 1, r = g - 1; o != r && x[o] <= t; ++o) i += y;
                            var a = i + (t - x[--o]) / (x[o + 1] - x[o]) * y,
                                s = c(a, e, n);
                            return s >= f ? u(t, a) : 0 == s ? a : d(t, i, i + y)
                        }(t), i, o)
                    };
                T.getControlPoints = function() {
                    return [{
                        x: e,
                        y: i
                    }, {
                        x: n,
                        y: o
                    }]
                };
                var C = "generateBezier(" + [e, i, n, o] + ")";
                return T.toString = function() {
                    return C
                }, T
            }

            function s(e, t) {
                var i = e;
                return h.isString(e) ? g.Easings[e] || (i = !1) : i = h.isArray(e) && 1 === e.length ? function(e) {
                    return function(t) {
                        return Math.round(t * e) * (1 / e)
                    }
                }.apply(null, e) : h.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : !(!h.isArray(e) || 4 !== e.length) && a.apply(null, e), !1 === i && (i = g.Easings[g.defaults.easing] ? g.defaults.easing : v), i
            }

            function l(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        i = g.State.calls.length;
                    i > 1e4 && (g.State.calls = function(e) {
                        for (var t = -1, i = e ? e.length : 0, n = []; ++t < i;) {
                            var o = e[t];
                            o && n.push(o)
                        }
                        return n
                    }(g.State.calls));
                    for (var o = 0; i > o; o++)
                        if (g.State.calls[o]) {
                            var a = g.State.calls[o],
                                s = a[0],
                                d = a[2],
                                p = a[3],
                                f = !!p,
                                m = null;
                            p || (p = g.State.calls[o][3] = t - 16);
                            for (var v = Math.min((t - p) / d.duration, 1), y = 0, w = s.length; w > y; y++) {
                                var k = s[y],
                                    T = k.element;
                                if (r(T)) {
                                    var C = !1;
                                    if (d.display !== n && null !== d.display && "none" !== d.display) {
                                        if ("flex" === d.display) {
                                            u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                                b.setPropertyValue(T, "display", t)
                                            })
                                        }
                                        b.setPropertyValue(T, "display", d.display)
                                    }
                                    for (var S in d.visibility !== n && "hidden" !== d.visibility && b.setPropertyValue(T, "visibility", d.visibility), k)
                                        if ("element" !== S) {
                                            var E, I = k[S],
                                                A = h.isString(I.easing) ? g.Easings[I.easing] : I.easing;
                                            if (1 === v) E = I.endValue;
                                            else {
                                                var P = I.endValue - I.startValue;
                                                if (E = I.startValue + P * A(v, d, P), !f && E === I.currentValue) continue
                                            }
                                            if (I.currentValue = E, "tween" === S) m = E;
                                            else {
                                                if (b.Hooks.registered[S]) {
                                                    var M = b.Hooks.getRoot(S),
                                                        D = r(T).rootPropertyValueCache[M];
                                                    D && (I.rootPropertyValue = D)
                                                }
                                                var O = b.setPropertyValue(T, S, I.currentValue + (0 === parseFloat(E) ? "" : I.unitType), I.rootPropertyValue, I.scrollData);
                                                b.Hooks.registered[S] && (r(T).rootPropertyValueCache[M] = b.Normalizations.registered[M] ? b.Normalizations.registered[M]("extract", null, O[1]) : O[1]), "transform" === O[0] && (C = !0)
                                            }
                                        }
                                    d.mobileHA && r(T).transformCache.translate3d === n && (r(T).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && b.flushTransformCache(T)
                                }
                            }
                            d.display !== n && "none" !== d.display && (g.State.calls[o][2].display = !1), d.visibility !== n && "hidden" !== d.visibility && (g.State.calls[o][2].visibility = !1), d.progress && d.progress.call(a[1], a[1], v, Math.max(0, p + d.duration - t), p, m), 1 === v && c(o)
                        }
                }
                g.State.isTicking && x(l)
            }

            function c(e, t) {
                if (!g.State.calls[e]) return !1;
                for (var i = g.State.calls[e][0], o = g.State.calls[e][1], a = g.State.calls[e][2], s = g.State.calls[e][4], l = !1, c = 0, d = i.length; d > c; c++) {
                    var p = i[c].element;
                    if (t || a.loop || ("none" === a.display && b.setPropertyValue(p, "display", a.display), "hidden" === a.visibility && b.setPropertyValue(p, "visibility", a.visibility)), !0 !== a.loop && (u.queue(p)[1] === n || !/\.velocityQueueEntryFlag/i.test(u.queue(p)[1])) && r(p)) {
                        r(p).isAnimating = !1, r(p).rootPropertyValueCache = {};
                        var h = !1;
                        u.each(b.Lists.transforms3D, function(e, t) {
                            var i = /^scale/.test(t) ? 1 : 0,
                                o = r(p).transformCache[t];
                            r(p).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(o) && (h = !0, delete r(p).transformCache[t])
                        }), a.mobileHA && (h = !0, delete r(p).transformCache.translate3d), h && b.flushTransformCache(p), b.Values.removeClass(p, "velocity-animating")
                    }
                    if (!t && a.complete && !a.loop && c === d - 1) try {
                        a.complete.call(o, o)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    s && !0 !== a.loop && s(o), r(p) && !0 === a.loop && !t && (u.each(r(p).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), g(p, "reverse", {
                        loop: !0,
                        delay: a.delay
                    })), !1 !== a.queue && u.dequeue(p, a.queue)
                }
                g.State.calls[e] = !1;
                for (var f = 0, m = g.State.calls.length; m > f; f++)
                    if (!1 !== g.State.calls[f]) {
                        l = !0;
                        break
                    }!1 === l && (g.State.isTicking = !1, delete g.State.calls, g.State.calls = [])
            }
            var u, d = function() {
                    if (i.documentMode) return i.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = i.createElement("div");
                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return n
                }(),
                p = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var i, n = (new Date).getTime();
                        return i = Math.max(0, 16 - (n - e)), e = n + i, setTimeout(function() {
                            t(n + i)
                        }, i)
                    }
                }(),
                h = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                f = !1;
            if (e.fn && e.fn.jquery ? (u = e, f = !0) : u = t.Velocity.Utilities, 8 >= d && !f) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= d)) {
                var m = 400,
                    v = "swing",
                    g = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: i.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: u,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: m,
                            easing: v,
                            begin: n,
                            complete: n,
                            progress: n,
                            display: n,
                            visibility: n,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(e) {
                            u.data(e, "velocity", {
                                isSVG: h.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                t.pageYOffset !== n ? (g.State.scrollAnchor = t, g.State.scrollPropertyLeft = "pageXOffset", g.State.scrollPropertyTop = "pageYOffset") : (g.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body, g.State.scrollPropertyLeft = "scrollLeft", g.State.scrollPropertyTop = "scrollTop");
                var y = function() {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, i, n) {
                        var o = {
                            x: t.x + n.dx * i,
                            v: t.v + n.dv * i,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: o.v,
                            dv: e(o)
                        }
                    }

                    function i(i, n) {
                        var o = {
                                dx: i.v,
                                dv: e(i)
                            },
                            r = t(i, .5 * n, o),
                            a = t(i, .5 * n, r),
                            s = t(i, n, a),
                            l = 1 / 6 * (o.dx + 2 * (r.dx + a.dx) + s.dx),
                            c = 1 / 6 * (o.dv + 2 * (r.dv + a.dv) + s.dv);
                        return i.x = i.x + l * n, i.v = i.v + c * n, i
                    }
                    return function e(t, n, o) {
                        var r, a, s, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            c = [0],
                            u = 0;
                        for (t = parseFloat(t) || 500, n = parseFloat(n) || 20, o = o || null, l.tension = t, l.friction = n, (r = null !== o) ? a = (u = e(t, n)) / o * .016 : a = .016; s = i(s || l, a), c.push(1 + s.x), u += 16, Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4;);
                        return r ? function(e) {
                            return c[e * (c.length - 1) | 0]
                        } : u
                    }
                }();
                g.Easings = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function(e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, u.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(e, t) {
                    g.Easings[t[0]] = a.apply(null, t[1])
                });
                var b = g.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var e = 0; e < b.Lists.colors.length; e++) {
                                var t = "color" === b.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                            }
                            var i, n, o;
                            if (d)
                                for (i in b.Hooks.templates) {
                                    o = (n = b.Hooks.templates[i])[0].split(" ");
                                    var r = n[1].match(b.RegEx.valueSplit);
                                    "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), b.Hooks.templates[i] = [o.join(" "), r.join(" ")])
                                }
                            for (i in b.Hooks.templates)
                                for (var e in o = (n = b.Hooks.templates[i])[0].split(" ")) {
                                    var a = i + o[e],
                                        s = e;
                                    b.Hooks.registered[a] = [i, s]
                                }
                        },
                        getRoot: function(e) {
                            var t = b.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function(e, t) {
                            return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]), t
                        },
                        extractValue: function(e, t) {
                            var i = b.Hooks.registered[e];
                            if (i) {
                                var n = i[0],
                                    o = i[1];
                                return (t = b.Hooks.cleanRootPropertyValue(n, t)).toString().match(b.RegEx.valueSplit)[o]
                            }
                            return t
                        },
                        injectValue: function(e, t, i) {
                            var n = b.Hooks.registered[e];
                            if (n) {
                                var o, r = n[0],
                                    a = n[1];
                                return (o = (i = b.Hooks.cleanRootPropertyValue(r, i)).toString().match(b.RegEx.valueSplit))[a] = t, o.join(" ")
                            }
                            return i
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, i) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var n;
                                        return b.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : n = (n = i.toString().match(b.RegEx.valueUnwrap)) ? n[1].replace(/,(\s+)?/g, " ") : i, n;
                                    case "inject":
                                        return "rect(" + i + ")"
                                }
                            },
                            blur: function(e, t, i) {
                                switch (e) {
                                    case "name":
                                        return g.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var n = parseFloat(i);
                                        if (!n && 0 !== n) {
                                            var o = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            n = o ? o[1] : 0
                                        }
                                        return n;
                                    case "inject":
                                        return parseFloat(i) ? "blur(" + i + ")" : "none"
                                }
                            },
                            opacity: function(e, t, i) {
                                if (8 >= d) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return n ? n[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return i
                                }
                            }
                        },
                        register: function() {
                            9 >= d || g.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                            for (var e = 0; e < b.Lists.transformsBase.length; e++) ! function() {
                                var t = b.Lists.transformsBase[e];
                                b.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return r(i) === n || r(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : r(i).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var a = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    a = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    g.State.isAndroid && r(i).transformCache[t] === n && 1 > o && (o = 1), a = !/(\d)$/i.test(o);
                                                    break;
                                                case "skew":
                                                    a = !/(deg|\d)$/i.test(o);
                                                    break;
                                                case "rotate":
                                                    a = !/(deg|\d)$/i.test(o)
                                            }
                                            return a || (r(i).transformCache[t] = "(" + o + ")"), r(i).transformCache[t]
                                    }
                                }
                            }();
                            for (e = 0; e < b.Lists.colors.length; e++) ! function() {
                                var t = b.Lists.colors[e];
                                b.Normalizations.registered[t] = function(e, i, o) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var r;
                                            if (b.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o;
                                            else {
                                                var a, s = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(o) ? a = s[o] !== n ? s[o] : s.black : b.RegEx.isHex.test(o) ? a = "rgb(" + b.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = s.black), r = (a || o).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= d || 3 !== r.split(" ").length || (r += " 1"), r;
                                        case "inject":
                                            return 8 >= d ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, function(e, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function(e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (d || g.State.isAndroid && !g.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function(e) {
                            if (g.State.prefixMatches[e]) return [g.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                                var o;
                                if (o = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                                        return e.toUpperCase()
                                    }), h.isString(g.State.prefixElement.style[o])) return g.State.prefixMatches[e] = o, [o, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            var t;
                            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
                                return t + t + i + i + n + n
                            }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function(e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function(e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function(e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(e, i, o, a) {
                        function s(e, i) {
                            function o() {
                                p && b.setPropertyValue(e, "display", "none")
                            }
                            var l = 0;
                            if (8 >= d) l = u.css(e, i);
                            else {
                                var c, p = !1;
                                if (/^(width|height)$/.test(i) && 0 === b.getPropertyValue(e, "display") && (p = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !a) {
                                    if ("height" === i && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var h = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                        return o(), h
                                    }
                                    if ("width" === i && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var f = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                        return o(), f
                                    }
                                }
                                c = r(e) === n ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : r(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === i && (i = "borderTopColor"), ("" === (l = 9 === d && "filter" === i ? c.getPropertyValue(i) : c[i]) || null === l) && (l = e.style[i]), o()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                                var m = s(e, "position");
                                ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = u(e).position()[i] + "px")
                            }
                            return l
                        }
                        var l;
                        if (b.Hooks.registered[i]) {
                            var c = i,
                                p = b.Hooks.getRoot(c);
                            o === n && (o = b.getPropertyValue(e, b.Names.prefixCheck(p)[0])), b.Normalizations.registered[p] && (o = b.Normalizations.registered[p]("extract", e, o)), l = b.Hooks.extractValue(c, o)
                        } else if (b.Normalizations.registered[i]) {
                            var h, f;
                            "transform" !== (h = b.Normalizations.registered[i]("name", e)) && (f = s(e, b.Names.prefixCheck(h)[0]), b.Values.isCSSNullValue(f) && b.Hooks.templates[i] && (f = b.Hooks.templates[i][1])), l = b.Normalizations.registered[i]("extract", e, f)
                        }
                        if (!/^[\d-]/.test(l))
                            if (r(e) && r(e).isSVG && b.Names.SVGAttribute(i))
                                if (/^(height|width)$/i.test(i)) try {
                                    l = e.getBBox()[i]
                                } catch (e) {
                                    l = 0
                                } else l = e.getAttribute(i);
                                else l = s(e, b.Names.prefixCheck(i)[0]);
                        return b.Values.isCSSNullValue(l) && (l = 0), g.debug >= 2 && console.log("Get " + i + ": " + l), l
                    },
                    setPropertyValue: function(e, i, n, o, a) {
                        var s = i;
                        if ("scroll" === i) a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? t.scrollTo(n, a.alternateValue) : t.scrollTo(a.alternateValue, n);
                        else if (b.Normalizations.registered[i] && "transform" === b.Normalizations.registered[i]("name", e)) b.Normalizations.registered[i]("inject", e, n), s = "transform", n = r(e).transformCache[i];
                        else {
                            if (b.Hooks.registered[i]) {
                                var l = i,
                                    c = b.Hooks.getRoot(i);
                                o = o || b.getPropertyValue(e, c), n = b.Hooks.injectValue(l, n, o), i = c
                            }
                            if (b.Normalizations.registered[i] && (n = b.Normalizations.registered[i]("inject", e, n), i = b.Normalizations.registered[i]("name", e)), s = b.Names.prefixCheck(i)[0], 8 >= d) try {
                                e.style[s] = n
                            } catch (e) {
                                g.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                            } else r(e) && r(e).isSVG && b.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[s] = n;
                            g.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                        }
                        return [s, n]
                    },
                    flushTransformCache: function(e) {
                        function t(t) {
                            return parseFloat(b.getPropertyValue(e, t))
                        }
                        var i = "";
                        if ((d || g.State.isAndroid && !g.State.isChrome) && r(e).isSVG) {
                            var n = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            u.each(r(e).transformCache, function(e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (i += e + "(" + n[e].join(" ") + ") ", delete n[e])
                            })
                        } else {
                            var o, a;
                            u.each(r(e).transformCache, function(t) {
                                return o = r(e).transformCache[t], "transformPerspective" === t ? (a = o, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(i += t + o + " "))
                            }), a && (i = "perspective" + a + " " + i)
                        }
                        b.setPropertyValue(e, "transform", i)
                    }
                };
                b.Hooks.register(), b.Normalizations.register(), g.hook = function(e, t, i) {
                    var a = n;
                    return e = o(e), u.each(e, function(e, o) {
                        if (r(o) === n && g.init(o), i === n) a === n && (a = g.CSS.getPropertyValue(o, t));
                        else {
                            var s = g.CSS.setPropertyValue(o, t, i);
                            "transform" === s[0] && g.CSS.flushTransformCache(o), a = s
                        }
                    }), a
                };
                var w = function() {
                    function e() {
                        return d ? I.promise || null : p
                    }

                    function a() {
                        function e(e) {
                            function p(e, t) {
                                var i = n,
                                    o = n,
                                    r = n;
                                return h.isArray(e) ? (i = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? r = e[1] : (h.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (o = t ? e[1] : s(e[1], c.duration), e[2] !== n && (r = e[2]))) : i = e, t || (o = o || c.easing), h.isFunction(i) && (i = i.call(a, C, T)), h.isFunction(r) && (r = r.call(a, C, T)), [i || 0, o, r]
                            }

                            function f(e, t) {
                                var i, n;
                                return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                    return i = e, ""
                                }), i || (i = b.Values.getUnitType(e)), [n, i]
                            }

                            function m() {
                                var e = {
                                        myParent: a.parentNode || i.body,
                                        position: b.getPropertyValue(a, "position"),
                                        fontSize: b.getPropertyValue(a, "fontSize")
                                    },
                                    n = e.position === _.lastPosition && e.myParent === _.lastParent,
                                    o = e.fontSize === _.lastFontSize;
                                _.lastParent = e.myParent, _.lastPosition = e.position, _.lastFontSize = e.fontSize;
                                var s = 100,
                                    l = {};
                                if (o && n) l.emToPx = _.lastEmToPx, l.percentToPxWidth = _.lastPercentToPxWidth, l.percentToPxHeight = _.lastPercentToPxHeight;
                                else {
                                    var c = r(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                    g.init(c), e.myParent.appendChild(c), u.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                        g.CSS.setPropertyValue(c, t, "hidden")
                                    }), g.CSS.setPropertyValue(c, "position", e.position), g.CSS.setPropertyValue(c, "fontSize", e.fontSize), g.CSS.setPropertyValue(c, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                        g.CSS.setPropertyValue(c, t, s + "%")
                                    }), g.CSS.setPropertyValue(c, "paddingLeft", s + "em"), l.percentToPxWidth = _.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(c, "width", null, !0)) || 1) / s, l.percentToPxHeight = _.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(c, "height", null, !0)) || 1) / s, l.emToPx = _.lastEmToPx = (parseFloat(b.getPropertyValue(c, "paddingLeft")) || 1) / s, e.myParent.removeChild(c)
                                }
                                return null === _.remToPx && (_.remToPx = parseFloat(b.getPropertyValue(i.body, "fontSize")) || 16), null === _.vwToPx && (_.vwToPx = parseFloat(t.innerWidth) / 100, _.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = _.remToPx, l.vwToPx = _.vwToPx, l.vhToPx = _.vhToPx, g.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a), l
                            }
                            if (c.begin && 0 === C) try {
                                c.begin.call(v, v)
                            } catch (e) {
                                setTimeout(function() {
                                    throw e
                                }, 1)
                            }
                            if ("scroll" === E) {
                                var w, k, S, A = /^x$/i.test(c.axis) ? "Left" : "Top",
                                    P = parseFloat(c.offset) || 0;
                                c.container ? h.isWrapped(c.container) || h.isNode(c.container) ? (c.container = c.container[0] || c.container, S = (w = c.container["scroll" + A]) + u(a).position()[A.toLowerCase()] + P) : c.container = null : (w = g.State.scrollAnchor[g.State["scrollProperty" + A]], k = g.State.scrollAnchor[g.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], S = u(a).offset()[A.toLowerCase()] + P), d = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: w,
                                        currentValue: w,
                                        endValue: S,
                                        unitType: "",
                                        easing: c.easing,
                                        scrollData: {
                                            container: c.container,
                                            direction: A,
                                            alternateValue: k
                                        }
                                    },
                                    element: a
                                }, g.debug && console.log("tweensContainer (scroll): ", d.scroll, a)
                            } else if ("reverse" === E) {
                                if (!r(a).tweensContainer) return void u.dequeue(a, c.queue);
                                "none" === r(a).opts.display && (r(a).opts.display = "auto"), "hidden" === r(a).opts.visibility && (r(a).opts.visibility = "visible"), r(a).opts.loop = !1, r(a).opts.begin = null, r(a).opts.complete = null, x.easing || delete c.easing, x.duration || delete c.duration, c = u.extend({}, r(a).opts, c);
                                var M = u.extend(!0, {}, r(a).tweensContainer);
                                for (var D in M)
                                    if ("element" !== D) {
                                        var O = M[D].startValue;
                                        M[D].startValue = M[D].currentValue = M[D].endValue, M[D].endValue = O, h.isEmptyObject(x) || (M[D].easing = c.easing), g.debug && console.log("reverse tweensContainer (" + D + "): " + JSON.stringify(M[D]), a)
                                    }
                                d = M
                            } else if ("start" === E) {
                                for (var L in r(a).tweensContainer && !0 === r(a).isAnimating && (M = r(a).tweensContainer), u.each(y, function(e, t) {
                                        if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                            var i = p(t, !0),
                                                o = i[0],
                                                r = i[1],
                                                a = i[2];
                                            if (b.RegEx.isHex.test(o)) {
                                                for (var s = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(o), c = a ? b.Values.hexToRgb(a) : n, u = 0; u < s.length; u++) {
                                                    var d = [l[u]];
                                                    r && d.push(r), c !== n && d.push(c[u]), y[e + s[u]] = d
                                                }
                                                delete y[e]
                                            }
                                        }
                                    }), y) {
                                    var $ = p(y[L]),
                                        Y = $[0],
                                        V = $[1],
                                        F = $[2];
                                    L = b.Names.camelCase(L);
                                    var H = b.Hooks.getRoot(L),
                                        j = !1;
                                    if (r(a).isSVG || "tween" === H || !1 !== b.Names.prefixCheck(H)[1] || b.Normalizations.registered[H] !== n) {
                                        (c.display !== n && null !== c.display && "none" !== c.display || c.visibility !== n && "hidden" !== c.visibility) && /opacity|filter/.test(L) && !F && 0 !== Y && (F = 0), c._cacheValues && M && M[L] ? (F === n && (F = M[L].endValue + M[L].unitType), j = r(a).rootPropertyValueCache[H]) : b.Hooks.registered[L] ? F === n ? (j = b.getPropertyValue(a, H), F = b.getPropertyValue(a, L, j)) : j = b.Hooks.templates[H][1] : F === n && (F = b.getPropertyValue(a, L));
                                        var W, N, X, z = !1;
                                        if (F = (W = f(L, F))[0], X = W[1], Y = (W = f(L, Y))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                return z = t, ""
                                            }), N = W[1], F = parseFloat(F) || 0, Y = parseFloat(Y) || 0, "%" === N && (/^(fontSize|lineHeight)$/.test(L) ? (Y /= 100, N = "em") : /^scale/.test(L) ? (Y /= 100, N = "") : /(Red|Green|Blue)$/i.test(L) && (Y = Y / 100 * 255, N = "")), /[\/*]/.test(z)) N = X;
                                        else if (X !== N && 0 !== F)
                                            if (0 === Y) N = X;
                                            else {
                                                o = o || m();
                                                var B = /margin|padding|left|right|width|text|word|letter/i.test(L) || /X$/.test(L) || "x" === L ? "x" : "y";
                                                switch (X) {
                                                    case "%":
                                                        F *= "x" === B ? o.percentToPxWidth : o.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        F *= o[X + "ToPx"]
                                                }
                                                switch (N) {
                                                    case "%":
                                                        F *= 1 / ("x" === B ? o.percentToPxWidth : o.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        F *= 1 / o[N + "ToPx"]
                                                }
                                            }
                                        switch (z) {
                                            case "+":
                                                Y = F + Y;
                                                break;
                                            case "-":
                                                Y = F - Y;
                                                break;
                                            case "*":
                                                Y *= F;
                                                break;
                                            case "/":
                                                Y = F / Y
                                        }
                                        d[L] = {
                                            rootPropertyValue: j,
                                            startValue: F,
                                            currentValue: F,
                                            endValue: Y,
                                            unitType: N,
                                            easing: V
                                        }, g.debug && console.log("tweensContainer (" + L + "): " + JSON.stringify(d[L]), a)
                                    } else g.debug && console.log("Skipping [" + H + "] due to a lack of browser support.")
                                }
                                d.element = a
                            }
                            d.element && (b.Values.addClass(a, "velocity-animating"), R.push(d), "" === c.queue && (r(a).tweensContainer = d, r(a).opts = c), r(a).isAnimating = !0, C === T - 1 ? (g.State.calls.push([R, v, c, null, I.resolver]), !1 === g.State.isTicking && (g.State.isTicking = !0, l())) : C++)
                        }
                        var o, a = this,
                            c = u.extend({}, g.defaults, x),
                            d = {};
                        switch (r(a) === n && g.init(a), parseFloat(c.delay) && !1 !== c.queue && u.queue(a, c.queue, function(e) {
                            g.velocityQueueEntryFlag = !0, r(a).delayTimer = {
                                setTimeout: setTimeout(e, parseFloat(c.delay)),
                                next: e
                            }
                        }), c.duration.toString().toLowerCase()) {
                            case "fast":
                                c.duration = 200;
                                break;
                            case "normal":
                                c.duration = m;
                                break;
                            case "slow":
                                c.duration = 600;
                                break;
                            default:
                                c.duration = parseFloat(c.duration) || 1
                        }!1 !== g.mock && (!0 === g.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(g.mock) || 1, c.delay *= parseFloat(g.mock) || 1)), c.easing = s(c.easing, c.duration), c.begin && !h.isFunction(c.begin) && (c.begin = null), c.progress && !h.isFunction(c.progress) && (c.progress = null), c.complete && !h.isFunction(c.complete) && (c.complete = null), c.display !== n && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = g.CSS.Values.getDisplayType(a))), c.visibility !== n && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && g.State.isMobile && !g.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(e, c.delay) : e() : u.queue(a, c.queue, function(t, i) {
                            return !0 === i ? (I.promise && I.resolver(v), !0) : (g.velocityQueueEntryFlag = !0, void e())
                        }), "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(a)[0] || u.dequeue(a)
                    }
                    var d, p, f, v, y, x, k = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
                    if (h.isWrapped(this) ? (d = !1, f = 0, v = this, p = this) : (d = !0, f = 1, v = k ? arguments[0].elements || arguments[0].e : arguments[0]), v = o(v)) {
                        k ? (y = arguments[0].properties || arguments[0].p, x = arguments[0].options || arguments[0].o) : (y = arguments[f], x = arguments[f + 1]);
                        var T = v.length,
                            C = 0;
                        if (!/^(stop|finish)$/i.test(y) && !u.isPlainObject(x)) {
                            x = {};
                            for (var S = f + 1; S < arguments.length; S++) h.isArray(arguments[S]) || !/^(fast|normal|slow)$/i.test(arguments[S]) && !/^\d/.test(arguments[S]) ? h.isString(arguments[S]) || h.isArray(arguments[S]) ? x.easing = arguments[S] : h.isFunction(arguments[S]) && (x.complete = arguments[S]) : x.duration = arguments[S]
                        }
                        var E, I = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (d && g.Promise && (I.promise = new g.Promise(function(e, t) {
                            I.resolver = e, I.rejecter = t
                        })), y) {
                            case "scroll":
                                E = "scroll";
                                break;
                            case "reverse":
                                E = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                u.each(v, function(e, t) {
                                    r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer)
                                });
                                var A = [];
                                return u.each(g.State.calls, function(e, t) {
                                    t && u.each(t[1], function(i, o) {
                                        var a = x === n ? "" : x;
                                        return !0 !== a && t[2].queue !== a && (x !== n || !1 !== t[2].queue) || void u.each(v, function(i, n) {
                                            n === o && ((!0 === x || h.isString(x)) && (u.each(u.queue(n, h.isString(x) ? x : ""), function(e, t) {
                                                h.isFunction(t) && t(null, !0)
                                            }), u.queue(n, h.isString(x) ? x : "", [])), "stop" === y ? (r(n) && r(n).tweensContainer && !1 !== a && u.each(r(n).tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), A.push(e)) : "finish" === y && (t[2].duration = 1))
                                        })
                                    })
                                }), "stop" === y && (u.each(A, function(e, t) {
                                    c(t, !0)
                                }), I.promise && I.resolver(v)), e();
                            default:
                                if (!u.isPlainObject(y) || h.isEmptyObject(y)) {
                                    if (h.isString(y) && g.Redirects[y]) {
                                        var P = (L = u.extend({}, x)).duration,
                                            M = L.delay || 0;
                                        return !0 === L.backwards && (v = u.extend(!0, [], v).reverse()), u.each(v, function(e, t) {
                                            parseFloat(L.stagger) ? L.delay = M + parseFloat(L.stagger) * e : h.isFunction(L.stagger) && (L.delay = M + L.stagger.call(t, e, T)), L.drag && (L.duration = parseFloat(P) || (/^(callout|transition)/.test(y) ? 1e3 : m), L.duration = Math.max(L.duration * (L.backwards ? 1 - e / T : (e + 1) / T), .75 * L.duration, 200)), g.Redirects[y].call(t, t, L || {}, e, T, v, I.promise ? I : n)
                                        }), e()
                                    }
                                    var D = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return I.promise ? I.rejecter(new Error(D)) : console.log(D), e()
                                }
                                E = "start"
                        }
                        var O, L, _ = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            R = [];
                        if (u.each(v, function(e, t) {
                                h.isNode(t) && a.call(t)
                            }), (L = u.extend({}, g.defaults, x)).loop = parseInt(L.loop), O = 2 * L.loop - 1, L.loop)
                            for (var $ = 0; O > $; $++) {
                                var Y = {
                                    delay: L.delay,
                                    progress: L.progress
                                };
                                $ === O - 1 && (Y.display = L.display, Y.visibility = L.visibility, Y.complete = L.complete), w(v, "reverse", Y)
                            }
                        return e()
                    }
                };
                (g = u.extend(w, g)).animate = w;
                var x = t.requestAnimationFrame || p;
                return g.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
                    i.hidden ? (x = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, l()) : x = t.requestAnimationFrame || p
                }), e.Velocity = g, e !== t && (e.fn.velocity = w, e.fn.velocity.defaults = g.defaults), u.each(["Down", "Up"], function(e, t) {
                    g.Redirects["slide" + t] = function(e, i, o, r, a, s) {
                        var l = u.extend({}, i),
                            c = l.begin,
                            d = l.complete,
                            p = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            h = {};
                        l.display === n && (l.display = "Down" === t ? "inline" === g.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                            for (var i in c && c.call(a, a), p) {
                                h[i] = e.style[i];
                                var n = g.CSS.getPropertyValue(e, i);
                                p[i] = "Down" === t ? [n, 0] : [0, n]
                            }
                            h.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, l.complete = function() {
                            for (var t in h) e.style[t] = h[t];
                            d && d.call(a, a), s && s.resolver(a)
                        }, g(e, p, l)
                    }
                }), u.each(["In", "Out"], function(e, t) {
                    g.Redirects["fade" + t] = function(e, i, o, r, a, s) {
                        var l = u.extend({}, i),
                            c = {
                                opacity: "In" === t ? 1 : 0
                            },
                            d = l.complete;
                        l.complete = o !== r - 1 ? l.begin = null : function() {
                            d && d.call(a, a), s && s.resolver(a)
                        }, l.display === n && (l.display = "In" === t ? "auto" : "none"), g(this, c, l)
                    }
                }), g
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function(e) {
        WOW = function() {
            return {
                init: function() {
                    var t = [],
                        i = 1;

                    function n() {
                        var i = window.innerHeight,
                            n = window.scrollY;
                        e(".wow").each(function() {
                            if ("visible" != e(this).css("visibility") && (i + n - 100 > o(this) && n < o(this) || i + n - 100 > o(this) + e(this).height() && n < o(this) + e(this).height() || i + n == e(document).height() && o(this) + 100 > e(document).height())) {
                                var r = e(this).index(".wow"),
                                    a = e(this).attr("data-wow-delay");
                                if (a) {
                                    a = e(this).attr("data-wow-delay").slice(0, -1);
                                    var s = this;
                                    parseFloat(a);
                                    e(s).addClass("animated"), e(s).css({
                                        visibility: "visible"
                                    }), e(s).css({
                                        "animation-delay": a
                                    }), e(s).css({
                                        "animation-name": t[r]
                                    });
                                    var l = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                    e(this).attr("data-wow-delay") && (l += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                    s = this;
                                    setTimeout(function() {
                                        e(s).removeClass("animated")
                                    }, l)
                                } else {
                                    e(this).addClass("animated"), e(this).css({
                                        visibility: "visible"
                                    }), e(this).css({
                                        "animation-name": t[r]
                                    });
                                    l = 1e3 * e(this).css("animation-duration").slice(0, -1), s = this;
                                    setTimeout(function() {
                                        e(s).removeClass("animated")
                                    }, l)
                                }
                            }
                        })
                    }

                    function o(e) {
                        var t = e.getBoundingClientRect(),
                            i = document.body,
                            n = document.documentElement,
                            o = window.pageYOffset || n.scrollTop || i.scrollTop,
                            r = n.clientTop || i.clientTop || 0,
                            a = t.top + o - r;
                        return Math.round(a)
                    }
                    e(".wow").each(function() {
                        e(this).css({
                            visibility: "hidden"
                        }), t[e(this).index(".wow")] = e(this).css("animation-name"), e(this).css({
                            "animation-name": "none"
                        })
                    }), e(window).scroll(function() {
                        var t, r;
                        i ? (t = window.innerHeight, r = window.scrollY, e(".wow.animated").each(function() {
                            if (t + r - 100 > o(this) && r > o(this) + 100 || t + r - 100 < o(this) && r < o(this) + 100 || o(this) + e(this).height > e(document).height() - 100) e(this).removeClass("animated"), e(this).css({
                                "animation-name": "none"
                            }), e(this).css({
                                visibility: "hidden"
                            });
                            else {
                                var i = 1e3 * e(this).css("animation-duration").slice(0, -1);
                                e(this).attr("data-wow-delay") && (i += 1e3 * e(this).attr("data-wow-delay").slice(0, -1));
                                var n = this;
                                setTimeout(function() {
                                    e(n).removeClass("animated")
                                }, i)
                            }
                        }), n(), i--) : n()
                    }), e(".wow").each(function() {
                        var i = e(this).index(".wow"),
                            n = e(this).attr("data-wow-delay");
                        n ? (n = e(this).attr("data-wow-delay").slice(0, -1), parseFloat(n), e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-delay": n + "s"
                        }), e(this).css({
                            "animation-name": t[i]
                        })) : (e(this).addClass("animated"), e(this).css({
                            visibility: "visible"
                        }), e(this).css({
                            "animation-name": t[i]
                        }))
                    })
                }
            }
        }
    }(jQuery);
var OFFSET_TOP = 50;
$(window).scroll(function() {
        $(".navbar").length && ($(".navbar").offset().top > OFFSET_TOP ? $(".scrolling-navbar").addClass("top-nav-collapse") && $('.scrolling-navbar').removeClass('bg-gradient') && $('img[src="/main_static/img/svg/cc-icon-white.svg"]').attr('src', '/main_static/img/svg/cc-icon.svg'): $(".scrolling-navbar").removeClass("top-nav-collapse") && $(".scrolling-navbar").addClass("bg-gradient") && $('img[src="/main_static/img/svg/cc-icon.svg"]').attr('src', '/main_static/img/svg/cc-icon-white.svg'))
    }),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return t.apply(e)
        }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof global ? global : this, function() {
        "use strict";
        var e = e || {},
            t = document.querySelectorAll.bind(document),
            i = Object.prototype.toString,
            n = "ontouchstart" in window;

        function o(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function r(e) {
            var n, r = i.call(e);
            return "[object String]" === r ? t(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && e.hasOwnProperty("length") ? e : o(n = e) && n.nodeType > 0 ? [e] : []
        }

        function a(e) {
            var t, i, n = {
                    top: 0,
                    left: 0
                },
                o = e && e.ownerDocument;
            return t = o.documentElement, void 0 !== e.getBoundingClientRect && (n = e.getBoundingClientRect()), i = function(e) {
                return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                var t
            }(o), {
                top: n.top + i.pageYOffset - t.clientTop,
                left: n.left + i.pageXOffset - t.clientLeft
            }
        }

        function s(e) {
            var t = "";
            for (var i in e) e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
            return t
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function(e, t, i) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var n = document.createElement("div");
                    n.className = "waves-ripple waves-rippling", t.appendChild(n);
                    var o = a(t),
                        r = 0,
                        c = 0;
                    "touches" in e && e.touches.length ? (r = e.touches[0].pageY - o.top, c = e.touches[0].pageX - o.left) : (r = e.pageY - o.top, c = e.pageX - o.left), c = c >= 0 ? c : 0, r = r >= 0 ? r : 0;
                    var u = "scale(" + t.clientWidth / 100 * 3 + ")",
                        d = "translate(0,0)";
                    i && (d = "translate(" + i.x + "px, " + i.y + "px)"), n.setAttribute("data-hold", Date.now()), n.setAttribute("data-x", c), n.setAttribute("data-y", r), n.setAttribute("data-scale", u), n.setAttribute("data-translate", d);
                    var p = {
                        top: r + "px",
                        left: c + "px"
                    };
                    n.classList.add("waves-notransition"), n.setAttribute("style", s(p)), n.classList.remove("waves-notransition"), p["-webkit-transform"] = u + " " + d, p["-moz-transform"] = u + " " + d, p["-ms-transform"] = u + " " + d, p["-o-transform"] = u + " " + d, p.transform = u + " " + d, p.opacity = "1";
                    var h = "mousemove" === e.type ? 2500 : l.duration;
                    p["-webkit-transition-duration"] = h + "ms", p["-moz-transition-duration"] = h + "ms", p["-o-transition-duration"] = h + "ms", p["transition-duration"] = h + "ms", n.setAttribute("style", s(p))
                },
                hide: function(e, t) {
                    for (var i = (t = t || this).getElementsByClassName("waves-rippling"), n = 0, o = i.length; n < o; n++) u(e, t, i[n])
                }
            },
            c = {
                input: function(e) {
                    var t = e.parentNode;
                    if ("div" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var i = document.createElement("div");
                        i.className = "waves-input-wrapper", t.replaceChild(i, e), i.appendChild(e);
                        var n = window.getComputedStyle(e, null);
                        n.color, n.backgroundColor
                    }
                },
                img: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var i = document.createElement("i");
                        t.replaceChild(i, e), i.appendChild(e)
                    }
                }
            };

        function u(e, t, i) {
            if (i) {
                i.classList.remove("waves-rippling");
                var n = i.getAttribute("data-x"),
                    o = i.getAttribute("data-y"),
                    r = i.getAttribute("data-scale"),
                    a = i.getAttribute("data-translate"),
                    c = 350 - (Date.now() - Number(i.getAttribute("data-hold")));
                c < 0 && (c = 0), "mousemove" === e.type && (c = 150);
                var u = "mousemove" === e.type ? 2500 : l.duration;
                setTimeout(function() {
                    var e = {
                        top: o + "px",
                        left: n + "px",
                        opacity: "0",
                        "-webkit-transition-duration": u + "ms",
                        "-moz-transition-duration": u + "ms",
                        "-o-transition-duration": u + "ms",
                        "transition-duration": u + "ms",
                        "-webkit-transform": r + " " + a,
                        "-moz-transform": r + " " + a,
                        "-ms-transform": r + " " + a,
                        "-o-transform": r + " " + a,
                        transform: r + " " + a
                    };
                    i.setAttribute("style", s(e)), setTimeout(function() {
                        try {
                            t.removeChild(i)
                        } catch (e) {
                            return !1
                        }
                    }, u)
                }, c)
            }
        }
        var d = {
            touches: 0,
            allowEvent: function(e) {
                var t = !0;
                return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1), t
            },
            registerEvent: function(e) {
                var t = e.type;
                "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                    d.touches && (d.touches -= 1)
                }, 500)
            }
        };

        function p(e) {
            var t = function(e) {
                if (!1 === d.allowEvent(e)) return null;
                for (var t = null, i = e.target || e.srcElement; null !== i.parentElement;) {
                    if (i.classList.contains("waves-effect") && !(i instanceof SVGElement)) {
                        t = i;
                        break
                    }
                    i = i.parentElement
                }
                return t
            }(e);
            if (null !== t) {
                if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                if (d.registerEvent(e), "touchstart" === e.type && l.delay) {
                    var i = !1,
                        o = setTimeout(function() {
                            o = null, l.show(e, t)
                        }, l.delay),
                        r = function(n) {
                            o && (clearTimeout(o), o = null, l.show(e, t)), i || (i = !0, l.hide(n, t))
                        };
                    t.addEventListener("touchmove", function(e) {
                        o && (clearTimeout(o), o = null), r(e)
                    }, !1), t.addEventListener("touchend", r, !1), t.addEventListener("touchcancel", r, !1)
                } else l.show(e, t), n && (t.addEventListener("touchend", l.hide, !1), t.addEventListener("touchcancel", l.hide, !1)), t.addEventListener("mouseup", l.hide, !1), t.addEventListener("mouseleave", l.hide, !1)
            }
        }
        return e.init = function(e) {
            var t = document.body;
            "duration" in (e = e || {}) && (l.duration = e.duration), "delay" in e && (l.delay = e.delay), n && (t.addEventListener("touchstart", p, !1), t.addEventListener("touchcancel", d.registerEvent, !1), t.addEventListener("touchend", d.registerEvent, !1)), t.addEventListener("mousedown", p, !1)
        }, e.attach = function(e, t) {
            var n, o;
            e = r(e), "[object Array]" === i.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
            for (var a = 0, s = e.length; a < s; a++) o = (n = e[a]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (c[o](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + t)
        }, e.ripple = function(e, t) {
            var i = (e = r(e)).length;
            if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, i)
                for (var n, o, s, c = {}, u = 0, d = {
                        type: "mousedown",
                        button: 1
                    }, p = function(e, t) {
                        return function() {
                            l.hide(e, t)
                        }
                    }; u < i; u++)
                    if (n = e[u], o = t.position || {
                            x: n.clientWidth / 2,
                            y: n.clientHeight / 2
                        }, s = a(n), c.x = s.left + o.x, c.y = s.top + o.y, d.pageX = c.x, d.pageY = c.y, l.show(d, n), t.wait >= 0 && null !== t.wait) {
                        setTimeout(p({
                            type: "mouseup",
                            button: 1
                        }, n), t.wait)
                    }
        }, e.calm = function(e) {
            for (var t = {
                    type: "mouseup",
                    button: 1
                }, i = 0, n = (e = r(e)).length; i < n; i++) l.hide(t, e[i])
        }, e.displayEffect = function(t) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
        }, e
    }), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .navbar input, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init(),
    function(e) {
        e(document).ready(function() {
            var t = ["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function(e) {
                    return "input[type=" + e + "]"
                }).join(", ") + ", textarea",
                i = function(e) {
                    var t = e.siblings("label, i"),
                        i = e.val().length,
                        n = e.attr("placeholder");
                    t[(i || n ? "add" : "remove") + "Class"]("active")
                },
                n = function(e) {
                    if (e.hasClass("validate")) {
                        var t = e.val(),
                            i = !t.length,
                            n = !e[0].validity.badInput;
                        if (i && n) e.removeClass("valid").removeClass("invalid");
                        else {
                            var o = e.is(":valid"),
                                r = Number(e.attr("length")) || 0;
                            o && (!r || r > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
                        }
                    }
                },
                o = function() {
                    var t = e(void 0);
                    if (t.val().length) {
                        var i = e(".hiddendiv"),
                            n = t.css("font-family"),
                            o = t.css("font-size");
                        o && i.css("font-size", o), n && i.css("font-family", n), "off" === t.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"), i.text(t.val() + "\n");
                        var r = i.html().replace(/\n/g, "<br>");
                        i.html(r), i.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", i.height())
                    }
                };
            if (e(t).each(function(t, n) {
                    var o = e(n),
                        r = o.siblings("label, i");
                    i(o), n.validity.badInput && r.addClass("active")
                }), e(document).on("focus", t, function(t) {
                    e(t.target).siblings("label, i").addClass("active")
                }), e(document).on("blur", t, function(t) {
                    var i = e(t.target),
                        o = !i.val(),
                        r = !t.target.validity.badInput,
                        a = void 0 === i.attr("placeholder");
                    o && r && a && i.siblings("label, i").removeClass("active"), n(i)
                }), e(document).on("change", t, function(t) {
                    var o = e(t.target);
                    i(o), n(o)
                }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function(i) {
                    var n = e(i.target);
                    n.is("form") && (n.find(t).removeClass("valid").removeClass("invalid").each(function(t, i) {
                        var n = e(i),
                            o = !n.val(),
                            r = !n.attr("placeholder");
                        o && r && n.siblings("label, i").removeClass("active")
                    }), n.find("select.initialized").each(function(t, i) {
                        var n = e(i),
                            o = n.siblings("input.select-dropdown"),
                            r = n.children("[selected]").val();
                        n.val(r), o.val(r)
                    }))
                }), e(".md-textarea-auto").length) {
                var r;
                r = window.attachEvent ? function(e, t, i) {
                    e.attachEvent("on" + t, i)
                } : function(e, t, i) {
                    e.addEventListener(t, i, !1)
                }, e(".md-textarea-auto").each(function() {
                    var e = this;

                    function t() {
                        e.style.height = "auto", e.style.height = e.scrollHeight + "px"
                    }

                    function i() {
                        window.setTimeout(t, 0)
                    }
                    r(e, "change", t), r(e, "cut", i), r(e, "paste", i), r(e, "drop", i), r(e, "keydown", i), t()
                })
            }
            e(".hiddendiv").first().length || ($hiddenDiv = e('<div class="hiddendiv common"></div>'), e("body").append($hiddenDiv)), e(".materialize-textarea").each(o), e("body").on("keyup keydown", ".materialize-textarea", o)
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            e(document).on("click.card", ".card", function(t) {
                var i = e(this);
                if (i.find(".card-reveal").length) {
                    var n = e(t.target),
                        o = n.is(".card-reveal .card-title"),
                        r = n.is(".card-reveal .card-title i"),
                        a = n.is(".card .activator"),
                        s = n.is(".card .activator i");
                    o || r ? i.find(".card-reveal").velocity({
                        translateY: 0
                    }, {
                        duration: 225,
                        queue: !1,
                        easing: "easeInOutQuad",
                        complete: function() {
                            e(this).css({
                                display: "none"
                            })
                        }
                    }) : (a || s) && i.find(".card-reveal").css({
                        display: "block"
                    }).velocity("stop", !1).velocity({
                        translateY: "-100%"
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeInOutQuad"
                    })
                }
            }), e(".rotate-btn").on("click", function() {
                var t = e(this).attr("data-card");
                e("#" + t).toggleClass("flipped")
            })
        })
    }(jQuery), $(document).ready(function(e) {
        e(".card-share > a").on("click", function(t) {
            t.preventDefault(), e(this).parent().find("div").toggleClass("social-reveal-active"), e(this).toggleClass("share-expanded")
        })
    });
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    },
    SMOOTH_SCROLL_DURATION = 700;
$(".smooth-scroll").on("click", "a", function() {
        var e = $(this).attr("href");
        if ("undefined" !== (void 0 === e ? "undefined" : _typeof(e)) && 0 == e.indexOf("#")) {
            var t = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
                i = $(this).closest("ul").attr("data-allow-hashes");
            return $("body,html").animate({
                scrollTop: $(e).offset().top - t
            }, SMOOTH_SCROLL_DURATION), "undefined" !== (void 0 === i ? "undefined" : _typeof(i)) && !1 !== i && history.replaceState(null, null, e), !1
        }
    }),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            var i = {
                inDuration: 300,
                outDuration: 225,
                constrain_width: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left"
            };
            this.each(function() {
                var n = e(this),
                    o = e.extend({}, i, t),
                    r = !1,
                    a = e("#" + n.attr("data-activates"));

                function s() {
                    void 0 !== n.data("induration") && (o.inDuration = n.data("inDuration")), void 0 !== n.data("outduration") && (o.outDuration = n.data("outDuration")), void 0 !== n.data("constrainwidth") && (o.constrain_width = n.data("constrainwidth")), void 0 !== n.data("hover") && (o.hover = n.data("hover")), void 0 !== n.data("gutter") && (o.gutter = n.data("gutter")), void 0 !== n.data("beloworigin") && (o.belowOrigin = n.data("beloworigin")), void 0 !== n.data("alignment") && (o.alignment = n.data("alignment"))
                }

                function l(t) {
                    "focus" === t && (r = !0), s(), a.addClass("active"), n.addClass("active"), !0 === o.constrain_width ? a.css("width", n.outerWidth()) : a.css("white-space", "nowrap");
                    var i = window.innerHeight,
                        l = n.innerHeight(),
                        c = n.offset().left,
                        u = n.offset().top - e(window).scrollTop(),
                        d = o.alignment,
                        p = 0,
                        h = 0,
                        f = 0;
                    !0 === o.belowOrigin && (f = l);
                    var m = 0,
                        v = n.parent();
                    if (!v.is("body") && v[0].scrollHeight > v[0].clientHeight && (m = v[0].scrollTop), c + a.innerWidth() > e(window).width() ? d = "right" : c - a.innerWidth() + n.innerWidth() < 0 && (d = "left"), u + a.innerHeight() > i)
                        if (u + l - a.innerHeight() < 0) {
                            var g = i - u - f;
                            a.css("max-height", g)
                        } else f || (f += l), f -= a.innerHeight();
                    if ("left" === d) p = o.gutter, h = n.position().left + p;
                    else if ("right" === d) {
                        h = n.position().left + n.outerWidth() - a.outerWidth() + (p = -o.gutter)
                    }
                    a.css({
                        position: "absolute",
                        top: n.position().top + f + m,
                        left: h
                    }), a.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: o.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1,
                        scrollTop: 0
                    }, {
                        queue: !1,
                        duration: o.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function c() {
                    r = !1, a.fadeOut(o.outDuration), a.removeClass("active"), n.removeClass("active"), setTimeout(function() {
                        a.css("max-height", "")
                    }, o.outDuration)
                }
                if (s(), n.after(a), o.hover) {
                    var u = !1;
                    n.unbind("click." + n.attr("id")), n.on("mouseenter", function() {
                        !1 === u && (l(), u = !0)
                    }), n.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-content").is(a) || (a.stop(!0, !0), c(), u = !1)
                    }), a.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-button").is(n) || (a.stop(!0, !0), c(), u = !1)
                    })
                } else n.unbind("click." + n.attr("id")), n.bind("click." + n.attr("id"), function(t) {
                    r || (n[0] !== t.currentTarget || n.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? n.hasClass("active") && (c(), e(document).unbind("click." + a.attr("id") + " touchstart." + a.attr("id"))) : (t.preventDefault(), l("click")), a.hasClass("active") && e(document).bind("click." + a.attr("id") + " touchstart." + a.attr("id"), function(t) {
                        a.is(t.target) || n.is(t.target) || n.find(t.target).length || (c(), e(document).unbind("click." + a.attr("id") + " touchstart." + a.attr("id")))
                    }))
                });
                n.on("open", function(e, t) {
                    l(t)
                }), n.on("close", c)
            })
        }, e(document).ready(function() {
            e(".dropdown-button").dropdown()
        })
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");

function dropdownEffectData(e) {
    var t = "fadeIn",
        i = "fadeOut",
        n = $(e),
        o = $(".dropdown-menu", e),
        r = n.parents("ul.nav");
    return r.height > 0 && (t = r.data("dropdown-in") || null, i = r.data("dropdown-out") || null), {
        target: e,
        dropdown: n,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || t,
        effectOut: o.data("dropdown-out") || i
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass("animated"), e.dropdownMenu.addClass(t))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass("animated"), e.dropdownMenu.removeClass(e.effectIn), e.dropdownMenu.removeClass(e.effectOut), "function" == typeof t && t()
    })
}
dropdownSelectors.on({
        "show.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            dropdownEffectStart(e, e.effectIn)
        },
        "shown.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            e.effectIn && e.effectOut && dropdownEffectEnd(e)
        },
        "hide.bs.dropdown": function(e) {
            var t = dropdownEffectData(this);
            t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function() {
                t.dropdown.removeClass("show"), t.dropdownMenu.removeClass("show")
            }))
        }
    }),
    function(e) {
        e(document).ready(function() {
            e.fn.reverse = [].reverse, e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function() {
                var i = e(this);
                t(i)
            }), e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function() {
                var t = e(this);
                i(t)
            }), e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function() {
                var n = e(this).parent();
                n.hasClass("active") ? i(n) : t(n)
            })
        }), e.fn.extend({
            openFAB: function() {
                t(e(this))
            },
            closeFAB: function() {
                i(e(this))
            }
        });
        var t = function(t) {
                var i = t;
                if (!1 === i.hasClass("active")) {
                    var n = void 0,
                        o = void 0;
                    !0 === i.hasClass("horizontal") ? o = 40 : n = 40, i.addClass("active"), i.find("ul .btn-floating").velocity({
                        scaleY: ".4",
                        scaleX: ".4",
                        translateY: n + "px",
                        translateX: o + "px"
                    }, {
                        duration: 0
                    });
                    var r = 0;
                    i.find("ul .btn-floating").reverse().each(function() {
                        e(this).velocity({
                            opacity: "1",
                            scaleX: "1",
                            scaleY: "1",
                            translateY: "0",
                            translateX: "0"
                        }, {
                            duration: 80,
                            delay: r
                        }), r += 40
                    })
                }
            },
            i = function(e) {
                $this = e;
                var t = void 0,
                    i = void 0;
                !0 === $this.hasClass("horizontal") ? i = 40 : t = 40, $this.removeClass("active");
                $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                    opacity: "0",
                    scaleX: ".4",
                    scaleY: ".4",
                    translateY: t + "px",
                    translateX: i + "px"
                }, {
                    duration: 80
                })
            };
        e(".fixed-action-btn").on({
            click: function(t) {
                return t.preventDefault(),
                    function(t) {
                        if ($this = t, !1 === $this.hasClass("active")) {
                            $this.addClass("active"), $this.find("ul .btn-floating").velocity({
                                scaleY: ".4",
                                scaleX: ".4",
                                translateY: "40px"
                            }, {
                                duration: 0
                            });
                            var i = 0;
                            $this.find("ul .btn-floating").reverse().each(function() {
                                e(this).velocity({
                                    opacity: "1",
                                    scaleX: "1",
                                    scaleY: "1",
                                    translateY: "0"
                                }, {
                                    duration: 80,
                                    delay: i
                                }), i += 40
                            })
                        } else {
                            $this.removeClass("active");
                            $this.find("ul .btn-floating").velocity("stop", !0), $this.find("ul .btn-floating").velocity({
                                opacity: "0",
                                scaleX: ".4",
                                scaleY: ".4",
                                translateY: "40px"
                            }, {
                                duration: 80
                            })
                        }
                    }(e(".fixed-action-btn")), !1
            }
        })
    }(jQuery),
    function(e, t, i, n) {
        "use strict";
        var o, r = ["", "webkit", "Moz", "MS", "ms", "o"],
            a = t.createElement("div"),
            s = "function",
            l = Math.round,
            c = Math.abs,
            u = Date.now;

        function d(e, t, i) {
            return setTimeout(y(e, i), t)
        }

        function p(e, t, i) {
            return !!Array.isArray(e) && (h(e, i[t], i), !0)
        }

        function h(e, t, i) {
            var o;
            if (e)
                if (e.forEach) e.forEach(t, i);
                else if (e.length !== n)
                for (o = 0; o < e.length;) t.call(i, e[o], o, e), o++;
            else
                for (o in e) e.hasOwnProperty(o) && t.call(i, e[o], o, e)
        }

        function f(t, i, n) {
            var o = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
            return function() {
                var i = new Error("get-stack-trace"),
                    n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    r = e.console && (e.console.warn || e.console.log);
                return r && r.call(e.console, o, n), t.apply(this, arguments)
            }
        }
        o = "function" != typeof Object.assign ? function(e) {
            if (e === n || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (o !== n && null !== o)
                    for (var r in o) o.hasOwnProperty(r) && (t[r] = o[r])
            }
            return t
        } : Object.assign;
        var m = f(function(e, t, i) {
                for (var o = Object.keys(t), r = 0; r < o.length;)(!i || i && e[o[r]] === n) && (e[o[r]] = t[o[r]]), r++;
                return e
            }, "extend", "Use `assign`."),
            v = f(function(e, t) {
                return m(e, t, !0)
            }, "merge", "Use `assign`.");

        function g(e, t, i) {
            var n, r = t.prototype;
            (n = e.prototype = Object.create(r)).constructor = e, n._super = r, i && o(n, i)
        }

        function y(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }

        function b(e, t) {
            return typeof e == s ? e.apply(t && t[0] || n, t) : e
        }

        function w(e, t) {
            return e === n ? t : e
        }

        function x(e, t, i) {
            h(S(t), function(t) {
                e.addEventListener(t, i, !1)
            })
        }

        function k(e, t, i) {
            h(S(t), function(t) {
                e.removeEventListener(t, i, !1)
            })
        }

        function T(e, t) {
            for (; e;) {
                if (e == t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function C(e, t) {
            return e.indexOf(t) > -1
        }

        function S(e) {
            return e.trim().split(/\s+/g)
        }

        function E(e, t, i) {
            if (e.indexOf && !i) return e.indexOf(t);
            for (var n = 0; n < e.length;) {
                if (i && e[n][i] == t || !i && e[n] === t) return n;
                n++
            }
            return -1
        }

        function I(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function A(e, t, i) {
            for (var n = [], o = [], r = 0; r < e.length;) {
                var a = t ? e[r][t] : e[r];
                E(o, a) < 0 && n.push(e[r]), o[r] = a, r++
            }
            return i && (n = t ? n.sort(function(e, i) {
                return e[t] > i[t]
            }) : n.sort()), n
        }

        function P(e, t) {
            for (var i, o, a = t[0].toUpperCase() + t.slice(1), s = 0; s < r.length;) {
                if ((o = (i = r[s]) ? i + a : t) in e) return o;
                s++
            }
            return n
        }
        var M = 1;

        function D(t) {
            var i = t.ownerDocument || t;
            return i.defaultView || i.parentWindow || e
        }
        var O = "ontouchstart" in e,
            L = P(e, "PointerEvent") !== n,
            _ = O && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            R = 25,
            $ = 1,
            Y = 2,
            V = 4,
            F = 8,
            H = 1,
            j = 2,
            W = 4,
            N = 8,
            X = 16,
            z = j | W,
            B = N | X,
            q = z | B,
            U = ["x", "y"],
            Z = ["clientX", "clientY"];

        function Q(e, t) {
            var i = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                b(e.options.enable, [e]) && i.handler(t)
            }, this.init()
        }

        function G(e, t, i) {
            var o = i.pointers.length,
                r = i.changedPointers.length,
                a = t & $ && o - r == 0,
                s = t & (V | F) && o - r == 0;
            i.isFirst = !!a, i.isFinal = !!s, a && (e.session = {}), i.eventType = t,
                function(e, t) {
                    var i = e.session,
                        o = t.pointers,
                        r = o.length;
                    i.firstInput || (i.firstInput = K(t));
                    r > 1 && !i.firstMultiple ? i.firstMultiple = K(t) : 1 === r && (i.firstMultiple = !1);
                    var a = i.firstInput,
                        s = i.firstMultiple,
                        l = s ? s.center : a.center,
                        d = t.center = J(o);
                    t.timeStamp = u(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = ne(l, d), t.distance = ie(l, d),
                        function(e, t) {
                            var i = t.center,
                                n = e.offsetDelta || {},
                                o = e.prevDelta || {},
                                r = e.prevInput || {};
                            t.eventType !== $ && r.eventType !== V || (o = e.prevDelta = {
                                x: r.deltaX || 0,
                                y: r.deltaY || 0
                            }, n = e.offsetDelta = {
                                x: i.x,
                                y: i.y
                            });
                            t.deltaX = o.x + (i.x - n.x), t.deltaY = o.y + (i.y - n.y)
                        }(i, t), t.offsetDirection = te(t.deltaX, t.deltaY);
                    var p = ee(t.deltaTime, t.deltaX, t.deltaY);
                    t.overallVelocityX = p.x, t.overallVelocityY = p.y, t.overallVelocity = c(p.x) > c(p.y) ? p.x : p.y, t.scale = s ? (h = s.pointers, f = o, ie(f[0], f[1], Z) / ie(h[0], h[1], Z)) : 1, t.rotation = s ? function(e, t) {
                            return ne(t[1], t[0], Z) + ne(e[1], e[0], Z)
                        }(s.pointers, o) : 0, t.maxPointers = i.prevInput ? t.pointers.length > i.prevInput.maxPointers ? t.pointers.length : i.prevInput.maxPointers : t.pointers.length,
                        function(e, t) {
                            var i, o, r, a, s = e.lastInterval || t,
                                l = t.timeStamp - s.timeStamp;
                            if (t.eventType != F && (l > R || s.velocity === n)) {
                                var u = t.deltaX - s.deltaX,
                                    d = t.deltaY - s.deltaY,
                                    p = ee(l, u, d);
                                o = p.x, r = p.y, i = c(p.x) > c(p.y) ? p.x : p.y, a = te(u, d), e.lastInterval = t
                            } else i = s.velocity, o = s.velocityX, r = s.velocityY, a = s.direction;
                            t.velocity = i, t.velocityX = o, t.velocityY = r, t.direction = a
                        }(i, t);
                    var h, f;
                    var m = e.element;
                    T(t.srcEvent.target, m) && (m = t.srcEvent.target);
                    t.target = m
                }(e, i), e.emit("hammer.input", i), e.recognize(i), e.session.prevInput = i
        }

        function K(e) {
            for (var t = [], i = 0; i < e.pointers.length;) t[i] = {
                clientX: l(e.pointers[i].clientX),
                clientY: l(e.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: u(),
                pointers: t,
                center: J(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }

        function J(e) {
            var t = e.length;
            if (1 === t) return {
                x: l(e[0].clientX),
                y: l(e[0].clientY)
            };
            for (var i = 0, n = 0, o = 0; o < t;) i += e[o].clientX, n += e[o].clientY, o++;
            return {
                x: l(i / t),
                y: l(n / t)
            }
        }

        function ee(e, t, i) {
            return {
                x: t / e || 0,
                y: i / e || 0
            }
        }

        function te(e, t) {
            return e === t ? H : c(e) >= c(t) ? e < 0 ? j : W : t < 0 ? N : X
        }

        function ie(e, t, i) {
            i || (i = U);
            var n = t[i[0]] - e[i[0]],
                o = t[i[1]] - e[i[1]];
            return Math.sqrt(n * n + o * o)
        }

        function ne(e, t, i) {
            i || (i = U);
            var n = t[i[0]] - e[i[0]],
                o = t[i[1]] - e[i[1]];
            return 180 * Math.atan2(o, n) / Math.PI
        }
        Q.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && x(this.element, this.evEl, this.domHandler), this.evTarget && x(this.target, this.evTarget, this.domHandler), this.evWin && x(D(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && k(this.element, this.evEl, this.domHandler), this.evTarget && k(this.target, this.evTarget, this.domHandler), this.evWin && k(D(this.element), this.evWin, this.domHandler)
            }
        };
        var oe = {
                mousedown: $,
                mousemove: Y,
                mouseup: V
            },
            re = "mousedown",
            ae = "mousemove mouseup";

        function se() {
            this.evEl = re, this.evWin = ae, this.pressed = !1, Q.apply(this, arguments)
        }
        g(se, Q, {
            handler: function(e) {
                var t = oe[e.type];
                t & $ && 0 === e.button && (this.pressed = !0), t & Y && 1 !== e.which && (t = V), this.pressed && (t & V && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: "mouse",
                    srcEvent: e
                }))
            }
        });
        var le = {
                pointerdown: $,
                pointermove: Y,
                pointerup: V,
                pointercancel: F,
                pointerout: F
            },
            ce = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            ue = "pointerdown",
            de = "pointermove pointerup pointercancel";

        function pe() {
            this.evEl = ue, this.evWin = de, Q.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        e.MSPointerEvent && !e.PointerEvent && (ue = "MSPointerDown", de = "MSPointerMove MSPointerUp MSPointerCancel"), g(pe, Q, {
            handler: function(e) {
                var t = this.store,
                    i = !1,
                    n = e.type.toLowerCase().replace("ms", ""),
                    o = le[n],
                    r = ce[e.pointerType] || e.pointerType,
                    a = "touch" == r,
                    s = E(t, e.pointerId, "pointerId");
                o & $ && (0 === e.button || a) ? s < 0 && (t.push(e), s = t.length - 1) : o & (V | F) && (i = !0), s < 0 || (t[s] = e, this.callback(this.manager, o, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: r,
                    srcEvent: e
                }), i && t.splice(s, 1))
            }
        });
        var he = {
                touchstart: $,
                touchmove: Y,
                touchend: V,
                touchcancel: F
            },
            fe = "touchstart",
            me = "touchstart touchmove touchend touchcancel";

        function ve() {
            this.evTarget = fe, this.evWin = me, this.started = !1, Q.apply(this, arguments)
        }
        g(ve, Q, {
            handler: function(e) {
                var t = he[e.type];
                if (t === $ && (this.started = !0), this.started) {
                    var i = function(e, t) {
                        var i = I(e.touches),
                            n = I(e.changedTouches);
                        t & (V | F) && (i = A(i.concat(n), "identifier", !0));
                        return [i, n]
                    }.call(this, e, t);
                    t & (V | F) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: "touch",
                        srcEvent: e
                    })
                }
            }
        });
        var ge = {
                touchstart: $,
                touchmove: Y,
                touchend: V,
                touchcancel: F
            },
            ye = "touchstart touchmove touchend touchcancel";

        function be() {
            this.evTarget = ye, this.targetIds = {}, Q.apply(this, arguments)
        }
        g(be, Q, {
            handler: function(e) {
                var t = ge[e.type],
                    i = function(e, t) {
                        var i = I(e.touches),
                            n = this.targetIds;
                        if (t & ($ | Y) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                        var o, r, a = I(e.changedTouches),
                            s = [],
                            l = this.target;
                        if (r = i.filter(function(e) {
                                return T(e.target, l)
                            }), t === $)
                            for (o = 0; o < r.length;) n[r[o].identifier] = !0, o++;
                        o = 0;
                        for (; o < a.length;) n[a[o].identifier] && s.push(a[o]), t & (V | F) && delete n[a[o].identifier], o++;
                        if (!s.length) return;
                        return [A(r.concat(s), "identifier", !0), s]
                    }.call(this, e, t);
                i && this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: "touch",
                    srcEvent: e
                })
            }
        });
        var we = 2500,
            xe = 25;

        function ke() {
            Q.apply(this, arguments);
            var e = y(this.handler, this);
            this.touch = new be(this.manager, e), this.mouse = new se(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function Te(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var i = {
                    x: t.clientX,
                    y: t.clientY
                };
                this.lastTouches.push(i);
                var n = this.lastTouches;
                setTimeout(function() {
                    var e = n.indexOf(i);
                    e > -1 && n.splice(e, 1)
                }, we)
            }
        }
        g(ke, Q, {
            handler: function(e, t, i) {
                var n = "touch" == i.pointerType,
                    o = "mouse" == i.pointerType;
                if (!(o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (n)(function(e, t) {
                        e & $ ? (this.primaryTouch = t.changedPointers[0].identifier, Te.call(this, t)) : e & (V | F) && Te.call(this, t)
                    }).call(this, t, i);
                    else if (o && function(e) {
                            for (var t = e.srcEvent.clientX, i = e.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                                var o = this.lastTouches[n],
                                    r = Math.abs(t - o.x),
                                    a = Math.abs(i - o.y);
                                if (r <= xe && a <= xe) return !0
                            }
                            return !1
                        }.call(this, i)) return;
                    this.callback(e, t, i)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Ce = P(a.style, "touchAction"),
            Se = Ce !== n,
            Ee = "auto",
            Ie = "manipulation",
            Ae = "none",
            Pe = "pan-x",
            Me = "pan-y",
            De = function() {
                if (!Se) return !1;
                var t = {},
                    i = e.CSS && e.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                    t[n] = !i || e.CSS.supports("touch-action", n)
                }), t
            }();

        function Oe(e, t) {
            this.manager = e, this.set(t)
        }
        Oe.prototype = {
            set: function(e) {
                "compute" == e && (e = this.compute()), Se && this.manager.element.style && De[e] && (this.manager.element.style[Ce] = e), this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return h(this.manager.recognizers, function(t) {
                        b(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                    }),
                    function(e) {
                        if (C(e, Ae)) return Ae;
                        var t = C(e, Pe),
                            i = C(e, Me);
                        if (t && i) return Ae;
                        if (t || i) return t ? Pe : Me;
                        if (C(e, Ie)) return Ie;
                        return Ee
                    }(e.join(" "))
            },
            preventDefaults: function(e) {
                var t = e.srcEvent,
                    i = e.offsetDirection;
                if (this.manager.session.prevented) t.preventDefault();
                else {
                    var n = this.actions,
                        o = C(n, Ae) && !De[Ae],
                        r = C(n, Me) && !De[Me],
                        a = C(n, Pe) && !De[Pe];
                    if (o) {
                        var s = 1 === e.pointers.length,
                            l = e.distance < 2,
                            c = e.deltaTime < 250;
                        if (s && l && c) return
                    }
                    if (!a || !r) return o || r && i & z || a && i & B ? this.preventSrc(t) : void 0
                }
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0, e.preventDefault()
            }
        };
        var Le = 1,
            _e = 2,
            Re = 4,
            $e = 8,
            Ye = $e,
            Ve = 16;

        function Fe(e) {
            this.options = o({}, this.defaults, e || {}), this.id = M++, this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = Le, this.simultaneous = {}, this.requireFail = []
        }

        function He(e) {
            return e & Ve ? "cancel" : e & $e ? "end" : e & Re ? "move" : e & _e ? "start" : ""
        }

        function je(e) {
            return e == X ? "down" : e == N ? "up" : e == j ? "left" : e == W ? "right" : ""
        }

        function We(e, t) {
            var i = t.manager;
            return i ? i.get(e) : e
        }

        function Ne() {
            Fe.apply(this, arguments)
        }

        function Xe() {
            Ne.apply(this, arguments), this.pX = null, this.pY = null
        }

        function ze() {
            Ne.apply(this, arguments)
        }

        function Be() {
            Fe.apply(this, arguments), this._timer = null, this._input = null
        }

        function qe() {
            Ne.apply(this, arguments)
        }

        function Ue() {
            Ne.apply(this, arguments)
        }

        function Ze() {
            Fe.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qe(e, t) {
            return (t = t || {}).recognizers = w(t.recognizers, Qe.defaults.preset), new Ge(e, t)
        }
        Fe.prototype = {
            defaults: {},
            set: function(e) {
                return o(this.options, e), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(e) {
                if (p(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return t[(e = We(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
            },
            dropRecognizeWith: function(e) {
                return p(e, "dropRecognizeWith", this) ? this : (e = We(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function(e) {
                if (p(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return -1 === E(t, e = We(e, this)) && (t.push(e), e.requireFailure(this)), this
            },
            dropRequireFailure: function(e) {
                if (p(e, "dropRequireFailure", this)) return this;
                e = We(e, this);
                var t = E(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1), this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !!this.simultaneous[e.id]
            },
            emit: function(e) {
                var t = this,
                    i = this.state;

                function n(i) {
                    t.manager.emit(i, e)
                }
                i < $e && n(t.options.event + He(i)), n(t.options.event), e.additionalEvent && n(e.additionalEvent), i >= $e && n(t.options.event + He(i))
            },
            tryEmit: function(e) {
                if (this.canEmit()) return this.emit(e);
                this.state = 32
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (!(this.requireFail[e].state & (32 | Le))) return !1;
                    e++
                }
                return !0
            },
            recognize: function(e) {
                var t = o({}, e);
                if (!b(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
                this.state & (Ye | Ve | 32) && (this.state = Le), this.state = this.process(t), this.state & (_e | Re | $e | Ve) && this.tryEmit(t)
            },
            process: function(e) {},
            getTouchAction: function() {},
            reset: function() {}
        }, g(Ne, Fe, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                    i = e.eventType,
                    n = t & (_e | Re),
                    o = this.attrTest(e);
                return n && (i & F || !o) ? t | Ve : n || o ? i & V ? t | $e : t & _e ? t | Re : _e : 32
            }
        }), g(Xe, Ne, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: q
            },
            getTouchAction: function() {
                var e = this.options.direction,
                    t = [];
                return e & z && t.push(Me), e & B && t.push(Pe), t
            },
            directionTest: function(e) {
                var t = this.options,
                    i = !0,
                    n = e.distance,
                    o = e.direction,
                    r = e.deltaX,
                    a = e.deltaY;
                return o & t.direction || (t.direction & z ? (o = 0 === r ? H : r < 0 ? j : W, i = r != this.pX, n = Math.abs(e.deltaX)) : (o = 0 === a ? H : a < 0 ? N : X, i = a != this.pY, n = Math.abs(e.deltaY))), e.direction = o, i && n > t.threshold && o & t.direction
            },
            attrTest: function(e) {
                return Ne.prototype.attrTest.call(this, e) && (this.state & _e || !(this.state & _e) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX, this.pY = e.deltaY;
                var t = je(e.direction);
                t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
            }
        }), g(ze, Ne, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Ae]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & _e)
            },
            emit: function(e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in" : "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }), g(Be, Fe, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [Ee]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    o = e.deltaTime > t.time;
                if (this._input = e, !n || !i || e.eventType & (V | F) && !o) this.reset();
                else if (e.eventType & $) this.reset(), this._timer = d(function() {
                    this.state = Ye, this.tryEmit()
                }, t.time, this);
                else if (e.eventType & V) return Ye;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === Ye && (e && e.eventType & V ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = u(), this.manager.emit(this.options.event, this._input)))
            }
        }), g(qe, Ne, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Ae]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & _e)
            }
        }), g(Ue, Ne, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: z | B,
                pointers: 1
            },
            getTouchAction: function() {
                return Xe.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, i = this.options.direction;
                return i & (z | B) ? t = e.overallVelocity : i & z ? t = e.overallVelocityX : i & B && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && i & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && c(t) > this.options.velocity && e.eventType & V
            },
            emit: function(e) {
                var t = je(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
            }
        }), g(Ze, Fe, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [Ie]
            },
            process: function(e) {
                var t = this.options,
                    i = e.pointers.length === t.pointers,
                    n = e.distance < t.threshold,
                    o = e.deltaTime < t.time;
                if (this.reset(), e.eventType & $ && 0 === this.count) return this.failTimeout();
                if (n && o && i) {
                    if (e.eventType != V) return this.failTimeout();
                    var r = !this.pTime || e.timeStamp - this.pTime < t.interval,
                        a = !this.pCenter || ie(this.pCenter, e.center) < t.posThreshold;
                    if (this.pTime = e.timeStamp, this.pCenter = e.center, a && r ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = d(function() {
                        this.state = Ye, this.tryEmit()
                    }, t.interval, this), _e) : Ye
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = d(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == Ye && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), Qe.VERSION = "2.0.7", Qe.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [qe, {
                    enable: !1
                }],
                [ze, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [Ue, {
                    direction: z
                }],
                [Xe, {
                        direction: z
                    },
                    ["swipe"]
                ],
                [Ze],
                [Ze, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [Be]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };

        function Ge(e, t) {
            var i;
            this.options = o({}, Qe.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new((i = this).options.inputClass || (L ? pe : _ ? be : O ? ke : se))(i, G), this.touchAction = new Oe(this, this.options.touchAction), Ke(this, !0), h(this.options.recognizers, function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
            }, this)
        }

        function Ke(e, t) {
            var i, n = e.element;
            n.style && (h(e.options.cssProps, function(o, r) {
                i = P(n.style, r), t ? (e.oldCssProps[i] = n.style[i], n.style[i] = o) : n.style[i] = e.oldCssProps[i] || ""
            }), t || (e.oldCssProps = {}))
        }
        Ge.prototype = {
            set: function(e) {
                return o(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
            },
            stop: function(e) {
                this.session.stopped = e ? 2 : 1
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    var i;
                    this.touchAction.preventDefaults(e);
                    var n = this.recognizers,
                        o = t.curRecognizer;
                    (!o || o && o.state & Ye) && (o = t.curRecognizer = null);
                    for (var r = 0; r < n.length;) i = n[r], 2 === t.stopped || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(e), !o && i.state & (_e | Re | $e) && (o = t.curRecognizer = i), r++
                }
            },
            get: function(e) {
                if (e instanceof Fe) return e;
                for (var t = this.recognizers, i = 0; i < t.length; i++)
                    if (t[i].options.event == e) return t[i];
                return null
            },
            add: function(e) {
                if (p(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
            },
            remove: function(e) {
                if (p(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers,
                        i = E(t, e); - 1 !== i && (t.splice(i, 1), this.touchAction.update())
                }
                return this
            },
            on: function(e, t) {
                if (e !== n && t !== n) {
                    var i = this.handlers;
                    return h(S(e), function(e) {
                        i[e] = i[e] || [], i[e].push(t)
                    }), this
                }
            },
            off: function(e, t) {
                if (e !== n) {
                    var i = this.handlers;
                    return h(S(e), function(e) {
                        t ? i[e] && i[e].splice(E(i[e], t), 1) : delete i[e]
                    }), this
                }
            },
            emit: function(e, i) {
                this.options.domEvents && function(e, i) {
                    var n = t.createEvent("Event");
                    n.initEvent(e, !0, !0), n.gesture = i, i.target.dispatchEvent(n)
                }(e, i);
                var n = this.handlers[e] && this.handlers[e].slice();
                if (n && n.length) {
                    i.type = e, i.preventDefault = function() {
                        i.srcEvent.preventDefault()
                    };
                    for (var o = 0; o < n.length;) n[o](i), o++
                }
            },
            destroy: function() {
                this.element && Ke(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, o(Qe, {
            INPUT_START: $,
            INPUT_MOVE: Y,
            INPUT_END: V,
            INPUT_CANCEL: F,
            STATE_POSSIBLE: Le,
            STATE_BEGAN: _e,
            STATE_CHANGED: Re,
            STATE_ENDED: $e,
            STATE_RECOGNIZED: Ye,
            STATE_CANCELLED: Ve,
            STATE_FAILED: 32,
            DIRECTION_NONE: H,
            DIRECTION_LEFT: j,
            DIRECTION_RIGHT: W,
            DIRECTION_UP: N,
            DIRECTION_DOWN: X,
            DIRECTION_HORIZONTAL: z,
            DIRECTION_VERTICAL: B,
            DIRECTION_ALL: q,
            Manager: Ge,
            Input: Q,
            TouchAction: Oe,
            TouchInput: be,
            MouseInput: se,
            PointerEventInput: pe,
            TouchMouseInput: ke,
            SingleTouchInput: ve,
            Recognizer: Fe,
            AttrRecognizer: Ne,
            Tap: Ze,
            Pan: Xe,
            Swipe: Ue,
            Pinch: ze,
            Rotate: qe,
            Press: Be,
            on: x,
            off: k,
            each: h,
            merge: v,
            extend: m,
            assign: o,
            inherit: g,
            bindFn: y,
            prefixed: P
        }), (void 0 !== e ? e : "undefined" != typeof self ? self : {}).Hammer = Qe, "function" == typeof define && define.amd ? define(function() {
            return Qe
        }) : "undefined" != typeof module && module.exports ? module.exports = Qe : e.Hammer = Qe
    }(window, document),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
    }(function(e, t) {
        var i;
        e.fn.hammer = function(i) {
            return this.each(function() {
                ! function(i, n) {
                    var o = e(i);
                    o.data("hammer") || o.data("hammer", new t(o[0], n))
                }(this, i)
            })
        }, t.Manager.prototype.emit = (i = t.Manager.prototype.emit, function(t, n) {
            i.call(this, t, n), e(this.element).trigger({
                type: t,
                gesture: n
            })
        })
    }),
    function(e) {
        e.fn.collapsible = function(t) {
            var i = {
                accordion: void 0
            };
            return t = e.extend(i, t), this.each(function() {
                var i = e(this),
                    n = e(this).find("> li > .collapsible-header"),
                    o = i.data("collapsible");

                function r(t) {
                    n = i.find("> li > .collapsible-header"), t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }), n.not(t).removeClass("active").parent().removeClass("active"), n.not(t).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    })
                }

                function a(t) {
                    t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", "")
                        }
                    })
                }

                function s(e) {
                    return l(e).length > 0
                }

                function l(e) {
                    return e.closest("li > .collapsible-header")
                }
                i.off("click.collapse", ".collapsible-header"), n.off("click.collapse"), t.accordion || "accordion" === o || void 0 === o ? ((n = i.find("> li > .collapsible-header")).on("click.collapse", function(t) {
                    var i = e(t.target);
                    s(i) && (i = l(i)), i.toggleClass("active"), r(i)
                }), r(n.filter(".active").first())) : n.each(function() {
                    e(this).on("click.collapse", function(t) {
                        var i = e(t.target);
                        s(i) && (i = l(i)), i.toggleClass("active"), a(i)
                    }), e(this).hasClass("active") && a(e(this))
                })
            })
        }, e(document).ready(function() {
            e(".collapsible").collapsible()
        })
    }(jQuery),
    function(e) {
        e(document).on("change", '.file-field input[type="file"]', function(t) {
            for (var i = e(t.target), n = i.closest(".file-field").find("input.file-path"), o = i[0].files, r = [], a = 0; a < o.length; a++) {
                var s = o[a].name;
                r.push(s)
            }
            n.val(r.join(", ")), n.trigger("change")
        })
    }(jQuery),
    function(e) {
        e.fn.material_select = function(t) {
            function i(e, t, i) {
                var n = e.indexOf(t),
                    o = -1 === n;
                return o ? e.push(t) : e.splice(n, 1), i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(t).toggleClass("active"), i.find("option").eq(t).prop("selected", o),
                    function(e, t) {
                        for (var i = "", n = 0, o = e.length; n < o; n++) {
                            var r = t.find("option").eq(e[n]).text();
                            i += 0 === n ? r : ", " + r
                        }
                        "" === i && (i = t.find("option:disabled").eq(0).text());
                        t.siblings("input.select-dropdown").val(i)
                    }(e, i), o
            }
            e(this).each(function() {
                var n = e(this);
                if (!n.hasClass("browser-default")) {
                    var o = Boolean(n.attr("multiple")),
                        r = n.data("select-id");
                    if (r && (n.parent().find("span.caret").remove(), n.parent().find("input").remove(), n.unwrap(), e("ul#select-options-" + r).remove()), "destroy" !== t) {
                        var a, s = (a = (new Date).getTime(), "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            var t = (a + 16 * Math.random()) % 16 | 0;
                            return a = Math.floor(a / 16), ("x" == e ? t : 3 & t | 8).toString(16)
                        }));
                        n.data("select-id", s);
                        var l = e('<div class="select-wrapper"></div>');
                        l.addClass(n.attr("class"));
                        var c, u, d = e('<ul id="select-options-' + s + '" class="dropdown-content select-dropdown ' + (o ? "multiple-select-dropdown" : "") + '"></ul>'),
                            p = n.children("option, optgroup"),
                            h = [],
                            f = !1,
                            m = n.find("option:selected").html() || n.find("option:first").html() || "",
                            v = function() {
                                var t = e(this).closest("ul"),
                                    i = e(this).val();
                                t.find("li").find("span.filtrable").each(function() {
                                    "string" == typeof this.outerHTML && (-1 === this.textContent.toLowerCase().indexOf(i.toLowerCase()) ? (e(this).hide(), e(this).parent().hide()) : (e(this).show(), e(this).parent().show()))
                                })
                            },
                            g = Boolean(n.attr("searchable"));
                        g && (c = n.attr("searchable"), u = e('<span class="search-wrap"><div class="md-form"><input type="text" class="search form-control" placeholder="' + c + '"></div></span>'), d.append(u), u.find(".search").keyup(v));
                        var y = function(t, i, n) {
                            var o = i.is(":disabled") ? "disabled " : "",
                                r = "optgroup-option" === n ? "optgroup-option " : "",
                                a = i.data("icon"),
                                s = i.attr("class");
                            if (a) {
                                var l = "";
                                return s && (l = ' class="' + s + '"'), "multiple" === n ? d.append(e('<li class="' + o + '"><img alt="" src="' + a + '"' + l + '><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : d.append(e('<li class="' + o + r + '"><img alt="" src="' + a + '"' + l + '><span class="filtrable">' + i.html() + "</span></li>")), !0
                            }
                            "multiple" === n ? d.append(e('<li class="' + o + '"><span class="filtrable"><input type="checkbox"' + o + "/><label></label>" + i.html() + "</span></li>")) : d.append(e('<li class="' + o + r + '"><span class="filtrable">' + i.html() + "</span></li>"))
                        };
                        p.length && p.each(function() {
                            if (e(this).is("option")) o ? y(0, e(this), "multiple") : y(0, e(this));
                            else if (e(this).is("optgroup")) {
                                var t = e(this).children("option");
                                d.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each(function() {
                                    y(0, e(this), "optgroup-option")
                                })
                            }
                        });
                        var b = !1;
                        n.find("optgroup").length && (b = !0);
                        var w = n.parent().find("button.btn-save");
                        w.length && (d.append(w), w.on("click", function() {
                            e("input.select-dropdown").trigger("close")
                        })), d.find("li:not(.optgroup)").each(function(r) {
                            e(this).click(function(a) {
                                if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                                    var s = !0;
                                    o ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                        return !t
                                    }), s = i(h, g ? b ? e(this).index() - e(this).prevAll(".optgroup").length - 1 : e(this).index() - 1 : b ? e(this).index() - e(this).prevAll(".optgroup").length : e(this).index(), n), T.trigger("focus")) : (d.find("li").removeClass("active"), e(this).toggleClass("active"), T.val(e(this).text())), C(d, e(this)), n.find("option").eq(r).prop("selected", s), n.trigger("change"), void 0 !== t && t()
                                }
                                a.stopPropagation()
                            })
                        }), n.wrap(l);
                        var x = e('<span class="caret">&#9660;</span>');
                        n.is(":disabled") && x.addClass("disabled");
                        var k = m.replace(/"/g, "&quot;"),
                            T = e('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + s + '" value="' + k + '"/>');
                        n.before(T), T.before(x), T.after(d), n.is(":disabled") || T.dropdown({
                            hover: !1,
                            closeOnClick: !1
                        }), n.attr("tabindex") && e(T[0]).attr("tabindex", n.attr("tabindex")), n.addClass("initialized"), T.on({
                            focus: function() {
                                if (e("ul.select-dropdown").not(d[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !d.is(":visible")) {
                                    e(this).trigger("open", ["focus"]);
                                    var t = e(this).val(),
                                        i = d.find("li").filter(function() {
                                            return e(this).text().toLowerCase() === t.toLowerCase()
                                        })[0];
                                    C(d, i)
                                }
                            },
                            click: function(e) {
                                e.stopPropagation()
                            }
                        }), T.on("blur", function() {
                            o || g || e(this).trigger("close"), d.find("li.selected").removeClass("selected")
                        }), !o && g && d.find("li").on("click", function() {
                            T.trigger("close")
                        }), d.hover(function() {
                            f = !0
                        }, function() {
                            f = !1
                        }), d.on("mousedown", function(t) {
                            e(".modal-content").find(d).length && this.scrollHeight > this.offsetHeight && t.preventDefault()
                        }), e(window).on({
                            click: function() {
                                (o || g) && (f || T.trigger("close"))
                            }
                        }), o && n.find("option:selected:not(:disabled)").each(function() {
                            var t = e(this).index();
                            i(h, t, n), d.find("li").eq(t).find(":checkbox").prop("checked", !0)
                        });
                        var C = function(t, i) {
                                i && (t.find("li.selected").removeClass("selected"), e(i).addClass("selected"))
                            },
                            S = [];
                        T.on("keydown", function(t) {
                            if (9 != t.which)
                                if (40 != t.which || d.is(":visible")) {
                                    if (13 != t.which || d.is(":visible")) {
                                        t.preventDefault();
                                        var i = String.fromCharCode(t.which).toLowerCase();
                                        if (i && -1 === [9, 13, 27, 38, 40].indexOf(t.which)) {
                                            S.push(i);
                                            var n = S.join(""),
                                                r = d.find("li").filter(function() {
                                                    return 0 === e(this).text().toLowerCase().indexOf(n)
                                                })[0];
                                            r && C(d, r)
                                        }
                                        if (13 == t.which) {
                                            var a = d.find("li.selected:not(.disabled)")[0];
                                            a && (e(a).trigger("click"), o || T.trigger("close"))
                                        }
                                        40 == t.which && (r = d.find("li.selected").length ? d.find("li.selected").next("li:not(.disabled)")[0] : d.find("li:not(.disabled)")[0], C(d, r)), 27 == t.which && T.trigger("close"), 38 == t.which && (r = d.find("li.selected").prev("li:not(.disabled)")[0]) && C(d, r), setTimeout(function() {
                                            S = []
                                        }, 1e3)
                                    }
                                } else T.trigger("open");
                            else T.trigger("close")
                        })
                    } else n.data("select-id", null).removeClass("initialized")
                }
            })
        }
    }(jQuery), jQuery("select").siblings("input.select-dropdown").on("mousedown", function(e) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
    }),
    function(e) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
    }(function(e) {
        var t = e(window),
            i = e(document),
            n = e(document.documentElement),
            o = null != document.documentElement.style.transition;

        function r(t, l, u, d) {
            if (!t) return r;
            var p = !1,
                h = {
                    id: t.id || "P" + Math.abs(~~(Math.random() * new Date))
                },
                f = u ? e.extend(!0, {}, u.defaults, d) : d || {},
                m = e.extend({}, r.klasses(), f.klass),
                v = e(t),
                g = function() {
                    return this.start()
                },
                y = g.prototype = {
                    constructor: g,
                    $node: v,
                    start: function() {
                        return h && h.start ? y : (h.methods = {}, h.start = !0, h.open = !1, h.type = t.type, t.autofocus = t == c(), t.readOnly = !f.editable, t.id = t.id || h.id, "text" != t.type && (t.type = "text"), y.component = new u(y, f), y.$root = e('<div class="' + m.picker + '" id="' + t.id + '_root" />'), s(y.$root[0], "hidden", !0), y.$holder = e(b()).appendTo(y.$root), w(), f.formatSubmit && function() {
                            var i;
                            !0 === f.hiddenName ? (i = t.name, t.name = "") : i = (i = ["string" == typeof f.hiddenPrefix ? f.hiddenPrefix : "", "string" == typeof f.hiddenSuffix ? f.hiddenSuffix : "_submit"])[0] + t.name + i[1];
                            y._hidden = e('<input type=hidden name="' + i + '"' + (v.data("value") || t.value ? ' value="' + y.get("select", f.formatSubmit) + '"' : "") + ">")[0], v.on("change." + h.id, function() {
                                y._hidden.value = t.value ? y.get("select", f.formatSubmit) : ""
                            })
                        }(), function() {
                            v.data(l, y).addClass(m.input).val(v.data("value") ? y.get("select", f.format) : t.value), f.editable || v.on("focus." + h.id + " click." + h.id, function(e) {
                                e.preventDefault(), y.open()
                            }).on("keydown." + h.id, k);
                            s(t, {
                                haspopup: !0,
                                expanded: !1,
                                readonly: !1,
                                owns: t.id + "_root"
                            })
                        }(), f.containerHidden ? e(f.containerHidden).append(y._hidden) : v.after(y._hidden), f.container ? e(f.container).append(y.$root) : v.after(y.$root), y.on({
                            start: y.component.onStart,
                            render: y.component.onRender,
                            stop: y.component.onStop,
                            open: y.component.onOpen,
                            close: y.component.onClose,
                            set: y.component.onSet
                        }).on({
                            start: f.onStart,
                            render: f.onRender,
                            stop: f.onStop,
                            open: f.onOpen,
                            close: f.onClose,
                            set: f.onSet
                        }), p = function(e) {
                            var t;
                            e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position);
                            return "fixed" == t
                        }(y.$holder[0]), t.autofocus && y.open(), y.trigger("start").trigger("render"))
                    },
                    render: function(t) {
                        return t ? (y.$holder = e(b()), w(), y.$root.html(y.$holder)) : y.$root.find("." + m.box).html(y.component.nodes(h.open)), y.trigger("render")
                    },
                    stop: function() {
                        return h.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), v.removeClass(m.input).removeData(l), setTimeout(function() {
                            v.off("." + h.id)
                        }, 0), t.type = h.type, t.readOnly = !1, y.trigger("stop"), h.methods = {}, h.start = !1, y) : y
                    },
                    open: function(l) {
                        return h.open ? y : (v.addClass(m.active), s(t, "expanded", !0), setTimeout(function() {
                            y.$root.addClass(m.opened), s(y.$root[0], "hidden", !1)
                        }, 0), !1 !== l && (h.open = !0, p && n.css("overflow", "hidden").css("padding-right", "+=" + a()), p && o ? y.$holder.find("." + m.frame).one("transitionend", function() {
                            y.$holder[0].focus()
                        }) : y.$holder[0].focus(), i.on("click." + h.id + " focusin." + h.id, function(e) {
                            var i = e.target;
                            i != t && i != document && 3 != e.which && y.close(i === y.$holder[0])
                        }).on("keydown." + h.id, function(t) {
                            var i = t.keyCode,
                                n = y.component.key[i],
                                o = t.target;
                            27 == i ? y.close(!0) : o != y.$holder[0] || !n && 13 != i ? e.contains(y.$root[0], o) && 13 == i && (t.preventDefault(), o.click()) : (t.preventDefault(), n ? r._.trigger(y.component.key.go, y, [r._.trigger(n)]) : y.$root.find("." + m.highlighted).hasClass(m.disabled) || (y.set("select", y.component.item.highlight), f.closeOnSelect && y.close(!0)))
                        })), y.trigger("open"))
                    },
                    close: function(e) {
                        return e && (f.editable ? t.focus() : (y.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                            y.$holder.on("focus.toOpen", x)
                        }, 0))), v.removeClass(m.active), s(t, "expanded", !1), setTimeout(function() {
                            y.$root.removeClass(m.opened + " " + m.focused), s(y.$root[0], "hidden", !0)
                        }, 0), h.open ? (h.open = !1, p && n.css("overflow", "").css("padding-right", "-=" + a()), i.off("." + h.id), y.trigger("close")) : y
                    },
                    clear: function(e) {
                        return y.set("clear", null, e)
                    },
                    set: function(t, i, n) {
                        var o, r, a = e.isPlainObject(t),
                            s = a ? t : {};
                        if (n = a && e.isPlainObject(i) ? i : n || {}, t) {
                            for (o in a || (s[t] = i), s) r = s[o], o in y.component.item && (void 0 === r && (r = null), y.component.set(o, r, n)), "select" != o && "clear" != o || v.val("clear" == o ? "" : y.get(o, f.format)).trigger("change");
                            y.render()
                        }
                        return n.muted ? y : y.trigger("set", s)
                    },
                    get: function(e, i) {
                        if (null != h[e = e || "value"]) return h[e];
                        if ("valueSubmit" == e) {
                            if (y._hidden) return y._hidden.value;
                            e = "value"
                        }
                        if ("value" == e) return t.value;
                        if (e in y.component.item) {
                            if ("string" == typeof i) {
                                var n = y.component.get(e);
                                return n ? r._.trigger(y.component.formats.toString, y.component, [i, n]) : ""
                            }
                            return y.component.get(e)
                        }
                    },
                    on: function(t, i, n) {
                        var o, r, a = e.isPlainObject(t),
                            s = a ? t : {};
                        if (t)
                            for (o in a || (s[t] = i), s) r = s[o], n && (o = "_" + o), h.methods[o] = h.methods[o] || [], h.methods[o].push(r);
                        return y
                    },
                    off: function() {
                        var e, t, i = arguments;
                        for (e = 0, namesCount = i.length; e < namesCount; e += 1)(t = i[e]) in h.methods && delete h.methods[t];
                        return y
                    },
                    trigger: function(e, t) {
                        var i = function(e) {
                            var i = h.methods[e];
                            i && i.map(function(e) {
                                r._.trigger(e, y, [t])
                            })
                        };
                        return i("_" + e), i(e), y
                    }
                };

            function b() {
                return r._.node("div", r._.node("div", r._.node("div", r._.node("div", y.component.nodes(h.open), m.box), m.wrap), m.frame), m.holder, 'tabindex="-1"')
            }

            function w() {
                y.$holder.on({
                    keydown: k,
                    "focus.toOpen": x,
                    blur: function() {
                        v.removeClass(m.target)
                    },
                    focusin: function(e) {
                        y.$root.removeClass(m.focused), e.stopPropagation()
                    },
                    "mousedown click": function(t) {
                        var i = t.target;
                        i != y.$holder[0] && (t.stopPropagation(), "mousedown" != t.type || e(i).is("input, select, textarea, button, option") || (t.preventDefault(), y.$holder[0].focus()))
                    }
                }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var t = e(this),
                        i = t.data(),
                        n = t.hasClass(m.navDisabled) || t.hasClass(m.disabled),
                        o = c();
                    o = o && (o.type || o.href), (n || o && !e.contains(y.$root[0], o)) && y.$holder[0].focus(), !n && i.nav ? y.set("highlight", y.component.item.highlight, {
                        nav: i.nav
                    }) : !n && "pick" in i ? (y.set("select", i.pick), f.closeOnSelect && y.close(!0)) : i.clear ? (y.clear(), f.closeOnClear && y.close(!0)) : i.close && y.close(!0)
                })
            }

            function x(e) {
                e.stopPropagation(), v.addClass(m.target), y.$root.addClass(m.focused), y.open()
            }

            function k(e) {
                var t = e.keyCode,
                    i = /^(8|46)$/.test(t);
                if (27 == t) return y.close(!0), !1;
                (32 == t || i || !h.open && y.component.key[t]) && (e.preventDefault(), e.stopPropagation(), i ? y.clear().close() : y.open())
            }
            return new g
        }

        function a() {
            if (n.height() <= t.height()) return 0;
            var i = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                o = i[0].offsetWidth;
            i.css("overflow", "scroll");
            var r = e('<div style="width:100%" />').appendTo(i)[0].offsetWidth;
            return i.remove(), o - r
        }

        function s(t, i, n) {
            if (e.isPlainObject(i))
                for (var o in i) l(t, o, i[o]);
            else l(t, i, n)
        }

        function l(e, t, i) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, i)
        }

        function c() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        return r.klasses = function(e) {
            return {
                picker: e = e || "picker",
                opened: e + "--opened",
                focused: e + "--focused",
                input: e + "__input",
                active: e + "__input--active",
                target: e + "__input--target",
                holder: e + "__holder",
                frame: e + "__frame",
                wrap: e + "__wrap",
                box: e + "__box"
            }
        }, r._ = {
            group: function(e) {
                for (var t, i = "", n = r._.trigger(e.min, e); n <= r._.trigger(e.max, e, [n]); n += e.i) t = r._.trigger(e.item, e, [n]), i += r._.node(e.node, t[0], t[1], t[2]);
                return i
            },
            node: function(t, i, n, o) {
                return i ? (i = e.isArray(i) ? i.join("") : i, "<" + t + (n = n ? ' class="' + n + '"' : "") + (o = o ? " " + o : "") + ">" + i + "</" + t + ">") : ""
            },
            lead: function(e) {
                return (e < 10 ? "0" : "") + e
            },
            trigger: function(e, t, i) {
                return "function" == typeof e ? e.apply(t, i || []) : e
            },
            digits: function(e) {
                return /\d/.test(e[1]) ? 2 : 1
            },
            isDate: function(e) {
                return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
            },
            isInteger: function(e) {
                return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
            },
            ariaAttr: function(t, i) {
                e.isPlainObject(t) || (t = {
                    attribute: i
                });
                for (var n in i = "", t) {
                    var o = ("role" == n ? "" : "aria-") + n,
                        r = t[n];
                    i += null == r ? "" : o + '="' + t[n] + '"'
                }
                return i
            }
        }, r.extend = function(t, i) {
            e.fn[t] = function(n, o) {
                var a = this.data(t);
                return "picker" == n ? a : a && "string" == typeof n ? r._.trigger(a[n], a, [o]) : this.each(function() {
                    e(this).data(t) || new r(this, t, i, n)
                })
            }, e.fn[t].defaults = i.defaults
        }, r
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
    }(function(e, t) {
        var i, n = e._;

        function o(e, t) {
            var i, n = this,
                o = e.$node[0],
                r = o.value,
                a = e.$node.data("value"),
                s = a || r,
                l = a ? t.formatSubmit : t.format,
                c = function() {
                    return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
                };
            n.settings = t, n.$node = e.$node, n.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, n.item = {}, n.item.clear = null, n.item.disable = (t.disable || []).slice(0), n.item.enable = -(!0 === (i = n.item.disable)[0] ? i.shift() : -1), n.set("min", t.min).set("max", t.max).set("now"), s ? n.set("select", s, {
                format: l,
                defaultValue: !0
            }) : n.set("select", null).set("highlight", n.item.now), n.key = {
                40: 7,
                38: -7,
                39: function() {
                    return c() ? -1 : 1
                },
                37: function() {
                    return c() ? 1 : -1
                },
                go: function(e) {
                    var t = n.item.highlight,
                        i = new Date(t.year, t.month, t.date + e);
                    n.set("highlight", i, {
                        interval: e
                    }), this.render()
                }
            }, e.on("render", function() {
                e.$root.find("." + t.klass.selectMonth).on("change", function() {
                    var i = this.value;
                    i && (e.set("highlight", [e.get("view").year, i, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
                }), e.$root.find("." + t.klass.selectYear).on("change", function() {
                    var i = this.value;
                    i && (e.set("highlight", [i, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var i = "";
                n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + i + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                e.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        o.prototype.set = function(e, t, i) {
            var n = this,
                o = n.item;
            return null === t ? ("clear" == e && (e = "select"), o[e] = t, n) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map(function(o) {
                return t = n[o](e, t, i)
            }).pop(), "select" == e ? n.set("highlight", o.select, i) : "highlight" == e ? n.set("view", o.highlight, i) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && n.disabled(o.select) && n.set("select", o.select, i), o.highlight && n.disabled(o.highlight) && n.set("highlight", o.highlight, i)), n)
        }, o.prototype.get = function(e) {
            return this.item[e]
        }, o.prototype.create = function(e, i, o) {
            var r;
            return (i = void 0 === i ? e : i) == -1 / 0 || i == 1 / 0 ? r = i : t.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : t.isArray(i) ? (i = new Date(i[0], i[1], i[2]), i = n.isDate(i) ? i : this.create().obj) : i = n.isInteger(i) || n.isDate(i) ? this.normalize(new Date(i), o) : this.now(e, i, o), {
                year: r || i.getFullYear(),
                month: r || i.getMonth(),
                date: r || i.getDate(),
                day: r || i.getDay(),
                obj: r || i,
                pick: r || i.getTime()
            }
        }, o.prototype.createRange = function(e, i) {
            var o = this,
                r = function(e) {
                    return !0 === e || t.isArray(e) || n.isDate(e) ? o.create(e) : e
                };
            return n.isInteger(e) || (e = r(e)), n.isInteger(i) || (i = r(i)), n.isInteger(e) && t.isPlainObject(i) ? e = [i.year, i.month, i.date + e] : n.isInteger(i) && t.isPlainObject(e) && (i = [e.year, e.month, e.date + i]), {
                from: r(e),
                to: r(i)
            }
        }, o.prototype.withinRange = function(e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
        }, o.prototype.overlapRanges = function(e, t) {
            return e = this.createRange(e.from, e.to), t = this.createRange(t.from, t.to), this.withinRange(e, t.from) || this.withinRange(e, t.to) || this.withinRange(t, e.from) || this.withinRange(t, e.to)
        }, o.prototype.now = function(e, t, i) {
            return t = new Date, i && i.rel && t.setDate(t.getDate() + i.rel), this.normalize(t, i)
        }, o.prototype.navigate = function(e, i, n) {
            var o, r, a, s, l = t.isArray(i),
                c = t.isPlainObject(i),
                u = this.item.view;
            if (l || c) {
                for (c ? (r = i.year, a = i.month, s = i.date) : (r = +i[0], a = +i[1], s = +i[2]), n && n.nav && u && u.month !== a && (r = u.year, a = u.month), r = (o = new Date(r, a + (n && n.nav ? n.nav : 0), 1)).getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;) s -= 1;
                i = [r, a, s]
            }
            return i
        }, o.prototype.normalize = function(e) {
            return e.setHours(0, 0, 0, 0), e
        }, o.prototype.measure = function(e, t) {
            return t ? "string" == typeof t ? t = this.parse(e, t) : n.isInteger(t) && (t = this.now(e, t, {
                rel: t
            })) : t = "min" == e ? -1 / 0 : 1 / 0, t
        }, o.prototype.viewset = function(e, t) {
            return this.create([t.year, t.month, 1])
        }, o.prototype.validate = function(e, i, o) {
            var r, a, s, l, c = this,
                u = i,
                d = o && o.interval ? o.interval : 1,
                p = -1 === c.item.enable,
                h = c.item.min,
                f = c.item.max,
                m = p && c.item.disable.filter(function(e) {
                    if (t.isArray(e)) {
                        var o = c.create(e).pick;
                        o < i.pick ? r = !0 : o > i.pick && (a = !0)
                    }
                    return n.isInteger(e)
                }).length;
            if ((!o || !o.nav && !o.defaultValue) && (!p && c.disabled(i) || p && c.disabled(i) && (m || r || a) || !p && (i.pick <= h.pick || i.pick >= f.pick)))
                for (p && !m && (!a && d > 0 || !r && d < 0) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u, d = d > 0 ? 1 : -1), i.pick <= h.pick ? (s = !0, d = 1, i = c.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : -1)])) : i.pick >= f.pick && (l = !0, d = -1, i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])), !s || !l);) i = c.create([i.year, i.month, i.date + d]);
            return i
        }, o.prototype.disabled = function(e) {
            var i = this,
                o = i.item.disable.filter(function(o) {
                    return n.isInteger(o) ? e.day === (i.settings.firstDay ? o : o - 1) % 7 : t.isArray(o) || n.isDate(o) ? e.pick === i.create(o).pick : t.isPlainObject(o) ? i.withinRange(o, e) : void 0
                });
            return o = o.length && !o.filter(function(e) {
                return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
            }).length, -1 === i.item.enable ? !o : o || e.pick < i.item.min.pick || e.pick > i.item.max.pick
        }, o.prototype.parse = function(e, t, i) {
            var o = this,
                r = {};
            return t && "string" == typeof t ? (i && i.format || ((i = i || {}).format = o.settings.format), o.formats.toArray(i.format).map(function(e) {
                var i = o.formats[e],
                    a = i ? n.trigger(i, o, [t, r]) : e.replace(/^!/, "").length;
                i && (r[e] = t.substr(0, a)), t = t.substr(a)
            }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
        }, o.prototype.formats = function() {
            function e(e, t, i) {
                var n = e.match(/[^\x00-\x7F]+|\w+/)[0];
                return i.mm || i.m || (i.m = t.indexOf(n) + 1), n.length
            }

            function t(e) {
                return e.match(/\w+/)[0].length
            }
            return {
                d: function(e, t) {
                    return e ? n.digits(e) : t.date
                },
                dd: function(e, t) {
                    return e ? 2 : n.lead(t.date)
                },
                ddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysShort[i.day]
                },
                dddd: function(e, i) {
                    return e ? t(e) : this.settings.weekdaysFull[i.day]
                },
                m: function(e, t) {
                    return e ? n.digits(e) : t.month + 1
                },
                mm: function(e, t) {
                    return e ? 2 : n.lead(t.month + 1)
                },
                mmm: function(t, i) {
                    var n = this.settings.monthsShort;
                    return t ? e(t, n, i) : n[i.month]
                },
                mmmm: function(t, i) {
                    var n = this.settings.monthsFull;
                    return t ? e(t, n, i) : n[i.month]
                },
                yy: function(e, t) {
                    return e ? 2 : ("" + t.year).slice(2)
                },
                yyyy: function(e, t) {
                    return e ? 4 : t.year
                },
                toArray: function(e) {
                    return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(e, t) {
                    var i = this;
                    return i.formats.toArray(e).map(function(e) {
                        return n.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), o.prototype.isDateExact = function(e, i) {
            return n.isInteger(e) && n.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (n.isDate(e) || t.isArray(e)) && (n.isDate(i) || t.isArray(i)) ? this.create(e).pick === this.create(i).pick : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && (this.isDateExact(e.from, i.from) && this.isDateExact(e.to, i.to))
        }, o.prototype.isDateOverlap = function(e, i) {
            var o = this.settings.firstDay ? 1 : 0;
            return n.isInteger(e) && (n.isDate(i) || t.isArray(i)) ? (e = e % 7 + o) === this.create(i).day + 1 : n.isInteger(i) && (n.isDate(e) || t.isArray(e)) ? (i = i % 7 + o) === this.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && this.overlapRanges(e, i)
        }, o.prototype.flipEnable = function(e) {
            var t = this.item;
            t.enable = e || (-1 == t.enable ? 1 : -1)
        }, o.prototype.deactivate = function(e, i) {
            var o = this,
                r = o.item.disable.slice(0);
            return "flip" == i ? o.flipEnable() : !1 === i ? (o.flipEnable(1), r = []) : !0 === i ? (o.flipEnable(-1), r = []) : i.map(function(e) {
                for (var i, a = 0; a < r.length; a += 1)
                    if (o.isDateExact(e, r[a])) {
                        i = !0;
                        break
                    }
                i || (n.isInteger(e) || n.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
            }), r
        }, o.prototype.activate = function(e, i) {
            var o = this,
                r = o.item.disable,
                a = r.length;
            return "flip" == i ? o.flipEnable() : !0 === i ? (o.flipEnable(1), r = []) : !1 === i ? (o.flipEnable(-1), r = []) : i.map(function(e) {
                var i, s, l, c;
                for (l = 0; l < a; l += 1) {
                    if (s = r[l], o.isDateExact(s, e)) {
                        i = r[l] = null, c = !0;
                        break
                    }
                    if (o.isDateOverlap(s, e)) {
                        t.isPlainObject(e) ? (e.inverted = !0, i = e) : t.isArray(e) ? (i = e)[3] || i.push("inverted") : n.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                        break
                    }
                }
                if (i)
                    for (l = 0; l < a; l += 1)
                        if (o.isDateExact(r[l], e)) {
                            r[l] = null;
                            break
                        }
                if (c)
                    for (l = 0; l < a; l += 1)
                        if (o.isDateOverlap(r[l], e)) {
                            r[l] = null;
                            break
                        }
                i && r.push(i)
            }), r.filter(function(e) {
                return null != e
            })
        }, o.prototype.nodes = function(e) {
            var t, i, o = this,
                r = o.settings,
                a = o.item,
                s = a.now,
                l = a.select,
                c = a.highlight,
                u = a.view,
                d = a.disable,
                p = a.min,
                h = a.max,
                f = (t = (r.showWeekdaysFull ? r.weekdaysFull : r.weekdaysShort).slice(0), i = r.weekdaysFull.slice(0), r.firstDay && (t.push(t.shift()), i.push(i.shift())), n.node("thead", n.node("tr", n.group({
                    min: 0,
                    max: 6,
                    i: 1,
                    node: "th",
                    item: function(e) {
                        return [t[e], r.klass.weekdays, 'scope=col title="' + i[e] + '"']
                    }
                })))),
                m = function(e) {
                    return n.node("div", " ", r.klass["nav" + (e ? "Next" : "Prev")] + (e && u.year >= h.year && u.month >= h.month || !e && u.year <= p.year && u.month <= p.month ? " " + r.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + n.ariaAttr({
                        role: "button",
                        controls: o.$node[0].id + "_table"
                    }) + ' title="' + (e ? r.labelMonthNext : r.labelMonthPrev) + '"')
                },
                v = function() {
                    var t = r.showMonthsShort ? r.monthsShort : r.monthsFull;
                    return r.selectMonths ? n.node("select", n.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [t[e], 0, "value=" + e + (u.month == e ? " selected" : "") + (u.year == p.year && e < p.month || u.year == h.year && e > h.month ? " disabled" : "")]
                        }
                    }), r.klass.selectMonth, (e ? "" : "disabled") + " " + n.ariaAttr({
                        controls: o.$node[0].id + "_table"
                    }) + ' title="' + r.labelMonthSelect + '"') : n.node("div", t[u.month], r.klass.month)
                },
                g = function() {
                    var t = u.year,
                        i = !0 === r.selectYears ? 5 : ~~(r.selectYears / 2);
                    if (i) {
                        var a = p.year,
                            s = h.year,
                            l = t - i,
                            c = t + i;
                        if (a > l && (c += a - l, l = a), s < c) {
                            var d = l - a,
                                f = c - s;
                            l -= d > f ? f : d, c = s
                        }
                        return n.node("select", n.group({
                            min: l,
                            max: c,
                            i: 1,
                            node: "option",
                            item: function(e) {
                                return [e, 0, "value=" + e + (t == e ? " selected" : "")]
                            }
                        }), r.klass.selectYear, (e ? "" : "disabled") + " " + n.ariaAttr({
                            controls: o.$node[0].id + "_table"
                        }) + ' title="' + r.labelYearSelect + '"')
                    }
                    return n.node("div", t, r.klass.year)
                };
            return n.node("div", (r.selectYears ? g() + v() : v() + g()) + m() + m(1), r.klass.header) + n.node("table", f + n.node("tbody", n.group({
                min: 0,
                max: 5,
                i: 1,
                node: "tr",
                item: function(e) {
                    var t = r.firstDay && 0 === o.create([u.year, u.month, 1]).day ? -7 : 0;
                    return [n.group({
                        min: 7 * e - u.day + t + 1,
                        max: function() {
                            return this.min + 7 - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(e) {
                            e = o.create([u.year, u.month, e + (r.firstDay ? 1 : 0)]);
                            var t, i = l && l.pick == e.pick,
                                a = c && c.pick == e.pick,
                                f = d && o.disabled(e) || e.pick < p.pick || e.pick > h.pick,
                                m = n.trigger(o.formats.toString, o, [r.format, e]);
                            return [n.node("div", e.date, (t = [r.klass.day], t.push(u.month == e.month ? r.klass.infocus : r.klass.outfocus), s.pick == e.pick && t.push(r.klass.now), i && t.push(r.klass.selected), a && t.push(r.klass.highlighted), f && t.push(r.klass.disabled), t.join(" ")), "data-pick=" + e.pick + " " + n.ariaAttr({
                                role: "gridcell",
                                label: m,
                                selected: !(!i || o.$node.val() !== m) || null,
                                activedescendant: !!a || null,
                                disabled: !!f || null
                            })), "", n.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), r.klass.table, 'id="' + o.$node[0].id + '_table" ' + n.ariaAttr({
                role: "grid",
                controls: o.$node[0].id,
                readonly: !0
            })) + n.node("div", n.node("button", r.today, r.klass.buttonToday, "type=button data-pick=" + s.pick + (e && !o.disabled(s) ? "" : " disabled") + " " + n.ariaAttr({
                controls: o.$node[0].id
            })) + n.node("button", r.clear, r.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + n.ariaAttr({
                controls: o.$node[0].id
            })) + n.node("button", r.close, r.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + n.ariaAttr({
                controls: o.$node[0].id
            })), r.klass.footer)
        }, o.defaults = {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            closeOnSelect: !0,
            closeOnClear: !0,
            format: "d mmmm, yyyy",
            klass: {
                table: (i = e.klasses().picker + "__") + "table",
                header: i + "header",
                navPrev: i + "nav--prev",
                navNext: i + "nav--next",
                navDisabled: i + "nav--disabled",
                month: i + "month",
                year: i + "year",
                selectMonth: i + "select--month",
                selectYear: i + "select--year",
                weekdays: i + "weekday",
                day: i + "day",
                disabled: i + "day--disabled",
                selected: i + "day--selected",
                highlighted: i + "day--highlighted",
                now: i + "day--today",
                infocus: i + "day--infocus",
                outfocus: i + "day--outfocus",
                footer: i + "footer",
                buttonClear: i + "button--clear",
                buttonToday: i + "button--today",
                buttonClose: i + "button--close"
            }
        }, e.extend("pickadate", o)
    }), $.extend($.fn.pickadate.defaults, {
        selectMonths: !0,
        selectYears: 15,
        onRender: function() {
            var e = this.$root,
                t = this.get("highlight", "yyyy"),
                i = this.get("highlight", "dd"),
                n = this.get("highlight", "mmm"),
                o = this.get("highlight", "dddd");
            e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + '</div><div class="picker__month-display"><div>' + n + '</div></div><div class="picker__day-display"><div>' + i + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
        }
    }),
    function() {
        var e, t, i, n = window.jQuery,
            o = n(window),
            r = n(document),
            a = "http://www.w3.org/2000/svg",
            s = "SVGAngle" in window && ((t = document.createElement("div")).innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == a, t.innerHTML = "", e),
            l = "transition" in (i = document.createElement("div").style) || "WebkitTransition" in i || "MozTransition" in i || "msTransition" in i || "OTransition" in i,
            c = "ontouchstart" in window,
            u = "mousedown" + (c ? " touchstart" : ""),
            d = "mousemove.clockpicker" + (c ? " touchmove.clockpicker" : ""),
            p = "mouseup.clockpicker" + (c ? " touchend.clockpicker" : ""),
            h = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;

        function f(e) {
            return document.createElementNS(a, e)
        }

        function m(e) {
            return (e < 10 ? "0" : "") + e
        }
        var v = 0;
        var g = 135,
            y = 110,
            b = 80,
            w = 20,
            x = 2 * g,
            k = l ? 350 : 1,
            T = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");

        function C(e, t) {
            var i, o, a = n(T),
                l = a.find(".clockpicker-plate"),
                c = a.find(".picker__holder"),
                h = a.find(".clockpicker-hours"),
                C = a.find(".clockpicker-minutes"),
                E = a.find(".clockpicker-am-pm-block"),
                I = "INPUT" === e.prop("tagName"),
                A = I ? e : e.find("input"),
                P = (A.prop("type"), n("label[for=" + A.attr("id") + "]")),
                M = this;
            if (this.id = (o = ++v + "", (i = "cp") ? i + o : o), this.element = e, this.holder = c, this.options = t, this.isAppended = !1, this.isShown = !1, this.currentView = "hours", this.isInput = I, this.input = A, this.label = P, this.popover = a, this.plate = l, this.hoursView = h, this.minutesView = C, this.amPmBlock = E, this.spanHours = a.find(".clockpicker-span-hours"), this.spanMinutes = a.find(".clockpicker-span-minutes"), this.spanAmPm = a.find(".clockpicker-span-am-pm"), this.footer = a.find(".picker__footer"), this.amOrPm = "", t.twelvehour) {
                var D = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
                n(D);
                t.ampmclickable ? (this.spanAmPm.empty(), n('<div id="click-am">AM</div>').on("click", function() {
                    M.spanAmPm.children("#click-am").addClass("text-primary"), M.spanAmPm.children("#click-pm").removeClass("text-primary"), M.amOrPm = "AM"
                }).appendTo(this.spanAmPm), n('<div id="click-pm">PM</div>').on("click", function() {
                    M.spanAmPm.children("#click-pm").addClass("text-primary"), M.spanAmPm.children("#click-am").removeClass("text-primary"), M.amOrPm = "PM"
                }).appendTo(this.spanAmPm)) : (n('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function() {
                    M.amOrPm = "AM", M.amPmBlock.children(".pm-button").removeClass("active"), M.amPmBlock.children(".am-button").addClass("active"), M.spanAmPm.empty().append("AM")
                }).appendTo(this.amPmBlock), n('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function() {
                    M.amOrPm = "PM", M.amPmBlock.children(".am-button").removeClass("active"), M.amPmBlock.children(".pm-button").addClass("active"), M.spanAmPm.empty().append("PM")
                }).appendTo(this.amPmBlock))
            }
            t.darktheme && a.addClass("darktheme"), n('<button type="button" class="btn btn-flat clockpicker-button" tabindex="' + (t.twelvehour ? "3" : "1") + '">' + t.donetext + "</button>").click(n.proxy(this.done, this)).appendTo(this.footer), this.spanHours.click(n.proxy(this.toggleView, this, "hours")), this.spanMinutes.click(n.proxy(this.toggleView, this, "minutes")), A.on("focus.clockpicker click.clockpicker", n.proxy(this.show, this));
            var O, L, _, R, $ = n('<div class="clockpicker-tick"></div>');
            if (t.twelvehour)
                for (O = 0; O < 12; O += t.hourstep) L = $.clone(), _ = O / 6 * Math.PI, R = y, L.css("font-size", "140%"), L.css({
                    left: g + Math.sin(_) * R - w,
                    top: g - Math.cos(_) * R - w
                }), L.html(0 === O ? 12 : O), h.append(L), L.on(u, F);
            else
                for (O = 0; O < 24; O += t.hourstep) {
                    L = $.clone(), _ = O / 6 * Math.PI;
                    var Y = O > 0 && O < 13;
                    R = Y ? b : y, L.css({
                        left: g + Math.sin(_) * R - w,
                        top: g - Math.cos(_) * R - w
                    }), Y && L.css("font-size", "120%"), L.html(0 === O ? "00" : O), h.append(L), L.on(u, F)
                }
            var V = Math.max(t.minutestep, 5);
            for (O = 0; O < 60; O += V)
                for (O = 0; O < 60; O += 5) L = $.clone(), _ = O / 30 * Math.PI, L.css({
                    left: g + Math.sin(_) * y - w,
                    top: g - Math.cos(_) * y - w
                }), L.css("font-size", "140%"), L.html(m(O)), C.append(L), L.on(u, F);

            function F(e, i) {
                var n = l.offset(),
                    o = /^touch/.test(e.type),
                    a = n.left + g,
                    c = n.top + g,
                    u = (o ? e.originalEvent.touches[0] : e).pageX - a,
                    h = (o ? e.originalEvent.touches[0] : e).pageY - c,
                    f = Math.sqrt(u * u + h * h),
                    m = !1;
                if (!i || !(f < y - w || f > y + w)) {
                    e.preventDefault();
                    var v = setTimeout(function() {
                        M.popover.addClass("clockpicker-moving")
                    }, 200);
                    s && l.append(M.canvas), M.setHand(u, h, !i, !0), r.off(d).on(d, function(e) {
                        e.preventDefault();
                        var t = /^touch/.test(e.type),
                            i = (t ? e.originalEvent.touches[0] : e).pageX - a,
                            n = (t ? e.originalEvent.touches[0] : e).pageY - c;
                        (m || i !== u || n !== h) && (m = !0, M.setHand(i, n, !1, !0))
                    }), r.off(p).on(p, function(e) {
                        r.off(p), e.preventDefault();
                        var n = /^touch/.test(e.type),
                            o = (n ? e.originalEvent.changedTouches[0] : e).pageX - a,
                            s = (n ? e.originalEvent.changedTouches[0] : e).pageY - c;
                        (i || m) && o === u && s === h && M.setHand(o, s), "hours" === M.currentView ? M.toggleView("minutes", k / 2) : t.autoclose && (M.minutesView.addClass("clockpicker-dial-out"), setTimeout(function() {
                            M.done()
                        }, k / 2)), l.prepend(H), clearTimeout(v), M.popover.removeClass("clockpicker-moving"), r.off(d)
                    })
                }
            }
            if (l.on(u, function(e) {
                    0 === n(e.target).closest(".clockpicker-tick").length && F(e, !0)
                }), s) {
                var H = a.find(".clockpicker-canvas"),
                    j = f("svg");
                j.setAttribute("class", "clockpicker-svg"), j.setAttribute("width", x), j.setAttribute("height", x);
                var W = f("g");
                W.setAttribute("transform", "translate(" + g + "," + g + ")");
                var N = f("circle");
                N.setAttribute("class", "clockpicker-canvas-bearing"), N.setAttribute("cx", 0), N.setAttribute("cy", 0), N.setAttribute("r", 2);
                var X = f("line");
                X.setAttribute("x1", 0), X.setAttribute("y1", 0);
                var z = f("circle");
                z.setAttribute("class", "clockpicker-canvas-bg"), z.setAttribute("r", w);
                var B = f("circle");
                B.setAttribute("class", "clockpicker-canvas-fg"), B.setAttribute("r", 5), W.appendChild(X), W.appendChild(z), W.appendChild(B), W.appendChild(N), j.appendChild(W), H.append(j), this.hand = X, this.bg = z, this.fg = B, this.bearing = N, this.g = W, this.canvas = H
            }
            S(this.options.init)
        }

        function S(e) {
            e && "function" == typeof e && e()
        }
        C.DEFAULTS = {
            default: "",
            fromnow: 0,
            donetext: "Done",
            autoclose: !1,
            ampmclickable: !1,
            darktheme: !1,
            twelvehour: !1,
            vibrate: !0,
            hourstep: 1,
            minutestep: 1,
            ampmSubmit: !1
        }, C.prototype.toggle = function() {
            this[this.isShown ? "hide" : "show"]()
        }, C.prototype.locate = function() {
            var e = this.element,
                t = this.popover;
            e.offset(), e.outerWidth(), e.outerHeight(), this.options.align;
            t.show()
        }, C.prototype.parseInputValue = function() {
            var e = this.input.prop("value") || this.options.default || "";
            if ("now" === e && (e = new Date(+new Date + this.options.fromnow)), e instanceof Date && (e = e.getHours() + ":" + e.getMinutes()), e = e.split(":"), this.hours = +e[0] || 0, this.minutes = +(e[1] + "").replace(/\D/g, "") || 0, this.hours = Math.round(this.hours / this.options.hourstep) * this.options.hourstep, this.minutes = Math.round(this.minutes / this.options.minutestep) * this.options.minutestep, this.options.twelvehour) {
                var t = (e[1] + "").replace(/\d+/g, "").toLowerCase();
                this.amOrPm = this.hours > 12 || "pm" === t ? "PM" : "AM"
            }
        }, C.prototype.show = function(e) {
            if (!this.isShown) {
                S(this.options.beforeShow), n(":input").each(function() {
                    n(this).attr("tabindex", -1)
                });
                var t = this;
                this.input.blur(), this.popover.addClass("picker--opened"), this.input.addClass("picker__input picker__input--active"), n(document.body).css("overflow", "hidden"), this.isAppended || (this.popover.insertAfter(this.input), this.options.twelvehour && (this.amOrPm = "PM", this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"), this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"), this.amPmBlock.children(".pm-button").addClass("active"), this.spanAmPm.empty().append("PM"))), o.on("resize.clockpicker" + this.id, function() {
                    t.isShown && t.locate()
                }), this.isAppended = !0), this.parseInputValue(), this.spanHours.html(m(this.hours)), this.spanMinutes.html(m(this.minutes)), this.options.twelvehour && this.spanAmPm.empty().append(this.amOrPm), this.toggleView("hours"), this.locate(), this.isShown = !0, r.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function(e) {
                    var i = n(e.target);
                    0 === i.closest(t.popover.find(".picker__wrap")).length && 0 === i.closest(t.input).length && t.hide()
                }), r.on("keyup.clockpicker." + this.id, function(e) {
                    27 === e.keyCode && t.hide()
                }), S(this.options.afterShow)
            }
        }, C.prototype.hide = function() {
            S(this.options.beforeHide), this.input.removeClass("picker__input picker__input--active"), this.popover.removeClass("picker--opened"), n(document.body).css("overflow", "visible"), this.isShown = !1, n(":input").each(function(e) {
                n(this).attr("tabindex", e + 1)
            }), r.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id), r.off("keyup.clockpicker." + this.id), this.popover.hide(), S(this.options.afterHide)
        }, C.prototype.toggleView = function(e, t) {
            var i = !1;
            "minutes" === e && "visible" === n(this.hoursView).css("visibility") && (S(this.options.beforeHourSelect), i = !0);
            var o = "hours" === e,
                r = o ? this.hoursView : this.minutesView,
                a = o ? this.minutesView : this.hoursView;
            this.currentView = e, this.spanHours.toggleClass("text-primary", o), this.spanMinutes.toggleClass("text-primary", !o), a.addClass("clockpicker-dial-out"), r.css("visibility", "visible").removeClass("clockpicker-dial-out"), this.resetClock(t), clearTimeout(this.toggleViewTimer), this.toggleViewTimer = setTimeout(function() {
                a.css("visibility", "hidden")
            }, k), i && S(this.options.afterHourSelect)
        }, C.prototype.resetClock = function(e) {
            var t = this.currentView,
                i = this[t],
                n = "hours" === t,
                o = i * (Math.PI / (n ? 6 : 30)),
                r = n && i > 0 && i < 13 ? b : y,
                a = Math.sin(o) * r,
                l = -Math.cos(o) * r,
                c = this;
            s && e ? (c.canvas.addClass("clockpicker-canvas-out"), setTimeout(function() {
                c.canvas.removeClass("clockpicker-canvas-out"), c.setHand(a, l)
            }, e)) : this.setHand(a, l)
        }, C.prototype.setHand = function(e, t, i, o) {
            var r, a, l = Math.atan2(e, -t),
                c = "hours" === this.currentView,
                u = Math.sqrt(e * e + t * t),
                d = this.options,
                p = c && u < (y + b) / 2,
                f = p ? b : y;
            if (r = c ? d.hourstep / 6 * Math.PI : d.minutestep / 30 * Math.PI, d.twelvehour && (f = y), l < 0 && (l = 2 * Math.PI + l), l = (a = Math.round(l / r)) * r, c ? (a *= d.hourstep, d.twelvehour || !p != a > 0 || (a += 12), d.twelvehour && 0 === a && (a = 12), 24 === a && (a = 0)) : 60 === (a *= d.minutestep) && (a = 0), c ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : a % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"), this[this.currentView] !== a && h && this.options.vibrate && (this.vibrateTimer || (navigator[h](10), this.vibrateTimer = setTimeout(n.proxy(function() {
                    this.vibrateTimer = null
                }, this), 100))), this[this.currentView] = a, this[c ? "spanHours" : "spanMinutes"].html(m(a)), s) {
                o || !c && a % 5 ? (this.g.insertBefore(this.hand, this.bearing), this.g.insertBefore(this.bg, this.fg), this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg), this.g.insertBefore(this.fg, this.bg), this.bg.setAttribute("class", "clockpicker-canvas-bg"));
                var v = Math.sin(l) * f,
                    g = -Math.cos(l) * f;
                this.hand.setAttribute("x2", v), this.hand.setAttribute("y2", g), this.bg.setAttribute("cx", v), this.bg.setAttribute("cy", g), this.fg.setAttribute("cx", v), this.fg.setAttribute("cy", g)
            } else this[c ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function() {
                var e = n(this);
                e.toggleClass("active", a === +e.html())
            })
        }, C.prototype.getTime = function(e) {
            this.parseInputValue();
            var t = this.hours;
            this.options.twelvehour && t < 12 && "PM" === this.amOrPm && (t += 12);
            var i = new Date;
            return i.setMinutes(this.minutes), i.setHours(t), i.setSeconds(0), e && e.apply(this.element, i) || i
        }, C.prototype.done = function() {
            S(this.options.beforeDone), this.hide(), this.label.addClass("active");
            var e = this.input.prop("value"),
                t = this.hours,
                i = ":" + m(this.minutes);
            this.isHTML5 && this.options.twelvehour && (this.hours < 12 && "PM" === this.amOrPm && (t += 12), 12 === this.hours && "AM" === this.amOrPm && (t = 0)), i = m(t) + i, !this.isHTML5 && this.options.twelvehour && (i += this.amOrPm), this.input.prop("value", i), i !== e && (this.input.trigger("change"), this.isInput || this.element.trigger("change")), this.options.autoclose && this.input.trigger("blur"), S(this.options.afterDone)
        }, C.prototype.remove = function() {
            this.element.removeData("clockpicker"), this.input.off("focus.clockpicker click.clockpicker"), this.isShown && this.hide(), this.isAppended && (o.off("resize.clockpicker" + this.id), this.popover.remove())
        }, n.fn.pickatime = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);

            function i() {
                var i = n(this),
                    o = i.data("clockpicker");
                if (o) "function" == typeof o[e] && o[e].apply(o, t);
                else {
                    var r = n.extend({}, C.DEFAULTS, i.data(), "object" == typeof e && e);
                    i.data("clockpicker", new C(i, r))
                }
            }
            if (1 == this.length) {
                var o = i.apply(this[0]);
                return void 0 !== o ? o : this
            }
            return this.each(i)
        }
    }(),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
    }(this, function() {
        "use strict";
        return function(e, t, i, n) {
            var o = {
                features: null,
                bind: function(e, t, i, n) {
                    var o = (n ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var r = 0; r < t.length; r++) t[r] && e[o](t[r], i, !1)
                },
                isArray: function(e) {
                    return e instanceof Array
                },
                createEl: function(e, t) {
                    var i = document.createElement(t || "div");
                    return e && (i.className = e), i
                },
                getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop
                },
                unbind: function(e, t, i) {
                    o.bind(e, t, i, !0)
                },
                removeClass: function(e, t) {
                    var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(e, t) {
                    o.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
                },
                hasClass: function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
                },
                getChildByClass: function(e, t) {
                    for (var i = e.firstChild; i;) {
                        if (o.hasClass(i, t)) return i;
                        i = i.nextSibling
                    }
                },
                arraySearch: function(e, t, i) {
                    for (var n = e.length; n--;)
                        if (e[n][i] === t) return n;
                    return -1
                },
                extend: function(e, t, i) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            if (i && e.hasOwnProperty(n)) continue;
                            e[n] = t[n]
                        }
                },
                easing: {
                    sine: {
                        out: function(e) {
                            return Math.sin(e * (Math.PI / 2))
                        },
                        inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(e) {
                            return --e * e * e + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (o.features) return o.features;
                    var e = o.createEl().style,
                        t = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var n = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && 8 > r && (i.isOldIOSPhone = !0)
                        }
                        var a = n.match(/Android\s([0-9\.]*)/),
                            s = a ? a[1] : 0;
                        (s = parseFloat(s)) >= 1 && (4.4 > s && (i.isOldAndroid = !0), i.androidVersion = s), i.isMobileOpera = /opera mini|opera mobi/i.test(n)
                    }
                    for (var l, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], p = 0; 4 > p; p++) {
                        t = d[p];
                        for (var h = 0; 3 > h; h++) l = u[h], c = t + (t ? l.charAt(0).toUpperCase() + l.slice(1) : l), !i[l] && c in e && (i[l] = c);
                        t && !i.raf && (t = t.toLowerCase(), i.raf = window[t + "RequestAnimationFrame"], i.raf && (i.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var f = 0;
                        i.raf = function(e) {
                            var t = (new Date).getTime(),
                                i = Math.max(0, 16 - (t - f)),
                                n = window.setTimeout(function() {
                                    e(t + i)
                                }, i);
                            return f = t + i, n
                        }, i.caf = function(e) {
                            clearTimeout(e)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, o.features = i, i
                }
            };
            o.detectFeatures(), o.features.oldIE && (o.bind = function(e, t, i, n) {
                t = t.split(" ");
                for (var o, r = (n ? "detach" : "attach") + "Event", a = function() {
                        i.handleEvent.call(i)
                    }, s = 0; s < t.length; s++)
                    if (o = t[s])
                        if ("object" == typeof i && i.handleEvent) {
                            if (n) {
                                if (!i["oldIE" + o]) return !1
                            } else i["oldIE" + o] = a;
                            e[r]("on" + o, i["oldIE" + o])
                        } else e[r]("on" + o, i)
            });
            var r = this,
                a = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(e) {
                        return "A" === e.tagName
                    },
                    getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            o.extend(a, n);
            var s, l, c, u, d, p, h, f, m, v, g, y, b, w, x, k, T, C, S, E, I, A, P, M, D, O, L, _, R, $, Y, V, F, H, j, W, N, X, z, B, q, U, Z, Q, G, K, J, ee, te, ie, ne, oe, re, ae, se, le = {
                    x: 0,
                    y: 0
                },
                ce = {
                    x: 0,
                    y: 0
                },
                ue = {
                    x: 0,
                    y: 0
                },
                de = {},
                pe = 0,
                he = {},
                fe = {
                    x: 0,
                    y: 0
                },
                me = 0,
                ve = !0,
                ge = [],
                ye = {},
                be = !1,
                we = function(e, t) {
                    o.extend(r, t.publicMethods), ge.push(e)
                },
                xe = function(e) {
                    var t = Ht();
                    return e > t - 1 ? e - t : 0 > e ? t + e : e
                },
                ke = {},
                Te = function(e, t) {
                    return ke[e] || (ke[e] = []), ke[e].push(t)
                },
                Ce = function(e) {
                    var t = ke[e];
                    if (t) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var n = 0; n < t.length; n++) t[n].apply(r, i)
                    }
                },
                Se = function() {
                    return (new Date).getTime()
                },
                Ee = function(e) {
                    re = e, r.bg.style.opacity = e * a.bgOpacity
                },
                Ie = function(e, t, i, n, o) {
                    (!be || o && o !== r.currItem) && (n /= o ? o.fitRatio : r.currItem.fitRatio), e[A] = y + t + "px, " + i + "px" + b + " scale(" + n + ")"
                },
                Ae = function(e) {
                    ee && (e && (v > r.currItem.fitRatio ? be || (Zt(r.currItem, !1, !0), be = !0) : be && (Zt(r.currItem), be = !1)), Ie(ee, ue.x, ue.y, v))
                },
                Pe = function(e) {
                    e.container && Ie(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
                },
                Me = function(e, t) {
                    t[A] = y + e + "px, 0px" + b
                },
                De = function(e, t) {
                    if (!a.loop && t) {
                        var i = u + (fe.x * pe - e) / fe.x,
                            n = Math.round(e - ct.x);
                        (0 > i && n > 0 || i >= Ht() - 1 && 0 > n) && (e = ct.x + n * a.mainScrollEndFriction)
                    }
                    ct.x = e, Me(e, d)
                },
                Oe = function(e, t) {
                    var i = ut[e] - he[e];
                    return ce[e] + le[e] + i - i * (t / g)
                },
                Le = function(e, t) {
                    e.x = t.x, e.y = t.y, t.id && (e.id = t.id)
                },
                _e = function(e) {
                    e.x = Math.round(e.x), e.y = Math.round(e.y)
                },
                Re = null,
                $e = function() {
                    Re && (o.unbind(document, "mousemove", $e), o.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, Ce("mouseUsed")), Re = setTimeout(function() {
                        Re = null
                    }, 100)
                },
                Ye = function(e, t) {
                    var i = zt(r.currItem, de, e);
                    return t && (J = i), i
                },
                Ve = function(e) {
                    return e || (e = r.currItem), e.initialZoomLevel
                },
                Fe = function(e) {
                    return e || (e = r.currItem), e.w > 0 ? a.maxSpreadZoom : 1
                },
                He = function(e, t, i, n) {
                    return n === r.currItem.initialZoomLevel ? (i[e] = r.currItem.initialPosition[e], !0) : (i[e] = Oe(e, n), i[e] > t.min[e] ? (i[e] = t.min[e], !0) : i[e] < t.max[e] && (i[e] = t.max[e], !0))
                },
                je = function(e) {
                    var t = "";
                    a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, r[t]()))
                },
                We = function(e) {
                    e && (q || B || te || W) && (e.preventDefault(), e.stopPropagation())
                },
                Ne = function() {
                    r.setScrollOffset(0, o.getScrollY())
                },
                Xe = {},
                ze = 0,
                Be = function(e) {
                    Xe[e] && (Xe[e].raf && O(Xe[e].raf), ze--, delete Xe[e])
                },
                qe = function(e) {
                    Xe[e] && Be(e), Xe[e] || (ze++, Xe[e] = {})
                },
                Ue = function() {
                    for (var e in Xe) Xe.hasOwnProperty(e) && Be(e)
                },
                Ze = function(e, t, i, n, o, r, a) {
                    var s, l = Se();
                    qe(e);
                    var c = function() {
                        if (Xe[e]) {
                            if ((s = Se() - l) >= n) return Be(e), r(i), void(a && a());
                            r((i - t) * o(s / n) + t), Xe[e].raf = D(c)
                        }
                    };
                    c()
                },
                Qe = {
                    shout: Ce,
                    listen: Te,
                    viewportSize: de,
                    options: a,
                    isMainScrollAnimating: function() {
                        return te
                    },
                    getZoomLevel: function() {
                        return v
                    },
                    getCurrentIndex: function() {
                        return u
                    },
                    isDragging: function() {
                        return X
                    },
                    isZooming: function() {
                        return G
                    },
                    setScrollOffset: function(e, t) {
                        he.x = e, $ = he.y = t, Ce("updateScrollOffset", he)
                    },
                    applyZoomPan: function(e, t, i, n) {
                        ue.x = t, ue.y = i, v = e, Ae(n)
                    },
                    init: function() {
                        if (!s && !l) {
                            var i;
                            r.framework = o, r.template = e, r.bg = o.getChildByClass(e, "pswp__bg"), L = e.className, s = !0, Y = o.detectFeatures(), D = Y.raf, O = Y.caf, A = Y.transform, R = Y.oldIE, r.scrollWrap = o.getChildByClass(e, "pswp__scroll-wrap"), r.container = o.getChildByClass(r.scrollWrap, "pswp__container"), d = r.container.style, r.itemHolders = k = [{
                                    el: r.container.children[0],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: r.container.children[1],
                                    wrap: 0,
                                    index: -1
                                }, {
                                    el: r.container.children[2],
                                    wrap: 0,
                                    index: -1
                                }], k[0].el.style.display = k[2].el.style.display = "none",
                                function() {
                                    if (A) {
                                        var t = Y.perspective && !M;
                                        return y = "translate" + (t ? "3d(" : "("), void(b = Y.perspective ? ", 0px)" : ")")
                                    }
                                    A = "left", o.addClass(e, "pswp--ie"), Me = function(e, t) {
                                        t.left = e + "px"
                                    }, Pe = function(e) {
                                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                                            i = e.container.style,
                                            n = t * e.w,
                                            o = t * e.h;
                                        i.width = n + "px", i.height = o + "px", i.left = e.initialPosition.x + "px", i.top = e.initialPosition.y + "px"
                                    }, Ae = function() {
                                        if (ee) {
                                            var e = ee,
                                                t = r.currItem,
                                                i = t.fitRatio > 1 ? 1 : t.fitRatio,
                                                n = i * t.w,
                                                o = i * t.h;
                                            e.width = n + "px", e.height = o + "px", e.left = ue.x + "px", e.top = ue.y + "px"
                                        }
                                    }
                                }(), m = {
                                    resize: r.updateSize,
                                    scroll: Ne,
                                    keydown: je,
                                    click: We
                                };
                            var n = Y.isOldIOSPhone || Y.isOldAndroid || Y.isMobileOpera;
                            for (Y.animationName && Y.transform && !n || (a.showAnimationDuration = a.hideAnimationDuration = 0), i = 0; i < ge.length; i++) r["init" + ge[i]]();
                            t && (r.ui = new t(r, o)).init(), Ce("firstUpdate"), u = u || a.index || 0, (isNaN(u) || 0 > u || u >= Ht()) && (u = 0), r.currItem = Ft(u), (Y.isOldIOSPhone || Y.isOldAndroid) && (ve = !1), e.setAttribute("aria-hidden", "false"), a.modal && (ve ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = o.getScrollY() + "px")), void 0 === $ && (Ce("initialLayout"), $ = _ = o.getScrollY());
                            var c = "pswp--open ";
                            for (a.mainClass && (c += a.mainClass + " "), a.showHideOpacity && (c += "pswp--animate_opacity "), c += M ? "pswp--touch" : "pswp--notouch", c += Y.animationName ? " pswp--css_animation" : "", c += Y.svg ? " pswp--svg" : "", o.addClass(e, c), r.updateSize(), p = -1, me = null, i = 0; 3 > i; i++) Me((i + p) * fe.x, k[i].el.style);
                            R || o.bind(r.scrollWrap, f, r), Te("initialZoomInEnd", function() {
                                r.setContent(k[0], u - 1), r.setContent(k[2], u + 1), k[0].el.style.display = k[2].el.style.display = "block", a.focus && e.focus(), o.bind(document, "keydown", r), Y.transform && o.bind(r.scrollWrap, "click", r), a.mouseUsed || o.bind(document, "mousemove", $e), o.bind(window, "resize scroll", r), Ce("bindEvents")
                            }), r.setContent(k[1], u), r.updateCurrItem(), Ce("afterInit"), ve || (w = setInterval(function() {
                                ze || X || G || v !== r.currItem.initialZoomLevel || r.updateSize()
                            }, 1e3)), o.addClass(e, "pswp--visible")
                        }
                    },
                    close: function() {
                        s && (s = !1, l = !0, Ce("close"), o.unbind(window, "resize", r), o.unbind(window, "scroll", m.scroll), o.unbind(document, "keydown", r), o.unbind(document, "mousemove", $e), Y.transform && o.unbind(r.scrollWrap, "click", r), X && o.unbind(window, h, r), Ce("unbindEvents"), jt(r.currItem, null, !0, r.destroy))
                    },
                    destroy: function() {
                        Ce("destroy"), Rt && clearTimeout(Rt), e.setAttribute("aria-hidden", "true"), e.className = L, w && clearInterval(w), o.unbind(r.scrollWrap, f, r), o.unbind(window, "scroll", r), ht(), Ue(), ke = null
                    },
                    panTo: function(e, t, i) {
                        i || (e > J.min.x ? e = J.min.x : e < J.max.x && (e = J.max.x), t > J.min.y ? t = J.min.y : t < J.max.y && (t = J.max.y)), ue.x = e, ue.y = t, Ae()
                    },
                    handleEvent: function(e) {
                        e = e || window.event, m[e.type] && m[e.type](e)
                    },
                    goTo: function(e) {
                        var t = (e = xe(e)) - u;
                        me = t, u = e, r.currItem = Ft(u), pe -= t, De(fe.x * pe), Ue(), te = !1, r.updateCurrItem()
                    },
                    next: function() {
                        r.goTo(u + 1)
                    },
                    prev: function() {
                        r.goTo(u - 1)
                    },
                    updateCurrZoomItem: function(e) {
                        if (e && Ce("beforeChange", 0), k[1].el.children.length) {
                            var t = k[1].el.children[0];
                            ee = o.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                        } else ee = null;
                        J = r.currItem.bounds, g = v = r.currItem.initialZoomLevel, ue.x = J.center.x, ue.y = J.center.y, e && Ce("afterChange")
                    },
                    invalidateCurrItems: function() {
                        x = !0;
                        for (var e = 0; 3 > e; e++) k[e].item && (k[e].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(e) {
                        if (0 !== me) {
                            var t, i = Math.abs(me);
                            if (!(e && 2 > i)) {
                                r.currItem = Ft(u), be = !1, Ce("beforeChange", me), i >= 3 && (p += me + (me > 0 ? -3 : 3), i = 3);
                                for (var n = 0; i > n; n++) me > 0 ? (t = k.shift(), k[2] = t, Me((++p + 2) * fe.x, t.el.style), r.setContent(t, u - i + n + 1 + 1)) : (t = k.pop(), k.unshift(t), Me(--p * fe.x, t.el.style), r.setContent(t, u + i - n - 1 - 1));
                                if (ee && 1 === Math.abs(me)) {
                                    var o = Ft(T);
                                    o.initialZoomLevel !== v && (zt(o, de), Zt(o), Pe(o))
                                }
                                me = 0, r.updateCurrZoomItem(), T = u, Ce("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!ve && a.modal) {
                            var i = o.getScrollY();
                            if ($ !== i && (e.style.top = i + "px", $ = i), !t && ye.x === window.innerWidth && ye.y === window.innerHeight) return;
                            ye.x = window.innerWidth, ye.y = window.innerHeight, e.style.height = ye.y + "px"
                        }
                        if (de.x = r.scrollWrap.clientWidth, de.y = r.scrollWrap.clientHeight, Ne(), fe.x = de.x + Math.round(de.x * a.spacing), fe.y = de.y, De(fe.x * pe), Ce("beforeResize"), void 0 !== p) {
                            for (var n, s, l, c = 0; 3 > c; c++) n = k[c], Me((c + p) * fe.x, n.el.style), l = u + c - 1, a.loop && Ht() > 2 && (l = xe(l)), (s = Ft(l)) && (x || s.needsUpdate || !s.bounds) ? (r.cleanSlide(s), r.setContent(n, l), 1 === c && (r.currItem = s, r.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === n.index && l >= 0 && r.setContent(n, l), s && s.container && (zt(s, de), Zt(s), Pe(s));
                            x = !1
                        }
                        g = v = r.currItem.initialZoomLevel, (J = r.currItem.bounds) && (ue.x = J.center.x, ue.y = J.center.y, Ae(!0)), Ce("resize")
                    },
                    zoomTo: function(e, t, i, n, r) {
                        t && (g = v, ut.x = Math.abs(t.x) - ue.x, ut.y = Math.abs(t.y) - ue.y, Le(ce, ue));
                        var a = Ye(e, !1),
                            s = {};
                        He("x", a, s, e), He("y", a, s, e);
                        var l = v,
                            c = ue.x,
                            u = ue.y;
                        _e(s);
                        var d = function(t) {
                            1 === t ? (v = e, ue.x = s.x, ue.y = s.y) : (v = (e - l) * t + l, ue.x = (s.x - c) * t + c, ue.y = (s.y - u) * t + u), r && r(t), Ae(1 === t)
                        };
                        i ? Ze("customZoomTo", 0, 1, i, n || o.easing.sine.inOut, d) : d(1)
                    }
                },
                Ge = {},
                Ke = {},
                Je = {},
                et = {},
                tt = {},
                it = [],
                nt = {},
                ot = [],
                rt = {},
                at = 0,
                st = {
                    x: 0,
                    y: 0
                },
                lt = 0,
                ct = {
                    x: 0,
                    y: 0
                },
                ut = {
                    x: 0,
                    y: 0
                },
                dt = {
                    x: 0,
                    y: 0
                },
                pt = function(e, t) {
                    return rt.x = Math.abs(e.x - t.x), rt.y = Math.abs(e.y - t.y), Math.sqrt(rt.x * rt.x + rt.y * rt.y)
                },
                ht = function() {
                    U && (O(U), U = null)
                },
                ft = function() {
                    X && (U = D(ft), At())
                },
                mt = function(e, t) {
                    return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : mt(e.parentNode, t))
                },
                vt = {},
                gt = function(e, t) {
                    return vt.prevent = !mt(e.target, a.isClickableElement), Ce("preventDragEvent", e, t, vt), vt.prevent
                },
                yt = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t
                },
                bt = function(e, t, i) {
                    i.x = .5 * (e.x + t.x), i.y = .5 * (e.y + t.y)
                },
                wt = function() {
                    var e = ue.y - r.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (de.y / 2))
                },
                xt = {},
                kt = {},
                Tt = [],
                Ct = function(e) {
                    for (; Tt.length > 0;) Tt.pop();
                    return P ? (se = 0, it.forEach(function(e) {
                        0 === se ? Tt[0] = e : 1 === se && (Tt[1] = e), se++
                    })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Tt[0] = yt(e.touches[0], xt), e.touches.length > 1 && (Tt[1] = yt(e.touches[1], kt))) : (xt.x = e.pageX, xt.y = e.pageY, xt.id = "", Tt[0] = xt), Tt
                },
                St = function(e, t) {
                    var i, n, o, s, l = ue[e] + t[e],
                        c = t[e] > 0,
                        u = ct.x + t.x,
                        d = ct.x - nt.x;
                    return i = l > J.min[e] || l < J.max[e] ? a.panEndFriction : 1, l = ue[e] + t[e] * i, !a.allowPanToNext && v !== r.currItem.initialZoomLevel || (ee ? "h" !== ie || "x" !== e || B || (c ? (l > J.min[e] && (i = a.panEndFriction, J.min[e], n = J.min[e] - ce[e]), (0 >= n || 0 > d) && Ht() > 1 ? (s = u, 0 > d && u > nt.x && (s = nt.x)) : J.min.x !== J.max.x && (o = l)) : (l < J.max[e] && (i = a.panEndFriction, J.max[e], n = ce[e] - J.max[e]), (0 >= n || d > 0) && Ht() > 1 ? (s = u, d > 0 && u < nt.x && (s = nt.x)) : J.min.x !== J.max.x && (o = l))) : s = u, "x" !== e) ? void(te || Z || v > r.currItem.fitRatio && (ue[e] += t[e] * i)) : (void 0 !== s && (De(s, !0), Z = s !== nt.x), J.min.x !== J.max.x && (void 0 !== o ? ue.x = o : Z || (ue.x += t.x * i)), void 0 !== s)
                },
                Et = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Vt) return void e.preventDefault();
                        if (!N || "mousedown" !== e.type) {
                            if (gt(e, !0) && e.preventDefault(), Ce("pointerDown"), P) {
                                var t = o.arraySearch(it, e.pointerId, "id");
                                0 > t && (t = it.length), it[t] = {
                                    x: e.pageX,
                                    y: e.pageY,
                                    id: e.pointerId
                                }
                            }
                            var i = Ct(e),
                                n = i.length;
                            Q = null, Ue(), X && 1 !== n || (X = ne = !0, o.bind(window, h, r), j = ae = oe = W = Z = q = z = B = !1, ie = null, Ce("firstTouchStart", i), Le(ce, ue), le.x = le.y = 0, Le(et, i[0]), Le(tt, et), nt.x = fe.x * pe, ot = [{
                                x: et.x,
                                y: et.y
                            }], F = V = Se(), Ye(v, !0), ht(), ft()), !G && n > 1 && !te && !Z && (g = v, B = !1, G = z = !0, le.y = le.x = 0, Le(ce, ue), Le(Ge, i[0]), Le(Ke, i[1]), bt(Ge, Ke, dt), ut.x = Math.abs(dt.x) - ue.x, ut.y = Math.abs(dt.y) - ue.y, K = pt(Ge, Ke))
                        }
                    }
                },
                It = function(e) {
                    if (e.preventDefault(), P) {
                        var t = o.arraySearch(it, e.pointerId, "id");
                        if (t > -1) {
                            var i = it[t];
                            i.x = e.pageX, i.y = e.pageY
                        }
                    }
                    if (X) {
                        var n = Ct(e);
                        if (ie || q || G) Q = n;
                        else if (ct.x !== fe.x * pe) ie = "h";
                        else {
                            var r = Math.abs(n[0].x - et.x) - Math.abs(n[0].y - et.y);
                            Math.abs(r) >= 10 && (ie = r > 0 ? "h" : "v", Q = n)
                        }
                    }
                },
                At = function() {
                    if (Q) {
                        var e = Q.length;
                        if (0 !== e)
                            if (Le(Ge, Q[0]), Je.x = Ge.x - et.x, Je.y = Ge.y - et.y, G && e > 1) {
                                if (et.x = Ge.x, et.y = Ge.y, !Je.x && !Je.y && function(e, t) {
                                        return e.x === t.x && e.y === t.y
                                    }(Q[1], Ke)) return;
                                Le(Ke, Q[1]), B || (B = !0, Ce("zoomGestureStarted"));
                                var t = pt(Ge, Ke),
                                    i = Lt(t);
                                i > r.currItem.initialZoomLevel + r.currItem.initialZoomLevel / 15 && (ae = !0);
                                var n = 1,
                                    o = Ve(),
                                    s = Fe();
                                if (o > i)
                                    if (a.pinchToClose && !ae && g <= r.currItem.initialZoomLevel) {
                                        var l = 1 - (o - i) / (o / 1.2);
                                        Ee(l), Ce("onPinchClose", l), oe = !0
                                    } else(n = (o - i) / o) > 1 && (n = 1), i = o - n * (o / 3);
                                else i > s && ((n = (i - s) / (6 * o)) > 1 && (n = 1), i = s + n * o);
                                0 > n && (n = 0), bt(Ge, Ke, st), le.x += st.x - dt.x, le.y += st.y - dt.y, Le(dt, st), ue.x = Oe("x", i), ue.y = Oe("y", i), j = i > v, v = i, Ae()
                            } else {
                                if (!ie) return;
                                if (ne && (ne = !1, Math.abs(Je.x) >= 10 && (Je.x -= Q[0].x - tt.x), Math.abs(Je.y) >= 10 && (Je.y -= Q[0].y - tt.y)), et.x = Ge.x, et.y = Ge.y, 0 === Je.x && 0 === Je.y) return;
                                if ("v" === ie && a.closeOnVerticalDrag && "fit" === a.scaleMode && v === r.currItem.initialZoomLevel) {
                                    le.y += Je.y, ue.y += Je.y;
                                    var c = wt();
                                    return W = !0, Ce("onVerticalDrag", c), Ee(c), void Ae()
                                }(function(e, t, i) {
                                    if (e - F > 50) {
                                        var n = ot.length > 2 ? ot.shift() : {};
                                        n.x = t, n.y = i, ot.push(n), F = e
                                    }
                                })(Se(), Ge.x, Ge.y), q = !0, J = r.currItem.bounds, St("x", Je) || (St("y", Je), _e(ue), Ae())
                            }
                    }
                },
                Pt = function(e) {
                    if (Y.isOldAndroid) {
                        if (N && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(N), N = setTimeout(function() {
                            N = 0
                        }, 600))
                    }
                    var t;
                    if (Ce("pointerUp"), gt(e, !1) && e.preventDefault(), P) {
                        var i = o.arraySearch(it, e.pointerId, "id");
                        i > -1 && (t = it.splice(i, 1)[0], navigator.pointerEnabled ? t.type = e.pointerType || "mouse" : (t.type = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        }[e.pointerType], t.type || (t.type = e.pointerType || "mouse")))
                    }
                    var n, s = Ct(e),
                        l = s.length;
                    if ("mouseup" === e.type && (l = 0), 2 === l) return Q = null, !0;
                    1 === l && Le(tt, s[0]), 0 !== l || ie || te || (t || ("mouseup" === e.type ? t = {
                        x: e.pageX,
                        y: e.pageY,
                        type: "mouse"
                    } : e.changedTouches && e.changedTouches[0] && (t = {
                        x: e.changedTouches[0].pageX,
                        y: e.changedTouches[0].pageY,
                        type: "touch"
                    })), Ce("touchRelease", e, t));
                    var c = -1;
                    if (0 === l && (X = !1, o.unbind(window, h, r), ht(), G ? c = 0 : -1 !== lt && (c = Se() - lt)), lt = 1 === l ? Se() : -1, n = -1 !== c && 150 > c ? "zoom" : "swipe", G && 2 > l && (G = !1, 1 === l && (n = "zoomPointerUp"), Ce("zoomGestureEnded")), Q = null, q || B || te || W)
                        if (Ue(), H || (H = Mt()), H.calculateSwipeSpeed("x"), W)
                            if (wt() < a.verticalDragRange) r.close();
                            else {
                                var u = ue.y,
                                    d = re;
                                Ze("verticalDrag", 0, 1, 300, o.easing.cubic.out, function(e) {
                                    ue.y = (r.currItem.initialPosition.y - u) * e + u, Ee((1 - d) * e + d), Ae()
                                }), Ce("onVerticalDrag", 1)
                            } else {
                        if ((Z || te) && 0 === l) {
                            if (Ot(n, H)) return;
                            n = "zoomPointerUp"
                        }
                        if (!te) return "swipe" !== n ? void _t() : void(!Z && v > r.currItem.fitRatio && Dt(H))
                    }
                },
                Mt = function() {
                    var e, t, i = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(n) {
                            ot.length > 1 ? (e = Se() - F + 50, t = ot[ot.length - 2][n]) : (e = Se() - V, t = tt[n]), i.lastFlickOffset[n] = et[n] - t, i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]), i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / e : i.lastFlickSpeed[n] = 0, Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0), i.slowDownRatio[n] = .95, i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n], i.speedDecelerationRatio[n] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e, t) {
                            i.backAnimStarted[e] || (ue[e] > J.min[e] ? i.backAnimDestination[e] = J.min[e] : ue[e] < J.max[e] && (i.backAnimDestination[e] = J.max[e]), void 0 !== i.backAnimDestination[e] && (i.slowDownRatio[e] = .7, i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e], i.speedDecelerationRatioAbs[e] < .05 && (i.lastFlickSpeed[e] = 0, i.backAnimStarted[e] = !0, Ze("bounceZoomPan" + e, ue[e], i.backAnimDestination[e], t || 300, o.easing.sine.out, function(t) {
                                ue[e] = t, Ae()
                            }))))
                        },
                        calculateAnimOffset: function(e) {
                            i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10), i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]), i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff, ue[e] += i.distanceOffset[e])
                        },
                        panAnimLoop: function() {
                            return Xe.zoomPan && (Xe.zoomPan.raf = D(i.panAnimLoop), i.now = Se(), i.timeDiff = i.now - i.lastNow, i.lastNow = i.now, i.calculateAnimOffset("x"), i.calculateAnimOffset("y"), Ae(), i.calculateOverBoundsAnimOffset("x"), i.calculateOverBoundsAnimOffset("y"), i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (ue.x = Math.round(ue.x), ue.y = Math.round(ue.y), Ae(), void Be("zoomPan")) : void 0
                        }
                    };
                    return i
                },
                Dt = function(e) {
                    return e.calculateSwipeSpeed("y"), J = r.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : (qe("zoomPan"), e.lastNow = Se(), void e.panAnimLoop())
                },
                Ot = function(e, t) {
                    var i, n, s;
                    if (te || (at = u), "swipe" === e) {
                        var l = et.x - tt.x,
                            c = t.lastFlickDist.x < 10;
                        l > 30 && (c || t.lastFlickOffset.x > 20) ? n = -1 : -30 > l && (c || t.lastFlickOffset.x < -20) && (n = 1)
                    }
                    n && (0 > (u += n) ? (u = a.loop ? Ht() - 1 : 0, s = !0) : u >= Ht() && (u = a.loop ? 0 : Ht() - 1, s = !0), (!s || a.loop) && (me += n, pe -= n, i = !0));
                    var d, p = fe.x * pe,
                        h = Math.abs(p - ct.x);
                    return i || p > ct.x == t.lastFlickSpeed.x > 0 ? (d = Math.abs(t.lastFlickSpeed.x) > 0 ? h / Math.abs(t.lastFlickSpeed.x) : 333, d = Math.min(d, 400), d = Math.max(d, 250)) : d = 333, at === u && (i = !1), te = !0, Ce("mainScrollAnimStart"), Ze("mainScroll", ct.x, p, d, o.easing.cubic.out, De, function() {
                        Ue(), te = !1, at = -1, (i || at !== u) && r.updateCurrItem(), Ce("mainScrollAnimComplete")
                    }), i && r.updateCurrItem(!0), i
                },
                Lt = function(e) {
                    return 1 / K * e * g
                },
                _t = function() {
                    var e = v,
                        t = Ve(),
                        i = Fe();
                    t > v ? e = t : v > i && (e = i);
                    var n, a = re;
                    return oe && !j && !ae && t > v ? (r.close(), !0) : (oe && (n = function(e) {
                        Ee((1 - a) * e + a)
                    }), r.zoomTo(e, 0, 200, o.easing.cubic.out, n), !0)
                };
            we("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var e = function(e, t, i, n, o) {
                            C = e + t, S = e + i, E = e + n, I = o ? e + o : ""
                        };
                        (P = Y.pointerEvent) && Y.touch && (Y.touch = !1), P ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : Y.touch ? (e("touch", "start", "move", "end", "cancel"), M = !0) : e("mouse", "down", "move", "up"), h = S + " " + E + " " + I, f = C, P && !M && (M = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), r.likelyTouchDevice = M, m[C] = Et, m[S] = It, m[E] = Pt, I && (m[I] = m[E]), Y.touch && (f += " mousedown", h += " mousemove mouseup", m.mousedown = m[C], m.mousemove = m[S], m.mouseup = m[E]), M || (a.allowPanToNext = !1)
                    }
                }
            });
            var Rt, $t, Yt, Vt, Ft, Ht, jt = function(t, i, n, s) {
                    var l;
                    Rt && clearTimeout(Rt), Vt = !0, Yt = !0, t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(u);
                    var d = n ? a.hideAnimationDuration : a.showAnimationDuration,
                        p = function() {
                            Be("initialZoom"), n ? (r.template.removeAttribute("style"), r.bg.removeAttribute("style")) : (Ee(1), i && (i.style.display = "block"), o.addClass(e, "pswp--animated-in"), Ce("initialZoom" + (n ? "OutEnd" : "InEnd"))), s && s(), Vt = !1
                        };
                    if (!d || !l || void 0 === l.x) return Ce("initialZoom" + (n ? "Out" : "In")), v = t.initialZoomLevel, Le(ue, t.initialPosition), Ae(), e.style.opacity = n ? 0 : 1, Ee(1), void(d ? setTimeout(function() {
                        p()
                    }, d) : p());
                    ! function() {
                        var i = c,
                            s = !r.currItem.src || r.currItem.loadError || a.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), n || (v = l.w / t.w, ue.x = l.x, ue.y = l.y - _, r[s ? "template" : "bg"].style.opacity = .001, Ae()), qe("initialZoom"), n && !i && o.removeClass(e, "pswp--animated-in"), s && (n ? o[(i ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                            o.addClass(e, "pswp--animate_opacity")
                        }, 30)), Rt = setTimeout(function() {
                            if (Ce("initialZoom" + (n ? "Out" : "In")), n) {
                                var r = l.w / t.w,
                                    a = {
                                        x: ue.x,
                                        y: ue.y
                                    },
                                    c = v,
                                    u = re,
                                    h = function(t) {
                                        1 === t ? (v = r, ue.x = l.x, ue.y = l.y - $) : (v = (r - c) * t + c, ue.x = (l.x - a.x) * t + a.x, ue.y = (l.y - $ - a.y) * t + a.y), Ae(), s ? e.style.opacity = 1 - t : Ee(u - t * u)
                                    };
                                i ? Ze("initialZoom", 0, 1, d, o.easing.cubic.out, h, p) : (h(1), Rt = setTimeout(p, d + 20))
                            } else v = t.initialZoomLevel, Le(ue, t.initialPosition), Ae(), Ee(1), s ? e.style.opacity = 1 : Ee(1), Rt = setTimeout(p, d + 20)
                        }, n ? 25 : 90)
                    }()
                },
                Wt = {},
                Nt = [],
                Xt = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return $t.length
                    }
                },
                zt = function(e, t, i) {
                    if (e.src && !e.loadError) {
                        var n = !i;
                        if (n && (e.vGap || (e.vGap = {
                                top: 0,
                                bottom: 0
                            }), Ce("parseVerticalMargin", e)), Wt.x = t.x, Wt.y = t.y - e.vGap.top - e.vGap.bottom, n) {
                            var o = Wt.x / e.w,
                                r = Wt.y / e.h;
                            e.fitRatio = r > o ? o : r;
                            var s = a.scaleMode;
                            "orig" === s ? i = 1 : "fit" === s && (i = e.fitRatio), i > 1 && (i = 1), e.initialZoomLevel = i, e.bounds || (e.bounds = {
                                center: {
                                    x: 0,
                                    y: 0
                                },
                                max: {
                                    x: 0,
                                    y: 0
                                },
                                min: {
                                    x: 0,
                                    y: 0
                                }
                            })
                        }
                        if (!i) return;
                        return function(e, t, i) {
                            var n = e.bounds;
                            n.center.x = Math.round((Wt.x - t) / 2), n.center.y = Math.round((Wt.y - i) / 2) + e.vGap.top, n.max.x = t > Wt.x ? Math.round(Wt.x - t) : n.center.x, n.max.y = i > Wt.y ? Math.round(Wt.y - i) + e.vGap.top : n.center.y, n.min.x = t > Wt.x ? 0 : n.center.x, n.min.y = i > Wt.y ? e.vGap.top : n.center.y
                        }(e, e.w * i, e.h * i), n && i === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
                    }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }, e.initialPosition = e.bounds.center, e.bounds
                },
                Bt = function(e, t, i, n, o, a) {
                    t.loadError || n && (t.imageAppended = !0, Zt(t, n, t === r.currItem && be), i.appendChild(n), a && setTimeout(function() {
                        t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null)
                    }, 500))
                },
                qt = function(e) {
                    e.loading = !0, e.loaded = !1;
                    var t = e.img = o.createEl("pswp__img", "img"),
                        i = function() {
                            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null
                        };
                    return t.onload = i, t.onerror = function() {
                        e.loadError = !0, i()
                    }, t.src = e.src, t
                },
                Ut = function(e, t) {
                    return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0) : void 0
                },
                Zt = function(e, t, i) {
                    if (e.src) {
                        t || (t = e.container.lastChild);
                        var n = i ? e.w : Math.round(e.w * e.fitRatio),
                            o = i ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px", e.placeholder.style.height = o + "px"), t.style.width = n + "px", t.style.height = o + "px"
                    }
                },
                Qt = function() {
                    if (Nt.length) {
                        for (var e, t = 0; t < Nt.length; t++)(e = Nt[t]).holder.index === e.index && Bt(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                        Nt = []
                    }
                };
            we("Controller", {
                publicMethods: {
                    lazyLoadItem: function(e) {
                        e = xe(e);
                        var t = Ft(e);
                        t && (!t.loaded && !t.loading || x) && (Ce("gettingData", e, t), t.src && qt(t))
                    },
                    initController: function() {
                        o.extend(a, Xt, !0), r.items = $t = i, Ft = r.getItemAt, Ht = a.getNumItemsFn, a.loop, Ht() < 3 && (a.loop = !1), Te("beforeChange", function(e) {
                            var t, i = a.preload,
                                n = null === e || e >= 0,
                                o = Math.min(i[0], Ht()),
                                s = Math.min(i[1], Ht());
                            for (t = 1;
                                (n ? s : o) >= t; t++) r.lazyLoadItem(u + t);
                            for (t = 1;
                                (n ? o : s) >= t; t++) r.lazyLoadItem(u - t)
                        }), Te("initialLayout", function() {
                            r.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(u)
                        }), Te("mainScrollAnimComplete", Qt), Te("initialZoomInEnd", Qt), Te("destroy", function() {
                            for (var e, t = 0; t < $t.length; t++)(e = $t[t]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            Nt = null
                        })
                    },
                    getItemAt: function(e) {
                        return e >= 0 && void 0 !== $t[e] && $t[e]
                    },
                    allowProgressiveImg: function() {
                        return a.forceProgressiveLoading || !M || a.mouseUsed || screen.width > 1200
                    },
                    setContent: function(e, t) {
                        a.loop && (t = xe(t));
                        var i = r.getItemAt(e.index);
                        i && (i.container = null);
                        var n, l = r.getItemAt(t);
                        if (l) {
                            Ce("gettingData", t, l), e.index = t, e.item = l;
                            var c = l.container = o.createEl("pswp__zoom-wrap");
                            if (!l.src && l.html && (l.html.tagName ? c.appendChild(l.html) : c.innerHTML = l.html), Ut(l), zt(l, de), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((n = o.createEl("pswp__img", "img")).style.opacity = 1, n.src = l.src, Zt(l, n), Bt(0, l, c, n));
                            else {
                                if (l.loadComplete = function(i) {
                                        if (s) {
                                            if (e && e.index === t) {
                                                if (Ut(i, !0)) return i.loadComplete = i.img = null, zt(i, de), Pe(i), void(e.index === u && r.updateCurrZoomItem());
                                                i.imageAppended ? !Vt && i.placeholder && (i.placeholder.style.display = "none", i.placeholder = null) : Y.transform && (te || Vt) ? Nt.push({
                                                    item: i,
                                                    baseDiv: c,
                                                    img: i.img,
                                                    index: t,
                                                    holder: e,
                                                    clearPlaceholder: !0
                                                }) : Bt(0, i, c, i.img, 0, !0)
                                            }
                                            i.loadComplete = null, i.img = null, Ce("imageLoadComplete", t, i)
                                        }
                                    }, o.features.transform) {
                                    var d = "pswp__img pswp__img--placeholder";
                                    d += l.msrc ? "" : " pswp__img--placeholder--blank";
                                    var p = o.createEl(d, l.msrc ? "img" : "");
                                    l.msrc && (p.src = l.msrc), Zt(l, p), c.appendChild(p), l.placeholder = p
                                }
                                l.loading || qt(l), r.allowProgressiveImg() && (!Yt && Y.transform ? Nt.push({
                                    item: l,
                                    baseDiv: c,
                                    img: l.img,
                                    index: t,
                                    holder: e
                                }) : Bt(0, l, c, l.img, 0, !0))
                            }
                            Yt || t !== u ? Pe(l) : (ee = c.style, jt(l, n || l.img)), e.el.innerHTML = "", e.el.appendChild(c)
                        } else e.el.innerHTML = ""
                    },
                    cleanSlide: function(e) {
                        e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
                    }
                }
            });
            var Gt, Kt, Jt = {},
                ei = function(e, t, i) {
                    var n = document.createEvent("CustomEvent"),
                        o = {
                            origEvent: e,
                            target: e.target,
                            releasePoint: t,
                            pointerType: i || "touch"
                        };
                    n.initCustomEvent("pswpTap", !0, !0, o), e.target.dispatchEvent(n)
                };
            we("Tap", {
                publicMethods: {
                    initTap: function() {
                        Te("firstTouchStart", r.onTapStart), Te("touchRelease", r.onTapRelease), Te("destroy", function() {
                            Jt = {}, Gt = null
                        })
                    },
                    onTapStart: function(e) {
                        e.length > 1 && (clearTimeout(Gt), Gt = null)
                    },
                    onTapRelease: function(e, t) {
                        if (t && !q && !z && !ze) {
                            var i = t;
                            if (Gt && (clearTimeout(Gt), Gt = null, function(e, t) {
                                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25
                                }(i, Jt))) return void Ce("doubleTap", i);
                            if ("mouse" === t.type) return void ei(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || o.hasClass(e.target, "pswp__single-tap")) return void ei(e, t);
                            Le(Jt, i), Gt = setTimeout(function() {
                                ei(e, t), Gt = null
                            }, 300)
                        }
                    }
                }
            }), we("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        R || (M ? Te("mouseUsed", function() {
                            r.setupDesktopZoom()
                        }) : r.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(t) {
                        Kt = {};
                        var i = "wheel mousewheel DOMMouseScroll";
                        Te("bindEvents", function() {
                            o.bind(e, i, r.handleMouseWheel)
                        }), Te("unbindEvents", function() {
                            Kt && o.unbind(e, i, r.handleMouseWheel)
                        }), r.mouseZoomedIn = !1;
                        var n, a = function() {
                                r.mouseZoomedIn && (o.removeClass(e, "pswp--zoomed-in"), r.mouseZoomedIn = !1), 1 > v ? o.addClass(e, "pswp--zoom-allowed") : o.removeClass(e, "pswp--zoom-allowed"), s()
                            },
                            s = function() {
                                n && (o.removeClass(e, "pswp--dragging"), n = !1)
                            };
                        Te("resize", a), Te("afterChange", a), Te("pointerDown", function() {
                            r.mouseZoomedIn && (n = !0, o.addClass(e, "pswp--dragging"))
                        }), Te("pointerUp", s), t || a()
                    },
                    handleMouseWheel: function(e) {
                        if (v <= r.currItem.fitRatio) return a.modal && (!a.closeOnScroll || ze || X ? e.preventDefault() : A && Math.abs(e.deltaY) > 2 && (c = !0, r.close())), !0;
                        if (e.stopPropagation(), Kt.x = 0, "deltaX" in e) 1 === e.deltaMode ? (Kt.x = 18 * e.deltaX, Kt.y = 18 * e.deltaY) : (Kt.x = e.deltaX, Kt.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (Kt.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? Kt.y = -.16 * e.wheelDeltaY : Kt.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            Kt.y = e.detail
                        }
                        Ye(v, !0);
                        var t = ue.x - Kt.x,
                            i = ue.y - Kt.y;
                        (a.modal || t <= J.min.x && t >= J.max.x && i <= J.min.y && i >= J.max.y) && e.preventDefault(), r.panTo(t, i)
                    },
                    toggleDesktopZoom: function(t) {
                        t = t || {
                            x: de.x / 2 + he.x,
                            y: de.y / 2 + he.y
                        };
                        var i = a.getDoubleTapZoom(!0, r.currItem),
                            n = v === i;
                        r.mouseZoomedIn = !n, r.zoomTo(n ? r.currItem.initialZoomLevel : i, t, 333), o[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                    }
                }
            });
            var ti, ii, ni, oi, ri, ai, si, li, ci, ui, di, pi, hi = {
                    history: !0,
                    galleryUID: 1
                },
                fi = function() {
                    return di.hash.substring(1)
                },
                mi = function() {
                    ti && clearTimeout(ti), ni && clearTimeout(ni)
                },
                vi = function() {
                    var e = fi(),
                        t = {};
                    if (e.length < 5) return t;
                    var i, n = e.split("&");
                    for (i = 0; i < n.length; i++)
                        if (n[i]) {
                            var o = n[i].split("=");
                            o.length < 2 || (t[o[0]] = o[1])
                        }
                    if (a.galleryPIDs) {
                        var r = t.pid;
                        for (t.pid = 0, i = 0; i < $t.length; i++)
                            if ($t[i].pid === r) {
                                t.pid = i;
                                break
                            }
                    } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t
                },
                gi = function() {
                    if (ni && clearTimeout(ni), ze || X) ni = setTimeout(gi, 500);
                    else {
                        oi ? clearTimeout(ii) : oi = !0;
                        var e = u + 1,
                            t = Ft(u);
                        t.hasOwnProperty("pid") && (e = t.pid);
                        var i = si + "&gid=" + a.galleryUID + "&pid=" + e;
                        li || -1 === di.hash.indexOf(i) && (ui = !0);
                        var n = di.href.split("#")[0] + "#" + i;
                        pi ? "#" + i !== window.location.hash && history[li ? "replaceState" : "pushState"]("", document.title, n) : li ? di.replace(n) : di.hash = i, li = !0, ii = setTimeout(function() {
                            oi = !1
                        }, 60)
                    }
                };
            we("History", {
                publicMethods: {
                    initHistory: function() {
                        if (o.extend(a, hi, !0), a.history) {
                            di = window.location, ui = !1, ci = !1, li = !1, si = fi(), pi = "pushState" in history, si.indexOf("gid=") > -1 && (si = (si = si.split("&gid=")[0]).split("?gid=")[0]), Te("afterChange", r.updateURL), Te("unbindEvents", function() {
                                o.unbind(window, "hashchange", r.onHashChange)
                            });
                            var e = function() {
                                ai = !0, ci || (ui ? history.back() : si ? di.hash = si : pi ? history.pushState("", document.title, di.pathname + di.search) : di.hash = ""), mi()
                            };
                            Te("unbindEvents", function() {
                                c && e()
                            }), Te("destroy", function() {
                                ai || e()
                            }), Te("firstUpdate", function() {
                                u = vi().pid
                            });
                            var t = si.indexOf("pid=");
                            t > -1 && "&" === (si = si.substring(0, t)).slice(-1) && (si = si.slice(0, -1)), setTimeout(function() {
                                s && o.bind(window, "hashchange", r.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function() {
                        return fi() === si ? (ci = !0, void r.close()) : void(oi || (ri = !0, r.goTo(vi().pid), ri = !1))
                    },
                    updateURL: function() {
                        mi(), ri || (li ? ti = setTimeout(gi, 800) : gi())
                    }
                }
            }), o.extend(r, Qe)
        }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
    }(this, function() {
        "use strict";
        return function(e, t) {
            var i, n, o, r, a, s, l, c, u, d, p, h, f, m, v, g, y, b, w = this,
                x = !1,
                k = !0,
                T = !0,
                C = {
                    barsSize: {
                        top: 44,
                        bottom: "auto"
                    },
                    closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                    timeToIdle: 4e3,
                    timeToIdleOutside: 1e3,
                    loadingIndicatorDelay: 1e3,
                    addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1)
                    },
                    closeEl: !0,
                    captionEl: !0,
                    fullscreenEl: !0,
                    zoomEl: !0,
                    shareEl: !0,
                    counterEl: !0,
                    arrowEl: !0,
                    preloaderEl: !0,
                    tapToClose: !1,
                    tapToToggleControls: !0,
                    clickToCloseNonZoomable: !0,
                    shareButtons: [{
                        id: "facebook",
                        label: "Share on Facebook",
                        url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                    }, {
                        id: "twitter",
                        label: "Tweet",
                        url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                    }, {
                        id: "pinterest",
                        label: "Pin it",
                        url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                    }, {
                        id: "download",
                        label: "Download image",
                        url: "{{raw_image_url}}",
                        download: !0
                    }],
                    getImageURLForShare: function() {
                        return e.currItem.src || ""
                    },
                    getPageURLForShare: function() {
                        return window.location.href
                    },
                    getTextForShare: function() {
                        return e.currItem.title || ""
                    },
                    indexIndicatorSep: " / ",
                    fitControlsWidth: 1200
                },
                S = function(e) {
                    if (g) return !0;
                    e = e || window.event, v.timeToIdle && v.mouseUsed && !u && R();
                    for (var i, n, o = (e.target || e.srcElement).getAttribute("class") || "", r = 0; r < F.length; r++)(i = F[r]).onTap && o.indexOf("pswp__" + i.name) > -1 && (i.onTap(), n = !0);
                    if (n) {
                        e.stopPropagation && e.stopPropagation(), g = !0;
                        var a = t.features.isOldAndroid ? 600 : 30;
                        setTimeout(function() {
                            g = !1
                        }, a)
                    }
                },
                E = function() {
                    return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth
                },
                I = function(e, i, n) {
                    t[(n ? "add" : "remove") + "Class"](e, "pswp__" + i)
                },
                A = function() {
                    var e = 1 === v.getNumItemsFn();
                    e !== m && (I(n, "ui--one-slide", e), m = e)
                },
                P = function() {
                    I(l, "share-modal--hidden", T)
                },
                M = function() {
                    return (T = !T) ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() {
                        T && P()
                    }, 300)) : (P(), setTimeout(function() {
                        T || t.addClass(l, "pswp__share-modal--fade-in")
                    }, 30)), T || O(), !1
                },
                D = function(t) {
                    var i = (t = t || window.event).target || t.srcElement;
                    return e.shout("shareLinkClick", t, i), !(!i.href || !i.hasAttribute("download") && (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), T || M(), 1))
                },
                O = function() {
                    for (var e, t, i, n, o = "", r = 0; r < v.shareButtons.length; r++) e = v.shareButtons[r], t = v.getImageURLForShare(e), i = v.getPageURLForShare(e), n = v.getTextForShare(e), o += '<a href="' + e.url.replace("{{url}}", encodeURIComponent(i)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(n)) + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (o = v.parseShareButtonOut(e, o));
                    l.children[0].innerHTML = o, l.children[0].onclick = D
                },
                L = function(e) {
                    for (var i = 0; i < v.closeElClasses.length; i++)
                        if (t.hasClass(e, "pswp__" + v.closeElClasses[i])) return !0
                },
                _ = 0,
                R = function() {
                    clearTimeout(b), _ = 0, u && w.setIdle(!1)
                },
                $ = function(e) {
                    var t = (e = e || window.event).relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(b), b = setTimeout(function() {
                        w.setIdle(!0)
                    }, v.timeToIdleOutside))
                },
                Y = function(e) {
                    h !== e && (I(p, "preloader--active", !e), h = e)
                },
                V = function(e) {
                    var i = e.vGap;
                    if (E()) {
                        var a = v.barsSize;
                        if (v.captionEl && "auto" === a.bottom)
                            if (r || ((r = t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")), n.insertBefore(r, o), t.addClass(n, "pswp__ui--fit")), v.addCaptionHTMLFn(e, r, !0)) {
                                var s = r.clientHeight;
                                i.bottom = parseInt(s, 10) || 44
                            } else i.bottom = a.top;
                        else i.bottom = "auto" === a.bottom ? 0 : a.bottom;
                        i.top = a.top
                    } else i.top = i.bottom = 0
                },
                F = [{
                    name: "caption",
                    option: "captionEl",
                    onInit: function(e) {
                        o = e
                    }
                }, {
                    name: "share-modal",
                    option: "shareEl",
                    onInit: function(e) {
                        l = e
                    },
                    onTap: function() {
                        M()
                    }
                }, {
                    name: "button--share",
                    option: "shareEl",
                    onInit: function(e) {
                        s = e
                    },
                    onTap: function() {
                        M()
                    }
                }, {
                    name: "button--zoom",
                    option: "zoomEl",
                    onTap: e.toggleDesktopZoom
                }, {
                    name: "counter",
                    option: "counterEl",
                    onInit: function(e) {
                        a = e
                    }
                }, {
                    name: "button--close",
                    option: "closeEl",
                    onTap: e.close
                }, {
                    name: "button--arrow--left",
                    option: "arrowEl",
                    onTap: e.prev
                }, {
                    name: "button--arrow--right",
                    option: "arrowEl",
                    onTap: e.next
                }, {
                    name: "button--fs",
                    option: "fullscreenEl",
                    onTap: function() {
                        i.isFullscreen() ? i.exit() : i.enter()
                    }
                }, {
                    name: "preloader",
                    option: "preloaderEl",
                    onInit: function(e) {
                        p = e
                    }
                }];
            w.init = function() {
                t.extend(e.options, C, !0), v = e.options, n = t.getChildByClass(e.scrollWrap, "pswp__ui"), d = e.listen,
                    function() {
                        var e;
                        d("onVerticalDrag", function(e) {
                            k && .95 > e ? w.hideControls() : !k && e >= .95 && w.showControls()
                        }), d("onPinchClose", function(t) {
                            k && .9 > t ? (w.hideControls(), e = !0) : e && !k && t > .9 && w.showControls()
                        }), d("zoomGestureEnded", function() {
                            (e = !1) && !k && w.showControls()
                        })
                    }(), d("beforeChange", w.update), d("doubleTap", function(t) {
                        var i = e.currItem.initialZoomLevel;
                        e.getZoomLevel() !== i ? e.zoomTo(i, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333)
                    }), d("preventDragEvent", function(e, t, i) {
                        var n = e.target || e.srcElement;
                        n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
                    }), d("bindEvents", function() {
                        t.bind(n, "pswpTap click", S), t.bind(e.scrollWrap, "pswpTap", w.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", w.onMouseOver)
                    }), d("unbindEvents", function() {
                        T || M(), y && clearInterval(y), t.unbind(document, "mouseout", $), t.unbind(document, "mousemove", R), t.unbind(n, "pswpTap click", S), t.unbind(e.scrollWrap, "pswpTap", w.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", w.onMouseOver), i && (t.unbind(document, i.eventK, w.updateFullscreen), i.isFullscreen() && (v.hideAnimationDuration = 0, i.exit()), i = null)
                    }), d("destroy", function() {
                        v.captionEl && (r && n.removeChild(r), t.removeClass(o, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(n, "pswp__ui--over-close"), t.addClass(n, "pswp__ui--hidden"), w.setIdle(!1)
                    }), v.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"), d("initialZoomIn", function() {
                        v.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
                    }), d("initialZoomOut", function() {
                        t.addClass(n, "pswp__ui--hidden")
                    }), d("parseVerticalMargin", V),
                    function() {
                        var e, i, o, r = function(n) {
                            if (n)
                                for (var r = n.length, a = 0; r > a; a++) {
                                    e = n[a], i = e.className;
                                    for (var s = 0; s < F.length; s++) o = F[s], i.indexOf("pswp__" + o.name) > -1 && (v[o.option] ? (t.removeClass(e, "pswp__element--disabled"), o.onInit && o.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                                }
                        };
                        r(n.children);
                        var a = t.getChildByClass(n, "pswp__top-bar");
                        a && r(a.children)
                    }(), v.shareEl && s && l && (T = !0), A(), v.timeToIdle && d("mouseUsed", function() {
                        t.bind(document, "mousemove", R), t.bind(document, "mouseout", $), y = setInterval(function() {
                            2 == ++_ && w.setIdle(!0)
                        }, v.timeToIdle / 2)
                    }), v.fullscreenEl && !t.features.isOldAndroid && (i || (i = w.getFullscreenAPI()), i ? (t.bind(document, i.eventK, w.updateFullscreen), w.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")), v.preloaderEl && (Y(!0), d("beforeChange", function() {
                        clearTimeout(f), f = setTimeout(function() {
                            e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && Y(!1) : Y(!0)
                        }, v.loadingIndicatorDelay)
                    }), d("imageLoadComplete", function(t, i) {
                        e.currItem === i && Y(!0)
                    }))
            }, w.setIdle = function(e) {
                u = e, I(n, "ui--idle", e)
            }, w.update = function() {
                k && e.currItem ? (w.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, o), I(o, "caption--empty", !e.currItem.title)), x = !0) : x = !1, T || M(), A()
            }, w.updateFullscreen = function(n) {
                n && setTimeout(function() {
                    e.setScrollOffset(0, t.getScrollY())
                }, 50), t[(i.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
            }, w.updateIndexIndicator = function() {
                v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn())
            }, w.onGlobalTap = function(i) {
                var n = (i = i || window.event).target || i.srcElement;
                if (!g)
                    if (i.detail && "mouse" === i.detail.pointerType) {
                        if (L(n)) return void e.close();
                        t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(i.detail.releasePoint))
                    } else if (v.tapToToggleControls && (k ? w.hideControls() : w.showControls()), v.tapToClose && (t.hasClass(n, "pswp__img") || L(n))) return void e.close()
            }, w.onMouseOver = function(e) {
                var t = (e = e || window.event).target || e.srcElement;
                I(n, "ui--over-close", L(t))
            }, w.hideControls = function() {
                t.addClass(n, "pswp__ui--hidden"), k = !1
            }, w.showControls = function() {
                k = !0, x || w.update(), t.removeClass(n, "pswp__ui--hidden")
            }, w.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
            }, w.getFullscreenAPI = function() {
                var t, i = document.documentElement,
                    n = "fullscreenchange";
                return i.requestFullscreen ? t = {
                    enterK: "requestFullscreen",
                    exitK: "exitFullscreen",
                    elementK: "fullscreenElement",
                    eventK: n
                } : i.mozRequestFullScreen ? t = {
                    enterK: "mozRequestFullScreen",
                    exitK: "mozCancelFullScreen",
                    elementK: "mozFullScreenElement",
                    eventK: "moz" + n
                } : i.webkitRequestFullscreen ? t = {
                    enterK: "webkitRequestFullscreen",
                    exitK: "webkitExitFullscreen",
                    elementK: "webkitFullscreenElement",
                    eventK: "webkit" + n
                } : i.msRequestFullscreen && (t = {
                    enterK: "msRequestFullscreen",
                    exitK: "msExitFullscreen",
                    elementK: "msFullscreenElement",
                    eventK: "MSFullscreenChange"
                }), t && (t.enter = function() {
                    return c = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
                }, t.exit = function() {
                    return v.closeOnScroll = c, document[this.exitK]()
                }, t.isFullscreen = function() {
                    return document[this.elementK]
                }), t
            }
        }
    });
var initPhotoSwipeFromDOM = function(e) {
    for (var t = function(e) {
            (e = e || window.event).preventDefault ? e.preventDefault() : e.returnValue = !1;
            var t = function e(t, i) {
                return t && (i(t) ? t : e(t.parentNode, i))
            }(e.target || e.srcElement, function(e) {
                return e.tagName && "FIGURE" === e.tagName.toUpperCase()
            });
            if (t) {
                for (var n, o = t.parentNode, r = t.parentNode.childNodes, a = r.length, s = 0, l = 0; l < a; l++)
                    if (1 === r[l].nodeType) {
                        if (r[l] === t) {
                            n = s;
                            break
                        }
                        s++
                    }
                return n >= 0 && i(n, o), !1
            }
        }, i = function(e, t, i, n) {
            var o, r, a = document.querySelectorAll(".pswp")[0];
            if (r = function(e) {
                    for (var t, i, n, o, r = e.childNodes, a = r.length, s = [], l = 0; l < a; l++) 1 === (t = r[l]).nodeType && (n = (i = t.children[0]).getAttribute("data-size").split("x"), o = {
                        src: i.getAttribute("href"),
                        w: parseInt(n[0], 10),
                        h: parseInt(n[1], 10)
                    }, t.children.length > 1 && (o.title = t.children[1].innerHTML), i.children.length > 0 && (o.msrc = i.children[0].getAttribute("src")), o.el = t, s.push(o));
                    return s
                }(t), o = {
                    galleryUID: t.getAttribute("data-pswp-uid"),
                    getThumbBoundsFn: function(e) {
                        var t = r[e].el.getElementsByTagName("img")[0],
                            i = window.pageYOffset || document.documentElement.scrollTop,
                            n = t.getBoundingClientRect();
                        return {
                            x: n.left,
                            y: n.top + i,
                            w: n.width
                        }
                    }
                }, n)
                if (o.galleryPIDs) {
                    for (var s = 0; s < r.length; s++)
                        if (r[s].pid == e) {
                            o.index = s;
                            break
                        }
                } else o.index = parseInt(e, 10) - 1;
            else o.index = parseInt(e, 10);
            isNaN(o.index) || (i && (o.showAnimationDuration = 0), new PhotoSwipe(a, PhotoSwipeUI_Default, r, o).init())
        }, n = document.querySelectorAll(e), o = 0, r = n.length; o < r; o++) n[o].setAttribute("data-pswp-uid", o + 1), n[o].onclick = t;
    var a = function() {
        var e = window.location.hash.substring(1),
            t = {};
        if (e.length < 5) return t;
        for (var i = e.split("&"), n = 0; n < i.length; n++)
            if (i[n]) {
                var o = i[n].split("=");
                o.length < 2 || (t[o[0]] = o[1])
            }
        return t.gid && (t.gid = parseInt(t.gid, 10)), t
    }();
    a.pid && a.gid && i(a.pid, n[a.gid - 1], !0, !0)
};
initPhotoSwipeFromDOM(".mdb-lightbox"),
    function(e) {
        e.fn.sticky = function(t) {
            var i = e.extend({}, {
                topSpacing: 0,
                zIndex: "",
                stopper: ".sticky-stopper",
                stickyClass: !1
            }, t);
            var n = "number" == typeof i.zIndex;
            var o = 0 < e(i.stopper).length || "number" == typeof i.stopper;
            return this.each(function() {
                var t = e(this),
                    r = t.outerHeight(),
                    a = t.outerWidth(),
                    s = i.topSpacing,
                    l = i.zIndex,
                    c = t.offset().top - s,
                    u = e("<div></div>").width(a).height(r).addClass("sticky-placeholder"),
                    d = i.stopper,
                    p = e(window);

                function h() {
                    var a = p.scrollTop(),
                        h = d,
                        f = t.parent().width();
                    (u.width(f), o && "string" == typeof d) && (h = e(d).offset().top - r - s);
                    if (c < a) {
                        if (i.stickyClass && t.addClass(i.stickyClass), t.after(u).css({
                                position: "fixed",
                                top: s,
                                width: f
                            }), n && t.css({
                                zIndex: l
                            }), o && h < a) {
                            var m = h - a + s;
                            t.css({
                                top: m
                            })
                        }
                    } else i.stickyClass && t.removeClass(i.stickyClass), t.css({
                        position: "static",
                        top: null,
                        left: null,
                        width: "auto"
                    }), u.remove()
                }
                p.innerHeight() > r && (p.bind("scroll", h), p.bind("load", h), p.bind("resize", h))
            })
        }
    }(jQuery),
    function e(t, i, n) {
        function o(a, s) {
            if (!i[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var u = i[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports, function(e) {
                    var i = t[a][1][e];
                    return o(i || e)
                }, u, u.exports, e, t, i, n)
            }
            return i[a].exports
        }
        for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) o(n[a]);
        return o
    }({
        1: [function(e, t, i) {
            "use strict";
            var n = e("../main");
            "function" == typeof define && define.amd ? define(n) : (window.PerfectScrollbar = n, void 0 === window.Ps && (window.Ps = n))
        }, {
            "../main": 7
        }],
        2: [function(e, t, i) {
            "use strict";
            i.add = function(e, t) {
                e.classList ? e.classList.add(t) : function(e, t) {
                    var i = e.className.split(" ");
                    i.indexOf(t) < 0 && i.push(t), e.className = i.join(" ")
                }(e, t)
            }, i.remove = function(e, t) {
                e.classList ? e.classList.remove(t) : function(e, t) {
                    var i = e.className.split(" "),
                        n = i.indexOf(t);
                    n >= 0 && i.splice(n, 1), e.className = i.join(" ")
                }(e, t)
            }, i.list = function(e) {
                return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
            }
        }, {}],
        3: [function(e, t, i) {
            "use strict";
            var n = {
                e: function(e, t) {
                    var i = document.createElement(e);
                    return i.className = t, i
                },
                appendTo: function(e, t) {
                    return t.appendChild(e), e
                }
            };
            n.css = function(e, t, i) {
                return "object" == typeof t ? function(e, t) {
                    for (var i in t) {
                        var n = t[i];
                        "number" == typeof n && (n = n.toString() + "px"), e.style[i] = n
                    }
                    return e
                }(e, t) : void 0 === i ? function(e, t) {
                    return window.getComputedStyle(e)[t]
                }(e, t) : function(e, t, i) {
                    return "number" == typeof i && (i = i.toString() + "px"), e.style[t] = i, e
                }(e, t, i)
            }, n.matches = function(e, t) {
                return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
            }, n.remove = function(e) {
                void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
            }, n.queryChildren = function(e, t) {
                return Array.prototype.filter.call(e.childNodes, function(e) {
                    return n.matches(e, t)
                })
            }, t.exports = n
        }, {}],
        4: [function(e, t, i) {
            "use strict";
            var n = function(e) {
                this.element = e, this.events = {}
            };
            n.prototype.bind = function(e, t) {
                void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
            }, n.prototype.unbind = function(e, t) {
                var i = void 0 !== t;
                this.events[e] = this.events[e].filter(function(n) {
                    return !(!i || n === t) || (this.element.removeEventListener(e, n, !1), !1)
                }, this)
            }, n.prototype.unbindAll = function() {
                for (var e in this.events) this.unbind(e)
            };
            var o = function() {
                this.eventElements = []
            };
            o.prototype.eventElement = function(e) {
                var t = this.eventElements.filter(function(t) {
                    return t.element === e
                })[0];
                return void 0 === t && (t = new n(e), this.eventElements.push(t)), t
            }, o.prototype.bind = function(e, t, i) {
                this.eventElement(e).bind(t, i)
            }, o.prototype.unbind = function(e, t, i) {
                this.eventElement(e).unbind(t, i)
            }, o.prototype.unbindAll = function() {
                for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
            }, o.prototype.once = function(e, t, i) {
                var n = this.eventElement(e),
                    o = function(e) {
                        n.unbind(t, o), i(e)
                    };
                n.bind(t, o)
            }, t.exports = o
        }, {}],
        5: [function(e, t, i) {
            "use strict";
            t.exports = function() {
                function e() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                }
                return function() {
                    return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
                }
            }()
        }, {}],
        6: [function(e, t, i) {
            "use strict";

            function n(e) {
                return function(t, i) {
                    e(t, "ps--in-scrolling"), void 0 !== i ? e(t, "ps--" + i) : (e(t, "ps--x"), e(t, "ps--y"))
                }
            }
            var o = e("./class"),
                r = e("./dom"),
                a = i.toInt = function(e) {
                    return parseInt(e, 10) || 0
                },
                s = i.clone = function(e) {
                    if (e) {
                        if (Array.isArray(e)) return e.map(s);
                        if ("object" == typeof e) {
                            var t = {};
                            for (var i in e) t[i] = s(e[i]);
                            return t
                        }
                        return e
                    }
                    return null
                };
            i.extend = function(e, t) {
                var i = s(e);
                for (var n in t) i[n] = s(t[n]);
                return i
            }, i.isEditable = function(e) {
                return r.matches(e, "input,[contenteditable]") || r.matches(e, "select,[contenteditable]") || r.matches(e, "textarea,[contenteditable]") || r.matches(e, "button,[contenteditable]")
            }, i.removePsClasses = function(e) {
                for (var t = o.list(e), i = 0; i < t.length; i++) {
                    var n = t[i];
                    0 === n.indexOf("ps-") && o.remove(e, n)
                }
            }, i.outerWidth = function(e) {
                return a(r.css(e, "width")) + a(r.css(e, "paddingLeft")) + a(r.css(e, "paddingRight")) + a(r.css(e, "borderLeftWidth")) + a(r.css(e, "borderRightWidth"))
            }, i.startScrolling = n(o.add), i.stopScrolling = n(o.remove), i.env = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
            }
        }, {
            "./class": 2,
            "./dom": 3
        }],
        7: [function(e, t, i) {
            "use strict";
            var n = e("./plugin/destroy"),
                o = e("./plugin/initialize"),
                r = e("./plugin/update");
            t.exports = {
                initialize: o,
                update: r,
                destroy: n
            }
        }, {
            "./plugin/destroy": 9,
            "./plugin/initialize": 17,
            "./plugin/update": 21
        }],
        8: [function(e, t, i) {
            "use strict";
            t.exports = {
                handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
                maxScrollbarLength: null,
                minScrollbarLength: null,
                scrollXMarginOffset: 0,
                scrollYMarginOffset: 0,
                suppressScrollX: !1,
                suppressScrollY: !1,
                swipePropagation: !0,
                swipeEasing: !0,
                useBothWheelAxes: !1,
                wheelPropagation: !1,
                wheelSpeed: 1,
                theme: "default"
            }
        }, {}],
        9: [function(e, t, i) {
            "use strict";
            var n = e("../lib/helper"),
                o = e("../lib/dom"),
                r = e("./instances");
            t.exports = function(e) {
                var t = r.get(e);
                t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), n.removePsClasses(e), r.remove(e))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18
        }],
        10: [function(e, t, i) {
            "use strict";
            var n = e("../instances"),
                o = e("../update-geometry"),
                r = e("../update-scroll");
            t.exports = function(e) {
                ! function(e, t) {
                    function i(e) {
                        return e.getBoundingClientRect()
                    }
                    var n = function(e) {
                        e.stopPropagation()
                    };
                    t.event.bind(t.scrollbarY, "click", n), t.event.bind(t.scrollbarYRail, "click", function(n) {
                        var a = n.pageY - window.pageYOffset - i(t.scrollbarYRail).top > t.scrollbarYTop ? 1 : -1;
                        r(e, "top", e.scrollTop + a * t.containerHeight), o(e), n.stopPropagation()
                    }), t.event.bind(t.scrollbarX, "click", n), t.event.bind(t.scrollbarXRail, "click", function(n) {
                        var a = n.pageX - window.pageXOffset - i(t.scrollbarXRail).left > t.scrollbarXLeft ? 1 : -1;
                        r(e, "left", e.scrollLeft + a * t.containerWidth), o(e), n.stopPropagation()
                    })
                }(e, n.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        11: [function(e, t, i) {
            "use strict";
            var n = e("../../lib/helper"),
                o = e("../../lib/dom"),
                r = e("../instances"),
                a = e("../update-geometry"),
                s = e("../update-scroll");
            t.exports = function(e) {
                var t = r.get(e);
                (function(e, t) {
                    function i(i) {
                        var o = r + i * t.railXRatio,
                            a = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                        t.scrollbarXLeft = o < 0 ? 0 : o > a ? a : o;
                        var l = n.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                        s(e, "left", l)
                    }
                    var r = null,
                        l = null,
                        c = function(t) {
                            i(t.pageX - l), a(e), t.stopPropagation(), t.preventDefault()
                        },
                        u = function() {
                            n.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", c)
                        };
                    t.event.bind(t.scrollbarX, "mousedown", function(i) {
                        l = i.pageX, r = n.toInt(o.css(t.scrollbarX, "left")) * t.railXRatio, n.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", c), t.event.once(t.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault()
                    })
                })(e, t),
                function(e, t) {
                    function i(i) {
                        var o = r + i * t.railYRatio,
                            a = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                        t.scrollbarYTop = o < 0 ? 0 : o > a ? a : o;
                        var l = n.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                        s(e, "top", l)
                    }
                    var r = null,
                        l = null,
                        c = function(t) {
                            i(t.pageY - l), a(e), t.stopPropagation(), t.preventDefault()
                        },
                        u = function() {
                            n.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", c)
                        };
                    t.event.bind(t.scrollbarY, "mousedown", function(i) {
                        l = i.pageY, r = n.toInt(o.css(t.scrollbarY, "top")) * t.railYRatio, n.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", c), t.event.once(t.ownerDocument, "mouseup", u), i.stopPropagation(), i.preventDefault()
                    })
                }(e, t)
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        12: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                var i = !1;
                t.event.bind(e, "mouseenter", function() {
                    i = !0
                }), t.event.bind(e, "mouseleave", function() {
                    i = !1
                });
                t.event.bind(t.ownerDocument, "keydown", function(n) {
                    if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented)) {
                        var a = r.matches(t.scrollbarX, ":focus") || r.matches(t.scrollbarY, ":focus");
                        if (i || a) {
                            var c = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                            if (c) {
                                if ("IFRAME" === c.tagName) c = c.contentDocument.activeElement;
                                else
                                    for (; c.shadowRoot;) c = c.shadowRoot.activeElement;
                                if (o.isEditable(c)) return
                            }
                            var u = 0,
                                d = 0;
                            switch (n.which) {
                                case 37:
                                    u = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
                                    break;
                                case 38:
                                    d = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
                                    break;
                                case 39:
                                    u = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
                                    break;
                                case 40:
                                    d = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
                                    break;
                                case 33:
                                    d = 90;
                                    break;
                                case 32:
                                    d = n.shiftKey ? 90 : -90;
                                    break;
                                case 34:
                                    d = -90;
                                    break;
                                case 35:
                                    d = n.ctrlKey ? -t.contentHeight : -t.containerHeight;
                                    break;
                                case 36:
                                    d = n.ctrlKey ? e.scrollTop : t.containerHeight;
                                    break;
                                default:
                                    return
                            }
                            l(e, "top", e.scrollTop - d), l(e, "left", e.scrollLeft + u), s(e),
                                function(i, n) {
                                    var o = e.scrollTop;
                                    if (0 === i) {
                                        if (!t.scrollbarYActive) return !1;
                                        if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
                                    }
                                    var r = e.scrollLeft;
                                    if (0 === n) {
                                        if (!t.scrollbarXActive) return !1;
                                        if (0 === r && i < 0 || r >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                                    }
                                    return !0
                                }(u, d) && n.preventDefault()
                        }
                    }
                })
            }
            var o = e("../../lib/helper"),
                r = e("../../lib/dom"),
                a = e("../instances"),
                s = e("../update-geometry"),
                l = e("../update-scroll");
            t.exports = function(e) {
                n(e, a.get(e))
            }
        }, {
            "../../lib/dom": 3,
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        13: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i(i) {
                    var o = function(e) {
                            var t = e.deltaX,
                                i = -1 * e.deltaY;
                            return void 0 !== t && void 0 !== i || (t = -1 * e.wheelDeltaX / 6, i = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, i *= 10), t != t && i != i && (t = 0, i = e.wheelDelta), e.shiftKey ? [-i, -t] : [t, i]
                        }(i),
                        s = o[0],
                        l = o[1];
                    (function(t, i) {
                        var n = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                        if (n) {
                            var o = window.getComputedStyle(n);
                            if (![o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) return !1;
                            var r = n.scrollHeight - n.clientHeight;
                            if (r > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === r && i < 0)) return !0;
                            var a = n.scrollLeft - n.clientWidth;
                            if (a > 0 && !(0 === n.scrollLeft && t < 0 || n.scrollLeft === a && t > 0)) return !0
                        }
                        return !1
                    })(s, l) || (n = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (a(e, "top", l ? e.scrollTop - l * t.settings.wheelSpeed : e.scrollTop + s * t.settings.wheelSpeed), n = !0) : t.scrollbarXActive && !t.scrollbarYActive && (a(e, "left", s ? e.scrollLeft + s * t.settings.wheelSpeed : e.scrollLeft - l * t.settings.wheelSpeed), n = !0) : (a(e, "top", e.scrollTop - l * t.settings.wheelSpeed), a(e, "left", e.scrollLeft + s * t.settings.wheelSpeed)), r(e), (n = n || function(i, n) {
                        var o = e.scrollTop;
                        if (0 === i) {
                            if (!t.scrollbarYActive) return !1;
                            if (0 === o && n > 0 || o >= t.contentHeight - t.containerHeight && n < 0) return !t.settings.wheelPropagation
                        }
                        var r = e.scrollLeft;
                        if (0 === n) {
                            if (!t.scrollbarXActive) return !1;
                            if (0 === r && i < 0 || r >= t.contentWidth - t.containerWidth && i > 0) return !t.settings.wheelPropagation
                        }
                        return !0
                    }(s, l)) && (i.stopPropagation(), i.preventDefault()))
                }
                var n = !1;
                void 0 !== window.onwheel ? t.event.bind(e, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", i)
            }
            var o = e("../instances"),
                r = e("../update-geometry"),
                a = e("../update-scroll");
            t.exports = function(e) {
                n(e, o.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        14: [function(e, t, i) {
            "use strict";
            var n = e("../instances"),
                o = e("../update-geometry");
            t.exports = function(e) {
                ! function(e, t) {
                    t.event.bind(e, "scroll", function() {
                        o(e)
                    })
                }(e, n.get(e))
            }
        }, {
            "../instances": 18,
            "../update-geometry": 19
        }],
        15: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                function i() {
                    l || (l = setInterval(function() {
                        return r.get(e) ? (s(e, "top", e.scrollTop + c.top), s(e, "left", e.scrollLeft + c.left), void a(e)) : void clearInterval(l)
                    }, 50))
                }

                function n() {
                    l && (clearInterval(l), l = null), o.stopScrolling(e)
                }
                var l = null,
                    c = {
                        top: 0,
                        left: 0
                    },
                    u = !1;
                t.event.bind(t.ownerDocument, "selectionchange", function() {
                    e.contains(function() {
                        var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                        return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
                    }()) ? u = !0 : (u = !1, n())
                }), t.event.bind(window, "mouseup", function() {
                    u && (u = !1, n())
                }), t.event.bind(window, "keyup", function() {
                    u && (u = !1, n())
                }), t.event.bind(window, "mousemove", function(t) {
                    if (u) {
                        var r = {
                                x: t.pageX,
                                y: t.pageY
                            },
                            a = {
                                left: e.offsetLeft,
                                right: e.offsetLeft + e.offsetWidth,
                                top: e.offsetTop,
                                bottom: e.offsetTop + e.offsetHeight
                            };
                        r.x < a.left + 3 ? (c.left = -5, o.startScrolling(e, "x")) : r.x > a.right - 3 ? (c.left = 5, o.startScrolling(e, "x")) : c.left = 0, r.y < a.top + 3 ? (c.top = a.top + 3 - r.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : r.y > a.bottom - 3 ? (c.top = r.y - a.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : c.top = 0, 0 === c.top && 0 === c.left ? n() : i()
                    }
                })
            }
            var o = e("../../lib/helper"),
                r = e("../instances"),
                a = e("../update-geometry"),
                s = e("../update-scroll");
            t.exports = function(e) {
                n(e, r.get(e))
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        16: [function(e, t, i) {
            "use strict";
            var n = e("../../lib/helper"),
                o = e("../instances"),
                r = e("../update-geometry"),
                a = e("../update-scroll");
            t.exports = function(e) {
                (n.env.supportsTouch || n.env.supportsIePointer) && function(e, t, i, n) {
                    function s(i, n) {
                        var o = e.scrollTop,
                            r = e.scrollLeft,
                            a = Math.abs(i),
                            s = Math.abs(n);
                        if (s > a) {
                            if (n < 0 && o === t.contentHeight - t.containerHeight || n > 0 && 0 === o) return !t.settings.swipePropagation
                        } else if (a > s && (i < 0 && r === t.contentWidth - t.containerWidth || i > 0 && 0 === r)) return !t.settings.swipePropagation;
                        return !0
                    }

                    function l(t, i) {
                        a(e, "top", e.scrollTop - i), a(e, "left", e.scrollLeft - t), r(e)
                    }

                    function c() {
                        w = !0
                    }

                    function u() {
                        w = !1
                    }

                    function d(e) {
                        return e.targetTouches ? e.targetTouches[0] : e
                    }

                    function p(e) {
                        return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                    }

                    function h(e) {
                        if (p(e)) {
                            x = !0;
                            var t = d(e);
                            v.pageX = t.pageX, v.pageY = t.pageY, g = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                        }
                    }

                    function f(e) {
                        if (!x && t.settings.swipePropagation && h(e), !w && x && p(e)) {
                            var i = d(e),
                                n = {
                                    pageX: i.pageX,
                                    pageY: i.pageY
                                },
                                o = n.pageX - v.pageX,
                                r = n.pageY - v.pageY;
                            l(o, r), v = n;
                            var a = (new Date).getTime(),
                                c = a - g;
                            c > 0 && (y.x = o / c, y.y = r / c, g = a), s(o, r) && (e.stopPropagation(), e.preventDefault())
                        }
                    }

                    function m() {
                        !w && x && (x = !1, t.settings.swipeEasing && (clearInterval(b), b = setInterval(function() {
                            return o.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                        }, 10)))
                    }
                    var v = {},
                        g = 0,
                        y = {},
                        b = null,
                        w = !1,
                        x = !1;
                    i ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", u), t.event.bind(e, "touchstart", h), t.event.bind(e, "touchmove", f), t.event.bind(e, "touchend", m)) : n && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", u), t.event.bind(e, "pointerdown", h), t.event.bind(e, "pointermove", f), t.event.bind(e, "pointerup", m)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", u), t.event.bind(e, "MSPointerDown", h), t.event.bind(e, "MSPointerMove", f), t.event.bind(e, "MSPointerUp", m)))
                }(e, o.get(e), n.env.supportsTouch, n.env.supportsIePointer)
            }
        }, {
            "../../lib/helper": 6,
            "../instances": 18,
            "../update-geometry": 19,
            "../update-scroll": 20
        }],
        17: [function(e, t, i) {
            "use strict";
            var n = e("../lib/helper"),
                o = e("../lib/class"),
                r = e("./instances"),
                a = e("./update-geometry"),
                s = {
                    "click-rail": e("./handler/click-rail"),
                    "drag-scrollbar": e("./handler/drag-scrollbar"),
                    keyboard: e("./handler/keyboard"),
                    wheel: e("./handler/mouse-wheel"),
                    touch: e("./handler/touch"),
                    selection: e("./handler/selection")
                },
                l = e("./handler/native-scroll");
            t.exports = function(e, t) {
                t = "object" == typeof t ? t : {}, o.add(e, "ps");
                var i = r.add(e);
                i.settings = n.extend(i.settings, t), o.add(e, "ps--theme_" + i.settings.theme), i.settings.handlers.forEach(function(t) {
                    s[t](e)
                }), l(e), a(e)
            }
        }, {
            "../lib/class": 2,
            "../lib/helper": 6,
            "./handler/click-rail": 10,
            "./handler/drag-scrollbar": 11,
            "./handler/keyboard": 12,
            "./handler/mouse-wheel": 13,
            "./handler/native-scroll": 14,
            "./handler/selection": 15,
            "./handler/touch": 16,
            "./instances": 18,
            "./update-geometry": 19
        }],
        18: [function(e, t, i) {
            "use strict";

            function n(e) {
                return e.getAttribute("data-ps-id")
            }
            var o = e("../lib/helper"),
                r = e("../lib/class"),
                a = e("./default-setting"),
                s = e("../lib/dom"),
                l = e("../lib/event-manager"),
                c = e("../lib/guid"),
                u = {};
            i.add = function(e) {
                var t = c();
                return function(e, t) {
                    e.setAttribute("data-ps-id", t)
                }(e, t), u[t] = new function(e) {
                    function t() {
                        r.add(e, "ps--focus")
                    }

                    function i() {
                        r.remove(e, "ps--focus")
                    }
                    var n = this;
                    n.settings = o.clone(a), n.containerWidth = null, n.containerHeight = null, n.contentWidth = null, n.contentHeight = null, n.isRtl = "rtl" === s.css(e, "direction"), n.isNegativeScroll = function() {
                        var t, i = e.scrollLeft;
                        return e.scrollLeft = -1, t = e.scrollLeft < 0, e.scrollLeft = i, t
                    }(), n.negativeScrollAdjustment = n.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, n.event = new l, n.ownerDocument = e.ownerDocument || document, n.scrollbarXRail = s.appendTo(s.e("div", "ps__scrollbar-x-rail"), e), n.scrollbarX = s.appendTo(s.e("div", "ps__scrollbar-x"), n.scrollbarXRail), n.scrollbarX.setAttribute("tabindex", 0), n.event.bind(n.scrollbarX, "focus", t), n.event.bind(n.scrollbarX, "blur", i), n.scrollbarXActive = null, n.scrollbarXWidth = null, n.scrollbarXLeft = null, n.scrollbarXBottom = o.toInt(s.css(n.scrollbarXRail, "bottom")), n.isScrollbarXUsingBottom = n.scrollbarXBottom == n.scrollbarXBottom, n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : o.toInt(s.css(n.scrollbarXRail, "top")), n.railBorderXWidth = o.toInt(s.css(n.scrollbarXRail, "borderLeftWidth")) + o.toInt(s.css(n.scrollbarXRail, "borderRightWidth")), s.css(n.scrollbarXRail, "display", "block"), n.railXMarginWidth = o.toInt(s.css(n.scrollbarXRail, "marginLeft")) + o.toInt(s.css(n.scrollbarXRail, "marginRight")), s.css(n.scrollbarXRail, "display", ""), n.railXWidth = null, n.railXRatio = null, n.scrollbarYRail = s.appendTo(s.e("div", "ps__scrollbar-y-rail"), e), n.scrollbarY = s.appendTo(s.e("div", "ps__scrollbar-y"), n.scrollbarYRail), n.scrollbarY.setAttribute("tabindex", 0), n.event.bind(n.scrollbarY, "focus", t), n.event.bind(n.scrollbarY, "blur", i), n.scrollbarYActive = null, n.scrollbarYHeight = null, n.scrollbarYTop = null, n.scrollbarYRight = o.toInt(s.css(n.scrollbarYRail, "right")), n.isScrollbarYUsingRight = n.scrollbarYRight == n.scrollbarYRight, n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : o.toInt(s.css(n.scrollbarYRail, "left")), n.scrollbarYOuterWidth = n.isRtl ? o.outerWidth(n.scrollbarY) : null, n.railBorderYWidth = o.toInt(s.css(n.scrollbarYRail, "borderTopWidth")) + o.toInt(s.css(n.scrollbarYRail, "borderBottomWidth")), s.css(n.scrollbarYRail, "display", "block"), n.railYMarginHeight = o.toInt(s.css(n.scrollbarYRail, "marginTop")) + o.toInt(s.css(n.scrollbarYRail, "marginBottom")), s.css(n.scrollbarYRail, "display", ""), n.railYHeight = null, n.railYRatio = null
                }(e), u[t]
            }, i.remove = function(e) {
                delete u[n(e)],
                    function(e) {
                        e.removeAttribute("data-ps-id")
                    }(e)
            }, i.get = function(e) {
                return u[n(e)]
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/event-manager": 4,
            "../lib/guid": 5,
            "../lib/helper": 6,
            "./default-setting": 8
        }],
        19: [function(e, t, i) {
            "use strict";

            function n(e, t) {
                return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
            }
            var o = e("../lib/helper"),
                r = e("../lib/class"),
                a = e("../lib/dom"),
                s = e("./instances"),
                l = e("./update-scroll");
            t.exports = function(e) {
                var t, i = s.get(e);
                i.containerWidth = e.clientWidth, i.containerHeight = e.clientHeight, i.contentWidth = e.scrollWidth, i.contentHeight = e.scrollHeight, e.contains(i.scrollbarXRail) || ((t = a.queryChildren(e, ".ps__scrollbar-x-rail")).length > 0 && t.forEach(function(e) {
                        a.remove(e)
                    }), a.appendTo(i.scrollbarXRail, e)), e.contains(i.scrollbarYRail) || ((t = a.queryChildren(e, ".ps__scrollbar-y-rail")).length > 0 && t.forEach(function(e) {
                        a.remove(e)
                    }), a.appendTo(i.scrollbarYRail, e)), !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0, i.railXWidth = i.containerWidth - i.railXMarginWidth, i.railXRatio = i.containerWidth / i.railXWidth, i.scrollbarXWidth = n(i, o.toInt(i.railXWidth * i.containerWidth / i.contentWidth)), i.scrollbarXLeft = o.toInt((i.negativeScrollAdjustment + e.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1, !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0, i.railYHeight = i.containerHeight - i.railYMarginHeight, i.railYRatio = i.containerHeight / i.railYHeight, i.scrollbarYHeight = n(i, o.toInt(i.railYHeight * i.containerHeight / i.contentHeight)), i.scrollbarYTop = o.toInt(e.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1, i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth), i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
                    function(e, t) {
                        var i = {
                            width: t.railXWidth
                        };
                        t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : i.left = e.scrollLeft, t.isScrollbarXUsingBottom ? i.bottom = t.scrollbarXBottom - e.scrollTop : i.top = t.scrollbarXTop + e.scrollTop, a.css(t.scrollbarXRail, i);
                        var n = {
                            top: e.scrollTop,
                            height: t.railYHeight
                        };
                        t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : n.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + e.scrollLeft, a.css(t.scrollbarYRail, n), a.css(t.scrollbarX, {
                            left: t.scrollbarXLeft,
                            width: t.scrollbarXWidth - t.railBorderXWidth
                        }), a.css(t.scrollbarY, {
                            top: t.scrollbarYTop,
                            height: t.scrollbarYHeight - t.railBorderYWidth
                        })
                    }(e, i), i.scrollbarXActive ? r.add(e, "ps--active-x") : (r.remove(e, "ps--active-x"), i.scrollbarXWidth = 0, i.scrollbarXLeft = 0, l(e, "left", 0)), i.scrollbarYActive ? r.add(e, "ps--active-y") : (r.remove(e, "ps--active-y"), i.scrollbarYHeight = 0, i.scrollbarYTop = 0, l(e, "top", 0))
            }
        }, {
            "../lib/class": 2,
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-scroll": 20
        }],
        20: [function(e, t, i) {
            "use strict";
            var n = e("./instances"),
                o = function(e) {
                    var t = document.createEvent("Event");
                    return t.initEvent(e, !0, !0), t
                };
            t.exports = function(e, t, i) {
                if (void 0 === e) throw "You must provide an element to the update-scroll function";
                if (void 0 === t) throw "You must provide an axis to the update-scroll function";
                if (void 0 === i) throw "You must provide a value to the update-scroll function";
                "top" === t && i <= 0 && (e.scrollTop = i = 0, e.dispatchEvent(o("ps-y-reach-start"))), "left" === t && i <= 0 && (e.scrollLeft = i = 0, e.dispatchEvent(o("ps-x-reach-start")));
                var r = n.get(e);
                "top" === t && i >= r.contentHeight - r.containerHeight && ((i = r.contentHeight - r.containerHeight) - e.scrollTop <= 1 ? i = e.scrollTop : e.scrollTop = i, e.dispatchEvent(o("ps-y-reach-end"))), "left" === t && i >= r.contentWidth - r.containerWidth && ((i = r.contentWidth - r.containerWidth) - e.scrollLeft <= 1 ? i = e.scrollLeft : e.scrollLeft = i, e.dispatchEvent(o("ps-x-reach-end"))), void 0 === r.lastTop && (r.lastTop = e.scrollTop), void 0 === r.lastLeft && (r.lastLeft = e.scrollLeft), "top" === t && i < r.lastTop && e.dispatchEvent(o("ps-scroll-up")), "top" === t && i > r.lastTop && e.dispatchEvent(o("ps-scroll-down")), "left" === t && i < r.lastLeft && e.dispatchEvent(o("ps-scroll-left")), "left" === t && i > r.lastLeft && e.dispatchEvent(o("ps-scroll-right")), "top" === t && i !== r.lastTop && (e.scrollTop = r.lastTop = i, e.dispatchEvent(o("ps-scroll-y"))), "left" === t && i !== r.lastLeft && (e.scrollLeft = r.lastLeft = i, e.dispatchEvent(o("ps-scroll-x")))
            }
        }, {
            "./instances": 18
        }],
        21: [function(e, t, i) {
            "use strict";
            var n = e("../lib/helper"),
                o = e("../lib/dom"),
                r = e("./instances"),
                a = e("./update-geometry"),
                s = e("./update-scroll");
            t.exports = function(e) {
                var t = r.get(e);
                t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = n.toInt(o.css(t.scrollbarXRail, "marginLeft")) + n.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = n.toInt(o.css(t.scrollbarYRail, "marginTop")) + n.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), a(e), s(e, "top", e.scrollTop), s(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
            }
        }, {
            "../lib/dom": 3,
            "../lib/helper": 6,
            "./instances": 18,
            "./update-geometry": 19,
            "./update-scroll": 20
        }]
    }, {}, [1]),
    function(e) {
        "use strict";
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }), e.requestAnimationFrame || function() {
            for (var t = ["webkit", "moz"], i = 0; i < t.length && !e.requestAnimationFrame; ++i) {
                var n = t[i];
                e.requestAnimationFrame = e[n + "RequestAnimationFrame"], e.cancelAnimationFrame = e[n + "CancelAnimationFrame"] || e[n + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent) || !e.requestAnimationFrame || !e.cancelAnimationFrame) {
                var o = 0;
                e.requestAnimationFrame = function(e) {
                    var t = Date.now(),
                        i = Math.max(o + 16, t);
                    return setTimeout(function() {
                        e(o = i)
                    }, i - t)
                }, e.cancelAnimationFrame = clearTimeout
            }
        }();
        var t = document.createElement("div");

        function i(e) {
            var i = ["O", "Moz", "ms", "Ms", "Webkit"],
                n = i.length;
            if (void 0 !== t.style[e]) return !0;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); --n > -1 && void 0 === t.style[i[n] + e];);
            return n >= 0
        }
        var n, o, r = i("transform"),
            a = i("perspective"),
            s = navigator.userAgent,
            l = s.toLowerCase().indexOf("android") > -1,
            c = /iPad|iPhone|iPod/.test(s) && !e.MSStream,
            u = s.toLowerCase().indexOf("firefox") > -1,
            d = s.indexOf("MSIE ") > -1 || s.indexOf("Trident/") > -1 || s.indexOf("Edge/") > -1,
            p = document.all && !e.atob;

        function h() {
            n = e.innerWidth || document.documentElement.clientWidth, o = e.innerHeight || document.documentElement.clientHeight
        }
        h();
        var f = [],
            m = function() {
                var e = 0;
                return function(t, i) {
                    var n;
                    if (this.$item = t, this.defaults = {
                            type: "scroll",
                            speed: .5,
                            imgSrc: null,
                            imgWidth: null,
                            imgHeight: null,
                            elementInViewport: null,
                            zIndex: -100,
                            noAndroid: !1,
                            noIos: !0,
                            onScroll: null,
                            onInit: null,
                            onDestroy: null,
                            onCoverImage: null
                        }, n = JSON.parse(this.$item.getAttribute("data-jarallax") || "{}"), this.options = this.extend({}, this.defaults, n, i), !(!r || l && this.options.noAndroid || c && this.options.noIos)) {
                        this.options.speed = Math.min(2, Math.max(-1, parseFloat(this.options.speed)));
                        var o = this.options.elementInViewport;
                        o && "object" == typeof o && void 0 !== o.length && (o = o[0]), !o instanceof Element && (o = null), this.options.elementInViewport = o, this.instanceID = e++, this.image = {
                            src: this.options.imgSrc || null,
                            $container: null,
                            $item: null,
                            width: this.options.imgWidth || null,
                            height: this.options.imgHeight || null,
                            useImgTag: c || l || d,
                            position: !a || u ? "absolute" : "fixed"
                        }, this.initImg() && this.init()
                    }
                }
            }();

        function v(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i) : e.attachEvent("on" + t, function() {
                i.call(e)
            })
        }

        function g(t) {
            e.requestAnimationFrame(function() {
                "scroll" !== t.type && h();
                for (var e = 0, i = f.length; e < i; e++) "scroll" !== t.type && (f[e].coverImage(), f[e].clipContainer()), f[e].onScroll()
            })
        }
        m.prototype.css = function(t, i) {
            if ("string" == typeof i) return e.getComputedStyle ? e.getComputedStyle(t).getPropertyValue(i) : t.style[i];
            for (var n in i.transform && (a && (i.transform += " translateZ(0)"), i.WebkitTransform = i.MozTransform = i.msTransform = i.OTransform = i.transform), i) t.style[n] = i[n];
            return t
        }, m.prototype.extend = function(e) {
            e = e || {};
            for (var t = 1; t < arguments.length; t++)
                if (arguments[t])
                    for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
            return e
        }, m.prototype.initImg = function() {
            return null === this.image.src && (this.image.src = this.css(this.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!this.image.src || "none" === this.image.src)
        }, m.prototype.init = function() {
            var e = this,
                t = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    pointerEvents: "none"
                },
                i = {};
            e.$item.setAttribute("data-jarallax-original-styles", e.$item.getAttribute("style")), "static" === e.css(e.$item, "position") && e.css(e.$item, {
                position: "relative"
            }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                zIndex: 0
            }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                visibility: "hidden",
                "z-index": e.options.zIndex
            }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag ? (e.image.$item = document.createElement("img"), e.image.$item.setAttribute("src", e.image.src), i = e.extend({
                "max-width": "none"
            }, t, i)) : (e.image.$item = document.createElement("div"), i = e.extend({
                "background-position": "50% 50%",
                "background-size": "100% auto",
                "background-repeat": "no-repeat no-repeat",
                "background-image": 'url("' + e.image.src + '")'
            }, t, i));
            for (var n = 0, o = e.$item; null !== o && o !== document && 0 === n;) {
                var r = e.css(o, "-webkit-transform") || e.css(o, "-moz-transform") || e.css(o, "transform");
                r && "none" !== r && (n = 1, e.css(e.image.$container, {
                    transform: "translateX(0) translateY(0)"
                })), o = o.parentNode
            }

            function a() {
                e.coverImage(), e.clipContainer(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), setTimeout(function() {
                    e.$item && e.css(e.$item, {
                        "background-image": "none",
                        "background-attachment": "scroll",
                        "background-size": "auto"
                    })
                }, 0)
            }(n || "opacity" === e.options.type || "scale" === e.options.type || "scale-opacity" === e.options.type) && (e.image.position = "absolute"), i.position = e.image.position, e.css(e.image.$item, i), e.image.$container.appendChild(e.image.$item), e.image.width && e.image.height ? a() : e.getImageSize(e.image.src, function(t, i) {
                e.image.width = t, e.image.height = i, a()
            }), f.push(e)
        }, m.prototype.destroy = function() {
            for (var e = 0, t = f.length; e < t; e++)
                if (f[e].instanceID === this.instanceID) {
                    f.splice(e, 1);
                    break
                }
            var i = this.$item.getAttribute("data-jarallax-original-styles");
            for (var n in this.$item.removeAttribute("data-jarallax-original-styles"), "null" === i ? this.$item.removeAttribute("style") : this.$item.setAttribute("style", i), this.$clipStyles && this.$clipStyles.parentNode.removeChild(this.$clipStyles), this.image.$container.parentNode.removeChild(this.image.$container), this.options.onDestroy && this.options.onDestroy.call(this), delete this.$item.jarallax, this) delete this[n]
        }, m.prototype.getImageSize = function(e, t) {
            if (e && t) {
                var i = new Image;
                i.onload = function() {
                    t(i.width, i.height)
                }, i.src = e
            }
        }, m.prototype.clipContainer = function() {
            if (!p) {
                var e = this.image.$container.getBoundingClientRect(),
                    t = e.width,
                    i = e.height;
                if (!this.$clipStyles) this.$clipStyles = document.createElement("style"), this.$clipStyles.setAttribute("type", "text/css"), this.$clipStyles.setAttribute("id", "#jarallax-clip-" + this.instanceID), (document.head || document.getElementsByTagName("head")[0]).appendChild(this.$clipStyles);
                var n = ["#jarallax-container-" + this.instanceID + " {", "   clip: rect(0 " + t + "px " + i + "px 0);", "   clip: rect(0, " + t + "px, " + i + "px, 0);", "}"].join("\n");
                this.$clipStyles.styleSheet ? this.$clipStyles.styleSheet.cssText = n : this.$clipStyles.innerHTML = n
            }
        }, m.prototype.coverImage = function() {
            if (this.image.width && this.image.height) {
                var e = this.image.$container.getBoundingClientRect(),
                    t = e.width,
                    i = e.height,
                    n = e.left,
                    r = this.image.width,
                    a = this.image.height,
                    s = this.options.speed,
                    l = "scroll" === this.options.type || "scroll-opacity" === this.options.type,
                    c = 0,
                    u = 0,
                    d = i,
                    p = 0,
                    h = 0;
                l && (c = s < 0 ? s * Math.max(i, o) : s * (i + o), s > 1 ? d = Math.abs(c - o) : s < 0 ? d = c / s + Math.abs(c) : d += Math.abs(o - i) * (1 - s), c /= 2), (u = d * r / a) < t && (d = (u = t) * a / r), l ? (p = n + (t - u) / 2, h = (o - d) / 2) : (p = (t - u) / 2, h = (i - d) / 2), "absolute" === this.image.position && (p -= n), this.parallaxScrollDistance = c, this.css(this.image.$item, {
                    width: u + "px",
                    height: d + "px",
                    marginLeft: p + "px",
                    marginTop: h + "px"
                }), this.options.onCoverImage && this.options.onCoverImage.call(this)
            }
        }, m.prototype.isVisible = function() {
            return this.isElementInViewport || !1
        }, m.prototype.onScroll = function(e) {
            if (this.image.width && this.image.height) {
                var t = this.$item.getBoundingClientRect(),
                    i = t.top,
                    r = t.height,
                    a = {
                        visibility: "visible",
                        backgroundPosition: "50% 50%"
                    },
                    s = t;
                if (this.options.elementInViewport && (s = this.options.elementInViewport.getBoundingClientRect()), this.isElementInViewport = s.bottom >= 0 && s.right >= 0 && s.top <= o && s.left <= n, e || this.isElementInViewport) {
                    var l = Math.max(0, i),
                        c = Math.max(0, r + i),
                        u = Math.max(0, -i),
                        d = Math.max(0, i + r - o),
                        p = Math.max(0, r - (i + r - o)),
                        h = Math.max(0, -i + o - r),
                        f = 1 - 2 * (o - i) / (o + r),
                        m = 1;
                    if (r < o ? m = 1 - (u || d) / r : c <= o ? m = c / o : p <= o && (m = p / o), "opacity" !== this.options.type && "scale-opacity" !== this.options.type && "scroll-opacity" !== this.options.type || (a.transform = "", a.opacity = m), "scale" === this.options.type || "scale-opacity" === this.options.type) {
                        var v = 1;
                        this.options.speed < 0 ? v -= this.options.speed * m : v += this.options.speed * (1 - m), a.transform = "scale(" + v + ")"
                    }
                    if ("scroll" === this.options.type || "scroll-opacity" === this.options.type) {
                        var g = this.parallaxScrollDistance * f;
                        "absolute" === this.image.position && (g -= i), a.transform = "translateY(" + g + "px)"
                    }
                    this.css(this.image.$item, a), this.options.onScroll && this.options.onScroll.call(this, {
                        section: t,
                        beforeTop: l,
                        beforeTopEnd: c,
                        afterTop: u,
                        beforeBottom: d,
                        beforeBottomEnd: p,
                        afterBottom: h,
                        visiblePercent: m,
                        fromViewportCenter: f
                    })
                }
            }
        }, v(e, "scroll", g), v(e, "resize", g), v(e, "orientationchange", g), v(e, "load", g);
        var y = function(e) {
            ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            for (var t, i = arguments[1], n = Array.prototype.slice.call(arguments, 2), o = e.length, r = 0; r < o; r++)
                if ("object" == typeof i || void 0 === i ? e[r].jarallax || (e[r].jarallax = new m(e[r], i)) : e[r].jarallax && (t = e[r].jarallax[i].apply(e[r].jarallax, n)), void 0 !== t) return t;
            return e
        };
        y.constructor = m;
        var b = e.jarallax;
        if (e.jarallax = y, e.jarallax.noConflict = function() {
                return e.jarallax = b, this
            }, "undefined" != typeof jQuery) {
            var w = function() {
                var t = arguments || [];
                Array.prototype.unshift.call(t, this);
                var i = y.apply(e, t);
                return "object" != typeof i ? i : this
            };
            w.constructor = m;
            var x = jQuery.fn.jarallax;
            jQuery.fn.jarallax = w, jQuery.fn.jarallax.noConflict = function() {
                return jQuery.fn.jarallax = x, this
            }
        }
        v(e, "DOMContentLoaded", function() {
            y(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
        })
    }(window),
    function(e) {
        "use strict";

        function t() {
            this._done = [], this._fail = []
        }

        function i(e, t, i) {
            e.addEventListener ? e.addEventListener(t, i) : e.attachEvent("on" + t, function() {
                i.call(e)
            })
        }
        t.prototype = {
            execute: function(e, t) {
                var i = e.length;
                for (t = Array.prototype.slice.call(t); i--;) e[i].apply(null, t)
            },
            resolve: function() {
                this.execute(this._done, arguments)
            },
            reject: function() {
                this.execute(this._fail, arguments)
            },
            done: function(e) {
                this._done.push(e)
            },
            fail: function(e) {
                this._fail.push(e)
            }
        };
        var n = function() {
            var e = 0;
            return function(t, i) {
                this.url = t, this.options_default = {
                    autoplay: 1,
                    loop: 1,
                    mute: 1,
                    controls: 0,
                    startTime: 0,
                    endTime: 0
                }, this.options = function(e) {
                    e = e || {};
                    for (var t = 1; t < arguments.length; t++)
                        if (arguments[t])
                            for (var i in arguments[t]) arguments[t].hasOwnProperty(i) && (e[i] = arguments[t][i]);
                    return e
                }({}, this.options_default, i), this.videoID = this.parseURL(t), this.videoID && (this.ID = e++, this.loadAPI(), this.init())
            }
        }();
        n.prototype.parseURL = function(e) {
            var t, i = !(!(t = e.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/)) || 11 !== t[1].length) && t[1],
                n = function(e) {
                    var t = e.match(/https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/);
                    return !(!t || !t[3]) && t[3]
                }(e),
                o = function(e) {
                    for (var t = e.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), i = {}, n = 0, o = 0; o < t.length; o++) {
                        var r = t[o].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                        r && r[1] && r[2] && (i["ogv" === r[1] ? "ogg" : r[1]] = r[2], n = 1)
                    }
                    return !!n && i
                }(e);
            return i ? (this.type = "youtube", i) : n ? (this.type = "vimeo", n) : !!o && (this.type = "local", o)
        }, n.prototype.isValid = function() {
            return !!this.videoID
        }, n.prototype.on = function(e, t) {
            this.userEventsList = this.userEventsList || [], (this.userEventsList[e] || (this.userEventsList[e] = [])).push(t)
        }, n.prototype.off = function(e, t) {
            if (this.userEventsList && this.userEventsList[e])
                if (t)
                    for (var i = 0; i < this.userEventsList[e].length; i++) this.userEventsList[e][i] === t && (this.userEventsList[e][i] = !1);
                else delete this.userEventsList[e]
        }, n.prototype.fire = function(e) {
            var t = [].slice.call(arguments, 1);
            if (this.userEventsList && void 0 !== this.userEventsList[e])
                for (var i in this.userEventsList[e]) this.userEventsList[e][i] && this.userEventsList[e][i].apply(this, t)
        }, n.prototype.play = function(e) {
            var t = this;
            t.player && ("youtube" === t.type && t.player.playVideo && (void 0 !== e && t.player.seekTo(e || 0), t.player.playVideo()), "vimeo" === t.type && (void 0 !== e && t.player.setCurrentTime(e), t.player.getPaused().then(function(e) {
                e && t.player.play()
            })), "local" === t.type && (void 0 !== e && (t.player.currentTime = e), t.player.play()))
        }, n.prototype.pause = function() {
            this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause())
        }, n.prototype.getImageURL = function(e) {
            var t = this;
            if (t.videoImage) e(t.videoImage);
            else {
                if ("youtube" === t.type) {
                    var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
                        n = 0,
                        o = new Image;
                    o.onload = function() {
                        120 !== (this.naturalWidth || this.width) || n === i.length - 1 ? (t.videoImage = "https://img.youtube.com/vi/" + t.videoID + "/" + i[n] + ".jpg", e(t.videoImage)) : (n++, this.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[n] + ".jpg")
                    }, o.src = "https://img.youtube.com/vi/" + t.videoID + "/" + i[n] + ".jpg"
                }
                if ("vimeo" === t.type) {
                    var r = new XMLHttpRequest;
                    r.open("GET", "https://vimeo.com/api/v2/video/" + t.videoID + ".json", !0), r.onreadystatechange = function() {
                        if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                            var i = JSON.parse(this.responseText);
                            t.videoImage = i[0].thumbnail_large, e(t.videoImage)
                        }
                    }, r.send(), r = null
                }
            }
        }, n.prototype.getIframe = function(t) {
            var n = this;
            n.$iframe ? t(n.$iframe) : n.onAPIready(function() {
                var o, r, a, s, l, c;
                if (n.$iframe || ((o = document.createElement("div")).style.display = "none"), "youtube" === n.type) {
                    var u, d;
                    n.playerOptions = {}, n.playerOptions.videoId = n.videoID, n.playerOptions.playerVars = {
                        autohide: 1,
                        rel: 0,
                        autoplay: 0
                    }, n.options.controls || (n.playerOptions.playerVars.iv_load_policy = 3, n.playerOptions.playerVars.modestbranding = 1, n.playerOptions.playerVars.controls = 0, n.playerOptions.playerVars.showinfo = 0, n.playerOptions.playerVars.disablekb = 1), n.playerOptions.events = {
                        onReady: function(e) {
                            n.options.mute && e.target.mute(), n.options.autoplay && n.play(n.options.startTime), n.fire("ready", e)
                        },
                        onStateChange: function(e) {
                            n.options.loop && e.data === YT.PlayerState.ENDED && n.play(n.options.startTime), u || e.data !== YT.PlayerState.PLAYING || (u = 1, n.fire("started", e)), e.data === YT.PlayerState.PLAYING && n.fire("play", e), e.data === YT.PlayerState.PAUSED && n.fire("pause", e), e.data === YT.PlayerState.ENDED && n.fire("end", e), n.options.endTime && (e.data === YT.PlayerState.PLAYING ? d = setInterval(function() {
                                n.options.endTime && n.player.getCurrentTime() >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
                            }, 150) : clearInterval(d))
                        }
                    };
                    var p = !n.$iframe;
                    if (p) {
                        var h = document.createElement("div");
                        h.setAttribute("id", n.playerID), o.appendChild(h), document.body.appendChild(o)
                    }
                    n.player = n.player || new e.YT.Player(n.playerID, n.playerOptions), p && (n.$iframe = document.getElementById(n.playerID), n.videoWidth = parseInt(n.$iframe.getAttribute("width"), 10) || 1280, n.videoHeight = parseInt(n.$iframe.getAttribute("height"), 10) || 720)
                }
                "vimeo" === n.type && (n.playerOptions = "", n.playerOptions += "player_id=" + n.playerID, n.playerOptions += "&autopause=0", n.options.controls || (n.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), n.playerOptions += "&autoplay=" + (n.options.autoplay ? "1" : "0"), n.playerOptions += "&loop=" + (n.options.loop ? 1 : 0), n.$iframe || (n.$iframe = document.createElement("iframe"), n.$iframe.setAttribute("id", n.playerID), n.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + n.videoID + "?" + n.playerOptions), n.$iframe.setAttribute("frameborder", "0"), o.appendChild(n.$iframe), document.body.appendChild(o)), n.player = n.player || new Vimeo.Player(n.$iframe), n.player.getVideoWidth().then(function(e) {
                    n.videoWidth = e || 1280
                }), n.player.getVideoHeight().then(function(e) {
                    n.videoHeight = e || 720
                }), n.player.setVolume(n.options.mute ? 0 : 100), n.player.on("timeupdate", function(e) {
                    r || n.fire("started", e), r = 1, n.options.endTime && n.options.endTime && e.seconds >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
                }), n.player.on("play", function(e) {
                    n.fire("play", e), n.options.startTime && 0 === e.seconds && n.play(n.options.startTime)
                }), n.player.on("pause", function(e) {
                    n.fire("pause", e)
                }), n.player.on("ended", function(e) {
                    n.fire("end", e)
                }), n.player.on("loaded", function(e) {
                    n.fire("ready", e)
                }));
                if ("local" === n.type) {
                    if (!n.$iframe)
                        for (var f in n.$iframe = document.createElement("video"), n.options.mute && (n.$iframe.muted = !0), n.options.loop && (n.$iframe.loop = !0), n.$iframe.setAttribute("id", n.playerID), o.appendChild(n.$iframe), document.body.appendChild(o), n.videoID) a = n.$iframe, s = n.videoID[f], l = "video/" + f, c = void 0, (c = document.createElement("source")).src = s, c.type = l, a.appendChild(c);
                    var m;
                    n.player = n.player || n.$iframe, i(n.player, "playing", function(e) {
                        m || n.fire("started", e), m = 1
                    }), i(n.player, "timeupdate", function() {
                        n.options.endTime && n.options.endTime && this.currentTime >= n.options.endTime && (n.options.loop ? n.play(n.options.startTime) : n.pause())
                    }), i(n.player, "play", function(e) {
                        n.fire("play", e)
                    }), i(n.player, "pause", function(e) {
                        n.fire("pause", e)
                    }), i(n.player, "ended", function(e) {
                        n.fire("end", e)
                    }), i(n.player, "loadedmetadata", function() {
                        n.videoWidth = this.videoWidth || 1280, n.videoHeight = this.videoHeight || 720, n.fire("ready"), n.options.autoplay && n.play(n.options.startTime)
                    })
                }
                t(n.$iframe)
            })
        }, n.prototype.init = function() {
            this.playerID = "VideoWorker-" + this.ID
        };
        var o = 0,
            r = 0;
        n.prototype.loadAPI = function() {
            if (!o || !r) {
                var t = "";
                if ("youtube" !== this.type || o || (o = 1, t = "//www.youtube.com/iframe_api"), "vimeo" !== this.type || r || (r = 1, t = "//player.vimeo.com/api/player.js"), t) {
                    "file://" === e.location.origin && (t = "http:" + t);
                    var i = document.createElement("script"),
                        n = document.getElementsByTagName("head")[0];
                    i.src = t, n.appendChild(i), n = null, i = null
                }
            }
        };
        var a = 0,
            s = 0,
            l = new t,
            c = new t;
        n.prototype.onAPIready = function(t) {
            if ("youtube" === this.type && ("undefined" != typeof YT && 0 !== YT.loaded || a ? "object" == typeof YT && 1 === YT.loaded ? t() : l.done(function() {
                    t()
                }) : (a = 1, e.onYouTubeIframeAPIReady = function() {
                    e.onYouTubeIframeAPIReady = null, l.resolve("done"), t()
                })), "vimeo" === this.type)
                if ("undefined" != typeof Vimeo || s) "undefined" != typeof Vimeo ? t() : c.done(function() {
                    t()
                });
                else {
                    s = 1;
                    var i = setInterval(function() {
                        "undefined" != typeof Vimeo && (clearInterval(i), c.resolve("done"), t())
                    }, 20)
                }
                "local" === this.type && t()
        }, e.VideoWorker = n
    }(window),
    function() {
        "use strict";
        if ("undefined" != typeof jarallax) {
            var e = jarallax.constructor,
                t = e.prototype.init;
            e.prototype.init = function() {
                var e = this;
                t.apply(e), e.video && e.video.getIframe(function(t) {
                    var i = t.parentNode;
                    e.css(t, {
                        position: e.image.position,
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        bottom: "0px",
                        width: "100%",
                        height: "100%",
                        maxWidth: "none",
                        maxHeight: "none",
                        visibility: "hidden",
                        margin: 0,
                        zIndex: -1
                    }), e.$video = t, e.image.$container.appendChild(t), i.parentNode.removeChild(i)
                })
            };
            var i = e.prototype.coverImage;
            e.prototype.coverImage = function() {
                i.apply(this), this.video && "IFRAME" === this.image.$item.nodeName && this.css(this.image.$item, {
                    height: this.image.$item.getBoundingClientRect().height + 400 + "px",
                    marginTop: -200 + parseFloat(this.css(this.image.$item, "margin-top")) + "px"
                })
            };
            var n = e.prototype.initImg;
            e.prototype.initImg = function() {
                var e = this,
                    t = n.apply(e);
                if (e.options.videoSrc || (e.options.videoSrc = e.$item.getAttribute("data-jarallax-video") || !1), e.options.videoSrc) {
                    var i = new VideoWorker(e.options.videoSrc, {
                        startTime: e.options.videoStartTime || 0,
                        endTime: e.options.videoEndTime || 0
                    });
                    if (i.isValid() && (e.image.useImgTag = !0, i.on("ready", function() {
                            var t = e.onScroll;
                            e.onScroll = function() {
                                t.apply(e), e.isVisible() ? i.play() : i.pause()
                            }
                        }), i.on("started", function() {
                            e.image.$default_item = e.image.$item, e.image.$item = e.$video, e.image.width = e.options.imgWidth = e.video.videoWidth || 1280, e.image.height = e.options.imgHeight = e.video.videoHeight || 720, e.coverImage(), e.clipContainer(), e.onScroll(), e.image.$default_item && (e.image.$default_item.style.display = "none")
                        }), e.video = i, "local" !== i.type && i.getImageURL(function(t) {
                            e.image.src = t, e.init()
                        })), "local" !== i.type) return !1;
                    if (!t) return e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0
                }
                return t
            };
            var o = e.prototype.destroy;
            e.prototype.destroy = function() {
                o.apply(this)
            }
        }
    }(), $.fn.mdb_autocomplete = function(e) {
        return e = $.extend({
            data: {}
        }, e), this.each(function() {
            var t = $(this),
                i = void 0,
                n = e.data;
            Object.keys(n).length && (i = $('<ul class="mdb-autocomplete-wrap"></ul>')).insertAfter($(this)), t.on("keyup", function(e) {
                var o = t.val();
                if (i.empty(), o.length)
                    for (var r in n)
                        if (-1 !== n[r].toLowerCase().indexOf(o.toLowerCase())) {
                            var a = $("<li>" + n[r] + "</li>");
                            i.append(a)
                        }
                13 === e.which && (i.children(":first").trigger("click"), i.empty()), 0 === o.length ? $(".mdb-autocomplete-clear").css("visibility", "hidden") : $(".mdb-autocomplete-clear").css("visibility", "visible")
            }), i.on("click", "li", function() {
                t.val($(this).text()), i.empty()
            }), $(".mdb-autocomplete-clear").on("click", function(e) {
                e.preventDefault(), t.val(""), $(this).css("visibility", "hidden"), i.empty(), $(this).parent().find("label").removeClass("active")
            })
        })
    }, $("body").on("shown.bs.modal", ".modal", function() {
        $(".modal-backdrop").length || ($modal_dialog = $(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && ($(this).addClass("modal-scrolling"), $("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && ($(this).addClass("modal-content-clickable"), $("body").addClass("scrollable")))
    }), $("body").on("hidden.bs.modal", ".modal", function() {
        $("body").removeClass("scrollable")
    });