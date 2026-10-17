import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Arrow_pointing_down from './icons/Arrow_pointing_down.tsx'


// Component

        function LargeButton({ label }: { label: string }) {
            return (
                <div className={"button_large_element"}>
                    <div
                        data-chars-stagger={""}
                        className={"button_large_text u-text-style-h3 u-text-trim-on"}
                    >
                        {label}
                    </div>
                    <div className={"button_large_icon"}>
                        <Arrow_pointing_down />
                    </div>
                    <div className={"button_large_line"}>

                    </div>
                </div>
            );
        }
    

export default LargeButton
