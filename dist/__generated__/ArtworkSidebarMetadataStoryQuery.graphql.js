"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query ArtworkSidebarMetadataStoryQuery {
  artwork(id: "unused") {
    ...ArtworkSidebarMetadata_artwork
    __id
  }
}

fragment ArtworkSidebarMetadata_artwork on Artwork {
  is_biddable
  edition_sets {
    __typename
    __id
  }
  sale_artwork {
    lot_label
    __id
  }
  ...ArtworkSidebarTitleInfo_artwork
  ...ArtworkSidebarSizeInfo_piece
  ...ArtworkSidebarClassification_artwork
  __id
}

fragment ArtworkSidebarTitleInfo_artwork on Artwork {
  title
  date
  medium
  __id
}

fragment ArtworkSidebarSizeInfo_piece on Sellable {
  dimensions {
    in
    cm
  }
  edition_of
  ... on Node {
    __id
  }
  ... on EditionSet {
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
    "name": "ArtworkSidebarMetadataStoryQuery",
    "id": null,
    "text": "query ArtworkSidebarMetadataStoryQuery {\n  artwork(id: \"unused\") {\n    ...ArtworkSidebarMetadata_artwork\n    __id\n  }\n}\n\nfragment ArtworkSidebarMetadata_artwork on Artwork {\n  is_biddable\n  edition_sets {\n    __typename\n    __id\n  }\n  sale_artwork {\n    lot_label\n    __id\n  }\n  ...ArtworkSidebarTitleInfo_artwork\n  ...ArtworkSidebarSizeInfo_piece\n  ...ArtworkSidebarClassification_artwork\n  __id\n}\n\nfragment ArtworkSidebarTitleInfo_artwork on Artwork {\n  title\n  date\n  medium\n  __id\n}\n\nfragment ArtworkSidebarSizeInfo_piece on Sellable {\n  dimensions {\n    in\n    cm\n  }\n  edition_of\n  ... on Node {\n    __id\n  }\n  ... on EditionSet {\n    __id\n  }\n}\n\nfragment ArtworkSidebarClassification_artwork on Artwork {\n  attribution_class {\n    short_description\n    __id\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ArtworkSidebarMetadataStoryQuery",
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
          "name": "ArtworkSidebarMetadata_artwork",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "ArtworkSidebarMetadataStoryQuery",
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
          "name": "medium",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "is_biddable",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "sale_artwork",
          "storageKey": null,
          "args": null,
          "concreteType": "SaleArtwork",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "lot_label",
            "args": null,
            "storageKey": null
          }, v1]
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "date",
          "args": null,
          "storageKey": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "edition_sets",
          "storageKey": null,
          "args": null,
          "concreteType": "EditionSet",
          "plural": true,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          }, v1]
        }, v1, {
          "kind": "LinkedField",
          "alias": null,
          "name": "dimensions",
          "storageKey": null,
          "args": null,
          "concreteType": "dimensions",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "in",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "cm",
            "args": null,
            "storageKey": null
          }]
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "edition_of",
          "args": null,
          "storageKey": null
        }, {
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
        }]
      }]
    }
  };
}();

node.hash = '50834a099dfaefc0cca3c285a4d8d316';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtworkSidebarMetadataStoryQuery.graphql.js.map