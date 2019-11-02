import { ConcreteFragment } from "relay-runtime";
import { FillwidthItem_artwork$ref } from "./FillwidthItem_artwork.graphql";
import { FollowArtistButton_artist$ref } from "./FollowArtistButton_artist.graphql";
declare const _RecommendedArtist_artist$ref: unique symbol;
export declare type RecommendedArtist_artist$ref = typeof _RecommendedArtist_artist$ref;
export declare type RecommendedArtist_artist = {
    readonly id: string;
    readonly _id: string;
    readonly name: string | null;
    readonly formatted_nationality_and_birthday: string | null;
    readonly href: string | null;
    readonly image: ({
        readonly cropped: ({
            readonly url: string | null;
        }) | null;
    }) | null;
    readonly artworks_connection: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __id: string;
                readonly image: ({
                    readonly aspect_ratio: number;
                }) | null;
                readonly " $fragmentRefs": FillwidthItem_artwork$ref;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly " $fragmentRefs": FollowArtistButton_artist$ref;
    readonly " $refType": RecommendedArtist_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
