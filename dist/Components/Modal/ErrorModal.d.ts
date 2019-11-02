import React from "react";
interface ErrorModalProps {
    show?: boolean;
    headerText?: string;
    detailText?: string;
    contactEmail?: string;
    closeText?: string;
    onClose?: () => void;
    ctaAction?: () => void;
}
/**
 * @deprecated use `Dialogs` and `injectDialogs` instead
 */
export declare class ErrorModal extends React.Component<ErrorModalProps> {
    static defaultProps: {
        headerText: string;
        closeText: string;
    };
    close: () => void;
    render(): JSX.Element;
}
export {};
