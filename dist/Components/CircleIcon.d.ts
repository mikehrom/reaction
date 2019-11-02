import React from "react";
import "../Assets/Fonts";
import { IconProps } from "./Icon";
interface CircleIconProps extends IconProps {
    ratio?: number;
}
declare const CircleIcon: React.SFC<CircleIconProps>;
export default CircleIcon;
