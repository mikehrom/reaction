import { ConcreteFragment } from "relay-runtime";
import { ArtistRow_artist$ref } from "./ArtistRow_artist.graphql";
import { Dropdown_aggregation$ref } from "./Dropdown_aggregation.graphql";
import { TotalCount_filter_artworks$ref } from "./TotalCount_filter_artworks.graphql";
export declare type ArtworkAggregation = "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "MAJOR_PERIOD" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
declare const _Artists_gene$ref: unique symbol;
export declare type Artists_gene$ref = typeof _Artists_gene$ref;
export declare type Artists_gene = {
    readonly __id: string;
    readonly artists: ({
        readonly pageInfo: {
            readonly hasNextPage: boolean;
        };
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly __id: string;
                readonly " $fragmentRefs": ArtistRow_artist$ref;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly filter_aggregations: ({
        readonly aggregations: ReadonlyArray<({
            readonly slice: ArtworkAggregation | null;
            readonly " $fragmentRefs": Dropdown_aggregation$ref;
        }) | null> | null;
        readonly " $fragmentRefs": TotalCount_filter_artworks$ref;
    }) | null;
    readonly " $refType": Artists_gene$ref;
};
declare const node: ConcreteFragment;
export default node;
