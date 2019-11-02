import { ArtworkActions_artwork } from "__generated__/ArtworkActions_artwork.graphql";
import { Mediator } from "Artsy";
import React from "react";
interface ArtworkActionsProps {
    artwork: ArtworkActions_artwork;
    user?: User;
    mediator?: Mediator;
    selectDefaultSlide(): void;
}
interface ArtworkActionsState {
    showSharePanel: boolean;
    showMorePanel: boolean;
}
export declare class ArtworkActions extends React.Component<ArtworkActionsProps, ArtworkActionsState> {
    state: {
        showSharePanel: boolean;
        showMorePanel: boolean;
    };
    toggleSharePanel(): void;
    toggleMorePanel(): void;
    readonly isAdmin: boolean;
    getDownloadableImageUrl(): string;
    openViewInRoom(): void;
    renderSaveButton(): JSX.Element;
    renderViewInRoomButton(): JSX.Element;
    renderShareButton(): JSX.Element;
    renderDownloadButton(): JSX.Element;
    renderEditButton(): JSX.Element;
    renderGenomeButton(): JSX.Element;
    render(): JSX.Element;
}
export declare const ArtworkActionsFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkActionsProps, "user" | "mediator" | "artwork" | "selectDefaultSlide">> & import("react-relay").ComponentRef>;
interface UtilButtonProps {
    name: "bell" | "edit" | "download" | "genome" | "heart" | "more" | "share" | "viewInRoom";
    href?: string;
    onClick?: () => void;
    selected?: boolean;
    label?: string;
    Icon?: React.ReactNode;
}
export declare class UtilButton extends React.Component<UtilButtonProps, {
    hovered: boolean;
}> {
    state: {
        hovered: boolean;
    };
    render(): JSX.Element;
}
export {};
