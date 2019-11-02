import React from "react";
export { Footer } from "./Footer";
export { TermsOfServiceCheckbox } from "./TermsOfServiceCheckbox";
import { ButtonProps } from "@artsy/palette";
export declare const FormContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement> & {
    height?: number;
}, any, React.ClassAttributes<HTMLFormElement> & React.FormHTMLAttributes<HTMLFormElement> & {
    height?: number;
}>;
export declare const MobileInnerWrapper: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const MobileContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const BackButton: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const ErrorContainer: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps & {
    show: boolean;
}, any, React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & import("@artsy/palette").BoxProps & {
    show: boolean;
}>;
export declare const Error: (props: {
    children: any;
    show: boolean;
}) => JSX.Element;
export declare const MobileHeader: (props: {
    children: string | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
}) => JSX.Element;
export declare const FooterText: (props: {
    children: any;
    mt?: number;
}) => JSX.Element;
export declare const ForgotPassword: (props: {
    onClick: () => void;
}) => JSX.Element;
export declare const SubmitButton: (props: ButtonProps) => JSX.Element;
export declare const CaptchaTerms: () => JSX.Element;
