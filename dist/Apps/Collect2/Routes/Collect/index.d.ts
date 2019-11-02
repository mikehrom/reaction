import { Location, Router } from "found";
import React from "react";
import { Collect_marketingHubCollections } from "__generated__/Collect_marketingHubCollections.graphql";
import { collectRoutes_ArtworkFilterQueryResponse } from "__generated__/collectRoutes_ArtworkFilterQuery.graphql";
export interface CollectAppProps {
    COLLECTION_HUB_ENTRYPOINTS_TEST?: string;
    location: Location;
    router: Router;
    marketingHubCollections: Collect_marketingHubCollections;
    viewer: collectRoutes_ArtworkFilterQueryResponse["viewer"];
    filterArtworks: collectRoutes_ArtworkFilterQueryResponse["filterArtworks"];
    params?: {
        medium: string;
    };
}
export declare const CollectApp: (props: CollectAppProps) => JSX.Element;
export declare const CollectAppFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<CollectAppProps, "location" | "viewer" | "marketingHubCollections" | "params" | "filterArtworks" | "COLLECTION_HUB_ENTRYPOINTS_TEST" | "router">> & import("react-relay").ComponentRef>;
