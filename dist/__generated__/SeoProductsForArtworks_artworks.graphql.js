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
  },
      v1 = [{
    "kind": "Literal",
    "name": "shallow",
    "value": true,
    "type": "Boolean"
  }],
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
      v3 = [{
    "kind": "ScalarField",
    "alias": null,
    "name": "url",
    "args": [{
      "kind": "Literal",
      "name": "version",
      "value": "larger",
      "type": "[String]"
    }],
    "storageKey": "url(version:\"larger\")"
  }, {
    "kind": "ScalarField",
    "alias": "__id",
    "name": "id",
    "args": null,
    "storageKey": null
  }];
  return {
    "kind": "Fragment",
    "name": "SeoProductsForArtworks_artworks",
    "type": "FilterArtworks",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 30
    }, {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": ""
    }],
    "selections": [{
      "kind": "LinkedField",
      "alias": null,
      "name": "artworks_connection",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "after",
        "variableName": "after",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "first",
        "variableName": "first",
        "type": "Int"
      }],
      "concreteType": "ArtworkConnection",
      "plural": false,
      "selections": [{
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
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          }, v0, {
            "kind": "ScalarField",
            "alias": null,
            "name": "category",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "href",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_acquireable",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "is_price_range",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "availability",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "price_currency",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists",
            "storageKey": "artists(shallow:true)",
            "args": v1,
            "concreteType": "Artist",
            "plural": true,
            "selections": [v2, v0]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": v3
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "meta",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtworkMeta",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "description",
              "args": null,
              "storageKey": null
            }]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": "partner(shallow:true)",
            "args": v1,
            "concreteType": "Partner",
            "plural": false,
            "selections": [v2, {
              "kind": "ScalarField",
              "alias": null,
              "name": "type",
              "args": null,
              "storageKey": null
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "profile",
              "storageKey": null,
              "args": null,
              "concreteType": "Profile",
              "plural": false,
              "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "icon",
                "storageKey": null,
                "args": null,
                "concreteType": "Image",
                "plural": false,
                "selections": v3
              }, v0]
            }, {
              "kind": "LinkedField",
              "alias": null,
              "name": "locations",
              "storageKey": "locations(size:1)",
              "args": [{
                "kind": "Literal",
                "name": "size",
                "value": 1,
                "type": "Int"
              }],
              "concreteType": "Location",
              "plural": true,
              "selections": [{
                "kind": "ScalarField",
                "alias": null,
                "name": "address",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "address_2",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "city",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "state",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "country",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "postal_code",
                "args": null,
                "storageKey": null
              }, {
                "kind": "ScalarField",
                "alias": null,
                "name": "phone",
                "args": null,
                "storageKey": null
              }, v0]
            }, v0]
          }]
        }]
      }]
    }, v0]
  };
}();

node.hash = 'afaa66a6f2b7f10590f77f0064ab18e2';
var _default = node;
exports.default = _default;
//# sourceMappingURL=SeoProductsForArtworks_artworks.graphql.js.map