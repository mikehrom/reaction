"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionsRailContent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _Artsy = require("../../Artsy");

var _renderWithLoadProgress = require("../../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../../Artsy/Relay/SystemQueryRenderer");

var _CollectionsRail = require("./CollectionsRail");

var _graphql;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CollectionsRailContent = function CollectionsRailContent(passedProps) {
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      showOnEditorial: true,
      size: 4,
      randomizationSeed: passedProps.articleId
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../__generated__/CollectionsRailQuery.graphql");

      if (node.hash && node.hash !== "e6e181f0317cc4947ddb0d4cf5613dca") {
        console.error("The definition of 'CollectionsRailQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/CollectionsRailQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(_CollectionsRail.CollectionsRailFragmentContainer),
    cacheConfig: {
      force: true
    }
  });
};

exports.CollectionsRailContent = CollectionsRailContent;
//# sourceMappingURL=index.js.map