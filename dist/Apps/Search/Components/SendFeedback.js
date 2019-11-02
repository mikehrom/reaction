"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendFeedback = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.regexp.match");

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _Constants = require("../../../Components/Publishing/Constants");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _errors = require("../../../Utils/errors");

var _logger = _interopRequireDefault(require("../../../Utils/logger"));

var _graphql;

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

var logger = (0, _logger.default)("Apps/Search/Components/SendFeedback.tsx");

var SendFeedbackForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SendFeedbackForm, _React$Component);

  function SendFeedbackForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SendFeedbackForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SendFeedbackForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      submitted: false,
      message: "",
      name: "",
      email: "",
      triggeredValidation: false
    });

    return _this;
  }

  _createClass(SendFeedbackForm, [{
    key: "handleClick",
    value: function handleClick() {
      var _this2 = this;

      var relayEnvironment = this.props.relayEnvironment;
      var _this$state = this.state,
          message = _this$state.message,
          name = _this$state.name,
          email = _this$state.email;
      (0, _reactRelay.commitMutation)(relayEnvironment, {
        mutation: _graphql || (_graphql = function _graphql() {
          var node = require("../../../__generated__/SendFeedbackSearchResultsMutation.graphql");

          if (node.hash && node.hash !== "37c6ef609611534460d2c76061671dac") {
            console.error("The definition of 'SendFeedbackSearchResultsMutation' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
          }

          return require("../../../__generated__/SendFeedbackSearchResultsMutation.graphql");
        }),
        variables: {
          input: {
            message: message,
            email: email,
            name: name
          }
        },
        // Add slight delay to make UX seem a bit nicer
        optimisticUpdater: function optimisticUpdater() {
          setTimeout(function () {
            return _this2.setState({
              submitted: true
            });
          }, 500);
        },
        onCompleted: function onCompleted(data) {
          var feedbackOrError = data.sendFeedback.feedbackOrError;

          if (feedbackOrError.mutationError) {
            logger.error(new _errors.ErrorWithMetadata(feedbackOrError.mutationError.type, feedbackOrError.mutationError.message));
          } else {
            _this2.setState({
              submitted: true
            });
          }
        }
      });
    }
  }, {
    key: "renderPersonalInfoInputs",
    value: function renderPersonalInfoInputs() {
      var _this3 = this;

      return _react.default.createElement(LoggedOutInputContainer, {
        mt: 2,
        alignContent: "space-between"
      }, _react.default.createElement(_palette.Box, {
        mr: 1,
        width: "50%"
      }, _react.default.createElement(_palette.Input, {
        name: "name",
        placeholder: "Your name",
        onChange: function onChange(_ref) {
          var value = _ref.currentTarget.value;

          _this3.setState({
            name: value
          });
        },
        required: true,
        error: this.errorForText("name")
      })), _react.default.createElement(_palette.Box, {
        width: "50%"
      }, _react.default.createElement(_palette.Input, {
        name: "email",
        placeholder: "Email address",
        onChange: function onChange(_ref2) {
          var value = _ref2.currentTarget.value;

          _this3.setState({
            email: value
          });
        },
        required: true,
        error: this.errorForEmail()
      })));
    }
  }, {
    key: "errorForEmail",
    value: function errorForEmail() {
      var _this$state2 = this.state,
          email = _this$state2.email,
          triggeredValidation = _this$state2.triggeredValidation;
      if (!triggeredValidation) return;
      if (!email) return "Cannot leave field blank";
      if (!email.match(_Constants.EMAIL_REGEX)) return "Invalid email.";
    }
  }, {
    key: "errorForText",
    value: function errorForText(key) {
      var triggeredValidation = this.state.triggeredValidation;
      if (!triggeredValidation) return;
      var text = this.state[key];
      if (!text) return "Cannot leave field blank";
    }
  }, {
    key: "hasErrors",
    value: function hasErrors() {
      var user = this.props.user;
      if (user) return !!this.errorForText("message");
      return !!(this.errorForEmail() || this.errorForText("message") || this.errorForText("name"));
    }
  }, {
    key: "renderFeedbackTextArea",
    value: function renderFeedbackTextArea() {
      var _this4 = this;

      return _react.default.createElement(FeedbackTextAreaContainer, {
        my: 3
      }, _react.default.createElement(_palette.TextArea, {
        onChange: function onChange(_ref3) {
          var value = _ref3.value;

          _this4.setState({
            message: value
          });
        },
        placeholder: "Your comments here",
        required: true,
        error: this.errorForText("message")
      }));
    }
  }, {
    key: "renderSuccess",
    value: function renderSuccess() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.CheckCircleIcon, null), _react.default.createElement(_palette.Box, {
        mt: 1,
        textAlign: "center"
      }, _react.default.createElement(_palette.Serif, {
        size: "4"
      }, "Your message has been sent!")), _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
        size: "2"
      }, "Thank you for helping to improve Artsy.")));
    }
  }, {
    key: "renderFeedbackForm",
    value: function renderFeedbackForm() {
      var _this5 = this;

      var user = this.props.user;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Box, {
        textAlign: "center"
      }, _react.default.createElement(_palette.Serif, {
        size: "5"
      }, "Your feedback is important to us.")), _react.default.createElement(_palette.Box, null, _react.default.createElement(_palette.Serif, {
        size: "3"
      }, "Tell us how we can improve and help you find what you are looking for.")), !user ? this.renderPersonalInfoInputs() : null, this.renderFeedbackTextArea(), _react.default.createElement(_palette.Button, {
        onClick: function onClick() {
          _this5.setState({
            triggeredValidation: true
          }, function () {
            if (_this5.hasErrors()) return;

            _this5.handleClick();
          });
        }
      }, "Submit"));
    }
  }, {
    key: "render",
    value: function render() {
      var submitted = this.state.submitted;
      return _react.default.createElement(_palette.Box, {
        bg: (0, _palette.color)("black5"),
        p: 6,
        mt: 3
      }, _react.default.createElement(FeedbackContainer, {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
      }, submitted ? this.renderSuccess() : this.renderFeedbackForm()));
    }
  }]);

  return SendFeedbackForm;
}(_react.default.Component);

var FeedbackContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "SendFeedback__FeedbackContainer",
  componentId: "u7g2gq-0"
})(["min-height:212px;"]);
var FeedbackTextAreaContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "SendFeedback__FeedbackTextAreaContainer",
  componentId: "u7g2gq-1"
})(["max-width:484px;width:100%;"]);
var LoggedOutInputContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "SendFeedback__LoggedOutInputContainer",
  componentId: "u7g2gq-2"
})(["max-width:484px;width:100%;"]);
var SendFeedback = (0, _Artsy.withSystemContext)(SendFeedbackForm);
exports.SendFeedback = SendFeedback;
//# sourceMappingURL=SendFeedback.js.map