"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSectionedArtworks = createSectionedArtworks;
exports.default = exports.ArtworkGrid = exports.ArtworkGridContainer = void 0;

require("core-js/modules/es6.object.assign");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.number.constructor");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.array.map");

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _palette = require("@artsy/palette");

var _ArtworkGridEmptyState = require("./ArtworkGridEmptyState");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRelay = require("react-relay");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../Utils/Responsive");

var _GridItem = _interopRequireDefault(require("../Artwork/GridItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ArtworkGridContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ArtworkGridContainer, _React$Component);

  function ArtworkGridContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ArtworkGridContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ArtworkGridContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      interval: null,
      loading: false
    });

    _defineProperty(_assertThisInitialized(_this), "columnBreakpointProps", (0, _memoizeOne.default)(function (columnCount) {
      return (0, _Responsive.valuesWithBreakpointProps)(columnCount);
    }, _isEqual2.default));

    _defineProperty(_assertThisInitialized(_this), "sectionedArtworksForAllBreakpoints", (0, _memoizeOne.default)(function (artworks, columnCount) {
      return columnCount.map(function (n) {
        return createSectionedArtworks(artworks, n);
      });
    }, areSectionedArtworksEqual));

    return _this;
  }

  _createClass(ArtworkGridContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.onLoadMore) {
        var interval = setInterval(function () {
          _this2.maybeLoadMore();
        }, 150);
        this.setState({
          interval: interval
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.interval) {
        clearInterval(this.state.interval);
      }
    }
  }, {
    key: "maybeLoadMore",
    value: function maybeLoadMore() {
      var threshold = window.innerHeight + window.scrollY;

      var el = _reactDom.default.findDOMNode(this);

      if (threshold >= el.clientHeight + el.scrollTop) {
        this.props.onLoadMore();
      }
    }
  }, {
    key: "renderSectionsForSingleBreakpoint",
    value: function renderSectionsForSingleBreakpoint(columnCount, sectionedArtworks) {
      var _this3 = this;

      var preloadImageCount = this.props.preloadImageCount;
      var spacerStyle = {
        height: this.props.itemMargin
      };
      var sections = [];

      for (var i = 0; i < columnCount; i++) {
        var artworkComponents = [];

        var _loop = function _loop(j) {
          var artwork = sectionedArtworks[i][j];
          artworkComponents.push(_react.default.createElement(_GridItem.default, {
            artwork: artwork,
            key: artwork.__id,
            mediator: _this3.props.mediator,
            lazyLoad: i + j >= preloadImageCount,
            onClick: function onClick() {
              if (_this3.props.onBrickClick) {
                _this3.props.onBrickClick(artwork);
              }
            }
          })); // Setting a marginBottom on the artwork component didn’t work, so using a spacer view instead.

          if (j < sectionedArtworks[i].length - 1) {
            artworkComponents.push(_react.default.createElement("div", {
              style: spacerStyle,
              key: "spacer-" + j + "-" + artwork.__id
            }));
          }
        };

        for (var j = 0; j < sectionedArtworks[i].length; j++) {
          _loop(j);
        }

        var sectionSpecificStyle = {
          flex: 1,
          minWidth: 0,
          marginRight: i === columnCount - 1 ? 0 : this.props.sectionMargin
        };
        sections.push(_react.default.createElement("div", {
          style: sectionSpecificStyle,
          key: i
        }, artworkComponents));
      }

      return sections;
    }
  }, {
    key: "renderSectionsForAllBreakpoints",
    value: function renderSectionsForAllBreakpoints() {
      var _this4 = this;

      var columnCount = this._columnCount; // Only 1 column ever, so no need to wrap.

      if (this._columnCount.length === 1) {
        return this.renderSectionsForSingleBreakpoint(columnCount[0], this.sectionedArtworksForAllBreakpoints(this.props.artworks, columnCount)[0]);
      }

      var columnBreakpointProps = this.columnBreakpointProps(columnCount);
      var sectionedArtworksForAllBreakpoints = this.sectionedArtworksForAllBreakpoints(this.props.artworks, columnBreakpointProps.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            n = _ref2[0];

        return n;
      }));
      return columnBreakpointProps.map(function (_ref3, i) {
        var _ref4 = _slicedToArray(_ref3, 2),
            count = _ref4[0],
            props = _ref4[1];

        return (// We always create all Media instances, so using i as key is fine.
          _react.default.createElement(_Responsive.Media, _extends({}, props, {
            key: i
          }), function (className, renderChildren) {
            return _react.default.createElement(InnerContainer, {
              className: className
            }, renderChildren && _this4.renderSectionsForSingleBreakpoint(count, sectionedArtworksForAllBreakpoints[i]));
          })
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          artworks = _this$props.artworks,
          className = _this$props.className,
          onClearFilters = _this$props.onClearFilters,
          emptyStateComponent = _this$props.emptyStateComponent;
      var hasArtworks = artworks && artworks.edges && artworks.edges.length > 0;
      var artworkGrids = this.renderSectionsForAllBreakpoints();

      var emptyState = emptyStateComponent || _react.default.createElement(_ArtworkGridEmptyState.ArtworkGridEmptyState, {
        onClearFilters: onClearFilters
      });

      return _react.default.createElement("div", {
        className: className
      }, hasArtworks ? artworkGrids : emptyState);
    }
  }, {
    key: "_columnCount",
    get: function get() {
      var columnCount = this.props.columnCount;
      return typeof columnCount === "number" ? [columnCount] : columnCount;
    }
  }]);

  return ArtworkGridContainer;
}(_react.default.Component);

