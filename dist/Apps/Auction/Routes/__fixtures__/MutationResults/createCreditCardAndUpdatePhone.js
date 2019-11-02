"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCreditCardAndUpdatePhoneFailed = exports.createCreditCardAndUpdatePhoneSuccessful = void 0;
var createCreditCardAndUpdatePhoneSuccessful = {
  updateMyUserProfile: {
    user: {
      id: "example-user-id"
    }
  },
  createCreditCard: {
    creditCardOrError: {
      creditCardEdge: {
        node: {
          last_digits: "4242"
        }
      }
    }
  }
};
exports.createCreditCardAndUpdatePhoneSuccessful = createCreditCardAndUpdatePhoneSuccessful;
var createCreditCardAndUpdatePhoneFailed = {
  updateMyUserProfile: {
    user: {
      id: "example-user-id"
    }
  },
  createCreditCard: {
    creditCardOrError: {
      mutationError: {
        message: "The `createCreditCard` mutation failed.",
        type: "",
        detail: ""
      }
    }
  }
};
exports.createCreditCardAndUpdatePhoneFailed = createCreditCardAndUpdatePhoneFailed;
//# sourceMappingURL=createCreditCardAndUpdatePhone.js.map