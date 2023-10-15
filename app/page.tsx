"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { assetsTableItem } from "../types/pages/assets";

export default function Home() {
    console.log(assetsTableItem);
    console.log(navigator.appName);
    console.log(navigator);

    return <h1>Start dev</h1>;
}
