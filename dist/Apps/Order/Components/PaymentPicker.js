"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentPickerFragmentContainer = exports.PaymentPicker = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.array.some");

require("core-js/modules/es6.array.map");

require("regenerator-runtime/runtime");

var _AddressForm = require("./AddressForm");

var _CreditCardInput = require("./CreditCardInput");

var _formValidators = require("../Utils/formValidators");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _reactStripeElements = require("react-stripe-elements");

var _palette = require("@artsy/palette");

var _CreditCardDetails = require("./CreditCardDetails");

var _graphql, _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var PaymentPicker = (_dec = (0, _Analytics.track)(function (props, state, args) {
  var showBillingAddress = !args[0];

  if (showBillingAddress && props.order.state === "PENDING") {
    return {
      action_type: Schema.ActionType.Click,
      subject: Schema.Subject.BNMOUseShippingAddress,
      flow: "buy now",
      type: "checkbox"
    };
  }
}), (_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PaymentPicker, _React$Component);

  function PaymentPicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaymentPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaymentPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hideBillingAddress: true,
      stripeError: null,
      isCreatingStripeToken: false,
      address: _this.startingAddress(),
      addressErrors: {},
      addressTouched: {},
      creditCardSelection: _this.getInitialCreditCardSelection(),
      saveNewCreditCard: true
    });

    _defineProperty(_assertThisInitialized(_this), "createStripeToken",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var stripeBillingAddress;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              _this.setState({
                isCreatingStripeToken: true
              });

              stripeBillingAddress = _this.getStripeBillingAddress();
              _context.next = 5;
              return _this.props.stripe.createToken(stripeBillingAddress);

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
              _context.prev = 6;

              _this.setState({
                isCreatingStripeToken: false
              });

              return _context.finish(6);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0,, 6, 9]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "getCreditCardId",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var _this$state, creditCardSelection, saveNewCreditCard, _validateAddress, errors, hasErrors, stripeResult, creditCardOrError;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$state = _this.state, creditCardSelection = _this$state.creditCardSelection, saveNewCreditCard = _this$state.saveNewCreditCard;

              if (!(creditCardSelection.type === "existing")) {
                _context2.next = 3;
                break;
              }

              return _context2.abrupt("return", {
                type: "success",
                creditCardId: creditCardSelection.id
              });

            case 3:
              if (!_this.needsAddress()) {
                _context2.next = 8;
                break;
              }

              _validateAddress = (0, _formValidators.validateAddress)(_this.state.address), errors = _validateAddress.errors, hasErrors = _validateAddress.hasErrors;

              if (!hasErrors) {
                _context2.next = 8;
                break;
              }

              _this.setState({
                addressErrors: errors,
                addressTouched: _this.touchedAddress
              });

              return _context2.abrupt("return", {
                type: "invalid_form"
              });

            case 8:
              _context2.next = 10;
              return _this.createStripeToken();

            case 10:
              stripeResult = _context2.sent;

              if (!stripeResult.error) {
                _context2.next = 14;
                break;
              }

              _this.setState({
                stripeError: stripeResult.error
              });

              return _context2.abrupt("return", {
                type: "invalid_form"
              });

            case 14:
              _context2.next = 16;
              return _this.createCreditCard({
                input: {
                  token: stripeResult.token.id,
                  oneTimeUse: !saveNewCreditCard
                }
              });

            case 16:
              creditCardOrError = _context2.sent.createCreditCard.creditCardOrError;

              if (!(creditCardOrError.mutationError && creditCardOrError.mutationError.detail)) {
                _context2.next = 21;
                break;
              }

              return _context2.abrupt("return", {
                type: "error",
                error: creditCardOrError.mutationError.detail
              });

            case 21:
              if (!(creditCardOrError.mutationError && creditCardOrError.mutationError.message)) {
                _context2.next = 25;
                break;
              }

              return _context2.abrupt("return", {
                type: "internal_error",
                error: creditCardOrError.mutationError.message
              });

            case 25:
              return _context2.abrupt("return", {
                type: "success",
                creditCardId: creditCardOrError.creditCard.id
              });

            case 26:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "onAddressChange", function (address, key) {
      var _validateAddress2 = (0, _formValidators.validateAddress)(address),
          errors = _validateAddress2.errors;

      _this.setState({
        address: address,
        addressErrors: _objectSpread({}, _this.state.addressErrors, _defineProperty({}, key, errors[key])),
        addressTouched: _objectSpread({}, _this.state.addressTouched, _defineProperty({}, key, true))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isPickup", function () {
      return _this.props.order.requestedFulfillment.__typename === "CommercePickup";
    });

    _defineProperty(_assertThisInitialized(_this), "needsAddress", function () {
      return _this.isPickup() || !_this.state.hideBillingAddress;
    });

    return _this;
  }

  _createClass(PaymentPicker, [{
    key: "getInitialCreditCardSelection",
    value: function getInitialCreditCardSelection() {
      if (this.props.order.creditCard) {
        return {
          type: "existing",
          id: this.props.order.creditCard.id
        };
      } else {
        return this.props.me.creditCards.edges.length ? {
          type: "existing",
          id: this.props.me.creditCards.edges[0].node.id
        } : {
          type: "new"
        };
      }
    }
  }, {
    key: "startingAddress",
    value: function startingAddress() {
      return _objectSpread({}, _AddressForm.emptyAddress, {
        country: "US"
      });
    }
  }, {
    key: "handleChangeHideBillingAddress",
    value: function handleChangeHideBillingAddress(hideBillingAddress) {
      if (!hideBillingAddress) {
        this.setState({
          address: _objectSpread({}, _AddressForm.emptyAddress, {
            country: "US"
          })
        });
      }

      this.setState({
        hideBillingAddress: hideBillingAddress
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          stripeError = _this$state2.stripeError,
          address = _this$state2.address,
          addressErrors = _this$state2.addressErrors,
          addressTouched = _this$state2.addressTouched,
          creditCardSelection = _this$state2.creditCardSelection;
      var creditCards = this.props.me.creditCards;
      var orderCard = this.props.order.creditCard;
      var creditCardsArray = creditCards.edges.map(function (e) {
        return e.node;
      }); // only add the unsaved card to the cards array if it exists and is not already there

      if (orderCard != null && !creditCardsArray.some(function (card) {
        return card.id === orderCard.id;
      })) {
        creditCardsArray.unshift(orderCard);
      }

      var userHasExistingCards = creditCardsArray.length > 0;
      return _react.default.createElement(_react.default.Fragment, null, userHasExistingCards && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.RadioGroup, {
        onSelect: function onSelect(val) {
          if (val === "new") {
            _this2.setState({
              creditCardSelection: {
                type: "new"
              }
            });
          } else {
            _this2.setState({
              creditCardSelection: {
                type: "existing",
                id: val
              }
            });
          }
        },
        defaultValue: creditCardSelection.type === "new" ? "new" : creditCardSelection.id
      }, creditCardsArray.map(function (e) {
        var id = e.id,
            creditCardProps = _objectWithoutProperties(e, ["id"]);

        return _react.default.createElement(_palette.BorderedRadio, {
          value: id,
          key: id
        }, _react.default.createElement(_CreditCardDetails.CreditCardDetails, _extends({
          responsive: false
        }, creditCardProps)));
      }).concat([_react.default.createElement(_palette.BorderedRadio, {
        "data-test": "AddNewCard",
        value: "new",
        key: "new",
        selected: creditCardSelection.type === "new"
      }, "Add another card.")])), _react.default.createElement(_palette.Spacer, {
        mb: 1
      }), _react.default.createElement(_palette.Sans, {
        size: "2"
      }, _react.default.createElement(_palette.Link, {
        href: "/user/payments",
        target: "_blank"
      }, "Manage cards"))), _react.default.createElement(_palette.Collapse, {
        open: this.state.creditCardSelection.type === "new"
      }, userHasExistingCards && _react.default.createElement(_palette.Spacer, {
        mb: 3
      }), _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_palette.Serif, {
        mb: 1,
        size: "3t",
        color: "black100",
        lineHeight: "1.1em"
      }, "Credit card"), _react.default.createElement(_CreditCardInput.CreditCardInput, {
        error: stripeError,
        onChange: function onChange(response) {
          _this2.setState({
            stripeError: response.error
          });
        }
      }), !this.isPickup() && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
        mb: 2
      }), _react.default.createElement(_palette.Checkbox, {
        selected: this.state.hideBillingAddress,
        onSelect: this.handleChangeHideBillingAddress.bind(this),
        "data-test": "BillingAndShippingAreTheSame"
      }, "Billing and shipping addresses are the same.")), _react.default.createElement(_palette.Collapse, {
        open: this.needsAddress()
      }, _react.default.createElement(_palette.Spacer, {
        mb: 2
      }), _react.default.createElement(_AddressForm.AddressForm, {
        value: address,
        errors: addressErrors,
        touched: addressTouched,
        onChange: this.onAddressChange,
        billing: true
      }), _react.default.createElement(_palette.Spacer, {
        mb: 2
      })), _react.default.createElement(_palette.Checkbox, {
        "data-test": "SaveNewCreditCard",
        selected: this.state.saveNewCreditCard,
        onSelect: function onSelect() {
          return _this2.setState({
            saveNewCreditCard: !_this2.state.saveNewCreditCard
          });
        }
      }, "Save credit card for later use."))));
    }
  }, {
    key: "getStripeBillingAddress",
    value: function getStripeBillingAddress() {
      var selectedBillingAddress = this.needsAddress() ? this.state.address : this.props.order.requestedFulfillment;
      var name = selectedBillingAddress.name,
          addressLine1 = selectedBillingAddress.addressLine1,
          addressLine2 = selectedBillingAddress.addressLine2,
          city = selectedBillingAddress.city,
          region = selectedBillingAddress.region,
          postalCode = selectedBillingAddress.postalCode,
          country = selectedBillingAddress.country;
      return {
        name: name,
        address_line1: addressLine1,
        address_line2: addressLine2,
        address_city: city,
        address_state: region,
        address_zip: postalCode,
        address_country: country
      };
    }
  }, {
    key: "createCreditCard",
    value: function createCreditCard(variables) {
      return this.props.commitMutation({
        variables: variables,
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../__generated__/PaymentPickerCreateCreditCardMutation.graphql");

          if (node.hash && node.hash !== "950b1048ff38ca844437401bfbbdceef") {
            console.error("The definition of 'PaymentPickerCreateCreditCardMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../__generated__/PaymentPickerCreateCreditCardMutation.graphql");
        })
      });
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

  return PaymentPicker;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class.prototype, "handleChangeHideBillingAddress", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "handleChangeHideBillingAddress"), _class.prototype)), _class)); // Our mess of HOC wrappers is not amenable to ref forwarding, so to expose a
