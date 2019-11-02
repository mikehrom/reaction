"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLink = exports.ArrowContainer = exports.FeaturedImage = exports.FeaturedCollectionsRailsContainer = exports.FeaturedCollectionEntity = exports.FeaturedCollectionsRails = exports.renderCarousel = void 0;

require("core-js/modules/es6.function.name");

var _palette = require("@artsy/palette");

var Schema = _interopRequireWildcard(require("../../../../../../../Artsy/Analytics/Schema"));

var _useTracking3 = require("../../../../../../../Artsy/Analytics/useTracking");

var _RouterLink = require("../../../../../../../Artsy/Router/RouterLink");

var _Truncator = require("../../../../../../../Components/Truncator");

var _v = require("../../../../../../../Components/v2");

var _currency = _interopRequireDefault(require("currency.js"));

var _react = _interopRequireDefault(require("react"));

var _reactRelay = require("react-relay");

var _sharify = require("sharify");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Responsive = require("../../../../../../../Utils/Responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var renderCarousel = function renderCarousel(members, trackArrowClick, carouselHeight) {
  return _react.default.createElement(_v.Carousel, {
    height: carouselHeight,
    options: {
      wrapAround: _sharify.data.IS_MOBILE ? true : false,
      pageDots: false
    },
    data: members,
    render: function render(slide, slideIndex) {
      return _react.default.createElement(FeaturedCollectionEntity, {
        member: slide,
        itemNumber: slideIndex
      });
    },
    onArrowClick: function onArrowClick() {
      return trackArrowClick();
    }
  });
};

exports.renderCarousel = renderCarousel;

var FeaturedCollectionsRails = function FeaturedCollectionsRails(_ref) {
  var collectionGroup = _ref.collectionGroup;
  var members = collectionGroup.members,
      name = collectionGroup.name;

  var _useTracking = (0, _useTracking3.useTracking)(),
      trackEvent = _useTracking.trackEvent;

  var trackArrowClick = function trackArrowClick() {
    trackEvent({
      action_type: Schema.ActionType.Click,
      context_module: Schema.ContextModule.FeaturedCollectionsRail,
      context_page_owner_type: Schema.OwnerType.Collection,
      context_page: Schema.PageName.CollectionPage,
      type: Schema.Type.Button,
      subject: Schema.Subject.ClickedNextButton
    });
  };

  return _react.default.createElement(FeaturedCollectionsContainer, null, _react.default.createElement(_palette.Serif, {
    size: "5",
    mt: 3
  }, name), _react.default.createElement(_Responsive.Media, {
    lessThan: "md"
  }, renderCarousel(members, trackArrowClick, "430px")), _react.default.createElement(_Responsive.Media, {
    greaterThanOrEqual: "md"
  }, renderCarousel(members, trackArrowClick, "500px")), _react.default.createElement(_palette.Spacer, {
    pb: 2
  }));
};

exports.FeaturedCollectionsRails = FeaturedCollectionsRails;

