import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function Tag({ label }: { label: string }) {
            return (
                <div className={"tag_layout"}>
                    <div className={"tag_text u-text-style-main"}>
                        [
                    </div>
                    <div className={"tag_text u-text-style-small"}>
                        {label}
                    </div>
                    <div className={"tag_text u-text-style-main"}>
                        ]
                    </div>
                </div>
            );
        }
    

export default Tag
