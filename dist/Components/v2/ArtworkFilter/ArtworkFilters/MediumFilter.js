"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediumFilter = void 0;

require("core-js/modules/es6.array.index-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.find");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _ArtworkFilterContext = require("../ArtworkFilterContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MediumFilter = function MediumFilter() {
  var _useArtworkFilterCont = (0, _ArtworkFilterContext.useArtworkFilterContext)(),
      aggregations = _useArtworkFilterCont.aggregations,
      counts = _useArtworkFilterCont.counts,
      filterContext = _objectWithoutProperties(_useArtworkFilterCont, ["aggregations", "counts"]);

  var mediums = aggregations.find(function (agg) {
    return agg.slice === "MEDIUM";
  }) || {
    slice: "",
    counts: []
  };
  var allowedMediums = mediums && mediums.counts.length ? mediums.counts : hardcodedMediums;
  var selectedMedium = filterContext.filters.medium;
  var isExpanded = !counts.artworks || counts.artworks > 0;
  return _react.default.createElement(_palette.Toggle, {
    label: "Medium",
    expanded: isExpanded
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "left",
    mb: 1
  }, _react.default.createElement(_palette.RadioGroup, {
    deselectable: true,
    defaultValue: selectedMedium,
    onSelect: function onSelect(selectedOption) {
      filterContext.setFilter("medium", selectedOption);
    }
  }, allowedMediums.map(function (medium, index) {
    return _react.default.createElement(_palette.Radio, {
      key: index,
      my: 0.3,
      value: medium.id.toLocaleLowerCase(),
      label: medium.name
    });
  }))));
};

exports.MediumFilter = MediumFilter;
var hardcodedMediums = [{
  id: "painting",
  name: "Painting"
}, {
  id: "photography",
  name: "Photography"
}, {
  id: "sculpture",
  name: "Sculpture"
}, {
  id: "prints",
  name: "Prints"
}, {
  id: "work-on-Paper",
  name: "Work on Paper"
}, {
  id: "design",
  name: "Design"
}, {
  id: "drawing",
  name: "Drawing"
}, {
  id: "installation",
  name: "Installation"
}, {
  id: "film-slash-video",
  name: "Film/Video"
}, {
  id: "jewelry",
  name: "Jewelry"
}, {
  id: "performance-art",
  name: "Performance Art"
}];
//# sourceMappingURL=MediumFilter.js.map