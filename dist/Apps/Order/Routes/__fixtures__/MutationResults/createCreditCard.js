"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creatingCreditCardFailed = exports.creatingCreditCardSuccess = void 0;
var creatingCreditCardSuccess = {
  createCreditCard: {
    creditCardOrError: {
      creditCard: {
        id: "gravityCreditCardId",
        name: "Artsy UK Ltd",
        street1: "14 Gower's Walk",
        street2: "Suite 2.5, The Loom",
        city: "London",
        state: "Whitechapel",
        country: "UK",
        postal_code: "E1 8PY",
        expiration_month: 12,
        expiration_year: 2022,
        last_digits: "1234",
        brand: "Visa"
      }
    }
  }
};
exports.creatingCreditCardSuccess = creatingCreditCardSuccess;
var creatingCreditCardFailed = {
  createCreditCard: {
    creditCardOrError: {
      mutationError: {
        type: "payment_error",
        message: "Payment error",
        detail: "No such token: fake-token",
        error: null
      }
    }
  }
};
exports.creatingCreditCardFailed = creatingCreditCardFailed;
//# sourceMappingURL=createCreditCard.js.map