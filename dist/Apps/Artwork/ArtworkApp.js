"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkAppFragmentContainer = exports.ArtworkApp = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactLazyLoadImageComponent = require("react-lazy-load-image-component");

var _reactRelay = require("react-relay");

var _AppContainer = require("../Components/AppContainer");

var _HorizontalPadding = require("../Components/HorizontalPadding");

var _ArtistInfo = require("./Components/ArtistInfo");

var _ArtworkBanner = require("./Components/ArtworkBanner");

var _ArtworkDetails = require("./Components/ArtworkDetails");

var _ArtworkImageBrowser = require("./Components/ArtworkImageBrowser");

var _ArtworkMeta = require("./Components/ArtworkMeta");

var _ArtworkRelatedArtists = require("./Components/ArtworkRelatedArtists");

var _ArtworkSidebar = require("./Components/ArtworkSidebar");

var _OtherWorks = require("./Components/OtherWorks");

var _PricingContext = require("./Components/PricingContext");

var _Artsy = require("../../Artsy");

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _v = require("../../Components/v2");

var _get = require("../../Utils/get");

var _Responsive = require("../../Utils/Responsive");

var _dec, _class;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ArtworkApp = (_dec = (0, _Analytics.track)(), _dec(_class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkApp, _React$Component);

  function ArtworkApp() {
    _classCallCheck(this, ArtworkApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkApp).apply(this, arguments));
  }

  _createClass(ArtworkApp, [{
    key: "componentDidMount",
    // TODO: Move the below tracking, which consists of:
    //
    //  * a custom `track` event when the artwork is acquireable or in an auction
    //  * a custom pageview event including extra metadata
    //
    // into an appropriate wrapper HOC.
    value: function componentDidMount() {
      this.trackPageview();
      this.trackProductView();
    }
  }, {
    key: "trackProductView",
    value: function trackProductView() {
      var _this$props = this.props,
          tracking = _this$props.tracking,
          _this$props$artwork = _this$props.artwork,
          is_acquireable = _this$props$artwork.is_acquireable,
          is_in_auction = _this$props$artwork.is_in_auction,
          _id = _this$props$artwork._id;

      if (is_acquireable || is_in_auction) {
        var trackingData = {
          action_type: Schema.ActionType.ViewedProduct,
          product_id: _id
        };
        if (tracking) tracking.trackEvent(trackingData);
      }
    }
  }, {
    key: "enableIntercomForBuyers",
    value: function enableIntercomForBuyers(mediator) {
      var _this$props$artwork2 = this.props.artwork,
          is_offerable = _this$props$artwork2.is_offerable,
          is_acquireable = _this$props$artwork2.is_acquireable;
      mediator && mediator.trigger && mediator.trigger("enableIntercomForBuyers", {
        is_offerable: is_offerable,
        is_acquireable: is_acquireable
      });
    }
  }, {
    key: "trackPageview",
    value: function trackPageview() {
      var _this$props$artwork3 = this.props.artwork,
          price = _this$props$artwork3.price,
          availability = _this$props$artwork3.availability,
          is_offerable = _this$props$artwork3.is_offerable,
          is_acquireable = _this$props$artwork3.is_acquireable; // Pageview

      var properties = {
        path: window.location.pathname,
        acquireable: is_acquireable,
        offerable: is_offerable,
        availability: availability,
        price_listed: !!price
      };

      if (typeof window.analytics !== "undefined") {
        window.analytics.page(properties, {
          integrations: {
            Marketo: false
          }
        });
      }
    }
  }, {
    key: "renderArtists",
    value: function renderArtists() {
      var artists = (0, _get.get)(this.props, function (p) {
        return p.artwork.artists;
      });

      if (!artists.length) {
        return null;
      }

      return _react.default.createElement(_react.default.Fragment, null, artists.map(function (artist, index) {
        var addSpacer = artists.length > 1 && index < artists.length - 1;
        return _react.default.createElement(_react.default.Fragment, {
          key: index
        }, _react.default.createElement(_palette.Row, {
          key: artist.id
        }, _react.default.createElement(_palette.Col, null, _react.default.createElement(_ArtistInfo.ArtistInfoFragmentContainer, {
          artist: artist
        }))), addSpacer && _react.default.createElement(_palette.Spacer, {
          mb: 2
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var artwork = this.props.artwork;
      return _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_ArtworkMeta.ArtworkMetaFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
        sm: 8
      }, _react.default.createElement(_ArtworkBanner.ArtworkBannerFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_palette.Spacer, {
        mb: 2
      }))), _react.default.createElement(_Responsive.Media, {
        at: "xs"
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_ArtworkImageBrowser.ArtworkImageBrowserFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_ArtworkSidebar.ArtworkSidebarFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_ArtworkDetails.ArtworkDetailsFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_PricingContext.PricingContextFragmentContainer, {
        artwork: artwork
      }), this.renderArtists()))), _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
        sm: 8
      }, _react.default.createElement(_palette.Box, {
        pr: 4
      }, _react.default.createElement(_ArtworkImageBrowser.ArtworkImageBrowserFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_ArtworkDetails.ArtworkDetailsFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_PricingContext.PricingContextFragmentContainer, {
        artwork: artwork
      }), this.renderArtists())), _react.default.createElement(_palette.Col, {
        sm: 4
      }, _react.default.createElement(_ArtworkSidebar.ArtworkSidebarFragmentContainer, {
        artwork: artwork
      })))), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Box, {
        mt: 6
      }, _react.default.createElement(_OtherWorks.OtherWorksFragmentContainer, {
        artwork: artwork
      })))), artwork.artist && _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_ArtworkRelatedArtists.ArtworkRelatedArtistsPaginationContainer, {
        artwork: artwork
      }))), typeof window !== "undefined" && _react.default.createElement(_reactLazyLoadImageComponent.LazyLoadComponent, {
        threshold: 1000
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_v.RecentlyViewedQueryRenderer, null)))), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Separator, {
        mt: 6,
        mb: 3
      }), _react.default.createElement(_v.Footer, null))), _react.default.createElement("div", {
        id: "lightbox-container"
      }), _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
        var mediator = _ref.mediator;
        return _react.default.createElement(_react.default.Fragment, null, _this.enableIntercomForBuyers(mediator));
      })));
    }
  }]);

  return ArtworkApp;
}(_react.default.Component)) || _class);
exports.ArtworkApp = ArtworkApp;
var ArtworkAppFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkApp, {
  artwork: function artwork() {
    var node = require("../../__generated__/ArtworkApp_artwork.graphql");

    if (node.hash && node.hash !== "5097a7c9d398cce1abd797fc91661166") {
      console.error("The definition of 'ArtworkApp_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/ArtworkApp_artwork.graphql");
  }
});
exports.ArtworkAppFragmentContainer = ArtworkAppFragmentContainer;
//# sourceMappingURL=ArtworkApp.js.map