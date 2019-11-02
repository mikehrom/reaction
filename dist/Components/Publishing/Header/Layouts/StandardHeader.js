"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StandardHeader = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Fonts = require("../../../../Assets/Fonts");

var _Helpers = require("../../../Helpers");

var _Byline = require("../../Byline/Byline");

var _VerticalOrSeriesTitle = require("../../Sections/VerticalOrSeriesTitle");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    margin: ", "px auto;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 ", "px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StandardHeader = function StandardHeader(props) {
  var article = props.article,
      date = props.date,
      editTitle = props.editTitle,
      editVertical = props.editVertical;
  var vertical = article.vertical && article.vertical.name;
  return _react.default.createElement(StandardHeaderParent, null, _react.default.createElement(StandardHeaderContainer, null, (vertical || editVertical) && _react.default.createElement(Vertical, null, _react.default.createElement(_VerticalOrSeriesTitle.VerticalOrSeriesTitle, {
    article: article,
    vertical: vertical || editVertical,
    color: !vertical ? (0, _palette.color)("black30") : undefined
  })), _react.default.createElement(Title, null, editTitle || _react.default.createElement("h1", null, article.title)), _react.default.createElement(_Byline.Byline, {
    article: article,
    date: date && date
  })));
};

exports.StandardHeader = StandardHeader;

var StandardHeaderParent = _styledComponents.default.div.withConfig({
  displayName: "StandardHeader__StandardHeaderParent",
  componentId: "sc-18ndm72-0"
})(["margin:0 ", "px;", ";"], (0, _palette.space)(4), _Helpers.pMedia.sm(_templateObject(), (0, _palette.space)(2)));

var StandardHeaderContainer = _styledComponents.default.div.withConfig({
  displayName: "StandardHeader__StandardHeaderContainer",
  componentId: "sc-18ndm72-1"
})(["display:flex;flex-direction:column;width:100%;max-width:1250px;margin:", "px auto;box-sizing:border-box;", ";"], (0, _palette.space)(4), _Helpers.pMedia.sm(_templateObject2(), (0, _palette.space)(3)));

var Title = _styledComponents.default.div.withConfig({
  displayName: "StandardHeader__Title",
  componentId: "sc-18ndm72-2"
})(["", ";padding-bottom:50px;", ";"], (0, _Fonts.garamond)("s50"), _Helpers.pMedia.sm(_templateObject3(), (0, _Fonts.garamond)("s34")));

var Vertical = _styledComponents.default.div.withConfig({
  displayName: "StandardHeader__Vertical",
  componentId: "sc-18ndm72-3"
})(["padding-bottom:", "px;"], (0, _palette.space)(1));
//# sourceMappingURL=StandardHeader.js.map