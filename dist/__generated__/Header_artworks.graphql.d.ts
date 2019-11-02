import { ConcreteFragment } from "relay-runtime";
import { DefaultHeader_headerArtworks$ref } from "./DefaultHeader_headerArtworks.graphql";
import { FollowArtistButton_artist$ref } from "./FollowArtistButton_artist.graphql";
declare const _Header_artworks$ref: unique symbol;
export declare type Header_artworks$ref = typeof _Header_artworks$ref;
export declare type Header_artworks = {
    readonly merchandisable_artists: ReadonlyArray<({
        readonly id: string;
        readonly _id: string;
        readonly name: string | null;
        readonly imageUrl: string | null;
        readonly birthday: string | null;
        readonly nationality: string | null;
        readonly " $fragmentRefs": FollowArtistButton_artist$ref;
    }) | null> | null;
    readonly " $fragmentRefs": DefaultHeader_headerArtworks$ref;
    readonly " $refType": Header_artworks$ref;
};
declare const node: ConcreteFragment;
export default node;
