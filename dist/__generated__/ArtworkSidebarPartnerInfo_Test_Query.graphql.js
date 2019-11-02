"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query ArtworkSidebarPartnerInfo_Test_Query {
  artwork(id: "artwork_from_partner_with_locations") {
    ...ArtworkSidebarPartnerInfo_artwork
    __id
  }
}

fragment ArtworkSidebarPartnerInfo_artwork on Artwork {
  partner {
    name
    href
    locations {
      city
      __id
    }
    __id
  }
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "Literal",
    "name": "id",
    "value": "artwork_from_partner_with_locations",
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
    "name": "ArtworkSidebarPartnerInfo_Test_Query",
    "id": null,
    "text": "query ArtworkSidebarPartnerInfo_Test_Query {\n  artwork(id: \"artwork_from_partner_with_locations\") {\n    ...ArtworkSidebarPartnerInfo_artwork\n    __id\n  }\n}\n\nfragment ArtworkSidebarPartnerInfo_artwork on Artwork {\n  partner {\n    name\n    href\n    locations {\n      city\n      __id\n    }\n    __id\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ArtworkSidebarPartnerInfo_Test_Query",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"artwork_from_partner_with_locations\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "ArtworkSidebarPartnerInfo_artwork",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "ArtworkSidebarPartnerInfo_Test_Query",
      "argumentDefinitions": [],
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artwork",
        "storageKey": "artwork(id:\"artwork_from_partner_with_locations\")",
        "args": v0,
        "concreteType": "Artwork",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "partner",
          "storageKey": null,
          "args": null,
          "concreteType": "Partner",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "href",
            "args": null,
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "locations",
            "storageKey": null,
            "args": null,
            "concreteType": "Location",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "city",
              "args": null,
              "storageKey": null
            }, v1]
          }, v1]
        }, v1]
      }]
    }
  };
}();

node.hash = '20a5df8282a7b351a9e22b6cf7e1223d';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarPartnerInfo_Test_Query.graphql.js.map