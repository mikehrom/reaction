import React from "react";
export interface CtaProps {
    action(): void;
    text: React.ReactNode;
}
export interface ModalDialogProps {
    show?: boolean;
    heading: React.ReactNode;
    detail?: React.ReactNode;
    primaryCta: CtaProps;
    secondaryCta?: CtaProps;
    onClose?: () => void;
}
export declare class ModalDialog extends React.Component<ModalDialogProps> {
    render(): JSX.Element;
}
export declare const ModalButton: React.SFC<{
    secondary?: boolean;
    onClick: () => void;
}>;
