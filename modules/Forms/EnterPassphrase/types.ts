import { UseFormRegister, Control, FieldErrors } from "react-hook-form";
import { TAuthFieldsetProps } from "@/types/data/shared";
import { TRegisterForm } from "@/types/data/forms";

export type TEnterPassphraseProps = TAuthFieldsetProps & {
    legend: string;
    register: UseFormRegister<TRegisterForm>;
    control: Control<TRegisterForm, any>;
    errors: FieldErrors<TRegisterForm>;
};
