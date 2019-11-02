"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptOfferInsufficientInventoryFailure = exports.acceptOfferPaymentFailedInsufficientFunds = exports.acceptOfferPaymentFailed = exports.acceptOfferFailed = exports.acceptOfferSuccess = void 0;
var acceptOfferSuccess = {
  commerceBuyerAcceptOffer: {
    orderOrError: {
      order: {
        id: "1234",
        awaitingResponseFrom: null
      }
    }
  }
};
exports.acceptOfferSuccess = acceptOfferSuccess;
var acceptOfferFailed = {
  commerceBuyerAcceptOffer: {
    orderOrError: {
      error: {
        type: "validation",
        code: "cannot_accept_offer",
        data: null
      }
    }
  }
};
exports.acceptOfferFailed = acceptOfferFailed;
var acceptOfferPaymentFailed = {
  commerceBuyerAcceptOffer: {
    orderOrError: {
      error: {
        type: "processing",
        code: "capture_failed",
        data: null
      }
    }
  }
};
exports.acceptOfferPaymentFailed = acceptOfferPaymentFailed;
var acceptOfferPaymentFailedInsufficientFunds = {
  commerceBuyerAcceptOffer: {
    orderOrError: {
      error: {
        type: "processing",
        code: "capture_failed",
        data: "{\"decline_code\": \"insufficient_funds\"}"
      }
    }
  }
};
exports.acceptOfferPaymentFailedInsufficientFunds = acceptOfferPaymentFailedInsufficientFunds;
var acceptOfferInsufficientInventoryFailure = {
  commerceBuyerAcceptOffer: {
    orderOrError: {
      error: {
        type: "processing",
        code: "insufficient_inventory",
        data: "No moar artwork (╯°□°）╯︵ ┻━┻"
      }
    }
  }
};
exports.acceptOfferInsufficientInventoryFailure = acceptOfferInsufficientInventoryFailure;
//# sourceMappingURL=acceptOffer.js.map