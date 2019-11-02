"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialOfferFailedAmountIsInvalid = exports.initialOfferFailedCannotOffer = exports.initialOfferSuccess = void 0;
var initialOfferSuccess = {
  commerceAddInitialOfferToOrder: {
    orderOrError: {
      order: {
        id: "1234",
        mode: "BUY",
        itemsTotalCents: 400,
        totalListPriceCents: 600,
        totalListPrice: "$6.00",
        myLastOffer: {
          id: "2345",
          amountCents: 400,
          note: null
        },
        lastOffer: null
      }
    }
  }
};
exports.initialOfferSuccess = initialOfferSuccess;
var initialOfferFailedCannotOffer = {
  commerceAddInitialOfferToOrder: {
    orderOrError: {
      error: {
        type: "validation",
        code: "cant_offer",
        data: null
      }
    }
  }
};
exports.initialOfferFailedCannotOffer = initialOfferFailedCannotOffer;
var initialOfferFailedAmountIsInvalid = {
  commerceAddInitialOfferToOrder: {
    orderOrError: {
      error: {
        type: "validation",
        code: "invalid_amount_cents",
        data: null
      }
    }
  }
};
exports.initialOfferFailedAmountIsInvalid = initialOfferFailedAmountIsInvalid;
//# sourceMappingURL=initialOffer.js.map