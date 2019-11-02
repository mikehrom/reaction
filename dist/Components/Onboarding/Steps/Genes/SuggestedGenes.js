"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuggestedGenes = void 0;

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

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

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

var SuggestedGenesContent = (_dec = (0, _reactTracking.default)({}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SuggestedGenesContent, _React$Component);

  function SuggestedGenesContent(props, context) {
    var _this;

    _classCallCheck(this, SuggestedGenesContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SuggestedGenesContent).call(this, props, context));

    _defineProperty(_assertThisInitialized(_this), "excludedGeneIds", void 0);

    _defineProperty(_assertThisInitialized(_this), "followCount", 0);

    _this.excludedGeneIds = new Set(_this.props.suggested_genes.map(function (item) {
      return item._id;
    }));
    return _this;
  }

  _createClass(SuggestedGenesContent, [{
    key: "onGeneFollowed",
    value: function onGeneFollowed(gene, store, data) {
      var suggestedGene = store.get(data.followGene.gene.similar.edges[0].node.__id);
      this.excludedGeneIds.add(suggestedGene.getValue("_id"));
      var suggestedGenesRootField = store.get("client:root");
      var suggestedGenes = suggestedGenesRootField.getLinkedRecords("suggested_genes");
      var updatedSuggestedGenes = suggestedGenes.map(function (geneItem) {
        return geneItem.getValue("id") === gene.id ? suggestedGene : geneItem;
      });
      suggestedGenesRootField.setLinkedRecords(updatedSuggestedGenes, "suggested_genes");
      this.followCount += 1;
      this.props.updateFollowCount(this.followCount);
      this.props.tracking.trackEvent({
        action: "Followed Gene",
        entity_id: gene._id,
        entity_slug: gene.id,
        context_module: "onboarding recommended"
      });
    }
  }, {
    key: "followedGene",
    value: function followedGene(gene) {
      var _this2 = this;

      this.excludedGeneIds.add(gene._id);
      (0, _reactRelay.commitMutation)(this.props.relay.environment, {
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../../__generated__/SuggestedGenesFollowGeneMutation.graphql");

          if (node.hash && node.hash !== "73a7ed7e539207c9a26f3edac371a0b0") {
            console.error("The definition of 'SuggestedGenesFollowGeneMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../../__generated__/SuggestedGenesFollowGeneMutation.graphql");
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

      var items = this.props.suggested_genes.map(function (item, index) {
        var imageUrl = (0, _get.get)(item, function (i) {
          return i.image.cropped.url;
        });
        return React.createElement(_ItemLink.LinkContainer, {
          key: "suggested-genes-".concat(index)
        }, React.createElement(_ReplaceTransition.default, {
          transitionEnterTimeout: 1000,
          transitionLeaveTimeout: 400
        }, React.createElement(_ItemLink.default, {
          href: "#",
          item: item,
          key: item.id,
          id: item.id,
          _id: item._id,
          name: item.name,
          image_url: imageUrl,
          onClick: function onClick() {
            return _this3.followedGene(item);
          }
        })));
      });
      return React.createElement("div", null, items);
    }
  }]);

  return SuggestedGenesContent;
}(React.Component), _temp)) || _class);
var SuggestedGenesContainer = (0, _reactRelay.createFragmentContainer)(SuggestedGenesContent, {
  suggested_genes: function suggested_genes() {
    var node = require("../../../../__generated__/SuggestedGenes_suggested_genes.graphql");

    if (node.hash && node.hash !== "cdb26030cf4a534bcfee76e4ca815a17") {
      console.error("The definition of 'SuggestedGenes_suggested_genes' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/SuggestedGenes_suggested_genes.graphql");
  }
});

var SuggestedGenesComponent = function SuggestedGenesComponent(_ref) {
  var relayEnvironment = _ref.relayEnvironment,
      updateFollowCount = _ref.updateFollowCount;
  return React.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    query: _graphql2 || (_graphql2 = function _graphql2() {
      var node = require("../../../../__generated__/SuggestedGenesQuery.graphql");

      if (node.hash && node.hash !== "42530c5bcd10f72dbb90c9e06541717d") {
        console.error("The definition of 'SuggestedGenesQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../__generated__/SuggestedGenesQuery.graphql");
    }),
    variables: {},
    render: function render(_ref2) {
      var error = _ref2.error,
          props = _ref2.props;

      if (props) {
        return React.createElement(SuggestedGenesContainer, {
          suggested_genes: props.suggested_genes,
          updateFollowCount: updateFollowCount
        });
      } else {
        return null;
      }
    }
  });
};

var SuggestedGenes = (0, _Artsy.withSystemContext)(SuggestedGenesComponent);
exports.SuggestedGenes = SuggestedGenes;
//# sourceMappingURL=SuggestedGenes.js.map