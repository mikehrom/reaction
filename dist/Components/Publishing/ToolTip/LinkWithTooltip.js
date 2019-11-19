"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Background = exports.Link = exports.PrimaryLink = exports.LinkWithTooltip = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.split");

require("core-js/modules/es6.string.link");

var _defer2 = _interopRequireDefault(require("lodash/defer"));

var _palette = require("@artsy/palette");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _url = require("url");

var _FadeTransition = _interopRequireDefault(require("../../Animation/FadeTransition"));

var _ToolTip = require("./ToolTip");

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

var LinkWithTooltip =
/*#__PURE__*/
function (_Component) {
  _inherits(LinkWithTooltip, _Component);

  function LinkWithTooltip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LinkWithTooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LinkWithTooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "link", void 0);

    _defineProperty(_assertThisInitialized(_this), "SetupToolTipPosition", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      inToolTip: false,
      maybeHideToolTip: false,
      position: null,
      orientation: "up"
    });

    _defineProperty(_assertThisInitialized(_this), "entityTypeToEntity", function () {
      var _this$urlToEntityType = _this.urlToEntityType(),
          entityType = _this$urlToEntityType.entityType,
          slug = _this$urlToEntityType.slug;

      var data = _this.context.tooltipsData;
      var collectionKey = entityType + "s";
      if (!data || !data[collectionKey]) return null;
      return {
        entityType: entityType,
        entity: data[collectionKey][slug]
      };
    });

    _defineProperty(_assertThisInitialized(_this), "showToolTip", function (toolTipData) {
      var tracking = _this.props.tracking;
      var onTriggerToolTip = _this.context.onTriggerToolTip;
      var entity = toolTipData.entity,
          entityType = toolTipData.entityType;

      if (entity) {
        onTriggerToolTip(entity.id);
        tracking.trackEvent({
          action: "Viewed tooltip",
          type: "intext tooltip",
          entity_type: entityType,
          entity_id: entity._id,
          entity_slug: entity.id
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "trackClick", function (toolTipData) {
      var tracking = _this.props.tracking;
      var entity = toolTipData.entity,
          entityType = toolTipData.entityType;

      if (entity) {
        tracking.trackEvent({
          action: "Click",
          flow: "tooltip",
          type: "".concat(entityType, " stub"),
          context_module: "intext tooltip",
          destination_path: entity.href
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "leftLink", function () {
      _this.setState({
        maybeHideToolTip: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideToolTip", function () {
      _this.context.onTriggerToolTip(null);

      _this.setState({
        inToolTip: false,
        maybeHideToolTip: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "maybeHideToolTip", function () {
      var _this$state = _this.state,
          inToolTip = _this$state.inToolTip,
          maybeHideToolTip = _this$state.maybeHideToolTip;
      setTimeout(function () {
        if (!inToolTip && maybeHideToolTip) {
          _this.hideToolTip();
        }
      }, 750);
    });

    _defineProperty(_assertThisInitialized(_this), "onLeaveLink", function () {
      _this.leftLink();

      (0, _defer2.default)(_this.maybeHideToolTip);
    });

    _defineProperty(_assertThisInitialized(_this), "getToolTipPosition", function (type) {
      if (_this.link) {
        var _this$state$position = _this.state.position,
            left = _this$state$position.left,
            width = _this$state$position.width,
            x = _this$state$position.x;
        var linkCenter = width / 2;
        var toolTipWidth = type === "artist" ? 360 : 280;
        var toolTipLeft = linkCenter - toolTipWidth / 2;
        var isAtWindowBoundary = x + toolTipLeft < 10;
        var arrowLeft = null;

        if (isAtWindowBoundary) {
          var padding = 20;
          var arrowSize = 30;
          arrowLeft = left + linkCenter - padding - arrowSize;
          toolTipLeft = 10 - x;
        }

        return {
          arrowLeft: arrowLeft,
          toolTipLeft: toolTipLeft
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getOrientation", function (position) {
      var height = window ? window.innerHeight : 0;
      var linkPosition = position.top;
      var orientation = height - linkPosition > 350 ? "down" : "up";
      return orientation;
    });

    _defineProperty(_assertThisInitialized(_this), "setupToolTipPosition", function () {
      if (_this.link) {
        var position = (0, _reactDom.findDOMNode)(_this.link).getBoundingClientRect();

        var orientation = _this.getOrientation(position);

        _this.setState({
          position: position,
          orientation: orientation
        });
      }
    });

    return _this;
  }

  _createClass(LinkWithTooltip, [{
    key: "urlToEntityType",
    value: function urlToEntityType() {
      var urlComponents = (0, _url.parse)(this.props.url).pathname.split("/");
      urlComponents.shift();
      return {
        entityType: urlComponents[0],
        slug: urlComponents[1]
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.SetupToolTipPosition = function () {
        return (0, _defer2.default)(_this2.setupToolTipPosition);
      };

      this.setupToolTipPosition();
      window.addEventListener("scroll", this.SetupToolTipPosition);
      window.addEventListener("resize", this.SetupToolTipPosition);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("scroll", this.SetupToolTipPosition);
      window.removeEventListener("resize", this.SetupToolTipPosition);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          color = _this$props.color,
          url = _this$props.url;
      var _this$context = this.context,
          activeToolTip = _this$context.activeToolTip,
          waitForFade = _this$context.waitForFade;
      var orientation = this.state.orientation;
      var toolTipData = this.entityTypeToEntity();
      var entity = toolTipData.entity,
          entityType = toolTipData.entityType;
      var id = entity ? entity.id : null;
      var toolTipPosition = this.getToolTipPosition(entityType);
      var show = id && activeToolTip ? id === activeToolTip : false;
      var showWithFade = show || waitForFade && waitForFade === id;
      return _react.default.createElement(Link, {
        onMouseEnter: function onMouseEnter() {
          !show && _this3.showToolTip(toolTipData);
        },
        ref: function ref(link) {
          return _this3.link = link;
        },
        show: showWithFade
      }, _react.default.createElement(PrimaryLink, {
        color: color,
        href: url,
        target: "_blank",
        show: showWithFade,
        onClick: function onClick() {
          return _this3.trackClick(toolTipData);
        }
      }, this.props.children), _react.default.createElement(FadeContainer, null, _react.default.createElement(_FadeTransition.default, {
        in: show,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: {
          enter: 200,
          exit: 250
        }
      }, _react.default.createElement(_ToolTip.ToolTip, {
        entity: entity,
        model: entityType,
        onMouseLeave: this.hideToolTip,
        onMouseEnter: function onMouseEnter() {
          _this3.setState({
            inToolTip: true
          });
        },
        positionLeft: toolTipPosition && toolTipPosition.toolTipLeft,
        arrowLeft: toolTipPosition && toolTipPosition.arrowLeft,
        orientation: orientation
      }))), show && _react.default.createElement(Background, {
        onMouseLeave: this.onLeaveLink,
        href: url,
        target: "_blank",
        onClick: function onClick() {
          return _this3.trackClick(toolTipData);
        }
      }));
    }
  }]);

  return LinkWithTooltip;
}(_react.Component);

exports.LinkWithTooltip = LinkWithTooltip;

_defineProperty(LinkWithTooltip, "contextTypes", {
  tooltipsData: _propTypes.default.object,
  onTriggerToolTip: _propTypes.default.func,
  activeToolTip: _propTypes.default.any,
  waitForFade: _propTypes.default.string
});

_defineProperty(LinkWithTooltip, "defaultProps", {
  color: "black"
});

var PrimaryLink = _styledComponents.default.a.withConfig({
  displayName: "LinkWithTooltip__PrimaryLink",
  componentId: "sc-1omtxql-0"
})(["z-index:auto;transition:color 0.25s;background-image:linear-gradient( to right,", " 50%,transparent 50% ) !important;background-size:3px 1.75px !important;background-position:0 1.07em !important;", ";", ";"], function (props) {
  return props.color === "black" ? (0, _palette.color)("black60") : props.color;
}, function (props) {
  return props.show && props.color === "black" && "\n    color: ".concat((0, _palette.color)("black30"), " !important;\n\n    background-image: linear-gradient(\n      to right,\n      ").concat((0, _palette.color)("black30"), " 50%,\n      transparent 50%\n    ) !important;\n  ");
}, function (props) {
  return props.show && props.color !== "black" && "\n      opacity: .65;\n    ";
});

exports.PrimaryLink = PrimaryLink;

var FadeContainer = _styledComponents.default.div.withConfig({
  displayName: "LinkWithTooltip__FadeContainer",
  componentId: "sc-1omtxql-1"
})(["position:absolute;top:0;left:0;bottom:0;right:0;z-index:0;"]);

var Link = _styledComponents.default.div.withConfig({
  displayName: "LinkWithTooltip__Link",
  componentId: "sc-1omtxql-2"
})(["display:inline-block;position:relative;cursor:pointer;text-indent:initial;z-index:", ";", "{", ";}"], function (props) {
  return props.show ? 10 : 0;
}, FadeContainer, function (props) {
  return props.show && "z-index: 10";
});

exports.Link = Link;

var Background = _styledComponents.default.a.withConfig({
  displayName: "LinkWithTooltip__Background",
  componentId: "sc-1omtxql-3"
})(["position:absolute;left:0;top:-10px;bottom:-10px;right:0;z-index:10;background-image:none !important;"]);

exports.Background = Background;

var _default = (0, _reactTracking.default)()(LinkWithTooltip);

exports.default = _default;
//# sourceMappingURL=LinkWithTooltip.js.map