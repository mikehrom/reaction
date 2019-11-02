import React from "react";
import { Intents } from "__generated__/CollectorIntentUpdateCollectorProfileMutation.graphql";
import { SystemContextProps } from "Artsy";
import { StepProps } from "../Types";
declare type Props = StepProps & SystemContextProps;
interface State {
    selectedOptions: {
        [option: string]: boolean;
    };
    error?: string;
}
export declare class CollectorIntentComponent extends React.Component<Props, State> {
    static slug: "interests";
    static intentEnum: {
        "buy art & design": string;
        "sell art & design": string;
        "research art prices": string;
        "learn about art": string;
        "find out about new exhibitions": string;
        "read art market news": string;
    };
    constructor(props: any);
    onOptionSelected: (index: any) => void;
    selectedIntents(): Intents[];
    submit(): void;
    render(): JSX.Element;
}
declare const CollectorIntent: (props: any) => JSX.Element;
export default CollectorIntent;
