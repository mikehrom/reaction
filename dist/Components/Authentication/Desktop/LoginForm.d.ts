import { FormProps, InputValues } from "Components/Authentication/Types";
import { FormikProps } from "formik";
import { Component } from "react";
export interface LoginFormState {
    error: string;
}
export declare class LoginForm extends Component<FormProps, LoginFormState> {
    state: {
        error: string;
    };
    onSubmit: (values: InputValues, formikBag: FormikProps<InputValues>) => void;
    render(): JSX.Element;
}
