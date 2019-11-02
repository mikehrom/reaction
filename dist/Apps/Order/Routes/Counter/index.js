"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CounterFragmentContainer = exports.CounterRoute = void 0;

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

var _ConditionsOfSaleDisclaimer = require("../../Components/ConditionsOfSaleDisclaimer");

var _CreditCardSummaryItem = require("../../Components/CreditCardSummaryItem");

var _OrderStepper = require("../../Components/OrderStepper");

var _ShippingSummaryItem = require("../../Components/ShippingSummaryItem");

var _TransactionDetailsSummaryItem = require("../../Components/TransactionDetailsSummaryItem");

var _TwoColumnLayout = require("../../Components/TwoColumnLayout");

var _Dialogs = require("../../Dialogs");

var _commitMutation = require("../../Utils/commitMutation");

var _trackPageViewWrapper = require("../../Utils/trackPageViewWrapper");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _CountdownTimer = require("../../../../Components/v2/CountdownTimer");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _Responsive = require("../../../../Utils/Responsive");

var _graphql, _dec, _dec2, _class, _class2, _temp;

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

var logger = (0, _logger.default)("Order/Routes/Counter/index.tsx");
var CounterRoute = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props) {
  return {
    action_type: Schema.ActionType.SubmittedCounterOffer,
    order_id: props.order.id
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(CounterRoute, _Component);

  function CounterRoute(props) {
    var _this;

    _classCallCheck(this, CounterRoute);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CounterRoute).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onSubmitButtonPressed",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _ref2, orderOrError;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.submitPendingOffer({
                input: {
                  offerId: _this.props.order.myLastOffer.id
                }
              });

            case 3:
              _ref2 = _context.sent;
              orderOrError = _ref2.commerceSubmitPendingOffer.orderOrError;

              if (!orderOrError.error) {
                _context.next = 8;
                break;
              }

              _this.handleSubmitError(orderOrError.error);

              return _context.abrupt("return");

            case 8:
              _this.onSuccessfulSubmit();

              _context.next = 15;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              logger.error(_context.t0);

              _this.props.dialog.showErrorDialog();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "onChangeResponse", function () {
      var order = _this.props.order;

      _this.props.router.push("/orders/".concat(order.id, "/respond"));
    });

    _this.onSuccessfulSubmit = _this.onSuccessfulSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CounterRoute, [{
    key: "submitPendingOffer",
    value: function submitPendingOffer(variables) {
      return this.props.commitMutation({
        variables: variables,
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/CounterSubmitMutation.graphql");

          if (node.hash && node.hash !== "498e2167e61dc5b2ecbb9fa2738cf453") {
            console.error("The definition of 'CounterSubmitMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/CounterSubmitMutation.graphql");
        })
      });
    }
  }, {
    key: "handleSubmitError",
    value: function handleSubmitError(error) {
      logger.error(error);

      if (error.code === "insufficient_inventory") {
        this.props.dialog.showErrorDialog({
          title: "This work has already been sold.",
          message: "Please contact orders@artsy.net with any questions."
        });
      } else {
        this.props.dialog.showErrorDialog();
      }
    }
  }, {
    key: "onSuccessfulSubmit",
    value: function onSuccessfulSubmit() {
      this.props.router.push("/orders/".concat(this.props.order.id, "/status"));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          order = _this$props.order,
          isCommittingMutation = _this$props.isCommittingMutation;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, {
        px: [0, 4]
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_OrderStepper.OrderStepper, {
        currentStep: "Review",
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
          note: "Expired offers end the negotiation process permanently.",
          countdownStart: order.lastOffer.createdAt,
          countdownEnd: order.stateExpiresAt
        }), _react.default.createElement(_TransactionDetailsSummaryItem.TransactionDetailsSummaryItemFragmentContainer, {
          order: order,
          title: "Your counteroffer",
          onChange: this.onChangeResponse,
          offerContextPrice: "LAST_OFFER",
          showOfferNote: true
        })), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }), _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, _react.default.createElement(_palette.Button, {
          onClick: this.onSubmitButtonPressed,
          loading: isCommittingMutation,
          size: "large",
          width: "100%"
        }, "Submit"), _react.default.createElement(_palette.Spacer, {
          mb: 2
        }), _react.default.createElement(_ConditionsOfSaleDisclaimer.ConditionsOfSaleDisclaimer, {
          textAlign: "center"
        }))),
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
        })), _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, _react.default.createElement(_palette.Spacer, {
          mb: 2
        })), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Button, {
          onClick: this.onSubmitButtonPressed,
          loading: isCommittingMutation,
          size: "large",
          width: "100%"
        }, "Submit"), _react.default.createElement(_palette.Spacer, {
          mb: 2
        }), _react.default.createElement(_ConditionsOfSaleDisclaimer.ConditionsOfSaleDisclaimer, null))))
      })));
    }
  }]);

  return CounterRoute;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onSuccessfulSubmit", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onSuccessfulSubmit"), _class2.prototype)), _class2)) || _class);
exports.CounterRoute = CounterRoute;
var CounterFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _trackPageViewWrapper.trackPageViewWrapper)((0, _commitMutation.injectCommitMutation)((0, _Dialogs.injectDialog)(CounterRoute))), {
  order: function order() {
    var node = require("../../../../__generated__/Counter_order.graphql");

    if (node.hash && node.hash !== "b0b4179c6c4ffb147979de5456cb6563") {
      console.error("The definition of 'Counter_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Counter_order.graphql");
  }
});
exports.CounterFragmentContainer = CounterFragmentContainer;
//# sourceMappingURL=index.js.map