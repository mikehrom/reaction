import React from "react";
/**
 * Initial filter state
 */
export declare const initialArtworkFilterState: {
    attribution_class: any[];
    major_periods: any[];
    page: number;
    sort: string;
};
/**
 * A list of all possible artwork filters across all apps
 */
export interface ArtworkFilters {
    acquireable?: boolean;
    artist_id?: string;
    at_auction?: boolean;
    color?: string;
    for_sale?: boolean;
    height?: string;
    inquireable_only?: boolean;
    keyword?: string;
    major_periods?: string[];
    medium?: string;
    offerable?: boolean;
    page?: number;
    partner_id?: string;
    price_range?: string;
    sort?: string;
    term?: string;
    width?: string;
}
/**
 * Possible aggregations that can be passed
 */
export declare type Aggregations = Array<{
    slice: "COLOR" | "DIMENSION_RANGE" | "FOLLOWED_ARTISTS" | "GALLERY" | "INSTITUTION" | "MAJOR_PERIOD" | "MEDIUM" | "MERCHANDISABLE_ARTISTS" | "PARTNER_CITY" | "PERIOD" | "PRICE_RANGE" | "TOTAL";
    counts: Array<{
        count: number;
        id: string;
        name: string;
    }>;
}>;
interface Counts {
    for_sale_artworks?: number;
    ecommerce_artworks?: number;
    auction_artworks?: number;
    artworks?: number;
    has_make_offer_artworks?: boolean;
}
interface ArtworkFilterContextProps {
    filters?: ArtworkFilters;
    ZeroState?: React.FC;
    sortOptions?: SortOptions;
    aggregations?: Aggregations;
    setAggregations?: (aggregations: Aggregations) => void;
    counts?: Counts;
    setCounts?: (counts: Counts) => void;
    onArtworkBrickClick?: (artwork: any, props: any) => void;
    onFilterClick?: (key: keyof ArtworkFilters, value: string, filterState: ArtworkFilters) => void;
    hasFilters: boolean;
    isDefaultValue: (name: string) => boolean;
    rangeToTuple: (name: string) => [number, number];
    resetFilters: () => void;
    setFilter: (name: string, value: any) => void;
    unsetFilter: (name: string) => void;
}
/**
 * Context behavior shared globally across the ArtworkFilter component tree
 */
export declare const ArtworkFilterContext: React.Context<ArtworkFilterContextProps>;
export declare type SortOptions = Array<{
    value: string;
    text: string;
}>;
export declare type SharedArtworkFilterContextProps = Pick<ArtworkFilterContextProps, "aggregations" | "counts" | "filters" | "sortOptions" | "onArtworkBrickClick" | "onFilterClick" | "ZeroState"> & {
    onChange?: (filterState: any) => void;
};
export declare const ArtworkFilterContextProvider: React.FC<SharedArtworkFilterContextProps & {
    children: React.ReactNode;
}>;
/**
 * Hook to conveniently access fiter state context
 */
export declare const useArtworkFilterContext: () => ArtworkFilterContextProps;
export {};