// ref to the PaymentPicker instance (for getCreditCardId) we'll add an
// `innerRef` prop which gets sneakily injected here

exports.PaymentPicker = PaymentPicker;

var PaymentPickerWithInnerRef = function PaymentPickerWithInnerRef(_ref3) {
  var innerRef = _ref3.innerRef,
      props = _objectWithoutProperties(_ref3, ["innerRef"]);

  return _react.default.createElement(PaymentPicker, _extends({
    ref: innerRef
  }, props));
};

var PaymentPickerFragmentContainer = (0, _reactRelay.createFragmentContainer)( // 😭 HOCs
(0, _reactStripeElements.injectStripe)((0, _Analytics.track)()(PaymentPickerWithInnerRef)), {
  me: function me() {
    var node = require("../../../__generated__/PaymentPicker_me.graphql");

    if (node.hash && node.hash !== "f9e6c519e41c5ce091e0ee36b1632f01") {
      console.error("The definition of 'PaymentPicker_me' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/PaymentPicker_me.graphql");
  },
  order: function order() {
    var node = require("../../../__generated__/PaymentPicker_order.graphql");

    if (node.hash && node.hash !== "10de849c454fc14d282a16c6e00693aa") {
      console.error("The definition of 'PaymentPicker_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/PaymentPicker_order.graphql");
  }
});
exports.PaymentPickerFragmentContainer = PaymentPickerFragmentContainer;
//# sourceMappingURL=PaymentPicker.js.map