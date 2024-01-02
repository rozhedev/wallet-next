import { TRoute, TRouteLabelScope } from "@/data/routes";

export type TAsideCabProps = {
    isAsideOpen: boolean;
    linksArr: TAsideNavItemArr;
    toggleHandler: () => void;
};

export type TAsideNavItem = {
    isLink: boolean;
    linkHref: TRoute | "";
    itemIcon: React.ReactElement;
    label: TRouteLabelScope;
    toggleHandler: () => void;
};

export type TAsideNavItemArr = TAsideNavItem[]
