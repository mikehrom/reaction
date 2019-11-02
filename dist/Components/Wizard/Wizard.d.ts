import { FormikActions } from "formik";
import React from "react";
import { StepElement, StepProps, WizardRenderProps } from "./types";
import { FormValues } from "./types";
interface WizardProps {
    onComplete?: (values?: FormValues, actions?: FormikActions<FormValues>) => void;
    initialValues?: any;
    steps?: StepElement[];
    children?: ((props: {
        wizard: WizardRenderProps;
        form: any;
    }) => React.ReactElement<any>) | StepElement | StepElement[];
}
interface WizardState {
    currentStepIndex: number;
}
/**
 * Generate a multi-step wizard wrapped in a form.
 * steps can be an Array of children of the shape
 *
 * The wizard can be used in two different ways,
 * using the render prop API or passing steps in
 * as children.
 *
 * @example
 *
 * ```javascript
 * <Wizard steps={[<Step />, <Step />]}>
 *  {({ wizard, form }) => {
 *   <div>
 *     Current step: {wizard.currentStepIndex}
 *     <div>{wizard.currentStep}</div>
 *     <NextButton onClick={wizard.next} />
 *   </div>
 *  }}
 * </Wizard>
 * ```
 *
 * or
 *
 * ```javascript
 * <Wizard>
 *   <Step />
 *   <Step />
 * </Wizard>
 * ```
 */
export declare class Wizard extends React.Component<WizardProps, WizardState> {
    static defaultProps: {
        initialValues: any;
    };
    constructor(props: any);
    readonly steps: StepElement[];
    readonly currentStep: React.ReactElement<StepProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    readonly isLastStep: boolean;
    readonly wizardProps: WizardRenderProps;
    next: (e: React.FormEvent<any>, values: any) => void;
    previous: (e: React.FormEvent<any>, values: any) => void;
    handleSubmit: (values: FormValues, actions?: FormikActions<FormValues>) => void;
    render(): JSX.Element;
}
export {};
