"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query Genes_Test_Query {
  artist(id: "pablo-picasso") {
    ...Genes_artist
    __id
  }
}

fragment Genes_artist on Artist {
  related {
    genes {
      edges {
        node {
          href
          name
          __id
        }
      }
    }
  }
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "Literal",
    "name": "id",
    "value": "pablo-picasso",
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
    "name": "Genes_Test_Query",
    "id": null,
    "text": "query Genes_Test_Query {\n  artist(id: \"pablo-picasso\") {\n    ...Genes_artist\n    __id\n  }\n}\n\nfragment Genes_artist on Artist {\n  related {\n    genes {\n      edges {\n        node {\n          href\n          name\n          __id\n        }\n      }\n    }\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "Genes_Test_Query",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": "artist(id:\"pablo-picasso\")",
        "args": v0,
        "concreteType": "Artist",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "Genes_artist",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "Genes_Test_Query",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": "artist(id:\"pablo-picasso\")",
        "args": v0,
        "concreteType": "Artist",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "related",
          "storageKey": null,
          "args": null,
          "concreteType": "ArtistRelatedData",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "genes",
            "storageKey": null,
            "args": null,
            "concreteType": "GeneConnection",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "GeneEdge",
              "plural": true,
              "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Gene",
                "plural": false,
                "selections": [{
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "href",
                  "args": null,
                  "storageKey": null
                }, {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                }, v1]
              }]
            }]
          }]
        }, v1]
      }]
    }
  };
}();

node.hash = '7128a2860e9be2c834d0dedcc9a376b3';
var _default = node;
exports.default = _default;
//# sourceMappingURL=Genes_Test_Query.graphql.js.map