"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = _interopRequireDefault(require("events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* tslint:disable:no-namespace */
var emitter = typeof window !== "undefined" ? window.__reactionEventsEventEmitter || (window.__reactionEventsEventEmitter = new _events.default()) : new _events.default();

var postEvent = function postEvent(data) {
  return emitter.emit("postEvent", data);
};

var onEvent = function onEvent(callback) {
  return emitter.on("postEvent", callback);
};

var _default = {
  postEvent: postEvent,
  onEvent: onEvent,
  emitter: emitter
};
exports.default = _default;
//# sourceMappingURL=Events.js.map