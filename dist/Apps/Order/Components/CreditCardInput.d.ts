/// <reference types="styled-components" />
/// <reference types="stripe-v3" />
import React from "react";
export declare const StyledCardElement: import("styled-components").StyledComponentClass<import("react-stripe-elements").ReactStripeElements.ElementProps, any, Pick<import("react-stripe-elements").ReactStripeElements.ElementProps, "style" | "id" | "className" | "onChange" | "value" | "onFocus" | "onBlur" | "placeholder" | "paymentRequest" | "elementRef" | "onReady" | "classes" | "hidePostalCode" | "hideIcon" | "iconStyle"> & {
    theme?: any;
}>;
interface CreditCardInputProps {
    error?: stripe.Error;
    onChange?: (response: stripe.elements.ElementChangeResponse) => void;
}
interface CreditCardInputState {
    focused: boolean;
}
export declare class CreditCardInput extends React.Component<CreditCardInputProps, CreditCardInputState> {
    state: {
        focused: boolean;
    };
    cardInputElement: any;
    onChange(response: stripe.elements.ElementChangeResponse): void;
    render(): JSX.Element;
}
export {};
