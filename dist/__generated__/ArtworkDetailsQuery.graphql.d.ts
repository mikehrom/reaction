import { ConcreteRequest } from "relay-runtime";
import { ArtworkDetails_artwork$ref } from "./ArtworkDetails_artwork.graphql";
export declare type ArtworkDetailsQueryVariables = {
    readonly artworkID: string;
};
export declare type ArtworkDetailsQueryResponse = {
    readonly artwork: ({
        readonly " $fragmentRefs": ArtworkDetails_artwork$ref;
    }) | null;
};
export declare type ArtworkDetailsQuery = {
    readonly response: ArtworkDetailsQueryResponse;
    readonly variables: ArtworkDetailsQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
