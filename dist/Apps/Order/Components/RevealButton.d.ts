import React from "react";
interface RevealButtonProps {
    buttonLabel: string;
    align?: "left" | "right";
}
interface RevealButtonState {
    showing: boolean;
}
export declare class RevealButton extends React.Component<RevealButtonProps, RevealButtonState> {
    state: RevealButtonState;
    render(): JSX.Element;
}
export {};
