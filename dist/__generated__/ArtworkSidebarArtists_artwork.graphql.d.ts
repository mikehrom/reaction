import { ConcreteFragment } from "relay-runtime";
import { FollowArtistButton_artist$ref } from "./FollowArtistButton_artist.graphql";
declare const _ArtworkSidebarArtists_artwork$ref: unique symbol;
export declare type ArtworkSidebarArtists_artwork$ref = typeof _ArtworkSidebarArtists_artwork$ref;
export declare type ArtworkSidebarArtists_artwork = {
    readonly cultural_maker: string | null;
    readonly artists: ReadonlyArray<({
        readonly __id: string;
        readonly _id: string;
        readonly id: string;
        readonly name: string | null;
        readonly href: string | null;
        readonly " $fragmentRefs": FollowArtistButton_artist$ref;
    }) | null> | null;
    readonly " $refType": ArtworkSidebarArtists_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
