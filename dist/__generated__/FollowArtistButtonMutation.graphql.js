"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation FollowArtistButtonMutation(
  $input: FollowArtistInput!
) {
  followArtist(input: $input) {
    artist {
      __id
      is_followed
      counts {
        follows
      }
    }
  }
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowArtistInput!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "followArtist",
    "storageKey": null,
    "args": [{
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "FollowArtistInput!"
    }],
    "concreteType": "FollowArtistPayload",
    "plural": false,
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "artist",
      "storageKey": null,
      "args": null,
      "concreteType": "Artist",
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
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "counts",
        "storageKey": null,
        "args": null,
        "concreteType": "ArtistCounts",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "follows",
          "args": null,
          "storageKey": null
        }]
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "FollowArtistButtonMutation",
    "id": null,
    "text": "mutation FollowArtistButtonMutation(\n  $input: FollowArtistInput!\n) {\n  followArtist(input: $input) {\n    artist {\n      __id\n      is_followed\n      counts {\n        follows\n      }\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "FollowArtistButtonMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "FollowArtistButtonMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();

node.hash = 'e65f3d9d751239122f1c59971dd45400';
var _default = node;
exports.default = _default;
//# sourceMappingURL=FollowArtistButtonMutation.graphql.js.map