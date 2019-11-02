"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Author = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Helpers = require("../../Helpers");

var _Icon = _interopRequireDefault(require("../../Icon"));

var _react = _interopRequireDefault(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _resizer = require("../../../Utils/resizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    min-width: 40px;\n    min-height: 40px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Author = function Author(_ref) {
  var author = _ref.author,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "black" : _ref$color;
  var profileImage = author.image_url ? _react.default.createElement(ProfileImage, {
    mr: 20,
    src: (0, _resizer.resize)(author.image_url, {
      width: 200
    })
  }) : false;
  return _react.default.createElement(AuthorContainer, {
    color: color,
    mb: 20,
    alignItems: "center"
  }, profileImage, _react.default.createElement(_palette.Sans, {
    size: "4",
    weight: "medium"
  }, _react.default.createElement(AuthorInfo, null, author.bio && author.bio.length ? _react.default.createElement(_reactMarkdown.default, {
    source: author.bio,
    disallowedTypes: ["Paragraph"],
    unwrapDisallowed: true,
    containerTagName: "span"
  }) : _react.default.createElement("div", null, author.name)), author.twitter_handle && author.twitter_handle.length ? _react.default.createElement("span", null, _react.default.createElement(TwitterHandle, {
    href: "http://twitter.com/".concat(author.twitter_handle)
  }, _react.default.createElement(_Icon.default, {
    name: "twitter",
    color: color
  }), "@".concat(author.twitter_handle))) : false));
};

exports.Author = Author;
var ProfileImage = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Author__ProfileImage",
  componentId: "sc-1wsx80e-0"
})(["min-width:60px;min-height:60px;border-radius:50%;background:url(", ") no-repeat center center;background-size:cover;", ";"], function (props) {
  return props.src || "";
}, _Helpers.pMedia.xs(_templateObject()));
var AuthorContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "Author__AuthorContainer",
  componentId: "sc-1wsx80e-1"
})(["color:", ";a{color:", ";}"], function (props) {
  return props.color;
}, function (props) {
  return props.color;
});

var AuthorInfo = _styledComponents.default.span.withConfig({
  displayName: "Author__AuthorInfo",
  componentId: "sc-1wsx80e-2"
})(["margin-right:", "px;"], (0, _palette.space)(2));

var TwitterHandle = _styledComponents.default.a.withConfig({
  displayName: "Author__TwitterHandle",
  componentId: "sc-1wsx80e-3"
})(["text-decoration:none;white-space:nowrap;", "{vertical-align:middle;margin:0;}"], _Icon.default);
//# sourceMappingURL=Author.js.map