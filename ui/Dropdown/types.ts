export type DropdownProps = {
    children: React.ReactNode;
};

export type DropdownBtnProps = {
    children: React.ReactNode;
};

export type DropdownMenuProps = {
    children: React.ReactNode;
    transition?: number;
};

export type DropdownLinkProps = {
    href: `/${string}`;
    label: string;
    className: `navlink${"" | " js-modal-open"}`;
    svgIcon?: React.ReactNode;
};
