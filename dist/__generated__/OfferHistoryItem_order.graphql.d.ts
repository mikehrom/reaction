import { ConcreteFragment } from "relay-runtime";
export declare type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
declare const _OfferHistoryItem_order$ref: unique symbol;
export declare type OfferHistoryItem_order$ref = typeof _OfferHistoryItem_order$ref;
export declare type OfferHistoryItem_order = {
    readonly totalListPrice: string | null;
    readonly offers?: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly id: string;
                readonly amount: string | null;
                readonly createdAt: string;
                readonly fromParticipant: CommerceOrderParticipantEnum | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly lastOffer?: ({
        readonly id: string;
        readonly fromParticipant: CommerceOrderParticipantEnum | null;
        readonly amount: string | null;
        readonly shippingTotal: string | null;
        readonly taxTotal: string | null;
        readonly note: string | null;
    }) | null;
    readonly " $refType": OfferHistoryItem_order$ref;
};
declare const node: ConcreteFragment;
export default node;
