"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkGridEmptyState = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtworkGridEmptyState = function ArtworkGridEmptyState(props) {
  return _react.default.createElement(EmptyMessage, null, _react.default.createElement("span", null, "There aren't any works available that meet the following criteria at this time."), props.onClearFilters && _react.default.createElement("span", null, " ", "Change your filter criteria to view more works.", " ", _react.default.createElement("a", {
    onClick: props.onClearFilters
  }, "Clear all filters"), "."));
}; // TODO: add link styling to palette Message


exports.ArtworkGridEmptyState = ArtworkGridEmptyState;
var EmptyMessage = (0, _styledComponents.default)(_palette.Message).withConfig({
  displayName: "ArtworkGridEmptyState__EmptyMessage",
  componentId: "sc-1oorhl0-0"
})(["a{text-decoration:underline;cursor:pointer;}"]);
EmptyMessage.displayName = "EmptyMessage";
//# sourceMappingURL=ArtworkGridEmptyState.js.map