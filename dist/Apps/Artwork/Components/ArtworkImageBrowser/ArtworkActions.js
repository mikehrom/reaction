"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UtilButton = exports.ArtworkActionsFragmentContainer = exports.ArtworkActions = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.index-of");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

var _isNull2 = _interopRequireDefault(require("lodash/isNull"));

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _Artsy = require("../../../../Artsy");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _Save = _interopRequireDefault(require("../../../../Components/Artwork/Save"));

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _underscore = require("underscore.string");

var _Responsive = require("../../../../Utils/Responsive");

var _ArtworkSharePanel = require("./ArtworkSharePanel");

var _palette = require("@artsy/palette");

var _user = require("../../../../Utils/user");

var _ArtworkPopoutPanel = require("./ArtworkPopoutPanel");

var _dec, _dec2, _dec3, _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var ArtworkActions = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)({
  flow: Schema.Flow.ArtworkShare,
  action_type: Schema.ActionType.Click,
  context_module: Schema.ContextModule.ShareButton,
  type: Schema.Type.Button
}), _dec3 = (0, _Analytics.track)({
  flow: Schema.Flow.ArtworkViewInRoom,
  action_type: Schema.ActionType.Click,
  context_module: Schema.ContextModule.ViewInRoom,
  type: Schema.Type.Button
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkActions, _React$Component);

  function ArtworkActions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkActions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkActions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showSharePanel: false,
      showMorePanel: false
    });

    return _this;
  }

  _createClass(ArtworkActions, [{
    key: "toggleSharePanel",
    value: function toggleSharePanel() {
      var showSharePanel = !this.state.showSharePanel;
      this.setState({
        showSharePanel: showSharePanel,
        showMorePanel: false
      });
    }
  }, {
    key: "toggleMorePanel",
    value: function toggleMorePanel() {
      var showMorePanel = !this.state.showMorePanel;
      this.setState({
        showMorePanel: showMorePanel,
        showSharePanel: false
      });
    }
  }, {
    key: "getDownloadableImageUrl",
    value: function getDownloadableImageUrl() {
      var _this$props$artwork = this.props.artwork,
          is_downloadable = _this$props$artwork.is_downloadable,
          href = _this$props$artwork.href,
          artists = _this$props$artwork.artists,
          title = _this$props$artwork.title,
          date = _this$props$artwork.date;

      if (is_downloadable || this.isAdmin) {
        var artistNames = artists.map(function (_ref) {
          var name = _ref.name;
          return name;
        }).join(", ");
        var filename = (0, _underscore.slugify)((0, _compact2.default)([artistNames, title, date]).join(" "));
        var downloadableImageUrl = "".concat(_sharify.data.APP_URL).concat(href, "/download/").concat(filename, ".jpg"); // prettier-ignore

        return downloadableImageUrl;
      }
    }
  }, {
    key: "openViewInRoom",
    value: function openViewInRoom() {
      var _this2 = this;

      this.props.selectDefaultSlide();
      setTimeout(function () {
        var _this2$props = _this2.props,
            _this2$props$artwork = _this2$props.artwork,
            dimensions = _this2$props$artwork.dimensions,
            image = _this2$props$artwork.image,
            mediator = _this2$props.mediator;
        mediator && mediator.trigger && mediator.trigger("openViewInRoom", {
          dimensions: dimensions,
          image: image
        });
      }, 300);
    }
  }, {
    key: "renderSaveButton",
    value: function renderSaveButton() {
      return _react.default.createElement(_Save.default, {
        artwork: this.props.artwork,
        render: Save(this.props)
      });
    }
  }, {
    key: "renderViewInRoomButton",
    value: function renderViewInRoomButton() {
      var _this3 = this;

      return _react.default.createElement(UtilButton, {
        name: "viewInRoom",
        onClick: function onClick() {
          return _this3.openViewInRoom();
        },
        label: "View in room"
      });
    }
  }, {
    key: "renderShareButton",
    value: function renderShareButton() {
      return _react.default.createElement(UtilButton, {
        name: "share",
        onClick: this.toggleSharePanel.bind(this),
        label: "Share"
      });
    }
  }, {
    key: "renderDownloadButton",
    value: function renderDownloadButton() {
      return _react.default.createElement(UtilButton, {
        name: "download",
        href: this.getDownloadableImageUrl(),
        label: "Download"
      });
    }
  }, {
    key: "renderEditButton",
    value: function renderEditButton() {
      var artwork = this.props.artwork;
      var editUrl = "".concat(_sharify.data.CMS_URL, "/artworks/").concat(artwork.id, "/edit?current_partner_id=").concat(artwork.partner.id); // prettier-ignore

      return _react.default.createElement(UtilButton, {
        name: "edit",
        href: editUrl,
        label: "Edit"
      });
    }
  }, {
    key: "renderGenomeButton",
    value: function renderGenomeButton() {
      var artwork = this.props.artwork;
      var genomeUrl = "".concat(_sharify.data.GENOME_URL, "/genome/artworks?artwork_ids=").concat(artwork.id); // prettier-ignore

      return _react.default.createElement(UtilButton, {
        name: "genome",
        href: genomeUrl,
        label: "Genome"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var artwork = this.props.artwork;
      var downloadableImageUrl = this.getDownloadableImageUrl();
      var actionsToShow = [{
        name: "save",
        condition: true,
        renderer: this.renderSaveButton
      }, {
        name: "viewInRoom",
        condition: artwork.is_hangable,
        renderer: this.renderViewInRoomButton
      }, {
        name: "share",
        condition: true,
        renderer: this.renderShareButton
      }, {
        name: "download",
        condition: !!downloadableImageUrl,
        renderer: this.renderDownloadButton
      }, {
        name: "edit",
        condition: this.isAdmin,
        renderer: this.renderEditButton
      }, {
        name: "genome",
        condition: this.isAdmin,
        renderer: this.renderGenomeButton
      }];
      var showableActions = actionsToShow.filter(function (action) {
        return action.condition;
      });
      var initialActions = showableActions.slice(0, 3);
      var moreActions = showableActions.slice(3);
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Container, null, _react.default.createElement(_palette.Join, {
        separator: _react.default.createElement(_palette.Spacer, {
          mx: 0
        })
      }, _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, _react.default.createElement(_palette.Flex, null, showableActions.map(function (action) {
        return _react.default.createElement("div", {
          key: action.name
        }, action.renderer.bind(_this4)());
      }))), _react.default.createElement(_Responsive.Media, {
        at: "xs"
      }, _react.default.createElement(_palette.Flex, null, initialActions.map(function (action) {
        return _react.default.createElement("div", {
          key: action.name
        }, action.renderer.bind(_this4)());
      }), moreActions && moreActions.length > 0 && _react.default.createElement(UtilButton, {
        name: "more",
        onClick: this.toggleMorePanel.bind(this)
      })))), this.state.showSharePanel && _react.default.createElement(_ArtworkSharePanel.ArtworkSharePanelFragmentContainer, {
        artwork: this.props.artwork,
        onClose: this.toggleSharePanel.bind(this)
      }), this.state.showMorePanel && _react.default.createElement(_ArtworkPopoutPanel.ArtworkPopoutPanel, {
        title: "More actions",
        onClose: this.toggleMorePanel.bind(this)
      }, _react.default.createElement(_palette.Flex, {
        flexDirection: "row",
        flexWrap: "wrap"
      }, moreActions.map(function (action) {
        return _react.default.createElement(_palette.Flex, {
          flexDirection: "row",
          flexBasis: "50%",
          key: action.name
        }, action.renderer.bind(_this4)());
      })))));
    }
  }, {
    key: "isAdmin",
    get: function get() {
      return (0, _user.userIsAdmin)(this.props.user);
    }
  }]);

  return ArtworkActions;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "toggleSharePanel", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "toggleSharePanel"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "openViewInRoom", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "openViewInRoom"), _class2.prototype)), _class2)) || _class);
