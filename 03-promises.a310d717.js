!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector(".form"),a=i.querySelector('button[type="submit"]');function l(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();var t=Number(e.target.elements.delay.value),n=Number(e.target.elements.step.value),o=Number(e.target.elements.amount.value);e.target.reset();var i=0;a.disabled=!0;for(var u=0;u<o;u++){l(u+1,t+u*n).then((function(e){var t=e.position,n=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;r.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})).finally((function(){++i===o&&(a.disabled=!1)}))}}))}();
//# sourceMappingURL=03-promises.a310d717.js.map