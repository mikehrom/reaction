import { TextAreaChange } from "@artsy/palette";
import { Respond_order } from "__generated__/Respond_order.graphql";
import { RespondCounterOfferMutation } from "__generated__/RespondCounterOfferMutation.graphql";
import { Dialog } from "Apps/Order/Dialogs";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
import { Router } from "found";
import React, { Component } from "react";
import { RelayProp } from "react-relay";
export interface RespondProps {
    order: Respond_order;
    relay?: RelayProp;
    router: Router;
    dialog: Dialog;
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
export interface RespondState {
    offerValue: number;
    offerNoteValue: TextAreaChange;
    formIsDirty: boolean;
    responseOption: "ACCEPT" | "COUNTER" | "DECLINE";
    lowSpeedBumpEncountered: boolean;
    highSpeedBumpEncountered: boolean;
}
export declare const logger: {
    log: (...messages: any[]) => void;
    warn: (...warnings: any[]) => void;
    error: (...errors: any[]) => void;
};
export declare class RespondRoute extends Component<RespondProps, RespondState> {
    state: RespondState;
    onOfferInputFocus(): void;
    showLowSpeedbump(): void;
    showHighSpeedbump(): void;
    onContinueButtonPressed: () => Promise<void>;
    createCounterOffer(variables: RespondCounterOfferMutation["variables"]): Promise<import("../../../../__generated__/RespondCounterOfferMutation.graphql").RespondCounterOfferMutationResponse>;
    render(): JSX.Element;
}
export declare const RespondFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<RespondProps, "relay" | "order" | "router" | "isCommittingMutation" | "commitMutation">, "relay" | "order" | "router">, "order" | "router">> & import("react-relay").ComponentRef>;
