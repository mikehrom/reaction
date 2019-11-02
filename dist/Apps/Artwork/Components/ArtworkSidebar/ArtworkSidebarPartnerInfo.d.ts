import React from "react";
import { ArtworkSidebarPartnerInfo_artwork } from "__generated__/ArtworkSidebarPartnerInfo_artwork.graphql";
export interface ArtworkSidebarPartnerInfoProps {
    artwork: ArtworkSidebarPartnerInfo_artwork;
}
export declare class ArtworkSidebarPartnerInfo extends React.Component<ArtworkSidebarPartnerInfoProps> {
    renderPartnerName(): JSX.Element;
    renderLocations(locationNames: any): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtworkSidebarPartnerInfoFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarPartnerInfoProps, "artwork">> & import("react-relay").ComponentRef>;
