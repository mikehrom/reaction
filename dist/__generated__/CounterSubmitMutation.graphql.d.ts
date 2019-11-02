import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
export declare type CommerceSubmitPendingOfferInput = {
    readonly clientMutationId?: string | null;
    readonly offerId: string;
};
export declare type CounterSubmitMutationVariables = {
    readonly input: CommerceSubmitPendingOfferInput;
};
export declare type CounterSubmitMutationResponse = {
    readonly commerceSubmitPendingOffer: ({
        readonly orderOrError: {
            readonly order?: {
                readonly state: CommerceOrderStateEnum;
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
export declare type CounterSubmitMutation = {
    readonly response: CounterSubmitMutationResponse;
    readonly variables: CounterSubmitMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
