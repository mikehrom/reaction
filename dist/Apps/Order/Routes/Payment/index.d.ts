import { Payment_me } from "__generated__/Payment_me.graphql";
import { Payment_order } from "__generated__/Payment_order.graphql";
import { PaymentRouteSetOrderPaymentMutation } from "__generated__/PaymentRouteSetOrderPaymentMutation.graphql";
import { Router } from "found";
import React, { Component } from "react";
import { ReactStripeElements } from "react-stripe-elements";
import { PaymentPicker } from "Apps/Order/Components/PaymentPicker";
import { Dialog } from "Apps/Order/Dialogs";
import { CommitMutation } from "Apps/Order/Utils/commitMutation";
export declare const ContinueButton: (props: any) => JSX.Element;
export interface PaymentProps extends ReactStripeElements.InjectedStripeProps {
    order: Payment_order;
    me: Payment_me;
    router: Router;
    dialog: Dialog;
    commitMutation: CommitMutation;
    isCommittingMutation: boolean;
}
interface PaymentState {
    isGettingCreditCardId: boolean;
}
export declare class PaymentRoute extends Component<PaymentProps, PaymentState> {
    state: PaymentState;
    paymentPicker: React.RefObject<PaymentPicker>;
    onContinue: () => Promise<void>;
    render(): JSX.Element;
    setOrderPayment(variables: PaymentRouteSetOrderPaymentMutation["variables"]): Promise<import("../../../../__generated__/PaymentRouteSetOrderPaymentMutation.graphql").PaymentRouteSetOrderPaymentMutationResponse>;
}
export declare const PaymentFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Pick<Pick<PaymentProps, "order" | "me" | "stripe" | "router" | "isCommittingMutation" | "commitMutation">, "order" | "me" | "stripe" | "router">, "order" | "me" | "stripe" | "router">> & import("react-relay").ComponentRef>;
export {};
