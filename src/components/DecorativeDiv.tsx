import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function DecorativeDiv({
            className,
            backgroundColor
        }: {
            className: string;
            backgroundColor?: string;
        }) {
            return (
                <div
                    className={className}
                    {...(backgroundColor !== undefined
                        ? { style: { backgroundColor } }
                        : {})}
                >
                </div>
            );
        }
    

export default DecorativeDiv
