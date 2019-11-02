import { FlexProps } from "@artsy/palette";
import { AdDimension, AdUnit } from "Components/Publishing/Typings";
import { SFC } from "react";
export interface DisplayAdProps extends FlexProps {
    adUnit: AdUnit;
    adDimension: AdDimension;
    targetingData: {
        is_testing: boolean;
        page_type: string;
        post_id: string;
        tags: string;
    };
    isSeries?: boolean;
    isStandard?: boolean;
}
export interface DisplayAdContainerProps extends FlexProps {
    isSeries?: boolean;
    isStandard?: boolean;
    adDimension?: AdDimension;
    isAdEmpty?: boolean;
}
export declare const DisplayAd: SFC<DisplayAdProps>;
