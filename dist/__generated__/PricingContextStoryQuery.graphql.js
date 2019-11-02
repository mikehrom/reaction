"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query PricingContextStoryQuery {
  artwork(id: "unused") {
    ...PricingContext_artwork
    __id
  }
}

fragment PricingContext_artwork on Artwork {
  priceCents {
    min
    max
  }
  artists {
    id
    __id
  }
  category
  pricingContext {
    appliedFiltersDisplay
    appliedFilters {
      dimension
      category
    }
    bins {
      maxPrice
      maxPriceCents
      minPrice
      minPriceCents
      numArtworks
    }
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
  },
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "category",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "PricingContextStoryQuery",
    "id": null,
    "text": "query PricingContextStoryQuery {\n  artwork(id: \"unused\") {\n    ...PricingContext_artwork\n    __id\n  }\n}\n\nfragment PricingContext_artwork on Artwork {\n  priceCents {\n    min\n    max\n  }\n  artists {\n    id\n    __id\n  }\n  category\n  pricingContext {\n    appliedFiltersDisplay\n    appliedFilters {\n      dimension\n      category\n    }\n    bins {\n      maxPrice\n      maxPriceCents\n      minPrice\n      minPriceCents\n      numArtworks\n    }\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "PricingContextStoryQuery",
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
          "name": "PricingContext_artwork",
          "args": null
        }, v1]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "PricingContextStoryQuery",
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
          "kind": "LinkedField",
          "alias": null,
          "name": "priceCents",
          "storageKey": null,
          "args": null,
          "concreteType": "PriceCents",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "min",
            "args": null,
            "storageKey": null
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "max",
            "args": null,
            "storageKey": null
          }]
        }, {
          "kind": "LinkedField",
          "alias": null,
          "name": "artists",
          "storageKey": null,
          "args": null,
          "concreteType": "Artist",
          "plural": true,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }, v1]
        }, v2, {
          "kind": "LinkedField",
          "alias": null,
          "name": "pricingContext",
          "storageKey": null,
          "args": null,
          "concreteType": "AnalyticsPricingContext",
          "plural": false,
          "selections": [{
            "kind": "ScalarField",
            "alias": null,
            "name": "appliedFiltersDisplay",
            "args": null,
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "appliedFilters",
            "storageKey": null,
            "args": null,
            "concreteType": "AnalyticsPriceContextFilterType",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "dimension",
              "args": null,
              "storageKey": null
            }, v2]
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "bins",
            "storageKey": null,
            "args": null,
            "concreteType": "AnalyticsHistogramBin",
            "plural": true,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "maxPrice",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "maxPriceCents",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "minPrice",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "minPriceCents",
              "args": null,
              "storageKey": null
            }, {
              "kind": "ScalarField",
              "alias": null,
              "name": "numArtworks",
              "args": null,
              "storageKey": null
            }]
          }]
        }, v1]
      }]
    }
  };
}();

node.hash = '82437c2a0e40f80f11ce8355a882fe17';
var _default = node;
exports.default = _default;
//# sourceMappingURL=PricingContextStoryQuery.graphql.js.map