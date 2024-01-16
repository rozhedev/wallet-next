import { ROUTES } from "@/data/routes";
import { TAsideNavItem } from "./types";
import { appsIcon, clockIcon, settingsIcon, starIcon } from "@/data/pages/ui-icons";
import { layersIcon } from "@/data/pages/web3-icons";

type TAsideCabLinks = Omit<TAsideNavItem, "setIsAsideOpen">[];

export const asideCabLinks: TAsideCabLinks = [
    {
        isLink: true,
        linkHref: ROUTES.private.dashboard,
        itemIcon: appsIcon,
        label: "Dashboard",
    },
    {
        isLink: true,
        linkHref: ROUTES.private.assetsCab,
        itemIcon: layersIcon,
        label: "Assets",
    },
    {
        isLink: false,
        linkHref: "/",
        itemIcon: starIcon,
        label: "Survey",
    },
    {
        isLink: true,
        linkHref: "/history",
        itemIcon: clockIcon,
        label: "History",
    },
    {
        isLink: true,
        linkHref: "/settings",
        itemIcon: settingsIcon,
        label: "Settings",
    },
];
