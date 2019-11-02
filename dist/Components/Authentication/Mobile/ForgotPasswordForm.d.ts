import { FormikProps } from "formik";
import React from "react";
import { FormProps, InputValues } from "../Types";
export declare class MobileForgotPasswordForm extends React.Component<FormProps> {
    onSubmit: (values: InputValues, formikBag: FormikProps<InputValues>) => void;
    render(): JSX.Element;
}
