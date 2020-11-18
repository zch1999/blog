(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{468:function(t,a,e){"use strict";e.r(a);var i=e(42),v=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),e("h2",{attrs:{id:"浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[t._v("#")]),t._v(" 浏览器缓存")]),t._v(" "),e("p",[t._v("就是私人缓存，也就是单个用户的浏览器http缓存")]),t._v(" "),e("h2",{attrs:{id:"代理-公共-缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代理-公共-缓存"}},[t._v("#")]),t._v(" 代理(公共)缓存")]),t._v(" "),e("p",[t._v("一般指公司或组织架设一个web代理来作为网络基础的一部分，以达到资源复用的效果")]),t._v(" "),e("h2",{attrs:{id:"对于一个get请求的缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对于一个get请求的缓存"}},[t._v("#")]),t._v(" 对于一个get请求的缓存")]),t._v(" "),e("ol",[e("li",[t._v("状态码200，代表http请求成功，并且得到了相应的资源")]),t._v(" "),e("li",[t._v("206，请求部分成功，也就是说获取的资源并不完整，只是部分")]),t._v(" "),e("li",[t._v("301，永久重定向，一般来说就是ip对应的域名已经改变，并设置了重定向，请求就会请求新域名，并被浏览器记住，")]),t._v(" "),e("li",[t._v("302，临时重定向，也就是临时的重定向，不会被浏览器记住")]),t._v(" "),e("li",[t._v("404，获取页面失败，可能是服务器上并没有该资源")]),t._v(" "),e("li",[t._v("获取到一个cache键名相应")])]),t._v(" "),e("h2",{attrs:{id:"缓存控制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存控制"}},[t._v("#")]),t._v(" 缓存控制")]),t._v(" "),e("ul",[e("li",[t._v("没有缓存\nCache-Control: no-store")]),t._v(" "),e("li",[t._v("缓存但需要验证\nCache-Control: no-cache, 这个需要验证缓存是否过期，没有过期就返回304，及使用缓存资源。(这个一般是立即过期的，所以每次都要验证)")]),t._v(" "),e("li",[t._v("私有和公共缓存\nCache-Control: private， 私有缓存，既不能被代理所缓存，只能用户私人浏览器缓存\nCache-Control: public， 既可以缓存到公共代理平台上")]),t._v(" "),e("li",[t._v("Cache-Control： max-age  s-maxage(和max-age差别不大，针对代理服务器的时间)\n表示过期时间，它代表的是一个相对时间，它会根据客户端第一次请求的时间点再加上max-age的时间来计算过期时间")])]),t._v(" "),e("h2",{attrs:{id:"强缓存-强缓存不会请求服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存-强缓存不会请求服务器"}},[t._v("#")]),t._v(" 强缓存(强缓存不会请求服务器)")]),t._v(" "),e("ol",[e("li",[t._v("在http1.0时，可以设置expires来设置缓存，这是一个由服务器返回的时间，这代表着缓存资源的有效期，既它是一个"),e("strong",[t._v("具体的时间点")]),t._v("gmt绝对时间，不过他也有个问题，就是这是一个服务器时间，当客户端时间和服务器时间不一致(例如用户可以手动修改客户端时间)时可能会影响缓存命中的结果")]),t._v(" "),e("li",[t._v("所以在http1.1后，就有Cache-Control： max-age来表示过期时间，它代表的是一个"),e("strong",[t._v("相对时间，它会根据客户端第一次请求的时间点再加上max-age的时间来计算过期时间")]),t._v("，这就解决了expires的问题，多以如果当Cache-Control和expires都设置了时，Cache-Control的优先级是更高的。")])]),t._v(" "),e("h2",{attrs:{id:"协商缓存-请求服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存-请求服务器"}},[t._v("#")]),t._v(" 协商缓存(请求服务器)")]),t._v(" "),e("p",[t._v("强缓存未命中，http请求向服务器发出，进入协商缓存阶段。如果命中协商缓存，服务器返回状态码304，浏览器使用缓存的资源，未命中则返回200，y以及相应的资源。"),e("br"),t._v("\n协商缓存由客户端发送带头信息Last-Modified或Etag的请求到服务端来验证。")]),t._v(" "),e("ul",[e("li",[t._v("Last-Modified(最后修改时间) 和 If-Modified-Since\n浏览器在第一次请求后返回一个Last-Modified,当客户端再次请求的时候，请求投就会带上If-Modified-Since，这个属性的值就是服务器上次返回的Last-Modified的值，如果"),e("strong",[t._v("If-Modified-Since < Last-Modified,既代表资源改变了，服务器返回新的资源，200转态码")]),t._v("。否则返回304，并直接使用缓存。**问题：**如果在本地打开缓存文件，就会造成 Last-Modified 被修改，所以会造成误差")]),t._v(" "),e("li",[t._v("Eatg 和 If-None-Match\nEtag是服务端返回的资源的唯一标识符，当资源发生改变后，Etag也会发生改变\n服务器第一次返回一个Etag值，如果客户端再次请求，则在请求头中加个If-None-Match，这个就是上次返回的Etag，发送请求后，服务器判断Etag和If-None-Match是否相等，相等则使用缓存，返回304,否则重新发送资源。")])]),t._v(" "),e("h3",{attrs:{id:"etag优先级比last-modified高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag优先级比last-modified高"}},[t._v("#")]),t._v(" Etag优先级比Last-Modified高")]),t._v(" "),e("ul",[e("li",[t._v("一些文件可能会周期性更新，但是文件没有发生改变，这时候用Etag更为合适")]),t._v(" "),e("li",[t._v("If-Modified-Since的检查粒度是秒级的，但是有的文件更新在s级一下，If-Modified-Since检查不到")]),t._v(" "),e("li",[t._v("本地打开缓存文件，If-Modified-Since会变，但实际可能文件并没有发生变化。")])]),t._v(" "),e("h2",{attrs:{id:"对于长时间不更新的文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对于长时间不更新的文件"}},[t._v("#")]),t._v(" 对于长时间不更新的文件")]),t._v(" "),e("p",[t._v("对于长时间不更新的文件，web采用在URL后加一个version版本号的策略，这样它就是一个新的独立的资源，更新时只要该改变版本号即可，所有引用这个资源的地方都需要更新链接。web开发者们通常会采用自动化构建工具在实际工作中完成这些琐碎的工作。当低频更新的资源（js/css）变动了，只用在高频变动的资源文件（html）里做入口的改动。")]),t._v(" "),e("h2",{attrs:{id:"如何选择合适的缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何选择合适的缓存"}},[t._v("#")]),t._v(" 如何选择合适的缓存")]),t._v(" "),e("p",[t._v("大致的顺序:")]),t._v(" "),e("ol",[e("li",[t._v("Cache-Control —— 请求服务器之前")]),t._v(" "),e("li",[t._v("Expires —— 请求服务器之前")]),t._v(" "),e("li",[t._v("If-None-Match (Etag) —— 请求服务器")]),t._v(" "),e("li",[t._v("If-Modified-Since (Last-Modified) —— 请求服务器")]),t._v(" "),e("li",[t._v("协商缓存需要配合强缓存使用，如果不启用强缓存的话，协商缓存根本没有意义")])]),t._v(" "),e("p",[t._v("大部分web服务器都默认开启协商缓存，而且是同时启用【Last-Modified，If-Modified-Since】和【ETag、If-None-Match】")]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("但是下面的场景需要注意："),e("br")])]),t._v(" "),e("ul",[e("li",[t._v("分布式系统里多台机器间文件的Last-Modified必须保持一致，以免负载均衡到不同机器导致比对失败；")]),t._v(" "),e("li",[t._v("分布式系统尽量关闭掉ETag(每台机器生成的ETag都会不一样）；")])])])}),[],!1,null,null,null);a.default=v.exports}}]);