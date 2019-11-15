"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmBidBidderPositionQueryWithOutbid = exports.confirmBidBidderPositionQueryWithPending = exports.confirmBidBidderPositionQueryWithWinning = exports.createBidderPositionFailed = exports.createBidderPositionSuccessfulAndBidder = exports.createBidderPositionSuccessful = void 0;
var createBidderPositionSuccessful = {
  createBidderPosition: {
    result: {
      position: {
        id: "positionid",
        sale_artwork: {
          sale: {
            registrationStatus: {
              id: "existing-bidder-id"
            }
          }
        }
      },
      status: "SUCCESS",
      messageHeader: null
    }
  }
};
exports.createBidderPositionSuccessful = createBidderPositionSuccessful;
var createBidderPositionSuccessfulAndBidder = {
  createBidderPosition: {
    result: {
      position: {
        id: "positionid",
        sale_artwork: {
          sale: {
            registrationStatus: {
              id: "new-bidder-id"
            }
          }
        }
      },
      status: "SUCCESS",
      messageHeader: null
    }
  }
};
exports.createBidderPositionSuccessfulAndBidder = createBidderPositionSuccessfulAndBidder;
var createBidderPositionFailed = {
  createBidderPosition: {
    result: {
      position: null,
      status: "FAILED",
      messageHeader: "Sale Closed to Bids"
    }
  }
};
exports.createBidderPositionFailed = createBidderPositionFailed;
var confirmBidBidderPositionQueryWithWinning = {
  me: {
    bidderPosition: {
      status: "WINNING",
      messageHeader: null,
      position: {
        id: "winning-bidder-position-id-from-polling",
        suggestedNextBid: null
      }
    }
  }
};
exports.confirmBidBidderPositionQueryWithWinning = confirmBidBidderPositionQueryWithWinning;
var confirmBidBidderPositionQueryWithPending = {
  me: {
    bidderPosition: {
      status: "PENDING",
      messageHeader: null,
      position: {
        id: "pending-bidder-position-id-from-polling",
        suggestedNextBid: null
      }
    }
  }
};
exports.confirmBidBidderPositionQueryWithPending = confirmBidBidderPositionQueryWithPending;
var confirmBidBidderPositionQueryWithOutbid = {
  me: {
    bidderPosition: {
      status: "OUTBID",
      messageHeader: "Your bid wasn’t high enough",
      position: {
        id: "pending-bidder-position-id-from-polling",
        suggestedNextBid: null
      }
    }
  }
};
exports.confirmBidBidderPositionQueryWithOutbid = confirmBidBidderPositionQueryWithOutbid;
//# sourceMappingURL=createBidderPosition.js.map