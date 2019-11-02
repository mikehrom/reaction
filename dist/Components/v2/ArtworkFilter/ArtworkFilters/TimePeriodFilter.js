"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePeriodFilter = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.name");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.find");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _get = require("../../../../Utils/get");

var _ArtworkFilterContext = require("../ArtworkFilterContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TimePeriodFilter = function TimePeriodFilter(_ref) {
  var _ref$expanded = _ref.expanded,
      expanded = _ref$expanded === void 0 ? false : _ref$expanded;

  var _useArtworkFilterCont = (0, _ArtworkFilterContext.useArtworkFilterContext)(),
      aggregations = _useArtworkFilterCont.aggregations,
      filterContext = _objectWithoutProperties(_useArtworkFilterCont, ["aggregations"]);

  var timePeriods = aggregations.find(function (agg) {
    return agg.slice === "MAJOR_PERIOD";
  });
  var periods;

  if (timePeriods && timePeriods.counts) {
    periods = timePeriods.counts.filter(function (timePeriod) {
      return allowedPeriods.includes(timePeriod.name);
    });
  } else {
    periods = allowedPeriods.map(function (name) {
      return {
        name: name
      };
    });
  }

  var selectedPeriod = (0, _get.get)(filterContext.filters, function (f) {
    return f.major_periods[0] || "";
  });
  return _react.default.createElement(_palette.Toggle, {
    label: "Time period",
    expanded: expanded
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    my: 1
  }, _react.default.createElement(_palette.RadioGroup, {
    deselectable: true,
    defaultValue: selectedPeriod,
    onSelect: function onSelect(selectedOption) {
      filterContext.setFilter("major_periods", selectedOption);
    }
  }, periods.map(function (timePeriod, index) {
    return _react.default.createElement(_palette.Radio, {
      my: 0.3,
      value: timePeriod.name,
      key: index,
      label: timePeriod.name
    });
  }))));
};

exports.TimePeriodFilter = TimePeriodFilter;
var allowedPeriods = ["2010", "2000", "1990", "1980", "1970", "1960", "1950", "1940", "1930", "1920", "1910", "1900", "Late 19th Century", "Mid 19th Century", "Early 19th Century"];
//# sourceMappingURL=TimePeriodFilter.js.map