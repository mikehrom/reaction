import { ArtworkFilters } from "../ArtworkFilterContext";
export declare const MIN_PRICE = 50;
export declare const MAX_PRICE = 50000;
export declare const MIN_HEIGHT = 1;
export declare const MAX_HEIGHT = 120;
export declare const MIN_WIDTH = 1;
export declare const MAX_WIDTH = 120;
export declare const rangeToTuple: (state: ArtworkFilters, range: string) => [number, number];
