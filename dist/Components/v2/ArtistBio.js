"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArtistBioFragmentContainer = exports.ArtistBio = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

var ArtistBio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtistBio, _React$Component);

  function ArtistBio() {
    _classCallCheck(this, ArtistBio);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArtistBio).apply(this, arguments));
  }

  _createClass(ArtistBio, [{
    key: "render",
    value: function render() {
      var bio = this.props.bio;
      return _react.default.createElement(_palette.Serif, {
        size: "3"
      }, _react.default.createElement(BioSpan, {
        dangerouslySetInnerHTML: {
          __html: bio.biography_blurb.text
        }
      }));
    }
  }]);

  return ArtistBio;
}(_react.default.Component);

exports.ArtistBio = ArtistBio;
var ArtistBioFragmentContainer = (0, _reactRelay.createFragmentContainer)(ArtistBio, {
  bio: function bio() {
    var node = require("../../__generated__/ArtistBio_bio.graphql");

    if (node.hash && node.hash !== "e736551112eb378b9d7e96216c0fcb23") {
      console.error("The definition of 'ArtistBio_bio' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/ArtistBio_bio.graphql");
  }
});
/*
  Using dangerouslySetInnerHTML in our span adds an inline <p>.
  Here we make sure the inline <p> is formatted properly.
*/

exports.ArtistBioFragmentContainer = ArtistBioFragmentContainer;

var BioSpan = _styledComponents.default.span.withConfig({
  displayName: "ArtistBio__BioSpan",
  componentId: "sc-1sis93i-0"
})(["> *{margin-block-start:0;margin-block-end:0;padding-bottom:1em;}> *:last-child{display:inline;}"]);
//# sourceMappingURL=ArtistBio.js.map