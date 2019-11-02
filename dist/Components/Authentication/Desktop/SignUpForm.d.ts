import { FormProps, InputValues } from "Components/Authentication/Types";
import { FormikProps } from "formik";
import { Component } from "react";
export interface SignUpFormState {
    error?: string;
}
export declare class SignUpForm extends Component<FormProps, SignUpFormState> {
    state: {
        error: string;
    };
    onSubmit: (values: InputValues, formikBag: FormikProps<InputValues>) => void;
    render(): JSX.Element;
}
