(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{524:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"pattern"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pattern","aria-hidden":"true"}},[t._v("#")]),t._v(" Pattern "),e("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"symbol-info"},[e("table",{staticClass:"is-full-width"},[e("tbody",[e("tr",[e("th",[t._v("Module")]),e("td",[e("div",{staticClass:"lang-typescript"},[e("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { Pattern } "),e("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),e("tr",[e("th",[t._v("Source")]),e("td",[e("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v4.34.4/packages/common/src/jsonschema/decorators/pattern.ts#L0-L0"}},[t._v("/packages/common/src/jsonschema/decorators/pattern.ts")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"typescript-lang "},[t._v("function "),e("span",{staticClass:"token function"},[t._v("Pattern")]),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("pattern"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("string")]),t._v(" | RegExp"),e("span",{staticClass:"token punctuation"},[t._v(")")]),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("...parameters"),e("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("any")]),e("span",{staticClass:"token punctuation"},[t._v("[")]),e("span",{staticClass:"token punctuation"},[t._v("]")]),e("span",{staticClass:"token punctuation"},[t._v(")")]),t._v(" =>"),e("span",{staticClass:"token punctuation"},[t._v(";")]),t._v(" "),e("span",{staticClass:"token keyword"},[t._v("any")]),e("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{pre:!0},[e("p",[t._v("The pattern and Pattern Properties keywords use regular expressions to express constraints.\nThe regular expression syntax used is from JavaScript (ECMA 262, specifically). However, that complete syntax is not widely supported, therefore it is recommended that you stick to the subset of that syntax described below.")]),t._v(" "),e("p",[t._v("A single unicode character (other than the special characters below) matches itself.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("^")]),t._v(": Matches only at the beginning of the string.")]),t._v(" "),e("li",[e("code",[t._v("$")]),t._v(": Matches only at the end of the string.")]),t._v(" "),e("li",[e("code",[t._v("(...)")]),t._v(": Group a series of regular expressions into a single regular expression.")]),t._v(" "),e("li",[e("code",[t._v("|")]),t._v(": Matches either the regular expression preceding or following the | symbol.")]),t._v(" "),e("li",[e("code",[t._v("[abc]")]),t._v(": Matches any of the characters inside the square brackets.")]),t._v(" "),e("li",[e("code",[t._v("[a-z]")]),t._v(": Matches the range of characters.")]),t._v(" "),e("li",[e("code",[t._v("[^abc]")]),t._v(": Matches any character not listed.")]),t._v(" "),e("li",[e("code",[t._v("[^a-z]")]),t._v(": Matches any character outside of the range.")]),t._v(" "),e("li",[e("code",[t._v("+")]),t._v(": Matches one or more repetitions of the preceding regular expression.")]),t._v(" "),e("li",[e("code",[t._v("*")]),t._v(": Matches zero or more repetitions of the preceding regular expression.")]),t._v(" "),e("li",[e("code",[t._v("?")]),t._v(": Matches zero or one repetitions of the preceding regular expression.")]),t._v(" "),e("li",[e("code",[t._v("+?")]),t._v(", *?"),e("code",[t._v(", ??")]),t._v(": The "),e("code",[t._v("*")]),t._v(", "),e("code",[t._v("+")]),t._v(", and "),e("code",[t._v("?")]),t._v(" qualifiers are all greedy; they match as much text as possible. Sometimes this behavior isn’t desired and you want to match as few characters as possible.")]),t._v(" "),e("li",[e("code",[t._v("{x}")]),t._v(": Match exactly x occurrences of the preceding regular expression.")]),t._v(" "),e("li",[e("code",[t._v("{x,y}")]),t._v(": Match at least x and at most y occurrences of the preceding regular expression.")]),t._v(" "),e("li",[e("code",[t._v("{x,}")]),t._v(": Match x occurrences or more of the preceding regular expression.")]),t._v(" "),e("li",[e("code",[t._v("{x}?")]),t._v(", {x,y}?, {x,}?`: Lazy versions of the above expressions.")])]),t._v(" "),e("h2",{pre:!0,attrs:{id:"example"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),e("br")])]),e("h3",{pre:!0,attrs:{id:"with-primitive-type"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#with-primitive-type","aria-hidden":"true"}},[t._v("#")]),t._v(" With primitive type")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),e("br")])]),e("div",{pre:!0,attrs:{class:"language-json line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"property"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pattern"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),e("br")])]),e("h3",{pre:!0,attrs:{id:"with-array-type"}},[e("a",{pre:!0,attrs:{class:"header-anchor",href:"#with-array-type","aria-hidden":"true"}},[t._v("#")]),t._v(" With array type")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Model")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("PropertyType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Pattern")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   property"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),e("br")])]),e("p",[t._v("Will produce:")]),t._v(" "),e("div",{pre:!0,attrs:{class:"language-json line-numbers-mode"}},[e("pre",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"properties"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"property"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pattern"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^(\\\\([0-9]{3}\\\\))?[0-9]{3}-[0-9]{4}$"')]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("10")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("11")]),e("br"),e("span",{pre:!0,attrs:{class:"line-number"}},[t._v("12")]),e("br")])])])}],!1,null,null,null);r.options.__file="Pattern.md";s.default=r.exports}}]);