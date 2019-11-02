"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = {
  "kind": "Fragment",
  "name": "FollowArtistButton_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [{
    "kind": "LocalArgument",
    "name": "showFollowSuggestions",
    "type": "Boolean",
    "defaultValue": false
  }],
  "selections": [{
    "kind": "ScalarField",
    "alias": null,
    "name": "__id",
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
    "name": "id",
    "args": null,
    "storageKey": null
  }, {
    "kind": "ScalarField",
    "alias": null,
    "name": "is_followed",
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
      "name": "follows",
      "args": null,
      "storageKey": null
    }]
  }, {
    "kind": "Condition",
    "passingValue": true,
    "condition": "showFollowSuggestions",
    "selections": [{
      "kind": "FragmentSpread",
      "name": "FollowArtistPopover_artist",
      "args": null
    }]
  }]
};
node.hash = 'a4fcc153d1a5105f48b549ecf97fa9f1';
var _default = node;
exports.default = _default;
//# sourceMappingURL=FollowArtistButton_artist.graphql.js.map