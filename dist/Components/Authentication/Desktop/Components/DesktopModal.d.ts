import { ModalOptions } from "Components/Authentication/Types";
import { ModalProps } from "Components/Modal/Modal";
import { Component } from "react";
import { TrackingProp } from "react-tracking";
export interface DesktopModalProps extends ModalProps {
    blurContainerSelector?: string;
    onClose: () => void;
    onTypeChange?: (options: ModalOptions) => void;
    show?: boolean;
    subtitle?: string;
    tracking?: TrackingProp;
}
export declare class DesktopModal extends Component<DesktopModalProps> {
    onClose: () => void;
    render(): JSX.Element;
}
