(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var N_={exports:{}},bu={},V_={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),TT=Symbol.for("react.portal"),ST=Symbol.for("react.fragment"),AT=Symbol.for("react.strict_mode"),PT=Symbol.for("react.profiler"),RT=Symbol.for("react.provider"),CT=Symbol.for("react.context"),kT=Symbol.for("react.forward_ref"),xT=Symbol.for("react.suspense"),DT=Symbol.for("react.memo"),NT=Symbol.for("react.lazy"),Om=Symbol.iterator;function VT(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var b_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O_=Object.assign,L_={};function ws(t,e,n){this.props=t,this.context=e,this.refs=L_,this.updater=n||b_}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M_(){}M_.prototype=ws.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=L_,this.updater=n||b_}var Gd=Kd.prototype=new M_;Gd.constructor=Kd;O_(Gd,ws.prototype);Gd.isPureReactComponent=!0;var Lm=Array.isArray,F_=Object.prototype.hasOwnProperty,Wd={current:null},U_={key:!0,ref:!0,__self:!0,__source:!0};function j_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F_.call(e,r)&&!U_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:Wd.current}}function bT(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function OT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mm=/\/+/g;function Uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?OT(""+t.key):e.toString(36)}function pl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case TT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Uc(o,0):r,Lm(i)?(n="",t!=null&&(n=t.replace(Mm,"$&/")+"/"),pl(i,e,n,"",function(c){return c})):i!=null&&(Hd(i)&&(i=bT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Uc(s,l);o+=pl(s,e,n,u,i)}else if(u=VT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Uc(s,l++),o+=pl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var r=[],i=0;return pl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},ml={transition:null},MT={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:ml,ReactCurrentOwner:Wd};function B_(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ws;ne.Fragment=ST;ne.Profiler=PT;ne.PureComponent=Kd;ne.StrictMode=AT;ne.Suspense=xT;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MT;ne.act=B_;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=O_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)F_.call(e,u)&&!U_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:CT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:RT,_context:t},t.Consumer=t};ne.createElement=j_;ne.createFactory=function(t){var e=j_.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:kT,render:t}};ne.isValidElement=Hd;ne.lazy=function(t){return{$$typeof:NT,_payload:{_status:-1,_result:t},_init:LT}};ne.memo=function(t,e){return{$$typeof:DT,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=ml.transition;ml.transition={};try{t()}finally{ml.transition=e}};ne.unstable_act=B_;ne.useCallback=function(t,e){return ut.current.useCallback(t,e)};ne.useContext=function(t){return ut.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ne.useEffect=function(t,e){return ut.current.useEffect(t,e)};ne.useId=function(){return ut.current.useId()};ne.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return ut.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ne.useRef=function(t){return ut.current.useRef(t)};ne.useState=function(t){return ut.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return ut.current.useTransition()};ne.version="18.3.1";V_.exports=ne;var H=V_.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FT=H,UT=Symbol.for("react.element"),jT=Symbol.for("react.fragment"),BT=Object.prototype.hasOwnProperty,zT=FT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$T={key:!0,ref:!0,__self:!0,__source:!0};function z_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)BT.call(e,r)&&!$T.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:UT,type:t,key:s,ref:o,props:i,_owner:zT.current}}bu.Fragment=jT;bu.jsx=z_;bu.jsxs=z_;N_.exports=bu;var B=N_.exports,$_={exports:{}},Rt={},q_={exports:{}},K_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,X){var ee=$.length;$.push(X);e:for(;0<ee;){var we=ee-1>>>1,he=$[we];if(0<i(he,X))$[we]=X,$[ee]=he,ee=we;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var X=$[0],ee=$.pop();if(ee!==X){$[0]=ee;e:for(var we=0,he=$.length,xe=he>>>1;we<xe;){var un=2*(we+1)-1,cn=$[un],hn=un+1,dn=$[hn];if(0>i(cn,ee))hn<he&&0>i(dn,cn)?($[we]=dn,$[hn]=ee,we=hn):($[we]=cn,$[un]=ee,we=un);else if(hn<he&&0>i(dn,ee))$[we]=dn,$[hn]=ee,we=hn;else break e}}return X}function i($,X){var ee=$.sortIndex-X.sortIndex;return ee!==0?ee:$.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,g=3,S=!1,R=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A($){for(var X=n(c);X!==null;){if(X.callback===null)r(c);else if(X.startTime<=$)r(c),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(c)}}function V($){if(D=!1,A($),!R)if(n(u)!==null)R=!0,Ds(M);else{var X=n(c);X!==null&&ln(V,X.startTime-$)}}function M($,X){R=!1,D&&(D=!1,w(y),y=-1),S=!0;var ee=g;try{for(A(X),p=n(u);p!==null&&(!(p.expirationTime>X)||$&&!P());){var we=p.callback;if(typeof we=="function"){p.callback=null,g=p.priorityLevel;var he=we(p.expirationTime<=X);X=t.unstable_now(),typeof he=="function"?p.callback=he:p===n(u)&&r(u),A(X)}else r(u);p=n(u)}if(p!==null)var xe=!0;else{var un=n(c);un!==null&&ln(V,un.startTime-X),xe=!1}return xe}finally{p=null,g=ee,S=!1}}var L=!1,v=null,y=-1,E=5,I=-1;function P(){return!(t.unstable_now()-I<E)}function k(){if(v!==null){var $=t.unstable_now();I=$;var X=!0;try{X=v(!0,$)}finally{X?T():(L=!1,v=null)}}else L=!1}var T;if(typeof _=="function")T=function(){_(k)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,xr=kt.port2;kt.port1.onmessage=k,T=function(){xr.postMessage(null)}}else T=function(){b(k,0)};function Ds($){v=$,L||(L=!0,T())}function ln($,X){y=b(function(){$(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){R||S||(R=!0,Ds(M))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var ee=g;g=X;try{return $()}finally{g=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,X){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var ee=g;g=$;try{return X()}finally{g=ee}},t.unstable_scheduleCallback=function($,X,ee){var we=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?we+ee:we):ee=we,$){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=ee+he,$={id:f++,callback:X,priorityLevel:$,startTime:ee,expirationTime:he,sortIndex:-1},ee>we?($.sortIndex=ee,e(c,$),n(u)===null&&$===n(c)&&(D?(w(y),y=-1):D=!0,ln(V,ee-we))):($.sortIndex=he,e(u,$),R||S||(R=!0,Ds(M))),$},t.unstable_shouldYield=P,t.unstable_wrapCallback=function($){var X=g;return function(){var ee=g;g=X;try{return $.apply(this,arguments)}finally{g=ee}}}})(K_);q_.exports=K_;var qT=q_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KT=H,St=qT;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var G_=new Set,No={};function pi(t,e){rs(t,e),rs(t+"Capture",e)}function rs(t,e){for(No[t]=e,t=0;t<e.length;t++)G_.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ih=Object.prototype.hasOwnProperty,GT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},Um={};function WT(t){return Ih.call(Um,t)?!0:Ih.call(Fm,t)?!1:GT.test(t)?Um[t]=!0:(Fm[t]=!0,!1)}function HT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QT(t,e,n,r){if(e===null||typeof e>"u"||HT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Yd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Yd);We[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Yd);We[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Yd);We[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jd(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QT(e,n,i,r)&&(n=null),r||i===null?WT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var On=KT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Oi=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Th=Symbol.for("react.profiler"),W_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),Ah=Symbol.for("react.suspense_list"),ef=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),Q_=Symbol.for("react.offscreen"),jm=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var Pe=Object.assign,jc;function io(t){if(jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);jc=e&&e[1]||""}return`
`+jc+t}var Bc=!1;function zc(t,e){if(!t||Bc)return"";Bc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Bc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function YT(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function Ph(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Oi:return"Fragment";case bi:return"Portal";case Th:return"Profiler";case Xd:return"StrictMode";case Sh:return"Suspense";case Ah:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H_:return(t.displayName||"Context")+".Consumer";case W_:return(t._context.displayName||"Context")+".Provider";case Zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ef:return e=t.displayName||null,e!==null?e:Ph(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return Ph(t(e))}catch{}}return null}function JT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ph(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XT(t){var e=Y_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ka(t){t._valueTracker||(t._valueTracker=XT(t))}function J_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Y_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rh(t,e){var n=e.checked;return Pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function X_(t,e){e=e.checked,e!=null&&Jd(t,"checked",e,!1)}function Ch(t,e){X_(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&kh(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kh(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var so=Array.isArray;function Wi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(so(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function Z_(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ev(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ev(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,tv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Vo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZT=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){ZT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function nv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function rv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var e1=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nh(t,e){if(e){if(e1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function Vh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bh=null;function tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Oh=null,Hi=null,Qi=null;function Km(t){if(t=ca(t)){if(typeof Oh!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Uu(e),Oh(t.stateNode,t.type,e))}}function iv(t){Hi?Qi?Qi.push(t):Qi=[t]:Hi=t}function sv(){if(Hi){var t=Hi,e=Qi;if(Qi=Hi=null,Km(t),e)for(t=0;t<e.length;t++)Km(e[t])}}function ov(t,e){return t(e)}function av(){}var $c=!1;function lv(t,e,n){if($c)return t(e,n);$c=!0;try{return ov(t,e,n)}finally{$c=!1,(Hi!==null||Qi!==null)&&(av(),sv())}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Lh=!1;if(Rn)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Lh=!1}function t1(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var _o=!1,$l=null,ql=!1,Mh=null,n1={onError:function(t){_o=!0,$l=t}};function r1(t,e,n,r,i,s,o,l,u){_o=!1,$l=null,t1.apply(n1,arguments)}function i1(t,e,n,r,i,s,o,l,u){if(r1.apply(this,arguments),_o){if(_o){var c=$l;_o=!1,$l=null}else throw Error(U(198));ql||(ql=!0,Mh=c)}}function mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gm(t){if(mi(t)!==t)throw Error(U(188))}function s1(t){var e=t.alternate;if(!e){if(e=mi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gm(i),t;if(s===r)return Gm(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function cv(t){return t=s1(t),t!==null?hv(t):null}function hv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hv(t);if(e!==null)return e;t=t.sibling}return null}var dv=St.unstable_scheduleCallback,Wm=St.unstable_cancelCallback,o1=St.unstable_shouldYield,a1=St.unstable_requestPaint,De=St.unstable_now,l1=St.unstable_getCurrentPriorityLevel,nf=St.unstable_ImmediatePriority,fv=St.unstable_UserBlockingPriority,Kl=St.unstable_NormalPriority,u1=St.unstable_LowPriority,pv=St.unstable_IdlePriority,Ou=null,nn=null;function c1(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Ou,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:f1,h1=Math.log,d1=Math.LN2;function f1(t){return t>>>=0,t===0?32:31-(h1(t)/d1|0)|0}var Wa=64,Ha=4194304;function oo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=oo(l):(s&=o,s!==0&&(r=oo(s)))}else o=n&~i,o!==0?r=oo(o):s!==0&&(r=oo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function p1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=p1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Fh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mv(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function g1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function rf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function gv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var yv,sf,_v,vv,Ev,Uh=!1,Qa=[],rr=null,ir=null,sr=null,Oo=new Map,Lo=new Map,Gn=[],y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function Ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&sf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _1(t,e,n,r,i){switch(e){case"focusin":return rr=Ws(rr,t,e,n,r,i),!0;case"dragenter":return ir=Ws(ir,t,e,n,r,i),!0;case"mouseover":return sr=Ws(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oo.set(s,Ws(Oo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Lo.set(s,Ws(Lo.get(s)||null,t,e,n,r,i)),!0}return!1}function wv(t){var e=qr(t.target);if(e!==null){var n=mi(e);if(n!==null){if(e=n.tag,e===13){if(e=uv(n),e!==null){t.blockedOn=e,Ev(t.priority,function(){_v(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bh=r,n.target.dispatchEvent(r),bh=null}else return e=ca(n),e!==null&&sf(e),t.blockedOn=n,!1;e.shift()}return!0}function Qm(t,e,n){gl(t)&&n.delete(e)}function v1(){Uh=!1,rr!==null&&gl(rr)&&(rr=null),ir!==null&&gl(ir)&&(ir=null),sr!==null&&gl(sr)&&(sr=null),Oo.forEach(Qm),Lo.forEach(Qm)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,Uh||(Uh=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,v1)))}function Mo(t){function e(i){return Hs(i,t)}if(0<Qa.length){Hs(Qa[0],t);for(var n=1;n<Qa.length;n++){var r=Qa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Hs(rr,t),ir!==null&&Hs(ir,t),sr!==null&&Hs(sr,t),Oo.forEach(e),Lo.forEach(e),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)wv(n),n.blockedOn===null&&Gn.shift()}var Yi=On.ReactCurrentBatchConfig,Wl=!0;function E1(t,e,n,r){var i=le,s=Yi.transition;Yi.transition=null;try{le=1,of(t,e,n,r)}finally{le=i,Yi.transition=s}}function w1(t,e,n,r){var i=le,s=Yi.transition;Yi.transition=null;try{le=4,of(t,e,n,r)}finally{le=i,Yi.transition=s}}function of(t,e,n,r){if(Wl){var i=jh(t,e,n,r);if(i===null)eh(t,e,r,Hl,n),Hm(t,r);else if(_1(i,t,e,n,r))r.stopPropagation();else if(Hm(t,r),e&4&&-1<y1.indexOf(t)){for(;i!==null;){var s=ca(i);if(s!==null&&yv(s),s=jh(t,e,n,r),s===null&&eh(t,e,r,Hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else eh(t,e,r,null,n)}}var Hl=null;function jh(t,e,n,r){if(Hl=null,t=tf(r),t=qr(t),t!==null)if(e=mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function Iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case nf:return 1;case fv:return 4;case Kl:case u1:return 16;case pv:return 536870912;default:return 16}default:return 16}}var er=null,af=null,yl=null;function Tv(){if(yl)return yl;var t,e=af,n=e.length,r,i="value"in er?er.value:er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yl=i.slice(t,1<r?1-r:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ya(){return!0}function Ym(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ya:Ym,this.isPropagationStopped=Ym,this}return Pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),e}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lf=Ct(Is),ua=Pe({},Is,{view:0,detail:0}),I1=Ct(ua),Kc,Gc,Qs,Lu=Pe({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Kc=t.screenX-Qs.screenX,Gc=t.screenY-Qs.screenY):Gc=Kc=0,Qs=t),Kc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),Jm=Ct(Lu),T1=Pe({},Lu,{dataTransfer:0}),S1=Ct(T1),A1=Pe({},ua,{relatedTarget:0}),Wc=Ct(A1),P1=Pe({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),R1=Ct(P1),C1=Pe({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k1=Ct(C1),x1=Pe({},Is,{data:0}),Xm=Ct(x1),D1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V1[t])?!!e[t]:!1}function uf(){return b1}var O1=Pe({},ua,{key:function(t){if(t.key){var e=D1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uf,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L1=Ct(O1),M1=Pe({},Lu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=Ct(M1),F1=Pe({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uf}),U1=Ct(F1),j1=Pe({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),B1=Ct(j1),z1=Pe({},Lu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$1=Ct(z1),q1=[9,13,27,32],cf=Rn&&"CompositionEvent"in window,vo=null;Rn&&"documentMode"in document&&(vo=document.documentMode);var K1=Rn&&"TextEvent"in window&&!vo,Sv=Rn&&(!cf||vo&&8<vo&&11>=vo),eg=" ",tg=!1;function Av(t,e){switch(t){case"keyup":return q1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function G1(t,e){switch(t){case"compositionend":return Pv(e);case"keypress":return e.which!==32?null:(tg=!0,eg);case"textInput":return t=e.data,t===eg&&tg?null:t;default:return null}}function W1(t,e){if(Li)return t==="compositionend"||!cf&&Av(t,e)?(t=Tv(),yl=af=er=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sv&&e.locale!=="ko"?null:e.data;default:return null}}var H1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!H1[t.type]:e==="textarea"}function Rv(t,e,n,r){iv(r),e=Ql(e,"onChange"),0<e.length&&(n=new lf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Eo=null,Fo=null;function Q1(t){Fv(t,0)}function Mu(t){var e=Ui(t);if(J_(e))return t}function Y1(t,e){if(t==="change")return e}var Cv=!1;if(Rn){var Hc;if(Rn){var Qc="oninput"in document;if(!Qc){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),Qc=typeof rg.oninput=="function"}Hc=Qc}else Hc=!1;Cv=Hc&&(!document.documentMode||9<document.documentMode)}function ig(){Eo&&(Eo.detachEvent("onpropertychange",kv),Fo=Eo=null)}function kv(t){if(t.propertyName==="value"&&Mu(Fo)){var e=[];Rv(e,Fo,t,tf(t)),lv(Q1,e)}}function J1(t,e,n){t==="focusin"?(ig(),Eo=e,Fo=n,Eo.attachEvent("onpropertychange",kv)):t==="focusout"&&ig()}function X1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(Fo)}function Z1(t,e){if(t==="click")return Mu(e)}function eS(t,e){if(t==="input"||t==="change")return Mu(e)}function tS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:tS;function Uo(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ih.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function og(t,e){var n=sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sg(n)}}function xv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Dv(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nS(t){var e=Dv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xv(n.ownerDocument.documentElement,n)){if(r!==null&&hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=og(n,s);var o=og(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rS=Rn&&"documentMode"in document&&11>=document.documentMode,Mi=null,Bh=null,wo=null,zh=!1;function ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zh||Mi==null||Mi!==zl(r)||(r=Mi,"selectionStart"in r&&hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&Uo(wo,r)||(wo=r,r=Ql(Bh,"onSelect"),0<r.length&&(e=new lf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mi)))}function Ja(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fi={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},Yc={},Nv={};Rn&&(Nv=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function Fu(t){if(Yc[t])return Yc[t];if(!Fi[t])return t;var e=Fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nv)return Yc[t]=e[n];return t}var Vv=Fu("animationend"),bv=Fu("animationiteration"),Ov=Fu("animationstart"),Lv=Fu("transitionend"),Mv=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){Mv.set(t,e),pi(e,[t])}for(var Jc=0;Jc<lg.length;Jc++){var Xc=lg[Jc],iS=Xc.toLowerCase(),sS=Xc[0].toUpperCase()+Xc.slice(1);wr(iS,"on"+sS)}wr(Vv,"onAnimationEnd");wr(bv,"onAnimationIteration");wr(Ov,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(Lv,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function ug(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,i1(r,e,void 0,t),t.currentTarget=null}function Fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ug(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ug(i,l,c),s=u}}}if(ql)throw t=Mh,ql=!1,Mh=null,t}function ge(t,e){var n=e[Wh];n===void 0&&(n=e[Wh]=new Set);var r=t+"__bubble";n.has(r)||(Uv(e,t,2,!1),n.add(r))}function Zc(t,e,n){var r=0;e&&(r|=4),Uv(n,t,r,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[Xa]){t[Xa]=!0,G_.forEach(function(n){n!=="selectionchange"&&(oS.has(n)||Zc(n,!1,t),Zc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,Zc("selectionchange",!1,e))}}function Uv(t,e,n,r){switch(Iv(e)){case 1:var i=E1;break;case 4:i=w1;break;default:i=of}n=i.bind(null,e,n,t),i=void 0,!Lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function eh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=qr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}lv(function(){var c=s,f=tf(n),p=[];e:{var g=Mv.get(t);if(g!==void 0){var S=lf,R=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":S=L1;break;case"focusin":R="focus",S=Wc;break;case"focusout":R="blur",S=Wc;break;case"beforeblur":case"afterblur":S=Wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=U1;break;case Vv:case bv:case Ov:S=R1;break;case Lv:S=B1;break;case"scroll":S=I1;break;case"wheel":S=$1;break;case"copy":case"cut":case"paste":S=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Zm}var D=(e&4)!==0,b=!D&&t==="scroll",w=D?g!==null?g+"Capture":null:g;D=[];for(var _=c,A;_!==null;){A=_;var V=A.stateNode;if(A.tag===5&&V!==null&&(A=V,w!==null&&(V=bo(_,w),V!=null&&D.push(Bo(_,V,A)))),b)break;_=_.return}0<D.length&&(g=new S(g,R,null,n,f),p.push({event:g,listeners:D}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==bh&&(R=n.relatedTarget||n.fromElement)&&(qr(R)||R[Cn]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(R=n.relatedTarget||n.toElement,S=c,R=R?qr(R):null,R!==null&&(b=mi(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(S=null,R=c),S!==R)){if(D=Jm,V="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(D=Zm,V="onPointerLeave",w="onPointerEnter",_="pointer"),b=S==null?g:Ui(S),A=R==null?g:Ui(R),g=new D(V,_+"leave",S,n,f),g.target=b,g.relatedTarget=A,V=null,qr(f)===c&&(D=new D(w,_+"enter",R,n,f),D.target=A,D.relatedTarget=b,V=D),b=V,S&&R)t:{for(D=S,w=R,_=0,A=D;A;A=Si(A))_++;for(A=0,V=w;V;V=Si(V))A++;for(;0<_-A;)D=Si(D),_--;for(;0<A-_;)w=Si(w),A--;for(;_--;){if(D===w||w!==null&&D===w.alternate)break t;D=Si(D),w=Si(w)}D=null}else D=null;S!==null&&cg(p,g,S,D,!1),R!==null&&b!==null&&cg(p,b,R,D,!0)}}e:{if(g=c?Ui(c):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var M=Y1;else if(ng(g))if(Cv)M=eS;else{M=X1;var L=J1}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=Z1);if(M&&(M=M(t,c))){Rv(p,M,n,f);break e}L&&L(t,g,c),t==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&kh(g,"number",g.value)}switch(L=c?Ui(c):window,t){case"focusin":(ng(L)||L.contentEditable==="true")&&(Mi=L,Bh=c,wo=null);break;case"focusout":wo=Bh=Mi=null;break;case"mousedown":zh=!0;break;case"contextmenu":case"mouseup":case"dragend":zh=!1,ag(p,n,f);break;case"selectionchange":if(rS)break;case"keydown":case"keyup":ag(p,n,f)}var v;if(cf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Li?Av(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Sv&&n.locale!=="ko"&&(Li||y!=="onCompositionStart"?y==="onCompositionEnd"&&Li&&(v=Tv()):(er=f,af="value"in er?er.value:er.textContent,Li=!0)),L=Ql(c,y),0<L.length&&(y=new Xm(y,t,null,n,f),p.push({event:y,listeners:L}),v?y.data=v:(v=Pv(n),v!==null&&(y.data=v)))),(v=K1?G1(t,n):W1(t,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(f=new Xm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=v))}Fv(p,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bo(t,n),s!=null&&r.unshift(Bo(t,s,i)),s=bo(t,e),s!=null&&r.push(Bo(t,s,i))),t=t.return}return r}function Si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=bo(n,s),u!=null&&o.unshift(Bo(n,u,l))):i||(u=bo(n,s),u!=null&&o.push(Bo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function hg(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(lS,"")}function Za(t,e,n){if(e=hg(e),hg(t)!==e&&n)throw Error(U(425))}function Yl(){}var $h=null,qh=null;function Kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(hS)}:Gh;function hS(t){setTimeout(function(){throw t})}function th(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ts=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Ts,zo="__reactProps$"+Ts,Cn="__reactContainer$"+Ts,Wh="__reactEvents$"+Ts,dS="__reactListeners$"+Ts,fS="__reactHandles$"+Ts;function qr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fg(t);t!==null;){if(n=t[Xt])return n;t=fg(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[Xt]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Uu(t){return t[zo]||null}var Hh=[],ji=-1;function Ir(t){return{current:t}}function ye(t){0>ji||(t.current=Hh[ji],Hh[ji]=null,ji--)}function pe(t,e){ji++,Hh[ji]=t.current,t.current=e}var yr={},tt=Ir(yr),mt=Ir(!1),Jr=yr;function is(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Jl(){ye(mt),ye(tt)}function pg(t,e,n){if(tt.current!==yr)throw Error(U(168));pe(tt,e),pe(mt,n)}function jv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,JT(t)||"Unknown",i));return Pe({},n,r)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Jr=tt.current,pe(tt,t),pe(mt,mt.current),!0}function mg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=jv(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,ye(mt),ye(tt),pe(tt,t)):ye(mt),pe(mt,n)}var yn=null,ju=!1,nh=!1;function Bv(t){yn===null?yn=[t]:yn.push(t)}function pS(t){ju=!0,Bv(t)}function Tr(){if(!nh&&yn!==null){nh=!0;var t=0,e=le;try{var n=yn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,ju=!1}catch(i){throw yn!==null&&(yn=yn.slice(t+1)),dv(nf,Tr),i}finally{le=e,nh=!1}}return null}var Bi=[],zi=0,Zl=null,eu=0,xt=[],Dt=0,Xr=null,_n=1,vn="";function Lr(t,e){Bi[zi++]=eu,Bi[zi++]=Zl,Zl=t,eu=e}function zv(t,e,n){xt[Dt++]=_n,xt[Dt++]=vn,xt[Dt++]=Xr,Xr=t;var r=_n;t=vn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-Gt(e)+i|n<<i|r,vn=s+t}else _n=1<<s|n<<i|r,vn=t}function df(t){t.return!==null&&(Lr(t,1),zv(t,1,0))}function ff(t){for(;t===Zl;)Zl=Bi[--zi],Bi[zi]=null,eu=Bi[--zi],Bi[zi]=null;for(;t===Xr;)Xr=xt[--Dt],xt[Dt]=null,vn=xt[--Dt],xt[Dt]=null,_n=xt[--Dt],xt[Dt]=null}var Tt=null,Et=null,ve=!1,Kt=null;function $v(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Et=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:_n,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Et=null,!0):!1;default:return!1}}function Qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yh(t){if(ve){var e=Et;if(e){var n=e;if(!gg(t,e)){if(Qh(t))throw Error(U(418));e=or(n.nextSibling);var r=Tt;e&&gg(t,e)?$v(r,n):(t.flags=t.flags&-4097|2,ve=!1,Tt=t)}}else{if(Qh(t))throw Error(U(418));t.flags=t.flags&-4097|2,ve=!1,Tt=t}}}function yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function el(t){if(t!==Tt)return!1;if(!ve)return yg(t),ve=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kh(t.type,t.memoizedProps)),e&&(e=Et)){if(Qh(t))throw qv(),Error(U(418));for(;e;)$v(t,e),e=or(e.nextSibling)}if(yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=Tt?or(t.stateNode.nextSibling):null;return!0}function qv(){for(var t=Et;t;)t=or(t.nextSibling)}function ss(){Et=Tt=null,ve=!1}function pf(t){Kt===null?Kt=[t]:Kt.push(t)}var mS=On.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function tl(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _g(t){var e=t._init;return e(t._payload)}function Kv(t){function e(w,_){if(t){var A=w.deletions;A===null?(w.deletions=[_],w.flags|=16):A.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=cr(w,_),w.index=0,w.sibling=null,w}function s(w,_,A){return w.index=A,t?(A=w.alternate,A!==null?(A=A.index,A<_?(w.flags|=2,_):A):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,A,V){return _===null||_.tag!==6?(_=uh(A,w.mode,V),_.return=w,_):(_=i(_,A),_.return=w,_)}function u(w,_,A,V){var M=A.type;return M===Oi?f(w,_,A.props.children,V,A.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===qn&&_g(M)===_.type)?(V=i(_,A.props),V.ref=Ys(w,_,A),V.return=w,V):(V=Al(A.type,A.key,A.props,null,w.mode,V),V.ref=Ys(w,_,A),V.return=w,V)}function c(w,_,A,V){return _===null||_.tag!==4||_.stateNode.containerInfo!==A.containerInfo||_.stateNode.implementation!==A.implementation?(_=ch(A,w.mode,V),_.return=w,_):(_=i(_,A.children||[]),_.return=w,_)}function f(w,_,A,V,M){return _===null||_.tag!==7?(_=Hr(A,w.mode,V,M),_.return=w,_):(_=i(_,A),_.return=w,_)}function p(w,_,A){if(typeof _=="string"&&_!==""||typeof _=="number")return _=uh(""+_,w.mode,A),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case qa:return A=Al(_.type,_.key,_.props,null,w.mode,A),A.ref=Ys(w,null,_),A.return=w,A;case bi:return _=ch(_,w.mode,A),_.return=w,_;case qn:var V=_._init;return p(w,V(_._payload),A)}if(so(_)||Ks(_))return _=Hr(_,w.mode,A,null),_.return=w,_;tl(w,_)}return null}function g(w,_,A,V){var M=_!==null?_.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return M!==null?null:l(w,_,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case qa:return A.key===M?u(w,_,A,V):null;case bi:return A.key===M?c(w,_,A,V):null;case qn:return M=A._init,g(w,_,M(A._payload),V)}if(so(A)||Ks(A))return M!==null?null:f(w,_,A,V,null);tl(w,A)}return null}function S(w,_,A,V,M){if(typeof V=="string"&&V!==""||typeof V=="number")return w=w.get(A)||null,l(_,w,""+V,M);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case qa:return w=w.get(V.key===null?A:V.key)||null,u(_,w,V,M);case bi:return w=w.get(V.key===null?A:V.key)||null,c(_,w,V,M);case qn:var L=V._init;return S(w,_,A,L(V._payload),M)}if(so(V)||Ks(V))return w=w.get(A)||null,f(_,w,V,M,null);tl(_,V)}return null}function R(w,_,A,V){for(var M=null,L=null,v=_,y=_=0,E=null;v!==null&&y<A.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var I=g(w,v,A[y],V);if(I===null){v===null&&(v=E);break}t&&v&&I.alternate===null&&e(w,v),_=s(I,_,y),L===null?M=I:L.sibling=I,L=I,v=E}if(y===A.length)return n(w,v),ve&&Lr(w,y),M;if(v===null){for(;y<A.length;y++)v=p(w,A[y],V),v!==null&&(_=s(v,_,y),L===null?M=v:L.sibling=v,L=v);return ve&&Lr(w,y),M}for(v=r(w,v);y<A.length;y++)E=S(v,w,y,A[y],V),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?y:E.key),_=s(E,_,y),L===null?M=E:L.sibling=E,L=E);return t&&v.forEach(function(P){return e(w,P)}),ve&&Lr(w,y),M}function D(w,_,A,V){var M=Ks(A);if(typeof M!="function")throw Error(U(150));if(A=M.call(A),A==null)throw Error(U(151));for(var L=M=null,v=_,y=_=0,E=null,I=A.next();v!==null&&!I.done;y++,I=A.next()){v.index>y?(E=v,v=null):E=v.sibling;var P=g(w,v,I.value,V);if(P===null){v===null&&(v=E);break}t&&v&&P.alternate===null&&e(w,v),_=s(P,_,y),L===null?M=P:L.sibling=P,L=P,v=E}if(I.done)return n(w,v),ve&&Lr(w,y),M;if(v===null){for(;!I.done;y++,I=A.next())I=p(w,I.value,V),I!==null&&(_=s(I,_,y),L===null?M=I:L.sibling=I,L=I);return ve&&Lr(w,y),M}for(v=r(w,v);!I.done;y++,I=A.next())I=S(v,w,y,I.value,V),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?y:I.key),_=s(I,_,y),L===null?M=I:L.sibling=I,L=I);return t&&v.forEach(function(k){return e(w,k)}),ve&&Lr(w,y),M}function b(w,_,A,V){if(typeof A=="object"&&A!==null&&A.type===Oi&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case qa:e:{for(var M=A.key,L=_;L!==null;){if(L.key===M){if(M=A.type,M===Oi){if(L.tag===7){n(w,L.sibling),_=i(L,A.props.children),_.return=w,w=_;break e}}else if(L.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===qn&&_g(M)===L.type){n(w,L.sibling),_=i(L,A.props),_.ref=Ys(w,L,A),_.return=w,w=_;break e}n(w,L);break}else e(w,L);L=L.sibling}A.type===Oi?(_=Hr(A.props.children,w.mode,V,A.key),_.return=w,w=_):(V=Al(A.type,A.key,A.props,null,w.mode,V),V.ref=Ys(w,_,A),V.return=w,w=V)}return o(w);case bi:e:{for(L=A.key;_!==null;){if(_.key===L)if(_.tag===4&&_.stateNode.containerInfo===A.containerInfo&&_.stateNode.implementation===A.implementation){n(w,_.sibling),_=i(_,A.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=ch(A,w.mode,V),_.return=w,w=_}return o(w);case qn:return L=A._init,b(w,_,L(A._payload),V)}if(so(A))return R(w,_,A,V);if(Ks(A))return D(w,_,A,V);tl(w,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,A),_.return=w,w=_):(n(w,_),_=uh(A,w.mode,V),_.return=w,w=_),o(w)):n(w,_)}return b}var os=Kv(!0),Gv=Kv(!1),tu=Ir(null),nu=null,$i=null,mf=null;function gf(){mf=$i=nu=null}function yf(t){var e=tu.current;ye(tu),t._currentValue=e}function Jh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ji(t,e){nu=t,mf=$i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(mf!==t)if(t={context:t,memoizedValue:e,next:null},$i===null){if(nu===null)throw Error(U(308));$i=t,nu.dependencies={lanes:0,firstContext:t}}else $i=$i.next=t;return e}var Kr=null;function _f(t){Kr===null?Kr=[t]:Kr.push(t)}function Wv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_f(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kn=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,_f(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}function vg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var i=t.updateQueue;Kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,D=l;switch(g=e,S=n,D.tag){case 1:if(R=D.payload,typeof R=="function"){p=R.call(S,p,g);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=D.payload,g=typeof R=="function"?R.call(S,p,g):R,g==null)break e;p=Pe({},p,g);break e;case 2:Kn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=S,u=p):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=p}}function Eg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ha={},rn=Ir(ha),$o=Ir(ha),qo=Ir(ha);function Gr(t){if(t===ha)throw Error(U(174));return t}function Ef(t,e){switch(pe(qo,e),pe($o,t),pe(rn,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dh(e,t)}ye(rn),pe(rn,e)}function as(){ye(rn),ye($o),ye(qo)}function Qv(t){Gr(qo.current);var e=Gr(rn.current),n=Dh(e,t.type);e!==n&&(pe($o,t),pe(rn,n))}function wf(t){$o.current===t&&(ye(rn),ye($o))}var Ie=Ir(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rh=[];function If(){for(var t=0;t<rh.length;t++)rh[t]._workInProgressVersionPrimary=null;rh.length=0}var El=On.ReactCurrentDispatcher,ih=On.ReactCurrentBatchConfig,Zr=0,Se=null,Oe=null,je=null,su=!1,Io=!1,Ko=0,gS=0;function Je(){throw Error(U(321))}function Tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function Sf(t,e,n,r,i,s){if(Zr=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,El.current=t===null||t.memoizedState===null?ES:wS,t=n(r,i),Io){s=0;do{if(Io=!1,Ko=0,25<=s)throw Error(U(301));s+=1,je=Oe=null,e.updateQueue=null,El.current=IS,t=n(r,i)}while(Io)}if(El.current=ou,e=Oe!==null&&Oe.next!==null,Zr=0,je=Oe=Se=null,su=!1,e)throw Error(U(300));return t}function Af(){var t=Ko!==0;return Ko=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Se.memoizedState=je=t:je=je.next=t,je}function jt(){if(Oe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=je===null?Se.memoizedState:je.next;if(e!==null)je=e,Oe=t;else{if(t===null)throw Error(U(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},je===null?Se.memoizedState=je=t:je=je.next=t}return je}function Go(t,e){return typeof e=="function"?e(t):e}function sh(t){var e=jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((Zr&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Se.lanes|=f,ei|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Ht(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function oh(t){var e=jt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Yv(){}function Jv(t,e){var n=Se,r=jt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,Pf(e0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Wo(9,Zv.bind(null,n,r,i,e),void 0,null),Be===null)throw Error(U(349));Zr&30||Xv(n,e,i)}return i}function Xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zv(t,e,n,r){e.value=n,e.getSnapshot=r,t0(e)&&n0(t)}function e0(t,e,n){return n(function(){t0(e)&&n0(t)})}function t0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function n0(t){var e=kn(t,1);e!==null&&Wt(e,t,1,-1)}function wg(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=vS.bind(null,Se,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function r0(){return jt().memoizedState}function wl(t,e,n,r){var i=Jt();Se.flags|=t,i.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function Bu(t,e,n,r){var i=jt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Tf(r,o.deps)){i.memoizedState=Wo(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Wo(1|e,n,s,r)}function Ig(t,e){return wl(8390656,8,t,e)}function Pf(t,e){return Bu(2048,8,t,e)}function i0(t,e){return Bu(4,2,t,e)}function s0(t,e){return Bu(4,4,t,e)}function o0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a0(t,e,n){return n=n!=null?n.concat([t]):null,Bu(4,4,o0.bind(null,e,t),n)}function Rf(){}function l0(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function u0(t,e){var n=jt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Tf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function c0(t,e,n){return Zr&21?(Ht(n,e)||(n=mv(),Se.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function yS(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=ih.transition;ih.transition={};try{t(!1),e()}finally{le=n,ih.transition=r}}function h0(){return jt().memoizedState}function _S(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},d0(t))f0(e,n);else if(n=Wv(t,e,n,r),n!==null){var i=ot();Wt(n,t,r,i),p0(n,e,r)}}function vS(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(d0(t))f0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,o)){var u=e.interleaved;u===null?(i.next=i,_f(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Wv(t,e,i,r),n!==null&&(i=ot(),Wt(n,t,r,i),p0(n,e,r))}}function d0(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function f0(t,e){Io=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,rf(t,n)}}var ou={readContext:Ut,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},ES={readContext:Ut,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Ig,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wl(4194308,4,o0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return wl(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_S.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:wg,useDebugValue:Rf,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=wg(!1),e=t[0];return t=yS.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=Jt();if(ve){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Be===null)throw Error(U(349));Zr&30||Xv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ig(e0.bind(null,r,s,t),[t]),r.flags|=2048,Wo(9,Zv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jt(),e=Be.identifierPrefix;if(ve){var n=vn,r=_n;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},wS={readContext:Ut,useCallback:l0,useContext:Ut,useEffect:Pf,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:u0,useReducer:sh,useRef:r0,useState:function(){return sh(Go)},useDebugValue:Rf,useDeferredValue:function(t){var e=jt();return c0(e,Oe.memoizedState,t)},useTransition:function(){var t=sh(Go)[0],e=jt().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Jv,useId:h0,unstable_isNewReconciler:!1},IS={readContext:Ut,useCallback:l0,useContext:Ut,useEffect:Pf,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:s0,useMemo:u0,useReducer:oh,useRef:r0,useState:function(){return oh(Go)},useDebugValue:Rf,useDeferredValue:function(t){var e=jt();return Oe===null?e.memoizedState=t:c0(e,Oe.memoizedState,t)},useTransition:function(){var t=oh(Go)[0],e=jt().memoizedState;return[t,e]},useMutableSource:Yv,useSyncExternalStore:Jv,useId:h0,unstable_isNewReconciler:!1};function $t(t,e){if(t&&t.defaultProps){e=Pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var zu={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=ur(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Wt(e,t,i,r),vl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=ur(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Wt(e,t,i,r),vl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=ur(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Wt(e,t,r,n),vl(e,t,r))}};function Tg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Uo(n,r)||!Uo(i,s):!0}function m0(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=gt(e)?Jr:tt.current,r=e.contextTypes,s=(r=r!=null)?is(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=zu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&zu.enqueueReplaceState(e,e.state,null)}function Zh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},vf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=gt(e)?Jr:tt.current,i.context=is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&zu.enqueueReplaceState(i,i.state,null),ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ls(t,e){try{var n="",r=e;do n+=YT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ah(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TS=typeof WeakMap=="function"?WeakMap:Map;function g0(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,cd=r),ed(t,e)},n}function y0(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ed(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ag(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new TS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=MS.bind(null,t,e,n),e.then(t,t))}function Pg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var SS=On.ReactCurrentOwner,pt=!1;function it(t,e,n,r){e.child=t===null?Gv(e,null,n,r):os(e,t.child,n,r)}function Cg(t,e,n,r,i){n=n.render;var s=e.ref;return Ji(e,i),r=Sf(t,e,n,r,s,i),n=Af(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(ve&&n&&df(e),e.flags|=1,it(t,e,r,i),e.child)}function kg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_0(t,e,s,r,i)):(t=Al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function _0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Uo(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return td(t,e,n,r,i)}function v0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Ki,vt),vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(Ki,vt),vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(Ki,vt),vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(Ki,vt),vt|=r;return it(t,e,i,n),e.child}function E0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,r,i){var s=gt(n)?Jr:tt.current;return s=is(e,s),Ji(e,i),n=Sf(t,e,n,r,s,i),r=Af(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(ve&&r&&df(e),e.flags|=1,it(t,e,n,i),e.child)}function xg(t,e,n,r,i){if(gt(n)){var s=!0;Xl(e)}else s=!1;if(Ji(e,i),e.stateNode===null)Il(t,e),m0(e,n,r),Zh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ut(c):(c=gt(n)?Jr:tt.current,c=is(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Sg(e,o,r,c),Kn=!1;var g=e.memoizedState;o.state=g,ru(e,r,o,i),u=e.memoizedState,l!==r||g!==u||mt.current||Kn?(typeof f=="function"&&(Xh(e,n,f,r),u=e.memoizedState),(l=Kn||Tg(e,n,l,r,g,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Hv(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:$t(e.type,l),o.props=c,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ut(u):(u=gt(n)?Jr:tt.current,u=is(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Sg(e,o,r,u),Kn=!1,g=e.memoizedState,o.state=g,ru(e,r,o,i);var R=e.memoizedState;l!==p||g!==R||mt.current||Kn?(typeof S=="function"&&(Xh(e,n,S,r),R=e.memoizedState),(c=Kn||Tg(e,n,c,r,g,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return nd(t,e,n,r,s,i)}function nd(t,e,n,r,i,s){E0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mg(e,n,!1),xn(t,e,s);r=e.stateNode,SS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=os(e,t.child,null,s),e.child=os(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&mg(e,n,!0),e.child}function w0(t){var e=t.stateNode;e.pendingContext?pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pg(t,e.context,!1),Ef(t,e.containerInfo)}function Dg(t,e,n,r,i){return ss(),pf(i),e.flags|=256,it(t,e,n,r),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function id(t){return{baseLanes:t,cachePool:null,transitions:null}}function I0(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ie,i&1),t===null)return Yh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ku(o,r,0,null),t=Hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=id(n),e.memoizedState=rd,t):Cf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return AS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rd,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cf(t,e){return e=Ku({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function nl(t,e,n,r){return r!==null&&pf(r),os(e,t.child,null,n),t=Cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ah(Error(U(422))),nl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ku({mode:"visible",children:r.children},i,0,null),s=Hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&os(e,t.child,null,o),e.child.memoizedState=id(o),e.memoizedState=rd,s);if(!(e.mode&1))return nl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=ah(s,r,void 0),nl(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),Wt(r,t,i,-1))}return bf(),r=ah(Error(U(421))),nl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=FS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=or(i.nextSibling),Tt=e,ve=!0,Kt=null,t!==null&&(xt[Dt++]=_n,xt[Dt++]=vn,xt[Dt++]=Xr,_n=t.id,vn=t.overflow,Xr=e),e=Cf(e,r.children),e.flags|=4096,e)}function Ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Jh(t.return,e,n)}function lh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function T0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ng(t,n,e);else if(t.tag===19)Ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),lh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}lh(e,!0,n,null,s);break;case"together":lh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function PS(t,e,n){switch(e.tag){case 3:w0(e),ss();break;case 5:Qv(e);break;case 1:gt(e.type)&&Xl(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?I0(t,e,n):(pe(Ie,Ie.current&1),t=xn(t,e,n),t!==null?t.sibling:null);pe(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return T0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,v0(t,e,n)}return xn(t,e,n)}var S0,sd,A0,P0;S0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};A0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Gr(rn.current);var s=null;switch(n){case"input":i=Rh(t,i),r=Rh(t,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=xh(t,i),r=xh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Yl)}Nh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(No.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(No.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ge("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};P0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Js(t,e){if(!ve)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RS(t,e,n){var r=e.pendingProps;switch(ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return gt(e.type)&&Jl(),Xe(e),null;case 3:return r=e.stateNode,as(),ye(mt),ye(tt),If(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(el(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(fd(Kt),Kt=null))),sd(t,e),Xe(e),null;case 5:wf(e);var i=Gr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)A0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Xe(e),null}if(t=Gr(rn.current),el(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[zo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<ao.length;i++)ge(ao[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":Bm(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":$m(r,s),ge("invalid",r)}Nh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Za(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Za(r.textContent,l,t),i=["children",""+l]):No.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":Ka(r),zm(r,s,!0);break;case"textarea":Ka(r),qm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Yl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ev(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[zo]=r,S0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vh(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<ao.length;i++)ge(ao[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":Bm(t,r),i=Rh(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),ge("invalid",t);break;case"textarea":$m(t,r),i=xh(t,r),ge("invalid",t);break;default:i=r}Nh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?rv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&tv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vo(t,u):typeof u=="number"&&Vo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ge("scroll",t):u!=null&&Jd(t,s,u,o))}switch(n){case"input":Ka(t),zm(t,r,!1);break;case"textarea":Ka(t),qm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Wi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)P0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Gr(qo.current),Gr(rn.current),el(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Xe(e),null;case 13:if(ye(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ve&&Et!==null&&e.mode&1&&!(e.flags&128))qv(),ss(),e.flags|=98560,s=!1;else if(s=el(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Xt]=e}else ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Kt!==null&&(fd(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Le===0&&(Le=3):bf())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return as(),sd(t,e),t===null&&jo(e.stateNode.containerInfo),Xe(e),null;case 10:return yf(e.type._context),Xe(e),null;case 17:return gt(e.type)&&Jl(),Xe(e),null;case 19:if(ye(Ie),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Js(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,Js(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&De()>us&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ve)return Xe(e),null}else 2*De()-s.renderingStartTime>us&&n!==1073741824&&(e.flags|=128,r=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=De(),e.sibling=null,n=Ie.current,pe(Ie,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Vf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?vt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function CS(t,e){switch(ff(e),e.tag){case 1:return gt(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return as(),ye(mt),ye(tt),If(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(ye(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(Ie),null;case 4:return as(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Vf(),null;case 24:return null;default:return null}}var rl=!1,et=!1,kS=typeof WeakSet=="function"?WeakSet:Set,q=null;function qi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function od(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Vg=!1;function xS(t,e){if($h=Wl,t=Dv(),hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,g=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)g=p,p=S;for(;;){if(p===t)break t;if(g===n&&++c===i&&(l=o),g===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(qh={focusedElem:t,selectionRange:n},Wl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var D=R.memoizedProps,b=R.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?D:$t(e.type,D),b);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(V){Ce(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return R=Vg,Vg=!1,R}function To(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&od(e,n,s)}i=i.next}while(i!==r)}}function $u(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function R0(t){var e=t.alternate;e!==null&&(t.alternate=null,R0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[zo],delete e[Wh],delete e[dS],delete e[fS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C0(t){return t.tag===5||t.tag===3||t.tag===4}function bg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yl));else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var $e=null,qt=!1;function jn(t,e,n){for(n=n.child;n!==null;)k0(t,e,n),n=n.sibling}function k0(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Ou,n)}catch{}switch(n.tag){case 5:et||qi(n,e);case 6:var r=$e,i=qt;$e=null,jn(t,e,n),$e=r,qt=i,$e!==null&&(qt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(qt?(t=$e,n=n.stateNode,t.nodeType===8?th(t.parentNode,n):t.nodeType===1&&th(t,n),Mo(t)):th($e,n.stateNode));break;case 4:r=$e,i=qt,$e=n.stateNode.containerInfo,qt=!0,jn(t,e,n),$e=r,qt=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&od(n,e,o),i=i.next}while(i!==r)}jn(t,e,n);break;case 1:if(!et&&(qi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}jn(t,e,n);break;case 21:jn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,jn(t,e,n),et=r):jn(t,e,n);break;default:jn(t,e,n)}}function Og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kS),e.forEach(function(r){var i=US.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,qt=!1;break e;case 3:$e=l.stateNode.containerInfo,qt=!0;break e;case 4:$e=l.stateNode.containerInfo,qt=!0;break e}l=l.return}if($e===null)throw Error(U(160));k0(s,o,i),$e=null,qt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)x0(e,t),e=e.sibling}function x0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),Yt(t),r&4){try{To(3,t,t.return),$u(3,t)}catch(D){Ce(t,t.return,D)}try{To(5,t,t.return)}catch(D){Ce(t,t.return,D)}}break;case 1:zt(e,t),Yt(t),r&512&&n!==null&&qi(n,n.return);break;case 5:if(zt(e,t),Yt(t),r&512&&n!==null&&qi(n,n.return),t.flags&32){var i=t.stateNode;try{Vo(i,"")}catch(D){Ce(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&X_(i,s),Vh(l,o);var c=Vh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?rv(i,p):f==="dangerouslySetInnerHTML"?tv(i,p):f==="children"?Vo(i,p):Jd(i,f,p,c)}switch(l){case"input":Ch(i,s);break;case"textarea":Z_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Wi(i,!!s.multiple,S,!1):g!==!!s.multiple&&(s.defaultValue!=null?Wi(i,!!s.multiple,s.defaultValue,!0):Wi(i,!!s.multiple,s.multiple?[]:"",!1))}i[zo]=s}catch(D){Ce(t,t.return,D)}}break;case 6:if(zt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ce(t,t.return,D)}}break;case 3:if(zt(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(D){Ce(t,t.return,D)}break;case 4:zt(e,t),Yt(t);break;case 13:zt(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Df=De())),r&4&&Og(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(et=(c=et)||f,zt(e,t),et=c):zt(e,t),Yt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(p=q=f;q!==null;){switch(g=q,S=g.child,g.tag){case 0:case 11:case 14:case 15:To(4,g,g.return);break;case 1:qi(g,g.return);var R=g.stateNode;if(typeof R.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(D){Ce(r,n,D)}}break;case 5:qi(g,g.return);break;case 22:if(g.memoizedState!==null){Mg(p);continue}}S!==null?(S.return=g,q=S):Mg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=nv("display",o))}catch(D){Ce(t,t.return,D)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(D){Ce(t,t.return,D)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zt(e,t),Yt(t),r&4&&Og(t);break;case 21:break;default:zt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Vo(i,""),r.flags&=-33);var s=bg(t);ud(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=bg(t);ld(t,l,o);break;default:throw Error(U(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DS(t,e,n){q=t,D0(t)}function D0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||rl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=rl;var c=et;if(rl=o,(et=u)&&!c)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Fg(i):u!==null?(u.return=o,q=u):Fg(i);for(;s!==null;)q=s,D0(s),s=s.sibling;q=i,rl=l,et=c}Lg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Lg(t)}}function Lg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||$u(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:$t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Eg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Eg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Mo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}et||e.flags&512&&ad(e)}catch(g){Ce(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Mg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Fg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$u(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{ad(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{ad(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var NS=Math.ceil,au=On.ReactCurrentDispatcher,kf=On.ReactCurrentOwner,Lt=On.ReactCurrentBatchConfig,oe=0,Be=null,Ve=null,Ge=0,vt=0,Ki=Ir(0),Le=0,Ho=null,ei=0,qu=0,xf=0,So=null,dt=null,Df=0,us=1/0,gn=null,lu=!1,cd=null,lr=null,il=!1,tr=null,uu=0,Ao=0,hd=null,Tl=-1,Sl=0;function ot(){return oe&6?De():Tl!==-1?Tl:Tl=De()}function ur(t){return t.mode&1?oe&2&&Ge!==0?Ge&-Ge:mS.transition!==null?(Sl===0&&(Sl=mv()),Sl):(t=le,t!==0||(t=window.event,t=t===void 0?16:Iv(t.type)),t):1}function Wt(t,e,n,r){if(50<Ao)throw Ao=0,hd=null,Error(U(185));la(t,n,r),(!(oe&2)||t!==Be)&&(t===Be&&(!(oe&2)&&(qu|=n),Le===4&&Wn(t,Ge)),yt(t,r),n===1&&oe===0&&!(e.mode&1)&&(us=De()+500,ju&&Tr()))}function yt(t,e){var n=t.callbackNode;m1(t,e);var r=Gl(t,t===Be?Ge:0);if(r===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?pS(Ug.bind(null,t)):Bv(Ug.bind(null,t)),cS(function(){!(oe&6)&&Tr()}),n=null;else{switch(gv(r)){case 1:n=nf;break;case 4:n=fv;break;case 16:n=Kl;break;case 536870912:n=pv;break;default:n=Kl}n=U0(n,N0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function N0(t,e){if(Tl=-1,Sl=0,oe&6)throw Error(U(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=Gl(t,t===Be?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var i=oe;oe|=2;var s=b0();(Be!==t||Ge!==e)&&(gn=null,us=De()+500,Wr(t,e));do try{OS();break}catch(l){V0(t,l)}while(!0);gf(),au.current=s,oe=i,Ve!==null?e=0:(Be=null,Ge=0,e=Le)}if(e!==0){if(e===2&&(i=Fh(t),i!==0&&(r=i,e=dd(t,i))),e===1)throw n=Ho,Wr(t,0),Wn(t,r),yt(t,De()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!VS(i)&&(e=cu(t,r),e===2&&(s=Fh(t),s!==0&&(r=s,e=dd(t,s))),e===1))throw n=Ho,Wr(t,0),Wn(t,r),yt(t,De()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Mr(t,dt,gn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=Df+500-De(),10<e)){if(Gl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gh(Mr.bind(null,t,dt,gn),e);break}Mr(t,dt,gn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=De()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NS(r/1960))-r,10<r){t.timeoutHandle=Gh(Mr.bind(null,t,dt,gn),r);break}Mr(t,dt,gn);break;case 5:Mr(t,dt,gn);break;default:throw Error(U(329))}}}return yt(t,De()),t.callbackNode===n?N0.bind(null,t):null}function dd(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=cu(t,e),t!==2&&(e=dt,dt=n,e!==null&&fd(e)),t}function fd(t){dt===null?dt=t:dt.push.apply(dt,t)}function VS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~xf,e&=~qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function Ug(t){if(oe&6)throw Error(U(327));Xi();var e=Gl(t,0);if(!(e&1))return yt(t,De()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=Fh(t);r!==0&&(e=r,n=dd(t,r))}if(n===1)throw n=Ho,Wr(t,0),Wn(t,e),yt(t,De()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,dt,gn),yt(t,De()),null}function Nf(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(us=De()+500,ju&&Tr())}}function ti(t){tr!==null&&tr.tag===0&&!(oe&6)&&Xi();var e=oe;oe|=1;var n=Lt.transition,r=le;try{if(Lt.transition=null,le=1,t)return t()}finally{le=r,Lt.transition=n,oe=e,!(oe&6)&&Tr()}}function Vf(){vt=Ki.current,ye(Ki)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uS(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(ff(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:as(),ye(mt),ye(tt),If();break;case 5:wf(r);break;case 4:as();break;case 13:ye(Ie);break;case 19:ye(Ie);break;case 10:yf(r.type._context);break;case 22:case 23:Vf()}n=n.return}if(Be=t,Ve=t=cr(t.current,null),Ge=vt=e,Le=0,Ho=null,xf=qu=ei=0,dt=So=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kr=null}return t}function V0(t,e){do{var n=Ve;try{if(gf(),El.current=ou,su){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}su=!1}if(Zr=0,je=Oe=Se=null,Io=!1,Ko=0,kf.current=null,n===null||n.return===null){Le=1,Ho=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Pg(o);if(S!==null){S.flags&=-257,Rg(S,o,l,s,e),S.mode&1&&Ag(s,c,e),e=S,u=c;var R=e.updateQueue;if(R===null){var D=new Set;D.add(u),e.updateQueue=D}else R.add(u);break e}else{if(!(e&1)){Ag(s,c,e),bf();break e}u=Error(U(426))}}else if(ve&&l.mode&1){var b=Pg(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Rg(b,o,l,s,e),pf(ls(u,l));break e}}s=u=ls(u,l),Le!==4&&(Le=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=g0(s,u,e);vg(s,w);break e;case 1:l=u;var _=s.type,A=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(lr===null||!lr.has(A)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=y0(s,l,e);vg(s,V);break e}}s=s.return}while(s!==null)}L0(n)}catch(M){e=M,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function b0(){var t=au.current;return au.current=ou,t===null?ou:t}function bf(){(Le===0||Le===3||Le===2)&&(Le=4),Be===null||!(ei&268435455)&&!(qu&268435455)||Wn(Be,Ge)}function cu(t,e){var n=oe;oe|=2;var r=b0();(Be!==t||Ge!==e)&&(gn=null,Wr(t,e));do try{bS();break}catch(i){V0(t,i)}while(!0);if(gf(),oe=n,au.current=r,Ve!==null)throw Error(U(261));return Be=null,Ge=0,Le}function bS(){for(;Ve!==null;)O0(Ve)}function OS(){for(;Ve!==null&&!o1();)O0(Ve)}function O0(t){var e=F0(t.alternate,t,vt);t.memoizedProps=t.pendingProps,e===null?L0(t):Ve=e,kf.current=null}function L0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CS(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ve=null;return}}else if(n=RS(n,e,vt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Le===0&&(Le=5)}function Mr(t,e,n){var r=le,i=Lt.transition;try{Lt.transition=null,le=1,LS(t,e,n,r)}finally{Lt.transition=i,le=r}return null}function LS(t,e,n,r){do Xi();while(tr!==null);if(oe&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(g1(t,s),t===Be&&(Ve=Be=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||il||(il=!0,U0(Kl,function(){return Xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=le;le=1;var l=oe;oe|=4,kf.current=null,xS(t,n),x0(n,t),nS(qh),Wl=!!$h,qh=$h=null,t.current=n,DS(n),a1(),oe=l,le=o,Lt.transition=s}else t.current=n;if(il&&(il=!1,tr=t,uu=i),s=t.pendingLanes,s===0&&(lr=null),c1(n.stateNode),yt(t,De()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lu)throw lu=!1,t=cd,cd=null,t;return uu&1&&t.tag!==0&&Xi(),s=t.pendingLanes,s&1?t===hd?Ao++:(Ao=0,hd=t):Ao=0,Tr(),null}function Xi(){if(tr!==null){var t=gv(uu),e=Lt.transition,n=le;try{if(Lt.transition=null,le=16>t?16:t,tr===null)var r=!1;else{if(t=tr,tr=null,uu=0,oe&6)throw Error(U(331));var i=oe;for(oe|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(q=c;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:To(8,f,s)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var g=f.sibling,S=f.return;if(R0(f),f===c){q=null;break}if(g!==null){g.return=S,q=g;break}q=S}}}var R=s.alternate;if(R!==null){var D=R.child;if(D!==null){R.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,q=w;break e}q=s.return}}var _=t.current;for(q=_;q!==null;){o=q;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,q=A;else e:for(o=_;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$u(9,l)}}catch(M){Ce(l,l.return,M)}if(l===o){q=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,q=V;break e}q=l.return}}if(oe=i,Tr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Ou,t)}catch{}r=!0}return r}finally{le=n,Lt.transition=e}}return!1}function jg(t,e,n){e=ls(n,e),e=g0(t,e,1),t=ar(t,e,1),e=ot(),t!==null&&(la(t,1,e),yt(t,e))}function Ce(t,e,n){if(t.tag===3)jg(t,t,n);else for(;e!==null;){if(e.tag===3){jg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=ls(n,t),t=y0(e,t,1),e=ar(e,t,1),t=ot(),e!==null&&(la(e,1,t),yt(e,t));break}}e=e.return}}function MS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Be===t&&(Ge&n)===n&&(Le===4||Le===3&&(Ge&130023424)===Ge&&500>De()-Df?Wr(t,0):xf|=n),yt(t,e)}function M0(t,e){e===0&&(t.mode&1?(e=Ha,Ha<<=1,!(Ha&130023424)&&(Ha=4194304)):e=1);var n=ot();t=kn(t,e),t!==null&&(la(t,e,n),yt(t,n))}function FS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),M0(t,n)}function US(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),M0(t,n)}var F0;F0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,PS(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ve&&e.flags&1048576&&zv(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Il(t,e),t=e.pendingProps;var i=is(e,tt.current);Ji(e,n),i=Sf(null,e,r,t,i,n);var s=Af();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,Xl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vf(e),i.updater=zu,e.stateNode=i,i._reactInternals=e,Zh(e,r,t,n),e=nd(null,e,r,!0,s,n)):(e.tag=0,ve&&s&&df(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BS(r),t=$t(r,t),i){case 0:e=td(null,e,r,t,n);break e;case 1:e=xg(null,e,r,t,n);break e;case 11:e=Cg(null,e,r,t,n);break e;case 14:e=kg(null,e,r,$t(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),td(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),xg(t,e,r,i,n);case 3:e:{if(w0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Hv(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ls(Error(U(423)),e),e=Dg(t,e,r,n,i);break e}else if(r!==i){i=ls(Error(U(424)),e),e=Dg(t,e,r,n,i);break e}else for(Et=or(e.stateNode.containerInfo.firstChild),Tt=e,ve=!0,Kt=null,n=Gv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),r===i){e=xn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return Qv(e),t===null&&Yh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Kh(r,i)?o=null:s!==null&&Kh(r,s)&&(e.flags|=32),E0(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Yh(e),null;case 13:return I0(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=os(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Cg(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(tu,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!mt.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Sn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Jh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Jh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ji(e,n),i=Ut(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=$t(r,e.pendingProps),i=$t(r.type,i),kg(t,e,r,i,n);case 15:return _0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:$t(r,i),Il(t,e),e.tag=1,gt(r)?(t=!0,Xl(e)):t=!1,Ji(e,n),m0(e,r,i),Zh(e,r,i,n),nd(null,e,r,!0,t,n);case 19:return T0(t,e,n);case 22:return v0(t,e,n)}throw Error(U(156,e.tag))};function U0(t,e){return dv(t,e)}function jS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new jS(t,e,n,r)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BS(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zd)return 11;if(t===ef)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Oi:return Hr(n.children,i,s,e);case Xd:o=8,i|=8;break;case Th:return t=Nt(12,n,e,i|2),t.elementType=Th,t.lanes=s,t;case Sh:return t=Nt(13,n,e,i),t.elementType=Sh,t.lanes=s,t;case Ah:return t=Nt(19,n,e,i),t.elementType=Ah,t.lanes=s,t;case Q_:return Ku(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W_:o=10;break e;case H_:o=9;break e;case Zd:o=11;break e;case ef:o=14;break e;case qn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function Ku(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Q_,t.lanes=n,t.stateNode={isHidden:!1},t}function uh(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function ch(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qc(0),this.expirationTimes=qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lf(t,e,n,r,i,s,o,l,u){return t=new zS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(s),t}function $S(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function j0(t){if(!t)return yr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(gt(n))return jv(t,n,e)}return e}function B0(t,e,n,r,i,s,o,l,u){return t=Lf(n,r,!0,t,i,s,o,l,u),t.context=j0(null),n=t.current,r=ot(),i=ur(n),s=Sn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,la(t,i,r),yt(t,r),t}function Gu(t,e,n,r){var i=e.current,s=ot(),o=ur(i);return n=j0(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Wt(t,i,o,s),vl(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mf(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function qS(){return null}var z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ff(t){this._internalRoot=t}Wu.prototype.render=Ff.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Gu(t,e,null,null)};Wu.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){Gu(null,t,null,null)}),e[Cn]=null}};function Wu(t){this._internalRoot=t}Wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=vv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gn.length&&e!==0&&e<Gn[n].priority;n++);Gn.splice(n,0,t),n===0&&wv(t)}};function Uf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function KS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=hu(o);s.call(c)}}var o=B0(e,r,t,0,null,!1,!1,"",zg);return t._reactRootContainer=o,t[Cn]=o.current,jo(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=hu(u);l.call(c)}}var u=Lf(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=u,t[Cn]=u.current,jo(t.nodeType===8?t.parentNode:t),ti(function(){Gu(e,u,n,r)}),u}function Qu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=hu(o);l.call(u)}}Gu(e,o,t,i)}else o=KS(n,e,t,i,r);return hu(o)}yv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oo(e.pendingLanes);n!==0&&(rf(e,n|1),yt(e,De()),!(oe&6)&&(us=De()+500,Tr()))}break;case 13:ti(function(){var r=kn(t,1);if(r!==null){var i=ot();Wt(r,t,1,i)}}),Mf(t,1)}};sf=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=ot();Wt(e,t,134217728,n)}Mf(t,134217728)}};_v=function(t){if(t.tag===13){var e=ur(t),n=kn(t,e);if(n!==null){var r=ot();Wt(n,t,e,r)}Mf(t,e)}};vv=function(){return le};Ev=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Oh=function(t,e,n){switch(e){case"input":if(Ch(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uu(r);if(!i)throw Error(U(90));J_(r),Ch(r,i)}}}break;case"textarea":Z_(t,n);break;case"select":e=n.value,e!=null&&Wi(t,!!n.multiple,e,!1)}};ov=Nf;av=ti;var GS={usingClientEntryPoint:!1,Events:[ca,Ui,Uu,iv,sv,Nf]},Xs={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},WS={bundleType:Xs.bundleType,version:Xs.version,rendererPackageName:Xs.rendererPackageName,rendererConfig:Xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:On.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=cv(t),t===null?null:t.stateNode},findFiberByHostInstance:Xs.findFiberByHostInstance||qS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{Ou=sl.inject(WS),nn=sl}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(e))throw Error(U(200));return $S(t,e,null,n)};Rt.createRoot=function(t,e){if(!Uf(t))throw Error(U(299));var n=!1,r="",i=z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Lf(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,jo(t.nodeType===8?t.parentNode:t),new Ff(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=cv(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return ti(t)};Rt.hydrate=function(t,e,n){if(!Hu(e))throw Error(U(200));return Qu(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Uf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=z0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=B0(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wu(e)};Rt.render=function(t,e,n){if(!Hu(e))throw Error(U(200));return Qu(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Hu(t))throw Error(U(40));return t._reactRootContainer?(ti(function(){Qu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Nf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hu(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Qu(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function $0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)}catch(t){console.error(t)}}$0(),$_.exports=Rt;var HS=$_.exports,q0,$g=HS;q0=$g.createRoot,$g.hydrateRoot;let QS={data:""},YS=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||QS,JS=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,XS=/\/\*[^]*?\*\/|  +/g,qg=/\n+/g,Hn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Hn(o,s):s+"{"+Hn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Hn(o,e?e.replace(/([^,])+/g,l=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Hn.p?Hn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},mn={},K0=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+K0(t[n]);return e}return t},ZS=(t,e,n,r,i)=>{let s=K0(t),o=mn[s]||(mn[s]=(u=>{let c=0,f=11;for(;c<u.length;)f=101*f+u.charCodeAt(c++)>>>0;return"go"+f})(s));if(!mn[o]){let u=s!==t?t:(c=>{let f,p,g=[{}];for(;f=JS.exec(c.replace(XS,""));)f[4]?g.shift():f[3]?(p=f[3].replace(qg," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][f[1]]=f[2].replace(qg," ").trim();return g[0]})(t);mn[o]=Hn(i?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&mn.g?mn.g:null;return n&&(mn.g=mn[o]),((u,c,f,p)=>{p?c.data=c.data.replace(p,u):c.data.indexOf(u)===-1&&(c.data=f?u+c.data:c.data+u)})(mn[o],e,r,l),o},eA=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Hn(l,""):l===!1?"":l}return r+i+(o??"")},"");function Yu(t){let e=this||{},n=t.call?t(e.p):t;return ZS(n.unshift?n.raw?eA(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,YS(e.target),e.g,e.o,e.k)}let G0,pd,md;Yu.bind({g:1});let Dn=Yu.bind({k:1});function tA(t,e,n,r){Hn.p=e,G0=t,pd=n,md=r}function Sr(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let l=Object.assign({},s),u=l.className||i.className;n.p=Object.assign({theme:pd&&pd()},l),n.o=/ *go\d+/.test(u),l.className=Yu.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=l.as||t,delete l.as),md&&c[0]&&md(l),G0(c,l)}return i}}var nA=t=>typeof t=="function",du=(t,e)=>nA(t)?t(e):t,rA=(()=>{let t=0;return()=>(++t).toString()})(),W0=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),iA=20,Pl=new Map,sA=1e3,Kg=t=>{if(Pl.has(t))return;let e=setTimeout(()=>{Pl.delete(t),gi({type:4,toastId:t})},sA);Pl.set(t,e)},oA=t=>{let e=Pl.get(t);e&&clearTimeout(e)},gd=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,iA)};case 1:return e.toast.id&&oA(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?gd(t,{type:1,toast:n}):gd(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?Kg(r):t.toasts.forEach(s=>{Kg(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},Rl=[],Cl={toasts:[],pausedAt:void 0},gi=t=>{Cl=gd(Cl,t),Rl.forEach(e=>{e(Cl)})},aA={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},lA=(t={})=>{let[e,n]=H.useState(Cl);H.useEffect(()=>(Rl.push(n),()=>{let i=Rl.indexOf(n);i>-1&&Rl.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||aA[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},uA=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||rA()}),da=t=>(e,n)=>{let r=uA(e,t,n);return gi({type:2,toast:r}),r.id},Vt=(t,e)=>da("blank")(t,e);Vt.error=da("error");Vt.success=da("success");Vt.loading=da("loading");Vt.custom=da("custom");Vt.dismiss=t=>{gi({type:3,toastId:t})};Vt.remove=t=>gi({type:4,toastId:t});Vt.promise=(t,e,n)=>{let r=Vt.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(Vt.success(du(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{Vt.error(du(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var cA=(t,e)=>{gi({type:1,toast:{id:t,height:e}})},hA=()=>{gi({type:5,time:Date.now()})},dA=t=>{let{toasts:e,pausedAt:n}=lA(t);H.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(l=>{if(l.duration===1/0)return;let u=(l.duration||0)+l.pauseDuration-(s-l.createdAt);if(u<0){l.visible&&Vt.dismiss(l.id);return}return setTimeout(()=>Vt.dismiss(l.id),u)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[e,n]);let r=H.useCallback(()=>{n&&gi({type:6,time:Date.now()})},[n]),i=H.useCallback((s,o)=>{let{reverseOrder:l=!1,gutter:u=8,defaultPosition:c}=o||{},f=e.filter(S=>(S.position||c)===(s.position||c)&&S.height),p=f.findIndex(S=>S.id===s.id),g=f.filter((S,R)=>R<p&&S.visible).length;return f.filter(S=>S.visible).slice(...l?[g+1]:[0,g]).reduce((S,R)=>S+(R.height||0)+u,0)},[e]);return{toasts:e,handlers:{updateHeight:cA,startPause:hA,endPause:r,calculateOffset:i}}},fA=Dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,pA=Dn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,mA=Dn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,gA=Sr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${pA} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${mA} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,yA=Dn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,_A=Sr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${yA} 1s linear infinite;
`,vA=Dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,EA=Dn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,wA=Sr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vA} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${EA} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,IA=Sr("div")`
  position: absolute;
`,TA=Sr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,SA=Dn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,AA=Sr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${SA} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,PA=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?H.createElement(AA,null,e):e:n==="blank"?null:H.createElement(TA,null,H.createElement(_A,{...r}),n!=="loading"&&H.createElement(IA,null,n==="error"?H.createElement(gA,{...r}):H.createElement(wA,{...r})))},RA=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,CA=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,kA="0%{opacity:0;} 100%{opacity:1;}",xA="0%{opacity:1;} 100%{opacity:0;}",DA=Sr("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,NA=Sr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,VA=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=W0()?[kA,xA]:[RA(n),CA(n)];return{animation:e?`${Dn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Dn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},bA=H.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?VA(t.position||e||"top-center",t.visible):{opacity:0},s=H.createElement(PA,{toast:t}),o=H.createElement(NA,{...t.ariaProps},du(t.message,t));return H.createElement(DA,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):H.createElement(H.Fragment,null,s,o))});tA(H.createElement);var OA=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=H.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return H.createElement("div",{ref:s,className:e,style:n},i)},LA=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:W0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},MA=Yu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ol=16,FA=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:l,handlers:u}=dA(n);return H.createElement("div",{style:{position:"fixed",zIndex:9999,top:ol,left:ol,right:ol,bottom:ol,pointerEvents:"none",...s},className:o,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(c=>{let f=c.position||e,p=u.calculateOffset(c,{reverseOrder:t,gutter:r,defaultPosition:e}),g=LA(f,p);return H.createElement(OA,{id:c.id,key:c.id,onHeightUpdate:u.updateHeight,className:c.visible?MA:"",style:g},c.type==="custom"?du(c.message,c):i?i(c):H.createElement(bA,{toast:c,position:f}))}))},Gg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},UA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Q0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,S=c&63;u||(S=64,o||(g=64)),r.push(n[f],n[p],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(H0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):UA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new jA;const g=s<<2|l>>4;if(r.push(g),c!==64){const S=l<<4&240|c>>2;if(r.push(S),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BA=function(t){const e=H0(t);return Q0.encodeByteArray(e,!0)},fu=function(t){return BA(t).replace(/\./g,"")},Y0=function(t){try{return Q0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=()=>zA().__FIREBASE_DEFAULTS__,qA=()=>{if(typeof process>"u"||typeof Gg>"u")return;const t=Gg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Y0(t[1]);return e&&JSON.parse(e)},Ju=()=>{try{return $A()||qA()||KA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},J0=t=>{var e,n;return(n=(e=Ju())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},GA=t=>{const e=J0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},X0=()=>{var t;return(t=Ju())===null||t===void 0?void 0:t.config},Z0=t=>{var e;return(e=Ju())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fu(JSON.stringify(n)),fu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function YA(){var t;const e=(t=Ju())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function JA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eP(){const t=Me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eE(){return!YA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tE(){try{return typeof indexedDB=="object"}catch{return!1}}function tP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nP,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?rP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,l,r)}}function rP(t,e){return t.replace(iP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iP=/\{\$([^}]+)}/g;function sP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wg(s)&&Wg(o)){if(!pu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function uo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oP(t,e){const n=new aP(t,e);return n.subscribe.bind(n)}class aP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hh),i.error===void 0&&(i.error=hh),i.complete===void 0&&(i.complete=hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t){return t&&t._delegate?t._delegate:t}class ni{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new WA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hP(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cP(t){return t===Fr?void 0:t}function hP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const fP={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},pP=re.INFO,mP={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},gP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jf{constructor(e){this.name=e,this._logLevel=pP,this._logHandler=gP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const yP=(t,e)=>e.some(n=>t instanceof n);let Hg,Qg;function _P(){return Hg||(Hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vP(){return Qg||(Qg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nE=new WeakMap,yd=new WeakMap,rE=new WeakMap,dh=new WeakMap,Bf=new WeakMap;function EP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nE.set(n,t)}).catch(()=>{}),Bf.set(e,t),e}function wP(t){if(yd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});yd.set(t,e)}let _d={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IP(t){_d=t(_d)}function TP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fh(this),e,...n);return rE.set(r,e.sort?e.sort():[e]),hr(r)}:vP().includes(t)?function(...e){return t.apply(fh(this),e),hr(nE.get(this))}:function(...e){return hr(t.apply(fh(this),e))}}function SP(t){return typeof t=="function"?TP(t):(t instanceof IDBTransaction&&wP(t),yP(t,_P())?new Proxy(t,_d):t)}function hr(t){if(t instanceof IDBRequest)return EP(t);if(dh.has(t))return dh.get(t);const e=SP(t);return e!==t&&(dh.set(t,e),Bf.set(e,t)),e}const fh=t=>Bf.get(t);function AP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const PP=["get","getKey","getAll","getAllKeys","count"],RP=["put","add","delete","clear"],ph=new Map;function Yg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ph.get(e))return ph.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=RP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return ph.set(e,s),s}IP(t=>({...t,get:(e,n,r)=>Yg(e,n)||t.get(e,n,r),has:(e,n)=>!!Yg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vd="@firebase/app",Jg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new jf("@firebase/app"),xP="@firebase/app-compat",DP="@firebase/analytics-compat",NP="@firebase/analytics",VP="@firebase/app-check-compat",bP="@firebase/app-check",OP="@firebase/auth",LP="@firebase/auth-compat",MP="@firebase/database",FP="@firebase/data-connect",UP="@firebase/database-compat",jP="@firebase/functions",BP="@firebase/functions-compat",zP="@firebase/installations",$P="@firebase/installations-compat",qP="@firebase/messaging",KP="@firebase/messaging-compat",GP="@firebase/performance",WP="@firebase/performance-compat",HP="@firebase/remote-config",QP="@firebase/remote-config-compat",YP="@firebase/storage",JP="@firebase/storage-compat",XP="@firebase/firestore",ZP="@firebase/vertexai-preview",eR="@firebase/firestore-compat",tR="firebase",nR="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="[DEFAULT]",rR={[vd]:"fire-core",[xP]:"fire-core-compat",[NP]:"fire-analytics",[DP]:"fire-analytics-compat",[bP]:"fire-app-check",[VP]:"fire-app-check-compat",[OP]:"fire-auth",[LP]:"fire-auth-compat",[MP]:"fire-rtdb",[FP]:"fire-data-connect",[UP]:"fire-rtdb-compat",[jP]:"fire-fn",[BP]:"fire-fn-compat",[zP]:"fire-iid",[$P]:"fire-iid-compat",[qP]:"fire-fcm",[KP]:"fire-fcm-compat",[GP]:"fire-perf",[WP]:"fire-perf-compat",[HP]:"fire-rc",[QP]:"fire-rc-compat",[YP]:"fire-gcs",[JP]:"fire-gcs-compat",[XP]:"fire-fst",[eR]:"fire-fst-compat",[ZP]:"fire-vertex","fire-js":"fire-js",[tR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Map,iR=new Map,wd=new Map;function Xg(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cs(t){const e=t.name;if(wd.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;wd.set(e,t);for(const n of mu.values())Xg(n,t);for(const n of iR.values())Xg(n,t);return!0}function zf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new fa("app","Firebase",sR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=nR;function iE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ed,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=X0()),!n)throw dr.create("no-options");const s=mu.get(i);if(s){if(pu(n,s.options)&&pu(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new dP(i);for(const u of wd.values())o.addComponent(u);const l=new oR(n,r,o);return mu.set(i,l),l}function sE(t=Ed){const e=mu.get(t);if(!e&&t===Ed&&X0())return iE();if(!e)throw dr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let i=(r=rR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(l.join(" "));return}cs(new ni(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="firebase-heartbeat-database",lR=1,Qo="firebase-heartbeat-store";let mh=null;function oE(){return mh||(mh=AP(aR,lR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qo)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),mh}async function uR(t){try{const n=(await oE()).transaction(Qo),r=await n.objectStore(Qo).get(aE(t));return await n.done,r}catch(e){if(e instanceof Ln)Nn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function Zg(t,e){try{const r=(await oE()).transaction(Qo,"readwrite");await r.objectStore(Qo).put(e,aE(t)),await r.done}catch(n){if(n instanceof Ln)Nn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function aE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=1024,hR=30*24*60*60*1e3;class dR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ey();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=hR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ey(),{heartbeatsToSend:r,unsentEntries:i}=fR(this._heartbeatsCache.heartbeats),s=fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Nn.warn(n),""}}}function ey(){return new Date().toISOString().substring(0,10)}function fR(t,e=cR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ty(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ty(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tE()?tP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ty(t){return fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t){cs(new ni("platform-logger",e=>new CP(e),"PRIVATE")),cs(new ni("heartbeat",e=>new dR(e),"PRIVATE")),fr(vd,Jg,t),fr(vd,Jg,"esm2017"),fr("fire-js","")}mR("");function $f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gR=lE,uE=new fa("auth","Firebase",lE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new jf("@firebase/auth");function yR(t,...e){gu.logLevel<=re.WARN&&gu.warn(`Auth (${Ss}): ${t}`,...e)}function kl(t,...e){gu.logLevel<=re.ERROR&&gu.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw qf(t,...e)}function sn(t,...e){return qf(t,...e)}function cE(t,e,n){const r=Object.assign(Object.assign({},gR()),{[e]:n});return new fa("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return cE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uE.create(t,...e)}function Y(t,e,...n){if(!t)throw qf(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw kl(e),new Error(e)}function Vn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _R(){return ny()==="http:"||ny()==="https:"}function ny(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_R()||XA()||"connection"in navigator)?navigator.onLine:!0}function ER(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=QA()||ZA()}get(){return vR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new ma(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pr(t,e,n,r,i={}){return dE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=pa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return JA()||(c.referrerPolicy="no-referrer"),hE.fetch()(fE(t,t.config.apiHost,n,l),c)})}async function dE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wR),e);try{const i=new SR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw al(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw al(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw al(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw al(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw cE(t,f,c);Qt(t,f)}}catch(i){if(i instanceof Ln)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function ga(t,e,n,r,i={}){const s=await Pr(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function fE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Kf(t.config,i):`${t.config.apiScheme}://${i}`}function TR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class SR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),IR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=sn(t,e,r);return i.customData._tokenResponse=n,i}function ry(t){return t!==void 0&&t.enterprise!==void 0}class AR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return TR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function PR(t,e){return Pr(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(t,e){return Pr(t,"POST","/v1/accounts:delete",e)}async function pE(t,e){return Pr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CR(t,e=!1){const n=At(t),r=await n.getIdToken(e),i=Gf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Po(gh(i.auth_time)),issuedAtTime:Po(gh(i.iat)),expirationTime:Po(gh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gh(t){return Number(t)*1e3}function Gf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return kl("JWT malformed, contained fewer than 3 sections"),null;try{const i=Y0(n);return i?JSON.parse(i):(kl("Failed to decode base64 JWT payload"),null)}catch(i){return kl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function iy(t){const e=Gf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&kR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function kR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Po(this.lastLoginAt),this.creationTime=Po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Yo(t,pE(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?mE(s.providerUserInfo):[],l=NR(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Td(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function DR(t){const e=At(t);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mE(t){return t.map(e=>{var{providerId:n}=e,r=$f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(t,e){const n=await dE(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=fE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",hE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bR(t,e){return Pr(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):iy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=iy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await VR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Td(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Yo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CR(this,e)}reload(){return DR(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Yo(this,RR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,S=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,b=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:A,emailVerified:V,isAnonymous:M,providerData:L,stsTokenManager:v}=n;Y(A&&v,e,"internal-error");const y=Zi.fromJSON(this.name,v);Y(typeof A=="string",e,"internal-error"),Bn(p,e.name),Bn(g,e.name),Y(typeof V=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),Bn(S,e.name),Bn(R,e.name),Bn(D,e.name),Bn(b,e.name),Bn(w,e.name),Bn(_,e.name);const E=new wn({uid:A,auth:e,email:g,emailVerified:V,displayName:p,isAnonymous:M,photoURL:R,phoneNumber:S,tenantId:D,stsTokenManager:y,createdAt:w,lastLoginAt:_});return L&&Array.isArray(L)&&(E.providerData=L.map(I=>Object.assign({},I))),b&&(E._redirectEventId=b),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zi;i.updateFromServerResponse(n);const s=new wn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?mE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Zi;l.updateFromIdToken(r);const u=new wn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Td(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy=new Map;function In(t){Vn(t instanceof Function,"Expected a class definition");let e=sy.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gE.type="NONE";const oy=gE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xl(this.userKey,i.apiKey,s),this.fullPersistenceKey=xl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(In(oy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||In(oy);const o=xl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=wn._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new es(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new es(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(EE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(IE(e))return"Blackberry";if(TE(e))return"Webos";if(_E(e))return"Safari";if((e.includes("chrome/")||vE(e))&&!e.includes("edge/"))return"Chrome";if(wE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yE(t=Me()){return/firefox\//i.test(t)}function _E(t=Me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vE(t=Me()){return/crios\//i.test(t)}function EE(t=Me()){return/iemobile/i.test(t)}function wE(t=Me()){return/android/i.test(t)}function IE(t=Me()){return/blackberry/i.test(t)}function TE(t=Me()){return/webos/i.test(t)}function Wf(t=Me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OR(t=Me()){var e;return Wf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LR(){return eP()&&document.documentMode===10}function SE(t=Me()){return Wf(t)||wE(t)||TE(t)||IE(t)||/windows phone/i.test(t)||EE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(t,e=[]){let n;switch(t){case"Browser":n=ay(Me());break;case"Worker":n=`${ay(Me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(t,e={}){return Pr(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=6;class jR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ly(this),this.idTokenSubscription=new ly(this),this.beforeStateQueue=new MR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pE(this,{idToken:e}),r=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ER()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(An(this));const n=e?At(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await FR(this),n=new jR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await bR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(t){return At(t)}class ly{constructor(e){this.auth=e,this.observer=null,this.addObserver=oP(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zR(t){Xu=t}function PE(t){return Xu.loadJS(t)}function $R(){return Xu.recaptchaEnterpriseScript}function qR(){return Xu.gapiScript}function KR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const GR="recaptcha-enterprise",WR="NO_RECAPTCHA";class HR{constructor(e){this.type=GR,this.auth=yi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{PR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new AR(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;ry(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(WR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&ry(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=$R();u.length!==0&&(u+=l),PE(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function uy(t,e,n,r=!1){const i=new HR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Sd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await uy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await uy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t,e){const n=zf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(pu(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function YR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JR(t,e,n){const r=yi(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=RE(e),{host:o,port:l}=XR(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),ZR()}function RE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XR(t){const e=RE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:cy(o)}}}function cy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ZR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function eC(t,e){return Pr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e){return ga(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function rC(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Hf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sd(e,n,"signInWithPassword",tC);case"emailLink":return nC(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Sd(e,r,"signUpPassword",eC);case"emailLink":return rC(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t,e){return ga(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="http://localhost";class ri extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$f(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:iC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oC(t){const e=lo(uo(t)).link,n=e?lo(uo(e)).deep_link_id:null,r=lo(uo(t)).deep_link_id;return(r?lo(uo(r)).link:null)||r||n||e||t}class Qf{constructor(e){var n,r,i,s,o,l;const u=lo(uo(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=sC((i=u.mode)!==null&&i!==void 0?i:null);Y(c&&f&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=oC(e);try{return new Qf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return Jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qf.parseLink(n);return Y(r,"argument-error"),Jo._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends CE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ya{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends ya{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends ya{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e){return ga(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wn._fromIdTokenResponse(e,r,i),o=hy(r);return new ii({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=hy(r);return new ii({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function hy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends Ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new _u(e,n,r,i)}}function kE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,s,e,r):s})}async function lC(t,e,n=!1){const r=await Yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ii._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=await Yo(t,kE(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=Gf(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),ii._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE(t,e,n=!1){if(Zt(t.app))return Promise.reject(An(t));const r="signIn",i=await kE(t,r,e),s=await ii._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cC(t,e){return xE(yi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(t){const e=yi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function hC(t,e,n){if(Zt(t.app))return Promise.reject(An(t));const r=yi(t),o=await Sd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aC).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&DE(t),u}),l=await ii._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function dC(t,e,n){return Zt(t.app)?Promise.reject(An(t)):cC(At(t),As.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&DE(t),r})}function fC(t,e,n,r){return At(t).onIdTokenChanged(e,n,r)}function pC(t,e,n){return At(t).beforeAuthStateChanged(e,n)}function NE(t,e,n,r){return At(t).onAuthStateChanged(e,n,r)}const vu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vu,"1"),this.storage.removeItem(vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=1e3,gC=10;class bE extends VE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=SE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);LR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},mC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bE.type="LOCAL";const yC=bE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends VE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OE.type="SESSION";const LE=OE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await _C(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Yf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function EC(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function wC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TC(){return ME()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="firebaseLocalStorageDb",SC=1,Eu="firebaseLocalStorage",UE="fbase_key";class _a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ec(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function AC(){const t=indexedDB.deleteDatabase(FE);return new _a(t).toPromise()}function Ad(){const t=indexedDB.open(FE,SC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eu,{keyPath:UE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eu)?e(r):(r.close(),await AC(),e(await Ad()))})})}async function dy(t,e,n){const r=ec(t,!0).put({[UE]:e,value:n});return new _a(r).toPromise()}async function PC(t,e){const n=ec(t,!1).get(e),r=await new _a(n).toPromise();return r===void 0?null:r.value}function fy(t,e){const n=ec(t,!0).delete(e);return new _a(n).toPromise()}const RC=800,CC=3;class jE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ad(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>CC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ME()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zu._getInstance(TC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wC(),!this.activeServiceWorker)return;this.sender=new vC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ad();return await dy(e,vu,"1"),await fy(e,vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>dy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>PC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ec(i,!1).getAll();return new _a(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jE.type="LOCAL";const kC=jE;new ma(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t,e){return e?In(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends Hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DC(t){return xE(t.auth,new Jf(t),t.bypassAuthState)}function NC(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),uC(n,new Jf(t),t.bypassAuthState)}async function VC(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),lC(n,new Jf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DC;case"linkViaPopup":case"linkViaRedirect":return VC;case"reauthViaPopup":case"reauthViaRedirect":return NC;default:Qt(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new ma(2e3,1e4);class Gi extends BE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bC.get())};e()}}Gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC="pendingRedirect",Dl=new Map;class LC extends BE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Dl.get(this.auth._key());if(!e){try{const r=await MC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Dl.set(this.auth._key(),e)}return this.bypassAuthState||Dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MC(t,e){const n=jC(e),r=UC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function FC(t,e){Dl.set(t._key(),e)}function UC(t){return In(t._redirectPersistence)}function jC(t){return xl(OC,t.config.apiKey,t.name)}async function BC(t,e,n=!1){if(Zt(t.app))return Promise.reject(An(t));const r=yi(t),i=xC(r,e),o=await new LC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=10*60*1e3;class $C{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zC&&this.cachedEventUids.clear(),this.cachedEventUids.has(py(e))}saveEventToCache(e){this.cachedEventUids.add(py(e)),this.lastProcessedEventTime=Date.now()}}function py(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KC(t,e={}){return Pr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WC=/^https?/;async function HC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KC(t);for(const n of e)try{if(QC(n))return}catch{}Qt(t,"unauthorized-domain")}function QC(t){const e=Id(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!WC.test(n))return!1;if(GC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new ma(3e4,6e4);function my(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JC(t){return new Promise((e,n)=>{var r,i,s;function o(){my(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{my(),n(sn(t,"network-request-failed"))},timeout:YC.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const l=KR("iframefcb");return on()[l]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},PE(`${qR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Nl=null,e})}let Nl=null;function XC(t){return Nl=Nl||JC(t),Nl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=new ma(5e3,15e3),ek="__/auth/iframe",tk="emulator/auth/iframe",nk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ik(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kf(e,tk):`https://${t.config.authDomain}/${ek}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},i=rk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pa(r).slice(1)}`}async function sk(t){const e=await XC(t),n=on().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:ik(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{s(o)},ZC.get());function u(){on().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ak=500,lk=600,uk="_blank",ck="http://localhost";class gy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hk(t,e,n,r=ak,i=lk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},ok),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Me().toLowerCase();n&&(l=vE(c)?uk:n),yE(c)&&(e=e||ck,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,R])=>`${g}${S}=${R},`,"");if(OR(c)&&l!=="_self")return dk(e||"",l),new gy(null);const p=window.open(e||"",l,f);Y(p,t,"popup-blocked");try{p.focus()}catch{}return new gy(p)}function dk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="__/auth/handler",pk="emulator/auth/handler",mk=encodeURIComponent("fac");async function yy(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:i};if(e instanceof CE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",sP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof ya){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${mk}=${encodeURIComponent(u)}`:"";return`${gk(t)}?${pa(l).slice(1)}${c}`}function gk({config:t}){return t.emulator?Kf(t,pk):`https://${t.authDomain}/${fk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="webStorageSupport";class yk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LE,this._completeRedirectFn=BC,this._overrideRedirectResult=FC}async _openPopup(e,n,r,i){var s;Vn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yy(e,n,r,Id(),i);return hk(e,o,Yf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yy(e,n,r,Id(),i);return EC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sk(e),r=new $C(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yh,{type:yh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yh];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return SE()||_E()||Wf()}}const _k=yk;var _y="@firebase/auth",vy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wk(t){cs(new ni("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AE(t)},c=new BR(r,i,s,u);return YR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cs(new ni("auth-internal",e=>{const n=yi(e.getProvider("auth").getImmediate());return(r=>new vk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(_y,vy,Ek(t)),fr(_y,vy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=5*60,Tk=Z0("authIdTokenMaxAge")||Ik;let Ey=null;const Sk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Tk)return;const i=n==null?void 0:n.token;Ey!==i&&(Ey=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ak(t=sE()){const e=zf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=QR(t,{popupRedirectResolver:_k,persistence:[kC,yC,LE]}),r=Z0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Sk(s.toString());pC(n,o,()=>o(n.currentUser)),fC(n,l=>o(l))}}const i=J0("auth");return i&&JR(n,`http://${i}`),n}function Pk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Pk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wk("Browser");var Rk="firebase",Ck="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(Rk,Ck,"app");var wy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,$E;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,y){function E(){}E.prototype=y.prototype,v.D=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.C=function(I,P,k){for(var T=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)T[kt-2]=arguments[kt];return y.prototype[P].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,y,E){E||(E=0);var I=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)I[P]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(P=0;16>P;++P)I[P]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],P=v.g[2];var k=v.g[3],T=y+(k^E&(P^k))+I[0]+3614090360&4294967295;y=E+(T<<7&4294967295|T>>>25),T=k+(P^y&(E^P))+I[1]+3905402710&4294967295,k=y+(T<<12&4294967295|T>>>20),T=P+(E^k&(y^E))+I[2]+606105819&4294967295,P=k+(T<<17&4294967295|T>>>15),T=E+(y^P&(k^y))+I[3]+3250441966&4294967295,E=P+(T<<22&4294967295|T>>>10),T=y+(k^E&(P^k))+I[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=k+(P^y&(E^P))+I[5]+1200080426&4294967295,k=y+(T<<12&4294967295|T>>>20),T=P+(E^k&(y^E))+I[6]+2821735955&4294967295,P=k+(T<<17&4294967295|T>>>15),T=E+(y^P&(k^y))+I[7]+4249261313&4294967295,E=P+(T<<22&4294967295|T>>>10),T=y+(k^E&(P^k))+I[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=k+(P^y&(E^P))+I[9]+2336552879&4294967295,k=y+(T<<12&4294967295|T>>>20),T=P+(E^k&(y^E))+I[10]+4294925233&4294967295,P=k+(T<<17&4294967295|T>>>15),T=E+(y^P&(k^y))+I[11]+2304563134&4294967295,E=P+(T<<22&4294967295|T>>>10),T=y+(k^E&(P^k))+I[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=k+(P^y&(E^P))+I[13]+4254626195&4294967295,k=y+(T<<12&4294967295|T>>>20),T=P+(E^k&(y^E))+I[14]+2792965006&4294967295,P=k+(T<<17&4294967295|T>>>15),T=E+(y^P&(k^y))+I[15]+1236535329&4294967295,E=P+(T<<22&4294967295|T>>>10),T=y+(P^k&(E^P))+I[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=k+(E^P&(y^E))+I[6]+3225465664&4294967295,k=y+(T<<9&4294967295|T>>>23),T=P+(y^E&(k^y))+I[11]+643717713&4294967295,P=k+(T<<14&4294967295|T>>>18),T=E+(k^y&(P^k))+I[0]+3921069994&4294967295,E=P+(T<<20&4294967295|T>>>12),T=y+(P^k&(E^P))+I[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=k+(E^P&(y^E))+I[10]+38016083&4294967295,k=y+(T<<9&4294967295|T>>>23),T=P+(y^E&(k^y))+I[15]+3634488961&4294967295,P=k+(T<<14&4294967295|T>>>18),T=E+(k^y&(P^k))+I[4]+3889429448&4294967295,E=P+(T<<20&4294967295|T>>>12),T=y+(P^k&(E^P))+I[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=k+(E^P&(y^E))+I[14]+3275163606&4294967295,k=y+(T<<9&4294967295|T>>>23),T=P+(y^E&(k^y))+I[3]+4107603335&4294967295,P=k+(T<<14&4294967295|T>>>18),T=E+(k^y&(P^k))+I[8]+1163531501&4294967295,E=P+(T<<20&4294967295|T>>>12),T=y+(P^k&(E^P))+I[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=k+(E^P&(y^E))+I[2]+4243563512&4294967295,k=y+(T<<9&4294967295|T>>>23),T=P+(y^E&(k^y))+I[7]+1735328473&4294967295,P=k+(T<<14&4294967295|T>>>18),T=E+(k^y&(P^k))+I[12]+2368359562&4294967295,E=P+(T<<20&4294967295|T>>>12),T=y+(E^P^k)+I[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=k+(y^E^P)+I[8]+2272392833&4294967295,k=y+(T<<11&4294967295|T>>>21),T=P+(k^y^E)+I[11]+1839030562&4294967295,P=k+(T<<16&4294967295|T>>>16),T=E+(P^k^y)+I[14]+4259657740&4294967295,E=P+(T<<23&4294967295|T>>>9),T=y+(E^P^k)+I[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=k+(y^E^P)+I[4]+1272893353&4294967295,k=y+(T<<11&4294967295|T>>>21),T=P+(k^y^E)+I[7]+4139469664&4294967295,P=k+(T<<16&4294967295|T>>>16),T=E+(P^k^y)+I[10]+3200236656&4294967295,E=P+(T<<23&4294967295|T>>>9),T=y+(E^P^k)+I[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=k+(y^E^P)+I[0]+3936430074&4294967295,k=y+(T<<11&4294967295|T>>>21),T=P+(k^y^E)+I[3]+3572445317&4294967295,P=k+(T<<16&4294967295|T>>>16),T=E+(P^k^y)+I[6]+76029189&4294967295,E=P+(T<<23&4294967295|T>>>9),T=y+(E^P^k)+I[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=k+(y^E^P)+I[12]+3873151461&4294967295,k=y+(T<<11&4294967295|T>>>21),T=P+(k^y^E)+I[15]+530742520&4294967295,P=k+(T<<16&4294967295|T>>>16),T=E+(P^k^y)+I[2]+3299628645&4294967295,E=P+(T<<23&4294967295|T>>>9),T=y+(P^(E|~k))+I[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=k+(E^(y|~P))+I[7]+1126891415&4294967295,k=y+(T<<10&4294967295|T>>>22),T=P+(y^(k|~E))+I[14]+2878612391&4294967295,P=k+(T<<15&4294967295|T>>>17),T=E+(k^(P|~y))+I[5]+4237533241&4294967295,E=P+(T<<21&4294967295|T>>>11),T=y+(P^(E|~k))+I[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=k+(E^(y|~P))+I[3]+2399980690&4294967295,k=y+(T<<10&4294967295|T>>>22),T=P+(y^(k|~E))+I[10]+4293915773&4294967295,P=k+(T<<15&4294967295|T>>>17),T=E+(k^(P|~y))+I[1]+2240044497&4294967295,E=P+(T<<21&4294967295|T>>>11),T=y+(P^(E|~k))+I[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=k+(E^(y|~P))+I[15]+4264355552&4294967295,k=y+(T<<10&4294967295|T>>>22),T=P+(y^(k|~E))+I[6]+2734768916&4294967295,P=k+(T<<15&4294967295|T>>>17),T=E+(k^(P|~y))+I[13]+1309151649&4294967295,E=P+(T<<21&4294967295|T>>>11),T=y+(P^(E|~k))+I[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=k+(E^(y|~P))+I[11]+3174756917&4294967295,k=y+(T<<10&4294967295|T>>>22),T=P+(y^(k|~E))+I[2]+718787259&4294967295,P=k+(T<<15&4294967295|T>>>17),T=E+(k^(P|~y))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+P&4294967295,v.g[3]=v.g[3]+k&4294967295}r.prototype.u=function(v,y){y===void 0&&(y=v.length);for(var E=y-this.blockSize,I=this.B,P=this.h,k=0;k<y;){if(P==0)for(;k<=E;)i(this,v,k),k+=this.blockSize;if(typeof v=="string"){for(;k<y;)if(I[P++]=v.charCodeAt(k++),P==this.blockSize){i(this,I),P=0;break}}else for(;k<y;)if(I[P++]=v[k++],P==this.blockSize){i(this,I),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;var E=8*this.o;for(y=v.length-8;y<v.length;++y)v[y]=E&255,E/=256;for(this.u(v),v=Array(16),y=E=0;4>y;++y)for(var I=0;32>I;I+=8)v[E++]=this.g[y]>>>I&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function o(v,y){this.h=y;for(var E=[],I=!0,P=v.length-1;0<=P;P--){var k=v[P]|0;I&&k==y||(E[P]=k,I=!1)}this.g=E}var l={};function u(v){return-128<=v&&128>v?s(v,function(y){return new o([y|0],0>y?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return p;if(0>v)return b(c(-v));for(var y=[],E=1,I=0;v>=E;I++)y[I]=v/E|0,E*=4294967296;return new o(y,0)}function f(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return b(f(v.substring(1),y));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),I=p,P=0;P<v.length;P+=8){var k=Math.min(8,v.length-P),T=parseInt(v.substring(P,P+k),y);8>k?(k=c(Math.pow(y,k)),I=I.j(k).add(c(T))):(I=I.j(E),I=I.add(c(T)))}return I}var p=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-b(this).m();for(var v=0,y=1,E=0;E<this.g.length;E++){var I=this.i(E);v+=(0<=I?I:4294967296+I)*y,y*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(R(this))return"0";if(D(this))return"-"+b(this).toString(v);for(var y=c(Math.pow(v,6)),E=this,I="";;){var P=V(E,y).g;E=w(E,P.j(y));var k=((0<E.g.length?E.g[0]:E.h)>>>0).toString(v);if(E=P,R(E))return k+I;for(;6>k.length;)k="0"+k;I=k+I}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function R(v){if(v.h!=0)return!1;for(var y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=w(this,v),D(v)?-1:R(v)?0:1};function b(v){for(var y=v.g.length,E=[],I=0;I<y;I++)E[I]=~v.g[I];return new o(E,~v.h).add(g)}t.abs=function(){return D(this)?b(this):this},t.add=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0,P=0;P<=y;P++){var k=I+(this.i(P)&65535)+(v.i(P)&65535),T=(k>>>16)+(this.i(P)>>>16)+(v.i(P)>>>16);I=T>>>16,k&=65535,T&=65535,E[P]=T<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(v,y){return v.add(b(y))}t.j=function(v){if(R(this)||R(v))return p;if(D(this))return D(v)?b(this).j(b(v)):b(b(this).j(v));if(D(v))return b(this.j(b(v)));if(0>this.l(S)&&0>v.l(S))return c(this.m()*v.m());for(var y=this.g.length+v.g.length,E=[],I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var P=0;P<v.g.length;P++){var k=this.i(I)>>>16,T=this.i(I)&65535,kt=v.i(P)>>>16,xr=v.i(P)&65535;E[2*I+2*P]+=T*xr,_(E,2*I+2*P),E[2*I+2*P+1]+=k*xr,_(E,2*I+2*P+1),E[2*I+2*P+1]+=T*kt,_(E,2*I+2*P+1),E[2*I+2*P+2]+=k*kt,_(E,2*I+2*P+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new o(E,0)};function _(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function A(v,y){this.g=v,this.h=y}function V(v,y){if(R(y))throw Error("division by zero");if(R(v))return new A(p,p);if(D(v))return y=V(b(v),y),new A(b(y.g),b(y.h));if(D(y))return y=V(v,b(y)),new A(b(y.g),y.h);if(30<v.g.length){if(D(v)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,I=y;0>=I.l(v);)E=M(E),I=M(I);var P=L(E,1),k=L(I,1);for(I=L(I,2),E=L(E,2);!R(I);){var T=k.add(I);0>=T.l(v)&&(P=P.add(E),k=T),I=L(I,1),E=L(E,1)}return y=w(v,P.j(y)),new A(P,y)}for(P=p;0<=v.l(y);){for(E=Math.max(1,Math.floor(v.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),k=c(E),T=k.j(y);D(T)||0<T.l(v);)E-=I,k=c(E),T=k.j(y);R(k)&&(k=g),P=P.add(k),v=w(v,T)}return new A(P,v)}t.A=function(v){return V(this,v).h},t.and=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)&v.i(I);return new o(E,this.h&v.h)},t.or=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)|v.i(I);return new o(E,this.h|v.h)},t.xor=function(v){for(var y=Math.max(this.g.length,v.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)^v.i(I);return new o(E,this.h^v.h)};function M(v){for(var y=v.g.length+1,E=[],I=0;I<y;I++)E[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(E,v.h)}function L(v,y){var E=y>>5;y%=32;for(var I=v.g.length-E,P=[],k=0;k<I;k++)P[k]=0<y?v.i(k+E)>>>y|v.i(k+E+1)<<32-y:v.i(k+E);return new o(P,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$E=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Qr=o}).apply(typeof wy<"u"?wy:typeof self<"u"?self:typeof window<"u"?window:{});var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qE,co,KE,Vl,Pd,GE,WE,HE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ll=="object"&&ll];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var C=a[m];if(!(C in d))break e;d=d[C]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,m=!1,C={next:function(){if(!m&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function g(a,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function S(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,C,N){for(var j=Array(arguments.length-2),de=2;de<arguments.length;de++)j[de-2]=arguments[de];return h.prototype[C].apply(m,j)}}function D(a){const h=a.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function b(a,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const C=a.length||0,N=m.length||0;a.length=C+N;for(let j=0;j<N;j++)a[C+j]=m[j]}else a.push(m)}}class w{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var M=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function L(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function v(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)a[d]=m[d];for(let N=0;N<E.length;N++)d=E[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function P(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function k(a){l.setTimeout(()=>{throw a},0)}function T(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class kt{constructor(){this.h=this.g=null}add(h,d){const m=xr.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var xr=new w(()=>new Ds,a=>a.reset());class Ds{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ln,$=!1,X=new kt,ee=()=>{const a=l.Promise.resolve(void 0);ln=()=>{a.then(we)}};var we=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){k(d)}var h=xr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}$=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var un=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function cn(a,h){if(xe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{V(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:hn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}R(cn,xe);var hn={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),GI=0;function WI(a,h,d,m,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=C,this.key=++GI,this.da=this.fa=!1}function Aa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pa(a){this.src=a,this.g={},this.h=0}Pa.prototype.add=function(a,h,d,m,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var j=yc(a,h,m,C);return-1<j?(h=a[j],d||(h.fa=!1)):(h=new WI(h,this.src,N,!!m,C),h.fa=d,a.push(h)),h};function gc(a,h){var d=h.type;if(d in a.g){var m=a.g[d],C=Array.prototype.indexOf.call(m,h,void 0),N;(N=0<=C)&&Array.prototype.splice.call(m,C,1),N&&(Aa(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function yc(a,h,d,m){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==m)return C}return-1}var _c="closure_lm_"+(1e6*Math.random()|0),vc={};function Lp(a,h,d,m,C){if(Array.isArray(h)){for(var N=0;N<h.length;N++)Lp(a,h[N],d,m,C);return null}return d=Up(d),a&&a[dn]?a.K(h,d,c(m)?!!m.capture:!!m,C):HI(a,h,d,!1,m,C)}function HI(a,h,d,m,C,N){if(!h)throw Error("Invalid event type");var j=c(C)?!!C.capture:!!C,de=wc(a);if(de||(a[_c]=de=new Pa(a)),d=de.add(h,d,m,j,N),d.proxy)return d;if(m=QI(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)un||(C=j),C===void 0&&(C=!1),a.addEventListener(h.toString(),m,C);else if(a.attachEvent)a.attachEvent(Fp(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function QI(){function a(d){return h.call(a.src,a.listener,d)}const h=YI;return a}function Mp(a,h,d,m,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)Mp(a,h[N],d,m,C);else m=c(m)?!!m.capture:!!m,d=Up(d),a&&a[dn]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=yc(N,d,m,C),-1<d&&(Aa(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=wc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=yc(h,d,m,C)),(d=-1<a?h[a]:null)&&Ec(d))}function Ec(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[dn])gc(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(Fp(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=wc(h))?(gc(d,a),d.h==0&&(d.src=null,h[_c]=null)):Aa(a)}}}function Fp(a){return a in vc?vc[a]:vc[a]="on"+a}function YI(a,h){if(a.da)a=!0;else{h=new cn(h,this);var d=a.listener,m=a.ha||a.src;a.fa&&Ec(a),a=d.call(m,h)}return a}function wc(a){return a=a[_c],a instanceof Pa?a:null}var Ic="__closure_events_fn_"+(1e9*Math.random()>>>0);function Up(a){return typeof a=="function"?a:(a[Ic]||(a[Ic]=function(h){return a.handleEvent(h)}),a[Ic])}function He(){he.call(this),this.i=new Pa(this),this.M=this,this.F=null}R(He,he),He.prototype[dn]=!0,He.prototype.removeEventListener=function(a,h,d,m){Mp(this,a,h,d,m)};function nt(a,h){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new xe(h,a);else if(h instanceof xe)h.target=h.target||a;else{var C=h;h=new xe(m,a),I(h,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var j=h.g=d[N];C=Ra(j,m,!0,h)&&C}if(j=h.g=a,C=Ra(j,m,!0,h)&&C,C=Ra(j,m,!1,h)&&C,d)for(N=0;N<d.length;N++)j=h.g=d[N],C=Ra(j,m,!1,h)&&C}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],m=0;m<d.length;m++)Aa(d[m]);delete a.g[h],a.h--}}this.F=null},He.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},He.prototype.L=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function Ra(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,N=0;N<h.length;++N){var j=h[N];if(j&&!j.da&&j.capture==d){var de=j.listener,ze=j.ha||j.src;j.fa&&gc(a.i,j),C=de.call(ze,m)!==!1&&C}}return C&&!m.defaultPrevented}function jp(a,h,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Bp(a){a.g=jp(()=>{a.g=null,a.i&&(a.i=!1,Bp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class JI extends he{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Bp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ns(a){he.call(this),this.h=a,this.g={}}R(Ns,he);var zp=[];function $p(a){L(a.g,function(h,d){this.g.hasOwnProperty(d)&&Ec(h)},a),a.g={}}Ns.prototype.N=function(){Ns.aa.N.call(this),$p(this)},Ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tc=l.JSON.stringify,XI=l.JSON.parse,ZI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Sc(){}Sc.prototype.h=null;function qp(a){return a.h||(a.h=a.i())}function Kp(){}var Vs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ac(){xe.call(this,"d")}R(Ac,xe);function Pc(){xe.call(this,"c")}R(Pc,xe);var Dr={},Gp=null;function Ca(){return Gp=Gp||new He}Dr.La="serverreachability";function Wp(a){xe.call(this,Dr.La,a)}R(Wp,xe);function bs(a){const h=Ca();nt(h,new Wp(h))}Dr.STAT_EVENT="statevent";function Hp(a,h){xe.call(this,Dr.STAT_EVENT,a),this.stat=h}R(Hp,xe);function rt(a){const h=Ca();nt(h,new Hp(h,a))}Dr.Ma="timingevent";function Qp(a,h){xe.call(this,Dr.Ma,a),this.size=h}R(Qp,xe);function Os(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ls(){this.g=!0}Ls.prototype.xa=function(){this.g=!1};function eT(a,h,d,m,C,N){a.info(function(){if(a.g)if(N)for(var j="",de=N.split("&"),ze=0;ze<de.length;ze++){var ae=de[ze].split("=");if(1<ae.length){var Qe=ae[0];ae=ae[1];var Ye=Qe.split("_");j=2<=Ye.length&&Ye[1]=="type"?j+(Qe+"="+ae+"&"):j+(Qe+"=redacted&")}}else j=null;else j=N;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+d+`
`+j})}function tT(a,h,d,m,C,N,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+d+`
`+N+" "+j})}function Ei(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+rT(a,d)+(m?" "+m:"")})}function nT(a,h){a.info(function(){return"TIMEOUT: "+h})}Ls.prototype.info=function(){};function rT(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var j=1;j<C.length;j++)C[j]=""}}}}return Tc(d)}catch{return h}}var ka={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Rc;function xa(){}R(xa,Sc),xa.prototype.g=function(){return new XMLHttpRequest},xa.prototype.i=function(){return{}},Rc=new xa;function Mn(a,h,d,m){this.j=a,this.i=h,this.l=d,this.R=m||1,this.U=new Ns(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jp}function Jp(){this.i=null,this.g="",this.h=!1}var Xp={},Cc={};function kc(a,h,d){a.L=1,a.v=ba(fn(h)),a.m=d,a.P=!0,Zp(a,null)}function Zp(a,h){a.F=Date.now(),Da(a),a.A=fn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),fm(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Jp,a.g=Dm(a.j,d?h:null,!a.m),0<a.O&&(a.M=new JI(g(a.Y,a,a.g),a.O)),h=a.U,d=a.g,m=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(zp[0]=C.toString()),C=zp);for(var N=0;N<C.length;N++){var j=Lp(d,C[N],m||h.handleEvent,!1,h.h||h);if(!j)break;h.g[j.key]=j}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),bs(),eT(a.i,a.u,a.A,a.l,a.R,a.m)}Mn.prototype.ca=function(a){a=a.target;const h=this.M;h&&pn(a)==3?h.j():this.Y(a)},Mn.prototype.Y=function(a){try{if(a==this.g)e:{const Ye=pn(this.g);var h=this.g.Ba();const Ti=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||Em(this.g)))){this.J||Ye!=4||h==7||(h==8||0>=Ti?bs(3):bs(2)),xc(this);var d=this.g.Z();this.X=d;t:if(em(this)){var m=Em(this.g);a="";var C=m.length,N=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),Ms(this);var j="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(N&&h==C-1)});m.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,tT(this.i,this.u,this.A,this.l,this.R,Ye,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,ze=this.g;if((de=ze.g?ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(de)){var ae=de;break t}}ae=null}if(d=ae)Ei(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dc(this,d);else{this.o=!1,this.s=3,rt(12),Nr(this),Ms(this);break e}}if(this.P){d=!0;let Bt;for(;!this.J&&this.C<j.length;)if(Bt=iT(this,j),Bt==Cc){Ye==4&&(this.s=4,rt(14),d=!1),Ei(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Xp){this.s=4,rt(15),Ei(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Ei(this.i,this.l,Bt,null),Dc(this,Bt);if(em(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||j.length!=0||this.h.h||(this.s=1,rt(16),d=!1),this.o=this.o&&d,!d)Ei(this.i,this.l,j,"[Invalid Chunked Response]"),Nr(this),Ms(this);else if(0<j.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Mc(Qe),Qe.M=!0,rt(11))}}else Ei(this.i,this.l,j,null),Dc(this,j);Ye==4&&Nr(this),this.o&&!this.J&&(Ye==4?Rm(this.j,this):(this.o=!1,Da(this)))}else wT(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),Nr(this),Ms(this)}}}catch{}finally{}};function em(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function iT(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?Cc:(d=Number(h.substring(d,m)),isNaN(d)?Xp:(m+=1,m+d>h.length?Cc:(h=h.slice(m,m+d),a.C=m+d,h)))}Mn.prototype.cancel=function(){this.J=!0,Nr(this)};function Da(a){a.S=Date.now()+a.I,tm(a,a.I)}function tm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Os(g(a.ba,a),h)}function xc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Mn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(nT(this.i,this.A),this.L!=2&&(bs(),rt(17)),Nr(this),this.s=2,Ms(this)):tm(this,this.S-a)};function Ms(a){a.j.G==0||a.J||Rm(a.j,a)}function Nr(a){xc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,$p(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Dc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Nc(d.h,a))){if(!a.K&&Nc(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ja(d),Fa(d);else break e;Lc(d),rt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Os(g(d.Za,d),6e3));if(1>=im(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else br(d,11)}else if((a.K||d.g==a)&&ja(d),!_(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let ae=C[h];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const Qe=ae[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Ye=ae[4];Ye!=null&&(d.Aa=Ye,d.j.info("SVER="+d.Aa));const Ti=ae[5];Ti!=null&&typeof Ti=="number"&&0<Ti&&(m=1.5*Ti,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Bt=a.g;if(Bt){const za=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(za){var N=m.h;N.g||za.indexOf("spdy")==-1&&za.indexOf("quic")==-1&&za.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Vc(N,N.h),N.h=null))}if(m.D){const Fc=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fc&&(m.ya=Fc,me(m.I,m.D,Fc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=a;if(m.qa=xm(m,m.J?m.ia:null,m.W),j.K){sm(m.h,j);var de=j,ze=m.L;ze&&(de.I=ze),de.B&&(xc(de),Da(de)),m.g=j}else Am(m);0<d.i.length&&Ua(d)}else ae[0]!="stop"&&ae[0]!="close"||br(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?br(d,7):Oc(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}bs(4)}catch{}}var sT=class{constructor(a,h){this.g=a,this.map=h}};function nm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function im(a){return a.h?1:a.g?a.g.size:0}function Nc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Vc(a,h){a.g?a.g.add(h):a.h=h}function sm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}nm.prototype.cancel=function(){if(this.i=om(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function om(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return D(a.i)}function oT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,m=0;m<d;m++)h.push(a[m]);return h}h=[],d=0;for(m in a)h[d++]=a[m];return h}function aT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const m in a)h[d++]=m;return h}}}function am(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=aT(a),m=oT(a),C=m.length,N=0;N<C;N++)h.call(void 0,m[N],d&&d[N],a)}var lm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lT(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),C=null;if(0<=m){var N=a[d].substring(0,m);C=a[d].substring(m+1)}else N=a[d];h(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Vr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vr){this.h=a.h,Na(this,a.j),this.o=a.o,this.g=a.g,Va(this,a.s),this.l=a.l;var h=a.i,d=new js;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),um(this,d),this.m=a.m}else a&&(h=String(a).match(lm))?(this.h=!1,Na(this,h[1]||"",!0),this.o=Fs(h[2]||""),this.g=Fs(h[3]||"",!0),Va(this,h[4]),this.l=Fs(h[5]||"",!0),um(this,h[6]||"",!0),this.m=Fs(h[7]||"")):(this.h=!1,this.i=new js(null,this.h))}Vr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Us(h,cm,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Us(h,cm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Us(d,d.charAt(0)=="/"?hT:cT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Us(d,fT)),a.join("")};function fn(a){return new Vr(a)}function Na(a,h,d){a.j=d?Fs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Va(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function um(a,h,d){h instanceof js?(a.i=h,pT(a.i,a.h)):(d||(h=Us(h,dT)),a.i=new js(h,a.h))}function me(a,h,d){a.i.set(h,d)}function ba(a){return me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Fs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Us(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,uT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cm=/[#\/\?@]/g,cT=/[#\?:]/g,hT=/[#\?]/g,dT=/[#\?@]/g,fT=/#/g;function js(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&lT(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=js.prototype,t.add=function(a,h){Fn(this),this.i=null,a=wi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function hm(a,h){Fn(a),h=wi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function dm(a,h){return Fn(a),h=wi(a,h),a.g.has(h)}t.forEach=function(a,h){Fn(this),this.g.forEach(function(d,m){d.forEach(function(C){a.call(h,C,m,this)},this)},this)},t.na=function(){Fn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const C=a[m];for(let N=0;N<C.length;N++)d.push(h[m])}return d},t.V=function(a){Fn(this);let h=[];if(typeof a=="string")dm(this,a)&&(h=h.concat(this.g.get(wi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return Fn(this),this.i=null,a=wi(this,a),dm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function fm(a,h,d){hm(a,h),0<d.length&&(a.i=null,a.g.set(wi(a,h),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const N=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var C=N;j[m]!==""&&(C+="="+encodeURIComponent(String(j[m]))),a.push(C)}}return this.i=a.join("&")};function wi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function pT(a,h){h&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(hm(this,m),fm(this,C,d))},a)),a.j=h}function mT(a,h){const d=new Ls;if(l.Image){const m=new Image;m.onload=S(Un,d,"TestLoadImage: loaded",!0,h,m),m.onerror=S(Un,d,"TestLoadImage: error",!1,h,m),m.onabort=S(Un,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=S(Un,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function gT(a,h){const d=new Ls,m=new AbortController,C=setTimeout(()=>{m.abort(),Un(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(C),N.ok?Un(d,"TestPingServer: ok",!0,h):Un(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Un(d,"TestPingServer: error",!1,h)})}function Un(a,h,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function yT(){this.g=new ZI}function _T(a,h,d){const m=d||"";try{am(a,function(C,N){let j=C;c(C)&&(j=Tc(C)),h.push(m+N+"="+encodeURIComponent(j))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function Oa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Oa,Sc),Oa.prototype.g=function(){return new La(this.l,this.j)},Oa.prototype.i=function(a){return function(){return a}}({});function La(a,h){He.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(La,He),t=La.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function pm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Bs(this):zs(this),this.readyState==3&&pm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Bs(this))},t.Qa=function(a){this.g&&(this.response=a,Bs(this))},t.ga=function(){this.g&&Bs(this)};function Bs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(La.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mm(a){let h="";return L(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function bc(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=mm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):me(a,h,d))}function Re(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Re,He);var vT=/^https?$/i,ET=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Rc.g(),this.v=this.o?qp(this.o):qp(Rc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){gm(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ET,h,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of d)this.g.setRequestHeader(N,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vm(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){gm(this,N)}};function gm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ym(a),Ma(a)}function ym(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,nt(this,"complete"),nt(this,"abort"),Ma(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ma(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_m(this):this.bb())},t.bb=function(){_m(this)};function _m(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)jp(a.Ea,0,a);else if(nt(a,"readystatechange"),pn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=j===0){var C=String(a.D).match(lm)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!vT.test(C?C.toLowerCase():"")}d=m}if(d)nt(a,"complete"),nt(a,"success");else{a.m=6;try{var N=2<pn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",ym(a)}}finally{Ma(a)}}}}function Ma(a,h){if(a.g){vm(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||nt(a,"ready");try{d.onreadystatechange=m}catch{}}}function vm(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),XI(h)}};function Em(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wT(a){const h={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=P(a[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[C]||[];h[C]=N,N.push(d)}v(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $s(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function wm(a){this.Aa=0,this.i=[],this.j=new Ls,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$s("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$s("baseRetryDelayMs",5e3,a),this.cb=$s("retryDelaySeedMs",1e4,a),this.Wa=$s("forwardChannelMaxRetries",2,a),this.wa=$s("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new nm(a&&a.concurrentRequestLimit),this.Da=new yT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wm.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,m){rt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=xm(this,null,this.W),Ua(this)};function Oc(a){if(Im(a),a.G==3){var h=a.U++,d=fn(a.I);if(me(d,"SID",a.K),me(d,"RID",h),me(d,"TYPE","terminate"),qs(a,d),h=new Mn(a,a.j,h),h.L=2,h.v=ba(fn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Dm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Da(h)}km(a)}function Fa(a){a.g&&(Mc(a),a.g.cancel(),a.g=null)}function Im(a){Fa(a),a.u&&(l.clearTimeout(a.u),a.u=null),ja(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ua(a){if(!rm(a.h)&&!a.s){a.s=!0;var h=a.Ga;ln||ee(),$||(ln(),$=!0),X.add(h,a),a.B=0}}function IT(a,h){return im(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Os(g(a.Ga,a,h),Cm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Mn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),I(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Sm(this,C,h),d=fn(this.I),me(d,"RID",a),me(d,"CVER",22),this.D&&me(d,"X-HTTP-Session-Id",this.D),qs(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(mm(N)))+"&"+h:this.m&&bc(d,this.m,N)),Vc(this.h,C),this.Ua&&me(d,"TYPE","init"),this.P?(me(d,"$req",h),me(d,"SID","null"),C.T=!0,kc(C,d,null)):kc(C,d,h),this.G=2}}else this.G==3&&(a?Tm(this,a):this.i.length==0||rm(this.h)||Tm(this))};function Tm(a,h){var d;h?d=h.l:d=a.U++;const m=fn(a.I);me(m,"SID",a.K),me(m,"RID",d),me(m,"AID",a.T),qs(a,m),a.m&&a.o&&bc(m,a.m,a.o),d=new Mn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Sm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Vc(a.h,d),kc(d,m,h)}function qs(a,h){a.H&&L(a.H,function(d,m){me(h,m,d)}),a.l&&am({},function(d,m){me(h,m,d)})}function Sm(a,h,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const j=["count="+d];N==-1?0<d?(N=C[0].g,j.push("ofs="+N)):N=0:j.push("ofs="+N);let de=!0;for(let ze=0;ze<d;ze++){let ae=C[ze].g;const Qe=C[ze].map;if(ae-=N,0>ae)N=Math.max(0,C[ze].g-100),de=!1;else try{_T(Qe,j,"req"+ae+"_")}catch{m&&m(Qe)}}if(de){m=j.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,m}function Am(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;ln||ee(),$||(ln(),$=!0),X.add(h,a),a.v=0}}function Lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Os(g(a.Fa,a),Cm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Pm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Os(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Fa(this),Pm(this))};function Mc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Pm(a){a.g=new Mn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=fn(a.qa);me(h,"RID","rpc"),me(h,"SID",a.K),me(h,"AID",a.T),me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&me(h,"TO",a.ja),me(h,"TYPE","xmlhttp"),qs(a,h),a.m&&a.o&&bc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ba(fn(h)),d.m=null,d.P=!0,Zp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Fa(this),Lc(this),rt(19))};function ja(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Rm(a,h){var d=null;if(a.g==h){ja(a),Mc(a),a.g=null;var m=2}else if(Nc(a.h,h))d=h.D,sm(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;m=Ca(),nt(m,new Qp(m,d)),Ua(a)}else Am(a);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&IT(a,h)||m==2&&Lc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:br(a,5);break;case 4:br(a,10);break;case 3:br(a,6);break;default:br(a,2)}}}function Cm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function br(a,h){if(a.j.info("Error code "+h),h==2){var d=g(a.fb,a),m=a.Xa;const C=!m;m=new Vr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Na(m,"https"),ba(m),C?mT(m.toString(),d):gT(m.toString(),d)}else rt(2);a.G=0,a.l&&a.l.sa(h),km(a),Im(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function km(a){if(a.G=0,a.ka=[],a.l){const h=om(a.h);(h.length!=0||a.i.length!=0)&&(b(a.ka,h),b(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function xm(a,h,d){var m=d instanceof Vr?fn(d):new Vr(d);if(m.g!="")h&&(m.g=h+"."+m.g),Va(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var N=new Vr(null);m&&Na(N,m),h&&(N.g=h),C&&Va(N,C),d&&(N.l=d),m=N}return d=a.D,h=a.ya,d&&h&&me(m,d,h),me(m,"VER",a.la),qs(a,m),m}function Dm(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Re(new Oa({eb:d})):new Re(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Nm(){}t=Nm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ba(){}Ba.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){He.call(this),this.g=new wm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ii(this)}R(_t,He),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Oc(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Tc(a),a=d);h.i.push(new sT(h.Ya++,a)),h.G==3&&Ua(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,Oc(this.g),delete this.g,_t.aa.N.call(this)};function Vm(a){Ac.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Vm,Ac);function bm(){Pc.call(this),this.status=1}R(bm,Pc);function Ii(a){this.g=a}R(Ii,Nm),Ii.prototype.ua=function(){nt(this.g,"a")},Ii.prototype.ta=function(a){nt(this.g,new Vm(a))},Ii.prototype.sa=function(a){nt(this.g,new bm)},Ii.prototype.ra=function(){nt(this.g,"b")},Ba.prototype.createWebChannel=Ba.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,HE=function(){return new Ba},WE=function(){return Ca()},GE=Dr,Pd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ka.NO_ERROR=0,ka.TIMEOUT=8,ka.HTTP_ERROR=6,Vl=ka,Yp.COMPLETE="complete",KE=Yp,Kp.EventType=Vs,Vs.OPEN="a",Vs.CLOSE="b",Vs.ERROR="c",Vs.MESSAGE="d",He.prototype.listen=He.prototype.K,co=Kp,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,qE=Re}).apply(typeof ll<"u"?ll:typeof self<"u"?self:typeof window<"u"?window:{});const Iy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new jf("@firebase/firestore");function ki(){return si.logLevel}function F(t,...e){if(si.logLevel<=re.DEBUG){const n=e.map(Xf);si.debug(`Firestore (${Ps}): ${t}`,...n)}}function st(t,...e){if(si.logLevel<=re.ERROR){const n=e.map(Xf);si.error(`Firestore (${Ps}): ${t}`,...n)}}function oi(t,...e){if(si.logLevel<=re.WARN){const n=e.map(Xf);si.warn(`Firestore (${Ps}): ${t}`,...n)}}function Xf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw st(e),new Error(e)}function W(t,e){t||G()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class xk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Dk{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){W(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new QE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new qe(e)}}class Nk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Vk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Nk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ok{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){W(this.o===void 0);const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(W(typeof n.token=="string"),this.R=n.token,new bk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Lk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function hs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function JE(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ae(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ae(0,0))}static max(){return new Q(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class fe extends Xo{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const Mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends Xo{construct(e,n,r){return new Te(e,n,r)}static isValidIdentifier(e){return Mk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Te(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(n)}static emptyPath(){return new Te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(fe.fromString(e))}static fromName(e){return new z(fe.fromString(e).popFirst(5))}static empty(){return new z(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new fe(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function Rd(t){return t.fields.find(e=>e.kind===2)}function Ur(t){return t.fields.filter(e=>e.kind!==2)}wu.UNKNOWN_ID=-1;class bl{constructor(e,n){this.fieldPath=e,this.kind=n}}class Zo{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Zo(0,Pt.min())}}function Fk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new Pt(i,z.empty(),e)}function XE(t){return new Pt(t.readTime,t.key,-1)}class Pt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pt(Q.min(),z.empty(),-1)}static max(){return new Pt(Q.max(),z.empty(),-1)}}function Zf(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ew{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==ZE)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new pr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Ro(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=ep(r.target.error);this.V.reject(new Ro(e,i))}}static open(e,n,r,i){try{return new tc(n,e.transaction(i,r))}catch(s){throw new Ro(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(F("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new jk(n)}}class mr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,mr.S(Me())===12.2&&st("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return F("SimpleDb","Removing database:",e),jr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!tE())return!1;if(mr.v())return!0;const e=Me(),n=mr.S(e),r=0<n&&n<10,i=tw(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(F("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ro(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new K(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new K(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ro(e,o))},i.onupgradeneeded=s=>{F("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{F("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const l=tc.open(this.db,e,s?"readonly":"readwrite",r),u=i(l).next(c=>(l.g(),c)).catch(c=>(l.abort(c),x.reject(c))).toPromise();return u.catch(()=>{}),await l.m,u}catch(l){const u=l,c=u.name!=="FirebaseError"&&o<3;if(F("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function tw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Uk{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return jr(this.B.delete())}}class Ro extends K{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Rr(t){return t.name==="IndexedDbTransactionError"}class jk{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(F("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(F("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),jr(r)}add(e){return F("SimpleDb","ADD",this.store.name,e,e),jr(this.store.add(e))}get(e){return jr(this.store.get(e)).next(n=>(n===void 0&&(n=null),F("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return F("SimpleDb","DELETE",this.store.name,e),jr(this.store.delete(e))}count(){return F("SimpleDb","COUNT",this.store.name),jr(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new x((o,l)=>{s.onerror=u=>{l(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(l,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new x((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){F("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,l)=>l.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new x((r,i)=>{n.onerror=s=>{const o=ep(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(l=>{l?o.continue():r()}):r()}})}W(e,n){const r=[];return new x((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const u=new Uk(l),c=n(l.primaryKey,l.value,u);if(c instanceof x){const f=c.catch(p=>(u.done(),x.reject(p)));r.push(f)}u.isDone?i():u.K===null?l.continue():l.continue(u.K)}}).next(()=>x.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function jr(t){return new x((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=ep(r.target.error);n(i)}})}let Ty=!1;function ep(t){const e=mr.S(Me());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new K("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ty||(Ty=!0,setTimeout(()=>{throw r},0)),r}}return t}class Bk{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){F("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{F("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Rr(n)?F("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await _i(n)}await this.X(6e4)})}}class zk{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return x.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return F("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(l=>{i-=l,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(l=>(F("IndexBackfiller",`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,n,l))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=XE(s);Zf(o,r)>0&&(r=o)}),new Pt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bt.oe=-1;function nc(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function $k(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sy(e)),e=qk(t.get(n),e);return Sy(e)}function qk(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Sy(t){return t+""}function en(t){const e=t.length;if(W(e>=2),e===2)return W(t.charAt(0)===""&&t.charAt(1)===""),fe.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&G(),t.charAt(o+1)){case"":const l=t.substring(s,o);let u;i.length===0?u=l:(i+=l,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:G()}s=o+2}return new fe(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e){return[t,at(e)]}function nw(t,e,n){return[t,at(e),n]}const Kk={},Gk=["prefixPath","collectionGroup","readTime","documentId"],Wk=["prefixPath","collectionGroup","documentId"],Hk=["collectionGroup","readTime","prefixPath","documentId"],Qk=["canonicalId","targetId"],Yk=["targetId","path"],Jk=["path","targetId"],Xk=["collectionId","parent"],Zk=["indexId","uid"],ex=["uid","sequenceNumber"],tx=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],nx=["indexId","uid","orderedDocumentKey"],rx=["userId","collectionPath","documentId"],ix=["userId","collectionPath","largestBatchId"],sx=["userId","collectionGroup","largestBatchId"],rw=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ox=[...rw,"documentOverlays"],iw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],sw=iw,tp=[...sw,"indexConfiguration","indexState","indexEntries"],ax=tp,lx=[...tp,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd extends ew{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Fe(t,e){const n=J(t);return mr.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ow(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=i??Ke.EMPTY,this.right=s??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ry(this.data.getIterator())}getIteratorFrom(e){return new Ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ce(this.comparator);return n.data=e,n}}class Ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ai(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new ce(Te.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new aw("Invalid base64 string: "+s):s}}(e);return new be(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const ux=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bn(t){if(W(!!t),typeof t=="string"){let e=0;const n=ux.exec(t);if(W(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?be.fromBase64String(t):be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rp(t){const e=t.mapValue.fields.__previous_value__;return np(e)?rp(e):e}function ta(t){const e=bn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class ai{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ai("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ai&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ll={nullValue:"NULL_VALUE"};function li(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?np(t)?4:lw(t)?9007199254740991:rc(t)?10:11:G()}function an(t,e){if(t===e)return!0;const n=li(t);if(n!==li(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=bn(i.timestampValue),l=bn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _r(i.bytesValue).isEqual(_r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return _e(i.geoPointValue.latitude)===_e(s.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _e(i.integerValue)===_e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=_e(i.doubleValue),l=_e(s.doubleValue);return o===l?ea(o)===ea(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Py(o)!==Py(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!an(o[u],l[u])))return!1;return!0}(t,e);default:return G()}}function na(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function vr(t,e){if(t===e)return 0;const n=li(t),r=li(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=_e(s.integerValue||s.doubleValue),u=_e(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Cy(t.timestampValue,e.timestampValue);case 4:return Cy(ta(t),ta(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(s,o){const l=_r(s),u=_r(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=Z(l[c],u[c]);if(f!==0)return f}return Z(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Z(_e(s.latitude),_e(o.latitude));return l!==0?l:Z(_e(s.longitude),_e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ky(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},g=o.fields||{},S=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=g.value)===null||u===void 0?void 0:u.arrayValue,D=Z(((c=S==null?void 0:S.values)===null||c===void 0?void 0:c.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:ky(S,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===nr.mapValue&&o===nr.mapValue)return 0;if(s===nr.mapValue)return 1;if(o===nr.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Z(u[p],f[p]);if(g!==0)return g;const S=vr(l[u[p]],c[f[p]]);if(S!==0)return S}return Z(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G()}}function Cy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=bn(t),r=bn(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function ky(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=vr(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function ds(t){return kd(t)}function kd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=bn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return z.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=kd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${kd(n.fields[o])}`;return i+"}"}(t.mapValue):G()}function ip(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xd(t){return!!t&&"integerValue"in t}function ra(t){return!!t&&"arrayValue"in t}function xy(t){return!!t&&"nullValue"in t}function Dy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ml(t){return!!t&&"mapValue"in t}function rc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Co(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lw(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const uw={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function hx(t){return"nullValue"in t?Ll:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ip(ai.empty(),z.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?rc(t)?uw:{mapValue:{}}:G()}function dx(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ip(ai.empty(),z.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?uw:"mapValue"in t?rc(t)?{mapValue:{}}:nr:G()}function Ny(t,e){const n=vr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Vy(t,e){const n=vr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.value=e}static empty(){return new ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=Te.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Co(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ft(Co(this.value))}}function cw(t){const e=[];return Rs(t.fields,(n,r)=>{const i=new Te([n]);if(Ml(r)){const s=cw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ke(e,0,Q.min(),Q.min(),Q.min(),ft.empty(),0)}static newFoundDocument(e,n,r,i){return new ke(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new ke(e,2,n,Q.min(),Q.min(),ft.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,Q.min(),Q.min(),ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,n){this.position=e,this.inclusive=n}}function by(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=vr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n="asc"){this.field=e,this.dir=n}}function fx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{}class ie extends hw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new px(e,n,r):n==="array-contains"?new yx(e,r):n==="in"?new yw(e,r):n==="not-in"?new _x(e,r):n==="array-contains-any"?new vx(e,r):new ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mx(e,r):new gx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vr(n,this.value)):n!==null&&li(this.value)===li(n)&&this.matchesComparison(vr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends hw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ue(e,n)}matches(e){return ps(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ps(t){return t.op==="and"}function Dd(t){return t.op==="or"}function sp(t){return dw(t)&&ps(t)}function dw(t){for(const e of t.filters)if(e instanceof ue)return!1;return!0}function Nd(t){if(t instanceof ie)return t.field.canonicalString()+t.op.toString()+ds(t.value);if(sp(t))return t.filters.map(e=>Nd(e)).join(",");{const e=t.filters.map(n=>Nd(n)).join(",");return`${t.op}(${e})`}}function fw(t,e){return t instanceof ie?function(r,i){return i instanceof ie&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)}(t,e):t instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&fw(o,i.filters[l]),!0):!1}(t,e):void G()}function pw(t,e){const n=t.filters.concat(e);return ue.create(n,t.op)}function mw(t){return t instanceof ie?function(n){return`${n.field.canonicalString()} ${n.op} ${ds(n.value)}`}(t):t instanceof ue?function(n){return n.op.toString()+" {"+n.getFilters().map(mw).join(" ,")+"}"}(t):"Filter"}class px extends ie{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class mx extends ie{constructor(e,n){super(e,"in",n),this.keys=gw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gx extends ie{constructor(e,n){super(e,"not-in",n),this.keys=gw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class yx extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ra(n)&&na(n.arrayValue,this.value)}}class yw extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class _x extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!na(this.value.arrayValue,n)}}class vx extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ra(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>na(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Vd(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ex(t,e,n,r,i,s,o)}function ui(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ds(r)).join(",")),e.ue=n}return e.ue}function va(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Oy(t.startAt,e.startAt)&&Oy(t.endAt,e.endAt)}function Tu(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Su(t,e){return t.filters.filter(n=>n instanceof ie&&n.field.isEqual(e))}function Ly(t,e,n){let r=Ll,i=!0;for(const s of Su(t,e)){let o=Ll,l=!0;switch(s.op){case"<":case"<=":o=hx(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=Ll}Ny({value:r,inclusive:i},{value:o,inclusive:l})<0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Ny({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function My(t,e,n){let r=nr,i=!0;for(const s of Su(t,e)){let o=nr,l=!0;switch(s.op){case">=":case">":o=dx(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=nr}Vy({value:r,inclusive:i},{value:o,inclusive:l})>0&&(r=o,i=l)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Vy({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wx(t,e,n,r,i,s,o,l){return new ic(t,e,n,r,i,s,o,l)}function sc(t){return new ic(t)}function Fy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ix(t){return t.collectionGroup!==null}function ko(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ce(Te.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Iu(s,r))}),n.has(Te.keyField().canonicalString())||e.ce.push(new Iu(Te.keyField(),r))}return e.ce}function Mt(t){const e=J(t);return e.le||(e.le=Tx(e,ko(t))),e.le}function Tx(t,e){if(t.limitType==="F")return Vd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Iu(i.field,s)});const n=t.endAt?new fs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fs(t.startAt.position,t.startAt.inclusive):null;return Vd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bd(t,e,n){return new ic(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function oc(t,e){return va(Mt(t),Mt(e))&&t.limitType===e.limitType}function _w(t){return`${ui(Mt(t))}|lt:${t.limitType}`}function xi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>mw(i)).join(", ")}]`),nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ds(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ds(i)).join(",")),`Target(${r})`}(Mt(t))}; limitType=${t.limitType})`}function Ea(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ko(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=by(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,ko(r),i)||r.endAt&&!function(o,l,u){const c=by(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,ko(r),i))}(t,e)}function Sx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vw(t){return(e,n)=>{let r=!1;for(const i of ko(t)){const s=Ax(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ax(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?vr(u,c):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ow(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px=new Ee(z.comparator);function wt(){return Px}const Ew=new Ee(z.comparator);function ho(...t){let e=Ew;for(const n of t)e=e.insert(n.key,n);return e}function ww(t){let e=Ew;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function tn(){return xo()}function Iw(){return xo()}function xo(){return new Cr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Rx=new Ee(z.comparator),Cx=new ce(z.comparator);function te(...t){let e=Cx;for(const n of t)e=e.add(n);return e}const kx=new ce(Z);function xx(){return kx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function Tw(t){return{integerValue:""+t}}function Sw(t,e){return $k(e)?Tw(e):op(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this._=void 0}}function Dx(t,e,n){return t instanceof ia?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&np(s)&&(s=rp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ms?Pw(t,e):t instanceof gs?Rw(t,e):function(i,s){const o=Aw(i,s),l=Uy(o)+Uy(i.Pe);return xd(o)&&xd(i.Pe)?Tw(l):op(i.serializer,l)}(t,e)}function Nx(t,e,n){return t instanceof ms?Pw(t,e):t instanceof gs?Rw(t,e):n}function Aw(t,e){return t instanceof ys?function(r){return xd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ia extends ac{}class ms extends ac{constructor(e){super(),this.elements=e}}function Pw(t,e){const n=Cw(e);for(const r of t.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class gs extends ac{constructor(e){super(),this.elements=e}}function Rw(t,e){let n=Cw(e);for(const r of t.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class ys extends ac{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Uy(t){return _e(t.integerValue||t.doubleValue)}function Cw(t){return ra(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.field=e,this.transform=n}}function Vx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ms&&i instanceof ms||r instanceof gs&&i instanceof gs?hs(r.elements,i.elements,an):r instanceof ys&&i instanceof ys?an(r.Pe,i.Pe):r instanceof ia&&i instanceof ia}(t.transform,e.transform)}class bx{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lc{}function xw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ap(t.key,It.none()):new Cs(t.key,t.data,It.none());{const n=t.data,r=ft.empty();let i=new ce(Te.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new kr(t.key,r,new Ot(i.toArray()),It.none())}}function Ox(t,e,n){t instanceof Cs?function(i,s,o){const l=i.value.clone(),u=By(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof kr?function(i,s,o){if(!Fl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=By(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Dw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Do(t,e,n,r){return t instanceof Cs?function(s,o,l,u){if(!Fl(s.precondition,o))return l;const c=s.value.clone(),f=zy(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof kr?function(s,o,l,u){if(!Fl(s.precondition,o))return l;const c=zy(s.fieldTransforms,u,o),f=o.data;return f.setAll(Dw(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Fl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Lx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Aw(r.transform,i||null);s!=null&&(n===null&&(n=ft.empty()),n.set(r.field,s))}return n||null}function jy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&hs(r,i,(s,o)=>Vx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Cs extends lc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class kr extends lc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Dw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function By(t,e,n){const r=new Map;W(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Nx(o,l,n[i]))}return r}function zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Dx(s,o,e))}return r}class ap extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nw extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ox(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Do(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Iw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=xw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>jy(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>jy(n,r))}}class up{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){W(e.mutations.length===r.length);let i=function(){return Rx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new up(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,se;function Fx(t){switch(t){default:return G();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Vw(t){if(t===void 0)return st("GRPC error has no .code"),O.UNKNOWN;switch(t){case Ne.OK:return O.OK;case Ne.CANCELLED:return O.CANCELLED;case Ne.UNKNOWN:return O.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return O.INTERNAL;case Ne.UNAVAILABLE:return O.UNAVAILABLE;case Ne.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Ne.NOT_FOUND:return O.NOT_FOUND;case Ne.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Ne.ABORTED:return O.ABORTED;case Ne.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Ne.DATA_LOSS:return O.DATA_LOSS;default:return G()}}(se=Ne||(Ne={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ux(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=new Qr([4294967295,4294967295],0);function $y(t){const e=Ux().encode(t),n=new $E;return n.update(e),new Uint8Array(n.digest())}function qy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([i,s],0)]}class hp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new fo(`Invalid padding: ${n}`);if(r<0)throw new fo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new fo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Qr.fromNumber(r)));return i.compare(jx)===1&&(i=new Qr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=$y(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=$y(e),[r,i]=qy(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uc(Q.min(),i,new Ee(Z),wt(),te())}}class wa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wa(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class bw{constructor(e,n){this.targetId=e,this.me=n}}class Ow{constructor(e,n,r=be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ky{constructor(){this.fe=0,this.ge=Wy(),this.pe=be.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new wa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Wy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Bx{constructor(e){this.Le=e,this.Be=new Map,this.ke=wt(),this.qe=Gy(),this.Qe=new Ee(Z)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Tu(s))if(r===0){const o=new z(s.path);this.Ue(n,o,ke.newNoDocument(o,Q.min()))}else W(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=_r(r).toUint8Array()}catch(u){if(u instanceof aw)return oi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hp(o,i,s)}catch(u){return oi(u instanceof fo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Tu(l.target)){const u=new z(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ke.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new uc(e,n,this.Qe,this.ke,r);return this.ke=wt(),this.qe=Gy(),this.Qe=new Ee(Z),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Ky,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ce(Z),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ky),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Gy(){return new Ee(z.comparator)}function Wy(){return new Ee(z.comparator)}const zx={asc:"ASCENDING",desc:"DESCENDING"},$x={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},qx={and:"AND",or:"OR"};class Kx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Od(t,e){return t.useProto3Json||nc(e)?e:{value:e}}function _s(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Gx(t,e){return _s(t,e.toTimestamp())}function lt(t){return W(!!t),Q.fromTimestamp(function(n){const r=bn(n);return new Ae(r.seconds,r.nanos)}(t))}function dp(t,e){return Ld(t,e).canonicalString()}function Ld(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Mw(t){const e=fe.fromString(t);return W(Gw(e)),e}function Au(t,e){return dp(t.databaseId,e.path)}function Yr(t,e){const n=Mw(e);if(n.get(1)!==t.databaseId.projectId)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(jw(n))}function Fw(t,e){return dp(t.databaseId,e)}function Uw(t){const e=Mw(t);return e.length===4?fe.emptyPath():jw(e)}function Md(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function jw(t){return W(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hy(t,e,n){return{name:Au(t,e),fields:n.value.mapValue.fields}}function Wx(t,e,n){const r=Yr(t,e.name),i=lt(e.updateTime),s=e.createTime?lt(e.createTime):Q.min(),o=new ft({mapValue:{fields:e.fields}}),l=ke.newFoundDocument(r,i,s,o);return n&&l.setHasCommittedMutations(),n?l.setHasCommittedMutations():l}function Hx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(W(f===void 0||typeof f=="string"),be.fromBase64String(f||"")):(W(f===void 0||f instanceof Buffer||f instanceof Uint8Array),be.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?O.UNKNOWN:Vw(c.code);return new K(f,c.message||"")}(o);n=new Ow(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yr(t,r.document.name),s=lt(r.document.updateTime),o=r.document.createTime?lt(r.document.createTime):Q.min(),l=new ft({mapValue:{fields:r.document.fields}}),u=ke.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Ul(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yr(t,r.document),s=r.readTime?lt(r.readTime):Q.min(),o=ke.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ul([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yr(t,r.document),s=r.removedTargetIds||[];n=new Ul([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Mx(i,s),l=r.targetId;n=new bw(l,o)}}return n}function Pu(t,e){let n;if(e instanceof Cs)n={update:Hy(t,e.key,e.value)};else if(e instanceof ap)n={delete:Au(t,e.key)};else if(e instanceof kr)n={update:Hy(t,e.key,e.data),updateMask:eD(e.fieldMask)};else{if(!(e instanceof Nw))return G();n={verify:Au(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ia)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ms)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof gs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ys)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Gx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G()}(t,e.precondition)),n}function Fd(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?It.updateTime(lt(s.updateTime)):s.exists!==void 0?It.exists(s.exists):It.none()}(e.currentDocument):It.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,l){let u=null;if("setToServerValue"in l)W(l.setToServerValue==="REQUEST_TIME"),u=new ia;else if("appendMissingElements"in l){const f=l.appendMissingElements.values||[];u=new ms(f)}else if("removeAllFromArray"in l){const f=l.removeAllFromArray.values||[];u=new gs(f)}else"increment"in l?u=new ys(o,l.increment):G();const c=Te.fromServerFormat(l.fieldPath);return new kw(c,u)}(t,i)):[];if(e.update){e.update.name;const i=Yr(t,e.update.name),s=new ft({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new Ot(c.map(f=>Te.fromServerFormat(f)))}(e.updateMask);return new kr(i,s,o,n,r)}return new Cs(i,s,n,r)}if(e.delete){const i=Yr(t,e.delete);return new ap(i,n)}if(e.verify){const i=Yr(t,e.verify);return new Nw(i,n)}return G()}function Qx(t,e){return t&&t.length>0?(W(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?lt(i.updateTime):lt(s);return o.isEqual(Q.min())&&(o=lt(s)),new bx(o,i.transformResults||[])}(n,e))):[]}function Bw(t,e){return{documents:[Fw(t,e.path)]}}function zw(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Fw(t,i);const s=function(c){if(c.length!==0)return Kw(ue.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(g){return{field:Di(g.field),direction:Jx(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Od(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function $w(t){let e=Uw(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){W(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=qw(p);return g instanceof ue&&sp(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(R){return new Iu(Ni(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,nc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,S=p.values||[];return new fs(S,g)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const g=!p.before,S=p.values||[];return new fs(S,g)}(n.endAt)),wx(e,i,o,s,l,"F",u,c)}function Yx(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ni(n.unaryFilter.field);return ie.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(n.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(n.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(n.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return ie.create(Ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ue.create(n.compositeFilter.filters.map(r=>qw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function Jx(t){return zx[t]}function Xx(t){return $x[t]}function Zx(t){return qx[t]}function Di(t){return{fieldPath:t.canonicalString()}}function Ni(t){return Te.fromServerFormat(t.fieldPath)}function Kw(t){return t instanceof ie?function(n){if(n.op==="=="){if(Dy(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NAN"}};if(xy(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dy(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NAN"}};if(xy(n.value))return{unaryFilter:{field:Di(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Di(n.field),op:Xx(n.op),value:n.value}}}(t):t instanceof ue?function(n){const r=n.getFilters().map(i=>Kw(i));return r.length===1?r[0]:{compositeFilter:{op:Zx(n.op),filters:r}}}(t):G()}function eD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=be.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.ct=e}}function tD(t,e){let n;if(e.document)n=Wx(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=z.fromSegments(e.noDocument.path),i=hi(e.noDocument.readTime);n=ke.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return G();{const r=z.fromSegments(e.unknownDocument.path),i=hi(e.unknownDocument.version);n=ke.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ae(i[0],i[1]);return Q.fromTimestamp(s)}(e.readTime)),n}function Qy(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ru(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Au(s,o.key),fields:o.data.value.mapValue.fields,updateTime:_s(s,o.version.toTimestamp()),createTime:_s(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ci(e.version)};else{if(!e.isUnknownDocument())return G();r.unknownDocument={path:n.path.toArray(),version:ci(e.version)}}return r}function Ru(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ci(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function hi(t){const e=new Ae(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function Br(t,e){const n=(e.baseMutations||[]).map(s=>Fd(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Fd(t.ct,s)),i=Ae.fromMillis(e.localWriteTimeMs);return new lp(e.batchId,i,n,r)}function po(t){const e=hi(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?hi(t.lastLimboFreeSnapshotVersion):Q.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return W(s.documents.length===1),Mt(sc(Uw(s.documents[0])))}(t.query):function(s){return Mt($w(s))}(t.query),new Tn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,be.fromBase64String(t.resumeToken))}function Hw(t,e){const n=ci(e.snapshotVersion),r=ci(e.lastLimboFreeSnapshotVersion);let i;i=Tu(e.target)?Bw(t.ct,e.target):zw(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:ui(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Qw(t){const e=$w({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bd(e,e.limit,"L"):e}function _h(t,e){return new cp(e.largestBatchId,Fd(t.ct,e.overlayMutation))}function Yy(t,e){const n=e.path.lastSegment();return[t,at(e.path.popLast()),n]}function Jy(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ci(r.readTime),documentKey:at(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{getBundleMetadata(e,n){return Xy(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:hi(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return Xy(e).put(function(i){return{bundleId:i.id,createTime:ci(lt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return Zy(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:Qw(s.bundledQuery),readTime:hi(s.readTime)}}(r)})}saveNamedQuery(e,n){return Zy(e).put(function(i){return{name:i.name,readTime:ci(lt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function Xy(t){return Fe(t,"bundles")}function Zy(t){return Fe(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new cc(e,r)}getOverlay(e,n){return Zs(e).get(Yy(this.userId,n)).next(r=>r?_h(this.serializer,r):null)}getOverlays(e,n){const r=tn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const l=new cp(n,o);i.push(this.ht(e,l))}),x.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(at(o.getCollectionPath())));const s=[];return i.forEach(o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Zs(e).j("collectionPathOverlayIndex",l))}),x.waitFor(s)}getOverlaysForCollection(e,n,r){const i=tn(),s=at(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Zs(e).U("collectionPathOverlayIndex",o).next(l=>{for(const u of l){const c=_h(this.serializer,u);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=tn();let o;const l=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Zs(e).J({index:"collectionGroupOverlayIndex",range:l},(u,c,f)=>{const p=_h(this.serializer,c);s.size()<i||p.largestBatchId===o?(s.set(p.getKey(),p),o=p.largestBatchId):f.done()}).next(()=>s)}ht(e,n){return Zs(e).put(function(i,s,o){const[l,u,c]=Yy(s,o.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Pu(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Zs(t){return Fe(t,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{Pt(e){return Fe(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?be.fromUint8Array(r):be.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(_e(e.integerValue));else if("doubleValue"in e){const r=_e(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),ea(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=bn(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(_r(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?lw(e)?this.dt(n,Number.MAX_SAFE_INTEGER):rc(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):G()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const i of Object.keys(r))this.Vt(i,n),this.Tt(r[i],n)}wt(e,n){var r,i;const s=e.fields||{};this.dt(n,53);const o="value",l=((i=(r=s[o].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.length)||0;this.dt(n,15),n.At(_e(l)),this.Vt(o,n),this.Tt(s[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const i of r)this.Tt(i,n)}yt(e,n){this.dt(n,37),z.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}zr.vt=new zr;function iD(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function e_(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=iD(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class sD{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=e_(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=e_(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class oD{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class aD{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class eo{constructor(){this.jt=new sD,this.Ht=new oD(this.jt),this.Jt=new aD(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new $r(this.indexId,this.documentKey,this.arrayValue,r)}}function zn(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=t_(t.arrayValue,e.arrayValue),n!==0?n:(n=t_(t.directionalValue,e.directionalValue),n!==0?n:z.comparator(t.documentKey,e.documentKey)))}function t_(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.Xt=new ce((n,r)=>Te.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(W(e.collectionGroup===this.collectionId),this.nn)return!1;const n=Rd(e);if(n!==void 0&&!this.sn(n))return!1;const r=Ur(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.sn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Xt.size>0){const l=this.Xt.getIterator().getNext();if(!i.has(l.field.canonicalString())){const u=r[s];if(!this.on(l,u)||!this._n(this.en[o++],u))return!1}++s}for(;s<r.length;++s){const l=r[s];if(o>=this.en.length||!this._n(this.en[o++],l))return!1}return!0}an(){if(this.nn)return null;let e=new ce(Te.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new bl(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new bl(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new bl(r.field,r.dir==="asc"?0:1)));return new wu(wu.UNKNOWN_ID,this.collectionId,n,Zo.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){var e,n;if(W(t instanceof ie||t instanceof ue),t instanceof ie){if(t instanceof yw){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ie.create(t.field,"==",s)))||[];return ue.create(i,"or")}return t}const r=t.filters.map(i=>Yw(i));return ue.create(r,t.op)}function lD(t){if(t.getFilters().length===0)return[];const e=Bd(Yw(t));return W(Jw(e)),Ud(e)||jd(e)?[e]:e.getFilters()}function Ud(t){return t instanceof ie}function jd(t){return t instanceof ue&&sp(t)}function Jw(t){return Ud(t)||jd(t)||function(n){if(n instanceof ue&&Dd(n)){for(const r of n.getFilters())if(!Ud(r)&&!jd(r))return!1;return!0}return!1}(t)}function Bd(t){if(W(t instanceof ie||t instanceof ue),t instanceof ie)return t;if(t.filters.length===1)return Bd(t.filters[0]);const e=t.filters.map(r=>Bd(r));let n=ue.create(e,t.op);return n=Cu(n),Jw(n)?n:(W(n instanceof ue),W(ps(n)),W(n.filters.length>1),n.filters.reduce((r,i)=>fp(r,i)))}function fp(t,e){let n;return W(t instanceof ie||t instanceof ue),W(e instanceof ie||e instanceof ue),n=t instanceof ie?e instanceof ie?function(i,s){return ue.create([i,s],"and")}(t,e):r_(t,e):e instanceof ie?r_(e,t):function(i,s){if(W(i.filters.length>0&&s.filters.length>0),ps(i)&&ps(s))return pw(i,s.getFilters());const o=Dd(i)?i:s,l=Dd(i)?s:i,u=o.filters.map(c=>fp(c,l));return ue.create(u,"or")}(t,e),Cu(n)}function r_(t,e){if(ps(e))return pw(e,t.getFilters());{const n=e.filters.map(r=>fp(t,r));return ue.create(n,"or")}}function Cu(t){if(W(t instanceof ie||t instanceof ue),t instanceof ie)return t;const e=t.getFilters();if(e.length===1)return Cu(e[0]);if(dw(t))return t;const n=e.map(i=>Cu(i)),r=[];return n.forEach(i=>{i instanceof ie?r.push(i):i instanceof ue&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:ue.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.un=new pp}addToCollectionParentIndex(e,n){return this.un.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Pt.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Pt.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class pp{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ce(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ce(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new Uint8Array(0);class cD{constructor(e,n){this.databaseId=n,this.cn=new pp,this.ln=new Cr(r=>ui(r),(r,i)=>va(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const s={collectionId:r,parent:at(i)};return i_(e).put(s)}return x.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[JE(n),""],!1,!0);return i_(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(en(o.parent))}return r})}addFieldIndex(e,n){const r=to(e),i=function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Ri(e);return s.next(l=>{o.put(Jy(l,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=to(e),i=Ri(e),s=Pi(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=to(e),r=Pi(e),i=Ri(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return x.forEach(this.hn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new n_(r).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Pi(e);let i=!0;const s=new Map;return x.forEach(this.hn(n),o=>this.Pn(e,o).next(l=>{i&&(i=!!l),s.set(o,l)})).next(()=>{if(i){let o=te();const l=[];return x.forEach(s,(u,c)=>{F("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${ui(n)}`);const f=function(A,V){const M=Rd(V);if(M===void 0)return null;for(const L of Su(A,M.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(c,u),p=function(A,V){const M=new Map;for(const L of Ur(V))for(const v of Su(A,L.fieldPath))switch(v.op){case"==":case"in":M.set(L.fieldPath.canonicalString(),v.value);break;case"not-in":case"!=":return M.set(L.fieldPath.canonicalString(),v.value),Array.from(M.values())}return null}(c,u),g=function(A,V){const M=[];let L=!0;for(const v of Ur(V)){const y=v.kind===0?Ly(A,v.fieldPath,A.startAt):My(A,v.fieldPath,A.startAt);M.push(y.value),L&&(L=y.inclusive)}return new fs(M,L)}(c,u),S=function(A,V){const M=[];let L=!0;for(const v of Ur(V)){const y=v.kind===0?My(A,v.fieldPath,A.endAt):Ly(A,v.fieldPath,A.endAt);M.push(y.value),L&&(L=y.inclusive)}return new fs(M,L)}(c,u),R=this.In(u,c,g),D=this.In(u,c,S),b=this.Tn(u,c,p),w=this.En(u.indexId,f,R,g.inclusive,D,S.inclusive,b);return x.forEach(w,_=>r.G(_,n.limit).next(A=>{A.forEach(V=>{const M=z.fromSegments(V.documentKey);o.has(M)||(o=o.add(M),l.push(M))})}))}).next(()=>l)}return x.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=lD(ue.create(e.filters,"and")).map(r=>Vd(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,i,s,o,l){const u=(n!=null?n.length:1)*Math.max(r.length,s.length),c=u/(n!=null?n.length:1),f=[];for(let p=0;p<u;++p){const g=n?this.dn(n[p/c]):cl,S=this.An(e,g,r[p%c],i),R=this.Rn(e,g,s[p%c],o),D=l.map(b=>this.An(e,g,b,!0));f.push(...this.createRange(S,R,D))}return f}An(e,n,r,i){const s=new $r(e,z.empty(),n,r);return i?s:s.Zt()}Rn(e,n,r,i){const s=new $r(e,z.empty(),n,r);return i?s.Zt():s}Pn(e,n){const r=new n_(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const l of s)r.rn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o})}getIndexType(e,n){let r=2;const i=this.hn(n);return x.forEach(i,s=>this.Pn(e,s).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new ce(Te.comparator),f=!1;for(const p of u.filters)for(const g of p.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?f=!0:c=c.add(g.field));for(const p of u.orderBy)p.field.isKeyField()||(c=c.add(p.field));return c.size+(f?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}Vn(e,n){const r=new eo;for(const i of Ur(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);zr.vt.It(s,o)}return r.zt()}dn(e){const n=new eo;return zr.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new eo;return zr.vt.It(ip(this.databaseId,n),r.Yt(function(s){const o=Ur(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let i=[];i.push(new eo);let s=0;for(const o of Ur(e)){const l=r[s++];for(const u of i)if(this.fn(n,o.fieldPath)&&ra(l))i=this.gn(i,o,l);else{const c=u.Yt(o.kind);zr.vt.It(l,c)}}return this.pn(i)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const l of i){const u=new eo;u.seed(l.zt()),zr.vt.It(o,u.Yt(n.kind)),s.push(u)}return s}fn(e,n){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=to(e),i=Ri(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return x.forEach(s,l=>i.get([l.indexId,this.uid]).next(u=>{o.push(function(f,p){const g=p?new Zo(p.sequenceNumber,new Pt(hi(p.readTime),new z(en(p.documentKey)),p.largestBatchId)):Zo.empty(),S=f.fields.map(([R,D])=>new bl(Te.fromServerFormat(R),D));return new wu(f.indexId,f.collectionGroup,S,g)}(l,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=to(e),s=Ri(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(l=>x.forEach(l,u=>s.put(Jy(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return x.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?x.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(l=>(r.set(i.collectionGroup,l),x.forEach(l,u=>this.wn(e,i,u).next(c=>{const f=this.Sn(s,u);return c.isEqual(f)?x.resolve():this.bn(e,s,u,c,f)}))))})}Dn(e,n,r,i){return Pi(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,i){return Pi(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const i=Pi(e);let s=new ce(zn);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,l)=>{s=s.add(new $r(r.indexId,n,l.arrayValue,l.directionalValue))}).next(()=>s)}Sn(e,n){let r=new ce(zn);const i=this.Vn(n,e);if(i==null)return r;const s=Rd(n);if(s!=null){const o=e.data.field(s.fieldPath);if(ra(o))for(const l of o.arrayValue.values||[])r=r.add(new $r(n.indexId,e.key,this.dn(l),i))}else r=r.add(new $r(n.indexId,e.key,cl,i));return r}bn(e,n,r,i,s){F("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,f,p,g){const S=u.getIterator(),R=c.getIterator();let D=Ai(S),b=Ai(R);for(;D||b;){let w=!1,_=!1;if(D&&b){const A=f(D,b);A<0?_=!0:A>0&&(w=!0)}else D!=null?_=!0:w=!0;w?(p(b),b=Ai(R)):_?(g(D),D=Ai(S)):(D=Ai(S),b=Ai(R))}}(i,s,zn,l=>{o.push(this.Dn(e,n,r,l))},l=>{o.push(this.vn(e,n,r,l))}),x.waitFor(o)}yn(e){let n=1;return Ri(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,l)=>zn(o,l)).filter((o,l,u)=>!l||zn(o,u[l-1])!==0);const i=[];i.push(e);for(const o of r){const l=zn(o,e),u=zn(o,n);if(l===0)i[0]=e.Zt();else if(l>0&&u<0)i.push(o),i.push(o.Zt());else if(u>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const l=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,cl,[]],u=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,cl,[]];s.push(IDBKeyRange.bound(l,u))}return s}Cn(e,n){return zn(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(s_)}getMinOffset(e,n){return x.mapArray(this.hn(n),r=>this.Pn(e,r).next(i=>i||G())).next(s_)}}function i_(t){return Fe(t,"collectionParents")}function Pi(t){return Fe(t,"indexEntries")}function to(t){return Fe(t,"indexConfiguration")}function Ri(t){return Fe(t,"indexState")}function s_(t){W(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Zf(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Pt(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ht{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let l=0;const u=r.J({range:o},(f,p,g)=>(l++,g.delete()));s.push(u.next(()=>{W(l===1)}));const c=[];for(const f of n.mutations){const p=nw(e,f.key.path,n.batchId);s.push(i.delete(p)),c.push(f.key)}return x.waitFor(s).next(()=>c)}function ku(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw G();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(41943040,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);class hc{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Fn={}}static lt(e,n,r,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new hc(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return $n(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Vi(e),o=$n(e);return o.add({}).next(l=>{W(typeof l=="number");const u=new lp(l,n,r,i),c=function(S,R,D){const b=D.baseMutations.map(_=>Pu(S.ct,_)),w=D.mutations.map(_=>Pu(S.ct,_));return{userId:R,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:b,mutations:w}}(this.serializer,this.userId,u),f=[];let p=new ce((g,S)=>Z(g.canonicalString(),S.canonicalString()));for(const g of i){const S=nw(this.userId,g.key.path,l);p=p.add(g.key.path.popLast()),f.push(o.put(c)),f.push(s.put(S,Kk))}return p.forEach(g=>{f.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Fn[l]=u.keys()}),x.waitFor(f).next(()=>u)})}lookupMutationBatch(e,n){return $n(e).get(n).next(r=>r?(W(r.userId===this.userId),Br(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?x.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Fn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return $n(e).J({index:"userMutationsIndex",range:i},(o,l,u)=>{l.userId===this.userId&&(W(l.batchId>=r),s=Br(this.serializer,l)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return $n(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return $n(e).U("userMutationsIndex",n).next(r=>r.map(i=>Br(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Ol(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Vi(e).J({range:i},(o,l,u)=>{const[c,f,p]=o,g=en(f);if(c===this.userId&&n.path.isEqual(g))return $n(e).get(p).next(S=>{if(!S)throw G();W(S.userId===this.userId),s.push(Br(this.serializer,S))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ce(Z);const i=[];return n.forEach(s=>{const o=Ol(this.userId,s.path),l=IDBKeyRange.lowerBound(o),u=Vi(e).J({range:l},(c,f,p)=>{const[g,S,R]=c,D=en(S);g===this.userId&&s.path.isEqual(D)?r=r.add(R):p.done()});i.push(u)}),x.waitFor(i).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Ol(this.userId,r),o=IDBKeyRange.lowerBound(s);let l=new ce(Z);return Vi(e).J({range:o},(u,c,f)=>{const[p,g,S]=u,R=en(g);p===this.userId&&r.isPrefixOf(R)?R.length===i&&(l=l.add(S)):f.done()}).next(()=>this.xn(e,l))}xn(e,n){const r=[],i=[];return n.forEach(s=>{i.push($n(e).get(s).next(o=>{if(o===null)throw G();W(o.userId===this.userId),r.push(Br(this.serializer,o))}))}),x.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return Xw(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),x.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return x.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Vi(e).J({range:r},(s,o,l)=>{if(s[0]===this.userId){const u=en(s[1]);i.push(u)}else l.done()}).next(()=>{W(i.length===0)})})}containsKey(e,n){return Zw(e,this.userId,n)}Nn(e){return eI(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Zw(t,e,n){const r=Ol(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Vi(t).J({range:s,H:!0},(l,u,c)=>{const[f,p,g]=l;f===e&&p===i&&(o=!0),c.done()}).next(()=>o)}function $n(t){return Fe(t,"mutations")}function Vi(t){return Fe(t,"documentMutations")}function eI(t){return Fe(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new di(0)}static kn(){return new di(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new di(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>Q.fromTimestamp(new Ae(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.Qn(e,i)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ci(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(W(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Ci(e).J((o,l)=>{const u=po(l);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>x.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Ci(e).J((r,i)=>{const s=po(i);n(s)})}qn(e){return a_(e).get("targetGlobalKey").next(n=>(W(n!==null),n))}Qn(e,n){return a_(e).put("targetGlobalKey",n)}Kn(e,n){return Ci(e).put(Hw(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=ui(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Ci(e).J({range:i,index:"queryTargetsIndex"},(o,l,u)=>{const c=po(l);va(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Zn(e);return n.forEach(o=>{const l=at(o.path);i.push(s.put({targetId:r,path:l})),i.push(this.referenceDelegate.addReference(e,r,o))}),x.waitFor(i)}removeMatchingKeys(e,n,r){const i=Zn(e);return x.forEach(n,s=>{const o=at(s.path);return x.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Zn(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Zn(e);let s=te();return i.J({range:r,H:!0},(o,l,u)=>{const c=en(o[1]),f=new z(c);s=s.add(f)}).next(()=>s)}containsKey(e,n){const r=at(n.path),i=IDBKeyRange.bound([r],[JE(r)],!1,!0);let s=0;return Zn(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,l],u,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Ci(e).get(n).next(r=>r?po(r):null)}}function Ci(t){return Fe(t,"targets")}function a_(t){return Fe(t,"targetGlobal")}function Zn(t){return Fe(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class dD{constructor(e){this.Un=e,this.buffer=new ce(l_),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();l_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){F("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Rr(n)?F("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await _i(n)}await this.Hn(3e5)})}}class pD{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(bt.oe);const r=new dD(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(o_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),o_):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,l,u,c;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),ki()<=re.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function mD(t,e){return new pD(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,n){this.db=e,this.garbageCollector=mD(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,i)=>n(i))}addReference(e,n,r){return hl(e,r)}removeReference(e,n,r){return hl(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return hl(e,n)}nr(e,n){return function(i,s){let o=!1;return eI(i).Y(l=>Zw(i,l,s).next(u=>(u&&(o=!0),x.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,l)=>{if(l<=n){const u=this.nr(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Q.min()),Zn(e).delete(function(p){return[0,at(p.path)]}(o))))});i.push(u)}}).next(()=>x.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return hl(e,n)}tr(e,n){const r=Zn(e);let i,s=bt.oe;return r.J({index:"documentTargetsIndex"},([o,l],{path:u,sequenceNumber:c})=>{o===0?(s!==bt.oe&&n(new z(en(i)),s),s=c,i=u):s=bt.oe}).next(()=>{s!==bt.oe&&n(new z(en(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function hl(t,e){return Zn(t).put(function(r,i){return{targetId:0,path:at(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.changes=new Cr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Or(e).put(r)}removeEntry(e,n,r){return Or(e).delete(function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Ru(o),l[l.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=ke.newInvalidDocument(n);return Or(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(no(n))},(i,s)=>{r=this.ir(n,s)}).next(()=>r)}sr(e,n){let r={size:0,document:ke.newInvalidDocument(n)};return Or(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(no(n))},(i,s)=>{r={document:this.ir(n,s),size:ku(s)}}).next(()=>r)}getEntries(e,n){let r=wt();return this._r(e,n,(i,s)=>{const o=this.ir(i,s);r=r.insert(i,o)}).next(()=>r)}ar(e,n){let r=wt(),i=new Ee(z.comparator);return this._r(e,n,(s,o)=>{const l=this.ir(s,o);r=r.insert(s,l),i=i.insert(s,ku(o))}).next(()=>({documents:r,ur:i}))}_r(e,n,r){if(n.isEmpty())return x.resolve();let i=new ce(h_);n.forEach(u=>i=i.add(u));const s=IDBKeyRange.bound(no(i.first()),no(i.last())),o=i.getIterator();let l=o.getNext();return Or(e).J({index:"documentKeyIndex",range:s},(u,c,f)=>{const p=z.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;l&&h_(l,p)<0;)r(l,null),l=o.getNext();l&&l.isEqual(p)&&(r(l,c),l=o.hasNext()?o.getNext():null),l?f.$(no(l)):f.done()}).next(()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,l=[o.popLast().toArray(),o.lastSegment(),Ru(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Or(e).U(IDBKeyRange.bound(l,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let f=wt();for(const p of c){const g=this.ir(z.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);g.isFoundDocument()&&(Ea(n,g)||i.has(g.key))&&(f=f.insert(g.key,g))}return f})}getAllFromCollectionGroup(e,n,r,i){let s=wt();const o=c_(n,r),l=c_(n,Pt.max());return Or(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,l,!0)},(u,c,f)=>{const p=this.ir(z.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(p.key,p),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new _D(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return u_(e).get("remoteDocumentGlobalKey").next(n=>(W(!!n),n))}rr(e,n){return u_(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=tD(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return ke.newInvalidDocument(e)}}function nI(t){return new yD(t)}class _D extends tI{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Cr(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ce((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const l=this.lr.get(s);if(n.push(this.cr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const u=Qy(this.cr.serializer,o);i=i.add(s.path.popLast());const c=ku(u);r+=c-l.size,n.push(this.cr.addEntry(e,s,u))}else if(r-=l.size,this.trackRemovals){const u=Qy(this.cr.serializer,o.convertToNoDocument(Q.min()));n.push(this.cr.addEntry(e,s,u))}}),i.forEach(s=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.cr.updateMetadata(e,r)),x.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function u_(t){return Fe(t,"remoteDocumentGlobal")}function Or(t){return Fe(t,"remoteDocumentsV14")}function no(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function c_(t,e){const n=e.documentKey.path.toArray();return[t,Ru(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function h_(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Z(n[s],r[s]),i)return i;return i=Z(n.length,r.length),i||(i=Z(n[n.length-2],r[r.length-2]),i||Z(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Do(r.mutation,i,Ot.empty(),Ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=tn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ho();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=tn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=wt();const o=xo(),l=function(){return xo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof kr)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),Do(f.mutation,c,f.mutation.getFieldMask(),Ae.now())):o.set(c.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new vD(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=xo();let i=new Ee((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||Ot.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=Iw();f.forEach(g=>{if(!s.has(g)){const S=xw(n.get(g),r.get(g));S!==null&&p.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return z.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ix(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(tn());let l=-1,u=s;return o.next(c=>x.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(f=>({batchId:l,changes:ww(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=ho();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ho();return this.indexManager.getCollectionParents(e,s).next(l=>x.forEach(l,u=>{const c=function(p,g){return new ic(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,ke.newInvalidDocument(f)))});let l=ho();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&Do(f.mutation,c,Ot.empty(),Ae.now()),Ea(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return x.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:lt(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Qw(i.bundledQuery),readTime:lt(i.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wD{constructor(){this.overlays=new Ee(z.comparator),this.Ir=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=tn();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=tn(),s=n.length+1,o=new z(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=tn(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=tn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return x.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cp(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.Tr=new ce(Ue.Er),this.dr=new ce(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new z(new fe([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new z(new fe([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return z.comparator(e.key,n.key)||Z(e.wr,n.wr)}static Ar(e,n){return Z(e.wr,n.wr)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ce(Ue.Er)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lp(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ce(Z);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),x.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new z(s),0);let l=new ce(Z);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),x.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){W(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return x.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),i=this.br.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.Mr=e,this.docs=function(){return new Ee(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let r=wt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ke.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=wt();const o=n.path,l=new z(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Zf(XE(f),r)<=0||(i.has(f.key)||Ea(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Or(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AD(this)}getSize(e){return x.resolve(this.size)}}class AD extends tI{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.persistence=e,this.Nr=new Cr(n=>ui(n),va),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new mp,this.targetCount=0,this.kr=di.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),x.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new di(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Kn(n),x.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new bt(0),this.Kr=!1,this.Kr=!0,this.$r=new ID,this.referenceDelegate=e(this),this.Ur=new PD(this),this.indexManager=new uD,this.remoteDocumentCache=function(i){return new SD(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new Ww(n),this.Gr=new ED(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new TD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new RD(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return x.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class RD extends ew{constructor(e){super(),this.currentSequenceNumber=e}}class dc{constructor(e){this.persistence=e,this.Jr=new mp,this.Yr=null}static Zr(e){return new dc(e)}get Xr(){if(this.Yr)return this.Yr;throw G()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),x.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Xr,r=>{const i=z.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return x.or([()=>x.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.serializer=e}O(e,n,r,i){const s=new tc("createOrUpgrade",n);r<1&&i>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ay,{unique:!0}),u.createObjectStore("documentMutations")}(e),d_(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=x.resolve();return r<3&&i>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),d_(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Q.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",f)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(f=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Ay,{unique:!0});const p=c.store("mutations"),g=f.map(S=>p.put(S));return x.waitFor(g)})}(e,s))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.ni(s))),r<6&&i>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),r<7&&i>=7&&(o=o.next(()=>this.ii(s))),r<8&&i>=8&&(o=o.next(()=>this.si(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.oi(s))),r<11&&i>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:rx});c.createIndex("collectionPathOverlayIndex",ix,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",sx,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:Gk});c.createIndex("documentKeyIndex",Wk),c.createIndex("collectionGroupIndex",Hk)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),r<15&&i>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:Zk}).createIndex("sequenceNumberIndex",ex,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:tx}).createIndex("documentKeyIndex",nx,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&i>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=ku(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>x.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(l=>x.forEach(l,u=>{W(u.userId===s.userId);const c=Br(this.serializer,u);return Xw(e,s.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,l)=>{const u=new fe(o),c=function(p){return[0,at(p)]}(u);s.push(n.get(c).next(f=>f?x.resolve():(p=>n.put({targetId:0,path:at(p),sequenceNumber:i.highestListenSequenceNumber}))(u)))}).next(()=>x.waitFor(s))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:Xk});const r=n.store("collectionParents"),i=new pp,s=o=>{if(i.add(o)){const l=o.lastSegment(),u=o.popLast();return r.put({collectionId:l,parent:at(u)})}};return n.store("remoteDocuments").J({H:!0},(o,l)=>{const u=new fe(o);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,l,u],c)=>{const f=en(l);return s(f.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,i)=>{const s=po(i),o=Hw(this.serializer,s);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const l=n.store("remoteDocumentsV14"),u=function(p){return p.document?new z(fe.fromString(p.document.name).popFirst(5)):p.noDocument?z.fromSegments(p.noDocument.path):p.unknownDocument?z.fromSegments(p.unknownDocument.path):G()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(c))}).next(()=>x.waitFor(i))}ai(e,n){const r=n.store("mutations"),i=nI(this.serializer),s=new iI(dc.Zr,this.serializer.ct);return r.U().next(o=>{const l=new Map;return o.forEach(u=>{var c;let f=(c=l.get(u.userId))!==null&&c!==void 0?c:te();Br(this.serializer,u).keys().forEach(p=>f=f.add(p)),l.set(u.userId,f)}),x.forEach(l,(u,c)=>{const f=new qe(c),p=cc.lt(this.serializer,f),g=s.getIndexManager(f),S=hc.lt(f,this.serializer,g,s.referenceDelegate);return new rI(i,S,p,g).recalculateAndSaveOverlaysForDocumentKeys(new Cd(n,bt.oe),u).next()})})}}function d_(t){t.createObjectStore("targetDocuments",{keyPath:Yk}).createIndex("documentTargetsIndex",Jk,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Qk,{unique:!0}),t.createObjectStore("targetGlobal")}const vh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class gp{constructor(e,n,r,i,s,o,l,u,c,f,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=s,this.window=o,this.document=l,this.ci=c,this.li=f,this.hi=p,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=g=>Promise.resolve(),!gp.D())throw new K(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new gD(this,i),this.Ai=n+"main",this.serializer=new Ww(u),this.Ri=new mr(this.Ai,this.hi,new CD(this.serializer)),this.$r=new rD,this.Ur=new hD(this.referenceDelegate,this.serializer),this.remoteDocumentCache=nI(this.serializer),this.Gr=new nD,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&st("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new K(O.FAILED_PRECONDITION,vh);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new bt(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>dl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(Rr(e))return F("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return F("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return ro(e).get("owner").next(n=>x.resolve(this.vi(n)))}Ci(e){return dl(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Fe(n,"clientMetadata");return r.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(l=>s.indexOf(l)===-1);return x.forEach(o,l=>r.delete(l.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?x.resolve(!0):ro(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new K(O.FAILED_PRECONDITION,vh);return!1}}return!(!this.networkEnabled||!this.inForeground)||dl(e).U().next(r=>this.xi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&F("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Cd(e,bt.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>dl(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return hc.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new cD(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return cc.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){F("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(u){return u===17?lx:u===16?ax:u===15?tp:u===14?sw:u===13?iw:u===12?ox:u===11?rw:void G()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,l=>(o=new Cd(l,this.Qr?this.Qr.next():bt.oe),n==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw st(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new K(O.FAILED_PRECONDITION,ZE);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(l=>(o.raiseOnCommittedEvent(),l))}Ki(e){return ro(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new K(O.FAILED_PRECONDITION,vh)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ro(e).put("owner",n)}static D(){return mr.D()}bi(e){const n=ro(e);return n.get("owner").next(r=>this.vi(r)?(F("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):x.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(st(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;eE()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return F("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return st("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){st("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ro(t){return Fe(t,"owner")}function dl(t){return Fe(t,"clientMetadata")}function kD(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return eE()?8:tw(Me())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new xD;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ki()<=re.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",xi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),x.resolve()):(ki()<=re.DEBUG&&F("QueryEngine","Query:",xi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ki()<=re.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",xi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(n))):x.resolve())}Yi(e,n){if(Fy(n))return x.resolve(null);let r=Mt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bd(n,null,"F"),r=Mt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,bd(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Fy(n)||i.isEqual(Q.min())?x.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?x.resolve(null):(ki()<=re.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xi(n)),this.rs(e,o,n,Fk(i,-1)).next(l=>l))})}ts(e,n){let r=new ce(vw(e));return n.forEach((i,s)=>{Ea(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ki()<=re.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",xi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Pt.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ee(Z),this._s=new Cr(s=>ui(s),va),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rI(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function oI(t,e,n,r){return new DD(t,e,n,r)}async function aI(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function ND(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,g=p.keys();let S=x.resolve();return g.forEach(R=>{S=S.next(()=>f.getEntry(u,R)).next(D=>{const b=c.docVersions.get(R);W(b!==null),D.version.compareTo(b)<0&&(p.applyToRemoteDocument(D,c),D.isValidDocument()&&(D.setReadTime(c.commitVersion),f.addEntry(D)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function lI(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function VD(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(be.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(D,b,w){return D.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,S,f)&&l.push(n.Ur.updateTargetData(s,S))});let u=wt(),c=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(bD(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(Q.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return x.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function bD(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=wt();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):F("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function OD(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LD(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Tn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function zd(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Rr(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function f_(t,e,n){const r=J(t);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=J(u),g=p._s.get(f);return g!==void 0?x.resolve(p.os.get(g)):p.Ur.getTargetData(c,f)}(r,o,Mt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:te())).next(l=>(MD(r,Sx(e),l),{documents:l,Ts:s})))}function MD(t,e,n){let r=t.us.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class p_{constructor(){this.activeTargetIds=xx()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uI{constructor(){this.so=new p_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new p_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl=null;function Eh(){return fl===null?fl=function(){return 268435456+Math.round(2147483648*Math.random())}():fl++,"0x"+fl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection";class BD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Eh(),u=this.xo(n,r.toUriEncodedString());F("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(F("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw oi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=UD[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Eh();return new Promise((o,l)=>{const u=new qE;u.setWithCredentials(!0),u.listenOnce(KE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Vl.NO_ERROR:const f=u.getResponseJson();F(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Vl.TIMEOUT:F(Ze,`RPC '${e}' ${s} timed out`),l(new K(O.DEADLINE_EXCEEDED,"Request time out"));break;case Vl.HTTP_ERROR:const p=u.getStatus();if(F(Ze,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const S=g==null?void 0:g.error;if(S&&S.status&&S.message){const R=function(b){const w=b.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(w)>=0?w:O.UNKNOWN}(S.status);l(new K(R,S.message))}else l(new K(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(O.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F(Ze,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);F(Ze,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Eh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=HE(),l=WE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");F(Ze,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let g=!1,S=!1;const R=new jD({Io:b=>{S?F(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(g||(F(Ze,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),F(Ze,`RPC '${e}' stream ${i} sending:`,b),p.send(b))},To:()=>p.close()}),D=(b,w,_)=>{b.listen(w,A=>{try{_(A)}catch(V){setTimeout(()=>{throw V},0)}})};return D(p,co.EventType.OPEN,()=>{S||(F(Ze,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),D(p,co.EventType.CLOSE,()=>{S||(S=!0,F(Ze,`RPC '${e}' stream ${i} transport closed`),R.So())}),D(p,co.EventType.ERROR,b=>{S||(S=!0,oi(Ze,`RPC '${e}' stream ${i} transport errored:`,b),R.So(new K(O.UNAVAILABLE,"The operation could not be completed")))}),D(p,co.EventType.MESSAGE,b=>{var w;if(!S){const _=b.data[0];W(!!_);const A=_,V=A.error||((w=A[0])===null||w===void 0?void 0:w.error);if(V){F(Ze,`RPC '${e}' stream ${i} received error:`,V);const M=V.status;let L=function(E){const I=Ne[E];if(I!==void 0)return Vw(I)}(M),v=V.message;L===void 0&&(L=O.INTERNAL,v="Unknown error status: "+M+" with message "+V.message),S=!0,R.So(new K(L,v)),p.close()}else F(Ze,`RPC '${e}' stream ${i} received:`,_),R.bo(_)}}),D(l,GE.STAT_EVENT,b=>{b.stat===Pd.PROXY?F(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===Pd.NOPROXY&&F(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(){return typeof window<"u"?window:null}function jl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t){return new Kx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new cI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(st(n.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new K(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $D extends hI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Hx(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?lt(o.readTime):Q.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Md(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Tu(u)?{documents:Bw(s,u)}:{query:zw(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Lw(s,o.resumeToken);const c=Od(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=_s(s,o.snapshotVersion.toTimestamp());const c=Od(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=Yx(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Md(this.serializer),n.removeTarget=e,this.a_(n)}}class qD extends hI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Qx(e.writeResults,e.commitTime),r=lt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Md(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Pu(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Ld(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(O.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Ld(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class GD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(st(n),this.D_=!1):F("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{vi(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await ks(c),c.q_.set("Unknown"),c.L_.delete(4),await Ia(c)}(this))})}),this.q_=new GD(r,i)}}async function Ia(t){if(vi(t))for(const e of t.B_)await e(!0)}async function ks(t){for(const e of t.B_)await e(!1)}function dI(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),wp(n)?Ep(n):xs(n).r_()&&vp(n,e))}function _p(t,e){const n=J(t),r=xs(n);n.N_.delete(e),r.r_()&&fI(n,e),n.N_.size===0&&(r.r_()?r.o_():vi(n)&&n.q_.set("Unknown"))}function vp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).A_(e)}function fI(t,e){t.Q_.xe(e),xs(t).R_(e)}function Ep(t){t.Q_=new Bx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.q_.v_()}function wp(t){return vi(t)&&!xs(t).n_()&&t.N_.size>0}function vi(t){return J(t).L_.size===0}function pI(t){t.Q_=void 0}async function HD(t){t.q_.set("Online")}async function QD(t){t.N_.forEach((e,n)=>{vp(t,e)})}async function YD(t,e){pI(t),wp(t)?(t.q_.M_(e),Ep(t)):t.q_.set("Unknown")}async function JD(t,e,n){if(t.q_.set("Online"),e instanceof Ow&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xu(t,r)}else if(e instanceof Ul?t.Q_.Ke(e):e instanceof bw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Q.min()))try{const r=await lI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(be.EMPTY_BYTE_STRING,f.snapshotVersion)),fI(s,u);const p=new Tn(f.target,u,c,f.sequenceNumber);vp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await xu(t,r)}}async function xu(t,e,n){if(!Rr(e))throw e;t.L_.add(1),await ks(t),t.q_.set("Offline"),n||(n=()=>lI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ia(t)})}function mI(t,e){return e().catch(n=>xu(t,n,e))}async function Ta(t){const e=J(t),n=Er(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;XD(e);)try{const i=await OD(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,ZD(e,i)}catch(i){await xu(e,i)}gI(e)&&yI(e)}function XD(t){return vi(t)&&t.O_.length<10}function ZD(t,e){t.O_.push(e);const n=Er(t);n.r_()&&n.V_&&n.m_(e.mutations)}function gI(t){return vi(t)&&!Er(t).n_()&&t.O_.length>0}function yI(t){Er(t).start()}async function eN(t){Er(t).p_()}async function tN(t){const e=Er(t);for(const n of t.O_)e.m_(n.mutations)}async function nN(t,e,n){const r=t.O_.shift(),i=up.from(r,e,n);await mI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ta(t)}async function rN(t,e){e&&Er(t).V_&&await async function(r,i){if(function(o){return Fx(o)&&o!==O.ABORTED}(i.code)){const s=r.O_.shift();Er(r).s_(),await mI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ta(r)}}(t,e),gI(t)&&yI(t)}async function g_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=vi(n);n.L_.add(3),await ks(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ia(n)}async function iN(t,e){const n=J(t);e?(n.L_.delete(2),await Ia(n)):e||(n.L_.add(2),await ks(n),n.q_.set("Unknown"))}function xs(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new $D(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:HD.bind(null,t),Ro:QD.bind(null,t),mo:YD.bind(null,t),d_:JD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),wp(t)?Ep(t):t.q_.set("Unknown")):(await t.K_.stop(),pI(t))})),t.K_}function Er(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new qD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:eN.bind(null,t),mo:rN.bind(null,t),f_:tN.bind(null,t),g_:nN.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ta(t)):(await t.U_.stop(),t.O_.length>0&&(F("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ip(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(t,e){if(st("AsyncQueue",`${e}: ${t}`),Rr(t))return new K(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=ho(),this.sortedSet=new Ee(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.W_=new Ee(z.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):G():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vs{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new vs(e,n,ns.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oN{constructor(){this.queries=__(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=__(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(O.ABORTED,"Firestore shutting down"))}}function __(){return new Cr(t=>_w(t),oc)}async function aN(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new sN,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tp(o,`Initialization of query '${xi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Sp(n)}async function lN(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uN(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Sp(n)}function cN(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Sp(t){t.Y_.forEach(e=>{e.next()})}var $d,v_;(v_=$d||($d={})).ea="default",v_.Cache="cache";class hN{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==$d.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.key=e}}class vI{constructor(e){this.key=e}}class dN{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=vw(e),this.Ra=new ns(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new y_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),S=Ea(this.query,p)?p:null,R=!!g&&this.mutatedKeys.has(g.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;g&&S?g.data.isEqual(S.data)?R!==D&&(r.track({type:3,doc:S}),b=!0):this.ga(g,S)||(r.track({type:2,doc:S}),b=!0,(u&&this.Aa(S,u)>0||c&&this.Aa(S,c)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),b=!0):g&&!S&&(r.track({type:1,doc:g}),b=!0,(u||c)&&(l=!0)),b&&(S?(o=o.add(S),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(S,R){const D=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return D(S)-D(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new vs(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new y_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new vI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new _I(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return vs.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pN{constructor(e){this.key=e,this.va=!1}}class mN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Cr(l=>_w(l),oc),this.Ma=new Map,this.xa=new Set,this.Oa=new Ee(z.comparator),this.Na=new Map,this.La=new mp,this.Ba={},this.ka=new Map,this.qa=di.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gN(t,e,n=!0){const r=AI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await EI(r,e,n,!0),i}async function yN(t,e){const n=AI(t);await EI(n,e,!0,!1)}async function EI(t,e,n,r){const i=await LD(t.localStore,Mt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await _N(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&dI(t.remoteStore,i),l}async function _N(t,e,n,r,i){t.Ka=(p,g,S)=>async function(D,b,w,_){let A=b.view.ma(w);A.ns&&(A=await f_(D.localStore,b.query,!1).then(({documents:v})=>b.view.ma(v,A)));const V=_&&_.targetChanges.get(b.targetId),M=_&&_.targetMismatches.get(b.targetId)!=null,L=b.view.applyChanges(A,D.isPrimaryClient,V,M);return w_(D,b.targetId,L.wa),L.snapshot}(t,p,g,S);const s=await f_(t.localStore,e,!0),o=new dN(e,s.Ts),l=o.ma(s.documents),u=wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);w_(t,n,c.wa);const f=new fN(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function vN(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!oc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await zd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&_p(r.remoteStore,i.targetId),qd(r,i.targetId)}).catch(_i)):(qd(r,i.targetId),await zd(r.localStore,i.targetId,!0))}async function EN(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_p(n.remoteStore,r.targetId))}async function wN(t,e,n){const r=PI(t);try{const i=await function(o,l){const u=J(o),c=Ae.now(),f=l.reduce((S,R)=>S.add(R.key),te());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let R=wt(),D=te();return u.cs.getEntries(S,f).next(b=>{R=b,R.forEach((w,_)=>{_.isValidDocument()||(D=D.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,R)).next(b=>{p=b;const w=[];for(const _ of l){const A=Lx(_,p.get(_.key).overlayedDocument);A!=null&&w.push(new kr(_.key,A,cw(A.value.mapValue),It.exists(!0)))}return u.mutationQueue.addMutationBatch(S,c,w,l)}).next(b=>{g=b;const w=b.applyToLocalDocumentSet(p,D);return u.documentOverlayCache.saveOverlays(S,b.batchId,w)})}).then(()=>({batchId:g.batchId,changes:ww(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ee(Z)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Sa(r,i.changes),await Ta(r.remoteStore)}catch(i){const s=Tp(i,"Failed to persist write");n.reject(s)}}async function wI(t,e){const n=J(t);try{const r=await VD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?W(o.va):i.removedDocuments.size>0&&(W(o.va),o.va=!1))}),await Sa(n,r,e)}catch(r){await _i(r)}}function E_(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const g of p.j_)g.Z_(l)&&(c=!0)}),c&&Sp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IN(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ee(z.comparator);o=o.insert(s,ke.newNoDocument(s,Q.min()));const l=te().add(s),u=new uc(Q.min(),new Map,new Ee(Z),o,l);await wI(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Ap(r)}else await zd(r.localStore,e,!1).then(()=>qd(r,e,n)).catch(_i)}async function TN(t,e){const n=J(t),r=e.batch.batchId;try{const i=await ND(n.localStore,e);TI(n,r,null),II(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sa(n,i)}catch(i){await _i(i)}}async function SN(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(W(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);TI(r,e,n),II(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sa(r,i)}catch(i){await _i(i)}}function II(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function TI(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function qd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||SI(t,r)})}function SI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(_p(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Ap(t))}function w_(t,e,n){for(const r of n)r instanceof _I?(t.La.addReference(r.key,e),AN(t,r)):r instanceof vI?(F("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||SI(t,r.key)):G()}function AN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(F("SyncEngine","New document in limbo: "+n),t.xa.add(r),Ap(t))}function Ap(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new z(fe.fromString(e)),r=t.qa.next();t.Na.set(r,new pN(n)),t.Oa=t.Oa.insert(n,r),dI(t.remoteStore,new Tn(Mt(sc(n.path)),r,"TargetPurposeLimboResolution",bt.oe))}}async function Sa(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=yp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>x.forEach(c,g=>x.forEach(g.$i,S=>f.persistence.referenceDelegate.addReference(p,g.targetId,S)).next(()=>x.forEach(g.Ui,S=>f.persistence.referenceDelegate.removeReference(p,g.targetId,S)))))}catch(p){if(!Rr(p))throw p;F("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const S=f.os.get(g),R=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(g,D)}}}(r.localStore,s))}async function PN(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await aI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(O.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sa(n,r.hs)}}function RN(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function AI(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IN.bind(null,e),e.Ca.d_=uN.bind(null,e.eventManager),e.Ca.$a=cN.bind(null,e.eventManager),e}function PI(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SN.bind(null,e),e}class sa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return oI(this.persistence,new sI,e.initialUser,this.serializer)}Ga(e){return new iI(dc.Zr,this.serializer)}Wa(e){return new uI}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}sa.provider={build:()=>new sa};class CN extends sa{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await PI(this.Ja.syncEngine),await Ta(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return oI(this.persistence,new sI,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new fD(r,e.asyncQueue,n)}Ha(e,n){const r=new zk(n,this.persistence);return new Bk(e.asyncQueue,r)}Ga(e){const n=kD(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new gp(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,zD(),jl(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new uI}}class Du{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>E_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=PN.bind(null,this.syncEngine),await iN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oN}()}createDatastore(e){const n=fc(e.databaseInfo.databaseId),r=function(s){return new BD(s)}(e.databaseInfo);return function(s,o,l,u){return new KD(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new WD(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>E_(this.syncEngine,n,0),function(){return m_.D()?new m_:new FD}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new mN(i,s,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);F("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await ks(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Du.provider={build:()=>new Du};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):st("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=YE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{F("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(F("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wh(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await aI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function I_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RI(t);F("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>g_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>g_(e.remoteStore,i)),t._onlineComponents=e}async function RI(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await wh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;oi("Error using user provided cache. Falling back to memory cache: "+n),await wh(t,new sa)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await wh(t,new sa);return t._offlineComponents}async function Pp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await I_(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await I_(t,new Du))),t._onlineComponents}function CI(t){return RI(t).then(e=>e.persistence)}function kI(t){return Pp(t).then(e=>e.remoteStore)}function DN(t){return Pp(t).then(e=>e.syncEngine)}async function T_(t){const e=await Pp(t),n=e.eventManager;return n.onListen=gN.bind(null,e.syncEngine),n.onUnlisten=vN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EN.bind(null,e.syncEngine),n}function NN(t){return t.asyncQueue.enqueue(async()=>{const e=await CI(t),n=await kI(t);return e.setNetworkEnabled(!0),function(i){const s=J(i);return s.L_.delete(0),Ia(s)}(n)})}function VN(t){return t.asyncQueue.enqueue(async()=>{const e=await CI(t),n=await kI(t);return e.setNetworkEnabled(!1),async function(i){const s=J(i);s.L_.add(0),await ks(s),s.q_.set("Offline")}(n)})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t,e,n){if(!n)throw new K(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ON(t,e,n,r){if(e===!0&&r===!0)throw new K(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function A_(t){if(!z.isDocumentKey(t))throw new K(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rp(t);throw new K(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ON("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Cp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new P_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new P_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kk;switch(r.type){case"firstParty":return new Vk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=S_.get(n);r&&(F("ComponentProvider","Removing Datastore"),S_.delete(n),r.terminate())}(this),Promise.resolve()}}function LN(t,e,n,r={}){var i;const s=(t=Pn(t,Cp))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=qe.MOCK_USER;else{l=HA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new qe(c)}t._authCredentials=new xk(new QE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pc(this.firestore,e,this._query)}}class Ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class oa extends pc{constructor(e,n,r){super(e,n,sc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new z(e))}withConverter(e){return new oa(this.firestore,e,this._path)}}function R_(t,e,...n){if(t=At(t),arguments.length===1&&(e=YE.newId()),bN("doc","path",e),t instanceof Cp){const r=fe.fromString(e,...n);return A_(r),new Ft(t,null,new z(r))}{if(!(t instanceof Ft||t instanceof oa))throw new K(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return A_(r),new Ft(t.firestore,t instanceof oa?t.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new cI(this,"async_queue_retry"),this.Vu=()=>{const r=jl();r&&F("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=jl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Rr(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw st("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ip.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&G()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function k_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class fi extends Cp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new C_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new C_(e),this._firestoreClient=void 0,await e}}}function MN(t,e){const n=typeof t=="object"?t:sE(),r=typeof t=="string"?t:"(default)",i=zf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=GA("firestore");s&&LN(i,...s)}return i}function mc(t){if(t._terminated)throw new K(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||DI(t),t._firestoreClient}function DI(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new cx(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,xI(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new xN(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}function FN(t,e){oi("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return UN(t,Du.provider,{build:r=>new CN(r,n.cacheSizeBytes,void 0)}),Promise.resolve()}function UN(t,e,n){if((t=Pn(t,fi))._firestoreClient||t._terminated)throw new K(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new K(O.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},DI(t)}function jN(t){return NN(mc(t=Pn(t,fi)))}function BN(t){return VN(mc(t=Pn(t,fi)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(be.fromBase64String(e))}catch(n){throw new K(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN=/^__.*__$/;class $N{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new kr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Cs(e,this.data,n,this.fieldTransforms)}}function NI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Vp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Vp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Nu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(NI(this.Cu)&&zN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class qN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fc(e)}Qu(e,n,r,i=!1){return new Vp({Cu:e,methodName:n,qu:r,path:Te.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function KN(t){const e=t._freezeSettings(),n=fc(t._databaseId);return new qN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GN(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);LI("Data must be an object, but it was:",o,r);const l=bI(r,o);let u,c;if(s.merge)u=new Ot(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=WN(e,p,n);if(!o.contains(g))throw new K(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);QN(f,g)||f.push(g)}u=new Ot(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new $N(new ft(l),u,c)}class bp extends xp{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new ys(e.serializer,Sw(e.serializer,this.$u));return new kw(e.path,n)}isEqual(e){return e instanceof bp&&this.$u===e.$u}}function VI(t,e){if(OI(t=At(t)))return LI("Unsupported field value:",e,t),bI(t,e);if(t instanceof xp)return function(r,i){if(!NI(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=VI(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=At(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sw(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ae.fromDate(r);return{timestampValue:_s(i.serializer,s)}}if(r instanceof Ae){const s=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_s(i.serializer,s)}}if(r instanceof Dp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Es)return{bytesValue:Lw(i.serializer,r._byteString)};if(r instanceof Ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Np)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return op(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Rp(r)}`)}(t,e)}function bI(t,e){const n={};return ow(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,i)=>{const s=VI(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function OI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Dp||t instanceof Es||t instanceof Ft||t instanceof xp||t instanceof Np)}function LI(t,e,n){if(!OI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Rp(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function WN(t,e,n){if((e=At(e))instanceof kp)return e._internalPath;if(typeof e=="string")return MI(t,e);throw Nu("Field path arguments must be of type string or ",t,!1,void 0,n)}const HN=new RegExp("[~\\*/\\[\\]]");function MI(t,e,n){if(e.search(HN)>=0)throw Nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kp(...e.split("."))._internalPath}catch{throw Nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(O.INVALID_ARGUMENT,l+t+u)}function QN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(UI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YN extends FI{data(){return super.data()}}function UI(t,e){return typeof e=="string"?MI(t,e):e instanceof kp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class XN{convertValue(e,n="none"){switch(li(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>_e(o.doubleValue));return new Np(s)}convertGeoPoint(e){return new Dp(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=bn(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);W(Gw(r));const i=new ai(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||st(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jI extends FI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(UI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bl extends jI{data(e={}){return super.data(e)}}class eV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new mo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Bl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new mo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:tV(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class BI extends XN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function x_(t,e,n){t=Pn(t,Ft);const r=Pn(t.firestore,fi),i=ZN(t.converter,e,n);return rV(r,[GN(KN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,It.none())])}function nV(t,...e){var n,r,i;t=At(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||k_(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(k_(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,f;if(t instanceof Ft)c=Pn(t.firestore,fi),f=sc(t._key.path),u={next:p=>{e[o]&&e[o](iV(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Pn(t,pc);c=Pn(p.firestore,fi),f=p._query;const g=new BI(c);u={next:S=>{e[o]&&e[o](new eV(c,g,p,S))},error:e[o+1],complete:e[o+2]},JN(t._query)}return function(g,S,R,D){const b=new kN(D),w=new hN(S,b,R);return g.asyncQueue.enqueueAndForget(async()=>aN(await T_(g),w)),()=>{b.Za(),g.asyncQueue.enqueueAndForget(async()=>lN(await T_(g),w))}}(mc(c),f,l,u)}function rV(t,e){return function(r,i){const s=new pr;return r.asyncQueue.enqueueAndForget(async()=>wN(await DN(r),i,s)),s.promise}(mc(t),e)}function iV(t,e,n){const r=n.docs.get(e._key),i=new BI(t);return new jI(t,i,e._key,r,new mo(n.hasPendingWrites,n.fromCache),e.converter)}function D_(t){return new bp("increment",t)}(function(e,n=!0){(function(i){Ps=i})(Ss),cs(new ni("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new fi(new Dk(r.getProvider("auth-internal")),new Ok(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ai(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),fr(Iy,"4.7.3",e),fr(Iy,"4.7.3","esm2017")})();const sV={apiKey:"AIzaSyCYm3RVxxrJD4aehu4z5UCbT01LAMWHDl8",authDomain:"internal-paperclip.firebaseapp.com",projectId:"internal-paperclip",storageBucket:"internal-paperclip.firebasestorage.app",messagingSenderId:"769824944745",appId:"1:769824944745:web:3dc3b9c6468131dad9e8f8",measurementId:"G-QNZKGF235L"},zI=iE(sV),Vu=Ak(zI),go=MN(zI);FN(go).catch(t=>{t.code==="failed-precondition"?console.warn("Multiple tabs open, persistence can only be enabled in one tab at a time."):t.code==="unimplemented"&&console.warn("The current browser does not support offline persistence.")});const $I=H.createContext({user:null,loading:!0,error:null});function oV({children:t}){const[e,n]=H.useState(null),[r,i]=H.useState(!0),[s,o]=H.useState(null);return H.useEffect(()=>{const l=NE(Vu,u=>{n(u),i(!1)},u=>{o(u),i(!1)});return()=>l()},[]),B.jsx($I.Provider,{value:{user:e,loading:r,error:s},children:t})}const aV=()=>H.useContext($I),lV=H.createContext({paperclips:0,funds:100,offline:!1,makePaperclip:async()=>{},toggleNetwork:async()=>{}});function uV({children:t}){const[e,n]=H.useState({paperclips:0,funds:100,offline:!1}),{user:r}=aV(),i=async()=>{try{e.offline?await jN(go):await BN(go),n(o=>({...o,offline:!o.offline}))}catch(o){console.error("Network toggle failed:",o)}};H.useEffect(()=>{if(!r)return;const o=R_(go,"users",r.uid),l=nV(o,u=>{u.exists()?n(c=>({...c,...u.data()})):x_(o,{paperclips:0,funds:100}).catch(console.error)},u=>{console.error("Game state sync error:",u),n(c=>({...c,offline:!0}))});return()=>l()},[r]);const s=async()=>{if(!(!r||e.funds<.01))try{const o=R_(go,"users",r.uid);await x_(o,{paperclips:D_(1),funds:D_(-.01)},{merge:!0})}catch(o){console.error("Failed to make paperclip:",o)}};return B.jsx(lV.Provider,{value:{...e,makePaperclip:s,toggleNetwork:i},children:t})}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hV=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Op=(t,e)=>{const n=H.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...c},f)=>H.createElement("svg",{ref:f,...cV,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${hV(t)}`,l].join(" "),...c},[...e.map(([p,g])=>H.createElement(p,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dV=Op("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qI=Op("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fV=Op("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);function KI(){return B.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50",children:B.jsx(dV,{className:"w-8 h-8 animate-spin text-blue-500"})})}function pV(){const[t,e]=H.useState(!0),[n,r]=H.useState(""),[i,s]=H.useState(""),[o,l]=H.useState(!1),[u,c]=H.useState(""),f=async p=>{p.preventDefault(),l(!0),c("");try{t?await dC(Vu,n,i):await hC(Vu,n,i)}catch(g){c(g instanceof Error?g.message:"Authentication failed")}finally{l(!1)}};return o?B.jsx(KI,{}):B.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center p-4",children:B.jsxs("div",{className:"max-w-md w-full bg-gray-800 rounded-lg shadow-xl p-8",children:[B.jsx("div",{className:"flex justify-center mb-8",children:B.jsx(qI,{className:"h-12 w-12 text-blue-500"})}),B.jsx("h1",{className:"text-3xl font-bold text-white text-center mb-8",children:"Universal Paperclips"}),B.jsxs("form",{onSubmit:f,className:"space-y-6",children:[B.jsxs("div",{children:[B.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Email"}),B.jsx("input",{type:"email",value:n,onChange:p=>r(p.target.value),className:"mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500",required:!0})]}),B.jsxs("div",{children:[B.jsx("label",{className:"block text-sm font-medium text-gray-300",children:"Password"}),B.jsx("input",{type:"password",value:i,onChange:p=>s(p.target.value),className:"mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500",required:!0})]}),u&&B.jsx("div",{className:"text-red-500 text-sm",children:u}),B.jsx("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:t?"Sign In":"Sign Up"})]}),B.jsx("div",{className:"mt-6",children:B.jsx("button",{onClick:()=>e(!t),className:"w-full text-sm text-blue-400 hover:text-blue-300",children:t?"Need an account? Sign up":"Already have an account? Sign in"})})]})})}function mV(){const[t,e]=H.useState(0),[n,r]=H.useState(0),[i,s]=H.useState(.25),[o,l]=H.useState(1),[u,c]=H.useState(0),[f,p]=H.useState(1e3),[g]=H.useState(.25);return H.useEffect(()=>{const w=setInterval(()=>{u>0&&f>=u&&(e(_=>_+u),p(_=>_-u),r(_=>_+i*u))},1e3);return()=>clearInterval(w)},[u,i,f]),{paperclips:t,funds:n,clipPrice:i,marketingLevel:o,autoClippers:u,wireInches:f,wireCost:g,makePaperclip:()=>{f>0&&(e(w=>w+1),r(w=>w+i),p(w=>w-1))},buyAutoClipper:()=>{const w=Math.floor(100*Math.pow(1.1,u));n>=w&&(r(_=>_-w),c(_=>_+1))},increaseMarketing:()=>{const w=Math.floor(100*Math.pow(1.1,o));n>=w&&(r(_=>_-w),l(_=>_+1))},adjustPrice:w=>{s(_=>Math.max(.01,_+w))}}}function gV({paperclips:t=0,funds:e=0,wireInches:n=0,wireCost:r=0}){const i=n*2.54;return B.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg",children:[B.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Statistics"}),B.jsxs("div",{className:"space-y-4",children:[B.jsxs("div",{className:"bg-gray-700 p-4 rounded",children:[B.jsx("h3",{className:"text-gray-300 text-sm",children:"Total Paperclips"}),B.jsx("p",{className:"text-2xl font-bold text-white",children:t.toLocaleString()})]}),B.jsxs("div",{className:"bg-gray-700 p-4 rounded",children:[B.jsx("h3",{className:"text-gray-300 text-sm",children:"Available Funds"}),B.jsxs("p",{className:"text-2xl font-bold text-white",children:["$",e.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),B.jsxs("div",{className:"bg-gray-700 p-4 rounded",children:[B.jsx("h3",{className:"text-gray-300 text-sm",children:"Wire"}),B.jsxs("p",{className:"text-lg text-white",children:[n.toLocaleString()," inches"]}),B.jsxs("p",{className:"text-sm text-gray-400",children:["(",i.toLocaleString()," cm)"]}),B.jsxs("p",{className:"text-sm text-gray-400",children:["Cost: $",r.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})," per inch"]})]})]})]})}function yV({clipPrice:t,funds:e,makePaperclip:n,adjustPrice:r}){return B.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg",children:[B.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Controls"}),B.jsxs("div",{className:"space-y-6",children:[B.jsx("div",{className:"text-center",children:B.jsx("button",{onClick:n,className:"w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-200",children:"Make Paperclip"})}),B.jsxs("div",{className:"bg-gray-700 p-4 rounded",children:[B.jsx("h3",{className:"text-gray-300 text-sm mb-2",children:"Price per Clip"}),B.jsxs("div",{className:"flex items-center justify-between",children:[B.jsx("button",{onClick:()=>r(-.01),className:"bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded",children:"-"}),B.jsxs("span",{className:"text-xl font-bold text-white",children:["$",t.toFixed(2)]}),B.jsx("button",{onClick:()=>r(.01),className:"bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded",children:"+"})]})]})]})]})}function _V({funds:t,autoClippers:e,marketingLevel:n,buyAutoClipper:r,increaseMarketing:i}){const s=Math.floor(100*Math.pow(1.1,e)),o=Math.floor(100*Math.pow(1.1,n));return B.jsxs("div",{className:"bg-gray-800 p-6 rounded-lg",children:[B.jsx("h2",{className:"text-xl font-bold text-white mb-4",children:"Upgrades"}),B.jsxs("div",{className:"space-y-4",children:[B.jsxs("div",{className:"bg-gray-700 p-4 rounded",children:[B.jsx("h3",{className:"text-gray-300 text-sm",children:"Auto-Clippers"}),B.jsxs("p",{className:"text-white mb-2",children:["Owned: ",e]}),B.jsxs("button",{onClick:r,disabled:t<s,className:"w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white py-2 px-4 rounded transition duration-200",children:["Buy Auto-Clipper ($",s,")"]})]}),B.jsxs("div",{className:"bg-gray-700 p-4 rounded",children:[B.jsx("h3",{className:"text-gray-300 text-sm",children:"Marketing"}),B.jsxs("p",{className:"text-white mb-2",children:["Level: ",n]}),B.jsxs("button",{onClick:i,disabled:t<o,className:"w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 text-white py-2 px-4 rounded transition duration-200",children:["Upgrade Marketing ($",o,")"]})]})]})]})}function vV({userId:t}){const{paperclips:e,funds:n,clipPrice:r,marketingLevel:i,autoClippers:s,wireInches:o,wireCost:l,makePaperclip:u,buyAutoClipper:c,increaseMarketing:f,adjustPrice:p}=mV();return B.jsx("div",{className:"min-h-screen bg-gray-900 py-8 px-4",children:B.jsxs("div",{className:"max-w-6xl mx-auto",children:[B.jsxs("div",{className:"flex items-center justify-center mb-8",children:[B.jsx(qI,{className:"h-12 w-12 text-blue-500"}),B.jsx("h1",{className:"text-3xl font-bold text-white ml-3",children:"Universal Paperclips"})]}),B.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[B.jsx(gV,{paperclips:e,funds:n,wireInches:o,wireCost:l}),B.jsx(yV,{clipPrice:r,funds:n,makePaperclip:u,adjustPrice:p}),B.jsx(_V,{funds:n,autoClippers:s,marketingLevel:i,buyAutoClipper:c,increaseMarketing:f})]})]})})}function EV(){const[t,e]=H.useState(null),[n,r]=H.useState(!0);return H.useEffect(()=>{const i=NE(Vu,s=>{e(s),r(!1)});return()=>i()},[]),{user:t,loading:n}}function wV(){const{user:t,loading:e}=EV();return e?B.jsx(KI,{}):t?B.jsxs(uV,{children:[B.jsx(vV,{userId:t.uid}),B.jsx("footer",{className:"fixed bottom-0 left-0 right-0 bg-gray-800 p-4 text-center",children:B.jsxs("a",{href:"https://www.youtube.com/@phillenomade",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center text-white hover:text-blue-400 transition-colors",children:[B.jsx(fV,{className:"w-5 h-5 mr-2"}),"Follow me on YouTube"]})})]}):B.jsx(pV,{})}function IV(){return B.jsx(oV,{children:B.jsx(wV,{})})}q0(document.getElementById("root")).render(B.jsxs(H.StrictMode,{children:[B.jsx(IV,{}),B.jsx(FA,{position:"top-right",toastOptions:{style:{background:"#1F2937",color:"#fff"}}})]}));
