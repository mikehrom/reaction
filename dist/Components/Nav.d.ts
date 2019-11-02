import React from "react";
export interface NavBarProps extends React.Props<HTMLDivElement> {
    logoLink?: string;
}
declare const NavBar: React.SFC<NavBarProps>;
export default NavBar;
