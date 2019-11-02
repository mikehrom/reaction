import * as React from "react";
import { FollowProps } from "../../Types";
export interface Props extends FollowProps {
    searchQuery: string;
}
export default class GeneList extends React.Component<Props, any> {
    render(): JSX.Element;
}
