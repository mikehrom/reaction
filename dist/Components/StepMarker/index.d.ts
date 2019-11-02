import { Component } from "react";
import { ReactNode } from "react";
export interface RenderProps {
    nextStep: () => void;
    previousStep: () => void;
    gotoStep: (index: number) => void;
    stepState: StepMarkerState;
    isComplete: () => boolean;
}
export interface StepMarkerProps {
    children?: (renderProps: RenderProps) => ReactNode | void;
    steps: MarkLabel[];
    style?: any;
    onChange?: any;
    currentStepIndex: number;
}
export interface StepMarkerState {
    currentStepIndex: number;
    steps: MarkState[];
}
export declare type MarkState = MarkLabel & {
    isActive: boolean;
    isComplete: boolean;
};
export interface MarkLabel {
    label?: string;
    onClick?: any;
}
export declare class StepMarker extends Component<StepMarkerProps, StepMarkerState> {
    constructor(props: StepMarkerProps);
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    computeStepState(props: any): {
        steps: any;
        currentStepIndex: any;
    };
    render(): JSX.Element;
}
