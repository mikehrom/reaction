import { ConcreteRequest } from "relay-runtime";
export declare type CommerceCreateOrderWithArtworkInput = {
    readonly artworkId: string;
    readonly clientMutationId?: string | null;
    readonly editionSetId?: string | null;
    readonly quantity?: number | null;
};
export declare type createTestEnvOrderMutationVariables = {
    readonly input: CommerceCreateOrderWithArtworkInput;
};
export declare type createTestEnvOrderMutationResponse = {
    readonly commerceCreateOrderWithArtwork: ({
        readonly orderOrError: {
            readonly order?: {
                readonly id: string;
            };
            readonly error?: {
                readonly type: string;
            };
        };
    }) | null;
};
export declare type createTestEnvOrderMutation = {
    readonly response: createTestEnvOrderMutationResponse;
    readonly variables: createTestEnvOrderMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
