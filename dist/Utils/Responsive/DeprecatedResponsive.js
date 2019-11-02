"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsiveProvider = exports.Responsive = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

var _DynamicResponsive = require("@artsy/react-responsive-media/dist/DynamicResponsive");

var _react = _interopRequireDefault(require("react"));

var sharify = _interopRequireWildcard(require("sharify"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ResponsiveComponents = (0, _DynamicResponsive.createResponsiveComponents)();
ResponsiveComponents.Consumer.displayName = "DeprecatedResponsive.Context";
ResponsiveComponents.Provider.displayName = "DeprecatedResponsive.Context";

var Responsive =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Responsive, _React$Component);

  function Responsive() {
    _classCallCheck(this, Responsive);

    return _possibleConstructorReturn(this, _getPrototypeOf(Responsive).apply(this, arguments));
  }

  _createClass(Responsive, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // TODO: We should look into making React’s __DEV__ available and have
      //       webpack completely compile these away.
      if (sharify.data.NODE_ENV !== "production" && typeof jest === "undefined") {
        var ownerName;

        try {
          var owner = this._reactInternalFiber._debugOwner.type;
          ownerName = owner.displayName || owner.name;
        } catch (err) {// no-op
        }

        console.warn("[Responsive] The Responsive component has been deprecated in " + "favour of the Media component.".concat(ownerName ? " It is being used in the ".concat(ownerName, " component.") : ""));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(ResponsiveComponents.Consumer, this.props);
    }
  }]);

  return Responsive;
}(_react.default.Component); // TODO Once we consider the deprecation period of the previous ‘beakpoint’
//      centric API to be over, we can replace the wrapper with just this line.
//
// export const ResponsiveProvider = Responsive.Provider


exports.Responsive = Responsive;

_defineProperty(Responsive, "displayName", "DeprecatedResponsive");

var ResponsiveProvider = function ResponsiveProvider(props) {
  var _ref = props,
      initialMatchingMediaQueries = _ref.initialMatchingMediaQueries,
      mediaQueries = _ref.mediaQueries;
  var _ref2 = props,
      initialBreakpoint = _ref2.initialBreakpoint,
      breakpoints = _ref2.breakpoints;

  if (initialBreakpoint) {
    console.warn("[Responsive] The usage of `initialBreakpoint` is deprecated, use " + "`initialMatchingMediaQueries` instead.");
  }

  if (breakpoints) {
    console.warn("[Responsive] The usage of `breakpoints` is deprecated, use " + "`mediaQueries` instead.");
  } else if (!mediaQueries) {
    throw new Error("[Responsive] If no `breakpoints` are specified, then `mediaQueries` " + "is required.");
  }

  return _react.default.createElement(ResponsiveComponents.Provider, {
    mediaQueries: mediaQueries || breakpoints,
    initialMatchingMediaQueries: initialMatchingMediaQueries || initialBreakpoint && [initialBreakpoint]
  }, props.children);
};

exports.ResponsiveProvider = ResponsiveProvider;
ResponsiveProvider.displayName = "DeprecatedResponsiveProvider";
//# sourceMappingURL=DeprecatedResponsive.js.map