"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SortFilter = void 0;

require("core-js/modules/es6.array.sort");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _ArtworkFilterContext = require("../ArtworkFilterContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortFilter = function SortFilter() {
  var context = (0, _ArtworkFilterContext.useArtworkFilterContext)();

  if (!context.sortOptions) {
    return null;
  }

  return _react.default.createElement(_palette.Flex, {
    justifyContent: ["space-between", "flex-end"],
    alignItems: "center"
  }, _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.SelectSmall, {
    options: context.sortOptions,
    selected: context.filters.sort,
    title: "Sort",
    onSelect: function onSelect(sort) {
      context.setFilter("sort", sort);
    }
  })));
};

exports.SortFilter = SortFilter;
//# sourceMappingURL=SortFilter.js.map