import { Component } from "react";
import { NewsBylineProps } from "./NewsByline";
interface Props extends NewsBylineProps {
    editSource?: any;
}
export declare class DateSource extends Component<Props> {
    constructor(props: Props);
    onClick(): void;
    getNewsSource: (source: any) => JSX.Element;
    render(): JSX.Element;
}
export {};
