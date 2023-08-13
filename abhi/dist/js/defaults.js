/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./web/themes/custom/abhi/assets/js/defaults.ts":
/*!******************************************************!*\
  !*** ./web/themes/custom/abhi/assets/js/defaults.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
__webpack_require__(/*! focus-visible */ "./node_modules/focus-visible/dist/focus-visible.js");
var focus_within_1 = __importDefault(__webpack_require__(/*! focus-within */ "./node_modules/focus-within/index.mjs"));
var zenscroll_1 = __importDefault(__webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js"));
var vanilla_lazyload_1 = __importDefault(__webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js"));
var toggleDataAttr_1 = __importDefault(__webpack_require__(/*! ./utils/toggleDataAttr */ "./web/themes/custom/abhi/assets/js/utils/toggleDataAttr.ts"));
__webpack_require__(/*! van11y-accessible-accordion-aria */ "./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js");
var baguettebox_js_1 = __importDefault(__webpack_require__(/*! baguettebox.js */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js"));
(0, focus_within_1["default"])(document, {
  attr: false,
  className: 'focus-within'
});
if (document.querySelectorAll('.gallery')) {
  baguettebox_js_1["default"].run('.gallery');
}
var menuBurgerBtn = document.querySelector('.a-nav-toggle');
function toggleNav() {
  (0, toggleDataAttr_1["default"])(document.body, 'nav', 'open', 'closed');
}
if (menuBurgerBtn) {
  menuBurgerBtn.addEventListener('click', toggleNav);
}
var links = document.querySelectorAll('a');
links.forEach(function (link) {
  if (link.hostname != window.location.hostname) {
    link.setAttribute('rel', 'nofollow noopener');
  }
});
var lazyLoadImages = new vanilla_lazyload_1["default"]();
zenscroll_1["default"].setup(null, 0);

/***/ }),

/***/ "./web/themes/custom/abhi/assets/js/utils/toggleDataAttr.ts":
/*!******************************************************************!*\
  !*** ./web/themes/custom/abhi/assets/js/utils/toggleDataAttr.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
function toggleDataAttr(el, dataname, onState, offState) {
  el.setAttribute("data-".concat(dataname), el.getAttribute("data-".concat(dataname)) === onState ? offState : onState);
}
exports["default"] = toggleDataAttr;

/***/ }),

/***/ "./node_modules/baguettebox.js/dist/baguetteBox.min.js":
/*!*************************************************************!*\
  !*** ./node_modules/baguettebox.js/dist/baguetteBox.min.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.11.1
 * @url https://github.com/feimosi/baguetteBox.js
 */
!function(e,t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function(){"use strict";var r,l,u,c,d,f='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',g='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',p='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',b={},v={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},m={},h=[],o=0,n=!1,i={},a=!1,y=/.+\.(gif|jpe?g|png|webp)/i,w={},k=[],s=null,x=function(e){-1!==e.target.id.indexOf("baguette-img")&&j()},E=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,D()},C=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,X()},B=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,j()},T=function(e){i.count++,1<i.count&&(i.multitouch=!0),i.startX=e.changedTouches[0].pageX,i.startY=e.changedTouches[0].pageY},N=function(e){if(!a&&!i.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-i.startX?(a=!0,D()):t.pageX-i.startX<-40?(a=!0,X()):100<i.startY-t.pageY&&j()}},L=function(){i.count--,i.count<=0&&(i.multitouch=!1),a=!1},A=function(){L()},P=function(e){"block"===r.style.display&&r.contains&&!r.contains(e.target)&&(e.stopPropagation(),Y())};function S(e){if(w.hasOwnProperty(e)){var t=w[e].galleries;[].forEach.call(t,function(e){[].forEach.call(e,function(e){W(e.imageElement,"click",e.eventHandler)}),h===e&&(h=[])}),delete w[e]}}function F(e){switch(e.keyCode){case 37:D();break;case 39:X();break;case 27:j();break;case 36:!function t(e){e&&e.preventDefault();return M(0)}(e);break;case 35:!function n(e){e&&e.preventDefault();return M(h.length-1)}(e)}}function H(e,t){if(h!==e){for(h=e,function s(e){e=e||{};for(var t in v)b[t]=v[t],"undefined"!=typeof e[t]&&(b[t]=e[t]);l.style.transition=l.style.webkitTransition="fadeIn"===b.animation?"opacity .4s ease":"slideIn"===b.animation?"":"none","auto"===b.buttons&&("ontouchstart"in window||1===h.length)&&(b.buttons=!1);u.style.display=c.style.display=b.buttons?"":"none";try{r.style.backgroundColor=b.overlayBackgroundColor}catch(n){}}(t);l.firstChild;)l.removeChild(l.firstChild);for(var n,o=[],i=[],a=k.length=0;a<e.length;a++)(n=J("div")).className="full-image",n.id="baguette-img-"+a,k.push(n),o.push("baguetteBox-figure-"+a),i.push("baguetteBox-figcaption-"+a),l.appendChild(k[a]);r.setAttribute("aria-labelledby",o.join(" ")),r.setAttribute("aria-describedby",i.join(" "))}}function I(e){b.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==r.style.display&&(U(document,"keydown",F),i={count:0,startX:null,startY:null},q(o=e,function(){z(o),V(o)}),R(),r.style.display="block",b.fullScreen&&function t(){r.requestFullscreen?r.requestFullscreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.mozRequestFullScreen&&r.mozRequestFullScreen()}(),setTimeout(function(){r.className="visible",b.bodyClass&&document.body.classList&&document.body.classList.add(b.bodyClass),b.afterShow&&b.afterShow()},50),b.onChange&&b.onChange(o,k.length),s=document.activeElement,Y(),n=!0)}function Y(){b.buttons?u.focus():d.focus()}function j(){b.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==r.style.display&&(W(document,"keydown",F),r.className="",setTimeout(function(){r.style.display="none",document.fullscreen&&function e(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}(),b.bodyClass&&document.body.classList&&document.body.classList.remove(b.bodyClass),b.afterHide&&b.afterHide(),s&&s.focus(),n=!1},500))}function q(t,n){var e=k[t],o=h[t];if(void 0!==e&&void 0!==o)if(e.getElementsByTagName("img")[0])n&&n();else{var i=o.imageElement,a=i.getElementsByTagName("img")[0],s="function"==typeof b.captions?b.captions.call(h,i):i.getAttribute("data-caption")||i.title,r=function d(e){var t=e.href;if(e.dataset){var n=[];for(var o in e.dataset)"at-"!==o.substring(0,3)||isNaN(o.substring(3))||(n[o.replace("at-","")]=e.dataset[o]);for(var i=Object.keys(n).sort(function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1}),a=window.innerWidth*window.devicePixelRatio,s=0;s<i.length-1&&i[s]<a;)s++;t=n[i[s]]||t}return t}(i),l=J("figure");if(l.id="baguetteBox-figure-"+t,l.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',b.captions&&s){var u=J("figcaption");u.id="baguetteBox-figcaption-"+t,u.innerHTML=s,l.appendChild(u)}e.appendChild(l);var c=J("img");c.onload=function(){var e=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");l.removeChild(e),!b.async&&n&&n()},c.setAttribute("src",r),c.alt=a&&a.alt||"",b.titleTag&&s&&(c.title=s),l.appendChild(c),b.async&&n&&n()}}function X(){return M(o+1)}function D(){return M(o-1)}function M(e,t){return!n&&0<=e&&e<t.length?(H(t,b),I(e),!0):e<0?(b.animation&&O("left"),!1):e>=k.length?(b.animation&&O("right"),!1):(q(o=e,function(){z(o),V(o)}),R(),b.onChange&&b.onChange(o,k.length),!0)}function O(e){l.className="bounce-from-"+e,setTimeout(function(){l.className=""},400)}function R(){var e=100*-o+"%";"fadeIn"===b.animation?(l.style.opacity=0,setTimeout(function(){m.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e,l.style.opacity=1},400)):m.transforms?l.style.transform=l.style.webkitTransform="translate3d("+e+",0,0)":l.style.left=e}function z(e){e-o>=b.preload||q(e+1,function(){z(e+1)})}function V(e){o-e>=b.preload||q(e-1,function(){V(e-1)})}function U(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent("on"+t,function(e){(e=e||window.event).target=e.target||e.srcElement,n(e)})}function W(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent("on"+t,n)}function G(e){return document.getElementById(e)}function J(e){return document.createElement(e)}return[].forEach||(Array.prototype.forEach=function(e,t){for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),[].filter||(Array.prototype.filter=function(e,t,n,o,i){for(n=this,o=[],i=0;i<n.length;i++)e.call(t,n[i],i,n)&&o.push(n[i]);return o}),{run:function K(e,t){return m.transforms=function n(){var e=J("div");return"undefined"!=typeof e.style.perspective||"undefined"!=typeof e.style.webkitPerspective}(),m.svg=function o(){var e=J("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"===(e.firstChild&&e.firstChild.namespaceURI)}(),m.passiveEvents=function i(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}(),function a(){if(r=G("baguetteBox-overlay"))return l=G("baguetteBox-slider"),u=G("previous-button"),c=G("next-button"),void(d=G("close-button"));(r=J("div")).setAttribute("role","dialog"),r.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(r),(l=J("div")).id="baguetteBox-slider",r.appendChild(l),(u=J("button")).setAttribute("type","button"),u.id="previous-button",u.setAttribute("aria-label","Previous"),u.innerHTML=m.svg?f:"&lt;",r.appendChild(u),(c=J("button")).setAttribute("type","button"),c.id="next-button",c.setAttribute("aria-label","Next"),c.innerHTML=m.svg?g:"&gt;",r.appendChild(c),(d=J("button")).setAttribute("type","button"),d.id="close-button",d.setAttribute("aria-label","Close"),d.innerHTML=m.svg?p:"&times;",r.appendChild(d),u.className=c.className=d.className="baguetteBox-button",function n(){var e=m.passiveEvents?{passive:!1}:null,t=m.passiveEvents?{passive:!0}:null;U(r,"click",x),U(u,"click",E),U(c,"click",C),U(d,"click",B),U(l,"contextmenu",A),U(r,"touchstart",T,t),U(r,"touchmove",N,e),U(r,"touchend",L),U(document,"focus",P,!0)}()}(),S(e),function s(e,a){var t=document.querySelectorAll(e),n={galleries:[],nodeList:t};return w[e]=n,[].forEach.call(t,function(e){a&&a.filter&&(y=a.filter);var t=[];if(t="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(t=[].filter.call(t,function(e){if(-1===e.className.indexOf(a&&a.ignoreClass))return y.test(e.href)})).length){var i=[];[].forEach.call(t,function(e,t){var n=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,H(i,a),I(t)},o={eventHandler:n,imageElement:e};U(e,"click",n),i.push(o)}),n.galleries.push(i)}}),n.galleries}(e,t)},show:M,showNext:X,showPrevious:D,hide:j,destroy:function e(){!function n(){var e=m.passiveEvents?{passive:!1}:null,t=m.passiveEvents?{passive:!0}:null;W(r,"click",x),W(u,"click",E),W(c,"click",C),W(d,"click",B),W(l,"contextmenu",A),W(r,"touchstart",T,t),W(r,"touchmove",N,e),W(r,"touchend",L),W(document,"focus",P,!0)}(),function t(){for(var e in w)w.hasOwnProperty(e)&&S(e)}(),W(document,"keydown",F),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),w={},h=[],o=0}}});

/***/ }),

/***/ "./node_modules/focus-visible/dist/focus-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/focus-visible/dist/focus-visible.js ***!
  \**********************************************************/
/***/ (function() {

(function (global, factory) {
   true ? factory() :
  0;
}(this, (function () { 'use strict';

  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */
  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;

    var inputTypesAllowlist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };

    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */
    function isValidFocusTarget(el) {
      if (
        el &&
        el !== document &&
        el.nodeName !== 'HTML' &&
        el.nodeName !== 'BODY' &&
        'classList' in el &&
        'contains' in el.classList
      ) {
        return true;
      }
      return false;
    }

    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */
    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;

      if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
        return true;
      }

      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }

      if (el.isContentEditable) {
        return true;
      }

      return false;
    }

    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
    function addFocusVisibleClass(el) {
      if (el.classList.contains('focus-visible')) {
        return;
      }
      el.classList.add('focus-visible');
      el.setAttribute('data-focus-visible-added', '');
    }

    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
    function removeFocusVisibleClass(el) {
      if (!el.hasAttribute('data-focus-visible-added')) {
        return;
      }
      el.classList.remove('focus-visible');
      el.removeAttribute('data-focus-visible-added');
    }

    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */
    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }

      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleClass(scope.activeElement);
      }

      hadKeyboardEvent = true;
    }

    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */
    function onPointerDown(e) {
      hadKeyboardEvent = false;
    }

    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    }

    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */
    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }

      if (
        e.target.classList.contains('focus-visible') ||
        e.target.hasAttribute('data-focus-visible-added')
      ) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
          hadFocusVisibleRecently = false;
        }, 100);
        removeFocusVisibleClass(e.target);
      }
    }

    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */
    function onVisibilityChange(e) {
      if (document.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }
        addInitialPointerMoveListeners();
      }
    }

    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */
    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }

    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }

    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */
    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }

      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    }

    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);

    addInitialPointerMoveListeners();

    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true);

    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
      // Since a ShadowRoot is a special kind of DocumentFragment, it does not
      // have a root element to add a class to. So, we add this attribute to the
      // host element instead:
      scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      document.documentElement.classList.add('js-focus-visible');
      document.documentElement.setAttribute('data-js-focus-visible', '');
    }
  }

  // It is important to wrap all references to global window and document in
  // these checks to support server-side rendering use cases
  // @see https://github.com/WICG/focus-visible/issues/199
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;

    // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
    var event;

    try {
      event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
      // IE11 does not support using CustomEvent as a constructor directly:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }

    window.dispatchEvent(event);
  }

  if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
  }

})));


/***/ }),

/***/ "./web/themes/custom/abhi/assets/sass/global.scss":
/*!********************************************************!*\
  !*** ./web/themes/custom/abhi/assets/sass/global.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./web/themes/custom/abhi/assets/sass/print.scss":
/*!*******************************************************!*\
  !*** ./web/themes/custom/abhi/assets/sass/print.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/van11y-accessible-accordion-aria/dist/van11y-accessible-accordion-aria.min.js ***!
  \****************************************************************************************************/
/***/ (() => {

"use strict";
/**
 * van11y-accessible-accordion-aria - ES2015 accessible accordion system, using ARIA (compatible IE9+ when transpiled)
 * @version v3.0.1
 * @link https://van11y.net/accessible-accordion/
 * @license MIT : https://github.com/nico3333fr/van11y-accessible-accordion-aria/blob/master/LICENSE
 */
function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},loadConfig=function(){var e={},t=function(t,r){e[t]=r},r=function(t){return e[t]},n=function(t){return e[t]};return{set:t,get:r,remove:n}},DATA_HASH_ID="data-hashaccordion-id",pluginConfig=loadConfig(),findById=function(e,t){return document.querySelector("#"+e+"["+DATA_HASH_ID+'="'+t+'"]')},addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},hasClass=function(e,t){return e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)},setAttributes=function(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})},searchParentHashId=function(e,t){for(var r=!1,n=e;1===n.nodeType&&n&&r===!1;)n.hasAttribute(t)===!0?r=!0:n=n.parentNode;return r===!0?n.getAttribute(t):""},searchParent=function(e,t,r){for(var n=!1,A=e;A&&n===!1;)hasClass(A,t)===!0&&A.getAttribute(DATA_HASH_ID)===r?n=!0:A=A.parentNode;return n===!0?A.getAttribute("id"):""},unSelectHeaders=function(e,t){e.forEach(function(e){setAttributes(e,_defineProperty({},t,"false"))})},selectHeader=function(e,t){e.setAttribute(t,!0)},selectHeaderInList=function(e,t,r){var n=void 0;e.forEach(function(e,t){"true"===e.getAttribute(r)&&(n=t)}),"next"===t&&(selectHeader(e[n+1]),setTimeout(function(){e[n+1].focus()},0)),"prev"===t&&(selectHeader(e[n-1]),setTimeout(function(){e[n-1].focus()},0))},plugin=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=_extends({ACCORDION_JS:"js-accordion",ACCORDION_JS_HEADER:"js-accordion__header",ACCORDION_JS_PANEL:"js-accordion__panel",ACCORDION_DATA_PREFIX_CLASS:"data-accordion-prefix-classes",ACCORDION_DATA_OPENED:"data-accordion-opened",ACCORDION_DATA_MULTISELECTABLE:"data-accordion-multiselectable",ACCORDION_DATA_COOL_SELECTORS:"data-accordion-cool-selectors",ACCORDION_PREFIX_IDS:"accordion",ACCORDION_BUTTON_ID:"_tab",ACCORDION_PANEL_ID:"_panel",ACCORDION_STYLE:"accordion",ACCORDION_TITLE_STYLE:"accordion__title",ACCORDION_HEADER_STYLE:"accordion__header",ACCORDION_PANEL_STYLE:"accordion__panel",ACCORDION_ROLE_TABLIST:"tablist",ACCORDION_ROLE_TAB:"tab",ACCORDION_ROLE_TABPANEL:"tabpanel",ATTR_ROLE:"role",ATTR_MULTISELECTABLE:"aria-multiselectable",ATTR_EXPANDED:"aria-expanded",ATTR_LABELLEDBY:"aria-labelledby",ATTR_HIDDEN:"aria-hidden",ATTR_CONTROLS:"aria-controls",ATTR_SELECTED:"aria-selected"},e),r=Math.random().toString(32).slice(2,12);pluginConfig.set(r,t);var n=function(){var e=arguments.length<=0||void 0===arguments[0]?document:arguments[0];return[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS))},A=function(e){n(e).forEach(function(e){var n="z"+Math.random().toString(32).slice(2,12),A=e.hasAttribute(t.ACCORDION_DATA_PREFIX_CLASS)===!0?e.getAttribute(t.ACCORDION_DATA_PREFIX_CLASS)+"-":"",a=e.hasAttribute(t.ACCORDION_DATA_COOL_SELECTORS)===!0;"none"===e.getAttribute(t.ACCORDION_DATA_MULTISELECTABLE)?e.setAttribute(t.ATTR_MULTISELECTABLE,"false"):e.setAttribute(t.ATTR_MULTISELECTABLE,"true"),e.setAttribute(t.ATTR_ROLE,t.ACCORDION_ROLE_TABLIST),e.setAttribute("id",n),e.setAttribute(DATA_HASH_ID,r),addClass(e,A+t.ACCORDION_STYLE);var i=[].slice.call(e.querySelectorAll("."+t.ACCORDION_JS_HEADER));i.forEach(function(i,_){var o,T;if(i.parentNode===e||a!==!1){var E=_+1,s=i.nextElementSibling,C=i.innerHTML,c=document.createElement("BUTTON"),D=i.hasAttribute(t.ACCORDION_DATA_OPENED)===!0?i.getAttribute(t.ACCORDION_DATA_OPENED):"";c.innerHTML=C,addClass(c,t.ACCORDION_JS_HEADER),addClass(c,A+t.ACCORDION_HEADER_STYLE),setAttributes(c,(o={},_defineProperty(o,t.ATTR_ROLE,t.ACCORDION_ROLE_TAB),_defineProperty(o,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(o,t.ATTR_CONTROLS,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(o,t.ATTR_SELECTED,"false"),_defineProperty(o,"type","button"),_defineProperty(o,DATA_HASH_ID,r),o)),i.innerHTML="",i.appendChild(c),addClass(i,A+t.ACCORDION_TITLE_STYLE),removeClass(i,t.ACCORDION_JS_HEADER),addClass(s,A+t.ACCORDION_PANEL_STYLE),setAttributes(s,(T={},_defineProperty(T,t.ATTR_ROLE,t.ACCORDION_ROLE_TABPANEL),_defineProperty(T,t.ATTR_LABELLEDBY,t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_BUTTON_ID+E),_defineProperty(T,"id",t.ACCORDION_PREFIX_IDS+n+t.ACCORDION_PANEL_ID+E),_defineProperty(T,DATA_HASH_ID,r),T)),"true"===D?(c.setAttribute(t.ATTR_EXPANDED,"true"),i.removeAttribute(t.ACCORDION_DATA_OPENED),s.setAttribute(t.ATTR_HIDDEN,"false")):(c.setAttribute(t.ATTR_EXPANDED,"false"),s.setAttribute(t.ATTR_HIDDEN,"true"))}})})};return{attach:A}},main=function(){return["click","keydown","focus"].forEach(function(e){document.body.addEventListener(e,function(t){var r=searchParentHashId(t.target,DATA_HASH_ID);""!==r&&!function(){var n=pluginConfig.get(r);hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"focus"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER));a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),unSelectHeaders(i,n.ATTR_SELECTED),selectHeader(e,n.ATTR_SELECTED)}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"click"===e&&!function(){var e=t.target,A=findById(searchParent(e,n.ACCORDION_JS,r),r),a=A.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,i=[].slice.call(A.querySelectorAll("."+n.ACCORDION_JS_HEADER)),_=A.getAttribute(n.ATTR_MULTISELECTABLE),o=findById(e.getAttribute(n.ATTR_CONTROLS),r),T=e.getAttribute(n.ATTR_EXPANDED);a===!1&&(i=i.filter(function(e){return e.parentNode.parentNode===A})),"false"===T?(e.setAttribute(n.ATTR_EXPANDED,!0),o.removeAttribute(n.ATTR_HIDDEN)):(e.setAttribute(n.ATTR_EXPANDED,!1),o.setAttribute(n.ATTR_HIDDEN,!0)),"false"===_&&i.forEach(function(t){var A=findById(t.getAttribute(n.ATTR_CONTROLS),r);t!==e?(t.setAttribute(n.ATTR_SELECTED,!1),t.setAttribute(n.ATTR_EXPANDED,!1),A.setAttribute(n.ATTR_HIDDEN,!0)):t.setAttribute(n.ATTR_SELECTED,!0)}),setTimeout(function(){e.focus()},0),t.preventDefault()}(),hasClass(t.target,n.ACCORDION_JS_HEADER)===!0&&"keydown"===e&&!function(){var e=t.target,A=searchParent(e,n.ACCORDION_JS,r),a=findById(A,r),i=a.hasAttribute(n.ACCORDION_DATA_COOL_SELECTORS)===!0,_=[].slice.call(a.querySelectorAll("."+n.ACCORDION_JS_HEADER));i===!1&&(_=_.filter(function(e){return e.parentNode.parentNode===a})),36===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):35===t.keyCode?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):37!==t.keyCode&&38!==t.keyCode||t.ctrlKey?40!==t.keyCode&&39!==t.keyCode||t.ctrlKey||("true"===_[_.length-1].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[0],n.ATTR_SELECTED),setTimeout(function(){_[0].focus()},0),t.preventDefault()):(selectHeaderInList(_,"next",n.ATTR_SELECTED),t.preventDefault())):"true"===_[0].getAttribute(n.ATTR_SELECTED)?(unSelectHeaders(_,n.ATTR_SELECTED),selectHeader(_[_.length-1],n.ATTR_SELECTED),setTimeout(function(){_[_.length-1].focus()},0),t.preventDefault()):(selectHeaderInList(_,"prev",n.ATTR_SELECTED),t.preventDefault())}()}()},!0)}),plugin};window.van11yAccessibleAccordionAria=main();var onLoad=function e(){var t=window.van11yAccessibleAccordionAria();t.attach(),document.removeEventListener("DOMContentLoaded",e)};document.addEventListener("DOMContentLoaded",onLoad);

