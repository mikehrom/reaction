import React from "react";
interface Props {
    color?: string;
    logo: string;
    url: string;
    trackingData?: any;
    margin?: string;
}
export declare class PartnerInline extends React.Component<Props, null> {
    static defaultProps: {
        margin: string;
    };
    onPartnerClick(event: any): void;
    render(): JSX.Element;
}
export {};
