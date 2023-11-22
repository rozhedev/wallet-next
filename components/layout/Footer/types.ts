import { TLinkListItem } from "@/components/LinkList";

export type TFooterProps = {
    children: React.ReactNode[];
};

export type TFooterNavColumnProps = {
    title: string;
    linksArr: TLinkListItem[];
};
