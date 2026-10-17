import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function MainButton({ label = "See more" }: { label?: string }) {
            return (
                <div className={"button_main_element"}>
                    <div className={"button_main_text"}>
                        {label}
                    </div>
                </div>
            );
        }
    

export default MainButton
