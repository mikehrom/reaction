import React from "react";
import { TrackingProp } from "react-tracking";
interface EmailPanelProps {
    signupUrl: string;
    tracking?: TrackingProp;
}
interface EmailPanelState {
    value: string;
    error: boolean;
    submitted: boolean;
    disabled: boolean;
    message: string;
}
export declare class EmailPanel extends React.Component<EmailPanelProps, EmailPanelState> {
    state: {
        value: string;
        error: boolean;
        submitted: boolean;
        disabled: boolean;
        message: string;
    };
    onClick: () => void;
    flashMessage: (message: any, error: any, submitted: any) => void;
    onInputChange: (e: any) => void;
    render(): JSX.Element;
}
export {};
