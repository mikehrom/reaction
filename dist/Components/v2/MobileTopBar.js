"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileTopBar = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MobileTopBar = function MobileTopBar(_ref) {
  var children = _ref.children;
  return _react.default.createElement(Container, {
    px: 2,
    py: 1
  }, _react.default.createElement(_palette.Flex, {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  }, children));
};

exports.MobileTopBar = MobileTopBar;
var Container = (0, _styledComponents.default)(_palette.BorderBox).withConfig({
  displayName: "MobileTopBar__Container",
  componentId: "sc-1qc7l5z-0"
})(["position:fixed;width:100%;background:white;", ";margin-top:-2px;z-index:1;"],
/* offset border*/
"");
//# sourceMappingURL=MobileTopBar.js.map