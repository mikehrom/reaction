import React from "react";
export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    block?: boolean;
    description?: string;
    error?: string;
    ref?: React.RefObject<any>;
    title?: string;
}
/**
 * @deprecated in favor of our Design System Input component in @artsy/palette
 * https://palette.artsy.net/elements/inputs/input
 */
export declare const Input: React.ExoticComponent<InputProps>;
export declare const StyledInput: import("styled-components").StyledComponentClass<any, any, any>;
export declare const Title: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const InputError: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export default Input;
