"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassificationLink = exports.ArtworkSidebarClassificationFragmentContainer = exports.ArtworkSidebarClassification = void 0;

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

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.function.bind");

var _palette = require("@artsy/palette");

var _Modal = _interopRequireDefault(require("../../../../Components/Modal/Modal"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _reactTracking = _interopRequireDefault(require("react-tracking"));

var _dec, _dec2, _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var ArtworkSidebarClassification = (_dec = (0, _reactTracking.default)(), _dec2 = (0, _reactTracking.default)({
  subject: Schema.Subject.Classification,
  type: Schema.Type.Link,
  context_module: Schema.ContextModule.Sidebar,
  action_type: Schema.ActionType.Click
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkSidebarClassification, _React$Component);

  function ArtworkSidebarClassification() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkSidebarClassification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkSidebarClassification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isModalOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        isModalOpen: false
      });
    });

    return _this;
  }

  _createClass(ArtworkSidebarClassification, [{
    key: "openModal",
    value: function openModal() {
      this.setState({
        isModalOpen: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var artwork = this.props.artwork;

      if (!artwork.attribution_class) {
        return null;
      }

      return _react.default.createElement(ClassificationContainer, null, _react.default.createElement(_Modal.default, {
        onClose: this.closeModal,
        show: this.state.isModalOpen,
        title: "Artwork classifications",
        cta: {
          text: "OK",
          onClick: function onClick() {
            return _this2.closeModal();
          },
          isFixed: false
        }
      }, _react.default.createElement(ClassificationDetails, null)), _react.default.createElement(_palette.Box, {
        color: "black60",
        textAlign: "left"
      }, _react.default.createElement(_palette.Spacer, {
        mt: 2
      }), _react.default.createElement(_palette.Serif, {
        size: "2"
      }, _react.default.createElement(ClassificationLink, {
        onClick: this.openModal.bind(this)
      }, artwork.attribution_class.short_description), ".")));
    }
  }]);

  return ArtworkSidebarClassification;
}(_react.default.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "openModal", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "openModal"), _class2.prototype)), _class2)) || _class);
exports.ArtworkSidebarClassification = ArtworkSidebarClassification;
var ArtworkSidebarClassificationFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkSidebarClassification, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkSidebarClassification_artwork.graphql");

    if (node.hash && node.hash !== "0edd5c2a1b8b93a17d606367fe4c25ae") {
      console.error("The definition of 'ArtworkSidebarClassification_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkSidebarClassification_artwork.graphql");
  }
});
exports.ArtworkSidebarClassificationFragmentContainer = ArtworkSidebarClassificationFragmentContainer;

var ClassificationLink = _styledComponents.default.span.withConfig({
  displayName: "ArtworkSidebarClassification__ClassificationLink",
  componentId: "sc-97loez-0"
})(["cursor:pointer;text-decoration:underline;"]);

exports.ClassificationLink = ClassificationLink;
var ClassificationContainer = _palette.Box;

var ClassificationDetails = function ClassificationDetails() {
  var classificationOptions = [{
    name: "Unique",
    long_description: "One of a kind piece, created by the artist."
  }, {
    name: "Limited edition",
    long_description: ["Original works created in multiple with direct involvement of the artist.", "Generally, less than 150 pieces total."].join(" ")
  }, {
    name: "Made-to-order",
    long_description: "A piece that is made-to-order, taking into account the collector’s preferences."
  }, {
    name: "Reproduction",
    long_description: ["Reproduction of an original work authorized by artist’s studio or estate.", "The artist was not directly involved in production."].join(" ")
  }, {
    name: "Editioned multiple",
    long_description: ["Pieces created in larger limited editions, authorized by the artist’s studio or estate.", "Not produced with direct involvement of the artist."].join(" ")
  }, {
    name: "Non-editioned multiple",
    long_description: ["Works made in unlimited or unknown numbers of copies, authorized by the artist’s studio or estate.", "Not produced with direct involvement of the artist."].join(" ")
  }, {
    name: "Ephemera",
    long_description: ["Items related to the artist, created or manufactured for a specific, limited use.", "This includes exhibition materials, memorabilia, autographs, etc."].join(" ")
  }];
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Box, {
    mt: 1,
    mb: 3
  }, classificationOptions.map(function (option) {
    return _react.default.createElement(_react.default.Fragment, {
      key: option.name
    }, _react.default.createElement(_palette.Serif, {
      size: "3",
      weight: "semibold"
    }, option.name), _react.default.createElement(_palette.Serif, {
      size: "3",
      mb: 2
    }, option.long_description));
  })), _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60",
    mb: 3
  }, "Our partners are responsible for providing accurate classification information for all works."));
};
//# sourceMappingURL=ArtworkSidebarClassification.js.map