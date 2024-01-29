"use client";

import React, { useState } from "react";
import Dropdown from "@/ui/Dropdown";
import Modal from "@/ui/Modal";

import LinkList from "@/components/LinkList";
import HeaderCab, { dropdownLinksCab } from "@/modules/layout/HeaderCab";
import AsideCab, { asideCabLinks } from "@/modules/layout/AsideCab";
import WalletConnect from "@/modules/Forms/WalletConnect";
import { chevronBottomIcon, userIcon } from "@/data/pages/ui-icons";
import { walletConnectIcon } from "@/data/pages/web3-icons";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
    const menuToggleHandler = () => setIsAsideOpen((prevState) => !prevState);

    // * WC - Wallet Connect
    const [isWCOpen, setIsWCOpen] = useState<boolean>(false);

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
                                    onClick={() => setIsWCOpen((prevState) => !prevState)}
                                >
                                    {walletConnectIcon}
                                    <span>Wallet connect</span>
                                </span>
                            </li>
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
                {/* //* Wallet Connect form */}
                <Modal
                    modalId="modal-connect"
                    modalDialogClassName="modal-dialog modal-dialog--info modal-dialog--connect"
                    isOpen={isWCOpen}
                    onCloseModal={() => setIsWCOpen(false)}
                >
                    <Modal.Header
                        titleIcon={walletConnectIcon}
                        title="WalletConnect"
                    />
                    <Modal.Content className="modal-dialog__body form-wrapper">
                        <WalletConnect setIsOpenModal={setIsWCOpen}/>
                    </Modal.Content>
                </Modal>
            </HeaderCab>

            {children}
        </div>
    );
}
