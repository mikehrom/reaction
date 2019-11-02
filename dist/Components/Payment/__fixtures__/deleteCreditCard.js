"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletingCreditCardFailed = exports.deletingCreditCardSuccess = void 0;
var deletingCreditCardSuccess = {
  deleteCreditCard: {
    creditCardOrError: {
      creditCard: {
        id: "gravityCreditCardId"
      }
    }
  }
};
exports.deletingCreditCardSuccess = deletingCreditCardSuccess;
var deletingCreditCardFailed = {
  deleteCreditCard: {
    creditCardOrError: {
      mutationError: {
        type: "payment_error",
        message: "Payment error",
        detail: "No card found",
        error: null
      }
    }
  }
};
exports.deletingCreditCardFailed = deletingCreditCardFailed;
//# sourceMappingURL=deleteCreditCard.js.map