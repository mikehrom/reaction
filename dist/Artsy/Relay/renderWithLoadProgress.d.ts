import { SpinnerProps } from "@artsy/palette";
import React from "react";
import { ReadyState, RelayContainer } from "react-relay";
export declare const RouteSpinner: () => JSX.Element;
export declare const LoadingClassName = "relay-loading";
export declare type LoadProgressRenderer<P> = (readyState: ReadyState<P>) => React.ReactElement<RelayContainer<P>> | null;
export declare function renderWithLoadProgress<P>(Container: RelayContainer<P>, initialProps?: object, wrapperProps?: object, spinnerProps?: SpinnerProps): LoadProgressRenderer<P>;