/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(n,t){ true?module.exports=t():0}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",m="applied",p="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,m,p],C=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},M=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},H=function(n,t){j(n).forEach(t)},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),w(n,m),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t)})),$(n,B),X(n,t)},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src))},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src))})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load()},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i)}(0,n,t,e),an(i)}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,p),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i)}(0,n,t,e),an(i)}))},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},sn=function(n){D(n,(function(n){q(n,B)})),q(n,B)},dn={IMG:sn,IFRAME:function(n){q(n,V)},VIDEO:function(n){H(n,(function(n){q(n,V)})),q(n,F),n.load()},OBJECT:function(n){q(n,J)}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),A(n),U(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n)})),un(n)}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i))}(n,t,e,i),C(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},mn=function(n){return n.container.querySelectorAll(n.elements_selector)},pn=function(n){return function(n){return k(n)===p}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||mn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=mn(n),bn(e).filter(pn)).forEach((function(t){M(t,n.class_error),A(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),w(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),mn(this._settings).forEach((function(n){U(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t)}))},restoreAll:function(){var n=this._settings;mn(n).forEach((function(t){fn(t,n)}))}},En.load=function(n,t){var e=c(t);ln(n,e)},En.resetStatus=function(n){A(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(En,window.lazyLoadOptions),En}));


/***/ }),

/***/ "./node_modules/zenscroll/zenscroll.js":
/*!*********************************************!*\
  !*** ./node_modules/zenscroll/zenscroll.js ***!
  \*********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */

/*jshint devel:true, asi:true */

/*global define, module */


(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory()),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	} else {}
}(this, function () {
	"use strict"


	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
	var isNativeSmoothScrollEnabledOn = function (elem) {
		return elem && "getComputedStyle" in window &&
			window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
	}


	// Exit if it’s not a browser environment:
	if (typeof window === "undefined" || !("document" in window)) {
		return {}
	}


	var makeScroller = function (container, defaultDuration, edgeOffset) {

		// Use defaults if not provided
		defaultDuration = defaultDuration || 999 //ms
		if (!edgeOffset && edgeOffset !== 0) {
			// When scrolling, this amount of distance is kept from the edges of the container:
			edgeOffset = 9 //px
		}

		// Handling the life-cycle of the scroller
		var scrollTimeoutId
		var setScrollTimeoutId = function (newValue) {
			scrollTimeoutId = newValue
		}

		/**
		 * Stop the current smooth scroll operation immediately
		 */
		var stopScroll = function () {
			clearTimeout(scrollTimeoutId)
			setScrollTimeoutId(0)
		}

		var getTopWithEdgeOffset = function (elem) {
			return Math.max(0, container.getTopOf(elem) - edgeOffset)
		}

		/**
		 * Scrolls to a specific vertical position in the document.
		 *
		 * @param {targetY} The vertical position within the document.
		 * @param {duration} Optionally the duration of the scroll operation.
		 *        If not provided the default duration is used.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToY = function (targetY, duration, onDone) {
			stopScroll()
			if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
				container.toY(targetY)
				if (onDone) {
					onDone()
				}
			} else {
				var startY = container.getY()
				var distance = Math.max(0, targetY) - startY
				var startTime = new Date().getTime()
				duration = duration || Math.min(Math.abs(distance), defaultDuration);
				(function loopScroll() {
					setScrollTimeoutId(setTimeout(function () {
						// Calculate percentage:
						var p = Math.min(1, (new Date().getTime() - startTime) / duration)
						// Calculate the absolute vertical position:
						var y = Math.max(0, Math.floor(startY + distance*(p < 0.5 ? 2*p*p : p*(4 - p*2)-1)))
						container.toY(y)
						if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
							loopScroll()
						} else {
							setTimeout(stopScroll, 99) // with cooldown time
							if (onDone) {
								onDone()
							}
						}
					}, 9))
				})()
			}
		}

		/**
		 * Scrolls to the top of a specific element.
		 *
		 * @param {elem} The element to scroll to.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToElem = function (elem, duration, onDone) {
			scrollToY(getTopWithEdgeOffset(elem), duration, onDone)
		}

		/**
		 * Scrolls an element into view if necessary.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollIntoView = function (elem, duration, onDone) {
			var elemHeight = elem.getBoundingClientRect().height
			var elemBottom = container.getTopOf(elem) + elemHeight
			var containerHeight = container.getHeight()
			var y = container.getY()
			var containerBottom = y + containerHeight
			if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
				// Element is clipped at top or is higher than screen.
				scrollToElem(elem, duration, onDone)
			} else if ((elemBottom + edgeOffset) > containerBottom) {
				// Element is clipped at the bottom.
				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone)
			} else if (onDone) {
				onDone()
			}
		}

		/**
		 * Scrolls to the center of an element.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {offset} Optionally the offset of the top of the element from the center of the screen.
		 *        A value of 0 is ignored.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToCenterOf = function (elem, duration, offset, onDone) {
			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight()/2 + (offset || elem.getBoundingClientRect().height/2)), duration, onDone)
		}

		/**
		 * Changes default settings for this scroller.
		 *
		 * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
		 *        Ignored if null or undefined.
		 * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
		 * @returns An object with the current values.
		 */
		var setup = function (newDefaultDuration, newEdgeOffset) {
			if (newDefaultDuration === 0 || newDefaultDuration) {
				defaultDuration = newDefaultDuration
			}
			if (newEdgeOffset === 0 || newEdgeOffset) {
				edgeOffset = newEdgeOffset
			}
			return {
				defaultDuration: defaultDuration,
				edgeOffset: edgeOffset
			}
		}

		return {
			setup: setup,
			to: scrollToElem,
			toY: scrollToY,
			intoView: scrollIntoView,
			center: scrollToCenterOf,
			stop: stopScroll,
			moving: function () { return !!scrollTimeoutId },
			getY: container.getY,
			getTopOf: container.getTopOf
		}

	}


	var docElem = document.documentElement
	var getDocY = function () { return window.scrollY || docElem.scrollTop }

	// Create a scroller for the document:
	var zenscroll = makeScroller({
		body: document.scrollingElement || document.body,
		toY: function (y) { window.scrollTo(0, y) },
		getY: getDocY,
		getHeight: function () { return window.innerHeight || docElem.clientHeight },
		getTopOf: function (elem) { return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop }
	})


	/**
	 * Creates a scroller from the provided container element (e.g., a DIV)
	 *
	 * @param {scrollContainer} The vertical position within the document.
	 * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
	 *        Ignored if 0 or null or undefined.
	 * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
	 *        Ignored if null or undefined.
	 * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
	 */
	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
		return makeScroller({
			body: scrollContainer,
			toY: function (y) { scrollContainer.scrollTop = y },
			getY: function () { return scrollContainer.scrollTop },
			getHeight: function () { return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight) },
			getTopOf: function (elem) { return elem.offsetTop }
		}, defaultDuration, edgeOffset)
	}


	// Automatic link-smoothing on achors
	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

		var isHistorySupported = "history" in window && "pushState" in history
		var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history

		// On first load & refresh make sure the browser restores the position first
		if (isScrollRestorationSupported) {
			history.scrollRestoration = "auto"
		}

		window.addEventListener("load", function () {

			if (isScrollRestorationSupported) {
				// Set it to manual
				setTimeout(function () { history.scrollRestoration = "manual" }, 9)
				window.addEventListener("popstate", function (event) {
					if (event.state && "zenscrollY" in event.state) {
						zenscroll.toY(event.state.zenscrollY)
					}
				}, false)
			}

			// Add edge offset on first load if necessary
			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
			if (window.location.hash) {
				setTimeout(function () {
					// Adjustment is only needed if there is an edge offset:
					var edgeOffset = zenscroll.setup().edgeOffset
					if (edgeOffset) {
						var targetElem = document.getElementById(window.location.href.split("#")[1])
						if (targetElem) {
							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset)
							var diff = zenscroll.getY() - targetY
							// Only do the adjustment if the browser is very close to the element:
							if (0 <= diff && diff < 9 ) {
								window.scrollTo(0, targetY)
							}
						}
					}
				}, 9)
			}

		}, false)

		// Handling clicks on anchors
		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)")
		window.addEventListener("click", function (event) {
			var anchor = event.target
			while (anchor && anchor.tagName !== "A") {
				anchor = anchor.parentNode
			}
			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
				return
			}
			// Save the current scrolling position so it can be used for scroll restoration:
			if (isScrollRestorationSupported) {
				var historyState = history.state && typeof history.state === "object" ? history.state : {}
				historyState.zenscrollY = zenscroll.getY()
				try {
					history.replaceState(historyState, "")
				} catch (e) {
					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
				}
			}
			// Find the referenced ID:
			var href = anchor.getAttribute("href") || ""
			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
				var targetY = 0
				var targetElem = document.getElementById(href.substring(1))
				if (href !== "#") {
					if (!targetElem) {
						// Let the browser handle the click if the target ID is not found.
						return
					}
					targetY = zenscroll.getTopOf(targetElem)
				}
				event.preventDefault()
				// By default trigger the browser's `hashchange` event...
				var onDone = function () { window.location = href }
				// ...unless there is an edge offset specified
				var edgeOffset = zenscroll.setup().edgeOffset
				if (edgeOffset) {
					targetY = Math.max(0, targetY - edgeOffset)
					if (isHistorySupported) {
						onDone = function () { history.pushState({}, "", href) }
					}
				}
				zenscroll.toY(targetY, null, onDone)
			}
		}, false)

	}


	return zenscroll


}));


/***/ }),

