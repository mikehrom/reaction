import { Artists_gene } from "__generated__/Artists_gene.graphql";
import * as React from "react";
import { RelayPaginationProp } from "react-relay";
interface Props {
    relay: RelayPaginationProp;
    gene: Artists_gene;
    onDropdownSelected: (slice: string, value: string) => void;
    onForSaleToggleSelected: () => void;
}
interface State {
    loading: boolean;
}
export declare class Artists extends React.Component<Props, State> {
    state: {
        loading: boolean;
    };
    loadMoreArtists(): void;
    renderForSaleToggle(): JSX.Element;
    renderArtistFilter(): JSX.Element;
    renderArtistDropdown(): JSX.Element[];
    render(): JSX.Element;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "gene" | "onDropdownSelected" | "onForSaleToggleSelected">> & import("react-relay").ComponentRef>;
export default _default;
