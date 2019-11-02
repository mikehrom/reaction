"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBlockquote = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconBlockquote = function IconBlockquote(props) {
  return _react.default.createElement("svg", {
    className: "IconBlockquote",
    viewBox: "0 0 14.29 15.4",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    fill: props.color,
    d: "M0,3.29A3.6,3.6,0,0,1,2.83,0,.36.36,0,0,1,3,.51C2.11.92,1.16,1.6,1.16,2.59A1.33,1.33,0,0,0,2.37,3.95.64.64,0,0,1,3,4.62c0,.36-.22,1-1.16,1A2.18,2.18,0,0,1,0,3.29Zm4.09,0A3.6,3.6,0,0,1,6.92,0a.36.36,0,0,1,.17.51C6.2.92,5.25,1.6,5.25,2.59A1.33,1.33,0,0,0,6.46,3.95a.64.64,0,0,1,.65.68c0,.36-.22,1-1.16,1A2.18,2.18,0,0,1,4.09,3.29Z"
  }), _react.default.createElement("path", {
    fill: props.color,
    d: "M10.2,12.11A3.6,3.6,0,0,1,7.37,15.4a.36.36,0,0,1-.17-.51C8.09,14.48,9,13.81,9,12.81a1.33,1.33,0,0,0-1.21-1.36.64.64,0,0,1-.65-.68c0-.36.22-1,1.16-1A2.18,2.18,0,0,1,10.2,12.11Zm4.09,0a3.6,3.6,0,0,1-2.83,3.29.36.36,0,0,1-.17-.51c.9-.41,1.84-1.09,1.84-2.08a1.33,1.33,0,0,0-1.21-1.36.64.64,0,0,1-.65-.68c0-.36.22-1,1.16-1A2.18,2.18,0,0,1,14.29,12.11Z"
  }));
};

exports.IconBlockquote = IconBlockquote;
IconBlockquote.defaultProps = {
  color: "black"
};
//# sourceMappingURL=IconBlockquote.js.map