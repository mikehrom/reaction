"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverviewRouteFragmentContainer = exports.ArtistOverviewQuery = exports.OverviewRoute = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _ArtistCollectionsRail = require("../../Components/ArtistCollectionsRail");

var _MarketInsights = require("../../Components/MarketInsights/MarketInsights");

var _Genes = require("./Components/Genes");

var _Artsy = require("../../../../Artsy");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _v = require("../../../../Components/v2");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../../Utils/get");

var _ArtistArtworkFilter = require("./Components/ArtistArtworkFilter");

var _ArtistRecommendations = require("./Components/ArtistRecommendations");

var _CurrentEvent = require("./Components/CurrentEvent");

var _dec, _dec2, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var OverviewRoute = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props) {
  return {
    action_type: Schema.ActionType.Click,
    // TODO: Feel like these should become enums too
    subject: "Learn more about consignment",
    destination_path: props.artist.href
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OverviewRoute, _React$Component);

  function OverviewRoute() {
    _classCallCheck(this, OverviewRoute);

    return _possibleConstructorReturn(this, _getPrototypeOf(OverviewRoute).apply(this, arguments));
  }

  _createClass(OverviewRoute, [{
    key: "handleConsignClick",
    value: function handleConsignClick() {// no-op
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      if (!this.props) {
        return null;
      }

      var _this$props = this.props,
          artist = _this$props.artist,
          location = _this$props.location;
      var sidebarAggregations = artist.sidebarAggregations;
      var showArtistInsights = (0, _MarketInsights.hasSections)(this.props.artist) || artist.insights.length > 0;
      var showArtistBio = Boolean(artist.biography_blurb.text);
      var showCurrentEvent = Boolean(artist.currentEvent);
      var showConsignable = Boolean(artist.is_consignable);
      var hideMainOverviewSection = !showArtistInsights && !showArtistBio && !showCurrentEvent && !showConsignable; // TODO: Hide right column if missing current event. Waiting on feedback

      var colNum = 9; // artist.currentEvent ? 9 : 12

      var isClient = typeof window !== "undefined";
      var showRecommendations = isClient && (0, _get.get)(artist, function (a) {
        return a.related.artists.edges.length;
      }, 0) > 0;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, {
        sm: colNum
      }, _react.default.createElement(_react.default.Fragment, null, showArtistBio && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_v.ArtistBioFragmentContainer, {
        onReadMoreClicked: function onReadMoreClicked() {
          _this.setState({
            isReadMoreExpanded: true
          });
        },
        bio: artist
      })), _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 1
      }), _react.default.createElement(_Genes.GenesFragmentContainer, {
        artist: artist
      }), _react.default.createElement(_palette.Spacer, {
        mb: 1
      })), showConsignable && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 1
      }), _react.default.createElement(_palette.Sans, {
        size: "2",
        color: "black60"
      }, "Want to sell a work by this artist?", " ", _react.default.createElement("a", {
        href: "/consign",
        onClick: this.handleConsignClick.bind(this)
      }, "Consign with Artsy"), ".")), showArtistInsights && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 2
      }), _react.default.createElement(_v.SelectedCareerAchievementsFragmentContainer, {
        artist: artist
      })))), showCurrentEvent && _react.default.createElement(_palette.Col, {
        sm: 3
      }, _react.default.createElement(_palette.Box, {
        pl: 2
      }, _react.default.createElement(_CurrentEvent.CurrentEventFragmentContainer, {
        artist: artist
      })))), !hideMainOverviewSection && _react.default.createElement(_palette.Spacer, {
        mb: 4
      }), _react.default.createElement(_palette.Box, null, _react.default.createElement(_ArtistCollectionsRail.ArtistCollectionsRailContent, {
        artistID: artist._id
      })), _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement("span", {
        id: "jump--artistArtworkGrid"
      }), _react.default.createElement(_ArtistArtworkFilter.ArtistArtworkFilterRefetchContainer, {
        artist: artist,
        location: location,
        sidebarAggregations: sidebarAggregations
      }))), showRecommendations && _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_palette.Separator, {
        mt: 6,
        mb: 4
      }), _react.default.createElement(_ArtistRecommendations.ArtistRecommendationsQueryRenderer, {
        artistID: artist._id
      }))));
    }
  }]);

  return OverviewRoute;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "handleConsignClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleConsignClick"), _class2.prototype)), _class2)) || _class);
exports.OverviewRoute = OverviewRoute;

var ArtistOverviewQuery = function ArtistOverviewQuery() {
  var node = require("../../../../__generated__/OverviewQuery.graphql");

  if (node.hash && node.hash !== "4284a03ae51a540767bf761c570d23d4") {
    console.error("The definition of 'OverviewQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../../__generated__/OverviewQuery.graphql");
};

exports.ArtistOverviewQuery = ArtistOverviewQuery;
var OverviewRouteFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _Artsy.withSystemContext)(OverviewRoute), {
  artist: function artist() {
    var node = require("../../../../__generated__/Overview_artist.graphql");

    if (node.hash && node.hash !== "13e47b28110b3e96d655a0ac73b9024b") {
      console.error("The definition of 'Overview_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Overview_artist.graphql");
  }
});
exports.OverviewRouteFragmentContainer = OverviewRouteFragmentContainer;
//# sourceMappingURL=index.js.map