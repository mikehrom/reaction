/// <reference types="react" />
import { ModalType } from "./Types";
interface FooterProps {
    handleTypeChange?: (modalType: ModalType) => void;
    inline?: boolean;
    mode?: ModalType;
    onFacebookLogin?: (e: any) => void;
    showRecaptchaDisclaimer?: boolean;
}
export declare const Footer: (props: FooterProps) => JSX.Element;
export {};
