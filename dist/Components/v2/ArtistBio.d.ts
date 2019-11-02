import { ArtistBio_bio } from "__generated__/ArtistBio_bio.graphql";
import React from "react";
export interface ArtistBioProps {
    bio: ArtistBio_bio;
    onReadMoreClicked?: () => void;
    maxChars?: number;
}
export declare class ArtistBio extends React.Component<ArtistBioProps> {
    render(): JSX.Element;
}
export declare const ArtistBioFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtistBioProps, "bio" | "onReadMoreClicked" | "maxChars">> & import("react-relay").ComponentRef>;
