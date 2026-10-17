import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function FactCenterNumberList() {
            const values: string[] = [
                "0s",
                "0,1s",
                "0,2s",
                "0,3s",
                "0,4s",
                "0,5s",
                "0,6s",
                "0,7s",
                "0,8s",
                "0,9s",
                "1,0s",
                "1,1s",
                "1,2s",
                "1,3s",
                "1,4s",
                "1,5s",
                "1,6s",
                "1,7s",
                "1,8s",
                "1,9s"
            ];

            return (
                <div className={"fact_center_number_list"}>
                    {values.map((value) => (
                        <FactCenterNumberItem
                            key={value}
                            value={value}
                        />
                    ))}
                </div>
            );
        }
    

// Subcomponents

        function FactCenterNumberItem({
            value
        }: {
            value: string;
        }) {
            return (
                <div className={"fact_center_number_text_wrap"}>
                    <div className={"fact_center_number_text u-text-trim-on"}>
                        {value}
                    </div>
                </div>
            );
        }
    

export default FactCenterNumberList
