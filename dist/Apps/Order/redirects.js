"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.redirects = exports.confirmRouteExit = void 0;

require("core-js/modules/es6.regexp.match");

var _luxon = require("luxon");

var _reactRelay = require("react-relay");

var _get = require("../../Utils/get");

var _OrderApp = require("./OrderApp");

var LEAVE_MESSAGING = "Are you sure you want to refresh? Your changes will not be saved.";

var confirmRouteExit = function confirmRouteExit(newLocation, oldLocation, router) {
  // Refresh -- On refresh newLocation is null
  if (!newLocation || newLocation.pathname === oldLocation.pathname) {
    // Most browsers will ignore this and supply their own messaging for refresh
    return LEAVE_MESSAGING;
  } // Attempting to navigate to another route in the orders app


  var match = router.matcher.match(newLocation);

  if (match) {
    // FIXME: Need to update found types: https://github.com/4Catalyzer/found/blob/master/src/Matcher.js#L27
    var matchedRoutes = router.matcher.getRoutes(match);

    if (matchedRoutes && matchedRoutes[0].Component === _OrderApp.OrderApp) {
      return undefined;
    }
  }

  return LEAVE_MESSAGING;
};

exports.confirmRouteExit = confirmRouteExit;

var goToStatusIf = function goToStatusIf(pred, reason) {
  return function (_ref) {
    var order = _ref.order;

    if (pred(order)) {
      return {
        path: "/orders/".concat(order.id, "/status"),
        reason: reason
      };
    }
  };
};

var goToArtworkIfOrderWasAbandoned = function goToArtworkIfOrderWasAbandoned(_ref2) {
  var order = _ref2.order;

  if (order.state === "ABANDONED") {
    var artworkID = (0, _get.get)(order, function (o) {
      return o.lineItems.edges[0].node.artwork.id;
    }); // If an artwork ID can't be found, redirect back to home page.

    return {
      path: artworkID ? "/artwork/".concat(artworkID) : "/",
      reason: "Order was abandoned"
    };
  }
};

var goToStatusIfOrderIsNotPending = goToStatusIf(function (order) {
  return order.state !== "PENDING";
}, "Order is no longer pending");

var goToShippingIfShippingIsNotCompleted = function goToShippingIfShippingIsNotCompleted(_ref3) {
  var order = _ref3.order;

  if (!order.requestedFulfillment) {
    return {
      path: "/orders/".concat(order.id, "/shipping"),
      reason: "Shipping was not yet completed"
    };
  }
};

var goToPaymentIfPaymentIsNotCompleted = function goToPaymentIfPaymentIsNotCompleted(_ref4) {
  var order = _ref4.order;

  if (!order.creditCard) {
    return {
      path: "/orders/".concat(order.id, "/payment"),
      reason: "Payment was not yet completed"
    };
  }
};

var goToShippingIfOrderIsNotOfferOrder = function goToShippingIfOrderIsNotOfferOrder(_ref5) {
  var order = _ref5.order;

  if (order.mode !== "OFFER") {
    return {
      path: "/orders/".concat(order.id, "/shipping"),
      reason: "Order is not an offer order"
    };
  }
};

var goToOfferIfNoOfferMade = function goToOfferIfNoOfferMade(_ref6) {
  var order = _ref6.order;

  if (order.mode === "OFFER" && !order.myLastOffer) {
    return {
      path: "/orders/".concat(order.id, "/offer"),
      reason: "No offer has been made yet"
    };
  }
};

var goToStatusIfNotOfferOrder = goToStatusIf(function (order) {
  return order.mode !== "OFFER";
}, "Not an offer order");
var goToStatusIfNotAwaitingBuyerResponse = goToStatusIf(function (order) {
  return order.awaitingResponseFrom !== "BUYER";
}, "Not currently awaiting buyer response");
var goToStatusIfOrderIsNotSubmitted = goToStatusIf(function (order) {
  return order.state !== "SUBMITTED";
}, "Order was not yet submitted");
var goToStatusIfNotLastTransactionFailed = goToStatusIf(function (order) {
  return !order.lastTransactionFailed;
}, "Order's lastTransactionFailed must be true");

var goToReviewIfOrderIsPending = function goToReviewIfOrderIsPending(_ref7) {
  var order = _ref7.order;

  if (order.state === "PENDING") {
    return {
      path: "/orders/".concat(order.id, "/review"),
      reason: "Order is still pending"
    };
  }
};

var goToRespondIfMyLastOfferIsNotMostRecentOffer = function goToRespondIfMyLastOfferIsNotMostRecentOffer(_ref8) {
  var order = _ref8.order;

  if (order.myLastOffer && order.lastOffer && _luxon.DateTime.fromISO(order.myLastOffer.createdAt) > _luxon.DateTime.fromISO(order.lastOffer.createdAt)) {
    return;
  }

  return {
    path: "/orders/".concat(order.id, "/respond"),
    reason: "myLastOffer is not most recent offer"
  };
};

var goToRespondIfAwaitingBuyerResponse = function goToRespondIfAwaitingBuyerResponse(_ref9) {
  var order = _ref9.order;

  if (order.awaitingResponseFrom === "BUYER") {
    return {
      path: "/orders/".concat(order.id, "/respond"),
      reason: "Still awaiting buyer response"
    };
  }
};

var redirects = {
  path: "",
  rules: [goToArtworkIfOrderWasAbandoned],
  children: [{
    path: "respond",
    rules: [goToStatusIfNotOfferOrder, goToStatusIfNotAwaitingBuyerResponse, goToStatusIfOrderIsNotSubmitted]
  }, {
    path: "offer",
    rules: [goToStatusIfOrderIsNotPending, goToShippingIfOrderIsNotOfferOrder]
  }, {
    path: "shipping",
    rules: [goToStatusIfOrderIsNotPending, goToOfferIfNoOfferMade]
  }, {
    path: "payment",
    rules: [goToStatusIfOrderIsNotPending, goToShippingIfShippingIsNotCompleted]
  }, {
    path: "payment/new",
    rules: [goToStatusIfNotOfferOrder, goToStatusIfOrderIsNotSubmitted, goToStatusIfNotLastTransactionFailed]
  }, {
    path: "review",
    rules: [goToStatusIfOrderIsNotPending, goToShippingIfShippingIsNotCompleted, goToPaymentIfPaymentIsNotCompleted]
  }, {
    path: "review/counter",
    rules: [goToStatusIfNotOfferOrder, goToStatusIfNotAwaitingBuyerResponse, goToStatusIfOrderIsNotSubmitted, goToRespondIfMyLastOfferIsNotMostRecentOffer]
  }, {
    path: "review/accept",
    rules: [goToStatusIfNotOfferOrder, goToStatusIfNotAwaitingBuyerResponse, goToStatusIfOrderIsNotSubmitted]
  }, {
    path: "review/decline",
    rules: [goToStatusIfNotOfferOrder, goToStatusIfNotAwaitingBuyerResponse, goToStatusIfOrderIsNotSubmitted]
  }, {
    path: "status",
    rules: [goToReviewIfOrderIsPending, goToShippingIfShippingIsNotCompleted, goToPaymentIfPaymentIsNotCompleted, goToRespondIfAwaitingBuyerResponse]
  }]
};
exports.redirects = redirects;
({
  order: function order() {
    var node = require("../../__generated__/redirects_order.graphql");

    if (node.hash && node.hash !== "c01a4a399cd325004d47280b43c4ef84") {
      console.error("The definition of 'redirects_order' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/redirects_order.graphql");
  }
});
//# sourceMappingURL=redirects.js.map