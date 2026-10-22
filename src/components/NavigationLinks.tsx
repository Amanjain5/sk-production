import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import NavLink from './NavLink.tsx'


// Component

        function NavigationLinks({
            activePage = "Home"
        }: {
            activePage?: string;
        }) {
            return (
                <ul
                    role="list"
                    className="nav_links_wrap w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-list-unstyled"
                >
                    <NavListItem
                        label="Home"
                        href="/"
                        isCurrent={activePage === "Home"}
                    />
                    <NavListItem
                        label="About SNCKD"
                        href="/about"
                        isCurrent={activePage === "About SKYP" || activePage === "About"}
                    />
                    <NavListItem
                        label="Gallery"
                        href="/projects"
                        isCurrent={activePage === "Gallery"}
                    />
                    <NavListItem
                        label="Contact"
                        href="/contact"
                        isCurrent={activePage === "Contact"}
                    />
                </ul>
            );
        }
    

// Subcomponents

        function NavListItem({
            label,
            href,
            isCurrent
        }: {
            label: string;
            href?: string;
            isCurrent: boolean;
        }) {
            return (
                <li className="nav_links_item">
                    <NavLink
                        label={label}
                        href={href}
                        isCurrent={isCurrent}
                    />
                </li>
            );
        }
    

export default NavigationLinks
