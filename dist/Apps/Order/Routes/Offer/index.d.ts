import { TextAreaChange } from "@artsy/palette";
import { Offer_order } from "__generated__/Offer_order.graphql";
import { OfferMutation } from "__generated__/OfferMutation.graphql";
import { Dialog } from "Apps/Order/Dialogs";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
import { Router } from "found";
import React, { Component } from "react";
import { RelayProp } from "react-relay";
export interface OfferProps {
    order: Offer_order;
    relay?: RelayProp;
    router: Router;
    dialog: Dialog;
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
export interface OfferState {
    offerValue: number;
    offerNoteValue: TextAreaChange;
    formIsDirty: boolean;
    lowSpeedBumpEncountered: boolean;
    highSpeedBumpEncountered: boolean;
}
export declare class OfferRoute extends Component<OfferProps, OfferState> {
    state: OfferState;
    onOfferInputFocus(): void;
    showLowSpeedbump(): void;
    showHighSpeedbump(): void;
    addInitialOfferToOrder(variables: OfferMutation["variables"]): Promise<import("../../../../__generated__/OfferMutation.graphql").OfferMutationResponse>;
    handleSubmitError(error: {
        code: string;
    }): void;
    onContinueButtonPressed: () => Promise<void>;
    render(): JSX.Element;
}
export declare const OfferFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<OfferProps, "relay" | "order" | "router" | "isCommittingMutation" | "commitMutation">, "relay" | "order" | "router">, "order" | "router">> & import("react-relay").ComponentRef>;
