(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["connect"],{"12a4":function(t,e,n){},"2c33":function(t,e,n){},"7eb2":function(t,e,n){"use strict";var o=n("2c33"),c=n.n(o);c.a},a149:function(t,e,n){"use strict";var o=n("12a4"),c=n.n(o);c.a},ec26:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],attrs:{type:"text"},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}}),n("StripeButton",{attrs:{state:t.state}})],1)},c=[],a=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"stripe-connect light-blue",on:{click:function(e){return e.preventDefault(),t.StripeConnect(e)}}},[n("span",[t._v("Connect with Stripe")])])}),i=[],r={props:{state:{type:String,required:!0}},methods:{StripeConnect:function(){var t="https://connect.stripe.com/oauth/authorize",e="code",n="ca_EBXBLmlmm9clBXvVZLVG03UDxSiuIHQM",o="read_write";this.state?window.open("".concat(t,"?response_type=").concat(e,"&client_id=").concat(n,"&scope=").concat(o,"&state=").concat(this.state)):window.alert("You must provide your magic token to proceed.")}}},s=r,u=(n("a149"),n("2877")),p=Object(u["a"])(s,a,i,!1,null,"132b6c38",null);p.options.__file="StripeButton.vue";var l=p.exports,d={components:{StripeButton:l},data:function(){return{state:void 0}}},f=d,v=(n("7eb2"),Object(u["a"])(f,o,c,!1,null,"5f4075f8",null));v.options.__file="Connect.vue";e["default"]=v.exports}}]);
//# sourceMappingURL=connect.f8018ee8.js.map