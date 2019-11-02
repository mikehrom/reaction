"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query ArtworkSidebarClassification_Test_Query {
  artwork(id: "josef-albers-homage-to-the-square-85") {
    ...ArtworkSidebarClassification_artwork
    __id
  }
}

fragment ArtworkSidebarClassification_artwork on Artwork {
  attribution_class {
    short_description
    __id
  }
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "Literal",
    "name": "id",
    "value": "josef-albers-homage-to-the-square-85",
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
    "name": "ArtworkSidebarClassification_Test_Query",
    "id": null,
    "text": "query ArtworkSidebarClassification_Test_Query {\n  artwork(id: \"josef-albers-homage-to-the-square-85\") {\n    ...ArtworkSidebarClassification_artwork\n    __id\n  }\n}\n\nfragment ArtworkSidebarClassification_artwork on Artwork {\n  attribution_class {\n    short_description\n    __id\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ArtworkSidebarClassification_Test_Query",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"josef-albers-homage-to-the-square-85\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "ArtworkSidebarClassification_artwork",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "ArtworkSidebarClassification_Test_Query",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"josef-albers-homage-to-the-square-85\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "attribution_class",
          "storageKey": null,
          "args": null,
          "concreteType": "AttributionClass",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "short_description",
            "args": null,
            "storageKey": null
          }, v1]
        }, v1]
      }]
    }
  };
}();

node.hash = 'b200f285fd29cc25a68869f75e2f5c22';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarClassification_Test_Query.graphql.js.map