import { TagArtworks_tag } from "__generated__/TagArtworks_tag.graphql";
import * as React from "react";
import { RelayPaginationProp } from "react-relay";
interface Filters {
    for_sale?: boolean;
    dimension_range?: string;
    price_range?: string;
    medium?: string;
}
interface Props extends Filters {
    relay: RelayPaginationProp;
    tag: TagArtworks_tag;
    onDropdownSelected: (slice: string, value: string) => void;
    onSortSelected: (sort: string) => void;
    onForSaleToggleSelected: () => void;
    sort?: string;
}
export declare class TagArtworks extends React.Component<Props, null> {
    renderDropdown(): JSX.Element[];
    renderForSaleToggle(): JSX.Element;
    renderArtworks(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<Props, "medium" | "sort" | "price_range" | "for_sale" | "tag" | "dimension_range" | "onDropdownSelected" | "onForSaleToggleSelected" | "onSortSelected">> & import("react-relay").ComponentRef>;
export default _default;
