import type { LinkListItem } from "@/components/LinkList"

export const headerLinks: LinkListItem[] = [
    {
        href: "/",
        label: "Home",
        className: "navlink", 
    },
    {
        href: "/pages/assets",
        label: "Assets",
        className: "navlink",
    },
    {
        href: "/pages/promoactions",
        label: "Promoactions",
        className: "navlink",
    },
];

export const dropdownLinks: LinkListItem[] = [
    {
        href: "/pages/faq",
        label: "Popular questions",
        className: "navlink", 
    },
    {
        href: "/pages/privacy-policy",
        label: "Privacy Policy",
        className: "navlink",
    },
    {
        href: "/pages/terms",
        label: "Terms of Service",
        className: "navlink",
    },
]

export const langSelectOptions: {label: string, value: string}[] = [
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