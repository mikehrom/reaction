import { ArtworkSidebarCommercial_artwork } from "__generated__/ArtworkSidebarCommercial_artwork.graphql";
import { Mediator } from "Artsy";
import React, { FC } from "react";
import { RelayProp } from "react-relay";
import { ErrorWithMetadata } from "Utils/errors";
declare type EditionSet = ArtworkSidebarCommercial_artwork["edition_sets"][0];
export interface ArtworkSidebarCommercialContainerProps extends ArtworkSidebarCommercialProps {
    mediator: Mediator;
    user: User;
}
export interface ArtworkSidebarCommercialContainerState {
    isCommittingCreateOrderMutation: boolean;
    isCommittingCreateOfferOrderMutation: boolean;
    isErrorModalOpen: boolean;
    selectedEditionSet: EditionSet;
}
export declare class ArtworkSidebarCommercialContainer extends React.Component<ArtworkSidebarCommercialContainerProps, ArtworkSidebarCommercialContainerState> {
    state: ArtworkSidebarCommercialContainerState;
    firstAvailableEcommerceEditionSet(): EditionSet;
    renderSaleMessage(saleMessage: string): JSX.Element;
    renderEditionSet(editionSet: EditionSet, includeSelectOption: boolean): JSX.Element;
    renderEditionSets(includeSelectOption: boolean): JSX.Element;
    onMutationError: (error: ErrorWithMetadata) => void;
    onCloseModal: () => void;
    handleInquiry(): void;
    handleCreateOrder(): void;
    handleCreateOfferOrder(): void;
    render(): JSX.Element;
}
interface ArtworkSidebarCommercialProps {
    artwork: ArtworkSidebarCommercial_artwork;
    relay?: RelayProp;
}
export declare const ArtworkSidebarCommercial: FC<ArtworkSidebarCommercialProps>;
export declare const ArtworkSidebarCommercialFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSidebarCommercialProps, "artwork">> & import("react-relay").ComponentRef>;
export {};
