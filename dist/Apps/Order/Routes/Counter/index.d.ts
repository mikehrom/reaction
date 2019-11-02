import { Counter_order } from "__generated__/Counter_order.graphql";
import { CounterSubmitMutation } from "__generated__/CounterSubmitMutation.graphql";
import { Dialog } from "Apps/Order/Dialogs";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
import { Router } from "found";
import React, { Component } from "react";
import { RelayProp } from "react-relay";
export interface CounterProps {
    order: Counter_order;
    relay?: RelayProp;
    router: Router;
    dialog: Dialog;
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
export declare class CounterRoute extends Component<CounterProps> {
    constructor(props: CounterProps);
    submitPendingOffer(variables: CounterSubmitMutation["variables"]): Promise<import("../../../../__generated__/CounterSubmitMutation.graphql").CounterSubmitMutationResponse>;
    onSubmitButtonPressed: () => Promise<void>;
    handleSubmitError(error: {
        code: string;
    }): void;
    onSuccessfulSubmit(): void;
    onChangeResponse: () => void;
    render(): JSX.Element;
}
export declare const CounterFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<CounterProps, "relay" | "order" | "router" | "isCommittingMutation" | "commitMutation">, "relay" | "order" | "router">, "order" | "router">> & import("react-relay").ComponentRef>;
