"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingArea = void 0;

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingArea = function LoadingArea(props) {
  var transitionTime = props.transitionTime;
  var loaderClass = props.isLoading ? "loading" : "";
  return _react.default.createElement(OuterContainer, null, _react.default.createElement(SpinnerContainer, null, _react.default.createElement(SpinnerToggle, {
    transitionTime: transitionTime,
    className: loaderClass
  })), _react.default.createElement(Container, {
    transitionTime: transitionTime,
    className: loaderClass
  }, props.children));
};

exports.LoadingArea = LoadingArea;
LoadingArea.defaultProps = {
  transitionTime: "0.0s"
};

var OuterContainer = _styledComponents.default.div.withConfig({
  displayName: "LoadingArea__OuterContainer",
  componentId: "sc-18cqpxx-0"
})(["position:relative;"]);

var SpinnerContainer = _styledComponents.default.div.withConfig({
  displayName: "LoadingArea__SpinnerContainer",
  componentId: "sc-18cqpxx-1"
})(["position:absolute;top:100px;width:100%;z-index:1;"]);

var Container = _styledComponents.default.div.withConfig({
  displayName: "LoadingArea__Container",
  componentId: "sc-18cqpxx-2"
})(["opacity:1;position:relative;transition:opacity ", ";&.loading{opacity:0.1;}"], function (props) {
  return props.transitionTime;
});

var SpinnerToggle = (0, _styledComponents.default)(_Spinner.default).withConfig({
  displayName: "LoadingArea__SpinnerToggle",
  componentId: "sc-18cqpxx-3"
})(["position:absolute;opacity:0;transition:opacity ", ";&.loading{opacity:1;}"], function (props) {
  return props.transitionTime;
});
//# sourceMappingURL=LoadingArea.js.map