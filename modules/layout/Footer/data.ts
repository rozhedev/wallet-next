import type { TLinkListItem } from "@/components/LinkList";
import { headerLinks, dropdownLinks } from "@/modules/layout/Header/data";
import { ROUTES, TRouteLabelScope } from "@/data/routes";

const tempArr = [...headerLinks].slice(1); // * Remove home link
export const footerInfoLinks: TLinkListItem<TRouteLabelScope>[] = tempArr.concat([
    {
        href: ROUTES.public.register,
        label: "Register wallet",
        className: "navlink",
    },
    {
        href: ROUTES.public.signin,
        label: "Sign in",
        className: "navlink",
    },
]);
export const footerDiscoverLinks: TLinkListItem<TRouteLabelScope>[] = dropdownLinks;
