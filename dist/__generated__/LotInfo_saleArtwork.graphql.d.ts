import { ConcreteFragment } from "relay-runtime";
declare const _LotInfo_saleArtwork$ref: unique symbol;
export declare type LotInfo_saleArtwork$ref = typeof _LotInfo_saleArtwork$ref;
export declare type LotInfo_saleArtwork = {
    readonly counts: ({
        readonly bidderPositions: any | null;
    }) | null;
    readonly lotLabel: string | null;
    readonly minimumNextBid: ({
        readonly amount: string | null;
        readonly cents: number | null;
        readonly display: string | null;
    }) | null;
    readonly " $refType": LotInfo_saleArtwork$ref;
};
declare const node: ConcreteFragment;
export default node;
