! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define &&
    define.amd ? define([], t) : "object" == typeof exports ? exports.wangEditor = t() : e.wangEditor = t()
}(window, function () {
    return o = {}, i.m = n = [function (e, t) {
        e.exports = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }, e.exports.default = e.exports, e.exports.__esModule = !0
    }, function (e, t, n) {
        e.exports = n(141)
    }, function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "__extends", function () {
            return i
        }), n.d(t, "__assign", function () {
            return r
        }), n.d(t, "__rest", function () {
            return a
        }), n.d(t, "__decorate", function () {
            return l
        }), n.d(t, "__param", function () {
            return u
        }), n.d(t, "__metadata", function () {
            return s
        }), n.d(t, "__awaiter", function () {
            return c
        }), n.d(t, "__generator", function () {
            return f
        }), n.d(t, "__createBinding", function () {
            return d
        }), n.d(t, "__exportStar", function () {
            return p
        }), n.d(t, "__values", function () {
            return h
        }), n.d(t, "__read", function () {
            return A
        }), n.d(t, "__spread", function () {
            return v
        }), n.d(t, "__spreadArrays", function () {
            return m
        }), n.d(t, "__spreadArray", function () {
            return g
        }), n.d(t, "__await", function () {
            return y
        }), n.d(t, "__asyncGenerator", function () {
            return w
        }), n.d(t, "__asyncDelegator", function () {
            return x
        }), n.d(t, "__asyncValues", function () {
            return _
        }), n.d(t, "__makeTemplateObject", function () {
            return E
        }), n.d(t, "__importStar", function () {
            return C
        }), n.d(t, "__importDefault", function () {
            return S
        }), n.d(t, "__classPrivateFieldGet", function () {
            return D
        }), n.d(t, "__classPrivateFieldSet", function () {
            return M
        });
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */
        var o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                })(e, t)
        };

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) +
                " is not a constructor or null");

            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var r = function () {
            return (r = Object.assign || function (e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) &&
                    (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };

        function a(e, t) {
            var n = {};
            for (i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++) t.indexOf(i[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
            return n
        }

        function l(e, t, n, o) {
            var i, r = arguments.length,
                a = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e,
                t, n, o);
            else
                for (var l = e.length - 1; 0 <= l; l--)(i = e[l]) && (a = (r < 3 ? i(a) : 3 < r ? i(t, n, a) :
                    i(t, n)) || a);
            return 3 < r && a && Object.defineProperty(t, n, a), a
        }

        function u(n, o) {
            return function (e, t) {
                o(e, t, n)
            }
        }

        function s(e, t) {
            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(
                e, t)
        }

        function c(e, a, l, u) {
            return new(l = l || Promise)(function (n, t) {
                function o(e) {
                    try {
                        r(u.next(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function i(e) {
                    try {
                        r(u.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }

                function r(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value) instanceof l ? t : new l(function (e) {
                        e(t)
                    })).then(o, i)
                }
                r((u = u.apply(e, a || [])).next())
            })
        }

        function f(n, o) {
            var i, r, a, l = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                },
                e = {
                    next: t(0),
                    throw: t(1),
                    return: t(2)
                };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function () {
                return this
            }), e;

            function t(t) {
                return function (e) {
                    return function (t) {
                        if (i) throw new TypeError("Generator is already executing.");
                        for (; l;) try {
                            if (i = 1, r && (a = 2 & t[0] ? r.return : t[0] ? r.throw || ((a =
                                r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, t[1]))
                                .done) return a;
                            switch (r = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return l.label++, {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++, r = t[1], t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(), l.trys.pop();
                                    continue;
                                default:
                                    if (!(a = 0 < (a = l.trys).length && a[a.length - 1]) && (6 ===
                                        t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < a[1]) {
                                        l.label = a[1], a = t;
                                        break
                                    }
                                    if (a && l.label < a[2]) {
                                        l.label = a[2], l.ops.push(t);
                                        break
                                    }
                                    a[2] && l.ops.pop(), l.trys.pop();
                                    continue
                            }
                            t = o.call(n, l)
                        } catch (e) {
                            t = [6, e], r = 0
                        } finally {
                            i = a = 0
                        }
                        if (5 & t[0]) throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
        var d = Object.create ? function (e, t, n, o) {
            void 0 === o && (o = n), Object.defineProperty(e, o, {
                enumerable: !0,
                get: function () {
                    return t[n]
                }
            })
        } : function (e, t, n, o) {
            e[o = void 0 === o ? n : o] = t[n]
        };

        function p(e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || d(t, e, n)
        }

        function h(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                o = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function () {
                    return {
                        value: (e = e && o >= e.length ? void 0 : e) && e[o++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function A(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var o, i, r = n.call(e),
                a = [];
            try {
                for (;
                    (void 0 === t || 0 < t--) && !(o = r.next()).done;) a.push(o.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (n = r.return) && n.call(r)
                } finally {
                    if (i) throw i.error
                }
            }
            return a
        }

        function v() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(A(arguments[t]));
            return e
        }

        function m() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            for (var o = Array(e), i = 0, t = 0; t < n; t++)
                for (var r = arguments[t], a = 0, l = r.length; a < l; a++, i++) o[i] = r[a];
            return o
        }

        function g(e, t) {
            for (var n = 0, o = t.length, i = e.length; n < o; n++, i++) e[i] = t[n];
            return e
        }

        function y(e) {
            return this instanceof y ? (this.v = e, this) : new y(e)
        }

        function w(e, t, n) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var i = n.apply(e, t || []),
                r = [],
                a = {};
            return o("next"), o("throw"), o("return"), a[Symbol.asyncIterator] = function () {
                return this
            }, a;

            function o(o) {
                i[o] && (a[o] = function (n) {
                    return new Promise(function (e, t) {
                        1 < r.push([o, n, e, t]) || l(o, n)
                    })
                })
            }

            function l(e, t) {
                try {
                    (n = i[e](t)).value instanceof y ? Promise.resolve(n.value.v).then(u, s) : c(r[0][2], n)
                } catch (e) {
                    c(r[0][3], e)
                }
                var n
            }

            function u(e) {
                l("next", e)
            }

            function s(e) {
                l("throw", e)
            }

            function c(e, t) {
                e(t), r.shift(), r.length && l(r[0][0], r[0][1])
            }
        }

        function x(o) {
            var i, e = {};
            return t("next"), t("throw", function (e) {
                throw e
            }), t("return"), e[Symbol.iterator] = function () {
                return this
            }, e;

            function t(t, n) {
                e[t] = o[t] ? function (e) {
                    return (i = !i) ? {
                        value: y(o[t](e)),
                        done: "return" === t
                    } : n ? n(e) : e
                } : n
            }
        }

        function _(a) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e, t = a[Symbol.asyncIterator];
            return t ? t.call(a) : (a = h(a), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] =
                function () {
                    return this
                }, e);

            function n(r) {
                e[r] = a[r] && function (i) {
                    return new Promise(function (e, t) {
                        var n, o;
                        i = a[r](i), n = e, e = t, o = i.done, t = i.value, Promise.resolve(t).then(
                            function (e) {
                                n({
                                    value: e,
                                    done: o
                                })
                            }, e)
                    })
                }
            }
        }

        function E(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t, e
        }
        var b = Object.create ? function (e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        } : function (e, t) {
            e.default = t
        };

        function C(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && d(t, e, n);
            return b(t, e), t
        }

        function S(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function D(e, t, n, o) {
            if ("a" === n && !o) throw new TypeError("Private accessor was defined without a getter");
            if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError(
                "Cannot read private member from an object whose class did not declare it");
            return "m" === n ? o : "a" === n ? o.call(e) : o ? o.value : t.get(e)
        }

        function M(e, t, n, o, i) {
            if ("m" === o) throw new TypeError("Private method is not writable");
            if ("a" === o && !i) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError(
                "Cannot write private member to an object whose class did not declare it");
            return "a" === o ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(91)),
            u = o(n(4)),
            a = o(n(25)),
            l = o(n(19)),
            s = o(n(120)),
            c = o(n(26)),
            f = o(n(93)),
            d = o(n(74)),
            p = o(n(55)),
            h = o(n(56));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.DomElement = void 0;
        var A = n(2),
            v = n(6),
            m = [];

        function g(e) {
            var t = [],
                n = [],
                t = (0, r.default)(e) ? e : e.split(";");
            return (0, u.default)(t).call(t, function (e) {
                e = (0, a.default)(e = e.split(":")).call(e, function (e) {
                    return (0, l.default)(e).call(e)
                });
                2 === e.length && n.push(e[0] + ":" + e[1])
            }), n
        }
        var y = ((0, i.default)(w.prototype, "id", {
            get: function () {
                return this.elems[0].id
            },
            enumerable: !1,
            configurable: !0
        }), w.prototype.forEach = function (e) {
            for (var t = 0; t < this.length; t++) {
                var n = this.elems[t];
                if (!1 === e.call(n, n, t)) break
            }
            return this
        }, w.prototype.clone = function (t) {
            var e;
            void 0 === t && (t = !1);
            var n = [];
            return (0, u.default)(e = this.elems).call(e, function (e) {
                n.push(e.cloneNode(!!t))
            }), x(n)
        }, w.prototype.get = function (e) {
            var t = this.length;
            return t <= (e = void 0 === e ? 0 : e) && (e %= t), x(this.elems[e])
        }, w.prototype.first = function () {
            return this.get(0)
        }, w.prototype.last = function () {
            var e = this.length;
            return this.get(e - 1)
        }, w.prototype.on = function (n, o, i) {
            return n ? ("function" == typeof o && (i = o, o = ""), (0, u.default)(this).call(this,
                function (e) {
                    var t;
                    o ? (e.addEventListener(n, t = function (e) {
                        var t = e.target;
                        t.matches(o) && i.call(t, e)
                    }), m.push({
                        elem: e,
                        selector: o,
                        fn: i,
                        agentFn: t
                    })) : e.addEventListener(n, i)
                })) : this
        }, w.prototype.off = function (r, a, l) {
            return r ? ("function" == typeof a && (l = a, a = ""), (0, u.default)(this).call(this,
                function (e) {
                    if (a) {
                        for (var t, n = -1, o = 0; o < m.length; o++) {
                            var i = m[o];
                            if (i.selector === a && i.fn === l && i.elem === e) {
                                n = o;
                                break
                            }
                        } - 1 !== n && (t = (0, f.default)(m).call(m, n, 1)[0].agentFn, e.removeEventListener(
                            r, t))
                    } else e.removeEventListener(r, l)
                })) : this
        }, w.prototype.attr = function (t, n) {
            return null == n ? this.elems[0].getAttribute(t) || "" : (0, u.default)(this).call(this,
                function (e) {
                    e.setAttribute(t, n)
                })
        }, w.prototype.removeAttr = function (t) {
            (0, u.default)(this).call(this, function (e) {
                e.removeAttribute(t)
            })
        }, w.prototype.addClass = function (n) {
            return n ? (0, u.default)(this).call(this, function (e) {
                var t;
                e.className ? (t = e.className.split(/\s/), t = (0, d.default)(t).call(t,
                    function (e) {
                        return !!(0, l.default)(e).call(e)
                    }), (0, c.default)(t).call(t, n) < 0 && t.push(n), e.className =
                    t.join(" ")) : e.className = n
            }) : this
        }, w.prototype.removeClass = function (n) {
            return n ? (0, u.default)(this).call(this, function (e) {
                var t;
                e.className && (t = e.className.split(/\s/), t = (0, d.default)(t).call(t,
                    function (e) {
                        return !(!(e = (0, l.default)(e).call(e)) || e === n)
                    }), e.className = t.join(" "))
            }) : this
        }, w.prototype.hasClass = function (e) {
            if (!e) return !1;
            var t = this.elems[0];
            if (!t.className) return !1;
            t = t.className.split(/\s/);
            return (0, p.default)(t).call(t, e)
        }, w.prototype.css = function (n, e) {
            var o = "" == e ? "" : n + ":" + e + ";";
            return (0, u.default)(this).call(this, function (e) {
                var t = (0, l.default)(t = e.getAttribute("style") || "").call(t);
                t ? (t = g(t), t = (0, a.default)(t).call(t, function (e) {
                    return 0 === (0, c.default)(e).call(e, n) ? o : e
                }), "" != o && (0, c.default)(t).call(t, o) < 0 && t.push(o), "" ==
                o && (t = g(t)), e.setAttribute("style", t.join("; "))) : e.setAttribute(
                    "style", o)
            })
        }, w.prototype.getBoundingClientRect = function () {
            return this.elems[0].getBoundingClientRect()
        }, w.prototype.show = function () {
            return this.css("display", "block")
        }, w.prototype.hide = function () {
            return this.css("display", "none")
        }, w.prototype.children = function () {
            var e = this.elems[0];
            return e ? x(e.children) : null
        }, w.prototype.childNodes = function () {
            var e = this.elems[0];
            return e ? x(e.childNodes) : null
        }, w.prototype.replaceChildAll = function (e) {
            for (var t = this.getNode(), n = this.elems[0]; n.hasChildNodes();) t.firstChild && n.removeChild(
                t.firstChild);
            this.append(e)
        }, w.prototype.append = function (e) {
            return (0, u.default)(this).call(this, function (t) {
                (0, u.default)(e).call(e, function (e) {
                    t.appendChild(e)
                })
            })
        }, w.prototype.remove = function () {
            return (0, u.default)(this).call(this, function (e) {
                var t;
                e.remove ? e.remove() : (t = e.parentElement) && t.removeChild(e)
            })
        }, w.prototype.isContain = function (e) {
            var t = this.elems[0],
                e = e.elems[0];
            return t.contains(e)
        }, w.prototype.getNodeName = function () {
            return this.elems[0].nodeName
        }, w.prototype.getNode = function (e) {
            return this.elems[e = void 0 === e ? 0 : e]
        }, w.prototype.find = function (e) {
            return x(this.elems[0].querySelectorAll(e))
        }, w.prototype.text = function (t) {
            return t ? (0, u.default)(this).call(this, function (e) {
                e.innerHTML = t
            }) : this.elems[0].innerHTML.replace(/<[^>]+>/g, function () {
                return ""
            })
        }, w.prototype.html = function (e) {
            var t = this.elems[0];
            return e ? (t.innerHTML = e, this) : t.innerHTML
        }, w.prototype.val = function () {
            var e = this.elems[0];
            return (0, l.default)(e = e.value).call(e)
        }, w.prototype.focus = function () {
            return (0, u.default)(this).call(this, function (e) {
                e.focus()
            })
        }, w.prototype.prev = function () {
            return x(this.elems[0].previousElementSibling)
        }, w.prototype.next = function () {
            return x(this.elems[0].nextElementSibling)
        }, w.prototype.getNextSibling = function () {
            return x(this.elems[0].nextSibling)
        }, w.prototype.parent = function () {
            return x(this.elems[0].parentElement)
        }, w.prototype.parentUntil = function (e, t) {
            t = t || this.elems[0];
            if ("BODY" === t.nodeName) return null;
            t = t.parentElement;
            return null === t ? null : t.matches(e) ? x(t) : this.parentUntil(e, t)
        }, w.prototype.parentUntilEditor = function (e, t, n) {
            n = n || this.elems[0];
            if (x(n).equal(t.$textContainerElem) || x(n).equal(t.$toolbarElem)) return null;
            n = n.parentElement;
            return null === n ? null : n.matches(e) ? x(n) : this.parentUntilEditor(e, t, n)
        }, w.prototype.equal = function (e) {
            return e instanceof w ? this.elems[0] === e.elems[0] : e instanceof HTMLElement && this
                .elems[0] === e
        }, w.prototype.insertBefore = function (e) {
            var t = x(e).elems[0];
            return t ? (0, u.default)(this).call(this, function (e) {
                t.parentNode.insertBefore(e, t)
            }) : this
        }, w.prototype.insertAfter = function (e) {
            var n = x(e).elems[0],
                o = n && n.nextSibling;
            return n ? (0, u.default)(this).call(this, function (e) {
                var t = n.parentNode;
                o ? t.insertBefore(e, o) : t.appendChild(e)
            }) : this
        }, w.prototype.data = function (e, t) {
            if (null == t) return this.dataSource.get(e);
            this.dataSource.set(e, t)
        }, w.prototype.getNodeTop = function (e) {
            if (this.length < 1) return this;
            var t = this.parent();
            return e.$textElem.equal(this) || e.$textElem.equal(t) ? this : (t.prior = this, t.getNodeTop(
                e))
        }, w.prototype.getOffsetData = function () {
            var e = this.elems[0];
            return {
                top: e.offsetTop,
                left: e.offsetLeft,
                width: e.offsetWidth,
                height: e.offsetHeight,
                parent: e.offsetParent
            }
        }, w.prototype.scrollTop = function (e) {
            this.elems[0].scrollTo({
                top: e
            })
        }, w);

        function w(e) {
            if (this.elems = [], this.length = this.elems.length, this.dataSource = new s.default, e) {
                if (e instanceof w) return e;
                var t, n = [],
                    o = e instanceof Node ? e.nodeType : -1;
                this.selector = e, 1 === o || 9 === o ? n = [e] : (t = e) && (t instanceof HTMLCollection ||
                    t instanceof NodeList) ? n = v.toArray(e) : e instanceof Array ? n = e : "string" ==
                    typeof e && (t = (0, l.default)(o = e.replace("/\n/mg", "")).call(o), n = 0 === (0, c.default)
                    (t).call(t, "<") ? (e = t, (o = document.createElement("div")).innerHTML = e, o = o
                        .children, v.toArray(o)) : (t = t, t = document.querySelectorAll(t), v.toArray(
                        t)));
                var i = n.length;
                if (!i) return this;
                for (var r = 0; r < i; r++) this.elems.push(n[r]);
                this.length = i
            }
        }

        function x() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new((0, h.default)(y).apply(y, A.__spreadArray([void 0], e)))
        }
        t.DomElement = y, t.default = x
    }, function (e, t, n) {
        e.exports = n(181)
    }, function (e, t, n) {
        "use strict";

        function h(o) {
            function e(e, t, n) {
                if (this instanceof o) {
                    switch (arguments.length) {
                        case 0:
                            return new o;
                        case 1:
                            return new o(e);
                        case 2:
                            return new o(e, t)
                    }
                    return new o(e, t, n)
                }
                return o.apply(this, arguments)
            }
            return e.prototype = o.prototype, e
        }
        var A = n(8),
            v = n(75).f,
            m = n(101),
            g = n(10),
            y = n(38),
            w = n(17),
            x = n(16);
        e.exports = function (e, t) {
            var n, o, i, r, a, l = e.target,
                u = e.global,
                s = e.stat,
                c = e.proto,
                f = u ? A : s ? A[l] : (A[l] || {}).prototype,
                d = u ? g : g[l] || (g[l] = {}),
                p = d.prototype;
            for (n in t) r = !m(u ? n : l + (s ? "." : "#") + n, e.forced) && f && x(f, n), o = d[n], r &&
            (i = e.noTargetGet ? (a = v(f, n)) && a.value : f[n]), a = r && i ? i : t[n], r &&
            typeof o == typeof a || (r = e.bind && r ? y(a, A) : e.wrap && r ? h(a) : c &&
            "function" == typeof a ? y(Function.call, a) : a, (e.sham || a && a.sham || o && o.sham) &&
            w(r, "sham", !0), d[n] = r, c && (x(g, r = l + "Prototype") || w(g, r, {}), g[r][n] =
                a, e.real && p && !p[n] && w(p, n, a)))
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(94)),
            r = o(n(1)),
            a = o(n(258)),
            l = o(n(44)),
            u = o(n(45)),
            s = o(n(91)),
            c = o(n(25));
        (0, r.default)(t, "__esModule", {
            value: !0
        }), t.hexToRgb = t.getRandomCode = t.toArray = t.deepClone = t.isFunction = t.debounce = t.throttle =
            t.arrForEach = t.forEach = t.replaceSpecialSymbol = t.replaceHtmlSymbol = t.getRandom = t.UA =
                void 0;
        var f = n(2),
            n = (d.prototype.isIE = function () {
                return "ActiveXObject" in window
            }, d.prototype.isWebkit = function () {
                return /webkit/i.test(this._ua)
            }, d);

        function d() {
            this._ua = navigator.userAgent;
            var e = this._ua.match(/(Edge?)\/(\d+)/);
            this.isOldEdge = !!(e && "Edge" == e[1] && (0, a.default)(e[2]) < 19), this.isFirefox = !(!
                /Firefox\/\d+/.test(this._ua) || /Seamonkey\/\d+/.test(this._ua))
        }
        t.UA = new n, t.getRandom = function (e) {
            return (e = void 0 === e ? "" : e) + (0, l.default)(e = Math.random().toString()).call(e, 2)
        }, t.replaceHtmlSymbol = function (e) {
            return e.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(
                /(\r\n|\r|\n)/g, "<br/>")
        }, t.replaceSpecialSymbol = function (e) {
            return e.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"')
        }, t.forEach = function (e, t) {
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n))
                    if (!1 === t(n, e[n])) break
        }, t.arrForEach = function (e, t) {
            for (var n, o = e.length || 0, i = 0; i < o && (n = e[i], !1 !== t.call(e, n, i)); i++);
        }, t.throttle = function (o, i) {
            void 0 === i && (i = 200);
            var r = !1;
            return function () {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                r || (r = !0, (0, u.default)(function () {
                    r = !1, o.call.apply(o, f.__spreadArray([e], t))
                }, i))
            }
        }, t.debounce = function (o, i) {
            void 0 === i && (i = 200);
            var r = 0;
            return function () {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                r && window.clearTimeout(r), r = (0, u.default)(function () {
                    r = 0, o.call.apply(o, f.__spreadArray([e], t))
                }, i)
            }
        }, t.isFunction = function (e) {
            return "function" == typeof e
        }, t.deepClone = function e(t) {
            if ("object" !== (0, i.default)(t) || "function" == typeof t || null === t) return t;
            var n, o;
            for (o in (0, s.default)(t) && (n = []), (0, s.default)(t) || (n = {}), t) Object.prototype
                .hasOwnProperty.call(t, o) && (n[o] = e(t[o]));
            return n
        }, t.toArray = function (e) {
            return (0, l.default)(Array.prototype).call(e)
        }, t.getRandomCode = function () {
            var e;
            return (0, l.default)(e = Math.random().toString(36)).call(e, -5)
        }, t.hexToRgb = function (e) {
            return null == (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? null : "rgb(" +
                (e = (0, c.default)(e).call(e, function (e) {
                    return (0, a.default)(e, 16)
                }))[1] + ", " + e[2] + ", " + e[3] + ")"
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.EMPTY_P_REGEX = t.EMPTY_P_LAST_REGEX = t.EMPTY_P = t.urlRegex = t.EMPTY_FN = void 0, t.EMPTY_FN =
            function () {}, t.urlRegex =
            /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/, t
            .EMPTY_P = '<p data-we-empty-p=""><br></p>', t.EMPTY_P_LAST_REGEX =
            /<p data-we-empty-p=""><br\/?><\/p>$/gim, t.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim
    }, function (n, e, t) {
        ! function (e) {
            function t(e) {
                return e && e.Math == Math && e
            }
            n.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window &&
                window) || t("object" == typeof self && self) || t("object" == typeof e && e) ||
                function () {
                    return this
                }() || Function("return this")()
        }.call(this, t(144))
    }, function (e, t, n) {
        var o = n(8),
            i = n(79),
            r = n(16),
            a = n(61),
            l = n(84),
            n = n(106),
            u = i("wks"),
            s = o.Symbol,
            c = n ? s : s && s.withoutSetter || a;
        e.exports = function (e) {
            return r(u, e) && (l || "string" == typeof u[e]) || (l && r(s, e) ? u[e] = s[e] : u[e] = c(
                "Symbol." + e)), u[e]
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, n) {
        var o = n(10),
            i = n(16),
            r = n(95),
            a = n(18).f;
        e.exports = function (e) {
            var t = o.Symbol || (o.Symbol = {});
            i(t, e) || a(t, e, {
                value: r.f(e)
            })
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function (e, t, n) {
        var o = n(10);
        e.exports = function (e) {
            return o[e + "Prototype"]
        }
    }, function (e, t, n) {
        n = n(12);
        e.exports = !n(function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })
    }, function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, function (e, t, n) {
        var o = n(15),
            i = n(18),
            r = n(37);
        e.exports = o ? function (e, t, n) {
            return i.f(e, t, r(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, function (e, t, n) {
        var o = n(15),
            i = n(100),
            r = n(20),
            a = n(59),
            l = Object.defineProperty;
        t.f = o ? l : function (e, t, n) {
            if (r(e), t = a(t, !0), r(n), i) try {
                return l(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
        }
    }, function (e, t, n) {
        e.exports = n(193)
    }, function (e, t, n) {
        var o = n(13);
        e.exports = function (e) {
            if (!o(e)) throw TypeError(String(e) + " is not an object");
            return e
        }
    }, function (e, t, i) {
        "use strict";
        var n, o, l = function () {
                return n = void 0 === n ? Boolean(window && document && document.all && !window.atob) : n
            },
            r = (o = {}, function (e) {
                if (void 0 === o[e]) {
                    var t = document.querySelector(e);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (e) {
                        t = null
                    }
                    o[e] = t
                }
                return o[e]
            }),
            s = [];

        function c(e) {
            for (var t = -1, n = 0; n < s.length; n++)
                if (s[n].identifier === e) {
                    t = n;
                    break
                } return t
        }

        function u(e, t) {
            for (var n = {}, o = [], i = 0; i < e.length; i++) {
                var r = e[i],
                    a = t.base ? r[0] + t.base : r[0],
                    l = n[a] || 0,
                    u = "".concat(a, " ").concat(l);
                n[a] = l + 1;
                l = c(u), r = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                }; - 1 !== l ? (s[l].references++, s[l].updater(r)) : s.push({
                    identifier: u,
                    updater: function (t, e) {
                        var n, o, i; {
                            var r;
                            i = e.singleton ? (r = A++, n = h = h || f(e), o = p.bind(null, n,
                                r, !1), p.bind(null, n, r, !0)) : (n = f(e), o = function (
                                e, t, n) {
                                var o = n.css,
                                    i = n.media,
                                    n = n.sourceMap;
                                i ? e.setAttribute("media", i) : e.removeAttribute(
                                    "media");
                                n && "undefined" != typeof btoa && (o +=
                                    "\n/*# sourceMappingURL=data:application/json;base64,"
                                        .concat(btoa(unescape(encodeURIComponent(JSON.stringify(
                                            n)))), " */"));
                                if (e.styleSheet) e.styleSheet.cssText = o;
                                else {
                                    for (; e.firstChild;) e.removeChild(e.firstChild);
                                    e.appendChild(document.createTextNode(o))
                                }
                            }.bind(null, n, e), function () {
                                ! function (e) {
                                    if (null === e.parentNode) return;
                                    e.parentNode.removeChild(e)
                                }(n)
                            })
                        }
                        return o(t),
                            function (e) {
                                e ? e.css === t.css && e.media === t.media && e.sourceMap ===
                                    t.sourceMap || o(t = e) : i()
                            }
                    }(r, t),
                    references: 1
                }), o.push(u)
            }
            return o
        }

        function f(e) {
            var t, n = document.createElement("style"),
                o = e.attributes || {};
            if (void 0 !== o.nonce || (t = i.nc) && (o.nonce = t), Object.keys(o).forEach(function (e) {
                n.setAttribute(e, o[e])
            }), "function" == typeof e.insert) e.insert(n);
            else {
                e = r(e.insert || "head");
                if (!e) throw new Error(
                    "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
                e.appendChild(n)
            }
            return n
        }
        var a, d = (a = [], function (e, t) {
            return a[e] = t, a.filter(Boolean).join("\n")
        });

        function p(e, t, n, o) {
            n = n ? "" : o.media ? "@media ".concat(o.media, " {").concat(o.css, "}") : o.css;
            e.styleSheet ? e.styleSheet.cssText = d(t, n) : (o = document.createTextNode(n), (n = e.childNodes)[
                t] && e.removeChild(n[t]), n.length ? e.insertBefore(o, n[t]) : e.appendChild(o))
        }
        var h = null,
            A = 0;
        e.exports = function (e, r) {
            (r = r || {}).singleton || "boolean" == typeof r.singleton || (r.singleton = l());
            var a = u(e = e || [], r);
            return function (e) {
                if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                    for (var t = 0; t < a.length; t++) {
                        var n = c(a[t]);
                        s[n].references--
                    }
                    for (var e = u(e, r), o = 0; o < a.length; o++) {
                        var i = c(a[o]);
                        0 === s[i].references && (s[i].updater(), s.splice(i, 1))
                    }
                    a = e
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (n) {
            var u = [];
            return u.toString = function () {
                return this.map(function (e) {
                    var t = function (e, t) {
                        var n = e[1] || "",
                            o = e[3];
                        if (!o) return n;
                        if (t && "function" == typeof btoa) {
                            e = function (e) {
                                e = btoa(unescape(encodeURIComponent(JSON.stringify(
                                    e)))), e =
                                    "sourceMappingURL=data:application/json;charset=utf-8;base64,"
                                        .concat(e);
                                return "/*# ".concat(e, " */")
                            }(o), t = o.sources.map(function (e) {
                                return "/*# sourceURL=".concat(o.sourceRoot ||
                                    "").concat(e, " */")
                            });
                            return [n].concat(t).concat([e]).join("\n")
                        }
                        return [n].join("\n")
                    }(e, n);
                    return e[2] ? "@media ".concat(e[2], " {").concat(t, "}") : t
                }).join("")
            }, u.i = function (e, t, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                var o = {};
                if (n)
                    for (var i = 0; i < this.length; i++) {
                        var r = this[i][0];
                        null != r && (o[r] = !0)
                    }
                for (var a = 0; a < e.length; a++) {
                    var l = [].concat(e[a]);
                    n && o[l[0]] || (t && (l[2] ? l[2] = "".concat(t, " and ").concat(l[2]) : l[2] =
                        t), u.push(l))
                }
            }, u
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            n = i.__importDefault(n(96)),
            i = (o = n.default, i.__extends(r, o), r);

        function r(e, t) {
            return o.call(this, e, t) || this
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            l = o(n(4)),
            u = o(n(45));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var s, o = n(2),
            c = o.__importDefault(n(3)),
            i = o.__importDefault(n(96)),
            f = o.__importDefault(n(132)),
            o = (s = i.default, o.__extends(r, s), r);

        function r(t, n, e) {
            var o = s.call(this, t, n) || this;
            e.title = n.i18next.t("menus.dropListMenu." + e.title);
            var i, r = "zh-CN" === n.config.lang ? "" : "w-e-drop-list-tl";
            r && "list" === e.type && (0, l.default)(i = e.list).call(i, function (e) {
                var t = e.$elem,
                    e = c.default(t.children());
                0 < e.length && ((e = null == e ? void 0 : e.getNodeName()) && "I" === e && t.addClass(
                    r))
            });
            var a = new f.default(o, e);
            return o.dropList = a, t.on("click", function () {
                var e;
                null != n.selection.getRange() && (t.css("z-index", n.zIndex.get("menu")), (0, l.default)
                (e = n.txt.eventHooks.dropListMenuHoverEvents).call(e, function (e) {
                    return e()
                }), a.show())
            }).on("mouseleave", function () {
                t.css("z-index", "auto"), a.hideTimeoutId = (0, u.default)(function () {
                    a.hide()
                })
            }), o
        }
        t.default = o
    }, function (e, t, n) {
        e.exports = n(189)
    }, function (e, t, n) {
        e.exports = n(202)
    }, function (e, t, n) {
        var o = n(76),
            i = n(48);
        e.exports = function (e) {
            return o(i(e))
        }
    }, function (e, t, n) {
        function o(e) {
            return "function" == typeof e ? e : void 0
        }
        var i = n(10),
            r = n(8);
        e.exports = function (e, t) {
            return arguments.length < 2 ? o(i[e]) || o(r[e]) : i[e] && i[e][t] || r[e] && r[e][t]
        }
    }, function (e, t, n) {
        var w = n(38),
            x = n(76),
            _ = n(33),
            E = n(34),
            b = n(90),
            C = [].push,
            n = function (d) {
                var p = 1 == d,
                    h = 2 == d,
                    A = 3 == d,
                    v = 4 == d,
                    m = 6 == d,
                    g = 7 == d,
                    y = 5 == d || m;
                return function (e, t, n, o) {
                    for (var i, r, a = _(e), l = x(a), u = w(t, n, 3), s = E(l.length), c = 0, o = o ||
                        b, f = p ? o(e, s) : h || g ? o(e, 0) : void 0; c < s; c++)
                        if ((y || c in l) && (r = u(i = l[c], c, a), d))
                            if (p) f[c] = r;
                            else if (r) switch (d) {
                                case 3:
                                    return !0;
                                case 5:
                                    return i;
                                case 6:
                                    return c;
                                case 2:
                                    C.call(f, i)
                            } else switch (d) {
                                case 4:
                                    return !1;
                                case 7:
                                    C.call(f, i)
                            }
                    return m ? -1 : A || v ? v : f
                }
            };
        e.exports = {
            forEach: n(0),
            map: n(1),
            filter: n(2),
            some: n(3),
            every: n(4),
            find: n(5),
            findIndex: n(6),
            filterOut: n(7)
        }
    }, function (e, t, n) {
        e.exports = n(287)
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            d = o(n(4)),
            p = o(n(30)),
            o = o(n(129));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var h = n(2),
            A = h.__importDefault(n(3)),
            v = n(7),
            o = (m.prototype.create = function () {
                var e, t, n, r, a, o, i, l, u, s, c = this,
                    f = this.menu;
                m.createdMenus.has(f) || (i = this.conf, s = this.$container, e = i.width || 300, t = f
                    .editor.$toolbarElem.getBoundingClientRect(), o = f.$elem.getBoundingClientRect(),
                    n = t.height + t.top - o.top, o = (t.width - e) / 2 + t.left - o.left, s.css(
                    "width", e + "px").css("margin-top", n + "px").css("margin-left", o + "px")
                    .css("z-index", f.editor.zIndex.get("panel")), o = A.default(
                    '<i class="w-e-icon-close w-e-panel-close"></i>'), s.append(o), o.on(
                    "click",
                    function () {
                        c.remove()
                    }), r = A.default('<ul class="w-e-panel-tab-title"></ul>'), a = A.default(
                    '<div class="w-e-panel-tab-content"></div>'), s.append(r).append(a), (o = i
                    .height) && a.css("height", o + "px").css("overflow-y", "auto"), i = i.tabs ||
                    [], l = [], u = [], (0, d.default)(i).call(i, function (e, t) {
                    var n, o, i;
                    e && (n = e.title || "", e = e.tpl || "", o = A.default(
                        '<li class="w-e-item">' + n + "</li>"), r.append(o), i = A.default(
                        e), a.append(i), l.push(o), u.push(i), 0 === t ? (o.data(
                        "active", !0), o.addClass("w-e-active")) : i.hide(), o.on(
                        "click",
                        function () {
                            o.data("active") || ((0, d.default)(l).call(l, function (
                                e) {
                                e.data("active", !1), e.removeClass(
                                    "w-e-active")
                            }), (0, d.default)(u).call(u, function (e) {
                                e.hide()
                            }), o.data("active", !0), o.addClass(
                                "w-e-active"), i.show())
                        }))
                }), s.on("click", function (e) {
                    e.stopPropagation()
                }), f.$elem.append(s), (0, d.default)(i).call(i, function (e, i) {
                    e && (e = e.events || [], (0, d.default)(e).call(e, function (e) {
                        var t = e.selector,
                            n = e.type,
                            o = e.fn || v.EMPTY_FN,
                            e = u[i];
                        (0, p.default)(e).call(e, t).on(n, function (t) {
                            return h.__awaiter(c, void 0, void 0,
                                function () {
                                    return h.__generator(this,
                                        function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return t.stopPropagation(),
                                                        [4, o(t)];
                                                case 1:
                                                    return e.sent() &&
                                                    this.remove(),
                                                        [2]
                                            }
                                        })
                                })
                        })
                    }))
                }), (s = (0, p.default)(s).call(s, "input[type=text],textarea")).length && s.get(
                    0).focus(), m.hideCurAllPanels(), f.setPanel(this), m.createdMenus.add(f))
            }, m.prototype.remove = function () {
                var e = this.menu,
                    t = this.$container;
                t && t.remove(), m.createdMenus.delete(e)
            }, m.hideCurAllPanels = function () {
                var e;
                0 !== m.createdMenus.size && (0, d.default)(e = m.createdMenus).call(e, function (e) {
                    e = e.panel;
                    e && e.remove()
                })
            }, m.createdMenus = new o.default, m);

        function m(e, t) {
            this.menu = e, this.conf = t, this.$container = A.default(
                '<div class="w-e-panel-container"></div>');
            e = e.editor;
            e.txt.eventHooks.clickEvents.push(m.hideCurAllPanels), e.txt.eventHooks.toolbarClickEvents.push(
                m.hideCurAllPanels), e.txt.eventHooks.dropListMenuHoverEvents.push(m.hideCurAllPanels)
        }
        t.default = o
    }, function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        }
    }, function (e, t, n) {
        var o = n(48);
        e.exports = function (e) {
            return Object(o(e))
        }
    }, function (e, t, n) {
        var o = n(64),
            i = Math.min;
        e.exports = function (e) {
            return 0 < e ? i(o(e), 9007199254740991) : 0
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            n = i.__importDefault(n(96)),
            i = (o = n.default, i.__extends(r, o), r.prototype.setPanel = function (e) {
                this.panel = e
            }, r);

        function r(e, t) {
            return o.call(this, e, t) || this
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            u = o(n(4)),
            r = o(n(56));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var f = n(2).__importDefault(n(3)),
            i = (a.prototype.getPositionData = function () {
                var e, t, n = this.$container,
                    o = 0,
                    i = 0,
                    r = document.documentElement.scrollTop,
                    a = this.$targetElem.getBoundingClientRect(),
                    l = this.editor.$textElem.getBoundingClientRect(),
                    u = this.$targetElem.getOffsetData(),
                    s = f.default(u.parent),
                    c = this.editor.$textElem.elems[0].scrollTop;
                return this._isInsertTextContainer = s.equal(this.editor.$textContainerElem), i = this._isInsertTextContainer ?
                    (e = s.getBoundingClientRect().height, t = u.top, s = u.left, u = u.height, 25 < (c =
                        t - c) ? (o = c - 20 - 15, n.addClass("w-e-tooltip-up")) : (o = c + u + 20 <
                    e ? c + u + 10 : 20 + (0 < c ? c : 0) + 10, n.addClass("w-e-tooltip-down")),
                        s < 0 ? 0 : s) : (a.top < 20 || a.top - l.top < 20 ? (o = a.bottom + r + 5, n.addClass(
                        "w-e-tooltip-down")) : (o = a.top + r - 20 - 15, n.addClass(
                        "w-e-tooltip-up")), a.left < 0 ? 0 : a.left), {
                    top: o,
                    left: i
                }
            }, a.prototype.appendMenus = function () {
                var i = this,
                    e = this.conf,
                    r = this.editor,
                    a = this.$targetElem,
                    l = this.$container;
                (0, u.default)(e).call(e, function (t, e) {
                    var n = t.$elem,
                        o = f.default("<div></div>");
                    o.addClass("w-e-tooltip-item-wrapper "), o.append(n), l.append(o), n.on(
                        "click",
                        function (e) {
                            e.preventDefault(), t.onClick(r, a) && i.remove()
                        })
                })
            }, a.prototype.create = function () {
                var e = this.editor,
                    t = this.$container;
                this.appendMenus();
                var n = this.getPositionData(),
                    o = n.top,
                    n = n.left;
                t.css("top", o + "px"), t.css("left", n + "px"), t.css("z-index", e.zIndex.get(
                    "tooltip")), (this._isInsertTextContainer ? this.editor.$textContainerElem : f.default(
                    "body")).append(t), this._show = !0, e.beforeDestroy((0, r.default)(t = this.remove)
                    .call(t, this)), e.txt.eventHooks.onBlurEvents.push((0, r.default)(e = this.remove)
                    .call(e, this))
            }, a.prototype.remove = function () {
                this.$container.remove(), this._show = !1
            }, (0, i.default)(a.prototype, "isShow", {
                get: function () {
                    return this._show
                },
                enumerable: !1,
                configurable: !0
            }), a);

        function a(e, t, n) {
            this.editor = e, this.$targetElem = t, this.conf = n, this._show = !1, this._isInsertTextContainer = !
                1;
            n = f.default("<div></div>");
            n.addClass("w-e-tooltip"), this.$container = n
        }
        t.default = i
    }, function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function (e, t, n) {
        var r = n(32);
        e.exports = function (o, i, e) {
            if (r(o), void 0 === i) return o;
            switch (e) {
                case 0:
                    return function () {
                        return o.call(i)
                    };
                case 1:
                    return function (e) {
                        return o.call(i, e)
                    };
                case 2:
                    return function (e, t) {
                        return o.call(i, e, t)
                    };
                case 3:
                    return function (e, t, n) {
                        return o.call(i, e, t, n)
                    }
            }
            return function () {
                return o.apply(i, arguments)
            }
        }
    }, function (e, t) {
        e.exports = !0
    }, function (e, t, n) {
        function v(e, t) {
            this.stopped = e, this.result = t
        }
        var m = n(20),
            g = n(105),
            y = n(34),
            w = n(38),
            x = n(107),
            _ = n(108);
        e.exports = function (e, t, n) {
            function o(e) {
                return r && _(r), new v(!0, e)
            }

            function i(e) {
                return d ? (m(e), h ? A(e[0], e[1], o) : A(e[0], e[1])) : h ? A(e, o) : A(e)
            }
            var r, a, l, u, s, c, f = n && n.that,
                d = !(!n || !n.AS_ENTRIES),
                p = !(!n || !n.IS_ITERATOR),
                h = !(!n || !n.INTERRUPTED),
                A = w(t, f, 1 + d + h);
            if (p) r = e;
            else {
                if ("function" != typeof (p = x(e))) throw TypeError("Target is not iterable");
                if (g(p)) {
                    for (a = 0, l = y(e.length); a < l; a++)
                        if ((u = i(e[a])) && u instanceof v) return u;
                    return new v(!1)
                }
                r = p.call(e)
            }
            for (s = r.next; !(c = s.call(r)).done;) {
                try {
                    u = i(c.value)
                } catch (e) {
                    throw _(r), e
                }
                if ("object" == typeof u && u && u instanceof v) return u
            }
            return new v(!1)
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, n) {
        var i = n(85),
            r = n(18).f,
            a = n(17),
            l = n(16),
            u = n(169),
            s = n(9)("toStringTag");
        e.exports = function (e, t, n, o) {
            e && (e = n ? e : e.prototype, l(e, s) || r(e, s, {
                configurable: !0,
                value: t
            }), o && !i && a(e, "toString", u))
        }
    }, function (e, t, n) {
        var o, i, r, a, l, u, s, c, f = n(173),
            d = n(8),
            p = n(13),
            h = n(17),
            A = n(16),
            v = n(80),
            m = n(60),
            n = n(49),
            d = d.WeakMap;
        s = f ? (o = v.state || (v.state = new d), i = o.get, r = o.has, a = o.set, l = function (e, t) {
            return t.facade = e, a.call(o, e, t), t
        }, u = function (e) {
            return i.call(o, e) || {}
        }, function (e) {
            return r.call(o, e)
        }) : (n[c = m("state")] = !0, l = function (e, t) {
            return t.facade = e, h(e, c, t), t
        }, u = function (e) {
            return A(e, c) ? e[c] : {}
        }, function (e) {
            return A(e, c)
        }), e.exports = {
            set: l,
            get: u,
            has: s,
            enforce: function (e) {
                return s(e) ? u(e) : l(e, {})
            },
            getterFor: function (n) {
                return function (e) {
                    var t;
                    if (!p(e) || (t = u(e)).type !== n) throw TypeError(
                        "Incompatible receiver, " + n + " required");
                    return t
                }
            }
        }
    }, function (e, t, n) {
        e.exports = n(263)
    }, function (e, t, n) {
        e.exports = n(267)
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.createElementFragment = t.createDocumentFragment = t.createElement = t.insertBefore = t.getEndPoint =
            t.getStartPoint = t.updateRange = t.filterSelectionNodes = void 0;
        var i = n(2),
            a = n(136),
            l = i.__importDefault(n(3));

        function u(e) {
            return document.createElement(e)
        }
        t.filterSelectionNodes = function (e) {
            var n = [];
            return (0, r.default)(e).call(e, function (e) {
                var t = e.getNodeName();
                t !== a.ListType.OrderedList && t !== a.ListType.UnorderedList ? n.push(e) : e.prior ?
                    n.push(e.prior) : null != (e = e.children()) && (0, r.default)(e).call(e,
                    function (e) {
                        n.push(l.default(e))
                    })
            }), n
        }, t.updateRange = function (e, t, n) {
            var o = e.selection,
                e = document.createRange();
            1 < t.length ? (e.setStart(t.elems[0], 0), e.setEnd(t.elems[t.length - 1], t.elems[t.length -
            1].childNodes.length)) : e.selectNodeContents(t.elems[0]), n && e.collapse(!1), o.saveRange(
                e), o.restoreSelection()
        }, t.getStartPoint = function (e) {
            return e.prior || l.default(null === (e = e.children()) || void 0 === e ? void 0 : e.elems[
                0])
        }, t.getEndPoint = function (e) {
            return e.prior || l.default(null === (e = e.children()) || void 0 === e ? void 0 : e.last()
                .elems[0])
        }, t.insertBefore = function (e, t, n) {
            void 0 === n && (n = null), e.parent().elems[0].insertBefore(t, n)
        }, t.createElement = u, t.createDocumentFragment = function () {
            return document.createDocumentFragment()
        }, t.createElementFragment = function (e, n, o) {
            return void 0 === o && (o = "li"), (0, r.default)(e).call(e, function (e) {
                var t = u(o);
                t.innerHTML = e.html(), n.append(t), e.remove()
            }), n
        }
    }, function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, n) {
        var i = n(17);
        e.exports = function (e, t, n, o) {
            o && o.enumerable ? e[t] = n : i(e, t, n)
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(177).charAt,
            i = n(43),
            n = n(88),
            r = "String Iterator",
            a = i.set,
            l = i.getterFor(r);
        n(String, "String", function (e) {
            a(this, {
                type: r,
                string: String(e),
                index: 0
            })
        }, function () {
            var e = l(this),
                t = e.string,
                n = e.index;
            return n >= t.length ? {
                value: void 0,
                done: !0
            } : (n = o(t, n), e.index += n.length, {
                value: n,
                done: !1
            })
        })
    }, function (e, t, n) {
        n(179);
        var o, i = n(180),
            r = n(8),
            a = n(68),
            l = n(17),
            u = n(41),
            s = n(9)("toStringTag");
        for (o in i) {
            var c = r[o],
                c = c && c.prototype;
            c && a(c) !== s && l(c, s, o), u[o] = u.Array
        }
    }, function (e, t, n) {
        var o = n(47);
        e.exports = Array.isArray || function (e) {
            return "Array" == o(e)
        }
    }, function (e, t, n) {
        var o = n(12),
            i = n(9),
            r = n(66),
            a = i("species");
        e.exports = function (t) {
            return 51 <= r || !o(function () {
                var e = [];
                return (e.constructor = {})[a] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            })
        }
    }, function (e, t, n) {
        e.exports = n(214)
    }, function (e, t, n) {
        e.exports = n(223)
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.ListHandle = void 0;
        var o = n(2).__importDefault(n(372));
        t.ListHandle = function (e) {
            this.options = e, this.selectionRangeElem = new o.default
        }
    }, function (e, t, n) {
        "use strict";
        var o = {}.propertyIsEnumerable,
            i = Object.getOwnPropertyDescriptor,
            r = i && !o.call({
                1: 2
            }, 1);
        t.f = r ? function (e) {
            e = i(this, e);
            return !!e && e.enumerable
        } : o
    }, function (e, t, n) {
        var i = n(13);
        e.exports = function (e, t) {
            if (!i(e)) return e;
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
            if ("function" == typeof (n = e.valueOf) && !i(o = n.call(e))) return o;
            if (!t && "function" == typeof (n = e.toString) && !i(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (e, t, n) {
        var o = n(79),
            i = n(61),
            r = o("keys");
        e.exports = function (e) {
            return r[e] || (r[e] = i(e))
        }
    }, function (e, t) {
        var n = 0,
            o = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + o).toString(36)
        }
    }, function (e, t, n) {
        function o() {}

        function i(e) {
            return "<script>" + e + "</" + p + ">"
        }
        var r, a = n(20),
            l = n(167),
            u = n(83),
            s = n(49),
            c = n(104),
            f = n(77),
            n = n(60),
            d = "prototype",
            p = "script",
            h = n("IE_PROTO"),
            A = function () {
                try {
                    r = document.domain && new ActiveXObject("htmlfile")
                } catch (e) {}
                var e;
                A = r ? function (e) {
                    e.write(i("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                }(r) : ((e = f("iframe")).style.display = "none", c.appendChild(e), e.src = String(
                    "javascript:"), (e = e.contentWindow.document).open(), e.write(i(
                    "document.F=Object")), e.close(), e.F);
                for (var t = u.length; t--;) delete A[d][u[t]];
                return A()
            };
        s[h] = !0, e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (o[d] = a(e), n = new o, o[d] = null, n[h] = e) : n = A(), void 0 ===
            t ? n : l(n, t)
        }
    }, function (e, t, n) {
        var o = n(103),
            i = n(83);
        e.exports = Object.keys || function (e) {
            return o(e, i)
        }
    }, function (e, t) {
        var n = Math.ceil,
            o = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (0 < e ? o : n)(e)
        }
    }, function (e, t, n) {
        var o = n(47),
            n = n(8);
        e.exports = "process" == o(n.process)
    }, function (e, t, n) {
        var o, i, r = n(8),
            n = n(67),
            r = r.process,
            r = r && r.versions,
            r = r && r.v8;
        r ? i = (o = r.split("."))[0] + o[1] : n && (!(o = n.match(/Edge\/(\d+)/)) || 74 <= o[1]) && (o = n
            .match(/Chrome\/(\d+)/)) && (i = o[1]), e.exports = i && +i
    }, function (e, t, n) {
        n = n(28);
        e.exports = n("navigator", "userAgent") || ""
    }, function (e, t, n) {
        var o = n(85),
            i = n(47),
            r = n(9)("toStringTag"),
            a = "Arguments" == i(function () {
                return arguments
            }());
        e.exports = o ? i : function (e) {
            var t;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (e = function (
                e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), r)) ? e : a ? i(t) : "Object" == (e = i(t)) && "function" == typeof t.callee ?
                "Arguments" : e
        }
    }, function (e, t) {}, function (e, t, n) {
        "use strict";

        function o(e) {
            var n, o;
            this.promise = new e(function (e, t) {
                if (void 0 !== n || void 0 !== o) throw TypeError("Bad Promise constructor");
                n = e, o = t
            }), this.resolve = i(n), this.reject = i(o)
        }
        var i = n(32);
        e.exports.f = function (e) {
            return new o(e)
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(12);
        e.exports = function (e, t) {
            var n = [][e];
            return !!n && o(function () {
                n.call(null, t || function () {
                    throw 1
                }, 1)
            })
        }
    }, function (e, t) {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    }, function (e, t, n) {
        "use strict";
        var o = n(59),
            i = n(18),
            r = n(37);
        e.exports = function (e, t, n) {
            t = o(t);
            t in e ? i.f(e, t, r(0, n)) : e[t] = n
        }
    }, function (e, t, n) {
        e.exports = n(210)
    }, function (e, t, n) {
        var o = n(15),
            i = n(58),
            r = n(37),
            a = n(27),
            l = n(59),
            u = n(16),
            s = n(100),
            c = Object.getOwnPropertyDescriptor;
        t.f = o ? c : function (e, t) {
            if (e = a(e), t = l(t, !0), s) try {
                return c(e, t)
            } catch (e) {}
            if (u(e, t)) return r(!i.f.call(e, t), e[t])
        }
    }, function (e, t, n) {
        var o = n(12),
            i = n(47),
            r = "".split;
        e.exports = o(function () {
            return !Object("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return "String" == i(e) ? r.call(e, "") : Object(e)
        } : Object
    }, function (e, t, n) {
        var o = n(8),
            n = n(13),
            i = o.document,
            r = n(i) && n(i.createElement);
        e.exports = function (e) {
            return r ? i.createElement(e) : {}
        }
    }, function (e, t, n) {
        var o = n(16),
            i = n(33),
            r = n(60),
            n = n(165),
            a = r("IE_PROTO"),
            l = Object.prototype;
        e.exports = n ? Object.getPrototypeOf : function (e) {
            return e = i(e), o(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ?
                e.constructor.prototype : e instanceof Object ? l : null
        }
    }, function (e, t, n) {
        var o = n(39),
            i = n(80);
        (e.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.10.1",
            mode: o ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
        })
    }, function (e, t, n) {
        var o = n(8),
            i = n(164),
            n = "__core-js_shared__",
            n = o[n] || i(n, {});
        e.exports = n
    }, function (e, t, n) {
        var u = n(27),
            s = n(34),
            c = n(82),
            n = function (l) {
                return function (e, t, n) {
                    var o, i = u(e),
                        r = s(i.length),
                        a = c(n, r);
                    if (l && t != t) {
                        for (; a < r;)
                            if ((o = i[a++]) != o) return !0
                    } else
                        for (; a < r; a++)
                            if ((l || a in i) && i[a] === t) return l || a || 0;
                    return !l && -1
                }
            };
        e.exports = {
            includes: n(!0),
            indexOf: n(!1)
        }
    }, function (e, t, n) {
        var o = n(64),
            i = Math.max,
            r = Math.min;
        e.exports = function (e, t) {
            e = o(e);
            return e < 0 ? i(e + t, 0) : r(e, t)
        }
    }, function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable",
            "toLocaleString", "toString", "valueOf"]
    }, function (e, t, n) {
        var o = n(65),
            i = n(66),
            n = n(12);
        e.exports = !!Object.getOwnPropertySymbols && !n(function () {
            return !Symbol.sham && (o ? 38 === i : 37 < i && i < 41)
        })
    }, function (e, t, n) {
        var o = {};
        o[n(9)("toStringTag")] = "z", e.exports = "[object z]" === String(o)
    }, function (e, t) {
        e.exports = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        }
    }, function (e, t, n) {
        "use strict";

        function A() {
            return this
        }
        var v = n(5),
            m = n(178),
            g = n(78),
            y = n(102),
            w = n(42),
            x = n(17),
            _ = n(50),
            o = n(9),
            E = n(39),
            b = n(41),
            n = n(118),
            C = n.IteratorPrototype,
            S = n.BUGGY_SAFARI_ITERATORS,
            D = o("iterator"),
            M = "values",
            N = "entries";
        e.exports = function (e, t, n, o, i, r, a) {
            m(n, t, o);

            function l(e) {
                if (e === i && h) return h;
                if (!S && e in d) return d[e];
                switch (e) {
                    case "keys":
                    case M:
                    case N:
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this)
                }
            }
            var u, s, c = t + " Iterator",
                f = !1,
                d = e.prototype,
                p = d[D] || d["@@iterator"] || i && d[i],
                h = !S && p || l(i),
                o = "Array" == t && d.entries || p;
            if (o && (e = g(o.call(new e)), C !== Object.prototype && e.next && (E || g(e) === C || (y ?
                y(e, C) : "function" != typeof e[D] && x(e, D, A)), w(e, c, !0, !0), E && (
                b[c] = A))), i == M && p && p.name !== M && (f = !0, h = function () {
                return p.call(this)
            }), E && !a || d[D] === h || x(d, D, h), b[t] = h, i)
                if (u = {
                    values: l(M),
                    keys: r ? h : l("keys"),
                    entries: l(N)
                }, a)
                    for (s in u) !S && !f && s in d || _(d, s, u[s]);
                else v({
                    target: t,
                    proto: !0,
                    forced: S || f
                }, u);
            return u
        }
    }, function (e, t) {
        e.exports = function () {}
    }, function (e, t, n) {
        var o = n(13),
            i = n(53),
            r = n(9)("species");
        e.exports = function (e, t) {
            var n;
            return new(void 0 === (n = i(e) && ("function" == typeof (n = e.constructor) && (n ===
                Array || i(n.prototype)) || o(n) && null === (n = n[r])) ? void 0 : n) ? Array :
                n)(0 === t ? 0 : t)
        }
    }, function (e, t, n) {
        e.exports = n(186)
    }, function (e, t, n) {
        var o = n(48),
            n = "[" + n(72) + "]",
            i = RegExp("^" + n + n + "*"),
            r = RegExp(n + n + "*$"),
            n = function (t) {
                return function (e) {
                    e = String(o(e));
                    return 1 & t && (e = e.replace(i, "")), e = 2 & t ? e.replace(r, "") : e
                }
            };
        e.exports = {
            start: n(1),
            end: n(2),
            trim: n(3)
        }
    }, function (e, t, n) {
        e.exports = n(206)
    }, function (t, e, n) {
        var o = n(228),
            i = n(255);

        function r(e) {
            return t.exports = r = "function" == typeof o && "symbol" == typeof i ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof o && e.constructor === o && e !== o.prototype ?
                    "symbol" : typeof e
            }, t.exports.default = t.exports, t.exports.__esModule = !0, r(e)
        }
        t.exports = r, t.exports.default = t.exports, t.exports.__esModule = !0
    }, function (e, t, n) {
        n = n(9);
        t.f = n
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a = n(2).__importDefault(n(31)),
            i = (l.prototype.clickHandler = function (e) {}, l.prototype.active = function () {
                this._active = !0, this.$elem.addClass("w-e-active")
            }, l.prototype.unActive = function () {
                this._active = !1, this.$elem.removeClass("w-e-active")
            }, (0, i.default)(l.prototype, "isActive", {
                get: function () {
                    return this._active
                },
                enumerable: !1,
                configurable: !0
            }), l);

        function l(e, n) {
            var o = this;
            this.$elem = e, this.editor = n, this._active = !1, e.on("click", function (e) {
                var t;
                a.default.hideCurAllPanels(), (0, r.default)(t = n.txt.eventHooks.menuClickEvents).call(
                    t,
                    function (e) {
                        return e()
                    }), e.stopPropagation(), null != n.selection.getRange() && o.clickHandler(e)
            })
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            _ = o(n(56)),
            E = o(n(4)),
            b = o(n(26));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            C = n(6),
            S = i.__importDefault(n(134)),
            D = i.__importDefault(n(135)),
            n = (r.prototype.insertImg = function (e, t, n) {
                function o(e, t) {
                    return i.i18next.t((t = void 0 === t ? "validate." : t) + e)
                }
                var i = this.editor,
                    r = i.config,
                    a = t ? 'alt="' + t + '" ' : "",
                    l = n ? 'data-href="' + encodeURIComponent(n) + '" ' : "";
                i.cmd.do("insertHTML", '<img src="' + e + '" ' + a + l + 'style="max-width:100%;"/>'),
                    r.linkImgCallback(e, t, n);
                var u = document.createElement("img");
                u.onload = function () {
                    u = null
                }, u.onerror = function () {
                    r.customAlert(o("插入图片错误"), "error", "wangEditor: " + o("插入图片错误") + "，" + o(
                        "图片链接") + ' "' + e + '"，' + o("下载链接失败")), u = null
                }, u.onabort = function () {
                    return u = null
                }, u.src = e
            }, r.prototype.uploadImg = function (e) {
                var i, o, r, t, a, l, n, u, s, c, f, d, p, h, A, v, m, g, y, w, x = this;
                e.length && (i = this.editor, o = i.config, r = function (e) {
                    return i.i18next.t("validate." + e)
                }, g = o.uploadImgServer, t = o.uploadImgShowBase64, a = o.uploadImgMaxSize, l =
                    a / 1024 / 1024, n = o.uploadImgMaxLength, u = o.uploadFileName, s = o.uploadImgParams,
                    c = o.uploadImgParamsWithUrl, f = o.uploadImgHeaders, d = o.uploadImgHooks, p =
                    o.uploadImgTimeout, w = o.withCredentials, ((h = o.customUploadImg) || g || t) &&
                (A = [], v = [], C.arrForEach(e, function (e) {
                    var t, n = e.name,
                        o = e.size;
                    n && o && (t = i.config.uploadImgAccept.join("|"), !1 !== new RegExp(
                        ".(" + t + ")$", "i").test(n) ? a < o ? v.push("【" + n +
                        "】" + r("大于") + " " + l + "M") : A.push(e) : v.push("【" +
                        n + "】" + r("不是图片")))
                }), v.length ? o.customAlert(r("图片验证未通过") + ": \n" + v.join("\n"),
                    "warning") : 0 !== A.length ? A.length > n ? o.customAlert(r("一次最多上传") +
                    n + r("张图片"), "warning") : h && "function" == typeof h ? h(A, (0, _.default)
                (y = this.insertImg).call(y, this)) : (m = new FormData, (0, E.default)
                (A).call(A, function (e, t) {
                    var n = u || e.name;
                    1 < A.length && (n += t + 1), m.append(n, e)
                }), g ? (g = (y = g.split("#"))[0], y = y[1] || "", (0, E.default)(C).call(
                    C, s,
                    function (e, t) {
                        c && (0 < (0, b.default)(g).call(g, "?") ? g += "&" : g +=
                            "?", g = g + e + "=" + t), m.append(e, t)
                    }), y && (g += "#" + y), "string" == typeof (w = S.default(g, {
                    timeout: p,
                    formData: m,
                    headers: f,
                    withCredentials: !!w,
                    beforeSend: function (e) {
                        if (d.before) return d.before(e, i, A)
                    },
                    onTimeout: function (e) {
                        o.customAlert(r("上传图片超时"), "error"), d.timeout &&
                        d.timeout(e, i)
                    },
                    onProgress: function (e, t) {
                        var n = new D.default(i);
                        t.lengthComputable && (e = t.loaded / t.total,
                            n.show(e))
                    },
                    onError: function (e) {
                        o.customAlert(r("上传图片错误"), "error", r("上传图片错误") +
                            "，" + r("服务器返回状态") + ": " + e.status),
                        d.error && d.error(e, i)
                    },
                    onFail: function (e, t) {
                        o.customAlert(r("上传图片失败"), "error", r(
                            "上传图片返回结果错误") + ("，" + r("返回结果")) +
                            ": " + t), d.fail && d.fail(e, i, t)
                    },
                    onSuccess: function (e, t) {
                        if (d.customInsert) d.customInsert((0, _.default)
                        (n = x.insertImg).call(n, x), t, i);
                        else {
                            if ("0" != t.errno) return o.customAlert(r(
                                "上传图片失败"), "error", r(
                                "上传图片返回结果错误") + "，" + r(
                                "返回结果") + " errno=" + t.errno),
                                void(d.fail && d.fail(e, i, t));
                            var n = t.data;
                            (0, E.default)(n).call(n, function (e) {
                                "string" == typeof e ? x.insertImg(
                                    e) : x.insertImg(e.url,
                                    e.alt, e.href)
                            }), d.success && d.success(e, i, t)
                        }
                    }
                })) && o.customAlert(w, "error")) : t && C.arrForEach(e, function (e) {
                    var t = x,
                        n = new FileReader;
                    n.readAsDataURL(e), n.onload = function () {
                        var e;
                        this.result && (e = this.result.toString(), t.insertImg(
                            e, e))
                    }
                })) : o.customAlert(r("传入的文件不合法"), "warning")))
            }, r);

        function r(e) {
            this.editor = e
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(410)),
            u = o(n(4)),
            a = o(n(44));

        function l(e) {
            return !!e.length && "w-e-todo" === e.attr("class")
        }

        function s(e, t) {
            return 3 === e.nodeType ? e.nodeValue === t.nodeValue : e.contains(t)
        }

        function c(e, t, n) {
            void 0 === n && (n = !0);
            var o = e.nodeValue,
                i = null == o ? void 0 : (0, a.default)(o).call(o, 0, t);
            return o = null == o ? void 0 : (0, a.default)(o).call(o, t), n || (n = o, o = i, i = n), e.nodeValue =
                i, o
        }(0, i.default)(t, "__esModule", {
            value: !0
        }), t.dealTextNode = t.isAllTodo = t.isTodo = t.getCursorNextNode = void 0, t.isTodo = l, t.isAllTodo =
            function (e) {
                if (0 !== (e = e.selection.getSelectionRangeTopNodes()).length) return (0, r.default)(e).call(
                    e, l)
            }, t.getCursorNextNode = function n(e, o, i) {
            if (e.hasChildNodes()) {
                var r = e.cloneNode(),
                    a = !1;
                "" === o.nodeValue && (a = !0);
                var l = [];
                return (0, u.default)(e = e.childNodes).call(e, function (e) {
                    var t;
                    !s(e, o) && a && (r.appendChild(e.cloneNode(!0)), "BR" !== e.nodeName && l.push(
                        e)), s(e, o) && (1 !== e.nodeType || (t = n(e, o, i)) && "" !== t.textContent &&
                    null != r && r.appendChild(t), 3 === e.nodeType && o.isEqualNode(e) &&
                    (e = c(e, i), r.textContent = e), a = !0)
                }), (0, u.default)(l).call(l, function (e) {
                    e.remove()
                }), r
            }
        }, t.dealTextNode = c
    }, function (e, t, n) {
        "use strict";
        var o = n(0)(n(1));
        (0, o.default)(t, "__esModule", {
            value: !0
        });
        var i = n(430),
            o = ((0, o.default)(r.prototype, "size", {
                get: function () {
                    return [this.data.size, this.revokeData.size]
                },
                enumerable: !1,
                configurable: !0
            }), r.prototype.resetMaxSize = function (e) {
                this.data.resetMax(e), this.revokeData.resetMax(e)
            }, r.prototype.save = function (e) {
                return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(e),
                    this
            }, r.prototype.revoke = function (e) {
                this.isRe || (this.isRe = !0);
                var t = this.data.outstack();
                return !!t && (this.revokeData.instack(t), e(t), !0)
            }, r.prototype.restore = function (e) {
                this.isRe || (this.isRe = !0);
                var t = this.revokeData.outstack();
                return !!t && (this.data.instack(t), e(t), !0)
            }, r);

        function r(e) {
            this.maxSize = e, this.isRe = !1, this.data = new i.CeilStack(e), this.revokeData = new i.CeilStack(
                e)
        }
        t.default = o
    }, function (e, t, n) {
        var o = n(15),
            i = n(12),
            r = n(77);
        e.exports = !o && !i(function () {
            return 7 != Object.defineProperty(r("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (e, t, n) {
        var o = n(12),
            i = /#|\.prototype\./,
            n = function (e, t) {
                e = a[r(e)];
                return e == u || e != l && ("function" == typeof t ? o(t) : !!t)
            },
            r = n.normalize = function (e) {
                return String(e).replace(i, ".").toLowerCase()
            },
            a = n.data = {},
            l = n.NATIVE = "N",
            u = n.POLYFILL = "P";
        e.exports = n
    }, function (e, t, n) {
        var i = n(20),
            r = n(166);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var n, o = !1,
                e = {};
            try {
                (n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(e, []),
                    o = e instanceof Array
            } catch (e) {}
            return function (e, t) {
                return i(e), r(t), o ? n.call(e, t) : e.__proto__ = t, e
            }
        }() : void 0)
    }, function (e, t, n) {
        var a = n(16),
            l = n(27),
            u = n(81).indexOf,
            s = n(49);
        e.exports = function (e, t) {
            var n, o = l(e),
                i = 0,
                r = [];
            for (n in o) !a(s, n) && a(o, n) && r.push(n);
            for (; t.length > i;) a(o, n = t[i++]) && (~u(r, n) || r.push(n));
            return r
        }
    }, function (e, t, n) {
        n = n(28);
        e.exports = n("document", "documentElement")
    }, function (e, t, n) {
        var o = n(9),
            i = n(41),
            r = o("iterator"),
            a = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (i.Array === e || a[r] === e)
        }
    }, function (e, t, n) {
        n = n(84);
        e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }, function (e, t, n) {
        var o = n(68),
            i = n(41),
            r = n(9)("iterator");
        e.exports = function (e) {
            if (null != e) return e[r] || e["@@iterator"] || i[o(e)]
        }
    }, function (e, t, n) {
        var o = n(20);
        e.exports = function (e) {
            var t = e.return;
            if (void 0 !== t) return o(t.call(e)).value
        }
    }, function (e, t, n) {
        n = n(8);
        e.exports = n.Promise
    }, function (e, t, n) {
        var i = n(50);
        e.exports = function (e, t, n) {
            for (var o in t) n && n.unsafe && e[o] ? e[o] = t[o] : i(e, o, t[o], n);
            return e
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(28),
            i = n(18),
            r = n(9),
            a = n(15),
            l = r("species");
        e.exports = function (e) {
            var t = o(e),
                e = i.f;
            a && t && !t[l] && e(t, l, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    }, function (e, t, n) {
        var n = n(80),
            o = Function.toString;
        "function" != typeof n.inspectSource && (n.inspectSource = function (e) {
            return o.call(e)
        }), e.exports = n.inspectSource
    }, function (e, t, n) {
        var i = n(9)("iterator"),
            r = !1;
        try {
            var o = 0,
                a = {
                    next: function () {
                        return {
                            done: !!o++
                        }
                    },
                    return: function () {
                        r = !0
                    }
                };
            a[i] = function () {
                return this
            }, Array.from(a, function () {
                throw 2
            })
        } catch (e) {}
        e.exports = function (e, t) {
            if (!t && !r) return !1;
            var n = !1;
            try {
                var o = {};
                o[i] = function () {
                    return {
                        next: function () {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(o)
            } catch (e) {}
            return n
        }
    }, function (e, t, n) {
        var o = n(20),
            i = n(32),
            r = n(9)("species");
        e.exports = function (e, t) {
            var n, e = o(e).constructor;
            return void 0 === e || null == (n = o(e)[r]) ? t : i(n)
        }
    }, function (e, t, n) {
        function o(e) {
            var t;
            x.hasOwnProperty(e) && (t = x[e], delete x[e], t())
        }

        function i(e) {
            return function () {
                o(e)
            }
        }

        function r(e) {
            o(e.data)
        }
        var a, l = n(8),
            u = n(12),
            s = n(38),
            c = n(104),
            f = n(77),
            d = n(116),
            p = n(65),
            h = l.location,
            A = l.setImmediate,
            v = l.clearImmediate,
            m = l.process,
            g = l.MessageChannel,
            y = l.Dispatch,
            w = 0,
            x = {},
            _ = "onreadystatechange",
            n = function (e) {
                l.postMessage(e + "", h.protocol + "//" + h.host)
            };
        A && v || (A = function (e) {
            for (var t = [], n = 1; n < arguments.length;) t.push(arguments[n++]);
            return x[++w] = function () {
                ("function" == typeof e ? e : Function(e)).apply(void 0, t)
            }, a(w), w
        }, v = function (e) {
            delete x[e]
        }, p ? a = function (e) {
            m.nextTick(i(e))
        } : y && y.now ? a = function (e) {
            y.now(i(e))
        } : g && !d ? (g = (d = new g).port2, d.port1.onmessage = r, a = s(g.postMessage, g, 1)) :
            l.addEventListener && "function" == typeof postMessage && !l.importScripts && h && "file:" !==
            h.protocol && !u(n) ? (a = n, l.addEventListener("message", r, !1)) : a = _ in f("script") ?
                function (e) {
                    c.appendChild(f("script"))[_] = function () {
                        c.removeChild(this), o(e)
                    }
                } : function (e) {
                    setTimeout(i(e), 0)
                }), e.exports = {
            set: A,
            clear: v
        }
    }, function (e, t, n) {
        n = n(67);
        e.exports = /(?:iphone|ipod|ipad).*applewebkit/i.test(n)
    }, function (e, t, n) {
        var o = n(20),
            i = n(13),
            r = n(70);
        e.exports = function (e, t) {
            if (o(e), i(t) && t.constructor === e) return t;
            e = r.f(e);
            return (0, e.resolve)(t), e.promise
        }
    }, function (e, t, n) {
        "use strict";
        var o, i = n(12),
            r = n(78),
            a = n(17),
            l = n(16),
            u = n(9),
            s = n(39),
            c = u("iterator"),
            n = !1;
        [].keys && ("next" in (u = [].keys()) ? (u = r(r(u))) !== Object.prototype && (o = u) : n = !0);
        i = null == o || i(function () {
            var e = {};
            return o[c].call(e) !== e
        });
        i && (o = {}), s && !i || l(o, c) || a(o, c, function () {
            return this
        }), e.exports = {
            IteratorPrototype: o,
            BUGGY_SAFARI_ITERATORS: n
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a = n(2),
            l = a.__importDefault(n(3)),
            u = n(6),
            s = a.__importDefault(n(269)),
            c = a.__importDefault(n(284)),
            f = a.__importDefault(n(285)),
            d = a.__importDefault(n(286)),
            p = a.__importDefault(n(305)),
            h = a.__importDefault(n(416)),
            A = a.__importDefault(n(417)),
            v = a.__importDefault(n(418)),
            m = a.__importDefault(n(419)),
            g = a.__importStar(n(420)),
            y = a.__importDefault(n(423)),
            w = a.__importDefault(n(424)),
            x = a.__importDefault(n(425)),
            _ = a.__importDefault(n(427)),
            E = a.__importDefault(n(437)),
            b = a.__importDefault(n(23)),
            C = a.__importDefault(n(132)),
            S = a.__importDefault(n(24)),
            o = a.__importDefault(n(31)),
            i = a.__importDefault(n(35)),
            n = a.__importDefault(n(36)),
            D = 1,
            n = (M.prototype.initSelection = function (e) {
                A.default(this, e)
            }, M.prototype.create = function () {
                this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode ||
                (this.config.onchangeTimeout = 30), m.default(this), h.default(this), this.txt.init(),
                    this.menus.init(), g.default(this), this.initSelection(!0), v.default(this), this.change
                    .observe(), this.history.observe()
            }, M.prototype.beforeDestroy = function (e) {
                return this.beforeDestroyHooks.push(e), this
            }, M.prototype.destroy = function () {
                var e, t = this;
                (0, r.default)(e = this.beforeDestroyHooks).call(e, function (e) {
                    return e.call(t)
                }), this.$toolbarElem.remove(), this.$textContainerElem.remove()
            }, M.prototype.fullScreen = function () {
                g.setFullScreen(this)
            }, M.prototype.unFullScreen = function () {
                g.setUnFullScreen(this)
            }, M.prototype.scrollToHead = function (e) {
                y.default(this, e)
            }, M.registerMenu = function (e, t) {
                t && "function" == typeof t && (M.globalCustomMenuConstructorList[e] = t)
            }, M.$ = l.default, M.BtnMenu = b.default, M.DropList = C.default, M.DropListMenu = S.default,
                M.Panel = o.default, M.PanelMenu = i.default, M.Tooltip = n.default, M.globalCustomMenuConstructorList = {},
                M);

        function M(e, t) {
            if (this.beforeDestroyHooks = [], this.id = "wangEditor-" + D++, this.toolbarSelector = e, this
                .textSelector = t, null == e) throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");
            this.config = u.deepClone(s.default), this.$toolbarElem = l.default("<div></div>"), this.$textContainerElem =
                l.default("<div></div>"), this.$textElem = l.default("<div></div>"), this.toolbarElemId =
                "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !
                1, this.selection = new c.default(this), this.cmd = new f.default(this), this.txt = new d.default(
                this), this.menus = new p.default(this), this.zIndex = new w.default, this.change = new x
                .default(this), this.history = new _.default(this);
            t = E.default(this), e = t.disable, t = t.enable;
            this.disable = e, this.enable = t
        }
        t.default = n
    }, function (e, t, n) {
        e.exports = n(198)
    }, function (e, t, n) {
        "use strict";
        var f = n(5),
            d = n(8),
            p = n(122),
            h = n(12),
            A = n(17),
            v = n(40),
            m = n(86),
            g = n(13),
            y = n(42),
            w = n(18).f,
            x = n(29).forEach,
            _ = n(15),
            n = n(43),
            E = n.set,
            b = n.getterFor;
        e.exports = function (n, e, t) {
            var r, a, o = -1 !== n.indexOf("Map"),
                l = -1 !== n.indexOf("Weak"),
                i = o ? "set" : "add",
                u = d[n],
                s = u && u.prototype,
                c = {};
            return _ && "function" == typeof u && (l || s.forEach && !h(function () {
                (new u).entries().next()
            })) ? (r = e(function (e, t) {
                E(m(e, r, n), {
                    type: n,
                    collection: new u
                }), null != t && v(t, e[i], {
                    that: e,
                    AS_ENTRIES: o
                })
            }), a = b(n), x(["add", "clear", "delete", "forEach", "get", "has", "set", "keys",
                "values", "entries"], function (o) {
                var i = "add" == o || "set" == o;
                o in s && (!l || "clear" != o) && A(r.prototype, o, function (e, t) {
                    var n = a(this).collection;
                    if (!i && l && !g(e)) return "get" == o && void 0;
                    t = n[o](0 === e ? 0 : e, t);
                    return i ? this : t
                })
            }), l || w(r.prototype, "size", {
                configurable: !0,
                get: function () {
                    return a(this).collection.size
                }
            })) : (r = t.getConstructor(e, n, o, i), p.REQUIRED = !0), y(r, n, !1, !0), c[n] = r, f({
                global: !0,
                forced: !0
            }, c), l || t.setStrong(r, n, o), r
        }
    }, function (e, t, n) {
        function o(e) {
            l(e, c, {
                value: {
                    objectID: "O" + ++f,
                    weakData: {}
                }
            })
        }
        var i = n(49),
            r = n(13),
            a = n(16),
            l = n(18).f,
            u = n(61),
            s = n(201),
            c = u("meta"),
            f = 0,
            d = Object.isExtensible || function () {
                return !0
            },
            p = e.exports = {
                REQUIRED: !1,
                fastKey: function (e, t) {
                    if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!a(e, c)) {
                        if (!d(e)) return "F";
                        if (!t) return "E";
                        o(e)
                    }
                    return e[c].objectID
                },
                getWeakData: function (e, t) {
                    if (!a(e, c)) {
                        if (!d(e)) return !0;
                        if (!t) return !1;
                        o(e)
                    }
                    return e[c].weakData
                },
                onFreeze: function (e) {
                    return s && p.REQUIRED && d(e) && !a(e, c) && o(e), e
                }
            };
        i[c] = !0
    }, function (e, t, n) {
        "use strict";
        var s = n(18).f,
            c = n(62),
            f = n(110),
            d = n(38),
            p = n(86),
            h = n(40),
            a = n(88),
            l = n(111),
            A = n(15),
            v = n(122).fastKey,
            n = n(43),
            m = n.set,
            g = n.getterFor;
        e.exports = {
            getConstructor: function (e, n, o, i) {
                function r(e, t, n) {
                    var o, i = l(e),
                        r = u(e, t);
                    return r ? r.value = n : (i.last = r = {
                        index: o = v(t, !0),
                        key: t,
                        value: n,
                        previous: n = i.last,
                        next: void 0,
                        removed: !1
                    }, i.first || (i.first = r), n && (n.next = r), A ? i.size++ : e.size++,
                    "F" !== o && (i.index[o] = r)), e
                }
                var a = e(function (e, t) {
                        p(e, a, n), m(e, {
                            type: n,
                            index: c(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), A || (e.size = 0), null != t && h(t, e[i], {
                            that: e,
                            AS_ENTRIES: o
                        })
                    }),
                    l = g(n),
                    u = function (e, t) {
                        var n, o = l(e),
                            e = v(t);
                        if ("F" !== e) return o.index[e];
                        for (n = o.first; n; n = n.next)
                            if (n.key == t) return n
                    };
                return f(a.prototype, {
                    clear: function () {
                        for (var e = l(this), t = e.index, n = e.first; n;) n.removed = !
                            0, n.previous && (n.previous = n.previous.next = void 0),
                            delete t[n.index], n = n.next;
                        e.first = e.last = void 0, A ? e.size = 0 : this.size = 0
                    },
                    delete: function (e) {
                        var t, n = l(this),
                            o = u(this, e);
                        return o && (t = o.next, e = o.previous, delete n.index[o.index],
                            o.removed = !0, e && (e.next = t), t && (t.previous = e),
                        n.first == o && (n.first = t), n.last == o && (n.last =
                            e), A ? n.size-- : this.size--), !!o
                    },
                    forEach: function (e) {
                        for (var t, n = l(this), o = d(e, 1 < arguments.length ?
                            arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                            for (o(t.value, t.key, this); t && t.removed;) t = t.previous
                    },
                    has: function (e) {
                        return !!u(this, e)
                    }
                }), f(a.prototype, o ? {
                    get: function (e) {
                        e = u(this, e);
                        return e && e.value
                    },
                    set: function (e, t) {
                        return r(this, 0 === e ? 0 : e, t)
                    }
                } : {
                    add: function (e) {
                        return r(this, e = 0 === e ? 0 : e, e)
                    }
                }), A && s(a.prototype, "size", {
                    get: function () {
                        return l(this).size
                    }
                }), a
            },
            setStrong: function (e, t, n) {
                var o = t + " Iterator",
                    i = g(t),
                    r = g(o);
                a(e, t, function (e, t) {
                    m(this, {
                        type: o,
                        target: e,
                        state: i(e),
                        kind: t,
                        last: void 0
                    })
                }, function () {
                    for (var e = r(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous;
                    return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" ==
                    t ? {
                        value: n.key,
                        done: !1
                    } : "values" == t ? {
                        value: n.value,
                        done: !1
                    } : {
                        value: [n.key, n.value],
                        done: !1
                    } : {
                        value: e.target = void 0,
                        done: !0
                    }
                }, n ? "entries" : "values", !n, !0), l(t)
            }
        }
    }, function (e, t, n) {
        var o = n(103),
            i = n(83).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return o(e, i)
        }
    }, function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, function (e, t, n) {
        n(11)("iterator")
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = {
            zIndex: 1e4
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.getPasteImgs = t.getPasteHtml = t.getPasteText = void 0;
        var i = n(2),
            a = n(6),
            l = i.__importDefault(n(296));

        function u(e) {
            var t = e.clipboardData,
                e = "",
                e = null == t ? window.clipboardData && window.clipboardData.getData("text") : t.getData(
                    "text/plain");
            return a.replaceHtmlSymbol(e)
        }
        t.getPasteText = u, t.getPasteHtml = function (e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = !1);
            var o = e.clipboardData,
                i = "";
            if (!(i = o ? o.getData("text/html") : i)) {
                e = u(e);
                if (!e) return "";
                i = "<p>" + e + "</p>"
            }
            return i = l.default(i, t, n)
        }, t.getPasteImgs = function (e) {
            var o = [];
            return u(e) || (e = null === (e = e.clipboardData) || void 0 === e ? void 0 : e.items) && (
                0, r.default)(a).call(a, e, function (e, t) {
                var n = t.type;
                /image/i.test(n) && o.push(t.getAsFile())
            }), o
        }
    }, function (e, t, n) {
        e.exports = n(298)
    }, function (e, t, n) {
        e.exports = n(306)
    }, function (e, t, n) {
        e.exports = n(310)
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            l = o(n(4)),
            u = o(n(45));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var s = n(2).__importDefault(n(3)),
            c = n(7),
            i = (r.prototype.show = function () {
                this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
                var e, t, n = this.menu.$elem,
                    o = this.$container;
                this._show || (this.rendered ? o.show() : (e = n.getBoundingClientRect().height || 0, t =
                    this.conf.width || 100, o.css("margin-top", e + "px").css("width", t + "px"),
                    n.append(o), this.rendered = !0), this._show = !0)
            }, r.prototype.hide = function () {
                var e = this.$container;
                this._show && (e.hide(), this._show = !1)
            }, (0, i.default)(r.prototype, "isShow", {
                get: function () {
                    return this._show
                },
                enumerable: !1,
                configurable: !0
            }), r);

        function r(e, t) {
            var o = this;
            this.hideTimeoutId = 0, this.menu = e, this.conf = t;
            var n = s.default('<div class="w-e-droplist"></div>'),
                i = s.default("<p>" + t.title + "</p>");
            i.addClass("w-e-dp-title"), n.append(i);
            var e = t.list || [],
                i = t.type || "list",
                r = t.clickHandler || c.EMPTY_FN,
                a = s.default('<ul class="' + ("list" === i ? "w-e-list" : "w-e-block") + '"></ul>');
            (0, l.default)(e).call(e, function (e) {
                var t = e.$elem,
                    n = e.value,
                    e = s.default('<li class="w-e-item"></li>');
                t && (e.append(t), a.append(e), e.on("click", function (e) {
                    r(n), e.stopPropagation(), o.hideTimeoutId = (0, u.default)(
                        function () {
                            o.hide()
                        })
                }))
            }), n.append(a), n.on("mouseleave", function () {
                o.hideTimeoutId = (0, u.default)(function () {
                    o.hide()
                })
            }), this.$container = n, this.rendered = !1, this._show = !1
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = function (e) {
            return !(null == (e = e.selection.getSelectionContainerElem()) || !e.length) && "A" === e.getNodeName()
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(94)),
            r = o(n(1)),
            a = o(n(4));
        (0, r.default)(t, "__esModule", {
            value: !0
        });
        var l = n(6);
        t.default = function (e, n) {
            var o = new XMLHttpRequest;
            if (o.open("POST", e), o.timeout = n.timeout || 1e4, o.ontimeout = function () {
                console.error("wangEditor - 请求超时"), n.onTimeout && n.onTimeout(o)
            }, o.upload && (o.upload.onprogress = function (e) {
                var t = e.loaded / e.total;
                n.onProgress && n.onProgress(t, e)
            }), n.headers && (0, a.default)(l).call(l, n.headers, function (e, t) {
                o.setRequestHeader(e, t)
            }), o.withCredentials = !!n.withCredentials, n.beforeSend) {
                e = n.beforeSend(o);
                if (e && "object" === (0, i.default)(e) && e.prevent) return e.msg
            }
            return o.onreadystatechange = function () {
                if (4 === o.readyState) {
                    var t = o.status;
                    if (!(t < 200 || 300 <= t && t < 400)) {
                        if (400 <= t) return console.error("wangEditor - XHR 报错，状态码 " + t), void(n.onError &&
                            n.onError(o));
                        var e, t = o.responseText;
                        if ("object" !== (0, i.default)(t)) try {
                            e = JSON.parse(t)
                        } catch (e) {
                            return console.error("wangEditor - 返回结果不是 JSON 格式", t), void(n.onFail &&
                                n.onFail(o, t))
                        } else e = t;
                        n.onSuccess(o, e)
                    }
                }
            }, o.send(n.formData || null), o
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(342)),
            a = o(n(45));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var l = n(2).__importDefault(n(3)),
            n = (u.prototype.show = function (e) {
                var t, n = this;
                this.isShow || (this.isShow = !0, t = this.$bar, this.$textContainer.append(t), 100 < (
                    0, r.default)() - this.time && e <= 1 && (t.css("width", 100 * e + "%"),
                    this.time = (0, r.default)()), (e = this.timeoutId) && clearTimeout(e),
                    this.timeoutId = (0, a.default)(function () {
                        n.hide()
                    }, 500))
            }, u.prototype.hide = function () {
                this.$bar.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0
            }, u);

        function u(e) {
            this.editor = e, this.$textContainer = e.$textContainerElem, this.$bar = l.default(
                '<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId =
                0
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.ListType = void 0;
        var i, o = n(2),
            r = o.__importDefault(n(3)),
            a = o.__importDefault(n(24)),
            u = n(46),
            s = o.__importStar(n(370));
        (n = i = t.ListType || (t.ListType = {})).OrderedList = "OL", n.UnorderedList = "UL";
        var l, o = (l = a.default, o.__extends(c, l), c.prototype.command = function (e) {
            void 0 !== this.editor.selection.getSelectionContainerElem() && (this.handleSelectionRangeNodes(
                e), this.tryChangeActive())
        }, c.prototype.validator = function (e, t, n) {
            return !(!e.length || !t.length || n.equal(e) || n.equal(t))
        }, c.prototype.handleSelectionRangeNodes = function (e) {
            var t, n = this.editor,
                o = n.selection,
                i = e.toLowerCase(),
                r = o.getSelectionContainerElem(),
                a = o.getSelectionStartElem().getNodeTop(n),
                l = o.getSelectionEndElem().getNodeTop(n);
            this.validator(a, l, n.$textElem) && (o = null == (t = o.getRange()) ? void 0 : t.collapsed,
            n.$textElem.equal(r) || (r = r.getNodeTop(n)), i = {
                editor: n,
                listType: e,
                listTarget: i,
                $selectionElem: r,
                $startElem: a,
                $endElem: l
            }, l = this.isOrderElem(r) ? s.ClassType.Wrap : this.isOrderElem(a) && this.isOrderElem(
                l) ? s.ClassType.Join : this.isOrderElem(a) ? s.ClassType.StartJoin : this.isOrderElem(
                l) ? s.ClassType.EndJoin : s.ClassType.Other, t = new s.default(s.createListHandle(
                l, i, t)), u.updateRange(n, t.getSelectionRangeElem(), !!o))
        }, c.prototype.isOrderElem = function (e) {
            e = e.getNodeName();
            return e === i.OrderedList || e === i.UnorderedList
        }, c.prototype.tryChangeActive = function () {}, c);

        function c(e) {
            var t = this,
                n = r.default(
                    '<div class="w-e-menu" data-title="序列">\n                <i class="w-e-icon-list2"></i>\n            </div>'
                ),
                o = {
                    width: 130,
                    title: "序列",
                    type: "list",
                    list: [{
                        $elem: r.default(
                            '\n                        <p>\n                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>\n                            ' +
                            e.i18next.t("menus.dropListMenu.list.无序列表") +
                            "\n                        <p>"),
                        value: i.UnorderedList
                    }, {
                        $elem: r.default(
                            '<p>\n                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>\n                            ' +
                            e.i18next.t("menus.dropListMenu.list.有序列表") +
                            "\n                        <p>"),
                        value: i.OrderedList
                    }],
                    clickHandler: function (e) {
                        t.command(e)
                    }
                };
            return t = l.call(this, n, e, o) || this
        }
        t.default = o
    }, function (e, t, n) {
        e.exports = n(394)
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = function (e) {
            return !(null == (e = e.selection.getSelectionContainerElem()) || !e.length) && !("CODE" !=
                e.getNodeName() && "PRE" != e.getNodeName() && "CODE" != e.parent().getNodeName() &&
                "PRE" != e.parent().getNodeName() && !/hljs/.test(e.parent().attr("class")))
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(30));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.todo = void 0;
        var a = n(2).__importDefault(n(3)),
            l = (u.prototype.init = function () {
                var e = this,
                    t = this.getInput(),
                    n = this.$child,
                    o = this.getInputContainer();
                n && n.insertAfter(o), t.on("click", function () {
                    e.checked ? null != t && t.removeAttr("checked") : null != t && t.attr(
                        "checked", ""), e.checked = !e.checked
                })
            }, u.prototype.getInput = function () {
                var e = this.$todo;
                return (0, r.default)(e).call(e, "input")
            }, u.prototype.getInputContainer = function () {
                return this.getInput().parent()
            }, u.prototype.getTodo = function () {
                return this.$todo
            }, u);

        function u(e) {
            this.template =
                '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>',
                this.checked = !1, this.$todo = a.default(this.template), this.$child = null === (e = null ==
            e ? void 0 : e.childNodes()) || void 0 === e ? void 0 : e.clone(!0)
        }
        t.todo = l, t.default = function (e) {
            return (e = new l(e)).init(), e
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2);
        n(145), n(147), n(151), n(153), n(155), n(157), n(159);
        var i = o.__importDefault(n(119));
        o.__exportStar(n(440), t);
        try {
            document
        } catch (e) {
            throw new Error("请在浏览器环境下运行")
        }
        t.default = i.default
    }, function (e, t, n) {
        n = n(142);
        e.exports = n
    }, function (e, t, n) {
        n(143);
        var o = n(10).Object,
            e = e.exports = function (e, t, n) {
                return o.defineProperty(e, t, n)
            };
        o.defineProperty.sham && (e.sham = !0)
    }, function (e, t, n) {
        var o = n(5),
            i = n(15);
        o({
            target: "Object",
            stat: !0,
            forced: !i,
            sham: !i
        }, {
            defineProperty: n(18).f
        })
    }, function (e, t) {
        var n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    }, function (e, t, n) {
        var o = n(21),
            i = n(146),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        (t = n(22)(!1)).push([e.i,
            '.w-e-toolbar,\n.w-e-text-container,\n.w-e-menu-panel {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  background-color: #fff;\n  /*表情菜单样式*/\n  /*分割线样式*/\n}\n.w-e-toolbar h1,\n.w-e-text-container h1,\n.w-e-menu-panel h1 {\n  font-size: 2em !important;\n}\n.w-e-toolbar h2,\n.w-e-text-container h2,\n.w-e-menu-panel h2 {\n  font-size: 1.5em !important;\n}\n.w-e-toolbar h3,\n.w-e-text-container h3,\n.w-e-menu-panel h3 {\n  font-size: 1.17em !important;\n}\n.w-e-toolbar h4,\n.w-e-text-container h4,\n.w-e-menu-panel h4 {\n  font-size: 1em !important;\n}\n.w-e-toolbar h5,\n.w-e-text-container h5,\n.w-e-menu-panel h5 {\n  font-size: 0.83em !important;\n}\n.w-e-toolbar p,\n.w-e-text-container p,\n.w-e-menu-panel p {\n  font-size: 1em !important;\n}\n.w-e-toolbar .eleImg,\n.w-e-text-container .eleImg,\n.w-e-menu-panel .eleImg {\n  cursor: pointer;\n  display: inline-block;\n  font-size: 18px;\n  padding: 0 3px;\n}\n.w-e-toolbar *,\n.w-e-text-container *,\n.w-e-menu-panel * {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n.w-e-toolbar hr,\n.w-e-text-container hr,\n.w-e-menu-panel hr {\n  cursor: pointer;\n  display: block;\n  height: 0px;\n  border: 0;\n  border-top: 3px solid #ccc;\n  margin: 20px 0;\n}\n.w-e-clear-fix:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.w-e-drop-list-item {\n  position: relative;\n  top: 1px;\n  padding-right: 7px;\n  color: #333 !important;\n}\n.w-e-drop-list-tl {\n  padding-left: 10px;\n  text-align: left;\n}\n',
            ""]), e.exports = t
    }, function (e, t, n) {
        var o = n(21),
            i = n(148),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        var o = n(22),
            i = n(149),
            n = n(150);
        t = o(!1);
        n = i(n);
        t.push([e.i, "@font-face {\n  font-family: 'w-e-icon';\n  src: url(" + n +
        ') format(\'truetype\');\n  font-weight: normal;\n  font-style: normal;\n}\n[class^="w-e-icon-"],\n[class*=" w-e-icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'w-e-icon\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.w-e-icon-close:before {\n  content: "\\f00d";\n}\n.w-e-icon-upload2:before {\n  content: "\\e9c6";\n}\n.w-e-icon-trash-o:before {\n  content: "\\f014";\n}\n.w-e-icon-header:before {\n  content: "\\f1dc";\n}\n.w-e-icon-pencil2:before {\n  content: "\\e906";\n}\n.w-e-icon-paint-brush:before {\n  content: "\\f1fc";\n}\n.w-e-icon-image:before {\n  content: "\\e90d";\n}\n.w-e-icon-play:before {\n  content: "\\e912";\n}\n.w-e-icon-location:before {\n  content: "\\e947";\n}\n.w-e-icon-undo:before {\n  content: "\\e965";\n}\n.w-e-icon-redo:before {\n  content: "\\e966";\n}\n.w-e-icon-quotes-left:before {\n  content: "\\e977";\n}\n.w-e-icon-list-numbered:before {\n  content: "\\e9b9";\n}\n.w-e-icon-list2:before {\n  content: "\\e9bb";\n}\n.w-e-icon-link:before {\n  content: "\\e9cb";\n}\n.w-e-icon-happy:before {\n  content: "\\e9df";\n}\n.w-e-icon-bold:before {\n  content: "\\ea62";\n}\n.w-e-icon-underline:before {\n  content: "\\ea63";\n}\n.w-e-icon-italic:before {\n  content: "\\ea64";\n}\n.w-e-icon-strikethrough:before {\n  content: "\\ea65";\n}\n.w-e-icon-table2:before {\n  content: "\\ea71";\n}\n.w-e-icon-paragraph-left:before {\n  content: "\\ea77";\n}\n.w-e-icon-paragraph-center:before {\n  content: "\\ea78";\n}\n.w-e-icon-paragraph-right:before {\n  content: "\\ea79";\n}\n.w-e-icon-paragraph-justify:before {\n  content: "\\ea7a";\n}\n.w-e-icon-terminal:before {\n  content: "\\f120";\n}\n.w-e-icon-page-break:before {\n  content: "\\ea68";\n}\n.w-e-icon-cancel-circle:before {\n  content: "\\ea0d";\n}\n.w-e-icon-font:before {\n  content: "\\ea5c";\n}\n.w-e-icon-text-heigh:before {\n  content: "\\ea5f";\n}\n.w-e-icon-paint-format:before {\n  content: "\\e90c";\n}\n.w-e-icon-indent-increase:before {\n  content: "\\ea7b";\n}\n.w-e-icon-indent-decrease:before {\n  content: "\\ea7c";\n}\n.w-e-icon-row-height:before {\n  content: "\\e9be";\n}\n.w-e-icon-fullscreen_exit:before {\n  content: "\\e900";\n}\n.w-e-icon-fullscreen:before {\n  content: "\\e901";\n}\n.w-e-icon-split-line:before {\n  content: "\\ea0b";\n}\n.w-e-icon-checkbox-checked:before {\n  content: "\\ea52";\n}\n',
            ""]), e.exports = t
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            return t = t || {}, "string" != typeof (e = e && e.__esModule ? e.default : e) ? e : (
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash),
                    /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(
                        /\n/g, "\\n"), '"') : e)
        }
    }, function (e, t, n) {
        "use strict";
        n.r(t), t.default =
            "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    }, function (e, t, n) {
        var o = n(21),
            i = n(152),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        (t = n(22)(!1)).push([e.i,
            '.w-e-toolbar {\n  display: flex;\n  padding: 0 6px;\n  flex-wrap: wrap;\n  position: relative;\n  /* 单个菜单 */\n}\n.w-e-toolbar .w-e-menu {\n  position: relative;\n  display: flex;\n  width: 40px;\n  height: 40px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  cursor: pointer;\n}\n.w-e-toolbar .w-e-menu i {\n  color: #999;\n}\n.w-e-toolbar .w-e-menu:hover {\n  background-color: #F6F6F6;\n}\n.w-e-toolbar .w-e-menu:hover i {\n  color: #333;\n}\n.w-e-toolbar .w-e-active i {\n  color: #1e88e5;\n}\n.w-e-toolbar .w-e-active:hover i {\n  color: #1e88e5;\n}\n.w-e-menu-tooltip {\n  position: absolute;\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  justify-content: center;\n  align-items: center;\n}\n.w-e-menu-tooltip-up::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-menu-tooltip-down::after {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-menu-tooltip-item-wrapper {\n  font-size: 14px;\n  margin: 0 5px;\n}\n',
            ""]), e.exports = t
    }, function (e, t, n) {
        var o = n(21),
            i = n(154),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        (t = n(22)(!1)).push([e.i,
            '.w-e-text-container {\n  position: relative;\n  height: 100%;\n}\n.w-e-text-container .w-e-progress {\n  position: absolute;\n  background-color: #1e88e5;\n  top: 0;\n  left: 0;\n  height: 1px;\n}\n.w-e-text-container .placeholder {\n  color: #D4D4D4;\n  position: absolute;\n  font-size: 11pt;\n  line-height: 22px;\n  left: 10px;\n  top: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: -1;\n}\n.w-e-text {\n  padding: 0 10px;\n  overflow-y: auto;\n}\n.w-e-text p,\n.w-e-text h1,\n.w-e-text h2,\n.w-e-text h3,\n.w-e-text h4,\n.w-e-text h5,\n.w-e-text table,\n.w-e-text pre {\n  margin: 10px 0;\n  line-height: 1.5;\n}\n.w-e-text ul,\n.w-e-text ol {\n  margin: 10px 0 10px 20px;\n}\n.w-e-text blockquote {\n  display: block;\n  border-left: 8px solid #d0e5f2;\n  padding: 5px 10px;\n  margin: 10px 0;\n  line-height: 1.4;\n  font-size: 100%;\n  background-color: #f1f1f1;\n}\n.w-e-text code {\n  display: inline-block;\n  background-color: #f1f1f1;\n  border-radius: 3px;\n  padding: 3px 5px;\n  margin: 0 3px;\n}\n.w-e-text pre code {\n  display: block;\n}\n.w-e-text table {\n  border-top: 1px solid #ccc;\n  border-left: 1px solid #ccc;\n}\n.w-e-text table td,\n.w-e-text table th {\n  border-bottom: 1px solid #ccc;\n  border-right: 1px solid #ccc;\n  padding: 3px 5px;\n  min-height: 30px;\n}\n.w-e-text table th {\n  border-bottom: 2px solid #ccc;\n  text-align: center;\n  background-color: #f1f1f1;\n}\n.w-e-text:focus {\n  outline: none;\n}\n.w-e-text img {\n  cursor: pointer;\n}\n.w-e-text img:hover {\n  box-shadow: 0 0 5px #333;\n}\n.w-e-text .w-e-todo {\n  margin: 0 0 0 20px;\n}\n.w-e-text .w-e-todo li {\n  list-style: none;\n  font-size: 1em;\n}\n.w-e-text .w-e-todo li span:nth-child(1) {\n  position: relative;\n  left: -18px;\n}\n.w-e-text .w-e-todo li span:nth-child(1) input {\n  position: absolute;\n  margin-right: 3px;\n}\n.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {\n  top: 50%;\n  margin-top: -6px;\n}\n.w-e-tooltip {\n  position: absolute;\n  display: flex;\n  color: #f1f1f1;\n  background-color: rgba(0, 0, 0, 0.75);\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  padding: 4px 5px 6px;\n  justify-content: center;\n  align-items: center;\n}\n.w-e-tooltip-up::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-top-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-down::after {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border: 5px solid rgba(0, 0, 0, 0);\n  border-bottom-color: rgba(0, 0, 0, 0.73);\n}\n.w-e-tooltip-item-wrapper {\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0 5px;\n}\n.w-e-tooltip-item-wrapper:hover {\n  color: #ccc;\n  text-decoration: underline;\n}\n',
            ""]), e.exports = t
    }, function (e, t, n) {
        var o = n(21),
            i = n(156),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        (t = n(22)(!1)).push([e.i,
            '.w-e-menu .w-e-panel-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border: 1px solid #ccc;\n  border-top: 0;\n  box-shadow: 1px 1px 2px #ccc;\n  color: #333;\n  background-color: #fff;\n  text-align: left;\n  /* 为 emotion panel 定制的样式 */\n  /* 上传图片、上传视频的 panel 定制样式 */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 5px;\n  margin: 2px 5px 0 0;\n  cursor: pointer;\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-close:hover {\n  color: #333;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title {\n  list-style: none;\n  display: flex;\n  font-size: 14px;\n  margin: 2px 10px 0 10px;\n  border-bottom: 1px solid #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {\n  padding: 3px 5px;\n  color: #999;\n  cursor: pointer;\n  margin: 0 3px;\n  position: relative;\n  top: 1px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {\n  color: #333;\n  border-bottom: 1px solid #333;\n  cursor: default;\n  font-weight: 700;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content {\n  padding: 10px 15px 10px 15px;\n  font-size: 16px;\n  /* 输入框的样式 */\n  /* 按钮的样式 */\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {\n  outline: none;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {\n  width: 100%;\n  border: 1px solid #ccc;\n  padding: 5px;\n  margin-top: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {\n  border-color: #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {\n  border: none;\n  border-bottom: 1px solid #ccc;\n  font-size: 14px;\n  height: 20px;\n  color: #333;\n  text-align: left;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {\n  width: 30px;\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {\n  border-bottom: 2px solid #1e88e5;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {\n  font-size: 14px;\n  color: #1e88e5;\n  border: none;\n  padding: 5px 10px;\n  background-color: #fff;\n  cursor: pointer;\n  border-radius: 3px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {\n  float: left;\n  margin-right: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {\n  float: right;\n  margin-left: 10px;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {\n  color: #999;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {\n  color: #c24f4a;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {\n  background-color: #f1f1f1;\n}\n.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {\n  content: "";\n  display: table;\n  clear: both;\n}\n.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {\n  cursor: pointer;\n  font-size: 18px;\n  padding: 0 3px;\n  display: inline-block;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container,\n.w-e-menu .w-e-panel-container .w-e-up-video-container {\n  text-align: center;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,\n.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {\n  display: inline-block;\n  color: #999;\n  cursor: pointer;\n  font-size: 60px;\n  line-height: 1;\n}\n.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,\n.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {\n  color: #333;\n}\n',
            ""]), e.exports = t
    }, function (e, t, n) {
        var o = n(21),
            i = n(158),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        (t = n(22)(!1)).push([e.i,
            ".w-e-toolbar .w-e-droplist {\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #fff;\n  border: 1px solid #f1f1f1;\n  border-right-color: #ccc;\n  border-bottom-color: #ccc;\n}\n.w-e-toolbar .w-e-droplist .w-e-dp-title {\n  text-align: center;\n  color: #999;\n  line-height: 2;\n  border-bottom: 1px solid #f1f1f1;\n  font-size: 13px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list {\n  list-style: none;\n  line-height: 1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {\n  color: #333;\n  padding: 5px 0;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block {\n  list-style: none;\n  text-align: left;\n  padding: 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {\n  display: inline-block;\n  padding: 3px 5px;\n}\n.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {\n  background-color: #f1f1f1;\n}\n",
            ""]), e.exports = t
    }, function (e, t, n) {
        "use strict";
        n = n(0)(n(160));
        Element.prototype.matches || (Element.prototype.matches = function (e) {
            for (var t = this.ownerDocument.querySelectorAll(e), n = t.length; 0 <= n && t.item(n) !==
            this; n--);
            return -1 < n
        }), n.default || (window.Promise = n.default)
    }, function (e, t, n) {
        e.exports = n(161)
    }, function (e, t, n) {
        n = n(162);
        e.exports = n
    }, function (e, t, n) {
        n(163), n(69), n(168), n(174), n(175), n(176), n(51), n(52);
        n = n(10);
        e.exports = n.Promise
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(78),
            r = n(102),
            a = n(62),
            l = n(17),
            u = n(37),
            s = n(40),
            c = function (e, t) {
                var n = this;
                if (!(n instanceof c)) return new c(e, t);
                r && (n = r(new Error(void 0), i(n))), void 0 !== t && l(n, "message", String(t));
                t = [];
                return s(e, t.push, {
                    that: t
                }), l(n, "errors", t), n
            };
        c.prototype = a(Error.prototype, {
            constructor: u(5, c),
            message: u(5, ""),
            name: u(5, "AggregateError")
        }), o({
            global: !0
        }, {
            AggregateError: c
        })
    }, function (e, t, n) {
        var o = n(8),
            i = n(17);
        e.exports = function (t, n) {
            try {
                i(o, t, n)
            } catch (e) {
                o[t] = n
            }
            return n
        }
    }, function (e, t, n) {
        n = n(12);
        e.exports = !n(function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })
    }, function (e, t, n) {
        var o = n(13);
        e.exports = function (e) {
            if (!o(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        }
    }, function (e, t, n) {
        var o = n(15),
            a = n(18),
            l = n(20),
            u = n(63);
        e.exports = o ? Object.defineProperties : function (e, t) {
            l(e);
            for (var n, o = u(t), i = o.length, r = 0; r < i;) a.f(e, n = o[r++], t[n]);
            return e
        }
    }, function (e, t, n) {
        "use strict";

        function h(e) {
            var t;
            return !(!x(e) || "function" != typeof (t = e.then)) && t
        }

        function i(f, d) {
            var p;
            f.notified || (f.notified = !0, p = f.reactions, N(function () {
                for (var e = f.value, t = 1 == f.state, n = 0; p.length > n;) {
                    var o, i, r, a = p[n++],
                        l = t ? a.ok : a.fail,
                        u = a.resolve,
                        s = a.reject,
                        c = a.domain;
                    try {
                        l ? (t || (2 === f.rejection && ne(f), f.rejection = 1), !0 === l ? o =
                            e : (c && c.enter(), o = l(e), c && (c.exit(), r = !0)), o ===
                        a.promise ? s($("Promise-chain cycle")) : (i = h(o)) ? i.call(o,
                            u, s) : u(o)) : s(e)
                    } catch (e) {
                        c && !r && c.exit(), s(e)
                    }
                }
                f.reactions = [], f.notified = !1, d && !f.rejection && ee(f)
            }))
        }

        function r(e, t, n) {
            var o, i;
            q ? ((o = V.createEvent("Event")).promise = t, o.reason = n, o.initEvent(e, !1, !0), p.dispatchEvent(
                o)) : o = {
                promise: t,
                reason: n
            }, !X && (i = p["on" + e]) ? i(o) : e === Z && T("Unhandled promise rejection", n)
        }

        function a(t, n, o) {
            return function (e) {
                t(n, e, o)
            }
        }

        function l(e, t, n) {
            e.done || (e.done = !0, (e = n ? n : e).value = t, e.state = 2, i(e, !0))
        }
        var o, u, s, c, f = n(5),
            d = n(39),
            p = n(8),
            A = n(28),
            v = n(109),
            m = n(50),
            g = n(110),
            y = n(42),
            w = n(111),
            x = n(13),
            _ = n(32),
            E = n(86),
            b = n(112),
            C = n(40),
            S = n(113),
            D = n(114),
            M = n(115).set,
            N = n(170),
            k = n(117),
            T = n(172),
            B = n(70),
            I = n(87),
            R = n(43),
            P = n(101),
            H = n(9),
            F = n(65),
            L = n(66),
            Q = H("species"),
            O = "Promise",
            U = R.get,
            j = R.set,
            Y = R.getterFor(O),
            z = v,
            $ = p.TypeError,
            V = p.document,
            G = p.process,
            J = A("fetch"),
            K = B.f,
            W = K,
            q = !!(V && V.createEvent && p.dispatchEvent),
            X = "function" == typeof PromiseRejectionEvent,
            Z = "unhandledrejection",
            P = P(O, function () {
                if (!(b(z) !== String(z))) {
                    if (66 === L) return !0;
                    if (!F && !X) return !0
                }
                if (d && !z.prototype.finally) return !0;
                if (51 <= L && /native code/.test(z)) return !1;

                function e(e) {
                    e(function () {}, function () {})
                }
                var t = z.resolve(1);
                return (t.constructor = {})[Q] = e, !(t.then(function () {}) instanceof e)
            }),
            S = P || !S(function (e) {
                z.all(e).catch(function () {})
            }),
            ee = function (i) {
                M.call(p, function () {
                    var e, t = i.facade,
                        n = i.value,
                        o = te(i);
                    if (o && (e = I(function () {
                        F ? G.emit("unhandledRejection", n, t) : r(Z, t, n)
                    }), i.rejection = F || te(i) ? 2 : 1, e.error)) throw e.value
                })
            },
            te = function (e) {
                return 1 !== e.rejection && !e.parent
            },
            ne = function (t) {
                M.call(p, function () {
                    var e = t.facade;
                    F ? G.emit("rejectionHandled", e) : r("rejectionhandled", e, t.value)
                })
            },
            oe = function (n, e, t) {
                if (!n.done) {
                    n.done = !0, t && (n = t);
                    try {
                        if (n.facade === e) throw $("Promise can't be resolved itself");
                        var o = h(e);
                        o ? N(function () {
                            var t = {
                                done: !1
                            };
                            try {
                                o.call(e, a(oe, t, n), a(l, t, n))
                            } catch (e) {
                                l(t, e, n)
                            }
                        }) : (n.value = e, n.state = 1, i(n, !1))
                    } catch (e) {
                        l({
                            done: !1
                        }, e, n)
                    }
                }
            };
        P && (z = function (e) {
            E(this, z, O), _(e), o.call(this);
            var t = U(this);
            try {
                e(a(oe, t), a(l, t))
            } catch (e) {
                l(t, e)
            }
        }, (o = function (e) {
            j(this, {
                type: O,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
            })
        }).prototype = g(z.prototype, {
            then: function (e, t) {
                var n = Y(this),
                    o = K(D(this, z));
                return o.ok = "function" != typeof e || e, o.fail = "function" == typeof t &&
                    t, o.domain = F ? G.domain : void 0, n.parent = !0, n.reactions.push(o),
                0 != n.state && i(n, !1), o.promise
            },
            catch: function (e) {
                return this.then(void 0, e)
            }
        }), u = function () {
            var e = new o,
                t = U(e);
            this.promise = e, this.resolve = a(oe, t), this.reject = a(l, t)
        }, B.f = K = function (e) {
            return e === z || e === s ? new u : W(e)
        }, d || "function" != typeof v || (c = v.prototype.then, m(v.prototype, "then", function (e,
                                                                                                  t) {
            var n = this;
            return new z(function (e, t) {
                c.call(n, e, t)
            }).then(e, t)
        }, {
            unsafe: !0
        }), "function" == typeof J && f({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function (e) {
                return k(z, J.apply(p, arguments))
            }
        }))), f({
            global: !0,
            wrap: !0,
            forced: P
        }, {
            Promise: z
        }), y(z, O, !1, !0), w(O), s = A(O), f({
            target: O,
            stat: !0,
            forced: P
        }, {
            reject: function (e) {
                var t = K(this);
                return t.reject.call(void 0, e), t.promise
            }
        }), f({
            target: O,
            stat: !0,
            forced: d || P
        }, {
            resolve: function (e) {
                return k(d && this === s ? z : this, e)
            }
        }), f({
            target: O,
            stat: !0,
            forced: S
        }, {
            all: function (e) {
                var l = this,
                    t = K(l),
                    u = t.resolve,
                    s = t.reject,
                    n = I(function () {
                        var o = _(l.resolve),
                            i = [],
                            r = 0,
                            a = 1;
                        C(e, function (e) {
                            var t = r++,
                                n = !1;
                            i.push(void 0), a++, o.call(l, e).then(function (e) {
                                n || (n = !0, i[t] = e, --a || u(i))
                            }, s)
                        }), --a || u(i)
                    });
                return n.error && s(n.value), t.promise
            },
            race: function (e) {
                var n = this,
                    o = K(n),
                    i = o.reject,
                    t = I(function () {
                        var t = _(n.resolve);
                        C(e, function (e) {
                            t.call(n, e).then(o.resolve, i)
                        })
                    });
                return t.error && i(t.value), o.promise
            }
        })
    }, function (e, t, n) {
        "use strict";
        var o = n(85),
            i = n(68);
        e.exports = o ? {}.toString : function () {
            return "[object " + i(this) + "]"
        }
    }, function (e, t, n) {
        var o, i, r, a, l, u, s, c, f = n(8),
            d = n(75).f,
            p = n(115).set,
            h = n(116),
            A = n(171),
            v = n(65),
            m = f.MutationObserver || f.WebKitMutationObserver,
            g = f.document,
            y = f.process,
            n = f.Promise,
            d = d(f, "queueMicrotask"),
            d = d && d.value;
        d || (o = function () {
            var e, t;
            for (v && (e = y.domain) && e.exit(); i;) {
                t = i.fn, i = i.next;
                try {
                    t()
                } catch (e) {
                    throw i ? a() : r = void 0, e
                }
            }
            r = void 0, e && e.enter()
        }, a = h || v || A || !m || !g ? n && n.resolve ? (s = n.resolve(void 0), c = s.then,
            function () {
                c.call(s, o)
            }) : v ? function () {
            y.nextTick(o)
        } : function () {
            p.call(f, o)
        } : (l = !0, u = g.createTextNode(""), new m(o).observe(u, {
            characterData: !0
        }), function () {
            u.data = l = !l
        })), e.exports = d || function (e) {
            e = {
                fn: e,
                next: void 0
            };
            r && (r.next = e), i || (i = e, a()), r = e
        }
    }, function (e, t, n) {
        n = n(67);
        e.exports = /web0s(?!.*chrome)/i.test(n)
    }, function (e, t, n) {
        var o = n(8);
        e.exports = function (e, t) {
            var n = o.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        }
    }, function (e, t, n) {
        var o = n(8),
            n = n(112),
            o = o.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(n(o))
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            s = n(32),
            i = n(70),
            r = n(87),
            c = n(40);
        o({
            target: "Promise",
            stat: !0
        }, {
            allSettled: function (e) {
                var l = this,
                    t = i.f(l),
                    u = t.resolve,
                    n = t.reject,
                    o = r(function () {
                        var o = s(l.resolve),
                            i = [],
                            r = 0,
                            a = 1;
                        c(e, function (e) {
                            var t = r++,
                                n = !1;
                            i.push(void 0), a++, o.call(l, e).then(function (e) {
                                n || (n = !0, i[t] = {
                                    status: "fulfilled",
                                    value: e
                                }, --a || u(i))
                            }, function (e) {
                                n || (n = !0, i[t] = {
                                    status: "rejected",
                                    reason: e
                                }, --a || u(i))
                            })
                        }), --a || u(i)
                    });
                return o.error && n(o.value), t.promise
            }
        })
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            f = n(32),
            d = n(28),
            i = n(70),
            r = n(87),
            p = n(40),
            h = "No one promise resolved";
        o({
            target: "Promise",
            stat: !0
        }, {
            any: function (e) {
                var u = this,
                    t = i.f(u),
                    s = t.resolve,
                    c = t.reject,
                    n = r(function () {
                        var o = f(u.resolve),
                            i = [],
                            r = 0,
                            a = 1,
                            l = !1;
                        p(e, function (e) {
                            var t = r++,
                                n = !1;
                            i.push(void 0), a++, o.call(u, e).then(function (e) {
                                n || l || (l = !0, s(e))
                            }, function (e) {
                                n || l || (n = !0, i[t] = e, --a || c(new(d(
                                    "AggregateError"))(i, h)))
                            })
                        }), --a || c(new(d("AggregateError"))(i, h))
                    });
                return n.error && c(n.value), t.promise
            }
        })
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(39),
            r = n(109),
            a = n(12),
            l = n(28),
            u = n(114),
            s = n(117),
            n = n(50);
        o({
            target: "Promise",
            proto: !0,
            real: !0,
            forced: !!r && a(function () {
                r.prototype.finally.call({
                    then: function () {}
                }, function () {})
            })
        }, {
            finally: function (t) {
                var n = u(this, l("Promise")),
                    e = "function" == typeof t;
                return this.then(e ? function (e) {
                    return s(n, t()).then(function () {
                        return e
                    })
                } : t, e ? function (e) {
                    return s(n, t()).then(function () {
                        throw e
                    })
                } : t)
            }
        }), i || "function" != typeof r || r.prototype.finally || n(r.prototype, "finally", l("Promise")
            .prototype.finally)
    }, function (e, t, n) {
        var a = n(64),
            l = n(48),
            n = function (r) {
                return function (e, t) {
                    var n, o = String(l(e)),
                        i = a(t),
                        e = o.length;
                    return i < 0 || e <= i ? r ? "" : void 0 : (t = o.charCodeAt(i)) < 55296 || 56319 <
                    t || i + 1 === e || (n = o.charCodeAt(i + 1)) < 56320 || 57343 < n ? r ? o.charAt(
                        i) : t : r ? o.slice(i, i + 2) : n - 56320 + (t - 55296 << 10) + 65536
                }
            };
        e.exports = {
            codeAt: n(!1),
            charAt: n(!0)
        }
    }, function (e, t, n) {
        "use strict";

        function o() {
            return this
        }
        var i = n(118).IteratorPrototype,
            r = n(62),
            a = n(37),
            l = n(42),
            u = n(41);
        e.exports = function (e, t, n) {
            t += " Iterator";
            return e.prototype = r(i, {
                next: a(1, n)
            }), l(e, t, !1, !0), u[t] = o, e
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(27),
            i = n(89),
            r = n(41),
            a = n(43),
            n = n(88),
            l = "Array Iterator",
            u = a.set,
            s = a.getterFor(l);
        e.exports = n(Array, "Array", function (e, t) {
            u(this, {
                type: l,
                target: o(e),
                index: 0,
                kind: t
            })
        }, function () {
            var e = s(this),
                t = e.target,
                n = e.kind,
                o = e.index++;
            return !t || o >= t.length ? {
                value: e.target = void 0,
                done: !0
            } : "keys" == n ? {
                value: o,
                done: !1
            } : "values" == n ? {
                value: t[o],
                done: !1
            } : {
                value: [o, t[o]],
                done: !1
            }
        }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries")
    }, function (e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    }, function (e, t, n) {
        n(52);
        var o = n(182),
            i = n(68),
            r = Array.prototype,
            a = {
                DOMTokenList: !0,
                NodeList: !0
            };
        e.exports = function (e) {
            var t = e.forEach;
            return e === r || e instanceof Array && t === r.forEach || a.hasOwnProperty(i(e)) ? o : t
        }
    }, function (e, t, n) {
        n = n(183);
        e.exports = n
    }, function (e, t, n) {
        n(184);
        n = n(14);
        e.exports = n("Array").forEach
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            n = n(185);
        o({
            target: "Array",
            proto: !0,
            forced: [].forEach != n
        }, {
            forEach: n
        })
    }, function (e, t, n) {
        "use strict";
        var o = n(29).forEach,
            n = n(71)("forEach");
        e.exports = n ? [].forEach : function (e) {
            return o(this, e, 1 < arguments.length ? arguments[1] : void 0)
        }
    }, function (e, t, n) {
        n = n(187);
        e.exports = n
    }, function (e, t, n) {
        n(188);
        n = n(10);
        e.exports = n.Array.isArray
    }, function (e, t, n) {
        n(5)({
            target: "Array",
            stat: !0
        }, {
            isArray: n(53)
        })
    }, function (e, t, n) {
        n = n(190);
        e.exports = n
    }, function (e, t, n) {
        var o = n(191),
            i = Array.prototype;
        e.exports = function (e) {
            var t = e.map;
            return e === i || e instanceof Array && t === i.map ? o : t
        }
    }, function (e, t, n) {
        n(192);
        n = n(14);
        e.exports = n("Array").map
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(29).map;
        o({
            target: "Array",
            proto: !0,
            forced: !n(54)("map")
        }, {
            map: function (e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    }, function (e, t, n) {
        n = n(194);
        e.exports = n
    }, function (e, t, n) {
        var o = n(195),
            i = String.prototype;
        e.exports = function (e) {
            var t = e.trim;
            return "string" == typeof e || e === i || e instanceof String && t === i.trim ? o : t
        }
    }, function (e, t, n) {
        n(196);
        n = n(14);
        e.exports = n("String").trim
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(92).trim;
        o({
            target: "String",
            proto: !0,
            forced: n(197)("trim")
        }, {
            trim: function () {
                return i(this)
            }
        })
    }, function (e, t, n) {
        var o = n(12),
            i = n(72);
        e.exports = function (e) {
            return o(function () {
                return !!i[e]() || "​᠎" != "​᠎" [e]() || i[e].name !== e
            })
        }
    }, function (e, t, n) {
        n = n(199);
        e.exports = n
    }, function (e, t, n) {
        n(200), n(69), n(51), n(52);
        n = n(10);
        e.exports = n.Map
    }, function (e, t, n) {
        "use strict";
        var o = n(121),
            n = n(123);
        e.exports = o("Map", function (e) {
            return function () {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, n)
    }, function (e, t, n) {
        n = n(12);
        e.exports = !n(function () {
            return Object.isExtensible(Object.preventExtensions({}))
        })
    }, function (e, t, n) {
        n = n(203);
        e.exports = n
    }, function (e, t, n) {
        var o = n(204),
            i = Array.prototype;
        e.exports = function (e) {
            var t = e.indexOf;
            return e === i || e instanceof Array && t === i.indexOf ? o : t
        }
    }, function (e, t, n) {
        n(205);
        n = n(14);
        e.exports = n("Array").indexOf
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(81).indexOf,
            n = n(71),
            r = [].indexOf,
            a = !!r && 1 / [1].indexOf(1, -0) < 0,
            n = n("indexOf");
        o({
            target: "Array",
            proto: !0,
            forced: a || !n
        }, {
            indexOf: function (e) {
                return a ? r.apply(this, arguments) || 0 : i(this, e, 1 < arguments.length ?
                    arguments[1] : void 0)
            }
        })
    }, function (e, t, n) {
        n = n(207);
        e.exports = n
    }, function (e, t, n) {
        var o = n(208),
            i = Array.prototype;
        e.exports = function (e) {
            var t = e.splice;
            return e === i || e instanceof Array && t === i.splice ? o : t
        }
    }, function (e, t, n) {
        n(209);
        n = n(14);
        e.exports = n("Array").splice
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            f = n(82),
            d = n(64),
            p = n(34),
            h = n(33),
            A = n(90),
            v = n(73),
            n = n(54)("splice"),
            m = Math.max,
            g = Math.min;
        o({
            target: "Array",
            proto: !0,
            forced: !n
        }, {
            splice: function (e, t) {
                var n, o, i, r, a, l, u = h(this),
                    s = p(u.length),
                    c = f(e, s),
                    e = arguments.length;
                if (0 === e ? n = o = 0 : o = 1 === e ? (n = 0, s - c) : (n = e - 2, g(m(d(t),
                    0), s - c)), 9007199254740991 < s + n - o) throw TypeError(
                    "Maximum allowed length exceeded");
                for (i = A(u, o), r = 0; r < o; r++)(a = c + r) in u && v(i, r, u[a]);
                if (n < (i.length = o)) {
                    for (r = c; r < s - o; r++) l = r + n, (a = r + o) in u ? u[l] = u[a] :
                        delete u[l];
                    for (r = s; s - o + n < r; r--) delete u[r - 1]
                } else if (o < n)
                    for (r = s - o; c < r; r--) l = r + n - 1, (a = r + o - 1) in u ? u[l] = u[
                        a] : delete u[l];
                for (r = 0; r < n; r++) u[r + c] = arguments[r + 2];
                return u.length = s - o + n, i
            }
        })
    }, function (e, t, n) {
        n = n(211);
        e.exports = n
    }, function (e, t, n) {
        var o = n(212),
            i = Array.prototype;
        e.exports = function (e) {
            var t = e.filter;
            return e === i || e instanceof Array && t === i.filter ? o : t
        }
    }, function (e, t, n) {
        n(213);
        n = n(14);
        e.exports = n("Array").filter
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(29).filter;
        o({
            target: "Array",
            proto: !0,
            forced: !n(54)("filter")
        }, {
            filter: function (e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    }, function (e, t, n) {
        n = n(215);
        e.exports = n
    }, function (e, t, n) {
        var o = n(216),
            i = n(218),
            r = Array.prototype,
            a = String.prototype;
        e.exports = function (e) {
            var t = e.includes;
            return e === r || e instanceof Array && t === r.includes ? o : "string" == typeof e || e ===
            a || e instanceof String && t === a.includes ? i : t
        }
    }, function (e, t, n) {
        n(217);
        n = n(14);
        e.exports = n("Array").includes
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(81).includes,
            n = n(89);
        o({
            target: "Array",
            proto: !0
        }, {
            includes: function (e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n("includes")
    }, function (e, t, n) {
        n(219);
        n = n(14);
        e.exports = n("String").includes
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(220),
            r = n(48);
        o({
            target: "String",
            proto: !0,
            forced: !n(222)("includes")
        }, {
            includes: function (e) {
                return !!~String(r(this)).indexOf(i(e), 1 < arguments.length ? arguments[1] :
                    void 0)
            }
        })
    }, function (e, t, n) {
        var o = n(221);
        e.exports = function (e) {
            if (o(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        }
    }, function (e, t, n) {
        var o = n(13),
            i = n(47),
            r = n(9)("match");
        e.exports = function (e) {
            var t;
            return o(e) && (void 0 !== (t = e[r]) ? !!t : "RegExp" == i(e))
        }
    }, function (e, t, n) {
        var o = n(9)("match");
        e.exports = function (t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[o] = !1, "/./" [t](n)
                } catch (e) {}
            }
            return !1
        }
    }, function (e, t, n) {
        n = n(224);
        e.exports = n
    }, function (e, t, n) {
        var o = n(225),
            i = Function.prototype;
        e.exports = function (e) {
            var t = e.bind;
            return e === i || e instanceof Function && t === i.bind ? o : t
        }
    }, function (e, t, n) {
        n(226);
        n = n(14);
        e.exports = n("Function").bind
    }, function (e, t, n) {
        n(5)({
            target: "Function",
            proto: !0
        }, {
            bind: n(227)
        })
    }, function (e, t, n) {
        "use strict";
        var r = n(32),
            a = n(13),
            l = [].slice,
            u = {};
        e.exports = Function.bind || function (t) {
            var n = r(this),
                o = l.call(arguments, 1),
                i = function () {
                    var e = o.concat(l.call(arguments));
                    return this instanceof i ? function (e, t, n) {
                        if (!(t in u)) {
                            for (var o = [], i = 0; i < t; i++) o[i] = "a[" + i + "]";
                            u[t] = Function("C,a", "return new C(" + o.join(",") + ")")
                        }
                        return u[t](e, n)
                    }(n, e.length, e) : n.apply(t, e)
                };
            return a(n.prototype) && (i.prototype = n.prototype), i
        }
    }, function (e, t, n) {
        e.exports = n(229)
    }, function (e, t, n) {
        var o = n(230);
        n(250), n(251), n(252), n(253), n(254), e.exports = o
    }, function (e, t, n) {
        n(231), n(69), n(232), n(234), n(235), n(236), n(237), n(126), n(238), n(239), n(240), n(241), n(
            242), n(243), n(244), n(245), n(246), n(247), n(248), n(249);
        n = n(10);
        e.exports = n.Symbol
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(12),
            s = n(53),
            c = n(13),
            f = n(33),
            d = n(34),
            p = n(73),
            h = n(90),
            r = n(54),
            a = n(9),
            n = n(66),
            A = a("isConcatSpreadable"),
            v = 9007199254740991,
            m = "Maximum allowed index exceeded",
            i = 51 <= n || !i(function () {
                var e = [];
                return e[A] = !1, e.concat()[0] !== e
            }),
            r = r("concat");
        o({
            target: "Array",
            proto: !0,
            forced: !i || !r
        }, {
            concat: function (e) {
                for (var t, n, o, i = f(this), r = h(i, 0), a = 0, l = -1, u = arguments.length; l <
                u; l++)
                    if (function (e) {
                        if (!c(e)) return !1;
                        var t = e[A];
                        return void 0 !== t ? !!t : s(e)
                    }(o = -1 === l ? i : arguments[l])) {
                        if (n = d(o.length), v < a + n) throw TypeError(m);
                        for (t = 0; t < n; t++, a++) t in o && p(r, a, o[t])
                    } else {
                        if (v <= a) throw TypeError(m);
                        p(r, a++, o)
                    } return r.length = a, r
            }
        })
    }, function (e, t, n) {
        "use strict";

        function o(e, t) {
            var n = Z[e] = x(G[Y]);
            return z(n, {
                type: j,
                tag: e,
                description: t
            }), s || (n.description = t), n
        }

        function i(t, e) {
            v(t);
            var n = g(e),
                e = _(n).concat(ue(n));
            return O(e, function (e) {
                s && !le.call(n, e) || ae(t, e, n[e])
            }), t
        }
        var r = n(5),
            a = n(8),
            l = n(28),
            u = n(39),
            s = n(15),
            c = n(84),
            f = n(106),
            d = n(12),
            p = n(16),
            h = n(53),
            A = n(13),
            v = n(20),
            m = n(33),
            g = n(27),
            y = n(59),
            w = n(37),
            x = n(62),
            _ = n(63),
            E = n(124),
            b = n(233),
            C = n(125),
            S = n(75),
            D = n(18),
            M = n(58),
            N = n(17),
            k = n(50),
            T = n(79),
            B = n(60),
            I = n(49),
            R = n(61),
            P = n(9),
            H = n(95),
            F = n(11),
            L = n(42),
            Q = n(43),
            O = n(29).forEach,
            U = B("hidden"),
            j = "Symbol",
            Y = "prototype",
            B = P("toPrimitive"),
            z = Q.set,
            $ = Q.getterFor(j),
            V = Object[Y],
            G = a.Symbol,
            J = l("JSON", "stringify"),
            K = S.f,
            W = D.f,
            q = b.f,
            X = M.f,
            Z = T("symbols"),
            ee = T("op-symbols"),
            te = T("string-to-symbol-registry"),
            ne = T("symbol-to-string-registry"),
            T = T("wks"),
            a = a.QObject,
            oe = !a || !a[Y] || !a[Y].findChild,
            ie = s && d(function () {
                return 7 != x(W({}, "a", {
                    get: function () {
                        return W(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function (e, t, n) {
                var o = K(V, t);
                o && delete V[t], W(e, t, n), o && e !== V && W(V, t, o)
            } : W,
            re = f ? function (e) {
                return "symbol" == typeof e
            } : function (e) {
                return Object(e) instanceof G
            },
            ae = function (e, t, n) {
                e === V && ae(ee, t, n), v(e);
                t = y(t, !0);
                return v(n), p(Z, t) ? (n.enumerable ? (p(e, U) && e[U][t] && (e[U][t] = !1), n = x(n, {
                    enumerable: w(0, !1)
                })) : (p(e, U) || W(e, U, w(1, {})), e[U][t] = !0), ie(e, t, n)) : W(e, t, n)
            },
            le = function (e) {
                var t = y(e, !0),
                    e = X.call(this, t);
                return !(this === V && p(Z, t) && !p(ee, t)) && (!(e || !p(this, t) || !p(Z, t) || p(this,
                    U) && this[U][t]) || e)
            },
            a = function (e, t) {
                var n = g(e),
                    e = y(t, !0);
                if (n !== V || !p(Z, e) || p(ee, e)) {
                    t = K(n, e);
                    return !t || !p(Z, e) || p(n, U) && n[U][e] || (t.enumerable = !0), t
                }
            },
            f = function (e) {
                var e = q(g(e)),
                    t = [];
                return O(e, function (e) {
                    p(Z, e) || p(I, e) || t.push(e)
                }), t
            },
            ue = function (e) {
                var t = e === V,
                    e = q(t ? ee : g(e)),
                    n = [];
                return O(e, function (e) {
                    !p(Z, e) || t && !p(V, e) || n.push(Z[e])
                }), n
            };
        c || (k((G = function () {
            if (this instanceof G) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) :
                void 0,
                t = R(e),
                n = function (e) {
                    this === V && n.call(ee, e), p(this, U) && p(this[U], t) && (this[U][t] = !
                        1), ie(this, t, w(1, e))
                };
            return s && oe && ie(V, t, {
                configurable: !0,
                set: n
            }), o(t, e)
        })[Y], "toString", function () {
            return $(this).tag
        }), k(G, "withoutSetter", function (e) {
            return o(R(e), e)
        }), M.f = le, D.f = ae, S.f = a, E.f = b.f = f, C.f = ue, H.f = function (e) {
            return o(P(e), e)
        }, s && (W(G[Y], "description", {
            configurable: !0,
            get: function () {
                return $(this).description
            }
        }), u || k(V, "propertyIsEnumerable", le, {
            unsafe: !0
        }))), r({
            global: !0,
            wrap: !0,
            forced: !c,
            sham: !c
        }, {
            Symbol: G
        }), O(_(T), function (e) {
            F(e)
        }), r({
            target: j,
            stat: !0,
            forced: !c
        }, {
            for: function (e) {
                var t = String(e);
                if (p(te, t)) return te[t];
                e = G(t);
                return te[t] = e, ne[e] = t, e
            },
            keyFor: function (e) {
                if (!re(e)) throw TypeError(e + " is not a symbol");
                if (p(ne, e)) return ne[e]
            },
            useSetter: function () {
                oe = !0
            },
            useSimple: function () {
                oe = !1
            }
        }), r({
            target: "Object",
            stat: !0,
            forced: !c,
            sham: !s
        }, {
            create: function (e, t) {
                return void 0 === t ? x(e) : i(x(e), t)
            },
            defineProperty: ae,
            defineProperties: i,
            getOwnPropertyDescriptor: a
        }), r({
            target: "Object",
            stat: !0,
            forced: !c
        }, {
            getOwnPropertyNames: f,
            getOwnPropertySymbols: ue
        }), r({
            target: "Object",
            stat: !0,
            forced: d(function () {
                C.f(1)
            })
        }, {
            getOwnPropertySymbols: function (e) {
                return C.f(m(e))
            }
        }), J && r({
            target: "JSON",
            stat: !0,
            forced: !c || d(function () {
                var e = G();
                return "[null]" != J([e]) || "{}" != J({
                    a: e
                }) || "{}" != J(Object(e))
            })
        }, {
            stringify: function (e, t, n) {
                for (var o, i = [e], r = 1; r < arguments.length;) i.push(arguments[r++]);
                if ((A(o = t) || void 0 !== e) && !re(e)) return h(t) || (t = function (e, t) {
                    if ("function" == typeof o && (t = o.call(this, e, t)), !re(t))
                        return t
                }), i[1] = t, J.apply(null, i)
            }
        }), G[Y][B] || N(G[Y], B, G[Y].valueOf), L(G, j), I[U] = !0
    }, function (e, t, n) {
        var o = n(27),
            i = n(124).f,
            r = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(
                window) : [];
        e.exports.f = function (e) {
            return a && "[object Window]" == r.call(e) ? function (e) {
                try {
                    return i(e)
                } catch (e) {
                    return a.slice()
                }
            }(e) : i(o(e))
        }
    }, function (e, t, n) {
        n(11)("asyncIterator")
    }, function (e, t) {}, function (e, t, n) {
        n(11)("hasInstance")
    }, function (e, t, n) {
        n(11)("isConcatSpreadable")
    }, function (e, t, n) {
        n(11)("match")
    }, function (e, t, n) {
        n(11)("matchAll")
    }, function (e, t, n) {
        n(11)("replace")
    }, function (e, t, n) {
        n(11)("search")
    }, function (e, t, n) {
        n(11)("species")
    }, function (e, t, n) {
        n(11)("split")
    }, function (e, t, n) {
        n(11)("toPrimitive")
    }, function (e, t, n) {
        n(11)("toStringTag")
    }, function (e, t, n) {
        n(11)("unscopables")
    }, function (e, t, n) {
        var o = n(8);
        n(42)(o.JSON, "JSON", !0)
    }, function (e, t) {}, function (e, t) {}, function (e, t, n) {
        n(11)("asyncDispose")
    }, function (e, t, n) {
        n(11)("dispose")
    }, function (e, t, n) {
        n(11)("observable")
    }, function (e, t, n) {
        n(11)("patternMatch")
    }, function (e, t, n) {
        n(11)("replaceAll")
    }, function (e, t, n) {
        e.exports = n(256)
    }, function (e, t, n) {
        n = n(257);
        e.exports = n
    }, function (e, t, n) {
        n(126), n(51), n(52);
        n = n(95);
        e.exports = n.f("iterator")
    }, function (e, t, n) {
        e.exports = n(259)
    }, function (e, t, n) {
        n = n(260);
        e.exports = n
    }, function (e, t, n) {
        n(261);
        n = n(10);
        e.exports = n.parseInt
    }, function (e, t, n) {
        var o = n(5),
            n = n(262);
        o({
            global: !0,
            forced: parseInt != n
        }, {
            parseInt: n
        })
    }, function (e, t, n) {
        var o = n(8),
            i = n(92).trim,
            n = n(72),
            r = o.parseInt,
            a = /^[+-]?0[Xx]/,
            n = 8 !== r(n + "08") || 22 !== r(n + "0x16");
        e.exports = n ? function (e, t) {
            e = i(String(e));
            return r(e, t >>> 0 || (a.test(e) ? 16 : 10))
        } : r
    }, function (e, t, n) {
        n = n(264);
        e.exports = n
    }, function (e, t, n) {
        var o = n(265),
            i = Array.prototype;
        e.exports = function (e) {
            var t = e.slice;
            return e === i || e instanceof Array && t === i.slice ? o : t
        }
    }, function (e, t, n) {
        n(266);
        n = n(14);
        e.exports = n("Array").slice
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            s = n(13),
            c = n(53),
            f = n(82),
            d = n(34),
            p = n(27),
            h = n(73),
            i = n(9),
            n = n(54)("slice"),
            A = i("species"),
            v = [].slice,
            m = Math.max;
        o({
            target: "Array",
            proto: !0,
            forced: !n
        }, {
            slice: function (e, t) {
                var n, o, i, r = p(this),
                    a = d(r.length),
                    l = f(e, a),
                    u = f(void 0 === t ? a : t, a);
                if (c(r) && ((n = "function" == typeof (n = r.constructor) && (n === Array || c(
                    n.prototype)) || s(n) && null === (n = n[A]) ? void 0 : n) ===
                    Array || void 0 === n)) return v.call(r, l, u);
                for (o = new(void 0 === n ? Array : n)(m(u - l, 0)), i = 0; l < u; l++, i++) l in
                r && h(o, i, r[l]);
                return o.length = i, o
            }
        })
    }, function (e, t, n) {
        n(268);
        n = n(10);
        e.exports = n.setTimeout
    }, function (e, t, n) {
        var o = n(5),
            i = n(8),
            r = n(67),
            a = [].slice,
            n = function (i) {
                return function (e, t) {
                    var n = 2 < arguments.length,
                        o = n ? a.call(arguments, 2) : void 0;
                    return i(n ? function () {
                        ("function" == typeof e ? e : Function(e)).apply(this, o)
                    } : e, t)
                }
            };
        o({
            global: !0,
            bind: !0,
            forced: /MSIE .\./.test(r)
        }, {
            setTimeout: n(i.setTimeout),
            setInterval: n(i.setInterval)
        })
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(270));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a = n(2),
            l = a.__importDefault(n(275)),
            u = a.__importDefault(n(276)),
            s = a.__importDefault(n(127)),
            c = a.__importDefault(n(277)),
            f = a.__importDefault(n(278)),
            d = a.__importDefault(n(279)),
            p = a.__importDefault(n(280)),
            o = a.__importDefault(n(281)),
            i = a.__importDefault(n(282)),
            n = a.__importDefault(n(283)),
            n = (0, r.default)({}, l.default, u.default, s.default, f.default, c.default, d.default, p.default,
                o.default, i.default, n.default, {
                    linkCheck: function (e, t) {
                        return !0
                    }
                });
        t.default = n
    }, function (e, t, n) {
        e.exports = n(271)
    }, function (e, t, n) {
        n = n(272);
        e.exports = n
    }, function (e, t, n) {
        n(273);
        n = n(10);
        e.exports = n.Object.assign
    }, function (e, t, n) {
        var o = n(5),
            n = n(274);
        o({
            target: "Object",
            stat: !0,
            forced: Object.assign !== n
        }, {
            assign: n
        })
    }, function (e, t, n) {
        "use strict";
        var d = n(15),
            o = n(12),
            p = n(63),
            h = n(125),
            A = n(58),
            v = n(33),
            m = n(76),
            i = Object.assign,
            r = Object.defineProperty;
        e.exports = !i || o(function () {
            if (d && 1 !== i({
                b: 1
            }, i(r({}, "a", {
                enumerable: !0,
                get: function () {
                    r(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                o = "abcdefghijklmnopqrst";
            return e[n] = 7, o.split("").forEach(function (e) {
                t[e] = e
            }), 7 != i({}, e)[n] || p(i({}, t)).join("") != o
        }) ? function (e, t) {
            for (var n = v(e), o = arguments.length, i = 1, r = h.f, a = A.f; i < o;)
                for (var l, u = m(arguments[i++]), s = r ? p(u).concat(r(u)) : p(u), c = s.length, f =
                    0; f < c;) l = s[f++], d && !a.call(u, l) || (n[l] = u[l]);
            return n
        } : i
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = {
            menus: ["head", "bold", "fontSize", "fontName", "italic", "underline", "strikeThrough",
                "indent", "lineHeight", "foreColor", "backColor", "link", "list", "todo", "justify",
                "quote", "emoticon", "image", "video", "table", "code", "splitLine", "undo", "redo"
            ],
            fontNames: ["黑体", "仿宋", "楷体", "标楷体", "华文仿宋", "华文楷体", "宋体", "微软雅黑", "Arial", "Tahoma",
                "Verdana", "Times New Roman", "Courier New"],
            fontSizes: {
                "x-small": {
                    name: "10px",
                    value: "1"
                },
                small: {
                    name: "13px",
                    value: "2"
                },
                normal: {
                    name: "16px",
                    value: "3"
                },
                large: {
                    name: "18px",
                    value: "4"
                },
                "x-large": {
                    name: "24px",
                    value: "5"
                },
                "xx-large": {
                    name: "32px",
                    value: "6"
                },
                "xxx-large": {
                    name: "48px",
                    value: "7"
                }
            },
            colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a",
                "#7b5ba1", "#46acc8", "#f9963b"],
            languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript",
                "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP",
                "Python", "Shell Session", "Ruby"],
            languageTab: "　　　　",
            emotions: [{
                title: "表情",
                type: "emoji",
                content: "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 🤗 🤔 😶 😑 😬 🙄 😯 😴 😷 🤑 😈 🤡 💩 👻 💀 👀 👣"
                    .split(/\s/)
            }, {
                title: "手势",
                type: "emoji",
                content: "👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏"
                    .split(/\s/)
            }],
            lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
            undoLimit: 20,
            indentation: "2em",
            showMenuTooltips: !0,
            menuTooltipPosition: "up"
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        n = n(7);
        t.default = {
            onchangeTimeout: 200,
            onchange: null,
            onfocus: n.EMPTY_FN,
            onblur: n.EMPTY_FN,
            onCatalogChange: null,
            customAlert: function (e, t, n) {
                window.alert(e), n && console.error("wangEditor: " + n)
            }
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = {
            pasteFilterStyle: !0,
            pasteIgnoreImg: !1,
            pasteTextHandle: function (e) {
                return e
            }
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = {
            styleWithCSS: !1
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        n = n(7);
        t.default = {
            linkImgCheck: function (e, t, n) {
                return !0
            },
            showLinkImg: !0,
            showLinkImgAlt: !0,
            showLinkImgHref: !0,
            linkImgCallback: n.EMPTY_FN,
            uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
            uploadImgServer: "",
            uploadImgShowBase64: !1,
            uploadImgMaxSize: 5242880,
            uploadImgMaxLength: 100,
            uploadFileName: "",
            uploadImgParams: {},
            uploadImgParamsWithUrl: !1,
            uploadImgHeaders: {},
            uploadImgHooks: {},
            uploadImgTimeout: 1e4,
            withCredentials: !1,
            customUploadImg: null,
            uploadImgFromMedia: null
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = {
            focus: !0,
            height: 300,
            placeholder: "请输入正文",
            zIndexFullScreen: 10002,
            showFullScreen: !0
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = {
            lang: "zh-CN",
            languages: {
                "zh-CN": {
                    wangEditor: {
                        "重置": "重置",
                        "插入": "插入",
                        "默认": "默认",
                        "创建": "创建",
                        "修改": "修改",
                        "如": "如",
                        "请输入正文": "请输入正文",
                        menus: {
                            title: {
                                "标题": "标题",
                                "加粗": "加粗",
                                "字号": "字号",
                                "字体": "字体",
                                "斜体": "斜体",
                                "下划线": "下划线",
                                "删除线": "删除线",
                                "缩进": "缩进",
                                "行高": "行高",
                                "文字颜色": "文字颜色",
                                "背景色": "背景色",
                                "链接": "链接",
                                "序列": "序列",
                                "对齐": "对齐",
                                "引用": "引用",
                                "表情": "表情",
                                "图片": "图片",
                                "视频": "视频",
                                "表格": "表格",
                                "代码": "代码",
                                "分割线": "分割线",
                                "恢复": "恢复",
                                "撤销": "撤销",
                                "全屏": "全屏",
                                "取消全屏": "取消全屏",
                                "待办事项": "待办事项"
                            },
                            dropListMenu: {
                                "设置标题": "设置标题",
                                "背景颜色": "背景颜色",
                                "文字颜色": "文字颜色",
                                "设置字号": "设置字号",
                                "设置字体": "设置字体",
                                "设置缩进": "设置缩进",
                                "对齐方式": "对齐方式",
                                "设置行高": "设置行高",
                                "序列": "序列",
                                head: {
                                    "正文": "正文"
                                },
                                indent: {
                                    "增加缩进": "增加缩进",
                                    "减少缩进": "减少缩进"
                                },
                                justify: {
                                    "靠左": "靠左",
                                    "居中": "居中",
                                    "靠右": "靠右",
                                    "两端": "两端"
                                },
                                list: {
                                    "无序列表": "无序列表",
                                    "有序列表": "有序列表"
                                }
                            },
                            panelMenus: {
                                emoticon: {
                                    "默认": "默认",
                                    "新浪": "新浪",
                                    emoji: "emoji",
                                    "手势": "手势"
                                },
                                image: {
                                    "上传图片": "上传图片",
                                    "网络图片": "网络图片",
                                    "图片地址": "图片地址",
                                    "图片文字说明": "图片文字说明",
                                    "跳转链接": "跳转链接"
                                },
                                link: {
                                    "链接": "链接",
                                    "链接文字": "链接文字",
                                    "取消链接": "取消链接",
                                    "查看链接": "查看链接"
                                },
                                video: {
                                    "插入视频": "插入视频",
                                    "上传视频": "上传视频"
                                },
                                table: {
                                    "行": "行",
                                    "列": "列",
                                    "的": "的",
                                    "表格": "表格",
                                    "添加行": "添加行",
                                    "删除行": "删除行",
                                    "添加列": "添加列",
                                    "删除列": "删除列",
                                    "设置表头": "设置表头",
                                    "取消表头": "取消表头",
                                    "插入表格": "插入表格",
                                    "删除表格": "删除表格"
                                },
                                code: {
                                    "删除代码": "删除代码",
                                    "修改代码": "修改代码",
                                    "插入代码": "插入代码"
                                }
                            }
                        },
                        validate: {
                            "张图片": "张图片",
                            "大于": "大于",
                            "图片链接": "图片链接",
                            "不是图片": "不是图片",
                            "返回结果": "返回结果",
                            "上传图片超时": "上传图片超时",
                            "上传图片错误": "上传图片错误",
                            "上传图片失败": "上传图片失败",
                            "插入图片错误": "插入图片错误",
                            "一次最多上传": "一次最多上传",
                            "下载链接失败": "下载链接失败",
                            "图片验证未通过": "图片验证未通过",
                            "服务器返回状态": "服务器返回状态",
                            "上传图片返回结果错误": "上传图片返回结果错误",
                            "请替换为支持的图片类型": "请替换为支持的图片类型",
                            "您插入的网络图片无法识别": "您插入的网络图片无法识别",
                            "您刚才插入的图片链接未通过编辑器校验": "您刚才插入的图片链接未通过编辑器校验",
                            "插入视频错误": "插入视频错误",
                            "视频链接": "视频链接",
                            "不是视频": "不是视频",
                            "视频验证未通过": "视频验证未通过",
                            "个视频": "个视频",
                            "上传视频超时": "上传视频超时",
                            "上传视频错误": "上传视频错误",
                            "上传视频失败": "上传视频失败",
                            "上传视频返回结果错误": "上传视频返回结果错误"
                        }
                    }
                },
                en: {
                    wangEditor: {
                        "重置": "reset",
                        "插入": "insert",
                        "默认": "default",
                        "创建": "create",
                        "修改": "edit",
                        "如": "like",
                        "请输入正文": "please enter the text",
                        menus: {
                            title: {
                                "标题": "head",
                                "加粗": "bold",
                                "字号": "font size",
                                "字体": "font family",
                                "斜体": "italic",
                                "下划线": "underline",
                                "删除线": "strikethrough",
                                "缩进": "indent",
                                "行高": "line heihgt",
                                "文字颜色": "font color",
                                "背景色": "background",
                                "链接": "link",
                                "序列": "numbered list",
                                "对齐": "align",
                                "引用": "quote",
                                "表情": "emoticons",
                                "图片": "image",
                                "视频": "media",
                                "表格": "table",
                                "代码": "code",
                                "分割线": "split line",
                                "恢复": "undo",
                                "撤销": "redo",
                                "全屏": "fullscreen",
                                "取消全屏": "cancel fullscreen",
                                "待办事项": "todo"
                            },
                            dropListMenu: {
                                "设置标题": "title",
                                "背景颜色": "background",
                                "文字颜色": "font color",
                                "设置字号": "font size",
                                "设置字体": "font family",
                                "设置缩进": "indent",
                                "对齐方式": "align",
                                "设置行高": "line heihgt",
                                "序列": "list",
                                head: {
                                    "正文": "text"
                                },
                                indent: {
                                    "增加缩进": "indent",
                                    "减少缩进": "outdent"
                                },
                                justify: {
                                    "靠左": "left",
                                    "居中": "center",
                                    "靠右": "right",
                                    "两端": "justify"
                                },
                                list: {
                                    "无序列表": "unordered",
                                    "有序列表": "ordered"
                                }
                            },
                            panelMenus: {
                                emoticon: {
                                    "表情": "emoji",
                                    "手势": "gesture"
                                },
                                image: {
                                    "上传图片": "upload image",
                                    "网络图片": "network image",
                                    "图片地址": "image link",
                                    "图片文字说明": "image alt",
                                    "跳转链接": "hyperlink"
                                },
                                link: {
                                    "链接": "link",
                                    "链接文字": "link text",
                                    "取消链接": "unlink",
                                    "查看链接": "view links"
                                },
                                video: {
                                    "插入视频": "insert video",
                                    "上传视频": "upload local video"
                                },
                                table: {
                                    "行": "rows",
                                    "列": "columns",
                                    "的": " ",
                                    "表格": "table",
                                    "添加行": "insert row",
                                    "删除行": "delete row",
                                    "添加列": "insert column",
                                    "删除列": "delete column",
                                    "设置表头": "set header",
                                    "取消表头": "cancel header",
                                    "插入表格": "insert table",
                                    "删除表格": "delete table"
                                },
                                code: {
                                    "删除代码": "delete code",
                                    "修改代码": "edit code",
                                    "插入代码": "insert code"
                                }
                            }
                        },
                        validate: {
                            "张图片": "images",
                            "大于": "greater than",
                            "图片链接": "image link",
                            "不是图片": "is not image",
                            "返回结果": "return results",
                            "上传图片超时": "upload image timeout",
                            "上传图片错误": "upload image error",
                            "上传图片失败": "upload image failed",
                            "插入图片错误": "insert image error",
                            "一次最多上传": "once most at upload",
                            "下载链接失败": "download link failed",
                            "图片验证未通过": "image validate failed",
                            "服务器返回状态": "server return status",
                            "上传图片返回结果错误": "upload image return results error",
                            "请替换为支持的图片类型": "please replace with a supported image type",
                            "您插入的网络图片无法识别": "the network picture you inserted is not recognized",
                            "您刚才插入的图片链接未通过编辑器校验": "the image link you just inserted did not pass the editor verification",
                            "插入视频错误": "insert video error",
                            "视频链接": "video link",
                            "不是视频": "is not video",
                            "视频验证未通过": "video validate failed",
                            "个视频": "videos",
                            "上传视频超时": "upload video timeout",
                            "上传视频错误": "upload video error",
                            "上传视频失败": "upload video failed",
                            "上传视频返回结果错误": "upload video return results error"
                        }
                    }
                }
            }
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(6);
        t.default = {
            compatibleMode: function () {
                return !(!o.UA.isIE() && !o.UA.isOldEdge)
            },
            historyMaxSize: 30
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        n = n(7);
        t.default = {
            onlineVideoCheck: function (e) {
                return !0
            },
            onlineVideoCallback: n.EMPTY_FN,
            showLinkVideo: !0,
            uploadVideoAccept: ["mp4"],
            uploadVideoServer: "",
            uploadVideoMaxSize: 1073741824,
            uploadVideoName: "",
            uploadVideoParams: {},
            uploadVideoParamsWithUrl: !1,
            uploadVideoHeaders: {},
            uploadVideoHooks: {},
            uploadVideoTimeout: 72e5,
            withVideoCredentials: !1,
            customUploadVideo: null,
            customInsertVideo: null
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(19));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var l = n(2).__importDefault(n(3)),
            a = n(6),
            u = n(7),
            n = (s.prototype.getRange = function () {
                return this._currentRange
            }, s.prototype.saveRange = function (e) {
                var t, n, o;
                e ? this._currentRange = e : 0 !== (o = window.getSelection()).rangeCount && (t = o.getRangeAt(
                    0), null != (n = this.getSelectionContainerElem(t)) && n.length && ("false" ===
                    n.attr("contenteditable") || n.parentUntil("[contenteditable=false]") || (o =
                        (e = this.editor).$textElem).isContain(n) && (o.elems[0] === n.elems[0] &&
                        (0, r.default)(n = o.html()).call(n) === u.EMPTY_P && (o = null == (o =
                            o.children()) ? void 0 : o.last(), e.selection.createRangeByElem(
                            o, !0, !0), e.selection.restoreSelection()), this._currentRange = t
                    )))
            }, s.prototype.collapseRange = function (e) {
                void 0 === e && (e = !1);
                var t = this._currentRange;
                t && t.collapse(e)
            }, s.prototype.getSelectionText = function () {
                var e = this._currentRange;
                return e ? e.toString() : ""
            }, s.prototype.getSelectionContainerElem = function (e) {
                var e = e || this._currentRange;
                if (e) return e = e.commonAncestorContainer, l.default(1 === e.nodeType ? e : e.parentNode)
            }, s.prototype.getSelectionStartElem = function (e) {
                var e = e || this._currentRange;
                if (e) return e = e.startContainer, l.default(1 === e.nodeType ? e : e.parentNode)
            }, s.prototype.getSelectionEndElem = function (e) {
                var e = e || this._currentRange;
                if (e) return e = e.endContainer, l.default(1 === e.nodeType ? e : e.parentNode)
            }, s.prototype.isSelectionEmpty = function () {
                var e = this._currentRange;
                return !(!e || !e.startContainer || e.startContainer !== e.endContainer || e.startOffset !==
                    e.endOffset)
            }, s.prototype.restoreSelection = function () {
                var e = window.getSelection(),
                    t = this._currentRange;
                e && t && (e.removeAllRanges(), e.addRange(t))
            }, s.prototype.createEmptyRange = function () {
                var e, t = this.editor,
                    n = this.getRange();
                if (n && this.isSelectionEmpty()) try {
                    a.UA.isWebkit() ? (t.cmd.do("insertHTML", "&#8203;"), n.setEnd(n.endContainer,
                        n.endOffset + 1), this.saveRange(n)) : (e = l.default(
                        "<strong>&#8203;</strong>"), t.cmd.do("insertElem", e), this.createRangeByElem(
                        e, !0))
                } catch (e) {}
            }, s.prototype.createRangeByElems = function (e, t) {
                var n = (window.getSelection ? window : document).getSelection();
                null != n && n.removeAllRanges();
                n = document.createRange();
                n.setStart(e, 0), n.setEnd(t, t.childNodes.length || 1), this.saveRange(n), this.restoreSelection()
            }, s.prototype.createRangeByElem = function (e, t, n) {
                var o;
                e.length && (o = e.elems[0], e = document.createRange(), n ? e.selectNodeContents(o) :
                    e.selectNode(o), null != t && (e.collapse(t), t || (this.saveRange(e), this.editor
                    .selection.moveCursor(o))), this.saveRange(e))
            }, s.prototype.getSelectionRangeTopNodes = function () {
                var e = null === (t = this.getSelectionStartElem()) || void 0 === t ? void 0 : t.getNodeTop(
                    this.editor),
                    t = null === (t = this.getSelectionEndElem()) || void 0 === t ? void 0 : t.getNodeTop(
                        this.editor);
                return this.recordSelectionNodes(l.default(e), l.default(t))
            }, s.prototype.moveCursor = function (e, t) {
                var n = this.getRange(),
                    o = 3 === e.nodeType ? null === (o = e.nodeValue) || void 0 === o ? void 0 : o.length :
                        e.childNodes.length;
                (a.UA.isFirefox || a.UA.isIE()) && 0 !== o && (3 !== e.nodeType && "BR" !== e.childNodes[
                o - 1].nodeName || (o -= 1));
                o = null != t ? t : o;
                n && e && (n.setStart(e, o), n.setEnd(e, o), this.restoreSelection())
            }, s.prototype.getCursorPos = function () {
                var e = window.getSelection();
                return null == e ? void 0 : e.anchorOffset
            }, s.prototype.clearWindowSelectionRange = function () {
                var e = window.getSelection();
                e && e.removeAllRanges()
            }, s.prototype.recordSelectionNodes = function (e, t) {
                for (var n = [], o = e, i = this.editor.$textElem, r = !0; r;) {
                    var a = null == o ? void 0 : o.getNodeTop(this.editor);
                    "BODY" === a.getNodeName() && (r = !1), 0 < a.length && (n.push(l.default(o)), null !=
                    t && t.equal(a) || i.equal(a) ? r = !1 : o = a.getNextSibling())
                }
                return n
            }, s.prototype.setRangeToElem = function (e) {
                var t = this.getRange();
                null != t && t.setStart(e, 0), null != t && t.setEnd(e, 0)
            }, s);

        function s(e) {
            this._currentRange = null, this.editor = e
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var i = n(2).__importDefault(n(3)),
            n = (o.prototype.do = function (e, t) {
                var n = this.editor;
                n.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
                var o = n.selection;
                if (o.getRange()) {
                    switch (o.restoreSelection(), e) {
                        case "insertHTML":
                            this.insertHTML(t);
                            break;
                        case "insertElem":
                            this.insertElem(t);
                            break;
                        default:
                            this.execCommand(e, t)
                    }
                    n.menus.changeActive(), o.saveRange(), o.restoreSelection()
                }
            }, o.prototype.insertHTML = function (e) {
                var t, n = this.editor,
                    o = n.selection.getRange();
                null != o && (this.queryCommandSupported("insertHTML") ? this.execCommand("insertHTML",
                    e) : o.insertNode && (o.deleteContents(), 0 < i.default(e).elems.length ? o
                        .insertNode(i.default(e).elems[0]) : ((t = document.createElement("p")).appendChild(
                        document.createTextNode(e)), o.insertNode(t)), n.selection.collapseRange()
                ))
            }, o.prototype.insertElem = function (e) {
                var t = this.editor.selection.getRange();
                null != t && t.insertNode && (t.deleteContents(), t.insertNode(e.elems[0]))
            }, o.prototype.execCommand = function (e, t) {
                document.execCommand(e, !1, t)
            }, o.prototype.queryCommandValue = function (e) {
                return document.queryCommandValue(e)
            }, o.prototype.queryCommandState = function (e) {
                return document.queryCommandState(e)
            }, o.prototype.queryCommandSupported = function (e) {
                return document.queryCommandSupported(e)
            }, o);

        function o(e) {
            this.editor = e
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(30)),
            a = o(n(4)),
            l = o(n(19)),
            u = o(n(26)),
            s = o(n(45));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            c = i.__importDefault(n(3)),
            f = i.__importDefault(n(291)),
            d = n(6),
            p = i.__importDefault(n(303)),
            h = i.__importDefault(n(304)),
            A = n(7),
            n = (v.prototype.init = function () {
                this._saveRange(), this._bindEventHooks(), f.default(this)
            }, v.prototype.togglePlaceholder = function () {
                var e = this.html(),
                    t = (0, r.default)(t = this.editor.$textContainerElem).call(t, ".placeholder");
                t.hide(), this.editor.isComposing || e && " " !== e || t.show()
            }, v.prototype.clear = function () {
                this.html(A.EMPTY_P)
            }, v.prototype.html = function (e) {
                var t = this.editor,
                    n = t.$textElem;
                if (null == e) {
                    var o = n.html(),
                        i = (o = (o = (o = (o = o.replace(/\u200b/gm, "")).replace(/<p><\/p>/gim, "")).replace(
                            A.EMPTY_P_LAST_REGEX, "")).replace(A.EMPTY_P_REGEX, "<p>")).match(
                            /<(img|br|hr|input)[^>]*>/gi);
                    return null !== i && (0, a.default)(i).call(i, function (e) {
                        e.match(/\/>/) || (o = o.replace(e, e.substring(0, e.length - 1) + "/>"))
                    }), o
                }
                "" === (e = (0, l.default)(e).call(e)) && (e = A.EMPTY_P), 0 !== (0, u.default)(e).call(
                    e, "<") && (e = "<p>" + e + "</p>"), n.html(e), t.initSelection()
            }, v.prototype.setJSON = function (e) {
                var t = h.default(e).children(),
                    e = this.editor.$textElem;
                t && e.replaceChildAll(t)
            }, v.prototype.getJSON = function () {
                var e = this.editor.$textElem;
                return p.default(e)
            }, v.prototype.text = function (e) {
                var t = this.editor,
                    n = t.$textElem;
                if (null == e) return n.text().replace(/\u200b/gm, "");
                n.text("<p>" + e + "</p>"), t.initSelection()
            }, v.prototype.append = function (e) {
                var t = this.editor;
                0 !== (0, u.default)(e).call(e, "<") && (e = "<p>" + e + "</p>"), this.html(this.html() +
                    e), t.initSelection()
            }, v.prototype._saveRange = function () {
                var t = this.editor,
                    n = t.$textElem,
                    e = c.default(document);

                function o() {
                    t.selection.saveRange(), t.menus.changeActive()
                }

                function i() {
                    o(), e.off("mouseup", i)
                }

                function r() {
                    e.on("mouseup", i), n.off("mouseleave", r)
                }
                n.on("keyup", o), n.on("click", function e() {
                    o(), n.off("click", e)
                }), n.on("mousedown", function () {
                    n.on("mouseleave", r)
                }), n.on("mouseup", function (e) {
                    n.off("mouseleave", r), (0, s.default)(function () {
                        null !== t.selection.getRange() && o()
                    }, 0)
                })
            }, v.prototype._bindEventHooks = function () {
                var n = this.editor,
                    e = n.$textElem,
                    o = this.eventHooks;

                function t(e) {
                    e.preventDefault()
                }
                e.on("click", function (t) {
                    var e = o.clickEvents;
                    (0, a.default)(e).call(e, function (e) {
                        return e(t)
                    })
                }), e.on("keyup", function (t) {
                    var e;
                    13 === t.keyCode && (e = o.enterUpEvents, (0, a.default)(e).call(e,
                        function (e) {
                            return e(t)
                        }))
                }), e.on("keyup", function (t) {
                    var e = o.keyupEvents;
                    (0, a.default)(e).call(e, function (e) {
                        return e(t)
                    })
                }), e.on("keydown", function (t) {
                    var e = o.keydownEvents;
                    (0, a.default)(e).call(e, function (e) {
                        return e(t)
                    })
                }), e.on("keyup", function (t) {
                    var e;
                    8 === t.keyCode && (e = o.deleteUpEvents, (0, a.default)(e).call(e,
                        function (e) {
                            return e(t)
                        }))
                }), e.on("keydown", function (t) {
                    var e;
                    8 === t.keyCode && (e = o.deleteDownEvents, (0, a.default)(e).call(e,
                        function (e) {
                            return e(t)
                        }))
                }), e.on("paste", function (t) {
                    var e;
                    d.UA.isIE() || (t.preventDefault(), e = o.pasteEvents, (0, a.default)(e).call(
                        e,
                        function (e) {
                            return e(t)
                        }))
                }), e.on("keydown", function (e) {
                    (n.isFocus || n.isCompatibleMode) && (e.ctrlKey || e.metaKey) && 90 === e.keyCode &&
                    (e.preventDefault(), e.shiftKey ? n.history.restore() : n.history.revoke())
                }), e.on("keyup", function (t) {
                    var e;
                    9 === t.keyCode && (t.preventDefault(), e = o.tabUpEvents, (0, a.default)(e)
                        .call(e, function (e) {
                            return e(t)
                        }))
                }), e.on("keydown", function (t) {
                    var e;
                    9 === t.keyCode && (t.preventDefault(), e = o.tabDownEvents, (0, a.default)
                    (e).call(e, function (e) {
                        return e(t)
                    }))
                }), e.on("scroll", d.throttle(function (t) {
                    var e = o.textScrollEvents;
                    (0, a.default)(e).call(e, function (e) {
                        return e(t)
                    })
                }, 100)), c.default(document).on("dragleave", t).on("drop", t).on("dragenter", t).on(
                    "dragover", t), n.beforeDestroy(function () {
                    c.default(document).off("dragleave", t).off("drop", t).off("dragenter", t).off(
                        "dragover", t)
                }), e.on("drop", function (t) {
                    t.preventDefault();
                    var e = o.dropEvents;
                    (0, a.default)(e).call(e, function (e) {
                        return e(t)
                    })
                }), e.on("click", function (e) {
                    var t, n = null,
                        e = e.target,
                        e = c.default(e);
                    "A" === e.getNodeName() ? n = e : null != (t = e.parentUntil("a")) && (n =
                        t), n && (t = o.linkClickEvents, (0, a.default)(t).call(t, function (
                        e) {
                        return e(n)
                    }))
                }), e.on("click", function (e) {
                    var t = null,
                        n = e.target,
                        n = c.default(n);
                    "IMG" !== n.getNodeName() || n.elems[0].getAttribute("data-emoji") || (e.stopPropagation(),
                        t = n), t && (n = o.imgClickEvents, (0, a.default)(n).call(n,
                        function (e) {
                            return e(t)
                        }))
                }), e.on("click", function (e) {
                    var t, n = null,
                        e = e.target,
                        e = c.default(e);
                    "PRE" === e.getNodeName() ? n = e : null !== (t = e.parentUntil("pre")) &&
                        (n = t), n && (t = o.codeClickEvents, (0, a.default)(t).call(t,
                        function (e) {
                            return e(n)
                        }))
                }), e.on("click", function (e) {
                    var t = null,
                        e = e.target,
                        e = c.default(e);
                    (t = "HR" === e.getNodeName() ? e : t) && (n.selection.createRangeByElem(t),
                        n.selection.restoreSelection(), e = o.splitLineEvents, (0, a.default)(e)
                        .call(e, function (e) {
                            return e(t)
                        }))
                }), n.$toolbarElem.on("click", function (t) {
                    var e = o.toolbarClickEvents;
                    (0, a.default)(e).call(e, function (e) {
                        return e(t)
                    })
                }), n.$textContainerElem.on("mousedown", function (e) {
                    e = e.target;
                    c.default(e).hasClass("w-e-img-drag-rb") && (e = o.imgDragBarMouseDownEvents,
                        (0, a.default)(e).call(e, function (e) {
                            return e()
                        }))
                }), e.on("click", function (e) {
                    var t = null,
                        e = e.target;
                    (t = c.default(e).parentUntilEditor("TABLE", n, e)) && (e = o.tableClickEvents,
                        (0, a.default)(e).call(e, function (e) {
                            return e(t)
                        }))
                }), e.on("keydown", function (t) {
                    var e;
                    13 === t.keyCode && (e = o.enterDownEvents, (0, a.default)(e).call(e,
                        function (e) {
                            return e(t)
                        }))
                }), e.on("click", function (e) {
                    var t = null,
                        n = e.target,
                        n = c.default(n);
                    "VIDEO" === n.getNodeName() && (e.stopPropagation(), t = n), t && (n = o.videoClickEvents,
                        (0, a.default)(n).call(n, function (e) {
                            return e(t)
                        }))
                })
            }, v);

        function v(e) {
            this.editor = e, this.eventHooks = {
                onBlurEvents: [],
                changeEvents: [],
                dropEvents: [],
                clickEvents: [],
                keydownEvents: [],
                keyupEvents: [],
                tabUpEvents: [],
                tabDownEvents: [],
                enterUpEvents: [],
                enterDownEvents: [],
                deleteUpEvents: [],
                deleteDownEvents: [],
                pasteEvents: [],
                linkClickEvents: [],
                codeClickEvents: [],
                textScrollEvents: [],
                toolbarClickEvents: [],
                imgClickEvents: [],
                imgDragBarMouseDownEvents: [],
                tableClickEvents: [],
                menuClickEvents: [],
                dropListMenuHoverEvents: [],
                splitLineEvents: [],
                videoClickEvents: []
            }
        }
        t.default = n
    }, function (e, t, n) {
        n = n(288);
        e.exports = n
    }, function (e, t, n) {
        var o = n(289),
            i = Array.prototype;
        e.exports = function (e) {
            var t = e.find;
            return e === i || e instanceof Array && t === i.find ? o : t
        }
    }, function (e, t, n) {
        n(290);
        n = n(14);
        e.exports = n("Array").find
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(29).find,
            n = n(89),
            r = !0;
        "find" in [] && Array(1).find(function () {
            r = !1
        }), o({
            target: "Array",
            proto: !0,
            forced: r
        }, {
            find: function (e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n("find")
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(292)),
            r = o.__importDefault(n(293)),
            a = o.__importDefault(n(294)),
            l = o.__importDefault(n(295)),
            u = o.__importDefault(n(302));
        t.default = function (e) {
            var t = e.editor,
                e = e.eventHooks;
            i.default(t, e.enterUpEvents, e.enterDownEvents), r.default(t, e.deleteUpEvents, e.deleteDownEvents),
                a.default(t, e.tabDownEvents), l.default(t, e.pasteEvents), u.default(t, e.imgClickEvents)
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(26));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a = n(2).__importDefault(n(3));
        t.default = function (o, e, t) {
            function i(e) {
                var t, n = a.default("<p><br></p>");
                n.insertBefore(e), 0 <= (0, r.default)(t = e.html()).call(t, "<img") ? n.remove() : (o.selection
                    .createRangeByElem(n, !0, !0), o.selection.restoreSelection(), e.remove())
            }
            e.push(function () {
                var e = o.$textElem,
                    t = o.selection.getSelectionContainerElem(),
                    n = t.parent();
                "<code><br></code>" !== n.html() ? n.equal(e) && ("P" === t.getNodeName() &&
                    null === t.attr("data-we-empty-p") || t.text() || i(t)) : i(t)
            }), t.push(function (e) {
                var t;
                o.selection.saveRange(null === (t = getSelection()) || void 0 === t ? void 0 :
                    t.getRangeAt(0)), o.selection.getSelectionContainerElem().id === o.textElemId &&
                (e.preventDefault(), o.cmd.do("insertHTML", "<p><br></p>"))
            })
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(19));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            a = n(7),
            l = i.__importDefault(n(3));
        t.default = function (n, e, t) {
            e.push(function () {
                var e = n.$textElem,
                    t = (0, r.default)(t = e.html().toLowerCase()).call(t);
                t && "<br>" !== t || (t = l.default(a.EMPTY_P), e.html(" "), e.append(t), n.selection
                    .createRangeByElem(t, !1, !0), n.selection.restoreSelection(), n.selection
                    .moveCursor(t.getNode(), 0))
            }), t.push(function (e) {
                var t = n.$textElem;
                (0, r.default)(t = t.html().toLowerCase()).call(t) === a.EMPTY_P && e.preventDefault()
            })
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = function (n, e) {
            e.push(function () {
                var e, t;
                !n.cmd.queryCommandSupported("insertHTML") || (e = n.selection.getSelectionContainerElem()) &&
                (t = e.parent(), e = e.getNodeName(), t = t.getNodeName(), "CODE" == e ||
                "CODE" === t || "PRE" === t || /hljs/.test(t) ? n.cmd.do("insertHTML",
                    n.config.languageTab) : n.cmd.do("insertHTML",
                    "&nbsp;&nbsp;&nbsp;&nbsp;"))
            })
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(19));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var f = n(128),
            d = n(6),
            p = n(7);

        function h(e) {
            return e = (e = e.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).replace(
                /<p><\/p>/gim, "<p><br></p>"), (0, r.default)(e).call(e)
        }
        t.default = function (c, e) {
            e.push(function (e) {
                var t = c.config,
                    n = t.pasteFilterStyle,
                    o = t.pasteIgnoreImg,
                    i = t.pasteTextHandle,
                    r = f.getPasteHtml(e, n, o),
                    a = (a = f.getPasteText(e)).replace(/\n/gm, "<br>"),
                    l = c.selection.getSelectionContainerElem();
                if (l) {
                    t = null == l ? void 0 : l.getNodeName(), o = null == l ? void 0 : l.getNodeTop(
                        c), e = "";
                    if (o.elems[0] && (e = null == o ? void 0 : o.getNodeName()), "CODE" === t ||
                    "PRE" === e) return i && d.isFunction(i) && (a = "" + (i(a) || "")),
                        void c.cmd.do("insertHTML", a.replace(/<br>|<br\/>/gm, "\n").replace(
                            /<[^>]+>/gm, ""));
                    if (p.urlRegex.test(a) && n) return i && d.isFunction(i) && (a = "" + (i(a) ||
                        "")), c.cmd.do("insertHTML", '<a href="' + a +
                        '" target="_blank">' + a + "</a>");
                    if (r) try {
                        if (i && d.isFunction(i) && (r = "" + (i(r) || "")),
                        /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(r) && n) c.cmd.do("insertHTML",
                            "" + h(a));
                        else {
                            var u = h(r);
                            if (function (e) {
                                if ("" !== e) {
                                    var t = document.createElement("div");
                                    return t.innerHTML = e, "P" === (null === (t = t.firstChild) ||
                                    void 0 === t ? void 0 : t.nodeName)
                                }
                            }(u)) {
                                var s = c.$textElem;
                                if (c.cmd.do("insertHTML", u), s.equal(l)) return void c.selection
                                    .createEmptyRange();
                                ! function (e) {
                                    if (null != e && e.length) {
                                        e = e.elems[0];
                                        return "P" === e.nodeName && "<br>" === e.innerHTML
                                    }
                                }(o) || o.remove()
                            } else c.cmd.do("insertHTML", u)
                        }
                    } catch (e) {
                        i && d.isFunction(i) && (a = "" + (i(a) || "")), c.cmd.do(
                            "insertHTML", "" + h(a))
                    }
                }
            })
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            c = o(n(19)),
            f = o(n(4)),
            d = o(n(55));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            p = n(297),
            r = i.__importDefault(n(301));

        function h(e, t) {
            var n;
            return e = (0, c.default)(n = e.toLowerCase()).call(n), p.IGNORE_TAGS.has(e) || !(!t || "img" !==
                e)
        }
        t.default = function (e, a, l) {
            void 0 === a && (a = !0), void 0 === l && (l = !1);
            var u = [],
                s = "";
            (new r.default).parse(e, {
                startElement: function (e, t) {
                    var n, o, i, r;
                    i = e, (i = (0, c.default)(i).call(i)) && (p.EMPTY_TAGS.has(i) || (s =
                        i)), h(e, l) || (n = p.NECESSARY_ATTRS.get(e) || [], o = [], (0,
                        f.default)(t).call(t, function (e) {
                        var t = e.name;
                        "style" !== t ? !1 !== (0, d.default)(n).call(n, t) &&
                            o.push(e) : a || o.push(e)
                    }), i = o, t = "", t = "<" + (e = e), r = [], (0, f.default)(i)
                        .call(i, function (e) {
                            r.push(e.name + '="' + e.value + '"')
                        }), t = t = (t = 0 < r.length ? t + " " + r.join(" ") : t) + (p
                        .EMPTY_TAGS.has(e) ? "/" : "") + ">", u.push(t))
                },
                characters: function (e) {
                    e && (h(s, l) || u.push(e))
                },
                endElement: function (e) {
                    h(e, l) || (u.push("</" + e + ">"), s = "")
                },
                comment: function (e) {}
            });
            var t, e = u.join("");
            return t = /<span>(.*?)<\/span>/, e = e.replace(/<span>.*?<\/span>/gi, function (e) {
                e = e.match(t);
                return null == e ? "" : e[1]
            })
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(129)),
            n = o(n(120));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.TOP_LEVEL_TAGS = t.EMPTY_TAGS = t.NECESSARY_ATTRS = t.IGNORE_TAGS = void 0, t.IGNORE_TAGS =
            new r.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link",
                "frame", "iframe", "title", "svg", "center", "o:p"]), t.NECESSARY_ATTRS = new n.default([[
            "img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]],
            ["th", ["colspan", "rowspan"]]]), t.EMPTY_TAGS = new r.default(["area", "base", "basefont",
            "br", "col", "hr", "img", "input", "isindex", "embed"]), t.TOP_LEVEL_TAGS = new r.default([
            "h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr",
            "form"])
    }, function (e, t, n) {
        n = n(299);
        e.exports = n
    }, function (e, t, n) {
        n(300), n(69), n(51), n(52);
        n = n(10);
        e.exports = n.Set
    }, function (e, t, n) {
        "use strict";
        var o = n(121),
            n = n(123);
        e.exports = o("Set", function (e) {
            return function () {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, n)
    }, function (e, t) {
        function n() {}
        n.prototype = {
            handler: null,
            startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
            endTagRe: /^<\/([^>\s]+)[^>]*>/m,
            attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
            parse: function (e, t) {
                t && (this.contentHandler = t);
                for (var n, o, i, r = !1, a = this; 0 < e.length;) "\x3c!--" == e.substring(0, 4) ?
                    r = -1 == (i = e.indexOf("--\x3e")) || (this.contentHandler.comment(e.substring(
                        4, i)), e = e.substring(i + 3), !1) : "</" == e.substring(0, 2) ? r = !this
                        .endTagRe.test(e) || (RegExp.leftContext, n = RegExp.lastMatch, o = RegExp.rightContext,
                        n.replace(this.endTagRe, function () {
                            return a.parseEndTag.apply(a, arguments)
                        }), e = o, !1) : "<" == e.charAt(0) && (r = !this.startTagRe.test(e) || (
                        RegExp.leftContext, n = RegExp.lastMatch, o = RegExp.rightContext, n.replace(
                            this.startTagRe,
                            function () {
                                return a.parseStartTag.apply(a, arguments)
                            }), e = o, !1)), r && (e = -1 == (i = e.indexOf("<")) ? (this.contentHandler
                    .characters(e), "") : (this.contentHandler.characters(e.substring(0, i)),
                    e.substring(i))), r = !0
            },
            parseStartTag: function (e, t, n) {
                n = this.parseAttributes(t, n);
                this.contentHandler.startElement(t, n)
            },
            parseEndTag: function (e, t) {
                this.contentHandler.endElement(t)
            },
            parseAttributes: function (u, e) {
                var s = this,
                    c = [];
                return e.replace(this.attrRe, function (e, t, n, o, i, r, a, l) {
                    c.push(s.parseAttribute(u, e, t, n, o, i, r, a, l))
                }), c
            },
            parseAttribute: function (e, t, n) {
                var o = "";
                return arguments[7] ? o = arguments[8] : arguments[5] ? o = arguments[6] :
                    arguments[3] && (o = arguments[4]), {
                    name: n,
                    value: !o && !arguments[3] ? null : o
                }
            }
        }, e.exports = n
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = function (t, e) {
            e.push(function (e) {
                t.selection.createRangeByElem(e), t.selection.restoreSelection()
            })
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            c = n(6),
            f = i.__importDefault(n(3));
        t.default = function u(e) {
            var s = [],
                e = e.childNodes() || [];
            return (0, r.default)(e).call(e, function (e) {
                var t, n = e.nodeType;
                if (3 === n && (t = e.textContent || "", t = c.replaceHtmlSymbol(t)), 1 === n) {
                    (t = {}).tag = e.nodeName.toLowerCase();
                    for (var o = [], i = e.attributes, r = i.length || 0, a = 0; a < r; a++) {
                        var l = i[a];
                        o.push({
                            name: l.name,
                            value: l.value
                        })
                    }
                    t.attrs = o, t.children = u(f.default(e))
                }
                t && s.push(t)
            }), s
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            r = o(n(94)),
            i = o(n(1)),
            a = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var l = n(2).__importDefault(n(3));
        t.default = function o(e, t) {
            var i = t = void 0 === t ? document.createElement("div") : t;
            return (0, a.default)(e).call(e, function (e) {
                var t, n;
                "string" == typeof e && (n = document.createTextNode(e)), "object" === (0, r.default)
                (e) && (n = document.createElement(e.tag), (0, a.default)(t = e.attrs).call(
                    t,
                    function (e) {
                        l.default(n).attr(e.name, e.value)
                    }), e.children && 0 < e.children.length && o(e.children, n.getRootNode())),
                n && i.appendChild(n)
            }), l.default(i)
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            u = o(n(91)),
            s = o(n(74)),
            c = o(n(55)),
            f = o(n(4)),
            d = o(n(130)),
            r = o(n(131)),
            p = o(n(45)),
            a = o(n(56));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            h = i.__importDefault(n(119)),
            l = i.__importDefault(n(314)),
            A = i.__importDefault(n(3)),
            n = (v.prototype.extend = function (e, t) {
                t && "function" == typeof t && (this.constructorList[e] = t)
            }, v.prototype.init = function () {
                var e, n = this,
                    t = this.editor.config,
                    o = t.excludeMenus;
                !1 === (0, u.default)(o) && (o = []), t.menus = (0, s.default)(e = t.menus).call(e,
                    function (e) {
                        return !1 === (0, c.default)(o).call(o, e)
                    }), (0, f.default)(e = t.menus).call(e, function (e) {
                    var t = n.constructorList[e];
                    n._initMenuList(e, t)
                });
                for (var i = 0, r = (0, d.default)(h.default.globalCustomMenuConstructorList); i < r.length; i++) {
                    var a = r[i],
                        l = a[0],
                        a = a[1];
                    this._initMenuList(l, a)
                }
                this._addToToolbar(), t.showMenuTooltips && this._bindMenuTooltips()
            }, v.prototype._initMenuList = function (t, e) {
                var n;
                null != e && "function" == typeof e && ((0, r.default)(n = this.menuList).call(n,
                    function (e) {
                        return e.key === t
                    }) ? console.warn("菜单名称重复:" + t) : ((e = new e(this.editor)).key = t, this.menuList
                    .push(e)))
            }, v.prototype._bindMenuTooltips = function () {
                var i = this.editor,
                    r = i.$toolbarElem,
                    a = i.config.menuTooltipPosition,
                    l = A.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + a +
                        '">\n            <div class="w-e-menu-tooltip-item-wrapper">\n              <div></div>\n            </div>\n          </div>'
                    );
                l.css("visibility", "hidden"), r.append(l), l.css("z-index", i.zIndex.get("tooltip"));
                var u = 0;

                function s() {
                    u && clearTimeout(u)
                }

                function c() {
                    s(), l.css("visibility", "hidden")
                }
                r.on("mouseover", function (e) {
                    var t, n, o, e = e.target,
                        e = A.default(e);
                    e.isContain(r) ? c() : (null != e.parentUntil(".w-e-droplist") ? c() : e.attr(
                        "data-title") ? (o = e.attr("data-title"), n = e) : null != (t =
                        e.parentUntil(".w-e-menu")) && (o = t.attr("data-title"), n = t),
                        o && n ? (s(), t = n.getOffsetData(), l.text(i.i18next.t(
                            "menus.title." + o)), n = l.getOffsetData(), o = t.left + t
                            .width / 2 - n.width / 2, l.css("left", o + "px"), "up" === a ?
                            l.css("top", t.top - n.height - 8 + "px") : "down" === a && l.css(
                            "top", t.top + t.height + 8 + "px"), u = (0, p.default)(
                            function () {
                                l.css("visibility", "visible")
                            }, 200)) : c())
                }).on("mouseleave", function () {
                    c()
                })
            }, v.prototype._addToToolbar = function () {
                var e, t = this.editor.$toolbarElem;
                (0, f.default)(e = this.menuList).call(e, function (e) {
                    e = e.$elem;
                    e && t.append(e)
                })
            }, v.prototype.menuFind = function (e) {
                for (var t = this.menuList, n = 0, o = t.length; n < o; n++)
                    if (t[n].key === e) return t[n];
                return t[0]
            }, v.prototype.changeActive = function () {
                var e;
                (0, f.default)(e = this.menuList).call(e, function (e) {
                    var t;
                    (0, p.default)((0, a.default)(t = e.tryChangeActive).call(t, e), 100)
                })
            }, v);

        function v(e) {
            this.editor = e, this.menuList = [], this.constructorList = l.default
        }
        t.default = n
    }, function (e, t, n) {
        n = n(307);
        e.exports = n
    }, function (e, t, n) {
        n(308);
        n = n(10);
        e.exports = n.Object.entries
    }, function (e, t, n) {
        var o = n(5),
            i = n(309).entries;
        o({
            target: "Object",
            stat: !0
        }, {
            entries: function (e) {
                return i(e)
            }
        })
    }, function (e, t, n) {
        var u = n(15),
            s = n(63),
            c = n(27),
            f = n(58).f,
            n = function (l) {
                return function (e) {
                    for (var t, n = c(e), o = s(n), i = o.length, r = 0, a = []; r < i;) t = o[r++], u &&
                    !f.call(n, t) || a.push(l ? [t, n[t]] : n[t]);
                    return a
                }
            };
        e.exports = {
            entries: n(!0),
            values: n(!1)
        }
    }, function (e, t, n) {
        n = n(311);
        e.exports = n
    }, function (e, t, n) {
        var o = n(312),
            i = Array.prototype;
        e.exports = function (e) {
            var t = e.some;
            return e === i || e instanceof Array && t === i.some ? o : t
        }
    }, function (e, t, n) {
        n(313);
        n = n(14);
        e.exports = n("Array").some
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(29).some;
        o({
            target: "Array",
            proto: !0,
            forced: !n(71)("some")
        }, {
            some: function (e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(315)),
            r = o.__importDefault(n(316)),
            a = o.__importDefault(n(321)),
            l = o.__importDefault(n(326)),
            u = o.__importDefault(n(327)),
            s = o.__importDefault(n(328)),
            c = o.__importDefault(n(329)),
            f = o.__importDefault(n(331)),
            d = o.__importDefault(n(333)),
            p = o.__importDefault(n(334)),
            h = o.__importDefault(n(337)),
            A = o.__importDefault(n(338)),
            v = o.__importDefault(n(339)),
            m = o.__importDefault(n(350)),
            g = o.__importDefault(n(364)),
            y = o.__importDefault(n(368)),
            w = o.__importDefault(n(136)),
            x = o.__importDefault(n(377)),
            _ = o.__importDefault(n(379)),
            E = o.__importDefault(n(380)),
            b = o.__importDefault(n(381)),
            C = o.__importDefault(n(401)),
            S = o.__importDefault(n(406)),
            n = o.__importDefault(n(409));
        t.default = {
            bold: i.default,
            head: r.default,
            italic: l.default,
            link: a.default,
            underline: u.default,
            strikeThrough: s.default,
            fontName: c.default,
            fontSize: f.default,
            justify: d.default,
            quote: p.default,
            backColor: h.default,
            foreColor: A.default,
            video: v.default,
            image: m.default,
            indent: g.default,
            emoticon: y.default,
            list: w.default,
            lineHeight: x.default,
            undo: _.default,
            redo: E.default,
            table: b.default,
            code: C.default,
            splitLine: S.default,
            todo: n.default
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(23)),
            a = i.__importDefault(n(3)),
            i = (o = r.default, i.__extends(l, o), l.prototype.clickHandler = function () {
                var e = this.editor,
                    t = e.selection.isSelectionEmpty();
                t && e.selection.createEmptyRange(), e.cmd.do("bold"), t && (e.selection.collapseRange(),
                    e.selection.restoreSelection())
            }, l.prototype.tryChangeActive = function () {
                this.editor.cmd.queryCommandState("bold") ? this.active() : this.unActive()
            }, l);

        function l(e) {
            var t = a.default(
                '<div class="w-e-menu" data-title="加粗">\n                <i class="w-e-icon-bold"></i>\n            </div>'
            );
            return o.call(this, t, e) || this
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(26)),
            a = o(n(30)),
            d = o(n(4)),
            l = o(n(317)),
            u = o(n(55));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var s, o = n(2),
            i = o.__importDefault(n(24)),
            p = o.__importDefault(n(3)),
            c = n(6),
            h = n(7),
            o = (s = i.default, o.__extends(f, s), f.prototype.command = function (e) {
                var t, n = this.editor,
                    o = n.selection.getSelectionContainerElem();
                if (o && n.$textElem.equal(o)) this.setMultilineHead(e);
                else {
                    if (-1 < (0, r.default)(t = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(
                        t, p.default(o).getNodeName())) return;
                    n.cmd.do("formatBlock", e)
                }
                "<p>" !== e && this.addUidForSelectionElem()
            }, f.prototype.addUidForSelectionElem = function () {
                var e = this.editor.selection.getSelectionContainerElem(),
                    t = c.getRandomCode();
                p.default(e).attr("id", t)
            }, f.prototype.addListenerCatalog = function () {
                var e = this;
                this.editor.txt.eventHooks.changeEvents.push(function () {
                    e.getCatalogs()
                })
            }, f.prototype.getCatalogs = function () {
                var e = this.editor,
                    t = this.editor.$textElem,
                    e = e.config.onCatalogChange,
                    t = (0, a.default)(t).call(t, "h1,h2,h3,h4,h5"),
                    r = [];
                (0, d.default)(t).call(t, function (e, t) {
                    var n = p.default(e),
                        o = n.attr("id"),
                        i = n.getNodeName(),
                        e = n.text();
                    o || (o = c.getRandomCode(), n.attr("id", o)), e && r.push({
                        tag: i,
                        id: o,
                        text: e
                    })
                }), (0, l.default)(this.oldCatalogs) !== (0, l.default)(r) && (this.oldCatalogs = r,
                e && e(r))
            }, f.prototype.setMultilineHead = function (i) {
                var r = this,
                    n = this.editor,
                    e = n.selection,
                    t = null === (o = e.getSelectionContainerElem()) || void 0 === o ? void 0 : o.elems[
                        0],
                    a = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"],
                    o = p.default(e.getSelectionStartElem()),
                    l = p.default(e.getSelectionEndElem());
                l.elems[0].outerHTML !== p.default(h.EMPTY_P).elems[0].outerHTML || l.elems[0].nextSibling ||
                (l = l.prev());
                var u = [];
                u.push(o.getNodeTop(n));
                var s = [],
                    o = null === (o = e.getRange()) || void 0 === o ? void 0 : o.commonAncestorContainer
                        .childNodes;
                null != o && (0, d.default)(o).call(o, function (e, t) {
                    e === u[0].getNode() && s.push(t), e === l.getNodeTop(n).getNode() && s.push(
                        t)
                });
                for (var c = 0; u[c].getNode() !== l.getNodeTop(n).getNode();) {
                    if (!u[c].elems[0]) return;
                    var f = p.default(u[c].next().getNode());
                    u.push(f), c++
                }
                null != u && (0, d.default)(u).call(u, function (e, t) {
                    var n, o;
                    r.hasTag(e, a) || (n = p.default(i), o = e.parent().getNode(), n.html("" +
                        e.html()), o.insertBefore(n.getNode(), e.getNode()), e.remove())
                }), e.createRangeByElems(t.children[s[0]], t.children[s[1]])
            }, f.prototype.hasTag = function (e, t) {
                var n = this;
                if (!e) return !1;
                if ((0, u.default)(t).call(t, null == e ? void 0 : e.getNodeName())) return !0;
                var o = !1;
                return null !== (e = e.children()) && void 0 !== e && (0, d.default)(e).call(e,
                    function (e) {
                        o = n.hasTag(p.default(e), t)
                    }), o
            }, f.prototype.tryChangeActive = function () {
                var e = this.editor.cmd.queryCommandValue("formatBlock");
                /^h/i.test(e) ? this.active() : this.unActive()
            }, f);

        function f(e) {
            var t = this,
                n = p.default('<div class="w-e-menu" data-title="标题"><i class="w-e-icon-header"></i></div>'),
                o = {
                    width: 100,
                    title: "设置标题",
                    type: "list",
                    list: [{
                        $elem: p.default("<h1>H1</h1>"),
                        value: "<h1>"
                    }, {
                        $elem: p.default("<h2>H2</h2>"),
                        value: "<h2>"
                    }, {
                        $elem: p.default("<h3>H3</h3>"),
                        value: "<h3>"
                    }, {
                        $elem: p.default("<h4>H4</h4>"),
                        value: "<h4>"
                    }, {
                        $elem: p.default("<h5>H5</h5>"),
                        value: "<h5>"
                    }, {
                        $elem: p.default("<p>" + e.i18next.t("menus.dropListMenu.head.正文") + "</p>"),
                        value: "<p>"
                    }],
                    clickHandler: function (e) {
                        t.command(e)
                    }
                },
                t = s.call(this, n, e, o) || this;
            return e.config.onCatalogChange && (t.oldCatalogs = [], t.addListenerCatalog(), t.getCatalogs()),
                t
        }
        t.default = o
    }, function (e, t, n) {
        e.exports = n(318)
    }, function (e, t, n) {
        n = n(319);
        e.exports = n
    }, function (e, t, n) {
        n(320);
        var o = n(10);
        o.JSON || (o.JSON = {
            stringify: JSON.stringify
        }), e.exports = function (e, t, n) {
            return o.JSON.stringify.apply(null, arguments)
        }
    }, function (e, t, n) {
        function i(e, t, n) {
            var o = n.charAt(t - 1),
                t = n.charAt(t + 1);
            return u.test(e) && !s.test(t) || s.test(e) && !u.test(o) ? "\\u" + e.charCodeAt(0).toString(16) :
                e
        }
        var o = n(5),
            r = n(28),
            n = n(12),
            a = r("JSON", "stringify"),
            l = /[\uD800-\uDFFF]/g,
            u = /^[\uD800-\uDBFF]$/,
            s = /^[\uDC00-\uDFFF]$/,
            n = n(function () {
                return '"\\udf06\\ud834"' !== a("\udf06\ud834") || '"\\udead"' !== a("\udead")
            });
        a && o({
            target: "JSON",
            stat: !0,
            forced: n
        }, {
            stringify: function (e, t, n) {
                var o = a.apply(null, arguments);
                return "string" == typeof o ? o.replace(l, i) : o
            }
        })
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(35)),
            a = i.__importDefault(n(3)),
            l = i.__importDefault(n(322)),
            u = i.__importDefault(n(133)),
            s = i.__importDefault(n(31)),
            c = i.__importDefault(n(324)),
            i = (o = r.default, i.__extends(f, o), f.prototype.clickHandler = function () {
                var e, t = this.editor;
                this.isActive ? (e = t.selection.getSelectionContainerElem()) && this.createPanel(e.text(),
                    e.attr("href")) : t.selection.isSelectionEmpty() ? this.createPanel("", "") :
                    this.createPanel(t.selection.getSelectionText(), "")
            }, f.prototype.createPanel = function (e, t) {
                t = l.default(this.editor, e, t);
                new s.default(this, t).create()
            }, f.prototype.tryChangeActive = function () {
                var e = this.editor;
                u.default(e) ? this.active() : this.unActive()
            }, f);

        function f(e) {
            var t = a.default('<div class="w-e-menu" data-title="链接"><i class="w-e-icon-link"></i></div>'),
                n = o.call(this, t, e) || this;
            return c.default(e), n
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            c = o(n(19));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            f = n(6),
            d = i.__importDefault(n(3)),
            p = i.__importDefault(n(133)),
            h = n(323);
        t.default = function (a, e, t) {
            var n, l = f.getRandom("input-link"),
                u = f.getRandom("input-text"),
                o = f.getRandom("btn-ok"),
                i = f.getRandom("btn-del"),
                r = p.default(a) ? "inline-block" : "none";

            function s() {
                var e;
                !p.default(a) || (e = a.selection.getSelectionContainerElem()) && (a.selection.createRangeByElem(
                    e), a.selection.restoreSelection(), n = e)
            }
            return {
                width: 300,
                height: 0,
                tabs: [{
                    title: a.i18next.t("menus.panelMenus.link.链接"),
                    tpl: '<div>\n                        <input\n                            id="' +
                        u +
                        '"\n                            type="text"\n                            class="block"\n                            value="' +
                        e + '"\n                            placeholder="' + a.i18next.t(
                            "menus.panelMenus.link.链接文字") +
                        '"/>\n                        </td>\n                        <input\n                            id="' +
                        l +
                        '"\n                            type="text"\n                            class="block"\n                            value="' +
                        t + '"\n                            placeholder="' + a.i18next.t("如") +
                        ' https://..."/>\n                        </td>\n                        <div class="w-e-button-container">\n                            <button type="button" id="' +
                        o + '" class="right">\n                                ' + a.i18next.t(
                            "插入") +
                        '\n                            </button>\n                            <button type="button" id="' +
                        i + '" class="gray right" style="display:' + r +
                        '">\n                                ' + a.i18next.t(
                            "menus.panelMenus.link.取消链接") +
                        "\n                            </button>\n                        </div>\n                    </div>",
                    events: [{
                        selector: "#" + o,
                        type: "click",
                        fn: function () {
                            a.selection.restoreSelection();
                            var e = a.selection.getSelectionRangeTopNodes()[0].getNode(),
                                t = window.getSelection(),
                                n = d.default("#" + l),
                                o = d.default("#" + u),
                                n = (0, c.default)(i = n.val()).call(i),
                                o = (0, c.default)(i = o.val()).call(i),
                                i = "",
                                t = null == (i = t && (null == t || !t.isCollapsed) ?
                                    null === (r = h.insertHtml(t, e)) || void 0 ===
                                    r ? void 0 : (0, c.default)(r).call(r) : i) ?
                                    void 0 : i.replace(/<.*?>/g, ""),
                                r = null !== (e = null == t ? void 0 : t.length) &&
                                void 0 !== e ? e : 0;
                            if (r <= o.length && (e = o.substring(0, r), r = o.substring(
                                r), t === e && (o = i + r)), n) {
                                o = o || n;
                                if (function (e, t) {
                                    if (void 0 !== (t = a.config.linkCheck(e, t))) {
                                        if (!0 === t) return 1;
                                        a.config.customAlert(t, "warning")
                                    }
                                }(o, n)) return o = o, n = n, p.default(a) && s(),
                                    a.cmd.do("insertHTML", '<a href="' + n +
                                        '" target="_blank">' + o + "</a>"), !0
                            }
                        }
                    }, {
                        selector: "#" + i,
                        type: "click",
                        fn: function () {
                            var e;
                            return p.default(a) && (s(), e = n.text(), a.cmd.do(
                                "insertHTML", "<span>" + e + "</span>")), !0
                        }
                    }]
                }]
            }
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));

        function p(e, t) {
            for (var n = e, o = e; n.textContent !== t && "P" !== (null == (n = (o = n).parentNode ? null ==
            n ? void 0 : n.parentNode : n) ? void 0 : n.nodeName););
            return o
        }

        function h(e, t) {
            var n, o = e.nodeName,
                i = "";
            return 3 === e.nodeType ? t : (1 === e.nodeType && ((n = e.getAttribute("style")) && (i = i +
                ' style="' + n + '"'), (n = e.getAttribute("face")) && (i = i + ' face="' + n +
                '"'), (e = e.getAttribute("color")) && (i = i + ' color="' + e + '"')), "<" + (o =
                o.toLowerCase()) + i + ">" + t + "</" + o + ">")
        }

        function A(e, t, n, o) {
            for (var i, r = null === (i = t.textContent) || void 0 === i ? void 0 : i.substring(n, o), a =
                t, l = ""; r = l = h(a, null != r ? r : ""), (a = a.parentElement ? null == a ? void 0 :
                a.parentElement : a).textContent !== e;);
            return l
        }

        function v(e, t) {
            return (0, r.default)(e).call(e, function (e) {
                t = h(e, t)
            }), t
        }(0, i.default)(t, "__esModule", {
            value: !0
        }), t.insertHtml = t.createPartHtml = t.makeHtmlString = t.getTopNode = void 0, t.getTopNode = p, t
            .makeHtmlString = h, t.createPartHtml = A, t.insertHtml = function (e, t) {
            var n, o = e.anchorNode,
                i = e.focusNode,
                r = e.anchorOffset,
                a = e.focusOffset,
                l = null !== (c = t.textContent) && void 0 !== c ? c : "",
                u = function (e) {
                    var t, n = null !== (t = e.textContent) && void 0 !== t ? t : "",
                        o = [];
                    for (;
                        (null == e ? void 0 : e.textContent) === n;) "P" !== e.nodeName && o.push(e), e =
                        e.childNodes[0];
                    return o
                }(t),
                e = "",
                s = "",
                c = "",
                t = o,
                f = i,
                d = o;
            if (null != o && o.isEqualNode(null != i ? i : null)) return v(u, A(l, o, r, a));
            for (o && (e = A(l, o, null != r ? r : 0)), i && (c = A(l, i, 0, a)), o && (t = p(o, l)), i &&
            (f = p(i, l)), d = null !== (t = null == t ? void 0 : t.nextSibling) && void 0 !== t ?
                t : o; null == d || !d.isEqualNode(null != f ? f : null);) "#text" === (null == d ?
                void 0 : d.nodeName) ? s += null == d ? void 0 : d.textContent : (n = null === (n =
                    null === (n = null == d ? void 0 : d.firstChild) || void 0 === n ? void 0 : n.parentElement
            ) || void 0 === n ? void 0 : n.innerHTML, d && (s += h(d, null != n ? n : ""))), d =
                null !== (n = null == d ? void 0 : d.nextSibling) && void 0 !== n ? n : d;
            return v(u, "" + e + s + c)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2).__importDefault(n(325));
        t.default = function (e) {
            o.default(e)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(3)),
            r = o.__importDefault(n(36));

        function a(n) {
            var o;
            return {
                showLinkTooltip: function (e) {
                    var t = [{
                        $elem: i.default("<span>" + n.i18next.t("menus.panelMenus.link.查看链接") +
                            "</span>"),
                        onClick: function (e, t) {
                            t = t.attr("href");
                            return window.open(t, "_target"), !0
                        }
                    }, {
                        $elem: i.default("<span>" + n.i18next.t("menus.panelMenus.link.取消链接") +
                            "</span>"),
                        onClick: function (e, t) {
                            e.selection.createRangeByElem(t), e.selection.restoreSelection();
                            t = t.text();
                            return e.cmd.do("insertHTML", "<span>" + t + "</span>"), !0
                        }
                    }];
                    (o = new r.default(n, e, t)).create()
                },
                hideLinkTooltip: function () {
                    o && (o.remove(), o = null)
                }
            }
        }
        t.default = function (e) {
            var t = (n = a(e)).showLinkTooltip,
                n = n.hideLinkTooltip;
            e.txt.eventHooks.linkClickEvents.push(t), e.txt.eventHooks.clickEvents.push(n), e.txt.eventHooks
                .keyupEvents.push(n), e.txt.eventHooks.toolbarClickEvents.push(n), e.txt.eventHooks.menuClickEvents
                .push(n), e.txt.eventHooks.textScrollEvents.push(n)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(23)),
            a = i.__importDefault(n(3)),
            i = (o = r.default, i.__extends(l, o), l.prototype.clickHandler = function () {
                var e = this.editor,
                    t = e.selection.isSelectionEmpty();
                t && e.selection.createEmptyRange(), e.cmd.do("italic"), t && (e.selection.collapseRange(),
                    e.selection.restoreSelection())
            }, l.prototype.tryChangeActive = function () {
                this.editor.cmd.queryCommandState("italic") ? this.active() : this.unActive()
            }, l);

        function l(e) {
            var t = a.default(
                '<div class="w-e-menu" data-title="斜体">\n                <i class="w-e-icon-italic"></i>\n            </div>'
            );
            return o.call(this, t, e) || this
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(23)),
            a = i.__importDefault(n(3)),
            i = (o = r.default, i.__extends(l, o), l.prototype.clickHandler = function () {
                var e = this.editor,
                    t = e.selection.isSelectionEmpty();
                t && e.selection.createEmptyRange(), e.cmd.do("underline"), t && (e.selection.collapseRange(),
                    e.selection.restoreSelection())
            }, l.prototype.tryChangeActive = function () {
                this.editor.cmd.queryCommandState("underline") ? this.active() : this.unActive()
            }, l);

        function l(e) {
            var t = a.default(
                '<div class="w-e-menu" data-title="下划线">\n                <i class="w-e-icon-underline"></i>\n            </div>'
            );
            return o.call(this, t, e) || this
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(23)),
            a = i.__importDefault(n(3)),
            i = (o = r.default, i.__extends(l, o), l.prototype.clickHandler = function () {
                var e = this.editor,
                    t = e.selection.isSelectionEmpty();
                t && e.selection.createEmptyRange(), e.cmd.do("strikeThrough"), t && (e.selection.collapseRange(),
                    e.selection.restoreSelection())
            }, l.prototype.tryChangeActive = function () {
                this.editor.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive()
            }, l);

        function l(e) {
            var t = a.default(
                '<div class="w-e-menu" data-title="删除线">\n                <i class="w-e-icon-strikethrough"></i>\n            </div>'
            );
            return o.call(this, t, e) || this
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var i, o = n(2),
            r = o.__importDefault(n(24)),
            a = o.__importDefault(n(3)),
            l = o.__importDefault(n(330)),
            o = (i = r.default, o.__extends(u, i), u.prototype.command = function (e) {
                var t, n, o = this.editor,
                    i = o.selection.isSelectionEmpty(),
                    r = null === (n = o.selection.getSelectionContainerElem()) || void 0 === n ? void 0 :
                        n.elems[0];
                null != r && (t = "p" !== (null == r ? void 0 : r.nodeName.toLowerCase()), n = (null ==
                r ? void 0 : r.getAttribute("face")) === e, i && (t && !n && (n = o.selection
                    .getSelectionRangeTopNodes(), o.selection.createRangeByElem(n[0]), o.selection
                    .moveCursor(n[0].elems[0])), o.selection.setRangeToElem(r), o.selection
                    .createEmptyRange()), o.cmd.do("fontName", e), i && (o.selection.collapseRange(),
                    o.selection.restoreSelection()))
            }, u.prototype.tryChangeActive = function () {}, u);

        function u(e) {
            var t = this,
                n = a.default(
                    '<div class="w-e-menu" data-title="字体">\n                <i class="w-e-icon-font"></i>\n            </div>'
                ),
                o = {
                    width: 100,
                    title: "设置字体",
                    type: "list",
                    list: new l.default(e.config.fontNames).getItemList(),
                    clickHandler: function (e) {
                        t.command(e)
                    }
                };
            return t = i.call(this, n, e, o) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a = n(2).__importDefault(n(3)),
            n = (l.prototype.getItemList = function () {
                return this.itemList
            }, l);

        function l(e) {
            var t = this;
            this.itemList = [], (0, r.default)(e).call(e, function (e) {
                t.itemList.push({
                    $elem: a.default("<p style=\"font-family:'" + e + "'\">" + e + "</p>"),
                    value: e
                })
            })
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var i, o = n(2),
            r = o.__importDefault(n(24)),
            a = o.__importDefault(n(3)),
            l = o.__importDefault(n(332)),
            o = (i = r.default, o.__extends(u, i), u.prototype.command = function (e) {
                var t, n, o = this.editor,
                    i = o.selection.isSelectionEmpty(),
                    r = null === (n = o.selection.getSelectionContainerElem()) || void 0 === n ? void 0 :
                        n.elems[0];
                null != r && (t = "p" !== (null == r ? void 0 : r.nodeName.toLowerCase()), n = (null ==
                r ? void 0 : r.getAttribute("size")) === e, i && (t && !n && (n = (t = o.selection
                    .getSelectionRangeTopNodes())[0].elems[0], o.selection.createRangeByElem(
                    t[0]), o.selection.moveCursor(n), r = n), o.selection.setRangeToElem(r),
                    o.selection.createEmptyRange()), o.cmd.do("fontSize", e), i && (o.selection
                    .collapseRange(), o.selection.restoreSelection()))
            }, u.prototype.tryChangeActive = function () {}, u);

        function u(e) {
            var t = this,
                n = a.default(
                    '<div class="w-e-menu" data-title="字号">\n                <i class="w-e-icon-text-heigh"></i>\n            </div>'
                ),
                o = {
                    width: 160,
                    title: "设置字号",
                    type: "list",
                    list: new l.default(e.config.fontSizes).getItemList(),
                    clickHandler: function (e) {
                        t.command(e)
                    }
                };
            return t = i.call(this, n, e, o) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2).__importDefault(n(3)),
            n = (i.prototype.getItemList = function () {
                return this.itemList
            }, i);

        function i(e) {
            for (var t in this.itemList = [], e) {
                var n = e[t];
                this.itemList.push({
                    $elem: o.default('<p style="font-size:' + t + '">' + n.name + "</p>"),
                    value: n.value
                })
            }
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4)),
            a = o(n(26));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var l, o = n(2),
            i = o.__importDefault(n(24)),
            u = o.__importDefault(n(3)),
            s = ["LI"],
            c = ["UL", "BLOCKQUOTE"],
            o = (l = i.default, o.__extends(f, l), f.prototype.command = function (t) {
                var e = this.editor,
                    n = e.selection,
                    o = n.getSelectionContainerElem();
                n.saveRange();
                e = e.selection.getSelectionRangeTopNodes();
                if (null != o && o.length)
                    if (this.isSpecialNode(o, e[0]) || this.isSpecialTopNode(e[0])) {
                        o = this.getSpecialNodeUntilTop(o, e[0]);
                        if (null == o) return;
                        u.default(o).css("text-align", t)
                    } else(0, r.default)(e).call(e, function (e) {
                        e.css("text-align", t)
                    });
                n.restoreSelection()
            }, f.prototype.getSpecialNodeUntilTop = function (e, t) {
                for (var n = e.elems[0], o = t.elems[0]; null != n;) {
                    if (-1 !== (0, a.default)(s).call(s, null == n ? void 0 : n.nodeName)) return n;
                    if (n.parentNode === o) return n;
                    n = n.parentNode
                }
                return n
            }, f.prototype.isSpecialNode = function (e, t) {
                t = this.getSpecialNodeUntilTop(e, t);
                return null != t && -1 !== (0, a.default)(s).call(s, t.nodeName)
            }, f.prototype.isSpecialTopNode = function (e) {
                return null != e && -1 !== (0, a.default)(c).call(c, null === (e = e.elems[0]) || void 0 ===
                e ? void 0 : e.nodeName)
            }, f.prototype.tryChangeActive = function () {}, f);

        function f(e) {
            var t = this,
                n = u.default(
                    '<div class="w-e-menu" data-title="对齐"><i class="w-e-icon-paragraph-left"></i></div>'),
                o = {
                    width: 100,
                    title: "对齐方式",
                    type: "list",
                    list: [{
                        $elem: u.default(
                            '<p>\n                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>\n                            ' +
                            e.i18next.t("menus.dropListMenu.justify.靠左") +
                            "\n                        </p>"),
                        value: "left"
                    }, {
                        $elem: u.default(
                            '<p>\n                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>\n                            ' +
                            e.i18next.t("menus.dropListMenu.justify.居中") +
                            "\n                        </p>"),
                        value: "center"
                    }, {
                        $elem: u.default(
                            '<p>\n                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>\n                            ' +
                            e.i18next.t("menus.dropListMenu.justify.靠右") +
                            "\n                        </p>"),
                        value: "right"
                    }, {
                        $elem: u.default(
                            '<p>\n                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>\n                            ' +
                            e.i18next.t("menus.dropListMenu.justify.两端") +
                            "\n                        </p>"),
                        value: "justify"
                    }],
                    clickHandler: function (e) {
                        t.command(e)
                    }
                };
            return t = l.call(this, n, e, o) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            l = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var r, o = n(2),
            u = o.__importDefault(n(3)),
            i = o.__importDefault(n(23)),
            a = o.__importDefault(n(335)),
            s = o.__importDefault(n(336)),
            c = n(7),
            o = (r = i.default, o.__extends(f, r), f.prototype.clickHandler = function () {
                var e = this.editor,
                    t = e.selection.isSelectionEmpty(),
                    n = e.selection.getSelectionRangeTopNodes(),
                    o = n[n.length - 1];
                if ("BLOCKQUOTE" !== this.getTopNodeName()) {
                    var i = s.default(n);
                    i.insertAfter(o), this.delSelectNode(n);
                    var r = null === (r = i.childNodes()) || void 0 === r ? void 0 : r.last().getNode();
                    return null == r ? void 0 : (r.textContent ? e.selection.moveCursor(r) : e.selection
                        .moveCursor(r, 0), this.tryChangeActive(), void u.default(c.EMPTY_P).insertAfter(
                        i))
                }
                var r = u.default(o.childNodes()),
                    i = r.length,
                    a = o;
                (0, l.default)(r).call(r, function (e) {
                    e = u.default(e);
                    e.insertAfter(a), a = e
                }), o.remove(), e.selection.moveCursor(r.elems[i - 1]), this.tryChangeActive(), t &&
                (e.selection.collapseRange(), e.selection.restoreSelection())
            }, f.prototype.tryChangeActive = function () {
                var e;
                "BLOCKQUOTE" === (null === (e = this.editor.selection.getSelectionRangeTopNodes()[0]) ||
                void 0 === e ? void 0 : e.getNodeName()) ? this.active(): this.unActive()
            }, f.prototype.getTopNodeName = function () {
                var e = this.editor.selection.getSelectionRangeTopNodes()[0];
                return null == e ? void 0 : e.getNodeName()
            }, f.prototype.delSelectNode = function (e) {
                (0, l.default)(e).call(e, function (e) {
                    e.remove()
                })
            }, f);

        function f(e) {
            var t = u.default(
                '<div class="w-e-menu" data-title="引用">\n                <i class="w-e-icon-quotes-left"></i>\n            </div>'
                ),
                n = r.call(this, t, e) || this;
            return a.default(e), n
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            r = n(7),
            a = o.__importDefault(n(3));
        t.default = function (i) {
            i.txt.eventHooks.enterDownEvents.push(function (e) {
                var t, n = i.selection.getSelectionContainerElem(),
                    o = i.selection.getSelectionRangeTopNodes()[0];
                "BLOCKQUOTE" === (null == o ? void 0 : o.getNodeName()) && ("BLOCKQUOTE" === n.getNodeName() &&
                (t = null === (t = n.childNodes()) || void 0 === t ? void 0 : t.getNode(),
                    i.selection.moveCursor(t)), "" === n.text() && (e.preventDefault(), n.remove(),
                    (n = a.default(r.EMPTY_P)).insertAfter(o), i.selection.moveCursor(n.getNode(),
                    0)), "" === o.text() && o.remove())
            })
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a = n(2).__importDefault(n(3));
        t.default = function (e) {
            var t = a.default("<blockquote></blockquote>");
            return (0, r.default)(e).call(e, function (e) {
                t.append(e.clone(!0))
            }), t
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(25));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a, o = n(2),
            i = o.__importDefault(n(24)),
            l = o.__importDefault(n(3)),
            u = n(6),
            o = (a = i.default, o.__extends(s, a), s.prototype.command = function (e) {
                var t, n = this.editor,
                    o = n.selection.isSelectionEmpty(),
                    i = null === (t = n.selection.getSelectionContainerElem()) || void 0 === t ? void 0 :
                        t.elems[0];
                null != i && (t = "p" !== (null == i ? void 0 : i.nodeName.toLowerCase()), i = null ==
                    i ? void 0 : i.style.backgroundColor, i = u.hexToRgb(e) === i, o && (t && !i &&
                        (i = n.selection.getSelectionRangeTopNodes(), n.selection.createRangeByElem(
                            i[0]), n.selection.moveCursor(i[0].elems[0])), n.selection.createEmptyRange()
                    ), n.cmd.do("backColor", e), o && (n.selection.collapseRange(), n.selection.restoreSelection())
                )
            }, s.prototype.tryChangeActive = function () {}, s);

        function s(e) {
            var t = this,
                n = l.default(
                    '<div class="w-e-menu" data-title="背景色">\n                <i class="w-e-icon-paint-brush"></i>\n            </div>'
                ),
                o = {
                    width: 120,
                    title: "背景颜色",
                    type: "inline-block",
                    list: (0, r.default)(o = e.config.colors).call(o, function (e) {
                        return {
                            $elem: l.default('<i style="color:' + e +
                                ';" class="w-e-icon-paint-brush"></i>'),
                            value: e
                        }
                    }),
                    clickHandler: function (e) {
                        t.command(e)
                    }
                };
            return t = a.call(this, n, e, o) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(25));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a, o = n(2),
            i = o.__importDefault(n(24)),
            l = o.__importDefault(n(3)),
            o = (a = i.default, o.__extends(u, a), u.prototype.command = function (e) {
                var t, n, o, i = this.editor,
                    r = i.selection.isSelectionEmpty(),
                    a = null === (n = i.selection.getSelectionContainerElem()) || void 0 === n ? void 0 :
                        n.elems[0];
                null != a && (t = "p" !== (null == a ? void 0 : a.nodeName.toLowerCase()), n = (null ==
                a ? void 0 : a.getAttribute("color")) === e, r && (t && !n && (o = i.selection
                    .getSelectionRangeTopNodes(), i.selection.createRangeByElem(o[0]), i.selection
                    .moveCursor(o[0].elems[0])), i.selection.setRangeToElem(a), i.selection
                    .createEmptyRange()), o = i.selection.getSelectionText(), "A" === a.nodeName &&
                a.textContent === o && (o = l.default("<span>&#8203;</span>").getNode(), a.appendChild(
                    o)), i.cmd.do("foreColor", e), r && (i.selection.collapseRange(), i.selection
                    .restoreSelection()))
            }, u.prototype.tryChangeActive = function () {}, u);

        function u(e) {
            var t = this,
                n = l.default(
                    '<div class="w-e-menu" data-title="文字颜色">\n                <i class="w-e-icon-pencil2"></i>\n            </div>'
                ),
                o = {
                    width: 120,
                    title: "文字颜色",
                    type: "inline-block",
                    list: (0, r.default)(o = e.config.colors).call(o, function (e) {
                        return {
                            $elem: l.default('<i style="color:' + e +
                                ';" class="w-e-icon-pencil2"></i>'),
                            value: e
                        }
                    }),
                    clickHandler: function (e) {
                        t.command(e)
                    }
                };
            return t = a.call(this, n, e, o) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(3)),
            a = i.__importDefault(n(31)),
            l = i.__importDefault(n(35)),
            u = i.__importDefault(n(340)),
            s = i.__importDefault(n(346)),
            i = (o = l.default, i.__extends(c, o), c.prototype.clickHandler = function () {
                this.createPanel("")
            }, c.prototype.createPanel = function (e) {
                e = u.default(this.editor, e);
                new a.default(this, e).create()
            }, c.prototype.tryChangeActive = function () {}, c);

        function c(e) {
            var t = r.default(
                '<div class="w-e-menu" data-title="视频">\n                <i class="w-e-icon-play"></i>\n            </div>'
                ),
                n = o.call(this, t, e) || this;
            return s.default(e), n
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            u = o(n(19));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            s = n(6),
            c = i.__importDefault(n(3)),
            f = i.__importDefault(n(341)),
            d = n(7);
        t.default = function (t, e) {
            var n = t.config,
                o = new f.default(t),
                i = s.getRandom("input-iframe"),
                r = s.getRandom("btn-ok"),
                a = s.getRandom("input-upload"),
                l = s.getRandom("btn-local-ok");
            return l = [{
                title: t.i18next.t("menus.panelMenus.video.上传视频"),
                tpl: '<div class="w-e-up-video-container">\n                    <div id="' + l +
                    '" class="w-e-up-btn">\n                        <i class="w-e-icon-upload2"></i>\n                    </div>\n                    <div style="display:none;">\n                        <input id="' +
                    a +
                    '" type="file" accept="video/*"/>\n                    </div>\n                 </div>',
                events: [{
                    selector: "#" + l,
                    type: "click",
                    fn: function () {
                        var e = c.default("#" + a).elems[0];
                        if (!e) return !0;
                        e.click()
                    }
                }, {
                    selector: "#" + a,
                    type: "change",
                    fn: function () {
                        var e = c.default("#" + a).elems[0];
                        if (!e) return !0;
                        e = e.files;
                        return e.length && o.uploadVideo(e), !0
                    }
                }]
            }, {
                title: t.i18next.t("menus.panelMenus.video.插入视频"),
                tpl: '<div>\n                    <input \n                        id="' + i +
                    '" \n                        type="text" \n                        class="block" \n                        placeholder="' +
                    t.i18next.t("如") +
                    '：<iframe src=... ></iframe>"/>\n                    </td>\n                    <div class="w-e-button-container">\n                        <button type="button" id="' +
                    r + '" class="right">\n                            ' + t.i18next.t("插入") +
                    "\n                        </button>\n                    </div>\n                </div>",
                events: [{
                    selector: "#" + r,
                    type: "click",
                    fn: function () {
                        var e = c.default("#" + i),
                            e = (0, u.default)(e = e.val()).call(e);
                        if (e && function (e) {
                            if (!0 === (e = t.config.onlineVideoCheck(e)))
                                return 1;
                            "string" == typeof e && t.config.customAlert(e,
                                "error")
                        }(e)) return e = e, t.cmd.do("insertHTML", e + d.EMPTY_P),
                            t.config.onlineVideoCallback(e), !0
                    }
                }]
            }], r = {
                width: 300,
                height: 0,
                tabs: []
            }, window.FileReader && (n.uploadVideoServer || n.customUploadVideo) && r.tabs.push(l[0]),
            n.showLinkVideo && r.tabs.push(l[1]), r
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            w = o(n(131)),
            x = o(n(56)),
            _ = o(n(4)),
            E = o(n(26));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            b = n(6),
            C = i.__importDefault(n(134)),
            S = i.__importDefault(n(135)),
            r = n(7),
            a = n(6),
            n = (l.prototype.uploadVideo = function (e) {
                var o, i, r, a, l, t, n, u, s, c, f, d, p, h, A, v, m, g, y = this;
                e.length && (o = this.editor, i = o.config, r = function (e) {
                        return o.i18next.t("validate." + e)
                    }, v = i.uploadVideoServer, a = i.uploadVideoMaxSize / 1024, l = i.uploadVideoName,
                        t = i.uploadVideoParams, n = i.uploadVideoParamsWithUrl, u = i.uploadVideoHeaders,
                        s = i.uploadVideoHooks, c = i.uploadVideoTimeout, g = i.withVideoCredentials, f =
                        i.customUploadVideo, d = i.uploadVideoAccept, p = [], h = [], b.arrForEach(e,
                        function (e) {
                            var t = e.name,
                                n = e.size / 1024 / 1024;
                            t && n && (d instanceof Array ? (0, w.default)(d).call(d, function (e) {
                                return e === t.split(".")[t.split(".").length - 1]
                            }) ? a < n ? h.push("【" + t + "】" + r("大于") + " " + a + "M") :
                                p.push(e) : h.push("【" + t + "】" + r("不是视频")) : h.push("【" + d +
                                "】" + r("uploadVideoAccept 不是Array")))
                        }), h.length ? i.customAlert(r("视频验证未通过") + ": \n" + h.join("\n"),
                        "warning") : 0 !== p.length ? f && "function" == typeof f ? f(p, (0, x.default)
                    (m = this.insertVideo).call(m, this)) : (A = new FormData, (0, _.default)(p)
                        .call(p, function (e, t) {
                            var n = l || e.name;
                            1 < p.length && (n += t + 1), A.append(n, e)
                        }), v && (v = (m = v.split("#"))[0], m = m[1] || "", (0, _.default)(b).call(
                        b, t,
                        function (e, t) {
                            n && (0 < (0, E.default)(v).call(v, "?") ? v += "&" : v += "?",
                                v = v + e + "=" + t), A.append(e, t)
                        }), m && (v += "#" + m), "string" == typeof (g = C.default(v, {
                        timeout: c,
                        formData: A,
                        headers: u,
                        withCredentials: !!g,
                        beforeSend: function (e) {
                            if (s.before) return s.before(e, o, p)
                        },
                        onTimeout: function (e) {
                            i.customAlert(r("上传视频超时"), "error"), s.timeout && s
                                .timeout(e, o)
                        },
                        onProgress: function (e, t) {
                            var n = new S.default(o);
                            t.lengthComputable && (e = t.loaded / t.total, n.show(
                                e))
                        },
                        onError: function (e) {
                            i.customAlert(r("上传视频错误"), "error", r("上传视频错误") +
                                "，" + r("服务器返回状态") + ": " + e.status), s.error &&
                            s.error(e, o)
                        },
                        onFail: function (e, t) {
                            i.customAlert(r("上传视频失败"), "error", r("上传视频返回结果错误") +
                                ("，" + r("返回结果")) + ": " + t), s.fail && s.fail(
                                e, o, t)
                        },
                        onSuccess: function (e, t) {
                            if (s.customInsert) s.customInsert((0, x.default)(n =
                                y.insertVideo).call(n, y), t, o);
                            else {
                                if ("0" != t.errno) return i.customAlert(r(
                                    "上传视频失败"), "error", r(
                                    "上传视频返回结果错误") + "，" + r("返回结果") +
                                    " errno=" + t.errno), void(s.fail &&
                                    s.fail(e, o, t));
                                var n = t.data;
                                y.insertVideo(n.url), s.success && s.success(e,
                                    o, t)
                            }
                        }
                    })) && i.customAlert(g, "error"))) : i.customAlert(r("传入的文件不合法"), "warning")
                )
            }, l.prototype.insertVideo = function (e) {
                function t(e, t) {
                    return o.i18next.t((t = void 0 === t ? "validate." : t) + e)
                }
                var n, o = this.editor,
                    i = o.config;
                i.customInsertVideo ? i.customInsertVideo(e) : (a.UA.isFirefox ? o.cmd.do("insertHTML",
                    '<p data-we-video-p="true"><video src="' + e +
                    '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') :
                    o.cmd.do("insertHTML", '<video src="' + e +
                        '" controls="controls" style="max-width:100%"></video>' + r.EMPTY_P), (n =
                    document.createElement("video")).onload = function () {
                    n = null
                }, n.onerror = function () {
                    i.customAlert(t("插入视频错误"), "error", "wangEditor: " + t("插入视频错误") + "，" + t(
                        "视频链接") + ' "' + e + '"，' + t("下载链接失败")), n = null
                }, n.onabort = function () {
                    return n = null
                }, n.src = e)
            }, l);

        function l(e) {
            this.editor = e
        }
        t.default = n
    }, function (e, t, n) {
        e.exports = n(343)
    }, function (e, t, n) {
        n = n(344);
        e.exports = n
    }, function (e, t, n) {
        n(345);
        n = n(10);
        e.exports = n.Date.now
    }, function (e, t, n) {
        n(5)({
            target: "Date",
            stat: !0
        }, {
            now: function () {
                return (new Date).getTime()
            }
        })
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(347)),
            r = o.__importDefault(n(349));
        t.default = function (e) {
            i.default(e), r.default(e)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.createShowHideFn = void 0;
        var o = n(2),
            r = o.__importDefault(n(3)),
            a = o.__importDefault(n(36)),
            l = o.__importDefault(n(348));

        function i(n) {
            function o(e, t) {
                return n.i18next.t((t = void 0 === t ? "" : t) + e)
            }
            var i;
            return {
                showVideoTooltip: function (e) {
                    var t = [{
                        $elem: r.default("<span class='w-e-icon-trash-o'></span>"),
                        onClick: function (e, t) {
                            return t.remove(), !0
                        }
                    }, {
                        $elem: r.default("<span>100%</span>"),
                        onClick: function (e, t) {
                            return t.attr("width", "100%"), t.removeAttr("height"), !0
                        }
                    }, {
                        $elem: r.default("<span>50%</span>"),
                        onClick: function (e, t) {
                            return t.attr("width", "50%"), t.removeAttr("height"), !0
                        }
                    }, {
                        $elem: r.default("<span>30%</span>"),
                        onClick: function (e, t) {
                            return t.attr("width", "30%"), t.removeAttr("height"), !0
                        }
                    }, {
                        $elem: r.default("<span>" + o("重置") + "</span>"),
                        onClick: function (e, t) {
                            return t.removeAttr("width"), t.removeAttr("height"), !0
                        }
                    }, {
                        $elem: r.default("<span>" + o("menus.justify.靠左") + "</span>"),
                        onClick: function (e, t) {
                            return l.default(t, "left"), !0
                        }
                    }, {
                        $elem: r.default("<span>" + o("menus.justify.居中") + "</span>"),
                        onClick: function (e, t) {
                            return l.default(t, "center"), !0
                        }
                    }, {
                        $elem: r.default("<span>" + o("menus.justify.靠右") + "</span>"),
                        onClick: function (e, t) {
                            return l.default(t, "right"), !0
                        }
                    }];
                    (i = new a.default(n, e, t)).create()
                },
                hideVideoTooltip: function () {
                    i && (i.remove(), i = null)
                }
            }
        }
        t.createShowHideFn = i, t.default = function (e) {
            var t = (n = i(e)).showVideoTooltip,
                n = n.hideVideoTooltip;
            e.txt.eventHooks.videoClickEvents.push(t), e.txt.eventHooks.clickEvents.push(n), e.txt.eventHooks
                .keyupEvents.push(n), e.txt.eventHooks.toolbarClickEvents.push(n), e.txt.eventHooks.menuClickEvents
                .push(n), e.txt.eventHooks.textScrollEvents.push(n), e.txt.eventHooks.changeEvents.push(
                n)
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(55));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a = n(2).__importDefault(n(3));
        t.default = function (e, t) {
            (e = function (e, t) {
                var n, o = e.elems[0];
                for (; null != o;) {
                    if ((0, r.default)(t).call(t, null == o ? void 0 : o.nodeName)) return o;
                    if ("BODY" === (null === (n = null == o ? void 0 : o.parentNode) || void 0 ===
                    n ? void 0 : n.nodeName)) return null;
                    o = o.parentNode
                }
                return o
            }(e, ["P"])) && a.default(e).css("text-align", t)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var i = n(6);
        t.default = function (n) {
            var e, o;
            i.UA.isFirefox && (e = n.txt, o = n.selection, e.eventHooks.keydownEvents.push(function (e) {
                var t = o.getSelectionContainerElem();
                !t || (t = (t = t.getNodeTop(n)).length && t.prev().length ? t.prev() :
                    null) && t.attr("data-we-video-p") && 0 === o.getCursorPos() && 8 ===
                e.keyCode && t.remove()
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(25));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a, o = n(2),
            l = n(7),
            u = o.__importDefault(n(3)),
            s = o.__importDefault(n(31)),
            i = o.__importDefault(n(35)),
            c = o.__importDefault(n(351)),
            f = o.__importDefault(n(363)),
            o = (a = i.default, o.__extends(d, a), d.prototype.clickHandler = function () {
                this.imgPanelConfig.onlyUploadConf || this.createPanel()
            }, d.prototype.createPanel = function () {
                var e = this.imgPanelConfig,
                    e = new s.default(this, e);
                this.setPanel(e), e.create()
            }, d.prototype.tryChangeActive = function () {}, d);

        function d(e) {
            var t, n = this,
                o = u.default('<div class="w-e-menu" data-title="图片"><i class="w-e-icon-image"></i></div>'),
                i = f.default(e);
            return i.onlyUploadConf && (o = i.onlyUploadConf.$elem, (0, r.default)(t = i.onlyUploadConf.events)
                .call(t, function (e) {
                    var t = e.type,
                        n = e.fn || l.EMPTY_FN;
                    o.on(t, function (e) {
                        e.stopPropagation(), n(e)
                    })
                })), (n = a.call(this, o, e) || this).imgPanelConfig = i, c.default(e), n
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(352)),
            r = o.__importDefault(n(353)),
            a = o.__importDefault(n(354)),
            l = o.__importDefault(n(362));
        t.default = function (e) {
            i.default(e), r.default(e), a.default(e), l.default(e)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            r = n(128),
            a = o.__importDefault(n(97));

        function i(e, t) {
            var n, o, i;
            ! function (e) {
                for (var t = (null === (e = e.clipboardData) || void 0 === e ? void 0 : e.types) || [], n =
                    0; n < t.length; n++)
                    if ("Files" === t[n]) return 1
            }(e) && (o = e, n = (i = (n = t).config).pasteFilterStyle, i = i.pasteIgnoreImg, r.getPasteHtml(
                o, n, i) || r.getPasteText(o)) || (e = r.getPasteImgs(e)).length && new a.default(t).uploadImg(
                e)
        }
        t.default = function (t) {
            t.txt.eventHooks.pasteEvents.unshift(function (e) {
                i(e, t)
            })
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2).__importDefault(n(97));
        t.default = function (t) {
            t.txt.eventHooks.dropEvents.push(function (e) {
                (e = e.dataTransfer && e.dataTransfer.files) && e.length && new o.default(t).uploadImg(
                    e)
            })
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            g = o(n(30)),
            y = o(n(355));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.createShowHideFn = void 0;
        var w = n(2).__importDefault(n(3));
        n(360);
        var l = n(6);

        function x(e, t, n, o, i) {
            e.attr("style", "width:" + t + "px; height:" + n + "px; left:" + o + "px; top:" + i + "px;")
        }

        function r(e) {
            var A, t, n, v, m, r = e.$textContainerElem,
                a = (t = r, (n = w.default(
                    '<div class="w-e-img-drag-mask">\n            <div class="w-e-img-drag-show-size"></div>\n            <div class="w-e-img-drag-rb"></div>\n         </div>'
                )).hide(), t.append(n), n);

            function o() {
                (0, g.default)(r).call(r, ".w-e-img-drag-mask").hide()
            }
            return m = r, (v = a).on("click", function (e) {
                e.stopPropagation()
            }), v.on("mousedown", ".w-e-img-drag-rb", function (e) {
                var t, n, o, i, r, a, l, u, s, c, f;

                function d() {
                    f.off("mousemove", p), f.off("mouseup", h)
                }

                function p(e) {
                    e.stopPropagation(), e.preventDefault(), s = i + (e.clientX - t), c = r + (e.clientY -
                        n), s / c != u && (c = s / u), s = (0, y.default)(s.toFixed(2)), c = (0,
                        y.default)(c.toFixed(2)), (0, g.default)(v).call(v,
                        ".w-e-img-drag-show-size").text(s.toFixed(2).replace(".00", "") +
                        "px * " + c.toFixed(2).replace(".00", "") + "px"), x(v, s, c, a, l)
                }

                function h() {
                    A.attr("width", s + ""), A.attr("height", c + "");
                    var e = A.getBoundingClientRect();
                    x(v, s, c, e.left - o.left, e.top - o.top), d()
                }
                e.preventDefault(), A && (t = e.clientX, n = e.clientY, o = m.getBoundingClientRect(),
                    e = A.getBoundingClientRect(), i = e.width, r = e.height, a = e.left - o.left,
                    l = e.top - o.top, u = i / r, s = i, c = r, (f = w.default(document)).on(
                    "mousemove", p), f.on("mouseup", h), f.on("mouseleave", d))
            }), w.default(document).on("click", o), e.beforeDestroy(function () {
                w.default(document).off("click", o)
            }), {
                showDrag: function (e) {
                    if (l.UA.isIE()) return !1;
                    var t, n, o, i;
                    e && (n = a, o = A = e, i = (t = r).getBoundingClientRect(), e = o.getBoundingClientRect(),
                        t = e.width.toFixed(2), o = e.height.toFixed(2), (0, g.default)(n).call(
                        n, ".w-e-img-drag-show-size").text(t + "px * " + o + "px"), x(n, (0,
                        y.default)(t), (0, y.default)(o), e.left - i.left, e.top - i.top),
                        n.show())
                },
                hideDrag: o
            }
        }
        t.createShowHideFn = r, t.default = function (e) {
            var t = (n = r(e)).showDrag,
                n = n.hideDrag;
            e.txt.eventHooks.imgClickEvents.push(t), e.txt.eventHooks.textScrollEvents.push(n), e.txt.eventHooks
                .keyupEvents.push(n), e.txt.eventHooks.toolbarClickEvents.push(n), e.txt.eventHooks.menuClickEvents
                .push(n), e.txt.eventHooks.changeEvents.push(n)
        }
    }, function (e, t, n) {
        e.exports = n(356)
    }, function (e, t, n) {
        n = n(357);
        e.exports = n
    }, function (e, t, n) {
        n(358);
        n = n(10);
        e.exports = n.parseFloat
    }, function (e, t, n) {
        var o = n(5),
            n = n(359);
        o({
            global: !0,
            forced: parseFloat != n
        }, {
            parseFloat: n
        })
    }, function (e, t, n) {
        var o = n(8),
            i = n(92).trim,
            n = n(72),
            r = o.parseFloat,
            n = 1 / r(n + "-0") != -1 / 0;
        e.exports = n ? function (e) {
            var t = i(String(e)),
                e = r(t);
            return 0 === e && "-" == t.charAt(0) ? -0 : e
        } : r
    }, function (e, t, n) {
        var o = n(21),
            i = n(361),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        (t = n(22)(!1)).push([e.i,
            ".w-e-text-container {\n  overflow: hidden;\n}\n.w-e-img-drag-mask {\n  position: absolute;\n  z-index: 1;\n  border: 1px dashed #ccc;\n  box-sizing: border-box;\n}\n.w-e-img-drag-mask .w-e-img-drag-rb {\n  position: absolute;\n  right: -5px;\n  bottom: -5px;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  background: #ccc;\n  cursor: se-resize;\n}\n.w-e-img-drag-mask .w-e-img-drag-show-size {\n  min-width: 110px;\n  height: 22px;\n  line-height: 22px;\n  font-size: 14px;\n  color: #999;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #999;\n  color: #fff;\n  border-radius: 2px;\n  padding: 0 5px;\n}\n",
            ""]), e.exports = t
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.createShowHideFn = void 0;
        var o = n(2),
            r = o.__importDefault(n(3)),
            a = o.__importDefault(n(36));

        function i(n) {
            function o(e, t) {
                return n.i18next.t((t = void 0 === t ? "" : t) + e)
            }
            var i;
            return {
                showImgTooltip: function (e) {
                    var t = [{
                        $elem: r.default("<span class='w-e-icon-trash-o'></span>"),
                        onClick: function (e, t) {
                            return e.selection.createRangeByElem(t), e.selection.restoreSelection(),
                                e.cmd.do("delete"), !0
                        }
                    }, {
                        $elem: r.default("<span>30%</span>"),
                        onClick: function (e, t) {
                            return t.attr("width", "30%"), t.removeAttr("height"), !0
                        }
                    }, {
                        $elem: r.default("<span>50%</span>"),
                        onClick: function (e, t) {
                            return t.attr("width", "50%"), t.removeAttr("height"), !0
                        }
                    }, {
                        $elem: r.default("<span>100%</span>"),
                        onClick: function (e, t) {
                            return t.attr("width", "100%"), t.removeAttr("height"), !0
                        }
                    }];
                    t.push({
                        $elem: r.default("<span>" + o("重置") + "</span>"),
                        onClick: function (e, t) {
                            return t.removeAttr("width"), t.removeAttr("height"), !0
                        }
                    }), e.attr("data-href") && t.push({
                        $elem: r.default("<span>" + o("查看链接") + "</span>"),
                        onClick: function (e, t) {
                            t = t.attr("data-href");
                            return t && (t = decodeURIComponent(t), window.open(t,
                                "_target")), !0
                        }
                    }), (i = new a.default(n, e, t)).create()
                },
                hideImgTooltip: function () {
                    i && (i.remove(), i = null)
                }
            }
        }
        t.createShowHideFn = i, t.default = function (e) {
            var t = (n = i(e)).showImgTooltip,
                n = n.hideImgTooltip;
            e.txt.eventHooks.imgClickEvents.push(t), e.txt.eventHooks.clickEvents.push(n), e.txt.eventHooks
                .keyupEvents.push(n), e.txt.eventHooks.toolbarClickEvents.push(n), e.txt.eventHooks.menuClickEvents
                .push(n), e.txt.eventHooks.textScrollEvents.push(n), e.txt.eventHooks.imgDragBarMouseDownEvents
                .push(n), e.txt.eventHooks.changeEvents.push(n)
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            A = o(n(25)),
            v = o(n(19));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            m = i.__importDefault(n(3)),
            g = n(6),
            y = i.__importDefault(n(97));
        t.default = function (n) {
            function e(e, t) {
                return n.i18next.t((t = void 0 === t ? "menus.panelMenus.image." : t) + e)
            }
            var o = n.config,
                i = new y.default(n),
                r = g.getRandom("up-trigger-id"),
                a = g.getRandom("up-file-id"),
                l = g.getRandom("input-link-url"),
                u = g.getRandom("input-link-url-alt"),
                s = g.getRandom("input-link-url-href"),
                t = g.getRandom("btn-link");

            function c(e, t, n) {
                return '<div class="' + e + '" data-title="' + n + '">\n            <div id="' + r +
                    '" class="w-e-up-btn">\n                <i class="' + t +
                    '"></i>\n            </div>\n            <div style="display:none;">\n                <input id="' +
                    a + '" type="file" ' + f + ' accept="' + d +
                    '"/>\n            </div>\n        </div>'
            }
            var f = 1 === o.uploadImgMaxLength ? "" : 'multiple="multiple"',
                d = (0, A.default)(h = o.uploadImgAccept).call(h, function (e) {
                    return "image/" + e
                }).join(","),
                p = [{
                    selector: "#" + r,
                    type: "click",
                    fn: function () {
                        var e = o.uploadImgFromMedia;
                        if (e && "function" == typeof e) return e(), !0;
                        e = m.default("#" + a).elems[0];
                        if (!e) return !0;
                        e.click()
                    }
                }, {
                    selector: "#" + a,
                    type: "change",
                    fn: function () {
                        var e = m.default("#" + a).elems[0];
                        if (!e) return !0;
                        e = e.files;
                        return null != e && e.length && i.uploadImg(e), !0
                    }
                }],
                h = ['<input\n            id="' + l +
                '"\n            type="text"\n            class="block"\n            placeholder="' +
                e("图片地址") + '"/>'];
            return o.showLinkImgAlt && h.push('\n        <input\n            id="' + u +
                '"\n            type="text"\n            class="block"\n            placeholder="' +
                e("图片文字说明") + '"/>'), o.showLinkImgHref && h.push(
                '\n        <input\n            id="' + s +
                '"\n            type="text"\n            class="block"\n            placeholder="' +
                e("跳转链接") + '"/>'), t = [{
                title: e("上传图片"),
                tpl: c("w-e-up-img-container", "w-e-icon-upload2", ""),
                events: p
            }, {
                title: e("网络图片"),
                tpl: "<div>\n                    " + h.join("") +
                    '\n                    <div class="w-e-button-container">\n                        <button type="button" id="' +
                    t + '" class="right">' + e("插入", "") +
                    "</button>\n                    </div>\n                </div>",
                events: [{
                    selector: "#" + t,
                    type: "click",
                    fn: function () {
                        var e, t, n = m.default("#" + l),
                            n = (0, v.default)(n = n.val()).call(n);
                        if (n && (o.showLinkImgAlt && (e = (0, v.default)(e = m.default(
                            "#" + u).val()).call(e)), o.showLinkImgHref &&
                        (t = (0, v.default)(t = m.default("#" + s).val()).call(
                            t)),
                            function (e) {
                                if (!0 === (e = o.linkImgCheck(e))) return 1;
                                "string" == typeof e && o.customAlert(e,
                                    "error")
                            }(n))) return i.insertImg(n, e, t), !0
                    }
                }]
            }], p = {
                width: 300,
                height: 0,
                tabs: [],
                onlyUploadConf: {
                    $elem: m.default(c("w-e-menu", "w-e-icon-image", "图片")),
                    events: p
                }
            }, window.FileReader && (o.uploadImgShowBase64 || o.uploadImgServer || o.customUploadImg ||
                o.uploadImgFromMedia) && p.tabs.push(t[0]), o.showLinkImg && (p.tabs.push(t[1]), p.onlyUploadConf =
                void 0), p
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a, o = n(2),
            l = o.__importDefault(n(3)),
            i = o.__importDefault(n(24)),
            u = o.__importDefault(n(365)),
            o = (a = i.default, o.__extends(s, a), s.prototype.command = function (t) {
                var e, n = this.editor,
                    o = n.selection.getSelectionContainerElem();
                o && n.$textElem.equal(o) ? 0 < (e = n.selection.getSelectionRangeTopNodes()).length &&
                    (0, r.default)(e).call(e, function (e) {
                        u.default(l.default(e), t, n)
                    }) : o && 0 < o.length && (0, r.default)(o).call(o, function (e) {
                    u.default(l.default(e), t, n)
                }), n.selection.restoreSelection(), this.tryChangeActive()
            }, s.prototype.tryChangeActive = function () {
                var e = this.editor,
                    t = e.selection.getSelectionStartElem(),
                    e = l.default(t).getNodeTop(e);
                e.length <= 0 || ("" != e.elems[0].style.paddingLeft ? this.active() : this.unActive())
            }, s);

        function s(e) {
            var t = this,
                n = l.default(
                    '<div class="w-e-menu" data-title="缩进">\n                <i class="w-e-icon-indent-increase"></i>\n            </div>'
                ),
                o = {
                    width: 130,
                    title: "设置缩进",
                    type: "list",
                    list: [{
                        $elem: l.default(
                            '<p>\n                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>\n                            ' +
                            e.i18next.t("menus.dropListMenu.indent.增加缩进") +
                            "\n                        <p>"),
                        value: "increase"
                    }, {
                        $elem: l.default(
                            '<p>\n                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>\n                            ' +
                            e.i18next.t("menus.dropListMenu.indent.减少缩进") +
                            "\n                        <p>"),
                        value: "decrease"
                    }],
                    clickHandler: function (e) {
                        t.command(e)
                    }
                };
            return t = a.call(this, n, e, o) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(44)),
            a = o(n(19));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            l = i.__importDefault(n(366)),
            u = i.__importDefault(n(367)),
            s = /^(\d+)(\w+)$/,
            c = /^(\d+)%$/;

        function f(e) {
            var t = e.config.indentation;
            if ("string" == typeof t) {
                if (s.test(t)) {
                    var e = (0, r.default)(n = (0, a.default)(t).call(t).match(s)).call(n, 1, 3),
                        n = e[0],
                        e = e[1];
                    return {
                        value: Number(n),
                        unit: e
                    }
                }
                if (c.test(t)) return {
                    value: Number((0, a.default)(t).call(t).match(c)[1]),
                    unit: "%"
                }
            } else if (void 0 !== t.value && t.unit) return t;
            return {
                value: 2,
                unit: "em"
            }
        }
        t.default = function (e, t, n) {
            e = e.getNodeTop(n), /^P$/i.test(e.getNodeName()) && ("increase" === t ? l.default(e, f(n)) :
                "decrease" === t && u.default(e, f(n)))
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(44));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.default = function (e, t) {
            var n = e.elems[0];
            "" === n.style.paddingLeft ? e.css("padding-left", t.value + t.unit) : (n = n.style.paddingLeft,
                n = (0, r.default)(n).call(n, 0, n.length - t.unit.length), n = Number(n) + t.value,
                e.css("padding-left", "" + n + t.unit))
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(44));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.default = function (e, t) {
            var n = e.elems[0];
            "" !== n.style.paddingLeft && (n = n.style.paddingLeft, n = (0, r.default)(n).call(n, 0, n.length -
                t.unit.length), 0 < (n = Number(n) - t.value) ? e.css("padding-left", "" + n +
                t.unit) : e.css("padding-left", ""))
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(3)),
            a = i.__importDefault(n(35)),
            l = i.__importDefault(n(31)),
            u = i.__importDefault(n(369)),
            i = (o = a.default, i.__extends(s, o), s.prototype.createPanel = function () {
                var e = u.default(this.editor);
                new l.default(this, e).create()
            }, s.prototype.clickHandler = function () {
                this.createPanel()
            }, s.prototype.tryChangeActive = function () {}, s);

        function s(e) {
            var t = r.default(
                '<div class="w-e-menu" data-title="表情">\n                <i class="w-e-icon-happy"></i>\n            </div>'
            );
            return o.call(this, t, e) || this
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(25)),
            a = o(n(74)),
            l = o(n(19));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var u = n(2).__importDefault(n(3));
        t.default = function (o) {
            var e = o.config.emotions;
            return {
                width: 300,
                height: 230,
                tabs: (0, r.default)(e).call(e, function (e) {
                    return {
                        title: o.i18next.t("menus.panelMenus.emoticon." + e.title),
                        tpl: "<div>" + (n = [], (n = "image" == (t = e).type ? (n = (0, r.default)
                        (e = t.content).call(e, function (e) {
                            return "string" == typeof e ? "" :
                                '<span  title="' + e.alt +
                                '">\n                    <img class="eleImg" data-emoji="' +
                                e.alt + '" style src="' + e.src +
                                '" alt="[' + e.alt +
                                ']">\n                </span>'
                        }), (0, a.default)(n).call(n, function (e) {
                            return "" !== e
                        })) : (0, r.default)(t = t.content).call(t, function (e) {
                            return '<span class="eleImg" title="' + e + '">' +
                                e + "</span>"
                        })).join("").replace(/&nbsp;/g, "")) + "</div>",
                        events: [{
                            selector: ".eleImg",
                            type: "click",
                            fn: function (e) {
                                var t = u.default(e.target);
                                return t = "IMG" === t.getNodeName() ? (0, l.default)
                                (e = t.parent().html()).call(e) : "<span>" + t.html() +
                                    "</span>", o.cmd.do("insertHTML", t), !0
                            }
                        }]
                    };
                    var t, n
                })
            }
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.createListHandle = t.ClassType = void 0;
        var o, i = n(2),
            r = i.__importDefault(n(3)),
            a = i.__importDefault(n(371)),
            l = i.__importDefault(n(373)),
            u = i.__importDefault(n(374)),
            s = i.__importDefault(n(375)),
            i = i.__importDefault(n(376));
        (n = o = t.ClassType || (t.ClassType = {})).Wrap = "WrapListHandle", n.Join = "JoinListHandle", n.StartJoin =
            "StartJoinListHandle", n.EndJoin = "EndJoinListHandle", n.Other = "OtherListHandle";
        var c = {
            WrapListHandle: a.default,
            JoinListHandle: l.default,
            StartJoinListHandle: u.default,
            EndJoinListHandle: s.default,
            OtherListHandle: i.default
        };
        t.createListHandle = function (e, t, n) {
            if (e === o.Other && void 0 === n) throw new Error("other 类需要传入 range");
            return e !== o.Other ? new c[e](t) : new c[e](t, n)
        };
        f.prototype.getSelectionRangeElem = function () {
            return r.default(this.handle.selectionRangeElem.get())
        }, i = f;

        function f(e) {
            this.handle = e, this.handle.exec()
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            A = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var r, o = n(2),
            v = o.__importDefault(n(3)),
            i = n(57),
            m = n(46),
            o = (r = i.ListHandle, o.__extends(a, r), a.prototype.exec = function () {
                var t, e = this.options,
                    n = e.listType,
                    o = e.listTarget,
                    i = e.$selectionElem,
                    r = e.$startElem,
                    a = e.$endElem,
                    l = [],
                    u = null == i ? void 0 : i.getNodeName(),
                    e = r.prior,
                    s = a.prior;
                if ((r.prior || a.prior) && (null != e && e.prev().length || null != s && s.next().length)) {
                    for (var c = e; c.length;) l.push(c), c = null != s && s.equal(c) ? v.default(void 0) :
                        c.next();
                    var e = e.prev(),
                        f = s.next();
                    if (u === n ? t = m.createElementFragment(l, m.createDocumentFragment(), "p") : (t =
                        m.createElement(o), (0, A.default)(l).call(l, function (e) {
                        t.append(e.elems[0])
                    })), e.length && f.length) {
                        for (var d = []; f.length;) d.push(f), f = f.next();
                        var p, h = m.createElement(u);
                        (0, A.default)(d).call(d, function (e) {
                            h.append(e.elems[0])
                        }), v.default(h).insertAfter(i), this.selectionRangeElem.set(t), (p = i.next())
                            .length ? m.insertBefore(i, t, p.elems[0]) : i.parent().elems[0].append(t)
                    } else e.length ? (this.selectionRangeElem.set(t), (p = i.next()).length ? m.insertBefore(
                        i, t, p.elems[0]) : i.parent().elems[0].append(t)) : (this.selectionRangeElem
                        .set(t), m.insertBefore(i, t, i.elems[0]))
                } else(0, A.default)(p = null == i ? void 0 : i.children()).call(p, function (e) {
                    l.push(v.default(e))
                }), u === n ? t = m.createElementFragment(l, m.createDocumentFragment(), "p") : (t =
                    m.createElement(o), (0, A.default)(l).call(l, function (e) {
                    t.append(e.elems[0])
                })), this.selectionRangeElem.set(t), m.insertBefore(i, t, i.elems[0]), i.remove()
            }, a);

        function a(e) {
            return r.call(this, e) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        a.prototype.set = function (e) {
            var t, n;
            e instanceof DocumentFragment && (n = [], (0, r.default)(t = e.childNodes).call(t, function (
                e) {
                n.push(e)
            }), e = n), this._element = e
        }, a.prototype.get = function () {
            return this._element
        }, a.prototype.clear = function () {
            this._element = null
        }, i = a;

        function a() {
            this._element = null
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            m = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var r, o = n(2),
            g = o.__importDefault(n(3)),
            i = n(57),
            y = n(46),
            o = (r = i.ListHandle, o.__extends(a, r), a.prototype.exec = function () {
                var t, e = this.options,
                    n = e.editor,
                    o = e.listType,
                    i = e.listTarget,
                    r = e.$startElem,
                    e = e.$endElem,
                    a = n.selection.getSelectionRangeTopNodes(),
                    n = null == r ? void 0 : r.getNodeName();
                if (n === (null == e ? void 0 : e.getNodeName()))
                    if (2 < a.length)
                        if (a.shift(), a.pop(), t = y.createElementFragment(y.filterSelectionNodes(a),
                            y.createDocumentFragment()), n === o) null !== (p = e.children()) &&
                        void 0 !== p && (0, m.default)(p).call(p, function (e) {
                            t.append(e)
                        }), e.remove(), this.selectionRangeElem.set(t), r.elems[0].append(t);
                        else {
                            for (var l = document.createDocumentFragment(), u = document.createDocumentFragment(),
                                     s = y.getStartPoint(r); s.length;) {
                                var c = s.elems[0];
                                s = s.next(), l.append(c)
                            }
                            for (var f = y.getEndPoint(e), d = []; f.length;) d.unshift(f.elems[0]), f =
                                f.prev();
                            (0, m.default)(d).call(d, function (e) {
                                u.append(e)
                            });
                            var p = y.createElement(i);
                            p.append(l), p.append(t), p.append(u), this.selectionRangeElem.set(t = p),
                                g.default(p).insertAfter(r), null !== (p = r.children()) && void 0 !==
                            p && p.length || r.remove(), null !== (p = e.children()) && void 0 !==
                            p && p.length || e.remove()
                        }
                    else {
                        a.length = 0;
                        for (s = y.getStartPoint(r); s.length;) a.push(s), s = s.next();
                        for (f = y.getEndPoint(e), d = []; f.length;) d.unshift(f), f = f.prev();
                        a.push.apply(a, d), n === o ? (t = y.createElementFragment(a, y.createDocumentFragment(),
                            "p"), this.selectionRangeElem.set(t), y.insertBefore(r, t, e.elems[0])) : (
                            t = y.createElement(i), (0, m.default)(a).call(a, function (e) {
                                t.append(e.elems[0])
                            }), this.selectionRangeElem.set(t), g.default(t).insertAfter(r)), null !==
                        (i = r.children()) && void 0 !== i && i.length || e.remove(), null !== (i = e.children()) &&
                        void 0 !== i && i.length || e.remove()
                    } else {
                    for (var h = [], f = y.getEndPoint(e); f.length;) h.unshift(f), f = f.prev();
                    for (var A, v = [], s = y.getStartPoint(r); s.length;) v.push(s), s = s.next();
                    t = y.createDocumentFragment(), a.shift(), a.pop(), (0, m.default)(v).call(v,
                        function (e) {
                            return t.append(e.elems[0])
                        }), t = y.createElementFragment(y.filterSelectionNodes(a), t), (0, m.default)
                    (h).call(h, function (e) {
                        return t.append(e.elems[0])
                    }), this.selectionRangeElem.set(t), n === o ? (r.elems[0].append(t), null !==
                    (A = e.children()) && void 0 !== A && A.length || e.remove()) : null !== (A =
                        e.children()) && void 0 !== A && A.length ? (A = e.children(), y.insertBefore(
                        A, t, A.elems[0])) : e.elems[0].append(t)
                }
            }, a);

        function a(e) {
            return r.call(this, e) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            u = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var r, o = n(2),
            s = o.__importDefault(n(3)),
            i = n(57),
            c = n(46),
            o = (r = i.ListHandle, o.__extends(a, r), a.prototype.exec = function () {
                var t, e = this.options,
                    n = e.editor,
                    o = e.listType,
                    i = e.listTarget,
                    r = e.$startElem,
                    e = n.selection.getSelectionRangeTopNodes(),
                    n = null == r ? void 0 : r.getNodeName();
                e.shift();
                for (var a = [], l = c.getStartPoint(r); l.length;) a.push(l), l = l.next();
                n === o ? (t = c.createDocumentFragment(), (0, u.default)(a).call(a, function (e) {
                    return t.append(e.elems[0])
                }), t = c.createElementFragment(c.filterSelectionNodes(e), t), this.selectionRangeElem
                    .set(t), r.elems[0].append(t)) : (t = c.createElement(i), (0, u.default)(a).call(
                    a,
                    function (e) {
                        return t.append(e.elems[0])
                    }), t = c.createElementFragment(c.filterSelectionNodes(e), t), this.selectionRangeElem
                    .set(t), s.default(t).insertAfter(r), null !== (e = r.children()) && void 0 !==
                e && e.length || r.remove())
            }, a);

        function a(e) {
            return r.call(this, e) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            u = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var r, o = n(2),
            s = o.__importDefault(n(3)),
            i = n(57),
            c = n(46),
            o = (r = i.ListHandle, o.__extends(a, r), a.prototype.exec = function () {
                var e = this.options,
                    t = e.editor,
                    n = e.listType,
                    o = e.listTarget,
                    i = e.$endElem,
                    e = t.selection.getSelectionRangeTopNodes(),
                    t = null == i ? void 0 : i.getNodeName();
                e.pop();
                for (var r, a = [], l = c.getEndPoint(i); l.length;) a.unshift(l), l = l.prev();
                t === n ? (r = c.createElementFragment(c.filterSelectionNodes(e), c.createDocumentFragment()),
                    (0, u.default)(a).call(a, function (e) {
                        return r.append(e.elems[0])
                    }), this.selectionRangeElem.set(r), null !== (n = i.children()) && void 0 !==
                n && n.length ? (n = i.children(), c.insertBefore(n, r, n.elems[0])) : i.elems[
                    0].append(r)) : ((e = c.filterSelectionNodes(e)).push.apply(e, a), r = c.createElementFragment(
                    e, c.createElement(o)), this.selectionRangeElem.set(r), s.default(r).insertBefore(
                    i), null !== (o = i.children()) && void 0 !== o && o.length || i.remove())
            }, a);

        function a(e) {
            return r.call(this, e) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = n(57),
            a = n(46),
            i = (o = r.ListHandle, i.__extends(l, o), l.prototype.exec = function () {
                var e = this.options,
                    t = e.editor,
                    e = e.listTarget,
                    t = t.selection.getSelectionRangeTopNodes(),
                    e = a.createElementFragment(a.filterSelectionNodes(t), a.createElement(e));
                this.selectionRangeElem.set(e), this.range.insertNode(e)
            }, l);

        function l(e, t) {
            e = o.call(this, e) || this;
            return e.range = t, e
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            x = o(n(4)),
            _ = o(n(26));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var r, o = n(2),
            i = o.__importDefault(n(24)),
            E = o.__importDefault(n(3)),
            a = o.__importDefault(n(378)),
            b = n(6),
            o = (r = i.default, o.__extends(l, r), l.prototype.command = function (t) {
                var n = this,
                    e = (window.getSelection ? window : document).getSelection(),
                    o = ["P"],
                    i = this.editor,
                    r = "";
                i.selection.restoreSelection();
                var a = E.default(i.selection.getSelectionContainerElem());
                if (null != a && a.length) {
                    var l = E.default(i.selection.getSelectionContainerElem()),
                        u = E.default(i.selection.getSelectionStartElem()).elems[0],
                        s = "",
                        c = [],
                        f = "";
                    if (a && i.$textElem.equal(a)) {
                        if (b.UA.isIE()) return;
                        var d = [],
                            p = [],
                            h = [],
                            A = E.default(i.selection.getSelectionStartElem()),
                            v = E.default(i.selection.getSelectionEndElem()),
                            a = null === (a = i.selection.getRange()) || void 0 === a ? void 0 : a.commonAncestorContainer
                                .childNodes;
                        p.push(this.getDom(A.elems[0])), null != a && (0, x.default)(a).call(a,
                            function (e, t) {
                                e === n.getDom(A.elems[0]) && d.push(t), e === n.getDom(v.elems[0]) &&
                                d.push(t)
                            });
                        var m, g = 0;
                        for (h.push(this.getDom(A.elems[0])); p[g] !== this.getDom(v.elems[0]);) m = E.default(
                            p[g].nextElementSibling).elems[0], -1 !== (0, _.default)(o).call(o, E.default(
                            m).getNodeName()) && h.push(m), p.push(m), g++;
                        if ("P" !== E.default(p[0]).getNodeName()) {
                            for (var g = 0, y = 0; y < p.length; y++)
                                if ("P" === E.default(p[y]).getNodeName()) {
                                    g = y;
                                    break
                                } if (0 === g) return;
                            for (var w = 0; w !== g;) p.shift(), w++
                        }
                        return this.setRange(p[0], p[p.length - 1]), (0, x.default)(p).call(p, function (
                            e) {
                            s = e.getAttribute("style"), c = s ? s.split(";") : [], f = "", r =
                                (f = "P" === E.default(e).getNodeName() && t ? n.styleProcessing(
                                    c) + "line-height:" + t + ";" : n.styleProcessing(c), r +
                                ("<" + E.default(e).getNodeName().toLowerCase() +
                                    ' style="' + f + '">' + e.innerHTML + "</" + E.default(
                                        e).getNodeName().toLowerCase()) + ">")
                        }), this.action(r, i), u = l.elems[0], void this.setRange(u.children[d[0]],
                            u.children[d[1]])
                    }
                    u = this.getDom(u), -1 !== (0, _.default)(o).call(o, E.default(u).getNodeName()) &&
                    (s = u.getAttribute("style"), c = s ? s.split(";") : [], null != e && e.selectAllChildren(
                        u), i.selection.saveRange(), t ? (f = s ? this.styleProcessing(c) +
                        "line-height:" + t + ";" : "line-height:" + t + ";", r = "<" + E.default(
                        u).getNodeName().toLowerCase() + ' style="' + f + '">' + u.innerHTML +
                        "</" + E.default(u).getNodeName().toLowerCase() + ">", "BLOCKQUOTE" ===
                    E.default(u).getNodeName() ? E.default(u).css("line-height", t) : this.action(
                        r, i)) : s && (f = this.styleProcessing(c), r = "" === f ? "<" + E.default(
                        u).getNodeName().toLowerCase() + ">" + u.innerHTML + "</" + E.default(
                        u).getNodeName().toLowerCase() + ">" : "<" + E.default(u).getNodeName()
                        .toLowerCase() + ' style="' + f + '">' + u.innerHTML + "</" + E.default(
                        u).getNodeName().toLowerCase() + ">", this.action(r, i)))
                }
            }, l.prototype.getDom = function (e) {
                e = E.default(e).elems[0];
                return e.parentNode ? e = function e(t, n) {
                    var o = E.default(t.parentNode);
                    return n.$textElem.equal(o) ? t : e(o.elems[0], n)
                }(e, this.editor) : e
            }, l.prototype.action = function (e, t) {
                t.cmd.do("insertHTML", e)
            }, l.prototype.styleProcessing = function (e) {
                var t = "";
                return (0, x.default)(e).call(e, function (e) {
                    "" !== e && -1 === (0, _.default)(e).call(e, "line-height") && (t = t + e +
                        ";")
                }), t
            }, l.prototype.setRange = function (e, t) {
                var n = this.editor,
                    o = (window.getSelection ? window : document).getSelection();
                null != o && o.removeAllRanges();
                var i = document.createRange(),
                    t = t;
                i.setStart(e, 0), i.setEnd(t, 1), null != o && o.addRange(i), n.selection.saveRange(),
                null != o && o.removeAllRanges(), n.selection.restoreSelection()
            }, l.prototype.tryChangeActive = function () {
                var e = this.editor,
                    t = e.selection.getSelectionContainerElem();
                t && e.$textElem.equal(t) || 0 !== (e = E.default(e.selection.getSelectionStartElem()))
                    .length && ((e = (e = this.getDom(e.elems[0])).getAttribute("style") ? e.getAttribute(
                    "style") : "") && -1 !== (0, _.default)(e).call(e, "line-height") ? this.active() :
                    this.unActive())
            }, l);

        function l(t) {
            var n = this,
                e = E.default(
                    '<div class="w-e-menu" data-title="行高">\n                    <i class="w-e-icon-row-height"></i>\n                </div>'
                ),
                o = {
                    width: 100,
                    title: "设置行高",
                    type: "list",
                    list: new a.default(t, t.config.lineHeights).getItemList(),
                    clickHandler: function (e) {
                        t.selection.saveRange(), n.command(e)
                    }
                };
            return n = r.call(this, e, t, o) || this
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a = n(2).__importDefault(n(3)),
            n = (l.prototype.getItemList = function () {
                return this.itemList
            }, l);

        function l(e, t) {
            var n = this;
            this.itemList = [{
                $elem: a.default("<span>" + e.i18next.t("默认") + "</span>"),
                value: ""
            }], (0, r.default)(t).call(t, function (e) {
                n.itemList.push({
                    $elem: a.default("<span>" + e + "</span>"),
                    value: e
                })
            })
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(3)),
            n = i.__importDefault(n(23)),
            i = (o = n.default, i.__extends(a, o), a.prototype.clickHandler = function () {
                var e = this.editor;
                e.history.revoke();
                var t = e.$textElem.children();
                null != t && t.length && (t = t.last(), e.selection.createRangeByElem(t, !1, !0), e.selection
                    .restoreSelection())
            }, a.prototype.tryChangeActive = function () {
                this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive())
            }, a);

        function a(e) {
            var t = r.default(
                '<div class="w-e-menu" data-title="撤销">\n                <i class="w-e-icon-undo"></i>\n            </div>'
            );
            return o.call(this, t, e) || this
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(3)),
            n = i.__importDefault(n(23)),
            i = (o = n.default, i.__extends(a, o), a.prototype.clickHandler = function () {
                var e = this.editor;
                e.history.restore();
                var t = e.$textElem.children();
                null != t && t.length && (t = t.last(), e.selection.createRangeByElem(t, !1, !0), e.selection
                    .restoreSelection())
            }, a.prototype.tryChangeActive = function () {
                this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive())
            }, a);

        function a(e) {
            var t = r.default(
                '<div class="w-e-menu" data-title="恢复">\n                <i class="w-e-icon-redo"></i>\n            </div>'
            );
            return o.call(this, t, e) || this
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(35)),
            a = i.__importDefault(n(3)),
            l = i.__importDefault(n(382)),
            u = i.__importDefault(n(31)),
            s = i.__importDefault(n(391)),
            i = (o = r.default, i.__extends(c, o), c.prototype.clickHandler = function () {
                this.createPanel()
            }, c.prototype.createPanel = function () {
                var e = l.default(this.editor);
                new u.default(this, e).create()
            }, c.prototype.tryChangeActive = function () {}, c);

        function c(e) {
            var t = a.default('<div class="w-e-menu" data-title="表格"><i class="w-e-icon-table2"></i></div>'),
                n = o.call(this, t, e) || this;
            return s.default(e), n
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(383));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            l = n(6),
            u = i.__importDefault(n(3));
        n(388);
        var s = i.__importDefault(n(390));

        function c(e) {
            return 0 < e && (0, r.default)(e)
        }
        t.default = function (n) {
            var o = new s.default(n),
                i = l.getRandom("w-col-id"),
                r = l.getRandom("w-row-id"),
                e = l.getRandom("btn-link"),
                t = "menus.panelMenus.table.",
                a = [{
                    title: (a = function (e) {
                        return n.i18next.t(e)
                    })(t + "插入表格"),
                    tpl: '<div>\n                    <div class="w-e-table">\n                        <span>' +
                        a("创建") + '</span>\n                        <input id="' + r +
                        '"  type="text" class="w-e-table-input" value="5"/></td>\n                        <span>' +
                        a(t + "行") + '</span>\n                        <input id="' + i +
                        '" type="text" class="w-e-table-input" value="5"/></td>\n                        <span>' +
                        (a(t + "列") + a(t + "的") + a(t + "表格")) +
                        '</span>\n                    </div>\n                    <div class="w-e-button-container">\n                        <button type="button" id="' +
                        e + '" class="right">' + a("插入") +
                        "</button>\n                    </div>\n                </div>",
                    events: [{
                        selector: "#" + e,
                        type: "click",
                        fn: function () {
                            var e = Number(u.default("#" + i).val()),
                                t = Number(u.default("#" + r).val());
                            return c(t) && c(e) ? (o.createAction(t, e), !0) : (n.config
                                .customAlert("表格行列请输入正整数", "warning"), !1)
                        }
                    }]
                }];
            return (e = {
                width: 330,
                height: 0,
                tabs: []
            }).tabs.push(a[0]), e
        }
    }, function (e, t, n) {
        e.exports = n(384)
    }, function (e, t, n) {
        n = n(385);
        e.exports = n
    }, function (e, t, n) {
        n(386);
        n = n(10);
        e.exports = n.Number.isInteger
    }, function (e, t, n) {
        n(5)({
            target: "Number",
            stat: !0
        }, {
            isInteger: n(387)
        })
    }, function (e, t, n) {
        var o = n(13),
            i = Math.floor;
        e.exports = function (e) {
            return !o(e) && isFinite(e) && i(e) === e
        }
    }, function (e, t, n) {
        var o = n(21),
            i = n(389),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        (t = n(22)(!1)).push([e.i,
            ".w-e-table {\n  display: flex;\n}\n.w-e-table .w-e-table-input {\n  width: 40px;\n  text-align: center!important;\n  margin: 0 5px;\n}\n",
            ""]), e.exports = t
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            a = n(7),
            r = o.__importDefault(n(3)),
            n = (i.prototype.createAction = function (e, t) {
                var n = this.editor,
                    o = r.default(n.selection.getSelectionContainerElem()),
                    i = r.default(o.elems[0]).parentUntilEditor("UL", n),
                    o = r.default(o.elems[0]).parentUntilEditor("OL", n);
                i || o || (t = this.createTableHtml(e, t), n.cmd.do("insertHTML", t))
            }, i.prototype.createTableHtml = function (e, t) {
                for (var n = "", o = "", i = 0; i < e; i++) {
                    for (var o = "", r = 0; r < t; r++) o += 0 === i ? "<th></th>" : "<td></td>";
                    n = n + "<tr>" + o + "</tr>"
                }
                return '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + n +
                    "</tbody></table>" + a.EMPTY_P
            }, i);

        function i(e) {
            this.editor = e
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(392)),
            r = o.__importDefault(n(400));
        t.default = function (e) {
            i.default(e), r.default(e)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            l = o.__importDefault(n(3)),
            i = o.__importDefault(n(36)),
            u = o.__importDefault(n(393)),
            r = o.__importDefault(n(399)),
            s = n(7);

        function a(n) {
            var o;
            return {
                showTableTooltip: function (e) {
                    var a = new r.default(n),
                        t = function (e, t) {
                            return n.i18next.t((t = void 0 === t ? "menus.panelMenus.table." : t) + e)
                        },
                        t = [{
                            $elem: l.default("<span>" + t("删除表格") + "</span>"),
                            onClick: function (e, t) {
                                return e.selection.createRangeByElem(t), e.selection.restoreSelection(),
                                    e.cmd.do("insertHTML", s.EMPTY_P), !0
                            }
                        }, {
                            $elem: l.default("<span>" + t("添加行") + "</span>"),
                            onClick: function (e, t) {
                                if (c(e)) return !0;
                                var n = l.default(e.selection.getSelectionStartElem()),
                                    o = a.getRowNode(n.elems[0]);
                                if (!o) return !0;
                                n = Number(a.getCurrentRowIndex(t.elems[0], o)), o = a.getTableHtml(
                                    t.elems[0]), n = f(t, n = a.getTableHtml(u.default.ProcessingRow(
                                    l.default(o), n).elems[0]));
                                return e.selection.createRangeByElem(t), e.selection.restoreSelection(),
                                    e.cmd.do("insertHTML", n), !0
                            }
                        }, {
                            $elem: l.default("<span>" + t("删除行") + "</span>"),
                            onClick: function (e, t) {
                                if (c(e)) return !0;
                                var n = l.default(e.selection.getSelectionStartElem()),
                                    o = a.getRowNode(n.elems[0]);
                                if (!o) return !0;
                                var i = Number(a.getCurrentRowIndex(t.elems[0], o)),
                                    r = a.getTableHtml(t.elems[0]),
                                    n = u.default.DeleteRow(l.default(r), i).elems[0].children[
                                        0].children.length,
                                    o = "";
                                return e.selection.createRangeByElem(t), e.selection.restoreSelection(),
                                    o = f(t, o = 0 === n ? s.EMPTY_P : a.getTableHtml(u.default
                                        .DeleteRow(l.default(r), i).elems[0])), e.cmd.do(
                                    "insertHTML", o), !0
                            }
                        }, {
                            $elem: l.default("<span>" + t("添加列") + "</span>"),
                            onClick: function (e, t) {
                                if (c(e)) return !0;
                                var n = l.default(e.selection.getSelectionStartElem()),
                                    o = a.getCurrentColIndex(n.elems[0]),
                                    n = a.getTableHtml(t.elems[0]),
                                    o = f(t, o = a.getTableHtml(u.default.ProcessingCol(l.default(
                                        n), o).elems[0]));
                                return e.selection.createRangeByElem(t), e.selection.restoreSelection(),
                                    e.cmd.do("insertHTML", o), !0
                            }
                        }, {
                            $elem: l.default("<span>" + t("删除列") + "</span>"),
                            onClick: function (e, t) {
                                if (c(e)) return !0;
                                var n = l.default(e.selection.getSelectionStartElem()),
                                    o = a.getCurrentColIndex(n.elems[0]),
                                    i = a.getTableHtml(t.elems[0]),
                                    r = u.default.DeleteCol(l.default(i), o).elems[0].children[
                                        0].children[0].children.length,
                                    n = "";
                                return e.selection.createRangeByElem(t), e.selection.restoreSelection(),
                                    n = f(t, n = 1 === r ? s.EMPTY_P : a.getTableHtml(u.default
                                        .DeleteCol(l.default(i), o).elems[0])), e.cmd.do(
                                    "insertHTML", n), !0
                            }
                        }, {
                            $elem: l.default("<span>" + t("设置表头") + "</span>"),
                            onClick: function (e, t) {
                                if (c(e)) return !0;
                                var n = l.default(e.selection.getSelectionStartElem()),
                                    o = a.getRowNode(n.elems[0]);
                                if (!o) return !0;
                                n = Number(a.getCurrentRowIndex(t.elems[0], o));
                                0 !== n && (n = 0);
                                o = a.getTableHtml(t.elems[0]), n = f(t, n = a.getTableHtml(u.default
                                    .setTheHeader(l.default(o), n, "th").elems[0]));
                                return e.selection.createRangeByElem(t), e.selection.restoreSelection(),
                                    e.cmd.do("insertHTML", n), !0
                            }
                        }, {
                            $elem: l.default("<span>" + t("取消表头") + "</span>"),
                            onClick: function (e, t) {
                                var n = l.default(e.selection.getSelectionStartElem()),
                                    o = a.getRowNode(n.elems[0]);
                                if (!o) return !0;
                                n = Number(a.getCurrentRowIndex(t.elems[0], o));
                                0 !== n && (n = 0);
                                o = a.getTableHtml(t.elems[0]), n = f(t, n = a.getTableHtml(u.default
                                    .setTheHeader(l.default(o), n, "td").elems[0]));
                                return e.selection.createRangeByElem(t), e.selection.restoreSelection(),
                                    e.cmd.do("insertHTML", n), !0
                            }
                        }];
                    (o = new i.default(n, e, t)).create()
                },
                hideTableTooltip: function () {
                    o && (o.remove(), o = null)
                }
            }
        }

        function c(e) {
            var t = e.selection.getSelectionStartElem(),
                e = e.selection.getSelectionEndElem();
            return (null == t ? void 0 : t.elems[0]) !== (null == e ? void 0 : e.elems[0])
        }

        function f(e, t) {
            e = e.elems[0].nextSibling;
            return e && "<br>" !== e.innerHTML || (t += "" + s.EMPTY_P), t
        }
        t.default = function (e) {
            var t = (n = a(e)).showTableTooltip,
                n = n.hideTableTooltip;
            e.txt.eventHooks.tableClickEvents.push(t), e.txt.eventHooks.clickEvents.push(n), e.txt.eventHooks
                .keyupEvents.push(n), e.txt.eventHooks.toolbarClickEvents.push(n), e.txt.eventHooks.menuClickEvents
                .push(n), e.txt.eventHooks.textScrollEvents.push(n)
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            l = o(n(44)),
            u = o(n(93)),
            s = o(n(4)),
            c = o(n(137));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var f = n(2).__importDefault(n(3));

        function d(e, t) {
            for (; 0 !== e.children.length;) e.removeChild(e.children[0]);
            for (var n = 0; n < t.length; n++) e.appendChild(t[n])
        }

        function p(e) {
            var t = e.elems[0].children[0];
            return t = "COLGROUP" === t.nodeName ? e.elems[0].children[e.elems[0].children.length - 1] : t
        }
        t.default = {
            ProcessingRow: function (e, t) {
                for (var n = p(e), o = (e = (0, l.default)(Array.prototype).apply(n.children))[0].children
                    .length, i = document.createElement("tr"), r = 0; r < o; r++) {
                    var a = document.createElement("td");
                    i.appendChild(a)
                }
                return (0, u.default)(e).call(e, t + 1, 0, i), d(n, e), f.default(n.parentNode)
            },
            ProcessingCol: function (e, i) {
                for (var e = p(e), r = (0, l.default)(Array.prototype).apply(e.children), t = 0; t <
                r.length; t++) ! function (e) {
                    var t = [];
                    for ((0, s.default)(n = (0, c.default)(r[e].children)).call(n, function (e) {
                        t.push(e)
                    }); 0 !== r[e].children.length;) r[e].removeChild(r[e].children[0]);
                    var n = "TH" !== f.default(t[0]).getNodeName() ? document.createElement(
                        "td") : document.createElement("th");
                    (0, u.default)(t).call(t, i + 1, 0, n);
                    for (var o = 0; o < t.length; o++) r[e].appendChild(t[o])
                }(t);
                return d(e, r), f.default(e.parentNode)
            },
            DeleteRow: function (e, t) {
                var n = p(e),
                    e = (0, l.default)(Array.prototype).apply(n.children);
                return (0, u.default)(e).call(e, t, 1), d(n, e), f.default(n.parentNode)
            },
            DeleteCol: function (e, i) {
                for (var e = p(e), r = (0, l.default)(Array.prototype).apply(e.children), t = 0; t <
                r.length; t++) ! function (e) {
                    var t, n = [];
                    for ((0, s.default)(t = (0, c.default)(r[e].children)).call(t, function (e) {
                        n.push(e)
                    }); 0 !== r[e].children.length;) r[e].removeChild(r[e].children[0]);
                    (0, u.default)(n).call(n, i, 1);
                    for (var o = 0; o < n.length; o++) r[e].appendChild(n[o])
                }(t);
                return d(e, r), f.default(e.parentNode)
            },
            setTheHeader: function (e, t, n) {
                for (var o = p(e), i = (e = (0, l.default)(Array.prototype).apply(o.children))[t].children,
                         r = document.createElement("tr"), a = 0; a < i.length; a++) ! function (e) {
                    var t = document.createElement(n);
                    (0, s.default)(e = (0, c.default)(i[e].children)).call(e, function (e) {
                        t.appendChild(e)
                    }), r.appendChild(t)
                }(a);
                return (0, u.default)(e).call(e, t, 1, r), d(o, e), f.default(o.parentNode)
            }
        }
    }, function (e, t, n) {
        n = n(395);
        e.exports = n
    }, function (e, t, n) {
        n(51), n(396);
        n = n(10);
        e.exports = n.Array.from
    }, function (e, t, n) {
        var o = n(5),
            i = n(397);
        o({
            target: "Array",
            stat: !0,
            forced: !n(113)(function (e) {
                Array.from(e)
            })
        }, {
            from: i
        })
    }, function (e, t, n) {
        "use strict";
        var p = n(38),
            h = n(33),
            A = n(398),
            v = n(105),
            m = n(34),
            g = n(73),
            y = n(107);
        e.exports = function (e) {
            var t, n, o, i, r, a, l = h(e),
                u = "function" == typeof this ? this : Array,
                s = arguments.length,
                c = 1 < s ? arguments[1] : void 0,
                f = void 0 !== c,
                e = y(l),
                d = 0;
            if (f && (c = p(c, 2 < s ? arguments[2] : void 0, 2)), null == e || u == Array && v(e))
                for (n = new u(t = m(l.length)); d < t; d++) a = f ? c(l[d], d) : l[d], g(n, d, a);
            else
                for (r = (i = e.call(l)).next, n = new u; !(o = r.call(i)).done; d++) a = f ? A(i, c, [
                    o.value, d], !0) : o.value, g(n, d, a);
            return n.length = d, n
        }
    }, function (e, t, n) {
        var i = n(20),
            r = n(108);
        e.exports = function (t, e, n, o) {
            try {
                return o ? e(i(n)[0], n[1]) : e(n)
            } catch (e) {
                throw r(t), e
            }
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4)),
            a = o(n(137));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var l = n(2).__importDefault(n(3)),
            n = (u.prototype.getRowNode = function (e) {
                var t = l.default(e).elems[0];
                return t.parentNode ? t = null === (e = l.default(t).parentUntil("TR", t)) || void 0 ===
                e ? void 0 : e.elems[0] : t
            }, u.prototype.getCurrentRowIndex = function (e, n) {
                var o = 0,
                    t = e.children[0];
                return "COLGROUP" === t.nodeName && (t = e.children[e.children.length - 1]), (0, r.default)
                (t = (0, a.default)(t.children)).call(t, function (e, t) {
                    e === n && (o = t)
                }), o
            }, u.prototype.getCurrentColIndex = function (e) {
                var n = 0,
                    o = "TD" === l.default(e).getNodeName() || "TH" === l.default(e).getNodeName() ? e :
                        null === (t = l.default(e).parentUntil("TD", e)) || void 0 === t ? void 0 : t.elems[
                            0],
                    t = l.default(o).parent();
                return (0, r.default)(t = (0, a.default)(t.elems[0].children)).call(t, function (e, t) {
                    e === o && (n = t)
                }), n
            }, u.prototype.getTableHtml = function (e) {
                return '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + l.default(e)
                    .html() + "</table>"
            }, u);

        function u(e) {
            this.editor = e
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = function (o) {
            var e = o.txt,
                i = o.selection;
            e.eventHooks.keydownEvents.push(function (e) {
                o.selection.saveRange();
                var t, n = i.getSelectionContainerElem();
                !n || (n = (t = n.getNodeTop(o)).length && t.prev().length ? t.prev() : null) &&
                "TABLE" === n.getNodeName() && i.isSelectionEmpty() && 0 === i.getCursorPos() &&
                8 === e.keyCode && (!!(n = t.next()).length && function (e) {
                    if (e.length) {
                        e = e.elems[0];
                        return "P" === e.nodeName && "<br>" === e.innerHTML
                    }
                }(t) && (t.remove(), o.selection.setRangeToElem(n.elems[0])), e.preventDefault())
            })
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            a = o(n(25));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.formatCodeHtml = void 0;
        var o = n(2),
            i = o.__importDefault(n(35)),
            r = o.__importDefault(n(3)),
            l = n(6),
            u = o.__importDefault(n(402)),
            s = o.__importDefault(n(138)),
            c = o.__importDefault(n(31)),
            f = o.__importDefault(n(403));
        t.formatCodeHtml = function (e, t) {
            return t && (t = function e(t) {
                var n;
                var o = t.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
                if (!o || !o.length) return t;
                var i = (0, a.default)(n = l.deepClone(o)).call(n, function (e) {
                    return (e = e.replace(/<span\sclass="hljs[^>]+>/, "")).replace(
                        /<\/span>/, "")
                });
                for (var r = 0; r < o.length; r++) t = t.replace(o[r], i[r]);
                return e(t)
            }(t), null === (o = (n = t).match(/<pre[\s|\S]+?\/pre>/g)) || (0, a.default)(o).call(
                o,
                function (e) {
                    n = n.replace(e, e.replace(/<\/code><code>/g, "\n").replace(/<br>/g, ""))
                }), t = l.replaceSpecialSymbol(t = n));
            var n, o
        };
        var d, o = (d = i.default, o.__extends(p, d), p.prototype.insertLineCode = function (e) {
            var t = this.editor,
                e = r.default("<code>" + e + "</code>");
            t.cmd.do("insertElem", e), t.selection.createRangeByElem(e, !1), t.selection.restoreSelection()
        }, p.prototype.clickHandler = function () {
            var e = this.editor,
                t = e.selection.getSelectionText();
            this.isActive || (e.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(
                t))
        }, p.prototype.createPanel = function (e, t) {
            t = u.default(this.editor, e, t);
            new c.default(this, t).create()
        }, p.prototype.tryChangeActive = function () {
            var e = this.editor;
            s.default(e) ? this.active() : this.unActive()
        }, p);

        function p(e) {
            var t = r.default(
                '<div class="w-e-menu" data-title="代码"><i class="w-e-icon-terminal"></i></div>'),
                n = d.call(this, t, e) || this;
            return f.default(e), n
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            s = o(n(25));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            c = n(6),
            f = i.__importDefault(n(3)),
            d = i.__importDefault(n(138)),
            p = n(7);
        t.default = function (o, e, t) {
            var n, i = c.getRandom("input-iframe"),
                r = c.getRandom("select"),
                a = c.getRandom("btn-ok");

            function l(e) {
                var t;
                d.default(o) && d.default(o) && ((t = null == (t = o.selection.getSelectionStartElem()) ?
                    void 0 : t.getNodeTop(o)) && (o.selection.createRangeByElem(t), o.selection
                    .restoreSelection())), o.cmd.do("insertHTML", e);
                e = o.selection.getSelectionStartElem(), e = null == e ? void 0 : e.getNodeTop(o);
                f.default(p.EMPTY_P).insertAfter(e)
            }

            function u(e) {
                return o.i18next.t(e)
            }
            return {
                width: 500,
                height: 0,
                tabs: [{
                    title: u("menus.panelMenus.code.插入代码"),
                    tpl: '<div>\n                        <select name="" id="' + r +
                        '">\n                            ' + (0, s.default)(n = o.config.languageType)
                            .call(n, function (e) {
                                return "<option " + (t == e ? "selected" : "") + ' value ="' +
                                    e + '">' + e + "</option>"
                            }) +
                        '\n                        </select>\n                        <textarea id="' +
                        i +
                        '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' +
                        e.replace(/&quot;/g, '"') +
                        '</textarea>\n                        <div class="w-e-button-container">\n                            <button type="button" id="' +
                        a + '" class="right">' + (d.default(o) ? u("修改") : u("插入")) +
                        "</button>\n                        </div>\n                    </div>",
                    events: [{
                        selector: "#" + a,
                        type: "click",
                        fn: function () {
                            var e = document.getElementById(i),
                                t = f.default("#" + r).val(),
                                n = e.value,
                                e = o.highlight ? o.highlight.highlightAuto(n).value :
                                    "<xmp>" + n + "</xmp>";
                            if (n) return !d.default(o) && (l('<pre><code class="' +
                                t + '">' + e + "</code></pre>"), !0)
                        }
                    }]
                }]
            }
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(404)),
            r = o.__importDefault(n(405));
        t.default = function (e) {
            i.default(e), r.default(e)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.createShowHideFn = void 0;
        var o = n(2),
            r = o.__importDefault(n(3)),
            a = o.__importDefault(n(36));

        function i(o) {
            var i;
            return {
                showCodeTooltip: function (e) {
                    var t, n = [{
                        $elem: r.default("<span>" + (n = "删除代码", o.i18next.t((t = void 0 === t ?
                            "menus.panelMenus.code." : t) + n)) + "</span>"),
                        onClick: function (e, t) {
                            return t.remove(), !0
                        }
                    }];
                    (i = new a.default(o, e, n)).create()
                },
                hideCodeTooltip: function () {
                    i && (i.remove(), i = null)
                }
            }
        }
        t.createShowHideFn = i, t.default = function (e) {
            var t = (n = i(e)).showCodeTooltip,
                n = n.hideCodeTooltip;
            e.txt.eventHooks.codeClickEvents.push(t), e.txt.eventHooks.clickEvents.push(n), e.txt.eventHooks
                .toolbarClickEvents.push(n), e.txt.eventHooks.menuClickEvents.push(n), e.txt.eventHooks
                .textScrollEvents.push(n)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            r = n(7),
            a = o.__importDefault(n(3));
        t.default = function (o) {
            var n = o.$textElem,
                i = o.selection,
                e = o.txt.eventHooks.keydownEvents;
            e.push(function (e) {
                var t;
                40 === e.keyCode && (t = i.getSelectionContainerElem(), e = null === (e = n.children()) ||
                void 0 === e ? void 0 : e.last(), "XMP" === (null == t ? void 0 : t.elems[
                    0].tagName) && "PRE" === (null == e ? void 0 : e.elems[0].tagName) &&
                (e = a.default(r.EMPTY_P), n.append(e)))
            }), e.push(function (e) {
                o.selection.saveRange();
                var t, n = i.getSelectionContainerElem();
                n && (n = null == (t = n.getNodeTop(o)) ? void 0 : t.prev(), t = null == t ?
                    void 0 : t.getNextSibling(), n.length && "PRE" === (null == n ? void 0 :
                    n.getNodeName()) && 0 === t.length && 0 === i.getCursorPos() && 8 ===
                e.keyCode && e.preventDefault())
            })
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(23)),
            a = i.__importDefault(n(3)),
            l = i.__importDefault(n(407)),
            u = n(6),
            s = n(7),
            i = (o = r.default, i.__extends(c, o), c.prototype.clickHandler = function () {
                var e, t = this.editor,
                    n = t.selection.getRange(),
                    o = t.selection.getSelectionContainerElem();
                null != o && o.length && (t = (e = a.default(o.elems[0])).parentUntil("TABLE", o.elems[
                    0]), o = e.children(), "CODE" !== e.getNodeName() && (t && "TABLE" === a.default(
                    t.elems[0]).getNodeName() || (!o || 0 === o.length || "IMG" !== a.default(
                    o.elems[0]).getNodeName() || null != n && n.collapsed) && this.createSplitLine()))
            }, c.prototype.createSplitLine = function () {
                var e = "<hr/>" + s.EMPTY_P;
                u.UA.isFirefox && (e = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", e)
            }, c.prototype.tryChangeActive = function () {}, c);

        function c(e) {
            var t = a.default(
                '<div class="w-e-menu" data-title="分割线"><i class="w-e-icon-split-line"></i></div>'),
                n = o.call(this, t, e) || this;
            return l.default(e), n
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2).__importDefault(n(408));
        t.default = function (e) {
            o.default(e)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(3)),
            r = o.__importDefault(n(36));

        function a(n) {
            var o;
            return {
                showSplitLineTooltip: function (e) {
                    var t = [{
                        $elem: i.default("<span>" + n.i18next.t("menus.panelMenus.删除") +
                            "</span>"),
                        onClick: function (e, t) {
                            return e.selection.createRangeByElem(t), e.selection.restoreSelection(),
                                e.cmd.do("delete"), !0
                        }
                    }];
                    (o = new r.default(n, e, t)).create()
                },
                hideSplitLineTooltip: function () {
                    o && (o.remove(), o = null)
                }
            }
        }
        t.default = function (e) {
            var t = (n = a(e)).showSplitLineTooltip,
                n = n.hideSplitLineTooltip;
            e.txt.eventHooks.splitLineEvents.push(t), e.txt.eventHooks.clickEvents.push(n), e.txt.eventHooks
                .keyupEvents.push(n), e.txt.eventHooks.toolbarClickEvents.push(n), e.txt.eventHooks.menuClickEvents
                .push(n), e.txt.eventHooks.textScrollEvents.push(n)
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a, o = n(2),
            l = o.__importDefault(n(3)),
            i = o.__importDefault(n(23)),
            u = n(98),
            s = o.__importDefault(n(415)),
            c = o.__importDefault(n(139)),
            o = (a = i.default, o.__extends(f, a), f.prototype.clickHandler = function () {
                var e = this.editor;
                u.isAllTodo(e) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo()
            }, f.prototype.tryChangeActive = function () {
                u.isAllTodo(this.editor) ? this.active() : this.unActive()
            }, f.prototype.setTodo = function () {
                var o = this.editor,
                    e = o.selection.getSelectionRangeTopNodes();
                (0, r.default)(e).call(e, function (e) {
                    var t, n;
                    "P" === (null == e ? void 0 : e.getNodeName()) && (n = null === (n = (t = c
                        .default(e).getTodo()).children()) || void 0 === n ? void 0 : n.getNode(),
                        t.insertAfter(e), o.selection.moveCursor(n), e.remove())
                }), this.tryChangeActive()
            }, f.prototype.cancelTodo = function () {
                var o = this.editor,
                    e = o.selection.getSelectionRangeTopNodes();
                (0, r.default)(e).call(e, function (e) {
                    var t = null === (n = null === (t = e.childNodes()) || void 0 === t ? void 0 :
                        t.childNodes()) || void 0 === n ? void 0 : n.clone(!0),
                        n = l.default("<p></p>");
                    n.append(t), n.insertAfter(e), null !== (t = n.childNodes()) && void 0 !==
                    t && t.get(0).remove(), o.selection.moveCursor(n.getNode()), e.remove()
                })
            }, f);

        function f(e) {
            var t = l.default(
                '<div class="w-e-menu" data-title="待办事项">\n                    <i class="w-e-icon-checkbox-checked"></i>\n                </div>'
                ),
                n = a.call(this, t, e) || this;
            return s.default(e), n
        }
        t.default = o
    }, function (e, t, n) {
        e.exports = n(411)
    }, function (e, t, n) {
        n = n(412);
        e.exports = n
    }, function (e, t, n) {
        var o = n(413),
            i = Array.prototype;
        e.exports = function (e) {
            var t = e.every;
            return e === i || e instanceof Array && t === i.every ? o : t
        }
    }, function (e, t, n) {
        n(414);
        n = n(14);
        e.exports = n("Array").every
    }, function (e, t, n) {
        "use strict";
        var o = n(5),
            i = n(29).every;
        o({
            target: "Array",
            proto: !0,
            forced: !n(71)("every")
        }, {
            every: function (e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        })
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            A = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            v = i.__importDefault(n(3)),
            m = n(98),
            g = i.__importDefault(n(139)),
            y = n(98),
            w = n(7);
        t.default = function (h) {
            h.txt.eventHooks.enterDownEvents.push(function (e) {
                if (m.isAllTodo(h)) {
                    e.preventDefault();
                    var t, n, o, i, r, a, l = h.selection,
                        u = l.getSelectionRangeTopNodes()[0],
                        s = null === (c = u.childNodes()) || void 0 === c ? void 0 : c.get(0),
                        e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.anchorNode,
                        c = l.getRange();
                    if (null != c && c.collapsed || (t = null == c ? void 0 : c.commonAncestorContainer
                        .childNodes, n = null == c ? void 0 : c.startContainer, o = null ==
                    c ? void 0 : c.endContainer, d = null == c ? void 0 : c.startOffset,
                        p = null == c ? void 0 : c.endOffset, r = i = 0, a = [], null != t &&
                    (0, A.default)(t).call(t, function (e, t) {
                        e.contains(n) && (i = t), e.contains(o) && (r = t)
                    }), 1 < r - i && (null != t && (0, A.default)(t).call(t, function (
                        e, t) {
                        t <= i || r <= t || a.push(e)
                    }), (0, A.default)(a).call(a, function (e) {
                        e.remove()
                    })), y.dealTextNode(n, d), y.dealTextNode(o, p, !1), h.selection.moveCursor(
                        o, 0)), "" === u.text()) {
                        var f = v.default(w.EMPTY_P);
                        return f.insertAfter(u), l.moveCursor(f.getNode()), void u.remove()
                    }
                    var d = l.getCursorPos(),
                        p = m.getCursorNextNode(null == s ? void 0 : s.getNode(), e, d),
                        f = g.default(v.default(p)),
                        e = f.getInputContainer(),
                        d = e.parent().getNode(),
                        p = f.getTodo(),
                        f = e.getNode().nextSibling;
                    "" === (null == s ? void 0 : s.text()) && null != s && s.append(v.default(
                        "<br>")), p.insertAfter(u), f && "" !== (null == f ? void 0 : f.textContent) ?
                        l.moveCursor(d) : ("BR" !== (null == f ? void 0 : f.nodeName) && v.default(
                            "<br>").insertAfter(e), l.moveCursor(d, 1))
                }
            }), h.txt.eventHooks.deleteUpEvents.push(function () {
                var e = h.selection.getSelectionRangeTopNodes()[0];
                e && y.isTodo(e) && "" === e.text() && (v.default(w.EMPTY_P).insertAfter(e), e.remove())
            }), h.txt.eventHooks.deleteDownEvents.push(function (e) {
                if (m.isAllTodo(h)) {
                    var t = h.selection,
                        n = t.getSelectionRangeTopNodes()[0],
                        o = null === (l = n.childNodes()) || void 0 === l ? void 0 : l.getNode(),
                        i = v.default("<p></p>"),
                        r = i.getNode(),
                        a = null === (u = window.getSelection()) || void 0 === u ? void 0 : u.anchorNode,
                        l = t.getCursorPos(),
                        u = a.previousSibling;
                    if ("" === n.text()) {
                        e.preventDefault();
                        a = v.default(w.EMPTY_P);
                        return a.insertAfter(n), n.remove(), void t.moveCursor(a.getNode(), 0)
                    }
                    "SPAN" === (null == u ? void 0 : u.nodeName) && "INPUT" === u.childNodes[0]
                        .nodeName && 0 === l && (e.preventDefault(), null != o && (0, A.default)
                    (o = o.childNodes).call(o, function (e, t) {
                        0 !== t && r.appendChild(e.cloneNode(!0))
                    }), i.insertAfter(n), n.remove())
                }
            })
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var s = n(2).__importDefault(n(3)),
            c = n(6),
            f = n(7),
            d = "1px solid #c9d8db",
            p = "#FFF",
            h = "1px solid #EEE";
        t.default = function (e) {
            var t = e.toolbarSelector,
                n = s.default(t),
                o = e.textSelector,
                i = e.config.height,
                r = e.i18next,
                a = s.default("<div></div>"),
                l = s.default("<div></div>"),
                t = null;
            null == o ? (u = n.children(), n.append(a).append(l), a.css("background-color", p).css(
                "border", d).css("border-bottom", h), l.css("border", d).css("border-top",
                "none").css("height", i + "px")) : (n.append(a), t = s.default(o).children(), s.default(
                o).append(l), u = l.children()), (o = s.default("<div></div>")).attr(
                "contenteditable", "true").css("width", "100%").css("height", "100%"), (r = s.default(
                "<div>" + r.t(e.config.placeholder) + "</div>")).addClass("placeholder"), u && u.length ?
                (o.append(u), r.hide()) : o.append(s.default(f.EMPTY_P)), t && t.length && (o.append(t),
                r.hide()), l.append(o), l.append(r), a.addClass("w-e-toolbar").css("z-index", e.zIndex
                .get("toolbar")), l.addClass("w-e-text-container"), l.css("z-index", e.zIndex.get()),
                o.addClass("w-e-text");
            var u = c.getRandom("toolbar-elem");
            a.attr("id", u), t = c.getRandom("text-elem"), o.attr("id", t), (r = l.getBoundingClientRect()
                .height) !== o.getBoundingClientRect().height && o.css("min-height", r + "px"), e.$toolbarElem =
                a, e.$textContainerElem = l, e.$textElem = o, e.toolbarElemId = u, e.textElemId = t
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var a = n(2).__importDefault(n(3)),
            l = n(7);
        t.default = function e(t, n) {
            var o = t.$textElem,
                i = o.children();
            if (!i || !i.length) return o.append(a.default(l.EMPTY_P)), void e(t);
            var r = i.last();
            if (n && (i = r.html().toLowerCase(), n = r.getNodeName(), "<br>" !== i && "<br/>" !== i ||
            "P" !== n)) return o.append(a.default(l.EMPTY_P)), void e(t);
            t.selection.createRangeByElem(r, !1, !0), t.config.focus ? t.selection.restoreSelection() :
                t.selection.clearWindowSelectionRange()
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var a = n(2).__importDefault(n(3));

        function l(e) {
            (0, e.config.onfocus)(e.txt.html() || "")
        }
        t.default = function (e) {
            var t, n;
            (t = e).txt.eventHooks.changeEvents.push(function () {
                var e = t.config.onchange;
                e && e(t.txt.html() || ""), t.txt.togglePlaceholder()
            }),
                function (i) {
                    function e(e) {
                        var t = e.target,
                            n = a.default(t),
                            o = i.$textElem,
                            t = i.$toolbarElem,
                            o = o.isContain(n),
                            n = t.isContain(n),
                            e = t.elems[0] == e.target;
                        o ? (i.isFocus || l(i), i.isFocus = !0) : n && !e || !i.isFocus || (n = (o = i)
                            .config.onblur, e = o.txt.html() || "", (0, r.default)(o = o.txt.eventHooks
                            .onBlurEvents).call(o, function (e) {
                            return e()
                        }), n(e), i.isFocus = !1)
                    }
                    i.isFocus = !1, document.activeElement === i.$textElem.elems[0] && i.config.focus &&
                    (l(i), i.isFocus = !0);
                    a.default(document).on("click", e), i.beforeDestroy(function () {
                        a.default(document).off("click", e)
                    })
                }(e), (n = e).$textElem.on("compositionstart", function () {
                n.isComposing = !0, n.txt.togglePlaceholder()
            }).on("compositionend", function () {
                n.isComposing = !1, n.txt.togglePlaceholder()
            })
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        }), t.default = function (e) {
            var t = (n = e.config).lang,
                n = n.languages;
            if (null == e.i18next) e.i18next = {
                t: function (e) {
                    e = e.split(".");
                    return e[e.length - 1]
                }
            };
            else try {
                e.i18next.init({
                    ns: "wangEditor",
                    lng: t,
                    defaultNS: "wangEditor",
                    resources: n
                })
            } catch (e) {
                throw new Error("i18next:" + e)
            }
        }
    }, function (e, o, t) {
        "use strict";
        var n = t(0),
            i = n(t(1)),
            r = n(t(30));
        (0, i.default)(o, "__esModule", {
            value: !0
        }), o.setUnFullScreen = o.setFullScreen = void 0;
        var a = t(2).__importDefault(t(3));
        t(421);
        var l = "w-e-icon-fullscreen",
            u = "w-e-icon-fullscreen_exit",
            s = "w-e-full-screen-editor";
        o.setFullScreen = function (e) {
            var t = a.default(e.toolbarSelector),
                n = e.$textContainerElem,
                o = e.$toolbarElem,
                i = (0, r.default)(o).call(o, "i." + l),
                e = e.config;
            i.removeClass(l), i.addClass(u), t.addClass(s), t.css("z-index", e.zIndexFullScreen);
            o = o.getBoundingClientRect();
            n.css("height", "calc(100% - " + o.height + "px)")
        };
        o.setUnFullScreen = function (e) {
            var t = a.default(e.toolbarSelector),
                n = e.$textContainerElem,
                o = e.$toolbarElem,
                o = (0, r.default)(o).call(o, "i." + u),
                e = e.config;
            o.removeClass(u), o.addClass(l), t.removeClass(s), t.css("z-index", "auto"), n.css("height",
                e.height + "px")
        };
        o.default = function (t) {
            var e, n;
            t.textSelector || t.config.showFullScreen && (e = t.$toolbarElem, (n = a.default(
                '<div class="w-e-menu" data-title="全屏">\n            <i class="' + l +
                '"></i>\n        </div>')).on("click", function (e) {
                (0, r.default)(e = a.default(e.currentTarget)).call(e, "i").hasClass(l) ? (
                    n.attr("data-title", "取消全屏"), o.setFullScreen(t)) : (n.attr(
                    "data-title", "全屏"), o.setUnFullScreen(t))
            }), e.append(n))
        }
    }, function (e, t, n) {
        var o = n(21),
            i = n(422),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        (t = n(22)(!1)).push([e.i,
            ".w-e-full-screen-editor {\n  position: fixed;\n  width: 100%!important;\n  height: 100%!important;\n  left: 0;\n  top: 0;\n}\n",
            ""]), e.exports = t
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(30));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        t.default = function (e, t) {
            e = e.$textElem, t = (0, r.default)(e).call(e, "[id='" + t + "']").getOffsetData().top;
            e.scrollTop(t)
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2).__importDefault(n(127)),
            i = {
                menu: 2,
                panel: 2,
                toolbar: 1,
                tooltip: 1,
                textContainer: 1
            },
            n = (r.prototype.get = function (e) {
                return e && this.tier[e] ? this.baseZIndex + this.tier[e] : this.baseZIndex
            }, r.prototype.init = function (e) {
                this.baseZIndex == o.default.zIndex && (this.baseZIndex = e.config.zIndex)
            }, r);

        function r() {
            this.tier = i, this.baseZIndex = o.default.zIndex
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            a = o(n(74)),
            r = o(n(4));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(426)),
            l = n(6),
            u = n(7);
        var s, o = (s = i.default, o.__extends(c, s), c.prototype.save = function () {
            this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit())
        }, c.prototype.emit = function () {
            var e;
            (0, r.default)(e = this.editor.txt.eventHooks.changeEvents).call(e, function (e) {
                return e()
            })
        }, c.prototype.observe = function () {
            var e = this;
            s.prototype.observe.call(this, this.editor.$textElem.elems[0]);
            var t = this.editor.config.onchangeTimeout;
            this.asyncSave = l.debounce(function () {
                e.save()
            }, t), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend",
                function () {
                    e.asyncSave()
                })
        }, c);

        function c(i) {
            var r = s.call(this, function (e, t) {
                var n, o;
                if (n = e, o = t.target, e = (0, a.default)(n).call(n, function (e) {
                    var t = e.type,
                        n = e.target,
                        e = e.attributeName;
                    return "attributes" != t || "attributes" == t && ("contenteditable" ==
                        e || n != o)
                }), (n = r.data).push.apply(n, e), i.isCompatibleMode) r.asyncSave();
                else if (!i.isComposing) return r.asyncSave()
            }) || this;
            return r.editor = i, r.data = [], r.asyncSave = u.EMPTY_FN, r
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        n = n(0)(n(1));
        (0, n.default)(t, "__esModule", {
            value: !0
        });
        (0, n.default)(o.prototype, "target", {
            get: function () {
                return this.node
            },
            enumerable: !1,
            configurable: !0
        }), o.prototype.observe = function (e) {
            this.node instanceof Node || (this.node = e, this.connect())
        }, o.prototype.connect = function () {
            if (this.node) return this.observer.observe(this.node, this.options), this;
            throw new Error("还未初始化绑定，请您先绑定有效的 Node 节点")
        }, o.prototype.disconnect = function () {
            var e = this.observer.takeRecords();
            e.length && this.callback(e), this.observer.disconnect()
        }, n = o;

        function o(t, e) {
            var n = this;
            this.options = {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0
            }, this.callback = function (e) {
                t(e, n)
            }, this.observer = new MutationObserver(this.callback), e && (this.options = e)
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        var o = n(0)(n(1));
        (0, o.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = i.__importDefault(n(428)),
            a = i.__importDefault(n(435)),
            l = i.__importDefault(n(436)),
            o = ((0, o.default)(u.prototype, "size", {
                get: function () {
                    return this.scroll.size
                },
                enumerable: !1,
                configurable: !0
            }), u.prototype.observe = function () {
                this.content.observe(), this.scroll.observe(), this.editor.isCompatibleMode || this.range
                    .observe()
            }, u.prototype.save = function (e) {
                e.length && (this.content.save(e), this.scroll.save(), this.editor.isCompatibleMode ||
                this.range.save())
            }, u.prototype.revoke = function () {
                this.editor.change.disconnect();
                var e = this.content.revoke();
                e && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor
                    .$textElem.focus())), this.editor.change.connect(), e && this.editor.change.emit()
            }, u.prototype.restore = function () {
                this.editor.change.disconnect();
                var e = this.content.restore();
                e && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(),
                    this.editor.$textElem.focus())), this.editor.change.connect(), e && this.editor
                    .change.emit()
            }, u);

        function u(e) {
            this.editor = e, this.content = new r.default(e), this.scroll = new a.default(e), this.range =
                new l.default(e)
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(2),
            i = o.__importDefault(n(429)),
            r = o.__importDefault(n(433)),
            n = (a.prototype.observe = function () {
                this.editor.isCompatibleMode ? this.cache = new r.default(this.editor) : this.cache =
                    new i.default(this.editor), this.cache.observe()
            }, a.prototype.save = function (e) {
                this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(e)
            }, a.prototype.revoke = function () {
                var e;
                return null === (e = this.cache) || void 0 === e ? void 0 : e.revoke()
            }, a.prototype.restore = function () {
                var e;
                return null === (e = this.cache) || void 0 === e ? void 0 : e.restore()
            }, a);

        function a(e) {
            this.editor = e
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            r = i.__importDefault(n(99)),
            a = i.__importDefault(n(431)),
            l = n(432),
            i = (o = r.default, i.__extends(u, o), u.prototype.observe = function () {
                this.resetMaxSize(this.editor.config.historyMaxSize)
            }, u.prototype.compile = function (e) {
                return this.save(a.default(e)), this
            }, u.prototype.revoke = function () {
                return o.prototype.revoke.call(this, function (e) {
                    l.revoke(e)
                })
            }, u.prototype.restore = function () {
                return o.prototype.restore.call(this, function (e) {
                    l.restore(e)
                })
            }, u);

        function u(e) {
            var t = o.call(this, e.config.historyMaxSize) || this;
            return t.editor = e, t
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        n = n(0)(n(1));
        (0, n.default)(t, "__esModule", {
            value: !0
        }), t.CeilStack = void 0;
        o.prototype.resetMax = function (e) {
            e = Math.abs(e), this.reset || isNaN(e) || (this.max = e, this.reset = !0)
        }, (0, n.default)(o.prototype, "size", {
            get: function () {
                return this.data.length
            },
            enumerable: !1,
            configurable: !0
        }), o.prototype.instack = function (e) {
            return this.data.unshift(e), this.max && this.size > this.max && (this.data.length = this.max),
                this
        }, o.prototype.outstack = function () {
            return this.data.shift()
        }, o.prototype.clear = function () {
            return this.data.length = 0, this
        }, n = o;

        function o(e) {
            void 0 === e && (e = 0), this.data = [], this.max = 0, this.reset = !1, (e = Math.abs(e)) && (
                this.max = e)
        }
        t.CeilStack = n
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            u = o(n(4)),
            s = o(n(26));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.compliePosition = t.complieNodes = t.compileValue = t.compileType = void 0;
        var c = n(6);

        function f(e) {
            switch (e) {
                case "childList":
                    return "node";
                case "attributes":
                    return "attr";
                default:
                    return "text"
            }
        }

        function d(e) {
            switch (e.type) {
                case "attributes":
                    return e.target.getAttribute(e.attributeName) || "";
                case "characterData":
                    return e.target.textContent;
                default:
                    return ""
            }
        }

        function p(e) {
            var t = {};
            return e.addedNodes.length && (t.add = c.toArray(e.addedNodes)), e.removedNodes.length && (t.remove =
                c.toArray(e.removedNodes)), t
        }

        function h(e) {
            e = e.previousSibling ? {
                type: "before",
                target: e.previousSibling
            } : e.nextSibling ? {
                type: "after",
                target: e.nextSibling
            } : {
                type: "parent",
                target: e.target
            };
            return e
        }
        t.compileType = f, t.compileValue = d, t.complieNodes = p, t.compliePosition = h;
        var A = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];

        function v(e, t) {
            for (var n = 0, o = t.length - 1; 0 < o && e.contains(t[o]); o--) n++;
            return n
        }
        t.default = function (e) {
            var r = [],
                a = !1,
                l = [];
            return (0, u.default)(e).call(e, function (e, t) {
                var n, o, i = {
                    type: f(e.type),
                    target: e.target,
                    attr: e.attributeName || "",
                    value: d(e) || "",
                    oldValue: e.oldValue || "",
                    nodes: p(e),
                    position: h(e)
                };
                r.push(i), c.UA.isFirefox && (a && e.addedNodes.length && 1 == e.addedNodes[0].nodeType &&
                (o = {
                    type: "node",
                    target: n = e.addedNodes[0],
                    attr: "",
                    value: "",
                    oldValue: "",
                    nodes: {
                        add: [a]
                    },
                    position: {
                        type: "parent",
                        target: n
                    }
                }, -1 != (0, s.default)(A).call(A, n.nodeName) ? (o.nodes.add = c.toArray(
                    n.childNodes), r.push(o)) : 3 == a.nodeType ? (v(n, l) && (o.nodes
                    .add = c.toArray(n.childNodes)), r.push(o)) : -1 == (0, s.default)
                (A).call(A, e.target.nodeName) && v(n, l) && (o.nodes.add = c.toArray(
                    n.childNodes), r.push(o))), "node" == i.type && 1 == e.removedNodes
                    .length ? (a = e.removedNodes[0], l.push(a)) : (a = !1, l.length = 0))
            }), r
        }
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(4)),
            a = o(n(130));

        function l(t, e) {
            var n = t.position.target;
            switch (t.position.type) {
                case "before":
                    n.nextSibling ? (n = n.nextSibling, (0, r.default)(e).call(e, function (e) {
                        t.target.insertBefore(e, n)
                    })) : (0, r.default)(e).call(e, function (e) {
                        t.target.appendChild(e)
                    });
                    break;
                case "after":
                    (0, r.default)(e).call(e, function (e) {
                        t.target.insertBefore(e, n)
                    });
                    break;
                default:
                    (0, r.default)(e).call(e, function (e) {
                        n.appendChild(e)
                    })
            }
        }(0, i.default)(t, "__esModule", {
            value: !0
        }), t.restore = t.revoke = void 0;
        var u = {
            node: function (t) {
                for (var e = 0, n = (0, a.default)(t.nodes); e < n.length; e++) {
                    var o = n[e],
                        i = o[0],
                        o = o[1];
                    "add" === i ? (0, r.default)(o).call(o, function (e) {
                        t.target.removeChild(e)
                    }) : l(t, o)
                }
            },
            text: function (e) {
                e.target.textContent = e.oldValue
            },
            attr: function (e) {
                var t = e.target;
                null == e.oldValue ? t.removeAttribute(e.attr) : t.setAttribute(e.attr, e.oldValue)
            }
        };
        t.revoke = function (e) {
            for (var t = e.length - 1; - 1 < t; t--) {
                var n = e[t];
                u[n.type](n)
            }
        };
        var s = {
            node: function (e) {
                for (var t = 0, n = (0, a.default)(e.nodes); t < n.length; t++) {
                    var o = n[t],
                        i = o[0],
                        o = o[1];
                    "add" === i ? l(e, o) : (0, r.default)(o).call(o, function (e) {
                        e.parentNode.removeChild(e)
                    })
                }
            },
            text: function (e) {
                e.target.textContent = e.value
            },
            attr: function (e) {
                e.target.setAttribute(e.attr, e.value)
            }
        };
        t.restore = function (e) {
            for (var t = 0, n = e; t < n.length; t++) {
                var o = n[t];
                s[o.type](o)
            }
        }
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o = n(434),
            n = (i.prototype.observe = function () {
                this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor
                    .$textElem.html())
            }, i.prototype.save = function () {
                return this.data.insertLast(this.editor.$textElem.html()), this
            }, i.prototype.revoke = function () {
                var e = this.data.prev();
                return !!e && (this.editor.$textElem.html(e), !0)
            }, i.prototype.restore = function () {
                var e = this.data.next();
                return !!e && (this.editor.$textElem.html(e), !0)
            }, i);

        function i(e) {
            this.editor = e, this.data = new o.TailChain
        }
        t.default = n
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            r = o(n(93));
        (0, i.default)(t, "__esModule", {
            value: !0
        }), t.TailChain = void 0;
        a.prototype.resetMax = function (e) {
            (e = Math.abs(e)) && (this.max = e)
        }, (0, i.default)(a.prototype, "size", {
            get: function () {
                return this.data.length
            },
            enumerable: !1,
            configurable: !0
        }), a.prototype.insertLast = function (e) {
            var t;
            for (this.isRe && ((0, r.default)(t = this.data).call(t, this.point + 1), this.isRe = !1),
                     this.data.push(e); this.max && this.size > this.max;) this.data.shift();
            return this.point = this.size - 1, this
        }, a.prototype.current = function () {
            return this.data[this.point]
        }, a.prototype.prev = function () {
            if (this.isRe || (this.isRe = !0), this.point--, !(this.point < 0)) return this.current();
            this.point = 0
        }, a.prototype.next = function () {
            if (this.isRe || (this.isRe = !0), this.point++, !(this.point >= this.size)) return this.current();
            this.point = this.size - 1
        }, i = a;

        function a() {
            this.data = [], this.max = 0, this.point = 0, this.isRe = !1
        }
        t.TailChain = i
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        });
        var o, i = n(2),
            n = i.__importDefault(n(99)),
            i = (o = n.default, i.__extends(r, o), r.prototype.observe = function () {
                var e = this;
                this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll",
                    function () {
                        e.last = e.target.scrollTop
                    }), this.resetMaxSize(this.editor.config.historyMaxSize)
            }, r.prototype.save = function () {
                return o.prototype.save.call(this, [this.last, this.target.scrollTop]), this
            }, r.prototype.revoke = function () {
                var t = this;
                return o.prototype.revoke.call(this, function (e) {
                    t.target.scrollTop = e[0]
                })
            }, r.prototype.restore = function () {
                var t = this;
                return o.prototype.restore.call(this, function (e) {
                    t.target.scrollTop = e[1]
                })
            }, r);

        function r(e) {
            var t = o.call(this, e.config.historyMaxSize) || this;
            return t.editor = e, t.last = 0, t.target = e.$textElem.elems[0], t
        }
        t.default = i
    }, function (e, t, n) {
        "use strict";
        var o = n(0)(n(1));
        (0, o.default)(t, "__esModule", {
            value: !0
        });
        var i = n(2),
            r = i.__importDefault(n(99)),
            a = i.__importDefault(n(3)),
            l = n(6);

        function u(e) {
            return {
                start: [e.startContainer, e.startOffset],
                end: [e.endContainer, e.endOffset],
                root: e.commonAncestorContainer,
                collapsed: e.collapsed
            }
        }
        var s, o = (s = r.default, i.__extends(c, s), (0, o.default)(c.prototype, "rangeHandle", {
            get: function () {
                var e = document.getSelection();
                return e && e.rangeCount ? e.getRangeAt(0) : document.createRange()
            },
            enumerable: !1,
            configurable: !0
        }), c.prototype.observe = function () {
            var t = this;

            function e() {
                var e = t.rangeHandle;
                t.root !== e.commonAncestorContainer && !t.root.contains(e.commonAncestorContainer) ||
                t.editor.isComposing || t.updateLastRange()
            }
            this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize),
                a.default(document).on("selectionchange", e), this.editor.beforeDestroy(function () {
                a.default(document).off("selectionchange", e)
            }), t.editor.$textElem.on("keydown", function (e) {
                "Backspace" != e.key && "Delete" != e.key || t.updateLastRange()
            })
        }, c.prototype.save = function () {
            var e = u(this.rangeHandle);
            return s.prototype.save.call(this, [this.lastRange, e]), this.lastRange = e, this
        }, c.prototype.set = function (e) {
            try {
                if (e) {
                    var t = this.rangeHandle;
                    return t.setStart.apply(t, e.start), t.setEnd.apply(t, e.end), this.editor.menus
                        .changeActive(), !0
                }
            } catch (e) {
                return !1
            }
            return !1
        }, c.prototype.revoke = function () {
            var t = this;
            return s.prototype.revoke.call(this, function (e) {
                t.set(e[0])
            })
        }, c.prototype.restore = function () {
            var t = this;
            return s.prototype.restore.call(this, function (e) {
                t.set(e[1])
            })
        }, c);

        function c(e) {
            var t = s.call(this, e.config.historyMaxSize) || this;
            return t.editor = e, t.lastRange = u(document.createRange()), t.root = e.$textElem.elems[0], t.updateLastRange =
                l.debounce(function () {
                    t.lastRange = u(t.rangeHandle)
                }, e.config.onchangeTimeout), t
        }
        t.default = o
    }, function (e, t, n) {
        "use strict";
        var o = n(0),
            i = o(n(1)),
            a = o(n(30));
        (0, i.default)(t, "__esModule", {
            value: !0
        });
        var l = n(2).__importDefault(n(3));
        n(438), t.default = function (n) {
            var o, i, r = !1;
            return n.txt.eventHooks.changeEvents.push(function () {
                r && (0, a.default)(o).call(o, ".w-e-content-preview").html(n.$textElem.html())
            }), {
                disable: function () {
                    var e, t;
                    r || (n.$textElem.hide(), e = n.zIndex.get("textContainer"), t = n.txt.html(),
                        o = l.default('<div class="w-e-content-mantle" style="z-index:' + e +
                            '">\n                <div class="w-e-content-preview w-e-text">' +
                            t + "</div>\n            </div>"), n.$textContainerElem.append(
                        o), t = n.zIndex.get("menu"), i = l.default(
                        '<div class="w-e-menue-mantle" style="z-index:' + t +
                        '"></div>'), n.$toolbarElem.append(i), r = !0)
                },
                enable: function () {
                    r && (o.remove(), i.remove(), n.$textElem.show(), r = !1)
                }
            }
        }
    }, function (e, t, n) {
        var o = n(21),
            i = n(439),
            n = {
                insert: "head",
                singleton: !1
            };
        o(i = "string" == typeof (i = i.__esModule ? i.default : i) ? [[e.i, i, ""]] : i, n);
        e.exports = i.locals || {}
    }, function (e, t, n) {
        (t = n(22)(!1)).push([e.i,
            ".w-e-content-mantle {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.w-e-content-mantle .w-e-content-preview {\n  width: 100%;\n  min-height: 100%;\n  padding: 0 10px;\n  line-height: 1.5;\n}\n.w-e-content-mantle .w-e-content-preview img {\n  cursor: default;\n}\n.w-e-content-mantle .w-e-content-preview img:hover {\n  box-shadow: none;\n}\n.w-e-menue-mantle {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n",
            ""]), e.exports = t
    }, function (e, t, n) {
        "use strict";
        (0, n(0)(n(1)).default)(t, "__esModule", {
            value: !0
        })
    }], i.c = o, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(n, o, function (e) {
                return t[e]
            }.bind(null, o));
        return n
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 140).default;

    function i(e) {
        if (o[e]) return o[e].exports;
        var t = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    var n, o
});