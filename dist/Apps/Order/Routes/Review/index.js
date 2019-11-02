"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewFragmentContainer = exports.ReviewRoute = void 0;

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

require("regenerator-runtime/runtime");

var _palette = require("@artsy/palette");

var _HorizontalPadding = require("../../../Components/HorizontalPadding");

var _ArtworkSummaryItem = require("../../Components/ArtworkSummaryItem");

var _ConditionsOfSaleDisclaimer = require("../../Components/ConditionsOfSaleDisclaimer");

var _ItemReview = require("../../Components/ItemReview");

var _OrderStepper = require("../../Components/OrderStepper");

var _ShippingSummaryItem = require("../../Components/ShippingSummaryItem");

var _TransactionDetailsSummaryItem = require("../../Components/TransactionDetailsSummaryItem");

var _Dialogs = require("../../Dialogs");

var _commitMutation = require("../../Utils/commitMutation");

var _trackPageViewWrapper = require("../../Utils/trackPageViewWrapper");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _get = require("../../../../Utils/get");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _Responsive = require("../../../../Utils/Responsive");

var _CreditCardSummaryItem = require("../../Components/CreditCardSummaryItem");

var _OfferSummaryItem = require("../../Components/OfferSummaryItem");

var _TwoColumnLayout = require("../../Components/TwoColumnLayout");

var _graphql, _graphql2, _dec, _dec2, _class, _class2, _temp;

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

