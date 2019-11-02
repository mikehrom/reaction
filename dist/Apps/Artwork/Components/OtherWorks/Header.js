"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var buttonHref = props.buttonHref,
      children = props.children,
      title = props.title;
  return _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "center"
  }, _react.default.createElement(_palette.Serif, {
    size: ["5t", "8"],
    color: "black100",
    mb: 2,
    textAlign: "center"
  }, title), buttonHref && _react.default.createElement(_palette.Button, {
    variant: "secondaryOutline",
    mb: 3 // FIXME: Move to <Link> component once https://github.com/artsy/palette/pull/130 is merged
    ,
    onClick: function onClick() {
      return window.location.href = buttonHref;
    }
  }, "View all"), children);
};

exports.Header = Header;
//# sourceMappingURL=Header.js.map