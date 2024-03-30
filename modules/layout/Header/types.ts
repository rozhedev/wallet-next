import { TLinkListItem } from "@/components/LinkList";
import { TRouteLabelScope } from "@/data/routes";

export type THeaderProps = {
    linksArr: TLinkListItem<TRouteLabelScope>[];
    children?: React.ReactNode;
    langOptionsArr: { label: string; value: string }[];
};
