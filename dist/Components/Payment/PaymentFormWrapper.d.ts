/// <reference types="stripe-v3" />
import React from "react";
import { RelayProp } from "react-relay";
declare global {
    interface Window {
        Stripe?: (key: string) => stripe.Stripe;
    }
}
interface PaymentFormWrapperState {
    stripe: stripe.Stripe;
}
export interface PaymentFormWrapperProps {
    relay?: RelayProp;
    me: any;
}
export declare class PaymentFormWrapper extends React.Component<PaymentFormWrapperProps, PaymentFormWrapperState> {
    state: {
        stripe: any;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
