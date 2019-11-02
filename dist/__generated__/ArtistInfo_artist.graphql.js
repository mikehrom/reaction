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
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  }, v0];
  return {
    "kind": "Fragment",
    "name": "ArtistInfo_artist",
    "type": "Artist",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "partner_category",
      "type": "[String]",
      "defaultValue": ["blue-chip", "top-established", "top-emerging"]
    }],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "collections",
      "args": null,
      "storageKey": null
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "_id",
      "args": null,
      "storageKey": null
    }, {
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
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "cropped",
        "storageKey": "cropped(height:100,width:100)",
        "args": [{
          "kind": "Literal",
          "name": "height",
          "value": 100,
          "type": "Int!"
        }, {
          "kind": "Literal",
          "name": "width",
          "value": 100,
          "type": "Int!"
        }],
        "concreteType": "CroppedImageUrl",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "formatted_nationality_and_birthday",
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
        "name": "partner_shows",
        "args": null,
        "storageKey": null
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "exhibition_highlights",
      "storageKey": "exhibition_highlights(size:3)",
      "args": [{
        "kind": "Literal",
        "name": "size",
        "value": 3,
        "type": "Int"
      }],
      "concreteType": "Show",
      "plural": true,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "SelectedExhibitions_exhibitions",
        "args": null
      }, v0]
    }, {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "highlights",
      "storageKey": null,
      "args": null,
      "concreteType": "ArtistHighlights",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "partners",
        "storageKey": null,
        "args": [{
          "kind": "Literal",
          "name": "display_on_partner_profile",
          "value": true,
          "type": "Boolean"
        }, {
          "kind": "Literal",
          "name": "first",
          "value": 10,
          "type": "Int"
        }, {
          "kind": "Variable",
          "name": "partner_category",
          "variableName": "partner_category",
          "type": "[String]"
        }, {
          "kind": "Literal",
          "name": "represented_by",
          "value": true,
          "type": "Boolean"
        }],
        "concreteType": "PartnerArtistConnection",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "PartnerArtistEdge",
          "plural": true,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Partner",
            "plural": false,
            "selections": v1
          }, v0]
        }]
      }]
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "auctionResults",
      "storageKey": "auctionResults(first:1,recordsTrusted:true,sort:\"PRICE_AND_DATE_DESC\")",
      "args": [{
        "kind": "Literal",
        "name": "first",
        "value": 1,
        "type": "Int"
      }, {
        "kind": "Literal",
        "name": "recordsTrusted",
        "value": true,
        "type": "Boolean"
      }, {
        "kind": "Literal",
        "name": "sort",
        "value": "PRICE_AND_DATE_DESC",
        "type": "AuctionResultSorts"
      }],
      "concreteType": "AuctionResultConnection",
      "plural": false,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "AuctionResultEdge",
        "plural": true,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "AuctionResult",
          "plural": false,
          "selections": v1
        }]
      }]
    }, {
      "kind": "FragmentSpread",
      "name": "ArtistBio_bio",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "ArtistMarketInsights_artist",
      "args": null
    }, {
      "kind": "FragmentSpread",
      "name": "FollowArtistButton_artist",
      "args": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "biography_blurb",
      "storageKey": "biography_blurb(format:\"HTML\",partner_bio:true)",
      "args": [{
        "kind": "Literal",
        "name": "format",
        "value": "HTML",
        "type": "Format"
      }, {
        "kind": "Literal",
        "name": "partner_bio",
        "value": true,
        "type": "Boolean"
      }],
      "concreteType": "ArtistBlurb",
      "plural": false,
      "selections": [{
        "kind": "ScalarField",
        "alias": null,
        "name": "text",
        "args": null,
        "storageKey": null
      }]
    }, v0]
  };
}();

node.hash = '67fd2074bbedcb4a1adab1fe594b0edc';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistInfo_artist.graphql.js.map