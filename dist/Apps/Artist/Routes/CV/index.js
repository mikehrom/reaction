"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CVRouteFragmentContainer = exports.CVRoute = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _CVItem = require("./CVItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Container = _styledComponents.default.div.withConfig({
  displayName: "CV__Container",
  componentId: "jmwcmq-0"
})([".cvItems:last-child{.cvSeparator{display:none;}}"]);

var CVRoute =
/*#__PURE__*/
function (_Component) {
  _inherits(CVRoute, _Component);

  function CVRoute() {
    _classCallCheck(this, CVRoute);

    return _possibleConstructorReturn(this, _getPrototypeOf(CVRoute).apply(this, arguments));
  }

  _createClass(CVRoute, [{
    key: "render",
    value: function render() {
      var viewer = this.props.viewer;
      return _react.default.createElement(Container, null, _react.default.createElement(_CVItem.CVPaginationContainer, {
        category: "Solo shows",
        artist: viewer.artist_soloShows
      }), _react.default.createElement(_CVItem.CVPaginationContainer, {
        category: "Group shows",
        artist: viewer.artist_groupShows
      }), _react.default.createElement(_CVItem.CVPaginationContainer, {
        category: "Fair booths",
        artist: viewer.artist_fairBooths
      }));
    }
  }]);

  return CVRoute;
}(_react.Component);

exports.CVRoute = CVRoute;
var CVRouteFragmentContainer = (0, _reactRelay.createFragmentContainer)(CVRoute, {
  viewer: function viewer() {
    var node = require("../../../../__generated__/CV_viewer.graphql");

    if (node.hash && node.hash !== "036c65ba9f26e5eba899202fe6b96832") {
      console.error("The definition of 'CV_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/CV_viewer.graphql");
  }
});
exports.CVRouteFragmentContainer = CVRouteFragmentContainer;
//# sourceMappingURL=index.js.map