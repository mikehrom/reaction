import { PricingContext_artwork } from "__generated__/PricingContext_artwork.graphql";
import React from "react";
import { FilterCategory } from "./../Utils/createCollectUrl";
interface PricingContextProps {
    artwork: PricingContext_artwork;
}
export declare class PricingContext extends React.Component<PricingContextProps> {
    trackImpression(): void;
    barchartHover(): void;
    collectPageLinkClick({ dimension, category, artistId, }: {
        dimension: "SMALL" | "MEDIUM" | "LARGE" | null;
        category: FilterCategory;
        artistId: string;
    }): void;
    render(): JSX.Element;
}
export declare const PricingContextFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<PricingContextProps, "artwork">> & import("react-relay").ComponentRef>;
export {};
