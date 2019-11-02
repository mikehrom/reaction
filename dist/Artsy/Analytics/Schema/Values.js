"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Type = exports.Label = exports.Flow = exports.ContextModule = exports.Subject = exports.ActionName = exports.ActionType = exports.OwnerType = exports.PageName = void 0;

/**
 * Pages that the user can view.
 */
var PageName;
/**
 * An entity in the data model that has an ownership relationship to the entity
 * being described, be it a straightforward model such as ‘Artist’ or a more
 * conceptual one like a ‘Consignment Submission’
 *
 * @see {Result.owner}
 * @see {PageView.owner}
 */

exports.PageName = PageName;

(function (PageName) {
  PageName["ArticlePage"] = "Article";
  PageName["ArtistPage"] = "Artist";
  PageName["ArtworkPage"] = "Artwork page";
  PageName["AuctionRegistrationPage"] = "Auction Registration page";
  PageName["AuctionConfirmBidPage"] = "Auction Confirm Bid page";
  PageName["CollectPage"] = "Collect page";
  PageName["CollectionPage"] = "Collection";
  PageName["SearchPage"] = "Search page";
  PageName["HomePage"] = "Home";
})(PageName || (exports.PageName = PageName = {}));

var OwnerType;
/**
 * User actions, which can be active or passive ones.
 *
 * TODO: Distinguishing between Click and Tap is a little confusing. Do we always
 *       use Click on Force or do we use Tap when browsing from a mobile device?
 */

exports.OwnerType = OwnerType;

(function (OwnerType) {
  OwnerType["Article"] = "Article";
  OwnerType["Artist"] = "Artist";
  OwnerType["Artwork"] = "Artwork";
  OwnerType["Collection"] = "Collection";
  OwnerType["Consignment"] = "ConsignmentSubmission";
  OwnerType["Conversation"] = "Conversation";
  OwnerType["Gene"] = "Gene";
  OwnerType["Invoice"] = "Invoice";
  OwnerType["Partner"] = "Partner";
  OwnerType["Show"] = "Show";
})(OwnerType || (exports.OwnerType = OwnerType = {}));

var ActionType;
/**
 * The identifier that ties an interaction to a result.
 */

exports.ActionType = ActionType;

(function (ActionType) {
  ActionType["Click"] = "Click";
  ActionType["ClickedBuyNow"] = "Clicked buy now";
  ActionType["ClickedMakeOffer"] = "Clicked make offer";
  ActionType["ClickedContactGallery"] = "Clicked \"Contact Gallery\"";
  ActionType["ClickedBid"] = "Clicked \"Bid\"";
  ActionType["ClickedReadMore"] = "Clicked read more";
  ActionType["CommercialFilterParamsChanged"] = "Commercial filter params changed";
  ActionType["ExperimentViewed"] = "Experiment Viewed";
  ActionType["Hover"] = "Hover";
  ActionType["Impression"] = "Impression";
  ActionType["AuthImpression"] = "Auth impression";
  ActionType["Link"] = "Link";
  ActionType["ConfirmBidSubmitted"] = "Confirmed bid on bid page";
  ActionType["ConfirmBidFailed"] = "Confirm bid failed";
  ActionType["PlacedMaxBid"] = "Placed Max Bid";
  ActionType["RegisteredToBid"] = "Registered To Bid";
  ActionType["Tap"] = "Tap";
  ActionType["SubmittedOrder"] = "submitted_order";
  ActionType["SubmittedOffer"] = "submitted_offer";
  ActionType["SubmittedCounterOffer"] = "submitted_counter_offer";
  ActionType["FocusedOnOfferInput"] = "Focused on offer input";
  ActionType["ViewedProduct"] = "Product Viewed";
  ActionType["ViewedOfferTooLow"] = "Viewed offer too low";
  ActionType["ViewedOfferHigherThanListPrice"] = "Viewed offer higher than listed price";
  ActionType["FocusedOnAutosuggestInput"] = "Focused on search input";
  ActionType["SelectedItemFromSearch"] = "Selected item from search";
  ActionType["SelectedItemFromSearchPage"] = "Selected item from search page";
  ActionType["SearchedAutosuggestWithResults"] = "Searched from header with results";
  ActionType["SearchedAutosuggestWithoutResults"] = "Searched from header with no results";
  ActionType["RegistrationSubmitFailed"] = "Registration failed to submit";
  ActionType["RegistrationSubmitted"] = "Registration submitted";
})(ActionType || (exports.ActionType = ActionType = {}));

