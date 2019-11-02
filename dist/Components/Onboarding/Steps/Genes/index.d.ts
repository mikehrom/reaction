import * as React from "react";
import { StepProps } from "../../Types";
interface State {
    inputText: string;
    followCount: number;
    inputTextQuery: string;
}
export default class Genes extends React.Component<StepProps, State> {
    static slug: string;
    state: {
        inputText: string;
        inputTextQuery: string;
        followCount: number;
    };
    updateFollowCount(count: number): void;
    componentDidMount(): void;
    searchTextChanged: (e: any) => void;
    throttledTextChange: (inputText: any) => void;
    clearSearch(e: any): void;
    handleNextButtonClick(): void;
    render(): JSX.Element;
}
export {};
