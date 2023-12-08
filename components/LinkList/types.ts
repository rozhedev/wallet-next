import type { TRoute } from "@/data/routes";

export type TLinkListItem = TRoute & {
    className: `navlink${"" | " js-modal-open"}`;
    svgIcon?: React.ReactNode;
};

// For btns
// | `btn ${"btn-fill" | "btn-fill-sm" | "btn-fill-xs" | "btn-outline" | "btn-outline-sm" | "btn-outline-xs"}

export type TLinkListProps = {
    linksArr: TLinkListItem[];
};
