"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsText = exports.NewsDateHeader = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _Fonts = require("../../../Assets/Fonts");

var _Helpers = require("../../Helpers");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NewsDateHeader = function NewsDateHeader(props) {
  var date = props.date;
  return _react.default.createElement(NewsText, null, (0, _Constants.getDate)(date, "news"));
};

exports.NewsDateHeader = NewsDateHeader;

var NewsText = _styledComponents.default.div.withConfig({
  displayName: "NewsDateHeader__NewsText",
  componentId: "sc-1yhf0ne-0"
})(["", ";", ";"], (0, _Fonts.unica)("s25", "medium"), _Helpers.pMedia.sm(_templateObject(), (0, _Fonts.unica)("s16", "medium")));

exports.NewsText = NewsText;
//# sourceMappingURL=NewsDateHeader.js.map