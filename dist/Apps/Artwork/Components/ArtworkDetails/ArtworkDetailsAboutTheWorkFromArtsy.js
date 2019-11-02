"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtworkDetailsAboutTheWorkFromArtsyFragmentContainer = exports.ArtworkDetailsAboutTheWorkFromArtsy = exports.READ_MORE_MAX_CHARS = void 0;

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

var _palette = require("@artsy/palette");

var _react = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _Responsive = require("../../../../Utils/Responsive");

var _Analytics = require("../../../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../../../Artsy/Analytics/Schema"));

var _dec, _dec2, _class, _class2;

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

var READ_MORE_MAX_CHARS = {
  xs: 100,
  default: 320
};
exports.READ_MORE_MAX_CHARS = READ_MORE_MAX_CHARS;
var ArtworkDetailsAboutTheWorkFromArtsy = (_dec = (0, _Analytics.track)({
  context_module: Schema.ContextModule.AboutTheWork
}), _dec2 = (0, _Analytics.track)({
  action_type: Schema.ActionType.Click,
  flow: Schema.Flow.ArtworkAboutTheWork,
  subject: Schema.Subject.ReadMore,
  type: Schema.Type.Button
}), _dec(_class = (_class2 =
/*#__PURE__*/
function (_Component) {
  _inherits(ArtworkDetailsAboutTheWorkFromArtsy, _Component);

  function ArtworkDetailsAboutTheWorkFromArtsy() {
    _classCallCheck(this, ArtworkDetailsAboutTheWorkFromArtsy);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtworkDetailsAboutTheWorkFromArtsy).apply(this, arguments));
  }

  _createClass(ArtworkDetailsAboutTheWorkFromArtsy, [{
    key: "trackReadMoreClick",
    value: function trackReadMoreClick() {// noop
    }
  }, {
    key: "renderReadMore",
    value: function renderReadMore(breakpoint) {
      var description = this.props.artwork.description;
      var xs = breakpoint === "xs";
      var maxChars = xs ? READ_MORE_MAX_CHARS.xs : READ_MORE_MAX_CHARS.default;
      return _react.default.createElement(_palette.ReadMore, {
        maxChars: maxChars,
        content: description,
        onReadMoreClicked: this.trackReadMoreClick.bind(this)
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.artwork.description) {
        return null;
      }

      return _react.default.createElement(_palette.Box, {
        pb: 2
      }, _react.default.createElement(_palette.Serif, {
        size: "3"
      }, _react.default.createElement(_Responsive.Media, {
        at: "xs"
      }, this.renderReadMore("xs")), _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, this.renderReadMore())));
    }
  }]);

  return ArtworkDetailsAboutTheWorkFromArtsy;
}(_react.Component), (_applyDecoratedDescriptor(_class2.prototype, "trackReadMoreClick", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackReadMoreClick"), _class2.prototype)), _class2)) || _class);
exports.ArtworkDetailsAboutTheWorkFromArtsy = ArtworkDetailsAboutTheWorkFromArtsy;
var ArtworkDetailsAboutTheWorkFromArtsyFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtworkDetailsAboutTheWorkFromArtsy, {
  artwork: function artwork() {
    var node = require("../../../../__generated__/ArtworkDetailsAboutTheWorkFromArtsy_artwork.graphql");

    if (node.hash && node.hash !== "621e4eaa61c267369ccc26d7d14d9ef3") {
      console.error("The definition of 'ArtworkDetailsAboutTheWorkFromArtsy_artwork' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../__generated__/ArtworkDetailsAboutTheWorkFromArtsy_artwork.graphql");
  }
});
exports.ArtworkDetailsAboutTheWorkFromArtsyFragmentContainer = ArtworkDetailsAboutTheWorkFromArtsyFragmentContainer;
//# sourceMappingURL=ArtworkDetailsAboutTheWorkFromArtsy.js.map