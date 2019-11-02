"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderUntil = deprecated_renderUntil;

require("core-js/modules/es6.promise");

var _enzyme = require("enzyme");

function renderUntil(predicate) {
  var _this = this;

  return new Promise(function (resolve) {
    /**
     * Continuously lets JS/React continue doing its async work and then check
     * if the callback matches what the user expects, in which case the tree is
     * ready to be asserted on.
     */
    var wait = function wait() {
      if (predicate(_this)) {
        resolve(_this);
      } else {
        setImmediate(function () {
          /**
           * Except for after the initial render, we need to make sure the
           * tree gets re-rendered to reflect any changes caused by props or
           * state changes.
           */
          _this.update();

          wait();
        });
      }
    };
    /**
     * Start recursive waiting process.
     */


    wait();
  });
} // TODO: Depending on this discussion move this upstream
// https://github.com/airbnb/enzyme/issues/1878.


_enzyme.ReactWrapper.prototype.renderUntil = renderUntil;
/**
 * @deprecated Use {@link ReactWrapper.prototype.renderUntil} instead.
 */

function deprecated_renderUntil(until, element) {
  /**
   * In case of an uncaught error, be sure to reject the promise ASAP and
   * with a helpful error.
   */
  var tree = (0, _enzyme.mount)(element);
  return tree.renderUntil(until);
}
//# sourceMappingURL=renderUntil.js.map