import React, { Component } from "react";
import { ExtractProps } from "Utils/ExtractProps";
export interface CheckboxState {
    checked: boolean;
}
export declare type CheckboxProps = ExtractProps<typeof CheckboxInput>;
/**
 * @deprecated in favor of our Design System Checkbox component in @artsy/palette
 * https://palette.artsy.net/elements/inputs/checkbox
 */
export declare class Checkbox extends Component<CheckboxProps, CheckboxState> {
    constructor(props: any);
    onChange: (event: any) => void;
    render(): JSX.Element;
}
declare const CheckboxInput: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
}, any, React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean;
}>;
export default Checkbox;
