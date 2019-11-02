"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsDateDivider = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _Helpers = require("../../Helpers");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _NewsDateHeader = require("./NewsDateHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NewsDateDivider = function NewsDateDivider(props) {
  var date = props.date;
  return _react.default.createElement(NewsDateDividerContainer, null, date && _react.default.createElement(_NewsDateHeader.NewsDateHeader, {
    date: date
  }));
};

exports.NewsDateDivider = NewsDateDivider;

var NewsDateDividerContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsDateDivider__NewsDateDividerContainer",
  componentId: "sbivra-0"
})(["margin-top:80px;display:flex;justify-content:center;width:100%;", ";"], _Helpers.pMedia.sm(_templateObject()));
//# sourceMappingURL=NewsDateDivider.js.map