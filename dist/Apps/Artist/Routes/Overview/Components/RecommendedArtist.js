"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecommendedArtistFragmentContainer = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

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

var _Artsy = require("../../../../../Artsy");

var _Analytics = require("../../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../../Artsy/Analytics/Schema"));

var _FillwidthItem = _interopRequireDefault(require("../../../../../Components/Artwork/FillwidthItem"));

var _FollowArtistButton = require("../../../../../Components/FollowButton/FollowArtistButton");

var _Carousel = require("../../../../../Components/v2/Carousel");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = require("../../../../../Utils/get");

var _openAuthModal = require("../../../../../Utils/openAuthModal");

var _dec, _dec2, _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var HEIGHT = 150;

var handleOpenAuth = function handleOpenAuth(mediator, artist) {
  (0, _openAuthModal.openAuthModal)(mediator, {
    entity: artist,
    contextModule: Schema.ContextModule.RecommendedArtists,
    intent: _openAuthModal.AuthModalIntent.FollowArtist
  });
};

var RecommendedArtistWithTracking = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.RecommendedArtists
}), _dec2 = (0, _Analytics.track)({
  type: Schema.Type.Thumbnail,
  action_type: Schema.ActionType.Click
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RecommendedArtistWithTracking, _React$Component);

  function RecommendedArtistWithTracking() {
    _classCallCheck(this, RecommendedArtistWithTracking);

    return _possibleConstructorReturn(this, _getPrototypeOf(RecommendedArtistWithTracking).apply(this, arguments));
  }

  _createClass(RecommendedArtistWithTracking, [{
    key: "trackArtworkClicked",
    value: function trackArtworkClicked() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(RecommendedArtist, _extends({}, this.props, {
        onArtworkClicked: this.trackArtworkClicked.bind(this)
      }));
    }
  }]);

  return RecommendedArtistWithTracking;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackArtworkClicked", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackArtworkClicked"), _class2.prototype)), _class2)) || _class);

var RecommendedArtist = function RecommendedArtist(_ref) {
  var artist = _ref.artist,
      onArtworkClicked = _ref.onArtworkClicked;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      user = _useContext.user,
      mediator = _useContext.mediator;

  var artistData = (0, _get.get)(artist, function (a) {
    return a.artworks_connection.edges;
  }, []);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.EntityHeader, {
    mt: 4,
    imageUrl: (0, _get.get)(artist, function (a) {
      return a.image.cropped.url;
    }, ""),
    name: artist.name,
    meta: artist.formatted_nationality_and_birthday,
    href: artist.href,
    FollowButton: _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
      artist: artist,
      user: user,
      trackingData: {
        modelName: Schema.OwnerType.Artist,
        context_module: Schema.ContextModule.RecommendedArtists,
        entity_id: artist._id,
        entity_slug: artist.id
      },
      onOpenAuthModal: function onOpenAuthModal() {
        return handleOpenAuth(mediator, artist);
      },
      render: function render(_ref2) {
        var is_followed = _ref2.is_followed;
        return _react.default.createElement(_palette.Sans, {
          size: "2",
          weight: "medium",
          color: "black",
          style: {
            cursor: "pointer",
            textDecoration: "underline"
          }
        }, is_followed ? "Following" : "Follow");
      }
    })
  }), _react.default.createElement(_palette.Spacer, {
    mb: 3
  }), _react.default.createElement(_Carousel.Carousel, {
    height: "240px",
    data: artistData,
    render: function render(artwork) {
      var aspect_ratio = (0, _get.get)(artwork, function (a) {
        return a.node.image.aspect_ratio;
      }, 1);
      return _react.default.createElement(_FillwidthItem.default, {
        artwork: artwork.node,
        targetHeight: HEIGHT,
        imageHeight: HEIGHT,
        width: HEIGHT * aspect_ratio,
        margin: 10,
        user: user,
        mediator: mediator,
        onClick: onArtworkClicked,
        lazyLoad: true
      });
    },
    renderLeftArrow: function renderLeftArrow(_ref3) {
      var Arrow = _ref3.Arrow;
      return _react.default.createElement(ArrowContainer, null, _react.default.createElement(Arrow, null));
    },
    renderRightArrow: function renderRightArrow(_ref4) {
      var Arrow = _ref4.Arrow;
      return _react.default.createElement(ArrowContainer, null, _react.default.createElement(Arrow, null));
    }
  }));
};

var ArrowContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "RecommendedArtist__ArrowContainer",
  componentId: "sc-7bkuhu-0"
})(["align-self:flex-start;", "{height:60%;}"], _Carousel.ArrowButton);
var RecommendedArtistFragmentContainer = (0, _reactRelay.createFragmentContainer)(RecommendedArtistWithTracking, {
  artist: function artist() {
    var node = require("../../../../../__generated__/RecommendedArtist_artist.graphql");

    if (node.hash && node.hash !== "6fefba32685b9654f7a1648a8de05f36") {
      console.error("The definition of 'RecommendedArtist_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../__generated__/RecommendedArtist_artist.graphql");
  }
});
exports.RecommendedArtistFragmentContainer = RecommendedArtistFragmentContainer;
//# sourceMappingURL=RecommendedArtist.js.map