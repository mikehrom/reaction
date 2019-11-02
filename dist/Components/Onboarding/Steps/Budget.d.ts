import React from "react";
import { SystemContextProps } from "Artsy";
import { StepProps } from "../Types";
interface State {
    selection: number | null;
}
export declare class BudgetComponent extends React.Component<StepProps & SystemContextProps, State> {
    static slug: "budget";
    options: {
        "UNDER $500": number;
        "UNDER $2,500": number;
        "UNDER $5,000": number;
        "UNDER $10,000": number;
        "UNDER $25,000": number;
        "UNDER $50,000": number;
        "NO BUDGET IN MIND": number;
    };
    state: {
        selection: any;
    };
    onOptionSelected: (index: number) => void;
    submit(): void;
    render(): JSX.Element;
}
declare const Budget: (props: any) => JSX.Element;
export default Budget;
