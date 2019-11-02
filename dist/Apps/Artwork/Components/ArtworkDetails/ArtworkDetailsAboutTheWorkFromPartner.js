"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkDetailsAboutTheWorkFromPartnerFragmentContainer = exports.ArtworkDetailsAboutTheWorkFromPartner = void 0;

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

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.function.bind");

var _filterLocations = require("../../Utils/filterLocations");

var _limitWithCount = require("../../Utils/limitWithCount");

var _Artsy = require("../../../../Artsy");

var _FollowProfileButton = require("../../../../Components/FollowButton/FollowProfileButton");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../../Utils/get");

var _Responsive = require("../../../../Utils/Responsive");

var _ArtworkDetailsAboutTheWorkFromArtsy = require("./ArtworkDetailsAboutTheWorkFromArtsy");

var _sharify = require("sharify");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _Events = _interopRequireDefault(require("../../../../Utils/Events"));

var _palette = require("@artsy/palette");

var _openAuthModal = require("../../../../Utils/openAuthModal");

var _dec, _dec2, _class, _class2, _temp;

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

var ArtworkDetailsAboutTheWorkFromPartner = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.AboutTheWorkPartner
}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec2 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Click,
  flow: Schema.Flow.ArtworkAboutTheWork,
  subject: Schema.Subject.ReadMore,
  type: Schema.Type.Button
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkDetailsAboutTheWorkFromPartner, _React$Component);

  function ArtworkDetailsAboutTheWorkFromPartner() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkDetailsAboutTheWorkFromPartner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkDetailsAboutTheWorkFromPartner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleOpenAuth", function (mediator, partner) {
      (0, _openAuthModal.openAuthModal)(mediator, {
        entity: partner,
        contextModule: Schema.ContextModule.ArtworkPage,
        intent: _openAuthModal.AuthModalIntent.FollowPartner
      });
    });

    return _this;
  }

  _createClass(ArtworkDetailsAboutTheWorkFromPartner, [{
    key: "trackReadMoreClick",
    value: function trackReadMoreClick() {// noop
    }
  }, {
    key: "renderReadMore",
    value: function renderReadMore(breakpoint) {
      var additional_information = this.props.artwork.additional_information;
      var xs = breakpoint === "xs";
      var maxChars = xs ? _ArtworkDetailsAboutTheWorkFromArtsy.READ_MORE_MAX_CHARS.xs : _ArtworkDetailsAboutTheWorkFromArtsy.READ_MORE_MAX_CHARS.default;
      return _react.default.createElement(_palette.ReadMore, {
        maxChars: maxChars,
        content: additional_information,
        onReadMoreClicked: this.trackReadMoreClick.bind(this)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var artwork = this.props.artwork;
      var additional_information = artwork.additional_information,
          partner = artwork.partner;
      var locationNames = (0, _get.get)(partner, function (p) {
        return (0, _limitWithCount.limitWithCount)((0, _filterLocations.filterLocations)(p.locations), 2);
      }, []).join(", "); // Partner avatar is not shown for artworks from benefit auctions or gallery auctions

      var showPartnerLogo = !(artwork.sale && (artwork.sale.isBenefit || artwork.sale.isGalleryAuction));
      var imageUrl = showPartnerLogo && (0, _get.get)(partner, function (p) {
        return p.profile.icon.url;
      });
      var partnerInitials = showPartnerLogo && (0, _get.get)(partner, function (p) {
        return p.initials;
      });
      var showPartnerFollow = partner && partner.type !== "Auction House" && partner.profile;
      var hasDefaultPublicProfile = partner && partner.is_default_profile_public;
      var partnerName = partner && partner.name;
      return _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
        var user = _ref.user,
            mediator = _ref.mediator;
        return _react.default.createElement(_palette.StackableBorderBox, {
          p: 2
        }, _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.EntityHeader, {
          name: partnerName,
          href: hasDefaultPublicProfile && "".concat(_sharify.data.APP_URL).concat(partner.href),
          meta: locationNames,
          imageUrl: imageUrl,
          initials: partnerInitials,
          FollowButton: showPartnerFollow && _react.default.createElement(_FollowProfileButton.FollowProfileButtonFragmentContainer, {
            profile: partner.profile,
            user: user,
            trackingData: {
              modelName: Schema.OwnerType.Partner,
              context_module: Schema.ContextModule.AboutTheWorkPartner,
              entity_id: partner._id,
              entity_slug: partner.id
            },
            onOpenAuthModal: function onOpenAuthModal() {
              return _this2.handleOpenAuth(mediator, partner);
            },
            render: function render(profile) {
              var is_followed = profile.is_followed || false;
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
          }, "Follow")
        }), additional_information && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Spacer, {
          mb: 1
        }), _react.default.createElement(_palette.Serif, {
          size: "3"
        }, _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, _this2.renderReadMore("xs")), _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, _this2.renderReadMore())))));
      });
    }
  }]);

  return ArtworkDetailsAboutTheWorkFromPartner;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "trackReadMoreClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackReadMoreClick"), _class2.prototype)), _class2)) || _class);
exports.ArtworkDetailsAboutTheWorkFromPartner = ArtworkDetailsAboutTheWorkFromPartner;
var ArtworkDetailsAboutTheWorkFromPartnerFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkDetailsAboutTheWorkFromPartner, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkDetailsAboutTheWorkFromPartner_artwork.graphql");

    if (node.hash && node.hash !== "b10480d701a172845d0dccc414c0bd2f") {
      console.error("The definition of 'ArtworkDetailsAboutTheWorkFromPartner_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkDetailsAboutTheWorkFromPartner_artwork.graphql");
  }
});
exports.ArtworkDetailsAboutTheWorkFromPartnerFragmentContainer = ArtworkDetailsAboutTheWorkFromPartnerFragmentContainer;
//# sourceMappingURL=ArtworkDetailsAboutTheWorkFromPartner.js.map