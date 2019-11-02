"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSearchTerm = getSearchTerm;
exports.SearchBarQueryRenderer = exports.SearchBarRefetchContainer = exports.SearchBar = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.date.to-string");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.array.reduce");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("core-js/modules/es6.array.for-each");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.object.assign");

require("core-js/modules/es6.array.is-array");

require("core-js/modules/es6.function.bind");

require("core-js/modules/es6.regexp.search");

var _throttle2 = _interopRequireDefault(require("lodash/throttle"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _palette = require("@artsy/palette");

var _Artsy = require("../../Artsy");

var _Analytics = require("../../Artsy/Analytics");

var Schema = _interopRequireWildcard(require("../../Artsy/Analytics/Schema"));

var _SystemQueryRenderer = require("../../Artsy/Relay/SystemQueryRenderer");

var _Colors = _interopRequireDefault(require("../../Assets/Colors"));

var _SuggestionItem = require("./Suggestions/SuggestionItem");

var _qs = _interopRequireDefault(require("qs"));

var _react = _interopRequireWildcard(require("react"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _superagent = _interopRequireDefault(require("superagent"));

var _Events = _interopRequireDefault(require("../../Utils/Events"));

var _get = require("../../Utils/get");

var _logger = _interopRequireDefault(require("../../Utils/logger"));

var _Responsive = require("../../Utils/Responsive");

var _SearchInputContainer = require("./SearchInputContainer");

var _graphql, _dec, _dec2, _dec3, _dec4, _class, _class2, _temp;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var logger = (0, _logger.default)("Components/Search/SearchBar");
var AutosuggestWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "SearchBar__AutosuggestWrapper",
  componentId: "jaheep-0"
})(["position:relative;ul{list-style-type:none;padding:0;margin:0;}"]);
var ResultsWrapper = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "SearchBar__ResultsWrapper",
  componentId: "jaheep-1"
})(["background-color:", ";display:flex;border:1px solid ", ";position:absolute;"], _Colors.default.white, _Colors.default.grayRegular);

var SuggestionContainer = function SuggestionContainer(_ref) {
  var children = _ref.children,
      containerProps = _ref.containerProps;
  return _react.default.createElement(AutosuggestWrapper, _extends({
    width: "100%",
    flexDirection: ["column", "row"]
  }, containerProps), _react.default.createElement(ResultsWrapper, {
    width: "100%",
    mt: 0.5
  }, _react.default.createElement(_palette.Box, {
    width: "100%"
  }, _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    width: "100%"
  }, children))));
};

