(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{259:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("Basically, Service and Factory are a specific configuration of a Provider.\nIt's possible to register a class as provider, factory or service manually with these functions:")]),s._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/api/di/registries/registerProvider.html"}},[s._v("registerProvider()")])],1),s._v(" "),a("li",[a("router-link",{attrs:{to:"/api/di/registries/registerService.html"}},[s._v("registerService()")])],1),s._v(" "),a("li",[a("router-link",{attrs:{to:"/api/di/registries/registerFactory.html"}},[s._v("registerFactory()")])],1)]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("This example show you how you can add a service already constructed like a npm module.")]),s._v(" "),s._m(2),s._m(3),s._v(" "),a("p",[s._v("RegisterProvider can be used to change the configuration of a provider:")]),s._v(" "),s._m(4)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#provider","aria-hidden":"true"}},[this._v("#")]),this._v(" Provider")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"register-a-provider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#register-a-provider","aria-hidden":"true"}},[this._v("#")]),this._v(" register a provider")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MyFooFactory.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("registerProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("provide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MyClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MyClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"customTypeProvider"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("Note: type field is optional")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// MyFooFactory.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("registerProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@tsed/common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyFakeClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("registerProvider")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("provide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MyClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" useClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MyFakeClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])}],!1,null,null,null);n.options.__file="provider.md";t.default=n.exports}}]);