"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditorialFeature = void 0;

var _FeatureLayout = require("../Layouts/FeatureLayout");

var _react = _interopRequireDefault(require("react"));

var _Eoy2018Artists = require("./Components/Eoy2018Artists");

var _Eoy2018Culture = require("./Components/Eoy2018Culture");

var _Vanguard = require("./Components/Vanguard2019");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorialFeature = function EditorialFeature(props) {
  switch (props.customEditorial) {
    case "EOY_2018_ARTISTS":
      {
        return _react.default.createElement(_Eoy2018Artists.Eoy2018Artists, props);
      }

    case "EOY_2018_CULTURE":
      {
        return _react.default.createElement(_Eoy2018Culture.Eoy2018Culture, props);
      }

    case "VANGUARD_2019":
      {
        return _react.default.createElement(_Vanguard.Vanguard2019, props);
      }

    default:
      {
        return _react.default.createElement(_FeatureLayout.FeatureLayout, props);
      }
  }
};

exports.EditorialFeature = EditorialFeature;
EditorialFeature.defaultProps = {
  isTest: false
};
//# sourceMappingURL=EditorialFeature.js.map