import { ConcreteFragment } from "relay-runtime";
declare const _OfferSummaryItem_order$ref: unique symbol;
export declare type OfferSummaryItem_order$ref = typeof _OfferSummaryItem_order$ref;
export declare type OfferSummaryItem_order = {
    readonly totalListPrice: string | null;
    readonly myLastOffer?: ({
        readonly amount: string | null;
        readonly note: string | null;
    }) | null;
    readonly " $refType": OfferSummaryItem_order$ref;
};
declare const node: ConcreteFragment;
export default node;
