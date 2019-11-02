"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StripeWrappedRegistrationForm = exports.RegistrationForm = exports.StyledCardElement = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.function.name");

require("core-js/modules/es7.object.values");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.string.trim");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

var _palette = require("@artsy/palette");

var _AddressForm = require("../../Order/Components/AddressForm");

var _CreditCardInput = require("../../Order/Components/CreditCardInput");

var _ConditionsOfSaleCheckbox = require("../../../Components/Auction/ConditionsOfSaleCheckbox");

var _ErrorModal = require("../../../Components/Modal/ErrorModal");

var _formik = require("formik");

var _react = _interopRequireWildcard(require("react"));

var _reactStripeElements = require("react-stripe-elements");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Yup = _interopRequireWildcard(require("yup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StyledCardElement = (0, _styledComponents.default)(_reactStripeElements.CardElement).withConfig({
  displayName: "RegistrationForm__StyledCardElement",
  componentId: "sc-1p16xru-0"
})(["width:100%;padding:9px 10px;"]);
exports.StyledCardElement = StyledCardElement;

var InnerForm = function InnerForm(props) {
  var touched = props.touched,
      errors = props.errors,
      isSubmitting = props.isSubmitting,
      values = props.values,
      setFieldValue = props.setFieldValue,
      setFieldTouched = props.setFieldTouched;
  return _react.default.createElement(_formik.Form, null, _react.default.createElement(_palette.Box, {
    mt: 4
  }, _react.default.createElement(_palette.Box, {
    mb: 2
  }, _react.default.createElement(_palette.Serif, {
    size: "3t",
    mb: 0.5
  }, "Credit card"), _react.default.createElement(_CreditCardInput.CreditCardInput, {
    error: {
      message: errors.creditCard
    }
  }))), _react.default.createElement(_palette.Box, {
    mt: 4
  }, _react.default.createElement(_palette.Box, {
    mt: 2
  }, _react.default.createElement(_AddressForm.AddressForm, {
    value: values.address,
    onChange: function onChange(address, _key) {
      setFieldValue("address", address);
    },
    errors: errors.address,
    touched: touched.address,
    billing: true,
    showPhoneNumberInput: true
  }))), _react.default.createElement(_palette.Flex, {
    mt: 4,
    mb: 2,
    flexDirection: "column",
    justifyContent: "center"
  }, _react.default.createElement(_palette.Box, {
    mx: "auto"
  }, _react.default.createElement(_ConditionsOfSaleCheckbox.ConditionsOfSaleCheckbox, {
    selected: values.agreeToTerms,
    onSelect: function onSelect(value) {
      setFieldValue("agreeToTerms", value);
      setFieldTouched("agreeToTerms");
    }
  })), touched.agreeToTerms && errors.agreeToTerms && _react.default.createElement(_palette.Sans, {
    mt: 1,
    color: "red100",
    size: "2",
    textAlign: "center"
  }, errors.agreeToTerms)), _react.default.createElement(_palette.Button, _extends({
    mt: 1,
    size: "large",
    width: "100%",
    loading: isSubmitting
  }, {
    type: "submit"
  }), "Register"));
};

Yup.addMethod(Yup.string, "present", function (message) {
  var _this = this;

  return this.test("test-present", message, function (value) {
    return _this.trim().required(message).isValid(value);
  });
});
var validationSchema = Yup.object().shape({
  address: Yup.object({
    name: Yup.string().present("Name is required"),
    addressLine1: Yup.string().present("Address is required"),
    country: Yup.string().present("Country is required"),
    city: Yup.string().present("City is required"),
    region: Yup.string().present("State is required"),
    postalCode: Yup.string().present("Postal code is required"),
    phoneNumber: Yup.string().present("Telephone is required")
  }),
  agreeToTerms: Yup.bool().oneOf([true], "You must agree to the Conditions of Sale")
});

/*
  This component exists only to capture formik's renderProps and track form
  submission events. It essentially says:
  - IF the form has been submitted at least once
  - AND the form is not submitting at this moment
  - AND the form is invalid
  - AND (in useEffect dependencies array) the form submitting state just
    changed (because it is false, it must have been true above)
  - THEN run the callback prop.
  Background:
    https://github.com/jaredpalmer/formik/issues/1484#issuecomment-490558973
 */
