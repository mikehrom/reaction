"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppContainer = void 0;

var _palette = require("@artsy/palette");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContainer = _styledComponents.default.div.withConfig({
  displayName: "AppContainer",
  componentId: "sc-18w4uuc-0"
})(["width:100%;max-width:", "px;margin:auto;"], _palette.breakpoints.xl);

exports.AppContainer = AppContainer;
//# sourceMappingURL=AppContainer.js.map