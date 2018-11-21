!function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(r,i,function(t){return e[t]}.bind(null,i));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";s.r(t),
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e,t){return e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let r=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;const n=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let s=r++;return function(r){let i=r.__mixinSet;if(i&&i[s])return r;let n=t,o=n.get(r);o||(o=e(r),n.set(r,o));let a=Object.create(o.__mixinSet||i||null);return a[s]=!0,o.__mixinSet=a,o}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o=0,a=0,l=[],c=0,d=document.createTextNode("");new window.MutationObserver(function(){const e=l.length;for(let t=0;t<e;t++){let e=l[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}l.splice(0,e),a+=e}).observe(d,{characterData:!0});const h={run:e=>(d.textContent=c++,l.push(e),o++),cancel(e){const t=e-a;if(t>=0){if(!l[t])throw new Error("invalid async handle: "+e);l[t]=null}}},u=n(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let s in e)s in t||t._createPropertyAccessor(s)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,s){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,h.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(e,t,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,s))}_shouldPropertiesChange(e,t,s){return Boolean(t)}_propertiesChanged(e,t,s){}_shouldPropertyChange(e,t,s){return s!==t&&(s==s||t==t)}attributeChangedCallback(e,t,s,r){t!==s&&this._attributeToProperty(e,s),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,s,r)}_attributeToProperty(e,t,s){if(!this.__serializing){const r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,s||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,s){this.__serializing=!0,s=arguments.length<3?this[e]:s,this._valueToNodeAttribute(this,s,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,s){const r=this._serializeValue(t);void 0===r?e.removeAttribute(s):e.setAttribute(s,r)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}});const _=n(e=>{const t=u(e);function s(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const s=e.properties;s&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let s in e){const r=e[s];t[s]="function"==typeof r?{type:r}:r}return t}(s))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){const e=this._properties;return e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=s(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=s(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new Map;class f{constructor(e,t,s,r=O){this.strings=e,this.values=t,this.type=s,this.partCallback=r}getHTML(){const e=this.strings.length-1;let t="",s=!0;for(let r=0;r<e;r++){const e=this.strings[r];t+=e;const i=v(e);t+=(s=i>-1?i<e.length:s)?g:m}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const m=`{{lit-${String(Math.random()).slice(2)}}}`,g=`\x3c!--${m}--\x3e`,b=new RegExp(`${m}|${g}`),y=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function v(e){const t=e.lastIndexOf(">");return e.indexOf("<",t+1)>-1?e.length:t}class C{constructor(e,t,s,r,i){this.type=e,this.index=t,this.name=s,this.rawName=r,this.strings=i}}const P=e=>-1!==e.index;class x{constructor(e,t){this.parts=[],this.element=t;const s=this.element.content,r=document.createTreeWalker(s,133,null,!1);let i=-1,n=0;const o=[];let a,l;for(;r.nextNode();){i++,a=l;const t=l=r.currentNode;if(1===t.nodeType){if(!t.hasAttributes())continue;const s=t.attributes;let r=0;for(let e=0;e<s.length;e++)s[e].value.indexOf(m)>=0&&r++;for(;r-- >0;){const r=e.strings[n],o=y.exec(r)[1],a=s.getNamedItem(o),l=a.value.split(b);this.parts.push(new C("attribute",i,a.name,o,l)),t.removeAttribute(a.name),n+=l.length-1}}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(m)<0)continue;const s=t.parentNode,r=e.split(b),a=r.length-1;n+=a;for(let e=0;e<a;e++)s.insertBefore(""===r[e]?document.createComment(""):document.createTextNode(r[e]),t),this.parts.push(new C("node",i++));s.insertBefore(""===r[a]?document.createComment(""):document.createTextNode(r[a]),t),o.push(t)}else if(8===t.nodeType&&t.nodeValue===m){const e=t.parentNode,s=t.previousSibling;null===s||s!==a||s.nodeType!==Node.TEXT_NODE?e.insertBefore(document.createComment(""),t):i--,this.parts.push(new C("node",i++)),o.push(t),null===t.nextSibling?e.insertBefore(document.createComment(""),t):i--,l=a,n++}}for(const e of o)e.parentNode.removeChild(e)}}const w=(e,t)=>S(t)?(t=t(e),N):null===t?void 0:t,S=e=>"function"==typeof e&&!0===e.__litDirective,N={},$=e=>null===e||!("object"==typeof e||"function"==typeof e);class T{constructor(e,t,s,r){this.instance=e,this.element=t,this.name=s,this.strings=r,this.size=r.length-1,this._previousValues=[]}_interpolate(e,t){const s=this.strings,r=s.length-1;let i="";for(let n=0;n<r;n++){i+=s[n];const r=w(this,e[t+n]);if(r&&r!==N&&(Array.isArray(r)||"string"!=typeof r&&r[Symbol.iterator]))for(const e of r)i+=e;else i+=r}return i+s[r]}_equalToPreviousValues(e,t){for(let s=t;s<t+this.size;s++)if(this._previousValues[s]!==e[s]||!$(e[s]))return!1;return!0}setValue(e,t){if(this._equalToPreviousValues(e,t))return;const s=this.strings;let r;2===s.length&&""===s[0]&&""===s[1]?(r=w(this,e[t]),Array.isArray(r)&&(r=r.join(""))):r=this._interpolate(e,t),r!==N&&this.element.setAttribute(this.name,r),this._previousValues=e}}class A{constructor(e,t,s){this.instance=e,this.startNode=t,this.endNode=s,this._previousValue=void 0}setValue(e){if((e=w(this,e))!==N)if($(e)){if(e===this._previousValue)return;this._setText(e)}else e instanceof f?this._setTemplateResult(e):Array.isArray(e)||e[Symbol.iterator]?this._setIterable(e):e instanceof Node?this._setNode(e):void 0!==e.then?this._setPromise(e):this._setText(e)}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_setNode(e){this._previousValue!==e&&(this.clear(),this._insert(e),this._previousValue=e)}_setText(e){const t=this.startNode.nextSibling;e=void 0===e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._setNode(document.createTextNode(e)),this._previousValue=e}_setTemplateResult(e){const t=this.instance._getTemplate(e);let s;this._previousValue&&this._previousValue.template===t?s=this._previousValue:(s=new k(t,this.instance._partCallback,this.instance._getTemplate),this._setNode(s._clone()),this._previousValue=s),s.update(e.values)}_setIterable(e){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const t=this._previousValue;let s=0;for(const r of e){let e=t[s];if(void 0===e){let r=this.startNode;if(s>0){r=t[s-1].endNode=document.createTextNode(""),this._insert(r)}e=new A(this.instance,r,this.endNode),t.push(e)}e.setValue(r),s++}if(0===s)this.clear(),this._previousValue=void 0;else if(s<t.length){const e=t[s-1];t.length=s,this.clear(e.endNode.previousSibling),e.endNode=this.endNode}}_setPromise(e){this._previousValue=e,e.then(t=>{this._previousValue===e&&this.setValue(t)})}clear(e=this.startNode){E(this.startNode.parentNode,e.nextSibling,this.endNode)}}const O=(e,t,s)=>{if("attribute"===t.type)return new T(e,s,t.name,t.strings);if("node"===t.type)return new A(e,s,s.nextSibling);throw new Error(`Unknown part type ${t.type}`)};class k{constructor(e,t,s){this._parts=[],this.template=e,this._partCallback=t,this._getTemplate=s}update(e){let t=0;for(const s of this._parts)s?void 0===s.size?(s.setValue(e[t]),t++):(s.setValue(e,t),t+=s.size):t++}_clone(){const e=this.template.element.content.cloneNode(!0),t=this.template.parts;if(t.length>0){const s=document.createTreeWalker(e,133,null,!1);let r=-1;for(let e=0;e<t.length;e++){const i=t[e],n=P(i);if(n)for(;r<i.index;)r++,s.nextNode();this._parts.push(n?this._partCallback(this,i,s.currentNode):void 0)}}return e}}const E=(e,t,s=null)=>{let r=t;for(;r!==s;){const t=r.nextSibling;e.removeChild(r),r=t}},V=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;const z=e=>{let t=1;const s=document.createTreeWalker(e,V,null,!1);for(;s.nextNode();)t++;return t},R=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(P(t))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const I=(e,t)=>`${e}--${t}`,j=e=>t=>{const s=I(t.type,e);let r=p.get(s);void 0===r&&(r=new Map,p.set(s,r));let i=r.get(t.strings);if(void 0===i){const s=t.getTemplateElement();"object"==typeof window.ShadyCSS&&window.ShadyCSS.prepareTemplateDom(s,e),i=new x(t,s),r.set(t.strings,i)}return i},H=["html","svg"];function B(e){H.forEach(t=>{const s=p.get(I(t,e));void 0!==s&&s.forEach(e=>{const{element:{content:t}}=e,s=t.querySelectorAll("style");!function(e,t){const{element:{content:s},parts:r}=e,i=document.createTreeWalker(s,V,null,!1);let n=0,o=r[0],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,o=r[++n]}c.forEach(e=>e.parentNode.removeChild(e))}(e,new Set(Array.from(s)))})})}const M=new Set,F=(e,t,s)=>{if(!M.has(s)){M.add(s);const r=document.createElement("template");if(Array.from(e.querySelectorAll("style")).forEach(e=>{r.content.appendChild(e)}),window.ShadyCSS.prepareTemplateStyles(r,s),B(s),window.ShadyCSS.nativeShadow){const s=r.content.querySelector("style");null!==s&&(e.insertBefore(s,e.firstChild),function(e,t,s=null){const{element:{content:r},parts:i}=e;if(null==s)return void r.appendChild(t);const n=document.createTreeWalker(r,V,null,!1);let o=R(i),a=0,l=-1;for(;n.nextNode();)for(l++,n.currentNode===s&&(s.parentNode.insertBefore(t,s),a=z(t));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=R(i,o);return}o=R(i,o)}}(t,s.cloneNode(!0),t.element.content.firstChild))}}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=(e,...t)=>new f(e,t,"html",L),L=(e,t,s)=>{if("attribute"===t.type){if("on-"===t.rawName.substr(0,3)){const r=t.rawName.slice(3);return new D(e,s,r)}const r=t.name.substr(t.name.length-1);if("$"===r){const r=t.name.slice(0,-1);return new T(e,s,r,t.strings)}if("?"===r){const r=t.name.slice(0,-1);return new q(e,s,r,t.strings)}return new J(e,s,t.rawName,t.strings)}return O(e,t,s)};class q extends T{setValue(e,t){const s=this.strings;if(2!==s.length||""!==s[0]||""!==s[1])throw new Error("boolean attributes can only contain a single expression");{const s=w(this,e[t]);if(s===N)return;s?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}}class J extends T{setValue(e,t){const s=this.strings;let r;this._equalToPreviousValues(e,t)||((r=2===s.length&&""===s[0]&&""===s[1]?w(this,e[t]):this._interpolate(e,t))!==N&&(this.element[this.name]=r),this._previousValues=e)}}class D{constructor(e,t,s){this.instance=e,this.element=t,this.eventName=s}setValue(e){const t=w(this,e);t!==this._listener&&(null==t?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=t)}handleEvent(e){"function"==typeof this._listener?this._listener.call(this.element,e):"function"==typeof this._listener.handleEvent&&this._listener.handleEvent(e)}}class X extends(_(HTMLElement)){constructor(){super(...arguments),this.__renderComplete=null,this.__resolveRenderComplete=null,this.__isInvalid=!1,this.__isChanging=!1}ready(){this._root=this._createRoot(),super.ready(),this._firstRendered()}connectedCallback(){window.ShadyCSS&&this._root&&window.ShadyCSS.styleElement(this),super.connectedCallback()}_firstRendered(){}_createRoot(){return this.attachShadow({mode:"open"})}_shouldPropertiesChange(e,t,s){const r=this._shouldRender(e,t,s);return!r&&this.__resolveRenderComplete&&this.__resolveRenderComplete(!1),r}_shouldRender(e,t,s){return!0}_propertiesChanged(e,t,s){super._propertiesChanged(e,t,s);const r=this._render(e);r&&void 0!==this._root&&this._applyRender(r,this._root),this._didRender(e,t,s),this.__resolveRenderComplete&&this.__resolveRenderComplete(!0)}_flushProperties(){this.__isChanging=!0,this.__isInvalid=!1,super._flushProperties(),this.__isChanging=!1}_shouldPropertyChange(e,t,s){const r=super._shouldPropertyChange(e,t,s);return r&&this.__isChanging&&console.trace("Setting properties in response to other properties changing "+`considered harmful. Setting '${e}' from `+`'${this._getProperty(e)}' to '${t}'.`),r}_render(e){throw new Error("_render() not implemented")}_applyRender(e,t){!function(e,t,s){const r=j(s),i=r(e);let n=t.__templateInstance;if(void 0!==n&&n.template===i&&n._partCallback===e.partCallback)return void n.update(e.values);n=new k(i,e.partCallback,r),t.__templateInstance=n;const o=n._clone();n.update(e.values);const a=t instanceof ShadowRoot?t.host:void 0;void 0!==a&&"object"==typeof window.ShadyCSS&&(F(o,i,s),window.ShadyCSS.styleElement(a)),E(t,t.firstChild),t.appendChild(o)}(e,t,this.localName)}_didRender(e,t,s){}requestRender(){this._invalidateProperties()}_invalidateProperties(){this.__isInvalid=!0,super._invalidateProperties()}get renderComplete(){return this.__renderComplete||(this.__renderComplete=new Promise(e=>{this.__resolveRenderComplete=(t=>{this.__resolveRenderComplete=this.__renderComplete=null,e(t)})}),!this.__isInvalid&&this.__resolveRenderComplete&&Promise.resolve().then(()=>this.__resolveRenderComplete(!1))),this.__renderComplete}}customElements.define("button-card",class extends X{static get properties(){return{hass:Object,config:Object}}_render({hass:e,config:t}){const s=e.states[t.entity];switch(t.color_type){case"blank-card":return this.blankCardColoredHtml(s,t);case"label-card":return this.labelCardColoredHtml(s,t);case"card":return this.cardColoredHtml(s,t);case"icon":default:return this.iconColoredHtml(s,t)}}getFontColorBasedOnBackgroundColor(e){const t=e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i),s=t||this.hexToRgb(e.substring(1));let r="";return s&&(r=(.299*s[1]+.587*s[2]+.114*s[3])/255>.5?"rgb(62, 62, 62)":"rgb(234, 234, 234)"),r}hexToRgb(e){var t=parseInt(e,16);return[,t>>16&255,t>>8&255,255&t]}buildCssColorAttribute(e,t){let s=t.color;if(e){let r=!!t.state&&t.state.find(t=>t.value===e.state);r?(s=r.color?r.color:t.color_off,"auto"===r.color&&(s=e.attributes.rgb_color?`rgb(${e.attributes.rgb_color.join(",")})`:r.default_color)):("auto"===t.color&&(s=e.attributes.rgb_color?`rgb(${e.attributes.rgb_color.join(",")})`:t.default_color),s="on"===e.state?s:t.color_off)}return s}buildIcon(e,t){let s=t.icon;return"attribute"==t.icon&&e?e.attributes.icon:s}blankCardColoredHtml(e,t){const s=this.buildCssColorAttribute(e,t),r=this.getFontColorBasedOnBackgroundColor(s);return W`
    <ha-card style="color: ${r}; background-color: ${s}; ${t.card_style}" on-tap="${s=>this._toggle(e,t)}">
    </ha-card>
    `}labelCardColoredHtml(e,t){const s=this.buildCssColorAttribute(e,t),r=this.getFontColorBasedOnBackgroundColor(s);return W`
    <style>
    ha-icon {  
      display: flex;
      margin: auto;
    }
    paper-button {
      display: flex;
      margin: auto;
      text-align: center;
    }
    </style>
    <ha-card style="color: ${r};">
      <paper-button noink style="background-color: ${s}; ${t.card_style}">
      <div>
        ${t.icon?W`<ha-icon style="width: ${t.size}; height: ${t.size};" icon="${t.icon}"></ha-icon>`:""}
        ${t.name?W`<span>${t.name}</span>`:""}
       </div>
      </paper-button>
    </ha-card>
    `}cardColoredHtml(e,t){const s=this.buildCssColorAttribute(e,t),r=this.getFontColorBasedOnBackgroundColor(s);return W`
    <style>
    ha-icon {
      display: flex;
      margin: auto;
    }
    paper-button {
      display: flex;
      margin: auto;
      text-align: center;
    }
    </style>
    <ha-card style="color: ${r};" on-tap="${s=>this._toggle(e,t)}">
      <paper-button style="background-color: ${s}; ${t.card_style}">
      <div>
        ${t.icon?W`<ha-icon style="width: ${t.size}; height: ${t.size};" icon="${t.icon}"></ha-icon>`:""}
        ${t.name?W`<span>${t.name}</span>`:""}
        ${t.show_state?W`<span>${e.state} ${e.attributes.unit_of_measurement?e.attributes.unit_of_measurement:""}</span>`:""}
       </div>
      </paper-button>
    </ha-card>
    `}iconColoredHtml(e,t){const s=this.buildCssColorAttribute(e,t),r=this.buildIcon(e,t);return W`
    <style>
    ha-icon {
      display: flex;
      margin: auto;
    }
    paper-button {
      display: flex;
      margin: auto;
      text-align: center;
    }
    </style>
    <ha-card on-tap="${s=>this._toggle(e,t)}">
      <paper-button style="${t.card_style}">
      <div>
        ${t.icon?W`<ha-icon style="color: ${s}; width: ${t.size}; height: ${t.size};" icon="${r}"></ha-icon>`:""}
        ${t.name?W`<div>${t.name}</div>`:""}
        ${t.show_state?W`<div>${e.state} ${e.attributes.unit_of_measurement?e.attributes.unit_of_measurement:""}</div>`:""}
      </div>
      </paper-button>
    </ha-card>
    `}setConfig(e){this.config=e,this.config.color=e.color?e.color:"var(--primary-text-color)",this.config.state=e.state,this.config.size=e.size?e.size:"40%";let t="";e.style&&e.style.forEach(e=>{const s=Object.keys(e)[0],r=e[s];t+=`${s}: ${r};\n`}),this.config.color_type=e.color_type?e.color_type:"icon",this.config.color_off=e.color_off?e.color_off:"var(--disabled-text-color)",this.config.default_color=e.default_color?e.default_color:"var(--primary-text-color)",this.config.card_style=t,this.config.name=e.name?e.name:""}getCardSize(){return 3}_toggle(e,t){switch(t.action){case"toggle":this.hass.callService("homeassistant","toggle",{entity_id:e.entity_id});break;case"more_info":{const t=this.shadowRoot,s={},r={entityId:e.entity_id},i=new Event("hass-more-info",{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return i.detail=r,t.dispatchEvent(i),i}case"service":this.hass.callService(t.service.domain,t.service.action,t.service.data);break;default:this.hass.callService("homeassistant","toggle",{entity_id:e.entity_id})}}})}]);