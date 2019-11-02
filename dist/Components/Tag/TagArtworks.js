"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TagArtworks = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.sort");

require("core-js/modules/es6.array.find");

require("core-js/modules/es6.array.map");

var React = _interopRequireWildcard(require("react"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Dropdown = _interopRequireDefault(require("../ArtworkFilter/Dropdown"));

var _ForSaleCheckbox = _interopRequireDefault(require("../ArtworkFilter/ForSaleCheckbox"));

var _Headline = _interopRequireDefault(require("../ArtworkFilter/Headline"));

var _TotalCount = _interopRequireDefault(require("../ArtworkFilter/TotalCount"));

var _BorderedPulldown = _interopRequireDefault(require("../BorderedPulldown"));

var _TagArtworksContent = _interopRequireDefault(require("./TagArtworksContent"));

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

var FilterBar = _styledComponents.default.div.withConfig({
  displayName: "TagArtworks__FilterBar",
  componentId: "sc-2b8s28-0"
})(["vertical-align:middle;text-align:center;> div{display:inline-block;}"]);

var SubFilterBar = _styledComponents.default.div.withConfig({
  displayName: "TagArtworks__SubFilterBar",
  componentId: "sc-2b8s28-1"
})(["display:flex;justify-content:space-between;padding:40px 0 20px;align-items:center;"]);

var TagArtworks =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TagArtworks, _React$Component);

  function TagArtworks() {
    _classCallCheck(this, TagArtworks);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagArtworks).apply(this, arguments));
  }

  _createClass(TagArtworks, [{
    key: "renderDropdown",
    value: function renderDropdown() {
      var _this = this;

      return this.props.tag.filtered_artworks.aggregations.map(function (aggregation) {
        return React.createElement(_Dropdown.default, {
          aggregation: aggregation,
          key: aggregation.slice,
          selected: aggregation.slice && _this.props[aggregation.slice.toLowerCase()],
          onSelected: _this.props.onDropdownSelected
        });
      });
    }
  }, {
    key: "renderForSaleToggle",
    value: function renderForSaleToggle() {
      return React.createElement(_ForSaleCheckbox.default, {
        checked: this.props.for_sale,
        onChange: this.props.onForSaleToggleSelected
      });
    }
  }, {
    key: "renderArtworks",
    value: function renderArtworks() {
      var _this2 = this;

      var pulldownOptions = [{
        val: "-partner_updated_at",
        name: "Recently Updated"
      }, {
        val: "-year",
        name: "Artwork Year (desc.)"
      }, {
        val: "year",
        name: "Artwork Year (asc.)"
      }];
      var selectedSort = pulldownOptions.find(function (sort) {
        return sort.val === _this2.props.sort;
      });
      return React.createElement("div", null, React.createElement(SubFilterBar, null, React.createElement("div", {
        style: {
          lineHeight: "1.8em"
        }
      }, React.createElement(_Headline.default, {
        medium: this.props.medium,
        price_range: this.props.price_range,
        dimension_range: this.props.dimension_range,
        for_sale: this.props.for_sale,
        facet: this.props.tag.filtered_artworks.facet,
        aggregations: this.props.tag.filtered_artworks.aggregations
      }), React.createElement(_TotalCount.default, {
        filter_artworks: this.props.tag.filtered_artworks
      })), React.createElement(_BorderedPulldown.default, {
        defaultValue: "Recently Updated",
        selectedName: selectedSort && selectedSort.name,
        options: pulldownOptions,
        onChange: this.props.onSortSelected
      })), React.createElement(_TagArtworksContent.default, {
        tagID: this.props.tag.id,
        filtered_artworks: this.props.tag.filtered_artworks
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement(FilterBar, null, this.renderForSaleToggle(), this.renderDropdown()), this.renderArtworks());
    }
  }]);

  return TagArtworks;
}(React.Component);

exports.TagArtworks = TagArtworks;

var _default = (0, _reactRelay.createFragmentContainer)(TagArtworks, {
  tag: function tag() {
    var node = require("../../__generated__/TagArtworks_tag.graphql");

    if (node.hash && node.hash !== "e338dce3de7771de5f87d5d3605e6c19") {
      console.error("The definition of 'TagArtworks_tag' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/TagArtworks_tag.graphql");
  }
});

exports.default = _default;
//# sourceMappingURL=TagArtworks.js.map