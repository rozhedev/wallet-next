import { TLinkListItem } from "@/components/LinkList";
import { TRouteLabelScope } from "@/data/routes";

export type TFooterProps = {
    children: React.ReactNode[];
};

export type TFooterNavColumnProps = {
    title: string;
    linksArr: TLinkListItem<TRouteLabelScope>[];
};
