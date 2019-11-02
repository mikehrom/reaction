"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BylineContainer = exports.Byline = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../Constants");

var _Author = require("./Author");

var _Date = require("./Date");

var _Share = require("./Share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Byline = function Byline(props) {
  var _props$article = props.article,
      authors = _props$article.authors,
      published_at = _props$article.published_at,
      slug = _props$article.slug,
      social_title = _props$article.social_title,
      thumbnail_title = _props$article.thumbnail_title,
      color = props.color,
      date = props.date,
      layout = props.layout,
      size = props.size;
  return _react.default.createElement(BylineContainer, {
    className: "Byline",
    color: color
  }, _react.default.createElement(_Author.Author, {
    authors: authors,
    color: color,
    layout: layout,
    size: size
  }), _react.default.createElement(_Date.Date, {
    date: date || published_at,
    layout: layout,
    size: size
  }), layout !== "condensed" && _react.default.createElement(_Share.Share, {
    url: (0, _Constants.getArticleFullHref)(slug),
    title: social_title || thumbnail_title,
    color: color
  }));
};

exports.Byline = Byline;
Byline.defaultProps = {
  color: "black"
};

var BylineContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "Byline__BylineContainer",
  componentId: "sc-1iqb1j2-0"
})(["display:flex;flex-wrap:wrap;align-items:flex-end;color:", ";"], function (props) {
  return props.color;
});

exports.BylineContainer = BylineContainer;
//# sourceMappingURL=Byline.js.map