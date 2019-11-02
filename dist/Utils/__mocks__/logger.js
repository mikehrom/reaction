"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.createLogger = exports.shouldCaptureError = void 0;

var actual = require.requireActual("../logger");

var shouldCaptureError = actual.shouldCaptureError;
exports.shouldCaptureError = shouldCaptureError;
var createLogger = jest.fn(function () {
  return {
    log: jest.fn(),
    warn: jest.fn(),
    error: jest.fn()
  };
});
exports.createLogger = createLogger;
var _default = createLogger;
exports.default = _default;
//# sourceMappingURL=logger.js.map