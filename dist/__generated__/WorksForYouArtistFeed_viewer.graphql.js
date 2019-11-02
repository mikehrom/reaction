"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "WorksForYouArtistFeed_viewer",
    "type": "Viewer",
    "metadata": {
      "connection": [{
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": ["artist", "artworks_connection"]
      }]
    },
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int",
      "defaultValue": 10
    }, {
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "artistID",
      "type": "String!",
      "defaultValue": ""
    }, {
      "kind": "LocalArgument",
      "name": "filter",
      "type": "[ArtistArtworksFilters]",
      "defaultValue": ["IS_FOR_SALE"]
    }],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "artist",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "id",
        "variableName": "artistID",
        "type": "String!"
      }],
      "concreteType": "Artist",
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
        "name": "counts",
        "storageKey": null,
        "args": null,
        "concreteType": "ArtistCounts",
        "plural": false,
        "selections": [{
          "kind": "ScalarField",
          "alias": null,
          "name": "artworks",
          "args": null,
          "storageKey": null
        }, {
          "kind": "ScalarField",
          "alias": null,
          "name": "for_sale_artworks",
          "args": null,
          "storageKey": null
        }]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "image",
        "storageKey": null,
        "args": null,
        "concreteType": "Image",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "resized",
          "storageKey": "resized(height:80,width:80)",
          "args": [{
            "kind": "Literal",
            "name": "height",
            "value": 80,
            "type": "Int"
          }, {
            "kind": "Literal",
            "name": "width",
            "value": 80,
            "type": "Int"
          }],
          "concreteType": "ResizedImageUrl",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "url",
            "args": null,
            "storageKey": null
          }]
        }, {
          "kind": "ScalarField",
          "alias": "__id",
          "name": "id",
          "args": null,
          "storageKey": null
        }]
      }, {
        "kind": "LinkedField",
        "alias": "artworks_connection",
        "name": "__WorksForYouArtistFeed_artworks_connection_connection",
        "storageKey": null,
        "args": [{
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter",
          "type": "[ArtistArtworksFilters]"
        }, {
          "kind": "Literal",
          "name": "sort",
          "value": "PUBLISHED_AT_DESC",
          "type": "ArtworkSorts"
        }],
        "concreteType": "ArtworkConnection",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "hasNextPage",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "endCursor",
            "args": null,
            "storageKey": null
          }]
        }, {
          "kind": "FragmentSpread",
          "name": "ArtworkGrid_artworks",
          "args": null
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ArtworkEdge",
          "plural": true,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Artwork",
            "plural": false,
            "selections": [v0, {
              "kind": "ScalarField",
              "alias": null,
              "name": "__typename",
              "args": null,
              "storageKey": null
            }]
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          }]
        }]
      }, v0]
    }]
  };
}();

node.hash = '5cbe0566f4e5fc5e85dfa1d0b436f337';
var _default = node;
exports.default = _default;
//# sourceMappingURL=WorksForYouArtistFeed_viewer.graphql.js.map