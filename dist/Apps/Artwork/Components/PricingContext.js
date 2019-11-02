"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PricingContextFragmentContainer = exports.PricingContext = void 0;

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

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.bind");

var _once2 = _interopRequireDefault(require("lodash/once"));

var _palette = require("@artsy/palette");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _reactWaypoint = _interopRequireDefault(require("react-waypoint"));

var _Events = _interopRequireDefault(require("../../../Utils/Events"));

var _createCollectUrl = require("./../Utils/createCollectUrl");

var _PricingContextModal = require("./PricingContextModal");

var _dec, _dec2, _dec3, _dec4, _class, _class2;

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var PricingContext = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.PriceContext
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec2 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Impression,
  flow: Schema.Flow.ArtworkPriceContext,
  subject: Schema.Subject.HistogramBar,
  type: Schema.Type.Chart
}), _dec3 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Hover,
  flow: Schema.Flow.ArtworkPriceContext,
  subject: Schema.Subject.HistogramBar,
  type: Schema.Type.Chart
}), _dec4 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Click,
  flow: Schema.Flow.ArtworkPriceContext,
  subject: Schema.Subject.BrowseWorks,
  type: Schema.Type.Chart
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PricingContext, _React$Component);

  function PricingContext() {
    _classCallCheck(this, PricingContext);

    return _possibleConstructorReturn(this, _getPrototypeOf(PricingContext).apply(this, arguments));
  }

  _createClass(PricingContext, [{
    key: "trackImpression",
    value: function trackImpression() {// noop
    }
  }, {
    key: "barchartHover",
    value: function barchartHover() {// I'm just for tracking!
    }
  }, {
    key: "collectPageLinkClick",
    value: function collectPageLinkClick(_ref) {
      var dimension = _ref.dimension,
          category = _ref.category,
          artistId = _ref.artistId;
      var url = (0, _createCollectUrl.createCollectUrl)({
        dimension: dimension,
        category: category,
        artistId: artistId
      });

      if (typeof window !== "undefined") {
        window.open(url);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var artwork = this.props.artwork;

      if (!artwork.pricingContext) {
        return null;
      }

      var priceCents = artwork.priceCents.max || artwork.priceCents.min;
      var artworkFallsBeforeFirstBin = priceCents < artwork.pricingContext.bins[0].minPriceCents;
      var artworkFallsAfterLastBin = priceCents >= artwork.pricingContext.bins[artwork.pricingContext.bins.length - 1].maxPriceCents;
      var artistId = artwork.artists[0].id;
      return _react.default.createElement(_palette.BorderBox, {
        mb: 2,
        flexDirection: "column"
      }, _react.default.createElement(_reactWaypoint.default, {
        onEnter: (0, _once2.default)(this.trackImpression.bind(this))
      }), _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.Sans, {
        size: "2",
        weight: "medium"
      }, artwork.pricingContext.appliedFiltersDisplay), _react.default.createElement(_PricingContextModal.PricingContextModal, null)), _react.default.createElement(_palette.Link, {
        onClick: this.collectPageLinkClick.bind(this, {
          dimension: artwork.pricingContext.appliedFilters.dimension,
          category: artwork.category,
          artistId: artistId
        }),
        color: "black60"
      }, _react.default.createElement(_palette.Sans, {
        size: "2"
      }, "Browse works in this category")), _react.default.createElement(_palette.Spacer, {
        mb: [2, 3]
      }), _react.default.createElement(_palette.BarChart // TODO: use artwork's currency
      , {
        minLabel: "$0",
        maxLabel: artwork.pricingContext.bins[artwork.pricingContext.bins.length - 1].maxPrice + "+",
        bars: artwork.pricingContext.bins.map(function (bin, index) {
          var isFirstBin = index === 0;
          var isLastBin = index === artwork.pricingContext.bins.length - 1;
          var title = isLastBin ? "".concat(bin.minPrice, "+") : // TODO: use artwork's currency
          "".concat(isFirstBin ? "$0" : bin.minPrice, "\u2013").concat(bin.maxPrice);
          var artworkFallsInThisBin = isFirstBin && artworkFallsBeforeFirstBin || isLastBin && artworkFallsAfterLastBin || priceCents >= bin.minPriceCents && priceCents < bin.maxPriceCents;
          var binValue = artworkFallsInThisBin && bin.numArtworks === 0 ? 1 : bin.numArtworks;
          var labelSuffix = binValue === 1 ? " work" : " works";
          return {
            value: binValue,
            label: {
              title: title,
              description: binValue + labelSuffix
            },
            onHover: _this.barchartHover.bind(_this),
            highlightLabel: artworkFallsInThisBin ? {
              title: title,
              description: "This work"
            } : undefined
          };
        })
      }));
    }
  }]);

  return PricingContext;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackImpression", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackImpression"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "barchartHover", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "barchartHover"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "collectPageLinkClick", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "collectPageLinkClick"), _class2.prototype)), _class2)) || _class);
exports.PricingContext = PricingContext;
var PricingContextFragmentContainer = (0, _reactRelay.createFragmentContainer)(PricingContext, {
  artwork: function artwork() {
    var node = require("../../../__generated__/PricingContext_artwork.graphql");

    if (node.hash && node.hash !== "0c7039a17ab5c85339f54ad2d644ca83") {
      console.error("The definition of 'PricingContext_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/PricingContext_artwork.graphql");
  }
});
exports.PricingContextFragmentContainer = PricingContextFragmentContainer;
PricingContextFragmentContainer.displayName = "PricingContext";
//# sourceMappingURL=PricingContext.js.map