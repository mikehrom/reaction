"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledArtworkCaption = exports.ArtworkCaption = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-properties");

require("core-js/modules/es6.object.freeze");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

require("core-js/modules/es6.array.reduce");

var _compact2 = _interopRequireDefault(require("lodash/compact"));

var _palette = require("@artsy/palette");

var _ErrorBoundary = require("../../ErrorBoundary");

var _Helpers = require("../../Helpers");

var _Truncator = require("../../Truncator");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    &.artist-name {\n      margin-bottom: 5px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 10px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ArtworkCaption =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkCaption, _React$Component);

  function ArtworkCaption() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkCaption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkCaption)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "renderPartnerCredit", function () {
      var children = [_this.renderPartner(), _this.renderCredit()];

      var joined = _this.joinParts(children, "renderPartnerCredit", ". ");

      return joined;
    });

    _defineProperty(_assertThisInitialized(_this), "renderFullscreenCaption", function () {
      return _react.default.createElement(StyledFullscreenCaption, {
        size: ["3", "4"],
        weight: "medium"
      }, _react.default.createElement(Line, null, _react.default.createElement(ArtistNames, null, _this.renderArtists())), _react.default.createElement("div", null, _react.default.createElement(Line, null, _this.renderTitleDate()), _react.default.createElement(Line, null, _this.renderPartnerCredit())));
    });

    _defineProperty(_assertThisInitialized(_this), "renderClassicCaption", function () {
      return _react.default.createElement(StyledClassicCaption, {
        color: (0, _palette.color)("black60"),
        size: "2",
        className: "display-artwork__caption"
      }, _react.default.createElement(_Truncator.Truncator, null, _react.default.createElement(ArtistNames, null, _this.renderArtists()), _this.renderTitleDate(), ". ", _this.renderPartner()));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEditorialCaption", function () {
      var _this$props = _this.props,
          color = _this$props.color,
          layout = _this$props.layout,
          sectionLayout = _this$props.sectionLayout;
      return _react.default.createElement(StyledArtworkCaption, {
        size: "3",
        color: color,
        layout: layout,
        sectionLayout: sectionLayout
      }, _react.default.createElement(ArtistNames, null, _this.renderArtists()), _react.default.createElement("div", null, _react.default.createElement(_Truncator.Truncator, null, _this.renderTitleDate()), _react.default.createElement(_Truncator.Truncator, null, _this.renderPartnerCredit())));
    });

    return _this;
  }

  _createClass(ArtworkCaption, [{
    key: "joinParts",
    value: function joinParts(children, key) {
      var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ", ";
      var compacted = (0, _compact2.default)(children);

      if (compacted.length) {
        var reduced = compacted.reduce(function (prev, curr, i) {
          return [prev, _react.default.createElement("span", {
            key: "joinParts-".concat(key, "-").concat(i)
          }, delimiter), curr];
        });
        return reduced;
      } else {
        return [];
      }
    }
  }, {
    key: "joinArtistNames",
    value: function joinArtistNames(names) {
      var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ", ";

      if (names.length === 0) {
        return [];
      }

      return names.slice(1).reduce(function (prev, curr, i) {
        return prev.concat([_react.default.createElement("span", {
          key: "joinArtistNames-".concat(i)
        }, delimiter), curr]);
      }, [names[0]]);
    }
  }, {
    key: "renderArtists",
    value: function renderArtists() {
      var _this2 = this;

      var _this$props$artwork = this.props.artwork,
          artist = _this$props$artwork.artist,
          artists = _this$props$artwork.artists; // Multiple artists

      if (artists && artists.length > 1) {
        var names = artists.map(function (a, i) {
          var artistName = _this2.renderArtistName(a, "renderArtists-".concat(i));

          return artistName;
        });
        var joinedNames = this.joinArtistNames(names);
        return joinedNames; // Single artist
      } else if (artist) {
        var artistName = this.renderArtistName(artist, "renderArtists-single");
        return artistName;
      }
    }
  }, {
    key: "renderArtistName",
    value: function renderArtistName(artist, key) {
      var linked = this.props.linked;
      var name = artist.name,
          slug = artist.slug;
      var createTextLink = linked && slug;

      if (createTextLink) {
        var href = "/artist/".concat(slug);
        return _react.default.createElement(ArtistName, {
          key: "renderArtistName-".concat(key)
        }, _react.default.createElement("a", {
          href: href
        }, name));
      } else {
        return _react.default.createElement("span", {
          key: "renderArtistName-".concat(key),
          className: "name"
        }, name);
      }
    }
  }, {
    key: "renderTitleDate",
    value: function renderTitleDate() {
      var children = [this.renderTitle(), this.renderDate()];
      var titleDate = this.joinParts(children, "renderTitleDate");
      return titleDate;
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props2 = this.props,
          _this$props2$artwork = _this$props2.artwork,
          slug = _this$props2$artwork.slug,
          title = _this$props2$artwork.title,
          linked = _this$props2.linked;

      if (title) {
        if (linked) {
          var href = "/artwork/".concat(slug);
          return _react.default.createElement("span", {
            key: "renderTitle",
            className: "title"
          }, _react.default.createElement("a", {
            href: href
          }, title));
        } else {
          return _react.default.createElement("span", {
            key: "renderTitle",
            className: "title"
          }, title);
        }
      }
    }
  }, {
    key: "renderDate",
    value: function renderDate() {
      var date = this.props.artwork.date;

      if (date && date.length) {
        return _react.default.createElement("span", {
          key: "renderDate",
          className: "date"
        }, date);
      }
    }
  }, {
    key: "renderPartner",
    value: function renderPartner() {
      var _this$props3 = this.props,
          _this$props3$artwork$ = _this$props3.artwork.partner,
          name = _this$props3$artwork$.name,
          slug = _this$props3$artwork$.slug,
          linked = _this$props3.linked;

      if (name) {
        var createTextLink = Boolean(linked && slug);

        if (createTextLink) {
          return _react.default.createElement("a", {
            key: "renderPartner",
            href: "/".concat(slug)
          }, name);
        } else {
          return name;
        }
      }
    }
  }, {
    key: "renderCredit",
    value: function renderCredit() {
      var credit = this.props.artwork.credit;

      if (credit && credit.length) {
        return _react.default.createElement("span", {
          key: "renderCredit",
          className: "credit"
        }, credit);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          layout = _this$props4.layout,
          isFullscreenCaption = _this$props4.isFullscreenCaption;
      return _react.default.createElement(_ErrorBoundary.ErrorBoundary, null, _react.default.createElement("div", null, isFullscreenCaption ? this.renderFullscreenCaption() : layout === "classic" ? this.renderClassicCaption() : this.renderEditorialCaption()));
    }
  }]);

  return ArtworkCaption;
}(_react.default.Component);

