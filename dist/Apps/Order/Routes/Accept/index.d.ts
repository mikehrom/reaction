import { Accept_order } from "__generated__/Accept_order.graphql";
import { RouteConfig, Router } from "found";
import React, { Component } from "react";
import { RelayProp } from "react-relay";
import { Dialog } from "Apps/Order/Dialogs";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
interface AcceptProps {
    order: Accept_order;
    relay?: RelayProp;
    router: Router;
    route: RouteConfig;
    dialog: Dialog;
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
export declare class Accept extends Component<AcceptProps> {
    acceptOffer(): Promise<import("../../../../__generated__/AcceptOfferMutation.graphql").AcceptOfferMutationResponse>;
    onSubmit: () => Promise<void>;
    handleAcceptError(error: {
        code: string;
        data: string;
    }): Promise<void>;
    showCardFailureDialog(props: {
        title: string;
        message: string;
    }): Promise<void>;
    onChangeResponse: () => void;
    artistId(): string;
    routeToArtistPage(): void;
    render(): JSX.Element;
}
export declare const AcceptFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<AcceptProps, "relay" | "order" | "router" | "isCommittingMutation" | "commitMutation" | "route">, "relay" | "order" | "router" | "route">, "order" | "router" | "route">> & import("react-relay").ComponentRef>;
export {};