/***/ "./node_modules/focus-within/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/focus-within/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function focusWithin(document, opts) {
  const className = Object(opts).className;
  const attr = Object(opts).attr || 'focus-within';
  const force = Object(opts).force;
  const lastElements = [];

  try {
    document.querySelector(':focus-within');

    if (!force) {
      return initialize;
    }
  } catch (ignoredError) {
    /* do nothing and continue */
  }

  function onfocuschange() {
    let lastElement;

    while (lastElement = lastElements.pop()) {
      if (attr) {
        lastElement.removeAttribute(attr);
      }

      if (className) {
        lastElement.classList.remove(className);
      }
    }

    let activeElement = document.activeElement; // only add focus if it has not been added and is not the document element

    if (!/^(#document|HTML|BODY)$/.test(Object(activeElement).nodeName)) {
      while (activeElement && activeElement.nodeType === 1) {
        if (attr) {
          activeElement.setAttribute(attr, '');
        }

        if (className) {
          activeElement.classList.add(className);
        }

        lastElements.push(activeElement);
        activeElement = activeElement.parentNode;
      }
    }
  }

  function initialize() {
    document.addEventListener('focus', onfocuschange, true);
    document.addEventListener('blur', onfocuschange, true);
  }
  /**
  * Callback wrapper for check loaded state
  */

  /* eslint-disable */


  !function load() {
    if (/m/.test(document.readyState)) {
      document.removeEventListener('readystatechange', load) | initialize();
    } else {
      document.addEventListener('readystatechange', load);
    }
  }();
  /* eslint-enable */

  return initialize;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (focusWithin);
//# sourceMappingURL=index.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/defaults": 0,
/******/ 			"css/print": 0,
/******/ 			"css/global": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksyd_d9"] = self["webpackChunksyd_d9"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/print","css/global"], () => (__webpack_require__("./web/themes/custom/abhi/assets/js/defaults.ts")))
/******/ 	__webpack_require__.O(undefined, ["css/print","css/global"], () => (__webpack_require__("./web/themes/custom/abhi/assets/sass/global.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/print","css/global"], () => (__webpack_require__("./web/themes/custom/abhi/assets/sass/print.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3ZURDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYSxnQ0FB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Q0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFbERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3lkLWQ5Ly4vd2ViL3RoZW1lcy9jdXN0b20vYWJoaS9hc3NldHMvanMvZGVmYXVsdHMudHMiLCJ3ZWJwYWNrOi8vc3lkLWQ5Ly4vd2ViL3RoZW1lcy9jdXN0b20vYWJoaS9hc3NldHMvanMvdXRpbHMvdG9nZ2xlRGF0YUF0dHIudHMiLCJ3ZWJwYWNrOi8vc3lkLWQ5Ly4vbm9kZV9tb2R1bGVzL2JhZ3VldHRlYm94LmpzL2Rpc3QvYmFndWV0dGVCb3gubWluLmpzIiwid2VicGFjazovL3N5ZC1kOS8uL25vZGVfbW9kdWxlcy9mb2N1cy12aXNpYmxlL2Rpc3QvZm9jdXMtdmlzaWJsZS5qcyIsIndlYnBhY2s6Ly9zeWQtZDkvLi93ZWIvdGhlbWVzL2N1c3RvbS9hYmhpL2Fzc2V0cy9zYXNzL2dsb2JhbC5zY3NzP2RlYTciLCJ3ZWJwYWNrOi8vc3lkLWQ5Ly4vd2ViL3RoZW1lcy9jdXN0b20vYWJoaS9hc3NldHMvc2Fzcy9wcmludC5zY3NzP2FlZTciLCJ3ZWJwYWNrOi8vc3lkLWQ5Ly4vbm9kZV9tb2R1bGVzL3ZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhL2Rpc3QvdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEubWluLmpzIiwid2VicGFjazovL3N5ZC1kOS8uL25vZGVfbW9kdWxlcy92YW5pbGxhLWxhenlsb2FkL2Rpc3QvbGF6eWxvYWQubWluLmpzIiwid2VicGFjazovL3N5ZC1kOS8uL25vZGVfbW9kdWxlcy96ZW5zY3JvbGwvemVuc2Nyb2xsLmpzIiwid2VicGFjazovL3N5ZC1kOS8uL25vZGVfbW9kdWxlcy9mb2N1cy13aXRoaW4vaW5kZXgubWpzIiwid2VicGFjazovL3N5ZC1kOS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zeWQtZDkvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zeWQtZDkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N5ZC1kOS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N5ZC1kOS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N5ZC1kOS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zeWQtZDkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zeWQtZDkvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N5ZC1kOS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmb2N1cy12aXNpYmxlJ1xuaW1wb3J0IEZvY3VzV2l0aGluIGZyb20gJ2ZvY3VzLXdpdGhpbidcbmltcG9ydCB6ZW5zY3JvbGwgZnJvbSAnemVuc2Nyb2xsJ1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3ZhbmlsbGEtbGF6eWxvYWQnXG5pbXBvcnQgdG9nZ2xlRGF0YUF0dHIgZnJvbSAnLi91dGlscy90b2dnbGVEYXRhQXR0cidcbmltcG9ydCAndmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEnXG5pbXBvcnQgYmFndWV0dGVCb3ggZnJvbSAnYmFndWV0dGVib3guanMnXG4vL2ltcG9ydCBDaG9pY2VzIGZyb20gJ2Nob2ljZXMuanMnO1xuXG4vKipcbiAqIEZvY3VzIHdpdGhpbiBwb2x5ZmlsbFxuICovXG5Gb2N1c1dpdGhpbihkb2N1bWVudCwge1xuICBhdHRyOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiAnZm9jdXMtd2l0aGluJyxcbn0pXG5cbi8qXG4gIEJldHRlciA8c2VsZWN0PiBlbGVtZW50c1xuICB1cmw6IGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2Nob2ljZXMuanNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBVc2FnZTpcbiAgU2VsZWN0cyBhbGwgPHNlbGVjdD4gZWxlbWVudHMgYnkgZGVmYXVsdFxuXG4gIE5vdGU6IElmIG5vdCB1c2luZywgcmVtb3ZlIEBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvY2hvaWNlcy5qcy9hc3NldHMvc3R5bGVzL3Njc3MvY2hvaWNlc1wiOyBmcm9tIGBhc3NldHMvc2Fzcy9nbG9iYWwuc2Nzc2BcbiovXG4vLyBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykubGVuZ3RoID4gMCkge1xuLy8gICBjb25zdCBzZWxlY3RFbGVtZW50cyA9IG5ldyBDaG9pY2VzKCdzZWxlY3QnKTtcbi8vIH1cblxuLypcbiAgSW1hZ2UgZ2FsbGVyaWVzXG4gIHVybDogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmxpY2tpdHlcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBVc2FnZTpcbiAgPGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cbiAgICAgIDxhIGhyZWY9XCJwYXRoLXRvLWxhcmdlLWltYWdlXCIgZGF0YS1jYXB0aW9uPVwiXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJwYXRoLXRvLXRodW1ibmFpbFwiIGFsdD1cIlwiIC8+XG4gICAgICA8L2E+XG4gIDwvZGl2PlxuXG4gIE5vdGU6IElmIG5vdCB1c2luZywgcmVtb3ZlIEBpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvYmFndWV0dGVib3guanMvc3JjL2JhZ3VldHRlQm94XCI7IGZyb20gYGFzc2V0cy9zYXNzL2dsb2JhbC5zY3NzYFxuKi9cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5JykpIHtcbiAgYmFndWV0dGVCb3gucnVuKCcuZ2FsbGVyeScpXG59XG5cbi8qXG4gIE1lbnUgYnVyZ2VyXG4qL1xuY29uc3QgbWVudUJ1cmdlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hLW5hdi10b2dnbGUnKVxuXG5mdW5jdGlvbiB0b2dnbGVOYXYoKSB7XG4gIHRvZ2dsZURhdGFBdHRyKGRvY3VtZW50LmJvZHksICduYXYnLCAnb3BlbicsICdjbG9zZWQnKVxufVxuXG5pZiAobWVudUJ1cmdlckJ0bikge1xuICBtZW51QnVyZ2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTmF2KVxufVxuXG4vKlxuICBBdXRvbWF0aWNhbGx5IHNldCBleHRlcm5hbCBsaW5rcyB0byBoYXZlIG5vZm9sbG93L25vb3BlbmVyIGF0dHJzXG4qL1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgaWYgKGxpbmsuaG9zdG5hbWUgIT0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKSB7XG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub2ZvbGxvdyBub29wZW5lcicpXG4gIH1cbn0pXG5cbi8vIExhenlMb2FkXG5jb25zdCBsYXp5TG9hZEltYWdlcyA9IG5ldyBMYXp5TG9hZCgpXG5cbi8qXG4gIFplbnNjcm9sbFxuICAtIFNldCBlZGdlIG9mZnNldCB0byAwIHRvIHByZXZuZXQgYnJlYWtpbmcgdGFiIG9yZGVyXG4qL1xuemVuc2Nyb2xsLnNldHVwKG51bGwsIDApXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVEYXRhQXR0cihcbiAgZWw6IEVsZW1lbnQsXG4gIGRhdGFuYW1lOiBzdHJpbmcsXG4gIG9uU3RhdGU6IHN0cmluZyxcbiAgb2ZmU3RhdGU6IHN0cmluZ1xuKSB7XG4gIGVsLnNldEF0dHJpYnV0ZShcbiAgICBgZGF0YS0ke2RhdGFuYW1lfWAsXG4gICAgZWwuZ2V0QXR0cmlidXRlKGBkYXRhLSR7ZGF0YW5hbWV9YCkgPT09IG9uU3RhdGUgPyBvZmZTdGF0ZSA6IG9uU3RhdGVcbiAgKVxufVxuIiwiLyohXG4gKiBiYWd1ZXR0ZUJveC5qc1xuICogQGF1dGhvciAgZmVpbW9zaVxuICogQHZlcnNpb24gMS4xMS4xXG4gKiBAdXJsIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWltb3NpL2JhZ3VldHRlQm94LmpzXG4gKi9cbiFmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9dCgpOmUuYmFndWV0dGVCb3g9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHIsbCx1LGMsZCxmPSc8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI2MFwiPjxwb2x5bGluZSBwb2ludHM9XCIzMCAxMCAxMCAzMCAzMCA1MFwiIHN0cm9rZT1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHN0cm9rZS13aWR0aD1cIjRcInN0cm9rZS1saW5lY2FwPVwiYnV0dFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxnPSc8c3ZnIHdpZHRoPVwiNDRcIiBoZWlnaHQ9XCI2MFwiPjxwb2x5bGluZSBwb2ludHM9XCIxNCAxMCAzNCAzMCAxNCA1MFwiIHN0cm9rZT1cInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiIHN0cm9rZS13aWR0aD1cIjRcInN0cm9rZS1saW5lY2FwPVwiYnV0dFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIi8+PC9zdmc+JyxwPSc8c3ZnIHdpZHRoPVwiMzBcIiBoZWlnaHQ9XCIzMFwiPjxnIHN0cm9rZT1cInJnYigxNjAsMTYwLDE2MClcIiBzdHJva2Utd2lkdGg9XCI0XCI+PGxpbmUgeDE9XCI1XCIgeTE9XCI1XCIgeDI9XCIyNVwiIHkyPVwiMjVcIi8+PGxpbmUgeDE9XCI1XCIgeTE9XCIyNVwiIHgyPVwiMjVcIiB5Mj1cIjVcIi8+PC9nPjwvc3ZnPicsYj17fSx2PXtjYXB0aW9uczohMCxidXR0b25zOlwiYXV0b1wiLGZ1bGxTY3JlZW46ITEsbm9TY3JvbGxiYXJzOiExLGJvZHlDbGFzczpcImJhZ3VldHRlQm94LW9wZW5cIix0aXRsZVRhZzohMSxhc3luYzohMSxwcmVsb2FkOjIsYW5pbWF0aW9uOlwic2xpZGVJblwiLGFmdGVyU2hvdzpudWxsLGFmdGVySGlkZTpudWxsLG9uQ2hhbmdlOm51bGwsb3ZlcmxheUJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwwLDAsLjgpXCJ9LG09e30saD1bXSxvPTAsbj0hMSxpPXt9LGE9ITEseT0vLitcXC4oZ2lmfGpwZT9nfHBuZ3x3ZWJwKS9pLHc9e30saz1bXSxzPW51bGwseD1mdW5jdGlvbihlKXstMSE9PWUudGFyZ2V0LmlkLmluZGV4T2YoXCJiYWd1ZXR0ZS1pbWdcIikmJmooKX0sRT1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbj9lLnN0b3BQcm9wYWdhdGlvbigpOmUuY2FuY2VsQnViYmxlPSEwLEQoKX0sQz1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbj9lLnN0b3BQcm9wYWdhdGlvbigpOmUuY2FuY2VsQnViYmxlPSEwLFgoKX0sQj1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbj9lLnN0b3BQcm9wYWdhdGlvbigpOmUuY2FuY2VsQnViYmxlPSEwLGooKX0sVD1mdW5jdGlvbihlKXtpLmNvdW50KyssMTxpLmNvdW50JiYoaS5tdWx0aXRvdWNoPSEwKSxpLnN0YXJ0WD1lLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYLGkuc3RhcnRZPWUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVl9LE49ZnVuY3Rpb24oZSl7aWYoIWEmJiFpLm11bHRpdG91Y2gpe2UucHJldmVudERlZmF1bHQ/ZS5wcmV2ZW50RGVmYXVsdCgpOmUucmV0dXJuVmFsdWU9ITE7dmFyIHQ9ZS50b3VjaGVzWzBdfHxlLmNoYW5nZWRUb3VjaGVzWzBdOzQwPHQucGFnZVgtaS5zdGFydFg/KGE9ITAsRCgpKTp0LnBhZ2VYLWkuc3RhcnRYPC00MD8oYT0hMCxYKCkpOjEwMDxpLnN0YXJ0WS10LnBhZ2VZJiZqKCl9fSxMPWZ1bmN0aW9uKCl7aS5jb3VudC0tLGkuY291bnQ8PTAmJihpLm11bHRpdG91Y2g9ITEpLGE9ITF9LEE9ZnVuY3Rpb24oKXtMKCl9LFA9ZnVuY3Rpb24oZSl7XCJibG9ja1wiPT09ci5zdHlsZS5kaXNwbGF5JiZyLmNvbnRhaW5zJiYhci5jb250YWlucyhlLnRhcmdldCkmJihlLnN0b3BQcm9wYWdhdGlvbigpLFkoKSl9O2Z1bmN0aW9uIFMoZSl7aWYody5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIHQ9d1tlXS5nYWxsZXJpZXM7W10uZm9yRWFjaC5jYWxsKHQsZnVuY3Rpb24oZSl7W10uZm9yRWFjaC5jYWxsKGUsZnVuY3Rpb24oZSl7VyhlLmltYWdlRWxlbWVudCxcImNsaWNrXCIsZS5ldmVudEhhbmRsZXIpfSksaD09PWUmJihoPVtdKX0pLGRlbGV0ZSB3W2VdfX1mdW5jdGlvbiBGKGUpe3N3aXRjaChlLmtleUNvZGUpe2Nhc2UgMzc6RCgpO2JyZWFrO2Nhc2UgMzk6WCgpO2JyZWFrO2Nhc2UgMjc6aigpO2JyZWFrO2Nhc2UgMzY6IWZ1bmN0aW9uIHQoZSl7ZSYmZS5wcmV2ZW50RGVmYXVsdCgpO3JldHVybiBNKDApfShlKTticmVhaztjYXNlIDM1OiFmdW5jdGlvbiBuKGUpe2UmJmUucHJldmVudERlZmF1bHQoKTtyZXR1cm4gTShoLmxlbmd0aC0xKX0oZSl9fWZ1bmN0aW9uIEgoZSx0KXtpZihoIT09ZSl7Zm9yKGg9ZSxmdW5jdGlvbiBzKGUpe2U9ZXx8e307Zm9yKHZhciB0IGluIHYpYlt0XT12W3RdLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlW3RdJiYoYlt0XT1lW3RdKTtsLnN0eWxlLnRyYW5zaXRpb249bC5zdHlsZS53ZWJraXRUcmFuc2l0aW9uPVwiZmFkZUluXCI9PT1iLmFuaW1hdGlvbj9cIm9wYWNpdHkgLjRzIGVhc2VcIjpcInNsaWRlSW5cIj09PWIuYW5pbWF0aW9uP1wiXCI6XCJub25lXCIsXCJhdXRvXCI9PT1iLmJ1dHRvbnMmJihcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHwxPT09aC5sZW5ndGgpJiYoYi5idXR0b25zPSExKTt1LnN0eWxlLmRpc3BsYXk9Yy5zdHlsZS5kaXNwbGF5PWIuYnV0dG9ucz9cIlwiOlwibm9uZVwiO3RyeXtyLnN0eWxlLmJhY2tncm91bmRDb2xvcj1iLm92ZXJsYXlCYWNrZ3JvdW5kQ29sb3J9Y2F0Y2gobil7fX0odCk7bC5maXJzdENoaWxkOylsLnJlbW92ZUNoaWxkKGwuZmlyc3RDaGlsZCk7Zm9yKHZhciBuLG89W10saT1bXSxhPWsubGVuZ3RoPTA7YTxlLmxlbmd0aDthKyspKG49SihcImRpdlwiKSkuY2xhc3NOYW1lPVwiZnVsbC1pbWFnZVwiLG4uaWQ9XCJiYWd1ZXR0ZS1pbWctXCIrYSxrLnB1c2gobiksby5wdXNoKFwiYmFndWV0dGVCb3gtZmlndXJlLVwiK2EpLGkucHVzaChcImJhZ3VldHRlQm94LWZpZ2NhcHRpb24tXCIrYSksbC5hcHBlbmRDaGlsZChrW2FdKTtyLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLG8uam9pbihcIiBcIikpLHIuc2V0QXR0cmlidXRlKFwiYXJpYS1kZXNjcmliZWRieVwiLGkuam9pbihcIiBcIikpfX1mdW5jdGlvbiBJKGUpe2Iubm9TY3JvbGxiYXJzJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WT1cImhpZGRlblwiLGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZPVwic2Nyb2xsXCIpLFwiYmxvY2tcIiE9PXIuc3R5bGUuZGlzcGxheSYmKFUoZG9jdW1lbnQsXCJrZXlkb3duXCIsRiksaT17Y291bnQ6MCxzdGFydFg6bnVsbCxzdGFydFk6bnVsbH0scShvPWUsZnVuY3Rpb24oKXt6KG8pLFYobyl9KSxSKCksci5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixiLmZ1bGxTY3JlZW4mJmZ1bmN0aW9uIHQoKXtyLnJlcXVlc3RGdWxsc2NyZWVuP3IucmVxdWVzdEZ1bGxzY3JlZW4oKTpyLndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuP3Iud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4oKTpyLm1velJlcXVlc3RGdWxsU2NyZWVuJiZyLm1velJlcXVlc3RGdWxsU2NyZWVuKCl9KCksc2V0VGltZW91dChmdW5jdGlvbigpe3IuY2xhc3NOYW1lPVwidmlzaWJsZVwiLGIuYm9keUNsYXNzJiZkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGIuYm9keUNsYXNzKSxiLmFmdGVyU2hvdyYmYi5hZnRlclNob3coKX0sNTApLGIub25DaGFuZ2UmJmIub25DaGFuZ2UobyxrLmxlbmd0aCkscz1kb2N1bWVudC5hY3RpdmVFbGVtZW50LFkoKSxuPSEwKX1mdW5jdGlvbiBZKCl7Yi5idXR0b25zP3UuZm9jdXMoKTpkLmZvY3VzKCl9ZnVuY3Rpb24gaigpe2Iubm9TY3JvbGxiYXJzJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93WT1cImF1dG9cIixkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WT1cImF1dG9cIiksXCJub25lXCIhPT1yLnN0eWxlLmRpc3BsYXkmJihXKGRvY3VtZW50LFwia2V5ZG93blwiLEYpLHIuY2xhc3NOYW1lPVwiXCIsc2V0VGltZW91dChmdW5jdGlvbigpe3Iuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixkb2N1bWVudC5mdWxsc2NyZWVuJiZmdW5jdGlvbiBlKCl7ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4/ZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKTpkb2N1bWVudC5tb3pDYW5jZWxGdWxsU2NyZWVuP2RvY3VtZW50Lm1vekNhbmNlbEZ1bGxTY3JlZW4oKTpkb2N1bWVudC53ZWJraXRFeGl0RnVsbHNjcmVlbiYmZG9jdW1lbnQud2Via2l0RXhpdEZ1bGxzY3JlZW4oKX0oKSxiLmJvZHlDbGFzcyYmZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QmJmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShiLmJvZHlDbGFzcyksYi5hZnRlckhpZGUmJmIuYWZ0ZXJIaWRlKCkscyYmcy5mb2N1cygpLG49ITF9LDUwMCkpfWZ1bmN0aW9uIHEodCxuKXt2YXIgZT1rW3RdLG89aFt0XTtpZih2b2lkIDAhPT1lJiZ2b2lkIDAhPT1vKWlmKGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpbWdcIilbMF0pbiYmbigpO2Vsc2V7dmFyIGk9by5pbWFnZUVsZW1lbnQsYT1pLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW1nXCIpWzBdLHM9XCJmdW5jdGlvblwiPT10eXBlb2YgYi5jYXB0aW9ucz9iLmNhcHRpb25zLmNhbGwoaCxpKTppLmdldEF0dHJpYnV0ZShcImRhdGEtY2FwdGlvblwiKXx8aS50aXRsZSxyPWZ1bmN0aW9uIGQoZSl7dmFyIHQ9ZS5ocmVmO2lmKGUuZGF0YXNldCl7dmFyIG49W107Zm9yKHZhciBvIGluIGUuZGF0YXNldClcImF0LVwiIT09by5zdWJzdHJpbmcoMCwzKXx8aXNOYU4oby5zdWJzdHJpbmcoMykpfHwobltvLnJlcGxhY2UoXCJhdC1cIixcIlwiKV09ZS5kYXRhc2V0W29dKTtmb3IodmFyIGk9T2JqZWN0LmtleXMobikuc29ydChmdW5jdGlvbihlLHQpe3JldHVybiBwYXJzZUludChlLDEwKTxwYXJzZUludCh0LDEwKT8tMToxfSksYT13aW5kb3cuaW5uZXJXaWR0aCp3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxzPTA7czxpLmxlbmd0aC0xJiZpW3NdPGE7KXMrKzt0PW5baVtzXV18fHR9cmV0dXJuIHR9KGkpLGw9SihcImZpZ3VyZVwiKTtpZihsLmlkPVwiYmFndWV0dGVCb3gtZmlndXJlLVwiK3QsbC5pbm5lckhUTUw9JzxkaXYgY2xhc3M9XCJiYWd1ZXR0ZUJveC1zcGlubmVyXCI+PGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LWRvdWJsZS1ib3VuY2UxXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJhZ3VldHRlQm94LWRvdWJsZS1ib3VuY2UyXCI+PC9kaXY+PC9kaXY+JyxiLmNhcHRpb25zJiZzKXt2YXIgdT1KKFwiZmlnY2FwdGlvblwiKTt1LmlkPVwiYmFndWV0dGVCb3gtZmlnY2FwdGlvbi1cIit0LHUuaW5uZXJIVE1MPXMsbC5hcHBlbmRDaGlsZCh1KX1lLmFwcGVuZENoaWxkKGwpO3ZhciBjPUooXCJpbWdcIik7Yy5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhZ3VldHRlLWltZy1cIit0K1wiIC5iYWd1ZXR0ZUJveC1zcGlubmVyXCIpO2wucmVtb3ZlQ2hpbGQoZSksIWIuYXN5bmMmJm4mJm4oKX0sYy5zZXRBdHRyaWJ1dGUoXCJzcmNcIixyKSxjLmFsdD1hJiZhLmFsdHx8XCJcIixiLnRpdGxlVGFnJiZzJiYoYy50aXRsZT1zKSxsLmFwcGVuZENoaWxkKGMpLGIuYXN5bmMmJm4mJm4oKX19ZnVuY3Rpb24gWCgpe3JldHVybiBNKG8rMSl9ZnVuY3Rpb24gRCgpe3JldHVybiBNKG8tMSl9ZnVuY3Rpb24gTShlLHQpe3JldHVybiFuJiYwPD1lJiZlPHQubGVuZ3RoPyhIKHQsYiksSShlKSwhMCk6ZTwwPyhiLmFuaW1hdGlvbiYmTyhcImxlZnRcIiksITEpOmU+PWsubGVuZ3RoPyhiLmFuaW1hdGlvbiYmTyhcInJpZ2h0XCIpLCExKToocShvPWUsZnVuY3Rpb24oKXt6KG8pLFYobyl9KSxSKCksYi5vbkNoYW5nZSYmYi5vbkNoYW5nZShvLGsubGVuZ3RoKSwhMCl9ZnVuY3Rpb24gTyhlKXtsLmNsYXNzTmFtZT1cImJvdW5jZS1mcm9tLVwiK2Usc2V0VGltZW91dChmdW5jdGlvbigpe2wuY2xhc3NOYW1lPVwiXCJ9LDQwMCl9ZnVuY3Rpb24gUigpe3ZhciBlPTEwMCotbytcIiVcIjtcImZhZGVJblwiPT09Yi5hbmltYXRpb24/KGwuc3R5bGUub3BhY2l0eT0wLHNldFRpbWVvdXQoZnVuY3Rpb24oKXttLnRyYW5zZm9ybXM/bC5zdHlsZS50cmFuc2Zvcm09bC5zdHlsZS53ZWJraXRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUzZChcIitlK1wiLDAsMClcIjpsLnN0eWxlLmxlZnQ9ZSxsLnN0eWxlLm9wYWNpdHk9MX0sNDAwKSk6bS50cmFuc2Zvcm1zP2wuc3R5bGUudHJhbnNmb3JtPWwuc3R5bGUud2Via2l0VHJhbnNmb3JtPVwidHJhbnNsYXRlM2QoXCIrZStcIiwwLDApXCI6bC5zdHlsZS5sZWZ0PWV9ZnVuY3Rpb24geihlKXtlLW8+PWIucHJlbG9hZHx8cShlKzEsZnVuY3Rpb24oKXt6KGUrMSl9KX1mdW5jdGlvbiBWKGUpe28tZT49Yi5wcmVsb2FkfHxxKGUtMSxmdW5jdGlvbigpe1YoZS0xKX0pfWZ1bmN0aW9uIFUoZSx0LG4sbyl7ZS5hZGRFdmVudExpc3RlbmVyP2UuYWRkRXZlbnRMaXN0ZW5lcih0LG4sbyk6ZS5hdHRhY2hFdmVudChcIm9uXCIrdCxmdW5jdGlvbihlKXsoZT1lfHx3aW5kb3cuZXZlbnQpLnRhcmdldD1lLnRhcmdldHx8ZS5zcmNFbGVtZW50LG4oZSl9KX1mdW5jdGlvbiBXKGUsdCxuLG8pe2UucmVtb3ZlRXZlbnRMaXN0ZW5lcj9lLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuLG8pOmUuZGV0YWNoRXZlbnQoXCJvblwiK3Qsbil9ZnVuY3Rpb24gRyhlKXtyZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZSl9ZnVuY3Rpb24gSihlKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKX1yZXR1cm5bXS5mb3JFYWNofHwoQXJyYXkucHJvdG90eXBlLmZvckVhY2g9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49MDtuPHRoaXMubGVuZ3RoO24rKyllLmNhbGwodCx0aGlzW25dLG4sdGhpcyl9KSxbXS5maWx0ZXJ8fChBcnJheS5wcm90b3R5cGUuZmlsdGVyPWZ1bmN0aW9uKGUsdCxuLG8saSl7Zm9yKG49dGhpcyxvPVtdLGk9MDtpPG4ubGVuZ3RoO2krKyllLmNhbGwodCxuW2ldLGksbikmJm8ucHVzaChuW2ldKTtyZXR1cm4gb30pLHtydW46ZnVuY3Rpb24gSyhlLHQpe3JldHVybiBtLnRyYW5zZm9ybXM9ZnVuY3Rpb24gbigpe3ZhciBlPUooXCJkaXZcIik7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUuc3R5bGUucGVyc3BlY3RpdmV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLnN0eWxlLndlYmtpdFBlcnNwZWN0aXZlfSgpLG0uc3ZnPWZ1bmN0aW9uIG8oKXt2YXIgZT1KKFwiZGl2XCIpO3JldHVybiBlLmlubmVySFRNTD1cIjxzdmcvPlwiLFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09PShlLmZpcnN0Q2hpbGQmJmUuZmlyc3RDaGlsZC5uYW1lc3BhY2VVUkkpfSgpLG0ucGFzc2l2ZUV2ZW50cz1mdW5jdGlvbiBpKCl7dmFyIGU9ITE7dHJ5e3ZhciB0PU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSxcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7ZT0hMH19KTt3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RcIixudWxsLHQpfWNhdGNoKG4pe31yZXR1cm4gZX0oKSxmdW5jdGlvbiBhKCl7aWYocj1HKFwiYmFndWV0dGVCb3gtb3ZlcmxheVwiKSlyZXR1cm4gbD1HKFwiYmFndWV0dGVCb3gtc2xpZGVyXCIpLHU9RyhcInByZXZpb3VzLWJ1dHRvblwiKSxjPUcoXCJuZXh0LWJ1dHRvblwiKSx2b2lkKGQ9RyhcImNsb3NlLWJ1dHRvblwiKSk7KHI9SihcImRpdlwiKSkuc2V0QXR0cmlidXRlKFwicm9sZVwiLFwiZGlhbG9nXCIpLHIuaWQ9XCJiYWd1ZXR0ZUJveC1vdmVybGF5XCIsZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKHIpLChsPUooXCJkaXZcIikpLmlkPVwiYmFndWV0dGVCb3gtc2xpZGVyXCIsci5hcHBlbmRDaGlsZChsKSwodT1KKFwiYnV0dG9uXCIpKS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJidXR0b25cIiksdS5pZD1cInByZXZpb3VzLWJ1dHRvblwiLHUuc2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbFwiLFwiUHJldmlvdXNcIiksdS5pbm5lckhUTUw9bS5zdmc/ZjpcIiZsdDtcIixyLmFwcGVuZENoaWxkKHUpLChjPUooXCJidXR0b25cIikpLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxjLmlkPVwibmV4dC1idXR0b25cIixjLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixcIk5leHRcIiksYy5pbm5lckhUTUw9bS5zdmc/ZzpcIiZndDtcIixyLmFwcGVuZENoaWxkKGMpLChkPUooXCJidXR0b25cIikpLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImJ1dHRvblwiKSxkLmlkPVwiY2xvc2UtYnV0dG9uXCIsZC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsXCJDbG9zZVwiKSxkLmlubmVySFRNTD1tLnN2Zz9wOlwiJnRpbWVzO1wiLHIuYXBwZW5kQ2hpbGQoZCksdS5jbGFzc05hbWU9Yy5jbGFzc05hbWU9ZC5jbGFzc05hbWU9XCJiYWd1ZXR0ZUJveC1idXR0b25cIixmdW5jdGlvbiBuKCl7dmFyIGU9bS5wYXNzaXZlRXZlbnRzP3twYXNzaXZlOiExfTpudWxsLHQ9bS5wYXNzaXZlRXZlbnRzP3twYXNzaXZlOiEwfTpudWxsO1UocixcImNsaWNrXCIseCksVSh1LFwiY2xpY2tcIixFKSxVKGMsXCJjbGlja1wiLEMpLFUoZCxcImNsaWNrXCIsQiksVShsLFwiY29udGV4dG1lbnVcIixBKSxVKHIsXCJ0b3VjaHN0YXJ0XCIsVCx0KSxVKHIsXCJ0b3VjaG1vdmVcIixOLGUpLFUocixcInRvdWNoZW5kXCIsTCksVShkb2N1bWVudCxcImZvY3VzXCIsUCwhMCl9KCl9KCksUyhlKSxmdW5jdGlvbiBzKGUsYSl7dmFyIHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlKSxuPXtnYWxsZXJpZXM6W10sbm9kZUxpc3Q6dH07cmV0dXJuIHdbZV09bixbXS5mb3JFYWNoLmNhbGwodCxmdW5jdGlvbihlKXthJiZhLmZpbHRlciYmKHk9YS5maWx0ZXIpO3ZhciB0PVtdO2lmKHQ9XCJBXCI9PT1lLnRhZ05hbWU/W2VdOmUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpLDAhPT0odD1bXS5maWx0ZXIuY2FsbCh0LGZ1bmN0aW9uKGUpe2lmKC0xPT09ZS5jbGFzc05hbWUuaW5kZXhPZihhJiZhLmlnbm9yZUNsYXNzKSlyZXR1cm4geS50ZXN0KGUuaHJlZil9KSkubGVuZ3RoKXt2YXIgaT1bXTtbXS5mb3JFYWNoLmNhbGwodCxmdW5jdGlvbihlLHQpe3ZhciBuPWZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQ/ZS5wcmV2ZW50RGVmYXVsdCgpOmUucmV0dXJuVmFsdWU9ITEsSChpLGEpLEkodCl9LG89e2V2ZW50SGFuZGxlcjpuLGltYWdlRWxlbWVudDplfTtVKGUsXCJjbGlja1wiLG4pLGkucHVzaChvKX0pLG4uZ2FsbGVyaWVzLnB1c2goaSl9fSksbi5nYWxsZXJpZXN9KGUsdCl9LHNob3c6TSxzaG93TmV4dDpYLHNob3dQcmV2aW91czpELGhpZGU6aixkZXN0cm95OmZ1bmN0aW9uIGUoKXshZnVuY3Rpb24gbigpe3ZhciBlPW0ucGFzc2l2ZUV2ZW50cz97cGFzc2l2ZTohMX06bnVsbCx0PW0ucGFzc2l2ZUV2ZW50cz97cGFzc2l2ZTohMH06bnVsbDtXKHIsXCJjbGlja1wiLHgpLFcodSxcImNsaWNrXCIsRSksVyhjLFwiY2xpY2tcIixDKSxXKGQsXCJjbGlja1wiLEIpLFcobCxcImNvbnRleHRtZW51XCIsQSksVyhyLFwidG91Y2hzdGFydFwiLFQsdCksVyhyLFwidG91Y2htb3ZlXCIsTixlKSxXKHIsXCJ0b3VjaGVuZFwiLEwpLFcoZG9jdW1lbnQsXCJmb2N1c1wiLFAsITApfSgpLGZ1bmN0aW9uIHQoKXtmb3IodmFyIGUgaW4gdyl3Lmhhc093blByb3BlcnR5KGUpJiZTKGUpfSgpLFcoZG9jdW1lbnQsXCJrZXlkb3duXCIsRiksZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLnJlbW92ZUNoaWxkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFndWV0dGVCb3gtb3ZlcmxheVwiKSksdz17fSxoPVtdLG89MH19fSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQXBwbGllcyB0aGUgOmZvY3VzLXZpc2libGUgcG9seWZpbGwgYXQgdGhlIGdpdmVuIHNjb3BlLlxuICAgKiBBIHNjb3BlIGluIHRoaXMgY2FzZSBpcyBlaXRoZXIgdGhlIHRvcC1sZXZlbCBEb2N1bWVudCBvciBhIFNoYWRvdyBSb290LlxuICAgKlxuICAgKiBAcGFyYW0geyhEb2N1bWVudHxTaGFkb3dSb290KX0gc2NvcGVcbiAgICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9mb2N1cy12aXNpYmxlXG4gICAqL1xuICBmdW5jdGlvbiBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsKHNjb3BlKSB7XG4gICAgdmFyIGhhZEtleWJvYXJkRXZlbnQgPSB0cnVlO1xuICAgIHZhciBoYWRGb2N1c1Zpc2libGVSZWNlbnRseSA9IGZhbHNlO1xuICAgIHZhciBoYWRGb2N1c1Zpc2libGVSZWNlbnRseVRpbWVvdXQgPSBudWxsO1xuXG4gICAgdmFyIGlucHV0VHlwZXNBbGxvd2xpc3QgPSB7XG4gICAgICB0ZXh0OiB0cnVlLFxuICAgICAgc2VhcmNoOiB0cnVlLFxuICAgICAgdXJsOiB0cnVlLFxuICAgICAgdGVsOiB0cnVlLFxuICAgICAgZW1haWw6IHRydWUsXG4gICAgICBwYXNzd29yZDogdHJ1ZSxcbiAgICAgIG51bWJlcjogdHJ1ZSxcbiAgICAgIGRhdGU6IHRydWUsXG4gICAgICBtb250aDogdHJ1ZSxcbiAgICAgIHdlZWs6IHRydWUsXG4gICAgICB0aW1lOiB0cnVlLFxuICAgICAgZGF0ZXRpbWU6IHRydWUsXG4gICAgICAnZGF0ZXRpbWUtbG9jYWwnOiB0cnVlXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBmdW5jdGlvbiBmb3IgbGVnYWN5IGJyb3dzZXJzIGFuZCBpZnJhbWVzIHdoaWNoIHNvbWV0aW1lcyBmb2N1c1xuICAgICAqIGVsZW1lbnRzIGxpa2UgZG9jdW1lbnQsIGJvZHksIGFuZCBub24taW50ZXJhY3RpdmUgU1ZHLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc1ZhbGlkRm9jdXNUYXJnZXQoZWwpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZWwgJiZcbiAgICAgICAgZWwgIT09IGRvY3VtZW50ICYmXG4gICAgICAgIGVsLm5vZGVOYW1lICE9PSAnSFRNTCcgJiZcbiAgICAgICAgZWwubm9kZU5hbWUgIT09ICdCT0RZJyAmJlxuICAgICAgICAnY2xhc3NMaXN0JyBpbiBlbCAmJlxuICAgICAgICAnY29udGFpbnMnIGluIGVsLmNsYXNzTGlzdFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHdoZXRoZXIgdGhlIGdpdmVuIGVsZW1lbnQgc2hvdWxkIGF1dG9tYXRpY2FsbHkgdHJpZ2dlciB0aGVcbiAgICAgKiBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgYmVpbmcgYWRkZWQsIGkuZS4gd2hldGhlciBpdCBzaG91bGQgYWx3YXlzIG1hdGNoXG4gICAgICogYDpmb2N1cy12aXNpYmxlYCB3aGVuIGZvY3VzZWQuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkoZWwpIHtcbiAgICAgIHZhciB0eXBlID0gZWwudHlwZTtcbiAgICAgIHZhciB0YWdOYW1lID0gZWwudGFnTmFtZTtcblxuICAgICAgaWYgKHRhZ05hbWUgPT09ICdJTlBVVCcgJiYgaW5wdXRUeXBlc0FsbG93bGlzdFt0eXBlXSAmJiAhZWwucmVhZE9ubHkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0YWdOYW1lID09PSAnVEVYVEFSRUEnICYmICFlbC5yZWFkT25seSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsLmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgdG8gdGhlIGdpdmVuIGVsZW1lbnQgaWYgaXQgd2FzIG5vdCBhZGRlZCBieVxuICAgICAqIHRoZSBhdXRob3IuXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEZvY3VzVmlzaWJsZUNsYXNzKGVsKSB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1cy12aXNpYmxlJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnZm9jdXMtdmlzaWJsZScpO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnLCAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRoZSBgZm9jdXMtdmlzaWJsZWAgY2xhc3MgZnJvbSB0aGUgZ2l2ZW4gZWxlbWVudCBpZiBpdCB3YXMgbm90XG4gICAgICogb3JpZ2luYWxseSBhZGRlZCBieSB0aGUgYXV0aG9yLlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVGb2N1c1Zpc2libGVDbGFzcyhlbCkge1xuICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtZm9jdXMtdmlzaWJsZS1hZGRlZCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzLXZpc2libGUnKTtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1mb2N1cy12aXNpYmxlLWFkZGVkJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIG1vc3QgcmVjZW50IHVzZXIgaW50ZXJhY3Rpb24gd2FzIHZpYSB0aGUga2V5Ym9hcmQ7XG4gICAgICogYW5kIHRoZSBrZXkgcHJlc3MgZGlkIG5vdCBpbmNsdWRlIGEgbWV0YSwgYWx0L29wdGlvbiwgb3IgY29udHJvbCBrZXk7XG4gICAgICogdGhlbiB0aGUgbW9kYWxpdHkgaXMga2V5Ym9hcmQuIE90aGVyd2lzZSwgdGhlIG1vZGFsaXR5IGlzIG5vdCBrZXlib2FyZC5cbiAgICAgKiBBcHBseSBgZm9jdXMtdmlzaWJsZWAgdG8gYW55IGN1cnJlbnQgYWN0aXZlIGVsZW1lbnQgYW5kIGtlZXAgdHJhY2tcbiAgICAgKiBvZiBvdXIga2V5Ym9hcmQgbW9kYWxpdHkgc3RhdGUgd2l0aCBgaGFkS2V5Ym9hcmRFdmVudGAuXG4gICAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcbiAgICAgIGlmIChlLm1ldGFLZXkgfHwgZS5hbHRLZXkgfHwgZS5jdHJsS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzVmFsaWRGb2N1c1RhcmdldChzY29wZS5hY3RpdmVFbGVtZW50KSkge1xuICAgICAgICBhZGRGb2N1c1Zpc2libGVDbGFzcyhzY29wZS5hY3RpdmVFbGVtZW50KTtcbiAgICAgIH1cblxuICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgYXQgYW55IHBvaW50IGEgdXNlciBjbGlja3Mgd2l0aCBhIHBvaW50aW5nIGRldmljZSwgZW5zdXJlIHRoYXQgd2UgY2hhbmdlXG4gICAgICogdGhlIG1vZGFsaXR5IGF3YXkgZnJvbSBrZXlib2FyZC5cbiAgICAgKiBUaGlzIGF2b2lkcyB0aGUgc2l0dWF0aW9uIHdoZXJlIGEgdXNlciBwcmVzc2VzIGEga2V5IG9uIGFuIGFscmVhZHkgZm9jdXNlZFxuICAgICAqIGVsZW1lbnQsIGFuZCB0aGVuIGNsaWNrcyBvbiBhIGRpZmZlcmVudCBlbGVtZW50LCBmb2N1c2luZyBpdCB3aXRoIGFcbiAgICAgKiBwb2ludGluZyBkZXZpY2UsIHdoaWxlIHdlIHN0aWxsIHRoaW5rIHdlJ3JlIGluIGtleWJvYXJkIG1vZGFsaXR5LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvblBvaW50ZXJEb3duKGUpIHtcbiAgICAgIGhhZEtleWJvYXJkRXZlbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBgZm9jdXNgLCBhZGQgdGhlIGBmb2N1cy12aXNpYmxlYCBjbGFzcyB0byB0aGUgdGFyZ2V0IGlmOlxuICAgICAqIC0gdGhlIHRhcmdldCByZWNlaXZlZCBmb2N1cyBhcyBhIHJlc3VsdCBvZiBrZXlib2FyZCBuYXZpZ2F0aW9uLCBvclxuICAgICAqIC0gdGhlIGV2ZW50IHRhcmdldCBpcyBhbiBlbGVtZW50IHRoYXQgd2lsbCBsaWtlbHkgcmVxdWlyZSBpbnRlcmFjdGlvblxuICAgICAqICAgdmlhIHRoZSBrZXlib2FyZCAoZS5nLiBhIHRleHQgYm94KVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvbkZvY3VzKGUpIHtcbiAgICAgIC8vIFByZXZlbnQgSUUgZnJvbSBmb2N1c2luZyB0aGUgZG9jdW1lbnQgb3IgSFRNTCBlbGVtZW50LlxuICAgICAgaWYgKCFpc1ZhbGlkRm9jdXNUYXJnZXQoZS50YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGhhZEtleWJvYXJkRXZlbnQgfHwgZm9jdXNUcmlnZ2Vyc0tleWJvYXJkTW9kYWxpdHkoZS50YXJnZXQpKSB7XG4gICAgICAgIGFkZEZvY3VzVmlzaWJsZUNsYXNzKGUudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBgYmx1cmAsIHJlbW92ZSB0aGUgYGZvY3VzLXZpc2libGVgIGNsYXNzIGZyb20gdGhlIHRhcmdldC5cbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICovXG4gICAgZnVuY3Rpb24gb25CbHVyKGUpIHtcbiAgICAgIGlmICghaXNWYWxpZEZvY3VzVGFyZ2V0KGUudGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1cy12aXNpYmxlJykgfHxcbiAgICAgICAgZS50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLWZvY3VzLXZpc2libGUtYWRkZWQnKVxuICAgICAgKSB7XG4gICAgICAgIC8vIFRvIGRldGVjdCBhIHRhYi93aW5kb3cgc3dpdGNoLCB3ZSBsb29rIGZvciBhIGJsdXIgZXZlbnQgZm9sbG93ZWRcbiAgICAgICAgLy8gcmFwaWRseSBieSBhIHZpc2liaWxpdHkgY2hhbmdlLlxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBzZWUgYSB2aXNpYmlsaXR5IGNoYW5nZSB3aXRoaW4gMTAwbXMsIGl0J3MgcHJvYmFibHkgYVxuICAgICAgICAvLyByZWd1bGFyIGZvY3VzIGNoYW5nZS5cbiAgICAgICAgaGFkRm9jdXNWaXNpYmxlUmVjZW50bHkgPSB0cnVlO1xuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCk7XG4gICAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5ID0gZmFsc2U7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICAgIHJlbW92ZUZvY3VzVmlzaWJsZUNsYXNzKGUudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgdXNlciBjaGFuZ2VzIHRhYnMsIGtlZXAgdHJhY2sgb2Ygd2hldGhlciBvciBub3QgdGhlIHByZXZpb3VzbHlcbiAgICAgKiBmb2N1c2VkIGVsZW1lbnQgaGFkIC5mb2N1cy12aXNpYmxlLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBvblZpc2liaWxpdHlDaGFuZ2UoZSkge1xuICAgICAgaWYgKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgICAgLy8gSWYgdGhlIHRhYiBiZWNvbWVzIGFjdGl2ZSBhZ2FpbiwgdGhlIGJyb3dzZXIgd2lsbCBoYW5kbGUgY2FsbGluZyBmb2N1c1xuICAgICAgICAvLyBvbiB0aGUgZWxlbWVudCAoU2FmYXJpIGFjdHVhbGx5IGNhbGxzIGl0IHR3aWNlKS5cbiAgICAgICAgLy8gSWYgdGhpcyB0YWIgY2hhbmdlIGNhdXNlZCBhIGJsdXIgb24gYW4gZWxlbWVudCB3aXRoIGZvY3VzLXZpc2libGUsXG4gICAgICAgIC8vIHJlLWFwcGx5IHRoZSBjbGFzcyB3aGVuIHRoZSB1c2VyIHN3aXRjaGVzIGJhY2sgdG8gdGhlIHRhYi5cbiAgICAgICAgaWYgKGhhZEZvY3VzVmlzaWJsZVJlY2VudGx5KSB7XG4gICAgICAgICAgaGFkS2V5Ym9hcmRFdmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgZ3JvdXAgb2YgbGlzdGVuZXJzIHRvIGRldGVjdCB1c2FnZSBvZiBhbnkgcG9pbnRpbmcgZGV2aWNlcy5cbiAgICAgKiBUaGVzZSBsaXN0ZW5lcnMgd2lsbCBiZSBhZGRlZCB3aGVuIHRoZSBwb2x5ZmlsbCBmaXJzdCBsb2FkcywgYW5kIGFueXRpbWVcbiAgICAgKiB0aGUgd2luZG93IGlzIGJsdXJyZWQsIHNvIHRoYXQgdGhleSBhcmUgYWN0aXZlIHdoZW4gdGhlIHdpbmRvdyByZWdhaW5zXG4gICAgICogZm9jdXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Jbml0aWFsUG9pbnRlck1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvbkluaXRpYWxQb2ludGVyTW92ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgcG9sZnlpbGwgZmlyc3QgbG9hZHMsIGFzc3VtZSB0aGUgdXNlciBpcyBpbiBrZXlib2FyZCBtb2RhbGl0eS5cbiAgICAgKiBJZiBhbnkgZXZlbnQgaXMgcmVjZWl2ZWQgZnJvbSBhIHBvaW50aW5nIGRldmljZSAoZS5nLiBtb3VzZSwgcG9pbnRlcixcbiAgICAgKiB0b3VjaCksIHR1cm4gb2ZmIGtleWJvYXJkIG1vZGFsaXR5LlxuICAgICAqIFRoaXMgYWNjb3VudHMgZm9yIHNpdHVhdGlvbnMgd2hlcmUgZm9jdXMgZW50ZXJzIHRoZSBwYWdlIGZyb20gdGhlIFVSTCBiYXIuXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG9uSW5pdGlhbFBvaW50ZXJNb3ZlKGUpIHtcbiAgICAgIC8vIFdvcmsgYXJvdW5kIGEgU2FmYXJpIHF1aXJrIHRoYXQgZmlyZXMgYSBtb3VzZW1vdmUgb24gPGh0bWw+IHdoZW5ldmVyIHRoZVxuICAgICAgLy8gd2luZG93IGJsdXJzLCBldmVuIGlmIHlvdSdyZSB0YWJiaW5nIG91dCBvZiB0aGUgcGFnZS4gwq9cXF8o44OEKV8vwq9cbiAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSAmJiBlLnRhcmdldC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaHRtbCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBoYWRLZXlib2FyZEV2ZW50ID0gZmFsc2U7XG4gICAgICByZW1vdmVJbml0aWFsUG9pbnRlck1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICAvLyBGb3Igc29tZSBraW5kcyBvZiBzdGF0ZSwgd2UgYXJlIGludGVyZXN0ZWQgaW4gY2hhbmdlcyBhdCB0aGUgZ2xvYmFsIHNjb3BlXG4gICAgLy8gb25seS4gRm9yIGV4YW1wbGUsIGdsb2JhbCBwb2ludGVyIGlucHV0LCBnbG9iYWwga2V5IHByZXNzZXMgYW5kIGdsb2JhbFxuICAgIC8vIHZpc2liaWxpdHkgY2hhbmdlIHNob3VsZCBhZmZlY3QgdGhlIHN0YXRlIGF0IGV2ZXJ5IHNjb3BlOlxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIHRydWUpO1xuXG4gICAgYWRkSW5pdGlhbFBvaW50ZXJNb3ZlTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBGb3IgZm9jdXMgYW5kIGJsdXIsIHdlIHNwZWNpZmljYWxseSBjYXJlIGFib3V0IHN0YXRlIGNoYW5nZXMgaW4gdGhlIGxvY2FsXG4gICAgLy8gc2NvcGUuIFRoaXMgaXMgYmVjYXVzZSBmb2N1cyAvIGJsdXIgZXZlbnRzIHRoYXQgb3JpZ2luYXRlIGZyb20gd2l0aGluIGFcbiAgICAvLyBzaGFkb3cgcm9vdCBhcmUgbm90IHJlLWRpc3BhdGNoZWQgZnJvbSB0aGUgaG9zdCBlbGVtZW50IGlmIGl0IHdhcyBhbHJlYWR5XG4gICAgLy8gdGhlIGFjdGl2ZSBlbGVtZW50IGluIGl0cyBvd24gc2NvcGU6XG4gICAgc2NvcGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzLCB0cnVlKTtcbiAgICBzY29wZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgb25CbHVyLCB0cnVlKTtcblxuICAgIC8vIFdlIGRldGVjdCB0aGF0IGEgbm9kZSBpcyBhIFNoYWRvd1Jvb3QgYnkgZW5zdXJpbmcgdGhhdCBpdCBpcyBhXG4gICAgLy8gRG9jdW1lbnRGcmFnbWVudCBhbmQgYWxzbyBoYXMgYSBob3N0IHByb3BlcnR5LiBUaGlzIGNoZWNrIGNvdmVycyBuYXRpdmVcbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBhbmQgcG9seWZpbGwgaW1wbGVtZW50YXRpb24gdHJhbnNwYXJlbnRseS4gSWYgd2Ugb25seSBjYXJlZFxuICAgIC8vIGFib3V0IHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24sIHdlIGNvdWxkIGp1c3QgY2hlY2sgaWYgdGhlIHNjb3BlIHdhc1xuICAgIC8vIGFuIGluc3RhbmNlIG9mIGEgU2hhZG93Um9vdC5cbiAgICBpZiAoc2NvcGUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAmJiBzY29wZS5ob3N0KSB7XG4gICAgICAvLyBTaW5jZSBhIFNoYWRvd1Jvb3QgaXMgYSBzcGVjaWFsIGtpbmQgb2YgRG9jdW1lbnRGcmFnbWVudCwgaXQgZG9lcyBub3RcbiAgICAgIC8vIGhhdmUgYSByb290IGVsZW1lbnQgdG8gYWRkIGEgY2xhc3MgdG8uIFNvLCB3ZSBhZGQgdGhpcyBhdHRyaWJ1dGUgdG8gdGhlXG4gICAgICAvLyBob3N0IGVsZW1lbnQgaW5zdGVhZDpcbiAgICAgIHNjb3BlLmhvc3Quc2V0QXR0cmlidXRlKCdkYXRhLWpzLWZvY3VzLXZpc2libGUnLCAnJyk7XG4gICAgfSBlbHNlIGlmIChzY29wZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnanMtZm9jdXMtdmlzaWJsZScpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1qcy1mb2N1cy12aXNpYmxlJywgJycpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIGltcG9ydGFudCB0byB3cmFwIGFsbCByZWZlcmVuY2VzIHRvIGdsb2JhbCB3aW5kb3cgYW5kIGRvY3VtZW50IGluXG4gIC8vIHRoZXNlIGNoZWNrcyB0byBzdXBwb3J0IHNlcnZlci1zaWRlIHJlbmRlcmluZyB1c2UgY2FzZXNcbiAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9mb2N1cy12aXNpYmxlL2lzc3Vlcy8xOTlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBNYWtlIHRoZSBwb2x5ZmlsbCBoZWxwZXIgZ2xvYmFsbHkgYXZhaWxhYmxlLiBUaGlzIGNhbiBiZSB1c2VkIGFzIGEgc2lnbmFsXG4gICAgLy8gdG8gaW50ZXJlc3RlZCBsaWJyYXJpZXMgdGhhdCB3aXNoIHRvIGNvb3JkaW5hdGUgd2l0aCB0aGUgcG9seWZpbGwgZm9yIGUuZy4sXG4gICAgLy8gYXBwbHlpbmcgdGhlIHBvbHlmaWxsIHRvIGEgc2hhZG93IHJvb3Q6XG4gICAgd2luZG93LmFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGwgPSBhcHBseUZvY3VzVmlzaWJsZVBvbHlmaWxsO1xuXG4gICAgLy8gTm90aWZ5IGludGVyZXN0ZWQgbGlicmFyaWVzIG9mIHRoZSBwb2x5ZmlsbCdzIHByZXNlbmNlLCBpbiBjYXNlIHRoZVxuICAgIC8vIHBvbHlmaWxsIHdhcyBsb2FkZWQgbGF6aWx5OlxuICAgIHZhciBldmVudDtcblxuICAgIHRyeSB7XG4gICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnZm9jdXMtdmlzaWJsZS1wb2x5ZmlsbC1yZWFkeScpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgdXNpbmcgQ3VzdG9tRXZlbnQgYXMgYSBjb25zdHJ1Y3RvciBkaXJlY3RseTpcbiAgICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoJ2ZvY3VzLXZpc2libGUtcG9seWZpbGwtcmVhZHknLCBmYWxzZSwgZmFsc2UsIHt9KTtcbiAgICB9XG5cbiAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEFwcGx5IHRoZSBwb2x5ZmlsbCB0byB0aGUgZ2xvYmFsIGRvY3VtZW50LCBzbyB0aGF0IG5vIEphdmFTY3JpcHRcbiAgICAvLyBjb29yZGluYXRpb24gaXMgcmVxdWlyZWQgdG8gdXNlIHRoZSBwb2x5ZmlsbCBpbiB0aGUgdG9wLWxldmVsIGRvY3VtZW50OlxuICAgIGFwcGx5Rm9jdXNWaXNpYmxlUG9seWZpbGwoZG9jdW1lbnQpO1xuICB9XG5cbn0pKSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvKipcbiAqIHZhbjExeS1hY2Nlc3NpYmxlLWFjY29yZGlvbi1hcmlhIC0gRVMyMDE1IGFjY2Vzc2libGUgYWNjb3JkaW9uIHN5c3RlbSwgdXNpbmcgQVJJQSAoY29tcGF0aWJsZSBJRTkrIHdoZW4gdHJhbnNwaWxlZClcbiAqIEB2ZXJzaW9uIHYzLjAuMVxuICogQGxpbmsgaHR0cHM6Ly92YW4xMXkubmV0L2FjY2Vzc2libGUtYWNjb3JkaW9uL1xuICogQGxpY2Vuc2UgTUlUIDogaHR0cHM6Ly9naXRodWIuY29tL25pY28zMzMzZnIvdmFuMTF5LWFjY2Vzc2libGUtYWNjb3JkaW9uLWFyaWEvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSx0LHIpe3JldHVybiB0IGluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfXZhciBfZXh0ZW5kcz1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1hcmd1bWVudHNbdF07Zm9yKHZhciBuIGluIHIpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHIsbikmJihlW25dPXJbbl0pfXJldHVybiBlfSxsb2FkQ29uZmlnPWZ1bmN0aW9uKCl7dmFyIGU9e30sdD1mdW5jdGlvbih0LHIpe2VbdF09cn0scj1mdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0sbj1mdW5jdGlvbih0KXtyZXR1cm4gZVt0XX07cmV0dXJue3NldDp0LGdldDpyLHJlbW92ZTpufX0sREFUQV9IQVNIX0lEPVwiZGF0YS1oYXNoYWNjb3JkaW9uLWlkXCIscGx1Z2luQ29uZmlnPWxvYWRDb25maWcoKSxmaW5kQnlJZD1mdW5jdGlvbihlLHQpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiK2UrXCJbXCIrREFUQV9IQVNIX0lEKyc9XCInK3QrJ1wiXScpfSxhZGRDbGFzcz1mdW5jdGlvbihlLHQpe2UuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LmFkZCh0KTplLmNsYXNzTmFtZSs9XCIgXCIrdH0scmVtb3ZlQ2xhc3M9ZnVuY3Rpb24oZSx0KXtlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5yZW1vdmUodCk6ZS5jbGFzc05hbWU9ZS5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIrdC5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXGJ8JClcIixcImdpXCIpLFwiIFwiKX0saGFzQ2xhc3M9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5jbGFzc0xpc3Q/ZS5jbGFzc0xpc3QuY29udGFpbnModCk6bmV3IFJlZ0V4cChcIihefCApXCIrdCtcIiggfCQpXCIsXCJnaVwiKS50ZXN0KGUuY2xhc3NOYW1lKX0sc2V0QXR0cmlidXRlcz1mdW5jdGlvbihlLHQpe09iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24ocil7ZS5zZXRBdHRyaWJ1dGUocix0W3JdKX0pfSxzZWFyY2hQYXJlbnRIYXNoSWQ9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9ITEsbj1lOzE9PT1uLm5vZGVUeXBlJiZuJiZyPT09ITE7KW4uaGFzQXR0cmlidXRlKHQpPT09ITA/cj0hMDpuPW4ucGFyZW50Tm9kZTtyZXR1cm4gcj09PSEwP24uZ2V0QXR0cmlidXRlKHQpOlwiXCJ9LHNlYXJjaFBhcmVudD1mdW5jdGlvbihlLHQscil7Zm9yKHZhciBuPSExLEE9ZTtBJiZuPT09ITE7KWhhc0NsYXNzKEEsdCk9PT0hMCYmQS5nZXRBdHRyaWJ1dGUoREFUQV9IQVNIX0lEKT09PXI/bj0hMDpBPUEucGFyZW50Tm9kZTtyZXR1cm4gbj09PSEwP0EuZ2V0QXR0cmlidXRlKFwiaWRcIik6XCJcIn0sdW5TZWxlY3RIZWFkZXJzPWZ1bmN0aW9uKGUsdCl7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3NldEF0dHJpYnV0ZXMoZSxfZGVmaW5lUHJvcGVydHkoe30sdCxcImZhbHNlXCIpKX0pfSxzZWxlY3RIZWFkZXI9ZnVuY3Rpb24oZSx0KXtlLnNldEF0dHJpYnV0ZSh0LCEwKX0sc2VsZWN0SGVhZGVySW5MaXN0PWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj12b2lkIDA7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7XCJ0cnVlXCI9PT1lLmdldEF0dHJpYnV0ZShyKSYmKG49dCl9KSxcIm5leHRcIj09PXQmJihzZWxlY3RIZWFkZXIoZVtuKzFdKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZVtuKzFdLmZvY3VzKCl9LDApKSxcInByZXZcIj09PXQmJihzZWxlY3RIZWFkZXIoZVtuLTFdKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZVtuLTFdLmZvY3VzKCl9LDApKX0scGx1Z2luPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP3t9OmFyZ3VtZW50c1swXSx0PV9leHRlbmRzKHtBQ0NPUkRJT05fSlM6XCJqcy1hY2NvcmRpb25cIixBQ0NPUkRJT05fSlNfSEVBREVSOlwianMtYWNjb3JkaW9uX19oZWFkZXJcIixBQ0NPUkRJT05fSlNfUEFORUw6XCJqcy1hY2NvcmRpb25fX3BhbmVsXCIsQUNDT1JESU9OX0RBVEFfUFJFRklYX0NMQVNTOlwiZGF0YS1hY2NvcmRpb24tcHJlZml4LWNsYXNzZXNcIixBQ0NPUkRJT05fREFUQV9PUEVORUQ6XCJkYXRhLWFjY29yZGlvbi1vcGVuZWRcIixBQ0NPUkRJT05fREFUQV9NVUxUSVNFTEVDVEFCTEU6XCJkYXRhLWFjY29yZGlvbi1tdWx0aXNlbGVjdGFibGVcIixBQ0NPUkRJT05fREFUQV9DT09MX1NFTEVDVE9SUzpcImRhdGEtYWNjb3JkaW9uLWNvb2wtc2VsZWN0b3JzXCIsQUNDT1JESU9OX1BSRUZJWF9JRFM6XCJhY2NvcmRpb25cIixBQ0NPUkRJT05fQlVUVE9OX0lEOlwiX3RhYlwiLEFDQ09SRElPTl9QQU5FTF9JRDpcIl9wYW5lbFwiLEFDQ09SRElPTl9TVFlMRTpcImFjY29yZGlvblwiLEFDQ09SRElPTl9USVRMRV9TVFlMRTpcImFjY29yZGlvbl9fdGl0bGVcIixBQ0NPUkRJT05fSEVBREVSX1NUWUxFOlwiYWNjb3JkaW9uX19oZWFkZXJcIixBQ0NPUkRJT05fUEFORUxfU1RZTEU6XCJhY2NvcmRpb25fX3BhbmVsXCIsQUNDT1JESU9OX1JPTEVfVEFCTElTVDpcInRhYmxpc3RcIixBQ0NPUkRJT05fUk9MRV9UQUI6XCJ0YWJcIixBQ0NPUkRJT05fUk9MRV9UQUJQQU5FTDpcInRhYnBhbmVsXCIsQVRUUl9ST0xFOlwicm9sZVwiLEFUVFJfTVVMVElTRUxFQ1RBQkxFOlwiYXJpYS1tdWx0aXNlbGVjdGFibGVcIixBVFRSX0VYUEFOREVEOlwiYXJpYS1leHBhbmRlZFwiLEFUVFJfTEFCRUxMRURCWTpcImFyaWEtbGFiZWxsZWRieVwiLEFUVFJfSElEREVOOlwiYXJpYS1oaWRkZW5cIixBVFRSX0NPTlRST0xTOlwiYXJpYS1jb250cm9sc1wiLEFUVFJfU0VMRUNURUQ6XCJhcmlhLXNlbGVjdGVkXCJ9LGUpLHI9TWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMiwxMik7cGx1Z2luQ29uZmlnLnNldChyLHQpO3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aDw9MHx8dm9pZCAwPT09YXJndW1lbnRzWzBdP2RvY3VtZW50OmFyZ3VtZW50c1swXTtyZXR1cm5bXS5zbGljZS5jYWxsKGUucXVlcnlTZWxlY3RvckFsbChcIi5cIit0LkFDQ09SRElPTl9KUykpfSxBPWZ1bmN0aW9uKGUpe24oZSkuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgbj1cInpcIitNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyLDEyKSxBPWUuaGFzQXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfUFJFRklYX0NMQVNTKT09PSEwP2UuZ2V0QXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfUFJFRklYX0NMQVNTKStcIi1cIjpcIlwiLGE9ZS5oYXNBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9DT09MX1NFTEVDVE9SUyk9PT0hMDtcIm5vbmVcIj09PWUuZ2V0QXR0cmlidXRlKHQuQUNDT1JESU9OX0RBVEFfTVVMVElTRUxFQ1RBQkxFKT9lLnNldEF0dHJpYnV0ZSh0LkFUVFJfTVVMVElTRUxFQ1RBQkxFLFwiZmFsc2VcIik6ZS5zZXRBdHRyaWJ1dGUodC5BVFRSX01VTFRJU0VMRUNUQUJMRSxcInRydWVcIiksZS5zZXRBdHRyaWJ1dGUodC5BVFRSX1JPTEUsdC5BQ0NPUkRJT05fUk9MRV9UQUJMSVNUKSxlLnNldEF0dHJpYnV0ZShcImlkXCIsbiksZS5zZXRBdHRyaWJ1dGUoREFUQV9IQVNIX0lELHIpLGFkZENsYXNzKGUsQSt0LkFDQ09SRElPTl9TVFlMRSk7dmFyIGk9W10uc2xpY2UuY2FsbChlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrdC5BQ0NPUkRJT05fSlNfSEVBREVSKSk7aS5mb3JFYWNoKGZ1bmN0aW9uKGksXyl7dmFyIG8sVDtpZihpLnBhcmVudE5vZGU9PT1lfHxhIT09ITEpe3ZhciBFPV8rMSxzPWkubmV4dEVsZW1lbnRTaWJsaW5nLEM9aS5pbm5lckhUTUwsYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiQlVUVE9OXCIpLEQ9aS5oYXNBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9PUEVORUQpPT09ITA/aS5nZXRBdHRyaWJ1dGUodC5BQ0NPUkRJT05fREFUQV9PUEVORUQpOlwiXCI7Yy5pbm5lckhUTUw9QyxhZGRDbGFzcyhjLHQuQUNDT1JESU9OX0pTX0hFQURFUiksYWRkQ2xhc3MoYyxBK3QuQUNDT1JESU9OX0hFQURFUl9TVFlMRSksc2V0QXR0cmlidXRlcyhjLChvPXt9LF9kZWZpbmVQcm9wZXJ0eShvLHQuQVRUUl9ST0xFLHQuQUNDT1JESU9OX1JPTEVfVEFCKSxfZGVmaW5lUHJvcGVydHkobyxcImlkXCIsdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX0JVVFRPTl9JRCtFKSxfZGVmaW5lUHJvcGVydHkobyx0LkFUVFJfQ09OVFJPTFMsdC5BQ0NPUkRJT05fUFJFRklYX0lEUytuK3QuQUNDT1JESU9OX1BBTkVMX0lEK0UpLF9kZWZpbmVQcm9wZXJ0eShvLHQuQVRUUl9TRUxFQ1RFRCxcImZhbHNlXCIpLF9kZWZpbmVQcm9wZXJ0eShvLFwidHlwZVwiLFwiYnV0dG9uXCIpLF9kZWZpbmVQcm9wZXJ0eShvLERBVEFfSEFTSF9JRCxyKSxvKSksaS5pbm5lckhUTUw9XCJcIixpLmFwcGVuZENoaWxkKGMpLGFkZENsYXNzKGksQSt0LkFDQ09SRElPTl9USVRMRV9TVFlMRSkscmVtb3ZlQ2xhc3MoaSx0LkFDQ09SRElPTl9KU19IRUFERVIpLGFkZENsYXNzKHMsQSt0LkFDQ09SRElPTl9QQU5FTF9TVFlMRSksc2V0QXR0cmlidXRlcyhzLChUPXt9LF9kZWZpbmVQcm9wZXJ0eShULHQuQVRUUl9ST0xFLHQuQUNDT1JESU9OX1JPTEVfVEFCUEFORUwpLF9kZWZpbmVQcm9wZXJ0eShULHQuQVRUUl9MQUJFTExFREJZLHQuQUNDT1JESU9OX1BSRUZJWF9JRFMrbit0LkFDQ09SRElPTl9CVVRUT05fSUQrRSksX2RlZmluZVByb3BlcnR5KFQsXCJpZFwiLHQuQUNDT1JESU9OX1BSRUZJWF9JRFMrbit0LkFDQ09SRElPTl9QQU5FTF9JRCtFKSxfZGVmaW5lUHJvcGVydHkoVCxEQVRBX0hBU0hfSUQsciksVCkpLFwidHJ1ZVwiPT09RD8oYy5zZXRBdHRyaWJ1dGUodC5BVFRSX0VYUEFOREVELFwidHJ1ZVwiKSxpLnJlbW92ZUF0dHJpYnV0ZSh0LkFDQ09SRElPTl9EQVRBX09QRU5FRCkscy5zZXRBdHRyaWJ1dGUodC5BVFRSX0hJRERFTixcImZhbHNlXCIpKTooYy5zZXRBdHRyaWJ1dGUodC5BVFRSX0VYUEFOREVELFwiZmFsc2VcIikscy5zZXRBdHRyaWJ1dGUodC5BVFRSX0hJRERFTixcInRydWVcIikpfX0pfSl9O3JldHVybnthdHRhY2g6QX19LG1haW49ZnVuY3Rpb24oKXtyZXR1cm5bXCJjbGlja1wiLFwia2V5ZG93blwiLFwiZm9jdXNcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZSxmdW5jdGlvbih0KXt2YXIgcj1zZWFyY2hQYXJlbnRIYXNoSWQodC50YXJnZXQsREFUQV9IQVNIX0lEKTtcIlwiIT09ciYmIWZ1bmN0aW9uKCl7dmFyIG49cGx1Z2luQ29uZmlnLmdldChyKTtoYXNDbGFzcyh0LnRhcmdldCxuLkFDQ09SRElPTl9KU19IRUFERVIpPT09ITAmJlwiZm9jdXNcIj09PWUmJiFmdW5jdGlvbigpe3ZhciBlPXQudGFyZ2V0LEE9ZmluZEJ5SWQoc2VhcmNoUGFyZW50KGUsbi5BQ0NPUkRJT05fSlMsciksciksYT1BLmhhc0F0dHJpYnV0ZShuLkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwLGk9W10uc2xpY2UuY2FsbChBLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbi5BQ0NPUkRJT05fSlNfSEVBREVSKSk7YT09PSExJiYoaT1pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlLnBhcmVudE5vZGU9PT1BfSkpLHVuU2VsZWN0SGVhZGVycyhpLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKGUsbi5BVFRSX1NFTEVDVEVEKX0oKSxoYXNDbGFzcyh0LnRhcmdldCxuLkFDQ09SRElPTl9KU19IRUFERVIpPT09ITAmJlwiY2xpY2tcIj09PWUmJiFmdW5jdGlvbigpe3ZhciBlPXQudGFyZ2V0LEE9ZmluZEJ5SWQoc2VhcmNoUGFyZW50KGUsbi5BQ0NPUkRJT05fSlMsciksciksYT1BLmhhc0F0dHJpYnV0ZShuLkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwLGk9W10uc2xpY2UuY2FsbChBLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbi5BQ0NPUkRJT05fSlNfSEVBREVSKSksXz1BLmdldEF0dHJpYnV0ZShuLkFUVFJfTVVMVElTRUxFQ1RBQkxFKSxvPWZpbmRCeUlkKGUuZ2V0QXR0cmlidXRlKG4uQVRUUl9DT05UUk9MUyksciksVD1lLmdldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQpO2E9PT0hMSYmKGk9aS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZS5wYXJlbnROb2RlPT09QX0pKSxcImZhbHNlXCI9PT1UPyhlLnNldEF0dHJpYnV0ZShuLkFUVFJfRVhQQU5ERUQsITApLG8ucmVtb3ZlQXR0cmlidXRlKG4uQVRUUl9ISURERU4pKTooZS5zZXRBdHRyaWJ1dGUobi5BVFRSX0VYUEFOREVELCExKSxvLnNldEF0dHJpYnV0ZShuLkFUVFJfSElEREVOLCEwKSksXCJmYWxzZVwiPT09XyYmaS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBBPWZpbmRCeUlkKHQuZ2V0QXR0cmlidXRlKG4uQVRUUl9DT05UUk9MUykscik7dCE9PWU/KHQuc2V0QXR0cmlidXRlKG4uQVRUUl9TRUxFQ1RFRCwhMSksdC5zZXRBdHRyaWJ1dGUobi5BVFRSX0VYUEFOREVELCExKSxBLnNldEF0dHJpYnV0ZShuLkFUVFJfSElEREVOLCEwKSk6dC5zZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVELCEwKX0pLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtlLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKX0oKSxoYXNDbGFzcyh0LnRhcmdldCxuLkFDQ09SRElPTl9KU19IRUFERVIpPT09ITAmJlwia2V5ZG93blwiPT09ZSYmIWZ1bmN0aW9uKCl7dmFyIGU9dC50YXJnZXQsQT1zZWFyY2hQYXJlbnQoZSxuLkFDQ09SRElPTl9KUyxyKSxhPWZpbmRCeUlkKEEsciksaT1hLmhhc0F0dHJpYnV0ZShuLkFDQ09SRElPTl9EQVRBX0NPT0xfU0VMRUNUT1JTKT09PSEwLF89W10uc2xpY2UuY2FsbChhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrbi5BQ0NPUkRJT05fSlNfSEVBREVSKSk7aT09PSExJiYoXz1fLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlLnBhcmVudE5vZGU9PT1hfSkpLDM2PT09dC5rZXlDb2RlPyh1blNlbGVjdEhlYWRlcnMoXyxuLkFUVFJfU0VMRUNURUQpLHNlbGVjdEhlYWRlcihfWzBdLG4uQVRUUl9TRUxFQ1RFRCksc2V0VGltZW91dChmdW5jdGlvbigpe19bMF0uZm9jdXMoKX0sMCksdC5wcmV2ZW50RGVmYXVsdCgpKTozNT09PXQua2V5Q29kZT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1tfLmxlbmd0aC0xXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfW18ubGVuZ3RoLTFdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6MzchPT10LmtleUNvZGUmJjM4IT09dC5rZXlDb2RlfHx0LmN0cmxLZXk/NDAhPT10LmtleUNvZGUmJjM5IT09dC5rZXlDb2RlfHx0LmN0cmxLZXl8fChcInRydWVcIj09PV9bXy5sZW5ndGgtMV0uZ2V0QXR0cmlidXRlKG4uQVRUUl9TRUxFQ1RFRCk/KHVuU2VsZWN0SGVhZGVycyhfLG4uQVRUUl9TRUxFQ1RFRCksc2VsZWN0SGVhZGVyKF9bMF0sbi5BVFRSX1NFTEVDVEVEKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7X1swXS5mb2N1cygpfSwwKSx0LnByZXZlbnREZWZhdWx0KCkpOihzZWxlY3RIZWFkZXJJbkxpc3QoXyxcIm5leHRcIixuLkFUVFJfU0VMRUNURUQpLHQucHJldmVudERlZmF1bHQoKSkpOlwidHJ1ZVwiPT09X1swXS5nZXRBdHRyaWJ1dGUobi5BVFRSX1NFTEVDVEVEKT8odW5TZWxlY3RIZWFkZXJzKF8sbi5BVFRSX1NFTEVDVEVEKSxzZWxlY3RIZWFkZXIoX1tfLmxlbmd0aC0xXSxuLkFUVFJfU0VMRUNURUQpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtfW18ubGVuZ3RoLTFdLmZvY3VzKCl9LDApLHQucHJldmVudERlZmF1bHQoKSk6KHNlbGVjdEhlYWRlckluTGlzdChfLFwicHJldlwiLG4uQVRUUl9TRUxFQ1RFRCksdC5wcmV2ZW50RGVmYXVsdCgpKX0oKX0oKX0sITApfSkscGx1Z2lufTt3aW5kb3cudmFuMTF5QWNjZXNzaWJsZUFjY29yZGlvbkFyaWE9bWFpbigpO3ZhciBvbkxvYWQ9ZnVuY3Rpb24gZSgpe3ZhciB0PXdpbmRvdy52YW4xMXlBY2Nlc3NpYmxlQWNjb3JkaW9uQXJpYSgpO3QuYXR0YWNoKCksZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlKX07ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixvbkxvYWQpOyIsIiFmdW5jdGlvbihuLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6bnx8c2VsZikuTGF6eUxvYWQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtyZXR1cm4gbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihuKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgZT1hcmd1bWVudHNbdF07Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJihuW2ldPWVbaV0pfXJldHVybiBufSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LGU9dCYmIShcIm9uc2Nyb2xsXCJpbiB3aW5kb3cpfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvKGdsZXxpbmd8cm8pYm90fGNyYXdsfHNwaWRlci9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaT10JiZcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3csbz10JiZcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiksYT10JiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xLHI9e2VsZW1lbnRzX3NlbGVjdG9yOlwiLmxhenlcIixjb250YWluZXI6ZXx8dD9kb2N1bWVudDpudWxsLHRocmVzaG9sZDozMDAsdGhyZXNob2xkczpudWxsLGRhdGFfc3JjOlwic3JjXCIsZGF0YV9zcmNzZXQ6XCJzcmNzZXRcIixkYXRhX3NpemVzOlwic2l6ZXNcIixkYXRhX2JnOlwiYmdcIixkYXRhX2JnX2hpZHBpOlwiYmctaGlkcGlcIixkYXRhX2JnX211bHRpOlwiYmctbXVsdGlcIixkYXRhX2JnX211bHRpX2hpZHBpOlwiYmctbXVsdGktaGlkcGlcIixkYXRhX2JnX3NldDpcImJnLXNldFwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIixjbGFzc19lbnRlcmVkOlwiZW50ZXJlZFwiLGNsYXNzX2V4aXRlZDpcImV4aXRlZFwiLHVub2JzZXJ2ZV9jb21wbGV0ZWQ6ITAsdW5vYnNlcnZlX2VudGVyZWQ6ITEsY2FuY2VsX29uX2V4aXQ6ITAsY2FsbGJhY2tfZW50ZXI6bnVsbCxjYWxsYmFja19leGl0Om51bGwsY2FsbGJhY2tfYXBwbGllZDpudWxsLGNhbGxiYWNrX2xvYWRpbmc6bnVsbCxjYWxsYmFja19sb2FkZWQ6bnVsbCxjYWxsYmFja19lcnJvcjpudWxsLGNhbGxiYWNrX2ZpbmlzaDpudWxsLGNhbGxiYWNrX2NhbmNlbDpudWxsLHVzZV9uYXRpdmU6ITEscmVzdG9yZV9vbl9lcnJvcjohMX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gbih7fSxyLHQpfSxsPWZ1bmN0aW9uKG4sdCl7dmFyIGUsaT1cIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLG89bmV3IG4odCk7dHJ5e2U9bmV3IEN1c3RvbUV2ZW50KGkse2RldGFpbDp7aW5zdGFuY2U6b319KX1jYXRjaChuKXsoZT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoaSwhMSwhMSx7aW5zdGFuY2U6b30pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KGUpfSx1PVwic3JjXCIscz1cInNyY3NldFwiLGQ9XCJzaXplc1wiLGY9XCJwb3N0ZXJcIixfPVwibGxPcmlnaW5hbEF0dHJzXCIsZz1cImRhdGFcIix2PVwibG9hZGluZ1wiLGI9XCJsb2FkZWRcIixtPVwiYXBwbGllZFwiLHA9XCJlcnJvclwiLGg9XCJuYXRpdmVcIixFPVwiZGF0YS1cIixJPVwibGwtc3RhdHVzXCIseT1mdW5jdGlvbihuLHQpe3JldHVybiBuLmdldEF0dHJpYnV0ZShFK3QpfSxrPWZ1bmN0aW9uKG4pe3JldHVybiB5KG4sSSl9LHc9ZnVuY3Rpb24obix0KXtyZXR1cm4gZnVuY3Rpb24obix0LGUpe3ZhciBpPVwiZGF0YS1sbC1zdGF0dXNcIjtudWxsIT09ZT9uLnNldEF0dHJpYnV0ZShpLGUpOm4ucmVtb3ZlQXR0cmlidXRlKGkpfShuLDAsdCl9LEE9ZnVuY3Rpb24obil7cmV0dXJuIHcobixudWxsKX0sTD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09PWsobil9LE89ZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT1ofSx4PVt2LGIsbSxwXSxDPWZ1bmN0aW9uKG4sdCxlLGkpe24mJih2b2lkIDA9PT1pP3ZvaWQgMD09PWU/bih0KTpuKHQsZSk6bih0LGUsaSkpfSxOPWZ1bmN0aW9uKG4sdCl7bz9uLmNsYXNzTGlzdC5hZGQodCk6bi5jbGFzc05hbWUrPShuLmNsYXNzTmFtZT9cIiBcIjpcIlwiKSt0fSxNPWZ1bmN0aW9uKG4sdCl7bz9uLmNsYXNzTGlzdC5yZW1vdmUodCk6bi5jbGFzc05hbWU9bi5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiK3QrXCIoXFxcXHMrfCQpXCIpLFwiIFwiKS5yZXBsYWNlKC9eXFxzKy8sXCJcIikucmVwbGFjZSgvXFxzKyQvLFwiXCIpfSx6PWZ1bmN0aW9uKG4pe3JldHVybiBuLmxsVGVtcEltYWdlfSxUPWZ1bmN0aW9uKG4sdCl7aWYodCl7dmFyIGU9dC5fb2JzZXJ2ZXI7ZSYmZS51bm9ic2VydmUobil9fSxSPWZ1bmN0aW9uKG4sdCl7biYmKG4ubG9hZGluZ0NvdW50Kz10KX0sRz1mdW5jdGlvbihuLHQpe24mJihuLnRvTG9hZENvdW50PXQpfSxqPWZ1bmN0aW9uKG4pe2Zvcih2YXIgdCxlPVtdLGk9MDt0PW4uY2hpbGRyZW5baV07aSs9MSlcIlNPVVJDRVwiPT09dC50YWdOYW1lJiZlLnB1c2godCk7cmV0dXJuIGV9LEQ9ZnVuY3Rpb24obix0KXt2YXIgZT1uLnBhcmVudE5vZGU7ZSYmXCJQSUNUVVJFXCI9PT1lLnRhZ05hbWUmJmooZSkuZm9yRWFjaCh0KX0sSD1mdW5jdGlvbihuLHQpe2oobikuZm9yRWFjaCh0KX0sVj1bdV0sRj1bdSxmXSxCPVt1LHMsZF0sSj1bZ10sUD1mdW5jdGlvbihuKXtyZXR1cm4hIW5bX119LFM9ZnVuY3Rpb24obil7cmV0dXJuIG5bX119LFU9ZnVuY3Rpb24obil7cmV0dXJuIGRlbGV0ZSBuW19dfSwkPWZ1bmN0aW9uKG4sdCl7aWYoIVAobikpe3ZhciBlPXt9O3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVt0XT1uLmdldEF0dHJpYnV0ZSh0KX0pKSxuW19dPWV9fSxxPWZ1bmN0aW9uKG4sdCl7aWYoUChuKSl7dmFyIGU9UyhuKTt0LmZvckVhY2goKGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuLHQsZSl7ZT9uLnNldEF0dHJpYnV0ZSh0LGUpOm4ucmVtb3ZlQXR0cmlidXRlKHQpfShuLHQsZVt0XSl9KSl9fSxLPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19hcHBsaWVkKSx3KG4sbSksZSYmKHQudW5vYnNlcnZlX2NvbXBsZXRlZCYmVChuLHQpLEModC5jYWxsYmFja19hcHBsaWVkLG4sZSkpfSxRPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19sb2FkaW5nKSx3KG4sdiksZSYmKFIoZSwxKSxDKHQuY2FsbGJhY2tfbG9hZGluZyxuLGUpKX0sVz1mdW5jdGlvbihuLHQsZSl7ZSYmbi5zZXRBdHRyaWJ1dGUodCxlKX0sWD1mdW5jdGlvbihuLHQpe1cobixkLHkobix0LmRhdGFfc2l6ZXMpKSxXKG4scyx5KG4sdC5kYXRhX3NyY3NldCkpLFcobix1LHkobix0LmRhdGFfc3JjKSl9LFk9e0lNRzpmdW5jdGlvbihuLHQpe0QobiwoZnVuY3Rpb24obil7JChuLEIpLFgobix0KX0pKSwkKG4sQiksWChuLHQpfSxJRlJBTUU6ZnVuY3Rpb24obix0KXskKG4sViksVyhuLHUseShuLHQuZGF0YV9zcmMpKX0sVklERU86ZnVuY3Rpb24obix0KXtIKG4sKGZ1bmN0aW9uKG4peyQobixWKSxXKG4sdSx5KG4sdC5kYXRhX3NyYykpfSkpLCQobixGKSxXKG4sZix5KG4sdC5kYXRhX3Bvc3RlcikpLFcobix1LHkobix0LmRhdGFfc3JjKSksbi5sb2FkKCl9LE9CSkVDVDpmdW5jdGlvbihuLHQpeyQobixKKSxXKG4sZyx5KG4sdC5kYXRhX3NyYykpfX0sWj1bXCJJTUdcIixcIklGUkFNRVwiLFwiVklERU9cIixcIk9CSkVDVFwiXSxubj1mdW5jdGlvbihuLHQpeyF0fHxmdW5jdGlvbihuKXtyZXR1cm4gbi5sb2FkaW5nQ291bnQ+MH0odCl8fGZ1bmN0aW9uKG4pe3JldHVybiBuLnRvTG9hZENvdW50PjB9KHQpfHxDKG4uY2FsbGJhY2tfZmluaXNoLHQpfSx0bj1mdW5jdGlvbihuLHQsZSl7bi5hZGRFdmVudExpc3RlbmVyKHQsZSksbi5sbEV2TGlzbnJzW3RdPWV9LGVuPWZ1bmN0aW9uKG4sdCxlKXtuLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlKX0sb249ZnVuY3Rpb24obil7cmV0dXJuISFuLmxsRXZMaXNucnN9LGFuPWZ1bmN0aW9uKG4pe2lmKG9uKG4pKXt2YXIgdD1uLmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIHQpe3ZhciBpPXRbZV07ZW4obixlLGkpfWRlbGV0ZSBuLmxsRXZMaXNucnN9fSxybj1mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe2RlbGV0ZSBuLmxsVGVtcEltYWdlfShuKSxSKGUsLTEpLGZ1bmN0aW9uKG4pe24mJihuLnRvTG9hZENvdW50LT0xKX0oZSksTShuLHQuY2xhc3NfbG9hZGluZyksdC51bm9ic2VydmVfY29tcGxldGVkJiZUKG4sZSl9LGNuPWZ1bmN0aW9uKG4sdCxlKXt2YXIgaT16KG4pfHxuO29uKGkpfHxmdW5jdGlvbihuLHQsZSl7b24obil8fChuLmxsRXZMaXNucnM9e30pO3ZhciBpPVwiVklERU9cIj09PW4udGFnTmFtZT9cImxvYWRlZGRhdGFcIjpcImxvYWRcIjt0bihuLGksdCksdG4obixcImVycm9yXCIsZSl9KGksKGZ1bmN0aW9uKG8peyFmdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1PKHQpO3JuKHQsZSxpKSxOKHQsZS5jbGFzc19sb2FkZWQpLHcodCxiKSxDKGUuY2FsbGJhY2tfbG9hZGVkLHQsaSksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSwoZnVuY3Rpb24obyl7IWZ1bmN0aW9uKG4sdCxlLGkpe3ZhciBvPU8odCk7cm4odCxlLGkpLE4odCxlLmNsYXNzX2Vycm9yKSx3KHQscCksQyhlLmNhbGxiYWNrX2Vycm9yLHQsaSksZS5yZXN0b3JlX29uX2Vycm9yJiZxKHQsQiksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSl9LGxuPWZ1bmN0aW9uKG4sdCxlKXshZnVuY3Rpb24obil7cmV0dXJuIFouaW5kZXhPZihuLnRhZ05hbWUpPi0xfShuKT9mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe24ubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0obiksY24obix0LGUpLGZ1bmN0aW9uKG4pe1Aobil8fChuW19dPXtiYWNrZ3JvdW5kSW1hZ2U6bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2V9KX0obiksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmcpLG89eShuLHQuZGF0YV9iZ19oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KHIsJ1wiKScpLHoobikuc2V0QXR0cmlidXRlKHUsciksUShuLHQsZSkpfShuLHQsZSksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmdfbXVsdGkpLG89eShuLHQuZGF0YV9iZ19tdWx0aV9oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9cixLKG4sdCxlKSl9KG4sdCxlKSxmdW5jdGlvbihuLHQsZSl7dmFyIGk9eShuLHQuZGF0YV9iZ19zZXQpO2lmKGkpe3ZhciBvPWkuc3BsaXQoXCJ8XCIpLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKTtuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSxcIlwiPT09bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UmJihhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIi13ZWJraXQtaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKSxuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSksSyhuLHQsZSl9fShuLHQsZSl9KG4sdCxlKTpmdW5jdGlvbihuLHQsZSl7Y24obix0LGUpLGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT1ZW24udGFnTmFtZV07aSYmKGkobix0KSxRKG4sdCxlKSl9KG4sdCxlKX0obix0LGUpfSx1bj1mdW5jdGlvbihuKXtuLnJlbW92ZUF0dHJpYnV0ZSh1KSxuLnJlbW92ZUF0dHJpYnV0ZShzKSxuLnJlbW92ZUF0dHJpYnV0ZShkKX0sc249ZnVuY3Rpb24obil7RChuLChmdW5jdGlvbihuKXtxKG4sQil9KSkscShuLEIpfSxkbj17SU1HOnNuLElGUkFNRTpmdW5jdGlvbihuKXtxKG4sVil9LFZJREVPOmZ1bmN0aW9uKG4pe0gobiwoZnVuY3Rpb24obil7cShuLFYpfSkpLHEobixGKSxuLmxvYWQoKX0sT0JKRUNUOmZ1bmN0aW9uKG4pe3EobixKKX19LGZuPWZ1bmN0aW9uKG4sdCl7KGZ1bmN0aW9uKG4pe3ZhciB0PWRuW24udGFnTmFtZV07dD90KG4pOmZ1bmN0aW9uKG4pe2lmKFAobikpe3ZhciB0PVMobik7bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9dC5iYWNrZ3JvdW5kSW1hZ2V9fShuKX0pKG4pLGZ1bmN0aW9uKG4sdCl7TChuKXx8TyhuKXx8KE0obix0LmNsYXNzX2VudGVyZWQpLE0obix0LmNsYXNzX2V4aXRlZCksTShuLHQuY2xhc3NfYXBwbGllZCksTShuLHQuY2xhc3NfbG9hZGluZyksTShuLHQuY2xhc3NfbG9hZGVkKSxNKG4sdC5jbGFzc19lcnJvcikpfShuLHQpLEEobiksVShuKX0sX249W1wiSU1HXCIsXCJJRlJBTUVcIixcIlZJREVPXCJdLGduPWZ1bmN0aW9uKG4pe3JldHVybiBuLnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9LHZuPWZ1bmN0aW9uKG4sdCxlKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbi5pc0ludGVyc2VjdGluZ3x8bi5pbnRlcnNlY3Rpb25SYXRpbz4wfShuKT9mdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1mdW5jdGlvbihuKXtyZXR1cm4geC5pbmRleE9mKGsobikpPj0wfShuKTt3KG4sXCJlbnRlcmVkXCIpLE4obixlLmNsYXNzX2VudGVyZWQpLE0obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUpe3QudW5vYnNlcnZlX2VudGVyZWQmJlQobixlKX0obixlLGkpLEMoZS5jYWxsYmFja19lbnRlcixuLHQsaSksb3x8bG4obixlLGkpfShuLnRhcmdldCxuLHQsZSk6ZnVuY3Rpb24obix0LGUsaSl7TChuKXx8KE4obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUsaSl7ZS5jYW5jZWxfb25fZXhpdCYmZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT12fShuKSYmXCJJTUdcIj09PW4udGFnTmFtZSYmKGFuKG4pLGZ1bmN0aW9uKG4pe0QobiwoZnVuY3Rpb24obil7dW4obil9KSksdW4obil9KG4pLHNuKG4pLE0obixlLmNsYXNzX2xvYWRpbmcpLFIoaSwtMSksQShuKSxDKGUuY2FsbGJhY2tfY2FuY2VsLG4sdCxpKSl9KG4sdCxlLGkpLEMoZS5jYWxsYmFja19leGl0LG4sdCxpKSl9KG4udGFyZ2V0LG4sdCxlKX0pKX0sYm49ZnVuY3Rpb24obil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pfSxtbj1mdW5jdGlvbihuKXtyZXR1cm4gbi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChuLmVsZW1lbnRzX3NlbGVjdG9yKX0scG49ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBrKG4pPT09cH0obil9LGhuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBibihuKS5maWx0ZXIoTCl9KG58fG1uKHQpKX0sRW49ZnVuY3Rpb24obixlKXt2YXIgbz1jKG4pO3RoaXMuX3NldHRpbmdzPW8sdGhpcy5sb2FkaW5nQ291bnQ9MCxmdW5jdGlvbihuLHQpe2kmJiFnbihuKSYmKHQuX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZnVuY3Rpb24oZSl7dm4oZSxuLHQpfSksZnVuY3Rpb24obil7cmV0dXJue3Jvb3Q6bi5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOm4uY29udGFpbmVyLHJvb3RNYXJnaW46bi50aHJlc2hvbGRzfHxuLnRocmVzaG9sZCtcInB4XCJ9fShuKSkpfShvLHRoaXMpLGZ1bmN0aW9uKG4sZSl7dCYmKGUuX29ubGluZUhhbmRsZXI9ZnVuY3Rpb24oKXshZnVuY3Rpb24obix0KXt2YXIgZTsoZT1tbihuKSxibihlKS5maWx0ZXIocG4pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtNKHQsbi5jbGFzc19lcnJvciksQSh0KX0pKSx0LnVwZGF0ZSgpfShuLGUpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLGUuX29ubGluZUhhbmRsZXIpKX0obyx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIEVuLnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKG4pe3ZhciB0LG8sYT10aGlzLl9zZXR0aW5ncyxyPWhuKG4sYSk7Ryh0aGlzLHIubGVuZ3RoKSwhZSYmaT9nbihhKT9mdW5jdGlvbihuLHQsZSl7bi5mb3JFYWNoKChmdW5jdGlvbihuKXstMSE9PV9uLmluZGV4T2Yobi50YWdOYW1lKSYmZnVuY3Rpb24obix0LGUpe24uc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKSxjbihuLHQsZSksZnVuY3Rpb24obix0KXt2YXIgZT1ZW24udGFnTmFtZV07ZSYmZShuLHQpfShuLHQpLHcobixoKX0obix0LGUpfSkpLEcoZSwwKX0ocixhLHRoaXMpOihvPXIsZnVuY3Rpb24obil7bi5kaXNjb25uZWN0KCl9KHQ9dGhpcy5fb2JzZXJ2ZXIpLGZ1bmN0aW9uKG4sdCl7dC5mb3JFYWNoKChmdW5jdGlvbih0KXtuLm9ic2VydmUodCl9KSl9KHQsbykpOnRoaXMubG9hZEFsbChyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX29ic2VydmVyJiZ0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCksdCYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIix0aGlzLl9vbmxpbmVIYW5kbGVyKSxtbih0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24obil7VShuKX0pKSxkZWxldGUgdGhpcy5fb2JzZXJ2ZXIsZGVsZXRlIHRoaXMuX3NldHRpbmdzLGRlbGV0ZSB0aGlzLl9vbmxpbmVIYW5kbGVyLGRlbGV0ZSB0aGlzLmxvYWRpbmdDb3VudCxkZWxldGUgdGhpcy50b0xvYWRDb3VudH0sbG9hZEFsbDpmdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9dGhpcy5fc2V0dGluZ3M7aG4obixlKS5mb3JFYWNoKChmdW5jdGlvbihuKXtUKG4sdCksbG4obixlLHQpfSkpfSxyZXN0b3JlQWxsOmZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fc2V0dGluZ3M7bW4obikuZm9yRWFjaCgoZnVuY3Rpb24odCl7Zm4odCxuKX0pKX19LEVuLmxvYWQ9ZnVuY3Rpb24obix0KXt2YXIgZT1jKHQpO2xuKG4sZSl9LEVuLnJlc2V0U3RhdHVzPWZ1bmN0aW9uKG4pe0Eobil9LHQmJmZ1bmN0aW9uKG4sdCl7aWYodClpZih0Lmxlbmd0aClmb3IodmFyIGUsaT0wO2U9dFtpXTtpKz0xKWwobixlKTtlbHNlIGwobix0KX0oRW4sd2luZG93LmxhenlMb2FkT3B0aW9ucyksRW59KSk7XG4iLCIvKipcbiAqIFplbnNjcm9sbCA0LjAuMlxuICogaHR0cHM6Ly9naXRodWIuY29tL3plbmdhYm9yL3plbnNjcm9sbC9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNeKAkzIwMTggR2Fib3IgTGVuYXJkXG4gKlxuICogVGhpcyBpcyBmcmVlIGFuZCB1bmVuY3VtYmVyZWQgc29mdHdhcmUgcmVsZWFzZWQgaW50byB0aGUgcHVibGljIGRvbWFpbi5cbiAqIFxuICogQW55b25lIGlzIGZyZWUgdG8gY29weSwgbW9kaWZ5LCBwdWJsaXNoLCB1c2UsIGNvbXBpbGUsIHNlbGwsIG9yXG4gKiBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUsIGVpdGhlciBpbiBzb3VyY2UgY29kZSBmb3JtIG9yIGFzIGEgY29tcGlsZWRcbiAqIGJpbmFyeSwgZm9yIGFueSBwdXJwb3NlLCBjb21tZXJjaWFsIG9yIG5vbi1jb21tZXJjaWFsLCBhbmQgYnkgYW55XG4gKiBtZWFucy5cbiAqIFxuICogSW4ganVyaXNkaWN0aW9ucyB0aGF0IHJlY29nbml6ZSBjb3B5cmlnaHQgbGF3cywgdGhlIGF1dGhvciBvciBhdXRob3JzXG4gKiBvZiB0aGlzIHNvZnR3YXJlIGRlZGljYXRlIGFueSBhbmQgYWxsIGNvcHlyaWdodCBpbnRlcmVzdCBpbiB0aGVcbiAqIHNvZnR3YXJlIHRvIHRoZSBwdWJsaWMgZG9tYWluLiBXZSBtYWtlIHRoaXMgZGVkaWNhdGlvbiBmb3IgdGhlIGJlbmVmaXRcbiAqIG9mIHRoZSBwdWJsaWMgYXQgbGFyZ2UgYW5kIHRvIHRoZSBkZXRyaW1lbnQgb2Ygb3VyIGhlaXJzIGFuZFxuICogc3VjY2Vzc29ycy4gV2UgaW50ZW5kIHRoaXMgZGVkaWNhdGlvbiB0byBiZSBhbiBvdmVydCBhY3Qgb2ZcbiAqIHJlbGlucXVpc2htZW50IGluIHBlcnBldHVpdHkgb2YgYWxsIHByZXNlbnQgYW5kIGZ1dHVyZSByaWdodHMgdG8gdGhpc1xuICogc29mdHdhcmUgdW5kZXIgY29weXJpZ2h0IGxhdy5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuICogTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULlxuICogSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1JcbiAqIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLFxuICogQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gKiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gKiBcbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBwbGVhc2UgcmVmZXIgdG8gPGh0dHA6Ly91bmxpY2Vuc2Uub3JnPlxuICogXG4gKi9cblxuLypqc2hpbnQgZGV2ZWw6dHJ1ZSwgYXNpOnRydWUgKi9cblxuLypnbG9iYWwgZGVmaW5lLCBtb2R1bGUgKi9cblxuXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KCkpXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpXG5cdH0gZWxzZSB7XG5cdFx0KGZ1bmN0aW9uIGluc3RhbGwoKSB7XG5cdFx0XHQvLyBUbyBtYWtlIHN1cmUgWmVuc2Nyb2xsIGNhbiBiZSByZWZlcmVuY2VkIGZyb20gdGhlIGhlYWRlciwgYmVmb3JlIGBib2R5YCBpcyBhdmFpbGFibGVcblx0XHRcdGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XG5cdFx0XHRcdHJvb3QuemVuc2Nyb2xsID0gZmFjdG9yeSgpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyByZXRyeSA5bXMgbGF0ZXJcblx0XHRcdFx0c2V0VGltZW91dChpbnN0YWxsLCA5KVxuXHRcdFx0fVxuXHRcdH0pKClcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cdFwidXNlIHN0cmljdFwiXG5cblxuXHQvLyBEZXRlY3QgaWYgdGhlIGJyb3dzZXIgYWxyZWFkeSBzdXBwb3J0cyBuYXRpdmUgc21vb3RoIHNjcm9sbGluZyAoZS5nLiwgRmlyZWZveCAzNisgYW5kIENocm9tZSA0OSspIGFuZCBpdCBpcyBlbmFibGVkOlxuXHR2YXIgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24gPSBmdW5jdGlvbiAoZWxlbSkge1xuXHRcdHJldHVybiBlbGVtICYmIFwiZ2V0Q29tcHV0ZWRTdHlsZVwiIGluIHdpbmRvdyAmJlxuXHRcdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSlbXCJzY3JvbGwtYmVoYXZpb3JcIl0gPT09IFwic21vb3RoXCJcblx0fVxuXG5cblx0Ly8gRXhpdCBpZiBpdOKAmXMgbm90IGEgYnJvd3NlciBlbnZpcm9ubWVudDpcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgIShcImRvY3VtZW50XCIgaW4gd2luZG93KSkge1xuXHRcdHJldHVybiB7fVxuXHR9XG5cblxuXHR2YXIgbWFrZVNjcm9sbGVyID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cblx0XHQvLyBVc2UgZGVmYXVsdHMgaWYgbm90IHByb3ZpZGVkXG5cdFx0ZGVmYXVsdER1cmF0aW9uID0gZGVmYXVsdER1cmF0aW9uIHx8IDk5OSAvL21zXG5cdFx0aWYgKCFlZGdlT2Zmc2V0ICYmIGVkZ2VPZmZzZXQgIT09IDApIHtcblx0XHRcdC8vIFdoZW4gc2Nyb2xsaW5nLCB0aGlzIGFtb3VudCBvZiBkaXN0YW5jZSBpcyBrZXB0IGZyb20gdGhlIGVkZ2VzIG9mIHRoZSBjb250YWluZXI6XG5cdFx0XHRlZGdlT2Zmc2V0ID0gOSAvL3B4XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxpbmcgdGhlIGxpZmUtY3ljbGUgb2YgdGhlIHNjcm9sbGVyXG5cdFx0dmFyIHNjcm9sbFRpbWVvdXRJZFxuXHRcdHZhciBzZXRTY3JvbGxUaW1lb3V0SWQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcblx0XHRcdHNjcm9sbFRpbWVvdXRJZCA9IG5ld1ZhbHVlXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU3RvcCB0aGUgY3VycmVudCBzbW9vdGggc2Nyb2xsIG9wZXJhdGlvbiBpbW1lZGlhdGVseVxuXHRcdCAqL1xuXHRcdHZhciBzdG9wU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXRJZClcblx0XHRcdHNldFNjcm9sbFRpbWVvdXRJZCgwKVxuXHRcdH1cblxuXHRcdHZhciBnZXRUb3BXaXRoRWRnZU9mZnNldCA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgoMCwgY29udGFpbmVyLmdldFRvcE9mKGVsZW0pIC0gZWRnZU9mZnNldClcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTY3JvbGxzIHRvIGEgc3BlY2lmaWMgdmVydGljYWwgcG9zaXRpb24gaW4gdGhlIGRvY3VtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHt0YXJnZXRZfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiAgICAgICAgSWYgbm90IHByb3ZpZGVkIHRoZSBkZWZhdWx0IGR1cmF0aW9uIGlzIHVzZWQuXG5cdFx0ICogQHBhcmFtIHtvbkRvbmV9IEFuIG9wdGlvbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgb25jZSB0aGUgc2Nyb2xsIGZpbmlzaGVkLlxuXHRcdCAqL1xuXHRcdHZhciBzY3JvbGxUb1kgPSBmdW5jdGlvbiAodGFyZ2V0WSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0c3RvcFNjcm9sbCgpXG5cdFx0XHRpZiAoZHVyYXRpb24gPT09IDAgfHwgKGR1cmF0aW9uICYmIGR1cmF0aW9uIDwgMCkgfHwgaXNOYXRpdmVTbW9vdGhTY3JvbGxFbmFibGVkT24oY29udGFpbmVyLmJvZHkpKSB7XG5cdFx0XHRcdGNvbnRhaW5lci50b1kodGFyZ2V0WSlcblx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBzdGFydFkgPSBjb250YWluZXIuZ2V0WSgpXG5cdFx0XHRcdHZhciBkaXN0YW5jZSA9IE1hdGgubWF4KDAsIHRhcmdldFkpIC0gc3RhcnRZXG5cdFx0XHRcdHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXHRcdFx0XHRkdXJhdGlvbiA9IGR1cmF0aW9uIHx8IE1hdGgubWluKE1hdGguYWJzKGRpc3RhbmNlKSwgZGVmYXVsdER1cmF0aW9uKTtcblx0XHRcdFx0KGZ1bmN0aW9uIGxvb3BTY3JvbGwoKSB7XG5cdFx0XHRcdFx0c2V0U2Nyb2xsVGltZW91dElkKHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2U6XG5cdFx0XHRcdFx0XHR2YXIgcCA9IE1hdGgubWluKDEsIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyBkdXJhdGlvbilcblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgYWJzb2x1dGUgdmVydGljYWwgcG9zaXRpb246XG5cdFx0XHRcdFx0XHR2YXIgeSA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3Ioc3RhcnRZICsgZGlzdGFuY2UqKHAgPCAwLjUgPyAyKnAqcCA6IHAqKDQgLSBwKjIpLTEpKSlcblx0XHRcdFx0XHRcdGNvbnRhaW5lci50b1koeSlcblx0XHRcdFx0XHRcdGlmIChwIDwgMSAmJiAoY29udGFpbmVyLmdldEhlaWdodCgpICsgeSkgPCBjb250YWluZXIuYm9keS5zY3JvbGxIZWlnaHQpIHtcblx0XHRcdFx0XHRcdFx0bG9vcFNjcm9sbCgpXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KHN0b3BTY3JvbGwsIDk5KSAvLyB3aXRoIGNvb2xkb3duIHRpbWVcblx0XHRcdFx0XHRcdFx0aWYgKG9uRG9uZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9uRG9uZSgpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCA5KSlcblx0XHRcdFx0fSkoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIHRvcCBvZiBhIHNwZWNpZmljIGVsZW1lbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50IHRvIHNjcm9sbCB0by5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29uRG9uZX0gQW4gb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBvbmNlIHRoZSBzY3JvbGwgZmluaXNoZWQuXG5cdFx0ICovXG5cdFx0dmFyIHNjcm9sbFRvRWxlbSA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb25Eb25lKSB7XG5cdFx0XHRzY3JvbGxUb1koZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSksIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogU2Nyb2xscyBhbiBlbGVtZW50IGludG8gdmlldyBpZiBuZWNlc3NhcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2VsZW19IFRoZSBlbGVtZW50LlxuXHRcdCAqIEBwYXJhbSB7ZHVyYXRpb259IE9wdGlvbmFsbHkgdGhlIGR1cmF0aW9uIG9mIHRoZSBzY3JvbGwgb3BlcmF0aW9uLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbiAoZWxlbSwgZHVyYXRpb24sIG9uRG9uZSkge1xuXHRcdFx0dmFyIGVsZW1IZWlnaHQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuXHRcdFx0dmFyIGVsZW1Cb3R0b20gPSBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgKyBlbGVtSGVpZ2h0XG5cdFx0XHR2YXIgY29udGFpbmVySGVpZ2h0ID0gY29udGFpbmVyLmdldEhlaWdodCgpXG5cdFx0XHR2YXIgeSA9IGNvbnRhaW5lci5nZXRZKClcblx0XHRcdHZhciBjb250YWluZXJCb3R0b20gPSB5ICsgY29udGFpbmVySGVpZ2h0XG5cdFx0XHRpZiAoZ2V0VG9wV2l0aEVkZ2VPZmZzZXQoZWxlbSkgPCB5IHx8IChlbGVtSGVpZ2h0ICsgZWRnZU9mZnNldCkgPiBjb250YWluZXJIZWlnaHQpIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBjbGlwcGVkIGF0IHRvcCBvciBpcyBoaWdoZXIgdGhhbiBzY3JlZW4uXG5cdFx0XHRcdHNjcm9sbFRvRWxlbShlbGVtLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdFx0fSBlbHNlIGlmICgoZWxlbUJvdHRvbSArIGVkZ2VPZmZzZXQpID4gY29udGFpbmVyQm90dG9tKSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgY2xpcHBlZCBhdCB0aGUgYm90dG9tLlxuXHRcdFx0XHRzY3JvbGxUb1koZWxlbUJvdHRvbSAtIGNvbnRhaW5lckhlaWdodCArIGVkZ2VPZmZzZXQsIGR1cmF0aW9uLCBvbkRvbmUpXG5cdFx0XHR9IGVsc2UgaWYgKG9uRG9uZSkge1xuXHRcdFx0XHRvbkRvbmUoKVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNjcm9sbHMgdG8gdGhlIGNlbnRlciBvZiBhbiBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtlbGVtfSBUaGUgZWxlbWVudC5cblx0XHQgKiBAcGFyYW0ge2R1cmF0aW9ufSBPcHRpb25hbGx5IHRoZSBkdXJhdGlvbiBvZiB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cblx0XHQgKiBAcGFyYW0ge29mZnNldH0gT3B0aW9uYWxseSB0aGUgb2Zmc2V0IG9mIHRoZSB0b3Agb2YgdGhlIGVsZW1lbnQgZnJvbSB0aGUgY2VudGVyIG9mIHRoZSBzY3JlZW4uXG5cdFx0ICogICAgICAgIEEgdmFsdWUgb2YgMCBpcyBpZ25vcmVkLlxuXHRcdCAqIEBwYXJhbSB7b25Eb25lfSBBbiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIG9uY2UgdGhlIHNjcm9sbCBmaW5pc2hlZC5cblx0XHQgKi9cblx0XHR2YXIgc2Nyb2xsVG9DZW50ZXJPZiA9IGZ1bmN0aW9uIChlbGVtLCBkdXJhdGlvbiwgb2Zmc2V0LCBvbkRvbmUpIHtcblx0XHRcdHNjcm9sbFRvWShNYXRoLm1heCgwLCBjb250YWluZXIuZ2V0VG9wT2YoZWxlbSkgLSBjb250YWluZXIuZ2V0SGVpZ2h0KCkvMiArIChvZmZzZXQgfHwgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQvMikpLCBkdXJhdGlvbiwgb25Eb25lKVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENoYW5nZXMgZGVmYXVsdCBzZXR0aW5ncyBmb3IgdGhpcyBzY3JvbGxlci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bmV3RGVmYXVsdER1cmF0aW9ufSBPcHRpb25hbGx5IGEgbmV3IHZhbHVlIGZvciBkZWZhdWx0IGR1cmF0aW9uLCB1c2VkIGZvciBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC5cblx0XHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcGFyYW0ge25ld0VkZ2VPZmZzZXR9IE9wdGlvbmFsbHkgYSBuZXcgdmFsdWUgZm9yIHRoZSBlZGdlIG9mZnNldCwgdXNlZCBieSBlYWNoIHNjcm9sbCBtZXRob2QgYnkgZGVmYXVsdC4gSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0XHQgKiBAcmV0dXJucyBBbiBvYmplY3Qgd2l0aCB0aGUgY3VycmVudCB2YWx1ZXMuXG5cdFx0ICovXG5cdFx0dmFyIHNldHVwID0gZnVuY3Rpb24gKG5ld0RlZmF1bHREdXJhdGlvbiwgbmV3RWRnZU9mZnNldCkge1xuXHRcdFx0aWYgKG5ld0RlZmF1bHREdXJhdGlvbiA9PT0gMCB8fCBuZXdEZWZhdWx0RHVyYXRpb24pIHtcblx0XHRcdFx0ZGVmYXVsdER1cmF0aW9uID0gbmV3RGVmYXVsdER1cmF0aW9uXG5cdFx0XHR9XG5cdFx0XHRpZiAobmV3RWRnZU9mZnNldCA9PT0gMCB8fCBuZXdFZGdlT2Zmc2V0KSB7XG5cdFx0XHRcdGVkZ2VPZmZzZXQgPSBuZXdFZGdlT2Zmc2V0XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkZWZhdWx0RHVyYXRpb246IGRlZmF1bHREdXJhdGlvbixcblx0XHRcdFx0ZWRnZU9mZnNldDogZWRnZU9mZnNldFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRzZXR1cDogc2V0dXAsXG5cdFx0XHR0bzogc2Nyb2xsVG9FbGVtLFxuXHRcdFx0dG9ZOiBzY3JvbGxUb1ksXG5cdFx0XHRpbnRvVmlldzogc2Nyb2xsSW50b1ZpZXcsXG5cdFx0XHRjZW50ZXI6IHNjcm9sbFRvQ2VudGVyT2YsXG5cdFx0XHRzdG9wOiBzdG9wU2Nyb2xsLFxuXHRcdFx0bW92aW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiAhIXNjcm9sbFRpbWVvdXRJZCB9LFxuXHRcdFx0Z2V0WTogY29udGFpbmVyLmdldFksXG5cdFx0XHRnZXRUb3BPZjogY29udGFpbmVyLmdldFRvcE9mXG5cdFx0fVxuXG5cdH1cblxuXG5cdHZhciBkb2NFbGVtID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XG5cdHZhciBnZXREb2NZID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gd2luZG93LnNjcm9sbFkgfHwgZG9jRWxlbS5zY3JvbGxUb3AgfVxuXG5cdC8vIENyZWF0ZSBhIHNjcm9sbGVyIGZvciB0aGUgZG9jdW1lbnQ6XG5cdHZhciB6ZW5zY3JvbGwgPSBtYWtlU2Nyb2xsZXIoe1xuXHRcdGJvZHk6IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuYm9keSxcblx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHdpbmRvdy5zY3JvbGxUbygwLCB5KSB9LFxuXHRcdGdldFk6IGdldERvY1ksXG5cdFx0Z2V0SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jRWxlbS5jbGllbnRIZWlnaHQgfSxcblx0XHRnZXRUb3BPZjogZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZ2V0RG9jWSgpIC0gZG9jRWxlbS5vZmZzZXRUb3AgfVxuXHR9KVxuXG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBzY3JvbGxlciBmcm9tIHRoZSBwcm92aWRlZCBjb250YWluZXIgZWxlbWVudCAoZS5nLiwgYSBESVYpXG5cdCAqXG5cdCAqIEBwYXJhbSB7c2Nyb2xsQ29udGFpbmVyfSBUaGUgdmVydGljYWwgcG9zaXRpb24gd2l0aGluIHRoZSBkb2N1bWVudC5cblx0ICogQHBhcmFtIHtkZWZhdWx0RHVyYXRpb259IE9wdGlvbmFsbHkgYSB2YWx1ZSBmb3IgZGVmYXVsdCBkdXJhdGlvbiwgdXNlZCBmb3IgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuXG5cdCAqICAgICAgICBJZ25vcmVkIGlmIDAgb3IgbnVsbCBvciB1bmRlZmluZWQuXG5cdCAqIEBwYXJhbSB7ZWRnZU9mZnNldH0gT3B0aW9uYWxseSBhIHZhbHVlIGZvciB0aGUgZWRnZSBvZmZzZXQsIHVzZWQgYnkgZWFjaCBzY3JvbGwgbWV0aG9kIGJ5IGRlZmF1bHQuIFxuXHQgKiAgICAgICAgSWdub3JlZCBpZiBudWxsIG9yIHVuZGVmaW5lZC5cblx0ICogQHJldHVybnMgQSBzY3JvbGxlciBvYmplY3QsIHNpbWlsYXIgdG8gYHplbnNjcm9sbGAgYnV0IGNvbnRyb2xsaW5nIHRoZSBwcm92aWRlZCBlbGVtZW50LlxuXHQgKi9cblx0emVuc2Nyb2xsLmNyZWF0ZVNjcm9sbGVyID0gZnVuY3Rpb24gKHNjcm9sbENvbnRhaW5lciwgZGVmYXVsdER1cmF0aW9uLCBlZGdlT2Zmc2V0KSB7XG5cdFx0cmV0dXJuIG1ha2VTY3JvbGxlcih7XG5cdFx0XHRib2R5OiBzY3JvbGxDb250YWluZXIsXG5cdFx0XHR0b1k6IGZ1bmN0aW9uICh5KSB7IHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPSB5IH0sXG5cdFx0XHRnZXRZOiBmdW5jdGlvbiAoKSB7IHJldHVybiBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wIH0sXG5cdFx0XHRnZXRIZWlnaHQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGgubWluKHNjcm9sbENvbnRhaW5lci5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2NFbGVtLmNsaWVudEhlaWdodCkgfSxcblx0XHRcdGdldFRvcE9mOiBmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS5vZmZzZXRUb3AgfVxuXHRcdH0sIGRlZmF1bHREdXJhdGlvbiwgZWRnZU9mZnNldClcblx0fVxuXG5cblx0Ly8gQXV0b21hdGljIGxpbmstc21vb3RoaW5nIG9uIGFjaG9yc1xuXHQvLyBFeGNsdWRlIElFOC0gb3Igd2hlbiBuYXRpdmUgaXMgZW5hYmxlZCBvciBaZW5zY3JvbGwgYXV0by0gaXMgZGlzYWJsZWRcblx0aWYgKFwiYWRkRXZlbnRMaXN0ZW5lclwiIGluIHdpbmRvdyAmJiAhd2luZG93Lm5vWmVuc21vb3RoICYmICFpc05hdGl2ZVNtb290aFNjcm9sbEVuYWJsZWRPbihkb2N1bWVudC5ib2R5KSkge1xuXG5cdFx0dmFyIGlzSGlzdG9yeVN1cHBvcnRlZCA9IFwiaGlzdG9yeVwiIGluIHdpbmRvdyAmJiBcInB1c2hTdGF0ZVwiIGluIGhpc3Rvcnlcblx0XHR2YXIgaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCA9IGlzSGlzdG9yeVN1cHBvcnRlZCAmJiBcInNjcm9sbFJlc3RvcmF0aW9uXCIgaW4gaGlzdG9yeVxuXG5cdFx0Ly8gT24gZmlyc3QgbG9hZCAmIHJlZnJlc2ggbWFrZSBzdXJlIHRoZSBicm93c2VyIHJlc3RvcmVzIHRoZSBwb3NpdGlvbiBmaXJzdFxuXHRcdGlmIChpc1Njcm9sbFJlc3RvcmF0aW9uU3VwcG9ydGVkKSB7XG5cdFx0XHRoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJhdXRvXCJcblx0XHR9XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRpZiAoaXNTY3JvbGxSZXN0b3JhdGlvblN1cHBvcnRlZCkge1xuXHRcdFx0XHQvLyBTZXQgaXQgdG8gbWFudWFsXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBoaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIiB9LCA5KVxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRcdGlmIChldmVudC5zdGF0ZSAmJiBcInplbnNjcm9sbFlcIiBpbiBldmVudC5zdGF0ZSkge1xuXHRcdFx0XHRcdFx0emVuc2Nyb2xsLnRvWShldmVudC5zdGF0ZS56ZW5zY3JvbGxZKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgZmFsc2UpXG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlZGdlIG9mZnNldCBvbiBmaXJzdCBsb2FkIGlmIG5lY2Vzc2FyeVxuXHRcdFx0Ly8gVGhpcyBtYXkgbm90IHdvcmsgb24gSUUgKG9yIG9sZGVyIGNvbXB1dGVyPykgYXMgaXQgcmVxdWlyZXMgbW9yZSB0aW1lb3V0LCBhcm91bmQgMTAwIG1zXG5cdFx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Ly8gQWRqdXN0bWVudCBpcyBvbmx5IG5lZWRlZCBpZiB0aGVyZSBpcyBhbiBlZGdlIG9mZnNldDpcblx0XHRcdFx0XHR2YXIgZWRnZU9mZnNldCA9IHplbnNjcm9sbC5zZXR1cCgpLmVkZ2VPZmZzZXRcblx0XHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdFx0dmFyIHRhcmdldEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMV0pXG5cdFx0XHRcdFx0XHRpZiAodGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGFyZ2V0WSA9IE1hdGgubWF4KDAsIHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKSAtIGVkZ2VPZmZzZXQpXG5cdFx0XHRcdFx0XHRcdHZhciBkaWZmID0gemVuc2Nyb2xsLmdldFkoKSAtIHRhcmdldFlcblx0XHRcdFx0XHRcdFx0Ly8gT25seSBkbyB0aGUgYWRqdXN0bWVudCBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IGNsb3NlIHRvIHRoZSBlbGVtZW50OlxuXHRcdFx0XHRcdFx0XHRpZiAoMCA8PSBkaWZmICYmIGRpZmYgPCA5ICkge1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCB0YXJnZXRZKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LCA5KVxuXHRcdFx0fVxuXG5cdFx0fSwgZmFsc2UpXG5cblx0XHQvLyBIYW5kbGluZyBjbGlja3Mgb24gYW5jaG9yc1xuXHRcdHZhciBSRV9ub1plbnNtb290aCA9IG5ldyBSZWdFeHAoXCIoXnxcXFxccylub1plbnNtb290aChcXFxcc3wkKVwiKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHR2YXIgYW5jaG9yID0gZXZlbnQudGFyZ2V0XG5cdFx0XHR3aGlsZSAoYW5jaG9yICYmIGFuY2hvci50YWdOYW1lICE9PSBcIkFcIikge1xuXHRcdFx0XHRhbmNob3IgPSBhbmNob3IucGFyZW50Tm9kZVxuXHRcdFx0fVxuXHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgaXQgd2Fzbid0IHdpdGggdGhlIHByaW1hcnkgYnV0dG9uLCBvciB3aXRoIHNvbWUgbW9kaWZpZXIga2V5czpcblx0XHRcdGlmICghYW5jaG9yIHx8IGV2ZW50LndoaWNoICE9PSAxIHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5hbHRLZXkpIHtcblx0XHRcdFx0cmV0dXJuXG5cdFx0XHR9XG5cdFx0XHQvLyBTYXZlIHRoZSBjdXJyZW50IHNjcm9sbGluZyBwb3NpdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCBmb3Igc2Nyb2xsIHJlc3RvcmF0aW9uOlxuXHRcdFx0aWYgKGlzU2Nyb2xsUmVzdG9yYXRpb25TdXBwb3J0ZWQpIHtcblx0XHRcdFx0dmFyIGhpc3RvcnlTdGF0ZSA9IGhpc3Rvcnkuc3RhdGUgJiYgdHlwZW9mIGhpc3Rvcnkuc3RhdGUgPT09IFwib2JqZWN0XCIgPyBoaXN0b3J5LnN0YXRlIDoge31cblx0XHRcdFx0aGlzdG9yeVN0YXRlLnplbnNjcm9sbFkgPSB6ZW5zY3JvbGwuZ2V0WSgpXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiKVxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdFx0Ly8gQXZvaWQgdGhlIENocm9tZSBTZWN1cml0eSBleGNlcHRpb24gb24gZmlsZSBwcm90b2NvbCwgZS5nLiwgZmlsZTovL2luZGV4Lmh0bWxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gRmluZCB0aGUgcmVmZXJlbmNlZCBJRDpcblx0XHRcdHZhciBocmVmID0gYW5jaG9yLmdldEF0dHJpYnV0ZShcImhyZWZcIikgfHwgXCJcIlxuXHRcdFx0aWYgKGhyZWYuaW5kZXhPZihcIiNcIikgPT09IDAgJiYgIVJFX25vWmVuc21vb3RoLnRlc3QoYW5jaG9yLmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0dmFyIHRhcmdldFkgPSAwXG5cdFx0XHRcdHZhciB0YXJnZXRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZi5zdWJzdHJpbmcoMSkpXG5cdFx0XHRcdGlmIChocmVmICE9PSBcIiNcIikge1xuXHRcdFx0XHRcdGlmICghdGFyZ2V0RWxlbSkge1xuXHRcdFx0XHRcdFx0Ly8gTGV0IHRoZSBicm93c2VyIGhhbmRsZSB0aGUgY2xpY2sgaWYgdGhlIHRhcmdldCBJRCBpcyBub3QgZm91bmQuXG5cdFx0XHRcdFx0XHRyZXR1cm5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGFyZ2V0WSA9IHplbnNjcm9sbC5nZXRUb3BPZih0YXJnZXRFbGVtKVxuXHRcdFx0XHR9XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Ly8gQnkgZGVmYXVsdCB0cmlnZ2VyIHRoZSBicm93c2VyJ3MgYGhhc2hjaGFuZ2VgIGV2ZW50Li4uXG5cdFx0XHRcdHZhciBvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IHdpbmRvdy5sb2NhdGlvbiA9IGhyZWYgfVxuXHRcdFx0XHQvLyAuLi51bmxlc3MgdGhlcmUgaXMgYW4gZWRnZSBvZmZzZXQgc3BlY2lmaWVkXG5cdFx0XHRcdHZhciBlZGdlT2Zmc2V0ID0gemVuc2Nyb2xsLnNldHVwKCkuZWRnZU9mZnNldFxuXHRcdFx0XHRpZiAoZWRnZU9mZnNldCkge1xuXHRcdFx0XHRcdHRhcmdldFkgPSBNYXRoLm1heCgwLCB0YXJnZXRZIC0gZWRnZU9mZnNldClcblx0XHRcdFx0XHRpZiAoaXNIaXN0b3J5U3VwcG9ydGVkKSB7XG5cdFx0XHRcdFx0XHRvbkRvbmUgPSBmdW5jdGlvbiAoKSB7IGhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCBocmVmKSB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHplbnNjcm9sbC50b1kodGFyZ2V0WSwgbnVsbCwgb25Eb25lKVxuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKVxuXG5cdH1cblxuXG5cdHJldHVybiB6ZW5zY3JvbGxcblxuXG59KSk7XG4iLCJmdW5jdGlvbiBmb2N1c1dpdGhpbihkb2N1bWVudCwgb3B0cykge1xuICBjb25zdCBjbGFzc05hbWUgPSBPYmplY3Qob3B0cykuY2xhc3NOYW1lO1xuICBjb25zdCBhdHRyID0gT2JqZWN0KG9wdHMpLmF0dHIgfHwgJ2ZvY3VzLXdpdGhpbic7XG4gIGNvbnN0IGZvcmNlID0gT2JqZWN0KG9wdHMpLmZvcmNlO1xuICBjb25zdCBsYXN0RWxlbWVudHMgPSBbXTtcblxuICB0cnkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cy13aXRoaW4nKTtcblxuICAgIGlmICghZm9yY2UpIHtcbiAgICAgIHJldHVybiBpbml0aWFsaXplO1xuICAgIH1cbiAgfSBjYXRjaCAoaWdub3JlZEVycm9yKSB7XG4gICAgLyogZG8gbm90aGluZyBhbmQgY29udGludWUgKi9cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uZm9jdXNjaGFuZ2UoKSB7XG4gICAgbGV0IGxhc3RFbGVtZW50O1xuXG4gICAgd2hpbGUgKGxhc3RFbGVtZW50ID0gbGFzdEVsZW1lbnRzLnBvcCgpKSB7XG4gICAgICBpZiAoYXR0cikge1xuICAgICAgICBsYXN0RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgbGFzdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDsgLy8gb25seSBhZGQgZm9jdXMgaWYgaXQgaGFzIG5vdCBiZWVuIGFkZGVkIGFuZCBpcyBub3QgdGhlIGRvY3VtZW50IGVsZW1lbnRcblxuICAgIGlmICghL14oI2RvY3VtZW50fEhUTUx8Qk9EWSkkLy50ZXN0KE9iamVjdChhY3RpdmVFbGVtZW50KS5ub2RlTmFtZSkpIHtcbiAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50ICYmIGFjdGl2ZUVsZW1lbnQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgaWYgKGF0dHIpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXN0RWxlbWVudHMucHVzaChhY3RpdmVFbGVtZW50KTtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgb25mb2N1c2NoYW5nZSwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uZm9jdXNjaGFuZ2UsIHRydWUpO1xuICB9XG4gIC8qKlxuICAqIENhbGxiYWNrIHdyYXBwZXIgZm9yIGNoZWNrIGxvYWRlZCBzdGF0ZVxuICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlICovXG5cblxuICAhZnVuY3Rpb24gbG9hZCgpIHtcbiAgICBpZiAoL20vLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBsb2FkKSB8IGluaXRpYWxpemUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGxvYWQpO1xuICAgIH1cbiAgfSgpO1xuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgcmV0dXJuIGluaXRpYWxpemU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvY3VzV2l0aGluO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiL2pzL2RlZmF1bHRzXCI6IDAsXG5cdFwiY3NzL3ByaW50XCI6IDAsXG5cdFwiY3NzL2dsb2JhbFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzeWRfZDlcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3lkX2Q5XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL3ByaW50XCIsXCJjc3MvZ2xvYmFsXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vd2ViL3RoZW1lcy9jdXN0b20vYWJoaS9hc3NldHMvanMvZGVmYXVsdHMudHNcIikpKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wiY3NzL3ByaW50XCIsXCJjc3MvZ2xvYmFsXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vd2ViL3RoZW1lcy9jdXN0b20vYWJoaS9hc3NldHMvc2Fzcy9nbG9iYWwuc2Nzc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImNzcy9wcmludFwiLFwiY3NzL2dsb2JhbFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3dlYi90aGVtZXMvY3VzdG9tL2FiaGkvYXNzZXRzL3Nhc3MvcHJpbnQuc2Nzc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJmb2N1c193aXRoaW5fMSIsIl9faW1wb3J0RGVmYXVsdCIsInplbnNjcm9sbF8xIiwidmFuaWxsYV9sYXp5bG9hZF8xIiwidG9nZ2xlRGF0YUF0dHJfMSIsImJhZ3VldHRlYm94X2pzXzEiLCJkb2N1bWVudCIsImF0dHIiLCJjbGFzc05hbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwicnVuIiwibWVudUJ1cmdlckJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGVOYXYiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpbmtzIiwiZm9yRWFjaCIsImxpbmsiLCJob3N0bmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwic2V0QXR0cmlidXRlIiwibGF6eUxvYWRJbWFnZXMiLCJzZXR1cCIsInRvZ2dsZURhdGFBdHRyIiwiZWwiLCJkYXRhbmFtZSIsIm9uU3RhdGUiLCJvZmZTdGF0ZSIsImNvbmNhdCIsImdldEF0dHJpYnV0ZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9