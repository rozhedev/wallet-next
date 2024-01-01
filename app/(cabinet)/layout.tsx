"use client";

import React, { useState } from "react";
import Dropdown from "@/ui/Dropdown";
import Btn from "@/ui/Btn/Btn";
import Modal from "@/ui/Modal";

import LinkList from "@/components/LinkList";
import HeaderCab, { dropdownLinksCab } from "@/modules/layout/HeaderCab";
import AsideCab, { asideCabLinks } from "@/modules/layout/AsideCab";
import { promoModalData } from "@/data/modals/data";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
    const menuOpenHandler = () => setIsAsideOpen(() => !isAsideOpen);

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    return (
        <div className="page">
            {/* //* Don't change component position for prevent layout errors */}

            <AsideCab
                linksArr={asideCabLinks}
                isAsideOpen={isAsideOpen}
            />
            <HeaderCab
                asideTrigger={menuOpenHandler}
                isAsideOpen={isAsideOpen}
            >
                <li>
                    <Dropdown>
                        <Dropdown.Btn>
                            <svg
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M31.9999 41.143C39.5741 41.143 45.7142 32.9562 45.7142 22.8572C45.7142 12.7583 39.5741 4.57153 31.9999 4.57153C24.4257 4.57153 18.2856 12.7583 18.2856 22.8572C18.2856 32.9562 24.4257 41.143 31.9999 41.143Z" />
                                <path d="M20.5715 33.6685C20.5715 33.6685 9.04005 36.7313 6.8572 42.8113C4.85758 48.1086 4.07635 53.7881 4.57148 59.4285H59.4286C59.9456 53.7932 59.1878 48.1139 57.2115 42.8113C55.0058 36.7313 43.4972 33.6685 43.4972 33.6685" />
                            </svg>
                            <span>Username</span>
                            <svg
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M52.48 21.76L32 42.24L11.52 21.76" />
                            </svg>
                        </Dropdown.Btn>
                        <Dropdown.Menu>
                            <LinkList linksArr={dropdownLinksCab} />
                            <li>
                                <span
                                    className="navlink"
                                    onClick={() => setIsOpenModal((prevState) => !prevState)}
                                >
                                    <svg
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M44 34L38 40L32 34L26 40L20 34" />
                                        <path d="M23.51 27.5099C24.6249 26.3912 25.9496 25.5036 27.4082 24.8979C28.8668 24.2922 30.4306 23.9805 32.01 23.9805C33.5894 23.9805 35.1532 24.2922 36.6118 24.8979C38.0705 25.5036 39.3952 26.3912 40.51 27.5099" />
                                        <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" />
                                    </svg>
                                    <span>Wallet connect</span>
                                </span>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
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
                        <Btn
                            type="button"
                            className="btn btn-outline-sm"
                            onClick={() => setIsOpenModal(false)}
                        >
                            <span>Close</span>
                        </Btn>
                    </Modal.Footer>
                </Modal>
            </HeaderCab>

            {children}
        </div>
    );
}
