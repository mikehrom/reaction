"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdDimension = exports.AdUnit = exports.ArticleAdType = void 0;
var ArticleAdType;
exports.ArticleAdType = ArticleAdType;

(function (ArticleAdType) {
  ArticleAdType["Feature"] = "feature";
  ArticleAdType["Article"] = "article";
  ArticleAdType["NewsLanding"] = "newslanding";
  ArticleAdType["SponsorLanding"] = "sponsorlanding";
  ArticleAdType["SponsorFeature"] = "sponsorfeature";
})(ArticleAdType || (exports.ArticleAdType = ArticleAdType = {}));

var AdUnit;
exports.AdUnit = AdUnit;

(function (AdUnit) {
  AdUnit["Desktop_TopLeaderboard"] = "Desktop_TopLeaderboard";
  AdUnit["Desktop_RightRail1"] = "Desktop_RightRail1";
  AdUnit["Desktop_InContentLB2"] = "Desktop_InContentLB2";
  AdUnit["Desktop_NewsLanding_Leaderboard1"] = "Desktop_Leaderboard1";
  AdUnit["Desktop_NewsLanding_Leaderboard2"] = "Desktop_Leaderboard2";
  AdUnit["Desktop_NewsLanding_LeaderboardRepeat"] = "Desktop_LeaderboardRepeat";
  AdUnit["Desktop_SponsoredSeriesLandingPageAndVideoPage_LeaderboardBottom"] = "Desktop_InContentLB2";
  AdUnit["Desktop_Feature_Leaderboard1"] = "Desktop_Leaderboard1";
  AdUnit["Desktop_Feature_Leaderboard2"] = "Desktop_Leaderboard2";
  AdUnit["Desktop_Feature_LeaderboardRepeat"] = "Desktop_LeaderboardRepeat";
  AdUnit["Mobile_TopLeaderboard"] = "Mobile_TopLeaderboard";
  AdUnit["Mobile_InContentMR1"] = "Mobile_InContentMR1";
  AdUnit["Mobile_InContentLB1"] = "Mobile_InContentLB1";
  AdUnit["Mobile_InContentLB2"] = "Mobile_InContentLB2";
  AdUnit["Mobile_NewsLanding_InContent1"] = "Mobile_InContentMR1";
  AdUnit["Mobile_NewsLanding_InContent2"] = "Mobile_InContentMR2";
  AdUnit["Mobile_NewsLanding_InContent3"] = "Mobile_InContentMRRepeat";
  AdUnit["Mobile_SponsoredSeriesLandingPageAndVideoPage_Bottom"] = "Mobile_InContentLB2";
  AdUnit["Mobile_Feature_InContentLeaderboard1"] = "Mobile_InContentLB1";
  AdUnit["Mobile_Feature_InContentLeaderboard2"] = "Mobile_InContentLB2";
  AdUnit["Mobile_Feature_InContentLeaderboard3"] = "Mobile_InContentLBRepeat";
})(AdUnit || (exports.AdUnit = AdUnit = {}));

var AdDimension;
exports.AdDimension = AdDimension;

(function (AdDimension) {
  AdDimension["Desktop_TopLeaderboard"] = "970x250";
  AdDimension["Desktop_RightRail1"] = "300x250";
  AdDimension["Desktop_InContentLB2"] = "970x250";
  AdDimension["Desktop_NewsLanding_Leaderboard1"] = "970x250";
  AdDimension["Desktop_NewsLanding_Leaderboard2"] = "970x250";
  AdDimension["Desktop_NewsLanding_LeaderboardRepeat"] = "970x250";
  AdDimension["Mobile_Feature_InContentLeaderboard1"] = "300x50";
  AdDimension["Mobile_Sponsored_Feature_InContentLeaderboard1"] = "300x250";
  AdDimension["Desktop_SponsoredSeriesLandingPageAndVideoPage_LeaderboardBottom"] = "970x250";
  AdDimension["Mobile_TopLeaderboard"] = "300x50";
  AdDimension["Mobile_InContentMR1"] = "300x50";
  AdDimension["Mobile_InContentLB1"] = "300x50";
  AdDimension["Mobile_InContentLB2"] = "300x50";
  AdDimension["Mobile_SponsoredSeriesLandingPageAndVideoPage_Bottom"] = "300x250";
  AdDimension["Mobile_NewsLanding_InContent1"] = "300x50";
  AdDimension["Mobile_NewsLanding_InContent2"] = "300x50";
  AdDimension["Mobile_NewsLanding_InContent3"] = "300x50";
})(AdDimension || (exports.AdDimension = AdDimension = {}));
//# sourceMappingURL=Typings.js.map