"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrevious = usePrevious;

var _react = require("react");

function usePrevious(value) {
  var ref = (0, _react.useRef)(value);
  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
//# sourceMappingURL=usePrevious.js.map