export type TDownloadColumnItem = {
    key: number;
    title: "Desktop" | "Mobile";
    btnModifArr: Array<"btn--windows" | "btn--mac-appstore" | "btn--appstore" | "btn--google-play">;
    badgeImgPropsArr: {
        src: `@/public/img/photos/badges/${string}.svg`,
        alt: string,
    }[]
};

export type TDownloadColumnArr = TDownloadColumnItem[];

