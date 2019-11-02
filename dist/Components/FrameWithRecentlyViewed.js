"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FrameWithRecentlyViewed = void 0;

var _palette = require("@artsy/palette");

var _HorizontalPadding = require("../Apps/Components/HorizontalPadding");

var _Artsy = require("../Artsy");

var _react = _interopRequireDefault(require("react"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _v = require("./v2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FrameWithRecentlyViewed = function FrameWithRecentlyViewed(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_palette.Flex, {
    flexDirection: "column"
  }, children, typeof window !== "undefined" && _react.default.createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
    threshold: 1000
  }, _react.default.createElement(_v.RecentlyViewedQueryRenderer, null)), _react.default.createElement(_palette.Separator, {
    mt: 6,
    mb: 3
  }), _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref2) {
    var isEigen = _ref2.isEigen;
    return isEigen ? null : _react.default.createElement(_palette.Box, null, _react.default.createElement(_v.Footer, null));
  })));
};

exports.FrameWithRecentlyViewed = FrameWithRecentlyViewed;
//# sourceMappingURL=FrameWithRecentlyViewed.js.map