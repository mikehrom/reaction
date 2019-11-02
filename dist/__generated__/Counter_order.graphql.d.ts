import { ConcreteFragment } from "relay-runtime";
import { ArtworkSummaryItem_order$ref } from "./ArtworkSummaryItem_order.graphql";
import { CreditCardSummaryItem_order$ref } from "./CreditCardSummaryItem_order.graphql";
import { OfferHistoryItem_order$ref } from "./OfferHistoryItem_order.graphql";
import { ShippingSummaryItem_order$ref } from "./ShippingSummaryItem_order.graphql";
import { TransactionDetailsSummaryItem_order$ref } from "./TransactionDetailsSummaryItem_order.graphql";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
declare const _Counter_order$ref: unique symbol;
export declare type Counter_order$ref = typeof _Counter_order$ref;
export declare type Counter_order = {
    readonly id: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly state: CommerceOrderStateEnum;
    readonly itemsTotal: string | null;
    readonly totalListPrice: string | null;
    readonly stateExpiresAt: string | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly lastOffer?: ({
        readonly createdAt: string;
    }) | null;
    readonly myLastOffer?: ({
        readonly id: string;
    }) | null;
    readonly " $fragmentRefs": TransactionDetailsSummaryItem_order$ref & ArtworkSummaryItem_order$ref & ShippingSummaryItem_order$ref & CreditCardSummaryItem_order$ref & OfferHistoryItem_order$ref;
    readonly " $refType": Counter_order$ref;
};
declare const node: ConcreteFragment;
export default node;
