"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeadParagraph = exports.Title = exports.ClassicHeader = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _palette = require("@artsy/palette");

var _Fonts = require("../../../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Helpers = require("../../../Helpers");

var _ClassicByline = require("../../Byline/ClassicByline");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    line-height: 1.35em;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    text-align: left;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["padding: 0 ", "px;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ClassicHeader = function ClassicHeader(props) {
  var article = props.article,
      date = props.date,
      editTitle = props.editTitle,
      editLeadParagraph = props.editLeadParagraph;
  return _react.default.createElement(ClassicHeaderContainer, null, _react.default.createElement(Title, null, editTitle || _react.default.createElement("h1", null, article.title)), editLeadParagraph ? _react.default.createElement(LeadParagraph, null, editLeadParagraph) : _react.default.createElement(LeadParagraph, {
    dangerouslySetInnerHTML: {
      __html: article.lead_paragraph
    }
  }), _react.default.createElement(_ClassicByline.ClassicByline, {
    article: article,
    date: date
  }));
};

exports.ClassicHeader = ClassicHeader;

var ClassicHeaderContainer = _styledComponents.default.div.withConfig({
  displayName: "ClassicHeader__ClassicHeaderContainer",
  componentId: "r7h3-0"
})(["display:flex;flex-direction:column;max-width:900px;width:100%;margin:", "px auto;box-sizing:border-box;text-align:center;", ";", ";"], (0, _palette.space)(4), _Helpers.pMedia.xl(_templateObject(), (0, _palette.space)(2)), _Helpers.pMedia.xs(_templateObject2()));

var Title = _styledComponents.default.div.withConfig({
  displayName: "ClassicHeader__Title",
  componentId: "r7h3-1"
})(["padding-bottom:", "px;", ";", ";"], (0, _palette.space)(3), (0, _Fonts.garamond)("s37"), _Helpers.pMedia.xs(_templateObject3(), (0, _Fonts.garamond)("s34")));

exports.Title = Title;

var LeadParagraph = _styledComponents.default.div.withConfig({
  displayName: "ClassicHeader__LeadParagraph",
  componentId: "r7h3-2"
})(["", ";line-height:1.35em;text-align:left;max-width:580px;width:100%;margin:0 auto;padding-bottom:", "px;p{margin:0;}", ";"], (0, _Fonts.garamond)("s19"), (0, _palette.space)(3), _Helpers.pMedia.xs(_templateObject4(), (0, _Fonts.garamond)("s17")));

exports.LeadParagraph = LeadParagraph;
//# sourceMappingURL=ClassicHeader.js.map