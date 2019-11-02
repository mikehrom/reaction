import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderStateEnum = "ABANDONED" | "APPROVED" | "CANCELED" | "FULFILLED" | "PENDING" | "REFUNDED" | "SUBMITTED" | "%future added value";
export declare type CommerceBuyerAcceptOfferInput = {
    readonly clientMutationId?: string | null;
    readonly offerId: string;
};
export declare type createMockNetworkLayerTestMutationResultsMutationVariables = {
    readonly input: CommerceBuyerAcceptOfferInput;
};
export declare type createMockNetworkLayerTestMutationResultsMutationResponse = {
    readonly commerceBuyerAcceptOffer: ({
        readonly orderOrError: {
            readonly error?: {
                readonly type: string;
                readonly code: string;
                readonly data: string | null;
            };
            readonly order?: {
                readonly id: string;
                readonly state: CommerceOrderStateEnum;
            };
        };
    }) | null;
};
export declare type createMockNetworkLayerTestMutationResultsMutation = {
    readonly response: createMockNetworkLayerTestMutationResultsMutationResponse;
    readonly variables: createMockNetworkLayerTestMutationResultsMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
