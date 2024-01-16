import type { TLinkListItem } from "@/components/LinkList";
import { doorExitIcon, listIcon } from "@/data/pages/ui-icons";
import { ROUTES, TRouteLabelScope } from "@/data/routes";

export const dropdownLinksCab: TLinkListItem<TRouteLabelScope>[] = [
    {
        href: ROUTES.public.home,
        svgIcon: doorExitIcon,
        label: "Sign Out",
        className: "navlink",
    },
    {
        href: ROUTES.private.watchlist,
        svgIcon: listIcon,
        label: "Watchlist",
        className: "navlink",
    },
];
