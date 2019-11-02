import React from "react";
import { QueryRendererProps } from "react-relay";
import { OperationBase, OperationDefaults } from "relay-runtime";
interface SystemQueryRendererState {
    isMounted: boolean;
}
export declare class SystemQueryRenderer<T extends OperationBase = OperationDefaults> extends React.Component<QueryRendererProps, SystemQueryRendererState> {
    state: {
        isMounted: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
