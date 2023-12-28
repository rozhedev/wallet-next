import { UseFormRegister, UseFormWatch, FieldErrors } from "react-hook-form";
import { TAuthFieldsetProps } from "@/types/data/shared";
import { TRegisterForm } from "@/types/data/forms";

export type TRegisterData = {
    passArr: string[];
    register: UseFormRegister<TRegisterForm>;
    errors: FieldErrors<TRegisterForm>;
    watch?: UseFormWatch<TRegisterForm>;
};

export type TRegisterDetailsProps = TAuthFieldsetProps & TRegisterData;
