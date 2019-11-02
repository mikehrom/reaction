import { Reject_order } from "__generated__/Reject_order.graphql";
import { RejectOfferMutation } from "__generated__/RejectOfferMutation.graphql";
import { Router } from "found";
import React, { Component } from "react";
import { Dialog } from "Apps/Order/Dialogs";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
import { RelayProp } from "react-relay";
interface RejectProps {
    order: Reject_order;
    relay?: RelayProp;
    router: Router;
    dialog: Dialog;
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
export declare class Reject extends Component<RejectProps> {
    rejectOffer(variables: RejectOfferMutation["variables"]): Promise<import("../../../../__generated__/RejectOfferMutation.graphql").RejectOfferMutationResponse>;
    onSubmit: () => Promise<void>;
    onChangeResponse: () => void;
    render(): JSX.Element;
}
export declare const RejectFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<RejectProps, "relay" | "order" | "router" | "isCommittingMutation" | "commitMutation">, "relay" | "order" | "router">, "order" | "router">> & import("react-relay").ComponentRef>;
export {};
