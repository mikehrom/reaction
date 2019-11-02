import { Component } from "react";
interface Item {
    path: string;
    name: string;
}
interface BreadCrumbListProps {
    items: Item[];
}
export declare class BreadCrumbList extends Component<BreadCrumbListProps> {
    render(): JSX.Element;
}
export {};
