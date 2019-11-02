"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trace = trace;

require("core-js/modules/es6.function.name");

var _ddTrace = _interopRequireDefault(require("dd-trace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adds a DataDog trace around a unit of work wrapped by a Promise.
 *
 * @param name The name/resource for the trace span.
 * @param work The `Promise` that is performing the work to be traced.
 */
function trace(name, work) {
  var activeScope = _ddTrace.default.scopeManager().active();

  var span = _ddTrace.default.startSpan("reaction.".concat(name), {
    childOf: activeScope && activeScope.span()
  });

  return work.then(function (result) {
    span.finish();
    return result;
  }).catch(function (error) {
    span.addTags({
      "error.type": error.name,
      "error.msg": error.message,
      "error.stack": error.stack
    });
    span.finish();
    throw error;
  });
}
//# sourceMappingURL=trace.js.map