import { ConcreteRequest } from "relay-runtime";
export declare type CreditCardInput = {
    readonly token: string;
    readonly oneTimeUse?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type createTestEnvCreditCardMutationVariables = {
    readonly input: CreditCardInput;
};
export declare type createTestEnvCreditCardMutationResponse = {
    readonly createCreditCard: ({
        readonly creditCardOrError: ({
            readonly creditCard?: ({
                readonly brand: string;
            }) | null;
            readonly mutationError?: ({
                readonly type: string | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type createTestEnvCreditCardMutation = {
    readonly response: createTestEnvCreditCardMutationResponse;
    readonly variables: createTestEnvCreditCardMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
