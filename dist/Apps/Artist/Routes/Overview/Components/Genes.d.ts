import { Genes_artist } from "__generated__/Genes_artist.graphql";
import React, { Component } from "react";
interface Props {
    artist: Genes_artist;
}
export declare class Genes extends Component<Props> {
    render(): JSX.Element;
}
export declare const GenesFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "artist">> & import("react-relay").ComponentRef>;
export {};
