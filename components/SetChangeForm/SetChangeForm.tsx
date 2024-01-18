import React, { FC, SyntheticEvent, useState } from "react";
import Link from "next/link";

import type { TSetChangeFormProps } from "./types";
import StyledWrapper from "@/ui/StyledWrapper/StyledWrapper";
import Inp from "@/ui/Inp/Inp";
import Btn from "@/ui/Btn/Btn";
import Modal from "@/ui/Modal";
import { settingsModalData } from "@/data/modals/data";
import { ROUTES } from "@/data/routes";

export const SetChangeForm: FC<TSetChangeFormProps> = ({ formId, inpType, inpId, minLength, maxLength, placeholder, label }) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isDataSend, setIsDataSend] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");

    const submitHandler: (e: SyntheticEvent) => Promise<any> = async (e) => {
        e.preventDefault();
        
        // * Mock request
        await new Promise((resolve: any) => {
            setIsDataSend(true);
            setTimeout(resolve, 1500);
        });
        await new Promise((resolve: any) => {
            setIsDataSend(false);
            setTimeout(resolve, 2000);
            setIsOpenModal(true);
            setValue("");
        });

        // * TODO Submit to server
        // * ...
    };

    return (
        <form
            action={ROUTES.private.settings}
            method="post"
            id={formId}
            className="form settings-change-form"
            onSubmit={submitHandler}
        >
            <StyledWrapper className="form-controller">
                <Inp
                    type={inpType}
                    id={inpId}
                    title={label}
                    label={label}
                    required
                    minLength={minLength}
                    maxLength={maxLength}
                    className="inp"
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <small className="form-controller__error"></small>
            </StyledWrapper>
            <Btn
                type="submit"
                className="btn btn-fill-sm"
                disabled={isDataSend}
            >
                <span>{isDataSend ? "Sending..." : "Change"}</span>
            </Btn>
            <Modal
                modalId={settingsModalData.id}
                modalDialogClassName={settingsModalData.modalDialogClassName}
                isOpen={isOpenModal}
                onCloseModal={() => setIsOpenModal(false)}
            >
                <Modal.Header
                    titleIcon={settingsModalData.titleIcon}
                    title={settingsModalData.title}
                ></Modal.Header>

                <Modal.Content className="modal-dialog__body">{settingsModalData.content}</Modal.Content>
                <Modal.Footer className="modal-footer btn-group">
                    <Link
                        className="btn btn-outline-sm"
                        href="/settings"
                        scroll={false}
                        onClick={() => setIsOpenModal(false)}
                    >
                        <span>Close</span>
                    </Link>
                </Modal.Footer>
            </Modal>
        </form>
    );
};
