"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wizard = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.regexp.constructor");

require("core-js/modules/es6.array.index-of");

var _react = _interopRequireDefault(require("react"));

var _reactRouter = require("react-router");

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _ProgressIndicator = require("../ProgressIndicator");

var _Artists = _interopRequireDefault(require("./Steps/Artists"));

var _Budget = _interopRequireWildcard(require("./Steps/Budget"));

var _CollectorIntent = _interopRequireWildcard(require("./Steps/CollectorIntent"));

var _Genes = _interopRequireDefault(require("./Steps/Genes"));

var _dec, _class, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STEPS = ["/personalize/".concat(_CollectorIntent.CollectorIntentComponent.slug), "/personalize/".concat(_Artists.default.slug), "/personalize/".concat(_Genes.default.slug), "/personalize/".concat(_Budget.BudgetComponent.slug)];
var Wizard = (_dec = (0, _reactTracking.default)({}, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Wizard, _React$Component);

  function Wizard(props) {
    var _this;

    _classCallCheck(this, Wizard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Wizard).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onNextButtonPressed", function (increaseBy, history) {
      history.push(STEPS[STEPS.indexOf(location.pathname) + increaseBy]);
    });

    _defineProperty(_assertThisInitialized(_this), "onFinish", function () {
      _this.setState({
        finished: true
      });

      setTimeout(function () {
        return window.location.href = _this.props.redirectTo || "/";
      }, 500);

      _this.props.tracking.trackEvent({
        action: "Completed Onboarding"
      });
    });

    _this.state = {
      finished: false
    };
    return _this;
  }

  _createClass(Wizard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", null, _react.default.createElement(_reactRouter.Route, {
        path: "/personalize/*",
        render: function render() {
          return _react.default.createElement(_ProgressIndicator.ProgressIndicator, {
            percentComplete: _this2.state.finished ? 1 : STEPS.indexOf(location.pathname) / STEPS.length
          });
        }
      }), _react.default.createElement(_reactRouter.Route, {
        path: "/personalize/".concat(_CollectorIntent.CollectorIntentComponent.slug),
        render: function render(props) {
          return _react.default.createElement(_CollectorIntent.default, _extends({}, props, {
            onNextButtonPressed: function onNextButtonPressed() {
              var increaseBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              return _this2.onNextButtonPressed(increaseBy, props.history);
            }
          }));
        }
      }), _react.default.createElement(_reactRouter.Route, {
        path: "/personalize/".concat(_Artists.default.slug),
        render: function render(props) {
          return _react.default.createElement(_Artists.default, _extends({}, props, {
            onNextButtonPressed: function onNextButtonPressed() {
              var increaseBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              return _this2.onNextButtonPressed(increaseBy, props.history);
            }
          }));
        }
      }), _react.default.createElement(_reactRouter.Route, {
        path: "/personalize/".concat(_Genes.default.slug),
        render: function render(props) {
          return _react.default.createElement(_Genes.default, _extends({}, props, {
            onNextButtonPressed: function onNextButtonPressed() {
              var increaseBy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
              return _this2.onNextButtonPressed(increaseBy, props.history);
            }
          }));
        }
      }), _react.default.createElement(_reactRouter.Route, {
        path: "/personalize/".concat(_Budget.BudgetComponent.slug),
        render: function render(props) {
          return _react.default.createElement(_Budget.default, _extends({}, props, {
            onNextButtonPressed: function onNextButtonPressed() {
              return _this2.onFinish();
            }
          }));
        }
      }), new RegExp("^/personalize(?!(/".concat(_CollectorIntent.CollectorIntentComponent.slug, "|/").concat(_Artists.default.slug, "|/").concat(_Genes.default.slug, "|/").concat(_Budget.BudgetComponent.slug, ")).*$")).exec(location.pathname) && _react.default.createElement(_reactRouter.Redirect, {
        to: "/personalize/".concat(_CollectorIntent.CollectorIntentComponent.slug)
      }));
    }
  }]);

  return Wizard;
}(_react.default.Component), _temp)) || _class);
exports.Wizard = Wizard;
//# sourceMappingURL=Wizard.js.map