"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewsHeadline = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsHeadline = function NewsHeadline(props) {
  var article = props.article,
      editTitle = props.editTitle;
  var title = article.title;
  return _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    maxWidth: "780",
    mx: "auto",
    mt: "1",
    mb: "3"
  }, _react.default.createElement(_palette.Serif, {
    size: ["6", "8"],
    lineHeight: ["1.1", "initial"],
    weight: "semibold",
    element: "h1"
  }, editTitle ? editTitle : title)));
};

exports.NewsHeadline = NewsHeadline;
//# sourceMappingURL=NewsHeadline.js.map