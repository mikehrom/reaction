"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistHeaderFragmentContainer = exports.SmallArtistHeader = exports.LargeArtistHeader = exports.ArtistHeader = void 0;

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _FollowArtistButton = require("../../../Components/FollowButton/FollowArtistButton");

var _Carousel = require("../../../Components/v2/Carousel");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _openAuthModal = require("../../../Utils/openAuthModal");

var _Responsive = require("../../../Utils/Responsive");

var _user = require("../../../Utils/user");

var _dec, _class, _dec2, _dec3, _class2, _class3, _dec4, _dec5, _class4, _class5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * This H1 and H2 were added for SEO purposes
 * TODO: Remove when palette provides the ability to override typography element
 */
var H1 = _styledComponents.default.h1.withConfig({
  displayName: "ArtistHeader__H1",
  componentId: "m7aliw-0"
})(["all:initial;all:unset;margin:0;padding:0;font:normal;font-family:inherit;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:normal;"]);

var H2 = H1.withComponent("h2");
var carouselSlideTrack = _Analytics.track;
var ArtistHeader = (_dec = (0, _Analytics.track)(function (props) {
  return {
    context_module: "Header",
    // TODO: Old schema for the Follow button
    modelName: "artist",
    entity_slug: props.artist.id,
    entity_id: props.artist._id
  };
}), _dec(_class =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtistHeader, _Component);

  function ArtistHeader() {
    _classCallCheck(this, ArtistHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtistHeader).apply(this, arguments));
  }

  _createClass(ArtistHeader, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
        var mediator = _ref.mediator,
            user = _ref.user;
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _react.default.createElement(SmallArtistHeader, _extends({
          mediator: mediator,
          user: user
        }, props))), _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, _react.default.createElement(LargeArtistHeader, _extends({
          mediator: mediator,
          user: user
        }, props))));
      });
    }
  }]);

  return ArtistHeader;
}(_react.Component)) || _class);
exports.ArtistHeader = ArtistHeader;
var LargeArtistHeader = (_dec2 = (0, _Analytics.track)(), _dec3 = carouselSlideTrack(function (_props, _state, _ref2) {
  var _ref3 = _slicedToArray(_ref2, 1),
      slide = _ref3[0];

  return {
    action_type: Schema.ActionType.Click,
    // TODO: Or keep using ‘thumbnail’ as per old Force schema
    subject: "carouselSlide",
    // TODO: Are you sure this is no longer needed? Like, do we not need to
    //       identify the specific slide?
    destination_path: slide.href
  };
}), _dec2(_class2 = (_class3 =
/*#__PURE__*/
function (_Component2) {
  _inherits(LargeArtistHeader, _Component2);

  function LargeArtistHeader() {
    _classCallCheck(this, LargeArtistHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(LargeArtistHeader).apply(this, arguments));
  }

  _createClass(LargeArtistHeader, [{
    key: "onClickSlide",
    value: function onClickSlide(slide) {// no-op
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var props = this.props;
      var carousel = props.artist.carousel,
          user = props.user;
      var hasImages = carousel && carousel.images;
      var isAdmin = (0, _user.userIsAdmin)(user);
      return _react.default.createElement(_palette.Box, {
        width: "100%"
      }, hasImages && _react.default.createElement(_Carousel.Carousel, {
        height: "200px",
        data: carousel.images,
        render: function render(slide, slideIndex) {
          return _react.default.createElement("a", {
            href: slide.href,
            onClick: function onClick() {
              return _this.onClickSlide(slide);
            }
          }, _react.default.createElement(_palette.Image, {
            px: 5,
            lazyLoad: slideIndex > 5,
            src: slide.resized.url,
            width: slide.resized.width,
            height: slide.resized.height,
            preventRightClick: !isAdmin
          }));
        }
      }), _react.default.createElement(_palette.Spacer, {
        my: 2
      }), _react.default.createElement("span", {
        id: "jumpto-ArtistHeader"
      }), _react.default.createElement(_palette.Flex, {
        justifyContent: "space-between"
      }, _react.default.createElement(_palette.Box, null, _react.default.createElement(H1, null, _react.default.createElement(_palette.Serif, {
        size: "10"
      }, props.artist.name)), _react.default.createElement(_palette.Flex, null, _react.default.createElement(H2, null, _react.default.createElement(_palette.Serif, {
        size: "3"
      }, props.artist.nationality && "".concat(props.artist.nationality, ", "), props.artist.years)), _react.default.createElement(_palette.Spacer, {
        mr: 2
      }), props.artist.counts.follows > 50 && _react.default.createElement(_palette.Serif, {
        size: "3"
      }, props.artist.counts.follows.toLocaleString(), " followers"))), _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
        useDeprecatedButtonStyle: false,
        artist: props.artist,
        user: user,
        onOpenAuthModal: function onOpenAuthModal() {
          return handleOpenAuth(props.mediator, props.artist);
        }
      }, "Follow")));
    }
  }]);

  return LargeArtistHeader;
}(_react.Component), (_applyDecoratedDescriptor(_class3.prototype, "onClickSlide", [_dec3], Object.getOwnPropertyDescriptor(_class3.prototype, "onClickSlide"), _class3.prototype)), _class3)) || _class2);
exports.LargeArtistHeader = LargeArtistHeader;
var SmallArtistHeader = (_dec4 = (0, _Analytics.track)(), _dec5 = carouselSlideTrack(function (_props, _state, _ref4) {
  var _ref5 = _slicedToArray(_ref4, 1),
      slide = _ref5[0];

  return {
    action_type: Schema.ActionType.Click,
    // TODO: Or keep using ‘thumbnail’ as per old Force schema
    subject: "carouselSlide",
    // TODO: Are you sure this is no longer needed? Like, do we not need to
    //       identify the specific slide?
    destination_path: slide.href
  };
}), _dec4(_class4 = (_class5 =
/*#__PURE__*/
function (_Component3) {
  _inherits(SmallArtistHeader, _Component3);

  function SmallArtistHeader() {
    _classCallCheck(this, SmallArtistHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmallArtistHeader).apply(this, arguments));
  }

  _createClass(SmallArtistHeader, [{
    key: "onClickSlide",
    value: function onClickSlide(slide) {// no-op
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var carousel = props.artist.carousel,
          user = props.user;
      var hasImages = carousel && carousel.images;
      var isAdmin = (0, _user.userIsAdmin)(user);
      return _react.default.createElement(_palette.Flex, {
        flexDirection: "column"
      }, hasImages && _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Carousel.Carousel, {
        data: carousel.images,
        height: "200px",
        render: function render(slide) {
          return _react.default.createElement("a", {
            href: slide.href,
            onClick: function onClick() {
              return _this2.onClickSlide(slide);
            }
          }, _react.default.createElement(_palette.Image, {
            px: 5,
            src: slide.resized.url,
            width: slide.resized.width,
            height: slide.resized.height,
            preventRightClick: !isAdmin
          }));
        }
      }), _react.default.createElement(_palette.Spacer, {
        my: 2
      })), _react.default.createElement("span", {
        id: "jumpto-ArtistHeader"
      }), _react.default.createElement(_palette.Flex, {
        flexDirection: "column",
        alignItems: "center"
      }, _react.default.createElement(H1, null, _react.default.createElement(_palette.Serif, {
        size: "5"
      }, props.artist.name)), _react.default.createElement(_palette.Flex, null, _react.default.createElement(_palette.Box, {
        mx: 1
      }, _react.default.createElement(H2, null, _react.default.createElement(_palette.Serif, {
        size: "2"
      }, props.artist.nationality && "".concat(props.artist.nationality, ", "), props.artist.years))), props.artist.counts.follows > 50 && _react.default.createElement(_palette.Serif, {
        size: "2"
      }, props.artist.counts.follows.toLocaleString(), " followers"))), _react.default.createElement(_palette.Box, {
        my: 2
      }, _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
        artist: props.artist,
        useDeprecatedButtonStyle: false,
        buttonProps: {
          width: "100%"
        },
        user: user,
        onOpenAuthModal: function onOpenAuthModal() {
          return handleOpenAuth(props.mediator, props.artist);
        }
      }, "Follow")));
    }
  }]);

  return SmallArtistHeader;
}(_react.Component), (_applyDecoratedDescriptor(_class5.prototype, "onClickSlide", [_dec5], Object.getOwnPropertyDescriptor(_class5.prototype, "onClickSlide"), _class5.prototype)), _class5)) || _class4);
exports.SmallArtistHeader = SmallArtistHeader;

var handleOpenAuth = function handleOpenAuth(mediator, artist) {
  (0, _openAuthModal.openAuthModal)(mediator, {
    entity: artist,
    contextModule: Schema.ContextModule.ArtistPage,
    intent: _openAuthModal.AuthModalIntent.FollowArtist
  });
};

var ArtistHeaderFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtistHeader, {
  artist: function artist() {
    var node = require("../../../__generated__/ArtistHeader_artist.graphql");

    if (node.hash && node.hash !== "7c700420d84dd2fe567a9f2491518ea1") {
      console.error("The definition of 'ArtistHeader_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/ArtistHeader_artist.graphql");
  }
});
exports.ArtistHeaderFragmentContainer = ArtistHeaderFragmentContainer;
//# sourceMappingURL=ArtistHeader.js.map