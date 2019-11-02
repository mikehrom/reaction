/// <reference types="styled-components" />
/// <reference types="stripe-v3" />
import { Address } from "Apps/Order/Components/AddressForm";
import { FormikActions } from "formik";
import React from "react";
import { ReactStripeElements } from "react-stripe-elements";
export declare const StyledCardElement: import("styled-components").StyledComponentClass<ReactStripeElements.ElementProps, any, Pick<ReactStripeElements.ElementProps, "style" | "id" | "className" | "onChange" | "value" | "onFocus" | "onBlur" | "placeholder" | "paymentRequest" | "elementRef" | "onReady" | "classes" | "hidePostalCode" | "hideIcon" | "iconStyle"> & {
    theme?: any;
}>;
export interface FormResult {
    token: stripe.Token;
    phoneNumber: string;
}
export interface FormValues {
    address: Address;
    creditCard: string;
    agreeToTerms: boolean;
}
declare type TrackErrors = (errors: string[]) => void;
export interface RegistrationFormProps extends ReactStripeElements.InjectedStripeProps {
    onSubmit: (formikActions: FormikActions<object>, result: FormResult) => void;
    trackSubmissionErrors: TrackErrors;
}
export declare const RegistrationForm: React.FC<RegistrationFormProps>;
export declare const StripeWrappedRegistrationForm: React.FC<RegistrationFormProps>;
export {};
