import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function CtaText({ text }: { text: string }) {
            return (
                <div
                    data-chars-stagger={""}
                    className={"button_cta_text"}
                >
                    {text}
                </div>
            );
        }
    

export default CtaText
