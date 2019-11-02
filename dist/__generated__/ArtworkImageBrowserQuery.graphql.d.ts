import { ConcreteRequest } from "relay-runtime";
import { ArtworkImageBrowser_artwork$ref } from "./ArtworkImageBrowser_artwork.graphql";
export declare type ArtworkImageBrowserQueryVariables = {
    readonly artworkID: string;
};
export declare type ArtworkImageBrowserQueryResponse = {
    readonly artwork: ({
        readonly " $fragmentRefs": ArtworkImageBrowser_artwork$ref;
    }) | null;
};
export declare type ArtworkImageBrowserQuery = {
    readonly response: ArtworkImageBrowserQueryResponse;
    readonly variables: ArtworkImageBrowserQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
