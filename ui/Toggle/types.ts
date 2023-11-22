export type T_ToggleModifClassNames = "toggle" | "toggle--disabled" | "toggle--readonly";

export type T_ToggleProps = {
    id: string;
    nameAttr: string;
    classNameModif?: T_ToggleModifClassNames;
    label: string;
    disabled?: boolean;
    defaultChecked?: boolean;
};
