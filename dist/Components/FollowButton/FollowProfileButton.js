"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FollowProfileButtonFragmentContainer = exports.FollowProfileButton = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _extend2 = _interopRequireDefault(require("lodash/extend"));

var Artsy = _interopRequireWildcard(require("../../Artsy"));

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _Button = require("./Button");

var _reactRelay = require("react-relay");

var _graphql;

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

var FollowProfileButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FollowProfileButton, _React$Component);

  function FollowProfileButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FollowProfileButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FollowProfileButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "trackFollow", function () {
      var _this$props = _this.props,
          tracking = _this$props.tracking,
          is_followed = _this$props.profile.is_followed;
      var trackingData = _this.props.trackingData || {};
      var action = is_followed ? "Unfollowed Profile" : "Followed Profile";
      tracking.trackEvent((0, _extend2.default)({
        action: action
      }, trackingData));
    });

    _defineProperty(_assertThisInitialized(_this), "handleFollow", function (e) {
      e.preventDefault(); // If this button is part of a link, we _probably_ dont want to actually follow the link.

      var _this$props2 = _this.props,
          profile = _this$props2.profile,
          user = _this$props2.user,
          relay = _this$props2.relay,
          onOpenAuthModal = _this$props2.onOpenAuthModal;

      if (user && user.id) {
        (0, _reactRelay.commitMutation)(relay.environment, {
          mutation: _graphql || (_graphql = function _graphql() {
            var node = require("../../__generated__/FollowProfileButtonMutation.graphql");

            if (node.hash && node.hash !== "41505cb1b2dfc8e45a15406888d5555a") {
              console.error("The definition of 'FollowProfileButtonMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
            }

            return require("../../__generated__/FollowProfileButtonMutation.graphql");
          }),
          variables: {
            input: {
              profile_id: profile.id,
              unfollow: profile.is_followed
            }
          },
          optimisticResponse: {
            followProfile: {
              profile: {
                __id: profile.__id,
                is_followed: !profile.is_followed
              }
            }
          }
        });

        _this.trackFollow();
      } else {
        onOpenAuthModal && onOpenAuthModal("register", {
          contextModule: "intext tooltip",
          intent: "follow profile",
          copy: "Sign up to follow profile"
        });
      }
    });

    return _this;
  }

  _createClass(FollowProfileButton, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          profile = _this$props3.profile,
          buttonProps = _this$props3.buttonProps,
          render = _this$props3.render; // Custom button renderer

      if (render) {
        return _react.default.createElement("span", {
          onClick: this.handleFollow
        }, render(profile));
      } else {
        return _react.default.createElement(_Button.FollowButton, {
          isFollowed: profile && profile.is_followed,
          handleFollow: this.handleFollow,
          buttonProps: buttonProps
        });
      }
    }
  }]);

  return FollowProfileButton;
}(_react.default.Component);

exports.FollowProfileButton = FollowProfileButton;

_defineProperty(FollowProfileButton, "defaultProps", {
  buttonProps: {}
});

var FollowProfileButtonFragmentContainer = (0, _reactTracking.default)({})((0, _reactRelay.createFragmentContainer)(Artsy.withSystemContext(FollowProfileButton), {
  profile: function profile() {
    var node = require("../../__generated__/FollowProfileButton_profile.graphql");

    if (node.hash && node.hash !== "8bd28a5e8f50513042ec5fd992971a55") {
      console.error("The definition of 'FollowProfileButton_profile' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/FollowProfileButton_profile.graphql");
  }
}));
exports.FollowProfileButtonFragmentContainer = FollowProfileButtonFragmentContainer;
//# sourceMappingURL=FollowProfileButton.js.map