"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRedirect = registerRedirect;
exports.confirmBidRedirect = confirmBidRedirect;

function registerRedirect(_ref) {
  var me = _ref.me,
      sale = _ref.sale;

  if (me.has_qualified_credit_cards) {
    return {
      path: registrationFlowPath(sale),
      reason: "user already has a qualified credit card"
    };
  } else if (!sale.is_auction) {
    return {
      path: "/sale/".concat(sale.id),
      reason: "sale must be an auction"
    };
  } else if (!isRegisterable(sale)) {
    return {
      path: auctionPath(sale),
      reason: "auction must be registerable"
    };
  } else if (userRegisteredToBid(sale)) {
    return {
      path: confirmRegistrationPath(sale),
      reason: "user is already registered to bid"
    };
  }

  return null;
}

function confirmBidRedirect(data, location) {
  var artwork = data.artwork,
      me = data.me;
  var saleArtwork = artwork.saleArtwork;
  var sale = saleArtwork.sale;
  var registrationStatus = sale.registrationStatus;

  if (!me) {
    return {
      path: "/log_in?redirect_uri=" + encodeURIComponent(location.pathname),
      reason: "user is not signed in"
    };
  }

  if (!registrationStatus && sale.is_registration_closed) {
    return {
      path: artworkPath(sale, artwork),
      reason: "user is not registered, registration closed"
    };
  }

  if (registrationStatus && !registrationStatus.qualified_for_bidding) {
    return {
      path: confirmRegistrationPath(sale),
      reason: "user is not qualified for bidding"
    };
  }

  if (sale.is_closed) {
    return {
      path: artworkPath(sale, artwork),
      reason: "sale is closed"
    };
  }

  return null;
}

var auctionPath = function auctionPath(sale) {
  return "/auction/".concat(sale.id);
};

var registrationFlowPath = function registrationFlowPath(sale) {
  return auctionPath(sale) + "/registration-flow";
};

var confirmRegistrationPath = function confirmRegistrationPath(sale) {
  return auctionPath(sale) + "/confirm-registration";
};

var artworkPath = function artworkPath(sale, artwork) {
  return auctionPath(sale) + "/artwork/".concat(artwork.id);
};

function isRegisterable(sale) {
  return (sale.is_preview || sale.is_open) && !sale.is_registration_closed;
}

function userRegisteredToBid(sale) {
  return !!sale.registrationStatus;
}
//# sourceMappingURL=getRedirect.js.map