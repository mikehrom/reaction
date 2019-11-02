import { ConcreteFragment } from "relay-runtime";
export declare type AnalyticsPricingContextCategoryEnum = "ARCHITECTURE" | "BOOKS_AND_PORTFOLIOS" | "DESIGN_DECORATIVE_ART" | "DRAWING_COLLAGE_OTHER_WORK_ON_PAPER" | "FASHION" | "INSTALLATION" | "JEWELRY" | "MIXED_MEDIA" | "OTHER" | "PAINTING" | "PERFORMANCE" | "PHOTOGRAPHY" | "POSTERS" | "PRINT" | "SCULPTURE" | "SOUND" | "TEXTILE" | "VIDEO_FILM_ANIMATION" | "WORK_ON_PAPER" | "%future added value";
export declare type AnalyticsPricingContextDimensionEnum = "LARGE" | "MEDIUM" | "SMALL" | "%future added value";
declare const _PricingContext_artwork$ref: unique symbol;
export declare type PricingContext_artwork$ref = typeof _PricingContext_artwork$ref;
export declare type PricingContext_artwork = {
    readonly priceCents: ({
        readonly min: number | null;
        readonly max: number | null;
    }) | null;
    readonly artists: ReadonlyArray<({
        readonly id: string;
    }) | null> | null;
    readonly category: string | null;
    readonly pricingContext: ({
        readonly appliedFiltersDisplay: string | null;
        readonly appliedFilters: {
            readonly dimension: AnalyticsPricingContextDimensionEnum | null;
            readonly category: AnalyticsPricingContextCategoryEnum | null;
        };
        readonly bins: ReadonlyArray<{
            readonly maxPrice: string | null;
            readonly maxPriceCents: number;
            readonly minPrice: string | null;
            readonly minPriceCents: number;
            readonly numArtworks: number;
        }>;
    }) | null;
    readonly " $refType": PricingContext_artwork$ref;
};
declare const node: ConcreteFragment;
export default node;
