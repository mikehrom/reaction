import React from "react";
export declare class Eoy2018ArticleHeader extends React.Component<{
    images?: any;
    isMobile?: boolean;
    isTablet?: boolean;
    isTest?: boolean;
}> {
    getImageUrls: (gridSize: any) => any[];
    imagesGrid: (gridSize: any) => JSX.Element[];
    render(): JSX.Element;
}
