import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ClientTestimonial from './ClientTestimonial.tsx'


// Component

        function ClientTestimonialList() {
            return (
                <div
                    role={"list"}
                    className={"clients_top_list w-dyn-items"}
                >
                    <ClientTestimonial dataId="0" />
                    <ClientTestimonial dataId="1" />
                    <ClientTestimonial dataId="2" />
                    <ClientTestimonial dataId="3" />
                    <ClientTestimonial dataId="4" />
                    <ClientTestimonial dataId="5" />
                </div>
            );
        }
    

export default ClientTestimonialList
