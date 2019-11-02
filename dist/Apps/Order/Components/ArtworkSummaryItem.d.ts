import { ArtworkSummaryItem_order } from "__generated__/ArtworkSummaryItem_order.graphql";
import { Omit } from "lodash";
import React from "react";
import { FlexProps } from "@artsy/palette";
export interface ArtworkSummaryItemProps extends Omit<FlexProps, "order"> {
    order: ArtworkSummaryItem_order;
    className?: string;
}
export declare const ArtworkSummaryItemFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<ArtworkSummaryItemProps, "bottom" | "p" | "display" | "flexGrow" | "alignItems" | "alignContent" | "background" | "flexBasis" | "flexDirection" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "order" | "position" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "width" | "zIndex" | "className">> & import("react-relay").ComponentRef>;
