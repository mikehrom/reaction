import { TransactionDetailsSummaryItem_order } from "__generated__/TransactionDetailsSummaryItem_order.graphql";
import React from "react";
import { StepSummaryItemProps } from "Components/v2";
import { Omit } from "lodash";
export interface TransactionDetailsSummaryItemProps extends Omit<StepSummaryItemProps, "order"> {
    order: TransactionDetailsSummaryItem_order;
    offerOverride?: string | null;
    useLastSubmittedOffer?: boolean;
    offerContextPrice?: "LIST_PRICE" | "LAST_OFFER";
    showOfferNote?: boolean;
}
export declare class TransactionDetailsSummaryItem extends React.Component<TransactionDetailsSummaryItemProps> {
    static defaultProps: Partial<TransactionDetailsSummaryItemProps>;
    render(): JSX.Element;
    getOffer(): TransactionDetailsSummaryItem_order["lastOffer"] | null;
    shippingDisplayAmount: () => string;
    taxDisplayAmount: () => string;
    buyerTotalDisplayAmount: () => string;
    renderPriceEntry: () => JSX.Element;
    renderNoteEntry: () => JSX.Element;
}
export declare const TransactionDetailsSummaryItemFragmentContainer: React.ComponentType<import("react-relay").MappedFragmentProps<Pick<TransactionDetailsSummaryItemProps, "bottom" | "p" | "title" | "display" | "flexGrow" | "alignItems" | "alignContent" | "background" | "flexBasis" | "flexDirection" | "flexWrap" | "height" | "justifyContent" | "maxHeight" | "maxWidth" | "order" | "position" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "width" | "zIndex" | "onChange" | "locked" | "offerOverride" | "useLastSubmittedOffer" | "offerContextPrice" | "showOfferNote">> & import("react-relay").ComponentRef>;
