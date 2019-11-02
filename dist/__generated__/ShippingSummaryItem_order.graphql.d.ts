import { ConcreteFragment } from "relay-runtime";
import { ShippingAddress_ship$ref } from "./ShippingAddress_ship.graphql";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
declare const _ShippingSummaryItem_order$ref: unique symbol;
export declare type ShippingSummaryItem_order$ref = typeof _ShippingSummaryItem_order$ref;
export declare type ShippingSummaryItem_order = {
    readonly state: CommerceOrderStateEnum;
    readonly requestedFulfillment: ({
        readonly __typename: string;
        readonly " $fragmentRefs": ShippingAddress_ship$ref;
    }) | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly shippingOrigin: string | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": ShippingSummaryItem_order$ref;
};
declare const node: ConcreteFragment;
export default node;
