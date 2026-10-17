import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_pointing_right from './icons/Arrow_pointing_right.tsx'


    
// Component

        function ButtonIcon({
            position
        }: {
            position: "left" | "right";
        }) {
            return (
                <div
                    data-button-icon={position}
                    className="button_main_icon_wrap"
                >
                    <div className="button_main_icon">
                        <Arrow_pointing_right />
                    </div>
                </div>
            );
        }
    

export default ButtonIcon
