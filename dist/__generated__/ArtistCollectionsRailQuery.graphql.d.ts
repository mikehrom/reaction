import { ConcreteRequest } from "relay-runtime";
import { ArtistCollectionsRail_collections$ref } from "./ArtistCollectionsRail_collections.graphql";
export declare type ArtistCollectionsRailQueryVariables = {
    readonly isFeaturedArtistContent?: boolean | null;
    readonly size?: number | null;
    readonly artistID?: string | null;
};
export declare type ArtistCollectionsRailQueryResponse = {
    readonly collections: ReadonlyArray<{
        readonly " $fragmentRefs": ArtistCollectionsRail_collections$ref;
    }>;
};
export declare type ArtistCollectionsRailQuery = {
    readonly response: ArtistCollectionsRailQueryResponse;
    readonly variables: ArtistCollectionsRailQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
