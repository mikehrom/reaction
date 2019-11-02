import React from "react";
import { ArtworkSidebarAuctionPartnerInfo_artwork } from "__generated__/ArtworkSidebarAuctionPartnerInfo_artwork.graphql";
export interface ArtworkSidebarAuctionPartnerInfoProps {
    artwork: ArtworkSidebarAuctionPartnerInfo_artwork;
}
export declare class ArtworkSidebarAuctionPartnerInfo extends React.Component<ArtworkSidebarAuctionPartnerInfoProps> {
    onClickBuyerPremium(mediator: any): void;
    render(): JSX.Element;
}
export declare const ArtworkSidebarAuctionPartnerInfoFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarAuctionPartnerInfoProps, "artwork">> & import("react-relay").ComponentRef>;
