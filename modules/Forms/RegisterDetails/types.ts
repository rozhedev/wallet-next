import { TAuthFieldsetProps } from "@/types/data/shared";

export type TRegisterData = Record<"username" | "email", string>;

export type TRegisterDetailsProps = TAuthFieldsetProps &
    TRegisterData & {
        updateFields: (fields: Partial<TRegisterData>) => void;
    };
