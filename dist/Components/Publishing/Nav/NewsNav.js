"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsNav = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../../../Assets/Colors"));

var _Helpers = require("../../Helpers");

var _NewsDateHeader = require("../News/NewsDateHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    min-height: 16px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    left: 20px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NewsNav = function NewsNav(props) {
  var date = props.date,
      positionTop = props.positionTop;
  return _react.default.createElement(NewsNavContainer, {
    positionTop: positionTop
  }, _react.default.createElement(MaxWidthContainer, null, date && _react.default.createElement(_NewsDateHeader.NewsDateHeader, {
    date: date
  }), _react.default.createElement(Title, null, "News")));
};

exports.NewsNav = NewsNav;
var Title = (0, _styledComponents.default)(_NewsDateHeader.NewsText).withConfig({
  displayName: "NewsNav__Title",
  componentId: "sc-1g0ss8v-0"
})(["position:absolute;left:30px;", ";"], _Helpers.pMedia.sm(_templateObject()));

var MaxWidthContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsNav__MaxWidthContainer",
  componentId: "sc-1g0ss8v-1"
})(["position:relative;max-width:780px;margin:auto;display:flex;justify-content:center;align-items:center;min-height:26px;", ";"], _Helpers.pMedia.sm(_templateObject2()));

var NewsNavContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsNav__NewsNavContainer",
  componentId: "sc-1g0ss8v-2"
})(["position:fixed;top:", "px;left:0;right:0;border-bottom:1px solid ", ";padding:10px 0;background:white;z-index:11;"], function (props) {
  return props.positionTop ? props.positionTop : 0;
}, _Colors.default.grayRegular);
//# sourceMappingURL=NewsNav.js.map