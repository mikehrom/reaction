import React from "react";
interface SelectableToggleProps {
    href?: string;
    text?: string;
    onSelect: (selected: boolean) => void;
    selected: boolean;
}
declare class SelectableToggle extends React.Component<SelectableToggleProps, null> {
    constructor(props: any);
    onSelect(): void;
    render(): JSX.Element;
}
export default SelectableToggle;
