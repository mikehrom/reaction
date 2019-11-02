"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buyerCounterOfferFailed = exports.buyerCounterOfferSuccess = void 0;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

var _Order = require("../../../../__tests__/Fixtures/Order");

var _luxon = require("luxon");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buyerCounterOfferSuccess = {
  commerceBuyerCounterOffer: {
    orderOrError: {
      order: _objectSpread({}, _Order.OfferOrderWithShippingDetails, {
        stateExpiresAt: _luxon.DateTime.local().plus({
          days: 1
        }).toString()
      })
    }
  }
};
exports.buyerCounterOfferSuccess = buyerCounterOfferSuccess;
var buyerCounterOfferFailed = {
  commerceBuyerCounterOffer: {
    orderOrError: {
      error: {
        type: "validation",
        code: "invalid_amount_cents",
        data: null
      }
    }
  }
};
exports.buyerCounterOfferFailed = buyerCounterOfferFailed;
//# sourceMappingURL=buyerCounterOffer.js.map