import React, { FC, useState } from "react";
import Image from "next/image";

import type { TBalanceItem } from "./types";
import type { TAllCurNotesScope } from "@/types/data/currencies";

import Btn from "@/ui/Btn/Btn";
import Dropdown from "@/ui/Dropdown";
import CopyBtn from "@/components/CopyBtn";
import SendCur from "@/modules/Forms/SendCur";
import GetCur from "@/modules/Forms/GetCur";
import SendToCard from "@/modules/Forms/SendToCard";
import { chevronBottomIcon, creditCard, exportIcon, importIcon, menuDotsVerticalIcon, trashIcon } from "@/data/pages/ui-icons";

export const BalanceItem: FC<TBalanceItem<TAllCurNotesScope>> = ({ curIconPath, curIconAlt, curName, pureAmount, usdAmount, walletAddress, qrCodeImg, isAdded, isAssetsCab, toggleItemHandler }) => {
    const [isOpenModal, setIsOpenModal] = useState<{ sendCard: boolean; send: boolean; get: boolean }>({
        sendCard: false,
        send: false,
        get: false,
    });

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
                        {/* Add to fixed for correct output */}
                        <span className="balance-item__cur-amount h5">{pureAmount.toFixed(8)}</span>
                        <span className="balance-item__usd-amount h5">{usdAmount.toFixed(2)}$</span>
                    </div>

                    {isAssetsCab && (
                        <>
                            <nav className="asset-actions">
                                <ul>
                                    <li>
                                        <span
                                            className="navlink"
                                            onClick={() => setIsOpenModal({ ...isOpenModal, sendCard: true })}
                                        >
                                            {creditCard}
                                            <span>Send to card</span>
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            className="navlink"
                                            onClick={() => setIsOpenModal({ ...isOpenModal, get: true })}
                                        >
                                            {importIcon}
                                            <span>Get</span>
                                        </span>
                                    </li>
                                    <li>
                                        <Dropdown>
                                            <Dropdown.Btn>
                                                {menuDotsVerticalIcon}
                                                <span>More</span>
                                                {chevronBottomIcon}
                                            </Dropdown.Btn>
                                            <Dropdown.Menu>
                                                <li>
                                                    <span
                                                        className="navlink"
                                                        onClick={() => setIsOpenModal({ ...isOpenModal, send: true })}
                                                    >
                                                        {exportIcon}
                                                        <span>Send</span>
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
                                                <li>
                                                    <span
                                                        className="navlink"
                                                        onClick={toggleItemHandler}
                                                    >
                                                        {trashIcon}
                                                        <span>Remove</span>
                                                    </span>
                                                </li>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                </ul>
                            </nav>

                            <SendToCard
                                modalId={`modal-send-${curIconAlt}`}
                                formId={`send-${curIconAlt}-form`}
                                pureAmount={pureAmount}
                                isOpen={isOpenModal}
                                setIsOpenModal={setIsOpenModal}
                            />
                            <SendCur
                                modalId={`modal-send-${curIconAlt}`}
                                formId={`send-${curIconAlt}-form`}
                                pureAmount={pureAmount}
                                isOpen={isOpenModal}
                                setIsOpenModal={setIsOpenModal}
                            />
                            <GetCur
                                modalId={`modal-get-${curIconAlt}`}
                                walletAddress={walletAddress}
                                curName={curName}
                                qrCodeImg={qrCodeImg}
                                isOpen={isOpenModal.get}
                                onCloseModal={() => setIsOpenModal({ ...isOpenModal, get: false })}
                            />
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
                    <span
                        className="custom-plus-icon"
                        onClick={toggleItemHandler}
                    ></span>
                </Btn>
            )}
        </>
    );
};
