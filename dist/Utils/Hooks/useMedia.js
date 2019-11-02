"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMedia = useMedia;
exports.useMatchMedia = useMatchMedia;

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es6.array.reduce");

var _palette = require("@artsy/palette");

var _react = require("react");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Returns an object containing keys representing each media query as they're
 * defined in Palette's theme file, and if they're currently matching.
 *
 * NOTE: useMedia is not meant to be run on the server.
 *
 * See: https://github.com/artsy/palette/blob/master/packages/palette/src/Theme.tsx#L84-L92
 *
 * @example

    import { useMedia } from 'Utils/Hooks/useMedia'

    const App = () => {
      const { xs, sm, md, lg, xl } = useMedia()

      return (
        <div>Mobile view? {xs || sm}</div>
      )
    }
 */
function useMedia() {
  var matches = Object.entries(_palette.themeProps.mediaQueries).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return _objectSpread({}, acc, _defineProperty({}, key, useMatchMedia(value)));
  }, {});
  return matches;
}
/**
 * Checks to see if the browser matches a particular media query
 *
 * Thanks! https://github.com/olistic/react-use-media/
 *
 * @example

    import { themeProps } from '@artsy/palette'
    import { useMedia } from 'Utils/Hooks/useMedia'

    const App = () => {
      const isMobile = useMedia(themeProps.mediaQueries.sm)

      return (
        <div>Mobile view? {isMobile}</div>
      )
    }
 */


function useMatchMedia(mediaQueryString) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$initialMatches = _ref3.initialMatches,
      initialMatches = _ref3$initialMatches === void 0 ? null : _ref3$initialMatches;

  var _useState = (0, _react.useState)(initialMatches),
      _useState2 = _slicedToArray(_useState, 2),
      matches = _useState2[0],
      setMatches = _useState2[1]; // Exit if we're in a server-like environment


  var isServer = typeof window === "undefined";

  if (isServer) {
    return matches;
  }

  (0, _react.useEffect)(function () {
    var mediaQueryList = window.matchMedia(mediaQueryString);
    setMatches(mediaQueryList.matches);

    var handleChange = function handleChange(event) {
      return setMatches(event.matches);
    };

    mediaQueryList.addListener(handleChange);
    return function () {
      mediaQueryList.removeListener(handleChange);
    };
  }, [mediaQueryString]);
  return matches;
}
//# sourceMappingURL=useMedia.js.map