import * as React from "react";
import { FollowProps } from "../../Types";
interface Props extends FollowProps {
    searchQuery: string;
}
export default class ArtistList extends React.Component<Props, null> {
    render(): JSX.Element;
}
export {};