var ActionName;
exports.ActionName = ActionName;

(function (ActionName) {
  ActionName["ArtistFollow"] = "artistFollow";
  ActionName["ArtistUnfollow"] = "artistUnfollow";
  ActionName["ArtworkAboutTheWork"] = "Artwork about the work";
  ActionName["ViewEditorial"] = "viewed editorial";
  ActionName["Dismiss"] = "dismiss";
  ActionName["EmailNextButton"] = "emailNextButton";
  ActionName["PasswordNextButton"] = "passwordNextButton";
  ActionName["GeneFollow"] = "geneFollow";
  ActionName["GeneUnfollow"] = "geneUnfollow";
  ActionName["HomeArtistRailFollow"] = "homeArtistRailFollow";
  ActionName["HomeArtistArtworksBlockFollow"] = "homeArtistArtworksBlockFollow";
  ActionName["ConversationSendReply"] = "conversationSendReply";
  ActionName["ConversationLink"] = "conversationLinkUsed";
  ActionName["InquiryCancel"] = "inquiryCancel";
  ActionName["InquirySend"] = "inquirySend";
  ActionName["SavesAndFollowsWorks"] = "savesAndFollowsWorks";
  ActionName["SavesAndFollowsArtists"] = "savesAndFollowsArtists";
  ActionName["SavesAndFollowsCategories"] = "savesAndFollowsCategories";
  ActionName["ConsignmentDraftCreated"] = "consignmentDraftCreated";
  ActionName["ConsignmentSubmitted"] = "consignmentSubmitted";
  ActionName["ConsignmentInterest"] = "Interested in selling a work learn more";
  ActionName["BidFlowAddBillingAddress"] = "addBillingAddress";
  ActionName["BidFlowPlaceBid"] = "placeBid";
  ActionName["BidFlowSaveBillingAddress"] = "saveBillingAddress";
  ActionName["ReadMoreExpanded"] = "readMoreExpanded";
  ActionName["InSale"] = "In current auction";
  ActionName["InShow"] = "In featured show";
})(ActionName || (exports.ActionName = ActionName = {}));

/**
 * Identifier of content that was interacted with
 */
var Subject;
/**
 * Identifier of a conceptual module on the page.
 */

exports.Subject = Subject;

(function (Subject) {
  Subject["ClickedNextButton"] = "clicked next button";
  Subject["FurtherReading"] = "Further reading";
  Subject["ReadMore"] = "Read more";
  Subject["RelatedArticles"] = "Related articles";
  Subject["BNMOAskSpecialist"] = "ask a specialist";
  Subject["BNMOReadFAQ"] = "read faq";
  Subject["BNMOProvideShipping"] = "provide shipping address";
  Subject["BNMOArrangePickup"] = "arrange for pickup";
  Subject["BNMOUseShippingAddress"] = "use shipping address";
  Subject["BNMOAddBankAccount"] = "addBankAccount";
  Subject["BNMOHelpEmail"] = "orders@artsy.net";
  Subject["BNMOBankTransferNotifcationCheckbox"] = "notifyCheckboxChecked";
  Subject["BNMOBankTransferModalDismissed"] = "modalDismissed";
  Subject["AuctionConditionsOfSale"] = "conditions of sale";
  Subject["AuctionFAQ"] = "auction faq";
  Subject["AuctionAskSpecialist"] = "ask a specialist";
  Subject["AuctionBuyerPremium"] = "Buyer premium";
  Subject["CollectorFAQ"] = "collector faq";
  Subject["ConsignLearnMore"] = "learn more";
  Subject["Classification"] = "Classification info";
  Subject["ContactGallery"] = "Contact Gallery";
  Subject["EnterLiveAuction"] = "Enter live auction";
  Subject["ShowArtistInsights"] = "Show artist insights";
  Subject["HistogramBar"] = "Histogram Bar";
  Subject["BrowseWorks"] = "Browse works in this category";
  Subject["QuestionMarkIcon"] = "Question Mark Informational Icon";
  Subject["NotificationBell"] = "Notification Bell";
  Subject["Login"] = "Log In";
  Subject["Signup"] = "Sign Up";
  Subject["SmallScreenMenuSandwichIcon"] = "Small Screen Menu Sandwich Icon";
  Subject["FeaturedCategories"] = "Featured Categories";
})(Subject || (exports.Subject = Subject = {}));

var ContextModule;
exports.ContextModule = ContextModule;

