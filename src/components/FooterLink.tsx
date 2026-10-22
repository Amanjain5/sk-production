import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link, useLocation } from 'react-router-dom'

const INTERNAL: Record<string, string> = { "Home": "/", "ABOUT US": "/about", "Contact": "/contact" }
const EXTERNAL: Record<string, string> = {
    "LinkedIn": "https://www.linkedin.com/company/skypcreativestudios",
    "Instagram": "https://www.instagram.com/skyp_creativestudio?exln=amo4cDJzNzhjYzdn&utm_source=qr",
}

// Component

        function FooterLink({
            label,
            external = false,
            isCurrent = false
        }: {
            label: string;
            external?: boolean;
            isCurrent?: boolean;
        }) {
            const location = useLocation();
            const to = INTERNAL[label];
            const current = to ? (to === "/" ? location.pathname === "/" : location.pathname.startsWith(to)) : isCurrent;
            const className = `footer_link_wrap w-inline-block${current ? " w--current" : ""}`;
            const inner = (
                <>
                    <div className={"footer_link_text u-text-style-main"}>
                        [
                    </div>
                    <div className={"footer_link_text u-text-style-small"}>
                        {label}
                    </div>
                    <div className={"footer_link_text u-text-style-main"}>
                        ]
                    </div>
                </>
            );
            if (to) return <Link to={to} className={className}>{inner}</Link>;
            return (
                <a
                    className={className}
                    {...(EXTERNAL[label] ? { href: EXTERNAL[label] } : {})}
                    {...(external ? { target: "_blank" } : {})}
                >
                    {inner}
                </a>
            );
        }
    

export default FooterLink
