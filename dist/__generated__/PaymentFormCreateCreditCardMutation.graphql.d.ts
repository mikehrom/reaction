import { ConcreteRequest } from "relay-runtime";
export declare type CreditCardInput = {
    readonly token: string;
    readonly oneTimeUse?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type PaymentFormCreateCreditCardMutationVariables = {
    readonly input: CreditCardInput;
};
export declare type PaymentFormCreateCreditCardMutationResponse = {
    readonly createCreditCard: ({
        readonly creditCardOrError: ({
            readonly creditCardEdge?: ({
                readonly node: ({
                    readonly __id: string;
                    readonly id: string;
                    readonly brand: string;
                    readonly last_digits: string;
                    readonly expiration_year: number;
                    readonly expiration_month: number;
                    readonly __typename: string;
                }) | null;
            }) | null;
            readonly mutationError?: ({
                readonly type: string | null;
                readonly message: string | null;
                readonly detail: string | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type PaymentFormCreateCreditCardMutation = {
    readonly response: PaymentFormCreateCreditCardMutationResponse;
    readonly variables: PaymentFormCreateCreditCardMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
