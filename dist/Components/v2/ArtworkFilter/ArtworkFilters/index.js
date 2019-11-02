"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkFilters = void 0;

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _ColorFilter = require("./ColorFilter");

var _GalleryFilter = require("./GalleryFilter");

var _InstitutionFilter = require("./InstitutionFilter");

var _MediumFilter = require("./MediumFilter");

var _PriceRangeFilter = require("./PriceRangeFilter");

var _SizeRangeFilter = require("./SizeRangeFilter");

var _TimePeriodFilter = require("./TimePeriodFilter");

var _WaysToBuyFilter = require("./WaysToBuyFilter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArtworkFilters = function ArtworkFilters() {
  return _react.default.createElement(_palette.Box, {
    pr: 2
  }, _react.default.createElement(_palette.Box, {
    pb: 2
  }, _react.default.createElement(_palette.Separator, null)), _react.default.createElement(_WaysToBuyFilter.WaysToBuyFilter, null), _react.default.createElement(_MediumFilter.MediumFilter, null), _react.default.createElement(_PriceRangeFilter.PriceRangeFilter, null), _react.default.createElement(_GalleryFilter.GalleryFilter, null), _react.default.createElement(_InstitutionFilter.InstitutionFilter, null), _react.default.createElement(_SizeRangeFilter.SizeRangeFilter, null), _react.default.createElement(_ColorFilter.ColorFilter, null), _react.default.createElement(_TimePeriodFilter.TimePeriodFilter, null));
};

exports.ArtworkFilters = ArtworkFilters;
//# sourceMappingURL=index.js.map