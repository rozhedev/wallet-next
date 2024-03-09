import type { TRoute } from "@/data/routes";

export type TLinkListItem<TScope> = {
    href: TRoute;
    label: TScope;
    className: "navlink" | `navlink ${string}` | "link" | `link ${string}`;
    svgIcon?: React.ReactNode;
};

export type TLinkListProps<TScope> = {
    linksArr: TLinkListItem<TScope>[];
    // * Uses in header for close menu when link clicked
    handler?: () => void;
};
