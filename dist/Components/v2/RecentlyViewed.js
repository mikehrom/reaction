"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecentlyViewedQueryRenderer = exports.RecentlyViewedFragmentContainer = exports.RecentlyViewed = void 0;

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

var _palette = require("@artsy/palette");

var _Artsy = require("../../Artsy");

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _renderWithLoadProgress = require("../../Artsy/Relay/renderWithLoadProgress");

var _SystemQueryRenderer = require("../../Artsy/Relay/SystemQueryRenderer");

var _FillwidthItem = require("../Artwork/FillwidthItem");

var _Carousel = require("./Carousel");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../Utils/get");

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

var HEIGHT = 180;
var RecentlyViewed = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.RecentlyViewedArtworks
}), _dec2 = (0, _Analytics.track)({
  type: Schema.Type.Thumbnail,
  action_type: Schema.ActionType.Click
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RecentlyViewed, _React$Component);

  function RecentlyViewed() {
    _classCallCheck(this, RecentlyViewed);

    return _possibleConstructorReturn(this, _getPrototypeOf(RecentlyViewed).apply(this, arguments));
  }

  _createClass(RecentlyViewed, [{
    key: "trackClick",
    value: function trackClick() {//
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var me = this.props.me;
      return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
        var user = _ref.user,
            mediator = _ref.mediator;
        return me && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Separator, {
          my: 6
        }), _react.default.createElement(_palette.Serif, {
          size: "6"
        }, "Recently viewed"), _react.default.createElement(_palette.Spacer, {
          mb: 3
        }), _react.default.createElement(_Carousel.Carousel, {
          data: me.recentlyViewedArtworks.edges,
          render: function render(artwork) {
            var aspect_ratio = (0, _get.get)(artwork, function (w) {
              return w.node.image.aspect_ratio;
            }, 1);
            return _react.default.createElement(_FillwidthItem.FillwidthItem, {
              lazyLoad: true,
              artwork: artwork.node,
              targetHeight: HEIGHT,
              imageHeight: HEIGHT,
              width: HEIGHT * aspect_ratio,
              margin: 10,
              user: user,
              mediator: mediator,
              onClick: _this.trackClick.bind(_this)
            });
          },
          renderLeftArrow: function renderLeftArrow(_ref2) {
            var Arrow = _ref2.Arrow;
            return _react.default.createElement(ArrowContainer, null, _react.default.createElement(Arrow, null));
          },
          renderRightArrow: function renderRightArrow(_ref3) {
            var Arrow = _ref3.Arrow;
            return _react.default.createElement(ArrowContainer, null, me.recentlyViewedArtworks.edges.length > 4 && _react.default.createElement(Arrow, null));
          }
        }));
      });
    }
  }]);

  return RecentlyViewed;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackClick"), _class2.prototype)), _class2)) || _class);
exports.RecentlyViewed = RecentlyViewed;
var ArrowContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "RecentlyViewed__ArrowContainer",
  componentId: "sc-1kbjf2m-0"
})(["align-self:flex-start;", "{height:60%;}"], _Carousel.ArrowButton);
var RecentlyViewedFragmentContainer = (0, _reactRelay.createFragmentContainer)(RecentlyViewed, {
  me: function me() {
    var node = require("../../__generated__/RecentlyViewed_me.graphql");

    if (node.hash && node.hash !== "46e488d1fa37b7fa9c4ce73cbbd0c694") {
      console.error("The definition of 'RecentlyViewed_me' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/RecentlyViewed_me.graphql");
  }
});
exports.RecentlyViewedFragmentContainer = RecentlyViewedFragmentContainer;

var RecentlyViewedQueryRenderer = function RecentlyViewedQueryRenderer() {
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      user = _useContext.user,
      relayEnvironment = _useContext.relayEnvironment;

  if (!user) {
    return null;
  }

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    variables: {},
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../__generated__/RecentlyViewedQuery.graphql");

      if (node.hash && node.hash !== "7fd8678ce0ceade9e3f696b783d190df") {
        console.error("The definition of 'RecentlyViewedQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/RecentlyViewedQuery.graphql");
    }),
    render: (0, _renderWithLoadProgress.renderWithLoadProgress)(RecentlyViewedFragmentContainer)
  });
};

exports.RecentlyViewedQueryRenderer = RecentlyViewedQueryRenderer;
//# sourceMappingURL=RecentlyViewed.js.map