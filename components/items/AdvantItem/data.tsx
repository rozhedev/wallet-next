import { lockCheckedIcon, tireIcon, globeIcon, eyeHideIcon } from "@/data/pages/ui-icons";
import { layersIcon, ledgerIcon, segwitIcon, walletConnectIcon } from "@/data/pages/web3-icons";
import type { TMainAdvantItemArr } from "./types";

export const mainAdvantItemArr: TMainAdvantItemArr = [
    {
        id: 1,
        svgIcon: lockCheckedIcon,
        title: "Superb security",
        descr: "Your private keys never leave your device. Strong wallet encryption and cryptography guarantee that your funds will remain safe under your ultimate control.",
    },
    {
        id: 2,
        svgIcon: layersIcon,
        title: "Multi-chain",
        descr: "Native support for bitcoin and most major altcoins and tokens. Continuous integration of key altcoins and tokens. Highest levels of diligence are applied to coin selection and addition.",
    },
    {
        id: 3,
        svgIcon: tireIcon,
        title: "24/7/365 Live support",
        descr: "For many, creating wallets, managing crypto and making exchanges is a totally new experience. At Flenn Wallet, friendly support is always on hand, via instant live chat directly on our website.",
    },
    {
        id: 4,
        svgIcon: ledgerIcon,
        title: "UTXO Control",
        descr: "Dusting attacks protection and Do-Not-Spend flags. Choose like-type change addresses to reduce transaction linking. Full UTXO control coming soon!",
    },
    {
        id: 5,
        svgIcon: globeIcon,
        title: "Integrated Web3 support",
        descr: "Seamlessly access your favourite DApps with Flenn Wallet integrated Web3 support without any compromise on security.",
    },
    {
        id: 6,
        svgIcon: walletConnectIcon,
        title: "Wallet Connect",
        descr: "Easily and securely access DApps on the big-screen with the use of WalletConnect - link your Coinomi wallet with other apps which support this feature.",
    },
    {
        id: 7,
        svgIcon: segwitIcon,
        title: "Native SegWit",
        descr: "Enjoy faster confirmations and lower fees for Bitcoin, Litecoin, and many other cryptocurrencies. Switch dynamically between Bech32, P2SH, and legacy modes.",
    },
    {
        id: 8,
        svgIcon: eyeHideIcon,
        title: "Enhanced privacy",
        descr: "No KYC bureaucracy to access your funds, no IP association, no identity linking, no transactions tracking. Our servers anonymize your requests by hiding your IP address from prying eyes.",
    },
];
