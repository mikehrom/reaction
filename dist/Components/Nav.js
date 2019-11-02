"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = _interopRequireDefault(require("../Assets/Colors"));

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents.default.div.withConfig({
  displayName: "Nav",
  componentId: "kvbpty-0"
})(["border-bottom:1px solid ", ";display:flex;height:70px;align-content:center;"], _Colors.default.grayRegular);

var NavIcon = _styledComponents.default.a.withConfig({
  displayName: "Nav__NavIcon",
  componentId: "kvbpty-1"
})(["display:inline-block;font-size:32px;padding:15px 0 15px 22px;margin-right:10px;flex:0;"]);
/* stylelint-disable-next-line */


var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject());

var NavBar = function NavBar(props) {
  return _react.default.createElement(Nav, null, _react.default.createElement(GlobalStyle, {
    suppressMultiMountWarning: true
  }), _react.default.createElement(NavIcon, {
    href: props.logoLink
  }, _react.default.createElement(_Icon.default, {
    name: "logotype",
    color: "black",
    fontSize: "40px"
  })), props.children);
};

var _default = NavBar;
exports.default = _default;
//# sourceMappingURL=Nav.js.map