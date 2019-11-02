import React from "react";
import { ArtworkSidebarSizeInfo_piece } from "__generated__/ArtworkSidebarSizeInfo_piece.graphql";
export interface ArtworkSidebarSizeInfoProps {
    piece: ArtworkSidebarSizeInfo_piece;
}
export declare class ArtworkSidebarSizeInfo extends React.Component<ArtworkSidebarSizeInfoProps> {
    render(): JSX.Element;
}
export declare const ArtworkSidebarSizeInfoFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarSizeInfoProps, "piece">> & import("react-relay").ComponentRef>;
