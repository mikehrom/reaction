"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VanguardVideoHeader = void 0;

require("core-js/modules/es6.object.assign");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var VanguardVideoHeader = function VanguardVideoHeader(props) {
  return _react.default.createElement(SubseriesWrapper, null, _react.default.createElement(SubseriesSVGWrapper, null, _react.default.createElement("svg", _extends({
    viewBox: "0 0 1600 900",
    xmlns: "http://www.w3.org/2000/svg",
    fill: (0, _palette.color)("white100"),
    width: "100vw"
  }, props), getSVGPath(props.svg)), _react.default.createElement(VanguardSubseriesVideoWrapper, null, _react.default.createElement(VanguardSubseriesVideo, {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    controls: false,
    src: props.url
  }))));
};

exports.VanguardVideoHeader = VanguardVideoHeader;

var VanguardSubseriesVideo = _styledComponents.default.video.withConfig({
  displayName: "VideoHeader__VanguardSubseriesVideo",
  componentId: "sc-1cwxsq6-0"
})(["max-height:calc(100vw * 0.56);"]);

var SubseriesWrapper = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "VideoHeader__SubseriesWrapper",
  componentId: "sc-1cwxsq6-1"
})(["flex-direction:row;position:relative;z-index:-2;height:calc(100vw * 0.56);"]);
var SubseriesSVGWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "VideoHeader__SubseriesSVGWrapper",
  componentId: "sc-1cwxsq6-2"
})(["position:absolute;overflow:hidden;height:100%;width:100%;background:", ";z-index:-10;"], (0, _palette.color)("black100"));
var VanguardSubseriesVideoWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "VideoHeader__VanguardSubseriesVideoWrapper",
  componentId: "sc-1cwxsq6-3"
})(["z-index:-10;position:absolute;top:0;"]);

var getSVGPath = function getSVGPath(svg) {
  switch (svg) {
    case "emerging":
      return _react.default.createElement("path", {
        d: "M0,0V900H1600V0ZM1489.83,896.43,146.61,805.5,47.2,182.84,320,4.17l874.07,86,360.06,148Z"
      });

    case "getting-their-due":
      return _react.default.createElement("path", {
        d: "M0,0V900H1600V0ZM113.08,888.27,65.88,87.92,1488.94,4h0l47.19,800.35Z"
      });

    case "newly-established":
      return _react.default.createElement("path", {
        d: "M0,0V900H1600V0ZM1573.5,422.28c-9.83,62.06-6.47,128.19-29,187.64a281.24,281.24,0,0,1-49.61,82.79l-32.41,30.52c-33.51,26.21-58,60-96.63,77.77-57.73,25.72-133.38,57.1-195.88,64q-60.6,4.66-121.34,6.67Q972.31,878,896.05,884.88c-65.83,5-132.21,10.43-198.11,3.31-61.12-6.6-122.78-19.64-181.87-36.52C468,837.92,420.34,823,377.46,796.45q-40.68-28.23-81.08-56.86-35-24-70.7-47c-23.26-14.9-50.81-27.78-71-47.18-18.86-18.11-34.77-73-46.11-96.52q-5.28-13.2-10.55-26.38-12-34-24.84-67.8a353.55,353.55,0,0,1-17.6-101.19c-1.58-51.13,3-103.52,8.78-154.3,2.28-19.87,5-40.17,10.39-59.47,4.08-14.44,11.47-26.14,17.48-39.24.82-1.78,1.62-3.59,2.38-5.44,0,0,2.19-8.1,9.29-10.32a632,632,0,0,1,95.48-21.84c56.68-8.43,113.86-9.53,171-12.3q72.94-2.7,145.49-11.07Q583.17,30.78,650.6,23c51.28-5.2,103.25-9.27,154.82-9.33,56-.05,111.88,5.93,167.63,10.71,67.17,5.76,134.18,35.8,201.61,37.05,23.86,0,47.71-13.15,71.56-12.31,25.79,1.88,51-4.07,75.48,4.34,40.51,12.77,80.73,30.95,117.85,51.75,22.73,12.74,43.63,26.54,60.68,46.63,13.57,16,24.59,34.74,35.61,52.58q11.06,18.33,21.74,36.87a199.55,199.55,0,0,1,20.92,42.12C1593.22,329.23,1580.8,376.41,1573.5,422.28Z"
      });

    default:
      return _react.default.createElement("path", {
        d: "M0,0V900H1600V0ZM1117.25,859.16c-321.9,34.84-538.72,61.19-699.67-12s-244.75-34.58-297.95-94.44S61.14,621.06,47.84,566.53-2.66,374.1,61.31,242.72c40.62-83.44,50.38-148.4,146.69-183,72.79-26.07,208.29,0,296.08,4,35.91,1.64,149-21.28,207.51-39.9s176.91-16,248.74,0,186.22-1.33,262,1.33,275.35,5.32,283.33,234.11-20,235.44,0,359.14S1439.15,824.32,1117.25,859.16Z"
      });
  }
};
//# sourceMappingURL=VideoHeader.js.map