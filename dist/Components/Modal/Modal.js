"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Image = exports.CloseButton = exports.ModalOverlay = exports.ModalContent = exports.Modal = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

var _palette = require("@artsy/palette");

var _Icon = _interopRequireDefault(require("../Icon"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ModalWrapper = require("./ModalWrapper");

var _Helpers = require("../Helpers");

var _ModalCta = require("./ModalCta");

var _ModalHeader = require("./ModalHeader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: none;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    margin: 0px;\n    padding: ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @deprecated in favor of our Design System Modal component in @artsy/palette
 * https://palette.artsy.net/elements/dialogs/modal
 */
var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isAnimating: _this.props.show || false,
      isShown: _this.props.show || false,
      blurContainers: _this.props.blurContainerSelector ? Array.from(document.querySelectorAll(_this.props.blurContainerSelector)) : []
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.props.onClose();
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.show !== nextProps.show) {
        this.setState({
          isAnimating: true,
          isShown: nextProps.show
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          cta = _this$props.cta,
          hasLogo = _this$props.hasLogo,
          image = _this$props.image,
          isWide = _this$props.isWide,
          onClose = _this$props.onClose,
          show = _this$props.show,
          title = _this$props.title;
      return _react.default.createElement(_ModalWrapper.ModalWrapper, {
        cta: cta,
        onClose: onClose,
        show: show,
        width: isWide ? _ModalWrapper.ModalWidth.Wide : _ModalWrapper.ModalWidth.Normal,
        image: image,
        fullscreenResponsiveModal: true
      }, _react.default.createElement(CloseButton, {
        name: "close",
        onClick: this.close
      }), image && _react.default.createElement(Image, {
        image: image
      }), _react.default.createElement(ModalContent, {
        cta: cta,
        hasImage: image && true
      }, (hasLogo || title) && _react.default.createElement(_ModalHeader.ModalHeader, {
        title: title,
        hasLogo: hasLogo
      }), _react.default.createElement("div", null, children), cta && _react.default.createElement(_ModalCta.ModalCta, {
        cta: cta,
        hasImage: image && true,
        onClose: this.close
      })));
    }
  }]);

  return Modal;
}(_react.default.Component);

exports.Modal = Modal;

_defineProperty(Modal, "defaultProps", {
  show: false,
  blurContainerSelector: ""
});

var ModalContent = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "Modal__ModalContent",
  componentId: "ae7lk6-0"
})(["padding:", ";width:", ";", ";", ";"], function (props) {
  return props.cta ? props.cta.isFixed ? "20px 40px 100px" : "20px 40px 0" : "20px 40px 40px";
}, function (props) {
  return props.hasImage ? "50%" : "100%";
}, function (props) {
  return props.hasImage && "margin-left: 50%";
}, _Helpers.media.sm(_templateObject(), function (props) {
  return props.cta && props.cta.isFixed ? "20px 20px 110px" : "20px";
}));

exports.ModalContent = ModalContent;

var ModalOverlay = _styledComponents.default.div.withConfig({
  displayName: "Modal__ModalOverlay",
  componentId: "ae7lk6-1"
})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(200,200,200,0.5);"]);

exports.ModalOverlay = ModalOverlay;
var CloseButton = (0, _styledComponents.default)(_Icon.default).attrs({
  color: (0, _palette.color)("black60"),
  fontSize: "16px"
}).withConfig({
  displayName: "Modal__CloseButton",
  componentId: "ae7lk6-2"
})(["position:absolute;top:15px;right:12px;cursor:pointer;"]);
exports.CloseButton = CloseButton;

var Image = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "Modal__Image",
  componentId: "ae7lk6-3"
})(["background-image:url(", ");background-size:cover;background-position:center;position:absolute;top:0;bottom:0;left:0;right:50%;", ";"], function (props) {
  return props.image;
}, _Helpers.media.sm(_templateObject2()));

exports.Image = Image;
var _default = Modal;
exports.default = _default;
//# sourceMappingURL=Modal.js.map