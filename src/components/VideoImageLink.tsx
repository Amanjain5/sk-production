import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


    
// Component

        function VideoImageLink({
            imageId
        }: {
            imageId: string;
        }) {
            return (
                <a
                    target={"_blank"}
                    style={{
                        zIndex: "2147483647",
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        width: "16px",
                        height: "16px",
                        minWidth: "16px",
                        minHeight: "16px",
                        maxWidth: "16px",
                        maxHeight: "16px"
                    }}
                >
                    <Img id={imageId} />
                </a>
            );
        }
    

export default VideoImageLink
