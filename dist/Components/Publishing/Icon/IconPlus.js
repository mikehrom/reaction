"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconPlus = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _Helpers = require("../../Helpers");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 13px;\n    height: 13px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Icon = function Icon(props) {
  return _react.default.createElement("svg", {
    className: props.className,
    viewBox: "0 0 15 15",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "2",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-101.000000, -18.000000)",
    fill: props.color ? props.color : "black"
  }, _react.default.createElement("g", {
    transform: "translate(101.000000, 18.000000)"
  }, _react.default.createElement("rect", {
    x: "0",
    y: "7",
    width: "15",
    height: "1"
  }), _react.default.createElement("rect", {
    transform: "translate(7.500000, 7.500000) rotate(-90.000000) translate(-7.500000, -7.500000) ",
    x: "0",
    y: "7",
    width: "15",
    height: "1"
  })))));
};

var IconPlus = (0, _styledComponents.default)(Icon).attrs({
  suppressClassNameWarning: true
}).withConfig({
  displayName: "IconPlus",
  componentId: "sc-1uyfpws-0"
})(["width:15px;height:15px;", ";"], _Helpers.pMedia.md(_templateObject()));
exports.IconPlus = IconPlus;
//# sourceMappingURL=IconPlus.js.map