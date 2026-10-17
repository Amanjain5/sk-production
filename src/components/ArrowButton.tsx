import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Straight_arrow_right from './icons/Straight_arrow_right.tsx'
import Straight_arrow_right1 from './icons/Straight_arrow_right1.tsx'
import ClickableButton from './ClickableButton.tsx'
import ButtonIcon from './ButtonIcon.tsx'


    
// Component

        function ArrowButton({
            isPointerOn = false,
            iconVariant = "default"
        }: {
            isPointerOn?: boolean;
            iconVariant?: "default" | "alternate";
        }) {
            return (
                <div
                    data-button={" "}
                    data-trigger={"hover focus"}
                    className={
                        isPointerOn
                            ? "button_arrow_wrap u-pointer-on"
                            : "button_arrow_wrap"
                    }
                >
                    <ArrowButtonIcon
                        position="left"
                        iconVariant={iconVariant}
                    />
                    <ArrowButtonIcon
                        position="right"
                        iconVariant={iconVariant}
                    />
                    <div className={"clickable_wrap u-cover-absolute"}>
                        <ClickableButton />
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function ArrowButtonIcon({
            position,
            iconVariant
        }: {
            position: "left" | "right";
            iconVariant: "default" | "alternate";
        }) {
            return (
                <div
                    data-button-icon={position}
                    className={"button_arrow_element"}
                >
                    <div className={"button_arrow_icon"}>
                        {iconVariant === "default" ? (
                            <Straight_arrow_right />
                        ) : (
                            <Straight_arrow_right1 />
                        )}
                    </div>
                </div>
            );
        }
    

export default ArrowButton
