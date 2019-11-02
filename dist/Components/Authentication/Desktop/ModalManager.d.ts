import { FormikProps } from "formik";
import { Component } from "react";
import { TrackingProp } from "react-tracking";
import { InputValues, ModalOptions, ModalType } from "Components/Authentication/Types";
export interface ModalManagerProps {
    submitUrls?: {
        [P in ModalType]: string;
    } & {
        facebook?: string;
        twitter?: string;
    };
    csrf?: string;
    redirectTo?: string;
    tracking?: TrackingProp;
    type?: ModalType;
    handleSubmit?: (type: ModalType, options: ModalOptions, values: InputValues, formikBag: FormikProps<InputValues>) => void;
    blurContainerSelector?: string;
    onSocialAuthEvent?: (options: any) => void;
    onModalOpen?: () => void;
    onModalClose?: () => void;
    showRecaptchaDisclaimer?: boolean;
    image?: string;
}
export interface ModalManagerState {
    currentType?: ModalType;
    options?: ModalOptions;
    error?: string;
    switchedForms: boolean;
}
export declare class ModalManager extends Component<ModalManagerProps, ModalManagerState> {
    state: ModalManagerState;
    openModal: (options: ModalOptions) => void;
    closeModal: () => void;
    handleTypeChange: (type: any) => void;
    setError: (err: any) => void;
    getSubtitle: () => string;
    render(): JSX.Element;
}
