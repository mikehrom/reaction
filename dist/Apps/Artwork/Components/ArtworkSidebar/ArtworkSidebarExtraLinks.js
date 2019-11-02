"use strict";

require("core-js/modules/es6.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarExtraLinksFragmentContainer = exports.ArtworkSidebarExtraLinks = void 0;

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

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../../Artsy");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var Container = function Container(_ref) {
  var children = _ref.children;
  return _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60"
  }, children);
};

var ArtworkSidebarExtraLinksContainer = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.Sidebar
}), _dec2 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.AuctionConditionsOfSale,
    type: Schema.Type.Link
  };
}), _dec3 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.AuctionFAQ,
    type: Schema.Type.Link
  };
}), _dec4 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.BNMOReadFAQ,
    type: Schema.Type.Link
  };
}), _dec5 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.CollectorFAQ,
    type: Schema.Type.Link
  };
}), _dec6 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.AuctionAskSpecialist,
    type: Schema.Type.Link
  };
}), _dec7 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.BNMOAskSpecialist,
    type: Schema.Type.Link
  };
}), _dec8 = (0, _Analytics.track)(function () {
  return {
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.ConsignLearnMore,
    type: Schema.Type.Link
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarExtraLinksContainer, _React$Component);

  function ArtworkSidebarExtraLinksContainer() {
    _classCallCheck(this, ArtworkSidebarExtraLinksContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkSidebarExtraLinksContainer).apply(this, arguments));
  }

  _createClass(ArtworkSidebarExtraLinksContainer, [{
    key: "onClickConditionsOfSale",
    value: function onClickConditionsOfSale() {
      window.open(_sharify.data.APP_URL + "/conditions-of-sale", "_blank");
    }
  }, {
    key: "onClickAuctionFAQ",
    value: function onClickAuctionFAQ() {
      this.props.mediator && this.props.mediator.trigger && this.props.mediator.trigger("openAuctionFAQModal");
    }
  }, {
    key: "onClickBuyNowFAQ",
    value: function onClickBuyNowFAQ() {
      window.open(_sharify.data.APP_URL + "/buy-now-feature-faq", "_blank");
    }
  }, {
    key: "onClickCollectorFAQ",
    value: function onClickCollectorFAQ() {
      this.props.mediator && this.props.mediator.trigger && this.props.mediator.trigger("openCollectorFAQModal");
    }
  }, {
    key: "onClickAuctionAskSpecialist",
    value: function onClickAuctionAskSpecialist() {
      this.props.mediator && this.props.mediator.trigger && this.props.mediator.trigger("openAuctionAskSpecialistModal", {
        artworkId: this.props.artwork._id
      });
    }
  }, {
    key: "onClickBuyNowAskSpecialist",
    value: function onClickBuyNowAskSpecialist() {
      this.props.mediator && this.props.mediator.trigger && this.props.mediator.trigger("openBuyNowAskSpecialistModal", {
        artworkId: this.props.artwork._id
      });
    }
  }, {
    key: "onClickConsign",
    value: function onClickConsign() {
      window.open(_sharify.data.APP_URL + "/consign", "_blank");
    }
  }, {
    key: "renderAuctionTerms",
    value: function renderAuctionTerms() {
      return _react.default.createElement(Container, null, "By placing your bid you agree to Artsy's", " ", _react.default.createElement(_palette.Link, {
        onClick: this.onClickConditionsOfSale.bind(this)
      }, "Conditions of Sale"), ".", _react.default.createElement(_palette.Spacer, {
        mb: 1
      }));
    }
  }, {
    key: "renderAuctionQuestionsLine",
    value: function renderAuctionQuestionsLine() {
      return _react.default.createElement(Container, null, "Have a question? Read our", " ", _react.default.createElement(_palette.Link, {
        onClick: this.onClickAuctionFAQ.bind(this)
      }, "auction FAQs"), " or", " ", _react.default.createElement(_palette.Link, {
        onClick: this.onClickAuctionAskSpecialist.bind(this)
      }, "ask a specialist"), ".");
    }
  }, {
    key: "renderForSaleQuestionsLine",
    value: function renderForSaleQuestionsLine() {
      var _this$props$artwork = this.props.artwork,
          is_acquireable = _this$props$artwork.is_acquireable,
          is_inquireable = _this$props$artwork.is_inquireable;
      if (is_acquireable) return _react.default.createElement(Container, null, "Have a question?", " ", _react.default.createElement(_palette.Link, {
        onClick: this.onClickBuyNowFAQ.bind(this)
      }, "Read our FAQ"), " ", "or", " ", _react.default.createElement(_palette.Link, {
        onClick: this.onClickBuyNowAskSpecialist.bind(this)
      }, "ask a specialist"), ".");
      if (is_inquireable) return _react.default.createElement(Container, null, "Have a question?", " ", _react.default.createElement(_palette.Link, {
        onClick: this.onClickCollectorFAQ.bind(this)
      }, "Read our FAQ"), ".");
    }
  }, {
    key: "renderConsignmentsLine",
    value: function renderConsignmentsLine(artistsCount) {
      return _react.default.createElement(Container, null, "Want to sell a work by", " ", artistsCount === 1 ? "this artist" : "these artists", "?", " ", _react.default.createElement(_palette.Link, {
        onClick: this.onClickConsign.bind(this)
      }, "Consign with Artsy"), ".");
    }
  }, {
    key: "render",
    value: function render() {
      var artwork = this.props.artwork;
      var consignableArtistsCount = artwork.artists.filter(function (artist) {
        return artist.is_consignable;
      }).length;
      var isInOpenAuction = artwork.is_in_auction && artwork.sale && !artwork.sale.is_closed;
      var renderQuestionsLine = artwork.is_for_sale || isInOpenAuction;
      if (!renderQuestionsLine && !!!consignableArtistsCount) return null;
      return _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Separator, {
        mb: 3
      }), isInOpenAuction && this.renderAuctionTerms(), renderQuestionsLine && (artwork.is_in_auction ? this.renderAuctionQuestionsLine() : this.renderForSaleQuestionsLine()), !!consignableArtistsCount && this.renderConsignmentsLine(consignableArtistsCount));
    }
  }]);

  return ArtworkSidebarExtraLinksContainer;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "onClickConditionsOfSale", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickConditionsOfSale"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onClickAuctionFAQ", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickAuctionFAQ"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onClickBuyNowFAQ", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickBuyNowFAQ"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onClickCollectorFAQ", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickCollectorFAQ"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onClickAuctionAskSpecialist", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickAuctionAskSpecialist"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onClickBuyNowAskSpecialist", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickBuyNowAskSpecialist"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onClickConsign", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickConsign"), _class2.prototype)), _class2)) || _class);

var ArtworkSidebarExtraLinks = function ArtworkSidebarExtraLinks(props) {
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      mediator = _useContext.mediator;

  return _react.default.createElement(ArtworkSidebarExtraLinksContainer, _extends({}, props, {
    mediator: mediator
  }));
};

exports.ArtworkSidebarExtraLinks = ArtworkSidebarExtraLinks;
var ArtworkSidebarExtraLinksFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarExtraLinks, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebarExtraLinks_artwork.graphql");

    if (node.hash && node.hash !== "7d2aba9e455ca0d2f3d1b195e0e6572d") {
      console.error("The definition of 'ArtworkSidebarExtraLinks_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarExtraLinks_artwork.graphql");
  }
});
exports.ArtworkSidebarExtraLinksFragmentContainer = ArtworkSidebarExtraLinksFragmentContainer;
//# sourceMappingURL=ArtworkSidebarExtraLinks.js.map