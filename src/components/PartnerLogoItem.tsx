import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


    
// Component

        function PartnerLogoItem({
            imgId
        }: {
            imgId: string;
        }) {
            return (
                <div
                    role={"listitem"}
                    className={"partner_logo_item w-dyn-item"}
                >
                    <div className={"partner_logo_img"}>
                        <Img id={imgId} />
                    </div>
                </div>
            );
        }
    

export default PartnerLogoItem
