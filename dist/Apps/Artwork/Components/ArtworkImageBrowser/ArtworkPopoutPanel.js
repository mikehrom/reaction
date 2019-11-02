"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkPopoutPanel = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _Icon = _interopRequireDefault(require("../../../../Components/Icon"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ArtworkPopoutPanel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkPopoutPanel, _React$Component);

  function ArtworkPopoutPanel() {
    _classCallCheck(this, ArtworkPopoutPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkPopoutPanel).apply(this, arguments));
  }

  _createClass(ArtworkPopoutPanel, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(Container, null, _react.default.createElement(_palette.Box, {
        position: "absolute",
        top: (0, _palette.space)(1),
        right: (0, _palette.space)(1)
      }, _react.default.createElement(CloseIcon, {
        name: "close",
        onClick: this.props.onClose
      })), _react.default.createElement(_palette.Flex, {
        flexDirection: "column",
        p: 2
      }, _react.default.createElement(_palette.Flex, {
        flexDirection: "row",
        mb: 2
      }, _react.default.createElement(_palette.Sans, {
        size: "3",
        weight: "medium",
        color: "black100"
      }, this.props.title)), this.props.children));
    }
  }]);

  return ArtworkPopoutPanel;
}(_react.default.Component);

exports.ArtworkPopoutPanel = ArtworkPopoutPanel;

var Container = _styledComponents.default.div.withConfig({
  displayName: "ArtworkPopoutPanel__Container",
  componentId: "wtpus-0"
})(["position:absolute;width:300px;bottom:40px;border-radius:2px;background-color:#ffffff;box-shadow:0 2px 10px 0 rgba(0,0,0,0.2);"]);

var CloseIcon = (0, _styledComponents.default)(_Icon.default).withConfig({
  displayName: "ArtworkPopoutPanel__CloseIcon",
  componentId: "wtpus-1"
})(["color:", ";cursor:pointer;font-size:12px;"], (0, _palette.color)("black30"));
//# sourceMappingURL=ArtworkPopoutPanel.js.map