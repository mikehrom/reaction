/// <reference types="react" />
import { FormikActions, FormikProps } from "formik";
export declare type FormValues = {
    [key: string]: any;
} | null;
export declare type FormErrors = {
    [key: string]: any;
} | null;
export declare type StepElement = React.ReactElement<StepProps>;
export interface WizardStepChildProps {
    form: any;
    wizard: any;
}
export interface StepProps {
    label?: string;
    validate?: (values: FormValues) => FormErrors;
    validationSchema?: object;
    children: React.ComponentClass<WizardStepChildProps> | React.SFC<WizardStepChildProps>;
    onSubmit?: (values: FormValues, actions?: FormikActions<FormValues>) => boolean | Promise<boolean>;
}
export interface WizardRenderProps {
    currentStep: StepElement;
    isLastStep: boolean;
    previous: (e: React.FormEvent<any> | null, values: FormValues) => void;
    next: (e: React.FormEvent<any> | null, values: FormValues) => void;
    currentStepIndex: number;
    steps: StepElement[];
    shouldAllowNext: boolean;
    progressPercentage: number;
}
export interface WizardContext {
    wizard: WizardRenderProps;
    form: FormikProps<any>;
}
