"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitOrderWithMissingInfo = exports.submitOrderSuccess = exports.submitOrderWithActionRequired = exports.submitOrderWithNoInventoryFailure = exports.submitOrderWithVersionMismatchFailure = exports.submitOrderWithFailureInsufficientFunds = exports.submitOrderWithFailureCardDeclined = exports.submitOrderWithFailure = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _Order = require("../../../../__tests__/Fixtures/Order");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var submitOrderWithFailure = {
  commerceSubmitOrder: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationFailure",
      error: {
        type: "validation",
        code: "credit_card_not_found",
        data: '{"credit_card_id":"5b9987f72957190026d0ff54"}'
      }
    }
  }
};
exports.submitOrderWithFailure = submitOrderWithFailure;
var submitOrderWithFailureCardDeclined = {
  commerceSubmitOrder: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationFailure",
      error: {
        type: "processing",
        code: "charge_authorization_failed",
        data: '{"id":null,"failure_code":"card_declined","failure_message":"Your card was declined.","decline_code":"card_declined"}'
      }
    }
  }
};
exports.submitOrderWithFailureCardDeclined = submitOrderWithFailureCardDeclined;
var submitOrderWithFailureInsufficientFunds = {
  commerceSubmitOrder: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationFailure",
      error: {
        type: "processing",
        code: "charge_authorization_failed",
        data: '{"id":null,"failure_code":"card_declined","failure_message":"Your card has insufficient funds to complete the purchase.","decline_code":"insufficient_funds"}'
      }
    }
  }
};
exports.submitOrderWithFailureInsufficientFunds = submitOrderWithFailureInsufficientFunds;
var submitOrderWithVersionMismatchFailure = {
  commerceSubmitOrder: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationFailure",
      error: {
        type: "processing",
        code: "artwork_version_mismatch",
        data: null
      }
    }
  }
};
exports.submitOrderWithVersionMismatchFailure = submitOrderWithVersionMismatchFailure;
var submitOrderWithNoInventoryFailure = {
  commerceSubmitOrder: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationFailure",
      error: {
        type: "processing",
        code: "insufficient_inventory",
        data: null
      }
    }
  }
};
exports.submitOrderWithNoInventoryFailure = submitOrderWithNoInventoryFailure;
var submitOrderWithActionRequired = {
  commerceSubmitOrder: {
    orderOrError: {
      __typename: "CommerceOrderRequiresAction",
      actionData: {
        clientSecret: "client-secret"
      }
    }
  }
};
exports.submitOrderWithActionRequired = submitOrderWithActionRequired;
var submitOrderSuccess = {
  commerceSubmitOrder: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationSuccess",
      order: _objectSpread({}, _Order.BuyOrderWithShippingDetails, {
        state: "SUBMITTED"
      })
    }
  }
};
exports.submitOrderSuccess = submitOrderSuccess;
var submitOrderWithMissingInfo = {
  commerceSubmitOrder: {
    orderOrError: {
      __typename: "CommerceOrderWithMutationFailure",
      error: {
        type: "processing",
        code: "missing_required_info",
        data: null
      }
    }
  }
};
exports.submitOrderWithMissingInfo = submitOrderWithMissingInfo;
//# sourceMappingURL=submitOrder.js.map