import { ConcreteRequest } from "relay-runtime";
import { WorksForYouArtistFeed_viewer$ref } from "./WorksForYouArtistFeed_viewer.graphql";
import { WorksForYouFeed_viewer$ref } from "./WorksForYouFeed_viewer.graphql";
export declare type ArtistArtworksFilters = "IS_FOR_SALE" | "IS_NOT_FOR_SALE" | "%future added value";
export declare type WorksForYouQueryVariables = {
    readonly includeSelectedArtist: boolean;
    readonly artistID: string;
    readonly forSale?: boolean | null;
    readonly filter?: ReadonlyArray<ArtistArtworksFilters | null> | null;
};
export declare type WorksForYouQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": WorksForYouFeed_viewer$ref & WorksForYouArtistFeed_viewer$ref;
    }) | null;
};
export declare type WorksForYouQuery = {
    readonly response: WorksForYouQueryResponse;
    readonly variables: WorksForYouQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
