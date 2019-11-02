"use strict";

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.regexp.replace");

var _chalk = _interopRequireDefault(require("chalk"));

var _enzyme = _interopRequireDefault(require("enzyme"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

require("regenerator-runtime/runtime");

var _util = require("util");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

require("./DevTools/renderUntil");

require("jsdom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

jest.mock("react-tracking");
var track = _reactTracking.default;
track.mockImplementation(function (y) {
  return function (x) {
    return x;
  };
});
jest.mock("react-sizeme", function () {
  return jest.fn(function (c) {
    return function (d) {
      return d;
    };
  });
});
jest.mock("./Utils/logger");
/**
 * We want each test to have assertions, otherwise it’s too easy to write async
 * tests that never end up making any, leading to false positives.
 *
 * TODO: Find a way to make this not emit after failing tests.
 *
 * SEE: https://github.com/facebook/jest/issues/2209#issuecomment-458706599
 */
// afterEach(() => expect.hasAssertions())

_enzyme.default.configure({
  adapter: new _enzymeAdapterReact.default()
});

if (typeof window !== "undefined") {
  window.open = jest.fn();
  window.matchMedia = undefined;
  window.grecaptcha = {
    ready: jest.fn(function (cb) {
      return cb();
    }),
    execute: jest.fn().mockResolvedValue("recaptcha-token")
  };
  window.scrollTo = jest.fn();
  HTMLMediaElement.prototype.pause = jest.fn();
  HTMLMediaElement.prototype.play = jest.fn();
}

if (process.env.ALLOW_CONSOLE_LOGS !== "true") {
  var logToError = function logToError(type, args, constructorOpt) {
    var explanation = _chalk.default.white("Test failed due to `console.".concat(type, "(\u2026)` call.\n")) + _chalk.default.gray("(Disable with ALLOW_CONSOLE_LOGS=true env variable.)\n\n");

    if (args[0] instanceof Error) {
      var msg = explanation + _chalk.default.red(args[0].message);

      var err = new Error(msg);
      err.stack = args[0].stack.replace("Error: ".concat(args[0].message), msg);
      return err;
    } else {
      var _err = new Error(explanation + _chalk.default.red(_util.format.apply(void 0, [args[0]].concat(_toConsumableArray(args.slice(1))))));

      Error.captureStackTrace(_err, constructorOpt);
      return _err;
    }
  };

  var originalLoggers = {
    error: console.error,
    warn: console.warn
  };
  beforeEach(function (done) {
    ;
    ["error", "warn"].forEach(function (type) {
      // Don't spy on loggers that have been modified by the current test.
      if (console[type] === originalLoggers[type]) {
        var handler = function handler() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          // FIXME: React 16.8.x doesn't support async `act` testing hooks and so this
          // suppresses for now. Remove once we upgrade to React 16.9.
          // @see https://github.com/facebook/react/issues/14769
          if (!args[0].includes("Warning: An update to %s inside a test was not wrapped in act")) {
            done.fail(logToError(type, args, handler));
          }
        };

        jest.spyOn(console, type).mockImplementation(handler);
      }
    });
    done(); // it is important to call this here or every test will timeout
  });
}
//# sourceMappingURL=setup_jest.js.map