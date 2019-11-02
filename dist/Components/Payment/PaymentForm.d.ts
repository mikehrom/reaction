import { UserSettingsPayments_me } from "__generated__/UserSettingsPayments_me.graphql";
import React from "react";
import { RelayProp } from "react-relay";
import { ReactStripeElements } from "react-stripe-elements";
export interface PaymentFormProps extends ReactStripeElements.InjectedStripeProps {
    relay?: RelayProp;
    me: UserSettingsPayments_me;
}
declare const _default: React.ComponentType<PaymentFormProps>;
export default _default;
