import { TextAreaChange } from "@artsy/palette";
import React from "react";
export declare const OfferNote: React.FC<{
    onChange(change: TextAreaChange): void;
    artworkId: string;
    counteroffer?: boolean;
}>;
