"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation SaveArtworkMutation(
  $input: SaveArtworkInput!
) {
  saveArtwork(input: $input) {
    artwork {
      __id
      id
      is_saved
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "SaveArtworkInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "saveArtwork",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "SaveArtworkInput!"
    }],
    "concreteType": "SaveArtworkPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "artwork",
      "storageKey": null,
      "args": null,
      "concreteType": "Artwork",
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
        "name": "id",
        "args": null,
        "storageKey": null
      }, {
        "kind": "ScalarField",
        "alias": null,
        "name": "is_saved",
        "args": null,
        "storageKey": null
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "SaveArtworkMutation",
    "id": null,
    "text": "mutation SaveArtworkMutation(\n  $input: SaveArtworkInput!\n) {\n  saveArtwork(input: $input) {\n    artwork {\n      __id\n      id\n      is_saved\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "SaveArtworkMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "SaveArtworkMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();

node.hash = 'b993cf24b6d048abd7c9e33bd30dcc2a';
var _default = node;
exports.default = _default;
//# sourceMappingURL=SaveArtworkMutation.graphql.js.map