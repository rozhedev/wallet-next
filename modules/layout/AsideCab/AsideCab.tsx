"use client";

import React, { FC, JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo-badge.svg";

import type { TAsideCabProps, TAsideNavItem } from "./types";
import Modal from "@/ui/Modal";
import SurveyForm from "@/modules/Forms/SurveyForm";
import { GRID_BREAKPOINTS } from "@/data/constants/breakpoints";
import { dropIcon } from "@/data/pages/ui-icons";
import { checkScreenWidth } from "@/utils/utils";

export const AsideCab = ({ isAsideOpen, setIsAsideOpen, linksArr }: TAsideCabProps): JSX.Element => {
    return (
        <aside className={`aside-cab ${isAsideOpen ? "_open" : "_close"}`}>
            <div className="logo">
                <Image
                    src={logo}
                    alt="logo-badge"
                />
                <span className="logo__text navlink">Flem</span>
            </div>
            <ul className="nav">
                {linksArr.map((item, i) => (
                    <AsideNavItem
                        key={`${item.label}${i}`}
                        isLink={item.isLink}
                        linkHref={item.linkHref}
                        itemIcon={item.itemIcon}
                        label={item.label}
                        setIsAsideOpen={setIsAsideOpen}
                    />
                ))}
            </ul>
        </aside>
    );
};

const AsideNavItem: FC<TAsideNavItem> = ({ isLink, linkHref, itemIcon, label, setIsAsideOpen }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    return (
        <li className="aside-nav-item">
            {isLink ? (
                <>
                    <Link
                        className="aside-nav-item__link"
                        href={linkHref}
                        onClick={() => checkScreenWidth(GRID_BREAKPOINTS.xs) && setIsAsideOpen(false)}
                    >
                        {itemIcon}
                        <span className="aside-nav-item__text navlink">{label}</span>
                    </Link>
                    <ul className="aside-nav-item__submenu _blank">
                        <li>
                            <Link
                                className="aside-nav-item__text navlink"
                                href={linkHref}
                            >
                                {label}
                            </Link>
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    {/* // * Modal trigger must contain span tag */}
                    <span
                        className="aside-nav-item__link"
                        onClick={() => {
                            checkScreenWidth(GRID_BREAKPOINTS.xs) && setIsAsideOpen(false);
                            setIsOpenModal(true);
                        }}
                    >
                        {itemIcon}
                        <span className="aside-nav-item__text navlink">{label}</span>
                    </span>
                    <ul className="aside-nav-item__submenu _blank">
                        <li>
                            <span className="aside-nav-item__text navlink">{label}</span>
                        </li>
                    </ul>
                </>
            )}
            <Modal
                modalId="modal-survey"
                modalDialogClassName="modal-dialog modal-dialog--info modal-dialog--survey"
                isOpen={isOpenModal}
                onCloseModal={() => setIsOpenModal(false)}
            >
                <Modal.Header
                    titleIcon={dropIcon}
                    title="Airdop survey"
                />
                <Modal.Content className="modal-dialog__body form-wrapper">
                    <SurveyForm/>
                </Modal.Content>
            </Modal>
        </li>
    );
};
