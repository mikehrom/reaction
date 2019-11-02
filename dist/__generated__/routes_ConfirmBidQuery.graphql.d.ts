import { ConcreteRequest } from "relay-runtime";
import { BidForm_saleArtwork$ref } from "./BidForm_saleArtwork.graphql";
import { LotInfo_artwork$ref } from "./LotInfo_artwork.graphql";
import { LotInfo_saleArtwork$ref } from "./LotInfo_saleArtwork.graphql";
export declare type routes_ConfirmBidQueryVariables = {
    readonly saleID: string;
    readonly artworkID: string;
};
export declare type routes_ConfirmBidQueryResponse = {
    readonly artwork: ({
        readonly _id: string;
        readonly id: string;
        readonly saleArtwork: ({
            readonly _id: string;
            readonly id: string;
            readonly sale: ({
                readonly registrationStatus: ({
                    readonly id: string;
                    readonly qualified_for_bidding: boolean | null;
                }) | null;
                readonly _id: string;
                readonly id: string;
                readonly name: string | null;
                readonly is_closed: boolean | null;
                readonly is_registration_closed: boolean | null;
            }) | null;
            readonly " $fragmentRefs": LotInfo_saleArtwork$ref & BidForm_saleArtwork$ref;
        }) | null;
        readonly " $fragmentRefs": LotInfo_artwork$ref;
    }) | null;
    readonly me: ({
        readonly id: string;
        readonly has_qualified_credit_cards: boolean | null;
    }) | null;
};
export declare type routes_ConfirmBidQuery = {
    readonly response: routes_ConfirmBidQueryResponse;
    readonly variables: routes_ConfirmBidQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
