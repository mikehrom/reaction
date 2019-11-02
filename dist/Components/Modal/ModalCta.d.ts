import { SFC } from "react";
export interface CtaProps {
    isFixed: boolean;
    text: string;
    onClick: () => void;
}
export declare const ModalCta: SFC<{
    cta?: CtaProps;
    hasImage?: boolean;
    onClose: () => void;
}>;
