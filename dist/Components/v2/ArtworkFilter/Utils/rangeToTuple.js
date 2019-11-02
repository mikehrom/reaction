"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeToTuple = exports.MAX_WIDTH = exports.MIN_WIDTH = exports.MAX_HEIGHT = exports.MIN_HEIGHT = exports.MAX_PRICE = exports.MIN_PRICE = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.number.constructor");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MIN_PRICE = 50;
exports.MIN_PRICE = MIN_PRICE;
var MAX_PRICE = 50000;
exports.MAX_PRICE = MAX_PRICE;
var MIN_HEIGHT = 1;
exports.MIN_HEIGHT = MIN_HEIGHT;
var MAX_HEIGHT = 120;
exports.MAX_HEIGHT = MAX_HEIGHT;
var MIN_WIDTH = 1;
exports.MIN_WIDTH = MIN_WIDTH;
var MAX_WIDTH = 120;
exports.MAX_WIDTH = MAX_WIDTH;

var rangeToTuple = function rangeToTuple(state, range) {
  var minStr;
  var maxStr;
  var min;
  var max;

  if (range === "price_range") {
    ;

    var _ref = state.price_range ? state.price_range.split("-") : ["*", "*"];

    var _ref2 = _slicedToArray(_ref, 2);

    minStr = _ref2[0];
    maxStr = _ref2[1];
    min = minStr === "*" ? MIN_PRICE : Number(minStr);
    max = maxStr === "*" ? MAX_PRICE : Number(maxStr);
  } else if (range === "height") {
    ;

    var _ref3 = state.height ? state.height.split("-") : ["*", "*"];

    var _ref4 = _slicedToArray(_ref3, 2);

    minStr = _ref4[0];
    maxStr = _ref4[1];
    min = minStr === "*" ? MIN_HEIGHT : Number(minStr);
    max = maxStr === "*" ? MAX_HEIGHT : Number(maxStr);
  } else if (range === "width") {
    ;

    var _ref5 = state.width ? state.width.split("-") : ["*", "*"];

    var _ref6 = _slicedToArray(_ref5, 2);

    minStr = _ref6[0];
    maxStr = _ref6[1];
    min = minStr === "*" ? MIN_WIDTH : Number(minStr);
    max = maxStr === "*" ? MAX_WIDTH : Number(maxStr);
  } else {
    ;
    minStr = "*";
    maxStr = "*";
  }

  return [min, max];
};

exports.rangeToTuple = rangeToTuple;
//# sourceMappingURL=rangeToTuple.js.map