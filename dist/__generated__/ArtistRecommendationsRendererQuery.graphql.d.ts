import { ConcreteRequest } from "relay-runtime";
import { ArtistRecommendations_artist$ref } from "./ArtistRecommendations_artist.graphql";
export declare type ArtistRecommendationsRendererQueryVariables = {
    readonly artistID: string;
};
export declare type ArtistRecommendationsRendererQueryResponse = {
    readonly artist: ({
        readonly " $fragmentRefs": ArtistRecommendations_artist$ref;
    }) | null;
};
export declare type ArtistRecommendationsRendererQuery = {
    readonly response: ArtistRecommendationsRendererQueryResponse;
    readonly variables: ArtistRecommendationsRendererQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
