export type TLinkListItem = {
    href: `/${string}`;
    label: string;
    className: `navlink${"" | " js-modal-open"}`;
    svgIcon?: React.ReactNode;
};

// For btns
// | `btn ${"btn-fill" | "btn-fill-sm" | "btn-fill-xs" | "btn-outline" | "btn-outline-sm" | "btn-outline-xs"}

export type TLinkListProps = {
    linksArr: TLinkListItem[];
};