exports.ArtworkActions = ArtworkActions;
var ArtworkActionsFragmentContainer = (0, _reactRelay.createFragmentContainer)(function (props) {
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      user = _useContext.user,
      mediator = _useContext.mediator;

  return _react.default.createElement(ArtworkActions, _extends({
    user: user,
    mediator: mediator
  }, props));
}, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkActions_artwork.graphql");

    if (node.hash && node.hash !== "7dcdaa4e1723fdc7fadf2e4be5a08360") {
      console.error("The definition of 'ArtworkActions_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkActions_artwork.graphql");
  }
});
exports.ArtworkActionsFragmentContainer = ArtworkActionsFragmentContainer;

var UtilButton =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(UtilButton, _React$Component2);

  function UtilButton() {
    var _getPrototypeOf3;

    var _this5;

    _classCallCheck(this, UtilButton);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(UtilButton)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this5), "state", {
      hovered: false
    });

    return _this5;
  }

  _createClass(UtilButton, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props = this.props,
          href = _this$props.href,
          label = _this$props.label,
          name = _this$props.name,
          onClick = _this$props.onClick,
          Icon = _this$props.Icon,
          props = _objectWithoutProperties(_this$props, ["href", "label", "name", "onClick", "Icon"]);

      var getIcon = function getIcon() {
        switch (name) {
          case "bell":
            return _palette.BellIcon;

          case "download":
            return _palette.DownloadIcon;

          case "edit":
            return _palette.EditIcon;

          case "genome":
            return _palette.GenomeIcon;

          case "heart":
            return _palette.HeartIcon;

          case "more":
            return _palette.MoreIcon;

          case "share":
            return _palette.ShareIcon;

          case "viewInRoom":
            return _palette.OpenEyeIcon;
        }
      }; // If we're passing in an `Icon`, override


      var ActionIcon;

      if (Icon) {
        ActionIcon = Icon;
      } else {
        ActionIcon = getIcon();
      }

      var defaultFill = name === "more" ? null : "black100";
      var fill = this.state.hovered ? "purple100" : defaultFill;
      return _react.default.createElement(UtilButtonContainer, {
        p: 1,
        pt: 0,
        onMouseOver: function onMouseOver() {
          return _this6.setState({
            hovered: true
          });
        },
        onMouseOut: function onMouseOut() {
          return _this6.setState({
            hovered: false
          });
        },
        onClick: onClick
      }, href ? _react.default.createElement(UtilButtonLink, {
        className: "noUnderline",
        href: href,
        target: "_blank"
      }, _react.default.createElement(ActionIcon, _extends({}, props, {
        fill: "black100"
      })), label && _react.default.createElement(_palette.Sans, {
        size: "2",
        pl: 0.5,
        pt: "1px"
      }, label)) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ActionIcon, _extends({}, props, {
        fill: fill
      })), label && _react.default.createElement(_palette.Sans, {
        size: "2",
        pl: 0.5,
        pt: "1px"
      }, label)));
    }
  }]);

  return UtilButton;
}(_react.default.Component);

