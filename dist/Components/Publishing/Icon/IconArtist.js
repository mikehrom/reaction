"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconArtist = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconArtist = function IconArtist(props) {
  return _react.default.createElement("svg", {
    className: "IconArtist",
    x: "0px",
    y: "0px",
    viewBox: "0 0 14 18",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-1066.000000, -884.000000)",
    fill: props.color
  }, _react.default.createElement("g", {
    transform: "translate(1066.000000, 884.000000)"
  }, _react.default.createElement("g", {
    transform: "translate(0.000000, 9.000000)",
    stroke: props.color
  }, _react.default.createElement("rect", {
    stroke: "none",
    x: "0",
    y: "0",
    width: "14",
    height: "9"
  })), _react.default.createElement("path", {
    d: "M7,7 C8.93299662,7 10.5,5.43299662 10.5,3.5 C10.5,2.56042226 10.1297687,1.70731668 9.52723369,1.07861098 C8.89017133,0.413878211 7.99341888,0 7,0 C5.06700338,0 3.5,1.56700338 3.5,3.5 C3.5,5.43299662 5.06700338,7 7,7 Z"
  })))));
};

exports.IconArtist = IconArtist;
IconArtist.defaultProps = {
  color: "black"
};
//# sourceMappingURL=IconArtist.js.map