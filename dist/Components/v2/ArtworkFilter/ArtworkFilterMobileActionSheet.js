"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkFilterMobileActionSheet = void 0;

var _palette = require("@artsy/palette");

var _ = require("./..");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArtworkFilterContext = require("./ArtworkFilterContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtworkFilterMobileActionSheet = function ArtworkFilterMobileActionSheet(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose;
  var filterContext = (0, _ArtworkFilterContext.useArtworkFilterContext)();
  return _react.default.createElement(Container, {
    mt: 6
  }, _react.default.createElement(_.MobileTopBar, null, _react.default.createElement(_palette.Button, {
    variant: "noOutline",
    size: "small",
    onClick: function onClick() {
      return filterContext.resetFilters();
    }
  }, "Reset"), _react.default.createElement(FilterTitle, {
    size: "2",
    weight: "medium"
  }, "Filter"), _react.default.createElement(_palette.Button, {
    variant: "primaryBlack",
    size: "small",
    onClick: function onClick() {
      return onClose();
    }
  }, "Apply")), _react.default.createElement(_palette.Spacer, {
    pt: 1,
    mb: 3
  }), _react.default.createElement(_palette.Box, {
    p: 2
  }, children));
};

exports.ArtworkFilterMobileActionSheet = ArtworkFilterMobileActionSheet;
var Container = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtworkFilterMobileActionSheet__Container",
  componentId: "sc-1f5nuxa-0"
})(["position:fixed;z-index:971;top:0;left:0;width:100%;height:100%;background-color:white;overflow-y:scroll;-webkit-overflow-scrolling:touch;"]);
var FilterTitle = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "ArtworkFilterMobileActionSheet__FilterTitle",
  componentId: "sc-1f5nuxa-1"
})(["width:min-content;"]);
//# sourceMappingURL=ArtworkFilterMobileActionSheet.js.map