import * as React from "react";
import { RelayPaginationProp } from "react-relay";
import { GeneArtworks_gene } from "__generated__/GeneArtworks_gene.graphql";
interface Filters {
    for_sale?: boolean;
    dimension_range?: string;
    price_range?: string;
    medium?: string;
}
interface Props extends Filters {
    relay: RelayPaginationProp;
    gene: GeneArtworks_gene;
    onDropdownSelected: (slice: string, value: string) => void;
    onSortSelected: (sort: string) => void;
    onForSaleToggleSelected: () => void;
    onArtistModeToggleSelected: () => void;
    sort?: string;
}
export declare class GeneArtworks extends React.Component<Props, null> {
    renderDropdown(): JSX.Element[];
    renderArtistsModeToggle(): JSX.Element;
    renderForSaleToggle(): JSX.Element;
    renderArtworks(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "medium" | "sort" | "price_range" | "for_sale" | "gene" | "dimension_range" | "onDropdownSelected" | "onForSaleToggleSelected" | "onSortSelected" | "onArtistModeToggleSelected">> & import("react-relay").ComponentRef>;
export default _default;
