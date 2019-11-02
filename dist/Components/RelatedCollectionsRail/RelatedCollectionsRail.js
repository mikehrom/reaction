"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RelatedCollectionsRailFragmentContainer = exports.RelatedCollectionsRail = void 0;

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

require("core-js/modules/es6.function.bind");

var _take2 = _interopRequireDefault(require("lodash/take"));

var _once2 = _interopRequireDefault(require("lodash/once"));

var _palette = require("@artsy/palette");

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _Carousel = require("../v2/Carousel");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _reactWaypoint = _interopRequireDefault(require("react-waypoint"));

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _RelatedCollectionEntity = require("./RelatedCollectionEntity");

var _dec, _dec2, _dec3, _class, _class2;

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

var RelatedCollectionsRail = (_dec = (0, _Analytics.track)(null, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec2 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Impression,
  context_module: Schema.ContextModule.CollectionsRail,
  context_page_owner_type: Schema.OwnerType.Collection
}), _dec3 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Click,
  context_module: Schema.ContextModule.CollectionsRail,
  context_page_owner_type: Schema.OwnerType.Collection,
  type: Schema.Type.Button,
  subject: Schema.Subject.ClickedNextButton
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RelatedCollectionsRail, _React$Component);

  function RelatedCollectionsRail() {
    _classCallCheck(this, RelatedCollectionsRail);

    return _possibleConstructorReturn(this, _getPrototypeOf(RelatedCollectionsRail).apply(this, arguments));
  }

  _createClass(RelatedCollectionsRail, [{
    key: "trackImpression",
    value: function trackImpression() {// noop
    }
  }, {
    key: "trackCarouselNav",
    value: function trackCarouselNav() {// noop
    }
  }, {
    key: "render",
    value: function render() {
      var collections = this.props.collections;
      var title = this.props.title;

      if (collections.length > 3) {
        return _react.default.createElement(_palette.Box, null, _react.default.createElement(_reactWaypoint.default, {
          onEnter: (0, _once2.default)(this.trackImpression.bind(this))
        }), _react.default.createElement(_palette.Serif, {
          size: "8",
          color: "black100"
        }, "More like ", title), _react.default.createElement(_palette.Spacer, {
          pb: 4
        }), _react.default.createElement(_Carousel.Carousel, {
          height: "200px",
          options: {
            groupCells: _sharify.data.IS_MOBILE ? 1 : 4,
            cellAlign: "left",
            contain: true,
            wrapAround: _sharify.data.IS_MOBILE ? true : false,
            pageDots: false,
            draggable: _sharify.data.IS_MOBILE ? true : false
          },
          onArrowClick: this.trackCarouselNav.bind(this),
          data: (0, _take2.default)(collections, 16),
          render: function render(slide) {
            return _react.default.createElement(_RelatedCollectionEntity.RelatedCollectionEntityFragmentContainer, {
              collection: slide
            });
          },
          renderLeftArrow: function renderLeftArrow(_ref) {
            var Arrow = _ref.Arrow;
            return _react.default.createElement(ArrowContainer, null, _react.default.createElement(Arrow, null));
          },
          renderRightArrow: function renderRightArrow(_ref2) {
            var Arrow = _ref2.Arrow;
            return _react.default.createElement(ArrowContainer, null, collections.length > 4 && _react.default.createElement(Arrow, null));
          }
        }));
      } else {
        return null;
      }
    }
  }]);

  return RelatedCollectionsRail;
}(_react.default.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackImpression", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackImpression"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "trackCarouselNav", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "trackCarouselNav"), _class2.prototype)), _class2)) || _class);
exports.RelatedCollectionsRail = RelatedCollectionsRail;
var ArrowContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "RelatedCollectionsRail__ArrowContainer",
  componentId: "sc-16fxhan-0"
})(["align-self:flex-start;", "{height:60%;}"], _Carousel.ArrowButton);
var RelatedCollectionsRailFragmentContainer = (0, _reactRelay.createFragmentContainer)(RelatedCollectionsRail, {
  collections: function collections() {
    var node = require("../../__generated__/RelatedCollectionsRail_collections.graphql");

    if (node.hash && node.hash !== "f64166e45d9b668bf3f49d0a9f334650") {
      console.error("The definition of 'RelatedCollectionsRail_collections' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/RelatedCollectionsRail_collections.graphql");
  }
});
exports.RelatedCollectionsRailFragmentContainer = RelatedCollectionsRailFragmentContainer;
//# sourceMappingURL=RelatedCollectionsRail.js.map