var FeaturedCollectionEntity = function FeaturedCollectionEntity(_ref2) {
  var itemNumber = _ref2.itemNumber,
      member = _ref2.member;
  var description = member.description,
      price_guidance = member.price_guidance,
      slug = member.slug,
      thumbnail = member.thumbnail,
      title = member.title;

  var _useTracking2 = (0, _useTracking3.useTracking)(),
      trackEvent = _useTracking2.trackEvent;

  var formattedPrice = (0, _currency.default)(price_guidance, {
    separator: ",",
    precision: 0
  }).format();

  var handleClick = function handleClick() {
    trackEvent({
      action_type: Schema.ActionType.Click,
      context_page: Schema.PageName.CollectionPage,
      context_module: Schema.ContextModule.FeaturedCollectionsRail,
      context_page_owner_type: Schema.OwnerType.Collection,
      type: Schema.Type.Thumbnail,
      destination_path: "".concat(_sharify.data.APP_URL, "/collection/").concat(slug),
      item_number: itemNumber
    });
  };

  var getTruncatedDescription = function getTruncatedDescription(lines) {
    return _react.default.createElement(_Truncator.Truncator, {
      maxLineCount: lines,
      ReadMoreLink: function ReadMoreLink() {
        return _react.default.createElement(_react.default.Fragment, null, "... ", _react.default.createElement(_ReadMoreLink, {
          size: "2",
          weight: "medium",
          display: "inline"
        }, "Read more"));
      }
    }, _react.default.createElement(_react.default.Fragment, null, description && _react.default.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: description
      }
    })));
  };

  return _react.default.createElement(Container, {
    p: 2,
    m: 1,
    width: ["261px", "261px", "355px", "355px"]
  }, _react.default.createElement(StyledLink, {
    to: "/collection/".concat(slug),
    onClick: handleClick
  }, _react.default.createElement(_palette.Flex, {
    height: ["190px", "190px", "280px", "280px"]
  }, _react.default.createElement(FeaturedImage, {
    src: thumbnail
  })), _react.default.createElement(_palette.Serif, {
    size: "4",
    mt: 1,
    maxWidth: ["246px", "100%"]
  }, _react.default.createElement(_Truncator.Truncator, {
    maxLineCount: 1
  }, title)), price_guidance && _react.default.createElement(_palette.Sans, {
    size: "2",
    color: "black60"
  }, "From $".concat(formattedPrice)), _react.default.createElement(ExtendedSerif, {
    size: "3",
    mt: 1
  }, _react.default.createElement(_Responsive.Media, {
    lessThan: "md"
  }, getTruncatedDescription(4)), _react.default.createElement(_Responsive.Media, {
    greaterThan: "sm"
  }, getTruncatedDescription(3)))));
};

exports.FeaturedCollectionEntity = FeaturedCollectionEntity;
var FeaturedCollectionsRailsContainer = (0, _reactRelay.createFragmentContainer)(FeaturedCollectionsRails, {
  collectionGroup: function collectionGroup() {
    var node = require("../../../../../../../__generated__/FeaturedCollectionsRails_collectionGroup.graphql");

    if (node.hash && node.hash !== "3f45bd74d98c54ab9ee2bc47c5fc381b") {
      console.error("The definition of 'FeaturedCollectionsRails_collectionGroup' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
    }

    return require("../../../../../../../__generated__/FeaturedCollectionsRails_collectionGroup.graphql");
  }
});
exports.FeaturedCollectionsRailsContainer = FeaturedCollectionsRailsContainer;
var Container = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "FeaturedCollectionsRails__Container",
  componentId: "sc-1qqxu3g-0"
})(["border:1px solid ", ";border-radius:2px;&:hover{text-decoration:none;border:1px solid ", ";}"], (0, _palette.color)("black10"), (0, _palette.color)("black60"));
var FeaturedCollectionsContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "FeaturedCollectionsRails__FeaturedCollectionsContainer",
  componentId: "sc-1qqxu3g-1"
})(["border-top:1px solid ", ";", "{&:first-of-type{margin-left:2px;}}"], (0, _palette.color)("black10"), Container);
var ExtendedSerif = (0, _styledComponents.default)(_palette.Serif).withConfig({
  displayName: "FeaturedCollectionsRails__ExtendedSerif",
  componentId: "sc-1qqxu3g-2"
})(["div span{span p{display:inline;}div p{display:inline;}}"]);
var FeaturedImage = (0, _styledComponents.default)(_palette.ResponsiveImage).withConfig({
  displayName: "FeaturedCollectionsRails__FeaturedImage",
  componentId: "sc-1qqxu3g-3"
})(["background-position:top;"]);
exports.FeaturedImage = FeaturedImage;
var ArrowContainer = (0, _styledComponents.default)(_palette.Box).withConfig({
  displayName: "FeaturedCollectionsRails__ArrowContainer",
  componentId: "sc-1qqxu3g-4"
})(["align-self:flex-start;", "{height:100%;}"], _v.ArrowButton);
exports.ArrowContainer = ArrowContainer;
var StyledLink = (0, _styledComponents.default)(_RouterLink.RouterLink).withConfig({
  displayName: "FeaturedCollectionsRails__StyledLink",
  componentId: "sc-1qqxu3g-5"
})(["text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,0);&:hover{text-decoration:none;}"]);
exports.StyledLink = StyledLink;

var _ReadMoreLink = (0, _styledComponents.default)(_palette.Sans).withConfig({
  displayName: "FeaturedCollectionsRails___ReadMoreLink",
  componentId: "sc-1qqxu3g-6"
})(["text-decoration:underline;"]);
//# sourceMappingURL=index.js.map