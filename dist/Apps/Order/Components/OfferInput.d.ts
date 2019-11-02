import React from "react";
export interface OfferInputProps {
    id: string;
    showError?: boolean;
    onChange: (value: number) => void;
    onFocus?: () => void;
}
export declare class OfferInput extends React.Component<OfferInputProps> {
    render(): JSX.Element;
}
