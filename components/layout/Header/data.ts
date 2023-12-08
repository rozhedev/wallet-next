import type { TLinkListItem } from "@/components/LinkList";
import { ROUTES } from "@/data/routes";

export const headerLinks: TLinkListItem[] = [
    {
        href: ROUTES.public.home.href,
        label: ROUTES.public.home.label,
        className: "navlink",
    },
    {
        href: ROUTES.public.assets.href,
        label: ROUTES.public.assets.label,
        className: "navlink",
    },
    {
        href: ROUTES.public.promoactions.href,
        label: ROUTES.public.promoactions.label,
        className: "navlink",
    },
];

export const dropdownLinks: TLinkListItem[] = [
    {
        href: ROUTES.public.faq.href,
        label: ROUTES.public.faq.label,
        className: "navlink",
    },
    {
        href: ROUTES.public.privacyPolicy.href,
        label: ROUTES.public.privacyPolicy.label,
        className: "navlink",
    },
    {
        href: ROUTES.public.terms.href,
        label: ROUTES.public.terms.label,
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
