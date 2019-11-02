"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalManager = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.bind");

var _react = _interopRequireWildcard(require("react"));

var _DesktopModal = require("./Components/DesktopModal");

var _FormSwitcher = require("../FormSwitcher");

var _helpers = require("../helpers");

var _Types = require("../Types");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var ModalManager =
/*#__PURE__*/
function (_Component) {
  _inherits(ModalManager, _Component);

  function ModalManager() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentType: null,
      options: {
        copy: null,
        redirectTo: "/"
      },
      switchedForms: false
    });

    _defineProperty(_assertThisInitialized(_this), "openModal", function (options) {
      var mode = options.mode;

      _this.setState({
        currentType: mode,
        options: options
      });

      document.body.style.overflowY = "hidden";
      _this.props.onModalOpen && _this.props.onModalOpen();
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        currentType: null,
        options: {}
      });

      document.body.style.overflowY = "auto";
      _this.props.onModalClose && _this.props.onModalClose();
    });

    _defineProperty(_assertThisInitialized(_this), "handleTypeChange", function (type) {
      var newOptions = _objectSpread({}, _this.state.options, {
        mode: type
      });

      _this.setState({
        currentType: type,
        options: newOptions,
        switchedForms: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setError", function (err) {
      return _this.setState({
        error: err
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getSubtitle", function () {
      var _this$state = _this.state,
          options = _this$state.options,
          switchedForms = _this$state.switchedForms,
          currentType = _this$state.currentType;

      if (switchedForms) {
        switch (currentType) {
          case _Types.ModalType.login:
            return "Log in";

          case _Types.ModalType.signup:
            return "Sign up";

          case _Types.ModalType.forgot:
            return "Forgot Password";

          default:
            return "The art world online";
        }
      } else {
        return options.copy || "The art world online";
      }
    });

    return _this;
  }

  _createClass(ModalManager, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          blurContainerSelector = _this$props.blurContainerSelector,
          csrf = _this$props.csrf,
          submitUrls = _this$props.submitUrls,
          redirectTo = _this$props.redirectTo;
      var _this$state2 = this.state,
          currentType = _this$state2.currentType,
          error = _this$state2.error,
          options = _this$state2.options;
      var handleSubmit = !!this.props.handleSubmit ? this.props.handleSubmit.bind(this, currentType, options) : (0, _helpers.handleSubmit)(submitUrls[currentType], csrf, redirectTo);
      return _react.default.createElement(_DesktopModal.DesktopModal, {
        blurContainerSelector: blurContainerSelector,
        show: !!currentType,
        onTypeChange: this.openModal,
        onClose: this.closeModal,
        subtitle: this.getSubtitle(),
        type: currentType,
        image: options.image
      }, _react.default.createElement(_FormSwitcher.FormSwitcher, {
        type: currentType,
        error: error,
        handleSubmit: handleSubmit,
        submitUrls: submitUrls,
        options: options,
        handleTypeChange: this.handleTypeChange,
        onSocialAuthEvent: this.props.onSocialAuthEvent,
        showRecaptchaDisclaimer: this.props.showRecaptchaDisclaimer
      }));
    }
  }]);

  return ModalManager;
}(_react.Component);

exports.ModalManager = ModalManager;
//# sourceMappingURL=ModalManager.js.map