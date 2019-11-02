"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GenesFragmentContainer = exports.Genes = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

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

var GeneFamily = _styledComponents.default.div.withConfig({
  displayName: "Genes__GeneFamily",
  componentId: "sc-18gtb9u-0"
})([""]);

var GeneLink = _styledComponents.default.a.withConfig({
  displayName: "Genes__GeneLink",
  componentId: "sc-18gtb9u-1"
})(["display:inline-block;", ";"], _styledSystem.space);

var Genes =
/*#__PURE__*/
function (_Component) {
  _inherits(Genes, _Component);

  function Genes() {
    _classCallCheck(this, Genes);

    return _possibleConstructorReturn(this, _getPrototypeOf(Genes).apply(this, arguments));
  }

  _createClass(Genes, [{
    key: "render",
    value: function render() {
      var related = this.props.artist.related;
      var genes = related.genes;

      if (genes.edges.length === 0) {
        return null;
      }

      return _react.default.createElement(GeneFamily, null, _react.default.createElement(_palette.Sans, {
        size: "2",
        weight: "medium"
      }, "Related Categories"), _react.default.createElement(_palette.Spacer, {
        mb: 1
      }), genes.edges.map(function (_ref, index, list) {
        var gene = _ref.node;
        var geneDivider = index < list.length - 1 ? "," : "";
        var href = _sharify.data.APP_URL + gene.href;
        return _react.default.createElement(_palette.Serif, {
          size: "3t",
          display: "inline-block",
          key: index,
          mr: 0.5
        }, _react.default.createElement(GeneLink, {
          href: href,
          className: "noUnderline"
        }, gene.name, geneDivider));
      }));
    }
  }]);

  return Genes;
}(_react.Component);

exports.Genes = Genes;
var GenesFragmentContainer = (0, _reactRelay.createFragmentContainer)(Genes, {
  artist: function artist() {
    var node = require("../../../../../__generated__/Genes_artist.graphql");

    if (node.hash && node.hash !== "77c969718be8a858b2f72009ac05dbc7") {
      console.error("The definition of 'Genes_artist' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../__generated__/Genes_artist.graphql");
  }
});
exports.GenesFragmentContainer = GenesFragmentContainer;
//# sourceMappingURL=Genes.js.map