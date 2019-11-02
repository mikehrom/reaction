import React from "react";
import { QuickInputProps } from "./QuickInput";
export interface PasswordInputProps extends QuickInputProps {
    showPasswordMessage?: boolean;
}
export interface PasswordInputState {
    showPassword: boolean;
}
/**
 * Password input.
 * Renders the label inside of the textbox; shows/hides the password.
 *
 */
export declare class PasswordInput extends React.Component<PasswordInputProps, PasswordInputState> {
    state: {
        showPassword: boolean;
    };
    getRightViewForPassword(): JSX.Element;
    toggleShowPassword: () => void;
    render(): JSX.Element;
}
export default PasswordInput;
