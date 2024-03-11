import { TDownloadColumnArr } from "./types";

import badgeMSStore from "@/public/img/photos/badges/MS-Store/English_MS_864X312.svg";
import badgeMacAppStore from "@/public/img/photos/badges/Download-on-the-Mac-App-Store/US/Badge_US-UK_RGB_blk_092917.svg";
import badgeAppStore from "@/public/img/photos/badges/Download-on-the-App-Store/US/App_Store_Badge_US-UK_RGB_blk_092917.svg";
import badgeGooglePlay from "@/public/img/photos/badges/Google-Play/google-play-badge.png";

export const downloadColumnArr: TDownloadColumnArr = [
    {
        key: 1,
        title: "Desktop",
        btnModifArr: ["btn--windows", "btn--mac-appstore"],
        badgeImgPropsArr: [
            {
                src: badgeMSStore,
                alt: "Download on Microsoft Store",
            },
            {
                src: badgeMacAppStore,
                alt: "Download on the Mac App Store",
            },
        ],
    },
    {
        key: 2,
        title: "Mobile",
        btnModifArr: ["btn--appstore", "btn--google-play"],
        badgeImgPropsArr: [
            {
                src: badgeAppStore,
                alt: "Download on the Mac App Store",
            },
            {
                src: badgeGooglePlay,
                alt: "Get it on Google Play",
            },
        ],
    },
];
