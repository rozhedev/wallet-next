import React, { FC, useState } from "react";
import Image from "next/image";
import Modal from "@/ui/Modal";
import Btn from "@/ui/Btn/Btn";
import Dropdown from "@/ui/Dropdown";
import CopyBtn from "@/components/CopyBtn";

import type { TBalanceItem } from "./types";
import type { TAllCurNotesScope } from "@/types/data/currencies";
import { balanceItemIcons } from "./data/icons";
import { assetsCabModalData } from "@/data/modals/data";

export const BalanceItem: FC<TBalanceItem<TAllCurNotesScope>> = ({ curIconPath, curIconAlt, curName, pureAmount, usdAmount, walletAddress, isAdded, isAssetsCab }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    return (
        <>
            {isAdded ? (
                <div className="balance-item">
                    <div className="balance-item__content">
                        <Image
                            src={curIconPath}
                            alt={curIconAlt}
                            className="balance-item__img"
                        />
                        <span className="navlink">{curName}</span>
                    </div>
                    <div className="balance-item__values">
                        {/* //* Add to fixed for correct output */}
                        <span className="balance-item__cur-amount h5">{usdAmount.toFixed(8)}</span>
                        <span className="balance-item__usd-amount h5">{pureAmount.toFixed(2)}$</span>
                    </div>

                    {isAssetsCab && (
                        <>
                            <nav className="asset-actions">
                                <ul>
                                    <li>
                                        <span
                                            className="navlink"
                                            onClick={() => setIsOpenModal(true)}
                                        >
                                            {balanceItemIcons.send}
                                            <span>Send</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            className="navlink"
                                            onClick={() => setIsOpenModal(true)}
                                        >
                                            {balanceItemIcons.get}
                                            <span>Get</span>
                                        </span>
                                    </li>
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Btn>
                                                {balanceItemIcons.more}
                                                <span>More</span>
                                                {balanceItemIcons.chevron}
                                            </Dropdown.Btn>
                                            <Dropdown.Menu>
                                                <li>
                                                    <span className="navlink">
                                                        {balanceItemIcons.remove}
                                                        <span>Remove</span>
                                                    </span>
                                                </li>
                                                <li>
                                                    <CopyBtn
                                                        className="copy-btn navlink"
                                                        beforeClickLabel="Copy address"
                                                        afterClickLabel="Address copied"
                                                        value={walletAddress}
                                                    />
                                                </li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </nav>
                            <Modal
                                modalId={assetsCabModalData.send.id}
                                modalDialogClassName={assetsCabModalData.send.modalDialogClassName}
                                isOpen={isOpenModal}
                                onCloseModal={() => setIsOpenModal(false)}
                            >
                                <Modal.Header
                                    titleIcon={assetsCabModalData.send.titleIcon}
                                    title={assetsCabModalData.send.title}
                                ></Modal.Header>

                                <Modal.Content className="modal-dialog__body">{assetsCabModalData.send.content}</Modal.Content>
                                <Modal.Footer className="modal-footer btn-group">
                                    <Btn
                                        type="submit"
                                        className="btn btn-fill-sm"
                                    >
                                        <span>Send</span>
                                    </Btn>
                                </Modal.Footer>
                            </Modal>
                        </>
                    )}
                </div>
            ) : (
                <Btn
                    type="button"
                    title={curName}
                    className="store-asset-item"
                >
                    <Image
                        className="store-asset-item__currency-img"
                        src={curIconPath}
                        alt={curIconAlt}
                    />
                    <span className="store-asset-item__label navlink">{curName}</span>
                    <span className="custom-plus-icon"></span>
                </Btn>
            )}
        </>
    );
};
