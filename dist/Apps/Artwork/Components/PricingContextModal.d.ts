import React from "react";
interface State {
    isModalOpen?: boolean;
}
export declare class PricingContextModal extends React.Component<State> {
    state: {
        isModalOpen: boolean;
    };
    openModal(): void;
    closeModal: () => void;
    render(): JSX.Element;
}
export {};
