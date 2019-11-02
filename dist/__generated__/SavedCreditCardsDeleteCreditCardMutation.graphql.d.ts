import { ConcreteRequest } from "relay-runtime";
export declare type DeleteCreditCardInput = {
    readonly id: string;
    readonly clientMutationId?: string | null;
};
export declare type SavedCreditCardsDeleteCreditCardMutationVariables = {
    readonly input: DeleteCreditCardInput;
};
export declare type SavedCreditCardsDeleteCreditCardMutationResponse = {
    readonly deleteCreditCard: ({
        readonly creditCardOrError: ({
            readonly creditCard?: ({
                readonly id: string;
                readonly __id: string;
            }) | null;
            readonly mutationError?: ({
                readonly type: string | null;
                readonly message: string | null;
                readonly detail: string | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type SavedCreditCardsDeleteCreditCardMutation = {
    readonly response: SavedCreditCardsDeleteCreditCardMutationResponse;
    readonly variables: SavedCreditCardsDeleteCreditCardMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
