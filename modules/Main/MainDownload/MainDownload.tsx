import React, { FC, useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

import type { TMainDownloadProps } from "./types";
import DownloadColumn, { type TDownloadColumnItem } from "@/components/DownloadColumn";

// * Not add alias for static images
import desktopPhoneMockup from "../../../public/img/photos/mockups/desktop_and_phone_apps.webp";
import { walletIcon } from "@/data/pages/web3-icons";

export const MainDownload: FC<TMainDownloadProps> = ({ dataArr }) => {
    const [isImgOpen, setIsImgOpen] = useState<boolean>(true);
    return (
        <>
            <h2 className="download__header section-title">
                {walletIcon}
                <span className="h2">Flenn Wallet on your devices</span>
            </h2>
            <button
                type="button"
                className="download__mockup"
                onClick={() => setIsImgOpen(!isImgOpen)}
            >
                <Image
                    src={desktopPhoneMockup}
                    alt="desktop_and_phone_apps"
                    priority={true}
                />
                <FsLightbox
                    toggler={isImgOpen}
                    type="image"
                    sources={[
                        <Image
                            src={desktopPhoneMockup}
                            alt="desktop_and_phone_apps"
                        />,
                    ]}
                />
            </button>

            {/* // * DOWNLOAD PLATFORM */}

            <h4 className="h3 section-title">Download for your platform:</h4>
            <div className="inner">
                {dataArr.map((item: TDownloadColumnItem) => (
                    <DownloadColumn
                        key={item.key}
                        title={item.title}
                        btnModifArr={item.btnModifArr}
                        badgeImgPropsArr={item.badgeImgPropsArr}
                    />
                ))}
            </div>
        </>
    );
};
