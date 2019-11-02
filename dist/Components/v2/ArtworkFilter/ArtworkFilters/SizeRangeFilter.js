"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SizeRangeFilter = void 0;

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

var SizeRangeFilter = function SizeRangeFilter(_ref) {
  var _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded;
  var filterContext = (0, _ArtworkFilterContext.useArtworkFilterContext)();

  var _filterContext$rangeT = filterContext.rangeToTuple("height"),
      _filterContext$rangeT2 = _slicedToArray(_filterContext$rangeT, 2),
      initialMinHeight = _filterContext$rangeT2[0],
      initialMaxHeight = _filterContext$rangeT2[1];

  var _filterContext$rangeT3 = filterContext.rangeToTuple("width"),
      _filterContext$rangeT4 = _slicedToArray(_filterContext$rangeT3, 2),
      initialMinWidth = _filterContext$rangeT4[0],
      initialMaxWidth = _filterContext$rangeT4[1];

  return _react.default.createElement(_palette.Toggle, {
    label: "Size",
    expanded: expanded
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "left",
    my: 1
  }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.LabeledRange, {
    label: "Height",
    allowCross: false,
    min: _rangeToTuple.MIN_HEIGHT,
    max: _rangeToTuple.MAX_HEIGHT,
    unit: "in",
    step: 1,
    defaultValue: [initialMinHeight, initialMaxHeight],
    onAfterChange: function onAfterChange(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          min = _ref3[0],
          max = _ref3[1];

      var minStr = min === _rangeToTuple.MIN_HEIGHT ? "*" : min;
      var maxStr = max === _rangeToTuple.MAX_HEIGHT ? "*" : max;
      filterContext.setFilter("height", "".concat(minStr, "-").concat(maxStr));
    }
  }), _react.default.createElement(_palette.LabeledRange, {
    label: "Width",
    allowCross: false,
    min: _rangeToTuple.MIN_WIDTH,
    max: _rangeToTuple.MAX_WIDTH,
    unit: "in",
    step: 1,
    defaultValue: [initialMinWidth, initialMaxWidth],
    onAfterChange: function onAfterChange(_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          min = _ref5[0],
          max = _ref5[1];

      var minStr = min === _rangeToTuple.MIN_WIDTH ? "*" : min;
      var maxStr = max === _rangeToTuple.MAX_WIDTH ? "*" : max;
      filterContext.setFilter("width", "".concat(minStr, "-").concat(maxStr));
    }
  }))));
};

exports.SizeRangeFilter = SizeRangeFilter;
//# sourceMappingURL=SizeRangeFilter.js.map