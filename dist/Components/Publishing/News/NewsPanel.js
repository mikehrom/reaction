"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderText = exports.NewsPanel = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.date.to-iso-string");

var _Colors = _interopRequireDefault(require("../../../Assets/Colors"));

var _Fonts = require("../../../Assets/Fonts");

var _Helpers = require("../../Helpers");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    line-height: 1.4em;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 0 10px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NewsPanel = function NewsPanel(props) {
  return _react.default.createElement(NewsPanelContainer, null, _react.default.createElement(Header, null, _react.default.createElement(HeaderTitle, null, "News"), _react.default.createElement(HeaderText, null, (0, _Constants.getDate)(new Date().toISOString(), "monthDay"))), _react.default.createElement(ArticlesContainer, null, props.articles.map(function (article, i) {
    return _react.default.createElement(ArticleHeadline, {
      href: "/news/".concat(article.slug),
      key: i
    }, article.title);
  })), _react.default.createElement(Footer, null, _react.default.createElement("a", {
    href: "/news"
  }, "More in News")));
};

exports.NewsPanel = NewsPanel;

var NewsPanelContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsPanel__NewsPanelContainer",
  componentId: "q0ahqj-0"
})(["padding:20px;border:1px solid ", ";border-radius:3px;a{color:black;&:hover{color:", ";}}"], _Colors.default.grayRegular, _Colors.default.grayDark);

var Header = _styledComponents.default.div.withConfig({
  displayName: "NewsPanel__Header",
  componentId: "q0ahqj-1"
})(["display:flex;justify-content:center;position:relative;"]);

var HeaderText = _styledComponents.default.div.withConfig({
  displayName: "NewsPanel__HeaderText",
  componentId: "q0ahqj-2"
})(["", ";", ";"], (0, _Fonts.unica)("s19", "medium"), _Helpers.pMedia.sm(_templateObject(), (0, _Fonts.unica)("s16", "medium")));

exports.HeaderText = HeaderText;
var HeaderTitle = (0, _styledComponents.default)(HeaderText).withConfig({
  displayName: "NewsPanel__HeaderTitle",
  componentId: "q0ahqj-3"
})(["position:absolute;left:0;"]);

var ArticlesContainer = _styledComponents.default.div.withConfig({
  displayName: "NewsPanel__ArticlesContainer",
  componentId: "q0ahqj-4"
})(["padding:10px 0;display:flex;flex-direction:column;", ";"], _Helpers.pMedia.sm(_templateObject2()));

var ArticleHeadline = _styledComponents.default.a.withConfig({
  displayName: "NewsPanel__ArticleHeadline",
  componentId: "q0ahqj-5"
})(["", ";padding:10px 0;cursor:pointer;text-decoration:none;", ";"], (0, _Fonts.garamond)("s18"), _Helpers.pMedia.sm(_templateObject3(), (0, _Fonts.garamond)("s15")));

var Footer = _styledComponents.default.div.withConfig({
  displayName: "NewsPanel__Footer",
  componentId: "q0ahqj-6"
})(["", ";", ";"], (0, _Fonts.unica)("s16"), _Helpers.pMedia.sm(_templateObject4(), (0, _Fonts.unica)("s12")));
//# sourceMappingURL=NewsPanel.js.map