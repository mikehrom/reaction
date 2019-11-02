"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormSwitcher = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.assign");

var _palette = require("@artsy/palette");

var _querystring = _interopRequireDefault(require("querystring"));

var _react = _interopRequireDefault(require("react"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _Artsy = require("../../Artsy");

var _ForgotPasswordForm = require("./Desktop/ForgotPasswordForm");

var _LoginForm = require("./Desktop/LoginForm");

var _SignUpForm = require("./Desktop/SignUpForm");

var _ForgotPasswordForm2 = require("./Mobile/ForgotPasswordForm");

var _LoginForm2 = require("./Mobile/LoginForm");

var _SignUpForm2 = require("./Mobile/SignUpForm");

var _Types = require("./Types");

var _dec, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var FormSwitcher = (_dec = (0, _reactTracking.default)({}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormSwitcher, _React$Component);

  function FormSwitcher(props) {
    var _this;

    _classCallCheck(this, FormSwitcher);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormSwitcher).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleTypeChange", function (newType) {
      var _this$props = _this.props,
          isMobile = _this$props.isMobile,
          isStatic = _this$props.isStatic,
          handleTypeChange = _this$props.handleTypeChange,
          options = _this$props.options;

      if (isMobile || isStatic) {
        if (typeof window !== "undefined") {
          window.location.assign("/".concat(newType, "?").concat(_querystring.default.stringify(options)));
        }
      } else {
        _this.setState({
          type: newType
        });

        if (handleTypeChange) {
          handleTypeChange(newType);
        }
      }
    });

    _this.state = {
      type: _this.props.type
    };
    return _this;
  }

  _createClass(FormSwitcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          _this$props2$options = _this$props2.options,
          contextModule = _this$props2$options.contextModule,
          copy = _this$props2$options.copy,
          destination = _this$props2$options.destination,
          redirectTo = _this$props2$options.redirectTo,
          intent = _this$props2$options.intent,
          trigger = _this$props2$options.trigger,
          triggerSeconds = _this$props2$options.triggerSeconds,
          type = _this$props2.type,
          tracking = _this$props2.tracking; // Analytics

      var event = Object.assign({
        action: "Auth impression",
        type: type,
        context_module: contextModule,
        modal_copy: copy,
        trigger: trigger || "click",
        trigger_seconds: triggerSeconds,
        intent: intent,
        auth_redirect: redirectTo || destination
      }, type === "signup" ? {
        onboarding: !redirectTo
      } : null);

      if (tracking) {
        tracking.trackEvent(event);
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.type !== nextProps.type && nextProps.type) {
        this.setState({
          type: nextProps.type
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          error = _this$props3.error,
          isMobile = _this$props3.isMobile,
          title = _this$props3.title,
          options = _this$props3.options,
          showRecaptchaDisclaimer = _this$props3.showRecaptchaDisclaimer;
      var queryData = Object.assign({}, options, {
        accepted_terms_of_service: true,
        agreed_to_receive_emails: true,
        "signup-referer": options.signupReferer
      }, options.redirectTo ? {
        "redirect-to": options.redirectTo
      } : null, options.intent ? {
        "signup-intent": options.intent
      } : null);

      var authQueryData = _querystring.default.stringify(queryData);

      var Form;

      switch (this.state.type) {
        case _Types.ModalType.login:
          Form = isMobile ? _LoginForm2.MobileLoginForm : _LoginForm.LoginForm;
          break;

        case _Types.ModalType.signup:
          Form = isMobile ? _SignUpForm2.MobileSignUpForm : _SignUpForm.SignUpForm;
          break;

        case _Types.ModalType.forgot:
          Form = isMobile ? _ForgotPasswordForm2.MobileForgotPasswordForm : _ForgotPasswordForm.ForgotPasswordForm;
          break;

        default:
          return null;
      }

      var _this$props4 = this.props,
          handleSubmit = _this$props4.handleSubmit,
          onBackButtonClicked = _this$props4.onBackButtonClicked,
          values = _this$props4.values;
      var defaultValues = {
        email: values.email || "",
        password: values.password || "",
        name: values.name || "",
        accepted_terms_of_service: values.accepted_terms_of_service || false
      };
      return _react.default.createElement(_Artsy.SystemContextProvider, null, _react.default.createElement(_palette.Theme, null, _react.default.createElement(Form, {
        title: title,
        contextModule: options.contextModule,
        error: error,
        values: defaultValues,
        handleTypeChange: this.handleTypeChange,
        handleSubmit: handleSubmit,
        intent: options.intent,
        onBackButtonClicked: onBackButtonClicked,
        onFacebookLogin: function onFacebookLogin() {
          if (_this2.props.onSocialAuthEvent) {
            _this2.props.onSocialAuthEvent(_objectSpread({}, options, {
              service: "facebook"
            }));
          }

          if (typeof window !== "undefined") {
            window.location.href = _this2.props.submitUrls.facebook + "?".concat(authQueryData) + "&service=facebook";
          }
        },
        showRecaptchaDisclaimer: showRecaptchaDisclaimer
      })));
    }
  }]);

  return FormSwitcher;
}(_react.default.Component), _defineProperty(_class2, "defaultProps", {
  values: {}
}), _temp)) || _class);
exports.FormSwitcher = FormSwitcher;
//# sourceMappingURL=FormSwitcher.js.map