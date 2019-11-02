"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _palette = require("@artsy/palette");

var _Colors = _interopRequireDefault(require("./Colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  breakpoints: [768, 900, 1024, 1192],
  flexboxgrid: {
    // Defaults
    gutterWidth: 3,
    // rem
    outerMargin: 2,
    // rem
    container: {
      sm: 46,
      // rem
      md: 61,
      // rem
      lg: 76 // rem

    },
    breakpoints: {
      xs: _palette.breakpoints.xs,
      // px
      sm: _palette.breakpoints.sm,
      md: _palette.breakpoints.md,
      lg: _palette.breakpoints.lg,
      xl: _palette.breakpoints.xl
    }
  },
  publishing: {
    breakpoints: {
      xs: 600,
      // px
      sm: 720,
      // px
      md: 900,
      // px
      lg: 1080,
      // px
      xl: 1280 // px

    }
  },
  colors: _Colors.default
};
exports.default = _default;
//# sourceMappingURL=Theme.js.map