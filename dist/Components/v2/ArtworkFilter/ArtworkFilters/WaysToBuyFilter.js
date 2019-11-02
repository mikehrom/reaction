"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WaysToBuyFilter = void 0;

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.array.map");

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _palette = require("@artsy/palette");

var _react = _interopRequireDefault(require("react"));

var _ArtworkFilterContext = require("../ArtworkFilterContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaysToBuyFilter = function WaysToBuyFilter() {
  var filterContext = (0, _ArtworkFilterContext.useArtworkFilterContext)();
  /**
   * If counts aren't passed, enable by default
   */

  var isDisabled = function isDisabled(condition) {
    if ((0, _isEmpty2.default)(filterContext.counts)) {
      return false;
    }

    return !Boolean(condition);
  };

  var checkboxes = [{
    disabled: isDisabled(filterContext.counts.ecommerce_artworks),
    name: "Buy now",
    state: "acquireable"
  }, {
    disabled: isDisabled(filterContext.counts.has_make_offer_artworks),
    name: "Make offer",
    state: "offerable"
  }, {
    disabled: isDisabled(filterContext.counts.auction_artworks || !filterContext.isDefaultValue("price_range")),
    name: "Bid",
    state: "at_auction"
  }, {
    disabled: isDisabled(filterContext.counts.for_sale_artworks),
    name: "Inquire",
    state: "inquireable_only"
  }];
  return _react.default.createElement(_palette.Flex, {
    flexDirection: "column",
    alignItems: "left",
    mt: -1,
    mb: 1
  }, _react.default.createElement(_palette.Box, {
    pt: 1
  }, _react.default.createElement(_palette.Sans, {
    size: "2",
    weight: "medium",
    color: "black100"
  }, "Ways to buy"), _react.default.createElement(_palette.Spacer, {
    mb: 2
  }), checkboxes.map(function (checkbox, index) {
    var props = {
      disabled: checkbox.disabled,
      key: index,
      onSelect: function onSelect(value) {
        return filterContext.setFilter(checkbox.state, value);
      },
      selected: Boolean(filterContext.filters[checkbox.state])
    };
    return _react.default.createElement(_palette.Checkbox, props, checkbox.name);
  })));
};

exports.WaysToBuyFilter = WaysToBuyFilter;
//# sourceMappingURL=WaysToBuyFilter.js.map