"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkDetailsQueryRenderer = exports.ArtworkDetailsFragmentContainer = exports.ArtworkDetails = void 0;

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _renderWithLoadProgress = require("../../../../Artsy/Relay/renderWithLoadProgress");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ArtworkDetailsAboutTheWorkFromArtsy = require("./ArtworkDetailsAboutTheWorkFromArtsy");

var _ArtworkDetailsAboutTheWorkFromPartner = require("./ArtworkDetailsAboutTheWorkFromPartner");

var _ArtworkDetailsAdditionalInfo = require("./ArtworkDetailsAdditionalInfo");

var _ArtworkDetailsArticles = require("./ArtworkDetailsArticles");

var _Artsy = require("../../../../Artsy");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _SystemQueryRenderer = require("../../../../Artsy/Relay/SystemQueryRenderer");

var _Events = _interopRequireDefault(require("../../../../Utils/Events"));

var _graphql, _dec, _dec2, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ArtworkDetails = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.ArtworkTabs
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec2 = (0, _Analytics.track)(function (_props, _state, _ref) {
  var _ref2 = _slicedToArray(_ref, 1),
      data = _ref2[0].data;

  return {
    flow: Schema.Flow.ArtworkAboutTheArtist,
    type: Schema.Type.Tab,
    label: data.trackingLabel,
    action_type: Schema.ActionType.Click
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtworkDetails, _Component);

  function ArtworkDetails() {
    _classCallCheck(this, ArtworkDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkDetails).apply(this, arguments));
  }

  _createClass(ArtworkDetails, [{
    key: "trackTabChange",
    value: function trackTabChange() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var artwork = this.props.artwork;
      return _react.default.createElement(ArtworkDetailsContainer, {
        mt: [4, 0],
        mb: 2
      }, _react.default.createElement(_palette.Tabs, {
        onChange: this.trackTabChange.bind(this)
      }, _react.default.createElement(_palette.Tab, {
        name: "About the work",
        data: {
          trackingLabel: "about_the_work"
        }
      }, _react.default.createElement(_ArtworkDetailsAboutTheWorkFromArtsy.ArtworkDetailsAboutTheWorkFromArtsyFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_ArtworkDetailsAboutTheWorkFromPartner.ArtworkDetailsAboutTheWorkFromPartnerFragmentContainer, {
        artwork: artwork
      }), _react.default.createElement(_ArtworkDetailsAdditionalInfo.ArtworkDetailsAdditionalInfoFragmentContainer, {
        artwork: artwork
      })), artwork.articles && artwork.articles.length && _react.default.createElement(_palette.Tab, {
        name: "Articles",
        data: {
          trackingLabel: "articles"
        }
      }, _react.default.createElement(_ArtworkDetailsArticles.ArtworkDetailsArticlesFragmentContainer, {
        artwork: artwork
      })), artwork.exhibition_history && _react.default.createElement(_palette.Tab, {
        name: "Exhibition history",
        data: {
          trackingLabel: "exhibition_history"
        }
      }, _react.default.createElement(ExhibitionHistory, {
        dangerouslySetInnerHTML: {
          __html: artwork.exhibition_history
        }
      })), artwork.literature && _react.default.createElement(_palette.Tab, {
        name: "Bibliography",
        data: {
          trackingLabel: "bibliography"
        }
      }, _react.default.createElement(Literature, {
        dangerouslySetInnerHTML: {
          __html: artwork.literature
        }
      })), artwork.provenance && _react.default.createElement(_palette.Tab, {
        name: "Provenance",
        data: {
          trackingLabel: "provenance"
        }
      }, _react.default.createElement(Provenance, {
        dangerouslySetInnerHTML: {
          __html: artwork.provenance
        }
      }))));
    }
  }]);

  return ArtworkDetails;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackTabChange", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackTabChange"), _class2.prototype)), _class2)) || _class);
exports.ArtworkDetails = ArtworkDetails;
var ArtworkDetailsFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkDetails, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkDetails_artwork.graphql");

    if (node.hash && node.hash !== "13d5539efa074030bd4c1860ac720be0") {
      console.error("The definition of 'ArtworkDetails_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkDetails_artwork.graphql");
  }
});
exports.ArtworkDetailsFragmentContainer = ArtworkDetailsFragmentContainer;

var ArtworkDetailsQueryRenderer = function ArtworkDetailsQueryRenderer(_ref3) {
  var artworkID = _ref3.artworkID;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {
      artworkID: artworkID
    },
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../../../__generated__/ArtworkDetailsQuery.graphql");

      if (node.hash && node.hash !== "17f9b5d03a9a73a10bf17f4ba27e4156") {
        console.error("The definition of 'ArtworkDetailsQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../../../__generated__/ArtworkDetailsQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(ArtworkDetailsFragmentContainer)
  });
}; // For block-level HTML (CMS) tab content collapse the first element's top margin
// so that content properly aligns to the top of the container.


exports.ArtworkDetailsQueryRenderer = ArtworkDetailsQueryRenderer;
var TabContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "ArtworkDetails__TabContainer",
  componentId: "du2j39-0"
})(["> *{margin-block-start:0;}"]);
var ArtworkDetailsContainer = TabContainer;
var ExhibitionHistory = TabContainer;
var Literature = TabContainer;
var Provenance = TabContainer;
//# sourceMappingURL=index.js.map