"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalHeader = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _palette = require("@artsy/palette");

var _Icon = _interopRequireDefault(require("../Icon"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../Helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalHeader = function ModalHeader(props) {
  var hasLogo = props.hasLogo,
      title = props.title;
  return _react.default.createElement(Header, null, hasLogo && _react.default.createElement(Logo, {
    name: "logotype"
  }), title && _react.default.createElement(Title, {
    size: "5",
    weight: "semibold"
  }, title));
};

exports.ModalHeader = ModalHeader;
var Logo = (0, _styledComponents.default)(_Icon.default).attrs({
  color: "black",
  fontSize: "34px"
}).withConfig({
  displayName: "ModalHeader__Logo",
  componentId: "sc-14i31lu-0"
})(["display:block;line-height:1em;padding-bottom:", "px;", ";"], (0, _palette.space)(1), _Helpers.media.sm(_templateObject()));
var Title = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "ModalHeader__Title",
  componentId: "sc-14i31lu-1"
})(["padding-bottom:", "px;"], (0, _palette.space)(1));

var Header = _styledComponents.default.div.withConfig({
  displayName: "ModalHeader__Header",
  componentId: "sc-14i31lu-2"
})(["display:flex;text-align:center;justify-content:center;flex-direction:column;"]);
//# sourceMappingURL=ModalHeader.js.map