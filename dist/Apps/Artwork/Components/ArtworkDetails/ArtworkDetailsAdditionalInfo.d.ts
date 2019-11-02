import React from "react";
import { ArtworkDetailsAdditionalInfo_artwork } from "__generated__/ArtworkDetailsAdditionalInfo_artwork.graphql";
export interface ArtworkDetailsAdditionalInfoProps {
    artwork: ArtworkDetailsAdditionalInfo_artwork;
}
export declare class ArtworkDetailsAdditionalInfo extends React.Component<ArtworkDetailsAdditionalInfoProps> {
    render(): JSX.Element;
}
export declare const ArtworkDetailsAdditionalInfoFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkDetailsAdditionalInfoProps, "artwork">> & import("react-relay").ComponentRef>;
