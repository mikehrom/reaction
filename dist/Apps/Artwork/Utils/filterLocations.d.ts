/**
 * Helper function to filter out blank and duplicate location names
 * @param locations collection of location objects to filter
 */
export declare const filterLocations: (locations: readonly {
    city: string;
}[]) => string[];
