import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import FooterLink from './FooterLink.tsx'
import Footer from './Footer.tsx'


        type FooterGroupData = {
            links: Array<{
                label: string;
                external?: boolean;
                isCurrent?: boolean;
            }>;
        };
    
// Component

        function FooterGroup({
            dataId
        }: {
            dataId: string;
        }) {
            const { links }: FooterGroupData = getFooterGroupData(dataId);

            return (
                <section
                    data-trigger={"group"}
                    className={"footer_group_wrap"}
                >
                    <div className={"footer_group_list"}>
                        {links.map((link) => (
                            <FooterGroupItem
                                key={link.label}
                                label={link.label}
                                external={link.external}
                                isCurrent={link.isCurrent}
                            />
                        ))}
                    </div>
                </section>
            );
        }
    

// Subcomponents

        function FooterGroupItem({
            label,
            external,
            isCurrent
        }: {
            label: string;
            external?: boolean;
            isCurrent?: boolean;
        }) {
            return (
                <li
                    data-trigger={"hover focus"}
                    role={"listitem"}
                    data-state={"current"}
                    className={"footer_group_item"}
                >
                    <FooterLink
                        label={label}
                        {...(external !== undefined ? { external } : {})}
                        {...(isCurrent !== undefined ? { isCurrent } : {})}
                    />
                </li>
            );
        }
    


        function getFooterGroupData(id: string | number): FooterGroupData {
            const data: Record<string, FooterGroupData> = {
                "0": {
                    links: [
                        {
                            label: "LinkedIn",
                            external: true
                        },
                        {
                            label: "Instagram",
                            external: true
                        }
                    ]
                },
                "1": {
                    links: [
                        {
                            label: "Imprint"
                        },
                        {
                            label: "Privacy Policy"
                        }
                    ]
                },
                "2": {
                    links: [
                        {
                            label: "Home",
                            isCurrent: true
                        },
                        {
                            label: "ABOUT US"
                        },
                        {
                            label: "Contact"
                        }
                    ]
                }
            };

            return data[String(id)] ?? { links: [] };
        }
    

export default FooterGroup
