"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GeneSearchResults = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.array.map");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.set");

var _Artsy = require("../../../../Artsy");

var _SystemQueryRenderer = require("../../../../Artsy/Relay/SystemQueryRenderer");

var _Fonts = require("../../../../Assets/Fonts");

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../../../Utils/get");

var _Events = _interopRequireDefault(require("../../../../Utils/Events"));

var _ReplaceTransition = _interopRequireDefault(require("../../../Animation/ReplaceTransition"));

var _ItemLink = _interopRequireWildcard(require("../../ItemLink"));

var _graphql, _graphql2, _dec, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NoResultsContainer = _styledComponents.default.div.withConfig({
  displayName: "GeneSearchResults__NoResultsContainer",
  componentId: "sc-1wx1lgn-0"
})(["", ";text-align:center;font-style:italic;border-bottom:none;font-weight:lighter;"], (0, _Fonts.garamond)("s17"));

var GeneSearchResultsContent = (_dec = (0, _reactTracking.default)({}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GeneSearchResultsContent, _React$Component);

  function GeneSearchResultsContent(props, context) {
    var _this;

    _classCallCheck(this, GeneSearchResultsContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GeneSearchResultsContent).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "excludedGeneIds", void 0);

    _defineProperty(_assertThisInitialized(_this), "followCount", 0);

    _this.excludedGeneIds = new Set(_this.props.viewer.match_gene.map(function (item) {
      return item._id;
    }));
    return _this;
  }

  _createClass(GeneSearchResultsContent, [{
    key: "onGeneFollowed",
    value: function onGeneFollowed(gene, store, data) {
      var suggestedGene = store.get(data.followGene.gene.similar.edges[0].node.__id);
      this.excludedGeneIds.add(suggestedGene.getValue("_id"));
      var suggestedGenesRootField = store.get("client:root:viewer");
      var suggestedGenes = suggestedGenesRootField.getLinkedRecords("match_gene", {
        term: this.props.term
      });
      var updatedSuggestedGenes = suggestedGenes.map(function (geneItem) {
        return geneItem.getValue("id") === gene.id ? suggestedGene : geneItem;
      });
      suggestedGenesRootField.setLinkedRecords(updatedSuggestedGenes, "match_gene", {
        term: this.props.term
      });
      this.followCount += 1;
      this.props.updateFollowCount(this.followCount);
      this.props.tracking.trackEvent({
        action: "Followed Gene",
        entity_id: gene._id,
        entity_slug: gene.id,
        context_module: "onboarding search"
      });
    }
  }, {
    key: "followedGene",
    value: function followedGene(gene) {
      var _this2 = this;

      this.excludedGeneIds.add(gene._id);
      (0, _reactRelay.commitMutation)(this.props.relay.environment, {
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/GeneSearchResultsFollowGeneMutation.graphql");

          if (node.hash && node.hash !== "3d621343f23280ba5000ed5cb3e9da08") {
            console.error("The definition of 'GeneSearchResultsFollowGeneMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/GeneSearchResultsFollowGeneMutation.graphql");
        }),
        variables: {
          input: {
            gene_id: gene.id
          },
          excludedGeneIds: Array.from(this.excludedGeneIds)
        },
        updater: function updater(store, data) {
          return _this2.onGeneFollowed(gene, store, data);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var items = this.props.viewer.match_gene.map(function (item, index) {
        var imageUrl = (0, _get.get)(item, function (i) {
          return i.image.cropped.url;
        });
        return React.createElement(_ItemLink.LinkContainer, {
          key: "gene-search-results-".concat(index)
        }, React.createElement(_ReplaceTransition.default, {
          transitionEnterTimeout: 1000,
          transitionLeaveTimeout: 400
        }, React.createElement(_ItemLink.default, {
          href: "#",
          item: item,
          key: item.id,
          id: item.id,
          name: item.name,
          image_url: imageUrl,
          onClick: function onClick() {
            return _this3.followedGene(item);
          }
        })));
      });

      if (items.length < 1) {
        return React.createElement(NoResultsContainer, null, "No Results Found");
      }

      return React.createElement("div", null, items);
    }
  }]);

  return GeneSearchResultsContent;
}(React.Component), _temp)) || _class);
var GeneSearchResultsContentContainer = (0, _reactRelay.createFragmentContainer)(GeneSearchResultsContent, {
  viewer: function viewer() {
    var node = require("../../../../__generated__/GeneSearchResults_viewer.graphql");

    if (node.hash && node.hash !== "6adc25a242a646cc0d4169ff9d4e5c20") {
      console.error("The definition of 'GeneSearchResults_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/GeneSearchResults_viewer.graphql");
  }
});

var GeneSearchResultsComponent = function GeneSearchResultsComponent(_ref) {
  var term = _ref.term,
      relayEnvironment = _ref.relayEnvironment,
      updateFollowCount = _ref.updateFollowCount;
  return React.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    query: _graphql2 || (_graphql2 = function _graphql2() {
      var node = require("../../../../__generated__/GeneSearchResultsQuery.graphql");

      if (node.hash && node.hash !== "381a05e7887812030ff90a5d9f1cf08b") {
        console.error("The definition of 'GeneSearchResultsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../__generated__/GeneSearchResultsQuery.graphql");
    }),
    variables: {
      term: term
    },
    render: function render(_ref2) {
      var error = _ref2.error,
          props = _ref2.props;

      if (props) {
        return React.createElement(GeneSearchResultsContentContainer, {
          viewer: props.viewer,
          term: term,
          updateFollowCount: updateFollowCount
        });
      } else {
        return null;
      }
    }
  });
};

var GeneSearchResults = (0, _Artsy.withSystemContext)(GeneSearchResultsComponent);
exports.GeneSearchResults = GeneSearchResults;
//# sourceMappingURL=GeneSearchResults.js.map