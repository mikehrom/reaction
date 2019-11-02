"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriceRangeFilter = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _ArtworkFilterContext = require("../ArtworkFilterContext");

var _rangeToTuple = require("../Utils/rangeToTuple");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PriceRangeFilter = function PriceRangeFilter() {
  var filterContext = (0, _ArtworkFilterContext.useArtworkFilterContext)();

  var _filterContext$rangeT = filterContext.rangeToTuple("price_range"),
      _filterContext$rangeT2 = _slicedToArray(_filterContext$rangeT, 2),
      initialMin = _filterContext$rangeT2[0],
      initialMax = _filterContext$rangeT2[1];

  return _react.default.createElement(_palette.Toggle, {
    label: "Price",
    expanded: true
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "left",
    my: 1
  }, _react.default.createElement(_palette.PriceRange, {
    allowCross: false,
    min: _rangeToTuple.MIN_PRICE,
    max: _rangeToTuple.MAX_PRICE,
    step: 50,
    disabledText: "Disabled for biddable works",
    defaultValue: [initialMin, initialMax],
    disabled: Boolean(filterContext.filters.at_auction),
    onAfterChange: function onAfterChange(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          min = _ref2[0],
          max = _ref2[1];

      var minStr = min === _rangeToTuple.MIN_PRICE ? "*" : min;
      var maxStr = max === _rangeToTuple.MAX_PRICE ? "*" : max;
      filterContext.setFilter("price_range", "".concat(minStr, "-").concat(maxStr));
    }
  })));
};

exports.PriceRangeFilter = PriceRangeFilter;
//# sourceMappingURL=PriceRangeFilter.js.map