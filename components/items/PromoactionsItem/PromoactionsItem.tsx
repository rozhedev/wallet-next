"use client";

import React, { FC, useState } from "react";
import type { TPromoactionsItem } from "./types";
import Link from "next/link";
import Btn from "@/ui/Btn/Btn";
import Modal from "@/ui/Modal";

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
                    modalId="modal-test"
                    modalDialogClassName="modal-dialog modal-dialog--success"
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
                                <path d="M32.0001 59.4287C47.1485 59.4287 59.4287 47.1485 59.4287 32.0001C59.4287 16.8517 47.1485 4.57153 32.0001 4.57153C16.8517 4.57153 4.57153 16.8517 4.57153 32.0001C4.57153 47.1485 16.8517 59.4287 32.0001 59.4287Z" />
                                <path d="M45.7142 22.8572L27.4285 41.1429L18.2856 32" />
                            </svg>
                        }
                        title="Signed to airdrop"
                    ></Modal.Header>
                    <Modal.Content className="modal-dialog__body">
                        <p>
                            To participate in the airdrop you need to go through the registration procedure. If you are already registered, log into your wallet as always and go to the &quot;Survey&quot;
                            section.
                        </p>
                    </Modal.Content>
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
                        <p>This event is over. Stay tuned so you don&apos;t miss any new promotions.</p>
                    </Modal.Content>
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
