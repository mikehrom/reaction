"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileSignUpForm = exports.currentStepActionName = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.function.name");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

var _Artsy = require("../../../Artsy");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _commonElements = require("../commonElements");

var _helpers = require("../helpers");

var _Validators = require("../Validators");

var _Icon = _interopRequireDefault(require("../../Icon"));

var _PasswordInput = _interopRequireDefault(require("../../PasswordInput"));

var _ProgressIndicator = require("../../ProgressIndicator");

var _QuickInput = _interopRequireDefault(require("../../QuickInput"));

var _Wizard = require("../../Wizard");

var _react = _interopRequireWildcard(require("react"));

var _repcaptcha = require("../../../Utils/repcaptcha");

var _dec, _dec2, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

var currentStepActionName = {
  0: Schema.ActionName.EmailNextButton,
  1: Schema.ActionName.PasswordNextButton
};
exports.currentStepActionName = currentStepActionName;
var TrackedMobileSignUpForm = (_dec = (0, _Analytics.track)(), _dec2 = (0, _Analytics.track)(function (props, state, args) {
  return {
    action_type: Schema.ActionType.Click,
    action_name: currentStepActionName[args[0]],
    contextModule: args[1],
    flow: "auth",
    subject: "clicked next button",
    intent: props.intent
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(TrackedMobileSignUpForm, _Component);

  function TrackedMobileSignUpForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TrackedMobileSignUpForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TrackedMobileSignUpForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isSocialSignUp: false
    });

    _defineProperty(_assertThisInitialized(_this), "showError", function (status) {
      var error = _this.props.error;

      if (error) {
        return _react.default.createElement(_commonElements.Error, {
          show: true
        }, error);
      }

      if (status && !status.success) {
        return _react.default.createElement(_commonElements.Error, {
          show: true
        }, status.error);
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (values, formikBag) {
      (0, _repcaptcha.repcaptcha)("signup_submit", function (recaptcha_token) {
        var valuesWithToken = _objectSpread({}, values, {
          recaptcha_token: recaptcha_token
        });

        _this.props.handleSubmit(valuesWithToken, formikBag);
      });
    });

    return _this;
  }

  _createClass(TrackedMobileSignUpForm, [{
    key: "trackNextClick",
    value: function trackNextClick(currentStepIndex, contextModule) {// no op
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var steps = [_react.default.createElement(_Wizard.Step, {
        validationSchema: _Validators.MobileSignUpValidator.email,
        onSubmit: function onSubmit(values, actions) {
          return (0, _helpers.checkEmail)({
            relayEnvironment: _this2.props.relayEnvironment,
            values: values,
            actions: actions,
            shouldExist: false
          });
        }
      }, function (_ref) {
        var wizard = _ref.wizard,
            _ref$form = _ref.form,
            errors = _ref$form.errors,
            values = _ref$form.values,
            handleChange = _ref$form.handleChange,
            handleBlur = _ref$form.handleBlur,
            setTouched = _ref$form.setTouched;
        return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_QuickInput.default, {
          block: true,
          error: !_this2.state.isSocialSignUp && errors.email,
          placeholder: "Enter your email address",
          name: "email",
          label: "Email",
          type: "email",
          value: values.email,
          onChange: handleChange,
          onBlur: handleBlur,
          setTouched: setTouched,
          touchedOnChange: false,
          autoFocus: true
        }), _react.default.createElement(_commonElements.TermsOfServiceCheckbox, {
          error: errors.accepted_terms_of_service,
          checked: values.accepted_terms_of_service,
          value: values.accepted_terms_of_service,
          type: "checkbox",
          name: "accepted_terms_of_service",
          onChange: handleChange,
          onBlur: handleBlur
        }));
      }), _react.default.createElement(_Wizard.Step, {
        validationSchema: _Validators.MobileSignUpValidator.password
      }, function (_ref2) {
        var wizard = _ref2.wizard,
            _ref2$form = _ref2.form,
            errors = _ref2$form.errors,
            values = _ref2$form.values,
            handleChange = _ref2$form.handleChange,
            handleBlur = _ref2$form.handleBlur,
            setTouched = _ref2$form.setTouched;
        return _react.default.createElement(_PasswordInput.default, {
          block: true,
          error: errors.password,
          name: "password",
          label: "Password",
          placeholder: "Password",
          value: values.password,
          onChange: handleChange,
          onBlur: handleBlur,
          setTouched: setTouched,
          touchedOnChange: false,
          showPasswordMessage: true
        });
      }), _react.default.createElement(_Wizard.Step, {
        validationSchema: _Validators.MobileSignUpValidator.name
      }, function (_ref3) {
        var wizard = _ref3.wizard,
            _ref3$form = _ref3.form,
            errors = _ref3$form.errors,
            values = _ref3$form.values,
            handleChange = _ref3$form.handleChange,
            handleBlur = _ref3$form.handleBlur,
            setTouched = _ref3$form.setTouched;
        return _react.default.createElement(_QuickInput.default, {
          block: true,
          error: errors.name,
          name: "name",
          label: "Name",
          placeholder: "Name",
          type: "text",
          value: values.name,
          onChange: handleChange,
          onBlur: handleBlur,
          setTouched: setTouched,
          touchedOnChange: false
        });
      })];
      return _react.default.createElement(_Wizard.Wizard, {
        steps: steps,
        onComplete: this.onSubmit
      }, function (context) {
        var _context$form = context.form,
            handleSubmit = _context$form.handleSubmit,
            values = _context$form.values,
            setTouched = _context$form.setTouched,
            isSubmitting = _context$form.isSubmitting,
            status = _context$form.status,
            wizard = context.wizard;
        var currentStep = wizard.currentStep,
            isLastStep = wizard.isLastStep;
        return _react.default.createElement(_commonElements.MobileContainer, null, _react.default.createElement(_ProgressIndicator.ProgressIndicator, {
          percentComplete: wizard.progressPercentage
        }), _react.default.createElement(_commonElements.MobileInnerWrapper, null, _react.default.createElement(_commonElements.BackButton, {
          onClick: function onClick(e) {
            return _this2.props.onBackButtonClicked && wizard.currentStepIndex === 0 ? _this2.props.onBackButtonClicked(e) : wizard.previous(e, values);
          }
        }, _react.default.createElement(_Icon.default, {
          name: "chevron-left",
          color: "black60",
          fontSize: "16px"
        })), _react.default.createElement(_commonElements.MobileHeader, null, _this2.props.title || "Sign up for Artsy"), currentStep, _this2.showError(status), _react.default.createElement(_commonElements.SubmitButton, {
          onClick: function onClick(e) {
            if (wizard.shouldAllowNext && _this2.props.contextModule) {
              _this2.trackNextClick(wizard.currentStepIndex, _this2.props.contextModule);
            }

            _this2.setState({
              isSocialSignUp: false
            }, function () {
              handleSubmit(e);
            });
          },
          loading: isLastStep && isSubmitting
        }, isLastStep ? "Create account" : "Next"), _react.default.createElement(_commonElements.Footer, {
          mode: "signup",
          onFacebookLogin: function onFacebookLogin(e) {
            if (!values.accepted_terms_of_service) {
              _this2.setState({
                isSocialSignUp: true
              }, function () {
                setTouched({
                  accepted_terms_of_service: true
                });
              });
            } else {
              if (_this2.props.onFacebookLogin) {
                _this2.props.onFacebookLogin(e);
              }
            }
          },
          handleTypeChange: _this2.props.handleTypeChange,
          showRecaptchaDisclaimer: _this2.props.showRecaptchaDisclaimer
        })));
      });
    }
  }]);

  return TrackedMobileSignUpForm;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "trackNextClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackNextClick"), _class2.prototype)), _class2)) || _class);
var MobileSignUpForm = (0, _Artsy.withSystemContext)(TrackedMobileSignUpForm);
exports.MobileSignUpForm = MobileSignUpForm;
//# sourceMappingURL=SignUpForm.js.map