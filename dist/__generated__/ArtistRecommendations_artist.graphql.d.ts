import { ConcreteFragment } from "relay-runtime";
import { RecommendedArtist_artist$ref } from "./RecommendedArtist_artist.graphql";
declare const _ArtistRecommendations_artist$ref: unique symbol;
export declare type ArtistRecommendations_artist$ref = typeof _ArtistRecommendations_artist$ref;
export declare type ArtistRecommendations_artist = {
    readonly id: string;
    readonly name: string | null;
    readonly related: ({
        readonly artists: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                    readonly " $fragmentRefs": RecommendedArtist_artist$ref;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly " $refType": ArtistRecommendations_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
