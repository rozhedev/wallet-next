import { InputHTMLAttributes } from "react";

export type T_ToggleModifClassNames = "toggle" | "toggle--disabled" | "toggle--readonly";

export type T_ToggleProps = InputHTMLAttributes<HTMLInputElement> & {
    classNameModif?: T_ToggleModifClassNames;
    children: React.ReactNode;
};
