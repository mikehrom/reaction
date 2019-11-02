"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationTabsFragmentContainer = exports.NavigationTabs = void 0;

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _v = require("../../../Components/v2");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _dec, _dec2, _class, _class2;

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavigationTabs = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.NavigationTabs
}), _dec2 = (0, _Analytics.track)(function (_props, _state, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      tab = _ref2[0],
      destination_path = _ref2[1];

  return {
    action_type: Schema.ActionType.Click,
    subject: tab,
    destination_path: destination_path
  };
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationTabs, _React$Component);

  function NavigationTabs() {
    _classCallCheck(this, NavigationTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavigationTabs).apply(this, arguments));
  }

  _createClass(NavigationTabs, [{
    key: "handleClick",
    value: function handleClick(tab, destination_path) {// no-op
    }
  }, {
    key: "renderTab",
    value: function renderTab(text, to, options) {
      var _this = this;

      var exact = options.exact,
          mediator = options.mediator;
      return _react.default.createElement(_v.RouteTab, {
        to: to,
        exact: exact,
        onClick: function onClick() {
          mediator && mediator.trigger("artist:tabclick", {
            to: to
          });

          _this.handleClick(text, to);
        }
      }, text);
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this$props = this.props,
          _this$props$artist = _this$props.artist,
          id = _this$props$artist.id,
          statuses = _this$props$artist.statuses,
          mediator = _this$props.mediator;

      var route = function route(path) {
        return "/artist/".concat(id).concat(path);
      };

      return _react.default.createElement(_react.default.Fragment, null, this.renderTab("Overview", route(""), {
        exact: true,
        mediator: mediator
      }), statuses.cv && this.renderTab("CV", route("/cv"), {
        mediator: mediator
      }), statuses.articles && this.renderTab("Articles", route("/articles"), {
        mediator: mediator
      }), statuses.shows && this.renderTab("Shows", route("/shows"), {
        mediator: mediator
      }), statuses.auction_lots && this.renderTab("Auction results", route("/auction-results"), {
        mediator: mediator
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Flex, {
        mx: [-2, 0]
      }, _react.default.createElement(_v.RouteTabs, null, this.renderTabs())));
    }
  }]);

  return NavigationTabs;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "handleClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "handleClick"), _class2.prototype)), _class2)) || _class);
exports.NavigationTabs = NavigationTabs;
var NavigationTabsFragmentContainer = (0, _reactRelay.createFragmentContainer)((0, _Artsy.withSystemContext)(NavigationTabs), {
  artist: function artist() {
    var node = require("../../../__generated__/NavigationTabs_artist.graphql");

    if (node.hash && node.hash !== "943c43bf6ae1bb2fec555493cb9191d1") {
      console.error("The definition of 'NavigationTabs_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/NavigationTabs_artist.graphql");
  }
});
exports.NavigationTabsFragmentContainer = NavigationTabsFragmentContainer;
//# sourceMappingURL=NavigationTabs.js.map