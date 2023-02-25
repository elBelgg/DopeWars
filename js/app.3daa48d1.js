(function(t) {
	function e(e) {
		for (var n, i, s = e[0], c = e[1], l = e[2], d = 0, v = []; d < s.length; d++) i = s[d], Object.prototype.hasOwnProperty.call(o, i) && o[i] && v.push(o[i][0]), o[i] = 0;
		for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
		u && u(e);
		while (v.length) v.shift()();
		return r.push.apply(r, l || []), a()
	}

	function a() {
		for (var t, e = 0; e < r.length; e++) {
			for (var a = r[e], n = !0, s = 1; s < a.length; s++) {
				var c = a[s];
				0 !== o[c] && (n = !1)
			}
			n && (r.splice(e--, 1), t = i(i.s = a[0]))
		}
		return t
	}
	var n = {},
		o = {
			app: 0
		},
		r = [];

	function i(e) {
		if (n[e]) return n[e].exports;
		var a = n[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(a.exports, a, a.exports, i), a.l = !0, a.exports
	}
	i.m = t, i.c = n, i.d = function(t, e, a) {
		i.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: a
		})
	}, i.r = function(t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, i.t = function(t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var a = Object.create(null);
		if (i.r(a), Object.defineProperty(a, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var n in t) i.d(a, n, function(e) {
				return t[e]
			}.bind(null, n));
		return a
	}, i.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return i.d(e, "a", e), e
	}, i.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, i.p = "/";
	var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
		c = s.push.bind(s);
	s.push = e, s = s.slice();
	for (var l = 0; l < s.length; l++) e(s[l]);
	var u = c;
	r.push([0, "chunk-vendors"]), a()
})({
	0: function(t, e, a) {
		t.exports = a("56d7")
	},
	4795: function(t, e, a) {},
	"56d7": function(t, e, a) {
		"use strict";
		a.r(e);
		a("cadf"), a("551c"), a("f751"), a("097d");
		var n = a("2b0e"),
			o = function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("v-app", [a("v-app-bar", {
					attrs: {
						app: ""
					}
				}, [a("v-toolbar-title", {
					staticClass: "headline text-uppercase"
				}, [a("span", [t._v("Dope Wars")])]), a("v-spacer"), a("span", [t._v("")])], 1), a("v-content", [a("router-view")], 1)], 1)
			},
			r = [],
			i = {
				name: "App",
				components: {},
				data: function() {
					return {}
				}
			},
			s = i,
			c = a("2877"),
			l = a("6544"),
			u = a.n(l),
			d = a("7496"),
			v = a("40dc"),
			p = a("a75b"),
			m = a("2fa4"),
			y = a("2a7f"),
			f = Object(c["a"])(s, o, r, !1, null, null, null),
			b = f.exports;
		u()(f, {
			VApp: d["a"],
			VAppBar: v["a"],
			VContent: p["a"],
			VSpacer: m["a"],
			VToolbarTitle: y["a"]
		});
		var x = a("8c4f"),
			g = function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("Game")
			},
			h = [],
			_ = function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("v-container", [a("div", {
					staticClass: "text-center"
				}, [a("v-dialog", {
					attrs: {
						width: "500"
					},
					model: {
						value: t.dialog,
						callback: function(e) {
							t.dialog = e
						},
						expression: "dialog"
					}
				}, [a("v-card", [a("v-card-title", {
					staticClass: "headline grey darken-2",
					attrs: {
						"primary-title": ""
					}
				}, [t._v("\n          Juego terminado\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, [t._v("\n          Terminaste el juego con:\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, [t._v("\n          En mano: " + t._s(Number(t.cash).toLocaleString()) + "€\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, [t._v("\n          Banco: " + t._s(Number(t.bank).toLocaleString()) + "€\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, [t._v("\n          Deuda: " + t._s(Number(t.debt).toLocaleString()) + "€\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, [t._v("\n          Cantidad final: " + t._s(Number(t.cash + t.bank - t.debt).toLocaleString()) + "€\n        ")]), a("v-divider"), a("v-card-actions", [a("div", {
					staticClass: "flex-grow-1"
				}), a("v-btn", {
					attrs: {
						color: "primary",
						text: ""
					},
					on: {
						click: function(e) {
							return t.newGame()
						}
					}
				}, [t._v("\n            Nueva partida\n          ")])], 1)], 1)], 1)], 1), a("div", {
					staticClass: "text-center"
				}, [a("v-dialog", {
					attrs: {
						width: "500"
					},
					model: {
						value: t.locationDialog,
						callback: function(e) {
							t.locationDialog = e
						},
						expression: "locationDialog"
					}
				}, [a("v-card", {
					staticClass: "mx-auto",
					attrs: {
						tile: ""
					}
				}, [a("v-list", {
					attrs: {
						rounded: ""
					}
				}, [a("v-subheader", [t._v("¿DÓNDE VAMOS LOCO?")]), a("v-list-item-group", {
					attrs: {
						color: "primary"
					},
					model: {
						value: t.currentLocation.id,
						callback: function(e) {
							t.$set(t.currentLocation, "id", e)
						},
						expression: "currentLocation.id"
					}
				}, t._l(t.locations, (function(e, n) {
					return a("v-list-item", {
						key: n,
						attrs: {
							disabled: t.isLocationDisabled(e)
						},
						on: {
							click: function(a) {
								return t.changeLocation(e)
							}
						}
					}, [a("v-list-item-icon", [a("v-icon", {
						domProps: {
							textContent: t._s(e.icon)
						}
					})], 1), a("v-list-item-content", [a("v-list-item-title", {
						domProps: {
							textContent: t._s(e.name)
						}
					})], 1)], 1)
				})), 1)], 1)], 1)], 1)], 1), t.policeDialog ? t._e() : a("div", {
					staticClass: "text-center"
				}, [a("v-dialog", {
					attrs: {
						width: "500"
					},
					model: {
						value: t.eventDialog,
						callback: function(e) {
							t.eventDialog = e
						},
						expression: "eventDialog"
					}
				}, [a("v-card", [a("v-card-title", {
					staticClass: "headline grey darken-2",
					attrs: {
						"primary-title": ""
					}
				}, [t._v("\n          Noticias\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, t._l(t.currentEvents, (function(e, n) {
					return a("v-list", {
						key: n
					}, [a("li", {
						class: {
							bottom: 0 == e.type,
							outrageous: 1 == e.type
						}
					}, [t._v(t._s(e.message))])])
				})), 1), a("v-divider"), a("v-card-actions", [a("div", {
					staticClass: "flex-grow-1"
				}), a("v-btn", {
					attrs: {
						color: "primary",
						text: ""
					},
					on: {
						click: function(e) {
							t.eventDialog = !1
						}
					}
				}, [t._v("\n            Vale\n          ")])], 1)], 1)], 1)], 1), a("div", {
					staticClass: "text-center"
				}, [a("v-dialog", {
					attrs: {
						width: "500"
					},
					model: {
						value: t.debtDialog,
						callback: function(e) {
							t.debtDialog = e
						},
						expression: "debtDialog"
					}
				}, [a("v-card", [a("v-card-title", {
					staticClass: "headline grey darken-2",
					attrs: {
						"primary-title": ""
					}
				}, [t._v("\n          Pagar deuda\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, [a("v-row", [a("v-col", {
					staticClass: "pr-4"
				}, [a("v-slider", {
					staticClass: "align-center",
					attrs: {
						max: t.maxPayDebtAmountComputed,
						min: 0,
						"hide-details": ""
					},
					scopedSlots: t._u([{
						key: "append",
						fn: function() {
							return [a("v-text-field", {
								staticClass: "mt-0 pt-0",
								staticStyle: {
									width: "60px"
								},
								attrs: {
									"hide-details": "",
									"single-line": "",
									type: "number"
								},
								model: {
									value: t.payDebtAmount,
									callback: function(e) {
										t.payDebtAmount = e
									},
									expression: "payDebtAmount"
								}
							})]
						},
						proxy: !0
					}]),
					model: {
						value: t.payDebtAmount,
						callback: function(e) {
							t.payDebtAmount = e
						},
						expression: "payDebtAmount"
					}
				})], 1)], 1), a("v-row", [a("v-col", [a("v-btn", {
					attrs: {
						color: "success"
					},
					on: {
						click: function(e) {
							return t.payDebt()
						}
					}
				}, [t._v("Saldar cuentas")])], 1)], 1)], 1), a("v-divider"), a("v-card-actions", [a("div", {
					staticClass: "flex-grow-1"
				}), a("v-btn", {
					attrs: {
						color: "primary",
						text: ""
					},
					on: {
						click: function(e) {
							t.debtDialog = !1
						}
					}
				}, [t._v("\n            Cerrar\n          ")])], 1)], 1)], 1)], 1), a("div", {
					staticClass: "text-center"
				}, [a("v-dialog", {
					attrs: {
						width: "500"
					},
					model: {
						value: t.bankDialog,
						callback: function(e) {
							t.bankDialog = e
						},
						expression: "bankDialog"
					}
				}, [a("v-card", [a("v-card-title", {
					staticClass: "headline grey darken-2",
					attrs: {
						"primary-title": ""
					}
				}, [t._v("\n          Banco: " + t._s(Number(t.bank).toLocaleString()) + "€\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, [t.withdrawSelected || t.depositSelected ? t._e() : a("v-layout", [a("v-flex", {
					attrs: {
						"mt-3": "",
						xs6: ""
					}
				}, [a("v-btn", {
					attrs: {
						color: "warning",
						disabled: !t.bank > 0
					},
					on: {
						click: function(e) {
							t.withdrawSelected = !0
						}
					}
				}, [t._v("\n                Retirar\n              ")])], 1), a("v-flex", {
					attrs: {
						"mt-3": "",
						xs6: ""
					}
				}, [a("v-btn", {
					attrs: {
						color: "success",
						disabled: !t.cash > 0
					},
					on: {
						click: function(e) {
							t.depositSelected = !0
						}
					}
				}, [t._v("\n                Depositar\n              ")])], 1)], 1), t.depositSelected ? a("v-row", [a("v-col", {
					staticClass: "pr-4"
				}, [a("v-slider", {
					staticClass: "align-center",
					attrs: {
						max: t.cash,
						min: 0,
						"hide-details": ""
					},
					scopedSlots: t._u([{
						key: "append",
						fn: function() {
							return [a("v-text-field", {
								staticClass: "mt-0 pt-0",
								staticStyle: {
									width: "100px"
								},
								attrs: {
									"hide-details": "",
									"single-line": "",
									type: "number"
								},
								model: {
									value: t.depositAmount,
									callback: function(e) {
										t.depositAmount = e
									},
									expression: "depositAmount"
								}
							})]
						},
						proxy: !0
					}], null, !1, 1766220665),
					model: {
						value: t.depositAmount,
						callback: function(e) {
							t.depositAmount = e
						},
						expression: "depositAmount"
					}
				})], 1)], 1) : t._e(), t.withdrawSelected ? a("v-row", [a("v-col", {
					staticClass: "pr-4"
				}, [a("v-slider", {
					staticClass: "align-center",
					attrs: {
						max: t.bank,
						min: 0,
						"hide-details": ""
					},
					scopedSlots: t._u([{
						key: "append",
						fn: function() {
							return [a("v-text-field", {
								staticClass: "mt-0 pt-0",
								staticStyle: {
									width: "60px"
								},
								attrs: {
									"hide-details": "",
									"single-line": "",
									type: "number"
								},
								model: {
									value: t.withdrawAmount,
									callback: function(e) {
										t.withdrawAmount = e
									},
									expression: "withdrawAmount"
								}
							})]
						},
						proxy: !0
					}], null, !1, 882363484),
					model: {
						value: t.withdrawAmount,
						callback: function(e) {
							t.withdrawAmount = e
						},
						expression: "withdrawAmount"
					}
				})], 1)], 1) : t._e(), t.depositSelected || t.withdrawSelected ? a("v-flex", [a("v-btn", {
					attrs: {
						color: "success"
					},
					on: {
						click: function(e) {
							return t.confirmBankTransaction()
						}
					}
				}, [a("v-icon", {
					attrs: {
						dark: ""
					}
				}, [t._v("mdi-check-circle-outline")])], 1)], 1) : t._e()], 1), a("v-divider"), a("v-card-actions", [a("div", {
					staticClass: "flex-grow-1"
				}), a("v-btn", {
					attrs: {
						color: "primary",
						text: ""
					},
					on: {
						click: function(e) {
							return t.bankDialogReset()
						}
					}
				}, [t._v("\n            Cerrar\n          ")])], 1)], 1)], 1)], 1), a("div", {
					staticClass: "text-center"
				}, [a("v-dialog", {
					attrs: {
						persistent: "",
						width: "500"
					},
					model: {
						value: t.policeDialog,
						callback: function(e) {
							t.policeDialog = e
						},
						expression: "policeDialog"
					}
				}, [a("v-card", [a("v-card-title", {
					staticClass: "headline grey darken-2",
					attrs: {
						"primary-title": ""
					}
				}, [t._v("\n          ¡Policia!\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, [t._v("\n          " + t._s(t.policeDialogMessage) + "\n        ")]), t.bigPercentageCut > 0 ? a("v-card-text", {
					staticStyle: {
						"text-align": "center",
						color: "red"
					}
				}, [t._v("\n          -" + t._s(t.bigPercentageCut) + "%\n        ")]) : t._e(), t.smallPercentageCut > 0 ? a("v-card-text", {
					staticStyle: {
						"text-align": "center",
						color: "red"
					}
				}, [t._v("\n          -" + t._s(t.smallPercentageCut) + "%\n        ")]) : t._e(), a("v-layout", [a("v-flex", {
					attrs: {
						xs4: "",
						"offset-xs3": "",
						"mt-3": "",
						"pb-5": ""
					}
				}, [t.policeDisableClose ? a("v-btn", {
					attrs: {
						text: "",
						color: "warning"
					},
					on: {
						click: function(e) {
							return t.actionPoliceEvent(1)
						}
					}
				}, [t._v("Cooperar")]) : t._e()], 1), a("v-flex", {
					attrs: {
						xs4: "",
						"mt-3": "",
						"pb-5": ""
					}
				}, [t.policeDisableClose ? a("v-btn", {
					attrs: {
						text: "",
						color: "warning"
					},
					on: {
						click: function(e) {
							return t.actionPoliceEvent(2)
						}
					}
				}, [t._v("Correr")]) : t._e()], 1)], 1), a("v-divider"), a("v-card-actions", [a("div", {
					staticClass: "flex-grow-1"
				}), a("v-btn", {
					attrs: {
						disabled: t.policeDisableClose,
						color: "primary",
						text: ""
					},
					on: {
						click: function(e) {
							return t.closePoliceEvent()
						}
					}
				}, [t._v("\n            Cerrar\n          ")])], 1)], 1)], 1)], 1), t.policeDialog || t.eventDialog ? t._e() : a("div", {
					staticClass: "text-center"
				}, [a("v-dialog", {
					attrs: {
						width: "500"
					},
					model: {
						value: t.extraInventoryDialog,
						callback: function(e) {
							t.extraInventoryDialog = e
						},
						expression: "extraInventoryDialog"
					}
				}, [a("v-card", [a("v-card-title", {
					staticClass: "headline grey darken-2",
					attrs: {
						"primary-title": ""
					}
				}, [t._v("\n          Inventario extra\n        ")]), a("v-card-text", {
					staticStyle: {
						"text-align": "center"
					}
				}, [t._v("\n          ¿Te gustaria contratar a una puta extra (" + t._s(t.extraInventoryAmount) + " slots) por " + t._s(Number(t.extraInventoryPrice).toLocaleString()) + " euros?\n        ")]), a("v-layout", [a("v-flex", {
					attrs: {
						xs4: "",
						"offset-xs3": "",
						"mt-3": "",
						"pb-5": ""
					}
				}, [a("v-btn", {
					attrs: {
						text: "",
						color: "warning"
					},
					on: {
						click: function(e) {
							t.extraInventoryDialog = !1
						}
					}
				}, [t._v("No")])], 1), a("v-flex", {
					attrs: {
						xs4: "",
						"mt-3": "",
						"pb-5": ""
					}
				}, [a("v-btn", {
					attrs: {
						disabled: t.extraInventoryPrice > t.cash,
						text: "",
						color: "success"
					},
					on: {
						click: function(e) {
							return t.buyExtraInventory()
						}
					}
				}, [t._v("Si")])], 1)], 1), a("v-divider"), a("v-card-actions", [a("div", {
					staticClass: "flex-grow-1"
				}), a("v-btn", {
					attrs: {
						color: "primary",
						text: ""
					},
					on: {
						click: function(e) {
							t.extraInventoryDialog = !1
						}
					}
				}, [t._v("\n            Cerrar\n          ")])], 1)], 1)], 1)], 1), a("v-layout", {
					attrs: {
						wrap: ""
					}
				}, [a("v-flex", {
					attrs: {
						xs12: "",
						md4: "",
						"offset-md4": "",
						"mb-3": ""
					}
				}, [a("v-card", {
					staticStyle: {
						"text-align": "center"
					}
				}, [a("v-layout", {
					attrs: {
						"pt-2": ""
					}
				}, [a("v-flex", {
					attrs: {
						xs6: ""
					}
				}, [a("h2", {
					staticClass: "font-weight-bold mb-3"
				}, [t._v("\n               Día " + t._s(t.days) + "/30\n            ")])]), a("v-flex", {
					attrs: {
						xs6: ""
					}
				}, [a("h2", [t._v(t._s(t.currentLocation.name))])])], 1), a("v-layout", [a("v-flex", {
					attrs: {
						xs4: ""
					}
				}, [a("h5", [t._v("Deuda")]), t._v("\n             " + t._s(Number(t.debt).toLocaleString()) + "€\n           ")]), a("v-flex", {
					attrs: {
						xs4: ""
					}
				}, [a("h2", [t._v("En mano")]), t._v("\n              " + t._s(Number(t.cash).toLocaleString()) + "€\n           ")]), a("v-flex", {
					attrs: {
						xs4: ""
					}
				}, [a("h5", [t._v("Inventario")]), t._v("\n              " + t._s(t.inventoryProducts.length) + "/" + t._s(t.inventoryAmount) + "\n           ")])], 1), a("v-layout", [a("v-flex", {
					attrs: {
						xs4: "",
						"mt-3": "",
						"pb-5": ""
					}
				}, [a("v-btn", {
					attrs: {
						disabled: !t.debt > 0,
						text: "",
						color: "warning"
					},
					on: {
						click: function(e) {
							t.debtDialog = !0
						}
					}
				}, [t._v("Deuda")])], 1), a("v-flex", {
					attrs: {
						xs4: "",
						"mt-3": "",
						"pb-5": ""
					}
				}, [a("v-btn", {
					attrs: {
						color: "info"
					},
					on: {
						click: t.nextDay
					}
				}, [t._v(t._s(t.turnBtn))])], 1), a("v-flex", {
					attrs: {
						xs4: "",
						"mt-3": "",
						"pb-5": ""
					}
				}, [a("v-btn", {
					attrs: {
						text: "",
						color: "success"
					},
					on: {
						click: function(e) {
							t.bankDialog = !0
						}
					}
				}, [t._v("Banco")])], 1)], 1)], 1)], 1), a("v-flex", {
					attrs: {
						xs12: "",
						md4: "",
						"offset-md4": ""
					}
				}, [a("v-layout", {
					attrs: {
						row: ""
					}
				}, [a("product", {
					attrs: {
						products: t.products,
						inventoryamount: t.inventoryAmount,
						cash: t.cash,
						inventoryproducts: t.inventoryProducts
					},
					on: {
						updateCashBuy: t.updateCashBuy,
						updateCashSell: t.updateCashSell
					}
				})], 1)], 1)], 1)], 1)
			},
			w = [],
			k = (a("6762"), a("ac6a"), function() {
				var t = this,
					e = t.$createElement,
					a = t._self._c || e;
				return a("v-container", {
					staticStyle: {
						overflow: "auto",
						height: "350px"
					}
				}, [a("v-flex", {
					attrs: {
						"mx-3": ""
					}
				}, [a("v-expansion-panels", {
					attrs: {
						focusable: ""
					}
				}, t._l(t.products, (function(e, n) {
					return a("v-expansion-panel", {
						key: n,
						staticStyle: {
							"margin-bottom": "2%"
						}
					}, [a("v-expansion-panel-header", {
						on: {
							click: function(e) {
								return t.closeExpandableTabs()
							}
						},
						scopedSlots: t._u([{
							key: "default",
							fn: function(n) {
								n.open;
								return [a("v-row", {
									attrs: {
										"no-gutters": ""
									}
								}, [a("v-col", {
									attrs: {
										cols: "8"
									}
								}, [a("h3", [t._v(t._s(e.name))])]), a("v-col", {
									attrs: {
										cols: "4"
									}
								}, [a("h3", {
									class: {
										outrageous: e.outrageous,
										bottom: e.bottom
									}
								}, [t._v(t._s(Number(e.price).toLocaleString())+"€")])]), a("v-col", {
									staticStyle: {
										"padding-top": "3%",
										"padding-bottom": "3%",
										"padding-right": "2%"
									},
									attrs: {
										cols: "12"
									}
								}, [
									[a("v-divider")]
								], 2), a("v-col", {
									attrs: {
										cols: "8"
									}
								}, [a("h4", [t._v("Inventario : " + t._s(t.currentProdInv(e)) + " ")])]), a("v-col", {
									attrs: {
										cols: "4"
									}
								}, [a("h4", [t._v("Promedio: " + t._s(Number(t.avgPurchasePrice(e)).toLocaleString()) + "€ ")])])], 1)]
							}
						}], null, !0)
					}), a("v-expansion-panel-content", [a("v-layout", {
						staticStyle: {
							"text-align": "center"
						}
					}, [a("v-flex", {
						attrs: {
							xs6: "",
							"mt-4": ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "success",
							disabled: t.cash < e.price
						},
						on: {
							click: function(e) {
								t.buyOverlay = !t.buyOverlay
							}
						}
					}, [t._v("Comprar")])], 1), a("v-flex", {
						attrs: {
							xs6: "",
							"mt-4": ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "error",
							disabled: t.currentProdInv(e) < 1
						},
						on: {
							click: function(e) {
								t.sellOverlay = !t.sellOverlay
							}
						}
					}, [t._v("Vender")])], 1)], 1), a("v-overlay", {
						attrs: {
							absolute: t.absolute,
							opacity: t.opacity,
							value: t.buyOverlay
						}
					}, [a("v-layout", [a("v-flex", {
						attrs: {
							xs4: "",
							"mb-2": ""
						}
					}, [t._v("\n                                " + t._s(e.name) + "  € " + t._s(e.price) + "\n                            ")]), a("v-flex", {
						attrs: {
							xs2: "",
							"offset-xs6": "",
							"mb-2": ""
						}
					}, [a("v-btn", {
						attrs: {
							text: ""
						},
						on: {
							click: function(e) {
								t.buyOverlay = !t.buyOverlay, t.quantity = 0
							}
						}
					}, [t._v("X")])], 1)], 1), a("v-layout", {
						attrs: {
							"mb-2": ""
						}
					}, [a("v-flex", {
						attrs: {
							xs4: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "secondary"
						},
						on: {
							click: function(e) {
								return t.decreaseBuyQuantity()
							}
						}
					}, [t._v("-")])], 1), a("v-flex", {
						staticStyle: {
							"text-align": "center"
						},
						attrs: {
							xs5: ""
						}
					}, [a("span", [t._v(t._s(t.quantity))])]), a("v-flex", {
						attrs: {
							xs2: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "primary"
						},
						on: {
							click: function(a) {
								return t.increaseBuyQuantity(e)
							}
						}
					}, [t._v("+")])], 1)], 1), a("v-layout", [a("v-flex", {
						attrs: {
							xs7: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "success"
						},
						on: {
							click: function(a) {
								return t.halfBuyQuantity(e)
							}
						}
					}, [t._v("50%")])], 1), a("v-flex", {
						attrs: {
							xs6: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "success"
						},
						on: {
							click: function(a) {
								return t.buyProduct(e)
							}
						}
					}, [t._v("Comprar")])], 1), a("v-flex", {
						attrs: {
							xs3: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "success"
						},
						on: {
							click: function(a) {
								return t.maxBuyQuantity(e)
							}
						}
					}, [t._v("100%")])], 1)], 1)], 1), a("v-overlay", {
						attrs: {
							absolute: t.absolute,
							opacity: t.opacity,
							value: t.sellOverlay
						}
					}, [a("v-layout", [a("v-flex", {
						attrs: {
							xs4: "",
							"mb-2": ""
						}
					}, [t._v("\n                                " + t._s(e.name) + "  € " + t._s(Number(e.price).toLocaleString()) + "\n                            ")]), a("v-flex", {
						attrs: {
							xs2: "",
							"offset-xs6": "",
							"mb-2": ""
						}
					}, [a("v-btn", {
						attrs: {
							text: ""
						},
						on: {
							click: function(e) {
								t.sellOverlay = !t.sellOverlay, t.sellQuantity = 0
							}
						}
					}, [t._v("X")])], 1)], 1), a("v-layout", {
						attrs: {
							"mb-2": ""
						}
					}, [a("v-flex", {
						attrs: {
							xs4: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "secondary"
						},
						on: {
							click: function(e) {
								return t.decreaseSellQuantity()
							}
						}
					}, [t._v("-")])], 1), a("v-flex", {
						staticStyle: {
							"text-align": "center"
						},
						attrs: {
							xs5: ""
						}
					}, [a("span", [t._v(t._s(t.sellQuantity))])]), a("v-flex", {
						attrs: {
							xs2: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "primary"
						},
						on: {
							click: function(a) {
								return t.increaseSellQuantity(e)
							}
						}
					}, [t._v("+")])], 1)], 1), a("v-layout", [a("v-flex", {
						attrs: {
							xs7: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "success"
						},
						on: {
							click: function(a) {
								return t.halfSellQuantity(e)
							}
						}
					}, [t._v("50%")])], 1), a("v-flex", {
						attrs: {
							xs6: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "success"
						},
						on: {
							click: function(a) {
								return t.sellProduct(e)
							}
						}
					}, [t._v("Vender")])], 1), a("v-flex", {
						attrs: {
							xs3: ""
						}
					}, [a("v-btn", {
						attrs: {
							color: "success"
						},
						on: {
							click: function(a) {
								return t.maxSellQuantity(e)
							}
						}
					}, [t._v("Max")])], 1)], 1)], 1)], 1)], 1)
				})), 1)], 1)], 1)
			}),
			D = [],
			C = (a("c5f6"), a("2f62"));
		n["a"].use(C["a"]);
		var S = new C["a"].Store({
				state: {},
				mutations: {},
				getter: {},
				actions: {}
			}),
			P = {
				props: {
					products: Array,
					inventoryamount: Number,
					cash: Number,
					inventoryproducts: Array,
					disabled: Boolean
				},
				data: function() {
					return {
						absolute: !0,
						opacity: 1,
						buyOverlay: !1,
						sellOverlay: !1,
						quantity: 0,
						sellQuantity: 0
					}
				},
				computed: {
					inventoryLeft: function() {
						return this.inventoryamount - this.inventoryproducts.length
					}
				},
				methods: {
					currentProdInv: function(t) {
						for (var e = this, a = 0, n = 0; n < e.inventoryproducts.length; n++) e.inventoryproducts[n].id == t.id && a++;
						return a
					},
					avgPurchasePrice: function(t) {
						for (var e = this, a = 0, n = 0, o = 0; o < e.inventoryproducts.length; o++) e.inventoryproducts[o].id == t.id && (a++, n += e.inventoryproducts[o].price);
						return a > 0 && (n = Math.floor(n / a)), n
					},
					closeExpandableTabs: function() {
						var t = this;
						t.buyOverlay = !1, t.sellOverlay = !1, t.quantity = 0, t.sellQuantity = 0
					},
					decreaseBuyQuantity: function() {
						var t = this;
						0 != t.quantity && t.quantity--
					},
					increaseBuyQuantity: function(t) {
						var e = this;
						e.quantity < e.inventoryLeft && e.quantity < e.maxAllowedToBuy(t) && e.quantity++
					},
					maxBuyQuantity: function(t) {
						var e = this;
						while (e.quantity < e.inventoryLeft && e.quantity < e.maxAllowedToBuy(t)) e.quantity++
					},
					halfBuyQuantity: function(t) {
						var e = this;
						while (e.quantity < e.inventoryLeft && e.quantity < e.maxAllowedToBuy(t)) e.quantity++;
						e.quantity = Math.floor(e.quantity / 2)
					},
					maxAllowedToBuy: function(t) {
						var e = this;
						return Math.floor(e.cash / t.price)
					},
					buyProduct: function(t) {
						var e = this,
							a = e.quantity * t.price;
						if (a <= e.cash && e.quantity > 0) {
							for (var n = 0; n < e.quantity; n++) e.inventoryproducts.push(JSON.parse(JSON.stringify(t)));
							e.$emit("updateCashBuy", a)
						}
						e.buyOverlay = !1
					},
					decreaseSellQuantity: function() {
						var t = this;
						t.sellQuantity > 0 && t.sellQuantity--
					},
					increaseSellQuantity: function(t) {
						var e = this;
						e.sellQuantity < e.maxAllowedToSell(t) && e.sellQuantity++
					},
					maxSellQuantity: function(t) {
						var e = this;
						e.sellQuantity = e.maxAllowedToSell(t)
					},
					halfSellQuantity: function(t) {
						var e = this;
						e.sellQuantity = Math.floor(e.maxAllowedToSell(t) / 2)
					},
					maxAllowedToSell: function(t) {
						var e = this,
							a = 0;
						return e.inventoryproducts.forEach((function(e) {
							t.id == e.id && a++
						})), a
					},
					sellProduct: function(t) {
						for (var e = this, a = (e.sellQuantity, t.price, 0), n = 0; n < e.inventoryproducts.length; n++) e.inventoryproducts[n].id == t.id && a < e.sellQuantity && (a++, e.inventoryproducts.splice(n, 1), e.$emit("updateCashSell", t.price), n = -1);
						e.sellQuantity = 0, e.sellOverlay = !1
					}
				}
			},
			A = P,
			E = (a("e903"), a("8336")),
			O = a("62ad"),
			M = a("a523"),
			L = a("ce7e6"),
			V = a("cd55"),
			I = a("49e2"),
			B = a("c865"),
			Q = a("0393"),
			N = a("0e8f"),
			q = a("a722"),
			T = a("a797"),
			j = a("0fd9"),
			H = Object(c["a"])(A, k, D, !1, null, null, null),
			F = H.exports;
		u()(H, {
			VBtn: E["a"],
			VCol: O["a"],
			VContainer: M["a"],
			VDivider: L["a"],
			VExpansionPanel: V["a"],
			VExpansionPanelContent: I["a"],
			VExpansionPanelHeader: B["a"],
			VExpansionPanels: Q["a"],
			VFlex: N["a"],
			VLayout: q["a"],
			VOverlay: T["a"],
			VRow: j["a"]
		});
		var $ = {
				components: {
					Product: F
				},
				data: function() {
					return {
						dialog: !1,
						bankDialog: !1,
						withdrawSelected: !1,
						depositSelected: !1,
						withdrawAmount: 0,
						depositAmount: 0,
						locationDialog: !1,
						eventDialog: !1,
						debtDialog: !1,
						extraInventoryDialog: !1,
						extraInventoryAmount: 0,
						extraInventoryPrice: 0,
						policeDialog: !1,
						policeDisableClose: !0,
						policeDialogMessage: "La pasma se te acerca porque sospechan de tus actividades y quieren llevarte para interrogarte. ¿Quieres cooperar o correr?",
						bigPercentageCut: 0,
						smallPercentageCut: 0,
						turnBtn: "Darse el piro",
						days: 1,
						inventoryAmount: 100,
						payDebtAmount: 0,
						debt: 5500,
						cash: 2e3,
						bank: 0,
						products: [{
							id: 0,
							name: "Farlopa",
							price: 0,
							minprice: 17300,
							maxprice: 29300,
							outrageousmin: 6400,
							outrageousmax: 140000,
							outrageous: !1,
							outrageousEvent: {
								type: 1,
								message: "La pestañi ha hecho una gran redada de Farlopa. ¡Los precios están por las nubes!"
							}
						}, {
							id: 1,
							name: "Caballo",
							price: 0,
							minprice: 7e3,
							maxprice: 15e3,
							outrageousmin: 35e3,
							outrageousmax: 5e4,
							outrageous: !1,
							outrageousEvent: {
								type: 1,
								message: "¡Los yonquis están comprando caballo a precios absurdos!"
							}
						}, {
							id: 2,
							name: "Speed",
							price: 0,
							minprice: 150,
							maxprice: 300
						}, {
							id: 3,
							name: "María",
							price: 0,
							minprice: 400,
							maxprice: 750,
							bottomoutmin: 80,
							bottomoutmax: 250,
							outrageousmin: 1100,
							outrageousmax: 1900,
							bottom: !1,
							outrageous: !1,
							bottomEvent: {
								type: 0,
								message: "Ha habido una gran plantación de marihuana. Los precios son absurdos."
							},
							outrageousEvent: {
								type: 1,
								message: "¡Grandes cantidades de marihuana han sido incautadas! Los precios han subido."
							}
						}, {
							id: 4,
							name: "Opio",
							price: 0,
							minprice: 600,
							maxprice: 1200,
							outrageousmin: 2500,
							outrageousmax: 7e3,
							outrageous: !1,
							outrageousEvent: {
								type: 1,
								message: "¡Los yonquis están comprando opio a precios absurdos!"
							}
						}, {
							id: 5,
							name: "PCP",
							price: 0,
							minprice: 1200,
							maxprice: 2500
						}, {
							id: 6,
							name: "Cristal",
							price: 0,
							minprice: 400,
							maxprice: 900,
							outrageousmin: 5e3,
							outrageousmax: 8e3,
							outrageous: !1,
							outrageousEvent: {
								type: 1,
								message: "Los yonquis no se ponen lo suficiente y están comprando cristal a precios altos."
							}
						}, {
							id: 7,
							name: "Barbiturícos",
							price: 0,
							minprice: 10,
							maxprice: 60,
							bottomoutmin: 3,
							bottomoutmax: 6,
							bottom: !1,
							bottomEvent: {
								type: 0,
								message: "Alguien ha dado un palo en una farmacia y está vendiendo barbiturícos baratos."
							}
						}, {
							id: 8,
							name: "Chocolate",
							price: 0,
							minprice: 500,
							maxprice: 1250,
							bottomoutmin: 150,
							bottomoutmax: 200,
							outrageousmin: 1500,
							outrageousmax: 1800,
							bottom: !1,
							outrageous: !1,
							bottomEvent: {
								type: 0,
								message: "¡Se han bajado al moro!"
							},
							outrageousEvent: {
								type: 1,
								message: "¡Los yonquis están comprando chocolate a precio de oro!"
							}
						}, {
							id: 9,
							name: "Cactus",
							price: 0,
							minprice: 250,
							maxprice: 700,
							bottomoutmin: 100,
							bottomoutmax: 150,
							bottom: !1,
							bottomEvent: {
								type: 0,
								message: "Han llegado los peruanos, el precio del cactus está en mínimos."
							}
						}, {
							id: 10,
							name: "Pirulos",
							price: 0,
							minprice: 100,
							maxprice: 350
						}, {
							id: 11,
							name: "Tripis",
							price: 0,
							minprice: 1500,
							maxprice: 3800,
							bottomoutmin: 700,
							bottomoutmax: 1e3,
							outrageousmin: 5e3,
							outrageousmax: 8e3,
							bottom: !1,
							outrageous: !1,
							bottomEvent: {
								type: 0,
								message: "Nadie está comprando tripis, el precio está por los suelos."
							},
							outrageousEvent: {
								type: 1,
								message: "¡Los adolescentes están llendo a las discotecas!"
							}
						}],
						inventoryProducts: [],
						locations: [{
							id: 0,
							name: "Madrid",
							icon: "mdi-clock"
						}, {
							id: 1,
							name: "Galicia",
							icon: "mdi-clock"
						}, {
							id: 2,
							name: "Barcelona",
							icon: "mdi-clock"
						}, {
							id: 3,
							name: "Valencia",
							icon: "mdi-clock"
						}, {
							id: 4,
							name: "Cádiz",
							icon: "mdi-clock"
						}],
						currentLocation: {},
						currentEvents: []
					}
				},
				computed: {
					maxPayDebtAmountComputed: function() {
						var t = this;
						return t.cash < t.debt ? t.cash : t.debt
					}
				},
				methods: {
					newGame: function() {
						window.location.reload()
					},
					isLocationDisabled: function(t) {
						var e = this;
						return t.id == e.currentLocation.id
					},
					getPrices: function() {
						var t = this,
							e = null;
						if (t.days >= 2) {
							e = t.randomiseEvent();
						}
						t.currentEvents = [], t.products.forEach((function(a) {
							var n = a.minprice,
								o = a.maxprice;
							a.outrageous = !1, a.bottom = !1, null != e && e.forEach((function(e) {
								e.id == a.id && (n = e.min, o = e.max, e.bottom ? (a.bottom = e.bottom, t.currentEvents.push(a.bottomEvent)) : (a.outrageous = e.outrageous, t.currentEvents.push(a.outrageousEvent)))
							})), a.price = Math.floor(Math.random() * (o - n) + n)
						})), t.randomisePoliceEvent(), 0 !== t.currentEvents.length && (t.eventDialog = !0), t.randomiseExtraInventory()
					},					
					randomiseEvent: function() {
						var t = this,
							e = Math.random(),
							a = [],
							n = [];
						if (t.days > 10 && e < .12) {
							for (var o = 0; o < 2; o++) {
								var r = Math.floor(Math.random() * (t.products.length - 0) + 0);
								n.includes(r) || !t.products[r].bottomEvent && !t.products[r].outrageousEvent ? o-- : (n.push(r), a.push(t.randomiseEventProducts(r)))
							}
							return a
						}
						if (e < .45) {
							for (var i = 0; i < 1; i++) {
								var s = Math.floor(Math.random() * (t.products.length - 0) + 0);
								t.products[s].bottomEvent || t.products[s].outrageousEvent ? a.push(t.randomiseEventProducts(s)) : i--
							}
							return a
						}
						return null
					},
					randomiseEventProducts: function(t) {
						var e = this;
						return !e.products[t].bottomEvent && e.products[t].outrageousEvent || Math.random() < .5 && e.products[t].outrageousEvent ? {
							id: t,
							min: e.products[t].outrageousmin,
							max: e.products[t].outrageousmax,
							outrageous: !0,
							bottom: !1
						} : {
							id: t,
							min: e.products[t].bottomoutmin,
							max: e.products[t].bottomoutmax,
							outrageous: !1,
							bottom: !0
						}
					},
					randomisePoliceEvent: function() {
						var t = this,
							e = Math.random();
						t.days > 1 && t.days < 9 && e < .03 ? t.policeDialog = !0 : t.days > 9 && t.days < 31 && e < .17 && (t.policeDialog = !0)
					},
					actionPoliceEvent: function(t) {
						var e = this;
						switch (t) {
							case 1:
								var a = Math.random() * (.7 - .6) + .6,
									n = Math.random() * (.15 - .05) + .05;
								Math.random() < .12 ? (e.bigPercentageCut = (100 * a).toFixed(0), e.policeDialogMessage = "Fuiste a cooperar con \n            la pasma y te tienen bien pillado. Un madero corrupto está intentando hacer \n           la vista gorda por un ".concat(e.bigPercentageCut, "% de la pasta que llevas encima."), e.cash = Math.floor(e.cash - e.cash * a.toFixed(2))) : (e.smallPercentageCut = (100 * n).toFixed(0), e.policeDialogMessage = "La policía encuentra algo en ti que \n            te podría mandar al talego por años. Un madero corrupto te ofrece destruir las evidencias por un \n            ".concat(e.smallPercentageCut, "% de la pasta que llevas encima."), e.cash = Math.floor(e.cash - e.cash * n.toFixed(2))), e.policeDisableClose = !1;
								break;
							case 2:
								Math.random() < .25 ? (e.policeDialogMessage = "Intentaste correr, pero te atraparon. La pestañi confiscó toda tu droga y la mitad de tu pasta", e.inventoryProducts = [], e.cash = Math.floor(e.cash / 2)) : e.policeDialogMessage = "Te espaste de la pasma", e.policeDisableClose = !1;
								break
						}
					},
					closePoliceEvent: function() {
						var t = this;
						t.policeDialog = !1, t.bigPercentageCut = 0, t.smallPercentageCut = 0, t.policeDisableClose = !0, t.policeDialogMessage = "La pestañi se te acerca porque sospecha de tí y quiere llevarte para interrogarte. ¿Quieres cooperar o huir?"
					},
					updateCashBuy: function(t) {
						var e = this;
						e.cash = e.cash - t
					},
					updateCashSell: function(t) {
						var e = this;
						e.cash += t
					},
					nextDay: function() {
						var t = this;
						t.days < 30 ? t.locationDialog = !0 : t.dialog = !0
					},
					changeLocation: function(t) {
						var e = this;
						e.currentLocation = t, e.days++, 30 == e.days ? e.turnBtn = "Terminar" : e.turnBtn = "Darse el piro", e.debt > 0 && e.debtIncrease(), e.getPrices(), e.locationDialog = !1
					},
					debtIncrease: function() {
						var t = this;
						t.debt = Math.floor(1.1 * t.debt)
					},
					payDebt: function() {
						var t = this;
						t.debt = t.debt - t.payDebtAmount, t.cash = t.cash - t.payDebtAmount, t.debtDialog = !1
					},
					confirmBankTransaction: function() {
						var t = this;
						t.withdrawSelected && t.withdrawAmount > 0 ? (t.cash += t.withdrawAmount, t.bank -= t.withdrawAmount) : t.depositSelected && t.depositAmount > 0 && (t.cash -= t.depositAmount, t.bank += t.depositAmount), t.bankDialogReset()
					},
					bankDialogReset: function() {
						var t = this;
						t.withdrawAmount = 0, t.depositAmount = 0, t.withdrawSelected = !1, t.depositSelected = !1, t.bankDialog = !1
					},
					randomiseExtraInventory: function() {
						var t = this;
						if (t.extraInventoryAmount = 0, t.extraInventoryPrice = Math.floor(450 * Math.random() + 250), t.days > 6 && Math.random() < .13) {
							var e = Math.floor(22 * Math.random() + 8);
							t.extraInventoryAmount = e, t.extraInventoryDialog = !0
						}
					},
					buyExtraInventory: function() {
						var t = this;
						t.inventoryAmount += t.extraInventoryAmount, t.cash -= t.extraInventoryPrice, t.extraInventoryDialog = !1
					}
				},
				created: function() {
					var t = this;
					t.getPrices(), t.currentLocation = t.locations[0]
				}
			},
			G = $,
			R = (a("ce3f"), a("b0af")),
			J = a("99d9"),
			Y = a("169a"),
			W = a("132d"),
			X = a("8860"),
			z = a("da13"),
			K = a("5d23"),
			U = a("1baa"),
			Z = a("34c3"),
			tt = a("ba0d"),
			et = a("e0c7"),
			at = a("8654"),
			nt = Object(c["a"])(G, _, w, !1, null, "1e1fdf87", null),
			ot = nt.exports;
		u()(nt, {
			VBtn: E["a"],
			VCard: R["a"],
			VCardActions: J["a"],
			VCardText: J["b"],
			VCardTitle: J["c"],
			VCol: O["a"],
			VContainer: M["a"],
			VDialog: Y["a"],
			VDivider: L["a"],
			VFlex: N["a"],
			VIcon: W["a"],
			VLayout: q["a"],
			VList: X["a"],
			VListItem: z["a"],
			VListItemContent: K["a"],
			VListItemGroup: U["a"],
			VListItemIcon: Z["a"],
			VListItemTitle: K["b"],
			VRow: j["a"],
			VSlider: tt["a"],
			VSubheader: et["a"],
			VTextField: at["a"]
		});
		var rt = {
				components: {
					Game: ot
				}
			},
			it = rt,
			st = Object(c["a"])(it, g, h, !1, null, null, null),
			ct = st.exports;
		n["a"].use(x["a"]);
		var lt = new x["a"]({
				routes: [{
					path: "/",
					name: "home",
					component: ct
				}]
			}),
			ut = a("f309");
		n["a"].use(ut["a"]);
		var dt = new ut["a"]({
			icons: {
				iconfont: "mdi"
			},
			theme: {
				dark: !0
			}
		});
		n["a"].config.productionTip = !1, new n["a"]({
			router: lt,
			store: S,
			vuetify: dt,
			render: function(t) {
				return t(b)
			}
		}).$mount("#app")
	},
	ce3f: function(t, e, a) {
		"use strict";
		var n = a("4795"),
			o = a.n(n);
		o.a
	},
	d704: function(t, e, a) {},
	e903: function(t, e, a) {
		"use strict";
		var n = a("d704"),
			o = a.n(n);
		o.a
	}
});