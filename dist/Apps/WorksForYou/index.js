"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorksForYou = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

var _palette = require("@artsy/palette");

var _MarketingHeader = require("./MarketingHeader");

var _Artsy = require("../../Artsy");

var _Analytics = require("../../Artsy/Analytics");

var _SystemQueryRenderer = require("../../Artsy/Relay/SystemQueryRenderer");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _WorksForYouArtistFeed = require("./WorksForYouArtistFeed");

var _WorksForYouFeed = require("./WorksForYouFeed");

var _graphql, _dec, _class, _class2, _temp;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WorksForYou = (_dec = (0, _Analytics.track)(null, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(WorksForYou, _Component);

  function WorksForYou() {
    _classCallCheck(this, WorksForYou);

    return _possibleConstructorReturn(this, _getPrototypeOf(WorksForYou).apply(this, arguments));
  }

  _createClass(WorksForYou, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          artistID = _this$props.artistID,
          forSale = _this$props.forSale;
      var includeSelectedArtist = !!artistID;
      var filter = forSale ? ["IS_FOR_SALE"] : null;
      return _react.default.createElement(_palette.Theme, null, _react.default.createElement(_Artsy.SystemContextConsumer, null, function (_ref) {
        var relayEnvironment = _ref.relayEnvironment,
            user = _ref.user;
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_MarketingHeader.MarketingHeader, null), _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
          environment: relayEnvironment,
          query: _graphql || (_graphql = function _graphql() {
            var node = require("../../__generated__/WorksForYouQuery.graphql");

            if (node.hash && node.hash !== "7eddd92206ae2b3242a4e9c8dee45389") {
              console.error("The definition of 'WorksForYouQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
            }

            return require("../../__generated__/WorksForYouQuery.graphql");
          }),
          variables: {
            artistID: artistID,
            includeSelectedArtist: includeSelectedArtist,
            forSale: forSale,
            filter: filter
          },
          render: function render(_ref2) {
            var props = _ref2.props;

            if (props) {
              return _react.default.createElement(_palette.Box, {
                pt: 3,
                pb: 3
              }, includeSelectedArtist ? _react.default.createElement(_WorksForYouArtistFeed.WorksForYouArtistFeedPaginationContainer, {
                artistID: _this.props.artistID,
                viewer: props.viewer,
                forSale: forSale,
                user: user
              }) : _react.default.createElement(_WorksForYouFeed.WorksForYouFeedPaginationContainer, {
                user: user,
                viewer: props.viewer
              }));
            } else {
              return _react.default.createElement(SpinnerContainer, null, _react.default.createElement(_palette.Spinner, null));
            }
          }
        }));
      }));
    }
  }]);

  return WorksForYou;
}(_react.Component), _defineProperty(_class2, "defaultProps", {
  forSale: true,
  artistID: ""
}), _temp)) || _class);
exports.WorksForYou = WorksForYou;

var SpinnerContainer = _styledComponents.default.div.withConfig({
  displayName: "WorksForYou__SpinnerContainer",
  componentId: "sc-105axjw-0"
})(["width:100%;height:100px;position:relative;"]);
//# sourceMappingURL=index.js.map