import { BidForm_saleArtwork } from "__generated__/BidForm_saleArtwork.graphql";
import { ConfirmBid_me } from "__generated__/ConfirmBid_me.graphql";
import { LotInfo_artwork } from "__generated__/LotInfo_artwork.graphql";
import { LotInfo_saleArtwork } from "__generated__/LotInfo_saleArtwork.graphql";
import { routes_ConfirmBidQueryResponse } from "__generated__/routes_ConfirmBidQuery.graphql";
export interface ConfirmBidQueryResponse extends routes_ConfirmBidQueryResponse {
    me: ConfirmBid_me | routes_ConfirmBidQueryResponse["me"] | any;
    artwork: routes_ConfirmBidQueryResponse["artwork"] & LotInfo_artwork & {
        saleArtwork: routes_ConfirmBidQueryResponse["artwork"]["saleArtwork"] & LotInfo_saleArtwork & BidForm_saleArtwork;
    };
}
export declare const ConfirmBidQueryResponseFixture: ConfirmBidQueryResponse;
