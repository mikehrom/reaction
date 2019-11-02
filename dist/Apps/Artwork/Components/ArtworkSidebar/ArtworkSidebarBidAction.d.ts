import React from "react";
import { ArtworkSidebarBidAction_artwork } from "__generated__/ArtworkSidebarBidAction_artwork.graphql";
export interface ArtworkSidebarBidActionProps {
    artwork: ArtworkSidebarBidAction_artwork;
}
export interface ArtworkSidebarBidActionState {
    selectedMaxBidCents?: number;
}
export declare class ArtworkSidebarBidAction extends React.Component<ArtworkSidebarBidActionProps, ArtworkSidebarBidActionState> {
    state: ArtworkSidebarBidActionState;
    setMaxBid: (newVal: number) => void;
    redirectToRegister: () => void;
    redirectToBid(firstIncrement: number): void;
    redirectToLiveBidding(user: any): void;
    render(): JSX.Element;
}
export declare const ArtworkSidebarBidActionFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarBidActionProps, "artwork">> & import("react-relay").ComponentRef>;
