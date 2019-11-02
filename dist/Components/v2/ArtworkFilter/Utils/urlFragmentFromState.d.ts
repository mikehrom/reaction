import { ArtworkFilters } from "../ArtworkFilterContext";
/**
 * Returns a string representing the query part of a URL. It removes default
 * values, and rewrites keyword -> term.
 */
export declare const urlFragmentFromState: (state: ArtworkFilters) => string;
