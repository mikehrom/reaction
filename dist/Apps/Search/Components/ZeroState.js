"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZeroState = void 0;

var _palette = require("@artsy/palette");

var _SendFeedback = require("./SendFeedback");

var _ArtworkFilterContext = require("../../../Components/v2/ArtworkFilter/ArtworkFilterContext");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZeroState = function ZeroState(props) {
  var _useArtworkFilterCont = (0, _ArtworkFilterContext.useArtworkFilterContext)(),
      hasFilters = _useArtworkFilterCont.hasFilters,
      _useArtworkFilterCont2 = _useArtworkFilterCont.filters.term,
      term = _useArtworkFilterCont2 === void 0 ? props.term : _useArtworkFilterCont2;

  return _react.default.createElement(_palette.Flex, {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }, _react.default.createElement(_palette.Box, {
    m: 3,
    textAlign: "center"
  }, _react.default.createElement(_palette.Serif, {
    size: "6"
  }, hasFilters ? "No results found." : "No results found for \"".concat(term, "\".")), _react.default.createElement(_palette.Serif, {
    size: "3"
  }, hasFilters ? "Try removing some filters or try another search term." : "Try checking for spelling errors or try another search term.")), _react.default.createElement(_palette.Box, {
    width: "100%"
  }, _react.default.createElement(_SendFeedback.SendFeedback, null)));
};

exports.ZeroState = ZeroState;
//# sourceMappingURL=ZeroState.js.map