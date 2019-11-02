import { ConcreteFragment } from "relay-runtime";
import { FollowArtistButton_artist$ref } from "./FollowArtistButton_artist.graphql";
declare const _ArtistCard_artist$ref: unique symbol;
export declare type ArtistCard_artist$ref = typeof _ArtistCard_artist$ref;
export declare type ArtistCard_artist = {
    readonly name: string | null;
    readonly id: string;
    readonly href: string | null;
    readonly image: ({
        readonly cropped: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly formatted_nationality_and_birthday: string | null;
    readonly " $fragmentRefs": FollowArtistButton_artist$ref;
    readonly " $refType": ArtistCard_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
