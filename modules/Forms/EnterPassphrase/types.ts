import { TAuthFieldsetProps } from "@/types/data/shared";

export type TEnterPassphraseProps = TAuthFieldsetProps & {
    legend: string;
    styledWrapperModif?: string;
    children: React.ReactElement | React.ReactElement[];
};
