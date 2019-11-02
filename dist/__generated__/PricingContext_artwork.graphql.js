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
      v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "category",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Fragment",
    "name": "PricingContext_artwork",
    "type": "Artwork",
    "metadata": null,
    "argumentDefinitions": [],
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
      }, v0]
    }, v1, {
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
        }, v1]
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
    }, v0]
  };
}();

node.hash = '0c7039a17ab5c85339f54ad2d644ca83';
var _default = node;
exports.default = _default;
//# sourceMappingURL=PricingContext_artwork.graphql.js.map