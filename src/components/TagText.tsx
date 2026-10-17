import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Tag from './Tag.tsx'


    
// Component

        function TagText({
            text,
            textStyle
        }: {
            text: string;
            textStyle: "main" | "small";
        }) {
            return (
                <div className={`tag_text u-text-style-${textStyle}`}>
                    {text}
                </div>
            );
        }
    

export default TagText
