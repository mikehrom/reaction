import React from "react";
import { ExtractProps } from "Utils/ExtractProps";
export interface QuickInputProps extends ExtractProps<typeof InputComponent> {
    block?: boolean;
    error?: string;
    label?: string;
    note?: string;
    rightAddOn?: JSX.Element;
    setTouched?: (fields: {
        [field: string]: boolean;
    }) => void;
    touchedOnChange?: boolean;
}
export interface QuickInputState {
    focused: boolean;
    value: string;
}
/**
 * Quick input. Renders the label inside of the textbox.
 *
 */
export declare class QuickInput extends React.Component<QuickInputProps, QuickInputState> {
    state: {
        focused: boolean;
        value: string;
        touchedOnChange: boolean;
    };
    UNSAFE_componentWillReceiveProps(newProps: any): void;
    onFocus: (e: any) => void;
    onBlur: (e: any) => void;
    onChange: (e: any) => void;
    render(): JSX.Element;
}
declare const InputComponent: import("styled-components").StyledComponentClass<React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & {
    showLabel?: boolean;
}, any, React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> & {
    showLabel?: boolean;
}>;
export default QuickInput;
