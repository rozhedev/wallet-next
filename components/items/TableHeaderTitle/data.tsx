import { clockIcon, desktopIcon, donateIcon, fileEmptyIcon, infoRoundedIcon, phoneMobileIcon, squaredSpinnerIcon, userIcon } from "@/data/pages/ui-icons";
import { T_TableHeaderTitleArr } from "./types";
import { walletIcon } from "@/data/pages/web3-icons";

export const assetsTableHeaderTitleArr: T_TableHeaderTitleArr = [
    {
        id: 1,
        svgIcon: "",
        title: "#",
    },
    {
        id: 2,
        svgIcon: "",
        title: "Name",
    },
    {
        id: 3,
        svgIcon: desktopIcon,
        title: "Send",
    },
    {
        id: 4,
        svgIcon: desktopIcon,

        title: "Receive",
    },
    {
        id: 5,
        svgIcon: phoneMobileIcon,
        title: "Send",
    },
    {
        id: 6,
        svgIcon: phoneMobileIcon,
        title: "Receive",
    },
    {
        id: 7,
        svgIcon: "",
        title: "Exchange",
    },
    {
        id: 8,
        svgIcon: "",
        title: "Buy",
    },
    {
        id: 9,
        svgIcon: "",
        title: "Staking",
    },
];

// * HISTORY TABLE
export const historyTableHeaderTitleArr: T_TableHeaderTitleArr = [
    {
        id: 1,
        svgIcon: "",
        title: "#",
    },
    {
        id: 2,
        svgIcon: fileEmptyIcon,
        title: "Type",
    },
    {
        id: 3,
        svgIcon: walletIcon,
        title: "Currency",
    },
    {
        id: 4,
        svgIcon: donateIcon,

        title: "Amount",
    },
    {
        id: 5,
        svgIcon: squaredSpinnerIcon,
        title: "Status",
    },
    {
        id: 6,
        svgIcon: infoRoundedIcon,
        title: "TID",
    },
    {
        id: 7,
        svgIcon: clockIcon,
        title: "Date & time",
    },
    {
        id: 8,
        svgIcon: userIcon,
        title: "Recipient",
    },
];
