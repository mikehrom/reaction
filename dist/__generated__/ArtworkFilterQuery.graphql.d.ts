import { ConcreteRequest } from "relay-runtime";
import { ArtworkFilter_viewer$ref } from "./ArtworkFilter_viewer.graphql";
export declare type ArtworkAggregation = "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "MAJOR_PERIOD" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL" | "%future added value";
export declare type ArtworkFilterQueryVariables = {
    readonly acquireable?: boolean | null;
    readonly aggregations?: ReadonlyArray<ArtworkAggregation | null> | null;
    readonly artist_id?: string | null;
    readonly at_auction?: boolean | null;
    readonly attribution_class?: ReadonlyArray<string | null> | null;
    readonly color?: string | null;
    readonly for_sale?: boolean | null;
    readonly height?: string | null;
    readonly inquireable_only?: boolean | null;
    readonly major_periods?: ReadonlyArray<string | null> | null;
    readonly medium?: string | null;
    readonly offerable?: boolean | null;
    readonly page?: number | null;
    readonly partner_id?: string | null;
    readonly price_range?: string | null;
    readonly sort?: string | null;
    readonly keyword?: string | null;
    readonly width?: string | null;
};
export declare type ArtworkFilterQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": ArtworkFilter_viewer$ref;
    }) | null;
};
export declare type ArtworkFilterQuery = {
    readonly response: ArtworkFilterQueryResponse;
    readonly variables: ArtworkFilterQueryVariables;
};
declare const node: ConcreteRequest;
export default node;
