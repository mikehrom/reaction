import * as React from "react";
export declare const LinkContainer: import("styled-components").StyledComponentClass<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
interface Props extends React.HTMLProps<HTMLAnchorElement> {
    item?: any;
    id: string;
    _id?: string;
    __id?: string;
    name: string;
    image_url: string;
}
interface State {
    selected: boolean;
}
export default class ItemLink extends React.Component<Props, State> {
    constructor(props: any, state: any);
    onClick(e: any): void;
    render(): JSX.Element;
}
export {};