(function (ContextModule) {
  ContextModule["Header"] = "Header";
  ContextModule["NavigationTabs"] = "NavigationTabs";
  ContextModule["RecentlyViewedArtworks"] = "recently_viewed_artworks";
  ContextModule["HeaderMoreDropdown"] = "HeaderMoreDropdown";
  ContextModule["HeaderUserDropdown"] = "HeaderUserDropdown";
  ContextModule["ArtistPage"] = "Artist page";
  ContextModule["AboutTheWork"] = "About the work";
  ContextModule["AboutTheWorkPartner"] = "About the Work (Partner)";
  ContextModule["ArtworkFilter"] = "ArtworkFilter";
  ContextModule["ArtistOverview"] = "ArtistOverview";
  ContextModule["ArtistBio"] = "ArtistBio";
  ContextModule["ArtistInsights"] = "ArtistInsights";
  ContextModule["Biography"] = "Biography";
  ContextModule["Sidebar"] = "Sidebar";
  ContextModule["ArtworkPage"] = "Artwork page";
  ContextModule["ArtworkTabs"] = "Artwork tabs";
  ContextModule["OtherWorksByArtist"] = "Other works by artist";
  ContextModule["OtherWorksInAuction"] = "Other works in auction";
  ContextModule["OtherWorksInFair"] = "Other works in fair";
  ContextModule["OtherWorksFromGallery"] = "Other works from gallery";
  ContextModule["OtherWorksFromShow"] = "Other works from show";
  ContextModule["RecommendedArtists"] = "Recommended Artists";
  ContextModule["RelatedArtists"] = "RelatedArtists";
  ContextModule["RelatedWorks"] = "RelatedWorks";
  ContextModule["ShareButton"] = "Share button";
  ContextModule["Zoom"] = "Zoom";
  ContextModule["ViewInRoom"] = "View in room";
  ContextModule["PriceContext"] = "Price Context";
  ContextModule["FurtherReading"] = "Further reading";
  ContextModule["ReadMore"] = "Read more";
  ContextModule["RelatedArticles"] = "Related articles";
  ContextModule["MinimalCtaBanner"] = "MinimalCtaBanner";
  ContextModule["BNMOBanner"] = "BNMO Banner";
  ContextModule["CollectionDescription"] = "CollectionDescription";
  ContextModule["ArtworkBanner"] = "ArtworkBanner";
  ContextModule["CollectionsRail"] = "CollectionsRail";
  ContextModule["CollectionHubEntryPoint"] = "HubEntrypoint";
  ContextModule["OtherCollectionsRail"] = "OtherCollectionsRail";
  ContextModule["FeaturedCollectionsRail"] = "FeaturedCollectionsRail";
  ContextModule["ArtistCollectionsRail"] = "ArtistCollectionsRail";
  ContextModule["BankTransferExperiment"] = "BankTransferExperiment";
})(ContextModule || (exports.ContextModule = ContextModule = {}));

var Flow;
exports.Flow = Flow;

(function (Flow) {
  Flow["ArtworkAboutTheWork"] = "Artwork about the work";
  Flow["ArtworkAboutTheArtist"] = "Artwork about the artist";
  Flow["ArtworkShare"] = "Artwork share";
  Flow["ArtworkZoom"] = "Artwork zoom";
  Flow["ArtworkViewInRoom"] = "Artwork view in room";
  Flow["ArtworkPriceContext"] = "Artwork Price Context";
  Flow["Auctions"] = "Auctions";
  Flow["BuyNow"] = "Buy now";
  Flow["MakeOffer"] = "Make offer";
  Flow["Header"] = "Header";
})(Flow || (exports.Flow = Flow = {}));

var Label;
exports.Label = Label;

(function (Label) {
  Label["AboutTheWork"] = "about_the_work";
  Label["Articles"] = "articles";
  Label["Biography"] = "biography";
  Label["ExhibitionHighlights"] = "exhibition_highlights";
  Label["ReadMore"] = "ReadMore";
})(Label || (exports.Label = Label = {}));

var Type;
exports.Type = Type;

(function (Type) {
  Type["ArtistCard"] = "Artist card";
  Type["ArtworkBrick"] = "Artwork brick";
  Type["Button"] = "Button";
  Type["Link"] = "Link";
  Type["Tab"] = "Tab";
  Type["Thumbnail"] = "thumbnail";
  Type["Chart"] = "Chart";
  Type["RadioButton"] = "radio button";
  Type["EmailLink"] = "email link";
  Type["ModalDismissal"] = "modal dismissal";
})(Type || (exports.Type = Type = {}));
//# sourceMappingURL=Values.js.map