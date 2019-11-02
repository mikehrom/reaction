"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitOfferOrderSuccess = exports.submitOfferOrderWithActionRequired = exports.submitOfferOrderWithNoInventoryFailure = exports.submitOfferOrderWithVersionMismatchFailure = exports.submitOfferOrderFailedConfirmation = exports.submitOfferOrderWithFailure = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _Order = require("../../../../__tests__/Fixtures/Order");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var submitOfferOrderWithFailure = {
  commerceSubmitOrderWithOffer: {
    orderOrError: {
      error: {
        type: "validation",
        code: "credit_card_not_found",
        data: '{"credit_card_id":"5b9987f72957190026d0ff54"}'
      }
    }
  }
};
exports.submitOfferOrderWithFailure = submitOfferOrderWithFailure;
var submitOfferOrderFailedConfirmation = {
  commerceSubmitOrderWithOffer: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationFailure",
      error: {
        type: "processing",
        code: "payment_method_confirmation_failed",
        data: null
      }
    }
  }
};
exports.submitOfferOrderFailedConfirmation = submitOfferOrderFailedConfirmation;
var submitOfferOrderWithVersionMismatchFailure = {
  commerceSubmitOrderWithOffer: {
    orderOrError: {
      error: {
        type: "processing",
        code: "artwork_version_mismatch",
        data: null
      }
    }
  }
};
exports.submitOfferOrderWithVersionMismatchFailure = submitOfferOrderWithVersionMismatchFailure;
var submitOfferOrderWithNoInventoryFailure = {
  commerceSubmitOrderWithOffer: {
    orderOrError: {
      error: {
        type: "processing",
        code: "insufficient_inventory",
        data: null
      }
    }
  }
};
exports.submitOfferOrderWithNoInventoryFailure = submitOfferOrderWithNoInventoryFailure;
var submitOfferOrderWithActionRequired = {
  commerceSubmitOrderWithOffer: {
    orderOrError: {
      actionData: {
        clientSecret: "client-secret"
      }
    }
  }
};
exports.submitOfferOrderWithActionRequired = submitOfferOrderWithActionRequired;
var submitOfferOrderSuccess = {
  commerceSubmitOrderWithOffer: {
    orderOrError: {
      order: _objectSpread({}, _Order.OfferOrderWithShippingDetails, {
        state: "SUBMITTED"
      })
    }
  }
};
exports.submitOfferOrderSuccess = submitOfferOrderSuccess;
//# sourceMappingURL=submitOfferOrder.js.map