"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
mutation FollowArtistMutation(
  $input: FollowArtistInput!
) {
  followArtist(input: $input) {
    artist {
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
      }]
    }]
  }];
  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "FollowArtistMutation",
    "id": null,
    "text": "mutation FollowArtistMutation(\n  $input: FollowArtistInput!\n) {\n  followArtist(input: $input) {\n    artist {\n      __id\n      is_followed\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "FollowArtistMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1
    },
    "operation": {
      "kind": "Operation",
      "name": "FollowArtistMutation",
      "argumentDefinitions": v0,
      "selections": v1
    }
  };
}();

node.hash = '73c44bcd83a0d8cada5bcb910fb1a71f';
var _default = node;
exports.default = _default;
//# sourceMappingURL=FollowArtistMutation.graphql.js.map