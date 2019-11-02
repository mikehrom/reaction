"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteTab = exports.RouteTabs = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is a styled component, so render `props.children`
var RouteTabs = function RouteTabs(props) {
  return _react.default.createElement("div", null, "RouteTabs: ", props.children);
}; // This renders a `Link` from `found`


exports.RouteTabs = RouteTabs;

var RouteTab = function RouteTab(props) {
  return _react.default.createElement("a", {
    href: props.to
  }, props.children);
};

exports.RouteTab = RouteTab;
//# sourceMappingURL=RouteTabs.js.map