import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderFulfillmentTypeEnum = "PICKUP" | "SHIP" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
export declare type CommerceSetShippingInput = {
    readonly clientMutationId?: string | null;
    readonly fulfillmentType: CommerceOrderFulfillmentTypeEnum;
    readonly id: string;
    readonly shipping?: CommerceShippingAttributes | null;
};
export declare type CommerceShippingAttributes = {
    readonly addressLine1?: string | null;
    readonly addressLine2?: string | null;
    readonly city?: string | null;
    readonly country?: string | null;
    readonly name?: string | null;
    readonly phoneNumber: string;
    readonly postalCode?: string | null;
    readonly region?: string | null;
};
export declare type ShippingOrderAddressUpdateMutationVariables = {
    readonly input: CommerceSetShippingInput;
};
export declare type ShippingOrderAddressUpdateMutationResponse = {
    readonly commerceSetShipping: ({
        readonly orderOrError: {
            readonly __typename: "CommerceOrderWithMutationSuccess";
            readonly order?: {
                readonly id: string;
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
            };
            readonly error?: {
                readonly type: string;
                readonly code: string;
                readonly data: string | null;
            };
        };
    }) | null;
};
export declare type ShippingOrderAddressUpdateMutation = {
    readonly response: ShippingOrderAddressUpdateMutationResponse;
    readonly variables: ShippingOrderAddressUpdateMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
