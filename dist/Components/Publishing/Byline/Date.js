"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateContainer = exports.Date = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Date = function Date(props) {
  var date = props.date,
      format = props.format,
      layout = props.layout,
      size = props.size;
  var condensed = layout === "condensed";
  var dateFormat = format || (condensed ? "condensed" : "default");
  var fontSize = size ? size : condensed ? "2" : "3t";
  return _react.default.createElement(DateContainer, {
    condensed: condensed
  }, _react.default.createElement(_palette.Sans, {
    size: fontSize,
    weight: "medium"
  }, (0, _Constants.getDate)(date, dateFormat)));
};

exports.Date = Date;

var DateContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "Date__DateContainer",
  componentId: "sc-1u78l60-0"
})(["margin:5px 20px 0 0;white-space:nowrap;"]);

exports.DateContainer = DateContainer;
//# sourceMappingURL=Date.js.map