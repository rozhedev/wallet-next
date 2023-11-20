export type LinkListItem = {
    href: `/${string}`;
    label: string;
    className: `navlink${"" | " js-modal-open"}`;
    svgIcon?: React.ReactNode;
};

export type LinkListProps = {
    linksArr: LinkListItem[];
}
