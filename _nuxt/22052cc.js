(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{258:function(t,e,r){"use strict";var o=r(3),n=r(67).find,c=r(120),d="find",l=!0;d in[]&&Array(1).find((function(){l=!1})),o({target:"Array",proto:!0,forced:l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},259:function(t,e,r){"use strict";function o(t){return(new Intl.NumberFormat).format(t)}r.d(e,"a",(function(){return o}))},262:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("a3334578",content,!0,{sourceMap:!1})},271:function(t,e,r){"use strict";r(262)},272:function(t,e,r){var o=r(52)(!1);o.push([t.i,'*,:after,:before{box-sizing:inherit}html{box-sizing:border-box;scroll-behavior:smooth}body{font-family:"CodecPro"}body,ul{padding:0;margin:0}li{list-style:none}a{text-decoration:none;color:inherit}.product{display:flex;justify-content:space-evenly;align-items:flex-start}.product__img{max-width:712px;max-height:700px;width:100%;height:100%;display:block;border-radius:24px}.product__img-container{margin-right:64px}.product__info{margin-top:56px;min-width:536px;max-width:536px}.product__title{font-weight:700;font-size:40px;margin:0 0 32px}.product__nav{display:flex;font-weight:700;font-size:16px;margin-bottom:32px}.product__nav-item{margin-right:32px;color:#677b8f;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:.4s}.product__nav-item:hover{color:#39f}.product__nav-item:last-child{margin:0}.product__description{font-weight:300;font-size:14px;color:#677b8f;line-height:1.5;margin-bottom:32px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.product__subtitle{font-weight:700;font-size:24px;margin:0 0 32px}.product__feature{display:flex;margin-bottom:16px}.product__feature+.product__feature{margin-bottom:45px}.product__feature-img-bg{min-width:80px;height:96px;display:flex;justify-content:center;align-items:center;background:#f3f4f7;border-radius:16px;margin-right:24px}.product__feature-title{margin:12px 0 8px;font-size:16px}.product__feature-text{font-weight:300;font-size:14px;color:#677b8f;line-height:1.5}.product__price{display:flex;height:80px;width:100%;justify-content:space-between;background:#f3f4f7;border-radius:16px;align-items:center;padding:0 32px}.product__hours{font-weight:700;font-size:20px}.product__hours span{color:#f84ab3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.product__rent{width:136px;height:48px;font-size:16px;color:#fcfcfc;background:#4959ff;border-radius:12px;border:none;font-weight:700;cursor:pointer;transition:.4s}.product__rent:hover{background:#1e90ff}@media(max-width:1024px){.product{margin:0 16px;flex-direction:column;align-items:center}.product__img{margin:0 0 22px;max-width:550px;max-height:550px;border-radius:16px}.product__img-container{margin:0}.product__info{margin:0 0 16px;min-width:auto}.product__title{font-size:24px;margin-bottom:16px;line-height:1.2}.product__nav{margin-bottom:20px}.product__nav-item{margin-right:20px}.product__description{margin-bottom:20px}.product__subtitle{margin-bottom:20px;font-size:20px}.product__feature{margin-bottom:12px}.product__feature+.product__feature{margin-bottom:80px}.product__feature-img-bg{min-width:64px;height:80px}.product__feature-img{width:24px;height:24px}.product__feature-title{margin-top:4px}.product__price{height:68px;bottom:32px}.product__price,.product__price-bg{padding:0 24px;position:fixed;left:16px;width:calc(100% - 32px)}.product__price-bg{height:100px;bottom:0;box-shadow:0 31px 31px 45px hsla(0,0%,100%,.73);background:#fff;border-radius:16px 16px 0 0}.product__hours{font-size:16px}.product__rent{width:111px;height:44px;font-size:14px}}.nuxt-link-active,.nuxt-link-active:hover{color:#4959ff}',""]),t.exports=o},277:function(t,e,r){"use strict";r.r(e);r(258);var o={props:["pageParams"],data:function(){return{currentPageParams:{}}},filters:{numberFormat:r(259).a},methods:{reloadProducts:function(){this.$store.dispatch("vehiclesAction"),this.$store.commit("vehiclesLoading",!0),this.$store.commit("vehiclesLoadingFailed",!1)}},computed:{product:function(){var t=this;return this.$store.state.vehicles?this.$store.state.vehicles.find((function(e){return e.id===t.$route.params.id})):0}},created:function(){this.currentPageParams=this.$store.state.productInfo,this.currentPageParams.id||(this.currentPageParams=this.product,this.$store.commit("changeProductInfo",this.currentPageParams))}},n=(r(271),r(21)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.vehiclesLoading,expression:"this.$store.state.vehiclesLoading"}]},[t._v("\n    Подождите пожалуйста, транспортные средства загружаются...\n  ")]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.vehiclesLoadingFailed,expression:"this.$store.state.vehiclesLoadingFailed"}]},[t._v("\n    Ошибка загрузки, попробуйте перезагрузить каталог\n    "),r("button",{on:{click:function(e){return t.reloadProducts()}}},[t._v("Перезагрузить")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.vehicles,expression:"this.$store.state.vehicles"}],staticClass:"product"},[r("div",{staticClass:"product__img-container"},[r("img",{staticClass:"product__img",attrs:{src:t.product.image,alt:""}})]),t._v(" "),r("div",{staticClass:"product__info"},[r("h2",{staticClass:"product__title"},[t._v(t._s(t.product.name))]),t._v(" "),r("nav",{staticClass:"product__nav"},[r("nuxt-link",{staticClass:"product__nav-item",attrs:{to:"/product/"+t.product.id+"/specifications"}},[t._v("Specifications")]),t._v(" "),r("nuxt-link",{staticClass:"product__nav-item",attrs:{to:"/product/"+t.product.id+"/team"}},[t._v("Team")]),t._v(" "),r("nuxt-link",{staticClass:"product__nav-item",attrs:{to:"/product/"+t.product.id+"/rent-terms"}},[t._v("Rent terms")])],1),t._v(" "),r("nuxt-child"),t._v(" "),r("div",{staticClass:"product__price-bg"},[r("div",{staticClass:"product__price"},[r("h3",{staticClass:"product__hours"},[t._v("\n            Rent for\n            "),r("span",[t._v(t._s(t._f("numberFormat")(t.product.rent))+" $/h")])]),t._v(" "),r("button",{staticClass:"product__rent"},[t._v("Rent now")])])])],1)])])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(54),r(160)),c={layout:"header",middleware:"productPage",validate:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.params,!(o=t.store).state.vehicles){e.next=5;break}return e.abrupt("return",o.state.vehicles.some((function(t){return t.id===r.id})));case 5:return e.next=7,Object(n.a)();case 7:return c=e.sent,e.abrupt("return",c.some((function(t){return t.id===r.id})));case 9:case"end":return e.stop()}}),e)})))()}},d=r(21),component=Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("ProductPage")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductPage:r(277).default})}}]);