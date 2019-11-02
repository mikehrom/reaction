"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation SendFeedbackSearchResultsMutation(
  $input: SendFeedbackMutationInput!
) {
  sendFeedback(input: $input) {
    feedbackOrError {
      __typename
      ... on SendFeedbackMutationSuccess {
        feedback {
          message
          __id
        }
      }
      ... on SendFeedbackMutationFailure {
        mutationError {
          type
          message
          detail
        }
      }
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SendFeedbackMutationInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "SendFeedbackMutationInput!"
  }],
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "message",
    "args": null,
    "storageKey": null
  },
      v3 = {
    "kind": "InlineFragment",
    "type": "SendFeedbackMutationFailure",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "mutationError",
      "storageKey": null,
      "args": null,
      "concreteType": "GravityMutationError",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "type",
        "args": null,
        "storageKey": null
      }, v2, {
        "kind": "ScalarField",
        "alias": null,
        "name": "detail",
        "args": null,
        "storageKey": null
      }]
    }]
  },
      v4 = {
    "kind": "InlineFragment",
    "type": "SendFeedbackMutationSuccess",
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "feedback",
      "storageKey": null,
      "args": null,
      "concreteType": "Feedback",
      "plural": false,
      "selections": [v2, {
        "kind": "ScalarField",
        "alias": null,
        "name": "__id",
        "args": null,
        "storageKey": null
      }]
    }]
  };
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "SendFeedbackSearchResultsMutation",
    "id": null,
    "text": "mutation SendFeedbackSearchResultsMutation(\n  $input: SendFeedbackMutationInput!\n) {\n  sendFeedback(input: $input) {\n    feedbackOrError {\n      __typename\n      ... on SendFeedbackMutationSuccess {\n        feedback {\n          message\n          __id\n        }\n      }\n      ... on SendFeedbackMutationFailure {\n        mutationError {\n          type\n          message\n          detail\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "SendFeedbackSearchResultsMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "sendFeedback",
        "storageKey": null,
        "args": v1,
        "concreteType": "SendFeedbackMutationPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "feedbackOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [v3, v4]
        }]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "SendFeedbackSearchResultsMutation",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "sendFeedback",
        "storageKey": null,
        "args": v1,
        "concreteType": "SendFeedbackMutationPayload",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "feedbackOrError",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }, v3, v4]
        }]
      }]
    }
  };
}();

node.hash = '37c6ef609611534460d2c76061671dac';
var _default = node;
exports.default = _default;
//# sourceMappingURL=SendFeedbackSearchResultsMutation.graphql.js.map