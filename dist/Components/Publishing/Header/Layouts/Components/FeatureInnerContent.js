"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Deck = exports.SubContentContainer = exports.FeatureInnerSubContent = exports.Title = exports.TextContainer = exports.FeatureInnerContent = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Fonts = require("../../../../../Assets/Fonts");

var _Helpers = require("../../../../Helpers");

var _Byline = require("../../../Byline/Byline");

var _VerticalOrSeriesTitle = require("../../../Sections/VerticalOrSeriesTitle");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin-bottom: ", "px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    align-items: flex-start;\n    flex-direction: column;\n  "]);

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
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

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

var FeatureInnerContent = function FeatureInnerContent(props) {
  var article = props.article,
      textColor = props.textColor,
      editTitle = props.editTitle,
      editVertical = props.editVertical;
  var title = article.title,
      hero_section = article.hero_section;
  var vertical = article.vertical && article.vertical.name;
  var isFullscreen = hero_section && hero_section.type === "fullscreen";
  var TextColor = textColor ? textColor : isFullscreen && "white";
  var verticalColor = !vertical ? (0, _palette.color)("black30") : TextColor || undefined;
  return _react.default.createElement(TextContainer, null, _react.default.createElement("div", null, _react.default.createElement(_VerticalOrSeriesTitle.VerticalOrSeriesTitle, {
    article: article,
    color: verticalColor,
    vertical: vertical || editVertical
  }), _react.default.createElement(Title, {
    color: TextColor || undefined
  }, editTitle || _react.default.createElement("h1", null, title))), _react.default.createElement(FeatureInnerSubContent, props));
};

exports.FeatureInnerContent = FeatureInnerContent;

var TextContainer = _styledComponents.default.div.withConfig({
  displayName: "FeatureInnerContent__TextContainer",
  componentId: "sc-16d2gbf-0"
})(["position:relative;display:flex;flex-direction:column;width:100%;", "{padding-bottom:", "px;}"], _VerticalOrSeriesTitle.Vertical, (0, _palette.space)(1));

exports.TextContainer = TextContainer;

var Title = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "FeatureInnerContent__Title",
  componentId: "sc-16d2gbf-1"
})(["color:", ";", ";margin-bottom:75px;letter-spacing:-0.035em;", ";", ";", ";"], function (props) {
  return props.color ? props.color : (0, _palette.color)("black100");
}, (0, _Fonts.unica)("s100"), _Helpers.pMedia.xl(_templateObject(), (0, _Fonts.unica)("s80")), _Helpers.pMedia.lg(_templateObject2(), (0, _Fonts.unica)("s65")), _Helpers.pMedia.xs(_templateObject3(), (0, _Fonts.unica)("s45"))); // Deck & Byline exported separately for mobile split layout


exports.Title = Title;

var FeatureInnerSubContent = function FeatureInnerSubContent(props) {
  var article = props.article,
      textColor = props.textColor,
      date = props.date,
      editDeck = props.editDeck;
  var hero_section = article.hero_section;
  var deck = editDeck || hero_section && hero_section.deck;
  var isFullscreen = hero_section && hero_section.type === "fullscreen";
  var TextColor = textColor || (isFullscreen ? "white" : (0, _palette.color)("black100"));
  return _react.default.createElement(SubContentContainer, null, deck && _react.default.createElement(Deck, {
    size: "3t",
    weight: "medium",
    color: TextColor
  }, deck), _react.default.createElement(_Byline.Byline, {
    article: article,
    color: TextColor,
    date: date && date
  }));
};

exports.FeatureInnerSubContent = FeatureInnerSubContent;

var SubContentContainer = _styledComponents.default.div.withConfig({
  displayName: "FeatureInnerContent__SubContentContainer",
  componentId: "sc-16d2gbf-2"
})(["display:flex;justify-content:space-between;align-items:flex-end;flex-direction:row;", ";"], _Helpers.pMedia.sm(_templateObject4()));

exports.SubContentContainer = SubContentContainer;
var Deck = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "FeatureInnerContent__Deck",
  componentId: "sc-16d2gbf-3"
})(["max-width:460px;margin-right:", "px;", ";"], (0, _palette.space)(3), _Helpers.pMedia.sm(_templateObject5(), (0, _palette.space)(3)));
exports.Deck = Deck;
//# sourceMappingURL=FeatureInnerContent.js.map