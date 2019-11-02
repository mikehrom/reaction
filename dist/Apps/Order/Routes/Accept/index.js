"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AcceptFragmentContainer = exports.Accept = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("regenerator-runtime/runtime");

var _palette = require("@artsy/palette");

var _HorizontalPadding = require("../../../Components/HorizontalPadding");

var _TwoColumnLayout = require("../../Components/TwoColumnLayout");

var _Analytics = require("../../../../Artsy/Analytics");

var _react = _interopRequireWildcard(require("react"));

var _Responsive = require("../../../../Utils/Responsive");

var _OrderStepper = require("../../Components/OrderStepper");

var _reactRelay = require("react-relay");

var _ConditionsOfSaleDisclaimer = require("../../Components/ConditionsOfSaleDisclaimer");

var _ShippingSummaryItem = require("../../Components/ShippingSummaryItem");

var _TransactionDetailsSummaryItem = require("../../Components/TransactionDetailsSummaryItem");

var _Dialogs = require("../../Dialogs");

var _commitMutation = require("../../Utils/commitMutation");

var _trackPageViewWrapper = require("../../Utils/trackPageViewWrapper");

var _CountdownTimer = require("../../../../Components/v2/CountdownTimer");

var _get = require("../../../../Utils/get");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _ArtworkSummaryItem = require("../../Components/ArtworkSummaryItem");

var _CreditCardSummaryItem = require("../../Components/CreditCardSummaryItem");

var _graphql, _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

var logger = (0, _logger.default)("Order/Routes/Offer/index.tsx");
var Accept = (_dec = (0, _Analytics.track)(), _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(Accept, _Component);

  function Accept() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Accept);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Accept)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
              return _this.acceptOffer();

            case 3:
              orderOrError = _context.sent.commerceBuyerAcceptOffer.orderOrError;

              if (!orderOrError.error) {
                _context.next = 7;
                break;
              }

              _this.handleAcceptError(orderOrError.error);

              return _context.abrupt("return");

            case 7:
              _this.props.router.push("/orders/".concat(_this.props.order.id, "/status"));

              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              logger.error(_context.t0);

              _this.props.dialog.showErrorDialog();

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "onChangeResponse", function () {
      var order = _this.props.order;

      _this.props.router.push("/orders/".concat(order.id, "/respond"));
    });

    return _this;
  }

  _createClass(Accept, [{
    key: "acceptOffer",
    value: function acceptOffer() {
      return this.props.commitMutation({
        variables: {
          input: {
            offerId: this.props.order.lastOffer.id
          }
        },
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/AcceptOfferMutation.graphql");

          if (node.hash && node.hash !== "340d46f4243b3decb0fafc4064a9d805") {
            console.error("The definition of 'AcceptOfferMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/AcceptOfferMutation.graphql");
        })
      });
    }
  }, {
    key: "handleAcceptError",
    value: function () {
      var _handleAcceptError = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(error) {
        var parsedData;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logger.error(error);
                _context2.t0 = error.code;
                _context2.next = _context2.t0 === "capture_failed" ? 4 : _context2.t0 === "insufficient_inventory" ? 7 : 11;
                break;

              case 4:
                parsedData = (0, _get.get)(error, function (e) {
                  return JSON.parse(e.data);
                }, {}); // https://stripe.com/docs/declines/codes

                if (parsedData.decline_code === "insufficient_funds") {
                  this.showCardFailureDialog({
                    title: "Insufficient funds",
                    message: "There aren’t enough funds available on the card you provided. Please use a new card. Alternatively, contact your card provider, then press “Submit” again."
                  });
                } else {
                  this.showCardFailureDialog({
                    title: "Charge failed",
                    message: "Payment authorization has been declined. Please contact your card provider, then press “Submit” again. Alternatively, use a new card."
                  });
                }

                return _context2.abrupt("break", 12);

              case 7:
                _context2.next = 9;
                return this.props.dialog.showErrorDialog({
                  title: "Not available",
                  message: "Sorry, the work is no longer available."
                });

              case 9:
                this.routeToArtistPage();
                return _context2.abrupt("break", 12);

              case 11:
                this.props.dialog.showErrorDialog();

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleAcceptError(_x) {
        return _handleAcceptError.apply(this, arguments);
      };
    }()
  }, {
    key: "showCardFailureDialog",
    value: function () {
      var _showCardFailureDialog = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(props) {
        var _ref2, confirmed;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.props.dialog.showConfirmDialog(_objectSpread({}, props, {
                  cancelButtonText: "OK",
                  confirmButtonText: "Use new card"
                }));

              case 2:
                _ref2 = _context3.sent;
                confirmed = _ref2.confirmed;

                if (confirmed) {
                  this.props.router.push("/orders/".concat(this.props.order.id, "/payment/new"));
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function showCardFailureDialog(_x2) {
        return _showCardFailureDialog.apply(this, arguments);
      };
    }()
  }, {
    key: "artistId",
    value: function artistId() {
      return (0, _get.get)(this.props.order, function (o) {
        return o.lineItems.edges[0].node.artwork.artists[0].id;
      });
    }
  }, {
    key: "routeToArtistPage",
    value: function routeToArtistPage() {
      var artistId = this.artistId(); // Don't confirm whether or not you want to leave the page

      this.props.route.onTransition = function () {
        return null;
      };

      window.location.assign("/artist/".concat(artistId));
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
        }), _react.default.createElement(_TransactionDetailsSummaryItem.TransactionDetailsSummaryItemFragmentContainer, {
          order: order,
          title: "Accept seller's offer",
          useLastSubmittedOffer: true,
          onChange: this.onChangeResponse
        })), _react.default.createElement(_palette.Spacer, {
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
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, function (className) {
          return _react.default.createElement(_ArtworkSummaryItem.ArtworkSummaryItemFragmentContainer, {
            className: className,
            order: order
          });
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
        })), _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
          mb: 2
        }), _react.default.createElement(_palette.Button, {
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

  return Accept;
}(_react.Component), _temp)) || _class);
exports.Accept = Accept;
var AcceptFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _commitMutation.injectCommitMutation)((0, _Dialogs.injectDialog)((0, _trackPageViewWrapper.trackPageViewWrapper)(Accept))), {
  order: function order() {
    var node = require("../../../../__generated__/Accept_order.graphql");

    if (node.hash && node.hash !== "1a35d53ea28433c579c751209eb1f621") {
      console.error("The definition of 'Accept_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Accept_order.graphql");
  }
});
exports.AcceptFragmentContainer = AcceptFragmentContainer;
//# sourceMappingURL=index.js.map