var logger = (0, _logger.default)("Order/Routes/Review/index.tsx");
var ReviewRoute = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props) {
  return {
    action_type: props.order.mode === "BUY" ? Schema.ActionType.SubmittedOrder : Schema.ActionType.SubmittedOffer,
    order_id: props.order.id,
    products: [{
      product_id: props.order.lineItems.edges[0].node.artwork._id,
      quantity: 1,
      price: props.order.itemsTotal
    }]
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(ReviewRoute, _Component);

  function ReviewRoute() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ReviewRoute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReviewRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      stripe: null
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeOffer", function () {
      _this.props.router.push("/orders/".concat(_this.props.order.id, "/offer"));
    });

    _defineProperty(_assertThisInitialized(_this), "onChangePayment", function () {
      _this.props.router.push("/orders/".concat(_this.props.order.id, "/payment"));
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeShipping", function () {
      _this.props.router.push("/orders/".concat(_this.props.order.id, "/shipping"));
    });

    return _this;
  }

  _createClass(ReviewRoute, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (window.Stripe) {
        this.setState({
          stripe: window.Stripe(_sharify.data.STRIPE_PUBLISHABLE_KEY)
        });
      } else {
        document.querySelector("#stripe-js").addEventListener("load", function () {
          // Create Stripe instance once Stripe.js loads
          _this2.setState({
            stripe: window.Stripe(_sharify.data.STRIPE_PUBLISHABLE_KEY)
          });
        });
      }
    }
  }, {
    key: "onSubmit",
    value: function () {
      var _onSubmit = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(setupIntentId) {
        var _this3 = this;

        var orderOrError;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (!(this.props.order.mode === "BUY")) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this.submitBuyOrder();

              case 4:
                _context.t0 = _context.sent.commerceSubmitOrder.orderOrError;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return this.submitOffer(setupIntentId);

              case 9:
                _context.t0 = _context.sent.commerceSubmitOrderWithOffer.orderOrError;

              case 10:
                orderOrError = _context.t0;

                if (!orderOrError.error) {
                  _context.next = 16;
                  break;
                }

                this.handleSubmitError(orderOrError.error);
                return _context.abrupt("return");

              case 16:
                if (this.props.order.mode === "BUY" && orderOrError.actionData && orderOrError.actionData.clientSecret) {
                  this.state.stripe.handleCardAction(orderOrError.actionData.clientSecret).then(function (result) {
                    if (result.error) {
                      _this3.props.dialog.showErrorDialog({
                        title: "An error occurred",
                        message: result.error.message
                      });

                      return;
                    } else {
                      _this3.onSubmit();
                    }
                  });
                } else if (this.props.order.mode === "OFFER" && orderOrError.actionData && orderOrError.actionData.clientSecret) {
                  this.state.stripe.handleCardSetup(orderOrError.actionData.clientSecret).then(function (result) {
                    if (result.error) {
                      _this3.props.dialog.showErrorDialog({
                        title: "An error occurred",
                        message: result.error.message
                      });

                      return;
                    } else {
                      _this3.onSubmit(result.setupIntent.id);
                    }
                  });
                } else {
                  this.props.router.push("/orders/".concat(this.props.order.id, "/status"));
                }

              case 17:
                _context.next = 23;
                break;

              case 19:
                _context.prev = 19;
                _context.t1 = _context["catch"](0);
                logger.error(_context.t1);
                this.props.dialog.showErrorDialog();

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 19]]);
      }));

      return function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      };
    }()
  }, {
    key: "submitBuyOrder",
    value: function submitBuyOrder() {
      return this.props.commitMutation({
        variables: {
          input: {
            id: this.props.order.id
          }
        },
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/ReviewSubmitOrderMutation.graphql");

          if (node.hash && node.hash !== "1a8ad2c7b3853aa7038088ef7aab47b3") {
            console.error("The definition of 'ReviewSubmitOrderMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/ReviewSubmitOrderMutation.graphql");
        })
      });
    }
  }, {
    key: "submitOffer",
    value: function submitOffer(setupIntentId) {
      return this.props.commitMutation({
        variables: {
          input: {
            offerId: this.props.order.myLastOffer.id,
            confirmedSetupIntentId: setupIntentId
          }
        },
        mutation: _graphql2 || (_graphql2 = function _graphql2() {
          var node = require("../../../../__generated__/ReviewSubmitOfferOrderMutation.graphql");

          if (node.hash && node.hash !== "cf5774c904680b91ec8f15d2bef60471") {
            console.error("The definition of 'ReviewSubmitOfferOrderMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/ReviewSubmitOfferOrderMutation.graphql");
        })
      });
    }
  }, {
    key: "handleSubmitError",
    value: function () {
      var _handleSubmitError = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(error) {
        var artistId, parsedData, _data;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logger.error(error);
                _context2.t0 = error.code;
                _context2.next = _context2.t0 === "missing_required_info" ? 4 : _context2.t0 === "insufficient_inventory" ? 6 : _context2.t0 === "failed_charge_authorize" ? 11 : _context2.t0 === "charge_authorization_failed" ? 14 : _context2.t0 === "payment_method_confirmation_failed" ? 24 : _context2.t0 === "artwork_version_mismatch" ? 27 : 31;
                break;

              case 4:
                this.props.dialog.showErrorDialog({
                  title: "Missing information",
                  message: "Please review and update your shipping and/or payment details and try again."
                });
                return _context2.abrupt("break", 34);

              case 6:
                _context2.next = 8;
                return this.props.dialog.showErrorDialog({
                  title: "Not available",
                  message: "Sorry, the work is no longer available."
                });

              case 8:
                artistId = this.artistId();

                if (artistId) {
                  this.routeToArtistPage();
                }

                return _context2.abrupt("break", 34);

              case 11:
                parsedData = JSON.parse(error.data);
                this.props.dialog.showErrorDialog({
                  title: "An error occurred",
                  message: parsedData.failure_message
                });
                return _context2.abrupt("break", 34);

              case 14:
                _data = {};

                if (error.data) {
                  _data = JSON.parse(error.data);
                }

                if (!(_data.decline_code === "insufficient_funds")) {
                  _context2.next = 21;
                  break;
                }

                _context2.next = 19;
                return this.props.dialog.showErrorDialog({
                  title: "Insufficient funds",
                  message: "There aren't enough funds available on the payment methods you provided. Please contact your card provider or try another card."
                });

              case 19:
                _context2.next = 23;
                break;

              case 21:
                _context2.next = 23;
                return this.props.dialog.showErrorDialog({
                  title: "Charge failed",
                  message: "Payment authorization has been declined. Please contact your card provider and try again."
                });

              case 23:
                return _context2.abrupt("break", 34);

              case 24:
                _context2.next = 26;
                return this.props.dialog.showErrorDialog({
                  title: "Your card was declined",
                  message: "We couldn't authorize your credit card. Please enter another payment method or contact your bank for more information."
                });

              case 26:
                return _context2.abrupt("break", 34);

              case 27:
                _context2.next = 29;
                return this.props.dialog.showErrorDialog({
                  title: "Work has been updated",
                  message: "Something about the work changed since you started checkout. Please review the work before submitting your order."
                });

              case 29:
                this.routeToArtworkPage();
                return _context2.abrupt("break", 34);

              case 31:
                logger.error(error);
                this.props.dialog.showErrorDialog();
                return _context2.abrupt("break", 34);

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleSubmitError(_x2) {
        return _handleSubmitError.apply(this, arguments);
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
    key: "routeToArtworkPage",
    value: function routeToArtworkPage() {
      var artworkId = (0, _get.get)(this.props.order, function (o) {
        return o.lineItems.edges[0].node.artwork.id;
      }); // Don't confirm whether or not you want to leave the page

      this.props.route.onTransition = function () {
        return null;
      };

      window.location.assign("/artwork/".concat(artworkId));
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
      var _this4 = this;

      var _this$props = this.props,
          order = _this$props.order,
          isCommittingMutation = _this$props.isCommittingMutation;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, {
        px: [0, 4]
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_OrderStepper.OrderStepper, {
        currentStep: "Review",
        steps: order.mode === "OFFER" ? _OrderStepper.offerFlowSteps : _OrderStepper.buyNowFlowSteps
      })))), _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_TwoColumnLayout.TwoColumnLayout, {
        Content: _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Join, {
          separator: _react.default.createElement(_palette.Spacer, {
            mb: 3
          })
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column",
          mb: [2, 3]
        }, order.mode === "OFFER" && _react.default.createElement(_OfferSummaryItem.OfferSummaryItemFragmentContainer, {
          order: order,
          onChange: this.onChangeOffer
        }), _react.default.createElement(_ShippingSummaryItem.ShippingSummaryItemFragmentContainer, {
          order: order,
          onChange: this.onChangeShipping
        }), _react.default.createElement(_CreditCardSummaryItem.CreditCardSummaryItemFragmentContainer, {
          order: order,
          onChange: this.onChangePayment,
          title: "Payment method"
        })), _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, _react.default.createElement(_ItemReview.ItemReviewFragmentContainer, {
          lineItem: order.lineItems.edges[0].node
        }), _react.default.createElement(_palette.Spacer, {
          mb: 3
        }), _react.default.createElement(_palette.Button, {
          size: "large",
          width: "100%",
          loading: isCommittingMutation,
          onClick: function onClick() {
            return _this4.onSubmit();
          }
        }, "Submit"), _react.default.createElement(_palette.Spacer, {
          mb: 2
        }), _react.default.createElement(_ConditionsOfSaleDisclaimer.ConditionsOfSaleDisclaimer, {
          textAlign: "center"
        })))),
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
        }, _react.default.createElement(_palette.Button, {
          size: "large",
          width: "100%",
          loading: isCommittingMutation,
          onClick: function onClick() {
            return _this4.onSubmit();
          }
        }, "Submit"), _react.default.createElement(_palette.Spacer, {
          mb: 2
        }), _react.default.createElement(_ConditionsOfSaleDisclaimer.ConditionsOfSaleDisclaimer, null)))
      })));
    }
  }]);

  return ReviewRoute;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onSubmit", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onSubmit"), _class2.prototype)), _class2)) || _class);
exports.ReviewRoute = ReviewRoute;
var ReviewFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _trackPageViewWrapper.trackPageViewWrapper)((0, _commitMutation.injectCommitMutation)((0, _Dialogs.injectDialog)(ReviewRoute))), {
  order: function order() {
    var node = require("../../../../__generated__/Review_order.graphql");

    if (node.hash && node.hash !== "b2f1f8fd334de38526bf166c54eccae9") {
      console.error("The definition of 'Review_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Review_order.graphql");
  }
});
exports.ReviewFragmentContainer = ReviewFragmentContainer;
//# sourceMappingURL=index.js.map