import { SFC } from "react";
import { SpaceProps, WidthProps } from "styled-system";
interface ArtistShowBlockItemProps {
    imageUrl: string;
    blockWidth: WidthProps["width"];
    name: string;
    exhibitionInfo: string;
    partner: string;
    href: string;
    city?: string;
    pr?: SpaceProps["pr"];
    pb?: SpaceProps["pb"];
}
export declare const ArtistShowBlockItem: SFC<ArtistShowBlockItemProps>;
export {};