exports.ArtworkGridContainer = ArtworkGridContainer;

_defineProperty(ArtworkGridContainer, "defaultProps", {
  columnCount: [3],
  sectionMargin: 20,
  itemMargin: 20,
  preloadImageCount: 6
});

var ArtworkGrid = (0, _styledComponents.default)(ArtworkGridContainer).withConfig({
  displayName: "ArtworkGrid",
  componentId: "sc-1o6jos7-0"
})(["display:flex;flex-direction:row;flex-wrap:wrap;"]);
exports.ArtworkGrid = ArtworkGrid;
var InnerContainer = (0, _styledComponents.default)(_palette.Flex).withConfig({
  displayName: "ArtworkGrid__InnerContainer",
  componentId: "sc-1o6jos7-1"
})(["width:100%;"]);

var _default = (0, _reactRelay.createFragmentContainer)(ArtworkGrid, {
  artworks: function artworks() {
    var node = require("../../__generated__/ArtworkGrid_artworks.graphql");

    if (node.hash && node.hash !== "b14f0927b10e6b5c53d7bd2ca546a2cf") {
      console.error("The definition of 'ArtworkGrid_artworks' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/ArtworkGrid_artworks.graphql");
  }
});
/**
 * Performs a shallow equal of artworks.
 */


exports.default = _default;

function areSectionedArtworksEqual(current, previous) {
  if (Array.isArray(current)) {
    return (0, _isEqual2.default)(current, previous);
  } else {
    var currentEdges = current.edges;
    var previousEdges = previous.edges;
    return currentEdges.length === previousEdges.length && currentEdges.every(function (e, i) {
      return e.node.__id === previousEdges[i].node.__id;
    });
  }
}

function createSectionedArtworks(artworksConnection, columnCount) {
  var sectionedArtworks = [];
  var sectionRatioSums = [];
  var artworks = artworksConnection ? artworksConnection.edges : [];

  for (var i = 0; i < columnCount; i++) {
    sectionedArtworks.push([]);
    sectionRatioSums.push(0);
  }

  artworks.forEach(function (artworkEdge) {
    var artwork = artworkEdge.node; // There are artworks without images and other ‘issues’. Like Force we’re just going to reject those for now.
    // See: https://github.com/artsy/eigen/issues/1667

    if (artwork.image) {
      // Find section with lowest *inverted* aspect ratio sum, which is the shortest column.
      var lowestRatioSum = Number.MAX_VALUE;
      var sectionIndex = null;

      for (var j = 0; j < sectionRatioSums.length; j++) {
        var ratioSum = sectionRatioSums[j];

        if (ratioSum < lowestRatioSum) {
          sectionIndex = j;
          lowestRatioSum = ratioSum;
        }
      }

      if (sectionIndex != null) {
        var section = sectionedArtworks[sectionIndex];
        section.push(artwork); // Keep track of total section aspect ratio

        var aspectRatio = artwork.image.aspect_ratio || 1; // Ensure we never divide by null/0
        // Invert the aspect ratio so that a lower value means a shorter section.

        sectionRatioSums[sectionIndex] += 1 / aspectRatio;
      }
    }
  });
  return sectionedArtworks;
}
//# sourceMappingURL=ArtworkGrid.js.map