import { Artwork_artwork } from "__generated__/Artwork_artwork.graphql";
import React from "react";
import { ComponentRef } from "react-relay";
export interface OverlayProps {
    selected: boolean;
}
export interface ArtworkProps {
    extended?: boolean;
    Overlay?: React.SFC<OverlayProps>;
    artwork: Artwork_artwork;
    onSelect?: (selected: boolean) => void;
    showOverlayOnHover?: boolean;
}
export interface ArtworkState {
    isSelected: boolean;
}
export declare class Artwork extends React.Component<ArtworkProps, ArtworkState> {
    static defaultProps: {
        extended: boolean;
        overlay: any;
        showOverlayOnHover: boolean;
    };
    state: {
        isSelected: boolean;
    };
    onSelected: (e: any) => void;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkProps, "onSelect" | "artwork" | "extended" | "Overlay" | "showOverlayOnHover">> & ComponentRef>;
export default _default;
