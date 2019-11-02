import { ConcreteFragment } from "relay-runtime";
import { FollowArtistPopover_artist$ref } from "./FollowArtistPopover_artist.graphql";
declare const _FollowArtistButton_artist$ref: unique symbol;
export declare type FollowArtistButton_artist$ref = typeof _FollowArtistButton_artist$ref;
export declare type FollowArtistButton_artist = {
    readonly __id: string;
    readonly name: string | null;
    readonly id: string;
    readonly is_followed: boolean | null;
    readonly counts: ({
        readonly follows: any | null;
    }) | null;
    readonly " $fragmentRefs": FollowArtistPopover_artist$ref;
    readonly " $refType": FollowArtistButton_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
