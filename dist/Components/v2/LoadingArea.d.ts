import { ReactNode, SFC } from "react";
export interface LoadingAreaState {
    isLoading: boolean;
}
interface Props extends LoadingAreaState {
    children: ReactNode;
    isLoading: boolean;
    transitionTime?: string;
}
export declare const LoadingArea: SFC<Props>;
export {};
