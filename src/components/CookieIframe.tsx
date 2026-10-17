import React from 'react'
import type { JSX } from 'react/jsx-runtime'



    
// Component

        function CookieIframe({
            className,
            name,
            sandbox,
            src
        }: {
            className: string;
            name?: string;
            sandbox?: string;
            src?: string;
        }) {
            return (
                <iframe
                    className={className}
                    name={name}
                    tabIndex={-1}
                    role="presentation"
                    title="Blank"
                    sandbox={sandbox}
                    src={src}
                >
                </iframe>
            );
        }
    

export default CookieIframe
