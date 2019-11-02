"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timestamp = void 0;

var _Fonts = require("../../../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../../Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimestampComponent = function TimestampComponent(props) {
  var className = props.className,
      currentTime = props.currentTime,
      duration = props.duration;
  return _react.default.createElement("div", {
    className: className
  }, (0, _Constants.formatTime)(currentTime), " / ", (0, _Constants.formatTime)(duration));
};

var Timestamp = (0, _styledComponents.default)(TimestampComponent).withConfig({
  displayName: "Timestamp",
  componentId: "d9kzzf-0"
})(["", ";"], (0, _Fonts.garamond)("s23"));
exports.Timestamp = Timestamp;
//# sourceMappingURL=Timestamp.js.map