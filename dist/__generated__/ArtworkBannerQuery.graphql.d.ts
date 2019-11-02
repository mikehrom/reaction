import { ConcreteRequest } from "relay-runtime";
import { ArtworkBanner_artwork$ref } from "./ArtworkBanner_artwork.graphql";
export declare type ArtworkBannerQueryVariables = {
    readonly artworkID: string;
};
export declare type ArtworkBannerQueryResponse = {
    readonly artwork: ({
        readonly " $fragmentRefs": ArtworkBanner_artwork$ref;
    }) | null;
};
export declare type ArtworkBannerQuery = {
    readonly response: ArtworkBannerQueryResponse;
    readonly variables: ArtworkBannerQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
