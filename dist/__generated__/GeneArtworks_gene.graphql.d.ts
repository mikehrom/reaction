import { ConcreteFragment } from "relay-runtime";
import { Dropdown_aggregation$ref } from "./Dropdown_aggregation.graphql";
import { GeneArtworksContent_filtered_artworks$ref } from "./GeneArtworksContent_filtered_artworks.graphql";
import { Headline_facet$ref } from "./Headline_facet.graphql";
import { TotalCount_filter_artworks$ref } from "./TotalCount_filter_artworks.graphql";
export declare type ArtworkAggregation = "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "MAJOR_PERIOD" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
declare const _GeneArtworks_gene$ref: unique symbol;
export declare type GeneArtworks_gene$ref = typeof _GeneArtworks_gene$ref;
export declare type GeneArtworks_gene = {
    readonly id: string;
    readonly filtered_artworks: ({
        readonly aggregations: ReadonlyArray<({
            readonly slice: ArtworkAggregation | null;
            readonly counts: ReadonlyArray<({
                readonly name: string | null;
                readonly id: string;
            }) | null> | null;
            readonly " $fragmentRefs": Dropdown_aggregation$ref;
        }) | null> | null;
        readonly facet: ({
            readonly " $fragmentRefs": Headline_facet$ref;
        }) | null;
        readonly " $fragmentRefs": TotalCount_filter_artworks$ref & GeneArtworksContent_filtered_artworks$ref;
    }) | null;
    readonly " $refType": GeneArtworks_gene$ref;
};
declare const node: ConcreteFragment;
export default node;
