"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumbList = void 0;

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

require("core-js/modules/es6.array.map");

var _react = _interopRequireWildcard(require("react"));

var _reactHead = require("react-head");

var _sharify = require("sharify");

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

var APP_URL = _sharify.data.APP_URL;

var BreadCrumbList =
/*#__PURE__*/
function (_Component) {
  _inherits(BreadCrumbList, _Component);

  function BreadCrumbList() {
    _classCallCheck(this, BreadCrumbList);

    return _possibleConstructorReturn(this, _getPrototypeOf(BreadCrumbList).apply(this, arguments));
  }

  _createClass(BreadCrumbList, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactHead.Meta, {
        tag: "script",
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [{
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": APP_URL,
                name: "Artsy"
              }
            }].concat(_toConsumableArray(this.props.items.map(function (_ref, index) {
              var path = _ref.path,
                  name = _ref.name;
              return {
                "@type": "ListItem",
                position: index + 2,
                // adding 2 because `position` starts with 1 and there's a top-level item.
                item: {
                  "@id": "".concat(APP_URL).concat(path),
                  name: name
                }
              };
            })))
          })
        }
      });
    }
  }]);

  return BreadCrumbList;
}(_react.Component);

exports.BreadCrumbList = BreadCrumbList;
//# sourceMappingURL=BreadCrumbList.js.map