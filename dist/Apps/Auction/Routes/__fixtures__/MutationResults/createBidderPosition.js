"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBidderPositionFailed = exports.createBidderPositionSuccessful = void 0;
var createBidderPositionSuccessful = {
  createBidderPosition: {
    result: {
      position: {
        id: "positionid"
      },
      status: "SUCCESS",
      message_header: null,
      message_description_md: null
    }
  }
};
exports.createBidderPositionSuccessful = createBidderPositionSuccessful;
var createBidderPositionFailed = {
  createBidderPosition: {
    result: {
      position: null,
      status: "FAILED",
      message_header: "The `createBidderPosition` mutation failed.",
      message_description_md: null
    }
  }
};
exports.createBidderPositionFailed = createBidderPositionFailed;
//# sourceMappingURL=createBidderPosition.js.map