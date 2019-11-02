import React from "react";
export declare const RenderPending: () => JSX.Element;
export declare const RenderReady: React.FC<{
    elements: React.ReactNode;
}>;
export declare const RenderError: React.FC<{
    error: {
        status?: number;
        data?: any;
    };
}>;
