"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbnailImage = exports.ImageContainer = exports.StyledLink = exports.OtherCollectionsRailsContainer = exports.OtherCollectionEntity = void 0;

var _palette = require("@artsy/palette");

var Schema = _interopRequireWildcard(require("../../../../../../../Artsy/Analytics/Schema"));

var _useTracking2 = require("../../../../../../../Artsy/Analytics/useTracking");

var _RouterLink = require("../../../../../../../Artsy/Router/RouterLink");

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var OtherCollectionEntity = function OtherCollectionEntity(_ref) {
  var itemNumber = _ref.itemNumber,
      member = _ref.member;
  var slug = member.slug,
      thumbnail = member.thumbnail,
      title = member.title;

  var _useTracking = (0, _useTracking2.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var handleClick = function handleClick() {
    trackEvent({
      action_type: Schema.ActionType.Click,
      context_page: Schema.PageName.CollectionPage,
      context_module: Schema.ContextModule.OtherCollectionsRail,
      context_page_owner_type: Schema.OwnerType.Collection,
      type: Schema.Type.Thumbnail,
      destination_path: "".concat(_sharify.data.APP_URL, "/collection/").concat(slug),
      item_number: itemNumber
    });
  };

  return _react.default.createElement(StyledLink, {
    to: "/collection/".concat(slug),
    onClick: handleClick
  }, _react.default.createElement(_palette.Flex, {
    alignItems: "center",
    height: "60px"
  }, thumbnail && _react.default.createElement(ImageContainer, null, _react.default.createElement(ThumbnailImage, {
    src: thumbnail
  })), _react.default.createElement(_palette.Box, null, _react.default.createElement(TitleContainer, {
    size: "3",
    px: 2
  }, title))));
};

exports.OtherCollectionEntity = OtherCollectionEntity;
var OtherCollectionsRailsContainer = (0, _reactRelay.createFragmentContainer)(OtherCollectionEntity, {
  member: function member() {
    var node = require("../../../../../../../__generated__/OtherCollectionEntity_member.graphql");

    if (node.hash && node.hash !== "9240c380fecb65bb0486a4b0f4fd151b") {
      console.error("The definition of 'OtherCollectionEntity_member' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../../../__generated__/OtherCollectionEntity_member.graphql");
  }
});
exports.OtherCollectionsRailsContainer = OtherCollectionsRailsContainer;
var StyledLink = (0, _styledComponents.default)(_RouterLink.RouterLink).withConfig({
  displayName: "OtherCollectionEntity__StyledLink",
  componentId: "sc-1ktnkhc-0"
})(["text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);border:1px solid ", ";border-radius:2px;margin-right:10px;&:hover{text-decoration:none;border:1px solid ", ";}"], (0, _palette.color)("black10"), (0, _palette.color)("black60"));
exports.StyledLink = StyledLink;
var ImageContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "OtherCollectionEntity__ImageContainer",
  componentId: "sc-1ktnkhc-1"
})(["height:60px;width:60px;"]);
exports.ImageContainer = ImageContainer;
var ThumbnailImage = (0, _styledComponents.default)(_palette.ResponsiveImage).withConfig({
  displayName: "OtherCollectionEntity__ThumbnailImage",
  componentId: "sc-1ktnkhc-2"
})(["background-size:cover;border-radius:2px 1px 1px 2px;"]);
exports.ThumbnailImage = ThumbnailImage;
var TitleContainer = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "OtherCollectionEntity__TitleContainer",
  componentId: "sc-1ktnkhc-3"
})(["width:max-content;white-space:nowrap;"]);
//# sourceMappingURL=OtherCollectionEntity.js.map