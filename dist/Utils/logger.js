"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLogger;
exports.shouldCaptureError = void 0;

require("core-js/modules/es6.array.find");

var _errors = require("./errors");

var shouldCaptureError = function shouldCaptureError(environment) {
  return environment === "staging" || environment === "production";
};

exports.shouldCaptureError = shouldCaptureError;

function createLogger() {
  var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "reaction";
  var formattedNamespace = "".concat(namespace, " |");
  return {
    log: function log() {
      var _console;

      for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
        messages[_key] = arguments[_key];
      }

      (_console = console).log.apply(_console, [formattedNamespace].concat(messages, ["\n"]));
    },
    warn: function warn() {
      var _console2;

      for (var _len2 = arguments.length, warnings = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        warnings[_key2] = arguments[_key2];
      }

      (_console2 = console).warn.apply(_console2, [formattedNamespace].concat(warnings, ["\n"]));
    },
    error: function error() {
      var _console3;

      for (var _len3 = arguments.length, errors = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        errors[_key3] = arguments[_key3];
      }

      var error = errors.find(function (e) {
        return e instanceof Error;
      });

      if (error && shouldCaptureError(process.env.NODE_ENV)) {
        (0, _errors.sendErrorToService)(error);
      }

      (_console3 = console).error.apply(_console3, [formattedNamespace].concat(errors, ["\n"]));
    }
  };
}
//# sourceMappingURL=logger.js.map