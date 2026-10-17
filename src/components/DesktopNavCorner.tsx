import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component

        function DesktopNavCorner() {
            return (
                <div className={"nav_desktop_corner"}>
                    <div data-stroke={"corner"} className={"g_corner_wrap"}>
                        <CornerItem />
                        <CornerItem variant="184d5821-e27e-4abc-3885-0c4d5f7ac467" />
                        <CornerItem variant="63d23aba-50cc-94f6-ccbc-3a304f1f9855" />
                        <CornerItem variant="dc7e8987-a344-b981-5809-84a480bbcb55" />
                    </div>
                </div>
            );
        }
    

// Subcomponents

        function CornerItem({
            variant
        }: {
            variant?: string;
        }) {
            const variantClass = variant
                ? ` w-variant-${variant}`
                : "";

            return (
                <div
                    style={{
                        "--corner-size": "var(--corner--navbar)"
                    } as React.CSSProperties}
                    className={`g_corner_item${variantClass}`}
                >
                    <div className={`g_corner_el${variantClass}`}>

                    </div>
                </div>
            );
        }
    

export default DesktopNavCorner
