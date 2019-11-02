"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderStepper = OrderStepper;
exports.counterofferFlowSteps = exports.buyNowFlowSteps = exports.offerFlowSteps = void 0;

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.index-of");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function typedArray() {
  for (var _len = arguments.length, elems = new Array(_len), _key = 0; _key < _len; _key++) {
    elems[_key] = arguments[_key];
  }

  return elems;
}

var offerFlowSteps = typedArray("Offer", "Shipping", "Payment", "Review");
exports.offerFlowSteps = offerFlowSteps;
var buyNowFlowSteps = typedArray("Shipping", "Payment", "Review");
exports.buyNowFlowSteps = buyNowFlowSteps;
var counterofferFlowSteps = typedArray("Respond", "Review");
exports.counterofferFlowSteps = counterofferFlowSteps;

function OrderStepper(_ref) {
  var currentStep = _ref.currentStep,
      steps = _ref.steps;
  var stepIndex = steps.indexOf(currentStep);
  return _react.default.createElement(_palette.Stepper, {
    initialTabIndex: stepIndex,
    currentStepIndex: stepIndex,
    disableNavigation: true,
    autoScroll: true
  }, steps.map(function (step) {
    return _react.default.createElement(_palette.Step, {
      name: step,
      key: step
    });
  }));
}
//# sourceMappingURL=OrderStepper.js.map