"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixFailedPaymentWithActionRequired = exports.fixFailedPaymentInsufficientInventoryFailure = exports.fixFailedPaymentFailure = exports.fixFailedPaymentSuccess = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _Order = require("../../../../__tests__/Fixtures/Order");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fixFailedPaymentSuccess = {
  commerceFixFailedPayment: {
    orderOrError: {
      order: _objectSpread({}, _Order.OfferOrderWithShippingDetailsAndNote)
    }
  }
};
exports.fixFailedPaymentSuccess = fixFailedPaymentSuccess;
var fixFailedPaymentFailure = {
  commerceFixFailedPayment: {
    orderOrError: {
      error: {
        type: "processing",
        code: "capture_failed",
        data: "Failed to capture payment"
      }
    }
  }
};
exports.fixFailedPaymentFailure = fixFailedPaymentFailure;
var fixFailedPaymentInsufficientInventoryFailure = {
  commerceFixFailedPayment: {
    orderOrError: {
      error: {
        type: "processing",
        code: "insufficient_inventory",
        data: "No moar artwork (╯°□°）╯︵ ┻━┻"
      }
    }
  }
};
exports.fixFailedPaymentInsufficientInventoryFailure = fixFailedPaymentInsufficientInventoryFailure;
var fixFailedPaymentWithActionRequired = {
  commerceFixFailedPayment: {
    orderOrError: {
      __typename: "CommerceOrderRequiresAction",
      actionData: {
        clientSecret: "client-secret"
      }
    }
  }
};
exports.fixFailedPaymentWithActionRequired = fixFailedPaymentWithActionRequired;
//# sourceMappingURL=fixFailedPayment.js.map