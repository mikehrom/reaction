import React from "react";
interface ErrorPageProps {
    code: number;
    message?: string;
    detail?: string;
}
export declare class ErrorPage extends React.Component<ErrorPageProps, null> {
    render(): JSX.Element;
}
export {};
