"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RejectFragmentContainer = exports.Reject = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("regenerator-runtime/runtime");

var _palette = require("@artsy/palette");

var _ArtworkSummaryItem = require("../../Components/ArtworkSummaryItem");

var _ConditionsOfSaleDisclaimer = require("../../Components/ConditionsOfSaleDisclaimer");

var _TwoColumnLayout = require("../../Components/TwoColumnLayout");

var _trackPageViewWrapper = require("../../Utils/trackPageViewWrapper");

var _react = _interopRequireWildcard(require("react"));

var _HorizontalPadding = require("../../../Components/HorizontalPadding");

var _v = require("../../../../Components/v2");

var _CountdownTimer = require("../../../../Components/v2/CountdownTimer");

var _Responsive = require("../../../../Utils/Responsive");

var _Respond = require("../Respond");

var _OrderStepper = require("../../Components/OrderStepper");

var _Dialogs = require("../../Dialogs");

var _commitMutation = require("../../Utils/commitMutation");

var _reactRelay = require("react-relay");

var _graphql;

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

var Reject =
/*#__PURE__*/
function (_Component) {
  _inherits(Reject, _Component);

  function Reject() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Reject);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Reject)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onSubmit",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var orderOrError;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.rejectOffer({
                input: {
                  offerId: _this.props.order.lastOffer.id
                }
              });

            case 3:
              orderOrError = _context.sent.commerceBuyerRejectOffer.orderOrError;

              if (!orderOrError.error) {
                _context.next = 6;
                break;
              }

              throw orderOrError.error;

            case 6:
              _this.props.router.push("/orders/".concat(_this.props.order.id, "/status"));

              _context.next = 13;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);

              _Respond.logger.error(_context.t0);

              _this.props.dialog.showErrorDialog();

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "onChangeResponse", function () {
      var order = _this.props.order;

      _this.props.router.push("/orders/".concat(order.id, "/respond"));
    });

    return _this;
  }

  _createClass(Reject, [{
    key: "rejectOffer",
    value: function rejectOffer(variables) {
      return this.props.commitMutation({
        variables: variables,
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/RejectOfferMutation.graphql");

          if (node.hash && node.hash !== "20d9b769df87764d8b7f69ab00bf3162") {
            console.error("The definition of 'RejectOfferMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/RejectOfferMutation.graphql");
        })
      });
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
        }, _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_ArtworkSummaryItem.ArtworkSummaryItemFragmentContainer, {
          order: order
        })), _react.default.createElement(_palette.Spacer, {
          mb: 2
        })), _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_CountdownTimer.CountdownTimer, {
          action: "Respond",
          note: "Expired offers end the negotiation process permanently.",
          countdownStart: order.lastOffer.createdAt,
          countdownEnd: order.stateExpiresAt
        }), _react.default.createElement(_v.StepSummaryItem, {
          title: "Decline seller's offer",
          onChange: this.onChangeResponse
        }, _react.default.createElement(_palette.Sans, {
          size: "2",
          color: "black60"
        }, "Declining an offer permanently ends the negotiation process. The seller will not be able to make a counteroffer."))), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, _react.default.createElement(_palette.Button, {
          onClick: this.onSubmit,
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
        }, _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_ArtworkSummaryItem.ArtworkSummaryItemFragmentContainer, {
          order: order
        })), _react.default.createElement(_palette.Spacer, {
          mb: 2
        })), _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Button, {
          onClick: this.onSubmit,
          loading: isCommittingMutation,
          size: "large",
          width: "100%"
        }, "Submit"), _react.default.createElement(_palette.Spacer, {
          mb: 2
        }), _react.default.createElement(_ConditionsOfSaleDisclaimer.ConditionsOfSaleDisclaimer, null))))
      })));
    }
  }]);

  return Reject;
}(_react.Component);

exports.Reject = Reject;
var RejectFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _trackPageViewWrapper.trackPageViewWrapper)((0, _commitMutation.injectCommitMutation)((0, _Dialogs.injectDialog)(Reject))), {
  order: function order() {
    var node = require("../../../../__generated__/Reject_order.graphql");

    if (node.hash && node.hash !== "3204ebb55e786cd9e746bfd799fbb708") {
      console.error("The definition of 'Reject_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Reject_order.graphql");
  }
});
exports.RejectFragmentContainer = RejectFragmentContainer;
//# sourceMappingURL=index.js.map