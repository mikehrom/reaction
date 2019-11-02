"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentPickerFragmentContainer = exports.useThrownError = exports.useInternalErrorResult = exports.useErrorResult = exports.useInvalidFormResult = exports.useGoodResult = void 0;

require("core-js/modules/es6.promise");

var _react = require("react");

var goodResult = {
  type: "success",
  creditCardId: "credit-card-id"
};

var useGoodResult = function useGoodResult() {
  PaymentPickerMock.getCreditCardId.mockResolvedValue(goodResult);
};

exports.useGoodResult = useGoodResult;
var invalidFormResult = {
  type: "invalid_form"
};

var useInvalidFormResult = function useInvalidFormResult() {
  PaymentPickerMock.getCreditCardId.mockResolvedValue(invalidFormResult);
};

exports.useInvalidFormResult = useInvalidFormResult;
var errorResult = {
  type: "error",
  error: "This is the description of an error."
};

var useErrorResult = function useErrorResult() {
  PaymentPickerMock.getCreditCardId.mockResolvedValue(errorResult);
};

exports.useErrorResult = useErrorResult;
var internalErrorResult = {
  type: "internal_error",
  error: "This is the description of an internal error."
};

var useInternalErrorResult = function useInternalErrorResult() {
  PaymentPickerMock.getCreditCardId.mockResolvedValue(internalErrorResult);
};

exports.useInternalErrorResult = useInternalErrorResult;

var useThrownError = function useThrownError() {
  PaymentPickerMock.getCreditCardId.mockRejectedValue(new Error("Actual error"));
};

exports.useThrownError = useThrownError;
var PaymentPickerMock = {
  getCreditCardId: jest.fn(function () {
    return Promise.resolve(goodResult);
  })
};
beforeEach(function () {
  PaymentPickerMock.getCreditCardId.mockReset();
  useGoodResult();
});

var PaymentPickerFragmentContainer = function PaymentPickerFragmentContainer(_ref) {
  var innerRef = _ref.innerRef;
  innerRef.current = PaymentPickerMock;
  return (0, _react.createElement)("div");
};

exports.PaymentPickerFragmentContainer = PaymentPickerFragmentContainer;
//# sourceMappingURL=PaymentPicker.js.map