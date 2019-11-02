import React from "react";
import { ArtworkSidebarClassification_artwork } from "__generated__/ArtworkSidebarClassification_artwork.graphql";
export interface ArtworkSidebarClassificationProps {
    artwork: ArtworkSidebarClassification_artwork;
}
interface State {
    isModalOpen: boolean;
}
export declare class ArtworkSidebarClassification extends React.Component<ArtworkSidebarClassificationProps, State> {
    state: {
        isModalOpen: boolean;
    };
    openModal(): void;
    closeModal: () => void;
    render(): JSX.Element;
}
export declare const ArtworkSidebarClassificationFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarClassificationProps, "artwork">> & import("react-relay").ComponentRef>;
export declare const ClassificationLink: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>>;
export {};
