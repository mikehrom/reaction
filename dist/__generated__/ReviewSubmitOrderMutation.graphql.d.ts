import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
export declare type CommerceSubmitOrderInput = {
    readonly clientMutationId?: string | null;
    readonly id: string;
};
export declare type ReviewSubmitOrderMutationVariables = {
    readonly input: CommerceSubmitOrderInput;
};
export declare type ReviewSubmitOrderMutationResponse = {
    readonly commerceSubmitOrder: ({
        readonly orderOrError: {
            readonly order?: {
                readonly state: CommerceOrderStateEnum;
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
export declare type ReviewSubmitOrderMutation = {
    readonly response: ReviewSubmitOrderMutationResponse;
    readonly variables: ReviewSubmitOrderMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
