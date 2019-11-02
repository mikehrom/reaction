"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectedCareerAchievementsFragmentContainer = exports.SelectedCareerAchievements = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.regexp.replace");

var _palette = require("@artsy/palette");

var _MarketInsights = require("../../Apps/Artist/Components/MarketInsights/MarketInsights");

var _ArtistInsight = require("./ArtistInsight");

var _ArtistInsightsModal = require("./ArtistInsightsModal");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CATEGORIES = {
  "blue-chip": "Blue chip",
  "top-established": "Established",
  "top-emerging": "Emerging"
};
var CATEGORY_LABEL_MAP = {
  "blue-chip": "Represented by internationally reputable galleries.",
  "top-established": "Represented by industry leading galleries.",
  "top-emerging": "Represented by up-and-coming galleries."
};

var SelectedCareerAchievements =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectedCareerAchievements, _React$Component);

  function SelectedCareerAchievements() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectedCareerAchievements);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectedCareerAchievements)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showModal: false
    });

    return _this;
  }

  _createClass(SelectedCareerAchievements, [{
    key: "renderAuctionHighlight",
    value: function renderAuctionHighlight() {
      if (!this.props.artist.auctionResults || this.props.artist.auctionResults.edges.length < 1) {
        return null;
      }

      var topAuctionResult = this.props.artist.auctionResults.edges[0].node;
      var display = "".concat(topAuctionResult.price_realized.display, ", ").concat(topAuctionResult.organization, ", ").concat(topAuctionResult.sale_date);
      return _react.default.createElement(_ArtistInsight.ArtistInsight, {
        key: "HIGH_AUCTION",
        type: "HIGH_AUCTION",
        label: "High auction record",
        value: display
      });
    }
  }, {
    key: "renderGalleryRepresentation",
    value: function renderGalleryRepresentation() {
      var highlights = this.props.artist.highlights;
      var partners = highlights.partners;

      if (partners && partners.edges && partners.edges.length > 0) {
        var highCategory = (0, _MarketInsights.highestCategory)(partners.edges);
        var type = highCategory.toUpperCase().replace("-", "_");
        return _react.default.createElement(_ArtistInsight.ArtistInsight, {
          key: type,
          type: type,
          label: CATEGORIES[highCategory],
          value: CATEGORY_LABEL_MAP[highCategory]
        });
      }
    }
  }, {
    key: "renderInsight",
    value: function renderInsight(insight) {
      return _react.default.createElement(_ArtistInsight.ArtistInsight, {
        key: insight.type,
        type: insight.type,
        label: insight.label,
        entities: insight.entities
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!(0, _MarketInsights.hasSections)(this.props.artist) && (!this.props.artist.insights || this.props.artist.insights.length === 0)) {
        return null;
      }

      var Container = function Container(props) {
        var Wrap;

        if (props.Container) {
          Wrap = _this2.props.Container;
        } else if (_this2.props.border) {
          Wrap = _palette.BorderBox;
        } else {
          Wrap = _palette.Box;
        }

        return _react.default.createElement(Wrap, props);
      };

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Container, null, _react.default.createElement(_palette.Flex, {
        flexDirection: "column",
        alignItems: "left",
        width: "100%"
      }, _react.default.createElement(_palette.Sans, {
        size: "2",
        weight: "medium"
      }, "Selected career achievements"), _react.default.createElement(_palette.Flex, {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }, this.renderGalleryRepresentation(), this.renderAuctionHighlight(), this.props.artist.insights.map(function (insight) {
        return _this2.renderInsight(insight);
      })))), _react.default.createElement(_ArtistInsightsModal.ArtistInsightsModal, null), this.props.children);
    }
  }]);

  return SelectedCareerAchievements;
}(_react.default.Component);

exports.SelectedCareerAchievements = SelectedCareerAchievements;

_defineProperty(SelectedCareerAchievements, "defaultProps", {
  border: true
});

var SelectedCareerAchievementsFragmentContainer = (0, _reactRelay.createFragmentContainer)(SelectedCareerAchievements, {
  artist: function artist() {
    var node = require("../../__generated__/SelectedCareerAchievements_artist.graphql");

    if (node.hash && node.hash !== "f44dcc8098ac4b19c54360eb88bc284f") {
      console.error("The definition of 'SelectedCareerAchievements_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/SelectedCareerAchievements_artist.graphql");
  }
});
exports.SelectedCareerAchievementsFragmentContainer = SelectedCareerAchievementsFragmentContainer;
//# sourceMappingURL=SelectedCareerAchievements.js.map