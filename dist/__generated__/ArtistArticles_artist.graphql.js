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
    "name": "ArtistArticles_artist",
    "type": "Artist",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": 10
    }, {
      "kind": "LocalArgument",
      "name": "last",
      "type": "Int",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "after",
      "type": "String",
      "defaultValue": null
    }, {
      "kind": "LocalArgument",
      "name": "before",
      "type": "String",
      "defaultValue": null
    }],
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }, {
      "kind": "LinkedField",
      "alias": null,
      "name": "articlesConnection",
      "storageKey": null,
      "args": [{
        "kind": "Variable",
        "name": "after",
        "variableName": "after",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "before",
        "variableName": "before",
        "type": "String"
      }, {
        "kind": "Variable",
        "name": "first",
        "variableName": "first",
        "type": "Int"
      }, {
        "kind": "Literal",
        "name": "in_editorial_feed",
        "value": true,
        "type": "Boolean"
      }, {
        "kind": "Variable",
        "name": "last",
        "variableName": "last",
        "type": "Int"
      }, {
        "kind": "Literal",
        "name": "sort",
        "value": "PUBLISHED_AT_DESC",
        "type": "ArticleSorts"
      }],
      "concreteType": "ArticleConnection",
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
        "kind": "LinkedField",
        "alias": null,
        "name": "pageCursors",
        "storageKey": null,
        "args": null,
        "concreteType": "PageCursors",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "Pagination_pageCursors",
          "args": null
        }]
      }, {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "ArticleEdge",
        "plural": true,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "Article",
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
            "name": "thumbnail_title",
            "args": null,
            "storageKey": null
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "Author",
            "plural": false,
            "selections": [{
              "kind": "ScalarField",
              "alias": null,
              "name": "name",
              "args": null,
              "storageKey": null
            }, v0]
          }, {
            "kind": "ScalarField",
            "alias": null,
            "name": "published_at",
            "args": [{
              "kind": "Literal",
              "name": "format",
              "value": "MMM Do, YYYY",
              "type": "String"
            }],
            "storageKey": "published_at(format:\"MMM Do, YYYY\")"
          }, {
            "kind": "LinkedField",
            "alias": null,
            "name": "thumbnail_image",
            "storageKey": null,
            "args": null,
            "concreteType": "Image",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "resized",
              "storageKey": "resized(width:300)",
              "args": [{
                "kind": "Literal",
                "name": "width",
                "value": 300,
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
          }, v0]
        }]
      }]
    }, v0]
  };
}();

node.hash = '9431572d880bde3b77ca6f9a8b570ef8';
var _default = node;
exports.default = _default;
//# sourceMappingURL=ArtistArticles_artist.graphql.js.map