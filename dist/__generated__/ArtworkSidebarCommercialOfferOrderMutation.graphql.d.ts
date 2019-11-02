import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceCreateOfferOrderWithArtworkInput = {
    readonly artworkId: string;
    readonly clientMutationId?: string | null;
    readonly editionSetId?: string | null;
    readonly findActiveOrCreate?: boolean | null;
    readonly quantity?: number | null;
};
export declare type ArtworkSidebarCommercialOfferOrderMutationVariables = {
    readonly input: CommerceCreateOfferOrderWithArtworkInput;
};
export declare type ArtworkSidebarCommercialOfferOrderMutationResponse = {
    readonly commerceCreateOfferOrderWithArtwork: ({
        readonly orderOrError: {
            readonly __typename: "CommerceOrderWithMutationSuccess";
            readonly order?: {
                readonly id: string;
                readonly mode: CommerceOrderModeEnum | null;
            };
            readonly error?: {
                readonly type: string;
                readonly code: string;
                readonly data: string | null;
            };
        };
    }) | null;
};
export declare type ArtworkSidebarCommercialOfferOrderMutation = {
    readonly response: ArtworkSidebarCommercialOfferOrderMutationResponse;
    readonly variables: ArtworkSidebarCommercialOfferOrderMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
