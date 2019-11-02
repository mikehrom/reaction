"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.border = exports.borderedInput = void 0;

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

var _Fonts = require("../Assets/Fonts");

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var borderedInput = function borderedInput() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _styledComponents.css)(["padding:10px;box-shadow:none;transition:border-color 0.25s;margin-right:10px;resize:none;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;&::placeholder{color:", ";text-overflow:ellipsis;line-height:normal;}", ";", ";"], _Colors.default.grayMedium, (0, _Fonts.garamond)("s17"), border(props));
};

exports.borderedInput = borderedInput;

var border = function border() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _styledComponents.css)(["border:1px solid ", ";transition:border-color 0.25s;&:hover,&:focus,&.focused{border-color:", ";outline:0;}&:disabled{border:2px dotted ", ";}"], props.hasError ? _Colors.default.redMedium : _Colors.default.grayRegular, props.hasError ? _Colors.default.redMedium : _Colors.default.purpleRegular, _Colors.default.grayRegular);
};

exports.border = border;
//# sourceMappingURL=Mixins.js.map