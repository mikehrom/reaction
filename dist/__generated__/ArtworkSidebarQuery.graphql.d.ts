import { ConcreteRequest } from "relay-runtime";
import { ArtworkSidebar_artwork$ref } from "./ArtworkSidebar_artwork.graphql";
export declare type ArtworkSidebarQueryVariables = {
    readonly artworkID: string;
};
export declare type ArtworkSidebarQueryResponse = {
    readonly artwork: ({
        readonly " $fragmentRefs": ArtworkSidebar_artwork$ref;
    }) | null;
};
export declare type ArtworkSidebarQuery = {
    readonly response: ArtworkSidebarQueryResponse;
    readonly variables: ArtworkSidebarQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