var SearchBar = (_dec = (0, _Analytics.track)(null, {
  dispatch: function dispatch(data) {
    return _Events.default.postEvent(data);
  }
}), _dec2 = (0, _Analytics.track)(function (_props, _state, _ref2) {
  var _ref3 = _slicedToArray(_ref2, 2),
      query = _ref3[0],
      hasResults = _ref3[1];

  return {
    action_type: hasResults ? Schema.ActionType.SearchedAutosuggestWithResults : Schema.ActionType.SearchedAutosuggestWithoutResults,
    query: query
  };
}), _dec3 = (0, _Analytics.track)({
  action_type: Schema.ActionType.FocusedOnAutosuggestInput
}), _dec4 = (0, _Analytics.track)(function (_props, state, _ref4) {
  var _ref5 = _slicedToArray(_ref4, 1),
      _ref5$ = _ref5[0],
      _ref5$$suggestion$nod = _ref5$.suggestion.node,
      href = _ref5$$suggestion$nod.href,
      displayType = _ref5$$suggestion$nod.displayType,
      id = _ref5$$suggestion$nod.id,
      suggestionIndex = _ref5$.suggestionIndex;

  return {
    action_type: Schema.ActionType.SelectedItemFromSearch,
    query: state.term,
    destination_path: href,
    item_type: displayType,
    item_id: id,
    item_number: suggestionIndex
  };
}), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SearchBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "input", void 0);

    _defineProperty(_assertThisInitialized(_this), "userClickedOnDescendant", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      term: getSearchTerm(window.location),
      entityID: null,
      entityType: null,
      focused: false // Throttled method to toggle previews.

    });

    _defineProperty(_assertThisInitialized(_this), "throttledOnSuggestionHighlighted", function (_ref6) {
      var suggestion = _ref6.suggestion;
      if (!suggestion) return;
      var _suggestion$node = suggestion.node,
          entityType = _suggestion$node.displayType,
          entityID = _suggestion$node.id;
      if (entityType === "FirstItem") return;

      _this.setState({
        entityType: entityType,
        entityID: entityID
      });
    });

    _defineProperty(_assertThisInitialized(_this), "throttledFetch", function (_ref7) {
      var term = _ref7.value;
      var relay = _this.props.relay;
      var performanceStart = performance && performance.now();
      relay.refetch({
        term: term,
        hasTerm: true
      }, null, function (error) {
        if (error) {
          logger.error(error);
          return;
        } else if (performanceStart && _sharify.data.VOLLEY_ENDPOINT) {
          _this.reportPerformanceMeasurement(performanceStart);
        }

        var viewer = _this.props.viewer;
        var edges = (0, _get.get)(viewer, function (v) {
          return v.search.edges;
        }, []);

        _this.trackSearch(term, edges.length > 0);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "reportPerformanceMeasurement", function (performanceStart) {
      var duration = performance.now() - performanceStart;
      var deviceType = _sharify.data.IS_MOBILE ? "mobile" : "desktop";
      var metricPayload = {
        type: "timing",
        name: "autocomplete-search-response",
        timing: duration,
        tags: ["device-type:".concat(deviceType), "design:rich"]
      };

      _superagent.default.post(_sharify.data.VOLLEY_ENDPOINT).send({
        serviceName: "force",
        metrics: [metricPayload]
      }).end();
    });

    _defineProperty(_assertThisInitialized(_this), "searchTextChanged", function (_e, _ref8) {
      var term = _ref8.newValue;

      _this.setState({
        term: term
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      var isClickOnSearchIcon = event.relatedTarget && event.relatedTarget.form && event.relatedTarget.form === event.target.form;

      if (isClickOnSearchIcon) {
        if (!(0, _isEmpty2.default)(event.target.value)) {
          _this.userClickedOnDescendant = true;
        }
      } else {
        _this.setState({
          focused: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSuggestionsClearRequested", function (e) {
      // This event _also_ fires when a user clicks on a link in the preview pane
      //  or the magnifying glass icon. If we initialize state when that happens,
      //  the link will get removed from the DOM before the browser has a chance
      //  to follow it.
      if (!_this.userClickedOnDescendant) {
        _this.setState({
          entityID: null,
          entityType: null
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestionsContainer", function (_ref9) {
      var containerProps = _ref9.containerProps,
          children = _ref9.children,
          query = _ref9.query;
      var noResults = (0, _get.get)(_this.props, function (p) {
        return p.viewer.search.edges.length === 0;
      });
      var focused = _this.state.focused;

      if (noResults || !focused || !query) {
        return null;
      }

      var props = {
        children: children,
        containerProps: containerProps,
        focused: focused,
        query: query
      };
      return _react.default.createElement(SuggestionContainer, props, children);
    });

    _defineProperty(_assertThisInitialized(_this), "getSuggestionValue", function (_ref10) {
      var displayLabel = _ref10.node.displayLabel;
      return displayLabel;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSuggestion", function (edge, rest) {
      var renderer = edge.node.isFirstItem ? _this.renderFirstSuggestion : _this.renderDefaultSuggestion;
      var item = renderer(edge, rest);
      return item;
    });

    _defineProperty(_assertThisInitialized(_this), "renderFirstSuggestion", function (edge, _ref11) {
      var query = _ref11.query,
          isHighlighted = _ref11.isHighlighted;
      var _edge$node = edge.node,
          displayLabel = _edge$node.displayLabel,
          displayType = _edge$node.displayType,
          href = _edge$node.href;
      return _react.default.createElement(_SuggestionItem.FirstSuggestionItem, {
        display: displayLabel,
        href: href,
        isHighlighted: isHighlighted,
        label: displayType,
        query: query
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderDefaultSuggestion", function (edge, _ref12) {
      var query = _ref12.query,
          isHighlighted = _ref12.isHighlighted;
      var _edge$node2 = edge.node,
          displayLabel = _edge$node2.displayLabel,
          displayType = _edge$node2.displayType,
          href = _edge$node2.href;
      return _react.default.createElement(_SuggestionItem.SuggestionItem, {
        display: displayLabel,
        href: href,
        isHighlighted: isHighlighted,
        label: displayType,
        query: query
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderInputComponent", function (props) {
      return _react.default.createElement(_SearchInputContainer.SearchInputContainer, props);
    });

    return _this;
  }

  _createClass(SearchBar, [{
    key: "trackSearch",
    value: function trackSearch(_term, _hasResults) {}
    /* no-op */
    // Throttled method to perform refetch for new suggest query.

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.throttledFetch = (0, _throttle2.default)(this.throttledFetch, 500, {
        leading: true
      });
      this.throttledOnSuggestionHighlighted = (0, _throttle2.default)(this.throttledOnSuggestionHighlighted, 500, {
        leading: true
      });
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        focused: true
      });
    }
  }, {
    key: "onSuggestionSelected",
    // Navigate to selected search item.
    value: function onSuggestionSelected(_ref13) {
      var href = _ref13.suggestion.node.href;
      this.userClickedOnDescendant = true;
      window.location.assign(href);
    }
  }, {
    key: "renderAutosuggestComponent",
    value: function renderAutosuggestComponent(_ref14) {
      var _this2 = this;

      var xs = _ref14.xs;
      var term = this.state.term;
      var viewer = this.props.viewer;
      var inputProps = {
        onChange: this.searchTextChanged,
        onFocus: this.onFocus.bind(this),
        onBlur: this.onBlur,
        placeholder: xs ? _SuggestionItem.PLACEHOLDER_XS : _SuggestionItem.PLACEHOLDER,
        value: term,
        name: "term",
        onKeyDown: function onKeyDown(event) {
          if (event.keyCode === 13 && // Enter key press ...
          event.target && // with empty search query
          (0, _isEmpty2.default)(event.target.value)) {
            event.preventDefault();
          }
        }
      };
      var firstSuggestionPlaceholder = {
        node: {
          isFirstItem: true,
          displayType: "FirstItem",
          displayLabel: term,
          href: "/search?term=".concat(term)
        }
      };
      var edges = (0, _get.get)(viewer, function (v) {
        return v.search.edges;
      }, []);
      var suggestions = [firstSuggestionPlaceholder].concat(_toConsumableArray(edges));
      return _react.default.createElement(_reactAutosuggest.default, {
        alwaysRenderSuggestions: this.userClickedOnDescendant,
        suggestions: suggestions,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        onSuggestionHighlighted: this.throttledOnSuggestionHighlighted,
        onSuggestionsFetchRequested: this.throttledFetch,
        getSuggestionValue: this.getSuggestionValue,
        renderSuggestion: this.renderSuggestion,
        renderSuggestionsContainer: function renderSuggestionsContainer(props) {
          return _this2.renderSuggestionsContainer(props);
        },
        inputProps: inputProps,
        onSuggestionSelected: function onSuggestionSelected(e, selection) {
          e.preventDefault();

          _this2.onSuggestionSelected(selection);
        },
        renderInputComponent: this.renderInputComponent
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("form", {
        action: "/search",
        method: "GET",
        itemProp: "potentialAction",
        itemScope: true,
        itemType: "http://schema.org/SearchAction"
      }, _react.default.createElement(_Responsive.Media, {
        at: "xs"
      }, this.renderAutosuggestComponent({
        xs: true
      })), _react.default.createElement(_Responsive.Media, {
        greaterThan: "xs"
      }, this.renderAutosuggestComponent({
        xs: false
      })));
    }
  }]);

  return SearchBar;
}(_react.Component), _temp), (_applyDecoratedDescriptor(_class2.prototype, "trackSearch", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "trackSearch"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onFocus", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "onFocus"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "onSuggestionSelected", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "onSuggestionSelected"), _class2.prototype)), _class2)) || _class);
exports.SearchBar = SearchBar;
var SearchBarRefetchContainer = (0, _reactRelay.createRefetchContainer)(function (props) {
  return _react.default.createElement(SearchBar, props);
}, {
  viewer: function viewer() {
    var node = require("../../__generated__/SearchBar_viewer.graphql");

    if (node.hash && node.hash !== "7d0a79e6f397dc366681ef647a0a5d50") {
      console.error("The definition of 'SearchBar_viewer' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../__generated__/SearchBar_viewer.graphql");
  }
}, function () {
  var node = require("../../__generated__/SearchBarRefetchQuery.graphql");

  if (node.hash && node.hash !== "cb6e3d4666fd34a44ff7abab4e21d91f") {
    console.error("The definition of 'SearchBarRefetchQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
  }

  return require("../../__generated__/SearchBarRefetchQuery.graphql");
});
exports.SearchBarRefetchContainer = SearchBarRefetchContainer;

var SearchBarQueryRenderer = function SearchBarQueryRenderer() {
  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      relayEnvironment = _useContext.relayEnvironment,
      _useContext$searchQue = _useContext.searchQuery,
      searchQuery = _useContext$searchQue === void 0 ? "" : _useContext$searchQue;

  return _react.default.createElement(_SystemQueryRenderer.SystemQueryRenderer, {
    environment: relayEnvironment,
    query: _graphql || (_graphql = function _graphql() {
      var node = require("../../__generated__/SearchBarSuggestQuery.graphql");

      if (node.hash && node.hash !== "179ff37868a1bbadf4ea470bc76df6d6") {
        console.error("The definition of 'SearchBarSuggestQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return require("../../__generated__/SearchBarSuggestQuery.graphql");
    }),
    variables: {
      term: "",
      hasTerm: false
    },
    render: function render(_ref15) {
      var props = _ref15.props;

      if (props) {
        return _react.default.createElement(SearchBarRefetchContainer, {
          viewer: props.viewer
        }); // SSR render pass. Since we don't have access to `<Boot>` context
        // from within the NavBar (it's not a part of any app) we need to lean
        // on styled-system for showing / hiding depending upon breakpoint.
      } else {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_palette.Box, {
          display: ["block", "none"]
        }, _react.default.createElement(_SearchInputContainer.SearchInputContainer, {
          placeholder: searchQuery || _SuggestionItem.PLACEHOLDER_XS,
          defaultValue: searchQuery
        })), _react.default.createElement(_palette.Box, {
          display: ["none", "block"]
        }, _react.default.createElement(_SearchInputContainer.SearchInputContainer, {
          placeholder: searchQuery || _SuggestionItem.PLACEHOLDER,
          defaultValue: searchQuery
        })));
      }
    }
  });
};

exports.SearchBarQueryRenderer = SearchBarQueryRenderer;

function getSearchTerm(location) {
  var term = (0, _get.get)(_qs.default, function (querystring) {
    return querystring.parse(location.search.slice(1)).term;
  }, "");

  if (Array.isArray(term)) {
    return term[0];
  }

  return term;
}
//# sourceMappingURL=SearchBar.js.map