"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rejectOfferFailed = exports.rejectOfferSuccess = void 0;
var rejectOfferSuccess = {
  commerceBuyerRejectOffer: {
    orderOrError: {
      order: {
        id: "1234",
        awaitingResponseFrom: null
      }
    }
  }
};
exports.rejectOfferSuccess = rejectOfferSuccess;
var rejectOfferFailed = {
  commerceBuyerRejectOffer: {
    orderOrError: {
      error: {
        type: "validation",
        code: "cannot_accept_offer",
        data: null
      }
    }
  }
};
exports.rejectOfferFailed = rejectOfferFailed;
//# sourceMappingURL=rejectOffer.js.map