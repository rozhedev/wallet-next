import { LinkListItem } from "@/components/LinkList";

export type HeaderProps = {
    linksArr: LinkListItem[];
    children: React.ReactNode;
    langOptionsArr: {label: string, value: string}[];
};
