import { ConcreteRequest } from "relay-runtime";
import { ArtistRecommendations_artist$ref } from "./ArtistRecommendations_artist.graphql";
export declare type ArtistRecommendations_Test_QueryVariables = {};
export declare type ArtistRecommendations_Test_QueryResponse = {
    readonly artist: ({
        readonly " $fragmentRefs": ArtistRecommendations_artist$ref;
    }) | null;
};
export declare type ArtistRecommendations_Test_Query = {
    readonly response: ArtistRecommendations_Test_QueryResponse;
    readonly variables: ArtistRecommendations_Test_QueryVariables;
};
declare const node: ConcreteRequest;
export default node;
