import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/about.css'

const CDN = 'https://cdn.prod.website-files.com/6a017aab5e6bd1ba8a0e742e'
const CMS = 'https://cdn.prod.website-files.com/6a017aaf5e6bd1ba8a0e74f5'

function Tag({ text }: { text: string }) {
  return (
    <div data-tag="wrapper" className="tag_wrap">
      <div className="tag_layout">
        <div data-tag="left-bracket" className="tag_text u-text-style-main">[</div>
        <div data-tag="text" className="tag_text u-text-style-small">{text}</div>
        <div data-tag="right-bracket" className="tag_text u-text-style-main">]</div>
      </div>
    </div>
  )
}

function Line() {
  return <div data-element-line="horizontal" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className="g_line"></div>
}

const cornerVariants = [
  '',
  ' w-variant-184d5821-e27e-4abc-3885-0c4d5f7ac467',
  ' w-variant-63d23aba-50cc-94f6-ccbc-3a304f1f9855',
  ' w-variant-dc7e8987-a344-b981-5809-84a480bbcb55',
]

function Corners() {
  return (
    <div data-stroke="corner" className="g_corner_wrap">
      {cornerVariants.map((v, i) => (
        <div key={i} style={{ '--corner-size': 'var(--corner--small)' } as React.CSSProperties} className={'g_corner_item' + v}>
          <div className={'g_corner_el' + v}></div>
        </div>
      ))}
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" className="u-svg">
      <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}

function ArrowFull({ variant = true }: { variant?: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 33 26" fill="none" aria-hidden="true" className={variant ? 'u-svg w-variant-1c3f028b-116e-d4eb-db7f-8484491bbf2e' : 'u-svg'}>
      <path d="M18 24.8437L31 12.8438L18 0.843749" stroke="currentColor" strokeWidth="var(--border-width--main)" vectorEffect="non-scaling-stroke"></path>
      <path d="M30.5 13L0 13" stroke="currentColor" strokeWidth="var(--border-width--main)" vectorEffect="non-scaling-stroke"></path>
    </svg>
  )
}

function HeroSection() {
  return (
    <section className="hero_wrap u-section">
      <div className="hero_contain u-container">
        <div className="hero_bg_wrap u-position-relative">
          <img src={`${CDN}/6a02f3620c40760e2860843e_e97061c5499d1682adc8bda55768c9b1_about-hero.avif`} loading="lazy" alt="Two cyclists in helmets riding mountain bikes uphill on a rocky trail at dusk." sizes="(max-width: 1920px) 100vw, 1920px" srcSet={`${CDN}/6a02f3620c40760e2860843e_e97061c5499d1682adc8bda55768c9b1_about-hero-p-500.avif 500w, ${CDN}/6a02f3620c40760e2860843e_e97061c5499d1682adc8bda55768c9b1_about-hero-p-800.avif 800w, ${CDN}/6a02f3620c40760e2860843e_e97061c5499d1682adc8bda55768c9b1_about-hero-p-1080.avif 1080w, ${CDN}/6a02f3620c40760e2860843e_e97061c5499d1682adc8bda55768c9b1_about-hero-p-1600.avif 1600w, ${CDN}/6a02f3620c40760e2860843e_e97061c5499d1682adc8bda55768c9b1_about-hero-p-2000.avif 2000w, ${CDN}/6a02f3620c40760e2860843e_e97061c5499d1682adc8bda55768c9b1_about-hero-p-2600.avif 2600w, ${CDN}/6a02f3620c40760e2860843e_e97061c5499d1682adc8bda55768c9b1_about-hero.avif 2880w`} className="u-cover" />
          <div className="hero_bg_overlay">
            <img src={`${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013.png`} loading="lazy" alt="Man in a suit speaking and gesturing with hands in a bright office space." sizes="(max-width: 1920px) 100vw, 1920px" srcSet={`${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013-p-500.avif 500w, ${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013-p-800.avif 800w, ${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013-p-1080.png 1080w, ${CDN}/6a0196a62884cff5bf3ce82a_Rectangle%2013.png 1440w`} className="u-cover" />
          </div>
          <div className="hero_bg_texture">
            <img src={`${CDN}/6a0196f662a60379cd3fce15_texture.avif`} loading="lazy" alt="Black and white pixelated abstract pattern with grid and dot texture over a light background." sizes="(max-width: 1920px) 100vw, 1920px" srcSet={`${CDN}/6a0196f662a60379cd3fce15_texture-p-500.png 500w, ${CDN}/6a0196f662a60379cd3fce15_texture-p-800.png 800w, ${CDN}/6a0196f662a60379cd3fce15_texture-p-1080.png 1080w, ${CDN}/6a0196f662a60379cd3fce15_texture.avif 1440w`} className="u-cover" />
          </div>
        </div>
        <div className="hero_layout">
          <div className="hero_content_wrap">
            <h1 className="hero_content_heading u-text-style-display u-mix-blend-difference">About SKYP</h1>
          </div>
          <div className="hero_time_wrap">
            <p className="hero_time_text u-text-style-main u-color-faded u-secondary-family">
              <span data-hero-element="time">08:00 AM</span>
              <span>, INDIA</span>
            </p>
          </div>
        </div>
      </div>
      <div className="hero_overlay">
        <img src={`${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture.avif`} loading="eager" sizes="(max-width: 2880px) 100vw, 2880px" srcSet={`${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture-p-500.avif 500w, ${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture-p-800.png 800w, ${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture-p-1080.avif 1080w, ${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture-p-1600.avif 1600w, ${CDN}/6a326684e20ccff14d1f110b_615341e4ea439979f5325bf20556ac98_texture.avif 2880w`} alt="" className="hero_overlay-img" />
      </div>
    </section>
  )
}

const statsParagraphClass =
  'c-paragraph w-variant-61d538b2-709c-eb7a-4258-8c0890dc07fc w-richtext u-rich-text u-color-faded-30 u-weight-medium u-line-height-6 u-letter-spacing-loose-2'

function AboutSection() {
  return (
    <section className="about_wrap u-section">
      <div className="about_contain u-container">
        <div className="about_layout">
          <div className="about_top_wrap">
            <div className="about_top_header_wrap">
              <Tag text="WE ARE SNCKD" />
              <h2 data-text-animation="true" className="about_top_header u-text-style-h3 u-text-trim-on u-text-wrap-default u-color-faded">
                <span className="about_header_indent"></span>
                <span>We sit between high-end production and creator culture. Most film productions deliver one final film. Most social agencies deliver fast content without the look. We do neither and both.</span>
              </h2>
            </div>
            <div className="about_top_desc_wrap">
              <div data-number="40" className="c-paragraph w-variant-fdb8e663-01e0-aae6-13eb-e6dfca16b689 w-richtext u-rich-text u-color-faded-30">
                <p>Our roots are in mountainbike, outdoor and adventure sports — the kind of environments where large productions can't operate. That shapes how we work: small units, fast decisions, real understanding of the places and people we film. We don't run an agency. We run a production unit.</p>
                <p></p>
              </div>
            </div>
          </div>
          <div data-odometer-group="" className="about_bottom_wrap u-grid-autofit">
            <div className="about_stats_item">
              <div className="about_stats_line_wrap"><Line /></div>
              <h3 data-odometer-start="0" data-odometer-element="" className="about_stats_number u-text-trim-on">162+</h3>
              <div data-number="32" className={statsParagraphClass}><p>Productions, built to scale.</p></div>
            </div>
            <div className="about_stats_item">
              <div className="about_stats_line_wrap"><Line /></div>
              <h3 data-odometer-start="0" data-odometer-element="" className="about_stats_number u-text-trim-on">19+</h3>
              <div data-number="32" className={statsParagraphClass}><p>Countries. One production standard.</p></div>
            </div>
            <div className="about_stats_item">
              <div className="about_stats_line_wrap"><Line /></div>
              <h3 data-odometer-start="0" data-odometer-element="" className="about_stats_number u-text-trim-on">6</h3>
              <div data-number="32" className={statsParagraphClass}>Years in the field<p></p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VideoSection() {
  return (
    <section className="video_wrap u-section">
      <video src="https://s3.amazonaws.com/webflow-prod-assets/6a017aab5e6bd1ba8a0e742e/6a3baab70dbfac6c8256fb46_Lupine_Website_Loop_compressed.mp4" playsInline autoPlay loop muted preload="metadata" className="u-video"></video>
    </section>
  )
}

const team = [
  {
    name: 'David Karg',
    role: 'Creative Director',
    src: `${CMS}/6a3b9d8d4b7f802500b080b7_DavidKarg.jpg`,
    srcSet: `${CMS}/6a3b9d8d4b7f802500b080b7_DavidKarg-p-500.jpg 500w, ${CMS}/6a3b9d8d4b7f802500b080b7_DavidKarg-p-800.jpg 800w, ${CMS}/6a3b9d8d4b7f802500b080b7_DavidKarg-p-1080.jpg 1080w, ${CMS}/6a3b9d8d4b7f802500b080b7_DavidKarg.jpg 1458w`,
  },
  {
    name: 'Leon Schreiber',
    role: 'Head of Content',
    src: `${CMS}/6a3b9d8493e70dd6ca337a5f_Leon_Schreiber.JPG%20(1).jpeg`,
    srcSet: `${CMS}/6a3b9d8493e70dd6ca337a5f_Leon_Schreiber.JPG%20(1)-p-500.jpeg 500w, ${CMS}/6a3b9d8493e70dd6ca337a5f_Leon_Schreiber.JPG%20(1)-p-800.jpeg 800w, ${CMS}/6a3b9d8493e70dd6ca337a5f_Leon_Schreiber.JPG%20(1)-p-1080.jpeg 1080w, ${CMS}/6a3b9d8493e70dd6ca337a5f_Leon_Schreiber.JPG%20(1)-p-1600.jpeg 1600w, ${CMS}/6a3b9d8493e70dd6ca337a5f_Leon_Schreiber.JPG%20(1)-p-2000.jpeg 2000w, ${CMS}/6a3b9d8493e70dd6ca337a5f_Leon_Schreiber.JPG%20(1).jpeg 2706w`,
  },
  {
    name: 'Michel Büchter',
    role: 'Editor',
    src: `${CMS}/6a3b9d26887d71d100fedcba_Michel_Bu%CC%88chter.jpeg`,
    srcSet: `${CMS}/6a3b9d26887d71d100fedcba_Michel_Bu%CC%88chter-p-500.jpeg 500w, ${CMS}/6a3b9d26887d71d100fedcba_Michel_Bu%CC%88chter-p-800.jpeg 800w, ${CMS}/6a3b9d26887d71d100fedcba_Michel_Bu%CC%88chter.jpeg 1066w`,
  },
  {
    name: 'Janis Kollender',
    role: 'Content Creator',
    src: `${CMS}/6a3b9d1d9155542695417fae_janis%20Kollender.jpg`,
    srcSet: `${CMS}/6a3b9d1d9155542695417fae_janis%20Kollender-p-500.jpg 500w, ${CMS}/6a3b9d1d9155542695417fae_janis%20Kollender-p-800.jpg 800w, ${CMS}/6a3b9d1d9155542695417fae_janis%20Kollender.jpg 1080w`,
  },
  {
    name: 'Korbinian Engstler',
    role: 'Social Media Consultant & Partner',
    src: `${CMS}/6a3b9d04ffb8fde1287e88c5_Korbinian%20Engstler.JPG`,
    srcSet: `${CMS}/6a3b9d04ffb8fde1287e88c5_Korbinian%20Engstler-p-500.jpg 500w, ${CMS}/6a3b9d04ffb8fde1287e88c5_Korbinian%20Engstler-p-800.jpg 800w, ${CMS}/6a3b9d04ffb8fde1287e88c5_Korbinian%20Engstler-p-1080.jpg 1080w, ${CMS}/6a3b9d04ffb8fde1287e88c5_Korbinian%20Engstler-p-1600.jpg 1600w, ${CMS}/6a3b9d04ffb8fde1287e88c5_Korbinian%20Engstler-p-2000.jpg 2000w, ${CMS}/6a3b9d04ffb8fde1287e88c5_Korbinian%20Engstler.JPG 2048w`,
  },
]

function ButtonMain({ label, variant, type, modalTrigger }: { label: string; variant?: string; type: 'button' | 'submit'; modalTrigger?: string }) {
  const v = variant ? ' ' + variant : ''
  return (
    <div data-button={variant ? ' no-transition' : ' '} data-trigger="hover focus" data-hover-btn-40="true" data-modal-trigger={modalTrigger} className={'button_main_wrap' + v}>
      <div data-button-icon="left" className={'button_main_icon_wrap' + v}>
        <div className="button_main_icon"><ArrowIcon /></div>
      </div>
      <div className={'button_main_element' + v}>
        <div aria-hidden="true" className={'button_main_text' + v}>{label}</div>
      </div>
      <div className="clickable_wrap u-cover-absolute">
        <button type={type} aria-label={label} className="clickable_btn"></button>
      </div>
      <div data-button-icon="right" className={'button_main_icon_wrap' + v}>
        <div className="button_main_icon"><ArrowIcon /></div>
      </div>
    </div>
  )
}

function FormField({ label, name, placeholder, type = 'text', hiddenLabel }: { label: string; name: string; placeholder: string; type?: string; hiddenLabel?: boolean }) {
  return (
    <label data-trigger="focus" className="form_label_wrap">
      <span className={hiddenLabel ? 'form_main_label_text w-variant-7a7e1430-cb84-4e7e-fddc-4d66784e148c u-text-trim-on' : 'form_main_label_text u-text-trim-on'}>{label}</span>
      <input type={type} name={name} placeholder={placeholder} required inputMode="text" className="form_main_field" />
      <span data-input-form="error-msg" className="form_main_label_error">Error</span>
    </label>
  )
}

function TeamSection() {
  return (
    <section className="team_wrap u-section">
      <div className="u-embed-css w-embed"></div>
      <div className="team_contain u-container">
        <div className="team_layout">
          <div className="team_top_wrap">
            <Tag text="The Team" />
            <div data-number="58" className="c-paragraph w-variant-fdb8e663-01e0-aae6-13eb-e6dfca16b689 w-richtext u-rich-text u-weight-medium u-line-height-6 u-letter-spacing-loose-2 u-color-faded u-text-wrap-default">
              <p><em>A small crew that delivers everything in-house.From first call to final cut, you work with the same people. No agency layers, no handovers, no lost-in-translation moments.</em></p>
            </div>
          </div>
          <div className="team_list u-grid-autofill">
            <div className="u-display-contents w-dyn-list">
              <div role="list" className="u-display-contents w-dyn-items">
                {team.map((m) => (
                  <div key={m.name} data-stroke="corner-hover" role="listitem" className="team_item w-dyn-item">
                    <div className="team_visual_wrap">
                      <div data-stroke="visual" className="team_visual_img_wrap">
                        <img src={m.src} loading="lazy" alt="" sizes="(max-width: 1920px) 100vw, 1920px" srcSet={m.srcSet} className="u-cover" />
                      </div>
                      <div className="team_visual_corners"><Corners /></div>
                    </div>
                    <div className="team_item_info">
                      <div className="team_item_text u-text-style-h6">{m.name}</div>
                      <div className="team_item_text u-text-style-medium u-color-faded">{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-stroke="corner-hover" className="team_item">
              <div className="team_visual_wrap">
                <div className="team_visual_img_wrap">
                  <img src={`${CDN}/6a031b147c62f536822a293e_Frame%2039719.avif`} loading="lazy" alt="Black question mark symbol centered on a white background." sizes="(max-width: 1920px) 100vw, 1920px" srcSet={`${CDN}/6a031b147c62f536822a293e_Frame%2039719-p-500.avif 500w, ${CDN}/6a031b147c62f536822a293e_Frame%2039719.avif 800w`} className="u-cover" />
                </div>
                <div data-stroke="corner" className="team_visual_corners"><Corners /></div>
              </div>
              <div className="team_item_info">
                <div data-modal-trigger="apply-modal">
                  <ButtonMain label="General Application" type="button" variant="w-variant-6eb05a7b-5c98-294e-8376-07f18bd800a8" modalTrigger="apply-modal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog data-modal-target="apply-modal" data-show-in-designer="false" className="modal_dialog">
        <div className="u-embed-css w-embed"></div>
        <div className="modal_inner">
          <div data-modal-close="" className="modal_backdrop"></div>
          <div className="modal_content">
            <div data-modal-scroll="" className="modal_scroll">
              <div className="modal_slot">
                <div className="apply_modal">
                  <div className="apply_form_block w-form">
                    <form id="wf-form-Apply-Form" name="wf-form-Apply-Form" data-name="Apply Form" method="get" className="apply_form_wrap">
                      <div className="apply_form_col u-grid-autofill">
                        <FormField label="Name" name="Vorname" placeholder="Vorname" />
                        <FormField label="Name" name="Nachname" placeholder="Nachname" hiddenLabel />
                      </div>
                      <FormField label="E-Mail" name="E-Mail" placeholder="Deine Email Adresse" type="email" />
                      <FormField label="Expertise" name="Expertise" placeholder="Spezialisiertes Wissen" />
                      <FormField label="Jahre an Erfahrung" name="Jahre an Erfahrung" placeholder="Dauer des beruflichen Werdegangs" />
                      <div className="w-form-formrecaptcha g-recaptcha g-recaptcha-error g-recaptcha-disabled g-recaptcha-invalid-key"></div>
                      <div className="apply_form_btn_wrap">
                        <ButtonMain label="Einreichen" type="submit" />
                      </div>
                    </form>
                    <div className="w-form-done"><div>Thank you! Your submission has been received!</div></div>
                    <div className="w-form-fail"><div>Oops! Something went wrong while submitting the form.</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-embed-js w-embed w-script"></div>
      </dialog>
    </section>
  )
}

function SliderButton({ dir }: { dir: 'prev' | 'next' }) {
  const variantIcon = dir === 'prev'
  return (
    <div className="testimonial_nav">
      <div data-button=" " data-trigger="hover focus" data-testimonial-slider={`${dir}-btn`} className="button_arrow_wrap w-variant-bb0688d1-65b6-14b6-81e5-21e2cd39bbda">
        <div data-button-icon="left" className="button_arrow_element">
          <div aria-hidden="true" className="button_arrow_icon"><ArrowFull variant={variantIcon} /></div>
        </div>
        <div data-button-icon="right" className="button_arrow_element">
          <div aria-hidden="true" className="button_arrow_icon"><ArrowFull variant={variantIcon} /></div>
        </div>
        <div className="clickable_wrap u-cover-absolute">
          <button type="button" aria-label={dir === 'prev' ? 'Prev' : 'Next'} className="clickable_btn"></button>
        </div>
      </div>
    </div>
  )
}

const testimonials = [
  {
    quote:
      '"What often takes forever in the planning stages of other productions felt like it was implemented instantly with Snacked. Small team, direct communication, quick decisions—and yet an extremely high-quality output. We were particularly impressed by their social-first approach from the very beginning, which resulted in much more usable content than just the classic hero piece."',
    author: 'Benjamin Dieckhoff - Marketing Manager Bike / Consumer Products Fidlock',
  },
  {
    quote:
      '"Working with Snacked is simply a pleasure—they\'re incredibly friendly, uncomplicated, and always open to new ideas. Especially in the area of \u200B\u200Bshort content, they\'re extremely on the cutting edge and deliver outstanding output with an unbelievably high level of technical expertise—both in production and concept development. We also particularly appreciate their approach to the media database and the entire workflow. Highly recommended!"',
    author: 'Jens-Nico - Wiegand Head of Marketing, GONSO',
  },
  {
    quote:
      '"Working with Snacked is extremely efficient, structured, and pleasantly uncomplicated. Compared to other agencies, their speed combined with high content quality is particularly impressive. It\'s simply a pleasure working with the team!"',
    author: 'Martin Schlenker - Head of Marketing Sunlight GmbH',
  },
]

function TestimonialSection() {
  return (
    <section className="testimonial_wrap u-section">
      <div className="testimonial_contain u-container">
        <div className="testimonial_layout">
          <Tag text="UNSERE KUNDEN" />
          <div className="testimonial_content_wrap">
            <div className="testimonial_content_avatar">
              <div className="testimonial_nav_wrap">
                <SliderButton dir="prev" />
                <SliderButton dir="next" />
              </div>
              <div className="testi_avatar_slider w-dyn-list">
                <div role="list" className="testi_avatar_list w-dyn-items">
                  <div role="listitem" className="testi_avatar_item u-inner-border w-dyn-item">
                    <img src={`${CMS}/6a327bd782669940f7fd5a71_benjamindieckhof.jpeg`} loading="lazy" alt="" sizes="100vw" srcSet={`${CMS}/6a327bd782669940f7fd5a71_benjamindieckhof-p-500.jpeg 500w, ${CMS}/6a327bd782669940f7fd5a71_benjamindieckhof.jpeg 800w`} className="testi_avatar_img" />
                  </div>
                  <div role="listitem" className="testi_avatar_item u-inner-border w-dyn-item">
                    <img src={`${CMS}/6a327be380cef09e09b84617_jensnico.jpeg`} loading="lazy" alt="" className="testi_avatar_img" />
                  </div>
                  <div role="listitem" className="testi_avatar_item u-inner-border w-dyn-item">
                    <img src={`${CMS}/6a327bf1ad41f2a408a7337b_MartinSchlenker.jpeg`} loading="lazy" alt="" sizes="100vw" srcSet={`${CMS}/6a327bf1ad41f2a408a7337b_MartinSchlenker-p-500.jpeg 500w, ${CMS}/6a327bf1ad41f2a408a7337b_MartinSchlenker.jpeg 800w`} className="testi_avatar_img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial_slider w-dyn-list">
              <div role="list" className="testimonial_slider_list w-dyn-items">
                {testimonials.map((t) => (
                  <div key={t.author} role="listitem" className="testimonial_item w-dyn-item">
                    <div data-number="60" className="c-paragraph w-variant-93e8af18-8413-e3ac-0442-72629401a3db w-richtext u-rich-text u-line-height-3 u-letter-spacing-tight-1">
                      <p>{t.quote}</p>
                    </div>
                    <Tag text={t.author} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  const poster = `${CDN}%2F6a0edb05580843d25bb70fd6_hero-crop-compressed_poster.0000000.jpg`
  const mp4 = `${CDN}%2F6a0edb05580843d25bb70fd6_hero-crop-compressed_mp4.mp4`
  const webm = `${CDN}%2F6a0edb05580843d25bb70fd6_hero-crop-compressed_webm.webm`
  return (
    <section data-cta-el="wrapper" className="cta_wrap u-section">
      <div className="cta_contain u-container">
        <div className="cta_line_wrap"><Line /></div>
        <div className="cta_layout">
          <div data-cta-el="visual" className="cta_visual_wrap">
            <div
              data-poster-url={poster}
              data-video-urls={`${mp4},${webm}`}
              data-autoplay="true"
              data-loop="true"
              className="u-video w-background-video w-background-video-atom"
              style={{ backgroundImage: `url("${poster}")` }}
            >
              {/* Background video removed from this CTA section. */}
            </div>
          </div>
          <div data-chars-stagger-wrapper="" data-trigger="hover focus" className="button_cta_wrap">
            <div className="button_cta_element">
              <div className="button_cta_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 70 70" fill="none" className="u-svg">
                  <path d="M8.02087 11.668C7.44071 11.668 6.88431 11.8984 6.47407 12.3087C6.06383 12.7189 5.83337 13.2753 5.83337 13.8555V32.8138C5.83337 35.7146 6.98571 38.4966 9.03688 40.5478C11.0881 42.599 13.8701 43.7513 16.7709 43.7513H56.6213L45.7713 54.6013C45.4013 54.9721 45.1765 55.4633 45.138 55.9857C45.0995 56.5081 45.2497 57.0269 45.5613 57.448L45.7713 57.693C46.1418 58.0642 46.6334 58.2899 47.1565 58.329C47.6796 58.3681 48.1993 58.2179 48.6209 57.9059L48.8659 57.693L63.4492 43.1096C63.8197 42.7393 64.0449 42.2482 64.084 41.7258C64.1231 41.2034 63.9734 40.6843 63.6621 40.263L63.4492 40.018L48.8659 25.4346C48.475 25.0468 47.9523 24.8207 47.4021 24.8013C46.8519 24.7819 46.3146 24.9708 45.8974 25.3301C45.4803 25.6894 45.214 26.1929 45.1517 26.7399C45.0894 27.2869 45.2356 27.8374 45.5613 28.2813L45.7713 28.5263L56.6213 39.3763H16.765C15.1027 39.3758 13.5025 38.7444 12.2876 37.6096C11.0728 36.4749 10.3338 34.9214 10.22 33.263L10.2025 32.8138V13.8555C10.2025 13.2753 9.97207 12.7189 9.56183 12.3087C9.15159 11.8984 8.59519 11.668 8.01503 11.668" fill="currentColor"></path>
                </svg>
              </div>
              <div data-chars-stagger="" className="button_cta_text">Become a partner</div>
              <div className="button_cta_line"></div>
            </div>
            <div className="clickable_wrap u-cover-absolute">
              <Link aria-label="" to="/contact" className="clickable_link w-inline-block"></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="page_main">
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <TeamSection />
      <TestimonialSection />
      <CtaSection />
    </main>
  )
}
