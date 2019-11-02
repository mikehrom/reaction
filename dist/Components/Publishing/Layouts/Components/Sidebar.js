"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../../Helpers");

var _EmailPanel = require("../../Email/EmailPanel");

var _RelatedArticlesPanel = require("../../RelatedArticles/Panel/RelatedArticlesPanel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-left: 40px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Sidebar = function Sidebar(props) {
  var emailSignupUrl = props.emailSignupUrl,
      DisplayPanel = props.DisplayPanel,
      relatedArticlesForPanel = props.relatedArticlesForPanel;
  return _react.default.createElement(SidebarContainer, null, emailSignupUrl && _react.default.createElement(SidebarItem, null, _react.default.createElement(_EmailPanel.EmailPanel, {
    signupUrl: emailSignupUrl
  })), relatedArticlesForPanel && _react.default.createElement(SidebarItem, null, _react.default.createElement(_RelatedArticlesPanel.RelatedArticlesPanel, {
    label: "Related Stories",
    articles: relatedArticlesForPanel
  })), DisplayPanel && _react.default.createElement(DisplayPanel, null));
};

exports.Sidebar = Sidebar;

var SidebarContainer = _styledComponents.default.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "fb6p5t-0"
})(["display:flex;flex-direction:column;margin:-58px 0 0 60px;min-width:280px;", ";", ";"], _Helpers.pMedia.xl(_templateObject()), _Helpers.pMedia.lg(_templateObject2()));

var SidebarItem = _styledComponents.default.div.withConfig({
  displayName: "Sidebar__SidebarItem",
  componentId: "fb6p5t-1"
})(["margin-bottom:40px;"]);
//# sourceMappingURL=Sidebar.js.map