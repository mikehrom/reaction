import { FormikProps } from "formik";
import { Component } from "react";
import { FormProps, InputValues } from "../Types";
export interface ForgotPasswordFormState {
    error?: string;
}
export declare class ForgotPasswordForm extends Component<FormProps, ForgotPasswordFormState> {
    state: {
        error: string;
    };
    onSubmit: (values: InputValues, formikBag: FormikProps<InputValues>) => void;
    render(): JSX.Element;
}
