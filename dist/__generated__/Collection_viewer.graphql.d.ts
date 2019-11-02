import { ConcreteFragment } from "relay-runtime";
import { ArtworkFilterArtworkGrid2_filtered_artworks$ref } from "./ArtworkFilterArtworkGrid2_filtered_artworks.graphql";
import { CollectionsHubRails_linkedCollections$ref } from "./CollectionsHubRails_linkedCollections.graphql";
import { Header_artworks$ref } from "./Header_artworks.graphql";
import { RelatedCollectionsRail_collections$ref } from "./RelatedCollectionsRail_collections.graphql";
import { SeoProductsForArtworks_artworks$ref } from "./SeoProductsForArtworks_artworks.graphql";
export declare type ArtworkAggregation = "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "MAJOR_PERIOD" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
declare const _Collection_viewer$ref: unique symbol;
export declare type Collection_viewer$ref = typeof _Collection_viewer$ref;
export declare type Collection_viewer = {
    readonly category: string;
    readonly credit: string | null;
    readonly description: string | null;
    readonly headerImage: string | null;
    readonly id: string;
    readonly slug: string;
    readonly title: string;
    readonly featuredArtistExclusionIds: ReadonlyArray<string> | null;
    readonly query: {
        readonly artist_ids: ReadonlyArray<string> | null;
        readonly artist_id: string | null;
        readonly gene_id: string | null;
    };
    readonly relatedCollections: ReadonlyArray<{
        readonly " $fragmentRefs": RelatedCollectionsRail_collections$ref;
    }>;
    readonly linkedCollections: ReadonlyArray<{
        readonly " $fragmentRefs": CollectionsHubRails_linkedCollections$ref;
    }>;
    readonly artworks: ({
        readonly aggregations: ReadonlyArray<({
            readonly slice: ArtworkAggregation | null;
            readonly counts: ReadonlyArray<({
                readonly id: string;
                readonly name: string | null;
                readonly count: number | null;
            }) | null> | null;
        }) | null> | null;
        readonly " $fragmentRefs": Header_artworks$ref & SeoProductsForArtworks_artworks$ref;
    }) | null;
    readonly filtered_artworks: ({
        readonly __id: string;
        readonly " $fragmentRefs": ArtworkFilterArtworkGrid2_filtered_artworks$ref;
    }) | null;
    readonly " $refType": Collection_viewer$ref;
};
declare const node: ConcreteFragment;
export default node;
