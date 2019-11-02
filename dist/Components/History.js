"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createBrowserHistory = _interopRequireDefault(require("history/createBrowserHistory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = {}; // Only load history on client

if (typeof window !== "undefined") {
  history = (0, _createBrowserHistory.default)();
}

var _default = history;
exports.default = _default;
//# sourceMappingURL=History.js.map