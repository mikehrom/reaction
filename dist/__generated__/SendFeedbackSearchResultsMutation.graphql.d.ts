import { ConcreteRequest } from "relay-runtime";
export declare type SendFeedbackMutationInput = {
    readonly message: string;
    readonly email?: string | null;
    readonly name?: string | null;
    readonly url?: string | null;
    readonly clientMutationId?: string | null;
};
export declare type SendFeedbackSearchResultsMutationVariables = {
    readonly input: SendFeedbackMutationInput;
};
export declare type SendFeedbackSearchResultsMutationResponse = {
    readonly sendFeedback: ({
        readonly feedbackOrError: ({
            readonly feedback?: ({
                readonly message: string;
            }) | null;
            readonly mutationError?: ({
                readonly type: string | null;
                readonly message: string | null;
                readonly detail: string | null;
            }) | null;
        }) | null;
    }) | null;
};
export declare type SendFeedbackSearchResultsMutation = {
    readonly response: SendFeedbackSearchResultsMutationResponse;
    readonly variables: SendFeedbackSearchResultsMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
