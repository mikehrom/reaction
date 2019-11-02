import React from "react";
import { FlexProps } from "@artsy/palette";
export interface StepSummaryItemProps extends FlexProps {
    title?: React.ReactNode;
    onChange?: () => void;
    locked?: boolean;
}
export declare const StepSummaryItem: React.SFC<StepSummaryItemProps>;
