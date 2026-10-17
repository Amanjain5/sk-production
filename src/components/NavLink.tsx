import React from 'react'
import type { JSX } from 'react/jsx-runtime'
import { Link } from 'react-router-dom'



    
// Component

        function NavLink({
            label,
            isCurrent = false,
            href
        }: {
            label: string;
            isCurrent?: boolean;
            href?: string;
        }) {
            const className = `nav_links_link w-inline-block${isCurrent ? " w--current" : ""}`;
            const inner = (
                <div
                    data-chars-stagger={""}
                    className={"nav_links_text"}
                >
                    {label}
                </div>
            );
            if (href === "/" || href === "/about" || href === "/contact" || href === "/projects") {
                return (
                    <Link
                        to={href}
                        className={className}
                        aria-label={label}
                        aria-current={isCurrent ? "page" : undefined}
                        data-chars-stagger-wrapper=""
                        data-trigger={"hover focus"}
                    >
                        {inner}
                    </Link>
                );
            }
            return (
                <a
                    href={href}
                    className={className}
                    aria-label={label}
                    data-chars-stagger-wrapper=""
                    data-trigger={"hover focus"}
                >
                    {inner}
                </a>
            );
        }
    

export default NavLink
