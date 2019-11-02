"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.bind");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _AddressForm = require("../../Apps/Order/Components/AddressForm");

var _CreditCardInput = require("../../Apps/Order/Components/CreditCardInput");

var _formValidators = require("../../Apps/Order/Utils/formValidators");

var _ErrorModal = require("../Modal/ErrorModal");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _reactStripeElements = require("react-stripe-elements");

var _relayRuntime = require("relay-runtime");

var _errors = require("../../Utils/errors");

var _logger = _interopRequireDefault(require("../../Utils/logger"));

var _Responsive = require("../../Utils/Responsive");

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logger = (0, _logger.default)("Components/Payment/PaymentForm.tsx");

var PaymentForm =
/*#__PURE__*/
function (_Component) {
  _inherits(PaymentForm, _Component);

  function PaymentForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PaymentForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaymentForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "cardElement", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      address: _objectSpread({}, _AddressForm.emptyAddress, {
        country: "US"
      }),
      hideBillingAddress: true,
      error: null,
      isCommittingMutation: false,
      isErrorModalOpen: false,
      errorModalMessage: null,
      addressErrors: {},
      addressTouched: {}
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function () {
      var billingAddress = _this.getSelectedBillingAddress();

      var me = _this.props.me;

      _this.setState({
        isCommittingMutation: true
      }, function () {
        var _validateAddress = (0, _formValidators.validateAddress)(_this.state.address),
            errors = _validateAddress.errors,
            hasErrors = _validateAddress.hasErrors;

        if (hasErrors) {
          _this.setState({
            isCommittingMutation: false,
            addressErrors: errors,
            addressTouched: _this.touchedAddress
          });

          return;
        }

        _this.props.stripe.createToken(billingAddress).then(function (_ref) {
          var error = _ref.error,
              token = _ref.token;

          if (error) {
            _this.setState({
              error: error,
              isCommittingMutation: false
            });
          } else {
            _this.createCreditCard({
              token: token.id,
              me: me
            });
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onCloseModal", function () {
      _this.setState({
        isErrorModalOpen: false
      });
    });

    return _this;
  }

  _createClass(PaymentForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          error = _this$state.error,
          isCommittingMutation = _this$state.isCommittingMutation;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Responsive, null, function (_ref2) {
        var xs = _ref2.xs;
        return _react.default.createElement(_palette.Flex, {
          flexDirection: xs ? "column" : "row"
        }, _react.default.createElement(_palette.Box, {
          width: "100%",
          maxWidth: 542
        }, _react.default.createElement(_palette.Join, {
          separator: _react.default.createElement(_palette.Spacer, {
            mb: 3
          })
        }, _react.default.createElement(_palette.Flex, {
          flexDirection: "column"
        }, _react.default.createElement(_palette.Serif, {
          mb: 1,
          size: "3t",
          color: "black100",
          lineHeight: "1.1em"
        }, "Credit Card"), _react.default.createElement(_CreditCardInput.CreditCardInput, {
          error: error,
          onChange: function onChange(response) {
            return _this2.setState({
              error: response.error
            });
          },
          ref: function ref(el) {
            return _this2.cardElement = el;
          }
        })), _react.default.createElement(_AddressForm.AddressForm, {
          value: _this2.state.address,
          onChange: function onChange(address) {
            return _this2.setState({
              address: address
            });
          },
          errors: _this2.state.addressErrors,
          touched: _this2.state.addressTouched,
          billing: true
        }), _react.default.createElement(_palette.Button, {
          size: "large",
          width: "100%",
          onClick: _this2.onSubmit,
          loading: isCommittingMutation
        }, "Submit")), _react.default.createElement(_palette.Spacer, {
          mb: 3
        })));
      }), _react.default.createElement(_ErrorModal.ErrorModal, {
        onClose: this.onCloseModal,
        show: this.state.isErrorModalOpen,
        contactEmail: "support@artsy.net",
        detailText: this.state.errorModalMessage
      }));
    }
  }, {
    key: "getSelectedBillingAddress",
    value: function getSelectedBillingAddress() {
      var _this$state$address = this.state.address,
          name = _this$state$address.name,
          addressLine1 = _this$state$address.addressLine1,
          addressLine2 = _this$state$address.addressLine2,
          city = _this$state$address.city,
          region = _this$state$address.region,
          postalCode = _this$state$address.postalCode,
          country = _this$state$address.country;
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
    key: "onCreditCardAdded",
    value: function onCreditCardAdded(me, store, data) {
      var creditCardOrError = data.createCreditCard.creditCardOrError; // Explicitly update the relay store to be aware of the new credit card

      if (creditCardOrError.creditCardEdge) {
        var meStore = store.get(me.__id);

        var connection = _relayRuntime.ConnectionHandler.getConnection(meStore, "UserSettingsPayments_creditCards");

        var mutationPayload = store.getRootField("createCreditCard");
        var creditCardOrErrorEdge = mutationPayload.getLinkedRecord("creditCardOrError");
        var creditCardEdge = creditCardOrErrorEdge.getLinkedRecord("creditCardEdge");

        _relayRuntime.ConnectionHandler.insertEdgeAfter(connection, creditCardEdge);
      }
    }
  }, {
    key: "createCreditCard",
    value: function createCreditCard(_ref3) {
      var _this3 = this;

      var token = _ref3.token,
          me = _ref3.me;
      (0, _reactRelay.commitMutation)(this.props.relay.environment, {
        onCompleted: function onCompleted(data, errors) {
          var creditCardOrError = data.createCreditCard.creditCardOrError;

          if (creditCardOrError.creditCardEdge) {
            _this3.setState({
              isCommittingMutation: false,
              address: _objectSpread({}, _AddressForm.emptyAddress, {
                country: "US"
              }),
              addressErrors: {},
              addressTouched: {}
            });

            _this3.cardElement && _this3.cardElement.cardInputElement.clear();
            window.scrollTo(0, 0);
          } else {
            if (errors) {
              errors.forEach(_this3.onMutationError.bind(_this3));
            } else {
              var mutationError = creditCardOrError.mutationError;

              _this3.onMutationError(new _errors.ErrorWithMetadata(mutationError.message, mutationError), mutationError.detail);
            }
          }
        },
        onError: this.onMutationError.bind(this),
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../__generated__/PaymentFormCreateCreditCardMutation.graphql");

          if (node.hash && node.hash !== "266bd36fb2a8d14d096a1ff7385926a1") {
            console.error("The definition of 'PaymentFormCreateCreditCardMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../__generated__/PaymentFormCreateCreditCardMutation.graphql");
        }),
        variables: {
          input: {
            token: token
          }
        },
        updater: function updater(store, data) {
          return _this3.onCreditCardAdded(me, store, data);
        }
      });
    }
  }, {
    key: "onMutationError",
    value: function onMutationError(error, errorModalMessage) {
      logger.error(error);
      this.setState({
        isCommittingMutation: false,
        isErrorModalOpen: true,
        errorModalMessage: errorModalMessage
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

  return PaymentForm;
}(_react.Component);

var _default = (0, _reactStripeElements.injectStripe)(PaymentForm);

exports.default = _default;
//# sourceMappingURL=PaymentForm.js.map