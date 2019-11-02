"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollectionsGrid = void 0;

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

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.name");

var _react = _interopRequireWildcard(require("react"));

var _underscore = require("underscore.string");

var _resizer = require("../../../../../Utils/resizer");

var _Responsive = require("../../../../../Utils/Responsive");

var _palette = require("@artsy/palette");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var CollectionsGrid =
/*#__PURE__*/
function (_Component) {
  _inherits(CollectionsGrid, _Component);

  function CollectionsGrid() {
    _classCallCheck(this, CollectionsGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(CollectionsGrid).apply(this, arguments));
  }

  _createClass(CollectionsGrid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          collections = _this$props.collections,
          name = _this$props.name,
          router = _this$props.router;
      var hasShortRow = collections.length % 3 !== 0; // Preserve left align

      return _react.default.createElement(_palette.Box, {
        pb: 80
      }, _react.default.createElement(CollectionsGridAnchor, {
        id: name && (0, _underscore.slugify)(name)
      }), _react.default.createElement(_palette.Sans, {
        size: "3",
        weight: "medium",
        pb: 15
      }, name), _react.default.createElement(_palette.Flex, {
        flexWrap: "wrap",
        justifyContent: "space-between"
      }, _toConsumableArray(collections) // needs to create a new array since the sort function modifies the array.
      .sort(function (a, b) {
        return a.title.localeCompare(b.title);
      }).map(function (collection, index) {
        var imageUrl = collection.headerImage && (0, _resizer.crop)(collection.headerImage, {
          width: 50,
          height: 50
        });
        return _react.default.createElement(_palette.Flex, {
          width: ["100%", "30%"],
          flexDirection: "column",
          key: collection.slug + index
        }, _react.default.createElement(_Responsive.Media, {
          at: "xs"
        }, index === 0 && _react.default.createElement(_palette.Separator, null)), _react.default.createElement(_Responsive.Media, {
          greaterThan: "xs"
        }, index < 3 && _react.default.createElement(_palette.Separator, null)), _react.default.createElement(_palette.EntityHeader, {
          py: 2,
          href: "/collection/".concat(collection.slug),
          imageUrl: imageUrl || undefined,
          name: collection.title,
          onClick: function onClick(event) {
            event.preventDefault();
            router.push("/collection/".concat(collection.slug));
          }
        }), _react.default.createElement(_palette.Separator, null));
      }), hasShortRow && _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, function (_, renderChildren) {
        return renderChildren && _react.default.createElement(_palette.Spacer, {
          width: ["100%", "30%"]
        });
      })));
    }
  }]);

  return CollectionsGrid;
}(_react.Component);

exports.CollectionsGrid = CollectionsGrid;

var CollectionsGridAnchor = _styledComponents.default.a.withConfig({
  displayName: "CollectionsGrid__CollectionsGridAnchor",
  componentId: "o6upc6-0"
})(["display:block;position:relative;top:-90px;visibility:hidden;"]);
//# sourceMappingURL=CollectionsGrid.js.map