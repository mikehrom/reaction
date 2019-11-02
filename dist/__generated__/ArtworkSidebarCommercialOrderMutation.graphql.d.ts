import { ConcreteRequest } from "relay-runtime";
export declare type CommerceOrderModeEnum = "BUY" | "OFFER" | "%future added value";
export declare type CommerceCreateOrderWithArtworkInput = {
    readonly artworkId: string;
    readonly clientMutationId?: string | null;
    readonly editionSetId?: string | null;
    readonly quantity?: number | null;
};
export declare type ArtworkSidebarCommercialOrderMutationVariables = {
    readonly input: CommerceCreateOrderWithArtworkInput;
};
export declare type ArtworkSidebarCommercialOrderMutationResponse = {
    readonly commerceCreateOrderWithArtwork: ({
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
export declare type ArtworkSidebarCommercialOrderMutation = {
    readonly response: ArtworkSidebarCommercialOrderMutationResponse;
    readonly variables: ArtworkSidebarCommercialOrderMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
