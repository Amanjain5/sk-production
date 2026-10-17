import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import PartnerLogoItem from './PartnerLogoItem.tsx'


// Component

        function PartnerLogoList() {
            return (
                <div className={"partner_logo_list_wrap"}>
                    <PartnerLogoGroup />
                    <PartnerLogoGroup />
                    <PartnerLogoGroup />
                </div>
            );
        }
    

// Subcomponents

        function PartnerLogoGroup() {
            const logoIds = [
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
            ];

            return (
                <div className={"u-display-contents w-dyn-list"}>
                    <div
                        role={"list"}
                        className={"partner_logo_list w-dyn-items"}
                    >
                        {logoIds.map((imgId) => (
                            <PartnerLogoItem
                                key={imgId}
                                imgId={imgId}
                            />
                        ))}
                    </div>
                </div>
            );
        }
    

export default PartnerLogoList
