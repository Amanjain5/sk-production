import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Tag from './Tag.tsx'
import ServiceItem from './ServiceItem.tsx'


// Component

        function ServicesSection() {
            return (
                <section className="services_wrap u-section">
                    <div className="u-embed-css w-embed sf-hidden">
                    </div>
                    <div className="services_contain u-container">
                        <div className="services_layout">
                            <div className="services_top_wrap">
                                <div className="tag_wrap">
                                    <Tag label="MODES OF COLLABORATION" />
                                </div>
                                <div
                                    data-number="20"
                                    className="c-heading w-variant-701c4b6c-37cf-de59-d80d-80a1822c4994 w-richtext u-text-trim-on"
                                >
                                    <h2>
                                        Three ways to work with us.
                                    </h2>
                                </div>
                            </div>
                            <div className="w-dyn-list">
                                <div
                                    role="list"
                                    className="services_list w-dyn-items"
                                >
                                    <ServiceItem dataId="0" />
                                    <ServiceItem dataId="1" />
                                    <ServiceItem dataId="2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    

export default ServicesSection
