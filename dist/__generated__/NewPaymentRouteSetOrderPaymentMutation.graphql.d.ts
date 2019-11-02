import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
export declare type CommerceFixFailedPaymentInput = {
    readonly clientMutationId?: string | null;
    readonly creditCardId: string;
    readonly offerId: string;
};
export declare type NewPaymentRouteSetOrderPaymentMutationVariables = {
    readonly input: CommerceFixFailedPaymentInput;
};
export declare type NewPaymentRouteSetOrderPaymentMutationResponse = {
    readonly commerceFixFailedPayment: ({
        readonly orderOrError: {
            readonly order?: {
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
                }) | null;
                readonly awaitingResponseFrom?: CommerceOrderParticipantEnum | null;
            };
            readonly actionData?: {
                readonly clientSecret: string;
            };
            readonly error?: {
                readonly type: string;
                readonly code: string;
                readonly data: string | null;
            };
        };
    }) | null;
};
export declare type NewPaymentRouteSetOrderPaymentMutation = {
    readonly response: NewPaymentRouteSetOrderPaymentMutationResponse;
    readonly variables: NewPaymentRouteSetOrderPaymentMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
