import React from "react";
interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    href: string;
}
declare const NavItem: React.SFC<NavLinkProps>;
export default NavItem;