exports.ArtworkCaption = ArtworkCaption;

_defineProperty(ArtworkCaption, "defaultProps", {
  color: (0, _palette.color)("black30")
});

var ArtistNames = _styledComponents.default.span.withConfig({
  displayName: "ArtworkCaption__ArtistNames",
  componentId: "t0bcvj-0"
})(["margin-right:30px;"]);

var ArtistName = _styledComponents.default.span.withConfig({
  displayName: "ArtworkCaption__ArtistName",
  componentId: "t0bcvj-1"
})(["white-space:nowrap;"]);

var StyledArtworkCaption = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "ArtworkCaption__StyledArtworkCaption",
  componentId: "t0bcvj-2"
})(["padding:", ";margin-top:10px;display:flex;a{color:", ";text-decoration:none;}.title,.title a{font-style:italic;}", ";"], function (props) {
  return props.sectionLayout === "fillwidth" ? "0 10px;" : "0;";
}, function (props) {
  return props.color;
}, _Helpers.pMedia.xs(_templateObject()));
exports.StyledArtworkCaption = StyledArtworkCaption;
var StyledClassicCaption = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "ArtworkCaption__StyledClassicCaption",
  componentId: "t0bcvj-3"
})(["margin-top:10px;display:block;a{color:", ";text-decoration:none;}", "{margin-right:0;font-weight:bold;&::after{content:\", \";}}.title{font-style:italic;}"], function (props) {
  return props.color;
}, ArtistNames);
var StyledFullscreenCaption = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "ArtworkCaption__StyledFullscreenCaption",
  componentId: "t0bcvj-4"
})(["display:flex;a{color:black;text-decoration:none;}.title,.title a{font-style:italic;}", ";"], _Helpers.pMedia.sm(_templateObject2()));

var Line = _styledComponents.default.div.withConfig({
  displayName: "ArtworkCaption__Line",
  componentId: "t0bcvj-5"
})(["", ";"], _Helpers.pMedia.sm(_templateObject3()));
//# sourceMappingURL=ArtworkCaption.js.map