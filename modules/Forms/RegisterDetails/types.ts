import { UseFormRegister, FieldErrors } from "react-hook-form";
import { TAuthFieldsetProps } from "@/types/data/shared";
import { TRegisterForm } from "@/types/data/forms";

export type TRegisterData = {
    register: UseFormRegister<TRegisterForm>;
    errors: FieldErrors<TRegisterForm>;
    passArr: string[];
};

export type TRegisterDetailsProps = TAuthFieldsetProps & TRegisterData;
