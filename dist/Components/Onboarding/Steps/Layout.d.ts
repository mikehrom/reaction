import React from "react";
import { MultiButtonState } from "../../Buttons/MultiStateButton";
interface Props {
    title: string;
    subtitle: string;
    onNextButtonPressed?: () => void;
    isLastStep?: boolean | null;
    buttonState?: MultiButtonState | null;
}
export declare class Layout extends React.Component<Props, null> {
    render(): JSX.Element;
}
export {};
