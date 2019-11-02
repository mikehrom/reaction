import { ConcreteRequest } from "relay-runtime";
import { Respond_order$ref } from "./Respond_order.graphql";
export declare type CommerceBuyerCounterOfferInput = {
    readonly amountCents: number;
    readonly clientMutationId?: string | null;
    readonly note?: string | null;
    readonly offerId: string;
};
export declare type RespondCounterOfferMutationVariables = {
    readonly input: CommerceBuyerCounterOfferInput;
};
export declare type RespondCounterOfferMutationResponse = {
    readonly commerceBuyerCounterOffer: ({
        readonly orderOrError: {
            readonly order?: {
                readonly " $fragmentRefs": Respond_order$ref;
            };
            readonly error?: {
                readonly type: string;
                readonly code: string;
                readonly data: string | null;
            };
        };
    }) | null;
};
export declare type RespondCounterOfferMutation = {
    readonly response: RespondCounterOfferMutationResponse;
    readonly variables: RespondCounterOfferMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
