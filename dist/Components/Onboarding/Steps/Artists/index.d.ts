import React from "react";
import { StepProps } from "../../Types";
interface State {
    inputText: string;
    followCount: number;
    inputTextQuery: string;
}
export default class Artists extends React.Component<StepProps, State> {
    static slug: "artists";
    state: {
        inputText: string;
        inputTextQuery: string;
        followCount: number;
    };
    updateFollowCount(count: number): void;
    submit(): void;
    componentDidMount(): void;
    searchTextChanged: (e: any) => void;
    throttledTextChange: (inputText: any) => void;
    clearSearch(e: any): void;
    render(): JSX.Element;
}
export {};
