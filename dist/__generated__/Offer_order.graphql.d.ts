import { ConcreteFragment } from "relay-runtime";
import { ArtworkSummaryItem_order$ref } from "./ArtworkSummaryItem_order.graphql";
import { TransactionDetailsSummaryItem_order$ref } from "./TransactionDetailsSummaryItem_order.graphql";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
declare const _Offer_order$ref: unique symbol;
export declare type Offer_order$ref = typeof _Offer_order$ref;
export declare type Offer_order = {
    readonly id: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly state: CommerceOrderStateEnum;
    readonly totalListPrice: string | null;
    readonly totalListPriceCents: number;
    readonly currencyCode: string;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $fragmentRefs": ArtworkSummaryItem_order$ref & TransactionDetailsSummaryItem_order$ref;
    readonly " $refType": Offer_order$ref;
};
declare const node: ConcreteFragment;
export default node;
