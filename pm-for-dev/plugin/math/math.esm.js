var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=function(t){return t&&t.Math==Math&&t},r=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof t&&t)||function(){return this}()||Function("return this")(),n={},o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a=!o((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})),c=a,u=Function.prototype.call,f=c?u.bind(u):function(){return u.apply(u,arguments)},s={},l={}.propertyIsEnumerable,p=Object.getOwnPropertyDescriptor,h=p&&!l.call({1:2},1);s.f=h?function(t){var e=p(this,t);return!!e&&e.enumerable}:l;var v,d,y=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},m=a,g=Function.prototype,b=g.bind,w=g.call,j=m&&b.bind(w,w),x=m?function(t){return t&&j(t)}:function(t){return t&&function(){return w.apply(t,arguments)}},O=x,E=O({}.toString),S=O("".slice),P=function(t){return S(E(t),8,-1)},T=x,_=o,L=P,k=r.Object,M=T("".split),A=_((function(){return!k("z").propertyIsEnumerable(0)}))?function(t){return"String"==L(t)?M(t,""):k(t)}:k,R=r.TypeError,I=function(t){if(null==t)throw R("Can't call method on "+t);return t},F=A,C=I,N=function(t){return F(C(t))},D=function(t){return"function"==typeof t},G=D,J=function(t){return"object"==typeof t?null!==t:G(t)},$=r,z=D,H=function(t){return z(t)?t:void 0},U=function(t,e){return arguments.length<2?H($[t]):$[t]&&$[t][e]},W=x({}.isPrototypeOf),q=U("navigator","userAgent")||"",X=r,B=q,K=X.process,Q=X.Deno,Y=K&&K.versions||Q&&Q.version,V=Y&&Y.v8;V&&(d=(v=V.split("."))[0]>0&&v[0]<4?1:+(v[0]+v[1])),!d&&B&&(!(v=B.match(/Edge\/(\d+)/))||v[1]>=74)&&(v=B.match(/Chrome\/(\d+)/))&&(d=+v[1]);var Z=d,tt=Z,et=o,rt=!!Object.getOwnPropertySymbols&&!et((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&tt&&tt<41})),nt=rt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,ot=U,it=D,at=W,ct=nt,ut=r.Object,ft=ct?function(t){return"symbol"==typeof t}:function(t){var e=ot("Symbol");return it(e)&&at(e.prototype,ut(t))},st=r.String,lt=function(t){try{return st(t)}catch(t){return"Object"}},pt=D,ht=lt,vt=r.TypeError,dt=function(t){if(pt(t))return t;throw vt(ht(t)+" is not a function")},yt=dt,mt=function(t,e){var r=t[e];return null==r?void 0:yt(r)},gt=f,bt=D,wt=J,jt=r.TypeError,xt={exports:{}},Ot=r,Et=Object.defineProperty,St=function(t,e){try{Et(Ot,t,{value:e,configurable:!0,writable:!0})}catch(r){Ot[t]=e}return e},Pt=St,Tt=r["__core-js_shared__"]||Pt("__core-js_shared__",{}),_t=Tt;(xt.exports=function(t,e){return _t[t]||(_t[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Lt=I,kt=r.Object,Mt=function(t){return kt(Lt(t))},At=Mt,Rt=x({}.hasOwnProperty),It=Object.hasOwn||function(t,e){return Rt(At(t),e)},Ft=x,Ct=0,Nt=Math.random(),Dt=Ft(1..toString),Gt=function(t){return"Symbol("+(void 0===t?"":t)+")_"+Dt(++Ct+Nt,36)},Jt=r,$t=xt.exports,zt=It,Ht=Gt,Ut=rt,Wt=nt,qt=$t("wks"),Xt=Jt.Symbol,Bt=Xt&&Xt.for,Kt=Wt?Xt:Xt&&Xt.withoutSetter||Ht,Qt=function(t){if(!zt(qt,t)||!Ut&&"string"!=typeof qt[t]){var e="Symbol."+t;Ut&&zt(Xt,t)?qt[t]=Xt[t]:qt[t]=Wt&&Bt?Bt(e):Kt(e)}return qt[t]},Yt=f,Vt=J,Zt=ft,te=mt,ee=function(t,e){var r,n;if("string"===e&&bt(r=t.toString)&&!wt(n=gt(r,t)))return n;if(bt(r=t.valueOf)&&!wt(n=gt(r,t)))return n;if("string"!==e&&bt(r=t.toString)&&!wt(n=gt(r,t)))return n;throw jt("Can't convert object to primitive value")},re=Qt,ne=r.TypeError,oe=re("toPrimitive"),ie=function(t,e){if(!Vt(t)||Zt(t))return t;var r,n=te(t,oe);if(n){if(void 0===e&&(e="default"),r=Yt(n,t,e),!Vt(r)||Zt(r))return r;throw ne("Can't convert object to primitive value")}return void 0===e&&(e="number"),ee(t,e)},ae=ft,ce=function(t){var e=ie(t,"string");return ae(e)?e:e+""},ue=J,fe=r.document,se=ue(fe)&&ue(fe.createElement),le=function(t){return se?fe.createElement(t):{}},pe=le,he=!i&&!o((function(){return 7!=Object.defineProperty(pe("div"),"a",{get:function(){return 7}}).a})),ve=i,de=f,ye=s,me=y,ge=N,be=ce,we=It,je=he,xe=Object.getOwnPropertyDescriptor;n.f=ve?xe:function(t,e){if(t=ge(t),e=be(e),je)try{return xe(t,e)}catch(t){}if(we(t,e))return me(!de(ye.f,t,e),t[e])};var Oe={},Ee=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype})),Se=r,Pe=J,Te=Se.String,_e=Se.TypeError,Le=function(t){if(Pe(t))return t;throw _e(Te(t)+" is not an object")},ke=i,Me=he,Ae=Ee,Re=Le,Ie=ce,Fe=r.TypeError,Ce=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor;Oe.f=ke?Ae?function(t,e,r){if(Re(t),e=Ie(e),Re(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=Ne(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Ce(t,e,r)}:Ce:function(t,e,r){if(Re(t),e=Ie(e),Re(r),Me)try{return Ce(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Fe("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var De=Oe,Ge=y,Je=i?function(t,e,r){return De.f(t,e,Ge(1,r))}:function(t,e,r){return t[e]=r,t},$e={exports:{}},ze=D,He=Tt,Ue=x(Function.toString);ze(He.inspectSource)||(He.inspectSource=function(t){return Ue(t)});var We,qe,Xe,Be=He.inspectSource,Ke=D,Qe=Be,Ye=r.WeakMap,Ve=Ke(Ye)&&/native code/.test(Qe(Ye)),Ze=xt.exports,tr=Gt,er=Ze("keys"),rr=function(t){return er[t]||(er[t]=tr(t))},nr={},or=Ve,ir=r,ar=x,cr=J,ur=Je,fr=It,sr=Tt,lr=rr,pr=nr,hr=ir.TypeError,vr=ir.WeakMap;if(or||sr.state){var dr=sr.state||(sr.state=new vr),yr=ar(dr.get),mr=ar(dr.has),gr=ar(dr.set);We=function(t,e){if(mr(dr,t))throw new hr("Object already initialized");return e.facade=t,gr(dr,t,e),e},qe=function(t){return yr(dr,t)||{}},Xe=function(t){return mr(dr,t)}}else{var br=lr("state");pr[br]=!0,We=function(t,e){if(fr(t,br))throw new hr("Object already initialized");return e.facade=t,ur(t,br,e),e},qe=function(t){return fr(t,br)?t[br]:{}},Xe=function(t){return fr(t,br)}}var wr={set:We,get:qe,has:Xe,enforce:function(t){return Xe(t)?qe(t):We(t,{})},getterFor:function(t){return function(e){var r;if(!cr(e)||(r=qe(e)).type!==t)throw hr("Incompatible receiver, "+t+" required");return r}}},jr=i,xr=It,Or=Function.prototype,Er=jr&&Object.getOwnPropertyDescriptor,Sr=xr(Or,"name"),Pr=Sr&&"something"===function(){}.name,Tr=Sr&&(!jr||jr&&Er(Or,"name").configurable),_r=r,Lr=D,kr=It,Mr=Je,Ar=St,Rr=Be,Ir={EXISTS:Sr,PROPER:Pr,CONFIGURABLE:Tr}.CONFIGURABLE,Fr=wr.get,Cr=wr.enforce,Nr=String(String).split("String");($e.exports=function(t,e,r,n){var o,i=!!n&&!!n.unsafe,a=!!n&&!!n.enumerable,c=!!n&&!!n.noTargetGet,u=n&&void 0!==n.name?n.name:e;Lr(r)&&("Symbol("===String(u).slice(0,7)&&(u="["+String(u).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!kr(r,"name")||Ir&&r.name!==u)&&Mr(r,"name",u),(o=Cr(r)).source||(o.source=Nr.join("string"==typeof u?u:""))),t!==_r?(i?!c&&t[e]&&(a=!0):delete t[e],a?t[e]=r:Mr(t,e,r)):a?t[e]=r:Ar(e,r)})(Function.prototype,"toString",(function(){return Lr(this)&&Fr(this).source||Rr(this)}));var Dr={},Gr=Math.ceil,Jr=Math.floor,$r=function(t){var e=+t;return e!=e||0===e?0:(e>0?Jr:Gr)(e)},zr=$r,Hr=Math.max,Ur=Math.min,Wr=$r,qr=Math.min,Xr=function(t){return t>0?qr(Wr(t),9007199254740991):0},Br=function(t){return Xr(t.length)},Kr=N,Qr=function(t,e){var r=zr(t);return r<0?Hr(r+e,0):Ur(r,e)},Yr=Br,Vr=function(t){return function(e,r,n){var o,i=Kr(e),a=Yr(i),c=Qr(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},Zr={includes:Vr(!0),indexOf:Vr(!1)},tn=It,en=N,rn=Zr.indexOf,nn=nr,on=x([].push),an=function(t,e){var r,n=en(t),o=0,i=[];for(r in n)!tn(nn,r)&&tn(n,r)&&on(i,r);for(;e.length>o;)tn(n,r=e[o++])&&(~rn(i,r)||on(i,r));return i},cn=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],un=an,fn=cn.concat("length","prototype");Dr.f=Object.getOwnPropertyNames||function(t){return un(t,fn)};var sn={};sn.f=Object.getOwnPropertySymbols;var ln=U,pn=Dr,hn=sn,vn=Le,dn=x([].concat),yn=ln("Reflect","ownKeys")||function(t){var e=pn.f(vn(t)),r=hn.f;return r?dn(e,r(t)):e},mn=It,gn=yn,bn=n,wn=Oe,jn=o,xn=D,On=/#|\.prototype\./,En=function(t,e){var r=Pn[Sn(t)];return r==_n||r!=Tn&&(xn(e)?jn(e):!!e)},Sn=En.normalize=function(t){return String(t).replace(On,".").toLowerCase()},Pn=En.data={},Tn=En.NATIVE="N",_n=En.POLYFILL="P",Ln=En,kn=r,Mn=n.f,An=Je,Rn=$e.exports,In=St,Fn=function(t,e,r){for(var n=gn(e),o=wn.f,i=bn.f,a=0;a<n.length;a++){var c=n[a];mn(t,c)||r&&mn(r,c)||o(t,c,i(e,c))}},Cn=Ln,Nn=function(t,e){var r,n,o,i,a,c=t.target,u=t.global,f=t.stat;if(r=u?kn:f?kn[c]||In(c,{}):(kn[c]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(a=Mn(r,n))&&a.value:r[n],!Cn(u?n:c+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Fn(i,o)}(t.sham||o&&o.sham)&&An(i,"sham",!0),Rn(r,n,i,t)}},Dn=an,Gn=cn,Jn=Object.keys||function(t){return Dn(t,Gn)},$n=i,zn=x,Hn=f,Un=o,Wn=Jn,qn=sn,Xn=s,Bn=Mt,Kn=A,Qn=Object.assign,Yn=Object.defineProperty,Vn=zn([].concat),Zn=!Qn||Un((function(){if($n&&1!==Qn({b:1},Qn(Yn({},"a",{enumerable:!0,get:function(){Yn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=Qn({},t)[r]||Wn(Qn({},e)).join("")!=n}))?function(t,e){for(var r=Bn(t),n=arguments.length,o=1,i=qn.f,a=Xn.f;n>o;)for(var c,u=Kn(arguments[o++]),f=i?Vn(Wn(u),i(u)):Wn(u),s=f.length,l=0;s>l;)c=f[l++],$n&&!Hn(a,u,c)||(r[c]=u[c]);return r}:Qn,to=Zn;function eo(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ro(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?eo(Object(r),!0).forEach((function(e){io(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):eo(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function no(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function oo(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){no(i,n,o,a,c,"next",t)}function c(t){no(i,n,o,a,c,"throw",t)}a(void 0)}))}}function io(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ao(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function co(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function uo(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return co(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?co(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}Nn({target:"Object",stat:!0,forced:Object.assign!==to},{assign:to});!function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=S(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?v:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",d={};function y(){}function m(){}function g(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(L([])));j&&j!==r&&n.call(j,i)&&(b=j);var x=g.prototype=y.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function L(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:k}}function k(){return{value:e,done:!0}}return m.prototype=g,u(x,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(E.prototype),u(E.prototype,a,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new E(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:L(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}({exports:{}});var fo={};fo[Qt("toStringTag")]="z";var so="[object z]"===String(fo),lo=r,po=so,ho=D,vo=P,yo=Qt("toStringTag"),mo=lo.Object,go="Arguments"==vo(function(){return arguments}()),bo=po?vo:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=mo(t),yo))?r:go?vo(e):"Object"==(n=vo(e))&&ho(e.callee)?"Arguments":n},wo=bo,jo=so?{}.toString:function(){return"[object "+wo(this)+"]"},xo=so,Oo=$e.exports,Eo=jo;xo||Oo(Object.prototype,"toString",Eo,{unsafe:!0});var So=r.Promise,Po=$e.exports,To=r,_o=D,Lo=To.String,ko=To.TypeError,Mo=x,Ao=Le,Ro=function(t){if("object"==typeof t||_o(t))return t;throw ko("Can't set "+Lo(t)+" as a prototype")},Io=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Mo(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return Ao(r),Ro(n),e?t(r,n):r.__proto__=n,r}}():void 0),Fo=Oe.f,Co=It,No=Qt("toStringTag"),Do=U,Go=Oe,Jo=i,$o=Qt("species"),zo=W,Ho=r.TypeError,Uo=dt,Wo=a,qo=x(x.bind),Xo=function(t,e){return Uo(t),void 0===e?t:Wo?qo(t,e):function(){return t.apply(e,arguments)}},Bo={},Ko=Bo,Qo=Qt("iterator"),Yo=Array.prototype,Vo=bo,Zo=mt,ti=Bo,ei=Qt("iterator"),ri=function(t){if(null!=t)return Zo(t,ei)||Zo(t,"@@iterator")||ti[Vo(t)]},ni=f,oi=dt,ii=Le,ai=lt,ci=ri,ui=r.TypeError,fi=f,si=Le,li=mt,pi=Xo,hi=f,vi=Le,di=lt,yi=function(t){return void 0!==t&&(Ko.Array===t||Yo[Qo]===t)},mi=Br,gi=W,bi=function(t,e){var r=arguments.length<2?ci(t):e;if(oi(r))return ii(ni(r,t));throw ui(ai(t)+" is not iterable")},wi=ri,ji=function(t,e,r){var n,o;si(t);try{if(!(n=li(t,"return"))){if("throw"===e)throw r;return r}n=fi(n,t)}catch(t){o=!0,n=t}if("throw"===e)throw r;if(o)throw n;return si(n),r},xi=r.TypeError,Oi=function(t,e){this.stopped=t,this.result=e},Ei=Oi.prototype,Si=Qt("iterator"),Pi=!1;try{var Ti=0,_i={next:function(){return{done:!!Ti++}},return:function(){Pi=!0}};_i[Si]=function(){return this},Array.from(_i,(function(){throw 2}))}catch(t){}var Li=x,ki=o,Mi=D,Ai=bo,Ri=Be,Ii=function(){},Fi=[],Ci=U("Reflect","construct"),Ni=/^\s*(?:class|function)\b/,Di=Li(Ni.exec),Gi=!Ni.exec(Ii),Ji=function(t){if(!Mi(t))return!1;try{return Ci(Ii,Fi,t),!0}catch(t){return!1}},$i=function(t){if(!Mi(t))return!1;switch(Ai(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Gi||!!Di(Ni,Ri(t))}catch(t){return!0}};$i.sham=!0;var zi,Hi,Ui,Wi,qi=!Ci||ki((function(){var t;return Ji(Ji.call)||!Ji(Object)||!Ji((function(){t=!0}))||t}))?$i:Ji,Xi=qi,Bi=lt,Ki=r.TypeError,Qi=Le,Yi=function(t){if(Xi(t))return t;throw Ki(Bi(t)+" is not a constructor")},Vi=Qt("species"),Zi=a,ta=Function.prototype,ea=ta.apply,ra=ta.call,na="object"==typeof Reflect&&Reflect.apply||(Zi?ra.bind(ea):function(){return ra.apply(ea,arguments)}),oa=U("document","documentElement"),ia=x([].slice),aa=r.TypeError,ca=/(?:ipad|iphone|ipod).*applewebkit/i.test(q),ua="process"==P(r.process),fa=r,sa=na,la=Xo,pa=D,ha=It,va=o,da=oa,ya=ia,ma=le,ga=function(t,e){if(t<e)throw aa("Not enough arguments");return t},ba=ca,wa=ua,ja=fa.setImmediate,xa=fa.clearImmediate,Oa=fa.process,Ea=fa.Dispatch,Sa=fa.Function,Pa=fa.MessageChannel,Ta=fa.String,_a=0,La={};try{zi=fa.location}catch(t){}var ka=function(t){if(ha(La,t)){var e=La[t];delete La[t],e()}},Ma=function(t){return function(){ka(t)}},Aa=function(t){ka(t.data)},Ra=function(t){fa.postMessage(Ta(t),zi.protocol+"//"+zi.host)};ja&&xa||(ja=function(t){ga(arguments.length,1);var e=pa(t)?t:Sa(t),r=ya(arguments,1);return La[++_a]=function(){sa(e,void 0,r)},Hi(_a),_a},xa=function(t){delete La[t]},wa?Hi=function(t){Oa.nextTick(Ma(t))}:Ea&&Ea.now?Hi=function(t){Ea.now(Ma(t))}:Pa&&!ba?(Wi=(Ui=new Pa).port2,Ui.port1.onmessage=Aa,Hi=la(Wi.postMessage,Wi)):fa.addEventListener&&pa(fa.postMessage)&&!fa.importScripts&&zi&&"file:"!==zi.protocol&&!va(Ra)?(Hi=Ra,fa.addEventListener("message",Aa,!1)):Hi="onreadystatechange"in ma("script")?function(t){da.appendChild(ma("script")).onreadystatechange=function(){da.removeChild(this),ka(t)}}:function(t){setTimeout(Ma(t),0)});var Ia,Fa,Ca,Na,Da,Ga,Ja,$a,za={set:ja,clear:xa},Ha=r,Ua=/ipad|iphone|ipod/i.test(q)&&void 0!==Ha.Pebble,Wa=/web0s(?!.*chrome)/i.test(q),qa=r,Xa=Xo,Ba=n.f,Ka=za.set,Qa=ca,Ya=Ua,Va=Wa,Za=ua,tc=qa.MutationObserver||qa.WebKitMutationObserver,ec=qa.document,rc=qa.process,nc=qa.Promise,oc=Ba(qa,"queueMicrotask"),ic=oc&&oc.value;ic||(Ia=function(){var t,e;for(Za&&(t=rc.domain)&&t.exit();Fa;){e=Fa.fn,Fa=Fa.next;try{e()}catch(t){throw Fa?Na():Ca=void 0,t}}Ca=void 0,t&&t.enter()},Qa||Za||Va||!tc||!ec?!Ya&&nc&&nc.resolve?((Ja=nc.resolve(void 0)).constructor=nc,$a=Xa(Ja.then,Ja),Na=function(){$a(Ia)}):Za?Na=function(){rc.nextTick(Ia)}:(Ka=Xa(Ka,qa),Na=function(){Ka(Ia)}):(Da=!0,Ga=ec.createTextNode(""),new tc(Ia).observe(Ga,{characterData:!0}),Na=function(){Ga.data=Da=!Da}));var ac=ic||function(t){var e={fn:t,next:void 0};Ca&&(Ca.next=e),Fa||(Fa=e,Na()),Ca=e},cc={},uc=dt,fc=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=uc(e),this.reject=uc(r)};cc.f=function(t){return new fc(t)};var sc=Le,lc=J,pc=cc,hc=r,vc=function(){this.head=null,this.tail=null};vc.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}};var dc,yc,mc,gc,bc=vc,wc="object"==typeof window,jc=Nn,xc=r,Oc=U,Ec=f,Sc=So,Pc=$e.exports,Tc=function(t,e,r){for(var n in e)Po(t,n,e[n],r);return t},_c=Io,Lc=function(t,e,r){t&&!r&&(t=t.prototype),t&&!Co(t,No)&&Fo(t,No,{configurable:!0,value:e})},kc=function(t){var e=Do(t),r=Go.f;Jo&&e&&!e[$o]&&r(e,$o,{configurable:!0,get:function(){return this}})},Mc=dt,Ac=D,Rc=J,Ic=function(t,e){if(zo(e,t))return t;throw Ho("Incorrect invocation")},Fc=Be,Cc=function(t,e,r){var n,o,i,a,c,u,f,s=r&&r.that,l=!(!r||!r.AS_ENTRIES),p=!(!r||!r.IS_ITERATOR),h=!(!r||!r.INTERRUPTED),v=pi(e,s),d=function(t){return n&&ji(n,"normal",t),new Oi(!0,t)},y=function(t){return l?(vi(t),h?v(t[0],t[1],d):v(t[0],t[1])):h?v(t,d):v(t)};if(p)n=t;else{if(!(o=wi(t)))throw xi(di(t)+" is not iterable");if(yi(o)){for(i=0,a=mi(t);a>i;i++)if((c=y(t[i]))&&gi(Ei,c))return c;return new Oi(!1)}n=bi(t,o)}for(u=n.next;!(f=hi(u,n)).done;){try{c=y(f.value)}catch(t){ji(n,"throw",t)}if("object"==typeof c&&c&&gi(Ei,c))return c}return new Oi(!1)},Nc=function(t,e){if(!e&&!Pi)return!1;var r=!1;try{var n={};n[Si]=function(){return{next:function(){return{done:r=!0}}}},t(n)}catch(t){}return r},Dc=function(t,e){var r,n=Qi(t).constructor;return void 0===n||null==(r=Qi(n)[Vi])?e:Yi(r)},Gc=za.set,Jc=ac,$c=function(t,e){if(sc(t),lc(e)&&e.constructor===t)return e;var r=pc.f(t);return(0,r.resolve)(e),r.promise},zc=function(t,e){var r=hc.console;r&&r.error&&(1==arguments.length?r.error(t):r.error(t,e))},Hc=cc,Uc=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Wc=bc,qc=wr,Xc=Ln,Bc=wc,Kc=ua,Qc=Z,Yc=Qt("species"),Vc="Promise",Zc=qc.getterFor(Vc),tu=qc.set,eu=qc.getterFor(Vc),ru=Sc&&Sc.prototype,nu=Sc,ou=ru,iu=xc.TypeError,au=xc.document,cu=xc.process,uu=Hc.f,fu=uu,su=!!(au&&au.createEvent&&xc.dispatchEvent),lu=Ac(xc.PromiseRejectionEvent),pu=!1,hu=Xc(Vc,(function(){var t=Fc(nu),e=t!==String(nu);if(!e&&66===Qc)return!0;if(Qc>=51&&/native code/.test(t))return!1;var r=new nu((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(r.constructor={})[Yc]=n,!(pu=r.then((function(){}))instanceof n)||!e&&Bc&&!lu})),vu=hu||!Nc((function(t){nu.all(t).catch((function(){}))})),du=function(t){var e;return!(!Rc(t)||!Ac(e=t.then))&&e},yu=function(t,e){var r,n,o,i=e.value,a=1==e.state,c=a?t.ok:t.fail,u=t.resolve,f=t.reject,s=t.domain;try{c?(a||(2===e.rejection&&ju(e),e.rejection=1),!0===c?r=i:(s&&s.enter(),r=c(i),s&&(s.exit(),o=!0)),r===t.promise?f(iu("Promise-chain cycle")):(n=du(r))?Ec(n,r,u,f):u(r)):f(i)}catch(t){s&&!o&&s.exit(),f(t)}},mu=function(t,e){t.notified||(t.notified=!0,Jc((function(){for(var r,n=t.reactions;r=n.get();)yu(r,t);t.notified=!1,e&&!t.rejection&&bu(t)})))},gu=function(t,e,r){var n,o;su?((n=au.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),xc.dispatchEvent(n)):n={promise:e,reason:r},!lu&&(o=xc["on"+t])?o(n):"unhandledrejection"===t&&zc("Unhandled promise rejection",r)},bu=function(t){Ec(Gc,xc,(function(){var e,r=t.facade,n=t.value;if(wu(t)&&(e=Uc((function(){Kc?cu.emit("unhandledRejection",n,r):gu("unhandledrejection",r,n)})),t.rejection=Kc||wu(t)?2:1,e.error))throw e.value}))},wu=function(t){return 1!==t.rejection&&!t.parent},ju=function(t){Ec(Gc,xc,(function(){var e=t.facade;Kc?cu.emit("rejectionHandled",e):gu("rejectionhandled",e,t.value)}))},xu=function(t,e,r){return function(n){t(e,n,r)}},Ou=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,mu(t,!0))},Eu=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw iu("Promise can't be resolved itself");var n=du(e);n?Jc((function(){var r={done:!1};try{Ec(n,e,xu(Eu,r,t),xu(Ou,r,t))}catch(e){Ou(r,e,t)}})):(t.value=e,t.state=1,mu(t,!1))}catch(e){Ou({done:!1},e,t)}}};if(hu&&(ou=(nu=function(t){Ic(this,ou),Mc(t),Ec(dc,this);var e=Zc(this);try{t(xu(Eu,e),xu(Ou,e))}catch(t){Ou(e,t)}}).prototype,(dc=function(t){tu(this,{type:Vc,done:!1,notified:!1,parent:!1,reactions:new Wc,rejection:!1,state:0,value:void 0})}).prototype=Tc(ou,{then:function(t,e){var r=eu(this),n=uu(Dc(this,nu));return r.parent=!0,n.ok=!Ac(t)||t,n.fail=Ac(e)&&e,n.domain=Kc?cu.domain:void 0,0==r.state?r.reactions.add(n):Jc((function(){yu(n,r)})),n.promise},catch:function(t){return this.then(void 0,t)}}),yc=function(){var t=new dc,e=Zc(t);this.promise=t,this.resolve=xu(Eu,e),this.reject=xu(Ou,e)},Hc.f=uu=function(t){return t===nu||t===mc?new yc(t):fu(t)},Ac(Sc)&&ru!==Object.prototype)){gc=ru.then,pu||(Pc(ru,"then",(function(t,e){var r=this;return new nu((function(t,e){Ec(gc,r,t,e)})).then(t,e)}),{unsafe:!0}),Pc(ru,"catch",ou.catch,{unsafe:!0}));try{delete ru.constructor}catch(t){}_c&&_c(ru,ou)}jc({global:!0,wrap:!0,forced:hu},{Promise:nu}),Lc(nu,Vc,!1),kc(Vc),mc=Oc(Vc),jc({target:Vc,stat:!0,forced:hu},{reject:function(t){var e=uu(this);return Ec(e.reject,void 0,t),e.promise}}),jc({target:Vc,stat:!0,forced:hu},{resolve:function(t){return $c(this,t)}}),jc({target:Vc,stat:!0,forced:vu},{all:function(t){var e=this,r=uu(e),n=r.resolve,o=r.reject,i=Uc((function(){var r=Mc(e.resolve),i=[],a=0,c=1;Cc(t,(function(t){var u=a++,f=!1;c++,Ec(r,e,t).then((function(t){f||(f=!0,i[u]=t,--c||n(i))}),o)})),--c||n(i)}));return i.error&&o(i.value),r.promise},race:function(t){var e=this,r=uu(e),n=r.reject,o=Uc((function(){var o=Mc(e.resolve);Cc(t,(function(t){Ec(o,e,t).then(r.resolve,n)}))}));return o.error&&n(o.value),r.promise}});var Su={},Pu=i,Tu=Ee,_u=Oe,Lu=Le,ku=N,Mu=Jn;Su.f=Pu&&!Tu?Object.defineProperties:function(t,e){Lu(t);for(var r,n=ku(e),o=Mu(e),i=o.length,a=0;i>a;)_u.f(t,r=o[a++],n[r]);return t};var Au,Ru=Le,Iu=Su,Fu=cn,Cu=nr,Nu=oa,Du=le,Gu=rr("IE_PROTO"),Ju=function(){},$u=function(t){return"<script>"+t+"<\/script>"},zu=function(t){t.write($u("")),t.close();var e=t.parentWindow.Object;return t=null,e},Hu=function(){try{Au=new ActiveXObject("htmlfile")}catch(t){}var t,e;Hu="undefined"!=typeof document?document.domain&&Au?zu(Au):((e=Du("iframe")).style.display="none",Nu.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write($u("document.F=Object")),t.close(),t.F):zu(Au);for(var r=Fu.length;r--;)delete Hu.prototype[Fu[r]];return Hu()};Cu[Gu]=!0;var Uu=Object.create||function(t,e){var r;return null!==t?(Ju.prototype=Ru(t),r=new Ju,Ju.prototype=null,r[Gu]=t):r=Hu(),void 0===e?r:Iu.f(r,e)},Wu=Oe,qu=Qt("unscopables"),Xu=Array.prototype;null==Xu[qu]&&Wu.f(Xu,qu,{configurable:!0,value:Uu(null)});var Bu=Zr.includes,Ku=function(t){Xu[qu][t]=!0};Nn({target:"Array",proto:!0},{includes:function(t){return Bu(this,t,arguments.length>1?arguments[1]:void 0)}}),Ku("includes");var Qu=J,Yu=P,Vu=Qt("match"),Zu=function(t){var e;return Qu(t)&&(void 0!==(e=t[Vu])?!!e:"RegExp"==Yu(t))},tf=r.TypeError,ef=bo,rf=r.String,nf=Qt("match"),of=Nn,af=function(t){if(Zu(t))throw tf("The method doesn't accept regular expressions");return t},cf=I,uf=function(t){if("Symbol"===ef(t))throw TypeError("Cannot convert a Symbol value to a string");return rf(t)},ff=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[nf]=!1,"/./"[t](e)}catch(t){}}return!1},sf=x("".indexOf);of({target:"String",proto:!0,forced:!ff("includes")},{includes:function(t){return!!~sf(uf(cf(this)),uf(af(t)),arguments.length>1?arguments[1]:void 0)}});var lf=["local","version","extensions"],pf=function(){var t,e={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(r){var n=(t=r).getConfig().mathjax2||t.getConfig().math||{},o=ro(ro({},e),n),i=(o.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(o.config||"TeX-AMS_HTML-full");o.tex2jax=ro(ro({},e.tex2jax),n.tex2jax),o.mathjax=o.config=null,function(t,e){var r=this,n=document.querySelector("head"),o=document.createElement("script");o.type="text/javascript",o.src=t;var i=function(){"function"==typeof e&&(e.call(),e=null)};o.onload=i,o.onreadystatechange=function(){"loaded"===r.readyState&&i()},n.appendChild(o)}(i,(function(){MathJax.Hub.Config(o),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",(function(t){MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.currentSlide])}))}))}}},hf=pf,vf=Plugin=Object.assign(hf(),{KaTeX:function(){var t,e={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]},r=function(t){return new Promise((function(e,r){var n=document.createElement("script");n.type="text/javascript",n.onload=e,n.onerror=r,n.src=t,document.head.append(n)}))};function n(){return(n=oo(regeneratorRuntime.mark((function t(e){var n,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=uo(e),t.prev=1,n.s();case 3:if((o=n.n()).done){t.next=9;break}return i=o.value,t.next=7,r(i);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n.e(t.t0);case 14:return t.prev=14,n.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))).apply(this,arguments)}return{id:"katex",init:function(r){var o=this,i=(t=r).getConfig().katex||{},a=ro(ro({},e),i);a.local,a.version,a.extensions;var c=ao(a,lf),u=a.local||"https://cdn.jsdelivr.net/npm/katex",f=a.local?"":"@"+a.version,s=u+f+"/dist/katex.min.css",l=u+f+"/dist/contrib/mhchem.min.js",p=u+f+"/dist/contrib/auto-render.min.js",h=[u+f+"/dist/katex.min.js"];a.extensions&&a.extensions.includes("mhchem")&&h.push(l),h.push(p);var v,d,y=function(){renderMathInElement(r.getSlidesElement(),c),t.layout()};v=s,(d=document.createElement("link")).rel="stylesheet",d.href=v,document.head.appendChild(d),function(t){return n.apply(this,arguments)}(h).then((function(){t.isReady()?y():t.on("ready",y.bind(o))}))}}},MathJax2:pf,MathJax3:function(){var t={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:function(){MathJax.startup.defaultReady(),MathJax.startup.promise.then((function(){Reveal.layout()}))}}};return{id:"mathjax3",init:function(e){var r=e.getConfig().mathjax3||{},n=ro(ro({},t),r);n.tex=ro(ro({},t.tex),r.tex),n.options=ro(ro({},n.options),t.options),n.startup=ro(ro({},t.startup),r.startup);var o=n.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";n.mathjax=null,window.MathJax=n,function(t,e){var r=document.createElement("script");r.type="text/javascript",r.id="MathJax-script",r.src=t,r.async=!0,r.onload=function(){"function"==typeof e&&(e.call(),e=null)},document.head.appendChild(r)}(o,(function(){Reveal.addEventListener("slidechanged",(function(t){MathJax.typeset()}))}))}}}});export{vf as default};
