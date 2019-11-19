"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FollowArtistButtonFragmentContainer = exports.FollowArtistButton = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _extend2 = _interopRequireDefault(require("lodash/extend"));

var _palette = require("@artsy/palette");

var Artsy = _interopRequireWildcard(require("../../Artsy"));

var _FollowArtistPopover = require("../v2/FollowArtistPopover");

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("./Button");

var _ButtonDeprecated = require("./ButtonDeprecated");

var _reactRelay = require("react-relay");

var _graphql, _dec, _class, _class2, _temp;

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

var SuggestionsPopoverContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "FollowArtistButton__SuggestionsPopoverContainer",
  componentId: "sc-18qm6tr-0"
})(["position:absolute;z-index:1;"]);
var FollowArtistButton = (_dec = (0, _reactTracking.default)(), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowArtistButton, _React$Component);

  function FollowArtistButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FollowArtistButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FollowArtistButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      openSuggestions: false
    });

    _defineProperty(_assertThisInitialized(_this), "trackFollow", function () {
      var _this$props = _this.props,
          tracking = _this$props.tracking,
          is_followed = _this$props.artist.is_followed;
      var trackingData = _this.props.trackingData || {};
      var action = is_followed ? "Unfollowed Artist" : "Followed Artist";
      tracking.trackEvent((0, _extend2.default)({
        action: action
      }, trackingData));
    });

    _defineProperty(_assertThisInitialized(_this), "handleFollow", function (e) {
      e.preventDefault(); // If this button is part of a link, we _probably_ dont want to actually follow the link.

      var _this$props2 = _this.props,
          user = _this$props2.user,
          onOpenAuthModal = _this$props2.onOpenAuthModal;

      if (user && user.id) {
        _this.followArtistForUser(user);
      } else if (onOpenAuthModal) {
        var _config = {
          contextModule: "intext tooltip",
          intent: "follow artist",
          copy: "Sign up to follow artists"
        };
        onOpenAuthModal("register", _config);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "followArtistForUser", function (user) {
      var _this$props3 = _this.props,
          artist = _this$props3.artist,
          relay = _this$props3.relay,
          triggerSuggestions = _this$props3.triggerSuggestions;
      var newFollowCount = artist.is_followed ? artist.counts.follows - 1 : artist.counts.follows + 1;
      (0, _reactRelay.commitMutation)(relay.environment, {
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../__generated__/FollowArtistButtonMutation.graphql");

          if (node.hash && node.hash !== "e65f3d9d751239122f1c59971dd45400") {
            console.error("The definition of 'FollowArtistButtonMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../__generated__/FollowArtistButtonMutation.graphql");
        }),
        variables: {
          input: {
            artist_id: artist.id,
            unfollow: artist.is_followed
          }
        },
        optimisticResponse: {
          followArtist: {
            artist: {
              __id: artist.__id,
              is_followed: !artist.is_followed,
              counts: {
                follows: newFollowCount
              }
            }
          }
        },
        updater: function updater(store, data) {
          var artistProxy = store.get(data.followArtist.artist.__id);
          artistProxy.getLinkedRecord("counts").setValue(newFollowCount, "follows");
        }
      });

      _this.trackFollow();

      if (triggerSuggestions && !artist.is_followed) {
        _this.setState({
          openSuggestions: true
        });
      }
    });

    return _this;
  }

  _createClass(FollowArtistButton, [{
    key: "closePopover",
    value: function closePopover() {
      this.setState({
        openSuggestions: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          artist = _this$props4.artist,
          useDeprecatedButtonStyle = _this$props4.useDeprecatedButtonStyle,
          buttonProps = _this$props4.buttonProps,
          render = _this$props4.render,
          user = _this$props4.user;
      var openSuggestions = this.state.openSuggestions; // FIXME: Unify design language

      var Button = useDeprecatedButtonStyle ? _ButtonDeprecated.FollowButtonDeprecated : _Button.FollowButton; // Custom button renderer

      var content = render ? _react.default.createElement("span", {
        onClick: this.handleFollow
      }, " ", render(artist)) : _react.default.createElement(Button, {
        isFollowed: artist && artist.is_followed,
        handleFollow: this.handleFollow,
        buttonProps: buttonProps
      });
      return _react.default.createElement(_react.default.Fragment, null, content, openSuggestions && _react.default.createElement(SuggestionsPopoverContainer, null, _react.default.createElement(_FollowArtistPopover.FollowArtistPopoverFragmentContainer, {
        user: user,
        artist: artist,
        onClose: function onClose() {
          return _this2.closePopover();
        }
      })));
    }
  }]);

  return FollowArtistButton;
}(_react.default.Component), _defineProperty(_class2, "defaultProps", {
  useDeprecatedButtonStyle: true,
  buttonProps: {},
  triggerSuggestions: false
}), _temp)) || _class);
exports.FollowArtistButton = FollowArtistButton;
var FollowArtistButtonFragmentContainer = (0, _reactRelay.createFragmentContainer)(Artsy.withSystemContext(FollowArtistButton), {
  artist: function artist() {
    var node = require("../../__generated__/FollowArtistButton_artist.graphql");

    if (node.hash && node.hash !== "a4fcc153d1a5105f48b549ecf97fa9f1") {
      console.error("The definition of 'FollowArtistButton_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/FollowArtistButton_artist.graphql");
  }
});
exports.FollowArtistButtonFragmentContainer = FollowArtistButtonFragmentContainer;
//# sourceMappingURL=FollowArtistButton.js.map