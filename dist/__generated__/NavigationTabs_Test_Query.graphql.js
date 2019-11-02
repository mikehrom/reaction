"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query NavigationTabs_Test_Query {
  artist(id: "pablo-picasso") {
    ...NavigationTabs_artist
    __id
  }
}

fragment NavigationTabs_artist on Artist {
  id
  statuses {
    shows
    articles
    cv(minShowCount: 0)
    auction_lots
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
    "name": "NavigationTabs_Test_Query",
    "id": null,
    "text": "query NavigationTabs_Test_Query {\n  artist(id: \"pablo-picasso\") {\n    ...NavigationTabs_artist\n    __id\n  }\n}\n\nfragment NavigationTabs_artist on Artist {\n  id\n  statuses {\n    shows\n    articles\n    cv(minShowCount: 0)\n    auction_lots\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "NavigationTabs_Test_Query",
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
          "name": "NavigationTabs_artist",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "NavigationTabs_Test_Query",
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
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "statuses",
          "storageKey": null,
          "args": null,
          "concreteType": "ArtistStatuses",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "shows",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "articles",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "cv",
            "args": [{
              "kind": "Literal",
              "name": "minShowCount",
              "value": 0,
              "type": "Int"
            }],
            "storageKey": "cv(minShowCount:0)"
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "auction_lots",
            "args": null,
            "storageKey": null
          }]
        }, v1]
      }]
    }
  };
}();

node.hash = 'a8d7c581d9b550be3c81d4aeafc5b53e';
var _default = node;
exports.default = _default;
//# sourceMappingURL=NavigationTabs_Test_Query.graphql.js.map