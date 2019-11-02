"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionsRailFragmentContainer = exports.CollectionsRail = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.bind");

var _once2 = _interopRequireDefault(require("lodash/once"));

var _palette = require("@artsy/palette");

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _Helpers = require("../Helpers");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _reactWaypoint = _interopRequireDefault(require("react-waypoint"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _CollectionEntity = require("./CollectionEntity");

var _dec, _dec2, _class, _class2;

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

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: ", "px ", "px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: ", "px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * TODO: Replace Helper Media with palette Media when a/b test closes.
 *
 */
var RailsWrapper = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "CollectionsRail__RailsWrapper",
  componentId: "y5pg0h-0"
})(["width:100%;max-width:1250px;margin:0 auto;flex-direction:column;", ";", ";"], _Helpers.pMedia.xl(_templateObject(), (0, _palette.space)(4)), _Helpers.pMedia.sm(_templateObject2(), (0, _palette.space)(4), (0, _palette.space)(2)));
var CollectionsRail = (_dec = (0, _Analytics.track)(null, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec2 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Impression,
  context_module: Schema.ContextModule.CollectionsRail,
  context_page_owner_type: Schema.OwnerType.Article
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CollectionsRail, _React$Component);

  function CollectionsRail() {
    _classCallCheck(this, CollectionsRail);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollectionsRail).apply(this, arguments));
  }

  _createClass(CollectionsRail, [{
    key: "trackImpression",
    value: function trackImpression() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var collections = this.props.collections;
      return _react.default.createElement(RailsWrapper, {
        pb: 3
      }, _react.default.createElement(_reactWaypoint.default, {
        onEnter: (0, _once2.default)(this.trackImpression.bind(this))
      }), _react.default.createElement(_palette.Sans, {
        size: ["6", "8"]
      }, "Shop works from curated collections"), _react.default.createElement(_palette.Spacer, {
        mb: 3
      }), _react.default.createElement(_palette.Flex, {
        flexWrap: "wrap"
      }, collections.map(function (collection, index) {
        var shouldAddPadding = index % 2 === 0;
        return _react.default.createElement(_palette.Box, {
          width: ["100%", "50%"],
          key: index,
          pr: [0, shouldAddPadding ? 2 : 0]
        }, _react.default.createElement(_CollectionEntity.CollectionEntityFragmentContainer, {
          collection: collection
        }));
      })));
    }
  }]);

  return CollectionsRail;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackImpression", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackImpression"), _class2.prototype)), _class2)) || _class);
exports.CollectionsRail = CollectionsRail;
var CollectionsRailFragmentContainer = (0, _reactRelay.createFragmentContainer)(CollectionsRail, {
  collections: function collections() {
    var node = require("../../__generated__/CollectionsRail_collections.graphql");

    if (node.hash && node.hash !== "35961dd8c6f3b9ed5fff404b9a586026") {
      console.error("The definition of 'CollectionsRail_collections' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/CollectionsRail_collections.graphql");
  }
});
exports.CollectionsRailFragmentContainer = CollectionsRailFragmentContainer;
//# sourceMappingURL=CollectionsRail.js.map