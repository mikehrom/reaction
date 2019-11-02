"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionFilterFragmentContainer = exports.Overlay = exports.CollectionHeader = exports.featuredArtistsEntityCollection = exports.getFeaturedArtists = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

var _take2 = _interopRequireDefault(require("lodash/take"));

var _filter2 = _interopRequireDefault(require("lodash/filter"));

var _palette = require("@artsy/palette");

var _DefaultHeader = require("./DefaultHeader");

var _Analytics = require("../../../../../../Artsy/Analytics");

var _Fonts = require("../../../../../../Assets/Fonts");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _underscore = require("underscore.string");

var _resizer = require("../../../../../../Utils/resizer");

var _Responsive = require("../../../../../../Utils/Responsive");

var _Artsy = require("../../../../../../Artsy");

var _FollowArtistButton = require("../../../../../../Components/FollowButton/FollowArtistButton");

var _found = require("found");

var _openAuthModal = require("../../../../../../Utils/openAuthModal");

var _FeaturedArtists = require("./FeaturedArtists");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    margin-left: -20px;\n    margin-right: -20px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var handleOpenAuth = function handleOpenAuth(mediator, artist) {
  (0, _openAuthModal.openAuthModal)(mediator, {
    entity: artist,
    contextModule: _Analytics.AnalyticsSchema.ContextModule.CollectionDescription,
    intent: _openAuthModal.AuthModalIntent.FollowArtist
  });
};

var getFeaturedArtists = function getFeaturedArtists(artistsCount, collection, merchandisableArtists) {
  if (collection.query.artist_ids.length > 0) {
    return (0, _filter2.default)(merchandisableArtists, function (artist) {
      return collection.query.artist_ids.includes(artist._id);
    });
  }

  if (merchandisableArtists.length > 0) {
    var filteredArtistsIds = merchandisableArtists.filter(function (artist) {
      return !collection.featuredArtistExclusionIds.includes(artist._id);
    });
    return (0, _take2.default)(filteredArtistsIds, artistsCount);
  }
};

exports.getFeaturedArtists = getFeaturedArtists;

var featuredArtistsEntityCollection = function featuredArtistsEntityCollection(artists, mediator, user) {
  return artists.map(function (artist, index) {
    var hasArtistMetaData = artist.nationality && artist.birthday;
    return _react.default.createElement(_palette.Box, {
      width: ["100%", "33%", "33%", "25%"],
      key: index,
      pb: 20
    }, _react.default.createElement(_palette.EntityHeader, {
      imageUrl: artist.imageUrl,
      name: artist.name,
      meta: hasArtistMetaData ? "".concat(artist.nationality, ", b. ").concat(artist.birthday) : undefined,
      href: "/artist/".concat(artist.id),
      FollowButton: _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
        artist: artist,
        user: user,
        trackingData: {
          modelName: _Analytics.AnalyticsSchema.OwnerType.Artist,
          context_module: _Analytics.AnalyticsSchema.ContextModule.CollectionDescription,
          entity_id: artist._id,
          entity_slug: artist.id
        },
        onOpenAuthModal: function onOpenAuthModal() {
          return handleOpenAuth(mediator, artist);
        },
        render: function render(_ref) {
          var is_followed = _ref.is_followed;
          return _react.default.createElement(_palette.Sans, {
            size: "2",
            weight: "medium",
            color: "black",
            style: {
              cursor: "pointer",
              textDecoration: "underline"
            }
          }, is_followed ? "Following" : "Follow");
        }
      })
    }));
  });
};

exports.featuredArtistsEntityCollection = featuredArtistsEntityCollection;
var maxChars = {
  xs: 350,
  sm: 730,
  md: 670,
  lg: 660,
  xl: 820
};
var imageWidthSizes = {
  xs: 320,
  sm: 688,
  md: 820,
  lg: 944,
  xl: 1112
};
var imageHeightSizes = {
  xs: 160,
  sm: 250
};
var defaultHeaderImageHeight = {
  xs: 140,
  sm: 140,
  md: 220,
  lg: 220,
  xl: 220
};

