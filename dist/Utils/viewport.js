"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getViewportDimensions = void 0;

var getViewportDimensions = function getViewportDimensions() {
  var width;
  var height;

  try {
    width = window.innerWidth;
  } catch (e) {
    width = 0;
  }

  try {
    height = window.innerHeight;
  } catch (e) {
    height = 0;
  }

  return {
    width: width,
    height: height
  };
};

exports.getViewportDimensions = getViewportDimensions;
//# sourceMappingURL=viewport.js.map