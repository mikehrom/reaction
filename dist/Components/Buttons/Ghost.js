"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Default = _interopRequireWildcard(require("./Default"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GhostButton = (0, _styledComponents.default)(_Default.default).withConfig({
  displayName: "Ghost__GhostButton",
  componentId: "sc-193nkgj-0"
})(["background:white;color:", ";border:1px solid ", ";&:hover:not(:disabled){background:white;color:", ";}"], function (props) {
  if (props.disabled) return "rgba(0,0,0,0.5)";
  if (props.state === _Default.ButtonState.Success) return _Colors.default.purpleRegular;
  return "black";
}, _Colors.default.grayRegular, _Colors.default.purpleRegular);
var _default = GhostButton;
exports.default = _default;
//# sourceMappingURL=Ghost.js.map