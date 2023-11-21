import { LinkListItem } from "@/components/LinkList";

export type FooterProps = {
    children: React.ReactNode[];
};

export type FooterNavColumnProps = {
    title: string;
    linksArr: LinkListItem[]
};
