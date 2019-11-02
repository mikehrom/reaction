"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchingMediaQueriesForUserAgent = matchingMediaQueriesForUserAgent;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _detectResponsiveTraits = require("@artsy/detect-responsive-traits");

var _Responsive = require("../../../Utils/Responsive");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Find the breakpoints and interactions that the server should render
 */
function matchingMediaQueriesForUserAgent(userAgent) {
  var device = (0, _detectResponsiveTraits.findDevice)(userAgent);

  if (!device) {
    return undefined;
  } else {
    var supportsHover = device.touch ? "notHover" : "hover";
    var onlyMatch = device.resizable ? [supportsHover].concat(_toConsumableArray((0, _Responsive.findBreakpointsForWidths)(device.minWidth, device.maxWidth))) : [supportsHover, (0, _Responsive.findBreakpointAtWidth)(device.minWidth), (0, _Responsive.findBreakpointAtWidth)(device.maxWidth)];
    return onlyMatch;
  }
}
//# sourceMappingURL=matchingMediaQueriesForUserAgent.js.map