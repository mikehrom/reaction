import { ConcreteFragment } from "relay-runtime";
import { ArtworkSummaryItem_order$ref } from "./ArtworkSummaryItem_order.graphql";
import { CreditCardSummaryItem_order$ref } from "./CreditCardSummaryItem_order.graphql";
import { ShippingSummaryItem_order$ref } from "./ShippingSummaryItem_order.graphql";
import { TransactionDetailsSummaryItem_order$ref } from "./TransactionDetailsSummaryItem_order.graphql";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
declare const _Status_order$ref: unique symbol;
export declare type Status_order$ref = typeof _Status_order$ref;
export declare type Status_order = {
    readonly __typename: string;
    readonly id: string;
    readonly code: string;
    readonly state: CommerceOrderStateEnum;
    readonly mode: CommerceOrderModeEnum | null;
    readonly stateReason: string | null;
    readonly stateExpiresAt: string | null;
    readonly requestedFulfillment: ({
        readonly __typename: "CommerceShip";
    } | {
        readonly __typename: "%other";
    }) | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly fulfillments: ({
                    readonly edges: ReadonlyArray<({
                        readonly node: ({
                            readonly courier: string;
                            readonly trackingId: string | null;
                            readonly estimatedDelivery: string | null;
                        }) | null;
                    }) | null> | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly myLastOffer?: ({
        readonly id: string;
        readonly amount: string | null;
        readonly amountCents: number;
        readonly shippingTotal: string | null;
        readonly shippingTotalCents: number | null;
        readonly taxTotal: string | null;
        readonly taxTotalCents: number | null;
    }) | null;
    readonly " $fragmentRefs": ArtworkSummaryItem_order$ref & TransactionDetailsSummaryItem_order$ref & ShippingSummaryItem_order$ref & CreditCardSummaryItem_order$ref;
    readonly " $refType": Status_order$ref;
};
declare const node: ConcreteFragment;
export default node;
