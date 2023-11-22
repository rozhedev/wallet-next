import { TLinkListItem } from "@/components/LinkList";

export type THeaderProps = {
    linksArr: TLinkListItem[];
    children: React.ReactNode;
    langOptionsArr: { label: string; value: string }[];
};
