"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InstitutionFilter = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.find");

var _sortBy2 = _interopRequireDefault(require("lodash/sortBy"));

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _ArtworkFilterContext = require("../ArtworkFilterContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InstitutionFilter = function InstitutionFilter() {
  var _useArtworkFilterCont = (0, _ArtworkFilterContext.useArtworkFilterContext)(),
      aggregations = _useArtworkFilterCont.aggregations,
      filterContext = _objectWithoutProperties(_useArtworkFilterCont, ["aggregations"]);

  var items = aggregations.find(function (agg) {
    return agg.slice === "INSTITUTION";
  });

  if (!(items && items.counts)) {
    return null;
  }

  var selectedItem = filterContext.filters.partner_id;
  return _react.default.createElement(_palette.Toggle, {
    label: "Institution"
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "left",
    my: 1
  }, _react.default.createElement(_palette.RadioGroup, {
    deselectable: true,
    defaultValue: selectedItem,
    onSelect: function onSelect(selectedOption) {
      filterContext.setFilter("partner_id", selectedOption);
    }
  }, (0, _sortBy2.default)(items.counts, ["name"]).map(function (item, index) {
    return _react.default.createElement(_palette.Radio, {
      key: index,
      my: 0.3,
      value: item.id.toLocaleLowerCase(),
      label: item.name
    });
  }))));
};

exports.InstitutionFilter = InstitutionFilter;
//# sourceMappingURL=InstitutionFilter.js.map