"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistCardFragmentContainer = exports.SmallArtistCard = exports.LargeArtistCard = exports.ArtistCard = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _FollowArtistButton = require("../FollowButton/FollowArtistButton");

var _Truncator = require("../Truncator");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../Utils/get");

var _openAuthModal = require("../../Utils/openAuthModal");

var _Responsive = require("../../Utils/Responsive");

var _palette = require("@artsy/palette");

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ArtistCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistCard, _React$Component);

  function ArtistCard() {
    _classCallCheck(this, ArtistCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtistCard).apply(this, arguments));
  }

  _createClass(ArtistCard, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_palette.Link, {
        onClick: this.props.onClick,
        href: this.props.artist.href,
        noUnderline: true
      }, _react.default.createElement(_Responsive.Media, {
        at: "xs"
      }, _react.default.createElement(SmallArtistCard, this.props)), _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, _react.default.createElement(LargeArtistCard, this.props)));
    }
  }]);

  return ArtistCard;
}(_react.default.Component);

exports.ArtistCard = ArtistCard;

_defineProperty(ArtistCard, "defaultProps", {
  lazyLoad: false
});

var SingleLineTruncation = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "ArtistCard__SingleLineTruncation",
  componentId: "lcnec1-0"
})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:100%;text-align:center;"]);

var LargeArtistCard = function LargeArtistCard(props) {
  return _react.default.createElement(_palette.BorderBox, {
    hover: true,
    flexDirection: "column",
    width: "100%",
    height: "254px"
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    flexGrow: "0",
    alignItems: "center",
    pt: 1,
    mb: 1
  }, props.artist.image && _react.default.createElement(_palette.Box, {
    mb: 1
  }, _react.default.createElement(_palette.Avatar, {
    lazyLoad: props.lazyLoad,
    src: (0, _get.get)(props.artist.image, function (i) {
      return i.cropped.url;
    })
  })), _react.default.createElement(_palette.Serif, {
    size: "3t",
    weight: "semibold",
    textAlign: "center"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 2
  }, props.artist.name)), _react.default.createElement(SingleLineTruncation, {
    size: "2"
  }, props.artist.formatted_nationality_and_birthday)), _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "center",
    mt: "auto"
  }, _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
    artist: props.artist,
    user: props.user,
    onOpenAuthModal: function onOpenAuthModal() {
      return handleOpenAuth(props);
    },
    render: function render(_ref) {
      var is_followed = _ref.is_followed;
      return _react.default.createElement(_palette.Button, {
        variant: "secondaryOutline",
        size: "small",
        width: (0, _palette.space)(9)
      }, getButtonLabel(is_followed));
    }
  })));
};

exports.LargeArtistCard = LargeArtistCard;

var SmallArtistCard = function SmallArtistCard(props) {
  return _react.default.createElement(_palette.BorderBox, {
    hover: true,
    width: "100%"
  }, props.artist.image && _react.default.createElement(_palette.Box, {
    mr: 2
  }, _react.default.createElement(_palette.Avatar, {
    lazyLoad: props.lazyLoad,
    size: "xs",
    src: (0, _get.get)(props.artist.image, function (i) {
      return i.cropped.url;
    })
  })), _react.default.createElement(_palette.Flex, {
    flexDirection: "column"
  }, _react.default.createElement(_palette.Serif, {
    size: "3t",
    weight: "semibold"
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 2
  }, props.artist.name)), _react.default.createElement(_palette.Sans, {
    size: "1"
  }, props.artist.formatted_nationality_and_birthday), _react.default.createElement(_palette.Spacer, {
    mb: 1
  }), _react.default.createElement(_FollowArtistButton.FollowArtistButtonFragmentContainer, {
    artist: props.artist,
    user: props.user,
    onOpenAuthModal: function onOpenAuthModal() {
      return handleOpenAuth(props);
    },
    render: function render(_ref2) {
      var is_followed = _ref2.is_followed;
      return _react.default.createElement(_palette.Button, {
        variant: "secondaryOutline",
        size: "small",
        width: "70px"
      }, getButtonLabel(is_followed));
    }
  })));
};

exports.SmallArtistCard = SmallArtistCard;

var handleOpenAuth = function handleOpenAuth(props) {
  (0, _openAuthModal.openAuthModal)(props.mediator, {
    entity: props.artist,
    contextModule: Schema.ContextModule.ArtworkPage,
    intent: _openAuthModal.AuthModalIntent.FollowArtist
  });
};

var ArtistCardFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtistCard, {
  artist: function artist() {
    var node = require("../../__generated__/ArtistCard_artist.graphql");

    if (node.hash && node.hash !== "db4618c7e342a5b7c654fb638a771150") {
      console.error("The definition of 'ArtistCard_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/ArtistCard_artist.graphql");
  }
}); // Helpers

exports.ArtistCardFragmentContainer = ArtistCardFragmentContainer;

var getButtonLabel = function getButtonLabel(isFollowed) {
  return isFollowed ? "Unfollow" : "Follow";
};
//# sourceMappingURL=ArtistCard.js.map