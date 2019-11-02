"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassicByline = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Fonts = require("../../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Constants = require("../Constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClassicByline = function ClassicByline(props) {
  var _props$article = props.article,
      contributing_authors = _props$article.contributing_authors,
      author = _props$article.author,
      published_at = _props$article.published_at,
      date = props.date;
  var contributors = (0, _Constants.getAuthorByline)(contributing_authors, false);
  return _react.default.createElement(ClassicBylineContainer, null, contributors ? _react.default.createElement("div", null, _react.default.createElement(TextSm, null, author.name), _react.default.createElement("div", null, "By ".concat(contributors))) : author.name, _react.default.createElement(TextSm, {
    color: (0, _palette.color)("black60")
  }, (0, _Constants.getDate)(date || published_at)));
};

exports.ClassicByline = ClassicByline;

var TextSm = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "ClassicByline__TextSm",
  componentId: "sc-1o7gfea-0"
})(["", " color:", ";"], (0, _Fonts.avantgarde)("s11"), function (props) {
  return props.color ? props.color : "black";
});

var ClassicBylineContainer = _styledComponents.default.div.withConfig({
  displayName: "ClassicByline__ClassicBylineContainer",
  componentId: "sc-1o7gfea-1"
})(["display:block;", ";"], (0, _Fonts.avantgarde)("s13"));
//# sourceMappingURL=ClassicByline.js.map