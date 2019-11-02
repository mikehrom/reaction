import React from "react";
import { TrackingProp } from "react-tracking";
import { InputValues, ModalOptions, ModalType, SubmitHandler } from "./Types";
export interface FormSwitcherProps {
    error?: string;
    handleSubmit: SubmitHandler;
    handleTypeChange?: (e: string) => void;
    isMobile?: boolean;
    isStatic?: boolean;
    onFacebookLogin?: (e: Event) => void;
    onTwitterLogin?: (e: Event) => void;
    options: ModalOptions;
    title?: string;
    showRecaptchaDisclaimer?: boolean;
    submitUrls?: {
        [P in ModalType]: string;
    } & {
        facebook?: string;
        twitter?: string;
    };
    tracking?: TrackingProp;
    type: ModalType;
    values?: InputValues;
    onSocialAuthEvent?: (options: any) => void;
    onBackButtonClicked?: (e: Event) => void;
}
export interface State {
    type?: ModalType;
}
export declare class FormSwitcher extends React.Component<FormSwitcherProps, State> {
    static defaultProps: Partial<FormSwitcherProps>;
    constructor(props: any);
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    handleTypeChange: (newType: ModalType) => void;
    render(): JSX.Element;
}
