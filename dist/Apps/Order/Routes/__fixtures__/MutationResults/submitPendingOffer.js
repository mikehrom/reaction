"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.insufficientInventoryResponse = exports.submitPendingOfferFailed = exports.submitPendingOfferSuccess = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

var _Order = require("../../../../__tests__/Fixtures/Order");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var submitPendingOfferSuccess = {
  commerceSubmitPendingOffer: {
    orderOrError: {
      order: _objectSpread({}, _Order.OfferOrderWithOffers)
    }
  }
};
exports.submitPendingOfferSuccess = submitPendingOfferSuccess;
var submitPendingOfferFailed = {
  commerceSubmitPendingOffer: {
    orderOrError: {
      error: {
        type: "validation",
        code: "cannot_accept_offer",
        data: null
      }
    }
  }
};
exports.submitPendingOfferFailed = submitPendingOfferFailed;
var insufficientInventoryResponse = {
  commerceSubmitPendingOffer: {
    orderOrError: {
      error: {
        type: "validation",
        code: "insufficient_inventory",
        data: null
      }
    }
  }
};
exports.insufficientInventoryResponse = insufficientInventoryResponse;
//# sourceMappingURL=submitPendingOffer.js.map