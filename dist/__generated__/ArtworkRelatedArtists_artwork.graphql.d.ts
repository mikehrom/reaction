import { ConcreteFragment } from "relay-runtime";
import { ArtistCard_artist$ref } from "./ArtistCard_artist.graphql";
declare const _ArtworkRelatedArtists_artwork$ref: unique symbol;
export declare type ArtworkRelatedArtists_artwork$ref = typeof _ArtworkRelatedArtists_artwork$ref;
export declare type ArtworkRelatedArtists_artwork = {
    readonly id: string;
    readonly artist: ({
        readonly href: string | null;
        readonly related: ({
            readonly artists: ({
                readonly pageInfo: {
                    readonly hasNextPage: boolean;
                };
                readonly edges: ReadonlyArray<({
                    readonly node: ({
                        readonly " $fragmentRefs": ArtistCard_artist$ref;
                    }) | null;
                }) | null> | null;
            }) | null;
        }) | null;
    }) | null;
    readonly " $refType": ArtworkRelatedArtists_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
