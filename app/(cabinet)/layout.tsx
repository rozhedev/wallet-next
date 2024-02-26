"use client";

import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Dropdown from "@/ui/Dropdown";
import Modal from "@/ui/Modal";

import LinkList from "@/components/LinkList";
import HeaderCab, { dropdownLinksCab } from "@/modules/layout/HeaderCab";
import AsideCab, { asideCabLinks } from "@/modules/layout/AsideCab";
import WalletConnect from "@/modules/Forms/WalletConnect";
import { chevronBottomIcon, doorExitIcon, userIcon } from "@/data/pages/ui-icons";
import { walletConnectIcon } from "@/data/pages/web3-icons";
import { isWindowUndefined } from "@/utils/predicates";
import Btn from "@/ui/Btn/Btn";

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
    const menuToggleHandler = () => setIsAsideOpen((prevState) => !prevState);
    const { data: session } = useSession();

    // * WC - Wallet Connect
    const [isWCOpen, setIsWCOpen] = useState<boolean>(false);

    // * Remove _lock class, added in Header.tsx
    isWindowUndefined() && document.body.classList.remove("_lock");

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

                            <span>{session?.user?.name}</span>

                            {chevronBottomIcon}
                        </Dropdown.Btn>
                        <Dropdown.Menu>
                            {/* <LinkList linksArr={dropdownLinksCab} /> */}
                            <li>
                                <Btn
                                    className="navlink"
                                    onClick={() => signOut()}
                                >
                                    {doorExitIcon}
                                    <span>Sign Out</span>
                                </Btn>
                            </li>
                            <li>
                                <span
                                    className="navlink"
                                    onClick={() => setIsWCOpen((prevState) => !prevState)}
                                >
                                    {walletConnectIcon}
                                    <span>WalletConnect</span>
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
                        <WalletConnect setIsOpenModal={setIsWCOpen} />
                    </Modal.Content>
                </Modal>
            </HeaderCab>

            {children}
        </div>
    );
}
