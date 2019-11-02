"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelatedWorksArtworkGridQueryRenderer = exports.RelatedWorksArtworkGridRefetchContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.filter");

var _take2 = _interopRequireDefault(require("lodash/take"));

var _palette = require("@artsy/palette");

var _index = require("./index");

var _Header = require("./Header");

var _Artsy = require("../../../../Artsy");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _renderWithLoadProgress = require("../../../../Artsy/Relay/renderWithLoadProgress");

var _ArtworkGrid = _interopRequireDefault(require("../../../../Components/ArtworkGrid"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _logger = _interopRequireDefault(require("../../../../Utils/logger"));

var _SystemQueryRenderer = require("../../../../Artsy/Relay/SystemQueryRenderer");

var _reactRelay = require("react-relay");

var _get = require("../../../../Utils/get");

var _graphql, _dec, _dec2, _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var logger = (0, _logger.default)("RelatedWorksArtworkGrid.tsx");
var MAX_TAB_ITEMS = 3;
var RelatedWorksArtworkGrid = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.RelatedWorks
}), _dec2 = (0, _Analytics.track)({
  type: Schema.Type.ArtworkBrick,
  action_type: Schema.ActionType.Click
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RelatedWorksArtworkGrid, _React$Component);

  function RelatedWorksArtworkGrid() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RelatedWorksArtworkGrid);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RelatedWorksArtworkGrid)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isLoading: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (tab) {
      _this.setState({
        isLoading: true
      });

      _this.props.relay.refetch({
        layerId: tab.data.layerId,
        artworkSlug: _this.props.artwork.id
      }, null, function (error) {
        _this.setState({
          isLoading: false
        });

        if (error) {
          logger.error(error);
        }
      });
    });

    return _this;
  }

  _createClass(RelatedWorksArtworkGrid, [{
    key: "trackBrickClick",
    value: function trackBrickClick() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$artwork = _this$props.artwork,
          layers = _this$props$artwork.layers,
          layer = _this$props$artwork.layer,
          mediator = _this$props.mediator; // The layer might have failed to fetch, so we use the `get` helper
      // instead of ordinary destructuring.

      var artworksConnection = (0, _get.get)(layer, function (l) {
        return l.artworksConnection;
      });

      if ((0, _index.hideGrid)(artworksConnection)) {
        return null;
      } // For sale artworks are already rendered on the page so we filter them from related works


      var names = (0, _take2.default)(layers.filter(function (l) {
        return l.name !== "For Sale";
      }), MAX_TAB_ITEMS);

      if (!names.length) {
        return _react.default.createElement(_react.default.Fragment, null);
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Header.Header, {
        title: "Related works"
      }), _react.default.createElement(_palette.Tabs, {
        justifyContent: "center",
        onChange: this.handleTabClick
      }, names.map(function (_ref, key) {
        var name = _ref.name,
            id = _ref.id;
        return _react.default.createElement(_palette.Tab, {
          name: name,
          key: key,
          data: {
            layerId: id
          }
        }, _react.default.createElement(ArtworksContainer, null, _this2.state.isLoading ? _react.default.createElement(_palette.Spinner, null) : _react.default.createElement(_ArtworkGrid.default, {
          artworks: artworksConnection,
          columnCount: [2, 3, 4],
          preloadImageCount: 0,
          mediator: mediator,
          onBrickClick: _this2.trackBrickClick.bind(_this2)
        })));
      })));
    }
  }]);

  return RelatedWorksArtworkGrid;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "trackBrickClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackBrickClick"), _class2.prototype)), _class2)) || _class);
var RelatedWorksArtworkGridRefetchContainer = (0, _reactRelay.createRefetchContainer)((0, _Artsy.withSystemContext)(RelatedWorksArtworkGrid), {
  artwork: function artwork() {
    var node = require("../../../../__generated__/RelatedWorksArtworkGrid_artwork.graphql");

    if (node.hash && node.hash !== "87cc1f280132a9c1649775ae146cec4d") {
      console.error("The definition of 'RelatedWorksArtworkGrid_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/RelatedWorksArtworkGrid_artwork.graphql");
  }
}, function () {
  var node = require("../../../../__generated__/RelatedWorksArtworkGridRefetchQuery.graphql");

  if (node.hash && node.hash !== "b9bb3b794827decc1ba6134e62e41ef2") {
    console.error("The definition of 'RelatedWorksArtworkGridRefetchQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../../../__generated__/RelatedWorksArtworkGridRefetchQuery.graphql");
}); // FIXME: Move to storybooks

exports.RelatedWorksArtworkGridRefetchContainer = RelatedWorksArtworkGridRefetchContainer;

var RelatedWorksArtworkGridQueryRenderer = function RelatedWorksArtworkGridQueryRenderer(_ref2) {
  var artworkSlug = _ref2.artworkSlug;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      artworkSlug: artworkSlug
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../../__generated__/RelatedWorksArtworkGridQuery.graphql");

      if (node.hash && node.hash !== "1d9c727e9d8d3fa3704e969d63825dec") {
        console.error("The definition of 'RelatedWorksArtworkGridQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../__generated__/RelatedWorksArtworkGridQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(RelatedWorksArtworkGridRefetchContainer)
  });
}; // Set min-height so that spinner doesn't collapse area on tab switch


exports.RelatedWorksArtworkGridQueryRenderer = RelatedWorksArtworkGridQueryRenderer;

var ArtworksContainer = _styledComponents.default.div.withConfig({
  displayName: "RelatedWorksArtworkGrid__ArtworksContainer",
  componentId: "sc-1nwb9bu-0"
})(["position:relative;min-height:500px;"]);
//# sourceMappingURL=RelatedWorksArtworkGrid.js.map