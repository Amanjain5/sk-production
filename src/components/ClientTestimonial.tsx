import React from 'react'
import type { JSX } from 'react/jsx-runtime'



        type ClientTestimonialData = {
            poster: string;
            quote: string;
            name: string;
            company: string;
        };
    
// Component

        function ClientTestimonial({
            dataId
        }: {
            dataId: string;
        }) {
            const {
                poster,
                quote,
                name,
                company
            }: ClientTestimonialData = getClientTestimonialData(dataId);

            return (
                <div
                    id={"w-node-_4b071426-780b-5fdc-b144-14a2fdfd819a-8a0e74dc"}
                    role={"listitem"}
                    className={"clients_top_item w-dyn-item"}
                >
                    <div className={"clients_top_visual_wrap"}>
                        <div className={"u-video w-embed"}>
                            <video
                                muted={""}
                                loop={""}
                                playsInline={""}
                                preload={"none"}
                                className={"u-video u-cover-absolute lazy-video"}
                                poster={poster}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                            >
                                <source type={"video/mp4"}>

                                </source>
                            </video>
                        </div>
                    </div>

                    <div className={"clients_card_wrap"}>
                        <div
                            data-number={"60"}
                            className={"c-paragraph w-variant-b8555f10-fa7d-e9ba-e262-f9aa44c27c1c w-richtext u-letter-spacing-loose-2"}
                        >
                            <p>
                                {quote}
                            </p>
                        </div>

                        <div className={"clients_card_info_wrap"}>
                            <h2 className={"clients_card_info_name u-text-style-main u-text-trim-on"}>
                                {name}
                            </h2>

                            <div className={"clients_card_info_company u-text-style-main u-color-faded"}>
                                {company}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    


        function getClientTestimonialData(
            id: string | number
        ): ClientTestimonialData {
            const testimonials: Record<string, ClientTestimonialData> = {
                "0": {
                    poster: "images/80e31917-4d4e-4c7f-ade6-8e7c0cf9bff7.jpg",
                    quote: "Working with Snacked is extremely efficient, structured, and pleasantly uncomplicated. Compared to other agencies, their speed combined with high content quality is particularly impressive. It's simply a pleasure working with the team!",
                    name: "Felix Saller",
                    company: "CEO & Partner Green Hill Bikepark"
                },

                "1": {
                    poster: "images/b4ec912c-e8ee-463f-b707-573a78325441.jpg",
                    quote: "Working with Snacked is extremely efficient, structured, and pleasantly uncomplicated. Compared to other agencies, their speed combined with high content quality is particularly impressive. It's simply a pleasure working with the team!",
                    name: "Martin Schlenker",
                    company: "Head of Marketing, Sunlight GmbH"
                },

                "2": {
                    poster: "images/2698fc52-449f-4222-9366-12213778957d.jpg",
                    quote: "What often takes forever in the planning stages of other productions felt like it was implemented instantly with Snacked. Small team, direct communication, quick decisions—and yet an extremely high-quality output. We were particularly impressed by their social-first approach from the very beginning, which resulted in much more usable content than just the classic hero piece.",
                    name: "Benjamin Dieckhoff",
                    company: "Marketing Manager Bike / Consumer Products, Fidlock"
                },

                "3": {
                    poster: "images/42cff727-8281-4895-92b8-fc6ff7bf3a27.jpg",
                    quote: "Working with SNACKED is professional, creative, and incredibly easy. Their proactive mindset and efficient workflow save our team a tremendous amount of time and effort.",
                    name: "Janik Quitsch",
                    company: "Head of Marketing, R RAYMON Bicycles GmbH"
                },

                "4": {
                    poster: "images/90008684-3302-4411-bfcb-1d85f86f3d9c.jpg",
                    quote: "Working with Snacked is simply a pleasure—they're incredibly friendly, uncomplicated, and always open to new ideas. Especially in the area of ​​short content, they're extremely on the cutting edge and deliver outstanding output with an unbelievably high level of technical expertise—both in production and concept development. We also particularly appreciate their approach to the media database and the entire workflow. Highly recommended!",
                    name: "Jens-nico Wiegand",
                    company: "Head of Marketing, Gonso"
                },

                "5": {
                    poster: "images/27b4a1c4-0341-4730-816a-217f2e6118c1.jpg",
                    quote: "We've partnered with SNACKED for over three years, and every project has been professional, seamless, and enjoyable. Their ability to present products in an authentic, natural way sets their work apart. Rather than feeling like traditional product or advertising videos, the content has the look and feel of premium editorial storytelling—perfectly reflecting the premium character of Lupine.",
                    name: "Sophie Frauenknecht",
                    company: "Lupine Lighting Systems GmbH"
                }
            };

            const stringId = String(id);

            return testimonials[stringId] ?? testimonials["0"];
        }
    

export default ClientTestimonial
