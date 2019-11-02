"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuctionRegistrationModal = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.function.name");

var _react = _interopRequireWildcard(require("react"));

var _palette = require("@artsy/palette");

var _ConditionsOfSaleCheckbox = require("./ConditionsOfSaleCheckbox");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AuctionRegistrationModal = function AuctionRegistrationModal(_ref) {
  var auction = _ref.auction,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      acceptedConditions = _useState4[0],
      setAcceptedConditions = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      submitting = _useState8[0],
      setSubmitting = _useState8[1];

  function closeModal() {
    setShow(false);
  }

  (0, _react.useEffect)(function () {
    if (!show) {
      onClose();
    }
  }, [show]);

  function validate() {
    if (acceptedConditions) {
      setError("");
      return true;
    } else {
      setError("You must agree to our terms.");
      return false;
    }
  }

  function handleSubmit(acceptedTerms) {
    setSubmitting(true);
    onSubmit({
      setSubmitting: setSubmitting,
      setError: setError,
      auction: auction,
      acceptedTerms: acceptedTerms
    });
  }

  function validateAndSubmit() {
    if (validate()) {
      handleSubmit(true);
    }
  }

  return _react.default.createElement(_palette.Modal, {
    show: show,
    onClose: closeModal
  }, _react.default.createElement(_palette.Box, {
    pt: [3, 0],
    textAlign: "center"
  }, _react.default.createElement(_palette.Serif, {
    size: "6"
  }, "Register for ", auction.name), _react.default.createElement(_palette.Serif, {
    my: 3,
    size: "4"
  }, "Welcome back. To complete your registration, please confirm that you agree to the Conditions of Sale."), _react.default.createElement(_palette.Flex, {
    my: 4,
    flexDirection: "column",
    justifyContent: "center"
  }, _react.default.createElement(_palette.Box, {
    mx: "auto"
  }, _react.default.createElement(_ConditionsOfSaleCheckbox.ConditionsOfSaleCheckbox, {
    selected: acceptedConditions,
    onSelect: function onSelect(value) {
      return setAcceptedConditions(value);
    }
  })), error && _react.default.createElement(_palette.Sans, {
    mt: 1,
    color: "red100",
    size: "2"
  }, error)), _react.default.createElement(_palette.Button, {
    block: true,
    loading: submitting,
    width: "100%",
    onClick: validateAndSubmit
  }, "Register")));
};

exports.AuctionRegistrationModal = AuctionRegistrationModal;
//# sourceMappingURL=AuctionRegistrationModal.js.map