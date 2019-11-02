"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RespondFragmentContainer = exports.RespondRoute = exports.logger = void 0;

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

var _OfferInput = require("../../Components/OfferInput");

var _OfferNote = require("../../Components/OfferNote");

var _RevealButton = require("../../Components/RevealButton");

var _TransactionDetailsSummaryItem = require("../../Components/TransactionDetailsSummaryItem");

var _TwoColumnLayout = require("../../Components/TwoColumnLayout");

var _Dialogs = require("../../Dialogs");

var _commitMutation = require("../../Utils/commitMutation");

var _trackPageViewWrapper = require("../../Utils/trackPageViewWrapper");

var _Artsy = require("../../../../Artsy");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _CountdownTimer = require("../../../../Components/v2/CountdownTimer");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _Responsive = require("../../../../Utils/Responsive");

var _ArtworkSummaryItem = require("../../Components/ArtworkSummaryItem");

var _CreditCardSummaryItem = require("../../Components/CreditCardSummaryItem");

var _OfferHistoryItem = require("../../Components/OfferHistoryItem");

var _OrderStepper = require("../../Components/OrderStepper");

var _ShippingSummaryItem = require("../../Components/ShippingSummaryItem");

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

var logger = (0, _logger.default)("Order/Routes/Respond/index.tsx");
exports.logger = logger;
var RespondRoute = (_dec = (0, _Artsy.track)(), _dec2 = (0, _Artsy.track)(function (props) {
  return {
    order_id: props.order.id,
    action_type: Schema.ActionType.FocusedOnOfferInput,
    flow: Schema.Flow.MakeOffer
  };
}), _dec3 = (0, _Artsy.track)(function (props) {
  return {
    order_id: props.order.id,
    action_type: Schema.ActionType.ViewedOfferTooLow,
    flow: Schema.Flow.MakeOffer
  };
}), _dec4 = (0, _Artsy.track)(function (props) {
  return {
    order_id: props.order.id,
    action_type: Schema.ActionType.ViewedOfferHigherThanListPrice,
    flow: Schema.Flow.MakeOffer
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(RespondRoute, _Component);

  function RespondRoute() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RespondRoute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RespondRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      offerValue: 0,
      offerNoteValue: {
        value: "",
        exceedsCharacterLimit: false
      },
      responseOption: null,
      formIsDirty: false,
      lowSpeedBumpEncountered: false,
      highSpeedBumpEncountered: false
    });

    _defineProperty(_assertThisInitialized(_this), "onContinueButtonPressed",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$state, responseOption, offerValue, offerNoteValue, lowSpeedBumpEncountered, highSpeedBumpEncountered, currentOfferPrice, orderOrError;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, responseOption = _this$state.responseOption, offerValue = _this$state.offerValue, offerNoteValue = _this$state.offerNoteValue, lowSpeedBumpEncountered = _this$state.lowSpeedBumpEncountered, highSpeedBumpEncountered = _this$state.highSpeedBumpEncountered;

              if (!(responseOption === "ACCEPT")) {
                _context.next = 4;
                break;
              }

              _this.props.router.push("/orders/".concat(_this.props.order.id, "/review/accept"));

              return _context.abrupt("return");

            case 4:
              if (!(responseOption === "DECLINE")) {
                _context.next = 7;
                break;
              }

              _this.props.router.push("/orders/".concat(_this.props.order.id, "/review/decline"));

              return _context.abrupt("return");

            case 7:
              if (!(offerValue <= 0 || offerNoteValue.exceedsCharacterLimit)) {
                _context.next = 10;
                break;
              }

              _this.setState({
                formIsDirty: true
              });

              return _context.abrupt("return");

            case 10:
              currentOfferPrice = _this.props.order.itemsTotalCents;

              if (!(!lowSpeedBumpEncountered && offerValue * 100 < currentOfferPrice * 0.75)) {
                _context.next = 14;
                break;
              }

              _this.showLowSpeedbump();

              return _context.abrupt("return");

            case 14:
              if (!(!highSpeedBumpEncountered && _this.state.offerValue * 100 > currentOfferPrice)) {
                _context.next = 17;
                break;
              }

              _this.showHighSpeedbump();

              return _context.abrupt("return");

            case 17:
              _context.prev = 17;
              _context.next = 20;
              return _this.createCounterOffer({
                input: {
                  offerId: _this.props.order.lastOffer.id,
                  amountCents: _this.state.offerValue * 100,
                  note: _this.state.offerNoteValue && _this.state.offerNoteValue.value
                }
              });

            case 20:
              orderOrError = _context.sent.commerceBuyerCounterOffer.orderOrError;

              if (!orderOrError.error) {
                _context.next = 23;
                break;
              }

              throw orderOrError.error;

            case 23:
              _this.props.router.push("/orders/".concat(_this.props.order.id, "/review/counter"));

              _context.next = 30;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](17);
              logger.error(_context.t0);

              _this.props.dialog.showErrorDialog();

            case 30:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[17, 26]]);
    })));

    return _this;
  }

  _createClass(RespondRoute, [{
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
        message: "Offers within 25% of the seller's offer are most likely to receive a response.",
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
        title: "Offer higher than seller's offer",
        message: "You’re making an offer higher than the seller's offer.",
        continueButtonText: "OK"
      });
    }
  }, {
    key: "createCounterOffer",
    value: function createCounterOffer(variables) {
      return this.props.commitMutation({
        variables: variables,
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/RespondCounterOfferMutation.graphql");

          if (node.hash && node.hash !== "a4d9f2cfd72fdd085f7318543ed3de2e") {
            console.error("The definition of 'RespondCounterOfferMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/RespondCounterOfferMutation.graphql");
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          order = _this$props.order,
          isCommittingMutation = _this$props.isCommittingMutation;
      var artworkId = order.lineItems.edges[0].node.artwork.id;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, {
        px: [0, 4]
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_OrderStepper.OrderStepper, {
        currentStep: "Respond",
        steps: _OrderStepper.counterofferFlowSteps
      })))), _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_TwoColumnLayout.TwoColumnLayout, {
        Content: _react.default.createElement(_palette.Flex, {
          flexDirection: "column",
          style: isCommittingMutation ? {
            pointerEvents: "none"
          } : {}
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_CountdownTimer.CountdownTimer, {
          action: "Respond",
          note: "Expiration will end negotiations on this offer. Keep in mind the work can be sold to another buyer in the meantime.",
          countdownStart: order.lastOffer.createdAt,
          countdownEnd: order.stateExpiresAt
        }), _react.default.createElement(_OfferHistoryItem.OfferHistoryItemFragmentContainer, {
          order: order
        }), _react.default.createElement(_TransactionDetailsSummaryItem.TransactionDetailsSummaryItemFragmentContainer, {
          order: order,
          useLastSubmittedOffer: true
        })), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_palette.RadioGroup, {
          onSelect: function onSelect(responseOption) {
            return _this2.setState({
              responseOption: responseOption
            });
          },
          defaultValue: this.state.responseOption
        }, _react.default.createElement(_palette.BorderedRadio, {
          value: "ACCEPT",
          label: "Accept seller's offer"
        }), _react.default.createElement(_palette.BorderedRadio, {
          value: "COUNTER",
          position: "relative",
          label: "Send counteroffer"
        }, _react.default.createElement(_palette.Collapse, {
          open: this.state.responseOption === "COUNTER"
        }, _react.default.createElement(_palette.Spacer, {
          mb: 2
        }), _react.default.createElement(_OfferInput.OfferInput, {
          id: "RespondForm_RespondValue",
          showError: this.state.formIsDirty && this.state.offerValue <= 0,
          onChange: function onChange(offerValue) {
            return _this2.setState({
              offerValue: offerValue
            });
          },
          onFocus: this.onOfferInputFocus.bind(this)
        }), _react.default.createElement(_palette.Spacer, {
          mb: 0.5
        }), _react.default.createElement(_RevealButton.RevealButton, {
          align: "left",
          buttonLabel: "Add note to seller"
        }, _react.default.createElement(_palette.Spacer, {
          mb: 1
        }), _react.default.createElement(_OfferNote.OfferNote, {
          onChange: function onChange(offerNoteValue) {
            return _this2.setState({
              offerNoteValue: offerNoteValue
            });
          },
          artworkId: artworkId,
          counteroffer: true
        })))), _react.default.createElement(_palette.BorderedRadio, {
          value: "DECLINE",
          position: "relative",
          label: "Decline seller's offer"
        }, _react.default.createElement(_palette.Flex, {
          position: "relative"
        }, _react.default.createElement(_palette.Collapse, {
          open: this.state.responseOption === "DECLINE"
        }, _react.default.createElement(_palette.Spacer, {
          mb: 1
        }), _react.default.createElement(_palette.Sans, {
          size: "2",
          color: "black60"
        }, "Declining an offer will end the negotiation process on this offer."))))), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
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
        }), _react.default.createElement(_ShippingSummaryItem.ShippingSummaryItemFragmentContainer, {
          order: order,
          locked: true
        }), _react.default.createElement(_CreditCardSummaryItem.CreditCardSummaryItemFragmentContainer, {
          order: order,
          locked: true
        })), _react.default.createElement(_palette.Spacer, {
          mb: 2
        }), _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Button, {
          onClick: this.onContinueButtonPressed,
          loading: isCommittingMutation,
          size: "large",
          width: "100%"
        }, "Continue"))))
      })));
    }
  }]);

  return RespondRoute;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onOfferInputFocus", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onOfferInputFocus"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "showLowSpeedbump", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "showLowSpeedbump"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "showHighSpeedbump", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "showHighSpeedbump"), _class2.prototype)), _class2)) || _class);
exports.RespondRoute = RespondRoute;
var RespondFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _commitMutation.injectCommitMutation)((0, _Dialogs.injectDialog)((0, _trackPageViewWrapper.trackPageViewWrapper)(RespondRoute))), {
  order: function order() {
    var node = require("../../../../__generated__/Respond_order.graphql");

    if (node.hash && node.hash !== "65644c6096a6d6f35f3ae57670a4cca2") {
      console.error("The definition of 'Respond_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Respond_order.graphql");
  }
});
exports.RespondFragmentContainer = RespondFragmentContainer;
//# sourceMappingURL=index.js.map