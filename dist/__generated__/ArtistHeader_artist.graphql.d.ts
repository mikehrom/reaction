import { ConcreteFragment } from "relay-runtime";
import { FollowArtistButton_artist$ref } from "./FollowArtistButton_artist.graphql";
declare const _ArtistHeader_artist$ref: unique symbol;
export declare type ArtistHeader_artist$ref = typeof _ArtistHeader_artist$ref;
export declare type ArtistHeader_artist = {
    readonly _id: string;
    readonly id: string;
    readonly name: string | null;
    readonly nationality: string | null;
    readonly years: string | null;
    readonly counts: ({
        readonly follows: any | null;
    }) | null;
    readonly carousel: ({
        readonly images: ReadonlyArray<({
            readonly href: string | null;
            readonly resized: ({
                readonly url: string | null;
                readonly width: number | null;
                readonly height: number | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $fragmentRefs": FollowArtistButton_artist$ref;
    readonly " $refType": ArtistHeader_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
