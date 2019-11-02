"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLACEHOLDER_XS = exports.PLACEHOLDER = exports.SuggestionItem = exports.FirstSuggestionItem = void 0;

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _match = _interopRequireDefault(require("autosuggest-highlight/match"));

var _parse = _interopRequireDefault(require("autosuggest-highlight/parse"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FirstSuggestionItem = function FirstSuggestionItem(props) {
  var href = props.href,
      isHighlighted = props.isHighlighted,
      query = props.query;
  var boxStyle = {
    borderBottom: "1px solid ".concat((0, _palette.color)("black10"))
  };
  return _react.default.createElement(_palette.Box, {
    bg: isHighlighted ? "black5" : "white100",
    style: boxStyle
  }, _react.default.createElement(_palette.Link, {
    color: "black100",
    href: href,
    underlineBehavior: "none"
  }, _react.default.createElement(SuggestionWrapper, null, _react.default.createElement(InnerWrapper, {
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "center"
  }, "See full results for \"", query, "\""))));
};

exports.FirstSuggestionItem = FirstSuggestionItem;

var SuggestionItem = function SuggestionItem(props) {
  var href = props.href,
      isHighlighted = props.isHighlighted;
  return _react.default.createElement(_palette.Box, {
    bg: isHighlighted ? "black5" : "white100"
  }, _react.default.createElement(_palette.Link, {
    color: "black100",
    href: href,
    underlineBehavior: "none"
  }, _react.default.createElement(SuggestionWrapper, null, _react.default.createElement(InnerWrapper, {
    flexDirection: "column",
    flexGrow: "1",
    justifyContent: "center"
  }, _react.default.createElement(DefaultSuggestion, props)))));
};

exports.SuggestionItem = SuggestionItem;
var InnerWrapper = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "SuggestionItem__InnerWrapper",
  componentId: "sc-1brm2x-0"
})(["overflow:hidden;white-space:nowrap;"]);
var PLACEHOLDER = "Search by artist, gallery, style, theme, tag, etc.";
exports.PLACEHOLDER = PLACEHOLDER;
var PLACEHOLDER_XS = "Search Artsy";
exports.PLACEHOLDER_XS = PLACEHOLDER_XS;

var SuggestionWrapper = function SuggestionWrapper(props) {
  return _react.default.createElement(_palette.Flex, {
    alignItems: "center",
    flexDirection: "row",
    height: "62px",
    pl: 2
  }, props.children);
};

var DefaultSuggestion = function DefaultSuggestion(_ref) {
  var display = _ref.display,
      label = _ref.label,
      query = _ref.query;
  var matches = (0, _match.default)(display, query);
  var parts = (0, _parse.default)(display, matches);
  var partTags = parts.map(function (_ref2, index) {
    var highlight = _ref2.highlight,
        text = _ref2.text;
    return highlight ? _react.default.createElement("strong", {
      key: index
    }, text) : text;
  });
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(SuggestionTitle, {
    size: "3"
  }, partTags), _react.default.createElement(_palette.Sans, {
    color: (0, _palette.color)("black60"),
    size: "2"
  }, label));
};

var SuggestionTitle = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "SuggestionItem__SuggestionTitle",
  componentId: "sc-1brm2x-1"
})(["overflow:hidden;text-overflow:ellipsis;"]);
//# sourceMappingURL=SuggestionItem.js.map