"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionsAppFragmentContainer = exports.CollectionsApp = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _AppContainer = require("../../../Components/AppContainer");

var _FrameWithRecentlyViewed = require("../../../../Components/FrameWithRecentlyViewed");

var _Seo = require("../../../../Components/v2/Seo");

var _found = require("found");

var _react = _interopRequireWildcard(require("react"));

var _reactHead = require("react-head");

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _CollectionsGrid = require("./Components/CollectionsGrid");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var META_DESCRIPTION = "Discover collections of art curated by Artsy Specialists. From iconic artist series to trending design, shop " + "collections on the world's largest online art marketplace.";
var isServer = typeof window === "undefined";

var CollectionsApp =
/*#__PURE__*/
function (_Component) {
  _inherits(CollectionsApp, _Component);

  function CollectionsApp() {
    _classCallCheck(this, CollectionsApp);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollectionsApp).apply(this, arguments));
  }

  _createClass(CollectionsApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          categories = _this$props.categories,
          router = _this$props.router;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHead.Title, null, "Collections | Artsy"), _react.default.createElement(_reactHead.Meta, {
        property: "og:url",
        content: "".concat(_sharify.data.APP_URL, "/collections")
      }), _react.default.createElement(_reactHead.Meta, {
        name: "description",
        content: META_DESCRIPTION
      }), _react.default.createElement(_reactHead.Meta, {
        property: "og:description",
        content: META_DESCRIPTION
      }), _react.default.createElement(_reactHead.Meta, {
        property: "twitter:description",
        content: META_DESCRIPTION
      }), _react.default.createElement(_Seo.BreadCrumbList, {
        items: [{
          path: "/collections",
          name: "Collections"
        }]
      }), _react.default.createElement(_AppContainer.AppContainer, null, _react.default.createElement(_FrameWithRecentlyViewed.FrameWithRecentlyViewed, null, _react.default.createElement(_palette.Flex, {
        mt: 3,
        mb: 4,
        justifyContent: "space-between",
        alignItems: "flex-end"
      }, _react.default.createElement(_palette.Serif, {
        size: "8"
      }, _react.default.createElement("h1", null, "Collections")), _react.default.createElement(_palette.Box, {
        pb: 0.3
      }, _react.default.createElement(_palette.Sans, {
        size: "3",
        weight: "medium"
      }, _react.default.createElement(_found.Link, {
        to: "/collect"
      }, "View works")))), categories && _toConsumableArray(categories) // creates a new array since the sort function modifies the array.
      .sort(function (a, b) {
        return a.name.localeCompare(b.name);
      }).map(function (category, index) {
        return _react.default.createElement(_palette.Box, {
          key: category.name + index
        }, _react.default.createElement(CategoryItem, {
          category: category,
          router: router
        }));
      }))));
    }
  }]);

  return CollectionsApp;
}(_react.Component);

exports.CollectionsApp = CollectionsApp;

var CategoryItem = function CategoryItem(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showAll = _useState2[0],
      toggleShowAll = _useState2[1];

  var category = props.category,
      router = props.router;
  var collections = category.collections;
  var truncatedCollections = collections.slice(0, 21);
  var displayableCollections = showAll || isServer ? collections : truncatedCollections;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_CollectionsGrid.CollectionsGrid, {
    name: category.name,
    collections: displayableCollections,
    router: router
  }), !(isServer || showAll) && _react.default.createElement(_palette.Box, {
    mb: 6,
    width: "100%",
    style: {
      textAlign: "center"
    }
  }, _react.default.createElement(_palette.Button, {
    size: "medium",
    variant: "secondaryOutline",
    onClick: function onClick() {
      return toggleShowAll(true);
    }
  }, "More in ", category.name)));
};

var CollectionsAppFragmentContainer = (0, _reactRelay.createFragmentContainer)(CollectionsApp, {
  categories: function categories() {
    var node = require("../../../../__generated__/Collections_categories.graphql");

    if (node.hash && node.hash !== "66eb3896886d261bafe79247912bf6b9") {
      console.error("The definition of 'Collections_categories' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/Collections_categories.graphql");
  }
});
exports.CollectionsAppFragmentContainer = CollectionsAppFragmentContainer;
//# sourceMappingURL=index.js.map