"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query createTestEnvQuery {
  artwork(id: "unused") {
    ...createTestEnv_artwork
    __id
  }
}

fragment createTestEnv_artwork on Artwork {
  title
  artist {
    name
    __id
  }
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "Literal",
    "name": "id",
    "value": "unused",
    "type": "String!"
  }],
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "createTestEnvQuery",
    "id": null,
    "text": "query createTestEnvQuery {\n  artwork(id: \"unused\") {\n    ...createTestEnv_artwork\n    __id\n  }\n}\n\nfragment createTestEnv_artwork on Artwork {\n  title\n  artist {\n    name\n    __id\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "createTestEnvQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"unused\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "createTestEnv_artwork",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "createTestEnvQuery",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"unused\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        }, {
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
            "name": "name",
            "args": null,
            "storageKey": null
          }, v1]
        }, v1]
      }]
    }
  };
}();

node.hash = '47aed525caea3505fcfc274e548e04d0';
var _default = node;
exports.default = _default;
//# sourceMappingURL=createTestEnvQuery.graphql.js.map