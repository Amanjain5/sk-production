import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function ClickableWrap() {
            return (
                <div className={"clickable_wrap u-cover-absolute"}>
                    <ClickableLink />
                </div>
            );
        }
    

// Subcomponents

        function ClickableLink() {
            return (
                <a className={"clickable_link w-inline-block"}>
                </a>
            );
        }
    

export default ClickableWrap
