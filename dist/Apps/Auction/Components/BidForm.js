"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BidFormFragmentContainer = exports.BidForm = exports.determineDisplayRequirements = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/es6.string.trim");

var _find2 = _interopRequireDefault(require("lodash/find"));

var _dropWhile2 = _interopRequireDefault(require("lodash/dropWhile"));

var _palette = require("@artsy/palette");

var _PricingTransparency = require("./PricingTransparency");

var _ConditionsOfSaleCheckbox = require("../../../Components/Auction/ConditionsOfSaleCheckbox");

var _formik = require("formik");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _yup = _interopRequireDefault(require("yup"));

var _CreditCardInstructions = require("./CreditCardInstructions");

var _AddressForm = require("../../Order/Components/AddressForm");

var _CreditCardInput = require("../../Order/Components/CreditCardInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

_yup.default.addMethod(_yup.default.string, "present", function (message) {
  var _this = this;

  return this.test("test-present", message, function (value) {
    return _this.trim().required(message).isValid(value);
  });
});

var validationSchemaForRegisteredUsers = _yup.default.object().shape({
  selectedBid: _yup.default.string().required()
});

var validationSchemaForUnregisteredUsersWithCreditCard = _yup.default.object().shape({
  selectedBid: _yup.default.string().required(),
  agreeToTerms: _yup.default.bool().oneOf([true], "You must agree to the Conditions of Sale")
});

var validationSchemaForUnregisteredUsersWithoutCreditCard = _yup.default.object().shape({
  selectedBid: _yup.default.string().required(),
  address: _yup.default.object({
    name: _yup.default.string().present("Name is required"),
    addressLine1: _yup.default.string().present("Address is required"),
    country: _yup.default.string().present("Country is required"),
    city: _yup.default.string().present("City is required"),
    region: _yup.default.string().present("State is required"),
    postalCode: _yup.default.string().present("Postal code is required"),
    phoneNumber: _yup.default.string().present("Telephone is required")
  }),
  agreeToTerms: _yup.default.bool().oneOf([true], "You must agree to the Conditions of Sale")
});

var getSelectedBid = function getSelectedBid(_ref) {
  var initialSelectedBid = _ref.initialSelectedBid,
      displayIncrements = _ref.displayIncrements;
  var selectedIncrement;

  if (!initialSelectedBid) {
    selectedIncrement = displayIncrements[0];
  } else {
    var selectedNum = Number(initialSelectedBid);
    var lastGoodIncrement = (0, _find2.default)(displayIncrements, function (i) {
      return Number(i.value) === selectedNum;
    });
    selectedIncrement = lastGoodIncrement || displayIncrements[0];
  }

  return selectedIncrement.value;
};

var determineDisplayRequirements = function determineDisplayRequirements(bidder, me) {
  var isRegistered = !!bidder;
  return {
    requiresCheckbox: !isRegistered,
    requiresPaymentInformation: !(isRegistered || me.hasQualifiedCreditCards)
  };
};

exports.determineDisplayRequirements = determineDisplayRequirements;

var BidForm = function BidForm(_ref2) {
  var initialSelectedBid = _ref2.initialSelectedBid,
      me = _ref2.me,
      onSubmit = _ref2.onSubmit,
      saleArtwork = _ref2.saleArtwork,
      _ref2$showPricingTran = _ref2.showPricingTransparency,
      showPricingTransparency = _ref2$showPricingTran === void 0 ? false : _ref2$showPricingTran;
  var displayIncrements = (0, _dropWhile2.default)(saleArtwork.increments, function (increment) {
    return increment.cents < saleArtwork.minimumNextBid.cents;
  }).map(function (inc) {
    return {
      value: inc.cents.toString(),
      text: inc.display
    };
  });
  var selectedBid = getSelectedBid({
    initialSelectedBid: initialSelectedBid,
    displayIncrements: displayIncrements
  });

  var _determineDisplayRequ = determineDisplayRequirements(saleArtwork.sale.registrationStatus, me),
      requiresCheckbox = _determineDisplayRequ.requiresCheckbox,
      requiresPaymentInformation = _determineDisplayRequ.requiresPaymentInformation;

  var validationSchema = requiresCheckbox ? requiresPaymentInformation ? validationSchemaForUnregisteredUsersWithoutCreditCard : validationSchemaForUnregisteredUsersWithCreditCard : validationSchemaForRegisteredUsers;
  return _react.default.createElement(_palette.Box, {
    maxWidth: 550
  }, _react.default.createElement(_formik.Formik, {
    initialValues: {
      selectedBid: selectedBid,
      agreeToTerms: false,
      address: {
        name: "",
        country: "",
        postalCode: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        region: "",
        phoneNumber: ""
      }
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
    render: function render(_ref3) {
      var values = _ref3.values,
          touched = _ref3.touched,
          errors = _ref3.errors,
          isSubmitting = _ref3.isSubmitting,
          setFieldValue = _ref3.setFieldValue,
          setFieldTouched = _ref3.setFieldTouched,
          status = _ref3.status;
      return _react.default.createElement(_formik.Form, null, _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, _react.default.createElement(_palette.Flex, {
        flexDirection: "column",
        py: 4
      }, _react.default.createElement(_palette.Serif, {
        pb: 0.5,
        size: "4t",
        weight: "semibold",
        color: "black100"
      }, "Set your max bid"), _react.default.createElement(_palette.LargeSelect, {
        selected: values.selectedBid,
        onSelect: function onSelect(value) {
          setFieldValue("selectedBid", value);
          setFieldTouched("selectedBid");
        },
        options: displayIncrements
      }), touched.selectedBid && errors.selectedBid && _react.default.createElement(_palette.Sans, {
        mt: 1,
        color: "red100",
        size: "2"
      }, errors.selectedBid), showPricingTransparency && _react.default.createElement(_PricingTransparency.PricingTransparency, null)), requiresPaymentInformation && _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Separator, {
        mb: 3
      }), _react.default.createElement(_CreditCardInstructions.CreditCardInstructions, null), _react.default.createElement(_palette.Serif, {
        mt: 4,
        mb: 2,
        size: "4t",
        weight: "semibold",
        color: "black100"
      }, "Card Information"), _react.default.createElement(_CreditCardInput.CreditCardInput, {
        error: {
          message: errors.creditCard
        }
      }), _react.default.createElement(_palette.Box, {
        mt: 2
      }, _react.default.createElement(_AddressForm.AddressForm, {
        value: values.address,
        onChange: function onChange(address) {
          return setFieldValue("address", address);
        },
        errors: errors.address,
        touched: touched.address,
        billing: true,
        showPhoneNumberInput: true
      }))), _react.default.createElement(_palette.Flex, {
        pb: 3,
        flexDirection: "column",
        justifyContent: "center",
        width: "100%"
      }, requiresCheckbox && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Separator, {
        mb: 3
      }), _react.default.createElement(_palette.Box, {
        mx: "auto",
        mb: 3
      }, _react.default.createElement(_ConditionsOfSaleCheckbox.ConditionsOfSaleCheckbox, {
        selected: values.agreeToTerms,
        onSelect: function onSelect(value) {
          setFieldValue("agreeToTerms", value);
          setFieldTouched("agreeToTerms");
        }
      }), touched.agreeToTerms && errors.agreeToTerms && _react.default.createElement(_palette.Sans, {
        mt: 1,
        color: "red100",
        size: "2",
        textAlign: "center"
      }, errors.agreeToTerms))), status && _react.default.createElement(_palette.Sans, {
        textAlign: "center",
        size: "3",
        color: "red100",
        mb: 2
      }, status, "."), _react.default.createElement(_palette.Button, _extends({
        size: "large",
        width: "100%",
        loading: isSubmitting
      }, {
        type: "submit"
      }), "Confirm bid"))));
    }
  }));
};

exports.BidForm = BidForm;
var BidFormFragmentContainer = (0, _reactRelay.createFragmentContainer)(BidForm, {
  saleArtwork: function saleArtwork() {
    var node = require("../../../__generated__/BidForm_saleArtwork.graphql");

    if (node.hash && node.hash !== "2b29986a93e0cc4abb6c031f75b05cd1") {
      console.error("The definition of 'BidForm_saleArtwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/BidForm_saleArtwork.graphql");
  },
  me: function me() {
    var node = require("../../../__generated__/BidForm_me.graphql");

    if (node.hash && node.hash !== "7f8137c88b31245f0b14d6df94c90179") {
      console.error("The definition of 'BidForm_me' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/BidForm_me.graphql");
  }
});
exports.BidFormFragmentContainer = BidFormFragmentContainer;
//# sourceMappingURL=BidForm.js.map