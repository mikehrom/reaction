import { ConcreteRequest } from "relay-runtime";
export declare type CommerceCancelReasonTypeEnum = "BUYER_LAPSED" | "BUYER_REJECTED" | "SELLER_LAPSED" | "SELLER_REJECTED" | "SELLER_REJECTED_ARTWORK_UNAVAILABLE" | "SELLER_REJECTED_OFFER_TOO_LOW" | "SELLER_REJECTED_OTHER" | "SELLER_REJECTED_SHIPPING_UNAVAILABLE" | "%future added value";
export declare type CommerceOrderParticipantEnum = "BUYER" | "SELLER" | "%future added value";
export declare type CommerceBuyerRejectOfferInput = {
    readonly clientMutationId?: string | null;
    readonly offerId: string;
    readonly rejectReason?: CommerceCancelReasonTypeEnum | null;
};
export declare type RejectOfferMutationVariables = {
    readonly input: CommerceBuyerRejectOfferInput;
};
export declare type RejectOfferMutationResponse = {
    readonly commerceBuyerRejectOffer: ({
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
export declare type RejectOfferMutation = {
    readonly response: RejectOfferMutationResponse;
    readonly variables: RejectOfferMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
