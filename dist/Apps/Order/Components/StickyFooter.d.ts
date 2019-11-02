import { Component } from "react";
interface StickyFooterProps {
    artworkId: string | null;
    orderType: string | null;
}
export declare class StickyFooter extends Component<StickyFooterProps> {
    onClickReadFAQ(): void;
    onClickAskSpecialist(mediator: any): void;
    render(): JSX.Element;
}
export {};
