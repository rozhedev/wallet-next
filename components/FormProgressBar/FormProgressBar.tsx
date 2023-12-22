import React, { FC } from "react";
import type { TFormProgressBarProps } from "./types";

export const FormProgressBar: FC<TFormProgressBarProps> = ({}) => {
    return (
        <ul className="progress-bar">
            <li
                className="progress-line-active"
                id="progress-line-active"
            ></li>
            <li className="progress-step navlink _active"></li>
            <li className="progress-step navlink"></li>
            <li className="progress-step navlink"></li>
        </ul>
    );
};
