import { ConcreteRequest } from "relay-runtime";
import { FollowArtistPopover_artist$ref } from "./FollowArtistPopover_artist.graphql";
export declare type FollowArtistPopoverQueryVariables = {
    readonly artistID: string;
};
export declare type FollowArtistPopoverQueryResponse = {
    readonly artist: ({
        readonly " $fragmentRefs": FollowArtistPopover_artist$ref;
    }) | null;
};
export declare type FollowArtistPopoverQuery = {
    readonly response: FollowArtistPopoverQueryResponse;
    readonly variables: FollowArtistPopoverQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
