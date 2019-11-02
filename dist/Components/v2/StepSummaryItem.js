"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepSummaryItem = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _palette = require("@artsy/palette");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var LockIconPositioner = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "StepSummaryItem__LockIconPositioner",
  componentId: "sc-1fnkdj1-0"
})(["position:absolute;top:0;right:0;"]);

var StepSummaryItem = function StepSummaryItem(_ref) {
  var title = _ref.title,
      onChange = _ref.onChange,
      children = _ref.children,
      locked = _ref.locked,
      others = _objectWithoutProperties(_ref, ["title", "onChange", "children", "locked"]);

  var showHeading = title || onChange && !locked;
  return _react.default.createElement(_palette.StackableBorderBox, _extends({
    flexDirection: "column"
  }, others, {
    style: {
      position: "relative"
    }
  }), showHeading && _react.default.createElement(_palette.Flex, {
    justifyContent: "space-between",
    alignItems: "baseline",
    mb: 1
  }, title && _react.default.createElement(_palette.Serif, {
    size: ["2", "3t"],
    weight: "semibold",
    color: "black100"
  }, title), !locked && onChange && _react.default.createElement(_palette.Sans, {
    size: "2"
  }, _react.default.createElement("a", {
    className: "colorLink",
    onClick: onChange
  }, "Change")), locked && _react.default.createElement(_palette.LockIcon, null)), !showHeading && locked && _react.default.createElement(LockIconPositioner, {
    p: [2, 3]
  }, _react.default.createElement(_palette.LockIcon, null)), children);
};

exports.StepSummaryItem = StepSummaryItem;
//# sourceMappingURL=StepSummaryItem.js.map