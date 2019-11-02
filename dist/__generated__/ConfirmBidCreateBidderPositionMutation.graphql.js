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
        __id
      }
      status
      message_header
      message_description_md
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
      v1 = [{
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
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "__id",
          "args": null,
          "storageKey": null
        }]
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "message_header",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "message_description_md",
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
    "text": "mutation ConfirmBidCreateBidderPositionMutation(\n  $input: BidderPositionInput!\n) {\n  createBidderPosition(input: $input) {\n    result {\n      position {\n        id\n        __id\n      }\n      status\n      message_header\n      message_description_md\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ConfirmBidCreateBidderPositionMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "ConfirmBidCreateBidderPositionMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();

node.hash = '6c893ea6050f8571b02181c2d660da78';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ConfirmBidCreateBidderPositionMutation.graphql.js.map