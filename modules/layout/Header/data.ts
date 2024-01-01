import type { TLinkListItem } from "@/components/LinkList";
import { ROUTES, TRouteLabelScope } from "@/data/routes";

export const headerLinks: TLinkListItem<TRouteLabelScope>[] = [
    {
        href: ROUTES.public.home,
        label: "Home",
        className: "navlink",
    },
    {
        href: ROUTES.public.assets,
        label: "Assets",
        className: "navlink",
    },
    {
        href: ROUTES.public.promoactions,
        label: "Promoactions",
        className: "navlink",
    },
];

export const dropdownLinks: TLinkListItem<TRouteLabelScope>[] = [
    {
        href: ROUTES.public.faq,
        label: "Popular questions",
        className: "navlink",
    },
    {
        href: ROUTES.public.privacyPolicy,
        label: "Privacy Policy",
        className: "navlink",
    },
    {
        href: ROUTES.public.terms,
        label: "Terms of Service",
        className: "navlink",
    },
    {
        href: ROUTES.private.dashboard,
        label: "Dashboard",
        className: "navlink",
    },
];

export const langSelectOptions: { label: string; value: string }[] = [
    {
        label: "ENG",
        value: "eng-english",
    },
    {
        label: "FR",
        value: "fr-french",
    },
    {
        label: "ES",
        value: "es-espanol",
    },
    {
        label: "RU",
        value: "ru-russian",
    },
    {
        label: "IT",
        value: "it-italian",
    },
    {
        label: "DE",
        value: "de-deutsch",
    },
];
