import type { TLinkListItem } from "@/components/LinkList";
import { ROUTES, TRouteLabelScope } from "@/data/routes";

export const dashboardLinks: TLinkListItem<TRouteLabelScope>[] = [
    {
        href: ROUTES.public.home,
        label: "Homepage",
        className: "navlink dashboard-navlink",
    },
    {
        href: ROUTES.public.assets,
        label: "Assets",
        className: "navlink",
    },
    {
        href: ROUTES.public.promoactions,
        label: "Promoactions",
        className: "navlink dashboard-navlink",
    },
    {
        href: ROUTES.public.faq,
        label: "Popular questions",
        className: "navlink dashboard-navlink",
    },
    {
        href: ROUTES.public.privacyPolicy,
        label: "Privacy Policy",
        className: "navlink dashboard-navlink",
    },
    {
        href: ROUTES.public.terms,
        label: "Terms",
        className: "navlink dashboard-navlink",
    },
];