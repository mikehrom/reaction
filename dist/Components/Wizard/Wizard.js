"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wizard = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _formik = require("formik");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

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

/**
 * Generate a multi-step wizard wrapped in a form.
 * steps can be an Array of children of the shape
 *
 * The wizard can be used in two different ways,
 * using the render prop API or passing steps in
 * as children.
 *
 * @example
 *
 * ```javascript
 * <Wizard steps={[<Step />, <Step />]}>
 *  {({ wizard, form }) => {
 *   <div>
 *     Current step: {wizard.currentStepIndex}
 *     <div>{wizard.currentStep}</div>
 *     <NextButton onClick={wizard.next} />
 *   </div>
 *  }}
 * </Wizard>
 * ```
 *
 * or
 *
 * ```javascript
 * <Wizard>
 *   <Step />
 *   <Step />
 * </Wizard>
 * ```
 */
var Wizard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wizard, _React$Component);

  function Wizard(props) {
    var _this;

    _classCallCheck(this, Wizard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wizard).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "next", function (e, values) {
      e && e.preventDefault();

      _this.setState(function (state) {
        return {
          currentStepIndex: Math.min(state.currentStepIndex + 1, _this.steps.length - 1),
          values: values
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "previous", function (e, values) {
      e && e.preventDefault();

      _this.setState(function (state) {
        return {
          currentStepIndex: Math.max(state.currentStepIndex - 1, 0)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (values, actions) {
      var onComplete = _this.props.onComplete;

      if (_this.isLastStep) {
        onComplete && onComplete(values, actions);
      } else {
        actions && actions.setSubmitting(false); // If exist, call onSubmit on the current step

        var onSubmit = _this.currentStep.props.onSubmit;

        if (onSubmit) {
          actions.setSubmitting(true);
          var result = onSubmit(values, actions);

          if (result instanceof Boolean) {
            actions.setSubmitting(false);
            return result;
          } else {
            return result.then(function (shouldGoNext) {
              if (shouldGoNext) {
                actions.setSubmitting(false);

                _this.next(null, values);
              }
            });
          }
        } else {
          _this.next(null, values);
        }
      }
    });

    _this.state = {
      currentStepIndex: 0
    };
    return _this;
  }

  _createClass(Wizard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          initialValues = _this$props.initialValues,
          children = _this$props.children;
      var _this$currentStep$pro = this.currentStep.props,
          validate = _this$currentStep$pro.validate,
          validationSchema = _this$currentStep$pro.validationSchema;
      return _react.default.createElement(_formik.Formik, {
        initialValues: initialValues,
        validate: validate,
        validationSchema: validationSchema,
        validateOnChange: false,
        onSubmit: this.handleSubmit,
        render: function render(formikRenderProps) {
          var context = {
            wizard: _this2.wizardProps,
            form: formikRenderProps
          };
          context.wizard.shouldAllowNext = (0, _isEmpty2.default)(formikRenderProps.errors) && !(0, _isEmpty2.default)(formikRenderProps.touched);
          return _react.default.createElement("form", {
            onSubmit: formikRenderProps.handleSubmit
          }, _react.default.createElement(WizardContextProvider, context, !!_this2.props.steps ? _react.default.createElement(children, context) : _this2.currentStep));
        }
      });
    }
  }, {
    key: "steps",
    get: function get() {
      if (!!this.props.steps) {
        return this.props.steps;
      } else {
        return _react.default.Children.toArray(this.props.children);
      }
    }
  }, {
    key: "currentStep",
    get: function get() {
      return this.steps[this.state.currentStepIndex];
    }
  }, {
    key: "isLastStep",
    get: function get() {
      return this.state.currentStepIndex === this.steps.length - 1;
    }
  }, {
    key: "wizardProps",
    get: function get() {
      return {
        currentStep: this.currentStep,
        isLastStep: this.isLastStep,
        previous: this.previous,
        next: this.handleSubmit,
        currentStepIndex: this.state.currentStepIndex,
        steps: this.steps,
        shouldAllowNext: false,
        progressPercentage: (this.state.currentStepIndex + 1) / this.steps.length
      };
    }
  }]);

  return Wizard;
}(_react.default.Component);

exports.Wizard = Wizard;

_defineProperty(Wizard, "defaultProps", {
  initialValues: null
});

var WizardContextProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(WizardContextProvider, _Component);

  function WizardContextProvider() {
    _classCallCheck(this, WizardContextProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(WizardContextProvider).apply(this, arguments));
  }

  _createClass(WizardContextProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        wizard: this.props.wizard,
        form: this.props.form
      };
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);

  return WizardContextProvider;
}(_react.Component);

_defineProperty(WizardContextProvider, "childContextTypes", {
  wizard: _propTypes.default.object,
  form: _propTypes.default.object
});
//# sourceMappingURL=Wizard.js.map