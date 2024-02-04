import { TAuthFieldsetProps } from "@/types/data/shared";

export type T_TextareaPassphraseProps = TAuthFieldsetProps & {
    legend: string;
    textareaId: string;
};