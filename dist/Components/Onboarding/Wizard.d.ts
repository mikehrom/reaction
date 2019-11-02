import React from "react";
import { TrackingProp } from "react-tracking";
export interface Props {
    redirectTo?: string;
    tracking?: TrackingProp;
}
export interface State {
    finished: boolean;
}
export declare class Wizard extends React.Component<Props, State> {
    constructor(props: any);
    onNextButtonPressed: (increaseBy: number, history: any) => void;
    onFinish: () => void;
    render(): JSX.Element;
}
