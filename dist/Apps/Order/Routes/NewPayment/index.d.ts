/// <reference types="stripe-v3" />
import { NewPayment_me } from "__generated__/NewPayment_me.graphql";
import { NewPayment_order } from "__generated__/NewPayment_order.graphql";
import { NewPaymentRouteSetOrderPaymentMutation } from "__generated__/NewPaymentRouteSetOrderPaymentMutation.graphql";
import { RouteConfig, Router } from "found";
import React, { Component } from "react";
import { RelayRefetchProp } from "react-relay";
import { ReactStripeElements } from "react-stripe-elements";
import { PaymentPicker } from "Apps/Order/Components/PaymentPicker";
import { Dialog } from "Apps/Order/Dialogs";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
export declare const ContinueButton: (props: any) => JSX.Element;
export interface NewPaymentProps extends ReactStripeElements.InjectedStripeProps {
    order: NewPayment_order;
    me: NewPayment_me;
    relay?: RelayRefetchProp;
    router: Router;
    route: RouteConfig;
    dialog: Dialog;
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
interface NewPaymentState {
    isGettingCreditCardId: boolean;
    stripe: stripe.Stripe;
}
export declare class NewPaymentRoute extends Component<NewPaymentProps, NewPaymentState> {
    paymentPicker: React.RefObject<PaymentPicker>;
    state: {
        isGettingCreditCardId: boolean;
        stripe: any;
    };
    componentDidMount(): void;
    onContinue: () => Promise<void>;
    render(): JSX.Element;
    fixFailedPayment(variables: NewPaymentRouteSetOrderPaymentMutation["variables"]): Promise<import("../../../../__generated__/NewPaymentRouteSetOrderPaymentMutation.graphql").NewPaymentRouteSetOrderPaymentMutationResponse>;
    handleFixFailedPaymentError(code: string): Promise<void>;
    artistId(): string;
    routeToArtistPage(): void;
}
export declare const NewPaymentFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<NewPaymentProps, "relay" | "order" | "router" | "me" | "stripe" | "isCommittingMutation" | "commitMutation" | "route">, "relay" | "order" | "router" | "me" | "stripe" | "route">, "order" | "router" | "me" | "stripe" | "route">> & import("react-relay").ComponentRef>;
export {};
