"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */

/*
query FollowArtistPopoverQuery(
  $artistID: String!
) {
  artist(id: $artistID) {
    ...FollowArtistPopover_artist
    __id
  }
}

fragment FollowArtistPopover_artist on Artist {
  related {
    suggested(first: 3, exclude_followed_artists: true) {
      edges {
        node {
          __id
          _id
          ...FollowArtistPopoverRow_artist
        }
      }
    }
  }
  __id
}

fragment FollowArtistPopoverRow_artist on Artist {
  _id
  name
  image {
    cropped(width: 45, height: 45) {
      url
    }
    __id: id
  }
  __id
}
*/
var node = function () {
  var v0 = [{
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String!",
    "defaultValue": null
  }],
      v1 = [{
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID",
    "type": "String!"
  }],
      v2 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
    "args": null,
    "storageKey": null
  };
  return {
    "kind": "Request",
    "operationKind": "query",
    "name": "FollowArtistPopoverQuery",
    "id": null,
    "text": "query FollowArtistPopoverQuery(\n  $artistID: String!\n) {\n  artist(id: $artistID) {\n    ...FollowArtistPopover_artist\n    __id\n  }\n}\n\nfragment FollowArtistPopover_artist on Artist {\n  related {\n    suggested(first: 3, exclude_followed_artists: true) {\n      edges {\n        node {\n          __id\n          _id\n          ...FollowArtistPopoverRow_artist\n        }\n      }\n    }\n  }\n  __id\n}\n\nfragment FollowArtistPopoverRow_artist on Artist {\n  _id\n  name\n  image {\n    cropped(width: 45, height: 45) {\n      url\n    }\n    __id: id\n  }\n  __id\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "FollowArtistPopoverQuery",
      "type": "Query",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": false,
        "selections": [{
          "kind": "FragmentSpread",
          "name": "FollowArtistPopover_artist",
          "args": null
        }, v2]
      }]
    },
    "operation": {
      "kind": "Operation",
      "name": "FollowArtistPopoverQuery",
      "argumentDefinitions": v0,
      "selections": [{
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": false,
        "selections": [{
          "kind": "LinkedField",
          "alias": null,
          "name": "related",
          "storageKey": null,
          "args": null,
          "concreteType": "ArtistRelatedData",
          "plural": false,
          "selections": [{
            "kind": "LinkedField",
            "alias": null,
            "name": "suggested",
            "storageKey": "suggested(exclude_followed_artists:true,first:3)",
            "args": [{
              "kind": "Literal",
              "name": "exclude_followed_artists",
              "value": true,
              "type": "Boolean"
            }, {
              "kind": "Literal",
              "name": "first",
              "value": 3,
              "type": "Int"
            }],
            "concreteType": "ArtistConnection",
            "plural": false,
            "selections": [{
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "ArtistEdge",
              "plural": true,
              "selections": [{
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Artist",
                "plural": false,
                "selections": [v2, {
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
                    "storageKey": "cropped(height:45,width:45)",
                    "args": [{
                      "kind": "Literal",
                      "name": "height",
                      "value": 45,
                      "type": "Int!"
                    }, {
                      "kind": "Literal",
                      "name": "width",
                      "value": 45,
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
                }]
              }]
            }]
          }]
        }, v2]
      }]
    }
  };
}();

node.hash = '364b417ae6a387a733637fd589434356';
var _default = node;
exports.default = _default;
//# sourceMappingURL=FollowArtistPopoverQuery.graphql.js.map