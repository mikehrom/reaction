import { ConcreteFragment } from "relay-runtime";
import { GridItem_artwork$ref } from "./GridItem_artwork.graphql";
declare const _ArtworkGrid_artworks$ref: unique symbol;
export declare type ArtworkGrid_artworks$ref = typeof _ArtworkGrid_artworks$ref;
export declare type ArtworkGrid_artworks = {
    readonly edges: ReadonlyArray<({
        readonly node: ({
            readonly __id: string;
            readonly id: string;
            readonly href: string | null;
            readonly image: ({
                readonly aspect_ratio: number;
            }) | null;
            readonly " $fragmentRefs": GridItem_artwork$ref;
        }) | null;
    }) | null> | null;
    readonly " $refType": ArtworkGrid_artworks$ref;
};
declare const node: ConcreteFragment;
export default node;
