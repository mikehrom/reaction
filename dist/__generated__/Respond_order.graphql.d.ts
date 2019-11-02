import { ConcreteFragment } from "relay-runtime";
import { ArtworkSummaryItem_order$ref } from "./ArtworkSummaryItem_order.graphql";
import { CreditCardSummaryItem_order$ref } from "./CreditCardSummaryItem_order.graphql";
import { OfferHistoryItem_order$ref } from "./OfferHistoryItem_order.graphql";
import { ShippingSummaryItem_order$ref } from "./ShippingSummaryItem_order.graphql";
import { TransactionDetailsSummaryItem_order$ref } from "./TransactionDetailsSummaryItem_order.graphql";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
declare const _Respond_order$ref: unique symbol;
export declare type Respond_order$ref = typeof _Respond_order$ref;
export declare type Respond_order = {
    readonly id: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly state: CommerceOrderStateEnum;
    readonly currencyCode: string;
    readonly itemsTotal: string | null;
    readonly itemsTotalCents: number | null;
    readonly totalListPrice: string | null;
    readonly totalListPriceCents: number;
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
        readonly id: string;
        readonly note: string | null;
    }) | null;
    readonly myLastOffer?: ({
        readonly createdAt: string;
    }) | null;
    readonly " $fragmentRefs": TransactionDetailsSummaryItem_order$ref & ArtworkSummaryItem_order$ref & ShippingSummaryItem_order$ref & CreditCardSummaryItem_order$ref & OfferHistoryItem_order$ref;
    readonly " $refType": Respond_order$ref;
};
declare const node: ConcreteFragment;
export default node;
