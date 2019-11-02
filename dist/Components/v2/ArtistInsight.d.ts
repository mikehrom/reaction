import React from "react";
interface ArtistInsightProps {
    type: string;
    label: string;
    value?: string;
    entities?: ReadonlyArray<string>;
}
export declare class ArtistInsight extends React.Component<ArtistInsightProps> {
    state: {
        expanded: boolean;
    };
    handleExpand(): void;
    renderEntities(): JSX.Element;
    renderIcon(insightType: any): JSX.Element;
    render(): JSX.Element;
}
export {};
