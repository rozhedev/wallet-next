import React, { FC, useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

import type { TMainDownloadProps } from "./types";
import DownloadColumn, { TDownloadColumnItem } from "@/components/DownloadColumn";

import desctopPhoneMockup from "@/public/img/photos/mockups/desktop_and_phone_apps.webp";

export const MainDownload: FC<TMainDownloadProps> = ({ dataArr }) => {
    const [isImgOpen, setIsImgOpen] = useState<boolean>(true);
    return (
        <>
            <h2 className="download__header section-title">
                <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M41.1429 13.7143V10.2857C41.1429 9.37637 40.7816 8.5043 40.1387 7.86132C39.4957 7.21834 38.6236 6.85712 37.7143 6.85712H6.85715C5.94783 6.85712 5.07576 7.21834 4.43278 7.86132C3.7898 8.5043 3.42857 9.37637 3.42857 10.2857V37.7143C3.42857 38.6236 3.7898 39.4956 4.43278 40.1386C5.07576 40.7816 5.94783 41.1428 6.85715 41.1428H37.7143C38.6236 41.1428 39.4957 40.7816 40.1387 40.1386C40.7816 39.4956 41.1429 38.6236 41.1429 37.7143V34.2857" />
                    <path d="M27.4286 13.7143H42.8571C43.3118 13.7143 43.7478 13.8949 44.0693 14.2164C44.3908 14.5379 44.5714 14.9739 44.5714 15.4286V32.5714C44.5714 33.0261 44.3908 33.4621 44.0693 33.7836C43.7478 34.1051 43.3118 34.2857 42.8571 34.2857H27.4286C24.7006 34.2857 22.0844 33.2021 20.1555 31.2731C18.2265 29.3442 17.1429 26.7279 17.1429 24C17.1429 21.2721 18.2265 18.6559 20.1555 16.7269C22.0844 14.798 24.7006 13.7143 27.4286 13.7143V13.7143Z" />
                    <path d="M27.4286 27.4286C29.3221 27.4286 30.8571 25.8935 30.8571 24C30.8571 22.1064 29.3221 20.5714 27.4286 20.5714C25.535 20.5714 24 22.1064 24 24C24 25.8935 25.535 27.4286 27.4286 27.4286Z" />
                </svg>
                <span className="h2">Flem Wallet on your devices</span>
            </h2>
            <button
                type="button"
                className="download__mockup"
                onClick={() => setIsImgOpen(!isImgOpen)}
            >
                <Image
                    src={desctopPhoneMockup}
                    alt="desktop_and_phone_apps"
                    priority={true}
                />
                <FsLightbox
                    toggler={isImgOpen}
                    type="image"
                    sources={[
                        <Image
                            src={desctopPhoneMockup}
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
