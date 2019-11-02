import { ConcreteFragment } from "relay-runtime";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
declare const _PaymentPicker_order$ref: unique symbol;
export declare type PaymentPicker_order$ref = typeof _PaymentPicker_order$ref;
export declare type PaymentPicker_order = {
    readonly id: string;
    readonly mode: CommerceOrderModeEnum | null;
    readonly state: CommerceOrderStateEnum;
    readonly creditCard: ({
        readonly id: string;
        readonly name: string | null;
        readonly street1: string | null;
        readonly street2: string | null;
        readonly city: string | null;
        readonly state: string | null;
        readonly country: string | null;
        readonly postal_code: string | null;
        readonly expiration_month: number;
        readonly expiration_year: number;
        readonly last_digits: string;
        readonly brand: string;
    }) | null;
    readonly requestedFulfillment: ({
        readonly __typename: "CommerceShip";
        readonly name: string | null;
        readonly addressLine1: string | null;
        readonly addressLine2: string | null;
        readonly city: string | null;
        readonly region: string | null;
        readonly country: string | null;
        readonly postalCode: string | null;
    } | {
        readonly __typename: "CommercePickup";
        readonly fulfillmentType: string;
    } | {
        readonly __typename: "%other";
    }) | null;
    readonly lineItems: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly artwork: ({
                    readonly id: string;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $refType": PaymentPicker_order$ref;
};
declare const node: ConcreteFragment;
export default node;
