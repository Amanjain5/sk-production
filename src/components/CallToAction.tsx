import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Curved_arrow_turn_right from './icons/Curved_arrow_turn_right.tsx'


// Component

        function CallToAction({
            text
        }: {
            text: string;
        }) {
            return (
                <div
                    data-trigger={"hover focus"}
                    className={"button_cta_wrap"}
                >
                    <div className={"button_cta_element w-variant-85e5cda1-3aa4-d008-e746-b612baa98508"}>
                        <div className={"button_cta_icon w-variant-85e5cda1-3aa4-d008-e746-b612baa98508"}>
                            <Curved_arrow_turn_right />
                        </div>
                        <div
                            data-chars-stagger={""}
                            className={"button_cta_text w-variant-85e5cda1-3aa4-d008-e746-b612baa98508"}
                        >
                            {text}
                        </div>
                        <div className={"button_cta_line"}>

                        </div>
                    </div>
                    <div className={"clickable_wrap u-cover-absolute"}>
                        <a className={"clickable_link w-inline-block"}>

                        </a>
                    </div>
                </div>
            );
        }
    

export default CallToAction
