import React from "react";
interface GenericSearchResultItemProps {
    imageUrl: string;
    name: string;
    description?: string;
    href: string;
    entityType: string;
    term: string;
    index: number;
    id: string;
}
export declare class GenericSearchResultItem extends React.Component<GenericSearchResultItemProps> {
    handleClick(): void;
    render(): JSX.Element;
}
export {};
