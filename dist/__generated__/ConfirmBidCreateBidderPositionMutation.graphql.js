"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation ConfirmBidCreateBidderPositionMutation(
  $input: BidderPositionInput!
) {
  createBidderPosition(input: $input) {
    result {
      position {
        id
        sale_artwork {
          sale {
            registrationStatus {
              id
              __id
            }
            __id
          }
          __id
        }
        __id
      }
      status
      messageHeader: message_header
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "BidderPositionInput!",
    "defaultValue": null
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  },
      v3 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "createBidderPosition",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "BidderPositionInput!"
    }],
    "concreteType": "BidderPositionPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "result",
      "storageKey": null,
      "args": null,
      "concreteType": "BidderPositionResult",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "position",
        "storageKey": null,
        "args": null,
        "concreteType": "BidderPosition",
        "plural": false,
        "selections": [v1, {
          "kind": "LinkedField",
          "alias": null,
          "name": "sale_artwork",
          "storageKey": null,
          "args": null,
          "concreteType": "SaleArtwork",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "sale",
            "storageKey": null,
            "args": null,
            "concreteType": "Sale",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "registrationStatus",
              "storageKey": null,
              "args": null,
              "concreteType": "Bidder",
              "plural": false,
              "selections": [v1, v2]
            }, v2]
          }, v2]
        }, v2]
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": "messageHeader",
        "name": "message_header",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "ConfirmBidCreateBidderPositionMutation",
    "id": null,
    "text": "mutation ConfirmBidCreateBidderPositionMutation(\n  $input: BidderPositionInput!\n) {\n  createBidderPosition(input: $input) {\n    result {\n      position {\n        id\n        sale_artwork {\n          sale {\n            registrationStatus {\n              id\n              __id\n            }\n            __id\n          }\n          __id\n        }\n        __id\n      }\n      status\n      messageHeader: message_header\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ConfirmBidCreateBidderPositionMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v3
    },
    "operation": {
      "kind": "Operation",
      "name": "ConfirmBidCreateBidderPositionMutation",
      "argumentDefinitions": v0,
      "selections": v3
    }
  };
}();

node.hash = '4717cf31f235967d3d66738c0b632bc5';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ConfirmBidCreateBidderPositionMutation.graphql.js.map