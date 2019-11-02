import { BoxProps } from "@artsy/palette";
import React from "react";
interface NavItemProps extends BoxProps {
    Menu?: React.FC;
    Overlay?: React.FC<{
        hover: boolean;
    }>;
    active?: boolean;
    className?: string;
    href?: string;
    onClick?: () => void;
}
export declare const NavItem: React.FC<NavItemProps>;
export {};
