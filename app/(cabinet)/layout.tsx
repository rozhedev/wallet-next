"use client";

import React, { useState } from "react";
import Dropdown from "@/ui/Dropdown";
import Btn from "@/ui/Btn/Btn";
import Modal from "@/ui/Modal";

import LinkList from "@/components/LinkList";
import HeaderCab, { dropdownLinksCab } from "@/modules/layout/HeaderCab";
import AsideCab, { asideCabLinks } from "@/modules/layout/AsideCab";
import { promoModalData } from "@/data/modals/data";
import { chevronBottomIcon, userIcon } from "@/data/pages/ui-icons";
import { walletConnectIcon } from "@/data/pages/web3-icons";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
    const menuToggleHandler = () => setIsAsideOpen(() => !isAsideOpen);

    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    // * Remove _lock class, added in Header.tsx
    typeof window !== "undefined" && document.body.classList.remove("_lock");

    return (
        <div className="page">
            {/* //* Don't change component position for prevent layout errors */}

            <AsideCab
                linksArr={asideCabLinks}
                isAsideOpen={isAsideOpen}
                setIsAsideOpen={setIsAsideOpen}
            />
            <HeaderCab
                isAsideOpen={isAsideOpen}
                toggleHandler={menuToggleHandler}
            >
                <li>
                    <Dropdown>
                        <Dropdown.Btn>
                            {userIcon}

                            <span>Username</span>

                            {chevronBottomIcon}
                        </Dropdown.Btn>
                        <Dropdown.Menu>
                            <LinkList linksArr={dropdownLinksCab} />
                            <li>
                                <span
                                    className="navlink"
                                    onClick={() => setIsOpenModal((prevState) => !prevState)}
                                >
                                    {walletConnectIcon}
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
                    />
                    <Modal.Content className="modal-dialog__body">{promoModalData.success.content}</Modal.Content>
                    <Modal.Footer className="modal-footer btn-group">
                        <Btn
                            type="button"
                            className="btn btn-fill-sm"
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
