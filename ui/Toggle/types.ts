export type ToggleModifClassNames = "toggle" | "toggle--disabled" | "toggle--readonly";

export type ToggleProps = {
    id: string;
    nameAttr: string;
    classNameModif?: ToggleModifClassNames;
    label: string;
    disabled?: boolean;
    defaultChecked?: boolean;
};
