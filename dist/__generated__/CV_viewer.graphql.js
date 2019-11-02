"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* tslint:disable */
var node = function () {
  var v0 = [{
    "kind": "Variable",
    "name": "id",
    "variableName": "artist_id",
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
    "kind": "Fragment",
    "name": "CV_viewer",
    "type": "Viewer",
    "metadata": null,
    "argumentDefinitions": [{
      "kind": "LocalArgument",
      "name": "soloShows_at_a_fair",
      "type": "Boolean",
      "defaultValue": false
    }, {
      "kind": "LocalArgument",
      "name": "soloShows_solo_show",
      "type": "Boolean",
      "defaultValue": true
    }, {
      "kind": "LocalArgument",
      "name": "groupShows_at_a_fair",
      "type": "Boolean",
      "defaultValue": false
    }, {
      "kind": "LocalArgument",
      "name": "fairBooths_at_a_fair",
      "type": "Boolean",
      "defaultValue": true
    }, {
      "kind": "RootArgument",
      "name": "artist_id",
      "type": "String!"
    }],
    "selections": [{
      "kind": "LinkedField",
      "alias": "artist_soloShows",
      "name": "artist",
      "storageKey": null,
      "args": v0,
      "concreteType": "Artist",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "CVItem_artist",
        "args": [{
          "kind": "Variable",
          "name": "at_a_fair",
          "variableName": "soloShows_at_a_fair",
          "type": null
        }, {
          "kind": "Variable",
          "name": "solo_show",
          "variableName": "soloShows_solo_show",
          "type": null
        }]
      }, v1]
    }, {
      "kind": "LinkedField",
      "alias": "artist_groupShows",
      "name": "artist",
      "storageKey": null,
      "args": v0,
      "concreteType": "Artist",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "CVItem_artist",
        "args": [{
          "kind": "Variable",
          "name": "at_a_fair",
          "variableName": "groupShows_at_a_fair",
          "type": null
        }]
      }, v1]
    }, {
      "kind": "LinkedField",
      "alias": "artist_fairBooths",
      "name": "artist",
      "storageKey": null,
      "args": v0,
      "concreteType": "Artist",
      "plural": false,
      "selections": [{
        "kind": "FragmentSpread",
        "name": "CVItem_artist",
        "args": [{
          "kind": "Variable",
          "name": "at_a_fair",
          "variableName": "fairBooths_at_a_fair",
          "type": null
        }]
      }, v1]
    }]
  };
}();

node.hash = '036c65ba9f26e5eba899202fe6b96832';
var _default = node;
exports.default = _default;
//# sourceMappingURL=CV_viewer.graphql.js.map