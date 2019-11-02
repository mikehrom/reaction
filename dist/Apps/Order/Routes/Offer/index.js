"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferFragmentContainer = exports.OfferRoute = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

require("regenerator-runtime/runtime");

var _palette = require("@artsy/palette");

var _HorizontalPadding = require("../../../Components/HorizontalPadding");

var _ArtworkSummaryItem = require("../../Components/ArtworkSummaryItem");

var _OfferInput = require("../../Components/OfferInput");

var _OfferNote = require("../../Components/OfferNote");

var _RevealButton = require("../../Components/RevealButton");

var _TransactionDetailsSummaryItem = require("../../Components/TransactionDetailsSummaryItem");

var _TwoColumnLayout = require("../../Components/TwoColumnLayout");

var _Dialogs = require("../../Dialogs");

var _commitMutation = require("../../Utils/commitMutation");

var _trackPageViewWrapper = require("../../Utils/trackPageViewWrapper");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics"));

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _Responsive = require("../../../../Utils/Responsive");

var _OrderStepper = require("../../Components/OrderStepper");

var _graphql, _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var logger = (0, _logger.default)("Order/Routes/Offer/index.tsx");
var OfferRoute = (_dec = (0, Schema.track)(), _dec2 = (0, Schema.track)(function (props) {
  return {
    order_id: props.order.id,
    action_type: Schema.ActionType.FocusedOnOfferInput,
    flow: Schema.Flow.MakeOffer
  };
}), _dec3 = (0, Schema.track)(function (props) {
  return {
    order_id: props.order.id,
    action_type: Schema.ActionType.ViewedOfferTooLow,
    flow: Schema.Flow.MakeOffer
  };
}), _dec4 = (0, Schema.track)(function (props) {
  return {
    order_id: props.order.id,
    action_type: Schema.ActionType.ViewedOfferHigherThanListPrice,
    flow: Schema.Flow.MakeOffer
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(OfferRoute, _Component);

  function OfferRoute() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OfferRoute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OfferRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      offerValue: 0,
      offerNoteValue: {
        value: "",
        exceedsCharacterLimit: false
      },
      formIsDirty: false,
      lowSpeedBumpEncountered: false,
      highSpeedBumpEncountered: false
    });

    _defineProperty(_assertThisInitialized(_this), "onContinueButtonPressed",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$state, offerValue, offerNoteValue, lowSpeedBumpEncountered, highSpeedBumpEncountered, listPriceCents, orderOrError;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, offerValue = _this$state.offerValue, offerNoteValue = _this$state.offerNoteValue, lowSpeedBumpEncountered = _this$state.lowSpeedBumpEncountered, highSpeedBumpEncountered = _this$state.highSpeedBumpEncountered;

              if (!(offerValue <= 0 || offerNoteValue.exceedsCharacterLimit)) {
                _context.next = 4;
                break;
              }

              _this.setState({
                formIsDirty: true
              });

              return _context.abrupt("return");

            case 4:
              listPriceCents = _this.props.order.totalListPriceCents;

              if (!(!lowSpeedBumpEncountered && offerValue * 100 < listPriceCents * 0.75)) {
                _context.next = 8;
                break;
              }

              _this.showLowSpeedbump();

              return _context.abrupt("return");

            case 8:
              if (!(!highSpeedBumpEncountered && _this.state.offerValue * 100 > listPriceCents)) {
                _context.next = 11;
                break;
              }

              _this.showHighSpeedbump();

              return _context.abrupt("return");

            case 11:
              _context.prev = 11;
              _context.next = 14;
              return _this.addInitialOfferToOrder({
                input: {
                  note: _this.state.offerNoteValue && _this.state.offerNoteValue.value,
                  orderId: _this.props.order.id,
                  amountCents: offerValue * 100
                }
              });

            case 14:
              orderOrError = _context.sent.commerceAddInitialOfferToOrder.orderOrError;

              if (!orderOrError.error) {
                _context.next = 18;
                break;
              }

              _this.handleSubmitError(orderOrError.error);

              return _context.abrupt("return");

            case 18:
              _this.props.router.push("/orders/".concat(_this.props.order.id, "/shipping"));

              _context.next = 25;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](11);
              logger.error(_context.t0);

              _this.props.dialog.showErrorDialog();

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[11, 21]]);
    })));

    return _this;
  }

  _createClass(OfferRoute, [{
    key: "onOfferInputFocus",
    value: function onOfferInputFocus() {// noop
    }
  }, {
    key: "showLowSpeedbump",
    value: function showLowSpeedbump() {
      this.setState({
        lowSpeedBumpEncountered: true
      });
      this.props.dialog.showErrorDialog({
        title: "Offer may be too low",
        message: "Offers within 25% of the list price are most likely to receive a response.",
        continueButtonText: "OK"
      });
    }
  }, {
    key: "showHighSpeedbump",
    value: function showHighSpeedbump() {
      this.setState({
        highSpeedBumpEncountered: true
      });
      this.props.dialog.showErrorDialog({
        title: "Offer higher than list price",
        message: "You’re making an offer higher than the list price.",
        continueButtonText: "OK"
      });
    }
  }, {
    key: "addInitialOfferToOrder",
    value: function addInitialOfferToOrder(variables) {
      return this.props.commitMutation({
        variables: variables,
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/OfferMutation.graphql");

          if (node.hash && node.hash !== "d132eefb517283adf59065d0786727d1") {
            console.error("The definition of 'OfferMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/OfferMutation.graphql");
        })
      });
    }
  }, {
    key: "handleSubmitError",
    value: function handleSubmitError(error) {
      logger.error(error);

      switch (error.code) {
        case "invalid_amount_cents":
          {
            this.props.dialog.showErrorDialog({
              title: "Invalid offer",
              message: "The offer amount is either missing or invalid. Please try again."
            });
            break;
          }

        default:
          {
            this.props.dialog.showErrorDialog();
            break;
          }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          order = _this$props.order,
          isCommittingMutation = _this$props.isCommittingMutation;
      var artworkId = order.lineItems.edges[0].node.artwork.id;
      var orderCurrency = order.currencyCode;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, {
        px: [0, 4]
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_OrderStepper.OrderStepper, {
        currentStep: "Offer",
        steps: _OrderStepper.offerFlowSteps
      })))), _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_TwoColumnLayout.TwoColumnLayout, {
        Content: _react.default.createElement(_palette.Flex, {
          flexDirection: "column",
          style: isCommittingMutation ? {
            pointerEvents: "none"
          } : {},
          id: "offer-page-left-column"
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_OfferInput.OfferInput, {
          id: "OfferForm_offerValue",
          showError: this.state.formIsDirty && this.state.offerValue <= 0,
          onChange: function onChange(offerValue) {
            return _this2.setState({
              offerValue: offerValue
            });
          },
          onFocus: this.onOfferInputFocus.bind(this)
        })), Boolean(order.totalListPrice) && _react.default.createElement(_palette.Sans, {
          size: "2",
          color: "black60"
        }, "List price: ", order.totalListPrice), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_RevealButton.RevealButton, {
          align: "left",
          buttonLabel: "Add note to seller"
        }, _react.default.createElement(_OfferNote.OfferNote, {
          onChange: function onChange(offerNoteValue) {
            return _this2.setState({
              offerNoteValue: offerNoteValue
            });
          },
          artworkId: artworkId
        })), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_palette.Message, {
          p: [2, 3]
        }, "If your offer is accepted, your payment will be processed immediately. Keep in mind making an offer doesn\u2019t guarantee you the work, as the seller might be receiving higher offers."), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, _react.default.createElement(_palette.Button, {
          onClick: this.onContinueButtonPressed,
          loading: isCommittingMutation,
          size: "large",
          width: "100%"
        }, "Continue"))),
        Sidebar: _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_ArtworkSummaryItem.ArtworkSummaryItemFragmentContainer, {
          order: order
        }), _react.default.createElement(_TransactionDetailsSummaryItem.TransactionDetailsSummaryItemFragmentContainer, {
          order: order,
          offerOverride: this.state.offerValue && this.state.offerValue.toLocaleString("en-US", {
            style: "currency",
            currency: orderCurrency,
            minimumFractionDigits: 2
          })
        })), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
          mb: 3
        }), _react.default.createElement(_palette.Button, {
          onClick: this.onContinueButtonPressed,
          loading: isCommittingMutation,
          size: "large",
          width: "100%"
        }, "Continue"))))
      })));
    }
  }]);

  return OfferRoute;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onOfferInputFocus", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onOfferInputFocus"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "showLowSpeedbump", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "showLowSpeedbump"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "showHighSpeedbump", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "showHighSpeedbump"), _class2.prototype)), _class2)) || _class);
exports.OfferRoute = OfferRoute;
var OfferFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _commitMutation.injectCommitMutation)((0, _Dialogs.injectDialog)((0, _trackPageViewWrapper.trackPageViewWrapper)(OfferRoute))), {
  order: function order() {
    var node = require("../../../../__generated__/Offer_order.graphql");

    if (node.hash && node.hash !== "1b1ab23013a1d61ad89fcb83371a44e8") {
      console.error("The definition of 'Offer_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Offer_order.graphql");
  }
});
exports.OfferFragmentContainer = OfferFragmentContainer;
//# sourceMappingURL=index.js.map