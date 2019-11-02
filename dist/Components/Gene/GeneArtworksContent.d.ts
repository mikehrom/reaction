import { GeneArtworksContent_filtered_artworks } from "__generated__/GeneArtworksContent_filtered_artworks.graphql";
import * as React from "react";
import { RelayPaginationProp } from "react-relay";
interface Props {
    relay: RelayPaginationProp;
    filtered_artworks: GeneArtworksContent_filtered_artworks;
    geneID: string;
}
interface State {
    loading: boolean;
    page: number;
}
export declare class GeneArtworksContent extends React.Component<Props, State> {
    private finishedPaginatingWithError;
    state: {
        loading: boolean;
        page: number;
    };
    loadMoreArtworks(): void;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "filtered_artworks" | "geneID">> & import("react-relay").ComponentRef>;
export default _default;
