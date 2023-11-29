export type TDownloadColumnItem2 = {
    href: `/${string}`;
    label: string;
    className: `navlink${"" | " js-modal-open"}`;
    svgIcon?: React.ReactNode;
};

export type TDownloadColumnItem = {
    title: "Desktop" | "Mobile";
    btnModif: "btn--windows" | "btn--mac-appstore" | "btn--appstore" | "btn--google-play";
    imgPath: `@/public/img/photos/badges${string}.svg`[];
    imgAlt: string[];
};

export type TDownloadColumnArr = TDownloadColumnItem[];

