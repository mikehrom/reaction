"use strict";

require("core-js/modules/es6.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FollowArtistPopoverRowFragmentContainer = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _unstated = require("unstated");

var _get = require("../../../Utils/get");

var _state = require("./state");

var _graphql;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ArtistName = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "FollowArtistPopoverRow__ArtistName",
  componentId: "sc-1kchny5-0"
})(["width:125px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;"]);

var FollowArtistPopoverRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowArtistPopoverRow, _React$Component);

  function FollowArtistPopoverRow() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FollowArtistPopoverRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FollowArtistPopoverRow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      swappedArtist: null,
      followed: false
    });

    return _this;
  }

  _createClass(FollowArtistPopoverRow, [{
    key: "handleClick",
    value: function handleClick(artistID) {
      var _this2 = this;

      var _this$props = this.props,
          user = _this$props.user,
          relay = _this$props.relay,
          excludeArtistIdsState = _this$props.excludeArtistIdsState;
      var excludeArtistIds = excludeArtistIdsState.state.excludeArtistIds;

      if (user && user.id) {
        (0, _reactRelay.commitMutation)(relay.environment, {
          mutation: _graphql || (_graphql = function _graphql() {
            var node = require("../../../__generated__/FollowArtistPopoverRowMutation.graphql");

            if (node.hash && node.hash !== "00f75e29203f26f7db1cb195fcda5978") {
              console.error("The definition of 'FollowArtistPopoverRowMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
            }

            return require("../../../__generated__/FollowArtistPopoverRowMutation.graphql");
          }),
          variables: {
            input: {
              artist_id: artistID,
              unfollow: false
            },
            excludeArtistIds: excludeArtistIds
          },
          optimisticUpdater: function optimisticUpdater() {
            _this2.setState({
              followed: true
            });
          },
          updater: function updater(store, data) {
            var node = data.followArtist.artist.related.suggested.edges[0].node; // Add slight delay to make UX seem a bit nicer

            _this2.setState({
              followed: true
            }, function () {
              setTimeout(function () {
                _this2.setState({
                  swappedArtist: node,
                  followed: false
                });
              }, 500);
            });

            excludeArtistIdsState.addArtist(node._id);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var originalArtist = this.props.artist;
      var swappedArtist = this.state.swappedArtist;
      var artist = swappedArtist || originalArtist;
      var imageUrl = (0, _get.get)(artist, function (a) {
        return a.image.cropped.url;
      });
      var artistID = artist._id;
      var key = "avatar-".concat(artistID);
      return _react.default.createElement(_palette.Flex, {
        alignItems: "center",
        mb: 1,
        mt: 1
      }, _react.default.createElement(_palette.Avatar, {
        size: "xs",
        src: imageUrl,
        key: key
      }), _react.default.createElement(ArtistName, {
        size: "3t",
        color: "black100",
        ml: 1,
        mr: 1
      }, artist.name), _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Button, {
        onClick: function onClick() {
          return _this3.handleClick(artistID);
        },
        variant: "secondaryOutline",
        size: "small",
        width: "70px"
      }, this.state.followed ? "Followed" : "Follow")));
    }
  }]);

  return FollowArtistPopoverRow;
}(_react.default.Component);

var FollowArtistPopoverRowFragmentContainer = (0, _reactRelay.createFragmentContainer)(function (props) {
  return _react.default.createElement(_unstated.Subscribe, {
    to: [_state.FollowArtistPopoverState]
  }, function (excludeArtistIdsState) {
    return _react.default.createElement(FollowArtistPopoverRow, _extends({
      excludeArtistIdsState: excludeArtistIdsState
    }, props));
  });
}, {
  artist: function artist() {
    var node = require("../../../__generated__/FollowArtistPopoverRow_artist.graphql");

    if (node.hash && node.hash !== "19a1f04c0c344e48b118ba6835c53d5a") {
      console.error("The definition of 'FollowArtistPopoverRow_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/FollowArtistPopoverRow_artist.graphql");
  }
});
exports.FollowArtistPopoverRowFragmentContainer = FollowArtistPopoverRowFragmentContainer;
//# sourceMappingURL=FollowArtistPopoverRow.js.map