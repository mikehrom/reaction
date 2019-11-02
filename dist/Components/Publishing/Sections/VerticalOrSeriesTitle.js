"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vertical = exports.VerticalOrSeriesTitle = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VerticalOrSeriesTitle = function VerticalOrSeriesTitle(props) {
  var article = props.article,
      prefix = props.prefix;
  var seriesArticle = article.seriesArticle;
  var vertical = props.vertical ? props.vertical : article.vertical && article.vertical.name;
  var seriesLink = seriesArticle && (0, _Constants.getEditorialHref)("series", seriesArticle.slug);
  return _react.default.createElement(Vertical, {
    size: "3",
    weight: "medium",
    color: props.color
  }, prefix, seriesArticle ? _react.default.createElement("a", {
    href: seriesLink
  }, seriesArticle.title) : _react.default.createElement("span", null, vertical));
};

exports.VerticalOrSeriesTitle = VerticalOrSeriesTitle;
var Vertical = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "VerticalOrSeriesTitle__Vertical",
  componentId: "sc-115i87c-0"
})(["a{color:", ";text-decoration:none;}"], function (props) {
  return props.color;
});
exports.Vertical = Vertical;
VerticalOrSeriesTitle.defaultProps = {
  color: (0, _palette.color)("black100")
};
//# sourceMappingURL=VerticalOrSeriesTitle.js.map