import { ConcreteFragment } from "relay-runtime";
import { ArtistArtworkFilter_artist$ref } from "./ArtistArtworkFilter_artist.graphql";
import { ArtistBio_bio$ref } from "./ArtistBio_bio.graphql";
import { CurrentEvent_artist$ref } from "./CurrentEvent_artist.graphql";
import { FollowArtistButton_artist$ref } from "./FollowArtistButton_artist.graphql";
import { Genes_artist$ref } from "./Genes_artist.graphql";
import { MarketInsights_artist$ref } from "./MarketInsights_artist.graphql";
import { SelectedCareerAchievements_artist$ref } from "./SelectedCareerAchievements_artist.graphql";
export declare type ArtworkAggregation = "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "MAJOR_PERIOD" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
declare const _Overview_artist$ref: unique symbol;
export declare type Overview_artist$ref = typeof _Overview_artist$ref;
export declare type Overview_artist = {
    readonly id: string;
    readonly counts: ({
        readonly partner_shows: any | null;
        readonly for_sale_artworks: any | null;
        readonly ecommerce_artworks: any | null;
        readonly auction_artworks: any | null;
        readonly artworks: any | null;
        readonly has_make_offer_artworks: boolean | null;
    }) | null;
    readonly href: string | null;
    readonly is_consignable: boolean | null;
    readonly biography_blurb: ({
        readonly text: string | null;
        readonly credit: string | null;
    }) | null;
    readonly currentEvent: ({
        readonly name: string | null;
    }) | null;
    readonly related: ({
        readonly genes: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly artists: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly __id: string;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly _id: string;
    readonly collections: ReadonlyArray<string | null> | null;
    readonly highlights: ({
        readonly partners: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly categories: ReadonlyArray<({
                        readonly id: string;
                    }) | null> | null;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly insights: ReadonlyArray<({
        readonly type: string | null;
    }) | null> | null;
    readonly sidebarAggregations: ({
        readonly aggregations: ReadonlyArray<({
            readonly slice: ArtworkAggregation | null;
            readonly counts: ReadonlyArray<({
                readonly name: string | null;
                readonly id: string;
            }) | null> | null;
        }) | null> | null;
        readonly artworks_connection?: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly id: string;
                }) | null;
            }) | null> | null;
        }) | null;
    }) | null;
    readonly " $fragmentRefs": ArtistBio_bio$ref & CurrentEvent_artist$ref & MarketInsights_artist$ref & SelectedCareerAchievements_artist$ref & Genes_artist$ref & FollowArtistButton_artist$ref & ArtistArtworkFilter_artist$ref;
    readonly " $refType": Overview_artist$ref;
};
declare const node: ConcreteFragment;
export default node;
