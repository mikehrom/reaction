"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolTipDescription = void 0;

var _Fonts = require("../../../../Assets/Fonts");

var _Truncator = require("../../../Truncator");

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolTipDescription = function ToolTipDescription(props) {
  var text = props.text;
  return _react.default.createElement(Description, null, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 3
  }, _react.default.createElement(_reactMarkdown.default, {
    source: text,
    containerTagName: "span",
    disallowedTypes: ["Link", "Paragraph"],
    unwrapDisallowed: true
  })));
};

exports.ToolTipDescription = ToolTipDescription;

var Description = _styledComponents.default.div.withConfig({
  displayName: "Description",
  componentId: "sc-9hs23c-0"
})(["", ";p,p:first-child::first-letter{margin:0;", ";}padding-bottom:10px;"], (0, _Fonts.garamond)("s15"), (0, _Fonts.garamond)("s15"));
//# sourceMappingURL=Description.js.map