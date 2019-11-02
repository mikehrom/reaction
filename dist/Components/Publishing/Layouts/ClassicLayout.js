"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassicLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Header = require("../Header/Header");

var _Sections = require("../Sections/Sections");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClassicLayout = function ClassicLayout(props) {
  return _react.default.createElement(ClassicLayoutContainer, null, _react.default.createElement(_Header.Header, props), _react.default.createElement(_Sections.Sections, props));
};

exports.ClassicLayout = ClassicLayout;

var ClassicLayoutContainer = _styledComponents.default.div.withConfig({
  displayName: "ClassicLayout__ClassicLayoutContainer",
  componentId: "mki2zl-0"
})(["position:relative;"]);
//# sourceMappingURL=ClassicLayout.js.map