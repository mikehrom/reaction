import { ConcreteFragment } from "relay-runtime";
declare const _BidForm_saleArtwork$ref: unique symbol;
export declare type BidForm_saleArtwork$ref = typeof _BidForm_saleArtwork$ref;
export declare type BidForm_saleArtwork = {
    readonly minimumNextBid: ({
        readonly cents: number | null;
    }) | null;
    readonly increments: ReadonlyArray<({
        readonly cents: number | null;
        readonly display: string | null;
    }) | null> | null;
    readonly sale: ({
        readonly registrationStatus: ({
            readonly qualifiedForBidding: boolean | null;
        }) | null;
    }) | null;
    readonly " $refType": BidForm_saleArtwork$ref;
};
declare const node: ConcreteFragment;
export default node;
