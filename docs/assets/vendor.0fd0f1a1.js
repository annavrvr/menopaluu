var k={exports:{}},d={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var w=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;function Y(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function G(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(u){return r[u]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(u){o[u]=u}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var K=G()?Object.assign:function(e,r){for(var t,n=Y(e),o,u=1;u<arguments.length;u++){t=Object(arguments[u]);for(var f in t)J.call(t,f)&&(n[f]=t[f]);if(w){o=w(t);for(var s=0;s<o.length;s++)W.call(t,o[s])&&(n[o[s]]=t[o[s]])}}return n},g={exports:{}},i={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=K,y=60103,b=60106;i.Fragment=60107;i.StrictMode=60108;i.Profiler=60114;var C=60109,x=60110,P=60112;i.Suspense=60113;var A=60115,I=60116;if(typeof Symbol=="function"&&Symbol.for){var a=Symbol.for;y=a("react.element"),b=a("react.portal"),i.Fragment=a("react.fragment"),i.StrictMode=a("react.strict_mode"),i.Profiler=a("react.profiler"),C=a("react.provider"),x=a("react.context"),P=a("react.forward_ref"),i.Suspense=a("react.suspense"),A=a("react.memo"),I=a("react.lazy")}var F=typeof Symbol=="function"&&Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}function _(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q={};function v(e,r,t){this.props=e,this.context=r,this.refs=q,this.updater=t||L}v.prototype.isReactComponent={};v.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(_(85));this.updater.enqueueSetState(this,e,r,"setState")};v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N(){}N.prototype=v.prototype;function O(e,r,t){this.props=e,this.context=r,this.refs=q,this.updater=t||L}var S=O.prototype=new N;S.constructor=O;j(S,v.prototype);S.isPureReactComponent=!0;var E={current:null},T=Object.prototype.hasOwnProperty,U={key:!0,ref:!0,__self:!0,__source:!0};function M(e,r,t){var n,o={},u=null,f=null;if(r!=null)for(n in r.ref!==void 0&&(f=r.ref),r.key!==void 0&&(u=""+r.key),r)T.call(r,n)&&!U.hasOwnProperty(n)&&(o[n]=r[n]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var c=Array(s),l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:y,type:e,key:u,ref:f,props:o,_owner:E.current}}function X(e,r){return{$$typeof:y,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function R(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function Z(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}var D=/\/+/g;function $(e,r){return typeof e=="object"&&e!==null&&e.key!=null?Z(""+e.key):r.toString(36)}function m(e,r,t,n,o){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var f=!1;if(e===null)f=!0;else switch(u){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case y:case b:f=!0}}if(f)return f=e,o=o(f),e=n===""?"."+$(f,0):n,Array.isArray(o)?(t="",e!=null&&(t=e.replace(D,"$&/")+"/"),m(o,r,t,"",function(l){return l})):o!=null&&(R(o)&&(o=X(o,t+(!o.key||f&&f.key===o.key?"":(""+o.key).replace(D,"$&/")+"/")+e)),r.push(o)),1;if(f=0,n=n===""?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){u=e[s];var c=n+$(u,s);f+=m(u,r,t,c,o)}else if(c=Q(e),typeof c=="function")for(e=c.call(e),s=0;!(u=e.next()).done;)u=u.value,c=n+$(u,s++),f+=m(u,r,t,c,o);else if(u==="object")throw r=""+e,Error(_(31,r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r));return f}function h(e,r,t){if(e==null)return e;var n=[],o=0;return m(e,n,"","",function(u){return r.call(t,u,o++)}),n}function ee(e){if(e._status===-1){var r=e._result;r=r(),e._status=0,e._result=r,r.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}var B={current:null};function p(){var e=B.current;if(e===null)throw Error(_(321));return e}var re={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:j};i.Children={map:h,forEach:function(e,r,t){h(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return h(e,function(){r++}),r},toArray:function(e){return h(e,function(r){return r})||[]},only:function(e){if(!R(e))throw Error(_(143));return e}};i.Component=v;i.PureComponent=O;i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re;i.cloneElement=function(e,r,t){if(e==null)throw Error(_(267,e));var n=j({},e.props),o=e.key,u=e.ref,f=e._owner;if(r!=null){if(r.ref!==void 0&&(u=r.ref,f=E.current),r.key!==void 0&&(o=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in r)T.call(r,c)&&!U.hasOwnProperty(c)&&(n[c]=r[c]===void 0&&s!==void 0?s[c]:r[c])}var c=arguments.length-2;if(c===1)n.children=t;else if(1<c){s=Array(c);for(var l=0;l<c;l++)s[l]=arguments[l+2];n.children=s}return{$$typeof:y,type:e.type,key:o,ref:u,props:n,_owner:f}};i.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:x,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:C,_context:e},e.Consumer=e};i.createElement=M;i.createFactory=function(e){var r=M.bind(null,e);return r.type=e,r};i.createRef=function(){return{current:null}};i.forwardRef=function(e){return{$$typeof:P,render:e}};i.isValidElement=R;i.lazy=function(e){return{$$typeof:I,_payload:{_status:-1,_result:e},_init:ee}};i.memo=function(e,r){return{$$typeof:A,type:e,compare:r===void 0?null:r}};i.useCallback=function(e,r){return p().useCallback(e,r)};i.useContext=function(e,r){return p().useContext(e,r)};i.useDebugValue=function(){};i.useEffect=function(e,r){return p().useEffect(e,r)};i.useImperativeHandle=function(e,r,t){return p().useImperativeHandle(e,r,t)};i.useLayoutEffect=function(e,r){return p().useLayoutEffect(e,r)};i.useMemo=function(e,r){return p().useMemo(e,r)};i.useReducer=function(e,r,t){return p().useReducer(e,r,t)};i.useRef=function(e){return p().useRef(e)};i.useState=function(e){return p().useState(e)};i.version="17.0.2";g.exports=i;var fe=g.exports;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te=g.exports,H=60103;d.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var V=Symbol.for;H=V("react.element"),d.Fragment=V("react.fragment")}var ne=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oe=Object.prototype.hasOwnProperty,ue={key:!0,ref:!0,__self:!0,__source:!0};function z(e,r,t){var n,o={},u=null,f=null;t!==void 0&&(u=""+t),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(f=r.ref);for(n in r)oe.call(r,n)&&!ue.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:H,type:e,key:u,ref:f,props:o,_owner:ne.current}}d.jsx=z;d.jsxs=z;k.exports=d;var ie=k.exports;const{jsx:se,jsxs:ce,Fragment:le}=ie;async function ae(e,r,t){var n,o;const u=document.querySelectorAll(`astro-root[uid="${e}"]`),f=(o=(n=u[0].querySelector("astro-fragment"))==null?void 0:n.innerHTML)!=null?o:null,s=await t();for(const c of u)s(c,f)}export{le as F,fe as R,ce as a,K as b,se as j,ae as o,g as r};
