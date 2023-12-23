import { TAuthFieldsetProps } from "@/types/data/shared";

export type TEnterPassphraseData = Record<"username" | "email", string>;

export type TEnterPassphraseProps = TAuthFieldsetProps &
    TEnterPassphraseData & {
        updateFields: (fields: Partial<TEnterPassphraseData>) => void;
    };
