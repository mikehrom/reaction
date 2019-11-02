import PropTypes from "prop-types";
import { Component } from "react";
import React from "react";
import { StepProps } from "./types";
/**
 * Step within a Wizard.
 *
 * @example
 *
 * ```javascript
 * <Step label="One">
 *   {context =>
 *    <Button onClick={context.wizard.next}>Next</Button>
 *   }
 * </Step>
 * ```
 */
export declare class Step extends Component<StepProps> {
    static contextTypes: {
        wizard: PropTypes.Requireable<object>;
        form: PropTypes.Requireable<object>;
    };
    render(): React.ReactElement<import("./types").WizardStepChildProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<any, any, any>)>;
}
