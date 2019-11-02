"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation CollectorIntentUpdateCollectorProfileMutation(
  $input: UpdateCollectorProfileInput!
) {
  updateCollectorProfile(input: $input) {
    intents
    __id
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCollectorProfileInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "updateCollectorProfile",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "UpdateCollectorProfileInput!"
    }],
    "concreteType": "UpdateCollectorProfilePayload",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "intents",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "__id",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "CollectorIntentUpdateCollectorProfileMutation",
    "id": null,
    "text": "mutation CollectorIntentUpdateCollectorProfileMutation(\n  $input: UpdateCollectorProfileInput!\n) {\n  updateCollectorProfile(input: $input) {\n    intents\n    __id\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "CollectorIntentUpdateCollectorProfileMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "CollectorIntentUpdateCollectorProfileMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();

node.hash = '7587732c7a2cfaaf18f92a3330980598';
var _default = node;
exports.default = _default;
//# sourceMappingURL=CollectorIntentUpdateCollectorProfileMutation.graphql.js.map