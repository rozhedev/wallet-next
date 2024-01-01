import type { TLinkListItem } from "@/components/LinkList";
import { ROUTES, TRouteLabelScope } from "@/data/routes";

export const dropdownLinksCab: TLinkListItem<TRouteLabelScope>[] = [
    {
        href: ROUTES.public.home,
        svgIcon: (
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M41.1428 45.7144V59.4287H4.57141V4.57153H41.1428V18.2858" />
                <path d="M50.2858 41.1429L59.4286 32L50.2858 22.8572" />
                <path d="M27.4286 32H59.4286" />
            </svg>
        ),
        label: "Sign Out",
        className: "navlink",
    },
    {
        href: ROUTES.private.watchlist,
        svgIcon: (
            <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M20 16H56" />
                <path d="M20 32H56" />
                <path d="M20 48H56" />
                <path d="M8 16H12" />
                <path d="M8 32H12" />
                <path d="M8 48H12" />
            </svg>
        ),
        label: "Watchlist",
        className: "navlink",
    },
];
