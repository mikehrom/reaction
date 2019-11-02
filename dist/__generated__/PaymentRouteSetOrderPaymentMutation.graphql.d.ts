import { ConcreteRequest } from "relay-runtime";
export declare type CommerceSetPaymentInput = {
    readonly clientMutationId?: string | null;
    readonly creditCardId: string;
    readonly id: string;
};
export declare type PaymentRouteSetOrderPaymentMutationVariables = {
    readonly input: CommerceSetPaymentInput;
};
export declare type PaymentRouteSetOrderPaymentMutationResponse = {
    readonly commerceSetPayment: ({
        readonly orderOrError: {
            readonly order?: {
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
            };
            readonly error?: {
                readonly type: string;
                readonly code: string;
                readonly data: string | null;
            };
        };
    }) | null;
};
export declare type PaymentRouteSetOrderPaymentMutation = {
    readonly response: PaymentRouteSetOrderPaymentMutationResponse;
    readonly variables: PaymentRouteSetOrderPaymentMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
