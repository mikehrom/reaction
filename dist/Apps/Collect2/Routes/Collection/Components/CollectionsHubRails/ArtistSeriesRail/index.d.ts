import { ArtistSeriesRail_collectionGroup } from "__generated__/ArtistSeriesRail_collectionGroup.graphql";
import React from "react";
export interface ArtistSeriesRailProps {
    collectionGroup: ArtistSeriesRail_collectionGroup;
}
export declare const ArtistSeriesRail: React.FC<ArtistSeriesRailProps>;
export declare const ArrowContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps>;
export declare const ArtistSeriesRailContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistSeriesRailProps, "collectionGroup">> & import("react-relay").ComponentRef>;
