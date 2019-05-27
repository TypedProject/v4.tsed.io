(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{666:function(t,r,s){"use strict";s.r(r);var e=s(0),n=Object(e.a)({},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"serversettings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serversettings","aria-hidden":"true"}},[t._v("#")]),t._v(" ServerSettings "),s("Badge",{attrs:{text:"Decorator",type:"decorator"}})],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("div",{pre:!0},[t._m(4),t._v(" "),s("p",[t._v("The default configuration is as follow:")]),t._v(" "),t._m(5),s("p",[t._v("You can customize your configuration as follow:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),s("ul",[t._m(8),t._v(" "),t._m(9),t._v(" "),s("li",[s("code",[t._v("port")]),t._v(" <string | number>: Port number for the "),s("a",{pre:!0,attrs:{href:"https://nodejs.org/api/http.html#http_class_http_server",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP.Server"),s("OutboundLink",{pre:!0})],1),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("httpsPort")]),t._v(" <string | number>: Port number for the "),s("a",{pre:!0,attrs:{href:"https://nodejs.org/api/https.html#https_class_https_server",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTPs.Server"),s("OutboundLink",{pre:!0})],1),t._v(".")]),t._v(" "),s("li",[s("code",[t._v("httpsOptions")]),t._v(" <"),s("a",{pre:!0,attrs:{href:"https://nodejs.org/api/tls.html#tls_tls_createserver_options_secureconnectionlistener",target:"_blank",rel:"noopener noreferrer"}},[t._v("Https.ServerOptions"),s("OutboundLink",{pre:!0})],1),t._v(")>:\n"),s("ul",[s("li",[s("code",[t._v("key")]),t._v(" <string> | <string[]> | "),s("a",{pre:!0,attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer>"),s("OutboundLink",{pre:!0})],1),t._v(" | <Object[]>: The private key of the server in PEM format. To support multiple keys using different algorithms an array can be provided either as a plain array of key strings or an array of objects in the format "),s("code",[t._v("{pem: key, passphrase: passphrase}")]),t._v(". This option is required for ciphers that make use of private keys.")]),t._v(" "),t._m(10),t._v(" "),s("li",[s("code",[t._v("cert")]),t._v(" <string> | <string[]> | "),s("a",{pre:!0,attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer>"),s("OutboundLink",{pre:!0})],1),t._v(" | "),s("a",{pre:!0,attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer[]>"),s("OutboundLink",{pre:!0})],1),t._v(": A string, Buffer, array of strings, or array of Buffers containing the certificate key of the server in PEM format. (Required)")]),t._v(" "),s("li",[s("code",[t._v("ca")]),t._v(" <string> | <string[]> | "),s("a",{pre:!0,attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer>"),s("OutboundLink",{pre:!0})],1),t._v(" | "),s("a",{pre:!0,attrs:{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",target:"_blank",rel:"noopener noreferrer"}},[t._v("<Buffer[]>"),s("OutboundLink",{pre:!0})],1),t._v(': A string, Buffer, array of strings, or array of Buffers of trusted certificates in PEM format. If this is omitted several well known "root" CAs (like VeriSign) will be used. These are used to authorize connections.')])])]),t._v(" "),s("li",[s("code",[t._v("uploadDir")]),t._v(" <string&gt: The temporary directory to upload the documents. See more on "),s("router-link",{pre:!0,attrs:{to:"/tutorials/multer.html"}},[t._v("Upload file with Multer")]),t._v(".")],1),t._v(" "),s("li",[s("code",[t._v("mount")]),t._v(" <"),s("router-link",{pre:!0,attrs:{to:"/api/common/config/interfaces/IServerMountDirectories.html"}},[t._v("IServerMountDirectories")]),t._v(">: Mount all controllers under a directories to an endpoint.")],1),t._v(" "),s("li",[s("code",[t._v("componentsScan")]),t._v(" <string[]>: List of directories to scan "),s("router-link",{pre:!0,attrs:{to:"/docs/services.html"}},[t._v("Services")]),t._v(", "),s("router-link",{pre:!0,attrs:{to:"/docs/middlewares.html"}},[t._v("Middlewares")]),t._v(" or "),s("router-link",{pre:!0,attrs:{to:"/docs/converters.html"}},[t._v("Converters")]),t._v(".")],1),t._v(" "),s("li",[s("code",[t._v("serveStatic")]),t._v(" <"),s("router-link",{pre:!0,attrs:{to:"/api/common/config/interfaces/IServerMountDirectories.html"}},[t._v("IServerMountDirectories")]),t._v(">: Objet to mount all directories under to his endpoints. See more on "),s("router-link",{pre:!0,attrs:{to:"/tutorials/serve-static-files.html"}},[t._v("Serve Static")]),t._v(".")],1),t._v(" "),s("li",[s("code",[t._v("routers")]),t._v(" <object>: Global configuration for the Express.Router. See express "),s("a",{pre:!0,attrs:{href:"http://expressjs.com/en/api.html#express.router",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),s("OutboundLink",{pre:!0})],1),t._v(".")]),t._v(" "),t._m(11)])])])},[function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("section",{staticClass:"symbol-info"},[s("table",{staticClass:"is-full-width"},[s("tbody",[s("tr",[s("th",[t._v("Module")]),s("td",[s("div",{staticClass:"lang-typescript"},[s("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" { ServerSettings } "),s("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"token string"},[t._v('"@tsed/common"')])])])]),s("tr",[s("th",[t._v("Source")]),s("td",[s("a",{attrs:{href:"https://github.com/TypedProject/ts-express-decorators/blob/v4.34.4/packages/common/src/server/decorators/serverSettings.ts#L0-L0"}},[t._v("/packages/common/src/server/decorators/serverSettings.ts")])])])])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("pre",[s("code",{staticClass:"typescript-lang "},[t._v("function "),s("span",{staticClass:"token function"},[t._v("ServerSettings")]),s("span",{staticClass:"token punctuation"},[t._v("(")]),t._v("settings"),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" "),s("a",{attrs:{href:"/api/common/server/decorators/IServerSettingsOptions.html"}},[s("span",{staticClass:"token"},[t._v("IServerSettingsOptions")])]),s("span",{staticClass:"token punctuation"},[t._v(")")]),s("span",{staticClass:"token punctuation"},[t._v(":")]),t._v(" Function"),s("span",{staticClass:"token punctuation"},[t._v(";")])])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this.$createElement,r=this._self._c||t;return r("p",[r("code",[this._v("@ServerSettings")]),this._v(" let you to configure quickly your server via decorator. This decorator take your configuration and merge it with the default server configuration.")])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{pre:!0,attrs:{class:"language-json line-numbers-mode"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rootDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path/to/root/project"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpsPort"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uploadDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${rootDir}/uploads"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"/rest"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${rootDir}/controllers/**/*.js"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"componentsScan"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${rootDir}/middlewares/**/*.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${rootDir}/services/**/*.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${rootDir}/converters/**/*.js"')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("10")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("11")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("12")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("13")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("14")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("15")]),s("br")])])},function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{pre:!0,attrs:{class:"language-typescript line-numbers-mode"}},[s("pre",{pre:!0,attrs:{"v-pre":"",class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ServerLoader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ServerSettings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsed/common"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ServerSettings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rootDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/rest"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${rootDir}/controllers/current/**/*.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/rest/v1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${rootDir}/controllers/v1/users/*.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"${rootDir}/controllers/v1/groups/*.js"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerLoader")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Initialize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Promise"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nServer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Initialize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{pre:!0,attrs:{class:"line-numbers-wrapper"}},[s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("1")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("2")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("3")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("4")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("5")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("6")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("7")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("8")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("9")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("10")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("11")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("12")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("13")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("14")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("15")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("16")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("17")]),s("br"),s("span",{pre:!0,attrs:{class:"line-number"}},[t._v("18")]),s("br")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h3",{pre:!0,attrs:{id:"options"}},[r("a",{pre:!0,attrs:{class:"header-anchor",href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",[r("code",[this._v("rootDir")]),this._v(" <string>: The root directory where you build run project.")])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",[r("code",[this._v("env")]),this._v(" <Env>: The environment profile. By default the environment profile is equals to "),r("code",[this._v("NODE_ENV")]),this._v(".")])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",[r("code",[this._v("passphrase")]),this._v(" <string> A string containing the passphrase for the private key or pfx.")])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",[r("code",[this._v("validationModelStrict")]),this._v(" <boolean>: Use a strict validation when a model is used by the converter. When a property is unknow, it throw a BadRequest. By default true.")])}],!1,null,null,null);n.options.__file="ServerSettings.md";r.default=n.exports}}]);