import React from "react";
import { SeoProductsForArtworks_artworks } from "__generated__/SeoProductsForArtworks_artworks.graphql";
interface SeoProductsProps {
    artworks: SeoProductsForArtworks_artworks;
}
export declare class SeoProducts extends React.Component<SeoProductsProps> {
    render(): JSX.Element[];
}
export declare const SeoProductsForArtworks: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<SeoProductsProps, "artworks">> & import("react-relay").ComponentRef>;
export {};
