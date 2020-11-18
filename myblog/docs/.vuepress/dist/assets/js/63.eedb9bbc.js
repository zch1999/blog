(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{432:function(t,e,i){"use strict";i.r(e);var a=i(42),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"css之position"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#css之position"}},[t._v("#")]),t._v(" css之position")]),t._v(" "),i("h2",{attrs:{id:"取值-默认值为static"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#取值-默认值为static"}},[t._v("#")]),t._v(" 取值(默认值为static)")]),t._v(" "),i("ul",[i("li",[t._v("static\n该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。")]),t._v(" "),i("li",[t._v("relative\n该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。")]),t._v(" "),i("li",[t._v("absolute\n元素会被移出正常文档流，并不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。")]),t._v(" "),i("li",[t._v("fixed\n元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。")]),t._v(" "),i("li",[t._v("sticky\n元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括table-related元素，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。\n该值总是创建一个新的层叠上下文（stacking context）。注意，一个sticky元素会“固定”在离它最近的一个拥有“滚动机制”的祖先上（当该祖先的overflow 是 hidden, scroll, auto, 或 overlay时），即便这个祖先不是真的滚动祖先。这个阻止了所有“sticky”行为（详情见Github issue on W3C CSSWG）")])]),t._v(" "),i("h2",{attrs:{id:"定位类型"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#定位类型"}},[t._v("#")]),t._v(" 定位类型")]),t._v(" "),i("ul",[i("li",[t._v("定位元素（positioned element）是其计算后位置属性为 relative, absolute, fixed 或 sticky 的一个元素（换句话说，除static以外的任何东西）。")]),t._v(" "),i("li",[t._v("相对定位元素（relatively positioned element）是计算后位置属性为 relative 的元素。")]),t._v(" "),i("li",[t._v("绝对定位元素（absolutely positioned element）是计算后位置属性为 absolute 或 fixed 的元素。")]),t._v(" "),i("li",[t._v("粘性定位元素（stickily positioned element）是计算后位置属性为 sticky 的元素。")])]),t._v(" "),i("h3",{attrs:{id:"相对定位relative"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#相对定位relative"}},[t._v("#")]),t._v(" 相对定位relative")]),t._v(" "),i("p",[t._v("不会导致元素脱离文档流，只是让元素在原来的位置偏移"),i("br"),t._v("\n当元素被设置为relative时，可以通过四个css属性设置位置：")]),t._v(" "),i("ul",[i("li",[t._v("left")]),t._v(" "),i("li",[t._v("right")]),t._v(" "),i("li",[t._v("top")]),t._v(" "),i("li",[t._v("bottom\n相对定位下，盒子不会对其他盒子产生影响")])]),t._v(" "),i("h3",{attrs:{id:"绝对定位absolute"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位absolute"}},[t._v("#")]),t._v(" 绝对定位absolute")]),t._v(" "),i("ul",[i("li",[t._v("盒模型宽高为auto时，适应内容的")]),t._v(" "),i("li",[t._v("包含块变化：找祖先元素中第一个定位元素，该元素的填充盒为其包含块，若找不到，则它的包含块为整个网页")])]),t._v(" "),i("h3",{attrs:{id:"固定定位-fixed"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#固定定位-fixed"}},[t._v("#")]),t._v(" 固定定位 fixed")]),t._v(" "),i("p",[t._v("其他情况和绝对定位完全一样"),i("br")]),t._v(" "),i("p",[t._v("包含块不同：除了几种特殊情况外，固定为视窗(既可视化窗口这部分区域)")]),t._v(" "),i("h3",{attrs:{id:"确定包含块"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#确定包含块"}},[t._v("#")]),t._v(" 确定包含块")]),t._v(" "),i("p",[t._v("确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：")]),t._v(" "),i("ul",[i("li",[t._v("如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块元素（比如说inline-block, block 或 list-item元素）的内容区的边缘组成，也可能会建立格式化上下文(比如说 a table container, flex container, grid container, 或者是 the block container 自身)。")]),t._v(" "),i("li",[t._v("如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素的内边距区的边缘组成。")]),t._v(" "),i("li",[t._v("如果 position 属性是 fixed，在连续媒体的情况下(continuous media)包含块是 viewport ,在分页媒体(paged media)下的情况下包含块是分页区域(page area)。")]),t._v(" "),i("li",[t._v("如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：")])]),t._v(" "),i("ol",[i("li",[t._v("A transform or perspective value other than none")]),t._v(" "),i("li",[t._v("A will-change value of transform or perspective")]),t._v(" "),i("li",[t._v("A filter  value other than none or a will-change value of filter(only works on Firefox).")]),t._v(" "),i("li",[t._v("A contain value of paint (例如: contain: paint;)")])]),t._v(" "),i("h2",{attrs:{id:"定位下的居中"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#定位下的居中"}},[t._v("#")]),t._v(" 定位下的居中")]),t._v(" "),i("p",[t._v("某个方向居中："),i("br")]),t._v(" "),i("ol",[i("li",[t._v("水平定宽，垂直定高")]),t._v(" "),i("li",[t._v("将左右（上下）距离设置为0")]),t._v(" "),i("li",[t._v("将左右（上下）margin设置为auto")])]),t._v(" "),i("p",[t._v("在定位下，设置margin为auto会自动吸收包含的内容")])])}),[],!1,null,null,null);e.default=l.exports}}]);