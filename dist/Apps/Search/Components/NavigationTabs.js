"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabCountMap = exports.NavigationTabsFragmentContainer = exports.NavigationTabs = void 0;

require("core-js/modules/es6.array.filter");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es7.object.entries");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.string.trim");

var _palette = require("@artsy/palette");

var _Analytics = require("../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../Artsy/Analytics/Schema"));

var _v = require("../../../Components/v2");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _get = require("../../../Utils/get");

var _dec, _dec2, _class, _class2, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MORE_TABS = ["tag", "city", "feature"];
var TAB_NAME_MAP = {
  artist: "Artists",
  marketing_collection: "Collections",
  PartnerGallery: "Galleries",
  partner_show: "Shows",
  fair: "Fairs",
  PartnerInstitution: "Institutions",
  PartnerInstitutionalSeller: "Institutions",
  gene: "Categories",
  article: "Articles",
  sale: "Auctions"
};
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
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavigationTabs, _React$Component);

  function NavigationTabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavigationTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavigationTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderTab", function (text, to) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return function () {
        var exact = options.exact,
            count = options.count;
        var tabName = text.replace(/[0-9]/g, "").trim();
        return _react.default.createElement(_v.RouteTab, {
          to: to,
          exact: exact,
          onClick: function onClick() {
            _this.trackClick(tabName, to);
          },
          key: to
        }, _react.default.createElement(_palette.Flex, null, text, count != null && _react.default.createElement(_palette.Sans, {
          ml: 0.5,
          size: "3t",
          weight: "regular"
        }, "(", count, ")")));
      }();
    });

    return _this;
  }

  _createClass(NavigationTabs, [{
    key: "trackClick",
    value: function trackClick(tab, destination_path) {// no-op
    }
  }, {
    key: "tabs",
    value: function tabs() {
      var _this2 = this;

      var _this$props = this.props,
          term = _this$props.term,
          artworkCount = _this$props.artworkCount;

      var route = function route(tab) {
        return "/search".concat(tab, "?term=").concat(term);
      };

      var restAggregationCount = 0;
      MORE_TABS.forEach(function (key) {
        return restAggregationCount += (0, _get.get)(aggregationFor(_this2.props, key), function (agg) {
          return agg.count;
        }, 0);
      });
      var tabs = [];
      !!artworkCount && tabs.push(this.renderTab("Artworks", route(""), {
        exact: true,
        count: artworkCount
      }));
      Object.entries(tabCountMap(this.props)).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        tabs.push(_this2.renderTab(key, route("/".concat(key.toLowerCase())), {
          count: value
        }));
      });
      !!restAggregationCount && tabs.push(this.renderTab("More", route("/more"), {
        count: restAggregationCount
      }));
      return tabs;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_palette.Flex, {
        mx: [-2, 0]
      }, _react.default.createElement(_v.TabCarousel, {
        tabs: this.tabs()
      }));
    }
  }]);

  return NavigationTabs;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "trackClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackClick"), _class2.prototype)), _class2)) || _class);
exports.NavigationTabs = NavigationTabs;
var NavigationTabsFragmentContainer = (0, _reactRelay.createFragmentContainer)(NavigationTabs, {
  searchableConnection: function searchableConnection() {
    var node = require("../../../__generated__/NavigationTabs_searchableConnection.graphql");

    if (node.hash && node.hash !== "76f1af5fa568892ae22f4ba4840ff358") {
      console.error("The definition of 'NavigationTabs_searchableConnection' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../__generated__/NavigationTabs_searchableConnection.graphql");
  }
});
exports.NavigationTabsFragmentContainer = NavigationTabsFragmentContainer;

var tabCountMap = function tabCountMap(props) {
  return Object.entries(TAB_NAME_MAP).reduce(function (acc, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        val = _ref6[1];

    var count = (0, _get.get)(aggregationFor(props, key), function (agg) {
      return agg.count;
    }, 0);

    if (!count) {
      return acc;
    }

    if (acc[val]) {
      count += acc[val];
    }

    return _objectSpread({}, acc, _defineProperty({}, val, count));
  }, {});
};

exports.tabCountMap = tabCountMap;

var aggregationFor = function aggregationFor(props, type) {
  var searchableConnection = props.searchableConnection;
  var aggregations = searchableConnection.aggregations;
  var typeAggregation = aggregations.find(function (agg) {
    return agg.slice === "TYPE";
  }).counts;
  return typeAggregation.find(function (agg) {
    return agg.name === type;
  });
};
//# sourceMappingURL=NavigationTabs.js.map