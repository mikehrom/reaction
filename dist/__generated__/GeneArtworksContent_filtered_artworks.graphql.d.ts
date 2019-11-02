import { ConcreteFragment } from "relay-runtime";
import { ArtworkGrid_artworks$ref } from "./ArtworkGrid_artworks.graphql";
declare const _GeneArtworksContent_filtered_artworks$ref: unique symbol;
export declare type GeneArtworksContent_filtered_artworks$ref = typeof _GeneArtworksContent_filtered_artworks$ref;
export declare type GeneArtworksContent_filtered_artworks = {
    readonly __id: string;
    readonly artworks: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
            readonly endCursor: string | null;
        };
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __id: string;
            }) | null;
        }) | null> | null;
        readonly " $fragmentRefs": ArtworkGrid_artworks$ref;
    }) | null;
    readonly " $refType": GeneArtworksContent_filtered_artworks$ref;
};
declare const node: ConcreteFragment;
export default node;
