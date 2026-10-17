import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_pointing_right from './icons/Arrow_pointing_right.tsx'
import MainButton from './MainButton.tsx'
import { Link } from 'react-router-dom'


// Component

        function MainButton1({
            label
        }: {
            label: string;
        }) {
            return (
                <div
                    data-button={" "}
                    data-trigger={"hover focus"}
                    data-hover-btn-40={"true"}
                    className={"button_main_wrap"}
                >
                    <ButtonIcon position="left" />
                    <div className={"button_main_element"}>
                        <div className={"button_main_text"}>
                            {label}
                        </div>
                    </div>
                    <div className={"clickable_wrap u-cover-absolute"}>
                        <Link to="/contact" aria-label={label} className={"clickable_link w-inline-block"}></Link>
                    </div>
                    <ButtonIcon position="right" />
                </div>
            );
        }
    

// Subcomponents

        function ButtonIcon({
            position
        }: {
            position: "left" | "right";
        }) {
            return (
                <div
                    data-button-icon={position}
                    className={"button_main_icon_wrap"}
                >
                    <div className={"button_main_icon"}>
                        <Arrow_pointing_right />
                    </div>
                </div>
            );
        }
    

export default MainButton1
