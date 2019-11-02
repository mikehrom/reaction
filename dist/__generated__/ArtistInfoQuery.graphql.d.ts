import { ConcreteRequest } from "relay-runtime";
import { ArtistInfo_artist$ref } from "./ArtistInfo_artist.graphql";
export declare type ArtistInfoQueryVariables = {
    readonly artistID: string;
};
export declare type ArtistInfoQueryResponse = {
    readonly artist: ({
        readonly " $fragmentRefs": ArtistInfo_artist$ref;
    }) | null;
};
export declare type ArtistInfoQuery = {
    readonly response: ArtistInfoQueryResponse;
    readonly variables: ArtistInfoQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