var CollectionHeader = function CollectionHeader(_ref2) {
  var artworks = _ref2.artworks,
      collection = _ref2.collection;

  var _useSystemContext = (0, _Artsy.useSystemContext)(),
      user = _useSystemContext.user,
      mediator = _useSystemContext.mediator;

  var hasMultipleArtists = artworks.merchandisable_artists && artworks.merchandisable_artists.length > 1;

  var htmlUnsafeDescription = collection.description && _react.default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: collection.description
    }
  });

  return _react.default.createElement(_Responsive.Responsive, null, function (_ref3) {
    var xs = _ref3.xs,
        sm = _ref3.sm,
        md = _ref3.md,
        lg = _ref3.lg;
    var size = xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : "xl";
    var imageWidth = imageWidthSizes[size];
    var smallerScreen = xs || sm;
    var imageHeight = smallerScreen ? imageHeightSizes.xs : imageHeightSizes.sm;
    var chars = maxChars[size];
    var categoryTarget = "/collections#".concat((0, _underscore.slugify)(collection.category));
    var artistsCount = xs ? 9 : 12;
    var featuredArtists = featuredArtistsEntityCollection(getFeaturedArtists(artistsCount, collection, artworks.merchandisable_artists), mediator, user);
    var resizedHeaderImage = collection.headerImage && (0, _resizer.resize)(collection.headerImage, {
      width: imageWidth * (xs ? 2 : 1),
      height: imageHeight * (xs ? 2 : 1),
      quality: 80,
      convert_to: "jpg"
    });
    return _react.default.createElement("header", null, _react.default.createElement(_palette.Flex, {
      flexDirection: "column"
    }, _react.default.createElement(_palette.Box, {
      mt: [0, "-12px"]
    }, resizedHeaderImage ? _react.default.createElement(CollectionSingleImageHeader, {
      position: ["relative", "absolute"],
      left: ["auto", 0],
      width: ["auto", 1],
      p: 2,
      mt: 0,
      mb: 3,
      headerImageUrl: resizedHeaderImage,
      height: imageHeight,
      key: "singleImageHeader"
    }, _react.default.createElement(Overlay, null), collection.credit && _react.default.createElement(ImageCaption, {
      dangerouslySetInnerHTML: {
        __html: collection.credit
      }
    })) : _react.default.createElement(_DefaultHeader.CollectionDefaultHeaderFragmentContainer, {
      headerArtworks: artworks,
      defaultHeaderImageHeight: defaultHeaderImageHeight[size],
      collection_id: collection.id,
      collection_slug: collection.slug,
      key: collection.slug
    }), _react.default.createElement(MetaContainer, {
      mb: 2,
      mt: [0, imageHeightSizes.xs + (0, _palette.space)(3), imageHeightSizes.sm + (0, _palette.space)(3)]
    }, _react.default.createElement(BreadcrumbContainer, {
      size: ["2", "3"],
      mt: [2, 0]
    }, _react.default.createElement(_found.Link, {
      to: "/collect"
    }, "All works"), " /", " ", _react.default.createElement(_found.Link, {
      to: categoryTarget
    }, collection.category)), _react.default.createElement(_palette.Spacer, {
      mt: 1
    }), _react.default.createElement(_palette.Serif, {
      size: ["6", "10"],
      element: "h1"
    }, collection.title)), _react.default.createElement(_palette.Grid, null, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
      sm: "12",
      md: "8"
    }, _react.default.createElement(_palette.Flex, null, _react.default.createElement(ExtendedSerif, {
      size: "3"
    }, smallerScreen ? _react.default.createElement(_palette.ReadMore, {
      maxChars: chars,
      content: htmlUnsafeDescription || ""
    }) : htmlUnsafeDescription, collection.description && _react.default.createElement(_palette.Spacer, {
      mt: 2
    })))), _react.default.createElement(_palette.Col, {
      sm: 12,
      md: 12
    }, featuredArtists && hasMultipleArtists && _react.default.createElement(_FeaturedArtists.FeaturedArtists, {
      breakpointSize: size,
      featuredArtists: featuredArtists,
      hasMultipleArtists: hasMultipleArtists
    })))), _react.default.createElement(_palette.Spacer, {
      mb: 1
    }))), _react.default.createElement(_palette.Spacer, {
      mb: 2
    }));
  });
};

exports.CollectionHeader = CollectionHeader;
var CollectionSingleImageHeader = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Header__CollectionSingleImageHeader",
  componentId: "sc-1w2noon-0"
})(["position:relative;background:", ";height:", "px;background-image:url(", ");background-size:cover;background-position:center;", ";"], (0, _palette.color)("black30"), function (props) {
  return props.height;
}, function (props) {
  return props.headerImageUrl;
}, _palette.media.xs(_templateObject()));

var Overlay = _styledComponents.default.div.withConfig({
  displayName: "Header__Overlay",
  componentId: "sc-1w2noon-1"
})(["position:absolute;width:100%;height:100%;top:0;left:0;background-image:linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0.25) );z-index:0;"]);

exports.Overlay = Overlay;
var MetaContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Header__MetaContainer",
  componentId: "sc-1w2noon-2"
})(["position:relative;z-index:1;"]);
var BreadcrumbContainer = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "Header__BreadcrumbContainer",
  componentId: "sc-1w2noon-3"
})(["a{text-decoration:none;}"]);
var ImageCaption = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "Header__ImageCaption",
  componentId: "sc-1w2noon-4"
})(["", ";position:absolute;bottom:10px;left:20px;right:20px;text-align:right;color:", ";z-index:7;text-shadow:0 0 15px rgba(0,0,0,0.25);"], (0, _Fonts.unica)("s12"), (0, _palette.color)("white100"));
var ExtendedSerif = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "Header__ExtendedSerif",
  componentId: "sc-1w2noon-5"
})(["div span{span p{display:inline;}div p{display:inline;", ";}}"], (0, _Fonts.unica)("s12"));
var CollectionFilterFragmentContainer = (0, _reactRelay.createFragmentContainer)(CollectionHeader, {
  artworks: function artworks() {
    var node = require("../../../../../../__generated__/Header_artworks.graphql");

    if (node.hash && node.hash !== "9f9af55c7e48a35977a2d4c5fa50c4e6") {
      console.error("The definition of 'Header_artworks' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../../__generated__/Header_artworks.graphql");
  }
});
exports.CollectionFilterFragmentContainer = CollectionFilterFragmentContainer;
//# sourceMappingURL=index.js.map