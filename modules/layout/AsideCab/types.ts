import { TRoute, TRouteLabelScope } from "@/data/routes";

export type TAsideCabProps = {
    isAsideOpen: boolean;
    linksArr: TAsideNavItemArr;
};

export type TAsideNavItem = {
    isLink: boolean;
    linkHref: TRoute | "";
    itemIcon: React.ReactElement;
    label: TRouteLabelScope;
};

export type TAsideNavItemArr = TAsideNavItem[]
