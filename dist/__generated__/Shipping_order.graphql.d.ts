import { ConcreteFragment } from "relay-runtime";
import { ArtworkSummaryItem_order$ref } from "./ArtworkSummaryItem_order.graphql";
import { TransactionDetailsSummaryItem_order$ref } from "./TransactionDetailsSummaryItem_order.graphql";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
declare const _Shipping_order$ref: unique symbol;
export declare type Shipping_order$ref = typeof _Shipping_order$ref;
export declare type Shipping_order = {
    readonly id: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly state: CommerceOrderStateEnum;
    readonly requestedFulfillment: ({
        readonly __typename: "CommerceShip";
        readonly name: string | null;
        readonly addressLine1: string | null;
        readonly addressLine2: string | null;
        readonly city: string | null;
        readonly region: string | null;
        readonly country: string | null;
        readonly postalCode: string | null;
        readonly phoneNumber: string | null;
    } | {
        readonly __typename: "%other";
    }) | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                    readonly pickup_available: boolean | null;
                    readonly onlyShipsDomestically: boolean | null;
                    readonly shippingCountry: string | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $fragmentRefs": ArtworkSummaryItem_order$ref & TransactionDetailsSummaryItem_order$ref;
    readonly " $refType": Shipping_order$ref;
};
declare const node: ConcreteFragment;
export default node;
