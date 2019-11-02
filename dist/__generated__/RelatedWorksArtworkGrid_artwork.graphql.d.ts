import { ConcreteFragment } from "relay-runtime";
import { ArtworkGrid_artworks$ref } from "./ArtworkGrid_artworks.graphql";
declare const _RelatedWorksArtworkGrid_artwork$ref: unique symbol;
export declare type RelatedWorksArtworkGrid_artwork$ref = typeof _RelatedWorksArtworkGrid_artwork$ref;
export declare type RelatedWorksArtworkGrid_artwork = {
    readonly layers: ReadonlyArray<({
        readonly name: string | null;
        readonly id: string;
    }) | null> | null;
    readonly id: string;
    readonly layer: ({
        readonly name: string | null;
        readonly artworksConnection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                }) | null;
            }) | null> | null;
            readonly " $fragmentRefs": ArtworkGrid_artworks$ref;
        }) | null;
    }) | null;
    readonly " $refType": RelatedWorksArtworkGrid_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
