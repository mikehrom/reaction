import React from "react";
interface Props {
    children?: any;
}
export declare class ErrorBoundary extends React.Component<Props> {
    componentDidCatch(error: any, errorInfo: any): void;
    render(): any;
}
export {};
