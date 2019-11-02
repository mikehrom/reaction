"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectAppFragmentContainer = exports.CollectApp = void 0;

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _SeoProductsForArtworks = require("../../Components/SeoProductsForArtworks");

var _urlBuilder = require("../../Utils/urlBuilder");

var _AppContainer = require("../../../Components/AppContainer");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _FrameWithRecentlyViewed = require("../../../../Components/FrameWithRecentlyViewed");

var _Seo = require("../../../../Components/v2/Seo");

var _CollectMediumMetadata = require("./Components/CollectMediumMetadata");

var _Artsy = require("../../../../Artsy");

var _ArtworkFilter = require("../../../../Components/v2/ArtworkFilter");

var _CollectionsHubsNav = require("../../../../Components/v2/CollectionsHubsNav");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CollectApp = (0, _Analytics.track)({
  context_page: Schema.PageName.CollectPage
})(function (props) {
  var params = props.params,
      viewer = props.viewer,
      location = props.location;
  var medium = params && params.medium;

  var _getMetadataForMedium = (0, _CollectMediumMetadata.getMetadataForMedium)(medium),
      description = _getMetadataForMedium.description,
      breadcrumbTitle = _getMetadataForMedium.breadcrumbTitle,
      title = _getMetadataForMedium.title;

  var _useTracking = (0, _Analytics.useTracking)(),
      trackEvent = _useTracking.trackEvent; // FIXME: Remove after A/B test completes
  // @ts-ignore


  var _useSystemContext = (0, _Artsy.useSystemContext)(),
      COLLECTION_HUB_ENTRYPOINTS_TEST = _useSystemContext.COLLECTION_HUB_ENTRYPOINTS_TEST;

  (0, _react.useEffect)(function () {
    var experiment = "collection_hub_entrypoints_test";
    trackEvent({
      action_type: Schema.ActionType.ExperimentViewed,
      experiment_id: experiment,
      experiment_name: experiment,
      variation_id: COLLECTION_HUB_ENTRYPOINTS_TEST,
      variation_name: COLLECTION_HUB_ENTRYPOINTS_TEST,
      nonInteraction: 1
    });
  }, []);
  var canonicalHref = medium ? "".concat(_sharify.data.APP_URL, "/collect/").concat(medium) : "".concat(_sharify.data.APP_URL, "/collect"); // Client renders will get COLLECTION_HUB_ENTRYPOINTS_TEST from sd; server renders
  // will get it from the SystemContext.

  var showCollectionHubs = COLLECTION_HUB_ENTRYPOINTS_TEST === "experiment";
  var filterArtworks = props.filterArtworks;
  var items = [{
    path: "/collect",
    name: "Collect"
  }];

  if (medium) {
    items.push({
      path: "/collect/".concat(medium),
      name: breadcrumbTitle
    });
  }

  return _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_FrameWithRecentlyViewed.FrameWithRecentlyViewed, null, _react.default.createElement(_reactHead.Title, null, title), _react.default.createElement(_reactHead.Meta, {
    property: "og:url",
    content: "".concat(_sharify.data.APP_URL, "/collect")
  }), _react.default.createElement(_reactHead.Meta, {
    property: "og:image",
    content: "".concat(_sharify.data.APP_URL, "/images/og_image.jpg")
  }), _react.default.createElement(_reactHead.Meta, {
    name: "description",
    content: description
  }), _react.default.createElement(_reactHead.Meta, {
    property: "og:description",
    content: description
  }), _react.default.createElement(_reactHead.Meta, {
    property: "twitter:description",
    content: description
  }), _react.default.createElement(_reactHead.Link, {
    rel: "canonical",
    href: canonicalHref
  }), _react.default.createElement(_Seo.BreadCrumbList, {
    items: items
  }), filterArtworks && _react.default.createElement(_SeoProductsForArtworks.SeoProductsForArtworks, {
    artworks: filterArtworks
  }), _react.default.createElement(_palette.Box, {
    mt: 3
  }, _react.default.createElement(_palette.Serif, {
    size: "8"
  }, _react.default.createElement("h1", null, "Collect art and design online")), _react.default.createElement(_palette.Separator, {
    mt: 2,
    mb: [2, 2, 2, 4]
  }), showCollectionHubs && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_CollectionsHubsNav.CollectionsHubsNavFragmentContainer, {
    marketingHubCollections: props.marketingHubCollections
  }), _react.default.createElement(_palette.Spacer, {
    mb: 2,
    mt: [2, 2, 2, 4]
  }))), _react.default.createElement(_palette.Box, null, _react.default.createElement(_ArtworkFilter.ArtworkFilter, {
    viewer: viewer,
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
    onChange: function onChange(filters) {
      var url = (0, _urlBuilder.buildUrlForCollectApp)(filters);

      if (typeof window !== "undefined") {
        window.history.replaceState({}, "", url);
      }
      /**
       * FIXME: Ideally we route using our router, but are running into
       * synchronization issues between router state and URL bar state.
       *
       * See below example as an illustration:
       *
        const newLocation = router.createLocation(url)
         router.replace({
          ...newLocation,
          state: {
            scrollTo: "#jump--artworkFilter"
          },
        })
       *
       */

    },
    onFilterClick: function onFilterClick(key, value, filterState) {
      trackEvent({
        action_type: Schema.ActionType.CommercialFilterParamsChanged,
        changed: _defineProperty({}, key, value),
        current: filterState
      });
    }
  }))));
});
exports.CollectApp = CollectApp;
var CollectAppFragmentContainer = (0, _reactRelay.createFragmentContainer)(CollectApp, {
  marketingHubCollections: function marketingHubCollections() {
    var node = require("../../../../__generated__/Collect_marketingHubCollections.graphql");

    if (node.hash && node.hash !== "d2c8a937457d195a57fd7a72bf2ea361") {
      console.error("The definition of 'Collect_marketingHubCollections' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Collect_marketingHubCollections.graphql");
  }
});
exports.CollectAppFragmentContainer = CollectAppFragmentContainer;
//# sourceMappingURL=index.js.map