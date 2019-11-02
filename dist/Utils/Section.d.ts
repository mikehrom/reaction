import React from "react";
export interface SectionProps {
    title?: string;
}
export declare class Section extends React.Component<SectionProps> {
    state: {
        expanded: boolean;
    };
    toggleExpand: () => void;
    render(): JSX.Element;
}
