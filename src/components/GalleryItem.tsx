import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


    
// Component

        function GalleryItem({
            variant,
            imgId
        }: {
            variant: "1" | "2" | "7" | "8";
            imgId: string;
        }) {
            return (
                <div className={`galllery_item is-${variant}`}>
                    <Img id={imgId} />
                </div>
            );
        }
    

export default GalleryItem
