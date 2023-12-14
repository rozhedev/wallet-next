"use client";

import React, { FC, useState } from "react";
import type { TPromoactionsItem } from "./types";
import Link from "next/link";
import Btn from "@/ui/Btn/Btn";
import Modal from "@/ui/Modal";

export const PromoactionsItem: FC<TPromoactionsItem> = ({ title, tags, btnLabel, isLink, linkHref }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

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
                        disabled={false}
                        onClick={() => setIsOpenModal(true)}
                    >
                        <span>{btnLabel}</span>
                    </Btn>
                )}
            </div>
            <Modal
                modalId="modal-test"
                modalDialogClassName="modal-dialog modal-dialog--error"
                isOpen={isOpenModal}
                onCloseModal={() => setIsOpenModal(false)}
            >
                <Modal.Header
                    titleIcon={
                        <svg
                            viewBox="0 0 64 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M20.5715 20.5715L43.4287 43.4287" />
                            <path d="M43.4287 20.5715L20.5715 43.4287" />
                            <path d="M32.0001 59.4287C47.1485 59.4287 59.4287 47.1485 59.4287 32.0001C59.4287 16.8517 47.1485 4.57153 32.0001 4.57153C16.8517 4.57153 4.57153 16.8517 4.57153 32.0001C4.57153 47.1485 16.8517 59.4287 32.0001 59.4287Z" />
                        </svg>
                    }
                    title="Event expired"
                ></Modal.Header>
                <Modal.Content className="modal-dialog__body">
                    <p>This event is over. Stay tuned so you don't miss any new promotions.</p>
                </Modal.Content>
                <Modal.Footer className="modal-footer btn-group">
                    <Btn
                        type="button"
                        className="btn btn-fill-sm"
                        disabled={false}
                        onClick={() => setIsOpenModal(false)}
                    >
                        <span>Close</span>
                    </Btn>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
