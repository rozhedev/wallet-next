import type { TLinkListItem } from "@/components/LinkList";
import { headerLinks, dropdownLinks } from "@/components/layout/Header/data";
import { ROUTES } from "@/data/routes";

const tempArr = [...headerLinks].slice(1); // * Remove home link
export const footerInfoLinks: TLinkListItem[] = tempArr.concat([
    {
        href: ROUTES.public.register.href,
        label: ROUTES.public.register.label,
        className: "navlink",
    },
    {
        href: ROUTES.public.signin.href,
        label: ROUTES.public.signin.label,
        className: "navlink",
    },
]);
export const footerDiscoverLinks: TLinkListItem[] = dropdownLinks;
