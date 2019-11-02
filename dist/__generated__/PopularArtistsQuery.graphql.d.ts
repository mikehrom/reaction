import { ConcreteRequest } from "relay-runtime";
import { PopularArtists_popular_artists$ref } from "./PopularArtists_popular_artists.graphql";
export declare type PopularArtistsQueryVariables = {};
export declare type PopularArtistsQueryResponse = {
    readonly popular_artists: ({
        readonly " $fragmentRefs": PopularArtists_popular_artists$ref;
    }) | null;
};
export declare type PopularArtistsQuery = {
    readonly response: PopularArtistsQueryResponse;
    readonly variables: PopularArtistsQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
