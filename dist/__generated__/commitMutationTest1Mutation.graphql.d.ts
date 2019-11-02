import { ConcreteRequest } from "relay-runtime";
export declare type CommerceSetPaymentInput = {
    readonly clientMutationId?: string | null;
    readonly creditCardId: string;
    readonly id: string;
};
export declare type commitMutationTest1MutationVariables = {
    readonly input: CommerceSetPaymentInput;
};
export declare type commitMutationTest1MutationResponse = {
    readonly commerceSetPayment: ({
        readonly orderOrError: {
            readonly error?: {
                readonly code: string;
            };
        };
    }) | null;
};
export declare type commitMutationTest1Mutation = {
    readonly response: commitMutationTest1MutationResponse;
    readonly variables: commitMutationTest1MutationVariables;
};
declare const node: ConcreteRequest;
export default node;