var OnSubmitValidationError = function OnSubmitValidationError(props) {
  var cb = props.cb,
      formikProps = props.formikProps;

  var effect = function effect() {
    if (formikProps.submitCount > 0 && !formikProps.isSubmitting && !formikProps.isValid) {
      var clonedErrors = Object.assign({}, formikProps.errors);
      var addressErrors = clonedErrors.address;
      delete clonedErrors.address;
      var errors = Object.assign({}, clonedErrors, addressErrors);
      cb(Object.values(errors));
      formikProps.setSubmitting(false);
    }
  };

  _react.default.useEffect(effect, [formikProps.submitCount, formikProps.isSubmitting]);

  return null;
};

var RegistrationForm = function RegistrationForm(props) {
  var initialValues = {
    address: {
      name: "",
      addressLine1: "",
      addressLine2: "",
      country: "US",
      city: "",
      region: "",
      postalCode: "",
      phoneNumber: ""
    },
    creditCard: undefined,
    agreeToTerms: false
  };

  function createTokenAndSubmit(values, actions) {
    var address = {
      name: values.address.name,
      address_line1: values.address.addressLine1,
      address_line2: values.address.addressLine2,
      address_country: values.address.country,
      address_city: values.address.city,
      address_state: values.address.region,
      address_zip: values.address.postalCode
    };
    var setFieldError = actions.setFieldError,
        setSubmitting = actions.setSubmitting;
    var stripe = props.stripe;
    stripe.createToken(address).then(function (_ref) {
      var error = _ref.error,
          token = _ref.token;

      if (error) {
        setFieldError("creditCard", error.message);
        setSubmitting(false);
      } else {
        var result = {
          phoneNumber: values.address.phoneNumber,
          token: token
        };
        props.onSubmit(actions, result);
      }
    });
  }

  return _react.default.createElement(_palette.Box, {
    maxWidth: 550
  }, _react.default.createElement(_palette.Serif, {
    size: "4",
    color: "black100"
  }, "Please enter your credit card information below. The name on your Artsy account must match the name on the card, and a valid credit card is required in order to bid."), _react.default.createElement(_palette.Serif, {
    size: "4",
    mt: 2,
    color: "black100"
  }, "Registration is free. Artsy will never charge this card without your permission, and you are not required to use this card to pay if you win."), _react.default.createElement(_palette.Box, {
    mt: 2
  }, _react.default.createElement(_formik.Formik, {
    initialValues: initialValues,
    onSubmit: createTokenAndSubmit,
    validationSchema: validationSchema,
    render: function render(formikProps) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(OnSubmitValidationError, {
        cb: props.trackSubmissionErrors,
        formikProps: formikProps
      }), _react.default.createElement(InnerForm, formikProps), _react.default.createElement(_ErrorModal.ErrorModal, {
        show: formikProps.status === "submissionFailed",
        onClose: function onClose() {
          formikProps.setStatus(null);
        }
      }));
    }
  })));
};

exports.RegistrationForm = RegistrationForm;
var StripeInjectedRegistrationForm = (0, _reactStripeElements.injectStripe)(RegistrationForm);

var StripeWrappedRegistrationForm = function StripeWrappedRegistrationForm(props) {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      stripe = _useState2[0],
      setStripe = _useState2[1];

  function setupStripe() {
    setStripe(window.Stripe(_sharify.data.STRIPE_PUBLISHABLE_KEY));
  }

  (0, _react.useEffect)(function () {
    if (window.Stripe) {
      setStripe(window.Stripe(_sharify.data.STRIPE_PUBLISHABLE_KEY));
    } else {
      document.querySelector("#stripe-js").addEventListener("load", setupStripe);
      return function () {
        document.querySelector("#stripe-js").removeEventListener("load", setupStripe);
      };
    }
  }, []);
  return _react.default.createElement(_reactStripeElements.StripeProvider, {
    stripe: stripe
  }, _react.default.createElement(_reactStripeElements.Elements, null, _react.default.createElement(StripeInjectedRegistrationForm, props)));
};

exports.StripeWrappedRegistrationForm = StripeWrappedRegistrationForm;
//# sourceMappingURL=RegistrationForm.js.map