import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
export declare type CommerceSubmitOrderWithOfferInput = {
    readonly clientMutationId?: string | null;
    readonly confirmedSetupIntentId?: string | null;
    readonly offerId: string;
};
export declare type ReviewSubmitOfferOrderMutationVariables = {
    readonly input: CommerceSubmitOrderWithOfferInput;
};
export declare type ReviewSubmitOfferOrderMutationResponse = {
    readonly commerceSubmitOrderWithOffer: ({
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
export declare type ReviewSubmitOfferOrderMutation = {
    readonly response: ReviewSubmitOfferOrderMutationResponse;
    readonly variables: ReviewSubmitOfferOrderMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
