import { TAuthFieldsetProps } from "@/types/data/shared";

export type TEnterPassphraseProps = TAuthFieldsetProps & {
    legend: string;
    children: React.ReactElement[];
};