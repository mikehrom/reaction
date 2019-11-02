import { FlexProps } from "@artsy/palette";
import { FC } from "react";
export interface TrustSignalProps extends Omit<FlexProps, "flexDirection"> {
    Icon: JSX.Element;
    label: string;
    description: string | JSX.Element;
}
export declare const TrustSignal: FC<TrustSignalProps>;
