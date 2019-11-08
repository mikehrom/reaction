"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfirmBidQueryResponseFixture = void 0;
// This complicated type is needed in order to include nested/masked relay queries
var ConfirmBidQueryResponseFixture = {
  me: {
    id: "my-user-id",
    has_qualified_credit_cards: true,
    " $fragmentRefs": null
  },
  artwork: {
    " $fragmentRefs": null,
    " $refType": null,
    _id: "artworkid",
    id: "artworkslug",
    date: "may 4",
    title: "artworkid",
    imageUrl: "artworkid",
    artistNames: "artworkid",
    saleArtwork: {
      " $fragmentRefs": null,
      " $refType": null,
      _id: "saleArtworkid",
      id: "saleArtworkslug",
      counts: {
        bidderPositions: 3
      },
      increments: [{
        cents: 5000000,
        display: "$50,000"
      }, {
        cents: 6000000,
        display: "$60,000"
      }, {
        cents: 7000000,
        display: "$70,000"
      }],
      lotLabel: "13",
      minimumNextBid: {
        amount: "50000",
        cents: 5000000,
        display: "$50,000USD"
      },
      sale: {
        _id: "saleid",
        id: "saleslug",
        name: "Art Sale 2019",
        is_closed: false,
        is_registration_closed: false,
        registrationStatus: {
          id: "existing-bidder-id",
          qualified_for_bidding: true,
          qualifiedForBidding: true
        }
      }
    }
  }
};
exports.ConfirmBidQueryResponseFixture = ConfirmBidQueryResponseFixture;
//# sourceMappingURL=routes_ConfirmBidQuery.js.map