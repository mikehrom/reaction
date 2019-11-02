"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusFragmentContainer = exports.StatusRoute = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _HorizontalPadding = require("../../../Components/HorizontalPadding");

var _TransactionDetailsSummaryItem = require("../../Components/TransactionDetailsSummaryItem");

var _TwoColumnLayout = require("../../Components/TwoColumnLayout");

var _trackPageViewWrapper = require("../../Utils/trackPageViewWrapper");

var _react = _interopRequireWildcard(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../../../Utils/get");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _ArtworkSummaryItem = require("../../Components/ArtworkSummaryItem");

var _CreditCardSummaryItem = require("../../Components/CreditCardSummaryItem");

var _ShippingSummaryItem = require("../../Components/ShippingSummaryItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    &&& {\n      border-bottom: none;\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    &&& {\n      border-top-left-radius: 0;\n      border-top-right-radius: 0;\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var logger = (0, _logger.default)("Order/Routes/Status/index.tsx");

var StatusRoute =
/*#__PURE__*/
function (_Component) {
  _inherits(StatusRoute, _Component);

  function StatusRoute() {
    _classCallCheck(this, StatusRoute);

    return _possibleConstructorReturn(this, _getPrototypeOf(StatusRoute).apply(this, arguments));
  }

  _createClass(StatusRoute, [{
    key: "getStatusCopy",
    value: function getStatusCopy() {
      var _this$props$order = this.props.order,
          state = _this$props$order.state,
          requestedFulfillment = _this$props$order.requestedFulfillment,
          mode = _this$props$order.mode,
          stateReason = _this$props$order.stateReason,
          stateExpiresAt = _this$props$order.stateExpiresAt;
      var isOfferFlow = mode === "OFFER";
      var isShip = requestedFulfillment.__typename === "CommerceShip";

      switch (state) {
        case "SUBMITTED":
          return isOfferFlow ? {
            title: "Your offer has been submitted",
            description: _react.default.createElement(_react.default.Fragment, null, "The seller will respond to your offer by ", stateExpiresAt, ". Keep in mind making an offer doesn\u2019t guarantee you the work.")
          } : {
            title: "Your order has been submitted",
            description: _react.default.createElement(_react.default.Fragment, null, "Thank you for your purchase. You will receive a confirmation email by ", stateExpiresAt, ".")
          };

        case "APPROVED":
          return {
            title: isOfferFlow ? "Offer accepted" : "Your order is confirmed",
            description: isShip ? _react.default.createElement(_react.default.Fragment, null, "Thank you for your purchase. You will be notified when the work has shipped, typically within 5\u20137 business days.") : _react.default.createElement(_react.default.Fragment, null, "Thank you for your purchase. A specialist will contact you within 2 business days to coordinate pickup.")
          };

        case "FULFILLED":
          {
            return isShip ? {
              title: "Your order has shipped",
              description: this.getFulfilmentDescription()
            } : {
              title: "Your order has been picked up",
              description: null
            };
          }

        case "CANCELED":
        case "REFUNDED":
          if (!isOfferFlow || state === "REFUNDED" || stateReason === null) {
            // stateReason === null for offer orders only if the order was rejected
            // after the offer was accepted.
            return {
              title: "Your order was canceled and refunded",
              description: _react.default.createElement(_react.default.Fragment, null, "Please allow 5\u20137 business days for the refund to appear on your bank statement. Contact", " ", _react.default.createElement("a", {
                href: "mailto:orders@artsy.net"
              }, "orders@artsy.net"), " with any questions.")
            };
          } // otherwise this was an offer order that was rejected before being
          // accepted


          return this.getCanceledOfferOrderCopy();

        default:
          // This should not happen. Check the order states are all accounted for:
          // https://github.com/artsy/exchange/blob/master/app/models/order.rb
          // (Aside from PENDING and ABANDONED)
          logger.error("Unhandled order state: ".concat(state));
          return {
            title: "Your order",
            description: null
          };
      }
    }
  }, {
    key: "getCanceledOfferOrderCopy",
    value: function getCanceledOfferOrderCopy() {
      var stateReason = this.props.order.stateReason;

      switch (stateReason) {
        case "buyer_rejected":
          return {
            title: "Offer declined",
            description: _react.default.createElement(_react.default.Fragment, null, "Thank you for your response. The seller will be informed of your decision to end the negotiation process.", _react.default.createElement("br", null), _react.default.createElement("br", null), "We\u2019d love to get your feedback. Contact", " ", _react.default.createElement("a", {
              href: "mailto:orders@artsy.net"
            }, "orders@artsy.net"), " with any comments you have."),
            showTransactionSummary: false
          };

        case "seller_rejected_offer_too_low":
        case "seller_rejected_shipping_unavailable":
        case "seller_rejected":
        case "seller_rejected_artwork_unavailable":
        case "seller_rejected_other":
          return {
            title: "Offer declined",
            description: _react.default.createElement(_react.default.Fragment, null, "Sorry, the seller declined your offer and has ended the negotiation process."),
            showTransactionSummary: false
          };

        case "buyer_lapsed":
          return {
            title: "Offer expired",
            description: _react.default.createElement(_react.default.Fragment, null, "The seller\u2019s offer expired because you didn\u2019t respond in time."),
            showTransactionSummary: false
          };

        case "seller_lapsed":
          return {
            title: "Offer expired",
            description: _react.default.createElement(_react.default.Fragment, null, "Your offer expired because the seller didn\u2019t respond to your offer in time."),
            showTransactionSummary: false
          };

        default:
          // This should not happen. Check the cancel reasons are all accounted for:
          // https://github.com/artsy/exchange/blob/master/app/models/order.rb
          logger.error("Unhandled cancellation reason: ".concat(stateReason));
          return {
            title: "Offer declined",
            description: null,
            showTransactionSummary: false
          };
      }
    }
  }, {
    key: "getFulfilmentDescription",
    value: function getFulfilmentDescription() {
      var fulfillment = (0, _get.get)(this.props.order, function (o) {
        return o.lineItems.edges[0].node.fulfillments.edges[0].node;
      });

      if (!fulfillment) {
        return null;
      }

      return _react.default.createElement(_react.default.Fragment, null, "Your work is on its way.", _react.default.createElement("br", null), _react.default.createElement("br", null), fulfillment.courier && _react.default.createElement(_react.default.Fragment, null, "Shipper: ", fulfillment.courier, _react.default.createElement("br", null)), fulfillment.trackingId && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_react.default.Fragment, null, "Tracking info: ", fulfillment.trackingId), _react.default.createElement("br", null)), fulfillment.estimatedDelivery && _react.default.createElement(_react.default.Fragment, null, "Estimated delivery: ", fulfillment.estimatedDelivery));
    }
  }, {
    key: "render",
    value: function render() {
      var order = this.props.order;
      var flowName = order.mode === "OFFER" ? "Offer" : "Order";

      var _this$getStatusCopy = this.getStatusCopy(),
          title = _this$getStatusCopy.title,
          description = _this$getStatusCopy.description,
          _this$getStatusCopy$s = _this$getStatusCopy.showTransactionSummary,
          showTransactionSummary = _this$getStatusCopy$s === void 0 ? true : _this$getStatusCopy$s;

      var showOfferNote = order.mode === "OFFER" && order.state === "SUBMITTED";
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_palette.Serif, {
        size: "6",
        weight: "regular",
        color: "black100"
      }, title), _react.default.createElement(_palette.Sans, {
        size: "2",
        weight: "regular",
        color: "black60",
        mb: [2, 3]
      }, flowName, " #", order.code), _react.default.createElement(_TwoColumnLayout.TwoColumnLayout, {
        Content: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Title, null, flowName, " status | Artsy"), _react.default.createElement(_palette.Join, {
          separator: _react.default.createElement(_palette.Spacer, {
            mb: [2, 3]
          })
        }, description && _react.default.createElement(_palette.Message, {
          p: [2, 3]
        }, description), showTransactionSummary ? _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_ArtworkSummaryItem.ArtworkSummaryItemFragmentContainer, {
          order: order
        }), _react.default.createElement(StyledTransactionDetailsSummaryItem, {
          order: order,
          useLastSubmittedOffer: true,
          showOfferNote: showOfferNote
        })) : _react.default.createElement(_palette.Button, {
          onClick: function onClick() {
            window.location.href = "/";
          },
          size: "large",
          width: "100%"
        }, "Back to Artsy"))),
        Sidebar: showTransactionSummary && _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(StyledShippingSummaryItem, {
          order: order
        }), _react.default.createElement(_CreditCardSummaryItem.CreditCardSummaryItemFragmentContainer, {
          order: order
        })))
      })));
    }
  }]);

  return StatusRoute;
}(_react.Component);

exports.StatusRoute = StatusRoute;
var StyledShippingSummaryItem = (0, _styledComponents.default)(_ShippingSummaryItem.ShippingSummaryItemFragmentContainer).withConfig({
  displayName: "Status__StyledShippingSummaryItem",
  componentId: "srbsjh-0"
})(["", ";"], _palette.media.xs(_templateObject()));
var StyledTransactionDetailsSummaryItem = (0, _styledComponents.default)(_TransactionDetailsSummaryItem.TransactionDetailsSummaryItemFragmentContainer).withConfig({
  displayName: "Status__StyledTransactionDetailsSummaryItem",
  componentId: "srbsjh-1"
})(["", ";"], _palette.media.xs(_templateObject2()));
var StatusFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _trackPageViewWrapper.trackPageViewWrapper)(StatusRoute), {
  order: function order() {
    var node = require("../../../../__generated__/Status_order.graphql");

    if (node.hash && node.hash !== "dc527973941511a05bed5036e544a6e5") {
      console.error("The definition of 'Status_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Status_order.graphql");
  }
});
exports.StatusFragmentContainer = StatusFragmentContainer;
//# sourceMappingURL=index.js.map