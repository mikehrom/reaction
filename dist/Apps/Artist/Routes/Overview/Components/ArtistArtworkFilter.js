"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistArtworkFilterRefetchContainer = void 0;

require("core-js/modules/es6.object.define-property");

var _Artsy = require("../../../../../Artsy");

var Schema = _interopRequireWildcard(require("../../../../../Artsy/Analytics/Schema"));

var _ArtworkFilter = require("../../../../../Components/v2/ArtworkFilter");

var _ArtworkFilterContext = require("../../../../../Components/v2/ArtworkFilter/ArtworkFilterContext");

var _urlBuilder = require("../../../../../Components/v2/ArtworkFilter/Utils/urlBuilder");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _ZeroState = require("./ZeroState");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ArtistArtworkFilter = function ArtistArtworkFilter(props) {
  var location = props.location,
      relay = props.relay,
      artist = props.artist,
      sidebarAggregations = props.sidebarAggregations;
  var tracking = (0, _Artsy.useTracking)();
  var filtered_artworks = artist.filtered_artworks;
  var hasFilter = filtered_artworks && filtered_artworks.__id; // If there was an error fetching the filter,
  // we still want to render the rest of the page.

  if (!hasFilter) return null;
  return _react.default.createElement(_ArtworkFilterContext.ArtworkFilterContextProvider, {
    filters: location.query,
    sortOptions: [{
      value: "-decayed_merch",
      text: "Default"
    }, {
      value: "-partner_updated_at",
      text: "Recently updated"
    }, {
      value: "-published_at",
      text: "Recently added"
    }, {
      value: "-year",
      text: "Artwork year (desc.)"
    }, {
      value: "year",
      text: "Artwork year (asc.)"
    }],
    aggregations: sidebarAggregations.aggregations,
    counts: artist.counts,
    onChange: _urlBuilder.updateUrl,
    onFilterClick: function onFilterClick(key, value, filterState) {
      tracking.trackEvent({
        action_type: Schema.ActionType.CommercialFilterParamsChanged,
        changed: _defineProperty({}, key, value),
        current: filterState
      });
    }
  }, _react.default.createElement(_ArtworkFilter.BaseArtworkFilter, {
    relay: relay,
    viewer: artist,
    relayVariables: {
      aggregations: ["TOTAL"]
    }
  }, artist.counts.artworks.length === 0 && _react.default.createElement(_ZeroState.ZeroState, {
    artist: artist,
    is_followed: artist.is_followed
  })));
};

var ArtistArtworkFilterRefetchContainer = (0, _reactRelay.createRefetchContainer)(ArtistArtworkFilter, {
  artist: function artist() {
    var node = require("../../../../../__generated__/ArtistArtworkFilter_artist.graphql");

    if (node.hash && node.hash !== "d1cbeb45d454e387db7735ccc9d7673d") {
      console.error("The definition of 'ArtistArtworkFilter_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../__generated__/ArtistArtworkFilter_artist.graphql");
  }
}, function () {
  var node = require("../../../../../__generated__/ArtistArtworkFilterQuery.graphql");

  if (node.hash && node.hash !== "69e86714dac6d3e2a28c44e82d5e8e97") {
    console.error("The definition of 'ArtistArtworkFilterQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../../../__generated__/ArtistArtworkFilterQuery.graphql");
});
exports.ArtistArtworkFilterRefetchContainer = ArtistArtworkFilterRefetchContainer;
//# sourceMappingURL=ArtistArtworkFilter.js.map