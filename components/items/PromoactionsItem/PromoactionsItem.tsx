"use client";

import React, { FC, useState } from "react";
import type { TPromoactionsItem } from "./types";
import Link from "next/link";
import Btn from "@/ui/Btn/Btn";
import Modal from "@/ui/Modal";
import { promoModalData } from "@/data/modals/data";

export const PromoactionsItem: FC<TPromoactionsItem> = ({ title, tags, btnLabel, isLink, linkHref }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const isLinkRegister = linkHref === "/register";

    return (
        <div className="promoactions-item">
            <div className="promoactions-item__content">
                <h4 className="h4">{title}</h4>
                <div className="hashtag-container">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="hashtag-item"
                            data-tag={tag}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {isLink ? (
                    <Link
                        href={linkHref}
                        className="btn btn-fill-sm"
                    >
                        {btnLabel}
                    </Link>
                ) : (
                    <Btn
                        type="button"
                        className="btn btn-fill-sm"
                        onClick={() => setIsOpenModal(true)}
                    >
                        <span>{btnLabel}</span>
                    </Btn>
                )}
            </div>
            {isLinkRegister ? (
                <Modal
                    modalId={promoModalData.success.id}
                    modalDialogClassName={promoModalData.success.modalDialogClassName}
                    isOpen={isOpenModal}
                    onCloseModal={() => setIsOpenModal(false)}
                >
                    <Modal.Header
                        titleIcon={promoModalData.success.titleIcon}
                        title={promoModalData.success.title}
                    ></Modal.Header>

                    <Modal.Content className="modal-dialog__body">{promoModalData.success.content}</Modal.Content>
                    <Modal.Footer className="modal-footer btn-group">
                        <Link
                            className="btn btn-outline-sm"
                            href={linkHref}
                        >
                            <span>Register</span>
                        </Link>
                        <Link
                            className="btn btn-outline-sm"
                            href={"/signin"}
                        >
                            <span>Sign in</span>
                        </Link>
                    </Modal.Footer>
                </Modal>
            ) : (
                <Modal
                    modalId={promoModalData.error.id}
                    modalDialogClassName={promoModalData.error.modalDialogClassName}
                    isOpen={isOpenModal}
                    onCloseModal={() => setIsOpenModal(false)}
                >
                    <Modal.Header
                        titleIcon={promoModalData.error.titleIcon}
                        title={promoModalData.error.title}
                    ></Modal.Header>
                    <Modal.Content className="modal-dialog__body">{promoModalData.error.content}</Modal.Content>

                    <Modal.Footer className="modal-footer btn-group">
                        <Btn
                            type="button"
                            className="btn btn-outline-sm"
                            onClick={() => setIsOpenModal(false)}
                        >
                            <span>Close</span>
                        </Btn>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};
