"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settingOrderPaymentFailed = exports.settingOrderPaymentSuccess = void 0;
var settingOrderPaymentSuccess = {
  commerceSetPayment: {
    orderOrError: {
      order: {
        __typename: "CommerceBuyOrder",
        id: "1234",
        creditCard: {
          id: "credit-card-id",
          name: "Artsy UK Ltd",
          street1: "14 Gower's Walk",
          street2: "Suite 2.5, The Loom",
          city: "London",
          state: "Whitechapel",
          country: "UK",
          postal_code: "E1 8PY"
        }
      }
    }
  }
};
exports.settingOrderPaymentSuccess = settingOrderPaymentSuccess;
var settingOrderPaymentFailed = {
  commerceSetPayment: {
    orderOrError: {
      error: {
        type: "validation",
        code: "invalid_state",
        data: '{"state":"canceled"}'
      }
    }
  }
};
exports.settingOrderPaymentFailed = settingOrderPaymentFailed;
//# sourceMappingURL=setOrderPayment.js.map