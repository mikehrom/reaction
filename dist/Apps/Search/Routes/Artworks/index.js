"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchResultsArtworksRoute = void 0;

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _Analytics = require("../../../../Artsy/Analytics");

var _react = _interopRequireDefault(require("react"));

var _ZeroState = require("../../Components/ZeroState");

var _ArtworkFilter = require("../../../../Components/v2/ArtworkFilter");

var _urlBuilder = require("../../../../Components/v2/ArtworkFilter/Utils/urlBuilder");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SearchResultsArtworksRoute = function SearchResultsArtworksRoute(props) {
  var tracking = (0, _Analytics.useTracking)();
  return _react.default.createElement(_palette.Box, {
    pt: 2
  }, _react.default.createElement(_ArtworkFilter.ArtworkFilter, {
    viewer: props.viewer,
    filters: props.location.query,
    onChange: _urlBuilder.updateUrl,
    onArtworkBrickClick: function onArtworkBrickClick(artwork, artworkBrickProps) {
      tracking.trackEvent({
        action_type: _Analytics.AnalyticsSchema.ActionType.SelectedItemFromSearchPage,
        query: artworkBrickProps.term,
        item_type: "Artwork",
        item_id: artwork.id,
        destination_path: artwork.href
      });
    },
    onFilterClick: function onFilterClick(key, value, filterState) {
      tracking.trackEvent({
        action_type: _Analytics.AnalyticsSchema.ActionType.CommercialFilterParamsChanged,
        changed: _defineProperty({}, key, value),
        current: filterState
      });
    },
    ZeroState: _ZeroState.ZeroState
  }));
};

exports.SearchResultsArtworksRoute = SearchResultsArtworksRoute;
//# sourceMappingURL=index.js.map