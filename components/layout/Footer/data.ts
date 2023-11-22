import type { TLinkListItem } from "@/components/LinkList";
import { headerLinks, dropdownLinks } from "@/components/layout/Header/data";

const tempArr = [...headerLinks].slice(1); // * Remove home link
export const footerInfoLinks: TLinkListItem[] = tempArr.concat([
    {
        href: "/pages/register",
        label: "Register wallet",
        className: "navlink",
    },
    {
        href: "/pages/signin",
        label: "Sign in",
        className: "navlink",
    },
]);
export const footerDiscoverLinks: TLinkListItem[] = dropdownLinks;
