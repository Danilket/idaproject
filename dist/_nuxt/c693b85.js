(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{259:function(t,e,r){"use strict";function o(t){return(new Intl.NumberFormat).format(t)}r.d(e,"a",(function(){return o}))},260:function(t,e,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("9a394e80",content,!0,{sourceMap:!1})},261:function(t,e,r){var content=r(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("5b8e8278",content,!0,{sourceMap:!1})},263:function(t,e,r){var content=r(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("71c0d238",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";var o=r(3),n=r(67).findIndex,l=r(120),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},265:function(t,e,r){"use strict";r(260)},266:function(t,e,r){var o=r(52)(!1);o.push([t.i,'*,:after,:before{box-sizing:inherit}html{box-sizing:border-box;scroll-behavior:smooth}body{font-family:"CodecPro"}body,ul{padding:0;margin:0}li{list-style:none}a{text-decoration:none;color:inherit}.list__actions{display:flex;justify-content:space-between}.list__select{font-size:40px}.list__select *{font-weight:700}.list__choise{border:none;background:transparent;padding-right:12px;color:#4959ff;font-size:40px}.list__new-product{display:flex;align-items:center}.list__add-text{font-size:20px;color:#4959ff;font-weight:700;margin-right:20px;white-space:nowrap}.list__add-btn{width:48px;height:48px;color:#fff;background-color:#4959ff;border-radius:16px;border:none;font-size:24px;cursor:pointer}@media(max-width:1024px){.list__choise,.list__select{font-size:24px}.list__choise{padding-right:4px}.list__add-text{font-size:16px;margin-right:12px}.list__add-btn{width:32px;height:32px;border-radius:8px}}',""]),t.exports=o},267:function(t,e,r){"use strict";r(261)},268:function(t,e,r){var o=r(52)(!1);o.push([t.i,'*,:after,:before{box-sizing:inherit}html{box-sizing:border-box;scroll-behavior:smooth}body{font-family:"CodecPro"}body,ul{padding:0;margin:0}li{list-style:none}a{text-decoration:none;color:inherit}.list__product{flex-grow:1}.list__item{height:164px;background:#fff;border-radius:32px;margin:0 16px 32px;padding:24px 32px;display:flex}.list__img{width:88px;height:88px;margin-right:24px;border-radius:24px}.list__info{padding-top:16px;padding-right:20px;max-width:170px}.list__name{font-weight:700;margin-bottom:12px;font-size:16px}.list__description{font-weight:300;font-size:12px;line-height:1.5;margin-bottom:16px;color:#677b8f}.list__price{font-size:14px;color:#f84ab3;font-weight:700}@media(max-width:1024px){.list__item{height:151px;margin:0 6px 12px;padding:20px}.list__img{margin-right:20px}.list__info{padding-top:12px;padding-right:0}}',""]),t.exports=o},269:function(t,e,r){"use strict";r.r(e);r(38),r(264);var o={props:["categoryId"],computed:{currentCategory:{get:function(){return this.categoryId},set:function(t){this.$emit("update:categoryId",t)}},categoryList:function(){return this.$store.state.vehicles?this.$store.state.vehicles:0},categories:function(){var t=this.categoryList;return this.categoryList&&(t=t.filter((function(t,e,r){return e===r.findIndex((function(e){return e.type===t.type}))}))),t}}},n=(r(265),r(21)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list__actions"},[r("div",{staticClass:"list__select"},[r("span",[t._v("Rent")]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model.number",value:t.currentCategory,expression:"currentCategory",modifiers:{number:!0}}],staticClass:"list__choise",attrs:{type:"text"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var r="_value"in e?e._value:e.value;return t._n(r)}));t.currentCategory=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"0"}},[t._v("whatever")]),t._v(" "),t._l(t.categories,(function(e){return r("option",{key:e.type,domProps:{value:e.type}},[t._v("\n        "+t._s(e.type)+"\n      ")])}))],2)]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list__new-product"},[r("div",{staticClass:"list__add-text"},[t._v("Add new")]),t._v(" "),r("button",{staticClass:"list__add-btn"},[t._v("+")])])}],!1,null,null,null);e.default=component.exports},270:function(t,e,r){"use strict";r.r(e);var o={props:["product"],filters:{numberFormat:r(259).a},methods:{gotoPage:function(t){$nuxt.$emit("gotoPage",t)}}},n=(r(267),r(21)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"list__product",on:{click:function(e){return t.gotoPage(t.product)}}},[r("nuxt-link",{staticClass:"list__item",attrs:{to:"/product/"+t.product.id}},[r("img",{staticClass:"list__img",attrs:{src:t.product.preview,alt:t.product.name}}),t._v(" "),r("div",{staticClass:"list__info"},[r("div",{staticClass:"list__name"},[t._v(t._s(t.product.name))]),t._v(" "),r("div",{staticClass:"list__description"},[t._v("\n        "+t._s(t.product.description)+"\n      ")]),t._v(" "),r("div",{staticClass:"list__price"},[t._v(t._s(t._f("numberFormat")(t.product.rent))+" $/h")])])])],1)}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,r){"use strict";r(263)},274:function(t,e,r){var o=r(52)(!1);o.push([t.i,'*,:after,:before{box-sizing:inherit}html{box-sizing:border-box;scroll-behavior:smooth}body{font-family:"CodecPro"}body,ul{padding:0;margin:0}li{list-style:none}a{text-decoration:none;color:inherit}.list{background:#f3f4f7;border-radius:48px;padding:56px 64px 24px}.list__products{display:flex;flex-wrap:wrap;margin:40px -16px 0}@media(max-width:1024px){.list{padding:24px 16px 12px;border-radius:24px}.list__products{margin:24px -10px 0}}',""]),t.exports=o},278:function(t,e,r){"use strict";r.r(e);r(38);var o={data:function(){return{filterCategory:0}},computed:{productList:function(){return this.$store.state.vehicles?this.$store.state.vehicles:{}},filteredProducts:function(){var t=this,e=this.productList;return this.filterCategory&&(e=e.filter((function(e){return e.type===t.filterCategory}))),e}},methods:{reloadProducts:function(){this.$store.dispatch("vehiclesAction"),this.$store.commit("vehiclesLoading",!0),this.$store.commit("vehiclesLoadingFailed",!1)}}},n=(r(273),r(21)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list"},[this.$store.state.vehiclesLoading?r("div",[t._v("\n    Подождите пожалуйста, транспортные средства загружаются...\n  ")]):t._e(),t._v(" "),this.$store.state.vehiclesLoadingFailed?r("div",[t._v("\n    Ошибка загрузки, попробуйте перезагрузить каталог\n    "),r("button",{on:{click:function(e){return t.reloadProducts()}}},[t._v("Перезагрузить")])]):r("div",[r("ProductActions",{attrs:{"category-id":t.filterCategory},on:{"update:categoryId":function(e){t.filterCategory=e},"update:category-id":function(e){t.filterCategory=e}}}),t._v(" "),r("ul",{staticClass:"list__products"},t._l(t.filteredProducts,(function(t,e){return r("ProductItem",{key:e,attrs:{product:t}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductActions:r(269).default,ProductItem:r(270).default})}}]);