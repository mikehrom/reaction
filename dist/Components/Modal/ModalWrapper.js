"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ModalContainer = exports.ModalOverlay = exports.ModalWrapper = exports.ModalWidth = void 0;

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _viewport = require("../../Utils/viewport");

var _FadeTransition = _interopRequireDefault(require("../Animation/FadeTransition"));

var _Helpers = require("../Helpers");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      max-height: 100vh;\n      height: 100vh\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          width: calc(100vw - 20px);\n          border-radius: 2px;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          width: 100%;\n          border-radius: 0;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .blurred {\n    filter: blur(50px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalWidth;
exports.ModalWidth = ModalWidth;

(function (ModalWidth) {
  ModalWidth["Narrow"] = "280px";
  ModalWidth["Normal"] = "440px";
  ModalWidth["Medium"] = "780px";
  ModalWidth["Wide"] = "900px";
})(ModalWidth || (exports.ModalWidth = ModalWidth = {}));

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());
var KEYBOARD_EVENT = "keyup";

var ModalWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalWrapper, _React$Component);

  function ModalWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isAnimating: _this.props.show || false,
      isShown: _this.props.show || false,
      blurContainers: _this.props.blurContainerSelector ? Array.from(document.querySelectorAll(_this.props.blurContainerSelector)) : []
    });

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.props.onClose();

      _this.removeBlurToContainers();
    });

    _defineProperty(_assertThisInitialized(_this), "addBlurToContainers", function () {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = _this.state.blurContainers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var container = _step.value;
          container.classList.add("blurred");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeBlurToContainers", function () {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _this.state.blurContainers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var container = _step2.value;
          container.classList.remove("blurred");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscapeKey", function (event) {
      if (event && event.key === "Escape") {
        _this.close();
      }
    });

    return _this;
  }

  _createClass(ModalWrapper, [{
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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateBodyScrollBlock();
      this.updateEscapeKeyListener();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateBodyScrollBlock();
      this.updateEscapeKeyListener();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeBlurToContainers();
    }
  }, {
    key: "updateBodyScrollBlock",
    value: function updateBodyScrollBlock() {
      if (this.props.show) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "visible";
      }
    }
  }, {
    key: "updateEscapeKeyListener",
    value: function updateEscapeKeyListener() {
      if (this.props.show) {
        document.addEventListener(KEYBOARD_EVENT, this.handleEscapeKey, true);
      } else {
        document.removeEventListener(KEYBOARD_EVENT, this.handleEscapeKey, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          width = _this$props.width,
          fullscreenResponsiveModal = _this$props.fullscreenResponsiveModal,
          image = _this$props.image;
      var _this$state = this.state,
          isShown = _this$state.isShown,
          isAnimating = _this$state.isAnimating;

      var _getViewportDimension = (0, _viewport.getViewportDimensions)(),
          viewportWidth = _getViewportDimension.width;

      if (isShown) {
        this.addBlurToContainers();
      } else {
        this.removeBlurToContainers();
      }

      return _react.default.createElement(_palette.Theme, null, _react.default.createElement(Wrapper, {
        isShown: isShown || isAnimating
      }, _react.default.createElement(GlobalStyle, {
        suppressMultiMountWarning: true
      }), isShown && _react.default.createElement(ModalOverlay, {
        onClick: this.close
      }), _react.default.createElement(_FadeTransition.default, {
        in: isShown,
        mountOnEnter: true,
        onExited: function onExited() {
          _this2.setState({
            isAnimating: false
          });
        },
        unmountOnExit: true,
        timeout: {
          enter: 10,
          exit: 200
        }
      }, _react.default.createElement(ModalContainer, {
        fullscreenResponsiveModal: fullscreenResponsiveModal,
        width: width,
        image: image,
        viewportWidth: viewportWidth
      }, _react.default.createElement(ModalInner, {
        fullscreenResponsiveModal: fullscreenResponsiveModal
      }, children)))));
    }
  }]);

  return ModalWrapper;
}(_react.default.Component);

exports.ModalWrapper = ModalWrapper;

_defineProperty(ModalWrapper, "defaultProps", {
  show: false,
  blurContainerSelector: ""
});

var Wrapper = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "ModalWrapper__Wrapper",
  componentId: "ti5u71-0"
})(["", ";"], function (props) {
  return props.isShown && "\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 9999\n  ";
});

var slideUp = (0, _styledComponents.keyframes)(["from{transform:translate(-50%,-40%);opacity:0;},to{transform:translate(-50%,-50%);opacity:1;}"]);

var ModalOverlay = _styledComponents.default.div.withConfig({
  displayName: "ModalWrapper__ModalOverlay",
  componentId: "ti5u71-1"
})(["position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.6);"]);

exports.ModalOverlay = ModalOverlay;

var ModalContainer = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "ModalWrapper__ModalContainer",
  componentId: "ti5u71-2"
})(["position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;width:", ";height:min-content;border-radius:5px;box-shadow:0 4px 15px rgba(0,0,0,0.15);animation:", " 250ms linear;", ";"], function (props) {
  if (props.image) {
    return props.viewportWidth > 900 ? ModalWidth.Wide : ModalWidth.Medium;
  } else {
    return props.width ? props.width : ModalWidth.Normal;
  }
}, slideUp, function (props) {
  return props.fullscreenResponsiveModal ? _Helpers.media.sm(_templateObject2()) : _Helpers.media.sm(_templateObject3());
});

exports.ModalContainer = ModalContainer;

var ModalInner = _styledComponents.default.div.attrs({}).withConfig({
  displayName: "ModalWrapper__ModalInner",
  componentId: "ti5u71-3"
})(["max-height:calc(100vh - 80px);overflow-y:auto;", ";"], function (props) {
  return props.fullscreenResponsiveModal && _Helpers.media.sm(_templateObject4());
});

var _default = ModalWrapper;
exports.default = _default;
//# sourceMappingURL=ModalWrapper.js.map