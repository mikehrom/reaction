"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTracking = void 0;

var _reactTracking = require("react-tracking");

// TODO: Update @types/react-tracking with an interface rather than aliasing
var useTracking = function useTracking() {
  return (0, _reactTracking.useTracking)();
};

exports.useTracking = useTracking;
//# sourceMappingURL=useTracking.js.map