exports.UtilButton = UtilButton;
var UtilButtonLink = (0, _styledComponents.default)(_palette.Link).withConfig({
  displayName: "ArtworkActions__UtilButtonLink",
  componentId: "dmtd68-0"
})(["display:flex;&:hover{color:", " !important;text-decoration:none !important;}"], (0, _palette.color)("purple100"));
var UtilButtonContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ArtworkActions__UtilButtonContainer",
  componentId: "dmtd68-1"
})(["cursor:pointer;justify-content:center;&:hover{color:", ";}"], (0, _palette.color)("purple100"));
var Container = (0, _styledComponents.default)(_palette.Flex).attrs({
  justifyContent: "center",
  mb: 2,
  ml: 0.5,
  pt: 3
}).withConfig({
  displayName: "ArtworkActions__Container",
  componentId: "dmtd68-2"
})(["position:relative;user-select:none;"]);
/**
 * Custom renderer for SaveButton
 */

var Save = function Save(actionProps) {
  return function (props, state) {
    // Grab props from ArtworkActions to check if sale is open
    var sale = actionProps.artwork.sale;
    var isOpenSale = sale && sale.is_auction && !sale.is_closed; // Check if saved by evaluating props from SaveButton

    var isSaved = (0, _isNull2.default)(state.is_saved) ? props.artwork.is_saved : state.is_saved; // If an Auction, use Bell (for notifications); if a standard artwork use Heart

    if (isOpenSale) {
      var FilledIcon = function FilledIcon() {
        return _react.default.createElement(_palette.BellFillIcon, {
          fill: "purple100"
        });
      };

      return _react.default.createElement(UtilButton, {
        name: "bell",
        Icon: isSaved ? FilledIcon : _palette.BellIcon,
        label: "Watch lot"
      });
    } else {
      var _FilledIcon = function _FilledIcon() {
        return _react.default.createElement(_palette.HeartFillIcon, {
          fill: "purple100"
        });
      };

      return _react.default.createElement(UtilButton, {
        name: "heart",
        Icon: isSaved ? _FilledIcon : _palette.HeartIcon,
        label: "Save"
      });
    }
  };
};

ArtworkActionsFragmentContainer.displayName = "ArtworkActions";
//# sourceMappingURL=ArtworkActions.js.map