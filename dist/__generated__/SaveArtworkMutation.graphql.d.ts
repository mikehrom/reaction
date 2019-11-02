import { ConcreteRequest } from "relay-runtime";
export declare type SaveArtworkInput = {
    readonly artwork_id?: string | null;
    readonly remove?: boolean | null;
    readonly clientMutationId?: string | null;
};
export declare type SaveArtworkMutationVariables = {
    readonly input: SaveArtworkInput;
};
export declare type SaveArtworkMutationResponse = {
    readonly saveArtwork: ({
        readonly artwork: ({
            readonly __id: string;
            readonly id: string;
            readonly is_saved: boolean | null;
        }) | null;
    }) | null;
};
export declare type SaveArtworkMutation = {
    readonly response: SaveArtworkMutationResponse;
    readonly variables: SaveArtworkMutationVariables;
};
declare const node: ConcreteRequest;
export default node;
