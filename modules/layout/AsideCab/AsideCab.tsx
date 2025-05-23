"use client";

import React, { FC, JSX, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/logo-badge.svg";

import type { TAsideCabProps, TAsideNavItem } from "./types";
import Modal from "@/ui/Modal";
import SurveyForm from "@/modules/Forms/SurveyForm";
import { GRID_BREAKPOINTS } from "@/data/constants/limits";
import { checkedRoundedIcon, dropIcon } from "@/data/pages/ui-icons";
import { checkScreenWidth } from "@/utils/predicates";
import Btn from "@/ui/Btn/Btn";

export const AsideCab = ({ isAsideOpen, setIsAsideOpen, linksArr }: TAsideCabProps): JSX.Element => {
    // * Add this flag to DB in future versions

    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    useEffect(() => {
        const storageBool = localStorage.getItem("isSurveyCompleted");
        if (storageBool === null) localStorage.setItem("isSurveyCompleted", isCompleted.toString());
        else {
            storageBool === "false" ? setIsCompleted(false) : setIsCompleted(true);
        }
    }, [isCompleted]);

    return (
        <aside className={`aside-cab ${isAsideOpen ? "_open" : "_close"}`}>
            <div className="logo">
                <Image
                    src={logo}
                    alt="logo-badge"
                />
                <span className="logo__text navlink">Flenn</span>
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
                        isCompleted={isCompleted}
                        setIsCompleted={setIsCompleted}
                    />
                ))}
            </ul>
        </aside>
    );
};

const AsideNavItem: FC<TAsideNavItem> = ({ isLink, linkHref, itemIcon, label, setIsAsideOpen, isCompleted, setIsCompleted }) => {
    const [isSurveyOpen, setIsSurveyOpen] = useState<boolean>(false);

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
                            setIsSurveyOpen(true);
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

            {/* //* Survey form */}
            <Modal
                modalId="modal-survey"
                modalDialogClassName={`modal-dialog modal-dialog--survey ${isCompleted ? "modal-dialog--success " : "modal-dialog--info"}`}
                isOpen={isSurveyOpen}
                onCloseModal={() => setIsSurveyOpen(false)}
            >
                {isCompleted ? (
                    <>
                        <Modal.Header
                            titleIcon={checkedRoundedIcon}
                            title={"Survey completed"}
                        />
                        <Modal.Content className="modal-dialog__body">
                            <p>You completed this survey. Stay tuned for don't miss new promotions. If you have any problems please contact technical support.</p>
                        </Modal.Content>
                        <Modal.Footer className="modal-footer btn-group">
                            <Btn
                                type="button"
                                className="btn btn-fill-sm"
                                onClick={() => setIsSurveyOpen(false)}
                            >
                                <span>Close</span>
                            </Btn>
                        </Modal.Footer>
                    </>
                ) : (
                    <>
                        <Modal.Header
                            titleIcon={dropIcon}
                            title="Airdop survey"
                        />
                        <Modal.Content className="modal-dialog__body form-wrapper">
                            <SurveyForm
                                setIsOpenModal={setIsSurveyOpen}
                                setIsCompleted={setIsCompleted}
                            />
                        </Modal.Content>
                    </>
                )}
            </Modal>
        </li>
    );
};
