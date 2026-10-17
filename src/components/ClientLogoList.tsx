import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ClientBottomItem from './ClientBottomItem.tsx'


// Component

        function ClientLogoList() {
            const imageIds = ["10", "6", "18", "12", "43", "44"];

            return (
                <div role={"list"} className={"clients_logo_list w-dyn-items"}>
                    {imageIds.map((imageId) => (
                        <ClientBottomItem
                            key={imageId}
                            imageId={imageId}
                        />
                    ))}
                </div>
            );
        }
    

export default ClientLogoList
