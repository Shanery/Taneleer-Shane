webpackJsonp([1],{"+WN3":function(t,e,n){"use strict";var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"stack-item"},[this._t("default")],2)},staticRenderFns:[]};e.a=s},"/C5I":function(t,e){},"3qyT":function(t,e){},HY8E:function(t,e){},"IU/z":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("NYxO"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},r,!1,function(t){n("WR0q")},null,null).exports,a=n("/ocq"),c=n("Gu7T"),u=n.n(c),l=n("//Fk"),h=n.n(l),d=n("mtWM"),m=n.n(d),f=n("U0v6"),v=n.n(f),p=n("h17U"),g={name:"TwitterCard",props:{post:Object},computed:{imgUrl:function(){return this.post.mainImage.hasOwnProperty("url")?this.post.mainImage.url:null},text:function(){return this.post.caption},userId:function(){return this.post.user}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.imgUrl?n("div",{staticClass:"card-image"},[n("img",{attrs:{src:t.imgUrl,alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"card-body"},[n("h6",{staticClass:"subtitle"},[t._v("@"+t._s(t.userId))]),t._v(" "),n("p",[t._v(t._s(t.text))])])])},staticRenderFns:[]},_=n("VU/8")(g,C,!1,null,null,null).exports,b={name:"InstagramCard",props:{post:Object},computed:{imgUrl:function(){return this.post.mainImage.hasOwnProperty("url")?this.post.mainImage.url:null},text:function(){return this.post.caption.length>130?this.post.caption.slice(0,130)+"...":this.post.caption},userId:function(){return this.post.user}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.imgUrl?n("div",{staticClass:"card-image"},[n("img",{attrs:{src:t.imgUrl,alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"card-body"},[n("h6",{staticClass:"subtitle"},[t._v("@"+t._s(t.userId))]),t._v(" "),n("p",[t._v(t._s(t.text))])])])},staticRenderFns:[]},x=n("VU/8")(b,w,!1,null,null,null).exports,P={name:"ThumbCard",props:{post:Object,index:Number},data:function(){return{isHover:!1}},computed:{type:function(){return{Twitter:"TwitterCard",Instagram:"InstagramCard"}[this.post.service]},logo:function(){return{Twitter:p.b,Instagram:p.a}[this.post.service]},linkToOriginal:function(){return this.post.url}},methods:{expandPost:function(){this.$emit("open",this.index)},hoverOver:function(){this.isHover=!0},hoverOut:function(){this.isHover=!1}},components:{TwitterCard:_,InstagramCard:x,FontAwesomeIcon:v.a}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"thumb",class:{hover:t.isHover},on:{mouseover:t.hoverOver,mouseout:t.hoverOut}},[n("div",{staticClass:"card-container",class:{hover:t.isHover},on:{click:t.expandPost}},[n(t.type,{tag:"component",attrs:{post:t.post}})],1),t._v(" "),n("div",{staticClass:"options",class:{hover:t.isHover}},[n("a",{attrs:{href:t.linkToOriginal}},[n("button",{staticClass:"logo-button"},[n("font-awesome-icon",{attrs:{icon:t.logo,size:"2x","fixed-width":""}})],1)])])])},staticRenderFns:[]};var W=n("VU/8")(P,I,!1,function(t){n("/C5I")},null,null).exports,k=n("1P+R"),$={name:"modal",props:{active:Boolean},components:{FontAwesomeIcon:v.a},computed:{icon:function(){return k.c}},methods:{close:function(){this.$emit("close")}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal",class:{"is-active":this.active}},[e("div",{staticClass:"modal-background",on:{click:this.close}}),this._v(" "),e("div",{staticClass:"modal-content"},[this._t("default")],2),this._v(" "),e("button",{staticClass:"close",on:{click:this.close}},[e("font-awesome-icon",{attrs:{icon:this.icon,size:"3x"}})],1)])},staticRenderFns:[]};var U=n("VU/8")($,y,!1,function(t){n("3qyT")},null,null).exports,O={name:"ModalCard",props:{bars:Boolean},components:{FontAwesomeIcon:v.a},computed:{left:function(){return k.a},right:function(){return k.b}},methods:{prev:function(){this.$emit("prev")},next:function(){this.$emit("next")}}},T={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-card-container"},[t.bars?n("div",{staticClass:"bar",on:{click:t.prev}},[n("font-awesome-icon",{attrs:{icon:t.left,size:"3x"}})],1):t._e(),t._v(" "),n("div",{staticClass:"modal-card"},[t._t("default")],2),t._v(" "),t.bars?n("div",{staticClass:"bar",on:{click:t.next}},[n("font-awesome-icon",{attrs:{icon:t.right,size:"3x"}})],1):t._e()])},staticRenderFns:[]};var E=n("VU/8")(O,T,!1,function(t){n("W3Kn")},null,null).exports,H=n("Y+qo"),S={name:"HomePage",components:{ThumbCard:W,Stack:H.a,StackItem:H.b,Modal:U,ModalCard:E},data:function(){return{services:this.$store.state.services,fetching:!1,currentService:"Twitter",currentPost:null,modal:!1}},created:function(){var t=this;for(var e in window.addEventListener("scroll",function(){t.bottomVisible()&&!t.fetching&&(t.fetching=!0,t.getImages(t.services[t.currentService]))}),this.services)if(this.services.hasOwnProperty(e)){var n=this.services[e];this.$set(n,"posts",[]),this.$set(n,"page",0)}},computed:{curPost:function(){return this.services[this.currentService].posts[this.currentPost]},curPosts:function(){return this.services[this.currentService].posts},curServiceLogo:function(){if(this.curPost)return this.$store.state.services[this.curPost.service].logo},imgUrl:function(){var t=this.curPost;return t&&t.mainImage.hasOwnProperty("url")?t.mainImage.url:null},text:function(){if(this.curPost)return this.curPost.caption},userId:function(){if(this.curPost)return this.curPost.user},linkToOriginal:function(){if(this.curPost)return this.curPost.url}},methods:{getImages:function(t,e){var n=this;return new h.a(function(e,s){var i=n;i.fetching=!0,console.log(t.name),console.log(t.page),m.a.get("https://taneleer.composedcreative.com/api/v1/feed/a0329f16-9225-11e6-89bb-296a97b9d609/fabb8b71-496e-11e8-afe9-1253691739d7",{params:{"filter[services]":[t.name],"page[number]":t.page,"page[size]":30}}).then(function(e){var n;console.log(e);var s=e.data.data;(n=t.posts).push.apply(n,u()(s)),t.page++,console.log(t.page),this.populateColumns(s)}.bind(n)).then(function(){return new h.a(function(t){setTimeout(t,1e3),i.fetching=!1,t(null)})}).catch(function(t){i.fetching=!1})})},bottomVisible:function(){var t=window.scrollY,e=document.documentElement.clientHeight,n=document.documentElement.scrollHeight;return e+t>=n-2*e||n<e},expandPost:function(t){this.currentPost=t,this.modal=!0},prevPost:function(){this.currentPost>0&&(this.currentPost-=1)},nextPost:function(){var t=this;if(!this.fetching){var e=this.services[this.currentService].posts;this.currentPost>=e.length-1?(this.fetching=!0,this.getImages(this.services[this.currentService]).then(function(){t.currentPost+=1})):this.currentPost+=1}},changeService:function(t){this.currentService=t}},mounted:function(){for(var t in this.fetching=!0,this.services)if(this.services.hasOwnProperty(t)){var e=this.services[t];this.getImages(e)}}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"},on:{scroll:t.bottomVisible}},[n("div",{attrs:{id:"select-source"}},[n("div",{staticClass:"tabs"},t._l(t.services,function(e,s){return n("button",{staticClass:"tab",class:{"is-active":s==t.currentService},on:{click:function(e){t.changeService(s)}}},[t._v("\n        "+t._s(s)+"\n        "),n("font-awesome-icon",{attrs:{icon:e.logo}})],1)}))]),t._v(" "),n("div",{staticClass:"wall"},[n("stack",{attrs:{"column-min-width":240,"gutter-width":0,"gutter-height":0,"monitor-images-loaded":!0}},t._l(t.curPosts,function(e,s){return n("stack-item",{key:s},[n("thumb-card",{attrs:{post:e,index:s},on:{open:t.expandPost}})],1)}))],1),t._v(" "),t.curPost?n("modal",{attrs:{active:t.modal},on:{close:function(e){t.modal=!1}}},[n("modal-card",{attrs:{bars:!0},on:{prev:t.prevPost,next:t.nextPost}},[t.imgUrl?n("div",{staticClass:"modal-card-image"},[n("img",{attrs:{src:t.imgUrl}})]):t._e(),t._v(" "),n("div",{staticClass:"modal-card-content"},[n("div",{staticClass:"level"},[n("h3",{staticClass:"title g1"},[t._v(t._s(t.userId))]),t._v(" "),n("a",{staticClass:"logo-link",attrs:{href:t.linkToOriginal}},[n("button",{staticClass:"logo-button"},[n("font-awesome-icon",{attrs:{icon:t.curServiceLogo,size:"3x"}})],1)])]),t._v(" "),n("hr"),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.text))])])])],1):t._e()],1)},staticRenderFns:[]};var N=n("VU/8")(S,F,!1,function(t){n("OQZk")},null,null).exports;s.default.use(a.a);var R=new a.a({routes:[{path:"/",name:"HomePage",component:N}]});s.default.config.productionTip=!1,s.default.component("font-awesome-icon",v.a),s.default.use(i.a);var V=new i.a.Store({state:{services:{Twitter:{name:"Twitter",logo:p.b},Instagram:{name:"Instagram",logo:p.a}}}});new s.default({el:"#app",router:R,store:V,components:{App:o},template:"<App/>"})},OQZk:function(t,e){},W3Kn:function(t,e){},WR0q:function(t,e){},X7kG:function(t,e,n){"use strict";var s=n("iPd/"),i={props:{columnMinWidth:{type:Number,required:!0},gutterWidth:{type:Number,default:0},gutterHeight:{type:Number,default:0},monitorImagesLoaded:{type:Boolean,default:!1}},data:function(){return{containerWidth:0,columnCount:0,columnWidth:0,baseColumns:[]}},mounted:function(){window.addEventListener("resize",this.reflow),this.update()},methods:{updateColumnData:function(){this.containerWidth=this.getContainerWidth(),this.columnCount=this.getColumnCount(),this.columnWidth=this.getColumnWidth()},getContainerWidth:function(){return this.$refs.container.clientWidth},getColumnCount:function(){for(var t=1;;t++){if(t*this.columnMinWidth+(t-1)*this.gutterWidth>this.containerWidth)return Math.max(t-1,1)}},getColumnWidth:function(){return(this.containerWidth-(this.columnCount-1)*this.gutterWidth)/this.columnCount},getBaseColumns:function(){for(var t=[],e=0;e<this.columnCount;e++)t.push({x:e*(this.columnWidth+this.gutterWidth),h:0});return t},update:function(){this.$nextTick(this.reflow)},reflow:function(){var t=this;this.updateColumnData();var e=this.getBaseColumns();this.$children.forEach(function(n,s){n.$el.style.width=t.columnWidth+"px";var i=0;if(s<t.columnCount)i=s;else{var r=-1;e.forEach(function(t,e){(-1==r||t.h<r)&&(i=e,r=t.h)})}n.$el.style.left=e[i].x+"px",n.$el.style.top=e[i].h+"px",e[i].h+=n.$el.offsetHeight+t.gutterHeight});var n=0;e.forEach(function(t){return n=Math.max(n,t.h)}),this.$el.style.height=n+"px"},imagesLoaded:function(){this.monitorImagesLoaded&&this.reflow()}},directives:{imagesLoaded:n.n(s).a}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"images-loaded",rawName:"v-images-loaded",value:this.imagesLoaded,expression:"imagesLoaded"}],ref:"container",staticClass:"container"},[this._t("default")],2)},staticRenderFns:[]};var o=n("VU/8")(i,r,!1,function(t){n("HY8E")},null,null);e.a=o.exports},kdLz:function(t,e,n){"use strict";var s=n("pNp3"),i=n.n(s),r=n("+WN3");var o=function(t){n("IU/z")},a=n("VU/8")(i.a,r.a,!1,o,null,null);e.default=a.exports},pNp3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3a2f3c63042f2863debb.js.map