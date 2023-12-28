import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { TRegisterForm } from "@/types/data/forms";

export type TCheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    children: React.ReactNode;
    defaultChecked?: boolean;
    id: Path<TRegisterForm>;
    register: UseFormRegister<TRegisterForm>;
    required: boolean;
};
