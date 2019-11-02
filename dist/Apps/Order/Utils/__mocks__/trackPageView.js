"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackPageView = void 0;
var trackPageView = jest.fn();
exports.trackPageView = trackPageView;
beforeEach(function () {
  trackPageView.mockReset();
});
//# sourceMappingURL=trackPageView.js.map