"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flushPromiseQueue = flushPromiseQueue;

require("core-js/modules/es6.promise");

/**
 * test utility to wait for all promises to be resolved
 */
function flushPromiseQueue() {
  return new Promise(function (r) {
    return setTimeout(r, 0);
  });
}
//# sourceMappingURL=flushPromiseQueue.js.map