"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MockBoot = void 0;

var _Router = require("../Artsy/Router");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MockBoot = function MockBoot(_ref) {
  var _ref$breakpoint = _ref.breakpoint,
      breakpoint = _ref$breakpoint === void 0 ? "xl" : _ref$breakpoint,
      headTags = _ref.headTags,
      children = _ref.children;
  return _react.default.createElement(_Router.Boot, {
    onlyMatchMediaQueries: [breakpoint],
    headTags: headTags,
    context: null,
    user: null,
    relayEnvironment: null,
    routes: null
  }, children);
};

exports.MockBoot = MockBoot;
//# sourceMappingURL=MockBoot.js.map