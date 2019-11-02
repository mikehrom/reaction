"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(props) {
  return _react.default.createElement("div", props, props.children);
};

var _default = (0, _styledComponents.default)(Message).withConfig({
  displayName: "Message",
  componentId: "sc-4j7jf2-0"
})(["color:", ";width:100%;padding:15px 30px;border:1px solid ", ";box-shadow:none;font-size:15px;text-align:center;background-color:", ";box-sizing:border-box;"], _Colors.default.graySemibold, function (props) {
  return props.error ? _Colors.default.redMedium : _Colors.default.yellowMedium;
}, function (props) {
  return props.error ? _Colors.default.redRegular : _Colors.default.yellowRegular;
});

exports.default = _default;
//# sourceMappingURL=Message.js.map