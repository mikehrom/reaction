"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FollowButton = exports.StyledFollowButton = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var Artsy = _interopRequireWildcard(require("../Artsy"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _graphql;

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

var SIZE = 32;

var StyledFollowButton = _styledComponents.default.div.withConfig({
  displayName: "Follow__StyledFollowButton",
  componentId: "dg8fq7-0"
})(["display:flex;cursor:pointer;color:black;font-size:16px;align-items:center;margin-left:5px;&::after{content:\"Follow\";}&:hover{color:", ";}&[data-followed=\"true\"]{&::after{content:\"Following\";}&:hover{color:", ";&::after{content:\"Unfollow\";}}}"], _Colors.default.purpleRegular, _Colors.default.redBold);

exports.StyledFollowButton = StyledFollowButton;

var FollowButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowButton, _React$Component);

  function FollowButton() {
    _classCallCheck(this, FollowButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(FollowButton).apply(this, arguments));
  }

  _createClass(FollowButton, [{
    key: "handleFollow",
    value: function handleFollow() {
      var _this$props = this.props,
          artist = _this$props.artist,
          user = _this$props.user,
          relay = _this$props.relay;

      if (user && user.id) {
        (0, _reactRelay.commitMutation)(relay.environment, {
          mutation: _graphql || (_graphql = function _graphql() {
            var node = require("../__generated__/FollowArtistMutation.graphql");

            if (node.hash && node.hash !== "73c44bcd83a0d8cada5bcb910fb1a71f") {
              console.error("The definition of 'FollowArtistMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
            }

            return require("../__generated__/FollowArtistMutation.graphql");
          }),
          variables: {
            input: {
              artist_id: artist.id,
              unfollow: artist.is_followed
            }
          },
          // TODO: Relay Modern: This is not working yet
          optimisticResponse: {
            followArtist: {
              artist: {
                __id: artist.__id,
                is_followed: !artist.is_followed
              }
            }
          }
        });
      } else {
        window.location.href = "/login";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          style = _this$props2.style,
          artist = _this$props2.artist;
      var iconName = artist.is_followed ? "follow-circle.is-following" : "follow-circle";
      return _react.default.createElement(StyledFollowButton, {
        className: this.props.className,
        style: style,
        onClick: function onClick() {
          return _this.handleFollow();
        },
        "data-followed": artist.is_followed
      }, _react.default.createElement(_Icon.default, {
        name: iconName,
        height: SIZE,
        style: {
          verticalAlign: "middle",
          color: "inherit",
          margin: 0
        }
      }));
    }
  }]);

  return FollowButton;
}(_react.default.Component);

exports.FollowButton = FollowButton;

var _default = (0, _reactRelay.createFragmentContainer)(Artsy.withSystemContext(FollowButton), {
  artist: function artist() {
    var node = require("../__generated__/Follow_artist.graphql");

    if (node.hash && node.hash !== "e2c8c185e485a2f0cf3079ead7217a61") {
      console.error("The definition of 'Follow_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../__generated__/Follow_artist.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=Follow.js.map