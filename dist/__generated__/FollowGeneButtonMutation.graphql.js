"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation FollowGeneButtonMutation(
  $input: FollowGeneInput!
) {
  followGene(input: $input) {
    gene {
      __id
      is_followed
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowGeneInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "followGene",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "FollowGeneInput!"
    }],
    "concreteType": "FollowGenePayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "gene",
      "storageKey": null,
      "args": null,
      "concreteType": "Gene",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "__id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_followed",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "FollowGeneButtonMutation",
    "id": null,
    "text": "mutation FollowGeneButtonMutation(\n  $input: FollowGeneInput!\n) {\n  followGene(input: $input) {\n    gene {\n      __id\n      is_followed\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "FollowGeneButtonMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "FollowGeneButtonMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();

node.hash = 'db00447f1c033c153937a7380efcbc6b';
var _default = node;
exports.default = _default;
//# sourceMappingURL=FollowGeneButtonMutation.graphql.js.map