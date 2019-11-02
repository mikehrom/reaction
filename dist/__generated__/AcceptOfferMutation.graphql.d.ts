import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
export declare type CommerceBuyerAcceptOfferInput = {
    readonly clientMutationId?: string | null;
    readonly offerId: string;
};
export declare type AcceptOfferMutationVariables = {
    readonly input: CommerceBuyerAcceptOfferInput;
};
export declare type AcceptOfferMutationResponse = {
    readonly commerceBuyerAcceptOffer: ({
        readonly orderOrError: {
            readonly __typename: "CommerceOrderWithMutationSuccess";
            readonly order?: {
                readonly id: string;
                readonly awaitingResponseFrom?: CommerceOrderParticipantEnum | null;
            };
            readonly error?: {
                readonly type: string;
                readonly code: string;
                readonly data: string | null;
            };
        };
    }) | null;
};
export declare type AcceptOfferMutation = {
    readonly response: AcceptOfferMutationResponse;
    readonly variables: AcceptOfferMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
