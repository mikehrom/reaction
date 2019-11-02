"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Container = exports.SaveButton = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _isNull2 = _interopRequireDefault(require("lodash/isNull"));

var _extend2 = _interopRequireDefault(require("lodash/extend"));

var Artsy = _interopRequireWildcard(require("../../Artsy"));

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _openAuthModal = require("../../Utils/openAuthModal");

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _graphql, _dec, _class, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SIZE = 40;
var SaveButton = (_dec = (0, _Analytics.track)(), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SaveButton, _React$Component);

  function SaveButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SaveButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SaveButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      is_saved: null,
      isHovered: false
    });

    _defineProperty(_assertThisInitialized(_this), "trackSave", function () {
      var _this$props = _this.props,
          tracking = _this$props.tracking,
          _this$props$artwork = _this$props.artwork,
          is_saved = _this$props$artwork.is_saved,
          id = _this$props$artwork.id,
          _id = _this$props$artwork._id;
      var trackingData = _this.props.trackingData || {};
      var action = is_saved ? "Removed Artwork" : "Saved Artwork";
      var entityInfo = {
        entity_slug: id,
        entity_id: _id
      };

      if (tracking) {
        tracking.trackEvent((0, _extend2.default)({
          action: action
        }, entityInfo, trackingData));
      }
    });

    return _this;
  }

  _createClass(SaveButton, [{
    key: "handleSave",
    value: function handleSave() {
      var _this2 = this;

      var _this$props2 = this.props,
          user = _this$props2.user,
          artwork = _this$props2.artwork,
          relay = _this$props2.relay,
          relayEnvironment = _this$props2.relayEnvironment;
      var environment = relay && relay.environment || relayEnvironment;

      if (environment && user && user.id) {
        (0, _reactRelay.commitMutation)(environment, {
          mutation: _graphql || (_graphql = function _graphql() {
            var node = require("../../__generated__/SaveArtworkMutation.graphql");

            if (node.hash && node.hash !== "b993cf24b6d048abd7c9e33bd30dcc2a") {
              console.error("The definition of 'SaveArtworkMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
            }

            return require("../../__generated__/SaveArtworkMutation.graphql");
          }),
          variables: {
            input: {
              artwork_id: artwork.id,
              remove: this.isSaved
            }
          },
          optimisticResponse: {
            saveArtwork: {
              artwork: {
                __id: artwork.__id,
                id: artwork.id,
                is_saved: !this.isSaved
              }
            }
          },
          onError: function onError(error) {
            // Revert optimistic update
            if (_this2.props.render) {
              _this2.setState({
                is_saved: _this2.isSaved
              });
            }

            console.error("Artwork/Save Error saving artwork: ", error);
          },
          onCompleted: function onCompleted(_ref) {
            var saveArtwork = _ref.saveArtwork;

            if (_this2.props.render) {
              _this2.setState({
                is_saved: saveArtwork.artwork.is_saved
              });
            }
          }
        });
        this.trackSave();
      } else {
        (0, _openAuthModal.openAuthModal)(this.props.mediator, {
          contextModule: Schema.ContextModule.ArtworkPage,
          entity: {
            id: this.props.artwork.id,
            name: this.props.artwork.title
          },
          intent: _openAuthModal.AuthModalIntent.SaveArtwork
        });
      }
    }
  }, {
    key: "mixinButtonActions",
    value: function mixinButtonActions() {
      var _this3 = this;

      return {
        onClick: function onClick() {
          return _this3.handleSave();
        },
        onMouseEnter: function onMouseEnter() {
          _this3.setState({
            isHovered: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          _this3.setState({
            isHovered: false
          });
        }
      };
    }
  }, {
    key: "renderDefaultButton",
    value: function renderDefaultButton() {
      var style = this.props.style;
      var saveStyle = this.isSaved ? {
        opacity: 1.0
      } : {};

      var fullStyle = _objectSpread({}, style, saveStyle);

      var iconName = this.isSaved && this.state.isHovered ? "remove-small" : "heart";
      var iconFontSize = iconName === "heart" ? "24px" : "16px";
      return _react.default.createElement("div", _extends({
        className: this.props.className,
        style: fullStyle
      }, this.mixinButtonActions()), _react.default.createElement(Container, {
        "data-saved": this.isSaved
      }, _react.default.createElement(_Icon.default, {
        name: iconName,
        height: SIZE,
        color: "white",
        fontSize: iconFontSize,
        style: {
          verticalAlign: "middle"
        }
      })));
    }
  }, {
    key: "renderCustomButton",
    value: function renderCustomButton() {
      return _react.default.createElement("div", this.mixinButtonActions(), this.props.render(this.props, this.state));
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.render ? this.renderCustomButton() : this.renderDefaultButton();
    }
  }, {
    key: "isSaved",
    get: function get() {
      var isSaved = (0, _isNull2.default)(this.state.is_saved) ? this.props.artwork.is_saved : this.state.is_saved;
      return isSaved;
    }
  }]);

  return SaveButton;
}(_react.default.Component), _temp)) || _class);
exports.SaveButton = SaveButton;

var Container = _styledComponents.default.div.withConfig({
  displayName: "Save__Container",
  componentId: "sc-12eu8y0-0"
})(["display:block;width:", "px;height:", "px;text-align:center;cursor:pointer;color:white;background-color:", ";background-color:rgba(0,0,0,0.4);border-radius:50%;font-size:16px;line-height:", "px;&:hover{background-color:black;}&[data-saved=\"true\"]{background-color:", ";&:hover{background-color:", ";}}"], SIZE, SIZE, _Colors.default.gray, SIZE, _Colors.default.purpleRegular, _Colors.default.redMedium);

exports.Container = Container;

var _default = (0, _reactRelay.createFragmentContainer)(Artsy.withSystemContext(SaveButton), {
  artwork: function artwork() {
    var node = require("../../__generated__/Save_artwork.graphql");

    if (node.hash && node.hash !== "c2c4c95bdc8dc89eb18e52f9723edc15") {
      console.error("The definition of 'Save_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/Save_artwork.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=Save.js.map