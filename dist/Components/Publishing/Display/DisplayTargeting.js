"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.is300x50AdUnit = exports.targetingData = void 0;

require("core-js/modules/es6.function.name");

var _sharify = require("sharify");

var _get = require("../../../Utils/get");

var targetingData = function targetingData(article, pageType) {
  var isTesting = _sharify.data.DEPLOY_ENV === "production" ? false : true;
  return {
    is_testing: isTesting,
    page_type: pageType,
    post_id: article.id,
    tags: verticalTag(article)
  };
};

exports.targetingData = targetingData;

var verticalTag = function verticalTag(article) {
  return (0, _get.get)(article, function (a) {
    return a.vertical.name;
  }, "");
};

var is300x50AdUnit = function is300x50AdUnit(unit) {
  return unit.slice(-3) === "x50";
};

exports.is300x50AdUnit = is300x50AdUnit;
//# sourceMappingURL=DisplayTargeting.js.map