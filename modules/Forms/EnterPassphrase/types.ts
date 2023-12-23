import { TAuthFieldsetProps } from "@/types/data/shared";

export type TEnterPassphraseData = Record<"username" | "email", string>;

export type TEnterPassphraseProps = TAuthFieldsetProps & {
    legend: string;
    updateFields: (fields: Partial<TEnterPassphraseData>) => void;
};
