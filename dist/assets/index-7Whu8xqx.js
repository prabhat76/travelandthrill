(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Uc={exports:{}},Ms={},Fc={exports:{}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function dx(){if(Dm)return fe;Dm=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(S){return S===null||typeof S!="object"?null:(S=v&&S[v]||S["@@iterator"],typeof S=="function"?S:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,O={};function P(S,D,ae){this.props=S,this.context=D,this.refs=O,this.updater=ae||b}P.prototype.isReactComponent={},P.prototype.setState=function(S,D){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,D,"setState")},P.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function G(){}G.prototype=P.prototype;function K(S,D,ae){this.props=S,this.context=D,this.refs=O,this.updater=ae||b}var B=K.prototype=new G;B.constructor=K,A(B,P.prototype),B.isPureReactComponent=!0;var V=Array.isArray,te=Object.prototype.hasOwnProperty,ne={current:null},ce={key:!0,ref:!0,__self:!0,__source:!0};function de(S,D,ae){var le,ye={},ve=null,Ie=null;if(D!=null)for(le in D.ref!==void 0&&(Ie=D.ref),D.key!==void 0&&(ve=""+D.key),D)te.call(D,le)&&!ce.hasOwnProperty(le)&&(ye[le]=D[le]);var Ee=arguments.length-2;if(Ee===1)ye.children=ae;else if(1<Ee){for(var Se=Array(Ee),kt=0;kt<Ee;kt++)Se[kt]=arguments[kt+2];ye.children=Se}if(S&&S.defaultProps)for(le in Ee=S.defaultProps,Ee)ye[le]===void 0&&(ye[le]=Ee[le]);return{$$typeof:n,type:S,key:ve,ref:Ie,props:ye,_owner:ne.current}}function Ne(S,D){return{$$typeof:n,type:S.type,key:D,ref:S.ref,props:S.props,_owner:S._owner}}function he(S){return typeof S=="object"&&S!==null&&S.$$typeof===n}function Ye(S){var D={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ae){return D[ae]})}var Et=/\/+/g;function ze(S,D){return typeof S=="object"&&S!==null&&S.key!=null?Ye(""+S.key):D.toString(36)}function Pt(S,D,ae,le,ye){var ve=typeof S;(ve==="undefined"||ve==="boolean")&&(S=null);var Ie=!1;if(S===null)Ie=!0;else switch(ve){case"string":case"number":Ie=!0;break;case"object":switch(S.$$typeof){case n:case e:Ie=!0}}if(Ie)return Ie=S,ye=ye(Ie),S=le===""?"."+ze(Ie,0):le,V(ye)?(ae="",S!=null&&(ae=S.replace(Et,"$&/")+"/"),Pt(ye,D,ae,"",function(kt){return kt})):ye!=null&&(he(ye)&&(ye=Ne(ye,ae+(!ye.key||Ie&&Ie.key===ye.key?"":(""+ye.key).replace(Et,"$&/")+"/")+S)),D.push(ye)),1;if(Ie=0,le=le===""?".":le+":",V(S))for(var Ee=0;Ee<S.length;Ee++){ve=S[Ee];var Se=le+ze(ve,Ee);Ie+=Pt(ve,D,ae,Se,ye)}else if(Se=x(S),typeof Se=="function")for(S=Se.call(S),Ee=0;!(ve=S.next()).done;)ve=ve.value,Se=le+ze(ve,Ee++),Ie+=Pt(ve,D,ae,Se,ye);else if(ve==="object")throw D=String(S),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.");return Ie}function Le(S,D,ae){if(S==null)return S;var le=[],ye=0;return Pt(S,le,"","",function(ve){return D.call(ae,ve,ye++)}),le}function Je(S){if(S._status===-1){var D=S._result;D=D(),D.then(function(ae){(S._status===0||S._status===-1)&&(S._status=1,S._result=ae)},function(ae){(S._status===0||S._status===-1)&&(S._status=2,S._result=ae)}),S._status===-1&&(S._status=0,S._result=D)}if(S._status===1)return S._result.default;throw S._result}var Oe={current:null},W={transition:null},J={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:W,ReactCurrentOwner:ne};function H(){throw Error("act(...) is not supported in production builds of React.")}return fe.Children={map:Le,forEach:function(S,D,ae){Le(S,function(){D.apply(this,arguments)},ae)},count:function(S){var D=0;return Le(S,function(){D++}),D},toArray:function(S){return Le(S,function(D){return D})||[]},only:function(S){if(!he(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},fe.Component=P,fe.Fragment=t,fe.Profiler=o,fe.PureComponent=K,fe.StrictMode=s,fe.Suspense=m,fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,fe.act=H,fe.cloneElement=function(S,D,ae){if(S==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+S+".");var le=A({},S.props),ye=S.key,ve=S.ref,Ie=S._owner;if(D!=null){if(D.ref!==void 0&&(ve=D.ref,Ie=ne.current),D.key!==void 0&&(ye=""+D.key),S.type&&S.type.defaultProps)var Ee=S.type.defaultProps;for(Se in D)te.call(D,Se)&&!ce.hasOwnProperty(Se)&&(le[Se]=D[Se]===void 0&&Ee!==void 0?Ee[Se]:D[Se])}var Se=arguments.length-2;if(Se===1)le.children=ae;else if(1<Se){Ee=Array(Se);for(var kt=0;kt<Se;kt++)Ee[kt]=arguments[kt+2];le.children=Ee}return{$$typeof:n,type:S.type,key:ye,ref:ve,props:le,_owner:Ie}},fe.createContext=function(S){return S={$$typeof:c,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},S.Provider={$$typeof:l,_context:S},S.Consumer=S},fe.createElement=de,fe.createFactory=function(S){var D=de.bind(null,S);return D.type=S,D},fe.createRef=function(){return{current:null}},fe.forwardRef=function(S){return{$$typeof:f,render:S}},fe.isValidElement=he,fe.lazy=function(S){return{$$typeof:_,_payload:{_status:-1,_result:S},_init:Je}},fe.memo=function(S,D){return{$$typeof:g,type:S,compare:D===void 0?null:D}},fe.startTransition=function(S){var D=W.transition;W.transition={};try{S()}finally{W.transition=D}},fe.unstable_act=H,fe.useCallback=function(S,D){return Oe.current.useCallback(S,D)},fe.useContext=function(S){return Oe.current.useContext(S)},fe.useDebugValue=function(){},fe.useDeferredValue=function(S){return Oe.current.useDeferredValue(S)},fe.useEffect=function(S,D){return Oe.current.useEffect(S,D)},fe.useId=function(){return Oe.current.useId()},fe.useImperativeHandle=function(S,D,ae){return Oe.current.useImperativeHandle(S,D,ae)},fe.useInsertionEffect=function(S,D){return Oe.current.useInsertionEffect(S,D)},fe.useLayoutEffect=function(S,D){return Oe.current.useLayoutEffect(S,D)},fe.useMemo=function(S,D){return Oe.current.useMemo(S,D)},fe.useReducer=function(S,D,ae){return Oe.current.useReducer(S,D,ae)},fe.useRef=function(S){return Oe.current.useRef(S)},fe.useState=function(S){return Oe.current.useState(S)},fe.useSyncExternalStore=function(S,D,ae){return Oe.current.useSyncExternalStore(S,D,ae)},fe.useTransition=function(){return Oe.current.useTransition()},fe.version="18.3.1",fe}var jm;function jd(){return jm||(jm=1,Fc.exports=dx()),Fc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function hx(){if(Lm)return Ms;Lm=1;var n=jd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,m,g){var _,v={},x=null,b=null;g!==void 0&&(x=""+g),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(b=m.ref);for(_ in m)s.call(m,_)&&!l.hasOwnProperty(_)&&(v[_]=m[_]);if(f&&f.defaultProps)for(_ in m=f.defaultProps,m)v[_]===void 0&&(v[_]=m[_]);return{$$typeof:e,type:f,key:x,ref:b,props:v,_owner:o.current}}return Ms.Fragment=t,Ms.jsx=c,Ms.jsxs=c,Ms}var Mm;function fx(){return Mm||(Mm=1,Uc.exports=hx()),Uc.exports}var p=fx(),La={},Bc={exports:{}},Mt={},zc={exports:{}},Wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function px(){return Um||(Um=1,(function(n){function e(W,J){var H=W.length;W.push(J);e:for(;0<H;){var S=H-1>>>1,D=W[S];if(0<o(D,J))W[S]=J,W[H]=D,H=S;else break e}}function t(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var J=W[0],H=W.pop();if(H!==J){W[0]=H;e:for(var S=0,D=W.length,ae=D>>>1;S<ae;){var le=2*(S+1)-1,ye=W[le],ve=le+1,Ie=W[ve];if(0>o(ye,H))ve<D&&0>o(Ie,ye)?(W[S]=Ie,W[ve]=H,S=ve):(W[S]=ye,W[le]=H,S=le);else if(ve<D&&0>o(Ie,H))W[S]=Ie,W[ve]=H,S=ve;else break e}}return J}function o(W,J){var H=W.sortIndex-J.sortIndex;return H!==0?H:W.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var m=[],g=[],_=1,v=null,x=3,b=!1,A=!1,O=!1,P=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,K=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(W){for(var J=t(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=W)s(g),J.sortIndex=J.expirationTime,e(m,J);else break;J=t(g)}}function V(W){if(O=!1,B(W),!A)if(t(m)!==null)A=!0,Je(te);else{var J=t(g);J!==null&&Oe(V,J.startTime-W)}}function te(W,J){A=!1,O&&(O=!1,G(de),de=-1),b=!0;var H=x;try{for(B(J),v=t(m);v!==null&&(!(v.expirationTime>J)||W&&!Ye());){var S=v.callback;if(typeof S=="function"){v.callback=null,x=v.priorityLevel;var D=S(v.expirationTime<=J);J=n.unstable_now(),typeof D=="function"?v.callback=D:v===t(m)&&s(m),B(J)}else s(m);v=t(m)}if(v!==null)var ae=!0;else{var le=t(g);le!==null&&Oe(V,le.startTime-J),ae=!1}return ae}finally{v=null,x=H,b=!1}}var ne=!1,ce=null,de=-1,Ne=5,he=-1;function Ye(){return!(n.unstable_now()-he<Ne)}function Et(){if(ce!==null){var W=n.unstable_now();he=W;var J=!0;try{J=ce(!0,W)}finally{J?ze():(ne=!1,ce=null)}}else ne=!1}var ze;if(typeof K=="function")ze=function(){K(Et)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Le=Pt.port2;Pt.port1.onmessage=Et,ze=function(){Le.postMessage(null)}}else ze=function(){P(Et,0)};function Je(W){ce=W,ne||(ne=!0,ze())}function Oe(W,J){de=P(function(){W(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){A||b||(A=!0,Je(te))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ne=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(W){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var H=x;x=J;try{return W()}finally{x=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,J){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var H=x;x=W;try{return J()}finally{x=H}},n.unstable_scheduleCallback=function(W,J,H){var S=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?S+H:S):H=S,W){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=H+D,W={id:_++,callback:J,priorityLevel:W,startTime:H,expirationTime:D,sortIndex:-1},H>S?(W.sortIndex=H,e(g,W),t(m)===null&&W===t(g)&&(O?(G(de),de=-1):O=!0,Oe(V,H-S))):(W.sortIndex=D,e(m,W),A||b||(A=!0,Je(te))),W},n.unstable_shouldYield=Ye,n.unstable_wrapCallback=function(W){var J=x;return function(){var H=x;x=J;try{return W.apply(this,arguments)}finally{x=H}}}})(Wc)),Wc}var Fm;function mx(){return Fm||(Fm=1,zc.exports=px()),zc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bm;function gx(){if(Bm)return Mt;Bm=1;var n=jd(),e=mx();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){c(r,i),c(r+"Capture",i)}function c(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(r){return m.call(v,r)?!0:m.call(_,r)?!1:g.test(r)?v[r]=!0:(_[r]=!0,!1)}function b(r,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function A(r,i,a,u){if(i===null||typeof i>"u"||b(r,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function O(r,i,a,u,d,h,y){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=h,this.removeEmptyString=y}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){P[r]=new O(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];P[i]=new O(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){P[r]=new O(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){P[r]=new O(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){P[r]=new O(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){P[r]=new O(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){P[r]=new O(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){P[r]=new O(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){P[r]=new O(r,5,!1,r.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function K(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(G,K);P[i]=new O(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(G,K);P[i]=new O(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(G,K);P[i]=new O(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){P[r]=new O(r,1,!1,r.toLowerCase(),null,!1,!1)}),P.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){P[r]=new O(r,1,!1,r.toLowerCase(),null,!0,!0)});function B(r,i,a,u){var d=P.hasOwnProperty(i)?P[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,d,u)&&(a=null),u||d===null?x(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?r.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?r.setAttributeNS(u,i,a):r.setAttribute(i,a))))}var V=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,te=Symbol.for("react.element"),ne=Symbol.for("react.portal"),ce=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),Ne=Symbol.for("react.profiler"),he=Symbol.for("react.provider"),Ye=Symbol.for("react.context"),Et=Symbol.for("react.forward_ref"),ze=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),Le=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Oe=Symbol.for("react.offscreen"),W=Symbol.iterator;function J(r){return r===null||typeof r!="object"?null:(r=W&&r[W]||r["@@iterator"],typeof r=="function"?r:null)}var H=Object.assign,S;function D(r){if(S===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);S=i&&i[1]||""}return`
`+S+r}var ae=!1;function le(r,i){if(!r||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(T){var u=T}Reflect.construct(r,[],i)}else{try{i.call()}catch(T){u=T}r.call(i.prototype)}else{try{throw Error()}catch(T){u=T}r()}}catch(T){if(T&&u&&typeof T.stack=="string"){for(var d=T.stack.split(`
`),h=u.stack.split(`
`),y=d.length-1,w=h.length-1;1<=y&&0<=w&&d[y]!==h[w];)w--;for(;1<=y&&0<=w;y--,w--)if(d[y]!==h[w]){if(y!==1||w!==1)do if(y--,w--,0>w||d[y]!==h[w]){var E=`
`+d[y].replace(" at new "," at ");return r.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",r.displayName)),E}while(1<=y&&0<=w);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?D(r):""}function ye(r){switch(r.tag){case 5:return D(r.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 2:case 15:return r=le(r.type,!1),r;case 11:return r=le(r.type.render,!1),r;case 1:return r=le(r.type,!0),r;default:return""}}function ve(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case ce:return"Fragment";case ne:return"Portal";case Ne:return"Profiler";case de:return"StrictMode";case ze:return"Suspense";case Pt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case Ye:return(r.displayName||"Context")+".Consumer";case he:return(r._context.displayName||"Context")+".Provider";case Et:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Le:return i=r.displayName||null,i!==null?i:ve(r.type)||"Memo";case Je:i=r._payload,r=r._init;try{return ve(r(i))}catch{}}return null}function Ie(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(i);case 8:return i===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ee(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Se(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function kt(r){var i=Se(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),u=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,h=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return d.call(this)},set:function(y){u=""+y,h.call(this,y)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(y){u=""+y},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function R(r){r._valueTracker||(r._valueTracker=kt(r))}function z(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return r&&(u=Se(r)?r.checked?"true":"false":r.value),r=u,r!==a?(i.setValue(r),!0):!1}function ue(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function _e(r,i){var a=i.checked;return H({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ze(r,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ee(i.value!=null?i.value:a),r._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Nn(r,i){i=i.checked,i!=null&&B(r,"checked",i,!1)}function Ir(r,i){Nn(r,i);var a=Ee(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(u==="submit"||u==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?en(r,i.type,a):i.hasOwnProperty("defaultValue")&&en(r,i.type,Ee(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function Io(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function en(r,i,a){(i!=="number"||ue(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Bt=Array.isArray;function it(r,i,a,u){if(r=r.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=i.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&u&&(r[a].defaultSelected=!0)}else{for(a=""+Ee(a),i=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}i!==null||r[d].disabled||(i=r[d])}i!==null&&(i.selected=!0)}}function et(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return H({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function st(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Bt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:Ee(a)}}function Vh(r,i){var a=Ee(i.value),u=Ee(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),u!=null&&(r.defaultValue=""+u)}function $h(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function Gh(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yl(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?Gh(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var To,qh=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return r(i,a,u,d)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=To.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Zi(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m0=["Webkit","ms","Moz","O"];Object.keys(es).forEach(function(r){m0.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),es[i]=es[r]})});function Kh(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||es.hasOwnProperty(r)&&es[r]?(""+i).trim():i+"px"}function Yh(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Kh(a,i[a],u);a==="float"&&(a="cssFloat"),u?r.setProperty(a,d):r[a]=d}}var g0=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(r,i){if(i){if(g0[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Xl(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function Zl(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var eu=null,ii=null,si=null;function Qh(r){if(r=Es(r)){if(typeof eu!="function")throw Error(t(280));var i=r.stateNode;i&&(i=Xo(i),eu(r.stateNode,r.type,i))}}function Xh(r){ii?si?si.push(r):si=[r]:ii=r}function Jh(){if(ii){var r=ii,i=si;if(si=ii=null,Qh(r),i)for(r=0;r<i.length;r++)Qh(i[r])}}function Zh(r,i){return r(i)}function ef(){}var tu=!1;function tf(r,i,a){if(tu)return r(i,a);tu=!0;try{return Zh(r,i,a)}finally{tu=!1,(ii!==null||si!==null)&&(ef(),Jh())}}function ts(r,i){var a=r.stateNode;if(a===null)return null;var u=Xo(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var nu=!1;if(f)try{var ns={};Object.defineProperty(ns,"passive",{get:function(){nu=!0}}),window.addEventListener("test",ns,ns),window.removeEventListener("test",ns,ns)}catch{nu=!1}function y0(r,i,a,u,d,h,y,w,E){var T=Array.prototype.slice.call(arguments,3);try{i.apply(a,T)}catch(L){this.onError(L)}}var rs=!1,bo=null,Ro=!1,ru=null,v0={onError:function(r){rs=!0,bo=r}};function _0(r,i,a,u,d,h,y,w,E){rs=!1,bo=null,y0.apply(v0,arguments)}function w0(r,i,a,u,d,h,y,w,E){if(_0.apply(this,arguments),rs){if(rs){var T=bo;rs=!1,bo=null}else throw Error(t(198));Ro||(Ro=!0,ru=T)}}function Tr(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function nf(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function rf(r){if(Tr(r)!==r)throw Error(t(188))}function x0(r){var i=r.alternate;if(!i){if(i=Tr(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,u=i;;){var d=a.return;if(d===null)break;var h=d.alternate;if(h===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===a)return rf(d),r;if(h===u)return rf(d),i;h=h.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=h;else{for(var y=!1,w=d.child;w;){if(w===a){y=!0,a=d,u=h;break}if(w===u){y=!0,u=d,a=h;break}w=w.sibling}if(!y){for(w=h.child;w;){if(w===a){y=!0,a=h,u=d;break}if(w===u){y=!0,u=h,a=d;break}w=w.sibling}if(!y)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function sf(r){return r=x0(r),r!==null?of(r):null}function of(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=of(r);if(i!==null)return i;r=r.sibling}return null}var af=e.unstable_scheduleCallback,lf=e.unstable_cancelCallback,E0=e.unstable_shouldYield,k0=e.unstable_requestPaint,qe=e.unstable_now,S0=e.unstable_getCurrentPriorityLevel,iu=e.unstable_ImmediatePriority,uf=e.unstable_UserBlockingPriority,Po=e.unstable_NormalPriority,C0=e.unstable_LowPriority,cf=e.unstable_IdlePriority,Ao=null,pn=null;function N0(r){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Ao,r,void 0,(r.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:b0,I0=Math.log,T0=Math.LN2;function b0(r){return r>>>=0,r===0?32:31-(I0(r)/T0|0)|0}var Oo=64,Do=4194304;function is(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function jo(r,i){var a=r.pendingLanes;if(a===0)return 0;var u=0,d=r.suspendedLanes,h=r.pingedLanes,y=a&268435455;if(y!==0){var w=y&~d;w!==0?u=is(w):(h&=y,h!==0&&(u=is(h)))}else y=a&~d,y!==0?u=is(y):h!==0&&(u=is(h));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,h=i&-i,d>=h||d===16&&(h&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=u;0<i;)a=31-tn(i),d=1<<a,u|=r[a],i&=~d;return u}function R0(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function P0(r,i){for(var a=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,h=r.pendingLanes;0<h;){var y=31-tn(h),w=1<<y,E=d[y];E===-1?((w&a)===0||(w&u)!==0)&&(d[y]=R0(w,i)):E<=i&&(r.expiredLanes|=w),h&=~w}}function su(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function df(){var r=Oo;return Oo<<=1,(Oo&4194240)===0&&(Oo=64),r}function ou(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function ss(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-tn(i),r[i]=a}function A0(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var u=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-tn(a),h=1<<d;i[d]=0,u[d]=-1,r[d]=-1,a&=~h}}function au(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var u=31-tn(a),d=1<<u;d&i|r[u]&i&&(r[u]|=i),a&=~d}}var Ce=0;function hf(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ff,lu,pf,mf,gf,uu=!1,Lo=[],Gn=null,qn=null,Kn=null,os=new Map,as=new Map,Yn=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(r,i){switch(r){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":os.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(i.pointerId)}}function ls(r,i,a,u,d,h){return r===null||r.nativeEvent!==h?(r={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:h,targetContainers:[d]},i!==null&&(i=Es(i),i!==null&&lu(i)),r):(r.eventSystemFlags|=u,i=r.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),r)}function D0(r,i,a,u,d){switch(i){case"focusin":return Gn=ls(Gn,r,i,a,u,d),!0;case"dragenter":return qn=ls(qn,r,i,a,u,d),!0;case"mouseover":return Kn=ls(Kn,r,i,a,u,d),!0;case"pointerover":var h=d.pointerId;return os.set(h,ls(os.get(h)||null,r,i,a,u,d)),!0;case"gotpointercapture":return h=d.pointerId,as.set(h,ls(as.get(h)||null,r,i,a,u,d)),!0}return!1}function vf(r){var i=br(r.target);if(i!==null){var a=Tr(i);if(a!==null){if(i=a.tag,i===13){if(i=nf(a),i!==null){r.blockedOn=i,gf(r.priority,function(){pf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Mo(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=du(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var u=new a.constructor(a.type,a);Jl=u,a.target.dispatchEvent(u),Jl=null}else return i=Es(a),i!==null&&lu(i),r.blockedOn=a,!1;i.shift()}return!0}function _f(r,i,a){Mo(r)&&a.delete(i)}function j0(){uu=!1,Gn!==null&&Mo(Gn)&&(Gn=null),qn!==null&&Mo(qn)&&(qn=null),Kn!==null&&Mo(Kn)&&(Kn=null),os.forEach(_f),as.forEach(_f)}function us(r,i){r.blockedOn===i&&(r.blockedOn=null,uu||(uu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,j0)))}function cs(r){function i(d){return us(d,r)}if(0<Lo.length){us(Lo[0],r);for(var a=1;a<Lo.length;a++){var u=Lo[a];u.blockedOn===r&&(u.blockedOn=null)}}for(Gn!==null&&us(Gn,r),qn!==null&&us(qn,r),Kn!==null&&us(Kn,r),os.forEach(i),as.forEach(i),a=0;a<Yn.length;a++)u=Yn[a],u.blockedOn===r&&(u.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)vf(a),a.blockedOn===null&&Yn.shift()}var oi=V.ReactCurrentBatchConfig,Uo=!0;function L0(r,i,a,u){var d=Ce,h=oi.transition;oi.transition=null;try{Ce=1,cu(r,i,a,u)}finally{Ce=d,oi.transition=h}}function M0(r,i,a,u){var d=Ce,h=oi.transition;oi.transition=null;try{Ce=4,cu(r,i,a,u)}finally{Ce=d,oi.transition=h}}function cu(r,i,a,u){if(Uo){var d=du(r,i,a,u);if(d===null)Tu(r,i,u,Fo,a),yf(r,u);else if(D0(d,r,i,a,u))u.stopPropagation();else if(yf(r,u),i&4&&-1<O0.indexOf(r)){for(;d!==null;){var h=Es(d);if(h!==null&&ff(h),h=du(r,i,a,u),h===null&&Tu(r,i,u,Fo,a),h===d)break;d=h}d!==null&&u.stopPropagation()}else Tu(r,i,u,null,a)}}var Fo=null;function du(r,i,a,u){if(Fo=null,r=Zl(u),r=br(r),r!==null)if(i=Tr(r),i===null)r=null;else if(a=i.tag,a===13){if(r=nf(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Fo=r,null}function wf(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case iu:return 1;case uf:return 4;case Po:case C0:return 16;case cf:return 536870912;default:return 16}default:return 16}}var Qn=null,hu=null,Bo=null;function xf(){if(Bo)return Bo;var r,i=hu,a=i.length,u,d="value"in Qn?Qn.value:Qn.textContent,h=d.length;for(r=0;r<a&&i[r]===d[r];r++);var y=a-r;for(u=1;u<=y&&i[a-u]===d[h-u];u++);return Bo=d.slice(r,1<u?1-u:void 0)}function zo(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Wo(){return!0}function Ef(){return!1}function zt(r){function i(a,u,d,h,y){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(a=r[w],this[w]=a?a(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Wo:Ef,this.isPropagationStopped=Ef,this}return H(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),i}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=zt(ai),ds=H({},ai,{view:0,detail:0}),U0=zt(ds),pu,mu,hs,Ho=H({},ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==hs&&(hs&&r.type==="mousemove"?(pu=r.screenX-hs.screenX,mu=r.screenY-hs.screenY):mu=pu=0,hs=r),pu)},movementY:function(r){return"movementY"in r?r.movementY:mu}}),kf=zt(Ho),F0=H({},Ho,{dataTransfer:0}),B0=zt(F0),z0=H({},ds,{relatedTarget:0}),gu=zt(z0),W0=H({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=zt(W0),V0=H({},ai,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),$0=zt(V0),G0=H({},ai,{data:0}),Sf=zt(G0),q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q0(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Y0[r])?!!i[r]:!1}function yu(){return Q0}var X0=H({},ds,{key:function(r){if(r.key){var i=q0[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=zo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?K0[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(r){return r.type==="keypress"?zo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?zo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),J0=zt(X0),Z0=H({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=zt(Z0),ew=H({},ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),tw=zt(ew),nw=H({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),rw=zt(nw),iw=H({},Ho,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),sw=zt(iw),ow=[9,13,27,32],vu=f&&"CompositionEvent"in window,fs=null;f&&"documentMode"in document&&(fs=document.documentMode);var aw=f&&"TextEvent"in window&&!fs,Nf=f&&(!vu||fs&&8<fs&&11>=fs),If=" ",Tf=!1;function bf(r,i){switch(r){case"keyup":return ow.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var li=!1;function lw(r,i){switch(r){case"compositionend":return Rf(i);case"keypress":return i.which!==32?null:(Tf=!0,If);case"textInput":return r=i.data,r===If&&Tf?null:r;default:return null}}function uw(r,i){if(li)return r==="compositionend"||!vu&&bf(r,i)?(r=xf(),Bo=hu=Qn=null,li=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Nf&&i.locale!=="ko"?null:i.data;default:return null}}var cw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pf(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!cw[r.type]:i==="textarea"}function Af(r,i,a,u){Xh(u),i=Ko(i,"onChange"),0<i.length&&(a=new fu("onChange","change",null,a,u),r.push({event:a,listeners:i}))}var ps=null,ms=null;function dw(r){Qf(r,0)}function Vo(r){var i=fi(r);if(z(i))return r}function hw(r,i){if(r==="change")return i}var Of=!1;if(f){var _u;if(f){var wu="oninput"in document;if(!wu){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),wu=typeof Df.oninput=="function"}_u=wu}else _u=!1;Of=_u&&(!document.documentMode||9<document.documentMode)}function jf(){ps&&(ps.detachEvent("onpropertychange",Lf),ms=ps=null)}function Lf(r){if(r.propertyName==="value"&&Vo(ms)){var i=[];Af(i,ms,r,Zl(r)),tf(dw,i)}}function fw(r,i,a){r==="focusin"?(jf(),ps=i,ms=a,ps.attachEvent("onpropertychange",Lf)):r==="focusout"&&jf()}function pw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Vo(ms)}function mw(r,i){if(r==="click")return Vo(i)}function gw(r,i){if(r==="input"||r==="change")return Vo(i)}function yw(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var nn=typeof Object.is=="function"?Object.is:yw;function gs(r,i){if(nn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!m.call(i,d)||!nn(r[d],i[d]))return!1}return!0}function Mf(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Uf(r,i){var a=Mf(r);r=0;for(var u;a;){if(a.nodeType===3){if(u=r+a.textContent.length,r<=i&&u>=i)return{node:a,offset:i-r};r=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mf(a)}}function Ff(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?Ff(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function Bf(){for(var r=window,i=ue();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=ue(r.document)}return i}function xu(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function vw(r){var i=Bf(),a=r.focusedElem,u=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ff(a.ownerDocument.documentElement,a)){if(u!==null&&xu(a)){if(i=u.start,r=u.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,h=Math.min(u.start,d);u=u.end===void 0?h:Math.min(u.end,d),!r.extend&&h>u&&(d=u,u=h,h=d),d=Uf(a,h);var y=Uf(a,u);d&&y&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==y.node||r.focusOffset!==y.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),r.removeAllRanges(),h>u?(r.addRange(i),r.extend(y.node,y.offset)):(i.setEnd(y.node,y.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var _w=f&&"documentMode"in document&&11>=document.documentMode,ui=null,Eu=null,ys=null,ku=!1;function zf(r,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ku||ui==null||ui!==ue(u)||(u=ui,"selectionStart"in u&&xu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ys&&gs(ys,u)||(ys=u,u=Ko(Eu,"onSelect"),0<u.length&&(i=new fu("onSelect","select",null,i,a),r.push({event:i,listeners:u}),i.target=ui)))}function $o(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var ci={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},Su={},Wf={};f&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function Go(r){if(Su[r])return Su[r];if(!ci[r])return r;var i=ci[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in Wf)return Su[r]=i[a];return r}var Hf=Go("animationend"),Vf=Go("animationiteration"),$f=Go("animationstart"),Gf=Go("transitionend"),qf=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(r,i){qf.set(r,i),l(i,[r])}for(var Cu=0;Cu<Kf.length;Cu++){var Nu=Kf[Cu],ww=Nu.toLowerCase(),xw=Nu[0].toUpperCase()+Nu.slice(1);Xn(ww,"on"+xw)}Xn(Hf,"onAnimationEnd"),Xn(Vf,"onAnimationIteration"),Xn($f,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(Gf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(vs));function Yf(r,i,a){var u=r.type||"unknown-event";r.currentTarget=a,w0(u,i,void 0,r),r.currentTarget=null}function Qf(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var u=r[a],d=u.event;u=u.listeners;e:{var h=void 0;if(i)for(var y=u.length-1;0<=y;y--){var w=u[y],E=w.instance,T=w.currentTarget;if(w=w.listener,E!==h&&d.isPropagationStopped())break e;Yf(d,w,T),h=E}else for(y=0;y<u.length;y++){if(w=u[y],E=w.instance,T=w.currentTarget,w=w.listener,E!==h&&d.isPropagationStopped())break e;Yf(d,w,T),h=E}}}if(Ro)throw r=ru,Ro=!1,ru=null,r}function De(r,i){var a=i[Du];a===void 0&&(a=i[Du]=new Set);var u=r+"__bubble";a.has(u)||(Xf(i,r,2,!1),a.add(u))}function Iu(r,i,a){var u=0;i&&(u|=4),Xf(a,r,u,i)}var qo="_reactListening"+Math.random().toString(36).slice(2);function _s(r){if(!r[qo]){r[qo]=!0,s.forEach(function(a){a!=="selectionchange"&&(Ew.has(a)||Iu(a,!1,r),Iu(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[qo]||(i[qo]=!0,Iu("selectionchange",!1,i))}}function Xf(r,i,a,u){switch(wf(i)){case 1:var d=L0;break;case 4:d=M0;break;default:d=cu}a=d.bind(null,i,a,r),d=void 0,!nu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(i,a,{capture:!0,passive:d}):r.addEventListener(i,a,!0):d!==void 0?r.addEventListener(i,a,{passive:d}):r.addEventListener(i,a,!1)}function Tu(r,i,a,u,d){var h=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var w=u.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(y===4)for(y=u.return;y!==null;){var E=y.tag;if((E===3||E===4)&&(E=y.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;y=y.return}for(;w!==null;){if(y=br(w),y===null)return;if(E=y.tag,E===5||E===6){u=h=y;continue e}w=w.parentNode}}u=u.return}tf(function(){var T=h,L=Zl(a),M=[];e:{var j=qf.get(r);if(j!==void 0){var $=fu,Y=r;switch(r){case"keypress":if(zo(a)===0)break e;case"keydown":case"keyup":$=J0;break;case"focusin":Y="focus",$=gu;break;case"focusout":Y="blur",$=gu;break;case"beforeblur":case"afterblur":$=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=tw;break;case Hf:case Vf:case $f:$=H0;break;case Gf:$=rw;break;case"scroll":$=U0;break;case"wheel":$=sw;break;case"copy":case"cut":case"paste":$=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Cf}var Q=(i&4)!==0,Ke=!Q&&r==="scroll",C=Q?j!==null?j+"Capture":null:j;Q=[];for(var k=T,N;k!==null;){N=k;var U=N.stateNode;if(N.tag===5&&U!==null&&(N=U,C!==null&&(U=ts(k,C),U!=null&&Q.push(ws(k,U,N)))),Ke)break;k=k.return}0<Q.length&&(j=new $(j,Y,null,a,L),M.push({event:j,listeners:Q}))}}if((i&7)===0){e:{if(j=r==="mouseover"||r==="pointerover",$=r==="mouseout"||r==="pointerout",j&&a!==Jl&&(Y=a.relatedTarget||a.fromElement)&&(br(Y)||Y[In]))break e;if(($||j)&&(j=L.window===L?L:(j=L.ownerDocument)?j.defaultView||j.parentWindow:window,$?(Y=a.relatedTarget||a.toElement,$=T,Y=Y?br(Y):null,Y!==null&&(Ke=Tr(Y),Y!==Ke||Y.tag!==5&&Y.tag!==6)&&(Y=null)):($=null,Y=T),$!==Y)){if(Q=kf,U="onMouseLeave",C="onMouseEnter",k="mouse",(r==="pointerout"||r==="pointerover")&&(Q=Cf,U="onPointerLeave",C="onPointerEnter",k="pointer"),Ke=$==null?j:fi($),N=Y==null?j:fi(Y),j=new Q(U,k+"leave",$,a,L),j.target=Ke,j.relatedTarget=N,U=null,br(L)===T&&(Q=new Q(C,k+"enter",Y,a,L),Q.target=N,Q.relatedTarget=Ke,U=Q),Ke=U,$&&Y)t:{for(Q=$,C=Y,k=0,N=Q;N;N=di(N))k++;for(N=0,U=C;U;U=di(U))N++;for(;0<k-N;)Q=di(Q),k--;for(;0<N-k;)C=di(C),N--;for(;k--;){if(Q===C||C!==null&&Q===C.alternate)break t;Q=di(Q),C=di(C)}Q=null}else Q=null;$!==null&&Jf(M,j,$,Q,!1),Y!==null&&Ke!==null&&Jf(M,Ke,Y,Q,!0)}}e:{if(j=T?fi(T):window,$=j.nodeName&&j.nodeName.toLowerCase(),$==="select"||$==="input"&&j.type==="file")var X=hw;else if(Pf(j))if(Of)X=gw;else{X=pw;var Z=fw}else($=j.nodeName)&&$.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(X=mw);if(X&&(X=X(r,T))){Af(M,X,a,L);break e}Z&&Z(r,j,T),r==="focusout"&&(Z=j._wrapperState)&&Z.controlled&&j.type==="number"&&en(j,"number",j.value)}switch(Z=T?fi(T):window,r){case"focusin":(Pf(Z)||Z.contentEditable==="true")&&(ui=Z,Eu=T,ys=null);break;case"focusout":ys=Eu=ui=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,zf(M,a,L);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":zf(M,a,L)}var ee;if(vu)e:{switch(r){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else li?bf(r,a)&&(oe="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(Nf&&a.locale!=="ko"&&(li||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&li&&(ee=xf()):(Qn=L,hu="value"in Qn?Qn.value:Qn.textContent,li=!0)),Z=Ko(T,oe),0<Z.length&&(oe=new Sf(oe,r,null,a,L),M.push({event:oe,listeners:Z}),ee?oe.data=ee:(ee=Rf(a),ee!==null&&(oe.data=ee)))),(ee=aw?lw(r,a):uw(r,a))&&(T=Ko(T,"onBeforeInput"),0<T.length&&(L=new Sf("onBeforeInput","beforeinput",null,a,L),M.push({event:L,listeners:T}),L.data=ee))}Qf(M,i)})}function ws(r,i,a){return{instance:r,listener:i,currentTarget:a}}function Ko(r,i){for(var a=i+"Capture",u=[];r!==null;){var d=r,h=d.stateNode;d.tag===5&&h!==null&&(d=h,h=ts(r,a),h!=null&&u.unshift(ws(r,h,d)),h=ts(r,i),h!=null&&u.push(ws(r,h,d))),r=r.return}return u}function di(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Jf(r,i,a,u,d){for(var h=i._reactName,y=[];a!==null&&a!==u;){var w=a,E=w.alternate,T=w.stateNode;if(E!==null&&E===u)break;w.tag===5&&T!==null&&(w=T,d?(E=ts(a,h),E!=null&&y.unshift(ws(a,E,w))):d||(E=ts(a,h),E!=null&&y.push(ws(a,E,w)))),a=a.return}y.length!==0&&r.push({event:i,listeners:y})}var kw=/\r\n?/g,Sw=/\u0000|\uFFFD/g;function Zf(r){return(typeof r=="string"?r:""+r).replace(kw,`
`).replace(Sw,"")}function Yo(r,i,a){if(i=Zf(i),Zf(r)!==i&&a)throw Error(t(425))}function Qo(){}var bu=null,Ru=null;function Pu(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Au=typeof setTimeout=="function"?setTimeout:void 0,Cw=typeof clearTimeout=="function"?clearTimeout:void 0,ep=typeof Promise=="function"?Promise:void 0,Nw=typeof queueMicrotask=="function"?queueMicrotask:typeof ep<"u"?function(r){return ep.resolve(null).then(r).catch(Iw)}:Au;function Iw(r){setTimeout(function(){throw r})}function Ou(r,i){var a=i,u=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){r.removeChild(d),cs(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);cs(i)}function Jn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function tp(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var hi=Math.random().toString(36).slice(2),mn="__reactFiber$"+hi,xs="__reactProps$"+hi,In="__reactContainer$"+hi,Du="__reactEvents$"+hi,Tw="__reactListeners$"+hi,bw="__reactHandles$"+hi;function br(r){var i=r[mn];if(i)return i;for(var a=r.parentNode;a;){if(i=a[In]||a[mn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=tp(r);r!==null;){if(a=r[mn])return a;r=tp(r)}return i}r=a,a=r.parentNode}return null}function Es(r){return r=r[mn]||r[In],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function fi(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Xo(r){return r[xs]||null}var ju=[],pi=-1;function Zn(r){return{current:r}}function je(r){0>pi||(r.current=ju[pi],ju[pi]=null,pi--)}function Re(r,i){pi++,ju[pi]=r.current,r.current=i}var er={},yt=Zn(er),At=Zn(!1),Rr=er;function mi(r,i){var a=r.type.contextTypes;if(!a)return er;var u=r.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},h;for(h in a)d[h]=i[h];return u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=d),d}function Ot(r){return r=r.childContextTypes,r!=null}function Jo(){je(At),je(yt)}function np(r,i,a){if(yt.current!==er)throw Error(t(168));Re(yt,i),Re(At,a)}function rp(r,i,a){var u=r.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Ie(r)||"Unknown",d));return H({},a,u)}function Zo(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||er,Rr=yt.current,Re(yt,r),Re(At,At.current),!0}function ip(r,i,a){var u=r.stateNode;if(!u)throw Error(t(169));a?(r=rp(r,i,Rr),u.__reactInternalMemoizedMergedChildContext=r,je(At),je(yt),Re(yt,r)):je(At),Re(At,a)}var Tn=null,ea=!1,Lu=!1;function sp(r){Tn===null?Tn=[r]:Tn.push(r)}function Rw(r){ea=!0,sp(r)}function tr(){if(!Lu&&Tn!==null){Lu=!0;var r=0,i=Ce;try{var a=Tn;for(Ce=1;r<a.length;r++){var u=a[r];do u=u(!0);while(u!==null)}Tn=null,ea=!1}catch(d){throw Tn!==null&&(Tn=Tn.slice(r+1)),af(iu,tr),d}finally{Ce=i,Lu=!1}}return null}var gi=[],yi=0,ta=null,na=0,Gt=[],qt=0,Pr=null,bn=1,Rn="";function Ar(r,i){gi[yi++]=na,gi[yi++]=ta,ta=r,na=i}function op(r,i,a){Gt[qt++]=bn,Gt[qt++]=Rn,Gt[qt++]=Pr,Pr=r;var u=bn;r=Rn;var d=32-tn(u)-1;u&=~(1<<d),a+=1;var h=32-tn(i)+d;if(30<h){var y=d-d%5;h=(u&(1<<y)-1).toString(32),u>>=y,d-=y,bn=1<<32-tn(i)+d|a<<d|u,Rn=h+r}else bn=1<<h|a<<d|u,Rn=r}function Mu(r){r.return!==null&&(Ar(r,1),op(r,1,0))}function Uu(r){for(;r===ta;)ta=gi[--yi],gi[yi]=null,na=gi[--yi],gi[yi]=null;for(;r===Pr;)Pr=Gt[--qt],Gt[qt]=null,Rn=Gt[--qt],Gt[qt]=null,bn=Gt[--qt],Gt[qt]=null}var Wt=null,Ht=null,Me=!1,rn=null;function ap(r,i){var a=Xt(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function lp(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,Wt=r,Ht=Jn(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,Wt=r,Ht=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Pr!==null?{id:bn,overflow:Rn}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Xt(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,Wt=r,Ht=null,!0):!1;default:return!1}}function Fu(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Bu(r){if(Me){var i=Ht;if(i){var a=i;if(!lp(r,i)){if(Fu(r))throw Error(t(418));i=Jn(a.nextSibling);var u=Wt;i&&lp(r,i)?ap(u,a):(r.flags=r.flags&-4097|2,Me=!1,Wt=r)}}else{if(Fu(r))throw Error(t(418));r.flags=r.flags&-4097|2,Me=!1,Wt=r}}}function up(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Wt=r}function ra(r){if(r!==Wt)return!1;if(!Me)return up(r),Me=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Pu(r.type,r.memoizedProps)),i&&(i=Ht)){if(Fu(r))throw cp(),Error(t(418));for(;i;)ap(r,i),i=Jn(i.nextSibling)}if(up(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){Ht=Jn(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}Ht=null}}else Ht=Wt?Jn(r.stateNode.nextSibling):null;return!0}function cp(){for(var r=Ht;r;)r=Jn(r.nextSibling)}function vi(){Ht=Wt=null,Me=!1}function zu(r){rn===null?rn=[r]:rn.push(r)}var Pw=V.ReactCurrentBatchConfig;function ks(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,r));var d=u,h=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(y){var w=d.refs;y===null?delete w[h]:w[h]=y},i._stringRef=h,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function ia(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function dp(r){var i=r._init;return i(r._payload)}function hp(r){function i(C,k){if(r){var N=C.deletions;N===null?(C.deletions=[k],C.flags|=16):N.push(k)}}function a(C,k){if(!r)return null;for(;k!==null;)i(C,k),k=k.sibling;return null}function u(C,k){for(C=new Map;k!==null;)k.key!==null?C.set(k.key,k):C.set(k.index,k),k=k.sibling;return C}function d(C,k){return C=ur(C,k),C.index=0,C.sibling=null,C}function h(C,k,N){return C.index=N,r?(N=C.alternate,N!==null?(N=N.index,N<k?(C.flags|=2,k):N):(C.flags|=2,k)):(C.flags|=1048576,k)}function y(C){return r&&C.alternate===null&&(C.flags|=2),C}function w(C,k,N,U){return k===null||k.tag!==6?(k=Ac(N,C.mode,U),k.return=C,k):(k=d(k,N),k.return=C,k)}function E(C,k,N,U){var X=N.type;return X===ce?L(C,k,N.props.children,U,N.key):k!==null&&(k.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Je&&dp(X)===k.type)?(U=d(k,N.props),U.ref=ks(C,k,N),U.return=C,U):(U=Ta(N.type,N.key,N.props,null,C.mode,U),U.ref=ks(C,k,N),U.return=C,U)}function T(C,k,N,U){return k===null||k.tag!==4||k.stateNode.containerInfo!==N.containerInfo||k.stateNode.implementation!==N.implementation?(k=Oc(N,C.mode,U),k.return=C,k):(k=d(k,N.children||[]),k.return=C,k)}function L(C,k,N,U,X){return k===null||k.tag!==7?(k=Br(N,C.mode,U,X),k.return=C,k):(k=d(k,N),k.return=C,k)}function M(C,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return k=Ac(""+k,C.mode,N),k.return=C,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case te:return N=Ta(k.type,k.key,k.props,null,C.mode,N),N.ref=ks(C,null,k),N.return=C,N;case ne:return k=Oc(k,C.mode,N),k.return=C,k;case Je:var U=k._init;return M(C,U(k._payload),N)}if(Bt(k)||J(k))return k=Br(k,C.mode,N,null),k.return=C,k;ia(C,k)}return null}function j(C,k,N,U){var X=k!==null?k.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return X!==null?null:w(C,k,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case te:return N.key===X?E(C,k,N,U):null;case ne:return N.key===X?T(C,k,N,U):null;case Je:return X=N._init,j(C,k,X(N._payload),U)}if(Bt(N)||J(N))return X!==null?null:L(C,k,N,U,null);ia(C,N)}return null}function $(C,k,N,U,X){if(typeof U=="string"&&U!==""||typeof U=="number")return C=C.get(N)||null,w(k,C,""+U,X);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case te:return C=C.get(U.key===null?N:U.key)||null,E(k,C,U,X);case ne:return C=C.get(U.key===null?N:U.key)||null,T(k,C,U,X);case Je:var Z=U._init;return $(C,k,N,Z(U._payload),X)}if(Bt(U)||J(U))return C=C.get(N)||null,L(k,C,U,X,null);ia(k,U)}return null}function Y(C,k,N,U){for(var X=null,Z=null,ee=k,oe=k=0,lt=null;ee!==null&&oe<N.length;oe++){ee.index>oe?(lt=ee,ee=null):lt=ee.sibling;var xe=j(C,ee,N[oe],U);if(xe===null){ee===null&&(ee=lt);break}r&&ee&&xe.alternate===null&&i(C,ee),k=h(xe,k,oe),Z===null?X=xe:Z.sibling=xe,Z=xe,ee=lt}if(oe===N.length)return a(C,ee),Me&&Ar(C,oe),X;if(ee===null){for(;oe<N.length;oe++)ee=M(C,N[oe],U),ee!==null&&(k=h(ee,k,oe),Z===null?X=ee:Z.sibling=ee,Z=ee);return Me&&Ar(C,oe),X}for(ee=u(C,ee);oe<N.length;oe++)lt=$(ee,C,oe,N[oe],U),lt!==null&&(r&&lt.alternate!==null&&ee.delete(lt.key===null?oe:lt.key),k=h(lt,k,oe),Z===null?X=lt:Z.sibling=lt,Z=lt);return r&&ee.forEach(function(cr){return i(C,cr)}),Me&&Ar(C,oe),X}function Q(C,k,N,U){var X=J(N);if(typeof X!="function")throw Error(t(150));if(N=X.call(N),N==null)throw Error(t(151));for(var Z=X=null,ee=k,oe=k=0,lt=null,xe=N.next();ee!==null&&!xe.done;oe++,xe=N.next()){ee.index>oe?(lt=ee,ee=null):lt=ee.sibling;var cr=j(C,ee,xe.value,U);if(cr===null){ee===null&&(ee=lt);break}r&&ee&&cr.alternate===null&&i(C,ee),k=h(cr,k,oe),Z===null?X=cr:Z.sibling=cr,Z=cr,ee=lt}if(xe.done)return a(C,ee),Me&&Ar(C,oe),X;if(ee===null){for(;!xe.done;oe++,xe=N.next())xe=M(C,xe.value,U),xe!==null&&(k=h(xe,k,oe),Z===null?X=xe:Z.sibling=xe,Z=xe);return Me&&Ar(C,oe),X}for(ee=u(C,ee);!xe.done;oe++,xe=N.next())xe=$(ee,C,oe,xe.value,U),xe!==null&&(r&&xe.alternate!==null&&ee.delete(xe.key===null?oe:xe.key),k=h(xe,k,oe),Z===null?X=xe:Z.sibling=xe,Z=xe);return r&&ee.forEach(function(cx){return i(C,cx)}),Me&&Ar(C,oe),X}function Ke(C,k,N,U){if(typeof N=="object"&&N!==null&&N.type===ce&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case te:e:{for(var X=N.key,Z=k;Z!==null;){if(Z.key===X){if(X=N.type,X===ce){if(Z.tag===7){a(C,Z.sibling),k=d(Z,N.props.children),k.return=C,C=k;break e}}else if(Z.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Je&&dp(X)===Z.type){a(C,Z.sibling),k=d(Z,N.props),k.ref=ks(C,Z,N),k.return=C,C=k;break e}a(C,Z);break}else i(C,Z);Z=Z.sibling}N.type===ce?(k=Br(N.props.children,C.mode,U,N.key),k.return=C,C=k):(U=Ta(N.type,N.key,N.props,null,C.mode,U),U.ref=ks(C,k,N),U.return=C,C=U)}return y(C);case ne:e:{for(Z=N.key;k!==null;){if(k.key===Z)if(k.tag===4&&k.stateNode.containerInfo===N.containerInfo&&k.stateNode.implementation===N.implementation){a(C,k.sibling),k=d(k,N.children||[]),k.return=C,C=k;break e}else{a(C,k);break}else i(C,k);k=k.sibling}k=Oc(N,C.mode,U),k.return=C,C=k}return y(C);case Je:return Z=N._init,Ke(C,k,Z(N._payload),U)}if(Bt(N))return Y(C,k,N,U);if(J(N))return Q(C,k,N,U);ia(C,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,k!==null&&k.tag===6?(a(C,k.sibling),k=d(k,N),k.return=C,C=k):(a(C,k),k=Ac(N,C.mode,U),k.return=C,C=k),y(C)):a(C,k)}return Ke}var _i=hp(!0),fp=hp(!1),sa=Zn(null),oa=null,wi=null,Wu=null;function Hu(){Wu=wi=oa=null}function Vu(r){var i=sa.current;je(sa),r._currentValue=i}function $u(r,i,a){for(;r!==null;){var u=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),r===a)break;r=r.return}}function xi(r,i){oa=r,Wu=wi=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(Dt=!0),r.firstContext=null)}function Kt(r){var i=r._currentValue;if(Wu!==r)if(r={context:r,memoizedValue:i,next:null},wi===null){if(oa===null)throw Error(t(308));wi=r,oa.dependencies={lanes:0,firstContext:r}}else wi=wi.next=r;return i}var Or=null;function Gu(r){Or===null?Or=[r]:Or.push(r)}function pp(r,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Gu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Pn(r,u)}function Pn(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var nr=!1;function qu(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mp(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function An(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(r,i,a){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(we&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Pn(r,a)}return d=u.interleaved,d===null?(i.next=i,Gu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Pn(r,a)}function aa(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,au(r,a)}}function gp(r,i){var a=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?d=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?d=h=i:h=h.next=i}else d=h=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:u.shared,effects:u.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function la(r,i,a,u){var d=r.updateQueue;nr=!1;var h=d.firstBaseUpdate,y=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var E=w,T=E.next;E.next=null,y===null?h=T:y.next=T,y=E;var L=r.alternate;L!==null&&(L=L.updateQueue,w=L.lastBaseUpdate,w!==y&&(w===null?L.firstBaseUpdate=T:w.next=T,L.lastBaseUpdate=E))}if(h!==null){var M=d.baseState;y=0,L=T=E=null,w=h;do{var j=w.lane,$=w.eventTime;if((u&j)===j){L!==null&&(L=L.next={eventTime:$,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var Y=r,Q=w;switch(j=i,$=a,Q.tag){case 1:if(Y=Q.payload,typeof Y=="function"){M=Y.call($,M,j);break e}M=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=Q.payload,j=typeof Y=="function"?Y.call($,M,j):Y,j==null)break e;M=H({},M,j);break e;case 2:nr=!0}}w.callback!==null&&w.lane!==0&&(r.flags|=64,j=d.effects,j===null?d.effects=[w]:j.push(w))}else $={eventTime:$,lane:j,tag:w.tag,payload:w.payload,callback:w.callback,next:null},L===null?(T=L=$,E=M):L=L.next=$,y|=j;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;j=w,w=j.next,j.next=null,d.lastBaseUpdate=j,d.shared.pending=null}}while(!0);if(L===null&&(E=M),d.baseState=E,d.firstBaseUpdate=T,d.lastBaseUpdate=L,i=d.shared.interleaved,i!==null){d=i;do y|=d.lane,d=d.next;while(d!==i)}else h===null&&(d.shared.lanes=0);Lr|=y,r.lanes=y,r.memoizedState=M}}function yp(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var u=r[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ss={},gn=Zn(Ss),Cs=Zn(Ss),Ns=Zn(Ss);function Dr(r){if(r===Ss)throw Error(t(174));return r}function Ku(r,i){switch(Re(Ns,i),Re(Cs,r),Re(gn,Ss),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Yl(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=Yl(i,r)}je(gn),Re(gn,i)}function Ei(){je(gn),je(Cs),je(Ns)}function vp(r){Dr(Ns.current);var i=Dr(gn.current),a=Yl(i,r.type);i!==a&&(Re(Cs,r),Re(gn,a))}function Yu(r){Cs.current===r&&(je(gn),je(Cs))}var Ue=Zn(0);function ua(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qu=[];function Xu(){for(var r=0;r<Qu.length;r++)Qu[r]._workInProgressVersionPrimary=null;Qu.length=0}var ca=V.ReactCurrentDispatcher,Ju=V.ReactCurrentBatchConfig,jr=0,Fe=null,tt=null,ot=null,da=!1,Is=!1,Ts=0,Aw=0;function vt(){throw Error(t(321))}function Zu(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!nn(r[a],i[a]))return!1;return!0}function ec(r,i,a,u,d,h){if(jr=h,Fe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ca.current=r===null||r.memoizedState===null?Lw:Mw,r=a(u,d),Is){h=0;do{if(Is=!1,Ts=0,25<=h)throw Error(t(301));h+=1,ot=tt=null,i.updateQueue=null,ca.current=Uw,r=a(u,d)}while(Is)}if(ca.current=pa,i=tt!==null&&tt.next!==null,jr=0,ot=tt=Fe=null,da=!1,i)throw Error(t(300));return r}function tc(){var r=Ts!==0;return Ts=0,r}function yn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Fe.memoizedState=ot=r:ot=ot.next=r,ot}function Yt(){if(tt===null){var r=Fe.alternate;r=r!==null?r.memoizedState:null}else r=tt.next;var i=ot===null?Fe.memoizedState:ot.next;if(i!==null)ot=i,tt=r;else{if(r===null)throw Error(t(310));tt=r,r={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ot===null?Fe.memoizedState=ot=r:ot=ot.next=r}return ot}function bs(r,i){return typeof i=="function"?i(r):i}function nc(r){var i=Yt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var u=tt,d=u.baseQueue,h=a.pending;if(h!==null){if(d!==null){var y=d.next;d.next=h.next,h.next=y}u.baseQueue=d=h,a.pending=null}if(d!==null){h=d.next,u=u.baseState;var w=y=null,E=null,T=h;do{var L=T.lane;if((jr&L)===L)E!==null&&(E=E.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),u=T.hasEagerState?T.eagerState:r(u,T.action);else{var M={lane:L,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};E===null?(w=E=M,y=u):E=E.next=M,Fe.lanes|=L,Lr|=L}T=T.next}while(T!==null&&T!==h);E===null?y=u:E.next=w,nn(u,i.memoizedState)||(Dt=!0),i.memoizedState=u,i.baseState=y,i.baseQueue=E,a.lastRenderedState=u}if(r=a.interleaved,r!==null){d=r;do h=d.lane,Fe.lanes|=h,Lr|=h,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function rc(r){var i=Yt(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var u=a.dispatch,d=a.pending,h=i.memoizedState;if(d!==null){a.pending=null;var y=d=d.next;do h=r(h,y.action),y=y.next;while(y!==d);nn(h,i.memoizedState)||(Dt=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,u]}function _p(){}function wp(r,i){var a=Fe,u=Yt(),d=i(),h=!nn(u.memoizedState,d);if(h&&(u.memoizedState=d,Dt=!0),u=u.queue,ic(kp.bind(null,a,u,r),[r]),u.getSnapshot!==i||h||ot!==null&&ot.memoizedState.tag&1){if(a.flags|=2048,Rs(9,Ep.bind(null,a,u,d,i),void 0,null),at===null)throw Error(t(349));(jr&30)!==0||xp(a,i,d)}return d}function xp(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=Fe.updateQueue,i===null?(i={lastEffect:null,stores:null},Fe.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Ep(r,i,a,u){i.value=a,i.getSnapshot=u,Sp(i)&&Cp(r)}function kp(r,i,a){return a(function(){Sp(i)&&Cp(r)})}function Sp(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!nn(r,a)}catch{return!0}}function Cp(r){var i=Pn(r,1);i!==null&&ln(i,r,1,-1)}function Np(r){var i=yn();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:r},i.queue=r,r=r.dispatch=jw.bind(null,Fe,r),[i.memoizedState,r]}function Rs(r,i,a,u){return r={tag:r,create:i,destroy:a,deps:u,next:null},i=Fe.updateQueue,i===null?(i={lastEffect:null,stores:null},Fe.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(u=a.next,a.next=r,r.next=u,i.lastEffect=r)),r}function Ip(){return Yt().memoizedState}function ha(r,i,a,u){var d=yn();Fe.flags|=r,d.memoizedState=Rs(1|i,a,void 0,u===void 0?null:u)}function fa(r,i,a,u){var d=Yt();u=u===void 0?null:u;var h=void 0;if(tt!==null){var y=tt.memoizedState;if(h=y.destroy,u!==null&&Zu(u,y.deps)){d.memoizedState=Rs(i,a,h,u);return}}Fe.flags|=r,d.memoizedState=Rs(1|i,a,h,u)}function Tp(r,i){return ha(8390656,8,r,i)}function ic(r,i){return fa(2048,8,r,i)}function bp(r,i){return fa(4,2,r,i)}function Rp(r,i){return fa(4,4,r,i)}function Pp(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Ap(r,i,a){return a=a!=null?a.concat([r]):null,fa(4,4,Pp.bind(null,i,r),a)}function sc(){}function Op(r,i){var a=Yt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Zu(i,u[1])?u[0]:(a.memoizedState=[r,i],r)}function Dp(r,i){var a=Yt();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Zu(i,u[1])?u[0]:(r=r(),a.memoizedState=[r,i],r)}function jp(r,i,a){return(jr&21)===0?(r.baseState&&(r.baseState=!1,Dt=!0),r.memoizedState=a):(nn(a,i)||(a=df(),Fe.lanes|=a,Lr|=a,r.baseState=!0),i)}function Ow(r,i){var a=Ce;Ce=a!==0&&4>a?a:4,r(!0);var u=Ju.transition;Ju.transition={};try{r(!1),i()}finally{Ce=a,Ju.transition=u}}function Lp(){return Yt().memoizedState}function Dw(r,i,a){var u=ar(r);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Mp(r))Up(i,a);else if(a=pp(r,i,a,u),a!==null){var d=Ct();ln(a,r,u,d),Fp(a,i,u)}}function jw(r,i,a){var u=ar(r),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mp(r))Up(i,d);else{var h=r.alternate;if(r.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var y=i.lastRenderedState,w=h(y,a);if(d.hasEagerState=!0,d.eagerState=w,nn(w,y)){var E=i.interleaved;E===null?(d.next=d,Gu(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}a=pp(r,i,d,u),a!==null&&(d=Ct(),ln(a,r,u,d),Fp(a,i,u))}}function Mp(r){var i=r.alternate;return r===Fe||i!==null&&i===Fe}function Up(r,i){Is=da=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function Fp(r,i,a){if((a&4194240)!==0){var u=i.lanes;u&=r.pendingLanes,a|=u,i.lanes=a,au(r,a)}}var pa={readContext:Kt,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},Lw={readContext:Kt,useCallback:function(r,i){return yn().memoizedState=[r,i===void 0?null:i],r},useContext:Kt,useEffect:Tp,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,ha(4194308,4,Pp.bind(null,i,r),a)},useLayoutEffect:function(r,i){return ha(4194308,4,r,i)},useInsertionEffect:function(r,i){return ha(4,2,r,i)},useMemo:function(r,i){var a=yn();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var u=yn();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},u.queue=r,r=r.dispatch=Dw.bind(null,Fe,r),[u.memoizedState,r]},useRef:function(r){var i=yn();return r={current:r},i.memoizedState=r},useState:Np,useDebugValue:sc,useDeferredValue:function(r){return yn().memoizedState=r},useTransition:function(){var r=Np(!1),i=r[0];return r=Ow.bind(null,r[1]),yn().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var u=Fe,d=yn();if(Me){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),at===null)throw Error(t(349));(jr&30)!==0||xp(u,i,a)}d.memoizedState=a;var h={value:a,getSnapshot:i};return d.queue=h,Tp(kp.bind(null,u,h,r),[r]),u.flags|=2048,Rs(9,Ep.bind(null,u,h,a,i),void 0,null),a},useId:function(){var r=yn(),i=at.identifierPrefix;if(Me){var a=Rn,u=bn;a=(u&~(1<<32-tn(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ts++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Aw++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},Mw={readContext:Kt,useCallback:Op,useContext:Kt,useEffect:ic,useImperativeHandle:Ap,useInsertionEffect:bp,useLayoutEffect:Rp,useMemo:Dp,useReducer:nc,useRef:Ip,useState:function(){return nc(bs)},useDebugValue:sc,useDeferredValue:function(r){var i=Yt();return jp(i,tt.memoizedState,r)},useTransition:function(){var r=nc(bs)[0],i=Yt().memoizedState;return[r,i]},useMutableSource:_p,useSyncExternalStore:wp,useId:Lp,unstable_isNewReconciler:!1},Uw={readContext:Kt,useCallback:Op,useContext:Kt,useEffect:ic,useImperativeHandle:Ap,useInsertionEffect:bp,useLayoutEffect:Rp,useMemo:Dp,useReducer:rc,useRef:Ip,useState:function(){return rc(bs)},useDebugValue:sc,useDeferredValue:function(r){var i=Yt();return tt===null?i.memoizedState=r:jp(i,tt.memoizedState,r)},useTransition:function(){var r=rc(bs)[0],i=Yt().memoizedState;return[r,i]},useMutableSource:_p,useSyncExternalStore:wp,useId:Lp,unstable_isNewReconciler:!1};function sn(r,i){if(r&&r.defaultProps){i=H({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function oc(r,i,a,u){i=r.memoizedState,a=a(u,i),a=a==null?i:H({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ma={isMounted:function(r){return(r=r._reactInternals)?Tr(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var u=Ct(),d=ar(r),h=An(u,d);h.payload=i,a!=null&&(h.callback=a),i=rr(r,h,d),i!==null&&(ln(i,r,d,u),aa(i,r,d))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var u=Ct(),d=ar(r),h=An(u,d);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=rr(r,h,d),i!==null&&(ln(i,r,d,u),aa(i,r,d))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=Ct(),u=ar(r),d=An(a,u);d.tag=2,i!=null&&(d.callback=i),i=rr(r,d,u),i!==null&&(ln(i,r,u,a),aa(i,r,u))}};function Bp(r,i,a,u,d,h,y){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,h,y):i.prototype&&i.prototype.isPureReactComponent?!gs(a,u)||!gs(d,h):!0}function zp(r,i,a){var u=!1,d=er,h=i.contextType;return typeof h=="object"&&h!==null?h=Kt(h):(d=Ot(i)?Rr:yt.current,u=i.contextTypes,h=(u=u!=null)?mi(r,d):er),i=new i(a,h),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ma,r.stateNode=i,i._reactInternals=r,u&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=h),i}function Wp(r,i,a,u){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==r&&ma.enqueueReplaceState(i,i.state,null)}function ac(r,i,a,u){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},qu(r);var h=i.contextType;typeof h=="object"&&h!==null?d.context=Kt(h):(h=Ot(i)?Rr:yt.current,d.context=mi(r,h)),d.state=r.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(oc(r,i,h,a),d.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ma.enqueueReplaceState(d,d.state,null),la(r,a,d,u),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function ki(r,i){try{var a="",u=i;do a+=ye(u),u=u.return;while(u);var d=a}catch(h){d=`
Error generating stack: `+h.message+`
`+h.stack}return{value:r,source:i,stack:d,digest:null}}function lc(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function uc(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Fw=typeof WeakMap=="function"?WeakMap:Map;function Hp(r,i,a){a=An(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Ea||(Ea=!0,Sc=u),uc(r,i)},a}function Vp(r,i,a){a=An(-1,a),a.tag=3;var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){uc(r,i)}}var h=r.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){uc(r,i),typeof u!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})}),a}function $p(r,i,a){var u=r.pingCache;if(u===null){u=r.pingCache=new Fw;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),r=Zw.bind(null,r,i,a),i.then(r,r))}function Gp(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function qp(r,i,a,u,d){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=An(-1,1),i.tag=2,rr(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var Bw=V.ReactCurrentOwner,Dt=!1;function St(r,i,a,u){i.child=r===null?fp(i,null,a,u):_i(i,r.child,a,u)}function Kp(r,i,a,u,d){a=a.render;var h=i.ref;return xi(i,d),u=ec(r,i,a,u,h,d),a=tc(),r!==null&&!Dt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,On(r,i,d)):(Me&&a&&Mu(i),i.flags|=1,St(r,i,u,d),i.child)}function Yp(r,i,a,u,d){if(r===null){var h=a.type;return typeof h=="function"&&!Pc(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Qp(r,i,h,u,d)):(r=Ta(a.type,null,u,i,i.mode,d),r.ref=i.ref,r.return=i,i.child=r)}if(h=r.child,(r.lanes&d)===0){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:gs,a(y,u)&&r.ref===i.ref)return On(r,i,d)}return i.flags|=1,r=ur(h,u),r.ref=i.ref,r.return=i,i.child=r}function Qp(r,i,a,u,d){if(r!==null){var h=r.memoizedProps;if(gs(h,u)&&r.ref===i.ref)if(Dt=!1,i.pendingProps=u=h,(r.lanes&d)!==0)(r.flags&131072)!==0&&(Dt=!0);else return i.lanes=r.lanes,On(r,i,d)}return cc(r,i,a,u,d)}function Xp(r,i,a){var u=i.pendingProps,d=u.children,h=r!==null?r.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Re(Ci,Vt),Vt|=a;else{if((a&1073741824)===0)return r=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,Re(Ci,Vt),Vt|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=h!==null?h.baseLanes:a,Re(Ci,Vt),Vt|=u}else h!==null?(u=h.baseLanes|a,i.memoizedState=null):u=a,Re(Ci,Vt),Vt|=u;return St(r,i,d,a),i.child}function Jp(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cc(r,i,a,u,d){var h=Ot(a)?Rr:yt.current;return h=mi(i,h),xi(i,d),a=ec(r,i,a,u,h,d),u=tc(),r!==null&&!Dt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~d,On(r,i,d)):(Me&&u&&Mu(i),i.flags|=1,St(r,i,a,d),i.child)}function Zp(r,i,a,u,d){if(Ot(a)){var h=!0;Zo(i)}else h=!1;if(xi(i,d),i.stateNode===null)ya(r,i),zp(i,a,u),ac(i,a,u,d),u=!0;else if(r===null){var y=i.stateNode,w=i.memoizedProps;y.props=w;var E=y.context,T=a.contextType;typeof T=="object"&&T!==null?T=Kt(T):(T=Ot(a)?Rr:yt.current,T=mi(i,T));var L=a.getDerivedStateFromProps,M=typeof L=="function"||typeof y.getSnapshotBeforeUpdate=="function";M||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(w!==u||E!==T)&&Wp(i,y,u,T),nr=!1;var j=i.memoizedState;y.state=j,la(i,u,y,d),E=i.memoizedState,w!==u||j!==E||At.current||nr?(typeof L=="function"&&(oc(i,a,L,u),E=i.memoizedState),(w=nr||Bp(i,a,w,u,j,E,T))?(M||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(i.flags|=4194308)):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=E),y.props=u,y.state=E,y.context=T,u=w):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{y=i.stateNode,mp(r,i),w=i.memoizedProps,T=i.type===i.elementType?w:sn(i.type,w),y.props=T,M=i.pendingProps,j=y.context,E=a.contextType,typeof E=="object"&&E!==null?E=Kt(E):(E=Ot(a)?Rr:yt.current,E=mi(i,E));var $=a.getDerivedStateFromProps;(L=typeof $=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(w!==M||j!==E)&&Wp(i,y,u,E),nr=!1,j=i.memoizedState,y.state=j,la(i,u,y,d);var Y=i.memoizedState;w!==M||j!==Y||At.current||nr?(typeof $=="function"&&(oc(i,a,$,u),Y=i.memoizedState),(T=nr||Bp(i,a,T,u,j,Y,E)||!1)?(L||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(u,Y,E),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(u,Y,E)),typeof y.componentDidUpdate=="function"&&(i.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof y.componentDidUpdate!="function"||w===r.memoizedProps&&j===r.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&j===r.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Y),y.props=u,y.state=Y,y.context=E,u=T):(typeof y.componentDidUpdate!="function"||w===r.memoizedProps&&j===r.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||w===r.memoizedProps&&j===r.memoizedState||(i.flags|=1024),u=!1)}return dc(r,i,a,u,h,d)}function dc(r,i,a,u,d,h){Jp(r,i);var y=(i.flags&128)!==0;if(!u&&!y)return d&&ip(i,a,!1),On(r,i,h);u=i.stateNode,Bw.current=i;var w=y&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,r!==null&&y?(i.child=_i(i,r.child,null,h),i.child=_i(i,null,w,h)):St(r,i,w,h),i.memoizedState=u.state,d&&ip(i,a,!0),i.child}function em(r){var i=r.stateNode;i.pendingContext?np(r,i.pendingContext,i.pendingContext!==i.context):i.context&&np(r,i.context,!1),Ku(r,i.containerInfo)}function tm(r,i,a,u,d){return vi(),zu(d),i.flags|=256,St(r,i,a,u),i.child}var hc={dehydrated:null,treeContext:null,retryLane:0};function fc(r){return{baseLanes:r,cachePool:null,transitions:null}}function nm(r,i,a){var u=i.pendingProps,d=Ue.current,h=!1,y=(i.flags&128)!==0,w;if((w=y)||(w=r!==null&&r.memoizedState===null?!1:(d&2)!==0),w?(h=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Re(Ue,d&1),r===null)return Bu(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(y=u.children,r=u.fallback,h?(u=i.mode,h=i.child,y={mode:"hidden",children:y},(u&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=y):h=ba(y,u,0,null),r=Br(r,u,a,null),h.return=i,r.return=i,h.sibling=r,i.child=h,i.child.memoizedState=fc(a),i.memoizedState=hc,r):pc(i,y));if(d=r.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return zw(r,i,y,u,w,d,a);if(h){h=u.fallback,y=i.mode,d=r.child,w=d.sibling;var E={mode:"hidden",children:u.children};return(y&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=E,i.deletions=null):(u=ur(d,E),u.subtreeFlags=d.subtreeFlags&14680064),w!==null?h=ur(w,h):(h=Br(h,y,a,null),h.flags|=2),h.return=i,u.return=i,u.sibling=h,i.child=u,u=h,h=i.child,y=r.child.memoizedState,y=y===null?fc(a):{baseLanes:y.baseLanes|a,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=r.childLanes&~a,i.memoizedState=hc,u}return h=r.child,r=h.sibling,u=ur(h,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=u,i.memoizedState=null,u}function pc(r,i){return i=ba({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function ga(r,i,a,u){return u!==null&&zu(u),_i(i,r.child,null,a),r=pc(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function zw(r,i,a,u,d,h,y){if(a)return i.flags&256?(i.flags&=-257,u=lc(Error(t(422))),ga(r,i,y,u)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(h=u.fallback,d=i.mode,u=ba({mode:"visible",children:u.children},d,0,null),h=Br(h,d,y,null),h.flags|=2,u.return=i,h.return=i,u.sibling=h,i.child=u,(i.mode&1)!==0&&_i(i,r.child,null,y),i.child.memoizedState=fc(y),i.memoizedState=hc,h);if((i.mode&1)===0)return ga(r,i,y,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var w=u.dgst;return u=w,h=Error(t(419)),u=lc(h,u,void 0),ga(r,i,y,u)}if(w=(y&r.childLanes)!==0,Dt||w){if(u=at,u!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|y))!==0?0:d,d!==0&&d!==h.retryLane&&(h.retryLane=d,Pn(r,d),ln(u,r,d,-1))}return Rc(),u=lc(Error(t(421))),ga(r,i,y,u)}return d.data==="$?"?(i.flags|=128,i.child=r.child,i=ex.bind(null,r),d._reactRetry=i,null):(r=h.treeContext,Ht=Jn(d.nextSibling),Wt=i,Me=!0,rn=null,r!==null&&(Gt[qt++]=bn,Gt[qt++]=Rn,Gt[qt++]=Pr,bn=r.id,Rn=r.overflow,Pr=i),i=pc(i,u.children),i.flags|=4096,i)}function rm(r,i,a){r.lanes|=i;var u=r.alternate;u!==null&&(u.lanes|=i),$u(r.return,i,a)}function mc(r,i,a,u,d){var h=r.memoizedState;h===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=u,h.tail=a,h.tailMode=d)}function im(r,i,a){var u=i.pendingProps,d=u.revealOrder,h=u.tail;if(St(r,i,u.children,a),u=Ue.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&rm(r,a,i);else if(r.tag===19)rm(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}if(Re(Ue,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)r=a.alternate,r!==null&&ua(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),mc(i,!1,d,a,h);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(r=d.alternate,r!==null&&ua(r)===null){i.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}mc(i,!0,a,null,h);break;case"together":mc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ya(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function On(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Lr|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=ur(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=ur(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function Ww(r,i,a){switch(i.tag){case 3:em(i),vi();break;case 5:vp(i);break;case 1:Ot(i.type)&&Zo(i);break;case 4:Ku(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Re(sa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Re(Ue,Ue.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?nm(r,i,a):(Re(Ue,Ue.current&1),r=On(r,i,a),r!==null?r.sibling:null);Re(Ue,Ue.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(r.flags&128)!==0){if(u)return im(r,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Re(Ue,Ue.current),u)break;return null;case 22:case 23:return i.lanes=0,Xp(r,i,a)}return On(r,i,a)}var sm,gc,om,am;sm=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gc=function(){},om=function(r,i,a,u){var d=r.memoizedProps;if(d!==u){r=i.stateNode,Dr(gn.current);var h=null;switch(a){case"input":d=_e(r,d),u=_e(r,u),h=[];break;case"select":d=H({},d,{value:void 0}),u=H({},u,{value:void 0}),h=[];break;case"textarea":d=et(r,d),u=et(r,u),h=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(r.onclick=Qo)}Ql(a,u);var y;a=null;for(T in d)if(!u.hasOwnProperty(T)&&d.hasOwnProperty(T)&&d[T]!=null)if(T==="style"){var w=d[T];for(y in w)w.hasOwnProperty(y)&&(a||(a={}),a[y]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(o.hasOwnProperty(T)?h||(h=[]):(h=h||[]).push(T,null));for(T in u){var E=u[T];if(w=d!=null?d[T]:void 0,u.hasOwnProperty(T)&&E!==w&&(E!=null||w!=null))if(T==="style")if(w){for(y in w)!w.hasOwnProperty(y)||E&&E.hasOwnProperty(y)||(a||(a={}),a[y]="");for(y in E)E.hasOwnProperty(y)&&w[y]!==E[y]&&(a||(a={}),a[y]=E[y])}else a||(h||(h=[]),h.push(T,a)),a=E;else T==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(h=h||[]).push(T,E)):T==="children"?typeof E!="string"&&typeof E!="number"||(h=h||[]).push(T,""+E):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(o.hasOwnProperty(T)?(E!=null&&T==="onScroll"&&De("scroll",r),h||w===E||(h=[])):(h=h||[]).push(T,E))}a&&(h=h||[]).push("style",a);var T=h;(i.updateQueue=T)&&(i.flags|=4)}},am=function(r,i,a,u){a!==u&&(i.flags|=4)};function Ps(r,i){if(!Me)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function _t(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,u=0;if(i)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=a,i}function Hw(r,i,a){var u=i.pendingProps;switch(Uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(i),null;case 1:return Ot(i.type)&&Jo(),_t(i),null;case 3:return u=i.stateNode,Ei(),je(At),je(yt),Xu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(r===null||r.child===null)&&(ra(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rn!==null&&(Ic(rn),rn=null))),gc(r,i),_t(i),null;case 5:Yu(i);var d=Dr(Ns.current);if(a=i.type,r!==null&&i.stateNode!=null)om(r,i,a,u,d),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return _t(i),null}if(r=Dr(gn.current),ra(i)){u=i.stateNode,a=i.type;var h=i.memoizedProps;switch(u[mn]=i,u[xs]=h,r=(i.mode&1)!==0,a){case"dialog":De("cancel",u),De("close",u);break;case"iframe":case"object":case"embed":De("load",u);break;case"video":case"audio":for(d=0;d<vs.length;d++)De(vs[d],u);break;case"source":De("error",u);break;case"img":case"image":case"link":De("error",u),De("load",u);break;case"details":De("toggle",u);break;case"input":Ze(u,h),De("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!h.multiple},De("invalid",u);break;case"textarea":st(u,h),De("invalid",u)}Ql(a,h),d=null;for(var y in h)if(h.hasOwnProperty(y)){var w=h[y];y==="children"?typeof w=="string"?u.textContent!==w&&(h.suppressHydrationWarning!==!0&&Yo(u.textContent,w,r),d=["children",w]):typeof w=="number"&&u.textContent!==""+w&&(h.suppressHydrationWarning!==!0&&Yo(u.textContent,w,r),d=["children",""+w]):o.hasOwnProperty(y)&&w!=null&&y==="onScroll"&&De("scroll",u)}switch(a){case"input":R(u),Io(u,h,!0);break;case"textarea":R(u),$h(u);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(u.onclick=Qo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Gh(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=y.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof u.is=="string"?r=y.createElement(a,{is:u.is}):(r=y.createElement(a),a==="select"&&(y=r,u.multiple?y.multiple=!0:u.size&&(y.size=u.size))):r=y.createElementNS(r,a),r[mn]=i,r[xs]=u,sm(r,i,!1,!1),i.stateNode=r;e:{switch(y=Xl(a,u),a){case"dialog":De("cancel",r),De("close",r),d=u;break;case"iframe":case"object":case"embed":De("load",r),d=u;break;case"video":case"audio":for(d=0;d<vs.length;d++)De(vs[d],r);d=u;break;case"source":De("error",r),d=u;break;case"img":case"image":case"link":De("error",r),De("load",r),d=u;break;case"details":De("toggle",r),d=u;break;case"input":Ze(r,u),d=_e(r,u),De("invalid",r);break;case"option":d=u;break;case"select":r._wrapperState={wasMultiple:!!u.multiple},d=H({},u,{value:void 0}),De("invalid",r);break;case"textarea":st(r,u),d=et(r,u),De("invalid",r);break;default:d=u}Ql(a,d),w=d;for(h in w)if(w.hasOwnProperty(h)){var E=w[h];h==="style"?Yh(r,E):h==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&qh(r,E)):h==="children"?typeof E=="string"?(a!=="textarea"||E!=="")&&Zi(r,E):typeof E=="number"&&Zi(r,""+E):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?E!=null&&h==="onScroll"&&De("scroll",r):E!=null&&B(r,h,E,y))}switch(a){case"input":R(r),Io(r,u,!1);break;case"textarea":R(r),$h(r);break;case"option":u.value!=null&&r.setAttribute("value",""+Ee(u.value));break;case"select":r.multiple=!!u.multiple,h=u.value,h!=null?it(r,!!u.multiple,h,!1):u.defaultValue!=null&&it(r,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=Qo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _t(i),null;case 6:if(r&&i.stateNode!=null)am(r,i,r.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Dr(Ns.current),Dr(gn.current),ra(i)){if(u=i.stateNode,a=i.memoizedProps,u[mn]=i,(h=u.nodeValue!==a)&&(r=Wt,r!==null))switch(r.tag){case 3:Yo(u.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Yo(u.nodeValue,a,(r.mode&1)!==0)}h&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[mn]=i,i.stateNode=u}return _t(i),null;case 13:if(je(Ue),u=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Me&&Ht!==null&&(i.mode&1)!==0&&(i.flags&128)===0)cp(),vi(),i.flags|=98560,h=!1;else if(h=ra(i),u!==null&&u.dehydrated!==null){if(r===null){if(!h)throw Error(t(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(t(317));h[mn]=i}else vi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_t(i),h=!1}else rn!==null&&(Ic(rn),rn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(r!==null&&r.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(Ue.current&1)!==0?nt===0&&(nt=3):Rc())),i.updateQueue!==null&&(i.flags|=4),_t(i),null);case 4:return Ei(),gc(r,i),r===null&&_s(i.stateNode.containerInfo),_t(i),null;case 10:return Vu(i.type._context),_t(i),null;case 17:return Ot(i.type)&&Jo(),_t(i),null;case 19:if(je(Ue),h=i.memoizedState,h===null)return _t(i),null;if(u=(i.flags&128)!==0,y=h.rendering,y===null)if(u)Ps(h,!1);else{if(nt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(y=ua(r),y!==null){for(i.flags|=128,Ps(h,!1),u=y.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)h=a,r=u,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=r,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,r=y.dependencies,h.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Re(Ue,Ue.current&1|2),i.child}r=r.sibling}h.tail!==null&&qe()>Ni&&(i.flags|=128,u=!0,Ps(h,!1),i.lanes=4194304)}else{if(!u)if(r=ua(y),r!==null){if(i.flags|=128,u=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ps(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!Me)return _t(i),null}else 2*qe()-h.renderingStartTime>Ni&&a!==1073741824&&(i.flags|=128,u=!0,Ps(h,!1),i.lanes=4194304);h.isBackwards?(y.sibling=i.child,i.child=y):(a=h.last,a!==null?a.sibling=y:i.child=y,h.last=y)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=qe(),i.sibling=null,a=Ue.current,Re(Ue,u?a&1|2:a&1),i):(_t(i),null);case 22:case 23:return bc(),u=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Vt&1073741824)!==0&&(_t(i),i.subtreeFlags&6&&(i.flags|=8192)):_t(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Vw(r,i){switch(Uu(i),i.tag){case 1:return Ot(i.type)&&Jo(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Ei(),je(At),je(yt),Xu(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return Yu(i),null;case 13:if(je(Ue),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vi()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return je(Ue),null;case 4:return Ei(),null;case 10:return Vu(i.type._context),null;case 22:case 23:return bc(),null;case 24:return null;default:return null}}var va=!1,wt=!1,$w=typeof WeakSet=="function"?WeakSet:Set,q=null;function Si(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){We(r,i,u)}else a.current=null}function yc(r,i,a){try{a()}catch(u){We(r,i,u)}}var lm=!1;function Gw(r,i){if(bu=Uo,r=Bf(),xu(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,h=u.focusNode;u=u.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var y=0,w=-1,E=-1,T=0,L=0,M=r,j=null;t:for(;;){for(var $;M!==a||d!==0&&M.nodeType!==3||(w=y+d),M!==h||u!==0&&M.nodeType!==3||(E=y+u),M.nodeType===3&&(y+=M.nodeValue.length),($=M.firstChild)!==null;)j=M,M=$;for(;;){if(M===r)break t;if(j===a&&++T===d&&(w=y),j===h&&++L===u&&(E=y),($=M.nextSibling)!==null)break;M=j,j=M.parentNode}M=$}a=w===-1||E===-1?null:{start:w,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ru={focusedElem:r,selectionRange:a},Uo=!1,q=i;q!==null;)if(i=q,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,q=r;else for(;q!==null;){i=q;try{var Y=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var Q=Y.memoizedProps,Ke=Y.memoizedState,C=i.stateNode,k=C.getSnapshotBeforeUpdate(i.elementType===i.type?Q:sn(i.type,Q),Ke);C.__reactInternalSnapshotBeforeUpdate=k}break;case 3:var N=i.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(U){We(i,i.return,U)}if(r=i.sibling,r!==null){r.return=i.return,q=r;break}q=i.return}return Y=lm,lm=!1,Y}function As(r,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&r)===r){var h=d.destroy;d.destroy=void 0,h!==void 0&&yc(i,a,h)}d=d.next}while(d!==u)}}function _a(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function vc(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function um(r){var i=r.alternate;i!==null&&(r.alternate=null,um(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[mn],delete i[xs],delete i[Du],delete i[Tw],delete i[bw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function cm(r){return r.tag===5||r.tag===3||r.tag===4}function dm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||cm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function _c(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Qo));else if(u!==4&&(r=r.child,r!==null))for(_c(r,i,a),r=r.sibling;r!==null;)_c(r,i,a),r=r.sibling}function wc(r,i,a){var u=r.tag;if(u===5||u===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(u!==4&&(r=r.child,r!==null))for(wc(r,i,a),r=r.sibling;r!==null;)wc(r,i,a),r=r.sibling}var ft=null,on=!1;function ir(r,i,a){for(a=a.child;a!==null;)hm(r,i,a),a=a.sibling}function hm(r,i,a){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Ao,a)}catch{}switch(a.tag){case 5:wt||Si(a,i);case 6:var u=ft,d=on;ft=null,ir(r,i,a),ft=u,on=d,ft!==null&&(on?(r=ft,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):ft.removeChild(a.stateNode));break;case 18:ft!==null&&(on?(r=ft,a=a.stateNode,r.nodeType===8?Ou(r.parentNode,a):r.nodeType===1&&Ou(r,a),cs(r)):Ou(ft,a.stateNode));break;case 4:u=ft,d=on,ft=a.stateNode.containerInfo,on=!0,ir(r,i,a),ft=u,on=d;break;case 0:case 11:case 14:case 15:if(!wt&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var h=d,y=h.destroy;h=h.tag,y!==void 0&&((h&2)!==0||(h&4)!==0)&&yc(a,i,y),d=d.next}while(d!==u)}ir(r,i,a);break;case 1:if(!wt&&(Si(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(w){We(a,i,w)}ir(r,i,a);break;case 21:ir(r,i,a);break;case 22:a.mode&1?(wt=(u=wt)||a.memoizedState!==null,ir(r,i,a),wt=u):ir(r,i,a);break;default:ir(r,i,a)}}function fm(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new $w),i.forEach(function(u){var d=tx.bind(null,r,u);a.has(u)||(a.add(u),u.then(d,d))})}}function an(r,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var h=r,y=i,w=y;e:for(;w!==null;){switch(w.tag){case 5:ft=w.stateNode,on=!1;break e;case 3:ft=w.stateNode.containerInfo,on=!0;break e;case 4:ft=w.stateNode.containerInfo,on=!0;break e}w=w.return}if(ft===null)throw Error(t(160));hm(h,y,d),ft=null,on=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(T){We(d,i,T)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pm(i,r),i=i.sibling}function pm(r,i){var a=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(an(i,r),vn(r),u&4){try{As(3,r,r.return),_a(3,r)}catch(Q){We(r,r.return,Q)}try{As(5,r,r.return)}catch(Q){We(r,r.return,Q)}}break;case 1:an(i,r),vn(r),u&512&&a!==null&&Si(a,a.return);break;case 5:if(an(i,r),vn(r),u&512&&a!==null&&Si(a,a.return),r.flags&32){var d=r.stateNode;try{Zi(d,"")}catch(Q){We(r,r.return,Q)}}if(u&4&&(d=r.stateNode,d!=null)){var h=r.memoizedProps,y=a!==null?a.memoizedProps:h,w=r.type,E=r.updateQueue;if(r.updateQueue=null,E!==null)try{w==="input"&&h.type==="radio"&&h.name!=null&&Nn(d,h),Xl(w,y);var T=Xl(w,h);for(y=0;y<E.length;y+=2){var L=E[y],M=E[y+1];L==="style"?Yh(d,M):L==="dangerouslySetInnerHTML"?qh(d,M):L==="children"?Zi(d,M):B(d,L,M,T)}switch(w){case"input":Ir(d,h);break;case"textarea":Vh(d,h);break;case"select":var j=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!h.multiple;var $=h.value;$!=null?it(d,!!h.multiple,$,!1):j!==!!h.multiple&&(h.defaultValue!=null?it(d,!!h.multiple,h.defaultValue,!0):it(d,!!h.multiple,h.multiple?[]:"",!1))}d[xs]=h}catch(Q){We(r,r.return,Q)}}break;case 6:if(an(i,r),vn(r),u&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,h=r.memoizedProps;try{d.nodeValue=h}catch(Q){We(r,r.return,Q)}}break;case 3:if(an(i,r),vn(r),u&4&&a!==null&&a.memoizedState.isDehydrated)try{cs(i.containerInfo)}catch(Q){We(r,r.return,Q)}break;case 4:an(i,r),vn(r);break;case 13:an(i,r),vn(r),d=r.child,d.flags&8192&&(h=d.memoizedState!==null,d.stateNode.isHidden=h,!h||d.alternate!==null&&d.alternate.memoizedState!==null||(kc=qe())),u&4&&fm(r);break;case 22:if(L=a!==null&&a.memoizedState!==null,r.mode&1?(wt=(T=wt)||L,an(i,r),wt=T):an(i,r),vn(r),u&8192){if(T=r.memoizedState!==null,(r.stateNode.isHidden=T)&&!L&&(r.mode&1)!==0)for(q=r,L=r.child;L!==null;){for(M=q=L;q!==null;){switch(j=q,$=j.child,j.tag){case 0:case 11:case 14:case 15:As(4,j,j.return);break;case 1:Si(j,j.return);var Y=j.stateNode;if(typeof Y.componentWillUnmount=="function"){u=j,a=j.return;try{i=u,Y.props=i.memoizedProps,Y.state=i.memoizedState,Y.componentWillUnmount()}catch(Q){We(u,a,Q)}}break;case 5:Si(j,j.return);break;case 22:if(j.memoizedState!==null){ym(M);continue}}$!==null?($.return=j,q=$):ym(M)}L=L.sibling}e:for(L=null,M=r;;){if(M.tag===5){if(L===null){L=M;try{d=M.stateNode,T?(h=d.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(w=M.stateNode,E=M.memoizedProps.style,y=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=Kh("display",y))}catch(Q){We(r,r.return,Q)}}}else if(M.tag===6){if(L===null)try{M.stateNode.nodeValue=T?"":M.memoizedProps}catch(Q){We(r,r.return,Q)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===r)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===r)break e;for(;M.sibling===null;){if(M.return===null||M.return===r)break e;L===M&&(L=null),M=M.return}L===M&&(L=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:an(i,r),vn(r),u&4&&fm(r);break;case 21:break;default:an(i,r),vn(r)}}function vn(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(cm(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Zi(d,""),u.flags&=-33);var h=dm(r);wc(r,h,d);break;case 3:case 4:var y=u.stateNode.containerInfo,w=dm(r);_c(r,w,y);break;default:throw Error(t(161))}}catch(E){We(r,r.return,E)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function qw(r,i,a){q=r,mm(r)}function mm(r,i,a){for(var u=(r.mode&1)!==0;q!==null;){var d=q,h=d.child;if(d.tag===22&&u){var y=d.memoizedState!==null||va;if(!y){var w=d.alternate,E=w!==null&&w.memoizedState!==null||wt;w=va;var T=wt;if(va=y,(wt=E)&&!T)for(q=d;q!==null;)y=q,E=y.child,y.tag===22&&y.memoizedState!==null?vm(d):E!==null?(E.return=y,q=E):vm(d);for(;h!==null;)q=h,mm(h),h=h.sibling;q=d,va=w,wt=T}gm(r)}else(d.subtreeFlags&8772)!==0&&h!==null?(h.return=d,q=h):gm(r)}}function gm(r){for(;q!==null;){var i=q;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:wt||_a(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!wt)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:sn(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&yp(i,h,u);break;case 3:var y=i.updateQueue;if(y!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}yp(i,y,a)}break;case 5:var w=i.stateNode;if(a===null&&i.flags&4){a=w;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&a.focus();break;case"img":E.src&&(a.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var T=i.alternate;if(T!==null){var L=T.memoizedState;if(L!==null){var M=L.dehydrated;M!==null&&cs(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}wt||i.flags&512&&vc(i)}catch(j){We(i,i.return,j)}}if(i===r){q=null;break}if(a=i.sibling,a!==null){a.return=i.return,q=a;break}q=i.return}}function ym(r){for(;q!==null;){var i=q;if(i===r){q=null;break}var a=i.sibling;if(a!==null){a.return=i.return,q=a;break}q=i.return}}function vm(r){for(;q!==null;){var i=q;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{_a(4,i)}catch(E){We(i,a,E)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(E){We(i,d,E)}}var h=i.return;try{vc(i)}catch(E){We(i,h,E)}break;case 5:var y=i.return;try{vc(i)}catch(E){We(i,y,E)}}}catch(E){We(i,i.return,E)}if(i===r){q=null;break}var w=i.sibling;if(w!==null){w.return=i.return,q=w;break}q=i.return}}var Kw=Math.ceil,wa=V.ReactCurrentDispatcher,xc=V.ReactCurrentOwner,Qt=V.ReactCurrentBatchConfig,we=0,at=null,Qe=null,pt=0,Vt=0,Ci=Zn(0),nt=0,Os=null,Lr=0,xa=0,Ec=0,Ds=null,jt=null,kc=0,Ni=1/0,Dn=null,Ea=!1,Sc=null,sr=null,ka=!1,or=null,Sa=0,js=0,Cc=null,Ca=-1,Na=0;function Ct(){return(we&6)!==0?qe():Ca!==-1?Ca:Ca=qe()}function ar(r){return(r.mode&1)===0?1:(we&2)!==0&&pt!==0?pt&-pt:Pw.transition!==null?(Na===0&&(Na=df()),Na):(r=Ce,r!==0||(r=window.event,r=r===void 0?16:wf(r.type)),r)}function ln(r,i,a,u){if(50<js)throw js=0,Cc=null,Error(t(185));ss(r,a,u),((we&2)===0||r!==at)&&(r===at&&((we&2)===0&&(xa|=a),nt===4&&lr(r,pt)),Lt(r,u),a===1&&we===0&&(i.mode&1)===0&&(Ni=qe()+500,ea&&tr()))}function Lt(r,i){var a=r.callbackNode;P0(r,i);var u=jo(r,r===at?pt:0);if(u===0)a!==null&&lf(a),r.callbackNode=null,r.callbackPriority=0;else if(i=u&-u,r.callbackPriority!==i){if(a!=null&&lf(a),i===1)r.tag===0?Rw(wm.bind(null,r)):sp(wm.bind(null,r)),Nw(function(){(we&6)===0&&tr()}),a=null;else{switch(hf(u)){case 1:a=iu;break;case 4:a=uf;break;case 16:a=Po;break;case 536870912:a=cf;break;default:a=Po}a=Tm(a,_m.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function _m(r,i){if(Ca=-1,Na=0,(we&6)!==0)throw Error(t(327));var a=r.callbackNode;if(Ii()&&r.callbackNode!==a)return null;var u=jo(r,r===at?pt:0);if(u===0)return null;if((u&30)!==0||(u&r.expiredLanes)!==0||i)i=Ia(r,u);else{i=u;var d=we;we|=2;var h=Em();(at!==r||pt!==i)&&(Dn=null,Ni=qe()+500,Ur(r,i));do try{Xw();break}catch(w){xm(r,w)}while(!0);Hu(),wa.current=h,we=d,Qe!==null?i=0:(at=null,pt=0,i=nt)}if(i!==0){if(i===2&&(d=su(r),d!==0&&(u=d,i=Nc(r,d))),i===1)throw a=Os,Ur(r,0),lr(r,u),Lt(r,qe()),a;if(i===6)lr(r,u);else{if(d=r.current.alternate,(u&30)===0&&!Yw(d)&&(i=Ia(r,u),i===2&&(h=su(r),h!==0&&(u=h,i=Nc(r,h))),i===1))throw a=Os,Ur(r,0),lr(r,u),Lt(r,qe()),a;switch(r.finishedWork=d,r.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Fr(r,jt,Dn);break;case 3:if(lr(r,u),(u&130023424)===u&&(i=kc+500-qe(),10<i)){if(jo(r,0)!==0)break;if(d=r.suspendedLanes,(d&u)!==u){Ct(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Au(Fr.bind(null,r,jt,Dn),i);break}Fr(r,jt,Dn);break;case 4:if(lr(r,u),(u&4194240)===u)break;for(i=r.eventTimes,d=-1;0<u;){var y=31-tn(u);h=1<<y,y=i[y],y>d&&(d=y),u&=~h}if(u=d,u=qe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Kw(u/1960))-u,10<u){r.timeoutHandle=Au(Fr.bind(null,r,jt,Dn),u);break}Fr(r,jt,Dn);break;case 5:Fr(r,jt,Dn);break;default:throw Error(t(329))}}}return Lt(r,qe()),r.callbackNode===a?_m.bind(null,r):null}function Nc(r,i){var a=Ds;return r.current.memoizedState.isDehydrated&&(Ur(r,i).flags|=256),r=Ia(r,i),r!==2&&(i=jt,jt=a,i!==null&&Ic(i)),r}function Ic(r){jt===null?jt=r:jt.push.apply(jt,r)}function Yw(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],h=d.getSnapshot;d=d.value;try{if(!nn(h(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function lr(r,i){for(i&=~Ec,i&=~xa,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-tn(i),u=1<<a;r[a]=-1,i&=~u}}function wm(r){if((we&6)!==0)throw Error(t(327));Ii();var i=jo(r,0);if((i&1)===0)return Lt(r,qe()),null;var a=Ia(r,i);if(r.tag!==0&&a===2){var u=su(r);u!==0&&(i=u,a=Nc(r,u))}if(a===1)throw a=Os,Ur(r,0),lr(r,i),Lt(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Fr(r,jt,Dn),Lt(r,qe()),null}function Tc(r,i){var a=we;we|=1;try{return r(i)}finally{we=a,we===0&&(Ni=qe()+500,ea&&tr())}}function Mr(r){or!==null&&or.tag===0&&(we&6)===0&&Ii();var i=we;we|=1;var a=Qt.transition,u=Ce;try{if(Qt.transition=null,Ce=1,r)return r()}finally{Ce=u,Qt.transition=a,we=i,(we&6)===0&&tr()}}function bc(){Vt=Ci.current,je(Ci)}function Ur(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Cw(a)),Qe!==null)for(a=Qe.return;a!==null;){var u=a;switch(Uu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Jo();break;case 3:Ei(),je(At),je(yt),Xu();break;case 5:Yu(u);break;case 4:Ei();break;case 13:je(Ue);break;case 19:je(Ue);break;case 10:Vu(u.type._context);break;case 22:case 23:bc()}a=a.return}if(at=r,Qe=r=ur(r.current,null),pt=Vt=i,nt=0,Os=null,Ec=xa=Lr=0,jt=Ds=null,Or!==null){for(i=0;i<Or.length;i++)if(a=Or[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,h=a.pending;if(h!==null){var y=h.next;h.next=d,u.next=y}a.pending=u}Or=null}return r}function xm(r,i){do{var a=Qe;try{if(Hu(),ca.current=pa,da){for(var u=Fe.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}da=!1}if(jr=0,ot=tt=Fe=null,Is=!1,Ts=0,xc.current=null,a===null||a.return===null){nt=1,Os=i,Qe=null;break}e:{var h=r,y=a.return,w=a,E=i;if(i=pt,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var T=E,L=w,M=L.tag;if((L.mode&1)===0&&(M===0||M===11||M===15)){var j=L.alternate;j?(L.updateQueue=j.updateQueue,L.memoizedState=j.memoizedState,L.lanes=j.lanes):(L.updateQueue=null,L.memoizedState=null)}var $=Gp(y);if($!==null){$.flags&=-257,qp($,y,w,h,i),$.mode&1&&$p(h,T,i),i=$,E=T;var Y=i.updateQueue;if(Y===null){var Q=new Set;Q.add(E),i.updateQueue=Q}else Y.add(E);break e}else{if((i&1)===0){$p(h,T,i),Rc();break e}E=Error(t(426))}}else if(Me&&w.mode&1){var Ke=Gp(y);if(Ke!==null){(Ke.flags&65536)===0&&(Ke.flags|=256),qp(Ke,y,w,h,i),zu(ki(E,w));break e}}h=E=ki(E,w),nt!==4&&(nt=2),Ds===null?Ds=[h]:Ds.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var C=Hp(h,E,i);gp(h,C);break e;case 1:w=E;var k=h.type,N=h.stateNode;if((h.flags&128)===0&&(typeof k.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(sr===null||!sr.has(N)))){h.flags|=65536,i&=-i,h.lanes|=i;var U=Vp(h,w,i);gp(h,U);break e}}h=h.return}while(h!==null)}Sm(a)}catch(X){i=X,Qe===a&&a!==null&&(Qe=a=a.return);continue}break}while(!0)}function Em(){var r=wa.current;return wa.current=pa,r===null?pa:r}function Rc(){(nt===0||nt===3||nt===2)&&(nt=4),at===null||(Lr&268435455)===0&&(xa&268435455)===0||lr(at,pt)}function Ia(r,i){var a=we;we|=2;var u=Em();(at!==r||pt!==i)&&(Dn=null,Ur(r,i));do try{Qw();break}catch(d){xm(r,d)}while(!0);if(Hu(),we=a,wa.current=u,Qe!==null)throw Error(t(261));return at=null,pt=0,nt}function Qw(){for(;Qe!==null;)km(Qe)}function Xw(){for(;Qe!==null&&!E0();)km(Qe)}function km(r){var i=Im(r.alternate,r,Vt);r.memoizedProps=r.pendingProps,i===null?Sm(r):Qe=i,xc.current=null}function Sm(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=Hw(a,i,Vt),a!==null){Qe=a;return}}else{if(a=Vw(a,i),a!==null){a.flags&=32767,Qe=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{nt=6,Qe=null;return}}if(i=i.sibling,i!==null){Qe=i;return}Qe=i=r}while(i!==null);nt===0&&(nt=5)}function Fr(r,i,a){var u=Ce,d=Qt.transition;try{Qt.transition=null,Ce=1,Jw(r,i,a,u)}finally{Qt.transition=d,Ce=u}return null}function Jw(r,i,a,u){do Ii();while(or!==null);if((we&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var h=a.lanes|a.childLanes;if(A0(r,h),r===at&&(Qe=at=null,pt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ka||(ka=!0,Tm(Po,function(){return Ii(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Qt.transition,Qt.transition=null;var y=Ce;Ce=1;var w=we;we|=4,xc.current=null,Gw(r,a),pm(a,r),vw(Ru),Uo=!!bu,Ru=bu=null,r.current=a,qw(a),k0(),we=w,Ce=y,Qt.transition=h}else r.current=a;if(ka&&(ka=!1,or=r,Sa=d),h=r.pendingLanes,h===0&&(sr=null),N0(a.stateNode),Lt(r,qe()),i!==null)for(u=r.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ea)throw Ea=!1,r=Sc,Sc=null,r;return(Sa&1)!==0&&r.tag!==0&&Ii(),h=r.pendingLanes,(h&1)!==0?r===Cc?js++:(js=0,Cc=r):js=0,tr(),null}function Ii(){if(or!==null){var r=hf(Sa),i=Qt.transition,a=Ce;try{if(Qt.transition=null,Ce=16>r?16:r,or===null)var u=!1;else{if(r=or,or=null,Sa=0,(we&6)!==0)throw Error(t(331));var d=we;for(we|=4,q=r.current;q!==null;){var h=q,y=h.child;if((q.flags&16)!==0){var w=h.deletions;if(w!==null){for(var E=0;E<w.length;E++){var T=w[E];for(q=T;q!==null;){var L=q;switch(L.tag){case 0:case 11:case 15:As(8,L,h)}var M=L.child;if(M!==null)M.return=L,q=M;else for(;q!==null;){L=q;var j=L.sibling,$=L.return;if(um(L),L===T){q=null;break}if(j!==null){j.return=$,q=j;break}q=$}}}var Y=h.alternate;if(Y!==null){var Q=Y.child;if(Q!==null){Y.child=null;do{var Ke=Q.sibling;Q.sibling=null,Q=Ke}while(Q!==null)}}q=h}}if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,q=y;else e:for(;q!==null;){if(h=q,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:As(9,h,h.return)}var C=h.sibling;if(C!==null){C.return=h.return,q=C;break e}q=h.return}}var k=r.current;for(q=k;q!==null;){y=q;var N=y.child;if((y.subtreeFlags&2064)!==0&&N!==null)N.return=y,q=N;else e:for(y=k;q!==null;){if(w=q,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:_a(9,w)}}catch(X){We(w,w.return,X)}if(w===y){q=null;break e}var U=w.sibling;if(U!==null){U.return=w.return,q=U;break e}q=w.return}}if(we=d,tr(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Ao,r)}catch{}u=!0}return u}finally{Ce=a,Qt.transition=i}}return!1}function Cm(r,i,a){i=ki(a,i),i=Hp(r,i,1),r=rr(r,i,1),i=Ct(),r!==null&&(ss(r,1,i),Lt(r,i))}function We(r,i,a){if(r.tag===3)Cm(r,r,a);else for(;i!==null;){if(i.tag===3){Cm(i,r,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(sr===null||!sr.has(u))){r=ki(a,r),r=Vp(i,r,1),i=rr(i,r,1),r=Ct(),i!==null&&(ss(i,1,r),Lt(i,r));break}}i=i.return}}function Zw(r,i,a){var u=r.pingCache;u!==null&&u.delete(i),i=Ct(),r.pingedLanes|=r.suspendedLanes&a,at===r&&(pt&a)===a&&(nt===4||nt===3&&(pt&130023424)===pt&&500>qe()-kc?Ur(r,0):Ec|=a),Lt(r,i)}function Nm(r,i){i===0&&((r.mode&1)===0?i=1:(i=Do,Do<<=1,(Do&130023424)===0&&(Do=4194304)));var a=Ct();r=Pn(r,i),r!==null&&(ss(r,i,a),Lt(r,a))}function ex(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Nm(r,a)}function tx(r,i){var a=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=r.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Nm(r,a)}var Im;Im=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||At.current)Dt=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return Dt=!1,Ww(r,i,a);Dt=(r.flags&131072)!==0}else Dt=!1,Me&&(i.flags&1048576)!==0&&op(i,na,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ya(r,i),r=i.pendingProps;var d=mi(i,yt.current);xi(i,a),d=ec(null,i,u,r,d,a);var h=tc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ot(u)?(h=!0,Zo(i)):h=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,qu(i),d.updater=ma,i.stateNode=d,d._reactInternals=i,ac(i,u,r,a),i=dc(null,i,u,!0,h,a)):(i.tag=0,Me&&h&&Mu(i),St(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(ya(r,i),r=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=rx(u),r=sn(u,r),d){case 0:i=cc(null,i,u,r,a);break e;case 1:i=Zp(null,i,u,r,a);break e;case 11:i=Kp(null,i,u,r,a);break e;case 14:i=Yp(null,i,u,sn(u.type,r),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:sn(u,d),cc(r,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:sn(u,d),Zp(r,i,u,d,a);case 3:e:{if(em(i),r===null)throw Error(t(387));u=i.pendingProps,h=i.memoizedState,d=h.element,mp(r,i),la(i,u,null,a);var y=i.memoizedState;if(u=y.element,h.isDehydrated)if(h={element:u,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){d=ki(Error(t(423)),i),i=tm(r,i,u,a,d);break e}else if(u!==d){d=ki(Error(t(424)),i),i=tm(r,i,u,a,d);break e}else for(Ht=Jn(i.stateNode.containerInfo.firstChild),Wt=i,Me=!0,rn=null,a=fp(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vi(),u===d){i=On(r,i,a);break e}St(r,i,u,a)}i=i.child}return i;case 5:return vp(i),r===null&&Bu(i),u=i.type,d=i.pendingProps,h=r!==null?r.memoizedProps:null,y=d.children,Pu(u,d)?y=null:h!==null&&Pu(u,h)&&(i.flags|=32),Jp(r,i),St(r,i,y,a),i.child;case 6:return r===null&&Bu(i),null;case 13:return nm(r,i,a);case 4:return Ku(i,i.stateNode.containerInfo),u=i.pendingProps,r===null?i.child=_i(i,null,u,a):St(r,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:sn(u,d),Kp(r,i,u,d,a);case 7:return St(r,i,i.pendingProps,a),i.child;case 8:return St(r,i,i.pendingProps.children,a),i.child;case 12:return St(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,h=i.memoizedProps,y=d.value,Re(sa,u._currentValue),u._currentValue=y,h!==null)if(nn(h.value,y)){if(h.children===d.children&&!At.current){i=On(r,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var w=h.dependencies;if(w!==null){y=h.child;for(var E=w.firstContext;E!==null;){if(E.context===u){if(h.tag===1){E=An(-1,a&-a),E.tag=2;var T=h.updateQueue;if(T!==null){T=T.shared;var L=T.pending;L===null?E.next=E:(E.next=L.next,L.next=E),T.pending=E}}h.lanes|=a,E=h.alternate,E!==null&&(E.lanes|=a),$u(h.return,a,i),w.lanes|=a;break}E=E.next}}else if(h.tag===10)y=h.type===i.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(t(341));y.lanes|=a,w=y.alternate,w!==null&&(w.lanes|=a),$u(y,a,i),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===i){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}St(r,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,xi(i,a),d=Kt(d),u=u(d),i.flags|=1,St(r,i,u,a),i.child;case 14:return u=i.type,d=sn(u,i.pendingProps),d=sn(u.type,d),Yp(r,i,u,d,a);case 15:return Qp(r,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:sn(u,d),ya(r,i),i.tag=1,Ot(u)?(r=!0,Zo(i)):r=!1,xi(i,a),zp(i,u,d),ac(i,u,d,a),dc(null,i,u,!0,r,a);case 19:return im(r,i,a);case 22:return Xp(r,i,a)}throw Error(t(156,i.tag))};function Tm(r,i){return af(r,i)}function nx(r,i,a,u){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(r,i,a,u){return new nx(r,i,a,u)}function Pc(r){return r=r.prototype,!(!r||!r.isReactComponent)}function rx(r){if(typeof r=="function")return Pc(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Et)return 11;if(r===Le)return 14}return 2}function ur(r,i){var a=r.alternate;return a===null?(a=Xt(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ta(r,i,a,u,d,h){var y=2;if(u=r,typeof r=="function")Pc(r)&&(y=1);else if(typeof r=="string")y=5;else e:switch(r){case ce:return Br(a.children,d,h,i);case de:y=8,d|=8;break;case Ne:return r=Xt(12,a,i,d|2),r.elementType=Ne,r.lanes=h,r;case ze:return r=Xt(13,a,i,d),r.elementType=ze,r.lanes=h,r;case Pt:return r=Xt(19,a,i,d),r.elementType=Pt,r.lanes=h,r;case Oe:return ba(a,d,h,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case he:y=10;break e;case Ye:y=9;break e;case Et:y=11;break e;case Le:y=14;break e;case Je:y=16,u=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=Xt(y,a,i,d),i.elementType=r,i.type=u,i.lanes=h,i}function Br(r,i,a,u){return r=Xt(7,r,u,i),r.lanes=a,r}function ba(r,i,a,u){return r=Xt(22,r,u,i),r.elementType=Oe,r.lanes=a,r.stateNode={isHidden:!1},r}function Ac(r,i,a){return r=Xt(6,r,null,i),r.lanes=a,r}function Oc(r,i,a){return i=Xt(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function ix(r,i,a,u,d){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ou(0),this.expirationTimes=ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ou(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Dc(r,i,a,u,d,h,y,w,E){return r=new ix(r,i,a,w,E),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Xt(3,null,null,i),r.current=h,h.stateNode=r,h.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qu(h),r}function sx(r,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ne,key:u==null?null:""+u,children:r,containerInfo:i,implementation:a}}function bm(r){if(!r)return er;r=r._reactInternals;e:{if(Tr(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ot(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Ot(a))return rp(r,a,i)}return i}function Rm(r,i,a,u,d,h,y,w,E){return r=Dc(a,u,!0,r,d,h,y,w,E),r.context=bm(null),a=r.current,u=Ct(),d=ar(a),h=An(u,d),h.callback=i??null,rr(a,h,d),r.current.lanes=d,ss(r,d,u),Lt(r,u),r}function Ra(r,i,a,u){var d=i.current,h=Ct(),y=ar(d);return a=bm(a),i.context===null?i.context=a:i.pendingContext=a,i=An(h,y),i.payload={element:r},u=u===void 0?null:u,u!==null&&(i.callback=u),r=rr(d,i,y),r!==null&&(ln(r,d,y,h),aa(r,d,y)),y}function Pa(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Pm(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function jc(r,i){Pm(r,i),(r=r.alternate)&&Pm(r,i)}function ox(){return null}var Am=typeof reportError=="function"?reportError:function(r){console.error(r)};function Lc(r){this._internalRoot=r}Aa.prototype.render=Lc.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));Ra(r,i,null,null)},Aa.prototype.unmount=Lc.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Mr(function(){Ra(null,r,null,null)}),i[In]=null}};function Aa(r){this._internalRoot=r}Aa.prototype.unstable_scheduleHydration=function(r){if(r){var i=mf();r={blockedOn:null,target:r,priority:i};for(var a=0;a<Yn.length&&i!==0&&i<Yn[a].priority;a++);Yn.splice(a,0,r),a===0&&vf(r)}};function Mc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Oa(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Om(){}function ax(r,i,a,u,d){if(d){if(typeof u=="function"){var h=u;u=function(){var T=Pa(y);h.call(T)}}var y=Rm(i,u,r,0,null,!1,!1,"",Om);return r._reactRootContainer=y,r[In]=y.current,_s(r.nodeType===8?r.parentNode:r),Mr(),y}for(;d=r.lastChild;)r.removeChild(d);if(typeof u=="function"){var w=u;u=function(){var T=Pa(E);w.call(T)}}var E=Dc(r,0,!1,null,null,!1,!1,"",Om);return r._reactRootContainer=E,r[In]=E.current,_s(r.nodeType===8?r.parentNode:r),Mr(function(){Ra(i,E,a,u)}),E}function Da(r,i,a,u,d){var h=a._reactRootContainer;if(h){var y=h;if(typeof d=="function"){var w=d;d=function(){var E=Pa(y);w.call(E)}}Ra(i,y,r,d)}else y=ax(a,i,r,d,u);return Pa(y)}ff=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=is(i.pendingLanes);a!==0&&(au(i,a|1),Lt(i,qe()),(we&6)===0&&(Ni=qe()+500,tr()))}break;case 13:Mr(function(){var u=Pn(r,1);if(u!==null){var d=Ct();ln(u,r,1,d)}}),jc(r,1)}},lu=function(r){if(r.tag===13){var i=Pn(r,134217728);if(i!==null){var a=Ct();ln(i,r,134217728,a)}jc(r,134217728)}},pf=function(r){if(r.tag===13){var i=ar(r),a=Pn(r,i);if(a!==null){var u=Ct();ln(a,r,i,u)}jc(r,i)}},mf=function(){return Ce},gf=function(r,i){var a=Ce;try{return Ce=r,i()}finally{Ce=a}},eu=function(r,i,a){switch(i){case"input":if(Ir(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==r&&u.form===r.form){var d=Xo(u);if(!d)throw Error(t(90));z(u),Ir(u,d)}}}break;case"textarea":Vh(r,a);break;case"select":i=a.value,i!=null&&it(r,!!a.multiple,i,!1)}},Zh=Tc,ef=Mr;var lx={usingClientEntryPoint:!1,Events:[Es,fi,Xo,Xh,Jh,Tc]},Ls={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ux={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:V.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=sf(r),r===null?null:r.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{Ao=ja.inject(ux),pn=ja}catch{}}return Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx,Mt.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mc(i))throw Error(t(200));return sx(r,i,null,a)},Mt.createRoot=function(r,i){if(!Mc(r))throw Error(t(299));var a=!1,u="",d=Am;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Dc(r,1,!1,null,null,a,!1,u,d),r[In]=i.current,_s(r.nodeType===8?r.parentNode:r),new Lc(i)},Mt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=sf(i),r=r===null?null:r.stateNode,r},Mt.flushSync=function(r){return Mr(r)},Mt.hydrate=function(r,i,a){if(!Oa(i))throw Error(t(200));return Da(null,r,i,!0,a)},Mt.hydrateRoot=function(r,i,a){if(!Mc(r))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,h="",y=Am;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(y=a.onRecoverableError)),i=Rm(i,null,r,1,a??null,d,!1,h,y),r[In]=i.current,_s(r),u)for(r=0;r<u.length;r++)a=u[r],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Aa(i)},Mt.render=function(r,i,a){if(!Oa(i))throw Error(t(200));return Da(null,r,i,!1,a)},Mt.unmountComponentAtNode=function(r){if(!Oa(r))throw Error(t(40));return r._reactRootContainer?(Mr(function(){Da(null,null,r,!1,function(){r._reactRootContainer=null,r[In]=null})}),!0):!1},Mt.unstable_batchedUpdates=Tc,Mt.unstable_renderSubtreeIntoContainer=function(r,i,a,u){if(!Oa(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Da(r,i,a,!1,u)},Mt.version="18.3.1-next-f1338f8080-20240426",Mt}var zm;function yx(){if(zm)return Bc.exports;zm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Bc.exports=gx(),Bc.exports}var Wm;function vx(){if(Wm)return La;Wm=1;var n=yx();return La.createRoot=n.createRoot,La.hydrateRoot=n.hydrateRoot,La}var _x=vx(),I=jd();/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hm="popstate";function wx(n={}){function e(s,o){let{pathname:l,search:c,hash:f}=s.location;return ud("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:no(o)}return Ex(e,t,null,n)}function Be(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function kn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xx(){return Math.random().toString(36).substring(2,10)}function Vm(n,e){return{usr:n.state,key:n.key,idx:e}}function ud(n,e,t=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Vi(e):e,state:t,key:e&&e.key||s||xx()}}function no({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Vi(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function Ex(n,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,f="POP",m=null,g=_();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function _(){return(c.state||{idx:null}).idx}function v(){f="POP";let P=_(),G=P==null?null:P-g;g=P,m&&m({action:f,location:O.location,delta:G})}function x(P,G){f="PUSH";let K=ud(O.location,P,G);g=_()+1;let B=Vm(K,g),V=O.createHref(K);try{c.pushState(B,"",V)}catch(te){if(te instanceof DOMException&&te.name==="DataCloneError")throw te;o.location.assign(V)}l&&m&&m({action:f,location:O.location,delta:1})}function b(P,G){f="REPLACE";let K=ud(O.location,P,G);g=_();let B=Vm(K,g),V=O.createHref(K);c.replaceState(B,"",V),l&&m&&m({action:f,location:O.location,delta:0})}function A(P){return kx(P)}let O={get action(){return f},get location(){return n(o,c)},listen(P){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Hm,v),m=P,()=>{o.removeEventListener(Hm,v),m=null}},createHref(P){return e(o,P)},createURL:A,encodeLocation(P){let G=A(P);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:x,replace:b,go(P){return c.go(P)}};return O}function kx(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),Be(t,"No window.location.(origin|href) available to create URL");let s=typeof n=="string"?n:no(n);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function my(n,e,t="/"){return Sx(n,e,t,!1)}function Sx(n,e,t,s){let o=typeof e=="string"?Vi(e):e,l=Wn(o.pathname||"/",t);if(l==null)return null;let c=gy(n);Cx(c);let f=null;for(let m=0;f==null&&m<c.length;++m){let g=Lx(l);f=Dx(c[m],g,s)}return f}function gy(n,e=[],t=[],s="",o=!1){let l=(c,f,m=o,g)=>{let _={relativePath:g===void 0?c.path||"":g,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&m)return;Be(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let v=Bn([s,_.relativePath]),x=t.concat(_);c.children&&c.children.length>0&&(Be(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),gy(c.children,e,x,v,m)),!(c.path==null&&!c.index)&&e.push({path:v,score:Ax(v,c.index),routesMeta:x})};return n.forEach((c,f)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))l(c,f);else for(let g of yy(c.path))l(c,f,!0,g)}),e}function yy(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=yy(s.join("/")),f=[];return f.push(...c.map(m=>m===""?l:[l,m].join("/"))),o&&f.push(...c),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function Cx(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Ox(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Nx=/^:[\w-]+$/,Ix=3,Tx=2,bx=1,Rx=10,Px=-2,$m=n=>n==="*";function Ax(n,e){let t=n.split("/"),s=t.length;return t.some($m)&&(s+=Px),e&&(s+=Tx),t.filter(o=>!$m(o)).reduce((o,l)=>o+(Nx.test(l)?Ix:l===""?bx:Rx),s)}function Ox(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function Dx(n,e,t=!1){let{routesMeta:s}=n,o={},l="/",c=[];for(let f=0;f<s.length;++f){let m=s[f],g=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",v=nl({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},_),x=m.route;if(!v&&g&&t&&!s[s.length-1].route.index&&(v=nl({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!v)return null;Object.assign(o,v.params),c.push({params:o,pathname:Bn([l,v.pathname]),pathnameBase:Bx(Bn([l,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(l=Bn([l,v.pathnameBase]))}return c}function nl(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=jx(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((g,{paramName:_,isOptional:v},x)=>{if(_==="*"){let A=f[x]||"";c=l.slice(0,l.length-A.length).replace(/(.)\/+$/,"$1")}const b=f[x];return v&&!b?g[_]=void 0:g[_]=(b||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function jx(n,e=!1,t=!0){kn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,m)=>(s.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Lx(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return kn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Wn(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}var Mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Ux(n,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?Vi(n):n,l;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?l=Gm(t.substring(1),"/"):l=Gm(t,e)):l=e,{pathname:l,search:zx(s),hash:Wx(o)}}function Gm(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Hc(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Fx(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function vy(n){let e=Fx(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function _y(n,e,t,s=!1){let o;typeof n=="string"?o=Vi(n):(o={...n},Be(!o.pathname||!o.pathname.includes("?"),Hc("?","pathname","search",o)),Be(!o.pathname||!o.pathname.includes("#"),Hc("#","pathname","hash",o)),Be(!o.search||!o.search.includes("#"),Hc("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,f;if(c==null)f=t;else{let v=e.length-1;if(!s&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}f=v>=0?e[v]:"/"}let m=Ux(o,f),g=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||_)&&(m.pathname+="/"),m}var Bn=n=>n.join("/").replace(/\/\/+/g,"/"),Bx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),zx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Wx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,Hx=class{constructor(n,e,t,s=!1){this.status=n,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Vx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function $x(n){return n.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var wy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xy(n,e){let t=n;if(typeof t!="string"||!Mx.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(wy)try{let l=new URL(window.location.href),c=t.startsWith("//")?new URL(l.protocol+t):new URL(t),f=Wn(c.pathname,e);c.origin===l.origin&&f!=null?t=f+c.search+c.hash:o=!0}catch{kn(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ey=["POST","PUT","PATCH","DELETE"];new Set(Ey);var Gx=["GET",...Ey];new Set(Gx);var $i=I.createContext(null);$i.displayName="DataRouter";var Nl=I.createContext(null);Nl.displayName="DataRouterState";var qx=I.createContext(!1),ky=I.createContext({isTransitioning:!1});ky.displayName="ViewTransition";var Kx=I.createContext(new Map);Kx.displayName="Fetchers";var Yx=I.createContext(null);Yx.displayName="Await";var Zt=I.createContext(null);Zt.displayName="Navigation";var mo=I.createContext(null);mo.displayName="Location";var Sn=I.createContext({outlet:null,matches:[],isDataRoute:!1});Sn.displayName="Route";var Ld=I.createContext(null);Ld.displayName="RouteError";var Sy="REACT_ROUTER_ERROR",Qx="REDIRECT",Xx="ROUTE_ERROR_RESPONSE";function Jx(n){if(n.startsWith(`${Sy}:${Qx}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Zx(n){if(n.startsWith(`${Sy}:${Xx}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new Hx(e.status,e.statusText,e.data)}catch{}}function eE(n,{relative:e}={}){Be(go(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=I.useContext(Zt),{hash:o,pathname:l,search:c}=yo(n,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Bn([t,l])),s.createHref({pathname:f,search:c,hash:o})}function go(){return I.useContext(mo)!=null}function Zr(){return Be(go(),"useLocation() may be used only in the context of a <Router> component."),I.useContext(mo).location}var Cy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ny(n){I.useContext(Zt).static||I.useLayoutEffect(n)}function tE(){let{isDataRoute:n}=I.useContext(Sn);return n?pE():nE()}function nE(){Be(go(),"useNavigate() may be used only in the context of a <Router> component.");let n=I.useContext($i),{basename:e,navigator:t}=I.useContext(Zt),{matches:s}=I.useContext(Sn),{pathname:o}=Zr(),l=JSON.stringify(vy(s)),c=I.useRef(!1);return Ny(()=>{c.current=!0}),I.useCallback((m,g={})=>{if(kn(c.current,Cy),!c.current)return;if(typeof m=="number"){t.go(m);return}let _=_y(m,JSON.parse(l),o,g.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Bn([e,_.pathname])),(g.replace?t.replace:t.push)(_,g.state,g)},[e,t,l,o,n])}I.createContext(null);function Il(){let{matches:n}=I.useContext(Sn),e=n[n.length-1];return e?e.params:{}}function yo(n,{relative:e}={}){let{matches:t}=I.useContext(Sn),{pathname:s}=Zr(),o=JSON.stringify(vy(t));return I.useMemo(()=>_y(n,JSON.parse(o),s,e==="path"),[n,o,s,e])}function rE(n,e){return Iy(n,e)}function Iy(n,e,t,s,o){var K;Be(go(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=I.useContext(Zt),{matches:c}=I.useContext(Sn),f=c[c.length-1],m=f?f.params:{},g=f?f.pathname:"/",_=f?f.pathnameBase:"/",v=f&&f.route;{let B=v&&v.path||"";by(g,!v||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let x=Zr(),b;if(e){let B=typeof e=="string"?Vi(e):e;Be(_==="/"||((K=B.pathname)==null?void 0:K.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${B.pathname}" was given in the \`location\` prop.`),b=B}else b=x;let A=b.pathname||"/",O=A;if(_!=="/"){let B=_.replace(/^\//,"").split("/");O="/"+A.replace(/^\//,"").split("/").slice(B.length).join("/")}let P=my(n,{pathname:O});kn(v||P!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),kn(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=lE(P&&P.map(B=>Object.assign({},B,{params:Object.assign({},m,B.params),pathname:Bn([_,l.encodeLocation?l.encodeLocation(B.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?_:Bn([_,l.encodeLocation?l.encodeLocation(B.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),c,t,s,o);return e&&G?I.createElement(mo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},G):G}function iE(){let n=fE(),e=Vx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=I.createElement(I.Fragment,null,I.createElement("p",null,"💿 Hey developer 👋"),I.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",I.createElement("code",{style:l},"ErrorBoundary")," or"," ",I.createElement("code",{style:l},"errorElement")," prop on your route.")),I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),t?I.createElement("pre",{style:o},t):null,c)}var sE=I.createElement(iE,null),Ty=class extends I.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=Zx(n.digest);t&&(n=t)}let e=n!==void 0?I.createElement(Sn.Provider,{value:this.props.routeContext},I.createElement(Ld.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?I.createElement(oE,{error:n},e):e}};Ty.contextType=qx;var Vc=new WeakMap;function oE({children:n,error:e}){let{basename:t}=I.useContext(Zt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Jx(e.digest);if(s){let o=Vc.get(e);if(o)throw o;let l=xy(s.location,t);if(wy&&!Vc.get(e))if(l.isExternal||s.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw Vc.set(e,c),c}return I.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return n}function aE({routeContext:n,match:e,children:t}){let s=I.useContext($i);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),I.createElement(Sn.Provider,{value:n},t)}function lE(n,e=[],t=null,s=null,o=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,c=t==null?void 0:t.errors;if(c!=null){let _=l.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);Be(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let f=!1,m=-1;if(t)for(let _=0;_<l.length;_++){let v=l[_];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=_),v.route.id){let{loaderData:x,errors:b}=t,A=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!b||b[v.route.id]===void 0);if(v.route.lazy||A){f=!0,m>=0?l=l.slice(0,m+1):l=[l[0]];break}}}let g=t&&s?(_,v)=>{var x,b;s(_,{location:t.location,params:((b=(x=t.matches)==null?void 0:x[0])==null?void 0:b.params)??{},unstable_pattern:$x(t.matches),errorInfo:v})}:void 0;return l.reduceRight((_,v,x)=>{let b,A=!1,O=null,P=null;t&&(b=c&&v.route.id?c[v.route.id]:void 0,O=v.route.errorElement||sE,f&&(m<0&&x===0?(by("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,P=null):m===x&&(A=!0,P=v.route.hydrateFallbackElement||null)));let G=e.concat(l.slice(0,x+1)),K=()=>{let B;return b?B=O:A?B=P:v.route.Component?B=I.createElement(v.route.Component,null):v.route.element?B=v.route.element:B=_,I.createElement(aE,{match:v,routeContext:{outlet:_,matches:G,isDataRoute:t!=null},children:B})};return t&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?I.createElement(Ty,{location:t.location,revalidation:t.revalidation,component:O,error:b,children:K(),routeContext:{outlet:null,matches:G,isDataRoute:!0},onError:g}):K()},null)}function Md(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uE(n){let e=I.useContext($i);return Be(e,Md(n)),e}function cE(n){let e=I.useContext(Nl);return Be(e,Md(n)),e}function dE(n){let e=I.useContext(Sn);return Be(e,Md(n)),e}function Ud(n){let e=dE(n),t=e.matches[e.matches.length-1];return Be(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function hE(){return Ud("useRouteId")}function fE(){var s;let n=I.useContext(Ld),e=cE("useRouteError"),t=Ud("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function pE(){let{router:n}=uE("useNavigate"),e=Ud("useNavigate"),t=I.useRef(!1);return Ny(()=>{t.current=!0}),I.useCallback(async(o,l={})=>{kn(t.current,Cy),t.current&&(typeof o=="number"?await n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var qm={};function by(n,e,t){!e&&!qm[n]&&(qm[n]=!0,kn(!1,t))}I.memo(mE);function mE({routes:n,future:e,state:t,onError:s}){return Iy(n,void 0,t,s,e)}function It(n){Be(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gE({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,unstable_useTransitions:c}){Be(!go(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),m=I.useMemo(()=>({basename:f,navigator:o,static:l,unstable_useTransitions:c,future:{}}),[f,o,l,c]);typeof t=="string"&&(t=Vi(t));let{pathname:g="/",search:_="",hash:v="",state:x=null,key:b="default"}=t,A=I.useMemo(()=>{let O=Wn(g,f);return O==null?null:{location:{pathname:O,search:_,hash:v,state:x,key:b},navigationType:s}},[f,g,_,v,x,b,s]);return kn(A!=null,`<Router basename="${f}"> is not able to match the URL "${g}${_}${v}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:I.createElement(Zt.Provider,{value:m},I.createElement(mo.Provider,{children:e,value:A}))}function yE({children:n,location:e}){return rE(cd(n),e)}function cd(n,e=[]){let t=[];return I.Children.forEach(n,(s,o)=>{if(!I.isValidElement(s))return;let l=[...e,o];if(s.type===I.Fragment){t.push.apply(t,cd(s.props.children,l));return}Be(s.type===It,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Be(!s.props.index||!s.props.children,"An index route cannot have child routes.");let c={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(c.children=cd(s.props.children,l)),t.push(c)}),t}var Ya="get",Qa="application/x-www-form-urlencoded";function Tl(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function vE(n){return Tl(n)&&n.tagName.toLowerCase()==="button"}function _E(n){return Tl(n)&&n.tagName.toLowerCase()==="form"}function wE(n){return Tl(n)&&n.tagName.toLowerCase()==="input"}function xE(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function EE(n,e){return n.button===0&&(!e||e==="_self")&&!xE(n)}var Ma=null;function kE(){if(Ma===null)try{new FormData(document.createElement("form"),0),Ma=!1}catch{Ma=!0}return Ma}var SE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function $c(n){return n!=null&&!SE.has(n)?(kn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qa}"`),null):n}function CE(n,e){let t,s,o,l,c;if(_E(n)){let f=n.getAttribute("action");s=f?Wn(f,e):null,t=n.getAttribute("method")||Ya,o=$c(n.getAttribute("enctype"))||Qa,l=new FormData(n)}else if(vE(n)||wE(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||f.getAttribute("action");if(s=m?Wn(m,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||Ya,o=$c(n.getAttribute("formenctype"))||$c(f.getAttribute("enctype"))||Qa,l=new FormData(f,n),!kE()){let{name:g,type:_,value:v}=n;if(_==="image"){let x=g?`${g}.`:"";l.append(`${x}x`,"0"),l.append(`${x}y`,"0")}else g&&l.append(g,v)}}else{if(Tl(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ya,s=null,o=Qa,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fd(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function NE(n,e,t,s){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&Wn(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${s}`,o}async function IE(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function TE(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function bE(n,e,t){let s=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await IE(l,t);return c.links?c.links():[]}return[]}));return OE(s.flat(1).filter(TE).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Km(n,e,t,s,o,l){let c=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,f=(m,g)=>{var _;return t[g].pathname!==m.pathname||((_=t[g].route.path)==null?void 0:_.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,g)=>c(m,g)||f(m,g)):l==="data"?e.filter((m,g)=>{var v;let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(c(m,g)||f(m,g))return!0;if(m.route.shouldRevalidate){let x=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=t[0])==null?void 0:v.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function RE(n,e,{includeHydrateFallback:t}={}){return PE(n.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function PE(n){return[...new Set(n)]}function AE(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function OE(n,e){let t=new Set;return new Set(e),n.reduce((s,o)=>{let l=JSON.stringify(AE(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function Ry(){let n=I.useContext($i);return Fd(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function DE(){let n=I.useContext(Nl);return Fd(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Bd=I.createContext(void 0);Bd.displayName="FrameworkContext";function Py(){let n=I.useContext(Bd);return Fd(n,"You must render this element inside a <HydratedRouter> element"),n}function jE(n,e){let t=I.useContext(Bd),[s,o]=I.useState(!1),[l,c]=I.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:g,onMouseLeave:_,onTouchStart:v}=e,x=I.useRef(null);I.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let O=G=>{G.forEach(K=>{c(K.isIntersecting)})},P=new IntersectionObserver(O,{threshold:.5});return x.current&&P.observe(x.current),()=>{P.disconnect()}}},[n]),I.useEffect(()=>{if(s){let O=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(O)}}},[s]);let b=()=>{o(!0)},A=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,x,{}]:[l,x,{onFocus:Us(f,b),onBlur:Us(m,A),onMouseEnter:Us(g,b),onMouseLeave:Us(_,A),onTouchStart:Us(v,b)}]:[!1,x,{}]}function Us(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function LE({page:n,...e}){let{router:t}=Ry(),s=I.useMemo(()=>my(t.routes,n,t.basename),[t.routes,n,t.basename]);return s?I.createElement(UE,{page:n,matches:s,...e}):null}function ME(n){let{manifest:e,routeModules:t}=Py(),[s,o]=I.useState([]);return I.useEffect(()=>{let l=!1;return bE(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),s}function UE({page:n,matches:e,...t}){let s=Zr(),{future:o,manifest:l,routeModules:c}=Py(),{basename:f}=Ry(),{loaderData:m,matches:g}=DE(),_=I.useMemo(()=>Km(n,e,g,l,s,"data"),[n,e,g,l,s]),v=I.useMemo(()=>Km(n,e,g,l,s,"assets"),[n,e,g,l,s]),x=I.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let O=new Set,P=!1;if(e.forEach(K=>{var V;let B=l.routes[K.route.id];!B||!B.hasLoader||(!_.some(te=>te.route.id===K.route.id)&&K.route.id in m&&((V=c[K.route.id])!=null&&V.shouldRevalidate)||B.hasClientLoader?P=!0:O.add(K.route.id))}),O.size===0)return[];let G=NE(n,f,o.unstable_trailingSlashAwareDataRequests,"data");return P&&O.size>0&&G.searchParams.set("_routes",e.filter(K=>O.has(K.route.id)).map(K=>K.route.id).join(",")),[G.pathname+G.search]},[f,o.unstable_trailingSlashAwareDataRequests,m,s,l,_,e,n,c]),b=I.useMemo(()=>RE(v,l),[v,l]),A=ME(v);return I.createElement(I.Fragment,null,x.map(O=>I.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...t})),b.map(O=>I.createElement("link",{key:O,rel:"modulepreload",href:O,...t})),A.map(({key:O,link:P})=>I.createElement("link",{key:O,nonce:t.nonce,...P,crossOrigin:P.crossOrigin??t.crossOrigin})))}function FE(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var BE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{BE&&(window.__reactRouterVersion="7.13.0")}catch{}function zE({basename:n,children:e,unstable_useTransitions:t,window:s}){let o=I.useRef();o.current==null&&(o.current=wx({window:s,v5Compat:!0}));let l=o.current,[c,f]=I.useState({action:l.action,location:l.location}),m=I.useCallback(g=>{t===!1?f(g):I.startTransition(()=>f(g))},[t]);return I.useLayoutEffect(()=>l.listen(m),[l,m]),I.createElement(gE,{basename:n,children:e,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:t})}var Ay=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,re=I.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:f,target:m,to:g,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:x,...b},A){let{basename:O,unstable_useTransitions:P}=I.useContext(Zt),G=typeof g=="string"&&Ay.test(g),K=xy(g,O);g=K.to;let B=eE(g,{relative:o}),[V,te,ne]=jE(s,b),ce=$E(g,{replace:c,state:f,target:m,preventScrollReset:_,relative:o,viewTransition:v,unstable_defaultShouldRevalidate:x,unstable_useTransitions:P});function de(he){e&&e(he),he.defaultPrevented||ce(he)}let Ne=I.createElement("a",{...b,...ne,href:K.absoluteURL||B,onClick:K.isExternal||l?e:de,ref:FE(A,te),target:m,"data-discover":!G&&t==="render"?"true":void 0});return V&&!G?I.createElement(I.Fragment,null,Ne,I.createElement(LE,{page:B})):Ne});re.displayName="Link";var WE=I.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:f,children:m,...g},_){let v=yo(c,{relative:g.relative}),x=Zr(),b=I.useContext(Nl),{navigator:A,basename:O}=I.useContext(Zt),P=b!=null&&QE(v)&&f===!0,G=A.encodeLocation?A.encodeLocation(v).pathname:v.pathname,K=x.pathname,B=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;t||(K=K.toLowerCase(),B=B?B.toLowerCase():null,G=G.toLowerCase()),B&&O&&(B=Wn(B,O)||B);const V=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let te=K===G||!o&&K.startsWith(G)&&K.charAt(V)==="/",ne=B!=null&&(B===G||!o&&B.startsWith(G)&&B.charAt(G.length)==="/"),ce={isActive:te,isPending:ne,isTransitioning:P},de=te?e:void 0,Ne;typeof s=="function"?Ne=s(ce):Ne=[s,te?"active":null,ne?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let he=typeof l=="function"?l(ce):l;return I.createElement(re,{...g,"aria-current":de,className:Ne,ref:_,style:he,to:c,viewTransition:f},typeof m=="function"?m(ce):m)});WE.displayName="NavLink";var HE=I.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=Ya,action:f,onSubmit:m,relative:g,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:x,...b},A)=>{let{unstable_useTransitions:O}=I.useContext(Zt),P=KE(),G=YE(f,{relative:g}),K=c.toLowerCase()==="get"?"get":"post",B=typeof f=="string"&&Ay.test(f),V=te=>{if(m&&m(te),te.defaultPrevented)return;te.preventDefault();let ne=te.nativeEvent.submitter,ce=(ne==null?void 0:ne.getAttribute("formmethod"))||c,de=()=>P(ne||te.currentTarget,{fetcherKey:e,method:ce,navigate:t,replace:o,state:l,relative:g,preventScrollReset:_,viewTransition:v,unstable_defaultShouldRevalidate:x});O&&t!==!1?I.startTransition(()=>de()):de()};return I.createElement("form",{ref:A,method:K,action:G,onSubmit:s?m:V,...b,"data-discover":!B&&n==="render"?"true":void 0})});HE.displayName="Form";function VE(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Oy(n){let e=I.useContext($i);return Be(e,VE(n)),e}function $E(n,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:f,unstable_useTransitions:m}={}){let g=tE(),_=Zr(),v=yo(n,{relative:l});return I.useCallback(x=>{if(EE(x,e)){x.preventDefault();let b=t!==void 0?t:no(_)===no(v),A=()=>g(n,{replace:b,state:s,preventScrollReset:o,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:f});m?I.startTransition(()=>A()):A()}},[_,g,v,t,s,e,n,o,l,c,f,m])}var GE=0,qE=()=>`__${String(++GE)}__`;function KE(){let{router:n}=Oy("useSubmit"),{basename:e}=I.useContext(Zt),t=hE(),s=n.fetch,o=n.navigate;return I.useCallback(async(l,c={})=>{let{action:f,method:m,encType:g,formData:_,body:v}=CE(l,e);if(c.navigate===!1){let x=c.fetcherKey||qE();await s(x,t,c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:v,formMethod:c.method||m,formEncType:c.encType||g,flushSync:c.flushSync})}else await o(c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:v,formMethod:c.method||m,formEncType:c.encType||g,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,o,e,t])}function YE(n,{relative:e}={}){let{basename:t}=I.useContext(Zt),s=I.useContext(Sn);Be(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...yo(n||".",{relative:e})},c=Zr();if(n==null){l.search=c.search;let f=new URLSearchParams(l.search),m=f.getAll("index");if(m.some(_=>_==="")){f.delete("index"),m.filter(v=>v).forEach(v=>f.append("index",v));let _=f.toString();l.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Bn([t,l.pathname])),no(l)}function QE(n,{relative:e}={}){let t=I.useContext(ky);Be(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Oy("useViewTransitionState"),o=yo(n,{relative:e});if(!t.isTransitioning)return!1;let l=Wn(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=Wn(t.nextLocation.pathname,s)||t.nextLocation.pathname;return nl(o.pathname,c)!=null||nl(o.pathname,l)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),JE=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),Ym=n=>{const e=JE(n);return e.charAt(0).toUpperCase()+e.slice(1)},Dy=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=I.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:c,...f},m)=>I.createElement("svg",{ref:m,...ZE,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:Dy("lucide",o),...f},[...c.map(([g,_])=>I.createElement(g,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=(n,e)=>{const t=I.forwardRef(({className:s,...o},l)=>I.createElement(ek,{ref:l,iconNode:e,className:Dy(`lucide-${XE(Ym(n))}`,`lucide-${n}`,s),...o}));return t.displayName=Ym(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],nk=Xe("arrow-right",tk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ik=Xe("award",rk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]],ok=Xe("bus",sk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],lk=Xe("calendar",ak);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ck=Xe("globe",uk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],hk=Xe("heart",dk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]],pk=Xe("hotel",fk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],jy=Xe("instagram",mk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],yk=Xe("mail",gk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Ly=Xe("map-pin",vk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Qm=Xe("map",_k);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],xk=Xe("menu",wk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]],kk=Xe("plane",Ek);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ck=Xe("shield",Sk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]],Ik=Xe("stamp",Nk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],bk=Xe("star",Tk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],Pk=Xe("ticket",Rk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Ok=Xe("user",Ak);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],My=Xe("users",Dk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Lk=Xe("x",jk),Mk="/logo.png";function Uk(){const[n,e]=I.useState(!1),t=()=>e(!1);return p.jsx("nav",{className:"fixed top-0 left-0 right-0 bg-white shadow-md z-50",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"flex justify-between items-center h-16",children:[p.jsxs(re,{to:"/",className:"flex items-center gap-2",children:[p.jsx("img",{src:Mk,alt:"Travel & Thrills logo",className:"h-9 md:h-10 w-auto max-w-[130px] md:max-w-[170px] object-contain"}),p.jsx("span",{className:"font-bold text-xl text-gray-900",children:"Travel & Thrills"})]}),p.jsxs("div",{className:"hidden md:flex items-center gap-6",children:[p.jsx(re,{to:"/",className:"text-gray-700 hover:text-blue-600 transition",children:"Home"}),p.jsx(re,{to:"/about",className:"text-gray-700 hover:text-blue-600 transition",children:"About"}),p.jsx(re,{to:"/services",className:"text-gray-700 hover:text-blue-600 transition",children:"Services"}),p.jsx(re,{to:"/destinations",className:"text-gray-700 hover:text-blue-600 transition",children:"Destinations"}),p.jsx(re,{to:"/packages",className:"text-gray-700 hover:text-blue-600 transition",children:"Packages"}),p.jsx(re,{to:"/testimonials",className:"text-gray-700 hover:text-blue-600 transition",children:"Reviews"}),p.jsx(re,{to:"/blogs",className:"text-gray-700 hover:text-blue-600 transition",children:"Blogs"}),p.jsx(re,{to:"/contact",className:"text-gray-700 hover:text-blue-600 transition",children:"Contact"})]}),p.jsx("div",{className:"md:hidden",children:p.jsx("button",{onClick:()=>e(!n),className:"text-gray-700",children:n?p.jsx(Lk,{className:"w-6 h-6"}):p.jsx(xk,{className:"w-6 h-6"})})})]}),n&&p.jsx("div",{className:"md:hidden pb-4",children:p.jsxs("div",{className:"flex flex-col gap-3",children:[p.jsx(re,{to:"/",onClick:t,className:"text-gray-700 hover:text-blue-600 transition text-left",children:"Home"}),p.jsx(re,{to:"/about",onClick:t,className:"text-gray-700 hover:text-blue-600 transition text-left",children:"About"}),p.jsx(re,{to:"/services",onClick:t,className:"text-gray-700 hover:text-blue-600 transition text-left",children:"Services"}),p.jsx(re,{to:"/destinations",onClick:t,className:"text-gray-700 hover:text-blue-600 transition text-left",children:"Destinations"}),p.jsx(re,{to:"/packages",onClick:t,className:"text-gray-700 hover:text-blue-600 transition text-left",children:"Packages"}),p.jsx(re,{to:"/testimonials",onClick:t,className:"text-gray-700 hover:text-blue-600 transition text-left",children:"Reviews"}),p.jsx(re,{to:"/blogs",onClick:t,className:"text-gray-700 hover:text-blue-600 transition text-left",children:"Blogs"}),p.jsx(re,{to:"/contact",onClick:t,className:"text-gray-700 hover:text-blue-600 transition text-left",children:"Contact"})]})})]})})}const Uy=[{slug:"tour-operators",title:"Tour Operators",description:"Expertly managed holiday planning across Darjeeling, Sikkim, Bhutan, and Nepal.",details:"Our team designs complete itineraries with hotel suggestions, local transport coordination, and sightseeing planning to make your trip smooth from arrival to departure.",image:"https://catalog.wlimg.com/service-images/ttw/tour-operators3.jpg"},{slug:"car-coach-rental",title:"Car & Coach Rental",description:"Comfortable and reliable transport options for local and long-route travel.",details:"We provide suitable vehicle options for families, couples, and groups with route planning support across hill and plain circuits.",image:"https://catalog.wlimg.com/service-images/ttw/car-coach-rental2.jpg"},{slug:"flight-booking",title:"Flight Booking",description:"Convenient domestic and international flight ticket assistance.",details:"Get help with itinerary-friendly flight options, fare selection, and coordinated travel timing with your land package.",image:"https://catalog.wlimg.com/service-images/ttw/flight-booking4.jpg"},{slug:"railway-ticket-booking",title:"Railway Ticket Booking",description:"Hassle-free rail ticket support to keep your journey smooth.",details:"We assist in planning rail connectivity for your holiday route and suggest practical arrival/departure options.",image:"https://catalog.wlimg.com/service-images/ttw/railway-ticket-booking3.jpg"},{slug:"passport-visa-services",title:"Passport & Visa Services",description:"Guidance and support for travel documentation and visa requirements.",details:"Our team shares checklist guidance and helps you prepare documents for international travel circuits like Bhutan and Nepal.",image:"https://catalog.wlimg.com/service-images/ttw/passport-visa-services2.jpg"},{slug:"travel-insurance-services",title:"Travel Insurance Services",description:"Travel protection plans for safer and stress-free vacations.",details:"Choose suitable coverage options based on your duration, destination, and activities for better trip security.",image:"https://catalog.wlimg.com/service-images/ttw/travel-insurance-services2.jpg"},{slug:"hotel-booking",title:"Hotel Booking",description:"Carefully selected stays including hotels, resorts, and guesthouses.",details:"We arrange stays across budgets with location convenience and itinerary fit for family, group, or couple tours.",image:"https://catalog.wlimg.com/service-images/ttw/hotel-booking3.jpg"}],Fy=[{slug:"sikkim-bliss-exploring-the-roof-of-the-world-4-n-5d",title:"Sikkim Bliss Exploring the Roof of the World 4 N - 5d",duration:"4 Nights / 5 Days",price:"₹10,450",people:"As per itinerary",highlights:["Destination Covered: Gangtok, Yumthang, Lachung","Tour Activities: Sightseeing","Tour Themes: Hill Stations & Valleys, Religious & Pilgrimage"],details:"Welcome to Bagdogra Airport. Representative assistance and vehicle pick-up. Drive to Gangtok, followed by North Sikkim and Yumthang circuit as per itinerary.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399050.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/sikkim-bliss-exploring-the-roofof-the-world4n5d.htm"},{slug:"sikkim-bliss-exploring-the-roof-of-the-world-5nights-6-days",title:"SIKKIM BLISS: EXPLORING THE ROOF OF THE WORLD 5NIGHTS - 6 DAYS",duration:"5 Nights / 6 Days",price:"₹15,675",people:"As per itinerary",highlights:["Destination Covered: Gangtok, Yumthang, Lachung","Tour Activities: Sightseeing","Tour Themes: Hill Stations & Valleys"],details:"Extended Sikkim package with Gangtok and North Sikkim route for travelers who want additional days in the hills.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399074.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/sikkim-bliss-exploring-the-roofof-the-world-5nights6-days.htm"},{slug:"nepal-tour-5n-6d",title:"Nepal Tour- 5N 6D",duration:"5 Nights / 6 Days",price:"₹19,500",people:"As per itinerary",highlights:["Destination Covered: Kathmandu, Pokhara","Tour Activities: Sightseeing","Tour Themes: Hill Stations & Valleys, Religious & Pilgrimage"],details:"As per train schedule arrival in Gorakhpur, transport assistance is provided and the itinerary proceeds to Kathmandu and Pokhara sightseeing.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399649.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/nepal-package-from-gorakhpur.htm"},{slug:"sikkim-bliss-exploring-the-roof-of-the-world-tour",title:"Sikkim Bliss Exploring the roof of the world tour",duration:"6 Nights / 7 Days",price:"On Request",people:"As per itinerary",highlights:["Destination Covered: Gangtok, Pelling, Yumthang, Lachung, Pemayangtse Monastery","Tour Activities: Camping, Sightseeing","Tour Themes: Wildlife, Hill Stations & Valleys"],details:"Complete Sikkim circuit package with mountain sightseeing and multi-stop stay plan.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399650.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/6-night-7-days-sikkim-package.htm"},{slug:"bhutan-mystique-gateway-to-happines-4-nights-5-days-tour",title:"Bhutan Mystique Gateway to Happines 4 Nights 5 Days Tour",duration:"5 Days / 4 Nights",price:"On Request",people:"As per itinerary",highlights:["Destination Covered: Thimphu","Tour Activities: Sightseeing","Tour Themes: Hill Stations & Valleys"],details:"Bhutan itinerary route designed for mountain and cultural sightseeing.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399754.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/4-nights-5-days-bhutan-tour.htm"},{slug:"5-nights-6-days-tours-to-guwahati-to-meghalaya",title:"5 Nights - 6 Days Tours To Guwahati To Meghalaya",duration:"5 Nights / 6 Days",price:"On Request",people:"As per itinerary",highlights:["Destination Covered: Shillong, Cherrapunji, Dawki, Mawsmai Falls, Elephant Falls","Tour Activities: Trekking, Sightseeing","Tour Themes: Hill Stations & Valleys, Religious & Pilgrimage"],details:"Meghalaya route featuring Shillong, Cherrapunji, and Dawki sightseeing.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400033.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/5-nights6-days-toursto-guwahatito-meghalaya.htm"},{slug:"amazing-north-east-india-06-nights-07-days",title:"Amazing North East India 06 Nights - 07 Days",duration:"6 Nights / 7 Days",price:"On Request",people:"As per itinerary",highlights:["Destination Covered: Gangtok, Darjeeling, Kalimpong, Hanuman Tok, Ganesh Tok, Enchey Monastery","Tour Activities: Mountaineering, Sightseeing","Tour Themes: Hill Stations & Valleys"],details:"North East India package covering key Sikkim and Darjeeling circuits.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400034.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/amazing-north-east-india06-nights07-days.htm"},{slug:"5-nights-6-days-kashmir-to-kashmir-dal-lake-gulmarg-sonamarg-pahalgam-tour",title:"5 Nights 6 Days Kashmir To Kashmir - Dal Lake - Gulmarg - Sonamarg - Pahalgam Tour",duration:"5 Nights / 6 Days",price:"On Request",people:"As per itinerary",highlights:["Destination Covered: Srinagar, Pahalgam, Sonamarg, Gulmarg, Shankaracharya Temple, Dal Lake","Tour Activities: Mountaineering","Tour Themes: Hill Stations & Valleys"],details:"Kashmir circuit package with Srinagar, Gulmarg, Sonamarg, and Pahalgam sightseeing.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400035.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/5-nights6-days-kashmirto-kashmir-dal-lake-gulmarg-sonamarg-pahalgam.htm"},{slug:"2-nights-3-days-goa-tour-package",title:"2 Nights - 3 Days Goa Tour Package",duration:"2 Nights / 3 Days",price:"On Request",people:"As per itinerary",highlights:["Destination Covered: North Goa, South Goa","Tour Activities: Beaches Sightseeing","Tour Themes: Beaches and Islands"],details:"Short Goa package focused on North and South Goa sightseeing.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400036.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/2-nights3-days-goa-tour-package.htm"},{slug:"13-nights-14-days-everest-base-camp-trek-tour",title:"13 Nights 14 Days Everest Base Camp Trek Tour",duration:"13 Nights / 14 Days",price:"On Request",people:"As per itinerary",highlights:["Destination Covered: Kathmandu, Solukhumbu","Tour Activities: Trekking","Tour Themes: Adventure Tours, Hill Stations & Valleys"],details:"Long-duration Everest Base Camp trek itinerary via Kathmandu and Solukhumbu route.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400037.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/13-nights14-days-everest-base-camp-trek-tour.htm"},{slug:"kerala-4-night-5-days-package",title:"Kerala 4 Night 5 Days Package",duration:"4 Nights / 5 Days",price:"On Request",people:"As per itinerary",highlights:["Destination Covered: Thekkady, Alleppey, Munnar","Tour Activities: House Boat, Boating, Sightseeing","Tour Themes: Hill Stations & Valleys"],details:"Kerala route package with Munnar, Thekkady, and Alleppey experiences.",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400038.jpg",sourceUrl:"https://www.travelandthrillsholidays.co.in/holiday-packages/kerala4-night5-days-package.htm"}],Fk=[{name:"Arzldffbzq",date:"21 Feb 2024",rating:4,text:"I thank from the bottom of my heart to this company for helping us get the most amazing deal for my travel needs."},{name:"N/A",date:"02 Mar 2024",rating:5,text:"Interesting packages for different destinations and purposes, from budget to luxury clients."},{name:"Mike Ramacey",date:"09 Mar 2024",rating:4,text:"Glad I chose this agent for booking different travel packages. I recommend the company to friends and family."}],By=[{slug:"gangtok",name:"Gangtok",country:"India",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399050.jpg",description:"Capital of Sikkim with monasteries, viewpoints, and lively MG Marg evenings.",details:"Gangtok is one of the most popular gateways to Sikkim tours, known for scenic viewpoints, monasteries, and convenient access to North Sikkim circuits.",highlights:["MG Marg and local markets","Monastery visits","Common base for North Sikkim itineraries"]},{slug:"lachung",name:"Lachung",country:"India",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399074.jpg",description:"Scenic North Sikkim village and base for Yumthang and high-altitude excursions.",details:"Lachung serves as a key overnight stop for travelers exploring Yumthang Valley and nearby mountain attractions in North Sikkim.",highlights:["Mountain village experience","Yumthang access point","Waterfall routes nearby"]},{slug:"yumthang-valley",name:"Yumthang Valley",country:"India",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399650.jpg",description:"Known as the Valley of Flowers with alpine landscapes and river views.",details:"Yumthang Valley is one of the signature highlights of North Sikkim tours, offering seasonal blooms, dramatic mountain terrain, and cold valley rivers.",highlights:["Valley of Flowers landscape","High-altitude scenic drive","Popular with nature-focused travelers"]},{slug:"darjeeling",name:"Darjeeling",country:"India",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/400034.jpg",description:"Tea gardens, Tiger Hill sunrise, monasteries, and colonial mountain charm.",details:"Darjeeling remains a flagship hill destination with iconic sunrise points, tea estate views, and a blend of culture, heritage, and mountain leisure.",highlights:["Tiger Hill sunrise","Tea garden experiences","Local monasteries and market walks"]},{slug:"kathmandu",name:"Kathmandu",country:"Nepal",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399649.jpg",description:"Historic temples, heritage squares, and rich Nepali cultural experiences.",details:"Kathmandu features prominently in Nepal holiday circuits for its temples, architecture, and cultural landmarks, often paired with Pokhara.",highlights:["Heritage and temple circuits","Cultural city exploration","Connected Nepal package routing"]},{slug:"paro",name:"Paro",country:"Bhutan",image:"https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399754.jpg",description:"A serene Bhutanese valley town known for monasteries and mountain views.",details:"Paro is a key stop in Bhutan packages, offering scenic valleys, cultural sites, and a calm mountain atmosphere suited for leisure travel.",highlights:["Valley landscape and monasteries","Bhutan culture and heritage","Often combined with Thimphu"]}];function zy(){return p.jsx("section",{id:"packages",className:"py-16 px-4 bg-white",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h2",{className:"text-3xl md:text-4xl mb-4 text-gray-900",children:"Tour Packages"}),p.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Handpicked itineraries curated from our latest Darjeeling, Sikkim, and Bhutan offerings"})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:Fy.map((n,e)=>p.jsx("div",{className:"border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition",children:p.jsxs("div",{className:"p-6",children:[p.jsx("h3",{className:"text-xl mb-3 text-gray-900",children:n.title}),p.jsxs("div",{className:"flex items-center gap-4 mb-4 text-sm text-gray-600",children:[p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx(lk,{className:"w-4 h-4"}),p.jsx("span",{children:n.duration})]}),p.jsxs("div",{className:"flex items-center gap-1",children:[p.jsx(My,{className:"w-4 h-4"}),p.jsx("span",{children:n.people})]})]}),p.jsx("ul",{className:"mb-6 space-y-2",children:n.highlights.map((t,s)=>p.jsxs("li",{className:"text-sm text-gray-600 flex items-center gap-2",children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full"}),t]},s))}),p.jsxs("div",{className:"border-t pt-4 flex items-center justify-between",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-sm text-gray-500",children:"Starting from"}),p.jsx("p",{className:"text-2xl text-blue-600",children:n.price})]}),p.jsx(re,{to:`/packages/${n.slug}`,className:"bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition",children:"Book Now"})]})]})},e))})]})})}const Bk="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function bl(n){const[e,t]=I.useState(!1),s=_=>{n.onError&&n.onError(_),t(!0)},{src:o,alt:l,style:c,className:f,onError:m,...g}=n;return e?p.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${f??""}`,style:c,children:p.jsx("div",{className:"flex items-center justify-center w-full h-full",children:p.jsx("img",{src:Bk,alt:"Error loading image",...g,"data-original-url":o})})}):p.jsx("img",{src:o,alt:l,className:f,style:c,...g,onError:s})}function Wy(){return p.jsx("section",{id:"about",className:"py-16 px-4 bg-gray-50",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h2",{className:"text-3xl md:text-4xl mb-4 text-gray-900",children:"About Travel & Thrills Holidays"}),p.jsx("p",{className:"text-gray-600 max-w-3xl mx-auto",children:"Established in early 2024, Travel & Thrills is your trusted partner for unforgettable journeys. We specialize in curated tours across Darjeeling, Sikkim, Bhutan, and Nepal, with personalized plans for both groups and individual adventurers."})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12",children:[p.jsx(bl,{src:"https://catalog.wlimg.com/about-image/about-12.jpg",alt:"Travel & Thrills",className:"w-full h-72 object-cover rounded-lg"}),p.jsxs("div",{className:"text-gray-600 leading-7 space-y-3",children:[p.jsx("p",{children:"Travel & Thrills is a trusted organization in Darjeeling, West Bengal, that has the perfect solution for all your travel requirements. We are the best tourist and transport service provider in Darjeeling, West Bengal, and specialize in bespoke holiday packages."}),p.jsx("p",{children:"We strive to ensure our customers enjoy personalized service and superior quality in everything from our vehicles and tour management to hotel reservations and event management. We also offer flight booking, travel insurance, and passport & visa services."}),p.jsx("p",{children:"We ensure customer comfort and safety, prompt and professional service, and best value for our customers."})]})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:p.jsx(ik,{className:"w-8 h-8 text-white"})}),p.jsx("h3",{className:"text-xl mb-2 text-gray-900",children:"Established in 2024"}),p.jsx("p",{className:"text-gray-600",children:"A fast-growing local travel partner from Darjeeling"})]}),p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:p.jsx(My,{className:"w-8 h-8 text-white"})}),p.jsx("h3",{className:"text-xl mb-2 text-gray-900",children:"Group & Family Tours"}),p.jsx("p",{className:"text-gray-600",children:"Custom itineraries for groups, couples, and families"})]}),p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:p.jsx(ck,{className:"w-8 h-8 text-white"})}),p.jsx("h3",{className:"text-xl mb-2 text-gray-900",children:"Core Himalayan Circuits"}),p.jsx("p",{className:"text-gray-600",children:"Darjeeling, Sikkim, Bhutan, and Nepal specialists"})]}),p.jsxs("div",{className:"text-center",children:[p.jsx("div",{className:"bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:p.jsx(hk,{className:"w-8 h-8 text-white"})}),p.jsx("h3",{className:"text-xl mb-2 text-gray-900",children:"Personalized Planning"}),p.jsx("p",{className:"text-gray-600",children:"From stays to transport, every detail tailored for you"})]})]})]})})}function Hy(){const n={"tour-operators":Qm,"car-coach-rental":ok,"flight-booking":kk,"railway-ticket-booking":Pk,"passport-visa-services":Ik,"travel-insurance-services":Ck,"hotel-booking":pk};return p.jsx("section",{id:"services",className:"py-16 px-4 bg-white",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h2",{className:"text-3xl md:text-4xl mb-4 text-gray-900",children:"Our Services"}),p.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Comprehensive travel solutions to make your journey seamless and memorable"})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:Uy.map((e,t)=>{const s=n[e.slug]??Qm;return p.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg hover:shadow-lg transition",children:[p.jsx("img",{src:e.image,alt:e.title,className:"w-full h-40 object-cover rounded mb-4"}),p.jsx(s,{className:"w-12 h-12 text-blue-600 mb-4"}),p.jsx("h3",{className:"text-xl mb-2 text-gray-900",children:e.title}),p.jsx("p",{className:"text-gray-600",children:e.description}),p.jsx(re,{to:`/services/${e.slug}`,className:"inline-block mt-4 text-blue-600 hover:text-blue-700",children:"View More →"})]},t)})})]})})}const zk={name:"",email:"",country:"",state:"",city:"",phone:"",enquiry:""};function Vy(){const[n,e]=I.useState(zk),[t,s]=I.useState(!1),[o,l]=I.useState(""),c=(g,_)=>{e(v=>({...v,[g]:_}))},f=()=>{const g=encodeURIComponent(`New Enquiry from ${n.name}`),_=encodeURIComponent([`Name: ${n.name}`,`Email: ${n.email}`,`Country: ${n.country}`,`State: ${n.state}`,`City: ${n.city}`,`Phone: ${n.phone}`,"","Enquiry Details:",n.enquiry].join(`
`));window.location.href=`mailto:planmytraveltrek24@gmail.com?subject=${g}&body=${_}`},m=async g=>{g.preventDefault(),s(!0),l("");{f(),l("Your mail app has been opened. Please send the drafted enquiry email."),s(!1);return}};return p.jsx("section",{id:"contact",className:"py-16 px-4 bg-gray-50",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h2",{className:"text-3xl md:text-4xl mb-4 text-gray-900",children:"Get In Touch"}),p.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Connect with Travel & Thrills for customized package planning and booking support"})]}),p.jsx("div",{className:"max-w-4xl mx-auto",children:p.jsxs("div",{className:"space-y-8",children:[p.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[p.jsx("h3",{className:"text-2xl mb-5 text-gray-900",children:"Quick Enquiry"}),p.jsxs("form",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",onSubmit:m,children:[p.jsx("input",{type:"text",placeholder:"Your Name *",className:"px-4 py-3 border border-gray-300 rounded",value:n.name,onChange:g=>c("name",g.target.value),required:!0}),p.jsx("input",{type:"email",placeholder:"Email *",className:"px-4 py-3 border border-gray-300 rounded",value:n.email,onChange:g=>c("email",g.target.value),required:!0}),p.jsx("input",{type:"text",placeholder:"Select Country *",className:"px-4 py-3 border border-gray-300 rounded",value:n.country,onChange:g=>c("country",g.target.value),required:!0}),p.jsx("input",{type:"text",placeholder:"Select State *",className:"px-4 py-3 border border-gray-300 rounded",value:n.state,onChange:g=>c("state",g.target.value),required:!0}),p.jsx("input",{type:"text",placeholder:"City",className:"px-4 py-3 border border-gray-300 rounded",value:n.city,onChange:g=>c("city",g.target.value)}),p.jsx("input",{type:"tel",placeholder:"Phone / Mobile *",className:"px-4 py-3 border border-gray-300 rounded",value:n.phone,onChange:g=>c("phone",g.target.value),required:!0}),p.jsx("textarea",{placeholder:"Enquiry Details *",rows:4,className:"md:col-span-2 px-4 py-3 border border-gray-300 rounded",value:n.enquiry,onChange:g=>c("enquiry",g.target.value),required:!0}),p.jsx("button",{type:"submit",className:"md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded transition disabled:opacity-70",disabled:t,children:t?"Submitting...":"Submit Enquiry"}),o&&p.jsx("p",{className:"md:col-span-2 text-sm text-gray-600",children:o})]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-2xl mb-6 text-gray-900",children:"Contact Information"}),p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"flex items-start gap-4",children:[p.jsx("div",{className:"bg-blue-600 p-3 rounded-full",children:p.jsx(Ok,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{children:[p.jsx("h4",{className:"mb-1 text-gray-900",children:"Contact Person"}),p.jsx("p",{className:"text-gray-600",children:"Rupesh Tamang"})]})]}),p.jsxs("div",{className:"flex items-start gap-4",children:[p.jsx("div",{className:"bg-blue-600 p-3 rounded-full",children:p.jsx(yk,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{children:[p.jsx("h4",{className:"mb-1 text-gray-900",children:"Email"}),p.jsx("p",{className:"text-gray-600",children:"planmytraveltrek24@gmail.com"})]})]}),p.jsxs("div",{className:"flex items-start gap-4",children:[p.jsx("div",{className:"bg-blue-600 p-3 rounded-full",children:p.jsx(Ly,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{children:[p.jsx("h4",{className:"mb-1 text-gray-900",children:"Address"}),p.jsxs("p",{className:"text-gray-600",children:["6th Mile Bazar Darjeeling, Tukdah, Peshok Road,",p.jsx("br",{}),"Darjeeling, West Bengal, India - 734222"]})]})]}),p.jsxs("div",{className:"flex items-start gap-4",children:[p.jsx("div",{className:"bg-blue-600 p-3 rounded-full",children:p.jsx(jy,{className:"w-6 h-6 text-white"})}),p.jsxs("div",{children:[p.jsx("h4",{className:"mb-1 text-gray-900",children:"Instagram"}),p.jsx("a",{href:"https://www.instagram.com/tra.velnthrills",target:"_blank",rel:"noreferrer",className:"text-blue-600 hover:text-blue-700",children:"@tra.velnthrills"})]})]})]})]}),p.jsxs("div",{className:"bg-blue-50 p-6 rounded-lg",children:[p.jsx("h4",{className:"mb-2 text-gray-900",children:"Need Immediate Assistance?"}),p.jsx("p",{className:"text-gray-600",children:"Call Us: View Mobile Number (as listed on official website)"})]})]})})]})})}const Wk="/logo.png";function Hk(){return p.jsx("footer",{className:"bg-gray-900 text-white py-12 px-4",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",children:[p.jsxs("div",{children:[p.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[p.jsx("img",{src:Wk,alt:"Travel & Thrills logo",className:"h-9 w-auto max-w-[170px] object-contain"}),p.jsx("span",{className:"font-bold text-xl",children:"Travel & Thrills"})]}),p.jsx("p",{className:"text-gray-400 mb-4",children:"Trusted travel and transport partner in Darjeeling, specializing in bespoke Himalayan holidays."}),p.jsx("div",{className:"flex gap-4",children:p.jsx("a",{href:"https://www.instagram.com/tra.velnthrills",target:"_blank",rel:"noreferrer",className:"hover:text-blue-400 transition",children:p.jsx(jy,{className:"w-5 h-5"})})})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-lg mb-4",children:"Quick Links"}),p.jsxs("ul",{className:"space-y-2 text-gray-400",children:[p.jsx("li",{children:p.jsx(re,{to:"/about",className:"hover:text-white transition",children:"About Us"})}),p.jsx("li",{children:p.jsx(re,{to:"/services",className:"hover:text-white transition",children:"Our Services"})}),p.jsx("li",{children:p.jsx(re,{to:"/destinations",className:"hover:text-white transition",children:"Destinations"})}),p.jsx("li",{children:p.jsx(re,{to:"/packages",className:"hover:text-white transition",children:"Tour Packages"})}),p.jsx("li",{children:p.jsx(re,{to:"/testimonials",className:"hover:text-white transition",children:"Testimonials"})}),p.jsx("li",{children:p.jsx(re,{to:"/blogs",className:"hover:text-white transition",children:"Blogs"})}),p.jsx("li",{children:p.jsx(re,{to:"/contact",className:"hover:text-white transition",children:"Contact Us"})})]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-lg mb-4",children:"Popular Destinations"}),p.jsxs("ul",{className:"space-y-2 text-gray-400",children:[p.jsx("li",{children:p.jsx(re,{to:"/destinations/gangtok",className:"hover:text-white transition",children:"Gangtok"})}),p.jsx("li",{children:p.jsx(re,{to:"/destinations/lachung",className:"hover:text-white transition",children:"Lachung"})}),p.jsx("li",{children:p.jsx(re,{to:"/destinations/yumthang-valley",className:"hover:text-white transition",children:"Yumthang Valley"})}),p.jsx("li",{children:p.jsx(re,{to:"/destinations/darjeeling",className:"hover:text-white transition",children:"Darjeeling"})}),p.jsx("li",{children:p.jsx(re,{to:"/destinations/kathmandu",className:"hover:text-white transition",children:"Kathmandu"})})]})]}),p.jsxs("div",{children:[p.jsx("h3",{className:"text-lg mb-4",children:"Contact"}),p.jsxs("div",{className:"space-y-2 text-gray-400",children:[p.jsx("p",{children:"Rupesh Tamang"}),p.jsx("p",{children:"planmytraveltrek24@gmail.com"}),p.jsx("p",{children:"6th Mile Bazar, Tukdah, Peshok Road"}),p.jsx("p",{children:"Darjeeling, West Bengal - 734222"})]})]})]}),p.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:p.jsx("p",{children:"© 2024 Travel & Thrills Holidays. All rights reserved."})})]})})}function Vk(){const[n,e]=I.useState([]),[t,s]=I.useState(!1);return I.useEffect(()=>{},[]),{reviews:n,isLoading:t}}function $y(){const{reviews:n,isLoading:e}=Vk(),t=n.length>0?n:Fk;return p.jsx("section",{id:"testimonials",className:"py-16 px-4 bg-gray-50",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h2",{className:"text-3xl md:text-4xl mb-4 text-gray-900",children:"Client Reviews"}),p.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Real feedback from travelers who booked with Travel & Thrills"}),e&&p.jsx("p",{className:"text-sm text-gray-500 mt-3",children:"Loading latest Google reviews..."})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:t.map((s,o)=>p.jsxs("div",{className:"bg-white p-6 rounded-lg border border-gray-200",children:[p.jsx("div",{className:"flex items-center gap-1 mb-3",children:Array.from({length:s.rating}).map((l,c)=>p.jsx(bk,{className:"w-4 h-4 text-yellow-500 fill-yellow-500"},c))}),p.jsx("p",{className:"text-gray-600 mb-4",children:s.text}),p.jsx("p",{className:"text-gray-900",children:s.name}),p.jsx("p",{className:"text-sm text-gray-500",children:s.date})]},o))})]})})}var Xm={};/**
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
 */const Gy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(n,e){if(!n)throw Gi(e)},Gi=function(n){return new Error("Firebase Database ("+Gy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const qy=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},$k=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],f=n[t++],m=((o&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],c=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},zd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,f=c?n[o+1]:0,m=o+2<n.length,g=m?n[o+2]:0,_=l>>2,v=(l&3)<<4|f>>4;let x=(f&15)<<2|g>>6,b=g&63;m||(b=64,c||(x=64)),s.push(t[_],t[v],t[x],t[b])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qy(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$k(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const g=o<n.length?t[n.charAt(o)]:64;++o;const v=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||g==null||v==null)throw new Gk;const x=l<<2|f>>4;if(s.push(x),g!==64){const b=f<<4&240|g>>2;if(s.push(b),v!==64){const A=g<<6&192|v;s.push(A)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Gk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ky=function(n){const e=qy(n);return zd.encodeByteArray(e,!0)},rl=function(n){return Ky(n).replace(/\./g,"")},il=function(n){try{return zd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qk(n){return Yy(void 0,n)}function Yy(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Kk(t)||(n[t]=Yy(n[t],e[t]));return n}function Kk(n){return n!=="__proto__"}/**
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
 */function Yk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qk=()=>Yk().__FIREBASE_DEFAULTS__,Xk=()=>{if(typeof process>"u"||typeof Xm>"u")return;const n=Xm.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jk=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&il(n[1]);return e&&JSON.parse(e)},Wd=()=>{try{return Qk()||Xk()||Jk()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Qy=n=>{var e,t;return(t=(e=Wd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Xy=n=>{const e=Qy(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Jy=()=>{var n;return(n=Wd())===null||n===void 0?void 0:n.config},Zy=n=>{var e;return(e=Wd())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ev(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[rl(JSON.stringify(t)),rl(JSON.stringify(c)),""].join(".")}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function Zk(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eS(){const n=xt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tS(){return Gy.NODE_ADMIN===!0}function nS(){try{return typeof indexedDB=="object"}catch{return!1}}function rS(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const iS="FirebaseError";class $n extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=iS,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?sS(l,s):"Error",f=`${this.serviceName}: ${c} (${o}).`;return new $n(o,f,s)}}function sS(n,e){return n.replace(oS,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const oS=/\{\$([^}]+)}/g;/**
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
 */function ro(n){return JSON.parse(n)}function ht(n){return JSON.stringify(n)}/**
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
 */const nv=function(n){let e={},t={},s={},o="";try{const l=n.split(".");e=ro(il(l[0])||""),t=ro(il(l[1])||""),o=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:o}},aS=function(n){const e=nv(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},lS=function(n){const e=nv(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Cn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Mi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function sl(n,e,t){const s={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(s[o]=e.call(t,n[o],o,n));return s}function ol(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],c=e[o];if(Jm(l)&&Jm(c)){if(!ol(l,c))return!1}else if(l!==c)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Jm(n){return n!==null&&typeof n=="object"}/**
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
 */function qi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $s(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Gs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class uS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)s[v]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let v=0;v<16;v++)s[v]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let v=16;v<80;v++){const x=s[v-3]^s[v-8]^s[v-14]^s[v-16];s[v]=(x<<1|x>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],c=this.chain_[2],f=this.chain_[3],m=this.chain_[4],g,_;for(let v=0;v<80;v++){v<40?v<20?(g=f^l&(c^f),_=1518500249):(g=l^c^f,_=1859775393):v<60?(g=l&c|f&(l|c),_=2400959708):(g=l^c^f,_=3395469782);const x=(o<<5|o>>>27)+g+m+_+s[v]&4294967295;m=f,f=c,c=(l<<30|l>>>2)&4294967295,l=o,o=x}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let o=0;const l=this.buf_;let c=this.inbuf_;for(;o<t;){if(c===0)for(;o<=s;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<t;)if(l[c]=e.charCodeAt(o),++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}else for(;o<t;)if(l[c]=e[o],++c,++o,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[o]>>l&255,++s;return e}}function cS(n,e){const t=new dS(n,e);return t.subscribe.bind(t)}class dS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");hS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Gc),o.error===void 0&&(o.error=Gc),o.complete===void 0&&(o.complete=Gc);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gc(){}function Rl(n,e){return`${n} failed: ${e} argument `}/**
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
 */const fS=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);if(o>=55296&&o<=56319){const l=o-55296;s++,F(s<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(s)-56320;o=65536+(l<<10)+c}o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):o<65536?(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},Pl=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function rt(n){return n&&n._delegate?n._delegate:n}class Er{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class pS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new vo;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gS(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&c.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:mS(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mS(n){return n===zr?void 0:n}function gS(n){return n.instantiationMode==="EAGER"}/**
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
 */class yS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Te||(Te={}));const vS={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},_S=Te.INFO,wS={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},xS=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=wS[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vd{constructor(e){this.name=e,this._logLevel=_S,this._logHandler=xS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const ES=(n,e)=>e.some(t=>n instanceof t);let Zm,eg;function kS(){return Zm||(Zm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SS(){return eg||(eg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rv=new WeakMap,hd=new WeakMap,iv=new WeakMap,qc=new WeakMap,$d=new WeakMap;function CS(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(vr(n.result)),o()},c=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&rv.set(t,n)}).catch(()=>{}),$d.set(e,n),e}function NS(n){if(hd.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});hd.set(n,e)}let fd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||iv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function IS(n){fd=n(fd)}function TS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Kc(this),e,...t);return iv.set(s,e.sort?e.sort():[e]),vr(s)}:SS().includes(n)?function(...e){return n.apply(Kc(this),e),vr(rv.get(this))}:function(...e){return vr(n.apply(Kc(this),e))}}function bS(n){return typeof n=="function"?TS(n):(n instanceof IDBTransaction&&NS(n),ES(n,kS())?new Proxy(n,fd):n)}function vr(n){if(n instanceof IDBRequest)return CS(n);if(qc.has(n))return qc.get(n);const e=bS(n);return e!==n&&(qc.set(n,e),$d.set(e,n)),e}const Kc=n=>$d.get(n);function RS(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),f=vr(c);return s&&c.addEventListener("upgradeneeded",m=>{s(vr(c.result),m.oldVersion,m.newVersion,vr(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",g=>o(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const PS=["get","getKey","getAll","getAllKeys","count"],AS=["put","add","delete","clear"],Yc=new Map;function tg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=AS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||PS.includes(t)))return;const l=async function(c,...f){const m=this.transaction(c,o?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),o&&m.done]))[0]};return Yc.set(e,l),l}IS(n=>({...n,get:(e,t,s)=>tg(e,t)||n.get(e,t,s),has:(e,t)=>!!tg(e,t)||n.has(e,t)}));/**
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
 */class OS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(DS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function DS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",ng="0.10.7";/**
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
 */const $r=new Vd("@firebase/app"),jS="@firebase/app-compat",LS="@firebase/analytics-compat",MS="@firebase/analytics",US="@firebase/app-check-compat",FS="@firebase/app-check",BS="@firebase/auth",zS="@firebase/auth-compat",WS="@firebase/database",HS="@firebase/database-compat",VS="@firebase/functions",$S="@firebase/functions-compat",GS="@firebase/installations",qS="@firebase/installations-compat",KS="@firebase/messaging",YS="@firebase/messaging-compat",QS="@firebase/performance",XS="@firebase/performance-compat",JS="@firebase/remote-config",ZS="@firebase/remote-config-compat",eC="@firebase/storage",tC="@firebase/storage-compat",nC="@firebase/firestore",rC="@firebase/vertexai-preview",iC="@firebase/firestore-compat",sC="firebase",oC="10.12.4";/**
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
 */const md="[DEFAULT]",aC={[pd]:"fire-core",[jS]:"fire-core-compat",[MS]:"fire-analytics",[LS]:"fire-analytics-compat",[FS]:"fire-app-check",[US]:"fire-app-check-compat",[BS]:"fire-auth",[zS]:"fire-auth-compat",[WS]:"fire-rtdb",[HS]:"fire-rtdb-compat",[VS]:"fire-fn",[$S]:"fire-fn-compat",[GS]:"fire-iid",[qS]:"fire-iid-compat",[KS]:"fire-fcm",[YS]:"fire-fcm-compat",[QS]:"fire-perf",[XS]:"fire-perf-compat",[JS]:"fire-rc",[ZS]:"fire-rc-compat",[eC]:"fire-gcs",[tC]:"fire-gcs-compat",[nC]:"fire-fst",[iC]:"fire-fst-compat",[rC]:"fire-vertex","fire-js":"fire-js",[sC]:"fire-js-all"};/**
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
 */const al=new Map,lC=new Map,gd=new Map;function rg(n,e){try{n.container.addComponent(e)}catch(t){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gr(n){const e=n.name;if(gd.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,n);for(const t of al.values())rg(t,n);for(const t of lC.values())rg(t,n);return!0}function Al(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function jn(n){return n.settings!==void 0}/**
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
 */const uC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_r=new _o("app","Firebase",uC);/**
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
 */class cC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _r.create("app-deleted",{appName:this._name})}}/**
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
 */const ei=oC;function sv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:md,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw _r.create("bad-app-name",{appName:String(o)});if(t||(t=Jy()),!t)throw _r.create("no-options");const l=al.get(o);if(l){if(ol(t,l.options)&&ol(s,l.config))return l;throw _r.create("duplicate-app",{appName:o})}const c=new yS(o);for(const m of gd.values())c.addComponent(m);const f=new cC(t,s,c);return al.set(o,f),f}function Gd(n=md){const e=al.get(n);if(!e&&n===md&&Jy())return sv();if(!e)throw _r.create("no-app",{appName:n});return e}function wn(n,e,t){var s;let o=(s=aC[n])!==null&&s!==void 0?s:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(f.join(" "));return}Gr(new Er(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const dC="firebase-heartbeat-database",hC=1,io="firebase-heartbeat-store";let Qc=null;function ov(){return Qc||(Qc=RS(dC,hC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(io)}catch(t){console.warn(t)}}}}).catch(n=>{throw _r.create("idb-open",{originalErrorMessage:n.message})})),Qc}async function fC(n){try{const t=(await ov()).transaction(io),s=await t.objectStore(io).get(av(n));return await t.done,s}catch(e){if(e instanceof $n)$r.warn(e.message);else{const t=_r.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$r.warn(t.message)}}}async function ig(n,e){try{const s=(await ov()).transaction(io,"readwrite");await s.objectStore(io).put(e,av(n)),await s.done}catch(t){if(t instanceof $n)$r.warn(t.message);else{const s=_r.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$r.warn(s.message)}}}function av(n){return`${n.name}!${n.options.appId}`}/**
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
 */const pC=1024,mC=720*60*60*1e3;class gC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new vC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=sg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)))return this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=mC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=sg(),{heartbeatsToSend:s,unsentEntries:o}=yC(this._heartbeatsCache.heartbeats),l=rl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}}function sg(){return new Date().toISOString().substring(0,10)}function yC(n,e=pC){const t=[];let s=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),og(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),og(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class vC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nS()?rS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await fC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ig(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ig(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function og(n){return rl(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function _C(n){Gr(new Er("platform-logger",e=>new OS(e),"PRIVATE")),Gr(new Er("heartbeat",e=>new gC(e),"PRIVATE")),wn(pd,ng,n),wn(pd,ng,"esm2017"),wn("fire-js","")}_C("");var ag={};const lg="@firebase/database",ug="1.0.6";/**
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
 */let lv="";function wC(n){lv=n}/**
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
 */class xC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ht(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ro(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class EC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const uv=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xC(e)}}catch{}return new EC},Hr=uv("localStorage"),kC=uv("sessionStorage");/**
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
 */const Pi=new Vd("@firebase/database"),SC=(function(){let n=1;return function(){return n++}})(),cv=function(n){const e=fS(n),t=new uS;t.update(e);const s=t.digest();return zd.encodeByteArray(s)},wo=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=wo.apply(null,s):typeof s=="object"?e+=ht(s):e+=s,e+=" "}return e};let Ys=null,cg=!0;const CC=function(n,e){F(!0,"Can't turn on custom loggers persistently."),Pi.logLevel=Te.VERBOSE,Ys=Pi.log.bind(Pi)},mt=function(...n){if(cg===!0&&(cg=!1,Ys===null&&kC.get("logging_enabled")===!0&&CC()),Ys){const e=wo.apply(null,n);Ys(e)}},xo=function(n){return function(...e){mt(n,...e)}},yd=function(...n){const e="FIREBASE INTERNAL ERROR: "+wo(...n);Pi.error(e)},Hn=function(...n){const e=`FIREBASE FATAL ERROR: ${wo(...n)}`;throw Pi.error(e),new Error(e)},Rt=function(...n){const e="FIREBASE WARNING: "+wo(...n);Pi.warn(e)},NC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Rt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qd=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},IC=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ui="[MIN_NAME]",qr="[MAX_NAME]",ti=function(n,e){if(n===e)return 0;if(n===Ui||e===qr)return-1;if(e===Ui||n===qr)return 1;{const t=dg(n),s=dg(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},TC=function(n,e){return n===e?0:n<e?-1:1},Fs=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ht(e))},Kd=function(n){if(typeof n!="object"||n===null)return ht(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ht(e[s]),t+=":",t+=Kd(n[e[s]]);return t+="}",t},dv=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let o=0;o<t;o+=e)o+e>t?s.push(n.substring(o,t)):s.push(n.substring(o,o+e));return s};function gt(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const hv=function(n){F(!qd(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let o,l,c,f,m;n===0?(l=0,c=0,o=1/n===-1/0?1:0):(o=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),s),l=f+s,c=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-s-t))));const g=[];for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(o?1:0),g.reverse();const _=g.join("");let v="";for(m=0;m<64;m+=8){let x=parseInt(_.substr(m,8),2).toString(16);x.length===1&&(x="0"+x),v=v+x}return v.toLowerCase()},bC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function PC(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const AC=new RegExp("^-?(0*)\\d{1,10}$"),OC=-2147483648,DC=2147483647,dg=function(n){if(AC.test(n)){const e=Number(n);if(e>=OC&&e<=DC)return e}return null},Ki=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Rt("Exception was thrown by user callback.",t),e},Math.floor(0))}},jC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qs=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class LC{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Rt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class MC{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Rt(e)}}class Xa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xa.OWNER="owner";/**
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
 */const Yd="5",fv="v",pv="s",mv="r",gv="f",yv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vv="ls",_v="p",vd="ac",wv="websocket",xv="long_polling";/**
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
 */class Ev{constructor(e,t,s,o,l=!1,c="",f=!1,m=!1){this.secure=t,this.namespace=s,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function UC(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function kv(n,e,t){F(typeof e=="string","typeof type must == string"),F(typeof t=="object","typeof params must == object");let s;if(e===wv)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===xv)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);UC(n)&&(t.ns=n.namespace);const o=[];return gt(t,(l,c)=>{o.push(l+"="+c)}),s+o.join("&")}/**
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
 */class FC{constructor(){this.counters_={}}incrementCounter(e,t=1){Cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qk(this.counters_)}}/**
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
 */const Xc={},Jc={};function Qd(n){const e=n.toString();return Xc[e]||(Xc[e]=new FC),Xc[e]}function BC(n,e){const t=n.toString();return Jc[t]||(Jc[t]=e()),Jc[t]}/**
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
 */class zC{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<s.length;++o)s[o]&&Ki(()=>{this.onMessage_(s[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hg="start",WC="close",HC="pLPCommand",VC="pRTLPCB",Sv="id",Cv="pw",Nv="ser",$C="cb",GC="seg",qC="ts",KC="d",YC="dframe",Iv=1870,Tv=30,QC=Iv-Tv,XC=25e3,JC=3e4;class bi{constructor(e,t,s,o,l,c,f){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xo(e),this.stats_=Qd(t),this.urlFn=m=>(this.appCheckToken&&(m[vd]=this.appCheckToken),kv(t,xv,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new zC(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JC)),IC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xd((...l)=>{const[c,f,m,g,_]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===hg)this.id=f,this.password=m;else if(c===WC)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,f]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const s={};s[hg]="t",s[Nv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[$C]=this.scriptTagHolder.uniqueCallbackIdentifier),s[fv]=Yd,this.transportSessionId&&(s[pv]=this.transportSessionId),this.lastSessionId&&(s[vv]=this.lastSessionId),this.applicationId&&(s[_v]=this.applicationId),this.appCheckToken&&(s[vd]=this.appCheckToken),typeof location<"u"&&location.hostname&&yv.test(location.hostname)&&(s[mv]=gv);const o=this.urlFn(s);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){bi.forceAllow_=!0}static forceDisallow(){bi.forceDisallow_=!0}static isAvailable(){return bi.forceAllow_?!0:!bi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bC()&&!RC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ht(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ky(t),o=dv(s,QC);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[YC]="t",s[Sv]=e,s[Cv]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ht(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Xd{constructor(e,t,s,o){this.onDisconnect=s,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SC(),window[HC+this.uniqueCallbackIdentifier]=e,window[VC+this.uniqueCallbackIdentifier]=t,this.myIFrame=Xd.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){mt("frame writing exception"),f.stack&&mt(f.stack),mt(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sv]=this.myID,e[Cv]=this.myPW,e[Nv]=this.currentSerial;let t=this.urlFn(e),s="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Tv+s.length<=Iv;){const c=this.pendingSegs.shift();s=s+"&"+GC+o+"="+c.seg+"&"+qC+o+"="+c.ts+"&"+KC+o+"="+c.d,o++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},o=setTimeout(s,Math.floor(XC)),l=()=>{clearTimeout(o),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const o=s.readyState;(!o||o==="loaded"||o==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const ZC=16384,eN=45e3;let ll=null;typeof MozWebSocket<"u"?ll=MozWebSocket:typeof WebSocket<"u"&&(ll=WebSocket);class un{constructor(e,t,s,o,l,c,f){this.connId=e,this.applicationId=s,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xo(this.connId),this.stats_=Qd(t),this.connURL=un.connectionURL_(t,c,f,o,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,o,l){const c={};return c[fv]=Yd,typeof location<"u"&&location.hostname&&yv.test(location.hostname)&&(c[mv]=gv),t&&(c[pv]=t),s&&(c[vv]=s),o&&(c[vd]=o),l&&(c[_v]=l),kv(e,wv,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hr.set("previous_websocket_failure",!0);try{let s;tS(),this.mySock=new ll(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const o=s.message||s.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ll!==null&&!un.forceDisallow_}static previouslyFailed(){return Hr.isInMemoryStorage||Hr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=ro(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ht(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=dv(t,ZC);s.length>1&&this.sendString_(String(s.length));for(let o=0;o<s.length;o++)this.sendString_(s[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}un.responsesRequiredToBeHealthy=2;un.healthyTimeout=3e4;/**
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
 */class so{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[bi,un]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=un&&un.isAvailable();let s=t&&!un.previouslyFailed();if(e.webSocketOnly&&(t||Rt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[un];else{const o=this.transports_=[];for(const l of so.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);so.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}so.globalTransportInitialized_=!1;/**
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
 */const tN=6e4,nN=5e3,rN=10*1024,iN=100*1024,Zc="t",fg="d",sN="s",pg="r",oN="e",mg="o",gg="a",yg="n",vg="p",aN="h";class lN{constructor(e,t,s,o,l,c,f,m,g,_){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xo("c:"+this.id+":"),this.transportManager_=new so(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Qs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zc in e){const t=e[Zc];t===gg?this.upgradeIfSecondaryHealthy_():t===pg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===mg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Fs("t",e),s=Fs("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:yg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Fs("t",e),s=Fs("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Fs(Zc,e);if(fg in e){const s=e[fg];if(t===aN){const o=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(t===yg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===sN?this.onConnectionShutdown_(s):t===pg?this.onReset_(s):t===oN?yd("Server Error: "+s):t===mg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yd("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Yd!==s&&Rt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Qs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class bv{put(e,t,s,o){}merge(e,t,s,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Rv{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let o=0;o<s.length;o++)s[o].callback.apply(s[o].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const o=this.getInitialEvent(e);o&&t.apply(s,o)}off(e,t,s){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===t&&(!s||s===o[l].context)){o.splice(l,1);return}}validateEventType_(e){F(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ul extends Rv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ul}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _g=32,wg=768;class be{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[s]=this.pieces_[o],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ke(){return new be("")}function pe(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function kr(n){return n.pieces_.length-n.pieceNum_}function Ae(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new be(n.pieces_,e)}function Jd(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function uN(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function oo(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Pv(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new be(e,0)}function He(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof be)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let o=0;o<s.length;o++)s[o].length>0&&t.push(s[o])}return new be(t,0)}function ge(n){return n.pieceNum_>=n.pieces_.length}function Ut(n,e){const t=pe(n),s=pe(e);if(t===null)return e;if(t===s)return Ut(Ae(n),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function cN(n,e){const t=oo(n,0),s=oo(e,0);for(let o=0;o<t.length&&o<s.length;o++){const l=ti(t[o],s[o]);if(l!==0)return l}return t.length===s.length?0:t.length<s.length?-1:1}function Zd(n,e){if(kr(n)!==kr(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Jt(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(kr(n)>kr(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class dN{constructor(e,t){this.errorPrefix_=t,this.parts_=oo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Pl(this.parts_[s]);Av(this)}}function hN(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Pl(e),Av(n)}function fN(n){const e=n.parts_.pop();n.byteLength_-=Pl(e),n.parts_.length>0&&(n.byteLength_-=1)}function Av(n){if(n.byteLength_>wg)throw new Error(n.errorPrefix_+"has a key path longer than "+wg+" bytes ("+n.byteLength_+").");if(n.parts_.length>_g)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_g+") or object contains a cycle "+Wr(n))}function Wr(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class eh extends Rv{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new eh}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Bs=1e3,pN=300*1e3,xg=30*1e3,mN=1.3,gN=3e4,yN="server_kill",Eg=3;class zn extends bv{constructor(e,t,s,o,l,c,f,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=zn.nextPersistentConnectionId_++,this.log_=xo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bs,this.maxReconnectDelay_=pN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");eh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ul.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const o=++this.requestNumber_,l={r:o,a:e,b:t};this.log_(ht(l)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[o]=s)}get(e){this.initConnection_();const t=new vo,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,o){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const f={onComplete:o,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),o=t._queryIdentifier;this.log_("Listen on "+s+" for "+o);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,f=>{const m=f.d,g=f.s;zn.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(o))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(s,o),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Cn(e,"w")){const s=Mi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const o='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Rt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=aS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,o=>{const l=o.s,c=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+o),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,o)&&this.connected_&&this.sendUnlisten_(s,o,e._queryObject,t)}sendUnlisten_(e,t,s,o){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";o&&(l.q=s,l.t=o),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,o){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{o&&setTimeout(()=>{o(c.s,c.d)},Math.floor(0))})}put(e,t,s,o){this.putInternal("p",e,t,s,o)}merge(e,t,s,o){this.putInternal("m",e,t,s,o)}putInternal(e,t,s,o,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:o}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ht(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):yd("Unrecognized action received from server: "+ht(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gN&&(this.reconnectDelay_=Bs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+zn.nextConnectionId_++,l=this.lastSessionId;let c=!1,f=null;const m=function(){f?f.close():(c=!0,s())},g=function(v){F(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(v)};this.realtime_={close:m,sendRequest:g};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[v,x]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);c?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=v&&v.accessToken,this.appCheckToken_=x&&x.token,f=new lN(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,b=>{Rt(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(yN)},l))}catch(v){this.log_("Failed to get token: "+v),c||(this.repoInfo_.nodeAdmin&&Rt(v),m())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dd(this.interruptReasons_)&&(this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Kd(l)).join("$"):s="default";const o=this.removeListen_(e,s);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,t){const s=new be(e).toString();let o;if(this.listens.has(s)){const l=this.listens.get(s);o=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else o=void 0;return o}onAuthRevoked_(e,t){mt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Eg&&(this.reconnectDelay_=xg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){mt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Eg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+lv.replace(/\./g,"-")]=1,Hd()?e["framework.cordova"]=1:tv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ul.getInstance().currentlyOnline();return dd(this.interruptReasons_)&&e}}zn.nextPersistentConnectionId_=0;zn.nextConnectionId_=0;/**
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
 */class me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new me(e,t)}}/**
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
 */class Ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new me(Ui,e),o=new me(Ui,t);return this.compare(s,o)!==0}minPost(){return me.MIN}}/**
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
 */let Ua;class Ov extends Ol{static get __EMPTY_NODE(){return Ua}static set __EMPTY_NODE(e){Ua=e}compare(e,t){return ti(e.name,t.name)}isDefinedOn(e){throw Gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return me.MIN}maxPost(){return new me(qr,Ua)}makePost(e,t){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new me(e,Ua)}toString(){return".key"}}const Ai=new Ov;/**
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
 */class Fa{constructor(e,t,s,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,o&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ct{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??ct.RED,this.left=o??Ft.EMPTY_NODE,this.right=l??Ft.EMPTY_NODE}copy(e,t,s,o,l){return new ct(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o=o.copy(null,t,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ft.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,o;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ft.EMPTY_NODE;o=s.right.min_(),s=s.copy(o.key,o.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ct.RED=!0;ct.BLACK=!1;class vN{copy(e,t,s,o,l){return this}insert(e,t,s){return new ct(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ft{constructor(e,t=Ft.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ft(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ct.BLACK,null,null))}remove(e){return new Ft(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ct.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,o=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return o?o.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(o=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fa(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fa(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fa(this.root_,null,this.comparator_,!0,e)}}Ft.EMPTY_NODE=new vN;/**
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
 */function _N(n,e){return ti(n.name,e.name)}function th(n,e){return ti(n,e)}/**
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
 */let _d;function wN(n){_d=n}const Dv=function(n){return typeof n=="number"?"number:"+hv(n):"string:"+n},jv=function(n){if(n.isLeafNode()){const e=n.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cn(e,".sv"),"Priority must be a string or number.")}else F(n===_d||n.isEmpty(),"priority of unexpected type.");F(n===_d||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let kg;class ut{constructor(e,t=ut.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jv(this.priorityNode_)}static set __childrenNodeConstructor(e){kg=e}static get __childrenNodeConstructor(){return kg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ut(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ge(e)?this:pe(e)===".priority"?this.priorityNode_:ut.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:ut.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=pe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(F(s!==".priority"||kr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ut.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dv(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=hv(this.value_):e+=this.value_,this.lazyHash_=cv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ut.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ut.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,o=ut.VALUE_TYPE_ORDER.indexOf(t),l=ut.VALUE_TYPE_ORDER.indexOf(s);return F(o>=0,"Unknown leaf type: "+t),F(l>=0,"Unknown leaf type: "+s),o===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}ut.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Lv,Mv;function xN(n){Lv=n}function EN(n){Mv=n}class kN extends Ol{compare(e,t){const s=e.node.getPriority(),o=t.node.getPriority(),l=s.compareTo(o);return l===0?ti(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return me.MIN}maxPost(){return new me(qr,new ut("[PRIORITY-POST]",Mv))}makePost(e,t){const s=Lv(e);return new me(t,new ut("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ve=new kN;/**
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
 */const SN=Math.log(2);class CN{constructor(e){const t=l=>parseInt(Math.log(l)/SN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const o=s(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cl=function(n,e,t,s){n.sort(e);const o=function(m,g){const _=g-m;let v,x;if(_===0)return null;if(_===1)return v=n[m],x=t?t(v):v,new ct(x,v.node,ct.BLACK,null,null);{const b=parseInt(_/2,10)+m,A=o(m,b),O=o(b+1,g);return v=n[b],x=t?t(v):v,new ct(x,v.node,ct.BLACK,A,O)}},l=function(m){let g=null,_=null,v=n.length;const x=function(A,O){const P=v-A,G=v;v-=A;const K=o(P+1,G),B=n[P],V=t?t(B):B;b(new ct(V,B.node,O,null,K))},b=function(A){g?(g.left=A,g=A):(_=A,g=A)};for(let A=0;A<m.count;++A){const O=m.nextBitIsOne(),P=Math.pow(2,m.count-(A+1));O?x(P,ct.BLACK):(x(P,ct.BLACK),x(P,ct.RED))}return _},c=new CN(n.length),f=l(c);return new Ft(s||e,f)};/**
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
 */let ed;const Ti={};class Ln{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return F(Ti&&Ve,"ChildrenNode.ts has not been loaded"),ed=ed||new Ln({".priority":Ti},{".priority":Ve}),ed}get(e){const t=Mi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ft?t:null}hasIndex(e){return Cn(this.indexSet_,e.toString())}addIndex(e,t){F(e!==Ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let o=!1;const l=t.getIterator(me.Wrap);let c=l.getNext();for(;c;)o=o||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let f;o?f=cl(s,e.getCompare()):f=Ti;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const _=Object.assign({},this.indexes_);return _[m]=f,new Ln(_,g)}addToIndexes(e,t){const s=sl(this.indexes_,(o,l)=>{const c=Mi(this.indexSet_,l);if(F(c,"Missing index implementation for "+l),o===Ti)if(c.isDefinedOn(e.node)){const f=[],m=t.getIterator(me.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&f.push(g),g=m.getNext();return f.push(e),cl(f,c.getCompare())}else return Ti;else{const f=t.get(e.name);let m=o;return f&&(m=m.remove(new me(e.name,f))),m.insert(e,e.node)}});return new Ln(s,this.indexSet_)}removeFromIndexes(e,t){const s=sl(this.indexes_,o=>{if(o===Ti)return o;{const l=t.get(e.name);return l?o.remove(new me(e.name,l)):o}});return new Ln(s,this.indexSet_)}}/**
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
 */let zs;class se{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&jv(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zs||(zs=new se(new Ft(th),null,Ln.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zs}updatePriority(e){return this.children_.isEmpty()?this:new se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?zs:t}}getChild(e){const t=pe(e);return t===null?this:this.getImmediateChild(t).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(F(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new me(e,t);let o,l;t.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(o=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=o.isEmpty()?zs:this.priorityNode_;return new se(o,c,l)}}updateChild(e,t){const s=pe(e);if(s===null)return t;{F(pe(e)!==".priority"||kr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(s).updateChild(Ae(e),t);return this.updateImmediateChild(s,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,o=0,l=!0;if(this.forEachChild(Ve,(c,f)=>{t[c]=f.val(e),s++,l&&se.INTEGER_REGEXP_.test(c)?o=Math.max(o,Number(c)):l=!1}),!e&&l&&o<2*s){const c=[];for(const f in t)c[f]=t[f];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dv(this.getPriority().val())+":"),this.forEachChild(Ve,(t,s)=>{const o=s.hash();o!==""&&(e+=":"+t+":"+o)}),this.lazyHash_=e===""?"":cv(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const o=this.resolveIndex_(s);if(o){const l=o.getPredecessorKey(new me(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new me(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(o=>t(o.name,o.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,me.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,me.Wrap);let l=o.peek();for(;l!=null&&t.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Eo?-1:0}withIndex(e){if(e===Ai||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new se(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Ve),o=t.getIterator(Ve);let l=s.getNext(),c=o.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=o.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Ai?null:this.indexMap_.get(e.toString())}}se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class NN extends se{constructor(){super(new Ft(th),se.EMPTY_NODE,Ln.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return se.EMPTY_NODE}isEmpty(){return!1}}const Eo=new NN;Object.defineProperties(me,{MIN:{value:new me(Ui,se.EMPTY_NODE)},MAX:{value:new me(qr,Eo)}});Ov.__EMPTY_NODE=se.EMPTY_NODE;ut.__childrenNodeConstructor=se;wN(Eo);EN(Eo);/**
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
 */const IN=!0;function dt(n,e=null){if(n===null)return se.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new ut(t,dt(e))}if(!(n instanceof Array)&&IN){const t=[];let s=!1;if(gt(n,(c,f)=>{if(c.substring(0,1)!=="."){const m=dt(f);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new me(c,m)))}}),t.length===0)return se.EMPTY_NODE;const l=cl(t,_N,c=>c.name,th);if(s){const c=cl(t,Ve.getCompare());return new se(l,dt(e),new Ln({".priority":c},{".priority":Ve}))}else return new se(l,dt(e),Ln.Default)}else{let t=se.EMPTY_NODE;return gt(n,(s,o)=>{if(Cn(n,s)&&s.substring(0,1)!=="."){const l=dt(o);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(dt(e))}}xN(dt);/**
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
 */class TN extends Ol{constructor(e){super(),this.indexPath_=e,F(!ge(e)&&pe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),o=this.extractChild(t.node),l=s.compareTo(o);return l===0?ti(e.name,t.name):l}makePost(e,t){const s=dt(e),o=se.EMPTY_NODE.updateChild(this.indexPath_,s);return new me(t,o)}maxPost(){const e=se.EMPTY_NODE.updateChild(this.indexPath_,Eo);return new me(qr,e)}toString(){return oo(this.indexPath_,0).join("/")}}/**
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
 */class bN extends Ol{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ti(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return me.MIN}maxPost(){return me.MAX}makePost(e,t){const s=dt(e);return new me(t,s)}toString(){return".value"}}const RN=new bN;/**
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
 */function Uv(n){return{type:"value",snapshotNode:n}}function Fi(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ao(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function lo(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function PN(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class nh{constructor(e){this.index_=e}updateChild(e,t,s,o,l,c){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(o).equals(s.getChild(o))&&f.isEmpty()===s.isEmpty()||(c!=null&&(s.isEmpty()?e.hasChild(t)?c.trackChildChange(ao(t,f)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(Fi(t,s)):c.trackChildChange(lo(t,s,f))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ve,(o,l)=>{t.hasChild(o)||s.trackChildChange(ao(o,l))}),t.isLeafNode()||t.forEachChild(Ve,(o,l)=>{if(e.hasChild(o)){const c=e.getImmediateChild(o);c.equals(l)||s.trackChildChange(lo(o,l,c))}else s.trackChildChange(Fi(o,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?se.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class uo{constructor(e){this.indexedFilter_=new nh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=uo.getStartPost_(e),this.endPost_=uo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,o,l,c){return this.matches(new me(t,s))||(s=se.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,o,l,c)}updateFullNode(e,t,s){t.isLeafNode()&&(t=se.EMPTY_NODE);let o=t.withIndex(this.index_);o=o.updatePriority(se.EMPTY_NODE);const l=this;return t.forEachChild(Ve,(c,f)=>{l.matches(new me(c,f))||(o=o.updateImmediateChild(c,se.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class AN{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new uo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,o,l,c){return this.rangedFilter_.matches(new me(t,s))||(s=se.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,o,l,c):this.fullLimitUpdateChild_(e,t,s,l,c)}updateFullNode(e,t,s){let o;if(t.isLeafNode()||t.isEmpty())o=se.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){o=se.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const f=l.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))o=o.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{o=t.withIndex(this.index_),o=o.updatePriority(se.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let c=0;for(;l.hasNext();){const f=l.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:o=o.updateImmediateChild(f.name,se.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,o,l){let c;if(this.reverse_){const v=this.index_.getCompare();c=(x,b)=>v(b,x)}else c=this.index_.getCompare();const f=e;F(f.numChildren()===this.limit_,"");const m=new me(t,s),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),_=this.rangedFilter_.matches(m);if(f.hasChild(t)){const v=f.getImmediateChild(t);let x=o.getChildAfterChild(this.index_,g,this.reverse_);for(;x!=null&&(x.name===t||f.hasChild(x.name));)x=o.getChildAfterChild(this.index_,x,this.reverse_);const b=x==null?1:c(x,m);if(_&&!s.isEmpty()&&b>=0)return l!=null&&l.trackChildChange(lo(t,s,v)),f.updateImmediateChild(t,s);{l!=null&&l.trackChildChange(ao(t,v));const O=f.updateImmediateChild(t,se.EMPTY_NODE);return x!=null&&this.rangedFilter_.matches(x)?(l!=null&&l.trackChildChange(Fi(x.name,x.node)),O.updateImmediateChild(x.name,x.node)):O}}else return s.isEmpty()?e:_&&c(g,m)>=0?(l!=null&&(l.trackChildChange(ao(g.name,g.node)),l.trackChildChange(Fi(t,s))),f.updateImmediateChild(t,s).updateImmediateChild(g.name,se.EMPTY_NODE)):e}}/**
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
 */class rh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ui}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new rh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ON(n){return n.loadsAllData()?new nh(n.getIndex()):n.hasLimit()?new AN(n):new uo(n)}function Sg(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ve?t="$priority":n.index_===RN?t="$value":n.index_===Ai?t="$key":(F(n.index_ instanceof TN,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ht(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=ht(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+ht(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=ht(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+ht(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Cg(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ve&&(e.i=n.index_.toString()),e}/**
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
 */class dl extends bv{constructor(e,t,s,o){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.log_=xo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=dl.getListenId_(e,s),f={};this.listens_[c]=f;const m=Sg(e._queryParams);this.restRequest_(l+".json",m,(g,_)=>{let v=_;if(g===404&&(v=null,g=null),g===null&&this.onDataUpdate_(l,v,!1,s),Mi(this.listens_,c)===f){let x;g?g===401?x="permission_denied":x="rest_error:"+g:x="ok",o(x,null)}})}unlisten(e,t){const s=dl.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Sg(e._queryParams),s=e._path.toString(),o=new vo;return this.restRequest_(s+".json",t,(l,c)=>{let f=c;l===404&&(f=null,l=null),l===null?(this.onDataUpdate_(s,f,!1,null),o.resolve(f)):o.reject(new Error(f))}),o.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(t.auth=o.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qi(t);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(s&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=ro(f.responseText)}catch{Rt("Failed to parse JSON response for "+c+": "+f.responseText)}s(null,m)}else f.status!==401&&f.status!==404&&Rt("Got unsuccessful REST response for "+c+" Status: "+f.status),s(f.status);s=null}},f.open("GET",c,!0),f.send()})}}/**
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
 */class DN{constructor(){this.rootNode_=se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function hl(){return{value:null,children:new Map}}function Fv(n,e,t){if(ge(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=pe(e);n.children.has(s)||n.children.set(s,hl());const o=n.children.get(s);e=Ae(e),Fv(o,e,t)}}function wd(n,e,t){n.value!==null?t(e,n.value):jN(n,(s,o)=>{const l=new be(e.toString()+"/"+s);wd(o,l,t)})}function jN(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class LN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&gt(this.last_,(s,o)=>{t[s]=t[s]-o}),this.last_=e,t}}/**
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
 */const Ng=10*1e3,MN=30*1e3,UN=300*1e3;class FN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new LN(e);const s=Ng+(MN-Ng)*Math.random();Qs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;gt(e,(o,l)=>{l>0&&Cn(this.statsToReport_,o)&&(t[o]=l,s=!0)}),s&&this.server_.reportStats(t),Qs(this.reportStats_.bind(this),Math.floor(Math.random()*2*UN))}}/**
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
 */var cn;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(cn||(cn={}));function ih(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function oh(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class fl{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=cn.ACK_USER_WRITE,this.source=ih()}operationForChild(e){if(ge(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new be(e));return new fl(ke(),t,this.revert)}}else return F(pe(this.path)===e,"operationForChild called for unrelated child."),new fl(Ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class co{constructor(e,t){this.source=e,this.path=t,this.type=cn.LISTEN_COMPLETE}operationForChild(e){return ge(this.path)?new co(this.source,ke()):new co(this.source,Ae(this.path))}}/**
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
 */class Kr{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=cn.OVERWRITE}operationForChild(e){return ge(this.path)?new Kr(this.source,ke(),this.snap.getImmediateChild(e)):new Kr(this.source,Ae(this.path),this.snap)}}/**
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
 */class Bi{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=cn.MERGE}operationForChild(e){if(ge(this.path)){const t=this.children.subtree(new be(e));return t.isEmpty()?null:t.value?new Kr(this.source,ke(),t.value):new Bi(this.source,ke(),t)}else return F(pe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bi(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Yr{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ge(e))return this.isFullyInitialized()&&!this.filtered_;const t=pe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class BN{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zN(n,e,t,s){const o=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(PN(c.childName,c.snapshotNode))}),Ws(n,o,"child_removed",e,s,t),Ws(n,o,"child_added",e,s,t),Ws(n,o,"child_moved",l,s,t),Ws(n,o,"child_changed",e,s,t),Ws(n,o,"value",e,s,t),o}function Ws(n,e,t,s,o,l){const c=s.filter(f=>f.type===t);c.sort((f,m)=>HN(n,f,m)),c.forEach(f=>{const m=WN(n,f,l);o.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(m,n.query_))})})}function WN(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function HN(n,e,t){if(e.childName==null||t.childName==null)throw Gi("Should only compare child_ events.");const s=new me(e.childName,e.snapshotNode),o=new me(t.childName,t.snapshotNode);return n.index_.compare(s,o)}/**
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
 */function Dl(n,e){return{eventCache:n,serverCache:e}}function Xs(n,e,t,s){return Dl(new Yr(e,t,s),n.serverCache)}function Bv(n,e,t,s){return Dl(n.eventCache,new Yr(e,t,s))}function xd(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Qr(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let td;const VN=()=>(td||(td=new Ft(TC)),td);class Pe{constructor(e,t=VN()){this.value=e,this.children=t}static fromObject(e){let t=new Pe(null);return gt(e,(s,o)=>{t=t.set(new be(s),o)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ke(),value:this.value};if(ge(e))return null;{const s=pe(e),o=this.children.get(s);if(o!==null){const l=o.findRootMostMatchingPathAndValue(Ae(e),t);return l!=null?{path:He(new be(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ge(e))return this;{const t=pe(e),s=this.children.get(t);return s!==null?s.subtree(Ae(e)):new Pe(null)}}set(e,t){if(ge(e))return new Pe(t,this.children);{const s=pe(e),l=(this.children.get(s)||new Pe(null)).set(Ae(e),t),c=this.children.insert(s,l);return new Pe(this.value,c)}}remove(e){if(ge(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const t=pe(e),s=this.children.get(t);if(s){const o=s.remove(Ae(e));let l;return o.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,o),this.value===null&&l.isEmpty()?new Pe(null):new Pe(this.value,l)}else return this}}get(e){if(ge(e))return this.value;{const t=pe(e),s=this.children.get(t);return s?s.get(Ae(e)):null}}setTree(e,t){if(ge(e))return t;{const s=pe(e),l=(this.children.get(s)||new Pe(null)).setTree(Ae(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new Pe(this.value,c)}}fold(e){return this.fold_(ke(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((o,l)=>{s[o]=l.fold_(He(e,o),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,ke(),t)}findOnPath_(e,t,s){const o=this.value?s(t,this.value):!1;if(o)return o;if(ge(e))return null;{const l=pe(e),c=this.children.get(l);return c?c.findOnPath_(Ae(e),He(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ke(),t)}foreachOnPath_(e,t,s){if(ge(e))return this;{this.value&&s(t,this.value);const o=pe(e),l=this.children.get(o);return l?l.foreachOnPath_(Ae(e),He(t,o),s):new Pe(null)}}foreach(e){this.foreach_(ke(),e)}foreach_(e,t){this.children.inorderTraversal((s,o)=>{o.foreach_(He(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class dn{constructor(e){this.writeTree_=e}static empty(){return new dn(new Pe(null))}}function Js(n,e,t){if(ge(e))return new dn(new Pe(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const o=s.path;let l=s.value;const c=Ut(o,e);return l=l.updateChild(c,t),new dn(n.writeTree_.set(o,l))}else{const o=new Pe(t),l=n.writeTree_.setTree(e,o);return new dn(l)}}}function Ed(n,e,t){let s=n;return gt(t,(o,l)=>{s=Js(s,He(e,o),l)}),s}function Ig(n,e){if(ge(e))return dn.empty();{const t=n.writeTree_.setTree(e,new Pe(null));return new dn(t)}}function kd(n,e){return ni(n,e)!=null}function ni(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ut(t.path,e)):null}function Tg(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ve,(s,o)=>{e.push(new me(s,o))}):n.writeTree_.children.inorderTraversal((s,o)=>{o.value!=null&&e.push(new me(s,o.value))}),e}function wr(n,e){if(ge(e))return n;{const t=ni(n,e);return t!=null?new dn(new Pe(t)):new dn(n.writeTree_.subtree(e))}}function Sd(n){return n.writeTree_.isEmpty()}function zi(n,e){return zv(ke(),n.writeTree_,e)}function zv(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(F(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=zv(He(n,o),l,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(He(n,".priority"),s)),t}}/**
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
 */function ah(n,e){return $v(e,n)}function $N(n,e,t,s,o){F(s>n.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:o}),o&&(n.visibleWrites=Js(n.visibleWrites,e,t)),n.lastWriteId=s}function GN(n,e,t,s){F(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Ed(n.visibleWrites,e,t),n.lastWriteId=s}function qN(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function KN(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);F(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let o=s.visible,l=!1,c=n.allWrites.length-1;for(;o&&c>=0;){const f=n.allWrites[c];f.visible&&(c>=t&&YN(f,s.path)?o=!1:Jt(s.path,f.path)&&(l=!0)),c--}if(o){if(l)return QN(n),!0;if(s.snap)n.visibleWrites=Ig(n.visibleWrites,s.path);else{const f=s.children;gt(f,m=>{n.visibleWrites=Ig(n.visibleWrites,He(s.path,m))})}return!0}else return!1}function YN(n,e){if(n.snap)return Jt(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Jt(He(n.path,t),e))return!0;return!1}function QN(n){n.visibleWrites=Wv(n.allWrites,XN,ke()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function XN(n){return n.visible}function Wv(n,e,t){let s=dn.empty();for(let o=0;o<n.length;++o){const l=n[o];if(e(l)){const c=l.path;let f;if(l.snap)Jt(t,c)?(f=Ut(t,c),s=Js(s,f,l.snap)):Jt(c,t)&&(f=Ut(c,t),s=Js(s,ke(),l.snap.getChild(f)));else if(l.children){if(Jt(t,c))f=Ut(t,c),s=Ed(s,f,l.children);else if(Jt(c,t))if(f=Ut(c,t),ge(f))s=Ed(s,ke(),l.children);else{const m=Mi(l.children,pe(f));if(m){const g=m.getChild(Ae(f));s=Js(s,ke(),g)}}}else throw Gi("WriteRecord should have .snap or .children")}}return s}function Hv(n,e,t,s,o){if(!s&&!o){const l=ni(n.visibleWrites,e);if(l!=null)return l;{const c=wr(n.visibleWrites,e);if(Sd(c))return t;if(t==null&&!kd(c,ke()))return null;{const f=t||se.EMPTY_NODE;return zi(c,f)}}}else{const l=wr(n.visibleWrites,e);if(!o&&Sd(l))return t;if(!o&&t==null&&!kd(l,ke()))return null;{const c=function(g){return(g.visible||o)&&(!s||!~s.indexOf(g.writeId))&&(Jt(g.path,e)||Jt(e,g.path))},f=Wv(n.allWrites,c,e),m=t||se.EMPTY_NODE;return zi(f,m)}}}function JN(n,e,t){let s=se.EMPTY_NODE;const o=ni(n.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Ve,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=wr(n.visibleWrites,e);return t.forEachChild(Ve,(c,f)=>{const m=zi(wr(l,new be(c)),f);s=s.updateImmediateChild(c,m)}),Tg(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=wr(n.visibleWrites,e);return Tg(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function ZN(n,e,t,s,o){F(s||o,"Either existingEventSnap or existingServerSnap must exist");const l=He(e,t);if(kd(n.visibleWrites,l))return null;{const c=wr(n.visibleWrites,l);return Sd(c)?o.getChild(t):zi(c,o.getChild(t))}}function eI(n,e,t,s){const o=He(e,t),l=ni(n.visibleWrites,o);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=wr(n.visibleWrites,o);return zi(c,s.getNode().getImmediateChild(t))}else return null}function tI(n,e){return ni(n.visibleWrites,e)}function nI(n,e,t,s,o,l,c){let f;const m=wr(n.visibleWrites,e),g=ni(m,ke());if(g!=null)f=g;else if(t!=null)f=zi(m,t);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const _=[],v=c.getCompare(),x=l?f.getReverseIteratorFrom(s,c):f.getIteratorFrom(s,c);let b=x.getNext();for(;b&&_.length<o;)v(b,s)!==0&&_.push(b),b=x.getNext();return _}else return[]}function rI(){return{visibleWrites:dn.empty(),allWrites:[],lastWriteId:-1}}function pl(n,e,t,s){return Hv(n.writeTree,n.treePath,e,t,s)}function lh(n,e){return JN(n.writeTree,n.treePath,e)}function bg(n,e,t,s){return ZN(n.writeTree,n.treePath,e,t,s)}function ml(n,e){return tI(n.writeTree,He(n.treePath,e))}function iI(n,e,t,s,o,l){return nI(n.writeTree,n.treePath,e,t,s,o,l)}function uh(n,e,t){return eI(n.writeTree,n.treePath,e,t)}function Vv(n,e){return $v(He(n.treePath,e),n.writeTree)}function $v(n,e){return{treePath:n,writeTree:e}}/**
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
 */class sI{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;F(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),F(s!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(s);if(o){const l=o.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,lo(s,e.snapshotNode,o.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,ao(s,o.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,Fi(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,lo(s,e.snapshotNode,o.oldSnap));else throw Gi("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class oI{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Gv=new oI;class ch{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return uh(this.writes_,e,s)}}getChildAfterChild(e,t,s){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qr(this.viewCache_),l=iI(this.writes_,o,t,1,s,e);return l.length===0?null:l[0]}}/**
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
 */function aI(n){return{filter:n}}function lI(n,e){F(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function uI(n,e,t,s,o){const l=new sI;let c,f;if(t.type===cn.OVERWRITE){const g=t;g.source.fromUser?c=Cd(n,e,g.path,g.snap,s,o,l):(F(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!ge(g.path),c=gl(n,e,g.path,g.snap,s,o,f,l))}else if(t.type===cn.MERGE){const g=t;g.source.fromUser?c=dI(n,e,g.path,g.children,s,o,l):(F(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=Nd(n,e,g.path,g.children,s,o,f,l))}else if(t.type===cn.ACK_USER_WRITE){const g=t;g.revert?c=pI(n,e,g.path,s,o,l):c=hI(n,e,g.path,g.affectedTree,s,o,l)}else if(t.type===cn.LISTEN_COMPLETE)c=fI(n,e,t.path,s,l);else throw Gi("Unknown operation type: "+t.type);const m=l.getChanges();return cI(e,c,m),{viewCache:c,changes:m}}function cI(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const o=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=xd(n);(t.length>0||!n.eventCache.isFullyInitialized()||o&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(Uv(xd(e)))}}function qv(n,e,t,s,o,l){const c=e.eventCache;if(ml(s,t)!=null)return e;{let f,m;if(ge(t))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Qr(e),_=g instanceof se?g:se.EMPTY_NODE,v=lh(s,_);f=n.filter.updateFullNode(e.eventCache.getNode(),v,l)}else{const g=pl(s,Qr(e));f=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=pe(t);if(g===".priority"){F(kr(t)===1,"Can't have a priority with additional path components");const _=c.getNode();m=e.serverCache.getNode();const v=bg(s,t,_,m);v!=null?f=n.filter.updatePriority(_,v):f=c.getNode()}else{const _=Ae(t);let v;if(c.isCompleteForChild(g)){m=e.serverCache.getNode();const x=bg(s,t,c.getNode(),m);x!=null?v=c.getNode().getImmediateChild(g).updateChild(_,x):v=c.getNode().getImmediateChild(g)}else v=uh(s,g,e.serverCache);v!=null?f=n.filter.updateChild(c.getNode(),g,v,_,o,l):f=c.getNode()}}return Xs(e,f,c.isFullyInitialized()||ge(t),n.filter.filtersNodes())}}function gl(n,e,t,s,o,l,c,f){const m=e.serverCache;let g;const _=c?n.filter:n.filter.getIndexedFilter();if(ge(t))g=_.updateFullNode(m.getNode(),s,null);else if(_.filtersNodes()&&!m.isFiltered()){const b=m.getNode().updateChild(t,s);g=_.updateFullNode(m.getNode(),b,null)}else{const b=pe(t);if(!m.isCompleteForPath(t)&&kr(t)>1)return e;const A=Ae(t),P=m.getNode().getImmediateChild(b).updateChild(A,s);b===".priority"?g=_.updatePriority(m.getNode(),P):g=_.updateChild(m.getNode(),b,P,A,Gv,null)}const v=Bv(e,g,m.isFullyInitialized()||ge(t),_.filtersNodes()),x=new ch(o,v,l);return qv(n,v,t,o,x,f)}function Cd(n,e,t,s,o,l,c){const f=e.eventCache;let m,g;const _=new ch(o,e,l);if(ge(t))g=n.filter.updateFullNode(e.eventCache.getNode(),s,c),m=Xs(e,g,!0,n.filter.filtersNodes());else{const v=pe(t);if(v===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),s),m=Xs(e,g,f.isFullyInitialized(),f.isFiltered());else{const x=Ae(t),b=f.getNode().getImmediateChild(v);let A;if(ge(x))A=s;else{const O=_.getCompleteChild(v);O!=null?Jd(x)===".priority"&&O.getChild(Pv(x)).isEmpty()?A=O:A=O.updateChild(x,s):A=se.EMPTY_NODE}if(b.equals(A))m=e;else{const O=n.filter.updateChild(f.getNode(),v,A,x,_,c);m=Xs(e,O,f.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function Rg(n,e){return n.eventCache.isCompleteForChild(e)}function dI(n,e,t,s,o,l,c){let f=e;return s.foreach((m,g)=>{const _=He(t,m);Rg(e,pe(_))&&(f=Cd(n,f,_,g,o,l,c))}),s.foreach((m,g)=>{const _=He(t,m);Rg(e,pe(_))||(f=Cd(n,f,_,g,o,l,c))}),f}function Pg(n,e,t){return t.foreach((s,o)=>{e=e.updateChild(s,o)}),e}function Nd(n,e,t,s,o,l,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;ge(t)?g=s:g=new Pe(null).setTree(t,s);const _=e.serverCache.getNode();return g.children.inorderTraversal((v,x)=>{if(_.hasChild(v)){const b=e.serverCache.getNode().getImmediateChild(v),A=Pg(n,b,x);m=gl(n,m,new be(v),A,o,l,c,f)}}),g.children.inorderTraversal((v,x)=>{const b=!e.serverCache.isCompleteForChild(v)&&x.value===null;if(!_.hasChild(v)&&!b){const A=e.serverCache.getNode().getImmediateChild(v),O=Pg(n,A,x);m=gl(n,m,new be(v),O,o,l,c,f)}}),m}function hI(n,e,t,s,o,l,c){if(ml(o,t)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(ge(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return gl(n,e,t,m.getNode().getChild(t),o,l,f,c);if(ge(t)){let g=new Pe(null);return m.getNode().forEachChild(Ai,(_,v)=>{g=g.set(new be(_),v)}),Nd(n,e,t,g,o,l,f,c)}else return e}else{let g=new Pe(null);return s.foreach((_,v)=>{const x=He(t,_);m.isCompleteForPath(x)&&(g=g.set(_,m.getNode().getChild(x)))}),Nd(n,e,t,g,o,l,f,c)}}function fI(n,e,t,s,o){const l=e.serverCache,c=Bv(e,l.getNode(),l.isFullyInitialized()||ge(t),l.isFiltered());return qv(n,c,t,s,Gv,o)}function pI(n,e,t,s,o,l){let c;if(ml(s,t)!=null)return e;{const f=new ch(s,e,o),m=e.eventCache.getNode();let g;if(ge(t)||pe(t)===".priority"){let _;if(e.serverCache.isFullyInitialized())_=pl(s,Qr(e));else{const v=e.serverCache.getNode();F(v instanceof se,"serverChildren would be complete if leaf node"),_=lh(s,v)}_=_,g=n.filter.updateFullNode(m,_,l)}else{const _=pe(t);let v=uh(s,_,e.serverCache);v==null&&e.serverCache.isCompleteForChild(_)&&(v=m.getImmediateChild(_)),v!=null?g=n.filter.updateChild(m,_,v,Ae(t),f,l):e.eventCache.getNode().hasChild(_)?g=n.filter.updateChild(m,_,se.EMPTY_NODE,Ae(t),f,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=pl(s,Qr(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||ml(s,ke())!=null,Xs(e,g,c,n.filter.filtersNodes())}}/**
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
 */class mI{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,o=new nh(s.getIndex()),l=ON(s);this.processor_=aI(l);const c=t.serverCache,f=t.eventCache,m=o.updateFullNode(se.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(se.EMPTY_NODE,f.getNode(),null),_=new Yr(m,c.isFullyInitialized(),o.filtersNodes()),v=new Yr(g,f.isFullyInitialized(),l.filtersNodes());this.viewCache_=Dl(v,_),this.eventGenerator_=new BN(this.query_)}get query(){return this.query_}}function gI(n){return n.viewCache_.serverCache.getNode()}function yI(n,e){const t=Qr(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!ge(e)&&!t.getImmediateChild(pe(e)).isEmpty())?t.getChild(e):null}function Ag(n){return n.eventRegistrations_.length===0}function vI(n,e){n.eventRegistrations_.push(e)}function Og(n,e,t){const s=[];if(t){F(e==null,"A cancel should cancel all event registrations.");const o=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,o);c&&s.push(c)})}if(e){let o=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))o.push(c);else if(e.hasAnyCallback()){o=o.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=o}else n.eventRegistrations_=[];return s}function Dg(n,e,t,s){e.type===cn.MERGE&&e.source.queryId!==null&&(F(Qr(n.viewCache_),"We should always have a full cache before handling merges"),F(xd(n.viewCache_),"Missing event cache, even though we have a server cache"));const o=n.viewCache_,l=uI(n.processor_,o,e,t,s);return lI(n.processor_,l.viewCache),F(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,Kv(n,l.changes,l.viewCache.eventCache.getNode(),null)}function _I(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ve,(l,c)=>{s.push(Fi(l,c))}),t.isFullyInitialized()&&s.push(Uv(t.getNode())),Kv(n,s,t.getNode(),e)}function Kv(n,e,t,s){const o=s?[s]:n.eventRegistrations_;return zN(n.eventGenerator_,e,t,o)}/**
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
 */let yl;class wI{constructor(){this.views=new Map}}function xI(n){F(!yl,"__referenceConstructor has already been defined"),yl=n}function EI(){return F(yl,"Reference.ts has not been loaded"),yl}function kI(n){return n.views.size===0}function dh(n,e,t,s){const o=e.source.queryId;if(o!==null){const l=n.views.get(o);return F(l!=null,"SyncTree gave us an op for an invalid query."),Dg(l,e,t,s)}else{let l=[];for(const c of n.views.values())l=l.concat(Dg(c,e,t,s));return l}}function SI(n,e,t,s,o){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let f=pl(t,o?s:null),m=!1;f?m=!0:s instanceof se?(f=lh(t,s),m=!1):(f=se.EMPTY_NODE,m=!1);const g=Dl(new Yr(f,m,!1),new Yr(s,o,!1));return new mI(e,g)}return c}function CI(n,e,t,s,o,l){const c=SI(n,e,s,o,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),vI(c,t),_I(c,t)}function NI(n,e,t,s){const o=e._queryIdentifier,l=[];let c=[];const f=Sr(n);if(o==="default")for(const[m,g]of n.views.entries())c=c.concat(Og(g,t,s)),Ag(g)&&(n.views.delete(m),g.query._queryParams.loadsAllData()||l.push(g.query));else{const m=n.views.get(o);m&&(c=c.concat(Og(m,t,s)),Ag(m)&&(n.views.delete(o),m.query._queryParams.loadsAllData()||l.push(m.query)))}return f&&!Sr(n)&&l.push(new(EI())(e._repo,e._path)),{removed:l,events:c}}function Yv(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Oi(n,e){let t=null;for(const s of n.views.values())t=t||yI(s,e);return t}function Qv(n,e){if(e._queryParams.loadsAllData())return jl(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Xv(n,e){return Qv(n,e)!=null}function Sr(n){return jl(n)!=null}function jl(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let vl;function II(n){F(!vl,"__referenceConstructor has already been defined"),vl=n}function TI(){return F(vl,"Reference.ts has not been loaded"),vl}let bI=1;class jg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=rI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Jv(n,e,t,s,o){return $N(n.pendingWriteTree_,e,t,s,o),o?Yi(n,new Kr(ih(),e,t)):[]}function RI(n,e,t,s){GN(n.pendingWriteTree_,e,t,s);const o=Pe.fromObject(t);return Yi(n,new Bi(ih(),e,o))}function yr(n,e,t=!1){const s=qN(n.pendingWriteTree_,e);if(KN(n.pendingWriteTree_,e)){let l=new Pe(null);return s.snap!=null?l=l.set(ke(),!0):gt(s.children,c=>{l=l.set(new be(c),!0)}),Yi(n,new fl(s.path,l,t))}else return[]}function Ll(n,e,t){return Yi(n,new Kr(sh(),e,t))}function PI(n,e,t){const s=Pe.fromObject(t);return Yi(n,new Bi(sh(),e,s))}function AI(n,e){return Yi(n,new co(sh(),e))}function OI(n,e,t){const s=fh(n,t);if(s){const o=ph(s),l=o.path,c=o.queryId,f=Ut(l,e),m=new co(oh(c),f);return mh(n,l,m)}else return[]}function Id(n,e,t,s,o=!1){const l=e._path,c=n.syncPointTree_.get(l);let f=[];if(c&&(e._queryIdentifier==="default"||Xv(c,e))){const m=NI(c,e,t,s);kI(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=m.removed;if(f=m.events,!o){const _=g.findIndex(x=>x._queryParams.loadsAllData())!==-1,v=n.syncPointTree_.findOnPath(l,(x,b)=>Sr(b));if(_&&!v){const x=n.syncPointTree_.subtree(l);if(!x.isEmpty()){const b=LI(x);for(let A=0;A<b.length;++A){const O=b[A],P=O.query,G=t_(n,O);n.listenProvider_.startListening(Zs(P),_l(n,P),G.hashFn,G.onComplete)}}}!v&&g.length>0&&!s&&(_?n.listenProvider_.stopListening(Zs(e),null):g.forEach(x=>{const b=n.queryToTagMap.get(Ml(x));n.listenProvider_.stopListening(Zs(x),b)}))}MI(n,g)}return f}function DI(n,e,t,s){const o=fh(n,s);if(o!=null){const l=ph(o),c=l.path,f=l.queryId,m=Ut(c,e),g=new Kr(oh(f),m,t);return mh(n,c,g)}else return[]}function jI(n,e,t,s){const o=fh(n,s);if(o){const l=ph(o),c=l.path,f=l.queryId,m=Ut(c,e),g=Pe.fromObject(t),_=new Bi(oh(f),m,g);return mh(n,c,_)}else return[]}function Lg(n,e,t,s=!1){const o=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(o,(x,b)=>{const A=Ut(x,o);l=l||Oi(b,A),c=c||Sr(b)});let f=n.syncPointTree_.get(o);f?(c=c||Sr(f),l=l||Oi(f,ke())):(f=new wI,n.syncPointTree_=n.syncPointTree_.set(o,f));let m;l!=null?m=!0:(m=!1,l=se.EMPTY_NODE,n.syncPointTree_.subtree(o).foreachChild((b,A)=>{const O=Oi(A,ke());O&&(l=l.updateImmediateChild(b,O))}));const g=Xv(f,e);if(!g&&!e._queryParams.loadsAllData()){const x=Ml(e);F(!n.queryToTagMap.has(x),"View does not exist, but we have a tag");const b=UI();n.queryToTagMap.set(x,b),n.tagToQueryMap.set(b,x)}const _=ah(n.pendingWriteTree_,o);let v=CI(f,e,t,_,l,m);if(!g&&!c&&!s){const x=Qv(f,e);v=v.concat(FI(n,e,x))}return v}function hh(n,e,t){const o=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,f)=>{const m=Ut(c,e),g=Oi(f,m);if(g)return g});return Hv(o,e,l,t,!0)}function Yi(n,e){return Zv(e,n.syncPointTree_,null,ah(n.pendingWriteTree_,ke()))}function Zv(n,e,t,s){if(ge(n.path))return e_(n,e,t,s);{const o=e.get(ke());t==null&&o!=null&&(t=Oi(o,ke()));let l=[];const c=pe(n.path),f=n.operationForChild(c),m=e.children.get(c);if(m&&f){const g=t?t.getImmediateChild(c):null,_=Vv(s,c);l=l.concat(Zv(f,m,g,_))}return o&&(l=l.concat(dh(o,n,s,t))),l}}function e_(n,e,t,s){const o=e.get(ke());t==null&&o!=null&&(t=Oi(o,ke()));let l=[];return e.children.inorderTraversal((c,f)=>{const m=t?t.getImmediateChild(c):null,g=Vv(s,c),_=n.operationForChild(c);_&&(l=l.concat(e_(_,f,m,g)))}),o&&(l=l.concat(dh(o,n,s,t))),l}function t_(n,e){const t=e.query,s=_l(n,t);return{hashFn:()=>(gI(e)||se.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return s?OI(n,t._path,s):AI(n,t._path);{const l=PC(o,t);return Id(n,t,null,l)}}}}function _l(n,e){const t=Ml(e);return n.queryToTagMap.get(t)}function Ml(n){return n._path.toString()+"$"+n._queryIdentifier}function fh(n,e){return n.tagToQueryMap.get(e)}function ph(n){const e=n.indexOf("$");return F(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new be(n.substr(0,e))}}function mh(n,e,t){const s=n.syncPointTree_.get(e);F(s,"Missing sync point for query tag that we're tracking");const o=ah(n.pendingWriteTree_,e);return dh(s,t,o,null)}function LI(n){return n.fold((e,t,s)=>{if(t&&Sr(t))return[jl(t)];{let o=[];return t&&(o=Yv(t)),gt(s,(l,c)=>{o=o.concat(c)}),o}})}function Zs(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(TI())(n._repo,n._path):n}function MI(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const o=Ml(s),l=n.queryToTagMap.get(o);n.queryToTagMap.delete(o),n.tagToQueryMap.delete(l)}}}function UI(){return bI++}function FI(n,e,t){const s=e._path,o=_l(n,e),l=t_(n,t),c=n.listenProvider_.startListening(Zs(e),o,l.hashFn,l.onComplete),f=n.syncPointTree_.subtree(s);if(o)F(!Sr(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((g,_,v)=>{if(!ge(g)&&_&&Sr(_))return[jl(_).query];{let x=[];return _&&(x=x.concat(Yv(_).map(b=>b.query))),gt(v,(b,A)=>{x=x.concat(A)}),x}});for(let g=0;g<m.length;++g){const _=m[g];n.listenProvider_.stopListening(Zs(_),_l(n,_))}}return c}/**
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
 */class gh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new gh(t)}node(){return this.node_}}class yh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=He(this.path_,e);return new yh(this.syncTree_,t)}node(){return hh(this.syncTree_,this.path_)}}const BI=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mg=function(n,e,t){if(!n||typeof n!="object")return n;if(F(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return zI(n[".sv"],e,t);if(typeof n[".sv"]=="object")return WI(n[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},zI=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:F(!1,"Unexpected server value: "+n)}},WI=function(n,e,t){n.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&F(!1,"Unexpected increment value: "+s);const o=e.node();if(F(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return s;const c=o.getValue();return typeof c!="number"?s:c+s},n_=function(n,e,t,s){return vh(e,new yh(t,n),s)},r_=function(n,e,t){return vh(n,new gh(e),t)};function vh(n,e,t){const s=n.getPriority().val(),o=Mg(s,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,f=Mg(c.getValue(),e,t);return f!==c.getValue()||o!==c.getPriority().val()?new ut(f,dt(o)):n}else{const c=n;return l=c,o!==c.getPriority().val()&&(l=l.updatePriority(new ut(o))),c.forEachChild(Ve,(f,m)=>{const g=vh(m,e.getImmediateChild(f),t);g!==m&&(l=l.updateImmediateChild(f,g))}),l}}/**
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
 */class _h{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function wh(n,e){let t=e instanceof be?e:new be(e),s=n,o=pe(t);for(;o!==null;){const l=Mi(s.node.children,o)||{children:{},childCount:0};s=new _h(o,s,l),t=Ae(t),o=pe(t)}return s}function Qi(n){return n.node.value}function i_(n,e){n.node.value=e,Td(n)}function s_(n){return n.node.childCount>0}function HI(n){return Qi(n)===void 0&&!s_(n)}function Ul(n,e){gt(n.node.children,(t,s)=>{e(new _h(t,n,s))})}function o_(n,e,t,s){t&&e(n),Ul(n,o=>{o_(o,e,!0)})}function VI(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ko(n){return new be(n.parent===null?n.name:ko(n.parent)+"/"+n.name)}function Td(n){n.parent!==null&&$I(n.parent,n.name,n)}function $I(n,e,t){const s=HI(t),o=Cn(n.node.children,e);s&&o?(delete n.node.children[e],n.node.childCount--,Td(n)):!s&&!o&&(n.node.children[e]=t.node,n.node.childCount++,Td(n))}/**
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
 */const GI=/[\[\].#$\/\u0000-\u001F\u007F]/,qI=/[\[\].#$\u0000-\u001F\u007F]/,nd=10*1024*1024,xh=function(n){return typeof n=="string"&&n.length!==0&&!GI.test(n)},a_=function(n){return typeof n=="string"&&n.length!==0&&!qI.test(n)},KI=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),a_(n)},YI=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!qd(n)||n&&typeof n=="object"&&Cn(n,".sv")},l_=function(n,e,t,s){s&&e===void 0||Fl(Rl(n,"value"),e,t)},Fl=function(n,e,t){const s=t instanceof be?new dN(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Wr(s));if(typeof e=="function")throw new Error(n+"contains a function "+Wr(s)+" with contents = "+e.toString());if(qd(e))throw new Error(n+"contains "+e.toString()+" "+Wr(s));if(typeof e=="string"&&e.length>nd/3&&Pl(e)>nd)throw new Error(n+"contains a string greater than "+nd+" utf8 bytes "+Wr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(gt(e,(c,f)=>{if(c===".value")o=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!xh(c)))throw new Error(n+" contains an invalid key ("+c+") "+Wr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hN(s,c),Fl(n,f,s),fN(s)}),o&&l)throw new Error(n+' contains ".value" child '+Wr(s)+" in addition to actual children.")}},QI=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const l=oo(s);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!xh(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(cN);let o=null;for(t=0;t<e.length;t++){if(s=e[t],o!==null&&Jt(o,s))throw new Error(n+"contains a path "+o.toString()+" that is ancestor of another path "+s.toString());o=s}},XI=function(n,e,t,s){const o=Rl(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];gt(e,(c,f)=>{const m=new be(c);if(Fl(o,f,He(t,m)),Jd(m)===".priority"&&!YI(f))throw new Error(o+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(m)}),QI(o,l)},u_=function(n,e,t,s){if(!a_(t))throw new Error(Rl(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},JI=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),u_(n,e,t)},Eh=function(n,e){if(pe(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ZI=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!xh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!KI(t))throw new Error(Rl(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class eT{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bl(n,e){let t=null;for(let s=0;s<e.length;s++){const o=e[s],l=o.getPath();t!==null&&!Zd(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(o)}t&&n.eventLists_.push(t)}function c_(n,e,t){Bl(n,t),d_(n,s=>Zd(s,e))}function hn(n,e,t){Bl(n,t),d_(n,s=>Jt(s,e)||Jt(e,s))}function d_(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const o=n.eventLists_[s];if(o){const l=o.path;e(l)?(tT(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function tT(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ys&&mt("event: "+t.toString()),Ki(s)}}}/**
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
 */const nT="repo_interrupt",rT=25;class iT{constructor(e,t,s,o){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eT,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hl(),this.transactionQueueTree_=new _h,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sT(n,e,t){if(n.stats_=Qd(n.repoInfo_),n.forceRestClient_||jC())n.server_=new dl(n.repoInfo_,(s,o,l,c)=>{Ug(n,s,o,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Fg(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ht(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new zn(n.repoInfo_,e,(s,o,l,c)=>{Ug(n,s,o,l,c)},s=>{Fg(n,s)},s=>{oT(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=BC(n.repoInfo_,()=>new FN(n.stats_,n.server_)),n.infoData_=new DN,n.infoSyncTree_=new jg({startListening:(s,o,l,c)=>{let f=[];const m=n.infoData_.getNode(s._path);return m.isEmpty()||(f=Ll(n.infoSyncTree_,s._path,m),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),kh(n,"connected",!1),n.serverSyncTree_=new jg({startListening:(s,o,l,c)=>(n.server_.listen(s,l,o,(f,m)=>{const g=c(f,m);hn(n.eventQueue_,s._path,g)}),[]),stopListening:(s,o)=>{n.server_.unlisten(s,o)}})}function h_(n){const t=n.infoData_.getNode(new be(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function zl(n){return BI({timestamp:h_(n)})}function Ug(n,e,t,s,o){n.dataUpdateCount++;const l=new be(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(o)if(s){const m=sl(t,g=>dt(g));c=jI(n.serverSyncTree_,l,m,o)}else{const m=dt(t);c=DI(n.serverSyncTree_,l,m,o)}else if(s){const m=sl(t,g=>dt(g));c=PI(n.serverSyncTree_,l,m)}else{const m=dt(t);c=Ll(n.serverSyncTree_,l,m)}let f=l;c.length>0&&(f=Wi(n,l)),hn(n.eventQueue_,f,c)}function Fg(n,e){kh(n,"connected",e),e===!1&&uT(n)}function oT(n,e){gt(e,(t,s)=>{kh(n,t,s)})}function kh(n,e,t){const s=new be("/.info/"+e),o=dt(t);n.infoData_.updateSnapshot(s,o);const l=Ll(n.infoSyncTree_,s,o);hn(n.eventQueue_,s,l)}function Sh(n){return n.nextWriteId_++}function aT(n,e,t,s,o){Wl(n,"set",{path:e.toString(),value:t,priority:s});const l=zl(n),c=dt(t,s),f=hh(n.serverSyncTree_,e),m=r_(c,f,l),g=Sh(n),_=Jv(n.serverSyncTree_,e,m,g,!0);Bl(n.eventQueue_,_),n.server_.put(e.toString(),c.val(!0),(x,b)=>{const A=x==="ok";A||Rt("set at "+e+" failed: "+x);const O=yr(n.serverSyncTree_,g,!A);hn(n.eventQueue_,e,O),bd(n,o,x,b)});const v=Nh(n,e);Wi(n,v),hn(n.eventQueue_,v,[])}function lT(n,e,t,s){Wl(n,"update",{path:e.toString(),value:t});let o=!0;const l=zl(n),c={};if(gt(t,(f,m)=>{o=!1,c[f]=n_(He(e,f),dt(m),n.serverSyncTree_,l)}),o)mt("update() called with empty data.  Don't do anything."),bd(n,s,"ok",void 0);else{const f=Sh(n),m=RI(n.serverSyncTree_,e,c,f);Bl(n.eventQueue_,m),n.server_.merge(e.toString(),t,(g,_)=>{const v=g==="ok";v||Rt("update at "+e+" failed: "+g);const x=yr(n.serverSyncTree_,f,!v),b=x.length>0?Wi(n,e):e;hn(n.eventQueue_,b,x),bd(n,s,g,_)}),gt(t,g=>{const _=Nh(n,He(e,g));Wi(n,_)}),hn(n.eventQueue_,e,[])}}function uT(n){Wl(n,"onDisconnectEvents");const e=zl(n),t=hl();wd(n.onDisconnect_,ke(),(o,l)=>{const c=n_(o,l,n.serverSyncTree_,e);Fv(t,o,c)});let s=[];wd(t,ke(),(o,l)=>{s=s.concat(Ll(n.serverSyncTree_,o,l));const c=Nh(n,o);Wi(n,c)}),n.onDisconnect_=hl(),hn(n.eventQueue_,ke(),s)}function cT(n,e,t){let s;pe(e._path)===".info"?s=Lg(n.infoSyncTree_,e,t):s=Lg(n.serverSyncTree_,e,t),c_(n.eventQueue_,e._path,s)}function dT(n,e,t){let s;pe(e._path)===".info"?s=Id(n.infoSyncTree_,e,t):s=Id(n.serverSyncTree_,e,t),c_(n.eventQueue_,e._path,s)}function hT(n){n.persistentConnection_&&n.persistentConnection_.interrupt(nT)}function Wl(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),mt(t,...e)}function bd(n,e,t,s){e&&Ki(()=>{if(t==="ok")e(null);else{const o=(t||"error").toUpperCase();let l=o;s&&(l+=": "+s);const c=new Error(l);c.code=o,e(c)}})}function f_(n,e,t){return hh(n.serverSyncTree_,e,t)||se.EMPTY_NODE}function Ch(n,e=n.transactionQueueTree_){if(e||Hl(n,e),Qi(e)){const t=m_(n,e);F(t.length>0,"Sending zero length transaction queue"),t.every(o=>o.status===0)&&fT(n,ko(e),t)}else s_(e)&&Ul(e,t=>{Ch(n,t)})}function fT(n,e,t){const s=t.map(g=>g.currentWriteId),o=f_(n,e,s);let l=o;const c=o.hash();for(let g=0;g<t.length;g++){const _=t[g];F(_.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),_.status=1,_.retryCount++;const v=Ut(e,_.path);l=l.updateChild(v,_.currentOutputSnapshotRaw)}const f=l.val(!0),m=e;n.server_.put(m.toString(),f,g=>{Wl(n,"transaction put response",{path:m.toString(),status:g});let _=[];if(g==="ok"){const v=[];for(let x=0;x<t.length;x++)t[x].status=2,_=_.concat(yr(n.serverSyncTree_,t[x].currentWriteId)),t[x].onComplete&&v.push(()=>t[x].onComplete(null,!0,t[x].currentOutputSnapshotResolved)),t[x].unwatcher();Hl(n,wh(n.transactionQueueTree_,e)),Ch(n,n.transactionQueueTree_),hn(n.eventQueue_,e,_);for(let x=0;x<v.length;x++)Ki(v[x])}else{if(g==="datastale")for(let v=0;v<t.length;v++)t[v].status===3?t[v].status=4:t[v].status=0;else{Rt("transaction at "+m.toString()+" failed: "+g);for(let v=0;v<t.length;v++)t[v].status=4,t[v].abortReason=g}Wi(n,e)}},c)}function Wi(n,e){const t=p_(n,e),s=ko(t),o=m_(n,t);return pT(n,o,s),s}function pT(n,e,t){if(e.length===0)return;const s=[];let o=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],g=Ut(t,m.path);let _=!1,v;if(F(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)_=!0,v=m.abortReason,o=o.concat(yr(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=rT)_=!0,v="maxretry",o=o.concat(yr(n.serverSyncTree_,m.currentWriteId,!0));else{const x=f_(n,m.path,c);m.currentInputSnapshot=x;const b=e[f].update(x.val());if(b!==void 0){Fl("transaction failed: Data returned ",b,m.path);let A=dt(b);typeof b=="object"&&b!=null&&Cn(b,".priority")||(A=A.updatePriority(x.getPriority()));const P=m.currentWriteId,G=zl(n),K=r_(A,x,G);m.currentOutputSnapshotRaw=A,m.currentOutputSnapshotResolved=K,m.currentWriteId=Sh(n),c.splice(c.indexOf(P),1),o=o.concat(Jv(n.serverSyncTree_,m.path,K,m.currentWriteId,m.applyLocally)),o=o.concat(yr(n.serverSyncTree_,P,!0))}else _=!0,v="nodata",o=o.concat(yr(n.serverSyncTree_,m.currentWriteId,!0))}hn(n.eventQueue_,t,o),o=[],_&&(e[f].status=2,(function(x){setTimeout(x,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(v==="nodata"?s.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):s.push(()=>e[f].onComplete(new Error(v),!1,null))))}Hl(n,n.transactionQueueTree_);for(let f=0;f<s.length;f++)Ki(s[f]);Ch(n,n.transactionQueueTree_)}function p_(n,e){let t,s=n.transactionQueueTree_;for(t=pe(e);t!==null&&Qi(s)===void 0;)s=wh(s,t),e=Ae(e),t=pe(e);return s}function m_(n,e){const t=[];return g_(n,e,t),t.sort((s,o)=>s.order-o.order),t}function g_(n,e,t){const s=Qi(e);if(s)for(let o=0;o<s.length;o++)t.push(s[o]);Ul(e,o=>{g_(n,o,t)})}function Hl(n,e){const t=Qi(e);if(t){let s=0;for(let o=0;o<t.length;o++)t[o].status!==2&&(t[s]=t[o],s++);t.length=s,i_(e,t.length>0?t:void 0)}Ul(e,s=>{Hl(n,s)})}function Nh(n,e){const t=ko(p_(n,e)),s=wh(n.transactionQueueTree_,e);return VI(s,o=>{rd(n,o)}),rd(n,s),o_(s,o=>{rd(n,o)}),t}function rd(n,e){const t=Qi(e);if(t){const s=[];let o=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(F(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(F(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),o=o.concat(yr(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?i_(e,void 0):t.length=l+1,hn(n.eventQueue_,ko(e),o);for(let c=0;c<s.length;c++)Ki(s[c])}}/**
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
 */function mT(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let o=t[s];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function gT(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Rt(`Invalid query segment '${t}' in query '${n}'`)}return e}const Bg=function(n,e){const t=yT(n),s=t.namespace;t.domain==="firebase.com"&&Hn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Hn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||NC();const o=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ev(t.host,t.secure,s,o,e,"",s!==t.subdomain),path:new be(t.pathString)}},yT=function(n){let e="",t="",s="",o="",l="",c=!0,f="https",m=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(f=n.substring(0,g-1),n=n.substring(g+2));let _=n.indexOf("/");_===-1&&(_=n.length);let v=n.indexOf("?");v===-1&&(v=n.length),e=n.substring(0,Math.min(_,v)),_<v&&(o=mT(n.substring(_,v)));const x=gT(n.substring(Math.min(n.length,v)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const b=e.slice(0,g);if(b.toLowerCase()==="localhost")t="localhost";else if(b.split(".").length<=2)t=b;else{const A=e.indexOf(".");s=e.substring(0,A).toLowerCase(),t=e.substring(A+1),l=s}"ns"in x&&(l=x.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:c,scheme:f,pathString:o,namespace:l}};/**
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
 */const zg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",vT=(function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=zg.charAt(t%64),t=Math.floor(t/64);F(t===0,"Cannot push at time == 0");let c=l.join("");if(s){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)c+=zg.charAt(e[o]);return F(c.length===20,"nextPushId: Length should be 20."),c}})();/**
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
 */class _T{constructor(e,t,s,o){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ht(this.snapshot.exportVal())}}class wT{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class xT{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ih{constructor(e,t,s,o){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=o}get key(){return ge(this._path)?null:Jd(this._path)}get ref(){return new Cr(this._repo,this._path)}get _queryIdentifier(){const e=Cg(this._queryParams),t=Kd(e);return t==="{}"?"default":t}get _queryObject(){return Cg(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof Ih))return!1;const t=this._repo===e._repo,s=Zd(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return t&&s&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+uN(this._path)}}class Cr extends Ih{constructor(e,t){super(e,t,new rh,!1)}get parent(){const e=Pv(this._path);return e===null?null:new Cr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class wl{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new be(e),s=ho(this.ref,e);return new wl(this._node.getChild(t),s,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,o)=>e(new wl(o,ho(this.ref,s),Ve)))}hasChild(e){const t=new be(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Tt(n,e){return n=rt(n),n._checkNotDeleted("ref"),e!==void 0?ho(n._root,e):n._root}function ho(n,e){return n=rt(n),pe(n._path)===null?JI("child","path",e):u_("child","path",e),new Cr(n._repo,He(n._path,e))}function Ba(n,e){n=rt(n),Eh("push",n._path),l_("push",e,n._path,!0);const t=h_(n._repo),s=vT(t),o=ho(n,s),l=ho(n,s);let c;return c=Promise.resolve(l),o.then=c.then.bind(c),o.catch=c.then.bind(c,void 0),o}function ET(n){return Eh("remove",n._path),qs(n,null)}function qs(n,e){n=rt(n),Eh("set",n._path),l_("set",e,n._path,!1);const t=new vo;return aT(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Hs(n,e){XI("update",e,n._path);const t=new vo;return lT(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Th{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new _T("value",this,new wl(e.snapshotNode,new Cr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wT(this,e,t):null}matches(e){return e instanceof Th?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function kT(n,e,t,s,o){const l=new xT(t,void 0),c=new Th(l);return cT(n._repo,n,c),()=>dT(n._repo,n,c)}function Ks(n,e,t,s){return kT(n,"value",e)}xI(Cr);II(Cr);/**
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
 */const ST="FIREBASE_DATABASE_EMULATOR_HOST",Rd={};let CT=!1;function NT(n,e,t,s){n.repoInfo_=new Ev(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function IT(n,e,t,s,o){let l=s||n.options.databaseURL;l===void 0&&(n.options.projectId||Hn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=Bg(l,o),f=c.repoInfo,m;typeof process<"u"&&ag&&(m=ag[ST]),m?(l=`http://${m}?ns=${f.namespace}`,c=Bg(l,o),f=c.repoInfo):c.repoInfo.secure;const g=new MC(n.name,n.options,e);ZI("Invalid Firebase Database URL",c),ge(c.path)||Hn("Database URL must point to the root of a Firebase Database (not including a child path).");const _=bT(f,n,g,new LC(n.name,t));return new RT(_,n)}function TT(n,e){const t=Rd[e];(!t||t[n.key]!==n)&&Hn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),hT(n),delete t[n.key]}function bT(n,e,t,s){let o=Rd[e.name];o||(o={},Rd[e.name]=o);let l=o[n.toURLString()];return l&&Hn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new iT(n,CT,t,s),o[n.toURLString()]=l,l}class RT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cr(this._repo,ke())),this._rootInternal}_delete(){return this._rootInternal!==null&&(TT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Hn("Cannot call "+e+" on a deleted database.")}}function PT(n=Gd(),e){const t=Al(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Xy("database");s&&AT(t,...s)}return t}function AT(n,e,t,s={}){n=rt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Hn("Cannot call useEmulator() after instance has already been initialized.");const o=n._repoInternal;let l;if(o.repoInfo_.nodeAdmin)s.mockUserToken&&Hn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new Xa(Xa.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:ev(s.mockUserToken,n.app.options.projectId);l=new Xa(c)}NT(o,e,t,l)}/**
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
 */function OT(n){wC(ei),Gr(new Er("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return IT(s,o,l,t)},"PUBLIC").setMultipleInstances(!0)),wn(lg,ug,n),wn(lg,ug,"esm2017")}zn.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};zn.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};OT();var DT="firebase",jT="10.12.4";/**
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
 */wn(DT,jT,"app");function bh(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(n);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(n,s[o])&&(t[s[o]]=n[s[o]]);return t}function y_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LT=y_,v_=new _o("auth","Firebase",y_());/**
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
 */const xl=new Vd("@firebase/auth");function MT(n,...e){xl.logLevel<=Te.WARN&&xl.warn(`Auth (${ei}): ${n}`,...e)}function Ja(n,...e){xl.logLevel<=Te.ERROR&&xl.error(`Auth (${ei}): ${n}`,...e)}/**
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
 */function fn(n,...e){throw Rh(n,...e)}function xn(n,...e){return Rh(n,...e)}function __(n,e,t){const s=Object.assign(Object.assign({},LT()),{[e]:t});return new _o("auth","Firebase",s).create(e,{appName:n.name})}function xr(n){return __(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Rh(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return v_.create(n,...e)}function ie(n,e,...t){if(!n)throw Rh(e,...t)}function Mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ja(e),new Error(e)}function Vn(n,e){n||Mn(e)}/**
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
 */function Pd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function UT(){return Wg()==="http:"||Wg()==="https:"}function Wg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function FT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UT()||Zk()||"connection"in navigator)?navigator.onLine:!0}function BT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class So{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vn(t>e,"Short delay should be less than long delay!"),this.isMobile=Hd()||tv()}get(){return FT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ph(n,e){Vn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class w_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const WT=new So(3e4,6e4);function ri(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nr(n,e,t,s,o={}){return x_(n,o,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const f=qi(Object.assign({key:n.config.apiKey},c)).slice(1),m=await n._getAdditionalHeaders();return m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode),w_.fetch()(E_(n,n.config.apiHost,t,f),Object.assign({method:e,headers:m,referrerPolicy:"no-referrer"},l))})}async function x_(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},zT),e);try{const o=new VT(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw za(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[m,g]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw za(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw za(n,"user-disabled",c);const _=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw __(n,_,g);fn(n,_)}}catch(o){if(o instanceof $n)throw o;fn(n,"network-request-failed",{message:String(o)})}}async function Vl(n,e,t,s,o={}){const l=await Nr(n,e,t,s,o);return"mfaPendingCredential"in l&&fn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function E_(n,e,t,s){const o=`${e}${t}?${s}`;return n.config.emulator?Ph(n.config,o):`${n.config.apiScheme}://${o}`}function HT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(xn(this.auth,"network-request-failed")),WT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function za(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=xn(n,e,s);return o.customData._tokenResponse=t,o}function Hg(n){return n!==void 0&&n.enterprise!==void 0}class $T{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return HT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function GT(n,e){return Nr(n,"GET","/v2/recaptchaConfig",ri(n,e))}/**
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
 */async function qT(n,e){return Nr(n,"POST","/v1/accounts:delete",e)}async function k_(n,e){return Nr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function eo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function KT(n,e=!1){const t=rt(n),s=await t.getIdToken(e),o=Ah(s);ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:eo(id(o.auth_time)),issuedAtTime:eo(id(o.iat)),expirationTime:eo(id(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function id(n){return Number(n)*1e3}function Ah(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Ja("JWT malformed, contained fewer than 3 sections"),null;try{const o=il(t);return o?JSON.parse(o):(Ja("Failed to decode base64 JWT payload"),null)}catch(o){return Ja("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Vg(n){const e=Ah(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fo(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof $n&&YT(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function YT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class QT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ad{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=eo(this.lastLoginAt),this.creationTime=eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function El(n){var e;const t=n.auth,s=await n.getIdToken(),o=await fo(n,k_(t,{idToken:s}));ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?S_(l.providerUserInfo):[],f=JT(n.providerData,c),m=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(f!=null&&f.length),_=m?g:!1,v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Ad(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,v)}async function XT(n){const e=rt(n);await El(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JT(n,e){return[...n.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function S_(n){return n.map(e=>{var{providerId:t}=e,s=bh(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function ZT(n,e){const t=await x_(n,{},async()=>{const s=qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=E_(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",w_.fetch()(c,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function e1(n,e){return Nr(n,"POST","/v2/accounts:revokeToken",ri(n,e))}/**
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
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=Vg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await ZT(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,c=new Di;return s&&(ie(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),o&&(ie(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
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
 */function dr(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Un{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=bh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Ad(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await fo(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return KT(this,e)}reload(){return XT(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await El(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(xr(this.auth));const e=await this.getIdToken();return await fo(this,qT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,c,f,m,g,_;const v=(s=t.displayName)!==null&&s!==void 0?s:void 0,x=(o=t.email)!==null&&o!==void 0?o:void 0,b=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,A=(c=t.photoURL)!==null&&c!==void 0?c:void 0,O=(f=t.tenantId)!==null&&f!==void 0?f:void 0,P=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,G=(g=t.createdAt)!==null&&g!==void 0?g:void 0,K=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:B,emailVerified:V,isAnonymous:te,providerData:ne,stsTokenManager:ce}=t;ie(B&&ce,e,"internal-error");const de=Di.fromJSON(this.name,ce);ie(typeof B=="string",e,"internal-error"),dr(v,e.name),dr(x,e.name),ie(typeof V=="boolean",e,"internal-error"),ie(typeof te=="boolean",e,"internal-error"),dr(b,e.name),dr(A,e.name),dr(O,e.name),dr(P,e.name),dr(G,e.name),dr(K,e.name);const Ne=new Un({uid:B,auth:e,email:x,emailVerified:V,displayName:v,isAnonymous:te,photoURL:A,phoneNumber:b,tenantId:O,stsTokenManager:de,createdAt:G,lastLoginAt:K});return ne&&Array.isArray(ne)&&(Ne.providerData=ne.map(he=>Object.assign({},he))),P&&(Ne._redirectEventId=P),Ne}static async _fromIdTokenResponse(e,t,s=!1){const o=new Di;o.updateFromServerResponse(t);const l=new Un({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await El(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?S_(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new Di;f.updateFromIdToken(s);const m=new Un({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Ad(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
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
 */const $g=new Map;function Fn(n){Vn(n instanceof Function,"Expected a class definition");let e=$g.get(n);return e?(Vn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,$g.set(n,e),e)}/**
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
 */class C_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}C_.type="NONE";const Gg=C_;/**
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
 */function Za(n,e,t){return`firebase:${n}:${e}:${t}`}class ji{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Za(this.userKey,o.apiKey,l),this.fullPersistenceKey=Za("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ji(Fn(Gg),e,s);const o=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=o[0]||Fn(Gg);const c=Za(s,e.config.apiKey,e.name);let f=null;for(const g of t)try{const _=await g._get(c);if(_){const v=Un._fromJSON(e,_);g!==l&&(f=v),l=g;break}}catch{}const m=o.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new ji(l,e,s):(l=m[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new ji(l,e,s))}}/**
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
 */function qg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(T_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R_(e))return"Blackberry";if(P_(e))return"Webos";if(Oh(e))return"Safari";if((e.includes("chrome/")||I_(e))&&!e.includes("edge/"))return"Chrome";if(b_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function N_(n=xt()){return/firefox\//i.test(n)}function Oh(n=xt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I_(n=xt()){return/crios\//i.test(n)}function T_(n=xt()){return/iemobile/i.test(n)}function b_(n=xt()){return/android/i.test(n)}function R_(n=xt()){return/blackberry/i.test(n)}function P_(n=xt()){return/webos/i.test(n)}function $l(n=xt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function t1(n=xt()){var e;return $l(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function n1(){return eS()&&document.documentMode===10}function A_(n=xt()){return $l(n)||b_(n)||P_(n)||R_(n)||/windows phone/i.test(n)||T_(n)}function r1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function O_(n,e=[]){let t;switch(n){case"Browser":t=qg(xt());break;case"Worker":t=`${qg(xt())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ei}/${s}`}/**
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
 */class i1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,f)=>{try{const m=e(l);c(m)}catch(m){f(m)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function s1(n,e={}){return Nr(n,"GET","/v2/passwordPolicy",ri(n,e))}/**
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
 */const o1=6;class a1{constructor(e){var t,s,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:o1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,c,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class l1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new i1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fn(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await k_(this,{idToken:e}),s=await Un._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(jn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&(m!=null&&m.user)&&(o=m.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await El(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(xr(this));const t=e?rt(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await s1(this),t=new a1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await e1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fn(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[Fn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,o);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&MT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Xi(n){return rt(n)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=cS(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u1(n){Gl=n}function D_(n){return Gl.loadJS(n)}function c1(){return Gl.recaptchaEnterpriseScript}function d1(){return Gl.gapiScript}function h1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const f1="recaptcha-enterprise",p1="NO_RECAPTCHA";class m1{constructor(e){this.type=f1,this.auth=Xi(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{GT(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new $T(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{f(m)})})}function o(l,c,f){const m=window.grecaptcha;Hg(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(p1)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{s(this.auth).then(f=>{if(!t&&Hg(window.grecaptcha))o(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=c1();m.length!==0&&(m+=f),D_(m).then(()=>{o(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function Yg(n,e,t,s=!1){const o=new m1(n);let l;try{l=await o.verify(t)}catch{l=await o.verify(t,!0)}const c=Object.assign({},e);return s?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Qg(n,e,t,s){var o;if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Yg(n,e,t,t==="getOobCode");return s(n,l)}else return s(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Yg(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(l)})}/**
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
 */function g1(n,e){const t=Al(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(ol(l,e??{}))return o;fn(o,"already-initialized")}return t.initialize({options:e})}function y1(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Fn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function v1(n,e,t){const s=Xi(n);ie(s._canInitEmulator,s,"emulator-config-failed"),ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=j_(e),{host:c,port:f}=_1(e),m=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${c}${m}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),w1()}function j_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function _1(n){const e=j_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Xg(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:Xg(c)}}}function Xg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function w1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Dh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,t){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function x1(n,e){return Nr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function E1(n,e){return Vl(n,"POST","/v1/accounts:signInWithPassword",ri(n,e))}/**
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
 */async function k1(n,e){return Vl(n,"POST","/v1/accounts:signInWithEmailLink",ri(n,e))}async function S1(n,e){return Vl(n,"POST","/v1/accounts:signInWithEmailLink",ri(n,e))}/**
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
 */class po extends Dh{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new po(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new po(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qg(e,t,"signInWithPassword",E1);case"emailLink":return k1(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qg(e,s,"signUpPassword",x1);case"emailLink":return S1(e,{idToken:t,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Li(n,e){return Vl(n,"POST","/v1/accounts:signInWithIdp",ri(n,e))}/**
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
 */const C1="http://localhost";class Xr extends Dh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=bh(t,["providerId","signInMethod"]);if(!s||!o)return null;const c=new Xr(s,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Li(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Li(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Li(e,t)}buildRequest(){const e={requestUri:C1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qi(t)}return e}}/**
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
 */function N1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function I1(n){const e=$s(Gs(n)).link,t=e?$s(Gs(e)).deep_link_id:null,s=$s(Gs(n)).deep_link_id;return(s?$s(Gs(s)).link:null)||s||t||e||n}class jh{constructor(e){var t,s,o,l,c,f;const m=$s(Gs(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,_=(s=m.oobCode)!==null&&s!==void 0?s:null,v=N1((o=m.mode)!==null&&o!==void 0?o:null);ie(g&&_&&v,"argument-error"),this.apiKey=g,this.operation=v,this.code=_,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=I1(e);try{return new jh(t)}catch{return null}}}/**
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
 */class Ji{constructor(){this.providerId=Ji.PROVIDER_ID}static credential(e,t){return po._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=jh.parseLink(t);return ie(s,"argument-error"),po._fromEmailAndCode(e,s.code,s.tenantId)}}Ji.PROVIDER_ID="password";Ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class L_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Co extends L_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class hr extends Co{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
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
 */class fr extends Co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return fr.credential(t,s)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
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
 */class pr extends Co{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.GITHUB_SIGN_IN_METHOD="github.com";pr.PROVIDER_ID="github.com";/**
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
 */class mr extends Co{constructor(){super("twitter.com")}static credential(e,t){return Xr._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return mr.credential(t,s)}catch{return null}}}mr.TWITTER_SIGN_IN_METHOD="twitter.com";mr.PROVIDER_ID="twitter.com";/**
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
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Un._fromIdTokenResponse(e,s,o),c=Jg(s);return new Hi({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Jg(s);return new Hi({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Jg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class kl extends $n{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,kl.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new kl(e,t,s,o)}}function M_(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?kl._fromErrorAndOperation(n,l,e,s):l})}async function T1(n,e,t=!1){const s=await fo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Hi._forOperation(n,"link",s)}/**
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
 */async function b1(n,e,t=!1){const{auth:s}=n;if(jn(s.app))return Promise.reject(xr(s));const o="reauthenticate";try{const l=await fo(n,M_(s,o,e,n),t);ie(l.idToken,s,"internal-error");const c=Ah(l.idToken);ie(c,s,"internal-error");const{sub:f}=c;return ie(n.uid===f,s,"user-mismatch"),Hi._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&fn(s,"user-mismatch"),l}}/**
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
 */async function U_(n,e,t=!1){if(jn(n.app))return Promise.reject(xr(n));const s="signIn",o=await M_(n,s,e),l=await Hi._fromIdTokenResponse(n,s,o);return t||await n._updateCurrentUser(l.user),l}async function R1(n,e){return U_(Xi(n),e)}/**
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
 */async function P1(n){const e=Xi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function A1(n,e,t){return jn(n.app)?Promise.reject(xr(n)):R1(rt(n),Ji.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&P1(n),s})}function O1(n,e,t,s){return rt(n).onIdTokenChanged(e,t,s)}function D1(n,e,t){return rt(n).beforeAuthStateChanged(e,t)}function j1(n,e,t,s){return rt(n).onAuthStateChanged(e,t,s)}function L1(n){return rt(n).signOut()}const Sl="__sak";/**
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
 */class F_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sl,"1"),this.storage.removeItem(Sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function M1(){const n=xt();return Oh(n)||$l(n)}const U1=1e3,F1=10;class B_ extends F_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=M1()&&r1(),this.fallbackToPolling=A_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,m)=>{this.notifyListeners(c,m)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(s);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const o=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);n1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,F1):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},U1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}B_.type="LOCAL";const B1=B_;/**
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
 */class z_ extends F_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}z_.type="SESSION";const W_=z_;/**
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
 */function z1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ql(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(c).map(async g=>g(t.origin,l)),m=await z1(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ql.receivers=[];/**
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
 */function Lh(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class W1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((f,m)=>{const g=Lh("",20);o.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},s);c={messageChannel:o,onMessage(v){const x=v;if(x.data.eventId===g)switch(x.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(x.data.response);break;default:clearTimeout(_),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function En(){return window}function H1(n){En().location.href=n}/**
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
 */function H_(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function V1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $1(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function G1(){return H_()?self:null}/**
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
 */const V_="firebaseLocalStorageDb",q1=1,Cl="firebaseLocalStorage",$_="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Kl(n,e){return n.transaction([Cl],e?"readwrite":"readonly").objectStore(Cl)}function K1(){const n=indexedDB.deleteDatabase(V_);return new No(n).toPromise()}function Od(){const n=indexedDB.open(V_,q1);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Cl,{keyPath:$_})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Cl)?e(s):(s.close(),await K1(),e(await Od()))})})}async function Zg(n,e,t){const s=Kl(n,!0).put({[$_]:e,value:t});return new No(s).toPromise()}async function Y1(n,e){const t=Kl(n,!1).get(e),s=await new No(t).toPromise();return s===void 0?null:s.value}function ey(n,e){const t=Kl(n,!0).delete(e);return new No(t).toPromise()}const Q1=800,X1=3;class G_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Od(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>X1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return H_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ql._getInstance(G1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await V1(),!this.activeServiceWorker)return;this.sender=new W1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Od();return await Zg(e,Sl,"1"),await ey(e,Sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Y1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ey(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Kl(o,!1).getAll();return new No(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}G_.type="LOCAL";const J1=G_;new So(3e4,6e4);/**
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
 */function Z1(n,e){return e?Fn(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Mh extends Dh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Li(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eb(n){return U_(n.auth,new Mh(n),n.bypassAuthState)}function tb(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),b1(t,new Mh(n),n.bypassAuthState)}async function nb(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),T1(t,new Mh(n),n.bypassAuthState)}/**
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
 */class q_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eb;case"linkViaPopup":case"linkViaRedirect":return nb;case"reauthViaPopup":case"reauthViaRedirect":return tb;default:fn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rb=new So(2e3,1e4);class Ri extends q_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rb.get())};e()}}Ri.currentPopupAction=null;/**
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
 */const ib="pendingRedirect",el=new Map;class sb extends q_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{const s=await ob(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ob(n,e){const t=ub(e),s=lb(n);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function ab(n,e){el.set(n._key(),e)}function lb(n){return Fn(n._redirectPersistence)}function ub(n){return Za(ib,n.config.apiKey,n.name)}async function cb(n,e,t=!1){if(jn(n.app))return Promise.reject(xr(n));const s=Xi(n),o=Z1(s,e),c=await new sb(s,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const db=600*1e3;class hb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!K_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(xn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=db&&this.cachedEventUids.clear(),this.cachedEventUids.has(ty(e))}saveEventToCache(e){this.cachedEventUids.add(ty(e)),this.lastProcessedEventTime=Date.now()}}function ty(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function K_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fb(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return K_(n);default:return!1}}/**
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
 */async function pb(n,e={}){return Nr(n,"GET","/v1/projects",e)}/**
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
 */const mb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gb=/^https?/;async function yb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pb(n);for(const t of e)try{if(vb(t))return}catch{}fn(n,"unauthorized-domain")}function vb(n){const e=Pd(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!gb.test(t))return!1;if(mb.test(n))return s===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const _b=new So(3e4,6e4);function ny(){const n=En().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function wb(n){return new Promise((e,t)=>{var s,o,l;function c(){ny(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ny(),t(xn(n,"network-request-failed"))},timeout:_b.get()})}if(!((o=(s=En().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=En().gapi)===null||l===void 0)&&l.load)c();else{const f=h1("iframefcb");return En()[f]=()=>{gapi.load?c():t(xn(n,"network-request-failed"))},D_(`${d1()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw tl=null,e})}let tl=null;function xb(n){return tl=tl||wb(n),tl}/**
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
 */const Eb=new So(5e3,15e3),kb="__/auth/iframe",Sb="emulator/auth/iframe",Cb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ib(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ph(e,Sb):`https://${n.config.authDomain}/${kb}`,s={apiKey:e.apiKey,appName:n.name,v:ei},o=Nb.get(n.config.apiHost);o&&(s.eid=o);const l=n._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${qi(s).slice(1)}`}async function Tb(n){const e=await xb(n),t=En().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:Ib(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cb,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const c=xn(n,"network-request-failed"),f=En().setTimeout(()=>{l(c)},Eb.get());function m(){En().clearTimeout(f),o(s)}s.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const bb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rb=500,Pb=600,Ab="_blank",Ob="http://localhost";class ry{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Db(n,e,t,s=Rb,o=Pb){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const m=Object.assign(Object.assign({},bb),{width:s.toString(),height:o.toString(),top:l,left:c}),g=xt().toLowerCase();t&&(f=I_(g)?Ab:t),N_(g)&&(e=e||Ob,m.scrollbars="yes");const _=Object.entries(m).reduce((x,[b,A])=>`${x}${b}=${A},`,"");if(t1(g)&&f!=="_self")return jb(e||"",f),new ry(null);const v=window.open(e||"",f,_);ie(v,n,"popup-blocked");try{v.focus()}catch{}return new ry(v)}function jb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Lb="__/auth/handler",Mb="emulator/auth/handler",Ub=encodeURIComponent("fac");async function iy(n,e,t,s,o,l){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:ei,eventId:o};if(e instanceof L_){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",dd(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,v]of Object.entries({}))c[_]=v}if(e instanceof Co){const _=e.getScopes().filter(v=>v!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const _ of Object.keys(f))f[_]===void 0&&delete f[_];const m=await n._getAppCheckToken(),g=m?`#${Ub}=${encodeURIComponent(m)}`:"";return`${Fb(n)}?${qi(f).slice(1)}${g}`}function Fb({config:n}){return n.emulator?Ph(n,Mb):`https://${n.authDomain}/${Lb}`}/**
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
 */const sd="webStorageSupport";class Bb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=W_,this._completeRedirectFn=cb,this._overrideRedirectResult=ab}async _openPopup(e,t,s,o){var l;Vn((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await iy(e,t,s,Pd(),o);return Db(e,c,Lh())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await iy(e,t,s,Pd(),o);return H1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Vn(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Tb(e),s=new hb(e);return t.register("authEvent",o=>(ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sd,{type:sd},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[sd];c!==void 0&&t(!!c),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return A_()||Oh()||$l()}}const zb=Bb;var sy="@firebase/auth",oy="1.7.5";/**
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
 */class Wb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Hb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vb(n){Gr(new Er("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=s.options;ie(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O_(n)},g=new l1(s,o,l,m);return y1(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Gr(new Er("auth-internal",e=>{const t=Xi(e.getProvider("auth").getImmediate());return(s=>new Wb(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(sy,oy,Hb(n)),wn(sy,oy,"esm2017")}/**
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
 */const $b=300,Gb=Zy("authIdTokenMaxAge")||$b;let ay=null;const qb=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Gb)return;const o=t==null?void 0:t.token;ay!==o&&(ay=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Kb(n=Gd()){const e=Al(n,"auth");if(e.isInitialized())return e.getImmediate();const t=g1(n,{popupRedirectResolver:zb,persistence:[J1,B1,W_]}),s=Zy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=qb(l.toString());D1(t,c,()=>c(t.currentUser)),O1(t,f=>c(f))}}const o=Qy("auth");return o&&v1(t,`http://${o}`),t}function Yb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}u1({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=o=>{const l=xn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",Yb().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vb("Browser");/**
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
 */const Y_="firebasestorage.googleapis.com",Q_="storageBucket",Qb=120*1e3,Xb=600*1e3;/**
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
 */class Ge extends $n{constructor(e,t,s=0){super(od(e),`Firebase Storage: ${t} (${od(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return od(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function od(n){return"storage/"+n}function Uh(){const n="An unknown error occurred, please check the error payload for server response.";return new Ge($e.UNKNOWN,n)}function Jb(n){return new Ge($e.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Zb(n){return new Ge($e.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eR(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ge($e.UNAUTHENTICATED,n)}function tR(){return new Ge($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nR(n){return new Ge($e.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function rR(){return new Ge($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iR(){return new Ge($e.CANCELED,"User canceled the upload/download.")}function sR(n){return new Ge($e.INVALID_URL,"Invalid URL '"+n+"'.")}function oR(n){return new Ge($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function aR(){return new Ge($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Q_+"' property when initializing the app?")}function lR(){return new Ge($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uR(){return new Ge($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cR(n){return new Ge($e.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Dd(n){return new Ge($e.INVALID_ARGUMENT,n)}function X_(){return new Ge($e.APP_DELETED,"The Firebase app was deleted.")}function dR(n){return new Ge($e.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function to(n,e){return new Ge($e.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Vs(n){throw new Ge($e.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class $t{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=$t.makeFromUrl(e,t)}catch{return new $t(e,"")}if(s.path==="")return s;throw oR(e)}static makeFromUrl(e,t){let s=null;const o="([A-Za-z0-9.\\-_]+)";function l(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+o+c,"i"),m={bucket:1,path:3};function g(V){V.path_=decodeURIComponent(V.path)}const _="v[A-Za-z0-9_]+",v=t.replace(/[.]/g,"\\."),x="(/([^?#]*).*)?$",b=new RegExp(`^https?://${v}/${_}/b/${o}/o${x}`,"i"),A={bucket:1,path:3},O=t===Y_?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",G=new RegExp(`^https?://${O}/${o}/${P}`,"i"),B=[{regex:f,indices:m,postModify:l},{regex:b,indices:A,postModify:g},{regex:G,indices:{bucket:1,path:2},postModify:g}];for(let V=0;V<B.length;V++){const te=B[V],ne=te.regex.exec(e);if(ne){const ce=ne[te.indices.bucket];let de=ne[te.indices.path];de||(de=""),s=new $t(ce,de),te.postModify(s);break}}if(s==null)throw sR(e);return s}}class hR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fR(n,e,t){let s=1,o=null,l=null,c=!1,f=0;function m(){return f===2}let g=!1;function _(...P){g||(g=!0,e.apply(null,P))}function v(P){o=setTimeout(()=>{o=null,n(b,m())},P)}function x(){l&&clearTimeout(l)}function b(P,...G){if(g){x();return}if(P){x(),_.call(null,P,...G);return}if(m()||c){x(),_.call(null,P,...G);return}s<64&&(s*=2);let B;f===1?(f=2,B=0):B=(s+Math.random())*1e3,v(B)}let A=!1;function O(P){A||(A=!0,x(),!g&&(o!==null?(P||(f=2),clearTimeout(o),v(0)):P||(f=1)))}return v(0),l=setTimeout(()=>{c=!0,O(!0)},t),O}function pR(n){n(!1)}/**
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
 */function mR(n){return n!==void 0}function gR(n){return typeof n=="object"&&!Array.isArray(n)}function Fh(n){return typeof n=="string"||n instanceof String}function ly(n){return Bh()&&n instanceof Blob}function Bh(){return typeof Blob<"u"}function uy(n,e,t,s){if(s<e)throw Dd(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw Dd(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function zh(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function J_(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const o=e(s)+"="+e(n[s]);t=t+o+"&"}return t=t.slice(0,-1),t}/**
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
 */var Vr;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Vr||(Vr={}));/**
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
 */function yR(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class vR{constructor(e,t,s,o,l,c,f,m,g,_,v,x=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=_,this.connectionFactory_=v,this.retry=x,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,A)=>{this.resolve_=b,this.reject_=A,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new Wa(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=f=>{const m=f.loaded,g=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const f=l.getErrorCode()===Vr.NO_ERROR,m=l.getStatus();if(!f||yR(m,this.additionalRetryCodes_)&&this.retry){const _=l.getErrorCode()===Vr.ABORT;s(!1,new Wa(!1,null,_));return}const g=this.successCodes_.indexOf(m)!==-1;s(!0,new Wa(g,l))})},t=(s,o)=>{const l=this.resolve_,c=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());mR(m)?l(m):l()}catch(m){c(m)}else if(f!==null){const m=Uh();m.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,m)):c(m)}else if(o.canceled){const m=this.appDelete_?X_():iR();c(m)}else{const m=rR();c(m)}};this.canceled_?t(!1,new Wa(!1,null,!0)):this.backoffId_=fR(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wa{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function _R(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function wR(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xR(n,e){e&&(n["X-Firebase-GMPID"]=e)}function ER(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function kR(n,e,t,s,o,l,c=!0){const f=J_(n.urlParams),m=n.url+f,g=Object.assign({},n.headers);return xR(g,e),_R(g,t),wR(g,l),ER(g,s),new vR(m,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
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
 */function SR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function CR(...n){const e=SR();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(Bh())return new Blob(n);throw new Ge($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function NR(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function IR(n){if(typeof atob>"u")throw cR("base-64");return atob(n)}/**
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
 */const _n={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ad{constructor(e,t){this.data=e,this.contentType=t||null}}function TR(n,e){switch(n){case _n.RAW:return new ad(Z_(e));case _n.BASE64:case _n.BASE64URL:return new ad(e0(n,e));case _n.DATA_URL:return new ad(RR(e),PR(e))}throw Uh()}function Z_(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=s,c=n.charCodeAt(++t);s=65536|(l&1023)<<10|c&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function bR(n){let e;try{e=decodeURIComponent(n)}catch{throw to(_n.DATA_URL,"Malformed data URL.")}return Z_(e)}function e0(n,e){switch(n){case _n.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw to(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case _n.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw to(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=IR(e)}catch(o){throw o.message.includes("polyfill")?o:to(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}class t0{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw to(_n.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=AR(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function RR(n){const e=new t0(n);return e.base64?e0(_n.BASE64,e.rest):bR(e.rest)}function PR(n){return new t0(n).contentType}function AR(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class gr{constructor(e,t){let s=0,o="";ly(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(ly(this.data_)){const s=this.data_,o=NR(s,e,t);return o===null?null:new gr(o)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new gr(s,!0)}}static getBlob(...e){if(Bh()){const t=e.map(s=>s instanceof gr?s.data_:s);return new gr(CR.apply(null,t))}else{const t=e.map(c=>Fh(c)?TR(_n.RAW,c).data:c.data_);let s=0;t.forEach(c=>{s+=c.byteLength});const o=new Uint8Array(s);let l=0;return t.forEach(c=>{for(let f=0;f<c.length;f++)o[l++]=c[f]}),new gr(o,!0)}}uploadData(){return this.data_}}/**
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
 */function n0(n){let e;try{e=JSON.parse(n)}catch{return null}return gR(e)?e:null}/**
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
 */function OR(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function DR(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function r0(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function jR(n,e){return e}class Nt{constructor(e,t,s,o){this.server=e,this.local=t||e,this.writable=!!s,this.xform=o||jR}}let Ha=null;function LR(n){return!Fh(n)||n.length<2?n:r0(n)}function i0(){if(Ha)return Ha;const n=[];n.push(new Nt("bucket")),n.push(new Nt("generation")),n.push(new Nt("metageneration")),n.push(new Nt("name","fullPath",!0));function e(l,c){return LR(c)}const t=new Nt("name");t.xform=e,n.push(t);function s(l,c){return c!==void 0?Number(c):c}const o=new Nt("size");return o.xform=s,n.push(o),n.push(new Nt("timeCreated")),n.push(new Nt("updated")),n.push(new Nt("md5Hash",null,!0)),n.push(new Nt("cacheControl",null,!0)),n.push(new Nt("contentDisposition",null,!0)),n.push(new Nt("contentEncoding",null,!0)),n.push(new Nt("contentLanguage",null,!0)),n.push(new Nt("contentType",null,!0)),n.push(new Nt("metadata","customMetadata",!0)),Ha=n,Ha}function MR(n,e){function t(){const s=n.bucket,o=n.fullPath,l=new $t(s,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function UR(n,e,t){const s={};s.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];s[c.local]=c.xform(s,e[c.server])}return MR(s,n),s}function s0(n,e,t){const s=n0(e);return s===null?null:UR(n,s,t)}function FR(n,e,t,s){const o=n0(e);if(o===null||!Fh(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(g=>{const _=n.bucket,v=n.fullPath,x="/b/"+c(_)+"/o/"+c(v),b=zh(x,t,s),A=J_({alt:"media",token:g});return b+A})[0]}function BR(n,e){const t={},s=e.length;for(let o=0;o<s;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class o0{constructor(e,t,s,o){this.url=e,this.method=t,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function a0(n){if(!n)throw Uh()}function zR(n,e){function t(s,o){const l=s0(n,o,e);return a0(l!==null),l}return t}function WR(n,e){function t(s,o){const l=s0(n,o,e);return a0(l!==null),FR(l,o,n.host,n._protocol)}return t}function l0(n){function e(t,s){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=tR():o=eR():t.getStatus()===402?o=Zb(n.bucket):t.getStatus()===403?o=nR(n.path):o=s,o.status=t.getStatus(),o.serverResponse=s.serverResponse,o}return e}function HR(n){const e=l0(n);function t(s,o){let l=e(s,o);return s.getStatus()===404&&(l=Jb(n.path)),l.serverResponse=o.serverResponse,l}return t}function VR(n,e,t){const s=e.fullServerUrl(),o=zh(s,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,f=new o0(o,l,WR(n,t),c);return f.errorHandler=HR(e),f}function $R(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function GR(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=$R(null,e)),s}function qR(n,e,t,s,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function f(){let B="";for(let V=0;V<2;V++)B=B+Math.random().toString().slice(2);return B}const m=f();c["Content-Type"]="multipart/related; boundary="+m;const g=GR(e,s,o),_=BR(g,t),v="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+m+`\r
Content-Type: `+g.contentType+`\r
\r
`,x=`\r
--`+m+"--",b=gr.getBlob(v,s,x);if(b===null)throw lR();const A={name:g.fullPath},O=zh(l,n.host,n._protocol),P="POST",G=n.maxUploadRetryTime,K=new o0(O,P,zR(n,t),G);return K.urlParams=A,K.headers=c,K.body=b.uploadData(),K.errorHandler=l0(e),K}class KR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,o){if(this.sent_)throw Vs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class YR extends KR{initXhr(){this.xhr_.responseType="text"}}function u0(){return new YR}/**
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
 */class Jr{constructor(e,t){this._service=e,t instanceof $t?this._location=t:this._location=$t.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Jr(e,t)}get root(){const e=new $t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return r0(this._location.path)}get storage(){return this._service}get parent(){const e=OR(this._location.path);if(e===null)return null;const t=new $t(this._location.bucket,e);return new Jr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw dR(e)}}function QR(n,e,t){n._throwIfRoot("uploadBytes");const s=qR(n.storage,n._location,i0(),new gr(e,!0),t);return n.storage.makeRequestWithTokens(s,u0).then(o=>({metadata:o,ref:n}))}function XR(n){n._throwIfRoot("getDownloadURL");const e=VR(n.storage,n._location,i0());return n.storage.makeRequestWithTokens(e,u0).then(t=>{if(t===null)throw uR();return t})}function JR(n,e){const t=DR(n._location.path,e),s=new $t(n._location.bucket,t);return new Jr(n.storage,s)}/**
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
 */function ZR(n){return/^[A-Za-z]+:\/\//.test(n)}function eP(n,e){return new Jr(n,e)}function c0(n,e){if(n instanceof Wh){const t=n;if(t._bucket==null)throw aR();const s=new Jr(t,t._bucket);return e!=null?c0(s,e):s}else return e!==void 0?JR(n,e):n}function tP(n,e){if(e&&ZR(e)){if(n instanceof Wh)return eP(n,e);throw Dd("To use ref(service, url), the first argument must be a Storage instance.")}else return c0(n,e)}function cy(n,e){const t=e==null?void 0:e[Q_];return t==null?null:$t.makeFromBucketSpec(t,n)}function nP(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=s;o&&(n._overrideAuthToken=typeof o=="string"?o:ev(o,n.app.options.projectId))}class Wh{constructor(e,t,s,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=Y_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qb,this._maxUploadRetryTime=Xb,this._requests=new Set,o!=null?this._bucket=$t.makeFromBucketSpec(o,this._host):this._bucket=cy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$t.makeFromBucketSpec(this._url,e):this._bucket=cy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){uy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){uy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jr(this,e)}_makeRequest(e,t,s,o,l=!0){if(this._deleted)return new hR(X_());{const c=kR(e,this._appId,s,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,o).getPromise()}}const dy="@firebase/storage",hy="0.12.6";/**
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
 */const d0="storage";function rP(n,e,t){return n=rt(n),QR(n,e,t)}function iP(n){return n=rt(n),XR(n)}function sP(n,e){return n=rt(n),tP(n,e)}function oP(n=Gd(),e){n=rt(n);const s=Al(n,d0).getImmediate({identifier:e}),o=Xy("storage");return o&&aP(s,...o),s}function aP(n,e,t,s={}){nP(n,e,t,s)}function lP(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Wh(t,s,o,e,ei)}function uP(){Gr(new Er(d0,lP,"PUBLIC").setMultipleInstances(!0)),wn(dy,hy,""),wn(dy,hy,"esm2017")}uP();const cP={apiKey:"AIzaSyCCViNCBLpWkvMfgEZTIiS84UedZrm5MMQ",authDomain:"travelandthrills-22cfe.firebaseapp.com",projectId:"travelandthrills-22cfe",storageBucket:"travelandthrills-22cfe.firebasestorage.app",messagingSenderId:"288600705309",appId:"1:288600705309:web:f4a3cf6398f3ee02b3f9f4",measurementId:"G-7SKZWVZNLH"},Hh=sv(cP),ld=Kb(Hh),bt=PT(Hh),dP=oP(Hh),hP=n=>n.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-");function h0(){const[n,e]=I.useState([]),[t,s]=I.useState(!0);return I.useEffect(()=>{const l=Tt(bt,"blogs"),c=Ks(l,f=>{const m=f.val()??{},g=Object.entries(m).map(([_,v])=>{const x=v;return{id:_,...x,slug:x.slug||hP(x.title||"")}});g.sort((_,v)=>(v.date||"").localeCompare(_.date||"")),e(g),s(!1)});return()=>c()},[]),{blogs:I.useMemo(()=>n.filter(l=>l.published),[n]),allBlogs:n,loading:t}}function f0(){const{blogs:n,loading:e}=h0();return p.jsx("section",{id:"blogs",className:"py-16 px-4 bg-white",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h2",{className:"text-3xl md:text-4xl mb-4 text-gray-900",children:"Latest Blogs & Updates"}),p.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Explore featured package stories and travel updates from Travel & Thrills"})]}),e?p.jsx("div",{className:"text-center text-gray-500",children:"Loading blogs..."}):n.length===0?p.jsx("div",{className:"text-center text-gray-500",children:"No published blogs yet."}):p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:n.map(t=>p.jsxs("article",{className:"border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition",children:[p.jsx(bl,{src:t.image,alt:t.title,className:"w-full h-48 object-cover"}),p.jsxs("div",{className:"p-5",children:[p.jsx("h3",{className:"text-lg text-gray-900 mb-2",children:t.title}),p.jsx("p",{className:"text-gray-600 text-sm mb-4",children:t.excerpt}),p.jsx(re,{to:`/blogs/${t.slug}`,className:"text-blue-600 hover:text-blue-700",children:"Read More →"})]})]},t.id))})]})})}function fP(){const[n,e]=I.useState("/banner.jpeg");return p.jsxs("section",{id:"home",className:"relative h-screen flex items-center justify-center",children:[p.jsx(bl,{src:n,alt:"Himalayan travel destination",className:"absolute inset-0 w-full h-full object-cover",onError:()=>e("https://ttw.wlimg.com/package-images/photo-big/dir_57/1682301/399050.jpg")}),p.jsx("div",{className:"absolute inset-0 bg-black/40"}),p.jsxs("div",{className:"relative z-10 text-center text-white px-4 max-w-4xl mx-auto",children:[p.jsx("h1",{className:"text-4xl md:text-6xl mb-4",children:"Explore Darjeeling, Sikkim, Bhutan & Nepal"}),p.jsx("p",{className:"text-lg md:text-xl mb-8",children:"Travel & Thrills creates personalized Himalayan journeys with trusted local support, curated stays, and seamless transport."}),p.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[p.jsxs(re,{to:"/packages",className:"bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition flex items-center gap-2",children:["View Packages",p.jsx(nk,{className:"w-4 h-4"})]}),p.jsx(re,{to:"/contact",className:"bg-white/90 hover:bg-white text-gray-900 px-8 py-3 rounded transition",children:"Contact Us"})]})]})]})}function p0(){return p.jsx("section",{id:"destinations",className:"py-16 px-4 bg-gray-50",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h2",{className:"text-3xl md:text-4xl mb-4 text-gray-900",children:"Popular Destinations"}),p.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Explore destination circuits featured in our Darjeeling, Sikkim, Bhutan, and Nepal packages"})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:By.map((n,e)=>p.jsxs(re,{to:`/destinations/${n.slug}`,className:"bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group cursor-pointer block",children:[p.jsxs("div",{className:"relative h-64 overflow-hidden",children:[p.jsx(bl,{src:n.image,alt:n.name,className:"w-full h-full object-cover group-hover:scale-110 transition duration-500"}),p.jsx("div",{className:"absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm",children:n.country})]}),p.jsxs("div",{className:"p-6",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[p.jsx(Ly,{className:"w-5 h-5 text-blue-600"}),p.jsx("h3",{className:"text-xl text-gray-900",children:n.name})]}),p.jsx("p",{className:"text-gray-600",children:n.description}),p.jsx("span",{className:"mt-4 inline-block text-blue-600 hover:text-blue-700 font-medium",children:"Explore Now →"})]})]},e))})]})})}function fy(){return p.jsxs(p.Fragment,{children:[p.jsx(fP,{}),p.jsx(Wy,{}),p.jsx(Hy,{}),p.jsx(p0,{}),p.jsx(zy,{}),p.jsx($y,{}),p.jsx(f0,{}),p.jsx(Vy,{})]})}function pP(){const{slug:n}=Il(),e=Uy.find(t=>t.slug===n);return e?p.jsx("section",{className:"pt-28 pb-16 px-4 bg-white",children:p.jsxs("div",{className:"max-w-4xl mx-auto",children:[p.jsx("img",{src:e.image,alt:e.title,className:"w-full h-72 object-cover rounded-lg mb-8"}),p.jsx("h1",{className:"text-3xl md:text-4xl text-gray-900 mb-4",children:e.title}),p.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),p.jsx("p",{className:"text-gray-700 leading-7 mb-8",children:e.details}),p.jsxs("div",{className:"flex gap-4",children:[p.jsx(re,{to:"/services",className:"bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900",children:"All Services"}),p.jsx(re,{to:"/contact",className:"bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white",children:"Enquire Now"})]})]})}):p.jsx("section",{className:"pt-28 pb-16 px-4",children:p.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[p.jsx("h1",{className:"text-3xl text-gray-900 mb-4",children:"Service not found"}),p.jsx(re,{to:"/services",className:"text-blue-600 hover:text-blue-700",children:"Back to services"})]})})}function mP(){const{slug:n}=Il(),e=Fy.find(t=>t.slug===n);return e?p.jsx("section",{className:"pt-28 pb-16 px-4 bg-white",children:p.jsxs("div",{className:"max-w-4xl mx-auto",children:[p.jsx("img",{src:e.image,alt:e.title,className:"w-full h-72 object-cover rounded-lg mb-8"}),p.jsx("h1",{className:"text-3xl md:text-4xl text-gray-900 mb-4",children:e.title}),p.jsxs("div",{className:"flex flex-wrap gap-3 mb-6 text-sm",children:[p.jsx("span",{className:"bg-gray-100 px-3 py-1 rounded",children:e.duration}),p.jsx("span",{className:"bg-gray-100 px-3 py-1 rounded",children:e.people}),p.jsxs("span",{className:"bg-blue-100 text-blue-700 px-3 py-1 rounded",children:["Starting ",e.price]})]}),p.jsx("p",{className:"text-gray-700 leading-7 mb-6",children:e.details}),p.jsx("h2",{className:"text-xl text-gray-900 mb-3",children:"Highlights"}),p.jsx("ul",{className:"space-y-2 mb-8",children:e.highlights.map((t,s)=>p.jsxs("li",{className:"text-gray-600 flex items-center gap-2",children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full"}),t]},s))}),p.jsxs("div",{className:"flex gap-4",children:[p.jsx(re,{to:"/packages",className:"bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900",children:"All Packages"}),p.jsx(re,{to:"/contact",className:"bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white",children:"Book / Enquire"}),e.sourceUrl?p.jsx("a",{href:e.sourceUrl,target:"_blank",rel:"noreferrer",className:"bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900",children:"Original Source"}):null]})]})}):p.jsx("section",{className:"pt-28 pb-16 px-4",children:p.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[p.jsx("h1",{className:"text-3xl text-gray-900 mb-4",children:"Package not found"}),p.jsx(re,{to:"/packages",className:"text-blue-600 hover:text-blue-700",children:"Back to packages"})]})})}function gP(){const{slug:n}=Il(),{blogs:e,loading:t}=h0(),s=e.find(o=>o.slug===n);return t?p.jsx("section",{className:"pt-28 pb-16 px-4",children:p.jsx("div",{className:"max-w-4xl mx-auto text-center",children:p.jsx("p",{className:"text-gray-600",children:"Loading blog..."})})}):s?p.jsx("section",{className:"pt-28 pb-16 px-4 bg-white",children:p.jsxs("div",{className:"max-w-4xl mx-auto",children:[p.jsx("img",{src:s.image,alt:s.title,className:"w-full h-72 object-cover rounded-lg mb-8"}),p.jsx("p",{className:"text-sm text-blue-600 mb-2",children:s.date}),p.jsx("h1",{className:"text-3xl md:text-4xl text-gray-900 mb-4",children:s.title}),p.jsx("p",{className:"text-gray-700 leading-7 mb-8",children:s.content}),p.jsxs("div",{className:"flex gap-4",children:[p.jsx(re,{to:"/blogs",className:"bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900",children:"All Blogs"}),p.jsx(re,{to:"/packages",className:"bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white",children:"View Packages"}),s.sourceUrl?p.jsx("a",{href:s.sourceUrl,target:"_blank",rel:"noreferrer",className:"bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900",children:"Original Source"}):null]})]})}):p.jsx("section",{className:"pt-28 pb-16 px-4",children:p.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[p.jsx("h1",{className:"text-3xl text-gray-900 mb-4",children:"Blog not found"}),p.jsx(re,{to:"/blogs",className:"text-blue-600 hover:text-blue-700",children:"Back to blogs"})]})})}function yP(){const{slug:n}=Il(),e=By.find(t=>t.slug===n);return e?p.jsx("section",{className:"pt-28 pb-16 px-4 bg-white",children:p.jsxs("div",{className:"max-w-4xl mx-auto",children:[p.jsx("img",{src:e.image,alt:e.name,className:"w-full h-72 object-cover rounded-lg mb-8"}),p.jsx("p",{className:"text-sm text-blue-600 mb-2",children:e.country}),p.jsx("h1",{className:"text-3xl md:text-4xl text-gray-900 mb-4",children:e.name}),p.jsx("p",{className:"text-gray-600 mb-4",children:e.description}),p.jsx("p",{className:"text-gray-700 leading-7 mb-6",children:e.details}),p.jsx("h2",{className:"text-xl text-gray-900 mb-3",children:"Highlights"}),p.jsx("ul",{className:"space-y-2 mb-8",children:e.highlights.map((t,s)=>p.jsxs("li",{className:"text-gray-600 flex items-center gap-2",children:[p.jsx("span",{className:"w-1.5 h-1.5 bg-blue-600 rounded-full"}),t]},s))}),p.jsxs("div",{className:"flex gap-4",children:[p.jsx(re,{to:"/destinations",className:"bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded text-gray-900",children:"All Destinations"}),p.jsx(re,{to:"/packages",className:"bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded text-white",children:"View Packages"})]})]})}):p.jsx("section",{className:"pt-28 pb-16 px-4",children:p.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[p.jsx("h1",{className:"text-3xl text-gray-900 mb-4",children:"Destination not found"}),p.jsx(re,{to:"/destinations",className:"text-blue-600 hover:text-blue-700",children:"Back to destinations"})]})})}const vP=["prabhatprabhakar8@gmail.com"],Va={title:"",excerpt:"",content:"",image:"",date:"",sourceUrl:"",published:!1,seoTitle:"",seoDescription:""},$a={name:"",country:"",image:"",description:"",details:"",highlights:""},Ga={title:"",description:"",details:"",image:""},qa={title:"",duration:"",price:"",people:"",highlights:"",details:"",image:"",sourceUrl:""},Ka=n=>n.toLowerCase().replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-").replace(/-+/g,"-"),py=n=>n.split(",").map(e=>e.trim()).filter(Boolean);function _P(){const[n,e]=I.useState(null),[t,s]=I.useState(!1),[o,l]=I.useState(null),[c,f]=I.useState(""),[m,g]=I.useState(""),[_,v]=I.useState("blogs"),[x,b]=I.useState([]),[A,O]=I.useState([]),[P,G]=I.useState([]),[K,B]=I.useState([]),[V,te]=I.useState(Va),[ne,ce]=I.useState($a),[de,Ne]=I.useState(Ga),[he,Ye]=I.useState(qa),[Et,ze]=I.useState(!1),[Pt,Le]=I.useState(null),[Je,Oe]=I.useState(!1),[W,J]=I.useState(null),H=I.useMemo(()=>n!=null&&n.email?vP.includes(n.email):!1,[n]);I.useEffect(()=>{const R=j1(ld,z=>{e(z),s(!0)});return()=>R()},[]),I.useEffect(()=>{if(!H)return;const R=Tt(bt,"blogs"),z=Tt(bt,"destinations"),ue=Tt(bt,"services"),_e=Tt(bt,"packages"),Ze=Ks(R,en=>{const Bt=en.val()??{},it=Object.entries(Bt).map(([et,st])=>({id:et,...st}));it.sort((et,st)=>(st.date||"").localeCompare(et.date||"")),b(it)}),Nn=Ks(z,en=>{const Bt=en.val()??{},it=Object.entries(Bt).map(([et,st])=>({id:et,...st}));it.sort((et,st)=>et.name.localeCompare(st.name)),O(it)}),Ir=Ks(ue,en=>{const Bt=en.val()??{},it=Object.entries(Bt).map(([et,st])=>({id:et,...st}));it.sort((et,st)=>et.title.localeCompare(st.title)),G(it)}),Io=Ks(_e,en=>{const Bt=en.val()??{},it=Object.entries(Bt).map(([et,st])=>({id:et,...st}));it.sort((et,st)=>et.title.localeCompare(st.title)),B(it)});return()=>{Ze(),Nn(),Ir(),Io()}},[H]);const S=async R=>{R.preventDefault(),l(null);try{await A1(ld,c.trim(),m),g("")}catch(z){const ue=z instanceof Error?z.message:"Login failed.";l(ue)}},D=async()=>{await L1(ld),te(Va),ce($a),Ne(Ga),Ye(qa)},ae=async(R,z)=>{Oe(!0),J(null);try{const ue=R.name.replace(/\s+/g,"-").toLowerCase(),_e=sP(dP,`uploads/${z}/${Date.now()}-${ue}`);await rP(_e,R);const Ze=await iP(_e);return J("Image uploaded successfully."),Ze}catch(ue){const _e=ue instanceof Error?ue.message:"Upload failed.";return J(_e),""}finally{Oe(!1)}},le=()=>{Le(null),J(null)},ye=async R=>{var ue,_e,Ze;if(R.preventDefault(),!H)return;ze(!0),le();const z={slug:Ka(V.title||""),title:V.title.trim(),excerpt:V.excerpt.trim(),content:V.content.trim(),image:V.image.trim(),date:V.date.trim(),sourceUrl:((ue=V.sourceUrl)==null?void 0:ue.trim())||"",published:V.published,seoTitle:((_e=V.seoTitle)==null?void 0:_e.trim())||"",seoDescription:((Ze=V.seoDescription)==null?void 0:Ze.trim())||""};try{if(V.id)await Hs(Tt(bt,`blogs/${V.id}`),z),Le("Blog updated successfully.");else{const Nn=Ba(Tt(bt,"blogs"));await qs(Nn,z),Le("Blog created successfully.")}te(Va)}catch(Nn){const Ir=Nn instanceof Error?Nn.message:"Failed to save blog.";Le(Ir)}finally{ze(!1)}},ve=async R=>{if(R.preventDefault(),!H)return;ze(!0),le();const z={slug:Ka(ne.name||""),name:ne.name.trim(),country:ne.country.trim(),image:ne.image.trim(),description:ne.description.trim(),details:ne.details.trim(),highlights:py(ne.highlights)};try{if(ne.id)await Hs(Tt(bt,`destinations/${ne.id}`),z),Le("Destination updated successfully.");else{const ue=Ba(Tt(bt,"destinations"));await qs(ue,z),Le("Destination created successfully.")}ce($a)}catch(ue){const _e=ue instanceof Error?ue.message:"Failed to save destination.";Le(_e)}finally{ze(!1)}},Ie=async R=>{if(R.preventDefault(),!H)return;ze(!0),le();const z={slug:Ka(de.title||""),title:de.title.trim(),description:de.description.trim(),details:de.details.trim(),image:de.image.trim()};try{if(de.id)await Hs(Tt(bt,`services/${de.id}`),z),Le("Service updated successfully.");else{const ue=Ba(Tt(bt,"services"));await qs(ue,z),Le("Service created successfully.")}Ne(Ga)}catch(ue){const _e=ue instanceof Error?ue.message:"Failed to save service.";Le(_e)}finally{ze(!1)}},Ee=async R=>{var ue;if(R.preventDefault(),!H)return;ze(!0),le();const z={slug:Ka(he.title||""),title:he.title.trim(),duration:he.duration.trim(),price:he.price.trim(),people:he.people.trim(),highlights:py(he.highlights),details:he.details.trim(),image:he.image.trim(),sourceUrl:((ue=he.sourceUrl)==null?void 0:ue.trim())||""};try{if(he.id)await Hs(Tt(bt,`packages/${he.id}`),z),Le("Package updated successfully.");else{const _e=Ba(Tt(bt,"packages"));await qs(_e,z),Le("Package created successfully.")}Ye(qa)}catch(_e){const Ze=_e instanceof Error?_e.message:"Failed to save package.";Le(Ze)}finally{ze(!1)}},Se=async(R,z)=>{H&&await ET(Tt(bt,`${R}/${z}`))},kt=async R=>{H&&await Hs(Tt(bt,`blogs/${R.id}`),{published:!R.published})};return t?n?H?p.jsx("div",{className:"min-h-screen bg-gray-50",children:p.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-10",children:[p.jsxs("div",{className:"flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-gray-500",children:"Control Panel"}),p.jsx("h1",{className:"text-3xl font-semibold text-gray-900",children:"Travel & Thrills Admin"}),p.jsx("p",{className:"text-gray-600 mt-1",children:"Manage blogs and site content."})]}),p.jsx("button",{type:"button",onClick:D,className:"bg-gray-900 text-white rounded px-4 py-2",children:"Sign Out"})]}),p.jsx("div",{className:"flex flex-wrap gap-3 mb-8",children:[{key:"blogs",label:"Blogs"},{key:"destinations",label:"Destinations"},{key:"services",label:"Services"},{key:"packages",label:"Packages"}].map(R=>p.jsx("button",{type:"button",onClick:()=>{v(R.key),le()},className:`px-4 py-2 rounded-full text-sm font-medium ${_===R.key?"bg-blue-600 text-white":"bg-white border border-gray-200 text-gray-700"}`,children:R.label},R.key))}),Pt&&p.jsx("p",{className:"text-sm text-green-600 mb-4",children:Pt}),W&&p.jsx("p",{className:"text-sm text-blue-600 mb-4",children:W}),_==="blogs"&&p.jsxs("div",{className:"grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",children:[p.jsxs("section",{className:"bg-white shadow-lg rounded-xl p-6",children:[p.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Write a Blog"}),p.jsxs("form",{onSubmit:ye,className:"space-y-4",children:[p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Title"}),p.jsx("input",{value:V.title,onChange:R=>te(z=>({...z,title:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Date"}),p.jsx("input",{type:"date",value:V.date,onChange:R=>te(z=>({...z,date:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Excerpt"}),p.jsx("input",{value:V.excerpt,onChange:R=>te(z=>({...z,excerpt:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Featured Image"}),p.jsx("input",{type:"file",accept:"image/*",onChange:async R=>{var _e;const z=(_e=R.target.files)==null?void 0:_e[0];if(!z)return;const ue=await ae(z,"blogs");ue&&te(Ze=>({...Ze,image:ue}))},className:"w-full",disabled:Je}),V.image&&p.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Image ready for use."})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Source URL (optional)"}),p.jsx("input",{value:V.sourceUrl,onChange:R=>te(z=>({...z,sourceUrl:R.target.value})),className:"w-full border rounded px-3 py-2"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Content"}),p.jsx("textarea",{value:V.content,onChange:R=>te(z=>({...z,content:R.target.value})),className:"w-full border rounded px-3 py-2 h-32",required:!0})]}),p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"SEO Title"}),p.jsx("input",{value:V.seoTitle,onChange:R=>te(z=>({...z,seoTitle:R.target.value})),className:"w-full border rounded px-3 py-2"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"SEO Description"}),p.jsx("input",{value:V.seoDescription,onChange:R=>te(z=>({...z,seoDescription:R.target.value})),className:"w-full border rounded px-3 py-2"})]})]}),p.jsxs("label",{className:"flex items-center gap-2 text-sm text-gray-700",children:[p.jsx("input",{type:"checkbox",checked:V.published,onChange:R=>te(z=>({...z,published:R.target.checked}))}),"Publish immediately"]}),p.jsxs("div",{className:"flex flex-wrap gap-3",children:[p.jsx("button",{type:"submit",disabled:Et,className:"bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-70",children:V.id?"Update Blog":"Publish Blog"}),p.jsx("button",{type:"button",onClick:()=>te(Va),className:"border border-gray-300 rounded px-4 py-2",children:"Clear"})]})]})]}),p.jsxs("section",{className:"bg-white shadow-lg rounded-xl p-6",children:[p.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Recent Blogs"}),p.jsxs("div",{className:"space-y-4",children:[x.length===0&&p.jsx("p",{className:"text-gray-500",children:"No blogs created yet. Add your first post."}),x.map(R=>p.jsxs("div",{className:"border border-gray-100 rounded-lg p-4 flex flex-col gap-3",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-sm text-gray-500",children:R.date||"No date"}),p.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:R.title}),p.jsx("p",{className:"text-sm text-gray-600",children:R.excerpt})]}),p.jsxs("div",{className:"flex flex-wrap gap-2",children:[p.jsx("button",{type:"button",onClick:()=>te({id:R.id,title:R.title,excerpt:R.excerpt,content:R.content,image:R.image,date:R.date,sourceUrl:R.sourceUrl??"",published:R.published,seoTitle:R.seoTitle??"",seoDescription:R.seoDescription??""}),className:"text-sm text-blue-600",children:"Edit"}),p.jsx("button",{type:"button",onClick:()=>kt(R),className:"text-sm text-gray-700",children:R.published?"Unpublish":"Publish"}),p.jsx("button",{type:"button",onClick:()=>Se("blogs",R.id),className:"text-sm text-red-600",children:"Delete"})]})]},R.id))]})]})]}),_==="destinations"&&p.jsxs("div",{className:"grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",children:[p.jsxs("section",{className:"bg-white shadow-lg rounded-xl p-6",children:[p.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add Destination"}),p.jsxs("form",{onSubmit:ve,className:"space-y-4",children:[p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Name"}),p.jsx("input",{value:ne.name,onChange:R=>ce(z=>({...z,name:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Country"}),p.jsx("input",{value:ne.country,onChange:R=>ce(z=>({...z,country:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Image"}),p.jsx("input",{type:"file",accept:"image/*",onChange:async R=>{var _e;const z=(_e=R.target.files)==null?void 0:_e[0];if(!z)return;const ue=await ae(z,"destinations");ue&&ce(Ze=>({...Ze,image:ue}))},className:"w-full",disabled:Je}),ne.image&&p.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Image ready for use."})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Short Description"}),p.jsx("input",{value:ne.description,onChange:R=>ce(z=>({...z,description:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Details"}),p.jsx("textarea",{value:ne.details,onChange:R=>ce(z=>({...z,details:R.target.value})),className:"w-full border rounded px-3 py-2 h-28",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Highlights (comma-separated)"}),p.jsx("input",{value:ne.highlights,onChange:R=>ce(z=>({...z,highlights:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{className:"flex flex-wrap gap-3",children:[p.jsx("button",{type:"submit",disabled:Et,className:"bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-70",children:ne.id?"Update Destination":"Add Destination"}),p.jsx("button",{type:"button",onClick:()=>ce($a),className:"border border-gray-300 rounded px-4 py-2",children:"Clear"})]})]})]}),p.jsxs("section",{className:"bg-white shadow-lg rounded-xl p-6",children:[p.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Destinations"}),p.jsxs("div",{className:"space-y-4",children:[A.length===0&&p.jsx("p",{className:"text-gray-500",children:"No destinations created yet."}),A.map(R=>p.jsxs("div",{className:"border border-gray-100 rounded-lg p-4",children:[p.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:R.name}),p.jsx("p",{className:"text-sm text-gray-500",children:R.country}),p.jsxs("div",{className:"flex flex-wrap gap-2 mt-3",children:[p.jsx("button",{type:"button",onClick:()=>ce({id:R.id,name:R.name,country:R.country,image:R.image,description:R.description,details:R.details,highlights:R.highlights.join(", ")}),className:"text-sm text-blue-600",children:"Edit"}),p.jsx("button",{type:"button",onClick:()=>Se("destinations",R.id),className:"text-sm text-red-600",children:"Delete"})]})]},R.id))]})]})]}),_==="services"&&p.jsxs("div",{className:"grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",children:[p.jsxs("section",{className:"bg-white shadow-lg rounded-xl p-6",children:[p.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add Service"}),p.jsxs("form",{onSubmit:Ie,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Title"}),p.jsx("input",{value:de.title,onChange:R=>Ne(z=>({...z,title:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Image"}),p.jsx("input",{type:"file",accept:"image/*",onChange:async R=>{var _e;const z=(_e=R.target.files)==null?void 0:_e[0];if(!z)return;const ue=await ae(z,"services");ue&&Ne(Ze=>({...Ze,image:ue}))},className:"w-full",disabled:Je}),de.image&&p.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Image ready for use."})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Short Description"}),p.jsx("input",{value:de.description,onChange:R=>Ne(z=>({...z,description:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Details"}),p.jsx("textarea",{value:de.details,onChange:R=>Ne(z=>({...z,details:R.target.value})),className:"w-full border rounded px-3 py-2 h-28",required:!0})]}),p.jsxs("div",{className:"flex flex-wrap gap-3",children:[p.jsx("button",{type:"submit",disabled:Et,className:"bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-70",children:de.id?"Update Service":"Add Service"}),p.jsx("button",{type:"button",onClick:()=>Ne(Ga),className:"border border-gray-300 rounded px-4 py-2",children:"Clear"})]})]})]}),p.jsxs("section",{className:"bg-white shadow-lg rounded-xl p-6",children:[p.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Services"}),p.jsxs("div",{className:"space-y-4",children:[P.length===0&&p.jsx("p",{className:"text-gray-500",children:"No services created yet."}),P.map(R=>p.jsxs("div",{className:"border border-gray-100 rounded-lg p-4",children:[p.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:R.title}),p.jsx("p",{className:"text-sm text-gray-500",children:R.description}),p.jsxs("div",{className:"flex flex-wrap gap-2 mt-3",children:[p.jsx("button",{type:"button",onClick:()=>Ne({id:R.id,title:R.title,description:R.description,details:R.details,image:R.image}),className:"text-sm text-blue-600",children:"Edit"}),p.jsx("button",{type:"button",onClick:()=>Se("services",R.id),className:"text-sm text-red-600",children:"Delete"})]})]},R.id))]})]})]}),_==="packages"&&p.jsxs("div",{className:"grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",children:[p.jsxs("section",{className:"bg-white shadow-lg rounded-xl p-6",children:[p.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Add Package"}),p.jsxs("form",{onSubmit:Ee,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Title"}),p.jsx("input",{value:he.title,onChange:R=>Ye(z=>({...z,title:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Duration"}),p.jsx("input",{value:he.duration,onChange:R=>Ye(z=>({...z,duration:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Price"}),p.jsx("input",{value:he.price,onChange:R=>Ye(z=>({...z,price:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]})]}),p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"People"}),p.jsx("input",{value:he.people,onChange:R=>Ye(z=>({...z,people:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Source URL (optional)"}),p.jsx("input",{value:he.sourceUrl,onChange:R=>Ye(z=>({...z,sourceUrl:R.target.value})),className:"w-full border rounded px-3 py-2"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Image"}),p.jsx("input",{type:"file",accept:"image/*",onChange:async R=>{var _e;const z=(_e=R.target.files)==null?void 0:_e[0];if(!z)return;const ue=await ae(z,"packages");ue&&Ye(Ze=>({...Ze,image:ue}))},className:"w-full",disabled:Je}),he.image&&p.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Image ready for use."})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Highlights (comma-separated)"}),p.jsx("input",{value:he.highlights,onChange:R=>Ye(z=>({...z,highlights:R.target.value})),className:"w-full border rounded px-3 py-2",required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Details"}),p.jsx("textarea",{value:he.details,onChange:R=>Ye(z=>({...z,details:R.target.value})),className:"w-full border rounded px-3 py-2 h-28",required:!0})]}),p.jsxs("div",{className:"flex flex-wrap gap-3",children:[p.jsx("button",{type:"submit",disabled:Et,className:"bg-blue-600 text-white rounded px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-70",children:he.id?"Update Package":"Add Package"}),p.jsx("button",{type:"button",onClick:()=>Ye(qa),className:"border border-gray-300 rounded px-4 py-2",children:"Clear"})]})]})]}),p.jsxs("section",{className:"bg-white shadow-lg rounded-xl p-6",children:[p.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Packages"}),p.jsxs("div",{className:"space-y-4",children:[K.length===0&&p.jsx("p",{className:"text-gray-500",children:"No packages created yet."}),K.map(R=>p.jsxs("div",{className:"border border-gray-100 rounded-lg p-4",children:[p.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:R.title}),p.jsx("p",{className:"text-sm text-gray-500",children:R.duration}),p.jsxs("div",{className:"flex flex-wrap gap-2 mt-3",children:[p.jsx("button",{type:"button",onClick:()=>Ye({id:R.id,title:R.title,duration:R.duration,price:R.price,people:R.people,highlights:R.highlights.join(", "),details:R.details,image:R.image,sourceUrl:R.sourceUrl??""}),className:"text-sm text-blue-600",children:"Edit"}),p.jsx("button",{type:"button",onClick:()=>Se("packages",R.id),className:"text-sm text-red-600",children:"Delete"})]})]},R.id))]})]})]})]})}):p.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 px-4",children:p.jsxs("div",{className:"max-w-md bg-white shadow-lg rounded-lg p-6",children:[p.jsx("h1",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Access denied"}),p.jsx("p",{className:"text-gray-600 mb-4",children:"Your account is not authorized to access the admin panel."}),p.jsx("button",{type:"button",onClick:D,className:"w-full bg-gray-900 text-white rounded py-2",children:"Sign Out"})]})}):p.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 px-4",children:p.jsxs("form",{onSubmit:S,className:"w-full max-w-md bg-white shadow-lg rounded-lg p-6",children:[p.jsx("h1",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"Admin Login"}),p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Email"}),p.jsx("input",{type:"email",value:c,onChange:R=>f(R.target.value),className:"w-full border rounded px-3 py-2 mb-4",required:!0}),p.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Password"}),p.jsx("input",{type:"password",value:m,onChange:R=>g(R.target.value),className:"w-full border rounded px-3 py-2 mb-4",required:!0}),o&&p.jsx("p",{className:"text-sm text-red-600 mb-3",children:o}),p.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white rounded py-2 font-medium hover:bg-blue-700",children:"Sign In"}),p.jsx("p",{className:"text-xs text-gray-500 mt-4",children:"Access is restricted to approved admin emails."})]})}):p.jsx("div",{className:"min-h-screen flex items-center justify-center",children:p.jsx("div",{className:"text-gray-600",children:"Loading admin panel..."})})}function wP(){return p.jsxs("div",{className:"size-full",children:[p.jsx(Uk,{}),p.jsxs(yE,{children:[p.jsx(It,{path:"/",element:p.jsx(fy,{})}),p.jsx(It,{path:"/about",element:p.jsx("div",{className:"pt-16",children:p.jsx(Wy,{})})}),p.jsx(It,{path:"/services",element:p.jsx("div",{className:"pt-16",children:p.jsx(Hy,{})})}),p.jsx(It,{path:"/services/:slug",element:p.jsx(pP,{})}),p.jsx(It,{path:"/destinations",element:p.jsx("div",{className:"pt-16",children:p.jsx(p0,{})})}),p.jsx(It,{path:"/destinations/:slug",element:p.jsx(yP,{})}),p.jsx(It,{path:"/packages",element:p.jsx("div",{className:"pt-16",children:p.jsx(zy,{})})}),p.jsx(It,{path:"/packages/:slug",element:p.jsx(mP,{})}),p.jsx(It,{path:"/blogs",element:p.jsx("div",{className:"pt-16",children:p.jsx(f0,{})})}),p.jsx(It,{path:"/blogs/:slug",element:p.jsx(gP,{})}),p.jsx(It,{path:"/cp",element:p.jsx(_P,{})}),p.jsx(It,{path:"/testimonials",element:p.jsx("div",{className:"pt-16",children:p.jsx($y,{})})}),p.jsx(It,{path:"/contact",element:p.jsx("div",{className:"pt-16",children:p.jsx(Vy,{})})}),p.jsx(It,{path:"*",element:p.jsx(fy,{})})]}),p.jsx(Hk,{})]})}_x.createRoot(document.getElementById("root")).render(p.jsx(zE,{children:p.jsx(wP,{})}));
