"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShippingFragmentContainer = exports.ShippingRoute = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.function.name");

require("regenerator-runtime/runtime");

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _palette = require("@artsy/palette");

var _HorizontalPadding = require("../../../Components/HorizontalPadding");

var _AddressForm = require("../../Components/AddressForm");

var _ArtworkSummaryItem = require("../../Components/ArtworkSummaryItem");

var _OrderStepper = require("../../Components/OrderStepper");

var _TransactionDetailsSummaryItem = require("../../Components/TransactionDetailsSummaryItem");

var _TwoColumnLayout = require("../../Components/TwoColumnLayout");

var _Dialogs = require("../../Dialogs");

var _commitMutation = require("../../Utils/commitMutation");

var _formValidators = require("../../Utils/formValidators");

var _trackPageViewWrapper = require("../../Utils/trackPageViewWrapper");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../../Utils/get");

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _Responsive = require("../../../../Utils/Responsive");

var _graphql, _dec, _dec2, _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var logger = (0, _logger.default)("Order/Routes/Shipping/index.tsx");
var ShippingRoute = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props, state, args) {
  return {
    action_type: Schema.ActionType.Click,
    subject: args[0] === "SHIP" ? Schema.Subject.BNMOProvideShipping : Schema.Subject.BNMOArrangePickup,
    flow: "buy now",
    type: "button"
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(ShippingRoute, _Component);

  function ShippingRoute() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ShippingRoute);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ShippingRoute)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      shippingOption: _this.props.order.requestedFulfillment && _this.props.order.requestedFulfillment.__typename !== "CommerceShip" ? "PICKUP" : "SHIP",
      address: _this.startingAddress,
      addressErrors: {},
      addressTouched: {}
    });

    _defineProperty(_assertThisInitialized(_this), "onContinueButtonPressed",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$state, address, shippingOption, _this$validateAddress, errors, hasErrors, orderOrError;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, address = _this$state.address, shippingOption = _this$state.shippingOption;

              if (!(shippingOption === "SHIP")) {
                _context.next = 6;
                break;
              }

              _this$validateAddress = _this.validateAddress(_this.state.address), errors = _this$validateAddress.errors, hasErrors = _this$validateAddress.hasErrors;

              if (!hasErrors) {
                _context.next = 6;
                break;
              }

              _this.setState({
                addressErrors: errors,
                addressTouched: _this.touchedAddress
              });

              return _context.abrupt("return");

            case 6:
              _context.prev = 6;
              _context.next = 9;
              return _this.setShipping({
                input: {
                  id: _this.props.order.id,
                  fulfillmentType: shippingOption,
                  shipping: address
                }
              });

            case 9:
              orderOrError = _context.sent.commerceSetShipping.orderOrError;

              if (!orderOrError.error) {
                _context.next = 13;
                break;
              }

              _this.handleSubmitError(orderOrError.error);

              return _context.abrupt("return");

            case 13:
              _this.props.router.push("/orders/".concat(_this.props.order.id, "/payment"));

              _context.next = 20;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](6);
              logger.error(_context.t0);

              _this.props.dialog.showErrorDialog();

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 16]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "onAddressChange", function (address, key) {
      var _this$validateAddress2 = _this.validateAddress(address),
          errors = _this$validateAddress2.errors;

      _this.setState({
        address: address,
        addressErrors: _objectSpread({}, _this.state.addressErrors, errors),
        addressTouched: _objectSpread({}, _this.state.addressTouched, _defineProperty({}, key, true))
      });
    });

    return _this;
  }

  _createClass(ShippingRoute, [{
    key: "setShipping",
    value: function setShipping(variables) {
      return this.props.commitMutation({
        variables: variables,
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/ShippingOrderAddressUpdateMutation.graphql");

          if (node.hash && node.hash !== "1bfae43b7ea5c08293230ffc1b06e0fc") {
            console.error("The definition of 'ShippingOrderAddressUpdateMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/ShippingOrderAddressUpdateMutation.graphql");
        })
      });
    }
  }, {
    key: "handleSubmitError",
    value: function handleSubmitError(error) {
      logger.error(error);
      var parsedData = (0, _get.get)(error, function (e) {
        return JSON.parse(e.data);
      }, {});

      if (error.code === "missing_region" || error.code === "missing_country" || error.code === "missing_postal_code") {
        this.props.dialog.showErrorDialog({
          title: "Invalid address",
          message: "There was an error processing your address. Please review and try again."
        });
      } else if (error.code === "unsupported_shipping_location" && parsedData.failure_code === "domestic_shipping_only") {
        this.props.dialog.showErrorDialog({
          title: "Can't ship to that address",
          message: "This work can only be shipped to the continental United States."
        });
      } else {
        this.props.dialog.showErrorDialog();
      }
    }
  }, {
    key: "validateAddress",
    value: function validateAddress(address) {
      var name = address.name,
          addressLine1 = address.addressLine1,
          city = address.city,
          region = address.region,
          country = address.country,
          postalCode = address.postalCode,
          phoneNumber = address.phoneNumber;
      var usOrCanada = country === "US" || country === "CA";
      var errors = {
        name: (0, _formValidators.validatePresence)(name),
        addressLine1: (0, _formValidators.validatePresence)(addressLine1),
        city: (0, _formValidators.validatePresence)(city),
        region: usOrCanada && (0, _formValidators.validatePresence)(region),
        country: (0, _formValidators.validatePresence)(country),
        postalCode: usOrCanada && (0, _formValidators.validatePresence)(postalCode),
        phoneNumber: (0, _formValidators.validatePresence)(phoneNumber)
      };
      var hasErrors = Object.keys(errors).filter(function (key) {
        return errors[key];
      }).length > 0;
      return {
        errors: errors,
        hasErrors: hasErrors
      };
    }
  }, {
    key: "onSelectShippingOption",
    value: function onSelectShippingOption(shippingOption) {
      this.setState({
        shippingOption: shippingOption
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          order = _this$props.order,
          isCommittingMutation = _this$props.isCommittingMutation;
      var _this$state2 = this.state,
          address = _this$state2.address,
          addressErrors = _this$state2.addressErrors,
          addressTouched = _this$state2.addressTouched;
      var artwork = (0, _get.get)(this.props, function (props) {
        return order.lineItems.edges[0].node.artwork;
      });
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_HorizontalPadding.HorizontalPadding, {
        px: [0, 4]
      }, _react.default.createElement(_palette.Row, null, _react.default.createElement(_palette.Col, null, _react.default.createElement(_OrderStepper.OrderStepper, {
        currentStep: "Shipping",
        steps: order.mode === "OFFER" ? _OrderStepper.offerFlowSteps : _OrderStepper.buyNowFlowSteps
      })))), _react.default.createElement(_HorizontalPadding.HorizontalPadding, null, _react.default.createElement(_TwoColumnLayout.TwoColumnLayout, {
        Content: _react.default.createElement(_palette.Flex, {
          flexDirection: "column",
          style: isCommittingMutation ? {
            pointerEvents: "none"
          } : {}
        }, artwork.pickup_available && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.RadioGroup, {
          onSelect: this.onSelectShippingOption.bind(this),
          defaultValue: this.state.shippingOption
        }, _react.default.createElement(_palette.BorderedRadio, {
          value: "SHIP",
          label: "Add shipping address"
        }), _react.default.createElement(_palette.BorderedRadio, {
          value: "PICKUP",
          label: "Arrange for pickup (free)"
        }, _react.default.createElement(_palette.Collapse, {
          open: this.state.shippingOption === "PICKUP"
        }, _react.default.createElement(_palette.Sans, {
          size: "2",
          color: "black60"
        }, "After your order is confirmed, a specialist will contact you within 2 business days to coordinate pickup.")))), _react.default.createElement(_palette.Spacer, {
          mb: 3
        })), _react.default.createElement(_palette.Collapse, {
          open: !artwork.pickup_available || this.state.shippingOption === "SHIP"
        }, _react.default.createElement(_AddressForm.AddressForm, {
          value: address,
          errors: addressErrors,
          touched: addressTouched,
          onChange: this.onAddressChange,
          domesticOnly: artwork.onlyShipsDomestically,
          shippingCountry: artwork.shippingCountry
        })), _react.default.createElement(_Responsive.Media, {
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
          order: order
        })), _react.default.createElement(_palette.Spacer, {
          mb: [2, 3]
        }), _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(_palette.Spacer, {
          mb: 3
        }), _react.default.createElement(_palette.Button, {
          onClick: this.onContinueButtonPressed,
          loading: isCommittingMutation,
          size: "large",
          width: "100%"
        }, "Continue")))
      })));
    }
  }, {
    key: "startingAddress",
    get: function get() {
      return _objectSpread({}, _AddressForm.emptyAddress, {
        country: "US"
      }, (0, _pick2.default)(this.props.order.requestedFulfillment, Object.keys(_AddressForm.emptyAddress)));
    }
  }, {
    key: "touchedAddress",
    get: function get() {
      return {
        name: true,
        country: true,
        postalCode: true,
        addressLine1: true,
        addressLine2: true,
        city: true,
        region: true,
        phoneNumber: true
      };
    }
  }]);

  return ShippingRoute;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "onSelectShippingOption", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "onSelectShippingOption"), _class2.prototype)), _class2)) || _class);
exports.ShippingRoute = ShippingRoute;
var ShippingFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _trackPageViewWrapper.trackPageViewWrapper)((0, _commitMutation.injectCommitMutation)((0, _Dialogs.injectDialog)(ShippingRoute))), {
  order: function order() {
    var node = require("../../../../__generated__/Shipping_order.graphql");

    if (node.hash && node.hash !== "7ae2c5fc71b9b498d4207c3533662985") {
      console.error("The definition of 'Shipping_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Shipping_order.graphql");
  }
});
exports.ShippingFragmentContainer = ShippingFragmentContainer;
//# sourceMappingURL=index.js.map