"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarAuctionPartnerInfoFragmentContainer = exports.ArtworkSidebarAuctionPartnerInfo = void 0;

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

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../../Artsy");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

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

var ArtworkSidebarAuctionPartnerInfo = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function () {
  return {
    context_module: Schema.ContextModule.Sidebar,
    action_type: Schema.ActionType.Click,
    subject: Schema.Subject.AuctionBuyerPremium,
    type: Schema.Type.Link
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarAuctionPartnerInfo, _React$Component);

  function ArtworkSidebarAuctionPartnerInfo() {
    _classCallCheck(this, ArtworkSidebarAuctionPartnerInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkSidebarAuctionPartnerInfo).apply(this, arguments));
  }

  _createClass(ArtworkSidebarAuctionPartnerInfo, [{
    key: "onClickBuyerPremium",
    value: function onClickBuyerPremium(mediator) {
      mediator && mediator.trigger && mediator.trigger("openAuctionBuyerPremium", {
        auctionId: this.props.artwork.sale._id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$artwork = this.props.artwork,
          partner = _this$props$artwork.partner,
          sale_artwork = _this$props$artwork.sale_artwork,
          sale = _this$props$artwork.sale;

      if (sale.is_closed) {
        return null;
      }

      return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
        var mediator = _ref.mediator;
        return _react.default.createElement(_palette.Box, {
          pb: 3
        }, partner && _react.default.createElement(_palette.Serif, {
          size: "2",
          weight: "semibold",
          color: "black100"
        }, partner.name), sale_artwork && sale_artwork.estimate && _react.default.createElement(_palette.Serif, {
          size: "2",
          color: "black60"
        }, "Estimated value: ", sale_artwork.estimate), sale && sale.is_with_buyers_premium && _react.default.createElement(_palette.Serif, {
          size: "2",
          color: "black60"
        }, "This work has a", " ", _react.default.createElement(_palette.Link, {
          onClick: _this.onClickBuyerPremium.bind(_this, mediator)
        }, "buyer's premium"), "."));
      });
    }
  }]);

  return ArtworkSidebarAuctionPartnerInfo;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "onClickBuyerPremium", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickBuyerPremium"), _class2.prototype)), _class2)) || _class);
exports.ArtworkSidebarAuctionPartnerInfo = ArtworkSidebarAuctionPartnerInfo;
var ArtworkSidebarAuctionPartnerInfoFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarAuctionPartnerInfo, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebarAuctionPartnerInfo_artwork.graphql");

    if (node.hash && node.hash !== "c6a39c92e2e559c89b1e7b31adf242a8") {
      console.error("The definition of 'ArtworkSidebarAuctionPartnerInfo_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarAuctionPartnerInfo_artwork.graphql");
  }
});
exports.ArtworkSidebarAuctionPartnerInfoFragmentContainer = ArtworkSidebarAuctionPartnerInfoFragmentContainer;
//# sourceMappingURL=ArtworkSidebarAuctionPartnerInfo.js.map