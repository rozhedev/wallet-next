import React, { FC } from "react";
import type { TDownloadColumnItem } from "./types";
import Link from "next/link";
import Image from 'next/image';

export const DownloadColumn: FC<TDownloadColumnItem> = ({ title, btnModifArr, badgeImgPropsArr }) => {
    return (
        <div className="download-column">
            <span className="primary-subtitle">{title}</span>
            <div>
                <Link
                    className={`btn btn-fill ${btnModifArr[0]}`}
                    href="/"
                >
                    <Image
                        className="download-column__btn-img"
                        src={badgeImgPropsArr[0].src}
                        alt={badgeImgPropsArr[0].alt}
                    />
                </Link>

                <Link
                    className={`btn btn-fill ${btnModifArr[1]}`}
                    href="/"
                >
                    <Image
                        className="download-column__btn-img"
                        src={badgeImgPropsArr[1].src}
                        alt={badgeImgPropsArr[1].alt}
                    />
                </Link>
            </div>
        </div>
    );
};
