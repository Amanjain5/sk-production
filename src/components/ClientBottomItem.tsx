import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Img from './Img.tsx'


    
// Component

        function ClientBottomItem({
            imageId
        }: {
            imageId: string;
        }) {
            return (
                <div
                    role={"listitem"}
                    className={"clients_bottom_item w-dyn-item"}
                >
                    <div className={"clients_bottom_line_wrap"}>
                        <div className={"clients_bottom_line_active"}>

                        </div>
                    </div>
                    <div className={"clients_bottom_logo"}>
                        <Img id={imageId} />
                    </div>
                </div>
            );
        }
    

export default ClientBottomItem
