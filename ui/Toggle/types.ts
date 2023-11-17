export type ToggleProps = {
    id: string;
    nameAttr: string;
    classNameModif: "toggle" | "toggle--disabled" | "toggle--readonly";
    label: string;
    disabled: boolean;
    defaultChecked: boolean;
};
