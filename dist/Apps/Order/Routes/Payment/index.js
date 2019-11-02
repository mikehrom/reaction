"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentFragmentContainer = exports.PaymentRoute = exports.ContinueButton = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.assign");

require("regenerator-runtime/runtime");

var _HorizontalPadding = require("../../../Components/HorizontalPadding");

var _ArtworkSummaryItem = require("../../Components/ArtworkSummaryItem");

var _OrderStepper = require("../../Components/OrderStepper");

var _TransactionDetailsSummaryItem = require("../../Components/TransactionDetailsSummaryItem");

var _TwoColumnLayout = require("../../Components/TwoColumnLayout");

var _trackPageViewWrapper = require("../../Utils/trackPageViewWrapper");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _Responsive = require("../../../../Utils/Responsive");

var _palette = require("@artsy/palette");

var _BankTransferExperiment = require("../../Components/BankTransferExperiment");

var _PaymentPicker = require("../../Components/PaymentPicker");

var _Dialogs = require("../../Dialogs");

var _commitMutation = require("../../Utils/commitMutation");

var _Artsy = require("../../../../Artsy");

var _graphql, _dec, _class, _temp;

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ContinueButton = function ContinueButton(props) {
  return _react.default.createElement(_palette.Button, _extends({
    size: "large",
    width: "100%"
  }, props), "Continue");
};

exports.ContinueButton = ContinueButton;
var logger = (0, _logger.default)("Order/Routes/Payment/index.tsx");
var PaymentRoute = (_dec = (0, _Artsy.track)(function (props) {
  return {
    flow: props.order.mode === "BUY" ? _Artsy.AnalyticsSchema.Flow.BuyNow : _Artsy.AnalyticsSchema.Flow.MakeOffer
  };
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(PaymentRoute, _Component);

  function PaymentRoute() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaymentRoute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaymentRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isGettingCreditCardId: false
    });

    _defineProperty(_assertThisInitialized(_this), "paymentPicker", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "onContinue",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var result, orderOrError;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.setState({
                isGettingCreditCardId: true
              });

              _context.next = 4;
              return _this.paymentPicker.current.getCreditCardId();

            case 4:
              result = _context.sent;

              _this.setState({
                isGettingCreditCardId: false
              });

              if (!(result.type === "invalid_form")) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return");

            case 8:
              if (!(result.type === "error")) {
                _context.next = 11;
                break;
              }

              _this.props.dialog.showErrorDialog({
                title: result.error,
                message: "Please enter another payment method or contact your bank for more information."
              });

              return _context.abrupt("return");

            case 11:
              if (!(result.type === "internal_error")) {
                _context.next = 15;
                break;
              }

              _this.props.dialog.showErrorDialog({
                title: "An internal error occurred"
              });

              logger.error(result.error);
              return _context.abrupt("return");

            case 15:
              _context.next = 17;
              return _this.setOrderPayment({
                input: {
                  creditCardId: result.creditCardId,
                  id: _this.props.order.id
                }
              });

            case 17:
              orderOrError = _context.sent.commerceSetPayment.orderOrError;

              if (!orderOrError.error) {
                _context.next = 20;
                break;
              }

              throw orderOrError.error;

            case 20:
              _this.props.router.push("/orders/".concat(_this.props.order.id, "/review"));

              _context.next = 27;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](0);
              logger.error(_context.t0);

              _this.props.dialog.showErrorDialog();

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 23]]);
    })));

    return _this;
  }

  _createClass(PaymentRoute, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          order = _this$props.order,
          isCommittingMutation = _this$props.isCommittingMutation;
      var isGettingCreditCardId = this.state.isGettingCreditCardId;
      var isLoading = isGettingCreditCardId || isCommittingMutation;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, {
        px: [0, 4]
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_OrderStepper.OrderStepper, {
        currentStep: "Payment",
        steps: order.mode === "OFFER" ? _OrderStepper.offerFlowSteps : _OrderStepper.buyNowFlowSteps
      })))), _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_TwoColumnLayout.TwoColumnLayout, {
        Content: _react.default.createElement(_palette.Flex, {
          flexDirection: "column",
          style: isLoading ? {
            pointerEvents: "none"
          } : {}
        }, _react.default.createElement(_PaymentPicker.PaymentPickerFragmentContainer, {
          commitMutation: this.props.commitMutation,
          me: this.props.me,
          order: this.props.order,
          innerRef: this.paymentPicker
        }), _react.default.createElement(_palette.Spacer, {
          mb: 3
        }), _react.default.createElement(_BankTransferExperiment.BankTransferExperiment, null), _react.default.createElement(_palette.Spacer, {
          mb: 3
        }), _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, _react.default.createElement(ContinueButton, {
          onClick: this.onContinue,
          loading: isLoading
        }))),
        Sidebar: _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_ArtworkSummaryItem.ArtworkSummaryItemFragmentContainer, {
          order: order
        }), _react.default.createElement(_TransactionDetailsSummaryItem.TransactionDetailsSummaryItemFragmentContainer, {
          order: order
        })), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
          mb: 3
        }), _react.default.createElement(ContinueButton, {
          onClick: this.onContinue,
          loading: isLoading
        }))))
      })));
    }
  }, {
    key: "setOrderPayment",
    value: function setOrderPayment(variables) {
      return this.props.commitMutation({
        variables: variables,
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/PaymentRouteSetOrderPaymentMutation.graphql");

          if (node.hash && node.hash !== "fca070e4e891f997375e79407ed33fe7") {
            console.error("The definition of 'PaymentRouteSetOrderPaymentMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/PaymentRouteSetOrderPaymentMutation.graphql");
        })
      });
    }
  }]);

  return PaymentRoute;
}(_react.Component), _temp)) || _class);
exports.PaymentRoute = PaymentRoute;
var PaymentFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _commitMutation.injectCommitMutation)((0, _trackPageViewWrapper.trackPageViewWrapper)((0, _Dialogs.injectDialog)(PaymentRoute))), {
  me: function me() {
    var node = require("../../../../__generated__/Payment_me.graphql");

    if (node.hash && node.hash !== "6e58b93df5b176669dbf779516ec980d") {
      console.error("The definition of 'Payment_me' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Payment_me.graphql");
  },
  order: function order() {
    var node = require("../../../../__generated__/Payment_order.graphql");

    if (node.hash && node.hash !== "4dc6846a22641e49a14588c22c3888bb") {
      console.error("The definition of 'Payment_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Payment_order.graphql");
  }
});
exports.PaymentFragmentContainer = PaymentFragmentContainer;
//# sourceMappingURL=index.js.map