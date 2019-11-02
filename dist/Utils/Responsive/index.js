"use strict";

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Media: true,
  MediaContextProvider: true,
  createMediaStyle: true,
  SortedBreakpoints: true,
  findBreakpointsForWidths: true,
  findBreakpointAtWidth: true,
  valuesWithBreakpointProps: true
};
exports.valuesWithBreakpointProps = exports.findBreakpointAtWidth = exports.findBreakpointsForWidths = exports.SortedBreakpoints = exports.createMediaStyle = exports.MediaContextProvider = exports.Media = void 0;

var _DeprecatedResponsive = require("./DeprecatedResponsive");

Object.keys(_DeprecatedResponsive).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DeprecatedResponsive[key];
    }
  });
});

var _reactResponsiveMedia = require("@artsy/react-responsive-media");

// TODO: We need this to be 0-based, whereas currently in palette xs is defined
//       as 767. We should move this up to palette, but we need to give the
//       migration path for users of the current Responsive component some
//       serious thought.
var newThemeBreakpoints = {
  xs: 0,
  sm: 768,
  md: 900,
  lg: 1024,
  xl: 1192
};
var ReactionMedia = (0, _reactResponsiveMedia.createMedia)({
  breakpoints: newThemeBreakpoints,
  interactions: {
    // TODO: These should go into palette
    hover: "(pointer: coarse), (-moz-touch-enabled: 1)",
    notHover: "not all and (pointer: coarse), not all and (-moz-touch-enabled: 1)"
  }
});
var Media = ReactionMedia.Media;
exports.Media = Media;
var MediaContextProvider = ReactionMedia.MediaContextProvider;
exports.MediaContextProvider = MediaContextProvider;
var createMediaStyle = ReactionMedia.createMediaStyle;
exports.createMediaStyle = createMediaStyle;
var SortedBreakpoints = ReactionMedia.SortedBreakpoints;
exports.SortedBreakpoints = SortedBreakpoints;
var findBreakpointsForWidths = ReactionMedia.findBreakpointsForWidths;
exports.findBreakpointsForWidths = findBreakpointsForWidths;
var findBreakpointAtWidth = ReactionMedia.findBreakpointAtWidth;
exports.findBreakpointAtWidth = findBreakpointAtWidth;
var valuesWithBreakpointProps = ReactionMedia.valuesWithBreakpointProps; // TODO: Simplify this hideous typing.

exports.valuesWithBreakpointProps = valuesWithBreakpointProps;
//# sourceMappingURL=index.js.map