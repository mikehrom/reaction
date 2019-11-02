"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkGridExample = ArtworkGridExample;

require("core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _RootQueryRenderer = require("../../Artsy/Relay/RootQueryRenderer");

var _ArtworkGrid = _interopRequireDefault(require("../ArtworkGrid"));

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ArtworkGridExample(props) {
  return _react.default.createElement(_RootQueryRenderer.RootQueryRenderer, {
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../__generated__/ArtworkGridExampleQuery.graphql");

      if (node.hash && node.hash !== "734641ed095467662983692c58509959") {
        console.error("The definition of 'ArtworkGridExampleQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/ArtworkGridExampleQuery.graphql");
    }),
    variables: {
      artistID: props.artistID
    },
    render: function render(readyState) {
      return readyState.props && _react.default.createElement(_ArtworkGrid.default, _extends({}, readyState.props.artist, props));
    }
  });
}
//# sourceMappingURL=ArtworkGridExample.js.map