import React from "react";
interface EmailProps {
    signupUrl: string;
}
interface EmailState {
    value: string;
    error: boolean;
    disabled: boolean;
    message: string;
}
export declare class InstantArticleEmailSignup extends React.Component<EmailProps, EmailState> {
    constructor(props: any);
    onClick: () => void;
    flashMessage: (message: any, error: any) => void;
    onInputChange: (e: any) => void;
    render(): JSX.Element;
}
export {};
