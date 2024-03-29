/**
 * angular-ui-utils - Swiss-Army-Knife of AngularJS tools (with no external dependencies!)
 * @version v0.1.1 - 2014-02-05
 * @link http://angular-ui.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"use strict";
angular.module("ui.alias", []).config(["$compileProvider", "uiAliasConfig", function(a, b) {
    b = b || {}, angular.forEach(b, function(b, c) {
        angular.isString(b) && (b = {
            replace: !0,
            template: b
        }), a.directive(c, function() {
            return b
        })
    })
}]), angular.module("ui.event", []).directive("uiEvent", ["$parse", function(a) {
    return function(b, c, d) {
        var e = b.$eval(d.uiEvent);
        angular.forEach(e, function(d, e) {
            var f = a(d);
            c.bind(e, function(a) {
                var c = Array.prototype.slice.call(arguments);
                c = c.splice(1), f(b, {
                    $event: a,
                    $params: c
                }), b.$$phase || b.$apply()
            })
        })
    }
}]), angular.module("ui.format", []).filter("format", function() {
    return function(a, b) {
        var c = a;
        if (angular.isString(c) && void 0 !== b)
            if (angular.isArray(b) || angular.isObject(b) || (b = [b]), angular.isArray(b)) {
                var d = b.length,
                    e = function(a, c) {
                        return c = parseInt(c, 10), c >= 0 && d > c ? b[c] : a
                    };
                c = c.replace(/\$([0-9]+)/g, e)
            } else angular.forEach(b, function(a, b) {
                c = c.split(":" + b).join(a)
            });
        return c
    }
}), angular.module("ui.highlight", []).filter("highlight", function() {
    return function(a, b, c) {
        return b || angular.isNumber(b) ? (a = a.toString(), b = b.toString(), c ? a.split(b).join('<span class="ui-match">' + b + "</span>") : a.replace(new RegExp(b, "gi"), '<span class="ui-match">$&</span>')) : a
    }
}), angular.module("ui.include", []).directive("uiInclude", ["$http", "$templateCache", "$anchorScroll", "$compile", function(a, b, c, d) {
    return {
        restrict: "ECA",
        terminal: !0,
        compile: function(e, f) {
            var g = f.uiInclude || f.src,
                h = f.fragment || "",
                i = f.onload || "",
                j = f.autoscroll;
            return function(e, f) {
                function k() {
                    var k = ++m,
                        o = e.$eval(g),
                        p = e.$eval(h);
                    o ? a.get(o, {
                        cache: b
                    }).success(function(a) {
                        if (k === m) {
                            l && l.$destroy(), l = e.$new();
                            var b;
                            b = p ? angular.element("<div/>").html(a).find(p) : angular.element("<div/>").html(a).contents(), f.html(b), d(b)(l), !angular.isDefined(j) || j && !e.$eval(j) || c(), l.$emit("$includeContentLoaded"), e.$eval(i)
                        }
                    }).error(function() {
                        k === m && n()
                    }) : n()
                }
                var l, m = 0,
                    n = function() {
                        l && (l.$destroy(), l = null), f.html("")
                    };
                e.$watch(h, k), e.$watch(g, k)
            }
        }
    }
}]), angular.module("ui.indeterminate", []).directive("uiIndeterminate", [function() {
    return {
        compile: function(a, b) {
            return b.type && "checkbox" === b.type.toLowerCase() ? function(a, b, c) {
                a.$watch(c.uiIndeterminate, function(a) {
                    b[0].indeterminate = !!a
                })
            } : angular.noop
        }
    }
}]), angular.module("ui.inflector", []).filter("inflector", function() {
    function a(a) {
        return a.replace(/^([a-z])|\s+([a-z])/g, function(a) {
            return a.toUpperCase()
        })
    }

    function b(a, b) {
        return a.replace(/[A-Z]/g, function(a) {
            return b + a
        })
    }
    var c = {
        humanize: function(c) {
            return a(b(c, " ").split("_").join(" "))
        },
        underscore: function(a) {
            return a.substr(0, 1).toLowerCase() + b(a.substr(1), "_").toLowerCase().split(" ").join("_")
        },
        variable: function(b) {
            return b = b.substr(0, 1).toLowerCase() + a(b.split("_").join(" ")).substr(1).split(" ").join("")
        }
    };
    return function(a, b) {
        return b !== !1 && angular.isString(a) ? (b = b || "humanize", c[b](a)) : a
    }
}), angular.module("ui.jq", []).value("uiJqConfig", {}).directive("uiJq", ["uiJqConfig", "$timeout", function(a, b) {
    return {
        restrict: "A",
        compile: function(c, d) {
            if (!angular.isFunction(c[d.uiJq])) throw new Error('ui-jq: The "' + d.uiJq + '" function does not exist');
            var e = a && a[d.uiJq];
            return function(a, c, d) {
                function f() {
                    b(function() {
                        c[d.uiJq].apply(c, g)
                    }, 0, !1)
                }
                var g = [];
                d.uiOptions ? (g = a.$eval("[" + d.uiOptions + "]"), angular.isObject(e) && angular.isObject(g[0]) && (g[0] = angular.extend({}, e, g[0]))) : e && (g = [e]), d.ngModel && c.is("select,input,textarea") && c.bind("change", function() {
                    c.trigger("input")
                }), d.uiRefresh && a.$watch(d.uiRefresh, function() {
                    f()
                }), f()
            }
        }
    }
}]), angular.module("ui.keypress", []).factory("keypressHelper", ["$parse", function(a) {
    var b = {
            8: "backspace",
            9: "tab",
            13: "enter",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "delete"
        },
        c = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        };
    return function(d, e, f, g) {
        var h, i = [];
        h = e.$eval(g["ui" + c(d)]), angular.forEach(h, function(b, c) {
            var d, e;
            e = a(b), angular.forEach(c.split(" "), function(a) {
                d = {
                    expression: e,
                    keys: {}
                }, angular.forEach(a.split("-"), function(a) {
                    d.keys[a] = !0
                }), i.push(d)
            })
        }), f.bind(d, function(a) {
            var c = !(!a.metaKey || a.ctrlKey),
                f = !!a.altKey,
                g = !!a.ctrlKey,
                h = !!a.shiftKey,
                j = a.keyCode;
            "keypress" === d && !h && j >= 97 && 122 >= j && (j -= 32), angular.forEach(i, function(d) {
                var i = d.keys[b[j]] || d.keys[j.toString()],
                    k = !!d.keys.meta,
                    l = !!d.keys.alt,
                    m = !!d.keys.ctrl,
                    n = !!d.keys.shift;
                i && k === c && l === f && m === g && n === h && e.$apply(function() {
                    d.expression(e, {
                        $event: a
                    })
                })
            })
        })
    }
}]), angular.module("ui.keypress").directive("uiKeydown", ["keypressHelper", function(a) {
    return {
        link: function(b, c, d) {
            a("keydown", b, c, d)
        }
    }
}]), angular.module("ui.keypress").directive("uiKeypress", ["keypressHelper", function(a) {
    return {
        link: function(b, c, d) {
            a("keypress", b, c, d)
        }
    }
}]), angular.module("ui.keypress").directive("uiKeyup", ["keypressHelper", function(a) {
    return {
        link: function(b, c, d) {
            a("keyup", b, c, d)
        }
    }
}]), angular.module("ui.mask", []).value("uiMaskConfig", {
    maskDefinitions: {
        9: /\d/,
        A: /[a-zA-Z]/,
        "*": /[a-zA-Z0-9]/
    }
}).directive("uiMask", ["uiMaskConfig", function(a) {
    return {
        priority: 100,
        require: "ngModel",
        restrict: "A",
        compile: function() {
            var b = a;
            return function(a, c, d, e) {
                function f(a) {
                    return angular.isDefined(a) ? (s(a), N ? (k(), l(), !0) : j()) : j()
                }

                function g(a) {
                    angular.isDefined(a) && (D = a, N && w())
                }

                function h(a) {
                    return N ? (G = o(a || ""), I = n(G), e.$setValidity("mask", I), I && G.length ? p(G) : void 0) : a
                }

                function i(a) {
                    return N ? (G = o(a || ""), I = n(G), e.$viewValue = G.length ? p(G) : "", e.$setValidity("mask", I), "" === G && void 0 !== e.$error.required && e.$setValidity("required", !1), I ? G : void 0) : a
                }

                function j() {
                    return N = !1, m(), angular.isDefined(P) ? c.attr("placeholder", P) : c.removeAttr("placeholder"), angular.isDefined(Q) ? c.attr("maxlength", Q) : c.removeAttr("maxlength"), c.val(e.$modelValue), e.$viewValue = e.$modelValue, !1
                }

                function k() {
                    G = K = o(e.$modelValue || ""), H = J = p(G), I = n(G);
                    var a = I && G.length ? H : "";
                    d.maxlength && c.attr("maxlength", 2 * B[B.length - 1]), c.attr("placeholder", D), c.val(a), e.$viewValue = a
                }

                function l() {
                    O || (c.bind("blur", t), c.bind("mousedown mouseup", u), c.bind("input keyup click focus", w), O = !0)
                }

                function m() {
                    O && (c.unbind("blur", t), c.unbind("mousedown", u), c.unbind("mouseup", u), c.unbind("input", w), c.unbind("keyup", w), c.unbind("click", w), c.unbind("focus", w), O = !1)
                }

                function n(a) {
                    return a.length ? a.length >= F : !0
                }

                function o(a) {
                    var b = "",
                        c = C.slice();
                    return a = a.toString(), angular.forEach(E, function(b) {
                        a = a.replace(b, "")
                    }), angular.forEach(a.split(""), function(a) {
                        c.length && c[0].test(a) && (b += a, c.shift())
                    }), b
                }

                function p(a) {
                    var b = "",
                        c = B.slice();
                    return angular.forEach(D.split(""), function(d, e) {
                        a.length && e === c[0] ? (b += a.charAt(0) || "_", a = a.substr(1), c.shift()) : b += d
                    }), b
                }

                function q(a) {
                    var b = d.placeholder;
                    return "undefined" != typeof b && b[a] ? b[a] : "_"
                }

                function r() {
                    return D.replace(/[_]+/g, "_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g, "$1$2_$3").split("_")
                }

                function s(a) {
                    var b = 0;
                    if (B = [], C = [], D = "", "string" == typeof a) {
                        F = 0;
                        var c = !1,
                            d = a.split("");
                        angular.forEach(d, function(a, d) {
                            R.maskDefinitions[a] ? (B.push(b), D += q(d), C.push(R.maskDefinitions[a]), b++, c || F++) : "?" === a ? c = !0 : (D += a, b++)
                        })
                    }
                    B.push(B.slice().pop() + 1), E = r(), N = B.length > 1 ? !0 : !1
                }

                function t() {
                    L = 0, M = 0, I && 0 !== G.length || (H = "", c.val(""), a.$apply(function() {
                        e.$setViewValue("")
                    }))
                }

                function u(a) {
                    "mousedown" === a.type ? c.bind("mouseout", v) : c.unbind("mouseout", v)
                }

                function v() {
                    M = A(this), c.unbind("mouseout", v)
                }

                function w(b) {
                    b = b || {};
                    var d = b.which,
                        f = b.type;
                    if (16 !== d && 91 !== d) {
                        var g, h = c.val(),
                            i = J,
                            j = o(h),
                            k = K,
                            l = !1,
                            m = y(this) || 0,
                            n = L || 0,
                            q = m - n,
                            r = B[0],
                            s = B[j.length] || B.slice().shift(),
                            t = M || 0,
                            u = A(this) > 0,
                            v = t > 0,
                            w = h.length > i.length || t && h.length > i.length - t,
                            C = h.length < i.length || t && h.length === i.length - t,
                            D = d >= 37 && 40 >= d && b.shiftKey,
                            E = 37 === d,
                            F = 8 === d || "keyup" !== f && C && -1 === q,
                            G = 46 === d || "keyup" !== f && C && 0 === q && !v,
                            H = (E || F || "click" === f) && m > r;
                        if (M = A(this), !D && (!u || "click" !== f && "keyup" !== f)) {
                            if ("input" === f && C && !v && j === k) {
                                for (; F && m > r && !x(m);) m--;
                                for (; G && s > m && -1 === B.indexOf(m);) m++;
                                var I = B.indexOf(m);
                                j = j.substring(0, I) + j.substring(I + 1), l = !0
                            }
                            for (g = p(j), J = g, K = j, c.val(g), l && a.$apply(function() {
                                    e.$setViewValue(j)
                                }), w && r >= m && (m = r + 1), H && m--, m = m > s ? s : r > m ? r : m; !x(m) && m > r && s > m;) m += H ? -1 : 1;
                            (H && s > m || w && !x(n)) && m++, L = m, z(this, m)
                        }
                    }
                }

                function x(a) {
                    return B.indexOf(a) > -1
                }

                function y(a) {
                    if (!a) return 0;
                    if (void 0 !== a.selectionStart) return a.selectionStart;
                    if (document.selection) {
                        a.focus();
                        var b = document.selection.createRange();
                        return b.moveStart("character", -a.value.length), b.text.length
                    }
                    return 0
                }

                function z(a, b) {
                    if (!a) return 0;
                    if (0 !== a.offsetWidth && 0 !== a.offsetHeight)
                        if (a.setSelectionRange) a.focus(), a.setSelectionRange(b, b);
                        else if (a.createTextRange) {
                        var c = a.createTextRange();
                        c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", b), c.select()
                    }
                }

                function A(a) {
                    return a ? void 0 !== a.selectionStart ? a.selectionEnd - a.selectionStart : document.selection ? document.selection.createRange().text.length : 0 : 0
                }
                var B, C, D, E, F, G, H, I, J, K, L, M, N = !1,
                    O = !1,
                    P = d.placeholder,
                    Q = d.maxlength,
                    R = {};
                d.uiOptions ? (R = a.$eval("[" + d.uiOptions + "]"), angular.isObject(R[0]) && (R = function(a, b) {
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] ? angular.extend(b[c], a[c]) : b[c] = angular.copy(a[c]));
                    return b
                }(b, R[0]))) : R = b, d.$observe("uiMask", f), d.$observe("placeholder", g), e.$formatters.push(h), e.$parsers.push(i), c.bind("mousedown mouseup", u), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
                    if (null === this) throw new TypeError;
                    var b = Object(this),
                        c = b.length >>> 0;
                    if (0 === c) return -1;
                    var d = 0;
                    if (arguments.length > 1 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && 1 / 0 !== d && d !== -1 / 0 && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
                    for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
                        if (e in b && b[e] === a) return e;
                    return -1
                })
            }
        }
    }
}]), angular.module("ui.reset", []).value("uiResetConfig", null).directive("uiReset", ["uiResetConfig", function(a) {
    var b = null;
    return void 0 !== a && (b = a), {
        require: "ngModel",
        link: function(a, c, d, e) {
            var f;
            f = angular.element('<a class="ui-reset" />'), c.wrap('<span class="ui-resetwrap" />').after(f), f.bind("click", function(c) {
                c.preventDefault(), a.$apply(function() {
                    e.$setViewValue(d.uiReset ? a.$eval(d.uiReset) : b), e.$render()
                })
            })
        }
    }
}]), angular.module("ui.route", []).directive("uiRoute", ["$location", "$parse", function(a, b) {
    return {
        restrict: "AC",
        scope: !0,
        compile: function(c, d) {
            var e;
            if (d.uiRoute) e = "uiRoute";
            else if (d.ngHref) e = "ngHref";
            else {
                if (!d.href) throw new Error("uiRoute missing a route or href property on " + c[0]);
                e = "href"
            }
            return function(c, d, f) {
                function g(b) {
                    var d = b.indexOf("#");
                    d > -1 && (b = b.substr(d + 1)), (j = function() {
                        i(c, a.path().indexOf(b) > -1)
                    })()
                }

                function h(b) {
                    var d = b.indexOf("#");
                    d > -1 && (b = b.substr(d + 1)), (j = function() {
                        var d = new RegExp("^" + b + "$", ["i"]);
                        i(c, d.test(a.path()))
                    })()
                }
                var i = b(f.ngModel || f.routeModel || "$uiRoute").assign,
                    j = angular.noop;
                switch (e) {
                    case "uiRoute":
                        f.uiRoute ? h(f.uiRoute) : f.$observe("uiRoute", h);
                        break;
                    case "ngHref":
                        f.ngHref ? g(f.ngHref) : f.$observe("ngHref", g);
                        break;
                    case "href":
                        g(f.href)
                }
                c.$on("$routeChangeSuccess", function() {
                    j()
                }), c.$on("$stateChangeSuccess", function() {
                    j()
                })
            }
        }
    }
}]), angular.module("ui.scroll.jqlite", ["ui.scroll"]).service("jqLiteExtras", ["$log", "$window", function(a, b) {
    return {
        registerFor: function(a) {
            var c, d, e, f, g, h, i;
            return d = angular.element.prototype.css, a.prototype.css = function(a, b) {
                var c, e;
                return e = this, c = e[0], c && 3 !== c.nodeType && 8 !== c.nodeType && c.style ? d.call(e, a, b) : void 0
            }, h = function(a) {
                return a && a.document && a.location && a.alert && a.setInterval
            }, i = function(a, b, c) {
                var d, e, f, g, i;
                return d = a[0], i = {
                    top: ["scrollTop", "pageYOffset", "scrollLeft"],
                    left: ["scrollLeft", "pageXOffset", "scrollTop"]
                }[b], e = i[0], g = i[1], f = i[2], h(d) ? angular.isDefined(c) ? d.scrollTo(a[f].call(a), c) : g in d ? d[g] : d.document.documentElement[e] : angular.isDefined(c) ? d[e] = c : d[e]
            }, b.getComputedStyle ? (f = function(a) {
                return b.getComputedStyle(a, null)
            }, c = function(a, b) {
                return parseFloat(b)
            }) : (f = function(a) {
                return a.currentStyle
            }, c = function(a, b) {
                var c, d, e, f, g, h, i;
                return c = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, f = new RegExp("^(" + c + ")(?!px)[a-z%]+$", "i"), f.test(b) ? (i = a.style, d = i.left, g = a.runtimeStyle, h = g && g.left, g && (g.left = i.left), i.left = b, e = i.pixelLeft, i.left = d, h && (g.left = h), e) : parseFloat(b)
            }), e = function(a, b) {
                var d, e, g, i, j, k, l, m, n, o, p, q, r;
                return h(a) ? (d = document.documentElement[{
                    height: "clientHeight",
                    width: "clientWidth"
                }[b]], {
                    base: d,
                    padding: 0,
                    border: 0,
                    margin: 0
                }) : (r = {
                    width: [a.offsetWidth, "Left", "Right"],
                    height: [a.offsetHeight, "Top", "Bottom"]
                }[b], d = r[0], l = r[1], m = r[2], k = f(a), p = c(a, k["padding" + l]) || 0, q = c(a, k["padding" + m]) || 0, e = c(a, k["border" + l + "Width"]) || 0, g = c(a, k["border" + m + "Width"]) || 0, i = k["margin" + l], j = k["margin" + m], n = c(a, i) || 0, o = c(a, j) || 0, {
                    base: d,
                    padding: p + q,
                    border: e + g,
                    margin: n + o
                })
            }, g = function(a, b, c) {
                var d, g, h;
                return g = e(a, b), g.base > 0 ? {
                    base: g.base - g.padding - g.border,
                    outer: g.base,
                    outerfull: g.base + g.margin
                }[c] : (d = f(a), h = d[b], (0 > h || null === h) && (h = a.style[b] || 0), h = parseFloat(h) || 0, {
                    base: h - g.padding - g.border,
                    outer: h,
                    outerfull: h + g.padding + g.border + g.margin
                }[c])
            }, angular.forEach({
                before: function(a) {
                    var b, c, d, e, f, g, h;
                    if (f = this, c = f[0], e = f.parent(), b = e.contents(), b[0] === c) return e.prepend(a);
                    for (d = g = 1, h = b.length - 1; h >= 1 ? h >= g : g >= h; d = h >= 1 ? ++g : --g)
                        if (b[d] === c) return void angular.element(b[d - 1]).after(a);
                    throw new Error("invalid DOM structure " + c.outerHTML)
                },
                height: function(a) {
                    var b;
                    return b = this, angular.isDefined(a) ? (angular.isNumber(a) && (a += "px"), d.call(b, "height", a)) : g(this[0], "height", "base")
                },
                outerHeight: function(a) {
                    return g(this[0], "height", a ? "outerfull" : "outer")
                },
                offset: function(a) {
                    var b, c, d, e, f, g;
                    return f = this, arguments.length ? void 0 === a ? f : a : (b = {
                        top: 0,
                        left: 0
                    }, e = f[0], (c = e && e.ownerDocument) ? (d = c.documentElement, e.getBoundingClientRect && (b = e.getBoundingClientRect()), g = c.defaultView || c.parentWindow, {
                        top: b.top + (g.pageYOffset || d.scrollTop) - (d.clientTop || 0),
                        left: b.left + (g.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
                    }) : void 0)
                },
                scrollTop: function(a) {
                    return i(this, "top", a)
                },
                scrollLeft: function(a) {
                    return i(this, "left", a)
                }
            }, function(b, c) {
                return a.prototype[c] ? void 0 : a.prototype[c] = b
            })
        }
    }
}]).run(["$log", "$window", "jqLiteExtras", function(a, b, c) {
    return b.jQuery ? void 0 : c.registerFor(angular.element)
}]), angular.module("ui.scroll", []).directive("ngScrollViewport", ["$log", function() {
    return {
        controller: ["$scope", "$element", function(a, b) {
            return b
        }]
    }
}]).directive("ngScroll", ["$log", "$injector", "$rootScope", "$timeout", function(a, b, c, d) {
    return {
        require: ["?^ngScrollViewport"],
        transclude: "element",
        priority: 1e3,
        terminal: !0,
        compile: function(e, f, g) {
            return function(f, h, i, j) {
                var k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T;
                if (H = i.ngScroll.match(/^\s*(\w+)\s+in\s+(\w+)\s*$/), !H) throw new Error('Expected ngScroll in form of "item_ in _datasource_" but got "' + i.ngScroll + '"');
                if (F = H[1], v = H[2], D = function(a) {
                        return angular.isObject(a) && a.get && angular.isFunction(a.get)
                    }, u = f[v], !D(u) && (u = b.get(v), !D(u))) throw new Error(v + " is not a valid datasource");
                return r = Math.max(3, +i.bufferSize || 10), q = function() {
                    return T.height() * Math.max(.1, +i.padding || .1)
                }, O = function(a) {
                    return a[0].scrollHeight || a[0].document.documentElement.scrollHeight
                }, k = null, g(R = f.$new(), function(a) {
                    var b, c, d, f, g, h;
                    if (f = a[0].localName, "dl" === f) throw new Error("ng-scroll directive does not support <" + a[0].localName + "> as a repeating tag: " + a[0].outerHTML);
                    return "li" !== f && "tr" !== f && (f = "div"), h = j[0] || angular.element(window), h.css({
                        "overflow-y": "auto",
                        display: "block"
                    }), d = function(a) {
                        var b, c, d;
                        switch (a) {
                            case "tr":
                                return d = angular.element("<table><tr><td><div></div></td></tr></table>"), b = d.find("div"), c = d.find("tr"), c.paddingHeight = function() {
                                    return b.height.apply(b, arguments)
                                }, c;
                            default:
                                return c = angular.element("<" + a + "></" + a + ">"), c.paddingHeight = c.height, c
                        }
                    }, c = function(a, b, c) {
                        return b[{
                            top: "before",
                            bottom: "after"
                        }[c]](a), {
                            paddingHeight: function() {
                                return a.paddingHeight.apply(a, arguments)
                            },
                            insert: function(b) {
                                return a[{
                                    top: "after",
                                    bottom: "before"
                                }[c]](b)
                            }
                        }
                    }, g = c(d(f), e, "top"), b = c(d(f), e, "bottom"), R.$destroy(), k = {
                        viewport: h,
                        topPadding: g.paddingHeight,
                        bottomPadding: b.paddingHeight,
                        append: b.insert,
                        prepend: g.insert,
                        bottomDataPos: function() {
                            return O(h) - b.paddingHeight()
                        },
                        topDataPos: function() {
                            return g.paddingHeight()
                        }
                    }
                }), T = k.viewport, B = 1, I = 1, p = [], J = [], x = !1, n = !1, G = u.loading || function() {}, E = !1, L = function(a, b) {
                    var c, d;
                    for (c = d = a; b >= a ? b > d : d > b; c = b >= a ? ++d : --d) p[c].scope.$destroy(), p[c].element.remove();
                    return p.splice(a, b - a)
                }, K = function() {
                    return B = 1, I = 1, L(0, p.length), k.topPadding(0), k.bottomPadding(0), J = [], x = !1, n = !1, l(!1)
                }, o = function() {
                    return T.scrollTop() + T.height()
                }, S = function() {
                    return T.scrollTop()
                }, P = function() {
                    return !x && k.bottomDataPos() < o() + q()
                }, s = function() {
                    var b, c, d, e, f, g;
                    for (b = 0, e = 0, c = f = g = p.length - 1;
                        (0 >= g ? 0 >= f : f >= 0) && (d = p[c].element.outerHeight(!0), k.bottomDataPos() - b - d > o() + q()); c = 0 >= g ? ++f : --f) b += d, e++, x = !1;
                    return e > 0 ? (k.bottomPadding(k.bottomPadding() + b), L(p.length - e, p.length), I -= e, a.log("clipped off bottom " + e + " bottom padding " + k.bottomPadding())) : void 0
                }, Q = function() {
                    return !n && k.topDataPos() > S() - q()
                }, t = function() {
                    var b, c, d, e, f, g;
                    for (e = 0, d = 0, f = 0, g = p.length; g > f && (b = p[f], c = b.element.outerHeight(!0), k.topDataPos() + e + c < S() - q()); f++) e += c, d++, n = !1;
                    return d > 0 ? (k.topPadding(k.topPadding() + e), L(0, d), B += d, a.log("clipped off top " + d + " top padding " + k.topPadding())) : void 0
                }, w = function(a, b) {
                    return E || (E = !0, G(!0)), 1 === J.push(a) ? z(b) : void 0
                }, C = function(a, b) {
                    var c, d, e;
                    return c = f.$new(), c[F] = b, d = a > B, c.$index = a, d && c.$index--, e = {
                        scope: c
                    }, g(c, function(b) {
                        return e.element = b, d ? a === I ? (k.append(b), p.push(e)) : (p[a - B].element.after(b), p.splice(a - B + 1, 0, e)) : (k.prepend(b), p.unshift(e))
                    }), {
                        appended: d,
                        wrapper: e
                    }
                }, m = function(a, b) {
                    var c;
                    return a ? k.bottomPadding(Math.max(0, k.bottomPadding() - b.element.outerHeight(!0))) : (c = k.topPadding() - b.element.outerHeight(!0), c >= 0 ? k.topPadding(c) : T.scrollTop(T.scrollTop() + b.element.outerHeight(!0)))
                }, l = function(b, c, e) {
                    var f;
                    return f = function() {
                        return a.log("top {actual=" + k.topDataPos() + " visible from=" + S() + " bottom {visible through=" + o() + " actual=" + k.bottomDataPos() + "}"), P() ? w(!0, b) : Q() && w(!1, b), e ? e() : void 0
                    }, c ? d(function() {
                        var a, b, d;
                        for (b = 0, d = c.length; d > b; b++) a = c[b], m(a.appended, a.wrapper);
                        return f()
                    }) : f()
                }, A = function(a, b) {
                    return l(a, b, function() {
                        return J.shift(), 0 === J.length ? (E = !1, G(!1)) : z(a)
                    })
                }, z = function(b) {
                    var c;
                    return c = J[0], c ? p.length && !P() ? A(b) : u.get(I, r, function(c) {
                        var d, e, f, g;
                        if (e = [], 0 === c.length) x = !0, k.bottomPadding(0), a.log("appended: requested " + r + " records starting from " + I + " recieved: eof");
                        else {
                            for (t(), f = 0, g = c.length; g > f; f++) d = c[f], e.push(C(++I, d));
                            a.log("appended: requested " + r + " received " + c.length + " buffer size " + p.length + " first " + B + " next " + I)
                        }
                        return A(b, e)
                    }) : p.length && !Q() ? A(b) : u.get(B - r, r, function(c) {
                        var d, e, f, g;
                        if (e = [], 0 === c.length) n = !0, k.topPadding(0), a.log("prepended: requested " + r + " records starting from " + (B - r) + " recieved: bof");
                        else {
                            for (s(), d = f = g = c.length - 1; 0 >= g ? 0 >= f : f >= 0; d = 0 >= g ? ++f : --f) e.unshift(C(--B, c[d]));
                            a.log("prepended: requested " + r + " received " + c.length + " buffer size " + p.length + " first " + B + " next " + I)
                        }
                        return A(b, e)
                    })
                }, M = function() {
                    return c.$$phase || E ? void 0 : (l(!1), f.$apply())
                }, T.bind("resize", M), N = function() {
                    return c.$$phase || E ? void 0 : (l(!0), f.$apply())
                }, T.bind("scroll", N), f.$watch(u.revision, function() {
                    return K()
                }), y = u.scope ? u.scope.$new() : f.$new(), f.$on("$destroy", function() {
                    return y.$destroy(), T.unbind("resize", M), T.unbind("scroll", N)
                }), y.$on("update.items", function(a, b, c) {
                    var d, e, f, g, h;
                    if (angular.isFunction(b))
                        for (e = function(a) {
                                return b(a.scope)
                            }, f = 0, g = p.length; g > f; f++) d = p[f], e(d);
                    else 0 <= (h = b - B - 1) && h < p.length && (p[b - B - 1].scope[F] = c);
                    return null
                }), y.$on("delete.items", function(a, b) {
                    var c, d, e, f, g, h, i, j, k, m, n, o;
                    if (angular.isFunction(b)) {
                        for (e = [], h = 0, k = p.length; k > h; h++) d = p[h], e.unshift(d);
                        for (g = function(a) {
                                return b(a.scope) ? (L(e.length - 1 - c, e.length - c), I--) : void 0
                            }, c = i = 0, m = e.length; m > i; c = ++i) f = e[c], g(f)
                    } else 0 <= (o = b - B - 1) && o < p.length && (L(b - B - 1, b - B), I--);
                    for (c = j = 0, n = p.length; n > j; c = ++j) d = p[c], d.scope.$index = B + c;
                    return l(!1)
                }), y.$on("insert.item", function(a, b, c) {
                    var d, e, f, g, h, i, j, k, m, n, o, q;
                    if (e = [], angular.isFunction(b)) {
                        for (f = [], i = 0, m = p.length; m > i; i++) c = p[i], f.unshift(c);
                        for (h = function(a) {
                                var f, g, h, i, j;
                                if (g = b(a.scope)) {
                                    if (C = function(a, b) {
                                            return C(a, b), I++
                                        }, angular.isArray(g)) {
                                        for (j = [], f = h = 0, i = g.length; i > h; f = ++h) c = g[f], j.push(e.push(C(d + f, c)));
                                        return j
                                    }
                                    return e.push(C(d, g))
                                }
                            }, d = j = 0, n = f.length; n > j; d = ++j) g = f[d], h(g)
                    } else 0 <= (q = b - B - 1) && q < p.length && (e.push(C(b, c)), I++);
                    for (d = k = 0, o = p.length; o > k; d = ++k) c = p[d], c.scope.$index = B + d;
                    return l(!1, e)
                })
            }
        }
    }
}]), angular.module("ui.scrollfix", []).directive("uiScrollfix", ["$window", function(a) {
    return {
        require: "^?uiScrollfixTarget",
        link: function(b, c, d, e) {
            function f() {
                var b;
                if (angular.isDefined(a.pageYOffset)) b = a.pageYOffset;
                else {
                    var e = document.compatMode && "BackCompat" !== document.compatMode ? document.documentElement : document.body;
                    b = e.scrollTop
                }!c.hasClass("ui-scrollfix") && b > d.uiScrollfix ? c.addClass("ui-scrollfix") : c.hasClass("ui-scrollfix") && b < d.uiScrollfix && c.removeClass("ui-scrollfix")
            }
            var g = c[0].offsetTop,
                h = e && e.$element || angular.element(a);
            d.uiScrollfix ? "string" == typeof d.uiScrollfix && ("-" === d.uiScrollfix.charAt(0) ? d.uiScrollfix = g - parseFloat(d.uiScrollfix.substr(1)) : "+" === d.uiScrollfix.charAt(0) && (d.uiScrollfix = g + parseFloat(d.uiScrollfix.substr(1)))) : d.uiScrollfix = g, h.on("scroll", f), b.$on("$destroy", function() {
                h.off("scroll", f)
            })
        }
    }
}]).directive("uiScrollfixTarget", [function() {
    return {
        controller: ["$element", function(a) {
            this.$element = a
        }]
    }
}]), angular.module("ui.showhide", []).directive("uiShow", [function() {
    return function(a, b, c) {
        a.$watch(c.uiShow, function(a) {
            a ? b.addClass("ui-show") : b.removeClass("ui-show")
        })
    }
}]).directive("uiHide", [function() {
    return function(a, b, c) {
        a.$watch(c.uiHide, function(a) {
            a ? b.addClass("ui-hide") : b.removeClass("ui-hide")
        })
    }
}]).directive("uiToggle", [function() {
    return function(a, b, c) {
        a.$watch(c.uiToggle, function(a) {
            a ? b.removeClass("ui-hide").addClass("ui-show") : b.removeClass("ui-show").addClass("ui-hide")
        })
    }
}]), angular.module("ui.unique", []).filter("unique", ["$parse", function(a) {
    return function(b, c) {
        if (c === !1) return b;
        if ((c || angular.isUndefined(c)) && angular.isArray(b)) {
            var d = [],
                e = angular.isString(c) ? a(c) : function(a) {
                    return a
                },
                f = function(a) {
                    return angular.isObject(a) ? e(a) : a
                };
            angular.forEach(b, function(a) {
                for (var b = !1, c = 0; c < d.length; c++)
                    if (angular.equals(f(d[c]), f(a))) {
                        b = !0;
                        break
                    }
                b || d.push(a)
            }), b = d
        }
        return b
    }
}]), angular.module("ui.validate", []).directive("uiValidate", function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
            function e(b) {
                return angular.isString(b) ? void a.$watch(b, function() {
                    angular.forEach(g, function(a) {
                        a(d.$modelValue)
                    })
                }) : angular.isArray(b) ? void angular.forEach(b, function(b) {
                    a.$watch(b, function() {
                        angular.forEach(g, function(a) {
                            a(d.$modelValue)
                        })
                    })
                }) : void(angular.isObject(b) && angular.forEach(b, function(b, c) {
                    angular.isString(b) && a.$watch(b, function() {
                        g[c](d.$modelValue)
                    }), angular.isArray(b) && angular.forEach(b, function(b) {
                        a.$watch(b, function() {
                            g[c](d.$modelValue)
                        })
                    })
                }))
            }
            var f, g = {},
                h = a.$eval(c.uiValidate);
            h && (angular.isString(h) && (h = {
                validator: h
            }), angular.forEach(h, function(b, c) {
                f = function(e) {
                    var f = a.$eval(b, {
                        $value: e
                    });
                    return angular.isObject(f) && angular.isFunction(f.then) ? (f.then(function() {
                        d.$setValidity(c, !0)
                    }, function() {
                        d.$setValidity(c, !1)
                    }), e) : f ? (d.$setValidity(c, !0), e) : (d.$setValidity(c, !1), e)
                }, g[c] = f, d.$formatters.push(f), d.$parsers.push(f)
            }), c.uiValidateWatch && e(a.$eval(c.uiValidateWatch)))
        }
    }
}), angular.module("ui.utils", ["ui.event", "ui.format", "ui.highlight", "ui.include", "ui.indeterminate", "ui.inflector", "ui.jq", "ui.keypress", "ui.mask", "ui.reset", "ui.route", "ui.scrollfix", "ui.scroll", "ui.scroll.jqlite", "ui.showhide", "ui.unique", "ui.validate"]);