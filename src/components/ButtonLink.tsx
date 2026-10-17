import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Bold_arrow_pointing_right from './icons/Bold_arrow_pointing_right.tsx'
import ClickableButton from './ClickableButton.tsx'


// Component

        function ButtonLink({ text }: { text: string }) {
            return (
                <div
                    data-button={" "}
                    data-trigger={"hover focus"}
                    className={"button_link_wrap"}
                >
                    <div className={"clickable_wrap u-cover-absolute"}>
                        <ClickableButton />
                    </div>
                    <div className={"button_link_element w-variant-9876ba58-ec8f-292e-80fe-735d452a9bcd"}>
                        <div
                            data-chars-stagger={""}
                            className={"button_link_text"}
                        >
                            {text}
                        </div>
                        <div className={"button_link_line w-variant-9876ba58-ec8f-292e-80fe-735d452a9bcd"}>

                        </div>
                        <div className={"button_link_icon"}>
                            <Bold_arrow_pointing_right />
                        </div>
                    </div>
                </div>
            );
        }
    

export default ButtonLink
