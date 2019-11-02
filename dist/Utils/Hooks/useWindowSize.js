"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useWindowSize = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _react = require("react");

var _viewport = require("../viewport");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useWindowSize = function useWindowSize() {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0
    };
  }

  var _useState = (0, _react.useState)({
    width: 0,
    height: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  (0, _react.useLayoutEffect)(function () {
    function resize() {
      var _getViewportDimension = (0, _viewport.getViewportDimensions)(),
          width = _getViewportDimension.width,
          height = _getViewportDimension.height;

      setSize({
        width: width,
        height: height
      });
    }

    window.addEventListener("resize", resize);
    resize();
    return function () {
      return window.removeEventListener("resize", resize);
    };
  }, []);
  return size;
};

exports.useWindowSize = useWindowSize;
//# sourceMappingURL=useWindowSize.js.map