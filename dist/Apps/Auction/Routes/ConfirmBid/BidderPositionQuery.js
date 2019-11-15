"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bidderPositionQuery = void 0;

var _reactRelay = require("react-relay");

var _relayRuntime = require("relay-runtime");

var _graphql;

// @types/relay-runtime 1.3.5 does not have the correct signature so making our
var fetchRelayModernQuery = _relayRuntime.fetchQuery;

var bidderPositionQuery = function bidderPositionQuery(environment, variables) {
  return fetchRelayModernQuery(environment, _graphql || (_graphql = function _graphql() {
    var node = require("../../../../__generated__/BidderPositionQuery.graphql");

    if (node.hash && node.hash !== "2b78470f9530768f48359c5a407ca3f4") {
      console.error("The definition of 'BidderPositionQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/BidderPositionQuery.graphql");
  }), variables, {
    force: true
  });
};

exports.bidderPositionQuery = bidderPositionQuery;
//# sourceMappingURL=BidderPositionQuery.js.map