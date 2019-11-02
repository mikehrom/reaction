"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkSidebarBidActionFragmentContainer = exports.ArtworkSidebarBidAction = void 0;

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

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.filter");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _Artsy = require("../../../../Artsy");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _dec, _dec2, _dec3, _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var ArtworkSidebarBidAction = (_dec = (0, _reactTracking.default)(), _dec2 = (0, _reactTracking.default)(function (props) {
  return {
    artwork_slug: props.artwork.id,
    products: [{
      product_id: props.artwork._id,
      quantity: 1,
      price: props.artwork.myLotStanding && props.artwork.myLotStanding[0] && props.artwork.myLotStanding[0].most_recent_bid.max_bid.cents / 100
    }],
    auction_slug: props.artwork.sale.id,
    context_page: Schema.PageName.ArtworkPage,
    action_type: Schema.ActionType.ClickedBid
  };
}), _dec3 = (0, _reactTracking.default)({
  type: Schema.Type.Button,
  flow: Schema.Flow.Auctions,
  subject: Schema.Subject.EnterLiveAuction,
  context_module: Schema.ContextModule.Sidebar,
  action_type: Schema.ActionType.Click
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarBidAction, _React$Component);

  function ArtworkSidebarBidAction() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkSidebarBidAction);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkSidebarBidAction)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedMaxBidCents: null
    });

    _defineProperty(_assertThisInitialized(_this), "setMaxBid", function (newVal) {
      _this.setState({
        selectedMaxBidCents: newVal
      });
    });

    _defineProperty(_assertThisInitialized(_this), "redirectToRegister", function () {
      var sale = _this.props.artwork.sale;
      window.location.href = "".concat(_sharify.data.APP_URL, "/auction-registration/").concat(sale.id);
    });

    return _this;
  }

  _createClass(ArtworkSidebarBidAction, [{
    key: "redirectToBid",
    value: function redirectToBid(firstIncrement) {
      var _this$props$artwork = this.props.artwork,
          id = _this$props$artwork.id,
          sale = _this$props$artwork.sale;
      var bid = this.state.selectedMaxBidCents || firstIncrement;
      window.location.href = "".concat(_sharify.data.APP_URL, "/auction/").concat(sale.id, "/bid/").concat(id, "?bid=").concat(bid);
    }
  }, {
    key: "redirectToLiveBidding",
    value: function redirectToLiveBidding(user) {
      var id = this.props.artwork.sale.id;
      var liveUrl = "".concat(_sharify.data.PREDICTION_URL, "/").concat(id);

      if (user) {
        window.location.href = "".concat(liveUrl, "/login");
      } else {
        window.location.href = liveUrl;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var artwork = this.props.artwork;
      if (artwork.sale.is_closed) return null;
      var registrationAttempted = !!artwork.sale.registrationStatus;
      var registeredToBid = registrationAttempted && artwork.sale.registrationStatus.qualified_for_bidding;
      /**
       * NOTE: This is making an incorrect assumption that there could only ever
       *       be 1 live sale with this work. When we run into that case, there is
       *       likely design work to be done too, so we can adjust this then.
       */

      var myLotStanding = artwork.myLotStanding && artwork.myLotStanding[0];
      var hasMyBids = !!(myLotStanding && myLotStanding.most_recent_bid);

      if (artwork.sale.is_preview) {
        return _react.default.createElement(_react.default.Fragment, null, !registrationAttempted && _react.default.createElement(_palette.Button, {
          width: "100%",
          size: "large",
          mt: 1,
          onClick: function onClick() {
            return _this2.redirectToRegister();
          }
        }, "Register to bid"), registrationAttempted && !registeredToBid && _react.default.createElement(_palette.Button, {
          width: "100%",
          size: "large",
          mt: 1,
          disabled: true
        }, "Registration pending"), registrationAttempted && registeredToBid && _react.default.createElement(_palette.Button, {
          width: "100%",
          size: "large",
          mt: 1,
          disabled: true
        }, "Registration complete"));
      }

      if (artwork.sale.is_live_open) {
        return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
          var user = _ref.user;
          return _react.default.createElement(_palette.Box, null, artwork.sale.is_registration_closed && !registeredToBid && _react.default.createElement(_palette.Sans, {
            size: "2",
            color: "black60",
            pb: 1,
            textAlign: "center"
          }, "Registration closed"), _react.default.createElement(_palette.Button, {
            width: "100%",
            size: "large",
            onClick: function onClick() {
              return _this2.redirectToLiveBidding(user);
            }
          }, artwork.sale.is_registration_closed && !registeredToBid ? "Watch live bidding" : "Enter live bidding"));
        });
      }

      if (artwork.sale.is_open) {
        if (registrationAttempted && !registeredToBid) {
          return _react.default.createElement(_palette.Button, {
            width: "100%",
            size: "large",
            disabled: true
          }, "Registration pending");
        }

        if (artwork.sale.is_registration_closed && !registeredToBid) {
          return _react.default.createElement(_palette.Button, {
            width: "100%",
            size: "large",
            disabled: true
          }, "Registration closed");
        }

        var myLastMaxBid = hasMyBids && myLotStanding.most_recent_bid.max_bid.cents;
        var increments = artwork.sale_artwork.increments.filter(function (increment) {
          return increment.cents > (myLastMaxBid || 0);
        });
        var firstIncrement = increments[0];
        var selectOptions = increments.map(function (increment) {
          return {
            value: increment.cents.toString(),
            text: increment.display
          };
        });
        return _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Separator, {
          mb: 2
        }), _react.default.createElement(_palette.Flex, {
          width: "100%",
          flexDirection: "row"
        }, _react.default.createElement(_palette.Serif, {
          size: "3t",
          color: "black100",
          mr: 1
        }, "Place max bid"), _react.default.createElement(_palette.Tooltip, {
          content: "Set the maximum amount you would like Artsy to bid up to on your behalf"
        }, _react.default.createElement(_palette.HelpIcon, null))), _react.default.createElement(_palette.LargeSelect, {
          options: selectOptions,
          onSelect: this.setMaxBid
        }), _react.default.createElement(_palette.Spacer, {
          mb: 2
        }), _react.default.createElement(_palette.Button, {
          width: "100%",
          size: "large",
          onClick: function onClick() {
            return _this2.redirectToBid(firstIncrement.cents);
          }
        }, hasMyBids ? "Increase max bid" : "Bid"));
      }
    }
  }]);

  return ArtworkSidebarBidAction;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "redirectToBid", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "redirectToBid"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "redirectToLiveBidding", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "redirectToLiveBidding"), _class2.prototype)), _class2)) || _class);
exports.ArtworkSidebarBidAction = ArtworkSidebarBidAction;
var ArtworkSidebarBidActionFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarBidAction, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebarBidAction_artwork.graphql");

    if (node.hash && node.hash !== "7362bd5c91f910a9d4d415a72114bbbb") {
      console.error("The definition of 'ArtworkSidebarBidAction_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarBidAction_artwork.graphql");
  }
});
exports.ArtworkSidebarBidActionFragmentContainer = ArtworkSidebarBidActionFragmentContainer;
//# sourceMappingURL=ArtworkSidebarBidAction.js.map