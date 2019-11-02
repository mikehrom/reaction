"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileLoginForm = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _helpers = require("../helpers");

var _Icon = _interopRequireDefault(require("../../Icon"));

var _PasswordInput = _interopRequireDefault(require("../../PasswordInput"));

var _ProgressIndicator = require("../../ProgressIndicator");

var _QuickInput = _interopRequireDefault(require("../../QuickInput"));

var _Wizard = require("../../Wizard");

var _react = _interopRequireWildcard(require("react"));

var _repcaptcha = require("../../../Utils/repcaptcha");

var _commonElements = require("../commonElements");

var _Validators = require("../Validators");

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

var MobileLoginFormWithSystemContext =
/*#__PURE__*/
function (_Component) {
  _inherits(MobileLoginFormWithSystemContext, _Component);

  function MobileLoginFormWithSystemContext() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MobileLoginFormWithSystemContext);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MobileLoginFormWithSystemContext)).call.apply(_getPrototypeOf2, [this].concat(args)));

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
      (0, _repcaptcha.repcaptcha)("login_submit");

      _this.props.handleSubmit(values, formikBag);
    });

    return _this;
  }

  _createClass(MobileLoginFormWithSystemContext, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var steps = [_react.default.createElement(_Wizard.Step, {
        validationSchema: _Validators.MobileLoginValidator.email,
        onSubmit: function onSubmit(values, actions) {
          return (0, _helpers.checkEmail)({
            relayEnvironment: _this2.props.relayEnvironment,
            values: values,
            actions: actions,
            shouldExist: true
          });
        }
      }, function (_ref) {
        var wizard = _ref.wizard,
            _ref$form = _ref.form,
            errors = _ref$form.errors,
            touched = _ref$form.touched,
            values = _ref$form.values,
            handleChange = _ref$form.handleChange,
            handleBlur = _ref$form.handleBlur,
            setTouched = _ref$form.setTouched;
        return _react.default.createElement(_QuickInput.default, {
          block: true,
          error: errors.email,
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
        });
      }), _react.default.createElement(_Wizard.Step, {
        validationSchema: _Validators.MobileLoginValidator.password
      }, function (_ref2) {
        var wizard = _ref2.wizard,
            _ref2$form = _ref2.form,
            errors = _ref2$form.errors,
            touched = _ref2$form.touched,
            values = _ref2$form.values,
            handleChange = _ref2$form.handleChange,
            handleBlur = _ref2$form.handleBlur,
            setTouched = _ref2$form.setTouched;
        return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_PasswordInput.default, {
          block: true,
          error: errors.password,
          name: "password",
          label: "Password",
          placeholder: "Password",
          value: values.password,
          onChange: handleChange,
          onBlur: handleBlur,
          setTouched: setTouched,
          touchedOnChange: false
        }), _react.default.createElement(_palette.Flex, {
          alignItems: "center",
          justifyContent: "flex-end"
        }, _react.default.createElement(_commonElements.ForgotPassword, {
          onClick: function onClick() {
            return location.href = "/forgot";
          }
        })));
      })];
      return _react.default.createElement(_Wizard.Wizard, {
        steps: steps,
        onComplete: this.onSubmit
      }, function (context) {
        var wizard = context.wizard,
            _context$form = context.form,
            handleSubmit = _context$form.handleSubmit,
            values = _context$form.values,
            status = _context$form.status,
            isSubmitting = _context$form.isSubmitting;
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
        })), _react.default.createElement(_commonElements.MobileHeader, null, "Log in to Artsy"), currentStep, _this2.showError(status), _react.default.createElement(_commonElements.SubmitButton, {
          onClick: handleSubmit,
          loading: isLastStep && isSubmitting
        }, isLastStep ? "Log in" : "Next"), _react.default.createElement(_commonElements.Footer, {
          mode: "login",
          handleTypeChange: _this2.props.handleTypeChange,
          onFacebookLogin: _this2.props.onFacebookLogin
        })));
      });
    }
  }]);

  return MobileLoginFormWithSystemContext;
}(_react.Component);

var MobileLoginForm = (0, _Artsy.withSystemContext)(MobileLoginFormWithSystemContext);
exports.MobileLoginForm = MobileLoginForm;
//# sourceMappingURL=LoginForm.js.map