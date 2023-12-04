import type { TLinkListItem } from "@/components/LinkList";

export const headerLinks: TLinkListItem[] = [
    {
        href: "/",
        label: "Home",
        className: "navlink",
    },
    {
        href: "/assets",
        label: "Assets",
        className: "navlink",
    },
    {
        href: "/promoactions",
        label: "Promoactions",
        className: "navlink",
    },
];

export const dropdownLinks: TLinkListItem[] = [
    {
        href: "/faq",
        label: "Popular questions",
        className: "navlink",
    },
    {
        href: "/privacy-policy",
        label: "Privacy Policy",
        className: "navlink",
    },
    {
        href: "/terms",
        label: "Terms of Service",
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

export let isMenuListOpen: boolean = false;
