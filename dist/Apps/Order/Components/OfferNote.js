"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OfferNote = void 0;

var _palette = require("@artsy/palette");

var _Artsy = require("../../../Artsy");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var OfferNote = function OfferNote(_ref) {
  var onChange = _ref.onChange,
      artworkId = _ref.artworkId,
      counteroffer = _ref.counteroffer;

  var _useContext = (0, _react.useContext)(_Artsy.SystemContext),
      mediator = _useContext.mediator;

  return _react.default.createElement(_palette.TextArea, {
    title: "Note (optional)",
    characterLimit: 200,
    description: _react.default.createElement(_react.default.Fragment, null, "Use this note to add any additional context about your", counteroffer ? " counteroffer" : " offer", ". Please do not share personal information in this field. For any questions about the work,", " ", _react.default.createElement(_palette.Link, {
      onClick: function onClick() {
        return mediator.trigger("openOrdersContactArtsyModal", {
          artworkId: artworkId
        });
      }
    }, "ask our specialists"), "."),
    placeholder: "Add a note",
    onChange: onChange
  });
};

exports.OfferNote = OfferNote;
//# sourceMappingURL=OfferNote.js.map