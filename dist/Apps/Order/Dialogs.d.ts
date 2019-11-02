import { ModalDialogProps } from "Components/Modal/ModalDialog";
import React from "react";
import { Container } from "unstated";
interface DialogState {
    props: ModalDialogProps;
    onForceClose: () => Promise<void>;
}
export declare class DialogContainer extends Container<DialogState> {
    state: DialogState;
    /**
     * Hides the the currently-showing dialog
     */
    hide: () => void;
    /**
     * @param props the props for the ModalDialog
     * @param onForceClose if someone else shows a modal while yours is open this
     * will be called before your modal is closed. It can return a promise if you
     * need to do async stuff before the next modal is shown.
     * @returns a promise that is resolved after your modal is shown
     */
    show: ({ props, onForceClose, }: {
        props: ModalDialogProps;
        onForceClose: () => any;
    }) => Promise<unknown>;
    showConfirmDialog: ({ title, message, confirmButtonText, cancelButtonText, }: {
        title: React.ReactNode;
        message: React.ReactNode;
        confirmButtonText?: string;
        cancelButtonText?: string;
    }) => Promise<{
        confirmed: boolean;
    }>;
    /**
     * returns a promise that resolves to `true` if the user clicked the
     * continue button, and `false` if the modal was dismissed through other means.
     */
    showErrorDialog: ({ title, supportEmail, message, continueButtonText, }?: {
        title?: string;
        message?: React.ReactNode;
        supportEmail?: string;
        continueButtonText?: string;
    }) => Promise<boolean>;
}
declare const extractDialogHelpers: ({ show, hide, showErrorDialog, showConfirmDialog, }: DialogContainer) => {
    show: ({ props, onForceClose, }: {
        props: ModalDialogProps;
        onForceClose: () => any;
    }) => Promise<unknown>;
    hide: () => void;
    showErrorDialog: ({ title, supportEmail, message, continueButtonText, }?: {
        title?: string;
        message?: React.ReactNode;
        supportEmail?: string;
        continueButtonText?: string;
    }) => Promise<boolean>;
    showConfirmDialog: ({ title, message, confirmButtonText, cancelButtonText, }: {
        title: React.ReactNode;
        message: React.ReactNode;
        confirmButtonText?: string;
        cancelButtonText?: string;
    }) => Promise<{
        confirmed: boolean;
    }>;
};
export declare type Dialog = ReturnType<typeof extractDialogHelpers>;
/**
 * Injects the `dialog` prop into the given page component
 * @param Component
 */
export declare function injectDialog<R extends {
    dialog: Dialog;
}>(Component: React.ComponentType<R>): React.ComponentType<Omit<R, "dialog">>;
export declare const ConnectedModalDialog: () => JSX.Element;
export {};
