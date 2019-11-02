import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceAddInitialOfferToOrderInput = {
    readonly amountCents: number;
    readonly clientMutationId?: string | null;
    readonly note?: string | null;
    readonly orderId: string;
};
export declare type OfferMutationVariables = {
    readonly input: CommerceAddInitialOfferToOrderInput;
};
export declare type OfferMutationResponse = {
    readonly commerceAddInitialOfferToOrder: ({
        readonly orderOrError: {
            readonly __typename: "CommerceOrderWithMutationSuccess";
            readonly order?: {
                readonly id: string;
                readonly mode: CommerceOrderModeEnum | null;
                readonly totalListPrice: string | null;
                readonly totalListPriceCents: number;
                readonly myLastOffer?: ({
                    readonly id: string;
                    readonly amountCents: number;
                    readonly note: string | null;
                }) | null;
            };
            readonly error?: {
                readonly type: string;
                readonly code: string;
                readonly data: string | null;
            };
        };
    }) | null;
};
export declare type OfferMutation = {
    readonly response: OfferMutationResponse;
    readonly variables: OfferMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
